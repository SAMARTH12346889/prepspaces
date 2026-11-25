/**
 * Interview Service for PrepSpaces Backend
 * 
 * 100% Dynamic Conversational Interview Engine (Zero static JSON files):
 * - Dynamic opening question generation tailored to selected course & module (M01 to M24)
 * - Session conversation history tracking (turn-by-turn conversational state)
 * - Dynamic adaptive follow-up questions digging deeper into candidate's response
 * - Handles candidate confusion, hints, and clarification requests
 * - Politely steers off-topic inputs back to the technical interview
 * - Voice-friendly spoken English outputs (no markdown, no bullets, no code blocks)
 * - End-of-session automated holistic evaluation across the full conversation transcript
 */

import {
  PREPSPACES_COURSES,
  getCourseById,
  getModuleById,
  normalizeModuleId,
  isValidCourseId,
  isValidModuleId,
} from "../config/courseInterviewConfig.js";
import { COURSE_INTERVIEW_BANK } from "../data/courseInterviewBank.js";
import { evaluateAnswer, buildFinalReport } from "./aiEvaluationService.js";

// In-memory session store when KV is not attached in local tests
const interviewMemoryStore = new Map();

async function getStore(env) {
  if (env?.PREPSPACES_DB) {
    return {
      async get(key, type = "text") {
        if (type === "json") return await env.PREPSPACES_DB.get(key, { type: "json" });
        return await env.PREPSPACES_DB.get(key);
      },
      async put(key, val, options = {}) {
        const valStr = typeof val === "string" ? val : JSON.stringify(val);
        return await env.PREPSPACES_DB.put(key, valStr, options);
      },
      async delete(key) {
        return await env.PREPSPACES_DB.delete(key);
      },
    };
  }

  return {
    async get(key, type = "text") {
      const v = interviewMemoryStore.get(key);
      if (v === undefined || v === null) return null;
      if (type === "json") {
        try {
          return JSON.parse(v);
        } catch {
          return null;
        }
      }
      return v;
    },
    async put(key, val) {
      const valStr = typeof val === "string" ? val : JSON.stringify(val);
      interviewMemoryStore.set(key, valStr);
    },
    async delete(key) {
      interviewMemoryStore.delete(key);
    },
  };
}

export { normalizeModuleId };

