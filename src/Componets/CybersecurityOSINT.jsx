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
  Key,
  Database,
  Search,
  AlertCircle,
  FileSpreadsheet,
  TerminalSquare,
  Binary,
  FolderGit2,
  Filter,
  ShieldAlert,
  Target,
  Crosshair,
  UserCheck,
  UserX,
  FileWarning,
  Flame,
  CheckSquare,
  Square,
  PlusCircle,
  Trash2,
  Download,
  Fingerprint,
  MapPin,
  Camera,
  FileSearch,
  Layers3,
  Link2,
} from "lucide-react";
import LearningRo from "./LearningRo";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

/* -------------------------------------------------------------------------- */
/* PREPSPACES CYBERSECURITY MASTER COURSE: MODULE 6                            */
/* Open-Source Intelligence (OSINT) and Passive Reconnaissance                */
/* Informed by OWASP WSTG, OWASP OOVS, NIST SP 800-150, and ICANN RDAP        */
/* -------------------------------------------------------------------------- */

export default function CybersecurityOSINT() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(1);
  const [showAiTutor, setShowAiTutor] = useState(false);
  const [activeTab, setActiveTab] = useState("theory"); // 'theory' | 'dns-ct' | 'dorking' | 'metadata' | 'correlation' | 'quiz'
  const [copiedCodeId, setCopiedCodeId] = useState(null);

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 1: DNS & CERTIFICATE TRANSPARENCY (CT) INSPECTOR     */
  /* -------------------------------------------------------------------------- */
  const [targetDomain, setTargetDomain] = useState("prepspaces.com");
  const [dnsViewMode, setDnsViewMode] = useState("records"); // 'records' | 'ct_logs'

  const sampleDnsRecords = useMemo(() => {
    const d = targetDomain.trim().toLowerCase() || "example.com";
    return [
      {
        type: "A",
        host: d,
        value: "104.21.72.148",
        ttl: "300s",
        notes: "Cloudflare Anycast Proxy IP (Hides Origin Server)",
      },
      {
        type: "A",
        host: d,
        value: "172.67.182.201",
        ttl: "300s",
        notes: "Cloudflare Secondary IPv4 Gateway",
      },
      {
        type: "AAAA",
        host: d,
        value: "2606:4700:3038::ac43:b6c9",
        ttl: "300s",
        notes: "Cloudflare IPv6 Gateway",
      },
      {
        type: "CNAME",
        host: `api.${d}`,
        value: `gateway-prod-us-east.aws.elb.amazonaws.com`,
        ttl: "600s",
        notes: "AWS Elastic Load Balancer (Exposes Cloud Provider Architecture)",
      },
      {
        type: "CNAME",
        host: `learn.${d}`,
        value: `cdn.${d}`,
        ttl: "3600s",
        notes: "Canonical Alias to Content Delivery Network",
      },
      {
        type: "MX",
        host: d,
        value: "10 aspmx.l.google.com",
        ttl: "3600s",
        notes: "Google Workspace Mail Exchange (Priority 10)",
      },
      {
        type: "MX",
        host: d,
        value: "20 alt1.aspmx.l.google.com",
        ttl: "3600s",
        notes: "Google Workspace Backup MX (Priority 20)",
      },
      {
        type: "NS",
        host: d,
        value: "ns1.cloudflare.com",
        ttl: "86400s",
        notes: "Authoritative Cloudflare Primary Nameserver",
      },
      {
        type: "NS",
        host: d,
        value: "ns2.cloudflare.com",
        ttl: "86400s",
        notes: "Authoritative Cloudflare Secondary Nameserver",
      },
      {
        type: "TXT",
        host: d,
        value: `"v=spf1 include:_spf.google.com include:sendgrid.net ~all"`,
        ttl: "3600s",
        notes: "SPF Email Security: Authorizes Google and Sendgrid",
      },
      {
        type: "TXT",
        host: d,
        value: `"google-site-verification=8zK9p_X3qLw9vM2_prepspaces_verified"`,
        ttl: "3600s",
        notes: "Domain Ownership Verification Token for Search Console",
      },
      {
        type: "SOA",
        host: d,
        value: `ns1.cloudflare.com dns.cloudflare.com 2026101501 10000 2400 604800 3600`,
        ttl: "3600s",
        notes: "Start of Authority: Serial 2026101501, Primary Cloudflare NS",
      },
    ];
  }, [targetDomain]);

  const sampleCtLogs = useMemo(() => {
    const d = targetDomain.trim().toLowerCase() || "example.com";
    return [
      {
        id: "CT-8921043",
        subjectName: d,
        sanList: [d, `www.${d}`],
        issuer: "Let's Encrypt Authority X3 (E1)",
        notBefore: "2026-08-01",
        notAfter: "2026-10-30",
        status: "Active",
      },
      {
        id: "CT-8919420",
        subjectName: `api.${d}`,
        sanList: [`api.${d}`, `internal-api.${d}`],
        issuer: "Amazon Trust Services (ACM)",
        notBefore: "2026-05-15",
        notAfter: "2027-06-15",
        status: "Active (Discloses 'internal-api' subdomain!)",
      },
      {
        id: "CT-7821901",
        subjectName: `staging.learn.${d}`,
        sanList: [`staging.learn.${d}`, `test-candidate.${d}`],
        issuer: "Let's Encrypt",
        notBefore: "2026-01-10",
        notAfter: "2026-04-10",
        status: "Expired (Historical Test Subdomain Lead)",
      },
      {
        id: "CT-6549211",
        subjectName: `vpn-legacy.${d}`,
        sanList: [`vpn-legacy.${d}`],
        issuer: "DigiCert Global Root G2",
        notBefore: "2025-02-01",
        notAfter: "2026-02-01",
        status: "Revoked (Decommissioned Infrastructure)",
      },
    ];
  }, [targetDomain]);

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 2: SEARCH ENGINE DORKING STUDIO                      */
  /* -------------------------------------------------------------------------- */
  const [dorkDomain, setDorkDomain] = useState("prepspaces.com");
  const [dorkCategory, setDorkCategory] = useState("configs"); // 'configs' | 'files' | 'admin' | 'directories' | 'git'

  const dorkTemplates = {
    configs: {
      name: "Exposed Configuration & Environment Files",
      operator: `site:${dorkDomain} (filetype:env OR filetype:conf OR filetype:ini OR filetype:yaml) -github`,
      purpose: "Locates accidentally indexed dotenv credentials, DB strings, or server configs.",
      riskLevel: "Critical",
      simulatedResults: [
        {
          title: `Index of /backup/staging.env`,
          url: `https://test.${dorkDomain}/backup/staging.env`,
          snippet: `DB_HOST=10.0.1.24 DB_USER=app_svc DB_PASS=AKIA... JWT_SECRET=super_secret_dev_key...`,
          tag: "Leaked Secrets Lead",
        },
        {
          title: `Docker Compose Production Template - app.yaml`,
          url: `https://docs.${dorkDomain}/assets/docker-compose.yaml`,
          snippet: `version: '3.8' services: web: image: internal-registry/app:v2.1 ports: - "8080:80"`,
          tag: "Internal Architecture Disclosure",
        },
      ],
    },
    files: {
      name: "Public Documents & Sensitive PDFs",
      operator: `site:${dorkDomain} filetype:pdf (confidential OR internal OR proprietary OR salary)`,
      purpose: "Finds internal company manuals, customer agreements, and un-sanitized presentations.",
      riskLevel: "High",
      simulatedResults: [
        {
          title: `Candidate Interview Evaluation Criteria - Confidential.pdf`,
          url: `https://recruiter.${dorkDomain}/assets/eval_manual_2026.pdf`,
          snippet: `Prepspaces Internal Grading Rubric for System Design & Coding... Author: HR Admin System...`,
          tag: "Document Metadata Lead",
        },
        {
          title: `Quarterly Infrastructure Security Roadmap.pdf`,
          url: `https://${dorkDomain}/wp-content/uploads/sec_roadmap.pdf`,
          snippet: `Migration to Zero-Trust architecture in Q4... Legacy Bastion IP 192.168.4.15...`,
          tag: "Internal Topology Lead",
        },
      ],
    },
    admin: {
      name: "Administrative Portals & Login Interfaces",
      operator: `site:${dorkDomain} inurl:(admin OR login OR portal OR dashboard OR cpanel)`,
      purpose: "Uncovers public access portals that should be restricted to VPNs or Zero-Trust gateways.",
      riskLevel: "Moderate",
      simulatedResults: [
        {
          title: `Prepspaces Staff Portal Login`,
          url: `https://admin.${dorkDomain}/auth/login`,
          snippet: `Administrative single sign-on interface. Access restricted to authorized personnel.`,
          tag: "Authentication Endpoint Lead",
        },
        {
          title: `Kibana Logstash Analytics Dashboard`,
          url: `https://logs.${dorkDomain}:5601/app/kibana`,
          snippet: `Loading Elastic Stack telemetry interface...`,
          tag: "Exposed Monitoring Portal Lead",
        },
      ],
    },
    directories: {
      name: "Directory Traversal & Index Listings",
      operator: `site:${dorkDomain} intitle:"index of /" ("parent directory" OR "size" OR "last modified")`,
      purpose: "Locates web servers with directory indexing enabled, exposing internal file structures.",
      riskLevel: "High",
      simulatedResults: [
        {
          title: `Index of /uploads/resumes`,
          url: `https://static.${dorkDomain}/uploads/resumes/`,
          snippet: `[DIR] Parent Directory - [PDF] john_doe_resume.pdf 124KB [PDF] jane_smith_cv.pdf 89KB...`,
          tag: "Candidate PII Exposure",
        },
      ],
    },
    git: {
      name: "Exposed Source Code & .git Directories",
      operator: `site:${dorkDomain} inurl:".git" ("HEAD" OR "config" OR "COMMIT_EDITMSG")`,
      purpose: "Finds web roots where the .git folder was accidentally published to production.",
      riskLevel: "Critical",
      simulatedResults: [
        {
          title: `Index of /.git/config`,
          url: `https://app.${dorkDomain}/.git/config`,
          snippet: `[core] repositoryformatversion = 0 filemode = true [remote "origin"] url = git@github.com:...`,
          tag: "Complete Repo Compromise Lead",
        },
      ],
    },
  };

  const currentDork = dorkTemplates[dorkCategory];

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 3: DOCUMENT METADATA & EXIF ANALYZER                 */
  /* -------------------------------------------------------------------------- */
  const sampleFiles = [
    {
      id: "interview_rubric",
      filename: "Candidate_Grading_Rubric_v4.pdf",
      type: "PDF Document",
      size: "482 KB",
      metadata: {
        Author: "Sarah Jenkins (Lead Recruiter)",
        CreatorTool: "Microsoft Word 2021 (Build 16.0.14326)",
        Producer: "macOS Version 14.5 (Build 23F79) Quartz PDFContext",
        CreatedDate: "2026-03-14 09:24:12 EST",
        ModifiedDate: "2026-03-15 14:02:50 EST",
        InternalPath: "/Users/sjenkins/Documents/HR/Q1_Hiring/Rubrics_Final.docx",
        EmbeddedPrinters: "HP_OfficeJet_Pro_Floor3_East",
      },
      opsecRisk: "Discloses internal employee identity, operating system version, and office network printer path.",
    },
    {
      id: "server_photo",
      filename: "DC_Rack_Server_Issue.jpg",
      type: "JPEG Image",
      size: "2.4 MB",
      metadata: {
        CameraMake: "Apple",
        CameraModel: "iPhone 15 Pro",
        Software: "iOS 17.5.1",
        DateTimeOriginal: "2026-07-22 16:45:01 UTC",
        GPSCoordinates: "37°46'29.8\"N 122°24'01.2\"W (San Francisco, CA)",
        Altitude: "24.5 meters",
        AssetTagInFrame: "SVR-RACK-04-BAY-12 (Asset #90124)",
      },
      opsecRisk: "Exposes exact physical GPS latitude/longitude of the corporate data center and internal server asset tags.",
    },
    {
      id: "cloud_arch",
      filename: "Enterprise_Cloud_Topology.docx",
      type: "Word Document",
      size: "1.1 MB",
      metadata: {
        Author: "devops_automation_svc",
        LastModifiedBy: "Alex Chen (SRE Architect)",
        Company: "PrepSpaces Global Inc.",
        Template: "Normal.dotm",
        RevisionNumber: "14",
        TotalEditingTime: "342 minutes",
        HyperlinksInside: "http://10.100.4.5:9090 (Internal Prometheus metrics)",
      },
      opsecRisk: "Discloses internal 10.100.4.5 RFC 1918 private IP scheme and active SRE engineer credentials.",
    },
  ];

  const [selectedFileId, setSelectedFileId] = useState("interview_rubric");
  const selectedFile = useMemo(
    () => sampleFiles.find((f) => f.id === selectedFileId) || sampleFiles[0],
    [selectedFileId]
  );

  /* -------------------------------------------------------------------------- */
  /* INTERACTIVE SIMULATOR 4: MULTI-SOURCE INTELLIGENCE CORRELATION MATRIX      */
  /* -------------------------------------------------------------------------- */
  const [intelLeads, setIntelLeads] = useState([
    {
      id: "LEAD-01",
      lead: "Certificate Transparency shows SAN for 'staging-api.prepspaces.com'",
      source: "crt.sh public CT log",
      classification: "Observed Fact", // 'Observed Fact' | 'Inference' | 'Hypothesis' | 'Confirmed Finding'
      authority: "High", // High | Medium | Low
      corroboration: "Yes (DNS CNAME points to AWS ELB)",
      confidence: "High",
      securityImplication: "Potential staging environment with weaker auth or test credentials",
    },
    {
      id: "LEAD-02",
      lead: "DNS TXT record contains 'atlassian-domain-verification=f920194'",
      source: "Public DNS TXT query",
      classification: "Observed Fact",
      authority: "High",
      corroboration: "Official company Jira portal linked in docs",
      confidence: "High",
      securityImplication: "Confirms third-party SaaS dependency on Atlassian cloud products",
    },
    {
      id: "LEAD-03",
      lead: "Public GitHub repository contains commit with 'AWS_KEY_ID_REDACTED'",
      source: "Public GitHub commits",
      classification: "Hypothesis",
      authority: "Medium",
      corroboration: "Unverified without contacting owner (do NOT test live)",
      confidence: "Medium",
      securityImplication: "Suspected leaked credential; requires immediate responsible disclosure",
    },
    {
      id: "LEAD-04",
      lead: "LinkedIn post from former intern describes internal 'Kubernetes 1.28 cluster on GCP'",
      source: "Social media post",
      classification: "Inference",
      authority: "Low",
      corroboration: "No independent cluster evidence found yet",
      confidence: "Low",
      securityImplication: "Useful lead on container orchestration; requires technological corroboration",
    },
  ]);

  const updateClassification = (id, newClass) => {
    setIntelLeads((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          let computedConfidence = "Medium";
          if (newClass === "Observed Fact" && item.authority === "High") computedConfidence = "High";
          if (newClass === "Hypothesis" || item.authority === "Low") computedConfidence = "Low";
          if (newClass === "Confirmed Finding") computedConfidence = "High";
          return { ...item, classification: newClass, confidence: computedConfidence };
        }
        return item;
      })
    );
  };

  /* -------------------------------------------------------------------------- */
  /* KNOWLEDGE ASSESSMENT QUIZ (8 QUESTIONS FROM SPECIFICATION)                 */
  /* -------------------------------------------------------------------------- */
  const quizQuestions = [
    {
      id: 1,
      question: "What distinguishes passive reconnaissance from active reconnaissance?",
      options: [
        "Passive reconnaissance always produces more data",
        "Passive reconnaissance avoids directly probing the target's systems",
        "Active reconnaissance is always illegal",
        "Passive reconnaissance requires administrator access",
      ],
      correct: 1,
      explanation:
        "Passive reconnaissance collects intelligence from publicly accessible and third-party sources (e.g., DNS, CT logs, search engines) without transmitting packets directly to the target's servers.",
    },
    {
      id: 2,
      question: "What is the primary purpose of Certificate Transparency?",
      options: [
        "Store website passwords",
        "Audit the issuance of digital certificates through public logs",
        "Guarantee that a domain is secure",
        "Replace DNS records",
      ],
      correct: 1,
      explanation:
        "Certificate Transparency (CT) is a publicly auditable framework of append-only logs that records TLS certificate issuances, helping detect rogue, misissued, or unauthorized certificates.",
    },
    {
      id: 3,
      question: "Which DNS record identifies mail-exchange hosts?",
      options: ["AAAA", "CNAME", "MX", "SOA"],
      correct: 2,
      explanation:
        "MX (Mail Exchanger) records specify the mail servers responsible for accepting incoming email messages on behalf of a domain name.",
    },
    {
      id: 4,
      question:
        "A public certificate record lists a hostname that no longer resolves. What is the best conclusion?",
      options: [
        "The hostname is definitely vulnerable",
        "The hostname must be scanned immediately",
        "The record is a lead that may be historical and needs context",
        "The entire parent domain is compromised",
      ],
      correct: 2,
      explanation:
        "Certificate Transparency logs are permanent append-only records. Hostnames in CT logs may represent expired, decommissioned, or transient services that require corroboration before drawing conclusions.",
    },
    {
      id: 5,
      question: "What does robots.txt do?",
      options: [
        "Enforces authentication",
        "Encrypts website content",
        "Communicates crawler preferences but does not enforce access control",
        "Proves that all unlisted paths are private",
      ],
      correct: 2,
      explanation:
        "robots.txt is an advisory protocol instructing search engine spiders which URL paths should not be indexed. It does not provide access control or encryption, and attackers can read it to find sensitive paths.",
    },
    {
      id: 6,
      question:
        "What should an analyst do after finding a suspected API key in a public repository?",
      options: [
        "Use it to test the connected service",
        "Publish it in the report",
        "Treat it as sensitive, avoid using it, and notify the authorized owner",
        "Send it to unrelated researchers",
      ],
      correct: 2,
      explanation:
        "Ethical security professionals treat suspected credentials with strict confidentiality: never test or authenticate with discovered secrets without explicit authorization, and report the finding through established channels.",
    },
    {
      id: 7,
      question: "Why is corroboration important in OSINT?",
      options: [
        "It makes every inference certain",
        "It helps distinguish reliable conclusions from stale, duplicated, or misleading evidence",
        "It removes the need to record sources",
        "It proves that a service has no vulnerabilities",
      ],
      correct: 1,
      explanation:
        "Corroboration validates intelligence across independent sources, filtering out stale cached records, false positives, typo-squatted domains, and outdated documentation.",
    },
    {
      id: 8,
      question: "Which statement best describes a professional OSINT report?",
      options: [
        "It includes every personal detail discovered",
        "It reports hypotheses as facts",
        "It documents scope, sources, observations, confidence, limitations, and recommendations",
        "It omits timestamps to keep the report short",
      ],
      correct: 2,
      explanation:
        "A rigorous intelligence report clearly documents the authorized scope, source URLs, collection timestamps, facts vs inferences, confidence ratings, and defensible defensive recommendations.",
    },
  ];

  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);

  const handleSelectQuizAnswer = (qId, optionIdx) => {
    if (submittedQuiz) return;
    setSelectedQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const quizScore = useMemo(() => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (selectedQuizAnswers[q.id] === q.correct) score++;
    });
    return score;
  }, [selectedQuizAnswers]);

  /* -------------------------------------------------------------------------- */
  /* TOPICS NAVIGATION DEFINITIONS                                              */
  /* -------------------------------------------------------------------------- */
  const topics = [
    { id: 1, title: "6.1 Module Overview & OSINT Foundations", badge: "Lifecycle & Scope" },
    { id: 2, title: "6.2 OSINT vs. Passive vs. Active Recon", badge: "Recon Taxonomy" },
    { id: 3, title: "6.3 Ethics, Privacy & Collection Boundaries", badge: "Data Minimization" },
    { id: 4, title: "6.4 The OSINT Collection Framework", badge: "Intel Requirements" },
    { id: 5, title: "6.5 Domain Intelligence, WHOIS & RDAP", badge: "Registration" },
    { id: 6, title: "6.6 DNS Intelligence & Certificate Logs", badge: "DNS & crt.sh" },
    { id: 7, title: "6.7 Search Engine Dorks & File Metadata", badge: "Dorks & ExifTool" },
    { id: 8, title: "6.8 Public Code Repositories & Leak Triage", badge: "GitHub & Secrets" },
    { id: 9, title: "6.9 Passive OSINT Tools & Verification", badge: "Amass & Harvester" },
    { id: 10, title: "6.10 Intelligence Correlation, Lab & Quiz", badge: "Report & Quiz" },
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-stone-900 antialiased selection:bg-orange-500 selection:text-white">
      {/* Top Header & Navigation */}
      <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate("/learning/cybersecurity")}
                className="flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors p-2 rounded-lg hover:bg-stone-100"
                title="Back to Cybersecurity Course Overview"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Cybersecurity Track</span>
              </button>
              <div className="h-5 w-px bg-stone-300 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold font-mono tracking-wide uppercase bg-orange-100 text-orange-800 border border-orange-200">
                  Module 6
                </span>
                <h1 className="text-sm font-bold text-stone-900 truncate max-w-[280px] sm:max-w-md lg:max-w-lg">
                  OSINT & Passive Reconnaissance
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
            </div>
          </div>
        </div>

        {/* Global Module Navigation Bar */}
        <ModuleNav
          track="cybersecurity"
          currentModuleId="osint-reconnaissance"
          showAiTutor={showAiTutor}
          onAiTutorToggle={() => setShowAiTutor(!showAiTutor)}
          aiTutorLabel="Nova AI Tutor"
        />
      </header>

      {/* Main Workspace Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Module Sub-Header Banner */}
        <div className="mb-6 bg-gradient-to-r from-stone-900 via-neutral-900 to-orange-950 rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-stone-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-orange-500/20 text-orange-300 border border-orange-500/30">
                  OWASP WSTG & OOVS Standards
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-stone-800 text-stone-300 border border-stone-700">
                  NIST SP 800-150 & ICANN RDAP
                </span>
                <span className="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Foundational to Intermediate
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Open-Source Intelligence (OSINT) & Passive Reconnaissance
              </h2>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Transform publicly available data into verified, evidence-backed security
                intelligence. Map external infrastructure, analyze DNS and Certificate Transparency
                (CT) logs, leverage advanced search operators, extract hidden document metadata, and
                correlate multi-source evidence without probing the target.
              </p>
            </div>

            {/* Quick Action Tabs */}
            <div className="flex flex-wrap md:flex-col gap-2 shrink-0">
              <button
                onClick={() => setActiveTab("theory")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "theory"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span>Curriculum Theory</span>
              </button>
              <button
                onClick={() => setActiveTab("dns-ct")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "dns-ct"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <Network className="w-4 h-4 text-orange-400" />
                <span>DNS & CT Inspector</span>
              </button>
              <button
                onClick={() => setActiveTab("dorking")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "dorking"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <Search className="w-4 h-4 text-orange-400" />
                <span>Search Dorking Studio</span>
              </button>
              <button
                onClick={() => setActiveTab("metadata")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "metadata"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <Fingerprint className="w-4 h-4 text-orange-400" />
                <span>Exif & Metadata Analyzer</span>
              </button>
              <button
                onClick={() => setActiveTab("correlation")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "correlation"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <Layers3 className="w-4 h-4 text-orange-400" />
                <span>Evidence Correlation</span>
              </button>
              <button
                onClick={() => setActiveTab("quiz")}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "quiz"
                    ? "bg-white text-stone-900 shadow-md"
                    : "bg-white/10 text-stone-200 hover:bg-white/15"
                }`}
              >
                <Award className="w-4 h-4 text-orange-400" />
                <span>Knowledge Quiz (8)</span>
              </button>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------- */}
        {/* TAB 1: CURRICULUM THEORY & CONTENT                                   */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "theory" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Sidebar: Topics Navigation */}
            <div className="lg:col-span-4 xl:col-span-3 space-y-2">
              <div className="sticky top-24 bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-stone-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono">
                    Module 6 Sections
                  </span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-stone-100 text-stone-700">
                    {topics.length} Units
                  </span>
                </div>
                <div className="space-y-1">
                  {topics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTopic(t.id)}
                      className={`w-full text-left p-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between ${
                        (selectedTopic || 1) === t.id
                          ? "bg-orange-50 text-orange-950 font-bold border border-orange-200 shadow-xs"
                          : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="truncate pr-2">{t.title}</span>
                      <span className="text-[10px] font-mono shrink-0 px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-600 border border-stone-200">
                        {t.badge}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-stone-100">
                  <div className="rounded-xl bg-orange-50/80 p-3 border border-orange-200/80">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-orange-900 mb-1">
                      <Target className="w-3.5 h-3.5 text-orange-600" />
                      <span>Analyst Law</span>
                    </div>
                    <p className="text-[11px] text-orange-800 leading-relaxed">
                      "Never confuse collection with intelligence. Finding an asset is mere data;
                      explaining its provenance, freshness, and security relevance is intelligence."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content Area: Detailed Section Material */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-8">
              {/* TOPIC 1 */}
              {(selectedTopic === 1 || !selectedTopic || selectedTopic === 0) && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 6.1 & 6.2
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">OSINT Fundamentals</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Open-Source Intelligence (OSINT) & The Intelligence Lifecycle
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Open-Source Intelligence (OSINT) is the intelligence discipline that collects,
                      evaluates, analyzes, and communicates information from publicly accessible or
                      lawfully available sources to satisfy a defined security requirement. It is not
                      haphazard googling; it follows a rigorous 6-phase analytical lifecycle:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-xs font-mono font-bold text-orange-600">Phase 1</span>
                        <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Planning & Direction</h4>
                        <p className="text-[11px] text-stone-600">
                          Define research questions, legal boundaries, authorized scopes, and data minimization limits.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-xs font-mono font-bold text-orange-600">Phase 2</span>
                        <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Lawful Collection</h4>
                        <p className="text-[11px] text-stone-600">
                          Gather data from public DNS records, Certificate Transparency, search engines, and repositories.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-xs font-mono font-bold text-orange-600">Phase 3</span>
                        <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Processing & Normalization</h4>
                        <p className="text-[11px] text-stone-600">
                          Format, deduplicate, filter false positives, and structure raw entries into machine-readable datasets.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-xs font-mono font-bold text-orange-600">Phase 4</span>
                        <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Analysis & Correlation</h4>
                        <p className="text-[11px] text-stone-600">
                          Cross-reference findings across independent sources; separate observed facts from inferences.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-xs font-mono font-bold text-orange-600">Phase 5</span>
                        <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Dissemination & Reporting</h4>
                        <p className="text-[11px] text-stone-600">
                          Communicate verified findings with confidence ratings, timestamps, and actionable remediation.
                        </p>
                      </div>

                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50">
                        <span className="text-xs font-mono font-bold text-orange-600">Phase 6</span>
                        <h4 className="text-sm font-bold text-stone-900 mt-1 mb-1">Feedback & Review</h4>
                        <p className="text-[11px] text-stone-600">
                          Re-evaluate assumptions when infrastructure updates or asset owners provide operational context.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 2 */}
              {selectedTopic === 2 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 6.2.2
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Reconnaissance Taxonomy</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      OSINT vs. Passive vs. Active Reconnaissance
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Reconnaissance methods differ fundamentally in their operational touch with target
                      systems and legal constraints:
                    </p>

                    <div className="overflow-x-auto mb-6">
                      <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-sans">
                        <thead className="bg-stone-100 text-stone-800 font-mono text-[11px]">
                          <tr>
                            <th className="p-3 border-b border-stone-200">Approach</th>
                            <th className="p-3 border-b border-stone-200">Interaction Level</th>
                            <th className="p-3 border-b border-stone-200">Concrete Example</th>
                            <th className="p-3 border-b border-stone-200">Legal / Operational Note</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900 font-mono text-orange-800">
                              OSINT
                            </td>
                            <td className="p-3 text-stone-600">Public & Lawful Sources</td>
                            <td className="p-3 text-stone-700">
                              Reviewing published architectural whitepapers, SEC filings, or blog posts.
                            </td>
                            <td className="p-3 text-stone-500">
                              Always lawful, subject to copyright and privacy regulations.
                            </td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900 font-mono text-orange-800">
                              Passive Recon
                            </td>
                            <td className="p-3 text-stone-600">Zero Direct Probing</td>
                            <td className="p-3 text-stone-700">
                              Querying third-party Certificate Transparency logs or public DNS resolvers.
                            </td>
                            <td className="p-3 text-stone-500">
                              Target server receives zero packets; no intrusion alarms triggered.
                            </td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900 font-mono text-orange-800">
                              Active Recon
                            </td>
                            <td className="p-3 text-stone-600">Direct Packet Transmission</td>
                            <td className="p-3 text-stone-700">
                              Nmap SYN port scans, HTTP banner grabbing, or directory fuzzing.
                            </td>
                            <td className="p-3 text-stone-500">
                              Requires formal written authorization (Rules of Engagement).
                            </td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900 font-mono text-orange-800">
                              Vulnerability Assessment
                            </td>
                            <td className="p-3 text-stone-600">Automated Weakness Probing</td>
                            <td className="p-3 text-stone-700">
                              Running authenticated or unauthenticated vulnerability scanners (Nessus/ZAP).
                            </td>
                            <td className="p-3 text-stone-500">
                              Identifies known CVEs; does not validate full exploitation impact.
                            </td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-3 font-bold text-stone-900 font-mono text-orange-800">
                              Penetration Testing
                            </td>
                            <td className="p-3 text-stone-600">Controlled Exploitation</td>
                            <td className="p-3 text-stone-700">
                              Chaining a BOLA vulnerability to extract a test database record safely.
                            </td>
                            <td className="p-3 text-stone-500">
                              Strictly bound by contractual Rules of Engagement (RoE).
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 3 */}
              {selectedTopic === 3 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 6.3
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Ethics & Privacy</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      OSINT Ethics, Privacy, and Responsible Secret Handling
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Just because information is publicly indexed does not mean it is free of legal,
                      ethical, or contractual restrictions. Professional OSINT adheres strictly to data
                      minimization and responsible vulnerability disclosure principles.
                    </p>

                    <div className="space-y-4 mb-6">
                      <div className="p-4 rounded-xl border border-red-200 bg-red-50/60">
                        <div className="flex items-center gap-2 font-bold text-red-950 mb-1.5 text-sm">
                          <AlertTriangle className="w-4 h-4 text-red-600" />
                          <span>The Golden Rule of Leaked Credential Discovery</span>
                        </div>
                        <p className="text-xs text-red-900 leading-relaxed mb-2">
                          If passive reconnaissance discovers a suspected password, private key, or API token:
                        </p>
                        <ul className="text-xs text-red-900 space-y-1 list-disc list-inside">
                          <li><strong>DO NOT</strong> attempt to log in or authenticate with the credential.</li>
                          <li><strong>DO NOT</strong> download, scrape, or retain customer databases or private documents.</li>
                          <li><strong>DO NOT</strong> post the secret in public chat channels or unencrypted tickets.</li>
                          <li><strong>REDACT</strong> all secret values in reports (e.g., <code className="bg-white px-1 rounded">AKIA...4Z2Q</code>).</li>
                          <li><strong>NOTIFY</strong> the designated security contact immediately through coordinated disclosure channels.</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                        <h4 className="text-sm font-bold text-stone-900 mb-1">
                          Collection Scoping & Data Minimization
                        </h4>
                        <p className="text-xs text-stone-600 leading-relaxed">
                          Collect only the minimum data necessary to answer the intelligence requirement.
                          Compiling personal dossiers on non-executive employees or archiving private photos
                          violates GDPR, CCPA, and ethical security standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 4 */}
              {selectedTopic === 4 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 6.4
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Collection Framework</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      The Intelligence Collection Framework & Planning Matrix
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      A collection framework prevents reconnaissance from devolving into an unstructured
                      rabbit hole. Every collection activity must map back to a defined Priority
                      Intelligence Requirement (PIR):
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-sans">
                        <thead className="bg-stone-100 text-stone-800 font-mono text-[11px]">
                          <tr>
                            <th className="p-2.5 border-b border-stone-200">Intelligence Requirement</th>
                            <th className="p-2.5 border-b border-stone-200">Source Category</th>
                            <th className="p-2.5 border-b border-stone-200">Expected Actionable Output</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                          <tr className="hover:bg-stone-50">
                            <td className="p-2.5 font-bold text-stone-900">1. Identify Root Domains</td>
                            <td className="p-2.5 text-stone-600">WHOIS / RDAP, Official Portals</td>
                            <td className="p-2.5 text-stone-700">Verified primary & brand domain inventory</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-2.5 font-bold text-stone-900">2. Enumerate Subdomains</td>
                            <td className="p-2.5 text-stone-600">Certificate Transparency, Passive DNS</td>
                            <td className="p-2.5 text-stone-700">Candidate hostname list with observation dates</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-2.5 font-bold text-stone-900">3. Fingerprint Technologies</td>
                            <td className="p-2.5 text-stone-600">Public Docs, Dependency Files, Headers</td>
                            <td className="p-2.5 text-stone-700">Software stack inventory with confidence scores</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-2.5 font-bold text-stone-900">4. Locate Sensitive Files</td>
                            <td className="p-2.5 text-stone-600">Search Engine Dorks, Sitemaps</td>
                            <td className="p-2.5 text-stone-700">Indexed PDF/env/backup files with metadata</td>
                          </tr>
                          <tr className="hover:bg-stone-50">
                            <td className="p-2.5 font-bold text-stone-900">5. Map 3rd-Party SaaS</td>
                            <td className="p-2.5 text-stone-600">DNS MX/TXT records, Privacy Policies</td>
                            <td className="p-2.5 text-stone-700">Supply-chain cloud service dependency map</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 5 */}
              {selectedTopic === 5 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 6.5
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">WHOIS & RDAP</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Domain Intelligence, WHOIS & Modern RDAP
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Domain registration records reveal administrative ownership, historical registrar
                      transfers, and delegated DNS authorities. Modern infrastructure queries use the
                      standardized <strong>Registration Data Access Protocol (RDAP)</strong> over HTTPS REST JSON.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                        <h4 className="text-sm font-bold text-stone-900 mb-2">
                          What Registration Data Tells You
                        </h4>
                        <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
                          <li>Sponsoring Registrar (e.g., Cloudflare, GoDaddy, MarkMonitor).</li>
                          <li>Domain Creation, Expiry, and Updated timestamps.</li>
                          <li>Authoritative Nameservers delegating the zone.</li>
                          <li>Registrant Organization (when not privacy-masked).</li>
                          <li>Domain Status Codes (e.g., <code className="text-orange-700">clientTransferProhibited</code>).</li>
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                        <h4 className="text-sm font-bold text-stone-900 mb-2">
                          What Registration Data CANNOT Prove
                        </h4>
                        <ul className="text-xs text-stone-600 space-y-1.5 list-disc list-inside">
                          <li>Does not prove the current hosting or cloud server IP.</li>
                          <li>Does not reveal when a web application code was deployed.</li>
                          <li>Privacy-protected records do NOT indicate malicious intent.</li>
                          <li>Nameserver IPs may belong to third-party CDNs rather than the target.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 6 */}
              {selectedTopic === 6 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 6.6
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">DNS & Certificate Transparency</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      DNS Records & Certificate Transparency (CT) Logs
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      DNS maps hostnames to network endpoints, while Certificate Transparency (CT)
                      maintains public append-only cryptographic ledgers of every SSL/TLS certificate
                      issued worldwide (RFC 6962). Together, they form the cornerstone of passive asset discovery.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono mb-6">
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                        <strong>A Record:</strong>
                        <div className="text-[11px] text-stone-500 font-sans mt-0.5">Host to IPv4</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                        <strong>AAAA Record:</strong>
                        <div className="text-[11px] text-stone-500 font-sans mt-0.5">Host to IPv6</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                        <strong>CNAME:</strong>
                        <div className="text-[11px] text-stone-500 font-sans mt-0.5">Canonical Alias</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                        <strong>MX Record:</strong>
                        <div className="text-[11px] text-stone-500 font-sans mt-0.5">Mail Servers</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                        <strong>NS Record:</strong>
                        <div className="text-[11px] text-stone-500 font-sans mt-0.5">Zone Authority</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                        <strong>TXT Record:</strong>
                        <div className="text-[11px] text-stone-500 font-sans mt-0.5">SPF, DKIM & Tokens</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                        <strong>SOA Record:</strong>
                        <div className="text-[11px] text-stone-500 font-sans mt-0.5">Zone Parameters</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-stone-200 bg-stone-50">
                        <strong>PTR Record:</strong>
                        <div className="text-[11px] text-stone-500 font-sans mt-0.5">Reverse DNS Lookup</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-orange-200 bg-orange-50/60 mb-6">
                      <div className="flex items-center gap-2 font-bold text-orange-950 mb-1 text-sm">
                        <Shield className="w-4 h-4 text-orange-600" />
                        <span>Why Certificate Transparency (crt.sh) Is Indispensable</span>
                      </div>
                      <p className="text-xs text-orange-900 leading-relaxed">
                        Whenever an engineer requests a certificate for <code className="bg-white px-1 rounded">dev-api.target.com</code>,
                        the Certificate Authority logs it publicly in CT ledgers before issuance.
                        Attackers and defenders can search <a href="https://crt.sh" target="_blank" rel="noreferrer" className="underline font-bold">crt.sh</a> to
                        uncover unlinked shadow IT, staging APIs, and internal hostnames without sending a single packet to the target!
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 7 */}
              {selectedTopic === 7 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 6.7
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Search Dorking & Metadata</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Search Engine Dorks & File Metadata (ExifTool)
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Search engines continuously crawl the web. By utilizing advanced search syntax
                      (Google Dorks), analysts uncover misconfigured files, directory indexes, and
                      unlinked administration interfaces:
                    </p>

                    <div className="space-y-2 mb-6 font-mono text-xs">
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong className="text-orange-700">site:example.com filetype:pdf</strong>
                        <div className="text-[11px] font-sans text-stone-600 mt-0.5">
                          Restricts queries strictly to PDF documents hosted under the target domain.
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong className="text-orange-700">site:example.com inurl:(admin | login | portal)</strong>
                        <div className="text-[11px] font-sans text-stone-600 mt-0.5">
                          Finds administrative authentication entry points.
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong className="text-orange-700">site:example.com intitle:"index of /"</strong>
                        <div className="text-[11px] font-sans text-stone-600 mt-0.5">
                          Locates exposed web server directory listings.
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                        <strong className="text-orange-700">site:example.com "confidential" -careers</strong>
                        <div className="text-[11px] font-sans text-stone-600 mt-0.5">
                          Finds documents containing "confidential" while filtering out routine recruitment postings.
                        </div>
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-stone-900 mb-2">
                      Document Metadata Disclosures (ExifTool)
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed mb-3">
                      Published files often contain hidden EXIF, XMP, and Office metadata that reveals
                      internal usernames, local file paths, software patch levels, and camera GPS coordinates.
                    </p>
                    <div className="p-3 rounded-xl bg-stone-900 text-stone-300 font-mono text-xs overflow-x-auto">
                      <code>$ exiftool sample_report.pdf</code>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 8 */}
              {selectedTopic === 8 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 6.8
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Code Repositories</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Public Code Repositories & Leak Triage
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Public software repositories (GitHub, GitLab, Bitbucket) reveal invaluable
                      intelligence regarding an organization's internal architecture, coding practices,
                      dependency versions, and accidentally committed credentials.
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                        <strong className="text-stone-900 block mb-1">Package Manifests & Lockfiles:</strong>
                        <span className="text-stone-600">
                          <code className="text-orange-800">package-lock.json</code>, <code className="text-orange-800">requirements.txt</code>,
                          and <code className="text-orange-800">go.sum</code> disclose pinned dependency versions, allowing defenders
                          to cross-check for unpatched CVEs.
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                        <strong className="text-stone-900 block mb-1">Reachability Analysis:</strong>
                        <span className="text-stone-600">
                          Finding an outdated dependency in a manifest does not prove exploitability.
                          Analysts must establish whether the vulnerable function is actually called
                          in the deployed production runtime.
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 text-xs">
                        <strong className="text-stone-900 block mb-1">Commit History Triage:</strong>
                        <span className="text-stone-600">
                          Developers frequently commit a secret, realize their mistake, and delete it in a subsequent commit.
                          However, the secret remains permanently visible in git commit history until purged with <code className="text-orange-800">git-filter-repo</code>.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 9 */}
              {selectedTopic === 9 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 6.9 & 6.10
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Tools & Evidence Rigor</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      Passive OSINT Tools, Verification & Confidence Scale
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      Tools accelerate collection, but they never replace analytical judgment.
                      Always verify whether an automated tool is operating in strictly passive mode:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-orange-800">OWASP Amass (Passive Mode):</strong>
                        <p className="text-stone-600 mt-1">
                          Uses external data sources (CT logs, search engines, web archives) to map
                          subdomains without resolving or probing target IP addresses.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-orange-800">theHarvester:</strong>
                        <p className="text-stone-600 mt-1">
                          Scrapes public search engines, PGP key servers, and LinkedIn profiles for
                          employee names, email addresses, and hosts.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-orange-800">DNSDumpster:</strong>
                        <p className="text-stone-600 mt-1">
                          Free domain research tool providing visual mapping of DNS records, MX hosts,
                          and subnet clusters.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                        <strong className="text-orange-800">ExifTool:</strong>
                        <p className="text-stone-600 mt-1">
                          Platform-independent Perl library for parsing, displaying, and stripping
                          EXIF, IPTC, and XMP metadata from files.
                        </p>
                      </div>
                    </div>

                    <h4 className="text-sm font-bold text-stone-900 mb-2">
                      The Analytical Confidence Scale (High / Medium / Low)
                    </h4>
                    <div className="space-y-1.5 text-xs text-stone-700 mb-6">
                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                        <strong className="text-emerald-900">High Confidence:</strong> Supported by
                        multiple independent authoritative sources with verified currency and zero contradictions.
                      </div>
                      <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200">
                        <strong className="text-amber-900">Medium Confidence:</strong> Credible evidence
                        from a single reputable source, but corroboration is pending or partially historical.
                      </div>
                      <div className="p-2.5 rounded-lg bg-red-50 border border-red-200">
                        <strong className="text-red-900">Low Confidence:</strong> Indirect evidence,
                        stale cached data, or unverified claims from third-party forums.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TOPIC 10 */}
              {selectedTopic === 10 && (
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
                        Section 6.11 – 6.14
                      </span>
                      <span className="text-xs text-stone-400">•</span>
                      <span className="text-xs text-stone-500 font-medium">Reporting, Lab & References</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-stone-900 mb-4">
                      OSINT Reporting, 7-Step Lab & Academic Resources
                    </h3>

                    <p className="text-stone-700 text-sm sm:text-base leading-relaxed mb-6">
                      A professional OSINT deliverable enables a technical or executive stakeholder to
                      immediately grasp the finding, its provenance, and necessary remediation:
                    </p>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 mb-6">
                      <h4 className="text-xs font-bold text-stone-900 uppercase font-mono mb-2">
                        Standard OSINT Report Structure
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                        <div className="p-2 bg-white rounded border border-stone-200">1. Executive Summary & Top Risks</div>
                        <div className="p-2 bg-white rounded border border-stone-200">2. Scope, Methodology & Limits</div>
                        <div className="p-2 bg-white rounded border border-stone-200">3. Raw Evidence & Timestamps</div>
                        <div className="p-2 bg-white rounded border border-stone-200">4. Analysis & Confidence Levels</div>
                        <div className="p-2 bg-white rounded border border-stone-200">5. Security Implications</div>
                        <div className="p-2 bg-white rounded border border-stone-200">6. Proportionate Recommendations</div>
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-stone-900 mb-3">
                      Authoritative Academic & Official References
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-6">
                      <a
                        href="https://owasp.org/www-project-web-security-testing-guide/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 hover:border-orange-300 transition-all bg-white hover:bg-orange-50/30 flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-bold text-stone-900 group-hover:text-orange-700">
                            OWASP Web Security Testing Guide (WSTG)
                          </div>
                          <div className="text-stone-500 text-[11px] mt-0.5">
                            Information Gathering & Passive Recon Techniques
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-orange-600 shrink-0" />
                      </a>

                      <a
                        href="https://owasp.org/projects/open-source-intelligence-standard"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 hover:border-orange-300 transition-all bg-white hover:bg-orange-50/30 flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-bold text-stone-900 group-hover:text-orange-700">
                            OWASP Open Source Intelligence Standard (OOVS)
                          </div>
                          <div className="text-stone-500 text-[11px] mt-0.5">
                            Structured verification, testability & auditability
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-orange-600 shrink-0" />
                      </a>

                      <a
                        href="https://csrc.nist.gov/pubs/sp/800/150/final"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 hover:border-orange-300 transition-all bg-white hover:bg-orange-50/30 flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-bold text-stone-900 group-hover:text-orange-700">
                            NIST SP 800-150
                          </div>
                          <div className="text-stone-500 text-[11px] mt-0.5">
                            Guide to Cyber Threat Information Sharing
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-orange-600 shrink-0" />
                      </a>

                      <a
                        href="https://certificate.transparency.dev/"
                        target="_blank"
                        rel="noreferrer"
                        className="p-3.5 rounded-xl border border-stone-200 hover:border-orange-300 transition-all bg-white hover:bg-orange-50/30 flex items-start justify-between group"
                      >
                        <div>
                          <div className="font-bold text-stone-900 group-hover:text-orange-700">
                            Certificate Transparency Community
                          </div>
                          <div className="text-stone-500 text-[11px] mt-0.5">
                            RFC 6962 public append-only certificate logs
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-orange-600 shrink-0" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 2: INTERACTIVE DNS & CT INSPECTOR                                */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "dns-ct" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Network className="w-5 h-5 text-orange-600" />
                    <span>DNS Records & Certificate Transparency (CT) Inspector</span>
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Simulate real-time DNS queries (A, CNAME, MX, TXT) and search Certificate
                    Transparency ledgers to uncover shadow subdomains without touching target servers.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={targetDomain}
                      onChange={(e) => setTargetDomain(e.target.value)}
                      placeholder="e.g. prepspaces.com"
                      className="px-3 py-1.5 text-xs font-mono rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-500 w-48"
                    />
                  </div>
                  <div className="flex rounded-lg border border-stone-200 p-0.5 bg-stone-50 text-xs">
                    <button
                      onClick={() => setDnsViewMode("records")}
                      className={`px-3 py-1 rounded-md font-bold transition-all ${
                        dnsViewMode === "records" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
                      }`}
                    >
                      DNS Records
                    </button>
                    <button
                      onClick={() => setDnsViewMode("ct_logs")}
                      className={`px-3 py-1 rounded-md font-bold transition-all ${
                        dnsViewMode === "ct_logs" ? "bg-white text-stone-900 shadow-xs" : "text-stone-600"
                      }`}
                    >
                      CT Logs (crt.sh)
                    </button>
                  </div>
                </div>
              </div>

              {dnsViewMode === "records" ? (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-stone-600">
                    <span>Target Zone: {targetDomain}</span>
                    <span>{sampleDnsRecords.length} Records Resolved via 1.1.1.1</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border border-stone-200 rounded-xl overflow-hidden font-mono">
                      <thead className="bg-stone-100 text-stone-800 text-[11px]">
                        <tr>
                          <th className="p-2.5 border-b border-stone-200">Record</th>
                          <th className="p-2.5 border-b border-stone-200">Hostname / FQDN</th>
                          <th className="p-2.5 border-b border-stone-200">Resolved Target / Value</th>
                          <th className="p-2.5 border-b border-stone-200">TTL</th>
                          <th className="p-2.5 border-b border-stone-200 font-sans">OSINT Significance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 font-mono">
                        {sampleDnsRecords.map((r, i) => (
                          <tr key={i} className="hover:bg-stone-50">
                            <td className="p-2.5 font-bold text-orange-800">{r.type}</td>
                            <td className="p-2.5 text-stone-900 font-medium">{r.host}</td>
                            <td className="p-2.5 text-stone-700 max-w-xs truncate">{r.value}</td>
                            <td className="p-2.5 text-stone-500">{r.ttl}</td>
                            <td className="p-2.5 font-sans text-stone-600 text-[11px]">{r.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3 text-xs font-mono text-stone-600">
                    <span>Certificate Transparency Log Queries: %{targetDomain}</span>
                    <span>{sampleCtLogs.length} Certificate Records Found</span>
                  </div>

                  <div className="space-y-3">
                    {sampleCtLogs.map((log) => (
                      <div
                        key={log.id}
                        className="p-4 rounded-xl border border-stone-200 bg-stone-50 hover:bg-white transition-all space-y-2"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded">
                              {log.id}
                            </span>
                            <span className="font-mono text-xs font-bold text-stone-900">
                              {log.subjectName}
                            </span>
                          </div>
                          <span className="text-[11px] font-mono text-stone-500">
                            Issuer: {log.issuer}
                          </span>
                        </div>

                        <div className="text-xs text-stone-600 font-mono flex items-center gap-2 flex-wrap">
                          <span className="text-stone-400">SAN List:</span>
                          {log.sanList.map((san, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded bg-white border border-stone-200 text-stone-800"
                            >
                              {san}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 text-[11px]">
                          <span className="text-stone-500">
                            Valid: {log.notBefore} to {log.notAfter}
                          </span>
                          <span className="font-semibold text-orange-800 font-mono">{log.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 3: SEARCH ENGINE DORKING STUDIO                                  */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "dorking" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="pb-6 border-b border-stone-100 mb-6">
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Search className="w-5 h-5 text-orange-600" />
                  <span>Search Engine Intelligence & Dorking Studio</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Construct targeted search dorks using site:, filetype:, inurl:, and exclusion
                  operators to discover exposed credentials, backup archives, and administrative interfaces.
                </p>
              </div>

              {/* Dork Domain & Category Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-6">
                {Object.entries(dorkTemplates).map(([catKey, item]) => (
                  <button
                    key={catKey}
                    onClick={() => setDorkCategory(catKey)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      dorkCategory === catKey
                        ? "border-orange-500 bg-orange-50/70 shadow-xs"
                        : "border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <div className="text-[10px] font-mono uppercase font-bold text-stone-400">
                      Category
                    </div>
                    <div className="text-xs font-bold text-stone-900 truncate mt-0.5">{item.name}</div>
                    <div className="text-[10px] font-mono text-orange-700 font-semibold mt-1">
                      Risk: {item.riskLevel}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Dork Query Box */}
              <div className="bg-stone-900 text-stone-200 p-4 rounded-2xl font-mono text-xs mb-6 space-y-2">
                <div className="flex items-center justify-between text-stone-400 text-[11px]">
                  <span>Generated Search Engine Query String</span>
                  <button
                    onClick={() => copyCode(currentDork.operator, "dork-cmd")}
                    className="flex items-center gap-1 hover:text-white transition-colors"
                  >
                    {copiedCodeId === "dork-cmd" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                    <span>Copy Query</span>
                  </button>
                </div>
                <div className="text-orange-400 text-sm font-bold break-all">{currentDork.operator}</div>
                <div className="text-[11px] text-stone-400 font-sans pt-1">
                  <strong>Analytical Purpose:</strong> {currentDork.purpose}
                </div>
              </div>

              {/* Simulated Search Engine Results */}
              <div>
                <h4 className="text-xs font-bold uppercase text-stone-500 font-mono mb-3">
                  Simulated Search Engine Index Results
                </h4>
                <div className="space-y-3">
                  {currentDork.simulatedResults.map((res, i) => (
                    <div key={i} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-bold text-blue-700 hover:underline cursor-pointer">
                          {res.title}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-semibold">
                          {res.tag}
                        </span>
                      </div>
                      <div className="text-[11px] font-mono text-emerald-700 truncate">{res.url}</div>
                      <p className="text-xs text-stone-600 font-sans pt-1">{res.snippet}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 4: METADATA & EXIF ANALYZER                                      */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "metadata" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="pb-6 border-b border-stone-100 mb-6">
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Fingerprint className="w-5 h-5 text-orange-600" />
                  <span>Document Metadata & ExifTool Forensics Sandbox</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Inspect hidden XMP, EXIF, and Office properties embedded inside publicly published
                  documents to uncover internal network topology, author identities, and software versions.
                </p>
              </div>

              {/* File Selectors */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {sampleFiles.map((file) => (
                  <button
                    key={file.id}
                    onClick={() => setSelectedFileId(file.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedFileId === file.id
                        ? "border-orange-500 bg-orange-50/70 shadow-xs"
                        : "border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                      <span>{file.type}</span>
                      <span>{file.size}</span>
                    </div>
                    <div className="text-xs font-bold text-stone-900 truncate mt-1">
                      {file.filename}
                    </div>
                  </button>
                ))}
              </div>

              {/* Selected File Metadata Extraction Output */}
              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                  <div>
                    <span className="text-xs font-mono font-bold text-orange-800">
                      Extracted File Properties: {selectedFile.filename}
                    </span>
                    <p className="text-[11px] text-stone-500">Analyzed via ExifTool 12.80 Engine</p>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-white border border-stone-200 text-stone-700">
                    {selectedFile.type}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                  {Object.entries(selectedFile.metadata).map(([key, val]) => (
                    <div
                      key={key}
                      className="p-3 rounded-lg bg-white border border-stone-200 flex flex-col justify-between"
                    >
                      <span className="text-[10px] text-stone-400 font-bold uppercase">{key}</span>
                      <span className="text-stone-800 font-semibold mt-1 break-all">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl border border-red-200 bg-red-50/60 mt-4">
                  <div className="flex items-center gap-2 font-bold text-red-950 mb-1 text-xs">
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                    <span>Operational Security (OPSEC) Disclosure Risk:</span>
                  </div>
                  <p className="text-xs text-red-900 leading-relaxed">{selectedFile.opsecRisk}</p>
                  <div className="mt-2 text-[11px] font-mono text-red-800">
                    <strong>Defensive Remediation:</strong> Run{" "}
                    <code className="bg-white px-1.5 py-0.5 rounded border border-red-200">
                      exiftool -all= {selectedFile.filename}
                    </code>{" "}
                    to strip all private metadata before publication.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 5: MULTI-SOURCE INTELLIGENCE CORRELATION                         */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "correlation" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="pb-6 border-b border-stone-100 mb-6">
                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                  <Layers3 className="w-5 h-5 text-orange-600" />
                  <span>Multi-Source Intelligence Correlation & Confidence Matrix</span>
                </h3>
                <p className="text-xs text-stone-500 mt-1">
                  Correlate raw leads across multiple public datasets. Distinguish observed facts
                  from inferences and hypotheses to compute verifiable confidence ratings.
                </p>
              </div>

              <div className="space-y-3">
                {intelLeads.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white transition-all space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-orange-800 bg-orange-100 px-2 py-0.5 rounded">
                          {item.id}
                        </span>
                        <h4 className="text-xs font-bold text-stone-900">{item.lead}</h4>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-stone-500">Source: {item.source}</span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                            item.confidence === "High"
                              ? "bg-emerald-100 text-emerald-800"
                              : item.confidence === "Medium"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          Confidence: {item.confidence}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                        <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block mb-1">
                          Classification Status
                        </span>
                        <select
                          value={item.classification}
                          onChange={(e) => updateClassification(item.id, e.target.value)}
                          className="w-full text-xs p-1.5 rounded border border-stone-300 bg-white font-medium"
                        >
                          <option value="Observed Fact">Observed Fact (Direct Evidence)</option>
                          <option value="Inference">Inference (Logical Deduction)</option>
                          <option value="Hypothesis">Hypothesis (Requires Verification)</option>
                          <option value="Confirmed Finding">Confirmed Finding</option>
                        </select>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                        <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block mb-1">
                          Corroboration
                        </span>
                        <span className="text-stone-700 text-[11px] font-medium">{item.corroboration}</span>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                        <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block mb-1">
                          Security Implication
                        </span>
                        <span className="text-stone-700 text-[11px] font-medium">{item.securityImplication}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* -------------------------------------------------------------------- */}
        {/* TAB 6: KNOWLEDGE ASSESSMENT QUIZ (8 QUESTIONS)                       */}
        {/* -------------------------------------------------------------------- */}
        {activeTab === "quiz" && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between pb-6 border-b border-stone-100 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-stone-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-orange-600" />
                    <span>Module 6 Knowledge Assessment</span>
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Verify your mastery of passive reconnaissance, Certificate Transparency, DNS
                    record types, search operators, and responsible intelligence disclosure.
                  </p>
                </div>

                {submittedQuiz && (
                  <div className="text-right">
                    <span className="text-xs font-mono uppercase text-stone-500 font-bold block">
                      Final Score
                    </span>
                    <span className="text-2xl font-black text-orange-600 font-mono">
                      {quizScore} / {quizQuestions.length}
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                {quizQuestions.map((q, idx) => {
                  const isAnswered = selectedQuizAnswers[q.id] !== undefined;
                  const isCorrect = selectedQuizAnswers[q.id] === q.correct;

                  return (
                    <div
                      key={q.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        submittedQuiz
                          ? isCorrect
                            ? "border-emerald-200 bg-emerald-50/30"
                            : "border-red-200 bg-red-50/30"
                          : "border-stone-200 bg-white"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-100 text-xs font-mono font-bold text-stone-700">
                          {idx + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className="text-sm font-bold text-stone-900 mb-3">{q.question}</h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                            {q.options.map((opt, optIdx) => {
                              const isSelected = selectedQuizAnswers[q.id] === optIdx;
                              let btnStyle =
                                "border-stone-200 bg-white hover:bg-stone-50 text-stone-700";

                              if (submittedQuiz) {
                                if (optIdx === q.correct) {
                                  btnStyle = "border-emerald-500 bg-emerald-100 text-emerald-900 font-bold";
                                } else if (isSelected) {
                                  btnStyle = "border-red-500 bg-red-100 text-red-900 font-bold";
                                }
                              } else if (isSelected) {
                                btnStyle =
                                  "border-orange-500 bg-orange-50 text-orange-950 font-semibold ring-2 ring-orange-500/20";
                              }

                              return (
                                <button
                                  key={optIdx}
                                  onClick={() => handleSelectQuizAnswer(q.id, optIdx)}
                                  className={`p-3 rounded-xl border text-left text-xs transition-all ${btnStyle}`}
                                >
                                  {opt}
                                </button>
                              );
                            })}
                          </div>

                          {submittedQuiz && (
                            <div className="p-3 rounded-xl bg-white border border-stone-200 text-xs text-stone-600 leading-relaxed">
                              <strong className="text-stone-900 font-mono">Explanation: </strong>
                              {q.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedQuizAnswers({});
                    setSubmittedQuiz(false);
                  }}
                  className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-bold text-stone-600 hover:bg-stone-50"
                >
                  Reset Answers
                </button>

                {!submittedQuiz ? (
                  <button
                    onClick={() => setSubmittedQuiz(true)}
                    disabled={Object.keys(selectedQuizAnswers).length === 0}
                    className="px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all"
                  >
                    Submit Assessment
                  </button>
                ) : (
                  <div className="text-xs font-semibold text-stone-600">
                    Assessment verified against OWASP WSTG and Certificate Transparency standards.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Nova AI Mentor Sidecar Drawer */}
      {showAiTutor && (
        <LearningRo
          courseName="Cybersecurity Master Course"
          moduleName="Module 6: Open-Source Intelligence (OSINT) & Passive Reconnaissance"
          currentTopic={topics.find((t) => t.id === (selectedTopic || 1))?.title || "Overview"}
          onClose={() => setShowAiTutor(false)}
        />
      )}
    </div>
  );
}
