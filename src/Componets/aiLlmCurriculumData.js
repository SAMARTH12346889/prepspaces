/**
 * AI ENGINEERING & GENERATIVE AI - MODULE 07
 * Comprehensive University-Grade Curriculum Data: Large Language Models: GPT, Llama & Qwen
 * 
 * Detailed across 10 in-depth curriculum units, 8 hands-on practical labs,
 * capstone project (MiniGPT and Local AI Assistant),
 * 30 conceptual questions, 6 math problems with worked solutions, 15 coding challenges,
 * 10 interactive quiz assessments, 8 academic resources, and 19-point competency tracker.
 */

export const LLM_MODULE_OVERVIEW = {
  moduleNumber: "07",
  title: "Large Language Models: GPT, Llama & Qwen",
  recommendedDuration: "18–22 hours",
  difficulty: "Advanced",
  primaryLanguage: "Python",
  deepLearningFramework: "PyTorch",
  modelEcosystem: "GPT, Llama, Qwen, Hugging Face",
  prerequisites: "Python, linear algebra, multivariable calculus, Modules 04–06",
  learningMethodology: "Theory + mathematics + coding + research + experiments",
  finalProject: "Build a MiniGPT and local AI assistant",
  centralLearningObjective:
    "Students will master the mathematical, architectural, and systems engineering foundations of modern decoder-only Large Language Models, understand next-token prediction, pretraining pipelines, scaling laws, KV caching, quantization, and implement a complete working MiniGPT from scratch while executing real open-weight models."
};

export const LLM_ROADMAP_UNITS = [
  { id: "01", title: "Introduction to LLMs", description: "Language models, GPT, Llama, Qwen, statistical learning, scale dimensions, and core applications" },
  { id: "02", title: "GPT Architecture", description: "Decoder-only Transformers, Pre-LN residual connections, 4D tensor dimensions, and causal self-attention" },
  { id: "03", title: "Tokenization & Vocabulary", description: "Byte Pair Encoding (BPE), subwords, token IDs, special tokens, and chat templates" },
  { id: "04", title: "Next-Token Prediction", description: "Autoregressive modelling, probability chain rule, logits to softmax derivation, cross-entropy, and shifted sequences" },
  { id: "05", title: "LLM Pretraining Pipeline", description: "9-stage production pretraining: data collection, cleaning, exact/MinHash deduplication, filtering, and sequence packing" },
  { id: "06", title: "Parameters & Scaling", description: "Model sizes, parameter locations, Dense vs MoE, weight memory calculation, 6ND FLOPs, and Chinchilla scaling laws" },
  { id: "07", title: "GPT, Llama & Qwen", description: "In-depth comparison of OpenAI GPT, Meta Llama (Llama 4 MoE), Alibaba Qwen (Qwen3), and deployment decision framework" },
  { id: "08", title: "Context Windows", description: "Context budgets, quadratic attention O(n^2d), memory bottlenecks, RoPE rotary positional embeddings, and long-context scaling" },
  { id: "09", title: "Inference Engineering", description: "Greedy decoding, temperature scaling, top-k sampling, top-p nucleus sampling, and generation parameter tuning" },
  { id: "10", title: "Prefill, Decoding & KV Cache", description: "Parallel prefill vs sequential decoding, KV cache algorithm and memory formula, GQA/MQA, continuous batching, and vLLM" }
];

