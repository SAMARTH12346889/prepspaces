const fs = require('fs');
const path = require('path');

const overview = {
  moduleNumber: 21,
  title: "Fine-Tuning LLMs for Domain-Specific Applications",
  difficulty: "Advanced · Production AI Engineering & Model Adaptation",
  recommendedDuration: "4–5 weeks · 40–50 study & lab hours",
  primaryStack: "PyTorch, Hugging Face Transformers, PEFT, TRL (SFTTrainer), BitsAndBytes",
  infrastructure: "NVIDIA CUDA GPUs, 4-bit NormalFloat (NF4), LoRA & QLoRA, vLLM / Ollama Serving",
  monitoringStack: "Weights & Biases, TensorBoard, Hugging Face Evaluation Metrics (Perplexity, ROUGE, BERTScore)",
  adaptationTopologies: "LoRA Low-Rank Adaptation, QLoRA Double Quantization, SFT Loss Masking & Model Merging",
  finalOutcome: "Engineer, train, evaluate, and deploy a production-grade specialized LLM (e.g. Qwen2.5-Coder-1.5B adapted as a rigorous Java Technical Interview Evaluator) using parameter-efficient fine-tuning (LoRA/QLoRA), conversational JSONL dataset engineering, SFTTrainer with response-only loss masking, model merging, and vLLM serving."
};

