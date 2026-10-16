import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Globe,
  Search,
  Database,
  FileText,
  Shield,
  Layers,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  BookOpen,
  Terminal,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Lock,
  Eye,
  HelpCircle,
  Check,
  X,
  Info,
  ExternalLink,
  Award,
  Clock,
  Building,
  ChevronRight,
  Copy,
  History,
  FileCheck,
  GitBranch,
  Filter,
  Share2,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function CybersecurityOSINT() {
  const navigate = useNavigate();

  // Navigation & Workspace State
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(6);
  const [activeTab, setActiveTab] = useState("theory");
  const [activeTheorySection, setActiveTheorySection] = useState("part-a");
  const [activeLab, setActiveLab] = useState(1);

  // -------------------------------------------------------------
  // LAB 1 STATE: Collection Plan Workspace
  // -------------------------------------------------------------
  const [planState, setPlanState] = useState({
    requirement: "",
    selectedSources: [],
    minimizationRules: [],
  });

  const availableSources = [
    { id: "s1", name: "Official Website & Documentation", type: "First-Party Authoritative", valid: true },
    { id: "s2", name: "Public DNS & RDAP/ICANN Records", type: "Infrastructure Registry", valid: true },
    { id: "s3", name: "Certificate Transparency Logs (crt.sh)", type: "Cryptographic Public Ledger", valid: true },
    { id: "s4", name: "Internet Archive (Wayback Machine)", type: "Historical Web Snapshots", valid: true },
    { id: "s5", name: "Intrusive Port Scanner against Target IP", type: "Active Scanning (Out-of-Scope for OSINT)", valid: false },
    { id: "s6", name: "Underground Leaked Password Dumps", type: "Unauthorized / Ethical Red Line", valid: false },
  ];

  const handleToggleSource = (id) => {
    setPlanState((prev) => {
      const exists = prev.selectedSources.includes(id);
      return {
        ...prev,
        selectedSources: exists
          ? prev.selectedSources.filter((s) => s !== id)
          : [...prev.selectedSources, id],
      };
    });
  };

  // -------------------------------------------------------------
  // LAB 2 STATE: Domain and DNS Intelligence
  // -------------------------------------------------------------
  const dnsRecords = [
    {
      id: "dns-1",
      hostname: "learnsphere.org",
      type: "A",
      value: "198.51.100.42",
      provider: "Cloudflare Anycast IP",
      implication: "Indicates edge reverse-proxy / CDN deployment. Target origin IP is shielded by CDN.",
      isOperationalControl: false,
    },
    {
      id: "dns-2",
      hostname: "learnsphere.org",
      type: "MX",
      value: "10 mail.protection.outlook.com",
      provider: "Microsoft 365 Exchange Online",
      implication: "Confirms corporate email handled via Microsoft 365 cloud tenant; useful for email routing context.",
      isOperationalControl: false,
    },
    {
      id: "dns-3",
      hostname: "api.learnsphere.org",
      type: "CNAME",
      value: "learnsphere-prod-elb.us-east-1.elb.amazonaws.com",
      provider: "Amazon Web Services (AWS ELB)",
      implication: "Reveals AWS US-East-1 deployment architecture for primary backend API service.",
      isOperationalControl: true,
    },
    {
      id: "dns-4",
      hostname: "learnsphere.org",
      type: "TXT",
      value: "v=spf1 include:spf.protection.outlook.com -all",
      provider: "Email Authentication (SPF)",
      implication: "Strict SPF enforcement ('-all'). Prevents trivial sender spoofing of @learnsphere.org domain.",
      isOperationalControl: true,
    },
    {
      id: "dns-5",
      hostname: "old-portal.learnsphere.org",
      type: "CNAME",
      value: "learnsphere.azurewebsites.net",
      provider: "Microsoft Azure App Service",
      implication: "Dangling legacy CNAME. If the Azure App Service was decommissioned but DNS remains, vulnerable to Subdomain Takeover.",
      isOperationalControl: true,
    },
  ];

  const [inspectedDns, setInspectedDns] = useState(null);

  // -------------------------------------------------------------
  // LAB 3 STATE: Certificate Transparency Explorer
  // -------------------------------------------------------------
  const ctLogs = [
    {
      id: "ct-1",
      domain: "learnsphere.org",
      san: ["learnsphere.org", "www.learnsphere.org"],
      issuer: "Let's Encrypt Authority X3",
      loggedDate: "2026-08-10",
      status: "Confirmed Current Asset",
      notes: "Active production TLS certificate for apex and www domains.",
    },
    {
      id: "ct-2",
      domain: "*.internal.learnsphere.org",
      san: ["*.internal.learnsphere.org"],
      issuer: "DigiCert Global Root G2",
      loggedDate: "2025-04-12",
      status: "Potential Internal Leak",
      notes: "Wildcard internal domain logged to public CT log. Discloses naming convention of internal microservices.",
    },
    {
      id: "ct-3",
      domain: "staging-v2.learnsphere.org",
      san: ["staging-v2.learnsphere.org"],
      issuer: "ZeroSSL RSA Domain CA",
      loggedDate: "2026-09-01",
      status: "Likely Active Pre-Production",
      notes: "Recent certificate indicates active staging environment. Warranted candidate for authorized scope review.",
    },
    {
      id: "ct-4",
      domain: "dev-mongodb-cluster.learnsphere.org",
      san: ["dev-mongodb-cluster.learnsphere.org"],
      issuer: "Let's Encrypt",
      loggedDate: "2023-01-15",
      status: "Historical / Potentially Stale",
      notes: "Expired in 2023. Historical record; does NOT prove host is currently online or accessible.",
    },
  ];

  const [selectedCt, setSelectedCt] = useState(ctLogs[0]);

  // -------------------------------------------------------------
  // LAB 4 STATE: Historical Comparison (Wayback Machine)
  // -------------------------------------------------------------
  const [waybackYear, setWaybackYear] = useState("2026");

  // -------------------------------------------------------------
  // LAB 5 STATE: Source Reliability Matrix
  // -------------------------------------------------------------
  const sourceEvidence = [
    {
      id: "ev-1",
      claim: "LearnSphere runs Kubernetes on Google Cloud GKE",
      sourceA: "Official Tech Blog (engineering.learnsphere.org) - 'Migrating to GKE' (June 2025)",
      sourceB: "Third-party TechCrunch Article repeating blog post (July 2025)",
      isIndependent: false,
      verdict: "Supported by primary official source; secondary news article is circular attribution.",
      confidence: "Moderate",
    },
    {
      id: "ev-2",
      claim: "LearnSphere database credentials leaked in public GitHub repository",
      sourceA: "Anonymous forum post on Reddit r/cybersecurity (Oct 2026)",
      sourceB: "No matching repo found, no secondary corroboration",
      isIndependent: false,
      verdict: "Uncorroborated single anonymous claim. Cannot be verified. Must NOT be presented as a finding.",
      confidence: "Low / Unassessed",
    },
    {
      id: "ev-3",
      claim: "Primary authentication handled via Microsoft Entra ID (Azure AD)",
      sourceA: "DNS TXT record: MS=ms12345678 domain verification",
      sourceB: "OpenID configuration endpoint: https://login.microsoftonline.com/learnsphere.org/v2.0/.well-known/openid-configuration",
      isIndependent: true,
      verdict: "Independently corroborated by DNS cryptographic token and live Microsoft IdP discovery.",
      confidence: "High",
    },
  ];

  // -------------------------------------------------------------
  // PART I: 12-Question Knowledge Check Quiz
  // -------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question: "What distinguishes OSINT from ordinary information searching?",
      options: [
        "A. OSINT collects the largest possible volume of information without filtering.",
        "B. OSINT follows a defined research question, evaluates source reliability, and analyzes information to support a security decision.",
        "C. OSINT always involves scanning and sending probe packets to target systems.",
        "D. OSINT proves every discovered claim with 100% certainty automatically.",
      ],
      correctAnswer: 1,
      explanation:
        "The intelligence principle states that OSINT is the disciplined process of collecting and evaluating openly available information to answer a specific decision-oriented question, rather than mere unstructured data hoovering.",
    },
    {
      id: 2,
      question: "Which is the clearest example of passive reconnaissance?",
      options: [
        "A. Scanning a web server's ports with Nmap.",
        "B. Attempting a login with a discovered password.",
        "C. Reviewing an organization's publicly published technical documentation and official release notes.",
        "D. Testing whether an API endpoint can be exploited using SQL injection payloads.",
      ],
      correctAnswer: 2,
      explanation:
        "Passive reconnaissance gathers information without directly sending probe packets or interacting with the target's servers. Reviewing public documentation uses legitimate public records without probing target systems.",
    },
    {
      id: 3,
      question: "What can a Certificate Transparency (CT) log record establish most directly?",
      options: [
        "A. That a hostname is definitely currently online, reachable, and vulnerable.",
        "B. That relevant certificate information was logged and recorded in a public cryptographic ledger at a particular time.",
        "C. That the target organization owns every related cloud server host.",
        "D. That the application deployed on that domain has zero security flaws.",
      ],
      correctAnswer: 1,
      explanation:
        "Certificate Transparency logs prove that a certificate containing specific hostnames was issued by a Certificate Authority and logged. A historical log entry does NOT prove the server is currently live, reachable, or within assessment scope.",
    },
    {
      id: 4,
      question: "Why is an old web-archive snapshot (e.g., Wayback Machine) useful, but inherently limited?",
      options: [
        "A. It always represents the 100% accurate current configuration of the website.",
        "B. It can show historical public content and evolution, but may not reflect the present-day state or currently deployed code.",
        "C. It proves that a removed page contained a critical zero-day vulnerability.",
        "D. It replaces the need for any current verification.",
      ],
      correctAnswer: 1,
      explanation:
        "Web archives preserve historical snapshots of publicly visible pages. While helpful for tracking deprecations and historical architecture, historical presence does not prove current exposure or active production risk.",
    },
    {
      id: 5,
      question: "What is source corroboration?",
      options: [
        "A. Repeating the same claim many times in the final assessment report.",
        "B. Checking a claim against relevant evidence, ideally obtained from independent, separate sources.",
        "C. Removing contradictory evidence so the report looks consistent.",
        "D. Assuming an official corporate website is always 100% correct.",
      ],
      correctAnswer: 1,
      explanation:
        "Corroboration is the analytical practice of verifying whether an observation is supported by independent evidence from distinct origins, rather than mistaking multiple copies of the same press release for separate confirmation.",
    },
    {
      id: 6,
      question: "What is the difference between an observation and an inference?",
      options: [
        "A. An observation is directly recorded evidence; an inference is a conclusion reasonably drawn from evidence.",
        "B. They are identical terms and can be used interchangeably.",
        "C. An inference is always more reliable than an observation.",
        "D. An observation never requires a source timestamp.",
      ],
      correctAnswer: 0,
      explanation:
        "An observation is what the source directly shows (e.g., 'DNS query returned a CNAME pointing to an ELB'). An inference is a conclusion derived from it (e.g., 'The service appears to use an AWS load balancer').",
    },
    {
      id: 7,
      question: "Does the presence of a public DNS record prove that a service is vulnerable?",
      options: [
        "A. Yes, all public DNS records indicate exposed vulnerabilities.",
        "B. No; it establishes a published DNS association at a particular time, not that the service is vulnerable or reachable.",
        "C. Yes, but only if the record type is a CNAME alias.",
        "D. Only if the DNS record uses IPv6 (AAAA) addressing.",
      ],
      correctAnswer: 1,
      explanation:
        "A DNS record associates a name with an IP or alias under DNS rules. It is legitimate Internet infrastructure, not a vulnerability. Claiming a DNS record alone constitutes a vulnerability is a critical analytical error.",
    },
    {
      id: 8,
      question: "Which statement best describes passive reconnaissance?",
      options: [
        "A. It never involves any external network communication of any kind across the entire Internet.",
        "B. It avoids directly probing the target infrastructure, although the researcher may interact with public third-party services (e.g., public DNS resolvers, search engines, CT logs).",
        "C. It automatically authorizes any follow-up invasive port scan.",
        "D. It guarantees that all collected data is current and completely accurate.",
      ],
      correctAnswer: 1,
      explanation:
        "Passive recon queries intermediary, third-party public databases (Google, ICANN, crt.sh, Shodan cached data) rather than establishing connections directly with the target's servers.",
    },
    {
      id: 9,
      question: "A public code repository appears to contain a live API secret key. What should an ethical security student do?",
      options: [
        "A. Use the secret to log into the database and demonstrate business impact.",
        "B. Download every related confidential database record to preserve proof.",
        "C. Avoid using or authenticating with the secret, preserve minimal necessary location evidence, and report through an approved vulnerability disclosure channel.",
        "D. Publish the secret on Twitter/X to publicly pressure the organization into patching.",
      ],
      correctAnswer: 2,
      explanation:
        "Ethical red line: A public repository does not grant permission to authenticate with exposed credentials. Testers must preserve minimal evidence (URL, commit hash, redacted key) and report responsibly.",
    },
    {
      id: 10,
      question: "Two different websites repeat the exact same news report. What should the analyst check?",
      options: [
        "A. Assume there are two independent confirmations of the claim.",
        "B. Trace whether both websites rely on and copy the same original underlying press release or source.",
        "C. Ignore the publication dates completely.",
        "D. Automatically elevate the finding's confidence rating to High.",
      ],
      correctAnswer: 1,
      explanation:
        "Circular reporting occurs when multiple outlets syndicate the same single underlying press release or blog post. An analyst must verify source independence before treating them as corroborating evidence.",
    },
    {
      id: 11,
      question: "What is the primary role of an OSINT collection plan?",
      options: [
        "A. To define the research question, scope, approved sources, expected evidence, and data-minimization boundaries.",
        "B. To authorize penetration testing against unrelated third-party systems.",
        "C. To guarantee that every public source is 100% correct.",
        "D. To eliminate the need for drafting a final intelligence report.",
      ],
      correctAnswer: 0,
      explanation:
        "A collection plan defines what must be learned, which sources can legitimately answer the question, what each source can and cannot prove, and the data-minimization rules to prevent scope creep.",
    },
    {
      id: 12,
      question: "What should a responsible OSINT report do when the collected evidence is inconclusive?",
      options: [
        "A. Present the most dramatic possible interpretation as an established fact to get client attention.",
        "B. Hide all contradictory observations from the client.",
        "C. Transparently state uncertainty, document limitations, and identify what specific further authorized evidence is required.",
        "D. Label the target organization's network as compromised.",
      ],
      correctAnswer: 2,
      explanation:
        "Professional analysts avoid artificial certainty. If evidence is ambiguous, incomplete, or historical, the report must state that limitation explicitly and recommend appropriate authorized follow-up.",
    },
  ];

  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleSelectAnswer = (qId, optionIdx) => {
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setQuizAnswers({});
    setShowQuizResults(false);
  };

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] flex flex-col font-sans">
      {/* 1. TOP MODULE NAVIGATION BAR */}
      <ModuleNav track="cybersecurity" currentModuleId="osint" />

      {/* 2. HERO / HEADER SECTION */}
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-[#ea580c]">
              <Shield size={13} />
              Prepspaces Cybersecurity Masterclass
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700">
              <Globe size={13} />
              Intelligence Gathering & Security Research
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-100 text-stone-700">
              <BookOpen size={13} />
              OWASP WSTG · MITRE ATT&CK TA0043 · NIST SP 800-115
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#18181b] mt-2">
            Module 6: Open-Source Intelligence (OSINT) and Passive Reconnaissance
          </h1>
          <p className="mt-3 text-stone-600 max-w-4xl text-sm sm:text-base leading-relaxed">
            Professional Open-Source Intelligence (OSINT) is the disciplined process of collecting, corroborating, and
            interpreting publicly available information to understand an organization&apos;s external digital exposure—without
            sending direct probe packets against its systems. Master collection planning, DNS intelligence, Certificate
            Transparency, web archives, source corroboration, and confidence grading under strict ethical boundaries.
          </p>

          {/* QUICK STATS BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#ea580c]">
                <Clock size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold">Duration</div>
                <div className="text-sm font-bold text-stone-900">14–18 Hours</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700">
                <Terminal size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold">Practical Labs</div>
                <div className="text-sm font-bold text-stone-900">6 Guided Labs</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700">
                <Database size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold">Sources</div>
                <div className="text-sm font-bold text-stone-900">DNS · CT · RDAP · Archives</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-700">
                <Award size={18} />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold">Capstone</div>
                <div className="text-sm font-bold text-stone-900">LearnSphere Assessment</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. PRIMARY TABS NAVIGATION */}
      <div className="bg-white border-b border-stone-200 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto py-2">
            {[
              { id: "theory", label: "1. Theory & Frameworks", icon: BookOpen },
              { id: "labs", label: "2. Interactive Labs (6)", icon: Terminal },
              { id: "casestudy", label: "3. Applied Case Study", icon: Building },
              { id: "quiz", label: "4. Knowledge Check (12 Qs)", icon: HelpCircle },
              { id: "capstone", label: "5. Capstone Project & Rubric", icon: Award },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-[#18181b] text-white shadow-xs"
                      : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 4. MAIN CONTENT CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ========================================================= */}
        {/* TAB 1: THEORY & FRAMEWORKS */}
        {/* ========================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick Pill Selector for Theory Sections */}
            <div className="flex flex-wrap gap-2 p-3 bg-white rounded-2xl border border-stone-200">
              {[
                { id: "part-a", label: "Part A: Foundations of OSINT" },
                { id: "part-b", label: "Part B: Intelligence Lifecycle" },
                { id: "part-c", label: "Part C: Public Research Sources" },
                { id: "part-d", label: "Part D: Correlation & Reasoning" },
                { id: "part-e", label: "Part E: Ethical Security Workflow" },
                { id: "part-f", label: "Part F: Passive Tools & Hygiene" },
                { id: "part-g", label: "Part G: Privacy & Indian Cyber Law" },
                { id: "part-k", label: "Part K: University References" },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setActiveTheorySection(pill.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg font-bold transition cursor-pointer ${
                    activeTheorySection === pill.id
                      ? "bg-[#ea580c] text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* PART A: FOUNDATIONS OF OSINT */}
            {(activeTheorySection === "part-a" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part A</span>
                    <span>·</span>
                    <span>Foundations of OSINT</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    1. What is Open-Source Intelligence (OSINT)?
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    Open-Source Intelligence (OSINT) is the disciplined process of collecting and analyzing information
                    from openly or legitimately accessible sources to answer a specific, decision-oriented question.
                    Here, &ldquo;open source&rdquo; refers to public accessibility, not software licensed under GPL or MIT.
                  </p>
                </div>

                {/* Data vs Information vs Intelligence Table */}
                <div className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="bg-stone-900 text-white p-3 font-bold text-xs uppercase font-mono">
                    Lesson 1.2: The Intelligence Hierarchy · Data vs. Information vs. Intelligence
                  </div>
                  <div className="divide-y divide-stone-200 text-xs bg-white">
                    {[
                      {
                        term: "Data",
                        meaning: "Individual raw observations, packets, or records without context.",
                        example: "A raw DNS answer string: '93.184.216.34'.",
                      },
                      {
                        term: "Information",
                        meaning: "Data organized and structured into a meaningful factual description.",
                        example: "'example.com' resolves to IPv4 address 93.184.216.34 at 10:14 UTC.",
                      },
                      {
                        term: "Intelligence",
                        meaning: "Evaluated, corroborated information that directly supports a security decision.",
                        example:
                          "The target organization appears to host its main consumer portal on an external CDN, shielding the origin server.",
                      },
                      {
                        term: "Security Finding",
                        meaning: "A documented exposure, misconfiguration, or vulnerability supported by concrete evidence.",
                        example: "An official public PDF exposes internal IP subnets and staging server hostnames in its metadata.",
                      },
                      {
                        term: "Recommendation",
                        meaning: "A prioritized, actionable remediation step addressing the finding.",
                        example: "Enforce automated metadata stripping in CI/CD pipeline prior to publishing public documents.",
                      },
                    ].map((row, idx) => (
                      <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50">
                        <div className="w-36 font-bold text-stone-900 font-mono text-xs text-[#ea580c]">{row.term}</div>
                        <div className="flex-1 text-stone-700 text-xs">{row.meaning}</div>
                        <div className="w-64 text-stone-500 font-mono text-[11px] bg-stone-50 p-2 rounded-lg border border-stone-200">
                          {row.example}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Passive OSINT vs Active Reconnaissance Table */}
                <div>
                  <h3 className="text-sm font-extrabold text-stone-900 mb-2">
                    Lesson 1.4: OSINT vs. Passive Reconnaissance vs. Active Reconnaissance
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/30">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase">
                        <CheckCircle2 size={15} />
                        <span>Passive Reconnaissance (Zero Direct Target Packets)</span>
                      </div>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        Consults third-party caches, public registries, and search indexing services. No direct network
                        packets are transmitted to the target&apos;s servers.
                      </p>
                      <ul className="mt-3 space-y-1.5 text-[11px] text-stone-700 list-disc list-inside">
                        <li>Reading public documentation & corporate announcements</li>
                        <li>Querying public DNS resolvers & ICANN RDAP registries</li>
                        <li>Searching Certificate Transparency logs (crt.sh)</li>
                        <li>Reviewing Wayback Machine historical snapshots</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50/30">
                      <div className="flex items-center gap-2 text-xs font-bold text-rose-800 uppercase">
                        <AlertOctagon size={15} />
                        <span>Active Reconnaissance (Direct Interaction)</span>
                      </div>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        Directly transmits network packets, probes, or authentication requests to target infrastructure.
                        Generates server logs and requires strict Rules of Engagement (RoE).
                      </p>
                      <ul className="mt-3 space-y-1.5 text-[11px] text-stone-700 list-disc list-inside">
                        <li>Port scanning target IP addresses (Nmap, Masscan)</li>
                        <li>Direct HTTP banner grabbing and web crawling</li>
                        <li>Active directory DNS zone transfers (AXFR requests)</li>
                        <li>Credential spraying or login form testing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* PART B: THE OSINT INTELLIGENCE LIFECYCLE */}
            {(activeTheorySection === "part-b" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part B</span>
                    <span>·</span>
                    <span>Structured Intelligence Process</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    2. The 8-Step OSINT Intelligence Lifecycle
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    Unstructured browsing leads to cognitive bias, missed dependencies, and analytical exhaustion.
                    Professional intelligence analysts adhere to a repeatable, auditable lifecycle.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { step: "01", title: "Define Research Question", desc: "Formulate specific decision-oriented intelligence requirements." },
                    { step: "02", title: "Establish Scope & Boundaries", desc: "Define permitted targets, excluded brands, and privacy guardrails." },
                    { step: "03", title: "Plan Collection Sources", desc: "Select sources and map what each source can and cannot establish." },
                    { step: "04", title: "Collect Legitimate Data", desc: "Gather relevant information while strictly minimizing personal data." },
                    { step: "05", title: "Corroborate & Evaluate", desc: "Assess source credibility, identify duplicate reporting, check dates." },
                    { step: "06", title: "Analyze & Synthesize", desc: "Distinguish direct observations from inferences and open hypotheses." },
                    { step: "07", title: "Report Findings", desc: "Deliver actionable intelligence with explicit confidence ratings." },
                    { step: "08", title: "Review & Sanitization", desc: "Audit limitations, archive evidence, and securely purge temporary data." },
                  ].map((cycle, idx) => (
                    <div key={idx} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between">
                      <span className="text-xs font-mono font-bold text-[#ea580c]">Step {cycle.step}</span>
                      <h4 className="text-xs font-extrabold text-stone-900 mt-1">{cycle.title}</h4>
                      <p className="text-[11px] text-stone-600 mt-1.5 leading-relaxed">{cycle.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Prepspaces Confidence Vocabulary Table */}
                <div className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="bg-stone-900 text-white p-3 font-bold text-xs uppercase font-mono">
                    Lesson 2.5: Prepspaces Intelligence Confidence Vocabulary
                  </div>
                  <div className="divide-y divide-stone-200 text-xs bg-white">
                    {[
                      {
                        level: "High Confidence",
                        pattern: "Directly documented by authoritative primary source and corroborated by independent technical evidence.",
                        wording: "“The evidence strongly supports…”",
                        badge: "bg-emerald-100 text-emerald-800",
                      },
                      {
                        level: "Moderate Confidence",
                        pattern: "Supported by credible evidence, but with minor unresolved limitations or single-source dependency.",
                        wording: "“The available evidence indicates…”",
                        badge: "bg-blue-100 text-blue-800",
                      },
                      {
                        level: "Low Confidence",
                        pattern: "Based on limited, ambiguous, or weakly corroborated observations (e.g., historical archive records).",
                        wording: "“This may indicate…”",
                        badge: "bg-amber-100 text-amber-800",
                      },
                      {
                        level: "Unassessed / Open",
                        pattern: "The evidence has not been evaluated sufficiently or data is completely missing.",
                        wording: "“Further authorized verification is required.”",
                        badge: "bg-stone-200 text-stone-800",
                      },
                    ].map((conf, idx) => (
                      <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50">
                        <span className={`w-36 text-xs font-bold font-mono px-2.5 py-1 rounded-md text-center ${conf.badge}`}>
                          {conf.level}
                        </span>
                        <div className="flex-1 text-stone-700 text-xs">{conf.pattern}</div>
                        <div className="w-56 font-bold text-stone-900 font-mono text-[11px]">{conf.wording}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* PART C: PUBLIC RESEARCH SOURCES */}
            {(activeTheorySection === "part-c" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part C</span>
                    <span>·</span>
                    <span>Public-Source Research Methods</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    3. Deep Dive into Public Research Sources
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    A security researcher must know what each public data source can establish—and more importantly,
                    what it CANNOT prove on its own.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      source: "1. Public DNS Records",
                      whatItShows: "Associates domain names with IP addresses (A/AAAA), mail servers (MX), aliases (CNAME), and text policies (TXT/SPF).",
                      limitation: "Does NOT prove the destination host is reachable, vulnerable, or operated by the target.",
                    },
                    {
                      source: "2. Certificate Transparency (CT)",
                      whatItShows: "Public append-only cryptographic log recording every TLS certificate issued by public CAs.",
                      limitation: "A logged certificate does NOT establish that the server is online or currently controlled by the target.",
                    },
                    {
                      source: "3. Registration Data (RDAP / ICANN)",
                      whatItShows: "Registrar details, creation/expiration dates, and authoritative nameservers for a domain.",
                      limitation: "Registrant contact fields are routinely redacted under privacy services or GDPR compliance.",
                    },
                    {
                      source: "4. Web Archives (Wayback Machine)",
                      whatItShows: "Historical snapshots of public web pages at recorded points in time.",
                      limitation: "Archived content may be stale or incomplete. Historical existence does NOT prove current risk.",
                    },
                    {
                      source: "5. Public Code Repositories (GitHub)",
                      whatItShows: "Software architecture, public dependencies, release notes, and commit history.",
                      limitation: "Public repo code may not match the deployed production build. Discovered credentials must NEVER be used.",
                    },
                    {
                      source: "6. Job Postings & Engineering Blogs",
                      whatItShows: "Desired technical skills, cloud providers, and operational toolsets mentioned in recruiting ads.",
                      limitation: "Describes aspirational hiring requirements, not guaranteed production configurations.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-1.5">
                      <h4 className="text-xs font-extrabold text-stone-900">{item.source}</h4>
                      <p className="text-[11px] text-stone-700 leading-relaxed">
                        <strong className="text-stone-900">Establishes:</strong> {item.whatItShows}
                      </p>
                      <p className="text-[11px] text-rose-700 leading-relaxed border-t border-stone-200 pt-1.5">
                        <strong className="text-rose-900">Limitation:</strong> {item.limitation}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* PART D: CORRELATION & REASONING */}
            {(activeTheorySection === "part-d" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part D</span>
                    <span>·</span>
                    <span>Analytical Rigor</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    4. Correlation, Verification & Analytical Reasoning
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    The hallmark of an expert analyst is distinguishing between directly observed facts, reasonable
                    inferences, and open hypotheses.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                    <span className="text-[11px] font-mono font-bold text-stone-500 uppercase">Category 1</span>
                    <h3 className="text-xs font-extrabold text-stone-900 mt-1">Direct Observation</h3>
                    <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                      What the source directly displays without interpretation.
                    </p>
                    <div className="mt-3 p-2.5 bg-white rounded-xl border border-stone-200 text-[11px] font-mono text-stone-700">
                      &ldquo;A public DNS query returned a CNAME pointing to an AWS ELB on 2026-10-15.&rdquo;
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                    <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Category 2</span>
                    <h3 className="text-xs font-extrabold text-stone-900 mt-1">Reasonable Inference</h3>
                    <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                      A conclusion reasonably supported by one or more observations.
                    </p>
                    <div className="mt-3 p-2.5 bg-white rounded-xl border border-stone-200 text-[11px] font-mono text-stone-700">
                      &ldquo;The hostname appears to route traffic through an Amazon Web Services load balancer.&rdquo;
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50">
                    <span className="text-[11px] font-mono font-bold text-stone-500 uppercase">Category 3</span>
                    <h3 className="text-xs font-extrabold text-stone-900 mt-1">Open Hypothesis</h3>
                    <p className="text-xs text-stone-600 mt-1.5 leading-relaxed">
                      A possible explanation that has not yet been verified by evidence.
                    </p>
                    <div className="mt-3 p-2.5 bg-white rounded-xl border border-stone-200 text-[11px] font-mono text-stone-700">
                      &ldquo;The service might be an unmaintained staging server with default credentials.&rdquo;
                    </div>
                  </div>
                </div>

                {/* Common OSINT Errors Table */}
                <div className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="bg-stone-900 text-white p-3 font-bold text-xs uppercase font-mono">
                    Lesson 4.4: 8 Common OSINT Pitfalls & Defensive Corrections
                  </div>
                  <div className="divide-y divide-stone-200 text-xs bg-white">
                    {[
                      {
                        error: "Treating historical records as current",
                        why: "DNS or archive records can linger years after a server is decommissioned.",
                        correction: "Record collection timestamp; corroborate current state via authorized methods.",
                      },
                      {
                        error: "Treating IP address as proof of ownership",
                        why: "IPs are routinely shared on multi-tenant CDNs (Cloudflare, Akamai) or cloud providers.",
                        correction: "Examine authoritative RDAP records and describe the hosting relationship precisely.",
                      },
                      {
                        error: "Treating CT certificate as proof of a live host",
                        why: "Certificates remain in transparency logs forever, even after hosts are destroyed.",
                        correction: "Separate certificate issuance evidence from real-time host availability.",
                      },
                      {
                        error: "Counting copied articles as independent confirmation",
                        why: "Multiple news blogs frequently copy verbatim from one single press release.",
                        correction: "Trace source provenance back to the original root publication.",
                      },
                    ].map((pitfall, idx) => (
                      <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50">
                        <div className="w-56 font-bold text-rose-900 text-xs">{pitfall.error}</div>
                        <div className="flex-1 text-stone-600 text-xs">{pitfall.why}</div>
                        <div className="w-72 font-semibold text-emerald-900 text-xs bg-emerald-50 p-2 rounded-lg border border-emerald-200">
                          {pitfall.correction}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* PART E: ETHICAL SECURITY WORKFLOW */}
            {(activeTheorySection === "part-e" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part E</span>
                    <span>·</span>
                    <span>Ethical Security Workflow</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    5. From OSINT Observation to Defensive Security Action
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    OSINT in a cybersecurity program is not an academic curiosity; it directly feeds External Attack Surface
                    Management (EASM), Threat Intelligence, and vulnerability reduction.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                  <h3 className="text-xs font-extrabold text-stone-900 uppercase">
                    MITRE ATT&CK® Reconnaissance Tactic (TA0043) Mapping
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">T1593: Search Open Websites</strong>
                      <span className="text-[11px] text-stone-600 mt-1 block">
                        Adversaries search public news, company portals, and code repositories to uncover technical stack details.
                      </span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">T1590: Gather Domain Properties</strong>
                      <span className="text-[11px] text-stone-600 mt-1 block">
                        Adversaries enumerate DNS records (A/MX/TXT) and RDAP registrations to map external attack surface.
                      </span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">T1589: Gather Victim Identity Info</strong>
                      <span className="text-[11px] text-stone-600 mt-1 block">
                        Adversaries harvest employee names, email formats, and organizational roles from public social directories.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* PART F: PASSIVE TOOLS & HYGIENE */}
            {(activeTheorySection === "part-f" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part F</span>
                    <span>·</span>
                    <span>Passive Tools & Data Minimization</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    6. Passive OSINT Tool Selection & Analytical Hygiene
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    Automated tools are aids, not substitutes for critical thinking. An analyst must understand what automated
                    utilities query and how to sanitize research data.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <h3 className="text-xs font-extrabold text-stone-900 uppercase">Core Passive Resources</h3>
                    <ul className="mt-2 space-y-2 text-xs text-stone-600">
                      <li><strong>ICANN Lookup / RDAP:</strong> Query official registration records without contacting the target.</li>
                      <li><strong>crt.sh / Censys:</strong> Inspect public Certificate Transparency logs for historical subdomains.</li>
                      <li><strong>Wayback Machine:</strong> Compare historical snapshots of official documentation.</li>
                      <li><strong>OWASP WSTG Information Gathering:</strong> Standardized application security discovery framework.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <h3 className="text-xs font-extrabold text-stone-900 uppercase">Tool Hygiene & Data Minimization</h3>
                    <ul className="mt-2 space-y-2 text-xs text-stone-600">
                      <li>Collect only what is necessary to answer the explicit intelligence question.</li>
                      <li>Never upload confidential client documents to unvetted third-party cloud services.</li>
                      <li>Preserve SHA-256 hashes of collected files to demonstrate chain of custody and data integrity.</li>
                      <li>Never attempt to authenticate or log in with credentials discovered in public code repositories.</li>
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* PART G: PRIVACY & INDIAN CYBER LAW */}
            {(activeTheorySection === "part-g" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part G</span>
                    <span>·</span>
                    <span>Ethics, Privacy & Legal Boundaries</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    7. Public Availability $\neq$ Unrestricted Use: Privacy & Legal Boundaries
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    Just because information is publicly indexed does not grant legal or ethical permission to aggregate,
                    weaponize, or redistribute it.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60 space-y-3">
                  <h3 className="text-xs font-extrabold text-stone-900 uppercase">
                    India-Specific Cyber Law Context
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">Information Technology Act, 2000</strong>
                      <span className="text-[11px] text-stone-600 mt-1 block">
                        Section 43 & Section 66 criminalize unauthorized access, hacking, and extracting data from protected systems.
                      </span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">Digital Personal Data Protection Act, 2023</strong>
                      <span className="text-[11px] text-stone-600 mt-1 block">
                        Mandates strict purpose limitation, consent, and processing standards for personal data of Indian citizens.
                      </span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">CERT-In Vulnerability Disclosure Policy</strong>
                      <span className="text-[11px] text-stone-600 mt-1 block">
                        Establishes coordinated reporting guidelines for discovered security flaws to the Indian Computer Emergency Response Team.
                      </span>
                    </div>
                  </div>
                </div>

                {/* 8 Ethical Red Lines */}
                <div className="p-4 rounded-2xl border border-rose-200 bg-rose-50/30">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-800 uppercase">
                    <AlertOctagon size={16} />
                    <span>8 Strict Ethical Red Lines for Prepspaces OSINT Students</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs text-stone-700">
                    <div>1. Do NOT build dossiers on unrelated private individuals.</div>
                    <div>2. Do NOT collect personal data beyond defined research scope.</div>
                    <div>3. Do NOT attempt logins using discovered credentials.</div>
                    <div>4. Do NOT access private records or protected internal databases.</div>
                    <div>5. Do NOT port-scan under the guise of &lsquo;passive recon&rsquo;.</div>
                    <div>6. Do NOT use exposed information for social engineering or phishing.</div>
                    <div>7. Do NOT publish unverified allegations or private contact data.</div>
                    <div>8. Do NOT misrepresent historical records as active live vulnerabilities.</div>
                  </div>
                </div>
              </section>
            )}

            {/* PART K: UNIVERSITY REFERENCES */}
            {(activeTheorySection === "part-k" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part K</span>
                    <span>·</span>
                    <span>Authoritative References</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    8. Academic Curricula & Authoritative Standards
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    This module references foundational public guidance from international standards organizations:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    {
                      inst: "OWASP Foundation",
                      course: "Web Security Testing Guide (WSTG)",
                      focus: "Application information gathering, discovery methods, attack-surface identification.",
                      url: "https://wstg.owasp.org/latest/4-Web_Application_Security_Testing/01-Information_Gathering/00-Information_Gathering_Overview/",
                    },
                    {
                      inst: "MITRE ATT&CK®",
                      course: "Reconnaissance Tactic (TA0043)",
                      focus: "Threat-informed techniques: T1593 (Search Open Websites), T1590 (Gather Domain Properties).",
                      url: "https://attack.mitre.org/tactics/TA0043/",
                    },
                    {
                      inst: "NIST (U.S. Dept of Commerce)",
                      course: "SP 800-115: InfoSec Testing & Assessment",
                      focus: "Planning, passive discovery techniques, evidence analysis, and mitigation.",
                      url: "https://csrc.nist.gov/pubs/sp/800/115/final",
                    },
                    {
                      inst: "ICANN Lookup",
                      course: "Registration Data Access Protocol (RDAP)",
                      focus: "Publicly accessible domain registration and authoritative nameserver information.",
                      url: "https://lookup.icann.org/",
                    },
                    {
                      inst: "Certificate Transparency",
                      course: "Certificate Transparency Framework",
                      focus: "Public append-only cryptographic logging of issued certificates and hostnames.",
                      url: "https://certificate.transparency.dev/",
                    },
                    {
                      inst: "CERT-In (Ministry of Electronics & IT)",
                      course: "Responsible Vulnerability Disclosure Policy",
                      focus: "Coordinated reporting and national vulnerability coordination in India.",
                      url: "https://www.cert-in.org.in/RVDCP.jsp",
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
                          <span>Explore Resource</span>
                          <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: INTERACTIVE LABS */}
        {/* ========================================================= */}
        {activeTab === "labs" && (
          <div className="space-y-6">
            {/* Lab Switcher Bar */}
            <div className="flex flex-wrap gap-2 p-3 bg-white rounded-2xl border border-stone-200">
              {[
                { id: 1, name: "Lab 1: Collection Plan" },
                { id: 2, name: "Lab 2: DNS Intelligence" },
                { id: 3, name: "Lab 3: Certificate Transparency" },
                { id: 4, name: "Lab 4: Historical Comparison" },
                { id: 5, name: "Lab 5: Source Reliability" },
                { id: 6, name: "Lab 6: OSINT Report Builder" },
              ].map((lab) => (
                <button
                  key={lab.id}
                  onClick={() => setActiveLab(lab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    activeLab === lab.id
                      ? "bg-[#18181b] text-white shadow-xs"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {lab.name}
                </button>
              ))}
            </div>

            {/* LAB 1: COLLECTION PLAN */}
            {activeLab === 1 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 1</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Build an OSINT Collection Plan for LearnSphere
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Turn a vague request into a controlled, defensible collection plan. Select valid passive sources and reject
                    prohibited or invasive methods.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-stone-900 block mb-1">
                      1. Define Specific Intelligence Requirement (Research Question)
                    </label>
                    <input
                      type="text"
                      value={planState.requirement}
                      onChange={(e) => setPlanState({ ...planState, requirement: e.target.value })}
                      placeholder="e.g., Identify public DNS and cloud dependencies of learnsphere.org to support an external attack-surface review."
                      className="w-full text-xs font-mono p-2.5 rounded-xl border border-stone-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-stone-900 block mb-2">
                      2. Select Approved Public Data Sources
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {availableSources.map((source) => {
                        const isSelected = planState.selectedSources.includes(source.id);
                        return (
                          <button
                            key={source.id}
                            onClick={() => handleToggleSource(source.id)}
                            className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                              isSelected
                                ? source.valid
                                  ? "border-emerald-500 bg-emerald-50/40 text-emerald-950"
                                  : "border-rose-500 bg-rose-50/40 text-rose-950"
                                : "border-stone-200 bg-stone-50/60 hover:bg-stone-100"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold">{source.name}</span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-stone-200">
                                {source.type}
                              </span>
                            </div>
                            {isSelected && !source.valid && (
                              <p className="text-[11px] text-rose-700 mt-1 font-semibold">
                                Error: This violates passive reconnaissance boundaries! Must be removed.
                              </p>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 2: DNS INTELLIGENCE */}
            {activeLab === 2 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 2</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Domain & DNS Intelligence Table (learnsphere.org)
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Analyze public DNS records to understand infrastructure delegation. Click each record to inspect security implications.
                  </p>
                </div>

                <div className="divide-y divide-stone-200 rounded-2xl border border-stone-200 overflow-hidden bg-white">
                  {dnsRecords.map((rec) => (
                    <div
                      key={rec.id}
                      onClick={() => setInspectedDns(rec)}
                      className={`p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 cursor-pointer transition ${
                        inspectedDns?.id === rec.id ? "bg-orange-50/60" : "hover:bg-stone-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-12 text-center text-xs font-mono font-extrabold bg-stone-900 text-white py-1 rounded">
                          {rec.type}
                        </span>
                        <div>
                          <div className="text-xs font-extrabold text-stone-900 font-mono">{rec.hostname}</div>
                          <div className="text-[11px] text-stone-500 font-mono">{rec.value}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono text-stone-600">{rec.provider}</span>
                        <ChevronRight size={14} className="text-stone-400" />
                      </div>
                    </div>
                  ))}
                </div>

                {inspectedDns && (
                  <div className="p-4 rounded-2xl border border-orange-200 bg-orange-50/40 space-y-1">
                    <span className="text-[10px] font-mono text-[#ea580c] font-bold uppercase">
                      Security Analysis for {inspectedDns.type} Record
                    </span>
                    <h4 className="text-xs font-bold text-stone-900">{inspectedDns.hostname}</h4>
                    <p className="text-xs text-stone-700 leading-relaxed mt-1">{inspectedDns.implication}</p>
                  </div>
                )}
              </div>
            )}

            {/* LAB 3: CERTIFICATE TRANSPARENCY */}
            {activeLab === 3 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 3</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Certificate Transparency Log Explorer (crt.sh Simulator)
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Examine cryptographic certificate logs to discover candidate subdomains. Distinguish current active assets
                    from historical, decommissioned records.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {ctLogs.map((log) => (
                      <div
                        key={log.id}
                        onClick={() => setSelectedCt(log)}
                        className={`p-3.5 rounded-xl border text-left cursor-pointer transition ${
                          selectedCt.id === log.id
                            ? "border-orange-500 bg-orange-50/40 shadow-xs"
                            : "border-stone-200 bg-stone-50/60 hover:bg-stone-100"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold font-mono text-stone-900">{log.domain}</span>
                          <span className="text-[10px] font-mono text-stone-500">{log.loggedDate}</span>
                        </div>
                        <span className="text-[11px] font-mono text-[#ea580c] block mt-1">{log.status}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/70 space-y-3">
                    <span className="text-[11px] font-mono text-[#ea580c] font-bold uppercase">Certificate Log Inspection</span>
                    <h4 className="text-sm font-extrabold text-stone-900 font-mono">{selectedCt.domain}</h4>
                    <div className="text-xs text-stone-700 space-y-1">
                      <div><strong>Subject Alternative Names (SANs):</strong> {selectedCt.san.join(", ")}</div>
                      <div><strong>Certificate Authority:</strong> {selectedCt.issuer}</div>
                      <div><strong>Logged Date:</strong> {selectedCt.loggedDate}</div>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed">
                      <strong>Security Assessment:</strong> {selectedCt.notes}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: HISTORICAL COMPARISON */}
            {activeLab === 4 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 4</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Wayback Machine Historical Comparison Simulator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Compare documentation snapshots between 2022 and 2026 to detect deprecated technical dependencies.
                  </p>
                </div>

                <div className="flex gap-2">
                  {["2022", "2026"].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setWaybackYear(yr)}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold font-mono transition cursor-pointer ${
                        waybackYear === yr
                          ? "bg-stone-900 text-white"
                          : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                      }`}
                    >
                      Snapshot: {yr}
                    </button>
                  ))}
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-900 text-stone-200 font-mono text-xs leading-relaxed">
                  <div className="text-[10px] text-stone-500 uppercase mb-2">
                    Source: web.archive.org/web/{waybackYear}0101/https://learnsphere.org/docs/architecture
                  </div>
                  {waybackYear === "2022" ? (
                    <div>
                      {`# LearnSphere Technical Architecture (Archived 2022)
- Database: Self-hosted PostgreSQL on 198.51.100.89
- Object Storage: Public bucket at 's3://learnsphere-legacy-backups'
- Authentication: Custom JWT service hosted on auth.learnsphere.internal`}
                    </div>
                  ) : (
                    <div>
                      {`# LearnSphere Technical Architecture (Current 2026)
- Database: Managed AWS Aurora PostgreSQL Multi-AZ
- Object Storage: Authenticated Cloudflare R2 bucket with signed URLs
- Authentication: Microsoft Entra ID (Azure AD) SSO`}
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-2xl border border-amber-200 bg-amber-50/40 text-xs text-stone-700">
                  <strong>Analytical Lesson:</strong> The 2022 snapshot revealed <code>s3://learnsphere-legacy-backups</code>.
                  An ethical analyst documents this as a candidate asset to check with the client whether the bucket was
                  decommissioned or left publicly accessible—without downloading files.
                </div>
              </div>
            )}

            {/* LAB 5: SOURCE RELIABILITY */}
            {activeLab === 5 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 5</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Source Reliability & Corroboration Matrix
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Evaluate public claims to detect circular reporting and assign defensible confidence ratings.
                  </p>
                </div>

                <div className="space-y-4">
                  {sourceEvidence.map((ev) => (
                    <div key={ev.id} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-xs font-bold text-stone-900">{ev.claim}</h4>
                        <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-white border border-stone-200 text-[#ea580c]">
                          Confidence: {ev.confidence}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-stone-600 pt-1">
                        <div><strong>Source A:</strong> {ev.sourceA}</div>
                        <div><strong>Source B:</strong> {ev.sourceB}</div>
                      </div>
                      <p className="text-[11px] text-stone-700 border-t border-stone-200 pt-2 leading-relaxed">
                        <strong>Corroboration Analysis:</strong> {ev.verdict}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LAB 6: OSINT REPORT BUILDER */}
            {activeLab === 6 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Practical Exercise 6</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Professional OSINT Assessment Report Generator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Review the consolidated intelligence product ready for executive debriefing.
                  </p>
                </div>

                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-900 text-stone-200 font-mono text-xs leading-relaxed space-y-4">
                  <div className="text-orange-400 font-bold uppercase text-[11px] border-b border-stone-800 pb-2">
                    Executive Deliverable · External OSINT Exposure Assessment: LearnSphere
                  </div>
                  <div>
                    <strong className="text-white">1. Scope & Research Objective:</strong><br />
                    Conducted passive reconnaissance on learnsphere.org using DNS, RDAP, CT logs, and archives. Zero probe packets transmitted to target infrastructure.
                  </div>
                  <div>
                    <strong className="text-white">2. High-Priority Exposure Finding:</strong><br />
                    Observed dangling CNAME for old-portal.learnsphere.org pointing to decommissioned Azure App Service. Risk: Subdomain takeover.
                  </div>
                  <div>
                    <strong className="text-white">3. Recommended Action:</strong><br />
                    Remove the dangling CNAME record from authoritative DNS zone or re-claim Azure app name.
                  </div>
                  <div className="text-stone-500 text-[10px] border-t border-stone-800 pt-2">
                    Confidence: High · Method: Non-intrusive Passive Reconnaissance · Prepared by Prepspaces OSINT Analyst
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: APPLIED CASE STUDY */}
        {/* ========================================================= */}
        {activeTab === "casestudy" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
              <span>Applied Case Study</span>
              <span>·</span>
              <span>LearnSphere Platform Footprint</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
              Case Study: Mapping LearnSphere&apos;s Public Digital Footprint
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Examine how a professional security team conducted a 100% passive external reconnaissance audit of LearnSphere,
              uncovering 4 strategic findings without generating a single alert in the target&apos;s SOC.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60">
                <h3 className="text-xs font-bold text-stone-900 uppercase">1. Reverse CDN Origin Discovery</h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  While <code>learnsphere.org</code> resolved to Cloudflare Anycast IPs, an older Certificate Transparency
                  log entry for <code>origin-direct.learnsphere.org</code> pointed directly to a cloud server IP, allowing
                  defenders to identify that origin protections needed reinforcement.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60">
                <h3 className="text-xs font-bold text-stone-900 uppercase">2. SPF Authentication Hardening</h3>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  The DNS TXT record for email authentication used <code>~all</code> (SoftFail). The assessment recommended
                  migrating to <code>-all</code> (HardFail) and implementing DMARC reporting to block phishing spoofing.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: KNOWLEDGE CHECK QUIZ */}
        {/* ========================================================= */}
        {activeTab === "quiz" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Knowledge Check</span>
                <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-0.5">
                  Part I: 12-Question Technical OSINT Knowledge Check
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Test your mastery of OSINT methodology, passive reconnaissance, source corroboration, and ethical boundaries.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={Object.keys(quizAnswers).length === 0}
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white font-bold text-xs transition cursor-pointer"
                >
                  Submit & Score Quiz
                </button>
                <button
                  onClick={resetQuiz}
                  className="p-2 rounded-xl border border-stone-200 hover:bg-stone-100 text-stone-600 transition cursor-pointer"
                  title="Reset Quiz"
                >
                  <RefreshCw size={15} />
                </button>
              </div>
            </div>

            {showQuizResults && (
              <div className="p-5 rounded-2xl bg-stone-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase">Score Report</span>
                  <h3 className="text-xl font-extrabold mt-0.5">
                    {calculateScore()} / {quizQuestions.length} Questions Correct
                  </h3>
                  <p className="text-xs text-stone-300 mt-1">
                    {calculateScore() >= 10
                      ? "Outstanding! You possess professional-grade comprehension of OSINT methodology and source analysis."
                      : "Good effort. Review the detailed pedagogical justifications below to strengthen analytical habits."}
                  </p>
                </div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-orange-400 bg-white/10 px-4 py-2 rounded-xl text-center">
                  {Math.round((calculateScore() / quizQuestions.length) * 100)}%
                </div>
              </div>
            )}

            {/* Quiz Questions List */}
            <div className="space-y-6">
              {quizQuestions.map((q, idx) => {
                const selected = quizAnswers[q.id];
                const isCorrect = selected === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-5 rounded-2xl border transition ${
                      showQuizResults
                        ? isCorrect
                          ? "border-emerald-300 bg-emerald-50/20"
                          : "border-rose-300 bg-rose-50/20"
                        : "border-stone-200 bg-stone-50/40"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-lg bg-stone-200 text-stone-800 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">{q.question}</h4>

                        <div className="mt-3 space-y-2">
                          {q.options.map((option, optIdx) => {
                            const isChosen = selected === optIdx;
                            return (
                              <button
                                key={optIdx}
                                onClick={() => handleSelectAnswer(q.id, optIdx)}
                                className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer ${
                                  isChosen
                                    ? showQuizResults
                                      ? optIdx === q.correctAnswer
                                        ? "bg-emerald-100 border-emerald-400 text-emerald-950 font-bold"
                                        : "bg-rose-100 border-rose-400 text-rose-950 font-bold"
                                      : "bg-stone-900 text-white border-stone-900 font-bold"
                                    : showQuizResults && optIdx === q.correctAnswer
                                    ? "bg-emerald-50 border-emerald-300 text-emerald-900 font-bold"
                                    : "bg-white border-stone-200 text-stone-800 hover:bg-stone-100"
                                }`}
                              >
                                {option}
                              </button>
                            );
                          })}
                        </div>

                        {showQuizResults && (
                          <div className="mt-3 pt-3 border-t border-stone-200 text-[11px] text-stone-700 leading-relaxed">
                            <strong className="text-stone-900">Pedagogical Justification: </strong>
                            {q.explanation}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: CAPSTONE PROJECT & RUBRIC */}
        {/* ========================================================= */}
        {activeTab === "capstone" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
              <span>Capstone Project</span>
              <span>·</span>
              <span>Professional Assessment Deliverables</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
              Part J: OSINT Assessment of Fictional Platform LearnSphere
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Conduct a complete, non-intrusive passive OSINT assessment of LearnSphere using supplied records, domain
              registries, and web archives. Produce an evidence-backed intelligence product.
            </p>

            {/* Deliverables List */}
            <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
              <h3 className="text-xs font-extrabold text-stone-900 uppercase tracking-wide">
                7 Required Capstone Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs text-stone-700">
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 1: Intelligence Requirement:</strong> Define research questions, intended decisions, and approved boundaries.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 2: Public Asset Inventory:</strong> Supply domain names, DNS records, CT logs with confidence ratings.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 3: Source Reliability Assessment:</strong> Evaluate 8 source records, identifying circular reporting.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 4: Exposure Analysis:</strong> Document 5 observations relevant to external security posture.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 5: Intelligence Correlation Map:</strong> Diagram connecting domains, IP blocks, and cloud providers.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200">
                  <strong>Deliverable 6: Ethical & Legal Review:</strong> Data-minimization record and responsible disclosure protocols.
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 sm:col-span-2">
                  <strong>Deliverable 7: Final OSINT Report:</strong> Executive summary, collection log, corroborated findings, and defensive guidance.
                </div>
              </div>
            </div>

            {/* Grading Rubric */}
            <div className="rounded-2xl border border-stone-200 overflow-hidden">
              <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm">
                  Capstone Grading Rubric · 100% Comprehensive Scale
                </span>
                <span className="text-xs font-mono text-orange-400 font-bold">Academic Standard</span>
              </div>
              <div className="divide-y divide-stone-200 text-xs bg-white">
                {[
                  { criterion: "Intelligence question and scope", weight: "10%" },
                  { criterion: "Public asset inventory", weight: "15%" },
                  { criterion: "Source evaluation and corroboration", weight: "20%" },
                  { criterion: "Exposure analysis", weight: "15%" },
                  { criterion: "Relationship mapping and evidence quality", weight: "10%" },
                  { criterion: "Privacy, ethics and legal boundaries", weight: "10%" },
                  { criterion: "Recommendations and follow-up", weight: "10%" },
                  { criterion: "Report clarity and reproducibility", weight: "10%" },
                ].map((rub, idx) => (
                  <div key={idx} className="p-3 flex items-center justify-between hover:bg-stone-50">
                    <span className="font-bold text-stone-900">{rub.criterion}</span>
                    <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded">
                      {rub.weight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. FOOTER NAVIGATION (PREVIOUS & NEXT MODULE) */}
        <div className="mt-10 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => navigate("/learning/cybersecurity/methodology")}
            className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-xs font-bold text-stone-700 hover:border-orange-400 transition cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Previous: Module 5 (Methodology & RoE)</span>
          </button>

          <div className="text-right">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400">
              Up Next · Module 7
            </span>
            <h4 className="text-sm sm:text-base font-extrabold text-[#18181b]">
              Active Reconnaissance, Network Mapping & Technical Asset Discovery
            </h4>
          </div>

          <button
            onClick={() => navigate("/learning/cybersecurity/recon")}
            className="flex items-center gap-2 rounded-xl bg-[#18181b] px-4 py-2.5 text-xs font-bold text-white hover:bg-stone-800 transition cursor-pointer"
          >
            <span>Proceed to Module 7</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </main>
    </div>
  );
}
