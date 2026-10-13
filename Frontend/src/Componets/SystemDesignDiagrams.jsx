import React, { useState } from "react";
import {
  Server,
  Database,
  Zap,
  Sparkles,
  ArrowRight,
  ArrowDown,
  RefreshCw,
  HardDrive,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* DIAGRAM 1: 10 CORE DESIGN AREAS (Lesson 1.1)                                */
/* -------------------------------------------------------------------------- */
export function TenDesignAreasDiagram() {
  const [selectedArea, setSelectedArea] = useState(0);

  const areas = [
    {
      title: "1. Requirements",
      tag: "Scope & Boundaries",
      question: "What must the system accomplish, and what are its boundaries?",
      deliverable: "PRD, Functional Specs, measurable non-functional SLOs.",
      risk: "Building the wrong system or over-engineering for unneeded scale.",
      color: "border-orange-300 bg-orange-50/70 text-orange-900",
      accent: "bg-[#ea580c]",
    },
    {
      title: "2. Architecture",
      tag: "Structure & Topology",
      question: "What are the primary components and their domain boundaries?",
      deliverable: "C4 Context and Container diagrams, ADRs.",
      risk: "Spaghetti coupling, cyclic dependencies, cascading blast radiuses.",
      color: "border-amber-300 bg-amber-50/70 text-amber-900",
      accent: "bg-amber-600",
    },
    {
      title: "3. Interfaces",
      tag: "Protocols & Contracts",
      question: "How do components communicate and what contracts do they share?",
      deliverable: "OpenAPI/Swagger specs, gRPC Protobufs, AsyncAPI events.",
      risk: "Breaking schema changes, brittle network couplings.",
      color: "border-blue-300 bg-blue-50/70 text-blue-900",
      accent: "bg-blue-600",
    },
    {
      title: "4. Data",
      tag: "Storage & Flow",
      question: "Where is state stored, how does it replicate, and what consistency model applies?",
      deliverable: "ER diagrams, schema migrations, caching policies, partitioning keys.",
      risk: "Data corruption, split-brain, replication lag, slow unindexed queries.",
      color: "border-emerald-300 bg-emerald-50/70 text-emerald-900",
      accent: "bg-emerald-600",
    },
    {
      title: "5. Infrastructure",
      tag: "Compute & Network",
      question: "Where and how does software execute physically and in the cloud?",
      deliverable: "Terraform/IaC, VPC topology, Multi-AZ subnets, Load balancers.",
      risk: "Single datacenter outage, noisy neighbor CPU contention.",
      color: "border-purple-300 bg-purple-50/70 text-purple-900",
      accent: "bg-purple-600",
    },
    {
      title: "6. Performance",
      tag: "Latency & Throughput",
      question: "How does the system behave under growing concurrent workloads?",
      deliverable: "p95/p99 latency budgets, Little's Law concurrency models.",
      risk: "Thread exhaustion, connection pool starvation, latency spikes.",
      color: "border-rose-300 bg-rose-50/70 text-rose-900",
      accent: "bg-rose-600",
    },
    {
      title: "7. Reliability",
      tag: "Fault Tolerance",
      question: "How does the architecture survive inevitable partial failures?",
      deliverable: "Circuit breakers, idempotency keys, DLQs, Multi-AZ failovers.",
      risk: "Cascading brownouts, retry storms, single points of failure.",
      color: "border-red-300 bg-red-50/70 text-red-900",
      accent: "bg-red-600",
    },
    {
      title: "8. Security",
      tag: "Zero Trust",
      question: "Who can access which resources, and how is data protected at rest and in transit?",
      deliverable: "mTLS, JWT validation, IAM least privilege, threat model.",
      risk: "Data breaches, broken object-level authorization (BOLA), injection.",
      color: "border-stone-400 bg-stone-100 text-stone-900",
      accent: "bg-stone-800",
    },
    {
      title: "9. Operations",
      tag: "Observability & SRE",
      question: "How will engineers deploy, monitor, troubleshoot, and evolve the system?",
      deliverable: "Distributed tracing, Prometheus metrics, structured logs, runbooks.",
      risk: "Blind outages, untraceable bugs, high Mean Time to Recovery (MTTR).",
      color: "border-teal-300 bg-teal-50/70 text-teal-900",
      accent: "bg-teal-600",
    },
    {
      title: "10. Economics",
      tag: "Cost Efficiency",
      question: "What does the architecture cost to build, license, run, and scale?",
      deliverable: "Total Cost of Ownership (TCO), cloud egress models, capacity budgets.",
      risk: "Bankrupting cloud bills, idle over-provisioned infrastructure.",
      color: "border-lime-300 bg-lime-50/70 text-lime-900",
      accent: "bg-lime-600",
    },
  ];

  const current = areas[selectedArea];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Interactive Architectural Model
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The 10 Interconnected Facets of System Architecture
          </h4>
        </div>
        <span className="text-xs text-stone-500">Click any area to inspect questions & risks</span>
      </div>

      {/* 10 Areas Grid Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
        {areas.map((a, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedArea(idx)}
            className={`p-2.5 rounded-xl border text-left transition cursor-pointer ${
              selectedArea === idx
                ? `${a.color} font-bold shadow-xs scale-[1.02]`
                : "border-[#e7e3da] bg-[#faf8f4] text-stone-700 hover:bg-stone-50 hover:border-orange-200"
            }`}
          >
            <span className="block text-xs font-bold truncate">{a.title}</span>
            <span className="block text-[10px] text-stone-500 truncate">{a.tag}</span>
          </button>
        ))}
      </div>

      {/* Detailed Selected Area Inspector */}
      <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 mb-3 border-b border-[#e7e3da] pb-3">
          <div className="flex items-center gap-2">
            <span className={`h-3 w-3 rounded-full ${current.accent}`} />
            <h5 className="font-bold text-sm sm:text-base text-stone-900">{current.title}</h5>
          </div>
          <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-white border border-[#e7e3da] text-stone-700">
            {current.tag}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl bg-white border border-[#e7e3da] p-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-600 block mb-1">
              Core Question Answered
            </span>
            <p className="text-stone-700 leading-relaxed font-medium">"{current.question}"</p>
          </div>

          <div className="rounded-xl bg-white border border-[#e7e3da] p-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-600 block mb-1">
              Key Engineering Deliverables
            </span>
            <p className="text-stone-700 leading-relaxed">{current.deliverable}</p>
          </div>

          <div className="rounded-xl bg-white border border-rose-200 p-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-1">
              Failure Risk If Ignored
            </span>
            <p className="text-rose-900 leading-relaxed font-medium">{current.risk}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 2: REQUIREMENTS MATRIX & SRE PYRAMID (Lesson 1.2)                  */
/* -------------------------------------------------------------------------- */
export function RequirementsMatrixDiagram() {
  const [activeTab, setActiveTab] = useState("matrix"); // 'matrix' | 'sre'

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Requirements Engineering Model
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Functional vs. Non-Functional Specifications & SRE Metrics
          </h4>
        </div>

        <div className="flex gap-1.5 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("matrix")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeTab === "matrix" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Requirements Comparison
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("sre")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeTab === "sre" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            SLI / SLO / SLA Pyramid
          </button>
        </div>
      </div>

      {activeTab === "matrix" ? (
        <div className="grid gap-4 md:grid-cols-2">
          {/* Functional Requirements */}
          <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xs font-bold">
                FR
              </span>
              <div>
                <h5 className="font-bold text-sm text-stone-900">Functional Requirements (WHAT)</h5>
                <span className="text-[11px] text-stone-500">Observable capabilities and business features</span>
              </div>
            </div>
            <div className="space-y-2 text-xs text-stone-700">
              <div className="rounded-xl bg-white border border-blue-100 p-2.5">
                <span className="font-bold text-blue-900 block mb-0.5">Course Catalog Browsing</span>
                <span>Students can search, filter, and view structured modules and lessons.</span>
              </div>
              <div className="rounded-xl bg-white border border-blue-100 p-2.5">
                <span className="font-bold text-blue-900 block mb-0.5">Assignment Submission</span>
                <span>Students can submit code artifacts and video projects for instructor review.</span>
              </div>
              <div className="rounded-xl bg-white border border-blue-100 p-2.5">
                <span className="font-bold text-blue-900 block mb-0.5">Progress Persistence</span>
                <span>System records lesson completion timestamps and assessment scores.</span>
              </div>
            </div>
          </div>

          {/* Non-Functional Requirements */}
          <div className="rounded-2xl border border-orange-200 bg-orange-50/40 p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#ea580c] text-white font-mono text-xs font-bold">
                NFR
              </span>
              <div>
                <h5 className="font-bold text-sm text-stone-900">Non-Functional Requirements (HOW WELL)</h5>
                <span className="text-[11px] text-stone-500">Measurable quality constraints & operational targets</span>
              </div>
            </div>
            <div className="space-y-2 text-xs text-stone-700">
              <div className="rounded-xl bg-white border border-orange-100 p-2.5">
                <span className="font-bold text-orange-950 block mb-0.5">p95 Latency &lt; 300 ms</span>
                <span>95% of course API read requests complete within 300ms at the backend boundary.</span>
              </div>
              <div className="rounded-xl bg-white border border-orange-100 p-2.5">
                <span className="font-bold text-orange-950 block mb-0.5">99.9% Monthly Availability</span>
                <span>Max allowed monthly unexpected downtime: 43 minutes and 48 seconds.</span>
              </div>
              <div className="rounded-xl bg-white border border-orange-100 p-2.5">
                <span className="font-bold text-orange-950 block mb-0.5">Zero Data Loss Durability</span>
                <span>Acknowledged assignment records are replicated synchronously across multiple AZs.</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-4 text-xs">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-white border border-[#e7e3da] p-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                  1. SLI (Indicator)
                </span>
                <span className="text-xs font-bold text-stone-900 block mb-1">What we directly measure</span>
                <p className="text-stone-600 leading-relaxed">
                  "HTTP GET /api/lessons response time measured in milliseconds at reverse proxy."
                </p>
              </div>

              <div className="rounded-xl bg-white border border-orange-200 p-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  2. SLO (Objective)
                </span>
                <span className="text-xs font-bold text-stone-900 block mb-1">Internal engineering target</span>
                <p className="text-stone-600 leading-relaxed">
                  "99.0% of requests must complete under 250ms over any rolling 30-day window."
                </p>
              </div>

              <div className="rounded-xl bg-white border border-rose-200 p-3">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-1">
                  3. SLA (Agreement)
                </span>
                <span className="text-xs font-bold text-stone-900 block mb-1">Contractual commitment</span>
                <p className="text-stone-600 leading-relaxed">
                  "If monthly availability drops below 99.0%, enterprise clients receive a 10% credit."
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 3: HIGH-LEVEL ARCHITECTURE & SEQUENCE FLOW (Lesson 1.3)             */
/* -------------------------------------------------------------------------- */
export function HighLevelArchitectureDiagram() {
  const [activeMode, setActiveMode] = useState("topology"); // 'topology' | 'sequence'
  const [activeStep, setActiveStep] = useState(0);

  const sequenceSteps = [
    {
      actor: "Client Browser",
      action: "1. User navigates to course URL",
      detail: "Dispatches GET request with authorization cookie / JWT bearer token.",
      protocol: "HTTPS / TLS 1.3",
      timing: "0 ms",
    },
    {
      actor: "Edge CDN & DNS",
      action: "2. DNS Resolution & Anycast Routing",
      detail: "Route53 / Cloudflare resolves nearest edge point-of-presence (PoP).",
      protocol: "UDP 53 / Anycast",
      timing: "15 ms",
    },
    {
      actor: "API Gateway / ALB",
      action: "3. TLS Termination & Rate Limiting",
      detail: "Terminates TLS, validates IP rate limits (e.g. 100 req/min), forwards to backend.",
      protocol: "HTTP/2 → HTTP/1.1",
      timing: "22 ms",
    },
    {
      actor: "Backend Modular Monolith",
      action: "4. Auth Middleware & Business Logic",
      detail: "Verifies cryptographic signature of JWT; checks student enrollment permissions.",
      protocol: "In-memory process",
      timing: "30 ms",
    },
    {
      actor: "Relational Database",
      action: "5. Indexed SQL Query Execution",
      detail: "SELECT id, title, content FROM lessons WHERE course_id = $1 (Index Scan < 2ms).",
      protocol: "PostgreSQL TCP 5432",
      timing: "38 ms",
    },
    {
      actor: "Backend API",
      action: "6. JSON Serialization & Compression",
      detail: "Formats JSON response payload; applies Brotli/Gzip compression (5KB total).",
      protocol: "CPU buffer",
      timing: "44 ms",
    },
    {
      actor: "Client Browser",
      action: "7. Response Received & DOM Rendered",
      detail: "HTTP 200 OK received; React Virtual DOM reconciles and displays lesson view.",
      protocol: "Browser Engine",
      timing: "58 ms Total",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            End-to-End System Anatomy
          </span>
          <h4 className="text-base font-bold text-stone-900">
            System Topology & Request-Response Sequence Flow
          </h4>
        </div>

        <div className="flex gap-1.5 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-1">
          <button
            type="button"
            onClick={() => setActiveMode("topology")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeMode === "topology" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            System Topology View
          </button>
          <button
            type="button"
            onClick={() => setActiveMode("sequence")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeMode === "sequence" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Request Sequence Journey
          </button>
        </div>
      </div>

      {activeMode === "topology" ? (
        <div className="space-y-4">
          {/* Visual Topology Diagram */}
          <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4 sm:p-5 overflow-x-auto">
            <div className="min-w-[580px] flex flex-col gap-4">
              {/* Row 1: Clients */}
              <div className="flex items-center justify-center gap-3">
                <div className="rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-center shadow-xs">
                  <span className="font-mono text-[10px] text-stone-400 font-bold block uppercase">Client Tier</span>
                  <span className="text-xs font-bold text-stone-900">Web Browser & Mobile App</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-orange-500 font-bold text-xs">
                <span>↓ HTTPS / TLS 1.3</span>
              </div>

              {/* Row 2: Edge & Gateway */}
              <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
                <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-3 text-center">
                  <span className="font-mono text-[10px] text-amber-700 font-bold block uppercase">Edge Tier</span>
                  <span className="text-xs font-bold text-stone-900">CloudFront CDN & DNS</span>
                  <span className="text-[10px] text-stone-500 block mt-0.5">Static asset cache & TLS edge</span>
                </div>

                <div className="rounded-xl border border-orange-200 bg-orange-50/80 p-3 text-center">
                  <span className="font-mono text-[10px] text-orange-700 font-bold block uppercase">Gateway Tier</span>
                  <span className="text-xs font-bold text-stone-900">Load Balancer (ALB)</span>
                  <span className="text-[10px] text-stone-500 block mt-0.5">Rate limiting & reverse proxy</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-orange-500 font-bold text-xs">
                <span>↓ Internal VPC Subnets</span>
              </div>

              {/* Row 3: Application Tier */}
              <div className="rounded-2xl border border-stone-300 bg-white p-4 max-w-2xl mx-auto w-full shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-600">
                    Application Logic Tier
                  </span>
                  <span className="text-[10px] font-mono bg-stone-100 px-2 py-0.5 rounded text-stone-600">
                    Stateless Node.js Process
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="rounded-lg bg-stone-50 border border-stone-200 p-2 font-medium">
                    Auth & Tokens
                  </div>
                  <div className="rounded-lg bg-stone-50 border border-stone-200 p-2 font-medium">
                    Course & Progress
                  </div>
                  <div className="rounded-lg bg-stone-50 border border-stone-200 p-2 font-medium">
                    Assignment Handlers
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center text-orange-500 font-bold text-xs">
                <span>↓ Persistence & Worker Subsystems</span>
              </div>

              {/* Row 4: Data & Queues */}
              <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto w-full">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/80 p-3 text-center">
                  <Database size={16} className="mx-auto text-emerald-600 mb-1" />
                  <span className="text-xs font-bold text-stone-900 block">PostgreSQL (Multi-AZ)</span>
                  <span className="text-[10px] text-stone-500 block">Relational ACID state</span>
                </div>

                <div className="rounded-xl border border-blue-200 bg-blue-50/80 p-3 text-center">
                  <HardDrive size={16} className="mx-auto text-blue-600 mb-1" />
                  <span className="text-xs font-bold text-stone-900 block">S3 / Object Store</span>
                  <span className="text-[10px] text-stone-500 block">Video files & uploads</span>
                </div>

                <div className="rounded-xl border border-purple-200 bg-purple-50/80 p-3 text-center">
                  <Zap size={16} className="mx-auto text-purple-600 mb-1" />
                  <span className="text-xs font-bold text-stone-900 block">Redis & Job Queue</span>
                  <span className="text-[10px] text-stone-500 block">Async notification worker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Stepper Controls */}
          <div className="flex items-center justify-between border-b border-[#e7e3da] pb-3">
            <span className="text-xs font-bold text-stone-700">
              Step {activeStep + 1} of {sequenceSteps.length}:{" "}
              <span className="text-orange-600">{sequenceSteps[activeStep].actor}</span>
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-2.5 py-1 text-xs font-bold rounded-lg border border-[#e7e3da] bg-white text-stone-700 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={activeStep === sequenceSteps.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(sequenceSteps.length - 1, prev + 1))}
                className="px-3 py-1 text-xs font-bold rounded-lg bg-[#f97316] text-white hover:bg-[#ea580c] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
              >
                Next Step
              </button>
            </div>
          </div>

          {/* Active Step Details */}
          <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-4 sm:p-5">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">
                {sequenceSteps[activeStep].action}
              </span>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white border border-orange-200 text-orange-950">
                Elapsed: {sequenceSteps[activeStep].timing}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-800 font-medium mb-3">
              {sequenceSteps[activeStep].detail}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-stone-500 font-mono">
              <span className="font-bold text-stone-700">Protocol / Layer:</span>
              <span>{sequenceSteps[activeStep].protocol}</span>
            </div>
          </div>

          {/* Stepper Pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {sequenceSteps.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition cursor-pointer ${
                  activeStep === idx
                    ? "bg-[#f97316] text-white"
                    : "bg-[#faf8f4] border border-[#e7e3da] text-stone-600 hover:border-orange-300"
                }`}
              >
                {idx + 1}. {s.actor}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 4: ARCHITECTURAL STYLES COMPARISON (Lesson 1.4)                    */
/* -------------------------------------------------------------------------- */
export function ArchitecturalStylesComparisonDiagram() {
  const [styleMode, setStyleMode] = useState("modular"); // 'monolith' | 'modular' | 'microservices'

  const styles = {
    monolith: {
      name: "Monolithic Architecture",
      subtitle: "Single Deployable Artifact, Single Process, Shared Database",
      pros: ["Zero internal network latency", "Trivial local development & debugging", "Simple ACID database transactions", "Single CI/CD deployment pipeline"],
      cons: ["Coupling creep & spaghetti dependencies", "Entire app must be redeployed for tiny fixes", "Large blast radius: 1 bug can crash all features", "Single scaling bottleneck"],
      bestFor: "Early prototypes, small teams (1-3 engineers), simple business domains.",
      diagram: [
        { name: "Single Web/API Application Process", items: ["User Logic", "Course Catalog", "Quiz Submissions", "Notifications"], type: "monolith" },
        { name: "Shared Relational Database", items: ["All tables in single schema"], type: "db" },
      ],
    },
    modular: {
      name: "Modular Monolith (Recommended)",
      subtitle: "Single Deployable Process with Strict Domain Boundaries & Encapsulation",
      pros: ["Zero network latency between modules", "Clear domain ownership & public facades", "Compile-time enforcement of boundaries", "Straightforward deployment with low operational tax"],
      cons: ["Still deploys as a single binary", "Can still share single database resources if unmonitored", "Requires discipline to avoid cross-module table joins"],
      bestFor: "Growing products, small to mid teams (3-15 engineers) needing strong clean architecture without Kubernetes complexity.",
      diagram: [
        { name: "Modular Application Process (Public Interfaces)", items: ["Module A: Users (Isolated)", "Module B: Courses (Isolated)", "Module C: Assessments (Isolated)"], type: "modular" },
        { name: "Segmented Database", items: ["schema: users", "schema: courses", "schema: assessments"], type: "db" },
      ],
    },
    microservices: {
      name: "Microservices Architecture",
      subtitle: "Decoupled Network Services with Independent Data Stores & CI/CD",
      pros: ["Independent team velocity & deployments", "Targeted horizontal scaling per service", "Fault isolation: crash in one doesn't crash others", "Freedom to choose optimal database per service"],
      cons: ["The Distributed Systems Tax (RPC latency, retries, circuit breaking)", "Distributed transactions require complex Sagas", "High operational overhead (Kubernetes, service mesh, distributed tracing)", "Eventual consistency anomalies"],
      bestFor: "Large engineering organizations (50+ engineers) with distinct autonomous domain teams and proven independent scaling demands.",
      diagram: [
        { name: "API Gateway (Ingress & Token Verification)", items: ["Routes requests to independent microservices"], type: "gateway" },
        { name: "Microservices & Private DBs", items: ["User Service → DB 1", "Course Service → DB 2", "Assessment Service → DB 3"], type: "microservices" },
      ],
    },
  };

  const current = styles[styleMode];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Architectural Styles Evaluation
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Monolith vs. Modular Monolith vs. Microservices
          </h4>
        </div>

        <div className="flex gap-1 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-1">
          <button
            type="button"
            onClick={() => setStyleMode("monolith")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              styleMode === "monolith" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Monolith
          </button>
          <button
            type="button"
            onClick={() => setStyleMode("modular")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              styleMode === "modular" ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Modular Monolith ⭐
          </button>
          <button
            type="button"
            onClick={() => setStyleMode("microservices")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              styleMode === "microservices" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Microservices
          </button>
        </div>
      </div>

      {/* Structural Card */}
      <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5 mb-4">
        <div className="flex items-center justify-between mb-3 border-b border-[#e7e3da] pb-2">
          <div>
            <h5 className="font-bold text-base text-stone-900">{current.name}</h5>
            <span className="text-xs text-stone-500 font-medium">{current.subtitle}</span>
          </div>
          {styleMode === "modular" && (
            <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
              Recommended Starting Baseline
            </span>
          )}
        </div>

        {/* Visual Box Diagram */}
        <div className="space-y-2 mb-4">
          {current.diagram.map((d, di) => (
            <div key={di} className="rounded-xl border border-stone-300 bg-white p-3">
              <span className="font-mono text-[11px] font-bold text-stone-500 block mb-1.5">
                {d.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {d.items.map((item, ii) => (
                  <span
                    key={ii}
                    className="font-mono text-xs font-semibold px-2.5 py-1 rounded-lg bg-stone-100 text-stone-800 border border-stone-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pros & Cons */}
        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl bg-emerald-50/70 border border-emerald-200 p-3">
            <span className="font-bold text-emerald-900 block mb-1">Key Advantages</span>
            <ul className="space-y-1 text-emerald-800">
              {current.pros.map((p, pi) => (
                <li key={pi} className="flex items-start gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-rose-50/70 border border-rose-200 p-3">
            <span className="font-bold text-rose-900 block mb-1">Engineering Risks & Trade-offs</span>
            <ul className="space-y-1 text-rose-800">
              {current.cons.map((c, ci) => (
                <li key={ci} className="flex items-start gap-1.5">
                  <span className="text-rose-500 font-bold">✗</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-xl bg-orange-50 border border-orange-200 p-3 text-xs text-orange-950 flex items-center gap-2">
        <Sparkles size={16} className="text-[#f97316] shrink-0" />
        <span>
          <strong>Senior Architect Principle:</strong> Do not adopt microservices to solve code-organization problems. Use a modular monolith first; split out independent services only when scaling metrics or organizational boundaries demand it.
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 5: SCALING ARCHITECTURES (Lesson 1.5)                              */
/* -------------------------------------------------------------------------- */
export function ScalingArchitectureDiagram() {
  const [scalingType, setScalingType] = useState("horizontal"); // 'vertical' | 'horizontal'

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Scalability Engineering
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Vertical Scaling (Scale Up) vs. Horizontal Scaling (Scale Out)
          </h4>
        </div>

        <div className="flex gap-1.5 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-1">
          <button
            type="button"
            onClick={() => setScalingType("vertical")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              scalingType === "vertical" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Vertical Scaling (Scale Up)
          </button>
          <button
            type="button"
            onClick={() => setScalingType("horizontal")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              scalingType === "horizontal" ? "bg-[#f97316] text-white shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Horizontal Scaling (Scale Out) ⭐
          </button>
        </div>
      </div>

      {scalingType === "vertical" ? (
        <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h5 className="font-bold text-sm sm:text-base text-stone-900">Vertical Scaling: Upgrading Single Node</h5>
              <span className="text-xs text-stone-500">Adding CPU, RAM, and IOPS to a lone machine</span>
            </div>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
              SPOF Danger
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
            <div className="rounded-xl border border-stone-300 bg-white p-3 text-center w-28">
              <span className="font-mono text-[10px] text-stone-400 block font-bold">Small</span>
              <Server size={20} className="mx-auto text-stone-600 my-1" />
              <span className="text-[11px] font-bold text-stone-800">2 vCPU / 4GB</span>
            </div>
            <ArrowRight size={20} className="text-orange-500 hidden sm:block" />
            <ArrowDown size={20} className="text-orange-500 sm:hidden" />
            <div className="rounded-xl border border-stone-400 bg-white p-3 text-center w-36 shadow-xs">
              <span className="font-mono text-[10px] text-stone-400 block font-bold">Medium</span>
              <Server size={24} className="mx-auto text-stone-800 my-1" />
              <span className="text-xs font-bold text-stone-900">8 vCPU / 32GB</span>
            </div>
            <ArrowRight size={20} className="text-orange-500 hidden sm:block" />
            <ArrowDown size={20} className="text-orange-500 sm:hidden" />
            <div className="rounded-xl border-2 border-rose-400 bg-white p-4 text-center w-44 shadow-sm">
              <span className="font-mono text-[10px] text-rose-600 block font-bold">Hardware Ceiling</span>
              <Server size={32} className="mx-auto text-rose-600 my-1" />
              <span className="text-xs font-black text-rose-950">64 vCPU / 256GB</span>
              <span className="text-[10px] text-rose-700 block mt-1 font-semibold">Exorbitant Cost / SPOF</span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 text-xs mt-4">
            <div className="rounded-xl bg-white border border-[#e7e3da] p-3">
              <span className="font-bold text-stone-900 block mb-1">When to use Vertical Scaling</span>
              <p className="text-stone-600 leading-relaxed">
                Relational databases (PostgreSQL, MySQL) where read/write locks, ACID consistency, and table indexing are simplest on a single high-spec box before partitioning.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-rose-200 p-3">
              <span className="font-bold text-rose-900 block mb-1">Architectural Limitations</span>
              <p className="text-stone-600 leading-relaxed">
                Requires downtime to resize VM hardware; hits physical motherboards limits; leaves a single point of failure (if hardware fails, entire system goes dark).
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-orange-200 bg-orange-50/40 p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h5 className="font-bold text-sm sm:text-base text-stone-900">Horizontal Scaling: Stateless Clustered Pool</h5>
              <span className="text-xs text-stone-600">Distributing traffic across N identical stateless instances</span>
            </div>
            <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
              High Availability
            </span>
          </div>

          <div className="rounded-xl border border-stone-200 bg-white p-4 mb-4">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="rounded-lg bg-orange-100 border border-orange-300 px-4 py-1.5 text-center">
                <span className="font-mono text-[10px] text-orange-800 font-bold block uppercase">Load Balancer</span>
                <span className="text-xs font-bold text-stone-900">ALB / Nginx (Round-Robin)</span>
              </div>
            </div>

            <div className="flex justify-center text-orange-500 font-bold text-xs mb-3">
              <span>↓↓↓ Health-Checked Traffic Distribution ↓↓↓</span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="rounded-xl border border-stone-300 bg-stone-50 p-2.5">
                <span className="font-mono text-[10px] text-stone-400 block font-bold">Node 1</span>
                <Server size={18} className="mx-auto text-stone-700 my-1" />
                <span className="text-[11px] font-bold text-stone-900">Stateless App</span>
              </div>
              <div className="rounded-xl border border-stone-300 bg-stone-50 p-2.5">
                <span className="font-mono text-[10px] text-stone-400 block font-bold">Node 2</span>
                <Server size={18} className="mx-auto text-stone-700 my-1" />
                <span className="text-[11px] font-bold text-stone-900">Stateless App</span>
              </div>
              <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-2.5">
                <span className="font-mono text-[10px] text-emerald-600 block font-bold">Node N (Auto)</span>
                <Server size={18} className="mx-auto text-emerald-700 my-1" />
                <span className="text-[11px] font-bold text-stone-900">Auto-Scaled</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white border border-stone-200 p-3 text-xs text-stone-700 leading-relaxed">
            <strong>Key Requirement for Horizontal Scale:</strong> Application servers must be <em>stateless</em>. User session state, tokens, and temporary files must live in distributed shared caches (Redis) or databases, allowing any server to fulfill any user request.
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 6: CAPACITY FLOW DIAGRAM (Lesson 1.6)                              */
/* -------------------------------------------------------------------------- */
export function CapacityFlowDiagram({ setActiveTab }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Quantitative Architecture Model
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Workload Pipeline: From Users to Bandwidth & Storage
          </h4>
        </div>

        {setActiveTab && (
          <button
            type="button"
            onClick={() => setActiveTab("interactive")}
            className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#f97316] text-white text-xs font-bold hover:bg-[#ea580c] transition cursor-pointer"
          >
            <span>Open Interactive Sizing Tool</span>
            <ArrowRight size={13} />
          </button>
        )}
      </div>

      <div className="grid gap-3 sm:grid-cols-5 text-center text-xs">
        <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
          <span className="font-mono text-[10px] text-stone-400 font-bold block uppercase">Input</span>
          <span className="text-base font-black text-stone-900 font-mono mt-1 block">200k DAU</span>
          <span className="text-[11px] text-stone-500">50 reqs / user / day</span>
        </div>

        <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
          <span className="font-mono text-[10px] text-stone-400 font-bold block uppercase">Total Volume</span>
          <span className="text-base font-black text-stone-900 font-mono mt-1 block">10M Reqs</span>
          <span className="text-[11px] text-stone-500">Daily API queries</span>
        </div>

        <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
          <span className="font-mono text-[10px] text-stone-400 font-bold block uppercase">RPS (86.4k s)</span>
          <span className="text-base font-black text-stone-900 font-mono mt-1 block">116 Avg</span>
          <span className="text-[11px] text-stone-500">579 Peak (5× Surge)</span>
        </div>

        <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-3">
          <span className="font-mono text-[10px] text-orange-700 font-bold block uppercase">Bandwidth</span>
          <span className="text-base font-black text-[#ea580c] font-mono mt-1 block">50 GB/day</span>
          <span className="text-[11px] text-orange-900">5 KB avg payload</span>
        </div>

        <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
          <span className="font-mono text-[10px] text-stone-400 font-bold block uppercase">Logs / Year</span>
          <span className="text-base font-black text-stone-900 font-mono mt-1 block">3.65 TB</span>
          <span className="text-[11px] text-stone-500">1 KB / req retained</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 7: CRITICAL PATH BOTTLENECK ANALYSIS (Lesson 1.7)                  */
/* -------------------------------------------------------------------------- */
export function BottleneckAnalysisDiagram() {
  const [optimized, setOptimized] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Critical Path Analysis
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Request Waterfall: Isolating the Primary Latency Bottleneck
          </h4>
        </div>

        <button
          type="button"
          onClick={() => setOptimized(!optimized)}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition border cursor-pointer ${
            optimized
              ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
              : "bg-[#faf8f4] text-stone-700 border-[#e7e3da] hover:border-orange-300"
          }`}
        >
          <RefreshCw size={12} className={optimized ? "rotate-180" : ""} />
          <span>{optimized ? "Showing: Optimized (45ms)" : "Show Architecture Optimization"}</span>
        </button>
      </div>

      <div className="space-y-3 mb-4">
        {/* Step 1: Ingress */}
        <div>
          <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
            <span>Reverse Proxy & Ingress</span>
            <span className="font-mono">10 ms</span>
          </div>
          <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
            <div className="bg-stone-500 h-2.5 rounded-full" style={{ width: "8%" }} />
          </div>
        </div>

        {/* Step 2: Database */}
        <div>
          <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
            <span>Database Query (Lessons & Enrolled State)</span>
            <span className="font-mono">{optimized ? "5 ms (Redis Cached)" : "120 ms (PostgreSQL Scan)"}</span>
          </div>
          <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-2.5 rounded-full transition-all duration-500 ${
                optimized ? "bg-emerald-500 w-[8%]" : "bg-amber-500 w-[36%]"
              }`}
            />
          </div>
        </div>

        {/* Step 3: 3rd Party Recommendation API (THE BOTTLENECK) */}
        <div>
          <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
            <span>External AI Recommendation API</span>
            <span className="font-mono text-rose-600 font-bold">
              {optimized ? "0 ms (Decoupled to Async Worker)" : "180 ms (⚠️ Critical Bottleneck)"}
            </span>
          </div>
          <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-2.5 rounded-full transition-all duration-500 ${
                optimized ? "bg-emerald-500 w-0" : "bg-rose-500 w-[54%]"
              }`}
            />
          </div>
        </div>

        {/* Step 4: Serialization */}
        <div>
          <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
            <span>Serialization & Compression</span>
            <span className="font-mono">{optimized ? "10 ms" : "20 ms"}</span>
          </div>
          <div className="w-full bg-stone-100 rounded-full h-2.5 overflow-hidden">
            <div className="bg-stone-500 h-2.5 rounded-full" style={{ width: "6%" }} />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3 text-xs flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="font-bold text-stone-900 block">Total Critical Path Latency:</span>
          <span className="text-stone-600">
            {optimized
              ? "Reduced from 330ms to 25ms by caching DB reads and decoupling non-critical AI recommendations."
              : "330ms (Dominated by the 180ms external synchronous network call)."}
          </span>
        </div>
        <span
          className={`font-mono font-black text-sm px-3 py-1 rounded-lg ${
            optimized ? "bg-emerald-100 text-emerald-800" : "bg-rose-100 text-rose-800"
          }`}
        >
          {optimized ? "25 ms Total (13× Faster)" : "330 ms Total"}
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 8: FAILURE RESILIENCE & CIRCUIT BREAKERS (Lesson 1.8)              */
/* -------------------------------------------------------------------------- */
export function FailureResilienceDiagram() {
  const [activeFailureTab, setActiveFailureTab] = useState("circuit"); // 'circuit' | 'idempotency'

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Distributed Resilience Patterns
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Circuit Breakers & Idempotency Key Protocols
          </h4>
        </div>

        <div className="flex gap-1.5 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-1">
          <button
            type="button"
            onClick={() => setActiveFailureTab("circuit")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeFailureTab === "circuit" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Circuit Breaker States
          </button>
          <button
            type="button"
            onClick={() => setActiveFailureTab("idempotency")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeFailureTab === "idempotency" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Idempotent Retries
          </button>
        </div>
      </div>

      {activeFailureTab === "circuit" ? (
        <div className="grid gap-3 sm:grid-cols-3 text-xs">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
              1. CLOSED (Normal)
            </span>
            <span className="text-sm font-bold text-stone-900 block my-1">100% Traffic Passed</span>
            <p className="text-stone-600 leading-relaxed">
              All requests flow to downstream dependency. Error rate is monitored (&lt; 5%).
            </p>
          </div>

          <div className="rounded-xl border border-rose-300 bg-rose-50/60 p-4 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-700 block">
              2. OPEN (Tripped)
            </span>
            <span className="text-sm font-bold text-stone-900 block my-1">Fast Fail / Fallbacks</span>
            <p className="text-stone-600 leading-relaxed">
              Error threshold exceeded. Breaker immediately returns cached fallbacks without hitting downstream service.
            </p>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-700 block">
              3. HALF-OPEN (Testing)
            </span>
            <span className="text-sm font-bold text-stone-900 block my-1">Canary Probing</span>
            <p className="text-stone-600 leading-relaxed">
              After timeout (e.g. 30s), lets 5% of requests probe downstream. If successful, resets to CLOSED.
            </p>
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-4 text-xs">
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-600 block mb-1">
            Idempotency Flow: Preventing Double Submissions
          </span>
          <p className="text-stone-700 leading-relaxed mb-3">
            When a mobile client experiences a network timeout during assignment submission:
          </p>
          <div className="space-y-2 font-mono text-[11px]">
            <div className="rounded-lg bg-white border border-stone-200 p-2.5">
              1. Client sends POST with header: <span className="text-orange-600 font-bold">Idempotency-Key: c9d7-4b2a</span>
            </div>
            <div className="rounded-lg bg-white border border-stone-200 p-2.5">
              2. Backend records unique key in DB / Redis with status <span className="text-blue-600 font-bold">IN_PROGRESS</span>
            </div>
            <div className="rounded-lg bg-white border border-stone-200 p-2.5">
              3. Transaction completes; result cached. If client retries due to dropped ACK packet, backend returns cached HTTP 200 without creating a duplicate record!
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 9: THE C4 MODEL HIERARCHY (Lesson 1.9)                             */
/* -------------------------------------------------------------------------- */
export function C4ModelHierarchyDiagram() {
  const [activeLevel, setActiveLevel] = useState(1);

  const levels = [
    {
      level: 1,
      name: "Level 1: System Context",
      audience: "Everyone (Product, Execs, Engineers)",
      scope: "High-level overview showing external users, third-party payment gateways, and system perimeter.",
      example: "Student & Instructor → [PrepSpaces Platform] → External Stripe / SendGrid.",
    },
    {
      level: 2,
      name: "Level 2: Containers",
      audience: "Architects & Engineers",
      scope: "The deployable units (applications, single-page apps, databases, object stores).",
      example: "[React Frontend SPA] → [Node.js Backend API] → [PostgreSQL DB] & [S3 Storage].",
    },
    {
      level: 3,
      name: "Level 3: Components",
      audience: "Software Developers",
      scope: "Structural building blocks inside an individual container (controllers, services, repositories).",
      example: "[Auth Controller] → [Course Catalog Service] → [Progress Repository].",
    },
    {
      level: 4,
      name: "Level 4: Code",
      audience: "Engineers writing algorithms",
      scope: "UML class diagrams, entity interfaces, and specific algorithmic logic.",
      example: "LessonSubmissionHandler implements ISubmissionPipeline.",
    },
  ];

  const current = levels.find((l) => l.level === activeLevel);

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            The C4 Diagramming Standard
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Hierarchical Software Architecture Zoom Levels
          </h4>
        </div>

        <span className="text-xs text-stone-500">Click a level to zoom</span>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4">
        {levels.map((l) => (
          <button
            key={l.level}
            type="button"
            onClick={() => setActiveLevel(l.level)}
            className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
              activeLevel === l.level
                ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold shadow-xs"
                : "border-[#e7e3da] bg-[#faf8f4] text-stone-600 hover:border-orange-200"
            }`}
          >
            <span className="block text-xs font-bold font-mono">Level {l.level}</span>
            <span className="block text-[10px] truncate">{l.name.split(":")[1]}</span>
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4 text-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-sm text-stone-900">{current.name}</span>
          <span className="font-mono text-[11px] text-stone-500">Audience: {current.audience}</span>
        </div>
        <p className="text-stone-700 leading-relaxed mb-3">{current.scope}</p>
        <div className="rounded-xl bg-white border border-[#e7e3da] p-3 font-mono text-[11px] text-stone-800">
          <span className="text-orange-600 font-bold block mb-1">Architecture Example:</span>
          {current.example}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 10: THE 11-STAGE SYSTEM DESIGN WORKFLOW (Lesson 1.10)              */
/* -------------------------------------------------------------------------- */
export function SystemDesignWorkflowDiagram() {
  const [selectedStage, setSelectedStage] = useState(0);

  const stages = [
    { num: 1, name: "Clarify Problem & Scope", deliverable: "Boundaries, Personas, Out-of-Scope list" },
    { num: 2, name: "Functional Requirements", deliverable: "Testable user capabilities and API behaviors" },
    { num: 3, name: "Quality Targets (SLOs)", deliverable: "p95/p99 latency targets, availability nines" },
    { num: 4, name: "Workload Estimation", deliverable: "DAU, average & peak RPS, network bandwidth, storage" },
    { num: 5, name: "High-Level Architecture", deliverable: "C4 Context and Container topology diagrams" },
    { num: 6, name: "APIs & Data Contracts", deliverable: "REST/gRPC endpoints, schemas, indexes" },
    { num: 7, name: "Bottlenecks & SPOFs", deliverable: "Little's Law concurrency, partial failure analysis" },
    { num: 8, name: "Trade-offs & ADRs", deliverable: "Architecture Decision Records comparing options" },
    { num: 9, name: "Prototype Proof-of-Concept", deliverable: "Representative benchmark code for critical path" },
    { num: 10, name: "Benchmarking & Chaos", deliverable: "Latency load curves and simulated partition tests" },
    { num: 11, name: "Architecture Review", deliverable: "Signed-off production spec with monitoring alerts" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Repeatable Engineering Methodology
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The 11-Stage End-to-End System Design Workflow
          </h4>
        </div>

        <span className="text-xs text-stone-500">Click a stage to inspect</span>
      </div>

      {/* Workflow Horizontal Scroll Strip */}
      <div className="flex gap-2 overflow-x-auto pb-3 mb-4">
        {stages.map((st, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedStage(idx)}
            className={`shrink-0 rounded-xl px-3 py-2 text-left border transition cursor-pointer ${
              selectedStage === idx
                ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold shadow-xs"
                : "border-[#e7e3da] bg-[#faf8f4] text-stone-700 hover:border-orange-200"
            }`}
          >
            <span className="block font-mono text-[10px] text-orange-600">Stage {st.num}</span>
            <span className="block text-xs font-bold whitespace-nowrap">{st.name}</span>
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-4 text-xs">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-700 block mb-1">
          Stage {stages[selectedStage].num}: {stages[selectedStage].name}
        </span>
        <div className="rounded-xl bg-white border border-orange-200/80 p-3 mt-2">
          <span className="font-bold text-stone-900 block mb-1">Required Engineering Deliverable:</span>
          <p className="text-stone-700 leading-relaxed font-mono text-xs">
            {stages[selectedStage].deliverable}
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 11: PRACTICAL LAB TOPOLOGY (Tab 5 Step 2)                          */
/* -------------------------------------------------------------------------- */
export function LabArchitectureTopologyDiagram() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 shadow-xs">
      <div className="mb-3 flex items-center justify-between border-b border-[#e7e3da] pb-2">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#ea580c]">
          Lab Capstone: Reference Architecture Topology
        </span>
        <span className="text-[11px] font-mono text-stone-500">Modular Monolith V1</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-4 text-center text-xs">
        <div className="rounded-xl border border-stone-200 bg-[#faf8f4] p-3">
          <span className="font-mono text-[10px] text-stone-400 font-bold block uppercase">Edge / Client</span>
          <span className="text-xs font-bold text-stone-900 block mt-1">Browser & Mobile</span>
          <span className="text-[10px] text-stone-500">CloudFront CDN</span>
        </div>

        <div className="rounded-xl border border-orange-200 bg-orange-50 p-3">
          <span className="font-mono text-[10px] text-orange-700 font-bold block uppercase">Compute Tier</span>
          <span className="text-xs font-bold text-orange-950 block mt-1">Modular App Process</span>
          <span className="text-[10px] text-stone-500">Node.js / Express</span>
        </div>

        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3">
          <span className="font-mono text-[10px] text-emerald-700 font-bold block uppercase">Relational DB</span>
          <span className="text-xs font-bold text-emerald-950 block mt-1">PostgreSQL Primary</span>
          <span className="text-[10px] text-stone-500">Multi-AZ Standby</span>
        </div>

        <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
          <span className="font-mono text-[10px] text-blue-700 font-bold block uppercase">Async & Media</span>
          <span className="text-xs font-bold text-blue-950 block mt-1">S3 + Redis BullMQ</span>
          <span className="text-[10px] text-stone-500">Pre-signed Uploads</span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CENTRAL DIAGRAM DISPATCHER                                                 */
/* -------------------------------------------------------------------------- */
export function VisualDiagramComponent({ type, _topic, setActiveTab }) {
  switch (type) {
    case "ten-design-areas":
      return <TenDesignAreasDiagram />;
    case "requirements-matrix":
      return <RequirementsMatrixDiagram />;
    case "high-level-architecture":
      return <HighLevelArchitectureDiagram />;
    case "architectural-styles-comparison":
      return <ArchitecturalStylesComparisonDiagram />;
    case "scaling-architecture":
      return <ScalingArchitectureDiagram />;
    case "capacity-flow-diagram":
      return <CapacityFlowDiagram setActiveTab={setActiveTab} />;
    case "bottleneck-analysis-diagram":
      return <BottleneckAnalysisDiagram />;
    case "failure-resilience-diagram":
      return <FailureResilienceDiagram />;
    case "c4-model-hierarchy":
      return <C4ModelHierarchyDiagram />;
    case "system-design-workflow":
      return <SystemDesignWorkflowDiagram />;
    default:
      return null;
  }
}
