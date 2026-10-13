/**
 * fastCommandMatcher.js
 *
 * Deterministic client-side fast path matcher for unambiguous voice commands.
 * Bypasses network/LLM intent planning when the command is explicit and unambiguous,
 * reducing execution latency by ~800-1500ms while maintaining strict route validation.
 */

const REGISTERED_ROUTES = {
  home: { route: "/", label: "Dashboard" },
  learning: { route: "/learning", label: "Learning Center" },
  oops: { route: "/learning/oops", label: "OOP Deep Dive" },
  "system-design": { route: "/learning/system-design", label: "System Design Masterclass" },
  "system-design-requirements": { route: "/learning/system-design/requirements", label: "System Design Requirements & Capacity" },
  "system-design-networking": { route: "/learning/system-design/networking", label: "System Design APIs & Networking" },
  "system-design-architecture": { route: "/learning/system-design/architecture", label: "System Design Monoliths & Microservices" },
  "system-design-databases": { route: "/learning/system-design/databases", label: "System Design Databases & Indexing" },
  "system-design-caching": { route: "/learning/system-design/caching", label: "System Design Caching & Invalidation" },
  "system-design-replication": { route: "/learning/system-design/replication", label: "System Design Replication & Sharding" },
  "system-design-distributed-systems": { route: "/learning/system-design/distributed-systems", label: "System Design Distributed Systems & Time" },
  "system-design-consistency": { route: "/learning/system-design/consistency", label: "System Design Consistency & Quorums" },
  "system-design-consensus": { route: "/learning/system-design/consensus", label: "System Design Consensus & Leader Election" },
  "system-design-messaging": { route: "/learning/system-design/messaging", label: "System Design Message Queues & Streaming" },
  "system-design-transactions": { route: "/learning/system-design/transactions", label: "System Design Transactions & Sagas" },
  "system-design-traffic": { route: "/learning/system-design/traffic", label: "System Design Load Balancing & Traffic" },
  "system-design-scalability": { route: "/learning/system-design/scalability", label: "System Design Scalability & Performance" },
  "system-design-multi-region": { route: "/learning/system-design/multi-region", label: "System Design Multi-Region & Disaster Recovery" },
  "system-design-reliability": { route: "/learning/system-design/reliability", label: "System Design Reliability & Observability" },
  "system-design-security": { route: "/learning/system-design/security", label: "System Design Security & Multi-Tenancy" },
  "system-design-realtime": { route: "/learning/system-design/realtime", label: "System Design Real-Time Systems & WebSockets" },
  "system-design-search": { route: "/learning/system-design/search", label: "System Design Search, Feeds & Recommendations" },
  "system-design-ai-systems": { route: "/learning/system-design/ai-systems", label: "System Design AI Systems & Inference Serving" },
  "system-design-case-studies": { route: "/learning/system-design/case-studies", label: "System Design Case Studies" },
  "system-design-advanced-case-studies": { route: "/learning/system-design/advanced-case-studies", label: "System Design Advanced Case Studies" },
  "system-design-capstone": { route: "/learning/system-design/capstone", label: "System Design Final Capstone" },
  interview: { route: "/interview", label: "Technical Interview Room" },
};

// Patterns that identify questions (NEVER fast-path as navigation!)
const QUESTION_PATTERNS = [
  /^(what|why|how|who|when|where|which|can you|could you|explain|tell me|define|is there|describe)\b/i,
  /\?$/,
];

