import React, { useState, useId } from "react";
import {
  Network,
  Share2,
  AlertTriangle,
  CheckCircle2,
  Play,
  RotateCcw,
  Sliders,
  ShieldAlert
} from "lucide-react";

/**
 * 1. DAG Workflow Execution & Topological Scheduler
 * Interactive Directed Acyclic Graph runner demonstrating parallel branch scheduling and cycle detection.
 */
export function DagWorkflowExecutionScheduler() {
  const [hasCycle, setHasCycle] = useState(false);
  const [executionStep, setExecutionStep] = useState(0);

  // Normal valid DAG tasks
  const validTasks = [
    { id: "t_tech", name: "Technical Evaluation", agent: "Technical Agent", dependsOn: [], layer: 1 },
    { id: "t_code", name: "Coding Test Sandbox", agent: "Coding Agent", dependsOn: [], layer: 1 },
    { id: "t_comm", name: "Communication Analysis", agent: "Communication Agent", dependsOn: [], layer: 1 },
    { id: "t_learn", name: "Curriculum Synthesis", agent: "Learning Agent", dependsOn: ["t_tech", "t_code"], layer: 2 },
    { id: "t_results", name: "Results & Report Aggregator", agent: "Results Agent", dependsOn: ["t_learn", "t_comm"], layer: 3 }
  ];

  const getTaskStatus = (taskId) => {
    if (hasCycle) return "blocked_cycle";

    if (executionStep === 0) return "pending";

    if (executionStep === 1) {
      if (["t_tech", "t_code", "t_comm"].includes(taskId)) return "completed";
      if (taskId === "t_learn") return "running";
      return "pending";
    }

    if (executionStep === 2) {
      if (["t_tech", "t_code", "t_comm", "t_learn"].includes(taskId)) return "completed";
      if (taskId === "t_results") return "running";
      return "pending";
    }

    return "completed";
  };

  const handleAdvance = () => {
    if (hasCycle) return;
    if (executionStep < 3) {
      setExecutionStep((prev) => prev + 1);
    }
  };

  const handleToggleCycle = () => {
    setHasCycle(!hasCycle);
    setExecutionStep(0);
  };

  const handleReset = () => {
    setExecutionStep(0);
    setHasCycle(false);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Network className="text-orange-600" size={20} />
            DAG Task Dependency & Topological Execution Scheduler
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Visualize in-degree prerequisite resolution, concurrent fan-out, and Kahn's algorithm cycle detection.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleCycle}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold border transition-all ${
              hasCycle
                ? "bg-rose-100 border-rose-300 text-rose-800"
                : "bg-stone-50 border-stone-300 text-stone-700 hover:bg-stone-100"
            }`}
          >
            {hasCycle ? "Remove Cyclic Edge" : "Inject Circular Dependency (Test Cycle)"}
          </button>
          <button
            onClick={handleReset}
            title="Reset Graph"
            className="rounded-lg border border-stone-300 p-1.5 text-stone-600 hover:bg-stone-100"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Cycle Warning Banner */}
      {hasCycle && (
        <div className="rounded-xl border border-rose-300 bg-rose-50 p-4 mb-5 text-xs text-rose-900 flex items-start gap-3">
          <AlertTriangle className="text-rose-600 shrink-0 mt-0.5" size={18} />
          <div>
            <span className="font-bold block text-sm">Circular Dependency Deadlock Detected!</span>
            <p className="mt-0.5">
              Cycle detected: <span className="font-mono font-bold text-rose-950">t_results → t_tech → t_learn → t_results</span>. Kahn's algorithm identified that in-degree never reaches zero. Plan rejected prior to execution.
            </p>
          </div>
        </div>
      )}

      {/* Visual DAG Layers */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Layer 1: Independent Root Tasks */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5 space-y-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
            Layer 1: Ready Tasks (In-Degree: 0)
          </span>
          {validTasks.filter((t) => t.layer === 1).map((task) => {
            const status = getTaskStatus(task.id);
            return (
              <div
                key={task.id}
                className={`rounded-xl border p-3 transition-all ${
                  status === "completed"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : status === "running"
                    ? "bg-amber-50 border-amber-300 text-amber-950 ring-2 ring-amber-200 animate-pulse"
                    : status === "blocked_cycle"
                    ? "bg-rose-50 border-rose-300 text-rose-900 opacity-60"
                    : "bg-white border-stone-200 text-stone-800"
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold">{task.name}</span>
                  <span className="font-mono text-[10px] uppercase font-semibold">
                    {status}
                  </span>
                </div>
                <span className="text-[11px] text-stone-500 block">{task.agent}</span>
              </div>
            );
          })}
        </div>

        {/* Layer 2: Intermediate Synthesis */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5 space-y-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
            Layer 2: Dependent on Layer 1
          </span>
          {validTasks.filter((t) => t.layer === 2).map((task) => {
            const status = getTaskStatus(task.id);
            return (
              <div
                key={task.id}
                className={`rounded-xl border p-3 transition-all ${
                  status === "completed"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : status === "running"
                    ? "bg-amber-50 border-amber-300 text-amber-950 ring-2 ring-amber-200 animate-pulse"
                    : status === "blocked_cycle"
                    ? "bg-rose-50 border-rose-300 text-rose-900 opacity-60"
                    : "bg-white border-stone-200 text-stone-800"
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold">{task.name}</span>
                  <span className="font-mono text-[10px] uppercase font-semibold">
                    {status}
                  </span>
                </div>
                <span className="text-[11px] text-stone-500 block">{task.agent}</span>
                <span className="text-[10px] font-mono text-stone-400 block mt-1">
                  Depends On: [t_tech, t_code]
                </span>
              </div>
            );
          })}
        </div>

        {/* Layer 3: Final Aggregator */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5 space-y-2.5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 block">
            Layer 3: Final Sink Task
          </span>
          {validTasks.filter((t) => t.layer === 3).map((task) => {
            const status = getTaskStatus(task.id);
            return (
              <div
                key={task.id}
                className={`rounded-xl border p-3 transition-all ${
                  status === "completed"
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : status === "running"
                    ? "bg-amber-50 border-amber-300 text-amber-950 ring-2 ring-amber-200 animate-pulse"
                    : status === "blocked_cycle"
                    ? "bg-rose-50 border-rose-300 text-rose-900 opacity-60"
                    : "bg-white border-stone-200 text-stone-800"
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold">{task.name}</span>
                  <span className="font-mono text-[10px] uppercase font-semibold">
                    {status}
                  </span>
                </div>
                <span className="text-[11px] text-stone-500 block">{task.agent}</span>
                <span className="text-[10px] font-mono text-stone-400 block mt-1">
                  Depends On: [t_learn, t_comm]
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Controls and Topological Output */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 pt-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handleAdvance}
            disabled={hasCycle || executionStep === 3}
            className="rounded-lg bg-orange-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-orange-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
          >
            <Play size={14} />
            <span>{executionStep === 0 ? "Start DAG Execution" : "Advance Scheduled Wave"}</span>
          </button>
          <span className="text-xs text-stone-500 font-mono">
            Wave {executionStep}/3
          </span>
        </div>
        <div className="text-xs text-stone-600 font-mono">
          <span className="font-bold text-stone-800">Topological Sort: </span>
          <span>[t_tech, t_code, t_comm] (Parallel) → t_learn → t_results</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 2. Multi-Intent Router & Fallback Dispatcher
 * Interactive routing simulator demonstrating Rule-based vs LLM-based multi-intent classification.
 */
export function MultiIntentRouterDispatcher() {
  const routerModeId = useId();
  const [selectedPrompt, setSelectedPrompt] = useState("compound_review");
  const [routerMode, setRouterMode] = useState("hybrid");

  const prompts = {
    compound_review: {
      text: "Review my Java code, benchmark its time complexity, evaluate my spoken explanation, and recommend 3 revision lessons.",
      intents: [
        { intent: "code_review", agent: "codingAgent", confidence: 0.96 },
        { intent: "speech_eval", agent: "communicationAgent", confidence: 0.92 },
        { intent: "curriculum_plan", agent: "learningAgent", confidence: 0.95 }
      ],
      fastPathHit: false,
      isAmbiguous: false
    },
    single_keyword: {
      text: "Debug Python IndexError in worker.py",
      intents: [
        { intent: "code_debugging", agent: "codingAgent", confidence: 1.0 }
      ],
      fastPathHit: true,
      isAmbiguous: false
    },
    ambiguous_query: {
      text: "Can you check my progress and tell me what happened?",
      intents: [],
      fastPathHit: false,
      isAmbiguous: true,
      clarificationPrompt: "Did you want to inspect your course lesson progress, mock interview score, or coding challenge performance?"
    }
  };

  const active = prompts[selectedPrompt];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Sliders className="text-orange-600" size={20} />
            Multi-Intent Agent Router & Fallback Dispatcher
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Test sub-2ms fast-path regex rules, compound multi-intent decomposition, and ambiguity disambiguation.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor={routerModeId} className="text-xs font-semibold text-stone-600">Mode:</label>
          <select
            id={routerModeId}
            value={routerMode}
            onChange={(e) => setRouterMode(e.target.value)}
            className="rounded-lg border border-stone-300 bg-stone-50 px-2.5 py-1.5 text-xs font-semibold text-stone-800"
          >
            <option value="hybrid">Hybrid (Fast-Path + LLM Fallback)</option>
            <option value="pure_rules">Deterministic Rules Only</option>
            <option value="pure_llm">LLM Classifier Only</option>
          </select>
        </div>
      </div>

      {/* Preset Queries */}
      <div className="grid sm:grid-cols-3 gap-2.5 mb-5">
        <button
          onClick={() => setSelectedPrompt("compound_review")}
          className={`rounded-xl border p-3 text-left transition-all text-xs ${
            selectedPrompt === "compound_review"
              ? "border-orange-500 bg-orange-50 font-bold text-orange-950"
              : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
          }`}
        >
          <span className="block mb-0.5 font-mono text-[10px] text-orange-700">PROMPT A (Compound)</span>
          <span className="line-clamp-2">"Review code, benchmark complexity, evaluate speech..."</span>
        </button>
        <button
          onClick={() => setSelectedPrompt("single_keyword")}
          className={`rounded-xl border p-3 text-left transition-all text-xs ${
            selectedPrompt === "single_keyword"
              ? "border-orange-500 bg-orange-50 font-bold text-orange-950"
              : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
          }`}
        >
          <span className="block mb-0.5 font-mono text-[10px] text-orange-700">PROMPT B (Fast-Path)</span>
          <span className="line-clamp-2">"Debug Python IndexError in worker.py"</span>
        </button>
        <button
          onClick={() => setSelectedPrompt("ambiguous_query")}
          className={`rounded-xl border p-3 text-left transition-all text-xs ${
            selectedPrompt === "ambiguous_query"
              ? "border-orange-500 bg-orange-50 font-bold text-orange-950"
              : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100"
          }`}
        >
          <span className="block mb-0.5 font-mono text-[10px] text-orange-700">PROMPT C (Ambiguous)</span>
          <span className="line-clamp-2">"Can you check my progress and tell me..."</span>
        </button>
      </div>

      {/* Raw Prompt Box */}
      <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 mb-5 text-xs">
        <span className="font-bold text-stone-700 block mb-1">Incoming Natural Language Prompt:</span>
        <p className="text-stone-900 font-mono bg-white p-2.5 rounded-lg border border-stone-200">
          "{active.text}"
        </p>
      </div>

      {/* Router Analysis Card */}
      {active.isAmbiguous ? (
        <div className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-xs text-amber-950">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={18} />
            <div>
              <span className="font-bold block text-sm">Ambiguity Detected (Confidence: 0.38)</span>
              <p className="mt-0.5">
                The router refused to hallucinate an arbitrary specialist. Triggered single interactive clarification turn:
              </p>
              <div className="mt-2.5 rounded-lg bg-white border border-amber-200 p-2.5 font-semibold text-stone-800">
                "{active.clarificationPrompt}"
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-stone-800 uppercase tracking-wider">
              Decomposed Subtask Dispatches ({active.intents.length} Target Agents)
            </span>
            <span className="font-mono text-xs text-emerald-700 font-bold">
              {active.fastPathHit ? "⚡ Fast-Path Match (< 1.5ms)" : "🧠 Multi-Intent Decomposed (180ms)"}
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            {active.intents.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-stone-200 bg-white p-3.5 text-xs shadow-2xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-orange-700 font-mono text-[11px]">
                    Subtask 0{idx + 1}
                  </span>
                  <span className="font-mono text-[10px] text-stone-500">
                    {Math.round(item.confidence * 100)}% Conf
                  </span>
                </div>
                <span className="font-bold text-stone-900 block">{item.intent}</span>
                <span className="text-[11px] text-stone-500 font-mono block">
                  → {item.agent}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * 3. Inter-Agent Message Bus & A2A Inspector
 * Interactive wire message frame explorer for Direct, Broadcast, Blackboard, and A2A protocols.
 */
export function InterAgentMessageBusInspector() {
  const [protocol, setProtocol] = useState("a2a");

  const frames = {
    direct: {
      title: "Direct Peer-to-Peer Message Frame",
      desc: "Synchronous RPC message passed directly between two specialist agents.",
      payload: {
        messageId: "msg_7810aa4",
        taskId: "task_eval_101",
        correlationId: "corr_9128",
        sender: "codingAgent",
        recipient: "technicalAgent",
        messageType: "CODE_ANALYSIS_FINDINGS",
        payload: {
          analyzedFunction: "synchronizedTransfer()",
          threadContentionRisk: "HIGH",
          lockType: "ReentrantLock"
        },
        timestamp: "2026-11-07T09:40:00Z"
      }
    },
    blackboard: {
      title: "Shared Blackboard State Update",
      desc: "Agent posting an intermediate hypothesis to the shared transactional state store.",
      payload: {
        taskId: "task_eval_101",
        version: 4,
        blackboardNamespace: "student_evaluations",
        updatedBy: "technicalAgent",
        entry: {
          domain: "Java Concurrency",
          score: 82,
          weakTopics: ["Lock Contention", "Thread starvation"]
        },
        idempotencyKey: "idem_tech_v4"
      }
    },
    a2a: {
      title: "Agent2Agent (A2A) Protocol Task Frame",
      desc: "Linux Foundation open standard message delegating an asynchronous task to a remote agent service.",
      payload: {
        jsonrpc: "2.0",
        id: "a2a_req_8901",
        method: "tasks/submit",
        params: {
          agentCardUrl: "https://api.prepspaces.com/a2a/v1/agents/coding-specialist",
          skillId: "execute_unit_tests",
          inputArtifacts: [
            { type: "text/x-java", name: "Solution.java", uri: "s3://sandbox/u101/Solution.java" }
          ],
          callbackWebhook: "https://orchestrator.prepspaces.com/a2a/callback"
        }
      }
    }
  };

  const active = frames[protocol];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Share2 className="text-orange-600" size={20} />
            Inter-Agent Messaging & A2A Wire Inspector
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Compare <span className="font-semibold text-stone-800">Direct RPC</span>, <span className="font-semibold text-stone-800">Blackboard State</span>, and <span className="font-semibold text-stone-800">Agent2Agent (A2A)</span> message envelopes.
          </p>
        </div>
        <div className="flex gap-1.5 bg-stone-100 p-1 rounded-lg text-xs font-semibold">
          <button
            onClick={() => setProtocol("direct")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              protocol === "direct" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
            }`}
          >
            Direct RPC
          </button>
          <button
            onClick={() => setProtocol("blackboard")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              protocol === "blackboard" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
            }`}
          >
            Blackboard
          </button>
          <button
            onClick={() => setProtocol("a2a")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              protocol === "a2a" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
            }`}
          >
            A2A Standard
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5 mb-5 text-xs text-stone-700">
        <span className="font-bold text-stone-900 block mb-0.5">{active.title}</span>
        <p>{active.desc}</p>
      </div>

      {/* JSON Message Box */}
      <div className="rounded-xl border border-stone-200 bg-stone-900 p-4 text-stone-200 font-mono text-xs">
        <div className="flex items-center justify-between mb-2 border-b border-stone-800 pb-2">
          <span className="text-orange-400 font-bold uppercase text-[10px] tracking-wider">
            Serialized Wire Payload ({protocol.toUpperCase()})
          </span>
          <span className="text-stone-400 text-[10px]">Schema v1.2</span>
        </div>
        <pre className="text-stone-300 overflow-x-auto max-h-60">
          {JSON.stringify(active.payload, null, 2)}
        </pre>
      </div>
    </div>
  );
}

/**
 * 4. Conflict Resolution & Weighted Score Aggregator
 * Interactive scoring workspace demonstrating mathematical consensus and discrepancy gates.
 */
export function ConflictResolutionAggregator() {
  const [techScore, setTechScore] = useState(85);
  const [codeScore, setCodeScore] = useState(58);
  const [commScore, setCommScore] = useState(90);

  // Weight coefficients
  const wTech = 0.40;
  const wCode = 0.35;
  const wComm = 0.25;

  const finalScore = Number(
    (wTech * techScore + wCode * codeScore + wComm * commScore).toFixed(1)
  );

  const maxDiscrepancy = Math.max(
    Math.abs(techScore - codeScore),
    Math.abs(techScore - commScore),
    Math.abs(codeScore - commScore)
  );

  const isCriticTriggered = maxDiscrepancy >= 25;
  const isHumanEscalation = maxDiscrepancy >= 40;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <ShieldAlert className="text-orange-600" size={20} />
            Conflict Resolution & Weighted Score Aggregator
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Formula: <span className="font-mono text-orange-700 font-bold">FinalScore = 0.40·T + 0.35·C + 0.25·M</span> with automated discrepancy gating.
          </p>
        </div>
        <span className="rounded-full bg-orange-100 border border-orange-200 px-3 py-1 text-xs font-mono font-bold text-orange-800">
          Composite Grade: {finalScore} / 100
        </span>
      </div>

      {/* Sliders for the 3 agents */}
      <div className="grid sm:grid-cols-3 gap-4 p-4 rounded-xl border border-stone-200 bg-stone-50 mb-5 text-xs">
        <div>
          <label className="font-semibold text-stone-700 block mb-1">
            Technical Specialist (T: 40%): <span className="text-orange-700 font-mono font-bold">{techScore}</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={techScore}
            onChange={(e) => setTechScore(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
        <div>
          <label className="font-semibold text-stone-700 block mb-1">
            Coding Specialist (C: 35%): <span className="text-orange-700 font-mono font-bold">{codeScore}</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={codeScore}
            onChange={(e) => setCodeScore(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
        <div>
          <label className="font-semibold text-stone-700 block mb-1">
            Communication (M: 25%): <span className="text-orange-700 font-mono font-bold">{commScore}</span>
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={commScore}
            onChange={(e) => setCommScore(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
      </div>

      {/* Discrepancy Status Card */}
      <div
        className={`rounded-xl border p-4 text-xs ${
          isHumanEscalation
            ? "bg-rose-50 border-rose-300 text-rose-950"
            : isCriticTriggered
            ? "bg-amber-50 border-amber-300 text-amber-950"
            : "bg-emerald-50 border-emerald-300 text-emerald-950"
        }`}
      >
        <div className="flex items-start gap-2.5">
          {isHumanEscalation ? (
            <AlertTriangle className="text-rose-600 shrink-0 mt-0.5" size={18} />
          ) : isCriticTriggered ? (
            <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={18} />
          ) : (
            <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" size={18} />
          )}

          <div>
            <span className="font-bold block text-sm">
              {isHumanEscalation
                ? "Severe Conflict: Escalated to Human Instructor"
                : isCriticTriggered
                ? "Discrepancy Gating: Automated Reviewer Agent Invoked"
                : "Consensus Verified: Scores Align Within Tolerances"}
            </span>
            <p className="mt-0.5">
              Maximum point spread is <span className="font-mono font-bold">{maxDiscrepancy} points</span>.
              {isHumanEscalation
                ? " Spread exceeds 40 points (e.g., Coding 58 vs Communication 90). Automatic score emission halted pending instructor review."
                : isCriticTriggered
                ? " Spread exceeds 25 points. Reviewer Agent inspecting unit test coverage and technical rubrics to explain divergence."
                : " All three specialist evaluations fall within normal grading variance."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. Circuit Breaker & Exponential Backoff Simulator
 * Interactive fault tolerance playground with backoff calculation and 3-state circuit breaker.
 */
export function CircuitBreakerBackoffSimulator() {
  const [breakerState, setBreakerState] = useState("CLOSED");
  const [consecutiveFailures, setConsecutiveFailures] = useState(0);
  const [attemptCount, setAttemptCount] = useState(0);

  const baseDelay = 500;
  const maxDelay = 8000;
  const jitter = 140; // Simulated jitter

  const calculatedDelay = Math.min(maxDelay, baseDelay * Math.pow(2, attemptCount)) + jitter;

  const handleSimulateFailure = () => {
    const newFailures = consecutiveFailures + 1;
    setConsecutiveFailures(newFailures);
    setAttemptCount((prev) => Math.min(5, prev + 1));

    if (newFailures >= 3) {
      setBreakerState("OPEN");
    }
  };

  const handleSimulateSuccess = () => {
    setConsecutiveFailures(0);
    setAttemptCount(0);
    setBreakerState("CLOSED");
  };

  const handleCooldownProbe = () => {
    setBreakerState("HALF_OPEN");
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <RotateCcw className="text-orange-600" size={20} />
            Circuit Breaker & Exponential Backoff Simulator
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Formula: <span className="font-mono text-orange-700 font-bold">D_n = min(D_max, D_0 · 2^n) + Jitter</span> protecting model endpoints.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-mono font-bold border ${
              breakerState === "CLOSED"
                ? "bg-emerald-100 border-emerald-300 text-emerald-900"
                : breakerState === "OPEN"
                ? "bg-rose-100 border-rose-300 text-rose-900"
                : "bg-amber-100 border-amber-300 text-amber-900"
            }`}
          >
            CIRCUIT: {breakerState}
          </span>
        </div>
      </div>

      {/* 3 Circuit States Grid */}
      <div className="grid sm:grid-cols-3 gap-3 mb-5 text-xs text-center font-mono">
        <div
          className={`rounded-xl border p-3.5 transition-all ${
            breakerState === "CLOSED"
              ? "border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-200 font-bold"
              : "border-stone-200 bg-stone-50 text-stone-500"
          }`}
        >
          <span className="block mb-0.5 text-sm">1. CLOSED</span>
          <span className="text-[11px] font-normal block">Normal Operation</span>
          <span className="text-[10px] text-stone-500 block mt-1">Failures: {consecutiveFailures}/3</span>
        </div>
        <div
          className={`rounded-xl border p-3.5 transition-all ${
            breakerState === "OPEN"
              ? "border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-200 font-bold"
              : "border-stone-200 bg-stone-50 text-stone-500"
          }`}
        >
          <span className="block mb-0.5 text-sm">2. OPEN</span>
          <span className="text-[11px] font-normal block">Fast Rejection (0ms)</span>
          <span className="text-[10px] text-stone-500 block mt-1">Protects Upstream API</span>
        </div>
        <div
          className={`rounded-xl border p-3.5 transition-all ${
            breakerState === "HALF_OPEN"
              ? "border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-200 font-bold"
              : "border-stone-200 bg-stone-50 text-stone-500"
          }`}
        >
          <span className="block mb-0.5 text-sm">3. HALF-OPEN</span>
          <span className="text-[11px] font-normal block">Canary Probe Test</span>
          <span className="text-[10px] text-stone-500 block mt-1">Testing Recovery</span>
        </div>
      </div>

      {/* Backoff Calculation Box */}
      <div className="rounded-xl border border-stone-200 bg-stone-900 p-4 text-stone-200 font-mono text-xs mb-5">
        <div className="flex items-center justify-between mb-2 border-b border-stone-800 pb-2">
          <span className="text-orange-400 font-bold uppercase text-[10px] tracking-wider">
            Truncated Exponential Backoff with Jitter
          </span>
          <span className="text-stone-400 text-[10px]">Attempt #{attemptCount}</span>
        </div>
        <div className="grid sm:grid-cols-4 gap-2 text-stone-300">
          <div>
            <span className="text-stone-500 block text-[10px]">Base Delay (D_0)</span>
            <span className="font-bold">{baseDelay} ms</span>
          </div>
          <div>
            <span className="text-stone-500 block text-[10px]">Exponential Multiplier</span>
            <span className="font-bold">2^{attemptCount} = {Math.pow(2, attemptCount)}x</span>
          </div>
          <div>
            <span className="text-stone-500 block text-[10px]">Random Jitter</span>
            <span className="font-bold">+{jitter} ms</span>
          </div>
          <div>
            <span className="text-stone-500 block text-[10px]">Scheduled Sleep</span>
            <span className="font-bold text-orange-400">{calculatedDelay} ms</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 pt-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulateFailure}
            className="rounded-lg border border-rose-300 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-800 hover:bg-rose-100"
          >
            Simulate Model 429 Throttle / 500 Error
          </button>
          <button
            onClick={handleCooldownProbe}
            disabled={breakerState !== "OPEN"}
            className="rounded-lg border border-stone-300 bg-stone-50 px-3 py-1.5 text-xs font-semibold text-stone-800 hover:bg-stone-100 disabled:opacity-40"
          >
            Trigger Cooldown Probe (Half-Open)
          </button>
          <button
            onClick={handleSimulateSuccess}
            className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-emerald-700"
          >
            Probe Succeeded (Reset to Closed)
          </button>
        </div>
        <button
          onClick={handleSimulateSuccess}
          title="Reset Breaker"
          className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1"
        >
          <RotateCcw size={13} />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
