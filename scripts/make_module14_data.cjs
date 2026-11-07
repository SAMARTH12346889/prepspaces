const fs = require('fs');
const path = require('path');

const overview = {
  moduleNumber: "14",
  title: "Multi-Agent AI Systems & Orchestration",
  recommendedDuration: "24–28 hours",
  difficulty: "Advanced",
  primaryLanguage: "Python & TypeScript / Node.js",
  mainLibraries: "LangGraph, CrewAI, OpenAI Agents SDK, Google ADK, FastMCP, Zod",
  supportingTools: "Agent2Agent (A2A) Protocol, Redis Streams, RabbitMQ, PostgreSQL, OpenTelemetry",
  prerequisites: "Module 13 (AI Agents & Tool-Calling Systems), Module 09 (Prompt Engineering & Structured Outputs)",
  learningApproach: "Distributed Agent Systems + Orchestration Patterns + Inter-Agent Communication + DAG Scheduling + Fault Tolerance + A2A Protocol",
  finalOutcome: "Architect, build, and deploy an enterprise-grade multi-agent AI orchestration platform featuring intelligent routing, DAG-based task execution, inter-agent messaging, blackboard state coordination, conflict resolution, circuit breakers, and A2A interoperability.",
  centralLearningObjective:
    "Students will master the complete multi-agent AI engineering lifecycle: agent specialization contracts, intelligent multi-intent routing, planner–executor architectures, DAG topological task scheduling, orchestration topologies (Sequential, Parallel, Supervisor, Orchestrator-Workers, Hierarchical, Handoffs, Evaluator-Optimizer), inter-agent message schemas, blackboard shared-state coordination, optimistic concurrency control, fault recovery (exponential backoff with jitter, fallback agents, circuit breakers), the Linux Foundation Agent2Agent (A2A) Protocol, multi-agent evaluation metrics, and production enterprise deployment."
};

const roadmapUnits = [
  { id: "01", title: "Foundations of Multi-Agent AI Systems (MAS)", description: "MAS definition, MAS = Agents + Communication + Coordination + Shared Objectives, single-agent vs multi-agent trade-offs, and when to distribute tasks" },
  { id: "02", title: "Agent Roles, Responsibilities & Specialist Contracts", description: "Defining specialist boundaries (Research, Technical, Coding, Planning, Evaluation, Results), input/output JSON schemas, and allowed tool permissions" },
  { id: "03", title: "Intelligent Agent Routing & Multi-Intent Classification", description: "Rule-based, LLM-based, and hybrid routing; handling ambiguous user requests and decomposing compound multi-intent prompts" },
  { id: "04", title: "Inter-Agent Communication & Messaging Protocols", description: "Message schema design (correlation IDs, sender, recipient, payload), direct messaging, broadcast, shared-state, message-bus brokers, and sync vs async communication" },
  { id: "05", title: "Planner–Executor Architecture & DAG Scheduling", description: "Separation of planning from execution, Directed Acyclic Graphs (DAG), topological task sorting, concurrency fan-out, and cycle detection algorithms" },
  { id: "06", title: "Core Multi-Agent Workflow Patterns", description: "In-depth analysis of 8 workflow topologies: Sequential, Parallel, Supervisor, Orchestrator-Workers, Hierarchical, Handoff, Evaluator-Optimizer, and Debate/Voting" },
  { id: "07", title: "Building a Production Task Execution Engine", description: "Step-by-step engineering of an in-process JavaScript orchestrator: registry, scheduler, state manager, executor, and deadlock detection" },
  { id: "08", title: "Coordination, Shared State & Concurrency Control", description: "Centralized vs decentralized coordination, Blackboard architecture, shared state vs shared memory, race conditions, optimistic concurrency control, and single-writer designs" },
  { id: "09", title: "Fault Tolerance, Circuit Breakers & Resilience", description: "Multi-agent failure modes, exponential backoff with random jitter, fallback specialists, Closed/Open/Half-Open circuit breakers, and human escalation gates" },
  { id: "10", title: "The Agent2Agent (A2A) Protocol Standard", description: "Linux Foundation open standard: Agent Cards, capability discovery, standardized tasks, messages, artifacts, streaming, and A2A vs MCP comparison" },
  { id: "11", title: "Conflict Resolution & Multi-Agent Consensus", description: "Data, evaluation, planning, and resource conflicts; authority-based resolution, weighted scoring formulas, critic-reviewer loops, and evidence calibration" },
  { id: "12", title: "Performance Optimization, Evaluation & Production Architecture", description: "Sequential vs parallel execution latency, bounded concurrency, model specialization, context isolation, OpenTelemetry multi-span tracing, and modular monolith to distributed progression" }
];

