import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Terminal,
  Boxes,
  Layers,
  HardDrive,
  Network,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  Play,
  RotateCcw,
  Sliders,
  ChevronDown,
  ChevronUp,
  FileCode,
  Lock,
  Activity,
  Tag,
  BookOpen,
  Check,
  Eye,
  Server,
  Database,
  Cpu,
  RefreshCw,
  Zap,
  Globe,
  Radio,
  Flame,
  Cloud,
  GitBranch,
  GitCommit,
  GitPullRequest,
  ShieldAlert,
  Package,
  CheckCircle,
  XCircle,
  ArrowDown,
  ExternalLink,
  FastForward,
  Pause,
  Info,
  Copy,
  HelpCircle,
  ToggleLeft,
  ToggleRight,
  Split,
  Undo2,
  Calendar,
  Gauge,
  Clock,
  TrendingDown,
  TrendingUp,
  FileText,
  UserCheck,
  LifeBuoy,
  ListChecks,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsSRE() {
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'slo-lab' | 'incident-lab' | 'capacity-lab' | 'toil-lab' | 'prr-checklist' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const handleCopyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // =========================================================================
  // SIMULATOR 1: SLI, SLO & MULTI-WINDOW BURN-RATE CALCULATOR SANDBOX
  // Availability SLI, Error Budget (Reqs & Time), Burn Rate & Release Policy
  // =========================================================================
  const [totalRequests, setTotalRequests] = useState(100000);
  const [failedRequests, setFailedRequests] = useState(30);
  const [sloTargetPercent, setSloTargetPercent] = useState(99.95); // 99.95% target
  const [windowDays, setWindowDays] = useState(30);

  // Calculations
  const calculatedSli = useMemo(() => {
    if (totalRequests === 0) return 100;
    const success = Math.max(0, totalRequests - failedRequests);
    return ((success / totalRequests) * 100).toFixed(3);
  }, [totalRequests, failedRequests]);

  const errorBudgetFraction = useMemo(() => {
    return Math.max(0, 1 - sloTargetPercent / 100);
  }, [sloTargetPercent]);

  const allowedFailures = useMemo(() => {
    return Math.round(totalRequests * errorBudgetFraction);
  }, [totalRequests, errorBudgetFraction]);

  const allowedDowntimeMinutes = useMemo(() => {
    return (windowDays * 24 * 60 * errorBudgetFraction).toFixed(1);
  }, [windowDays, errorBudgetFraction]);

  const observedErrorRatio = useMemo(() => {
    if (totalRequests === 0) return 0;
    return failedRequests / totalRequests;
  }, [totalRequests, failedRequests]);

  const burnRate = useMemo(() => {
    if (errorBudgetFraction === 0) return 0;
    return (observedErrorRatio / errorBudgetFraction).toFixed(1);
  }, [observedErrorRatio, errorBudgetFraction]);

  const budgetConsumedPercent = useMemo(() => {
    if (allowedFailures === 0) return 100;
    return Math.min(100, Math.round((failedRequests / allowedFailures) * 100));
  }, [failedRequests, allowedFailures]);

  // Policy Decision
  const policyGate = useMemo(() => {
    const br = parseFloat(burnRate);
    if (budgetConsumedPercent >= 100) {
      return {
        status: "FROZEN",
        badge: "Release Freeze",
        color: "bg-rose-600 text-white",
        desc: "Error budget completely exhausted (0% remaining). Non-essential and high-risk releases are frozen. 100% of engineering velocity shifts to reliability, automated testing, and technical debt remediation.",
      };
    }
    if (br >= 14.4) {
      return {
        status: "CRITICAL BURN",
        badge: "Emergency Mitigation",
        color: "bg-rose-500 text-white animate-pulse",
        desc: "Burn rate is 14.4x! At this rate, 2% of the monthly error budget is burned every hour. Immediate investigation required; halt current deployment rollout.",
      };
    }
    if (br > 2.0 || budgetConsumedPercent > 70) {
      return {
        status: "CAUTION",
        badge: "Heightened Review",
        color: "bg-amber-500 text-white",
        desc: "Burn rate is elevated (>2x) or budget consumed >70%. Senior SRE review required before releasing high-risk database or architectural changes.",
      };
    }
    return {
      status: "HEALTHY",
      badge: "Normal Velocity",
      color: "bg-emerald-600 text-white",
      desc: "Error budget is healthy (>30% headroom) and burn rate is nominal (<1x). Normal feature velocity and standard automated releases permitted under policy.",
    };
  }, [burnRate, budgetConsumedPercent]);

  // =========================================================================
  // SIMULATOR 2: INCIDENT RESPONSE & BLAMELESS POSTMORTEM SANDBOX
  // Notes API Connection Pool Leak (Pods Running, DB Failing, 5xx Spiking)
  // =========================================================================
  const [incidentStep, setIncidentStep] = useState(0); // 0: baseline, 1: detected, 2: coordinated, 3: mitigated, 4: verified, 5: postmortem
  const [incidentLog, setIncidentLog] = useState([
    "Normal Operations: Notes API running 12 replicas. HTTP 5xx rate: 0.01%. Latency p99: 14.2ms.",
  ]);

  const handleAdvanceIncident = () => {
    if (incidentStep === 0) {
      setIncidentStep(1);
      setIncidentLog((prev) => [
        "🚨 [02:14:00 UTC] ALERT TRIGGERED: 'NotesApiFastErrorBudgetBurn' fired! 14.4x burn rate detected over 5m/1h windows. HTTP 5xx rate spiked to 8.4%. Kubelet reports all Pods 'Running'.",
        ...prev,
      ]);
    } else if (incidentStep === 1) {
      setIncidentStep(2);
      setIncidentLog((prev) => [
        "👥 [02:16:30 UTC] INCIDENT DECLARED (Sev-1): Incident Commander assigned (Samarth). Operations Lead (Alex) investigating PostgreSQL metrics. Communications Lead updates internal status channel.",
        ...prev,
      ]);
    } else if (incidentStep === 2) {
      setIncidentStep(3);
      setIncidentLog((prev) => [
        "🛑 [02:21:00 UTC] MITIGATION EXECUTED: Discovered deployment v1.2.4 introduced unclosed psycopg2 connection leak. Operations Lead halted canary rollout and issued instant rollback to v1.2.3. Service connection pool drained.",
        ...prev,
      ]);
    } else if (incidentStep === 3) {
      setIncidentStep(4);
      setIncidentLog((prev) => [
        "✅ [02:26:00 UTC] VERIFICATION COMPLETE: HTTP 5xx rate dropped to 0.02%. p99 latency returned to 14.5ms. Synthetic note creation tests passing across all zones.",
        ...prev,
      ]);
    } else if (incidentStep === 4) {
      setIncidentStep(5);
      setIncidentLog((prev) => [
        "📝 [02:30:00 UTC] BLAMELESS POSTMORTEM PUBLISHED: Root systemic cause identified (missing database pool timeout in new connection manager). 3 actionable engineering work items assigned with due dates.",
        ...prev,
      ]);
    }
  };

  const handleResetIncident = () => {
    setIncidentStep(0);
    setIncidentLog([
      "Normal Operations: Notes API running 12 replicas. HTTP 5xx rate: 0.01%. Latency p99: 14.2ms.",
    ]);
  };

  // =========================================================================
  // SIMULATOR 3: CAPACITY PLANNING & KUBERNETES HPA CALCULATOR
  // (n - 1) * 70 >= 750 => n = 12 replicas. Database connection limits.
  // =========================================================================
  const [forecastPeakRps, setForecastPeakRps] = useState(750);
  const [perReplicaSafeRps, setPerReplicaSafeRps] = useState(70);
  const [maxDbConnections, setMaxDbConnections] = useState(100);
  const [poolSizePerPod, setPoolSizePerPod] = useState(10);

  const calculatedMinReplicas = useMemo(() => {
    if (perReplicaSafeRps <= 0) return 1;
    // (n - 1) * perReplicaSafeRps >= forecastPeakRps
    // n - 1 >= forecastPeakRps / perReplicaSafeRps
    // n >= (forecastPeakRps / perReplicaSafeRps) + 1
    const n = Math.ceil(forecastPeakRps / perReplicaSafeRps) + 1;
    return Math.max(3, n);
  }, [forecastPeakRps, perReplicaSafeRps]);

  const totalDbConnectionsDemanded = useMemo(() => {
    return calculatedMinReplicas * poolSizePerPod;
  }, [calculatedMinReplicas, poolSizePerPod]);

  const isDbBottlenecked = totalDbConnectionsDemanded > maxDbConnections;

  // =========================================================================
  // SIMULATOR 4: TOIL REGISTER & MONTHLY EFFORT CALCULATOR
  // Task occurrences, minutes per task, calculating hours saved
  // =========================================================================
  const [toilTasks, setToilTasks] = useState([
    { id: 1, name: "Manually restarting Notes API pod when memory leaks", occurrences: 24, mins: 15, fix: "Fix memory leak in image parser & configure memory limit restart probe" },
    { id: 2, name: "Copying staging DB credentials into CI secrets manually", occurrences: 8, mins: 30, fix: "Implement OpenID Connect (OIDC) & Vault automated secret injection" },
    { id: 3, name: "Manually executing SQL schema updates in staging", occurrences: 12, mins: 45, fix: "Automate expand-and-contract migrations in Argo CD PreSync Job" },
  ]);

  const totalToilHoursMonthly = useMemo(() => {
    return toilTasks.reduce((acc, t) => acc + (t.occurrences * t.mins) / 60, 0).toFixed(1);
  }, [toilTasks]);

  // =========================================================================
  // SIMULATOR 5: PRODUCTION READINESS REVIEW (PRR) CHECKLIST
  // 15 checks across 5 domains from user curriculum
  // =========================================================================
  const [prrChecks, setPrrChecks] = useState({
    c1: true, c2: true, c3: false,
    c4: true, c5: true, c6: false,
    c7: true, c8: false, c9: false,
    c10: true, c11: true, c12: false,
    c13: true, c14: true, c15: false,
  });

  const prrScore = useMemo(() => {
    const total = Object.keys(prrChecks).length;
    const checked = Object.values(prrChecks).filter(Boolean).length;
    return { checked, total, percent: Math.round((checked / total) * 100) };
  }, [prrChecks]);

  const togglePrr = (key) => {
    setPrrChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // =========================================================================
  // CURRICULUM THEORY: 8 IN-DEPTH TOPICS (GOOGLE SRE FOUNDATIONS)
  // =========================================================================
  const curriculumTopics = useMemo(
    () => [
      {
        id: "sre_operating_model",
        title: "1. The SRE Operating Model: Engineering vs Operations",
        badge: "Foundations",
        icon: Activity,
        summary:
          "SRE is applying software engineering to operations so systems remain reliable as they scale. Reliability is an engineering property to manage, not a promise that software will never fail.",
        academicSource:
          "Google SRE Book (Chapter 1 & 2) & Google SRE Workbook (Operating Model)",
        details: [
          {
            heading: "The SRE Feedback Loop",
            body: "SRE establishes a virtuous closed-loop feedback cycle:\n1. Define Reliability: Measure user outcomes with SLIs and agree on shared SLOs with product teams.\n2. Observe Production: Collect user-impact telemetry across metrics, logs, and distributed traces.\n3. Manage Risk: Track error-budget consumption and use it to gate deployment frequency.\n4. Respond and Learn: Coordinate structured incident mitigation, restore service rapidly, and write blameless postmortems.\n5. Improve the Service: Eliminate operational toil through software engineering, capacity planning, and automated resilience.",
          },
          {
            heading: "Why 100% Reliability Is the Wrong Target",
            body: "Striving for 100% availability is economically irrational and counterproductive:\n- Users cannot discern the difference between 99.99% and 100% availability because their home ISP, cellular connection, and mobile device fail far more frequently.\n- The cost of closing the last fraction of a percent increases exponentially, requiring redundant data centers and complex consensus protocols.\n- 100% reliability freezes innovation because every release introduces some risk of failure. SRE embraces risk within an explicit budget.",
          },
        ],
        codeSnippet: `# SRE Core Principle:
# Reliability = User Experience
# Error Budget = Innovation Currency
#
# When Budget is Positive:
#   Ship features quickly, accept calculated deployment risks.
# When Budget is Depleted:
#   Slow down releases, divert 100% engineering effort to reliability.`,
      },
      {
        id: "sli_slo_sla_framework",
        title: "2. The SLI, SLO & SLA Framework Defined",
        badge: "Objectives",
        icon: Gauge,
        summary:
          "Distinguish actual performance (SLI), internal engineering targets (SLO), and contractual customer commitments (SLA). Measure what users experience, not merely CPU percentages.",
        academicSource:
          "Google SRE Book (Service Level Objectives) & SRE Workbook (Defining SLOs)",
        details: [
          {
            heading: "Definitions and Core Distinctions",
            body: "- SLI (Service Level Indicator): A quantitative measure of service performance experienced by users. E.g., 'What percentage of eligible HTTP requests returned HTTP 200 within 300ms?'\n- SLO (Service Level Objective): A target reliability level chosen for an SLI over a rolling window (e.g. 99.95% over a 30-day window). This is an internal target used by engineering to guide release cadence.\n- SLA (Service Level Agreement): A formal business contract with users specifying remedies, penalties, or billing credits if performance drops below a threshold (e.g. <99.9% availability grants 10% credit).\n\nPractical SRE Rule: Always set internal SLOs tighter than external SLAs so engineering has a safety margin before contractual breach occurs.",
          },
          {
            heading: "Request-Based Availability Formula",
            body: "For an API, the standard request-based SLI is defined as:\n\nSLI = (Eligible Successful Requests / Total Eligible Requests) * 100%\n\nIf the Notes API processes 100,000 eligible requests and 99,970 succeed, the measured availability SLI is 99.97%.\nAlways document numerator and denominator logic: exclude client-side 400 Bad Request validation errors, but NEVER exclude database 500 errors.",
          },
        ],
        codeSnippet: `# Prometheus PromQL SLI Definition for Notes API Availability:
# Numerator: Total HTTP requests that returned non-5xx status
# Denominator: Total HTTP requests received
sum(rate(notes_http_requests_total{status_class=~"2..|3..|4.."}[30d]))
/
clamp_min(sum(rate(notes_http_requests_total[30d])), 1)`,
      },
      {
        id: "error_budgets_and_burn_rates",
        title: "3. Error Budgets, Policies & Multi-Window Burn-Rate Alerting",
        badge: "Error Budgets",
        icon: Flame,
        summary:
          "The error budget is the amount of unreliability permitted by an SLO. Master budget calculations (requests vs time), burn-rate mathematics, and multi-window alerting.",
        academicSource:
          "Google SRE Workbook (Alerting on SLOs) & Prometheus SLO Design Patterns",
        details: [
          {
            heading: "Calculating the Budget (Requests vs Time)",
            body: "- Error Budget Fraction = 1 - SLO. At a 99.95% SLO, the budget is 0.05% (0.0005).\n- Request-based: On 1,000,000 requests, budget is 500 failed requests.\n- Time-based: In a 30-day rolling window: 30 * 24 * 60 * 0.0005 = 21.6 minutes of downtime per month.\nThese metrics are not interchangeable! An API failing for 5 minutes during peak Cyber Monday traffic burns far more request budget than 5 minutes during Sunday 3:00 AM.",
          },
          {
            heading: "Burn Rate Mathematics & Multi-Window Alerting",
            body: "Burn Rate = Observed Error Ratio / (1 - SLO)\nIf the observed error rate is 1% (0.01) against a 99.95% SLO (0.0005):\nBurn Rate = 0.01 / 0.0005 = 20x. At 20x, a 30-day budget is exhausted in 1.5 days!\n\nMulti-Window Alerting:\nAlerting on high burn rate requires evaluating BOTH a short window (e.g. 5 minutes) and a longer window (e.g. 1 hour) at 14.4x burn rate. This guarantees immediate paging for major outages (consuming 2% of budget in 1 hour) while preventing pager fatigue from momentary 10-second blips.",
          },
        ],
        codeSnippet: `# Prometheus Rule: Multi-Window Multi-Burn-Rate SLO Alert
groups:
  - name: notes-api-slo-alerts
    rules:
      - alert: NotesApiFastErrorBudgetBurn
        expr: |
          (
            (sum(rate(notes_http_requests_total{job="notes-api",status_class="5xx"}[5m]))
             / clamp_min(sum(rate(notes_http_requests_total{job="notes-api"}[5m])), 0.001))
            / 0.0005 > 14.4
          )
          and
          (
            (sum(rate(notes_http_requests_total{job="notes-api",status_class="5xx"}[1h]))
             / clamp_min(sum(rate(notes_http_requests_total{job="notes-api"}[1h])), 0.001))
            / 0.0005 > 14.4
          )
        for: 2m
        labels:
          severity: page
        annotations:
          summary: "Notes API is consuming error budget rapidly (14.4x burn rate)"`,
      },
      {
        id: "latency_and_percentiles",
        title: "4. Latency Distribution & Why Averages Lie",
        badge: "Latency Engineering",
        icon: TrendingDown,
        summary:
          "Uptime is not enough. A slow service is indistinguishable from a down service. Understand why average latency conceals long-tail user agony and why p95/p99 percentiles matter.",
        academicSource:
          "Google SRE Book (Monitoring Distributed Systems) & Cambridge Systems",
        details: [
          {
            heading: "The Flaw of Averages",
            body: "Suppose an API handles 1,000 requests:\n- 950 requests complete in 100 ms.\n- 50 requests take 2,000 ms (2 seconds).\nThe mathematical average is 195 ms, which looks deceptively healthy on a dashboard. But 5% of users suffered an excruciating 2-second delay! The p95 latency is 2,000 ms.\nIn a microservice mesh where a user request touches 20 downstream services, a slow p95 latency in one service causes nearly 64% of overall user requests to experience delay.",
          },
          {
            heading: "Latency SLO Definition",
            body: "A complete production SLO pairs availability with latency:\n'Over a rolling 30-day window, at least 99.0% of successful Notes API requests must return in less than 300 ms, measured at the edge Ingress controller.'",
          },
        ],
        codeSnippet: `# PromQL Histogram Quantile for p95 & p99 Latency
# p95 Response Time over 5-minute rolling rate
histogram_quantile(0.95, sum(rate(notes_http_request_duration_seconds_bucket[5m])) by (le))

# p99 Latency SLO compliance check:
sum(rate(notes_http_request_duration_seconds_bucket{le="0.3"}[30d]))
/
clamp_min(sum(rate(notes_http_request_duration_seconds_count[30d])), 1) >= 0.99`,
      },
      {
        id: "capacity_planning_and_hpa",
        title: "5. Capacity Planning, N+1 Redundancy & Kubernetes HPA",
        badge: "Capacity Planning",
        icon: Server,
        summary:
          "Capacity planning ensures infrastructure handles peak demand plus unexpected node failures. Master load testing, N+1 replica sizing, database bottleneck modeling, and Kubernetes HPA.",
        academicSource:
          "Google SRE Book (Managing Critical State & Capacity) & Kubernetes HPA v2 Documentation",
        details: [
          {
            heading: "The N+1 Sizing Formula",
            body: "Assume load testing proves a single Notes API Pod handles 100 req/sec comfortably. You forecast a peak load of 750 req/sec and allocate 70 req/sec per Pod as conservative operating headroom.\nTo survive the sudden failure of 1 replica without exceeding capacity:\n(n - 1) * 70 >= 750\nn - 1 >= 10.71\nn >= 11.71 --> 12 replicas required.\nOperating headroom and failure buffers prevent cascading brownouts.",
          },
          {
            heading: "Dependency Bottlenecks: The Database Connection Trap",
            body: "Scaling the API from 3 Pods to 12 Pods does NOT automatically quadruple capacity! If each Pod maintains a connection pool of 10 connections to PostgreSQL, 12 Pods will open 120 connections. If PostgreSQL max_connections is configured to 100, the 12th Pod will exhaust the database pool, crashing the entire application. Capacity planning must evaluate the whole system graph.",
          },
        ],
        codeSnippet: `# Kubernetes Horizontal Pod Autoscaler (HPA v2) for Notes API
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: notes-api-hpa
  namespace: notes
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: notes-api
  minReplicas: 3
  maxReplicas: 12
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 60`,
      },
      {
        id: "toil_elimination",
        title: "6. Eliminating Toil: The Engineering Approach to Operations",
        badge: "Toil Reduction",
        icon: TrendingUp,
        summary:
          "Toil is manual, repetitive, predictable, automatable operational work that scales linearly with service size and produces no enduring value. Learn to quantify toil and replace it with engineering.",
        academicSource:
          "Google SRE Book (Eliminating Toil) & Google SRE Workbook (Toil Management)",
        details: [
          {
            heading: "What Is (and Is Not) Toil",
            body: "Toil is characterized by:\n- Manual: running commands by hand.\n- Repetitive: performed over and over.\n- Automatable: a software program could execute it.\n- Tactically reactive: solves an immediate issue without improving the system.\n- Scales linearly: as traffic doubles, the work doubles.\nInvestigating an anomalous outage, designing a new architecture, or writing a postmortem is NOT toil—it is high-value engineering.",
          },
          {
            heading: "The Toil Budget & Engineering Solutions",
            body: "Google SRE caps toil at 50% of an engineer's time; the remaining >=50% must be dedicated to pure software engineering.\nToil Register calculation:\nMonthly Hours = Monthly Occurrences * Hours per Occurrence\nIf an engineer spends 20 minutes manually restarting a leaking service 30 times a month, that is 10 hours/month wasted. The engineering solution is not an automated cron restart (a band-aid); it is profiling memory allocations and fixing the heap leak in code.",
          },
        ],
        codeSnippet: `# SRE Toil Audit & Remediation Register
# Task: Manual Staging Database Schema Updates
# Occurrences: 12 times / month
# Duration: 45 minutes / occurrence
# Monthly Toil: 9.0 hours / month
#
# Engineering Solution:
# Implement Flyway/Prisma migration runner in Argo CD PreSync Job.
# Result: 0 manual hours, 100% auditable GitOps automation.`,
      },
      {
        id: "incident_response_lifecycle",
        title: "7. Structured Incident Response & Blameless Postmortems",
        badge: "Incident Command",
        icon: LifeBuoy,
        summary:
          "Incident response is about rapid mitigation, clear command hierarchy, and blameless retrospective learning. Restore service before root-cause hunting; fix systemic flaws.",
        academicSource:
          "Google SRE Incident Management Guide & Google Postmortem Culture",
        details: [
          {
            heading: "Incident Command Hierarchy",
            body: "During a major outage, uncoordinated debugging leads to chaos. SRE assigns strict roles:\n1. Incident Commander (IC): Leads the response, sets priorities, authorizes rollbacks, and prevents distractions.\n2. Operations Lead (OL): Directs technical investigation, applies mitigations, and manages infrastructure changes.\n3. Communications Lead (CL): Formulates internal stakeholder and customer-facing status updates.\n\nSRE Principle: Mitigate first, analyze later! Roll back bad releases or shed load before chasing deep root causes.",
          },
          {
            heading: "Blameless Postmortem Philosophy",
            body: "Humans do not wake up intending to break production. Making 'human error' the conclusion of an outage stops investigation prematurely. A blameless postmortem examines:\n- Why did the CI system allow the invalid configuration through?\n- Why did the staging environment fail to detect the bug?\n- Why did the monitoring system take 20 minutes to page?\n- How can guardrails be engineered so this class of failure is mathematically impossible in the future?",
          },
        ],
        codeSnippet: `# Google SRE Blameless Postmortem Template Outline
# 1. Summary: What failed, user impact, total duration, resolution.
# 2. Impact: Affected requests (84,200), Error budget consumed (18.4%).
# 3. Timeline: UTC timestamps for detection, IC declaration, mitigation, recovery.
# 4. Contributing Factors: Combination of latent technical & process bugs.
# 5. Corrective Action Items:
#    - [P0] Add connection pool max-lifetime in db/pool.py (Owner: Alex, Due: Oct 18)
#    - [P1] Configure 14.4x Prometheus burn-rate alert in Alertmanager (Owner: Samarth)`,
      },
      {
        id: "production_readiness_review",
        title: "8. Production Readiness Review (PRR) & SRE Engagement",
        badge: "Production Readiness",
        icon: ListChecks,
        summary:
          "Before assuming operational ownership, SREs conduct a Production Readiness Review. Verify meaningful health probes, tested runbooks, capacity headroom, and emergency recovery paths.",
        academicSource:
          "Google SRE Book (Accelerating SRE via PRR) & CNCF Production Standards",
        details: [
          {
            heading: "The 5 PRR Evaluation Domains",
            body: "A PRR evaluates 5 non-negotiable architectural pillars:\n1. Service Behavior: Are SLIs and SLOs established? Do `/healthz` and `/readyz` probes test meaningful dependencies?\n2. Observability: Are dashboards built for traffic, errors, latency, and saturation (USE & RED methods)? Are alerts actionable?\n3. Resilience & Capacity: Has the service survived load testing at peak demand? Are timeouts, retries, and circuit breakers bounded?\n4. Release & Recovery: Are images pinned to immutable digests? Has rollback been tested in staging?\n5. Operations & Security: Is an actionable runbook written? Are credentials rotated via OIDC?",
          },
          {
            heading: "Runbook vs Postmortem",
            body: "- Runbook: Prescriptive, step-by-step diagnostic and remediation guide used during active operations (e.g., 'How to recover from Notes API connection pool exhaustion').\n- Postmortem: Historical retrospective explaining why an incident occurred and detailing engineering follow-up work.",
          },
        ],
        codeSnippet: `# Production Readiness Review Decision Matrix:
# - Passed: Service meets all 15 reliability criteria; SRE accepts on-call ownership.
# - Conditional Acceptance: Minor non-critical gaps; release permitted with remediation deadline.
# - Rejected: Critical resilience, monitoring, or rollback gaps; development team retains 100% operational ownership.`,
      },
    ],
    []
  );

  // =========================================================================
  // MASTERY ASSESSMENT QUESTIONS (15 IN-DEPTH PRODUCTION QUESTIONS)
  // Derived directly from Section 18 of user prompt
  // =========================================================================
  const masteryQuestions = [
    {
      q: "What makes a metric a useful SLI (Service Level Indicator) rather than just an infrastructure measurement?",
      options: [
        "A useful SLI measures the service as directly experienced by users (e.g. request success rate, latency), whereas infrastructure metrics (CPU, memory, pod restarts) can appear healthy while users experience failure.",
        "An SLI must be measured in gigabytes per second.",
        "An SLI is only valid if it measures the temperature of the physical server CPU.",
        "Infrastructure metrics and SLIs are identical synonyms in modern DevOps."
      ],
      correctIndex: 0,
      a: "An SLI must directly reflect user satisfaction. A Pod can report 15% CPU utilization and zero restarts while every database query fails with a 500 error. The user experiences an outage, yet infrastructure metrics look healthy. Therefore, user-facing request success and latency are genuine SLIs, while CPU is a secondary diagnostic indicator.",
    },
    {
      q: "How can a web service meet its Availability SLO (e.g., 99.95% HTTP 200) and still provide an unacceptable user experience?",
      options: [
        "The service returns HTTP 200 responses that contain stale, empty, or corrupted data, or takes 10 seconds to respond, violating correctness and latency expectations.",
        "Because 99.95% is too low a number for any website.",
        "Because HTTP 200 means the server was hacked.",
        "This is impossible; an HTTP 200 response always guarantees complete user satisfaction."
      ],
      correctIndex: 0,
      a: "Availability alone is not reliability. A service could return HTTP 200 with an empty body (`{\"notes\": []}`) due to a caching failure, or take 8 seconds per request. Users experience failure despite the technical HTTP 200 status code. Comprehensive SLOs must include latency percentiles and data correctness.",
    },
    {
      q: "What is the primary operational distinction between an internal SLO and a contractual SLA?",
      options: [
        "An SLO is an internal engineering target used to guide release velocity and error budgets; an SLA is an external customer-facing agreement with contractual penalties or credits if breached.",
        "An SLO is for Linux while an SLA is for Windows.",
        "SLAs are measured by engineers while SLOs are written by lawyers.",
        "An SLO is always looser than an SLA."
      ],
      correctIndex: 0,
      a: "An SLO (Service Level Objective) is set by engineering and product teams to manage risk and trigger release policies. An SLA (Service Level Agreement) is a legally binding commitment to customers specifying financial credits. Internal SLOs are always configured tighter than SLAs to provide a safety buffer before contractual penalties occur.",
    },
    {
      q: "Why do request-based error budgets and time-based error budgets yield fundamentally different operational results?",
      options: [
        "Traffic is uneven: a 5-minute outage during peak Cyber Monday traffic burns a massive number of requests, whereas a 5-minute outage at 3:00 AM on Sunday consumes the same time budget but almost zero request budget.",
        "Time-based budgets only apply to hardware clocks.",
        "Request-based budgets are only used for mobile apps.",
        "They yield identical results under all mathematical conditions."
      ],
      correctIndex: 0,
      a: "Time-based availability (e.g. minutes of downtime) treats every minute equally. Request-based availability (failed requests / total requests) weights the failure by actual customer volume. An outage during peak traffic impacts tens of thousands of users and burns significant request budget, whereas an outage at midnight has minimal customer impact.",
    },
    {
      q: "If a service with a 99.95% availability SLO is currently experiencing a 20x error-budget burn rate, what does this tell an on-call SRE?",
      options: [
        "The service is failing at 1.0% error rate and will exhaust its entire 30-day error budget in just 1.5 days (36 hours) if the failure persists.",
        "The server is running 20 times faster than normal.",
        "The error budget will last for 20 months.",
        "The service has zero errors."
      ],
      correctIndex: 0,
      a: "Burn rate = Observed Failure Ratio / (1 - SLO). For a 99.95% SLO, the allowed failure ratio is 0.0005. A 20x burn rate means the current failure ratio is 20 * 0.0005 = 0.01 (1.0% error rate). At 20x speed, a 30-day budget burns down in 30 / 20 = 1.5 days, indicating an urgent threat to the SLO.",
    },
    {
      q: "Why might an SRE team restrict or halt risky production releases even before the error budget is 100% exhausted?",
      options: [
        "A rapidly escalating burn rate indicates that the remaining budget will be breached shortly; pausing risky changes protects the remaining buffer and prevents an SLA violation.",
        "To allow developers to leave early on Fridays.",
        "Because Kubernetes stops working when the budget reaches 50%.",
        "Because error budgets can never be replenished."
      ],
      correctIndex: 0,
      a: "Error budget policies use burn rate thresholds (e.g., burning >14.4x) to act proactively. Waiting until 100% of the budget is burned means the SLO has already failed. Intervening early when consumption is dangerously steep preserves reliability and avoids breaching customer SLAs.",
    },
    {
      q: "In capacity planning, why must an engineering team size the service to handle peak traffic with N-1 replicas?",
      options: [
        "To ensure that if an active replica or Kubernetes worker node crashes, the surviving N-1 replicas can absorb 100% of peak traffic without suffering cascading brownouts or latency degradation.",
        "Because Kubernetes requires an even number of Pods.",
        "Because the Nth replica is always reserved for the CEO.",
        "To reduce cloud compute costs by 50%."
      ],
      correctIndex: 0,
      a: "N+1 redundancy guarantees that a cluster can tolerate the unexpected failure or rolling upgrade of an instance without compromising user performance. Sizing $(n-1) \\times \\text{capacity} \\ge \\text{Peak Demand}$ ensures peak load is fully supported during single-node failures.",
    },
    {
      q: "Why does autoscaling the number of API replicas (e.g., from 3 to 12) sometimes cause overall system performance and database health to degrade?",
      options: [
        "Each new API replica creates additional database connections and concurrent queries; if the database connection pool or disk I/O saturates, the database locks up, causing widespread 5xx errors.",
        "Because Kubernetes Pods cannot communicate with PostgreSQL.",
        "Because having 12 pods changes the IP address of the cluster.",
        "Because more pods always consume less power."
      ],
      correctIndex: 0,
      a: "Application compute is rarely the only bottleneck. Scaling API replicas multiplies demand on downstream shared dependencies (databases, caches, third-party APIs). If 12 Pods each open 10 database connections, they demand 120 connections against a database configured for 100, causing connection exhaustion and cascading system failure.",
    },
    {
      q: "Why is high CPU utilization (e.g. CPU > 80%) alone not always an effective condition for paging an on-call engineer?",
      options: [
        "A service can run at 85% CPU efficiently without any degradation in user latency or error rates; paging on CPU causes alert fatigue, whereas paging on user-facing SLO burn rates reflects genuine incidents.",
        "Because CPUs do not exist in cloud computing.",
        "Because CPU utilization is only measured once a week.",
        "Because modern CPUs never fail."
      ],
      correctIndex: 0,
      a: "High CPU utilization is often expected under load and does not necessarily indicate user-facing harm. Conversely, a service with 10% CPU can be completely broken if a database deadlock occurs. Paging should be reserved for actionable user impact or rapid SLO budget depletion, not symptom-level resource usage.",
    },
    {
      q: "What fundamental characteristic distinguishes operational 'toil' from valuable engineering work?",
      options: [
        "Toil is manual, repetitive, predictable, and automatable work that scales linearly with service size and produces no enduring value; engineering work improves architecture and automates failure recovery.",
        "Toil is any work done in the terminal, while engineering is done in Jira.",
        "Toil is only performed by managers.",
        "There is no difference; all operational tasks are considered toil."
      ],
      correctIndex: 0,
      a: "As defined by Google SRE, toil is operational work that is manual, repetitive, predictable, lacks enduring value, and scales linearly as service traffic increases (e.g. manually restarting services or manually migrating databases). Engineering work creates long-term structural improvements that eliminate toil permanently.",
    },
    {
      q: "What five components make an on-call alert actionable for a responding engineer?",
      options: [
        "Clear User Impact, Corroborating Telemetry Evidence, Blast Radius Scope, Dashboard & Trace Links, and an actionable Next-Step Runbook.",
        "A loud ringtone, a red screen, an email to all staff, a Twitter post, and an apology.",
        "The CPU model number, motherboard temperature, BIOS version, MAC address, and RAM serial number.",
        "A link to stackoverflow.com and an invitation to a meeting."
      ],
      correctIndex: 0,
      a: "An actionable alert must enable rapid diagnosis and mitigation under pressure. It provides: 1) What user impact is occurring; 2) What metric/burn-rate threshold fired; 3) What service/environment is affected; 4) Direct links to Grafana and Jaeger traces; 5) A concise runbook with tested remediation steps.",
    },
    {
      q: "Why should incident response prioritize rapid service mitigation over identifying the root cause?",
      options: [
        "The primary duty of SRE is to stop customer bleeding and restore availability; deep forensic investigation and root-cause analysis can be conducted safely after the system is stabilized.",
        "Because root causes never matter in software engineering.",
        "Because finding root causes requires rebooting the cloud provider.",
        "Because rollbacks are illegal in production."
      ],
      correctIndex: 0,
      a: "While customers are experiencing downtime, spending 45 minutes analyzing stack traces while users fail transactions is irresponsible. SREs prioritize mitigation first (rollback, shedding load, flipping a feature flag) to stop customer impact immediately, deferring root-cause analysis to the postmortem.",
    },
    {
      q: "What is the core philosophical purpose of a 'Blameless' Postmortem?",
      options: [
        "To focus on systemic, architectural, and procedural flaws rather than blaming individuals, fostering honest reporting and engineering controls that prevent recurring failure.",
        "To ensure that nobody gets fired or takes responsibility for anything.",
        "To hide system outages from executive leadership.",
        "To blame third-party cloud providers exclusively."
      ],
      correctIndex: 0,
      a: "Blameless postmortems recognize that human error is a symptom of flawed systems, not the cause. If people fear punishment, they hide mistakes. By assuming good faith, teams analyze latent technical gaps, missing guardrails, and inadequate testing, creating structural engineering solutions that prevent recurrence.",
    },
    {
      q: "What verifiable evidence should a Production Readiness Review (PRR) mandate before SRE accepts operational ownership?",
      options: [
        "Established SLIs/SLOs, automated health checks, distributed tracing, load-tested peak capacity, tested rollback procedures, and an actionable emergency runbook.",
        "A written promise that the software has zero bugs.",
        "Proof that the code was written by a senior engineer.",
        "A PowerPoint presentation with at least 50 slides."
      ],
      correctIndex: 0,
      a: "A PRR requires objective evidence: 1) Defined SLIs and measurement windows; 2) Tested `/readyz` probes; 3) Grafana dashboards and actionable burn-rate alerts; 4) Proven capacity headroom with load tests; 5) Documented and tested rollback procedures; 6) An up-to-date runbook.",
    },
    {
      q: "How would an SRE team prove that reliability genuinely improved after completing postmortem corrective actions?",
      options: [
        "Demonstrate a reduction in MTTR (Mean Time to Restore), lower error-budget burn rates over rolling 30-day windows, and zero recurrences of the specific failure mode in production telemetry.",
        "Check that all Jira tickets were moved to the 'Done' column.",
        "Ask developers if they feel more confident.",
        "Verify that no releases were shipped for six months."
      ],
      correctIndex: 0,
      a: "Reliability improvements must be empirically verified via telemetry: tracking error-budget burn rates across rolling 30-day windows, verifying lower Mean Time to Restore (MTTR), observing healthy latency percentiles during peak traffic, and proving zero recurrences of the remediated failure class.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="devops"
          currentModuleId="sre"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Nova SRE AI"
        />

        {/* HERO SECTION */}
        <div className="rounded-3xl border border-stone-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-10 shadow-sm mb-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700 mb-3">
              <Gauge size={14} />
              <span>Google SRE Principles · SLI/SLO/SLA · Error Budgets · Incident Command</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Module 9 — Site Reliability Engineering (SRE)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
              SRE is the discipline of applying software engineering to operations so that production systems remain reliable as they scale.{" "}
              <strong className="text-stone-900 font-semibold">
                Manage reliability as an engineering property, govern releases with error budgets, automate toil, and lead blameless incident response.
              </strong>{" "}
              Grounded in the <span className="font-semibold text-stone-900">Google Site Reliability Engineering Book</span>, the{" "}
              <span className="font-semibold text-stone-900">Google SRE Workbook</span>, and Kubernetes production operational patterns.
            </p>
          </div>

          {/* TAB BAR NAVIGATION */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-stone-200 pb-3">
            {[
              { id: "theory", label: "Curriculum & Theory (8 Topics)", icon: BookOpen },
              { id: "slo-lab", label: "Lab 1: SLO & Burn-Rate Sandbox", icon: Gauge },
              { id: "incident-lab", label: "Lab 2: Incident & Postmortem", icon: LifeBuoy },
              { id: "capacity-lab", label: "Lab 3: Capacity & HPA Sizing", icon: Server },
              { id: "toil-lab", label: "Lab 4: Toil Reduction Register", icon: TrendingUp },
              { id: "prr-checklist", label: "Lab 5: Production Readiness (PRR)", icon: ListChecks },
              { id: "mastery", label: "Mastery Assessment (15 Questions)", icon: CheckCircle2 },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all shadow-sm ${
                    isActive
                      ? "bg-orange-500 text-white shadow-orange-500/20 shadow-md"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200/80 border border-stone-200"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* AI TUTOR EMBED */}
        {showAiTutor && (
          <div className="mb-10">
            <LearningRo
              currentTopic="devops-sre-principles"
              onClose={() => setShowAiTutor(false)}
            />
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 1: THEORY & CURRICULUM (8 TOPICS)                              */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* TOPICS SIDEBAR */}
            <div className="lg:col-span-4 space-y-2">
              <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-stone-600 font-mono">
                SRE Curriculum Topics (8)
              </div>
              {curriculumTopics.map((topic, idx) => {
                const Icon = topic.icon;
                const isSelected = selectedTopic === idx;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 ${
                      isSelected
                        ? "bg-stone-900 text-white border-stone-900 shadow-md"
                        : "bg-white/80 hover:bg-white border-stone-200/80 text-stone-800"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl shrink-0 ${
                        isSelected
                          ? "bg-orange-500 text-white"
                          : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full ${
                            isSelected
                              ? "bg-stone-800 text-orange-400"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {topic.badge}
                        </span>
                      </div>
                      <h4
                        className={`text-sm font-bold mt-1 truncate ${
                          isSelected ? "text-white" : "text-stone-900"
                        }`}
                      >
                        {topic.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* TOPIC CONTENT DISPLAY */}
            <div className="lg:col-span-8">
              {curriculumTopics[selectedTopic] && (
                <div className="rounded-3xl border border-stone-200/90 bg-white p-6 sm:p-10 shadow-sm space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs font-bold font-mono uppercase mb-3">
                      {curriculumTopics[selectedTopic].badge}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                      {curriculumTopics[selectedTopic].title}
                    </h2>
                    <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed">
                      {curriculumTopics[selectedTopic].summary}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-stone-600 bg-stone-50 border border-stone-200 p-2.5 rounded-xl">
                      <BookOpen size={14} className="text-orange-600 shrink-0" />
                      <span>
                        Primary Source:{" "}
                        <strong className="text-stone-800">
                          {curriculumTopics[selectedTopic].academicSource}
                        </strong>
                      </span>
                    </div>
                  </div>

                  {/* DEEP DIVE DETAILS */}
                  <div className="space-y-6 pt-4 border-t border-stone-100">
                    {curriculumTopics[selectedTopic].details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        className="rounded-2xl border border-stone-200/70 bg-stone-50/50 p-5"
                      >
                        <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                          <CheckCircle size={16} className="text-orange-600" />
                          <span>{detail.heading}</span>
                        </h3>
                        <p className="mt-2 text-sm text-stone-700 leading-relaxed whitespace-pre-line font-sans">
                          {detail.body}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CODE SNIPPET BOX */}
                  {curriculumTopics[selectedTopic].codeSnippet && (
                    <div className="rounded-2xl border border-stone-800 bg-[#18181b] overflow-hidden shadow-lg">
                      <div className="flex items-center justify-between px-4 py-2.5 bg-stone-900 border-b border-stone-800 text-xs font-mono text-stone-400">
                        <div className="flex items-center gap-2">
                          <FileCode size={14} className="text-orange-400" />
                          <span>Prometheus Rule / SRE Manifest</span>
                        </div>
                        <button
                          onClick={() =>
                            handleCopyCode(
                              selectedTopic,
                              curriculumTopics[selectedTopic].codeSnippet
                            )
                          }
                          className="inline-flex items-center gap-1 text-[11px] text-stone-300 hover:text-white transition"
                        >
                          {copiedCodeId === selectedTopic ? (
                            <>
                              <Check size={12} className="text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} />
                              <span>Copy code</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-5 text-xs sm:text-sm font-mono text-stone-200 overflow-x-auto leading-relaxed">
                        <code>{curriculumTopics[selectedTopic].codeSnippet}</code>
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: LAB 1 - SLI, SLO & BURN-RATE CALCULATOR SANDBOX              */}
        {/* =================================================================== */}
        {activeTab === "slo-lab" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive SRE Simulator • Lab 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                SLI, SLO & Multi-Window Burn-Rate Calculator
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Adjust request volume, failures, and SLO targets. Observe real-time <strong>Availability SLI</strong>,
                allowed error budget in requests and time, <strong>Burn Rate</strong>, and automated{" "}
                <strong>Release Policy gating</strong>.
              </p>

              {/* INPUT CONTROLS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 pt-5 border-t border-stone-200 font-mono text-xs">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Total Eligible Requests: {totalRequests.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="1000000"
                    step="10000"
                    value={totalRequests}
                    onChange={(e) => setTotalRequests(parseInt(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Failed Requests (5xx Errors): {failedRequests.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="5"
                    value={failedRequests}
                    onChange={(e) => setFailedRequests(parseInt(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    SLO Target: {sloTargetPercent}%
                  </label>
                  <div className="flex items-center gap-2">
                    {[99.9, 99.95, 99.99].map((val) => (
                      <button
                        key={val}
                        onClick={() => setSloTargetPercent(val)}
                        className={`px-3 py-1.5 rounded-lg border font-bold transition ${
                          sloTargetPercent === val
                            ? "bg-stone-900 text-white border-stone-900"
                            : "bg-stone-50 text-stone-700 border-stone-300"
                        }`}
                      >
                        {val}%
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* LIVE KPI METRICS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  Measured Availability SLI
                </div>
                <div
                  className={`text-3xl font-black mt-2 ${
                    parseFloat(calculatedSli) >= sloTargetPercent
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }`}
                >
                  {calculatedSli}%
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Target SLO: &ge; {sloTargetPercent}%
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  Error Budget (Requests)
                </div>
                <div className="text-3xl font-black text-stone-900 mt-2">
                  {failedRequests} / {allowedFailures}
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  {budgetConsumedPercent}% Consumed
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  Error Budget (Time)
                </div>
                <div className="text-3xl font-black text-stone-900 mt-2">
                  {allowedDowntimeMinutes} min
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Allowed over {windowDays}-day rolling window
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  Burn Rate Multiplier
                </div>
                <div
                  className={`text-3xl font-black mt-2 ${
                    parseFloat(burnRate) >= 14.4
                      ? "text-rose-600 animate-pulse"
                      : parseFloat(burnRate) > 1.0
                      ? "text-amber-600"
                      : "text-emerald-600"
                  }`}
                >
                  {burnRate}x
                </div>
                <div className="text-xs text-stone-500 mt-1">
                  Alert Threshold: &gt; 14.4x
                </div>
              </div>
            </div>

            {/* RELEASE POLICY DECISION CARD */}
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-stone-500 uppercase">
                    Automated Release Policy Action:
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${policyGate.color}`}
                  >
                    {policyGate.badge}
                  </span>
                </div>
                <span className="text-xs font-mono text-stone-400">
                  Google SRE Error-Budget Policy Governance
                </span>
              </div>
              <p className="text-sm text-stone-700 leading-relaxed font-sans">
                {policyGate.desc}
              </p>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - INCIDENT RESPONSE & BLAMELESS POSTMORTEM SANDBOX     */}
        {/* =================================================================== */}
        {activeTab === "incident-lab" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Interactive Incident Drill • Lab 2
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    Notes API Connection Leak Incident & Postmortem
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                    Walk through the 5-phase Google SRE incident sequence:{" "}
                    <strong>1. Detect</strong> (14.4x burn rate) → <strong>2. Declare & Coordinate</strong> (Incident Command roles) →{" "}
                    <strong>3. Mitigate</strong> (Rapid rollback before root-cause hunting) →{" "}
                    <strong>4. Verify</strong> → <strong>5. Blameless Postmortem</strong>.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleAdvanceIncident}
                    disabled={incidentStep === 5}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-orange-500 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-orange-600 disabled:opacity-50 transition"
                  >
                    <FastForward size={14} />
                    <span>Advance Phase ({incidentStep + 1}/5)</span>
                  </button>
                  <button
                    onClick={handleResetIncident}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-stone-300 bg-stone-100 px-3.5 py-2.5 text-xs font-bold text-stone-700 hover:bg-stone-200 transition"
                  >
                    <RotateCcw size={14} />
                    <span>Reset Drill</span>
                  </button>
                </div>
              </div>

              {/* 5-STAGE INCIDENT LIFECYCLE BAR */}
              <div className="mt-6 pt-5 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs font-mono">
                {[
                  { step: 1, name: "1. Detect", desc: "14.4x Burn Alert" },
                  { step: 2, name: "2. Coordinate", desc: "IC & Ops Leads" },
                  { step: 3, name: "3. Mitigate", desc: "Rollback v1.2.4" },
                  { step: 4, name: "4. Verify", desc: "Check 5xx & Probes" },
                  { step: 5, name: "5. Postmortem", desc: "Blameless Actions" },
                ].map((s) => (
                  <div
                    key={s.step}
                    className={`p-3 rounded-xl border ${
                      incidentStep >= s.step
                        ? "bg-stone-900 text-white border-stone-900 font-bold"
                        : "bg-stone-50 text-stone-600 border-stone-200"
                    }`}
                  >
                    <div>{s.name}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* LIVE EVENT LOG & TERMINAL */}
            <div className="rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-orange-400" />
                  <span>SRE Incident Response Log Stream & Audit Trail</span>
                </div>
                <span>Severity: {incidentStep >= 1 && incidentStep < 4 ? "SEV-1 (CRITICAL)" : "NOMINAL"}</span>
              </div>
              <div className="space-y-2 font-mono text-xs max-h-56 overflow-y-auto pr-2">
                {incidentLog.map((log, lIdx) => (
                  <div key={lIdx} className="leading-relaxed text-stone-300">
                    {log}
                  </div>
                ))}
              </div>
            </div>

            {/* BLAMELESS POSTMORTEM TEMPLATE PREVIEW (PHASE 5) */}
            {incidentStep === 5 && (
              <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-10 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                  <div className="flex items-center gap-2">
                    <FileText size={18} className="text-orange-600" />
                    <h3 className="text-lg font-bold text-stone-900">
                      Blameless Postmortem: Notes API Connection Pool Exhaustion
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-bold">
                    Status: Resolved & Audited
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="font-bold text-stone-500 uppercase">Impact Metrics:</span>
                    <div>Total Duration: 12 minutes</div>
                    <div>Affected Requests: 84,200 requests (8.4% error rate)</div>
                    <div>Error Budget Consumed: 18.4% of 30-day budget</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="font-bold text-stone-500 uppercase">Contributing Factors:</span>
                    <div>1. Release v1.2.4 introduced unhandled exception skipping connection.close()</div>
                    <div>2. Staging test database lacked connection pool concurrency saturation tests</div>
                  </div>
                </div>

                {/* ACTION ITEMS TABLE */}
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-stone-700 uppercase">
                    Preventive Engineering Work Items (Tracked in JIRA):
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs border border-stone-200 rounded-xl overflow-hidden">
                      <thead className="bg-stone-100 text-stone-700">
                        <tr>
                          <th className="p-3">Action Item</th>
                          <th className="p-3">Owner</th>
                          <th className="p-3">Priority</th>
                          <th className="p-3">Due Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200">
                        <tr>
                          <td className="p-3">Wrap all DB connections in Python context managers (with pool.get_conn())</td>
                          <td className="p-3">Alex (Backend Lead)</td>
                          <td className="p-3 text-rose-600 font-bold">P0</td>
                          <td className="p-3">Oct 16</td>
                        </tr>
                        <tr>
                          <td className="p-3">Add connection pool saturation test to CI integration suite</td>
                          <td className="p-3">Samarth (SRE Lead)</td>
                          <td className="p-3 text-orange-600 font-bold">P1</td>
                          <td className="p-3">Oct 18</td>
                        </tr>
                        <tr>
                          <td className="p-3">Configure Prometheus pg_stat_activity alert at 80% connection capacity</td>
                          <td className="p-3">DevOps Team</td>
                          <td className="p-3 text-stone-600 font-bold">P2</td>
                          <td className="p-3">Oct 22</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - CAPACITY PLANNING & HPA SIZING SANDBOX               */}
        {/* =================================================================== */}
        {activeTab === "capacity-lab" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive SRE Simulator • Lab 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Capacity Planning, N+1 Redundancy & Database Bottleneck Sandbox
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Estimate the required replica count to survive peak traffic with <strong>N+1 redundancy</strong>:{" "}
                <code>(n - 1) * 70 &ge; 750</code>. Discover why scaling API Pods without database capacity causes instant database crashes!
              </p>

              {/* INPUT SLIDERS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 pt-5 border-t border-stone-200 font-mono text-xs">
                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Forecast Peak Traffic: {forecastPeakRps} req/s
                  </label>
                  <input
                    type="range"
                    min="200"
                    max="2000"
                    step="50"
                    value={forecastPeakRps}
                    onChange={(e) => setForecastPeakRps(parseInt(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    Per-Replica Safe Limit: {perReplicaSafeRps} req/s
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="150"
                    step="5"
                    value={perReplicaSafeRps}
                    onChange={(e) => setPerReplicaSafeRps(parseInt(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    PostgreSQL max_connections: {maxDbConnections}
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="250"
                    step="10"
                    value={maxDbConnections}
                    onChange={(e) => setMaxDbConnections(parseInt(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>

                <div>
                  <label className="font-bold text-stone-700 block mb-1">
                    DB Pool Size per Pod: {poolSizePerPod}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="20"
                    step="1"
                    value={poolSizePerPod}
                    onChange={(e) => setPoolSizePerPod(parseInt(e.target.value))}
                    className="w-full accent-orange-600"
                  />
                </div>
              </div>
            </div>

            {/* CAPACITY CALCULATION CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  Calculated Replicas (N+1 Redundancy)
                </div>
                <div className="text-4xl font-black text-stone-900 mt-2">
                  {calculatedMinReplicas} Pods
                </div>
                <div className="text-xs text-stone-600 mt-2 font-mono">
                  Formula: ({calculatedMinReplicas} - 1) &times; {perReplicaSafeRps} = {(calculatedMinReplicas - 1) * perReplicaSafeRps} &ge; {forecastPeakRps} req/s
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  DB Connections Demanded
                </div>
                <div
                  className={`text-4xl font-black mt-2 ${
                    isDbBottlenecked ? "text-rose-600" : "text-emerald-600"
                  }`}
                >
                  {totalDbConnectionsDemanded} / {maxDbConnections}
                </div>
                <div className="text-xs text-stone-600 mt-2 font-mono">
                  {calculatedMinReplicas} Pods &times; {poolSizePerPod} connections
                </div>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-mono font-bold text-stone-500 uppercase">
                  System Health Assessment
                </div>
                <div
                  className={`text-2xl font-black mt-2 ${
                    isDbBottlenecked ? "text-rose-600" : "text-emerald-600"
                  }`}
                >
                  {isDbBottlenecked ? "DATABASE CRASH DETECTED" : "HEALTHY HEADROOM"}
                </div>
                <div className="text-xs text-stone-600 mt-2">
                  {isDbBottlenecked
                    ? "Scaling to 12 Pods exceeds PostgreSQL connection pool. Autoscaling will cause database collapse!"
                    : "Database connections within configured capacity."}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: LAB 4 - TOIL REGISTER & EFFICIENCY CALCULATOR               */}
        {/* =================================================================== */}
        {activeTab === "toil-lab" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Operational Efficiency • Lab 4
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    SRE Toil Register & Engineering Remediation
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                    Google SRE mandates that at least 50% of an engineer's time is dedicated to pure engineering,
                    capping toil at 50%. Track repeated tasks and replace manual band-aids with software engineering.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-orange-50 border border-orange-200 text-right">
                  <div className="text-xs font-mono font-bold text-orange-800 uppercase">
                    Total Toil Spent Monthly
                  </div>
                  <div className="text-3xl font-black text-orange-900 mt-1">
                    {totalToilHoursMonthly} hours
                  </div>
                </div>
              </div>
            </div>

            {/* TOIL TASKS LIST */}
            <div className="space-y-4">
              {toilTasks.map((t) => {
                const hours = ((t.occurrences * t.mins) / 60).toFixed(1);
                return (
                  <div
                    key={t.id}
                    className="p-6 rounded-3xl border border-stone-200 bg-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200">
                          {t.occurrences}x / month ({t.mins} min each)
                        </span>
                        <h4 className="text-base font-bold text-stone-900">
                          {t.name}
                        </h4>
                      </div>
                      <p className="text-xs text-stone-600 font-sans mt-1">
                        <strong>Engineering Fix: </strong> {t.fix}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-xl font-black text-stone-900 font-mono">
                        {hours} hrs / mo
                      </div>
                      <span className="text-[10px] text-stone-500 uppercase font-mono">
                        Toil Reclaimable
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 6: LAB 5 - PRODUCTION READINESS REVIEW (PRR) CHECKLIST          */}
        {/* =================================================================== */}
        {activeTab === "prr-checklist" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    SRE Operational Gate • Lab 5
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    Production Readiness Review (PRR) Checklist
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                    Before an SRE team accepts on-call ownership, the service must pass 15 criteria across 5 domains.
                    A completed checklist is evidence of preparation, not an assumption of reliability.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-right font-mono">
                  <div className="text-xs font-bold text-stone-600 uppercase">
                    Readiness Score
                  </div>
                  <div
                    className={`text-3xl font-black mt-1 ${
                      prrScore.percent >= 80 ? "text-emerald-600" : "text-amber-600"
                    }`}
                  >
                    {prrScore.checked} / {prrScore.total} ({prrScore.percent}%)
                  </div>
                </div>
              </div>
            </div>

            {/* 15 CHECKLIST ITEMS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { key: "c1", domain: "Service Behavior", label: "SLIs, SLOs and 30-day measurement windows are explicitly defined." },
                { key: "c2", domain: "Service Behavior", label: "Health checks (/healthz and /readyz) test meaningful application dependencies." },
                { key: "c3", domain: "Service Behavior", label: "Critical user workflows have automated synthetic prober tests." },
                { key: "c4", domain: "Observability", label: "Grafana dashboards show traffic, errors, latency, and saturation (RED & USE)." },
                { key: "c5", domain: "Observability", label: "Multi-window burn-rate alerts are actionable and route to on-call." },
                { key: "c6", domain: "Observability", label: "Distributed traces with OpenTelemetry trace requests across databases." },
                { key: "c7", domain: "Resilience & Capacity", label: "Service has undergone load testing at peak forecast with N-1 replicas." },
                { key: "c8", domain: "Resilience & Capacity", label: "Downstream dependencies have timeouts, retries, and circuit breakers." },
                { key: "c9", domain: "Resilience & Capacity", label: "Database connection pool limits are modeled against max HPA replicas." },
                { key: "c10", domain: "Release & Recovery", label: "Deployments reference immutable SHA-256 digests, not mutable tags." },
                { key: "c11", domain: "Release & Recovery", label: "Rollback and feature flag kill-switches have been tested in staging." },
                { key: "c12", domain: "Release & Recovery", label: "Database schema migrations use backward-compatible expand-and-contract." },
                { key: "c13", domain: "Operations & Security", label: "Service has named primary and secondary on-call escalation paths." },
                { key: "c14", domain: "Operations & Security", label: "Actionable emergency runbook with copy-paste commands is documented." },
                { key: "c15", domain: "Operations & Security", label: "Secrets and IAM credentials use short-lived OIDC tokens without static keys." },
              ].map((item) => (
                <div
                  key={item.key}
                  onClick={() => togglePrr(item.key)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    prrChecks[item.key]
                      ? "bg-white border-emerald-300 shadow-sm"
                      : "bg-stone-50/60 border-stone-200 hover:bg-white"
                  }`}
                >
                  <div
                    className={`h-5 w-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition ${
                      prrChecks[item.key]
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "border-stone-300 bg-white"
                    }`}
                  >
                    {prrChecks[item.key] && <Check size={13} />}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-stone-400 block">
                      {item.domain}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-sans leading-snug ${
                        prrChecks[item.key]
                          ? "text-stone-900 font-semibold"
                          : "text-stone-600"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 7: FINAL MASTERY ASSESSMENT (15 IN-DEPTH QUESTIONS)            */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Comprehensive Assessment • 15 Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Site Reliability Engineering (SRE) Mastery Certification
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Test your conceptual and operational depth across SLIs, SLOs, SLAs, error-budget burn rates,
                latency percentiles, N+1 capacity planning, toil elimination, incident command, and blameless postmortems.
              </p>
            </div>

            <div className="space-y-4">
              {masteryQuestions.map((mq, mIdx) => {
                const isOpen = openMasteryIndex === mIdx;
                return (
                  <div
                    key={mIdx}
                    className="rounded-2xl border border-stone-200 bg-white shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenMasteryIndex(isOpen ? null : mIdx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-stone-50/80 transition"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-orange-100 text-orange-800 text-xs font-mono font-bold shrink-0 mt-0.5">
                          {mIdx + 1}
                        </span>
                        <h4 className="text-base font-bold text-stone-900 leading-snug">
                          {mq.q}
                        </h4>
                      </div>
                      <div className="p-1 rounded-lg text-stone-500 shrink-0">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="p-6 pt-0 border-t border-stone-100 space-y-4 mt-2">
                        <div className="space-y-2">
                          {mq.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-3.5 rounded-xl border text-xs sm:text-sm font-sans flex items-start gap-3 ${
                                oIdx === mq.correctIndex
                                  ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold"
                                  : "bg-stone-50 border-stone-200 text-stone-700"
                              }`}
                            >
                              <span
                                className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold shrink-0 mt-0.5 ${
                                  oIdx === mq.correctIndex
                                    ? "bg-emerald-600 text-white"
                                    : "bg-stone-200 text-stone-600"
                                }`}
                              >
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <span>{opt}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-200 text-xs text-stone-800 leading-relaxed font-sans">
                          <strong className="text-orange-900 font-bold block mb-1">
                            Architectural Rationale:
                          </strong>
                          {mq.a}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTTOM CURRICULUM FOOTER */}
        <div className="rounded-3xl border border-[#27272a] bg-[#18181b] p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs font-bold text-orange-400 uppercase tracking-wider">
              DevOps & SRE Track • Module 9 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Site Reliability Engineering Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand the SRE operating model: defining user-centric SLIs/SLOs, managing error budgets
              and burn rates, capacity planning with N+1 redundancy, eliminating operational toil, leading incident
              response, writing blameless postmortems, and conducting production readiness reviews.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/deployment")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 7: Deployment
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/reliability")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 10 — Reliability →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