export const LLM_CURRICULUM_UNITS = [
  {
    id: "unit-01",
    unitNumber: 1,
    title: "Introduction to Large Language Models & Modern AI Landscape",
    duration: "2.0 Hours",
    level: "Advanced",
    summary:
      "What makes a language model 'Large', the foundational shift from rule-based and classical ML to statistical deep learning, the computational pipeline from raw text to logits, and the critical distinction between base and instruction-tuned models.",
    coreConcepts: [
      "Statistical Contextual Learning: Neural networks learning high-dimensional token distributions",
      "Dimensions of Scale: Learned parameters, training token volume, cluster compute (FLOPs), and depth",
      "Computational Flow: Text -> Tokens -> Embeddings -> Transformer Layers -> Logits -> Probabilities",
      "Base Models vs Instruction Models vs Chat Models: Text continuation versus instruction following"
    ],
    deepDiveText: `
### 1. What is a Large Language Model?

A Large Language Model (LLM) is an autoregressive deep neural network trained on vast corpora of tokenized natural language, programming code, and structured data to learn the statistical, syntactic, and contextual probability distribution of human language.

Unlike conventional software that queries relational tables or keyword search indexes, an LLM does not store prewritten text answers. When given an input prompt such as:
*Explain how a neural network learns.*

The model executes a strictly numerical forward pass:
1. Converts input text characters into discrete integer token IDs using a vocabulary tokenizer.
2. Projects token IDs into continuous high-dimensional vector representations (token embeddings) combined with positional encodings.
3. Propagates embeddings through stacked Transformer decoder blocks where causal multi-head self-attention models token relationships.
4. Generates unnormalized logit scores across the entire vocabulary for the next token position.
5. Applies a decoding strategy (greedy, temperature, top-k, top-p) to sample the next token ID.
6. Appends the sampled token to the prompt context and repeats autoregressively until reaching an End-Of-Sequence ([EOS]) condition.

$$\\boxed{ \\text{Text} \\longrightarrow \\text{Tokens} \\longrightarrow \\text{Embeddings} \\longrightarrow \\text{Transformer} \\longrightarrow \\text{Logits} \\longrightarrow \\text{Generated Text} }$$

### 2. The Five Dimensions of Scale

What transforms a language model into a *Large* Language Model is scale across five interrelated dimensions:
1. **Learnable Parameters**: Modern LLMs range from 1 billion (1B) to hundreds of billions (70B, 405B) of floating-point weights. A 7B model contains exactly 7,000,000,000 learnable parameters ($w, b$).
2. **Training Token Volume**: Foundation models are pretrained on trillions of tokens (e.g., Llama 3 on 15T tokens, Qwen on 18T tokens) spanning web text, books, code repositories, and scientific papers.
3. **Computational Workload (FLOPs)**: Training requires distributed supercomputing clusters running thousands of interconnected GPUs (NVIDIA H100/H200, B200) with high-speed InfiniBand fabric.
4. **Architectural Depth**: Stacking 32 to 128 decoder blocks with hidden dimensions ($d_{\\text{model}}$) of 4,096 to 16,384 and 32 to 128 attention heads.
5. **Training Duration**: Thousands of distributed GPU hours consuming megawatts of power and billions of forward-backward optimization steps.

### 3. Structural Comparison: Rule-Based vs Traditional ML vs LLMs

| Feature | Rule-Based Expert Systems | Traditional Machine Learning (TF-IDF + SVM/NB) | Large Language Models (Decoder Transformers) |
| :--- | :--- | :--- | :--- |
| **Core Technique** | Deterministic if-else rules | Statistical feature classifiers | Deep autoregressive neural representations |
| **Training Requirement** | None (manually authored) | Small to medium labelled dataset | Trillions of unlabeled tokens in self-supervised pretraining |
| **Contextual Awareness** | Zero (matches literal strings) | Bag-of-words / N-gram co-occurrence | Deep contextual attention across thousands of tokens |
| **Generalization** | Brittle; fails outside exact rules | Limited to specific training task | Broad zero-shot and few-shot in-context transfer |
| **Inference Compute** | Minimal CPU instructions (<1 ms) | Low CPU computation (<10 ms) | High GPU accelerator memory and tensor FLOPs |

> **Critical Engineering Principle**: An LLM is not a universal solution for every problem. When a classification task is narrow, strictly bounded, and low-latency (such as high-volume spam detection or transaction classification), an optimized logistic regression or light gradient-boosted tree (XGBoost) is dramatically cheaper, faster, and more deterministic than an LLM.
`,
    codeSnippet: `# Rule-Based vs Classical ML vs Pretrained Causal LM
# 1. Rule-Based
def rule_based_spam(text: str) -> bool:
    triggers = {"claim prize", "free money", "instant jackpot"}
    return any(word in text.lower() for word in triggers)

# 2. Modern LLM Autoregressive Token Step (PyTorch Conceptual)
import torch
import torch.nn.functional as F

def step_autoregressive(logits: torch.Tensor, temperature: float = 0.7):
    # logits shape: (batch_size, vocab_size)
    scaled_logits = logits / max(temperature, 1e-5)
    probabilities = F.softmax(scaled_logits, dim=-1)
    next_token = torch.multinomial(probabilities, num_samples=1)
    return next_token
`,
    challenges: [
      "Why does parameter count not directly equal factual memorization capacity in an LLM?",
      "In what production scenarios is a classical ML classifier superior to calling an LLM API?"
    ]
  },
  {
    id: "unit-02",
    unitNumber: 2,
    title: "Decoder-Only Transformer Architecture & Pre-LN Mechanics",
    duration: "2.5 Hours",
    level: "Advanced",
    summary:
      "Why modern generative models abandon the encoder-decoder structure in favor of decoder-only stacks. Mathematical formulation of Pre-LayerNorm residual blocks, 4D tensor transformations, and the causal attention lower-triangular mask.",
    coreConcepts: [
      "Why Decoder-Only: Framing natural language as pure next-token prediction without encoder overhead",
      "Pre-LayerNorm Formulation: H' = H + Attention(LN(H)) and H_next = H' + FFN(LN(H')) for gradient stability",
      "4D Tensor Transformations: (Batch, Sequence, Heads, Head_Dim) tensor gymnastics during attention",
      "Causal Lower-Triangular Masking: Enforcing the autoregressive property M_ij = -inf for j > i"
    ],
    deepDiveText: `
### 1. Why Did Generative AI Standardize on Decoder-Only?

In Module 06, we built the original Vaswani et al. (2017) Transformer, which featured both an encoder (bidirectional) and a decoder (causal cross-attention). While encoder-decoder architectures (such as T5 and BART) excel at sequence-to-sequence transformation (e.g. translation), modern foundation models (GPT, Llama, Qwen, Mistral) are almost universally **decoder-only**.

The mathematical reason is foundational:
Every text task—summarization, code synthesis, question answering, reasoning, translation—can be unified into a single objective: **predicting the next token given all prior tokens**.
Because there is no separate source sentence requiring bidirectional encoding, a single stack of causal decoder blocks simplifies the architecture, maximizes parameter efficiency, and enables homogeneous KV-cache management during autoregressive rollout.

### 2. Pre-LayerNorm (Pre-LN) Residual Architecture

The original 2017 Transformer utilized **Post-LayerNorm**, where normalization was applied *after* residual addition:
$$H_{next} = \\text{LN}(H + \\text{Sublayer}(H))$$
In deep networks (e.g., >20 layers), Post-LN suffers from severe gradient vanishing/explosion near the input embeddings, requiring delicate learning rate warmups.

Modern LLMs universally adopt **Pre-LayerNorm (Pre-LN)**:
$$H' = H + \\text{Attention}(\\text{LN}_1(H))$$
$$H_{next} = H' + \\text{FFN}(\\text{LN}_2(H'))$$

In Pre-LN, the identity residual connection ($H + \\dots$) provides an uninterrupted gradient highway from the output directly back to the earliest layers. The normalization normalizes only the input to the attention/FFN sublayer, stabilizing gradient scale even in 100+ layer architectures.

### 3. Tensor Dimensions Across a Decoder Block

Let:
- Batch size $B = 8$
- Sequence length $T = 512$
- Hidden model dimension $C = d_{\\text{model}} = 768$
- Number of attention heads $h = 12$
- Head dimension $d_k = C / h = 768 / 12 = 64$

1. **Input Tensor**: $X \\in \\mathbb{R}^{B \\times T \\times C} = \\mathbb{R}^{8 \\times 512 \\times 768}$
2. **QKV Projection**: Linearly project $X$ to $3C = 2304$ channels:
   $$QKV = X W_{qkv} \\in \\mathbb{R}^{8 \\times 512 \\times 2304}$$
3. **Head Splitting & Reshaping**:
   Chunk into $Q, K, V$, reshape to $(B, T, h, d_k)$, and transpose dimensions 1 and 2:
   $$Q, K, V \\in \\mathbb{R}^{8 \\times 12 \\times 512 \\times 64}$$
4. **Attention Score Matrix**:
   $$S = \\frac{Q K^T}{\\sqrt{d_k}} \\in \\mathbb{R}^{8 \\times 12 \\times 512 \\times 512}$$
5. **Causal Masking**: Add lower-triangular mask $M$ where $M_{ij} = -\\infty$ for $j > i$.
6. **Softmax & Value Weighting**:
   $$A = \\text{Softmax}(S + M) \\in \\mathbb{R}^{8 \\times 12 \\times 512 \\times 512}$$
   $$O = A V \\in \\mathbb{R}^{8 \\times 12 \\times 512 \\times 64}$$
7. **Head Concatenation & Out Projection**:
   Transpose back to $(B, T, h, d_k)$ and reshape to $(B, T, C)$:
   $$\\text{Output} = O_{\\text{concat}} W_o \\in \\mathbb{R}^{8 \\times 512 \\times 768}$$
`,
    codeSnippet: `import torch
import torch.nn as nn
import math

class PreLNDecoderBlock(nn.Module):
    def __init__(self, d_model: int = 768, n_head: int = 12, dropout: float = 0.1):
        super().__init__()
        self.ln1 = nn.LayerNorm(d_model)
        self.ln2 = nn.LayerNorm(d_model)
        self.head_dim = d_model // n_head
        self.n_head = n_head
        
        self.qkv_proj = nn.Linear(d_model, 3 * d_model)
        self.out_proj = nn.Linear(d_model, d_model)
        
        self.ffn = nn.Sequential(
            nn.Linear(d_model, 4 * d_model),
            nn.GELU(),
            nn.Linear(4 * d_model, d_model),
            nn.Dropout(dropout)
        )
        self.dropout = nn.Dropout(dropout)

    def forward(self, x: torch.Tensor, causal_mask: torch.Tensor) -> torch.Tensor:
        # Pre-LN Causal Attention + Residual
        norm_x = self.ln1(x)
        B, T, C = norm_x.shape
        q, k, v = self.qkv_proj(norm_x).chunk(3, dim=-1)
        
        q = q.view(B, T, self.n_head, self.head_dim).transpose(1, 2)
        k = k.view(B, T, self.n_head, self.head_dim).transpose(1, 2)
        v = v.view(B, T, self.n_head, self.head_dim).transpose(1, 2)
        
        scores = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(self.head_dim)
        scores = scores.masked_fill(~causal_mask[:T, :T], float("-inf"))
        attn = self.dropout(torch.softmax(scores, dim=-1))
        
        context = torch.matmul(attn, v).transpose(1, 2).contiguous().view(B, T, C)
        x = x + self.out_proj(context)
        
        # Pre-LN FFN + Residual
        x = x + self.ffn(self.ln2(x))
        return x
`,
    challenges: [
      "Prove mathematically why Pre-LN preserves identity gradient propagation compared to Post-LN.",
      "Calculate the memory occupied by the attention score matrix (B, h, T, T) in FP16 when B=4, h=32, and T=8192."
    ]
  },
  {
    id: "unit-03",
    unitNumber: 3,
    title: "Tokenization, Byte Pair Encoding (BPE) & Vocabulary Engineering",
    duration: "2.0 Hours",
    level: "Advanced",
    summary:
      "Why raw characters and whole words fail, the mechanics of subword segmentation, the Byte Pair Encoding (BPE) iterative merge algorithm, token IDs, special control tokens, and chat templates.",
    coreConcepts: [
      "The Subword Compromise: Balancing vocabulary explosion (word-level) vs excessive sequence length (character-level)",
      "BPE Iterative Merge Rules: Frequency-driven pair merging creating subword vocabularies from raw byte sequences",
      "Token Incompatibility Invariance: Why weights and tokenizers are strictly coupled pairs",
      "Chat Templates: Converting structured system/user/assistant dialogue turns into tokenized sequences"
    ],
    deepDiveText: `
### 1. Why Do LLMs Operate on Tokens Instead of Words or Characters?

Computers process numbers, not text. Two naive tokenization strategies exist, both with fatal flaws:
1. **Word-Level Tokenization**: Splitting on whitespace requires an enormous vocabulary ($V > 1,000,000$) to cover inflections, slang, code, and typos. Rare words trigger out-of-vocabulary ([UNK]) tokens, destroying information. The embedding matrix $V \\times d_{\\text{model}}$ consumes gigabytes of memory.
2. **Character-Level Tokenization**: Vocabulary is tiny ($V \\approx 256$), but sequence lengths explode by $5\\times$ to $10\\times$. Because standard attention is $O(T^2)$, a $10\\times$ sequence length causes a $100\\times$ increase in attention computation and memory.

**The Solution: Subword Tokenization via Byte Pair Encoding (BPE)**. Subwords dynamically represent frequent words as single tokens (e.g. \`"the"\` = 1 token) while breaking rare words into reusable byte-level fragments (e.g. \`"un"\` + \`"stoppable"\`).

### 2. The Byte Pair Encoding (BPE) Algorithm

BPE is a data compression algorithm adapted by Sennrich et al. (2015) and Radford et al. (GPT-2, 2019):
1. **Initialization**: Initialize vocabulary with all individual base characters (or 256 raw bytes in Byte-Level BPE).
2. **Corpus Frequency Counting**: Count the co-occurrence frequency of all adjacent symbol pairs in the training text.
3. **Greedy Merge**: Identify the most frequent symbol pair $(c_i, c_j)$ and merge them into a single new symbol $c_{new} = c_i + c_j$.
4. **Iterate**: Repeat steps 2 and 3 for a fixed number of merge operations until reaching the desired vocabulary size (e.g., GPT-2: 50,257; Llama 3: 128,256; Qwen: 151,643).

\`\`\`
Example:
Initial:   l o w <w>  (5) | l o w e r <w> (2) | n e w <w> (6) | n e w e r <w> (2)
Pair (e, w): frequency = 8 -> Merge rule: e + w -> ew
Pair (e, r): frequency = 4 -> Merge rule: e + r -> er
Pair (l, o): frequency = 7 -> Merge rule: l + o -> lo
Pair (lo, w): frequency = 7 -> Merge rule: lo + w -> low
\`\`\`

### 3. Special Tokens and Chat Templates

Language models use dedicated control tokens to structure multi-turn dialogues, manage system constraints, and trigger external tools:
- '<|begin_of_text|>' / '<|end_of_text|>': Sequence boundaries.
- '<|start_header_id|>' / '<|end_header_id|>': Role demarcations (system, user, assistant).
- '<|eot_id|>': End of turn; signals the generator to yield execution.

A **Chat Template** (such as Jinja2 templates in Hugging Face) deterministically formats messages:
\`\`\`
<|start_header_id|>system<|end_header_id|>
You are an expert compiler engineer.<|eot_id|>
<|start_header_id|>user<|end_header_id|>
Explain LLVM IR optimization.<|eot_id|>
<|start_header_id|>assistant<|end_header_id|>
\`\`\`
`,
    codeSnippet: `def simple_bpe_train(corpus: list[str], num_merges: int = 10):
    # Represent words as tuples of characters with end-of-word symbol
    vocab = {}
    for word in corpus:
        w_tuple = tuple(list(word)) + ("</w>",)
        vocab[w_tuple] = vocab.get(w_tuple, 0) + 1

    for step in range(num_merges):
        pairs = {}
        for w_tuple, freq in vocab.items():
            for i in range(len(w_tuple) - 1):
                pair = (w_tuple[i], w_tuple[i+1])
                pairs[pair] = pairs.get(pair, 0) + freq
                
        if not pairs:
            break
        best_pair = max(pairs, key=pairs.get)
        print(f"Step {step+1}: Merging {best_pair} with freq {pairs[best_pair]}")
        
        # Apply merge
        new_vocab = {}
        for w_tuple, freq in vocab.items():
            new_w = []
            i = 0
            while i < len(w_tuple):
                if i < len(w_tuple) - 1 and (w_tuple[i], w_tuple[i+1]) == best_pair:
                    new_w.append(best_pair[0] + best_pair[1])
                    i += 2
                else:
                    new_w.append(w_tuple[i])
                    i += 1
            new_vocab[tuple(new_w)] = freq
        vocab = new_vocab
    return vocab
`,
    challenges: [
      "Why will an LLM output gibberish if paired with a tokenizer trained on a different vocabulary?",
      "Why do numbers and non-Latin alphabets often consume significantly more tokens than English prose?"
    ]
  },
  {
    id: "unit-04",
    unitNumber: 4,
    title: "Next-Token Prediction: Mathematical Foundations of Autoregressive Modelling",
    duration: "2.5 Hours",
    level: "Advanced",
    summary:
      "Mathematical formulation of joint sequence probability via the probability chain rule, converting logits to probability vectors via Softmax, cross-entropy loss derivation, and shifted input-target parallel training pairs.",
    coreConcepts: [
      "Autoregressive Probability Chain Rule: P(X) = Prod P(x_t | x_<t)",
      "Logits to Softmax Derivation: Numerical stability through maximum subtraction z_i - max(z)",
      "Cross-Entropy Loss: L = -log(P_correct), quantifying model surprise on target tokens",
      "Shifted Sequence Parallelism: Evaluating N target predictions simultaneously in a single forward pass"
    ],
    deepDiveText: `
### 1. The Core Objective: Next-Token Prediction

The entire capability of modern GPT-style models originates from a single mathematical objective: **conditional next-token density estimation**.

Given a sequence of tokens $X = (x_1, x_2, \\dots, x_n)$, the joint probability of the entire sequence is decomposed using the fundamental chain rule of probability:
$$P(x_1, x_2, \\dots, x_n) = P(x_1) \\cdot P(x_2 \\mid x_1) \\cdot P(x_3 \\mid x_1, x_2) \\cdots P(x_n \\mid x_1, \\dots, x_{n-1})$$

More compactly:
$$\\boxed{ P(X) = \\prod_{t=1}^{n} P(x_t \\mid x_{<t}) }$$

Every prediction at position $t$ is strictly conditioned on all preceding tokens $x_{<t} = (x_1, \\dots, x_{t-1})$.

### 2. From Logits to Probabilities via Softmax

The final linear layer (the Language Model Head, \`lm_head\`) maps the hidden state $h_t \\in \\mathbb{R}^{d_{\\text{model}}}$ to vocabulary logits $z_t \\in \\mathbb{R}^{V}$:
$$z_t = h_t W_{\\text{head}}$$
To convert raw unbounded real scores $z_t$ into a valid categorical probability distribution:
$$P(x_{t} = i \\mid x_{<t}) = \\frac{e^{z_i}}{\\sum_{j=1}^{V} e^{z_j}}$$

#### Numerical Stability Proof:
In floating-point hardware, if $z_i > 88$ (in FP32), $e^{z_i}$ overflows to \`inf\`. Softmax implementations shift logits by subtracting $m = \\max_j(z_j)$:
$$\\frac{e^{z_i - m}}{\\sum_{j=1}^V e^{z_j - m}} = \\frac{e^{z_i} e^{-m}}{\\sum_{j=1}^V e^{z_j} e^{-m}} = \\frac{e^{z_i}}{\\sum_{j=1}^V e^{z_j}}$$
This guarantees the largest exponent is $e^0 = 1$, preventing numerical overflow.

### 3. Worked Example: Manual Softmax & Cross-Entropy Calculation

Suppose a miniature vocabulary has 3 tokens ($V=3$) with raw logits:
$$z = [2.0, 1.0, 0.0]$$
1. Calculate exponentials:
   $$e^2 = 7.389, \\quad e^1 = 2.718, \\quad e^0 = 1.000$$
2. Compute normalizer:
   $$Z = 7.389 + 2.718 + 1.000 = 11.107$$
3. Probabilities:
   $$P_1 = \\frac{7.389}{11.107} \\approx 0.6652, \\quad P_2 = \\frac{2.718}{11.107} \\approx 0.2447, \\quad P_3 = \\frac{1.000}{11.107} \\approx 0.0900$$
4. Cross-Entropy Loss: If the true target token is Token 1 ($P_1 = 0.6652$):
   $$L = -\\log(0.6652) = 0.4077$$
   If the model was poorly calibrated and assigned Token 1 a probability of $0.05$:
   $$L = -\\log(0.05) = 2.9957$$
   Lower probability on the correct target produces exponentially higher loss.

### 4. Shifted Input and Target Sequences

During training, an entire sequence is processed in parallel thanks to the causal mask:
\`\`\`
Original text: [BOS, The, quick, brown, fox, jumps, EOS]
Input tensor:  [BOS, The, quick, brown, fox, jumps]
Target tensor: [The, quick, brown, fox, jumps, EOS]
\`\`\`
At position 1 (\`BOS\`), the model is trained to predict \`The\`.
At position 4 (\`brown\`), given \`[BOS, The, quick, brown]\`, it predicts \`fox\`.
A single forward pass computes $T$ cross-entropy losses simultaneously!
`,
    codeSnippet: `import torch
import torch.nn as nn
import torch.nn.functional as F

def compute_autoregressive_loss(logits: torch.Tensor, targets: torch.Tensor):
    """
    logits: (B, T, V)
    targets: (B, T)
    """
    B, T, V = logits.shape
    # Flatten across batch and sequence dimensions
    flat_logits = logits.view(B * T, V)
    flat_targets = targets.view(B * T)
    
    loss = F.cross_entropy(flat_logits, flat_targets, ignore_index=-100)
    perplexity = torch.exp(loss)
    return loss, perplexity
`,
    challenges: [
      "Derive the gradient of cross-entropy loss with respect to logit z_i: dL/dz_i = P_i - y_i.",
      "Explain why perplexity represents the effective branching factor of the model's token predictions."
    ]
  },
  {
    id: "unit-05",
    unitNumber: 5,
    title: "Large Language Model Pretraining Pipeline: Data to Weights",
    duration: "2.5 Hours",
    level: "Advanced",
    summary:
      "The comprehensive 9-stage engineering pipeline for training frontier LLMs: data collection, HTML cleaning, MinHash deduplication, quality filtering, synthetic data mixture design, sequence packing, and checkpoint management.",
    coreConcepts: [
      "The 9-Stage Pretraining Pipeline: Raw web dumps to optimized neural network parameters",
      "Exact vs Near-Duplicate MinHash: Reducing memorization and eliminating redundant GPU compute",
      "Data Mixture Balancing: Proportional allocation across web, books, code, math, and multilingual text",
      "Sequence Packing & Document Boundaries: Preventing attention contamination across packed documents"
    ],
    deepDiveText: `
### 1. The 9-Stage Industrial Pretraining Pipeline

Frontier foundation models are not trained on raw internet scrapes. High-quality pretraining data is the primary determinant of model reasoning capability:

\`\`\`
[1. Data Collection] -> [2. Data Cleaning] -> [3. Deduplication]
        |
        v
[4. Data Filtering]  -> [5. Data Mixture]  -> [6. Tokenization]
        |
        v
[7. Sequence Pack]   -> [8. LLM Pretrain]  -> [9. Eval & Checkpoints]
\`\`\`

1. **Stage 1 — Data Collection**: Gathering multi-terabyte corpora from web dumps (Common Crawl), licensed books, scientific preprints (arXiv), open code repositories (GitHub), and synthetic datasets.
2. **Stage 2 — Data Cleaning**: Stripping HTML tags, navigation headers, tracking scripts, corrupted Unicode encodings, and boilerplate cookie notices.
3. **Stage 3 — Deduplication**: Eliminating exact and near-duplicate documents using MinHash LSH. Deduplication cuts training tokens by 20–40%, dramatically reducing memorization and compute waste.
4. **Stage 4 — Data Filtering**: Scoring text quality with fast linear classifiers (fastText) trained on curated reference text (Wikipedia/high-grade books), removing toxic content, spam, and PII.
5. **Stage 5 — Data Mixture Design**: Carefully curating proportions across domains to prevent catastrophic forgetting and optimize reasoning.
6. **Stage 6 — Tokenization**: Encoding normalized text with the model's BPE tokenizer into binary integer sequences.
7. **Stage 7 — Sequence Packing**: Concatenating short documents into contiguous blocks of max sequence length $T=8192$, inserting document boundary tokens with attention mask resets to avoid cross-document contamination.
8. **Stage 8 — Pretraining**: Distributed optimization (ZeRO stage 3, Megatron-LM tensor parallelism) using AdamW with cosine decay and gradient clipping.
9. **Stage 9 — Evaluation & Checkpoint Management**: Running automated evals (MMLU, HumanEval, GSM8K) every 1,000 steps and preserving sharded model weights.

### 2. Illustrative Pretraining Data Mixture

| Category | Typical Token Proportion | Engineering Significance |
| :--- | :--- | :--- |
| **High-Quality Web Text** | 35% | Broad factual knowledge, entity relations, and general world context |
| **Source Code & Technical Docs** | 25% | Algorithmic reasoning, syntax execution, structured logic, and tool usage |
| **Books & Long-Form Writing** | 15% | Narrative coherence, deep discourse structure, and extended context retention |
| **Scientific Papers & Mathematics** | 10% | Quantitative reasoning, LaTeX parsing, and formal deductive chains |
| **Multilingual Web & Corpora** | 10% | Cross-lingual transfer, global language coverage, and translation |
| **High-Quality Synthetic Data** | 5% | Curated instructional dialogues and step-by-step reasoning verification |
`,
    codeSnippet: `import hashlib

def exact_and_minhash_dedup(documents: list[str]) -> list[str]:
    """Exact deduplication via SHA-256 hashing."""
    seen_hashes = set()
    unique_docs = []
    
    for doc in documents:
        doc_clean = " ".join(doc.lower().split())
        doc_hash = hashlib.sha256(doc_clean.encode("utf-8")).hexdigest()
        if doc_hash not in seen_hashes:
            seen_hashes.add(doc_hash)
            unique_docs.append(doc)
            
    print(f"Retained {len(unique_docs)} / {len(documents)} unique documents")
    return unique_docs
`,
    challenges: [
      "Why does careless sequence packing without attention mask resets introduce hallucination risks?",
      "Explain how MinHash and Jaccard similarity detect near-duplicate documents across billions of web pages."
    ]
  },
  {
    id: "unit-06",
    unitNumber: 6,
    title: "Parameters, Scaling Laws & Compute Architecture",
    duration: "2.5 Hours",
    level: "Advanced",
    summary:
      "Mathematical counting of Transformer parameters, weight memory across numerical formats (FP32, FP16, INT8, INT4), Dense versus Mixture-of-Experts (MoE) routing, the 6ND FLOPs rule of thumb, and Chinchilla compute-optimal scaling laws.",
    coreConcepts: [
      "Weight Memory Formula: Memory = Parameters * Bytes_Per_Format",
      "Dense vs Mixture-of-Experts (MoE): Decoupling total parameter capacity from per-token active compute",
      "The 6ND FLOPs Rule: Estimating training compute budget as 6 * N * D floating-point operations",
      "Chinchilla Scaling Laws (Hoffmann et al.): Why under-training large models is compute-suboptimal"
    ],
    deepDiveText: `
### 1. Where Are the Parameters in an LLM?

In a standard decoder-only Transformer with $L$ layers, hidden dimension $C = d_{\\text{model}}$, vocabulary $V$, and FFN expansion $4C$:

1. **Token Embeddings**: $V \\times C$
2. **Positional Embeddings** (if learned): $T \\times C$ (or 0 for RoPE)
3. **Per Transformer Block** ($L$ blocks total):
   - Query, Key, Value projections: $3 \\times (C \\times C) = 3C^2$
   - Output projection: $C \\times C = C^2$
   - Feed-Forward Network: $2 \\times (C \\times 4C) = 8C^2$ (or $12C^2$ for SwiGLU)
   - LayerNorm parameters: $4C$
   - **Total per block**: $\\approx 12C^2$
4. **Final Normalization & LM Head**: $C + (C \\times V)$

$$\\boxed{ N_{\\text{dense}} \\approx 2VC + 12 L C^2 }$$

### 2. Weight Memory Calculations Across Formats

$$\\boxed{ \\text{Memory (Bytes)} = N \\times \\text{Bytes per Parameter} }$$

| Precision Format | Bits / Parameter | Bytes / Parameter | 7B Model Weights | 70B Model Weights |
| :--- | :--- | :--- | :--- | :--- |
| **FP32** (Single Precision) | 32 bits | 4.0 bytes | **28.0 GB** | **280.0 GB** |
| **FP16 / BF16** (Half Precision) | 16 bits | 2.0 bytes | **14.0 GB** | **140.0 GB** |
| **INT8** (Quantized) | 8 bits | 1.0 byte | **7.0 GB** | **70.0 GB** |
| **INT4** (Quantized) | 4 bits | 0.5 bytes | **3.5 GB** | **35.0 GB** |

> **Critical Note on Runtime Memory**: Model weights represent only a fraction of total runtime memory. Active inference additionally requires **KV-Cache memory**, activation buffers, and runtime context. Active *training* requires $16\\times$ to $20\\times$ weight memory due to optimizer states (AdamW stores 8 bytes per parameter: FP32 first and second moments), gradients (4 bytes), and backward activations!

### 3. Dense vs Mixture-of-Experts (MoE)

In a **Dense** model, every parameter is activated for every token.
In a **Mixture-of-Experts (MoE)** model, the standard feed-forward network is replaced by $E$ independent expert networks, with a learned parametric router selecting the top-$k$ experts:
$$\\text{Output}(x) = \\sum_{i \\in \\text{Top-}k} g_i(x) E_i(x)$$

For example, **Llama 4 Scout** features 16 total experts but activates only 17B parameters per token. This gives the representational capacity of a 100B+ parameter model at the inference latency of a 17B model!

### 4. Training Compute: The 6ND Rule & Chinchilla Scaling Laws

For dense Transformer pretraining, the floating-point operations (FLOPs) required for forward and backward passes is estimated as:
$$\\boxed{ C \\approx 6 N D }$$
Where:
- $N$ = number of parameters
- $D$ = number of training tokens
*(The forward pass requires $\\approx 2ND$ FLOPs; the backward pass requires $\\approx 4ND$ FLOPs).*

**The Chinchilla Revolution (Hoffmann et al., 2022)**:
Prior to 2022, AI labs scaled model size $N$ faster than data $D$ (e.g. GPT-3: 175B parameters trained on only 300B tokens). DeepMind's Chinchilla study proved that for compute-optimal training, **model size $N$ and token count $D$ should scale in equal proportion**:
$$N \\propto \\sqrt{C}, \\quad D \\propto \\sqrt{C}$$
A 70B model trained on 1.4T tokens outperforms a 175B model trained on 300B tokens while being $2.5\\times$ cheaper to serve!
`,
    codeSnippet: `def calculate_llm_specs(params_billion: float, tokens_trillion: float):
    N = params_billion * 1e9
    D = tokens_trillion * 1e12
    
    # Weight Memory
    fp16_gb = (N * 2) / (1024**3)
    int4_gb = (N * 0.5) / (1024**3)
    
    # 6ND Compute FLOPs
    training_flops = 6 * N * D
    
    # 8x H100 GPU Days (approx 800 TFLOPS FP8/FP16 with 40% MFU = 3.2e14 FLOPs/s per GPU)
    gpu_tflops = 3.2e14
    gpu_seconds = training_flops / gpu_tflops
    gpu_days = gpu_seconds / (3600 * 24)
    
    return {
        "params": f"{params_billion}B",
        "tokens": f"{tokens_trillion}T",
        "fp16_weight_gb": round(fp16_gb, 2),
        "int4_weight_gb": round(int4_gb, 2),
        "total_flops": f"{training_flops:.2e}",
        "single_gpu_days": round(gpu_days, 1),
        "cluster_1024_gpu_days": round(gpu_days / 1024, 1)
    }
`,
    challenges: [
      "Calculate the FLOPs required to train an 8B model on 15T tokens using the 6ND formula.",
      "Why does a 70B INT4 model require at least 42 GB of GPU VRAM to serve a 32K context window?"
    ]
  },
  {
    id: "unit-07",
    unitNumber: 7,
    title: "GPT, Llama & Qwen Model Families in Depth",
    duration: "2.5 Hours",
    level: "Advanced",
    summary:
      "Architectural analysis and comparison of the three dominant foundation model ecosystems: OpenAI GPT (closed/hosted API), Meta Llama (open-weight, MoE Scout/Maverick), and Alibaba Qwen (multilingual, math/code, Qwen3.8-Flash).",
    coreConcepts: [
      "OpenAI GPT Lineage: From GPT-1 to GPT-4o and the frontier GPT-6 family (Astra, Sol, Luna)",
      "Meta Llama Lineage: Llama 1 through Llama 4 MoE (17B active parameters, 16 to 128 experts)",
      "Alibaba Qwen Ecosystem: Qwen2.5 to Qwen3 dense and MoE with dual thinking/non-thinking modes",
      "Model Selection Matrix: Hosted APIs vs open weights for enterprise privacy, latency, and customization"
    ],
    deepDiveText: `
### 1. OpenAI GPT: The Frontier Hosted Lineage

OpenAI's Generative Pre-trained Transformer family established modern generative AI:
- **GPT-1 (2018)**: First demonstration that unsupervised generative pretraining followed by supervised fine-tuning drastically outperforms task-specific models.
- **GPT-2 (2019)**: 1.5B parameters; demonstrated zero-shot text generation without fine-tuning.
- **GPT-3 (2020)**: 175B parameters; unlocked **few-shot in-context learning** via prompting.
- **GPT-4 & GPT-4o (2023–2024)**: Introduced massive MoE routing and omni-multimodal processing (native text, vision, audio).
- **GPT-6 Family (2026 Current API)**: Documents specialized variants including **GPT-6 Astra** (flagship multimodal reasoning), **GPT-6.1 Sol** (high-throughput production synthesis), and **GPT-6 Luna** (ultra-low-latency edge inference).

### 2. Meta Llama: The Open Foundation Benchmark

Meta's Llama family revolutionized open-source AI by releasing downloadable model weights:
- **Llama 1 & 2 (2023)**: Proved open-weight models could rival proprietary foundation models.
- **Llama 3, 3.1 & 3.2 (2024)**: Scaled to 405B parameters, 15T tokens, 128K context windows, and vision-language integration.
- **Llama 4 (2026)**: Introduced native Mixture-of-Experts:
  - **Llama 4 Scout**: 16 total experts, 17B active parameters per token.
  - **Llama 4 Maverick**: 128 total experts, 17B active parameters per token.

### 3. Alibaba Qwen: High-Efficiency Multilingual & Code Foundation

Alibaba's Qwen team has produced one of the most versatile and high-performance foundation suites:
- **Qwen 2.5**: Specialized in competitive coding (Qwen2.5-Coder), mathematical proofs (Qwen2.5-Math), and 29+ languages.
- **Qwen 3**: Features native dense (0.6B to 72B) and MoE architectures, introducing switchable *thinking* (deep reasoning) and *non-thinking* (fast response) modes.
- **QwenCloud Ecosystem**: Supports managed endpoints such as the high-throughput **Qwen3.8-Flash**.

### 4. Comprehensive Foundation Model Matrix

| Feature | OpenAI GPT | Meta Llama | Alibaba Qwen |
| :--- | :--- | :--- | :--- |
| **Developer** | OpenAI | Meta | Alibaba Cloud / Qwen Team |
| **Access Paradigm** | Proprietary Hosted API | Open Weights (Downloadable) | Open Weights + Hosted APIs |
| **Architecture Disclosure** | Closed; proprietary API | Detailed technical papers & model cards | Detailed technical papers & model cards |
| **Local Deployment** | Not supported (Cloud API only) | Fully supported (Ollama, vLLM, GGUF) | Fully supported (Ollama, vLLM, GGUF) |
| **On-Premise Fine-Tuning** | Restricted to hosted LoRA API | Complete freedom (Full, LoRA, QLoRA) | Complete freedom (Full, LoRA, QLoRA) |
| **Multilingual Coverage** | Strong global coverage | Strong Western / English focus | Superior Asian & Global Multilingual |
| **Licensing** | Commercial SaaS Terms | Llama Community License | Apache 2.0 / Qwen Community License |
`,
    codeSnippet: `# Running inference with Qwen open-weights via Hugging Face Transformers
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

def load_and_generate_qwen():
    model_id = "Qwen/Qwen3-0.6B"
    device = "cuda" if torch.cuda.is_available() else "cpu"
    dtype = torch.float16 if device == "cuda" else torch.float32

    tokenizer = AutoTokenizer.from_pretrained(model_id)
    model = AutoModelForCausalLM.from_pretrained(model_id, torch_dtype=dtype).to(device)
    model.eval()

    messages = [
        {"role": "system", "content": "You are a university computer systems professor."},
        {"role": "user", "content": "Explain why MoE models reduce active compute."}
    ]
    inputs = tokenizer.apply_chat_template(messages, tokenize=True, add_generation_prompt=True, return_tensors="pt").to(device)

    with torch.inference_mode():
        outputs = model.generate(inputs, max_new_tokens=150, temperature=0.7)
    
    new_tokens = outputs[0, inputs.shape[1]:]
    return tokenizer.decode(new_tokens, skip_special_tokens=True)
`,
    challenges: [
      "In what compliance scenario does an enterprise require Llama or Qwen over OpenAI GPT?",
      "Explain the architectural difference between Llama 4 Scout (16 experts) and Maverick (128 experts)."
    ]
  },
  {
    id: "unit-08",
    unitNumber: 8,
    title: "Context Windows, Long-Context Processing & RoPE Embeddings",
    duration: "2.0 Hours",
    level: "Advanced",
    summary:
      "Context budgeting mechanics, word-to-token variance, the O(n^2) computational wall of self-attention, Rotary Position Embeddings (RoPE) complex plane rotations, and long-context extension techniques.",
    coreConcepts: [
      "Token Budget Allocation: Partitioning context across system prompt, user query, RAG context, and output",
      "Quadratic Attention Bottleneck: O(T^2 d) attention computation and memory saturation",
      "Rotary Position Embeddings (RoPE): Rotating Q and K vectors in 2D coordinate planes to encode relative distance",
      "Long-Context Failure Modes: 'Lost in the middle' and context retrieval degradation across 128K tokens"
    ],
    deepDiveText: `
### 1. What is a Context Window?

A context window defines the maximum sequence length $T_{\\text{max}}$ that an LLM can process in a single request. Crucially, the context window is **not reserved solely for input text**—it is a shared budget covering:
$$\\text{Total Tokens} = \\text{System Instructions} + \\text{Conversation History} + \\text{Retrieved Documents (RAG)} + \\text{User Input} + \\text{Generated Output}$$

#### Context Budget Allocation Example (32,768 Token Budget):
- System Instructions: 1,000 tokens
- User Request: 500 tokens
- Conversation History: 5,000 tokens
- Retrieved RAG Passages: 20,000 tokens
- Output Reservation: 5,500 tokens
- **Total Utilized**: 32,000 tokens (Remaining headroom: 768 tokens).

If input + output exceeds 32,768, the request aborts with a context length error!

### 2. The Quadratic Wall: Why Long Context is Computationally Expensive

In standard multi-head self-attention, every token computes a dot product with every other token in the sequence. For sequence length $T$:
- Attention matrix dimensions: $T \\times T$
- Compute complexity: $O(T^2 \\cdot d_{\\text{model}})$
- Memory complexity: $O(B \\cdot h \\cdot T^2)$

Doubling context from $8\\text{K} \\to 16\\text{K}$ quadruples ($4\\times$) attention memory. Scaling to $128\\text{K}$ requires specialized hardware memory management (FlashAttention-3) and Grouped-Query Attention (GQA).

### 3. Rotary Position Embeddings (RoPE)

Unlike original sinusoidal encodings that add vectors to embeddings ($x_i + p_i$), **Rotary Position Embeddings (RoPE)** (Su et al., 2021) rotate Query and Key vectors in 2D subplanes by an angle proportional to token position $m$:

For a 2D vector pair $(q_0, q_1)$ at token position $m$:
$$\\begin{bmatrix} q_0' \\\\ q_1' \\end{bmatrix} = \\begin{bmatrix} \\cos(m\\theta) & -\\sin(m\\theta) \\\\ \\sin(m\\theta) & \\cos(m\\theta) \\end{bmatrix} \\begin{bmatrix} q_0 \\\\ q_1 \\end{bmatrix}$$
Where $\\theta_i = 10000^{-2(i-1)/d}$.

When calculating the attention dot product between Query at position $m$ and Key at position $n$:
$$\\langle \\mathbf{R}_m \\mathbf{q}, \\mathbf{R}_n \\mathbf{k} \\rangle = \\mathbf{q}^T \\mathbf{R}_m^T \\mathbf{R}_n \\mathbf{k} = \\mathbf{q}^T \\mathbf{R}_{n-m} \\mathbf{k}$$
The inner product depends **strictly on relative distance $(n - m)$**, allowing modern models to generalize across long sequences seamlessly!
`,
    codeSnippet: `import torch

def apply_rotary_pos_emb(x: torch.Tensor, pos: torch.Tensor, theta: float = 10000.0):
    """
    x: (B, T, n_head, head_dim)
    pos: (T,)
    """
    head_dim = x.shape[-1]
    dim_pairs = torch.arange(0, head_dim, 2, device=x.device).float()
    freqs = 1.0 / (theta ** (dim_pairs / head_dim))
    
    # Outer product: (T, head_dim / 2)
    angles = torch.outer(pos.float(), freqs)
    cos = torch.cos(angles).repeat_interleave(2, dim=-1) # (T, head_dim)
    sin = torch.sin(angles).repeat_interleave(2, dim=-1)
    
    # Rotate pairs: [-x1, x0, -x3, x2, ...]
    x_rotated = torch.stack([-x[..., 1::2], x[..., 0::2]], dim=-1).flatten(-2)
    
    return x * cos.unsqueeze(0).unsqueeze(2) + x_rotated * sin.unsqueeze(0).unsqueeze(2)
`,
    challenges: [
      "Why does RoPE naturally encode relative token distances even though the rotation is applied to absolute positions?",
      "Explain the phenomenon of 'Lost in the Middle' when retrieving facts from 100K+ token contexts."
    ]
  },
  {
    id: "unit-09",
    unitNumber: 9,
    title: "LLM Inference Engineering: Decoding Algorithms & Sampling",
    duration: "2.5 Hours",
    level: "Advanced",
    summary:
      "Mathematical analysis and implementation of text generation strategies: Greedy search, Temperature scaling, Top-k truncation, Top-p (nucleus) cumulative mass filtering, Beam search, and repetition penalties.",
    coreConcepts: [
      "Greedy Decoding: Deterministic argmax selection resulting in repetitive degenerative text loops",
      "Temperature Scaling: P_i = exp(z_i / T) / sum(exp(z_j / T)), controlling distribution sharpness",
      "Top-K Sampling: Truncating candidate selection to a fixed count of highest-probability tokens",
      "Top-P (Nucleus) Sampling: Dynamically selecting candidate tokens spanning cumulative probability mass p"
    ],
    deepDiveText: `
### 1. Training vs Inference: The Core Distinction

| Characteristic | LLM Training Phase | LLM Inference Phase |
| :--- | :--- | :--- |
| **Weights** | Updated via AdamW backpropagation | Strictly frozen / read-only |
| **Gradients** | Required; consumes massive activation VRAM | Disabled (\`torch.inference_mode()\`) |
| **Sequence Execution** | Fully parallelized across sequence $T$ | **Two-phase: Parallel Prefill + Sequential Decoding** |
| **Token Generation** | None (calculates loss on shifted targets) | Generates tokens autoregressively one by one |
| **Memory Bottleneck** | Compute-bound (matrix multiplications) | Memory-bandwidth bound (loading weights per token) |

### 2. Decoding Strategies Compared

#### 1. Greedy Search
$$x_t = \\arg\\max_{i} P(x_i \\mid x_{<t})$$
Always selects the single highest-probability token. While deterministic and fast, greedy decoding inevitably suffers from repetitive loops and boring, degenerative text on long outputs.

#### 2. Temperature Sampling
Temperature $T > 0$ scales logits before softmax:
$$P_i = \\frac{e^{z_i / T}}{\\sum_j e^{z_j / T}}$$
- **Low Temperature ($T = 0.2$)**: Accentuates peaks in the distribution; highly focused, deterministic, and ideal for coding and factual queries.
- **High Temperature ($T = 1.2$)**: Flattens the distribution; increases diversity and vocabulary variation, but risks hallucinations and grammar degradation.

#### 3. Top-k Sampling
Restricts the sampling candidate pool to exactly the $k$ highest-probability tokens. All tokens ranked $> k$ have their logits masked to $-\\infty$.

#### 4. Top-p (Nucleus) Sampling
Instead of a fixed count $k$, Top-p dynamically selects the smallest set of tokens whose cumulative probability exceeds threshold $p \\in (0, 1]$:
$$\\sum_{i \\in V^{(p)}} P(x_i \\mid x_{<t}) \\ge p$$
When the model is confident, $V^{(p)}$ may contain only 1 or 2 tokens. When the model is uncertain, $V^{(p)}$ expands to 50 tokens, preventing absurd low-probability hallucinations while preserving natural diversity!
`,
    codeSnippet: `import torch

def sample_next_token(logits: torch.Tensor, temperature: float = 0.7, top_k: int = 50, top_p: float = 0.9):
    """
    logits: (vocab_size,)
    """
    if temperature <= 0:
        return torch.argmax(logits)
        
    logits = logits / temperature
    
    # 1. Top-K Filter
    if top_k > 0:
        top_k = min(top_k, logits.size(-1))
        indices_to_remove = logits < torch.topk(logits, top_k)[0][..., -1, None]
        logits[indices_to_remove] = float("-inf")
        
    # 2. Top-P (Nucleus) Filter
    if top_p < 1.0:
        sorted_logits, sorted_indices = torch.sort(logits, descending=True)
        cumulative_probs = torch.cumsum(torch.softmax(sorted_logits, dim=-1), dim=-1)
        
        # Remove tokens with cumulative probability above top_p
        sorted_indices_to_remove = cumulative_probs > top_p
        # Shift right to keep the first token above threshold
        sorted_indices_to_remove[..., 1:] = sorted_indices_to_remove[..., :-1].clone()
        sorted_indices_to_remove[..., 0] = False
        
        indices_to_remove = sorted_indices[sorted_indices_to_remove]
        logits[indices_to_remove] = float("-inf")
        
    probs = torch.softmax(logits, dim=-1)
    return torch.multinomial(probs, num_samples=1).item()
`,
    challenges: [
      "Prove that as Temperature approaches zero, temperature sampling converges to greedy decoding.",
      "Why is beam search common in machine translation but rarely used in open-ended chat generation?"
    ]
  },
  {
    id: "unit-10",
    unitNumber: 10,
    title: "Prefill, Decoding, KV Caching & Production Inference Systems",
    duration: "2.5 Hours",
    level: "Advanced",
    summary:
      "Parallel prefill versus memory-bandwidth-bound decoding, mathematical derivation of KV-cache memory, Multi-Head vs Grouped-Query vs Multi-Query Attention, continuous batching, and high-throughput production serving with vLLM.",
    coreConcepts: [
      "Prefill vs Decoding Phase: Compute-bound parallel prompt processing versus memory-bandwidth-bound generation",
      "KV Caching: Eliminating redundant O(T) recalculation by preserving Key and Value tensors across generation steps",
      "KV Cache Memory Formula: M_KV = 2 * L * B * T * H_KV * d_k * bytes_per_elem",
      "GQA and MQA: Slashing KV cache memory footprints by sharing KV heads across query groups",
      "Continuous Batching & vLLM: Iteration-level scheduling maximizing GPU Tensor Core utilization"
    ],
    deepDiveText: `
### 1. The Two Phases of LLM Inference

Inference operates in two completely distinct computational regimes:
1. **Prefill Phase**: The entire user prompt (e.g. 1,024 tokens) is processed in parallel. All tokens attend to each other simultaneously. This phase is **compute-bound** (Tensor Core FLOPS saturated, GPU at 90%+ utilization).
2. **Decoding Phase**: The model generates tokens one by one. Generating token $t$ requires computing its Query vector, but reading the Key and Value representations of all previous $t-1$ tokens. Because only 1 new token is produced per forward pass, this phase is strictly **memory-bandwidth bound**—the GPU spends 95% of its time moving weights from HBM to SRAM rather than executing matrix arithmetic!

### 2. The KV Cache Algorithm

Without KV caching, predicting token 100 requires recomputing attention for tokens 1 through 99. The cumulative computation across sequence length $T$ scales as $O(T^2)$.
With **KV Caching**:
1. During prefill, store Key and Value tensors for all prompt tokens in GPU VRAM.
2. At each decoding step, compute $Q_t, K_t, V_t$ **only for the single new token**.
3. Concatenate $K_t$ and $V_t$ to the cached history:
   $$K_{\\text{cache}} \\leftarrow [K_{\\text{cache}}, K_t], \\quad V_{\\text{cache}} \\leftarrow [V_{\\text{cache}}, V_t]$$
4. Compute attention between single Query $Q_t$ and the entire $K_{\\text{cache}}$.
This slashes per-token generation complexity from $O(T)$ to $O(1)$ matrix-vector multiplications!

### 3. KV Cache Memory Calculation Formula

$$\\boxed{ M_{KV} = 2 \\times L \\times B \\times T \\times H_{KV} \\times d_k \\times S }$$
Where:
- $2$: Accounts for both Key and Value matrices
- $L$: Number of Transformer layers
- $B$: Concurrent batch size
- $T$: Cached sequence length (tokens)
- $H_{KV}$: Number of Key-Value heads
- $d_k$: Dimension per head
- $S$: Precision format in bytes (FP16 = 2, FP8 = 1)

#### Worked Example: Llama-3-8B Serving
- $L = 32$ layers
- $B = 4$ concurrent users
- $T = 8,192$ context length
- $H_{KV} = 8$ (Grouped-Query Attention with 8 KV heads)
- $d_k = 128$
- $S = 2$ bytes (FP16)

$$M_{KV} = 2 \\times 32 \\times 4 \\times 8192 \\times 8 \\times 128 \\times 2 = 4,294,967,296 \\text{ Bytes} = \\mathbf{4.0 \\text{ GiB}}$$
*(If standard Multi-Head Attention with 32 KV heads was used, the KV cache alone would consume 16 GiB!)*

### 4. Attention Architecture Evolution: MHA vs GQA vs MQA

\`\`\`
MHA (32 Q, 32 KV)      GQA (32 Q, 8 KV)       MQA (32 Q, 1 KV)
 Q Q Q Q ... Q Q        Q Q Q Q ... Q Q        Q Q Q Q ... Q Q
 | | | |     | |        \\ / \\ /     \\ /        \\ \\ | / /
 K K K K     K K           K           K              K
 V V V V     V V           V           V              V
(1x Memory)            (0.25x Memory)         (0.03x Memory)
\`\`\`

### 5. Production Serving: Continuous Batching & vLLM

Traditional serving batches requests together and waits for the slowest request to finish, leaving GPUs idling during short requests.
**Continuous Batching (Orca / vLLM)** schedules requests at the iteration level:
- New requests enter the prefill queue immediately at the next token boundary.
- Completed requests release their KV-cache memory instantly.
- **PagedAttention (vLLM)** manages KV cache memory like virtual memory pages in an operating system, eliminating 96% of memory fragmentation and enabling $4\\times$ higher throughput on the same hardware!
`,
    codeSnippet: `def compute_kv_cache_size(layers: int, batch: int, seq_len: int, kv_heads: int, head_dim: int, precision_bytes: int = 2):
    # Total bytes = 2 * layers * batch * seq_len * kv_heads * head_dim * bytes
    total_bytes = 2 * layers * batch * seq_len * kv_heads * head_dim * precision_bytes
    mib = total_bytes / (1024**2)
    gib = total_bytes / (1024**3)
    return {
        "bytes": total_bytes,
        "mib": round(mib, 2),
        "gib": round(gib, 3)
    }
`,
    challenges: [
      "Why is LLM decoding memory-bandwidth bound while prefill is compute-bound?",
      "Calculate the KV cache memory savings of Grouped-Query Attention (8 KV heads) vs Standard MHA (32 KV heads) across a 64-batch cluster."
    ]
  }
];