const curriculumUnits = [
  {
    id: "01",
    unitNumber: "01",
    title: "Foundations of Multi-Agent AI Systems (MAS)",
    tagline: "Moving beyond monolithic single-agent prompts toward coordinated distributed intelligence",
    readTime: "25 min read",
    keyConcepts: ["Multi-Agent Systems", "MAS Formula", "Single vs Multi-Agent", "Specialization Boundaries", "Coordination Overhead"],
    content: [
      {
        heading: "1. The Inherent Limit of Monolithic AI Agents",
        text: "In Module 13, we learned how an individual AI agent perceives, reasons, and calls tools. However, attempting to solve complex enterprise problems—such as conducting a full technical interview, reviewing a codebase, verifying architectural security, and synthesizing a personalized study curriculum—within a single agent leads to severe operational degradation. When an agent is loaded with dozens of tools and hundreds of lines of contradictory instructions, prompt bloat degrades attention, tool confusion skyrockets, and error recovery becomes intractable.",
        bullets: [
          "Monolithic Failure Mode: Attention dilution across broad domains causes tool misfires and hallucinated parameters.",
          "Context Contamination: Irrelevant debug logs from one tool leak into educational advice for another.",
          "Permission Bloat: A single agent granted both harmless read access and dangerous admin delete capabilities violates the principle of least privilege."
        ]
      },
      {
        heading: "2. The Formal Engineering Definition of a Multi-Agent System",
        text: "In artificial intelligence engineering, a Multi-Agent System (MAS) is a distributed or modular software system where multiple specialized agents collaborate, communicate, and coordinate their actions to achieve shared or individual objectives that exceed the capacity of any single agent.",
        formula: "\\text{MAS} = \\langle \\{A_1, A_2, \\dots, A_n\\}, \\mathcal{C}_{comm}, \\mathcal{K}_{coord}, \\mathcal{G}_{shared} \\rangle",
        bullets: [
          "{A_1, ..., A_n}: Set of specialist agents, each equipped with its own role prompt, model tier, and tool allowlist.",
          "C_comm: Standardized communication medium (direct RPC, message bus, shared blackboard, or A2A protocol).",
          "K_coord: Orchestration and scheduling logic (supervisor, DAG scheduler, or handoff state machine).",
          "G_shared: The high-level user goal decomposed into verifiable sub-objectives."
        ]
      },
      {
        heading: "3. Architectural Comparison: Single-Agent vs Multi-Agent Systems",
        text: "Understanding when to introduce multi-agent orchestration is a critical architectural decision:",
        table: {
          headers: ["Architectural Dimension", "Single-Agent Architecture", "Multi-Agent System (MAS)"],
          rows: [
            ["Agent Count", "Exactly 1 generalist agent", "2 or more cooperating specialist agents"],
            ["Role Definition", "Monolithic; handles all user requests", "Narrow, specialized, role-bounded contracts"],
            ["Tool Scope", "Broad tool catalog (often 10–50 tools)", "Minimal tool allowlist per specialist (2–5 tools)"],
            ["Context Management", "Single shared context window", "Isolated context per agent; shared state layer"],
            ["Task Execution", "Strictly sequential control loop", "Parallel concurrent execution across independent branches"],
            ["Failure Blast Radius", "Single error halts entire conversation", "Fault isolated to subtask; replanning possible"],
            ["Coordination Overhead", "Zero inter-agent communication overhead", "Requires scheduling, message serialization, and consensus"]
          ]
        }
      },
      {
        heading: "4. When Should You Deploy a Multi-Agent Architecture?",
        text: "Research from Anthropic and leading systems architects emphasizes starting with a single agent and introducing multi-agent patterns only when clear boundaries exist:",
        bullets: [
          "Distinct Functional Specialization: When tasks require fundamentally incompatible system instructions (e.g., Creative Writing vs Static Code Analysis).",
          "Independent Parallel Subtasks: When subgoals can execute concurrently to drastically reduce user wait times (e.g., auditing Java, Python, and SQL skills simultaneously).",
          "Adversarial or Evaluator-Optimizer Workflows: When quality assurance requires one agent to generate output and an independent critic to audit it against a strict rubric.",
          "Security & Permission Partitioning: When sensitive write operations must be ring-fenced inside high-security agents behind approval gates."
        ]
      }
    ]
  },
  {
    id: "02",
    unitNumber: "02",
    title: "Agent Roles, Responsibilities & Specialist Contracts",
    tagline: "Engineering deterministic interfaces and permission boundaries for autonomous specialist agents",
    readTime: "24 min read",
    keyConcepts: ["Agent Roles", "Specialist Contracts", "Input/Output Schema", "Allowed Tools", "Permission Isolation"],
    content: [
      {
        heading: "1. What Is an Agent Role?",
        text: "An agent role is a formal software contract defining the operational scope, responsibilities, input expectations, output guarantees, and tool permissions of a specialist agent. An agent must never be an undefined generalist; its prompt must explicitly state what it DOES, what it REFUSES, and what it DELEGATES.",
        bullets: [
          "Scope Definition: Explicit domain boundaries (e.g., 'Evaluates Java syntax and algorithmic time complexity. Does not recommend general study plans.').",
          "Input Schema: Strict typed arguments the specialist expects from the orchestrator.",
          "Output Schema: Structured JSON output format returned to the orchestrator.",
          "Tool Allowlist: Minimal set of verified functions the specialist is permitted to invoke."
        ]
      },
      {
        heading: "2. The Six Essential Specialist Roles in Education & Engineering",
        text: "Modern collaborative platforms leverage specialized agents mapped to discrete cognitive tasks:",
        bullets: [
          "1. Research Agent: Discovers documents, web sources, and curriculum topics. Exposes read-only search tools.",
          "2. Technical Specialist: Explains language semantics, runtime internals, and architecture principles. Uses RAG knowledge retrieval.",
          "3. Coding Agent: Analyzes code diffs, generates unit tests, and runs code in isolated sandboxes.",
          "4. Planning Agent: Decomposes abstract goals into structured Directed Acyclic Graphs (DAGs) with explicit dependencies.",
          "5. Evaluation & Reviewer Agent: Audits outputs generated by other agents against objective rubrics and flags discrepancies.",
          "6. Results & Aggregation Agent: Reconciles disparate evaluations, computes weighted rubrics, and formats final executive reports."
        ]
      },
      {
        heading: "3. Defining a Formal Specialist Contract",
        text: "In production, specialist interfaces should be validated using Zod or JSON Schema:",
        codeSnippet: `// Example Specialist Agent Contract
export const CodingSpecialistContract = {
  agentId: "coding_specialist",
  role: "Software Engineering & Code Execution Specialist",
  description: "Analyzes code submissions, executes unit tests in sandboxes, and calculates algorithmic complexity.",
  allowedTools: ["run_sandbox_tests", "analyze_ast", "format_code"],
  inputSchema: {
    type: "object",
    properties: {
      language: { type: "string", enum: ["java", "python", "typescript"] },
      code: { type: "string", minLength: 5 },
      testSuiteId: { type: "string" }
    },
    required: ["language", "code"]
  },
  outputSchema: {
    type: "object",
    properties: {
      status: { type: "string", enum: ["pass", "fail", "syntax_error"] },
      testResults: { type: "array" },
      timeComplexity: { type: "string" },
      spaceComplexity: { type: "string" },
      suggestedFix: { type: "string" }
    },
    required: ["status", "testResults"]
  }
};`
      }
    ]
  },
  {
    id: "03",
    unitNumber: "03",
    title: "Intelligent Agent Routing & Multi-Intent Classification",
    tagline: "Directing user objectives to optimal specialists using deterministic rules, semantic embeddings, and LLM classifiers",
    readTime: "26 min read",
    keyConcepts: ["Agent Routing", "Rule-Based Routing", "LLM Intent Classifier", "Hybrid Routing", "Multi-Intent Decomposition", "Ambiguity Handling"],
    content: [
      {
        heading: "1. The Role of the Intelligent Router",
        text: "In a multi-agent system, requests arrive as unstructured natural language. The router is the gateway component responsible for analyzing the user's intent and dispatching the task to the appropriate specialist. Routing mistakes lead to cascading errors: sending a code debugging problem to a curriculum recommendations agent wastes tokens and produces unhelpful responses.",
        bullets: [
          "Fast-Path Classification: Quickly catching unambiguous keyword commands in sub-5ms without LLM latency.",
          "Semantic Intent Parsing: Disambiguating complex natural language queries using lightweight classifiers.",
          "Multi-Intent Decomposition: Splitting compound requests into distinct subtasks destined for different specialists."
        ]
      },
      {
        heading: "2. The Three Routing Paradigms",
        text: "Modern orchestration systems implement a tiered routing architecture:",
        table: {
          headers: ["Routing Paradigm", "Mechanism", "Latency", "Trade-Offs"],
          rows: [
            ["Deterministic Rule Router", "Regex, keyword matching, command tables", "< 2 ms", "Zero inference cost, 100% predictable; fails on paraphrasing"],
            ["Embedding Semantic Router", "Cosine similarity against intent centroids", "15–40 ms", "Handles synonyms well; requires threshold calibration"],
            ["LLM Intent Classifier", "Structured JSON classification via fast model", "150–400 ms", "Understands deep nuance; higher latency and token cost"]
          ]
        }
      },
      {
        heading: "3. Multi-Intent Decomposition and Ambiguity Resolution",
        text: "Users frequently ask compound questions: 'Review my Java code, test its concurrency, and recommend related lessons.' A naive router will choose only one agent. A production multi-intent router decomposes this prompt into three discrete execution intents: `code_review` (Coding Agent), `concurrency_test` (Coding Agent), and `lesson_recommendation` (Learning Agent). If the prompt is genuinely ambiguous ('Check my performance'), the router triggers a single clarification turn rather than guessing.",
        codeSnippet: `// Multi-Intent Classification Output Envelope
{
  "taskId": "task_compound_102",
  "isCompound": true,
  "intents": [
    { "intent": "evaluate_code", "agent": "codingAgent", "priority": 1 },
    { "intent": "explain_concurrency", "agent": "technicalAgent", "priority": 2 },
    { "intent": "suggest_curriculum", "agent": "learningAgent", "priority": 3 }
  ],
  "confidenceScore": 0.94
}`
      }
    ]
  },
  {
    id: "04",
    unitNumber: "04",
    title: "Inter-Agent Communication & Messaging Protocols",
    tagline: "Engineering robust message envelopes, correlation IDs, and asynchronous delivery channels across agent swarms",
    readTime: "26 min read",
    keyConcepts: ["Message Envelope", "Correlation ID", "Direct Messaging", "Broadcast", "Shared State", "Message Broker"],
    content: [
      {
        heading: "1. The Anatomy of an Inter-Agent Message",
        text: "In production, agents never exchange raw, unformatted text strings. Communication must occur through standardized JSON envelopes containing full provenance, correlation metadata, and strict payload schemas.",
        bullets: [
          "messageId: Cryptographic UUID ensuring individual message idempotency and deduplication.",
          "taskId: The global transaction identifier linking this subtask to the top-level user goal.",
          "correlationId: Tracing ID linking request-response message pairs across multi-hop agent handoffs.",
          "sender & recipient: Verified service identities ensuring access control.",
          "messageType: Semantic message classification (`TASK_REQUEST`, `TASK_RESULT`, `STATUS_UPDATE`, `ERROR_REPORT`).",
          "payload: Structured data conforming to the recipient specialist's contract."
        ]
      },
      {
        heading: "2. The Four Communication Topologies",
        text: "Agents communicate across four distinct topological configurations:",
        bullets: [
          "A. Direct RPC / Peer-to-Peer: Agent A invokes Agent B directly via synchronous HTTP/gRPC. Ideal for tightly-coupled pairs.",
          "B. Broadcast Messaging: Orchestrator broadcasts a status change (e.g., 'Candidate completed test') to all subscribed specialists.",
          "C. Shared-State / Blackboard: Specialists do not talk directly; they read from and write to a centralized shared database.",
          "D. Message Broker (Pub/Sub): Agents communicate asynchronously via queues (Redis Streams, RabbitMQ, Kafka) ensuring high throughput."
        ]
      },
      {
        heading: "3. Synchronous vs Asynchronous Communication Trade-Offs",
        text: "Synchronous calls (`await agent.run()`) block the calling thread, making error handling straightforward but compounding latency. Asynchronous message queuing decouples agents, allowing long-running operations (like executing 50 unit tests or running full-suite RAG pipelines) to complete without holding open HTTP connections."
      }
    ]
  },
  {
    id: "05",
    unitNumber: "05",
    title: "Planner–Executor Architecture & DAG Scheduling",
    tagline: "Translating abstract user goals into Directed Acyclic Graphs with topological dependency resolution",
    readTime: "28 min read",
    keyConcepts: ["Planner-Executor", "DAG Scheduling", "Topological Sorting", "Dependency Graph", "Cycle Detection"],
    content: [
      {
        heading: "1. The Separation of Planning and Execution",
        text: "One of the most foundational patterns in multi-agent engineering is the Planner–Executor architecture. The Planner is an analytical reasoning component that analyzes the user's objective and generates a structured plan. The Executor is a deterministic execution engine that coordinates agent invocations, enforces dependencies, and handles runtime failures.",
        bullets: [
          "Planner Responsibility: Decides WHAT should happen and in what logical order.",
          "Executor Responsibility: Decides HOW and WHEN tasks execute, managing timeouts, retries, and concurrency limits."
        ]
      },
      {
        heading: "2. Directed Acyclic Graphs (DAG) in Multi-Agent Systems",
        text: "A DAG is a mathematical graph of directed vertices (tasks) and edges (dependencies) with no closed loops. If Task D depends on Task B and Task C, Task D cannot enter the ready queue until both B and C report `completed` status.",
        codeSnippet: `// Example Multi-Agent Plan DAG
{
  "planId": "plan_interview_eval_01",
  "tasks": [
    { "id": "t_technical", "agent": "technicalAgent", "dependsOn": [] },
    { "id": "t_coding", "agent": "codingAgent", "dependsOn": [] },
    { "id": "t_communication", "agent": "communicationAgent", "dependsOn": [] },
    { "id": "t_learning", "agent": "learningAgent", "dependsOn": ["t_technical", "t_coding"] },
    { "id": "t_results", "agent": "resultsAgent", "dependsOn": ["t_learning", "t_communication"] }
  ]
}`
      },
      {
        heading: "3. Topological Sorting and Cycle Detection",
        text: "Before executing any plan, the scheduler runs Kahn's Algorithm or Depth-First Search (DFS) to detect circular dependency deadlocks (e.g., A -> B -> C -> A). If a cycle is detected, the plan is rejected immediately before wasting cloud tokens. Ready tasks (in-degree 0) are dispatched concurrently to the thread pool."
      }
    ]
  },
  {
    id: "06",
    unitNumber: "06",
    title: "Core Multi-Agent Workflow Patterns",
    tagline: "A comprehensive comparative taxonomy of eight production multi-agent orchestration topologies",
    readTime: "30 min read",
    keyConcepts: ["Sequential", "Parallel", "Supervisor", "Orchestrator-Workers", "Hierarchical", "Handoff", "Evaluator-Optimizer", "Debate/Voting"],
    content: [
      {
        heading: "1. The Production Orchestration Pattern Catalog",
        text: "Modern agent frameworks (LangGraph, CrewAI, OpenAI Agents SDK, Google ADK) implement eight primary workflow patterns. Selecting the appropriate pattern is the single most important factor determining system cost, latency, and reliability.",
        table: {
          headers: ["Pattern Name", "Topology Flow", "Primary Advantage", "Primary Risk / Trade-Off"],
          rows: [
            ["Sequential Workflow", "Linear pipeline: A -> B -> C", "Deterministic, easy to debug", "Slowest latency; early failures halt pipeline"],
            ["Parallel Workflow", "Concurrent fan-out -> Aggregator", "Fastest wall-clock latency", "High peak token cost; requires result reconciliation"],
            ["Supervisor Pattern", "Central manager coordinates workers", "Global oversight and validation", "Manager can become a bottleneck"],
            ["Orchestrator-Workers", "Dynamic subtask creation on the fly", "Handles unpredictable problem scope", "Requires dynamic DAG generation"],
            ["Hierarchical Workflow", "Tree of intermediate managers", "Scales to multi-department enterprises", "Complex debugging and context propagation"],
            ["Agent Handoff", "Conversational ownership transfers", "Specialist owns dialogue branch", "Risk of circular ping-pong delegation loops"],
            ["Evaluator-Optimizer", "Generator <-> Critic feedback loop", "Iteratively guarantees high quality", "Risk of infinite critique cycles without max iteration caps"],
            ["Debate / Voting", "Multiple agents evaluate same topic", "Surfaces dissenting edge cases", "Token expensive; agreement does not guarantee truth"]
          ]
        }
      },
      {
        heading: "2. The Evaluator-Optimizer Pattern in Code & Content Generation",
        text: "In high-stakes code generation, a single LLM pass often contains subtle syntax bugs or off-by-one errors. The Evaluator-Optimizer workflow pairs a Generator Agent with a Critic Agent. The Generator creates a draft; the Critic runs static analysis or unit tests; if tests fail, the Critic injects exact traceback observations into the Generator for a second revision loop."
      },
      {
        heading: "3. Guarding Against Infinite Ping-Pong Handoffs",
        text: "In Handoff workflows, Agent A might hand off to Agent B, which hands off to Agent C, which hands back to Agent A. Production systems enforce a strict `maxHandoffDepth` (typically 5) in the message header. If exceeded, the orchestrator forcibly intercepts the session and halts."
      }
    ]
  },
  {
    id: "07",
    unitNumber: "07",
    title: "Building a Production Task Execution Engine",
    tagline: "Engineering an in-process, non-blocking multi-agent orchestrator in JavaScript / TypeScript",
    readTime: "28 min read",
    keyConcepts: ["Agent Registry", "Task Scheduler", "State Manager", "Concurrent Executor", "Deadlock Detection"],
    content: [
      {
        heading: "1. Architectural Blueprints of a Custom Orchestrator",
        text: "While commercial frameworks provide valuable abstractions, senior AI engineers must understand how to construct a deterministic orchestration engine from first principles. The engine consists of five cooperating modules: Agent Registry, Planner, State Manager, Dependency Scheduler, and Task Executor.",
        bullets: [
          "Agent Registry: In-memory or Redis map storing specialist functions and schemas.",
          "State Manager: Atomic state transition tracking (`pending` -> `running` -> `completed` / `failed`).",
          "Scheduler: Evaluates in-degree dependencies and emits tasks whose prerequisites are 100% completed.",
          "Executor: Wraps agent calls with Promise.allSettled, timeouts, and error traps."
        ]
      },
      {
        heading: "2. The Core Scheduling Algorithm",
        text: "The execution engine loops until all tasks reach terminal status, checking for deadlocks on every cycle:",
        codeSnippet: `// Core Scheduling Loop with Deadlock Guard
export async function runOrchestrator(input) {
  const plan = createPlan(input);
  const state = initializeState(plan);
  const maxIterations = 20;
  let iterations = 0;

  while (Object.values(state.tasks).some(t => t.status === "pending" || t.status === "running")) {
    iterations++;
    if (iterations > maxIterations) {
      throw new Error("Maximum orchestration iterations exceeded; probable deadlock.");
    }

    const readyTasks = getReadyTasks(plan, state);
    if (readyTasks.length === 0) {
      const hasFailed = Object.values(state.tasks).some(t => t.status === "failed");
      if (hasFailed) break; // Terminate cleanly on dependency failure
      throw new Error("Deadlock detected: pending tasks remain but no dependencies are satisfied.");
    }

    // Concurrent execution of all ready tasks
    await Promise.all(readyTasks.map(task => executeTask(task, plan, state)));
  }

  state.status = Object.values(state.tasks).some(t => t.status === "failed") ? "failed" : "completed";
  return state;
}`
      }
    ]
  },
  {
    id: "08",
    unitNumber: "08",
    title: "Coordination, Shared State & Concurrency Control",
    tagline: "Preventing race conditions, state clobbering, and memory contamination in parallel agent swarms",
    readTime: "26 min read",
    keyConcepts: ["Blackboard Architecture", "Race Conditions", "Optimistic Concurrency Control", "Single-Writer Principle", "Shared State vs Shared Memory"],
    content: [
      {
        heading: "1. The Blackboard Architecture for Multi-Agent Swarms",
        text: "The Blackboard pattern, originally developed for speech recognition systems, provides a central, shared repository of operational information that all participating specialist agents can read and write. Rather than passing giant context payloads back and forth in message arguments, agents post intermediate findings to the blackboard and react when new data appears.",
        bullets: [
          "Knowledge Sources (Agents): Independent specialists that read inputs and post specialized findings.",
          "Blackboard Store: Central state database holding active hypotheses, partial plans, and validated facts.",
          "Control Component: Regulates write access, versioning, and state change notifications."
        ]
      },
      {
        heading: "2. Concurrency Hazards: Race Conditions & State Overwrites",
        text: "When two agents execute in parallel and attempt to write to the same student record or study plan simultaneously, a classic race condition occurs: Agent B reads Version 1, Agent A writes Version 2, and Agent B subsequently overwrites Version 2 with its own update, erasing Agent A's work.",
        bullets: [
          "Optimistic Concurrency Control (OCC): Every record carries a version counter. Writes fail if `record.version !== expectedVersion`.",
          "Single-Writer Architecture: Designating a single aggregator agent (e.g., Results Agent) as the ONLY entity authorized to perform writes, while specialists submit read-only candidate proposals.",
          "Idempotency Keys: Enforcing deterministic UUID keys derived from `taskId + subtaskId` to prevent duplicate writes during network retries."
        ]
      }
    ]
  },
  {
    id: "09",
    unitNumber: "09",
    title: "Fault Tolerance, Circuit Breakers & Resilience",
    tagline: "Engineering self-healing multi-agent systems that survive model timeouts, corrupted schemas, and upstream outages",
    readTime: "26 min read",
    keyConcepts: ["Fault Tolerance", "Exponential Backoff", "Random Jitter", "Fallback Agents", "Circuit Breaker Pattern", "Human Escalation"],
    content: [
      {
        heading: "1. Why Distributed Multi-Agent Systems Fail",
        text: "In a single LLM call, failures are rare. In a multi-agent system executing 12 tool calls across 4 specialist models, the compound probability of failure rises dramatically. Systems fail due to model rate limits (HTTP 429), malformed JSON payloads, external API timeouts, and unreachable specialists.",
        bullets: [
          "Transient Failures: Temporary network glitches or rate limits that resolve with retries.",
          "Permanent Failures: Broken schemas, syntax errors, or invalid permissions that fail deterministically on retry.",
          "Cascading Failures: When a single specialist failure brings down the entire pipeline."
        ]
      },
      {
        heading: "2. Exponential Backoff with Jitter Formula",
        text: "Retrying immediately when a model API is throttled creates a 'thundering herd' problem that prolongs the outage. Production orchestrators apply truncated exponential backoff with randomized decorrelated jitter:",
        formula: "D_n = \\min\\left(D_{\\max},\\, D_0 \\cdot 2^n\\right) + \\text{Uniform}(0, J)",
        bullets: [
          "D_0: Initial base delay (e.g., 500 ms).",
          "D_max: Maximum backoff ceiling (e.g., 8,000 ms).",
          "n: Retry attempt counter (0, 1, 2, ...).",
          "J: Random jitter range preventing synchronized retry spikes across worker nodes."
        ]
      },
      {
        heading: "3. The Circuit Breaker Pattern in Agent Systems",
        text: "To protect backend resources from failing model endpoints, orchestrators wrap agent invocations in a three-state circuit breaker: `CLOSED` (normal operation, requests pass through), `OPEN` (tripped after consecutive failures, immediately rejects calls without waiting for timeouts), and `HALF-OPEN` (probes the endpoint with a test call after a cooldown period)."
      }
    ]
  },
  {
    id: "10",
    unitNumber: "10",
    title: "The Agent2Agent (A2A) Protocol Standard",
    tagline: "The open Linux Foundation standard for autonomous agent discovery, collaboration, and interoperability",
    readTime: "27 min read",
    keyConcepts: ["Agent2Agent (A2A)", "Linux Foundation", "Agent Card", "A2A vs MCP", "Interoperability", "Task Lifecycle"],
    content: [
      {
        heading: "1. The Cross-Platform Integration Problem",
        text: "Internal message formats work when all agents live in the same codebase. But what happens when an organization wants a Python-based LangGraph research agent to delegate a coding task to an external TypeScript agent hosted on another cloud? Without an open standard, every team must write custom point-to-point API connectors. The Agent2Agent (A2A) protocol, originated by Google and stewarded by the Linux Foundation, solves this problem.",
        bullets: [
          "Open Standard: Vendor-neutral protocol for autonomous agent interoperability.",
          "Universal Discovery: Agents publish their capabilities via standardized Agent Cards.",
          "Standardized Task Lifecycle: Managing asynchronous work units across security domains."
        ]
      },
      {
        heading: "2. Critical Distinction: Model Context Protocol (MCP) vs Agent2Agent (A2A)",
        text: "Engineers must never confuse MCP and A2A. They operate at completely different layers of the agentic stack:",
        table: {
          headers: ["Dimension", "Model Context Protocol (MCP)", "Agent2Agent (A2A) Protocol"],
          rows: [
            ["Primary Purpose", "Connects an AI model to tools, resources, and context", "Connects independent autonomous agents to each other"],
            ["Architectural Entity", "Host / Client <-> MCP Server", "Agent Client <-> Remote Agent Service"],
            ["Core Capabilities", "Tools, Resources, Prompts", "Tasks, Messages, Artifacts, Agent Cards"],
            ["Typical Use Case", "Querying a Postgres database or local file system", "Delegating an entire coding task to an external specialized agent"],
            ["Stewardship", "Anthropic (Open Specification)", "Linux Foundation / Google (Open Standard)"]
          ]
        }
      },
      {
        heading: "3. The Anatomy of an A2A Agent Card",
        text: "An Agent Card is a machine-readable JSON document published at a well-known URL (e.g., `/.well-known/agent.json`) describing the agent's identity, public keys, streaming capabilities, and exposed skills.",
        codeSnippet: `// Example A2A Agent Card
{
  "name": "PrepSpaces Java Evaluation Specialist",
  "description": "Evaluates Java technical concepts, concurrency, and algorithms.",
  "url": "https://api.prepspaces.com/a2a/v1/agents/java-eval",
  "capabilities": {
    "streaming": true,
    "pushNotifications": false
  },
  "skills": [
    {
      "id": "evaluate_concurrency",
      "name": "Java Concurrency Audit",
      "description": "Analyzes thread safety and lock contention in Java code."
    }
  ]
}`
      }
    ]
  },
  {
    id: "11",
    unitNumber: "11",
    title: "Conflict Resolution & Multi-Agent Consensus",
    tagline: "Resolving contradictions, scoring discrepancies, and hallucinations when specialist agents disagree",
    readTime: "25 min read",
    keyConcepts: ["Conflict Resolution", "Discrepancy Detection", "Weighted Aggregation", "Critic-Reviewer Loop", "Human Arbitration"],
    content: [
      {
        heading: "1. The Four Types of Multi-Agent Conflicts",
        text: "When multiple agents independently analyze complex data, disagreements are inevitable. Orchestrators must distinguish between harmless variance and dangerous contradictions:",
        bullets: [
          "Data Conflicts: Agent A reports user completed 5 lessons; Agent B reports 7. (Caused by stale database reads; resolved via authoritative timestamps).",
          "Evaluation Conflicts: Technical Agent rates an answer 85/100; Coding Agent rates it 55/100. (Caused by different rubric dimensions).",
          "Planning Conflicts: Agent A wants to teach Collections first; Agent B wants to teach Concurrency first. (Resolved via prerequisite DAG ordering).",
          "Resource Conflicts: Two agents attempt to acquire the same interview slot simultaneously. (Resolved via database locks or single-writer patterns)."
        ]
      },
      {
        heading: "2. Weighted Scoring and Discrepancy Gating",
        text: "For multi-dimensional assessments, final scores should NEVER be determined by averaging conflicting numbers arbitrarily. The system enforces a mathematically verified weighted rubric:",
        formula: "\\text{FinalScore} = w_{\\text{tech}} \\cdot S_{\\text{tech}} + w_{\\text{code}} \\cdot S_{\\text{code}} + w_{\\text{comm}} \\cdot S_{\\text{comm}}",
        bullets: [
          "Weight Calibration: Predefined coefficients satisfying sum(w_i) = 1.0 (e.g., 0.40 Technical + 0.35 Coding + 0.25 Communication).",
          "Discrepancy Gating: If |S_tech - S_code| > 25 points, an automated Reviewer Agent is invoked to inspect supporting rubric evidence.",
          "Human Arbitration: If the disagreement exceeds 40 points on certification-level tasks, execution pauses for human instructor review."
        ]
      }
    ]
  },
  {
    id: "12",
    unitNumber: "12",
    title: "Performance Optimization, Evaluation & Production Architecture",
    tagline: "Benchmarking swarm utilization, minimizing latency overhead, and tracing multi-agent distributed spans",
    readTime: "26 min read",
    keyConcepts: ["Latency Optimization", "Bounded Concurrency", "Context Isolation", "Task Success Rate", "OpenTelemetry Spans"],
    content: [
      {
        heading: "1. The Mathematics of Multi-Agent Latency",
        text: "Parallelizing independent subtasks produces massive latency savings. If Technical analysis takes 5s, Coding analysis takes 8s, and Communication takes 6s:",
        formula: "T_{\\text{sequential}} = \\sum_{i=1}^n t_i = 5 + 8 + 6 = 19\\text{s} \\quad \\text{vs} \\quad T_{\\text{parallel}} = \\max_{1 \\le i \\le n}(t_i) + t_{\\text{agg}} = 8 + 0.5 = 8.5\\text{s}",
        bullets: [
          "Latency Reduction: Parallel execution cuts wall-clock time by over 55%.",
          "Bounded Concurrency: Never launch unbounded parallel tasks; enforce worker pool limits (e.g., max 5 concurrent LLM calls) to prevent rate limit throttling."
        ]
      },
      {
        heading: "2. Production Observability with OpenTelemetry Spans",
        text: "Debugging multi-agent systems is impossible with simple print statements. Every workflow must emit distributed OpenTelemetry traces with a root `traceId`, parent orchestrator spans, child specialist spans, tool invocation events, and token expenditure tags.",
        codeSnippet: `// OpenTelemetry Distributed Multi-Agent Trace
{
  "traceId": "tr_mas_8902fa",
  "rootSpan": {
    "name": "nova_orchestrator.execute_plan",
    "durationMs": 8420,
    "childSpans": [
      { "name": "router.classify_intent", "durationMs": 45 },
      { "name": "planner.generate_dag", "durationMs": 520 },
      { "name": "parallel_batch_1", "durationMs": 6800, "workers": ["technicalAgent", "codingAgent", "commAgent"] },
      { "name": "resultsAgent.aggregate", "durationMs": 810 }
    ],
    "totalTokens": 2450,
    "estimatedCost": "$0.0074"
  }
}`
      }
    ]
  }
];

