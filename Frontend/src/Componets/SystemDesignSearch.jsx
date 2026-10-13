import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Sliders,
  Layers,
  Database,
  Globe,
  Radio,
  Share2,
  Cpu,
  Shield,
  Clock,
  Sparkles,
  Zap,
  Filter,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  FileText,
  Key,
  Lock,
  Unlock,
  RefreshCw,
  HardDrive,
  BookOpen,
  HelpCircle,
  Workflow,
  ExternalLink,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  InvertedIndexDiagram,
  FeedFanoutDiagram,
  CdnSecurityDiagram,
  default as VisualDiagramComponentModule20,
} from "./SystemDesignSearchDiagrams";

export default function SystemDesignSearch() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "simulators" | "qa" | "assignments" | "assessment" | "reading"
  const [activeLesson, setActiveLesson] = useState("20.1");

  // Expanded Q&A accordion states (15 Senior Interview Questions)
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE RECOMMENDATION STAGES SIMULATOR STATE
  // ---------------------------------------------------------------------------
  const [selectedUserGoal, setSelectedUserGoal] = useState("java_concurrency");
  const [wRelevance, setWRelevance] = useState(0.4);
  const [wSkill, setWSkill] = useState(0.3);
  const [wFreshness, setWFreshness] = useState(0.2);
  const [wPopularity, setWPopularity] = useState(0.1);
  const [diversityFilterEnabled, setDiversityFilterEnabled] = useState(true);
  const [hideCompleted, setHideCompleted] = useState(true);

  const rawCatalog = [
    {
      id: "rec_1",
      title: "Java Concurrency & ThreadPool Optimization",
      category: "Concurrency",
      skills: ["Java", "Multithreading", "JVM"],
      relevanceScore: 0.95,
      skillScore: 0.9,
      freshnessScore: 0.8,
      popularityScore: 0.85,
      completed: true,
    },
    {
      id: "rec_2",
      title: "Virtual Threads & Project Loom in Practice",
      category: "Concurrency",
      skills: ["Java", "Concurrency", "Virtual Threads"],
      relevanceScore: 0.92,
      skillScore: 0.88,
      freshnessScore: 0.95,
      popularityScore: 0.78,
      completed: false,
    },
    {
      id: "rec_3",
      title: "Lock-Free Algorithms & Atomic Variables",
      category: "Concurrency",
      skills: ["Java", "CAS", "Memory Model"],
      relevanceScore: 0.89,
      skillScore: 0.85,
      freshnessScore: 0.7,
      popularityScore: 0.65,
      completed: false,
    },
    {
      id: "rec_4",
      title: "Distributed Cache Synchronization with Redis",
      category: "Distributed Systems",
      skills: ["Distributed Caching", "Redis", "Java"],
      relevanceScore: 0.84,
      skillScore: 0.75,
      freshnessScore: 0.85,
      popularityScore: 0.92,
      completed: false,
    },
    {
      id: "rec_5",
      title: "Kafka Event-Driven Microservices in Spring",
      category: "Distributed Systems",
      skills: ["Kafka", "Spring Boot", "EDA"],
      relevanceScore: 0.81,
      skillScore: 0.7,
      freshnessScore: 0.9,
      popularityScore: 0.95,
      completed: false,
    },
    {
      id: "rec_6",
      title: "React Server Components Deep Dive",
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js"],
      relevanceScore: 0.25,
      skillScore: 0.2,
      freshnessScore: 0.9,
      popularityScore: 0.98,
      completed: false,
    },
  ];

  // Stage 1: Candidate Generation (Filter out irrelevant domains like frontend when user wants Java)
  const candidateSet = rawCatalog.filter((item) => item.relevanceScore > 0.4);

  // Stage 2: Ranking Formula: Score = w1*R + w2*S + w3*F + w4*P
  let rankedCandidates = candidateSet
    .map((item) => {
      const compositeScore = (
        item.relevanceScore * wRelevance +
        item.skillScore * wSkill +
        item.freshnessScore * wFreshness +
        item.popularityScore * wPopularity
      ).toFixed(3);
      return { ...item, compositeScore: parseFloat(compositeScore) };
    })
    .sort((a, b) => b.compositeScore - a.compositeScore);

  // Stage 3: Re-Ranking & Business Constraints
  if (hideCompleted) {
    rankedCandidates = rankedCandidates.filter((item) => !item.completed);
  }

  // Diversity constraint: max 2 items per category
  if (diversityFilterEnabled) {
    const categoryCounts = {};
    rankedCandidates = rankedCandidates.filter((item) => {
      categoryCounts[item.category] = (categoryCounts[item.category] || 0) + 1;
      return categoryCounts[item.category] <= 2;
    });
  }

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (7 QUESTIONS MATCHING PROMPT VERBATIM)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. What is the main role of an inverted index?",
      options: [
        "Store authentication passwords",
        "Map terms to documents containing them",
        "Encode video files",
        "Track WebSocket presence",
      ],
      correctIndex: 1,
      explanation:
        "An inverted index maps distinct vocabulary terms (tokens) to postings lists of document IDs containing those terms, enabling sub-millisecond full-text lookups.",
    },
    {
      id: "q2",
      question: "2. What is the main trade-off of fan-out-on-write?",
      options: [
        "Reads always require scanning the whole catalog",
        "Publishing an item may require many feed-entry writes",
        "Users can never receive personalized results",
        "It eliminates the need for ranking",
      ],
      correctIndex: 1,
      explanation:
        "Fan-out-on-write achieves instant O(1) feed reads by proactively writing pointers into every follower's inbox, causing high write amplification when an author has thousands or millions of followers.",
    },
    {
      id: "q3",
      question: "3. What is candidate generation in a recommendation pipeline?",
      options: [
        "Finding a manageable set of potentially relevant items",
        "Encrypting a user's browser session",
        "Invalidating a CDN cache",
        "Writing every catalog item to every user's feed",
      ],
      correctIndex: 0,
      explanation:
        "Candidate generation is the high-recall retrieval stage that quickly filters a multi-million item catalog down to a few hundred promising candidates for detailed scoring and ranking.",
    },
    {
      id: "q4",
      question: "4. Why should tenant permission be an eligibility rule rather than a weak ranking feature?",
      options: [
        "Ranking algorithms cannot process tenant IDs",
        "Unauthorized content must be excluded, not merely ranked lower",
        "Tenant filtering always makes search faster",
        "Recommendations never need user permissions",
      ],
      correctIndex: 1,
      explanation:
        "Authorization is a strict security boundary. If tenant permissions were merely a scoring weight, an unauthorized document could still score high and leak confidential tenant data.",
    },
    {
      id: "q5",
      question: "5. What is an important advantage of cursor pagination?",
      options: [
        "It guarantees an immutable snapshot in every system",
        "It is always faster for arbitrary page jumps",
        "It avoids requiring any ordering",
        "It can avoid increasingly expensive deep offsets",
      ],
      correctIndex: 3,
      explanation:
        "Cursor pagination keys off index values (e.g. `(created_at, id) < ($1, $2)`), scanning only the next limit records and avoiding full scans of discarded records that plague `OFFSET 100000`.",
    },
    {
      id: "q6",
      question: "6. Why might a new user receive generic recommendations?",
      options: [
        "They have no interaction history for personalization",
        "CDNs prevent recommendations",
        "Search indexes cannot contain user IDs",
        "The ranking system must always be offline",
      ],
      correctIndex: 0,
      explanation:
        "This is the classic 'Cold-Start' problem. Without historical clicks, completed courses, or declared preferences, recommendation systems fall back to curated popular baselines.",
    },
    {
      id: "q7",
      question: "7. What can go wrong when a CDN cache key omits a field that changes a response?",
      options: [
        "The cache becomes a database transaction",
        "Different requests can incorrectly reuse the same cached response",
        "All requests must become cache misses",
        "The origin is automatically encrypted",
      ],
      correctIndex: 1,
      explanation:
        "If a cache key does not include varying attributes (e.g. format, language, or tenant session), one user's personalized or format-specific response can be erroneously served to another user.",
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
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizSubmitted(false);
  };

  // ---------------------------------------------------------------------------
  // 15 SENIOR SYSTEM DESIGN INTERVIEW QUESTIONS & MODEL ANSWERS
  // ---------------------------------------------------------------------------
  const interviewQuestions = [
    {
      id: "qa-1",
      question: "1. Design a search system for 10 million job listings with skill filters, location filters, and autocomplete.",
      summary: "Inverted indexes, filter context, edge n-grams, and hybrid ranking.",
      answer: `1. Ingestion & Indexing: Stream job publications from PostgreSQL via Debezium CDC and Kafka into Elasticsearch. Normalize titles, extract standardized skill entities, and build an inverted index.
2. Index Schema: Store structured attributes (location, tenantId, experienceMin/Max) as non-scored 'keyword' and 'integer' filter fields. Store title and description as analyzed text fields with BM25 scoring.
3. Query Execution: Use an Elasticsearch bool query where location, salary, and experience run inside 'filter' context (cached in 64-bit Roaring bitsets, bypassing score computation). Run query string against title (boost: 3x) and skills (boost: 2x) in 'must' context.
4. Autocomplete: Index normalized job titles in a dedicated completion suggester index using FSTs (Finite State Transducers) or edge n-grams, debounced on the client (300ms) with a 20ms p95 edge response.`,
    },
    {
      id: "qa-2",
      question: "2. How does an inverted index work, and when would you use a dedicated search engine?",
      summary: "Term dictionary, postings lists, skip pointers, and when to graduate from PostgreSQL.",
      answer: `• Inverted Index Mechanics: It tokenizes documents into normalized terms and maps each term to an ordered postings list: Term -> [doc_1, doc_4, doc_9]. Intersecting multiple terms (e.g. 'Java' AND 'Spring') performs a fast two-pointer intersection in O(len(A) + len(B)) aided by skip lists.
• When to use PostgreSQL Full-Text Search: Great for < 1 million records, co-located ACID data integrity, simpler operational overhead, and basic text search with tsvector/tsquery and GIN indexes.
• When to Graduate to Elasticsearch / OpenSearch:
  - Catalog exceeds millions of documents with high query concurrency.
  - Requirement for rich relevance scoring (TF-IDF/BM25 tuning, field boosts, fuzziness).
  - Heavy faceted navigation with real-time aggregation across hundreds of thousands of hits.
  - Need to scale query read traffic independently from relational write databases.`,
    },
    {
      id: "qa-3",
      question: "3. How would you keep a search index synchronized with the primary database?",
      summary: "Dual writes vs Transactional Outbox vs CDC (Change Data Capture).",
      answer: `1. Never Dual Write: Direct application writes to PostgreSQL and Elasticsearch suffer from dual-write inconsistencies when one write succeeds and the other fails.
2. Transactional Outbox / CDC:
   - When a job listing updates, write the change to an 'outbox_events' table in the same DB transaction, or stream PostgreSQL Write-Ahead Logs (WAL) using Debezium.
   - Publish events to a Kafka topic partitioned by jobId.
   - Indexing workers ingest Kafka messages, apply idempotent upserts/deletes to Elasticsearch using document versioning (_version).
3. Periodic Reconciliation: Run a nightly hash-verification batch job (e.g. comparing PostgreSQL updated_at with Elasticsearch index timestamps) to detect and repair dropped events.`,
    },
    {
      id: "qa-4",
      question: "4. What are the differences between lexical search, vector search, and hybrid search?",
      summary: "Exact keyword matching (BM25) vs Dense semantic embeddings vs Reciprocal Rank Fusion.",
      answer: `• Lexical Search (BM25): Matches exact keyword stems and term frequencies. Fast, explainable, and excels at specific keywords, model numbers, acronyms ('K8s'), and exact entity names. Fails on vocabulary mismatch ('software engineer' vs 'programmer').
• Vector Search (Dense Embeddings): Embeds queries and documents into high-dimensional vector spaces using transformer models (e.g. text-embedding-ada-002), retrieving top-K neighbors via HNSW (Hierarchical Navigable Small World) graphs. Excels at conceptual semantics and intent. Struggles with exact SKU/ID lookups.
• Hybrid Search: Executes both lexical BM25 and vector kNN queries in parallel, merging candidate lists using Reciprocal Rank Fusion (RRF):
  RRF_Score(d) = sum(1 / (k + rank_lexical(d))) + sum(1 / (k + rank_vector(d))).
Delivers the highest retrieval quality in modern discovery systems.`,
    },
    {
      id: "qa-5",
      question: "5. How do you handle indexing lag when a job is unpublished?",
      summary: "Immediate tombstone / authoritative filter at query time vs soft deletion.",
      answer: `If a recruiter closes a job, asynchronous indexing lag (1–5 seconds) could allow candidates to view or apply to a closed listing.
Mitigations:
1. High-Priority Deletion Topic: Route deletion and unpublish events to a dedicated, high-priority Kafka topic to process tombstone events before bulk updates.
2. Authoritative Secondary Check: When a user clicks a search result card, the detail API performs an authoritative PostgreSQL read: status == 'published'. If closed, return a 404/expired notice.
3. Fast Cache Eviction: Immediately purge the job from Redis hot listing caches upon status transition.`,
    },
    {
      id: "qa-6",
      question: "6. Compare fan-out-on-write and fan-out-on-read for a feed system with several million users.",
      summary: "Push vs Pull, write amplification, read latency, and resource trade-offs.",
      answer: `• Fan-Out-on-Write (Push):
  - Ingestion: When user publishes a post, background workers write the post ID into every follower's Redis timeline list (LPUSH timeline:user_id post_id).
  - Pros: Feed reads are instant O(1) LRANGE fetches (< 5ms).
  - Cons: High write amplification. A creator with 1M followers triggers 1M database writes for a single post.
• Fan-Out-on-Read (Pull):
  - Ingestion: New post writes once to posts table.
  - Retrieval: When a user opens their feed, query the list of accounts they follow, fetch the top 20 recent posts across those accounts, and merge-sort them in memory.
  - Pros: Zero write amplification. Fast publication.
  - Cons: High read latency (50–200ms) and heavy database JOIN load.
• Recommendation: Hybrid model. Push for ordinary users (< 5,000 followers); pull and merge at read-time for high-volume celebrity/enterprise accounts.`,
    },
    {
      id: "qa-7",
      question: "7. How would you prevent one high-volume publisher from overwhelming the feed pipeline?",
      summary: "Celebrity fan-out mitigation, dynamic thresholding, and read-time fan-in.",
      answer: `1. Celebrity Threshold: Classify accounts with > 25,000 followers as 'high-fanout'.
2. Separate Outbox: When a high-fanout publisher posts, do NOT fan out to follower timelines. Instead, store the post in the publisher's dedicated outbox.
3. Read-Time Merge: When a follower requests their feed, fetch their precomputed timeline (from ordinary follows) and dynamically merge the top posts from any high-fanout publishers they follow.
4. Rate Limiting: Enforce per-publisher publication velocity limits to prevent automated bots from spamming follower inboxes.`,
    },
    {
      id: "qa-8",
      question: "8. Design a personalized learning recommendation system for new and returning PrepSpaces users.",
      summary: "3-stage pipeline: Candidate Generation, Multi-Factor Ranking, Re-ranking constraints.",
      answer: `1. Stage 1: Candidate Generation:
   - For returning users: Retrieve lessons based on collaborative filtering (users who completed Lesson A also completed B) and vector embeddings of user skill gaps.
   - For cold-start users: Retrieve trending lessons matching the user's declared target role (e.g. Java Backend) from onboarding surveys.
2. Stage 2: Ranking:
   - Score candidates using a gradient boosted decision tree (XGBoost) with features: user skill gap match, topic affinity, course completion rate, and recency.
3. Stage 3: Business Re-ranking:
   - Hard filter: Exclude already completed lessons.
   - Diversity rule: Max 2 lessons per category to avoid concurrency-only fatigue.
   - Deduplication: Ensure newly recommended lessons haven't been dismissed in the last 14 days.`,
    },
    {
      id: "qa-9",
      question: "9. How would you address cold-start users and cold-start content?",
      summary: "Onboarding preferences, content-based metadata, and exploration bandits.",
      answer: `• Cold-Start Users:
  - Onboarding Questionnaire: Collect explicit preferences (target role, primary programming language, years of experience).
  - Heuristic Popularity: Recommend top-rated, introductory modules within declared domains.
  - Progressive Profiling: Update candidate generation after the user's very first problem attempt.
• Cold-Start Content:
  - Content-Based Tagging: Extract skills, topics, and difficulty from course transcripts and descriptions.
  - Exploration Budget: Allocate 5% of feed impressions to newly published courses to gather baseline engagement data (Multi-Armed Bandits / Thompson Sampling).`,
    },
    {
      id: "qa-10",
      question: "10. What metrics would you use to evaluate ranking quality beyond click-through rate?",
      summary: "Offline metrics (NDCG, Recall@K) vs Online satisfaction (Completion, Dwell Time).",
      answer: `• Offline Metrics:
  - NDCG@K (Normalized Discounted Cumulative Gain): Measures whether the most relevant items appear at the very top of the list.
  - Precision@K & Recall@K: Proportion of recommended items that are genuinely relevant.
  - Catalog Coverage & Diversity: Ensuring recommendations do not collapse onto a small subset of viral courses.
• Online Metrics:
  - Lesson Completion Rate: Did the user finish the recommended lesson (quality metric vs clickbait).
  - Downstream Action Rate: Did the recommendation lead to a passed mock interview or job application?
  - Dismissal / 'Not Interested' Rate: Measures negative feedback and recommendation fatigue.`,
    },
    {
      id: "qa-11",
      question: "11. How would you prevent repetitive recommendations and stale feed entries?",
      summary: "Impression discounting, category throttling, and decay functions.",
      answer: `1. Impression Discounting: If a user sees an item in their feed 3 times without interacting, penalize its ranking score by 50% or suppress it for 7 days.
2. Category Throttling: Enforce maximum limits per category (e.g. no more than 2 system design lessons consecutively).
3. Exponential Freshness Decay: Apply a time decay function: Freshness = exp(-lambda * delta_t) so older unread items naturally yield to newly published content.
4. User Control: Provide explicit 'Not Interested' and 'Already Know This' controls that immediately register negative feedback in the feature store.`,
    },
    {
      id: "qa-12",
      question: "12. Design a CDN strategy for public course media and private interview reports.",
      summary: "Multi-tiered caching, Cache-Control headers, and Time-Limited Signed URLs.",
      answer: `• Public Course Media (Thumbnails, Video Segments, Static Bundles):
  - Store on S3/GCS behind Cloudflare CDN.
  - Headers: 'Cache-Control: public, max-age=31536000, immutable' for versioned JS/CSS/HLS segments.
  - Edge Cache Status: Cached across global PoPs, achieving < 15ms latency.
• Private Interview Reports & Resumes:
  - Headers: 'Cache-Control: private, no-store, must-revalidate'.
  - Edge Behavior: Bypass shared edge caches entirely to prevent cross-tenant data leakage.
  - Secure Access: Generate HMAC-signed URLs (e.g. AWS CloudFront Signed URLs or S3 Presigned URLs) with a strict 15-minute expiration after validating tenant permissions.`,
    },
    {
      id: "qa-13",
      question: "13. How do cache keys, TTLs, invalidation, and signed URLs influence content delivery?",
      summary: "Variance dimensions, cache stampedes, stale-while-revalidate, and bearer security.",
      answer: `• Cache Keys: Must include all variance dimensions (URI path, query parameters, format/encoding, language header). Omitting an attribute results in cache collisions (e.g. serving French content to English users).
• TTLs: Long TTLs maximize origin offload; short TTLs ensure freshness. Use 'stale-while-revalidate' to serve cached data instantly while refreshing asynchronously in the background.
• Invalidation: Use content-addressable filenames (hash in filename) for static assets. For mutable content, use API-driven tag/surrogate-key purging.
• Signed URLs: Act as time-bounded bearer tokens. Ensure short TTLs (5–15 mins) and restrict access to authorized user IPs if high security is required.`,
    },
    {
      id: "qa-14",
      question: "14. How would you isolate search indexes and caches for a multi-tenant SaaS platform?",
      summary: "Routing keys, mandatory tenant filters, and namespaced cache keys.",
      answer: `1. Elasticsearch Tenant Routing: Include 'tenant_id' as a routing key: '_routing: tenant_123'. This ensures all documents for a tenant reside on the same shard, accelerating filtering and guaranteeing no cross-tenant query scans.
2. Mandatory Filter Clauses: Wrap all search queries in a mandatory 'filter: { term: { tenant_id: authenticatedTenantId } }' generated by the server, never accepting tenant filters from client payloads.
3. Namespaced Cache Keys: Prefix all Redis cache keys with tenant ID: 'cache:tenant_123:search:hash'.
4. CDN Isolation: Never cache multi-tenant responses on shared CDN edges without tenant ID in the cache key or using signed tokens.`,
    },
    {
      id: "qa-15",
      question: "15. How would you measure query latency, feed latency, index freshness, cache hit rate, and delivery cost?",
      summary: "SLIs, OpenTelemetry tracing, Prometheus metrics, and CDN egress accounting.",
      answer: `1. Query Latency: Measure p50, p95, and p99 search duration via OpenTelemetry traces attached to Elasticsearch REST calls. Target p95 < 50ms.
2. Feed Latency: Track time to assemble top-20 feed items. Target < 25ms for precomputed feeds, < 100ms for hybrid feeds.
3. Index Freshness (Indexing Lag): Record timestamp delta: Lag = IndexTime - DatabaseCommitTime. Alert if p95 lag > 5 seconds.
4. CDN Cache Hit Rate: Measure Edge Hit Ratio = EdgeHits / TotalRequests. Target > 90% for public media.
5. Delivery Cost: Monitor CDN egress bandwidth (GB transferred) and origin fetch volume to identify uncompressed assets or missing cache headers.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-900 font-sans antialiased">
      {/* Top Breadcrumb & Title Header */}
      <div className="border-b border-stone-200 bg-[#faf8f4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-700">
                <span>System Design Masterclass</span>
                <span className="text-stone-400">/</span>
                <span>Advanced Application Architecture</span>
                <span className="text-stone-400">/</span>
                <span>Weeks 39–40</span>
              </div>
              <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-stone-900">
                Module 20: Search, Feeds, Recommendations, and Content Delivery
              </h1>
              <p className="mt-1 text-sm text-stone-700 max-w-3xl">
                Architect high-performance discovery and distribution systems: inverted indexes,
                BM25/vector hybrid search, feed fan-out-on-write vs. read, multi-stage
                recommendations, and CDN edge security.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200">
                <Search className="w-3.5 h-3.5 mr-1 text-orange-600" />
                Discovery & Delivery
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-700 border border-stone-200">
                <Clock className="w-3.5 h-3.5 mr-1 text-stone-500" />
                2 Weeks · 35–45 Hours
              </span>
            </div>
          </div>

          {/* Module Navigation Tabs */}
          <div className="mt-6 flex flex-wrap gap-2 border-b border-stone-200 pb-px">
            {[
              { id: "curriculum", label: "Curriculum & Lessons", icon: BookOpen },
              { id: "simulators", label: "Interactive Simulators", icon: Sliders },
              { id: "qa", label: "Senior Interview Q&A (15)", icon: FileText },
              { id: "assignments", label: "Hands-On Labs (5)", icon: Workflow },
              { id: "assessment", label: "Knowledge Check (7)", icon: HelpCircle },
              { id: "reading", label: "Technical Reading", icon: Globe },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-t-lg transition-all border-b-2 ${
                    activeTab === tab.id
                      ? "border-orange-600 bg-white text-stone-900 shadow-sm"
                      : "border-transparent text-stone-700 hover:text-stone-900 hover:bg-stone-100/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${activeTab === tab.id ? "text-orange-600" : "text-stone-500"}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Global Module Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <ModuleNav />
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* =====================================================================
            TAB 1: CURRICULUM & LESSONS
            ===================================================================== */}
        {activeTab === "curriculum" && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Lesson Picker */}
            <div className="lg:col-span-1 space-y-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200">
                <div className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-3 flex items-center justify-between">
                  <span>Syllabus Breakdown</span>
                  <span className="text-orange-600 font-mono">16 Lessons</span>
                </div>
                <div className="space-y-1">
                  {[
                    { id: "20.1", title: "1. Module Overview" },
                    { id: "20.2", title: "2. Four Problems, Four Systems" },
                    { id: "20.3", title: "3. Search System Architecture" },
                    { id: "20.4", title: "4. Search Technologies & Selection" },
                    { id: "20.5", title: "5. Search Relevance & Scoring" },
                    { id: "20.6", title: "6. Autocomplete, Facets & Pagination" },
                    { id: "20.7", title: "7. Keeping Search Indexes Fresh" },
                    { id: "20.8", title: "8. Feed Architecture (Write vs Read)" },
                    { id: "20.9", title: "9. Building Efficient Feeds" },
                    { id: "20.10", title: "10. Recommendation Pipelines" },
                    { id: "20.11", title: "11. Recommendation & Cold-Start" },
                    { id: "20.12", title: "12. Evaluating Recommendations" },
                    { id: "20.13", title: "13. Content Delivery Networks (CDNs)" },
                    { id: "20.14", title: "14. CDN Keys, TTL & Invalidation" },
                    { id: "20.15", title: "15. Video, Image & Document Delivery" },
                    { id: "20.16", title: "16. Integrated PrepSpaces Architecture" },
                  ].map((lesson) => (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLesson(lesson.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                        activeLesson === lesson.id
                          ? "bg-stone-900 text-white font-semibold"
                          : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                      }`}
                    >
                      {lesson.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Principle Badge */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-600" />
                  Fundamental Principle
                </h4>
                <p className="text-xs text-amber-950 leading-relaxed">
                  Search finds candidates, feeds assemble timelines, recommendations predict utility,
                  and CDNs accelerate edge delivery. Never allow a derived search index or feed to
                  bypass authoritative database authorization.
                </p>
              </div>
            </div>

            {/* Main Lesson Reader */}
            <div className="lg:col-span-3 space-y-6">
              {/* LESSON 20.1 */}
              {activeLesson === "20.1" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 20.1</span>
                    <span>•</span>
                    <span>Overview</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Module Overview: Large-Scale Discovery & Content Delivery
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    How do you design a platform that can search millions of records, generate
                    personalized feeds for thousands of users, recommend relevant content, and deliver
                    images or videos quickly around the world?
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Modern applications combine indexing systems, ranking algorithms, caching layers,
                    recommendation pipelines, background workers, and content delivery networks
                    (CDNs) to power instantaneous discovery without overwhelming the primary database.
                  </p>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Core Learning Objectives
                    </h3>
                    <ul className="space-y-1.5 text-xs text-stone-700 list-disc list-inside">
                      <li>Design search systems using inverted indexes, full-text search, and vector search.</li>
                      <li>Understand query analysis, relevance scoring, filtering, faceting, and autocomplete.</li>
                      <li>Compare feed fan-out-on-write, fan-out-on-read, and hybrid architectures.</li>
                      <li>Design multi-stage recommendation pipelines (Candidate Generation, Ranking, Re-ranking).</li>
                      <li>Handle cold-start users and cold-start content without repetitive recommendations.</li>
                      <li>Build efficient cursor-based pagination for large datasets and feeds.</li>
                      <li>Design CDN edge caching, cache invalidation, signed URLs, and adaptive media streaming.</li>
                      <li>Maintain consistency between search indexes and authoritative database state.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* LESSON 20.2 */}
              {activeLesson === "20.2" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 20.2</span>
                    <span>•</span>
                    <span>Systems Comparison</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Four Problems, Four Different Systems
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Discovery and delivery encompass four distinct responsibilities that should not
                    share a single implementation or datastore:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                        <Search className="w-4 h-4 text-orange-600" />
                        1. Search
                      </div>
                      <p className="text-xs text-stone-700 mt-1">
                        <strong>Question:</strong> Which records match this query? (e.g. Find Java jobs in Pune).
                      </p>
                      <p className="text-xs text-stone-700 mt-1">
                        <strong>Primary Concern:</strong> Relevance scoring, filtering, freshness, and query latency.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                        <Share2 className="w-4 h-4 text-emerald-600" />
                        2. Feeds
                      </div>
                      <p className="text-xs text-stone-700 mt-1">
                        <strong>Question:</strong> Which items should appear in this user's stream, and in what order?
                      </p>
                      <p className="text-xs text-stone-700 mt-1">
                        <strong>Primary Concern:</strong> Fast retrieval, ranking, freshness, and low-latency feed generation.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        3. Recommendations
                      </div>
                      <p className="text-xs text-stone-700 mt-1">
                        <strong>Question:</strong> Which items are most useful for this particular user?
                      </p>
                      <p className="text-xs text-stone-700 mt-1">
                        <strong>Primary Concern:</strong> Personalization, topic affinity, diversity, feedback, and cold-start.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5">
                        <Globe className="w-4 h-4 text-purple-600" />
                        4. Content Delivery (CDN)
                      </div>
                      <p className="text-xs text-stone-700 mt-1">
                        <strong>Question:</strong> How can the user download or stream this content quickly?
                      </p>
                      <p className="text-xs text-stone-700 mt-1">
                        <strong>Primary Concern:</strong> Edge latency, throughput, caching, availability, and egress cost.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 20.3 */}
              {activeLesson === "20.3" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 20.3</span>
                    <span>•</span>
                    <span>Search Pipeline</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Search System Architecture & Inverted Indexing
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A search engine separates preparing searchable data (indexing) from answering
                    queries. An inverted index maps searchable terms directly to document IDs.
                  </p>
                  {/* Embedded Diagram 1 */}
                  <InvertedIndexDiagram />
                </div>
              )}

              {/* LESSON 20.4 */}
              {activeLesson === "20.4" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 20.4</span>
                    <span>•</span>
                    <span>Technology Selection</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Search Technologies and When to Use Them
                  </h2>
                  <div className="p-4 rounded-xl bg-white border border-stone-200 overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead>
                        <tr className="border-b border-stone-200 text-stone-700 font-bold uppercase tracking-wider">
                          <th className="pb-2">Technology</th>
                          <th className="pb-2">Suitable Workload</th>
                          <th className="pb-2">Limitations to Consider</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-700">
                        <tr>
                          <td className="py-2.5 font-bold text-stone-900">Database Indexes (B-Tree)</td>
                          <td className="py-2.5">Exact matching, structured filters, range scans</td>
                          <td className="py-2.5">Complex text relevance and fuzzy matching are slow</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-bold text-stone-900">PostgreSQL Full-Text Search</td>
                          <td className="py-2.5">Text retrieval alongside relational application data (&lt; 1M rows)</td>
                          <td className="py-2.5">Less specialized for massive scale, faceting, and autocomplete</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-bold text-stone-900">Elasticsearch / OpenSearch</td>
                          <td className="py-2.5">Rich text search, BM25 scoring, real-time facets, autocomplete</td>
                          <td className="py-2.5">Separate infrastructure, operational cost, and indexing lag</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-bold text-stone-900">Vector Search (HNSW / kNN)</td>
                          <td className="py-2.5">Semantic similarity and embedding-based retrieval</td>
                          <td className="py-2.5">Requires embedding models, compute cost, and relevance calibration</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 font-bold text-stone-900">Hybrid Search (RRF)</td>
                          <td className="py-2.5">Combining lexical keywords with semantic embeddings</td>
                          <td className="py-2.5">Higher query complexity and score fusion tuning</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* LESSON 20.5 */}
              {activeLesson === "20.5" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 20.5</span>
                    <span>•</span>
                    <span>Relevance</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Search Relevance: Matching Is Not Enough
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A search engine must return the most useful results first. If a candidate searches
                    for "Java backend developer", jobs with "Java Backend" in the title must score
                    significantly higher than a frontend role that merely mentions JavaScript once.
                  </p>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 space-y-2">
                    <div className="font-bold text-stone-900">Conceptual Scoring Formula:</div>
                    <div className="font-mono text-sm text-orange-700">
                      Score(d, q) = w_t * T + w_s * S + w_p * P + w_f * F
                    </div>
                    <p className="text-stone-700">
                      Where <strong>T</strong> = title-match strength, <strong>S</strong> = skill-match,{" "}
                      <strong>P</strong> = phrase match, and <strong>F</strong> = freshness decay.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950">
                    <strong>Filters vs. Relevance Scoring:</strong> Tenant permissions and status
                    checks must always be <em>eligibility filters</em> (yes/no), never weak scoring
                    weights. An unauthorized document must be excluded, not merely ranked lower.
                  </div>
                </div>
              )}

              {/* LESSON 20.6 */}
              {activeLesson === "20.6" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 20.6</span>
                    <span>•</span>
                    <span>Pagination & Facets</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Autocomplete, Faceted Search, and Cursor Pagination
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Offset pagination degrades rapidly at scale. When requesting{" "}
                    <code className="text-orange-700">OFFSET 100000 LIMIT 20</code>, the database must
                    fetch and discard 100,000 rows. Cursor pagination solves this.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
                      <div className="text-rose-400 mb-1">-- Anti-pattern: Deep Offset Pagination</div>
                      <pre className="text-stone-300">{`SELECT job_id, title 
FROM jobs 
WHERE status = 'published' 
ORDER BY created_at DESC, job_id DESC 
LIMIT 20 OFFSET 100000;
-- Scans & discards 100k rows!`}</pre>
                    </div>

                    <div className="p-3 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
                      <div className="text-emerald-400 mb-1">-- Best Practice: Cursor Pagination</div>
                      <pre className="text-stone-300">{`SELECT job_id, title, created_at 
FROM jobs 
WHERE status = 'published' 
  AND (created_at, job_id) < ($lastTime, $lastId) 
ORDER BY created_at DESC, job_id DESC 
LIMIT 20;
-- Direct O(1) index seek!`}</pre>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 20.7 */}
              {activeLesson === "20.7" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 20.7</span>
                    <span>•</span>
                    <span>Index Freshness</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Keeping Search Indexes Fresh & Deletion Handling
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Search indexes are derived data. If a recruiter closes a job, asynchronous indexing
                    lag could allow candidates to see stale postings.
                  </p>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                    <div className="font-bold text-stone-900">Reliable Indexing Pipeline:</div>
                    <div>1. <strong>Database Transaction:</strong> Update status in PostgreSQL.</div>
                    <div>2. <strong>Transactional Outbox / CDC:</strong> Debezium reads WAL and streams to Kafka.</div>
                    <div>3. <strong>Idempotent Indexing Worker:</strong> Applies upserts/deletes to Elasticsearch.</div>
                    <div>4. <strong>Reconciliation:</strong> Nightly batch hash check repairs stale documents.</div>
                  </div>
                </div>
              )}

              {/* LESSON 20.8 */}
              {activeLesson === "20.8" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 20.8</span>
                    <span>•</span>
                    <span>Feed Architecture</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Feed Architecture: Fan-Out-on-Write vs. Fan-Out-on-Read
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Assembling feeds requires balancing write amplification against read-time query
                    load. For high-volume publishers, hybrid fan-out is essential.
                  </p>
                  {/* Embedded Diagram 2 */}
                  <FeedFanoutDiagram />
                </div>
              )}

              {/* LESSON 20.9 */}
              {activeLesson === "20.9" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 20.9</span>
                    <span>•</span>
                    <span>Feed Engineering</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Building Efficient Feeds: Store References, Not Copies
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A feed entry should only store the item pointer and ranking metadata, not the full
                    entity payload.
                  </p>
                  <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs">
                    <pre className="text-emerald-400 mb-1">// Lean Feed Entry Schema in Redis / DynamoDB</pre>
                    <pre className="text-stone-300">{`{
  "userId": "user_42",
  "itemId": "job_101",
  "itemType": "job",
  "rank": 0.87,
  "createdAt": "2026-10-12T08:00:00Z"
}`}</pre>
                  </div>
                  <p className="text-xs text-stone-700">
                    Batch-hydrate titles and applicant counts from PostgreSQL/Redis at read time. If a
                    job is deleted, hydration naturally filters it out!
                  </p>
                </div>
              )}

              {/* LESSON 20.10 & 20.11 */}
              {(activeLesson === "20.10" || activeLesson === "20.11") && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson {activeLesson}</span>
                    <span>•</span>
                    <span>Recommendation Systems</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Multi-Stage Recommendation Pipelines & The Cold-Start Problem
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Industrial recommendation systems follow Google's 3-stage model:{" "}
                    <strong>Candidate Generation</strong> (Recall) ➔ <strong>Ranking</strong> (Precision) ➔{" "}
                    <strong>Re-Ranking & Diversity</strong> (Business Constraints).
                  </p>

                  {/* Interactive Recommendation Simulator */}
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-2">
                      <span className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                        Interactive 3-Stage Recommender Simulator
                      </span>
                      <div className="flex items-center gap-2">
                        <label className="text-xs text-stone-700 flex items-center gap-1 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={hideCompleted}
                            onChange={(e) => setHideCompleted(e.target.checked)}
                            className="accent-orange-600"
                          />
                          Filter Completed Lessons
                        </label>
                        <label className="text-xs text-stone-700 flex items-center gap-1 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={diversityFilterEnabled}
                            onChange={(e) => setDiversityFilterEnabled(e.target.checked)}
                            className="accent-orange-600"
                          />
                          Enforce Diversity (Max 2/Cat)
                        </label>
                      </div>
                    </div>

                    {/* Weight Sliders */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                      <div className="p-2 rounded bg-white border border-stone-200">
                        <div className="flex justify-between font-semibold">
                          <span>Relevance:</span>
                          <span className="text-orange-600 font-mono">{wRelevance}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={wRelevance}
                          onChange={(e) => setWRelevance(parseFloat(e.target.value))}
                          className="w-full accent-orange-600"
                        />
                      </div>
                      <div className="p-2 rounded bg-white border border-stone-200">
                        <div className="flex justify-between font-semibold">
                          <span>Skill Match:</span>
                          <span className="text-orange-600 font-mono">{wSkill}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={wSkill}
                          onChange={(e) => setWSkill(parseFloat(e.target.value))}
                          className="w-full accent-orange-600"
                        />
                      </div>
                      <div className="p-2 rounded bg-white border border-stone-200">
                        <div className="flex justify-between font-semibold">
                          <span>Freshness:</span>
                          <span className="text-orange-600 font-mono">{wFreshness}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={wFreshness}
                          onChange={(e) => setWFreshness(parseFloat(e.target.value))}
                          className="w-full accent-orange-600"
                        />
                      </div>
                      <div className="p-2 rounded bg-white border border-stone-200">
                        <div className="flex justify-between font-semibold">
                          <span>Popularity:</span>
                          <span className="text-orange-600 font-mono">{wPopularity}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={wPopularity}
                          onChange={(e) => setWPopularity(parseFloat(e.target.value))}
                          className="w-full accent-orange-600"
                        />
                      </div>
                    </div>

                    {/* Output List */}
                    <div className="space-y-1.5">
                      {rankedCandidates.map((item, idx) => (
                        <div
                          key={item.id}
                          className="p-2 rounded bg-white border border-stone-200 flex items-center justify-between text-xs"
                        >
                          <div>
                            <span className="font-bold text-stone-900 mr-2">#{idx + 1}</span>
                            <span className="font-semibold text-stone-800">{item.title}</span>
                            <span className="ml-2 px-1.5 py-0.5 rounded text-[10px] bg-stone-100 text-stone-600">
                              {item.category}
                            </span>
                          </div>
                          <span className="font-mono font-bold text-orange-600">
                            Score: {item.compositeScore}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 20.12 */}
              {activeLesson === "20.12" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 20.12</span>
                    <span>•</span>
                    <span>Evaluation</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Evaluating Recommendations: Offline & Online Metrics
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Click-Through Rate (CTR) alone is a misleading metric because clickbait distorts
                    user engagement. Balance precision with downstream satisfaction:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">Offline Metrics</div>
                      <ul className="mt-1 space-y-1 text-stone-700 list-disc list-inside">
                        <li><strong>Precision@K & Recall@K:</strong> Ratio of top-K items that are relevant.</li>
                        <li><strong>NDCG@K:</strong> Rewards relevant items placed near the top.</li>
                        <li><strong>Catalog Coverage:</strong> Prevents recommendation bias to viral content.</li>
                      </ul>
                    </div>
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">Online & Guardrail Metrics</div>
                      <ul className="mt-1 space-y-1 text-stone-700 list-disc list-inside">
                        <li><strong>Lesson Completion Rate:</strong> True metric of learning value.</li>
                        <li><strong>Dismissal Rate:</strong> Fraction of users clicking 'Not Interested'.</li>
                        <li><strong>Latency & Cost:</strong> p95 inference time under 30ms.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 20.13, 20.14, 20.15 */}
              {(activeLesson === "20.13" || activeLesson === "20.14" || activeLesson === "20.15") && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson {activeLesson}</span>
                    <span>•</span>
                    <span>CDN & Content Delivery</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Content Delivery Networks, Invalidation & Signed URLs
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Public assets belong on CDN edge caches. Private interview reports and candidate
                    resumes must bypass shared caches and require short-lived HMAC Signed URLs.
                  </p>
                  {/* Embedded Diagram 3 */}
                  <CdnSecurityDiagram />
                </div>
              )}

              {/* LESSON 20.16 */}
              {activeLesson === "20.16" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 20.16</span>
                    <span>•</span>
                    <span>Case Study</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Integrated Discovery & Delivery Architecture for PrepSpaces
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    The complete end-to-end architecture coordinating search, feeds, recommendations,
                    and CDN edge delivery:
                  </p>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs text-stone-700">
                    <div>• <strong>React Client:</strong> Debounced autocomplete (300ms) + video player (HLS).</div>
                    <div>• <strong>API Gateway:</strong> Tenant authorization checks before issuing search/feed queries.</div>
                    <div>• <strong>Elasticsearch Cluster:</strong> Powers job/course search with BM25 + location filters.</div>
                    <div>• <strong>Feed & Recs Engine:</strong> Precomputed Redis ZSet feeds + 3-stage recommendation ranking.</div>
                    <div>• <strong>Cloudflare CDN + S3:</strong> Public immutable bundles + private signed URLs for reports.</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 2: INTERACTIVE SIMULATORS
            ===================================================================== */}
        {activeTab === "simulators" && (
          <div className="space-y-8">
            <InvertedIndexDiagram />
            <FeedFanoutDiagram />
            <CdnSecurityDiagram />
          </div>
        )}

        {/* =====================================================================
            TAB 3: SENIOR INTERVIEW Q&A (15 QUESTIONS)
            ===================================================================== */}
        {activeTab === "qa" && (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white border border-stone-200 mb-6">
              <h3 className="text-lg font-bold text-stone-900">
                15 Senior System Design Interview Questions & Model Answers
              </h3>
              <p className="text-xs text-stone-700 mt-1">
                In-depth architectural justifications covering inverted indexes, fan-out write
                amplification, vector search, cold-start mitigation, and signed URLs.
              </p>
            </div>

            <div className="space-y-3">
              {interviewQuestions.map((qa) => (
                <div
                  key={qa.id}
                  className="rounded-xl border border-stone-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleQA(qa.id)}
                    className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-stone-50 transition-colors"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-stone-900">{qa.question}</h4>
                      <p className="text-xs text-stone-700 mt-0.5">{qa.summary}</p>
                    </div>
                    <span className="text-xs font-bold text-orange-600 px-2 py-1 rounded bg-orange-50 border border-orange-200">
                      {expandedQA[qa.id] ? "Collapse" : "Expand"}
                    </span>
                  </button>
                  {expandedQA[qa.id] && (
                    <div className="p-4 border-t border-stone-100 bg-[#faf8f4] text-xs text-stone-800 leading-relaxed font-mono whitespace-pre-wrap">
                      {qa.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 4: HANDS-ON LABS (5 LABS)
            ===================================================================== */}
        {activeTab === "assignments" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-white border border-stone-200 mb-6">
              <h3 className="text-lg font-bold text-stone-900">5 Hands-On Production Labs & Deliverables</h3>
              <p className="text-xs text-stone-700 mt-1">
                Step-by-step engineering exercises testing search relevancy, indexing pipelines,
                feed write amplification, recommendation ranking, and CDN caching.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* LAB 1 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 1 · Search
                  </span>
                  <span className="text-xs font-mono text-stone-700">Relevance & Filters</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Build Job and Course Search Endpoints
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Create search endpoints for title, skills, location, experience, and publication
                  status. Implement relevance ordering with weighted field matches, structured
                  filters, and cursor-based pagination.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> An API, test dataset, and
                  search quality evaluation containing representative queries with NDCG scoring.
                </div>
              </div>

              {/* LAB 2 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 2 · Indexing
                  </span>
                  <span className="text-xs font-mono text-stone-700">Transactional Outbox</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Build a Reliable Search-Index Pipeline
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Update source records in PostgreSQL, publish change events to a Kafka/Outbox worker,
                  handle duplicate and out-of-order events with version checks, and reconcile stale
                  documents.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> An indexing pipeline
                  demonstrating recovery from worker failures, tombstone deletion handling, and zero
                  stale documents.
                </div>
              </div>

              {/* LAB 3 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 3 · Feeds
                  </span>
                  <span className="text-xs font-mono text-stone-700">Write Amplification</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Compare Feed Generation Strategies Under Load
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Model fan-out-on-write, fan-out-on-read, and a hybrid system for users following
                  popular courses and enterprise job boards. Test with a simulated 200k follower blast.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> A capacity report covering
                  write amplification, feed retrieval latency, Redis RAM footprint, and publication
                  backlogs.
                </div>
              </div>

              {/* LAB 4 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 4 · Recommendations
                  </span>
                  <span className="text-xs font-mono text-stone-700">Candidate Generation & Diversity</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Build a Rule-Based Recommendation Engine
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Recommend lessons from stated skill goals, completed courses, and topic
                  compatibility. Apply hard eligibility filtering and category diversity throttling.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> A candidate-generation
                  pipeline, ranking formula, and offline evaluation dataset with Precision@K metrics.
                </div>
              </div>

              {/* LAB 5 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 5 · CDN Security
                  </span>
                  <span className="text-xs font-mono text-stone-700">Edge Caching & Signed URLs</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Design a Safe Content-Delivery Policy
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Configure caching policies for public course thumbnails, versioned frontend bundles,
                  and confidential interview evaluation reports. Implement HMAC signed URL validation.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> A cache policy table
                  covering cache keys, TTLs, invalidation rules, and signed download verification.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: KNOWLEDGE CHECK QUIZ (7 QUESTIONS)
            ===================================================================== */}
        {activeTab === "assessment" && (
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Module 20 Knowledge Check</h3>
                <p className="text-xs text-stone-700 mt-0.5">
                  7 questions assessing inverted indexes, fan-out trade-offs, candidate generation,
                  tenant eligibility, and CDN cache keys.
                </p>
              </div>
              {quizSubmitted && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-stone-900">
                    Your Score:{" "}
                    <span className="text-orange-600 font-mono">
                      {calculateScore()} / {quizQuestions.length}
                    </span>
                  </span>
                  <button
                    onClick={resetQuiz}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Reset Quiz
                  </button>
                </div>
              )}
            </div>

            <div className="space-y-6">
              {quizQuestions.map((q) => {
                const selected = selectedAnswers[q.id];
                const isCorrect = selected === q.correctIndex;
                return (
                  <div key={q.id} className="p-4 rounded-xl border border-stone-200 bg-[#faf8f4]">
                    <h4 className="text-sm font-bold text-stone-900 mb-3">{q.question}</h4>
                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = "border-stone-200 bg-white text-stone-800 hover:bg-stone-50";
                        if (quizSubmitted) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = "border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold";
                          } else if (selected === optIdx) {
                            btnStyle = "border-rose-500 bg-rose-50 text-rose-900";
                          } else {
                            btnStyle = "border-stone-200 bg-white text-stone-500 opacity-60";
                          }
                        } else if (selected === optIdx) {
                          btnStyle = "border-stone-900 bg-stone-900 text-white font-medium";
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`w-full text-left p-3 rounded-lg border text-xs transition-all flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {quizSubmitted && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                            {quizSubmitted && selected === optIdx && optIdx !== q.correctIndex && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                    {quizSubmitted && (
                      <div
                        className={`mt-3 p-3 rounded-lg text-xs ${
                          isCorrect ? "bg-emerald-100/60 text-emerald-900" : "bg-rose-100/60 text-rose-900"
                        }`}
                      >
                        <strong>Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {!quizSubmitted ? (
              <div className="flex justify-end pt-4 border-t border-stone-200">
                <button
                  onClick={() => setQuizSubmitted(true)}
                  disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
                  className={`px-6 py-2.5 rounded-xl text-xs font-bold text-white transition-all shadow-sm ${
                    Object.keys(selectedAnswers).length === quizQuestions.length
                      ? "bg-orange-600 hover:bg-orange-700 cursor-pointer"
                      : "bg-stone-300 cursor-not-allowed"
                  }`}
                >
                  Submit Answers & View Explanations
                </button>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-stone-100 text-center text-xs text-stone-700 font-medium">
                {calculateScore() === quizQuestions.length ? (
                  <span className="text-emerald-700 font-bold">
                    🎉 Outstanding! You mastered search, feeds, recommendations, and CDN delivery!
                  </span>
                ) : (
                  <span>Review the explanations above to reinforce key architectural principles.</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* =====================================================================
            TAB 6: RECOMMENDED TECHNICAL READING
            ===================================================================== */}
        {activeTab === "reading" && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-white border border-stone-200 mb-6">
              <h3 className="text-lg font-bold text-stone-900">Recommended Technical Reading</h3>
              <p className="text-xs text-stone-700 mt-1">
                Official specifications and engineering guides for inverted indexing, recommendations,
                and edge delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Elasticsearch — Query and Filter Context</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Learn relevance scores, query context, filters, and the mechanics of ranking
                    searchable documents.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://www.elastic.co/docs/reference/query-languages/query-dsl/query-filter-context"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Read Query & Filter Guide <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Google — Recommendation Systems</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Explore candidate generation, content-based filtering, collaborative filtering,
                    and embedding representations.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://developers.google.com/machine-learning/recommendation/overview/candidate-generation"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Read Candidate Generation Guide <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Cloudflare — CDN Caching Docs</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Study cache rules, browser and edge TTLs, cache keys, and methods for optimizing
                    origin traffic.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://developers.cloudflare.com/cache/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Read CDN Caching Docs <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Redis — Sorted Sets & Leaderboards</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Understand ordered data structures that support ranked lists, top-N retrieval,
                    and frequently updated feeds.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://redis.io/docs/latest/develop/data-types/sorted-sets/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Read Sorted Sets Guide <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between md:col-span-2">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">PostgreSQL — Full-Text Search</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Explore native text-search functions and operators (tsvector, tsquery, GIN
                    indexes) when search can be implemented alongside relational data.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://www.postgresql.org/docs/current/functions-textsearch.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Read PostgreSQL FTS Docs <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            MODULE COMPLETION BANNER
            ===================================================================== */}
        <div className="mt-12 p-6 rounded-2xl bg-[#faf8f4] border border-stone-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Module 20 Completion Criteria Met
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                You Have Mastered Search, Feeds, Recommendations & Content Delivery
              </h3>
              <p className="text-xs text-stone-700 mt-1 max-w-2xl leading-relaxed">
                You now possess the complete architecture to index millions of records with inverted
                indexes, engineer hybrid fan-out feeds, build multi-stage recommendation pipelines,
                and securely deliver edge-cached media and signed reports worldwide.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate("/learning/system-design/realtime")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous: Module 19 (Real-Time Systems)
              </button>
              <button
                onClick={() => navigate("/learning/system-design/ai-systems")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-[#f97316] text-white shadow-xs hover:bg-[#ea580c] transition cursor-pointer"
              >
                <span>Next: Module 21 (AI Systems & Inference)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