// Module concept registry for voice-friendly question generation
const CURRICULUM_CONCEPTS = {
  M01: [
    {
      topic: "AI vs ML vs Deep Learning vs Generative AI",
      question: "How do artificial intelligence, machine learning, deep learning, and generative AI relate to one another in enterprise systems?",
      context: "Expected focus areas: Position AI as broad field; Describe ML as data-driven learning; Explain DL layered representations; Describe GenAI as producing new content.",
      expectedPoints: [
        "Position AI as broad field of intelligent systems",
        "Describe machine learning as data-driven model learning",
        "Explain deep learning through layered neural representations",
        "Describe generative AI as producing new content"
      ],
      keywords: ["broad", "intelligent", "data-driven", "neural", "layers", "generative"],
      followUp: "When evaluating a client project, what architectural factors help you determine whether traditional machine learning or simple heuristics would be superior to a generative model?",
    },
    {
      topic: "NumPy Vectorization & Cache Locality",
      question: "Why is vectorized computation in NumPy dramatically faster than pure Python loops, and how does memory layout affect CPU cache performance?",
      context: "Expected focus areas: Contiguous memory blocks; SIMD processor instructions; CPU cache locality; Eliminating interpreter overhead.",
      expectedPoints: [
        "Explain contiguous memory layout in C vs Python pointers",
        "Describe SIMD single instruction multiple data execution",
        "Detail CPU cache line hits and locality",
        "Explain eliminating Python interpreter dynamic dispatch"
      ],
      keywords: ["contiguous", "simd", "cache", "locality", "strides", "pointer"],
      followUp: "How do memory strides change when taking a transpose of a large tensor, and why does that sometimes trigger unexpected cache misses?",
    }
  ],
  M02: [
    {
      topic: "Eigenvalues, Eigenvectors and SVD",
      question: "What is the geometric meaning of eigenvalues and eigenvectors, and how does Singular Value Decomposition enable dimensionality reduction in embeddings?",
      context: "Expected focus areas: Direction preservation; Variance maximization; Low-rank matrix approximation; Truncated SVD.",
      expectedPoints: [
        "Explain vectors that scale without changing direction",
        "Describe SVD decomposition into U, Sigma, and V transpose",
        "Explain capturing principal directions of maximum variance",
        "Detail low-rank matrix approximation for compression"
      ],
      keywords: ["eigenvalue", "eigenvector", "svd", "variance", "low-rank", "matrix"],
      followUp: "Why is SVD numerically more stable in practice than computing eigendecomposition of the covariance matrix directly?",
    }
  ],
  M03: [
    {
      topic: "Bias-Variance Trade-off & Regularization",
      question: "How do you diagnose high bias versus high variance in machine learning models, and what concrete architectural changes would you apply for each?",
      context: "Expected focus areas: Underfitting vs overfitting symptoms; Learning curves; L1 vs L2 regularization; Cross-validation.",
      expectedPoints: [
        "Identify high training and validation error as high bias underfitting",
        "Identify large gap between training and validation error as high variance",
        "Apply model capacity scaling or feature engineering for high bias",
        "Apply L1 Lasso, L2 Ridge, dropout, or more data for high variance"
      ],
      keywords: ["bias", "variance", "underfitting", "overfitting", "regularization", "l1", "l2"],
      followUp: "In what production scenarios would you explicitly favor L1 regularization over L2 regularization?",
    }
  ],
  M04: [
    {
      topic: "Backpropagation & Dynamic Computation Graphs",
      question: "Can you explain how automatic differentiation works via dynamic computation graphs in PyTorch during the forward and backward passes?",
      context: "Expected focus areas: Directed acyclic graphs; Tensor grad_fn; Vector-Jacobian products; Inference memory optimization.",
      expectedPoints: [
        "Describe DAG construction during forward tensor operations",
        "Explain grad_fn pointers tracking operations",
        "Trace reverse-mode automatic differentiation via vector-Jacobian products",
        "Explain how torch.no_grad saves GPU memory during inference"
      ],
      keywords: ["autograd", "computation graph", "forward", "backward", "jacobian", "no_grad"],
      followUp: "Beyond compute time savings, why does disabling gradient tracking drastically reduce GPU memory allocation during batch inference?",
    }
  ],
  M05: [
    {
      topic: "Byte-Pair Encoding & Subword Tokenization",
      question: "How does Byte-Pair Encoding handle out-of-vocabulary words compared to word-level tokenization, and what trade-offs exist with vocabulary size?",
      context: "Expected focus areas: Iterative pair merging; OOV elimination via byte fallbacks; Embedding table size vs sequence length.",
      expectedPoints: [
        "Describe iterative merging of the most frequent byte pairs",
        "Explain decomposing unknown words into known subword tokens",
        "Discuss trade-off: large vocab increases weights, small vocab lengthens sequences",
        "Highlight tokenization artifacts like whitespace sensitivity"
      ],
      keywords: ["bpe", "subword", "byte-pair", "vocabulary", "oov", "compression"],
      followUp: "Why do common mathematical expressions and numbers often tokenize into multiple disjoint fragments in modern LLMs?",
    }
  ],
  M06: [
    {
      topic: "Scaled Dot-Product Attention & Multi-Head Mechanism",
      question: "Walk me through the mathematical formulation of Scaled Dot-Product Attention. Why is the square root of the head dimension used as a scaling factor?",
      context: "Expected focus areas: Query, Key, Value projections; Softmax temperature scaling; Dot product variance growth; Multi-head projection subspaces.",
      expectedPoints: [
        "State Q K transpose divided by sqrt d_k followed by softmax times V",
        "Explain dot products growing with dimension causing large values",
        "Show large values push softmax into vanishing gradient regions",
        "Explain multi-head attention attending to multiple representation subspaces"
      ],
      keywords: ["query", "key", "value", "scaled dot-product", "sqrt", "dimension", "softmax", "multi-head"],
      followUp: "How does Rotary Position Embedding RoPE encode relative position information directly into Query and Key vectors compared to absolute sinusoidal encodings?",
    }
  ],
  M07: [
    {
      topic: "Decoder-Only Architecture & KV Caching",
      question: "Why have decoder-only architectures dominated modern generative LLMs, and how does KV Caching optimize the autoregressive generation loop?",
      context: "Expected focus areas: Causal masking; Prefill vs decode phase; Avoiding redundant Key-Value computation; GPU VRAM overhead of KV caches.",
      expectedPoints: [
        "Explain causal self-attention generating one token at a time autoregressively",
        "Differentiate parallel prefill from latency-critical single-token decode",
        "Describe storing past Keys and Values in memory to avoid O(N^2) recomputation",
        "Discuss KV cache memory footprint scaling with batch size and context length"
      ],
      keywords: ["decoder-only", "causal mask", "kv cache", "prefill", "decode", "vram", "autoregressive"],
      followUp: "How does Grouped Query Attention GQA reduce KV cache memory consumption while preserving model quality compared to Multi-Head Attention?",
    }
  ],
  M08: [
    {
      topic: "Pre-Training Objectives & Alignment Foundations",
      question: "How do causal language modeling during pre-training, supervised fine-tuning (SFT), and preference alignment (RLHF/DPO) differ in their training objectives and data requirements?",
      context: "Expected focus areas: Next-token cross-entropy loss; Instruction formatting in SFT; Reward modeling vs direct preference optimization; Alignment tax and catastrophic forgetting.",
      expectedPoints: [
        "Explain pre-training using self-supervised next-token prediction across massive uncurated corpora",
        "Describe SFT optimizing cross-entropy only on curated prompt-response completion tokens",
        "Contrast RLHF reward model plus PPO against direct preference optimization DPO on chosen/rejected pairs",
        "Discuss preventing catastrophic forgetting and capability regression during alignment"
      ],
      keywords: ["pre-training", "sft", "rlhf", "dpo", "alignment", "cross-entropy", "fine-tuning"],
      followUp: "Why does Direct Preference Optimization DPO eliminate the separate reward model required in traditional PPO-based RLHF pipelines?",
    }
  ],
  M09: [
    {
      topic: "Structured Outputs & Constrained Decoding",
      question: "Why is prompt engineering alone insufficient for guaranteeing valid JSON outputs from an LLM in production, and how does grammar-constrained decoding solve this?",
      context: "Expected focus areas: Probabilistic token sampling; Finite-state machine / CFG token masking; Zero-shot vs few-shot reliability; Schema enforcement overhead.",
      expectedPoints: [
        "Explain probabilistic next-token sampling occasionally violating prompt formatting instructions",
        "Describe logit masking / finite-state machine constraints disabling invalid tokens at each decoding step",
        "Compare prompt-based retries with native JSON Schema constrained decoding",
        "Discuss latency and reasoning quality trade-offs when enforcing strict output schemas"
      ],
      keywords: ["structured output", "json schema", "constrained decoding", "logit masking", "few-shot", "prompt"],
      followUp: "How does Chain-of-Thought reasoning interact with strict JSON output schemas, and why should reasoning fields precede final classification fields?",
    }
  ],
  M10: [
    {
      topic: "Vector Embeddings & Approximate Nearest Neighbor Indexing",
      question: "How do HNSW and IVF-PQ indexes accelerate vector similarity search compared to brute-force exact search, and what accuracy-versus-memory trade-offs do they introduce?",
      context: "Expected focus areas: Cosine vs dot product similarity; Hierarchical navigable small-world graphs; Inverted file clustering and product quantization; Recall vs latency.",
      expectedPoints: [
        "Explain O(N) exact kNN bottlenecks at millions of high-dimensional vectors",
        "Describe HNSW multi-layer skip-list graph traversal offering sub-millisecond recall at higher RAM cost",
        "Explain IVF partitioning and Product Quantization PQ compressing vectors into codebook centroids",
        "Discuss tuning efSearch or nprobe parameters to balance recall against tail latency"
      ],
      keywords: ["embeddings", "hnsw", "ivf", "pq", "ann", "cosine similarity", "vector database", "recall"],
      followUp: "When would you normalize embedding vectors to unit length so inner product equals cosine similarity, and why does asymmetric query normalization fail?",
    }
  ],
  M11: [
    {
      topic: "Chunking Strategies & Hybrid Dense-Sparse Search",
      question: "Why does naive fixed-character chunking frequently fail in production RAG systems, and how does hybrid dense-sparse search solve semantic blindness?",
      context: "Expected focus areas: Boundary slicing of tables/sentences; Semantic chunking; BM25 keyword matching plus dense vector cosine similarity; Reciprocal Rank Fusion.",
      expectedPoints: [
        "Explain fixed chunking breaking sentences and contextual references",
        "Describe semantic chunking grouping sentences by embedding similarity thresholds",
        "Explain combining BM25 keyword search with dense semantic embedding search",
        "Detail Reciprocal Rank Fusion RRF to merge disparate score distributions fairly"
      ],
      keywords: ["chunking", "semantic chunking", "bm25", "hybrid search", "dense", "sparse", "reciprocal rank fusion"],
      followUp: "How do you evaluate retrieval precision and context relevance independently from the LLM's final generation quality?",
    }
  ],
  M12: [
    {
      topic: "Vision-Language Models & Cross-Modal Alignment",
      question: "How do modern Vision-Language Models align visual patch embeddings from a vision encoder like ViT or CLIP into a text LLM's token embedding space?",
      context: "Expected focus areas: Vision patch tokenization; Contrastive pre-training; Projection MLP vs cross-attention adapters; High-resolution tiling token budget.",
      expectedPoints: [
        "Explain splitting images into ViT patches projected via an MLP or Q-Former connector",
        "Contrast contrastive dual-encoder alignment (CLIP) with autoregressive multimodal fusion",
        "Discuss dynamic resolution tiling increasing visual token count and KV cache cost",
        "Identify OCR/spatial hallucination failure modes and evaluation strategies"
      ],
      keywords: ["multimodal", "vlm", "vit", "clip", "cross-attention", "vision encoder", "projection"],
      followUp: "Why do dynamic image tiling strategies help multimodal models read dense documents without retraining the base vision encoder?",
    }
  ],
  M13: [
    {
      topic: "ReAct Loops & Deterministic Tool Execution",
      question: "Walk me through the lifecycle of a ReAct agent loop. How does the system handle tool execution errors, infinite loops, and malformed parameter arguments?",
      context: "Expected focus areas: Thought-Action-Observation cycle; System prompt constraints; Schema validation; Maximum recursion depth; Defensive execution.",
      expectedPoints: [
        "Explain the alternating cycle of Thought, Action selection, and environment Observation",
        "Describe validating LLM arguments against JSON Schema using Pydantic or Zod",
        "Explain returning raw error messages back into the conversation context for self-correction",
        "Detail safety mechanisms: iteration timeouts, budget limits, and loop-detection heuristics"
      ],
      keywords: ["react", "thought", "action", "observation", "tool-calling", "schema", "timeout", "loop"],
      followUp: "How do you protect internal backend systems from prompt injection attacks embedded inside external tool outputs?",
    }
  ],
  M14: [
    {
      topic: "Multi-Agent Orchestration & Failure Isolation",
      question: "When should you architect a multi-agent workflow instead of a single agent with tools, and how do you prevent infinite delegation loops and cascading context drift?",
      context: "Expected focus areas: Supervisor vs handoff topologies; Context isolation per worker; Deterministic state machines; Inter-agent protocol validation.",
      expectedPoints: [
        "Justify multi-agent separation for isolated contexts, distinct permissions, or parallel subtasks",
        "Contrast supervisor/router patterns against decentralized peer-to-peer handoffs",
        "Describe enforcing bounded hop counts, typed message schemas, and shared state checkpoints",
        "Discuss debugging non-deterministic multi-agent traces and cost amplification"
      ],
      keywords: ["multi-agent", "orchestration", "supervisor", "handoff", "state machine", "context drift", "loop"],
      followUp: "How do you design human-in-the-loop approval gates cleanly inside an asynchronous multi-agent orchestration graph?",
    }
  ],
  M15: [
    {
      topic: "Graph RAG & Cross-Encoder Reranking",
      question: "In what scenarios does standard vector search fail where Graph RAG succeeds, and why are cross-encoder rerankers essential before feeding context into an LLM?",
      context: "Expected focus areas: Global relationship synthesis; Multi-hop query navigation; Bi-encoder vs cross-encoder attention; Top-K compression.",
      expectedPoints: [
        "Explain vector search retrieving localized text chunks but failing on global entity relationships",
        "Describe knowledge graphs capturing explicit entities, relations, and multi-hop paths",
        "Explain bi-encoders encoding text independently for speed vs cross-encoders computing full joint attention",
        "Detail using cross-encoders to rerank the top 50 candidates down to the top 5 most relevant passages"
      ],
      keywords: ["graph rag", "knowledge graph", "reranker", "cross-encoder", "bi-encoder", "multi-hop", "contextual"],
      followUp: "How do you address the Lost in the Middle phenomenon where LLMs ignore relevant information placed in the middle of long prompts?",
    }
  ],
  M16: [
    {
      topic: "LLM Evaluation Harnesses & Prompt Injection Defense",
      question: "How do you design an automated evaluation pipeline for an enterprise RAG assistant, and what layered guardrails mitigate indirect prompt injection?",
      context: "Expected focus areas: LLM-as-a-judge bias mitigation; Faithfulness vs groundedness metrics; Red teaming; Input/output moderation and least-privilege tool isolation.",
      expectedPoints: [
        "Separate retrieval metrics (Recall@K, MRR) from generation metrics (faithfulness, answer relevance)",
        "Control LLM-as-a-judge biases like position bias, verbosity bias, and rubric drift",
        "Defend against indirect prompt injection by isolating untrusted retrieved text from system privileges",
        "Enforce deterministic output validation and least-privilege tool execution confirmation"
      ],
      keywords: ["evaluation", "llm-as-a-judge", "faithfulness", "prompt injection", "guardrails", "red teaming", "safety"],
      followUp: "Why are regex-only jailbreak filters insufficient in production, and how do you calibrate guardrail latency against false positives?",
    }
  ],
  M17: [
    {
      topic: "Continuous Batching & PagedAttention in vLLM",
      question: "How does PagedAttention eliminate memory fragmentation in GPU VRAM during LLM serving, and how does continuous batching improve token throughput?",
      context: "Expected focus areas: Static vs dynamic batching; Virtual memory paging for KV cache; Eliminating reserved padding memory; High concurrency serving.",
      expectedPoints: [
        "Explain static batching waiting for the slowest sequence to finish, causing idle GPU cores",
        "Describe continuous iteration-level batching dynamically inserting new requests at each token iteration",
        "Explain PagedAttention dividing KV cache into non-contiguous physical memory blocks",
        "Highlight near-zero memory waste enabling 2x to 4x higher concurrency on the same GPU"
      ],
      keywords: ["pagedattention", "continuous batching", "vllm", "kv cache", "gpu", "vram", "throughput", "latency"],
      followUp: "What is speculative decoding, and under what conditions does it provide a 2x inference speedup without any loss in output quality?",
    }
  ],
  M18: [
    {
      topic: "Streaming AI APIs, Backpressure & Async Queues",
      question: "How do you architect a scalable AI backend using Server-Sent Events (SSE) versus WebSockets, and how do you handle backpressure, timeouts, and slow token consumers?",
      context: "Expected focus areas: SSE vs WebSocket trade-offs; Token streaming flush behavior; Redis/worker job queues; Graceful cancellation on client disconnect.",
      expectedPoints: [
        "Contrast SSE simplicity over HTTP for unidirectional token streaming with WebSocket bidirectional state",
        "Explain aborting upstream LLM requests immediately when clients disconnect to prevent wasted compute",
        "Describe offloading long-running batch or agent workflows to async queues with webhook/polling status",
        "Discuss rate limiting, idempotency keys, and circuit breakers around upstream provider calls"
      ],
      keywords: ["sse", "websocket", "streaming", "backpressure", "async queue", "cancellation", "api"],
      followUp: "How do you prevent connection pool exhaustion on stateless serverless workers when an upstream LLM stream stalls mid-response?",
    }
  ],
  M19: [
    {
      topic: "Model Versioning, Canary Rollouts & Observability",
      question: "Walk me through a robust CI/CD and deployment pipeline for an enterprise LLM system. How do you implement canary rollouts and detect subtle output regressions in production?",
      context: "Expected focus areas: GitOps for prompts and weights; Shadow deployments; Latency and token cost monitoring; Automated rollback triggers.",
      expectedPoints: [
        "Version model weights, configuration, and prompt templates together as immutable artifacts",
        "Run automated benchmark evaluations in CI before releasing candidate models",
        "Route a small percentage of live traffic to the canary deployment while monitoring error rates",
        "Track key SLIs: Time-To-First-Token TTFT, tokens-per-second, hallucination rates, and user feedback"
      ],
      keywords: ["mlops", "canary", "shadow deployment", "versioning", "rollback", "ttft", "observability", "ci/cd"],
      followUp: "If a canary release causes a 5% latency spike on TTFT but increases answer quality by 10%, how do you make the decision to promote or roll back?",
    }
  ],
  M20: [
    {
      topic: "Weight Quantization & GPU Inference Profiling",
      question: "Compare AWQ, GPTQ, and FP8 quantization for large language model serving. When does activation outlier sensitivity degrade model accuracy?",
      context: "Expected focus areas: Weight-only vs weight-and-activation quantization; Memory bandwidth vs compute-bound decode; Outlier preservation; Benchmarking perplexity and task accuracy.",
      expectedPoints: [
        "Explain autoregressive decoding being memory-bandwidth bound so INT4/FP8 weight compression boosts tok/s",
        "Contrast GPTQ Hessian-based layerwise calibration with AWQ scaling salient weights to protect outliers",
        "Discuss FP8 hardware Tensor Core acceleration on Hopper/Ada GPUs versus INT4 dequantization overhead",
        "Emphasize validating quantized checkpoints against downstream task benchmarks rather than perplexity alone"
      ],
      keywords: ["quantization", "awq", "gptq", "fp8", "memory bandwidth", "outliers", "gpu", "profiling"],
      followUp: "At high concurrent batch sizes, when does LLM inference shift from memory-bandwidth bound to compute bound, and how does that affect quantization choice?",
    }
  ],
  M21: [
    {
      topic: "Parameter-Efficient Fine-Tuning (LoRA & QLoRA)",
      question: "Explain the mathematical intuition behind Low-Rank Adaptation LoRA. Why can we freeze the base model and only train low-rank decomposition matrices?",
      context: "Expected focus areas: Intrinsic rank of weight updates; Delta W equals B times A; 4-bit NormalFloat in QLoRA; Double quantization and paged optimizers.",
      expectedPoints: [
        "Explain hypothesis that weight changes during adaptation have a low intrinsic rank",
        "State weight update Delta W decomposed into matrices B and A with small rank r",
        "Describe massive reduction in trainable parameters and optimizer memory footprint",
        "Explain QLoRA combining 4-bit NF4 base quantization with 16-bit LoRA adapter training"
      ],
      keywords: ["lora", "qlora", "peft", "low-rank", "intrinsic rank", "nf4", "parameters", "fine-tuning"],
      followUp: "How do you choose the LoRA rank r and alpha hyperparameter when fine-tuning a 70B model on medical domain guidelines?",
    }
  ],
  M22: [
    {
      topic: "Small Language Models & Tokenizer Efficiency",
      question: "When training a domain-specific Small Language Model (SLM) under 3 billion parameters from scratch, how do tokenizer vocabulary size, Chinchilla scaling laws, and data curation shape final capability?",
      context: "Expected focus areas: BPE compression ratio; Embedding parameter budget; Data quality over raw token count; Knowledge distillation from frontier teachers.",
      expectedPoints: [
        "Balance BPE vocabulary size against embedding table parameter overhead in compact models",
        "Explain synthetic textbook-quality curation and deduplication outperforming noisy web crawls",
        "Apply compute-optimal vs inference-optimal token-to-parameter ratios when over-training SLMs",
        "Discuss distilling reasoning traces from frontier teacher models into fast edge SLMs"
      ],
      keywords: ["slm", "small language model", "tokenizer", "bpe", "chinchilla", "distillation", "curation"],
      followUp: "How does increasing BPE vocabulary size affect inference speed per word versus total embedding VRAM on mobile devices?",
    }
  ],
  M23: [
    {
      topic: "Enterprise AI System Design: Multi-Tier Architecture",
      question: "How would you design an enterprise AI platform supporting 10,000 concurrent internal employees with document Q&A, role-based access control, and strict budget caps?",
      context: "Expected focus areas: Ingestion pipeline; RBAC metadata filtering in vector index; Caching layer; Cost budgeting and rate limiting; High availability.",
      expectedPoints: [
        "Architect ingestion pipeline with OCR, chunking, and embedding generation",
        "Enforce tenant and user permissions via RBAC metadata filters directly in vector search",
        "Implement semantic caching with Redis to serve frequent queries instantly without LLM cost",
        "Integrate token bucket rate limiting and budget quotas per department"
      ],
      keywords: ["system design", "enterprise", "rbac", "semantic cache", "rate limiting", "quotas", "architecture"],
      followUp: "How would you design the system to handle a complete outage of your primary LLM provider with sub-second failover?",
    }
  ],
  M24: [
    {
      topic: "Full-Stack AI Production Readiness",
      question: "Reflecting across the entire AI engineering lifecycle, what do you consider the single most critical failure point between a prototype AI demo and a reliable production system?",
      context: "Expected focus areas: Evaluation benchmarks; Hallucination boundaries; Latency unpredictability; Maintenance of living knowledge bases.",
      expectedPoints: [
        "Identify lack of rigorous, automated evaluation benchmarks as the primary failure point",
        "Explain the difference between non-deterministic demo success and 99.9% production reliability",
        "Discuss managing living data drift and knowledge degradation in production vector indices",
        "Highlight holistic engineering discipline: guardrails, observability, and fallback strategies"
      ],
      keywords: ["production", "prototype", "evaluation", "failure point", "drift", "reliability", "observability"],
      followUp: "If you had to launch an enterprise AI feature next week with limited engineering time, which two observability metrics would you implement first?",
    }
  ],
};