const practicalLabs = [
  {
    id: "lab-01",
    title: "Lab 1: Develop an In-Memory Agent Registry & Discovery System",
    difficulty: "Beginner–Intermediate",
    duration: "90 min",
    objective: "Build a modular agent registry that validates specialist contracts and handles dynamic lookup.",
    description: "Implement contract schemas, register five specialist agents (Technical, Coding, Communication, Learning, Results), enforce input/output validation, and handle unavailable agent errors.",
    deliverables: ["agentRegistry.js with contract validation", "specialistContracts.js using Zod", "Unit test suite verifying lookup and failure modes"]
  },
  {
    id: "lab-02",
    title: "Lab 2: Implement a Multi-Intent Agent Router with Fallbacks",
    difficulty: "Intermediate",
    duration: "120 min",
    objective: "Build an intelligent routing layer combining fast regex rules with an LLM intent classifier.",
    description: "Create a dual-tier router that intercepts unambiguous keywords in sub-2ms, uses structured JSON generation for natural language requests, handles compound multi-intents, and asks for clarification on ambiguous inputs.",
    deliverables: ["router.js with regex fast-path and LLM fallback", "test_routing_suite.js evaluating 50 prompt variants", "Disambiguation prompt template"]
  },
  {
    id: "lab-03",
    title: "Lab 3: Build a Planner–Executor Engine with DAG Scheduling",
    difficulty: "Advanced",
    duration: "150 min",
    objective: "Develop an execution engine that validates Directed Acyclic Graphs and executes ready tasks concurrently.",
    description: "Implement Kahn's algorithm for topological sorting, detect circular dependency cycles, construct an async thread scheduler, and dispatch independent tasks concurrently using Promise.allSettled.",
    deliverables: ["planner.js producing validated DAGs", "dagScheduler.js with cycle detection", "executor.js with parallel dispatch"]
  },
  {
    id: "lab-04",
    title: "Lab 4: Inter-Agent Messaging with Correlation IDs & Message Bus",
    difficulty: "Advanced",
    duration: "180 min",
    objective: "Implement a robust communication layer supporting direct messaging and shared blackboard state.",
    description: "Design structured JSON message envelopes with cryptographic message IDs, task IDs, and correlation IDs. Implement an in-memory or Redis Streams message bus and handle message deduplication.",
    deliverables: ["messageEnvelope.js schema", "messageBus.js with publish/subscribe", "deduplicationManager.js preventing repeated processing"]
  },
  {
    id: "lab-05",
    title: "Lab 5: Build Core Multi-Agent Orchestration Workflows",
    difficulty: "Advanced",
    duration: "180 min",
    objective: "Construct and compare Sequential, Parallel, Supervisor, and Evaluator-Optimizer workflows on the same evaluation dataset.",
    description: "Implement the four primary workflow topologies in Node.js/Python, execute identical student assessment benchmarks, and measure differences in accuracy, token spend, and wall-clock latency.",
    deliverables: ["workflowComparisons.js implementing all 4 patterns", "benchmark_runner.js logging latency & tokens", "Comprehensive comparative analysis report"]
  },
  {
    id: "lab-06",
    title: "Lab 6: Implement Agent2Agent (A2A) Protocol Interoperability",
    difficulty: "Expert",
    duration: "210 min",
    objective: "Connect two independent agent services using the Linux Foundation A2A specification.",
    description: "Expose an A2A Agent Card at /.well-known/agent.json for a remote evaluation specialist, build an A2A client that discovers skills, submits tasks, tracks state transitions, and consumes returned artifacts.",
    deliverables: ["agent_card.json conforming to A2A 1.0", "a2a_server.js exposing skill endpoints", "a2a_client.js discovering and delegating tasks"]
  },
  {
    id: "lab-07",
    title: "Lab 7: Production Fault Tolerance, Circuit Breakers & Tracing",
    difficulty: "Expert",
    duration: "210 min",
    objective: "Build a self-healing multi-agent system that survives timeouts, corrupted payloads, and rate limits.",
    description: "Implement truncated exponential backoff with randomized jitter, build a 3-state Circuit Breaker (Closed/Open/Half-Open), integrate OpenTelemetry multi-span tracing, and test crash recovery.",
    deliverables: ["circuitBreaker.js with state machine", "backoffRetry.js with jitter formula", "telemetryTracer.js generating OpenTelemetry spans"]
  }
];