export const LLM_PRACTICAL_LABS = [
  {
    id: "lab-01",
    labNumber: 1,
    title: "Decoder-Only Architecture & Causal Mask Tracing",
    difficulty: "Beginner",
    estimatedTime: "60 mins",
    objective: "Implement a Pre-LN decoder block in PyTorch, trace 4D tensor transformations, and verify causal masking.",
    tasks: [
      "Construct a PyTorch Module with Pre-LayerNorm residual connections.",
      "Trace tensor shapes through QKV projection, multi-head split, and output merge.",
      "Verify that causal attention scores prevent future tokens from leaking into current token representations."
    ],
    code: `import torch
import torch.nn as nn
import math

class CausalSelfAttentionInspection(nn.Module):
    def __init__(self, d_model=256, n_head=4):
        super().__init__()
        self.d_model = d_model
        self.n_head = n_head
        self.head_dim = d_model // n_head
        self.qkv = nn.Linear(d_model, 3 * d_model)
        self.proj = nn.Linear(d_model, d_model)

    def forward(self, x):
        B, T, C = x.shape
        q, k, v = self.qkv(x).chunk(3, dim=-1)
        q = q.view(B, T, self.n_head, self.head_dim).transpose(1, 2)
        k = k.view(B, T, self.n_head, self.head_dim).transpose(1, 2)
        v = v.view(B, T, self.n_head, self.head_dim).transpose(1, 2)
        
        scores = torch.matmul(q, k.transpose(-2, -1)) / math.sqrt(self.head_dim)
        mask = torch.tril(torch.ones(T, T, device=x.device, dtype=torch.bool))
        scores = scores.masked_fill(~mask, float("-inf"))
        attn = torch.softmax(scores, dim=-1)
        
        # Verify upper-triangle is strictly 0
        upper_tri_sum = torch.triu(attn, diagonal=1).sum().item()
        assert upper_tri_sum == 0.0, "Causal leak detected in attention matrix!"
        
        out = torch.matmul(attn, v).transpose(1, 2).contiguous().view(B, T, C)
        return self.proj(out), attn

# Test run
x = torch.randn(2, 6, 256)
model = CausalSelfAttentionInspection()
out, attn = model(x)
print("Output shape:", out.shape)
print("Attention upper-triangular sum (must be 0.0):", torch.triu(attn, diagonal=1).sum().item())
`,
    expectedOutcome: "The upper triangle of the attention weights matrix evaluates to exactly 0.0 across all heads and batches."
  },
  {
    id: "lab-02",
    labNumber: 2,
    title: "Tokenizer Engineering & Subword Segmentation",
    difficulty: "Beginner",
    estimatedTime: "60 mins",
    objective: "Implement a character and subword tokenizer, inspect token IDs, and measure token count variance across languages.",
    tasks: [
      "Build a vocabulary mapping dictionary (char_to_id and id_to_char).",
      "Tokenize code, numbers, and multilingual phrases.",
      "Compare token counts and analyze compression efficiency."
    ],
    code: `text = "Artificial Intelligence & Large Language Models in 2026."
chars = sorted(list(set(text)))
vocab = {ch: i for i, ch in enumerate(chars)}
inverse_vocab = {i: ch for ch, i in vocab.items()}

def encode(s: str) -> list[int]:
    return [vocab[c] for c in s]

def decode(tokens: list[int]) -> str:
    return "".join([inverse_vocab[t] for t in tokens])

token_ids = encode(text)
reconstructed = decode(token_ids)
print("Vocabulary Size:", len(vocab))
print("Token IDs:", token_ids[:10], "...")
print("Reconstructed perfectly:", reconstructed == text)
`,
    expectedOutcome: "Accurate bidirectional mapping from natural language characters to integer tensors without loss."
  },
  {
    id: "lab-03",
    labNumber: 3,
    title: "Next-Token Prediction & Shifted Sequence Loss",
    difficulty: "Intermediate",
    estimatedTime: "75 mins",
    objective: "Construct shifted input and target sequence pairs and calculate categorical cross-entropy loss in PyTorch.",
    tasks: [
      "Prepare input tensor (x[:, :-1]) and target tensor (x[:, 1:]).",
      "Simulate model logits and calculate nn.CrossEntropyLoss.",
      "Derive perplexity and verify gradient descent updates on model weights."
    ],
    code: `import torch
import torch.nn as nn

B, T, V = 4, 8, 100
# Synthetic token sequence
tokens = torch.randint(0, V, (B, T))

# Shifted inputs and targets
inputs = tokens[:, :-1]   # shape (B, T-1)
targets = tokens[:, 1:]   # shape (B, T-1)

# Synthetic model logits
logits = torch.randn(B, T - 1, V, requires_grad=True)

criterion = nn.CrossEntropyLoss()
loss = criterion(logits.view(-1, V), targets.view(-1))
loss.backward()

print("Cross-Entropy Loss:", loss.item())
print("Perplexity:", torch.exp(loss).item())
print("Logits gradient computed:", logits.grad is not None)
`,
    expectedOutcome: "Cross-entropy loss and perplexity computed across flattened batch-sequence dimensions with valid backward gradients."
  },
  {
    id: "lab-04",
    labNumber: 4,
    title: "GPT, Llama & Qwen Architecture Analysis",
    difficulty: "Intermediate",
    estimatedTime: "75 mins",
    objective: "Compare architectural specs across GPT, Llama, and Qwen, computing parameter distribution and memory requirements.",
    tasks: [
      "Compute parameter counts across embedding, attention, FFN, and normalization layers.",
      "Calculate memory footprint across FP32, FP16, and INT4.",
      "Document architectural differences (Pre-LN vs RMSNorm, GQA vs MHA, RoPE vs Sinusoidal)."
    ],
    code: `def compare_model_configs():
    models = {
        "Llama-3.2-1B": {"layers": 16, "d_model": 2048, "heads": 32, "kv_heads": 8, "vocab": 128256, "norm": "RMSNorm", "pos": "RoPE"},
        "Qwen3-0.6B": {"layers": 24, "d_model": 1024, "heads": 16, "kv_heads": 8, "vocab": 151643, "norm": "RMSNorm", "pos": "RoPE"},
        "GPT-2-Base": {"layers": 12, "d_model": 768, "heads": 12, "kv_heads": 12, "vocab": 50257, "norm": "LayerNorm", "pos": "Learned"}
    }
    for name, cfg in models.items():
        # Approx params: 2 * vocab * d_model + 12 * layers * d_model^2
        approx_params = 2 * cfg["vocab"] * cfg["d_model"] + 12 * cfg["layers"] * (cfg["d_model"]**2)
        fp16_mb = (approx_params * 2) / (1024**2)
        print(f"[{name}] Approx Params: {approx_params/1e6:.1f}M | FP16 Weight Memory: {fp16_mb:.1f} MB | Norm: {cfg['norm']} | Pos: {cfg['pos']}")

compare_model_configs()
`,
    expectedOutcome: "Calculated structural parameters, normalization mechanics, and memory allocation across model families."
  },
  {
    id: "lab-05",
    labNumber: 5,
    title: "Pretraining Data Pipeline: Cleaning & Deduplication",
    difficulty: "Advanced",
    estimatedTime: "90 mins",
    objective: "Build an end-to-end dataset preprocessing pipeline with HTML stripping, regex filtering, and exact SHA-256 deduplication.",
    tasks: [
      "Ingest messy text documents with HTML markup and boilerplate.",
      "Apply cleaning filters and normalize whitespace.",
      "Deduplicate documents and pack into fixed-length contiguous token arrays."
    ],
    code: `import re
import hashlib

raw_corpus = [
    "<html><body><h1>LLM Architectures</h1><p>Transformers use self-attention.</p></body></html>",
    "Transformers use self-attention.",
    "<html><body><h1>LLM Architectures</h1><p>Transformers use self-attention.</p></body></html>",
    "Random garbage text without punctuation",
    "Deep learning neural networks require backpropagation for optimization."
]

def clean_html(text: str) -> str:
    clean = re.sub(r"<[^>]+>", " ", text)
    clean = re.sub(r"\\s+", " ", clean).strip()
    return clean

cleaned = [clean_html(doc) for doc in raw_corpus]
unique = []
hashes = set()
for doc in cleaned:
    h = hashlib.sha256(doc.encode("utf-8")).hexdigest()
    if h not in hashes:
        hashes.add(h)
        unique.append(doc)

print(f"Cleaned and Deduplicated: {len(unique)} / {len(raw_corpus)} documents preserved.")
for i, doc in enumerate(unique):
    print(f"Doc {i+1}: {doc}")
`,
    expectedOutcome: "Cleaned natural language dataset stripped of markup and duplicates, prepared for tokenization."
  },
  {
    id: "lab-06",
    labNumber: 6,
    title: "MiniGPT Implementation & Training from Scratch",
    difficulty: "Advanced",
    estimatedTime: "90 mins",
    objective: "Implement a complete decoder-only MiniGPT in PyTorch and train on text to verify training loss convergence.",
    tasks: [
      "Assemble TokenEmbedding, PositionalEmbedding, TransformerBlock, and LMHead.",
      "Execute training loop with AdamW optimizer and gradient clipping.",
      "Generate new tokens autoregressively from a seed prompt."
    ],
    code: `import torch
import torch.nn as nn
import torch.nn.functional as F

class TinyGPT(nn.Module):
    def __init__(self, vocab_size=65, d_model=64, n_head=2, n_layer=2, block_size=32):
        super().__init__()
        self.block_size = block_size
        self.tok_emb = nn.Embedding(vocab_size, d_model)
        self.pos_emb = nn.Embedding(block_size, d_model)
        self.blocks = nn.Sequential(*[
            nn.TransformerEncoderLayer(d_model=d_model, nhead=n_head, dim_feedforward=4*d_model, batch_first=True)
            for _ in range(n_layer)
        ])
        self.ln_f = nn.LayerNorm(d_model)
        self.head = nn.Linear(d_model, vocab_size, bias=False)

    def forward(self, idx, targets=None):
        B, T = idx.shape
        pos = torch.arange(0, T, device=idx.device)
        x = self.tok_emb(idx) + self.pos_emb(pos)
        
        # Causal mask for autoregressive generation
        mask = nn.Transformer.generate_square_subsequent_mask(T, device=idx.device)
        x = self.blocks(x, mask=mask, is_causal=True)
        logits = self.head(self.ln_f(x))
        
        loss = None
        if targets is not None:
            loss = F.cross_entropy(logits.view(-1, logits.size(-1)), targets.view(-1))
        return logits, loss

model = TinyGPT()
x = torch.randint(0, 65, (4, 16))
y = torch.randint(0, 65, (4, 16))
logits, loss = model(x, y)
print("MiniGPT forward successful. Loss:", loss.item())
`,
    expectedOutcome: "Successful PyTorch model forward pass computing valid causal logits and cross-entropy loss."
  },
  {
    id: "lab-07",
    labNumber: 7,
    title: "Decoding Strategies: Temperature, Top-K & Top-P",
    difficulty: "Advanced",
    estimatedTime: "75 mins",
    objective: "Implement custom generation sampling loops comparing greedy decoding against temperature, top-k, and nucleus sampling.",
    tasks: [
      "Implement greedy selection using torch.argmax.",
      "Implement temperature scaling and categorical multinomial sampling.",
      "Implement top-k and top-p probability thresholding."
    ],
    code: `import torch
import torch.nn.functional as F

logits = torch.tensor([5.0, 3.0, 2.5, 0.5, -2.0, -4.0])

def decode_step(logits, strategy="greedy", temp=1.0, top_k=3, top_p=0.8):
    if strategy == "greedy":
        return torch.argmax(logits).item()
    
    scaled = logits / temp
    if strategy == "top_k":
        val, _ = torch.topk(scaled, top_k)
        scaled[scaled < val[-1]] = float("-inf")
    elif strategy == "top_p":
        sorted_logits, sorted_indices = torch.sort(scaled, descending=True)
        cumulative = torch.cumsum(F.softmax(sorted_logits, dim=-1), dim=-1)
        remove = cumulative > top_p
        remove[1:] = remove[:-1].clone()
        remove[0] = False
        scaled[sorted_indices[remove]] = float("-inf")
        
    probs = F.softmax(scaled, dim=-1)
    return torch.multinomial(probs, 1).item()

print("Greedy:", decode_step(logits, "greedy"))
print("Temperature (0.2):", decode_step(logits, "temp", temp=0.2))
print("Top-K (k=2):", decode_step(logits, "top_k", top_k=2))
print("Top-P (p=0.7):", decode_step(logits, "top_p", top_p=0.7))
`,
    expectedOutcome: "Clear verification of candidate token filtering and sampling behavior across decoding parameters."
  },
  {
    id: "lab-08",
    labNumber: 8,
    title: "Local LLM Inference & Performance Benchmarking",
    difficulty: "Advanced",
    estimatedTime: "90 mins",
    objective: "Run a pretrained open-weight model (Qwen or Llama) locally and benchmark time-to-first-token (TTFT) and throughput.",
    tasks: [
      "Load a quantized or small open-weight checkpoint via Hugging Face or Ollama.",
      "Measure TTFT (prefill latency) and time per output token (TPOT).",
      "Benchmark throughput in tokens per second under varying generation lengths."
    ],
    code: `import time
import torch

def benchmark_inference_loop():
    # Synthetic benchmarking of 100 decoding steps
    batch_size = 1
    seq_len = 512
    device = "cuda" if torch.cuda.is_available() else "cpu"
    
    print(f"Benchmarking inference engine on: {device}")
    start_prefill = time.perf_counter()
    # Simulate prefill
    time.sleep(0.05) # 50ms prefill
    ttft = time.perf_counter() - start_prefill
    
    tokens_generated = 100
    start_decode = time.perf_counter()
    for _ in range(tokens_generated):
        # Simulate decode step
        time.sleep(0.015) # 15ms per token
    decode_time = time.perf_counter() - start_decode
    
    tokens_per_sec = tokens_generated / decode_time
    print(f"Time to First Token (TTFT): {ttft*1000:.1f} ms")
    print(f"Decode Duration: {decode_time:.2f} s")
    print(f"Throughput: {tokens_per_sec:.1f} tokens/second")

benchmark_inference_loop()
`,
    expectedOutcome: "Precise profiling of prefill latency, generation latency, and token throughput per second."
  }
];

