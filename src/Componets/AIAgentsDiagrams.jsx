import React, { useState, useId } from "react";
import {
  Cpu,
  Terminal,
  Network,
  RotateCw,
  Share2,
  CheckCircle2,
  AlertTriangle,
  Play,
  RotateCcw,
  ArrowRight
} from "lucide-react";

/**
 * 1. ReAct Loop Execution Simulator
 * Interactive Observe -> Think -> Act -> Observe cycle simulator with step inspection.
 */
export function ReactLoopExecutionSimulator() {
  const [selectedScenario, setSelectedScenario] = useState("java_study_plan");
  const [currentStep, setCurrentStep] = useState(0);

  const scenarios = {
    java_study_plan: {
      goal: "Analyze my Java progress, find my weakest topics, and create a 7-day personalized study schedule.",
      steps: [
        {
          phase: "OBSERVE_INPUT",
          type: "Goal Received",
          detail: "User prompt: 'Analyze my Java progress, find my weakest topics, and create a 7-day personalized study schedule.'",
          scratchpad: "State initialized. Goal registered. Evaluating required external capabilities.",
          activeTool: null
        },
        {
          phase: "THINK",
          type: "Reasoning Trace #1",
          detail: "I need to inspect the student's completed lessons and quiz scores to identify weak areas. I should invoke get_student_progress.",
          scratchpad: "Thought: Without student telemetry, I cannot deduce weak topics. Selecting get_student_progress(courseId='java').",
          activeTool: null
        },
        {
          phase: "ACT",
          type: "Tool Invocation #1",
          detail: "Calling get_student_progress({ courseId: 'java' })",
          scratchpad: "Action: Emitted structured tool call get_student_progress with courseId='java'. Awaiting backend execution.",
          activeTool: { name: "get_student_progress", args: { courseId: "java" } }
        },
        {
          phase: "OBSERVE_TOOL",
          type: "Tool Observation #1",
          detail: "Backend output: { completed: 8, averageScore: 68%, weakTopics: ['Multithreading', 'Collections', 'Lock Synchronization'] }",
          scratchpad: "Observation received: 3 deficient topics identified. Multithreading (45%), Collections (52%), Locks (50%).",
          activeTool: null
        },
        {
          phase: "THINK",
          type: "Reasoning Trace #2",
          detail: "Now that I know the weak areas, I need to retrieve available curriculum lessons covering Multithreading and Collections.",
          scratchpad: "Thought: Invoking retrieve_curriculum_lessons for ['Multithreading', 'Collections'].",
          activeTool: null
        },
        {
          phase: "ACT",
          type: "Tool Invocation #2",
          detail: "Calling retrieve_curriculum_lessons({ topics: ['Multithreading', 'Collections'] })",
          scratchpad: "Action: Querying knowledge base for matching lesson IDs and lab exercises.",
          activeTool: { name: "retrieve_curriculum_lessons", args: { topics: ["Multithreading", "Collections"] } }
        },
        {
          phase: "OBSERVE_TOOL",
          type: "Tool Observation #2",
          detail: "Backend output: { lessons: [{ id: 'm12_l3', title: 'Thread Synchronization' }, { id: 'm08_l2', title: 'ConcurrentHashMap & Iterators' }] }",
          scratchpad: "Observation: 4 matching lessons and 2 interactive coding labs found.",
          activeTool: null
        },
        {
          phase: "THINK",
          type: "Reasoning Trace #3",
          detail: "I have student progress and targeted lessons. I will now synthesize the 7-day study plan and request save approval.",
          scratchpad: "Thought: Creating structured 7-day plan with daily milestones. Ready to return final response.",
          activeTool: null
        },
        {
          phase: "TERMINATE",
          type: "Goal Completed",
          detail: "Final Answer returned to user with 7-day schedule, targeted lessons, and recommended daily review milestones.",
          scratchpad: "Execution halted. Stop condition met: Terminal text output emitted without further tool calls.",
          activeTool: null
        }
      ]
    },
    debug_python_crash: {
      goal: "Investigate why user application crashes on startup with ZeroDivisionError and suggest verified patch.",
      steps: [
        {
          phase: "OBSERVE_INPUT",
          type: "Goal Received",
          detail: "User prompt: 'My server crashes on startup in app.py with ZeroDivisionError. Inspect and fix.'",
          scratchpad: "Goal registered: Debug traceback and verify patch.",
          activeTool: null
        },
        {
          phase: "THINK",
          type: "Reasoning Trace #1",
          detail: "I should inspect the traceback and read app.py around the crash site.",
          scratchpad: "Selecting read_file(path='app.py', startLine=1, endLine=40).",
          activeTool: null
        },
        {
          phase: "ACT",
          type: "Tool Invocation #1",
          detail: "Calling read_file({ path: 'app.py', startLine: 1, endLine: 40 })",
          scratchpad: "Action: Reading source code from authorized workspace.",
          activeTool: { name: "read_file", args: { path: "app.py", lines: "1-40" } }
        },
        {
          phase: "OBSERVE_TOOL",
          type: "Tool Observation #1",
          detail: "Observation: Line 24: 'batch_size = total_items // active_workers' where active_workers defaults to 0 if config missing.",
          scratchpad: "Bug confirmed: active_workers is 0 when config is uninitialized, causing ZeroDivisionError.",
          activeTool: null
        },
        {
          phase: "THINK",
          type: "Reasoning Trace #2",
          detail: "I will invoke run_test_suite with a proposed guard: 'max(1, active_workers)'.",
          scratchpad: "Selecting run_sandbox_tests(patch='max(1, active_workers)').",
          activeTool: null
        },
        {
          phase: "ACT",
          type: "Tool Invocation #2",
          detail: "Calling run_sandbox_tests({ testCommand: 'pytest tests/test_startup.py' })",
          scratchpad: "Action: Executing test suite in isolated docker sandbox.",
          activeTool: { name: "run_sandbox_tests", args: { command: "pytest" } }
        },
        {
          phase: "OBSERVE_TOOL",
          type: "Tool Observation #2",
          detail: "Observation: 14 passed in 0.42s. All tests passing with guard in place.",
          scratchpad: "Observation: Verified that patch resolves failure without regressions.",
          activeTool: null
        },
        {
          phase: "TERMINATE",
          type: "Goal Completed",
          detail: "Final Answer delivered with root cause analysis, code diff, and passing test confirmation.",
          scratchpad: "Stop condition reached. Task completed with high confidence.",
          activeTool: null
        }
      ]
    }
  };

  const scenario = scenarios[selectedScenario];
  const step = scenario.steps[currentStep];

  const handleNext = () => {
    if (currentStep < scenario.steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Cpu className="text-orange-600" size={20} />
            ReAct Control Loop Execution Simulator
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Step through an autonomous <span className="font-mono text-orange-700 font-bold">Observe → Think → Act → Observe</span> lifecycle with live scratchpad state.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={selectedScenario}
            onChange={(e) => {
              setSelectedScenario(e.target.value);
              setCurrentStep(0);
            }}
            className="rounded-lg border border-stone-300 bg-stone-50 px-3 py-1.5 text-xs font-semibold text-stone-800"
          >
            <option value="java_study_plan">Scenario A: Personalized Study Plan</option>
            <option value="debug_python_crash">Scenario B: Crash Diagnosis & Test Sandbox</option>
          </select>
          <button
            onClick={handleReset}
            title="Reset Loop"
            className="rounded-lg border border-stone-300 p-1.5 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Goal Banner */}
      <div className="mb-5 rounded-xl border border-orange-200 bg-orange-50/50 p-3.5 text-xs">
        <span className="font-bold text-orange-900 uppercase tracking-wider text-[10px] block mb-1">
          Active Objective
        </span>
        <p className="text-stone-800 font-medium">{scenario.goal}</p>
      </div>

      {/* Stepper Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-xs text-stone-500 mb-2 font-mono">
          <span>Step {currentStep + 1} of {scenario.steps.length}</span>
          <span className="font-bold text-stone-800 uppercase">{step.phase}</span>
        </div>
        <div className="flex gap-1.5 h-2">
          {scenario.steps.map((s, idx) => (
            <div
              key={idx}
              className={`flex-1 rounded-full transition-all duration-300 ${
                idx === currentStep
                  ? "bg-orange-600 ring-2 ring-orange-300"
                  : idx < currentStep
                  ? "bg-emerald-500"
                  : "bg-stone-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Active Phase Card */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {/* Execution Inspector */}
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
              <Terminal size={14} className="text-stone-600" />
              Runtime Trace
            </span>
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold font-mono ${
                step.phase === "THINK"
                  ? "bg-purple-100 text-purple-800 border border-purple-200"
                  : step.phase === "ACT"
                  ? "bg-amber-100 text-amber-800 border border-amber-200"
                  : step.phase === "TERMINATE"
                  ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                  : "bg-blue-100 text-blue-800 border border-blue-200"
              }`}
            >
              {step.type}
            </span>
          </div>
          <p className="text-sm font-semibold text-stone-900 mb-3">{step.detail}</p>

          {step.activeTool && (
            <div className="mt-3 rounded-lg border border-amber-300 bg-amber-50/80 p-3 text-xs font-mono">
              <span className="text-amber-900 font-bold block mb-1">Generated Function Payload:</span>
              <pre className="text-stone-800 overflow-x-auto">
                {JSON.stringify(
                  { type: "function", name: step.activeTool.name, parameters: step.activeTool.args },
                  null,
                  2
                )}
              </pre>
            </div>
          )}
        </div>

        {/* Scratchpad Context */}
        <div className="rounded-xl border border-stone-200 bg-stone-900 p-4 text-stone-200 font-mono text-xs">
          <div className="flex items-center justify-between mb-2 border-b border-stone-800 pb-2">
            <span className="text-orange-400 font-bold uppercase text-[10px] tracking-wider">
              Agent Internal Scratchpad
            </span>
            <span className="text-stone-500 text-[10px]">Context Window: 420 tokens</span>
          </div>
          <p className="text-stone-300 leading-relaxed">{step.scratchpad}</p>
          <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-500 flex justify-between">
            <span>Stop Condition: {step.phase === "TERMINATE" ? "TRIGGERED (Done)" : "Active"}</span>
            <span>Loop Budget: {scenario.steps.length - currentStep - 1} left</span>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-between border-t border-stone-200 pt-4">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="rounded-lg border border-stone-300 bg-white px-4 py-2 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Previous Turn
        </button>
        <span className="text-xs text-stone-500">
          Use buttons to simulate next autonomous loop cycle
        </span>
        <button
          onClick={handleNext}
          disabled={currentStep === scenario.steps.length - 1}
          className="rounded-lg bg-orange-600 px-5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-orange-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
        >
          <span>Next Loop Turn</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

/**
 * 2. Function Calling & Schema Validator Sandbox
 * Interactive tool schema inspector with real-time argument validation.
 */
export function FunctionCallingSchemaValidator() {
  const toolNameId = useId();
  const [selectedTool, setSelectedTool] = useState("search_courses");
  const [inputTopic, setInputTopic] = useState("Java Concurrency");
  const [inputDifficulty, setInputDifficulty] = useState("intermediate");
  const [inputLimit, setInputLimit] = useState(5);
  const [inputUserId, setInputUserId] = useState("");

  const schemas = {
    search_courses: {
      description: "Search published courses by topic and difficulty level.",
      schema: {
        type: "object",
        properties: {
          topic: { type: "string", minLength: 2, maxLength: 50 },
          difficulty: { type: "string", enum: ["beginner", "intermediate", "advanced", "all"] },
          limit: { type: "integer", minimum: 1, maximum: 20 }
        },
        required: ["topic", "difficulty"],
        additionalProperties: false
      },
      risk: "read"
    },
    save_study_plan: {
      description: "Save a personalized study schedule. Requires authenticated session.",
      schema: {
        type: "object",
        properties: {
          title: { type: "string", minLength: 3, maxLength: 100 },
          days: { type: "integer", minimum: 1, maximum: 30 }
        },
        required: ["title", "days"],
        additionalProperties: false
      },
      risk: "write"
    }
  };

  const currentSchema = schemas[selectedTool];

  // Validation checks
  const errors = [];
  if (selectedTool === "search_courses") {
    if (inputTopic.trim().length < 2) errors.push("topic must be at least 2 characters long");
    if (!["beginner", "intermediate", "advanced", "all"].includes(inputDifficulty))
      errors.push("difficulty must match enum values");
    if (inputLimit < 1 || inputLimit > 20) errors.push("limit must be between 1 and 20");
  }

  // Security check: did LLM supply userId?
  const hasSecurityLeak = inputUserId.trim().length > 0;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Terminal className="text-orange-600" size={20} />
            Function Calling Schema & Argument Validator
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Test strict JSON Schema validation and verify that sensitive parameters (e.g., <span className="font-mono text-rose-700 font-bold">userId</span>) are never supplied by the model.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor={toolNameId} className="text-xs font-semibold text-stone-600">Tool:</label>
          <select
            id={toolNameId}
            value={selectedTool}
            onChange={(e) => setSelectedTool(e.target.value)}
            className="rounded-lg border border-stone-300 bg-stone-50 px-3 py-1.5 text-xs font-semibold text-stone-800"
          >
            <option value="search_courses">search_courses (Read Tool)</option>
            <option value="save_study_plan">save_study_plan (Write Tool)</option>
          </select>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mb-5">
        {/* Interactive Parameter Form */}
        <div className="space-y-4 rounded-xl border border-stone-200 bg-stone-50 p-4 text-xs">
          <span className="font-bold text-stone-800 uppercase tracking-wider block mb-1">
            Simulate LLM Generated Arguments
          </span>

          {selectedTool === "search_courses" ? (
            <>
              <div>
                <label className="font-semibold text-stone-700 block mb-1">Topic (string, min 2):</label>
                <input
                  type="text"
                  value={inputTopic}
                  onChange={(e) => setInputTopic(e.target.value)}
                  className="w-full rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-stone-800 font-mono text-xs"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Difficulty (enum):</label>
                  <select
                    value={inputDifficulty}
                    onChange={(e) => setInputDifficulty(e.target.value)}
                    className="w-full rounded-lg border border-stone-300 bg-white px-2 py-1.5 text-stone-800 font-mono text-xs"
                  >
                    <option value="beginner">beginner</option>
                    <option value="intermediate">intermediate</option>
                    <option value="advanced">advanced</option>
                    <option value="invalid_level">invalid_level (Test Error)</option>
                  </select>
                </div>
                <div>
                  <label className="font-semibold text-stone-700 block mb-1">Limit (1–20):</label>
                  <input
                    type="number"
                    value={inputLimit}
                    onChange={(e) => setInputLimit(parseInt(e.target.value, 10) || 0)}
                    className="w-full rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-stone-800 font-mono text-xs"
                  />
                </div>
              </div>
            </>
          ) : (
            <div>
              <label className="font-semibold text-stone-700 block mb-1">Plan Title:</label>
              <input
                type="text"
                value={inputTopic}
                onChange={(e) => setInputTopic(e.target.value)}
                placeholder="7-Day Java Revision"
                className="w-full rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-stone-800 font-mono text-xs"
              />
            </div>
          )}

          {/* Adversarial Parameter Injection Test */}
          <div className="pt-2 border-t border-stone-200">
            <label className="font-semibold text-rose-700 flex items-center gap-1.5 mb-1">
              <AlertTriangle size={13} />
              Adversarial Parameter: userId (Must Be Injected by Backend Session, NOT LLM)
            </label>
            <input
              type="text"
              value={inputUserId}
              onChange={(e) => setInputUserId(e.target.value)}
              placeholder="Leave empty for secure behavior; type 'user_admin' to test vulnerability check"
              className="w-full rounded-lg border border-rose-300 bg-rose-50/50 px-3 py-1.5 text-stone-800 font-mono text-xs"
            />
            {hasSecurityLeak && (
              <p className="text-[11px] text-rose-600 mt-1 font-semibold">
                CRITICAL WARNING: The LLM attempted to specify userId directly. In secure systems, backend middleware drops this field and injects req.user.id from JWT.
              </p>
            )}
          </div>
        </div>

        {/* JSON Schema Definition */}
        <div className="rounded-xl border border-stone-200 bg-stone-900 p-4 text-stone-200 font-mono text-xs">
          <div className="flex items-center justify-between mb-2 border-b border-stone-800 pb-2">
            <span className="text-orange-400 font-bold uppercase text-[10px] tracking-wider">
              Tool JSON Schema (Strict Mode)
            </span>
            <span className="text-stone-400 text-[10px]">Risk Tier: {currentSchema.risk.toUpperCase()}</span>
          </div>
          <pre className="text-stone-300 overflow-x-auto max-h-48">
            {JSON.stringify(currentSchema.schema, null, 2)}
          </pre>
        </div>
      </div>

      {/* Validation Result Banner */}
      <div
        className={`rounded-xl p-4 border text-xs flex items-start gap-3 ${
          errors.length === 0 && !hasSecurityLeak
            ? "bg-emerald-50 border-emerald-200 text-emerald-900"
            : "bg-rose-50 border-rose-200 text-rose-900"
        }`}
      >
        {errors.length === 0 && !hasSecurityLeak ? (
          <>
            <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-sm">Schema Validation Passed</span>
              <p className="text-stone-600 text-xs mt-0.5">
                Parameters conform strictly to JSON Schema. The backend execution layer can safely invoke the business function.
              </p>
            </div>
          </>
        ) : (
          <>
            <AlertTriangle size={18} className="text-rose-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block text-sm">Schema Validation Failed</span>
              <ul className="list-disc pl-4 text-xs mt-1 space-y-0.5">
                {errors.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
                {hasSecurityLeak && (
                  <li>Model-supplied userId rejected under least-privilege boundary policy.</li>
                )}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/**
 * 3. Multi-Agent Orchestration & Handoff Visualizer
 * Visualizes Supervisor, Handoff, and Agents-as-Tools topologies.
 */
export function MultiAgentHandoffVisualizer() {
  const [topology, setTopology] = useState("supervisor");
  const [activeAgent, setActiveAgent] = useState("router");

  const agents = [
    { id: "router", name: "Nova Router", role: "Classifies intent & coordinates swarm", color: "border-blue-300 bg-blue-50 text-blue-900" },
    { id: "learning", name: "Learning Agent", role: "Curriculum recommendations & syllabus", color: "border-emerald-300 bg-emerald-50 text-emerald-900" },
    { id: "technical", name: "Technical Agent", role: "RAG docs & architectural explanations", color: "border-purple-300 bg-purple-50 text-purple-900" },
    { id: "coding", name: "Coding Agent", role: "Sandbox execution & test runners", color: "border-amber-300 bg-amber-50 text-amber-900" },
    { id: "interview", name: "Interview Coach", role: "Mock Q&A evaluation & rubrics", color: "border-rose-300 bg-rose-50 text-rose-900" }
  ];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Network className="text-orange-600" size={20} />
            Multi-Agent Orchestration & Handoff Visualizer
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Compare <span className="font-semibold text-stone-800">Supervisor</span>, <span className="font-semibold text-stone-800">Direct Handoff</span>, and <span className="font-semibold text-stone-800">Agents-as-Tools</span> coordination topologies.
          </p>
        </div>
        <div className="flex gap-1.5 bg-stone-100 p-1 rounded-lg text-xs font-semibold">
          <button
            onClick={() => setTopology("supervisor")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              topology === "supervisor" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
            }`}
          >
            Supervisor
          </button>
          <button
            onClick={() => setTopology("handoff")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              topology === "handoff" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
            }`}
          >
            Handoff
          </button>
          <button
            onClick={() => setTopology("agents_as_tools")}
            className={`px-3 py-1.5 rounded-md transition-all ${
              topology === "agents_as_tools" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
            }`}
          >
            Agents as Tools
          </button>
        </div>
      </div>

      {/* Description of Selected Topology */}
      <div className="rounded-xl border border-stone-200 bg-stone-50 p-3.5 mb-5 text-xs text-stone-700">
        {topology === "supervisor" && (
          <p>
            <span className="font-bold text-stone-900">Supervisor Pattern:</span> The central Manager receives all user requests, decides which specialist to invoke, awaits each specialist's output, and retains ultimate control over the final response.
          </p>
        )}
        {topology === "handoff" && (
          <p>
            <span className="font-bold text-stone-900">Handoff Pattern:</span> The Router assesses initial intent and yields conversational ownership directly to a specialist (e.g., Coding Agent). The specialist interacts directly with the user until another handoff is triggered.
          </p>
        )}
        {topology === "agents_as_tools" && (
          <p>
            <span className="font-bold text-stone-900">Agents-as-Tools Pattern:</span> Specialist agents are wrapped as callable functions inside the primary agent's tool registry. The primary agent calls `coding_specialist.run()` like any other tool.
          </p>
        )}
      </div>

      {/* Visual Agent Grid */}
      <div className="grid sm:grid-cols-5 gap-3 mb-6">
        {agents.map((agent) => (
          <button
            key={agent.id}
            onClick={() => setActiveAgent(agent.id)}
            className={`rounded-xl border p-3 text-left transition-all ${agent.color} ${
              activeAgent === agent.id ? "ring-2 ring-stone-900 shadow-md scale-102" : "opacity-80 hover:opacity-100"
            }`}
          >
            <span className="font-bold text-xs block mb-0.5">{agent.name}</span>
            <span className="text-[11px] leading-tight block text-stone-600">{agent.role}</span>
          </button>
        ))}
      </div>

      {/* Interactive Communication Log */}
      <div className="rounded-xl border border-stone-200 bg-stone-900 p-4 text-stone-200 font-mono text-xs">
        <div className="flex items-center justify-between mb-2 border-b border-stone-800 pb-2">
          <span className="text-orange-400 font-bold uppercase text-[10px] tracking-wider">
            Swarm Message Passing Trace ({topology.toUpperCase()})
          </span>
          <span className="text-stone-400 text-[10px]">Active Focus: {activeAgent}</span>
        </div>
        <div className="space-y-1.5 text-stone-300">
          <p className="text-blue-400">[0.00s] User Request: 'Prepare me for a full Java mock interview with coding test'</p>
          <p className="text-stone-400">
            {topology === "supervisor"
              ? "--> [0.04s] Nova Router -> Manager: Task classified as hybrid learning & coding."
              : topology === "handoff"
              ? "--> [0.04s] Nova Router: Transferring conversational session directly to Interview Coach."
              : "--> [0.04s] Primary Agent: Loading tools [interview_agent_tool, coding_agent_tool]."}
          </p>
          <p className="text-emerald-400">
            {topology === "supervisor"
              ? "--> [0.35s] Manager calls Interview Agent: Retrieve 3 concurrency questions."
              : topology === "handoff"
              ? "--> [0.42s] Interview Coach now controls dialogue: 'Welcome to your Java interview.'"
              : "--> [0.38s] Primary Agent invokes coding_agent_tool({ testType: 'concurrency' })."}
          </p>
          <p className="text-amber-400">
            {"--> [0.85s] Coding Agent executes tests in isolated sandbox: 4 unit tests passing."}
          </p>
          <p className="text-purple-400">
            {"--> [1.12s] Results consolidated. Total swarm latency: 1120ms. Total tokens: 840."}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Agent State Machine & Checkpointing Explorer
 * Interactive Finite State Machine (FSM) simulating state transitions and crash recovery.
 */
export function AgentStateMachineCheckpointExplorer() {
  const [status, setStatus] = useState("INITIALIZED");
  const [checkpointVersion, setCheckpointVersion] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [crashed, setCrashed] = useState(false);

  const states = [
    { id: "INITIALIZED", label: "Initialized", desc: "Goal registered, context cleared" },
    { id: "PLANNING", label: "Planning", desc: "Decomposing task into DAG" },
    { id: "EXECUTING", label: "Executing", desc: "Running tools & sub-agents" },
    { id: "WAITING_APPROVAL", label: "Waiting Approval", desc: "Human confirmation required" },
    { id: "COMPLETED", label: "Completed", desc: "Goal satisfied, result ready" }
  ];

  const handleNextStep = () => {
    if (crashed) return;

    if (status === "INITIALIZED") {
      setStatus("PLANNING");
      setCheckpointVersion((v) => v + 1);
    } else if (status === "PLANNING") {
      setStatus("EXECUTING");
      setCompletedSteps(["Plan Generated (DAG)"]);
      setCheckpointVersion((v) => v + 1);
    } else if (status === "EXECUTING") {
      setStatus("WAITING_APPROVAL");
      setCompletedSteps((prev) => [...prev, "Tool: get_student_progress", "Tool: generate_plan"]);
      setCheckpointVersion((v) => v + 1);
    } else if (status === "WAITING_APPROVAL") {
      setStatus("COMPLETED");
      setCompletedSteps((prev) => [...prev, "Human Approval Granted", "Tool: save_study_plan"]);
      setCheckpointVersion((v) => v + 1);
    }
  };

  const handleCrash = () => {
    setCrashed(true);
  };

  const handleRecover = () => {
    setCrashed(false);
  };

  const handleReset = () => {
    setStatus("INITIALIZED");
    setCheckpointVersion(1);
    setCompletedSteps([]);
    setCrashed(false);
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <RotateCw className="text-orange-600" size={20} />
            Agent State Machine & Checkpointing Explorer
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Demonstrating <span className="font-semibold text-stone-800">Finite State Machine (FSM)</span> lifecycle control and durable crash recovery from database checkpoints.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-xs font-mono font-bold text-stone-800">
            Checkpoint v{checkpointVersion}
          </span>
          <button
            onClick={handleReset}
            className="rounded-lg border border-stone-300 p-1.5 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Visual State Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
        {states.map((st) => (
          <div
            key={st.id}
            className={`rounded-xl border p-3 transition-all ${
              status === st.id
                ? "border-orange-500 bg-orange-50 text-orange-900 ring-2 ring-orange-200"
                : "border-stone-200 bg-stone-50/60 text-stone-600"
            }`}
          >
            <span className="font-bold text-xs block mb-0.5">{st.label}</span>
            <span className="text-[10px] text-stone-500 leading-tight block">{st.desc}</span>
          </div>
        ))}
      </div>

      {/* Crash Banner */}
      {crashed && (
        <div className="rounded-xl border border-rose-300 bg-rose-50 p-4 mb-5 text-xs text-rose-900 flex items-start justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="text-rose-600 shrink-0 mt-0.5" size={18} />
            <div>
              <span className="font-bold block text-sm">Server Pod Terminated Abruptly!</span>
              <p className="mt-0.5">
                The container crashed mid-execution. Without checkpoints, all progress is lost. Click below to restore state from Checkpoint v{checkpointVersion}.
              </p>
            </div>
          </div>
          <button
            onClick={handleRecover}
            className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-rose-700 shrink-0"
          >
            Recover State
          </button>
        </div>
      )}

      {/* Database Checkpoint Record */}
      <div className="rounded-xl border border-stone-200 bg-stone-900 p-4 text-stone-200 font-mono text-xs mb-5">
        <div className="flex items-center justify-between mb-2 border-b border-stone-800 pb-2">
          <span className="text-orange-400 font-bold uppercase text-[10px] tracking-wider">
            Serialized PostgreSQL / Redis Checkpoint Record
          </span>
          <span className="text-stone-400 text-[10px]">durable_execution_store</span>
        </div>
        <pre className="text-stone-300 overflow-x-auto">
          {JSON.stringify(
            {
              taskId: "task_java_rev_902",
              status: status,
              checkpointVersion: checkpointVersion,
              crashed: crashed,
              completedSteps: completedSteps,
              pendingAction: status === "WAITING_APPROVAL" ? "User Sign-Off" : "None"
            },
            null,
            2
          )}
        </pre>
      </div>

      {/* Control Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone-200 pt-4">
        <div className="flex items-center gap-2">
          <button
            onClick={handleNextStep}
            disabled={crashed || status === "COMPLETED"}
            className="rounded-lg bg-orange-600 px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-orange-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
          >
            <Play size={14} />
            <span>
              {status === "WAITING_APPROVAL" ? "Approve Sensitive Action" : "Advance Workflow"}
            </span>
          </button>
          <button
            onClick={handleCrash}
            disabled={crashed || status === "COMPLETED"}
            className="rounded-lg border border-rose-300 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-800 hover:bg-rose-100 disabled:opacity-40"
          >
            Simulate Pod Crash
          </button>
        </div>
        <span className="text-xs text-stone-500 font-mono">
          State durability: ACID Checkpointing active
        </span>
      </div>
    </div>
  );
}

/**
 * 5. Model Context Protocol (MCP) Inspector
 * Interactive protocol visualizer demonstrating Host-Client-Server communication.
 */
export function McpProtocolInspector() {
  const [mcpPrimitive, setMcpPrimitive] = useState("tools");
  const [transport, setTransport] = useState("stdio");

  const primitives = {
    tools: {
      title: "MCP Tools",
      desc: "Executable functions exposed by the MCP server that agents can discover and call.",
      samples: [
        { name: "search_courses", desc: "Search course syllabus by keyword", args: "topic: string, level: string" },
        { name: "get_student_progress", desc: "Query student completion stats", args: "userId: string, courseId: string" },
        { name: "run_python_sandbox", desc: "Execute script in docker sandbox", args: "code: string, timeout: int" }
      ]
    },
    resources: {
      title: "MCP Resources",
      desc: "Direct data contexts identified by URIs that models can read into active context.",
      samples: [
        { name: "course://java/syllabus", desc: "Full structured syllabus for Java Track", type: "application/json" },
        { name: "student://101/diagnostic", desc: "Diagnostic performance report", type: "text/markdown" },
        { name: "postgres://schema/progress", desc: "Live database table DDL", type: "text/x-sql" }
      ]
    },
    prompts: {
      title: "MCP Prompts",
      desc: "Reusable, parameterized prompt templates exposed directly by the server.",
      samples: [
        { name: "java_tutor_prompt", desc: "Structured prompt for explaining concurrency", args: "topic, difficulty" },
        { name: "mock_interview_coach", desc: "System prompt for conducting 1-on-1 interview", args: "role, rubric" },
        { name: "code_review_rubric", desc: "Template for evaluating candidate code", args: "language, strictness" }
      ]
    }
  };

  const active = primitives[mcpPrimitive];

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Share2 className="text-orange-600" size={20} />
            Model Context Protocol (MCP) Inspector
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Explore standardized Host-Client-Server interoperability across <span className="font-semibold text-stone-800">Tools</span>, <span className="font-semibold text-stone-800">Resources</span>, and <span className="font-semibold text-stone-800">Prompts</span>.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1 bg-stone-100 p-1 rounded-lg text-xs font-semibold">
            <button
              onClick={() => setMcpPrimitive("tools")}
              className={`px-3 py-1 rounded-md transition-all ${
                mcpPrimitive === "tools" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
              }`}
            >
              Tools
            </button>
            <button
              onClick={() => setMcpPrimitive("resources")}
              className={`px-3 py-1 rounded-md transition-all ${
                mcpPrimitive === "resources" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => setMcpPrimitive("prompts")}
              className={`px-3 py-1 rounded-md transition-all ${
                mcpPrimitive === "prompts" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
              }`}
            >
              Prompts
            </button>
          </div>
        </div>
      </div>

      {/* Protocol Architecture Banner */}
      <div className="grid sm:grid-cols-3 gap-3 mb-5 text-xs text-center font-mono">
        <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
          <span className="font-bold text-blue-900 block mb-0.5">1. AI Host</span>
          <span className="text-stone-600 text-[11px]">Desktop IDE, Claude, PrepSpaces</span>
        </div>
        <div className="rounded-xl border border-stone-200 bg-stone-50 p-3">
          <span className="font-bold text-stone-800 block mb-0.5">2. MCP Client</span>
          <span className="text-stone-600 text-[11px]">JSON-RPC 2.0 Protocol Manager</span>
        </div>
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-3">
          <span className="font-bold text-orange-900 block mb-0.5">3. MCP Server</span>
          <span className="text-stone-600 text-[11px]">FastMCP Educational Service</span>
        </div>
      </div>

      {/* Active Primitive Card */}
      <div className="rounded-xl border border-stone-200 bg-stone-50 p-4 mb-5">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-stone-900 text-sm">{active.title}</span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-stone-600">Transport:</span>
            <select
              value={transport}
              onChange={(e) => setTransport(e.target.value)}
              className="rounded-lg border border-stone-300 bg-white px-2 py-1 text-xs font-mono font-semibold text-stone-800"
            >
              <option value="stdio">stdio (Local Subprocess)</option>
              <option value="sse">Streamable HTTP / SSE</option>
            </select>
          </div>
        </div>
        <p className="text-xs text-stone-600 mb-3">{active.desc}</p>

        <div className="space-y-2">
          {active.samples.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-stone-200 bg-white p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
            >
              <div>
                <span className="font-mono font-bold text-orange-700">{item.name}</span>
                <p className="text-stone-600 text-[11px] mt-0.5">{item.desc}</p>
              </div>
              <span className="rounded-full bg-stone-100 border border-stone-200 px-2.5 py-1 text-[10px] font-mono text-stone-700 shrink-0">
                {item.args || item.type}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Protocol Wire Message Frame */}
      <div className="rounded-xl border border-stone-200 bg-stone-900 p-4 text-stone-200 font-mono text-xs">
        <div className="flex items-center justify-between mb-2 border-b border-stone-800 pb-2">
          <span className="text-orange-400 font-bold uppercase text-[10px] tracking-wider">
            JSON-RPC 2.0 Wire Frame ({transport.toUpperCase()})
          </span>
          <span className="text-stone-400 text-[10px]">MCP v2024-11-05</span>
        </div>
        <pre className="text-stone-300 overflow-x-auto">
          {JSON.stringify(
            {
              jsonrpc: "2.0",
              id: 42,
              method: `${mcpPrimitive}/list`,
              params: transport === "sse" ? { auth: "Bearer eyJhbGciOi..." } : {}
            },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
}
