import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

/* -------------------------------------------------------------------------- */
/* DIAGRAM 1: THE 7-STAGE REQUIREMENTS ENGINEERING PROCESS (Lesson 2.1)       */
/* -------------------------------------------------------------------------- */
export function RequirementsProcessDiagram() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: 1,
      title: "Identify Stakeholders",
      activity: "Discovery",
      desc: "Identify everyone who influences, uses, operates, pays for, regulates, or is affected by the system.",
      question: "Who are the students, instructors, admins, SREs, security engineers, and legal auditors?",
      output: "Stakeholder Map & Primary Goals Matrix",
    },
    {
      num: 2,
      title: "Elicit Needs",
      activity: "Elicitation",
      desc: "Gather candidate requirements using interviews, user observation, workshops, logs, and prototypes.",
      question: "What do users actually need versus what they initially ask for?",
      output: "Raw Candidate Requirements & User Stories",
    },
    {
      num: 3,
      title: "Analyze Requirements",
      activity: "Analysis",
      desc: "Examine requirements for feasibility, completeness, ambiguity, and technical viability.",
      question: "Are these requirements technically realistic and free of internal contradictions?",
      output: "Analyzed Requirements & Boundary Limits",
    },
    {
      num: 4,
      title: "Resolve Conflicts & Constraints",
      activity: "Negotiation",
      desc: "Address conflicting stakeholder demands (e.g., extreme availability vs launch budget).",
      question: "Which trade-offs must product, security, and infrastructure teams formally agree on?",
      output: "Resolved Trade-offs & Documented Constraints",
    },
    {
      num: 5,
      title: "Specify Requirements",
      activity: "Specification",
      desc: "Author clear, atomic, measurable, and verifiable requirement statements with acceptance criteria.",
      question: "How should requirements be formulated so engineers and QA interpret them identically?",
      output: "Formal Requirements Specification (ISO 29148 / RTM)",
    },
    {
      num: 6,
      title: "Validate with Stakeholders",
      activity: "Validation",
      desc: "Confirm with stakeholders that the specified requirements represent the right system.",
      question: "Does this specification genuinely solve the core business and user problems?",
      output: "Signed-off Requirements Baseline",
    },
    {
      num: 7,
      title: "Prioritize & Baseline",
      activity: "Management",
      desc: "Rank by business impact, risk, and cost using MoSCoW to control release scope.",
      question: "What must be delivered in V1 versus what is deferred to subsequent iterations?",
      output: "MoSCoW Baseline Scope & Release Criteria",
    },
  ];

  const current = stages[activeStage];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            CMU SEI & ISO 29148 Standard
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The 7-Stage Iterative Requirements Engineering Lifecycle
          </h4>
        </div>
        <span className="text-xs text-stone-500">Click a stage to inspect</span>
      </div>

      {/* Horizontal Stages Scroll Strip */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
        {stages.map((st, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveStage(idx)}
            className={`shrink-0 rounded-xl px-3 py-2 text-left border transition cursor-pointer ${
              activeStage === idx
                ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold shadow-xs"
                : "border-[#e7e3da] bg-[#faf8f4] text-stone-700 hover:border-orange-200"
            }`}
          >
            <span className="block font-mono text-[10px] text-orange-600">Stage {st.num}</span>
            <span className="block text-xs font-bold whitespace-nowrap">{st.title}</span>
          </button>
        ))}
      </div>

      {/* Detailed Stage Card */}
      <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-orange-700">
            Stage {current.num}: {current.title}
          </span>
          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-full bg-white border border-orange-200 text-orange-950">
            Activity: {current.activity}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-stone-800 font-medium mb-3">{current.desc}</p>

        <div className="grid gap-3 sm:grid-cols-2 text-xs">
          <div className="rounded-xl bg-white border border-orange-100 p-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
              Core Architectural Investigation
            </span>
            <p className="text-stone-700 leading-relaxed font-medium">"{current.question}"</p>
          </div>
          <div className="rounded-xl bg-white border border-emerald-200 p-3">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
              Deliverable Artifact
            </span>
            <p className="text-emerald-950 leading-relaxed font-semibold">{current.output}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 2: STAKEHOLDER DISCOVERY & 6 INVESTIGATION PATHS (Lesson 2.2)       */
