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
  FileSignature
} from "lucide-react";

export default function CybersecuritySOCSIEM() {
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
  // INTERACTIVE CHECKPOINT (LESSON 1 & LESSON 2)
  // ---------------------------------------------------------------------------
  const [checkpoint1Answer, setCheckpoint1Answer] = useState(null);
  const [checkpoint1Submitted, setCheckpoint1Submitted] = useState(false);

  const [checkpoint2Answer, setCheckpoint2Answer] = useState(null);
  const [checkpoint2Submitted, setCheckpoint2Submitted] = useState(false);

  // ---------------------------------------------------------------------------
  // LAB 1: LOG NORMALIZER & EVENT PARSER
  // ---------------------------------------------------------------------------
  const [lab1Normalized, setLab1Normalized] = useState(false);
  const [lab1Filter, setLab1Filter] = useState("all");

  const lab1RawEvents = [
    { time: "09:10:00", source: "identity", user: "analyst01", event: "login", result: "failed", category: "auth" },
    { time: "09:10:18", source: "identity", user: "analyst01", event: "login", result: "failed", category: "auth" },
    { time: "09:11:05", source: "identity", user: "analyst01", event: "login", result: "success", category: "auth" },
    { time: "09:12:10", source: "cloud-audit", user: "analyst01", event: "role_assignment", result: "success", category: "admin" },
    { time: "09:14:33", source: "endpoint", user: "host-07", event: "process_alert", result: "detected", category: "alert" },
    { time: "09:16:00", source: "identity", user: "admin02", event: "change_review", result: "approved", category: "audit" }
  ];

  // ---------------------------------------------------------------------------
  // LAB 2: SIEM DETECTION DESIGN & TEST MATRIX
  // ---------------------------------------------------------------------------
  const [lab2WindowMinutes, setLab2WindowMinutes] = useState(15);
  const [lab2ExclusionsEnabled, setLab2ExclusionsEnabled] = useState(true);
  const [lab2Tested, setLab2Tested] = useState(false);

  const lab2TestCases = [
    { id: "TC-B1", desc: "Standard developer login during shift followed by regular code commit", type: "benign", match: false },
    { id: "TC-B2", desc: "IT admin approved maintenance ticket modifying IAM with change token", type: "benign", match: false },
    { id: "TC-B3", desc: "CI/CD automated runner assuming deployment role via pre-approved OIDC", type: "benign", match: false },
    { id: "TC-S1", desc: "3 failed logins followed by success and immediate role escalation to Administrator", type: "suspicious", match: true },
    { id: "TC-S2", desc: "Off-hours login from new ASN assigning S3 full access without ticket", type: "suspicious", match: true },
    { id: "TC-S3", desc: "Helpdesk user account adding self to Domain Admins followed by PowerShell beacon", type: "suspicious", match: true }
  ];

  // ---------------------------------------------------------------------------
  // LAB 3: SIEM ALERT INVESTIGATION
  // ---------------------------------------------------------------------------
  const [lab3Verdict, setLab3Verdict] = useState(null);
  const [lab3Confidence, setLab3Confidence] = useState("Medium");
  const [lab3NoteGenerated, setLab3NoteGenerated] = useState(false);

  // ---------------------------------------------------------------------------
  // LAB 4: INCIDENT RESPONSE TABLETOP
  // ---------------------------------------------------------------------------
  const [tabletopStep, setTabletopStep] = useState(1);
  const [tabletopDecisions, setTabletopDecisions] = useState({});

  // ---------------------------------------------------------------------------
  // LAB 5: DIGITAL FORENSICS EVIDENCE & CHAIN OF CUSTODY
  // ---------------------------------------------------------------------------
  const [forensicEvidenceList, setForensicEvidenceList] = useState([
    { id: "PS20-E01", desc: "Synthetic Authentication Log (JSON)", source: "Identity Service", hash: "a89f3...e21", custody: "SOC Vault 1" },
    { id: "PS20-E02", desc: "Synthetic Endpoint Sysmon Export", source: "Host-07 EDR Agent", hash: "41cb9...9f0", custody: "SOC Vault 1" },
    { id: "PS20-E03", desc: "CloudTrail Audit Records (GZ)", source: "AWS CloudTrail S3", hash: "89e1a...114", custody: "SOC Vault 1" },
    { id: "PS20-E04", desc: "Analyst Working Timeline", source: "Investigator Workspace", hash: "7d01c...a42", custody: "Working Copy" }
  ]);
  const [evidenceVerified, setEvidenceVerified] = useState(false);

  // ---------------------------------------------------------------------------
  // LAB 6: 30-DAY LOGGING ROADMAP
  // ---------------------------------------------------------------------------
  const [roadmapToggles, setRoadmapToggles] = useState({
    identityMFA: true,
    cloudAudit: true,
    edrProcess: false,
    dnsLookups: false,
    ntpSync: false,
    immutableRetention: false
  });

  // ---------------------------------------------------------------------------
  // READINESS CHECKLIST (9 ITEMS)
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false,
    c7: false,
    c8: false,
    c9: false
  });

  const toggleChecklist = (k) => {
    setChecklist((prev) => ({ ...prev, [k]: !prev[k] }));
  };

  const resetChecklist = () => {
    setChecklist({
      c1: false,
      c2: false,
      c3: false,
      c4: false,
      c5: false,
      c6: false,
      c7: false,
      c8: false,
      c9: false
    });
  };

  const checklistCompletedCount = Object.values(checklist).filter(Boolean).length;

  // ---------------------------------------------------------------------------
  // QUIZ STATE (6 QUESTIONS)
  // ---------------------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      q: "1. What is the primary purpose of a SIEM?",
      options: [
        "Replace all endpoint and network security controls.",
        "Centralize and analyze security-related data to support detection and investigation.",
        "Automatically prove whether every alert is malicious.",
        "Store only firewall logs and ignore other sources."
      ],
      correct: 1,
      rationale:
        "A SIEM centralizes, parses, normalizes, and correlates log telemetry from disparate sources (endpoints, cloud, identity, networks) to provide visibility, trigger detections, and facilitate investigations."
    },
    {
      id: 2,
      q: "2. An alert shows repeated failed logins followed by a successful login. What is the best next step?",
      options: [
        "Declare a confirmed compromise without further checks.",
        "Delete the account immediately without checking its role or dependencies.",
        "Correlate authentication, identity, device and related activity, then assess the evidence.",
        "Disable authentication logging to prevent more alerts."
      ],
      correct: 2,
      rationale:
        "SOC analysts must gather contextual telemetry (IP address, geolocation, user agent, MFA prompt result, and subsequent activity) to differentiate a user mistyping a password from an unauthorized credential-stuffing intrusion."
    },
    {
      id: 3,
      q: "3. Why is time synchronization important in investigations?",
      options: [
        "It helps establish an accurate order of events across different systems.",
        "It eliminates the need to preserve original logs.",
        "It guarantees that all events are related.",
        "It automatically removes false positives."
      ],
      correct: 0,
      rationale:
        "Without reliable time synchronization (such as UTC normalization via NTP), establishing the causal sequence between an authentication failure, role change, and command execution across distributed hosts becomes impossible."
    },
    {
      id: 4,
      q: "4. What is the primary purpose of a chain-of-custody record?",
      options: [
        "Rank detection rules by severity.",
        "Prove that the content of every evidence item is malicious.",
        "Replace evidence-integrity checks.",
        "Track who collected, handled, transferred and stored evidence."
      ],
      correct: 3,
      rationale:
        "Chain of custody provides an unbroken, auditable trail documenting the acquisition, transfer, storage, and handling of digital evidence, ensuring its legal integrity and admissibility."
    },
    {
      id: 5,
      q: "5. What should a detection engineer do about an overly noisy SIEM rule?",
      options: [
        "Delete all logs from the affected source.",
        "Analyze false positives, validate data and tune the rule against benign and suspicious test cases.",
        "Raise the threshold until the rule never alerts.",
        "Assume all alerts are true positives."
      ],
      correct: 1,
      rationale:
        "Alert fatigue blinds SOC analysts. Detection engineers must inspect false positive patterns, identify legitimate baseline noise, add precise filter exclusions, and test the updated logic against synthetic test datasets."
    },
    {
      id: 6,
      q: "6. Which statement best describes incident response?",
      options: [
        "It begins and ends with deleting suspicious files.",
        "It is only relevant after data has been publicly disclosed.",
        "It coordinates preparation, detection, analysis, containment, eradication, recovery and improvement.",
        "It is the same as logging and requires no communication plan."
      ],
      correct: 2,
      rationale:
        "Incident response (per NIST SP 800-61 Rev. 3 and NIST CSF 2.0) is a comprehensive organizational lifecycle spanning preparation, detection, analysis, containment, eradication, recovery, and continuous post-incident learning."
    }
  ];

  const handleSelectQuiz = (qid, idx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qid]: idx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 antialiased font-sans relative pb-20 selection:bg-orange-500 selection:text-white">
      {/* Ambient background glow accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-200/25 blur-[100px]" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-orange-200/25 blur-[90px]" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-amber-200/20 blur-[90px]" />
      </div>

      {/* Top Universal Track Navigation */}
      <ModuleNav track="cybersecurity" currentModuleId="soc-siem" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* ========================================================================= */}
        {/* HERO CARD                                                                */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white/80 p-6 md:p-10 backdrop-blur-md shadow-xs mb-8 transition-all">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200 uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5 text-blue-700" />
                Module 20 &bull; Defensive Operations &amp; Forensics
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                Intermediate to Advanced
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#ea580c] border border-orange-200">
                10–12 Hours
              </span>
            </div>
            <div className="text-xs font-mono text-stone-600 bg-stone-50 border border-stone-200 px-3 py-1 rounded-xl">
              NIST SP 800-61 Rev. 3 (2025) &bull; CISA SIEM/SOAR &bull; SP 800-86
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Security Monitoring, SIEM, Incident Response, and Digital Forensics Fundamentals
          </h1>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed max-w-4xl mb-6">
            Security controls cannot prevent every intrusion. Master the four core defensive pillars:
            continuous telemetry monitoring, SIEM log correlation and parsing, NIST-standardized incident
            response orchestration, and defensible digital forensics.
          </p>

          {/* Quick Stats / Meta Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-200/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-stone-600 uppercase tracking-wider">SOC Operations</p>
                <p className="text-xs font-bold text-stone-900">Alert Triage &amp; Telemetry</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-orange-50 border border-orange-100 text-[#ea580c]">
                <FileCode className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-stone-600 uppercase tracking-wider">SIEM Pipeline</p>
                <p className="text-xs font-bold text-stone-900">Parsing &amp; Normalization</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-red-50 border border-red-100 text-red-600">
                <Workflow className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-stone-600 uppercase tracking-wider">Incident Response</p>
                <p className="text-xs font-bold text-stone-900">NIST SP 800-61 Rev. 3</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600">
                <FileSignature className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-stone-600 uppercase tracking-wider">Digital Forensics</p>
                <p className="text-xs font-bold text-stone-900">Chain of Custody &amp; Hashes</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB CONTROLS (THEORY, LABS, CASE STUDY, QUIZ, CAPSTONE)                  */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "theory", label: "Lessons (1–9)", icon: BookOpen },
            { id: "labs", label: "Interactive Labs & Checklist (6)", icon: Terminal },
            { id: "case-study", label: "Multi-Source Alert Case Study", icon: ShieldAlert },
            { id: "quiz", label: "Knowledge Check Quiz", icon: HelpCircle },
            { id: "capstone", label: "Final Capstone Project", icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#18181b] text-white shadow-xs"
                    : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#ea580c]" : "text-stone-600"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: THEORY / LESSONS 1 TO 9                                            */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar / Lesson Navigation */}
            <div className="lg:col-span-1 space-y-2">
              <div className="p-4 rounded-3xl bg-white border border-stone-200 shadow-xs sticky top-6">
                <p className="text-xs font-mono font-bold text-stone-600 uppercase tracking-wider mb-3">
                  Module Curriculum
                </p>
                <div className="space-y-1">
                  {[
                    { num: 1, title: "1. Security Monitoring & the SOC" },
                    { num: 2, title: "2. Logs & Telemetry Foundations" },
                    { num: 3, title: "3. SIEM Architecture & Pipelines" },
                    { num: 4, title: "4. Alert Triage & Threat Detection" },
                    { num: 5, title: "5. SOAR & Incident Response" },
                    { num: 6, title: "6. Digital Forensics Fundamentals" },
                    { num: 7, title: "7. Timelines & Incident Reconstruction" },
                    { num: 8, title: "8. Threat Hunting & SOC Metrics" },
                    { num: 9, title: "9. Incident Reporting & Conclusions" }
                  ].map((l) => (
                    <button
                      key={l.num}
                      onClick={() => setActiveLesson(l.num)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                        activeLesson === l.num
                          ? "bg-orange-50 text-[#ea580c] font-bold border border-orange-200"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="truncate">{l.title}</span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${activeLesson === l.num ? "text-[#ea580c]" : "text-stone-600"}`} />
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200">
                  <div className="p-3 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] text-[11px] text-stone-600 leading-relaxed">
                    <p className="font-bold text-stone-800 mb-1 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                      Suggested Time: 10–12h
                    </p>
                    Aligned with NIST SP 800-61 Rev. 3 (finalized April 2025), CISA SIEM/SOAR guidelines, and NIST SP 800-86.
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Body Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* LESSON 1 */}
              {activeLesson === 1 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 1
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Security Monitoring and the SOC
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <h3 className="text-base font-bold text-stone-900">1.1 What is Security Monitoring?</h3>
                    <p>
                      Security monitoring is the continuous collection, review, and contextual analysis of system, network,
                      and identity activity to discover active threats, policy violations, and suspicious behaviors.
                    </p>
                    <p>
                      A single isolated event rarely tells the full story. An authentication failure may be benign.
                      However, ten authentication failures followed by a successful sign-in from an unapproved ASN, an immediate
                      IAM role privilege escalation, and a bulk database query indicates a severe account compromise.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">1.2 The Security Operations Center (SOC)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1 font-bold">1. Monitoring</strong>
                        <p className="text-stone-600">Review 24/7 telemetry streams, dashboards, and automated correlation alerts.</p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1 font-bold">2. Investigation</strong>
                        <p className="text-stone-600">Correlate event records across endpoints, cloud, identity, and network sensors.</p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1 font-bold">3. Response</strong>
                        <p className="text-stone-600">Coordinate authorized containment, credential revocations, and system eradication.</p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1 font-bold">4. Improvement</strong>
                        <p className="text-stone-600">Tune noisy detection logic, eliminate visibility gaps, and update playbooks.</p>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">1.3 Typical SOC Responsibilities</h3>
                    <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                          <tr>
                            <th className="p-3">Responsibility</th>
                            <th className="p-3">Main Activity</th>
                            <th className="p-3">Defensive Outcome</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-600">
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Continuous Monitoring</td>
                            <td className="p-3">Review high-fidelity telemetry and SIEM alerts</td>
                            <td className="p-3">Identify suspicious authentication anomalies in real time</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Alert Triage</td>
                            <td className="p-3">Filter noise, enrich records, and prioritize true positives</td>
                            <td className="p-3">Escalate credible account takeovers immediately</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Investigation</td>
                            <td className="p-3">Trace process ancestry, user sessions, and network flows</td>
                            <td className="p-3">Reconstruct exact intrusion chronology and affected assets</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Incident Coordination</td>
                            <td className="p-3">Liaise with IT, cloud engineers, legal, and business owners</td>
                            <td className="p-3">Isolate patient-zero without disrupting critical production services</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Threat Hunting</td>
                            <td className="p-3">Proactively search telemetry for unalerted adversary TTPs</td>
                            <td className="p-3">Discover stealthy persistence mechanisms across fleet</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Detection Engineering</td>
                            <td className="p-3">Write, test, and maintain Sigma and SIEM correlation rules</td>
                            <td className="p-3">Close detection gaps and minimize false positive alert fatigue</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">1.4 Security Event, Signal, Alert, and Incident</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold mb-1">Event</strong>
                        <p className="text-stone-600">Any observable occurrence in a system (e.g., user signs in, file created).</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold mb-1">Security Signal</strong>
                        <p className="text-stone-600">An event with security relevance (e.g., repeated login failures from foreign IP).</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold mb-1">Alert</strong>
                        <p className="text-stone-600">A system-generated notification triggered by detection rule thresholds.</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-red-50 border border-red-200 text-red-950">
                        <strong className="block font-bold mb-1">Incident</strong>
                        <p className="text-stone-600">A confirmed event or sequence requiring coordinated emergency response.</p>
                      </div>
                    </div>

                    {/* Interactive Checkpoint */}
                    <div className="mt-6 p-4 rounded-2xl bg-orange-50/60 border border-orange-200 text-xs space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                        <strong className="text-stone-900 text-sm">Checkpoint: The Triaging Mindset</strong>
                      </div>
                      <p className="text-stone-700">
                        A SIEM rule generates a Medium severity alert: &quot;Multiple failed logins followed by a successful login for user <code>analyst01</code>.&quot; What is the analyst&apos;s correct initial action?
                      </p>
                      <div className="space-y-1.5">
                        {[
                          "Immediately lock the user account and delete all corporate access tokens.",
                          "Ignore the alert because successful logins indicate the user remembered their password.",
                          "Review authentication context, verify IP provenance, check for MFA prompts, and inspect subsequent commands.",
                          "Disable the SIEM rule to prevent duplicate notifications."
                        ].map((opt, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setCheckpoint1Answer(idx);
                              setCheckpoint1Submitted(true);
                            }}
                            className={`w-full text-left p-2.5 rounded-xl border text-xs transition cursor-pointer ${
                              checkpoint1Answer === idx
                                ? idx === 2
                                  ? "bg-emerald-100 border-emerald-300 text-emerald-950 font-semibold"
                                  : "bg-red-100 border-red-300 text-red-950 font-semibold"
                                : "bg-white border-stone-200 hover:border-stone-300 text-stone-700"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {checkpoint1Submitted && (
                        <div className={`p-2.5 rounded-xl text-xs font-medium ${checkpoint1Answer === 2 ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"}`}>
                          {checkpoint1Answer === 2
                            ? "Correct! Triage requires enriching the alert with contextual telemetry (IP, user agent, MFA token, subsequent process activity) before deciding to escalate or close."
                            : "Incorrect. Never jump to premature containment without investigating context, nor ignore potential credential compromise."}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 2 */}
              {activeLesson === 2 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 2
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Logs and Telemetry: The Foundation of Monitoring
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      A log is a recorded event generated by an operating system, network device, application, or security sensor.
                      High-quality logging requires standardized time conventions, sufficient forensic fields, and tamper-resistant storage.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">2.1 Anatomy of a Structured Log (JSON)</h3>
                    <div className="relative">
                      <pre className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
{`{
  "timestamp": "2026-10-22T09:14:32Z",
  "source": "identity-provider",
  "event_type": "authentication",
  "user": "analyst01",
  "source_ip": "203.0.113.25",
  "auth_method": "fido2_webauthn",
  "result": "failure",
  "reason": "invalid_credentials",
  "session_id": "sess_89a01f92c10b",
  "geo": { "country": "US", "city": "Seattle" }
}`}
                      </pre>
                      <button
                        onClick={() =>
                          handleCopy(
                            "jsonLog",
                            `{\n  "timestamp": "2026-10-22T09:14:32Z",\n  "source": "identity-provider",\n  "event_type": "authentication",\n  "user": "analyst01",\n  "source_ip": "203.0.113.25",\n  "auth_method": "fido2_webauthn",\n  "result": "failure",\n  "reason": "invalid_credentials"\n}`
                          )
                        }
                        className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs flex items-center gap-1 cursor-pointer"
                      >
                        {copiedSnippets["jsonLog"] ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSnippets["jsonLog"] ? "Copied" : "Copy"}</span>
                      </button>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">2.2 High-Value Log Sources (CISA Practitioner Guidance May 2025)</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold mb-1">Identity &amp; Cloud IAM</strong>
                        <span className="text-stone-600">Azure AD/Okta sign-ins, MFA challenges, role additions, AWS CloudTrail management events.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold mb-1">Endpoint OS &amp; Sysmon</strong>
                        <span className="text-stone-600">Process creation (Event 1), network connects (Event 3), driver loads (Event 6), PowerShell 4104.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold mb-1">Network &amp; Perimeter</strong>
                        <span className="text-stone-600">Next-Gen Firewall allows/denies, DNS query logs, VPN session authentications, proxy flows.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold mb-1">Kubernetes &amp; Containers</strong>
                        <span className="text-stone-600">K8s API server audit events, exec commands into pods, daemonset lifecycle changes.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold mb-1">Email Gateway</strong>
                        <span className="text-stone-600">Inbound phishing scores, macro attachment quarantines, SPF/DKIM/DMARC verdicts.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold mb-1">Backup Infrastructure</strong>
                        <span className="text-stone-600">Backup repository deletion attempts, snapshot retention alterations, WORM policy changes.</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">2.3 Time Synchronization &amp; Clock Skew</h3>
                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs space-y-2">
                      <strong className="font-bold flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-amber-700" /> Why Clock Synchronization is Essential
                      </strong>
                      <p className="leading-relaxed">
                        If an endpoint clock drifts by just 2 minutes, process execution at 09:14:00 may appear to precede
                        an authentication event recorded at 09:15:30 on the identity server. Organizations must enforce Network Time
                        Protocol (NTP) across all infrastructure and normalize all ingested logs to UTC.
                      </p>
                    </div>

                    {/* Interactive Checkpoint 2 */}
                    <div className="mt-6 p-4 rounded-2xl bg-orange-50/60 border border-orange-200 text-xs space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                        <strong className="text-stone-900 text-sm">Checkpoint: The Role of Timestamps</strong>
                      </div>
                      <p className="text-stone-700">
                        Why are UTC-normalized timestamps critical when authoring a forensic incident report?
                      </p>
                      <div className="space-y-1.5">
                        {[
                          "They establish the causal chronology of adversary actions across disparate distributed systems.",
                          "They automatically eliminate the need to preserve original raw disk images.",
                          "They guarantee that an attacker cannot delete log files.",
                          "They encrypt network packets to prevent eavesdropping."
                        ].map((opt, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setCheckpoint2Answer(idx);
                              setCheckpoint2Submitted(true);
                            }}
                            className={`w-full text-left p-2.5 rounded-xl border text-xs transition cursor-pointer ${
                              checkpoint2Answer === idx
                                ? idx === 0
                                  ? "bg-emerald-100 border-emerald-300 text-emerald-950 font-semibold"
                                  : "bg-red-100 border-red-300 text-red-950 font-semibold"
                                : "bg-white border-stone-200 hover:border-stone-300 text-stone-700"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {checkpoint2Submitted && (
                        <div className={`p-2.5 rounded-xl text-xs font-medium ${checkpoint2Answer === 0 ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"}`}>
                          {checkpoint2Answer === 0
                            ? "Correct! Timestamps allow investigators to build accurate attack timelines and correlate cross-platform events."
                            : "Incorrect. Timestamps reconstruct timeline sequence; they do not replace raw forensics or prevent file deletion."}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 3 */}
              {activeLesson === 3 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 3
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      SIEM Architecture and Core Concepts
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      A Security Information and Event Management (SIEM) engine ingests millions of events per second,
                      normalizes conflicting schemas, enriches records with asset context, and applies correlation logic.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">3.1 SIEM vs. Adjacent Technologies</h3>
                    <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                          <tr>
                            <th className="p-3">Technology</th>
                            <th className="p-3">Primary Architectural Role</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-600">
                          <tr>
                            <td className="p-3 font-bold text-stone-900">SIEM</td>
                            <td className="p-3">Centralized cross-source log correlation, detection rules, analytics, and historical indexing</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">EDR (Endpoint Detection &amp; Response)</td>
                            <td className="p-3">Deep agent telemetry on workstations/servers; behavioral process killing and network isolation</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">XDR (Extended Detection &amp; Response)</td>
                            <td className="p-3">Vendor-unified ecosystem correlating native telemetry across endpoint, cloud, email, and identity</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">SOAR (Orchestration &amp; Automation)</td>
                            <td className="p-3">Automated playbooks executing API-driven workflows (e.g., ticket creation, account suspension)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">3.2 The SIEM Data Pipeline</h3>
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0">1</span>
                        <span><strong>Ingestion &amp; Transport:</strong> Syslog, HTTP Event Collector (HEC), CloudWatch, Event Hubs.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0">2</span>
                        <span><strong>Parsing &amp; Extraction:</strong> Regular expressions, grok patterns, and JSON key extractors.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0">3</span>
                        <span><strong>Normalization:</strong> Mapping fields to standards like Open Cybersecurity Schema Framework (OCSF) or Elastic Common Schema (ECS).</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0">4</span>
                        <span><strong>Enrichment:</strong> Adding CMDB asset ownership, GeoIP lookup, threat intel feed matches.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0">5</span>
                        <span><strong>Correlation &amp; Alerting:</strong> Sliding-time-window queries evaluating threshold and sequence conditions.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 4 */}
              {activeLesson === 4 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 4
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Alert Triage, Correlation, and Threat Detection
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      Alert triage determines what requires immediate escalation versus what represents benign baseline noise.
                      Modern detection models (such as MITRE ATT&amp;CK v18 Detection Strategies, introduced October 2025)
                      emphasize behavioral analytics over fragile atomic indicators.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">4.1 The 5-Step Alert Triage Workflow</h3>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">1. Validate</strong>
                        <span className="text-stone-600">Verify rule logic, affected host/user, and timestamps.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">2. Add Context</strong>
                        <span className="text-stone-600">Determine asset tier, user department, and normal hours.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">3. Correlate</strong>
                        <span className="text-stone-600">Search preceding and succeeding activity across all sources.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">4. Assess Priority</strong>
                        <span className="text-stone-600">Score severity &times; confidence &times; asset criticality.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">5. Decide &amp; Act</strong>
                        <span className="text-stone-600">Close with evidence or trigger incident response playbook.</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">4.2 False Positives vs False Negatives</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                        <strong className="block mb-1 font-bold">True Positive (TP)</strong>
                        <span>Real adversary attack accurately flagged by detection.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-950">
                        <strong className="block mb-1 font-bold">False Positive (FP)</strong>
                        <span>Benign business action incorrectly alerted as malicious.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-950">
                        <strong className="block mb-1 font-bold">False Negative (FN)</strong>
                        <span>Real intrusion occurred undetected (visibility blindspot).</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-700">
                        <strong className="block mb-1 font-bold">True Negative (TN)</strong>
                        <span>Normal benign operations silently permitted without alerts.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 5 */}
              {activeLesson === 5 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 5
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Security Orchestration and Incident Response (NIST SP 800-61 Rev. 3)
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      Published in April 2025, <strong>NIST SP 800-61 Rev. 3</strong> integrates incident response directly
                      into the NIST Cybersecurity Framework 2.0 (CSF 2.0) functions: <em>Govern, Identify, Protect, Detect, Respond, and Recover</em>.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">5.1 The Practical IR Lifecycle</h3>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">1</span>
                        <div>
                          <strong className="text-stone-900">Preparation &amp; Governance:</strong>
                          <span className="text-stone-600"> Escalation matrices, emergency change authorities, tool provisioning, and communication channels.</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                        <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">2</span>
                        <div>
                          <strong className="text-stone-900">Detection &amp; Analysis:</strong>
                          <span className="text-stone-600"> Triage signals, validate true intrusion scope, identify patient-zero, and preserve evidence.</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                        <span className="px-2 py-0.5 rounded bg-orange-100 text-[#ea580c] font-bold">3</span>
                        <div>
                          <strong className="text-stone-900">Containment:</strong>
                          <span className="text-stone-600"> Halt lateral movement via network isolation, credential resets, and session termination.</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                        <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold">4</span>
                        <div>
                          <strong className="text-stone-900">Eradication:</strong>
                          <span className="text-stone-600"> Remove webshells, eliminate persistence autoruns, patch exploited CVEs, and purge attacker implants.</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">5</span>
                        <div>
                          <strong className="text-stone-900">Recovery:</strong>
                          <span className="text-stone-600"> Restore systems from clean golden images or immutable backups; test in isolated staging first.</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                        <span className="px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-bold">6</span>
                        <div>
                          <strong className="text-stone-900">Post-Incident Review:</strong>
                          <span className="text-stone-600"> Conduct blameless post-mortem, document lessons learned, and implement permanent detection rules.</span>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">5.2 SOAR Playbook Guardrails: Automated vs Human Approval</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                        <strong className="block mb-1 font-bold">Safe for 100% Automation</strong>
                        <p className="text-stone-600">
                          Enriching IP address with WHOIS data, querying VirusTotal for file hashes, opening tickets in Jira/ServiceNow, gathering user recent login history.
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950">
                        <strong className="block mb-1 font-bold">Requires Explicit Human Approval</strong>
                        <p className="text-stone-600">
                          Severing core database network links, revoking corporate identity provider SSO certificates, terminating production kubernetes clusters, blocking executive accounts.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 6 */}
              {activeLesson === 6 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 6
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Digital Forensics Fundamentals (NIST SP 800-86)
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      Digital forensics is the disciplined identification, collection, preservation, examination, and
                      analysis of digital evidence. Forensic conclusions must be scientifically reproducible and legally defensible.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">6.1 Volatile vs Non-Volatile Order of Volatility (RFC 3227)</h3>
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1.5 font-mono">
                      <div>1. CPU Registers and Cache state (Most volatile &mdash; disappears in nanoseconds)</div>
                      <div>2. Routing tables, ARP cache, Process table, Kernel memory statistics</div>
                      <div>3. Temporary system memory (RAM / Volatile physical memory)</div>
                      <div>4. Temporary file systems, swap space, pagefiles</div>
                      <div>5. Non-volatile disk media (HDDs, SSDs, VMDK virtual disks)</div>
                      <div>6. Remote logging records and physical network topology</div>
                      <div>7. Archival backup media and immutable tapes (Least volatile)</div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">6.2 Forensic Imaging and Cryptographic Hashes</h3>
                    <p className="text-xs text-stone-600">
                      Never conduct analysis on original evidence. Always generate a bit-stream physical image (e.g. <code>.E01</code> or raw <code>.dd</code>)
                      using write-blocking hardware, verify SHA-256 integrity, and work strictly on verified working copies:
                    </p>
                    <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
                      # Compute SHA-256 on evidence image<br />
                      sha256sum host07_memory.raw &gt; host07_memory.raw.sha256
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 7 */}
              {activeLesson === 7 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 7
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Building Timelines and Reconstructing an Incident
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      An investigation brings together disparate records from multiple systems. Building an accurate
                      super-timeline reconstructs adversary movement while highlighting gaps in data collection.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">7.1 Facts, Interpretations, and Hypotheses</h3>
                    <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                          <tr>
                            <th className="p-3">Level of Statement</th>
                            <th className="p-3">Definition</th>
                            <th className="p-3">Example in Investigation</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-600">
                          <tr>
                            <td className="p-3 font-bold text-emerald-700">Observed Fact</td>
                            <td className="p-3">Directly recorded in immutable logs with verified timestamps</td>
                            <td className="p-3">At 09:12:02 UTC, user analyst01 signed in from IP 203.0.113.25</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-blue-700">Analytical Interpretation</td>
                            <td className="p-3">Logical correlation linking multiple independent facts</td>
                            <td className="p-3">The login preceded a privileged role modification by 2 minutes</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-amber-700">Investigation Hypothesis</td>
                            <td className="p-3">Plausible theory requiring further evidence to validate or reject</td>
                            <td className="p-3">The credentials were stolen via an earlier unmonitored phishing campaign</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 8 */}
              {activeLesson === 8 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 8
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Threat Hunting and SOC Metrics
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      Threat hunting is the proactive search for adversary behavior that bypassed automated SIEM rules.
                      Hypothesis-driven hunts reveal missing logging capabilities and lead to new detection rules.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">8.1 Key SOC Performance Metrics</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold font-mono">MTTD</strong>
                        <span className="text-stone-600">Mean Time to Detect security compromise.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold font-mono">MTTA</strong>
                        <span className="text-stone-600">Mean Time to Acknowledge fired SIEM alert.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold font-mono">MTTC</strong>
                        <span className="text-stone-600">Mean Time to Contain active threat lateral spread.</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block font-bold font-mono">MTTR</strong>
                        <span className="text-stone-600">Mean Time to Recover business operations cleanly.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 9 */}
              {activeLesson === 9 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 9
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Incident Reporting and Investigation Conclusions
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      A professional incident report communicates technical findings, business impacts, and permanent
                      remediation actions to both executive leadership and technical engineers.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">9.1 Recommended Report Structure</h3>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">1. Executive Summary:</strong>
                        <p className="text-stone-600">High-level narrative explaining what happened, business operations affected, root cause, and current containment status in non-jargon language.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">2. Scope &amp; Evidence Register:</strong>
                        <p className="text-stone-600">Documented list of affected systems, accounts, data repositories, evidence hashes, and chain-of-custody references.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">3. Detailed Chronological Timeline:</strong>
                        <p className="text-stone-600">Normalized UTC timeline tracing initial access, privilege escalation, lateral hops, and response containment actions.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">4. Findings, Gaps &amp; Confidence:</strong>
                        <p className="text-stone-600">Separation of verified facts, analytical deductions, and documented visibility blind spots.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">5. Remediation &amp; Retesting Plan:</strong>
                        <p className="text-stone-600">Corrective controls assigned to owners with specific retesting criteria to ensure vulnerabilities cannot recur.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation between lessons */}
              <div className="flex items-center justify-between pt-4">
                <button
                  disabled={activeLesson === 1}
                  onClick={() => setActiveLesson((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-200 bg-white text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50 transition cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Lesson</span>
                </button>
                <span className="text-xs font-mono text-stone-600">Lesson {activeLesson} of 9</span>
                <button
                  disabled={activeLesson === 9}
                  onClick={() => setActiveLesson((prev) => Math.min(9, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#ea580c] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-orange-600 transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Next Lesson</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE LABS & CHECKLIST                                       */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            {/* Lab 1 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 1 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">Log Analysis and Event Normalization</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Beginner &ndash; Intermediate
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                Normalize conflicting CSV log records into a standardized unified schema. Filter by event category and identify potential security risks.
              </p>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex gap-1.5">
                    {["all", "auth", "admin", "alert"].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setLab1Filter(cat)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold cursor-pointer ${
                          lab1Filter === cat ? "bg-[#ea580c] text-white" : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                        }`}
                      >
                        {cat.toUpperCase()}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setLab1Normalized((prev) => !prev)}
                    className="px-3.5 py-1.5 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{lab1Normalized ? "View Raw CSV" : "Normalize into OCSF Schema"}</span>
                  </button>
                </div>

                <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-3">Timestamp (UTC)</th>
                        <th className="p-3">Source</th>
                        <th className="p-3">User / Identity</th>
                        <th className="p-3">Event Activity</th>
                        <th className="p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600 font-mono text-[11px]">
                      {lab1RawEvents
                        .filter((ev) => lab1Filter === "all" || ev.category === lab1Filter)
                        .map((ev, i) => (
                          <tr key={i} className="hover:bg-stone-50/60">
                            <td className="p-3 text-stone-900">{ev.time}</td>
                            <td className="p-3">{lab1Normalized ? `ocsf.source.${ev.source}` : ev.source}</td>
                            <td className="p-3 font-bold text-stone-900">{ev.user}</td>
                            <td className="p-3">{ev.event}</td>
                            <td className="p-3">
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  ev.result === "failed"
                                    ? "bg-red-100 text-red-800"
                                    : ev.result === "detected"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-emerald-100 text-emerald-800"
                                }`}
                              >
                                {ev.result}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Lab 2 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 2 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">SIEM Detection Design &amp; Test Matrix</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Intermediate
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                Design a vendor-neutral detection rule for unexpected privilege assignments followed by administrative actions. Test against synthetic datasets.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-3">
                  <strong className="text-stone-900 block font-mono">Detection Configuration</strong>
                  <div>
                    <label className="text-stone-700 font-bold block mb-1">Correlation Window (Minutes):</label>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      value={lab2WindowMinutes}
                      onChange={(e) => setLab2WindowMinutes(Number(e.target.value))}
                      className="w-full accent-orange-600"
                    />
                    <span className="text-xs font-mono text-stone-600">{lab2WindowMinutes} minutes window</span>
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={lab2ExclusionsEnabled}
                      onChange={(e) => setLab2ExclusionsEnabled(e.target.checked)}
                      className="rounded text-orange-600 focus:ring-orange-500 w-4 h-4"
                    />
                    <span className="text-stone-800">Filter approved maintenance tickets (Reduce False Positives)</span>
                  </label>

                  <pre className="p-3 rounded-xl bg-stone-900 text-emerald-300 font-mono text-[11px] overflow-x-auto">
{`RULE: Detect_Suspicious_Privilege_Assignment
TRIGGER:
  event_type == "role_assignment"
  AND target_role IN ("Administrator", "FullAccess")
  ${lab2ExclusionsEnabled ? "AND ticket_reference == NULL" : ""}
WINDOW: ${lab2WindowMinutes}m
THEN: Alert(Severity="HIGH", Playbook="Account_Takeover")`}
                  </pre>

                  <button
                    onClick={() => setLab2Tested(true)}
                    className="w-full py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-orange-600 transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Run Test Matrix Against Rule</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 text-xs font-mono text-stone-200 min-h-[220px]">
                  <strong className="text-amber-400 block mb-2">// Rule Validation Test Matrix</strong>
                  {lab2Tested ? (
                    <div className="space-y-1.5 text-[11px]">
                      {lab2TestCases.map((tc) => (
                        <div key={tc.id} className="p-2 rounded-lg bg-stone-800/80 border border-stone-700 flex items-center justify-between gap-2">
                          <span className="text-stone-300">{tc.id}: {tc.desc}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${tc.match ? "bg-red-500 text-white" : "bg-emerald-500 text-white"}`}>
                            {tc.match ? "ALERTED" : "PASSED"}
                          </span>
                        </div>
                      ))}
                      <p className="text-emerald-400 pt-2 border-t border-stone-800">// Validation: 0 False Positives, 3 True Positives detected.</p>
                    </div>
                  ) : (
                    <p className="text-stone-500 italic">Click &quot;Run Test Matrix Against Rule&quot; to test benign vs suspicious scenarios.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Lab 3 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 3 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">Multi-Source SIEM Alert Investigation</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Intermediate
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                Investigate alert <code>SEC-ALT-2026-881</code>. Assess confidence, evaluate whether the IT maintenance ticket justifies the action, and record your verdict.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2.5">
                  <strong className="text-stone-900 block font-mono">Alert Triage Dashboard</strong>
                  <div className="text-stone-600 space-y-1">
                    <p><strong>Alert ID:</strong> SEC-ALT-2026-881</p>
                    <p><strong>Affected User:</strong> analyst01</p>
                    <p><strong>Correlated Sequence:</strong> 2 Failed Logins &rarr; 1 Success &rarr; Role Assigned &rarr; EDR Alert</p>
                    <p><strong>IT Change Ticket:</strong> CHG-9921 (&quot;Scheduled DB Upgrade&quot; - Submitted by admin02)</p>
                  </div>

                  <div className="pt-2">
                    <label className="text-stone-700 font-bold block mb-1">Investigative Verdict:</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setLab3Verdict("escalate")}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                          lab3Verdict === "escalate" ? "bg-red-100 text-red-950 border border-red-300" : "bg-white border border-stone-200 text-stone-700"
                        }`}
                      >
                        Escalate as Incident
                      </button>
                      <button
                        onClick={() => setLab3Verdict("close")}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold cursor-pointer ${
                          lab3Verdict === "close" ? "bg-emerald-100 text-emerald-950 border border-emerald-300" : "bg-white border border-stone-200 text-stone-700"
                        }`}
                      >
                        Close as Authorized
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => setLab3NoteGenerated(true)}
                    disabled={!lab3Verdict}
                    className="w-full py-2.5 rounded-xl bg-stone-900 text-white font-bold text-xs hover:bg-orange-600 transition disabled:opacity-50 cursor-pointer"
                  >
                    Generate Investigation Triage Note
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 text-xs font-mono text-stone-200 min-h-[180px]">
                  <strong className="text-amber-400 block mb-2">// Analyst Triage Note</strong>
                  {lab3NoteGenerated ? (
                    <div className="space-y-1.5 text-stone-300 text-[11px]">
                      <p className="text-emerald-400">STATUS: {lab3Verdict === "escalate" ? "ESCALATED TO CIRT" : "CLOSED - RESOLVED"}</p>
                      <p>Case: PS-SOC-2026-881 | Confidence: High</p>
                      <p>
                        {lab3Verdict === "escalate"
                          ? "Findings: While CHG-9921 was logged by admin02, the actual process alert on Host-07 executed powershell.exe with an unencoded command outside change scope. Patient-zero isolated pending full RAM capture."
                          : "Findings: Verified with admin02 that role assignment and Host-07 maintenance were part of authorized database failover rehearsal. Activity marked benign."}
                      </p>
                    </div>
                  ) : (
                    <p className="text-stone-500 italic">Select a verdict and generate the triage documentation.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Lab 4 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 4 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">Incident-Response Tabletop Coordinator (NIST SP 800-61 Rev. 3)</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Intermediate &ndash; Advanced
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                Execute an incident containment decision while balancing forensic evidence preservation against business continuity.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-stone-200 pb-2 overflow-x-auto text-xs font-medium">
                  {[1, 2, 3, 4].map((s) => (
                    <button
                      key={s}
                      onClick={() => setTabletopStep(s)}
                      className={`px-3 py-1.5 rounded-xl cursor-pointer ${
                        tabletopStep === s ? "bg-[#ea580c] text-white font-bold" : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      Phase {s}: {s === 1 ? "Containment Choice" : s === 2 ? "Evidence Preservation" : s === 3 ? "Eradication" : "Post-Incident"}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-3">
                  {tabletopStep === 1 && (
                    <div>
                      <strong className="text-stone-900 block mb-1">Phase 1: Containment Decision</strong>
                      <p className="text-stone-600 mb-2">A compromised service account is actively querying customer records. Select the containment action:</p>
                      <div className="space-y-1.5">
                        <button
                          onClick={() => setTabletopDecisions((prev) => ({ ...prev, p1: "correct" }))}
                          className={`w-full text-left p-2.5 rounded-xl border text-xs cursor-pointer ${
                            tabletopDecisions.p1 === "correct" ? "bg-emerald-100 border-emerald-300 text-emerald-950 font-bold" : "bg-white border-stone-200 text-stone-700"
                          }`}
                        >
                          &bull; Revoke active STS session tokens, attach temporary DenyAll IAM boundary, and capture volatile RAM before reboot.
                        </button>
                        <button
                          onClick={() => setTabletopDecisions((prev) => ({ ...prev, p1: "wrong" }))}
                          className={`w-full text-left p-2.5 rounded-xl border text-xs cursor-pointer ${
                            tabletopDecisions.p1 === "wrong" ? "bg-red-100 border-red-300 text-red-950 font-bold" : "bg-white border-stone-200 text-stone-700"
                          }`}
                        >
                          &bull; Pull the physical server power cord immediately, destroying in-memory processes and uncommitted disk buffers.
                        </button>
                      </div>
                    </div>
                  )}
                  {tabletopStep === 2 && (
                    <div>
                      <strong className="text-stone-900 block mb-1">Phase 2: Evidence Preservation</strong>
                      <p className="text-stone-600">
                        Acquire raw physical RAM capture of <code>host-07</code> and export CloudTrail audit logs covering the 24-hour window before and after the role assignment. Compute SHA-256 digests.
                      </p>
                    </div>
                  )}
                  {tabletopStep === 3 && (
                    <div>
                      <strong className="text-stone-900 block mb-1">Phase 3: Eradication &amp; Credential Rotation</strong>
                      <p className="text-stone-600">
                        Rotate all database credentials, remove unauthorized IAM role bindings, and rebuild the affected container from a verified clean immutable image digest.
                      </p>
                    </div>
                  )}
                  {tabletopStep === 4 && (
                    <div>
                      <strong className="text-stone-900 block mb-1">Phase 4: Post-Mortem &amp; Prevention</strong>
                      <p className="text-stone-600">
                        Enforce Service Control Policies (SCPs) preventing role modification without MFA, and deploy a new Sigma rule detecting anomalous process spawns from web server accounts.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Lab 5 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 5 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">Digital Forensics Evidence Register &amp; Chain of Custody</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Advanced
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                Track digital evidence across its lifecycle. Verify cryptographic SHA-256 hashes to guarantee evidence integrity.
              </p>

              <div className="space-y-3">
                <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="p-3">Evidence ID</th>
                        <th className="p-3">Description</th>
                        <th className="p-3">Acquisition Source</th>
                        <th className="p-3">SHA-256 Checksum</th>
                        <th className="p-3">Custody Location</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 text-stone-600 font-mono text-[11px]">
                      {forensicEvidenceList.map((item) => (
                        <tr key={item.id} className="hover:bg-stone-50/60">
                          <td className="p-3 font-bold text-stone-900">{item.id}</td>
                          <td className="p-3">{item.desc}</td>
                          <td className="p-3">{item.source}</td>
                          <td className="p-3 text-emerald-700 font-bold">{item.hash}</td>
                          <td className="p-3">{item.custody}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setEvidenceVerified(true)}
                    className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-orange-600 transition cursor-pointer flex items-center gap-1.5"
                  >
                    <Fingerprint className="w-3.5 h-3.5" />
                    <span>Verify All Evidence Hashes &amp; Chain of Custody</span>
                  </button>
                </div>

                {evidenceVerified && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-medium">
                    &bull; ALL 4 EVIDENCE ITEMS VERIFIED: Cryptographic hashes match baseline acquisition records. Chain of custody is intact with zero unaccounted transfers.
                  </div>
                )}
              </div>
            </div>

            {/* Lab 6 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 6 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">30-Day Logging &amp; Monitoring Improvement Plan (CISA Aligned)</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Advanced
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                Prioritize telemetry sources for a cloud-hosted infrastructure to reduce MTTD and MTTC without incurring unnecessary ingestion costs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 text-xs">
                  <strong className="text-stone-900 block font-bold">Priority Telemetry Upgrades:</strong>
                  {[
                    { key: "identityMFA", label: "Centralized Identity & MFA Challenge Logging" },
                    { key: "cloudAudit", label: "Cloud Control Plane Audit (CloudTrail / Azure Activity)" },
                    { key: "edrProcess", label: "Endpoint Process Creation & Parent-Child Trees" },
                    { key: "dnsLookups", label: "Recursive Internal DNS Resolver Query Telemetry" },
                    { key: "ntpSync", label: "Enterprise UTC NTP Time Synchronization Enforcement" },
                    { key: "immutableRetention", label: "WORM S3 Object Lock for Centralized SIEM Buckets" }
                  ].map((item) => (
                    <label
                      key={item.key}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 hover:bg-stone-100/60 transition cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={roadmapToggles[item.key]}
                        onChange={(e) =>
                          setRoadmapToggles((prev) => ({ ...prev, [item.key]: e.target.checked }))
                        }
                        className="rounded text-orange-600 focus:ring-orange-500 w-4 h-4"
                      />
                      <span className="font-mono text-stone-800">{item.label}</span>
                    </label>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between text-xs">
                  <div>
                    <strong className="text-stone-900 block font-mono uppercase tracking-wider mb-2">
                      Detection Coverage &amp; Maturity Score
                    </strong>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-stone-700">CISA Logging Maturity:</span>
                      <span className="text-sm font-bold font-mono text-[#ea580c]">
                        {Math.round((Object.values(roadmapToggles).filter(Boolean).length / 6) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-stone-200 rounded-full h-2 mb-3">
                      <div
                        className="bg-[#ea580c] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(Object.values(roadmapToggles).filter(Boolean).length / 6) * 100}%` }}
                      />
                    </div>
                    <div className="space-y-1 text-[11px] text-stone-600">
                      <p><strong>Estimated MTTD:</strong> {Object.values(roadmapToggles).filter(Boolean).length >= 4 ? "12 Minutes" : "4.8 Hours"}</p>
                      <p><strong>Estimated MTTC:</strong> {Object.values(roadmapToggles).filter(Boolean).length >= 4 ? "45 Minutes" : "18 Hours"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive 9-Point Readiness Checklist */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Interactive SOC &amp; Forensics Investigation Checklist</h3>
                  <p className="text-xs text-stone-600">
                    Verify each core technical control with concrete evidence before submitting your forensic findings.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 border border-orange-200 px-3 py-1 rounded-xl">
                    {checklistCompletedCount} / 9 Verified
                  </span>
                  <button
                    onClick={resetChecklist}
                    className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs transition cursor-pointer flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              <div className="w-full bg-stone-200 rounded-full h-2">
                <div
                  className="bg-[#ea580c] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(checklistCompletedCount / 9) * 100}%` }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {[
                  { id: "c1", label: "Required log sources are identified and their ingestion health verified." },
                  { id: "c2", label: "Timestamps, time zones, and possible clock drift have been reconciled to UTC." },
                  { id: "c3", label: "Evidence sources, SHA-256 integrity checks, and storage locations are recorded." },
                  { id: "c4", label: "Alert triage conclusions are supported by correlated cross-source records." },
                  { id: "c5", label: "Incident escalation, containment authorities, and communications are defined." },
                  { id: "c6", label: "Evidence items and chain-of-custody transfers are completely traceable." },
                  { id: "c7", label: "Confirmed facts are separated from analytical interpretations and unknowns." },
                  { id: "c8", label: "Remediation and recovery plans include explicit retest criteria." },
                  { id: "c9", label: "The final incident report identifies residual risks and improvement milestones." }
                ].map((item) => (
                  <label
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`flex items-start gap-2.5 p-3 rounded-2xl border transition cursor-pointer text-xs ${
                      checklist[item.id]
                        ? "bg-emerald-50/70 border-emerald-300 text-emerald-950 font-medium"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100/60 text-stone-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.id]}
                      onChange={() => {}}
                      className="rounded text-orange-600 focus:ring-orange-500 w-4 h-4 shrink-0 mt-0.5 pointer-events-none"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: CASE STUDY                                                        */}
        {/* ========================================================================= */}
        {activeTab === "case-study" && (
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-4">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                Case Study
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                Multi-Source Alert Correlation &amp; Forensics Case Study: The Compromised DevOps Identity
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                <strong>Incident Background:</strong> At 02:14 UTC on a Sunday, the PrepSpaces SIEM generated a High
                severity alert: an account belonging to a senior site reliability engineer (<code>sre_lead</code>) authenticated
                from a commercial VPN IP range in a non-standard region without an active ticket.
              </p>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                <strong className="text-stone-900 block font-mono uppercase tracking-wider">
                  Reconstructed Super-Timeline Across 4 Telemetry Planes
                </strong>
                <ul className="list-disc pl-5 space-y-1.5 text-stone-700">
                  <li>
                    <strong>02:14:02 UTC (Okta Identity):</strong> 3 failed password attempts followed by successful session token injection via session hijacking (cookie replay).
                  </li>
                  <li>
                    <strong>02:16:45 UTC (AWS CloudTrail):</strong> The session calls <code>iam:AttachUserPolicy</code>, attaching <code>AdministratorAccess</code> to a temporary contractor identity.
                  </li>
                  <li>
                    <strong>02:19:12 UTC (Amazon GuardDuty):</strong> Alert <code>Recon:IAMUser/AnomalousBehavior</code> triggered as the identity begins enumerating production RDS database snapshots.
                  </li>
                  <li>
                    <strong>02:22:04 UTC (Host EDR):</strong> Sysmon Event 1 flags <code>curl.exe</code> downloading an external reverse shell payload to a staging EC2 instance.
                  </li>
                </ul>
              </div>

              <h3 className="text-base font-bold text-stone-900 pt-2">Containment &amp; Resolution Actions Taken</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                  <strong className="block mb-1 font-bold">1. Immediate Identity Revocation</strong>
                  <p className="text-stone-600">
                    CIRT invoked SOAR playbook to terminate all active Okta sessions, invalidate STS temporary credentials, and detach unauthorized IAM policies within 3 minutes of alert acknowledgment.
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                  <strong className="block mb-1 font-bold">2. Forensic Preservation &amp; Zero Impact</strong>
                  <p className="text-stone-600">
                    Staging instance was isolated at the security-group layer. EBS volume snapshot was acquired with SHA-256 hashing. Investigation confirmed database snapshots were never downloaded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: QUIZ                                                               */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900">Knowledge Check &mdash; Module 20 Quiz</h2>
                <p className="text-xs text-stone-600">
                  Select one answer for each question, then submit to receive your score and detailed technical rationale.
                </p>
              </div>
              {quizSubmitted && (
                <div className="px-3.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-[#ea580c] font-bold text-xs font-mono">
                  Score: {calculateQuizScore()} / {quizQuestions.length} ({Math.round((calculateQuizScore() / quizQuestions.length) * 100)}%)
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q) => (
                <div key={q.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2.5">
                  <p className="font-bold text-stone-900 text-sm">{q.q}</p>
                  <div className="space-y-1.5">
                    {q.options.map((opt, idx) => {
                      const isSelected = quizAnswers[q.id] === idx;
                      let btnStyle = "bg-white border-stone-200 text-stone-700 hover:border-stone-300";
                      if (quizSubmitted) {
                        if (idx === q.correct) {
                          btnStyle = "bg-emerald-100 border-emerald-300 text-emerald-950 font-bold";
                        } else if (isSelected) {
                          btnStyle = "bg-red-100 border-red-300 text-red-950 font-bold";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-orange-100 border-orange-300 text-[#ea580c] font-bold";
                      }
                      return (
                        <button
                          key={idx}
                          disabled={quizSubmitted}
                          onClick={() => handleSelectQuiz(q.id, idx)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {quizSubmitted && (
                    <div className="p-3 rounded-xl bg-stone-100 text-stone-700 text-xs leading-relaxed mt-2 border border-stone-200">
                      <strong>Rationale:</strong> {q.rationale}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <button
                onClick={() => setQuizSubmitted(true)}
                disabled={quizSubmitted || Object.keys(quizAnswers).length < quizQuestions.length}
                className="px-6 py-2.5 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-600 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Submit Quiz
              </button>
              {quizSubmitted && (
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="px-4 py-2 rounded-xl border border-stone-200 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                >
                  Retake Quiz
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CAPSTONE PROJECT & RUBRIC                                         */}
        {/* ========================================================================= */}
        {activeTab === "capstone" && (
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-4">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                Portfolio Capstone
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                Final Capstone: Security Monitoring, Investigation, and Digital Evidence
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                <strong>Scenario:</strong> PrepSpaces is monitoring a fictional cloud-hosted learning platform.
                The security operations center receives an identity alert, an unapproved privileged-role assignment,
                an endpoint warning, and a cloud audit event. Your team must determine whether these records are
                connected, establish whether unauthorized exfiltration occurred, and coordinate containment.
              </p>
              <p>
                <strong>Your Role:</strong> Security Operations Analyst supporting the Incident Response Commander.
              </p>

              <h3 className="text-base font-bold text-stone-900 pt-2">Required Capstone Deliverables</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">A. Monitoring Architecture</strong>
                  <p className="text-stone-600">Design a system diagram depicting log sources, ingestion pipelines, normalization, SIEM storage, correlation rules, and alerting.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">B. Investigation &amp; Correlation</strong>
                  <p className="text-stone-600">Construct an evidence-backed chronological super-timeline. Correlate cross-source events and distinguish observed facts from hypotheses.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">C. SIEM Detection Specification</strong>
                  <p className="text-stone-600">Formulate 2 vendor-neutral detection use cases detailing objectives, required fields, sliding-window logic, exclusions, and test matrices.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">D. Incident Response Playbook</strong>
                  <p className="text-stone-600">Document response ownership, containment options, approval gates, evidence preservation, and safe recovery validation.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">E. Forensic Evidence Register</strong>
                  <p className="text-stone-600">Maintain an auditable chain-of-custody table with SHA-256 hashes, collection parameters, working copy logs, and recorded limitations.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">F. Final Incident Report</strong>
                  <p className="text-stone-600">Author executive summary, findings, confidence ratings, root-cause analysis, and permanent remediation retest criteria.</p>
                </div>
              </div>

              <h3 className="text-base font-bold text-stone-900 pt-2">Capstone Evaluation Rubric (100 Points Total)</h3>
              <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Criterion</th>
                      <th className="p-3">Points</th>
                      <th className="p-3">Evaluation Standard</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Monitoring Architecture &amp; Log Coverage</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">15 pts</td>
                      <td className="p-3">Clean architecture diagram with source prioritization, ingestion health checks, and time sync.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">SIEM Use Cases &amp; Detection Validation</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">15 pts</td>
                      <td className="p-3">Syntactically sound correlation logic with both benign and suspicious validation test scenarios.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Evidence-Based Investigation &amp; Correlation</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">20 pts</td>
                      <td className="p-3">Thorough super-timeline strictly separating observed facts from unverified assumptions.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Incident Response &amp; Escalation</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">20 pts</td>
                      <td className="p-3">NIST SP 800-61 Rev. 3 alignment, safe containment, approval gates, and eradication.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Forensic Handling &amp; Timeline Integrity</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">15 pts</td>
                      <td className="p-3">Complete chain-of-custody table, SHA-256 verification, and volatile memory preservation.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Report Quality, Remediation &amp; Retesting</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">15 pts</td>
                      <td className="p-3">Executive summary, confidence scoring, concrete remediation owners, and retest criteria.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 font-medium">
                Passing Score: <strong>75 / 100</strong>. Critical visibility gaps must be documented; no unsupported claims permitted.
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* QUICK REVISION SHEET & AUTHORITATIVE RESOURCES (ALWAYS VISIBLE FOOTER)    */}
        {/* ========================================================================= */}
        <div className="mt-8 space-y-6">
          {/* Quick Revision Sheet */}
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ea580c]" />
              Module 20 Quick Revision Sheet &mdash; 12 Core Principles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {[
                { topic: "SOC Mission", rule: "People, processes, and tools unite to monitor, investigate, and contain." },
                { topic: "High-Value Logs", rule: "Prioritize identity, administrative changes, EDR, and cloud audit logs." },
                { topic: "SIEM Correlation", rule: "Normalize diverse schemas and correlate events across sliding time windows." },
                { topic: "Alert Triage", rule: "Validate the rule, enrich with context, and prioritize by true business risk." },
                { topic: "Detection Tuning", rule: "Account for both false positives (noise) and false negatives (blindspots)." },
                { topic: "SOAR Automation", rule: "Automate low-risk data gathering; enforce human gates for disruptive actions." },
                { topic: "IR Lifecycle", rule: "Prepare, Detect/Analyze, Contain, Eradicate, Recover, Post-Incident Review." },
                { topic: "Forensics Rules", rule: "Preserve original evidence; compute SHA-256 hashes; work on verified copies." },
                { topic: "Chain of Custody", rule: "Maintain an unbroken, auditable custody register tracking every transfer." },
                { topic: "Timeline Order", rule: "Reconstruct causality using UTC time; document clock skew and latency." },
                { topic: "Evidence Tiers", rule: "Distinguish observed facts from analytical deductions and hypotheses." },
                { topic: "Continuous Improvement", rule: "Turn investigation lessons into new detection rules and closed logging gaps." }
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block font-mono text-[11px] mb-1">{item.topic}</strong>
                  <p className="text-stone-600 text-[11px] leading-relaxed">{item.rule}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Authoritative Resources */}
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#ea580c]" />
              Authoritative Learning Resources &amp; Official Standards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {[
                {
                  title: "NIST SP 800-61 Rev. 3 (April 2025)",
                  author: "NIST CSRC",
                  url: "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
                  desc: "Current foundational guidance integrating incident response into cybersecurity risk management."
                },
                {
                  title: "CISA SIEM and SOAR Implementation",
                  author: "CISA",
                  url: "https://www.cisa.gov/resources-tools/resources/guidance-siem-and-soar-implementation",
                  desc: "Joint practitioner guidance for deploying SIEM platforms and selecting high-priority logs."
                },
                {
                  title: "Priority Logs for SIEM Ingestion (May 2025)",
                  author: "ASD / CISA",
                  url: "https://www.cyber.gov.au/publication/priority-logs-for-siem-ingestion-practitioner-guidance",
                  desc: "Guidance on selecting high-value log sources to maximize detection and triage."
                },
                {
                  title: "NIST SP 800-86 Guide to Forensics",
                  author: "NIST CSRC",
                  url: "https://csrc.nist.gov/pubs/sp/800/86/final",
                  desc: "Foundational principles for integrating digital forensic techniques into incident response."
                },
                {
                  title: "NIST Cybersecurity Framework 2.0",
                  author: "NIST",
                  url: "https://www.nist.gov/cyberframework",
                  desc: "The 6 core functions: Govern, Identify, Protect, Detect, Respond, and Recover."
                },
                {
                  title: "MITRE ATT&CK v18 Detection Strategies",
                  author: "MITRE",
                  url: "https://attack.mitre.org/resources/updates/updates-october-2025/",
                  desc: "Major update introducing Detection Strategies and Analytics (October 2025)."
                },
                {
                  title: "CISA Logging Reference Architecture (Aug 2026)",
                  author: "CISA",
                  url: "https://www.cisa.gov/resources-tools/resources/logging-reference-architecture",
                  desc: "Architecture for logging plans, telemetry dataflow, retention, and access integrity."
                },
                {
                  title: "Event Logging & Threat Detection Best Practices",
                  author: "Joint Cyber Authorities",
                  url: "https://www.cyber.gov.au/publication/best-practices-for-event-logging-and-threat-detection",
                  desc: "Best practices for time synchronization, centralized storage, and investigation."
                }
              ].map((res, idx) => (
                <a
                  key={idx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-orange-300 hover:bg-orange-50/40 transition group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-stone-600 block mb-0.5">{res.author}</span>
                    <strong className="text-stone-900 group-hover:text-orange-950 block mb-1">
                      {res.title}
                    </strong>
                    <p className="text-stone-600 text-[11px] leading-relaxed">{res.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#ea580c] font-mono text-[11px] font-bold mt-2">
                    <span>View Official Specification</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </a>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-stone-100 text-[11px] text-stone-600 border border-stone-200">
              <strong>Tooling Note:</strong> CISA&apos;s former <em>Logging Made Easy</em> service had its support officially retired effective May 22, 2026. Its code repository remains archived for historical reference, but is no longer actively maintained.
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FOOTER NAVIGATION (PREVIOUS & NEXT MODULE)                                */}
        {/* ========================================================================= */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
          <button
            onClick={() => navigate("/learning/cybersecurity/malware-analysis")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 19 (Malware Analysis &amp; Ransomware Defense)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/burp-suite")}
            className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 21 (Web PenTesting &amp; Burp Suite)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
