/**
 * Shared SEO, AEO, and GEO content source of truth for PrepSpaces.
 * Consumed by runtime React pages (/ai-interview, /about, /guides, /guides/:slug),
 * SeoManager.jsx, and scripts/prerender.js so visible copy and JSON-LD stay synchronized.
 */

export const BASE_URL = "https://prepspaces.com";

export const BRAND_INFO = {
  name: "PrepSpaces",
  url: BASE_URL,
  logo: `${BASE_URL}/logo-mark.png`,
  email: "support@prepspaces.com",
  instagram: "https://www.instagram.com/prepspaces/",
  tagline: "AI Interview Practice & Technical Systems Learning Platform",
  courseCount: 10,
  moduleCount: 216,
  questionsPerSession: 7,
};

export const AUTHORITATIVE_CITATIONS = [
  {
    title: "NIST Cybersecurity Framework (CSF) 2.0 & SP 800 Series",
    publisher: "National Institute of Standards and Technology",
    url: "https://csrc.nist.gov/publications/sp",
    context: "Referenced in Cybersecurity, Cloud Security, IAM, and Zero Trust interview modules.",
  },
  {
    title: "OWASP Top 10 Web Application Security Risks",
    publisher: "OWASP Foundation",
    url: "https://owasp.org/www-project-top-ten/",
    context: "Used as a primary engineering benchmark in Application Security and Threat Modeling tracks.",
  },
  {
    title: "IETF RFC Standards Index (TCP, QUIC, HTTP/3, DNSSEC, TLS 1.3)",
    publisher: "Internet Engineering Task Force (IETF)",
    url: "https://datatracker.ietf.org/",
    context: "Grounded protocol specifications across Computer Networks and Distributed Systems modules.",
  },
  {
    title: "MIT OpenCourseWare — Operating Systems & Distributed Systems",
    publisher: "Massachusetts Institute of Technology",
    url: "https://ocw.mit.edu/",
    context: "Academic foundation for MIT xv6 kernel labs, scheduling, virtual memory, and Raft/Paxos design.",
  },
  {
    title: "The Linux Kernel Documentation",
    publisher: "kernel.org",
    url: "https://www.kernel.org/doc/html/latest/",
    context: "Authoritative reference for syscalls, cgroups v2, epoll, filesystems, and Linux diagnostics.",
  },
  {
    title: "Google Search Central — Creating Helpful, Reliable, People-First Content",
    publisher: "Google Developers",
    url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    context: "Editorial clarity, technical accuracy, and structured data alignment standards.",
  },
];

export const AI_INTERVIEW_COURSE_LINKS = [
  { id: "ai-engineering", title: "AI Engineering & Generative AI", modules: 24, route: "/learning/ai", summary: "Transformers, LLMs, RAG, vector search, agents, evaluation, and AI system design." },
  { id: "system-design", title: "System Design Masterclass", modules: 24, route: "/learning/system-design", summary: "Capacity estimation, caching, sharding, Raft/Paxos consensus, Kafka, and scalability." },
  { id: "operating-systems", title: "Operating Systems Masterclass", modules: 24, route: "/learning/os", summary: "CPU scheduling, virtual memory, concurrency, deadlocks, IPC, and Linux internals." },
  { id: "computer-networks", title: "Computer Networks Masterclass", modules: 24, route: "/learning/networks", summary: "OSI/TCP-IP, BGP routing, TCP congestion control, QUIC/HTTP-3, DNS, and TLS 1.3." },
  { id: "cybersecurity", title: "Cybersecurity Masterclass", modules: 24, route: "/learning/cybersecurity", summary: "STRIDE threat modeling, OWASP Top 10, IAM, PKI cryptography, SIEM, and defense." },
  { id: "devops", title: "DevOps & SRE Track", modules: 12, route: "/learning/devops/linux", summary: "Linux administration, Git workflows, Docker, Kubernetes, Terraform, CI/CD, and SLOs." },
  { id: "cloud", title: "Cloud Computing Track", modules: 13, route: "/learning/cloud", summary: "AWS, Azure, GCP networking, compute, S3/EBS storage, IAM, and FinOps architecture." },
  { id: "machine-learning", title: "Machine Learning Master Course", modules: 24, route: "/learning/machine-learning/intro", summary: "Regression, XGBoost/LightGBM, SVM, validation, clustering, Optuna, SHAP, and ML ops." },
  { id: "data-engineering", title: "Data Engineering Master Course", modules: 23, route: "/learning/data-engineering/intro", summary: "SQL internals, ETL/ELT, Spark, Kafka, Airflow, dbt, Iceberg/Delta lakehouses, and CDC." },
  { id: "blockchain", title: "Blockchain & Decentralized Systems", modules: 24, route: "/learning/blockchain", summary: "SHA-256 cryptography, EVM, Solidity, DeFi, Layer 2 rollups, security audits, and Solana." },
];