export const LLM_CAPSTONE_PROJECT = {
  title: "Capstone Project: Build a MiniGPT and Local AI Assistant",
  duration: "8–10 Hours Independent Engineering",
  description:
    "Develop a complete end-to-end language model system: train a character/subword MiniGPT from scratch in PyTorch, integrate an open-weight foundation model (Qwen/Qwen3-0.6B or Llama), build a terminal or local web assistant with inference parameter controls, and profile generation performance.",
  phases: [
    {
      phaseNumber: 1,
      title: "Corpus Preparation & Tokenizer Construction",
      details: "Gather an authorized text corpus (>100KB), clean HTML/boilerplate, and build a character/subword tokenizer with bidirectional encoding."
    },
    {
      phaseNumber: 2,
      title: "MiniGPT Decoder-Only Architecture Implementation",
      details: "Implement CausalSelfAttention, FeedForward with GELU, TransformerBlock with Pre-LN, and MiniGPT with weight tying."
    },
    {
      phaseNumber: 3,
      title: "Autoregressive Training & Checkpoint Serialization",
      details: "Execute training loop with AdamW, evaluate train/val cross-entropy loss, clip gradients, and save model checkpoint dict."
    },
    {
      phaseNumber: 4,
      title: "Pretrained Open-Weight Model Integration",
      details: "Load Qwen/Qwen3-0.6B via Hugging Face Transformers with torch.inference_mode() and chat template formatting."
    },
    {
      phaseNumber: 5,
      title: "Inference Controls & Local Chat Engine",
      details: "Implement dynamic temperature (0.1 to 1.5), top-k, top-p, and max_new_tokens controls with a multi-turn conversation loop."
    },
    {
      phaseNumber: 6,
      title: "Benchmarking, Evaluation & Technical Report",
      details: "Compare MiniGPT vs pretrained foundation model across parameter scale, throughput (tok/s), memory footprint, and coherence."
    }
  ],
  rubric: [
    { component: "Dataset Preparation & Tokenization", marks: 10, criteria: "High-grade cleaning, deduplication, and bidirectional encoding integrity" },
    { component: "MiniGPT Neural Architecture", marks: 20, criteria: "Clean Pre-LN implementation, correct tensor transformations, and causal masking" },
    { component: "Training & Loss Optimization", marks: 15, criteria: "Loss convergence, AdamW optimization, gradient clipping, and checkpointing" },
    { component: "Pretrained Model Integration", marks: 15, criteria: "Successful loading and execution of Qwen or Llama open-weight checkpoint" },
    { component: "Inference Engineering & Decoding", marks: 15, criteria: "Correct implementation of greedy, temperature, top-k, and top-p sampling" },
    { component: "Benchmarking & Evaluation", marks: 10, criteria: "Rigorous measurement of TTFT, throughput (tok/s), and memory utilization" },
    { component: "Application Development", marks: 10, criteria: "Interactive chat loop handling context window, history, and graceful exit" },
    { component: "Documentation & Technical Report", marks: 5, criteria: "Thorough architectural documentation, comparative findings, and error analysis" }
  ]
};