const curriculumUnits = [
  {
    id: "unit-01",
    number: "01",
    title: "Fine-Tuning Foundations & Behavioral Adaptation",
    subtitle: "Adapting General Foundation Weights to Strict Domain Specifications",
    summary: "Understand why general-purpose foundation LLMs fall short on domain-specific requirements. Deconstruct the mechanics of post-training parameter updates, behavioral molding, and the running case study of an automated Java Technical Interview Evaluator.",
    topics: [
      {
        id: "sec-01-1",
        title: "The Generalist Foundation Model Dilemma",
        content: `Modern Large Language Models (LLMs) such as Qwen2.5, Llama-3, and Mistral are pretrained on trillions of tokens spanning broad internet corpora, public documentation, encyclopedias, and general codebases. While they possess strong emergent reasoning capabilities and factual fluency across thousands of subjects, they are fundamentally generalists.

When deployed into high-stakes enterprise applications—such as an automated Java technical interview system for PrepSpaces—a raw generalist model presents serious operational shortcomings:
1. Verbosity & Rambling: Rather than providing structured, rubric-based feedback, general models output lengthy conversational prose that is impossible for automated downstream systems to parse reliably.
2. Inconsistent Scoring & Bias: Without explicit behavioral conditioning, a general model will give a candidate 9/10 on one day and 6/10 on the next for identical answers regarding dynamic method dispatch.
3. Inability to Follow Strict JSON Schemas: Complex multi-key JSON schemas containing scores, identified misconceptions, follow-up questions, and pedagogical hints frequently suffer syntax errors or hallucinations when prompted naively.
4. Superficial Evaluation: General models tend to accept partial definitions (e.g., 'polymorphism means an object takes many forms') without probing whether the candidate understands runtime virtual method tables, compile-time method overloading, or JVM bytecode dispatch instructions.`
      },
      {
        id: "sec-01-2",
        title: "What Fine-Tuning Actually Modifies",
        content: `An LLM is a deep neural network consisting of stacked transformer decoder blocks parameterized by weight matrices (W in R^{d_in x d_out}). Pretraining establishes general linguistic and semantic representations by optimizing next-token cross-entropy loss over web-scale text.

Fine-tuning is a continuation of gradient-based training over a curated, domain-specific dataset (D = {(x_1, y_1), (x_2, y_2), ..., (x_N, y_N)}). During fine-tuning:
1. Input sequences (prompts) and target sequences (expected responses) are tokenized into integer IDs using the model's vocabulary tokenizer.
2. Forward passes compute output logits over the vocabulary at each token position.
3. The loss function (cross-entropy) calculates the divergence between predicted token probabilities and target tokens.
4. Backpropagation propagates error gradients through the network layers.
5. The optimizer (e.g., AdamW, PagedAdamW8bit) calculates parameter updates (theta_new = theta_old - eta * grad_L) to align model generation with the domain distribution.

The goal is not to force the model to memorize millions of new raw facts, but to teach it the syntax, structure, tone, evaluation criteria, and reasoning patterns of your enterprise application.`
      },
      {
        id: "sec-01-3",
        title: "Running Case Study: The PrepSpaces Java Technical Interviewer",
        content: `Throughout this module, we construct a domain-specialized technical interview evaluator based on Qwen2.5-Coder-1.5B-Instruct.

Before Fine-Tuning:
User: 'What is polymorphism in Java?'
Raw Generalist Output: 'Polymorphism is an object-oriented programming concept where an object can take many forms. It allows you to define one interface and have multiple implementations. For example, a Dog and Cat can both inherit from Animal...'

After Fine-Tuning:
Target Domain Output:
{
  "concept": "Polymorphism",
  "definition": "The capability of a reference type to invoke polymorphic methods determined at runtime via dynamic method dispatch.",
  "keyMechanisms": [
    "Compile-time polymorphism (Method Overloading)",
    "Runtime polymorphism (Method Overriding & invokevirtual)"
  ],
  "candidateEvaluationCriteria": [
    "Distinguishes static binding vs dynamic binding",
    "Mentions method signature compatibility",
    "Explains JVM vtable resolution"
  ],
  "difficulty": "Medium",
  "rubricScore": 8,
  "followUpQuestion": "How does the JVM determine which overridden method to execute at runtime?",
  "pedagogicalFeedback": "Correct definition; clarify that static methods cannot be overridden polymorphically."
}
Fine-tuning establishes this exact JSON contract, scoring rubric, and pedagogical demeanor across thousands of Java engineering concepts.`
      }
    ]
  },
  {
    id: "unit-02",
    number: "02",
    title: "The Customization Triad: Fine-Tuning vs. Prompt Engineering vs. RAG",
    subtitle: "Architectural Decision Matrix, Cost Trade-Offs & Hybrid Enterprise Design",
    summary: "Critically contrast Prompt Engineering, Retrieval-Augmented Generation (RAG), and Fine-Tuning across cost, latency, knowledge recency, and behavioral reliability. Formulate a hybrid enterprise architecture combining all three.",
    topics: [
      {
        id: "sec-02-1",
        title: "Prompt Engineering: Ephemeral In-Context Steering",
        content: `Prompt engineering instructs a frozen, general model at inference time using carefully engineered system prompts, few-shot demonstration exemplars, and chain-of-thought scratchpads.

Strengths:
- Zero training setup: Requires no GPU training infrastructure, gradient backpropagation, or dataset splitting.
- Instant iteration: Changes to instructions or scoring rubrics take effect immediately by updating a string in backend code.
- Low barrier to entry: Ideal for rapid prototyping and validation of concept feasibility.

Inherent Limitations in Production:
- Context Window Inflation: Embedding a 2,000-token grading rubric into every single user prompt dramatically increases Time to First Token (TTFT) and inflates token billing costs on hosted APIs.
- Non-Deterministic Adherence: Even with temperature=0.0, long or complex system prompts suffer 'instruction drift' or intermittent schema violations under ambiguous candidate answers.
- Context Clashing: Conflicting prompt rules (e.g. 'be strict' vs 'be encouraging') cause unpredictable evaluation fluctuations.`
      },
      {
        id: "sec-02-2",
        title: "Retrieval-Augmented Generation (RAG): Dynamic Knowledge Grounding",
        content: `RAG retrieves relevant external text chunks from a vector database (or knowledge graph) and injects them into the model's context window before generation.

Strengths:
- Dynamic Knowledge Updates: When Java 23 releases new language features (such as primitive patterns or flexible constructor bodies), documentation is ingested into the vector index in minutes without retraining the model.
- Verifiable Citations: Responses can cite the exact Oracle documentation paragraph or internal engineering guideline used for evaluation.
- High Hallucination Resistance: Grounding the model on retrieved context drastically reduces factual fabrication.

Inherent Limitations in Production:
- RAG Does Not Teach Behavior: Supplying Java documentation to an untrained model does not instruct it how to grade candidates, assign numeric scores out of 10, or format responses as strict JSON.
- Retrieval Pipeline Failure: If semantic search retrieves irrelevant chunks, the model's response is degraded (Garbage In, Garbage Out).`
      },
      {
        id: "sec-02-3",
        title: "The Architectural Decision Matrix & The Hybrid Production Pattern",
        content: `Comparison Matrix:
| Dimension | Prompt Engineering | Retrieval-Augmented Generation (RAG) | Supervised Fine-Tuning (SFT) |
| :--- | :--- | :--- | :--- |
| Model Weights | Frozen | Frozen | Modified / Adapted |
| Primary Purpose | Dynamic instructions | Up-to-date factual grounding | Form, style, syntax, behavior |
| Cost Structure | High per-request token cost | Vector DB compute + token cost | Upfront training cost, low inference cost |
| Knowledge Recency | Fixed at pretraining | Real-time (minutes) | Fixed at fine-tuning run date |
| Output Consistency | Medium | Medium-High | Extremely High (>99% schema adherence) |
| Latency Overhead | High TTFT from huge prompts | Retrieval step latency (30-80ms) | Low TTFT (concise prompts) |

The Triad Hybrid Architecture in PrepSpaces:
1. Fine-Tuning: Trains Qwen2.5-Coder to inherently behave like a rigorous Java interviewer, outputting clean JSON evaluations without needing a 2,000-token rubric in every prompt.
2. RAG: Retrieves the latest Java specification, company-specific grading guidelines, and verified code solutions at runtime.
3. Prompt Engineering: Injects ephemeral, candidate-specific metadata (e.g., Candidate Level: Senior, Interview Duration Remaining: 12 minutes).`
      }
    ]
  },
  {
    id: "unit-03",
    number: "03",
    title: "Fine-Tuning Taxonomy: Full Fine-Tuning vs. PEFT",
    subtitle: "Memory Footprints, Gradient Overhead & Catastrophic Forgetting",
    summary: "Contrast traditional full-parameter fine-tuning against Parameter-Efficient Fine-Tuning (PEFT). Analyze optimizer memory states (AdamW FP32 gradients and momentum buffers) and catastrophic forgetting risks.",
    topics: [
      {
        id: "sec-03-1",
        title: "Full-Parameter Fine-Tuning: Mechanics & Hardware Barriers",
        content: `Full fine-tuning updates 100% of the model's parameters during training. Every weight tensor in every transformer layer receives gradient updates.

The VRAM Reality Check:
Consider fine-tuning a 7-billion parameter model (Llama-3-8B or Qwen2.5-7B) using standard 16-bit precision (FP16/BF16):
1. Static Model Weights (FP16): 7B * 2 bytes = 14 GB.
2. Gradients (FP16): 7B * 2 bytes = 14 GB.
3. AdamW Optimizer States (FP32):
   Adam maintains two state tensors per parameter: First Momentum (m) and Second Momentum (v) in 32-bit floating point, plus an FP32 master weight copy:
   7B * (4 + 4 + 4) bytes = 84 GB!
4. Activation Memory: Forward pass intermediate activations retained for backprop: 8–16 GB depending on batch size and sequence length.

Total VRAM Required for Full Fine-Tuning:
14 GB + 14 GB + 84 GB + 12 GB = ~124 GB VRAM!
This exceeds a $35,000 NVIDIA A100 (80GB) GPU and requires multi-GPU distributed data parallelism (FSDP / DeepSpeed ZeRO-3) across at least two to four enterprise GPUs just to train an 8B model.`
      },
      {
        id: "sec-03-2",
        title: "Parameter-Efficient Fine-Tuning (PEFT) Paradigm",
        content: `PEFT fundamentally alters the optimization equation:
Instead of updating all billions of parameters, the original pretrained weights (W_0) are completely frozen. Small, auxiliary parameter modules (representing 0.05% to 1.0% of total parameters) are attached to specific layers, and gradients are computed strictly for these lightweight adapters.

VRAM Footprint with PEFT:
For a 7B model using PEFT:
- Base Weights: 14 GB (frozen, requiring zero optimizer states or gradients).
- Adapter Parameters (e.g., rank 16 LoRA): ~20 million parameters = 40 MB.
- Adapter Gradients: 40 MB.
- Adapter AdamW States: ~240 MB.
- Activations: ~4 GB (with gradient checkpointing).
Total VRAM Required: ~18.5 GB!
A 7B model that previously required a 128 GB multi-GPU cluster can now be fine-tuned on a single consumer RTX 4090 (24 GB) or cloud Tesla T4 / L4!`
      },
      {
        id: "sec-03-3",
        title: "Mitigating Catastrophic Forgetting",
        content: `Catastrophic forgetting occurs when a neural network is trained on a narrow task and completely overwrites the high-dimensional representations it developed during pretraining.

Example in AI Engineering:
A general coding LLM fine-tuned exclusively on 10,000 Java interview multiple-choice questions may achieve 98% accuracy on the interview test set, but completely lose the ability to write basic Python functions, analyze SQL schemas, or maintain natural conversational coherence.

Why PEFT Protects Against Catastrophic Forgetting:
Because PEFT keeps the original base weights W_0 frozen, the foundational knowledge base remains intact. The low-rank adapter acts as a task-specific steering vector without degrading the base representations. If general conversational capabilities are needed, the adapter can be scaled, detached, or swapped dynamically.`
      }
    ]
  },
  {
    id: "unit-04",
    number: "04",
    title: "Dataset Engineering & Conversational JSONL Pipelines",
    subtitle: "Schema Contracts, Synthetic Data Curation, Deduplication & Leak-Free Splits",
    summary: "Master the most critical phase of fine-tuning: engineering high-quality, conversational JSONL training corpora. Design robust message schemas, balance task distributions, eliminate duplicate noise, and execute leak-free splits.",
    topics: [
      {
        id: "sec-04-1",
        title: "The Conversational JSONL Standard (ChatML Format)",
        content: `Instruction fine-tuning models rely on the conversational JSONL (JSON Lines) format, where each line is a standalone, valid JSON object containing an array of message turns:
{"messages": [
  {"role": "system", "content": "You are an expert Java Technical Interviewer. Evaluate answers objectively using the PrepSpaces rubric."},
  {"role": "user", "content": "Question: What is the volatile keyword in Java?\\nCandidate Answer: It makes variables thread-safe by preventing threads from caching them."},
  {"role": "assistant", "content": "{\\n  \\"concept\\": \\"volatile\\",\\n  \\"score\\": 6,\\n  \\"keyPoints\\": [\\"Guarantees visibility across CPU caches\\", \\"Establishes happens-before ordering\\", \\"Does NOT guarantee mutual exclusion or atomicity for compound operations (e.g. count++)\\"],\\n  \\"feedback\\": \\"Good mention of cache visibility, but clarify that volatile does not guarantee atomicity for operations like incrementing.\\",\\n  \\"followUp\\": \\"Why is volatile insufficient for a thread-safe counter, and what should be used instead?\\"\\n}"}
]}

Standard Roles:
- 'system': Sets the behavioral constraints, persona, and output rules.
- 'user': The task, question, or candidate answer submission.
- 'assistant': The ideal target response. During supervised fine-tuning, loss is computed exclusively on the assistant tokens.`
      },
      {
        id: "sec-04-2",
        title: "Synthetic Data Curation with LLM Judges",
        content: `Manually authoring 5,000 multi-turn technical interview evaluations is prohibitively time-consuming. Modern AI teams use high-capability teacher models (e.g., Claude 3.5 Sonnet, GPT-4o) to generate synthetic candidate-interviewer dialogues:

Synthetic Generation Pipeline:
1. Seed Concept Extraction: Extract 500 core Java concepts from authoritative specifications (Java Virtual Machine Specification, Java Concurrency in Practice, Spring Framework docs).
2. Persona-Driven Candidate Answers: For each concept, prompt the teacher model to simulate:
   - A flawless senior engineer answer (Score: 10/10).
   - A partially correct answer missing critical concurrency implications (Score: 6/10).
   - A common beginner misconception (e.g., confusing HashMap collision handling with array resizing) (Score: 3/10).
   - An outright incorrect answer (Score: 1/10).
3. Structured Rubric Generation: Teacher model formats the evaluation into the exact target JSON schema.
4. Programmatic Validation: Validate that generated JSON strings strictly match the Pydantic schema using Python pydantic.BaseModel.parse_raw(). Any malformed generation is immediately discarded.`
      },
      {
        id: "sec-04-3",
        title: "Dataset Deduplication & Leak-Free Train/Val/Test Splits",
        content: `Data quality directly bounds model performance:

1. Deduplication & Semantic Filtering:
   Near-duplicate prompts (e.g., 'What is JVM?' repeated 50 times with trivial rewordings) cause the model to overfit to specific phrases while artificially depressing training loss. Compute MinHash LSH or embedding cosine similarity; deduplicate prompts with similarity > 0.92.

2. Contamination & Data Leakage Prevention:
   A catastrophic anti-pattern is random token-level splitting:
   If 10 variations of 'Explain HashMap collisions' exist, and 8 land in the training set while 2 land in the test set, the test evaluation does not measure generalization—it measures memorization!
   Leak-Free Splitting Rule: Split strictly by concept group or topic category:
   - Train Set (80%): OOP, Exceptions, Streams API, Spring Core, Basic Multithreading.
   - Validation Set (10%): JVM Internals, Advanced Concurrency (AQS, Phaser), Garbage Collectors (G1, ZGC).
   - Test Set (10%): Novel Java 21+ features (Virtual Threads, Sequenced Collections).
   This ensures that test benchmarks rigorously evaluate the model's ability to apply evaluation rubrics to previously unseen technical topics.`
      }
    ]
  },
  {
    id: "unit-05",
    number: "05",
    title: "LoRA: Low-Rank Adaptation Mathematical Foundations",
    subtitle: "Matrix Factorization, Intrinsic Rank Hypothesis & Scaling Dynamics",
    summary: "Derive the mathematical formulation of LoRA. Explore the intrinsic rank hypothesis, parameter scaling via alpha / r, initialization constraints, and targeted transformer projection matrices.",
    topics: [
      {
        id: "sec-05-1",
        title: "The Intrinsic Rank Hypothesis & Low-Rank Matrix Factorization",
        content: `In their landmark 2021 research paper, Hu et al. observed that although neural network weight matrices are overparameterized (e.g. W in R^{4096 x 4096}), the weight updates (Delta W) during task adaptation have a very low 'intrinsic rank'. That is, the essential task-specific degrees of freedom reside in a subspace of much lower dimension.

Mathematical Formulation:
Instead of updating the full rank-4096 matrix W_0:
W' = W_0 + Delta W

LoRA decomposes Delta W into the product of two low-rank matrices:
Delta W = B * A
Where:
- W_0 in R^{d x k} (Frozen base weights, e.g. 4096 x 4096).
- B in R^{d x r} (Trainable adapter matrix).
- A in R^{r x k} (Trainable adapter matrix).
- r << min(d, k) (Rank hyperparameter, typically r in {8, 16, 32}).

For d = 4096, k = 4096, and r = 8:
- Full matrix parameter count: 4,096 * 4,096 = 16,777,216 parameters (~16.8M).
- LoRA parameter count: (4,096 * 8) + (8 * 4,096) = 32,768 + 32,768 = 65,536 parameters (~65K).
LoRA achieves a 256x parameter reduction on this matrix (99.6% reduction)!`
      },
      {
        id: "sec-05-2",
        title: "Initialization & The Alpha Scaling Factor",
        content: `Initialization Guarantee:
At the start of fine-tuning, the low-rank adapter must have zero impact on the base model's predictions:
W' = W_0 + B * A = W_0 when Delta W = 0
To achieve this:
- Matrix A is initialized using Gaussian random values: A ~ N(0, sigma^2).
- Matrix B is initialized strictly to all zeros: B = 0.
Consequently, B * A = 0 at step 0, ensuring that the model starts training from the exact pretrained baseline output.

The Alpha Scaling Constant (alpha / r):
The forward pass applies an explicit scaling factor:
h = W_0 * x + (alpha / r) * B * A * x

Where:
- alpha is a fixed constant (commonly set to 2 * r, e.g., alpha = 32 for r = 16).
- Scaling by alpha / r stabilizes the magnitude of the adapter activations when experimenting with different rank values r, eliminating the need to retune the learning rate when changing rank.`
      },
      {
        id: "sec-05-3",
        title: "Targeting Transformer Projection Matrices",
        content: `Transformer decoder blocks contain two primary sub-layers:
1. Multi-Head Self-Attention:
   - Query projection (q_proj in R^{d x d})
   - Key projection (k_proj in R^{d x d_kv})
   - Value projection (v_proj in R^{d x d_kv})
   - Output projection (o_proj in R^{d x d})
2. Feed-Forward Network (FFN / MLP):
   - Gate projection (gate_proj in R^{d x d_ff})
   - Up projection (up_proj in R^{d x d_ff})
   - Down projection (down_proj in R^{d_ff x d})

Where to Attach LoRA?
- Attention Only (q_proj, v_proj): Minimal parameter overhead (used in original 2021 LoRA paper). Fast and memory-lean, but lower capacity for complex reasoning adaptation.
- All Linear Layers (q_proj, k_proj, v_proj, o_proj, gate_proj, up_proj, down_proj): The modern industry standard (QLoRA recommendation). Delivers significantly higher domain adaptation capability with negligible extra memory cost during 4-bit training.`
      }
    ]
  },
  {
    id: "unit-06",
    number: "06",
    title: "QLoRA: Quantized Low-Rank Adaptation",
    subtitle: "4-bit NormalFloat (NF4), Double Quantization & Paged Optimizers",
    summary: "Master the QLoRA breakthrough developed by Dettmers et al. Deconstruct the information-theoretic optimality of NF4, double quantization memory reduction, paged optimizers, and mixed-precision compute dynamics.",
    topics: [
      {
        id: "sec-06-1",
        title: "The QLoRA Breakthrough: Fine-Tuning 70B on a Single GPU",
        content: `While standard LoRA reduces trainable parameter count, the frozen base model weights (W_0) still had to reside in VRAM as 16-bit floating-point tensors (14 GB for a 7B model; 140 GB for a 70B model).

In 2023, Tim Dettmers et al. introduced QLoRA (Quantized Low-Rank Adaptation), proving that the frozen base model can be compressed to 4-bit representation without destroying gradient backpropagation through the frozen weights.
QLoRA bridges 4-bit storage and high-precision gradient calculation:
- Base model weights are stored in 4-bit NF4.
- During forward propagation, weights are dequantized on-the-fly to BF16/FP16 for matrix multiplication.
- LoRA adapter weights and gradients remain in full 16-bit precision.
Result: A 70B parameter model can be fine-tuned on two 48GB GPUs or four 24GB consumer GPUs!`
      },
      {
        id: "sec-06-2",
        title: "4-bit NormalFloat (NF4) & Double Quantization (DQ)",
        content: `1. 4-bit NormalFloat (NF4):
Pretrained neural network parameters are not uniformly distributed; empirical measurements confirm they closely follow a zero-centered Gaussian normal distribution: W ~ N(0, sigma^2).
Standard 4-bit integer quantization (INT4) uses uniform grid spacing, wasting representational bits on empty tail regions.
NF4 calculates 16 information-theoretically optimal quantile bins such that each 4-bit index represents equal probability mass under a normal distribution. NF4 preserves significantly higher precision than standard 4-bit integers.

2. Double Quantization (DQ):
Quantization converts a 32-bit float to 4-bit by dividing by a scaling constant c:
W_quant = round(W / c)
To maintain precision across layer blocks, a separate scale constant c is stored for every block of 64 parameters. Storing 32-bit floats for these constants adds ~0.5 bits per parameter.
Double Quantization quantizes the quantization constants themselves from 32-bit float to 8-bit float with an 8-bit scale constant for every block of 256 constants:
Saves 0.37 bits per parameter, freeing approximately 3 GB of VRAM across a 65B model!`
      },
      {
        id: "sec-06-3",
        title: "Paged Optimizers & Mixed-Precision Execution Flow",
        content: `1. Paged Optimizers:
During training, memory spikes (e.g., when processing an unusually long prompt sequence) frequently cause sudden CUDA Out-of-Memory crashes.
QLoRA utilizes CUDA Unified Memory to automatically page optimizer state tensors between GPU VRAM and CPU system RAM via PCIe. If a VRAM spike occurs, optimizer pages are paged out to CPU RAM and paged back during the optimizer update step, completely eliminating memory allocation crashes during burst steps.

2. Mixed-Precision Execution Cycle:
- Storage: 4-bit NF4 in VRAM.
- Compute Dtype: BFloat16 (BF16).
- Forward Pass: PyTorch fetches 4-bit NF4 weights -> dequantizes to BF16 -> executes GEMM with input activation tensor -> adds LoRA adapter output -> passes to next layer.
- Backward Pass: Gradients flow through frozen BF16 weights to compute gradients dL/dA and dL/dB for adapter matrices only.`
      }
    ]
  },
  {
    id: "unit-07",
    number: "07",
    title: "The Supervised Fine-Tuning (SFT) Training Pipeline",
    subtitle: "Tokenization, Chat Templates, Cross-Entropy Loss & Response Masking",
    summary: "Trace the end-to-end tokenization and training lifecycle. Implement response-only loss masking with DataCollatorForCompletionOnlyLM to prevent penalizing the model for user prompts.",
    topics: [
      {
        id: "sec-07-1",
        title: "Chat Templates & Tokenizer Special Tokens",
        content: `Instruction-tuned models do not process raw dictionaries; they require exact delimiter syntax defined in their tokenizer's Jinja2 chat template.

For Qwen2.5-Coder (ChatML Template):
<|im_start|>system
You are a Java Technical Interviewer.<|im_end|>
<|im_start|>user
What is an interface in Java?<|im_end|>
<|im_start|>assistant
An interface defines a contract of abstract and default methods.<|im_end|>

Critical Engineering Rule:
Never manually concatenate strings like '### Human:' or 'System:'. Always use:
formatted_text = tokenizer.apply_chat_template(messages, tokenize=False)
This guarantees that exact end-of-turn (<|im_end|>) and beginning-of-turn (<|im_start|>) tokens are embedded identically to pretraining.`
      },
      {
        id: "sec-07-2",
        title: "Response-Only Loss Masking (The Golden Rule of SFT)",
        content: `In standard autoregressive language modeling, cross-entropy loss is computed on every token in the sequence.

The Naive Mistake:
If you compute loss over the entire sequence, the model is penalized for failing to predict the system prompt and the user's question!
L = - sum_{t in prompt} log P(prompt_t) - sum_{t in response} log P(response_t)
The model wastes valuable adapter capacity memorizing user question phrasing.

Response-Only Masking:
Set the label tensor for all prompt tokens (system + user) to -100:
label_t = -100 for t in prompt
label_t = target_id_t for t in response
PyTorch's cross-entropy loss function strictly ignores indices with value -100. The optimizer updates model parameters exclusively based on how well it generated the target assistant evaluation.`
      },
      {
        id: "sec-07-3",
        title: "Hyperparameter Dynamics: Learning Rate, Warmup & Batch Accumulation",
        content: `Key SFT Hyperparameters:
1. Learning Rate (LR):
   For LoRA/QLoRA, standard values range between 1e-4 and 3e-4 (e.g., 2e-4). This is 10x higher than full fine-tuning (1e-5 to 2e-5) because adapters are randomly initialized small matrices that require larger parameter steps.
2. Effective Batch Size (EBS):
   EBS = Per_Device_Batch_Size * Gradient_Accumulation_Steps * Num_GPUs.
   On a single GPU with limited VRAM: Set per_device_batch_size = 2 and gradient_accumulation_steps = 8, achieving an effective batch size of 16 without exceeding memory limits.
3. Cosine Learning Rate Scheduler with Warmup:
   Linearly increases learning rate from 0 to 2e-4 over the first 5% of training steps (warmup_ratio=0.05), preventing early gradient explosions, followed by a smooth cosine decay to near zero.`
      }
    ]
  },
  {
    id: "unit-08",
    number: "08",
    title: "Underfitting, Overfitting & Training Forensics",
    subtitle: "Loss Curves, Generalization Gaps, Early Stopping & Regularization",
    summary: "Diagnose training dynamics in real time. Analyze training loss versus validation loss trajectories to identify underfitting, optimal convergence, and severe memorization overfitting.",
    topics: [
      {
        id: "sec-08-1",
        title: "Diagnosing Loss Curves: Underfitting vs. Optimal vs. Overfitting",
        content: `Tracking training loss and validation loss across evaluation steps is the primary window into model health:

1. Underfitting Regime:
   - Symptoms: Both training loss and validation loss remain high and flat (e.g., L_train = 1.8, L_val = 1.9 after 3 epochs).
   - Causes: Learning rate is too low (e.g., 1e-6), rank r is too small (e.g., r = 2), or training epochs are insufficient.
   - Solution: Increase learning rate to 2e-4, increase rank to 16, or add more target modules.

2. Optimal Convergence:
   - Symptoms: Training loss steadily declines from 2.0 to ~0.7; validation loss declines in parallel and levels off around 0.85–0.90. The generalization gap (L_val - L_train) remains small and stable.
   - Action: Checkpoint the model at the lowest validation loss step.

3. Overfitting Regime:
   - Symptoms: Training loss plummets to near zero (0.15), but validation loss starts climbing rapidly (1.2 -> 1.5 -> 2.1).
   - Causes: Model has memorized exact prompt-response pairs, training for too many epochs over a small dataset.
   - Solution: Implement early stopping, increase lora_dropout to 0.1, or inject synthetic variations.`
      },
      {
        id: "sec-08-2",
        title: "Early Stopping & Evaluation Frequency",
        content: `Rather than training for an arbitrary fixed number of epochs (e.g. 10 epochs), production pipelines employ Early Stopping:
- Evaluate validation loss every eval_steps = 50.
- Set early_stopping_patience = 3: If validation loss fails to improve for 3 consecutive evaluation checks, terminate training immediately.
- Load Best Checkpoint: Always load the adapter weights from the checkpoint that achieved the absolute minimum validation loss (load_best_model_at_end=True).`
      },
      {
        id: "sec-08-3",
        title: "Regularization: LoRA Dropout & Weight Decay",
        content: `Preventing memorization in low-rank adapters:
1. LoRA Dropout (lora_dropout = 0.05 to 0.1):
   Randomly sets a fraction of activations in the low-rank projection to zero during training steps. This forces the adapter to learn redundant, robust feature pathways rather than co-adapting to specific training tokens.
2. Weight Decay (weight_decay = 0.01):
   Applies an L2 penalty to adapter weights in the AdamW optimizer step, discouraging adapter parameters from growing excessively large and maintaining stability relative to the base model weights.`
      }
    ]
  },
  {
    id: "unit-09",
    number: "09",
    title: "End-to-End Implementation with Qwen2.5-Coder & SFTTrainer",
    subtitle: "BitsAndBytes 4-bit Loading, LoraConfig, SFTConfig & Execution Scripts",
    summary: "Build the complete Python fine-tuning script. Integrate BitsAndBytesConfig for NF4 loading, configure PEFT LoraConfig across all linear attention projections, and launch training with TRL's SFTTrainer.",
    topics: [
      {
        id: "sec-09-1",
        title: "Base Model & Quantization Configuration",
        content: `Setting up the 4-bit base model in PyTorch:
from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig
import torch

model_id = "Qwen/Qwen2.5-Coder-1.5B-Instruct"

# 1. 4-bit NormalFloat Quantization Config
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16, # Use BF16 on Ampere/Hopper GPUs
    bnb_4bit_use_double_quant=True         # Compress quantization scale factors
)

# 2. Load Tokenizer & Model
tokenizer = AutoTokenizer.from_pretrained(model_id, trust_remote_code=True)
if tokenizer.pad_token is None:
    tokenizer.pad_token = tokenizer.eos_token

model = AutoModelForCausalLM.from_pretrained(
    model_id,
    quantization_config=bnb_config,
    device_map="auto",
    torch_dtype=torch.bfloat16,
    trust_remote_code=True
)`
      },
      {
        id: "sec-09-2",
        title: "LoRA Configuration & Parameter Inspection",
        content: `Preparing the model for k-bit training and attaching adapters:
from peft import LoraConfig, prepare_model_for_kbit_training, get_peft_model

# Prepare frozen base weights for gradient computation
model = prepare_model_for_kbit_training(model, use_gradient_checkpointing=True)

# Define LoRA Configuration
lora_config = LoraConfig(
    r=16,                         # Intrinsic rank
    lora_alpha=32,                # Scaling constant (2 * r)
    lora_dropout=0.05,            # Regularization dropout
    target_modules=[              # Target all linear projections
        "q_proj", "k_proj", "v_proj", "o_proj",
        "gate_proj", "up_proj", "down_proj"
    ],
    bias="none",
    task_type="CAUSAL_LM"
)

model = get_peft_model(model, lora_config)
model.print_trainable_parameters()
# Output: trainable params: 18,432,000 || all params: 1,560,000,000 || trainable%: 1.18%`
      },
      {
        id: "sec-09-3",
        title: "SFTTrainer Execution & Artifact Export",
        content: `Configuring and executing the SFT training loop:
from trl import SFTTrainer, SFTConfig
from datasets import load_dataset

dataset = load_dataset("json", data_files={
    "train": "data/train.jsonl",
    "validation": "data/val.jsonl"
})

training_args = SFTConfig(
    output_dir="./output/qwen-java-interviewer-lora",
    num_train_epochs=3,
    per_device_train_batch_size=2,
    gradient_accumulation_steps=8,
    learning_rate=2e-4,
    warmup_ratio=0.05,
    lr_scheduler_type="cosine",
    logging_steps=10,
    eval_strategy="steps",
    eval_steps=50,
    save_strategy="steps",
    save_steps=50,
    save_total_limit=2,
    bf16=True,
    max_length=1024,
    report_to="none"
)

trainer = SFTTrainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"],
    eval_dataset=dataset["validation"],
    processing_class=tokenizer
)

trainer.train()

# Export final adapter weights
trainer.model.save_pretrained("./artifacts/java-interviewer-adapter")
tokenizer.save_pretrained("./artifacts/java-interviewer-adapter")`
      }
    ]
  },
  {
    id: "unit-10",
    number: "10",
    title: "Rigorous Model Validation & Multi-Faceted Evaluation",
    subtitle: "Perplexity, Exact Match, Schema Validity, LLM-as-a-Judge & Benchmark Gates",
    summary: "Establish multi-dimensional evaluation pipelines beyond loss curves. Measure perplexity, JSON structural validity, factual Java correctness, scoring fairness, and LLM-as-a-Judge correlation.",
    topics: [
      {
        id: "sec-10-1",
        title: "Perplexity (PPL) as a Quantitative Baseline",
        content: `Perplexity is the exponentiated cross-entropy loss over a held-out test dataset:
PPL = exp(L_test) = exp( - (1/N) * sum_{i=1}^N log P(y_i | x_i) )

Interpretation:
- Perplexity represents the effective branching factor: how many tokens the model is uncertain between at each generation step.
- A drop in perplexity from PPL = 14.2 (base model) to PPL = 3.8 (fine-tuned model) on the Java test set confirms that the model is substantially less surprised by domain-specific Java interview terminology and JSON structures.
- Limitation: Low perplexity does not prove that an evaluation is pedagogically sound—it only measures statistical fluency on the test tokens.`
      },
      {
        id: "sec-10-2",
        title: "Automated Domain Schema Validity Testing",
        content: `To ensure the fine-tuned model functions reliably in an automated platform without crashing the UI:
1. JSON Syntactic Validity Rate:
   Test 500 prompts with zero temperature; count the percentage of outputs that parse successfully with json.loads().
   Target: >99.0% valid JSON (compared to ~75% for raw base models).
2. Schema Adherence (Pydantic Validation):
   Verify that all required keys are present ('concept', 'score', 'rubricScore', 'feedback', 'followUpQuestion') and that numeric scores fall strictly between 0 and 10.
3. Negative Case Handling:
   Supply deliberately incorrect candidate answers (e.g. 'Java Garbage Collector deletes the operating system kernel') and verify that the model assigns a score <= 2 and correctly flags the misconception.`
      },
      {
        id: "sec-10-3",
        title: "LLM-as-a-Judge & Human Correlation",
        content: `Automated qualitative evaluation using a powerful frontier model (e.g. GPT-4o or Claude 3.5 Sonnet) as an impartial judge:
1. Pairwise Head-to-Head Comparison:
   Present the Judge with the candidate's answer and two anonymized evaluations: Model A (Base Qwen2.5) vs. Model B (Fine-Tuned Qwen2.5).
   Judge prompts: 'Evaluate which model gave a more accurate, constructive, and rubric-compliant technical review.'
2. Scoring Correlation:
   Compare fine-tuned model scores against scores assigned by human senior Java engineers on 100 benchmark answers using Pearson and Spearman rank correlation coefficients.
   Target: Pearson correlation r >= 0.85 indicates near-human grading alignment.`
      }
    ]
  },
  {
    id: "unit-11",
    number: "11",
    title: "Model Merging & Weight Consolidation",
    subtitle: "Merge-and-Unload, Safetensors Serialization & Multi-Adapter Blending",
    summary: "Consolidate trained LoRA adapters into base model weights for zero-overhead inference. Master merge_and_unload(), safetensors export, and examine multi-adapter blending techniques (TIES, DARE).",
    topics: [
      {
        id: "sec-01-1-merging",
        title: "The Mechanics of merge_and_unload()",
        content: `During LoRA inference, the model maintains two separate sets of tensors: base model weights W_0 and adapter matrices B and A. Every linear layer must execute two matrix multiplications:
y = W_0 * x + (alpha / r) * B * A * x
This introduces inference latency overhead and requires PEFT runtime dependencies.

Weight Consolidation:
Because matrix multiplication is linear, the low-rank update Delta W can be mathematically added directly into the base weights once training is complete:
W_merged = W_0 + (alpha / r) * (B * A)
After this addition, the adapter matrices B and A are unloaded from memory. The resulting model is a single, standard neural network that can be loaded with standard Hugging Face AutoModelForCausalLM without any PEFT library.`
      },
      {
        id: "sec-11-2",
        title: "Python Implementation of Model Merging",
        content: `Executing the merge and exporting standard safetensors:
import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel

base_model_id = "Qwen/Qwen2.5-Coder-1.5B-Instruct"
adapter_path = "./artifacts/java-interviewer-adapter"
export_path = "./artifacts/qwen-java-interviewer-merged"

# 1. CRITICAL: Load base model in FP16 or BF16 (NEVER 4-bit quantized!)
# Merging into 4-bit weights causes mathematical precision corruption.
base_model = AutoModelForCausalLM.from_pretrained(
    base_model_id,
    torch_dtype=torch.float16,
    device_map="auto"
)
tokenizer = AutoTokenizer.from_pretrained(adapter_path)

# 2. Attach trained adapter
model = PeftModel.from_pretrained(base_model, adapter_path)

# 3. Fuse weights and unload adapter structures
merged_model = model.merge_and_unload()

# 4. Save consolidated model
merged_model.save_pretrained(export_path, safe_serialization=True)
tokenizer.save_pretrained(export_path)
print("Model successfully merged and exported as standalone safetensors!")`
      },
      {
        id: "sec-11-3",
        title: "Multi-Adapter Blending & Model Merging Algorithms (TIES, DARE)",
        content: `Advanced teams frequently train specialized adapters for distinct competencies:
- Adapter 1: Core Java Concurrency & JVM Internals
- Adapter 2: Spring Boot Microservices Architecture
- Adapter 3: Soft Skills & Candidate Communication Rubrics

Merging Multiple Adapters:
1. Linear Interpolation (SLERP - Spherical Linear Interpolation):
   Blends two weight spaces smoothly along a spherical geodesic.
2. TIES-Merging (Trimming, Electing Sign & Merging):
   Resolves parameter interference across multiple models by trimming the bottom 80% smallest parameter changes, resolving directional sign conflicts, and averaging only aligned updates.
3. DARE (Drop And REscale):
   Randomly drops 90% of delta parameters and rescales remaining weights by 1/(1-p), allowing multiple fine-tuned models to be merged into a single multi-domain powerhouse with zero loss in individual capabilities.`
      }
    ]
  },
  {
    id: "unit-12",
    number: "12",
    title: "Production Deployment, vLLM Serving & Preference Alignment",
    subtitle: "High-Throughput vLLM Serving, Ollama Packaging, DPO & RLHF Alignment",
    summary: "Take the fine-tuned model to production. Deploy via vLLM with PagedAttention and continuous batching, package into Ollama Modelfiles, and explore post-SFT preference optimization with Direct Preference Optimization (DPO).",
    topics: [
      {
        id: "sec-12-1",
        title: "Deploying Fine-Tuned Models with vLLM",
        content: `In Module 17 and 20, you mastered high-throughput inference serving with vLLM.
Deploying the merged model artifact:
vllm serve ./artifacts/qwen-java-interviewer-merged \\
  --host 0.0.0.0 \\
  --port 8000 \\
  --max-model-len 4096 \\
  --gpu-memory-utilization 0.90 \\
  --enable-prefix-caching \\
  --dtype float16

Dynamic Multi-LoRA Serving:
vLLM also supports serving raw unmerged adapters dynamically!
A single base model instance can serve multiple LoRA adapters simultaneously:
vllm serve Qwen/Qwen2.5-Coder-1.5B-Instruct \\
  --enable-lora \\
  --lora-modules java-interview=./artifacts/java-interviewer-adapter \\
                 python-interview=./artifacts/python-interviewer-adapter
Incoming requests specify model: 'java-interview', and vLLM dynamically applies the corresponding adapter tensors on-the-fly with near-zero latency penalty.`
      },
      {
        id: "sec-12-2",
        title: "Packaging with Ollama for Local Engineering & Testing",
        content: `Creating a portable Ollama Modelfile for local candidate practice:
1. Create Modelfile:
FROM ./artifacts/qwen-java-interviewer-merged

PARAMETER temperature 0.2
PARAMETER top_p 0.9
PARAMETER stop "<|im_end|>"
PARAMETER stop "<|im_start|>"

SYSTEM """You are an expert Java Technical Interviewer for PrepSpaces. Always return evaluations in the required JSON schema."""

2. Build and run locally:
ollama create prepspaces-java-interviewer -f Modelfile
ollama run prepspaces-java-interviewer "Question: Explain HashMap buckets. Candidate: Buckets are linked lists that become trees at 8 nodes."`
      },
      {
        id: "sec-12-3",
        title: "Beyond SFT: Preference Alignment with DPO (Direct Preference Optimization)",
        content: `Supervised Fine-Tuning (SFT) teaches the model what to say, but does not teach it what NOT to say.
For example, two generated evaluations might both be technically accurate, but Evaluation A is constructive and encouraging while Evaluation B is harsh, condescending, or unhelpful.

Direct Preference Optimization (DPO):
DPO aligns model preferences directly using pairs of chosen (y_w) and rejected (y_l) responses:
L_DPO = - E_{(x, y_w, y_l)} [ log sigma( beta * log( pi_theta(y_w | x) / pi_ref(y_w | x) ) - beta * log( pi_theta(y_l | x) / pi_ref(y_l | x) ) ) ]

Where:
- pi_theta is the active policy model being trained.
- pi_ref is the frozen SFT model.
- beta controls deviation penalty from the reference model.
Unlike classical RLHF (Reinforcement Learning from Human Feedback), DPO eliminates the need to train a separate reward model or use unstable PPO reinforcement learning. DPO produces an exceptionally nuanced, encouraging, and fair interview persona.`
      }
    ]
  }
];

