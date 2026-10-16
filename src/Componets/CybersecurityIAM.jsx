import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Lock,
  Unlock,
  Server,
  Terminal,
  FileText,
  ExternalLink,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Filter,
  Eye,
  Zap,
  Layers,
  Cpu,
  Database,
  Network,
  Activity,
  Search,
  BookOpen,
  Sliders,
  Play,
  Check,
  X,
  Info,
  Target,
  GitBranch,
  ArrowUpRight,
  Copy,
  Globe,
  Radio,
  Clock,
  AlertOctagon,
  Laptop,
  Key,
  HardDrive,
  UserCheck,
  Users,
  Fingerprint,
  Smartphone,
  Award,
  FileCheck
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function CybersecurityIAM() {
  const navigate = useNavigate();
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(11);

  // Tab State
  const [activeTab, setActiveTab] = useState("theory"); // theory | labs | case-study | assessment | capstone
  const [selectedLesson, setSelectedLesson] = useState(1);

  // ==========================================
  // LAB 1: IDENTITY LIFECYCLE (JML) SIMULATOR
  // ==========================================
  const initialLifecycleUsers = [
    {
      id: "usr-01",
      name: "Marcus Vance",
      role: "Senior Security Analyst",
      dept: "SecOps",
      stage: "mover",
      previousDept: "IT Helpdesk",
      entitlements: ["Helpdesk Ticket Admin", "Active Directory Reset", "SIEM Reader", "Firewall Operator"],
      issue: "Privilege Creep: Retains Level 1 Helpdesk AD reset permissions after moving to SecOps.",
      status: "pending_review"
    },
    {
      id: "usr-02",
      name: "Sarah Chen",
      role: "External Cloud Contractor",
      dept: "DevOps",
      stage: "leaver",
      previousDept: "N/A",
      entitlements: ["AWS Production Admin", "GitHub Organization Owner", "Kubernetes Cluster Admin"],
      issue: "Contract expired 5 days ago; cloud federated access and tokens still active.",
      status: "pending_deprovision"
    },
    {
      id: "usr-03",
      name: "Elena Rostova",
      role: "Course Instructor",
      dept: "Academic Staff",
      stage: "joiner",
      previousDept: "N/A",
      entitlements: ["PrepSpaces Instructor Portal", "Assigned Course Editing"],
      issue: "Standard new joiner awaiting MFA hardware key enrollment.",
      status: "pending_mfa"
    }
  ];
  const [lifecycleUsers, setLifecycleUsers] = useState(initialLifecycleUsers);

  const remediateLifecycle = (id, actionType) => {
    setLifecycleUsers((prev) =>
      prev.map((u) => {
        if (u.id !== id) return u;
        if (actionType === "purge_creep") {
          return {
            ...u,
            entitlements: ["SIEM Reader", "Firewall Operator"],
            issue: "Resolved: Legacy Helpdesk entitlements pruned. Least privilege enforced.",
            status: "compliant"
          };
        } else if (actionType === "deprovision") {
          return {
            ...u,
            entitlements: ["Account Suspended - Tokens Revoked"],
            issue: "Resolved: Contractor deprovisioned. Downstream federated sessions revoked.",
            status: "compliant"
          };
        } else if (actionType === "enroll_mfa") {
          return {
            ...u,
            issue: "Resolved: FIDO2 WebAuthn Passkey enrolled. Account activated.",
            status: "compliant"
          };
        }
        return u;
      })
    );
  };

  // ==========================================
  // LAB 2: AUTHENTICATION METHOD COMPARATOR
  // ==========================================
  const authMethods = {
    passwords: {
      name: "Knowledge: Passwords Only",
      factors: "1 (Something you know)",
      phishingResistant: false,
      credentialStuffing: "High Vulnerability",
      mfaFatigue: "N/A",
      cisaRating: "Legacy / Weak",
      desc: "Vulnerable to keyloggers, adversary-in-the-middle (AiTM) proxies, credential spraying, and offline hash cracking."
    },
    sms_otp: {
      name: "SMS / Voice One-Time Passcode",
      factors: "1.5 (Possession of SIM card)",
      phishingResistant: false,
      credentialStuffing: "Moderate Defense",
      mfaFatigue: "Low",
      cisaRating: "Vulnerable to Interception",
      desc: "Codes easily harvested by reverse proxy phishing sites (Evilginx2) or intercepted via SS7 / SIM swapping."
    },
    totp_app: {
      name: "Authenticator App (TOTP / RFC 6238)",
      factors: "2 (Knowledge + Possession of shared secret)",
      phishingResistant: false,
      credentialStuffing: "Strong Defense",
      mfaFatigue: "Low",
      cisaRating: "Acceptable for Standard Users",
      desc: "Protects against credential reuse, but 6-digit codes can still be relayed in real-time to genuine sites by phishing proxies."
    },
    push_mfa: {
      name: "Mobile Push Notification",
      factors: "2 (Knowledge + Device possession)",
      phishingResistant: false,
      credentialStuffing: "Strong Defense",
      mfaFatigue: "High (MFA Prompt Bombing)",
      cisaRating: "Acceptable with Number Matching",
      desc: "Vulnerable to MFA fatigue attacks unless contextual number matching and strict geolocation challenges are enforced."
    },
    fido2_passkey: {
      name: "FIDO2 / WebAuthn Hardware Passkeys",
      factors: "2+ (Cryptographic token possession + Biometric/PIN)",
      phishingResistant: true,
      credentialStuffing: "Immune",
      mfaFatigue: "Immune",
      cisaRating: "Gold Standard (Phishing-Resistant)",
      desc: "Cryptographically binds authentication to the browser's exact TLS origin/domain. Immune to fake phishing proxies and replay attacks."
    }
  };
  const [selectedAuthMethod, setSelectedAuthMethod] = useState("fido2_passkey");

  // ==========================================
  // LAB 3: RBAC POLICY & CONFLICT MATRIX
  // ==========================================
  const roles = [
    { id: "student", name: "Student", permissions: ["view_assigned_courses", "submit_labs", "view_own_reports"] },
    { id: "instructor", name: "Instructor", permissions: ["view_assigned_courses", "grade_submissions", "edit_course_content"] },
    { id: "support", name: "Support Agent", permissions: ["view_support_tickets", "reset_student_sessions"] },
    { id: "content_admin", name: "Content Admin", permissions: ["create_courses", "publish_syllabi", "edit_course_content"] },
    { id: "platform_admin", name: "Platform Admin", permissions: ["manage_iam_roles", "configure_sso", "view_audit_logs", "delete_tenants"] }
  ];
  const [selectedRole, setSelectedRole] = useState(roles[0]);

  // ==========================================
  // LAB 4: OBJECT-LEVEL AUTHORIZATION (BOLA/IDOR)
  // ==========================================
  const [clientRequestedId, setClientRequestedId] = useState("rep-101");
  const [serverEnforcement, setServerEnforcement] = useState("strict_relationship"); // frontend_only | strict_relationship
  const [idorResult, setIdorResult] = useState(null);

  const simulateAccessReport = () => {
    // Current authenticated user is student-42 (owner of rep-101 only)
    if (clientRequestedId === "rep-101") {
      setIdorResult({
        status: 200,
        decision: "ALLOW",
        data: "Report #101: Student-42 Python Fundamentals Assessment - Grade: 94%",
        note: "Access granted: User is authenticated owner of this record."
      });
    } else {
      if (serverEnforcement === "frontend_only") {
        setIdorResult({
          status: 200,
          decision: "CRITICAL VULNERABILITY (IDOR EXPLOITED)",
          data: `Report #${clientRequestedId}: Private Assessment belonging to Target Student-99 - PII & Financial Aid Records Exposed!`,
          note: "Vulnerability Confirmed: Server trusted client-provided report_id without checking session ownership!"
        });
      } else {
        setIdorResult({
          status: 403,
          decision: "DENY (FORBIDDEN)",
          data: "Access Denied: Subject student-42 has no relationship with resource " + clientRequestedId,
          note: "Secure Enforcement: Server checked database ownership relation and rejected unauthorized cross-tenant request."
        });
      }
    }
  };

  // ==========================================
  // LAB 5: OIDC & JWT TOKEN INSPECTOR
  // ==========================================
  const [tokenType, setTokenType] = useState("id_token");
  const mockTokens = {
    id_token: {
      header: { alg: "RS256", typ: "JWT", kid: "k-prepspaces-2026-auth" },
      payload: {
        iss: "https://auth.prepspaces.com",
        sub: "usr_998124_alice",
        aud: "prepspaces-learning-portal",
        exp: 1792182000,
        iat: 1792178400,
        nonce: "n-0S6_WzA2Mj",
        email: "alice@prepspaces.org",
        roles: ["Student", "LabTester"]
      },
      signature: "VALID (Verified against IdP JWKS public key: https://auth.prepspaces.com/.well-known/jwks.json)"
    },
    access_token: {
      header: { alg: "RS256", typ: "at+jwt", kid: "k-prepspaces-2026-auth" },
      payload: {
        iss: "https://auth.prepspaces.com",
        sub: "usr_998124_alice",
        aud: "https://api.prepspaces.com/v1/",
        client_id: "prepspaces-learning-portal",
        scope: "openid profile course:read lab:submit",
        exp: 1792182000
      },
      signature: "VALID (Targeted for API gateway resource server enforcement)"
    }
  };

  // ==========================================
  // LAB 6: PRIVILEGED ACCESS & ACCESS REVIEW
  // ==========================================
  const initialPamRecords = [
    { id: "pam-1", principal: "admin_breakglass", type: "Emergency Account", lastUsed: "Never (Dormant)", status: "compliant", note: "Offline vault with dual-custody authorization." },
    { id: "pam-2", principal: "svc_billing_export", type: "Service Principal", lastUsed: "2 mins ago", status: "needs_review", note: "Has Tenant Administrator role instead of read-only Billing Reader." },
    { id: "pam-3", principal: "dev_bob_temp_admin", type: "JIT Elevation", lastUsed: "48 hours ago", status: "expired", note: "JIT elevation window was 2 hours; permission still not revoked!" }
  ];
  const [pamRecords, setPamRecords] = useState(initialPamRecords);

  const resolvePamRecord = (id, newNote) => {
    setPamRecords((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: "compliant", note: newNote }
          : r
      )
    );
  };

  // ==========================================
  // LAB SUBMISSION CHECKLIST (8 ITEMS)
  // ==========================================
  const [checklist, setChecklist] = useState({
    lifecycle: false,
    authMethods: false,
    rbacDefined: false,
    objectAuthTested: false,
    federationTrust: false,
    pamReviewed: false,
    accessCertification: false,
    residualRisks: false
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedChecklistCount = Object.values(checklist).filter(Boolean).length;

  // ==========================================
  // KNOWLEDGE ASSESSMENT (6 QUESTIONS)
  // ==========================================
  const quizQuestions = [
    {
      id: 1,
      question: "What is the primary difference between authentication and authorization?",
      options: [
        "Authentication assigns roles; authorization validates passwords",
        "Authentication verifies identity; authorization determines permitted actions",
        "Authentication and authorization are interchangeable terms",
        "Authorization is only required for administrators"
      ],
      correct: 1,
      explanation:
        "Authentication verifies the identity claim of a user or principal (Who are you?). Authorization decides whether that authenticated identity is permitted to perform a requested operation on a specific resource (What are you allowed to do?)."
    },
    {
      id: 2,
      question: "Which combination qualifies as MFA?",
      options: [
        "Password and security question",
        "Two different passwords",
        "A password and an authenticator using a distinct factor category",
        "Username and email address"
      ],
      correct: 2,
      explanation:
        "True Multi-Factor Authentication (MFA) requires factors from at least two distinct categories: something you know (password/PIN), something you have (cryptographic security key/passkey), or something you are (biometric). Two passwords or a password + security question are both knowledge factors and do not constitute MFA."
    },
    {
      id: 3,
      question: "What is privilege creep?",
      options: [
        "Permissions accumulate as responsibilities change without appropriate removal",
        "All user permissions are removed after every login",
        "A system encrypts stored credentials",
        "A user chooses a new password"
      ],
      correct: 0,
      explanation:
        "Privilege creep occurs when users change teams, projects, or roles over time (the 'mover' lifecycle stage) and receive new permissions while their previous entitlements are never revoked, resulting in excessive, unneeded access."
    },
    {
      id: 4,
      question: "Which statement about OAuth 2.0 and OpenID Connect is correct?",
      options: [
        "OAuth 2.0 is a complete user-authentication protocol in every implementation",
        "OAuth 2.0 primarily handles delegated authorization; OpenID Connect adds an identity layer",
        "OpenID Connect is a Linux access-control mechanism",
        "They are encryption algorithms"
      ],
      correct: 1,
      explanation:
        "OAuth 2.0 is an authorization framework designed for delegated API access (using Access Tokens). OpenID Connect (OIDC) is an identity layer built on top of OAuth 2.0 that standardizes user authentication and provides identity claims via ID Tokens."
    },
    {
      id: 5,
      question: "Which is a strong authorization design for private user reports?",
      options: [
        "Hide the reports button from other users only in the frontend",
        "Allow any signed-in user to request any report identifier",
        "Check resource ownership or approved permissions on the trusted server side",
        "Trust the user ID supplied by the browser without verification"
      ],
      correct: 2,
      explanation:
        "To prevent Insecure Direct Object References (IDOR / BOLA), the server must independently verify the authenticated user's session and enforce relationship- or role-based ownership checks on every request, rather than trusting client-side parameters."
    },
    {
      id: 6,
      question: "Which authentication approach is designed to provide phishing resistance?",
      options: [
        "Properly implemented FIDO passkeys or security-key authentication",
        "Reusing the same password across services",
        "Approving all unexpected MFA push requests",
        "Sending passwords through email"
      ],
      correct: 0,
      explanation:
        "FIDO2 / WebAuthn passkeys and hardware security keys use public-key cryptography bound directly to the browser's verified TLS origin. An attacker's fake phishing proxy cannot replay or intercept the authentication assertion."
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleSelectAnswer = (qIndex, oIndex) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qIndex]: oIndex }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP NAVIGATION & MODULE SWITCHER */}
        <ModuleNav
          track="cybersecurity"
          currentModuleId="iam"
        />

        {/* HERO BANNER CARD */}
        <header className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
              <Shield size={12} className="text-[#f97316]" />
              Prepspaces Cybersecurity Masterclass
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              Module 11 of 24
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              NIST SP 800-63-4 · FIDO2 · OAuth 2.0 / OIDC · SAML
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono font-bold text-emerald-700">
              Intermediate · 12–16 Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            Identity and Access Management, Authentication, Authorization, and MFA
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-4xl leading-relaxed">
            Identity is the modern security perimeter. Master digital identity assurance levels (IAL/AAL/FAL), modern authentication protocols (FIDO2/WebAuthn, Passkeys, OAuth 2.0, OIDC, SAML), authorization architectures (RBAC, ABAC, ReBAC), privileged access management (PAM), and Zero Trust access policies.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-200/80">
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Duration</span>
              <span className="text-sm font-bold text-stone-900">12–16 Hours</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Track</span>
              <span className="text-sm font-bold text-stone-900">Identity Security · Zero Trust</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Standards</span>
              <span className="text-sm font-bold text-stone-900">NIST SP 800-63-4</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Hands-on Labs</span>
              <span className="text-sm font-bold text-stone-900">6 Interactive Labs</span>
            </div>
          </div>
        </header>

        {/* WORKSPACE NAVIGATION TABS */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          {[
            { id: "theory", label: "Theory & Frameworks", icon: BookOpen },
            { id: "labs", label: "Interactive Labs (1–6)", icon: Terminal },
            { id: "case-study", label: "Applied Case Study", icon: Target },
            { id: "assessment", label: "Knowledge Assessment", icon: HelpCircle },
            { id: "capstone", label: "Capstone & Rubric", icon: ShieldCheck }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition shadow-xs cursor-pointer ${
                  isActive
                    ? "bg-[#18181b] text-white shadow-stone-900/10"
                    : "bg-white text-stone-700 hover:bg-stone-100/80 border border-stone-200/70"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#f97316]" : "text-stone-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: THEORY & LESSONS (Unabridged)                                      */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick jump pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-stone-200">
              <span className="text-xs font-mono text-stone-400 uppercase tracking-wider font-bold">
                Jump To:
              </span>
              {[
                { num: 1, title: "L1: IAM Fundamentals" },
                { num: 2, title: "L2: Identity Lifecycle & Governance" },
                { num: 3, title: "L3: Authentication & Password Security" },
                { num: 4, title: "L4: MFA & Phishing-Resistant Access" },
                { num: 5, title: "L5: Authorization (RBAC, ABAC, ReBAC)" },
                { num: 6, title: "L6: SSO, Federation, OIDC & SAML" },
                { num: 7, title: "L7: Sessions, PAM & Non-Human Identities" }
              ].map((pill) => (
                <button
                  key={pill.num}
                  onClick={() => setSelectedLesson(pill.num)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-medium transition whitespace-nowrap cursor-pointer ${
                    selectedLesson === pill.num
                      ? "bg-[#18181b] text-white"
                      : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                  }`}
                >
                  {pill.title}
                </button>
              ))}
            </div>

            {/* LESSON 1 */}
            {selectedLesson === 1 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 1 · Core Principles
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Identity and Access Management Fundamentals
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Digital identities, proofing, authentication vs authorization, accounting/auditing, principals, and the principle of least privilege under NIST SP 800-63-4.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">1.1</span>
                    What is IAM?
                  </h3>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Identity and Access Management (IAM) is the combination of policies, processes, technologies, and controls used to establish digital identities, verify claims about those identities, grant appropriate access, and remove access when it is no longer justified.
                  </p>
                </div>

                {/* Terminology Table */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">1.2</span>
                    Important IAM Terminology
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-mono">
                      <thead className="bg-stone-100 text-stone-700 uppercase text-[11px]">
                        <tr>
                          <th className="p-3">Term</th>
                          <th className="p-3">Meaning</th>
                          <th className="p-3">Enterprise Example</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-700">
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Digital Identity</td>
                          <td className="p-3 font-sans">A representation of an entity within a digital system.</td>
                          <td className="p-3">Employee account in an enterprise directory (Okta/Entra ID).</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Identity Proofing</td>
                          <td className="p-3 font-sans">Establishing confidence in a claimed identity during onboarding.</td>
                          <td className="p-3">Verifying a government ID and payroll match before provisioning.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-orange-600">Authentication</td>
                          <td className="p-3 font-sans">Verifying a presented identity claim ('Who are you?').</td>
                          <td className="p-3">Signing in with a password and FIDO2 hardware security key.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-blue-600">Authorization</td>
                          <td className="p-3 font-sans">Deciding permitted actions on resources ('What may you do?').</td>
                          <td className="p-3">Allowing a student to read their own report but not another's.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Principal</td>
                          <td className="p-3 font-sans">An entity recognized by a security model.</td>
                          <td className="p-3">Human user, automated service account, or workload identity.</td>
                        </tr>
                        <tr className="hover:bg-stone-50">
                          <td className="p-3 font-bold text-stone-900">Relying Party</td>
                          <td className="p-3 font-sans">An application that relies on an IdP's authentication claim.</td>
                          <td className="p-3">PrepSpaces portal consuming assertions from corporate SSO.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 1.3 AuthN vs AuthZ */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">1.3</span>
                    Authentication vs. Authorization
                  </h3>
                  <div className="p-4 bg-stone-900 text-stone-200 rounded-xl font-mono text-xs space-y-2">
                    <div className="text-orange-400 font-bold">The 4-Step Access Evaluation Lifecycle:</div>
                    <div className="text-stone-300">1. Identity Claim $\to$ User presents username/client_id.</div>
                    <div className="text-stone-300">2. Authentication $\to$ Verify proof (passkey, password, certificate).</div>
                    <div className="text-emerald-400 font-bold">3. Authorization $\to$ Check roles, ownership, resource ACLs on the server.</div>
                    <div className="text-cyan-300">4. Decision & Audit $\to$ Allow/Deny and emit immutable security log.</div>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-950">
                    <strong>OWASP Reminder:</strong> An authenticated user can still be completely unauthorized for a resource. Never confuse a successful login with permission to access all records.
                  </div>
                </div>
              </section>
            )}

            {/* LESSON 2 */}
            {selectedLesson === 2 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 2 · Governance & Lifecycle
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Identity Lifecycle and Identity Governance
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    The Joiner-Mover-Leaver (JML) paradigm, preventing privilege creep, automated deprovisioning, and recurring access certifications.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-1.5">
                    <strong className="text-stone-900 font-bold text-sm block font-mono">1. Joiner</strong>
                    <p className="text-stone-600">
                      Identity proofing, HR approval, birthright role assignment, and initial MFA authenticator enrollment.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-1.5">
                    <strong className="text-stone-900 font-bold text-sm block font-mono">2. Mover</strong>
                    <p className="text-stone-600">
                      Role transition review. Explicitly <strong>revoke previous entitlements</strong> before assigning new ones to prevent privilege creep.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-1.5">
                    <strong className="text-stone-900 font-bold text-sm block font-mono">3. Leaver</strong>
                    <p className="text-stone-600">
                      Immediate account suspension, refresh token revocation, device certificate wipe, and resource ownership transfer.
                    </p>
                  </div>
                </div>

                {/* 2.3 Privilege Creep */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">2.3</span>
                    Privilege Creep: The Silent Risk
                  </h3>
                  <p className="text-xs text-stone-700 leading-relaxed">
                    Privilege creep occurs when an employee accumulates permissions across multiple department changes over years without old rights being pruned. An employee who worked in Helpdesk, then Development, then DevOps might inadvertently retain direct Active Directory password reset rights, production code deployment rights, and cloud administrative credentials simultaneously.
                  </p>
                </div>
              </section>
            )}

            {/* LESSON 3 */}
            {selectedLesson === 3 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 3 · Authentication & Passwords
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Authentication Fundamentals and Password Security
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Authentication factors (Know, Have, Are), password attack vectors, NIST SP 800-63B-4 modern password standards, and adaptive hashing (Argon2id, bcrypt).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="text-stone-900 block font-mono">1. Something You Know</strong>
                    <p className="text-stone-600">Password, passphrase, PIN. Subject to credential stuffing and phishing.</p>
                  </div>
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="text-stone-900 block font-mono">2. Something You Have</strong>
                    <p className="text-stone-600">Hardware security key (YubiKey), smartphone authenticator, cryptographic smartcard.</p>
                  </div>
                  <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
                    <strong className="text-stone-900 block font-mono">3. Something You Are</strong>
                    <p className="text-stone-600">Biometric template: fingerprint sensor, facial recognition matching local secure enclave.</p>
                  </div>
                </div>

                {/* NIST SP 800-63B-4 Guidelines */}
                <div className="space-y-3 pt-4 border-t border-stone-100">
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center text-xs font-mono">3.3</span>
                    NIST SP 800-63B-4 Modern Password Standards
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white border border-stone-200 rounded-xl space-y-1">
                      <strong className="text-emerald-700 font-mono">DO (Recommended):</strong>
                      <ul className="list-disc pl-4 space-y-0.5 text-stone-600 text-[11px]">
                        <li>Support long passphrases (up to 64+ characters)</li>
                        <li>Encourage password managers</li>
                        <li>Screen against HaveIBeenPwned / breach wordlists</li>
                        <li>Store hashes using Argon2id, scrypt, or bcrypt</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-white border border-stone-200 rounded-xl space-y-1">
                      <strong className="text-red-700 font-mono">DO NOT (Outdated Guidance):</strong>
                      <ul className="list-disc pl-4 space-y-0.5 text-stone-600 text-[11px]">
                        <li>Do NOT force arbitrary 90-day password expiration</li>
                        <li>Do NOT force complex special-character compositions</li>
                        <li>Do NOT truncate passwords or disable paste</li>
                        <li>Do NOT store plaintext or fast hashes (MD5, SHA-256)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* LESSON 4 */}
            {selectedLesson === 4 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 4 · Multifactor Authentication
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Multifactor Authentication and Phishing-Resistant Access
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    MFA mechanisms, why two passwords is NOT MFA, MFA fatigue attacks, and CISA recommendations on FIDO2/WebAuthn origin-bound passkeys.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-mono">
                    <thead className="bg-stone-100 text-stone-700 uppercase text-[11px]">
                      <tr>
                        <th className="p-3">MFA Method</th>
                        <th className="p-3">Phishing Resistance</th>
                        <th className="p-3">Primary Vulnerability</th>
                        <th className="p-3">CISA Recommendation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      <tr className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-900">SMS / Voice Code</td>
                        <td className="p-3 text-red-600 font-bold">No</td>
                        <td className="p-3 font-sans">SIM swapping, SS7 interception, real-time phishing relay</td>
                        <td className="p-3 text-amber-700 font-sans">Phase out for critical systems</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-900">Authenticator App (TOTP)</td>
                        <td className="p-3 text-red-600 font-bold">No</td>
                        <td className="p-3 font-sans">Relayed in real-time by Evilginx2 proxy phishing sites</td>
                        <td className="p-3 font-sans">Acceptable baseline for general users</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-900">Mobile Push Prompt</td>
                        <td className="p-3 text-red-600 font-bold">No</td>
                        <td className="p-3 font-sans">MFA fatigue (bombing users until they approve prompt)</td>
                        <td className="p-3 font-sans">Require number matching if used</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-emerald-600">FIDO2 / WebAuthn Passkeys</td>
                        <td className="p-3 text-emerald-600 font-bold">YES (Phishing-Resistant)</td>
                        <td className="p-3 font-sans">Physical theft of token (protected by PIN/biometric)</td>
                        <td className="p-3 text-emerald-700 font-sans font-bold">Gold Standard for Enterprise & Admins</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* LESSON 5 */}
            {selectedLesson === 5 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 5 · Authorization Architectures
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Authorization Models and Access Control
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Discretionary (DAC), Mandatory (MAC), Role-Based (RBAC), Attribute-Based (ABAC), and Relationship-Based (ReBAC) access control models.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-1.5">
                    <strong className="text-stone-900 block font-mono text-sm">Role-Based Access Control (RBAC)</strong>
                    <p className="text-stone-600">
                      Assigns permissions to roles (e.g. Student, Instructor, Admin), and subjects to those roles. Standard for coarse-grained enterprise workflows.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-1.5">
                    <strong className="text-stone-900 block font-mono text-sm">Attribute-Based Access Control (ABAC)</strong>
                    <p className="text-stone-600">
                      Evaluates attributes of user (department, clearance), resource (classification), action (read, delete), and environment (time, device IP).
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-1.5">
                    <strong className="text-stone-900 block font-mono text-sm">Relationship-Based (ReBAC)</strong>
                    <p className="text-stone-600">
                      Evaluates dynamic relationships (e.g. <code>user IS_OWNER_OF report_101</code> or <code>instructor IN_CHARGE_OF course_3</code>). Prevents IDOR.
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* LESSON 6 */}
            {selectedLesson === 6 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 6 · Federation & Protocols
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Single Sign-On, Federation, OAuth 2.0, OpenID Connect, and SAML
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Architectural comparison of SSO, OAuth 2.0 delegated authorization, OpenID Connect authentication tokens, and SAML XML assertions.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-mono">
                    <thead className="bg-stone-100 text-stone-700 uppercase text-[11px]">
                      <tr>
                        <th className="p-3">Protocol / Standard</th>
                        <th className="p-3">Primary Purpose</th>
                        <th className="p-3">Token Format</th>
                        <th className="p-3">Typical Application</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 text-stone-700">
                      <tr className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-900">OAuth 2.0</td>
                        <td className="p-3 font-sans">Delegated Authorization</td>
                        <td className="p-3">Access Token (Bearer/JWT)</td>
                        <td className="p-3 font-sans">Allowing a mobile client to call backend APIs on user's behalf</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-900">OpenID Connect (OIDC)</td>
                        <td className="p-3 font-sans">User Authentication on OAuth 2.0</td>
                        <td className="p-3">ID Token (Signed JWT)</td>
                        <td className="p-3 font-sans">Web app login via Google, GitHub, or Okta</td>
                      </tr>
                      <tr className="hover:bg-stone-50">
                        <td className="p-3 font-bold text-stone-900">SAML 2.0</td>
                        <td className="p-3 font-sans">Federated Enterprise SSO</td>
                        <td className="p-3">XML Signed Assertion</td>
                        <td className="p-3 font-sans">Legacy corporate intranet and SaaS enterprise logins</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* LESSON 7 */}
            {selectedLesson === 7 && (
              <section className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
                <div className="border-b border-stone-100 pb-4">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-600 uppercase tracking-wider">
                    Lesson 7 · Sessions, PAM & Workloads
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    Session Security, Privileged Access, and Non-Human Identities
                  </h2>
                  <p className="text-stone-600 text-sm mt-1">
                    Cookie security flags (HttpOnly, Secure, SameSite), Privileged Access Management (PAM), Just-In-Time (JIT) access, and service account workload identities.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-900 text-stone-200 space-y-2">
                    <div className="text-orange-400 font-bold">Secure Session Cookie Policy:</div>
                    <div className="text-stone-300">Set-Cookie: session_id=x99aB7z...;</div>
                    <div className="text-emerald-400">Secure;               # HTTPS only</div>
                    <div className="text-emerald-400">HttpOnly;             # Blocks JavaScript XSS reading</div>
                    <div className="text-emerald-400">SameSite=Lax;         # Mitigates cross-site request forgery</div>
                  </div>

                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-900 text-stone-200 space-y-2">
                    <div className="text-orange-400 font-bold">PAM & Workload Identity Best Practices:</div>
                    <div className="text-stone-300">• Separate admin accounts from daily email accounts.</div>
                    <div className="text-stone-300">• Enforce JIT (Just-In-Time) elevation with 30-min auto-expiry.</div>
                    <div className="text-stone-300">• Eliminate hardcoded API keys; use cloud managed identities.</div>
                  </div>
                </div>
              </section>
            )}

            {/* References Section */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-stone-500 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-stone-600" />
                Authoritative Reading & Reference Documentation
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                <a
                  href="https://pages.nist.gov/800-63-4/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    NIST SP 800-63-4
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Digital Identity Guidelines</div>
                </a>

                <a
                  href="https://www.cisa.gov/resources-tools/resources/implementing-phishing-resistant-mfa"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    CISA Phishing-Resistant MFA
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">MFA Best Practices</div>
                </a>

                <a
                  href="https://fidoalliance.org/passkeys/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    FIDO2 Passkeys
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">WebAuthn Standards</div>
                </a>

                <a
                  href="https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-white rounded-xl border border-stone-200 hover:border-orange-500 transition block group"
                >
                  <div className="font-bold text-stone-900 group-hover:text-orange-600 flex items-center justify-between">
                    OWASP Authorization
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">Cheat Sheet Series</div>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE LABS (1–6)                                             */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-10">
            {/* Lab Intro Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  Hands-On IAM Sandboxes · 6 Interactive Labs
                </span>
                <h2 className="text-lg sm:text-xl font-black text-[#18181b]">
                  Identity, Authentication & Authorization Sandboxes
                </h2>
                <p className="text-xs text-stone-600 mt-0.5">
                  Model JML lifecycles, benchmark phishing-resistant MFA, test IDOR/BOLA authorization flaws, inspect JWT tokens, and enforce JIT privilege management.
                </p>
              </div>

              <div className="px-3 py-2 bg-stone-50 rounded-xl border border-stone-200 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Checklist: <strong>{completedChecklistCount}/8</strong> Complete</span>
              </div>
            </div>

            {/* LAB 1: IDENTITY LIFECYCLE (JML) */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 1 · Foundation
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Identity Lifecycle Governance (Joiner · Mover · Leaver)
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Identify and remediate privilege creep on movers, revoke access on leavers, and enforce birthright MFA on new joiners.
                </p>
              </div>

              <div className="space-y-3">
                {lifecycleUsers.map((u) => (
                  <div
                    key={u.id}
                    className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs transition ${
                      u.status === "compliant"
                        ? "bg-emerald-50/40 border-emerald-200"
                        : "bg-stone-50 border-stone-200"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-stone-900 font-mono text-sm">{u.name}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-stone-200 text-stone-800">
                          {u.stage}
                        </span>
                      </div>
                      <div className="text-stone-500 font-mono text-[11px] mt-0.5">
                        {u.role} ({u.dept}) · Entitlements: {u.entitlements.join(", ")}
                      </div>
                      <div className="text-stone-700 mt-1 font-sans">{u.issue}</div>
                    </div>

                    <div className="shrink-0">
                      {u.status === "pending_review" && (
                        <button
                          onClick={() => remediateLifecycle(u.id, "purge_creep")}
                          className="px-3 py-1.5 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 cursor-pointer"
                        >
                          Prune Legacy Roles
                        </button>
                      )}
                      {u.status === "pending_deprovision" && (
                        <button
                          onClick={() => remediateLifecycle(u.id, "deprovision")}
                          className="px-3 py-1.5 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 cursor-pointer"
                        >
                          Revoke & Deprovision
                        </button>
                      )}
                      {u.status === "pending_mfa" && (
                        <button
                          onClick={() => remediateLifecycle(u.id, "enroll_mfa")}
                          className="px-3 py-1.5 bg-[#18181b] text-white rounded-lg font-bold hover:bg-stone-800 cursor-pointer"
                        >
                          Enroll FIDO2 Passkey
                        </button>
                      )}
                      {u.status === "compliant" && (
                        <span className="text-emerald-700 font-bold flex items-center gap-1 font-mono">
                          <Check className="w-4 h-4" /> Compliant
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LAB 2: COMPARE AUTHENTICATION METHODS */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 2 · Authentication
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Authentication Factor & Phishing-Resistance Benchmark
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {Object.keys(authMethods).map((k) => (
                  <button
                    key={k}
                    onClick={() => setSelectedAuthMethod(k)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer text-left ${
                      selectedAuthMethod === k
                        ? "bg-orange-600 text-white border-orange-600"
                        : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    {authMethods[k].name.split("(")[0]}
                  </button>
                ))}
              </div>

              <div className="p-5 bg-stone-50 rounded-xl border border-stone-200 space-y-3 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 pb-2">
                  <div className="font-bold text-stone-900 text-sm font-mono">{authMethods[selectedAuthMethod].name}</div>
                  <span
                    className={`px-2.5 py-1 rounded-full font-mono font-bold text-[11px] ${
                      authMethods[selectedAuthMethod].phishingResistant
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {authMethods[selectedAuthMethod].phishingResistant ? "Phishing-Resistant" : "Phishable by AiTM Proxy"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="text-stone-400 block font-mono text-[10px] uppercase">Factors Tested</span>
                    <span className="font-bold text-stone-800">{authMethods[selectedAuthMethod].factors}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="text-stone-400 block font-mono text-[10px] uppercase">Credential Stuffing Resistance</span>
                    <span className="font-bold text-stone-800">{authMethods[selectedAuthMethod].credentialStuffing}</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="text-stone-400 block font-mono text-[10px] uppercase">CISA Tier Rating</span>
                    <span className="font-bold text-stone-800">{authMethods[selectedAuthMethod].cisaRating}</span>
                  </div>
                </div>

                <p className="text-stone-700 pt-1 leading-relaxed">
                  {authMethods[selectedAuthMethod].desc}
                </p>
              </div>
            </div>

            {/* LAB 3: BUILD AN RBAC POLICY */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 3 · Authorization
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Role-Based Access Control (RBAC) Scope Matrix
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {roles.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRole(r)}
                    className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer text-left ${
                      selectedRole.id === r.id
                        ? "bg-[#18181b] text-white border-[#18181b]"
                        : "bg-white text-stone-700 border-stone-200 hover:bg-stone-50"
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>

              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs font-mono">
                <div className="font-bold text-stone-900 text-sm">{selectedRole.name} Role Entitlements:</div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedRole.permissions.map((p) => (
                    <span key={p} className="px-2.5 py-1 bg-white border border-stone-300 rounded-md text-stone-800">
                      • {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* LAB 4: OBJECT-LEVEL AUTHORIZATION (IDOR/BOLA) */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 4 · Application Security
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Object-Level Authorization & IDOR / BOLA Sandbox
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  You are logged in as <strong>student-42</strong> (legitimate owner of <code>rep-101</code>). Test what happens when attempting to fetch another user's report (<code>rep-999</code>).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="font-mono text-stone-500 font-bold block mb-1">Target Report ID Parameter:</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setClientRequestedId("rep-101")}
                        className={`px-3 py-1.5 rounded-lg border font-mono font-bold cursor-pointer ${
                          clientRequestedId === "rep-101" ? "bg-orange-600 text-white" : "bg-white"
                        }`}
                      >
                        rep-101 (My Report)
                      </button>
                      <button
                        onClick={() => setClientRequestedId("rep-999")}
                        className={`px-3 py-1.5 rounded-lg border font-mono font-bold cursor-pointer ${
                          clientRequestedId === "rep-999" ? "bg-orange-600 text-white" : "bg-white"
                        }`}
                      >
                        rep-999 (Target User Report)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-stone-500 font-bold block mb-1">Server Authorization Enforcement Mode:</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setServerEnforcement("frontend_only")}
                        className={`px-3 py-1.5 rounded-lg border font-mono font-bold cursor-pointer ${
                          serverEnforcement === "frontend_only" ? "bg-red-700 text-white" : "bg-white"
                        }`}
                      >
                        Vulnerable (Frontend Hiding Only)
                      </button>
                      <button
                        onClick={() => setServerEnforcement("strict_relationship")}
                        className={`px-3 py-1.5 rounded-lg border font-mono font-bold cursor-pointer ${
                          serverEnforcement === "strict_relationship" ? "bg-emerald-700 text-white" : "bg-white"
                        }`}
                      >
                        Secure (Server-Side Ownership Check)
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={simulateAccessReport}
                    className="w-full py-2.5 bg-[#18181b] text-white rounded-xl font-bold cursor-pointer hover:bg-stone-800 transition"
                  >
                    Execute GET /api/v1/reports/{clientRequestedId}
                  </button>
                </div>

                {/* Response inspector */}
                <div className="p-4 bg-stone-900 text-stone-200 rounded-xl font-mono text-xs space-y-2 border border-stone-800">
                  <div className="text-orange-400 font-bold uppercase">HTTP Response:</div>
                  {idorResult ? (
                    <div className="space-y-1.5">
                      <div>Status: <span className={idorResult.status === 200 && idorResult.decision.includes("CRITICAL") ? "text-red-400 font-bold" : idorResult.status === 200 ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>{idorResult.status} {idorResult.decision}</span></div>
                      <div className="p-2.5 bg-stone-950 rounded border border-stone-800 text-stone-300">
                        {idorResult.data}
                      </div>
                      <div className="text-[11px] text-cyan-300 pt-1">
                        <strong>Analyst Finding:</strong> {idorResult.note}
                      </div>
                    </div>
                  ) : (
                    <div className="text-stone-500 italic">Click Execute to test API authorization boundary.</div>
                  )}
                </div>
              </div>
            </div>

            {/* LAB 5: OIDC & JWT TOKEN INSPECTOR */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 5 · Federation & Tokens
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  OAuth 2.0 / OIDC Token Dissector (ID Token vs. Access Token)
                </h3>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setTokenType("id_token")}
                  className={`px-3 py-1.5 rounded-lg border font-mono text-xs font-bold cursor-pointer ${
                    tokenType === "id_token" ? "bg-orange-600 text-white" : "bg-white"
                  }`}
                >
                  ID Token (OpenID Connect)
                </button>
                <button
                  onClick={() => setTokenType("access_token")}
                  className={`px-3 py-1.5 rounded-lg border font-mono text-xs font-bold cursor-pointer ${
                    tokenType === "access_token" ? "bg-orange-600 text-white" : "bg-white"
                  }`}
                >
                  Access Token (OAuth 2.0)
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 bg-stone-900 text-stone-200 rounded-xl space-y-2 border border-stone-800">
                  <div className="text-orange-400 font-bold">Decoded Claims Payload:</div>
                  <pre className="text-emerald-300 text-[11px] overflow-x-auto">
                    {JSON.stringify(mockTokens[tokenType].payload, null, 2)}
                  </pre>
                </div>

                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                  <div className="font-bold text-stone-900 text-sm">Security Verification:</div>
                  <div className="space-y-1 text-stone-600">
                    <div>Algorithm: <strong>{mockTokens[tokenType].header.alg}</strong></div>
                    <div>Signature Status: <span className="text-emerald-700 font-bold">{mockTokens[tokenType].signature}</span></div>
                    <p className="text-[11px] text-stone-500 pt-2 font-sans">
                      Never decode tokens client-side without cryptographically verifying the signature against the IdP's JWKS endpoint!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LAB 6: PRIVILEGED ACCESS & ACCESS REVIEW */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-5 shadow-xs">
              <div className="pb-3 border-b border-stone-100">
                <div className="text-xs font-mono font-bold text-orange-600 uppercase">
                  Lab 6 · Governance
                </div>
                <h3 className="text-base font-bold text-[#18181b]">
                  Privileged Access Management (PAM) & Access Certification
                </h3>
              </div>

              <div className="space-y-3">
                {pamRecords.map((r) => (
                  <div
                    key={r.id}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <div className="font-mono font-bold text-stone-900 text-sm">{r.principal} ({r.type})</div>
                      <div className="text-stone-500 font-mono text-[11px]">Last Activity: {r.lastUsed}</div>
                      <div className="text-stone-700 mt-1 font-sans">{r.note}</div>
                    </div>

                    <div className="shrink-0">
                      {r.status === "needs_review" && (
                        <button
                          onClick={() => resolvePamRecord(r.id, "Remediated: Scoped to Billing Reader least-privilege role.")}
                          className="px-3 py-1.5 bg-amber-600 text-white rounded-lg font-bold hover:bg-amber-700 cursor-pointer"
                        >
                          Enforce Least Privilege
                        </button>
                      )}
                      {r.status === "expired" && (
                        <button
                          onClick={() => resolvePamRecord(r.id, "Remediated: JIT elevation revoked and ticket closed.")}
                          className="px-3 py-1.5 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 cursor-pointer"
                        >
                          Revoke Expired JIT
                        </button>
                      )}
                      {r.status === "compliant" && (
                        <span className="text-emerald-700 font-bold flex items-center gap-1 font-mono">
                          <Check className="w-4 h-4" /> Compliant
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LAB SUBMISSION CHECKLIST (8 Items) */}
            <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-stone-900">
                    Lab Submission Readiness Checklist
                  </h3>
                  <span className="text-xs text-stone-500">
                    Verify all IAM design, authentication benchmarks, and authorization tests prior to capstone submission.
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-mono font-bold">
                  {completedChecklistCount} / 8 Completed
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {[
                  { key: "lifecycle", label: "1. Identity lifecycle and ownership documented" },
                  { key: "authMethods", label: "2. Authentication methods and recovery risks evaluated" },
                  { key: "rbacDefined", label: "3. RBAC roles and permissions defined" },
                  { key: "objectAuthTested", label: "4. Object-level authorization tests completed" },
                  { key: "federationTrust", label: "5. Federation trust and validation requirements documented" },
                  { key: "pamReviewed", label: "6. Privileged identities and service accounts reviewed" },
                  { key: "accessCertification", label: "7. Access review decisions have responsible owners" },
                  { key: "residualRisks", label: "8. Evidence and residual risks documented" }
                ].map((item) => (
                  <label
                    key={item.key}
                    onClick={() => toggleChecklist(item.key)}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-200 hover:border-stone-300 cursor-pointer transition select-none"
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.key]}
                      readOnly
                      className="rounded text-orange-600 focus:ring-orange-500"
                    />
                    <span className={checklist[item.key] ? "line-through text-stone-400" : "text-stone-800 font-medium"}>
                      {item.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: APPLIED CASE STUDY                                                 */}
        {/* ========================================================================= */}
        {activeTab === "case-study" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                Applied Scenario & Architectural Autopsy
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                Case Study: HealthSync Cloud BOLA Breach & Zero-Trust Overhaul
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                How an Insecure Direct Object Reference (BOLA/IDOR) and absence of phishing-resistant MFA exposed 2.4 million medical records.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold text-stone-900">
                1. The Root Cause Failure
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed">
                HealthSync implemented SSO via OpenID Connect and enforced SMS MFA. However, its patient portal suffered from a fatal authorization flaw: once authenticated as a patient, an attacker could iterate <code>GET /api/v1/patients/&#123;patient_id&#125;/records</code> from 1 to 2,400,000 without the server verifying if the authenticated subject matched the requested patient ID.
              </p>

              <div className="p-4 bg-red-50 border border-red-200 rounded-xl space-y-2 text-xs font-mono text-red-950">
                <div className="font-bold uppercase tracking-wider">Attack Kill-Chain:</div>
                <div>1. Attacker registered a legitimate $5 patient test account.</div>
                <div>2. Intercepted request in Burp Suite: <code>GET /api/v1/patients/10429/records</code>.</div>
                <div>3. Replaced ID with <code>10430</code> $\to$ Server returned another patient's medical history!</div>
                <div>4. Automated scraper scraped 2.4 million records in 4 hours due to missing rate limiting.</div>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-base font-bold text-stone-900">
                2. The PrepSpaces Zero-Trust Identity Blueprint
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono text-sm flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-orange-600" />
                    1. ReBAC Server Ownership Checks
                  </div>
                  <p className="text-stone-600">
                    Enforced server-side relationship validation: <code>token.sub === patient.user_id</code>. Any mismatch emits a 403 Forbidden alert.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono text-sm flex items-center gap-1.5">
                    <Key className="w-4 h-4 text-blue-600" />
                    2. FIDO2 Passkeys for Providers
                  </div>
                  <p className="text-stone-600">
                    Eliminated SMS OTP for clinicians, deploying WebAuthn hardware keys to stop AiTM phishing attacks.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 space-y-2">
                  <div className="font-bold text-stone-900 font-mono text-sm flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-emerald-600" />
                    3. Continuous Risk Telemetry
                  </div>
                  <p className="text-stone-600">
                    Integrated token binding and anomaly detection to flag rapid sequential ID lookups and revoke sessions automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: KNOWLEDGE ASSESSMENT (6 Questions)                                 */}
        {/* ========================================================================= */}
        {activeTab === "assessment" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-8 shadow-xs">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                Interactive Knowledge Assessment · 6 Questions
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                Module 11 Knowledge Validation
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                Evaluate your mastery of authentication vs authorization, MFA factors, privilege creep, OAuth/OIDC, and server-side access control.
              </p>
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selectedOpt = quizAnswers[idx];
                const isCorrect = selectedOpt === q.correct;
                return (
                  <div
                    key={q.id}
                    className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-4"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-stone-900">
                        <span className="font-mono text-orange-600 mr-2">Question {idx + 1} of 6:</span>
                        {q.question}
                      </h4>
                      {quizSubmitted && (
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-bold font-mono ${
                            isCorrect
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt, oIdx) => {
                        let btnStyle = "bg-white border-stone-200 text-stone-700 hover:bg-stone-100";
                        if (selectedOpt === oIdx) {
                          btnStyle = "bg-orange-50 border-orange-500 text-orange-950 font-semibold";
                        }
                        if (quizSubmitted) {
                          if (oIdx === q.correct) {
                            btnStyle = "bg-emerald-100 border-emerald-500 text-emerald-950 font-bold";
                          } else if (selectedOpt === oIdx && !isCorrect) {
                            btnStyle = "bg-red-100 border-red-500 text-red-950 font-bold";
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectAnswer(idx, oIdx)}
                            className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm transition cursor-pointer ${btnStyle}`}
                          >
                            <span className="font-mono mr-2 text-stone-400">
                              {String.fromCharCode(65 + oIdx)}.
                            </span>
                            {opt}
                          </button>
                        );
                      })}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600 leading-relaxed">
                        <strong className="text-stone-800 block mb-0.5">Pedagogical Explanation:</strong>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              {!quizSubmitted ? (
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(quizAnswers).length < quizQuestions.length}
                  className="px-6 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs sm:text-sm hover:bg-orange-700 transition cursor-pointer disabled:opacity-50"
                >
                  Submit Assessment ({Object.keys(quizAnswers).length}/6 Answered)
                </button>
              ) : (
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="text-sm font-bold text-stone-900 font-mono">
                    Score: {calculateScore()} / 6 ({Math.round((calculateScore() / 6) * 100)}%)
                  </div>
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 bg-white text-stone-700 text-xs font-bold hover:bg-stone-50 transition cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset & Retake
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CAPSTONE PROJECT & EVALUATION RUBRIC                                */}
        {/* ========================================================================= */}
        {activeTab === "capstone" && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-8 shadow-xs">
            <div className="border-b border-stone-100 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                Portfolio Deliverable · Enterprise IAM Architecture
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                Final Capstone: Design and Validate a Secure IAM System
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                Design a complete, defensible IAM architecture for PrepSpaces with phishing-resistant MFA, server-side authorization matrices, OIDC federation, and PAM governance.
              </p>
            </div>

            {/* Capstone Deliverables Parts A-G */}
            <div className="space-y-4">
              <h3 className="text-base font-bold text-stone-900">
                Capstone Deliverables (Parts A–G)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part A — Identity Inventory & Scope</strong>
                  <p className="text-stone-600">
                    Catalog human identities (students, instructors, admins, contractors) and non-human identities (reporting daemons, CI/CD runners, database service principals).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part B — Identity Lifecycle (JML) Workflows</strong>
                  <p className="text-stone-600">
                    Design automated Joiner onboarding, Mover entitlement pruning to eliminate privilege creep, and Leaver instantaneous token and session revocation.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part C — Authentication & Phishing-Resistant MFA</strong>
                  <p className="text-stone-600">
                    Define password policy (Argon2id hashing), FIDO2/WebAuthn passkey requirements for administrators, and secure account recovery mechanisms.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part D — Authorization & IDOR/BOLA Defense</strong>
                  <p className="text-stone-600">
                    Construct a 5-role RBAC matrix combined with ReBAC relationship checks preventing cross-tenant private report tampering.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part E — SSO, OIDC & Session Security</strong>
                  <p className="text-stone-600">
                    Map OpenID Connect authorization-code flow, ID/Access token validation rules, and secure cookie parameters (HttpOnly, Secure, SameSite=Lax).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                  <strong className="text-stone-900 font-bold block text-sm">Part F & G — PAM Governance & Final Audit Report</strong>
                  <p className="text-stone-600">
                    Specify Just-In-Time (JIT) 30-minute administrative elevation, break-glass vaulting, access certification cadences, and an executive summary.
                  </p>
                </div>
              </div>
            </div>

            {/* Evaluation Rubric */}
            <div className="space-y-4 pt-4 border-t border-stone-100">
              <h3 className="text-base font-bold text-stone-900">
                Evaluation Rubric (100% Total · 70% Passing Threshold)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[11px]">
                    <tr>
                      <th className="p-3">Assessment Area</th>
                      <th className="p-3">Weight</th>
                      <th className="p-3">Passing Standard (Competent)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Identity Inventory & Lifecycle Design</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Complete catalog of human & service accounts; verified JML workflow preventing privilege creep.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Authentication & MFA Strategy</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3">Phishing-resistant FIDO2 passkeys for admins, modern NIST password hashing (Argon2id), and recovery safety.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Authorization & Role Design</td>
                      <td className="p-3 font-mono font-bold text-orange-600">20%</td>
                      <td className="p-3">Rigorous RBAC + ReBAC model with empirical server-side validation against BOLA/IDOR exploits.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Federation & Session Security</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Cryptographic token validation (OIDC/OAuth 2.0) and hardened HTTP session cookie flags.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Privileged Access & Governance</td>
                      <td className="p-3 font-mono font-bold text-orange-600">15%</td>
                      <td className="p-3">Time-limited JIT access, break-glass dual-custody procedures, and recurring access reviews.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Validation & Evidence Quality</td>
                      <td className="p-3 font-mono font-bold text-orange-600">10%</td>
                      <td className="p-3">Documented test cases for allowed vs denied operations with corresponding token and log evidence.</td>
                    </tr>
                    <tr className="hover:bg-stone-50">
                      <td className="p-3 font-bold text-stone-900">Reporting & Professional Judgment</td>
                      <td className="p-3 font-mono font-bold text-orange-600">5%</td>
                      <td className="p-3">Clear executive presentation, residual risk documentation, and post-capstone maintenance plan.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 5. FOOTER NAVIGATION (PREVIOUS & NEXT MODULE) */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
          <button
            onClick={() => navigate("/learning/cybersecurity/os-security")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 10 (OS Security & Hardening)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/cryptography")}
            className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 12 (Cryptography, PKI & TLS)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