export const AI_INTERVIEW_PAGE = {
  route: "/ai-interview",
  title: "AI Interview Practice — Free Online AI Mock Interview Platform | PrepSpaces",
  description:
    "Practice realistic voice-based technical AI mock interviews across 10 engineering courses and 216 modules. Get instant rubric scores (1–10), expected answer breakdowns, and structured interview reports on PrepSpaces.",
  keywords:
    "AI Interview Practice, Free AI Interview, AI Mock Interview, Online AI Interview Practice, AI Interview Preparation, Technical Mock Interview, AI Interview for Freshers, AI Job Interview Practice, PrepSpaces",
  directDefinition:
    "PrepSpaces AI Interview Practice is a live, browser-based technical mock interview simulator covering 10 computer science and software engineering tracks (216 curriculum modules). Candidates select a full track or specific module, complete a 7-question spoken interview with real-time speech transcription and proctoring checks, and receive per-question 1–10 rubric ratings alongside ideal expected answers.",
  howItWorksSteps: [
    {
      step: "01",
      title: "Select Course & Focus Scope",
      detail:
        "Choose any of the 10 unlocked engineering tracks and target either a single module (for focused revision) or All Modules (for comprehensive full-track coverage).",
    },
    {
      step: "02",
      title: "Complete Camera & Mic Preflight",
      detail:
        "Verify microphone input and webcam readiness directly in your browser before entering the timed session room, with fullscreen proctoring safeguards active.",
    },
    {
      step: "03",
      title: "Listen & Respond Using Spoken Voice",
      detail:
        "Each of the 7 non-repeating technical questions is displayed cleanly as text and spoken aloud via AI voice synthesis, followed by live speech-to-text capture.",
    },
    {
      step: "04",
      title: "Automated 1–10 Hiring Rubric Evaluation",
      detail:
        "Your spoken transcript is evaluated against technical depth, architectural trade-offs, and key concept focus areas to generate an accurate 1–10 score.",
    },
    {
      step: "05",
      title: "Review Your Question-by-Question Report",
      detail:
        "Inspect overall rating, per-question feedback, your recorded answer, and an ideal expected answer breakdown to close knowledge gaps before real hiring loops.",
    },
  ],
  audiences: [
    {
      title: "Freshers & CS Students",
      detail:
        "Build verbal confidence explaining Operating Systems, Computer Networks, Machine Learning, and System Design concepts before campus placements or entry-level loops.",
    },
    {
      title: "Software & Backend Engineers",
      detail:
        "Rehearse trade-offs around caching, sharding, Raft consensus, Kafka throughput, and production reliability under structured time constraints.",
    },
    {
      title: "AI, ML & Data Engineers",
      detail:
        "Test applied fluency in Transformer attention, LoRA/QLoRA fine-tuning, RAG retrieval pipelines, Apache Spark tuning, and ML generalization diagnostics.",
    },
    {
      title: "Cloud, DevOps & Security Candidates",
      detail:
        "Practice real-world Kubernetes, Terraform, IAM least-privilege, STRIDE threat modeling, and incident triage explanations out loud.",
    },
  ],
  differentiators: [
    {
      title: "Tied Directly to 216 Engineering Modules",
      detail:
        "Unlike generic question generators, every PrepSpaces interview question maps to structured technical modules you can immediately open and study afterward.",
    },
    {
      title: "Non-Repeating Question Diversity",
      detail:
        "Each 7-question session applies semantic similarity checks and session history filtering so repeated practice loops surface fresh topics and edge cases.",
    },
    {
      title: "Audio + Always-Visible Text Accessibility",
      detail:
        "Questions play aloud across desktop and mobile browsers (with neural TTS and browser speech fallback) while remaining readable on screen at every step.",
    },
    {
      title: "Free Access After Simple Student Sign-In",
      detail:
        "Create a free student account via Google or email to launch interviews, preserve progress reports, and review expected answers without paywalls.",
    },
  ],
  faqs: [
    {
      question: "What is an AI interview?",
      answer:
        "An AI interview is an automated mock or screening interview led by artificial intelligence software that asks structured questions, listens to or transcribes a candidate's spoken responses, and evaluates clarity and technical accuracy against a scoring rubric.",
    },
    {
      question: "How does an AI interview work on PrepSpaces?",
      answer:
        "On PrepSpaces, you sign in with a free student account, choose one of 10 engineering tracks (or a specific module), run a quick browser camera and microphone check, and enter a 7-question voice interview. Each question is spoken aloud and shown on screen, your spoken answer is transcribed, and an automated evaluator scores each response from 1 to 10 with ideal answer feedback.",
    },
    {
      question: "How can I practice technical interviews online for free?",
      answer:
        "You can study all 216 engineering modules across System Design, AI Engineering, Operating Systems, Networks, Cybersecurity, DevOps, Cloud, Machine Learning, Data Engineering, and Blockchain openly on PrepSpaces, and sign in with a free student account at prepspaces.com/interview to run voice-based AI mock interviews.",
    },
    {
      question: "What makes PrepSpaces useful as a free AI interview practice platform?",
      answer:
        "PrepSpaces combines university-informed technical curricula directly with an interactive AI mock interviewer. Instead of disconnected trivia, candidates receive non-repeating 7-question sessions tied to concrete modules, instant 1–10 rubric feedback, and ideal expected answers they can verify in the companion lessons.",
    },
    {
      question: "Can AI conduct mock interviews with spoken questions and evaluation?",
      answer:
        "Yes. PrepSpaces delivers spoken interview prompts using text-to-speech playback across desktop and mobile browsers, captures spoken responses via microphone transcription, and produces structured rubric feedback and an overall session report.",
    },
    {
      question: "How can students and freshers practice job interviews with AI?",
      answer:
        "Students and freshers can start by selecting foundational tracks such as Operating Systems, Computer Networks, Machine Learning, or Cloud Computing on a single-module scope to build confidence, then switch to All Modules for comprehensive mock interview rounds.",
    },
    {
      question: "How should candidates prepare for technical interviews?",
      answer:
        "Effective preparation combines understanding core mechanisms and trade-offs with practicing verbal explanations aloud. Studying a curriculum module first and immediately running a focused AI mock interview exposes whether you can recall assumptions, failure modes, and quantitative reasoning without notes.",
    },
    {
      question: "Which topics and courses are supported in PrepSpaces AI Mock Interviews?",
      answer:
        "All 10 flagship PrepSpaces tracks are unlocked for AI interviews: AI Engineering & Generative AI, System Design, Operating Systems, Computer Networks, Cybersecurity, DevOps & SRE, Cloud Computing, Machine Learning, Data Engineering, and Blockchain Technology.",
    },
  ],
};

