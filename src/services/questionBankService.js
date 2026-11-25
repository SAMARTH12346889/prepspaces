/**
 * PrepSpaces AI Engineering & Technical Interview Dynamic Question & Evaluation Service
 * 
 * 100% Dynamic Engine (Zero static JSON question bank dependencies):
 * - Dynamically generates questions tailored to the selected course and module (M01 - M24).
 * - Generates adaptive, conversational follow-up questions based on the candidate's transcribed answer.
 * - Handles candidate confusion, hints, and clarification requests.
 * - Politely steers off-topic inputs back to the module topics.
 * - Produces voice-friendly spoken technical questions (no markdown, no bullets, no code blocks).
 * - Implements 5-criteria rubric answer evaluation (Relevance, Technical Correctness, Depth, Clarity, Communication).
 */

import {
  PREPSPACES_COURSES,
  getCourseById,
  getModuleById,
  normalizeModuleId,
} from "../config/courseInterviewConfig.js";

const ALLOCATION_STORAGE_KEY = "prepspaces_allocated_question_ids";

// Core syllabus topics and architectural concepts per module (M01 to M24)
export const MODULE_TOPIC_REGISTRY = {
  M01: {
    title: "AI Engineering Foundations & Python for AI",
    phase: "P1",
    concepts: [
      {
        topic: "AI vs ML vs Deep Learning vs Generative AI",
        question: "How do artificial intelligence, machine learning, deep learning, and generative AI relate to one another in enterprise systems?",
        context: "Expected focus areas: Position AI as broad field; Describe ML as data-driven learning; Explain DL layered representations; Describe GenAI as producing new content.",
        expectedPoints: [
          "Position AI as the broad field of intelligent systems",
          "Describe machine learning as data-driven model learning",
          "Explain deep learning through layered neural representations",
          "Describe generative AI as producing new content"
        ],
        keywords: ["broad", "intelligent", "data-driven", "neural", "layers", "generative", "content"],
        followUp: "When a customer asks for a GenAI solution, how do you decide if traditional machine learning or simple heuristics would actually be more cost-effective?",
      },
      {
        topic: "NumPy Vectorization & Memory Layout",
        question: "Why is vectorized computation in NumPy significantly faster than pure Python loops, and how does memory layout like row-major versus column-major affect cache performance?",
        context: "Expected focus areas: Contiguous memory blocks; SIMD processor instructions; CPU cache locality; Avoiding Python interpreter overhead.",
        expectedPoints: [
          "Explain contiguous memory layout in C vs Python object pointers",
          "Describe SIMD single instruction multiple data execution",
          "Detail CPU cache line hits and temporal spatial locality",
          "Explain eliminating Python dynamic dispatch and GIL overhead"
        ],
        keywords: ["contiguous", "simd", "cache", "locality", "c-contiguous", "strides", "pointer"],
        followUp: "How do memory strides change when you take a transpose or a slice of a large multidimensional tensor?",
      },
      {
        topic: "Python GIL and Parallel AI Workloads",
        question: "How does the Python Global Interpreter Lock impact concurrent AI workloads, and when should you choose multiprocessing or asyncio over multithreading?",
        context: "Expected focus areas: GIL locking mechanism; CPU-bound vs IO-bound tasks; Multiprocessing IPC; Asyncio event loop for streaming LLM calls.",
        expectedPoints: [
          "Explain GIL preventing true multi-core CPU execution for bytecode",
          "Differentiate CPU-bound model training from IO-bound streaming network calls",
          "Use multiprocessing or native C extensions to bypass GIL for compute",
          "Use asyncio for high-concurrency LLM API requests and token streaming"
        ],
        keywords: ["gil", "cpu-bound", "io-bound", "multiprocessing", "asyncio", "threads", "concurrency"],
        followUp: "In a production microservice orchestrating parallel LLM calls, why is asyncio preferred over spinning up hundreds of OS threads?",
      }
    ],
  },
  M02: {
    title: "Mathematics for AI & Machine Learning",
    phase: "P1",
    concepts: [
      {
        topic: "Eigenvalues, Eigenvectors and SVD",
        question: "What is the geometric interpretation of eigenvalues and eigenvectors, and how does Singular Value Decomposition enable dimensionality reduction in embeddings?",
        context: "Expected focus areas: Direction preservation under linear transformations; Variance maximization; Low-rank matrix approximation; Truncated SVD in embeddings.",
        expectedPoints: [
          "Explain vectors that only scale by lambda without changing direction",
          "Describe SVD decomposition into U, Sigma, and V transpose matrices",
          "Explain capturing principal directions of maximum variance",
          "Detail low-rank approximation for compression and latent semantic analysis"
        ],
        keywords: ["eigenvalue", "eigenvector", "svd", "variance", "transformation", "low-rank", "decomposition"],
        followUp: "Why is SVD numerically more stable than computing the eigendecomposition of the covariance matrix directly?",
      },
      {
        topic: "Gradient Descent and Loss Landscapes",
        question: "How do gradients guide parameter optimization, and why do vanishing or exploding gradients occur in deep neural networks?",
        context: "Expected focus areas: Partial derivatives and steepest descent; Chain rule in backpropagation; Activation saturation; Weight initialization and normalization.",
        expectedPoints: [
          "Explain directional derivative of the loss surface",
          "Describe repeated matrix multiplications in the chain rule",
          "Explain saturation in sigmoidal activations causing near-zero derivatives",
          "Highlight modern solutions like residual connections and layer normalization"
        ],
        keywords: ["gradient", "derivative", "chain rule", "vanishing", "exploding", "saturation", "residual"],
        followUp: "How does Adam optimizer combine first and second moment estimations to overcome saddle points and ill-conditioned curvature?",
      }
    ],
  },
  M03: {
    title: "Machine Learning Fundamentals",
    phase: "P1",
    concepts: [
      {
        topic: "Bias-Variance Trade-off & Regularization",
        question: "How do you diagnose high bias versus high variance in an ML model, and what architectural adjustments would you make to resolve each?",
        context: "Expected focus areas: Underfitting vs overfitting symptoms; Learning curves; L1 vs L2 regularization; Cross-validation strategies.",
        expectedPoints: [
          "Identify high training and validation error as high bias underfitting",
          "Identify large gap between training and validation error as high variance",
          "Apply model capacity scaling or feature engineering for high bias",
          "Apply L1 Lasso, L2 Ridge, dropout, or more data for high variance"
        ],
        keywords: ["bias", "variance", "underfitting", "overfitting", "regularization", "l1", "l2", "generalization"],
        followUp: "When would you prefer L1 regularization over L2 regularization in a high-dimensional feature space?",
      }
    ],
  },
  M04: {
    title: "Deep Learning & Neural Network Engineering",
    phase: "P1",
    concepts: [
      {
        topic: "Backpropagation & Computation Graphs",
        question: "Can you explain how automatic differentiation works via dynamic computation graphs in PyTorch during the forward and backward passes?",
        context: "Expected focus areas: Directed acyclic graphs; Tensor grad_fn; Accumulation of gradients; Memory freeing on backward pass.",
        expectedPoints: [
          "Describe construction of DAG during forward tensor operations",
          "Explain grad_fn pointers tracking mathematical operations",
          "Trace reverse-mode automatic differentiation applying vector-Jacobian products",
          "Discuss graph retention and torch.no_grad() for inference memory optimization"
        ],
        keywords: ["autograd", "computation graph", "forward", "backward", "jacobian", "grad_fn", "no_grad"],
        followUp: "Why does torch.no_grad() reduce GPU memory consumption during inference beyond just saving compute time?",
      }
    ],
  },
  M05: {
    title: "Natural Language Processing Engineering",
    phase: "P2",
    concepts: [
      {
        topic: "Subword Tokenization (BPE & WordPiece)",
        question: "How does Byte-Pair Encoding handle out-of-vocabulary words compared to word-level tokenization, and what trade-offs exist with vocabulary size?",
        context: "Expected focus areas: Frequency-based subword merging; OOV elimination via byte fallbacks; Embedding table memory footprint; Sequence length impact.",
        expectedPoints: [
          "Describe iterative merging of the most frequent byte pairs",
          "Explain breaking unknown words down into known subword tokens",
          "Discuss trade-off: large vocab increases embedding weights, small vocab lengthens sequences",
          "Highlight tokenization artifacts like whitespace sensitivity and multi-lingual compression"
        ],
        keywords: ["bpe", "subword", "byte-pair", "vocabulary", "oov", "compression", "embedding"],
        followUp: "Why do common numbers and math expressions often tokenize into multiple fragments, and how does that affect LLM arithmetic ability?",
      }
    ],
  },
  M06: {
    title: "Transformer Architecture from Scratch",
    phase: "P2",
    concepts: [
      {
        topic: "Scaled Dot-Product Attention & Multi-Head Mechanism",
        question: "Walk me through the mathematical formulation of Scaled Dot-Product Attention. Why is the square root of the head dimension used as a scaling factor?",
        context: "Expected focus areas: Query, Key, Value projections; Softmax temperature scaling; Dot product variance growth; Multi-head projection subspaces.",
        expectedPoints: [
          "State Q K transpose divided by sqrt d_k followed by softmax times V",
          "Explain dot products growing with dimension causing large values",
          "Show large values push softmax into regions with vanishing gradients",
          "Explain multi-head attention allowing the model to attend to multiple representation subspaces"
        ],
        keywords: ["query", "key", "value", "scaled dot-product", "sqrt", "dimension", "softmax", "multi-head"],
        followUp: "How does Rotary Position Embedding (RoPE) encode relative position information directly into the Query and Key vectors compared to absolute sinusoidal encodings?",
      }
    ],
  },
  M07: {
    title: "Large Language Models: GPT, Llama & Qwen",
    phase: "P2",
    concepts: [
      {
        topic: "Decoder-Only Architecture & KV Caching",
        question: "Why have decoder-only architectures dominated modern generative LLMs, and how does KV Caching optimize the autoregressive generation loop?",
        context: "Expected focus areas: Causal masking; Prefill vs decode phase; Avoiding redundant Key-Value computation; GPU VRAM overhead of KV caches.",
        expectedPoints: [
          "Explain causal self-attention generating one token at a time autoregressively",
          "Differentiate high-throughput parallel prefill from latency-critical single-token decode",
          "Describe storing past Keys and Values in memory to avoid O(N^2) recomputation",
          "Discuss KV cache memory footprint scaling with batch size, layers, and context length"
        ],
        keywords: ["decoder-only", "causal mask", "kv cache", "prefill", "decode", "vram", "autoregressive"],
        followUp: "How does Grouped Query Attention (GQA) reduce KV cache memory consumption while preserving model accuracy compared to Multi-Head Attention?",
      }
    ],
  },
  M08: {
    title: "LLM Training & Fine-Tuning Foundations",
    phase: "P2",
    concepts: [
      {
        topic: "Pre-training vs Instruction Tuning vs Alignment",
        question: "What are the core distinctions between self-supervised pre-training, supervised instruction fine-tuning, and preference alignment like DPO or RLHF?",
        context: "Expected focus areas: Next-token prediction on web data; Chat template formatting; Reward models vs Direct Preference Optimization; Catastrophic forgetting.",
        expectedPoints: [
          "Describe pre-training learning world knowledge and grammar via next-token prediction",
          "Explain supervised instruction tuning adapting base models to follow human directives",
          "Detail preference alignment aligning tone, safety, and helpfulness with human preferences",
          "Explain how DPO eliminates the separate reward model required by traditional RLHF"
        ],
        keywords: ["pre-training", "sft", "instruction tuning", "rlhf", "dpo", "alignment", "catastrophic forgetting"],
        followUp: "What strategies prevent catastrophic forgetting of general reasoning capabilities during intensive domain fine-tuning?",
      }
    ],
  },
  M09: {
    title: "Prompt Engineering & Structured LLM Outputs",
    phase: "P3",
    concepts: [
      {
        topic: "Structured Decoding & Constrained Generation",
        question: "When building an API that requires strict JSON output from an LLM, how do grammar-constrained decoding engines differ from prompt-level JSON instructions?",
        context: "Expected focus areas: Outlines/vLLM grammar masking; Logit masking at token level; Elimination of JSON parsing errors; Prompting failure modes.",
        expectedPoints: [
          "Explain prompt-level JSON requesting format but still capable of syntax errors",
          "Describe logit masking enforcing BNF or context-free grammars during sampling",
          "Highlight that grammar masking guarantees 100% valid JSON tokens without retry loops",
          "Discuss performance trade-offs of regex-based token masking on generation latency"
        ],
        keywords: ["json", "grammar", "constrained decoding", "logit masking", "schema", "regex", "outlines"],
        followUp: "How does Chain-of-Thought prompting affect structured output generation, and where should reasoning tokens be placed relative to the final JSON payload?",
      }
    ],
  },
  M10: {
    title: "Embeddings, Vector Databases & Semantic Search",
    phase: "P3",
    concepts: [
      {
        topic: "Approximate Nearest Neighbors & HNSW Indexing",
        question: "How does the Hierarchical Navigable Small World (HNSW) graph algorithm achieve sub-linear query time for high-dimensional vector search?",
        context: "Expected focus areas: Multi-layer skip-list graph; Greedy routing at upper layers; Local neighborhood search at layer 0; Trade-off between recall, latency, and RAM.",
        expectedPoints: [
          "Explain hierarchical layers analogous to a multi-layer skip-list",
          "Describe greedy search on sparse upper layers for rapid long-range navigation",
          "Explain transitioning to dense bottom layers for fine-grained local nearest neighbors",
          "Analyze the trade-off: high RAM consumption for graph edges vs ultra-low query latency"
        ],
        keywords: ["hnsw", "approximate nearest neighbor", "skip-list", "graph", "recall", "latency", "ram"],
        followUp: "When would you choose Inverted File Indexing with Product Quantization (IVF-PQ) over HNSW for a 50-million vector dataset?",
      }
    ],
  },
  M11: {
    title: "Retrieval-Augmented Generation (RAG) Engineering",
    phase: "P3",
    concepts: [
      {
        topic: "Chunking Strategies & Hybrid Dense-Sparse Search",
        question: "Why does naive fixed-character chunking frequently fail in production RAG systems, and how does hybrid dense-sparse search solve semantic blindness?",
        context: "Expected focus areas: Boundary slicing of tables/sentences; Semantic chunking; BM25 keyword matching plus dense vector cosine similarity; Reciprocal Rank Fusion.",
        expectedPoints: [
          "Explain fixed chunking breaking sentences, code blocks, and contextual references",
          "Describe semantic chunking grouping sentences by embedding similarity thresholds",
          "Explain combining BM25 keyword search with dense semantic embedding search",
          "Detail Reciprocal Rank Fusion (RRF) to merge disparate score distributions fairly"
        ],
        keywords: ["chunking", "semantic chunking", "bm25", "hybrid search", "dense", "sparse", "reciprocal rank fusion"],
        followUp: "How do you evaluate retrieval precision and context relevance independently from the LLM's final generation quality?",
      }
    ],
  },
  M12: {
    title: "Multimodal Generative AI",
    phase: "P3",
    concepts: [
      {
        topic: "Vision-Language Architecture (CLIP & Projection Layers)",
        question: "How do vision-language models bridge the gap between image pixels and text tokens, and what is the role of vision encoders like ViT and linear projection layers?",
        context: "Expected focus areas: Patch extraction; Vision Transformer embeddings; Cross-attention or MLP projection into LLM token space; Contrastive pre-training.",
        expectedPoints: [
          "Describe slicing images into patches treated as visual tokens by a Vision Transformer",
          "Explain projection layers mapping visual embedding dimensions into the LLM's token space",
          "Explain joint contrastive training aligning text and image embeddings in shared space",
          "Describe multimodal generation feeding projected image tokens directly into the LLM context"
        ],
        keywords: ["vit", "vision transformer", "patches", "projection", "contrastive", "clip", "multimodal"],
        followUp: "What happens to LLM context window consumption when high-resolution images are converted into hundreds of visual tokens?",
      }
    ],
  },
  M13: {
    title: "AI Agents & Tool-Calling Systems",
    phase: "P4",
    concepts: [
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
  },
  M14: {
    title: "Multi-Agent AI Systems & Orchestration",
    phase: "P4",
    concepts: [
      {
        topic: "Hierarchical vs Peer-to-Peer Agent Collaboration",
        question: "When designing multi-agent architectures, what are the architectural trade-offs between a centralized supervisor model versus a decentralized peer-to-peer message graph?",
        context: "Expected focus areas: Single point of failure; Token consumption overhead; Task routing efficiency; State coordination and deadlocks.",
        expectedPoints: [
          "Describe supervisor pattern routing tasks hierarchically with clear responsibility",
          "Describe peer-to-peer topologies where agents exchange messages dynamically",
          "Analyze supervisor trade-offs: simple state control but potential routing bottleneck",
          "Analyze P2P trade-offs: high flexibility but risk of circular communication loops and runaway token cost"
        ],
        keywords: ["supervisor", "orchestration", "peer-to-peer", "message graph", "routing", "state", "consensus"],
        followUp: "How do you maintain shared conversational state across multiple specialized subagents without blowing past token limits?",
      }
    ],
  },
  M15: {
    title: "Advanced RAG & Knowledge Engineering",
    phase: "P4",
    concepts: [
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
        followUp: "How do you address the 'Lost in the Middle' phenomenon where LLMs ignore relevant information placed in the middle of long prompts?",
      }
    ],
  },
  M16: {
    title: "AI Evaluation, Alignment & Safety Engineering",
    phase: "P4",
    concepts: [
      {
        topic: "LLM-as-a-Judge, Hallucination Metrics & Guardrails",
        question: "How do you design an automated LLM-as-a-Judge evaluation framework for production, and what measures prevent judge bias, position bias, and self-preference?",
        context: "Expected focus areas: Rubric definition; Position swapping; Few-shot calibration; Faithfulness, Answer Relevance, and Context Precision metrics.",
        expectedPoints: [
          "Define specific, granular grading rubrics with concrete numerical scoring anchors",
          "Swap presentation order of candidate outputs to eliminate order/position bias",
          "Use a stronger model family as the judge to minimize self-preference bias",
          "Measure standard RAG triad metrics: Faithfulness, Answer Relevance, and Context Precision"
        ],
        keywords: ["llm-as-a-judge", "hallucination", "faithfulness", "position bias", "guardrails", "evals", "ragas"],
        followUp: "How do input guardrails like Llama Guard or NeMo Guardrails intercept adversarial prompt injections in real time?",
      }
    ],
  },
  M17: {
    title: "LLM Inference & Model Serving Engineering",
    phase: "P5",
    concepts: [
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
  },
  M18: {
    title: "AI Backend Engineering & API Development",
    phase: "P5",
    concepts: [
      {
        topic: "Server-Sent Events (SSE) & Async Workflows",
        question: "When delivering streaming AI responses to thousands of web clients, why is Server-Sent Events generally preferred over WebSockets, and how do you handle client disconnections cleanly?",
        context: "Expected focus areas: HTTP/2 multiplexing; Unidirectional token streams; Automatic reconnection; Upstream LLM cancellation on client abort.",
        expectedPoints: [
          "Explain SSE operating over standard HTTP with native browser EventSource support",
          "Highlight SSE lightweight unidirectional nature vs bidirectional WebSocket overhead",
          "Describe using AbortController to cleanly cancel in-flight GPU generation when a client disconnects",
          "Discuss HTTP/2 multiplexing preventing connection starvation across browser tabs"
        ],
        keywords: ["sse", "server-sent events", "websockets", "abortcontroller", "streaming", "http2", "cancellation"],
        followUp: "How do you implement backpressure when an upstream model generates tokens faster than a downstream client can consume them?",
      }
    ],
  },
  M19: {
    title: "AI MLOps, Deployment & CI/CD",
    phase: "P5",
    concepts: [
      {
        topic: "Model Versioning, Canary Rollouts & Observability",
        question: "Walk me through a robust CI/CD and deployment pipeline for an enterprise LLM system. How do you implement canary rollouts and detect subtle output regressions in production?",
        context: "Expected focus areas: GitOps for prompts and weights; Shadow deployments; Latency and token cost monitoring; Automated rollback triggers.",
        expectedPoints: [
          "Version model weights, configuration, and prompt templates together as immutable artifacts",
          "Run automated benchmark evaluations in CI before releasing candidate models",
          "Route a small percentage of live traffic to the canary deployment while monitoring error rates",
          "Track key SLIs: Time-To-First-Token (TTFT), tokens-per-second, hallucination rates, and user feedback"
        ],
        keywords: ["mlops", "canary", "shadow deployment", "versioning", "rollback", "ttft", "observability", "ci/cd"],
        followUp: "If a canary release causes a 5% latency spike on TTFT but increases answer quality by 10%, how do you make the decision to promote or roll back?",
      }
    ],
  },
  M20: {
    title: "AI Scalability, Optimization & Observability",
    phase: "P5",
    concepts: [
      {
        topic: "Quantization (AWQ, GPTQ, FP8) & GPU Profiling",
        question: "What are the core differences between weight-only quantization like AWQ and full activation-weight quantization like FP8, and how do they impact inference throughput?",
        context: "Expected focus areas: Memory bandwidth vs compute bound regimes; Activation outliers; Tensor core hardware support; Perplexity degradation.",
        expectedPoints: [
          "Explain weight-only quantization (e.g. 4-bit AWQ) reducing VRAM and memory bandwidth bottlenecks",
          "Explain FP8 quantizing both weights and activations to leverage dedicated FP8 tensor cores",
          "Describe activation outliers making 4-bit activation quantization challenging without custom scaling",
          "Analyze the trade-off: weight-only accelerates batch size 1, FP8 accelerates high-throughput batching"
        ],
        keywords: ["quantization", "awq", "gptq", "fp8", "memory bandwidth", "activation", "tensor cores", "perplexity"],
        followUp: "How do you profile an inference service to determine whether latency is bounded by GPU memory bandwidth or GPU compute cores?",
      }
    ],
  },
  M21: {
    title: "Fine-Tuning LLMs for Domain-Specific Applications",
    phase: "P6",
    concepts: [
      {
        topic: "Parameter-Efficient Fine-Tuning (LoRA & QLoRA)",
        question: "Explain the mathematical intuition behind Low-Rank Adaptation (LoRA). Why can we freeze the base model and only train low-rank decomposition matrices?",
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
  },
  M22: {
    title: "Building Small Language Models from Scratch",
    phase: "P6",
    concepts: [
      {
        topic: "Small Language Models (SLMs) vs Large Models",
        question: "What architectural and dataset curation principles allow modern Small Language Models like Phi-3 or Llama-3-1B to match the reasoning performance of much larger models?",
        context: "Expected focus areas: High-quality synthetic textbook data; Chinchilla scaling law limits; Architecture innovations; Edge and on-device deployment.",
        expectedPoints: [
          "Explain prioritizing data quality and synthetic filtered educational datasets over raw web scrape",
          "Discuss training tokens-per-parameter far beyond traditional Chinchilla-optimal points",
          "Highlight compact architectures tailored for CPU/mobile neural accelerators",
          "Discuss lower operational cost, zero network latency, and privacy benefits of on-device SLMs"
        ],
        keywords: ["slm", "small language model", "synthetic data", "data quality", "chinchilla", "edge", "on-device"],
        followUp: "What techniques are used to distill reasoning capabilities from a 400B teacher model into a 2B student model?",
      }
    ],
  },
  M23: {
    title: "AI System Design & Real-World Architecture",
    phase: "P6",
    concepts: [
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
  },
  M24: {
    title: "Final AI Engineering Capstone",
    phase: "P6",
    concepts: [
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
  },
};

/**
 * Returns allocated question IDs from localStorage
 */
export function getAllocatedQuestionIds() {
  try {
    const raw = localStorage.getItem(ALLOCATION_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Marks question IDs as allocated in localStorage
 */
export function markQuestionsAllocated(questionIds) {
  try {
    const current = getAllocatedQuestionIds();
    const set = new Set([...current, ...questionIds]);
    localStorage.setItem(ALLOCATION_STORAGE_KEY, JSON.stringify(Array.from(set)));
  } catch (e) {
    console.warn("[questionBankService] Failed to save allocated question IDs:", e);
  }
}

/**
 * Resets question allocation history
 */
export function resetAllocationHistory() {
  try {
    localStorage.removeItem(ALLOCATION_STORAGE_KEY);
  } catch (e) {
    console.warn("[questionBankService] Failed to reset allocation history:", e);
  }
}

/**
 * Dynamically generates a single technical interview question for a given course and module
 */
export function generateDynamicQuestion({
  courseId = "ai-engineering",
  moduleId = "M01",
  index = 0,
  difficulty = "medium",
}) {
  const normMod = normalizeModuleId(moduleId);
  const modKey = (normMod && normMod !== "all") ? normMod : `M${String((index % 24) + 1).padStart(2, "0")}`;
  const modData = MODULE_TOPIC_REGISTRY[modKey] || MODULE_TOPIC_REGISTRY["M01"];
  
  const conceptIdx = index % modData.concepts.length;
  const concept = modData.concepts[conceptIdx] || modData.concepts[0];

  const qId = `DYN-${modKey}-${Date.now().toString(36)}-${index + 1}`;

  return {
    id: qId,
    moduleId: modKey,
    moduleTitle: modData.title,
    questionNumber: index + 1,
    questionType: modData.title.toUpperCase(),
    topic: concept.topic,
    subtopic: concept.topic,
    difficulty,
    type: "concept",
    question: concept.question,
    questionText: concept.question,
    context: concept.context,
    expectedPoints: concept.expectedPoints,
    expected_points: concept.expectedPoints,
    keywords: concept.keywords,
    followUp: concept.followUp,
    timeLimitSec: 45,
    active: true,
  };
}

/**
 * Dynamic interview question allocator (100% dynamic, no static JSON files)
 */
export function allocateInterviewQuestions({
  count = 7,
  courseId = "ai-engineering",
  moduleId = "all",
  allowReuse = false,
} = {}) {
  const normMod = normalizeModuleId(moduleId);
  const questions = [];

  if (!normMod || normMod === "all") {
    // Comprehensive interview across modules
    for (let i = 0; i < count; i++) {
      const targetMod = `M${String(((i * 3 + 1) % 24) + 1).padStart(2, "0")}`;
      questions.push(generateDynamicQuestion({
        courseId,
        moduleId: targetMod,
        index: i,
        difficulty: i < 2 ? "easy" : i < 5 ? "medium" : "hard",
      }));
    }
  } else {
    // Specific module interview
    const modData = MODULE_TOPIC_REGISTRY[normMod] || MODULE_TOPIC_REGISTRY["M01"];
    const conceptCount = modData.concepts.length;
    for (let i = 0; i < count; i++) {
      questions.push(generateDynamicQuestion({
        courseId,
        moduleId: normMod,
        index: i,
        difficulty: i === 0 ? "easy" : i < 4 ? "medium" : "hard",
      }));
    }
  }

  markQuestionsAllocated(questions.map((q) => q.id));
  return questions;
}

/**
 * Dynamic Follow-up Generator
 * Takes candidate's answer and asks a natural, deeper spoken follow-up.
 */
export function generateDynamicFollowUp(question, candidateAnswer) {
  const text = (candidateAnswer || "").trim().toLowerCase();
  
  if (text.includes("i don't understand") || text.includes("can you clarify") || text.includes("what do you mean") || text.includes("hint")) {
    return `No problem. Let me break that down simply: think about ${question.topic}. In a real system, what is the primary bottleneck or trade-off you need to manage? Take your time and share your thoughts.`;
  }

  if (question.followUp) {
    return question.followUp;
  }

  return `That makes sense. Going one level deeper into your explanation of ${question.topic}, how would you test or measure that trade-off in a high-scale production system?`;
}

/**
 * 5-Criteria Rubric Answer Evaluator
 * Evaluates candidate response transcript against question expected focus areas:
 * Relevance, Technical Correctness, Depth, Clarity, Communication (1-10 each).
 */
export function evaluateAnswerWithRubric(question, transcript, inputMode = "voice") {
  const rawText = (transcript || "").trim();
  const words = rawText ? rawText.split(/\s+/).filter(Boolean) : [];
  const expectedPoints = question?.expectedPoints || question?.expected_points || [];
  const keywords = question?.keywords || [];

  // Check 1: Empty or skipped answers (< 3 words) -> strictly 0 / 10
  if (words.length < 3) {
    return {
      rating: 0,
      score: 0,
      overallScore: 0,
      scores: {
        relevance: 0,
        technical_correctness: 0,
        depth: 0,
        clarity: 0,
        communication: 0,
      },
      feedback: "No answer provided.",
      rubricFeedback: {
        relevance: "No answer provided.",
        technical_correctness: "No answer provided.",
        depth: "No answer provided.",
        clarity: "No answer provided.",
        communication: "No answer provided.",
      },
      coveredPoints: [],
      missedPoints: expectedPoints,
      strengths: [],
      improvements: ["Candidate did not provide a response to this question."],
      evaluatedBy: "skipped-filter",
    };
  }

  const text = rawText.toLowerCase();

  // Check 2: Off-topic or confusing input detection
  const isOffTopicQuery = 
    text.includes("weather") || 
    text.includes("who are you") || 
    text.includes("tell me a joke") ||
    text.includes("ignore previous instructions") ||
    text.includes("write a poem") ||
    text.includes("how are you");

  // Check 3: Clarification / Confusion request
  const isConfusion = 
    text.includes("don't know") || 
    text.includes("dont know") || 
    text.includes("not sure") ||
    text.includes("no idea") ||
    text.includes("can you clarify") ||
    text.includes("i don't understand");

  if (isConfusion && words.length < 15) {
    return {
      rating: 2,
      score: 2,
      overallScore: 2.0,
      scores: {
        relevance: 2,
        technical_correctness: 2,
        depth: 1,
        clarity: 5,
        communication: 5,
      },
      feedback: "Candidate acknowledged uncertainty regarding the topic.",
      rubricFeedback: {
        relevance: "Candidate communicated uncertainty directly rather than inventing facts.",
        technical_correctness: "Did not provide a technical explanation.",
        depth: "Limited depth as uncertainty was acknowledged.",
        clarity: "Clear communication of status.",
        communication: "Professional acknowledgment of knowledge boundary.",
      },
      coveredPoints: [],
      missedPoints: expectedPoints,
      strengths: ["Honest communication regarding familiarity with the topic."],
      improvements: ["Review the foundational concepts of " + (question?.topic || "this module") + "."],
      evaluatedBy: "clarification-detector",
    };
  }

  let coveredCount = 0;
  const coveredPoints = [];
  const missedPoints = [];

  for (const pt of expectedPoints) {
    const ptTokens = pt.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/).filter(w => w.length > 3);
    const matched = ptTokens.filter(tok => text.includes(tok));
    if (matched.length >= 2 || (ptTokens.length <= 3 && matched.length >= 1)) {
      coveredCount++;
      coveredPoints.push(pt);
    } else {
      missedPoints.push(pt);
    }
  }

  const keywordHits = keywords.filter(kw => {
    if (typeof kw === "string") return text.includes(kw.toLowerCase());
    if (Array.isArray(kw)) return kw.some(sub => text.includes(sub.toLowerCase()));
    return false;
  }).length;

  const totalExpected = Math.max(1, expectedPoints.length);
  const totalKeywords = Math.max(1, keywords.length);
  const coverageRatio = coveredCount / totalExpected;
  const keywordRatio = Math.min(1, keywordHits / totalKeywords);

  // Off-topic penalty
  if (isOffTopicQuery || (keywordHits === 0 && coverageRatio === 0 && words.length >= 5)) {
    return {
      rating: 1,
      score: 1,
      overallScore: 1.0,
      scores: {
        relevance: 1,
        technical_correctness: 1,
        depth: 1,
        clarity: 2,
        communication: 3,
      },
      feedback: "The answer was off-topic and did not address the technical question asked.",
      rubricFeedback: {
        relevance: "Did not cover expected topics for " + (question?.topic || "the question") + ".",
        technical_correctness: "No relevant technical claims provided.",
        depth: "Superficial or unrelated to the prompt.",
        clarity: "Logically disconnected from the interview scope.",
        communication: "Spoken flow present but off-target.",
      },
      coveredPoints: [],
      missedPoints: expectedPoints,
      strengths: [],
      improvements: ["Focus directly on the specific architectural or algorithmic concepts in the question."],
      evaluatedBy: "off-topic-gating",
    };
  }

  // Calculate dynamic Rating based strictly on Candidate Answer (1 to 10 scale):
  // 1. Concept Coverage (0 to 5.0 pts)
  const coverageScore = coverageRatio * 5.0;
  // 2. Keyword Matches (0 to 3.0 pts)
  const keywordScore = Math.min(3.0, keywordRatio * 3.0 + (keywordHits > 0 ? 0.8 : 0));
  // 3. Explanation Depth (0.5 to 2.0 pts)
  let depthScore = 0.5;
  if (words.length >= 35) {
    depthScore = 2.0;
  } else if (words.length >= 20) {
    depthScore = 1.5;
  } else if (words.length >= 10) {
    depthScore = 1.0;
  } else if (words.length >= 5) {
    depthScore = 0.7;
  }

  const baseScore = coverageScore + keywordScore + depthScore;
  const rating = Math.max(1, Math.min(10, Math.round(baseScore)));

  // Voice communication evaluation
  const fillerCount = (text.match(/\b(um|uh|like|you know|basically)\b/g) || []).length;
  const fillerPenalty = Math.min(3, Math.floor(fillerCount / 2));

  const relevance = Math.min(10, Math.max(1, Math.round(coverageRatio * 6 + (keywordHits > 0 ? 3 : 1))));
  const technical_correctness = Math.min(10, Math.max(1, Math.round(coverageRatio * 5 + Math.min(4, keywordHits) + (keywordHits > 0 ? 1 : 0))));
  const depth = Math.min(10, Math.max(1, Math.round(depthScore * 4.5)));
  const clarity = Math.min(10, Math.max(2, Math.round(4 + (words.length >= 15 ? 3 : 1) + (coverageRatio > 0.3 ? 2 : 0))));
  const communication = Math.min(10, Math.max(2, Math.round(6 - fillerPenalty + (words.length >= 20 ? 2 : 0))));

  return {
    rating,
    score: rating,
    overallScore: rating,
    scores: {
      relevance,
      technical_correctness,
      depth,
      clarity,
      communication,
    },
    feedback: `Covered ${coveredCount}/${totalExpected} core concepts with ${keywordHits} technical terms.`,
    rubricFeedback: {
      relevance: relevance >= 7 ? "Directly addressed core concepts of the question." : "Partially addressed prompt focus areas.",
      technical_correctness: technical_correctness >= 7 ? "Accurate technical reasoning and terminology." : "Some technical gaps in the explanation.",
      depth: depth >= 7 ? "Demonstrated solid technical depth with concrete concepts." : "Explanation remained somewhat high-level.",
      clarity: clarity >= 7 ? "Logical and structured response flow." : "Could be organized more concisely.",
      communication: communication >= 7 ? "Confident pacing with professional articulation." : "Consider minimizing filler words for greater impact.",
    },
    coveredPoints,
    missedPoints,
    strengths: coveredPoints.length > 0 ? coveredPoints.map(p => `Addressed: ${p}`) : ["Attempted technical response"],
    improvements: missedPoints.length > 0 ? missedPoints.map(p => `Could expand on: ${p}`) : ["Well-rounded response"],
    evaluatedBy: "dynamic-rubric",
  };
}

/**
 * Detects whether spoken/transcribed text is echoing the question stem or question text.
 * Used to prevent the AI interviewer's voice from self-transcribing into the candidate answer box.
 * 
 * @param {string} spokenText - Transcribed speech from STT or Whisper
 * @param {string} questionText - Current active interview question text
 * @returns {boolean} - True if spokenText matches question stem or echo fragments
 */
export function isQuestionEcho(spokenText, questionText) {
  if (!spokenText || !questionText) return false;
  const cleanSpoken = spokenText.toLowerCase().replace(/[^a-z0-9\s]/g, " ").trim();
  const cleanQuestion = questionText.toLowerCase().replace(/[^a-z0-9\s]/g, " ").trim();
  if (!cleanSpoken || !cleanQuestion) return false;

  const spokenWords = cleanSpoken.split(/\s+/).filter(Boolean);
  const questionWords = cleanQuestion.split(/\s+/).filter(Boolean);
  if (spokenWords.length === 0 || questionWords.length === 0) return false;

  // 1. Prefix match with question beginning (e.g., "Why is", "Why is vectorized", "Which failure indicator")
  if (spokenWords.length <= questionWords.length) {
    let prefixMatch = true;
    for (let i = 0; i < spokenWords.length; i++) {
      if (spokenWords[i] !== questionWords[i]) {
        prefixMatch = false;
        break;
      }
    }
    if (prefixMatch) return true;
  }

  // 2. Substring match for question start or multi-word phrase
  if (cleanQuestion.startsWith(cleanSpoken)) return true;
  if (spokenWords.length >= 2 && cleanQuestion.includes(cleanSpoken)) return true;

  // 3. Significant n-gram overlap: if 3 or more consecutive spoken words match question words verbatim
  if (spokenWords.length >= 3) {
    for (let i = 0; i <= spokenWords.length - 3; i++) {
      const trigram = spokenWords.slice(i, i + 3).join(" ");
      if (cleanQuestion.includes(trigram)) {
        const overlapCount = spokenWords.filter((w) => questionWords.includes(w)).length;
        if (overlapCount / spokenWords.length > 0.6) {
          return true;
        }
      }
    }
  }

  return false;
}

