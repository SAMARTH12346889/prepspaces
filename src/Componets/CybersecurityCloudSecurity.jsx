import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModuleNav from "./ModuleNav";
import {
  Cloud,
  Shield,
  Key,
  Lock,
  Terminal,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  AlertTriangle,
  Play,
  HelpCircle,
  Award,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  RefreshCw,
  Eye,
  EyeOff,
  Server,
  Database,
  Code,
  Check,
  X,
  Copy,
  ListCheck,
  Sparkles,
  AlertCircle,
  Cpu,
  Bug,
  Globe,
  Layers,
  UserCheck,
  ShieldAlert,
  FileText,
  Send,
  UserX,
  Network,
  Filter,
  Zap,
  Activity,
  ShieldCheck,
  Smartphone,
  Laptop,
  Sliders,
  FolderGit2,
  Boxes,
  Container,
  FileCheck,
  Fingerprint,
  Search,
  CheckSquare,
  Square,
  BarChart3,
  Wrench,
  RotateCcw,
  Workflow
} from "lucide-react";

export default function CybersecurityCloudSecurity() {
  const navigate = useNavigate();

  // Active Tab state
  const [activeTab, setActiveTab] = useState("theory");
  const [activeLesson, setActiveLesson] = useState(1);

  // Copy helper
  const [copiedSnippets, setCopiedSnippets] = useState({});
  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippets((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCopiedSnippets((prev) => ({ ...prev, [id]: false }));
    }, 2000);
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE CHECKPOINT (LESSON 1)
  // ---------------------------------------------------------------------------
  const [checkpointAnswer, setCheckpointAnswer] = useState(null);
  const [checkpointSubmitted, setCheckpointSubmitted] = useState(false);

  // ---------------------------------------------------------------------------
  // LAB 1: IAM POLICY AUDIT & LEAST PRIVILEGE
  // ---------------------------------------------------------------------------
  const [lab1PolicyView, setLab1PolicyView] = useState("overprivileged");
  const [lab1Analyzed, setLab1Analyzed] = useState(false);

  // ---------------------------------------------------------------------------
  // LAB 2: CLOUD MISCONFIGURATION TRIAGE & RISK SCORING
  // ---------------------------------------------------------------------------
  const [lab2Assets, setLab2Assets] = useState([
    {
      id: "reports-store",
      asset: "reports-store (S3 Bucket)",
      observed: "Public-access block disabled; ACL allows AllUsers Read",
      concern: "Potential sensitive financial report exfiltration",
      exposure: 9,
      privilege: 8,
      dataImpact: 9,
      exploitability: 9,
      status: "Unverified",
      remediation: "Enable S3 Block Public Access; apply bucket policy restricting to PrepSpaces VPC Endpoint."
    },
    {
      id: "staging-api",
      asset: "staging-api (Security Group)",
      observed: "Inbound SSH (22) and Management (8080) open to 0.0.0.0/0",
      concern: "Unrestricted perimeter network attack surface",
      exposure: 8,
      privilege: 7,
      dataImpact: 6,
      exploitability: 8,
      status: "Unverified",
      remediation: "Remove 0.0.0.0/0 ingress; restrict port 22/8080 to corporate VPN gateway CIDR."
    },
    {
      id: "report-worker",
      asset: "report-worker (IAM Role)",
      observed: "AdministratorAccess managed policy attached directly",
      concern: "Massive privilege escalation & cross-account blast radius",
      exposure: 5,
      privilege: 10,
      dataImpact: 10,
      exploitability: 8,
      status: "Unverified",
      remediation: "Detach AdministratorAccess; bind custom inline policy granting only s3:GetObject on specific prefix."
    },
    {
      id: "audit-logs",
      asset: "audit-logs (CloudTrail & S3)",
      observed: "Log file validation disabled; retention unspecified",
      concern: "Monitoring gap & evidence tampering vulnerability",
      exposure: 3,
      privilege: 6,
      dataImpact: 7,
      exploitability: 5,
      status: "Unverified",
      remediation: "Enable CloudTrail log file validation with KMS CMK encryption and S3 Object Lock retention."
    },
    {
      id: "backup-vault",
      asset: "backup-vault (EBS Snapshots)",
      observed: "Snapshot restoration has never been verified or tested",
      concern: "Ransomware recovery uncertainty and operational failure",
      exposure: 2,
      privilege: 5,
      dataImpact: 9,
      exploitability: 4,
      status: "Unverified",
      remediation: "Establish automated quarterly restore test pipelines and cross-region disaster recovery replication."
    }
  ]);
  const [lab2Filter, setLab2Filter] = useState("all");

  const toggleVerifyAsset = (id) => {
    setLab2Assets((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, status: a.status === "Verified" ? "Remediated" : a.status === "Remediated" ? "Unverified" : "Verified" }
          : a
      )
    );
  };

  // ---------------------------------------------------------------------------
  // LAB 3: DOCKER CONTAINER HARDENING
  // ---------------------------------------------------------------------------
  const [lab3Step, setLab3Step] = useState("vulnerable");
  const [lab3Scanning, setLab3Scanning] = useState(false);
  const [lab3ScanReport, setLab3ScanReport] = useState(null);

  const runContainerScan = () => {
    setLab3Scanning(true);
    setTimeout(() => {
      setLab3Scanning(false);
      setLab3ScanReport({
        issues: [
          { rule: "CIS-DI-0001", msg: "Process running as root (UID 0)", severity: "CRITICAL" },
          { rule: "CIS-DI-0005", msg: "Base image tag ':latest' not pinned to immutable digest", severity: "HIGH" },
          { rule: "CIS-DI-0008", msg: "Plaintext API token hardcoded in build ENV layer", severity: "CRITICAL" },
          { rule: "CIS-DI-0009", msg: "Missing .dockerignore; entire repository including .git copied", severity: "HIGH" },
          { rule: "CIS-DI-0012", msg: "Root filesystem mounted read-write without limits", severity: "MEDIUM" }
        ],
        score: "28/100 (FAIL)"
      });
    }, 900);
  };

  // ---------------------------------------------------------------------------
  // LAB 4: KUBERNETES RBAC & WORKLOAD AUDIT
  // ---------------------------------------------------------------------------
  const [k8sConfig, setK8sConfig] = useState({
    nonRoot: false,
    noPrivilegeEscalation: false,
    readOnlyRoot: false,
    dropCapabilities: false,
    disableTokenMount: false,
    scopedRBAC: false
  });

  const getK8sSecurityScore = () => {
    let score = 0;
    if (k8sConfig.nonRoot) score += 20;
    if (k8sConfig.noPrivilegeEscalation) score += 20;
    if (k8sConfig.readOnlyRoot) score += 15;
    if (k8sConfig.dropCapabilities) score += 15;
    if (k8sConfig.disableTokenMount) score += 15;
    if (k8sConfig.scopedRBAC) score += 15;
    return score;
  };

  // ---------------------------------------------------------------------------
  // LAB 5: CHECKOV IAC SCANNER SIMULATOR
  // ---------------------------------------------------------------------------
  const [checkovState, setCheckovState] = useState("unscanned");
  const [checkovScanning, setCheckovScanning] = useState(false);

  const triggerCheckovScan = (mode) => {
    setCheckovScanning(true);
    setTimeout(() => {
      setCheckovScanning(false);
      setCheckovState(mode);
    }, 1200);
  };

  // ---------------------------------------------------------------------------
  // LAB 6: INCIDENT TABLETOP SIMULATOR
  // ---------------------------------------------------------------------------
  const [tabletopStep, setTabletopStep] = useState(1);
  const [tabletopContainmentAction, setTabletopContainmentAction] = useState(null);

  // ---------------------------------------------------------------------------
  // CHECKLIST STATE
  // ---------------------------------------------------------------------------
  const [checklist, setChecklist] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
    c6: false,
    c7: false,
    c8: false,
    c9: false
  });

  const toggleChecklist = (key) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetChecklist = () => {
    setChecklist({
      c1: false,
      c2: false,
      c3: false,
      c4: false,
      c5: false,
      c6: false,
      c7: false,
      c8: false,
      c9: false
    });
  };

  const checklistCompletedCount = Object.values(checklist).filter(Boolean).length;

  // ---------------------------------------------------------------------------
  // QUIZ STATE
  // ---------------------------------------------------------------------------
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      q: "1. What is the primary purpose of the principle of least privilege?",
      options: [
        "Give all developers administrator access for convenience.",
        "Grant only the access necessary for an identity's task.",
        "Disable all cloud identities.",
        "Rely on network firewalls instead of access policies."
      ],
      correct: 1,
      rationale:
        "Least privilege restricts access to only the specific actions, resources, and conditions strictly required to perform a defined business function, minimizing blast radius if compromised."
    },
    {
      id: 2,
      q: "2. An IAM policy allows every action on every resource (\"Action\": \"*\", \"Resource\": \"*\"). What is the main concern?",
      options: [
        "It always blocks legitimate applications.",
        "It applies only to public storage.",
        "It grants excessively broad permissions, increasing potential impact.",
        "It automatically encrypts all resources."
      ],
      correct: 2,
      rationale:
        "Wildcard administrative access across all cloud resources drastically magnifies the impact of any compromised workload identity or leaked credential."
    },
    {
      id: 3,
      q: "3. Which identity design is generally preferable for an application that accesses cloud storage?",
      options: [
        "A dedicated workload identity with narrowly scoped permissions.",
        "A shared human administrator's permanent access key.",
        "A single administrator identity shared by all applications.",
        "An identity that can modify all organization policies."
      ],
      correct: 0,
      rationale:
        "Cloud providers strongly recommend dedicated workload identities (such as AWS IAM Roles for Service Accounts / EC2 Instance Profiles or GCP Service Accounts) that use short-lived credentials and narrowly scoped permissions."
    },
    {
      id: 4,
      q: "4. Why is removing a secret from the latest container filesystem not necessarily enough?",
      options: [
        "Container filesystems cannot contain text.",
        "Every container automatically revokes credentials.",
        "Docker images do not have historical layers.",
        "The secret may remain in earlier image layers or other artifacts."
      ],
      correct: 3,
      rationale:
        "Docker builds construct immutable image layers. If an intermediate RUN or COPY command introduced a secret, subsequent rm commands merely obscure it in the uppermost layer while the secret persists in underlying layer blobs."
    },
    {
      id: 5,
      q: "5. A reporting workload only needs to read ConfigMaps in one Kubernetes namespace. What is the best starting design?",
      options: [
        "Bind the workload to cluster-admin.",
        "Use a namespace-scoped role with only required read permissions.",
        "Give all users edit access to every namespace.",
        "Disable Kubernetes authorization."
      ],
      correct: 1,
      rationale:
        "Using a namespace-scoped Role granting only 'get' and 'list' verbs on 'configmaps' bound via a RoleBinding enforces strict least privilege and prevents lateral movement."
    },
    {
      id: 6,
      q: "6. A storage resource is found to have an unintended public-access setting. What should the assessor do?",
      options: [
        "Delete all storage immediately without investigation.",
        "Ignore it if encryption is enabled.",
        "Verify the exposure, follow the approved containment process, investigate impact, remediate and retest.",
        "Disable all logging to reduce noise."
      ],
      correct: 2,
      rationale:
        "Authorized assessors must verify exposure evidence, escalate through standard containment procedures, examine access logs to ascertain whether exfiltration occurred, remediate safely, and validate retests."
    }
  ];

  const handleSelectQuiz = (qid, idx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [qid]: idx }));
  };

  const calculateQuizScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correct) score++;
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 antialiased font-sans relative pb-20 selection:bg-orange-500 selection:text-white">
      {/* Ambient background glow accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange-200/30 blur-[90px]" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-amber-200/25 blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-blue-200/25 blur-[90px]" />
      </div>

      {/* Top Universal Track Navigation */}
      <ModuleNav track="cybersecurity" currentModuleId="cloud-security" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* ========================================================================= */}
        {/* HERO CARD                                                                */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-[#e7e3da] bg-white/80 p-6 md:p-10 backdrop-blur-md shadow-xs mb-8 transition-all">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-[#ea580c] border border-orange-200 uppercase tracking-wider">
                <Cloud className="w-3.5 h-3.5 text-[#ea580c]" />
                Module 18 &bull; Advanced Security Specialization
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                Intermediate to Advanced
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                8–10 Hours
              </span>
            </div>
            <div className="text-xs font-mono text-stone-600 bg-stone-50 border border-stone-200 px-3 py-1 rounded-xl">
              NIST SP 800-190 &bull; OWASP K8s Top 10:2025
            </div>
          </div>

          <h1 className="text-2xl md:text-4xl font-extrabold text-stone-900 tracking-tight mb-3">
            Cloud Security, Containers, IAM Policies, and Misconfiguration Assessment
          </h1>
          <p className="text-stone-700 text-sm md:text-base leading-relaxed max-w-4xl mb-6">
            Cloud environments can be compromised even when the underlying cloud provider's physical infrastructure
            is secure. Common root causes include excessive IAM permissions, publicly exposed object storage, leaked
            tokens in image layers, unsegmented Kubernetes networks, and deficient audit logging. Learn to assess
            cloud configurations, evaluate workload isolation, prioritize findings, and validate remediation.
          </p>

          {/* Quick Stats / Meta Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-stone-200/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-orange-50 border border-orange-100 text-[#ea580c]">
                <Fingerprint className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-stone-600 uppercase tracking-wider">Identity Plane</p>
                <p className="text-xs font-bold text-stone-900">IAM & Workload Zero Trust</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                <Container className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-stone-600 uppercase tracking-wider">Container Defense</p>
                <p className="text-xs font-bold text-stone-900">Docker & Pod SecurityContext</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600">
                <FileCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-stone-600 uppercase tracking-wider">IaC Guardrails</p>
                <p className="text-xs font-bold text-stone-900">Checkov & Policy-as-Code</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-50 border border-purple-100 text-purple-600">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] font-medium text-stone-600 uppercase tracking-wider">Assessment Capstone</p>
                <p className="text-xs font-bold text-stone-900">100-Point Audit Report</p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB CONTROLS (THEORY, LABS, CASE STUDY, QUIZ, CAPSTONE)                  */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {[
            { id: "theory", label: "Lessons (1–8)", icon: BookOpen },
            { id: "labs", label: "Interactive Labs & Checklist (6)", icon: Terminal },
            { id: "case-study", label: "Architecture Case Study", icon: Boxes },
            { id: "quiz", label: "Knowledge Check Quiz", icon: HelpCircle },
            { id: "capstone", label: "Final Capstone Project", icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#18181b] text-white shadow-xs"
                    : "bg-white text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#ea580c]" : "text-stone-600"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: THEORY / LESSONS 1 TO 8                                            */}
        {/* ========================================================================= */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar / Lesson Navigation */}
            <div className="lg:col-span-1 space-y-2">
              <div className="p-4 rounded-3xl bg-white border border-stone-200 shadow-xs sticky top-6">
                <p className="text-xs font-mono font-bold text-stone-600 uppercase tracking-wider mb-3">
                  Module Curriculum
                </p>
                <div className="space-y-1">
                  {[
                    { num: 1, title: "1. Cloud Architecture & Shared Responsibility" },
                    { num: 2, title: "2. Identity & Access Management (IAM)" },
                    { num: 3, title: "3. Policies & Privilege Escalation Risk" },
                    { num: 4, title: "4. Misconfigurations & Exposure Assessment" },
                    { num: 5, title: "5. Container Security Fundamentals" },
                    { num: 6, title: "6. Kubernetes Workload & RBAC Isolation" },
                    { num: 7, title: "7. Assessment Methodology & IaC Scanning" },
                    { num: 8, title: "8. Monitoring, Incident Response & Recovery" }
                  ].map((l) => (
                    <button
                      key={l.num}
                      onClick={() => setActiveLesson(l.num)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition cursor-pointer flex items-center justify-between ${
                        activeLesson === l.num
                          ? "bg-orange-50 text-[#ea580c] font-bold border border-orange-200"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="truncate">{l.title}</span>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${activeLesson === l.num ? "text-[#ea580c]" : "text-stone-600"}`} />
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200">
                  <div className="p-3 rounded-2xl bg-[#f6f4ee] border border-[#e7e3da] text-[11px] text-stone-600 leading-relaxed">
                    <p className="font-bold text-stone-800 mb-1 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                      Suggested Time: 8–10h
                    </p>
                    Covers AWS, Azure, GCP, Docker, and Kubernetes security controls aligned with NIST SP 800-190.
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Body Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* LESSON 1 */}
              {activeLesson === 1 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 1
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Cloud Architecture and the Shared-Responsibility Model
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <h3 className="text-base font-bold text-stone-900">1.1 What is Cloud Computing?</h3>
                    <p>
                      Cloud computing provides access to computing resources—such as virtual machines, storage,
                      databases, networks, application platforms, and managed services—through provider-operated
                      infrastructure.
                    </p>
                    <p>
                      Unlike a traditional on-premises environment, cloud resources can be created, modified, and
                      deleted through APIs, dashboards, templates, and automated deployment pipelines. That
                      flexibility also means that a single configuration change can expose a resource far beyond its
                      intended audience.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">1.2 The Three Major Service Models</h3>
                    <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                          <tr>
                            <th className="p-3">Model</th>
                            <th className="p-3">What the Provider Primarily Operates</th>
                            <th className="p-3">What the Customer Still Needs to Secure</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-600">
                          <tr>
                            <td className="p-3 font-bold text-stone-900">IaaS (Infrastructure as a Service)</td>
                            <td className="p-3">Physical facilities, core virtualization, host hardware, underlying cloud control plane</td>
                            <td className="p-3">Guest OS, installed apps, identities, data encryption, firewall rules, workload configuration</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">PaaS (Platform as a Service)</td>
                            <td className="p-3">Infrastructure, OS patching, runtime container engines, hardware clustering</td>
                            <td className="p-3">Application source code, identity permissions, data access controls, platform configuration</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">SaaS (Software as a Service)</td>
                            <td className="p-3">The application software, runtime, operating system, and backend database maintenance</td>
                            <td className="p-3">User access, MFA enforcement, account security, data-sharing settings, tenant permissions</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <strong>AWS Security Guidance Distinction:</strong> AWS explicitly defines the line as{" "}
                        <em>security <u>OF</u> the cloud</em> (AWS's responsibility: hardware, facilities, networking)
                        versus <em>security <u>IN</u> the cloud</em> (customer's responsibility: customer data, IAM policies,
                        guest OS firewall, encryption keys).
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">1.3 Shared Responsibility in Practice</h3>
                    <p>Imagine a company hosts its web application in the cloud:</p>
                    <ul className="list-disc pl-5 space-y-1.5 text-stone-700 text-xs md:text-sm">
                      <li>The provider is responsible for the security of its underlying facilities and infrastructure.</li>
                      <li>The customer is responsible for appropriately configuring access to its application data.</li>
                      <li>The customer must restrict administrative permissions and protect application credentials.</li>
                      <li>The customer must configure the service's available logging, retention, and alerting features.</li>
                      <li>The provider's encryption capabilities do not automatically guarantee that a customer has configured keys and data access appropriately.</li>
                      <li>A managed service reduces infrastructure maintenance, but it does <strong>not</strong> eliminate the need for security configuration.</li>
                    </ul>

                    <h3 className="text-base font-bold text-stone-900 pt-2">1.4 A Simple Cloud Security Architecture</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">1. Identities & Workloads</strong>
                        <p className="text-stone-600">Federated identity &bull; MFA &bull; Short-lived workload identities &bull; Least privilege</p>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">2. Policy Enforcement</strong>
                        <p className="text-stone-600">IAM Roles &bull; Resource policies &bull; Conditions &bull; Permission boundaries</p>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">3. Compute & Data</strong>
                        <p className="text-stone-600">Hardened VMs &bull; Sandboxed Pods &bull; Encrypted storage buckets &bull; Backups</p>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">4. Visibility & IR</strong>
                        <p className="text-stone-600">CloudTrail / Audit logs &bull; Continuous posture scanning &bull; Automated alerts</p>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">1.5 Cloud Deployment Boundaries</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Control Plane vs Data Plane</strong>
                        <p className="text-stone-600">
                          <strong>Control Plane:</strong> APIs, SDKs, and consoles that create, modify, or destroy resources.<br />
                          <strong>Data Plane:</strong> Operations that read, process, or transmit actual workload data (e.g., database queries or S3 GETs).
                        </p>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Administrative Scopes</strong>
                        <p className="text-stone-600">
                          <strong>Tenant / Org:</strong> Top-level boundary enclosing billing and root policies.<br />
                          <strong>Account / Project:</strong> Isolated administrative envelope with distinct IAM and network domains.
                        </p>
                      </div>
                    </div>

                    {/* Interactive Checkpoint */}
                    <div className="mt-6 p-4 rounded-2xl bg-orange-50/60 border border-orange-200 text-xs space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-600" />
                        <strong className="text-stone-900 text-sm">Checkpoint: The Shared-Responsibility Rule</strong>
                      </div>
                      <p className="text-stone-700">
                        Why does an organization remain responsible for storage permissions and application identities
                        even when utilizing a fully managed serverless cloud database or managed object storage?
                      </p>
                      <div className="space-y-1.5">
                        {[
                          "Cloud providers deliberately disable security controls to save compute cycles.",
                          "The provider ensures platform uptime and physical integrity, but the customer dictates access rules, data classification, and authorization policies.",
                          "Managed services are considered SaaS, where the cloud provider manages customer passwords and data grants.",
                          "Regulatory frameworks allow customers to delegate 100% of data liability to third-party hyperscalers."
                        ].map((opt, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setCheckpointAnswer(idx);
                              setCheckpointSubmitted(true);
                            }}
                            className={`w-full text-left p-2.5 rounded-xl border text-xs transition cursor-pointer ${
                              checkpointAnswer === idx
                                ? idx === 1
                                  ? "bg-emerald-100 border-emerald-300 text-emerald-950 font-semibold"
                                  : "bg-red-100 border-red-300 text-red-950 font-semibold"
                                : "bg-white border-stone-200 hover:border-stone-300 text-stone-700"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                      {checkpointSubmitted && (
                        <div className={`p-2.5 rounded-xl text-xs font-medium ${checkpointAnswer === 1 ? "bg-emerald-50 text-emerald-900" : "bg-red-50 text-red-900"}`}>
                          {checkpointAnswer === 1
                            ? "Correct! The customer owns configuration 'in' the cloud. Even in managed services, assigning excessive privileges or public ACLs creates fatal exposure."
                            : "Incorrect. The cloud provider guarantees underlying infrastructure security, but access control and IAM remain strictly customer responsibilities."}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 2 */}
              {activeLesson === 2 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 2
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Identity and Access Management (IAM)
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      IAM is the control system that determines <em>who or what</em> can perform <em>which action</em> on{" "}
                      <em>which resource</em>, under <em>what conditions</em>.
                    </p>
                    <p>
                      Misconfigured identities are especially dangerous because a legitimate credential can be
                      abused to execute unauthorized destructive actions without ever exploiting a classic software vulnerability.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">2.1 Core IAM Concepts</h3>
                    <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                          <tr>
                            <th className="p-3">Concept</th>
                            <th className="p-3">Meaning</th>
                            <th className="p-3">Example</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-600">
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Principal</td>
                            <td className="p-3">An identity making a request</td>
                            <td className="p-3">Human user, container pod, Lambda function, CI/CD worker</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Authentication</td>
                            <td className="p-3">Establishing and validating identity</td>
                            <td className="p-3">OIDC federated token, FIDO2 WebAuthn passkey, IAM access key</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Authorization</td>
                            <td className="p-3">Deciding what the authenticated identity may execute</td>
                            <td className="p-3">Can read object but cannot delete bucket or change ACL</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Role</td>
                            <td className="p-3">A reusable collection of permissions assumed dynamically</td>
                            <td className="p-3">Read-only storage auditor role; EKS Node instance profile</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Policy</td>
                            <td className="p-3">A JSON document specifying access rules</td>
                            <td className="p-3">Permit specific s3:GetObject on specific bucket prefix</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Trust Policy</td>
                            <td className="p-3">Defines which principals are permitted to assume a role</td>
                            <td className="p-3">sts:AssumeRoleWithWebIdentity granted to Kubernetes OIDC provider</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Workload Identity</td>
                            <td className="p-3">Identity used by software rather than human operators</td>
                            <td className="p-3">Microservice querying cloud database without hardcoded passwords</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Temporary Credentials</td>
                            <td className="p-3">Cryptographic tokens with strictly limited lifetime (15m–12h)</td>
                            <td className="p-3">AWS STS temporary session tokens; GCP short-lived OAuth tokens</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">2.2 The Principle of Least Privilege</h3>
                    <p>
                      Least privilege requires granting <strong>only</strong> the minimal permissions necessary to
                      perform a defined task. Compare these two policy patterns:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-red-900 flex items-center gap-1.5">
                            <X className="w-4 h-4 text-red-600" /> Overly Broad Policy (Toxic Wildcard)
                          </span>
                        </div>
                        <pre className="p-3 rounded-xl bg-stone-900 text-red-300 font-mono text-[11px] overflow-x-auto">
{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*"
    }
  ]
}`}
                        </pre>
                        <p className="text-[11px] text-red-800 mt-2">
                          Permits every single control plane and data plane API call across the entire account. A compromised microservice can wipe all databases or create rogue cryptocurrency mining VMs.
                        </p>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                            <Check className="w-4 h-4 text-emerald-600" /> Scoped Least-Privilege Policy
                          </span>
                        </div>
                        <pre className="p-3 rounded-xl bg-stone-900 text-emerald-300 font-mono text-[11px] overflow-x-auto">
{`{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::prep-demo-reports/*"
    }
  ]
}`}
                        </pre>
                        <p className="text-[11px] text-emerald-800 mt-2">
                          Restricted to read-only object fetching on one explicit bucket namespace. Prevents listing, deletion, bucket ACL modification, or cross-service lateral movement.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">2.3 Common IAM Assessment Findings</h3>
                    <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                          <tr>
                            <th className="p-3">Finding</th>
                            <th className="p-3">Why It Matters</th>
                            <th className="p-3">Typical Remediation</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-600">
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Wildcard Actions</td>
                            <td className="p-3">Grants dozens of destructive commands alongside needed read calls</td>
                            <td className="p-3">Replace with explicitly enumerated API actions (e.g., s3:GetObject)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Wildcard Resources</td>
                            <td className="p-3">Extends authorization across completely unrelated production resources</td>
                            <td className="p-3">Constrain Resource to designated ARNs or tagged resource scopes</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Unrestricted Role Assumption</td>
                            <td className="p-3">Allows untrusted entities or anonymous accounts to assume privileged roles</td>
                            <td className="p-3">Add strict Principal checks, external ID conditions, and SAML/OIDC scopes</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Long-Lived Access Keys</td>
                            <td className="p-3">Static credentials leaked in git remain valid indefinitely</td>
                            <td className="p-3">Deactivate static keys; adopt IAM Roles Anywhere or OIDC workload identity</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Stale Accounts & Keys</td>
                            <td className="p-3">Orphaned accounts from departed personnel create dormant backdoors</td>
                            <td className="p-3">Enforce 90-day credential rotation and automated offboarding reaper scripts</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">2.4 How IAM Access is Evaluated</h3>
                    <p className="text-xs text-stone-600">
                      Never assume reading a single JSON file yields the full answer. Effective authorization represents
                      the intersection of multiple boundaries:
                    </p>
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 font-mono text-xs space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 font-bold">Rule 1</span>
                        <span>By default, all requests are implicitly denied.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-red-200 text-red-950 font-bold">Rule 2</span>
                        <span>An explicit DENY in ANY evaluated policy overrides all ALLOWs unconditionally.</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Rule 3</span>
                        <span>An explicit ALLOW is required across identity policies, resource policies, and SCP boundaries.</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 3 */}
              {activeLesson === 3 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 3
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      IAM Policies and Privilege-Escalation Risk
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      In cloud environments, a permission can become critical not only because of the sensitive data it
                      reads, but because of what it permits a principal to <em>change</em> or <em>become</em>.
                    </p>

                    <h3 className="text-base font-bold text-stone-900">3.1 High-Risk Actions Deserving Special Scrutiny</h3>
                    <p>During an authorized review, immediately flag permissions that allow an identity to:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Create or Modify IAM Entities</strong>
                        <p className="text-stone-600">
                          <code>iam:CreatePolicyVersion</code>, <code>iam:SetDefaultPolicyVersion</code>: Allows an attacker to edit their own policy to grant <code>*/*</code> admin.
                        </p>
                      </div>
                      <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Attach Policies or Add Users to Groups</strong>
                        <p className="text-stone-600">
                          <code>iam:AttachUserPolicy</code>, <code>iam:AddUserToGroup</code>: Allows elevating self or peer identities to Administrators.
                        </p>
                      </div>
                      <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Create Access Keys or Logins</strong>
                        <p className="text-stone-600">
                          <code>iam:CreateAccessKey</code>, <code>iam:CreateLoginProfile</code>: Generates credentials for another high-privilege account.
                        </p>
                      </div>
                      <div className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Pass Powerful Roles to Workloads</strong>
                        <p className="text-stone-600">
                          <code>iam:PassRole</code> combined with <code>ec2:RunInstances</code> or <code>lambda:CreateFunction</code>: Boots compute running under an admin role to steal its temporary credentials.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">3.2 Trust Policies vs Permission Policies</h3>
                    <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                      <p>
                        A role has two distinct policy surfaces that must both be audited:
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Permission Policy:</strong> What the role can do <em>after</em> authentication (e.g. read S3 objects).</li>
                        <li><strong>Trust Policy:</strong> Who is allowed to <em>assume</em> the role in the first place (e.g. an external AWS account ID or GitHub Actions OIDC issuer).</li>
                      </ul>
                      <p className="text-amber-800 font-medium">
                        A role with narrow permissions is compromised if its trust policy allows wildcard principals (<code>"Principal": "*"</code>).
                      </p>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">3.3 Automated Policy Analysis with AWS IAM Access Analyzer</h3>
                    <p>
                      Hyperscalers provide formal mathematical logic analyzers (such as AWS IAM Access Analyzer) to validate
                      policy syntax, check against security best practices, and flag external cross-account grants.
                    </p>
                    <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
                      aws access-analyzer validate-policy --policy-document file://policy.json --policy-type IDENTITY_POLICY
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 4 */}
              {activeLesson === 4 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 4
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Cloud Misconfigurations and Exposure Assessment
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      A cloud misconfiguration occurs when a resource or security control is configured in a manner that
                      creates unnecessary exposure, access, or operational risk.
                    </p>
                    <p>
                      The <strong>OWASP Top 10:2025</strong> identifies <em>Security Misconfiguration</em> as a primary application
                      security risk. In cloud infrastructure, secure defaults, explicit configuration, and continuous verification
                      are essential.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">4.1 Cloud Attack Surface Inventory</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Identities</strong>
                        <span className="text-stone-600">Users, groups, roles, workload identities, trust policies, access keys</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Storage & DBs</strong>
                        <span className="text-stone-600">Object buckets, snapshot ACLs, public databases, TLS configurations</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Networks</strong>
                        <span className="text-stone-600">Security groups, public IPs, routing tables, VPC peering, NAT gateways</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Compute</strong>
                        <span className="text-stone-600">VM instances, serverless functions, container nodes, runtime profiles</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">Secrets & KMS</strong>
                        <span className="text-stone-600">Key policies, rotation intervals, Secrets Manager access policies</span>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">IaC Pipelines</strong>
                        <span className="text-stone-600">Terraform templates, CloudFormation stacks, GitOps sync pipelines</span>
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">4.2 High-Priority Misconfiguration Patterns</h3>
                    <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-stone-700">
                      <li><strong>Public Object Storage:</strong> Storage bucket or database exposed without authentication.</li>
                      <li><strong>Unrestricted Management Ingress:</strong> Ports 22 (SSH), 3389 (RDP), or 8080 exposed to 0.0.0.0/0.</li>
                      <li><strong>Excessive Workload Entitlements:</strong> Background workers granted AdministratorAccess.</li>
                      <li><strong>Hardcoded Secrets in Artifacts:</strong> Tokens and DB credentials baked into Docker images or git repositories.</li>
                      <li><strong>Disabled or Incomplete Logging:</strong> CloudTrail disabled or retained for less than 90 days.</li>
                    </ul>

                    <h3 className="text-base font-bold text-stone-900 pt-2">4.3 The Risk Prioritization Formula</h3>
                    <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-200 text-stone-900 text-xs space-y-2">
                      <div className="font-mono font-bold text-sm text-[#ea580c]">
                        Priority &asymp; Exposure &times; Privilege &times; Data Impact &times; Exploitability
                      </div>
                      <p className="text-stone-600 text-[11px] leading-relaxed">
                        A finding's severity must incorporate environmental context. An open marketing bucket serving public company logos
                        has High Exposure but Low Data Impact. A private database snapshot containing raw customer records has Low Exposure
                        externally, but Critical Data Impact if an internal developer account is hijacked.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 5 */}
              {activeLesson === 5 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 5
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Container Security Fundamentals
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      Containers package an application and its dependencies to execute consistently across environments.
                      They rely on shared host operating system kernel namespaces and cgroups rather than hardware-level
                      hypervisor virtualization.
                    </p>
                    <p>
                      <strong>NIST SP 800-190</strong> (Application Container Security Guide) classifies container risks into
                      image vulnerabilities, configuration defects, registry compromise, and runtime escapes.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">5.1 Common Container Security Failures</h3>
                    <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                          <tr>
                            <th className="p-3">Risk</th>
                            <th className="p-3">What Can Go Wrong</th>
                            <th className="p-3">Required Security Control</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-600">
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Running as Root (UID 0)</td>
                            <td className="p-3">App vulnerability yields root privileges on container and easier host escape</td>
                            <td className="p-3">Enforce non-root execution via <code>USER node</code> or <code>runAsNonRoot: true</code></td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Privileged Container Mode</td>
                            <td className="p-3">Disables all Linux cgroup/namespace barriers, exposing full host devices</td>
                            <td className="p-3">Never use <code>--privileged</code>; drop all capabilities except necessary ones</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Floating Tags (e.g. :latest)</td>
                            <td className="p-3">Builds pull upstream modifications without notice, risking supply-chain poison</td>
                            <td className="p-3">Pin base images to immutable sha256 digests (<code>@sha256:digest</code>)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Embedded Secrets in Layers</td>
                            <td className="p-3">Secrets committed via RUN/COPY persist in historical layer tarballs</td>
                            <td className="p-3">Inject secrets dynamically at runtime or use Docker build secrets (<code>--mount=type=secret</code>)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Writable Root Filesystem</td>
                            <td className="p-3">Attacker can download backdoors or overwrite system binaries</td>
                            <td className="p-3">Configure <code>readOnlyRootFilesystem: true</code> with dedicated ephemeral <code>tmpfs</code></td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">docker.sock Mounting</td>
                            <td className="p-3">Workload with access to host daemon can spin up root containers on host</td>
                            <td className="p-3">Strictly prohibit mounting <code>/var/run/docker.sock</code> into application containers</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">5.2 Hardened Dockerfile Example (Node.js)</h3>
                    <div className="relative">
                      <pre className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
{`# 1. Pin to immutable SHA256 digest on an official minimal base
FROM node:22-alpine@sha256:d834a74a1e944f2d72f232e0e9ec01859bfe032ffdf2828b6134b419b33a5d7c

# 2. Establish dedicated isolated app directory
WORKDIR /app

# 3. Leverage layer caching for dependencies & install production dependencies only
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# 4. Copy application source with explicit non-root user ownership
COPY --chown=node:node . .

# 5. Set production runtime variables
ENV NODE_ENV=production

# 6. Switch to non-root user (node user UID 1000 provided in Alpine)
USER node

# 7. Expose designated application port
EXPOSE 3000

# 8. Use exec form for proper Linux signal forwarding (SIGTERM / SIGINT)
CMD ["node", "server.js"]`}
                      </pre>
                      <button
                        onClick={() =>
                          handleCopy(
                            "dockerfile",
                            `FROM node:22-alpine@sha256:d834a74a1e944f2d72f232e0e9ec01859bfe032ffdf2828b6134b419b33a5d7c\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --omit=dev && npm cache clean --force\nCOPY --chown=node:node . .\nENV NODE_ENV=production\nUSER node\nEXPOSE 3000\nCMD ["node", "server.js"]`
                          )
                        }
                        className="absolute top-3 right-3 p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs flex items-center gap-1 cursor-pointer"
                      >
                        {copiedSnippets["dockerfile"] ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedSnippets["dockerfile"] ? "Copied" : "Copy"}</span>
                      </button>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">5.3 Essential .dockerignore Exclusions</h3>
                    <p className="text-xs text-stone-600">
                      Never allow local credentials, secrets, or git history to enter the Docker build context:
                    </p>
                    <div className="p-3 rounded-xl bg-stone-900 font-mono text-xs text-amber-300">
                      .git<br />
                      .env<br />
                      .env.*<br />
                      *.pem<br />
                      *.key<br />
                      node_modules<br />
                      coverage<br />
                      *.log
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 6 */}
              {activeLesson === 6 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 6
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Kubernetes Security and Workload Isolation
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      Kubernetes automates container orchestration across fleets of compute nodes. However, orchestrators
                      introduce cluster APIs, service accounts, RBAC bindings, secrets storage, and software-defined networks.
                    </p>
                    <p>
                      The <strong>OWASP Kubernetes Top Ten: 2025</strong> highlights excessive cluster permissions, insecure workload
                      configurations, missing network segmentation, and supply chain vulnerabilities as premier attack vectors.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">6.1 Hardened Pod Specification</h3>
                    <p className="text-xs text-stone-600">
                      Kubernetes Pods must declare strict <code>securityContext</code> directives adhering to the{" "}
                      <em>Restricted Pod Security Standard</em>:
                    </p>

                    <pre className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
{`apiVersion: v1
kind: Pod
metadata:
  name: hardened-api-service
  namespace: learning-lab
spec:
  # Prohibit automatic injection of cluster API tokens if not required
  automountServiceAccountToken: false
  
  containers:
    - name: api
      image: registry.prepspaces.internal/api@sha256:7f9b091f0...
      
      securityContext:
        runAsNonRoot: true
        runAsUser: 10001
        allowPrivilegeEscalation: false
        readOnlyRootFilesystem: true
        capabilities:
          drop:
            - ALL
        seccompProfile:
          type: RuntimeDefault
          
      resources:
        requests:
          cpu: "100m"
          memory: "128Mi"
        limits:
          cpu: "500m"
          memory: "256Mi"`}
                    </pre>

                    <h3 className="text-base font-bold text-stone-900 pt-2">6.2 Scoped RBAC vs Cluster-Admin</h3>
                    <p>
                      Workloads requiring access to Kubernetes APIs must use namespace-scoped <strong>Roles</strong> rather than
                      cluster-wide <code>ClusterRoles</code>:
                    </p>

                    <pre className="p-4 rounded-2xl bg-stone-900 text-emerald-300 font-mono text-xs overflow-x-auto">
{`apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: report-config-reader
  namespace: learning-lab
rules:
  - apiGroups: [""]
    resources: ["configmaps"]
    verbs: ["get", "list"]`}
                    </pre>
                    <p className="text-xs text-stone-600">
                      Granting permissions like <code>pods/exec</code>, <code>secrets</code>, or <code>deployments/create</code> across
                      all namespaces allows complete cluster takeover.
                    </p>
                  </div>
                </div>
              )}

              {/* LESSON 7 */}
              {activeLesson === 7 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 7
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Cloud Misconfiguration Assessment Methodology
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      A repeatable cloud security assessment proceeds through seven structured phases to ensure complete coverage,
                      minimize business disruption, and eliminate recurring risks.
                    </p>

                    <div className="space-y-3">
                      {[
                        {
                          phase: "Phase 1: Define Authorization & Scope",
                          desc: "Document explicit written rules of engagement, target subscription/account IDs, non-production test boundaries, and emergency-stop contacts before collecting telemetry."
                        },
                        {
                          phase: "Phase 2: Inventory In-Scope Assets",
                          desc: "Enumerate all cloud assets via provider APIs and Cloud Asset Inventories (identities, S3 buckets, VPCs, Kubernetes clusters, and KMS keys)."
                        },
                        {
                          phase: "Phase 3: Collect Configuration Evidence",
                          desc: "Execute read-only configuration dumps, IAM policy evaluations, and policy-as-code scanners (Checkov, AWS IAM Access Analyzer, Trivy)."
                        },
                        {
                          phase: "Phase 4: Identify & Validate Findings",
                          desc: "Differentiate theoretical alerts from confirmed operational exposures. Verify whether compensating controls (like WAFs or PrivateLink) neutralize the risk."
                        },
                        {
                          phase: "Phase 5: Prioritize Remediation",
                          desc: "Classify findings into Critical, High, Medium, and Low using the Exposure × Privilege × Data Impact formula."
                        },
                        {
                          phase: "Phase 6: Remediate & Retest",
                          desc: "Apply infrastructure-as-code fixes, test changes in staging to prevent breaking production dependencies, and capture before/after verification evidence."
                        },
                        {
                          phase: "Phase 7: Prevent Recurrence (Policy-as-Code)",
                          desc: "Codify checks into CI/CD pipelines (e.g. Checkov pre-commit hooks and GitHub Actions) to prevent misconfigured IaC from ever deploying."
                        }
                      ].map((item, idx) => (
                        <div key={idx} className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-orange-100 text-[#ea580c] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div>
                            <strong className="text-stone-900 text-xs md:text-sm block">{item.phase}</strong>
                            <p className="text-stone-600 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">7.1 Automated IaC Scanning with Checkov</h3>
                    <p className="text-xs text-stone-600">
                      Checkov is an industry-standard static code analysis tool for infrastructure-as-code (Terraform,
                      CloudFormation, Kubernetes manifests, Dockerfiles, and Helm charts):
                    </p>
                    <div className="p-3 rounded-xl bg-stone-900 text-emerald-300 font-mono text-xs">
                      checkov -d ./infrastructure --framework terraform,kubernetes,dockerfile
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 8 */}
              {activeLesson === 8 && (
                <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                      Lesson 8
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                      Monitoring, Incident Response and Recovery
                    </h2>
                  </div>

                  <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                    <p>
                      A misconfiguration assessment must evaluate not only preventive safeguards, but also an organization's
                      capability to detect and contain incidents when prevention fails.
                    </p>

                    <h3 className="text-base font-bold text-stone-900 pt-2">8.1 Critical Cloud Telemetry Signals</h3>
                    <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                      <table className="w-full text-xs text-left">
                        <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                          <tr>
                            <th className="p-3">Signal</th>
                            <th className="p-3">Operational Significance</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 text-stone-600">
                          <tr>
                            <td className="p-3 font-bold text-stone-900">New Privileged Roles / Policies</td>
                            <td className="p-3">Potential privilege escalation or rogue administrator persistence</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Public Access Block Disabled</td>
                            <td className="p-3">Immediate risk of massive data exfiltration or unintended exposure</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Inbound Security Group Altered to 0.0.0.0/0</td>
                            <td className="p-3">Direct perimeter compromise opening access to internal databases</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Audit Logging Disabled (StopLogging)</td>
                            <td className="p-3">Adversary evading defense and destroying audit trails</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-stone-900">Anomalous Pod Exec (kubectl exec)</td>
                            <td className="p-3">Interactive shell access inside production container clusters</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 pt-2">8.2 The 5-Step Cloud Containment & Recovery Workflow</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">1. Identify & Verify</strong>
                        <p className="text-stone-600">Confirm affected identity, resource, timestamps, and audit log entries.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-orange-950">
                        <strong className="block mb-1">2. Contain Safely</strong>
                        <p className="text-stone-600">Attach DenyAll policy, revoke active STS sessions, isolate pod network.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">3. Investigate Impact</strong>
                        <p className="text-stone-600">Audit CloudTrail & VPC Flow logs to establish exact blast radius.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">4. Eradicate & Recover</strong>
                        <p className="text-stone-600">Rotate all keys, redeploy verified IaC, restore from clean snapshots.</p>
                      </div>
                      <div className="p-3 rounded-xl bg-stone-50 border border-stone-200">
                        <strong className="text-stone-900 block mb-1">5. Retest & Guardrail</strong>
                        <p className="text-stone-600">Deploy Checkov / SCP preventive rules to prevent recurrence forever.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation between lessons */}
              <div className="flex items-center justify-between pt-4">
                <button
                  disabled={activeLesson === 1}
                  onClick={() => setActiveLesson((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-stone-200 bg-white text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50 transition cursor-pointer flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous Lesson</span>
                </button>
                <span className="text-xs font-mono text-stone-600">Lesson {activeLesson} of 8</span>
                <button
                  disabled={activeLesson === 8}
                  onClick={() => setActiveLesson((prev) => Math.min(8, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#ea580c] text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-orange-600 transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Next Lesson</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: INTERACTIVE LABS & CHECKLIST                                       */}
        {/* ========================================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-8">
            {/* Lab 1 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 1 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">IAM Policy Audit & Least-Privilege Generator</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Beginner &ndash; Intermediate
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                A reporting workload in <code>production</code> only needs to read reports from{" "}
                <code>arn:aws:s3:::prep-demo-reports/*</code>. Audit its active policy and generate a hardened replacement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-stone-700">Policy Under Inspection</span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => {
                          setLab1PolicyView("overprivileged");
                          setLab1Analyzed(false);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer ${
                          lab1PolicyView === "overprivileged" ? "bg-red-100 text-red-900 font-bold" : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        Active Production Policy
                      </button>
                      <button
                        onClick={() => {
                          setLab1PolicyView("leastprivilege");
                          setLab1Analyzed(false);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer ${
                          lab1PolicyView === "leastprivilege" ? "bg-emerald-100 text-emerald-900 font-bold" : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        Proposed Hardened Policy
                      </button>
                    </div>
                  </div>
                  <pre className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto min-h-[220px]">
{lab1PolicyView === "overprivileged"
  ? `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowAllOperations",
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*"
    }
  ]
}`
  : `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowReportReadMinimal",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:GetObjectVersion"
      ],
      "Resource": "arn:aws:s3:::prep-demo-reports/*"
    }
  ]
}`}
                  </pre>
                  <button
                    onClick={() => setLab1Analyzed(true)}
                    className="mt-3 w-full py-2.5 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-600 transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>Run IAM Policy Security Audit</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-3">
                  <strong className="text-stone-900 block text-xs uppercase tracking-wider font-mono">
                    Audit & Access Analyzer Telemetry
                  </strong>
                  {lab1Analyzed ? (
                    lab1PolicyView === "overprivileged" ? (
                      <div className="space-y-2">
                        <div className="p-3 rounded-xl bg-red-100/70 border border-red-300 text-red-950 font-medium">
                          &bull; CRITICAL: Wildcard Action (<code>Action: &quot;*&quot;</code>) grants full administrative capability over IAM, KMS, RDS, and EC2.
                        </div>
                        <div className="p-3 rounded-xl bg-red-100/70 border border-red-300 text-red-950 font-medium">
                          &bull; HIGH: Wildcard Resource (<code>Resource: &quot;*&quot;</code>) allows modifying databases across all accounts in the org.
                        </div>
                        <div className="p-3 rounded-xl bg-amber-100/70 border border-amber-300 text-amber-950 font-medium">
                          &bull; WARN: Missing Principal boundary and Condition keys (e.g. <code>aws:PrincipalOrgID</code> or VPC endpoint constraints).
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="p-3 rounded-xl bg-emerald-100/80 border border-emerald-300 text-emerald-950 font-medium">
                          &bull; PASS: Scoped exclusively to <code>s3:GetObject</code> and <code>s3:GetObjectVersion</code>.
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-100/80 border border-emerald-300 text-emerald-950 font-medium">
                          &bull; PASS: Resource scoped strictly to <code>arn:aws:s3:::prep-demo-reports/*</code>.
                        </div>
                        <div className="p-3 rounded-xl bg-emerald-100/80 border border-emerald-300 text-emerald-950 font-medium">
                          &bull; VERIFIED: Conforms to AWS IAM Access Analyzer least-privilege specification with zero validation errors.
                        </div>
                      </div>
                    )
                  ) : (
                    <p className="text-stone-600 text-xs italic">
                      Click &quot;Run IAM Policy Security Audit&quot; to execute static analysis against the loaded document.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Lab 2 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 2 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">Cloud Misconfiguration Triage & Risk Prioritization</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Intermediate
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                Review 5 fictional asset configurations. Calculate risk priority scores using the formula{" "}
                <code className="text-[#ea580c] font-bold">Priority = Exposure &times; Privilege &times; DataImpact &times; Exploitability</code>{" "}
                and toggle remediation status.
              </p>

              <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Asset</th>
                      <th className="p-3">Observed State</th>
                      <th className="p-3">Risk Concern</th>
                      <th className="p-3">Score (Max 10k)</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    {lab2Assets.map((asset) => {
                      const score = asset.exposure * asset.privilege * asset.dataImpact * asset.exploitability;
                      return (
                        <tr key={asset.id} className="hover:bg-stone-50/60">
                          <td className="p-3 font-bold text-stone-900 whitespace-nowrap">{asset.asset}</td>
                          <td className="p-3 font-mono text-[11px] text-stone-700">{asset.observed}</td>
                          <td className="p-3">{asset.concern}</td>
                          <td className="p-3 font-mono font-bold text-[#ea580c]">{score.toLocaleString()}</td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                asset.status === "Remediated"
                                  ? "bg-emerald-100 text-emerald-800"
                                  : asset.status === "Verified"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-amber-100 text-amber-800"
                              }`}
                            >
                              {asset.status}
                            </span>
                          </td>
                          <td className="p-3">
                            <button
                              onClick={() => toggleVerifyAsset(asset.id)}
                              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-stone-900 text-white hover:bg-orange-600 transition cursor-pointer"
                            >
                              Toggle
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Lab 3 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 3 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">Docker Image & Container Hardening (NIST SP 800-190)</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Intermediate
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                Inspect a vulnerable Dockerfile, execute an image inspection scan, and review supply-chain remediation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-stone-700">Dockerfile Variant</span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => {
                          setLab3Step("vulnerable");
                          setLab3ScanReport(null);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer ${
                          lab3Step === "vulnerable" ? "bg-red-100 text-red-900 font-bold" : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        Insecure Dockerfile
                      </button>
                      <button
                        onClick={() => {
                          setLab3Step("hardened");
                          setLab3ScanReport(null);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium cursor-pointer ${
                          lab3Step === "hardened" ? "bg-emerald-100 text-emerald-900 font-bold" : "bg-stone-100 text-stone-600"
                        }`}
                      >
                        NIST-Hardened Dockerfile
                      </button>
                    </div>
                  </div>

                  <pre className="p-4 rounded-2xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto min-h-[220px]">
{lab3Step === "vulnerable"
  ? `# INSECURE SAMPLE DOCKERFILE
FROM node:latest
WORKDIR /app
COPY . .
ENV API_SECRET="ghp_live_secretToken9923849102"
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]`
  : `# HARDENED NIST SP 800-190 SPECIFICATION
FROM node:22-alpine@sha256:d834a74a1e944f2d72f232e0e9ec01859bfe032ffdf2828b6134b419b33a5d7c
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --chown=node:node . .
ENV NODE_ENV=production
USER node
EXPOSE 3000
CMD ["node", "server.js"]`}
                  </pre>

                  <button
                    onClick={runContainerScan}
                    disabled={lab3Scanning}
                    className="mt-3 w-full py-2.5 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-600 transition flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>{lab3Scanning ? "Analyzing Container Layers..." : "Run Container Vulnerability & Layer Scan"}</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-3">
                  <strong className="text-stone-900 block text-xs uppercase tracking-wider font-mono">
                    Trivy / CIS Container Benchmark Report
                  </strong>
                  {lab3ScanReport ? (
                    lab3Step === "vulnerable" ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-red-900 font-bold border-b border-red-200 pb-1">
                          <span>Status: FAIL</span>
                          <span>Security Score: {lab3ScanReport.score}</span>
                        </div>
                        {lab3ScanReport.issues.map((iss, i) => (
                          <div key={i} className="p-2 rounded-xl bg-white border border-stone-200 flex items-start gap-2">
                            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800">
                              {iss.severity}
                            </span>
                            <div>
                              <strong className="font-mono text-stone-900">{iss.rule}</strong>
                              <p className="text-stone-600 text-[11px]">{iss.msg}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-emerald-900 font-bold border-b border-emerald-200 pb-1">
                          <span>Status: PASS (Zero Critical Issues)</span>
                          <span>Security Score: 98/100</span>
                        </div>
                        <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                          &bull; Base image pinned to immutable cryptographic SHA256 digest.<br />
                          &bull; Process drops root and binds explicitly to UID 1000 (node).<br />
                          &bull; Zero credentials detected in intermediate layer cache.
                        </div>
                      </div>
                    )
                  ) : (
                    <p className="text-stone-600 italic">
                      Click the scan button to simulate layer analysis and CIS Docker benchmark auditing.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Lab 4 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 4 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">Kubernetes Pod SecurityContext & RBAC Isolation</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Intermediate &ndash; Advanced
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                Configure workload security controls to achieve compliance with the Kubernetes{" "}
                <strong>Restricted Pod Security Standard</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <strong className="text-xs font-bold text-stone-800 block">Workload Hardening Toggles:</strong>
                  {[
                    { key: "nonRoot", label: "runAsNonRoot: true (Prohibit UID 0)" },
                    { key: "noPrivilegeEscalation", label: "allowPrivilegeEscalation: false (Block setuid)" },
                    { key: "readOnlyRoot", label: "readOnlyRootFilesystem: true (Immute filesystem)" },
                    { key: "dropCapabilities", label: "capabilities.drop: [ALL] (Drop Linux capabilities)" },
                    { key: "disableTokenMount", label: "automountServiceAccountToken: false (Isolate API)" },
                    { key: "scopedRBAC", label: "Namespace-scoped Role (Drop cluster-admin)" }
                  ].map((item) => (
                    <label
                      key={item.key}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-stone-50 border border-stone-200 hover:bg-stone-100/60 transition cursor-pointer text-xs"
                    >
                      <input
                        type="checkbox"
                        checked={k8sConfig[item.key]}
                        onChange={(e) =>
                          setK8sConfig((prev) => ({ ...prev, [item.key]: e.target.checked }))
                        }
                        className="rounded text-orange-600 focus:ring-orange-500 w-4 h-4"
                      />
                      <span className="font-mono text-stone-800">{item.label}</span>
                    </label>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 flex flex-col justify-between text-xs">
                  <div>
                    <strong className="text-stone-900 block font-mono uppercase tracking-wider mb-2">
                      Pod Security Standards Compliance
                    </strong>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-stone-700">Admission Compliance Score:</span>
                      <span className="text-sm font-bold font-mono text-[#ea580c]">{getK8sSecurityScore()}%</span>
                    </div>
                    <div className="w-full bg-stone-200 rounded-full h-2.5 mb-4">
                      <div
                        className="bg-[#ea580c] h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${getK8sSecurityScore()}%` }}
                      />
                    </div>
                    <div className="space-y-1.5 text-[11px] text-stone-600">
                      <p>
                        <strong>Privileged Standard:</strong> {getK8sSecurityScore() >= 0 ? "Allowed" : "Blocked"}
                      </p>
                      <p>
                        <strong>Baseline Standard:</strong> {getK8sSecurityScore() >= 40 ? "COMPLIANT" : "NON-COMPLIANT"}
                      </p>
                      <p>
                        <strong>Restricted Standard (Production):</strong>{" "}
                        {getK8sSecurityScore() === 100 ? (
                          <span className="text-emerald-700 font-bold">COMPLIANT (Admission Permitted)</span>
                        ) : (
                          <span className="text-red-700 font-bold">REJECTED BY ADMISSION CONTROLLER</span>
                        )}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-stone-200 text-[11px] text-stone-600">
                    Target: Enable all 6 toggles to satisfy the NIST and Kubernetes official application security checklist.
                  </div>
                </div>
              </div>
            </div>

            {/* Lab 5 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 5 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">Infrastructure-as-Code (IaC) Scanning with Checkov</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Intermediate &ndash; Advanced
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                Execute automated static analysis on Terraform and Kubernetes templates before CI/CD deployment.
              </p>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => triggerCheckovScan("raw")}
                    disabled={checkovScanning}
                    className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 transition cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Run Checkov on Unhardened Manifests</span>
                  </button>
                  <button
                    onClick={() => triggerCheckovScan("remediated")}
                    disabled={checkovScanning}
                    className="px-4 py-2 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-600 transition cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Apply Policy Fixes & Re-scan</span>
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-stone-900 font-mono text-xs text-stone-200 min-h-[200px] overflow-x-auto">
                  {checkovScanning ? (
                    <div className="flex items-center gap-2 text-amber-400">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>$ checkov -d ./lab-config --framework terraform,kubernetes... scanning 24 checks...</span>
                    </div>
                  ) : checkovState === "raw" ? (
                    <div className="space-y-2">
                      <p className="text-stone-400">$ checkov -d ./lab-config</p>
                      <p className="text-red-400 font-bold">FAILED for resource: aws_s3_bucket.reports_store</p>
                      <p className="text-stone-300">
                        &bull; CKV_AWS_20: &quot;Ensure S3 bucket has an explicit public-access block.&quot;
                      </p>
                      <p className="text-stone-300">
                        &bull; CKV_AWS_21: &quot;Ensure S3 bucket has versioning enabled.&quot;
                      </p>
                      <p className="text-red-400 font-bold mt-2">FAILED for resource: kubernetes_pod.sample_api</p>
                      <p className="text-stone-300">
                        &bull; CKV_K8S_20: &quot;Containers should run as a high-UID non-root user.&quot;
                      </p>
                      <p className="text-stone-300">
                        &bull; CKV_K8S_22: &quot;Root filesystem should be configured as read-only.&quot;
                      </p>
                      <div className="pt-2 border-t border-stone-800 text-stone-400">
                        Summary: Passed: 3, Failed: 4, Skipped: 0
                      </div>
                    </div>
                  ) : checkovState === "remediated" ? (
                    <div className="space-y-2">
                      <p className="text-stone-400">$ checkov -d ./lab-config --framework terraform,kubernetes</p>
                      <p className="text-emerald-400 font-bold">
                        PASSED for resource: aws_s3_bucket.reports_store (CKV_AWS_20, CKV_AWS_21)
                      </p>
                      <p className="text-emerald-400 font-bold">
                        PASSED for resource: kubernetes_pod.sample_api (CKV_K8S_20, CKV_K8S_22)
                      </p>
                      <div className="pt-2 border-t border-stone-800 text-emerald-400 font-bold">
                        Summary: Passed: 7, Failed: 0, Skipped: 0 &bull; ALL POLICY-AS-CODE GATES PASSED
                      </div>
                    </div>
                  ) : (
                    <p className="text-stone-400 italic">
                      Click either scan button above to launch the interactive Checkov terminal simulator.
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Lab 6 */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                    Lab 6 &bull; Practical
                  </span>
                  <h3 className="text-lg font-bold text-stone-900">Incident Tabletop & Remediation Simulator</h3>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                  Advanced
                </span>
              </div>
              <p className="text-xs md:text-sm text-stone-700">
                <strong>Scenario:</strong> AWS GuardDuty fires an alert: an S3 bucket containing confidential student records was modified to allow public anonymous GET calls by a compromised workload service account. Step through live incident response.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-stone-200 pb-2 overflow-x-auto text-xs font-medium">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      onClick={() => setTabletopStep(s)}
                      className={`px-3 py-1.5 rounded-xl cursor-pointer ${
                        tabletopStep === s ? "bg-[#ea580c] text-white font-bold" : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      Step {s}: {s === 1 ? "Identify" : s === 2 ? "Contain" : s === 3 ? "Investigate" : s === 4 ? "Eradicate" : "Retest"}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                  {tabletopStep === 1 && (
                    <div>
                      <strong className="text-stone-900 block mb-1">Step 1: Evidence Preservation & Verification</strong>
                      <p className="text-stone-600">
                        Export CloudTrail event records for <code>PutBucketPolicy</code> and <code>PutBucketAcl</code> over the past 24 hours. Verify the Principal ARN (<code>arn:aws:iam::123456789012:role/worker-service</code>) and originating source IP.
                      </p>
                    </div>
                  )}
                  {tabletopStep === 2 && (
                    <div className="space-y-2">
                      <strong className="text-stone-900 block mb-1">Step 2: Rapid Containment Options</strong>
                      <p className="text-stone-600">Select the safest containment measure to mitigate exfiltration without breaking active clusters:</p>
                      <div className="space-y-1.5">
                        {[
                          { id: "del", text: "Delete the entire S3 bucket immediately." },
                          { id: "block", text: "Enable S3 Account-Level Block Public Access and attach an explicit Deny policy." },
                          { id: "ignore", text: "Wait until business hours to consult the application developer." }
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => setTabletopContainmentAction(opt.id)}
                            className={`w-full text-left p-2.5 rounded-xl border text-xs cursor-pointer ${
                              tabletopContainmentAction === opt.id
                                ? opt.id === "block"
                                  ? "bg-emerald-100 border-emerald-300 text-emerald-950 font-bold"
                                  : "bg-red-100 border-red-300 text-red-950 font-bold"
                                : "bg-white border-stone-200 hover:border-stone-300 text-stone-700"
                            }`}
                          >
                            {opt.text}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  {tabletopStep === 3 && (
                    <div>
                      <strong className="text-stone-900 block mb-1">Step 3: Blast Radius Investigation</strong>
                      <p className="text-stone-600">
                        Analyze S3 Server Access logs and CloudWatch metric filters to identify whether anonymous external IPs downloaded objects. Audit other permissions associated with the worker role.
                      </p>
                    </div>
                  )}
                  {tabletopStep === 4 && (
                    <div>
                      <strong className="text-stone-900 block mb-1">Step 4: Eradication & Credential Rotation</strong>
                      <p className="text-stone-600">
                        Revoke all active STS session tokens for the worker role. Rotate database connection secrets stored in AWS Secrets Manager. Rebuild the container image without embedded tokens.
                      </p>
                    </div>
                  )}
                  {tabletopStep === 5 && (
                    <div>
                      <strong className="text-stone-900 block mb-1">Step 5: Retest & Guardrail Enforcement</strong>
                      <p className="text-stone-600">
                        Deploy an AWS Service Control Policy (SCP) at the root Organizational Unit prohibiting anyone except the CloudSecOps role from modifying S3 Public Access Block settings.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Interactive 9-Point Checklist */}
            <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <h3 className="text-lg font-bold text-stone-900">Interactive Security Assessment Readiness Checklist</h3>
                  <p className="text-xs text-stone-600">
                    Verify each foundational control with concrete technical evidence before declaring an environment hardened.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 border border-orange-200 px-3 py-1 rounded-xl">
                    {checklistCompletedCount} / 9 Verified
                  </span>
                  <button
                    onClick={resetChecklist}
                    className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-600 text-xs transition cursor-pointer flex items-center gap-1"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              <div className="w-full bg-stone-200 rounded-full h-2">
                <div
                  className="bg-[#ea580c] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(checklistCompletedCount / 9) * 100}%` }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                {[
                  { id: "c1", label: "In-scope assets, data sensitivity, and account ownership documented." },
                  { id: "c2", label: "Human and workload identities strictly adhere to least privilege." },
                  { id: "c3", label: "Role-assumption and external trust relationships audited." },
                  { id: "c4", label: "Storage public-access settings and ACLs verified." },
                  { id: "c5", label: "Inbound and outbound network security groups justified." },
                  { id: "c6", label: "Container images scanned, pinned to digests, and run as non-root." },
                  { id: "c7", label: "Kubernetes RBAC, admission controls, and network policies enforced." },
                  { id: "c8", label: "Centralized audit logs, KMS encryption, and backups verified." },
                  { id: "c9", label: "All findings assigned owners, remediation evidence, and passing retests." }
                ].map((item) => (
                  <label
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className={`flex items-start gap-2.5 p-3 rounded-2xl border transition cursor-pointer text-xs ${
                      checklist[item.id]
                        ? "bg-emerald-50/70 border-emerald-300 text-emerald-950 font-medium"
                        : "bg-stone-50 border-stone-200 hover:bg-stone-100/60 text-stone-700"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checklist[item.id]}
                      onChange={() => {}}
                      className="rounded text-orange-600 focus:ring-orange-500 w-4 h-4 shrink-0 mt-0.5 pointer-events-none"
                    />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: CASE STUDY                                                        */}
        {/* ========================================================================= */}
        {activeTab === "case-study" && (
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-4">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                Case Study
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                PrepSpaces Cloud-Native Infrastructure & EKS Posture Assessment
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                <strong>Architecture Context:</strong> PrepSpaces deploys its interactive coding assessment engine
                across an Amazon Web Services (AWS) multi-account environment centered around an Amazon Elastic
                Kubernetes Service (EKS) cluster.
              </p>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2">
                <strong className="text-stone-900 block font-mono uppercase tracking-wider">
                  Discovered Vulnerabilities During Internal Audit
                </strong>
                <ul className="list-disc pl-5 space-y-1.5 text-stone-700">
                  <li>
                    <strong>Excessive EKS Node Role:</strong> The IAM instance profile attached to EC2 worker nodes possessed{" "}
                    <code>s3:*</code> and <code>ec2:*</code> permissions. A pod escaping its namespace could read instance metadata (IMDSv1) and seize full account control.
                  </li>
                  <li>
                    <strong>Public Course Export S3 Bucket:</strong> A bucket designated for student grading logs lacked{" "}
                    <code>BlockPublicAccess</code>, allowing unauthenticated directory listing of evaluation artifacts.
                  </li>
                  <li>
                    <strong>Unrestricted Pod-to-Pod Communication:</strong> Default Kubernetes networking allowed student test runners in <code>sandbox-ns</code> to connect directly to the internal Redis cache in <code>prod-cache-ns</code>.
                  </li>
                  <li>
                    <strong>Missing Pre-Commit IaC Gate:</strong> Developers pushed Terraform manifests containing hardcoded database connection strings directly to production branches without static analysis.
                  </li>
                </ul>
              </div>

              <h3 className="text-base font-bold text-stone-900 pt-2">Remediation Roadmap Implemented</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                  <strong className="block mb-1 font-bold">1. IAM Roles for Service Accounts (IRSA)</strong>
                  <p className="text-stone-600">
                    Replaced static node instance profiles with OIDC-based IRSA. Workload pods now obtain scoped temporary STS tokens with zero node-level privilege inheritance. IMDSv2 was strictly enforced with hop limit 1.
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                  <strong className="block mb-1 font-bold">2. Kubernetes NetworkPolicies & Calico CNI</strong>
                  <p className="text-stone-600">
                    Configured zero-trust default-deny ingress and egress policies across all non-system namespaces. Sandbox pods cannot reach cluster DNS or internal services.
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                  <strong className="block mb-1 font-bold">3. Checkov CI/CD Quality Gate</strong>
                  <p className="text-stone-600">
                    Added Checkov policy-as-code validation to GitHub Actions. Pull requests containing unencrypted S3 buckets or wildcard IAM statements are blocked automatically before merge.
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                  <strong className="block mb-1 font-bold">4. AWS GuardDuty & CloudTrail S3 Alerts</strong>
                  <p className="text-stone-600">
                    Configured automated Lambda responders triggered by GuardDuty findings to automatically re-enable S3 Public Access Block within 3 seconds of any accidental modification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: QUIZ                                                               */}
        {/* ========================================================================= */}
        {activeTab === "quiz" && (
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-stone-900">Knowledge Check &mdash; Module 18 Quiz</h2>
                <p className="text-xs text-stone-600">
                  Select the best answer for each question, then submit to receive your score and detailed rationale.
                </p>
              </div>
              {quizSubmitted && (
                <div className="px-3.5 py-1.5 rounded-xl bg-orange-50 border border-orange-200 text-[#ea580c] font-bold text-xs font-mono">
                  Score: {calculateQuizScore()} / {quizQuestions.length} ({Math.round((calculateQuizScore() / quizQuestions.length) * 100)}%)
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q) => (
                <div key={q.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2.5">
                  <p className="font-bold text-stone-900 text-sm">{q.q}</p>
                  <div className="space-y-1.5">
                    {q.options.map((opt, idx) => {
                      const isSelected = quizAnswers[q.id] === idx;
                      let btnStyle = "bg-white border-stone-200 text-stone-700 hover:border-stone-300";
                      if (quizSubmitted) {
                        if (idx === q.correct) {
                          btnStyle = "bg-emerald-100 border-emerald-300 text-emerald-950 font-bold";
                        } else if (isSelected) {
                          btnStyle = "bg-red-100 border-red-300 text-red-950 font-bold";
                        }
                      } else if (isSelected) {
                        btnStyle = "bg-orange-100 border-orange-300 text-[#ea580c] font-bold";
                      }
                      return (
                        <button
                          key={idx}
                          disabled={quizSubmitted}
                          onClick={() => handleSelectQuiz(q.id, idx)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {quizSubmitted && (
                    <div className="p-3 rounded-xl bg-stone-100 text-stone-700 text-xs leading-relaxed mt-2 border border-stone-200">
                      <strong>Rationale:</strong> {q.rationale}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <button
                onClick={() => {
                  setQuizSubmitted(true);
                }}
                disabled={quizSubmitted || Object.keys(quizAnswers).length < quizQuestions.length}
                className="px-6 py-2.5 rounded-xl bg-[#ea580c] text-white text-xs font-bold hover:bg-orange-600 transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                Submit Quiz
              </button>
              {quizSubmitted && (
                <button
                  onClick={() => {
                    setQuizAnswers({});
                    setQuizSubmitted(false);
                  }}
                  className="px-4 py-2 rounded-xl border border-stone-200 bg-white text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
                >
                  Retake Quiz
                </button>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: CAPSTONE PROJECT & RUBRIC                                         */}
        {/* ========================================================================= */}
        {activeTab === "capstone" && (
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-4">
              <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-orange-100 text-[#ea580c]">
                Portfolio Capstone
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-stone-900">
                Final Capstone: Cloud Security Posture Assessment & Remediation
              </h2>
            </div>

            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                <strong>Scenario:</strong> PrepSpaces is preparing a fictional cloud-hosted learning application for
                a major production release. The environment includes an application API, a database, object storage,
                a workload identity, a container registry, and a Kubernetes deployment.
              </p>
              <p>
                <strong>Your Role:</strong> Cloud Security Assessor responsible for identifying configuration risks,
                recommending controls, and validating fixes.
              </p>

              <h3 className="text-base font-bold text-stone-900 pt-2">Required Capstone Deliverables</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">A. Architecture & Scope</strong>
                  <p className="text-stone-600">Produce a system diagram showing users, identities, APIs, data stores, VPC boundaries, container services, and logging destinations. Define shared responsibility bounds.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">B. IAM Assessment</strong>
                  <p className="text-stone-600">Document permissions of administrators, CI/CD deployment identities, and workload roles. Flag excessive wildcards and risky trust relationships.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">C. Configuration Assessment</strong>
                  <p className="text-stone-600">Assess storage policies, security groups, KMS keys, backups, and exposed endpoints with empirical evidence and severity rankings.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">D. Container & Kubernetes Review</strong>
                  <p className="text-stone-600">Review Dockerfile specifications, base image digests, runtime privileges, secrets mounting, RBAC roles, and NetworkPolicy rules.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">E. Remediation & Rollback Plan</strong>
                  <p className="text-stone-600">Identify owner, proposed patch, dependencies, impact analysis, and verified rollback procedure for every confirmed defect.</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block mb-1">F. Automated Prevention (IaC)</strong>
                  <p className="text-stone-600">Provide before-and-after Checkov scan evidence proving issues are prevented at pull request time.</p>
                </div>
              </div>

              <h3 className="text-base font-bold text-stone-900 pt-2">Capstone Evaluation Rubric (100 Points Total)</h3>
              <div className="overflow-x-auto border border-stone-200 rounded-2xl">
                <table className="w-full text-xs text-left">
                  <thead className="bg-stone-50 border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="p-3">Criterion</th>
                      <th className="p-3">Points</th>
                      <th className="p-3">Requirements for Full Marks</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-600">
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Architecture & Scope Definition</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">10 pts</td>
                      <td className="p-3">Clean diagram, explicit boundaries, clear demarcation of provider vs customer controls.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">IAM & Trust-Policy Assessment</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">20 pts</td>
                      <td className="p-3">Deep analysis of principal grants, trust policies, least-privilege replacements, and privilege escalation risks.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Cloud Exposure & Configuration</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">20 pts</td>
                      <td className="p-3">Empirical validation of storage, networking, encryption, backup, and logging posture.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Container & Kubernetes Security</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">20 pts</td>
                      <td className="p-3">Hardened Dockerfile, non-root execution, dropped capabilities, scoped RBAC, and NetworkPolicies.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Remediation & Retesting Quality</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">15 pts</td>
                      <td className="p-3">Concrete code diffs, before-and-after retest telemetry, and documented rollback strategies.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-stone-900">Evidence, Report Quality & Automation</td>
                      <td className="p-3 font-mono font-bold text-[#ea580c]">15 pts</td>
                      <td className="p-3">Checkov scan reports, reproducible CI/CD policy-as-code scripts, professional executive summary.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 font-medium">
                Passing Score: <strong>75 / 100</strong>. No critical vulnerability may remain without an approved mitigating control or documented risk acceptance.
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* QUICK REVISION SHEET & AUTHORITATIVE RESOURCES (ALWAYS VISIBLE FOOTER)    */}
        {/* ========================================================================= */}
        <div className="mt-8 space-y-6">
          {/* Quick Revision Sheet */}
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ea580c]" />
              Module 18 Quick Revision Sheet &mdash; 10 Core Security Principles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
              {[
                { topic: "Shared Responsibility", rule: "Know which controls belong to provider vs customer." },
                { topic: "IAM Least Privilege", rule: "Grant only minimal required actions, resources, and conditions." },
                { topic: "Trust Policies", rule: "Audit who can assume or impersonate a privileged identity." },
                { topic: "Cloud Posture", rule: "Check data exposure, network rules, keys, logging, and recovery." },
                { topic: "Container Hardening", rule: "Use approved digests, non-root users, dropped caps, and zero secrets." },
                { topic: "Kubernetes Isolation", rule: "Combine scoped Roles with Pod securityContext and NetworkPolicies." },
                { topic: "IaC Static Analysis", rule: "Detect misconfigurations before deployment via Checkov in CI/CD." },
                { topic: "Risk Prioritization", rule: "Priority ≈ Exposure × Privilege × Data Impact × Exploitability." },
                { topic: "Remediation Retest", rule: "Fix root causes and retest both security and application functionality." },
                { topic: "Incident Response", rule: "Contain safely, investigate blast radius, and enforce guardrails." }
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-stone-50 border border-stone-200">
                  <strong className="text-stone-900 block font-mono text-[11px] mb-1">{item.topic}</strong>
                  <p className="text-stone-600 text-[11px] leading-relaxed">{item.rule}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Authoritative Resources */}
          <div className="p-6 md:p-8 rounded-3xl bg-white border border-stone-200 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#ea580c]" />
              Authoritative Learning Resources & Official Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {[
                {
                  title: "AWS IAM Security Best Practices",
                  author: "Amazon Web Services",
                  url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html",
                  desc: "Least privilege, credential protection, and identity security."
                },
                {
                  title: "AWS IAM Access Analyzer",
                  author: "AWS IAM",
                  url: "https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-policy-validation.html",
                  desc: "Policy validation, external-access findings, and unused-permission analysis."
                },
                {
                  title: "GCP Service Account Best Practices",
                  author: "Google Cloud",
                  url: "https://docs.cloud.google.com/iam/docs/best-practices-service-accounts",
                  desc: "Workload identities, service-account permissions, and privilege escalation defense."
                },
                {
                  title: "Microsoft Cloud Security Benchmark",
                  author: "Microsoft Learn",
                  url: "https://learn.microsoft.com/en-us/security/benchmark/azure/",
                  desc: "Cloud identity, privileged access, and workload configuration guidelines."
                },
                {
                  title: "NIST SP 800-190 Container Security",
                  author: "NIST",
                  url: "https://www.nist.gov/publications/application-container-security-guide",
                  desc: "Foundational container architecture risks, countermeasures, and hardening."
                },
                {
                  title: "Kubernetes Application Security Checklist",
                  author: "Kubernetes.io",
                  url: "https://kubernetes.io/docs/concepts/security/application-security-checklist/",
                  desc: "Workload security contexts, RBAC, image security, and related controls."
                },
                {
                  title: "Kubernetes Security Checklist",
                  author: "Kubernetes.io",
                  url: "https://kubernetes.io/docs/concepts/security/security-checklist/",
                  desc: "Cluster-level configuration, API security, and node hardening."
                },
                {
                  title: "OWASP Kubernetes Top Ten: 2025",
                  author: "OWASP Foundation",
                  url: "https://kubernetes-top10.owasp.org/",
                  desc: "Common security vulnerabilities and attack paths in Kubernetes clusters."
                },
                {
                  title: "OWASP Top 10: 2025",
                  author: "OWASP",
                  url: "https://top10.owasp.org/2025/",
                  desc: "Security Misconfiguration and Broken Access Control core classifications."
                },
                {
                  title: "CISA Cloud Security Technical Reference",
                  author: "CISA",
                  url: "https://www.cisa.gov/topics/cybersecurity-best-practices/executive-order-improving-nations-cybersecurity",
                  desc: "Cloud architecture, shared services, and federal cloud defense guidelines."
                },
                {
                  title: "Checkov Policy-as-Code Scanner",
                  author: "Checkov.io",
                  url: "https://www.checkov.io/",
                  desc: "Infrastructure configuration scanning for Terraform, K8s, and Docker."
                }
              ].map((res, idx) => (
                <a
                  key={idx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 hover:border-orange-300 hover:bg-orange-50/40 transition group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono font-bold text-stone-600 block mb-0.5">{res.author}</span>
                    <strong className="text-stone-900 group-hover:text-orange-950 block mb-1">
                      {res.title}
                    </strong>
                    <p className="text-stone-600 text-[11px] leading-relaxed">{res.desc}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#ea580c] font-mono text-[11px] font-bold mt-2">
                    <span>View Official Specification</span>
                    <ExternalLink className="w-3 h-3" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FOOTER NAVIGATION (PREVIOUS & NEXT MODULE)                                */}
        {/* ========================================================================= */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
          <button
            onClick={() => navigate("/learning/cybersecurity/wireless-security")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: Module 17 (Wireless Security & Wi-Fi Defense)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/burp-suite")}
            className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 19 (Web PenTesting & Burp Suite)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
