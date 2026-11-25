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

const MULTI_COURSE_FALLBACK_POOL = {
  "system-design": [
    { topic: "Capacity Estimation & SLAs", question: "How do you estimate QPS, storage growth, and read-to-write bandwidth before designing a large-scale distributed backend?", context: "Expected focus areas: Peak vs average QPS; Payload sizes; Replication factor storage; Latency percentile budgets.", expectedPoints: ["Separate read and write QPS estimates with peak multipliers", "Calculate storage growth over 5 years including replication", "Define p95/p99 latency budgets per service hop"], keywords: ["qps", "capacity", "latency", "p99", "storage", "bandwidth"] },
    { topic: "Caching & Thundering Herd", question: "Explain cache-aside versus write-through caching, and how do you prevent a thundering herd cache stampede on hot expired keys?", context: "Expected focus areas: Stale data risk; Single-flight mutexes; Probabilistic early expiration; Jittered TTLs.", expectedPoints: ["Contrast cache-aside lazy loading with synchronous write-through", "Use request coalescing / distributed locks on cache miss", "Add TTL jitter to spread expirations"], keywords: ["cache-aside", "write-through", "thundering herd", "ttl", "redis"] },
    { topic: "Database Sharding & Consistent Hashing", question: "When horizontal sharding becomes necessary, how does consistent hashing minimize resharding churn and how do you handle hotspot keys?", context: "Expected focus areas: Virtual nodes; Shard key cardinality; Cross-shard scatter-gather queries; Hot key salting.", expectedPoints: ["Limit data movement to 1/N via consistent hash ring and vnodes", "Choose high-cardinality partition keys matching access patterns", "Split celebrity/hot keys with salted prefixes"], keywords: ["sharding", "consistent hashing", "vnodes", "hotkey", "partition"] },
    { topic: "Distributed Consensus & Quorums", question: "Why can split-brain occur during a network partition, and how do Raft terms and quorum intersection prevent stale leaders from committing writes?", context: "Expected focus areas: CAP theorem; Leader lease vs heartbeat; W + R > N quorum rule; Term fencing.", expectedPoints: ["Explain majority quorum intersection preventing two simultaneous leaders", "Describe monotonic term numbers fencing out old leaders", "Contrast CP consensus with AP eventual consistency"], keywords: ["raft", "quorum", "split-brain", "consensus", "cap"] },
    { topic: "Message Queues & Backpressure", question: "Compare RabbitMQ work queues with Kafka partitioned logs, and explain how consumer backpressure prevents out-of-memory crashes during traffic spikes.", context: "Expected focus areas: Partition ordering vs routing; Consumer offset retention; Bounded queues; Dead-letter queues.", expectedPoints: ["Contrast Kafka durable replayable log with RabbitMQ transient message broker", "Apply bounded buffers and adaptive consumer poll rates", "Isolate poison pills via Dead-Letter Queues"], keywords: ["kafka", "rabbitmq", "backpressure", "dlq", "partition"] },
    { topic: "Distributed Transactions & Sagas", question: "Why is Two-Phase Commit avoided across independent microservices, and how do Saga orchestrators handle partial workflow failures?", context: "Expected focus areas: Coordinator blocking locks; Compensating transactions; Idempotent retries; Outbox pattern.", expectedPoints: ["Explain 2PC holding locks across network failures", "Design idempotent compensating actions for rollback steps", "Pair transactional outbox with event publication"], keywords: ["saga", "2pc", "compensating", "outbox", "idempotency"] },
    { topic: "Multi-Region Active-Active Resilience", question: "How do you architect an active-active multi-region deployment while managing cross-region write latency and conflicting concurrent updates?", context: "Expected focus areas: Geo-DNS routing; Conflict-free replicated data types or regional affinity; RPO vs RTO.", expectedPoints: ["Route users to nearest healthy region via latency-based DNS/Anycast", "Assign user home-region ownership or use CRDTs/LWW carefully", "Verify failover via chaos drills measuring actual RTO/RPO"], keywords: ["multi-region", "active-active", "failover", "rpo", "rto"] },
  ],
  "operating-systems": [
    { topic: "Kernel Mode vs User Mode", question: "Why do CPUs enforce hardware privilege rings separating user space from kernel space, and what happens mechanically during a system call trap?", context: "Expected focus areas: Ring 0 vs Ring 3; Syscall interrupt/SYSCALL instruction; Register & stack switching; Context switch overhead.", expectedPoints: ["Protect hardware registers and page tables from unprivileged code", "Explain trap table vectoring into kernel stack and restoring user context", "Discuss cache/TLB flush implications"], keywords: ["syscall", "privilege ring", "kernel", "trap", "context switch"] },
    { topic: "CPU Scheduling & CFS", question: "How does Linux's Completely Fair Scheduler balance throughput and interactive responsiveness compared to fixed multi-level feedback queues?", context: "Expected focus areas: Virtual runtime (vruntime); Red-black tree ordering; Nice weights; Starvation prevention.", expectedPoints: ["Track weighted virtual runtime per runnable task", "Pick minimum vruntime task from red-black tree in O(log N)", "Avoid starvation of low-priority or I/O-bound tasks"], keywords: ["cfs", "vruntime", "scheduler", "starvation", "throughput"] },
    { topic: "Synchronization & Deadlocks", question: "State the four Coffman conditions required for a deadlock, and explain how lock ordering prevents deadlocks in multi-threaded C/Rust code.", context: "Expected focus areas: Mutual exclusion, hold and wait, no preemption, circular wait; Global lock hierarchy; Priority inversion.", expectedPoints: ["List all four Coffman conditions cleanly", "Break circular wait by enforcing deterministic global lock acquisition order", "Contrast mutexes vs spinlocks vs priority inheritance"], keywords: ["deadlock", "coffman", "mutex", "spinlock", "priority inversion"] },
    { topic: "Virtual Memory, Paging & TLB", question: "Walk through how the MMU translates a 64-bit virtual address into a physical frame using multi-level page tables and the TLB.", context: "Expected focus areas: Page offset invariance; 4-level radix page walk; TLB hit vs miss vs page fault; Copy-on-Write fork.", expectedPoints: ["Show lower page offset bits stay unchanged during translation", "Explain hardware TLB caching recent page translations", "Distinguish TLB miss from OS page fault trap"], keywords: ["virtual memory", "tlb", "page table", "page fault", "mmu"] },
    { topic: "Filesystems, Inodes & Journaling", question: "How do Unix inodes separate file metadata from directory names, and how does write-ahead journaling protect filesystem consistency on sudden power loss?", context: "Expected focus areas: Hard links vs symlinks; Inode block pointers; Write-ahead journal commit; fsck recovery.", expectedPoints: ["Directory entries map filenames to inode numbers containing permissions/blocks", "Journal logs metadata/data intent before in-place disk writes", "Replay committed journal transactions rapidly after crash"], keywords: ["inode", "journaling", "filesystem", "crash consistency", "vfs"] },
    { topic: "IPC & Zero-Copy I/O", question: "Compare POSIX pipes, UNIX domain sockets, and shared memory for Inter-Process Communication, and explain how sendfile/mmap enable zero-copy transfer.", context: "Expected focus areas: Kernel buffer copies; Synchronization primitives; mmap page cache sharing; Throughput trade-offs.", expectedPoints: ["Shared memory skips kernel copy overhead via shared physical pages + semaphores", "Pipes/sockets copy through kernel space cleanly with stream framing", "sendfile/DMA avoids user-space buffer roundtrips"], keywords: ["ipc", "shared memory", "mmap", "zero-copy", "pipes"] },
    { topic: "Containers, Namespaces & cgroups", question: "At the Linux kernel level, how do namespaces and cgroups isolate containers without spinning up a full guest OS hypervisor?", context: "Expected focus areas: PID/net/mnt/user namespaces; cgroup CPU/memory throttling & OOM; OverlayFS copy-on-write layers.", expectedPoints: ["Namespaces virtualize visibility of PIDs, network, and mounts", "cgroups enforce CPU/memory/IO resource quotas", "Shared host kernel makes containers lightweight vs hypervisor VMs"], keywords: ["namespaces", "cgroups", "containers", "overlayfs", "kernel"] },
  ],
  "computer-networks": [
    { topic: "OSI & TCP/IP Encapsulation", question: "Trace packet encapsulation and de-encapsulation across the TCP/IP layers when a browser sends an HTTPS request over Ethernet and Wi-Fi.", context: "Expected focus areas: Application payload -> TCP segment -> IP packet -> Ethernet frame; NAT/MAC rewriting per hop.", expectedPoints: ["Describe headers added at each layer downward and stripped upward", "Explain MAC addresses changing per Layer 2 hop while end-to-end IP remains intact (unless NAT)"], keywords: ["osi", "tcp/ip", "encapsulation", "mac", "packet", "frame"] },
    { topic: "IPv4 Subnetting & BGP Routing", question: "How does longest prefix match work in router forwarding tables, and how do OSPF intra-domain routing and BGP inter-domain routing differ?", context: "Expected focus areas: CIDR masks; Autonomous Systems (AS); Distance-vector path attributes vs link-state Dijkstra.", expectedPoints: ["Router forwards using the most specific matching CIDR mask", "OSPF optimizes shortest link-state path inside an AS; BGP enforces AS policy across networks"], keywords: ["cidr", "longest prefix match", "bgp", "ospf", "routing"] },
    { topic: "TCP Flow & Congestion Control", question: "Differentiate TCP flow control (receive window) from congestion control (cwnd, slow start, AIMD), and explain what triggers fast retransmit.", context: "Expected focus areas: rwnd vs cwnd; 3 duplicate ACKs; Cubic/BBR congestion avoidance; Packet loss signals.", expectedPoints: ["Flow control protects slow receivers via advertised window; congestion control protects network links", "Three duplicate ACKs trigger fast retransmit before RTO timer expires"], keywords: ["tcp", "cwnd", "rwnd", "slow start", "congestion", "retransmit"] },
    { topic: "QUIC & HTTP/3", question: "How does HTTP/3 over QUIC solve TCP head-of-line blocking at the transport layer, and what challenges do UDP middleboxes pose?", context: "Expected focus areas: Independent multiplexed UDP streams; Integrated TLS 1.3 handshake; Connection migration; Firewall UDP throttling.", expectedPoints: ["Packet loss stalls only the affected QUIC stream rather than the whole connection", "Connection IDs survive Wi-Fi-to-cellular IP changes cleanly"], keywords: ["http3", "quic", "head-of-line blocking", "udp", "tls"] },
    { topic: "DNS & Anycast Edge Routing", question: "Walk through recursive versus iterative DNS resolution, and explain how Anycast BGP lets global CDNs serve low-latency traffic on a single IP.", context: "Expected focus areas: Root/TLD/Authoritative servers; TTL caching; Anycast BGP nearest PoP selection.", expectedPoints: ["Stub resolver asks recursive resolver which walks root -> TLD -> authoritative iteratively", "Anycast announces same IP prefix from global PoPs so BGP routes to closest edge"], keywords: ["dns", "anycast", "cdn", "ttl", "recursive"] },
    { topic: "Firewalls, NAT & Stateful Inspection", question: "How does a stateful firewall differ from stateless packet filtering, and how does Carrier-Grade NAT preserve IPv4 address pools?", context: "Expected focus areas: 5-tuple connection state table; Port address translation (PAT); Inbound NAT traversal.", expectedPoints: ["Stateful firewalls track established TCP/UDP flows automatically", "PAT multiplexes thousands of private hosts onto shared public IPs using source ports"], keywords: ["firewall", "nat", "stateful", "pat", "5-tuple"] },
    { topic: "TLS 1.3 & Packet Troubleshooting", question: "How does TLS 1.3 cut handshake round trips to 1-RTT (and 0-RTT), and how do you diagnose a silent TCP SYN drop using tcpdump/Wireshark?", context: "Expected focus areas: Ephemeral ECDHE key share in ClientHello; Forward secrecy; SYN retransmissions vs RST packets.", expectedPoints: ["ClientHello pre-sends Diffie-Hellman key share eliminating extra RTT", "Repeated unanswered SYNs signal firewall silent drop whereas RST indicates closed port"], keywords: ["tls 1.3", "handshake", "wireshark", "tcpdump", "syn", "ecdhe"] },
  ],
  "cybersecurity": [
    { topic: "STRIDE Threat Modeling", question: "Apply the STRIDE framework to a web authentication API—what concrete threats map to Spoofing, Tampering, and Elevation of Privilege?", context: "Expected focus areas: Credential stuffing/JWT forgery; Request integrity/HMAC; Broken access control (IDOR).", expectedPoints: ["Map each STRIDE letter to concrete technical threat vectors", "Propose layered mitigations like MFA, TLS, integrity checks, and server-side RBAC"], keywords: ["stride", "threat modeling", "spoofing", "tampering", "privilege"] },
    { topic: "OWASP Injection & XSS", question: "Why do parameterized queries defeat SQL injection completely while input blocklists fail, and how does CSP mitigate stored XSS?", context: "Expected focus areas: Code vs data separation in AST; Context-aware output encoding; HttpOnly cookies & script-src nonces.", expectedPoints: ["Prepared statements bind parameters strictly as literal values", "Combine strict contextual HTML encoding with CSP nonces and HttpOnly cookies"], keywords: ["sqli", "parameterized", "xss", "csp", "owasp"] },
    { topic: "OAuth 2.0, OIDC & JWT Security", question: "Why should browser SPAs use Authorization Code Flow with PKCE instead of Implicit Flow, and what critical checks prevent JWT signature bypass?", context: "Expected focus areas: Code verifier/challenge; Avoiding tokens in URL fragments; Pinning allowed alg header & verifying iss/aud/exp.", expectedPoints: ["PKCE prevents authorization code interception without exposing client secrets", "Enforce explicit algorithm allowlist rejecting alg=none or RS256-to-HS256 confusion"], keywords: ["oauth", "pkce", "oidc", "jwt", "token"] },
    { topic: "Cryptography, PKI & TLS", question: "Contrast symmetric AES-GCM encryption with asymmetric ECDHE/RSA key exchange, and explain why certificate pinning and revocation matter.", context: "Expected focus areas: Authenticated encryption (AEAD); Perfect forward secrecy; X.509 trust chains; OCSP stapling.", expectedPoints: ["Asymmetric crypto establishes shared ephemeral session key; symmetric AEAD encrypts bulk payload", "Verify CA signatures, SAN hostnames, and revocation status"], keywords: ["aes-gcm", "pkI", "x509", "forward secrecy", "tls"] },
    { topic: "Broken Access Control & SSRF", question: "How can Server-Side Request Forgery (SSRF) expose internal cloud metadata endpoints (169.254.169.254), and what defenses stop DNS rebinding?", context: "Expected focus areas: IMDSv2 session tokens; Egress IP allowlisting after DNS resolution; Disabling HTTP redirects.", expectedPoints: ["Resolve domain once, block RFC1918/link-local IPs, and fetch using pinned IP", "Enforce IMDSv2 header tokens on cloud compute instances"], keywords: ["ssrf", "idor", "imds", "access control", "dns rebinding"] },
    { topic: "OS Hardening & Least Privilege", question: "How do Linux capabilities, seccomp-bpf, and read-only root filesystems minimize blast radius if a containerized web service gets compromised?", context: "Expected focus areas: Dropping root UID/CAP_NET_RAW; Blocking unnecessary syscalls; Immutable runtime containers.", expectedPoints: ["Run non-root with dropped capabilities and seccomp syscall allowlists", "Mount rootfs read-only so attackers cannot persist payloads easily"], keywords: ["seccomp", "capabilities", "least privilege", "hardening", "container"] },
    { topic: "SOC SIEM & Incident Response", question: "Walk through the incident response lifecycle from SIEM anomaly detection to containment, forensic preservation, eradication, and post-mortem.", context: "Expected focus areas: Volatile memory/log preservation; Isolating compromised hosts without alerting attackers prematurely; Root cause remediation.", expectedPoints: ["Preserve forensic snapshots and immutable logs before wiping instances", "Contain lateral movement via credential rotation and network segmentation"], keywords: ["incident response", "siem", "forensics", "containment", "soc"] },
  ],
  "devops": [
    { topic: "Linux Signals & Process Troubleshooting", question: "What is the difference between SIGTERM and SIGKILL in Linux, and how should containerized services handle SIGTERM for zero-downtime deploys?", context: "Expected focus areas: Graceful connection draining; PID 1 zombie reaping; terminationGracePeriodSeconds.", expectedPoints: ["SIGTERM allows apps to close DB pools and drain HTTP requests cleanly", "SIGKILL terminates immediately at kernel level without cleanup hooks"], keywords: ["sigterm", "sigkill", "linux", "pid 1", "graceful shutdown"] },
    { topic: "Docker Multi-Stage Builds & Layer Caching", question: "How do multi-stage Docker builds shrink production images and improve security posture, and how should Dockerfile instructions be ordered for cache speed?", context: "Expected focus areas: Stripping build toolchains/compilers; Distroless/non-root runtime; Dependency manifest layer before source copy.", expectedPoints: ["Copy package manifests and install dependencies before copying mutable source code", "Emit minimal runtime image without compilers/dev secrets"], keywords: ["docker", "multi-stage", "layer cache", "distroless", "image"] },
    { topic: "Kubernetes Scheduling & Pod Debugging", question: "A Kubernetes Pod is stuck in Pending vs CrashLoopBackOff—walk through the exact kubectl diagnostics and root causes for each state.", context: "Expected focus areas: Insufficient CPU/memory, taints/tolerations, PVC binding vs missing Secrets, failing liveness probes, OOMKilled (137).", expectedPoints: ["Inspect kubectl describe pod Events for scheduler placement failures", "Check container logs/previous exit codes (137 OOM, missing env/secrets) on CrashLoopBackOff"], keywords: ["kubernetes", "crashloopbackoff", "pending", "oomkilled", "kubectl"] },
    { topic: "Terraform State & Drift Management", question: "Why does Terraform store infrastructure state remotely with locking (e.g., S3 + DynamoDB), and how do you safely resolve out-of-band console drift?", context: "Expected focus areas: Concurrent apply corruption; Sensitive plaintext secrets in state; terraform plan / import / refresh.", expectedPoints: ["Remote locking prevents simultaneous state corruption across CI runners", "Use terraform plan/import to reconcile manual console drift cleanly"], keywords: ["terraform", "state locking", "iac", "drift", "plan"] },
    { topic: "CI/CD Blue-Green vs Canary Rollouts", question: "Contrast Blue-Green and Canary deployment strategies in Kubernetes/GitOps across rollback speed, database schema compatibility, and blast radius.", context: "Expected focus areas: Traffic shifting via Ingress/Service Mesh; Expand-and-contract DB migrations; Automated error-rate rollback.", expectedPoints: ["Blue-green swaps full traffic fast at 2x compute; canary validates small % against SLIs first", "Ensure forward/backward-compatible DB migrations across active versions"], keywords: ["canary", "blue-green", "cicd", "gitops", "argocd", "rollback"] },
    { topic: "SRE SLIs, SLOs & Error Budgets", question: "How do SLIs, SLOs, and Error Budgets align product velocity with production reliability compared to chasing arbitrary 100% uptime?", context: "Expected focus areas: Availability/latency percentiles; Error budget burn alerts; Freezing risky releases when budget is exhausted.", expectedPoints: ["SLI measures user-facing behavior; SLO sets target reliability leaving room for planned innovation", "Exhausted error budgets trigger reliability sprints over feature launches"], keywords: ["sli", "slo", "error budget", "sre", "observability"] },
    { topic: "DevSecOps Supply Chain Security", question: "How do you harden a CI/CD pipeline against supply-chain attacks covering dependencies, container signing, SBOMs, and short-lived OIDC cloud auth?", context: "Expected focus areas: Eliminating static cloud keys with OIDC; Vulnerability scanning (Trivy/Snyk); Cosign image verification.", expectedPoints: ["Use OIDC federation instead of long-lived CI secrets", "Sign immutable digests and gate on high/critical CVEs and SBOM provenance"], keywords: ["devsecops", "oidc", "sbom", "supply chain", "cosign"] },
  ],
  "cloud": [
    { topic: "Cloud VPCs, Subnets & NAT Gateways", question: "What distinguishes a public cloud subnet from a private subnet, and how do VPC Endpoints eliminate NAT Gateway charges for internal object storage traffic?", context: "Expected focus areas: Route table IGW vs NAT; PrivateLink backbone traffic; Security Groups vs NACLs.", expectedPoints: ["Public subnets route 0.0.0.0/0 to Internet Gateway while private subnets stay unreachable inbound", "Gateway/Interface VPC Endpoints keep S3/API traffic inside cloud private network"], keywords: ["vpc", "subnet", "nat", "vpc endpoint", "privatelink"] },
    { topic: "Compute Models: VMs vs Containers vs Serverless", question: "When choosing between managed Kubernetes containers and Serverless functions (Lambda/Workers), what workload traits decide the better fit?", context: "Expected focus areas: Cold start latency; Steady vs spiky load cost; Max execution timeout; DB connection pooling.", expectedPoints: ["Serverless excels at spiky short-lived event workloads; containers win on steady load and long connections", "Mitigate serverless DB exhaustion via connection proxies"], keywords: ["serverless", "containers", "cold start", "ec2", "compute"] },
    { topic: "IAM Least Privilege & Temporary Credentials", question: "Why should cloud workloads assume short-lived IAM Roles via STS/Workload Identity instead of embedding static access keys?", context: "Expected focus areas: Blast radius of leaked keys; Automatic short-lived token rotation; Resource/condition policies.", expectedPoints: ["Instance/pod roles vend short-lived auto-rotated STS tokens without secrets in env files", "Scope IAM permissions strictly by action, resource ARN, and condition tags"], keywords: ["iam", "sts", "least privilege", "role", "security"] },
    { topic: "Cloud Storage Tiers & Object Consistency", question: "Compare cloud block, shared file, and object storage, and explain how lifecycle policies and Object Lock defend backups against ransomware.", context: "Expected focus areas: Latency/IOPS vs 11-nines durability; Tiering retrieval fees; Immutable WORM retention.", expectedPoints: ["Use block for low-latency DB volumes, EFS for shared POSIX, S3 for durable object storage", "Enable versioning + WORM Object Lock to block backup deletion"], keywords: ["s3", "ebs", "efs", "object lock", "storage"] },
    { topic: "Managed Cloud Databases & Failover", question: "Differentiate Multi-AZ synchronous standby instances from asynchronous read replicas, and explain how hot partitions bottleneck managed NoSQL.", context: "Expected focus areas: HA zero-RPO failover vs read scaling; Partition key skew; Point-in-time recovery.", expectedPoints: ["Multi-AZ standby protects uptime via synchronous replication; read replicas offload read traffic", "Avoid low-cardinality NoSQL partition keys via write sharding"], keywords: ["multi-az", "read replica", "nosql", "hot partition", "rds"] },
    { topic: "Cloud FinOps & Cost Optimization", question: "How do Spot/Preemptible instances, Graviton/ARM compute, and Savings Plans combine to cut cloud bills without degrading reliability SLAs?", context: "Expected focus areas: Blending On-Demand baseline + Spot burst; Auto-scaling rightsizing; Detecting zombie volumes/egress.", expectedPoints: ["Commit Reserved/Savings Plans for steady baseline and Spot for fault-tolerant stateless/batch tasks", "Eliminate unattached volumes, cross-AZ traffic waste, and idle NAT charges"], keywords: ["finops", "spot", "savings plans", "cost", "rightsizing"] },
    { topic: "Multi-Region Disaster Recovery (RTO/RPO)", question: "Compare Backup & Restore, Pilot Light, Warm Standby, and Active-Active cloud DR topologies across RTO, RPO, and steady-state cost.", context: "Expected focus areas: DNS failover propagation; Async replication RPO gap; GameDay failover testing.", expectedPoints: ["Map each DR tier along cost-vs-recovery-speed curve", "Verify actual RTO/RPO periodically via controlled regional failover drills"], keywords: ["disaster recovery", "rto", "rpo", "pilot light", "active-active"] },
  ],
  "machine-learning": [
    { topic: "Bias-Variance Tradeoff & Regularization", question: "Explain the bias-variance tradeoff mathematically and practically, and contrast L1 (Lasso) versus L2 (Ridge) regularization behavior on correlated features.", context: "Expected focus areas: Underfitting vs overfitting; L1 sparse feature zeroing vs L2 weight shrinkage; Cross-validation lambda tuning.", expectedPoints: ["Decompose prediction error into bias squared, variance, and irreducible noise", "L1 diamond geometry produces sparse weights; L2 shrinks correlated coefficients smoothly"], keywords: ["bias-variance", "l1", "l2", "ridge", "lasso", "regularization"] },
    { topic: "Data Leakage & Cross-Validation", question: "What is target/preprocessing data leakage in tabular ML pipelines, and how do Scikit-learn Pipelines with Stratified K-Fold prevent it?", context: "Expected focus areas: Fitting scalers/imputers only on training folds; Temporal split for time series; GroupKFold for grouped entities.", expectedPoints: ["Never fit normalization, PCA, or target encoders on the combined train+validation set", "Wrap preprocessing inside Pipeline inside CV loop; respect time ordering on temporal data"], keywords: ["data leakage", "cross-validation", "pipeline", "stratified", "time series"] },
    { topic: "Gradient Boosting (XGBoost/LightGBM) vs Random Forest", question: "Contrast Bagging (Random Forests) with Gradient Boosting (XGBoost/LightGBM), explaining how each targets variance vs bias.", context: "Expected focus areas: Parallel independent trees vs sequential residual fitting; Shrinkage/learning rate; Early stopping.", expectedPoints: ["Random Forests average decorrelated high-variance trees in parallel", "Gradient boosting trains shallow trees sequentially on negative loss gradients"], keywords: ["random forest", "xgboost", "lightgbm", "bagging", "boosting"] },
    { topic: "Class Imbalance & Evaluation Metrics", question: "Why is Accuracy misleading on a 1% fraud dataset, and how do you choose between ROC-AUC, PR-AUC, F1, and calibrated decision thresholds?", context: "Expected focus areas: True negatives dominating ROC vs Precision-Recall focus on minority class; Cost-sensitive thresholding.", expectedPoints: ["PR-AUC highlights false positive rate in skewed minority classes better than ROC-AUC", "Calibrate probabilities and pick threshold based on business precision/recall cost"], keywords: ["roc-auc", "pr-auc", "imbalanced", "f1", "precision", "recall"] },
    { topic: "Feature Engineering & Categorical Encoding", question: "Compare one-hot encoding, ordinal encoding, and out-of-fold target encoding for high-cardinality categorical variables in tree vs linear models.", context: "Expected focus areas: Dimensionality explosion; Arbitrary ordering bias; Out-of-fold smoothing against overfitting.", expectedPoints: ["One-hot works for low cardinality linear models but fragments deep tree splits", "Use smoothed out-of-fold target encoding for high cardinality without leaking target"], keywords: ["feature engineering", "encoding", "one-hot", "target encoding", "cardinality"] },
    { topic: "Dimensionality Reduction & Clustering", question: "Compare PCA with t-SNE/UMAP, and explain why K-Means fails on non-convex clusters or unscaled features.", context: "Expected focus areas: Linear orthogonal variance projection vs non-linear local neighbor embedding; Euclidean distance scaling sensitivity.", expectedPoints: ["PCA preserves global linear variance and allows transforming new test points cleanly", "Standardize feature scales before distance-based K-Means/SVM/kNN"], keywords: ["pca", "kmeans", "clustering", "scaling", "dimensionality"] },
    { topic: "Explainable AI (SHAP) & Production Drift", question: "How do SHAP values explain individual model predictions reliably, and how do you distinguish covariate drift from concept drift in production?", context: "Expected focus areas: Shapley additive game-theoretic attributions; Input feature distribution shift (PSI/KS) vs P(Y|X) label drift.", expectedPoints: ["SHAP computes consistent fair marginal feature contributions per prediction", "Monitor feature distributions for covariate drift and ground-truth labels for concept drift"], keywords: ["shap", "explainability", "covariate drift", "concept drift", "monitoring"] },
  ],
  "data-engineering": [
    { topic: "OLTP vs OLAP & Columnar Storage", question: "Why do analytical warehouses use columnar formats like Apache Parquet instead of row-oriented OLTP storage, and how does predicate pushdown speed up scans?", context: "Expected focus areas: Column pruning; Dictionary/RLE compression; Min-max row-group statistics; Vectorized execution.", expectedPoints: ["Columnar files read only queried columns and compress homogeneous data tightly", "Parquet row-group min/max metadata skips irrelevant blocks cleanly"], keywords: ["oltp", "olap", "parquet", "columnar", "predicate pushdown"] },
    { topic: "Dimensional Modeling & Slowly Changing Dimensions", question: "Contrast Star Schema vs Snowflake Schema, and explain how SCD Type 2 preserves historical dimension state in analytical fact joins.", context: "Expected focus areas: Denormalized join speed; Surrogate keys; valid_from / valid_to / is_current columns.", expectedPoints: ["Star schema minimizes analytical join hops at small storage cost", "SCD Type 2 adds new effective-dated rows with surrogate keys for point-in-time accuracy"], keywords: ["star schema", "scd type 2", "dimensional modeling", "surrogate key", "warehouse"] },
    { topic: "Apache Spark Shuffles & Data Skew", question: "What causes an expensive Shuffle stage in Apache Spark, and how do Broadcast Joins and key salting resolve severe partition skew?", context: "Expected focus areas: Wide vs narrow transformations; Network/disk spill; Straggler tasks; AQE skew join optimization.", expectedPoints: ["Wide transformations (groupBy/join) repartition data across executors over network", "Broadcast small dimension tables or salt skewed keys to balance task durations"], keywords: ["spark", "shuffle", "skew", "broadcast join", "aqe"] },
    { topic: "CDC Ingestion & Idempotent Backfills", question: "Compare query-based incremental polling against log-based Change Data Capture (Debezium), and explain how to design idempotent backfill pipelines.", context: "Expected focus areas: Capturing hard deletes & minimal source DB load via WAL; Date-partition overwrite / MERGE idempotency.", expectedPoints: ["Log-based CDC tails DB WAL capturing inserts/updates/deletes with low source load", "Make batch backfills partition-isolated with atomic overwrite or MERGE"], keywords: ["cdc", "debezium", "idempotency", "backfill", "wal"] },
    { topic: "Apache Kafka Partitioning & Delivery Guarantees", question: "How do Kafka partition keys, ISRs, and producer acks=all prevent data loss, and how do consumer groups balance parallelism vs ordering?", context: "Expected focus areas: Append-only partition ordering; min.insync.replicas; Consumer lag & rebalance behavior.", expectedPoints: ["Ordering holds strictly within a single partition key", "acks=all + min.insync.replicas guarantees replicated durability before ACK"], keywords: ["kafka", "partition", "isr", "acks", "consumer group"] },
    { topic: "Data Lakehouses (Apache Iceberg & Delta Lake)", question: "What limitations of Hive-style data lakes do Apache Iceberg and Delta Lake solve via ACID transactions, snapshot isolation, and hidden partitioning?", context: "Expected focus areas: Atomic metadata manifest commits; Time travel; Compaction & vacuuming small files.", expectedPoints: ["Metadata transaction logs allow atomic concurrent writes and snapshot reads", "Hidden partitioning avoids user query filter pitfalls and enables partition evolution"], keywords: ["iceberg", "delta lake", "lakehouse", "acid", "time travel"] },
    { topic: "Stream Processing Watermarks & Late Data", question: "Explain event time versus processing time in Apache Flink or Spark Streaming, and how watermarks handle out-of-order late events.", context: "Expected focus areas: Watermark advancement heuristic; Window triggers; Allowed lateness and side-output routing.", expectedPoints: ["Event time reflects real occurrence regardless of network/queue delays", "Watermarks bound lateness wait before emitting windows, routing very late records to side outputs"], keywords: ["event time", "watermark", "flink", "streaming", "late data"] },
  ],
  "blockchain": [
    { topic: "Cryptographic Hashing, Merkle Trees & Signatures", question: "How do Merkle trees allow lightweight clients to verify transaction inclusion without downloading an entire block, and what guarantees does ECDSA/EdDSA provide?", context: "Expected focus areas: O(log N) Merkle proof path; Collision/preimage resistance; Public key signature verification & non-repudiation.", expectedPoints: ["Verify inclusion using only sibling hashes along log2(N) tree branch", "Digital signatures prove private-key authorization without exposing the secret key"], keywords: ["merkle tree", "sha256", "ecdsa", "signature", "inclusion proof"] },
    { topic: "Proof of Work vs Proof of Stake Finality", question: "Contrast probabilistic finality in Bitcoin Proof of Work with economic finality and validator slashing in Ethereum Proof of Stake.", context: "Expected focus areas: Longest chain / chain reorgs; Casper FFG checkpoints; Slashing equivocating validators; 33%/51% thresholds.", expectedPoints: ["PoW offers probabilistic finality deepening with block confirmations", "PoS finalizes epochs via 2/3 stake attestations and slashes provable double-signing"], keywords: ["pow", "pos", "finality", "slashing", "consensus"] },
    { topic: "EVM Execution, Gas Metering & Storage", question: "Why does writing to EVM persistent storage cost far more gas than memory or calldata, and how does EIP-1559 structure base fees vs priority tips?", context: "Expected focus areas: Global state Merkle Trie updates across all nodes; Burning base fee; Dynamic congestion pricing.", expectedPoints: ["SSTORE permanently expands global node state disk/trie size vs ephemeral memory", "EIP-1559 burns elastic baseFee targeting 50% block fullness while validators get tips"], keywords: ["evm", "gas", "sstore", "eip-1559", "storage"] },
    { topic: "Smart Contract Security & Reentrancy", question: "Walk through a classic reentrancy exploit step-by-step, and explain why Checks-Effects-Interactions and ReentrancyGuard stop it cleanly.", context: "Expected focus areas: Malicious fallback calling withdraw before balance decrement; State mutation first; Read-only reentrancy.", expectedPoints: ["Update internal balances before making external ETH/token calls", "Add mutex ReentrancyGuard and beware cross-function/read-only view reentrancy"], keywords: ["reentrancy", "checks-effects-interactions", "solidity", "audit", "security"] },
    { topic: "ERC Token Standards (ERC-20, 721, 1155)", question: "Why does the ERC-20 approve + transferFrom pattern exist for DeFi protocols, and how do permit signatures (EIP-2612) improve UX and gas?", context: "Expected focus areas: Smart contracts unaware of direct token transfers; Allowance race condition; Off-chain signed approvals.", expectedPoints: ["Spender contracts pull tokens via transferFrom inside atomic protocol execution", "EIP-2612 permit bundles approval signature into a single transaction"], keywords: ["erc-20", "erc-721", "approve", "transferfrom", "eip-2612"] },
    { topic: "DeFi Mechanics, Oracles & MEV", question: "How do Automated Market Makers (x*y=k) price assets without order books, and why are spot AMM reserves dangerous as on-chain price oracles?", context: "Expected focus areas: Constant product curve & impermanent loss; Flash-loan spot manipulation; TWAP & Chainlink decentralized feeds.", expectedPoints: ["Flash loans can manipulate single-block AMM reserves within one transaction", "Use decentralized oracle networks (Chainlink) or multi-block TWAPs"], keywords: ["amm", "oracle", "chainlink", "flash loan", "mev", "twap"] },
    { topic: "Layer 2 Scaling: Optimistic vs ZK Rollups", question: "Compare Optimistic Rollups with ZK-Rollups across fraud proofs vs validity proofs, withdrawal finality delays, and calldata/blob (EIP-4844) data availability.", context: "Expected focus areas: 7-day challenge window vs instant cryptographic SNARK/STARK verification; L1 blob data posting.", expectedPoints: ["Optimistic assumes validity unless challenged in dispute window; ZK proves validity mathematically on L1", "Both inherit L1 security by posting compressed transaction data/blobs to L1"], keywords: ["rollup", "optimistic", "zk", "validity proof", "eip-4844", "layer 2"] },
  ],
};

