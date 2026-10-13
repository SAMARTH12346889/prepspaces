import React, { useState } from "react";
import {
  ShieldCheck,
  ShieldAlert,
  Lock,
  Unlock,
  Key,
  Database,
  Server,
  Layers,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  RotateCcw,
  Code2,
  Terminal,
  User,
  Users,
  Building,
  Eye,
  EyeOff,
  Filter,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 1: MULTI-TENANT ISOLATION ARCHITECTURE EXPLORER
 * Compares Strategy A (Shared Tables with RLS), Strategy B (Separate Schemas),
 * and Strategy C (Separate Databases) with live cost, complexity & isolation metrics.
 * ---------------------------------------------------------------------------
 */
export function TenantIsolationDiagram() {
  const [selectedStrategy, setSelectedStrategy] = useState("shared-tables");

  const strategies = {
    "shared-tables": {
      name: "Strategy A: Shared Database, Shared Tables (Row-Level Security)",
      cost: "Lowest ($)",
      complexity: "Low Initially / High at scale without RLS",
      isolationLevel: "Logical (Row-Level Security)",
      risk: "Risk of forgotten tenant filter in raw queries (mitigated by DB RLS)",
      restoreEase: "Complex (Requires tenant-level logical restore from dump)",
      description:
        "All tenants share the identical relational tables. Every row includes a tenant_id foreign key. PostgreSQL Row-Level Security (RLS) dynamically filters rows based on session context (app.tenant_id).",
      sqlSnippet: `-- Every table has tenant_id discriminator
CREATE TABLE candidate_interviews (
  interview_id UUID PRIMARY KEY,
  tenant_id UUID NOT NULL REFERENCES tenants(id),
  candidate_id UUID NOT NULL,
  score INT
);

-- Enforce automatic isolation at database engine level
ALTER TABLE candidate_interviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY tenant_isolation_policy ON candidate_interviews
  USING (tenant_id = current_setting('app.tenant_id')::UUID);`,
    },
    "separate-schemas": {
      name: "Strategy B: Separate Schema per Tenant (Single Database Instance)",
      cost: "Moderate ($$)",
      complexity: "Moderate (Multi-schema migrations, connection routing)",
      isolationLevel: "Namespaced Schema Isolation",
      risk: "Search-path injection or cross-schema JOIN errors",
      restoreEase: "Moderate (Dump & restore specific schema: pg_dump -n tenant_a)",
      description:
        "A single PostgreSQL instance contains independent database schemas (e.g. tenant_stanford, tenant_meta). Each request sets search_path to the authenticated tenant schema.",
      sqlSnippet: `-- Tenant schemas inside one DB
CREATE SCHEMA tenant_stanford;
CREATE SCHEMA tenant_meta;

-- Routing query to specific tenant schema
SET search_path TO tenant_stanford, public;
SELECT * FROM interviews WHERE candidate_id = 'c123';`,
    },
    "separate-databases": {
      name: "Strategy C: Separate Database per Tenant (Dedicated DB / Instance)",
      cost: "Highest ($$$$)",
      complexity: "Highest (Dozens/hundreds of DB instances to patch and pool)",
      isolationLevel: "Physical / Hardware Isolation",
      risk: "Lowest cross-tenant risk; high operational management overhead",
      restoreEase: "Easiest (Direct Point-in-Time Recovery of tenant DB volume)",
      description:
        "Each enterprise customer receives a dedicated PostgreSQL instance or database cluster. Used for Tier-1 banking, healthcare (HIPAA), or government contracts demanding strict physical data residency.",
      sqlSnippet: `-- Dynamic connection pooler routes to dedicated DB
const tenantDb = connectionPoolManager.getPool(tenantId);
const result = await tenantDb.query(
  "SELECT * FROM interviews WHERE id = $1", 
  [interviewId]
);`,
    },
  };

  const curr = strategies[selectedStrategy];

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Architecture Topology Comparison
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Multi-Tenant Storage Isolation Strategies
          </h4>
        </div>
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-stone-200 text-xs">
          {[
            { id: "shared-tables", label: "Shared Tables (RLS)" },
            { id: "separate-schemas", label: "Separate Schemas" },
            { id: "separate-databases", label: "Dedicated Databases" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedStrategy(tab.id)}
              className={`px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                selectedStrategy === tab.id
                  ? "bg-stone-900 text-white shadow-xs"
                  : "text-stone-600 hover:text-stone-950"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Overview Card */}
      <div className="p-4 rounded-xl bg-white border border-stone-200 mb-4 space-y-2">
        <div className="flex items-center justify-between">
          <h5 className="font-bold text-stone-900 text-sm">{curr.name}</h5>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold">
            Isolation: {curr.isolationLevel}
          </span>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed">{curr.description}</p>
      </div>

      {/* Trade-off Matrix Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 text-xs font-mono">
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <span className="text-[10px] text-stone-400 block uppercase">Infrastructure Cost</span>
          <span className="text-sm font-bold text-stone-900">{curr.cost}</span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <span className="text-[10px] text-stone-400 block uppercase">Operational Complexity</span>
          <span className="text-sm font-bold text-stone-900">{curr.complexity}</span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <span className="text-[10px] text-stone-400 block uppercase">Cross-Tenant Risk</span>
          <span className="text-xs font-bold text-orange-700">{curr.risk}</span>
        </div>
        <div className="p-3 rounded-xl bg-white border border-stone-200">
          <span className="text-[10px] text-stone-400 block uppercase">Backup &amp; Restore</span>
          <span className="text-xs font-bold text-stone-800">{curr.restoreEase}</span>
        </div>
      </div>

      {/* Code Snippet Box */}
      <div className="rounded-xl bg-stone-900 text-stone-200 p-4 font-mono text-xs overflow-x-auto">
        <div className="flex items-center justify-between text-stone-400 pb-2 mb-2 border-b border-stone-800 text-[11px]">
          <span>SQL Implementation Blueprint</span>
          <span className="text-orange-400">PostgreSQL Engine</span>
        </div>
        <pre className="text-emerald-400 leading-relaxed">{curr.sqlSnippet}</pre>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 2: POSTGRESQL ROW-LEVEL SECURITY (RLS) SIMULATOR
 * Interactive terminal where the engineer toggles session tenant context
 * (app.tenant_id = 'college_A' vs 'company_B') and witnesses the database engine
 * transparently filtering rows without requiring application WHERE clauses.
 * ---------------------------------------------------------------------------
 */
export function PostgresRlsDiagram() {
  const [activeSessionTenant, setActiveSessionTenant] = useState("college_A");
  const [rlsEnabled, setRlsEnabled] = useState(true);

  // Full shared table in DB
  const rawDbTable = [
    { id: "inv_101", tenant: "college_A", candidate: "alice@stanford.edu", score: 94, role: "SWE Intern" },
    { id: "inv_102", tenant: "company_B", candidate: "bob@google.com", score: 88, role: "Staff Architect" },
    { id: "inv_103", tenant: "college_A", candidate: "charlie@stanford.edu", score: 79, role: "Backend Dev" },
    { id: "inv_104", tenant: "company_C", candidate: "diana@stripe.com", score: 91, role: "Security Eng" },
    { id: "inv_105", tenant: "company_B", candidate: "edward@amazon.com", score: 85, role: "DevOps Lead" },
  ];

  // Output rows filtered either by RLS policy or raw (if RLS disabled)
  const visibleRows = rlsEnabled
    ? rawDbTable.filter((r) => r.tenant === activeSessionTenant)
    : rawDbTable;

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            Database Security Simulator
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            PostgreSQL Row-Level Security (RLS) Runtime Policy Engine
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-xs font-mono font-bold cursor-pointer">
            <input
              type="checkbox"
              checked={rlsEnabled}
              onChange={(e) => setRlsEnabled(e.target.checked)}
              className="accent-orange-600 cursor-pointer"
            />
            <span>ENABLE ROW LEVEL SECURITY</span>
          </label>
        </div>
      </div>

      {/* Controls: Active Session Context */}
      <div className="p-4 rounded-xl bg-white border border-stone-200 mb-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold text-stone-900">
            Current Authenticated Session Context (<code className="font-mono text-orange-700">SET LOCAL app.tenant_id</code>):
          </span>
          <div className="flex items-center gap-2">
            {[
              { id: "college_A", label: "Tenant: college_A (Stanford)" },
              { id: "company_B", label: "Tenant: company_B (TechHire Inc)" },
              { id: "company_C", label: "Tenant: company_C (FinTech Global)" },
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveSessionTenant(t.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition cursor-pointer ${
                  activeSessionTenant === t.id
                    ? "bg-orange-600 text-white shadow-xs"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Query Preview */}
        <div className="p-3 rounded-lg bg-stone-900 text-emerald-400 font-mono text-xs">
          <div className="text-stone-400 text-[10px]">-- Backend executes standard unqualified query without WHERE tenant_id</div>
          <div>SET LOCAL app.tenant_id = &apos;{activeSessionTenant}&apos;;</div>
          <div>SELECT interview_id, candidate, score, role FROM candidate_interviews;</div>
        </div>
      </div>

      {/* Resulting Table Output */}
      <div className="rounded-xl border border-stone-200 bg-white overflow-hidden mb-3">
        <div className="p-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-xs font-bold text-stone-700">
          <span>Database Returned Rows ({visibleRows.length} rows returned)</span>
          <span
            className={`font-mono text-[11px] px-2 py-0.5 rounded ${
              rlsEnabled ? "bg-emerald-100 text-emerald-800" : "bg-red-100 text-red-800 font-bold"
            }`}
          >
            {rlsEnabled ? "Secure: Isolated by RLS Policy" : "CRITICAL LEAK: RLS Disabled, Data Leaked!"}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-stone-100/60 text-stone-600 text-[11px] border-b border-stone-200">
              <tr>
                <th className="p-2.5">ID</th>
                <th className="p-2.5">Tenant Owner</th>
                <th className="p-2.5">Candidate Email</th>
                <th className="p-2.5">Role</th>
                <th className="p-2.5">Score</th>
                <th className="p-2.5">Security Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {visibleRows.map((row) => {
                const isCrossTenant = row.tenant !== activeSessionTenant;
                return (
                  <tr
                    key={row.id}
                    className={isCrossTenant ? "bg-red-50 text-red-950 font-bold" : "hover:bg-stone-50"}
                  >
                    <td className="p-2.5 text-stone-600">{row.id}</td>
                    <td className="p-2.5 font-bold">{row.tenant}</td>
                    <td className="p-2.5">{row.candidate}</td>
                    <td className="p-2.5 text-stone-600">{row.role}</td>
                    <td className="p-2.5">{row.score} / 100</td>
                    <td className="p-2.5">
                      {isCrossTenant ? (
                        <span className="inline-flex items-center gap-1 text-red-600 text-[10px] font-bold">
                          <AlertTriangle size={12} /> LEAKED CROSS-TENANT DATA
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-emerald-600 text-[10px] font-bold">
                          <CheckCircle2 size={12} /> Authorized Tenant Row
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DIAGRAM 3: OWASP BOLA / IDOR EXPLOIT & DEFENSE VISUALIZER
 * Demonstrates an attacker attempting to access another organization's report
 * by modifying the URL ID parameter, contrasting insecure vs. secure handler.
 * ---------------------------------------------------------------------------
 */
export function IdorDefenseDiagram() {
  const [reportIdInput, setReportIdInput] = useState("5002");
  const [securityMode, setSecurityMode] = useState("secure"); // "insecure" | "secure"

  // Attacker identity
  const currentAttacker = {
    userId: "usr_alice",
    tenantId: "company_A",
    role: "recruiter",
  };

  // Database records
  const reportsDatabase = {
    "5001": { id: "5001", tenantId: "company_A", candidate: "john@doe.com", score: 87, notes: "Strong Python skills." },
    "5002": { id: "5002", tenantId: "company_B", candidate: "secret_ceo_hire@target.com", score: 99, notes: "Confidential executive interview report." },
  };

  const targetReport = reportsDatabase[reportIdInput];

  let outcome = null;
  if (!targetReport) {
    outcome = { status: 404, message: "Report Not Found", data: null, color: "text-stone-500" };
  } else if (securityMode === "insecure") {
    outcome = {
      status: 200,
      message: "BOLA / IDOR EXPLOIT SUCCEEDED! Cross-tenant report exposed.",
      data: targetReport,
      color: "text-red-700 bg-red-50 border-red-300",
    };
  } else {
    // Secure mode: check tenant ownership
    if (targetReport.tenantId === currentAttacker.tenantId) {
      outcome = {
        status: 200,
        message: "Access Granted: Report belongs to your organization.",
        data: targetReport,
        color: "text-emerald-700 bg-emerald-50 border-emerald-300",
      };
    } else {
      outcome = {
        status: 403,
        message: "403 FORBIDDEN: Tenant mismatch blocked by authorization policy.",
        data: null,
        color: "text-emerald-800 bg-emerald-50 border-emerald-300",
      };
    }
  }

  return (
    <div className="rounded-2xl border border-stone-200 bg-[#faf8f4] p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 pb-3 mb-4">
        <div>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
            OWASP API Security Top 10 Defense
          </span>
          <h4 className="font-extrabold text-stone-900 text-sm">
            Broken Object-Level Authorization (BOLA / IDOR) Interactive Defense
          </h4>
        </div>
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-stone-200 text-xs">
          <button
            type="button"
            onClick={() => setSecurityMode("insecure")}
            className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
              securityMode === "insecure" ? "bg-red-600 text-white" : "text-stone-600"
            }`}
          >
            Vulnerable Backend
          </button>
          <button
            type="button"
            onClick={() => setSecurityMode("secure")}
            className={`px-3 py-1 rounded-lg font-bold transition cursor-pointer ${
              securityMode === "secure" ? "bg-emerald-600 text-white" : "text-stone-600"
            }`}
          >
            Hardened Backend (Tenant-Scoped)
          </button>
        </div>
      </div>

      {/* Exploit Scenario Simulation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs">
        {/* Left: Attacker Request Box */}
        <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-3">
          <span className="font-bold text-stone-900 block flex items-center gap-1.5">
            <User size={14} className="text-orange-600" />
            Authenticated User: Alice (Tenant: <code className="text-orange-700 font-mono">company_A</code>)
          </span>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-stone-600">Simulate Modifying Report ID Parameter in HTTP GET:</label>
            <div className="flex items-center gap-2">
              <span className="font-mono text-stone-500">GET /api/reports/</span>
              <select
                value={reportIdInput}
                onChange={(e) => setReportIdInput(e.target.value)}
                className="font-mono p-1.5 rounded border border-stone-300 bg-stone-50 text-xs font-bold cursor-pointer"
              >
                <option value="5001">5001 (Owned by company_A &bull; Legitimate)</option>
                <option value="5002">5002 (Owned by company_B &bull; ATTACK TARGET)</option>
              </select>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-stone-50 border border-stone-200 text-[11px] text-stone-600 space-y-1 font-mono">
            <div>Cookie: session_id=valid_session_alice</div>
            <div>Tenant Verified: company_A</div>
          </div>
        </div>

        {/* Right: Backend Code Execution */}
        <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs space-y-2">
          <span className="text-[10px] uppercase text-stone-400 block border-b border-stone-800 pb-1">
            Backend Controller Handler Code
          </span>
          {securityMode === "insecure" ? (
            <pre className="text-red-400 text-[11px] leading-relaxed">
              {`// VULNERABLE: Only queries by ID!
app.get("/api/reports/:id", async (req, res) => {
  const report = await db.query(
    "SELECT * FROM reports WHERE id = $1", 
    [req.params.id]
  );
  return res.json(report); // LEAKS COMPANY B!
});`}
            </pre>
          ) : (
            <pre className="text-emerald-400 text-[11px] leading-relaxed">
              {`// SECURE: Enforces verified tenant context!
app.get("/api/reports/:id", requireAuth, async (req, res) => {
  const report = await db.query(
    "SELECT * FROM reports WHERE id = $1 AND tenant_id = $2",
    [req.params.id, req.user.verifiedTenantId]
  );
  if (!report) return res.status(403).json({ error: "Forbidden" });
  return res.json(report);
});`}
            </pre>
          )}
        </div>
      </div>

      {/* Outcome Banner */}
      <div className={`p-4 rounded-xl border text-xs font-mono flex items-center justify-between ${outcome.color}`}>
        <div className="flex items-center gap-2">
          {outcome.status === 200 && securityMode === "insecure" ? (
            <AlertTriangle size={18} className="text-red-600 shrink-0" />
          ) : outcome.status === 403 ? (
            <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
          ) : (
            <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
          )}
          <span>
            HTTP {outcome.status}: {outcome.message}
          </span>
        </div>
        {outcome.data && (
          <span className="font-bold text-[11px]">
            Exposed Candidate: {outcome.data.candidate} ({outcome.data.notes})
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * ---------------------------------------------------------------------------
 * DISPATCHER COMPONENT FOR MODULE 18 DIAGRAMS
 * ---------------------------------------------------------------------------
 */
export function VisualDiagramComponentModule18({ diagramId }) {
  switch (diagramId) {
    case "tenant-isolation":
      return <TenantIsolationDiagram />;
    case "postgres-rls":
      return <PostgresRlsDiagram />;
    case "idor-defense":
      return <IdorDefenseDiagram />;
    default:
      return <TenantIsolationDiagram />;
  }
}
