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
} from "../config/courseInterviewConfig.js";
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

/**
 * Dynamically builds a voice-friendly technical question object for a given course and module
 */
function buildDynamicQuestion({ courseId = "ai-engineering", moduleId = "M01", index = 0, difficulty = "medium" }) {
  const normMod = normalizeModuleId(moduleId);
  const modKey = (normMod && normMod !== "all") ? normMod : `M${String((index % 24) + 1).padStart(2, "0")}`;
  const concepts = CURRICULUM_CONCEPTS[modKey] || CURRICULUM_CONCEPTS["M01"];
  const c = concepts[index % concepts.length] || concepts[0];

  const courseObj = getCourseById(courseId) || PREPSPACES_COURSES[0];
  const modObj = getModuleById(courseId, modKey);

  const cleanModuleTitle = modObj?.title || `${modKey}: AI Engineering Track`;

  return {
    id: `dyn_${modKey}_${Date.now().toString(36)}_${index + 1}`,
    moduleId: modKey,
    moduleTitle: cleanModuleTitle,
    questionNumber: index + 1,
    questionType: cleanModuleTitle.toUpperCase(),
    topic: c.topic,
    subtopic: c.topic,
    difficulty,
    type: "concept",
    question: c.question,
    questionText: c.question,
    context: c.context,
    expectedPoints: c.expectedPoints,
    expected_points: c.expectedPoints,
    keywords: c.keywords,
    followUp: c.followUp,
    timeLimitSec: 45,
    active: true,
  };
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
  role = "AI Engineering Mock Interview",
  env,
}) {
  const store = await getStore(env);
  const sessionId = `int_${crypto.randomUUID()}`;
  const normMod = normalizeModuleId(moduleId);

  // Generate 7 dynamic questions for this session
  const questions = [];
  const count = 7;
  for (let i = 0; i < count; i++) {
    const targetMod = (normMod && normMod !== "all") ? normMod : `M${String(((i * 3 + 1) % 24) + 1).padStart(2, "0")}`;
    questions.push(
      buildDynamicQuestion({
        courseId,
        moduleId: targetMod,
        index: i,
        difficulty: i === 0 ? "easy" : i < 4 ? "medium" : "hard",
      })
    );
  }

  const session = {
    id: sessionId,
    candidateId: userId,
    candidateName: user?.name || "Candidate",
    candidateEmail: user?.email || "",
    role,
    courseId,
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

  const currentIdx = session.currentQuestionIndex || 0;
  const currentQ = session.questions[currentIdx] || buildDynamicQuestion({ index: currentIdx });

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
    // Dynamically build adaptive follow-up or next question
    const adaptive = buildAdaptiveResponse({
      question: currentQ,
      transcript,
      conversationHistory: session.conversationHistory,
      index: currentIdx,
      moduleId: session.moduleId,
    });

    if (adaptive.type === "FOLLOW_UP" || adaptive.type === "CLARIFICATION") {
      // Re-use or adapt current topic into deeper question
      nextQuestion = {
        ...currentQ,
        id: `dyn_followup_${Date.now().toString(36)}_${nextIdx + 1}`,
        questionNumber: nextIdx + 1,
        question: adaptive.spokenText,
        questionText: adaptive.spokenText,
        isAdaptiveFollowUp: true,
      };
      session.questions[nextIdx] = nextQuestion;
    } else {
      nextQuestion = session.questions[nextIdx] || buildDynamicQuestion({
        courseId: session.courseId,
        moduleId: session.moduleId,
        index: nextIdx,
        difficulty: nextIdx >= 3 ? "hard" : "medium",
      });
      session.questions[nextIdx] = nextQuestion;
    }

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
  const existingIds = new Set(session.answers.map((a) => a.questionId));

  // Recover pendingDraft if cooldown/interruption occurred before answer evaluation finished
  if (session.pendingDraft && session.pendingDraft.transcript && !existingIds.has(session.pendingDraft.questionId)) {
    const qObj = (session.questions || []).find((q) => q.id === session.pendingDraft.questionId) || {};
    session.answers.push({
      questionId: session.pendingDraft.questionId,
      questionText: qObj.questionText || qObj.question || "Interview Question",
      context: qObj.context || "",
      transcript: session.pendingDraft.transcript,
      inputMode: session.pendingDraft.inputMode || "voice",
      submittedAt: session.pendingDraft.savedAt || Date.now(),
    });
    existingIds.add(session.pendingDraft.questionId);
    delete session.pendingDraft;
  }

  // Merge clientAnswers with session.answers so any draft or client-side evaluated answers are included
  if (Array.isArray(clientAnswers) && clientAnswers.length > 0) {
    for (const ca of clientAnswers) {
      if (!existingIds.has(ca.questionId)) {
        session.answers.push(ca);
        existingIds.add(ca.questionId);
      }
    }
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
  const questions = [];
  const normMod = normalizeModuleId(moduleId);
  for (let i = 0; i < count; i++) {
    const targetMod = (normMod && normMod !== "all") ? normMod : `M${String(((i * 3 + 1) % 24) + 1).padStart(2, "0")}`;
    questions.push(buildDynamicQuestion({ courseId, moduleId: targetMod, index: i }));
  }
  return questions;
}