const practicalLabs = [
  {
    id: "lab-01",
    number: "01",
    title: "Conversational Dataset Engineering & JSONL Validation Suite",
    duration: "45 mins",
    difficulty: "Advanced",
    summary: "Build an automated Python dataset pipeline to parse, validate against a strict Pydantic schema, deduplicate using MinHash similarity, and partition into leak-free train/validation/test JSONL splits.",
    code: `import json
import hashlib
from typing import List
from pydantic import BaseModel, Field

class InterviewEvaluation(BaseModel):
    concept: str
    score: int = Field(ge=0, le=10)
    keyPoints: List[str]
    feedback: str
    followUp: str

def validate_and_deduplicate_dataset(raw_examples: list) -> list:
    """
    Validates JSON structure and removes duplicate prompts using SHA-256 fingerprinting.
    """
    seen_hashes = set()
    clean_examples = []
    
    for item in raw_examples:
        messages = item.get("messages", [])
        if len(messages) < 3:
            continue # Incomplete turn
        
        user_msg = next((m["content"] for m in messages if m["role"] == "user"), "")
        asst_msg = next((m["content"] for m in messages if m["role"] == "assistant"), "")
        
        # Deduplication hash on user prompt
        prompt_hash = hashlib.sha256(user_msg.strip().lower().encode("utf-8")).hexdigest()
        if prompt_hash in seen_hashes:
            continue
        seen_hashes.add(prompt_hash)
        
        # Validate that assistant response adheres to strict JSON schema
        try:
            parsed_data = json.loads(asst_msg)
            InterviewEvaluation(**parsed_data)
            clean_examples.append(item)
        except Exception as e:
            print(f"Skipping malformed example: {e}")
            continue

    print(f"Dataset Cleaned: {len(clean_examples)} valid examples retained out of {len(raw_examples)}.")
    return clean_examples

if __name__ == "__main__":
    sample_dataset = [
        {
            "messages": [
                {"role": "system", "content": "You are a Java Interviewer."},
                {"role": "user", "content": "What is encapsulation in Java?"},
                {"role": "assistant", "content": json.dumps({
                    "concept": "Encapsulation",
                    "score": 9,
                    "keyPoints": ["Data hiding with private fields", "Public getters and setters", "Maintaining class invariants"],
                    "feedback": "Comprehensive explanation of encapsulation.",
                    "followUp": "How does encapsulation relate to immutability in record classes?"
                })}
            ]
        }
    ]
    validated = validate_and_deduplicate_dataset(sample_dataset)`
  },
  {
    id: "lab-02",
    number: "02",
    title: "LoRA Supervised Fine-Tuning with PEFT & TRL",
    duration: "60 mins",
    difficulty: "Advanced",
    summary: "Configure and train a parameter-efficient Low-Rank Adapter on Qwen2.5-Coder using Hugging Face PEFT and TRL's SFTTrainer with cosine decay and evaluation checkpoints.",
    code: `import torch
from transformers import AutoTokenizer, AutoModelForCausalLM
from peft import LoraConfig, get_peft_model, TaskType
from trl import SFTTrainer, SFTConfig
from datasets import load_dataset

model_id = "Qwen/Qwen2.5-Coder-1.5B-Instruct"

# 1. Load Tokenizer & Model
tokenizer = AutoTokenizer.from_pretrained(model_id, trust_remote_code=True)
if tokenizer.pad_token is None:
    tokenizer.pad_token = tokenizer.eos_token

model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16 if torch.cuda.is_bf16_supported() else torch.float16,
    device_map="auto"
)

# 2. Configure LoRA (Low-Rank Adaptation)
lora_config = LoraConfig(
    task_type=TaskType.CAUSAL_LM,
    r=16,
    lora_alpha=32,
    lora_dropout=0.05,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
    bias="none"
)
model = get_peft_model(model, lora_config)
model.print_trainable_parameters()

# 3. Training Arguments
training_args = SFTConfig(
    output_dir="./output/java_interviewer_lora",
    num_train_epochs=3,
    per_device_train_batch_size=2,
    gradient_accumulation_steps=8,
    learning_rate=2e-4,
    warmup_ratio=0.05,
    lr_scheduler_type="cosine",
    logging_steps=10,
    eval_strategy="steps",
    eval_steps=50,
    save_strategy="steps",
    save_steps=50,
    save_total_limit=2,
    max_length=1024,
    report_to="none"
)

# 4. SFTTrainer Execution
trainer = SFTTrainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"],
    eval_dataset=dataset["validation"],
    processing_class=tokenizer
)
trainer.train()
trainer.model.save_pretrained("./artifacts/java_interviewer_lora_adapter")`
  },
  {
    id: "lab-03",
    number: "03",
    title: "QLoRA 4-bit NF4 Quantized Training & VRAM Benchmarking",
    duration: "50 mins",
    difficulty: "Advanced",
    summary: "Implement 4-bit NormalFloat (NF4) quantization with double quantization and paged optimizers to fine-tune the model under constrained GPU VRAM (<6 GB).",
    code: `import torch
from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig
from peft import LoraConfig, prepare_model_for_kbit_training, get_peft_model

model_id = "Qwen/Qwen2.5-Coder-1.5B-Instruct"

# 1. 4-bit NF4 Quantization Configuration
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",
    bnb_4bit_compute_dtype=torch.bfloat16,
    bnb_4bit_use_double_quant=True
)

tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    quantization_config=bnb_config,
    device_map="auto"
)

# 2. Enable gradient checkpointing and prepare for k-bit
model = prepare_model_for_kbit_training(model, use_gradient_checkpointing=True)

lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    lora_dropout=0.05,
    target_modules=["q_proj", "v_proj", "gate_proj", "down_proj"],
    bias="none",
    task_type="CAUSAL_LM"
)
model = get_peft_model(model, lora_config)

if torch.cuda.is_available():
    allocated = torch.cuda.memory_allocated() / (1024 ** 3)
    reserved = torch.cuda.memory_reserved() / (1024 ** 3)
    print(f"QLoRA Ready in VRAM -> Allocated: {allocated:.2f} GiB | Reserved: {reserved:.2f} GiB")`
  },
  {
    id: "lab-04",
    number: "04",
    title: "Multi-Metric Model Evaluation & Perplexity Profiling",
    duration: "45 mins",
    difficulty: "Advanced",
    summary: "Audit the fine-tuned model against the raw base model across Perplexity (PPL), JSON parsing validity %, scoring accuracy, and candidate misconception detection.",
    code: `import torch
import math
import json
from transformers import AutoTokenizer, AutoModelForCausalLM
from peft import PeftModel

def compute_perplexity(model, tokenizer, test_texts: list) -> float:
    """Computes test perplexity PPL = exp(loss)."""
    model.eval()
    total_loss = 0.0
    total_tokens = 0
    
    with torch.no_grad():
        for text in test_texts:
            enc = tokenizer(text, return_tensors="pt").to(model.device)
            labels = enc["input_ids"].clone()
            outputs = model(**enc, labels=labels)
            loss = outputs.loss
            tokens_in_sample = labels.size(1)
            total_loss += loss.item() * tokens_in_sample
            total_tokens += tokens_in_sample
            
    mean_loss = total_loss / max(1, total_tokens)
    return math.exp(mean_loss)

def evaluate_json_validity(model, tokenizer, test_prompts: list) -> float:
    """Calculates percentage of generated answers that parse as valid JSON."""
    valid_count = 0
    model.eval()
    for prompt in test_prompts:
        inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
        with torch.no_grad():
            output_tokens = model.generate(**inputs, max_new_tokens=300, temperature=0.1)
        resp_text = tokenizer.decode(output_tokens[0][inputs["input_ids"].size(1):], skip_special_tokens=True)
        try:
            json.loads(resp_text)
            valid_count += 1
        except Exception:
            pass
    return (valid_count / len(test_prompts)) * 100.0`
  },
  {
    id: "lab-05",
    number: "05",
    title: "LoRA Model Merging & Standalone Safetensors Export",
    duration: "40 mins",
    difficulty: "Advanced",
    summary: "Fuse trained LoRA adapter weights directly into the floating-point base model weights using merge_and_unload() and export standalone, zero-dependency safetensors.",
    code: `import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel

base_model_name = "Qwen/Qwen2.5-Coder-1.5B-Instruct"
adapter_directory = "./artifacts/java_interviewer_lora_adapter"
export_directory = "./artifacts/qwen2.5-coder-java-interviewer-merged"

print("[1] Loading unquantized base model in FP16...")
base_model = AutoModelForCausalLM.from_pretrained(
    base_model_name,
    torch_dtype=torch.float16,
    device_map="auto"
)
tokenizer = AutoTokenizer.from_pretrained(adapter_directory)

print("[2] Attaching LoRA adapter...")
model = PeftModel.from_pretrained(base_model, adapter_directory)

print("[3] Consolidating weights: W_merged = W_0 + (alpha/r)*B*A...")
merged_model = model.merge_and_unload()

print(f"[4] Serializing standalone safetensors to {export_directory}...")
merged_model.save_pretrained(export_directory, safe_serialization=True)
tokenizer.save_pretrained(export_directory)
print("Merge complete! Model ready for direct vLLM or Ollama deployment.")`
  }
];

