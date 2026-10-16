import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Globe,
  Layers,
  Terminal,
  Shield,
  Activity,
  Play,
  RotateCcw,
  Sliders,
  Copy,
  Check,
  Server,
  Network,
  HelpCircle,
  Award,
  AlertTriangle,
  Sparkles,
  Lock,
  Workflow,
  Zap,
  Boxes,
  Compass,
  FileCode,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Monitor,
  HardDrive,
  Clock,
  Gauge,
  SlidersHorizontal,
  ExternalLink,
  Eye,
  FileText,
  UserCheck,
  AlertOctagon,
  Key,
  Database,
  Search,
  Filter,
  CheckSquare,
  XCircle,
  Download,
  Info,
  ListChecks,
  FileCheck,
  Split,
  FolderLock,
  GitBranch,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTERCLASS: MODULE 4                            */
/* Security Principles, Threat Modeling, Attack Surfaces & Risk Management    */
/* Academic Foundation: MIT 6.858, CMU SEI, NIST SP 800-160, NIST SP 800-30,  */
/* NIST CSF 2.0, OWASP Threat Modeling, Microsoft SDL / STRIDE, MITRE ATT&CK  */
/* -------------------------------------------------------------------------- */

export default function CybersecurityThreatModeling() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(4);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'interactive-labs' | 'case-study' | 'quiz' | 'capstone'
  const [activeLabTab, setActiveLabTab] = useState("lab1-assets"); // 'lab1-assets' | 'lab2-dfd' | 'lab3-stride' | 'lab4-surface' | 'lab5-risk' | 'lab6-review'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (codeText, id) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* LAB 1: ASSET INVENTORY & CRITICALITY ENGINE                                */
  /* -------------------------------------------------------------------------- */
  const initialAssets = [
    {
      id: "AST-01",
      name: "Learner Identity Data (PII)",
      owner: "Identity & Operations",
      classification: "Confidential",
      c: "High",
      i: "Moderate",
      a: "Moderate",
      criticality: "High",
      businessImpact: "Unauthorized disclosure violates DPDP Act 2023 / GDPR; heavy regulatory fines.",
      controls: "AES-256 at rest, TLS 1.3, field-level masking in database queries, strict RBAC.",
    },
    {
      id: "AST-02",
      name: "Authentication Secrets & Passkeys",
      owner: "Security Architecture",
      classification: "Highly Restricted",
      c: "High",
      i: "High",
      a: "High",
      criticality: "Critical",
      businessImpact: "Compromise leads to complete account takeover across all student & staff accounts.",
      controls: "Argon2id hashing, WebAuthn/FIDO2 credentials, hardware-bound tokens, rate limiting.",
    },
    {
      id: "AST-03",
      name: "Interview Transcripts & Evaluation Reports",
      owner: "Academic Operations",
      classification: "Highly Restricted",
      c: "High",
      i: "High",
      a: "Moderate",
      criticality: "Critical",
      businessImpact: "Unauthorized access exposes student career evaluations and proprietary scoring rubrics.",
      controls: "Object-level server-side access control, encrypted S3 buckets, immutable access logs.",
    },
    {
      id: "AST-04",
      name: "Official Certification & Assessment Scores",
      owner: "Certification Board",
      classification: "Confidential",
      c: "Moderate",
      i: "High",
      a: "High",
      criticality: "Critical",
      businessImpact: "Tampering invalidates course credibility and creates fraudulent accreditations.",
      controls: "Digital signatures, HMAC verification on grades, audit logging, dual approval on changes.",
    },
    {
      id: "AST-05",
      name: "Core Educational Course Content",
      owner: "Content Engineering",
      classification: "Internal / Public",
      c: "Low",
      i: "High",
      a: "High",
      criticality: "Medium",
      businessImpact: "Defacement or tampering disrupts learning delivery; downtime stops student progress.",
      controls: "Cloudflare CDN caching, automated immutable git deployments, WAF DDoS filtering.",
    },
    {
      id: "AST-06",
      name: "Administrative Operations & IAM Roles",
      owner: "DevOps & Platform Engineering",
      classification: "Highly Restricted",
      c: "High",
      i: "High",
      a: "High",
      criticality: "Critical",
      businessImpact: "Rogue admin action can delete production databases, alter billing, or exfiltrate logs.",
      controls: "Zero Trust access tunnel, MFA enforcement, separation of duties, break-glass logging.",
    },
    {
      id: "AST-07",
      name: "Production API Keys & Database Secrets",
      owner: "Cloud Security",
      classification: "Highly Restricted",
      c: "High",
      i: "High",
      a: "High",
      criticality: "Critical",
      businessImpact: "Leaked database credentials allow complete unmediated database exfiltration.",
      controls: "AWS Secrets Manager, automated 90-day rotation, IAM service-role authentication.",
    },
    {
      id: "AST-08",
      name: "External AI Interview Evaluation Service API",
      owner: "Product & Machine Learning",
      classification: "Confidential",
      c: "High",
      i: "Moderate",
      a: "High",
      criticality: "High",
      businessImpact: "External provider outage halts mock interview generation; data leakage to third party.",
      controls: "Anonymized payload hashing, circuit breakers, fallback static evaluator, strict data DPA.",
    },
  ];

  const [assetList, setAssetList] = useState(initialAssets);
  const [selectedAsset, setSelectedAsset] = useState(initialAssets[0]);
  const [assetFilter, setAssetFilter] = useState("All");

  const filteredAssets = useMemo(() => {
    if (assetFilter === "All") return assetList;
    return assetList.filter((a) => a.criticality === assetFilter);
  }, [assetList, assetFilter]);

  /* -------------------------------------------------------------------------- */
  /* LAB 2: DATA-FLOW DIAGRAM (DFD) & TRUST BOUNDARY VISUALIZER                */
  /* -------------------------------------------------------------------------- */
  const [selectedDfdNode, setSelectedDfdNode] = useState("api-gateway");

  const dfdNodes = {
    "student-client": {
      name: "External Entity: Student Browser / Mobile App",
      type: "External Entity",
      trustZone: "Untrusted Public Internet",
      dataHandled: "Login credentials, HTTP headers, requested report IDs, session cookies.",
      boundaryCrossing: "Crosses Trust Boundary A (Public Internet to Edge WAF / Gateway)",
      assumptions: "Client-side code can be inspected, reversed, and modified at will by any user.",
      threats: ["Credential stuffing via automated tools", "Session hijacking via XSS / cookie theft", "Parameter tampering on API calls"],
    },
    "api-gateway": {
      name: "Process: Reverse Proxy & API Gateway (NGINX / Envoy)",
      type: "Process",
      trustZone: "Perimeter DMZ Boundary",
      dataHandled: "TLS termination, JWT validation, rate limiting counters, incoming HTTP requests.",
      boundaryCrossing: "Mediate Trust Boundary A (Ingress) and Trust Boundary B (Internal Subnet)",
      assumptions: "Gateway terminates TLS; downstream services assume gateway strips forged client headers.",
      threats: ["Volumetric HTTP flood / Slowloris DoS", "Header injection (X-Forwarded-For spoofing)", "Bypass of geo-blocking filters"],
    },
    "backend-api": {
      name: "Process: Core Application Service (Node.js / Express)",
      type: "Process",
      trustZone: "Private Application Subnet",
      dataHandled: "Business logic, user role enforcement, database queries, report generation logic.",
      boundaryCrossing: "Initiates calls across Trust Boundary C (to DB) and Trust Boundary D (to External AI)",
      assumptions: "Backend must verify resource ownership on EVERY request; must never trust client-asserted IDs.",
      threats: ["Insecure Direct Object Reference (IDOR)", "Privilege elevation via mass assignment", "SQL / NoSQL Injection flaws"],
    },
    "database-store": {
      name: "Data Store: PostgreSQL Production Cluster",
      type: "Data Store",
      trustZone: "Isolated Secure Data Tier",
      dataHandled: "User records, password hashes, assessment scores, interview transcripts.",
      boundaryCrossing: "Protected behind Trust Boundary C; accessible only from App Subnet on Port 5432.",
      assumptions: "No direct public IP; access requires authenticated DB user with least privilege permissions.",
      threats: ["Overprivileged DB service role dropping tables", "Unencrypted data exfiltration if disk stolen", "Connection starvation DoS"],
    },
    "external-ai": {
      name: "External Entity: Third-Party AI Evaluation Service",
      type: "External Entity",
      trustZone: "External Third-Party SaaS",
      dataHandled: "Interview text transcripts, feedback prompts, generated scoring recommendations.",
      boundaryCrossing: "Crosses Trust Boundary D (Outbound HTTPS API call with Bearer API Key)",
      assumptions: "Third party does NOT retain learner data; external API may experience latency or failure.",
      threats: ["Sensitive student PII leakage to third party", "API key compromise leading to quota theft", "Service outage halting reports"],
    },
  };

  /* -------------------------------------------------------------------------- */
  /* LAB 3: INTERACTIVE STRIDE THREAT ANALYZER                                  */
  /* -------------------------------------------------------------------------- */
  const [selectedStrideComponent, setSelectedStrideComponent] = useState("report-api");

  const strideMatrixData = {
    "report-api": {
      name: "Report Retrieval API Endpoint (GET /api/v1/reports/:id)",
      description: "Allows authenticated students to view their private mock interview assessment report.",
      stride: [
        {
          letter: "S",
          category: "Spoofing",
          property: "Authentication",
          threat: "Attacker forges JWT authorization header claiming identity of another student.",
          mitigation: "Strict HMAC-SHA256 signature verification with secret key stored in KMS.",
          testableRequirement: "API must reject requests with invalid signatures or altered payload claims with HTTP 401.",
        },
        {
          letter: "T",
          category: "Tampering",
          property: "Integrity",
          threat: "Attacker modifies report ID parameter in URL from /reports/100 to /reports/101.",
          mitigation: "Server-side complete mediation verifying requesting user owns report ID 101.",
          testableRequirement: "API must return HTTP 403 Forbidden when requested report.ownerId !== req.user.id.",
        },
        {
          letter: "R",
          category: "Repudiation",
          property: "Accountability",
          threat: "Student reads another student's report; system lacks logs to prove the access occurred.",
          mitigation: "Immutable append-only access audit log recording timestamp, userId, reportId, and IP.",
          testableRequirement: "Every read request must emit a structured audit event to CloudWatch / SIEM within 500ms.",
        },
        {
          letter: "I",
          category: "Information Disclosure",
          property: "Confidentiality",
          threat: "Report endpoint returns full database stack trace on invalid UUID format.",
          mitigation: "Sanitize all error handlers; return generic JSON error response without internal paths.",
          testableRequirement: "All 5xx responses must return standard error schema with zero internal stack traces.",
        },
        {
          letter: "D",
          category: "Denial of Service",
          property: "Availability",
          threat: "Attacker sends 10,000 rapid report PDF requests, exhausting server memory.",
          mitigation: "Rate limit endpoint to max 10 requests per minute per user; queue PDF generation in Redis.",
          testableRequirement: "Exceeding rate limit must trigger HTTP 429 Too Many Requests with Retry-After header.",
        },
        {
          letter: "E",
          category: "Elevation of Privilege",
          property: "Authorization",
          threat: "Ordinary student appends ?isAdmin=true to request to view administrative mentor notes.",
          mitigation: "Enforce strict server-side RBAC; filter query parameters against Zod schema whitelist.",
          testableRequirement: "Parameter pollution or unwhitelisted query arguments must be completely ignored by controller.",
        },
      ],
    },
    "file-upload": {
      name: "Student Resume Upload Service (POST /api/v1/resumes/upload)",
      description: "Accepts PDF and DOCX resume uploads from students for automated parsing.",
      stride: [
        {
          letter: "S",
          category: "Spoofing",
          property: "Authentication",
          threat: "Unauthenticated attacker uploads files anonymously to consume cloud storage.",
          mitigation: "Require valid authenticated bearer token before pre-signed upload URL is issued.",
          testableRequirement: "Endpoint must return HTTP 401 for requests lacking valid authorization bearer token.",
        },
        {
          letter: "T",
          category: "Tampering",
          property: "Integrity",
          threat: "Attacker uploads a polyglot executable disguised as a PDF file (.pdf.exe).",
          mitigation: "Validate magic bytes (file signature), enforce content-type check, and run ClamAV scan.",
          testableRequirement: "Files whose magic numbers do not match %PDF-1. must be rejected immediately with HTTP 400.",
        },
        {
          letter: "R",
          category: "Repudiation",
          property: "Accountability",
          threat: "Malicious file is uploaded; platform cannot identify which account uploaded it.",
          mitigation: "Store SHA-256 hash, upload timestamp, and uploader user ID in immutable metadata record.",
          testableRequirement: "Upload record must be committed to database before file is marked active in system.",
        },
        {
          letter: "I",
          category: "Information Disclosure",
          property: "Confidentiality",
          threat: "S3 bucket misconfiguration allows public listing of all uploaded student resumes.",
          mitigation: "Enable S3 Block Public Access; serve files only through short-lived (15-min) signed URLs.",
          testableRequirement: "Direct HTTP GET requests to S3 origin URL without signature must return 403 Forbidden.",
        },
        {
          letter: "D",
          category: "Denial of Service",
          property: "Availability",
          threat: "Attacker uploads 2GB files repeatedly, exhausting disk space and network bandwidth.",
          mitigation: "Enforce 10MB maximum file size limit at reverse proxy edge before buffering payload.",
          testableRequirement: "Requests exceeding 10MB Content-Length must be terminated with HTTP 413 Payload Too Large.",
        },
        {
          letter: "E",
          category: "Elevation of Privilege",
          property: "Authorization",
          threat: "Malformed PDF exploits vulnerability in server-side PDF parser to execute remote shell.",
          mitigation: "Isolate document parser in ephemeral unprivileged sandbox container with read-only rootfs.",
          testableRequirement: "Parser process must run as non-root user (UID 10001) with no network socket capabilities.",
        },
      ],
    },
  };

  /* -------------------------------------------------------------------------- */
  /* LAB 5: QUALITATIVE 5x5 RISK HEATMAP & RISK REGISTER ENGINE                 */
  /* -------------------------------------------------------------------------- */
  const [riskLikelihood, setRiskLikelihood] = useState(4); // 1 to 5
  const [riskImpact, setRiskImpact] = useState(5); // 1 to 5
  const [selectedScenarioId, setSelectedScenarioId] = useState("sc-1");

  const riskScenarios = {
    "sc-1": {
      name: "Missing Object-Level Authorization (IDOR) on Student Interview Reports",
      asset: "Interview Reports & Transcripts (AST-03)",
      weakness: "Backend API validates login but fails to verify if requesting user ID matches report owner ID.",
      existingControls: "HTTPS TLS 1.3, User authentication required.",
      defaultL: 4,
      defaultI: 5,
    },
    "sc-2": {
      name: "Exposure of AWS Cloud Secrets in Frontend Web Bundle",
      asset: "Production API Keys & Secrets (AST-07)",
      weakness: "Developer committed staging S3 credentials into React client environment variables.",
      existingControls: "Code review required before PR merge.",
      defaultL: 3,
      defaultI: 5,
    },
    "sc-3": {
      name: "Third-Party AI Interview Scoring Service Outage",
      asset: "External AI Service API (AST-08)",
      weakness: "Application lacks asynchronous fallback queue or circuit breaker when external API is down.",
      existingControls: "HTTP timeout set to 30 seconds.",
      defaultL: 4,
      defaultI: 3,
    },
    "sc-4": {
      name: "Excessive DB Privileges Assigned to Web Application Service Account",
      asset: "PostgreSQL Database Cluster (AST-04)",
      weakness: "Application connects to PostgreSQL as database superuser (postgres) instead of scoped role.",
      existingControls: "Database resides in private VPC subnet.",
      defaultL: 3,
      defaultI: 5,
    },
    "sc-5": {
      name: "Missing Rate Limiting on Password Reset Verification Endpoint",
      asset: "Authentication Secrets & Passkeys (AST-02)",
      weakness: "6-digit OTP verification allows unlimited brute-force attempts without lockout.",
      existingControls: "OTP expires after 10 minutes.",
      defaultL: 4,
      defaultI: 4,
    },
  };

  const handleScenarioChange = (scId) => {
    setSelectedScenarioId(scId);
    setRiskLikelihood(riskScenarios[scId].defaultL);
    setRiskImpact(riskScenarios[scId].defaultI);
  };

  const calculatedRisk = useMemo(() => {
    const rawScore = riskLikelihood * riskImpact;
    let level = "Low";
    let badgeClass = "bg-emerald-100 text-emerald-800 border-emerald-300";
    let treatment = "Accept or mitigate in normal maintenance cycle.";
    let reviewFreq = "Review semi-annually";

    if (rawScore >= 16) {
      level = "Critical";
      badgeClass = "bg-red-100 text-red-800 border-red-300";
      treatment = "Immediate executive escalation; deploy hotfix within 24–48 hours; apply compensating WAF rule.";
      reviewFreq = "Continuous monitoring & weekly status review";
    } else if (rawScore >= 10) {
      level = "High";
      badgeClass = "bg-orange-100 text-orange-800 border-orange-300";
      treatment = "High-priority sprint remediation within 14 days; implement defensive monitoring.";
      reviewFreq = "Monthly review by security lead";
    } else if (rawScore >= 5) {
      level = "Moderate";
      badgeClass = "bg-amber-100 text-amber-800 border-amber-300";
      treatment = "Schedule remediation in upcoming development milestone; enhance logging.";
      reviewFreq = "Quarterly review";
    }

    return { rawScore, level, badgeClass, treatment, reviewFreq };
  }, [riskLikelihood, riskImpact]);

  /* -------------------------------------------------------------------------- */
  /* LAB 6: SECURITY DESIGN REVIEW WORKSHOP                                     */
  /* -------------------------------------------------------------------------- */
  const [selectedReviewFlaw, setSelectedReviewFlaw] = useState("flaw-1");

  const designFlaws = {
    "flaw-1": {
      title: "Design Flaw 1: Broken Authorization Mediation on Report Downloads",
      flawedArch: "Frontend verifies student is logged in, then issues direct GET to /api/reports/:id. Backend checks JWT expiration, but retrieves SQL row without checking WHERE owner_id = jwt.user_id.",
      violatedPrinciple: "Complete Mediation (Lesson 2.4) & Least Privilege (Lesson 2.1)",
      consequence: "Any authenticated student can enumerate report IDs from 1 to 10,000 to read all peer evaluations.",
      secureRedesign: "Enforce complete mediation in backend SQL query: SELECT * FROM reports WHERE id = $1 AND (owner_id = $2 OR $3 = 'admin'). Reject with 403 Forbidden on zero rows matched.",
      testMethod: "Send authenticated request with Student A's token requesting Student B's report ID; verify HTTP 403 response.",
    },
    "flaw-2": {
      title: "Design Flaw 2: Overprivileged Service Account Connecting to Database",
      flawedArch: "Application backend connects using PostgreSQL 'postgres' superuser credentials stored in static config file. Service account has permissions to CREATE USER, DROP DATABASE, and read audit tables.",
      violatedPrinciple: "Least Privilege (Lesson 2.1) & Economy of Mechanism (Lesson 2.5)",
      consequence: "A single SQL injection vulnerability in any endpoint leads to full remote database takeover and log tampering.",
      secureRedesign: "Provision dedicated PostgreSQL role 'app_report_service' with SELECT, INSERT on reports table only. Explicitly DENY DROP, ALTER, and access to internal pg_catalog tables.",
      testMethod: "Execute 'SELECT current_user, usesuper FROM pg_user WHERE usename = current_user' via app connection; verify usesuper = false.",
    },
    "flaw-3": {
      title: "Design Flaw 3: Synchronous Dependency on External AI Service",
      flawedArch: "Web server blocks HTTP response thread waiting for external AI API to generate score. If external AI API hangs or fails, web server worker threads exhaust connection pools and crash.",
      violatedPrinciple: "Resilience and Recovery (Lesson 2.10) & Defense in Depth (Lesson 2.2)",
      consequence: "External AI provider downtime causes cascading failure, taking down the entire Prepspaces course portal.",
      secureRedesign: "Decouple using asynchronous message queue (RabbitMQ / BullMQ). Return HTTP 202 Accepted immediately; process AI evaluation in background with 5s circuit-breaker timeout.",
      testMethod: "Simulate 100% packet loss to external AI endpoint; verify portal returns HTTP 202 and remains completely responsive for all other features.",
    },
  };

  /* -------------------------------------------------------------------------- */
  /* ASSESSMENT & QUIZ (12 UNIVERSITY-INFORMED QUESTIONS DIRECTLY FROM SYLLABUS)*/
  /* -------------------------------------------------------------------------- */
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: 1,
      question: "What is the main purpose of threat modeling?",
      options: [
        "Guarantee the system has no vulnerabilities",
        "Identify plausible threats and decide how to address them",
        "Replace all security testing",
        "List security products that must be installed",
      ],
      correctIndex: 1,
      explanation:
        "Threat modeling is a structured, proactive methodology to understand system architecture, identify plausible threats, and select appropriate defensive controls before deployment. It does not guarantee zero vulnerabilities nor replace security testing.",
    },
    {
      id: 2,
      question: "Which term describes a weakness that may be exploited?",
      options: ["Asset", "Vulnerability", "Risk appetite", "Control owner"],
      correctIndex: 1,
      explanation:
        "A vulnerability is a weakness or flaw in system design, implementation, configuration, or operational process that can be exploited by an adversary to violate a security policy.",
    },
    {
      id: 3,
      question: "In STRIDE, what does information disclosure primarily threaten?",
      options: ["Confidentiality", "Availability only", "CPU scheduling", "Network bandwidth only"],
      correctIndex: 0,
      explanation:
        "In the STRIDE model, Information Disclosure directly violates Confidentiality—the property that sensitive information is accessible only to authorized entities.",
    },
    {
      id: 4,
      question: "What is the main purpose of a trust boundary in a threat model?",
      options: [
        "To show a visual separation for decoration",
        "To identify where different security assumptions or trust contexts meet",
        "To list every software dependency",
        "To measure application performance",
      ],
      correctIndex: 1,
      explanation:
        "A trust boundary represents a perimeter or transition where components, data, or control cross between different privilege levels or security assumptions (e.g., untrusted client browser crossing into the private backend API).",
    },
    {
      id: 5,
      question: "Which statement about attack surfaces is correct?",
      options: [
        "Every exposed endpoint is automatically vulnerable",
        "Attack surface includes interfaces and pathways through which a system can be accessed or affected",
        "Only public websites have attack surfaces",
        "An attack surface is the same as a risk score",
      ],
      correctIndex: 1,
      explanation:
        "An attack surface is the totality of reachable interfaces, endpoints, protocols, and pathways through which an adversary can interact with or influence a system. An exposed interface is not automatically a vulnerability if properly authenticated and authorized.",
    },
    {
      id: 6,
      question: "What is the difference between inherent and residual risk?",
      options: [
        "They are identical terms",
        "Inherent risk considers the risk before relevant controls; residual risk is what remains after controls are considered",
        "Residual risk always equals zero",
        "Inherent risk only applies to network devices",
      ],
      correctIndex: 1,
      explanation:
        "Inherent risk is the raw risk level assessed prior to considering defensive safeguards. Residual risk is the risk that remains after existing or planned security controls are applied.",
    },
    {
      id: 7,
      question: "Which NIST CSF 2.0 function was added to emphasize organizational cybersecurity governance?",
      options: ["Protect", "Detect", "Govern", "Recover"],
      correctIndex: 2,
      explanation:
        "NIST CSF 2.0 introduced 'Govern' (GV) as a brand new sixth core function to explicitly establish organizational risk management strategy, policies, oversight, and executive accountability.",
    },
    {
      id: 8,
      question: "An application hides an admin button but its backend still permits an ordinary user to perform the action. Which principle is most directly violated?",
      options: [
        "Complete mediation and server-side authorization",
        "Packet switching",
        "Network redundancy",
        "Data compression",
      ],
      correctIndex: 0,
      explanation:
        "Complete Mediation requires that every access request must be validated against security policies on the server side on every invocation. Hiding a button in the frontend is a cosmetic UI convenience, not a security control.",
    },
    {
      id: 9,
      question: "What does risk transfer or sharing mean?",
      options: [
        "The underlying risk and every legal responsibility disappear",
        "Some financial or contractual consequences may be allocated to another party, without necessarily removing the underlying risk",
        "The organization must ignore the risk",
        "The system must be taken offline permanently",
      ],
      correctIndex: 1,
      explanation:
        "Risk transfer or sharing (e.g., cyber insurance or outsourcing to managed cloud providers) allocates certain financial or operational burdens to a third party. However, it does not magically eliminate the underlying vulnerability or absolve statutory legal liabilities.",
    },
    {
      id: 10,
      question: "A vulnerability scanner reports a serious issue. What should the analyst do next?",
      options: [
        "Assume exploitation is confirmed",
        "Validate the evidence and assess the affected asset, exposure, impact and existing controls",
        "Assign maximum risk without investigation",
        "Publish confidential details immediately",
      ],
      correctIndex: 1,
      explanation:
        "Scanners generate false positives and lack environmental context. A professional security analyst safely verifies the report, evaluates reachability, affected assets, business impact, and existing compensating controls before assigning risk priority.",
    },
    {
      id: 11,
      question: "Which activity primarily maps components, data stores, data flows and trust boundaries?",
      options: [
        "Data-flow diagramming",
        "Password rotation alone",
        "Software licensing review alone",
        "Asset depreciation calculation",
      ],
      correctIndex: 0,
      explanation:
        "Data-Flow Diagramming (DFD) visually decomposes a system into external entities, processes, data stores, data flows, and trust boundaries to support structured threat modeling.",
    },
    {
      id: 12,
      question: "Which is a suitable example of residual risk?",
      options: [
        "A risk remaining after controls have been implemented and evaluated",
        "A vulnerability name without context",
        "A backup that has never been tested",
        "A firewall rule before configuration",
      ],
      correctIndex: 0,
      explanation:
        "Residual risk is the risk that persists after all existing or planned controls (such as MFA, encryption, and firewalls) have been designed, implemented, and evaluated.",
    },
  ];

  const handleSelectOption = (questionId, optionIdx) => {
    if (quizSubmitted) return;
    setQuizAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans selection:bg-[#f97316] selection:text-white">
      {/* Top Global Navigation Bar */}
      <ModuleNav
        track="cybersecurity"
        currentModuleId="threat-modeling"
        showAiTutor={showAiTutor}
        onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
        aiTutorLabel="Threat Modeling Mentor"
      />

      <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Header & University Alignment Badge */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold text-[#ea580c] uppercase tracking-wider">
              <Shield size={12} className="text-[#f97316]" />
              Course: Cybersecurity Masterclass
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              Module 4 of 24 · Core Security Engineering
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-stone-200 bg-white/80 px-2.5 py-1 text-[11px] font-bold text-stone-600">
              Academic Lineage · MIT 6.858 / CMU SEI / NIST SP 800-160 & 800-30 / OWASP
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
              Beginner → Intermediate · 14–18 Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            Security Principles, Threat Modeling, Attack Surfaces & Risk Management
          </h1>
          <p className="mt-2 text-sm md:text-base text-stone-600 max-w-4xl leading-relaxed">
            Learn how to reason systematically about security before choosing tools, implementing controls, or testing a system. Bridge foundational knowledge into professional security engineering using DFDs, STRIDE, attack trees, attack-surface reduction, and evidence-based risk registers.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex items-center gap-2 border-b border-[#e7e3da] pb-3 mb-6 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "theory"
                ? "bg-[#18181b] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <BookOpen size={14} />
            <span>Curriculum & Deep Theory (Parts A–G, L)</span>
          </button>

          <button
            onClick={() => setActiveTab("interactive-labs")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "interactive-labs"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Workflow size={14} />
            <span>Interactive Labs Suite (Labs 1–6)</span>
          </button>

          <button
            onClick={() => setActiveTab("case-study")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "case-study"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <FileText size={14} />
            <span>Applied Case Study: LearnSphere Platform (Part H)</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "quiz"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <Award size={14} />
            <span>Knowledge Check & Quiz (12 Questions)</span>
          </button>

          <button
            onClick={() => setActiveTab("capstone")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "capstone"
                ? "bg-[#ea580c] text-white shadow-xs"
                : "bg-white/80 text-stone-600 hover:bg-white hover:text-stone-900 border border-[#e7e3da]"
            }`}
          >
            <ListChecks size={14} />
            <span>Capstone Project & Rubric (Part K)</span>
          </button>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: CURRICULUM & DEEP THEORY (PARTS A THROUGH G, L)              */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick In-Page Subtopic Navigation Bar */}
            <div className="p-3 rounded-2xl bg-white border border-[#e7e3da] shadow-2xs flex items-center gap-2 overflow-x-auto scrollbar-none">
              <span className="text-[11px] font-bold text-stone-500 uppercase font-mono px-2 shrink-0">
                Jump to Part:
              </span>
              {[
                { id: "part-a", label: "A: Security Engineering Foundations" },
                { id: "part-b", label: "B: Security Design Principles" },
                { id: "part-c", label: "C: Threats & Risk Vocabulary" },
                { id: "part-d", label: "D: Threat Modeling & DFDs" },
                { id: "part-e", label: "E: Attack Surfaces & Reduction" },
                { id: "part-f", label: "F: Risk Management & Heatmaps" },
                { id: "part-g", label: "G: Risk Frameworks (NIST & OWASP)" },
                { id: "part-l", label: "L: University Citations & Standards" },
              ].map((sub) => (
                <a
                  key={sub.id}
                  href={`#${sub.id}`}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold text-stone-600 hover:bg-orange-50 hover:text-[#ea580c] transition whitespace-nowrap border border-transparent hover:border-orange-200"
                >
                  {sub.label}
                </a>
              ))}
            </div>

            {/* Overview Card: Learning Objectives */}
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-bold text-[#ea580c]">
                  <Sparkles size={13} />
                  Core Competencies
                </span>
                <span className="text-xs text-stone-500 font-mono">15 Academic Learning Objectives</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Module Learning Objectives & Outcomes
              </h2>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                By the conclusion of this module, learners will be able to systematically construct threat models, map complex attack surfaces, prioritize risk using evidence, and justify defensive controls:
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Explain security engineering principles and their vital role in systems design (NIST SP 800-160).",
                  "Distinguish CIA triad, authentication, authorization, accountability, auditability, privacy, and resilience.",
                  "Differentiate assets, threats, threat actors, vulnerabilities, exploits, attack vectors, attack surfaces, and risk.",
                  "Apply least privilege, defense in depth, secure defaults, complete mediation, and separation of duties.",
                  "Identify trust boundaries, entry points, data stores, data flows, and unverified security assumptions.",
                  "Construct data-flow diagrams (DFDs) and decompose architectures into STRIDE threat categories.",
                  "Use attack trees and abuse cases to analyze multi-step attack paths and business-logic flaws.",
                  "Map network, application, API, identity, cloud, data, and software supply-chain attack surfaces.",
                  "Explain how likelihood, impact, exposure, and existing controls affect risk severity.",
                  "Construct a 5×5 qualitative risk heatmap and maintain an actionable, evidence-based risk register.",
                  "Distinguish inherent risk, residual risk, severity, risk appetite, and risk tolerance.",
                  "Select and justify risk-treatment strategies: mitigate, avoid, transfer/share, and accept.",
                  "Apply NIST CSF 2.0 (Govern, Identify, Protect, Detect, Respond, Recover) and NIST SP 800-30.",
                  "Draft testable security requirements and concrete verification test cases.",
                  "Present professional threat models and risk assessments that developers, architects, and CISOs can execute.",
                ].map((obj, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-2xl border border-stone-200/70 bg-stone-50/70 p-3.5">
                    <CheckCircle2 size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                    <span className="text-xs text-stone-700 leading-relaxed font-medium">{obj}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* PART A: Foundations of Security Engineering */}
            <section id="part-a" className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Shield size={14} />
                <span>Part A — Foundations of Security Engineering</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 1.1: What is Security Engineering?
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                <strong>Security engineering</strong> is the discipline of designing, implementing, evaluating, and maintaining systems so that they resist unacceptable harm under realistic adversarial conditions. It is not an afterthought or a final checklist before production; it is an intrinsic systems-engineering discipline throughout the entire software and operational lifecycle (formalized in <strong>NIST SP 800-160 Volume 1 Revision 1</strong>).
              </p>

              {/* Reactive vs Engineering Comparison */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2 text-xs">
                <div className="rounded-2xl border border-red-200 bg-red-50/50 p-5">
                  <span className="font-bold text-red-950 text-sm block mb-2">Team A: Reactive Security Posture</span>
                  <p className="text-stone-700 leading-relaxed">
                    Builds features rapidly without threat modeling. Deploys code to production and performs security testing only after a major vulnerability or breach is reported. Remediation is chaotic, expensive, and often breaks existing user workflows.
                  </p>
                  <div className="mt-3 font-mono text-[11px] text-red-800 font-semibold">
                    Cost of Fix: 30x–100x higher than design-stage remediation.
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
                  <span className="font-bold text-emerald-950 text-sm block mb-2">Team B: Proactive Security Engineering</span>
                  <p className="text-stone-700 leading-relaxed">
                    Identifies sensitive assets during architectural design, defines access-control requirements, analyzes trust boundaries, models threats using STRIDE, and verifies that safeguards work continuously after deployment.
                  </p>
                  <div className="mt-3 font-mono text-[11px] text-emerald-800 font-semibold">
                    Cost of Fix: Minimal; security requirements built into sprint backlog.
                  </div>
                </div>
              </div>

              {/* The 7-Stage Security Engineering Lifecycle */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-base font-extrabold text-[#18181b] mb-3">
                  The Seven-Stage Security Engineering Lifecycle
                </h3>
                <div className="grid gap-2 sm:grid-cols-7 text-center text-xs">
                  {[
                    { step: "01", name: "Objectives", desc: "Define assets & properties" },
                    { step: "02", name: "Model System", desc: "Map DFD & trust boundaries" },
                    { step: "03", name: "Threats & Risk", desc: "STRIDE & failure scenarios" },
                    { step: "04", name: "Design Controls", desc: "Preventive & detective" },
                    { step: "05", name: "Verify Design", desc: "Authorized testing of controls" },
                    { step: "06", name: "Deploy & Monitor", desc: "SIEM & telemetry signals" },
                    { step: "07", name: "Review & Evolve", desc: "Reassess residual risk" },
                  ].map((st, i) => (
                    <div key={i} className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
                      <div className="text-sm font-black text-[#ea580c] font-mono">{st.step}</div>
                      <div className="text-xs font-bold text-[#18181b] mt-1">{st.name}</div>
                      <p className="text-[10px] text-stone-500 mt-0.5">{st.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lesson 1.2: Security Objectives & Extended Properties */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-base font-extrabold text-[#18181b] mb-3">
                  Lesson 1.2: Security Objectives & Extended Properties Matrix
                </h3>
                <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                  The classical CIA triad defines confidentiality, integrity, and availability. Modern enterprise engineering expands this into comprehensive operational properties:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700 font-bold">
                        <th className="p-3">Property</th>
                        <th className="p-3">Engineering Meaning</th>
                        <th className="p-3">Concrete Learning Platform Example</th>
                        <th className="p-3">Primary Safeguard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Confidentiality</td>
                        <td className="p-3 text-stone-600">Preventing unauthorized disclosure of sensitive data</td>
                        <td className="p-3 text-stone-600">Student A cannot view Student B's interview evaluation transcript</td>
                        <td className="p-3 text-stone-600">Server-side ACLs, AES-256-GCM, TLS 1.3</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Integrity</td>
                        <td className="p-3 text-stone-600">Protecting against unauthorized modification or deletion</td>
                        <td className="p-3 text-stone-600">A user cannot tamper with their interview score by modifying JSON</td>
                        <td className="p-3 text-stone-600">HMAC-SHA256, digital signatures, transactional rollback</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Availability</td>
                        <td className="p-3 text-stone-600">Maintaining reliable authorized access when required</td>
                        <td className="p-3 text-stone-600">Portal remains reachable during peak mock interview exam hours</td>
                        <td className="p-3 text-stone-600">Redundant clusters, auto-scaling, DDoS filtering</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Authentication</td>
                        <td className="p-3 text-stone-600">Establishing that a claimed entity identity is genuine</td>
                        <td className="p-3 text-stone-600">Verifying a learner via biometric WebAuthn passkey or Argon2id hash</td>
                        <td className="p-3 text-stone-600">FIDO2 tokens, MFA, time-based OTP</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Authorization</td>
                        <td className="p-3 text-stone-600">Determining permitted operations for an authenticated identity</td>
                        <td className="p-3 text-stone-600">Only authorized academic mentors can publish official grades</td>
                        <td className="p-3 text-stone-600">Role-Based (RBAC) & Attribute-Based (ABAC) controls</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Accountability</td>
                        <td className="p-3 text-stone-600">Tracing system actions and changes to an identifiable entity</td>
                        <td className="p-3 text-stone-600">Recording exactly which staff member altered a student's certificate</td>
                        <td className="p-3 text-stone-600">Structured, append-only immutable audit logs</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Non-Repudiation</td>
                        <td className="p-3 text-stone-600">Providing undeniable proof of origin and action integrity</td>
                        <td className="p-3 text-stone-600">Authorizing an exam submission with an asymmetric digital signature</td>
                        <td className="p-3 text-stone-600">Public-key cryptography, hardware security modules (HSM)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Privacy</td>
                        <td className="p-3 text-stone-600">Governing lawful collection, usage, retention, and erasure</td>
                        <td className="p-3 text-stone-600">Deleting expired audio recordings of mock interviews under DPDP Act</td>
                        <td className="p-3 text-stone-600">Data minimization, purpose limitation, automated purging</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Resilience</td>
                        <td className="p-3 text-stone-600">Sustaining operations through unexpected component failure</td>
                        <td className="p-3 text-stone-600">Graceful degradation when external AI scoring API goes offline</td>
                        <td className="p-3 text-stone-600">Circuit breakers, async message queues, tested backups</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Lesson 1.3: Policy vs Mechanism vs Control */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-base font-extrabold text-[#18181b] mb-3">
                  Lesson 1.3: Security Policy vs. Mechanism vs. Control Categories
                </h3>
                <div className="grid gap-3 sm:grid-cols-3 text-xs">
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="font-bold text-[#18181b] block">Security Policy</span>
                    <p className="text-stone-600 mt-1 leading-relaxed">
                      Defines required or permitted behavior. <em>"Only authorized course mentors may publish assessment grades; grades cannot be modified once certified."</em>
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="font-bold text-[#18181b] block">Security Mechanism</span>
                    <p className="text-stone-600 mt-1 leading-relaxed">
                      The specific technical apparatus. <em>"A Node.js RBAC middleware verifying JWT role claims and issuing parameterized UPDATE queries."</em>
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="font-bold text-[#18181b] block">Security Control</span>
                    <p className="text-stone-600 mt-1 leading-relaxed">
                      The holistic operational safeguard intended to modify risk. <em>"Dual-custody grade approval combined with immutable SIEM logging and quarterly access reviews."</em>
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 text-xs">
                  <div className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c]">1. Preventive:</span> Server-side authorization, input validation, WAF filtering.
                  </div>
                  <div className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c]">2. Detective:</span> Real-time SIEM alerts, file integrity monitoring (FIM), anomaly detection.
                  </div>
                  <div className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c]">3. Corrective:</span> Automated account lockouts, dynamic patch deployment, revocation lists.
                  </div>
                  <div className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c]">4. Deterrent:</span> Warning banners, acceptable-use policy agreements, honeypots.
                  </div>
                  <div className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c]">5. Recovery:</span> Automated snapshots, point-in-time database restoration, warm standby sites.
                  </div>
                  <div className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c]">6. Compensating:</span> Additional monitoring & network isolation when legacy systems cannot be patched.
                  </div>
                </div>
              </div>
            </section>

            {/* PART B: Security Design Principles */}
            <section id="part-b" className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <ShieldCheck size={14} />
                <span>Part B — Ten Core Security Design Principles</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 2.1–2.10: Architectural Principles of Secure Systems
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Derived from the landmark Saltzer and Schroeder (1975) engineering principles and modern Zero Trust guidance, these ten rules govern defensive system architecture:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs">
                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b] text-sm">2.1 Least Privilege</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Every user, background daemon, API token, and microservice must possess only the minimum privileges required to execute its duty. A background report generator must not hold DB administrative rights.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b] text-sm">2.2 Defense in Depth</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Deploy layered, overlapping safeguards so that the failure of any single control (e.g. WAF bypass) is mitigated by subsequent layers (server-side checks, DB encryption, VPC network segmentation).
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b] text-sm">2.3 Secure Defaults & Fail-Safe</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Systems must ship in the most secure configuration out of the box. If an authorization check encounters an unhandled exception, it must fail closed and DENY access rather than allowing it.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b] text-sm">2.4 Complete Mediation</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Every access attempt to every resource must be checked on the server side on every invocation. Client-side button hiding is a usability convenience, not a security control.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b] text-sm">2.5 Economy of Mechanism</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Keep designs as simple as practical. Complex code paths, convoluted authentication state machines, and obscure protocols create hidden failure modes that are impossible to test.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b] text-sm">2.6 Separation of Duties</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    High-impact administrative actions (such as publishing official certifications or changing billing gateways) require dual-custody approval to prevent single-account compromise abuse.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b] text-sm">2.7 Minimize Attack Surface</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Decommission legacy API versions, strip unused debug endpoints, close open ports, and remove unneeded dependencies. An interface that does not exist cannot be exploited.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b] text-sm">2.8 Assume Controls Can Fail</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Document and challenge all implicit architectural assumptions. Never assume internal traffic is clean or that a third-party API will never be compromised or change behavior.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                  <h4 className="font-bold text-[#18181b] text-sm">2.9 Zero Trust Architecture</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    <em>"Never trust, always verify."</em> Network location (e.g., VPN or private subnet) confers zero implicit trust. Every single request must establish identity, authorization, and encryption.
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4 sm:col-span-2 lg:col-span-3">
                  <h4 className="font-bold text-[#18181b] text-sm">2.10 Resilience & Tested Recovery</h4>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    Prevention is necessary, but breaches and outages still occur. Systems must be engineered for graceful degradation, automated failover, and verified backups. A backup that has never been restored in a rehearsal is not a backup—it is an untested hypothesis.
                  </p>
                </div>
              </div>
            </section>

            {/* PART C: Threats, Vulnerabilities, and Risk */}
            <section id="part-c" className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Boxes size={14} />
                <span>Part C — Essential Security Vocabulary & Threat Modeling vs. Scanning</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 3.1–3.3: Precise Terminology & The Adversarial Framework
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Security documentation becomes unusable when analysts use words like <em>threat</em>, <em>vulnerability</em>, and <em>risk</em> as synonyms. Each term represents a distinct, sequential node in causal security analysis:
              </p>

              {/* Terminology Grid */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-xs">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">Asset:</strong>
                  <span className="text-stone-600 text-[11px] mt-1 block">Information, infrastructure, or process of value deserving defense (e.g. private interview reports).</span>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">Threat Source / Actor:</strong>
                  <span className="text-stone-600 text-[11px] mt-1 block">Entity with potential to cause harm: cybercriminals, malicious insiders, accidental developers.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">Vulnerability:</strong>
                  <span className="text-stone-600 text-[11px] mt-1 block">Weakness or failed assumption in design or code (e.g. missing report ownership validation).</span>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">Exploit & Attack Vector:</strong>
                  <span className="text-stone-600 text-[11px] mt-1 block">The specific mechanism or pathway taking active advantage of the vulnerability to cause harm.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">Attack Surface:</strong>
                  <span className="text-stone-600 text-[11px] mt-1 block">The totality of reachable interfaces, routes, endpoints, and protocols exposed to interaction.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">Exposure:</strong>
                  <span className="text-stone-600 text-[11px] mt-1 block">Degree to which an asset or interface is reachable (Public internet vs. internal private VPC).</span>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">Risk:</strong>
                  <span className="text-stone-600 text-[11px] mt-1 block">Potential for adverse business loss, calculated as Likelihood × Business Impact.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">Residual Risk:</strong>
                  <span className="text-stone-600 text-[11px] mt-1 block">The remaining risk that persists after all existing and planned controls are evaluated.</span>
                </div>
              </div>

              {/* Threat Modeling vs Vulnerability Scanning Table */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-base font-extrabold text-[#18181b] mb-3">
                  Lesson 3.3: Threat Modeling vs. Automated Vulnerability Scanning
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700 font-bold">
                        <th className="p-3">Dimension</th>
                        <th className="p-3">Threat Modeling (Design & Architecture)</th>
                        <th className="p-3">Vulnerability Scanning (Tool & Signature)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Core Focus</td>
                        <td className="p-3 text-stone-600">Analyzes architecture, data flows, trust boundaries, and business logic</td>
                        <td className="p-3 text-stone-600">Probes network interfaces for known CVE signatures and missing headers</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Timing in SDLC</td>
                        <td className="p-3 text-stone-600">Begins during early architectural design, before any code is written</td>
                        <td className="p-3 text-stone-600">Requires a deployed, running application or compiled build artifact</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Flaw Detection</td>
                        <td className="p-3 text-stone-600">Discovers deep design flaws: broken workflows, missing authorization, overprivileged roles</td>
                        <td className="p-3 text-stone-600">Detects implementation bugs: outdated libraries, missing TLS ciphers, syntax XSS</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Business Context</td>
                        <td className="p-3 text-stone-600">Deeply understands business purpose, data sensitivity, and asset criticality</td>
                        <td className="p-3 text-stone-600">Blind to business intent; cannot tell whether an exposed endpoint is intentional</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Professional Role</td>
                        <td className="p-3 text-stone-600">Defines security requirements and test criteria for developers</td>
                        <td className="p-3 text-stone-600">Provides point-in-time evidence and sanity checks for deployment</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* PART D: Threat Modeling Methodology & DFDs */}
            <section id="part-d" className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Workflow size={14} />
                <span>Part D — Threat Modeling Methodology, DFDs & STRIDE</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 4.1–4.7: Repeatable 10-Step Process, Attack Trees & Abuse Cases
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                As advocated by OWASP and the Carnegie Mellon University Software Engineering Institute (SEI), threat modeling provides a systematic, repeatable framework for discovering architectural flaws before implementation:
              </p>

              {/* The 10-Step Process */}
              <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <h3 className="text-sm font-bold text-[#18181b] mb-3">
                  The Repeatable Ten-Step Threat-Modeling Process
                </h3>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5 text-xs text-stone-700">
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono block">Step 01</span>
                    Define scope & business goal
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono block">Step 02</span>
                    Identify critical assets
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono block">Step 03</span>
                    Draw Data-Flow Diagram (DFD)
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono block">Step 04</span>
                    Mark all trust boundaries
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono block">Step 05</span>
                    Document explicit assumptions
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono block">Step 06</span>
                    Apply STRIDE threat analysis
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono block">Step 07</span>
                    Evaluate Likelihood & Impact
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono block">Step 08</span>
                    Draft testable mitigations
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono block">Step 09</span>
                    Verify controls with testing
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono block">Step 10</span>
                    Update model upon change
                  </div>
                </div>
              </div>

              {/* Data Flow Diagram Elements */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-base font-extrabold text-[#18181b] mb-3">
                  Lesson 4.3: Data-Flow Diagram (DFD) Standard Elements
                </h3>
                <div className="grid gap-3 sm:grid-cols-5 text-xs text-center">
                  <div className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c] font-mono block">External Entity</span>
                    <span className="text-[11px] text-stone-500 mt-1 block">Student Browser, External AI Service</span>
                  </div>
                  <div className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c] font-mono block">Process</span>
                    <span className="text-[11px] text-stone-500 mt-1 block">API Gateway, Node.js App Service</span>
                  </div>
                  <div className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c] font-mono block">Data Store</span>
                    <span className="text-[11px] text-stone-500 mt-1 block">PostgreSQL DB, S3 Object Storage</span>
                  </div>
                  <div className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c] font-mono block">Data Flow</span>
                    <span className="text-[11px] text-stone-500 mt-1 block">HTTPS POST payload, SQL query string</span>
                  </div>
                  <div className="p-3 rounded-xl border border-stone-200 bg-white">
                    <span className="font-bold text-[#ea580c] font-mono block">Trust Boundary</span>
                    <span className="text-[11px] text-stone-500 mt-1 block">Internet to DMZ, Subnet to Data Tier</span>
                  </div>
                </div>
              </div>

              {/* Testable Security Requirements */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-base font-extrabold text-[#18181b] mb-2">
                  Drafting Verifiable, Testable Security Requirements
                </h3>
                <p className="text-xs text-stone-600 mb-3 leading-relaxed">
                  A common anti-pattern in security reviews is writing vague aspirations. Professional engineers translate STRIDE findings into testable behavioral requirements:
                </p>

                <div className="grid gap-3 sm:grid-cols-2 text-xs">
                  <div className="p-3.5 rounded-xl border border-red-200 bg-red-50 text-red-950 font-mono">
                    <strong className="block text-red-700 font-sans mb-1">Unacceptable Vague Requirement:</strong>
                    "The report API must be secure against unauthorized tampering."
                  </div>
                  <div className="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-950 font-mono">
                    <strong className="block text-emerald-700 font-sans mb-1">Testable Engineering Requirement:</strong>
                    "For every GET /api/reports/:id, server must evaluate requesting user ID from validated JWT against report.ownerId. Mismatches must emit a 403 Forbidden with zero data returned."
                  </div>
                </div>
              </div>
            </section>

            {/* PART E: Attack Surfaces & Reduction */}
            <section id="part-e" className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Layers size={14} />
                <span>Part E — Attack Surfaces, Exposure Types & Reduction Strategies</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 5.1–5.6: Five Attack Surface Domains & Change-Driven Modeling
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                An attack surface is the totality of reachable interfaces, routes, endpoints, protocols, background daemons, and third-party integrations through which an attacker could attempt to manipulate a system.
              </p>

              {/* The 5 Attack Surface Domains */}
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-xs">
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <span className="font-bold text-[#18181b] text-sm block mb-1">1. Network Attack Surface</span>
                  <p className="text-stone-600 leading-relaxed">
                    Public IPv4/IPv6 addresses, open ports (80, 443, 22), routing tables, VPN gateways, DNS records. Defense: Zero public SSH, Cloudflare edge proxy, strict security group egress rules.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <span className="font-bold text-[#18181b] text-sm block mb-1">2. Application & API Surface</span>
                  <p className="text-stone-600 leading-relaxed">
                    HTTP REST routes, GraphQL schemas, file upload handlers, error pages, WebSocket streams. Defense: Input validation (Zod), parameterized queries, server-side object ownership checks.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <span className="font-bold text-[#18181b] text-sm block mb-1">3. Identity Attack Surface</span>
                  <p className="text-stone-600 leading-relaxed">
                    Login endpoints, password reset flows, session token cookies, OAuth callback handlers, IAM roles. Defense: FIDO2 passkeys, rate limiting, HttpOnly/SameSite cookies, short-lived tokens.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <span className="font-bold text-[#18181b] text-sm block mb-1">4. Cloud & Infrastructure</span>
                  <p className="text-stone-600 leading-relaxed">
                    AWS IAM roles, S3 bucket policies, container orchestration ports, Kubernetes API server. Defense: S3 Block Public Access, customer-managed KMS keys, non-root container users.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                  <span className="font-bold text-[#18181b] text-sm block mb-1">5. Software Supply Chain</span>
                  <p className="text-stone-600 leading-relaxed">
                    NPM / PyPI dependencies, GitHub Actions workflows, build runner environments, signing keys. Defense: Dependency lockfiles, automated Dependabot scans, pinned SHA actions, artifact provenance.
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/60 flex flex-col justify-between">
                  <div>
                    <span className="font-bold text-[#ea580c] text-sm block mb-1">Attack Surface Reduction Rule</span>
                    <p className="text-stone-700 leading-relaxed">
                      Every newly exposed endpoint increases cognitive load, maintenance debt, and exploit potential. Always demand a justified business purpose before exposing any interface.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PART F: Risk Management, Heatmaps & Registers */}
            <section id="part-f" className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <SlidersHorizontal size={14} />
                <span>Part F — Risk Management, Qualitative 5×5 Matrix & Registers</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 6.1–6.8: Likelihood, Impact, Risk Appetite & Treatment
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Risk management is the systematic process of identifying, evaluating, prioritizing, and responding to risks in a manner that protects business value. Technical flaws do not equal business risk until evaluated in environmental context:
              </p>

              {/* Risk Math Formula Box */}
              <div className="my-6 p-4 rounded-2xl bg-orange-50/80 border border-orange-200 text-xs font-mono text-[#ea580c] text-center font-bold">
                Risk Priority Score = Likelihood Rating (1–5) × Business Impact Rating (1–5)
              </div>

              {/* 4 Treatment Strategies */}
              <div className="grid gap-3 sm:grid-cols-4 text-xs">
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">1. Mitigate</strong>
                  <span className="text-stone-600 mt-1 block">Deploy defensive controls (ownership checks, encryption, rate limits) to lower likelihood or impact.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">2. Avoid</strong>
                  <span className="text-stone-600 mt-1 block">Eliminate the high-risk feature or obsolete legacy service entirely from system architecture.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">3. Transfer / Share</strong>
                  <span className="text-stone-600 mt-1 block">Shift financial or operational impact to third parties via cyber insurance or SOC-2 compliant SaaS.</span>
                </div>
                <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                  <strong className="text-[#18181b] block">4. Accept</strong>
                  <span className="text-stone-600 mt-1 block">Formally retain residual risk with an authorized executive sign-off when remediation cost exceeds loss.</span>
                </div>
              </div>

              {/* Inherent vs Residual Risk */}
              <div className="mt-8 pt-6 border-t border-stone-200">
                <h3 className="text-base font-extrabold text-[#18181b] mb-2">
                  Lesson 6.5: Inherent Risk vs. Residual Risk
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 text-xs">
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900 block mb-1">Inherent Risk (Unmitigated)</span>
                    <p className="text-stone-600 leading-relaxed">
                      The natural risk level present in an activity or system <em>before</em> any defensive controls, safeguards, or policies are factored in. Example: Storing unencrypted interview transcripts on an internet-facing server.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                    <span className="font-bold text-stone-900 block mb-1">Residual Risk (Post-Control)</span>
                    <p className="text-stone-600 leading-relaxed">
                      The risk that persists <em>after</em> all implemented controls have been applied and evaluated. Residual risk is never zero; controls can fail, be bypassed, or suffer configuration drift.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* PART G: Risk-Management Frameworks */}
            <section id="part-g" className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <Compass size={14} />
                <span>Part G — Risk-Management Frameworks: NIST CSF 2.0 & ATT&CK</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Lesson 7.1–7.5: NIST CSF 2.0, NIST SP 800-30 & Severity vs. Business Risk
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Cybersecurity engineering aligns tactical threat findings with standardized institutional frameworks. A technical vulnerability rating (like CVSS) is an input, not a complete business risk assessment:
              </p>

              {/* NIST CSF 2.0 */}
              <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-5">
                <h3 className="text-sm font-bold text-[#18181b] mb-3">
                  NIST Cybersecurity Framework 2.0 (The Six Core Functions)
                </h3>
                <div className="grid gap-2.5 sm:grid-cols-6 text-center text-xs">
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-[#ea580c] block">1. GOVERN</span>
                    <span className="text-[10px] text-stone-500 mt-1 block">Strategy, risk appetite, policy, executive oversight</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-[#ea580c] block">2. IDENTIFY</span>
                    <span className="text-[10px] text-stone-500 mt-1 block">Asset inventories, DFDs, threat models, supply chain</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-[#ea580c] block">3. PROTECT</span>
                    <span className="text-[10px] text-stone-500 mt-1 block">Access controls, input validation, encryption, backups</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-[#ea580c] block">4. DETECT</span>
                    <span className="text-[10px] text-stone-500 mt-1 block">SIEM monitoring, IDS alerts, anomalous login tracking</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-[#ea580c] block">5. RESPOND</span>
                    <span className="text-[10px] text-stone-500 mt-1 block">Containment, eradication, customer escalation, CERT-In</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-stone-200">
                    <span className="font-bold text-[#ea580c] block">6. RECOVER</span>
                    <span className="text-[10px] text-stone-500 mt-1 block">Restoration from backups, resilience lessons learned</span>
                  </div>
                </div>
              </div>
            </section>

            {/* PART L: University References & Standard Citations */}
            <section id="part-l" className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-2">
                <BookOpen size={14} />
                <span>Part L — University and Authoritative Learning Resources</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Academic Lineage & Official Engineering References
              </h2>
              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                The content of Module 4 synthesizes foundational security engineering research from the world's leading academic institutions and standards bodies:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    inst: "MIT OpenCourseWare",
                    course: "6.858: Computer Systems Security",
                    focus: "Threat models, system vulnerabilities, privilege separation, secure systems design.",
                    url: "https://ocw.mit.edu/courses/6-858-computer-systems-security-fall-2014/",
                  },
                  {
                    inst: "Carnegie Mellon University (SEI)",
                    course: "Software Engineering Institute Threat Modeling",
                    focus: "Comparing threat-modeling methodologies and selecting suitable approaches for engineering projects.",
                    url: "https://www.sei.cmu.edu/library/threat-modeling-a-summary-of-available-methods/",
                  },
                  {
                    inst: "NIST (National Institute of Standards)",
                    course: "SP 800-160 Vol 1: Engineering Trustworthy Secure Systems",
                    focus: "Systems security engineering principles, architecture requirements, and verification lifecycle.",
                    url: "https://csrc.nist.gov/pubs/sp/800/160/v1/r1/final",
                  },
                  {
                    inst: "NIST (National Institute of Standards)",
                    course: "SP 800-30 Rev 1: Guide for Conducting Risk Assessments",
                    focus: "Preparing, conducting, and maintaining risk assessments; likelihood, impact, and threat events.",
                    url: "https://csrc.nist.gov/pubs/sp/800/30/r1/final",
                  },
                  {
                    inst: "OWASP Foundation",
                    course: "Threat Modeling & Attack Surface Cheat Sheets",
                    focus: "Building application threat models, mapping entry points, data flows, and exposure reduction.",
                    url: "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html",
                  },
                  {
                    inst: "Microsoft Security",
                    course: "Secure by Design & STRIDE Modeling",
                    focus: "Security development lifecycle (SDL), STRIDE category decomposition, and mitigation design.",
                    url: "https://www.microsoft.com/en-us/securityengineering/sdl/practices/secure-by-design",
                  },
                  {
                    inst: "MITRE Corporation",
                    course: "MITRE ATT&CK® Enterprise Framework",
                    focus: "Adversary tactics and techniques, threat-informed defense, and detection engineering context.",
                    url: "https://attack.mitre.org/",
                  },
                ].map((res, idx) => (
                  <div key={idx} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/70 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">{res.inst}</span>
                      <h3 className="text-xs font-extrabold text-[#18181b] mt-1">{res.course}</h3>
                      <p className="text-[11px] text-stone-600 mt-2 leading-relaxed">{res.focus}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-200">
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-stone-800 hover:text-[#ea580c] transition"
                      >
                        <span>Explore Syllabus</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: INTERACTIVE LABS SUITE (PART I: LABS 1 THROUGH 6)           */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "interactive-labs" && (
          <div className="space-y-8">
            {/* Sub-Lab Switcher */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {[
                { id: "lab1-assets", label: "Lab 1: Asset Inventory Studio" },
                { id: "lab2-dfd", label: "Lab 2: DFD & Trust Boundary Visualizer" },
                { id: "lab3-stride", label: "Lab 3: STRIDE Threat Analyzer" },
                { id: "lab4-surface", label: "Lab 4: Attack Surface Studio" },
                { id: "lab5-risk", label: "Lab 5: 5×5 Risk Heatmap Engine" },
                { id: "lab6-review", label: "Lab 6: Security Design Review" },
              ].map((lab) => (
                <button
                  key={lab.id}
                  onClick={() => setActiveLabTab(lab.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    activeLabTab === lab.id
                      ? "bg-[#18181b] text-white shadow-2xs"
                      : "bg-white text-stone-600 border border-stone-200 hover:bg-stone-50"
                  }`}
                >
                  {lab.label}
                </button>
              ))}
            </div>

            {/* LAB 1: ASSET INVENTORY */}
            {activeLabTab === "lab1-assets" && (
              <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                      <Database size={14} />
                      <span>Lab 1: Asset Inventory & Sensitivity Matrix Builder</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                      Enterprise Asset Catalog & Criticality Scoring
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-stone-500">Filter Criticality:</span>
                    <select
                      value={assetFilter}
                      onChange={(e) => setAssetFilter(e.target.value)}
                      className="rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-800 cursor-pointer"
                    >
                      <option value="All">All Criticalities ({assetList.length})</option>
                      <option value="Critical">Critical</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                  {/* Asset List */}
                  <div className="space-y-2 lg:col-span-1 max-h-[460px] overflow-y-auto pr-1">
                    {filteredAssets.map((asset) => {
                      const isSelected = selectedAsset.id === asset.id;
                      return (
                        <div
                          key={asset.id}
                          onClick={() => setSelectedAsset(asset)}
                          className={`p-3 rounded-2xl border transition-all cursor-pointer ${
                            isSelected
                              ? "border-[#ea580c] bg-orange-50/70 shadow-xs"
                              : "border-stone-200 bg-white hover:border-stone-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[11px] font-bold text-stone-500">{asset.id}</span>
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase ${
                                asset.criticality === "Critical"
                                  ? "bg-red-100 text-red-800"
                                  : asset.criticality === "High"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-stone-100 text-stone-700"
                              }`}
                            >
                              {asset.criticality}
                            </span>
                          </div>
                          <h3 className="font-bold text-xs text-[#18181b] mt-1">{asset.name}</h3>
                          <div className="text-[11px] text-stone-500 mt-0.5">{asset.classification}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Selected Asset Details Pane */}
                  <div className="lg:col-span-2 rounded-2xl border border-stone-200 bg-stone-50/70 p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                      <div>
                        <span className="font-mono text-xs text-orange-600 font-bold">{selectedAsset.id}</span>
                        <h3 className="text-base font-extrabold text-[#18181b]">{selectedAsset.name}</h3>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-stone-900 text-white font-mono text-xs font-bold">
                        Owner: {selectedAsset.owner}
                      </span>
                    </div>

                    <div className="text-xs text-stone-700 leading-relaxed">
                      <strong>Business Impact if Compromised:</strong> {selectedAsset.businessImpact}
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3 text-xs">
                      <div className="p-3 rounded-xl bg-white border border-stone-200">
                        <span className="font-bold text-blue-700 block mb-1">Confidentiality</span>
                        <span className="font-mono text-xs font-extrabold text-stone-800">{selectedAsset.c}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-stone-200">
                        <span className="font-bold text-emerald-700 block mb-1">Integrity</span>
                        <span className="font-mono text-xs font-extrabold text-stone-800">{selectedAsset.i}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-stone-200">
                        <span className="font-bold text-amber-700 block mb-1">Availability</span>
                        <span className="font-mono text-xs font-extrabold text-stone-800">{selectedAsset.a}</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs text-stone-700">
                      <strong className="block text-[#18181b] mb-1">Enforced Technical Controls:</strong>
                      <p className="font-mono text-stone-600">{selectedAsset.controls}</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* LAB 2: DATA-FLOW DIAGRAM & TRUST BOUNDARIES */}
            {activeLabTab === "lab2-dfd" && (
              <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                      <Workflow size={14} />
                      <span>Lab 2: Data-Flow Diagram (DFD) & Trust Boundaries</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                      Interactive System Architecture Decomposition
                    </h2>
                  </div>

                  <span className="text-xs text-stone-500 font-mono">Select a component to inspect trust boundaries</span>
                </div>

                {/* DFD Visual Nodes */}
                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800 text-stone-200 font-mono text-xs mb-6">
                  <div className="text-orange-400 font-bold mb-3 uppercase text-[11px]">
                    LEARNSPHERE PLATFORM DATA-FLOW MAP & TRUST BOUNDARIES:
                  </div>

                  <div className="grid gap-3 sm:grid-cols-5 text-center">
                    {Object.entries(dfdNodes).map(([nodeKey, nodeData]) => {
                      const isSelected = selectedDfdNode === nodeKey;
                      return (
                        <div
                          key={nodeKey}
                          onClick={() => setSelectedDfdNode(nodeKey)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-orange-950/80 border-orange-500 text-white shadow-xs"
                              : "bg-stone-800 border-stone-700 text-stone-300 hover:border-stone-500"
                          }`}
                        >
                          <span className="text-[10px] uppercase font-bold text-orange-400 block">{nodeData.type}</span>
                          <span className="font-bold text-xs mt-1 block truncate">{nodeData.name.split(":")[1] || nodeData.name}</span>
                          <span className="text-[9px] text-stone-400 mt-1 block">{nodeData.trustZone}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Node Details */}
                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                    <div>
                      <span className="text-[11px] font-mono font-bold text-orange-600 uppercase">
                        {dfdNodes[selectedDfdNode].type}
                      </span>
                      <h3 className="text-base font-extrabold text-[#18181b]">{dfdNodes[selectedDfdNode].name}</h3>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-stone-900 text-white font-mono text-xs font-bold">
                      {dfdNodes[selectedDfdNode].trustZone}
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 text-xs">
                    <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                      <strong className="text-stone-900 block mb-1">Boundary Crossing Context:</strong>
                      <p className="text-stone-600">{dfdNodes[selectedDfdNode].boundaryCrossing}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                      <strong className="text-stone-900 block mb-1">Security Assumption to Verify:</strong>
                      <p className="text-stone-600">{dfdNodes[selectedDfdNode].assumptions}</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs">
                    <strong className="text-red-700 block mb-1.5 font-bold">Identified Threat Scenarios for this Node:</strong>
                    <ul className="space-y-1 list-disc list-inside text-stone-700">
                      {dfdNodes[selectedDfdNode].threats.map((th, i) => (
                        <li key={i}>{th}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* LAB 3: STRIDE THREAT ANALYZER */}
            {activeLabTab === "lab3-stride" && (
              <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                      <ShieldCheck size={14} />
                      <span>Lab 3: Structured STRIDE Threat Analysis</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                      Component Threat Decomposition
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-stone-500">Component:</span>
                    <select
                      value={selectedStrideComponent}
                      onChange={(e) => setSelectedStrideComponent(e.target.value)}
                      className="rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-800 cursor-pointer"
                    >
                      <option value="report-api">Report Retrieval API (GET /reports/:id)</option>
                      <option value="file-upload">Resume Upload Service (POST /resumes/upload)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4 text-xs text-stone-600">
                  {strideMatrixData[selectedStrideComponent].description}
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {strideMatrixData[selectedStrideComponent].stride.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/80 text-xs space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-black text-sm text-[#ea580c]">{item.letter} — {item.category}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-stone-200 font-bold text-stone-700">
                          {item.property}
                        </span>
                      </div>

                      <p className="text-stone-800 font-medium leading-relaxed">{item.threat}</p>

                      <div className="pt-2 border-t border-stone-200/80 text-[11px] text-stone-600 space-y-1">
                        <div><strong className="text-emerald-700">Mitigation:</strong> {item.mitigation}</div>
                        <div className="font-mono text-stone-500 text-[10px] bg-white p-1.5 rounded-lg border border-stone-200">
                          <strong>Test:</strong> {item.testableRequirement}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* LAB 4: ATTACK SURFACE STUDIO */}
            {activeLabTab === "lab4-surface" && (
              <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                      <Layers size={14} />
                      <span>Lab 4: Attack Surface Inventory & Reduction</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                      Application Exposure Catalog
                    </h2>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700 font-bold">
                        <th className="p-3">Interface / Pathway</th>
                        <th className="p-3">Domain</th>
                        <th className="p-3">Exposure</th>
                        <th className="p-3">Authentication & AuthZ</th>
                        <th className="p-3">Data Handled</th>
                        <th className="p-3">Attack Surface Reduction Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">GET /api/v1/courses/public</td>
                        <td className="p-3 text-stone-600 font-mono">Application API</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">Public</span></td>
                        <td className="p-3 text-stone-600">None (Anonymous read)</td>
                        <td className="p-3 text-stone-600">Course syllabus & descriptions</td>
                        <td className="p-3 text-stone-600">Cache on Cloudflare edge CDN; strip database queries</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">GET /api/v1/reports/:id</td>
                        <td className="p-3 text-stone-600 font-mono">Application API</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold">Authenticated</span></td>
                        <td className="p-3 text-stone-600">Bearer JWT + Owner ID check</td>
                        <td className="p-3 text-stone-600">Student interview evaluation</td>
                        <td className="p-3 text-stone-600">Enforce complete mediation; rate-limit requests to 10/min</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">POST /api/v1/admin/users/role</td>
                        <td className="p-3 text-stone-600 font-mono">Application API</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-[10px] font-bold">Admin Only</span></td>
                        <td className="p-3 text-stone-600">SuperAdmin JWT + MFA token</td>
                        <td className="p-3 text-stone-600">User permission assignment</td>
                        <td className="p-3 text-stone-600">Restrict endpoint to internal VPN / Zero Trust IP range only</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">AWS S3 Bucket: /learn-resumes</td>
                        <td className="p-3 text-stone-600 font-mono">Cloud Storage</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 text-[10px] font-bold">Restricted</span></td>
                        <td className="p-3 text-stone-600">IAM Role + Pre-signed URLs</td>
                        <td className="p-3 text-stone-600">Student CVs & Resumes (PII)</td>
                        <td className="p-3 text-stone-600">Enable S3 Block Public Access; short-lived 15-min URLs</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">PostgreSQL Port 5432</td>
                        <td className="p-3 text-stone-600 font-mono">Network</td>
                        <td className="p-3"><span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-800 text-[10px] font-bold">Private Subnet</span></td>
                        <td className="p-3 text-stone-600">App service password + SSL</td>
                        <td className="p-3 text-stone-600">Entire relational platform data</td>
                        <td className="p-3 text-stone-600">Remove all public IPv4; isolate in private VPC subnet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* LAB 5: 5x5 QUALITATIVE RISK HEATMAP ENGINE */}
            {activeLabTab === "lab5-risk" && (
              <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                      <SlidersHorizontal size={14} />
                      <span>Lab 5: Qualitative 5×5 Risk Matrix & Register Engine</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                      Risk Scoring, Heatmap & Treatment Decision
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-stone-500">Preset Scenario:</span>
                    <select
                      value={selectedScenarioId}
                      onChange={(e) => handleScenarioChange(e.target.value)}
                      className="rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-800 cursor-pointer"
                    >
                      <option value="sc-1">1. Report IDOR Authorization Flaw</option>
                      <option value="sc-2">2. Leaked AWS Secrets in Frontend</option>
                      <option value="sc-3">3. External AI API Outage</option>
                      <option value="sc-4">4. Excessive Database Privileges</option>
                      <option value="sc-5">5. Brute-Force Password Reset OTP</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-4 rounded-2xl border border-stone-200 bg-stone-50/70 p-5">
                    <div>
                      <h4 className="font-extrabold text-[#18181b] text-sm">{riskScenarios[selectedScenarioId].name}</h4>
                      <p className="text-xs text-stone-600 mt-1">{riskScenarios[selectedScenarioId].weakness}</p>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                        <span>Likelihood Rating (Plausibility & Exposure):</span>
                        <span className="font-mono text-[#ea580c]">{riskLikelihood} / 5</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={riskLikelihood}
                        onChange={(e) => setRiskLikelihood(parseInt(e.target.value))}
                        className="w-full accent-[#ea580c] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-0.5">
                        <span>1: Rare</span>
                        <span>2: Unlikely</span>
                        <span>3: Possible</span>
                        <span>4: Likely</span>
                        <span>5: Almost Certain</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-stone-700 mb-1">
                        <span>Impact Rating (Severity of Loss):</span>
                        <span className="font-mono text-[#ea580c]">{riskImpact} / 5</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={riskImpact}
                        onChange={(e) => setRiskImpact(parseInt(e.target.value))}
                        className="w-full accent-[#ea580c] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-0.5">
                        <span>1: Negligible</span>
                        <span>2: Minor</span>
                        <span>3: Moderate</span>
                        <span>4: Major</span>
                        <span>5: Critical/Severe</span>
                      </div>
                    </div>
                  </div>

                  {/* Score & Heatmap Output */}
                  <div className="rounded-2xl border border-stone-200 bg-stone-900 text-stone-200 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono font-bold text-orange-400 uppercase">
                          CALCULATED RISK SEVERITY
                        </span>
                        <span className={`px-3 py-1 rounded-full font-bold text-xs border ${calculatedRisk.badgeClass}`}>
                          {calculatedRisk.level} RISK
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-3">
                        <div className="text-4xl font-black font-mono text-white">
                          {calculatedRisk.rawScore}
                          <span className="text-stone-500 text-lg">/25</span>
                        </div>
                        <div className="text-xs text-stone-400">
                          Score = L ({riskLikelihood}) × I ({riskImpact})
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-stone-800 text-xs text-stone-300 space-y-2">
                        <div>
                          <strong className="text-orange-400 block mb-0.5">Recommended Treatment:</strong>
                          {calculatedRisk.treatment}
                        </div>
                        <div className="text-[11px] text-stone-400">
                          <strong>Governance Cadence:</strong> {calculatedRisk.reviewFreq}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-800 text-[10px] font-mono text-stone-500">
                      Standardized under NIST SP 800-30 Revision 1 Assessment Guidance
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* LAB 6: SECURITY DESIGN REVIEW WORKSHOP */}
            {activeLabTab === "lab6-review" && (
              <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                      <FolderLock size={14} />
                      <span>Lab 6: Architectural Security Design Review Workshop</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                      Challenging Assumptions & Secure Redesign
                    </h2>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-stone-500">Select Design Flaw:</span>
                    <select
                      value={selectedReviewFlaw}
                      onChange={(e) => setSelectedReviewFlaw(e.target.value)}
                      className="rounded-xl border border-stone-300 bg-white px-3 py-1.5 text-xs font-semibold text-stone-800 cursor-pointer"
                    >
                      <option value="flaw-1">Flaw 1: Broken Ownership Check</option>
                      <option value="flaw-2">Flaw 2: Overprivileged DB Account</option>
                      <option value="flaw-3">Flaw 3: External AI Outage Crash</option>
                    </select>
                  </div>
                </div>

                <div className="rounded-2xl border border-stone-200 bg-stone-50/70 p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                    <h3 className="text-base font-extrabold text-[#18181b]">{designFlaws[selectedReviewFlaw].title}</h3>
                    <span className="px-3 py-1 rounded-full bg-red-100 text-red-800 font-mono text-xs font-bold">
                      Violates: {designFlaws[selectedReviewFlaw].violatedPrinciple}
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 text-xs">
                    <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 text-red-950">
                      <strong className="block text-red-900 font-bold mb-1">Flawed Architectural Assumption:</strong>
                      <p className="leading-relaxed">{designFlaws[selectedReviewFlaw].flawedArch}</p>
                      <div className="mt-2 text-red-800 font-semibold">
                        <strong>Impact:</strong> {designFlaws[selectedReviewFlaw].consequence}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 text-emerald-950">
                      <strong className="block text-emerald-900 font-bold mb-1">Secure Engineering Redesign:</strong>
                      <p className="leading-relaxed">{designFlaws[selectedReviewFlaw].secureRedesign}</p>
                      <div className="mt-2 text-emerald-800 font-mono text-[11px]">
                        <strong>Test Method:</strong> {designFlaws[selectedReviewFlaw].testMethod}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: APPLIED CASE STUDY (LEARN SPHERE PLATFORM REVIEW - PART H)    */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "case-study" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <FileText size={14} />
                <span>Part H — Comprehensive Applied Case Study</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                LearnSphere Architecture Assessment & Threat Modeling
              </h2>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                <strong>Platform Context:</strong> LearnSphere provides online courses, resume evaluations, coding sandboxes, and AI-assisted interview assessment reports. Its architecture comprises a React SPA frontend, an API Gateway reverse proxy, Express microservices, a PostgreSQL cluster, S3 document storage, and an external third-party AI feedback service.
              </p>

              {/* Six Step Case Study Breakdown */}
              <div className="mt-6 space-y-4">
                {[
                  {
                    step: "Step 1: Asset Identification & Criticality",
                    desc: "Ranked 8 assets: Learner PII (High), Passkeys/Auth secrets (Critical), Interview reports (Critical), Assessment scores (Critical), Course content (Medium), Admin IAM roles (Critical), Cloud API keys (Critical), and External AI integration (High).",
                  },
                  {
                    step: "Step 2: Attack Surface Inventory",
                    desc: "Mapped all ingress routes: Public course views, Authenticated report endpoints, Admin role modification routes, S3 resume buckets, PostgreSQL Port 5432, and Outbound external AI API connections.",
                  },
                  {
                    step: "Step 3: Plausible Threat Scenarios",
                    desc: "Formulated 6 key threats: 1) IDOR report theft via parameter modification; 2) Score tampering via backend route manipulation; 3) Leaked cloud keys in client bundle; 4) Malicious PDF upload executing code; 5) External AI outage crashing the portal; 6) Missing audit logs preventing incident triage.",
                  },
                  {
                    step: "Step 4: Risk Prioritization (5×5 Matrix)",
                    desc: "Report IDOR: L=4, I=5 -> 20 (Critical). Leaked AWS Keys: L=3, I=5 -> 15 (High). External AI Outage: L=4, I=3 -> 12 (Moderate). Missing Audit Logs: L=3, I=4 -> 12 (Moderate).",
                  },
                  {
                    step: "Step 5: Control Selection & Verifiable Requirements",
                    desc: "Deployed server-side complete mediation on report ownership; enabled S3 Block Public Access; enforced Zod schema validation; decoupled AI scoring with background message queues; and ingested structured JSON audit logs into CloudWatch.",
                  },
                  {
                    step: "Step 6: Residual Risk & Governance Sign-Off",
                    desc: "Documented remaining residual risk of external AI latency; assigned risk owner to Lead Cloud Architect; established monthly review cadence under NIST CSF 2.0 Govern function.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-2xl border border-stone-200 bg-stone-50/70 p-4">
                    <h3 className="text-xs font-bold text-[#ea580c] uppercase font-mono">{item.step}</h3>
                    <p className="mt-1 text-xs text-stone-700 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: ASSESSMENT & QUIZ (12 QUESTIONS DIRECTLY FROM SYLLABUS)      */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "quiz" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                    <Award size={14} />
                    <span>Part J — Module 4 Knowledge Check & Verification</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                    University-Informed Knowledge Check (12 Questions)
                  </h2>
                </div>

                {quizSubmitted && (
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-600">Your Score:</span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-black ${
                        calculateScore() >= 10
                          ? "bg-emerald-600 text-white"
                          : calculateScore() >= 8
                          ? "bg-amber-600 text-white"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {calculateScore()} / 12 ({((calculateScore() / 12) * 100).toFixed(0)}%)
                    </span>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {quizQuestions.map((q) => {
                  const userAnswer = quizAnswers[q.id];

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        quizSubmitted
                          ? userAnswer === q.correctIndex
                            ? "border-emerald-200 bg-emerald-50/40"
                            : "border-red-200 bg-red-50/40"
                          : "border-stone-200 bg-stone-50/60"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xs sm:text-sm font-bold text-[#18181b] leading-snug">
                          {q.id}. {q.question}
                        </h3>
                        {quizSubmitted && (
                          <span className="shrink-0 mt-0.5">
                            {userAnswer === q.correctIndex ? (
                              <CheckCircle2 size={16} className="text-emerald-600" />
                            ) : (
                              <XCircle size={16} className="text-red-600" />
                            )}
                          </span>
                        )}
                      </div>

                      {/* Options */}
                      <div className="mt-3 space-y-2">
                        {q.options.map((opt, optIdx) => {
                          let optClasses =
                            "w-full text-left p-3 rounded-xl border text-xs font-medium transition cursor-pointer flex items-center justify-between ";

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              optClasses += "border-emerald-500 bg-emerald-100 text-emerald-950 font-bold";
                            } else if (userAnswer === optIdx) {
                              optClasses += "border-red-500 bg-red-100 text-red-950 line-through";
                            } else {
                              optClasses += "border-stone-200 bg-white/70 text-stone-500";
                            }
                          } else {
                            if (userAnswer === optIdx) {
                              optClasses += "border-[#ea580c] bg-orange-100 text-[#ea580c] font-bold";
                            } else {
                              optClasses += "border-stone-200 bg-white hover:border-stone-300 text-stone-700";
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              disabled={quizSubmitted}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              className={optClasses}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && optIdx === q.correctIndex && (
                                <span className="text-[10px] font-bold text-emerald-700 uppercase ml-2">Correct</span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation */}
                      {quizSubmitted && (
                        <div className="mt-3 pt-3 border-t border-stone-200/80 text-xs text-stone-700 leading-relaxed bg-white/60 p-3 rounded-xl">
                          <strong className="text-stone-900">Academic Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Submission & Retake Buttons */}
              <div className="mt-6 flex items-center justify-between border-t border-stone-200 pt-4">
                <div className="text-xs text-stone-500">
                  {Object.keys(quizAnswers).length} of {quizQuestions.length} answered
                </div>

                {!quizSubmitted ? (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    disabled={Object.keys(quizAnswers).length === 0}
                    className="px-6 py-2.5 rounded-xl bg-[#ea580c] text-white font-bold text-xs hover:bg-[#c2410c] transition cursor-pointer disabled:opacity-50"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setQuizSubmitted(false);
                      setQuizAnswers({});
                    }}
                    className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-stone-300 bg-white text-xs font-bold text-stone-700 hover:border-orange-400 hover:text-[#ea580c] transition cursor-pointer"
                  >
                    <RotateCcw size={14} />
                    <span>Retake Quiz</span>
                  </button>
                )}
              </div>
            </section>
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 5: CAPSTONE PROJECT & GRADING RUBRIC (PART K)                   */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "capstone" && (
          <div className="space-y-8">
            <section className="rounded-3xl border border-[#e7e3da] bg-white/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ea580c] mb-1">
                <ListChecks size={14} />
                <span>Part K — Final Capstone Project & Evaluation Rubric</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#18181b]">
                Capstone: Threat-Model and Manage Risk for LearnSphere
              </h2>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                Students execute a full, end-to-end security assessment for the LearnSphere application. The deliverable represents the complete reasoning process—from understanding assets and mapping DFD trust boundaries to defining verifiable security requirements and maintaining an evidence-backed risk register.
              </p>

              {/* The 10 Deliverables Checklist */}
              <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50/70 p-5">
                <h3 className="text-sm font-bold text-[#18181b] mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#ea580c]" />
                  <span>The Ten Required Project Deliverables:</span>
                </h3>
                <div className="grid gap-2 sm:grid-cols-2 text-xs text-stone-700">
                  <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono">1.</span>
                    <span>Executive Summary explaining business context, principal risks & priorities.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono">2.</span>
                    <span>Asset Inventory with CIA properties, data classification, and owner mapping.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono">3.</span>
                    <span>Architecture DFD clearly identifying components, stores, and trust boundaries.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono">4.</span>
                    <span>Threat Model detailing at least 10 plausible STRIDE scenarios & abuse cases.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono">5.</span>
                    <span>Attack-Surface Inventory cataloging exposed interfaces, routes, and cloud ports.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono">6.</span>
                    <span>Evidence-Based Risk Register prioritizing at least 8 scenarios via 5×5 matrix.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono">7.</span>
                    <span>Risk Treatment Plan justifying Mitigate, Avoid, Transfer, or Accept decisions.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono">8.</span>
                    <span>Verifiable Security Requirements with explicit testing procedures.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono">9.</span>
                    <span>Residual-Risk Statement documenting uncertainty, assumptions, and owners.</span>
                  </div>
                  <div className="flex items-start gap-2 bg-white p-2.5 rounded-xl border border-stone-200">
                    <span className="font-bold text-[#ea580c] font-mono">10.</span>
                    <span>Executive-Ready Final Security Assessment Report for developers and CISOs.</span>
                  </div>
                </div>
              </div>

              {/* Grading Rubric Table */}
              <div className="mt-8">
                <h3 className="text-sm font-bold text-[#18181b] mb-3">
                  Formal Academic Grading Rubric (100% Total)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-stone-200 bg-stone-100/70 text-stone-700 font-bold">
                        <th className="p-3">Assessment Criterion</th>
                        <th className="p-3 text-center">Weight</th>
                        <th className="p-3">Distinction Standard (85–100%)</th>
                        <th className="p-3">Pass Standard (50–69%)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200">
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Security Properties & Asset Analysis</td>
                        <td className="p-3 text-center font-mono font-bold text-[#ea580c]">10%</td>
                        <td className="p-3 text-stone-600">Flawless identification of 10+ assets with rigorous CIA, accountability, and privacy requirements.</td>
                        <td className="p-3 text-stone-500">Identifies basic databases and passwords with generic classification.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Architecture & Trust-Boundary Diagram</td>
                        <td className="p-3 text-center font-mono font-bold text-[#ea580c]">15%</td>
                        <td className="p-3 text-stone-600">Comprehensive DFD with clearly labeled entities, stores, flows, and explicit trust boundaries.</td>
                        <td className="p-3 text-stone-500">Diagram depicts components but lacks clear trust boundary distinctions.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Threat Scenarios & STRIDE Analysis</td>
                        <td className="p-3 text-center font-mono font-bold text-[#ea580c]">20%</td>
                        <td className="p-3 text-stone-600">10+ plausible, highly detailed STRIDE threat scenarios covering all categories with abuse cases.</td>
                        <td className="p-3 text-stone-500">Lists generic threat buzzwords without connecting them to specific architectural elements.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Attack-Surface Inventory</td>
                        <td className="p-3 text-center font-mono font-bold text-[#ea580c]">10%</td>
                        <td className="p-3 text-stone-600">Complete multi-domain inventory (API, network, identity, cloud, supply chain) with reduction steps.</td>
                        <td className="p-3 text-stone-500">Lists URLs only without analyzing permissions or dependencies.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Risk Scoring & Prioritization</td>
                        <td className="p-3 text-center font-mono font-bold text-[#ea580c]">15%</td>
                        <td className="p-3 text-stone-600">Likelihood and impact ratings quantitatively and qualitatively justified using 5×5 matrix.</td>
                        <td className="p-3 text-stone-500">Scores assigned subjectively without clear separation between impact and exploitability.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Controls & Verification Requirements</td>
                        <td className="p-3 text-center font-mono font-bold text-[#ea580c]">15%</td>
                        <td className="p-3 text-stone-600">Concrete, testable engineering specifications and safe verification methods for every high risk.</td>
                        <td className="p-3 text-stone-500">Suggests generic fixes ("use encryption") without implementation details.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Residual-Risk Decisions</td>
                        <td className="p-3 text-center font-mono font-bold text-[#ea580c]">5%</td>
                        <td className="p-3 text-stone-600">Explicit documentation of uncertainty, assumptions, and formal owner sign-off recommendations.</td>
                        <td className="p-3 text-stone-500">Claims residual risk is zero or omits owner accountability.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#18181b]">Documentation & Communication</td>
                        <td className="p-3 text-center font-mono font-bold text-[#ea580c]">10%</td>
                        <td className="p-3 text-stone-600">Executive-ready formatting, clear visual hierarchy, and actionable engineer remediation guidance.</td>
                        <td className="p-3 text-stone-500">Informal write-up lacking executive summary or actionable roadmap.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Completion Standard */}
              <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-100/70 p-4 text-xs text-stone-700 leading-relaxed">
                <strong>Completion Standard:</strong> A student must demonstrate the ability to connect a specific threat scenario to a valuable asset, a defensible risk rating, a justified treatment strategy, and a testable security requirement. Simply listing vulnerability names or automated scanning tools without architectural context will not earn a passing practical score.
              </div>
            </section>
          </div>
        )}

        {/* Next Module Navigation Footer */}
        <div className="mt-12 flex items-center justify-between rounded-3xl border border-[#e7e3da] bg-white/80 p-6 backdrop-blur-md">
          <button
            onClick={() => navigate("/learning/cybersecurity/systems")}
            className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 hover:border-orange-400 transition cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Previous: Module 3</span>
          </button>

          <div className="text-right">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
              Up Next · Module 5
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-[#18181b]">
              Ethical Hacking Methodology, Scope Definition & Rules of Engagement
            </h4>
          </div>

          <button
            onClick={() => navigate("/learning/cybersecurity/methodology")}
            className="flex items-center gap-2 rounded-xl bg-[#18181b] px-4 py-2.5 text-xs font-bold text-white hover:bg-stone-800 transition cursor-pointer"
          >
            <span>Proceed to Module 5</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