const capstoneProject = {
  title: "Enterprise Multi-Agent Orchestration Platform & AI Examination Swarm",
  type: "Enterprise Multi-Agent Platform",
  estimatedHours: "26–32 hours",
  overview:
    "Architect, build, and deploy a production-grade multi-agent orchestration platform that ingests complex student evaluation objectives, performs multi-intent routing, schedules Directed Acyclic Graph (DAG) task execution across specialist swarms (Technical, Coding, Communication, and Curriculum specialists), coordinates shared blackboard state, applies weighted conflict resolution, enforces circuit breakers, and exposes external interoperability via the Agent2Agent (A2A) protocol.",
  architectureLayers: [
    "Layer 1: Gateway & Multi-Intent Router — Ingests user prompts, executes sub-2ms deterministic regex fast-paths, and runs LLM fallback classifiers for compound multi-intent prompts.",
    "Layer 2: Planner & DAG Scheduling Engine — Decomposes high-level objectives into dependency graphs, runs Kahn's algorithm for topological sorting, detects cycles, and manages concurrency queues.",
    "Layer 3: Specialist Agent Swarm — Technical Specialist (RAG syllabus retrieval), Coding Specialist (docker test runner), Communication Specialist (speech transcript evaluation), and Learning Specialist (curriculum synthesis).",
    "Layer 4: Blackboard & Coordination Store — Shared transactional state store with Optimistic Concurrency Control (OCC) and single-writer enforcement for final aggregations.",
    "Layer 5: Fault Tolerance & Circuit Breakers — Exponential backoff with random jitter, Closed/Open/Half-Open circuit breakers for model endpoints, and human escalation checkpoints.",
    "Layer 6: Open Standards & Observability — Agent2Agent (A2A) protocol interface with Agent Cards, and full OpenTelemetry distributed span tracing capturing duration, latency, and token cost."
  ],
  functionalRequirements: [
    "FR-1: Multi-Intent Routing — Classifies single and compound intents with >95% accuracy and disambiguates vague user requests.",
    "FR-2: Validated DAG Execution — Generates structured execution plans, validates dependency acyclicity, and executes ready tasks in parallel.",
    "FR-3: Specialist Contract Enforcement — All specialists implement strict input/output schemas with minimal tool permissions.",
    "FR-4: Shared Blackboard State — Synchronous and asynchronous communication managed with correlation IDs and OCC version tags.",
    "FR-5: Mathematical Conflict Resolution — Resolves score discrepancies using weighted aggregation rubrics and discrepancy triggers.",
    "FR-6: Fault Tolerance & Circuit Breakers — Recovers from simulated 5-second API timeouts and isolates failing specialists without crashing the swarm.",
    "FR-7: A2A Protocol Interoperability — Publishes an Agent Card and connects remote agents via standardized A2A task lifecycles.",
    "FR-8: Distributed Telemetry — Emits structured traces capturing parent orchestrator spans, child specialist spans, and token expenditures."
  ],
  evaluationRubric: [
    { criterion: "System Architecture & Agent Role Contracts", marks: 15, details: "Clean modular separation of orchestrator, router, and specialists with strict JSON schemas and tool allowlists" },
    { criterion: "Intelligent Routing & Multi-Intent Decomposition", marks: 15, details: "Fast-path regex and LLM fallback routing with robust compound prompt splitting and ambiguity handling" },
    { criterion: "Planner–Executor & DAG Scheduling", marks: 15, details: "Mathematical DAG dependency verification, cycle detection, and concurrent execution of independent task branches" },
    { criterion: "Inter-Agent Messaging & Blackboard Coordination", marks: 15, details: "Structured message envelopes with correlation IDs, single-writer state coordination, and optimistic concurrency" },
    { criterion: "Fault Tolerance, Circuit Breakers & Retries", marks: 15, details: "Exponential backoff with jitter, 3-state circuit breaker, fallback specialist routing, and human escalation" },
    { criterion: "A2A Protocol & Standardized Interoperability", marks: 15, details: "Valid Agent Card, skill discovery, task submission, and artifact exchange conforming to A2A 1.0" },
    { criterion: "Telemetry, Tracing & Documentation", marks: 10, details: "OpenTelemetry span instrumentation, comprehensive unit tests, and professional system design architecture documentation" }
  ]
};