const capstoneProject = {
  title: "PrepSpaces Java Technical Interview Evaluator Model",
  duration: "2 Weeks · Production Model Fine-Tuning & Deployment",
  overview: "Build, validate, merge, and serve a specialized technical interview evaluation model for PrepSpaces. Starting from Qwen2.5-Coder-1.5B-Instruct, engineer a 5,000-example conversational dataset covering Core Java, Concurrency, and Spring Framework, fine-tune using QLoRA with response-only loss masking, achieve >98% JSON schema adherence, consolidate weights, and deploy onto vLLM.",
  architectureMilestones: [
    {
      phase: "Milestone 1: Domain Dataset Engineering & Pydantic Validation",
      tasks: [
        "Curate 5,000 conversational JSONL examples spanning Core Java, JVM internals, Collections, Concurrency, and Spring.",
        "Implement programmatic schema validation ensuring strict compliance with the PrepSpaces evaluation JSON schema.",
        "Execute leak-free train (80%), validation (10%), and test (10%) splits partitioned by technical concept families."
      ]
    },
    {
      phase: "Milestone 2: QLoRA Fine-Tuning & Hyperparameter Optimization",
      tasks: [
        "Load Qwen2.5-Coder-1.5B in 4-bit NF4 with double quantization and gradient checkpointing.",
        "Attach LoRA adapters (r=16, alpha=32) targeting all attention and MLP projection layers.",
        "Train using TRL SFTTrainer with cosine learning rate schedule (2e-4) and response-only loss masking."
      ]
    },
    {
      phase: "Milestone 3: Comprehensive Multi-Metric Benchmark Suite",
      tasks: [
        "Measure test perplexity reduction from raw base model to fine-tuned model.",
        "Benchmark JSON schema adherence, grading accuracy against human senior engineer benchmarks, and follow-up quality.",
        "Conduct LLM-as-a-Judge pairwise evaluation using GPT-4o on 100 blind test prompts."
      ]
    },
    {
      phase: "Milestone 4: Model Consolidation & vLLM Production Serving",
      tasks: [
        "Fuse adapter weights into unquantized FP16 base model using merge_and_unload().",
        "Export standalone safetensors and package an Ollama Modelfile for local evaluation.",
        "Launch production vLLM serving container with PagedAttention and continuous batching."
      ]
    }
  ],
  deliverables: [
    "Clean, deduplicated 5,000-example conversational JSONL dataset with Pydantic validation scripts.",
    "Trained LoRA adapter weights and training telemetry logs (Weights & Biases / TensorBoard).",
    "Consolidated FP16 merged model safetensors ready for standalone deployment.",
    "Comprehensive validation report comparing Base vs. Fine-Tuned model across PPL, JSON validity, and grading accuracy.",
    "Production vLLM serving launch configuration and Ollama Modelfile definition."
  ]
};