export const ABOUT_PAGE = {
  route: "/about",
  title: "About PrepSpaces — AI Interview Practice & Open Engineering Curriculum",
  description:
    "Learn about PrepSpaces: our mission to make rigorous systems engineering education and realistic voice-based AI mock interview practice accessible to students and engineers.",
  keywords:
    "About PrepSpaces, PrepSpaces AI Interview, technical interview education, computer science curriculum platform, engineering mock interviews",
  missionSummary:
    "PrepSpaces (prepspaces.com) is a technical career learning workspace and AI interview practice platform built for computer science students, freshers, and working software engineers.",
  pillars: [
    {
      title: "Depth-First Technical Curricula",
      detail:
        "PrepSpaces publishes 10 structured engineering masterclasses spanning 216 modules across System Design, Operating Systems, Computer Networks, AI/GenAI, Machine Learning, Data Engineering, Cloud, DevOps & SRE, Cybersecurity, and Blockchain.",
    },
    {
      title: "Voice-Driven AI Mock Interviews",
      detail:
        "Our live interview engine lets signed-in learners apply what they study under realistic speaking pressure: 7 distinct questions per loop, audio prompts, speech-to-text capture, proctoring awareness, and 1–10 rubric feedback with expected answer comparisons.",
    },
    {
      title: "People-First & Grounded Standards",
      detail:
        "Every curriculum track aligns with foundational computer science references—including university systems syllabi, IETF RFCs, NIST security frameworks, OWASP guidelines, and official kernel documentation.",
    },
  ],
  platformFacts: [
    { label: "Official Domain", value: "https://prepspaces.com" },
    { label: "Unlocked Interview Courses", value: "10 Technical Tracks (216 Modules)" },
    { label: "Interview Session Format", value: "7 Non-Repeating Questions • Spoken Voice + Text • 1–10 Rubric Report" },
    { label: "Curriculum Access", value: "Open Public Modules • Free Student Account for Interview Practice" },
    { label: "Contact & Community", value: "support@prepspaces.com • @prepspaces (Instagram)" },
  ],
};