const codingAssignments = [
  {
    id: "assign-01",
    title: "Specialist Contract Schema Validator",
    difficulty: "Easy",
    description: "Write a JavaScript/TypeScript module using Zod that strictly validates an agent's input and output contracts, rejecting unauthorized fields.",
    starterStub: `import { z } from 'zod';\n\nexport const AgentContractSchema = z.object({\n  // Define schema\n});\n\nexport function validateContract(data) {\n  // Implement validation\n}`,
    testCriteria: "Rejects contracts with missing allowedTools or malformed role descriptions."
  },
  {
    id: "assign-02",
    title: "Regex Fast-Path Intent Router",
    difficulty: "Easy",
    description: "Build a deterministic regex router function that maps 20 common student commands to technicalAgent, codingAgent, or learningAgent in sub-2ms.",
    starterStub: `export function routeCommandFast(query: string): string | null {\n  // Implement regex pattern matching\n}`,
    testCriteria: "Correctly routes 'debug python error' to codingAgent in < 1ms."
  },
  {
    id: "assign-03",
    title: "Kahn's Algorithm Cycle Detector for Plans",
    difficulty: "Medium",
    description: "Implement a DAG plan dependency validator in Python or TypeScript that detects circular dependencies using Kahn's topological sort.",
    starterStub: `export function hasDependencyCycle(tasks: Array<{ id: string, dependsOn: string[] }>): boolean {\n  // Return true if cycle detected, false if valid DAG\n}`,
    testCriteria: "Detects cycles in tasks [A -> B, B -> C, C -> A] and returns true."
  },
  {
    id: "assign-04",
    title: "In-Memory Asynchronous Message Bus",
    difficulty: "Medium",
    description: "Create an async EventEmitter-based message bus in Node.js that routes structured messages between agents with correlation ID tracking.",
    starterStub: `export class AgentMessageBus {\n  // Implement publish, subscribe, and correlation tracking\n}`,
    testCriteria: "Delivers messages to subscribed agents and preserves correlationId."
  },
  {
    id: "assign-05",
    title: "Concurrent Task Executor with Promise.allSettled",
    difficulty: "Medium",
    description: "Build an async task runner that executes an array of ready tasks concurrently with individual 5-second timeouts and captures all results.",
    starterStub: `export async function executeConcurrentTasks(tasks, context) {\n  // Implement concurrent execution with timeouts\n}`,
    testCriteria: "Executes 3 independent tasks concurrently and isolates single-task failures."
  },
  {
    id: "assign-06",
    title: "Optimistic Concurrency State Manager",
    difficulty: "Medium",
    description: "Implement a state store that rejects concurrent updates if the supplied version number does not match the current database record version.",
    starterStub: `export class VersionedStateStore {\n  // Implement read, update with version check\n}`,
    testCriteria: "Throws VersionConflictError when an outdated update attempt is submitted."
  },
  {
    id: "assign-07",
    title: "Exponential Backoff with Jitter Calculator",
    difficulty: "Medium",
    description: "Write a function that calculates the backoff delay in milliseconds for attempt n using truncated exponential backoff and randomized decorrelated jitter.",
    starterStub: `export function calculateBackoffWithJitter(attempt: number, baseMs: number = 500, maxMs: number = 8000): number {\n  // Implement formula\n}`,
    testCriteria: "Generates backoff within expected bounds and proves randomized jitter variation."
  },
  {
    id: "assign-08",
    title: "Three-State Circuit Breaker Class",
    difficulty: "Hard",
    description: "Build a CircuitBreaker class with CLOSED, OPEN, and HALF-OPEN states that trips after 3 consecutive failures and cools down after 10 seconds.",
    starterStub: `export class CircuitBreaker {\n  // Implement state transitions and execute wrapper\n}`,
    testCriteria: "Trips to OPEN on 3 failures and immediately rejects subsequent calls."
  },
  {
    id: "assign-09",
    title: "Weighted Score Aggregator with Discrepancy Gate",
    difficulty: "Hard",
    description: "Implement an evaluation aggregator that computes weighted scores (0.4T + 0.35C + 0.25M) and flags reviews where any two scores differ by >25 points.",
    starterStub: `export function aggregateScores(scores: { technical: number, coding: number, communication: number }) {\n  // Calculate final score and check discrepancy\n}`,
    testCriteria: "Flags discrepancy alert when technical is 90 and coding is 60."
  },
  {
    id: "assign-10",
    title: "Supervisor Handoff Coordinator",
    difficulty: "Hard",
    description: "Build a supervisor orchestrator that delegates tasks to specialists and enforces a maxHandoffDepth of 4 to prevent infinite delegation loops.",
    starterStub: `export async function runSupervisorWithHandoff(prompt, maxDepth = 4) {\n  // Implement supervisor with depth guard\n}`,
    testCriteria: "Terminates with MaxHandoffDepthError when agents ping-pong beyond 4 turns."
  },
  {
    id: "assign-11",
    title: "Evaluator-Optimizer Revision Loop",
    difficulty: "Hard",
    description: "Create an iterative generator-critic loop where a Generator writes code and a Critic evaluates it, allowing up to 3 revision iterations.",
    starterStub: `export async function runEvaluatorOptimizer(taskPrompt, generator, critic, maxIterations = 3) {\n  // Implement loop\n}`,
    testCriteria: "Stops immediately when critic passes code or when max iterations are reached."
  },
  {
    id: "assign-12",
    title: "Agent2Agent (A2A) Agent Card Generator",
    difficulty: "Hard",
    description: "Create an express route serving a valid A2A 1.0 Agent Card at /.well-known/agent.json describing multi-agent capabilities and skills.",
    starterStub: `export function getA2AAgentCard() {\n  // Return A2A compliant JSON schema\n}`,
    testCriteria: "Passes official A2A schema validation with name, url, and skills."
  },
  {
    id: "assign-13",
    title: "Multi-Agent OpenTelemetry Span Tracker",
    difficulty: "Hard",
    description: "Instrument an orchestration workflow with parent and child OpenTelemetry spans capturing latency, tokens, and agent status tags.",
    starterStub: `export function traceOrchestration(tracer, workflowName, fn) {\n  // Wrap workflow in parent span and record child spans\n}`,
    testCriteria: "Outputs hierarchical span tree with root traceId and child span IDs."
  },
  {
    id: "assign-14",
    title: "Idempotent Task Result Store",
    difficulty: "Hard",
    description: "Build a result cache that checks an idempotency key before running an agent task and returns cached outputs on repeated submissions.",
    starterStub: `export class IdempotentTaskStore {\n  // Implement getOrExecute pattern\n}`,
    testCriteria: "Returns identical output on second call without re-invoking the agent function."
  },
  {
    id: "assign-15",
    title: "Debate & Consensus Aggregator",
    difficulty: "Expert",
    description: "Build an async swarm where 3 independent reviewer agents audit an architecture proposal and an aggregator synthesizes majority consensus with dissenting opinions.",
    starterStub: `export async function runDebateSwarm(proposal, reviewers) {\n  // Run reviewers in parallel and synthesize consensus\n}`,
    testCriteria: "Returns consensus summary and lists dissenting points from minority reviewers."
  }
];