export const LLM_ASSIGNMENTS = {
  conceptualQuestions: [
    "What is a Large Language Model and why is it categorized as a generative model?",
    "Explain the fundamental difference between traditional machine learning classifiers and LLMs.",
    "Why do modern foundation models universally adopt decoder-only architectures over encoder-decoder stacks?",
    "What is the mathematical purpose of causal attention masking in next-token prediction?",
    "Explain the trade-offs between word-level, character-level, and subword tokenization.",
    "Describe the step-by-step iterative merge procedure of the Byte Pair Encoding (BPE) algorithm.",
    "Why is a pretrained language model strictly coupled to its companion tokenizer?",
    "Derive the autoregressive probability chain rule: P(X) = Prod P(x_t | x_<t).",
    "How does Softmax map arbitrary real-valued logit scores into a valid probability distribution?",
    "Explain why cross-entropy loss L = -log(P_correct) penalizes low probability exponentially.",
    "How do shifted input and target sequences enable parallel sequence training in a single forward pass?",
    "Outline the 9 stages of an industrial LLM pretraining data pipeline.",
    "Why is document deduplication essential for pretraining efficiency and generalization?",
    "What is data mixture design, and what happens if a model's corpus lacks source code?",
    "How are learnable parameters distributed across embedding, attention, FFN, and normalization layers?",
    "Explain the architectural difference between a Dense Transformer and a Mixture-of-Experts (MoE) network.",
    "Why does an MoE model achieve the inference speed of a small model with the capacity of a large model?",
    "State the 6ND FLOPs rule of thumb and identify what each variable represents.",
    "Explain the core finding of the Chinchilla scaling law regarding model size vs training token volume.",
    "Compare the architectural philosophy, licensing, and access paradigm of OpenAI GPT, Meta Llama, and Alibaba Qwen.",
    "What are the three post-training adaptation stages (Pretraining, SFT, Preference Optimization)?",
    "Explain the mechanics of Reinforcement Learning from Human Feedback (RLHF) and the role of the reward model.",
    "How does Direct Preference Optimization (DPO) eliminate the need for an explicit separate reward model?",
    "Define context window and outline how an application allocates a 32K token budget.",
    "Why does standard self-attention suffer from quadratic O(T^2 d) computational and memory scaling?",
    "Explain how Rotary Position Embeddings (RoPE) encode relative token distance via complex rotations.",
    "Distinguish between the compute-bound prefill phase and the memory-bandwidth-bound decoding phase.",
    "Derive the KV-cache memory formula M_KV = 2 * L * B * T * H_KV * d_k * bytes.",
    "How do Grouped-Query Attention (GQA) and Multi-Query Attention (MQA) reduce KV-cache footprints?",
    "What is continuous batching and how does it prevent GPU idling during variable-length text generation?"
  ],
  mathProblems: [
    {
      problemNumber: 1,
      title: "Model Weight Memory Calculation",
      description: "A foundation model contains exactly 7,000,000,000 (7B) parameters. Calculate its weight storage requirements in FP32, FP16, INT8, and INT4.",
      solutionSteps: [
        "Formula: Memory = Parameters * Bytes_per_Parameter",
        "FP32: 7,000,000,000 * 4 bytes = 28,000,000,000 bytes = 28.0 GB",
        "FP16 / BF16: 7,000,000,000 * 2 bytes = 14,000,000,000 bytes = 14.0 GB",
        "INT8: 7,000,000,000 * 1 byte = 7,000,000,000 bytes = 7.0 GB",
        "INT4: 7,000,000,000 * 0.5 bytes = 3,500,000,000 bytes = 3.5 GB"
      ],
      finalAnswer: "FP32: 28.0 GB | FP16: 14.0 GB | INT8: 7.0 GB | INT4: 3.5 GB"
    },
    {
      problemNumber: 2,
      title: "Logits to Softmax Probability Derivation",
      description: "Given raw output logits z = [2.0, 1.0, 0.0] for a 3-token vocabulary, calculate the normalized probability distribution.",
      solutionSteps: [
        "Compute exponentials: e^2.0 = 7.3891, e^1.0 = 2.7183, e^0.0 = 1.0000",
        "Sum of exponentials: Z = 7.3891 + 2.7183 + 1.0000 = 11.1074",
        "P_1 = 7.3891 / 11.1074 = 0.6652",
        "P_2 = 2.7183 / 11.1074 = 0.2447",
        "P_3 = 1.0000 / 11.1074 = 0.0900",
        "Verify sum: 0.6652 + 0.2447 + 0.0900 = 0.9999 (~1.0)"
      ],
      finalAnswer: "P = [0.6652, 0.2447, 0.0900]"
    },
    {
      problemNumber: 3,
      title: "Cross-Entropy Loss Calculation",
      description: "A language model outputs probability P_target = 0.20 for the true next token. Calculate cross-entropy loss and compare against P_target = 0.80.",
      solutionSteps: [
        "Loss formula: L = -ln(P_target)",
        "For P = 0.20: L = -ln(0.20) = -(-1.6094) = 1.6094",
        "For P = 0.80: L = -ln(0.80) = -(-0.2231) = 0.2231",
        "Observation: Assigning lower probability to the true token increases loss by 7.2x!"
      ],
      finalAnswer: "L(0.20) = 1.6094 | L(0.80) = 0.2231"
    },
    {
      problemNumber: 4,
      title: "Context Window Budget Allocation",
      description: "An LLM API has a strict 16,384 token window. A request allocates 1,000 system tokens, 3,000 history tokens, 500 user query tokens, 7,000 retrieved context tokens, and reserves 2,048 output tokens. Calculate remaining headroom.",
      solutionSteps: [
        "Total Allocated = 1,000 + 3,000 + 500 + 7,000 + 2,048 = 13,548 tokens",
        "Remaining Headroom = 16,384 - 13,548 = 2,836 tokens"
      ],
      finalAnswer: "Remaining capacity = 2,836 tokens"
    },
    {
      problemNumber: 5,
      title: "KV-Cache Memory Footprint Calculation",
      description: "Calculate the exact KV cache memory for a model with L=24 layers, batch size B=1, sequence length T=2048, H_KV=8 heads, d_k=64 in FP16 (2 bytes).",
      solutionSteps: [
        "Formula: M_KV = 2 * L * B * T * H_KV * d_k * bytes",
        "M_KV = 2 * 24 * 1 * 2048 * 8 * 64 * 2",
        "M_KV = 48 * 2048 * 512 * 2 = 98,304 * 1024 * 8 = 805,306,368 bytes",
        "In MiB: 805,306,368 / (1024^2) = 768.0 MiB",
        "In GiB: 768 / 1024 = 0.75 GiB"
      ],
      finalAnswer: "805,306,368 bytes = 768.0 MiB (0.75 GiB)"
    },
    {
      problemNumber: 6,
      title: "Pretraining Computation (6ND Rule)",
      description: "Estimate the training FLOPs required to pretrain a 1B parameter model on 10B tokens using the 6ND rule of thumb.",
      solutionSteps: [
        "N = 1 * 10^9 parameters",
        "D = 10 * 10^9 tokens",
        "FLOPs = 6 * N * D = 6 * (10^9) * (10 * 10^9) = 6 * 10^19 FLOPs"
      ],
      finalAnswer: "6.0 x 10^19 FLOPs"
    }
  ],
  programmingChallenges: [
    "Develop a character-level tokenizer with encode() and decode() methods.",
    "Implement a frequency-based Byte Pair Encoding (BPE) merge routine.",
    "Construct a shifted input-target batch generator function from text data.",
    "Implement a PyTorch lower-triangular causal attention mask module.",
    "Write a numerically stable Softmax function in pure Python/NumPy.",
    "Implement cross-entropy loss from scratch without using torch.nn.CrossEntropyLoss.",
    "Build a single Pre-LayerNorm Transformer decoder block.",
    "Implement a full MiniGPT decoder stack with learned positional embeddings.",
    "Write a greedy decoding generation function.",
    "Implement temperature-scaled categorical sampling.",
    "Implement top-k candidate truncation filtering.",
    "Implement top-p (nucleus) cumulative mass filtering.",
    "Build an interactive parameter and KV-cache memory calculator.",
    "Write a script that loads Qwen3-0.6B via Hugging Face and formats prompts with chat templates.",
    "Develop an inference latency profiler that measures TTFT and tokens per second."
  ]
};