// Patterns for unambiguous navigation
const NAVIGATION_RULES = [
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(interview|the interview|mock interview|interview room|practice room)$/i,
    destination: "interview",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(system design|system design masterclass|architectural thinking)$/i,
    destination: "system-design",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(requirements|capacity estimation|capacity planning|system design requirements|system design module 2)$/i,
    destination: "system-design-requirements",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(networking|apis|protocols|system design networking|system design module 3)$/i,
    destination: "system-design-networking",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(architecture|microservices|monoliths|modular monolith|system design architecture|system design module 4)$/i,
    destination: "system-design-architecture",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(databases|database design|indexing|sql|nosql|system design databases|system design module 5)$/i,
    destination: "system-design-databases",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(caching|redis|cdn|cache invalidation|system design caching|system design module 6)$/i,
    destination: "system-design-caching",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(replication|sharding|partitioning|distributed database|distributed databases|system design replication|system design sharding|system design module 7)$/i,
    destination: "system-design-replication",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(distributed systems|clocks|timeouts|circuit breaker|failure models|system design distributed systems|system design module 9)$/i,
    destination: "system-design-distributed-systems",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(consistency|quorums|quorum reads|linearizability|read repair|consistency models|system design consistency|system design module 10)$/i,
    destination: "system-design-consistency",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(consensus|leader election|raft|paxos|fencing tokens|coordination|split brain|system design consensus|system design module 11)$/i,
    destination: "system-design-consensus",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(messaging|message queues|kafka|rabbitmq|event driven|stream processing|flink|outbox|system design messaging|system design module 12)$/i,
    destination: "system-design-messaging",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(transactions|distributed transactions|sagas|saga pattern|idempotency|two phase commit|2pc|system design transactions|system design module 13)$/i,
    destination: "system-design-transactions",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(traffic|load balancing|rate limiting|backpressure|traffic management|system design traffic|system design module 14)$/i,
    destination: "system-design-traffic",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(scalability|performance|bottlenecks|capacity estimation|little's law|system design scalability|system design module 15)$/i,
    destination: "system-design-scalability",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(multi-region|disaster recovery|cross region replication|rto rpo|failover|split brain|system design multi region|system design module 16)$/i,
    destination: "system-design-multi-region",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(reliability|observability|resilience|circuit breaker|graceful degradation|error budget|opentelemetry|distributed tracing|sli slo|system design reliability|system design module 17)$/i,
    destination: "system-design-reliability",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(security|multi-tenant|multi tenancy|authorization|identity|rbac|abac|row level security|rls|idor|bola|passkeys|zero trust|system design security|system design module 18)$/i,
    destination: "system-design-security",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(real-time|realtime|websockets|websocket|presence|sse|socket\.io|notifications|system design realtime|system design module 19)$/i,
    destination: "system-design-realtime",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(search|feeds|recommendations|cdn|content delivery|inverted index|system design search|system design module 20)$/i,
    destination: "system-design-search",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(ai systems|ai architecture|inference|model serving|rag|vector search|vllm|embeddings|system design ai systems|system design module 21)$/i,
    destination: "system-design-ai-systems",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(case studies|system design case studies|url shortener|chat service|notification platform|social feed|system design module 22)$/i,
    destination: "system-design-case-studies",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(advanced case studies|advanced system design|video platform|ride hailing|uber architecture|payment platform|ai service|large scale ai|system design module 23)$/i,
    destination: "system-design-advanced-case-studies",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(capstone|final capstone|system design capstone|capstone project|system design module 24)$/i,
    destination: "system-design-capstone",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(oops|oop|object oriented|oops page|oop page)$/i,
    destination: "oops",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me|launch)\s+(learning|learning center|lessons|study)$/i,
    destination: "learning",
  },
  {
    regex: /^(open|go to|take me to|navigate to|view|show me)\s+(home|homepage|dashboard|main page)$/i,
    destination: "home",
  },
  // Direct single-word or short destination commands
  {
    regex: /^(system design|system design masterclass)$/i,
    destination: "system-design",
  },
  {
    regex: /^(interview|mock interview)$/i,
    destination: "interview",
  },
  {
    regex: /^(oops|oop mastery)$/i,
    destination: "oops",
  },
  {
    regex: /^(home|dashboard)$/i,
    destination: "home",
  },
  {
    regex: /^(databases|indexing|database design)$/i,
    destination: "system-design-databases",
  },
  {
    regex: /^(consistency|quorums|linearizability)$/i,
    destination: "system-design-consistency",
  },
  {
    regex: /^(consensus|raft|paxos|leader election)$/i,
    destination: "system-design-consensus",
  },
  {
    regex: /^(messaging|message queues|kafka|rabbitmq|stream processing)$/i,
    destination: "system-design-messaging",
  },
  {
    regex: /^(transactions|distributed transactions|sagas|idempotency|two phase commit|2pc)$/i,
    destination: "system-design-transactions",
  },
  {
    regex: /^(traffic|load balancing|rate limiting|backpressure)$/i,
    destination: "system-design-traffic",
  },
  {
    regex: /^(scalability|performance modeling|bottlenecks|capacity estimation)$/i,
    destination: "system-design-scalability",
  },
  {
    regex: /^(multi-region|disaster recovery|rto rpo|cross region replication|failover runbook)$/i,
    destination: "system-design-multi-region",
  },
  {
    regex: /^(reliability|observability|resilience|circuit breaker|graceful degradation|error budget|distributed tracing)$/i,
    destination: "system-design-reliability",
  },
  {
    regex: /^(security|multi-tenant|multi tenancy|authorization|rbac|abac|row level security|rls|idor|zero trust)$/i,
    destination: "system-design-security",
  },
  {
    regex: /^(real-time|realtime|websockets|websocket|presence|socket\.io|realtime systems)$/i,
    destination: "system-design-realtime",
  },
  {
    regex: /^(search|feeds|recommendations|content delivery|inverted index|search systems)$/i,
    destination: "system-design-search",
  },
  {
    regex: /^(ai systems|ai architecture|inference serving|model serving|rag|vector search|vllm)$/i,
    destination: "system-design-ai-systems",
  },
  {
    regex: /^(case studies|system design case studies|url shortener|chat service|notification platform|social feed)$/i,
    destination: "system-design-case-studies",
  },
  {
    regex: /^(advanced case studies|advanced system design|video platform|ride hailing|uber architecture|payment platform|ai service)$/i,
    destination: "system-design-advanced-case-studies",
  },
  {
    regex: /^(capstone|final capstone|system design capstone|capstone project)$/i,
    destination: "system-design-capstone",
  },
];