const theoryQuestions = [
  {
    id: "th-01",
    question: "Define a Multi-Agent System (MAS) and explain the formal equation: MAS = <{A_1..A_n}, C_comm, K_coord, G_shared>.",
    modelAnswer: "A Multi-Agent System (MAS) is a distributed software system where multiple specialized agents collaborate to achieve objectives beyond the capability of a single monolithic agent. In the formal equation: {A_1..A_n} represents the set of role-bounded specialist agents; C_comm represents the communication protocol (RPC, message bus, or A2A); K_coord represents the orchestration and scheduling coordination logic (supervisor, DAG engine); and G_shared represents the high-level user goal decomposed into subtasks."
  },
  {
    id: "th-02",
    question: "Differentiate clearly between single-agent systems and multi-agent systems across complexity, failure blast radius, and token cost.",
    modelAnswer: "A single-agent system handles all tasks within a single monolithic prompt and large tool catalog. It is simpler to deploy and has lower coordination overhead, but suffers from prompt bloat, attention dilution, and higher failure blast radius (one error halts the entire workflow). A multi-agent system partitions tasks across specialist agents with minimal tool sets, isolates failures to specific subtasks, and enables parallel execution, but incurs higher token costs, message serialization overhead, and requires sophisticated orchestration."
  },
  {
    id: "th-03",
    question: "What is an Agent Role, and why is defining strict input/output contracts essential?",
    modelAnswer: "An agent role defines the operational boundaries, domain scope, and permissions of a specialist. Defining strict input/output contracts (via JSON Schema or Zod) is essential because it treats agents as deterministic microservices: the orchestrator knows exactly what parameters to supply and what data structure to expect, preventing downstream parsers from crashing on unexpected prose."
  },
  {
    id: "th-04",
    question: "Explain the three routing paradigms: Rule-Based, Semantic Embedding, and LLM Intent Routing.",
    modelAnswer: "Rule-based routing uses regex or keyword tables, executing in sub-2ms with zero inference cost, but fails on synonyms or paraphrased queries. Semantic embedding routing computes cosine similarity between the query and intent centroids in 15–40ms, handling natural language variations well. LLM intent routing uses a fast model to parse complex nuances and compound prompts in 150–400ms, offering maximum intelligence at the cost of latency and token spend."
  },
  {
    id: "th-05",
    question: "How should an intelligent router handle compound multi-intent prompts?",
    modelAnswer: "A compound prompt (e.g., 'Review my code and schedule a practice interview') must not be forced into a single specialist. The router must decompose the request into an array of discrete sub-intents with designated target agents, assign execution priorities, and pass the structured array to the planner to schedule sequential or parallel branches."
  },
  {
    id: "th-06",
    question: "What information must be included in a production inter-agent message envelope?",
    modelAnswer: "A production message envelope must contain: messageId (cryptographic UUID for deduplication), taskId (global goal identifier), correlationId (linking request-response pairs across multi-hop handoffs), sender and recipient service identities, messageType (e.g., TASK_REQUEST, TASK_RESULT), timestamp, schemaVersion, and the typed payload conforming to the recipient's contract."
  },
  {
    id: "th-07",
    question: "Compare Direct Messaging, Broadcast, Shared-State (Blackboard), and Message Broker topologies.",
    modelAnswer: "Direct messaging is synchronous point-to-point RPC between two agents. Broadcast sends an event to all subscribed agents simultaneously. Shared-state (Blackboard) allows agents to communicate implicitly by reading and writing to a central database without point-to-point connections. Message brokers (Redis Streams, RabbitMQ) provide decoupled, durable, asynchronous message queues suitable for distributed microservice agents."
  },
  {
    id: "th-08",
    question: "What is the Planner–Executor pattern, and why is separating planning from execution critical?",
    modelAnswer: "The Planner–Executor pattern separates the analytical decision of WHAT needs to be done (task decomposition and dependency ordering by the Planner) from the operational control of HOW and WHEN tasks run (managing concurrency, timeouts, and retries by the Executor). This separation enables dependency validation before execution, makes workflows inspectable, and allows the executor to recover from failures without restarting the entire task."
  },
  {
    id: "th-09",
    question: "Why are Directed Acyclic Graphs (DAGs) used for task scheduling, and how are cycles prevented?",
    modelAnswer: "DAGs mathematically represent execution dependencies, ensuring downstream tasks only run after prerequisites succeed and identifying independent branches for safe parallelization. Cycles (A -> B -> A) are prevented by running topological sorting algorithms (such as Kahn's algorithm or DFS cycle detection) during plan validation, rejecting invalid cyclical plans before execution begins."
  },
  {
    id: "th-10",
    question: "Compare the Supervisor workflow, Handoff workflow, and Evaluator-Optimizer workflow.",
    modelAnswer: "In the Supervisor workflow, a central manager delegates tasks to workers, collects findings, and synthesizes the final response. In the Handoff workflow, conversational ownership is yielded directly to a specialist who continues direct dialogue with the user. In the Evaluator-Optimizer workflow, a generator agent produces a draft and an independent critic agent audits it against a rubric, triggering iterative revision loops until standards are met."
  },
  {
    id: "th-11",
    question: "What is the Blackboard architecture, and how does it prevent context bloating in agent swarms?",
    modelAnswer: "The Blackboard architecture is a shared central data repository where agents read inputs and write intermediate findings. It prevents context bloating because agents do not need to pass full conversational histories or giant document payloads inside message arguments; each agent reads only the slice of blackboard data required for its specific task."
  },
  {
    id: "th-12",
    question: "Explain the race condition hazard in parallel agent systems and how Optimistic Concurrency Control (OCC) resolves it.",
    modelAnswer: "A race condition occurs when two agents execute concurrently, read the same state record (Version 1), and attempt to write updates simultaneously; the slower agent's write overwrites the faster agent's update. OCC resolves this by attaching a version counter to records: an update succeeds only if the expected version matches the database version, aborting and retrying if another agent updated the record in the interim."
  },
  {
    id: "th-13",
    question: "Why is the Single-Writer principle advantageous for multi-agent state management?",
    modelAnswer: "The Single-Writer principle dictates that only one designated component (such as the central Orchestrator or Results Agent) is authorized to perform mutations on the primary task state. Specialist workers submit read-only proposals or candidate findings. This completely eliminates race conditions, write conflicts, and distributed locking overhead."
  },
  {
    id: "th-14",
    question: "Explain exponential backoff with randomized jitter and write down its mathematical formula.",
    modelAnswer: "Exponential backoff increases the delay between retry attempts exponentially to prevent overwhelming a recovering service, while randomized jitter prevents synchronized retry thundering herds. Formula: D_n = min(D_max, D_0 * 2^n) + Uniform(0, J), where D_0 is base delay, D_max is ceiling, n is attempt count, and J is the random jitter range."
  },
  {
    id: "th-15",
    question: "Describe the three states of the Circuit Breaker pattern: Closed, Open, and Half-Open.",
    modelAnswer: "In CLOSED state, calls pass through normally to the specialist; failures increment a counter. When failures cross a threshold, the breaker trips to OPEN state, immediately rejecting requests with fast failures to prevent resource exhaustion. After a cooldown window, it transitions to HALF-OPEN, allowing a limited test request: if successful, it resets to CLOSED; if it fails, it returns to OPEN."
  },
  {
    id: "th-16",
    question: "What is the Agent2Agent (A2A) protocol, and what fundamental problem does it solve?",
    modelAnswer: "The Agent2Agent (A2A) protocol is an open standard stewarded by the Linux Foundation for autonomous agent discovery, communication, and task collaboration across independent applications and clouds. It solves the M x N integration problem, allowing agents built in different languages (Python, Node.js, Java) or frameworks to collaborate through standardized Agent Cards, tasks, and artifacts."
  },
  {
    id: "th-17",
    question: "Differentiate clearly between the Model Context Protocol (MCP) and the Agent2Agent (A2A) Protocol.",
    modelAnswer: "MCP connects an AI application or model to external tools, resources, and contextual databases (Host <-> MCP Server). A2A connects autonomous AI agents to other independent AI agents (Agent <-> Remote Agent). MCP is for tool execution and data retrieval; A2A is for multi-agent delegation, task management, and cross-organization agent collaboration."
  },
  {
    id: "th-18",
    question: "What is an A2A Agent Card, and what information does it expose to external orchestrators?",
    modelAnswer: "An Agent Card is a standardized machine-readable JSON document hosted at a well-known URL describing an agent's service endpoint, human-readable name, operational description, supported capabilities (such as streaming and push notifications), authentication requirements, and the specific skills it exposes."
  },
  {
    id: "th-19",
    question: "Explain the four types of multi-agent conflicts: Data, Evaluation, Planning, and Resource.",
    modelAnswer: "Data conflicts occur when agents retrieve contradictory facts (resolved via authoritative sources and timestamps). Evaluation conflicts occur when specialists score an answer differently (resolved via weighted rubrics and discrepancy triggers). Planning conflicts occur when agents propose incompatible task sequences (resolved via prerequisite DAG ordering). Resource conflicts occur when agents compete for exclusive locks (resolved via transactions)."
  },
  {
    id: "th-20",
    question: "How does weighted scoring combined with discrepancy gating resolve multi-agent evaluation disputes?",
    modelAnswer: "Weighted scoring calculates the composite grade using a deterministic formula (e.g., FinalScore = 0.40T + 0.35C + 0.25M) ensuring each domain contributes proportionally. Discrepancy gating monitors point spread: if the difference between any two specialists exceeds a threshold (e.g., 25 points), an automated Reviewer Agent audits supporting evidence, escalating to human instructors if variance is extreme."
  },
  {
    id: "th-21",
    question: "Compare the wall-clock execution time of sequential vs parallel multi-agent workflows.",
    modelAnswer: "In sequential workflows, total latency is the sum of all agent durations (T_seq = sum(t_i)). In parallel workflows, independent agents run concurrently, reducing total latency to the duration of the slowest agent plus minimal aggregation overhead (T_par = max(t_i) + t_agg). For three tasks taking 5s, 8s, and 6s, sequential takes 19s while parallel takes ~8.5s (over 55% latency reduction)."
  },
  {
    id: "th-22",
    question: "What is Bounded Concurrency, and why must multi-agent orchestrators enforce it?",
    modelAnswer: "Bounded concurrency limits the maximum number of worker agents running concurrently (e.g., max 5 parallel tasks). Without concurrency limits, fan-out workflows can trigger dozens of simultaneous LLM requests, causing provider rate limits (HTTP 429), memory exhaustion, and database connection pool starvation."
  },
  {
    id: "th-23",
    question: "Explain the principle of Context Isolation and why broadcasting all dialogue to every agent is an anti-pattern.",
    modelAnswer: "Context isolation dictates that each specialist receives ONLY the specific prompt, data slice, and tool results required for its job. Broadcasting full dialogue histories to all agents wastes tokens, slows inference, leaks private data across boundaries, and distracts specialists with irrelevant instructions that increase hallucination rates."
  },
  {
    id: "th-24",
    question: "What is Task Success Rate (TSR), and how is it measured in multi-agent benchmarks?",
    modelAnswer: "Task Success Rate (TSR) is the percentage of end-to-end evaluation tasks where all required specialist subtasks succeeded, dependencies were satisfied, and the final goal was achieved without unhandled exceptions or human intervention: TSR = (Successfully Completed Goals / Total Test Goals) * 100."
  },
  {
    id: "th-25",
    question: "What distributed trace spans should be captured by OpenTelemetry in a multi-agent workflow?",
    modelAnswer: "A complete multi-agent trace should capture: a root span for the global workflow, child spans for router classification and plan generation, individual worker spans for each specialist execution (recording model latency, token usage, and status), spans for backend tool invocations, and an aggregation span recording the final synthesis."
  },
  {
    id: "th-26",
    question: "Explain the Confused Deputy problem in multi-agent delegation architectures.",
    modelAnswer: "The Confused Deputy problem occurs when an unprivileged user convinces an agent with elevated permissions (the deputy) to perform an unauthorized action on another user's behalf. To prevent this, permission checks must always validate the original authenticated user's session token, rather than relying on the agent's system credentials."
  },
  {
    id: "th-27",
    question: "What is Cross-Agent Prompt Injection, and how do orchestrators defend against it?",
    modelAnswer: "Cross-agent prompt injection occurs when a specialist ingests untrusted external data (such as a webpage or code snippet) containing malicious instructions that trick it into emitting instructions aimed at hijacking the manager agent. Orchestrators defend by treating all specialist outputs as raw data envelopes rather than executable system instructions."
  },
  {
    id: "th-28",
    question: "How should an enterprise transition from a monolithic agent to a distributed multi-agent system?",
    modelAnswer: "Enterprises should follow a progressive architecture path: start with a single agent; modularize into specialist functions within a modular monolith when tools grow; introduce an in-process DAG orchestrator for parallel subtasks; and only transition to distributed microservice agents with message brokers (A2A/Kafka) when independent scaling or separate team ownership demands it."
  },
  {
    id: "th-29",
    question: "Why does majority voting among LLM agents fail to guarantee factual truth?",
    modelAnswer: "Multiple LLM agents often share common pretraining biases, identical underlying base models, or the same retrieved source documents. If the source data is flawed or the prompt contains an ambiguity, all agents may agree on an incorrect answer. True consensus requires grounding evaluations in external deterministic checks, compiler tests, or validated rubrics."
  },
  {
    id: "th-30",
    question: "Synthesize the golden rule of multi-agent engineering.",
    modelAnswer: "A multi-agent system is not simply multiple LLMs talking to each other. It is a coordinated distributed software system where every agent has a defined role, every task has a strict execution contract, every message has a predictable structure, and the orchestrator maintains deterministic control over scheduling, shared state, failure recovery, and output verification."
  }
];