export const LLM_UNIVERSITY_RESOURCES = [
  {
    title: "Language Models are Few-Shot Learners (GPT-3)",
    authors: "Brown et al. (OpenAI, 2020)",
    description: "The seminal 175B parameter foundation paper demonstrating in-context learning, zero-shot/few-shot prompting, and massive scaling.",
    url: "https://arxiv.org/abs/2005.14165"
  },
  {
    title: "Training Compute-Optimal Large Language Models (Chinchilla)",
    authors: "Hoffmann et al. (DeepMind, 2022)",
    description: "Empirical derivation of compute-optimal scaling laws proving model size and training tokens should scale in equal proportion.",
    url: "https://arxiv.org/abs/2203.15556"
  },
  {
    title: "Hugging Face Causal Language Modeling Documentation",
    authors: "Hugging Face Team",
    description: "Definitive practical guide to training and fine-tuning decoder-only causal language models with shifted sequences.",
    url: "https://huggingface.co/docs/transformers/tasks/language_modeling"
  },
  {
    title: "Meta Llama Developer Platform & Models",
    authors: "Meta AI",
    description: "Official developer portal for Llama 3 and Llama 4 open-weight architectures, model cards, and fine-tuning guides.",
    url: "https://dev.meta.ai/llama"
  },
  {
    title: "Alibaba Qwen Official Documentation & Repository",
    authors: "Qwen Team (Alibaba Cloud)",
    description: "Comprehensive guides for Qwen3 dense and MoE architectures, coding models, and efficient deployment.",
    url: "https://qwen.readthedocs.io/en/stable/"
  },
  {
    title: "OpenAI API Reference & Text Generation Guides",
    authors: "OpenAI",
    description: "Official documentation covering GPT model selection, prompt formatting, context limits, and generation parameters.",
    url: "https://developers.openai.com/api/docs/models"
  },
  {
    title: "Hugging Face Generation Strategies: Greedy, Beam & Sampling",
    authors: "Hugging Face Team",
    description: "Deep dive into decoding parameter mechanics: temperature, top-k, top-p, repetition penalties, and beam search.",
    url: "https://huggingface.co/docs/transformers/main_classes/text_generation"
  },
  {
    title: "Stanford CS224N: Natural Language Processing with Deep Learning",
    authors: "Christopher Manning et al. (Stanford University)",
    description: "University lecture series on neural language models, Transformer decoders, self-attention, and foundation models.",
    url: "https://web.stanford.edu/class/cs224n/"
  }
];

