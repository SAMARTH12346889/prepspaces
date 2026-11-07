import React, { useState, useEffect, useCallback } from "react";
import {
  Layers,
  Play,
  RotateCcw,
  Zap,
  Server,
  Activity,
  GitBranch,
  ShieldAlert,
  CheckCircle2,
  HardDrive
} from "lucide-react";

/**
 * 1. Canary vs Blue-Green Deployment Simulator
 * Simulates traffic shifting, error rate telemetry, and automated rollbacks
 */
export function CanaryVsBlueGreenDeploymentSimulator() {
  const [strategy, setStrategy] = useState("canary"); // "direct", "blue-green", "canary", "shadow"
  const [canaryWeight, setCanaryWeight] = useState(10); // 10% to v2, 90% to v1
  const [activeVersion, setActiveVersion] = useState("v1"); // For blue-green
  const [isTrafficActive, setIsTrafficActive] = useState(false);
  const [requestsV1, setRequestsV1] = useState(0);
  const [requestsV2, setRequestsV2] = useState(0);
  const [errorsV1, setErrorsV1] = useState(0);
  const [errorsV2, setErrorsV2] = useState(0);
  const [rollbackTriggered, setRollbackTriggered] = useState(false);

  // Dispatch single request
  const dispatchRequest = useCallback(() => {
    let chosenTarget = "v1";

    if (strategy === "direct") {
      chosenTarget = "v2";
    } else if (strategy === "blue-green") {
      chosenTarget = activeVersion;
    } else if (strategy === "canary") {
      chosenTarget = Math.random() * 100 < canaryWeight ? "v2" : "v1";
    } else if (strategy === "shadow") {
      chosenTarget = "both";
    }

    if (chosenTarget === "v1" || chosenTarget === "both") {
      setRequestsV1((prev) => prev + 1);
      // v1 stable has 0.5% failure
      if (Math.random() < 0.005) {
        setErrorsV1((prev) => prev + 1);
      }
    }

    if (chosenTarget === "v2" || chosenTarget === "both") {
      setRequestsV2((prev) => prev + 1);
      // v2 candidate has simulated 4.5% error spike
      if (Math.random() < 0.045) {
        setErrorsV2((prev) => {
          const nextErrors = prev + 1;
          // Automated circuit breaker trigger if errors spike
          if (nextErrors >= 5 && !rollbackTriggered) {
            setRollbackTriggered(true);
            setCanaryWeight(0);
            setActiveVersion("v1");
          }
          return nextErrors;
        });
      }
    }
  }, [strategy, activeVersion, canaryWeight, rollbackTriggered]);

  // Traffic generator stream
  useEffect(() => {
    let interval;
    if (isTrafficActive) {
      interval = setInterval(() => {
        dispatchRequest();
      }, 150);
    }
    return () => clearInterval(interval);
  }, [isTrafficActive, dispatchRequest]);

  const handleReset = () => {
    setIsTrafficActive(false);
    setRequestsV1(0);
    setRequestsV2(0);
    setErrorsV1(0);
    setErrorsV2(0);
    setRollbackTriggered(false);
    setCanaryWeight(10);
    setActiveVersion("v1");
  };

  const handleManualRollback = () => {
    setRollbackTriggered(true);
    setCanaryWeight(0);
    setActiveVersion("v1");
  };

  const errRateV1 = requestsV1 > 0 ? ((errorsV1 / requestsV1) * 100).toFixed(1) : "0.0";
  const errRateV2 = requestsV2 > 0 ? ((errorsV2 / requestsV2) * 100).toFixed(1) : "0.0";

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Server className="w-5 h-5 text-amber-400" />
            Canary vs Blue-Green Deployment Simulator
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Simulate progressive traffic splitting, observe error rate telemetry, and test automated circuit breaker rollbacks.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsTrafficActive(!isTrafficActive)}
            className={`px-3 py-1.5 text-xs rounded font-bold flex items-center gap-1.5 transition-all ${
              isTrafficActive
                ? "bg-red-600 hover:bg-red-500 text-white animate-pulse"
                : "bg-emerald-600 hover:bg-emerald-500 text-white"
            }`}
          >
            <Play size={14} /> {isTrafficActive ? "Pause Traffic" : "Stream Live Traffic"}
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs rounded bg-stone-800 hover:bg-stone-700 text-stone-300 font-medium flex items-center gap-1"
          >
            <RotateCcw size={14} /> Reset
          </button>
        </div>
      </div>

      {/* Strategy Selector Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 my-4">
        <div className="flex bg-stone-950 p-1 rounded-lg border border-stone-800 text-xs">
          {[
            { id: "canary", label: "Canary (Gradual Split)" },
            { id: "blue-green", label: "Blue-Green (Instant Switch)" },
            { id: "shadow", label: "Shadow (Mirrored Traffic)" },
            { id: "direct", label: "Direct (All v2)" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setStrategy(tab.id);
                setRollbackTriggered(false);
              }}
              className={`px-3 py-1 rounded font-bold transition-all ${
                strategy === tab.id ? "bg-amber-600 text-white" : "text-stone-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Manual Rollback Action */}
        <button
          onClick={handleManualRollback}
          className="px-3 py-1.5 text-xs rounded bg-rose-900/80 hover:bg-rose-800 text-rose-200 font-bold border border-rose-700 flex items-center gap-1"
        >
          <RotateCcw size={13} /> Rollback to Champion (v1)
        </button>
      </div>

      {/* Dynamic Strategy Configuration Bar */}
      {strategy === "canary" && (
        <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 my-4 text-xs font-mono">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-stone-400">Canary Traffic Weight (v2 Candidate):</span>
            <span className="text-amber-400 font-bold">{canaryWeight}% to v2 · {100 - canaryWeight}% to v1</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={canaryWeight}
            onChange={(e) => {
              setCanaryWeight(Number(e.target.value));
              setRollbackTriggered(false);
            }}
            className="w-full accent-amber-500"
          />
        </div>
      )}

      {strategy === "blue-green" && (
        <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 my-4 flex items-center justify-between text-xs font-mono">
          <span className="text-stone-400">Active Live Environment:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveVersion("v1")}
              className={`px-3 py-1 rounded font-bold transition-all ${
                activeVersion === "v1" ? "bg-sky-600 text-white" : "bg-stone-800 text-stone-400"
              }`}
            >
              Blue (v1 Production)
            </button>
            <button
              onClick={() => setActiveVersion("v2")}
              className={`px-3 py-1 rounded font-bold transition-all ${
                activeVersion === "v2" ? "bg-emerald-600 text-white" : "bg-stone-800 text-stone-400"
              }`}
            >
              Green (v2 Candidate)
            </button>
          </div>
        </div>
      )}

      {/* Rollback Alert Banner */}
      {rollbackTriggered && (
        <div className="p-3 bg-rose-950/80 border border-rose-700 rounded-xl my-4 text-xs text-rose-200 flex items-center gap-2">
          <ShieldAlert size={16} className="text-rose-400 shrink-0" />
          <span>
            <strong>AUTOMATED CIRCUIT BREAKER ACTIVATED:</strong> Error rate on v2 exceeded safety threshold (&gt;4%). Traffic diverted 100% back to v1 Champion.
          </span>
        </div>
      )}

      {/* Version Telemetry Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
        {/* Model v1 Champion */}
        <div className="p-4 bg-stone-950 rounded-xl border border-stone-800">
          <div className="flex justify-between items-center pb-2 mb-3 border-b border-stone-800">
            <span className="text-white font-bold flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block"></span>
              Model v1 (@champion)
            </span>
            <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800 text-[10px] font-bold uppercase">
              Stable
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-stone-900 rounded border border-stone-800">
              <span className="text-[10px] text-stone-500 block">Requests</span>
              <span className="text-sm font-bold text-white">{requestsV1}</span>
            </div>
            <div className="p-2 bg-stone-900 rounded border border-stone-800">
              <span className="text-[10px] text-stone-500 block">5xx Errors</span>
              <span className="text-sm font-bold text-stone-300">{errorsV1}</span>
            </div>
            <div className="p-2 bg-stone-900 rounded border border-stone-800">
              <span className="text-[10px] text-stone-500 block">Error Rate</span>
              <span className="text-sm font-bold text-emerald-400">{errRateV1}%</span>
            </div>
          </div>
        </div>

        {/* Model v2 Challenger */}
        <div className="p-4 bg-stone-950 rounded-xl border border-stone-800">
          <div className="flex justify-between items-center pb-2 mb-3 border-b border-stone-800">
            <span className="text-white font-bold flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              Model v2 (@challenger)
            </span>
            <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 text-[10px] font-bold uppercase">
              Canary
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-stone-900 rounded border border-stone-800">
              <span className="text-[10px] text-stone-500 block">Requests</span>
              <span className="text-sm font-bold text-white">{requestsV2}</span>
            </div>
            <div className="p-2 bg-stone-900 rounded border border-stone-800">
              <span className="text-[10px] text-stone-500 block">5xx Errors</span>
              <span className="text-sm font-bold text-rose-400">{errorsV2}</span>
            </div>
            <div className="p-2 bg-stone-900 rounded border border-stone-800">
              <span className="text-[10px] text-stone-500 block">Error Rate</span>
              <span className={`text-sm font-bold ${Number(errRateV2) > 2 ? "text-rose-400" : "text-amber-400"}`}>
                {errRateV2}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Evidently AI Data Drift Distribution Visualizer
 * Simulates statistical distribution shifts and Kolmogorov-Smirnov drift tests
 */