// Patterns for local playback/assistant controls
const CONTROL_RULES = [
  {
    regex: /^(stop|stop listening|cancel|halt|quiet|shut up|hush)$/i,
    action: "stop",
  },
  {
    regex: /^(pause|pause audio|hold on)$/i,
    action: "pause",
  },
];

/**
 * Attempts to match a finalized transcript against deterministic fast-path rules.
 *
 * @param {string} transcript - The finalized speech-to-text transcript
 * @returns {Object|null} Fast path match result or null if ambiguous
 */
export function matchFastCommand(transcript = "") {
  const clean = String(transcript || "").trim();
  if (!clean) return null;

  // Rule 0: If it's a question, reject fast-path navigation immediately
  for (const qPattern of QUESTION_PATTERNS) {
    if (qPattern.test(clean)) {
      return null;
    }
  }

  // Rule 1: Check Control actions (Stop/Pause)
  for (const rule of CONTROL_RULES) {
    if (rule.regex.test(clean)) {
      return {
        type: "CONTROL",
        action: rule.action,
        fastPath: true,
        response: rule.action === "stop" ? "Stopped." : "Paused.",
      };
    }
  }

  // Rule 2: Check Navigation actions
  for (const rule of NAVIGATION_RULES) {
    if (rule.regex.test(clean)) {
      const dest = REGISTERED_ROUTES[rule.destination];
      if (dest) {
        return {
          type: "NAVIGATE",
          destination: rule.destination,
          route: dest.route,
          label: dest.label,
          fastPath: true,
          response: `Navigating to ${dest.label}.`,
        };
      }
    }
  }

  // No unambiguous fast path match: proceed to semantic Groq intent planner
  return null;
}