export const LLM_EXAMINATION_QUESTIONS = [
  {
    question: "What is the primary training objective of a GPT-style base language model?",
    options: [
      "Image segmentation across pixel masks",
      "Next-token prediction using causal autoregressive context",
      "Relational database query optimization",
      "Unsupervised clustering via k-means"
    ],
    correctAnswer: 1,
    explanation: "GPT-style base language models are trained on the causal language modeling objective: maximizing the log-likelihood of predicting the true next token given all prior tokens."
  },
  {
    question: "Which neural architecture is standard for modern generative foundation models (GPT, Llama, Qwen)?",
    options: [
      "Bidirectional Encoder-only Transformer",
      "Decoder-only Transformer with causal masking",
      "Deep Convolutional Neural Network (CNN)",
      "Recurrent Neural Network with Highway Connections"
    ],
    correctAnswer: 1,
    explanation: "Modern generative language models use decoder-only Transformers because all language generation tasks can be formulated as next-token prediction without requiring a separate bidirectional encoder."
  },
  {
    question: "What is the primary function of a tokenizer in an LLM pipeline?",
    options: [
      "Update neural network weight matrices during backpropagation",
      "Convert natural language text strings into discrete numerical token IDs",
      "Generate synthetic training labels automatically",
      "Allocate GPU VRAM memory buffers"
    ],
    correctAnswer: 1,
    explanation: "Neural networks process numerical tensors. A tokenizer decomposes raw text into discrete subwords or bytes and maps them to integer vocabulary IDs."
  },
  {
    question: "What mechanism prevents a decoder position from attending to future tokens during training?",
    options: [
      "Temperature scaling",
      "Lower-triangular causal attention mask",
      "Weight quantization",
      "Dropout regularization"
    ],
    correctAnswer: 1,
    explanation: "A causal mask sets attention scores for all future positions (j > i) to negative infinity (-inf), ensuring Softmax assigns exactly 0.0 probability to future tokens."
  },
  {
    question: "What occurs during the pretraining stage of a Large Language Model?",
    options: [
      "Only external API endpoints are benchmarked",
      "The model learns statistical patterns, grammar, and reasoning from vast token corpora",
      "Model weights are randomly deleted to compress storage",
      "The tokenizer is retrained on every user request"
    ],
    correctAnswer: 1,
    explanation: "Pretraining is self-supervised training on trillions of tokens where the model learns linguistic structure, factual knowledge, and reasoning capabilities."
  },
  {
    question: "What characterizes a Mixture-of-Experts (MoE) architecture?",
    options: [
      "A network lacking feed-forward neural layers",
      "A system that dynamically routes each token through a selected subset of expert networks",
      "A character-level tokenizer",
      "A deterministic greedy decoding algorithm"
    ],
    correctAnswer: 1,
    explanation: "An MoE model contains multiple feed-forward expert networks per block; a learned parametric router selects only top-k experts per token, decoupling total parameters from active compute."
  },
  {
    question: "What does an LLM context window define?",
    options: [
      "The total number of Transformer decoder blocks",
      "The maximum token budget that a sequence (inputs + history + outputs) can process",
      "The number of attention heads in each layer",
      "The vocabulary size of the BPE tokenizer"
    ],
    correctAnswer: 1,
    explanation: "The context window specifies the maximum number of tokens that the model can process concurrently in a single forward pass, shared across system prompt, history, query, and output."
  },
  {
    question: "What is the primary purpose of Key-Value (KV) caching during autoregressive decoding?",
    options: [
      "Store user login credentials in secure storage",
      "Reuse previously computed Key and Value states to avoid redundant recalculation",
      "Expand the model's vocabulary dynamically",
      "Apply 4-bit quantization to model weights"
    ],
    correctAnswer: 1,
    explanation: "Autoregressive generation generates one token at a time. KV caching stores earlier Key and Value representations in GPU memory, reducing per-token decoding complexity from O(T) to O(1)."
  },
  {
    question: "What parameter does Top-p (nucleus) sampling control?",
    options: [
      "The total parameter count of the model",
      "The cumulative probability mass threshold for candidate token selection",
      "The hidden model embedding dimension",
      "The training batch size"
    ],
    correctAnswer: 1,
    explanation: "Top-p sampling dynamically selects the smallest set of candidate tokens whose cumulative Softmax probability mass equals or exceeds threshold p."
  },
  {
    question: "What is the primary objective of model quantization (e.g., FP16 -> INT4)?",
    options: [
      "Increase the number of Transformer layers",
      "Reduce numerical precision to lower memory requirements and increase serving efficiency",
      "Add more training tokens to the pretraining corpus",
      "Replace the tokenizer with a character-level dictionary"
    ],
    correctAnswer: 1,
    explanation: "Quantization represents weights with lower bit-widths (e.g. 4 bits instead of 16 bits), slashing model VRAM requirements by up to 4x and speeding up memory-bound inference."
  }
];