function cryptoShuffleLocal(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

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
  if (courseId !== "ai-engineering" && MULTI_COURSE_FALLBACK_POOL[courseId]) {
    const pool = MULTI_COURSE_FALLBACK_POOL[courseId];
    const concept = pool[index % pool.length] || pool[0];
    const qId = `DYN-${courseId}-${moduleId || "all"}-${Date.now().toString(36)}-${index + 1}`;
    return {
      id: qId,
      courseId,
      moduleId: moduleId || "all",
      moduleTitle: concept.topic,
      questionNumber: index + 1,
      questionType: concept.topic.toUpperCase(),
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
      timeLimitSec: 45,
      active: true,
    };
  }

  const normMod = normalizeModuleId(moduleId, courseId);
  const modKey = (normMod && normMod !== "all") ? normMod : `M${String((index % 24) + 1).padStart(2, "0")}`;
  const modData = MODULE_TOPIC_REGISTRY[modKey] || MODULE_TOPIC_REGISTRY["M01"];

  const conceptIdx = index % modData.concepts.length;
  const concept = modData.concepts[conceptIdx] || modData.concepts[0];

  const qId = `DYN-${modKey}-${Date.now().toString(36)}-${index + 1}`;

  return {
    id: qId,
    courseId: "ai-engineering",
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
 * Dynamic interview question allocator (multi-course, randomized, deduplicated offline fallback)
 */
export function allocateInterviewQuestions({
  count = 7,
  courseId = "ai-engineering",
  moduleId = "all",
  allowReuse = false,
} = {}) {
  const normMod = normalizeModuleId(moduleId, courseId);
  const previouslyAllocated = allowReuse ? new Set() : new Set(getAllocatedQuestionIds());
  const questions = [];

  if (courseId !== "ai-engineering" && MULTI_COURSE_FALLBACK_POOL[courseId]) {
    const pool = MULTI_COURSE_FALLBACK_POOL[courseId];
    const unseen = cryptoShuffleLocal(pool.filter((c) => !previouslyAllocated.has(c.topic)));
    const seen = cryptoShuffleLocal(pool.filter((c) => previouslyAllocated.has(c.topic)));
    const ordered = [...unseen, ...seen];
    for (let i = 0; i < count; i++) {
      const item = ordered[i % ordered.length];
      questions.push({
        id: `DYN-${courseId}-${Date.now().toString(36)}-${i + 1}`,
        courseId,
        moduleId: normMod || "all",
        moduleTitle: item.topic,
        questionNumber: i + 1,
        questionType: item.topic.toUpperCase(),
        topic: item.topic,
        subtopic: item.topic,
        difficulty: i < 2 ? "easy" : i < 5 ? "medium" : "hard",
        type: "concept",
        question: item.question,
        questionText: item.question,
        context: item.context,
        expectedPoints: item.expectedPoints,
        expected_points: item.expectedPoints,
        keywords: item.keywords,
        timeLimitSec: 45,
        active: true,
      });
    }
    markQuestionsAllocated(questions.map((q) => q.topic));
    return questions;
  }

  if (!normMod || normMod === "all") {
    const allKeys = cryptoShuffleLocal(Object.keys(MODULE_TOPIC_REGISTRY));
    const unseenKeys = allKeys.filter((k) => !previouslyAllocated.has(k));
    const seenKeys = allKeys.filter((k) => previouslyAllocated.has(k));
    const orderedKeys = [...unseenKeys, ...seenKeys];
    for (let i = 0; i < count; i++) {
      const targetMod = orderedKeys[i % orderedKeys.length];
      questions.push(generateDynamicQuestion({
        courseId,
        moduleId: targetMod,
        index: i,
        difficulty: i < 2 ? "easy" : i < 5 ? "medium" : "hard",
      }));
    }
    markQuestionsAllocated(questions.map((q) => q.moduleId));
  } else {
    const modData = MODULE_TOPIC_REGISTRY[normMod] || MODULE_TOPIC_REGISTRY["M01"];
    const baseConcepts = [...modData.concepts];
    for (const c of modData.concepts) {
      if (c.followUp) {
        baseConcepts.push({
          ...c,
          question: c.followUp,
        });
      }
    }
    const shuffled = cryptoShuffleLocal(baseConcepts);
    for (let i = 0; i < count; i++) {
      const concept = shuffled[i % shuffled.length];
      questions.push({
        id: `DYN-${normMod}-${Date.now().toString(36)}-${i + 1}`,
        courseId: "ai-engineering",
        moduleId: normMod,
        moduleTitle: modData.title,
        questionNumber: i + 1,
        questionType: modData.title.toUpperCase(),
        topic: concept.topic,
        subtopic: concept.topic,
        difficulty: i === 0 ? "easy" : i < 4 ? "medium" : "hard",
        type: "concept",
        question: concept.question,
        questionText: concept.question,
        context: concept.context,
        expectedPoints: concept.expectedPoints,
        expected_points: concept.expectedPoints,
        keywords: concept.keywords,
        timeLimitSec: 45,
        active: true,
      });
    }
    markQuestionsAllocated(questions.map((q) => q.id));
  }

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

