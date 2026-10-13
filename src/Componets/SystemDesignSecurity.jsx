import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  ArrowLeft,
  ExternalLink,
  BookOpen,
  Sliders,
  HelpCircle,
  Workflow,
  Clock,
  Send,
  Zap,
  Globe,
  FileText,
  Compass,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  TenantIsolationDiagram,
  PostgresRlsDiagram,
  IdorDefenseDiagram,
  VisualDiagramComponentModule18,
} from "./SystemDesignSecurityDiagrams";

export default function SystemDesignSecurity() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "simulators" | "qa" | "assignments" | "assessment" | "reading"
  const [activeWeek, setActiveWeek] = useState(1); // 1 | 2 (Week 35 | Week 36)
  const [activeLesson, setActiveLesson] = useState("18.1");

  // Expanded Q&A accordion states (15 Senior Interview Questions)
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (8 QUESTIONS MATCHING PROMPT VERBATIM)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. What is the difference between authentication and authorization?",
      options: [
        "Authentication verifies identity; authorization decides permitted actions",
        "Authentication controls database indexes; authorization handles passwords",
        "They are interchangeable terms",
        "Authorization proves identity, while authentication defines data retention",
      ],
      correctIndex: 0,
      explanation:
        "Authentication confirms who an actor is (e.g. valid credentials / session). Authorization determines what resources and actions that authenticated identity is permitted to execute.",
    },
    {
      id: "q2",
      question: "2. Why is a random UUID not sufficient protection against IDOR?",
      options: [
        "UUIDs cannot identify resources",
        "Authorization must still be checked even when identifiers are difficult to guess",
        "UUIDs automatically bypass database policies",
        "UUIDs are only valid for users",
      ],
      correctIndex: 1,
      explanation:
        "Obscurity is not authorization. If an attacker discovers or leaks an unguessable UUID, an endpoint that omits ownership/tenant checks will still improperly disclose the record.",
    },
    {
      id: "q3",
      question: "3. What is the primary purpose of OpenID Connect?",
      options: [
        "Encrypting database backups",
        "Federated authentication and identity information on top of OAuth 2.0",
        "Replacing every API permission check",
        "Partitioning tenant databases",
      ],
      correctIndex: 1,
      explanation:
        "OpenID Connect (OIDC) is an identity layer built on OAuth 2.0 that allows clients to verify the end-user's identity and obtain basic profile claims via a cryptographically signed ID Token.",
    },
    {
      id: "q4",
      question: "4. What is a common advantage of a shared-table multi-tenant database?",
      options: [
        "No authorization logic is needed",
        "Every tenant has dedicated hardware",
        "Lower operational cost and efficient resource sharing",
        "All data leaks become impossible",
      ],
      correctIndex: 2,
      explanation:
        "Shared-table multi-tenancy provides the lowest ongoing infrastructure cost, maximum hardware density, and simplest schema migration procedures across thousands of tenants.",
    },
    {
      id: "q5",
      question: "5. What should determine the active tenant's permissions?",
      options: [
        "An arbitrary tenant ID from the browser",
        "A client-side role label",
        "Verified identity, tenant membership, resource ownership, and policy",
        "Only the HTTP request path",
      ],
      correctIndex: 2,
      explanation:
        "A tenant ID supplied in HTTP parameters is unverified client input. Permissions must be computed from cryptographically verified identity, trusted server-side tenant membership, and resource ownership checks.",
    },
    {
      id: "q6",
      question: "6. Which mechanism can restrict visible database rows by policy?",
      options: [
        "CSS",
        "PostgreSQL Row-Level Security",
        "Browser local storage",
        "A hidden frontend button",
      ],
      correctIndex: 1,
      explanation:
        "PostgreSQL Row-Level Security (RLS) enforces security policies directly within the database engine, ensuring queries only view or modify rows satisfying the tenant session context.",
    },
    {
      id: "q7",
      question: "7. Which is an example of broken object property authorization?",
      options: [
        "A user changing their display name through an allowed form",
        "A recruiter changing their own profile picture",
        "A candidate injecting a privileged role field into a profile-update request that the backend accepts",
        "A user signing out",
      ],
      correctIndex: 2,
      explanation:
        "Mass-assignment or Broken Object Property-Level Authorization occurs when an endpoint accepts arbitrary request payload fields without an allowlist, allowing users to modify sensitive attributes like roles.",
    },
    {
      id: "q8",
      question: "8. Why does tenant isolation need to extend to background jobs and caches?",
      options: [
        "Only databases contain sensitive information",
        "These components can expose or mix tenant data outside the original API request",
        "Caches are always public",
        "Background jobs do not need identities",
      ],
      correctIndex: 1,
      explanation:
        "Shared Redis caches, Elasticsearch indexes, S3 buckets, and message queues will leak cross-tenant data if keys and workers do not rigorously enforce tenant boundaries and ownership checks.",
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
    // WEEK 35: Identity, Auth, Sessions, RBAC/ABAC & Multi-Tenancy Core
    "18.1": {
      title: "18.1 Module Overview & Why Multi-Tenant Security Matters",
      week: 1,
      readTime: "12 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <div className="rounded-2xl border border-orange-200 bg-orange-50/60 p-5">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-700 block mb-1">
              Enterprise Multi-Tenant SaaS Expansion
            </span>
            <p className="text-stone-900 font-medium">
              Imagine PrepSpaces expands from individual interview practice into an enterprise B2B platform powering <strong>hundreds of universities, global tech enterprises, and boutique recruitment agencies</strong> on shared cloud infrastructure.
            </p>
            <p className="mt-2 text-xs text-stone-700">
              A candidate from Stanford must never view an interview report from MIT. A recruiter at Google must never view applicant pipelines belonging to Meta. If an engineer forgets a single <code className="bg-white px-1 py-0.5 rounded text-xs font-mono text-orange-800">WHERE tenant_id = $1</code> filter, thousands of confidential candidate salaries, video recordings, and evaluation transcripts are exposed to the public internet.
            </p>
          </div>

          <h3 className="text-lg font-bold text-stone-900 pt-2">Learning Objectives</h3>
          <p>By the end of this module, you will be equipped to:</p>
          <ul className="list-disc pl-5 space-y-2 text-stone-700">
            <li>Distinguish <strong>Authentication (AuthN)</strong>, <strong>Authorization (AuthZ)</strong>, <strong>Identity</strong>, and <strong>Auditing</strong>.</li>
            <li>Architect modern authentication pipelines: <strong>Argon2id password hashing, Passkeys (WebAuthn), OAuth 2.0, OpenID Connect (OIDC), and SAML 2.0 Enterprise SSO</strong>.</li>
            <li>Evaluate and implement <strong>RBAC, ABAC, and Relationship-Based Access Control (ReBAC / Zanzibar)</strong>.</li>
            <li>Compare the 3 Multi-Tenant Storage Strategies: <strong>Shared Tables (RLS), Separate Schemas, and Dedicated Databases</strong>.</li>
            <li>Configure and enforce <strong>PostgreSQL Row-Level Security (RLS)</strong> with transaction-scoped tenant isolation.</li>
            <li>Prevent critical OWASP API vulnerabilities: <strong>Broken Object-Level Authorization (BOLA/IDOR), Broken Function-Level Authorization, and Mass Assignment</strong>.</li>
            <li>Isolate multi-tenant resources across <strong>Redis caches, S3 object storage, message queues, and search indexes</strong>.</li>
            <li>Apply <strong>NIST SP 800-207 Zero Trust Architecture</strong> and mutual TLS (mTLS) for microservices.</li>
          </ul>
        </div>
      ),
    },

    "18.2": {
      title: "18.2 The Four Fundamental Security Concepts",
      week: 1,
      readTime: "14 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Every security architecture is constructed upon four fundamental, non-interchangeable pillars:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-orange-600 block">1. Digital Identity</span>
              <h4 className="font-bold text-stone-900 text-sm">&quot;Who or what is this actor?&quot;</h4>
              <p className="text-xs text-stone-600">
                A digital representation of a person, microservice workload, or external automated client within the system (e.g. Candidate UUID, Recruiter ID, Service Account).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-blue-600 block">2. Authentication (AuthN)</span>
              <h4 className="font-bold text-stone-900 text-sm">&quot;Are you who you claim to be?&quot;</h4>
              <p className="text-xs text-stone-600">
                Verifying the authenticity of the presented credentials using passwords, TOTP codes, cryptographic passkeys, or signed identity tokens.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-emerald-600 block">3. Authorization (AuthZ)</span>
              <h4 className="font-bold text-stone-900 text-sm">&quot;What are you permitted to do?&quot;</h4>
              <p className="text-xs text-stone-600">
                Evaluating whether an authenticated identity possesses the rights to perform a specific action (Read/Write/Delete) on a specific resource within a tenant boundary.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-purple-600 block">4. Security Auditing</span>
              <h4 className="font-bold text-stone-900 text-sm">&quot;What happened, when, and by whom?&quot;</h4>
              <p className="text-xs text-stone-600">
                Writing an immutable, non-repudiable audit log recording actor, action, tenant, resource, timestamp, and authorization outcome.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-xs text-red-950 space-y-2">
            <strong className="block text-sm">Why Authentication Alone Is Never Enough:</strong>
            <p>
              Consider a client sending <code className="bg-white px-1.5 py-0.5 rounded font-mono text-red-900">GET /api/interviews/7842</code>. The user possesses a valid session cookie. If the backend retrieves record 7842 without verifying that interview 7842 belongs to the user&apos;s active tenant and permission set, the API leaks another organization&apos;s confidential data.
            </p>
            <div className="font-mono text-[11px] font-bold">Rule: Authenticate the actor &rarr; Authorize the action &rarr; Enforce the tenant boundary on EVERY request.</div>
          </div>
        </div>
      ),
    },

    "18.3": {
      title: "18.3 Security Architecture & Defense in Depth",
      week: 1,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Relying on a single security control (e.g. an API Gateway check) guarantees failure. <strong>Defense in Depth</strong> mandates independent, overlapping verification barriers across the entire request path:
          </p>

          <div className="space-y-3">
            {[
              {
                layer: "Layer 1: Edge & Network Security",
                controls: "TLS 1.3 termination, Cloudflare WAF, DDoS mitigation, IP threat intelligence, rate limiting.",
              },
              {
                layer: "Layer 2: Identity & Authentication (AuthN)",
                controls: "Session cookie verification (__Host- prefix), JWT cryptographic signature validation, MFA / WebAuthn.",
              },
              {
                layer: "Layer 3: Authorization & Tenant Context (AuthZ)",
                controls: "Resolving verified tenant membership, evaluating RBAC/ABAC policies, validating object ownership.",
              },
              {
                layer: "Layer 4: Data Layer Isolation",
                controls: "PostgreSQL Row-Level Security (RLS), tenant-prefixed Redis keys, pre-signed S3 download URLs.",
              },
              {
                layer: "Layer 5: Security Telemetry & SIEM",
                controls: "Immutable audit logs streamed to WORM (Write-Once-Read-Many) storage, real-time BOLA anomaly alerts.",
              },
            ].map((step, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-stone-200 bg-white flex items-center justify-between text-xs">
                <div>
                  <strong className="text-stone-900 block font-mono text-[11px] text-orange-600">{step.layer}</strong>
                  <span className="text-stone-600 mt-0.5 block">{step.controls}</span>
                </div>
                <ShieldCheck size={16} className="text-emerald-600 shrink-0 ml-4" />
              </div>
            ))}
          </div>
        </div>
      ),
    },

    "18.4": {
      title: "18.4 Authentication: Passwords, Passkeys, OAuth 2.0, OIDC, and SAML",
      week: 1,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Modern distributed applications integrate distinct authentication protocols depending on whether the actor is a consumer, an API client, or an enterprise organization:
          </p>

          <div className="overflow-x-auto rounded-xl border border-stone-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100 text-stone-700 font-bold border-b border-stone-200">
                  <th className="p-3">Protocol / Standard</th>
                  <th className="p-3">Primary Purpose</th>
                  <th className="p-3">PrepSpaces Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-xs font-mono">
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-bold text-stone-900">Argon2id + Salt</td>
                  <td className="p-3 font-sans">Memory-hard password hashing</td>
                  <td className="p-3 font-sans text-stone-600">Direct candidate account credentials storage.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-bold text-stone-900">Passkeys (WebAuthn / FIDO2)</td>
                  <td className="p-3 font-sans">Public-key phishing-resistant login</td>
                  <td className="p-3 font-sans text-stone-600">Biometric TouchID/FaceID sign-in without passwords.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-bold text-stone-900">OAuth 2.0 (RFC 9700)</td>
                  <td className="p-3 font-sans">Delegated API authorization</td>
                  <td className="p-3 font-sans text-stone-600">Authorizing PrepSpaces to sync with Google Calendar API.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-bold text-orange-700">OpenID Connect (OIDC)</td>
                  <td className="p-3 font-sans">Federated identity layer atop OAuth 2.0</td>
                  <td className="p-3 font-sans text-stone-600">&quot;Sign in with Google / GitHub&quot; returning an ID Token.</td>
                </tr>
                <tr className="hover:bg-stone-50">
                  <td className="p-3 font-bold text-blue-700">SAML 2.0 Enterprise SSO</td>
                  <td className="p-3 font-sans">Enterprise XML federated identity</td>
                  <td className="p-3 font-sans text-stone-600">University Okta/Azure AD single sign-on integration.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },

    "18.5": {
      title: "18.5 Sessions, Cookies, and Tokens: Architecture & Lifecycle",
      week: 1,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Recognizing users across stateless HTTP requests requires choosing between <strong>Server-Managed Opaque Sessions</strong> and <strong>Stateless JSON Web Tokens (JWT)</strong>:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Server-Managed Sessions (Opaque ID)</h4>
              <p className="text-xs text-stone-600">
                The server generates a 256-bit cryptographic random ID stored in Redis, transmitted to the browser in a hardened cookie:
              </p>
              <pre className="p-2.5 rounded-lg bg-stone-900 text-amber-300 font-mono text-[10px] overflow-x-auto">
                Set-Cookie: __Host-session=xyz789; Secure; HttpOnly; Path=/; SameSite=Lax
              </pre>
              <p className="text-[11px] text-stone-600">
                Benefits: Instant server-side revocation on logout, zero token size overhead, immune to XSS token theft via <code className="font-mono">HttpOnly</code>.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Token-Based Authentication (JWT)</h4>
              <p className="text-xs text-stone-600">
                Self-contained, cryptographically signed JSON payload carrying subject, issuer, audience, and expiration:
              </p>
              <pre className="p-2.5 rounded-lg bg-stone-900 text-emerald-400 font-mono text-[10px] overflow-x-auto">
                Authorization: Bearer eyJhbGciOiJSUzI1NiIs...
              </pre>
              <p className="text-[11px] text-stone-600">
                Trade-off: Decentralized verification across microservices, but revocation requires maintaining a distributed blacklist or short 5-minute TTLs.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    "18.6": {
      title: "18.6 Authorization Models: RBAC, ABAC, and ReBAC",
      week: 1,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Evaluating whether an actor may execute an action requires choosing an authorization paradigm:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold text-orange-600 uppercase">Model 1: RBAC</span>
              <h4 className="font-bold text-stone-900 text-sm">Role-Based Access Control</h4>
              <p className="text-xs text-stone-600">
                Permissions are bound to roles (<code className="font-mono">recruiter</code>, <code className="font-mono">college_admin</code>).
              </p>
              <div className="p-2 rounded bg-amber-50 text-[11px] text-amber-900 font-mono">
                Limitation: Role alone cannot prevent recruiter Alice from accessing recruiter Bob&apos;s candidates in another company.
              </div>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold text-blue-600 uppercase">Model 2: ABAC</span>
              <h4 className="font-bold text-stone-900 text-sm">Attribute-Based Access Control</h4>
              <p className="text-xs text-stone-600">
                Evaluates dynamic attributes of Subject, Resource, Action, and Environment (e.g. user IP, time of day, department).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <span className="text-xs font-mono font-bold text-purple-600 uppercase">Model 3: ReBAC</span>
              <h4 className="font-bold text-stone-900 text-sm">Relationship-Based (Zanzibar)</h4>
              <p className="text-xs text-stone-600">
                Evaluates directed graph relationships: <code className="font-mono">Alice is_member_of Team_Engineering which owns Job_42</code>.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    "18.7": {
      title: "18.7 Multi-Tenant Architecture Fundamentals & Isolation Boundaries",
      week: 1,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            In SaaS engineering, a <strong>Tenant</strong> represents an autonomous organizational client (e.g. Stanford University or TechHire Recruiting).
          </p>

          <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2 text-xs">
            <strong className="text-stone-900 block font-mono text-sm">The Fundamental Query Rule:</strong>
            <p className="text-stone-600">
              Never execute raw unqualified queries such as <code className="bg-white px-1.5 py-0.5 rounded font-mono">SELECT * FROM interviews WHERE id = $1</code>. Every query touching multi-tenant data must enforce verified tenant context:
            </p>
            <div className="p-2.5 rounded bg-stone-900 text-emerald-400 font-mono text-xs">
              SELECT * FROM interviews WHERE interview_id = $1 AND tenant_id = $2;
            </div>
          </div>
        </div>
      ),
    },

    // WEEK 36: Strategies, RLS, OWASP BOLA, Caches & Zero Trust
    "18.8": {
      title: "18.8 Tenant Isolation Strategies: Shared Tables vs. Schemas vs. Databases",
      week: 2,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Selecting a tenant isolation strategy requires balancing cost efficiency against regulatory compliance:
          </p>

          <TenantIsolationDiagram />
        </div>
      ),
    },

    "18.9": {
      title: "18.9 Enforcing Tenant Isolation with PostgreSQL Row-Level Security (RLS)",
      week: 2,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Application-level filters can be accidentally omitted during hurried hotfixes. PostgreSQL Row-Level Security (RLS) turns the database engine into an impenetrable security checkpoint:
          </p>

          <PostgresRlsDiagram />

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50 text-xs text-amber-950 space-y-2">
            <strong className="block text-sm">Connection Pool Context Leakage Warning:</strong>
            <p>
              When using connection poolers (PgBouncer), never use persistent <code className="font-mono">SET app.tenant_id = &apos;...&apos;</code>, or subsequent requests sharing that pooled TCP connection will inherit the previous tenant&apos;s permissions. Always use transaction-scoped:
            </p>
            <pre className="p-2.5 rounded bg-stone-900 text-amber-300 font-mono text-xs">
              BEGIN;
              SET LOCAL app.tenant_id = &apos;company_A&apos;;
              SELECT * FROM interviews;
              COMMIT;
            </pre>
          </div>
        </div>
      ),
    },

    "18.10": {
      title: "18.10 The Most Dangerous Multi-Tenant Vulnerabilities",
      week: 2,
      readTime: "16 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            According to the OWASP API Security Top 10, the most critical multi-tenant vulnerabilities are:
          </p>

          <IdorDefenseDiagram />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
              <span className="text-xs font-bold text-red-600 font-mono">B. Broken Function-Level Auth</span>
              <p className="text-xs text-stone-600">
                A candidate invokes <code className="font-mono text-stone-800">DELETE /api/admin/tenants/42</code> directly, bypassing hidden UI buttons. Prevent by requiring explicit server-side permission middleware on every endpoint.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-1.5">
              <span className="text-xs font-bold text-red-600 font-mono">C. Mass Assignment</span>
              <p className="text-xs text-stone-600">
                In profile updates, an attacker submits <code className="font-mono text-stone-800">&#123; &quot;role&quot;: &quot;platform_admin&quot; &#125;</code>. Prevent by using strict DTO schemas and field allowlists.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    "18.11": {
      title: "18.11 Tenant Isolation Beyond the Database: Caches, Storage & Queues",
      week: 2,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Tenant boundaries must survive every data transformation across your entire architecture:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Redis Cache Isolation</h4>
              <p className="text-xs text-stone-600">
                Always namespace cache keys with tenant IDs: <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">tenant:&#123;tenant_id&#125;:report:&#123;id&#125;</code>. Never return cached objects without verifying active caller authorization.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">S3 Object Storage Isolation</h4>
              <p className="text-xs text-stone-600">
                Store interview video recordings in private buckets using tenant key prefixes: <code className="font-mono bg-stone-100 px-1 py-0.5 rounded">s3://prepspaces-media/&#123;tenant_id&#125;/&#123;video_id&#125;.mp4</code>. Serve downloads via short-lived (5-minute) pre-signed URLs.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    "18.12": {
      title: "18.12 Secure API Design, Request Authorization Flow & Error Handling",
      week: 2,
      readTime: "14 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            Every API request should execute through a standardized 9-step authorization pipeline:
          </p>

          <div className="p-4 rounded-xl bg-stone-900 text-stone-200 font-mono text-xs space-y-1.5">
            <div>1. Authenticate caller (verify JWT / session cookie)</div>
            <div>2. Extract target resource ID from route parameters</div>
            <div>3. Resolve verified caller tenant membership from session context</div>
            <div>4. Query target resource scoped by tenant context</div>
            <div>5. Evaluate RBAC / ABAC policies for requested action</div>
            <div>6. Execute database / storage mutation</div>
            <div>7. Emit immutable security audit log event</div>
            <div>8. Filter response payload to permitted fields only</div>
            <div>9. Return sanitized response (or generic 403/404 without leaking internal IDs)</div>
          </div>
        </div>
      ),
    },

    "18.13": {
      title: "18.13 Zero Trust Architecture & Service-to-Service Security",
      week: 2,
      readTime: "15 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            <strong>NIST SP 800-207 Zero Trust Architecture</strong> states that network perimeter location confers zero trust. Every inter-service RPC must be authenticated and authorized:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Mutual TLS (mTLS)</h4>
              <p className="text-xs text-stone-600">
                Services authenticate each other cryptographically using X.509 certificates rotated automatically by a service mesh (Istio/Linkerd).
              </p>
            </div>

            <div className="p-4 rounded-xl border border-stone-200 bg-white space-y-2">
              <h4 className="font-bold text-stone-900 text-sm">Workload Identity (SPIFFE/SPIRE)</h4>
              <p className="text-xs text-stone-600">
                Microservices receive verifiable identities (<code className="font-mono text-stone-800">spiffe://prepspaces.io/ns/prod/sa/report-generator</code>) to restrict downstream DB and cloud resource access under least privilege.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    "18.14": {
      title: "18.14 Threat Modeling, Multi-Tenant Case Study & Permission Revocation",
      week: 2,
      readTime: "18 min",
      content: (
        <div className="space-y-6 text-stone-800 leading-relaxed text-sm">
          <p>
            The final PrepSpaces production multi-tenant architecture implements comprehensive lifecycle security:
          </p>

          <div className="rounded-xl border border-stone-200 bg-white p-5 space-y-3">
            <h4 className="font-bold text-stone-900 text-sm">Immediate Permission Revocation Protocol</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              When a recruiter is terminated or removed from an organization:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-stone-700">
              <li>Active sessions in Redis are terminated immediately via user session purge.</li>
              <li>A <code className="font-mono">token_revoked_at</code> timestamp is recorded on the user record, invalidating existing short-lived JWTs.</li>
              <li>Pre-signed S3 download links expire within 5 minutes.</li>
              <li>Audit logs record the revocation timestamp and administrator identity for compliance.</li>
            </ul>
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
        currentModuleId="security"
        showAiTutor={false}
        onAiTutorToggle={() => {}}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        {/* Module Header & Breadcrumb */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 mb-2">
            <span>System Design Masterclass</span>
            <span>&bull;</span>
            <span className="text-orange-600 font-bold">Module 18</span>
            <span>&bull;</span>
            <span>Advanced Security Engineering &bull; Weeks 35–36</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                Security, Identity, Authorization &amp; Multi-Tenant Architecture
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl leading-relaxed">
                Architect bulletproof multi-tenant SaaS systems. Master authentication (Passkeys, OIDC, SAML), authorization models (RBAC, ABAC, ReBAC), PostgreSQL Row-Level Security (RLS), OWASP BOLA defense, and zero trust.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-stone-200 bg-white text-xs font-mono font-bold text-stone-700 shadow-2xs">
                <Clock size={13} className="text-orange-600" />
                35–45 study hrs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-orange-200 bg-orange-50 text-xs font-mono font-bold text-orange-800 shadow-2xs">
                <ShieldCheck size={13} />
                Multi-Tenant &bull; RLS &bull; Zero Trust
              </span>
            </div>
          </div>
        </div>

        {/* Primary Tab Navigation */}
        <div className="flex items-center gap-1 overflow-x-auto border-b border-stone-200 pb-2 mb-6 scrollbar-none text-xs font-bold">
          {[
            { id: "curriculum", label: "Curriculum & Lessons", icon: BookOpen },
            { id: "simulators", label: "Interactive Simulators", icon: Sliders },
            { id: "qa", label: "15 Senior Interview Q&A", icon: HelpCircle },
            { id: "assignments", label: "5 Hands-On Labs", icon: Workflow },
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
                  Week 35: AuthN &amp; Multi-Tenant Core
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
                  Week 36: RLS, BOLA &amp; Zero Trust
                </button>
              </div>

              {/* Lesson List */}
              <div className="rounded-2xl border border-stone-200 bg-white p-3 space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-500 px-2 block mb-1">
                  {activeWeek === 1 ? "Week 35 Curriculum (7 Lessons)" : "Week 36 Curriculum (7 Lessons)"}
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
                  Key Security Rule
                </span>
                <p className="text-stone-600 text-[11px] leading-relaxed">
                  A tenant ID supplied in HTTP request headers or JSON bodies is unverified user input, never proof of authorization. Always resolve active tenant context from cryptographically signed session tokens.
                </p>
              </div>
            </div>

            {/* Right Main Panel: Lesson Content */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
                  <div>
                    <span className="text-[10px] font-mono uppercase font-bold text-orange-600 tracking-wider">
                      Module 18 &bull; Lesson {activeLesson}
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
            {/* SIMULATOR 1: MULTI-TENANT ISOLATION STRATEGIES */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="border-b border-stone-200 pb-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                  Interactive Simulator 1
                </span>
                <h3 className="font-extrabold text-stone-900 text-base">
                  Multi-Tenant Storage Strategy &amp; Trade-off Explorer
                </h3>
              </div>
              <TenantIsolationDiagram />
            </div>

            {/* SIMULATOR 2: POSTGRESQL ROW-LEVEL SECURITY RUNNER */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="border-b border-stone-200 pb-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                  Interactive Simulator 2
                </span>
                <h3 className="font-extrabold text-stone-900 text-base">
                  PostgreSQL Row-Level Security (RLS) Runtime Policy Runner
                </h3>
              </div>
              <PostgresRlsDiagram />
            </div>

            {/* SIMULATOR 3: OWASP BOLA / IDOR DEFENSE SIMULATOR */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-xs">
              <div className="border-b border-stone-200 pb-3 mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600 block">
                  Interactive Simulator 3
                </span>
                <h3 className="font-extrabold text-stone-900 text-base">
                  OWASP Broken Object-Level Authorization (BOLA / IDOR) Defense
                </h3>
              </div>
              <IdorDefenseDiagram />
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: 15 SENIOR INTERVIEW Q&A                                     */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/60 mb-2">
              <h3 className="font-bold text-stone-900 text-sm">
                15 Senior System Design Interview Questions &amp; Architectural Answers
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Core security architecture questions asked in Staff &amp; Principal Software Engineering interviews at Stripe, Datadog, Snowflake, and AWS.
              </p>
            </div>

            {[
              {
                id: "qa-1",
                q: "1. What is the difference between authentication, authorization, and identity management?",
                a: "Identity Management creates and manages the lifecycle of digital actors (users, tenants, service accounts). Authentication (AuthN) verifies the identity claim using credentials, passkeys, or cryptographic tokens ('Who are you?'). Authorization (AuthZ) evaluates permissions and context to decide whether that authenticated identity can perform a specific operation on a target resource ('What may you do?').",
              },
              {
                id: "qa-2",
                q: "2. Explain OAuth 2.0, OpenID Connect, and SAML and when you would use each.",
                a: "OAuth 2.0 is an authorization delegation framework for issuing access tokens to third-party clients (e.g. letting PrepSpaces read Google Calendar). OpenID Connect (OIDC) is an identity layer built on OAuth 2.0 that issues a signed JWT ID Token for user sign-in ('Sign in with Google'). SAML 2.0 is an XML-based federated identity standard used for enterprise SSO (Okta, Microsoft Azure AD) connecting corporate identity providers to SaaS applications.",
              },
              {
                id: "qa-3",
                q: "3. How do server-managed sessions compare with JWT-based authentication?",
                a: "Server-managed sessions store state in Redis and send an opaque random ID via hardened __Host- cookies: revocation is instantaneous on the server, and payloads cannot be read by JavaScript (immune to XSS token theft). JWTs are stateless and self-contained, allowing microservices to verify claims independently without querying a central session cache; however, JWTs are difficult to revoke before expiration and risk stale permissions.",
              },
              {
                id: "qa-4",
                q: "4. What are RBAC, ABAC, and ReBAC, and how would you combine them?",
                a: "RBAC binds permissions to coarse roles (Recruiter, Candidate). ABAC evaluates dynamic attributes (user organization, request IP, time of day). ReBAC (Zanzibar) evaluates directed relationship graphs ('Alice is reviewer of Interview X which belongs to Team Y'). Modern multi-tenant SaaS combines them into a hybrid model: checking if the user has the Recruiter role, belongs to Tenant X, and is assigned to the specific Job Application.",
              },
              {
                id: "qa-5",
                q: "5. Design a multi-tenant SaaS application using a shared PostgreSQL database.",
                a: "Every table contains a 'tenant_id UUID NOT NULL' column. PostgreSQL Row-Level Security (RLS) is enabled on all tables with policies checking current_setting('app.tenant_id'). The backend connection pooler executes 'SET LOCAL app.tenant_id = verified_tenant_id' inside an atomic transaction before executing queries. Composite unique indexes enforce per-tenant constraints (e.g. UNIQUE (tenant_id, email)).",
              },
              {
                id: "qa-6",
                q: "6. How would you prevent an IDOR vulnerability in an interview-report API?",
                a: "Never retrieve reports using only an ID parameter from the URL. Always scope data retrieval to the caller's verified session context: 'SELECT * FROM reports WHERE id = $1 AND tenant_id = $2'. Enforce domain authorization to verify the recruiter is assigned to that candidate's hiring workflow. Return HTTP 403 or 404 if the report does not belong to the caller's active tenant.",
              },
              {
                id: "qa-7",
                q: "7. What is the difference between application-level tenant filtering and database Row-Level Security?",
                a: "Application-level filtering relies on backend developers remembering to append 'AND tenant_id = ?' to every ORM query or raw SQL string; a single omitted clause causes a catastrophic cross-tenant data leak. Database Row-Level Security (RLS) is enforced by the database engine itself, filtering rows automatically regardless of how queries are authored.",
              },
              {
                id: "qa-8",
                q: "8. How should tenant identity be established and propagated across microservices?",
                a: "The API gateway validates the session/JWT, resolves the verified tenant ID from trusted storage, and propagates it downstream in cryptographically signed internal headers (e.g. X-Tenant-Context signed via mTLS or HMAC). Downstream microservices never accept client-supplied tenant headers directly from the public internet.",
              },
              {
                id: "qa-9",
                q: "9. How would you protect Redis caches, object storage, and message queues from cross-tenant data leakage?",
                a: "(1) Redis: namespace all keys with tenant ID ('tenant:{id}:report:{reportId}'). (2) Object Storage: store files in tenant-prefixed S3 paths and generate short-lived (5-minute) pre-signed URLs only after verifying authorization. (3) Queues: include tenant context in job payloads and verify worker database credentials enforce tenant boundaries.",
              },
              {
                id: "qa-10",
                q: "10. How would you implement organization-level SSO and remove access when an employee leaves?",
                a: "Implement SAML 2.0 or OIDC Enterprise SSO. Use SCIM (System for Cross-domain Identity Management) to receive real-time deprovisioning webhooks from the enterprise IdP. When an employee is offboarded in Okta, SCIM immediately deactivates the user membership, revokes active Redis sessions, and invalidates tokens.",
              },
              {
                id: "qa-11",
                q: "11. What is the principle of least privilege, and how does it apply to service accounts?",
                a: "Every identity must be granted only the minimal permissions required for its function. An async report-generation worker service account should only have SELECT access to interview answers and INSERT access to the reports table, with zero permissions to drop tables, modify user credentials, or access billing data.",
              },
              {
                id: "qa-12",
                q: "12. How would you safely allow platform support staff to investigate a customer's problem?",
                a: "Implement Just-In-Time (JIT) access: (1) Require customer administrator opt-in consent. (2) Require support engineer to request temporary, time-bound (e.g. 1-hour) elevation with MFA re-authentication. (3) Log every action to an immutable audit trail with full session recording. (4) Redact sensitive candidate PII and passwords.",
              },
              {
                id: "qa-13",
                q: "13. How would you test that one tenant cannot read or modify another tenant's data?",
                a: "Write automated cross-tenant security test suites in CI/CD: seed Tenant A and Tenant B with identical resource structures. Using Tenant A credentials, attempt to GET, POST, PUT, and DELETE Tenant B resources. Assert that 100% of requests return HTTP 403/404. Test cache poisoning and search-engine index isolation.",
              },
              {
                id: "qa-14",
                q: "14. Design a permission-revocation mechanism for existing sessions and issued download links.",
                a: "For sessions: store session tokens in Redis with a user 'revoked_before' timestamp; purge session keys immediately upon logout. For JWTs: maintain a distributed Bloom filter or Redis revocation list for active jti claims. For file downloads: issue pre-signed S3 URLs with short 5-minute expirations so revoked users lose access rapidly.",
              },
              {
                id: "qa-15",
                q: "15. How would you isolate enterprise tenants with strict compliance or data-residency requirements?",
                a: "Deploy a hybrid multi-tenant architecture: standard SME tenants share tables in a multi-tenant PostgreSQL cluster, while premium enterprise clients (banks, healthcare) are routed to dedicated database instances in specific geographic cloud regions (e.g. Frankfurt for GDPR data sovereignty).",
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
        {/* TAB 4: 5 HANDS-ON LABS                                             */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "assignments" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-orange-600">Lab 1 &bull; Authentication</span>
                <span className="text-xs font-mono font-bold text-stone-500">2–3 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Secure Authentication &amp; Session Management</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Design sign-in and session management for React frontend and Node.js backend using Argon2id and hardened __Host- cookies.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>Argon2id password hashing implementation with unique salts.</li>
                  <li>Hardened cookie configuration (<code className="font-mono">Secure, HttpOnly, SameSite=Lax, __Host-</code>).</li>
                  <li>Session regeneration on login and rate limiting on <code className="font-mono">/api/login</code>.</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-blue-600">Lab 2 &bull; Authorization</span>
                <span className="text-xs font-mono font-bold text-stone-500">3–4 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">RBAC &amp; Resource-Level Permission Engine</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Implement backend authorization middleware enforcing role checks, tenant boundaries, and object ownership.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>Permission matrix covering Candidate, Recruiter, Org Admin, and Platform Admin roles.</li>
                  <li>Reusable Express/Fastify authorization middleware function.</li>
                  <li>Automated unit test suite verifying positive and negative access decisions.</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-600">Lab 3 &bull; Multi-Tenancy</span>
                <span className="text-xs font-mono font-bold text-stone-500">3–4 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">PostgreSQL Row-Level Security (RLS) Isolation</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Configure PostgreSQL RLS on a multi-tenant database and demonstrate zero-leakage query execution.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>SQL migration script creating tenant tables and RLS policies.</li>
                  <li>Node.js data access layer setting <code className="font-mono">SET LOCAL app.tenant_id</code> per transaction.</li>
                  <li>Integration test proving raw unqualified queries cannot return cross-tenant rows.</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-purple-600">Lab 4 &bull; Enterprise SSO</span>
                <span className="text-xs font-mono font-bold text-stone-500">3–4 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">OIDC / SAML University SSO Integration</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Design an enterprise single sign-on architecture connecting a university identity provider to PrepSpaces.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>SSO authentication sequence diagram with PKCE authorization code flow.</li>
                  <li>Domain ownership verification and Just-In-Time (JIT) user provisioning logic.</li>
                  <li>SCIM deprovisioning webhook endpoint specification.</li>
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl border border-stone-200 bg-white space-y-3 shadow-xs md:col-span-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-stone-600">Lab 5 &bull; Security Testing</span>
                <span className="text-xs font-mono font-bold text-stone-500">4–5 hours</span>
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Tenant Isolation Security Audit &amp; Penetration Test</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Execute a penetration test against a staging multi-tenant environment, attempting BOLA, function bypass, and cache poisoning.
              </p>
              <div className="p-3 rounded-xl bg-[#faf8f4] border border-stone-200 text-xs space-y-1.5">
                <strong className="text-stone-900 block text-[11px]">Required Deliverables:</strong>
                <ul className="list-disc pl-4 space-y-1 text-stone-600 text-[11px]">
                  <li>BOLA exploit test scripts targeting report IDs.</li>
                  <li>Mass-assignment test script attempting to inject admin roles into profile PATCH requests.</li>
                  <li>Final vulnerability audit report with remediation patches and re-test verification.</li>
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
                  Module 18 Knowledge Check
                </h3>
              </div>
              {quizSubmitted && (
                <div className="text-right">
                  <span className="text-xs font-mono font-bold block text-stone-500">Score</span>
                  <span
                    className={`text-xl font-extrabold font-mono ${
                      calculateScore() >= 6 ? "text-emerald-600" : "text-orange-600"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  id: "1",
                  title: "OWASP — API Security Top 10",
                  source: "OWASP Foundation",
                  focus:
                    "Essential industry guide covering Broken Object-Level Authorization (BOLA), Broken Authentication, and Mass Assignment vulnerabilities.",
                  url: "https://owasp.org/www-project-api-security/",
                },
                {
                  id: "2",
                  title: "OWASP — Multi-Tenant Security Cheat Sheet",
                  source: "OWASP Cheat Sheet Series",
                  focus:
                    "Technical manual on tenant context resolution, isolation failures, cross-tenant data leakage, and tenant-aware infrastructure.",
                  url: "https://cheatsheetseries.owasp.org/cheatsheets/Multi_Tenant_Security_Cheat_Sheet.html",
                },
                {
                  id: "3",
                  title: "IETF — OAuth 2.0 Security Best Current Practice",
                  source: "IETF RFC 9700",
                  focus:
                    "Modern OAuth 2.0 security specifications including strict redirect URI validation, PKCE, and authorization code protections.",
                  url: "https://www.rfc-editor.org/rfc/rfc9700.html",
                },
                {
                  id: "4",
                  title: "NIST — Zero Trust Architecture (SP 800-207)",
                  source: "National Institute of Standards and Technology",
                  focus:
                    "Comprehensive government and enterprise architectural standard for identity-centered, perimeter-less access control.",
                  url: "https://csrc.nist.gov/pubs/sp/800/207/final",
                },
                {
                  id: "5",
                  title: "PostgreSQL — Row Security Policies (RLS)",
                  source: "PostgreSQL Official Documentation",
                  focus:
                    "Technical guide on defining and enforcing database row-level security policies, FORCE RLS, and connection pooling context.",
                  url: "https://www.postgresql.org/docs/current/ddl-rowsecurity.html",
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
                  Masterclass Milestone &bull; Module 18 Complete
                </span>
                <span className="text-sm font-bold text-stone-900 block mt-0.5">
                  Security, Identity, Authorization &amp; Multi-Tenant Architecture
                </span>
                <span className="text-xs text-stone-600 block mt-0.5">
                  You now know how to architect secure multi-tenant SaaS applications, configure PostgreSQL Row-Level Security, enforce RBAC/ABAC/ReBAC, eliminate OWASP BOLA/IDOR vulnerabilities, and implement Zero Trust service security.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/reliability")}
                  className="flex items-center gap-1.5 rounded-xl border border-orange-300 bg-white px-3.5 py-2 text-xs font-bold text-orange-700 hover:bg-orange-50 transition cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Module 17 (Reliability)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("assessment")}
                  className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white px-3.5 py-2 text-xs font-bold text-stone-700 hover:bg-stone-50 transition cursor-pointer"
                >
                  <span>Take Module 18 Quiz</span>
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/learning/system-design/realtime")}
                  className="flex items-center gap-1.5 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
                >
                  <span>Next: Module 19 (Real-Time Systems)</span>
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