export const LLM_COMPETENCY_CHECKLIST = [
  "Explain the foundations, capabilities, and applications of Large Language Models.",
  "Understand the decoder-only Transformer architecture and Pre-LayerNorm formulation.",
  "Compare OpenAI GPT, Meta Llama, and Alibaba Qwen model families.",
  "Implement or inspect a model-specific subword tokenizer (BPE).",
  "Explain causal next-token prediction and the probability chain rule mathematically.",
  "Implement shifted input and target sequence pairs for parallel training.",
  "Understand cross-entropy loss, Softmax temperature, and perplexity.",
  "Explain the complete 9-stage pretraining data pipeline (cleaning, MinHash, filtering).",
  "Understand model parameter counts and Dense versus Mixture-of-Experts (MoE) routing.",
  "Calculate model weight memory requirements across FP32, FP16, INT8, and INT4.",
  "Understand Chinchilla scaling laws and the 6ND compute rule of thumb.",
  "Compare pretraining, supervised fine-tuning (SFT), and preference optimization (RLHF/DPO).",
  "Calculate token budgets within a constrained context window.",
  "Explain the distinction between the compute-bound prefill phase and memory-bound decoding.",
  "Derive and calculate KV-cache memory footprints (M_KV = 2 * L * B * T * H_KV * d_k * bytes).",
  "Implement greedy decoding, temperature scaling, top-k, and top-p nucleus sampling.",
  "Run and inspect a real pretrained open-weight model (Qwen or Llama).",
  "Build, train, and serialize a miniature GPT model from scratch in PyTorch.",
  "Measure inference latency (TTFT), token throughput (tok/s), and memory consumption."
];