/* -------------------------------------------------------------------------- */
export function StakeholderDiscoveryDiagram() {
  const [activePath, setActivePath] = useState(0);

  const paths = [
    {
      name: "Normal Path",
      color: "border-emerald-300 bg-emerald-50/70 text-emerald-950",
      accent: "bg-emerald-600",
      question: "What should happen when everything works as expected?",
      example: "Student clicks 'Submit Code' -> file uploads to S3 -> DB records submission timestamp -> confirmation UUID returned.",
    },
    {
      name: "Alternative Path",
      color: "border-blue-300 bg-blue-50/70 text-blue-950",
      accent: "bg-blue-600",
      question: "What if the user changes their mind or submits incomplete data?",
      example: "Student navigates away mid-upload or replaces previous submission before the deadline cutoff.",
    },
    {
      name: "Failure Path",
      color: "border-rose-300 bg-rose-50/70 text-rose-950",
      accent: "bg-rose-600",
      question: "What happens when a dependency fails, network drops, or times out?",
      example: "Database connection times out during write -> client retries with Idempotency-Key -> duplicate record prevented.",
    },
    {
      name: "Security Path",
      color: "border-stone-400 bg-stone-100 text-stone-900",
      accent: "bg-stone-800",
      question: "What happens if the requester is unauthenticated or unauthorized?",
      example: "Student modifies course ID parameter in API URL -> backend rejects with 403 Forbidden before querying data.",
    },
    {
      name: "Scale Path",
      color: "border-amber-300 bg-amber-50/70 text-amber-950",
      accent: "bg-amber-600",
      question: "How does system behavior change with 10x more users or heavy files?",
      example: "Class assignment deadline at 11:59 PM causes 10x traffic spike -> queue buffers asynchronous evaluation jobs.",
    },
    {
      name: "Recovery Path",
      color: "border-purple-300 bg-purple-50/70 text-purple-950",
      accent: "bg-purple-600",
      question: "What happens after a server crash, accidental deletion, or regional outage?",
      example: "Primary database instance fails in AZ-1 -> standby in AZ-2 automatically promoted with <60s RTO and zero data loss.",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Deep Discovery Framework
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The 6 Investigation Paths to Uncover Hidden Requirements
          </h4>
        </div>
        <span className="text-xs text-stone-500">Click a path to inspect questions</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
        {paths.map((p, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActivePath(idx)}
            className={`p-2.5 rounded-xl border text-center transition cursor-pointer ${
              activePath === idx
                ? `${p.color} font-bold shadow-xs scale-[1.02]`
                : "border-[#e7e3da] bg-[#faf8f4] text-stone-700 hover:border-orange-200"
            }`}
          >
            <span className="block text-xs truncate">{p.name}</span>
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-4 text-xs">
        <div className="flex items-center gap-2 mb-2">
          <span className={`h-2.5 w-2.5 rounded-full ${paths[activePath].accent}`} />
          <h5 className="font-bold text-sm text-stone-900">{paths[activePath].name} Investigation</h5>
        </div>
        <div className="rounded-xl bg-white border border-[#e7e3da] p-3 mb-2">
          <span className="font-mono text-[10px] text-stone-400 font-bold block uppercase mb-1">
            Question Every Senior Architect Must Ask
          </span>
          <p className="text-stone-900 font-medium text-xs leading-relaxed">
            "{paths[activePath].question}"
          </p>
        </div>
        <div className="rounded-xl bg-orange-50/70 border border-orange-200 p-3 text-stone-800">
          <span className="font-mono text-[10px] text-orange-700 font-bold block uppercase mb-1">
            Real Learning Platform Architecture Example
          </span>
          <p className="leading-relaxed">{paths[activePath].example}</p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 3: REQUIREMENTS CLASSIFICATION HIERARCHY (Lesson 2.3)              */
/* -------------------------------------------------------------------------- */
export function RequirementsClassificationDiagram() {
  const [selectedCategory, setSelectedCategory] = useState("nfr");

  const categories = {
    fr: {
      title: "Functional Requirements (WHAT)",
      subtitle: "Observable capabilities and direct system behaviors",
      items: [
        "Students can browse published courses and inspect structured lesson trees.",
        "Enrolled students can submit code assignments before the strict deadline cutoff.",
        "System records immutable assignment submission timestamps in UTC.",
        "Instructors can publish graded evaluations with feedback notes.",
      ],
      testMethod: "Unit tests, API integration tests, end-to-end Cypress user tests.",
    },
    nfr: {
      title: "Non-Functional Requirements (HOW WELL)",
      subtitle: "Measurable quality attributes, latency boundaries, and reliability SLOs",
      items: [
        "Performance: p95 API response time < 300ms under 1,050 peak RPS.",
        "Availability: 99.9% monthly uptime (~43.8 minutes allowed downtime/month).",
        "Durability: Zero data loss for acknowledged assignment submissions.",
        "Security: Student private submissions strictly isolated via server-side authorization checks.",
      ],
      testMethod: "Load testing (k6/JMeter), chaos injection, Multi-AZ failover drills.",
    },
    business: {
      title: "Business Requirements (WHY)",
      subtitle: "High-level organizational and economic objectives",
      items: [
        "Reduce customer support tickets regarding lost lesson progress by 40%.",
        "Launch the capstone assignment submission feature prior to the Fall academic term.",
        "Ensure monthly cloud infrastructure spend does not exceed the $2,500 budget.",
      ],
      testMethod: "Business KPI metrics, financial cloud billing alerts, analytics dashboards.",
    },
    constraints: {
      title: "System & Interface Constraints (BOUNDARIES)",
      subtitle: "Mandatory restrictions on technical and organizational solutions",
      items: [
        "Must run on existing Node.js backend runtime and PostgreSQL database cluster.",
        "External email provider rate limit of 500 emails/minute must never be exceeded.",
        "Media storage must comply with GDPR data residency mandates.",
      ],
      testMethod: "Architecture reviews, contract audits, schema migration validations.",
    },
  };

  const current = categories[selectedCategory];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Taxonomy of Specifications
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Requirements Classification Hierarchy
          </h4>
        </div>

        <div className="flex gap-1 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-1">
          {Object.entries({
            fr: "Functional",
            nfr: "Non-Functional ⭐",
            business: "Business",
            constraints: "Constraints",
          }).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedCategory(key)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                selectedCategory === key
                  ? "bg-[#f97316] text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4] p-5 text-xs">
        <div className="mb-3">
          <h5 className="font-bold text-sm sm:text-base text-stone-900">{current.title}</h5>
          <span className="text-stone-500 font-medium">{current.subtitle}</span>
        </div>

        <div className="space-y-2 mb-4">
          {current.items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 rounded-xl bg-white border border-[#e7e3da] p-3">
              <CheckCircle2 size={16} className="text-[#f97316] shrink-0 mt-0.5" />
              <span className="text-stone-800 leading-relaxed font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl bg-white border border-stone-200 p-3 flex items-center justify-between gap-3">
          <div>
            <span className="font-mono text-[10px] text-stone-400 font-bold uppercase block">
              Validation & Verification Method
            </span>
            <span className="text-xs font-bold text-stone-800">{current.testMethod}</span>
          </div>
          <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200">
            ISO 29148 Verifiable
          </span>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 4: REQUIREMENTS TRACEABILITY MATRIX (RTM) (Lesson 2.4)             */
/* -------------------------------------------------------------------------- */
export function RequirementsTraceabilityDiagram() {
  const rtmData = [
    {
      id: "FR-01",
      req: "Student submits assignment file",
      design: "Pre-signed S3 URL + Upload Webhook",
      verification: "API Integration Test",
      status: "Verified",
    },
    {
      id: "SEC-01",
      req: "Strict private submission authorization",
      design: "Server-side JWT claims check",
      verification: "Negative Auth Tests",
      status: "Verified",
    },
    {
      id: "PERF-01",
      req: "p95 API latency < 300ms @ 1,050 RPS",
      design: "Redis cache + indexed queries",
      verification: "Distributed Load Test",
      status: "In Progress",
    },
    {
      id: "REL-01",
      req: "Zero data loss under AZ outage",
      design: "Multi-AZ synchronous DB replication",
      verification: "Chaos Failover Drill",
      status: "Approved",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Traceability & Quality Assurance
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Requirements Traceability Matrix (RTM)
          </h4>
        </div>
        <span className="text-xs text-stone-500">Links requirements to architecture & tests</span>
      </div>

      <div className="overflow-x-auto rounded-xl border border-[#e7e3da]">
        <table className="w-full text-left text-xs">
          <thead className="bg-stone-100 font-semibold text-stone-700">
            <tr>
              <th className="p-3 font-mono">Req ID</th>
              <th className="p-3">Requirement Statement</th>
              <th className="p-3">Architectural Design Element</th>
              <th className="p-3">Verification Evidence</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#e7e3da]">
            {rtmData.map((row, idx) => (
              <tr key={idx} className="hover:bg-orange-50/40 transition">
                <td className="p-3 font-mono font-bold text-orange-600">{row.id}</td>
                <td className="p-3 font-medium text-stone-900">{row.req}</td>
                <td className="p-3 text-stone-700 font-mono text-[11px]">{row.design}</td>
                <td className="p-3 text-stone-600">{row.verification}</td>
                <td className="p-3 text-center">
                  <span
                    className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      row.status === "Verified"
                        ? "bg-emerald-100 text-emerald-800"
                        : row.status === "In Progress"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 rounded-xl bg-[#faf8f4] border border-[#e7e3da] p-3 text-xs text-stone-600">
        <strong>Why RTM is Mandatory:</strong> When an engineer modifies the database schema or changes caching policies, the RTM immediately highlights which business requirements and automated tests are impacted.
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 5: CHANGE MANAGEMENT WORKFLOW (Lesson 2.5)                         */
/* -------------------------------------------------------------------------- */
export function ChangeManagementWorkflowDiagram() {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    { num: 1, name: "Proposed Change", action: "Product requests public course preview feature without requiring user login." },
    { num: 2, name: "Identify Motivation", action: "Increase top-of-funnel student signup conversion by 25%." },
    { num: 3, name: "Assess Cost & Risk", action: "Public caching will spike anonymous GET requests by ~400 RPS; unauthenticated API endpoints need aggressive rate limiting." },
    { num: 4, name: "Trace Affected Components", action: "CloudFront CDN caching rules, Course API endpoint authentication middleware, Redis edge cache." },
    { num: 5, name: "Approve / Reject / Defer", action: "Architecture and security sign off on conditional approval with CloudFront CDN edge shielding." },
    { num: 6, name: "Update Scope & Spec", action: "PRD and RTM updated with anonymous preview rate limit specifications." },
    { num: 7, name: "Update Tests & Deploy", action: "Author k6 anonymous load tests and automated CORS penetration tests." },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Engineering Governance
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Structured Scope & Architectural Change Workflow
          </h4>
        </div>
        <span className="text-xs text-stone-500">Prevents uncontrolled scope creep</span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
        {steps.map((st, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setSelectedStep(idx)}
            className={`shrink-0 rounded-xl px-3 py-2 text-left border transition cursor-pointer ${
              selectedStep === idx
                ? "border-[#f97316] bg-orange-50 text-orange-950 font-bold shadow-xs"
                : "border-[#e7e3da] bg-[#faf8f4] text-stone-700 hover:border-orange-200"
            }`}
          >
            <span className="block font-mono text-[10px] text-orange-600">Step {st.num}</span>
            <span className="block text-xs font-bold whitespace-nowrap">{st.name}</span>
          </button>
        ))}
      </div>

      <div className="rounded-2xl border border-orange-200 bg-orange-50/70 p-4 text-xs">
        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-orange-700 block mb-1">
          Step {steps[selectedStep].num}: {steps[selectedStep].name}
        </span>
        <div className="rounded-xl bg-white border border-orange-200/80 p-3 mt-2">
          <span className="font-bold text-stone-900 block mb-1">Real Learning Platform Case Example:</span>
          <p className="text-stone-700 leading-relaxed font-mono text-xs">
            {steps[selectedStep].action}
          </p>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 6: WORKLOAD PROFILE & REQUEST BREAKDOWN (Lesson 2.8)               */
/* -------------------------------------------------------------------------- */
export function WorkloadProfileDiagram() {
  const journeys = [
    {
      name: "Course & Lesson Reads",
      share: 55,
      peakRps: 573,
      dominant: "Read & serialize lesson content",
      resource: "Database read replicas, Redis cache, CDN",
      color: "bg-orange-500",
    },
    {
      name: "Auth & Profiles",
      share: 25,
      peakRps: 260,
      dominant: "JWT token verification & user metadata",
      resource: "Auth microservice, DB indexed lookups",
      color: "bg-amber-500",
    },
    {
      name: "Progress Writes",
      share: 15,
      peakRps: 156,
      dominant: "Persist lesson progress events",
      resource: "PostgreSQL write transactions, WAL logs",
      color: "bg-emerald-500",
    },
    {
      name: "Assignment Operations",
      share: 5,
      peakRps: 52,
      dominant: "Submit metadata & file uploads",
      resource: "S3 pre-signed URLs, async BullMQ workers",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            Traffic Distribution Model
          </span>
          <h4 className="text-base font-bold text-stone-900">
            Workload Journey Breakdown & Resource Pressure
          </h4>
        </div>
        <span className="text-xs text-stone-500">Based on 1,042 Peak RPS</span>
      </div>

      {/* Stacked Percentage Bar */}
      <div className="mb-4">
        <div className="flex h-4 w-full overflow-hidden rounded-full border border-stone-200">
          {journeys.map((j, idx) => (
            <div
              key={idx}
              className={`${j.color} transition-all duration-500`}
              style={{ width: `${j.share}%` }}
              title={`${j.name}: ${j.share}%`}
            />
          ))}
        </div>
        <div className="mt-2 flex flex-wrap justify-between gap-2 text-[11px] text-stone-600">
          {journeys.map((j, idx) => (
            <div key={idx} className="flex items-center gap-1.5 font-medium">
              <span className={`h-2.5 w-2.5 rounded-full ${j.color}`} />
              <span>
                {j.name} ({j.share}%)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Journey Detail Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs">
        {journeys.map((j, idx) => (
          <div key={idx} className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-stone-900">{j.name}</span>
                <span className="font-mono font-bold text-orange-600">{j.peakRps} RPS</span>
              </div>
              <p className="text-stone-600 text-[11px] leading-relaxed mb-2">{j.dominant}</p>
            </div>
            <div className="pt-2 border-t border-[#e7e3da] text-[10px] text-stone-500 font-mono">
              <span className="font-bold text-stone-700 block">Critical Resource:</span>
              <span>{j.resource}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 7: THE 9-STEP WORKED CAPACITY MODEL (Lesson 2.10)                  */
/* -------------------------------------------------------------------------- */
export function WorkedCapacityModelDiagram() {
  const steps = [
    { num: 1, title: "Daily Volume", val: "15,000,000 requests", math: "250,000 DAU × 60 req/user/day" },
    { num: 2, title: "Average Demand", val: "173.6 RPS", math: "15,000,000 / 86,400 seconds" },
    { num: 3, title: "Peak Target", val: "1,042 Peak RPS", math: "173.6 RPS × 6× burst multiplier" },
    { num: 4, title: "Daily Egress", val: "300 GB / day", math: "15M reqs × 20 KB avg payload" },
    { num: 5, title: "Concurrency (Little's Law)", val: "261 in-flight reqs", math: "L = 1,042 RPS × 0.250s latency" },
    { num: 6, title: "Annual Storage", val: "1.23 TB / year", math: "2.25M records/day × 1.5 KB × 365" },
    { num: 7, title: "Instance Sizing", val: "162.5 RPS / instance", math: "250 tested RPS × 65% design headroom" },
    { num: 8, title: "Base Compute", val: "7 instances", math: "⌈1,042 RPS / 162.5 RPS⌉ = 7" },
    { num: 9, title: "N+1 Resilient Fleet", val: "8 instances", math: "7 + 1 standby (7 survive 1 failure = 1,138 RPS)" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            End-to-End Mathematical Derivation
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The 9-Step Worked Capacity Model (250k DAU Baseline)
          </h4>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          N+1 Single-Failure Resilient
        </span>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-3 text-xs">
        {steps.map((st) => (
          <div key={st.num} className="rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center text-[10px] text-stone-400 font-mono font-bold mb-1">
                <span>STEP {st.num}</span>
                <span className="text-orange-600 font-bold">{st.title}</span>
              </div>
              <span className="text-sm font-black text-stone-900 font-mono block mb-1">{st.val}</span>
            </div>
            <span className="text-[11px] text-stone-500 font-mono pt-1 border-t border-stone-200/80">
              {st.math}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* DIAGRAM 8: LOAD-TESTING LIFECYCLE (Lesson 2.12)                            */
/* -------------------------------------------------------------------------- */
export function LoadTestingLifecycleDiagram() {
  const [activeCycle, setActiveCycle] = useState("types"); // 'types' | 'phases'

  const testTypes = [
    {
      name: "Load Testing",
      desc: "Validates system behavior under expected normal peak demand (1,042 RPS).",
      goal: "Confirm p95 latency stays under 300ms.",
      color: "border-emerald-300 bg-emerald-50",
    },
    {
      name: "Stress Testing",
      desc: "Pushes workload past peak (1,500 - 2,500 RPS) until saturation.",
      goal: "Find failure boundaries and memory breaking points.",
      color: "border-amber-300 bg-amber-50",
    },
    {
      name: "Spike Testing",
      desc: "Simulates sudden 10x traffic surges within 3 seconds (e.g., class deadline).",
      goal: "Verify autoscaling delay buffer and queue absorbs surge.",
      color: "border-rose-300 bg-rose-50",
    },
    {
      name: "Soak Testing",
      desc: "Sustains steady-state load over 12 to 24 continuous hours.",
      goal: "Detect slow memory leaks, connection leaks, and disk exhaustion.",
      color: "border-blue-300 bg-blue-50",
    },
    {
      name: "Resilience / Chaos",
      desc: "Terminates compute nodes or simulates AZ network partitions during load.",
      goal: "Verify automated N+1 failover with zero dropped transactions.",
      color: "border-purple-300 bg-purple-50",
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-xs">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-[#e7e3da] pb-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
            AWS & Google SRE Best Practice
          </span>
          <h4 className="text-base font-bold text-stone-900">
            The Complete Load-Testing & Verification Suite
          </h4>
        </div>

        <div className="flex gap-1.5 rounded-xl border border-[#e7e3da] bg-[#faf8f4] p-1">
          <button
            type="button"
            onClick={() => setActiveCycle("types")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeCycle === "types" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            5 Test Methodologies
          </button>
          <button
            type="button"
            onClick={() => setActiveCycle("phases")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
              activeCycle === "phases" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600 hover:text-stone-900"
            }`}
          >
            Verification Workflow
          </button>
        </div>
      </div>

      {activeCycle === "types" ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 text-xs">
          {testTypes.map((t, idx) => (
            <div key={idx} className={`rounded-xl border p-3 flex flex-col justify-between ${t.color}`}>
              <div>
                <span className="font-bold text-stone-900 block mb-1">{t.name}</span>
                <p className="text-stone-700 leading-relaxed mb-2 text-[11px]">{t.desc}</p>
              </div>
              <div className="pt-2 border-t border-stone-200 text-[10px] text-stone-800 font-medium">
                <span className="font-bold block text-stone-500 uppercase">Target:</span>
                <span>{t.goal}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl bg-[#faf8f4] border border-[#e7e3da] p-4 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 text-center font-mono">
            <span className="px-2.5 py-1.5 rounded-lg bg-white border border-stone-200">1. Define Scenarios</span>
            <span className="text-orange-500 font-bold">→</span>
            <span className="px-2.5 py-1.5 rounded-lg bg-white border border-stone-200">2. Generate Traffic</span>
            <span className="text-orange-500 font-bold">→</span>
            <span className="px-2.5 py-1.5 rounded-lg bg-white border border-stone-200">3. Profile Bottlenecks</span>
            <span className="text-orange-500 font-bold">→</span>
            <span className="px-2.5 py-1.5 rounded-lg bg-white border border-stone-200">4. Retest at Peak</span>
            <span className="text-orange-500 font-bold">→</span>
            <span className="px-2.5 py-1.5 rounded-lg bg-orange-100 text-orange-950 font-bold border border-orange-300">
              5. Baseline Capacity
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CENTRAL DISPATCHER FOR MODULE 2 DIAGRAMS                                   */
/* -------------------------------------------------------------------------- */
export function VisualDiagramComponentModule2({ type }) {
  switch (type) {
    case "requirements-process":
      return <RequirementsProcessDiagram />;
    case "stakeholder-discovery":
      return <StakeholderDiscoveryDiagram />;
    case "requirements-classification":
      return <RequirementsClassificationDiagram />;
    case "requirements-traceability":
      return <RequirementsTraceabilityDiagram />;
    case "change-management":
      return <ChangeManagementWorkflowDiagram />;
    case "workload-profile":
      return <WorkloadProfileDiagram />;
    case "worked-capacity-model":
      return <WorkedCapacityModelDiagram />;
    case "load-testing-lifecycle":
      return <LoadTestingLifecycleDiagram />;
    default:
      return null;
  }
}