const codingAssignments = [
  {
    id: "task-01",
    title: "LoRA Parameter Count Calculator",
    difficulty: "Easy",
    instructions: "Write a function 'compute_lora_params(d_in, d_out, rank)' returning trainable parameters for matrices A and B: (d_in * r) + (r * d_out).",
    starterCode: `def compute_lora_params(d_in: int, d_out: int, rank: int) -> int:
    """
    Computes trainable parameters for low-rank adapter matrices B and A.
    """
    return (d_in * rank) + (rank * d_out)`
  },
  {
    id: "task-02",
    title: "LoRA Parameter Reduction Percentage",
    difficulty: "Easy",
    instructions: "Write 'calculate_param_reduction(d_in, d_out, rank)' returning the percentage of parameters saved compared to full fine-tuning.",
    starterCode: `def calculate_param_reduction(d_in: int, d_out: int, rank: int) -> float:
    full_params = d_in * d_out
    lora_params = (d_in * rank) + (rank * d_out)
    return round(((full_params - lora_params) / full_params) * 100.0, 2)`
  },
  {
    id: "task-03",
    title: "Effective LoRA Scaling Multiplier",
    difficulty: "Easy",
    instructions: "Implement 'calculate_scaling_factor(lora_alpha, rank)' returning alpha / r.",
    starterCode: `def calculate_scaling_factor(lora_alpha: float, rank: int) -> float:
    if rank <= 0:
        raise ValueError("Rank must be positive")
    return lora_alpha / rank`
  },
  {
    id: "task-04",
    title: "Conversational Turn Counter",
    difficulty: "Easy",
    instructions: "Write 'count_dialogue_turns(jsonl_line)' that parses a JSONL string and returns a dictionary with counts of system, user, and assistant turns.",
    starterCode: `import json

def count_dialogue_turns(jsonl_line: str) -> dict:
    data = json.loads(jsonl_line)
    messages = data.get("messages", [])
    counts = {"system": 0, "user": 0, "assistant": 0}
    for m in messages:
        role = m.get("role", "")
        if role in counts:
            counts[role] += 1
    return counts`
  },
  {
    id: "task-05",
    title: "Perplexity Calculator from Cross-Entropy Loss",
    difficulty: "Easy",
    instructions: "Write 'compute_perplexity(loss)' that returns exp(loss), handling edge cases.",
    starterCode: `import math

def compute_perplexity(loss: float) -> float:
    try:
        return math.exp(loss)
    except OverflowError:
        return float('inf')`
  },
  {
    id: "task-06",
    title: "Effective Batch Size Formula",
    difficulty: "Easy",
    instructions: "Write 'compute_effective_batch_size(batch_per_device, grad_accum_steps, num_gpus)' returning total effective batch size.",
    starterCode: `def compute_effective_batch_size(batch_per_device: int, grad_accum_steps: int, num_gpus: int = 1) -> int:
    return batch_per_device * grad_accum_steps * num_gpus`
  },
  {
    id: "task-07",
    title: "Response-Only Masking Mask Generator",
    difficulty: "Medium",
    instructions: "Write a function 'mask_prompt_labels(token_ids, prompt_length)' that returns a list of labels where prompt tokens are replaced with -100.",
    starterCode: `def mask_prompt_labels(token_ids: list, prompt_length: int) -> list:
    labels = token_ids.copy()
    for i in range(min(prompt_length, len(labels))):
        labels[i] = -100
    return labels`
  },
  {
    id: "task-08",
    title: "SHA-256 Prompt Deduplication Filter",
    difficulty: "Medium",
    instructions: "Write 'filter_duplicate_prompts(dataset)' that takes a list of conversational dicts and removes duplicates based on the user prompt.",
    starterCode: `import hashlib

def filter_duplicate_prompts(dataset: list) -> list:
    seen = set()
    unique = []
    for row in dataset:
        user_text = next((m["content"] for m in row.get("messages", []) if m["role"] == "user"), "")
        h = hashlib.sha256(user_text.strip().lower().encode("utf-8")).hexdigest()
        if h not in seen:
            seen.add(h)
            unique.append(row)
    return unique`
  },
  {
    id: "task-09",
    title: "Concept-Stratified Splitter",
    difficulty: "Medium",
    instructions: "Implement 'split_by_concept(dataset, train_ratio=0.8)' that partitions examples such that all examples for a given concept remain in the same split.",
    starterCode: `def split_by_concept(dataset: list, train_ratio: float = 0.8) -> tuple:
    concepts = list(set(d.get("concept") for d in dataset if "concept" in d))
    cutoff = int(len(concepts) * train_ratio)
    train_concepts = set(concepts[:cutoff])
    
    train_set = [d for d in dataset if d.get("concept") in train_concepts]
    test_set = [d for d in dataset if d.get("concept") not in train_concepts]
    return train_set, test_set`
  },
  {
    id: "task-10",
    title: "LoRA Weight Fusion Simulator",
    difficulty: "Medium",
    instructions: "Write a function 'fuse_lora_weights(w0, b, a, alpha, rank)' using NumPy to compute W' = W0 + (alpha/rank) * (B @ A).",
    starterCode: `import numpy as np

def fuse_lora_weights(w0: np.ndarray, b: np.ndarray, a: np.ndarray, alpha: float, rank: int) -> np.ndarray:
    scaling = alpha / rank
    delta_w = scaling * (b @ a)
    return w0 + delta_w`
  },
  {
    id: "task-11",
    title: "JSON Output Syntactic Auditor",
    difficulty: "Easy",
    instructions: "Write 'audit_json_compliance(outputs)' returning compliance percentage of strings that parse as valid JSON.",
    starterCode: `import json

def audit_json_compliance(outputs: list) -> float:
    if not outputs:
        return 0.0
    valid = sum(1 for text in outputs if is_valid_json(text))
    return round((valid / len(outputs)) * 100.0, 2)

def is_valid_json(text: str) -> bool:
    try:
        json.loads(text)
        return True
    except Exception:
        return False`
  },
  {
    id: "task-12",
    title: "Pydantic Schema Validator for Interview Evaluation",
    difficulty: "Medium",
    instructions: "Define a Pydantic model 'RubricEvaluation' with concept (str), score (0-10 int), key_points (list[str]), and feedback (str).",
    starterCode: `from pydantic import BaseModel, Field
from typing import List

class RubricEvaluation(BaseModel):
    concept: str
    score: int = Field(ge=0, le=10)
    key_points: List[str]
    feedback: str`
  },
  {
    id: "task-13",
    title: "Cosine Learning Rate Schedule Calculator",
    difficulty: "Medium",
    instructions: "Write 'get_cosine_lr(current_step, total_steps, initial_lr, min_lr=0.0)' returning the scheduled learning rate.",
    starterCode: `import math

def get_cosine_lr(current_step: int, total_steps: int, initial_lr: float, min_lr: float = 0.0) -> float:
    if current_step >= total_steps:
        return min_lr
    progress = current_step / total_steps
    cosine_decay = 0.5 * (1.0 + math.cos(math.pi * progress))
    return min_lr + (initial_lr - min_lr) * cosine_decay`
  },
  {
    id: "task-14",
    title: "Linear Warmup Schedule Calculator",
    difficulty: "Easy",
    instructions: "Write 'get_warmup_lr(current_step, warmup_steps, target_lr)' linearly ramping from 0 to target_lr.",
    starterCode: `def get_warmup_lr(current_step: int, warmup_steps: int, target_lr: float) -> float:
    if current_step >= warmup_steps:
        return target_lr
    return target_lr * (current_step / max(1, warmup_steps))`
  },
  {
    id: "task-15",
    title: "VRAM Weight Estimator across Precisions",
    difficulty: "Easy",
    instructions: "Write 'estimate_weight_vram(params_b, precision_str)' returning raw GiB for FP32, FP16, INT8, or NF4.",
    starterCode: `def estimate_weight_vram(params_billion: float, precision: str) -> float:
    bytes_map = {"FP32": 4.0, "FP16": 2.0, "BF16": 2.0, "INT8": 1.0, "NF4": 0.5}
    if precision not in bytes_map:
        raise ValueError(f"Unknown precision: {precision}")
    bytes_total = params_billion * 1e9 * bytes_map[precision]
    return round(bytes_total / (1024 ** 3), 2)`
  },
  {
    id: "task-16",
    title: "Early Stopping Patience Monitor",
    difficulty: "Medium",
    instructions: "Build an 'EarlyStoppingMonitor' class with add_loss(val_loss) returning True when patience is exhausted.",
    starterCode: `class EarlyStoppingMonitor:
    def __init__(self, patience: int = 3, min_delta: float = 0.001):
        self.patience = patience
        self.min_delta = min_delta
        self.best_loss = float("inf")
        self.bad_steps = 0

    def add_loss(self, val_loss: float) -> bool:
        if val_loss < self.best_loss - self.min_delta:
            self.best_loss = val_loss
            self.bad_steps = 0
            return False
        self.bad_steps += 1
        return self.bad_steps >= self.patience`
  },
  {
    id: "task-17",
    title: "ChatML Formatter with Special Tokens",
    difficulty: "Medium",
    instructions: "Write a function 'format_chatml(system_text, user_text, asst_text)' creating ChatML string with <|im_start|> and <|im_end|> tags.",
    starterCode: `def format_chatml(system_text: str, user_text: str, asst_text: str = None) -> str:
    res = f"<|im_start|>system\\n{system_text}<|im_end|>\\n<|im_start|>user\\n{user_text}<|im_end|>\\n"
    if asst_text is not None:
        res += f"<|im_start|>assistant\\n{asst_text}<|im_end|>\\n"
    return res`
  },
  {
    id: "task-18",
    title: "DPO Pair Loss Calculator",
    difficulty: "Hard",
    instructions: "Implement 'compute_dpo_loss(logprob_w, logprob_l, ref_logprob_w, ref_logprob_l, beta=0.1)'.",
    starterCode: `import math

def compute_dpo_loss(logprob_w: float, logprob_l: float, ref_w: float, ref_l: float, beta: float = 0.1) -> float:
    log_ratio_w = logprob_w - ref_w
    log_ratio_l = logprob_l - ref_l
    logits = beta * (log_ratio_w - log_ratio_l)
    # Binary cross-entropy: -log(sigmoid(logits)) = log(1 + exp(-logits))
    return math.log(1.0 + math.exp(-logits))`
  }
];