const quizQuestions = [
  {
    id: 1,
    question: "What is the primary architectural benefit of a Multi-Agent System (MAS) over a single monolithic agent?",
    options: [
      "It completely eliminates the need for backend databases",
      "It partitions complex goals across specialized agents with minimal tool sets and isolated contexts",
      "It guarantees that LLM models never hallucinate",
      "It reduces total token consumption to zero"
    ],
    correctIndex: 1,
    explanation: "MAS decomposes complex problems across focused specialist agents, reducing prompt bloat, isolating tool permissions, and enabling parallel execution of independent subtasks."
  },
  {
    id: 2,
    question: "What is the core responsibility of the Orchestrator in a multi-agent architecture?",
    options: [
      "Executing raw SQL queries directly without schemas",
      "Selecting specialists, scheduling task dependencies, maintaining state, and aggregating results",
      "Training foundational neural weights from scratch",
      "Serving static CSS and HTML assets"
    ],
    correctIndex: 1,
    explanation: "The orchestrator is the central coordinator responsible for intent routing, DAG task planning, dependency scheduling, inter-agent messaging, fault recovery, and final result synthesis."
  },
  {
    id: 3,
    question: "Why should multi-agent task execution plans be modeled as Directed Acyclic Graphs (DAGs)?",
    options: [
      "To prevent circular dependency deadlocks and enable safe concurrent execution of independent tasks",
      "Because neural networks can only process graph neural networks",
      "To compress text tokens into 8-bit integers",
      "To avoid having to write input validation schemas"
    ],
    correctIndex: 0,
    explanation: "DAGs mathematically represent execution dependencies, ensure downstream tasks only run after prerequisites finish, identify parallel execution branches, and prevent circular deadlocks."
  },
  {
    id: 4,
    question: "In inter-agent messaging, what is the purpose of a Correlation ID?",
    options: [
      "Encrypting the user's password",
      "Linking related request-response message pairs across multi-hop agent handoffs",
      "Calculating the cosine similarity of text embeddings",
      "Setting the temperature parameter of the LLM"
    ],
    correctIndex: 1,
    explanation: "A correlation ID ties related messages together across multi-step, multi-agent workflows, allowing orchestrators and telemetry systems to trace entire conversational trajectories."
  },
  {
    id: 5,
    question: "Which multi-agent workflow pattern is optimal for independent tasks that can run simultaneously?",
    options: [
      "Sequential Workflow",
      "Parallel Workflow",
      "Circular Handoff Workflow",
      "Single-Threaded Loop"
    ],
    correctIndex: 1,
    explanation: "Parallel workflows execute independent agents concurrently (e.g., evaluating Java, Python, and SQL knowledge at the same time), minimizing wall-clock latency before aggregating results."
  },
  {
    id: 6,
    question: "What is the Blackboard architecture in multi-agent coordination?",
    options: [
      "A dark-mode user interface theme",
      "A shared central data repository where agents read inputs and post intermediate findings",
      "A technique for deleting old user accounts",
      "A specialized compiler for Python code"
    ],
    correctIndex: 1,
    explanation: "The Blackboard pattern provides a shared transactional information space where specialist agents post findings and read inputs without needing heavy point-to-point message passing."
  },
  {
    id: 7,
    question: "How does Optimistic Concurrency Control (OCC) prevent race conditions in shared agent state?",
    options: [
      "By locking the entire database permanently",
      "By verifying that the record's version number has not changed before committing an update",
      "By forcing all agents to execute sequentially on a single thread",
      "By deleting older records automatically"
    ],
    correctIndex: 1,
    explanation: "OCC uses version numbers on records. An agent's update succeeds only if the expected version matches the current version, rejecting stale writes if another agent updated the record in the interim."
  },
  {
    id: 8,
    question: "What does the Agent2Agent (A2A) protocol primarily standardize?",
    options: [
      "Connecting models to database tools and local files",
      "Standardized discovery, communication, and task collaboration between independent AI agents",
      "GPU memory allocation in PyTorch",
      "Frontend CSS styling for agent chatbots"
    ],
    correctIndex: 1,
    explanation: "The A2A protocol (stewarded by the Linux Foundation) standardizes how autonomous agents discover one another via Agent Cards, exchange structured messages, and coordinate tasks across different platforms."
  },
  {
    id: 9,
    question: "What is the crucial difference between the Model Context Protocol (MCP) and Agent2Agent (A2A)?",
    options: [
      "They are identical protocols created by the same team",
      "MCP connects models to external tools and context; A2A connects independent agents to each other",
      "MCP is only for Python while A2A is only for JavaScript",
      "A2A connects databases to browsers while MCP connects models to GPUs"
    ],
    correctIndex: 1,
    explanation: "MCP enables an AI application or model to access tools, resources, and context. A2A enables autonomous agents to delegate tasks, discover skills, and collaborate with other independent agents."
  },
  {
    id: 10,
    question: "What happens when a 3-state Circuit Breaker transitions to the 'OPEN' state?",
    options: [
      "It increases the model temperature to 1.0",
      "It immediately rejects subsequent calls with fast failures, protecting the backend from cascading timeouts",
      "It retries the failed operation 100 times in a tight loop",
      "It deletes the agent registry"
    ],
    correctIndex: 1,
    explanation: "When failures exceed a threshold, the circuit breaker trips to OPEN, immediately short-circuiting calls without making network requests, allowing the failing service time to recover."
  }
];