export function DataDriftEvidentlyDistributionVisualizer() {
  const [driftSeverity, setDriftSeverity] = useState(65); // 0% to 100%

  // Simulated statistical metrics based on drift severity
  const ksStatistic = (0.05 + (driftSeverity / 100) * 0.42).toFixed(3);
  const pValue = Math.max(0.001, (1.0 - (driftSeverity / 100) * 1.05)).toFixed(4);
  const psiScore = (0.02 + (driftSeverity / 100) * 0.38).toFixed(3);

  const isDriftDetected = Number(pValue) < 0.05;
  const isRetrainingRecommended = Number(psiScore) > 0.25;

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            Evidently AI Statistical Data Drift Analyzer
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Compare baseline training distributions against production traffic and compute Kolmogorov-Smirnov &amp; PSI statistics.
          </p>
        </div>
        <div className="text-xs font-mono">
          {isDriftDetected ? (
            <span className="px-2.5 py-1 rounded bg-rose-950 text-rose-300 border border-rose-700 font-bold flex items-center gap-1.5">
              <ShieldAlert size={14} className="text-rose-400" /> Statistical Drift Confirmed!
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700 font-bold flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-400" /> Distribution Stable (No Drift)
            </span>
          )}
        </div>
      </div>

      {/* Drift Severity Slider */}
      <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 my-4 text-xs font-mono">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-stone-400">Simulate Production Distribution Shift:</span>
          <span className="text-emerald-400 font-bold">{driftSeverity}% Shift</span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={driftSeverity}
          onChange={(e) => setDriftSeverity(Number(e.target.value))}
          className="w-full accent-emerald-500"
        />
      </div>

      {/* Distribution Comparison Chart */}
      <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 my-4 font-mono text-xs">
        <div className="flex justify-between text-stone-500 text-[10px] uppercase pb-2 mb-3 border-b border-stone-800">
          <span>Feature: Prompt Token Length Distribution (Bins)</span>
          <span>Baseline Reference vs Production Traffic</span>
        </div>
        <div className="space-y-3">
          {[
            { label: "0 - 100 Tokens (Basic Qs)", base: 45, prod: Math.max(10, 45 - driftSeverity * 0.4) },
            { label: "100 - 300 Tokens (Standard Qs)", base: 40, prod: Math.max(15, 40 - driftSeverity * 0.2) },
            { label: "300 - 800 Tokens (Advanced System Design)", base: 12, prod: Math.min(50, 12 + driftSeverity * 0.35) },
            { label: "800+ Tokens (Multi-file Code Snippets)", base: 3, prod: Math.min(35, 3 + driftSeverity * 0.25) }
          ].map((bin, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-stone-300">{bin.label}</span>
                <span className="text-stone-500">Ref: {bin.base}% · Prod: {bin.prod.toFixed(0)}%</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="h-2.5 bg-stone-800 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full" style={{ width: `${bin.base}%` }}></div>
                </div>
                <div className="h-2.5 bg-stone-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${isDriftDetected ? "bg-amber-500" : "bg-emerald-500"}`}
                    style={{ width: `${bin.prod}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Statistical Metrics Scoreboard */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
        <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
          <span className="text-stone-500 text-[10px] block uppercase">KS Statistic ($D$)</span>
          <span className="text-white font-bold text-sm">{ksStatistic}</span>
        </div>
        <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
          <span className="text-stone-500 text-[10px] block uppercase">p-Value ($\alpha = 0.05$)</span>
          <span className={`text-sm font-bold ${isDriftDetected ? "text-rose-400 font-bold" : "text-emerald-400"}`}>
            {pValue}
          </span>
        </div>
        <div className="p-3 bg-stone-950 rounded-lg border border-stone-800">
          <span className="text-stone-500 text-[10px] block uppercase">Population Stability (PSI)</span>
          <span className={`text-sm font-bold ${isRetrainingRecommended ? "text-amber-400" : "text-sky-400"}`}>
            {psiScore} {isRetrainingRecommended && "(Retrain!)"}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * 3. MLflow Experiment Run Comparator & Model Registry
 * Interactive experiment dashboard comparing runs and reassigning @champion aliases
 */
export function MlflowExperimentRunComparator() {
  const [selectedRunId, setSelectedRunId] = useState("run-03");
  const [championRunId, setChampionRunId] = useState("run-03");

  const runs = [
    {
      id: "run-01",
      name: "LoRA-Rank8-LR1e-4",
      lr: "1e-4",
      rank: 8,
      batchSize: 8,
      evalLoss: 0.28,
      f1Score: 0.88,
      latencyMs: 380,
      vramGb: 14.2
    },
    {
      id: "run-02",
      name: "LoRA-Rank16-LR2e-4",
      lr: "2e-4",
      rank: 16,
      batchSize: 16,
      evalLoss: 0.21,
      f1Score: 0.91,
      latencyMs: 410,
      vramGb: 14.8
    },
    {
      id: "run-03",
      name: "LoRA-Rank32-LR3e-4 (Current Champion)",
      lr: "3e-4",
      rank: 32,
      batchSize: 16,
      evalLoss: 0.16,
      f1Score: 0.94,
      latencyMs: 440,
      vramGb: 15.6
    },
    {
      id: "run-04",
      name: "LoRA-Rank64-LR5e-4 (Overfitting)",
      lr: "5e-4",
      rank: 64,
      batchSize: 32,
      evalLoss: 0.24,
      f1Score: 0.89,
      latencyMs: 520,
      vramGb: 17.2
    }
  ];

  const activeRun = runs.find((r) => r.id === selectedRunId);

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-sky-400" />
            MLflow Experiment Tracking &amp; Model Registry
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Compare training hyperparameters, evaluate validation loss vs F1 score, and promote top runs to the @champion alias.
          </p>
        </div>
        <div className="text-xs font-mono">
          <span className="text-stone-400">Production Model: </span>
          <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
            @champion -&gt; {championRunId}
          </span>
        </div>
      </div>

      {/* Run Selection Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4 text-xs font-mono">
        {runs.map((r) => {
          const isSelected = selectedRunId === r.id;
          const isChampion = championRunId === r.id;
          return (
            <button
              key={r.id}
              onClick={() => setSelectedRunId(r.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? "bg-sky-950/40 border-sky-600 text-sky-100"
                  : "bg-stone-950 border-stone-800 text-stone-400 hover:border-stone-700"
              }`}
            >
              <div className="flex justify-between items-center text-[10px] mb-1">
                <span>{r.id}</span>
                {isChampion && <span className="text-emerald-400 font-bold">@CHAMPION</span>}
              </div>
              <div className="font-bold text-white text-[11px] truncate">{r.name}</div>
              <div className="mt-2 text-[10px] text-stone-500">
                F1: <span className="text-emerald-400 font-bold">{r.f1Score}</span> · Loss: {r.evalLoss}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Run Inspection Panel */}
      <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 font-mono text-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-3 border-b border-stone-800 gap-2">
          <div>
            <span className="text-[10px] text-stone-500 uppercase block">Selected Run Lineage</span>
            <span className="text-white font-bold text-sm">{activeRun.name}</span>
          </div>
          <button
            onClick={() => setChampionRunId(activeRun.id)}
            disabled={championRunId === activeRun.id}
            className="px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-bold text-xs flex items-center gap-1.5 self-start sm:self-auto"
          >
            <CheckCircle2 size={14} /> Promote to @champion Alias
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
            <span className="text-[10px] text-stone-500 block">Learning Rate</span>
            <span className="text-white font-bold">{activeRun.lr}</span>
          </div>
          <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
            <span className="text-[10px] text-stone-500 block">LoRA Rank ($r$)</span>
            <span className="text-white font-bold">{activeRun.rank}</span>
          </div>
          <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
            <span className="text-[10px] text-stone-500 block">Validation F1 Score</span>
            <span className="text-emerald-400 font-bold">{activeRun.f1Score}</span>
          </div>
          <div className="p-2.5 bg-stone-900 rounded border border-stone-800">
            <span className="text-[10px] text-stone-500 block">GPU VRAM Used</span>
            <span className="text-amber-400 font-bold">{activeRun.vramGb} GB</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. DVC DAG Pipeline Reproducibility Visualizer
 * Visualizes Directed Acyclic Graph (DAG) dependencies and selective dvc repro recomputation
 */
export function DvcDagPipelineVisualizer() {
  const [modifiedFile, setModifiedFile] = useState("train.py"); // "raw_dataset.json", "clean.py", "train.py", "eval.py"

  const stages = [
    { id: "clean", name: "1. Data Cleaning (clean.py)", dependsOn: ["raw_dataset.json", "clean.py"] },
    { id: "train", name: "2. Model Training (train.py)", dependsOn: ["clean.py", "train.py"] },
    { id: "evaluate", name: "3. Model Evaluation (eval.py)", dependsOn: ["clean.py", "train.py", "eval.py"] },
    { id: "registry", name: "4. Registry Export (registry.py)", dependsOn: ["eval.py"] }
  ];

  const willRerun = (stageId) => {
    if (modifiedFile === "raw_dataset.json") return true; // All rerun
    if (modifiedFile === "clean.py") return true; // All rerun
    if (modifiedFile === "train.py") return stageId === "train" || stageId === "evaluate" || stageId === "registry";
    if (modifiedFile === "eval.py") return stageId === "evaluate" || stageId === "registry";
    return false;
  };

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-amber-400" />
            DVC Directed Acyclic Graph (DAG) &amp; 'dvc repro' Visualizer
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Modify a dependency and observe which downstream pipeline stages execute vs load from cache.
          </p>
        </div>
        <div className="text-xs font-mono">
          <code className="text-amber-400 bg-stone-950 px-2 py-1 rounded border border-stone-800">$ dvc repro</code>
        </div>
      </div>

      {/* Dependency Modifier Selector */}
      <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 my-4 text-xs font-mono">
        <label className="text-stone-400 block mb-1">Simulate Code / Data Modification:</label>
        <select
          value={modifiedFile}
          onChange={(e) => setModifiedFile(e.target.value)}
          className="w-full bg-stone-900 border border-stone-700 rounded px-2.5 py-1.5 text-white font-mono"
        >
          <option value="raw_dataset.json">data/raw_dataset.json (New training questions added)</option>
          <option value="clean.py">src/clean.py (Modified text preprocessing tokenizer logic)</option>
          <option value="train.py">src/train.py (Changed LoRA learning rate or rank)</option>
          <option value="eval.py">src/eval.py (Updated evaluation rubric criteria)</option>
        </select>
      </div>

      {/* DAG Stage Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono my-4">
        {stages.map((stage) => {
          const executes = willRerun(stage.id);
          return (
            <div
              key={stage.id}
              className={`p-3.5 rounded-xl border flex flex-col justify-between ${
                executes
                  ? "bg-amber-950/40 border-amber-600 text-amber-100"
                  : "bg-emerald-950/20 border-emerald-800 text-emerald-200 opacity-60"
              }`}
            >
              <div>
                <span className="text-[10px] text-stone-400 block mb-1">Stage</span>
                <span className="font-bold text-white text-[11px] block">{stage.name}</span>
              </div>
              <div className="mt-3 pt-2 border-t border-stone-800">
                {executes ? (
                  <span className="text-amber-400 font-bold flex items-center gap-1 text-[10px]">
                    <Zap size={12} /> RECOMPUTES (deps changed)
                  </span>
                ) : (
                  <span className="text-emerald-400 font-medium flex items-center gap-1 text-[10px]">
                    <CheckCircle2 size={12} /> CACHED (skipped)
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * 5. Docker Image Multi-Stage Layer Inspector
 * Visualizes image size reduction and caching mechanics
 */
export function DockerImageMultiStageLayerInspector() {
  const [isMultiStage, setIsMultiStage] = useState(true);

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 text-stone-200">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-purple-400" />
            Docker Image Layer Inspector: Monolithic vs Multi-Stage
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            Compare final container image footprints and understand how layer separation accelerates build caching.
          </p>
        </div>
        <div className="flex bg-stone-950 p-1 rounded-lg border border-stone-800 text-xs">
          <button
            onClick={() => setIsMultiStage(false)}
            className={`px-3 py-1 rounded font-bold transition-all ${
              !isMultiStage ? "bg-rose-700 text-white" : "text-stone-400 hover:text-white"
            }`}
          >
            Naive Monolithic (1.9 GB)
          </button>
          <button
            onClick={() => setIsMultiStage(true)}
            className={`px-3 py-1 rounded font-bold transition-all ${
              isMultiStage ? "bg-emerald-600 text-white" : "text-stone-400 hover:text-white"
            }`}
          >
            Multi-Stage Slim (215 MB)
          </button>
        </div>
      </div>

      {/* Layer Stack Diagram */}
      <div className="space-y-2 my-4 font-mono text-xs">
        {isMultiStage ? (
          <>
            <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800 flex justify-between items-center">
              <span className="text-stone-300">FROM python:3.12-slim (Base OS &amp; CPython runtime)</span>
              <span className="text-stone-500">128 MB</span>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800 flex justify-between items-center">
              <span className="text-emerald-400">COPY --from=builder /install /usr/local (Only compiled wheels)</span>
              <span className="text-emerald-400 font-bold">82 MB</span>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800 flex justify-between items-center">
              <span className="text-sky-300">COPY app/ ./app/ (Python source code)</span>
              <span className="text-stone-500">5 MB</span>
            </div>
            <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-700 flex justify-between items-center font-bold text-emerald-200">
              <span>Total Production Image Size</span>
              <span>215 MB (Fast Pulls, Small Attack Surface)</span>
            </div>
          </>
        ) : (
          <>
            <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800 flex justify-between items-center">
              <span className="text-stone-300">FROM python:3.12 (Full base with build essentials)</span>
              <span className="text-stone-500">890 MB</span>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800 flex justify-between items-center">
              <span className="text-rose-400">RUN apt-get install gcc g++ git (Compilers &amp; build tools)</span>
              <span className="text-rose-400 font-bold">480 MB (Security Risk!)</span>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800 flex justify-between items-center">
              <span className="text-rose-400">RUN pip install -r requirements.txt (Wheels + Pip cache)</span>
              <span className="text-rose-400 font-bold">520 MB</span>
            </div>
            <div className="p-2.5 rounded-lg bg-stone-950 border border-stone-800 flex justify-between items-center">
              <span className="text-stone-300">COPY . . (Unfiltered source + test files)</span>
              <span className="text-stone-500">35 MB</span>
            </div>
            <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-700 flex justify-between items-center font-bold text-rose-200">
              <span>Total Monolithic Image Size</span>
              <span>1,925 MB (Slow Kubernetes Scaling, High Vulnerability Count)</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