const theoryQuestions = [
  {
    id: "theory-01",
    question: "What is fine-tuning, and why is it necessary when general foundation models already possess vast coding knowledge?",
    answer: "Fine-tuning continues gradient-based training of an existing pretrained model on specialized domain examples. While general models possess broad knowledge, they fail to reliably adhere to strict behavioral contracts—such as formatting responses as validated JSON schemas, consistently applying a 10-point scoring rubric, probing for specific JVM architectural nuances, or asking relevant technical follow-up questions without verbose preamble."
  },
  {
    id: "theory-02",
    question: "Compare Prompt Engineering, Retrieval-Augmented Generation (RAG), and Supervised Fine-Tuning (SFT).",
    answer: "Prompt engineering steers a frozen model via in-context instructions at inference time; it requires zero training but suffers high TTFT latency, token billing bloat, and inconsistent schema adherence. RAG provides dynamic, verifiable factual grounding from external vector databases without updating weights. SFT modifies model parameters to establish strict behavioral habits, specialized vocabulary, pedagogical tone, and consistent output formatting."
  },
  {
    id: "theory-03",
    question: "How should an enterprise platform combine Fine-Tuning, RAG, and Prompt Engineering?",
    answer: "Production systems combine all three into a layered architecture: Fine-Tuning embeds consistent behavior and strict JSON formatting into the model's weights; RAG dynamically retrieves the latest technical specifications, company coding rubrics, or candidate resumes; and Prompt Engineering supplies session-specific ephemeral parameters (e.g., candidate seniority level, time remaining)."
  },
  {
    id: "theory-04",
    question: "What is the primary memory bottleneck during full-parameter fine-tuning of an 8B model?",
    answer: "The primary bottleneck is the optimizer states. In standard 16-bit full fine-tuning using AdamW, storing the model weights (14 GB) and gradients (14 GB) requires 28 GB, but AdamW maintains 32-bit float copies of first momentum (m), second momentum (v), and master weights (7B * 12 bytes = 84 GB). Together with activation memory, full fine-tuning exceeds 120 GB VRAM, requiring multiple enterprise GPUs."
  },
  {
    id: "theory-05",
    question: "What is Parameter-Efficient Fine-Tuning (PEFT), and how does it prevent catastrophic forgetting?",
    answer: "PEFT keeps 100% of the original pretrained model weights frozen and trains only a small auxiliary set of adapter parameters (e.g. 0.1% to 1.0% of total weights). Because the foundational base parameters are untouched, the model's core linguistic, reasoning, and world knowledge representations remain preserved, avoiding catastrophic forgetting while requiring only ~18 GB VRAM for an 8B model."
  },
  {
    id: "theory-06",
    question: "Explain the Intrinsic Rank Hypothesis in the context of Low-Rank Adaptation (LoRA).",
    answer: "The Intrinsic Rank Hypothesis (Hu et al., 2021) asserts that task-specific adaptation updates (Delta W) reside in a manifold of much lower intrinsic dimension than the full parameter space. Consequently, a massive weight update matrix Delta W in R^{d x k} can be accurately represented as the product of two low-rank matrices B in R^{d x r} and A in R^{r x k} where r << min(d, k), reducing trainable parameters by over 99%."
  },
  {
    id: "theory-07",
    question: "Why is matrix A initialized with Gaussian random values while matrix B is initialized with zeros in LoRA?",
    answer: "Initializing B to all zeros ensures that Delta W = B * A = 0 at step zero of training. Thus, W' = W_0 + 0 = W_0, guaranteeing that the model begins fine-tuning producing outputs identical to the pretrained base model, preventing catastrophic disruption during early forward passes."
  },
  {
    id: "theory-08",
    question: "What is the purpose of the alpha / r scaling factor in LoRA?",
    answer: "The scaling factor (alpha / r) normalizes the magnitude of adapter activations relative to the base weights. Because the update is scaled by alpha / r, an engineer can adjust the rank r (e.g. from 8 to 16 or 32) without needing to re-tune the learning rate, as the relative activation magnitude remains stabilized."
  },
  {
    id: "theory-09",
    question: "What are the four core technical innovations introduced by QLoRA?",
    answer: "1. 4-bit NormalFloat (NF4): Information-theoretically optimal quantiles for normally distributed weights. 2. Double Quantization (DQ): Quantizing quantization scale constants from FP32 to FP8, saving 0.37 bits/param. 3. Paged Optimizers: Automatic CUDA Unified Memory swapping of optimizer pages to CPU RAM during VRAM spikes. 4. Mixed-Precision Compute: Storing weights in 4-bit NF4 while dequantizing to BF16 for forward/backward matrix multiplications."
  },
  {
    id: "theory-10",
    question: "How does 4-bit NormalFloat (NF4) differ from standard uniform INT4 quantization?",
    answer: "Standard INT4 establishes uniformly spaced grid bins between minimum and maximum values, which wastes resolution on sparse tails. NF4 constructs non-uniform bins tailored to Gaussian distributions (W ~ N(0, sigma^2)) such that each 4-bit index represents an equal probability mass (quantile), preserving significantly higher mathematical precision."
  },
  {
    id: "theory-11",
    question: "What is response-only loss masking, and why is it essential in instruction fine-tuning?",
    answer: "Response-only loss masking sets target label tokens for the system prompt and user question to -100, which PyTorch's cross-entropy loss ignores. This ensures loss gradients are calculated exclusively on the assistant's generated tokens, preventing the model from wasting adapter capacity learning to predict the user's prompt wording."
  },
  {
    id: "theory-12",
    question: "Why should dataset splits (train, validation, test) be partitioned by concept rather than random rows?",
    answer: "Random row splitting causes data leakage: if multiple paraphrased variations of 'Explain HashMap collision resolution' exist, some will land in train while others land in test. The test evaluation would merely test memorization rather than generalization. Partitioning by concept ensures the test set evaluates unseen technical domains."
  },
  {
    id: "theory-13",
    question: "Describe the typical symptoms of overfitting during fine-tuning.",
    answer: "Overfitting is identified by a widening generalization gap: training loss continues dropping toward near-zero while validation loss bottoms out and begins steadily increasing across evaluation steps. The model performs flawlessly on training examples but fails or hallucinates on unseen test prompts."
  },
  {
    id: "theory-14",
    question: "What is model merging in the context of LoRA, and how does merge_and_unload() work?",
    answer: "Model merging computes the low-rank delta matrix Delta W = (alpha/r) * (B @ A) and adds it directly into the base model weights W_0. The adapter structures are unloaded, leaving a single consolidated set of standard neural network weights that can be served with zero latency penalty and zero PEFT runtime dependencies."
  },
  {
    id: "theory-15",
    question: "Why must the base model be loaded in FP16 or BF16 when executing merge_and_unload()?",
    answer: "If adapter weights are merged into an already 4-bit quantized base model, numerical roundoff and dequantization errors corrupt the merged weights, destroying model output fluency. Merging must occur in full floating-point precision (FP16 or BF16)."
  },
  {
    id: "theory-16",
    question: "What is Perplexity (PPL), and what are its strengths and limitations in domain evaluation?",
    answer: "Perplexity PPL = exp(loss) measures how 'surprised' the model is by target tokens. A significant drop in test perplexity confirms that the model has internalized domain vocabulary and syntactic patterns. However, low perplexity does not verify factual accuracy, absence of bias, or correct pedagogical scoring."
  },
  {
    id: "theory-17",
    question: "How does Direct Preference Optimization (DPO) differ from Supervised Fine-Tuning (SFT)?",
    answer: "SFT trains on single target demonstrations (supervised input-output pairs). DPO trains on pairwise preference data containing a prompt, a chosen response (y_w), and a rejected response (y_l). DPO directly optimizes the policy model to favor constructive, empathetic responses over harsh or unhelpful answers without requiring a separate reinforcement learning reward model."
  },
  {
    id: "theory-18",
    question: "Explain the function of Gradient Checkpointing in memory-efficient fine-tuning.",
    answer: "Standard backpropagation stores all intermediate forward-pass activation tensors in VRAM. Gradient checkpointing discards intermediate activations during the forward pass and selectively recomputes them on-the-fly during the backward pass. This reduces activation VRAM by 60–80% at the cost of ~20–30% additional compute time."
  },
  {
    id: "theory-19",
    question: "What is the difference between Continued Pretraining and Supervised Fine-Tuning?",
    answer: "Continued pretraining exposes the model to massive unstructured domain text (e.g. 50 GB of Java source code and textbooks) using next-token prediction to build deep domain vocabulary. SFT trains on structured, conversational input-output examples to shape conversational persona, question-answering, and formatting behavior."
  },
  {
    id: "theory-20",
    question: "Why should special tokens be applied via apply_chat_template rather than manual string formatting?",
    answer: "Different models utilize distinct delimiter syntax (ChatML uses <|im_start|> and <|im_end|>; Llama uses <|start_header_id|> and <|eot_id|>). Manual string concatenation often misses hidden trailing whitespace or special token IDs, causing the model to generate runaway text without proper turn termination."
  },
  {
    id: "theory-21",
    question: "What is effective batch size, and how do Gradient Accumulation Steps facilitate it on single GPUs?",
    answer: "Effective batch size = Per_Device_Batch_Size * Gradient_Accumulation_Steps * Num_GPUs. If physical VRAM only allows a batch size of 2, setting gradient accumulation to 8 accumulates gradients across 8 mini-batches before executing optimizer.step(), emulating a stable batch size of 16 without extra VRAM."
  },
  {
    id: "theory-22",
    question: "What are TIES-Merging and DARE in multi-adapter consolidation?",
    answer: "TIES (Trimming, Electing Sign, Merging) resolves parameter interference when combining multiple adapters by trimming minor changes and unifying gradient sign conflicts. DARE (Drop And REscale) randomly zeroes out up to 90% of delta parameters and rescales remaining weights, allowing multiple specialized adapters to be merged into a single multi-capability model."
  },
  {
    id: "theory-23",
    question: "How does vLLM dynamically serve multiple LoRA adapters without merging?",
    answer: "vLLM's multi-LoRA feature keeps a single base model in VRAM and dynamically applies requested adapter weights (e.g. java-adapter, python-adapter) during the continuous batch forward pass based on the request's model header, allowing multi-tenant specialized serving at zero extra base-model memory cost."
  },
  {
    id: "theory-24",
    question: "What is the significance of the rank hyperparameter r in LoRA?",
    answer: "Rank r defines the inner dimension of matrices B and A. A low rank (r=4 or 8) is extremely parameter-efficient and prevents overfitting on small datasets. A higher rank (r=16, 32, or 64) provides greater expressive capacity for complex domain adaptation and multi-step reasoning, at the cost of slightly higher VRAM and computation."
  },
  {
    id: "theory-25",
    question: "Why should temperature be set close to zero (e.g., 0.1) when evaluating JSON schema compliance?",
    answer: "Higher temperature introduces stochastic sampling noise, increasing the probability of generating irregular punctuation or extra markdown commentary that invalidates strict JSON parsing. A low temperature produces greedy, deterministic token selection that accurately reflects learned schema habits."
  },
  {
    id: "theory-26",
    question: "What role does lora_dropout play in low-rank adaptation?",
    answer: "lora_dropout randomly drops activation units inside the low-rank adapter during forward passes. This regularizes the adapter, preventing individual low-rank weights from co-adapting and memorizing exact phrases from the training set."
  },
  {
    id: "theory-27",
    question: "Why is an LLM-as-a-Judge pairwise evaluation framework more reliable than single-model absolute scoring?",
    answer: "Single-model scoring suffers from score compression and scale bias. Pairwise evaluation presents two candidate responses side-by-side to an impartial judge model, forcing a direct comparative decision on technical accuracy, clarity, and feedback quality, yielding higher correlation with human preferences."
  },
  {
    id: "theory-28",
    question: "What is the consequence of choosing a learning rate that is too high during LoRA fine-tuning?",
    answer: "An excessively high learning rate (e.g. >1e-3) causes gradient explosions in the randomly initialized adapter matrices, destabilizing the training loss and corrupting the base model's coherent output capabilities."
  },
  {
    id: "theory-29",
    question: "How does an Ollama Modelfile package a merged fine-tuned model for local execution?",
    answer: "The Modelfile references the merged safetensors directory (FROM ./path), sets runtime generation hyperparameters (temperature, top_p, stop tokens), and embeds the persistent system prompt. Ollama packages this into a single binary format for cross-platform local inference."
  },
  {
    id: "theory-30",
    question: "Summarize the complete lifecycle of developing a production-grade fine-tuned domain LLM.",
    answer: "1. Problem definition and schema specification. 2. Dataset curation, deduplication, and leak-free splitting. 3. QLoRA 4-bit configuration with response-only loss masking. 4. Training execution with cosine decay and early stopping. 5. Multi-faceted evaluation (PPL, schema validity, LLM-as-a-judge). 6. FP16 merge_and_unload consolidation. 7. Production deployment with vLLM PagedAttention and continuous monitoring."
  }
];