const SLOT_QUESTION_TYPES = [
  "conceptual",
  "fundamentals",
  "implementation",
  "problem-solving",
  "real-world",
  "architecture",
  "advanced-reasoning",
];

const SEMANTIC_STOPWORDS = new Set([
  "the","and","for","that","this","with","from","into","when","what","how","why","does","are","your",
  "about","between","which","where","more","than","most","only","such","using","used","explain","describe",
  "walk","through","difference","primary","main","best","would","should","could","their","they","them",
  "there","these","those","have","been","being","will","make","system","systems","data","over","under",
  "both","each","other","production","enterprise"
]);

export function tokenizeSemantic(text = "") {
  const words = String(text)
    .toLowerCase()
    .replace(/[^a-z0-9+.#-]+/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 3 && !SEMANTIC_STOPWORDS.has(w));
  return new Set(words);
}

export function computeQuestionFingerprint(questionText = "", topic = "") {
  const norm = [...tokenizeSemantic(`${questionText} ${topic}`)].sort().join("|");
  let hash = 2166136261;
  for (let i = 0; i < norm.length; i++) {
    hash ^= norm.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return `fp_${(hash >>> 0).toString(16).padStart(8, "0")}_${norm.length}`;
}

export function computeQuestionSimilarity(qA, qB) {
  const textA = typeof qA === "string" ? qA : qA?.questionText || qA?.question || "";
  const textB = typeof qB === "string" ? qB : qB?.questionText || qB?.question || "";
  if (!textA || !textB) return 0;
  if (textA.trim().toLowerCase() === textB.trim().toLowerCase()) return 1;

  const setA = tokenizeSemantic(textA);
  const setB = tokenizeSemantic(textB);
  if (setA.size === 0 || setB.size === 0) return 0;

  let inter = 0;
  for (const w of setA) {
    if (setB.has(w)) inter++;
  }
  const union = setA.size + setB.size - inter;
  const jaccard = union > 0 ? inter / union : 0;
  const overlap = inter / Math.min(setA.size, setB.size);
  return Math.max(jaccard, overlap * 0.85);
}

export function isSemanticallySimilar(candidate, chosenList = [], threshold = 0.48) {
  const candText = candidate?.question || candidate?.questionText || "";
  const candFp = candidate?.fingerprint || computeQuestionFingerprint(candText, candidate?.topic);
  for (const ch of chosenList) {
    const chFp = ch?.fingerprint || computeQuestionFingerprint(ch?.questionText || ch?.question, ch?.topic);
    if (candFp === chFp) return true;
    if (computeQuestionSimilarity(candText, ch?.questionText || ch?.question) >= threshold) {
      return true;
    }
  }
  return false;
}

function cryptoShuffle(arr) {
  const copy = [...arr];
  const len = copy.length;
  if (len <= 1) return copy;
  const rand = new Uint32Array(len);
  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    crypto.getRandomValues(rand);
  } else {
    for (let i = 0; i < len; i++) rand[i] = Math.floor(Math.random() * 0xffffffff);
  }
  for (let i = len - 1; i > 0; i--) {
    const j = rand[i] % (i + 1);
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

function getModuleQuestionPool(courseId = "ai-engineering", modKey = "M01") {
  const courseBank = COURSE_INTERVIEW_BANK[courseId] || {};
  const bankItems = Array.isArray(courseBank[modKey]) ? courseBank[modKey] : [];
  const legacyItems =
    courseId === "ai-engineering" && Array.isArray(CURRICULUM_CONCEPTS[modKey])
      ? CURRICULUM_CONCEPTS[modKey]
      : [];

  const merged = [];
  const seenFp = new Set();
  for (const raw of [...legacyItems, ...bankItems]) {
    if (!raw?.question) continue;
    const fp = computeQuestionFingerprint(raw.question, raw.topic);
    if (seenFp.has(fp)) continue;
    seenFp.add(fp);
    merged.push({
      ...raw,
      moduleId: modKey,
      fingerprint: fp,
      questionType: raw.questionType || "conceptual",
      context:
        raw.context ||
        (Array.isArray(raw.expectedPoints) && raw.expectedPoints.length > 0
          ? `Expected focus areas: ${raw.expectedPoints.join("; ")}.`
          : `Expected focus areas: Core concepts and production trade-offs in ${raw.topic || modKey}.`),
    });
  }
  return merged;
}

function formatQuestionObject({
  courseObj,
  modObj,
  modKey,
  concept,
  index,
  difficulty,
  slotType,
  uidSuffix = "",
}) {
  const cleanModuleTitle = modObj?.title || `${modKey}: ${courseObj.title}`;
  const cleanQuestion = concept.question;
  const fp = concept.fingerprint || computeQuestionFingerprint(cleanQuestion, concept.topic);
  const randPart =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID().slice(0, 6)
      : Math.random().toString(36).slice(2, 8);

  return {
    id: `dyn_${courseObj.id}_${modKey}_${Date.now().toString(36)}_${index + 1}_${randPart}${uidSuffix}`,
    fingerprint: fp,
    courseId: courseObj.id,
    courseTitle: courseObj.title,
    moduleId: modKey,
    moduleTitle: cleanModuleTitle,
    questionNumber: index + 1,
    questionType: cleanModuleTitle.toUpperCase(),
    questionCategory: concept.questionType || slotType || SLOT_QUESTION_TYPES[index % SLOT_QUESTION_TYPES.length],
    topic: concept.topic || cleanModuleTitle,
    subtopic: concept.topic || cleanModuleTitle,
    difficulty: difficulty || concept.difficulty || (index < 2 ? "easy" : index < 5 ? "medium" : "hard"),
    type: "concept",
    question: cleanQuestion,
    questionText: cleanQuestion,
    context: concept.context,
    expectedPoints: concept.expectedPoints || [],
    expected_points: concept.expectedPoints || [],
    keywords: concept.keywords || [],
    followUp: concept.followUp || null,
    timeLimitSec: 45,
    active: true,
  };
}

/**
 * Selects up to `count` fresh, non-duplicate, semantically varied questions for a course & module,
 * respecting cross-session candidate history (`recentFingerprints`, `recentModules`).
 */
export function selectDiverseQuestions({
  courseId = "ai-engineering",
  moduleId = "all",
  count = 7,
  recentFingerprints = [],
  recentModules = [],
  excludeQuestions = [],
} = {}) {
  const courseObj = getCourseById(courseId) || PREPSPACES_COURSES[0];
  const resolvedCourseId = courseObj.id;
  const normMod = normalizeModuleId(moduleId, resolvedCourseId);
  const recentFpSet = new Set(Array.isArray(recentFingerprints) ? recentFingerprints : []);
  const recentModSet = new Set(Array.isArray(recentModules) ? recentModules : []);

  const allCourseModules = (courseObj.modules || []).filter((m) => m.id !== "all");
  const chosen = [];
  const priorAndChosen = [...excludeQuestions];

  const pickBestCandidate = (pool, targetType, preferUnseen = true) => {
    const unseen = pool.filter((c) => !recentFpSet.has(c.fingerprint));
    const orderedPools = preferUnseen ? [unseen, pool] : [pool];
    for (const candidatePool of orderedPools) {
      // Pass 1: match targetType & not semantically similar
      const typeMatches = candidatePool.filter(
        (c) => c.questionType === targetType && !isSemanticallySimilar(c, priorAndChosen)
      );
      if (typeMatches.length > 0) return typeMatches[0];
      // Pass 2: any non-similar candidate
      const anyNonSimilar = candidatePool.filter((c) => !isSemanticallySimilar(c, priorAndChosen));
      if (anyNonSimilar.length > 0) return anyNonSimilar[0];
    }
    return null;
  };

  if (!normMod || normMod === "all") {
    // Prioritize unvisited modules first, shuffled cryptographically for fresh sequence each session
    const unseenMods = cryptoShuffle(allCourseModules.filter((m) => !recentModSet.has(m.id)));
    const seenMods = cryptoShuffle(allCourseModules.filter((m) => recentModSet.has(m.id)));
    const orderedMods = [...unseenMods, ...seenMods];

    for (let i = 0; i < count; i++) {
      const slotType = SLOT_QUESTION_TYPES[i % SLOT_QUESTION_TYPES.length];
      const difficulty = i < 2 ? "easy" : i < 5 ? "medium" : "hard";
      let picked = null;
      let pickedModObj = null;

      // Try distinct modules first
      const usedModIds = new Set(chosen.map((q) => q.moduleId));
      const unusedMods = orderedMods.filter((m) => !usedModIds.has(m.id));
      const moduleSearchOrder = unusedMods.length > 0 ? [...unusedMods, ...orderedMods] : orderedMods;

      for (const modObj of moduleSearchOrder) {
        const pool = cryptoShuffle(getModuleQuestionPool(resolvedCourseId, modObj.id));
        const cand = pickBestCandidate(pool, slotType, true);
        if (cand) {
          picked = cand;
          pickedModObj = modObj;
          break;
        }
      }

      // Extreme exhaustion fallback: clear history preference and draw any non-similar question in course
      if (!picked) {
        for (const modObj of orderedMods) {
          const pool = cryptoShuffle(getModuleQuestionPool(resolvedCourseId, modObj.id));
          const cand = pool.find((c) => !isSemanticallySimilar(c, priorAndChosen));
          if (cand) {
            picked = cand;
            pickedModObj = modObj;
            break;
          }
        }
      }

      if (picked && pickedModObj) {
        const qObj = formatQuestionObject({
          courseObj,
          modObj: pickedModObj,
          modKey: pickedModObj.id,
          concept: picked,
          index: i,
          difficulty,
          slotType,
        });
        chosen.push(qObj);
        priorAndChosen.push(qObj);
      }
    }
    return chosen;
  }

  // Specific module selected: prioritize module's own pool across all 7 dimensions
  const targetModObj = getModuleById(resolvedCourseId, normMod) || allCourseModules[0];
  const targetModKey = targetModObj?.id || normMod;
  const modulePool = cryptoShuffle(getModuleQuestionPool(resolvedCourseId, targetModKey));

  // Include unique followUp questions on concepts in this module (distinct stems only, not rewording)
  const expandedModulePool = [...modulePool];
  for (const item of modulePool) {
    if (item.followUp) {
      const fuFp = computeQuestionFingerprint(item.followUp, item.topic);
      if (!expandedModulePool.some((x) => x.fingerprint === fuFp)) {
        expandedModulePool.push({
          ...item,
          question: item.followUp,
          questionType: "advanced-reasoning",
          difficulty: "hard",
          fingerprint: fuFp,
          followUp: null,
        });
      }
    }
  }

  // Prepare course-adjacent fallback pool ONLY if this specific module has < count unique questions
  const adjacentCoursePool = [];
  for (const m of cryptoShuffle(allCourseModules.filter((m) => m.id !== targetModKey))) {
    for (const c of cryptoShuffle(getModuleQuestionPool(resolvedCourseId, m.id))) {
      adjacentCoursePool.push({ ...c, sourceModuleTitle: m.title });
    }
  }

  for (let i = 0; i < count; i++) {
    const slotType = SLOT_QUESTION_TYPES[i % SLOT_QUESTION_TYPES.length];
    const difficulty = i === 0 ? "easy" : i < 4 ? "medium" : "hard";

    let picked = pickBestCandidate(expandedModulePool, slotType, true);
    if (!picked) {
      // Draw a distinct, non-similar question from the same course rather than repeating
      picked = pickBestCandidate(adjacentCoursePool, slotType, true);
    }

    if (picked) {
      const qObj = formatQuestionObject({
        courseObj,
        modObj: targetModObj,
        modKey: targetModKey,
        concept: picked,
        index: i,
        difficulty,
        slotType,
      });
      chosen.push(qObj);
      priorAndChosen.push(qObj);
    }
  }

  return chosen;
}

/**
 * Dynamically builds a voice-friendly technical question object for a given course and module
 * (used as single-question fallback without ever defaulting back to M01 across courses)
 */
function buildDynamicQuestion({
  courseId = "ai-engineering",
  moduleId = "all",
  index = 0,
  difficulty = "medium",
  excludeQuestions = [],
}) {
  const picked = selectDiverseQuestions({
    courseId,
    moduleId,
    count: 1,
    excludeQuestions,
  });
  if (picked.length > 0) {
    const q = picked[0];
    return {
      ...q,
      questionNumber: index + 1,
      difficulty: difficulty || q.difficulty,
    };
  }
  const courseObj = getCourseById(courseId) || PREPSPACES_COURSES[0];
  const modObj = getModuleById(courseObj.id, moduleId);
  return formatQuestionObject({
    courseObj,
    modObj,
    modKey: modObj?.id || "all",
    concept: {
      topic: modObj?.title || courseObj.title,
      question: `Walk me through the most critical architectural principles and production failure modes in ${modObj?.title || courseObj.title}.`,
      context: `Expected focus areas: Core concepts, practical trade-offs, and production scalability in ${courseObj.title}.`,
      expectedPoints: [
        `Explain foundational concepts of ${modObj?.title || courseObj.title}`,
        "Analyze latency, reliability, or scaling bottlenecks",
        "Propose concrete production mitigations and trade-offs",
      ],
      keywords: extractKeywordsForFallback(courseObj.title, modObj?.title),
    },
    index,
    difficulty,
    slotType: SLOT_QUESTION_TYPES[index % SLOT_QUESTION_TYPES.length],
  });
}

function extractKeywordsForFallback(a = "", b = "") {
  return [...tokenizeSemantic(`${a} ${b}`)].slice(0, 6);
}

/**
 * Generates an adaptive follow-up or clarification response
 */
function buildAdaptiveResponse({ question, transcript, conversationHistory, index, moduleId }) {
  const text = (transcript || "").trim().toLowerCase();
  const words = text ? text.split(/\s+/).filter(Boolean) : [];

  // 1. Detect candidate requesting clarification or getting stuck
  const isConfusion = 
    text.includes("don't understand") || 
    text.includes("dont understand") || 
    text.includes("can you clarify") || 
    text.includes("what do you mean") || 
    text.includes("give me a hint") ||
    text.includes("repeat that") ||
    text.includes("not sure what you mean");

  if (isConfusion) {
    const hint = `No problem, let me rephrase that clearly. When dealing with ${question.topic}, consider how engineers balance performance, memory, and accuracy. What design choice would you personally prioritize in a production environment?`;
    return {
      type: "CLARIFICATION",
      spokenText: hint,
      isHint: true,
    };
  }

  // 2. Detect off-topic or random inputs
  const isOffTopic = 
    text.includes("weather") || 
    text.includes("who are you") || 
    text.includes("tell me a joke") ||
    text.includes("sing a song") ||
    text.includes("ignore previous instructions");

  if (isOffTopic) {
    const steering = `Let us stay focused on our technical interview on ${question.moduleTitle || question.topic}. Let's revisit the core concept: what trade-off deserves the most attention in this area?`;
    return {
      type: "STEER_BACK",
      spokenText: steering,
      isOffTopic: true,
    };
  }

  // 3. Natural conversational follow-up
  if (words.length >= 10 && question.followUp) {
    return {
      type: "FOLLOW_UP",
      spokenText: question.followUp,
      isFollowUp: true,
    };
  }

  // 4. Advance to next topic in module
  const nextQ = buildDynamicQuestion({
    courseId: "ai-engineering",
    moduleId,
    index: index + 1,
    difficulty: index >= 3 ? "hard" : "medium",
  });

  return {
    type: "NEXT_QUESTION",
    question: nextQ,
    spokenText: nextQ.questionText,
  };
}

/**
 * 1. Create a new Interview Session (Dynamically generated Q1 based on selected course module)
 */
export async function createSession({
  userId,
  user,
  courseId = "ai-engineering",
  moduleId = "all",
  role = null,
  env,
}) {
  const store = await getStore(env);
  const sessionId = `int_${crypto.randomUUID()}`;
  const courseObj = getCourseById(courseId) || PREPSPACES_COURSES[0];
  const resolvedCourseId = isValidCourseId(courseId) ? courseObj.id : PREPSPACES_COURSES[0].id;
  const normMod = normalizeModuleId(moduleId, resolvedCourseId);
  const resolvedRole = role || `${courseObj.title} Mock Interview`;

  // Load recent question history for this candidate + course to prevent cross-session repeats
  const historyKey = `interview:history:${resolvedCourseId}:${userId || "anonymous"}`;
  const history = (await store.get(historyKey, "json")) || {
    recentFingerprints: [],
    recentModules: [],
  };

  // Generate 7 fresh, non-duplicate, semantically varied questions tailored to course & module
  const count = 7;
  const questions = selectDiverseQuestions({
    courseId: resolvedCourseId,
    moduleId: normMod,
    count,
    recentFingerprints: history.recentFingerprints || [],
    recentModules: history.recentModules || [],
  });

  // Persist asked question fingerprints & visited modules in recent candidate history (rolling 49 questions)
  const newFingerprints = questions.map((q) => q.fingerprint).filter(Boolean);
  const newModules = questions.map((q) => q.moduleId).filter((m) => m && m !== "all");
  const updatedHistory = {
    recentFingerprints: [...new Set([...newFingerprints, ...(history.recentFingerprints || [])])].slice(0, 49),
    recentModules: [...new Set([...newModules, ...(history.recentModules || [])])].slice(0, 14),
    updatedAt: Date.now(),
  };
  await store.put(historyKey, updatedHistory, { expirationTtl: 60 * 60 * 24 * 30 });

  const session = {
    id: sessionId,
    candidateId: userId,
    candidateName: user?.name || "Candidate",
    candidateEmail: user?.email || "",
    role: resolvedRole,
    courseId: resolvedCourseId,
    courseTitle: courseObj.title,
    moduleId: normMod,
    status: "PENDING",
    createdAt: Date.now(),
    startedAt: null,
    completedAt: null,
    durationSeconds: 180, // strict 3-minute session
    timerDurationSeconds: 180,
    currentQuestionIndex: 0,
    maxQuestions: 7,
    questions,
    currentQuestion: questions[0] || null,
    answers: [],
    conversationHistory: [
      {
        turn: 1,
        role: "interviewer",
        text: questions[0].questionText,
        questionId: questions[0].id,
        context: questions[0].context,
        timestamp: Date.now(),
      }
    ],
    violations: [],
    violationsCount: 0,
  };

  await store.put(`interview:session:${sessionId}`, session);
  return session;
}

/**
 * 2. Get an existing Interview Session
 */
export async function getSession(sessionId, env) {
  const store = await getStore(env);
  return await store.get(`interview:session:${sessionId}`, "json");
}

/**
 * 3. Start the interview session (Transitions to ACTIVE)
 */
export async function startSession(sessionId, env, slotMetadata = {}) {
  const store = await getStore(env);
  const session = await store.get(`interview:session:${sessionId}`, "json");
  if (!session) return null;

  if (session.status !== "ACTIVE") {
    session.status = "ACTIVE";
    session.startedAt = Date.now();
    session.expiresAt = session.startedAt + (session.durationSeconds || session.timerDurationSeconds || 180) * 1000;
  }
  if (slotMetadata.slotId) session.slotId = slotMetadata.slotId;
  if (slotMetadata.assignedKeyIndex) session.assignedKeyIndex = slotMetadata.assignedKeyIndex;

  await store.put(`interview:session:${sessionId}`, session);
  return session;
}

/**
 * 4. Submit an answer to the current question (Dynamic Conversational Turn)
 */
export async function submitAnswer({
  sessionId,
  questionId,
  transcript,
  inputMode = "voice",
  durationMs = 45000,
  slotId = null,
  assignedKeyIndex = null,
  twoPhaseFallback = false,
  allowBackupFallback = false,
  onBeforeFallback = null,
  fetchFn = null,
  env,
}) {
  const store = await getStore(env);
  const session = await store.get(`interview:session:${sessionId}`, "json");
  if (!session) return null;

  const sessionQuestions = Array.isArray(session.questions) ? session.questions : [];
  const matchedIdx = questionId ? sessionQuestions.findIndex((q) => q.id === questionId) : -1;
  const currentIdx = matchedIdx >= 0 ? matchedIdx : (session.currentQuestionIndex || 0);
  const currentQ = sessionQuestions[currentIdx] || buildDynamicQuestion({
    courseId: session.courseId,
    moduleId: session.moduleId,
    index: currentIdx,
    excludeQuestions: sessionQuestions,
  });

  // Idempotency guard: prevent duplicate answer submission for the same questionId
  const targetQId = questionId || currentQ.id;
  const existingAnswer = (session.answers || []).find((a) => a.questionId === targetQId);
  if (existingAnswer) {
    return {
      session,
      nextQuestion: session.questions[session.currentQuestionIndex || 0] || null,
      evaluation: existingAnswer,
      idempotentHit: true,
    };
  }

  // Persist spoken transcript progress immediately BEFORE calling external AI APIs
  session.pendingDraft = {
    questionId: currentQ.id,
    transcript: transcript || "",
    inputMode,
    savedAt: Date.now(),
  };
  await store.put(`interview:session:${sessionId}`, session);

  // 1. Evaluate current answer
  const evaluation = await evaluateAnswer({
    question: currentQ,
    transcript: transcript || "",
    inputMode,
    env,
    sessionId,
    slotId: slotId || session.slotId || null,
    assignedKeyIndex: assignedKeyIndex || session.assignedKeyIndex || null,
    twoPhaseFallback,
    allowBackupFallback,
    onBeforeFallback,
    fetchFn,
  });

  // Two-phase fallback pause: primary key is in cooldown/rate-limited.
  // Progress has ALREADY been preserved above; return notification BEFORE calling backup!
  if (evaluation?.fallbackPending) {
    return {
      fallbackPending: true,
      notificationRequired: true,
      notificationMessage: evaluation.notificationMessage,
      session,
    };
  }

  delete session.pendingDraft;

  const answerRecord = {
    questionId: currentQ.id,
    questionNumber: currentIdx + 1,
    questionText: currentQ.questionText,
    context: currentQ.context,
    transcript: transcript || "",
    inputMode,
    durationMs,
    submittedAt: Date.now(),
    rating: evaluation.rating ?? evaluation.score ?? evaluation.overallScore,
    scores: evaluation.scores,
    overallScore: evaluation.overallScore,
    score: evaluation.overallScore,
    feedback: evaluation.feedback,
    rubricFeedback: evaluation.rubricFeedback,
    strengths: evaluation.strengths,
    improvements: evaluation.improvements,
  };

  session.answers.push(answerRecord);

  // 2. Record candidate response in conversation history
  session.conversationHistory.push({
    turn: currentIdx + 1,
    role: "candidate",
    text: transcript || "",
    timestamp: Date.now(),
  });

  // 3. Advance question index
  const nextIdx = currentIdx + 1;
  session.currentQuestionIndex = nextIdx;

  let nextQuestion = null;

  // 4. Check if max questions reached or session finished
  if (nextIdx >= session.maxQuestions) {
    session.status = "COMPLETED";
    session.completedAt = Date.now();
    const finalReport = buildFinalReport(session.answers, session.role);
    session.report = finalReport;
  } else {
    // Preserve pre-allocated session question so client and server question IDs stay synchronized
    nextQuestion = session.questions[nextIdx] || buildDynamicQuestion({
      courseId: session.courseId,
      moduleId: session.moduleId,
      index: nextIdx,
      difficulty: nextIdx >= 3 ? "hard" : "medium",
      excludeQuestions: session.questions || [],
    });
    session.questions[nextIdx] = nextQuestion;

    // Record interviewer's response in conversation history
    session.conversationHistory.push({
      turn: nextIdx + 1,
      role: "interviewer",
      text: nextQuestion.questionText,
      questionId: nextQuestion.id,
      timestamp: Date.now(),
    });
  }

  await store.put(`interview:session:${sessionId}`, session);

  return {
    session,
    nextQuestion,
    evaluation,
  };
}

/**
 * 5. End interview session (3-minute timer expired or candidate clicked End)
 */
export async function endSession({ sessionId, reason = "USER_ENDED", clientAnswers = [], env }) {
  const store = await getStore(env);
  const session = await store.get(`interview:session:${sessionId}`, "json");
  if (!session) return null;

  // Idempotency guard: if already completed and no additional answers supplied, return existing report
  if (session.status === "COMPLETED" && session.report && (!Array.isArray(clientAnswers) || clientAnswers.length === 0)) {
    return {
      session,
      report: session.report,
      idempotentHit: true,
    };
  }

  session.status = "COMPLETED";
  session.completedAt = session.completedAt || Date.now();
  session.endReason = session.endReason || reason;

  session.answers = session.answers || [];
  const existingIds = new Set(session.answers.map((a) => a.questionId).filter(Boolean));
  const existingNumbers = new Set(session.answers.map((a) => a.questionNumber).filter((n) => typeof n === "number"));

  // Recover pendingDraft if cooldown/interruption occurred before answer evaluation finished
  if (session.pendingDraft && session.pendingDraft.transcript && !existingIds.has(session.pendingDraft.questionId)) {
    const qObj = (session.questions || []).find((q) => q.id === session.pendingDraft.questionId) || {};
    if (!(typeof qObj.questionNumber === "number" && existingNumbers.has(qObj.questionNumber))) {
      session.answers.push({
        questionId: session.pendingDraft.questionId,
        questionNumber: qObj.questionNumber,
        questionText: qObj.questionText || qObj.question || "Interview Question",
        context: qObj.context || "",
        transcript: session.pendingDraft.transcript,
        inputMode: session.pendingDraft.inputMode || "voice",
        submittedAt: session.pendingDraft.savedAt || Date.now(),
      });
      existingIds.add(session.pendingDraft.questionId);
      if (typeof qObj.questionNumber === "number") existingNumbers.add(qObj.questionNumber);
    }
    delete session.pendingDraft;
  }

  // Merge clientAnswers with session.answers without duplicating by questionId or questionNumber
  if (Array.isArray(clientAnswers) && clientAnswers.length > 0) {
    for (const ca of clientAnswers) {
      const hasId = ca.questionId && existingIds.has(ca.questionId);
      const hasNum = typeof ca.questionNumber === "number" && existingNumbers.has(ca.questionNumber);
      if (!hasId && !hasNum) {
        session.answers.push(ca);
        if (ca.questionId) existingIds.add(ca.questionId);
        if (typeof ca.questionNumber === "number") existingNumbers.add(ca.questionNumber);
      }
    }
  }

  session.answers.sort((a, b) => (a.questionNumber || 999) - (b.questionNumber || 999));
  if (session.maxQuestions && session.answers.length > session.maxQuestions) {
    session.answers = session.answers.slice(0, session.maxQuestions);
  }

  // Build holistic final report across all submitted answers and conversation history
  const report = buildFinalReport(session.answers, session.role);
  session.report = report;

  await store.put(`interview:session:${sessionId}`, session);

  return {
    session,
    report,
  };
}

/**
 * 6. Record proctoring violation event
 */
export async function recordViolation({ sessionId, violationType = "unknown", env }) {
  const store = await getStore(env);
  const session = await store.get(`interview:session:${sessionId}`, "json");
  if (!session) return null;

  const violation = {
    type: violationType,
    timestamp: Date.now(),
  };

  session.violations = session.violations || [];
  session.violations.push(violation);
  session.violationsCount = (session.violationsCount || 0) + 1;

  await store.put(`interview:session:${sessionId}`, session);
  return session;
}

/**
 * Dynamic questions allocation backward compatibility export
 */
export async function allocateQuestions({ count = 7, courseId = "ai-engineering", moduleId = "all" }) {
  return selectDiverseQuestions({ courseId, moduleId, count });
}
