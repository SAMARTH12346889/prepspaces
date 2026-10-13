import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layers,
  Database,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Zap,
  ShieldAlert,
  Activity,
  Cpu,
  Server,
  Network,
  Lock,
  ArrowRight,
  ArrowLeft,
  GitBranch,
  Timer,
  Scale,
  RefreshCw,
  Globe,
  Sliders,
  HelpCircle,
  FolderTree,
  ShieldCheck,
  ExternalLink,
  BookOpen,
  Vote,
  Radio,
  Clock,
  Workflow,
  Inbox,
  Filter,
  Flame,
  Send,
  Key,
  FileText,
  Unlock,
  XCircle,
  TrendingUp,
  BarChart3,
  HardDrive,
  Calculator,
  Compass,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  RtoRpoTimelineDiagram,
  MultiRegionPatternsDiagram,
  RegionalFailoverDiagram,
  VisualDiagramComponentModule16,
} from "./SystemDesignMultiRegionDiagrams";

export default function SystemDesignMultiRegion() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "simulators" | "qa" | "assignments" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2
  const [activeLesson, setActiveLesson] = useState("16.1");

  // Expanded Q&A accordion states (12 Senior Interview Questions)
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 1: RTO & RPO BUSINESS IMPACT CALCULATOR
  // ---------------------------------------------------------------------------
  const [simRpoMinutes, setSimRpoMinutes] = useState(5);
  const [simRtoMinutes, setSimRtoMinutes] = useState(30);
  const [simHourlyCost, setSimHourlyCost] = useState(48000);
  const [simWriteRps, setSimWriteRps] = useState(450);

  const rtoRpoImpact = useMemo(() => {
    const downtimeHours = simRtoMinutes / 60;
    const directDowntimeLoss = Math.round(downtimeHours * simHourlyCost);
    const potentialLostRecords = Math.round(simRpoMinutes * 60 * simWriteRps);
    const slaTier =
      simRtoMinutes <= 5 && simRpoMinutes <= 1
        ? "Tier 0 (Mission-Critical Active-Active)"
        : simRtoMinutes <= 30 && simRpoMinutes <= 15
        ? "Tier 1 (Business-Critical Warm Standby)"
        : simRtoMinutes <= 120
        ? "Tier 2 (Pilot Light Standby)"
        : "Tier 3 (Cold Backup & Restore)";

    return {
      directDowntimeLoss,
      potentialLostRecords,
      slaTier,
    };
  }, [simRpoMinutes, simRtoMinutes, simHourlyCost, simWriteRps]);

  // ---------------------------------------------------------------------------
  // INTERACTIVE SIMULATOR 2: REPLICATION LAG & BACKLOG ACCUMULATION
  // Backlog = (Writes - Applies) * Delta_t
  // ---------------------------------------------------------------------------
  const [simPrimaryWrites, setSimPrimaryWrites] = useState(1000);
  const [simReplicaApplies, setSimReplicaApplies] = useState(900);
  const [simDegradeSeconds, setSimDegradeSeconds] = useState(60);
  const [simPayloadBytes, setSimPayloadBytes] = useState(512);

  const replicationLagStats = useMemo(() => {
    const netGrowthRate = Math.max(0, simPrimaryWrites - simReplicaApplies);
    const totalBacklogUpdates = netGrowthRate * simDegradeSeconds;
    const backlogSizeBytes = totalBacklogUpdates * simPayloadBytes;
    const backlogSizeMb = (backlogSizeBytes / (1024 * 1024)).toFixed(2);
    const recoveryCatchupSeconds =
      simReplicaApplies > 0 ? (totalBacklogUpdates / simReplicaApplies).toFixed(1) : "Inf";
    const potentialRpoLagSeconds =
      simPrimaryWrites > 0 ? Math.round(totalBacklogUpdates / simPrimaryWrites) : 0;

    return {
      netGrowthRate,
      totalBacklogUpdates,
      backlogSizeMb,
      recoveryCatchupSeconds,
      potentialRpoLagSeconds,
    };
  }, [simPrimaryWrites, simReplicaApplies, simDegradeSeconds, simPayloadBytes]);

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (5 QUESTIONS MATCHING PROMPT VERBATIM)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. What does RPO describe?",
      options: [
        "Maximum acceptable recovery time",
        "Maximum acceptable data-loss interval",
        "Maximum requests per second",
        "Maximum database connections",
      ],
      correctIndex: 1,
      explanation:
        "Recovery Point Objective (RPO) is the maximum acceptable amount of data loss expressed as a time interval (e.g. at most 5 minutes of committed writes lost during a disaster).",
    },
    {
      id: "q2",
      question: "2. What is a principal risk of asynchronous replication?",
      options: [
        "Every write has global consensus",
        "The replica may miss recent committed writes when the primary fails",
        "It always doubles write latency",
        "It eliminates the need for backups",
      ],
      correctIndex: 1,
      explanation:
        "In asynchronous replication, the primary acknowledges writes before the replica applies them. If the primary crashes before WAL segments are transmitted, those recent committed writes may be permanently lost upon failover.",
    },
    {
      id: "q3",
      question: "3. What is split-brain?",
      options: [
        "A full region outage",
        "Two replicas both rejecting reads",
        "Two nodes independently acting as the authoritative writer",
        "A backup that has expired",
      ],
      correctIndex: 2,
      explanation:
        "Split-brain occurs when a network partition or failover race causes two isolated nodes/regions to both believe they are the authoritative primary writer, producing conflicting, divergent data histories.",
    },
    {
      id: "q4",
      question: "4. Why do systems need backups even when data is replicated?",
      options: [
        "Replication always corrupts data",
        "Backups make replication unnecessary",
        "Accidental deletion or corruption may be replicated too",
        "Backups guarantee zero downtime",
      ],
      correctIndex: 2,
      explanation:
        "Replication propagates data changes in real time. An accidental DROP TABLE, malicious script, or software corruption replicates immediately to all live standby replicas. Independent backups and PITR are required to restore past states.",
    },
    {
      id: "q5",
      question: "5. What must be validated before promoting a database replica?",
      options: [
        "Only the application's HTTP status",
        "Replication state, recoverable data, and safe writer ownership",
        "Only the DNS TTL",
        "Whether the original server's CPU is idle",
      ],
      correctIndex: 1,
      explanation:
        "Before promoting a replica, you must inspect replication lag / WAL receipt, confirm the previous primary is strictly fenced to avoid split-brain, and establish unambiguous writer ownership before accepting application traffic.",
    },
  ];

  const handleSelectOption = (qId, optionIdx) => {
    if (quizSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  // ---------------------------------------------------------------------------
  // CURRICULUM LESSON CONTENT (14 DETAILED LESSONS ACROSS 2 WEEKS)
  // ---------------------------------------------------------------------------
  const lessons = {
    // WEEK 1: Foundations, HA vs DR, RTO/RPO & Patterns
    "16.1": {
      title: "16.1 Module Overview & Why Multi-Region Resilience Matters",
      week: 1,
      readTime: "12 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-700 block mb-1">
              Catastrophic Regional Failure Scenario
            </span>
            <p className="text-stone-900 font-medium">
              Imagine PrepSpaces is serving <strong>5,000 concurrent candidates</strong> and <strong>1,500 RPS</strong> during a nationwide placement season. Its primary cloud region (<code className="bg-white px-1.5 py-0.5 rounded text-xs text-orange-800 font-mono">us-east-1</code>) suffers a prolonged power grid failure, optical transit cut, or control-plane outage.
            </p>
            <p className="mt-2 text-xs text-stone-700">
              The application servers, database connections, interview evaluation pipelines, and object stores in that region become completely unreachable. A well-architected distributed system must fail over to a secondary region, preserve data within defined business recovery targets, and maintain candidate session continuity.
            </p>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Learning Objectives</h3>
          <p>By the end of this module, you will be equipped to:</p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700">
            <li>Differentiate <strong>Availability Zones (AZs)</strong>, <strong>Geographic Cloud Regions</strong>, <strong>High Availability (HA)</strong>, and <strong>Disaster Recovery (DR)</strong>.</li>
            <li>Design and evaluate <strong>Active-Active</strong> and <strong>Active-Passive (Warm Standby, Pilot Light, Backup & Restore)</strong> topologies.</li>
            <li>Contrast <strong>Synchronous vs. Asynchronous Replication</strong> trade-offs across speed of light latency bounds.</li>
            <li>Formulate and calculate <strong>Recovery Time Objective (RTO)</strong> and <strong>Recovery Point Objective (RPO)</strong> for mission-critical workflows.</li>
            <li>Execute a production-grade 6-step <strong>Regional Failover Runbook</strong> while preventing catastrophic <strong>Split-Brain</strong> conditions using STONITH and fencing tokens.</li>
            <li>Implement <strong>Global Traffic Routing</strong> via Geo-DNS, Latency-Based Routing, and Anycast with deep health checking.</li>
            <li>Establish immutable backup, Point-in-Time Recovery (PITR), and cross-region KMS key recovery procedures.</li>
          </ul>

          <div className="rounded-xl border border-stone-200 bg-white p-4">
            <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
              <Compass size={16} className="text-orange-600" />
              Core Architectural Mindset
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Multi-region resilience is not a single database checkbox or DNS switch. It is an end-to-end property spanning network routing, identity and authentication providers, secret management, asynchronous queues, database replication streams, and human operational runbooks.
            </p>
          </div>
        </div>
      ),
    },

    "16.2": {
      title: "16.2 Regions, Availability Zones, and Failure Domains",
      week: 1,
      readTime: "14 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Before engineering a multi-region deployment, you must master the physical and logical infrastructure hierarchy provided by cloud hyperscalers (AWS, Azure, GCP).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600 block">Single Region Failure Boundary</span>
              <h4 className="font-bold text-stone-900 text-sm">Availability Zone (AZ)</h4>
              <p className="text-xs text-stone-600">
                One or more discrete data centers with independent power, cooling, and physical networking within a geographic area. AZs are connected via low-latency (&lt;1–2 ms) private fiber rings.
              </p>
              <div className="p-2.5 rounded-lg bg-stone-50 text-[11px] text-stone-700 font-mono">
                Scope: Data center power cut, cooling failure, rack switch failure.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-blue-600 block">Geographic Failure Boundary</span>
              <h4 className="font-bold text-stone-900 text-sm">Cloud Region</h4>
              <p className="text-xs text-stone-600">
                A separate geographic territory containing 3+ isolated AZs. Regions are separated by hundreds or thousands of kilometers with network latency ranging from 30ms to 250ms RTT.
              </p>
              <div className="p-2.5 rounded-lg bg-stone-50 text-[11px] text-stone-700 font-mono">
                Scope: Natural disaster, regional power blackout, regional DNS outage, fiber cuts.
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Why Not Run Everything Multi-Region?</h3>
          <p>
            Junior engineers often assume &quot;all production systems should be active-active multi-region.&quot; In practice, cross-region replication introduces extreme operational friction:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700">
            <li><strong>Speed-of-light Latency:</strong> Packets travel at ~200 km/ms in optical fiber. Synchronous replication between Northern Virginia and Frankfurt adds ~80–90 ms to every database commit.</li>
            <li><strong>Data Egress Taxation:</strong> Cross-region inter-DC data transfer incurs substantial per-gigabyte costs.</li>
            <li><strong>Deployment Complexity:</strong> Coordinating canary rollouts, database schema migrations, and version skew across geographic regions requires sophisticated orchestration.</li>
            <li><strong>Split-Brain Vulnerability:</strong> When transatlantic links drop, both regions can accept divergent writes if not properly fenced.</li>
          </ul>

          <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-900">
            <strong>Architectural Guideline:</strong> Most modern SaaS applications satisfy 99.95% availability targets solely through Multi-AZ redundancy within a single region, coupled with asynchronous cross-region disaster recovery standby for rare black swan events.
          </div>
        </div>
      ),
    },

    "16.3": {
      title: "16.3 High Availability (HA) vs. Disaster Recovery (DR)",
      week: 1,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Although High Availability (HA) and Disaster Recovery (DR) both defend service continuity, they address fundamentally different failure regimes and operational horizons.
          </p>

          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                  <th className="p-3">Dimension</th>
                  <th className="p-3">High Availability (HA)</th>
                  <th className="p-3">Disaster Recovery (DR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 font-mono text-[11px]">
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-bold text-stone-900 font-sans">Primary Goal</td>
                  <td className="p-3">Minimize localized downtime (&lt; seconds/minutes)</td>
                  <td className="p-3 text-orange-700">Survive catastrophic regional loss &amp; corruption</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-bold text-stone-900 font-sans">Failure Scope</td>
                  <td className="p-3">Host failure, AZ power failure, disk corruption</td>
                  <td className="p-3">Whole-region blackout, fiber cut, ransomware, human error</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-bold text-stone-900 font-sans">Failover Mechanism</td>
                  <td className="p-3">Automatic via load balancer / cluster heartbeat</td>
                  <td className="p-3">Automated or human-authorized runbook failover</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-bold text-stone-900 font-sans">Replication Distance</td>
                  <td className="p-3">Synchronous intra-region (&lt; 2 ms)</td>
                  <td className="p-3">Asynchronous inter-region (&gt; 30–120 ms)</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-bold text-stone-900 font-sans">Defense Against Accidental Deletion</td>
                  <td className="p-3 text-red-600 font-bold">Zero: `DROP TABLE` replicates instantly</td>
                  <td className="p-3 text-emerald-700 font-bold">Protected via Point-In-Time Recovery &amp; WORM Backups</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">The &quot;Replication != Backup&quot; Fallacy</h3>
          <p>
            Consider a DevOps engineer who accidentally executes a rogue migration:
          </p>
          <pre className="p-3.5 rounded-xl bg-stone-900 text-amber-300 font-mono text-xs overflow-x-auto">
            TRUNCATE TABLE candidate_interviews CASCADE;
          </pre>
          <p>
            In a purely High Availability setup with active streaming replication, that statement commits to the primary and streams to all read replicas across all AZs in <strong>under 15 milliseconds</strong>. Your replicas are in perfect health, yet 100% of your production data is obliterated.
          </p>
          <p>
            Only an independent, immutable Point-In-Time Recovery (PITR) backup stored in Write-Once-Read-Many (WORM) storage outside the primary security boundary can restore operations.
          </p>
        </div>
      ),
    },

    "16.4": {
      title: "16.4 RTO and RPO: The Two Most Critical DR Metrics",
      week: 1,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Disaster Recovery budgets and architectural topologies must always be derived backwards from two business metrics:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/50 space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-700 block">Metric 1</span>
              <h4 className="font-bold text-stone-900 text-sm">RTO (Recovery Time Objective)</h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                The <strong>maximum allowable downtime duration</strong> before the service is restored to an operational state following an outage.
              </p>
              <div className="p-2 rounded bg-white text-[11px] font-mono text-orange-950 border border-orange-200">
                Formula: Target Restoration Timestamp - Outage Incident Timestamp &le; RTO
              </div>
            </div>

            <div className="p-4 rounded-xl border border-red-200 bg-red-50/50 space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-red-700 block">Metric 2</span>
              <h4 className="font-bold text-stone-900 text-sm">RPO (Recovery Point Objective)</h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                The <strong>maximum allowable data loss window</strong> expressed as a span of time (e.g. at most 5 minutes of committed transactions lost).
              </p>
              <div className="p-2 rounded bg-white text-[11px] font-mono text-red-950 border border-red-200">
                Formula: Outage Incident Timestamp - Last Replicated Recoverable Timestamp &le; RPO
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Interactive RTO vs. RPO Visualizer</h3>
          <RtoRpoTimelineDiagram />

          <h3 className="text-lg font-bold text-stone-900 pt-2">Workload Tier SLA Matrix</h3>
          <p>
            Enterprise systems segment microservices into tier-based recovery classifications:
          </p>
          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                  <th className="p-3">Tier</th>
                  <th className="p-3">Workload Description</th>
                  <th className="p-3">RTO Target</th>
                  <th className="p-3">RPO Target</th>
                  <th className="p-3">Target Topology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-xs">
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-red-700">Tier 0</td>
                  <td className="p-3">Live Video/Audio Interview Sessions &amp; Auth</td>
                  <td className="p-3 font-mono font-bold">5 minutes</td>
                  <td className="p-3 font-mono font-bold">&lt; 1 minute</td>
                  <td className="p-3 text-stone-600">Active-Active / Warm Standby</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-orange-700">Tier 1</td>
                  <td className="p-3">Candidate Evaluation Reports &amp; Scoring</td>
                  <td className="p-3 font-mono font-bold">30 minutes</td>
                  <td className="p-3 font-mono font-bold">5 minutes</td>
                  <td className="p-3 text-stone-600">Warm Standby (Auto-scaled)</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-blue-700">Tier 2</td>
                  <td className="p-3">Course Materials &amp; Public Coding Problems</td>
                  <td className="p-3 font-mono font-bold">2 hours</td>
                  <td className="p-3 font-mono font-bold">15 minutes</td>
                  <td className="p-3 text-stone-600">Pilot Light</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-stone-600">Tier 3</td>
                  <td className="p-3">Historical Analytics &amp; Compliance Logs</td>
                  <td className="p-3 font-mono font-bold">24 hours</td>
                  <td className="p-3 font-mono font-bold">24 hours</td>
                  <td className="p-3 text-stone-600">Backup &amp; Restore</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },

    "16.5": {
      title: "16.5 Multi-Region Patterns: Backup & Restore vs. Pilot Light",
      week: 1,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Cloud disaster recovery strategies scale along an exponential cost-versus-recovery curve. Here we analyze the two lower-cost asymmetric patterns:
          </p>

          <div className="space-y-6">
            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-stone-900 text-base">Pattern A: Backup and Restore</h4>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Lowest Cost ($) · RTO: Hours to Days
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                In normal operation, Region B runs <strong>zero compute resources</strong>. Automated database snapshots, WAL archives, and IaC Terraform templates are replicated into cross-region object storage (e.g. S3 Cross-Region Replication).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <strong className="text-stone-900 block mb-1 text-xs">Pros:</strong>
                  <span className="text-stone-600">Near-zero ongoing standby compute cost. Minimal cross-region data transfer tax.</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <strong className="text-stone-900 block mb-1 text-xs">Cons:</strong>
                  <span className="text-stone-600">Very long RTO (restoring multi-terabyte databases takes hours). High risk of provisioning quota limits in secondary region during a massive regional disaster.</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-stone-900 text-base">Pattern B: Pilot Light</h4>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  Moderate Cost ($$) · RTO: 30–60 mins
                </span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Like a gas furnace pilot light, the core stateful foundation is kept permanently ignited in Region B. The database replica runs continuously applying replication logs, and VPCs, secrets, and KMS keys exist. However, the compute fleet (Kubernetes clusters, worker nodes) is kept scaled to 0 or 1 minimum instance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <strong className="text-stone-900 block mb-1 text-xs">Pros:</strong>
                  <span className="text-stone-600">Continuous database sync keeps RPO very low (seconds to minutes). No need to restore terabytes of data from backup storage.</span>
                </div>
                <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <strong className="text-stone-900 block mb-1 text-xs">Cons:</strong>
                  <span className="text-stone-600">Scaling the compute cluster from 0 to 500 instances takes 15–30 minutes, during which users encounter errors.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    "16.6": {
      title: "16.6 Multi-Region Patterns: Warm Standby vs. Active-Active",
      week: 1,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            For enterprise SaaS applications with strict RTO SLAs (&lt; 15 minutes), high-availability multi-region patterns are required:
          </p>

          <MultiRegionPatternsDiagram />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4">
            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-stone-900 text-sm">Pattern C: Warm Standby (Active-Passive)</h4>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                  RTO: 5–15 mins
                </span>
              </div>
              <p className="text-xs text-stone-600">
                Region B runs a fully functional, running deployment at reduced capacity (e.g. 20–30% of production traffic capacity). The database replica receives continuous streaming replication. Health checks detect Region A failure, traffic flips via DNS/Anycast, and auto-scalers expand Region B to 100% capacity.
              </p>
              <div className="p-2.5 rounded-lg bg-orange-50/70 border border-orange-200 text-xs text-orange-950 font-mono">
                Selected for PrepSpaces placement season architecture.
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-stone-900 text-sm">Pattern D: Active-Active (Multi-Region)</h4>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-purple-100 text-purple-800">
                  RTO: ~0 mins (Instant)
                </span>
              </div>
              <p className="text-xs text-stone-600">
                Both Region A and Region B simultaneously serve live production traffic. Global traffic controllers route users to their nearest healthy edge. If Region A goes dark, edge routers immediately redirect all incoming requests to Region B without human intervention.
              </p>
              <div className="p-2.5 rounded-lg bg-purple-50/70 border border-purple-200 text-xs text-purple-950 font-mono">
                Trade-off: Extremely high complexity, write conflict resolution, cross-region replication lag.
              </div>
            </div>
          </div>
        </div>
      ),
    },

    "16.7": {
      title: "16.7 Replication Fundamentals & Durability Boundaries",
      week: 1,
      readTime: "14 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Replication is the transmission and application of database transaction logs (Write-Ahead Logs / WAL / binlog) across discrete database nodes:
          </p>

          <div className="p-5 rounded-2xl border border-stone-200 bg-[#faf8f4] space-y-4">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Database size={16} className="text-orange-600" />
              The Write-Ahead Log (WAL) Streaming Pipeline
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <span className="text-[10px] text-stone-500 block">Step 1</span>
                <span className="font-bold text-stone-800">Commit to WAL</span>
                <span className="text-[10px] text-stone-500 block mt-1">Region A Disk</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <span className="text-[10px] text-stone-500 block">Step 2</span>
                <span className="font-bold text-stone-800">WAL Sender</span>
                <span className="text-[10px] text-stone-500 block mt-1">TCP Transmit</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <span className="text-[10px] text-stone-500 block">Step 3</span>
                <span className="font-bold text-stone-800">WAL Receiver</span>
                <span className="text-[10px] text-stone-500 block mt-1">Region B Buffer</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-stone-200">
                <span className="text-[10px] text-stone-500 block">Step 4</span>
                <span className="font-bold text-stone-800">WAL Applier</span>
                <span className="text-[10px] text-stone-500 block mt-1">Replay on Disk</span>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">The Four Durability Boundaries</h3>
          <p>
            When a replica acknowledges replication, what did it actually guarantee?
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700">
            <li><strong>Received in Memory:</strong> Packet received by OS network buffer in Region B. If the host reboots, unwritten data is lost.</li>
            <li><strong>Written to Disk:</strong> The WAL stream is written to Region B&apos;s disk buffer (paged into kernel cache).</li>
            <li><strong>Fsync to Disk:</strong> The replica explicitly issues <code className="bg-stone-100 px-1 py-0.5 rounded text-xs font-mono">fsync()</code> ensuring data survives a hard power cut.</li>
            <li><strong>Applied to State Machine:</strong> The database engine replays the WAL into the database buffer pool and indexes, making the new rows visible to SELECT queries.</li>
          </ul>
        </div>
      ),
    },

    // WEEK 2: Replication Modes, Write Strategies, Failover & Operational DR
    "16.8": {
      title: "16.8 Synchronous vs. Asynchronous Replication & Lag Backlog Modeling",
      week: 2,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            The fundamental trade-off between synchronous and asynchronous replication boils down to <strong>Write Latency vs. Potential Data Loss</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-emerald-700 block">Zero RPO Mode</span>
              <h4 className="font-bold text-stone-900 text-sm">Synchronous Replication</h4>
              <p className="text-xs text-stone-600">
                The primary blocks the client thread until the remote replica explicitly confirms it has durably written the transaction to disk.
              </p>
              <div className="p-2 rounded bg-stone-50 text-[11px] font-mono text-stone-700">
                Penalty: Commits incur full Round Trip Time (RTT). E.g. US to Europe = +80ms to every write.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-700 block">Low Latency Mode</span>
              <h4 className="font-bold text-stone-900 text-sm">Asynchronous Replication</h4>
              <p className="text-xs text-stone-600">
                The primary commits to its local WAL and returns HTTP 200 immediately. WAL chunks are streamed in the background.
              </p>
              <div className="p-2 rounded bg-stone-50 text-[11px] font-mono text-stone-700">
                Risk: If primary is destroyed, un-replicated WAL in flight is lost (RPO gap).
              </div>
            </div>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Mathematical Backlog Accumulation Formula</h3>
          <p>
            When write demand temporarily exceeds the replica&apos;s apply throughput, unreplicated backlog accumulates according to:
          </p>
          <div className="p-4 rounded-xl bg-stone-900 text-amber-300 font-mono text-center text-sm">
            {"Backlog Accumulation = (WriteRate_primary - ApplyRate_replica) * Δt"}
          </div>

          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 text-xs space-y-1">
            <div className="font-bold text-stone-900">PostgreSQL Streaming Replication Default:</div>
            <p className="text-stone-600">
              In PostgreSQL, <code className="bg-white px-1.5 py-0.5 rounded border border-stone-200 font-mono">synchronous_commit = off</code> or asynchronous streaming is the default. To enable cross-region zero-loss replication, you configure <code className="bg-white px-1.5 py-0.5 rounded border border-stone-200 font-mono">synchronous_commit = on</code> and set <code className="bg-white px-1.5 py-0.5 rounded border border-stone-200 font-mono">synchronous_standby_names = &apos;standby_region_b&apos;</code>.
            </p>
          </div>
        </div>
      ),
    },

    "16.9": {
      title: "16.9 Replication Strategies: Single-Primary, Multi-Leader & Partitioned",
      week: 2,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Designing multi-region data topologies requires deciding which node possesses authority to accept mutating SQL transactions:
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white">
              <h4 className="font-bold text-stone-900 text-sm">Strategy 1: Single-Primary with Cross-Region Read Replica</h4>
              <p className="text-xs text-stone-600 mt-1">
                Only Region A accepts writes. Region B maintains an asynchronous read-only standby. All mutations from Region B are proxied back to Region A over an internal private backbone.
              </p>
              <div className="mt-2 text-[11px] font-mono text-emerald-700 bg-emerald-50 p-2 rounded">
                Recommendation: Cleanest consistency model, zero split-brain ambiguity during normal operations.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white">
              <h4 className="font-bold text-stone-900 text-sm">Strategy 2: Multi-Leader (Bidirectional Active-Active)</h4>
              <p className="text-xs text-stone-600 mt-1">
                Both Region A and Region B accept local writes simultaneously, then asynchronously replicate WAL mutations to each other.
              </p>
              <div className="mt-2 text-[11px] font-mono text-amber-700 bg-amber-50 p-2 rounded">
                Warning: Prone to concurrent write conflicts, out-of-order replication, and unique constraint collisions.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white">
              <h4 className="font-bold text-stone-900 text-sm">Strategy 3: Multi-Writer with Partitioned Geographic Ownership</h4>
              <p className="text-xs text-stone-600 mt-1">
                Records are partitioned deterministically by geographic tenant or customer ID. European candidates (<code className="bg-stone-100 px-1 py-0.5 rounded font-mono">region_eu</code>) write strictly to Frankfurt; North American candidates write strictly to Virginia.
              </p>
              <div className="mt-2 text-[11px] font-mono text-blue-700 bg-blue-50 p-2 rounded">
                Benefit: Eliminates write conflicts entirely while preserving sub-10ms local write latency.
              </div>
            </div>
          </div>
        </div>
      ),
    },

    "16.10": {
      title: "16.10 Conflict Resolution: LWW, Version Vectors, and CRDTs",
      week: 2,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            When multiple regions accept concurrent modifications for the same database row, conflicting updates inevitably collide:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Last-Write-Wins (LWW)</h4>
              <p className="text-xs text-stone-600">
                The database compares physical timestamps attached to mutations and accepts whichever is larger.
              </p>
              <div className="p-2 rounded bg-red-50 text-[11px] text-red-900 font-mono">
                Catastrophic Flaw: Clock skew via NTP drift can silently erase valid business transactions.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Version Vectors &amp; Detection</h4>
              <p className="text-xs text-stone-600">
                Every mutation increments a regional version counter vector: <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">[A:2, B:1]</code>.
              </p>
              <div className="p-2 rounded bg-emerald-50 text-[11px] text-emerald-900 font-mono">
                Benefit: Detects concurrent causality without relying on wall-clock synchrony.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Application-Level Merges</h4>
              <p className="text-xs text-stone-600">
                Instead of blind row replacement, individual non-overlapping fields are merged (e.g. updating telephone vs. updating home address).
              </p>
              <div className="p-2 rounded bg-blue-50 text-[11px] text-blue-900 font-mono">
                Best Practice: Preserves granular user updates without database corruption.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">CRDTs (Conflict-free Types)</h4>
              <p className="text-xs text-stone-600">
                Mathematical data structures (P-N Counters, OR-Sets) whose operations are associative, commutative, and idempotent.
              </p>
              <div className="p-2 rounded bg-purple-50 text-[11px] text-purple-900 font-mono">
                Guarantee: All replicas mathematically converge to the identical state regardless of delivery order.
              </div>
            </div>
          </div>
        </div>
      ),
    },

    "16.11": {
      title: "16.11 Consistency Models, Replication Lag & Read Routing",
      week: 2,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            When candidate updates flow through asynchronous cross-region replicas, users may experience anomalous read staleness:
          </p>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/70 space-y-2 text-xs text-amber-950">
            <strong>The Stale Read Scenario:</strong> A candidate submits their coding interview answer in Region A. They immediately refresh their browser, which connects to Region B. Because of 500ms replication lag, the dashboard shows &quot;Incomplete / Unsubmitted&quot;. The candidate panics and submits a duplicate attempt.
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Proven Consistency Engineering Patterns</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
              <span className="text-xs font-bold text-orange-600 font-mono">1. Read-Your-Writes Consistency</span>
              <p className="text-xs text-stone-600">
                After a client writes to Region A, the API gateway sets a sticky cookie containing the transaction LSN. For the next 60 seconds, all reads from that user are pinned to Region A or checked against replica LSN.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
              <span className="text-xs font-bold text-orange-600 font-mono">2. Bounded Staleness Routing</span>
              <p className="text-xs text-stone-600">
                Replicas advertise their current replication delay in milliseconds via health checks. The load balancer drops replicas from read rotation if lag exceeds 5 seconds.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
              <span className="text-xs font-bold text-orange-600 font-mono">3. Primary Reads for Critical Paths</span>
              <p className="text-xs text-stone-600">
                Financial charges, hiring offers, and interview grading read directly from the authoritative primary database, bypassing stale read replicas.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
              <span className="text-xs font-bold text-orange-600 font-mono">4. Idempotency Keys in Mutation Headers</span>
              <p className="text-xs text-stone-600">
                Every write includes an <code className="bg-stone-100 px-1 py-0.5 rounded font-mono">X-Idempotency-Key: uuid</code>. If network retries or failover reroute requests, duplicate transactions are safely de-duplicated.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    "16.12": {
      title: "16.12 Regional Failover Runbook & Split-Brain Prevention",
      week: 2,
      readTime: "18 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Failover is the controlled promotion of a recovery environment to active status. Executing failover without split-brain defense is catastrophic:
          </p>

          <RegionalFailoverDiagram />

          <h3 className="text-lg font-bold text-stone-900 pt-3">The Split-Brain Catastrophe</h3>
          <p>
            Split-brain occurs when a transatlantic network partition separates Region A from Region B. Both regions conclude the other has died:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700">
            <li>Region A continues accepting writes from East Coast users.</li>
            <li>Region B promotes its replica to primary and accepts writes from European users.</li>
            <li>Both databases accumulate conflicting auto-incrementing IDs and modified rows.</li>
            <li>When network connectivity recovers, neither database can replicate without overwriting or corrupting valid records.</li>
          </ul>

          <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-xs text-red-950 space-y-1">
            <strong>Fencing Tokens &amp; STONITH (Shoot The Other Node In The Head):</strong>
            <p>
              Region B must NEVER be promoted to primary writer until Region A has been affirmatively fenced. This is accomplished by revoking IAM DB credentials, modifying security groups to drop port 5432, or using a third-party consensus witness (e.g. AWS Route 53 ARC or distributed Consul/etcd cluster in a third region).
            </p>
          </div>
        </div>
      ),
    },

    "16.13": {
      title: "16.13 Global Traffic Routing & Deep Health Checking",
      week: 2,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Routing internet traffic globally requires coordinating edge DNS resolvers and Anycast BGP announcements:
          </p>

          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                  <th className="p-3">Routing Policy</th>
                  <th className="p-3">Mechanism</th>
                  <th className="p-3">Primary Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-xs">
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-stone-900">Latency-Based Routing</td>
                  <td className="p-3">DNS responds with IP of region with lowest measured RTT</td>
                  <td className="p-3">Active-Active global performance optimization</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-stone-900">Geolocation / Geo-Proximity</td>
                  <td className="p-3">Maps client IP to geographic country/continent coordinates</td>
                  <td className="p-3">GDPR data sovereignty &amp; partitioned writes</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-stone-900">Priority Failover</td>
                  <td className="p-3">Primary record active; switches to standby if health check fails</td>
                  <td className="p-3">Warm Standby &amp; Active-Passive DR</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-mono font-bold text-stone-900">Anycast IP Routing</td>
                  <td className="p-3">Single IP advertised via BGP from hundreds of edge PoPs</td>
                  <td className="p-3">Cloudflare / AWS Global Accelerator instant failover</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Why Shallow Health Checks Cause Outages</h3>
          <p>
            A shallow health check simply pings <code className="bg-stone-100 px-1.5 py-0.5 rounded font-mono">GET /healthz</code> returning HTTP 200 from an Nginx web server. If the underlying PostgreSQL primary exhausts its connection pool or deadlocks, the shallow health check continues reporting &quot;HEALTHY&quot; while 100% of user transactions fail.
          </p>
          <div className="p-3.5 rounded-xl bg-stone-900 text-emerald-400 font-mono text-xs overflow-x-auto">
            // Deep Health Check Response Structure
            <br />
            &#123;
            <br />
            &nbsp;&nbsp;&quot;status&quot;: &quot;DEGRADED&quot;,
            <br />
            &nbsp;&nbsp;&quot;database&quot;: &#123; &quot;writable&quot;: false, &quot;lag_ms&quot;: 4200 &#125;,
            <br />
            &nbsp;&nbsp;&quot;redis&quot;: &#123; &quot;connected&quot;: true &#125;,
            <br />
            &nbsp;&nbsp;&quot;auth_service&quot;: &#123; &quot;available&quot;: true &#125;
            <br />
            &#125;
          </div>
        </div>
      ),
    },

    "16.14": {
      title: "16.14 Backups, PITR, Configuration Drift, and PrepSpaces Case Study",
      week: 2,
      readTime: "17 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Disaster recovery plans fail most frequently due to <strong>Configuration Drift</strong> between the primary and standby environments:
          </p>

          <div className="rounded-xl border border-stone-200 bg-white p-4 space-y-2">
            <h4 className="font-bold text-stone-900 text-sm">The 5 Culprits of Configuration Drift</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-600">
              <li><strong>Missing Secrets &amp; KMS Keys:</strong> Region B lacks the decryption key to unwrap database passwords or JWT tokens.</li>
              <li><strong>Schema Migration Skew:</strong> Region A received table migration v42; Region B standby database was not updated.</li>
              <li><strong>Third-Party IP Whitelists:</strong> Payment gateways whitelist Region A NAT Gateway IPs but reject traffic from Region B.</li>
              <li><strong>Compute Quotas:</strong> Region B cloud account has a default limit of 20 vCPUs, failing when asked to scale to 500.</li>
              <li><strong>DNS TTL Stagnation:</strong> 24-hour TTL records cached by corporate ISPs prevent users from resolving the new IP.</li>
            </ul>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">The PrepSpaces Case Study Summary</h3>
          <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/60 text-xs space-y-2">
            <div className="font-bold text-orange-900 text-sm">Final PrepSpaces Architectural Blueprint</div>
            <p className="text-stone-800">
              <strong>Primary:</strong> <code className="font-mono">us-east-1</code> (5,000 active interview sessions, 1,500 RPS).
              <br />
              <strong>Secondary:</strong> <code className="font-mono">eu-central-1</code> (Warm standby running 25% compute fleet, async streaming database replica).
              <br />
              <strong>Failover Mechanism:</strong> AWS Route 53 Application Recovery Controller (ARC) with automated fencing tokens.
              <br />
              <strong>SLA Compliance:</strong> RTO 15 minutes, RPO 5 minutes, Interview reports recovered within 30 minutes.
            </p>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans pb-20">
      {/* Top Module Navigation Bar */}
      <ModuleNav
        track="system-design"
        currentModuleId="multi-region"
        showAiTutor={false}
        onAiTutorToggle={() => {}}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* Module Header & Breadcrumb */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 mb-2">
            <span>System Design Masterclass</span>
            <span>&bull;</span>
            <span className="text-orange-600 font-bold">Module 16</span>
            <span>&bull;</span>
            <span>Advanced Distributed Systems &bull; Weeks 31–32</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Multi-Region Systems, Replication Strategies &amp; Disaster Recovery
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl leading-relaxed">
                Design fault-tolerant architectures capable of surviving complete cloud region blackouts. Master RTO vs. RPO trade-offs, synchronous vs. asynchronous replication lag, split-brain prevention, and production failover runbooks.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-mono font-bold text-stone-700 shadow-2xs">
                <Clock size={13} className="text-orange-600" />
                35–45 study hrs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-orange-200 bg-orange-50 text-xs font-mono font-bold text-orange-800 shadow-2xs">
                <ShieldCheck size={13} />
                HA &bull; DR &bull; RTO/RPO
              </span>
            </div>
          </div>
        </div>

        {/* Primary Tab Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto border-b border-stone-200 pb-2 mb-6 scrollbar-none text-xs font-bold">
          {[
            { id: "curriculum", label: "Curriculum & Lessons", icon: BookOpen },
            { id: "simulators", label: "Interactive Simulators", icon: Sliders },
            { id: "qa", label: "12 Senior Interview Q&A", icon: HelpCircle },
            { id: "assignments", label: "4 Hands-On Labs", icon: Workflow },
            { id: "assessment", label: "Knowledge Check (Quiz)", icon: CheckCircle2 },
            { id: "reading", label: "Recommended Reading", icon: ExternalLink },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-stone-900 text-white shadow-xs"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                }`}
              >
                <Icon size={14} className={isActive ? "text-orange-400" : "text-stone-500"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & LESSONS                                        */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar: Week & Lesson Selector */}
            <div className="lg:col-span-4 space-y-4">
              {/* Week Toggle */}
              <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl border border-stone-200 bg-white">
                <button
                  type="button"
                  onClick={() => setActiveWeek(1)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition cursor-pointer ${
                    activeWeek === 1
                      ? "bg-stone-900 text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  Week 31: Foundations &amp; HA/DR
                </button>
                <button
                  type="button"
                  onClick={() => setActiveWeek(2)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold text-center transition cursor-pointer ${
                    activeWeek === 2
                      ? "bg-stone-900 text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900"
                  }`}
                >
                  Week 32: Replication &amp; Failover
                </button>
              </div>

              {/* Lesson List */}
              <div className="rounded-2xl border border-stone-200 bg-white p-3 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 px-2 block mb-1">
                  {activeWeek === 1 ? "Week 31 Curriculum (7 Lessons)" : "Week 32 Curriculum (7 Lessons)"}
                </span>

                {Object.entries(lessons)
                  .filter(([_, data]) => data.week === activeWeek)
                  .map(([id, data]) => {
                    const isSelected = activeLesson === id;
                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setActiveLesson(id)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs transition flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? "bg-orange-50 border border-orange-200 font-bold text-orange-950"
                            : "text-stone-700 hover:bg-stone-50"
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                              isSelected ? "bg-orange-600" : "bg-stone-300"
                            }`}
                          />
                          <span className="truncate">{data.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-stone-400 shrink-0 ml-2">
                          {data.readTime}
                        </span>
                      </button>
                    );
                  })}
              </div>

              {/* Quick Stat Card */}
              <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-4 text-xs space-y-2">
                <span className="font-bold text-stone-900 block flex items-center gap-1.5">
                  <ShieldAlert size={14} className="text-orange-600" />
                  Key Takeaway
                </span>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  Never blindly restart a recovered primary after a regional outage. It must be resynchronized as a replica from the current authoritative primary to prevent data corruption.
                </p>
              </div>
            </div>

            {/* Right Main Panel: Lesson Content */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-orange-600 tracking-wider">
                      Module 16 &bull; Lesson {activeLesson}
                    </span>
                    <h2 className="text-xl font-bold text-stone-900 mt-1">
                      {lessons[activeLesson]?.title}
                    </h2>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-stone-100 text-stone-600 font-bold">
                    {lessons[activeLesson]?.readTime}
                  </span>
                </div>

                {/* Lesson Body */}
                {lessons[activeLesson]?.content}

                {/* Next / Previous Lesson Buttons */}
                <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                  {(() => {
                    const keys = Object.keys(lessons);
                    const currIndex = keys.indexOf(activeLesson);
                    const prevKey = currIndex > 0 ? keys[currIndex - 1] : null;
                    const nextKey = currIndex < keys.length - 1 ? keys[currIndex + 1] : null;

                    return (
                      <>
                        {prevKey ? (
                          <button
                            type="button"
                            onClick={() => {
                              setActiveLesson(prevKey);
                              setActiveWeek(lessons[prevKey].week);
                            }}
                            className="flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-stone-950 transition cursor-pointer"
                          >
                            <ArrowLeft size={13} />
                            <span>Previous: {prevKey}</span>
                          </button>
                        ) : (
                          <div />
                        )}

                        {nextKey && (
                          <button
                            type="button"
                            onClick={() => {
                              setActiveLesson(nextKey);
                              setActiveWeek(lessons[nextKey].week);
                            }}
                            className="flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-800 transition cursor-pointer"
                          >
                            <span>Next: {nextKey}</span>
                            <ArrowRight size={13} />
                          </button>
                        )}
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE SIMULATORS                                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            {/* SIMULATOR 1: RTO/RPO BUSINESS IMPACT */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Simulator 1
                  </span>
                  <h3 className="font-extrabold text-stone-900 text-base">
                    RTO &amp; RPO Business Financial Loss &amp; SLA Estimator
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-orange-100 text-orange-800">
                  {rtoRpoImpact.slaTier}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 flex justify-between">
                    <span>Target RPO (Data Loss)</span>
                    <span className="font-mono text-orange-600">{simRpoMinutes} mins</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    step="1"
                    value={simRpoMinutes}
                    onChange={(e) => setSimRpoMinutes(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-500">Interval of committed data lost</span>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 flex justify-between">
                    <span>Target RTO (Downtime)</span>
                    <span className="font-mono text-orange-600">{simRtoMinutes} mins</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="180"
                    step="5"
                    value={simRtoMinutes}
                    onChange={(e) => setSimRtoMinutes(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-500">Service restoration duration</span>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 flex justify-between">
                    <span>Hourly Outage Cost ($)</span>
                    <span className="font-mono text-stone-900">${simHourlyCost.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="150000"
                    step="5000"
                    value={simHourlyCost}
                    onChange={(e) => setSimHourlyCost(Number(e.target.value))}
                    className="w-full accent-stone-800 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-500">Lost revenue &amp; SLA penalties/hr</span>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 flex justify-between">
                    <span>Write Rate (Mutations/s)</span>
                    <span className="font-mono text-stone-900">{simWriteRps} RPS</span>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="3000"
                    step="50"
                    value={simWriteRps}
                    onChange={(e) => setSimWriteRps(Number(e.target.value))}
                    className="w-full accent-stone-800 cursor-pointer"
                  />
                  <span className="text-[10px] text-stone-500">Candidate submissions/sec</span>
                </div>
              </div>

              {/* Metric Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#faf8f4] border border-stone-200">
                <div className="p-3 rounded-lg bg-white border border-stone-200 text-center">
                  <span className="text-[10px] font-mono uppercase text-stone-500 block mb-1">
                    Direct Downtime Loss
                  </span>
                  <span className="text-xl font-extrabold text-stone-900 font-mono">
                    ${rtoRpoImpact.directDowntimeLoss.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-stone-500 block mt-1">Based on {simRtoMinutes} min RTO</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-stone-200 text-center">
                  <span className="text-[10px] font-mono uppercase text-red-600 block mb-1">
                    Unrecoverable Mutations
                  </span>
                  <span className="text-xl font-extrabold text-red-700 font-mono">
                    {rtoRpoImpact.potentialLostRecords.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-stone-500 block mt-1">Candidate answers lost in gap</span>
                </div>

                <div className="p-3 rounded-lg bg-white border border-stone-200 text-center">
                  <span className="text-[10px] font-mono uppercase text-emerald-600 block mb-1">
                    Architectural Class
                  </span>
                  <span className="text-xs font-bold text-stone-800 block mt-1">
                    {rtoRpoImpact.slaTier.split(" (")[1]?.replace(")", "") || "Warm Standby"}
                  </span>
                  <span className="text-[10px] text-stone-500 block mt-0.5">Recommended DR Pattern</span>
                </div>
              </div>
            </div>

            {/* SIMULATOR 2: REPLICATION LAG ACCUMULATION */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                    Interactive Simulator 2
                  </span>
                  <h3 className="font-extrabold text-stone-900 text-base">
                    Cross-Region Replication Lag &amp; Backlog Calculator
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-stone-600">
                  Formula: Backlog = (Writes &minus; Applies) &times; &Delta;t
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 flex justify-between">
                    <span>Primary Commit Rate</span>
                    <span className="font-mono text-orange-600">{simPrimaryWrites} writes/s</span>
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={simPrimaryWrites}
                    onChange={(e) => setSimPrimaryWrites(Number(e.target.value))}
                    className="w-full accent-orange-600 cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 flex justify-between">
                    <span>Replica Apply Rate</span>
                    <span className="font-mono text-stone-900">{simReplicaApplies} writes/s</span>
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="5000"
                    step="100"
                    value={simReplicaApplies}
                    onChange={(e) => setSimReplicaApplies(Number(e.target.value))}
                    className="w-full accent-stone-800 cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-stone-700 flex justify-between">
                    <span>Network Contention Duration</span>
                    <span className="font-mono text-stone-900">{simDegradeSeconds}s</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="300"
                    step="10"
                    value={simDegradeSeconds}
                    onChange={(e) => setSimDegradeSeconds(Number(e.target.value))}
                    className="w-full accent-stone-800 cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs font-mono">
                <div className="p-3 rounded-lg bg-white border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Net Growth Rate</span>
                  <span className="text-base font-bold text-stone-900">
                    +{replicationLagStats.netGrowthRate} msgs/s
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Accumulated Backlog</span>
                  <span className="text-base font-bold text-orange-700">
                    {replicationLagStats.totalBacklogUpdates.toLocaleString()} updates
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Unreplicated WAL Volume</span>
                  <span className="text-base font-bold text-stone-900">
                    {replicationLagStats.backlogSizeMb} MB
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-stone-200">
                  <span className="text-[10px] text-stone-500 block">Replica Catch-up Time</span>
                  <span className="text-base font-bold text-emerald-700">
                    {replicationLagStats.recoveryCatchupSeconds}s
                  </span>
                </div>
              </div>
            </div>

            {/* SIMULATOR 3: 6-STEP FAILOVER RUNNER */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="border-b border-stone-200 pb-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                  Interactive Simulator 3
                </span>
                <h3 className="font-extrabold text-stone-900 text-base">
                  Interactive 6-Step Failover &amp; Split-Brain Fencing Runner
                </h3>
              </div>
              <RegionalFailoverDiagram />
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: 12 SENIOR INTERVIEW Q&A                                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/60 mb-2">
              <h3 className="font-bold text-stone-900 text-sm">
                12 Senior System Design Interview Questions &amp; Architectural Answers
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                These questions represent core scenarios asked at Google, AWS, Meta, and Netflix for Staff &amp; Principal Distributed Systems roles.
              </p>
            </div>

            {[
              {
                id: "qa-1",
                q: "1. What is the difference between multi-zone high availability and multi-region disaster recovery?",
                a: "Multi-Zone High Availability (HA) deploys redundant compute and database instances across multiple isolated data centers within a single geographic cloud region (<1–2ms private fiber latency), using automatic failover to survive localized hardware, power, or rack failures. Multi-Region Disaster Recovery (DR) deploys across distant geographic boundaries (thousands of km apart, 30–120ms RTT) to survive whole-region blackouts, natural disasters, or fiber cuts. While HA is typically synchronous and instant, DR is usually asynchronous and involves human-authorized runbook failovers to prevent split-brain.",
              },
              {
                id: "qa-2",
                q: "2. Explain RTO and RPO with a real-world example.",
                a: "Recovery Time Objective (RTO) is the maximum acceptable duration of service downtime following a disaster (e.g. restoring API availability within 15 minutes). Recovery Point Objective (RPO) is the maximum acceptable amount of data loss expressed as a time window (e.g. at most 5 minutes of committed transactions lost). For PrepSpaces, an RTO of 15m and RPO of 5m means if us-east-1 fails at 12:00 PM, the system must resume processing live interviews by 12:15 PM in eu-central-1, and transactions committed prior to 11:55 AM must be fully intact.",
              },
              {
                id: "qa-3",
                q: "3. When should an application use active-active rather than active-passive architecture?",
                a: "Active-Active is justified when: (1) RTO must be near-zero (< 1 minute) with zero tolerance for human failover intervention, (2) users are globally distributed and require sub-50ms local write latency, and (3) the data model can tolerate eventual consistency or utilizes partitioned ownership / CRDTs. Active-Passive (Warm Standby) is preferred when strong serializability is required, operational budget is constrained, or the engineering team wishes to avoid complex multi-master conflict resolution.",
              },
              {
                id: "qa-4",
                q: "4. What happens if the primary database fails before asynchronous replication catches up?",
                a: "Any transactions acknowledged by the primary but not yet transmitted or applied to the replica are stranded in the primary's unreachable WAL. Upon promoting the replica to become the new primary, those transactions become permanent data loss (the RPO gap). When the old primary is later recovered, it will have diverged from the new primary; its un-replicated WAL must be archived and audited manually to reconcile missing business operations.",
              },
              {
                id: "qa-5",
                q: "5. How do synchronous replication and asynchronous replication affect latency and durability?",
                a: "Synchronous replication guarantees zero data loss (RPO = 0) within its failure domain because the primary blocks write commits until the remote replica writes the WAL to disk; however, it penalizes every write with cross-region network RTT (e.g. +70–100ms) and reduces availability if the replica is unreachable. Asynchronous replication provides minimal write latency (primary commits locally and returns immediately) and protects availability during replica partitions, but risks losing recent committed transactions if the primary suffers sudden destruction.",
              },
              {
                id: "qa-6",
                q: "6. How would you prevent split-brain during regional failover?",
                a: "Split-brain is prevented by enforcing strict fencing before promoting a secondary replica: (1) Affirmative fencing: modify cloud IAM or security groups to revoke DB network access from the old primary (STONITH). (2) Distributed leases & fencing tokens: maintain an external quorum witness (e.g. AWS Route 53 ARC or Consul in a 3rd independent region) with monotonic epoch counters, rejecting requests carrying older epochs. (3) Traffic routing: immediately withdraw DNS or Anycast announcements for Region A prior to enabling Region B writes.",
              },
              {
                id: "qa-7",
                q: "7. How would you handle conflicting writes when two regions accept updates?",
                a: "Techniques include: (1) Avoidance via Partitioned Ownership: route user writes deterministically by tenant or geographic ID so each entity has a single authoritative region. (2) Conflict-free Replicated Data Types (CRDTs): use commutative structures (e.g. PN-counters or Observed-Remove Sets) where updates naturally converge. (3) Version vectors: track causality and surface unresolvable conflicts to application logic. (4) Last-Write-Wins (LWW): simple timestamp comparison, but highly vulnerable to NTP clock skew and silent data loss.",
              },
              {
                id: "qa-8",
                q: "8. Why is replication not a substitute for independent backups?",
                a: "Replication propagates state changes continuously in real time. If an operator accidentally executes DROP TABLE or a ransomware script encrypts rows, that mutation is replicated to all live standby replicas within milliseconds. Only independent, write-once (WORM), cross-region backups with Point-In-Time Recovery (PITR) allow restoring the database to a clean timestamp before the corruption occurred.",
              },
              {
                id: "qa-9",
                q: "9. How would you recover an application if its database survives but the primary region's configuration and secrets are unavailable?",
                a: "This requires: (1) Declarative Infrastructure as Code (IaC via Terraform/Pulumi) stored in multi-region Git repositories. (2) Multi-region secret replication using cloud KMS with cross-region multi-region keys (e.g. AWS KMS Multi-Region Keys). (3) Automated CI/CD pipelines deploying identical container images from geo-replicated container registries (e.g. ECR multi-region replication).",
              },
              {
                id: "qa-10",
                q: "10. Design a multi-region architecture for a payment-processing system with strict data-integrity requirements.",
                a: "Use an Active-Primary with Synchronous Standby in an adjacent low-latency metro region (<10ms RTT) for zero RPO transactions, combined with an Asynchronous Warm Standby in a distant continent for regional disaster recovery. Implement Idempotency Keys on all payment endpoints. Use the Two-Phase Commit or Outbox Pattern to decouple local ledger writes from remote message brokers. Require distributed fencing tokens to guarantee that only one payment ledger writer can exist at any millisecond.",
              },
              {
                id: "qa-11",
                q: "11. How would you test disaster recovery without disrupting production users?",
                a: "Methods include: (1) Standby Promotion Rehearsal: clone the warm standby database using storage volume snapshots in Region B, promote the clone, and run synthetic smoke tests against it without impacting live replication. (2) Shadow Traffic / Dark Launch: mirror a fraction of read requests to Region B to verify performance and cache warming. (3) Chaos Engineering / Game Days: simulate regional network degradation or simulate DNS failovers in staging environments that share identical IaC configurations with production.",
              },
              {
                id: "qa-12",
                q: "12. What would your failback procedure look like after a prolonged regional outage?",
                a: "Failback must never blindly restart the old primary. The runbook is: (1) Verify original Region A infrastructure is completely stable and healthy. (2) Reconfigure the old primary as a replica of Region B (the current authoritative primary), streaming all WAL generated during the incident. (3) Wait for replication lag to reach near-zero. (4) Schedule a brief maintenance window or execute a zero-downtime DNS shift: put Region B into read-only mode, wait for final WAL to sync to Region A, promote Region A back to primary, and point global DNS to Region A.",
              },
            ].map((qa) => {
              const isOpen = expandedQA[qa.id];
              return (
                <div key={qa.id} className="rounded-xl border border-stone-200 bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleQA(qa.id)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-stone-50 transition cursor-pointer"
                  >
                    <span className="font-bold text-stone-900 text-xs sm:text-sm">{qa.q}</span>
                    <span className="text-stone-400 font-mono text-xs">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="p-4 pt-0 border-t border-stone-100 bg-stone-50/50 text-xs text-stone-700 leading-relaxed">
                      {qa.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: 4 HANDS-ON LABS                                             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assignments" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-orange-600">Lab 1 &bull; Architecture</span>
                <span className="text-xs font-mono font-bold text-stone-500">2–3 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Multi-Region Blueprint Design</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Design a comprehensive two-region architecture for an e-commerce platform with one primary region (Virginia) and one recovery region (Frankfurt).
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>Topology diagram with API gateways, databases, queues, caches, and object storage.</li>
                  <li>Failure domain analysis matrix detailing single points of failure.</li>
                  <li>Cross-region network security model (VPC peering, private endpoints, TLS).</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Lab 2 &bull; Replication</span>
                <span className="text-xs font-mono font-bold text-stone-500">3–4 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Replication &amp; Lag Monitoring</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Model a PostgreSQL database serving 500 writes/sec. Calculate backlog accumulation during a 90-second network degradation event.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>Mathematical proof of potential RPO data loss window.</li>
                  <li>PostgreSQL <code className="font-mono">postgresql.conf</code> configuration for streaming replication.</li>
                  <li>Automated shell script querying <code className="font-mono">pg_stat_replication</code> for lag metrics.</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Lab 3 &bull; DR Runbook</span>
                <span className="text-xs font-mono font-bold text-stone-500">3–4 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Production Regional Failover Runbook</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Draft a production-grade incident failover runbook simulating a total catastrophic failure of the primary application region.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>6-phase runbook (Preparation, Detection, Decision, Recovery, Stabilization, Failback).</li>
                  <li>RACI matrix specifying Incident Commander, DB Lead, and Traffic Lead roles.</li>
                  <li>Split-brain fencing procedure and STONITH command checklist.</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-purple-600">Lab 4 &bull; Game Day</span>
                <span className="text-xs font-mono font-bold text-stone-500">4–5 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Chaos Testing &amp; Game Day Simulation</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Execute a chaos engineering simulation injecting network latency and database primary node termination in a staging environment.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>Measured RTO vs. Target RTO comparison log.</li>
                  <li>Audit of lost candidate records during failover window.</li>
                  <li>Remediation list covering configuration drift and secret mismatches.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: KNOWLEDGE CHECK (QUIZ)                                      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assessment" && (
          <div className="max-w-3xl mx-auto rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                  Self-Assessment Assessment
                </span>
                <h3 className="font-extrabold text-stone-900 text-lg">
                  Module 16 Knowledge Check
                </h3>
              </div>
              {quizSubmitted && (
                <div className="text-right">
                  <span className="text-xs font-mono font-bold block text-stone-500">Score</span>
                  <span
                    className={`text-xl font-extrabold font-mono ${
                      calculateScore() >= 4 ? "text-emerald-600" : "text-orange-600"
                    }`}
                  >
                    {calculateScore()} / {quizQuestions.length}
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q) => {
                const selectedOpt = selectedAnswers[q.id];
                const isAnswered = selectedOpt !== undefined;
                const isCorrect = isAnswered && selectedOpt === q.correctIndex;

                return (
                  <div key={q.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm">{q.question}</h4>
                    <div className="space-y-2">
                      {q.options.map((opt, idx) => {
                        let btnStyle = "border-stone-200 bg-white text-stone-800 hover:bg-stone-50";

                        if (quizSubmitted) {
                          if (idx === q.correctIndex) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold";
                          } else if (selectedOpt === idx) {
                            btnStyle = "border-red-400 bg-red-50 text-red-950 line-through";
                          } else {
                            btnStyle = "border-stone-200 bg-white text-stone-400 opacity-60";
                          }
                        } else if (selectedOpt === idx) {
                          btnStyle = "border-orange-500 bg-orange-50 text-orange-950 font-bold ring-1 ring-orange-500";
                        }

                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSelectOption(q.id, idx)}
                            className={`w-full text-left p-3 rounded-xl border text-xs transition flex items-center justify-between cursor-pointer ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && idx === q.correctIndex && (
                              <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                            )}
                            {quizSubmitted && selectedOpt === idx && idx !== q.correctIndex && (
                              <XCircle size={15} className="text-red-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 rounded-lg bg-stone-100 border border-stone-200 text-xs text-stone-700 leading-relaxed">
                        <strong className="block text-stone-900 mb-0.5">Explanation:</strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center justify-between">
              {!quizSubmitted ? (
                <button
                  type="button"
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                  className="w-full py-3 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-xs"
                >
                  Submit &amp; Check Answers
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setQuizSubmitted(false);
                    setSelectedAnswers({});
                  }}
                  className="w-full py-3 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw size={14} />
                  <span>Retake Quiz</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 6: RECOMMENDED TECHNICAL READING                               */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: "1",
                  title: "Microsoft Azure: Multi-Region Disaster Recovery",
                  source: "Microsoft Azure Architecture Center",
                  focus:
                    "Deep architectural blueprint analyzing Active-Active vs Active-Passive failover, deployment consistency across regions, and operational disaster recovery testing.",
                  url: "https://learn.microsoft.com/en-us/azure/well-architected/design-guides/disaster-recovery",
                },
                {
                  id: "2",
                  title: "AWS Well-Architected Framework: Disaster Recovery",
                  source: "AWS Reliability Pillar (REL-13)",
                  focus:
                    "Comprehensive guidance on defining RTO and RPO from business impact, preventing configuration drift, and automating disaster recovery runbooks with Route 53 ARC.",
                  url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/rel-13.html",
                },
                {
                  id: "3",
                  title: "PostgreSQL: Log-Shipping & Streaming Standby Servers",
                  source: "PostgreSQL Official Documentation",
                  focus:
                    "Technical manual on WAL archiving, asynchronous vs synchronous streaming replication, cascade replication, and failover trigger files.",
                  url: "https://www.postgresql.org/docs/current/warm-standby.html",
                },
              ].map((paper) => (
                <a
                  key={paper.id}
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 rounded-2xl border border-stone-200 bg-white hover:border-orange-400 hover:shadow-xs transition group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-500 mb-2">
                      <span className="font-bold text-orange-600">Resource {paper.id}</span>
                      <span>{paper.source}</span>
                    </div>
                    <h4 className="font-bold text-sm text-stone-900 group-hover:text-orange-600 transition">
                      {paper.title}
                    </h4>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">{paper.focus}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-orange-600">
                    <span>Read Documentation</span>
                    <ExternalLink size={13} />
                  </div>
                </a>
              ))}
            </div>

            {/* What Comes Next Banner */}
            <div className="mt-8 rounded-2xl border border-orange-200 bg-orange-50/70 p-5 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 block">
                  Masterclass Milestone &bull; Module 16 Complete
                </span>
                <span className="text-sm font-bold text-stone-900 block mt-0.5">
                  Multi-Region Systems, Replication Strategies &amp; Disaster Recovery
                </span>
                <span className="text-xs text-stone-600 block mt-0.5">
                  You now know how to design resilient architectures that survive complete cloud region outages, evaluate RTO vs. RPO trade-offs, compute replication lag backlogs, and execute split-brain-safe failover runbooks.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/scalability")}
                  className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Module 15 (Scalability)</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/reliability")}
                  className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <span>Advance to Module 17 (Reliability &amp; Observability)</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