export const INTERVIEW_GUIDES = [
  {
    slug: "ai-interview-preparation-guide",
    route: "/guides/ai-interview-preparation-guide",
    category: "AI Interview Practice",
    readTime: "7 min read",
    publishedDate: "2026-11-25",
    title: "How to Prepare for an AI Mock Interview (Complete Candidate Guide)",
    metaTitle: "How to Prepare for an AI Mock Interview | PrepSpaces Guide",
    description:
      "Learn how AI interviews evaluate spoken answers, how to structure concise technical explanations for voice transcription, and how to score higher using rubric-focused practice.",
    keywords:
      "AI interview preparation, how to prepare for AI interview, AI mock interview tips, voice AI interview practice, technical interview rubric",
    directAnswer:
      "To prepare effectively for an AI mock interview, treat the session like a live engineering discussion: test your microphone in a quiet room, lead every answer with a 1-sentence core definition before diving into mechanisms and trade-offs, speak clearly in complete clauses for accurate transcription, and verify weak spots afterward against ideal expected answers.",
    keyTakeaways: [
      "Answer structure matters more than speed: State the definition, explain the mechanism, and name one real-world trade-off or failure mode.",
      "Avoid vague filler words when using speech-to-text—concrete nouns (e.g., 'page table', 'raft quorum', 'RAG reranker') improve rubric matching.",
      "Warm up on a single curriculum module before switching to 'All Modules' full-track sessions.",
    ],
    sections: [
      {
        heading: "1. Understand How AI Interview Evaluators Grade Responses",
        paragraphs: [
          "Unlike multiple-choice quizzes, a modern technical AI interview evaluates unstructured spoken reasoning. Automated evaluators look for whether your answer directly addresses the question prompt, names the underlying technical mechanisms accurately, and explains why one design choice outperforms another under constraints.",
          "Shallow keyword-dropping without explanation typically receives mid-range scores, while answers that combine accurate terminology with cause-and-effect reasoning earn top rubric scores.",
        ],
      },
      {
        heading: "2. Use a Repeatable 4-Part Spoken Answer Framework",
        paragraphs: [
          "When answering a technical prompt out loud, silent pauses can feel longer than they are. Using a predictable verbal outline keeps your response concise and easy for both human interviewers and speech-to-text engines to parse:",
          "First, give a crisp 1-sentence direct answer. Second, walk through how the mechanism works step by step. Third, highlight quantitative limits or trade-offs (latency, memory, throughput, consistency). Fourth, give a brief concrete example or failure scenario.",
        ],
      },
      {
        heading: "3. Hardware & Audio Readiness Before Entering the Room",
        paragraphs: [
          "Poor microphone gain, background echo, or speaker feedback can clip technical words during Whisper speech capture. Always confirm your mic signal in preflight, wear headphones when listening to spoken AI prompts, and pause briefly after finishing your thought before submitting.",
        ],
      },
      {
        heading: "4. Turn Every Report Score Into Targeted Study",
        paragraphs: [
          "Your post-interview score is only half the value. Compare your spoken transcript side by side with the Ideal Expected Answer shown in the PrepSpaces report, identify missing concepts, review the matching curriculum module, and run a follow-up interview session to verify retention.",
        ],
      },
    ],
    recommendedTrack: { label: "Launch Live AI Mock Interview", to: "/interview", secondaryLabel: "Explore AI Interview Platform", secondaryTo: "/ai-interview" },
    citations: [
      { label: "Google Interview & Technical Preparation Best Practices", url: "https://techdevguide.withgoogle.com/" },
      { label: "PrepSpaces AI Interview Platform Overview", url: "https://prepspaces.com/ai-interview" },
    ],
  },
  {
    slug: "how-ai-mock-interviews-work",
    route: "/guides/how-ai-mock-interviews-work",
    category: "AEO & Technology",
    readTime: "6 min read",
    publishedDate: "2026-11-25",
    title: "What Is an AI Interview and How Does It Work?",
    metaTitle: "What Is an AI Interview? How Automated Mock Interviews Work | PrepSpaces",
    description:
      "Clear explanation of how AI interviews work end to end: dynamic question selection, spoken audio synthesis, speech-to-text transcription, anti-repetition guards, and rubric evaluation.",
    keywords:
      "what is an AI interview, how does AI interview work, automated interview evaluation, AI mock interview technology, PrepSpaces",
    directAnswer:
      "An AI interview is an interactive evaluation workflow where language and speech models conduct a structured Q&A session. On PrepSpaces, it combines dynamic non-repeating question selection across 216 technical modules, spoken voice playback, Whisper-based speech transcription, and automated rubric grading on a 1–10 scale.",
    keyTakeaways: [
      "Three core components power spoken AI interviews: question orchestration, audio I/O (TTS + ASR transcription), and rubric-aligned LLM evaluation.",
      "Good platforms preserve question text visibly even if device audio is muted or interrupted.",
      "Comparing candidate transcripts against focus-area criteria produces actionable feedback instead of opaque pass/fail scores.",
    ],
    sections: [
      {
        heading: "What Happens Inside an AI Interview Pipeline",
        paragraphs: [
          "When a session starts, the backend selects questions mapped to the chosen course and difficulty curve while filtering against previously asked fingerprints so consecutive sessions remain fresh.",
          "During the live loop, text-to-speech synthesis reads each prompt aloud while the full prompt and expected focus context remain visible on screen—ensuring accessibility across mobile Safari, Android Chrome, and desktop browsers.",
        ],
      },
      {
        heading: "From Microphone Audio to Rubric Score",
        paragraphs: [
          "As the candidate responds verbally, audio is captured cleanly after the AI stops speaking to avoid echo feedback. Speech-to-text transcription converts spoken engineering explanations into text, which is evaluated against technical correctness, clarity, and concept coverage.",
        ],
      },
      {
        heading: "Why AI Mock Interviews Complement Peer Practice",
        paragraphs: [
          "Scheduling human peers for mock interviews across specialized topics—such as Raft consensus, Linux virtual memory, or QLoRA fine-tuning—is slow. AI mock interviews make unlimited structured repetition available immediately after studying a module.",
        ],
      },
    ],
    recommendedTrack: { label: "See PrepSpaces AI Interview Architecture", to: "/ai-interview", secondaryLabel: "Open System Design Course", secondaryTo: "/learning/system-design" },
    citations: [
      { label: "W3C Web Speech & Media Capture Standards", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" },
      { label: "NIST AI Risk Management Framework Overview", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    ],
  },
  {
    slug: "technical-interview-preparation-roadmap",
    route: "/guides/technical-interview-preparation-roadmap",
    category: "Engineering Roadmap",
    readTime: "8 min read",
    publishedDate: "2026-11-25",
    title: "How to Prepare for Technical Interviews: Structured 6-Week Roadmap",
    metaTitle: "How to Prepare for Technical Interviews (6-Week Roadmap) | PrepSpaces",
    description:
      "A practical multi-domain roadmap for software, backend, cloud, and AI interviews covering OS internals, networking, system design, and AI mock interview checkpoints.",
    keywords:
      "how to prepare for technical interviews, technical interview preparation roadmap, software engineering study plan, system design preparation, PrepSpaces",
    directAnswer:
      "To prepare for technical interviews systematically, divide your study into weekly domain blocks—Core CS Internals (OS & Networks), Distributed System Design, Domain Specialization (AI/ML, Cloud, DevOps, Security, or Data), and timed spoken mock interviews—verifying each block aloud rather than passively rereading notes.",
    keyTakeaways: [
      "Passive reading creates an illusion of mastery; explaining mechanisms out loud reveals gaps immediately.",
      "Pair every 2–3 studied modules with a targeted module-level AI mock interview before moving on.",
      "In Weeks 5–6, switch to randomized All-Modules mock sessions to build context-switching stamina.",
    ],
    sections: [
      {
        heading: "Weeks 1–2: Operating Systems & Networking Foundations",
        paragraphs: [
          "Senior and entry-level engineering loops alike rely on process lifecycles, CPU scheduling, virtual memory, mutexes/deadlocks, TCP flow control, DNS resolution, and TLS handshakes. Start with Operating Systems and Computer Networks modules to strengthen systems intuition.",
        ],
      },
      {
        heading: "Weeks 3–4: Distributed Systems, Storage & Architecture Trade-Offs",
        paragraphs: [
          "Study capacity estimation, SQL vs NoSQL indexing, Cache-Aside vs Write-Through strategies, consistent hashing, quorum consensus (R+W > N), Raft leader election, and Kafka event pipelines. Practice articulating why a specific trade-off fits latency vs consistency constraints.",
        ],
      },
      {
        heading: "Weeks 5–6: Domain Mastery & Comprehensive Mock Loops",
        paragraphs: [
          "Deepen your target specialization—AI Engineering & RAG, Machine Learning, Data Engineering lakehouses, Cloud/DevOps Kubernetes & IaC, or Cybersecurity—and run full 7-question All-Modules mock interviews on PrepSpaces every 48 hours, auditing each report's expected answers.",
        ],
      },
    ],
    recommendedTrack: { label: "Browse All 10 Masterclasses", to: "/learning", secondaryLabel: "Practice All-Modules Interview", secondaryTo: "/ai-interview" },
    citations: [
      { label: "MIT OpenCourseWare Systems Engineering", url: "https://ocw.mit.edu/" },
      { label: "IETF RFC Protocol Archive", url: "https://datatracker.ietf.org/" },
    ],
  },
  {
    slug: "hr-and-behavioral-interview-questions",
    route: "/guides/hr-and-behavioral-interview-questions",
    category: "Communication & HR",
    readTime: "7 min read",
    publishedDate: "2026-11-25",
    title: "HR & Behavioral Interview Questions: How to Structure High-Trust Answers",
    metaTitle: "HR & Behavioral Interview Questions Guide (STAR Method) | PrepSpaces",
    description:
      "Learn how to answer HR and behavioral interview questions clearly using the STAR framework, quantify engineering impact, and avoid common pitfalls in fresher and experienced rounds.",
    keywords:
      "HR interview questions, behavioral interview questions, STAR method interview answers, job interview communication, interview questions for freshers",
    directAnswer:
      "Answer HR and behavioral interview questions using the STAR method—briefly frame the Situation and Task (20%), spend most of your time on the specific Actions you personally executed and trade-offs you weighed (60%), and finish with a measurable Result or lesson learned (20%).",
    keyTakeaways: [
      "Replace 'we built' with specific 'I investigated / I implemented / I measured' ownership.",
      "Prepare 4 reusable project stories that cover conflict resolution, debugging under pressure, tight deadlines, and learning from a mistake.",
      "Keep spoken answers within 90–120 seconds so interviewers stay engaged.",
    ],
    sections: [
      {
        heading: "Core HR Questions Every Candidate Should Prepare",
        paragraphs: [
          "1. 'Tell me about yourself' — Deliver a 60-second present-past-future summary focused on technical skills, flagship project impact, and why this engineering domain fits your trajectory.",
          "2. 'Tell me about a difficult bug, outage, or project setback' — Focus calmly on root-cause diagnostics, how you isolated variables, what fix shipped, and what guardrails prevented recurrence.",
          "3. 'Describe a disagreement with a teammate or mentor' — Emphasize objective criteria, benchmarks, willingness to listen, and alignment on user outcomes.",
        ],
      },
      {
        heading: "Using Spoken Mock Practice to Cut Rambling",
        paragraphs: [
          "Even though technical mock interviews test system concepts, practicing concise, structured verbal delivery out loud trains the exact pacing habit needed in HR and hiring-manager conversations. Aim for clear topic sentences and explicit transitions.",
        ],
      },
    ],
    recommendedTrack: { label: "Practice Spoken Delivery Live", to: "/ai-interview", secondaryLabel: "Read Fresher Interview Guide", secondaryTo: "/guides/interview-questions-for-freshers" },
    citations: [
      { label: "U.S. Department of Labor / CareerOneStop Behavioral Interviewing", url: "https://www.careeronestop.org/JobSearch/Interview/interview-tips.aspx" },
    ],
  },
  {
    slug: "interview-questions-for-freshers",
    route: "/guides/interview-questions-for-freshers",
    category: "Students & Freshers",
    readTime: "7 min read",
    publishedDate: "2026-11-25",
    title: "Technical Interview Questions for Freshers & CS Graduates (2026 Guide)",
    metaTitle: "Interview Questions for Freshers & CS Students | PrepSpaces",
    description:
      "Essential technical interview topics and sample questions for freshers and computer science graduates covering Operating Systems, Computer Networks, Databases, Cloud, and AI fundamentals.",
    keywords:
      "interview questions for freshers, AI interview for freshers, CS graduate technical interview questions, fresher job interview preparation, PrepSpaces",
    directAnswer:
      "Technical interviews for freshers focus less on decades of scale experience and more on rock-solid fundamentals: process vs thread scheduling, virtual memory, TCP vs UDP & DNS, database normalization & indexing, basic security hygiene, and clear reasoning about academic or capstone projects.",
    keyTakeaways: [
      "Review core CS courses cleanly before chasing niche buzzwords—freshers most often stumble on OS, networking, and SQL basics.",
      "Practice speaking about your capstone project end-to-end: architecture, bottleneck encountered, and how you tested correctness.",
      "Use module-by-module AI mock interviews to eliminate nervousness before campus or off-campus hiring drives.",
    ],
    sections: [
      {
        heading: "Top Fundamental Areas Hiring Teams Ask Freshers",
        paragraphs: [
          "Operating Systems: Difference between processes and threads, context switching, deadlock conditions (mutual exclusion, hold-and-wait, no preemption, circular wait), and how virtual memory pages map via the MMU/TLB.",
          "Computer Networks: What happens when you type a URL in a browser (DNS lookup, TCP 3-way handshake, TLS 1.3 negotiation, HTTP request/response), plus REST vs WebSockets.",
          "Databases & Architecture: Primary vs composite indexes (B+ Trees), ACID properties, horizontal vs vertical scaling, and why caching reduces database read pressure.",
        ],
      },
      {
        heading: "Building Confidence Without Senior Industry Experience",
        paragraphs: [
          "Freshers do not need production FAANG war stories to perform strongly. Demonstrating clear structured thought, admitting boundaries honestly when unsure, and reasoning from first principles sets entry-level candidates apart.",
        ],
      },
    ],
    recommendedTrack: { label: "Try Module-Focused AI Interview", to: "/interview", secondaryLabel: "Explore OS Master Course", secondaryTo: "/learning/os" },
    citations: [
      { label: "Operating Systems Kernel Fundamentals (MIT xv6 / OCW)", url: "https://ocw.mit.edu/" },
      { label: "OWASP Top 10 Security Awareness", url: "https://owasp.org/www-project-top-ten/" },
    ],
  },
  {
    slug: "software-engineering-interview-guide",
    route: "/guides/software-engineering-interview-guide",
    category: "Software Engineering",
    readTime: "8 min read",
    publishedDate: "2026-11-25",
    title: "Software Engineering Interview Preparation: Systems, Architecture & AI Loops",
    metaTitle: "Software Engineering Interview Preparation Guide | PrepSpaces",
    description:
      "Master modern software engineering interviews covering distributed system design, reliability, cloud security, AI integration, and clear architectural communication.",
    keywords:
      "software engineering interview preparation, system design interview guide, software engineer mock interview, backend engineering interview, PrepSpaces",
    directAnswer:
      "Modern software engineering interviews test how you reason through constraints across the full stack—from low-level memory and database internals to distributed consensus, cloud security, and LLM/RAG trade-offs—and whether you can communicate design decisions cleanly under follow-up questioning.",
    keyTakeaways: [
      "Always anchor system design discussions in concrete numbers: QPS, read/write ratio, payload size, and acceptable p99 latency.",
      "Explain failure scenarios proactively—cache stampedes, split-brain quorums, backpressure, and dead-letter queues.",
      "Bridge AI and traditional systems knowledge (vector indexing, inference batching, circuit breakers) for modern engineering roles.",
    ],
    sections: [
      {
        heading: "Think in Layers, Not Isolated Frameworks",
        paragraphs: [
          "Strong software engineers connect application code to transport protocols, kernel I/O, storage engines, and observability telemetry. Reviewing PrepSpaces tracks across System Design, Cloud, DevOps/SRE, and Data Engineering builds that cross-layer fluency.",
        ],
      },
      {
        heading: "Quantify Trade-Offs Under Interview Constraints",
        paragraphs: [
          "Every architectural choice creates a trade-off: strong consistency vs availability during network partitions, normalization vs analytical denormalization, or fine-tuning vs Retrieval-Augmented Generation (RAG). Practice stating both what you gain and what complexity you accept.",
        ],
      },
    ],
    recommendedTrack: { label: "Start Software Architecture Study", to: "/learning/system-design", secondaryLabel: "Try AI Interview Practice", secondaryTo: "/ai-interview" },
    citations: [
      { label: "NIST SP 800-207 Zero Trust Architecture", url: "https://csrc.nist.gov/publications/detail/sp/800-207/final" },
      { label: "Linux Kernel Networking & Diagnostics", url: "https://www.kernel.org/doc/html/latest/" },
    ],
  },
];

export function getGuideBySlug(slug) {
  return INTERVIEW_GUIDES.find((g) => g.slug === slug) || null;
}
