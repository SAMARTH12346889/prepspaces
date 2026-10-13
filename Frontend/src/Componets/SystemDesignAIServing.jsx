import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cpu,
  Zap,
  Layers,
  Database,
  Search,
  Server,
  Activity,
  Sliders,
  Shield,
  Clock,
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  SlidersHorizontal,
  HardDrive,
  RefreshCw,
  Terminal,
  Play,
  RotateCcw,
  BookOpen,
  HelpCircle,
  Workflow,
  ExternalLink,
  Eye,
  FileText,
  Globe,
} from "lucide-react";
import ModuleNav from "./ModuleNav";
import {
  InferenceLifecycleDiagram,
  GpuMemoryCalculatorDiagram,
  HybridRetrievalDiagram,
  default as VisualDiagramComponentModule21,
} from "./SystemDesignAIServingDiagrams";

export default function SystemDesignAIServing() {
  const navigate = useNavigate();

  // Navigation tab state
  const [activeTab, setActiveTab] = useState("curriculum"); // "curriculum" | "simulators" | "qa" | "assignments" | "assessment" | "reading"
  const [activeLesson, setActiveLesson] = useState("21.1");

  // Expanded Q&A accordion states (15 Senior Interview Questions)
  const [expandedQA, setExpandedQA] = useState({ "qa-1": true });
  const toggleQA = (id) => {
    setExpandedQA((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // ---------------------------------------------------------------------------
  // INTERACTIVE INFERENCE CAPACITY PLANNING CALCULATOR STATE
  // ---------------------------------------------------------------------------
  const [reqArrivalRate, setReqArrivalRate] = useState(10); // requests / sec
  const [avgInputTokens, setAvgInputTokens] = useState(1000); // tokens / req
  const [avgOutputTokens, setAvgOutputTokens] = useState(300); // tokens / req
  const [avgResponseTimeSec, setAvgResponseTimeSec] = useState(5.0); // seconds per generation
  const [tokensPerSecPerGpu, setTokensPerSecPerGpu] = useState(600); // e.g. A100 continuous batching throughput

  // Math Computations
  const inputTokensPerSec = reqArrivalRate * avgInputTokens;
  const outputTokensDemand = reqArrivalRate * avgOutputTokens;
  const concurrencyLittlesLaw = Math.round(reqArrivalRate * avgResponseTimeSec);
  const minGpusRequired = Math.ceil(outputTokensDemand / tokensPerSecPerGpu);
  const provisionedGpusWithHeadroom = Math.ceil(minGpusRequired * 1.3);

  // ---------------------------------------------------------------------------
  // ASSESSMENT QUIZ STATE (8 QUESTIONS MATCHING PROMPT VERBATIM)
  // ---------------------------------------------------------------------------
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const quizQuestions = [
    {
      id: "q1",
      question: "1. What are the two main phases of autoregressive LLM generation?",
      options: [
        "Indexing and replication",
        "Prefill and decoding",
        "Compilation and deployment",
        "Authentication and authorization",
      ],
      correctIndex: 1,
      explanation:
        "Autoregressive LLM generation consists of (1) Prefill: parallel attention processing over the input prompt to initialize the KV cache, and (2) Decoding: sequential, token-by-token autoregressive generation.",
    },
    {
      id: "q2",
      question: "2. What is a major benefit of continuous batching?",
      options: [
        "It eliminates every form of model latency",
        "It allows compatible active and incoming requests to share compute more efficiently",
        "It makes model weights unnecessary",
        "It guarantees zero queueing",
      ],
      correctIndex: 1,
      explanation:
        "Unlike static batching where the GPU idles until the slowest sequence finishes, continuous batching (iteration-level scheduling) evicts finished requests and admits incoming requests at every iteration step.",
    },
    {
      id: "q3",
      question: "3. Why is model weight size not enough to calculate inference memory requirements?",
      options: [
        "Weights never use device memory",
        "KV cache and runtime allocations also consume memory",
        "The number of parameters does not matter at all",
        "Inference always executes on the CPU",
      ],
      correctIndex: 1,
      explanation:
        "Total VRAM requires: Model Weights + Dynamic KV Cache (proportional to concurrency * context length) + PyTorch/CUDA runtime buffers. KV cache can easily exceed weight size under high concurrency.",
    },
    {
      id: "q4",
      question: "4. What is the primary purpose of embeddings in a RAG pipeline?",
      options: [
        "Assign users administrative roles",
        "Compress every document into a text summary only",
        "Represent content as vectors that support semantic retrieval",
        "Replace the need for source permissions",
      ],
      correctIndex: 2,
      explanation:
        "Embeddings map textual passages into a high-dimensional vector space where semantically similar concepts cluster together, enabling conceptual retrieval beyond literal keyword matches.",
    },
    {
      id: "q5",
      question: "5. What does approximate nearest-neighbor search trade?",
      options: [
        "Authentication for encryption",
        "Potential recall for improved retrieval efficiency",
        "Data ownership for access control",
        "Model accuracy for unlimited context",
      ],
      correctIndex: 1,
      explanation:
        "ANN search (like HNSW or IVFFlat) trades a small fraction of perfect recall (e.g. 98% vs 100%) in exchange for orders-of-magnitude faster sub-10ms query execution across millions of vectors.",
    },
    {
      id: "q6",
      question: "6. Why should tenant filtering be integrated into vector retrieval?",
      options: [
        "Vector databases cannot store metadata",
        "Unauthorized content must not be supplied to the model as context",
        "Tenant filtering always improves recall automatically",
        "Embeddings encrypt documents by default",
      ],
      correctIndex: 1,
      explanation:
        "Vector proximity is not an authorization model. Without strict pre-filtering by tenant ID, semantically relevant documents belonging to another company can be retrieved and leaked into the model context.",
    },
    {
      id: "q7",
      question: "7. What is a useful optimization when many LLM requests share a stable prompt prefix?",
      options: [
        "Automatically increase all output limits",
        "Disable authentication",
        "Use prefix caching where supported and safely configured",
        "Store every user's full prompt in a public cache",
      ],
      correctIndex: 2,
      explanation:
        "Prefix caching stores precomputed KV-cache blocks for invariant prompt prefixes (system instructions, evaluation rubrics), completely bypassing the expensive prefill phase for repeated headers.",
    },
    {
      id: "q8",
      question: "8. Why can a RAG system still be vulnerable to prompt injection?",
      options: [
        "Vector search always executes SQL",
        "Retrieved documents can contain malicious instructions that influence the model",
        "Chunking guarantees incorrect results",
        "The model cannot read retrieved content",
      ],
      correctIndex: 1,
      explanation:
        "Indirect prompt injection occurs when untrusted documents (resumes, web pages, code snippets) contain hidden adversarial instructions that trick the LLM into ignoring system rules or exfiltrating data.",
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
      question: "1. Design an AI application capable of serving thousands of concurrent users.",
      summary: "End-to-end architecture: Gateway, Orchestration, Vector DB, vLLM cluster, and streaming.",
      answer: `1. Ingress & Auth: AWS ALB terminates TLS, validates JWTs, and enforces user token quotas (e.g., 50k tokens/day).
2. AI Orchestrator (BFF): Node.js/Go service handles intent classification, task routing, and prompt assembly. Lightweight tasks route to small models; complex evaluations route to larger models.
3. RAG Knowledge Pipeline: Ingests course documentation into PostgreSQL with pgvector (HNSW index). Hybrid retrieval combines lexical BM25 with vector kNN, fused via Reciprocal Rank Fusion (RRF).
4. Model-Serving Cluster: Kubernetes GPU worker nodes running vLLM with continuous batching and PagedAttention. vLLM servers expose OpenAI-compatible streaming endpoints via SSE.
5. Caching & Observability: Redis caches deterministic query embeddings and semantic responses. Prometheus tracks TTFT, queue wait, and GPU memory pressure via vLLM's /metrics endpoint.`,
    },
    {
      id: "qa-2",
      question: "2. What is the difference between prefill and decoding in LLM inference?",
      summary: "Compute-bound parallel prompt processing vs. Memory-bandwidth-bound sequential token generation.",
      answer: `• Prefill (Prompt Processing):
  - Execution: Processes all input tokens in parallel across transformer attention layers.
  - Hardware Profile: Compute-bound (matrix multiplications max out GPU Tensor Cores).
  - Output: Populates the KV-cache tensors for all prompt tokens.
• Decoding (Token Generation):
  - Execution: Generates output tokens autoregressively, one token per forward pass.
  - Hardware Profile: Memory-bandwidth-bound (entire multi-gigabyte model weights and KV cache must be loaded from HBM to SRAM for every single token generated).
  - Optimization: Continuous batching and speculative decoding specifically accelerate decoding efficiency.`,
    },
    {
      id: "qa-3",
      question: "3. How do TTFT, tokens per second, and total latency describe different aspects of performance?",
      summary: "Perceived interactivity vs. streaming smoothness vs. batch completion.",
      answer: `• Time to First Token (TTFT): Time from client request dispatch until the first token appears. Governed by network transit, queue admission wait, and the prefill phase. Critical for human perception of responsiveness.
• Inter-Token Latency (Tokens per Second per Stream): Time between successive output tokens during the decode phase (e.g. 25ms = 40 tokens/s). Dictates streaming reading smoothness.
• Total Latency: Overall time until completion (TTFT + num_tokens * inter_token_latency). Governed by output length; crucial for synchronous backend agent tools and evaluation reports.`,
    },
    {
      id: "qa-4",
      question: "4. How would you estimate model memory and KV-cache requirements?",
      summary: "Parameters * BytesPerParam + 2 * layers * hidden * seq_len * batch * dtype + runtime buffers.",
      answer: `1. Model Weights: Parameters * BytesPerParam. A 7B model in FP16 (2B) requires 14 GB; in INT4 (0.5B) requires 3.5 GB.
2. KV Cache Formula: Memory = 2 * n_layers * n_heads * d_head * n_tokens * dtype_bytes * batch_size.
   - For a 7B model (32 layers, hidden dimension 4096) in FP16: ~0.524 MB per 1,000 tokens per sequence.
   - For 64 concurrent users with an average context of 4,096 tokens: 64 * 4.096 * 0.524 MB ≈ 137 MB per stream ≈ 8.8 GB purely for KV cache!
3. Runtime Overhead: Reserve 2–3 GB for CUDA context, PyTorch activation buffers, and temporary tensor allocations.`,
    },
    {
      id: "qa-5",
      question: "5. Compare managed inference APIs, self-hosted inference, and hybrid serving.",
      summary: "Cost curves, operational burden, data residency, and SLA predictability.",
      answer: `• Managed APIs (OpenAI, Anthropic, Bedrock):
  - Pros: Zero GPU infrastructure to manage, instant access to frontier models, pay-per-token economics.
  - Cons: High unit costs at sustained volume, rate limit throttles, vendor lock-in, external data residency.
• Self-Hosted (vLLM on AWS EKS/GKE):
  - Pros: Complete data privacy (HIPAA/SOC2), deterministic tail latencies, cost savings at >60% sustained GPU utilization, custom fine-tuned weights.
  - Cons: GPU supply shortages, complex continuous batching configuration, idle GPU infrastructure cost.
• Hybrid Recommendation: Self-host high-throughput small models (7B/14B) for classification, embeddings, and basic tutoring; route complex evaluations and reasoning to frontier managed APIs.`,
    },
    {
      id: "qa-6",
      question: "6. What are the benefits and trade-offs of continuous batching and prefix caching?",
      summary: "Iteration-level scheduling and PagedAttention KV-block reuse.",
      answer: `• Continuous Batching (vLLM / TensorRT-LLM):
  - Benefit: Eliminates GPU underutilization caused by sequence length variance. Replaces static batching with iteration-level scheduling, increasing throughput by 3x–8x.
  - Trade-off: Higher implementation complexity; prefill spikes can cause temporary decode jitter (mitigated by chunked prefill).
• Prefix Caching (Radix Attention):
  - Benefit: Reuses KV-cache blocks across requests that share common system prompts or documents, reducing TTFT by up to 80% and slashing prefill compute.
  - Trade-off: Consumes additional VRAM to hold cached prefix blocks; requires cache-salting in multi-tenant systems to prevent timing attacks.`,
    },
    {
      id: "qa-7",
      question: "7. How would you scale a model-serving system when the GPU pool is saturated?",
      summary: "Queue shedding, dynamic model routing, quantization downgrade, and spot autoscaling.",
      answer: `1. Admission Control & Bounded Queues: Reject excess traffic with HTTP 429 / Retry-After rather than letting queue latency balloon unboundedly.
2. Dynamic Model Degradation: Fall back from a 70B model to an INT4-quantized 14B model when queue depth exceeds threshold.
3. Priority Queueing: Ensure interactive voice interviews and live coding mock sessions bypass batch report generation jobs.
4. Speculative Decoding: Pair a small draft model with the target model to generate multiple tokens per forward pass without adding GPUs.
5. Autoscaling: Scale worker nodes via Karpenter on AWS with pre-baked GPU container AMIs to minimize model cold-start pull times.`,
    },
    {
      id: "qa-8",
      question: "8. Design a model router that selects different models for classification, generation, and evaluation.",
      summary: "Task metadata classification, intent routing, latency budgets, and cost policies.",
      answer: `1. Deterministic Fast-Path: Use regex and route metadata for clear tasks (e.g. voice transcriptions directly route to Whisper).
2. Intent Classification: A fast, quantized 1B/3B classifier model categorizes user input into {FAQ, CODE_EXPLANATION, COMPLEX_RUBRIC_EVALUATION}.
3. Routing Rules:
   - FAQ / Concept: Small self-hosted 7B model + RAG.
   - Live Code Interaction: Fast 14B instruction model streaming at >50 tokens/s.
   - Comprehensive Mock Interview Grading: Multi-step reasoning pipeline utilizing an external frontier model.
4. Circuit Breakers: If the frontier API experiences elevated error rates, automatically downgrade evaluation requests to the local 70B backup cluster.`,
    },
    {
      id: "qa-9",
      question: "9. Explain how RAG works and how you would measure retrieval quality.",
      summary: "Chunking, vector embeddings, context injection, and RAG Triad evaluation.",
      answer: `• RAG Mechanics: Documents are split into semantic chunks, converted into dense vectors via an embedding model, and indexed in a vector store. At query time, the user prompt is embedded, top-K nearest chunks are retrieved, filtered by tenant permissions, and injected into the LLM system prompt.
• Measuring Retrieval Quality (The RAG Triad):
  1. Context Relevance: Are the retrieved passages actually relevant to the user query (measured by Recall@K and NDCG@K)?
  2. Groundedness (Faithfulness): Does the model's answer derive strictly from the retrieved context, or does it hallucinate?
  3. Answer Relevance: Does the generated response directly answer the user's initial question?`,
    },
    {
      id: "qa-10",
      question: "10. Compare exact vector search, HNSW, and IVFFlat.",
      summary: "Brute force distance vs. Proximity graphs vs. Inverted centroid Voronoi cells.",
      answer: `• Exact Search (Flat/Brute Force):
  - Computes Euclidean/Cosine distance against every vector in the database.
  - Recall: 100% exact.
  - Scale: Slow; query time scales linearly $O(N \cdot d)$. Unusable past 100k vectors.
• HNSW (Hierarchical Navigable Small World):
  - Multi-layer graph where top layers have long-range links and bottom layers have dense local links (skip-list on graphs).
  - Recall: Very high (95–99% tunable via ef_search).
  - Pros: Sub-5ms query latency at scale.
  - Cons: High memory footprint (stores graph connections in RAM); slow build times.
• IVFFlat (Inverted File Flat):
  - Partitions vector space into Voronoi cells using k-means clustering. At query time, only searches vectors in the closest $n_{probe}$ lists.
  - Pros: Fast index construction, low memory overhead.
  - Cons: Lower recall if $n_{probe}$ is too small; requires periodic re-clustering as vectors shift.`,
    },
    {
      id: "qa-11",
      question: "11. How would you design hybrid lexical and vector retrieval for Java documentation?",
      summary: "BM25 keyword matching + Dense embeddings fused via Reciprocal Rank Fusion (RRF).",
      answer: `1. Dual Indexing in PostgreSQL with pgvector:
   - Lexical column: tsvector generated from code headings and text; indexed via GIN.
   - Vector column: vector(1536) embedding; indexed via HNSW.
2. Dual Query Execution:
   - Query 1: Exact search for API names (e.g. 'ConcurrentHashMap.computeIfAbsent') via BM25.
   - Query 2: Dense cosine distance search for conceptual intent ('thread safe atomic dictionary updates').
3. Reciprocal Rank Fusion (RRF):
   - Combine scores: RRF_Score(d) = 1/(60 + Rank_BM25) + 1/(60 + Rank_Vector).
4. Cross-Encoder Reranker: Score the top 20 candidates through a lightweight BGE-Reranker model to supply the top 5 passages to the LLM.`,
    },
    {
      id: "qa-12",
      question: "12. How would you prevent cross-tenant document retrieval in a shared vector database?",
      summary: "Metadata pre-filtering, PostgreSQL Row-Level Security (RLS), and partitioned indexes.",
      answer: `1. Never Post-Filter: Finding the top 100 nearest vectors globally and then discarding unauthorized records can leave zero results and leak information through timing channels.
2. Metadata Pre-Filtering: Enforce mandatory tenant predicates inside the vector query:
   'SELECT * FROM knowledge_chunks WHERE tenant_id = $authTenantId ORDER BY embedding <=> $qVec LIMIT 5;'
3. PostgreSQL Row-Level Security: Enable RLS on the vector table so queries automatically execute under the tenant session variable 'app.tenant_id'.
4. Partitioned Tables: For large enterprise customers, create dedicated table partitions per tenant, ensuring vector index graphs (HNSW) are physically separated.`,
    },
    {
      id: "qa-13",
      question: "13. How do you make a RAG pipeline resilient to indexing lag and deleted documents?",
      summary: "CDC outbox, soft-deletion tombstones, and authoritative freshness checks.",
      answer: `1. Transactional Outbox: Document updates and deletions publish events to Kafka via Debezium CDC.
2. Immediate Vector Tombstones: When a document is unpublished, flag the vector chunk with 'is_active = false' or delete it from the vector index before async reindexing completes.
3. Authoritative Pre-Execution Check: Before injecting retrieved chunks into the prompt, verify document IDs against Redis hot cache or PostgreSQL master to confirm active status.
4. Citation Validation: Ensure generated answers cite specific, verified source document IDs.`,
    },
    {
      id: "qa-14",
      question: "14. How would you prevent prompt injection from influencing privileged backend actions?",
      summary: "System prompt fencing, dual-LLM architectures, and deterministic tool validation.",
      answer: `1. Structural Delimiters: Wrap all retrieved RAG context and user inputs in strict XML or Markdown tags (e.g. '<untrusted_context> ... </untrusted_context>') with explicit instructions that text inside delimiters contains data, not commands.
2. Dual-LLM Privilege Separation: Use an unprivileged model for synthesizing raw untrusted context, and a strictly isolated judge model with deterministic schema validation before executing actions (e.g. grading or submitting test results).
3. Deterministic Validation: Never allow an LLM to directly emit SQL, shell commands, or payment approvals. The model only emits structured JSON function calls validated against Zod schemas, with authorization verified by the backend API.`,
    },
    {
      id: "qa-15",
      question: "15. Design an AI serving platform with bounded queues, graceful degradation, observability, and cost controls.",
      summary: "End-to-end reliability architecture for PrepSpaces AI infrastructure.",
      answer: `1. Ingress & Token Budgets: Rate-limit candidates to 10 requests/minute and 50,000 tokens/day via Redis sliding-window limiters.
2. Queue Architecture: Bounded Redis/RabbitMQ queues with TTL deadlines (max 10s queue wait). Discard abandoned requests when clients disconnect.
3. Graceful Degradation: If GPU workers hit >95% VRAM pressure, disable RAG reranking, downgrade evaluation models from 70B to 14B, and stream low-cost template guidance.
4. Observability: OpenTelemetry spans trace each step (Tokenization -> Prefill -> Decode). Alert on TTFT > 1.5s or KV-cache eviction rate > 0.
5. Cost Attribution: Tag all inference spans with tenant_id, candidate_id, and model_name to track cost-per-interview and maintain financial sustainability.`,
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
                <span>AI Infrastructure & Distributed Systems</span>
                <span className="text-stone-400">/</span>
                <span>Weeks 41–43</span>
              </div>
              <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-stone-900">
                Module 21: AI System Architecture, Inference Serving, Vector Retrieval, and Model-Serving Scalability
              </h1>
              <p className="mt-1 text-sm text-stone-700 max-w-3xl">
                Master the architectural principles of production AI systems: prefill vs. decode
                phases, continuous batching, KV caching, GPU memory modeling, Retrieval-Augmented
                Generation (RAG), vector databases (HNSW/IVFFlat), and cost controls.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800 border border-orange-200">
                <Cpu className="w-3.5 h-3.5 mr-1 text-orange-600" />
                AI Infrastructure
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-stone-100 text-stone-700 border border-stone-200">
                <Clock className="w-3.5 h-3.5 mr-1 text-stone-500" />
                3 Weeks · 40–55 Hours
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
              { id: "assessment", label: "Knowledge Check (8)", icon: HelpCircle },
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
                    { id: "21.1", title: "1. Module Overview" },
                    { id: "21.2", title: "2. Anatomy of a Production AI System" },
                    { id: "21.3", title: "3. Understanding LLM Inference" },
                    { id: "21.4", title: "4. Managed API vs. Self-Hosted Serving" },
                    { id: "21.5", title: "5. Choosing Inference Serving Engine" },
                    { id: "21.6", title: "6. Model Memory & Quantization" },
                    { id: "21.7", title: "7. KV Cache & Prefix Caching" },
                    { id: "21.8", title: "8. Modeling Inference Capacity" },
                    { id: "21.9", title: "9. Serving Scalability & Scheduling" },
                    { id: "21.10", title: "10. Model Routing & Isolation" },
                    { id: "21.11", title: "11. Vector Retrieval & Embeddings" },
                    { id: "21.12", title: "12. Building a RAG Pipeline" },
                    { id: "21.13", title: "13. Vector Databases: Exact vs ANN" },
                    { id: "21.14", title: "14. Hybrid Retrieval & Reranking" },
                    { id: "21.15", title: "15. Model Serving & RAG Observability" },
                    { id: "21.16", title: "16. Reliability, Security & Cost Controls" },
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

              {/* Core Principle Badge */}
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-600" />
                  Engineering Golden Rule
                </h4>
                <p className="text-xs text-amber-950 leading-relaxed">
                  A production AI system is not simply an LLM connected to an API. It is a
                  coordinated distributed system of retrieval, compute scheduling, KV-cache
                  management, security boundaries, and graceful degradation.
                </p>
              </div>
            </div>

            {/* Main Lesson Reader */}
            <div className="lg:col-span-3 space-y-6">
              {/* LESSON 21.1 */}
              {activeLesson === "21.1" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 21.1</span>
                    <span>•</span>
                    <span>Introduction</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Module Overview: The Realities of AI Systems at Scale
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    How do you design an AI application that serves thousands of users without making
                    every request slow, expensive, or unreliable?
                  </p>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    For PrepSpaces, thousands of candidates use AI simultaneously: practicing live
                    interviews, receiving real-time evaluation rubrics, asking Java concurrency
                    questions, and streaming AI audio feedback. If every operation routes to a single
                    large model synchronously, you face long queues, astronomical GPU bills, and
                    cascading failures.
                  </p>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Core Learning Objectives
                    </h3>
                    <ul className="space-y-1.5 text-xs text-stone-700 list-disc list-inside">
                      <li>Design end-to-end AI architectures separating orchestration from model execution.</li>
                      <li>Understand LLM inference phases: parallel prefill vs. autoregressive decode.</li>
                      <li>Estimate model memory, KV-cache consumption, concurrency, and token throughput.</li>
                      <li>Master continuous batching, PagedAttention, and prefix caching.</li>
                      <li>Build Retrieval-Augmented Generation (RAG) with vector databases and hybrid search.</li>
                      <li>Compare exact vector search with approximate nearest neighbor (HNSW vs. IVFFlat).</li>
                      <li>Scale GPU inference clusters horizontally and implement bounded admission queues.</li>
                      <li>Defend AI systems against prompt injection, cross-tenant data leaks, and cost overruns.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* LESSON 21.2 */}
              {activeLesson === "21.2" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 21.2</span>
                    <span>•</span>
                    <span>System Architecture</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    The Anatomy of a Production AI System
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    A scalable architecture isolates responsibilities so that each layer can scale and
                    fail independently:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <Server className="w-4 h-4 text-orange-600" />
                        API Gateway & AI Orchestrator
                      </div>
                      <p className="text-stone-700 mt-1">
                        Authenticates JWTs, enforces token usage quotas, classifies user intent,
                        constructs prompts, and routes to appropriate model pools.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <Database className="w-4 h-4 text-blue-600" />
                        Vector Retrieval Service
                      </div>
                      <p className="text-stone-700 mt-1">
                        Embeds queries, performs HNSW vector proximity search in PostgreSQL/pgvector,
                        enforces mandatory tenant filters, and reranks candidates.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <Cpu className="w-4 h-4 text-emerald-600" />
                        Inference Serving Engine (vLLM)
                      </div>
                      <p className="text-stone-700 mt-1">
                        Loads model weights into GPU VRAM, applies continuous batching, allocates
                        paged KV cache, and streams tokens back via Server-Sent Events (SSE).
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-purple-600" />
                        Observability & Cost Controls
                      </div>
                      <p className="text-stone-700 mt-1">
                        Tracks Time to First Token (TTFT), inter-token latency, GPU memory pressure,
                        token consumption per tenant, and defends against prompt injection.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 21.3 */}
              {activeLesson === "21.3" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 21.3</span>
                    <span>•</span>
                    <span>Inference Fundamentals</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Understanding LLM Inference: Prefill vs. Decode
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Inference occurs in two distinct computational phases: parallel prefill (compute-bound)
                    and autoregressive decode (memory-bandwidth-bound).
                  </p>
                  {/* Embedded Diagram 1 */}
                  <InferenceLifecycleDiagram />
                </div>
              )}

              {/* LESSON 21.4 & 21.5 */}
              {(activeLesson === "21.4" || activeLesson === "21.5") && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson {activeLesson}</span>
                    <span>•</span>
                    <span>Serving Infrastructure</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Managed APIs, Self-Hosted Engines & Continuous Batching
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Compare managed APIs with self-hosted engines like <strong>vLLM</strong> and{" "}
                    <strong>NVIDIA Triton</strong>. Continuous batching admits new requests while others
                    are mid-generation, maximizing GPU utilization.
                  </p>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 space-y-2">
                    <div className="font-bold text-stone-900">Continuous Batching (Iteration-Level Scheduling):</div>
                    <p className="text-stone-700">
                      In traditional static batching, all 16 sequences must finish before the batch
                      completes. In continuous batching, as soon as Sequence A finishes generating, it is
                      evicted, and Sequence Q is immediately admitted into the next forward pass iteration.
                    </p>
                  </div>
                </div>
              )}

              {/* LESSON 21.6 & 21.7 */}
              {(activeLesson === "21.6" || activeLesson === "21.7") && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson {activeLesson}</span>
                    <span>•</span>
                    <span>VRAM & KV Cache</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Model Memory, Quantization & Prefix Caching
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    GPU memory must accommodate weights, activations, and the dynamic KV cache. Model
                    quantization (FP16 ➔ INT8 ➔ INT4) compresses weight footprint.
                  </p>
                  {/* Embedded Diagram 2 */}
                  <GpuMemoryCalculatorDiagram />
                </div>
              )}

              {/* LESSON 21.8 */}
              {activeLesson === "21.8" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 21.8</span>
                    <span>•</span>
                    <span>Capacity Math</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Modeling Inference Capacity & Throughput Math
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Sizing an inference cluster requires analyzing arrival rates, token generation
                    demands, and concurrency via Little's Law.
                  </p>

                  {/* Interactive Capacity Calculator */}
                  <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-4">
                    <div className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Interactive Inference Sizing Calculator (Little's Law)
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                      <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                        <div className="flex justify-between font-semibold">
                          <span>Arrival Rate:</span>
                          <span className="text-orange-600 font-mono">{reqArrivalRate} req/s</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="50"
                          step="1"
                          value={reqArrivalRate}
                          onChange={(e) => setReqArrivalRate(parseInt(e.target.value))}
                          className="w-full accent-orange-600 mt-2"
                        />
                      </div>

                      <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                        <div className="flex justify-between font-semibold">
                          <span>Avg Prompt:</span>
                          <span className="text-orange-600 font-mono">{avgInputTokens} tokens</span>
                        </div>
                        <input
                          type="range"
                          min="200"
                          max="4000"
                          step="100"
                          value={avgInputTokens}
                          onChange={(e) => setAvgInputTokens(parseInt(e.target.value))}
                          className="w-full accent-orange-600 mt-2"
                        />
                      </div>

                      <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                        <div className="flex justify-between font-semibold">
                          <span>Avg Output:</span>
                          <span className="text-orange-600 font-mono">{avgOutputTokens} tokens</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="1000"
                          step="25"
                          value={avgOutputTokens}
                          onChange={(e) => setAvgOutputTokens(parseInt(e.target.value))}
                          className="w-full accent-orange-600 mt-2"
                        />
                      </div>

                      <div className="p-2.5 rounded-lg bg-white border border-stone-200">
                        <div className="flex justify-between font-semibold">
                          <span>Avg Latency:</span>
                          <span className="text-orange-600 font-mono">{avgResponseTimeSec}s</span>
                        </div>
                        <input
                          type="range"
                          min="1.0"
                          max="15.0"
                          step="0.5"
                          value={avgResponseTimeSec}
                          onChange={(e) => setAvgResponseTimeSec(parseFloat(e.target.value))}
                          className="w-full accent-orange-600 mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-2">
                      <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-xs">
                        <div className="text-stone-700">Input Token Rate</div>
                        <div className="text-lg font-bold font-mono text-stone-900 mt-0.5">
                          {inputTokensPerSec.toLocaleString()} <span className="text-xs font-normal">tok/s</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-xs">
                        <div className="text-stone-700">Output Token Demand</div>
                        <div className="text-lg font-bold font-mono text-orange-600 mt-0.5">
                          {outputTokensDemand.toLocaleString()} <span className="text-xs font-normal">tok/s</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-xs">
                        <div className="text-stone-700">Concurrency (Little's Law)</div>
                        <div className="text-lg font-bold font-mono text-stone-900 mt-0.5">
                          ~{concurrencyLittlesLaw} <span className="text-xs font-normal">in-flight</span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs">
                        <div className="text-emerald-800 font-semibold">GPUs Needed (+30% buffer)</div>
                        <div className="text-lg font-bold font-mono text-emerald-900 mt-0.5">
                          {provisionedGpusWithHeadroom}x A100 GPUs
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 21.9 & 21.10 */}
              {(activeLesson === "21.9" || activeLesson === "21.10") && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson {activeLesson}</span>
                    <span>•</span>
                    <span>Scheduling & Isolation</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Model Routing, Workload Isolation & Bounded Queues
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Never share a single compute pool between high-priority interactive voice and
                    heavy batch reports. Separate workloads into dedicated pools:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs">
                    <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">1. Low-Latency Pool</div>
                      <p className="text-stone-700 mt-1">Short answers, live voice interview, fast code assist.</p>
                    </div>
                    <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">2. Long-Generation Pool</div>
                      <p className="text-stone-700 mt-1">Complex multi-page evaluation rubrics, resume parsing.</p>
                    </div>
                    <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">3. Embedding Pool</div>
                      <p className="text-stone-700 mt-1">Dedicated embedding generation for vector retrieval.</p>
                    </div>
                    <div className="p-3 rounded-lg border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900">4. Speech / Audio Pool</div>
                      <p className="text-stone-700 mt-1">Whisper transcription and streaming voice synthesis.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* LESSON 21.11 to 21.14 */}
              {(activeLesson === "21.11" ||
                activeLesson === "21.12" ||
                activeLesson === "21.13" ||
                activeLesson === "21.14") && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson {activeLesson}</span>
                    <span>•</span>
                    <span>Vector Retrieval & RAG</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Vector Retrieval, HNSW vs. IVFFlat & Hybrid RRF
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Retrieval-Augmented Generation (RAG) grounds LLM responses on authoritative course
                    documentation. Hybrid search merges lexical BM25 and vector kNN via Reciprocal Rank
                    Fusion (RRF).
                  </p>
                  {/* Embedded Diagram 3 */}
                  <HybridRetrievalDiagram />
                </div>
              )}

              {/* LESSON 21.15 */}
              {activeLesson === "21.15" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 21.15</span>
                    <span>•</span>
                    <span>Observability</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Model Serving & RAG Observability
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    End-to-end latency decomposition is crucial for identifying bottlenecks across the
                    critical execution path:
                  </p>
                  <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs overflow-x-auto">
                    <pre className="text-orange-300 mb-1">// End-to-End Latency Decomposition Formula</pre>
                    <pre className="text-stone-200">{`T_total = T_queue + T_retrieval + T_prefill + T_generation + T_postprocess`}</pre>
                  </div>
                  <div className="p-3 rounded-lg border border-stone-200 bg-stone-50 text-xs text-stone-700">
                    A trace showing 500ms queue wait, 40ms retrieval, and 2,500ms token generation reveals
                    that vector retrieval is fast—the system bottleneck is GPU queue saturation and decoding!
                  </div>
                </div>
              )}

              {/* LESSON 21.16 */}
              {activeLesson === "21.16" && (
                <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider">
                    <span>Lesson 21.16</span>
                    <span>•</span>
                    <span>Security & Cost Controls</span>
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900">
                    Reliability, Prompt Injection Defense & Cost Controls
                  </h2>
                  <p className="text-sm text-stone-700 leading-relaxed">
                    Production AI applications must be defended against prompt injection, cross-tenant
                    data leaks, and catastrophic GPU cloud bills.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-emerald-600" />
                        Prompt Injection Defense
                      </div>
                      <p className="text-stone-700 mt-1">
                        Wrap untrusted RAG context in XML tags. Never allow the LLM to directly trigger
                        unauthorized actions without deterministic schema checks.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl border border-stone-200 bg-stone-50">
                      <div className="font-bold text-stone-900 flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-orange-600" />
                        Token Quotas & Rate Limits
                      </div>
                      <p className="text-stone-700 mt-1">
                        Enforce hard bounds on input tokens (max 4k), output tokens (max 1k), and daily
                        token consumption per candidate.
                      </p>
                    </div>
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
            <InferenceLifecycleDiagram />
            <GpuMemoryCalculatorDiagram />
            <HybridRetrievalDiagram />
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
                Rigorous architectural justifications covering prefill vs. decode, KV-cache sizing,
                continuous batching, HNSW vector indexing, prompt injection defense, and GPU autoscaling.
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
                Step-by-step engineering exercises testing model endpoint deployment, GPU memory
                sizing, pgvector semantic retrieval, and overload recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {/* LAB 1 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 1 · Inference Serving
                  </span>
                  <span className="text-xs font-mono text-stone-700">vLLM & Streaming</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Deploy an OpenAI-Compatible Model-Serving Endpoint
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Serve an instruction-tuned model through vLLM or Ollama. Implement API authentication,
                  strict input token size limits, streaming token responses over SSE, and a /health endpoint.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> A functioning inference API
                  benchmark report measuring Time to First Token (TTFT), tokens/second, and P95 latency.
                </div>
              </div>

              {/* LAB 2 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 2 · Capacity Planning
                  </span>
                  <span className="text-xs font-mono text-stone-700">500 Simultaneous Users</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Model Serving Capacity & KV-Cache Sizing
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Assume 500 simultaneous users generating prompts averaging 1,000 tokens with 250
                  output tokens. Calculate arrival rate, concurrency via Little's Law, and dynamic KV cache.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> A capacity report specifying
                  GPU accelerator requirements (e.g. A100 vs A10G), VRAM allocation, and bounded queue limits.
                </div>
              </div>

              {/* LAB 3 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 3 · RAG Pipeline
                  </span>
                  <span className="text-xs font-mono text-stone-700">pgvector Knowledge Base</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Build a Searchable Java Documentation Knowledge Base
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Extract Java documentation, split into 500-token chunks with 50-token overlap, attach
                  tenant metadata, generate embeddings, and build an HNSW index in PostgreSQL with pgvector.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> A retrieval API returning
                  ranked passages with source citations and tenant boundary verification tests.
                </div>
              </div>

              {/* LAB 4 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 4 · Hybrid Retrieval
                  </span>
                  <span className="text-xs font-mono text-stone-700">BM25 + Vector Fusion</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Compare Vector Search vs. Hybrid Reciprocal Rank Fusion
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Compare PostgreSQL full-text search (tsvector), pgvector HNSW search, and hybrid
                  RRF fusion across technical Java queries. Evaluate recall@K and exact keyword matches.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> An evaluation report
                  demonstrating why hybrid RRF outperforms pure vector search on API code names.
                </div>
              </div>

              {/* LAB 5 */}
              <div className="p-5 rounded-2xl bg-white border border-stone-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    Lab 5 · Resilience & Recovery
                  </span>
                  <span className="text-xs font-mono text-stone-700">Overload & Circuit Breakers</span>
                </div>
                <h4 className="text-base font-bold text-stone-900">
                  Test Model-Server Overload & Failure Recovery
                </h4>
                <p className="text-xs text-stone-700 mt-1">
                  Simulate concurrent traffic spikes exceeding GPU capacity. Verify bounded queues shed
                  excess requests with HTTP 429, voice tasks remain responsive, and failed workers recover.
                </p>
                <div className="mt-3 p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs">
                  <strong className="text-stone-900">Deliverable:</strong> A chaos test report and
                  production failure recovery runbook for AI model serving clusters.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: KNOWLEDGE CHECK QUIZ (8 QUESTIONS)
            ===================================================================== */}
        {activeTab === "assessment" && (
          <div className="p-6 rounded-2xl bg-white border border-stone-200 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <h3 className="text-xl font-bold text-stone-900">Module 21 Knowledge Check</h3>
                <p className="text-xs text-stone-700 mt-0.5">
                  8 questions assessing prefill vs. decode, continuous batching, KV cache, RAG, HNSW,
                  and prompt injection.
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
                    🎉 Outstanding! You mastered AI system architecture, inference serving, and vector retrieval!
                  </span>
                ) : (
                  <span>Review the explanations above to reinforce production AI infrastructure concepts.</span>
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
                Official documentation and engineering guides for LLM inference serving, GPU scheduling,
                vector search, and AI security.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">vLLM — Online Serving & Prefix Caching</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Study OpenAI-compatible endpoints, deployment metrics, PagedAttention, and prefix
                    caching design.
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href="https://docs.vllm.ai/en/latest/serving/online_serving/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Online Serving Docs <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href="https://docs.vllm.ai/en/stable/design/prefix_caching/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-100 text-stone-800 hover:bg-stone-200"
                  >
                    Prefix Caching Design <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">NVIDIA Triton — Dynamic Batching</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Learn how to configure model scheduling and test throughput versus latency trade-offs.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://docs.nvidia.com/deeplearning/triton-inference-server/user-guide/docs/user_guide/batcher.html"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Read Dynamic Batching Guide <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">pgvector — Vector Similarity Search</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Explore vector types, HNSW, IVFFlat, metadata filtering, and hybrid retrieval in PostgreSQL.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://github.com/pgvector/pgvector"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Read pgvector GitHub Docs <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">Kubernetes — GPU Device Plugins</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Understand how GPU resources can be exposed and scheduled across Kubernetes worker nodes.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/device-plugins/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Read Device Plugins Guide <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-stone-200 flex flex-col justify-between md:col-span-2">
                <div>
                  <h4 className="text-sm font-bold text-stone-900">OWASP — Top 10 for LLM Applications</h4>
                  <p className="text-xs text-stone-700 mt-1">
                    Learn about prompt injection, sensitive information disclosure, vector vulnerabilities,
                    and unbounded consumption.
                  </p>
                </div>
                <div className="mt-4">
                  <a
                    href="https://genai.owasp.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800"
                  >
                    Explore OWASP GenAI Security Guidance <ExternalLink className="w-3 h-3" />
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
                Module 21 Completion Criteria Met
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                You Have Mastered AI System Architecture & Model-Serving Scalability
              </h3>
              <p className="text-xs text-stone-700 mt-1 max-w-2xl leading-relaxed">
                You now possess the complete architecture to design low-latency RAG pipelines, calculate
                dynamic KV-cache memory, orchestrate continuous batching inference servers, manage GPU
                capacity, and defend production systems against prompt injection.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => navigate("/learning/system-design/search")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous: Module 20 (Search & Discovery)
              </button>
              <button
                onClick={() => navigate("/learning/system-design/case-studies")}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-orange-600 text-white hover:bg-orange-700 transition-colors shadow-sm"
              >
                Next: Module 22 (Case Studies)
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