const quizQuestions = [
  {
    id: "quiz-01",
    question: "What is the primary objective of fine-tuning an LLM for a domain-specific application?",
    options: [
      "To increase the GPU internet download bandwidth",
      "To adapt the model's behavior, tone, evaluation criteria, and output formatting to specific domain requirements",
      "To replace the model's neural network with a relational database",
      "To compress text into image files"
    ],
    correctIndex: 1,
    explanation: "Fine-tuning adapts model behavior, style, scoring criteria, and formatting habits to domain specifications."
  },
  {
    id: "quiz-02",
    question: "In the LoRA weight decomposition W' = W_0 + (alpha / r) * B * A, what are the dimensions of matrix B if W_0 is d x k and rank is r?",
    options: [
      "k x d",
      "d x r",
      "r x k",
      "r x r"
    ],
    correctIndex: 1,
    explanation: "Matrix B has dimension d x r, and matrix A has dimension r x k, producing a product B * A of dimension d x k."
  },
  {
    id: "quiz-03",
    question: "Why is matrix B initialized strictly to zeros at the beginning of LoRA training?",
    options: [
      "To prevent PyTorch memory leaks",
      "To ensure that Delta W = B * A = 0 initially, meaning the model starts training from the exact base model output",
      "Because zero matrices execute faster on GPUs",
      "To bypass CUDA gradient calculations"
    ],
    correctIndex: 1,
    explanation: "Initializing B to zero ensures Delta W is zero at step 0, preserving the base model's initial outputs."
  },
  {
    id: "quiz-04",
    question: "What critical memory advantage does QLoRA provide over standard LoRA?",
    options: [
      "It completely eliminates the need for an optimizer",
      "It compresses the frozen base model weights into 4-bit NormalFloat (NF4), dramatically reducing baseline VRAM",
      "It trains only on CPU host RAM",
      "It runs without a tokenizer"
    ],
    correctIndex: 1,
    explanation: "QLoRA loads the frozen base weights in 4-bit NF4, slashing base memory by up to 75% while training high-precision adapters."
  },
  {
    id: "quiz-05",
    question: "Why is response-only loss masking (setting prompt labels to -100) essential during supervised fine-tuning?",
    options: [
      "It prevents the tokenizer from encoding punctuation",
      "It prevents the optimizer from updating parameters based on predicting the user prompt, focusing learning on assistant responses",
      "It converts the model from autoregressive to diffusion",
      "It prevents GPU overheating"
    ],
    correctIndex: 1,
    explanation: "Masking prompt tokens ensures the model is penalized and trained strictly for generating correct target assistant responses."
  },
  {
    id: "quiz-06",
    question: "What is catastrophic forgetting in LLM fine-tuning?",
    options: [
      "When a GPU crashes due to a power outage",
      "When training on a narrow domain degrades or erases the model's previously learned general reasoning capabilities",
      "When a dataset file is accidentally deleted from disk",
      "When the tokenizer runs out of token IDs"
    ],
    correctIndex: 1,
    explanation: "Catastrophic forgetting occurs when updates over a specialized dataset overwrite foundational reasoning and language knowledge."
  },
  {
    id: "quiz-07",
    question: "What happens when you execute merge_and_unload() on a trained PeftModel?",
    options: [
      "The adapter weights are deleted permanently",
      "The low-rank delta weights (alpha/r)*B*A are mathematically fused into the base weights, yielding a standard standalone model",
      "The model is uploaded automatically to Hugging Face Hub",
      "The dataset is converted into JSONL format"
    ],
    correctIndex: 1,
    explanation: "merge_and_unload() adds the adapter updates directly into the base weights and unloads the adapter modules, creating a standalone model."
  },
  {
    id: "quiz-08",
    question: "Why should you NOT merge a LoRA adapter into an already 4-bit quantized base model?",
    options: [
      "4-bit models cannot be saved to disk",
      "Adding floating-point adapter updates into low-precision quantized weights introduces severe numerical corruption",
      "PyTorch forbids using Python with 4-bit models",
      "Safetensors only supports 8-bit models"
    ],
    correctIndex: 1,
    explanation: "Merging into 4-bit quantized weights causes precision loss and output corruption; merging must occur in FP16 or BF16."
  },
  {
    id: "quiz-09",
    question: "If training loss continues dropping toward 0.1 while validation loss climbs from 1.1 to 1.8, what is occurring?",
    options: [
      "Underfitting",
      "Optimal convergence",
      "Overfitting (memorization)",
      "Zero gradient flow"
    ],
    correctIndex: 2,
    explanation: "A widening gap where training loss plummets while validation loss increases is the textbook hallmark of overfitting."
  },
  {
    id: "quiz-010",
    question: "How does Direct Preference Optimization (DPO) differ from traditional RLHF?",
    options: [
      "DPO requires training a separate reward model and running PPO reinforcement learning",
      "DPO optimizes policy parameters directly on pairwise chosen/rejected data using closed-form mathematical substitution",
      "DPO only works on computer vision models",
      "DPO does not require any preference data"
    ],
    correctIndex: 1,
    explanation: "DPO mathematically reparameterizes the reward function, training directly on pairwise chosen/rejected examples without complex RL loops."
  },
  {
    id: "quiz-011",
    question: "What is the typical learning rate used for LoRA supervised fine-tuning?",
    options: [
      "1e-1 (0.1)",
      "1e-4 to 3e-4 (e.g. 2e-4)",
      "1e-7",
      "5.0"
    ],
    correctIndex: 1,
    explanation: "LoRA adapters are small, randomly initialized matrices that typically require learning rates around 1e-4 to 3e-4."
  },
  {
    id: "quiz-012",
    question: "Why is Perplexity (PPL) alone insufficient to prove that a fine-tuned model is production-ready?",
    options: [
      "Perplexity cannot be computed on modern GPUs",
      "Perplexity only measures token predictability fluency, but does not verify technical correctness or scoring fairness",
      "Perplexity is only defined for classification models",
      "Perplexity increases as the model gets better"
    ],
    correctIndex: 1,
    explanation: "Perplexity measures next-token probability confidence, but does not evaluate pedagogical fairness, absence of hallucinations, or logic."
  }
];

