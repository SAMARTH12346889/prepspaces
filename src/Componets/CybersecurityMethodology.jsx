import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Shield,
  FileText,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Scale,
  BookOpen,
  Layers,
  Terminal,
  ArrowRight,
  ArrowLeft,
  RefreshCw,
  Lock,
  Unlock,
  Eye,
  HelpCircle,
  Check,
  X,
  Info,
  ExternalLink,
  Award,
  Clock,
  Users,
  Building,
  ChevronRight,
  Download,
  Copy,
  FolderLock,
  PhoneCall,
  Server,
  Cloud,
  FileCheck,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import { useSyncedTopic } from "../utils/navigation";

export default function CybersecurityMethodology() {
  const navigate = useNavigate();

  // Primary navigation tabs
  const [selectedTopic, setSelectedTopic] = useSyncedTopic(5);
  const [activeTab, setActiveTab] = useState("theory");
  const [activeTheorySection, setActiveTheorySection] = useState("part-a");
  const [activeLab, setActiveLab] = useState(1);

  // -------------------------------------------------------------
  // LAB 1 STATE: Scoping & Asset Classification Matrix
  // -------------------------------------------------------------
  const initialScopeAssets = [
    {
      id: "asset-1",
      target: "api.finsecure.com (Production Core API)",
      type: "API Endpoint",
      category: "in-scope",
      userChoice: null,
      notes: "Direct customer banking backend hosted on dedicated AWS ECS cluster owned by FinSecure.",
      explanation: "IN-SCOPE: Fully owned by client, explicit business asset requiring authenticated and unauthenticated REST API testing.",
    },
    {
      id: "asset-2",
      target: "payment.stripe.com / checkout.stripe.com",
      type: "Third-Party SaaS",
      category: "out-of-scope",
      userChoice: null,
      notes: "Embedded payment processor iframe used for credit card processing.",
      explanation: "OUT-OF-SCOPE: Third-party SaaS infrastructure. Testing Stripe directly violates their Terms of Service and federal law without written Stripe authorization.",
    },
    {
      id: "asset-3",
      target: "staging-app.finsecure.internal (10.240.12.0/24)",
      type: "Internal Staging VPC",
      category: "in-scope",
      userChoice: null,
      notes: "Pre-production mirroring environment populated with synthetic mock data.",
      explanation: "IN-SCOPE: Safe testing ground ideal for invasive fuzzing, exploit payloads, and schema disruption without production downtime.",
    },
    {
      id: "asset-4",
      target: "finsecure-backups.s3.amazonaws.com",
      type: "Cloud Object Storage",
      category: "conditional-scope",
      userChoice: null,
      notes: "S3 bucket containing encrypted database snapshots. Bucket permissions must be tested.",
      explanation: "CONDITIONAL-SCOPE: Configuration & bucket ACL inspection permitted; active data deletion, brute-force downloading of multi-terabyte blobs, or disrupting AWS services strictly prohibited.",
    },
    {
      id: "asset-5",
      target: "ceo-personal-ipad@icloud.com / Executive Home Networks",
      type: "Personal Device / Network",
      category: "out-of-scope",
      userChoice: null,
      notes: "Home WiFi and personal devices of C-suite executives.",
      explanation: "OUT-OF-SCOPE: Personal property outside organizational corporate boundary; testing without individual consent violates federal wiretap & computer intrusion laws.",
    },
    {
      id: "asset-6",
      target: "auth.finsecure.com/oauth/v2/token",
      type: "Identity Microservice",
      category: "in-scope",
      userChoice: null,
      notes: "Custom JWT authentication gateway for customer and partner accounts.",
      explanation: "IN-SCOPE: High-priority target for token forgery, privilege escalation, and session fixation tests within defined rate limits.",
    },
  ];

  const [scopeAssets, setScopeAssets] = useState(initialScopeAssets);

  const handleClassifyAsset = (id, choice) => {
    setScopeAssets((prev) =>
      prev.map((item) => (item.id === id ? { ...item, userChoice: choice } : item))
    );
  };

  const resetLab1 = () => {
    setScopeAssets(initialScopeAssets);
  };

  const lab1Completed = scopeAssets.every((a) => a.userChoice !== null);
  const lab1CorrectCount = scopeAssets.filter((a) => a.userChoice === a.category).length;

  // -------------------------------------------------------------
  // LAB 2 STATE: RoE Clause Generator & Builder
  // -------------------------------------------------------------
  const [roeConfig, setRoeConfig] = useState({
    timeWindow: "off-hours",
    rateLimit: "medium",
    denialOfService: false,
    socialEngineering: false,
    credentialDumping: true,
    emergencyPhone: "+1 (800) 555-SEC-STOP",
    reportingSLA: "2hours",
  });

  const [copiedRoE, setCopiedRoE] = useState(false);

  const handleCopyRoE = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedRoE(true);
    setTimeout(() => setCopiedRoE(false), 2500);
  };

  // -------------------------------------------------------------
  // LAB 3 STATE: Methodology Selector & Phase Matcher
  // -------------------------------------------------------------
  const methodologyPhases = [
    {
      step: 1,
      title: "Pre-Engagement Interactions",
      framework: "PTES Phase 1",
      desc: "Scope boundary agreement, Rules of Engagement sign-off, emergency escalation contacts, and Letter of Authorization (LoA).",
      keyDoc: "Statement of Work (SOW) & RoE",
    },
    {
      step: 2,
      title: "Intelligence Gathering & OSINT",
      framework: "PTES Phase 2 / NIST Planning",
      desc: "Passive DNS harvesting, WHOIS, search engine dorking, employee email enumeration, and technology footprinting without invasive packets.",
      keyDoc: "Reconnaissance Attack Surface Catalog",
    },
    {
      step: 3,
      title: "Threat Modeling & Vulnerability Analysis",
      framework: "PTES Phase 3 & 4 / NIST Discovery",
      desc: "Architectural decomposition, port scanning, service version detection, automated banner grabbing, and flaw verification.",
      keyDoc: "Verified Vulnerability Matrix",
    },
    {
      step: 4,
      title: "Exploitation (Controlled Breach)",
      framework: "PTES Phase 5 / NIST Attack",
      desc: "Precision weaponization of confirmed weaknesses to establish initial foothold while strictly adhering to safety constraints.",
      keyDoc: "Proof of Concept (PoC) Log",
    },
    {
      step: 5,
      title: "Post-Exploitation & Risk Demonstration",
      framework: "PTES Phase 6 / NIST Analysis",
      desc: "Determining business impact, privilege escalation potential, sensitive data access proof (without exfiltration), and lateral trust paths.",
      keyDoc: "Impact & Tainted Asset Register",
    },
    {
      step: 6,
      title: "Reporting & Executive Debriefing",
      framework: "PTES Phase 7 / NIST Reporting",
      desc: "Executive summary, technical vulnerability findings with CVSSv3.1 scores, root-cause guidance, and defensive remediation roadmap.",
      keyDoc: "Formal Pentest Assessment Report",
    },
  ];

  const [selectedPhase, setSelectedPhase] = useState(0);

  // -------------------------------------------------------------
  // LAB 4 STATE: Legal Boundary & Authorization Validator
  // -------------------------------------------------------------
  const legalScenarios = [
    {
      id: "scen-1",
      title: "The Unlisted Development Subdomain",
      scenario:
        "While performing authorized reconnaissance on client.com (scoped to *.client.com), you discover dev-secret-portal.client.com pointing to an unauthenticated admin dashboard. The SOW lists all subdomains under *.client.com, but the client project manager never explicitly mentioned this server during kickoff.",
      options: [
        {
          label: "A. Exploit it immediately; *.client.com was explicitly written in the SOW scope.",
          isLegal: false,
          feedback:
            "Risky & unprofessional. While technically within the wildcard, surprising the client with untested legacy hardware may crash fragile legacy instances. Best practice requires notifying the client contact prior to invasive testing.",
        },
        {
          label: "B. Confirm the IP ownership via WHOIS / DNS, notify the client technical lead in writing, and proceed once confirmed in scope.",
          isLegal: true,
          feedback:
            "CORRECT (Compliant). Verifying infrastructure ownership ensures the subdomain hasn't been re-delegated to an un-scoped third-party AWS/Heroku host, protecting against unauthorized access under CFAA.",
        },
        {
          label: "C. Dump the database to prove it contains sensitive corporate records before reporting it.",
          isLegal: false,
          feedback:
            "CRIMINAL RISK. Exfiltrating sensitive database records exceeds the minimum data demonstration necessary and triggers data breach notifications under GDPR / state privacy laws.",
        },
      ],
      userAnswer: null,
    },
    {
      id: "scen-2",
      title: "The External Microservice Dependency (Auth0)",
      scenario:
        "You are testing an authorized customer portal. During password reset testing, you intercept requests sent to `https://client.auth0.com/oauth/token`. You want to test Auth0's rate limiting and token hashing algorithms.",
      options: [
        {
          label: "A. Launch a 10,000 req/sec brute-force attack against Auth0 to evaluate resilience.",
          isLegal: false,
          feedback:
            "ILLEGAL. Auth0 is a multi-tenant third-party SaaS provider. Testing their shared infrastructure without Auth0's direct written authorization violates Auth0's Terms of Service and CFAA 18 U.S.C. § 1030.",
        },
        {
          label: "B. Confine testing to the client's integration logic, redirect URIs, and JWT token handling on the client's own servers.",
          isLegal: true,
          feedback:
            "CORRECT (Compliant). Evaluating client-side authorization logic, state parameter validations, and token parsing is fully within scope without attacking Auth0's shared backend servers.",
        },
        {
          label: "C. Email Auth0 support asking them to ignore alarms while you run Metasploit against their load balancers.",
          isLegal: false,
          feedback:
            "INVALID. Third-party SaaS vendors require formalized vendor security assessment agreements signed by authorized corporate counsel, not impromptu support tickets.",
        },
      ],
      userAnswer: null,
    },
    {
      id: "scen-3",
      title: "The Signing Authority Trap",
      scenario:
        "A senior software engineering manager signs the Penetration Testing Authorization Letter and SOW for testing the company's flagship payment processing system. No C-suite or legal officers were involved.",
      options: [
        {
          label: "A. Proceed immediately; an engineering manager is an authorized organizational employee.",
          isLegal: false,
          feedback:
            "DANGEROUS. In corporate law, mid-level engineering managers rarely have contractual signing authority to bind the organization, permit system disruption, or indemnify security testers against legal prosecution.",
        },
        {
          label: "B. Halt testing until the Letter of Authorization is countersigned by an officer with corporate authority (VP, CTO, CISO, or General Counsel).",
          isLegal: true,
          feedback:
            "CORRECT (Compliant). Only officers with delegated corporate authority can legally grant consent to access computer systems under federal and state computer crime legislation.",
        },
        {
          label: "C. Ask the manager to sign a verbal NDA over a phone call.",
          isLegal: false,
          feedback:
            "FATAL ERROR. Verbal agreements offer zero protection in criminal or civil court if systems crash or law enforcement initiates an intrusion inquiry.",
        },
      ],
      userAnswer: null,
    },
  ];

  const [legalAnswers, setLegalAnswers] = useState(legalScenarios);

  const handleLegalAnswer = (scenarioId, optionIdx) => {
    setLegalAnswers((prev) =>
      prev.map((s) => (s.id === scenarioId ? { ...s, userAnswer: optionIdx } : s))
    );
  };

  const resetLab4 = () => {
    setLegalAnswers(legalScenarios);
  };

  // -------------------------------------------------------------
  // LAB 5 STATE: Emergency Escalation & Zero-Day Simulator
  // -------------------------------------------------------------
  const [escalationStep, setEscalationStep] = useState(0);
  const [incidentLog, setIncidentLog] = useState([]);

  const advanceEscalation = (actionKey, isGood, logMessage) => {
    setIncidentLog((prev) => [
      ...prev,
      {
        step: escalationStep + 1,
        time: new Date().toLocaleTimeString(),
        action: actionKey,
        isGood,
        message: logMessage,
      },
    ]);
    setEscalationStep((prev) => prev + 1);
  };

  const resetLab5 = () => {
    setEscalationStep(0);
    setIncidentLog([]);
  };

  // -------------------------------------------------------------
  // LAB 6 STATE: Bug Bounty Safe Harbor Inspector
  // -------------------------------------------------------------
  const bugBountyPolicies = [
    {
      id: "bb-1",
      program: "LearnSphere Global Bug Bounty (HackerOne)",
      action: "Researcher brute-forces 500,000 student passwords on production login endpoint at 200 req/sec.",
      status: "Violation",
      reason: "Exceeds rate limits, causes service degradation (DoS), and attempts unauthorized access to third-party student accounts.",
    },
    {
      id: "bb-2",
      program: "CloudFin Safe Harbor Program (Disclose.io Gold Standard)",
      action: "Researcher discovers an IDOR exposing invoices, verifies with 2 test accounts created by the researcher, and submits report without viewing real user data.",
      status: "Compliant (Protected by Safe Harbor)",
      reason: "Demonstrated impact using only researcher-controlled test accounts, preserved data confidentiality, and reported immediately via designated disclosure channel.",
    },
    {
      id: "bb-3",
      program: "FinSecure Public Disclosure Program",
      action: "Researcher finds an unauthenticated RCE on staging, drops a webshell, and posts screenshots with customer database tables on Twitter/X before notifying the company.",
      status: "Violation & Potential Legal Breach",
      reason: "Violates confidentiality, public disclosure embargo, and exceeds safe testing boundaries by exfiltrating/displaying production customer tables.",
    },
  ];

  // -------------------------------------------------------------
  // PART J: 12-Question Knowledge Check Quiz
  // -------------------------------------------------------------
  const quizQuestions = [
    {
      id: 1,
      question:
        "Under the U.S. Computer Fraud and Abuse Act (CFAA, 18 U.S.C. § 1030) and the Supreme Court precedent in Van Buren v. United States (2021), what constitutes 'exceeding authorized access'?",
      options: [
        "A. Violating a website's published Terms of Service while using an account you legitimately possess.",
        "B. Accessing a computer with authorization and then using such access to obtain or alter information in the computer that the accesser is not entitled to obtain or alter.",
        "C. Scanning open public ports on an Internet-facing IP without prior written consent.",
        "D. Reverse engineering an open-source security tool for defensive vulnerability analysis.",
      ],
      correctAnswer: 1,
      explanation:
        "In Van Buren v. United States (2021), the Supreme Court narrowed the CFAA scope, holding that 'exceeding authorized access' applies when an individual accesses areas of a computer system (files, databases, gates) to which their computer access credentials do not entitle them, rather than mere contractual or policy violations.",
    },
    {
      id: 2,
      question:
        "What is the primary operational distinction between the Penetration Testing Execution Standard (PTES) and the Open Source Security Testing Methodology Manual (OSSTMM 3.0)?",
      options: [
        "A. PTES focuses solely on web applications, whereas OSSTMM only covers physical facility locks.",
        "B. PTES structures the operational lifecycle across 7 procedural phases, while OSSTMM is an empirical, metrics-driven methodology focused on measuring operational security (Ravs) and operational separation.",
        "C. OSSTMM is exclusively a legal contract template, while PTES is an automated Python scanner.",
        "D. PTES requires automated exploit tools, while OSSTMM prohibits any use of computers.",
      ],
      correctAnswer: 1,
      explanation:
        "PTES defines the end-to-end 7-phase methodology from pre-engagement to reporting. OSSTMM 3.0 emphasizes empirical measurement, quantifying operational security through 'Ravs' (Risk Assessment Values) across operational vectors (human, physical, wireless, telecommunications, data networks).",
    },
    {
      id: 3,
      question:
        "Why is a 'Letter of Authorization' (LoA, colloquially termed the 'Get Out of Jail Free' letter) considered the most vital field document for an ethical hacker?",
      options: [
        "A. It grants the tester immunity from international treaties and local privacy statutes regardless of what occurs.",
        "B. It provides portable, verifiable proof of explicit authorization signed by a legally empowered corporate officer, establishing legitimate testing authority if challenged by law enforcement, hosting providers, or internal SOC teams.",
        "C. It serves as a substitute for an executive penetration test report at the conclusion of the engagement.",
        "D. It automatically disables the target organization's Intrusion Detection System (IDS).",
      ],
      correctAnswer: 1,
      explanation:
        "An LoA provides tangible, verifiable proof on corporate letterhead, signed by an authorized officer (CISO/VP/Legal), specifying tester names, IP addresses, dates, and target scope. It protects security personnel during active tests when questioned by corporate security, ISP abuse desks, or police.",
    },
    {
      id: 4,
      question:
        "According to major public cloud provider policies (such as AWS Customer Support Policy for Penetration Testing and Microsoft Cloud Pen Testing RoE), which of the following activities is STRICTLY PROHIBITED without explicit prior multi-party approval?",
      options: [
        "A. Vulnerability scanning against your own customer-managed EC2 virtual machine instances.",
        "B. Launching Denial of Service (DoS/DDoS) attacks against cloud shared infrastructure, multi-tenant hypervisors, or AWS/Azure DNS infrastructure.",
        "C. Authenticated testing of custom web applications running on Amazon ECS or Azure App Services.",
        "D. Inspecting your own AWS IAM policies and S3 bucket ACL configurations.",
      ],
      correctAnswer: 1,
      explanation:
        "Cloud providers permit security assessments against user-owned and user-managed cloud instances, but strictly prohibit stress testing, Denial of Service (DoS/DDoS), port scanning shared control-plane infrastructure, and hypervisor breakouts because they threaten other cloud tenants.",
    },
    {
      id: 5,
      question:
        "In a professional Rules of Engagement (RoE) document, what does an 'Emergency Stop Protocol' (or Kill Switch) dictate?",
      options: [
        "A. The automated script that deletes all penetration testing logs and exploit tools from the client's servers.",
        "B. A mandatory, immediate operational cessation of all testing activities upon the occurrence of predefined critical triggers (such as unexpected production outage, data corruption, or encountering a live third-party adversary), followed by instant notification to the primary contact.",
        "C. The procedure for terminating an employee whose workstation was compromised during social engineering.",
        "D. The protocol used by web servers to gracefully restart after a scheduled reboot.",
      ],
      correctAnswer: 1,
      explanation:
        "The Emergency Stop Protocol defines predetermined triggers (system instability, potential production outage, suspected active breach by a real malicious actor). It requires testers to immediately stop all probing, freeze logs, and contact the client escalation lead via out-of-band communication.",
    },
    {
      id: 6,
      question:
        "Under the UK Computer Misuse Act 1990 (CMA), which section explicitly criminalizes performing unauthorized acts with intent to impair, or with recklessness as to impairing, the operation of a computer (such as launching a destructive payload or DoS)?",
      options: [
        "A. Section 1 (Unauthorized access to computer material).",
        "B. Section 2 (Unauthorized access with intent to commit or facilitate commission of further offences).",
        "C. Section 3 (Unauthorized acts with intent to impair, or with recklessness as to impairing, operation of computer, etc.).",
        "D. Section 3A (Making, supplying or obtaining articles for use in computer misuse offences).",
      ],
      correctAnswer: 2,
      explanation:
        "Section 3 of the UK Computer Misuse Act 1990 specifically addresses unauthorized impairment of computer operations (e.g., crashing servers, altering data, DDoS). Testing without authorized scope or using reckless payloads that impair systems can be prosecuted under Section 3.",
    },
    {
      id: 7,
      question:
        "What is the key advantage of Gray-Box Testing over pure Black-Box Testing in enterprise application security assessments?",
      options: [
        "A. Gray-box testing is always completely free of charge and requires no tools.",
        "B. Gray-box testing mirrors a zero-knowledge opportunistic external hacker with 100% fidelity.",
        "C. By providing partial architectural knowledge, API documentation, and low-privileged test credentials, gray-box testing significantly increases testing efficiency and depth, eliminating wasted time on blind guessing.",
        "D. Gray-box testing eliminates the need to prepare a written Rules of Engagement document.",
      ],
      correctAnswer: 2,
      explanation:
        "Gray-box testing maximizes return on investment (ROI). With basic architectural documentation, API specifications, and standard user credentials, testers can focus directly on business logic vulnerabilities, access control bypasses, and data validation without spending 70% of billable hours guessing parameter names.",
    },
    {
      id: 8,
      question:
        "During a penetration test, a consultant uncovers an unauthenticated remote code execution (RCE) vulnerability on a production cluster processing live credit card transactions. What is the MANDATORY immediate action required by professional ethics and the RoE?",
      options: [
        "A. Execute a reverse shell, search for database passwords, and dump sample credit card numbers to prove the finding.",
        "B. Immediately halt invasive testing on that component, take screenshots of minimal evidence, encrypt the finding, and trigger the out-of-band Critical Vulnerability Escalation protocol within the agreed SLA (e.g., < 2 hours).",
        "C. Wait until the final report delivery in two weeks to present all findings together in the executive debrief.",
        "D. Tweet a redacted screenshot to warn other companies using the same software.",
      ],
      correctAnswer: 1,
      explanation:
        "Critical vulnerabilities (RCE, exposed sensitive customer databases) pose immediate danger. Professional RoE mandates immediate out-of-band notification (call + encrypted email) within 1-2 hours so defenders can apply emergency mitigations. Testers must NEVER exfiltrate real customer PII/PCI data.",
    },
    {
      id: 9,
      question:
        "Under Indian Information Technology Act 2000 (Amended 2008), which section prescribes punishment for hacking and dishonestly or fraudulently damaging computer systems or networks without permission of the owner?",
      options: [
        "A. Section 43 & Section 66 (Computer related offences, hacking, unauthorized copying, and denial of access).",
        "B. Section 10A (Validity of electronic contracts).",
        "C. Section 85 (Offences by companies).",
        "D. Section 90 (Power of State Government to make rules).",
      ],
      correctAnswer: 0,
      explanation:
        "Section 43 (penalties for damage to computer system without permission) and Section 66 (computer related offences / hacking) of the Indian IT Act 2000 establish stringent criminal penalties (up to 3 years imprisonment and fines) for unauthorized access, data theft, virus introduction, or disruption.",
    },
    {
      id: 10,
      question:
        "What does 'Gold Standard Safe Harbor' (promoted by Disclose.io and modern Bug Bounty programs) provide to ethical security researchers?",
      options: [
        "A. Financial bonuses paid out even if no vulnerabilities are discovered during the testing period.",
        "B. Comprehensive legal protection explicitly promising that the organization will not initiate legal action under anti-hacking laws (such as CFAA or DMCA Section 1201) against researchers who operate in good-faith compliance with the policy.",
        "C. Diplomatic immunity that prevents foreign governments from issuing subpoenas.",
        "D. Automatic certification as an authorized government security agency.",
      ],
      correctAnswer: 1,
      explanation:
        "Gold Standard Safe Harbor provides affirmative legal protection. The organization explicitly pledges not to pursue civil or criminal claims (under CFAA, DMCA §1201, or contract breaches) against security researchers acting in good faith according to the vulnerability disclosure program terms.",
    },
    {
      id: 11,
      question:
        "Why must a formal Statement of Work (SOW) specify the exact IP addresses or CIDR blocks from which the penetration testers will originate their traffic?",
      options: [
        "A. So that the client can completely turn off firewalls for those IP addresses and disable all security monitoring.",
        "B. So that the client's Security Operations Center (SOC) can differentiate authorized penetration testing activities from a genuine, concurrent cyberattack launched by a malicious actor.",
        "C. Because routers cannot route packets unless an SOW has been signed by an ISP.",
        "D. To ensure the tester's ISP does not charge bandwidth fees.",
      ],
      correctAnswer: 1,
      explanation:
        "Whitelisting tester source IPs allows the client's SOC and SIEM to correlate noisy test probes. If high-severity alerts originate from the tester's whitelisted IPs, the SOC knows it is an authorized drill; if identical attacks arrive from unknown IPs, the SOC can initiate immediate incident response against a real adversary.",
    },
    {
      id: 12,
      question:
        "What is the danger of relying solely on an informal 'Gentleman's Agreement' or email exchange rather than a fully executed Master Services Agreement (MSA) and Statement of Work (SOW)?",
      options: [
        "A. It makes the testing process faster and is favored by corporate lawyers.",
        "B. In the event of system failure, accidental data loss, or internal dispute, the tester has no contractual liability limitation, no formalized indemnity, and no documented legal defense against criminal computer intrusion allegations.",
        "C. It results in lower network latency during automated scans.",
        "D. It prevents the tester from using commercial penetration testing distributions such as Kali Linux.",
      ],
      correctAnswer: 1,
      explanation:
        "Informal agreements fail in court. Without a binding contract with explicit limitation of liability, mutual indemnification, defined scope, and authorized signatures, the security consultant is exposed to immense civil liability for business interruption and potential criminal prosecution under anti-hacking statutes.",
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
    <div className="min-h-screen bg-[#f6f4ee] text-[#18181b] antialiased selection:bg-[#f97316] selection:text-white">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-orange-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-12 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-8 md:px-8">
        {/* TOP MODULE NAVIGATION BAR */}
        <ModuleNav track="cybersecurity" currentModuleId="methodology" />

        {/* HERO BANNER CARD */}
        <header className="mb-8 rounded-3xl border border-[#e7e3da] bg-white/85 p-6 sm:p-8 backdrop-blur-xl shadow-xs">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-orange-50/90 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
              <Shield size={12} className="text-[#f97316]" />
              Prepspaces Cybersecurity Masterclass
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              Module 5 of 24
            </span>
            <span className="rounded-full bg-stone-100 border border-stone-200 px-3 py-1 text-[11px] font-mono font-medium text-stone-600">
              PTES · OSSTMM · NIST SP 800-115 · CFAA
            </span>
            <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono font-bold text-emerald-700">
              Beginner to Intermediate · 12–16 Hours
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#18181b]">
            Ethical Hacking Methodology, Scope Definition, Rules of Engagement & Legal Boundaries
          </h1>
          <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-4xl leading-relaxed">
            The defining difference between a cybercriminal and an ethical security professional is not the tools they wield, but <strong className="text-stone-900 font-bold">authorization, methodology, adherence to scope, and strict legal compliance</strong>. Master scoping engagements, structuring legally enforceable Rules of Engagement (RoE), navigating international statutory boundaries (CFAA, UK CMA, GDPR), and applying standards (PTES, OSSTMM, NIST SP 800-115).
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-stone-200/80">
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Duration</span>
              <span className="text-sm font-bold text-stone-900">12–16 Hours</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Practical Labs</span>
              <span className="text-sm font-bold text-stone-900">6 Interactive Labs</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Legal Scope</span>
              <span className="text-sm font-bold text-stone-900">CFAA · SOW · LoA · RoE</span>
            </div>
            <div className="p-3 rounded-2xl bg-stone-50/80 border border-stone-200/70">
              <span className="font-mono text-[11px] text-stone-500 uppercase block font-semibold">Capstone</span>
              <span className="text-sm font-bold text-stone-900">Full RoE Package & Rubric</span>
            </div>
          </div>
        </header>

        {/* WORKSPACE NAVIGATION TABS */}
        <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-3">
          {[
            { id: "theory", label: "Theory & Frameworks", icon: BookOpen },
            { id: "labs", label: "Interactive Labs (6)", icon: Terminal },
            { id: "casestudy", label: "Applied Case Study", icon: Building },
            { id: "quiz", label: "Knowledge Check (12 Qs)", icon: HelpCircle },
            { id: "capstone", label: "Capstone Project & Rubric", icon: Award },
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
                <Icon size={16} className={isActive ? "text-[#f97316]" : "text-stone-400"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* TAB 1: THEORY & FRAMEWORKS */}
        {/* ========================================================= */}
        {activeTab === "theory" && (
          <div className="space-y-8">
            {/* Quick Pill Selector for Theory Sections */}
            <div className="flex flex-wrap gap-2 p-3 bg-white rounded-2xl border border-stone-200">
              {[
                { id: "part-a", label: "Part A: Objectives" },
                { id: "part-b", label: "Part B: Methodologies (PTES/OSSTMM)" },
                { id: "part-c", label: "Part C: Black / Gray / White-Box" },
                { id: "part-d", label: "Part D: Scoping Architecture & Cloud" },
                { id: "part-e", label: "Part E: Rules of Engagement (RoE)" },
                { id: "part-f", label: "Part F: Legal & Statutory Frameworks" },
                { id: "part-g", label: "Part G: Disclosure & Safe Harbor" },
                { id: "part-l", label: "Part L: Academic References" },
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

            {/* PART A: LEARNING OBJECTIVES */}
            {(activeTheorySection === "part-a" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                  <span>Part A</span>
                  <span>·</span>
                  <span>Pedagogical Outcomes</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                  1. Comprehensive Learning Objectives
                </h2>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  Aligned with graduate cybersecurity programs (Stanford CS155, MIT 6.858, SANS SEC560), upon completing
                  this module students will possess the operational and legal competence to:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      title: "Differentiate Professional Methodologies",
                      desc: "Evaluate and implement the 7 phases of the Penetration Testing Execution Standard (PTES), the empirical metrics of OSSTMM 3.0, and technical assessment workflows from NIST SP 800-115.",
                    },
                    {
                      title: "Formulate Legally Defensible Scopes",
                      desc: "Precisely define In-Scope and Out-of-Scope boundaries across network CIDRs, fully qualified domain names (FQDNs), cloud tenants, and third-party APIs.",
                    },
                    {
                      title: "Draft Complete Rules of Engagement (RoE)",
                      desc: "Author comprehensive RoE documents covering testing schedules, prohibited aggressive techniques, rate limiting, and emergency escalation matrices.",
                    },
                    {
                      title: "Master Legal & Statutory Boundaries",
                      desc: "Navigate federal and international computer intrusion statutes including the U.S. CFAA (18 U.S.C. § 1030) post-Van Buren, UK Computer Misuse Act 1990, and Indian IT Act 2000.",
                    },
                    {
                      title: "Cloud Provider Compliance & Authorization",
                      desc: "Ensure rigorous adherence to AWS, Microsoft Azure, and Google Cloud penetration testing policies and shared responsibility constraints.",
                    },
                    {
                      title: "Execute Emergency Stop & Critical Disclosure",
                      desc: "Manage high-severity discoveries (zero-days, unauthenticated RCE, live production compromise) with rapid out-of-band PGP notification protocols under tight SLAs.",
                    },
                  ].map((obj, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl border border-stone-200 bg-stone-50/60 flex items-start gap-3"
                    >
                      <div className="w-7 h-7 rounded-lg bg-orange-100 text-[#ea580c] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-900">{obj.title}</h4>
                        <p className="text-[12px] text-stone-600 mt-1 leading-relaxed">{obj.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* PART B: METHODOLOGICAL FRAMEWORKS */}
            {(activeTheorySection === "part-b" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part B</span>
                    <span>·</span>
                    <span>Industry Frameworks</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    2. Methodological Standards: PTES, OSSTMM, and NIST SP 800-115
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    Hacking without a methodology is unstructured chaos. Industry-recognized standards establish rigor,
                    repeatability, thoroughness, and auditability.
                  </p>
                </div>

                {/* PTES 7 PHASES ACCORDION-STYLE TABLE */}
                <div className="rounded-2xl border border-stone-200 overflow-hidden">
                  <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm">
                      Penetration Testing Execution Standard (PTES) · The 7 Canonical Phases
                    </span>
                    <span className="text-[11px] font-mono text-orange-400 font-semibold">Standard of Choice</span>
                  </div>
                  <div className="divide-y divide-stone-200 bg-white">
                    {[
                      {
                        phase: "Phase 1: Pre-Engagement Interactions",
                        focus: "Scoping, RoE, Legal Authorization & Logistics",
                        detail:
                          "Align expectations, define asset boundaries, sign SOW/NDA/LoA, establish communication channels, schedule maintenance windows, and configure emergency hotlines.",
                      },
                      {
                        phase: "Phase 2: Intelligence Gathering (Reconnaissance)",
                        focus: "Passive & Active Open Source Intelligence (OSINT)",
                        detail:
                          "Footprint the target organization. Identify domain structures, public IP blocks, mail servers, leaked credentials, code repositories (GitHub), and technology stacks without alert generation.",
                      },
                      {
                        phase: "Phase 3: Threat Modeling & Vulnerability Analysis",
                        focus: "Asset Valuation & Attack Path Discovery",
                        detail:
                          "Analyze gathered intelligence to conceptualize adversary capabilities. Map attack vectors against high-value assets and conduct automated/manual vulnerability scans to uncover exposed software flaws.",
                      },
                      {
                        phase: "Phase 4: Exploitation (Precision Breach)",
                        focus: "Bypassing Defenses & Proof of Concept",
                        detail:
                          "Controlled weaponization of confirmed vulnerabilities to gain an initial foothold. Must avoid collateral damage, unintended denial of service, or destabilizing production systems.",
                      },
                      {
                        phase: "Phase 5: Post-Exploitation",
                        focus: "Impact Determination, Lateral Movement & Persistence",
                        detail:
                          "Determine value of compromised system. Emulate advanced threats through privilege escalation, credential harvesting from memory (LSASS), pivoting across internal subnets, and identifying sensitive business records without exfiltrating confidential customer data.",
                      },
                      {
                        phase: "Phase 6: Reporting & Debrief",
                        focus: "Executive Summary & Technical Remediation",
                        detail:
                          "Deliver high-impact documentation tailored to two audiences: an Executive Summary outlining business risks, financial exposure, and strategic fixes, and a Technical Report with reproducible PoCs, CVSS scores, and patch guidance.",
                      },
                      {
                        phase: "Phase 7: Cleanup & Remediation Verification",
                        focus: "System Sanitization & Re-Testing",
                        detail:
                          "Ensure all artifacts (temporary user accounts, test scripts, webshells, staging files) are purged from target systems. Provide subsequent re-testing to validate that defensive patches were implemented correctly.",
                      },
                    ].map((p, idx) => (
                      <div key={idx} className="p-4 hover:bg-stone-50/80 transition flex flex-col sm:flex-row sm:items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-stone-100 border border-stone-200 text-stone-900 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                          0{idx + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <h4 className="text-xs sm:text-sm font-extrabold text-[#18181b]">{p.phase}</h4>
                            <span className="text-[11px] font-mono text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded-md font-semibold">
                              {p.focus}
                            </span>
                          </div>
                          <p className="text-xs text-stone-600 mt-1 leading-relaxed">{p.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* OSSTMM vs NIST SP 800-115 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">OSSTMM 3.0</span>
                    <h3 className="text-sm font-extrabold text-stone-900 mt-1">
                      Open Source Security Testing Methodology Manual
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      Maintained by ISECOM, OSSTMM focuses on scientific measurement. Rather than just finding bugs, it
                      quantifies operational security posture across 5 channels (Human, Physical, Wireless,
                      Telecommunications, and Data Networks) using metrics called <strong>RAVs (Risk Assessment Values)</strong>.
                    </p>
                    <div className="mt-3 text-[11px] text-stone-500 font-mono">
                      Core strength: Objective, quantitative security audits and regulatory compliance verification.
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <span className="text-[11px] font-mono font-bold text-stone-700 uppercase">NIST SP 800-115</span>
                    <h3 className="text-sm font-extrabold text-stone-900 mt-1">
                      Technical Guide to Information Security Testing
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      Published by the National Institute of Standards and Technology. Organizes technical assessments
                      into 3 structured phases: <strong>Planning</strong> (scoping, RoE), <strong>Execution</strong> (discovery,
                      attack, vulnerability analysis), and <strong>Post-Execution</strong> (reporting, mitigation validation).
                    </p>
                    <div className="mt-3 text-[11px] text-stone-500 font-mono">
                      Core strength: Federal agency compliance (FISMA, FedRAMP, DoD) and formal risk management.
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* PART C: TESTING PERSPECTIVES */}
            {(activeTheorySection === "part-c" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part C</span>
                    <span>·</span>
                    <span>Assessment Types</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    3. Black-Box vs. Gray-Box vs. White-Box Testing Perspectives
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    The degree of architectural knowledge and credential access provided to testers drastically influences
                    the assessment’s scope, duration, cost, and vulnerability yield.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="p-5 rounded-2xl border border-stone-200 bg-white flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-stone-900 text-white flex items-center justify-center font-bold text-xs mb-3">
                        BB
                      </div>
                      <h3 className="text-sm font-extrabold text-stone-900">Black-Box (Zero Knowledge)</h3>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        Testers receive only a company name or starting URL. Simulates an opportunistic external attacker
                        with no insider access or source code.
                      </p>
                      <div className="mt-4 space-y-2 text-[11px] text-stone-600">
                        <div>
                          <strong className="text-stone-900">Advantage:</strong> Authentic real-world attacker fidelity.
                        </div>
                        <div>
                          <strong className="text-stone-900">Drawback:</strong> High time spent on reconnaissance; low depth
                          behind authentication barriers.
                        </div>
                        <div>
                          <strong className="text-stone-900">Effort Split:</strong> 60% Recon, 40% Testing.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border-2 border-orange-400 bg-orange-50/30 flex flex-col justify-between relative shadow-xs">
                    <span className="absolute -top-3 right-4 bg-[#ea580c] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                      Industry Standard (Recommended)
                    </span>
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-orange-100 text-[#ea580c] flex items-center justify-center font-bold text-xs mb-3">
                        GB
                      </div>
                      <h3 className="text-sm font-extrabold text-stone-900">Gray-Box (Partial Knowledge)</h3>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        Testers receive architecture diagrams, API schemas, and low-privileged test user credentials.
                        Simulates a compromised user or curious insider.
                      </p>
                      <div className="mt-4 space-y-2 text-[11px] text-stone-600">
                        <div>
                          <strong className="text-stone-900">Advantage:</strong> Maximum ROI. Testers bypass trivial login gates
                          to evaluate business logic, IDORs, and privilege escalation.
                        </div>
                        <div>
                          <strong className="text-stone-900">Drawback:</strong> Requires client preparation of test accounts and test data.
                        </div>
                        <div>
                          <strong className="text-stone-900">Effort Split:</strong> 15% Recon, 85% Deep Testing.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 bg-white flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-stone-200 text-stone-800 flex items-center justify-center font-bold text-xs mb-3">
                        WB
                      </div>
                      <h3 className="text-sm font-extrabold text-stone-900">White-Box (Full Knowledge / Crystal-Box)</h3>
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                        Testers have complete access to source code repositories, infrastructure configurations, database schemas,
                        and developer interviews.
                      </p>
                      <div className="mt-4 space-y-2 text-[11px] text-stone-600">
                        <div>
                          <strong className="text-stone-900">Advantage:</strong> Most comprehensive coverage; uncovers hidden logic flaws,
                          hardcoded credentials, and cryptographic defects.
                        </div>
                        <div>
                          <strong className="text-stone-900">Drawback:</strong> High cognitive load, requires deep code auditing skills.
                        </div>
                        <div>
                          <strong className="text-stone-900">Effort Split:</strong> Static Analysis (SAST) + Dynamic Analysis (DAST).
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* PART D: SCOPING ARCHITECTURE & CLOUD */}
            {(activeTheorySection === "part-d" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part D</span>
                    <span>·</span>
                    <span>Scoping Architecture</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    4. Scoping Architecture, Target Delineation & Cloud Constraints
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    A catastrophic mistake in penetration testing is testing an asset you don’t have legal permission to test.
                    Scoping agreements establish clear, unambiguous operational boundaries.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl border border-emerald-200 bg-emerald-50/30">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase">
                      <CheckCircle2 size={15} />
                      <span>Legitimate In-Scope Target Formats</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-xs text-stone-700 leading-relaxed list-disc list-inside">
                      <li>
                        <strong>Dedicated IPv4/IPv6 CIDR Blocks:</strong> e.g., <code className="bg-white px-1.5 py-0.5 rounded text-stone-900 font-mono">198.51.100.0/24</code> owned exclusively by the client.
                      </li>
                      <li>
                        <strong>Fully Qualified Domain Names (FQDNs):</strong> e.g., <code className="bg-white px-1.5 py-0.5 rounded text-stone-900 font-mono">api.client.com</code>, <code className="bg-white px-1.5 py-0.5 rounded text-stone-900 font-mono">portal.client.com</code>.
                      </li>
                      <li>
                        <strong>Dedicated Cloud Tenant Workloads:</strong> User-provisioned EC2, Azure VMs, or GCP Compute instances.
                      </li>
                      <li>
                        <strong>Mobile & Client Applications:</strong> Client-published binaries (.apk, .ipa) decompiled in a sandbox.
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl border border-rose-200 bg-rose-50/30">
                    <div className="flex items-center gap-2 text-xs font-bold text-rose-800 uppercase">
                      <AlertOctagon size={15} />
                      <span>Critical Out-of-Scope Traps</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-xs text-stone-700 leading-relaxed list-disc list-inside">
                      <li>
                        <strong>Third-Party SaaS Integrations:</strong> Auth0, Stripe, Salesforce, Workday, Twilio without vendor authorization.
                      </li>
                      <li>
                        <strong>Shared Multi-Tenant Infrastructure:</strong> Cloud provider DNS, CDN edge servers (Cloudflare, Akamai), hypervisors.
                      </li>
                      <li>
                        <strong>Personal Devices & Home Networks:</strong> Employee home routers or mobile devices (BYOD).
                      </li>
                      <li>
                        <strong>Co-located Data Center Neighbors:</strong> IP addresses adjacent to the client CIDR owned by separate companies.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Cloud Provider Policy Deep Dive */}
                <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#ea580c] uppercase">
                    <Cloud size={16} />
                    <span>Public Cloud Provider Penetration Testing Policies</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                    Modern cloud providers (AWS, Microsoft Azure, Google Cloud) allow customers to conduct security assessments
                    against their user-hosted resources <strong>without prior approval</strong>, provided they comply with strict rules:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-[11px]">
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">AWS Policy</strong>
                      <span className="text-stone-600 mt-1 block">
                        Permits testing of EC2, RDS, Lambda, CloudFront. Strictly prohibits DoS, DDoS, DNS zone walking, and port flooding against Route 53 or AWS shared services.
                      </span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">Microsoft Azure RoE</strong>
                      <span className="text-stone-600 mt-1 block">
                        Allows testing of user VMs and Azure App Services. Forbids generating attacks exceeding standard business traffic rates, accessing another tenant's data, or hypervisor escapes.
                      </span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">Google Cloud (GCP)</strong>
                      <span className="text-stone-600 mt-1 block">
                        Permits testing of Compute Engine, GKE, and Cloud Run. Forbids targeting Google-managed control planes or shared multi-tenant storage tiers without enterprise permission.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* PART E: RULES OF ENGAGEMENT */}
            {(activeTheorySection === "part-e" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part E</span>
                    <span>·</span>
                    <span>Rules of Engagement</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    5. Rules of Engagement (RoE) Document Formulation
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    While the Statement of Work (SOW) defines what will be tested and the financial terms, the <strong>Rules of Engagement (RoE)</strong>
                    details exactly <em>how, when, and under what operational guardrails</em> testing will occur.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "1. Testing Time Windows & Freeze Periods",
                      detail:
                        "Defines whether testing occurs during business hours (testing real-time SOC response) or off-hours/weekends (minimizing business impact). Outlines freeze periods (e.g., Black Friday for e-commerce, end-of-quarter billing cycles) when testing is banned.",
                    },
                    {
                      title: "2. Prohibited Attack Methodologies",
                      detail:
                        "Explicitly enumerates forbidden techniques: physical social engineering, phishing executive leadership without CISO sign-off, persistent Denial of Service (SYN floods, Slowloris), mass data wiping, and ransomware deployment.",
                    },
                    {
                      title: "3. Source IP Whitelisting & Correlation",
                      detail:
                        "Lists the static public IP addresses from which the security team will initiate all scans and payloads. Allows the client SOC to differentiate legitimate testing traffic from active concurrent criminal attacks.",
                    },
                    {
                      title: "4. Communication Channels & Escalation Matrix",
                      detail:
                        "Designates primary technical contacts, corporate sponsors, and secondary escalation paths. Mandates secure, PGP-encrypted communication channels for transmitting sensitive vulnerability reports.",
                    },
                    {
                      title: "5. Emergency Stop Protocol (The Kill Switch)",
                      detail:
                        "Mandatory procedure triggered if unexpected downtime, data corruption, or service degradation occurs. Immediately halts all testing, freezes test logs, and notifies the client within 15 minutes.",
                    },
                    {
                      title: "6. Critical / Zero-Day Vulnerability SLA",
                      detail:
                        "Specifies that discovering an actively exploitable unauthenticated critical flaw (RCE, unauthenticated database dump) mandates out-of-band notification within 1 to 2 hours, rather than waiting for the final report.",
                    },
                  ].map((clause, idx) => (
                    <div key={idx} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50">
                      <h4 className="text-xs font-extrabold text-stone-900">{clause.title}</h4>
                      <p className="text-[12px] text-stone-600 mt-1.5 leading-relaxed">{clause.detail}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* PART F: STATUTORY & LEGAL FRAMEWORKS */}
            {(activeTheorySection === "part-f" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part F</span>
                    <span>·</span>
                    <span>Statutory Law</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    6. Statutory, Contractual, and Legal Frameworks
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    Penetration testing without valid authorization is a felony under modern legal jurisdictions. Understanding
                    statutory frameworks protects professionals from catastrophic criminal and civil liability.
                  </p>
                </div>

                <div className="space-y-4">
                  {/* CFAA */}
                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-extrabold text-stone-900">
                        United States: Computer Fraud and Abuse Act (CFAA, 18 U.S.C. § 1030)
                      </h3>
                      <span className="text-[11px] font-mono font-bold text-[#ea580c] bg-orange-50 px-2 py-0.5 rounded">
                        Federal Law
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      The CFAA makes it a federal crime to access a protected computer &ldquo;without authorization&rdquo; or to
                      &ldquo;exceed authorized access.&rdquo; In the landmark Supreme Court decision <em>Van Buren v. United States (2021)</em>,
                      the Court narrowed the statute, ruling that an individual does not &ldquo;exceed authorized access&rdquo; merely by
                      violating an employer policy or website Terms of Service. Instead, liability requires accessing parts of the
                      computer system (e.g., restricted folders, databases) that the user was never granted access credentials to enter.
                    </p>
                    <div className="mt-3 p-3 bg-white rounded-xl border border-stone-200 text-[11px] text-stone-700">
                      <strong>Department of Justice (DOJ) 2022 Policy Revision:</strong> The DOJ updated its prosecutorial guidelines,
                      directing federal prosecutors NOT to charge good-faith security researchers conducting legitimate, good-faith
                      vulnerability research and coordinated disclosure.
                    </div>
                  </div>

                  {/* UK CMA */}
                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-extrabold text-stone-900">
                        United Kingdom: Computer Misuse Act 1990 (CMA)
                      </h3>
                      <span className="text-[11px] font-mono font-bold text-stone-700 bg-stone-200 px-2 py-0.5 rounded">
                        UK Legislation
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      Enacted to protect computer integrity. Contains key provisions:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 text-[11px]">
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <strong>Section 1:</strong> Unauthorized access to computer material (up to 2 years prison).
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <strong>Section 2:</strong> Unauthorized access with intent to commit further offences (up to 5 years).
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-stone-200">
                        <strong>Section 3:</strong> Unauthorized acts with intent to impair computer operation / DoS (up to 10 years).
                      </div>
                    </div>
                  </div>

                  {/* Indian IT Act */}
                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-extrabold text-stone-900">
                        India: Information Technology Act 2000 (Amended 2008)
                      </h3>
                      <span className="text-[11px] font-mono font-bold text-stone-700 bg-stone-200 px-2 py-0.5 rounded">
                        Indian IT Law
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      <strong>Section 43:</strong> Civil penalty and compensation for unauthorized access, data download/extraction,
                      introduction of malware, or denial of access to authorized users. <br />
                      <strong>Section 66:</strong> Criminalization of hacking—punishes anyone who dishonestly or fraudulently commits
                      any act referred to in Section 43 with imprisonment up to 3 years or fine up to ₹5 lakh.
                    </p>
                  </div>
                </div>

                {/* The 4 Vital Authorization Instruments */}
                <div className="pt-4 border-t border-stone-200">
                  <h3 className="text-xs font-mono font-bold uppercase text-stone-500 tracking-wider">
                    The 4 Mandatory Legal Instruments Before Any Test
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-3 text-xs">
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">1. MSA</strong>
                      <span className="text-[11px] text-stone-600 mt-1 block">
                        Master Services Agreement: Governs high-level legal terms, indemnity, limitation of liability, and jurisdiction.
                      </span>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">2. SOW</strong>
                      <span className="text-[11px] text-stone-600 mt-1 block">
                        Statement of Work: Specifies technical scope, target assets, deliverables, timelines, and payment terms.
                      </span>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">3. NDA</strong>
                      <span className="text-[11px] text-stone-600 mt-1 block">
                        Non-Disclosure Agreement: Protects discovered vulnerabilities, architectural trade secrets, and client data confidentiality.
                      </span>
                    </div>
                    <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">4. LoA</strong>
                      <span className="text-[11px] text-stone-600 mt-1 block">
                        Letter of Authorization: Portable &lsquo;Get Out of Jail Free&rsquo; letter on corporate letterhead signed by authorized C-suite officer.
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* PART G: VDP & BUG BOUNTIES */}
            {(activeTheorySection === "part-g" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part G</span>
                    <span>·</span>
                    <span>Vulnerability Disclosure</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    7. Vulnerability Disclosure Programs (VDP), Bug Bounties & Safe Harbor
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    Security researchers frequently discover vulnerabilities outside contracted penetration tests. Coordinated
                    Vulnerability Disclosure (CVD) frameworks and Safe Harbor provisions provide legal safety and ethical pathways.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <h3 className="text-xs font-extrabold text-stone-900 uppercase tracking-wide">
                      Coordinated vs. Full vs. Discretionary Disclosure
                    </h3>
                    <div className="mt-3 space-y-3 text-xs text-stone-600">
                      <div>
                        <strong className="text-stone-900">Coordinated Vulnerability Disclosure (CVD):</strong> The researcher notifies
                        the vendor privately, granting a reasonable remediation window (typically 90 days, or 7 days for active exploitation)
                        before publishing an advisory. Industry gold standard (CERT/CC, Google Project Zero).
                      </div>
                      <div>
                        <strong className="text-stone-900">Full Disclosure:</strong> Publishing raw exploit details immediately without
                        prior vendor notice. Leaves defenders with zero days to patch, directly exposing end users to cybercrime.
                      </div>
                      <div>
                        <strong className="text-stone-900">Discretionary / Private Disclosure:</strong> Sharing solely with the vendor or
                        commercial bug bounty broker (HackerOne, Bugcrowd) with no intent to publish.
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
                    <h3 className="text-xs font-extrabold text-stone-900 uppercase tracking-wide">
                      Disclose.io Gold Standard Safe Harbor
                    </h3>
                    <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                      Safe Harbor is a binding commitment published by an organization that promises:
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-stone-700 list-disc list-inside">
                      <li>
                        <strong>No Legal Action:</strong> The organization will not initiate civil lawsuits or contact law enforcement under anti-hacking laws (CFAA).
                      </li>
                      <li>
                        <strong>DMCA Exemption:</strong> Waives Digital Millennium Copyright Act (DMCA §1201) anti-circumvention claims against security research.
                      </li>
                      <li>
                        <strong>Good-Faith Protection:</strong> Legally protects researchers if they avoid privacy violations, data destruction, and service interruption.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {/* PART L: UNIVERSITY CITATIONS */}
            {(activeTheorySection === "part-l" || activeTheorySection === "all") && (
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#ea580c]">
                    <span>Part L</span>
                    <span>·</span>
                    <span>Authoritative References</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
                    8. Academic Curricula & Authoritative Standards
                  </h2>
                  <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                    This curriculum synthesizes peer-reviewed computer security research, international standards, and top-tier university curricula:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      inst: "Stanford University",
                      course: "CS 155: Computer and Network Security",
                      focus: "Software vulnerabilities, ethical assessment methodologies, and defensive boundaries.",
                      url: "https://cs155.stanford.edu/",
                    },
                    {
                      inst: "MIT EECS",
                      course: "6.858: Computer Systems Security",
                      focus: "Privilege separation, threat models, isolation boundaries, and safe execution environments.",
                      url: "https://css.csail.mit.edu/6.858/",
                    },
                    {
                      inst: "Penetration Testing Standard",
                      course: "PTES Technical Guidelines v1.0",
                      focus: "Standardized 7-phase execution standard for enterprise penetration testing.",
                      url: "http://www.pentest-standard.org/",
                    },
                    {
                      inst: "NIST (U.S. Dept of Commerce)",
                      course: "SP 800-115: Technical Guide to Information Security Testing",
                      focus: "Planning, execution, and reporting standards for federal security assessments.",
                      url: "https://csrc.nist.gov/pubs/sp/800/115/final",
                    },
                    {
                      inst: "ISECOM",
                      course: "OSSTMM 3.0: Open Source Security Testing Methodology",
                      focus: "Empirical operational security metrics and trustworthy verification.",
                      url: "https://www.isecom.org/OSSTMM.3.pdf",
                    },
                    {
                      inst: "US Dept of Justice",
                      course: "DOJ Policy on CFAA Good-Faith Security Research (2022)",
                      focus: "Prosecutorial guidelines and safe harbor protections for ethical researchers.",
                      url: "https://www.justice.gov/opa/pr/department-justice-announces-new-policy-charging-cases-under-computer-fraud-and-abuse-act",
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
                          <span>Explore Syllabus / Document</span>
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
                { id: 1, name: "Lab 1: Scoping Matrix" },
                { id: 2, name: "Lab 2: RoE Builder" },
                { id: 3, name: "Lab 3: Methodology Matcher" },
                { id: 4, name: "Lab 4: Legal Validator" },
                { id: 5, name: "Lab 5: Emergency Escalation" },
                { id: 6, name: "Lab 6: Safe Harbor Inspector" },
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

            {/* LAB 1: SCOPING MATRIX */}
            {activeLab === 1 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Interactive Exercise 1</span>
                    <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                      Target Scoping & Asset Classification Matrix
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      As lead security architect, review the candidate targets submitted by FinSecure Corporation.
                      Classify each asset as <strong>In-Scope</strong>, <strong>Out-of-Scope</strong>, or <strong>Conditional-Scope</strong>.
                    </p>
                  </div>
                  <button
                    onClick={resetLab1}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 transition cursor-pointer"
                  >
                    <RefreshCw size={13} />
                    <span>Reset</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {scopeAssets.map((asset) => {
                    const isAnswered = asset.userChoice !== null;
                    const isCorrect = asset.userChoice === asset.category;
                    return (
                      <div
                        key={asset.id}
                        className={`p-4 rounded-2xl border transition ${
                          !isAnswered
                            ? "border-stone-200 bg-stone-50/50"
                            : isCorrect
                            ? "border-emerald-300 bg-emerald-50/20"
                            : "border-rose-300 bg-rose-50/20"
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-extrabold text-[#18181b] font-mono">{asset.target}</span>
                              <span className="text-[10px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded font-mono">
                                {asset.type}
                              </span>
                            </div>
                            <p className="text-[11px] text-stone-600 mt-1">{asset.notes}</p>
                          </div>

                          {/* Classification Buttons */}
                          <div className="flex items-center gap-1.5 shrink-0 mt-2 sm:mt-0">
                            {[
                              { label: "In-Scope", val: "in-scope", color: "hover:bg-emerald-100 text-emerald-800" },
                              { label: "Conditional", val: "conditional-scope", color: "hover:bg-amber-100 text-amber-800" },
                              { label: "Out-of-Scope", val: "out-of-scope", color: "hover:bg-rose-100 text-rose-800" },
                            ].map((btn) => (
                              <button
                                key={btn.val}
                                onClick={() => handleClassifyAsset(asset.id, btn.val)}
                                className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                                  asset.userChoice === btn.val
                                    ? "bg-stone-900 text-white border-stone-900"
                                    : `border-stone-300 bg-white ${btn.color}`
                                }`}
                              >
                                {btn.label}
                              </button>
                            ))}
                          </div>
                        </div>

                        {isAnswered && (
                          <div className="mt-3 pt-3 border-t border-stone-200/80 flex items-start gap-2">
                            {isCorrect ? (
                              <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                            ) : (
                              <AlertTriangle size={15} className="text-rose-600 shrink-0 mt-0.5" />
                            )}
                            <p className="text-[11px] text-stone-700 leading-relaxed">{asset.explanation}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {lab1Completed && (
                  <div className="p-4 rounded-2xl bg-stone-900 text-white flex items-center justify-between">
                    <div>
                      <span className="text-xs text-orange-400 font-bold uppercase font-mono">Scoping Result</span>
                      <h4 className="text-sm font-extrabold mt-0.5">
                        {lab1CorrectCount} of {scopeAssets.length} Assets Correctly Categorized
                      </h4>
                    </div>
                    <span className="text-xs font-mono font-bold bg-white/10 px-3 py-1.5 rounded-lg">
                      {Math.round((lab1CorrectCount / scopeAssets.length) * 100)}% Accuracy
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* LAB 2: ROE BUILDER & CLAUSE GENERATOR */}
            {activeLab === 2 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Interactive Exercise 2</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Rules of Engagement (RoE) Builder & Clause Generator
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Configure operational parameters to automatically synthesize a legally compliant, contractual RoE document.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Parameter Controls */}
                  <div className="space-y-4 p-5 rounded-2xl border border-stone-200 bg-stone-50/50">
                    <h4 className="text-xs font-extrabold text-stone-900 uppercase">1. Operational Parameters</h4>

                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">Testing Time Windows</label>
                      <select
                        value={roeConfig.timeWindow}
                        onChange={(e) => setRoeConfig({ ...roeConfig, timeWindow: e.target.value })}
                        className="w-full text-xs font-mono p-2 rounded-xl border border-stone-300 bg-white"
                      >
                        <option value="off-hours">Off-Hours Only (Weeknights 22:00–06:00 UTC & Weekends)</option>
                        <option value="business-hours">Business Hours (09:00–18:00 UTC - Tests Active SOC Response)</option>
                        <option value="24-7">24/7 Continuous Testing Window</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">Traffic Rate Limiting</label>
                      <select
                        value={roeConfig.rateLimit}
                        onChange={(e) => setRoeConfig({ ...roeConfig, rateLimit: e.target.value })}
                        className="w-full text-xs font-mono p-2 rounded-xl border border-stone-300 bg-white"
                      >
                        <option value="conservative">Conservative (Max 10 req/sec - Low Risk of Disruption)</option>
                        <option value="medium">Standard (Max 50 req/sec - Balanced Assessment)</option>
                        <option value="unrestricted">Unthrottled (Simulation of High-Volume Attacker)</option>
                      </select>
                    </div>

                    <div className="space-y-2 pt-2">
                      <label className="text-xs font-bold text-stone-700 block">Prohibited & Allowed Techniques</label>
                      <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={roeConfig.denialOfService}
                          onChange={(e) => setRoeConfig({ ...roeConfig, denialOfService: e.target.checked })}
                          className="rounded text-orange-600"
                        />
                        <span>Denial of Service (DoS / Stress Testing) Permitted</span>
                      </label>

                      <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={roeConfig.socialEngineering}
                          onChange={(e) => setRoeConfig({ ...roeConfig, socialEngineering: e.target.checked })}
                          className="rounded text-orange-600"
                        />
                        <span>Phishing / Social Engineering of Employees Permitted</span>
                      </label>

                      <label className="flex items-center gap-2 text-xs text-stone-700 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={roeConfig.credentialDumping}
                          onChange={(e) => setRoeConfig({ ...roeConfig, credentialDumping: e.target.checked })}
                          className="rounded text-orange-600"
                        />
                        <span>Memory Credential Dumping (LSASS / Mimikatz) Permitted</span>
                      </label>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-stone-700 block mb-1">Emergency Kill Switch Hotline</label>
                      <input
                        type="text"
                        value={roeConfig.emergencyPhone}
                        onChange={(e) => setRoeConfig({ ...roeConfig, emergencyPhone: e.target.value })}
                        className="w-full text-xs font-mono p-2 rounded-xl border border-stone-300 bg-white"
                      />
                    </div>
                  </div>

                  {/* Generated RoE Contract Preview */}
                  <div className="p-5 rounded-2xl border border-stone-200 bg-stone-900 text-stone-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                        <span className="text-xs font-mono text-orange-400 font-bold uppercase">
                          Contract Clause · Annex B (RoE)
                        </span>
                        <button
                          onClick={() =>
                            handleCopyRoE(
                              `RULES OF ENGAGEMENT (RoE) AGREEMENT\n\n1. TIMING: Testing authorized under: ${roeConfig.timeWindow}.\n2. RATE LIMIT: Maximum throughput throttled to: ${roeConfig.rateLimit}.\n3. PROHIBITIONS: DoS allowed: ${roeConfig.denialOfService}; Social Engineering: ${roeConfig.socialEngineering}; Credential Dumping: ${roeConfig.credentialDumping}.\n4. EMERGENCY ESCALATION: Testers shall halt all activity immediately upon calling ${roeConfig.emergencyPhone} if service disruption occurs.`
                            )
                          }
                          className="flex items-center gap-1 text-[11px] font-mono text-stone-400 hover:text-white transition cursor-pointer"
                        >
                          <Copy size={12} />
                          <span>{copiedRoE ? "Copied!" : "Copy Clause"}</span>
                        </button>
                      </div>

                      <pre className="text-[11px] font-mono whitespace-pre-wrap mt-4 leading-relaxed text-stone-300">
{`§ 4.2 OPERATIONAL RULES OF ENGAGEMENT

A. SCHEDULE & MAINTENANCE:
All active security probing shall be confined strictly to [${roeConfig.timeWindow.toUpperCase()}]. Testers shall pause execution during quarterly financial freezes.

B. TRAFFIC SHAPING:
Automated scanners (Nmap, Burp Suite, Nuclei) shall not exceed [${roeConfig.rateLimit.toUpperCase()}] to safeguard application availability.

C. BOUNDARY & METHODOLOGY RESTRICTIONS:
- Denial of Service (DoS): ${roeConfig.denialOfService ? "EXPLICITLY AUTHORIZED" : "STRICTLY PROHIBITED"}
- Social Engineering / Phishing: ${roeConfig.socialEngineering ? "AUTHORIZED WITH PRIOR CISO NOTICE" : "STRICTLY PROHIBITED"}
- In-Memory Credential Harvesting: ${roeConfig.credentialDumping ? "AUTHORIZED IN NON-PROD" : "PROHIBITED"}

D. EMERGENCY STOP PROTOCOL:
If unexpected latency exceeds 2,500ms or production services fail, testers shall halt all tools and immediately dial the emergency kill switch hotline at ${roeConfig.emergencyPhone}.`}
                      </pre>
                    </div>

                    <div className="mt-4 pt-3 border-t border-stone-800 text-[10px] font-mono text-stone-500">
                      Legally enforceable under contract law. Governed by Master Services Agreement.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 3: METHODOLOGY SELECTOR & PHASE MATCHER */}
            {activeLab === 3 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Interactive Exercise 3</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    PTES Phase Architecture & Artifact Explorer
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Explore the 7 sequential phases of the Penetration Testing Execution Standard. Inspect each phase&apos;s
                    core deliverables, operational tools, and required documentation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {methodologyPhases.map((phase, idx) => (
                    <button
                      key={phase.step}
                      onClick={() => setSelectedPhase(idx)}
                      className={`p-3.5 rounded-2xl border text-left transition cursor-pointer ${
                        selectedPhase === idx
                          ? "border-orange-500 bg-orange-50/50 shadow-xs"
                          : "border-stone-200 bg-white hover:bg-stone-50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-[#ea580c]">Step 0{phase.step}</span>
                        <span className="text-[10px] font-mono text-stone-500">{phase.framework}</span>
                      </div>
                      <h4 className="text-xs font-extrabold text-stone-900 mt-1">{phase.title}</h4>
                      <p className="text-[11px] text-stone-600 mt-1 line-clamp-2">{phase.desc}</p>
                    </button>
                  ))}
                </div>

                {/* Detailed Phase Inspection Card */}
                <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50/70">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200">
                    <div>
                      <span className="text-[11px] font-mono text-[#ea580c] font-bold uppercase">
                        Phase 0{methodologyPhases[selectedPhase].step} Focus
                      </span>
                      <h3 className="text-lg font-black text-stone-900 mt-0.5">
                        {methodologyPhases[selectedPhase].title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono font-bold bg-stone-900 text-white px-3 py-1 rounded-lg">
                      Key Deliverable: {methodologyPhases[selectedPhase].keyDoc}
                    </span>
                  </div>

                  <p className="text-xs text-stone-700 mt-4 leading-relaxed">
                    {methodologyPhases[selectedPhase].desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-[11px]">
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">Standard of Care</strong>
                      <span className="text-stone-600 mt-0.5 block">
                        Adherence to strict evidentiary integrity, timestamped logs, and non-disclosure obligations.
                      </span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-stone-200">
                      <strong className="text-stone-900 block font-bold">Risk Management Control</strong>
                      <span className="text-stone-600 mt-0.5 block">
                        Continuous synchronization with client technical leads via daily standup communications.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* LAB 4: LEGAL BOUNDARY & AUTHORIZATION VALIDATOR */}
            {activeLab === 4 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Interactive Exercise 4</span>
                    <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                      Legal Boundary & Authorization Dilemma Simulator
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      Assess real-world scenarios testing the boundary between authorized security testing and criminal liability
                      under the CFAA, UK Computer Misuse Act, and corporate contract law.
                    </p>
                  </div>
                  <button
                    onClick={resetLab4}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 transition cursor-pointer"
                  >
                    <RefreshCw size={13} />
                    <span>Reset</span>
                  </button>
                </div>

                <div className="space-y-6">
                  {legalAnswers.map((scenario) => (
                    <div key={scenario.id} className="p-5 rounded-2xl border border-stone-200 bg-stone-50/50 space-y-3">
                      <div>
                        <span className="text-[11px] font-mono text-[#ea580c] font-bold uppercase">Case Study</span>
                        <h4 className="text-sm font-extrabold text-stone-900 mt-0.5">{scenario.title}</h4>
                        <p className="text-xs text-stone-700 mt-1 leading-relaxed">{scenario.scenario}</p>
                      </div>

                      <div className="space-y-2 pt-2">
                        {scenario.options.map((opt, idx) => {
                          const isSelected = scenario.userAnswer === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => handleLegalAnswer(scenario.id, idx)}
                              className={`w-full text-left p-3 rounded-xl border text-xs transition cursor-pointer ${
                                isSelected
                                  ? opt.isLegal
                                    ? "bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold"
                                    : "bg-rose-50 border-rose-400 text-rose-950 font-semibold"
                                  : "bg-white border-stone-200 text-stone-800 hover:bg-stone-50"
                              }`}
                            >
                              <div className="flex items-start justify-between gap-2">
                                <span>{opt.label}</span>
                                {isSelected && (
                                  <span
                                    className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded font-mono ${
                                      opt.isLegal ? "bg-emerald-200 text-emerald-900" : "bg-rose-200 text-rose-900"
                                    }`}
                                  >
                                    {opt.isLegal ? "LEGAL / COMPLIANT" : "ILLEGAL / HIGH RISK"}
                                  </span>
                                )}
                              </div>
                              {isSelected && (
                                <p className="mt-2 text-[11px] text-stone-600 font-normal leading-relaxed border-t border-stone-200 pt-2">
                                  <strong>Legal Analysis:</strong> {opt.feedback}
                                </p>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LAB 5: EMERGENCY ESCALATION SIMULATOR */}
            {activeLab === 5 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Interactive Exercise 5</span>
                    <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                      Live Incident: Critical Zero-Day Discovery & Emergency Escalation
                    </h3>
                    <p className="text-xs text-stone-600 mt-1">
                      During active authorized testing on <code>api.finsecure.com</code>, your tool discovers an unauthenticated
                      SQL injection on a microservice endpoint that permits arbitrary operating system command execution (RCE).
                    </p>
                  </div>
                  <button
                    onClick={resetLab5}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-bold text-stone-700 transition cursor-pointer"
                  >
                    <RefreshCw size={13} />
                    <span>Restart Simulation</span>
                  </button>
                </div>

                {escalationStep === 0 && (
                  <div className="p-5 rounded-2xl border-2 border-amber-300 bg-amber-50/40 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase">
                      <AlertTriangle size={16} />
                      <span>Alert: Unauthenticated Root RCE Discovered on Production DB Host</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      You executed <code>id</code> and received <code>uid=0(root) gid=0(root)</code>. You have verified the flaw.
                      What is your immediate tactical action?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={() =>
                          advanceEscalation(
                            "Emergency Halt & Screenshot Minimum Evidence",
                            true,
                            "CORRECT. Ceased probing immediately, captured minimal non-destructive evidence (hostname, date, minimal proof), avoided touching database tables."
                          )
                        }
                        className="p-3 bg-white rounded-xl border border-stone-300 text-left hover:border-emerald-500 transition cursor-pointer"
                      >
                        <strong className="text-xs text-stone-900 block font-bold">Option 1: Cease Probing & Freeze State</strong>
                        <span className="text-[11px] text-stone-600 mt-1 block">
                          Immediately stop all scanning on this host. Capture minimal proof of concept screenshot without dumping customer tables.
                        </span>
                      </button>

                      <button
                        onClick={() =>
                          advanceEscalation(
                            "Full Database Exfiltration",
                            false,
                            "FATAL ERROR. Exfiltrating customer tables triggers GDPR/CCPA data breach liabilities and exceeds minimal demonstration of vulnerability."
                          )
                        }
                        className="p-3 bg-white rounded-xl border border-stone-300 text-left hover:border-rose-500 transition cursor-pointer"
                      >
                        <strong className="text-xs text-stone-900 block font-bold">Option 2: Dump Customer Database</strong>
                        <span className="text-[11px] text-stone-600 mt-1 block">
                          Download 10,000 credit card records to prove high severity to executive management in the final report.
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {escalationStep === 1 && (
                  <div className="p-5 rounded-2xl border-2 border-orange-300 bg-orange-50/40 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#ea580c] uppercase">
                      <PhoneCall size={16} />
                      <span>Step 2: Emergency Out-of-Band Notification</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      Evidence is secured locally on an encrypted VeraCrypt volume. How do you notify FinSecure management?
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={() =>
                          advanceEscalation(
                            "Direct Call + PGP Encrypted Advisory",
                            true,
                            "CORRECT. Contacted designated Primary Emergency Lead via phone, followed immediately by PGP-encrypted vulnerability brief with reproduction steps."
                          )
                        }
                        className="p-3 bg-white rounded-xl border border-stone-300 text-left hover:border-emerald-500 transition cursor-pointer"
                      >
                        <strong className="text-xs text-stone-900 block font-bold">Option 1: Phone + PGP Encrypted Dispatch</strong>
                        <span className="text-[11px] text-stone-600 mt-1 block">
                          Call the designated emergency contact from the RoE, then transmit encrypted remediation details via pre-shared PGP key.
                        </span>
                      </button>

                      <button
                        onClick={() =>
                          advanceEscalation(
                            "Plaintext Slack Message in Public Channel",
                            false,
                            "RISK. Posting zero-day RCE details in an unencrypted general chat channel exposes the flaw to untrusted staff and compromised tokens."
                          )
                        }
                        className="p-3 bg-white rounded-xl border border-stone-300 text-left hover:border-rose-500 transition cursor-pointer"
                      >
                        <strong className="text-xs text-stone-900 block font-bold">Option 2: Post on General Company Slack</strong>
                        <span className="text-[11px] text-stone-600 mt-1 block">
                          Paste the exploit command directly in the public #general Slack channel for quick visibility.
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                {escalationStep >= 2 && (
                  <div className="p-5 rounded-2xl border border-emerald-300 bg-emerald-50/40 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase">
                      <CheckCircle2 size={16} />
                      <span>Emergency Escalation Completed Professionally</span>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      FinSecure engineering applied an emergency hotfix to the microservice within 45 minutes of your notification.
                      Testing resumed on staging with zero production downtime or customer data exposure.
                    </p>
                  </div>
                )}

                {/* Incident Event Log */}
                {incidentLog.length > 0 && (
                  <div className="p-4 rounded-2xl bg-stone-900 text-stone-200">
                    <div className="text-xs font-mono text-orange-400 font-bold uppercase mb-2">
                      Operational Incident Log (Audit Trail)
                    </div>
                    <div className="space-y-2 text-[11px] font-mono">
                      {incidentLog.map((log, idx) => (
                        <div key={idx} className="flex items-start gap-2 border-b border-stone-800 pb-2">
                          <span className="text-stone-500">[{log.time}]</span>
                          <span className={log.isGood ? "text-emerald-400" : "text-rose-400 font-bold"}>
                            {log.action}:
                          </span>
                          <span className="text-stone-300">{log.message}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* LAB 6: BUG BOUNTY SAFE HARBOR INSPECTOR */}
            {activeLab === 6 && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs space-y-6">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Interactive Exercise 6</span>
                  <h3 className="text-xl font-extrabold text-[#18181b] mt-0.5">
                    Bug Bounty Safe Harbor & Policy Scope Inspector
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Evaluate candidate research activities against published Vulnerability Disclosure Program (VDP) policies
                    to determine whether activities fall under legal Safe Harbor protection.
                  </p>
                </div>

                <div className="space-y-4">
                  {bugBountyPolicies.map((bb) => (
                    <div key={bb.id} className="p-4 rounded-2xl border border-stone-200 bg-stone-50/50 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="space-y-1 flex-1">
                        <span className="text-[11px] font-mono font-bold text-[#ea580c]">{bb.program}</span>
                        <h4 className="text-xs font-bold text-stone-900">{bb.action}</h4>
                        <p className="text-[11px] text-stone-600 leading-relaxed mt-1">
                          <strong>Analysis:</strong> {bb.reason}
                        </p>
                      </div>

                      <span
                        className={`shrink-0 text-xs font-mono font-bold px-3 py-1 rounded-lg ${
                          bb.status.includes("Compliant")
                            ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                            : "bg-rose-100 text-rose-800 border border-rose-300"
                        }`}
                      >
                        {bb.status}
                      </span>
                    </div>
                  ))}
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
              <span>Enterprise Scoping & RoE Negotiation</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
              Case Study: FinSecure Global Enterprise Pre-Engagement Negotiation
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Examine the complete pre-engagement lifecycle of a real-world financial technology platform facing a high-stakes
              annual compliance penetration test.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60 space-y-3">
                <h3 className="text-xs font-extrabold text-stone-900 uppercase">Organizational Profile</h3>
                <ul className="text-xs text-stone-700 space-y-2 list-disc list-inside leading-relaxed">
                  <li><strong>Target:</strong> FinSecure Global Banking & Wealth Management.</li>
                  <li><strong>Infrastructure:</strong> Hybrid AWS (EKS, Aurora PostgreSQL) and on-premises SWIFT banking gateway.</li>
                  <li><strong>Regulatory Mandates:</strong> SOC 2 Type II, PCI-DSS v4.0, and ISO 27001.</li>
                  <li><strong>Lead Assessor:</strong> Apex Cyber Defense Consulting (External Red Team).</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60 space-y-3">
                <h3 className="text-xs font-extrabold text-stone-900 uppercase">Core Scoping Conflict Points</h3>
                <ul className="text-xs text-stone-700 space-y-2 list-disc list-inside leading-relaxed">
                  <li>FinSecure requested testing on their primary production banking portal during Friday night traffic peaks.</li>
                  <li>Marketing wanted to exclude staging because &ldquo;it is not an exact duplicate.&rdquo;</li>
                  <li>The payment tokenization gateway is operated by a third-party payment partner (WorldPay).</li>
                </ul>
              </div>
            </div>

            {/* Negotiation Resolution Matrix */}
            <div className="rounded-2xl border border-stone-200 overflow-hidden mt-4">
              <div className="bg-stone-900 text-white p-3 font-bold text-xs uppercase font-mono">
                Negotiation Resolution & Agreed Technical Scope
              </div>
              <div className="divide-y divide-stone-200 text-xs bg-white">
                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-stone-900 block font-bold">1. Production vs. Staging Testing</strong>
                    <span className="text-stone-600 text-[11px]">
                      Aggressive automated fuzzing, vulnerability exploit payloads, and schema disruption allocated strictly to Staging (mirroring production). Only passive, non-destructive authenticated verification authorized on Production.
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold shrink-0">
                    RESOLVED
                  </span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-stone-900 block font-bold">2. Third-Party Gateway Boundary</strong>
                    <span className="text-stone-600 text-[11px]">
                      Direct probing of WorldPay endpoints excluded. Testing confined exclusively to FinSecure&apos;s API integration handlers, HMAC signature generation, and webhook receiver logic.
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold shrink-0">
                    RESOLVED
                  </span>
                </div>

                <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <strong className="text-stone-900 block font-bold">3. Emergency Contact & Out-of-Band Channel</strong>
                    <span className="text-stone-600 text-[11px]">
                      24/7 dedicated escalation hotline configured with FinSecure VP of Infrastructure and CISO. PGP key exchange verified for daily encrypted status bulletins.
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold shrink-0">
                    RESOLVED
                  </span>
                </div>
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
                <span className="text-[11px] font-mono font-bold text-[#ea580c] uppercase">Knowledge Assessment</span>
                <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-0.5">
                  Part J: 12-Question Technical & Legal Knowledge Check
                </h2>
                <p className="text-xs text-stone-600 mt-1">
                  Test your mastery of hacking methodologies, scoping definitions, rules of engagement, and statutory law.
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
                  <span className="text-xs font-mono font-bold text-orange-400 uppercase">Assessment Score</span>
                  <h3 className="text-xl font-extrabold mt-0.5">
                    {calculateScore()} / {quizQuestions.length} Questions Correct
                  </h3>
                  <p className="text-xs text-stone-300 mt-1">
                    {calculateScore() >= 10
                      ? "Outstanding! You possess professional-grade comprehension of hacking methodologies and legal boundaries."
                      : calculateScore() >= 8
                      ? "Solid understanding. Review the detailed pedagogical explanations below to sharpen edge-case legal nuances."
                      : "Recommended review: Re-read Parts B, E, and F to reinforce legal statutory knowledge before entering testing engagements."}
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
              <span>Professional Engagement Deliverables</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#18181b] mt-1">
              Part K: Comprehensive Pre-Engagement Agreement & RoE Package
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Synthesize all learning into an industry-grade, legally binding pre-engagement documentation package for a
              multi-cloud enterprise client. Your package must satisfy both technical engineering and corporate legal scrutiny.
            </p>

            {/* Deliverables List */}
            <div className="p-5 rounded-2xl border border-stone-200 bg-stone-50/60">
              <h3 className="text-xs font-extrabold text-stone-900 uppercase tracking-wide">
                10 Required Capstone Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs text-stone-700">
                <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2">
                  <FileText size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <strong>1. Executive Assessment Scope Brief:</strong> High-level business rationale, test objectives, and target business units.
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2">
                  <Scale size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <strong>2. Master Services Agreement (MSA) Rider:</strong> Legal limitations of liability, mutual indemnification, and jurisdiction.
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2">
                  <FileCheck size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <strong>3. Statement of Work (SOW):</strong> Formal scope boundary definitions, billable milestones, and deliverable schedule.
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2">
                  <Award size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <strong>4. Letter of Authorization (LoA):</strong> Portable &lsquo;Get Out of Jail Free&rsquo; letter on corporate letterhead signed by authorized CISO/VP.
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2">
                  <Terminal size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <strong>5. Technical Target Inventory:</strong> Specific IPv4/IPv6 CIDRs, FQDNs, API schemas, and mobile app SHA256 hashes.
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2">
                  <Cloud size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <strong>6. Cloud Provider Attestation:</strong> AWS / Azure PenTest policy compliance checklist verifying customer ownership.
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2">
                  <Lock size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <strong>7. Rules of Engagement (RoE) Document:</strong> Testing timeframes, rate limits, prohibited exploits, and freeze periods.
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2">
                  <PhoneCall size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <strong>8. Communication & Escalation Matrix:</strong> 24/7 emergency stop hotline, PGP key fingerprints, and call chains.
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2">
                  <AlertTriangle size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <strong>9. Critical / Zero-Day Notification SLA:</strong> Out-of-band rapid disclosure protocol (&lt; 2-hour SLA for RCE/DB compromise).
                  </div>
                </div>
                <div className="p-3 bg-white rounded-xl border border-stone-200 flex items-start gap-2">
                  <FolderLock size={16} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <strong>10. Evidence Storage & Data Destruction:</strong> AES-256 encrypted storage, chain of custody, and post-test sanitization protocol.
                  </div>
                </div>
              </div>
            </div>

            {/* 8-Criterion 100% Evaluation Rubric Table */}
            <div className="rounded-2xl border border-stone-200 overflow-hidden">
              <div className="bg-stone-900 text-white p-4 flex items-center justify-between">
                <span className="font-bold text-xs sm:text-sm">
                  8-Criterion Granular Evaluation Rubric · 100% Comprehensive Scale
                </span>
                <span className="text-xs font-mono text-orange-400 font-bold">Academic Standard</span>
              </div>
              <div className="divide-y divide-stone-200 text-xs bg-white">
                {[
                  {
                    crit: "1. Legal Authorization & Signatory Validity",
                    weight: "15%",
                    desc: "Letter of Authorization (LoA) and MSA signed by legally empowered officer (CISO/VP/Legal); explicit indemnification and statutory protections.",
                  },
                  {
                    crit: "2. Scoping Precision & Boundary Demarcation",
                    weight: "15%",
                    desc: "Unambiguous demarcation of In-Scope vs Out-of-Scope CIDR blocks, FQDNs, microservices, and exclusion of third-party SaaS APIs.",
                  },
                  {
                    crit: "3. Public Cloud Compliance & Architecture",
                    weight: "10%",
                    desc: "Compliance with AWS Customer PenTest Policy / Azure RoE, shared responsibility verification, and hypervisor protection measures.",
                  },
                  {
                    crit: "4. Rules of Engagement & Operational Safety",
                    weight: "15%",
                    desc: "Thorough testing windows, rate limits, freeze period definitions, and explicit prohibition of destructive exploits/DoS.",
                  },
                  {
                    crit: "5. Methodological Rigor (PTES / NIST SP 800-115)",
                    weight: "15%",
                    desc: "Clear alignment with the 7 PTES phases, repeatable vulnerability verification steps, and defined testing procedures.",
                  },
                  {
                    crit: "6. Emergency Stop Protocol & Incident Escalation",
                    weight: "15%",
                    desc: "Clear kill switch triggers (service degradation, unexpected downtime), 24/7 escalation matrix, and out-of-band PGP channels.",
                  },
                  {
                    crit: "7. Zero-Day & Critical Vulnerability Rapid SLA",
                    weight: "10%",
                    desc: "Enforceable SLA (< 2 hours) for reporting critical flaws, non-destructive minimal evidence preservation, and no data dumping.",
                  },
                  {
                    crit: "8. Data Protection & Evidence Sanitization",
                    weight: "5%",
                    desc: "AES-256 encryption at rest, secure transit protocols, and formalized post-engagement evidence destruction verification.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-50">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <strong className="text-stone-900 font-bold">{item.crit}</strong>
                      </div>
                      <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#ea580c] bg-orange-50 px-2.5 py-1 rounded-md shrink-0">
                      Weight: {item.weight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. FOOTER NAVIGATION (PREVIOUS & NEXT MODULE) */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e3da] pt-6">
          <button
            onClick={() => navigate("/learning/cybersecurity/threat-modeling")}
            className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-xs font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>Previous: Module 4 (Threat Modeling & Risk)</span>
          </button>

          <button
            onClick={() => navigate("/learning/cybersecurity/osint")}
            className="flex items-center gap-2 rounded-2xl bg-[#ea580c] px-5 py-3 text-xs font-bold text-white hover:bg-orange-600 transition shadow-xs cursor-pointer"
          >
            <span>Next: Module 6 (OSINT & Passive Recon)</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
