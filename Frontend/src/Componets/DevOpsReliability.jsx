import React, { useState, useMemo, useEffect } from "react";
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
  Filter,
  BarChart3,
  Timer,
  Shield,
  Shuffle,
  AlertOctagon,
  Anchor,
  Minimize2,
  Share2,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function DevOpsReliability() {
  const navigate = useNavigate();

  // Navigation & UI State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(25);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'retry-lab' | 'breaker-lab' | 'bulkhead-lab' | 'shedding-lab' | 'dr-lab' | 'failure-drills' | 'readiness' | 'mastery'
  const [openMasteryIndex, setOpenMasteryIndex] = useState(null);
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const handleCopyCode = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // =========================================================================
  // SIMULATOR 1: EXPONENTIAL BACKOFF & FULL JITTER WAVEFORM SANDBOX
  // Visualizes Thundering Herd vs Full Jitter dispersion with concurrent clients
  // =========================================================================
  const [baseDelayMs, setBaseDelayMs] = useState(200);
  const [maxDelayMs, setMaxDelayMs] = useState(5000);
  const [maxRetries, setMaxRetries] = useState(4);
  const [numClients, setNumClients] = useState(2000);
  const [jitterMode, setJitterMode] = useState("full"); // 'none' | 'equal' | 'full'

  // Calculate retry schedule & wave distribution
  const retrySchedule = useMemo(() => {
    const list = [];
    for (let i = 0; i <= maxRetries; i++) {
      const expDelay = Math.min(maxDelayMs, baseDelayMs * Math.pow(2, i));
      let minDelay = 0;
      let calculatedDelay = expDelay;

      if (jitterMode === "none") {
        minDelay = expDelay;
        calculatedDelay = expDelay;
      } else if (jitterMode === "equal") {
        minDelay = expDelay / 2;
        calculatedDelay = expDelay; // Range: [expDelay/2, expDelay]
      } else {
        // Full Jitter
        minDelay = 0;
        calculatedDelay = expDelay; // Range: [0, expDelay]
      }

      list.push({
        attempt: i + 1,
        expDelay,
        minDelay,
        maxDelay: expDelay,
        spreadMs: expDelay - minDelay,
      });
    }
    return list;
  }, [baseDelayMs, maxDelayMs, maxRetries, jitterMode]);

  const shockFactor = useMemo(() => {
    if (jitterMode === "none") return { label: "Severe (Thundering Herd)", score: 98, color: "text-rose-600 bg-rose-50 border-rose-200" };
    if (jitterMode === "equal") return { label: "Moderate Dispersion", score: 45, color: "text-amber-600 bg-amber-50 border-amber-200" };
    return { label: "Optimal (Full Random Dispersion)", score: 8, color: "text-emerald-600 bg-emerald-50 border-emerald-200" };
  }, [jitterMode]);

  // =========================================================================
  // SIMULATOR 2: CIRCUIT BREAKER 3-STATE MACHINE & CANARY PROBE SANDBOX
  // Live CLOSED -> OPEN -> HALF-OPEN state machine
  // =========================================================================
  const [breakerState, setBreakerState] = useState("CLOSED"); // 'CLOSED' | 'OPEN' | 'HALF-OPEN'
  const [failureThreshold, setFailureThreshold] = useState(4);
  const [cooldownSec, setCooldownSec] = useState(5);
  const [consecutiveFailures, setConsecutiveFailures] = useState(0);
  const [halfOpenSuccesses, setHalfOpenSuccesses] = useState(0);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const [breakerEvents, setBreakerEvents] = useState([
    { time: "12:00:00", text: "Circuit breaker initialized in CLOSED state. Calls forwarding to notes-preview-svc.", type: "info" },
  ]);

  // Cooldown countdown effect
  useEffect(() => {
    let timer = null;
    if (breakerState === "OPEN" && cooldownRemaining > 0) {
      timer = setInterval(() => {
        setCooldownRemaining((prev) => {
          if (prev <= 1) {
            setBreakerState("HALF-OPEN");
            setHalfOpenSuccesses(0);
            setBreakerEvents((logs) => [
              { time: new Date().toLocaleTimeString(), text: "Cooldown period elapsed! Transitioned state from OPEN → HALF-OPEN. Permitting canary probe requests.", type: "warn" },
              ...logs.slice(0, 14),
            ]);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [breakerState, cooldownRemaining]);

  const handleSimulateRequest = (isSuccess) => {
    const timestamp = new Date().toLocaleTimeString();

    if (breakerState === "OPEN") {
      setBreakerEvents((logs) => [
        { time: timestamp, text: `[FAST FAIL] Call rejected instantly by OPEN circuit breaker (0ms latency, zero downstream load). Returning fallback empty preview. Cooldown: ${cooldownRemaining}s left.`, type: "error" },
        ...logs.slice(0, 14),
      ]);
      return;
    }

    if (breakerState === "CLOSED") {
      if (isSuccess) {
        setConsecutiveFailures(0);
        setBreakerEvents((logs) => [
          { time: timestamp, text: "[SUCCESS] Dependency response received in 42ms. Consecutive failures reset to 0.", type: "success" },
          ...logs.slice(0, 14),
        ]);
      } else {
        const nextFail = consecutiveFailures + 1;
        setConsecutiveFailures(nextFail);
        if (nextFail >= failureThreshold) {
          setBreakerState("OPEN");
          setCooldownRemaining(cooldownSec);
          setBreakerEvents((logs) => [
            { time: timestamp, text: `[TRIPPED] Failure threshold reached (${nextFail}/${failureThreshold})! Breaker state changed: CLOSED → OPEN. Cooling down for ${cooldownSec}s.`, type: "error" },
            ...logs.slice(0, 14),
          ]);
        } else {
          setBreakerEvents((logs) => [
            { time: timestamp, text: `[FAILURE] Dependency timed out. Consecutive failures: ${nextFail}/${failureThreshold}.`, type: "warn" },
            ...logs.slice(0, 14),
          ]);
        }
      }
    } else if (breakerState === "HALF-OPEN") {
      if (isSuccess) {
        const nextSuccess = halfOpenSuccesses + 1;
        setHalfOpenSuccesses(nextSuccess);
        if (nextSuccess >= 2) {
          setBreakerState("CLOSED");
          setConsecutiveFailures(0);
          setHalfOpenSuccesses(0);
          setBreakerEvents((logs) => [
            { time: timestamp, text: "[HEALED] 2 consecutive probe requests succeeded! Dependency recovered. Breaker state: HALF-OPEN → CLOSED.", type: "success" },
            ...logs.slice(0, 14),
          ]);
        } else {
          setBreakerEvents((logs) => [
            { time: timestamp, text: `[PROBE SUCCESS] Canary probe 1/2 succeeded. One more probe required to close breaker.`, type: "info" },
            ...logs.slice(0, 14),
          ]);
        }
      } else {
        setBreakerState("OPEN");
        setCooldownRemaining(cooldownSec);
        setHalfOpenSuccesses(0);
        setBreakerEvents((logs) => [
          { time: timestamp, text: `[PROBE FAILED] Canary probe failed. Dependency is still down! Breaker state: HALF-OPEN → OPEN. Resetting ${cooldownSec}s cooldown.`, type: "error" },
          ...logs.slice(0, 14),
        ]);
      }
    }
  };

  const handleResetBreaker = () => {
    setBreakerState("CLOSED");
    setConsecutiveFailures(0);
    setHalfOpenSuccesses(0);
    setCooldownRemaining(0);
    setBreakerEvents([
      { time: new Date().toLocaleTimeString(), text: "Circuit breaker manually reset to CLOSED state.", type: "info" },
    ]);
  };

  // =========================================================================
  // SIMULATOR 3: BULKHEAD & CONCURRENCY ISOLATION POOL SANDBOX
  // Critical CRUD pool vs Optional Heavy Reporting pool
  // =========================================================================
  const [criticalPoolLimit, setCriticalPoolLimit] = useState(20);
  const [optionalPoolLimit, setOptionalPoolLimit] = useState(5);
  const [criticalActive, setCriticalActive] = useState(4);
  const [optionalActive, setOptionalActive] = useState(2);
  const [bulkheadMode, setBulkheadMode] = useState("isolated"); // 'isolated' | 'shared'

  const handleBurstOptional = () => {
    if (bulkheadMode === "isolated") {
      setOptionalActive(optionalPoolLimit); // Maxes out optional only
    } else {
      // Shared pool: 25 total
      setOptionalActive(22);
      setCriticalActive(Math.min(criticalActive, 3)); // Starves critical pool!
    }
  };

  const handleResetBulkhead = () => {
    setCriticalActive(4);
    setOptionalActive(2);
  };

  // =========================================================================
  // SIMULATOR 4: RATE LIMITING & LOAD SHEDDING ENGINE (TOKEN BUCKET)
  // Token Bucket algorithm with priority shedding
  // =========================================================================
  const [bucketCapacity, setBucketCapacity] = useState(100);
  const [refillRateRps, setRefillRateRps] = useState(40);
  const [incomingRps, setIncomingRps] = useState(80);
  const [currentTokens, setCurrentTokens] = useState(65);

  const sheddingOutcome = useMemo(() => {
    const netRps = incomingRps - refillRateRps;
    const tokensSufficient = currentTokens > 20;
    const criticalServed = Math.min(incomingRps * 0.6, refillRateRps + currentTokens * 0.4);
    const optionalDemanded = incomingRps * 0.4;
    const availableForOptional = Math.max(0, refillRateRps - criticalServed);
    const optionalAccepted = Math.min(optionalDemanded, availableForOptional);
    const optionalShed = Math.max(0, optionalDemanded - optionalAccepted);
    const throttleRate = incomingRps > refillRateRps * 1.8 ? Math.round((incomingRps - refillRateRps * 1.8)) : 0;

    return {
      netRps,
      criticalServed: Math.round(criticalServed),
      optionalAccepted: Math.round(optionalAccepted),
      optionalShed: Math.round(optionalShed),
      throttleRate,
      status: netRps <= 0 ? "HEALTHY" : currentTokens > 15 ? "DRAINING" : "LOAD SHEDDING ACTIVE",
    };
  }, [incomingRps, refillRateRps, currentTokens]);

  // =========================================================================
  // SIMULATOR 5: DISASTER RECOVERY (DR) STRATEGY OPTIMIZER
  // Evaluates Backup & Restore vs Pilot Light vs Warm Standby vs Active/Active
  // =========================================================================
  const [targetRtoHours, setTargetRtoHours] = useState(1);
  const [targetRpoMinutes, setTargetRpoMinutes] = useState(15);
  const [monthlyBudgetUsd, setMonthlyBudgetUsd] = useState(1200);

  const drEvaluation = useMemo(() => {
    if (targetRtoHours < 0.2 && targetRpoMinutes <= 1) {
      return {
        strategy: "Multi-Region Active/Active",
        rtoEstimate: "< 1 minute (Instant automated DNS / Anycast shift)",
        rpoEstimate: "Near-zero (< 2 seconds synchronous/asynchronous replication)",
        estimatedCost: "$3,500 - $8,000 / month",
        feasibility: monthlyBudgetUsd >= 3500 ? "FEASIBLE" : "BUDGET DEFICIT",
        description:
          "Runs fully provisioned serving capacity across two geographic cloud regions simultaneously. Traffic is load-balanced dynamically. Offers near-zero downtime but requires advanced distributed state management, conflict-free data types or CockroachDB/Spanner.",
        color: "border-purple-300 bg-purple-50/70 text-purple-900",
      };
    }
    if (targetRtoHours <= 1 && targetRpoMinutes <= 15) {
      return {
        strategy: "Warm Standby (Scaled-Down Live Cluster)",
        rtoEstimate: "5 - 15 minutes (HPA scaling & DB promotion)",
        rpoEstimate: "1 - 5 minutes (Continuous read replica streaming)",
        estimatedCost: "$1,200 - $2,500 / month",
        feasibility: monthlyBudgetUsd >= 1200 ? "FEASIBLE" : "BUDGET DEFICIT",
        description:
          "Maintains a minimal, running copy of your Kubernetes cluster and database replica in a secondary region. When disaster strikes, the replica is promoted to primary and HPA rapidly scales pods from 2 to 30.",
        color: "border-orange-300 bg-orange-50/70 text-orange-900",
      };
    }
    if (targetRtoHours <= 4 && targetRpoMinutes <= 60) {
      return {
        strategy: "Pilot Light (Core Data Live, Compute Idle)",
        rtoEstimate: "30 - 60 minutes (Terraform provisions node pools)",
        rpoEstimate: "5 - 15 minutes (Continuous WAL replication)",
        estimatedCost: "$400 - $900 / month",
        feasibility: monthlyBudgetUsd >= 400 ? "FEASIBLE" : "BUDGET DEFICIT",
        description:
          "Core data store (PostgreSQL) is continuously replicated in the recovery region, but compute nodes remain turned off. On disaster, Terraform scripts spin up Kubernetes nodes and launch the Notes API pods.",
        color: "border-blue-300 bg-blue-50/70 text-blue-900",
      };
    }
    return {
      strategy: "Backup & Restore (Automated Cloud Snapshot)",
      rtoEstimate: "4 - 24 hours (Restoring snapshot & provisioning IaC)",
      rpoEstimate: "1 - 24 hours (Frequency of scheduled snapshots)",
      estimatedCost: "$50 - $200 / month",
      feasibility: "FEASIBLE",
      description:
        "Database snapshots and Kubernetes YAML/Terraform definitions stored encrypted in cross-region S3/GCS. Lowest standing infrastructure cost, but longest recovery time during a catastrophic regional outage.",
      color: "border-stone-300 bg-stone-100 text-stone-900",
    };
  }, [targetRtoHours, targetRpoMinutes, monthlyBudgetUsd]);

  // =========================================================================
  // FAILURE-INJECTION CHECKLIST (SECTION 17.2)
  // =========================================================================
  const [failureChecks, setFailureChecks] = useState({
    slowDep: false,
    transientConn: false,
    retryStorm: false,
    depUnavailable: false,
    concurrencySat: false,
    queueFull: false,
    gracefulTerm: false,
    recoveryTest: false,
  });

  const failureChecksCompleted = Object.values(failureChecks).filter(Boolean).length;

  const toggleFailureCheck = (key) => {
    setFailureChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // =========================================================================
  // 10-POINT READINESS CHECKLIST (SECTION 18)
  // =========================================================================
  const [readinessChecks, setReadinessChecks] = useState({
    explicitTimeouts: false,
    boundedRetries: false,
    jitteredBackoff: false,
    idempotentWrites: false,
    circuitBreakers: false,
    concurrencyIsolation: false,
    rateLimitingBackpressure: false,
    loadSheddingPolicy: false,
    gracefulShutdown: false,
    drValidated: false,
  });

  const readinessScore = Object.values(readinessChecks).filter(Boolean).length;

  const toggleReadinessCheck = (key) => {
    setReadinessChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // =========================================================================
  // THEORY CURRICULUM TOPICS (8 DEEP-DIVE SECTIONS)
  // =========================================================================
  const theoryTopics = [
    {
      id: "cascading-failures",
      title: "1. The Cascading Failure Amplification Cycle",
      subtitle: "Why micro-failures trigger macro-collapses across distributed systems",
      icon: Flame,
      tag: "Systems Dynamics",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            Imagine that your <strong>Notes API</strong> calls PostgreSQL to save a note. The database experiences
            a temporary IOPS burst and slows down from 5ms to 850ms. In a naive system lacking bounding controls,
            a catastrophic amplification chain unfolds:
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold mb-4 flex items-center gap-2">
              <Flame size={14} className="text-rose-500" />
              The Classic Cascading Collapse Feedback Loop
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-rose-400 font-bold block mb-1">Step 1: Stalling</span>
                PostgreSQL query takes 800ms+; application threads stay occupied.
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-amber-400 font-bold block mb-1">Step 2: Saturation</span>
                Connection pool and worker threads hit max capacity (e.g. 50/50).
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-yellow-400 font-bold block mb-1">Step 3: Client Retries</span>
                Clients time out at 1.0s and retry immediately in unison.
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800">
                <span className="text-orange-400 font-bold block mb-1">Step 4: Load Doubling</span>
                3x incoming traffic reaches an already gasping database.
              </div>
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800">
                <span className="text-rose-400 font-bold block mb-1">Step 5: Total Outage</span>
                Health probes fail; Kubernetes restarts pods; DB overwhelmed with startup storms.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-600" />
                The 10 Fundamental Reliability Questions
              </h4>
              <ul className="text-xs text-stone-600 space-y-1.5 leading-relaxed">
                <li>• <strong>Timeout:</strong> How long is this operation allowed to wait?</li>
                <li>• <strong>Retry with Backoff & Jitter:</strong> Is another attempt safe, and when?</li>
                <li>• <strong>Circuit Breaker:</strong> Should we stop calling a failing dependency?</li>
                <li>• <strong>Bulkhead:</strong> How much capacity can one failure consume?</li>
                <li>• <strong>Rate Limiting:</strong> How much demand may a caller generate?</li>
                <li>• <strong>Backpressure:</strong> How do we signal that downstream is backing up?</li>
                <li>• <strong>Load Shedding:</strong> Which work should we drop to save core traffic?</li>
                <li>• <strong>Graceful Degradation:</strong> What functionality survives without a service?</li>
                <li>• <strong>Failover:</strong> Where can work continue if a node/zone dies?</li>
                <li>• <strong>Disaster Recovery:</strong> How do we restore data after regional loss?</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-orange-200 bg-orange-50/50 p-5 shadow-sm">
              <h4 className="font-bold text-orange-950 text-sm mb-2 flex items-center gap-2">
                <AlertOctagon size={16} className="text-orange-600" />
                The Core Production Truth
              </h4>
              <p className="text-xs text-stone-700 leading-relaxed">
                Production reliability is <strong>never</strong> achieved by blindly adding retries or adding more
                pods. Without explicit bounds, retries become weapons of self-inflicted Denial of Service (DoS).
                Resilience requires bounded execution budgets, strict isolation boundaries, and deterministic recovery.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "timeouts-budget",
      title: "2. Timeouts & The End-to-End Latency Budget",
      subtitle: "Bouding wait times and stopping wasted downstream compute",
      icon: Timer,
      tag: "Resource Bounding",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            A timeout places an upper bound on how long an operation may block before the caller treats it as unsuccessful.
            Crucially: <strong>a client timeout does not cancel the underlying server operation</strong>. If client A gives up
            after 1s, PostgreSQL might keep churning on an unindexed query for 45s, wasting CPU on a response no one will ever read.
          </p>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <h4 className="font-bold text-stone-900 text-sm mb-3">Timeout Taxonomy in Production</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-mono font-bold text-stone-900 block mb-1">Connection Timeout</span>
                Max time to establish TCP handshake + TLS negotiation (e.g. 200ms–500ms).
              </div>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-mono font-bold text-stone-900 block mb-1">Read / Response Timeout</span>
                Max wait for data packets after connection established (e.g. 800ms–1500ms).
              </div>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-mono font-bold text-stone-900 block mb-1">DB Statement Timeout</span>
                PostgreSQL <code className="text-orange-600 font-bold font-mono">statement_timeout</code> killing runaway queries.
              </div>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-mono font-bold text-stone-900 block mb-1">Request Deadline</span>
                End-to-end distributed deadline propagated via context / gRPC metadata.
              </div>
              <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                <span className="font-mono font-bold text-stone-900 block mb-1">Idle Timeout</span>
                Closes inactive keep-alive socket connections to free OS file descriptors.
              </div>
              <div className="p-3 rounded-xl bg-orange-50 border border-orange-200">
                <span className="font-mono font-bold text-orange-900 block mb-1">Golden Rule</span>
                Child timeout must <strong>never</strong> exceed remaining parent request budget!
              </div>
            </div>
          </div>

          {/* CODE SNIPPET: PYTHON TIMEOUTS */}
          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <FileCode size={14} className="text-orange-400" />
                <span>resilient_client.py • Explicit Connection & Read Timeouts</span>
              </div>
              <button
                onClick={() =>
                  handleCopyCode(
                    "timeout-code",
                    `import requests\nfrom requests.exceptions import Timeout, RequestException\n\ndef fetch_note_preview(note_id: str, auth_token: str) -> dict:\n    """Fetch preview with explicit connection (300ms) and read (800ms) timeouts."""\n    url = f"https://preview-svc.internal/v1/notes/{note_id}/summary"\n    try:\n        # timeout=(connect_timeout, read_timeout)\n        response = requests.get(\n            url,\n            headers={"Authorization": f"Bearer {auth_token}"},\n            timeout=(0.3, 0.8)\n        )\n        response.raise_for_status()\n        return response.json()\n    except Timeout:\n        # Fast fallback: Return empty preview rather than crashing\n        return {"preview_available": False, "reason": "timeout"}\n    except RequestException as err:\n        return {"preview_available": False, "error": str(err)}`
                  )
                }
                className="flex items-center gap-1 text-stone-400 hover:text-white transition"
              >
                <Copy size={12} />
                <span>{copiedCodeId === "timeout-code" ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <pre className="mt-4 font-mono text-xs sm:text-sm text-stone-200 leading-relaxed overflow-x-auto">
{`import requests
from requests.exceptions import Timeout, RequestException

def fetch_note_preview(note_id: str, auth_token: str) -> dict:
    """Fetch preview with explicit connection (300ms) and read (800ms) timeouts."""
    url = f"https://preview-svc.internal/v1/notes/\${note_id}/summary"
    try:
        # timeout=(connect_timeout, read_timeout)
        response = requests.get(
            url,
            headers={"Authorization": f"Bearer \${auth_token}"},
            timeout=(0.3, 0.8)
        )
        response.raise_for_status()
        return response.json()
    except Timeout:
        # Fast fallback: Return empty preview rather than crashing
        return {"preview_available": False, "reason": "timeout"}
    except RequestException as err:
        return {"preview_available": False, "error": str(err)}`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "retries-backoff-jitter",
      title: "3. Retries, Idempotency & Jitter Mathematics",
      subtitle: "Why blind retries destroy systems and how Full Jitter flattens retry storms",
      icon: Shuffle,
      tag: "Retry Dynamics",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            A retry is another attempt to perform an operation after a failure. But retrying every error is dangerous.
            Retries are suitable <strong>only</strong> for transient faults (e.g. temporary connection reset, 503 Service Unavailable,
            429 with <code className="font-mono text-orange-600 font-bold">Retry-After</code>). Non-transient errors (400 Bad Request,
            401 Unauthorized, DB unique constraint violations) must <strong>fail fast</strong>.
          </p>

          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-5 shadow-sm">
            <h4 className="font-bold text-rose-950 text-sm mb-2 flex items-center gap-2">
              <AlertTriangle size={16} className="text-rose-600" />
              The Nested Retry Multiplier Trap (3³ = 27 Attempts)
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed">
              If the Web Frontend allows 3 retries, the API Gateway allows 3 retries, and the Notes Service client library allows
              3 retries, a single user click generates <code className="font-mono font-bold text-rose-700">3 × 3 × 3 = 27</code> downstream
              calls during a transient outage. This retry storm will instantly knock out a recovering database.
              <strong> Rule:</strong> Retries must be owned at a single architectural layer or governed by an aggregate retry budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                The Idempotency Key Invariant
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                If the client sends <code className="font-mono text-stone-800">POST /notes</code>, the DB commits the record, but
                the network drops before the HTTP 201 response reaches the client, the client sees a timeout.
                Retrying without an <strong>Idempotency-Key</strong> causes duplicated notes. Always pass a unique UUID header:
                <code className="block mt-1 font-mono text-stone-800 bg-stone-100 p-1.5 rounded">
                  Idempotency-Key: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
                </code>
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <h4 className="font-bold text-stone-900 text-sm mb-2 flex items-center gap-2">
                <Gauge size={16} className="text-orange-600" />
                Full Jitter Formula (AWS Recommendation)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed font-mono">
                d_n ~ Uniform(0, min(d_max, d_0 × 2^n))
              </p>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Full jitter selects a uniformly distributed random value between 0 and the exponential ceiling.
                This breaks synchronization across thousands of clients, smoothing the traffic curve.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "circuit-breaker-bulkhead",
      title: "4. Circuit Breakers & Bulkhead Partitioning",
      subtitle: "Failing fast to protect dying dependencies and isolating concurrency pools",
      icon: Shield,
      tag: "Fault Containment",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            While retries attempt to recover from transient glitches, a <strong>Circuit Breaker</strong> stops calling a dependency
            that is chronically failing. It isolates the caller, prevents thread pool exhaustion, and gives the downstream service
            breathing room to recover.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs font-bold text-emerald-900 uppercase">CLOSED State</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Normal operation. Requests flow downstream. The breaker tracks sliding-window error rates.
              </p>
            </div>

            <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
                <span className="font-mono text-xs font-bold text-rose-900 uppercase">OPEN State</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Threshold breached. Calls fail fast immediately (0ms). Downstream receives zero load. Cooldown timer counts down.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50/50 p-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="font-mono text-xs font-bold text-amber-900 uppercase">HALF-OPEN State</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Cooldown expires. A small number of canary probe requests are permitted. Success resets to CLOSED; failure trips back to OPEN.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm space-y-3">
            <h4 className="font-bold text-stone-900 text-sm flex items-center gap-2">
              <Anchor size={16} className="text-orange-600" />
              Bulkheads: Why Nautical Compartments Save Software
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              If water breaches one hull compartment of a ship, the bulkheads prevent the rest of the ship from sinking.
              In software architecture, bulkheads partition resources (thread pools, DB connections, memory limits) so that
              a surge in an expensive, low-priority feature (e.g. 50MB PDF export generation) cannot exhaust the connection pool
              needed by interactive note creation.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "rate-limiting-load-shedding",
      title: "5. Rate Limiting, Backpressure & Load Shedding",
      subtitle: "Controlling admission and shedding non-essential work before the resource cliff",
      icon: Filter,
      tag: "Admission Control",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            A system that begins rejecting requests only when its memory is exhausted or database connection pool has crashed
            has already failed. Resilient systems enforce <strong>admission control</strong> before reaching the cliff.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">Rate Limiting</span>
              <h5 className="font-bold text-stone-900 text-sm mt-1 mb-2">Caller Quota Enforcement</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                Limits demand per principal (e.g. 100 req/min per user). Returns <strong>HTTP 429 Too Many Requests</strong> with
                a <code className="font-mono text-stone-800">Retry-After</code> header. Protects noisy neighbors.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">Backpressure</span>
              <h5 className="font-bold text-stone-900 text-sm mt-1 mb-2">Downstream Flow Control</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                Signals upstream producers to slow down when internal bounded queues fill up (e.g. queue maxsize=500).
                Prevents fatal Out-Of-Memory (OOM) heap crashes.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">Load Shedding</span>
              <h5 className="font-bold text-stone-900 text-sm mt-1 mb-2">Priority Rejection</h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                When overall service capacity is threatened, the system intentionally drops low-priority background work
                to ensure critical business transactions (writes/reads) complete cleanly.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold mb-3">
              Load Shedding Priority Hierarchy
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                <span>Tier 1: Core Critical Operations (Interactive Note Reads & Committed Writes)</span>
                <span className="font-bold">NEVER SHED</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-blue-950/60 border border-blue-800 text-blue-300">
                <span>Tier 2: Interactive Enhancements (User Search & Autocomplete)</span>
                <span className="font-bold">SHED UNDER SEVERE LOAD</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-amber-950/60 border border-amber-800 text-amber-300">
                <span>Tier 3: Asynchronous Background Tasks (PDF Exports & Analytics Sync)</span>
                <span className="font-bold">SHED FIRST (DEFER TO QUEUE)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-rose-950/60 border border-rose-800 text-rose-300">
                <span>Tier 4: Optional Previews & Bot Crawlers</span>
                <span className="font-bold">DROP IMMEDIATELY WITH 503</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "graceful-degradation-failover",
      title: "6. Graceful Degradation & Kubernetes Pod Lifecycle",
      subtitle: "Failing soft and draining in-flight connections with preStop hooks",
      icon: RefreshCw,
      tag: "Graceful Lifecycle",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            Graceful degradation ensures that when auxiliary microservices fail, the user can still perform core tasks.
            If the note preview generator is down, return the note text with an indicator that previews are temporarily unavailable.
            <strong> Critical Invariant:</strong> Never claim a write succeeded if it wasn't committed to durable storage!
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <FileCode size={14} className="text-orange-400" />
                <span>kubernetes-deployment.yaml • Zero-Downtime Graceful Pod Draining</span>
              </div>
              <button
                onClick={() =>
                  handleCopyCode(
                    "k8s-pod-lifecycle",
                    `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: notes-api\nspec:\n  replicas: 4\n  template:\n    spec:\n      # Allow up to 30 seconds for in-flight HTTP requests to complete cleanly\n      terminationGracePeriodSeconds: 30\n      containers:\n      - name: api\n        image: ghcr.io/org/notes-api:v2.1.0\n        lifecycle:\n          preStop:\n            exec:\n              # Sleep 5s ensures kube-proxy & ingress controllers remove the pod\n              # from iptables / endpoint slices BEFORE the app process receives SIGTERM\n              command: ["/bin/sh", "-c", "sleep 5"]\n        readinessProbe:\n          httpGet:\n            path: /healthz/ready\n            port: 8080\n          initialDelaySeconds: 3\n          periodSeconds: 5\n        livenessProbe:\n          httpGet:\n            path: /healthz/live\n            port: 8080\n          initialDelaySeconds: 10\n          periodSeconds: 10`
                  )
                }
                className="flex items-center gap-1 text-stone-400 hover:text-white transition"
              >
                <Copy size={12} />
                <span>{copiedCodeId === "k8s-pod-lifecycle" ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <pre className="mt-4 font-mono text-xs sm:text-sm text-stone-200 leading-relaxed overflow-x-auto">
{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: notes-api
spec:
  replicas: 4
  template:
    spec:
      # Allow up to 30 seconds for in-flight HTTP requests to complete cleanly
      terminationGracePeriodSeconds: 30
      containers:
      - name: api
        image: ghcr.io/org/notes-api:v2.1.0
        lifecycle:
          preStop:
            exec:
              # Sleep 5s ensures kube-proxy & ingress controllers remove the pod
              # from iptables / endpoint slices BEFORE the app process receives SIGTERM
              command: ["/bin/sh", "-c", "sleep 5"]
        readinessProbe:
          httpGet:
            path: /healthz/ready
            port: 8080
          initialDelaySeconds: 3
          periodSeconds: 5
        livenessProbe:
          httpGet:
            path: /healthz/live
            port: 8080
          initialDelaySeconds: 10
          periodSeconds: 10`}
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "disaster-recovery-rto-rpo",
      title: "7. Disaster Recovery: RTO, RPO & Strategy Matrix",
      subtitle: "Restoring after regional catastrophic failures and verifying backup integrity",
      icon: Cloud,
      tag: "Disaster Recovery",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            While high availability and local failover protect against isolated container or node crashes,
            <strong> Disaster Recovery (DR)</strong> addresses catastrophic regional destruction, data center fires,
            ransomware attacks, or widespread operator error. DR is defined by two non-negotiable business metrics:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">Recovery Time Objective (RTO)</span>
              <h4 className="font-bold text-stone-900 text-base mt-1 mb-2">How long can you afford to be offline?</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                The maximum acceptable duration of service interruption between catastrophic incident detection and full restoration
                of user traffic. (e.g. RTO = 1 hour).
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase">Recovery Point Objective (RPO)</span>
              <h4 className="font-bold text-stone-900 text-base mt-1 mb-2">How much data can you afford to lose?</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                The maximum acceptable age of data that must be recovered from persistent storage when service resumes,
                measured backwards from the disruption. (e.g. RPO = 15 minutes of transactional data).
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 shadow-sm">
            <h4 className="font-bold text-amber-950 text-sm mb-2 flex items-center gap-2">
              <AlertTriangle size={16} className="text-amber-700" />
              The Untested Backup Fallacy
            </h4>
            <p className="text-xs text-stone-800 leading-relaxed">
              Having a scheduled cron job uploading nightly <code className="font-mono font-bold">pg_dump</code> files to AWS S3
              is <strong>not</strong> a disaster recovery plan. Backups are untrusted assumptions until an automated drill restores
              the snapshot to an isolated database instance, executes checksum verification, and certifies data integrity within RTO.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "production-request-flow",
      title: "8. The Unified Resilient Request Decision Engine",
      subtitle: "Connecting all 10 patterns into a synchronized production gateway",
      icon: Boxes,
      tag: "Architectural Synthesis",
      content: (
        <div className="space-y-6">
          <p className="text-sm sm:text-base leading-relaxed text-stone-700">
            In a mature production microservices architecture, resilience patterns do not operate in isolation.
            They form an integrated <strong>defense-in-depth pipeline</strong> from the edge ingress gateway down to persistent storage.
          </p>

          <div className="rounded-2xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-orange-400 font-bold mb-4">
              End-to-End Resilient Request Execution Pipeline
            </h4>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-orange-600 font-bold text-white shrink-0">Stage 1</span>
                <div>
                  <strong className="text-stone-200 block">Ingress Admission & Quotas</strong>
                  Enforce IP/tenant rate limits (Token Bucket). If quota exceeded, return HTTP 429 + Retry-After.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-orange-600 font-bold text-white shrink-0">Stage 2</span>
                <div>
                  <strong className="text-stone-200 block">Load Shedding & Health Check</strong>
                  If DB CPU &gt; 90% or thread pool queue full, shed Tier 3/4 requests with HTTP 503. Protect Tier 1 writes.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-orange-600 font-bold text-white shrink-0">Stage 3</span>
                <div>
                  <strong className="text-stone-200 block">Bulkhead Concurrency Allocation</strong>
                  Acquire worker slot from the dedicated Critical Bulkhead Pool.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-orange-600 font-bold text-white shrink-0">Stage 4</span>
                <div>
                  <strong className="text-stone-200 block">Circuit Breaker & Deadline Check</strong>
                  Verify preview dependency circuit is CLOSED. Propagate 2,000ms deadline budget.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 flex items-start gap-3">
                <span className="px-2 py-0.5 rounded bg-emerald-600 font-bold text-white shrink-0">Stage 5</span>
                <div>
                  <strong className="text-emerald-300 block">Bounded Execution or Graceful Degradation</strong>
                  Commit to PostgreSQL with statement timeout (800ms). If preview fails or trips breaker, return note with empty preview.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // =========================================================================
  // 15 MASTERY ASSESSMENT QUESTIONS (WEEK 21)
  // =========================================================================
  const masteryQuestions = [
    {
      q: "Why is an unjittered exponential backoff policy dangerous when thousands of clients experience a simultaneous dependency failure?",
      options: [
        "It increases CPU load because calculating 2^n requires floating-point hardware.",
        "Clients remain synchronized and retry in synchronized spikes, creating repeating 'thundering herd' traffic waves that knock out the recovering service.",
        "TCP sockets cannot handle exponential delays longer than 1,000 milliseconds.",
        "Downstream databases reject requests that contain exponential backoff headers.",
      ],
      c: 1,
      a: "Without jitter, all clients that time out together wait the exact same mathematical delay (e.g. 1.0s, 2.0s), striking the dependency at the identical millisecond and preventing recovery.",
    },
    {
      q: "What is the key difference between a client timeout and the cancellation of an operation on a backend database?",
      options: [
        "Client timeouts automatically send a TCP RST packet that forces the database server to abort the running query.",
        "A client timeout only causes the client to stop waiting; the database may continue executing the expensive query, wasting CPU and I/O on unneeded work.",
        "Database engines ignore client timeouts unless gRPC is used.",
        "Timeouts only apply to network switches, not software drivers.",
      ],
      c: 1,
      a: "Client libraries abandon the socket when a timeout fires, but PostgreSQL or remote APIs will continue computing the result unless an explicit cancellation (like statement_timeout or context cancellation) is enforced.",
    },
    {
      q: "Under AWS Full Jitter guidance, how is the delay before retry attempt n calculated?",
      options: [
        "Delay = BaseDelay * 2^n",
        "Delay = Uniform(0, min(MaxDelay, BaseDelay * 2^n))",
        "Delay = BaseDelay + Random(0, MaxDelay)",
        "Delay = min(MaxDelay, BaseDelay * n)",
      ],
      c: 1,
      a: "Full Jitter picks a uniformly distributed random value between 0 and the exponential backoff ceiling min(MaxDelay, BaseDelay * 2^n), maximizing dispersion across time.",
    },
    {
      q: "What is the primary danger of allowing retries at multiple layers (e.g. frontend, API gateway, microservice client)?",
      options: [
        "It triggers a nested retry multiplier (e.g. 3 x 3 x 3 = 27 attempts), generating an enormous self-inflicted retry storm during an outage.",
        "Kubernetes pods crash with an OutOfMemory error immediately upon the third retry.",
        "HTTP 200 responses are converted into HTTP 500 errors by the ingress controller.",
        "Clients run out of ephemeral port numbers.",
      ],
      c: 0,
      a: "Nested retries multiply exponentially at each hop. If 3 retries are permitted across 3 architectural tiers, a single user request can produce 27 dependency calls.",
    },
    {
      q: "Which of the following HTTP status codes should typically NOT be retried automatically with identical payload?",
      options: [
        "HTTP 503 Service Unavailable",
        "HTTP 504 Gateway Timeout",
        "HTTP 400 Bad Request",
        "HTTP 429 with Retry-After header",
      ],
      c: 2,
      a: "HTTP 400 indicates client syntax or semantic validation failure. Retrying the identical payload without correcting the input will simply fail again, wasting compute.",
    },
    {
      q: "What is the primary role of an Idempotency Key in write-heavy HTTP APIs?",
      options: [
        "To encrypt the payload during transit across untrusted networks.",
        "To allow clients to safely retry a write request after a timeout without creating duplicate records or double-charging.",
        "To bypass database foreign key constraints during peak traffic.",
        "To speed up database indexing on primary keys.",
      ],
      c: 1,
      a: "If a client times out because the response was lost after the database commit, retrying with the same Idempotency-Key allows the API to detect the duplicate and return the recorded result safely.",
    },
    {
      q: "What are the three canonical states of a Circuit Breaker, and what happens in the HALF-OPEN state?",
      options: [
        "READY, RUNNING, STOPPED; it runs memory profiling.",
        "CLOSED, OPEN, HALF-OPEN; it permits a bounded number of canary probe requests to test whether the dependency has recovered.",
        "ACTIVE, IDLE, TERMINATED; it drains active TCP connections.",
        "GREEN, YELLOW, RED; it sheds 50% of incoming traffic.",
      ],
      c: 1,
      a: "In HALF-OPEN, the breaker allows a controlled trial of probe requests. If they succeed, it closes; if any probe fails, it immediately returns to OPEN and restarts the cooldown timer.",
    },
    {
      q: "How does the Bulkhead pattern protect a mission-critical service from being overwhelmed by an optional feature?",
      options: [
        "It caches all responses in Redis for 24 hours.",
        "It reserves separate, isolated concurrency/worker pools so that optional or slow tasks cannot exhaust resources needed by critical operations.",
        "It automatically deploys 10 additional replicas when latency increases.",
        "It converts synchronous REST requests into asynchronous WebSockets.",
      ],
      c: 1,
      a: "Like bulkheads on a ship, resource pooling isolates critical paths from auxiliary paths. If report generation consumes all 5 of its allocated workers, the 20 workers allocated to interactive note creation remain unaffected.",
    },
    {
      q: "What is the fundamental difference between Rate Limiting and Load Shedding?",
      options: [
        "Rate limiting is implemented in Python, while load shedding is implemented in Go.",
        "Rate limiting enforces quotas based on caller identity/policy, while load shedding drops requests based on overall internal system overload to preserve critical work.",
        "Rate limiting returns HTTP 500, while load shedding returns HTTP 404.",
        "There is no difference; they are synonymous terms.",
      ],
      c: 1,
      a: "Rate limiting throttles specific callers when they exceed agreed quotas (HTTP 429). Load shedding is a survival mechanism where a service drops low-priority traffic (HTTP 503) to prevent total server collapse.",
    },
    {
      q: "Why is average CPU utilization alone an insufficient metric for triggering load shedding?",
      options: [
        "CPU utilization cannot be measured inside containerized environments.",
        "A system can experience fatal thread exhaustion, database connection pool lockups, or queue latency spikes while average CPU remains low.",
        "Linux kernels report average CPU inverted (100% means idle).",
        "Load balancers only inspect memory bandwidth.",
      ],
      c: 1,
      a: "If threads or database connection pools are blocked waiting on an I/O lock or network timeout, CPU utilization may remain below 30% even as latency skyrockets and incoming queues overflow.",
    },
    {
      q: "What is an essential correctness rule when implementing Graceful Degradation on write operations?",
      options: [
        "Never return an HTTP 200/201 success to the user if the write was not durably committed or safely queued.",
        "Always write data to local /tmp files if PostgreSQL is unavailable.",
        "Convert failed write requests into read requests automatically.",
        "Silently drop failed writes without logging an error.",
      ],
      c: 0,
      a: "Graceful degradation must preserve correctness. Falsely informing a user that a financial transaction or critical note was saved when it was dropped corrupts data integrity.",
    },
    {
      q: "In Kubernetes, why is a preStop hook containing 'sleep 5' recommended before sending SIGTERM to an application container?",
      options: [
        "To allow the CPU clock to sync with the Kubernetes control plane.",
        "To give kube-proxy, Ingress controllers, and cloud load balancers time to remove the terminating pod from endpoint lists before it stops accepting connections.",
        "To flush memory pages to physical disk storage.",
        "To allow Docker daemon to download the new container image.",
      ],
      c: 1,
      a: "Pod termination and endpoint removal happen asynchronously in Kubernetes. Sleeping 5 seconds in preStop prevents clients from routing new traffic to a pod that is actively shutting down its server.",
    },
    {
      q: "What is the distinction between Recovery Time Objective (RTO) and Recovery Point Objective (RPO)?",
      options: [
        "RTO measures financial cost; RPO measures latency.",
        "RTO is the maximum acceptable duration of service downtime; RPO is the maximum acceptable amount of data loss measured in time.",
        "RTO applies only to databases; RPO applies only to Kubernetes clusters.",
        "RTO is defined by developers; RPO is defined by cloud providers.",
      ],
      c: 1,
      a: "RTO defines how quickly you must restore working service (e.g. back online within 1 hour). RPO defines how much data you can tolerate losing since the last viable recovery point (e.g. at most 15 minutes of data).",
    },
    {
      q: "Which Disaster Recovery strategy maintains a minimal, running copy of your infrastructure in a secondary region with continuous data replication?",
      options: [
        "Backup & Restore",
        "Warm Standby",
        "Cold Standby",
        "Multi-Cloud Sharding",
      ],
      c: 1,
      a: "Warm Standby runs a scaled-down but live copy of the system in the recovery region. On disaster, the database replica is promoted and compute capacity is scaled up rapidly to handle full production traffic.",
    },
    {
      q: "Why must Disaster Recovery procedures be tested periodically in a staging or disaster drill environment?",
      options: [
        "Cloud providers automatically delete backups if they are not restored within 30 days.",
        "Untested backups frequently fail due to missing secrets, schema drift, network routing gaps, or permission errors during a real emergency.",
        "It is required by the Linux kernel to maintain snapshot validity.",
        "Database indexes become corrupt if left in cold storage.",
      ],
      c: 1,
      a: "A backup is merely an untested assumption until proven by a successful restore drill that validates encryption keys, IAM permissions, database schema compatibility, and actual RTO/RPO targets.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-orange-500 selection:text-white">
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-16 left-1/3 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="devops"
          currentModuleId="reliability"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(prev => !prev)}
          aiTutorLabel="Ask Resilience AI"
        />

        {/* HERO SECTION */}
        <div className="mt-8 rounded-3xl border border-stone-200/80 bg-white/90 p-6 sm:p-10 shadow-sm backdrop-blur-md">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-50 border border-orange-200/60 px-3 py-1 text-xs font-mono font-bold text-orange-700 mb-4">
                <Flame size={14} />
                <span>Microservices Resilience & Fault Isolation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-900 leading-tight">
                Module 10 — Production Reliability
              </h1>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-stone-600">
                Master the architectural defenses that prevent cascading failures in distributed systems:
                time-budgeted timeouts, exponential backoff with full jitter, circuit breakers, bulkheads,
                token-bucket rate limiting, backpressure, load shedding, graceful degradation, and cross-region disaster recovery (RTO/RPO).
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 text-center shrink-0">
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-stone-900">10</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Core Patterns</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-orange-600">5</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Interactive Labs</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-stone-900">8</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Failure Drills</span>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50/80 p-3.5">
                <span className="block text-2xl font-black text-emerald-600">15</span>
                <span className="text-[11px] font-mono text-stone-500 uppercase">Mastery Qs</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI TUTOR DRAWER */}
        {showAiTutor && (
          <div className="mt-6 rounded-3xl border border-stone-800 bg-[#18181b] p-6 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-orange-400" />
                <h3 className="font-bold text-sm">Nova AI — Production Resilience Architect</h3>
              </div>
              <button
                onClick={() => setShowAiTutor(false)}
                className="text-stone-400 hover:text-white text-xs font-mono"
              >
                ✕ Close
              </button>
            </div>
            <div className="mt-4">
              <LearningRo
                defaultSubject="Site Reliability & Production Resilience Patterns"
                conceptName="Cascading Failures, Timeouts, Retries, Jitter, Circuit Breakers, Bulkheads & DR"
              />
            </div>
          </div>
        )}

        {/* PRIMARY MODULE NAVIGATION TABS */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          {[
            { id: "theory", label: "Curriculum Deep-Dive", icon: BookOpen },
            { id: "retry-lab", label: "Lab 1: Jitter & Retry Simulator", icon: Shuffle },
            { id: "breaker-lab", label: "Lab 2: Circuit Breaker Machine", icon: Shield },
            { id: "bulkhead-lab", label: "Lab 3: Bulkhead Pool Isolation", icon: Anchor },
            { id: "shedding-lab", label: "Lab 4: Rate Limiting & Shedding", icon: Filter },
            { id: "dr-lab", label: "Lab 5: RTO / RPO & DR Optimizer", icon: Cloud },
            { id: "failure-drills", label: "8 Failure-Injection Drills", icon: Flame },
            { id: "readiness", label: "10-Point Readiness Audit", icon: CheckCircle2 },
            { id: "mastery", label: "15 Mastery Questions", icon: HelpCircle },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                  isActive
                    ? "bg-[#18181b] text-white shadow-md"
                    : "bg-white/80 text-stone-600 hover:bg-stone-100 border border-stone-200/60"
                }`}
              >
                <Icon size={14} className={isActive ? "text-orange-400" : "text-stone-400"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* =================================================================== */}
        {/* TAB 1: CURRICULUM THEORY & ARCHITECTURE                            */}
        {/* =================================================================== */}
        {activeTab === "theory" && (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* LEFT SIDEBAR: TOPIC LIST */}
            <div className="lg:col-span-4 space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-400 px-2 block mb-3">
                Curriculum Syllabus
              </span>
              {theoryTopics.map((topic, idx) => {
                const Icon = topic.icon;
                const isSelected = selectedTopic === idx;
                return (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition flex items-start gap-3.5 ${
                      isSelected
                        ? "border-orange-500 bg-white shadow-sm ring-1 ring-orange-500"
                        : "border-stone-200/70 bg-white/70 hover:bg-white hover:border-stone-300"
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded-xl shrink-0 ${
                        isSelected ? "bg-orange-500 text-white" : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] font-bold uppercase text-orange-600 block">
                        {topic.tag}
                      </span>
                      <h3 className="font-bold text-stone-900 text-xs sm:text-sm mt-0.5 leading-snug">
                        {topic.title}
                      </h3>
                      <p className="text-[11px] text-stone-500 mt-1 line-clamp-1">
                        {topic.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* RIGHT MAIN PANEL: SELECTED TOPIC CONTENT */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-4 mb-6">
                  <div>
                    <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                      {theoryTopics[selectedTopic].tag}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-1">
                      {theoryTopics[selectedTopic].title}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500 mt-1">
                      {theoryTopics[selectedTopic].subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button
                      disabled={selectedTopic === 0}
                      onClick={() => setSelectedTopic(selectedTopic - 1)}
                      className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none"
                    >
                      <ArrowLeft size={16} />
                    </button>
                    <button
                      disabled={selectedTopic === theoryTopics.length - 1}
                      onClick={() => setSelectedTopic(selectedTopic + 1)}
                      className="p-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-30 disabled:pointer-events-none"
                    >
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                {theoryTopics[selectedTopic].content}
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 2: LAB 1 - EXPONENTIAL BACKOFF & FULL JITTER SANDBOX            */}
        {/* =================================================================== */}
        {activeTab === "retry-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Resilience Lab 1
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Exponential Backoff & Full Jitter Simulator
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Experience why unjittered retries create catastrophic "thundering herds". Simulate 2,000+
                concurrent client retries and watch how Full Jitter flattens traffic spikes into a smooth, manageable curve.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* CONTROLS */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-6">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Sliders size={16} className="text-orange-600" />
                  <span>Retry Policy Parameters</span>
                </h3>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-2">
                    <span className="text-stone-700">Base Delay (d₀):</span>
                    <span className="text-orange-600">{baseDelayMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="50"
                    value={baseDelayMs}
                    onChange={(e) => setBaseDelayMs(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-2">
                    <span className="text-stone-700">Max Delay Ceiling (d_max):</span>
                    <span className="text-orange-600">{maxDelayMs} ms</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="500"
                    value={maxDelayMs}
                    onChange={(e) => setMaxDelayMs(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-2">
                    <span className="text-stone-700">Max Retries Allowed:</span>
                    <span className="text-orange-600">{maxRetries} attempts</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={maxRetries}
                    onChange={(e) => setMaxRetries(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-2">
                    <span className="text-stone-700">Failing Concurrent Clients:</span>
                    <span className="text-orange-600">{numClients.toLocaleString()} clients</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={numClients}
                    onChange={(e) => setNumClients(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                {/* JITTER MODE SELECTION */}
                <div>
                  <span className="text-xs font-mono font-bold text-stone-700 block mb-2">
                    Jitter Algorithm Selection:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "none", label: "No Jitter", desc: "Spikes" },
                      { id: "equal", label: "Equal Jitter", desc: "Partial" },
                      { id: "full", label: "Full Jitter", desc: "AWS Rec." },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setJitterMode(m.id)}
                        className={`p-2.5 rounded-xl border text-center transition ${
                          jitterMode === m.id
                            ? "border-orange-500 bg-orange-50/80 text-orange-900 font-bold"
                            : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                        }`}
                      >
                        <span className="text-xs block font-bold">{m.label}</span>
                        <span className="text-[10px] text-stone-500 font-mono">{m.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border text-xs leading-relaxed ${shockFactor.color}`}>
                  <strong className="block font-bold text-sm mb-1">
                    System Shock Index: {shockFactor.label}
                  </strong>
                  {jitterMode === "none" &&
                    "All clients retry simultaneously at exactly d_n ms. The downstream database receives 100% of failed traffic in a 50ms window. Total collapse."}
                  {jitterMode === "equal" &&
                    "Clients spread retries across [d_n/2, d_n]. Moderate reduction in peak load, but synchronized waves still occur."}
                  {jitterMode === "full" &&
                    "Clients spread delays across [0, d_n]. Peaks are virtually eliminated and downstream capacity is utilized continuously and smoothly."}
                </div>
              </div>

              {/* VISUALIZATION & CODE */}
              <div className="lg:col-span-7 space-y-6">
                {/* RETRY SCHEDULE TABLE */}
                <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                  <h3 className="font-bold text-stone-900 text-sm mb-4">
                    Computed Retry Window Schedule
                  </h3>
                  <div className="space-y-3 font-mono text-xs">
                    {retrySchedule.map((s) => (
                      <div
                        key={s.attempt}
                        className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                      >
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-stone-800 text-white text-[11px] font-bold">
                            Attempt #{s.attempt}
                          </span>
                          <span className="text-stone-700">
                            Delay Window: <strong>{s.minDelay}ms</strong> → <strong>{s.maxDelay}ms</strong>
                          </span>
                        </div>
                        <div className="text-stone-500 text-[11px]">
                          Time Spread: <strong className="text-orange-600">{s.spreadMs} ms</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PYTHON CODE GENERATION */}
                <div className="rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <span>Generated Full Jitter Python Implementation</span>
                    <button
                      onClick={() =>
                        handleCopyCode(
                          "full-jitter-py",
                          `import random\nimport time\n\ndef execute_with_full_jitter(operation, max_retries=${maxRetries}, base_sec=${(baseDelayMs / 1000).toFixed(2)}, max_sec=${(maxDelayMs / 1000).toFixed(2)}):\n    """Execute operation with AWS Full Jitter backoff schedule."""\n    for attempt in range(max_retries + 1):\n        try:\n            return operation()\n        except Exception as err:\n            if attempt == max_retries:\n                raise err\n            # Full Jitter Formula: Uniform(0, min(max_sec, base_sec * 2^attempt))\n            ceiling = min(max_sec, base_sec * (2 ** attempt))\n            sleep_duration = random.uniform(0.0, ceiling)\n            time.sleep(sleep_duration)`
                        )
                      }
                      className="flex items-center gap-1 text-stone-400 hover:text-white"
                    >
                      <Copy size={12} />
                      <span>{copiedCodeId === "full-jitter-py" ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                  <pre className="mt-4 font-mono text-xs sm:text-sm text-stone-200 leading-relaxed overflow-x-auto">
{`import random
import time

def execute_with_full_jitter(operation, max_retries=${maxRetries}, base_sec=${(baseDelayMs / 1000).toFixed(2)}, max_sec=${(maxDelayMs / 1000).toFixed(2)}):
    """Execute operation with AWS Full Jitter backoff schedule."""
    for attempt in range(max_retries + 1):
        try:
            return operation()
        except Exception as err:
            if attempt == max_retries:
                raise err
            # Full Jitter Formula: Uniform(0, min(max_sec, base_sec * 2^attempt))
            ceiling = min(max_sec, base_sec * (2 ** attempt))
            sleep_duration = random.uniform(0.0, ceiling)
            time.sleep(sleep_duration)`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 3: LAB 2 - CIRCUIT BREAKER THREE-STATE MACHINE                 */}
        {/* =================================================================== */}
        {activeTab === "breaker-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Resilience Lab 2
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Circuit Breaker 3-State Machine Simulator
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Interact with a live circuit breaker governing outbound calls from <code>notes-api</code> to
                the remote <code>notes-preview-svc</code>. Trip the breaker into OPEN state, observe 0ms fast-failing,
                and watch canary probe requests heal the system in HALF-OPEN.
              </p>
            </div>

            {/* LIVE STATE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div
                className={`p-6 rounded-3xl border transition ${
                  breakerState === "CLOSED"
                    ? "border-emerald-500 bg-emerald-50/70 shadow-md ring-2 ring-emerald-500"
                    : "border-stone-200 bg-white/70 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold uppercase text-emerald-800">Normal Flow</span>
                  <div className={`w-3 h-3 rounded-full ${breakerState === "CLOSED" ? "bg-emerald-500 animate-ping" : "bg-stone-300"}`} />
                </div>
                <h3 className="text-xl font-black text-emerald-950">CLOSED</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Calls flow to preview service. Failures tracked: <strong>{consecutiveFailures} / {failureThreshold}</strong>.
                </p>
              </div>

              <div
                className={`p-6 rounded-3xl border transition ${
                  breakerState === "OPEN"
                    ? "border-rose-500 bg-rose-50/80 shadow-md ring-2 ring-rose-500"
                    : "border-stone-200 bg-white/70 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold uppercase text-rose-800">Fast-Failing (0ms)</span>
                  <div className={`w-3 h-3 rounded-full ${breakerState === "OPEN" ? "bg-rose-500 animate-pulse" : "bg-stone-300"}`} />
                </div>
                <h3 className="text-xl font-black text-rose-950">OPEN</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Calls rejected instantly. Downstream protected. Cooldown: <strong>{cooldownRemaining}s remaining</strong>.
                </p>
              </div>

              <div
                className={`p-6 rounded-3xl border transition ${
                  breakerState === "HALF-OPEN"
                    ? "border-amber-500 bg-amber-50/80 shadow-md ring-2 ring-amber-500"
                    : "border-stone-200 bg-white/70 opacity-60"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold uppercase text-amber-800">Canary Probing</span>
                  <div className={`w-3 h-3 rounded-full ${breakerState === "HALF-OPEN" ? "bg-amber-500" : "bg-stone-300"}`} />
                </div>
                <h3 className="text-xl font-black text-amber-950">HALF-OPEN</h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                  Canary probes testing recovery. Successful probes: <strong>{halfOpenSuccesses} / 2</strong>.
                </p>
              </div>
            </div>

            {/* CONTROLS & LOGS */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-6">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Sliders size={16} className="text-orange-600" />
                  <span>Interactive Controls</span>
                </h3>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => handleSimulateRequest(true)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 p-3 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition"
                  >
                    <CheckCircle2 size={16} />
                    <span>Send Successful Request (200 OK)</span>
                  </button>

                  <button
                    onClick={() => handleSimulateRequest(false)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-rose-600 p-3 text-xs font-bold text-white shadow-sm hover:bg-rose-700 transition"
                  >
                    <XCircle size={16} />
                    <span>Inject Dependency Failure (Timeout / 500)</span>
                  </button>

                  <button
                    onClick={handleResetBreaker}
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-stone-100 p-2.5 text-xs font-bold text-stone-700 hover:bg-stone-200 transition"
                  >
                    <RotateCcw size={14} />
                    <span>Reset Circuit Breaker</span>
                  </button>
                </div>

                <div className="space-y-4 pt-4 border-t border-stone-200">
                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                      <span className="text-stone-700">Trip Failure Threshold:</span>
                      <span className="text-orange-600">{failureThreshold} consecutive errors</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="10"
                      value={failureThreshold}
                      onChange={(e) => setFailureThreshold(Number(e.target.value))}
                      className="w-full accent-orange-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                      <span className="text-stone-700">Cooldown Period:</span>
                      <span className="text-orange-600">{cooldownSec} seconds</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="20"
                      value={cooldownSec}
                      onChange={(e) => setCooldownSec(Number(e.target.value))}
                      className="w-full accent-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* REAL-TIME EVENT LOG */}
              <div className="lg:col-span-7 rounded-3xl border border-stone-800 bg-[#18181b] p-6 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <div className="flex items-center gap-2">
                      <Terminal size={14} className="text-orange-400" />
                      <span>Circuit Breaker Telemetry Event Stream</span>
                    </div>
                    <span>{breakerEvents.length} events logged</span>
                  </div>

                  <div className="mt-4 space-y-2 max-h-80 overflow-y-auto font-mono text-xs pr-2">
                    {breakerEvents.map((evt, idx) => (
                      <div
                        key={idx}
                        className={`p-2.5 rounded-lg border ${
                          evt.type === "error"
                            ? "bg-rose-950/50 border-rose-800 text-rose-300"
                            : evt.type === "warn"
                            ? "bg-amber-950/50 border-amber-800 text-amber-300"
                            : evt.type === "success"
                            ? "bg-emerald-950/50 border-emerald-800 text-emerald-300"
                            : "bg-stone-900 border-stone-800 text-stone-300"
                        }`}
                      >
                        <span className="text-stone-500 text-[10px] mr-2">[{evt.time}]</span>
                        {evt.text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-stone-500">
                  State: <strong className="text-stone-300">{breakerState}</strong> • Fallback: <span className="text-emerald-400 font-bold">Omit Preview (Return Clean Note)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 4: LAB 3 - BULKHEAD & CONCURRENCY ISOLATION SANDBOX             */}
        {/* =================================================================== */}
        {activeTab === "bulkhead-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Resilience Lab 3
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Bulkhead & Concurrency Isolation Pool Simulator
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Demonstrate how resource partitioning prevents optional heavy workloads (e.g. PDF report exports)
                from starving core interactive transactions (e.g. creating notes).
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* CONTROLS */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-6">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Anchor size={16} className="text-orange-600" />
                  <span>Bulkhead Architecture Mode</span>
                </h3>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setBulkheadMode("isolated");
                      handleResetBulkhead();
                    }}
                    className={`p-3 rounded-xl border text-center transition ${
                      bulkheadMode === "isolated"
                        ? "border-emerald-500 bg-emerald-50/80 text-emerald-950 font-bold"
                        : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    <span className="text-xs block font-bold">Partitioned Pools</span>
                    <span className="text-[10px] text-stone-500">Isolated Bulkheads</span>
                  </button>

                  <button
                    onClick={() => {
                      setBulkheadMode("shared");
                      handleResetBulkhead();
                    }}
                    className={`p-3 rounded-xl border text-center transition ${
                      bulkheadMode === "shared"
                        ? "border-rose-500 bg-rose-50/80 text-rose-950 font-bold"
                        : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    <span className="text-xs block font-bold">Unpartitioned Pool</span>
                    <span className="text-[10px] text-stone-500">Shared Thread Pool</span>
                  </button>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleBurstOptional}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-rose-600 p-3 text-xs font-bold text-white shadow-sm hover:bg-rose-700 transition"
                  >
                    <Flame size={16} />
                    <span>Flood System with 100 Heavy PDF Export Jobs</span>
                  </button>

                  <button
                    onClick={handleResetBulkhead}
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-stone-300 bg-stone-100 p-2 text-xs font-bold text-stone-700 hover:bg-stone-200 transition"
                  >
                    <RotateCcw size={14} />
                    <span>Reset Workload to Baseline</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1.5 leading-relaxed">
                  <strong className="text-stone-900 block font-bold mb-1">Architectural Insight:</strong>
                  {bulkheadMode === "isolated" ? (
                    <span>
                      In <strong>Partitioned Mode</strong>, PDF export jobs max out their isolated pool of 5 workers.
                      Excess exports are queued or rejected. The <strong>Critical Notes Pool</strong> retains 100% of its
                      20 workers free and responsive!
                    </span>
                  ) : (
                    <span className="text-rose-700 font-bold">
                      In Shared Mode, heavy PDF exports seize 22 of the 25 total workers. Interactive note creation is
                      starved, timeouts surge, and user logins freeze!
                    </span>
                  )}
                </div>
              </div>

              {/* VISUAL POOLS */}
              <div className="lg:col-span-7 space-y-6">
                {/* CRITICAL POOL */}
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50/40 p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="font-mono text-xs font-bold text-emerald-800 uppercase">
                        Bulkhead Compartment A
                      </span>
                      <h4 className="text-lg font-black text-emerald-950">
                        Critical Notes API Pool (Writes & Reads)
                      </h4>
                    </div>
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                      {criticalActive} / {criticalPoolLimit} Workers Active
                    </span>
                  </div>

                  <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                    {Array.from({ length: criticalPoolLimit }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-8 rounded-lg flex items-center justify-center font-mono text-[10px] font-bold transition ${
                          i < criticalActive
                            ? "bg-emerald-600 text-white shadow-sm"
                            : "bg-emerald-100/70 border border-emerald-200 text-emerald-400"
                        }`}
                      >
                        W{i + 1}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-emerald-800 mt-3 font-mono">
                    Status: {criticalActive < criticalPoolLimit ? "HEALTHY & SERVING" : "STARVED BY SHARED BURST"}
                  </p>
                </div>

                {/* OPTIONAL POOL */}
                <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="font-mono text-xs font-bold text-orange-600 uppercase">
                        Bulkhead Compartment B
                      </span>
                      <h4 className="text-lg font-black text-stone-900">
                        Optional Heavy Reports & Previews Pool
                      </h4>
                    </div>
                    <span className="font-mono text-xs font-bold text-orange-700 bg-orange-100 px-3 py-1 rounded-full border border-orange-200">
                      {optionalActive} / {optionalPoolLimit} Workers Active
                    </span>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: optionalPoolLimit }).map((_, i) => (
                      <div
                        key={i}
                        className={`h-8 rounded-lg flex items-center justify-center font-mono text-[10px] font-bold transition ${
                          i < optionalActive
                            ? "bg-orange-600 text-white shadow-sm"
                            : "bg-stone-100 border border-stone-200 text-stone-400"
                        }`}
                      >
                        B{i + 1}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 mt-3 font-mono">
                    Status: {optionalActive >= optionalPoolLimit ? "CAPACITY SATURATED (BACKPRESSURE ACTIVE)" : "IDLE CAPACITY AVAILABLE"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 5: LAB 4 - RATE LIMITING & LOAD SHEDDING ENGINE                 */}
        {/* =================================================================== */}
        {activeTab === "shedding-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Resilience Lab 4
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Rate Limiting & Token-Bucket Load Shedding Sandbox
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Tune incoming traffic, token refill rates, and bucket capacities. Observe how priority-based
                load shedding drops optional previews and throttles excessive callers while ensuring 100% of core
                interactive writes succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* SLIDERS */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-6">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Sliders size={16} className="text-orange-600" />
                  <span>Admission Control Parameters</span>
                </h3>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">Incoming Total Demand:</span>
                    <span className="text-orange-600">{incomingRps} Requests / sec</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="200"
                    step="5"
                    value={incomingRps}
                    onChange={(e) => setIncomingRps(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">Token Refill Rate (Sustainable Capacity):</span>
                    <span className="text-emerald-600">{refillRateRps} Tokens / sec</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="120"
                    step="5"
                    value={refillRateRps}
                    onChange={(e) => setRefillRateRps(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">Bucket Burst Capacity:</span>
                    <span className="text-stone-900">{bucketCapacity} Tokens</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="300"
                    step="10"
                    value={bucketCapacity}
                    onChange={(e) => setBucketCapacity(Number(e.target.value))}
                    className="w-full accent-stone-700"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">Current Token Reserves:</span>
                    <span className="text-blue-600">{currentTokens} Tokens</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={bucketCapacity}
                    value={currentTokens}
                    onChange={(e) => setCurrentTokens(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>
              </div>

              {/* OUTCOMES & ADMISSION METRICS */}
              <div className="lg:col-span-7 rounded-3xl border border-stone-800 bg-[#18181b] p-6 sm:p-8 text-white shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs font-mono text-stone-400">
                    <span>Admission Gateway Verdict</span>
                    <span
                      className={`px-3 py-1 rounded-full font-bold text-xs ${
                        sheddingOutcome.status === "HEALTHY"
                          ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                          : sheddingOutcome.status === "DRAINING"
                          ? "bg-amber-950 text-amber-400 border border-amber-800"
                          : "bg-rose-950 text-rose-400 border border-rose-800 animate-pulse"
                      }`}
                    >
                      {sheddingOutcome.status}
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                      <span className="text-xs font-mono text-stone-400 block mb-1">
                        Critical Writes Served
                      </span>
                      <span className="text-2xl font-black text-emerald-400">
                        {sheddingOutcome.criticalServed} RPS
                      </span>
                      <span className="text-[10px] text-stone-500 block mt-1">100% Admitted (HTTP 201)</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                      <span className="text-xs font-mono text-stone-400 block mb-1">
                        Optional Previews Shed
                      </span>
                      <span className="text-2xl font-black text-rose-400">
                        {sheddingOutcome.optionalShed} RPS
                      </span>
                      <span className="text-[10px] text-stone-500 block mt-1">Shed Gracefully (HTTP 503)</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                      <span className="text-xs font-mono text-stone-400 block mb-1">
                        Rate Limited Abusive
                      </span>
                      <span className="text-2xl font-black text-amber-400">
                        {sheddingOutcome.throttleRate} RPS
                      </span>
                      <span className="text-[10px] text-stone-500 block mt-1">Throttled (HTTP 429)</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-2xl bg-stone-900/80 border border-stone-800 text-xs text-stone-300 space-y-2 leading-relaxed">
                    <p>
                      <strong>How Load Shedding Saves the System:</strong> The service has a steady throughput limit of{" "}
                      <span className="text-emerald-400 font-bold">{refillRateRps} RPS</span>. Incoming demand is{" "}
                      <span className="text-orange-400 font-bold">{incomingRps} RPS</span>. Rather than queueing work until
                      memory crashes, the admission gate drops{" "}
                      <span className="text-rose-400 font-bold">{sheddingOutcome.optionalShed} RPS</span> of low-priority preview requests.
                      The database remains within its safe operating window!
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-800 text-xs font-mono text-stone-500 flex justify-between">
                  <span>Net Token Drain: {sheddingOutcome.netRps > 0 ? `-${sheddingOutcome.netRps}/s` : `+${Math.abs(sheddingOutcome.netRps)}/s`}</span>
                  <span>Algorithm: Token Bucket with Dual-Rate Queue</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 6: LAB 5 - DISASTER RECOVERY & RTO / RPO CALCULATOR             */}
        {/* =================================================================== */}
        {activeTab === "dr-lab" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Interactive Resilience Lab 5
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Disaster Recovery (DR) Strategy & RTO/RPO Evaluator
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Determine the optimal disaster recovery architecture for your Notes API based on business downtime
                tolerance (RTO), maximum acceptable data loss (RPO), and monthly budget constraints.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* DR INPUTS */}
              <div className="lg:col-span-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm space-y-6">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                  <Sliders size={16} className="text-orange-600" />
                  <span>Business Continuity Objectives</span>
                </h3>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">Target RTO (Max Downtime Duration):</span>
                    <span className="text-orange-600">
                      {targetRtoHours < 1
                        ? `${Math.round(targetRtoHours * 60)} minutes`
                        : `${targetRtoHours} hour(s)`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="12"
                    step="0.1"
                    value={targetRtoHours}
                    onChange={(e) => setTargetRtoHours(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                  <span className="text-[10px] text-stone-500 block mt-1">
                    0.1h = 6 mins (Near-instant) • 12h = Cold restoration
                  </span>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">Target RPO (Max Acceptable Data Loss):</span>
                    <span className="text-orange-600">
                      {targetRpoMinutes <= 1 ? "Near-zero (< 1 min)" : `${targetRpoMinutes} minutes`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="360"
                    step="5"
                    value={targetRpoMinutes}
                    onChange={(e) => setTargetRpoMinutes(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                  <span className="text-[10px] text-stone-500 block mt-1">
                    1 min = Continuous streaming • 360 mins = 6h snapshot interval
                  </span>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono font-bold mb-1.5">
                    <span className="text-stone-700">Monthly DR Infrastructure Budget:</span>
                    <span className="text-emerald-600">${monthlyBudgetUsd.toLocaleString()} / mo</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="200"
                    value={monthlyBudgetUsd}
                    onChange={(e) => setMonthlyBudgetUsd(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>
              </div>

              {/* RECOMMENDED STRATEGY CARD */}
              <div className="lg:col-span-7 space-y-6">
                <div className={`rounded-3xl border p-6 sm:p-8 shadow-sm ${drEvaluation.color}`}>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200/60 text-xs font-mono">
                    <span className="font-bold uppercase tracking-wider">Recommended DR Strategy</span>
                    <span
                      className={`px-3 py-1 rounded-full font-bold text-xs ${
                        drEvaluation.feasibility === "FEASIBLE"
                          ? "bg-emerald-600 text-white"
                          : "bg-rose-600 text-white"
                      }`}
                    >
                      {drEvaluation.feasibility}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-stone-900 mt-4">
                    {drEvaluation.strategy}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-700 mt-3 leading-relaxed">
                    {drEvaluation.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-white/80 border border-stone-200/80">
                      <span className="text-stone-500 block text-[10px]">Achievable RTO</span>
                      <strong className="text-stone-900 text-xs">{drEvaluation.rtoEstimate}</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-white/80 border border-stone-200/80">
                      <span className="text-stone-500 block text-[10px]">Achievable RPO</span>
                      <strong className="text-stone-900 text-xs">{drEvaluation.rpoEstimate}</strong>
                    </div>
                    <div className="p-3 rounded-xl bg-white/80 border border-stone-200/80">
                      <span className="text-stone-500 block text-[10px]">Estimated Standby Spend</span>
                      <strong className="text-stone-900 text-xs">{drEvaluation.estimatedCost}</strong>
                    </div>
                  </div>
                </div>

                {/* DR STRATEGIES COMPARISON TABLE */}
                <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm overflow-x-auto">
                  <h4 className="font-bold text-stone-900 text-sm mb-3">
                    Cloud Disaster Recovery Strategy Matrix (AWS & Azure Standard)
                  </h4>
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-stone-200 text-stone-400">
                        <th className="pb-2">Strategy</th>
                        <th className="pb-2">RTO</th>
                        <th className="pb-2">RPO</th>
                        <th className="pb-2">Standing Cost</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      <tr>
                        <td className="py-2.5 font-bold">Backup & Restore</td>
                        <td className="py-2.5">4 – 24 Hours</td>
                        <td className="py-2.5">1 – 24 Hours</td>
                        <td className="py-2.5 text-emerald-600 font-bold">$ (Very Low)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Pilot Light</td>
                        <td className="py-2.5">30 – 60 Minutes</td>
                        <td className="py-2.5">5 – 15 Minutes</td>
                        <td className="py-2.5 text-blue-600 font-bold">$$ (Low)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Warm Standby</td>
                        <td className="py-2.5">5 – 15 Minutes</td>
                        <td className="py-2.5">1 – 5 Minutes</td>
                        <td className="py-2.5 text-amber-600 font-bold">$$$ (Medium)</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 font-bold">Active / Active</td>
                        <td className="py-2.5">&lt; 1 Minute</td>
                        <td className="py-2.5">Near-Zero (&lt; 2s)</td>
                        <td className="py-2.5 text-purple-600 font-bold">$$$$ (High)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 7: 8 FAILURE-INJECTION EXERCISES                               */}
        {/* =================================================================== */}
        {activeTab === "failure-drills" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Practical Chaos & Verification
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    8 Failure-Injection Exercises
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
                    Execute these tests in your local staging or Minikube/Kind cluster. Never execute destructive tests in live production.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3 bg-stone-50 border border-stone-200 px-4 py-3 rounded-2xl">
                  <Flame size={20} className="text-orange-600" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-stone-900">
                      Drills Completed: {failureChecksCompleted} / 8
                    </span>
                    <div className="w-32 bg-stone-200 h-1.5 rounded-full overflow-hidden mt-1">
                      <div
                        className="bg-orange-600 h-full transition-all duration-300"
                        style={{ width: `${(failureChecksCompleted / 8) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  id: "slowDep",
                  title: "1. Slow Dependency Injection",
                  scenario: "Add a 3,000ms delay to PostgreSQL or preview API.",
                  verification: "Verify configured client timeout (800ms) fires and latency remains strictly bounded.",
                  cmd: "kubectl exec -it notes-api -- curl -s -m 1.0 http://preview-svc:8080/delay/3",
                },
                {
                  id: "transientConn",
                  title: "2. Transient Connection Failure",
                  scenario: "Drop TCP connections intermittently using iptables or Toxiproxy.",
                  verification: "Verify bounded retry attempts stop after allowed limit (max 3) and logs record attempts.",
                  cmd: "toxiproxy-cli toxic add -t reset_peer -a timeout=1000 preview-svc",
                },
                {
                  id: "retryStorm",
                  title: "3. Retry Storm Simulation",
                  scenario: "Run 500 concurrent clients failing together.",
                  verification: "Compare retry volume with and without full jitter. Observe request distribution.",
                  cmd: "k6 run --vus 500 --duration 30s load_test_jitter.js",
                },
                {
                  id: "depUnavailable",
                  title: "4. Dependency Permanently Unavailable",
                  scenario: "Stop the preview microservice container completely.",
                  verification: "Verify circuit breaker opens, calls fail fast (0ms), and notes API returns clean fallback preview.",
                  cmd: "kubectl scale deployment notes-preview-svc --replicas=0",
                },
                {
                  id: "concurrencySat",
                  title: "5. Concurrency Saturation & Bulkhead",
                  scenario: "Generate 50 concurrent heavy PDF export jobs.",
                  verification: "Verify the dedicated bulkhead protects interactive note creation without dropped requests.",
                  cmd: "autocannon -c 50 -d 20 http://localhost:8080/v1/notes/export",
                },
                {
                  id: "queueFull",
                  title: "6. Bounded Queue & Backpressure",
                  scenario: "Submit 600 background jobs to a queue bounded at 500.",
                  verification: "Confirm system rejects or defers work rather than crashing the process with an OOM error.",
                  cmd: "python test_queue_overflow.py --jobs 600",
                },
                {
                  id: "gracefulTerm",
                  title: "7. Graceful Pod Termination",
                  scenario: "Terminate an API pod during an active 10s request.",
                  verification: "Verify preStop hook sleeps 5s, endpoint drains from Ingress, and the active request finishes cleanly.",
                  cmd: "kubectl delete pod -l app=notes-api --wait=false",
                },
                {
                  id: "recoveryTest",
                  title: "8. Disaster Recovery Restore Drill",
                  scenario: "Restore test database from an encrypted snapshot.",
                  verification: "Measure actual elapsed restore time and compare against RTO (1h) and RPO (15m) targets.",
                  cmd: "pg_restore -h test-db.internal -U postgres -d notes_recovery backup.dump",
                },
              ].map((drill) => {
                const isDone = failureChecks[drill.id];
                return (
                  <div
                    key={drill.id}
                    onClick={() => toggleFailureCheck(drill.id)}
                    className={`cursor-pointer rounded-2xl border p-5 transition flex flex-col justify-between ${
                      isDone
                        ? "border-emerald-500 bg-emerald-50/50 shadow-sm"
                        : "border-stone-200 bg-white hover:border-orange-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                        <span className="font-bold text-stone-900 text-sm">{drill.title}</span>
                        <div
                          className={`w-5 h-5 rounded-lg flex items-center justify-center transition ${
                            isDone ? "bg-emerald-600 text-white" : "border border-stone-300 bg-stone-50"
                          }`}
                        >
                          {isDone && <Check size={14} />}
                        </div>
                      </div>
                      <p className="text-xs text-stone-600 mt-2">
                        <strong>Scenario:</strong> {drill.scenario}
                      </p>
                      <p className="text-xs text-stone-700 mt-1">
                        <strong>Expected Evidence:</strong> {drill.verification}
                      </p>
                    </div>

                    <div className="mt-3 p-2 rounded-lg bg-stone-900 text-stone-200 font-mono text-[11px] overflow-x-auto flex items-center justify-between">
                      <code>{drill.cmd}</code>
                      <Copy
                        size={12}
                        className="text-stone-400 hover:text-white shrink-0 ml-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyCode(drill.id, drill.cmd);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 8: 10-POINT PRODUCTION READINESS CHECKLIST                      */}
        {/* =================================================================== */}
        {activeTab === "readiness" && (
          <div className="mt-8 space-y-8 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Section 18 Audit Standard
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                    10-Point Production Resilience Readiness Checklist
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 max-w-2xl leading-relaxed">
                    Verify all 10 non-negotiable operational requirements before certifying your microservices
                    architecture for enterprise production deployment.
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3 bg-stone-50 border border-stone-200 px-4 py-3 rounded-2xl">
                  <ShieldCheck size={20} className="text-emerald-600" />
                  <div>
                    <span className="block text-xs font-mono font-bold text-stone-900">
                      Readiness Score: {readinessScore} / 10
                    </span>
                    <span className="text-[10px] font-mono text-stone-500">
                      {readinessScore === 10 ? "Certified Resilient" : "Action Items Required"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: "explicitTimeouts",
                  label: "1. Explicit Timeouts for All Outbound Network & Database Operations",
                  desc: "No indefinite waits; connect & read timeouts specified in client drivers and statement timeouts configured in PostgreSQL.",
                },
                {
                  id: "boundedRetries",
                  label: "2. Bounded Retries Distinguishing Transient Errors from Permanent Failures",
                  desc: "Retries strictly capped (e.g. max 3); 400, 401, 403, and DB unique constraint errors fail fast without retry.",
                },
                {
                  id: "jitteredBackoff",
                  label: "3. Exponential Backoff with Full Jitter and Distributed Deadlines",
                  desc: "Randomized delays eliminate synchronized retry waves; request deadlines propagated downstream.",
                },
                {
                  id: "idempotentWrites",
                  label: "4. Idempotency Guarantees for All State-Changing Write Operations",
                  desc: "Idempotency keys passed and stored transactionally with operations so that retrying timed-out requests cannot create duplicates.",
                },
                {
                  id: "circuitBreakers",
                  label: "5. Circuit Breaker & Fallback Behavior Configured for Remote Dependencies",
                  desc: "Breaker trips to OPEN on repeated failures (e.g. 5 errors in 10s); returns clean fallback instead of thread pooling.",
                },
                {
                  id: "concurrencyIsolation",
                  label: "6. Bulkhead Concurrency Isolation for Mission-Critical Paths",
                  desc: "Separate thread pools, DB connection limits, and worker queues prevent background tasks from starving primary CRUD.",
                },
                {
                  id: "rateLimitingBackpressure",
                  label: "7. Rate Limiting (Token Bucket) & Bounded Queues for Flow Control",
                  desc: "Enforces tenant quotas (HTTP 429) and rejects work when queues reach capacity to prevent memory crashes.",
                },
                {
                  id: "loadSheddingPolicy",
                  label: "8. Priority-Based Load Shedding Before Reaching Resource Cliff",
                  desc: "Intentionally drops non-essential work (HTTP 503) based on queue latency and connection saturation before DB crashes.",
                },
                {
                  id: "gracefulShutdown",
                  label: "9. Graceful Pod Termination with preStop Hooks and Connection Draining",
                  desc: "terminationGracePeriodSeconds: 30 with preStop sleep 5s allows load balancers to detach endpoints cleanly.",
                },
                {
                  id: "drValidated",
                  label: "10. Documented Disaster Recovery Objectives (RTO/RPO) with Tested Restore Drill",
                  desc: "Automated backups validated via periodic staging restoration drills measuring actual RTO and RPO against SLAs.",
                },
              ].map((item) => {
                const isChecked = readinessChecks[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleReadinessCheck(item.id)}
                    className={`cursor-pointer rounded-2xl border p-4 sm:p-5 transition flex items-start gap-4 ${
                      isChecked
                        ? "border-emerald-500 bg-emerald-50/60 shadow-sm"
                        : "border-stone-200 bg-white hover:border-orange-300"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-lg shrink-0 flex items-center justify-center transition mt-0.5 ${
                        isChecked ? "bg-emerald-600 text-white" : "border border-stone-300 bg-stone-50"
                      }`}
                    >
                      {isChecked && <Check size={16} />}
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                        {item.label}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =================================================================== */}
        {/* TAB 9: 15 MASTERY ASSESSMENT QUESTIONS                              */}
        {/* =================================================================== */}
        {activeTab === "mastery" && (
          <div className="mt-8 space-y-6 mb-16">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs font-bold text-orange-600 uppercase tracking-wider">
                Production Certification
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">
                Production Reliability Mastery Assessment
              </h2>
              <p className="text-sm text-stone-600 mt-2 max-w-3xl leading-relaxed">
                Test your understanding of cascading failures, backoff with full jitter, circuit breaker state machines,
                bulkheads, rate limiting, graceful degradation, and cross-region disaster recovery.
              </p>
            </div>

            <div className="space-y-4">
              {masteryQuestions.map((mq, qIdx) => {
                const isOpen = openMasteryIndex === qIdx;
                return (
                  <div
                    key={qIdx}
                    className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition"
                  >
                    <div
                      onClick={() => setOpenMasteryIndex(isOpen ? null : qIdx)}
                      className="cursor-pointer flex items-start justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-mono text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-lg border border-orange-200 shrink-0">
                          Q{qIdx + 1}
                        </span>
                        <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                          {mq.q}
                        </h4>
                      </div>
                      <div className="text-stone-400 hover:text-stone-700 shrink-0">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>

                    {isOpen && (
                      <div className="mt-5 pt-4 border-t border-stone-100 space-y-4">
                        <div className="space-y-2">
                          {mq.options.map((opt, oIdx) => (
                            <div
                              key={oIdx}
                              className={`p-3 rounded-xl border text-xs sm:text-sm font-mono flex items-start gap-3 ${
                                oIdx === mq.c
                                  ? "bg-emerald-50 border-emerald-300 text-emerald-950 font-bold"
                                  : "bg-stone-50/70 border-stone-200 text-stone-700"
                              }`}
                            >
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs ${
                                  oIdx === mq.c
                                    ? "bg-emerald-600 text-white font-bold"
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
              DevOps & SRE Track • Module 10 Complete
            </span>
            <h3 className="text-2xl font-black text-white mt-1">
              Production Reliability Completed
            </h3>
            <p className="text-xs md:text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              You understand the mechanisms that protect distributed architectures from cascading collapse:
              timeout latency budgets, exponential backoff with full jitter, circuit breakers, bulkhead isolation,
              token-bucket rate limiting, backpressure, load shedding, graceful degradation, and cross-region disaster recovery.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => navigate("/learning/devops/sre")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              ← Module 9: SRE
            </button>
            <button
              onClick={() => navigate("/learning")}
              className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2.5 text-xs font-bold text-stone-200 hover:bg-stone-700 transition"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/learning/devops/devsecops")}
              className="rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-orange-600 transition"
            >
              Next: Module 11 — DevSecOps →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