const competenciesChecklist = [
  { id: "comp-01", label: "I can explain how fine-tuning fundamentally differs from prompt engineering and RAG." },
  { id: "comp-02", label: "I can design a hybrid architecture combining Fine-Tuning, RAG, and Prompt Engineering." },
  { id: "comp-03", label: "I understand the VRAM bottlenecks of full-parameter fine-tuning (AdamW optimizer states)." },
  { id: "comp-04", label: "I understand how Parameter-Efficient Fine-Tuning (PEFT) prevents catastrophic forgetting." },
  { id: "comp-05", label: "I can design conversational JSONL datasets conforming to standard ChatML schemas." },
  { id: "comp-06", label: "I know how to curate synthetic training datasets with teacher LLMs and Pydantic validators." },
  { id: "comp-07", label: "I can execute concept-stratified, leak-free train/validation/test dataset splits." },
  { id: "comp-08", label: "I understand the Intrinsic Rank Hypothesis underlying Low-Rank Adaptation (LoRA)." },
  { id: "comp-09", label: "I can calculate parameter reductions and scaling factors for LoRA adapter matrices B and A." },
  { id: "comp-10", label: "I know why matrix B is initialized to zeros and matrix A is initialized with Gaussian noise." },
  { id: "comp-11", label: "I understand how to configure LoRA target modules across attention and MLP projections." },
  { id: "comp-12", label: "I understand the mechanics of 4-bit NormalFloat (NF4) and Double Quantization in QLoRA." },
  { id: "comp-13", label: "I understand how Paged Optimizers prevent CUDA out-of-memory crashes via unified memory." },
  { id: "comp-14", label: "I can implement response-only loss masking with -100 label padding in SFT pipelines." },
  { id: "comp-15", label: "I can configure TRL's SFTTrainer with cosine schedules, warmup, and gradient accumulation." },
  { id: "comp-16", label: "I can analyze training and validation loss curves to diagnose underfitting vs overfitting." },
  { id: "comp-17", label: "I understand how early stopping, LoRA dropout, and weight decay regularize model adaptation." },
  { id: "comp-18", label: "I can calculate and interpret Perplexity (PPL) on held-out domain evaluation sets." },
  { id: "comp-19", label: "I can build automated testing suites to audit JSON schema compliance and negative case scoring." },
  { id: "comp-20", label: "I understand how to design an LLM-as-a-Judge pairwise evaluation framework." },
  { id: "comp-21", label: "I can consolidate LoRA adapters into base weights using merge_and_unload() in FP16/BF16." },
  { id: "comp-22", label: "I understand multi-adapter blending techniques including TIES-Merging and DARE." },
  { id: "comp-23", label: "I can deploy fine-tuned merged models or dynamic LoRA adapters using vLLM." },
  { id: "comp-24", label: "I can package fine-tuned models into Ollama Modelfiles for local engineering workflows." },
  { id: "comp-25", label: "I understand how Direct Preference Optimization (DPO) aligns post-SFT models without PPO." }
];

const learningResources = [
  {
    title: "Hugging Face PEFT Documentation",
    url: "https://huggingface.co/docs/peft/index",
    description: "Official guide to Parameter-Efficient Fine-Tuning: LoRA, QLoRA, Prefix Tuning, and adapter management."
  },
  {
    title: "Hugging Face TRL (Transformer Reinforcement Learning) & SFTTrainer",
    url: "https://huggingface.co/docs/trl/index",
    description: "Complete guide to Supervised Fine-Tuning, response loss masking, DPO, and preference alignment."
  },
  {
    title: "LoRA: Low-Rank Adaptation of Large Language Models (Hu et al.)",
    url: "https://arxiv.org/abs/2106.09685",
    description: "The seminal research paper introducing low-rank matrix decomposition for parameter-efficient adaptation."
  },
  {
    title: "QLoRA: Efficient Finetuning of Quantized LLMs (Dettmers et al.)",
    url: "https://arxiv.org/abs/2305.14314",
    description: "Groundbreaking research proving 4-bit NormalFloat (NF4) quantization, double quantization, and paged optimizers."
  },
  {
    title: "Qwen2.5-Coder Model Architecture & Technical Report",
    url: "https://huggingface.co/Qwen",
    description: "Official repository and specifications for the Qwen2.5-Coder open-weights foundation model series."
  },
  {
    title: "Direct Preference Optimization (DPO) Paper (Rafailov et al.)",
    url: "https://arxiv.org/abs/2305.18290",
    description: "Mathematical formulation of closed-form preference optimization bypassing classical reinforcement learning."
  },
  {
    title: "vLLM Production Multi-LoRA Serving Documentation",
    url: "https://docs.vllm.ai/en/latest/models/lora.html",
    description: "Official guide to dynamic multi-adapter serving and continuous batching with vLLM."
  },
  {
    title: "BitsAndBytes 8-bit & 4-bit Quantization Library",
    url: "https://huggingface.co/docs/bitsandbytes/index",
    description: "Reference manual for CUDA quantization kernels, 8-bit optimizers, and 4-bit linear layers."
  }
];

const targetPath = path.resolve(__dirname, '../src/Componets/aiFineTuningDomainData.js');

const fileContent = `// Module 21: Fine-Tuning LLMs for Domain-Specific Applications Data
// Advanced AI Engineering & Generative AI

export const overview = ${JSON.stringify(overview, null, 2)};

export const curriculumUnits = ${JSON.stringify(curriculumUnits, null, 2)};

export const practicalLabs = ${JSON.stringify(practicalLabs, null, 2)};

export const capstoneProject = ${JSON.stringify(capstoneProject, null, 2)};

export const codingAssignments = ${JSON.stringify(codingAssignments, null, 2)};

export const theoryQuestions = ${JSON.stringify(theoryQuestions, null, 2)};

export const quizQuestions = ${JSON.stringify(quizQuestions, null, 2)};

export const competenciesChecklist = ${JSON.stringify(competenciesChecklist, null, 2)};

export const learningResources = ${JSON.stringify(learningResources, null, 2)};

export default {
  overview,
  curriculumUnits,
  practicalLabs,
  capstoneProject,
  codingAssignments,
  theoryQuestions,
  quizQuestions,
  competenciesChecklist,
  learningResources
};
`;

fs.writeFileSync(targetPath, fileContent, 'utf-8');
console.log('Successfully written to', targetPath);