const competenciesChecklist = [
  { id: "c-01", label: "Understand the core architecture: MAS = <{Agents}, Communication, Coordination, Shared Goal>" },
  { id: "c-02", label: "Articulate the trade-offs between single-agent systems and multi-agent swarms" },
  { id: "c-03", label: "Define specialist agent contracts with strict input/output schemas and minimal tool allowlists" },
  { id: "c-04", label: "Implement multi-intent routing that decomposes compound prompts into distinct subtasks" },
  { id: "c-05", label: "Engineer structured message envelopes with cryptographic message IDs and correlation IDs" },
  { id: "c-06", label: "Build a Planner–Executor engine separating task planning from runtime dispatch" },
  { id: "c-07", label: "Implement Directed Acyclic Graph (DAG) scheduling with Kahn's topological sorting" },
  { id: "c-08", label: "Detect and reject circular dependency cycles before task execution begins" },
  { id: "c-09", label: "Implement Sequential, Parallel, Supervisor, and Evaluator-Optimizer orchestration patterns" },
  { id: "c-10", label: "Construct an in-process multi-agent execution engine with concurrency controls in JavaScript" },
  { id: "c-11", label: "Architect a shared Blackboard coordination layer with single-writer mutation rules" },
  { id: "c-12", label: "Prevent concurrency race conditions using Optimistic Concurrency Control (OCC) versioning" },
  { id: "c-13", label: "Implement truncated exponential backoff with randomized decorrelated jitter" },
  { id: "c-14", label: "Build a 3-state Circuit Breaker (Closed, Open, Half-Open) protecting remote model endpoints" },
  { id: "c-15", label: "Understand the Agent2Agent (A2A) specification: Agent Cards, tasks, and artifacts" },
  { id: "c-16", label: "Articulate the precise architectural distinction between MCP (tools/data) and A2A (agent collaboration)" },
  { id: "c-17", label: "Implement mathematical conflict resolution using weighted scoring and discrepancy gates" },
  { id: "c-18", label: "Enforce context isolation to prevent attention bloat and token waste across specialists" },
  { id: "c-19", label: "Measure multi-agent systems using Task Success Rate (TSR) and coordination overhead metrics" },
  { id: "c-20", label: "Instrument distributed workflows with hierarchical OpenTelemetry trace spans" }
];

const learningResources = [
  {
    title: "OpenAI — Multi-Agent Orchestration Guide",
    type: "Official Documentation",
    url: "https://developers.openai.com/api/docs/guides/agents/orchestration",
    description: "Definitive guide to agent orchestration, handoffs, supervisor patterns, and agents-as-tools coordination using the OpenAI Agents SDK."
  },
  {
    title: "Anthropic — Building Effective Agents",
    type: "Research Paper & Guide",
    url: "https://www.anthropic.com/research/building-effective-agents",
    description: "Foundational architecture research analyzing orchestrator-workers, parallelization, and evaluator-optimizer multi-agent design patterns."
  },
  {
    title: "Google Agent Development Kit (ADK)",
    type: "Official Documentation",
    url: "https://google.github.io/adk-docs/",
    description: "Google's framework guide for sequential, parallel, loop-based, and graph-driven multi-agent workflows."
  },
  {
    title: "LangGraph Multi-Agent Architecture",
    type: "Framework Docs",
    url: "https://docs.langchain.com/oss/python/langgraph/overview",
    description: "Comprehensive guide to cyclic graph workflows, state machines, checkpointing, multi-agent swarms, and human-in-the-loop review."
  },
  {
    title: "Agent2Agent (A2A) Protocol Specification",
    type: "Open Protocol Specification",
    url: "https://a2a-protocol.org/",
    description: "Official Linux Foundation specification for standardized agent discovery, Agent Cards, task lifecycles, and cross-framework interoperability."
  },
  {
    title: "Model Context Protocol (MCP) Specification",
    type: "Open Protocol Specification",
    url: "https://modelcontextprotocol.io/",
    description: "Open protocol connecting AI agents to external tools, resources, and prompt templates over stdio and HTTP/SSE transports."
  },
  {
    title: "CrewAI Multi-Agent Systems Documentation",
    type: "Framework Docs",
    url: "https://docs.crewai.com/",
    description: "Role-oriented collaborative multi-agent framework detailing autonomous crew creation, task delegation, and hierarchical orchestration."
  }
];

const outputContent = `// Module 14: Multi-Agent AI Systems & Orchestration - Complete University-Level Curriculum Data
// Generated automatically for PrepSpaces AI Engineering & Generative AI track.

export const overview = ${JSON.stringify(overview, null, 2)};

export const roadmapUnits = ${JSON.stringify(roadmapUnits, null, 2)};

export const curriculumUnits = ${JSON.stringify(curriculumUnits, null, 2)};

export const practicalLabs = ${JSON.stringify(practicalLabs, null, 2)};

export const capstoneProject = ${JSON.stringify(capstoneProject, null, 2)};

export const codingAssignments = ${JSON.stringify(codingAssignments, null, 2)};

export const theoryQuestions = ${JSON.stringify(theoryQuestions, null, 2)};

export const quizQuestions = ${JSON.stringify(quizQuestions, null, 2)};

export const competenciesChecklist = ${JSON.stringify(competenciesChecklist, null, 2)};

export const learningResources = ${JSON.stringify(learningResources, null, 2)};
`;

const outputPath = path.resolve(__dirname, '../src/Componets/aiMultiAgentData.js');
fs.writeFileSync(outputPath, outputContent, 'utf8');
console.log(`Successfully generated Module 14 curriculum data at ${outputPath}`);
console.log(`File size: ${fs.statSync(outputPath).size} bytes`);
