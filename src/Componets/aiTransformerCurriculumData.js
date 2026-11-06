/**
 * AI ENGINEERING & GENERATIVE AI - MODULE 06
 * Comprehensive University-Grade Curriculum Data: Transformer Architecture from Scratch
 * 
 * Detailed across 10 in-depth curriculum units, 8 hands-on practical labs,
 * capstone project (Neural Machine Translation System),
 * technical interview prep, 10 quiz assessments, and academic bibliography.
 */

export const TRANSFORMER_CURRICULUM_UNITS = [
  {
    id: "unit-01",
    part: "Part I: Foundations of the Transformer Paradigm",
    partNumber: 1,
    unitNumber: 1,
    title: "Introduction to Transformers & The Demise of Recurrent Networks",
    duration: "2.5 Hours",
    level: "Advanced",
    summary:
      "Historical genesis of the Transformer architecture (Vaswani et al., 2017). The mathematical and hardware limitations of sequential RNN/LSTM computation, vanishing gradient bottlenecks across long sequences, and the architectural paradigm shift to parallel self-attention.",
    coreConcepts: [
      "The Sequential Computation Bottleneck: O(n) sequential dependency preventing GPU saturation",
      "Long-Range Dependency Gradient Decay: Exponential information compression in hidden states",
      "Direct Attention Shortcuts: O(1) path length between any arbitrary token pairs in a sequence",
      "Architectural Taxonomy: Encoder-Only (BERT), Decoder-Only (GPT), and Encoder-Decoder (T5/Original)"
    ],
    deepDiveText: `
### 1. The Historical Crisis of Sequential Recurrence

Prior to 2017, the undisputed state of the art in sequence processing was the Recurrent Neural Network (RNN) and its gated variants: the Long Short-Term Memory (LSTM) network and Gated Recurrent Unit (GRU). While effective for short sentences, recurrent architectures suffered from two fatal mathematical and computational flaws:

1. **The Sequential Execution Bottleneck (Non-Parallelizable Training)**:
   An RNN computes hidden states sequentially according to the recurrence relation:
   $$\\mathbf{h}_t = \\tanh(\\mathbf{W}_{hh} \\mathbf{h}_{t-1} + \\mathbf{W}_{xh} \\mathbf{x}_t + \\mathbf{b}_h)$$
   Because step $t$ strictly depends on step $t-1$, it is mathematically impossible to compute $\\mathbf{h}_t$ until $\\mathbf{h}_{t-1}$ has completed. This sequential dependency fundamentally prevents modern parallel hardware (NVIDIA GPUs and Google TPUs containing thousands of parallel Tensor Cores) from processing sequence tokens concurrently during training.

2. **Long-Range Dependency Information Bottleneck**:
   In recurrent networks, information from the beginning of a document must traverse step-by-step through every intermediate hidden vector to reach the end. Even with additive LSTM cell states, backpropagation through time across hundreds of tokens leads to exponential signal decay or catastrophic memory compression into a fixed-width vector $\\mathbf{h}_T$.

### 2. The Transformer Breakthrough: O(1) Maximum Path Length

In the landmark paper *"Attention Is All You Need"* (Vaswani et al., 2017), researchers eliminated recurrence entirely. By relying solely on **Self-Attention**, every token in an input sequence can attend to every other token directly in a single computational step:

| Architecture Feature | Recurrent Neural Network (RNN/LSTM) | Transformer (Self-Attention) |
| :--- | :--- | :--- |
| **Computational Dependency** | Strictly Sequential: $O(n)$ time | Fully Parallel across all $n$ positions |
| **Path Length Between Tokens** | $O(n)$ steps (information degrades over time) | $O(1)$ direct connection between any token pair |
| **Positional Awareness** | Implicitly encoded in order of execution | Must be explicitly injected via Positional Encoding |
| **Training Speed on GPUs** | Slow (bound by memory bandwidth and step latency) | Extremely Fast (dominated by large, parallel GEMM matrix multiplications) |
| **Inference Step** | Autoregressive $O(1)$ per step | Autoregressive with $O(1)$ step using KV Cache |

### 3. The Three Transformer Families

* **Encoder-Only (e.g., BERT, RoBERTa)**: Employs unmasked, bidirectional self-attention. Used for classification, sequence labeling, and deep representation extraction.
* **Decoder-Only (e.g., GPT-4, LLaMA, Claude, DeepSeek)**: Uses causal (unidirectional) self-attention. Ideal for autoregressive next-token prediction and generative tasks.
* **Encoder-Decoder (e.g., Original Transformer, T5, BART)**: Combines bidirectional encoding of source sequences with causally masked decoding and cross-attention for sequence-to-sequence translation and summarization.
    `,
    codeSnippet: `# PyTorch Benchmark: Sequential Recurrence vs. Parallel Matrix Multiplication
import time
import torch
import torch.nn as nn

batch_size = 32
seq_len = 512
d_model = 512

x = torch.randn(batch_size, seq_len, d_model)
rnn = nn.RNN(d_model, d_model, batch_first=True)
linear_proj = nn.Linear(d_model, d_model)

# 1. Benchmark Sequential Recurrence
start = time.time()
rnn_out, _ = rnn(x)
torch.cuda.synchronize() if torch.cuda.is_available() else None
rnn_time = time.time() - start

# 2. Benchmark Parallel Projection (Transformer Attention Projections)
start = time.time()
proj_out = linear_proj(x)
torch.cuda.synchronize() if torch.cuda.is_available() else None
proj_time = time.time() - start

print(f"Sequential RNN Latency:    {rnn_time * 1000:.2f} ms")
print(f"Parallel Linear Projection: {proj_time * 1000:.2f} ms (Highly parallelized GEMM)")`,
    challenges: [
      "Why does a Transformer's $O(1)$ path length prevent the vanishing gradient problems common in RNNs?",
      "During training, Transformers process all tokens in parallel. Why is autoregressive inference still sequential?",
      "Compare the memory and compute trade-offs of Encoder-Decoder models (like T5) versus Decoder-Only models (like LLaMA) for code generation."
    ]
  },
  {
    id: "unit-02",
    part: "Part I: Foundations of the Transformer Paradigm",
    partNumber: 1,
    unitNumber: 2,
    title: "The Attention Mechanism: Queries, Keys, Values & Scaled Dot-Product",
    duration: "3.5 Hours",
    level: "Advanced",
    summary:
      "Mathematical foundation of scaled dot-product attention: Query, Key, and Value geometric spaces, similarity scoring via inner products, variance preservation under high dimensions, and softmax probability normalization.",
    coreConcepts: [
      "Information Retrieval Analogy: Query (search term), Key (index metadata), Value (document content)",
      "Learned Projections: Transforming inputs via W_Q, W_K, and W_V matrices",
      "Scaled Dot-Product Formula: Attention(Q,K,V) = Softmax(QK^T / sqrt(d_k)) * V",
      "The Variance Proof: Why dividing by sqrt(d_k) prevents softmax saturation and vanishing gradients"
    ],
    deepDiveText: `
### 1. Conceptual Framing: The Query-Key-Value Paradigm

Attention is a dynamic routing mechanism that enables each token in a sequence to construct a contextualized representation by querying other tokens. Borrowing from database systems and search retrieval:
* **Query ($\\mathbf{Q}$)**: What the current token is searching for (e.g., *"I am a verb, looking for my direct object"*).
* **Key ($\\mathbf{K}$)**: What information this token contains to advertise itself to prospective queries (e.g., *"I am a noun phrase"*).
* **Value ($\\mathbf{V}$)**: The actual semantic payload that will be retrieved and aggregated if a Query matches this Key.

Given an input matrix $\\mathbf{X} \\in \\mathbb{R}^{n \\times d_{\\text{model}}}$, we apply three learned weight projections:
$$\\mathbf{Q} = \\mathbf{X} \\mathbf{W}_Q, \\quad \\mathbf{K} = \\mathbf{X} \\mathbf{W}_K, \\quad \\mathbf{V} = \\mathbf{X} \\mathbf{W}_V$$
Where $\\mathbf{W}_Q, \\mathbf{W}_K \\in \\mathbb{R}^{d_{\\text{model}} \\times d_k}$ and $\\mathbf{W}_V \\in \\mathbb{R}^{d_{\\text{model}} \\times d_v}$.

### 2. The Scaled Dot-Product Attention Equation

The canonical attention formula is defined as:
$$\\boxed{\\text{Attention}(\\mathbf{Q}, \\mathbf{K}, \\mathbf{V}) = \\text{Softmax}\\left(\\frac{\\mathbf{Q}\\mathbf{K}^T}{\\sqrt{d_k}}\\right)\\mathbf{V}}$$

The computation unfolds in three distinct algebraic phases:
1. **Compatibility Scoring**: $\\mathbf{S} = \\mathbf{Q}\\mathbf{K}^T \\in \\mathbb{R}^{n \\times n}$. The inner dot product measures geometric alignment.
2. **Variance Scaling**: $\\mathbf{S}_{\\text{scaled}} = \\frac{\\mathbf{S}}{\\sqrt{d_k}}$.
3. **Probability Normalization & Aggregation**: $\\mathbf{A} = \\text{Softmax}(\\mathbf{S}_{\\text{scaled}})$, followed by the weighted sum $\\mathbf{O} = \\mathbf{A}\\mathbf{V} \\in \\mathbb{R}^{n \\times d_v}$.

### 3. Mathematical Proof: Why Scale by $\\sqrt{d_k}$?

Assume the components of $\\mathbf{q} \\in \\mathbb{R}^{d_k}$ and $\\mathbf{k} \\in \\mathbb{R}^{d_k}$ are independent random variables with zero mean ($\\mu = 0$) and unit variance ($\\sigma^2 = 1$).
Their dot product is:
$$z = \\mathbf{q} \\cdot \\mathbf{k} = \\sum_{i=1}^{d_k} q_i k_i$$
By linearity of expectation and variance of independent products:
$$\\mathbb{E}[z] = \\sum_{i=1}^{d_k} \\mathbb{E}[q_i]\\mathbb{E}[k_i] = 0$$
$$\\text{Var}(z) = \\sum_{i=1}^{d_k} \\text{Var}(q_i k_i) = \\sum_{i=1}^{d_k} \\mathbb{E}[q_i^2]\\mathbb{E}[k_i^2] = \\sum_{i=1}^{d_k} (1)(1) = d_k$$
As the key dimension $d_k$ grows large (e.g. $d_k = 64$ or $128$), the standard deviation of $z$ scales as $\\sqrt{d_k}$ (e.g. $\\sqrt{64} = 8$).
Without scaling, large dot products push the Softmax function into regions with extremely small gradients (vanishing gradients), stalling backpropagation. Dividing by $\\sqrt{d_k}$ scales the variance back to 1:
$$\\text{Var}\\left(\\frac{\\mathbf{q} \\cdot \\mathbf{k}}{\\sqrt{d_k}}\\right) = \\frac{\\text{Var}(z)}{d_k} = \\frac{d_k}{d_k} = 1$$
    `,
    codeSnippet: `# Scaled Dot-Product Attention from First Principles
import torch
import math

def scaled_dot_product_attention(Q, K, V, mask=None):
    """
    Q: [batch_size, num_heads, seq_len_q, d_k]
    K: [batch_size, num_heads, seq_len_k, d_k]
    V: [batch_size, num_heads, seq_len_v, d_v]
    mask: [batch_size, 1, seq_len_q, seq_len_k] (optional Boolean or float mask)
    """
    d_k = Q.size(-1)
    
    # 1. Compute dot products: Q @ K.T -> [batch, heads, seq_len_q, seq_len_k]
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    
    # 2. Apply mask if provided (e.g. -inf for disallowed positions)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, float('-inf'))
        
    # 3. Softmax along key dimension
    attn_weights = torch.softmax(scores, dim=-1)
    
    # 4. Weighted combination of values
    output = torch.matmul(attn_weights, V)
    return output, attn_weights

# Numerical verification with 2 tokens of dimension 4
q = torch.tensor([[[[1.0, 0.0, 1.0, 0.0]]]])
k = torch.tensor([[[[1.0, 0.0, 1.0, 0.0], [0.0, 1.0, 0.0, 1.0]]]])
v = torch.tensor([[[[10.0, 0.0], [0.0, 20.0]]]])
out, w = scaled_dot_product_attention(q, k, v)
print("Attention Weights:", w)
print("Attention Output:", out)`,
    challenges: [
      "Prove algebraically why $\\text{Var}(XY) = 1$ when $X, Y \\sim \\mathcal{N}(0, 1)$ are independent random variables.",
      "If $d_k = 128$, calculate the expected standard deviation of the unscaled dot product $QK^T$.",
      "What numerical instability occurs when computing `torch.softmax(scores)` with extreme positive or negative numbers, and how does the log-sum-exp trick resolve it?"
    ]
  },
  {
    id: "unit-03",
    part: "Part I: Foundations of the Transformer Paradigm",
    partNumber: 1,
    unitNumber: 3,
    title: "Multi-Head Attention: Parallel Representation Subspaces",
    duration: "3.5 Hours",
    level: "Advanced",
    summary:
      "Engineering multi-head attention: projecting embeddings into multiple orthogonal representation subspaces, parallel tensor transformations, head splitting and transposition, concatenation, and final linear blending.",
    coreConcepts: [
      "The Subspace Specialization Thesis: Why a single attention head blurs diverse linguistic relationships",
      "Dimension Invariance: Splitting d_model into h heads of dimension d_k = d_model / h",
      "Efficient Tensor Reshaping: (Batch, Seq, d_model) -> (Batch, Heads, Seq, d_k)",
      "Output Projection Matrix W_O: Blending parallel subspace representations back into d_model"
    ],
    deepDiveText: `
### 1. Why a Single Attention Head is Insufficient

In natural language, a single token simultaneously participates in multiple orthogonal linguistic relationships:
* **Syntactic dependency**: Verb connected to its Subject and Object.
* **Coreference**: Pronoun connected to its antecedent.
* **Morphological congruence**: Adjective agreeing with gender/number of a Noun.
* **Discourse flow**: Temporal markers referencing earlier paragraphs.

If a model uses only one attention head, the Softmax distribution over all tokens forces a compromise, averaging these distinct relationships into a single blurry distribution.

### 2. The Multi-Head Mathematical Formulation

Multi-Head Attention projects $\\mathbf{Q}$, $\\mathbf{K}$, and $\\mathbf{V}$ into $h$ distinct lower-dimensional subspaces, computes scaled dot-product attention independently across each head, and concatenates the results:

$$\\text{MultiHead}(\\mathbf{Q}, \\mathbf{K}, \\mathbf{V}) = \\text{Concat}(\\text{head}_1, \\dots, \\text{head}_h)\\mathbf{W}^O$$
$$\\text{where } \\text{head}_i = \\text{Attention}(\\mathbf{Q}\\mathbf{W}_i^Q, \\mathbf{K}\\mathbf{W}_i^K, \\mathbf{V}\\mathbf{W}_i^V)$$

With $d_{\\text{model}} = 512$ and $h = 8$ heads:
$$d_k = d_v = \\frac{d_{\\text{model}}}{h} = \\frac{512}{8} = 64$$
Each head operates on 64-dimensional vectors. Concatenating 8 heads produces an $8 \\times 64 = 512$ dimensional vector, matching $d_{\\text{model}}$ exactly!

### 3. Production Tensor Reshaping Magic

Rather than creating 8 separate nn.Linear layers, high-performance implementations use **single unified linear projections** followed by reshaping and transposition:
1. Unified Projection: $\\mathbf{X} \\in \\mathbb{R}^{B \\times S \\times d_{\\text{model}}} \\xrightarrow{\\mathbf{W}_Q} \\mathbf{Q} \\in \\mathbb{R}^{B \\times S \\times d_{\\text{model}}}$.
2. Reshape: $\\mathbb{R}^{B \\times S \\times h \\times d_k}$.
3. Transpose dimensions 1 and 2: $\\mathbb{R}^{B \\times h \\times S \\times d_k}$.
This allows batch matrix multiplication torch.matmul to process all $h$ heads concurrently across the entire batch!
    `,
    codeSnippet: `import torch
import torch.nn as nn
import math

class MultiHeadAttention(nn.Module):
    def __init__(self, d_model=512, num_heads=8, dropout=0.1):
        super().__init__()
        assert d_model % num_heads == 0, "d_model must be divisible by num_heads"
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads

        # Single batched projections for Q, K, V
        self.w_q = nn.Linear(d_model, d_model)
        self.w_k = nn.Linear(d_model, d_model)
        self.w_v = nn.Linear(d_model, d_model)
        self.w_o = nn.Linear(d_model, d_model)
        self.dropout = nn.Dropout(dropout)

    def forward(self, q, k, v, mask=None):
        batch_size = q.size(0)

        # 1. Linear projections and reshape to [B, num_heads, Seq, d_k]
        Q = self.w_q(q).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        K = self.w_k(k).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)
        V = self.w_v(v).view(batch_size, -1, self.num_heads, self.d_k).transpose(1, 2)

        # 2. Compute attention scores across all heads concurrently
        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, float('-inf'))
        
        attn = self.dropout(torch.softmax(scores, dim=-1))
        context = torch.matmul(attn, V) # [B, num_heads, Seq, d_k]

        # 3. Concatenate heads back to [B, Seq, d_model]
        context = context.transpose(1, 2).contiguous().view(batch_size, -1, self.d_model)
        return self.w_o(context)

# Forward pass validation
mha = MultiHeadAttention(d_model=128, num_heads=4)
x = torch.randn(2, 16, 128)
out = mha(x, x, x)
print("MultiHeadAttention Output Shape:", out.shape) # [2, 16, 128]`,
    challenges: [
      "Why must `.contiguous()` be called in PyTorch before `.view()` after transposing tensor dimensions?",
      "Prove why a multi-head attention layer with $h$ heads has the exact same parameter count and computational complexity as a single-head attention layer operating on the full $d_{\\text{model}}$.",
      "What is the difference between Multi-Head Attention (MHA), Multi-Query Attention (MQA), and Grouped-Query Attention (GQA)?"
    ]
  },
  {
    id: "unit-04",
    part: "Part II: Building Blocks of the Transformer",
    partNumber: 2,
    unitNumber: 4,
    title: "Positional Encodings: Sinusoidal Functions to Rotary Embeddings",
    duration: "3.0 Hours",
    level: "Advanced",
    summary:
      "Injecting spatial order into permutation-invariant self-attention: mathematical derivation of Vaswani's sinusoidal harmonic functions, linear projection property for relative shifts, learned positional embeddings, and modern Rotary Position Embeddings (RoPE).",
    coreConcepts: [
      "Permutation Invariance of Pure Self-Attention: Why 'dog chased cat' = 'cat chased dog' without order",
      "Harmonic Wave Formulation: Sine for even dimensions, Cosine for odd dimensions",
      "The Relative Offset Linear Property: PE(pos + k) as a linear transformation of PE(pos)",
      "Rotary Position Embeddings (RoPE): Rotating Q and K vectors in 2D coordinate planes"
    ],
    deepDiveText: `
### 1. The Permutation Invariance Dilemma

Pure self-attention operates on sets of vectors, not ordered sequences. If you randomly permute the order of input tokens, the resulting output vectors are identical up to the exact same permutation:
$$\\text{Attention}(\\mathbf{P}\\mathbf{X}) = \\mathbf{P}\\text{Attention}(\\mathbf{X})$$
For human language, token order is fundamental to meaning: *"The engineer tested the server"* vs. *"The server tested the engineer"*. Therefore, sequence position must be explicitly infused into the token embeddings.

### 2. Vaswani's Sinusoidal Harmonic Formulation

The original Transformer utilizes fixed, deterministic geometric wave functions:
$$PE_{(pos, 2i)} = \\sin\\left(\\frac{pos}{10000^{2i/d_{\\text{model}}}}\\right)$$
$$PE_{(pos, 2i+1)} = \\cos\\left(\\frac{pos}{10000^{2i/d_{\\text{model}}}}\\right)$$
Where:
* $pos \\in [0, \\text{max\\_len}-1]$ is the absolute token position index in the sentence.
* $i \\in [0, d_{\\text{model}}/2 - 1]$ indexes the feature dimension pair.
* The wavelength forms a geometric progression from $2\\pi$ to $10000 \\cdot 2\\pi$.

**The Linear Shift Property**:
For any fixed offset $k$, there exists a linear transformation matrix $\\mathbf{M}_k$ such that:
$$PE_{pos + k} = \\mathbf{M}_k PE_{pos}$$
This allows the attention mechanism to easily learn to attend to relative positions ($pos - j$).

### 3. Sinusoidal vs. Learned vs. Rotary (RoPE)

* **Sinusoidal (Original)**: Fixed parameters, generalizes to longer sequences, zero extra model weights.
* **Learned Absolute (BERT, GPT-2)**: Embedding matrix nn.Embedding(max_pos, d_model). Simple to train, but hard-capped at training sequence length.
* **Rotary Position Embeddings (RoPE - LLaMA, Mistral, DeepSeek)**: Rotates $\\mathbf{q}$ and $\\mathbf{k}$ in complex planes:
  $$\\mathbf{q}_m^T \\mathbf{k}_n = g(\\mathbf{x}_m, \\mathbf{x}_n, m - n)$$
  Injects relative position directly into the inner product without modifying token values!
    `,
    codeSnippet: `import torch
import torch.nn as nn
import math

class SinusoidalPositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000, dropout=0.1):
        super().__init__()
        self.dropout = nn.Dropout(p=dropout)

        # Create constant PE matrix
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len, dtype=torch.float).unsqueeze(1)
        div_term = torch.exp(torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model))

        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        pe = pe.unsqueeze(0) # [1, max_len, d_model]
        
        # Register as persistent buffer (not a trainable parameter)
        self.register_buffer('pe', pe)

    def forward(self, x):
        # x: [batch_size, seq_len, d_model]
        x = x + self.pe[:, :x.size(1), :]
        return self.dropout(x)

pe_module = SinusoidalPositionalEncoding(d_model=64, max_len=100)
sample_emb = torch.randn(2, 10, 64)
output = pe_module(sample_emb)
print("Embedded + Positional Tensor Shape:", output.shape)`,
    challenges: [
      "Using trigonometric angle sum identities, derive the $2 \\times 2$ rotation matrix that transforms [sin(\\omega pos), cos(\\omega pos)] into [sin(\\omega(pos+k)), cos(\\omega(pos+k))].",
      "Why does adding positional encodings to token embeddings not corrupt the original semantic word representations?",
      "Why do modern LLMs use Rotary Position Embeddings (RoPE) instead of absolute sinusoidal addition?"
    ]
  },
  {
    id: "unit-05",
    part: "Part II: Building Blocks of the Transformer",
    partNumber: 2,
    unitNumber: 5,
    title: "Position-Wise Feed-Forward Networks & Non-Linear Expressivity",
    duration: "2.5 Hours",
    level: "Advanced",
    summary:
      "Deep dive into position-wise feed-forward neural networks: dimension expansion ($d_{ff} = 4 \\times d_{\\text{model}}$), non-linear feature projection, ReLU vs. GeLU vs. SwiGLU activation functions, and memory footprint in LLM parameter distribution.",
    coreConcepts: [
      "The Two-Layer MLP Architecture: FFN(x) = max(0, xW_1 + b_1)W_2 + b_2",
      "Dimension Expansion: Why Transformer blocks expand from 512 to 2048 dimensions",
      "Position-Wise Independence: Identical weights applied to each token vector independently",
      "Modern Activations: GeLU (Gaussian Error Linear Unit) and SwiGLU (Swish Gated Linear Unit)"
    ],
    deepDiveText: `
### 1. The Role of the Feed-Forward Sublayer

While multi-head self-attention enables tokens to exchange contextual information with one another, attention itself is fundamentally a **linear weighted combination** of value vectors. To introduce complex nonlinear reasoning and store factual world knowledge, every Transformer block incorporates a **Position-Wise Feed-Forward Network (FFN)**.

### 2. The Mathematical Formulation

The FFN consists of two linear transformations with a non-linear activation in between:
$$\\text{FFN}(\\mathbf{x}) = \\sigma(\\mathbf{x}\\mathbf{W}_1 + \\mathbf{b}_1)\\mathbf{W}_2 + \\mathbf{b}_2$$
In the standard Transformer architecture:
* Input & Output dimension: $d_{\\text{model}} = 512$
* Inner hidden layer dimension: $d_{ff} = 4 \\times d_{\\text{model}} = 2048$
* The same linear weights $\\mathbf{W}_1$ and $\\mathbf{W}_2$ are applied to every position independently across the sequence.

### 3. FFNs as Key-Value Memories in Large Language Models

Research by Geva et al. (2021) revealed that the feed-forward layers in Transformers function analogously to **associative key-value memories**:
* The first layer $\\mathbf{W}_1$ acts as a key detector, activating when certain conceptual or syntactic patterns occur.
* The second layer $\\mathbf{W}_2$ acts as a value retriever, adding factual knowledge tokens to the residual stream.
* In modern models, the FFN accounts for approximately **two-thirds** of all non-embedding parameters!
    `,
    codeSnippet: `import torch
import torch.nn as nn

class PositionWiseFeedForward(nn.Module):
    def __init__(self, d_model=512, d_ff=2048, dropout=0.1):
        super().__init__()
        self.linear1 = nn.Linear(d_model, d_ff)
        self.activation = nn.ReLU() # or nn.GELU() in modern LLMs
        self.dropout = nn.Dropout(dropout)
        self.linear2 = nn.Linear(d_ff, d_model)

    def forward(self, x):
        # x: [batch, seq_len, d_model] -> [batch, seq_len, d_ff] -> [batch, seq_len, d_model]
        return self.linear2(self.dropout(self.activation(self.linear1(x))))

ffn = PositionWiseFeedForward(d_model=128, d_ff=512)
x = torch.randn(4, 20, 128)
out = ffn(x)
print("FFN Output Shape:", out.shape)`,
    challenges: [
      "Calculate the exact parameter count of a FeedForwardNetwork with $d_{\\text{model}}=1024$ and $d_{ff}=4096$ including biases.",
      "Why did modern architectures replace ReLU with GeLU or SwiGLU?",
      "How does the computational complexity of the FFN compare to Multi-Head Attention when sequence length $n$ becomes very large ($n > 10,000$)?"
    ]
  },
  {
    id: "unit-06",
    part: "Part II: Building Blocks of the Transformer",
    partNumber: 2,
    unitNumber: 6,
    title: "Residual Connections & Layer Normalization: Gradient Highways",
    duration: "3.0 Hours",
    level: "Advanced",
    summary:
      "Stabilizing deep Transformer architectures: mathematical mechanics of residual addition $x + \\text{Sublayer}(x)$, LayerNorm vs BatchNorm derivations, and the architectural battle between Post-LN (Vaswani 2017) and Pre-LN (modern LLMs).",
    coreConcepts: [
      "The Residual Highway: Preventing gradient vanishing across 100+ layer architectures",
      "Layer Normalization Formula: Mean and variance computed across features, independent of batch size",
      "Post-LN vs. Pre-LN: Why Post-LN requires careful learning rate warmup to avoid early divergence",
      "RMSNorm: Computationally efficient root-mean-square normalization without mean-centering"
    ],
    deepDiveText: `
### 1. The Residual Connection (Skip Connection)

He et al. (2016) demonstrated that adding identity skip connections allows gradients to flow unimpeded directly from final layers back to initial layers:
$$\\mathbf{x}_{l+1} = \\mathbf{x}_l + \\mathcal{F}(\\mathbf{x}_l)$$
When backpropagating the loss $\\mathcal{L}$:
$$\\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{x}_l} = \\frac{\\partial \\mathcal{L}}{\\partial \\mathbf{x}_{l+1}} \\left(\\mathbf{I} + \\frac{\\partial \\mathcal{F}}{\\partial \\mathbf{x}_l}\\right)$$
The identity term $\\mathbf{I}$ ensures that gradients never vanish, even if the sublayer's Jacobians approach zero!

### 2. Layer Normalization (LayerNorm)

Unlike Batch Normalization (which normalizes across the batch dimension and depends on batch statistics), **Layer Normalization** (Ba, Kiros, & Hinton, 2016) normalizes across the feature dimension $d$ for each individual token independently:

$$\\mu = \\frac{1}{d}\\sum_{i=1}^d x_i, \\quad \\sigma^2 = \\frac{1}{d}\\sum_{i=1}^d (x_i - \\mu)^2$$
$$\\hat{x}_i = \\frac{x_i - \\mu}{\\sqrt{\\sigma^2 + \\epsilon}}, \\quad y_i = \\gamma_i \\hat{x}_i + \\beta_i$$
Where $\\gamma$ and $\\beta$ are learnable scale and shift vectors of size $d_{\\text{model}}$.

### 3. Post-LN vs. Pre-LN Architectural Dilemma

* **Post-LN (Original 2017 Transformer)**:
  $$\\mathbf{x}_{\\text{out}} = \\text{LayerNorm}(\\mathbf{x} + \\text{Sublayer}(\\mathbf{x}))$$
  * *Problem*: Gradients at the final layers are normalized, but gradients entering early layers scale poorly, requiring delicate learning rate warmup schedules to prevent training divergence.
* **Pre-LN (Modern LLMs: GPT-3, LLaMA)**:
  $$\\mathbf{x}_{\\text{out}} = \\mathbf{x} + \\text{Sublayer}(\\text{LayerNorm}(\\mathbf{x}))$$
  * *Advantage*: The residual stream remains strictly linear without normalization barriers, guaranteeing ultra-stable gradient flow and allowing immediate training without complex warmups.
    `,
    codeSnippet: `import torch
import torch.nn as nn

class PreLNSublayer(nn.Module):
    """Modern Pre-LN Residual Connection with LayerNorm"""
    def __init__(self, d_model, dropout=0.1):
        super().__init__()
        self.norm = nn.LayerNorm(d_model)
        self.dropout = nn.Dropout(dropout)

    def forward(self, x, sublayer_fn):
        # Normalization applied BEFORE sublayer, added directly to residual x
        return x + self.dropout(sublayer_fn(self.norm(x)))

# Test Pre-LN block
block = PreLNSublayer(d_model=64)
dummy_x = torch.randn(2, 8, 64)
out = block(dummy_x, lambda t: t * 1.05)
print("Pre-LN Output Tensor Shape:", out.shape)`,
    challenges: [
      "Prove why LayerNorm is completely invariant to scaling and shifting of the input features: $\\text{LN}(a\\mathbf{x} + b) = \\text{LN}(\\mathbf{x})$.",
      "Why is Batch Normalization unsuitable for natural language processing with variable-length sequences?",
      "How does RMSNorm simplify LayerNorm, and what computational speedup does it achieve?"
    ]
  },
  {
    id: "unit-07",
    part: "Part III: Encoder & Decoder Architecture",
    partNumber: 3,
    unitNumber: 7,
    title: "The Transformer Encoder: Bidirectional Contextualization",
    duration: "3.5 Hours",
    level: "Advanced",
    summary:
      "Assembling the complete Transformer Encoder stack: stacking $N=6$ identical encoder layers, unmasked bidirectional self-attention, input source padding masks, and contextual sequence tensor representations.",
    coreConcepts: [
      "The Full Encoder Layer Anatomy: Multi-Head Self-Attention + LayerNorm + FFN + LayerNorm",
      "Source Padding Masks: Preventing [PAD] tokens from contributing attention mass",
      "Stacking N Layers: Iterative contextual refinement through progressive abstraction",
      "Encoder Output Semantics: Contextual embeddings matrix H in R^{B x S x d_model}"
    ],
    deepDiveText: `
### 1. The Encoder Architecture

The Transformer Encoder takes a sequence of raw token IDs, projects them into embedding space, adds positional information, and passes them through a stack of $N$ identical encoder layers (typically $N=6$).
Each encoder layer contains two primary sublayers:
1. **Multi-Head Self-Attention**: Every token attends to all valid tokens in the input sequence (bidirectional context).
2. **Position-Wise Feed-Forward Network**: Expands and compresses each token representation independently.
Both sublayers employ residual skip connections and layer normalization.

### 2. Handling Variable Lengths: The Source Padding Mask

In production training, input sentences in a batch have varying lengths and are padded with '<PAD>' tokens (ID 0) to match the longest sequence.
If unmasked, self-attention will treat '<PAD>' as valid semantic tokens, calculating dot products and assigning softmax weights to them!
The **Padding Mask** creates a boolean tensor of shape $(B, 1, 1, S)$ where:
* 'True' (or 1) indicates valid tokens.
* 'False' (or 0) indicates padding positions.
In the attention score matrix, disallowed positions are replaced with $-\\infty$ prior to the Softmax function:
$$\\text{Softmax}(-\\infty) = 0$$
This guarantees that '<PAD>' tokens receive exactly **0%** attention weight.
    `,
    codeSnippet: `import torch
import torch.nn as nn

class TransformerEncoderLayer(nn.Module):
    def __init__(self, d_model=512, num_heads=8, d_ff=2048, dropout=0.1):
        super().__init__()
        self.self_attn = nn.MultiheadAttention(d_model, num_heads, dropout=dropout, batch_first=True)
        self.linear1 = nn.Linear(d_model, d_ff)
        self.dropout = nn.Dropout(dropout)
        self.linear2 = nn.Linear(d_ff, d_model)

        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.dropout1 = nn.Dropout(dropout)
        self.dropout2 = nn.Dropout(dropout)

    def forward(self, src, src_mask=None):
        # 1. Self-Attention + Residual + LayerNorm
        src2, _ = self.self_attn(src, src, src, key_padding_mask=src_mask)
        src = self.norm1(src + self.dropout1(src2))
        
        # 2. Feed-Forward + Residual + LayerNorm
        src2 = self.linear2(self.dropout(torch.relu(self.linear1(src))))
        src = self.norm2(src + self.dropout2(src2))
        return src

layer = TransformerEncoderLayer(d_model=128, num_heads=4, d_ff=256)
dummy_src = torch.randn(2, 10, 128)
encoded = layer(dummy_src)
print("Encoder Layer Output Shape:", encoded.shape)`,
    challenges: [
      "Why does the encoder use bidirectional attention while the decoder requires causal masking?",
      "How do the learned token representations in Layer 6 differ qualitatively from those in Layer 1?",
      "Design an encoder-only classification head for sentiment analysis using the encoder output tensor."
    ]
  },
  {
    id: "unit-08",
    part: "Part III: Encoder & Decoder Architecture",
    partNumber: 3,
    unitNumber: 8,
    title: "The Transformer Decoder: Causal Masking & Cross-Attention",
    duration: "4.0 Hours",
    level: "Advanced",
    summary:
      "Engineering the Transformer Decoder: causal lower-triangular attention masks, autoregressive prediction constraints, encoder-decoder cross-attention dynamics (Q from decoder, K/V from encoder), and sequence-to-sequence translation flow.",
    coreConcepts: [
      "The Causal Lower-Triangular Mask: Enforcing autoregressive integrity (M_{i,j} = -inf for j > i)",
      "Cross-Attention Mechanics: Decoder Queries attending to Encoder Key-Value representations",
      "The Three Sublayer Decoder Block: Masked Self-Attention + Cross-Attention + FFN",
      "Teacher Forcing: Shifting target inputs right with [BOS] and training with parallel loss evaluation"
    ],
    deepDiveText: `
### 1. The Decoder's Dual Responsibility

While the encoder simply produces contextual representations of the source input, the **Decoder** is an autoregressive generative model: it predicts target tokens one by one.
To achieve this, each decoder block contains **three sublayers**:
1. **Masked Multi-Head Self-Attention**: Allows the decoder to attend only to previously generated output tokens. Future tokens are strictly hidden via a **Causal Mask**.
2. **Encoder-Decoder Cross-Attention**: The decoder queries the encoder's contextual representations to incorporate information from the source input.
3. **Position-Wise Feed-Forward Network**: Applies non-linear transformations identical to the encoder.

### 2. Causal Masking (No Peeking into the Future)

When predicting token $t+1$, the model must not have access to tokens $t+1, t+2, \\dots$.
We construct a lower-triangular causal matrix:
$$\\mathbf{M}_{\\text{causal}} = \\begin{bmatrix} 1 & 0 & 0 & 0 \\\\ 1 & 1 & 0 & 0 \\\\ 1 & 1 & 1 & 0 \\\\ 1 & 1 & 1 & 1 \\end{bmatrix}$$
Multiplying or masking with $-\\infty$ on upper-triangular zeros ensures position $i$ can attend only to positions $j \\le i$.

### 3. Encoder-Decoder Cross-Attention

In cross-attention, the Query vectors originate from the decoder's previous layer, while Key and Value vectors originate from the **encoder's final output representations** $\\mathbf{H}$:
$$\\mathbf{Q} = \\mathbf{X}_{\\text{dec}} \\mathbf{W}_Q, \\quad \\mathbf{K} = \\mathbf{H}_{\\text{enc}} \\mathbf{W}_K, \\quad \\mathbf{V} = \\mathbf{H}_{\\text{enc}} \\mathbf{W}_V$$
$$\\text{CrossAttention} = \\text{Softmax}\\left(\\frac{\\mathbf{Q}\\mathbf{K}^T}{\\sqrt{d_k}}\\right)\\mathbf{V}$$
This allows each generating token to search through the entire source sentence for relevant context!
    `,
    codeSnippet: `# Constructing Combined Causal & Padding Masks in PyTorch
import torch

def create_causal_mask(seq_len):
    # Lower-triangular matrix: 1 where allowed, 0 where masked
    mask = torch.tril(torch.ones(seq_len, seq_len)).bool()
    return mask

seq_len = 5
causal_mask = create_causal_mask(seq_len)
print("Causal Mask (True = allowed, False = blocked):\\n", causal_mask.int())

# Simulating masked attention score matrix
scores = torch.randn(seq_len, seq_len)
scores = scores.masked_fill(~causal_mask, float('-inf'))
attn_weights = torch.softmax(scores, dim=-1)
print("\\nSoftmax Attention Weights (Notice upper triangle is exactly 0.0):\\n", attn_weights.round(decimals=2))`,
    challenges: [
      "Prove why a model trained without causal masking will achieve 0 loss during training but fail completely at inference.",
      "In cross-attention, what are the sequence lengths of Query, Key, and Value when source length is 30 and target length is 15?",
      "How does KV Caching optimize the decoder's inference latency from $O(n^2)$ to $O(n)$ per step?"
    ]
  },
  {
    id: "unit-09",
    part: "Part IV: Full Architecture, Training & Optimization",
    partNumber: 4,
    unitNumber: 9,
    title: "Complete Sequence-to-Sequence Transformer Assembly",
    duration: "4.0 Hours",
    level: "Advanced",
    summary:
      "Integrating the complete encoder-decoder pipeline: embedding scaling ($\\sqrt{d_{\\text{model}}}$), target vocabulary projection layer, teacher forcing with shifted sequences, and autoregressive greedy decoding loops.",
    coreConcepts: [
      "Full Pipeline Integration: Token IDs -> Embeddings -> Positional Encoding -> Encoder -> Decoder -> Vocabulary Head",
      "Embedding Scaling: Why Vaswani multiplies token embeddings by sqrt(d_model) before adding PE",
      "Vocabulary Projection Head: Linear(d_model, V) producing logits for cross-entropy loss",
      "Autoregressive Generation Algorithm: Step-by-step token rollout until [EOS] or max_len"
    ],
    deepDiveText: `
### 1. Putting It All Together

The complete architecture connects the encoder and decoder into an end-to-end differentiable sequence transduction engine:
1. **Source Input**: Token IDs $\\to$ Scaled Embedding ($\\times \\sqrt{d_{\\text{model}}}$) $\\to$ Add Positional Encoding $\\to N \\times$ Encoder Layers $\\to$ Final Context $\\mathbf{H}$.
2. **Target Input (Shifted Right)**: Target IDs $\\to$ Scaled Embedding $\\to$ Add Positional Encoding $\\to N \\times$ Decoder Layers (with Causal Mask + Cross-Attention on $\\mathbf{H}$) $\\to$ Final Decoder Representations.
3. **Vocabulary Projection**: Linear layer maps $d_{\\text{model}} \\to |V_{\\text{target}}|$ logits.
4. **Loss**: CrossEntropyLoss computed across all target positions concurrently during training.

### 2. Teacher Forcing vs. Autoregressive Inference

* **Training (Teacher Forcing)**:
  * Input to Decoder: '<BOS>', $y_1$, $y_2$, $y_3$
  * Target Labels: $y_1$, $y_2$, $y_3$, '<EOS>'
  * All positions are trained simultaneously in parallel because the causal mask prevents information leakage.
* **Inference (Autoregressive Generation)**:
  * Step 1: Feed '<BOS>' $\\to$ Model predicts $\\hat{y}_1$.
  * Step 2: Feed '<BOS>', $\\hat{y}_1$ $\\to$ Model predicts $\\hat{y}_2$.
  * Step 3: Repeat until model emits '<EOS>' or exceeds 'max_len'.
    `,
    codeSnippet: `# Autoregressive Greedy Decoding Algorithm
import torch

def greedy_decode(model, src, src_mask, max_len=20, bos_idx=1, eos_idx=2):
    """
    model: Trained Encoder-Decoder Transformer
    src: Source token IDs [1, src_len]
    """
    model.eval()
    with torch.no_grad():
        # 1. Encode source once
        memory = model.encode(src, src_mask)
        
        # 2. Initialize target with [BOS]
        ys = torch.ones(1, 1).fill_(bos_idx).type_as(src.data)
        
        for i in range(max_len - 1):
            tgt_mask = model.make_tgt_mask(ys)
            out = model.decode(ys, memory, src_mask, tgt_mask)
            prob = model.fc_out(out[:, -1]) # Logits of last predicted token
            _, next_word = torch.max(prob, dim=1)
            next_word = next_word.item()
            
            ys = torch.cat([ys, torch.ones(1, 1).type_as(src.data).fill_(next_word)], dim=1)
            if next_word == eos_idx:
                break
                
    return ys`,
    challenges: [
      "Why is teacher forcing much faster during training than using the model's own predictions?",
      "What is 'Exposure Bias' in sequence models and how does it manifest during inference?",
      "Compare Greedy Decoding with Beam Search (width $k=4$) in terms of search optimality and inference compute cost."
    ]
  },
  {
    id: "unit-10",
    part: "Part IV: Full Architecture, Training & Optimization",
    partNumber: 4,
    unitNumber: 10,
    title: "Transformer Engineering: Optimization, Complexity & Modern Innovations",
    duration: "4.5 Hours",
    level: "Advanced",
    summary:
      "Production-grade optimization and modern architectural evolutions: quadratic $O(n^2)$ attention memory barrier, FlashAttention IO-awareness, KV cache engineering, AdamW with warmup schedules, and Mixture of Experts (MoE).",
    coreConcepts: [
      "Quadratic Complexity O(n^2 d): Why attention matrices become intractable for 32k+ context lengths",
      "FlashAttention (Dao et al.): Hardware-aware tiling keeping intermediate softmax in fast GPU SRAM",
      "KV Cache Mechanism: Eliminating redundant computation in autoregressive generation",
      "Modern Pretraining Schedules: Warmup + Cosine Annealing, AdamW optimizer, and Weight Decay"
    ],
    deepDiveText: `
### 1. The Quadratic Attention Bottleneck

In standard attention, calculating $\\mathbf{S} = \\mathbf{Q}\\mathbf{K}^T$ requires materializing an $n \\times n$ attention matrix.
For sequence length $n = 4096$, $n^2 = 16,777,216$ floats per head! For 32 heads in FP16, this requires **1 GB of GPU VRAM per layer just to store the attention scores**.
At $n = 32,768$, memory explodes to $64 \\times$ larger (64 GB per layer), leading to immediate GPU Out-Of-Memory (OOM) errors!

### 2. FlashAttention: Exact IO-Aware Attention

Tri Dao et al. (2022) realized that memory bandwidth (transferring tensors between High Bandwidth Memory HBM and chip SRAM), not compute, is the true bottleneck of attention.
**FlashAttention** computes exact attention in blocks (tiles) within fast GPU SRAM using online softmax scaling, never writing the massive $n \\times n$ attention matrix back to global HBM. This yields a **$3\\times$ to $5\\times$ speedup** and reduces memory from $O(n^2)$ to $O(n)$!

### 3. KV Caching in Production Inference

During generation, at step $t$, the decoder recomputes keys and values for all previous tokens $1 \\dots t-1$.
Since previous keys and values never change, **KV Caching** stores them in memory:
$$\\mathbf{K}_{\\text{cached}} = [\\mathbf{K}_{1:t-1}, \\mathbf{k}_t], \\quad \\mathbf{V}_{\\text{cached}} = [\\mathbf{V}_{1:t-1}, \\mathbf{v}_t]$$
The model only projects the single current token $x_t$ into $\\mathbf{q}_t$, reducing the per-step cost from $O(t)$ matrix multiplications to a lightweight vector-matrix dot product!
    `,
    codeSnippet: `# Simulating KV-Cache Speedup
import time
import torch

class SimpleKVCache:
    def __init__(self):
        self.k_cache = None
        self.v_cache = None

    def update(self, new_k, new_v):
        if self.k_cache is None:
            self.k_cache = new_k
            self.v_cache = new_v
        else:
            self.k_cache = torch.cat([self.k_cache, new_k], dim=-2)
            self.v_cache = torch.cat([self.v_cache, new_v], dim=-2)
        return self.k_cache, self.v_cache

cache = SimpleKVCache()
for step in range(5):
    # New token key/value at current time step
    k_step = torch.randn(1, 4, 1, 32)
    v_step = torch.randn(1, 4, 1, 32)
    k_all, v_all = cache.update(k_step, v_step)
    print(f"Step {step+1}: Cached Keys Tensor Shape = {k_all.shape}")`,
    challenges: [
      "Why does FlashAttention not sacrifice any mathematical precision compared to standard attention?",
      "Calculate the memory required to store the KV cache for a 70B parameter model with $L=80$ layers, $d_{\\text{model}}=8192$, batch size 4, and context length 4096 in FP16.",
      "Explain the learning rate warmup schedule formula $lr = d_{\\text{model}}^{-0.5} \\min(step^{-0.5}, step \\cdot warmup^{-1.5})$ and why it prevents early divergence."
    ]
  }
];

export const TRANSFORMER_LABS = [
  {
    id: "lab-01",
    labNumber: "01",
    title: "Scaled Dot-Product Attention from Mathematical Equations",
    duration: "2.0 Hours",
    difficulty: "Intermediate",
    tools: "Python 3.10+, PyTorch, NumPy",
    objective: "Implement scaled dot-product attention using raw tensor operations without high-level library abstractions, and verify scaling behavior.",
    problemStatement:
      "Generate synthetic Query, Key, and Value tensors, compute similarity scores, apply variance scaling by sqrt(d_k), apply softmax normalization, and multiply by Value vectors.",
    code: `import torch
import math

def scaled_dot_product(Q, K, V, mask=None):
    d_k = Q.size(-1)
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    if mask is not None:
        scores = scores.masked_fill(mask == 0, float('-inf'))
    weights = torch.softmax(scores, dim=-1)
    return torch.matmul(weights, V), weights

# Verification:
Q = torch.tensor([[[1.0, 0.0], [0.0, 1.0]]])
K = torch.tensor([[[1.0, 0.0], [0.0, 1.0]]])
V = torch.tensor([[[10.0, 5.0], [20.0, 15.0]]])
output, attn = scaled_dot_product(Q, K, V)
print("Attention Weights:\\n", attn)
print("Output:\\n", output)`
  },
  {
    id: "lab-02",
    labNumber: "02",
    title: "Multi-Head Attention Layer with Dimension Splitting",
    duration: "2.5 Hours",
    difficulty: "Intermediate",
    tools: "Python 3.10+, PyTorch",
    objective: "Implement a complete MultiHeadAttention module from scratch with unified linear projections, head splitting, and output projections.",
    problemStatement:
      "Build a PyTorch module that splits d_model into h heads, executes parallel scaled dot-product attention, concatenates head outputs, and projects back to d_model.",
    code: `import torch
import torch.nn as nn
import math

class CustomMultiHeadAttention(nn.Module):
    def __init__(self, d_model=256, num_heads=4):
        super().__init__()
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads

        self.q_proj = nn.Linear(d_model, d_model)
        self.k_proj = nn.Linear(d_model, d_model)
        self.v_proj = nn.Linear(d_model, d_model)
        self.out_proj = nn.Linear(d_model, d_model)

    def forward(self, q, k, v, mask=None):
        B, S_q, _ = q.shape
        _, S_k, _ = k.shape

        Q = self.q_proj(q).view(B, S_q, self.num_heads, self.d_k).transpose(1, 2)
        K = self.k_proj(k).view(B, S_k, self.num_heads, self.d_k).transpose(1, 2)
        V = self.v_proj(v).view(B, S_k, self.num_heads, self.d_k).transpose(1, 2)

        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, float('-inf'))
        attn = torch.softmax(scores, dim=-1)
        out = torch.matmul(attn, V).transpose(1, 2).contiguous().view(B, S_q, self.d_model)
        return self.out_proj(out)

mha = CustomMultiHeadAttention(d_model=64, num_heads=2)
x = torch.randn(2, 5, 64)
print("MHA Output Shape:", mha(x, x, x).shape)`
  },
  {
    id: "lab-03",
    labNumber: "03",
    title: "Sinusoidal Positional Encoding & Heatmap Visualization",
    duration: "2.0 Hours",
    difficulty: "Intermediate",
    tools: "Python 3.10+, PyTorch, Matplotlib",
    objective: "Implement the sinusoidal positional encoding formula and verify relative position properties.",
    problemStatement:
      "Generate position embeddings for positions 0 to 50 with dimension 64, plot the resulting frequency heatmap, and verify cosine similarities.",
    code: `import torch
import math

def get_sinusoidal_pe(seq_len=50, d_model=64):
    pe = torch.zeros(seq_len, d_model)
    pos = torch.arange(0, seq_len, dtype=torch.float).unsqueeze(1)
    div = torch.exp(torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model))
    pe[:, 0::2] = torch.sin(pos * div)
    pe[:, 1::2] = torch.cos(pos * div)
    return pe

pe = get_sinusoidal_pe(20, 32)
print("PE Tensor Shape:", pe.shape)
print("Position 0 vector snippet:", pe[0, :6].round(decimals=3))`
  },
  {
    id: "lab-04",
    labNumber: "04",
    title: "Residual Connections & LayerNorm: Post-LN vs. Pre-LN",
    duration: "2.0 Hours",
    difficulty: "Intermediate",
    tools: "Python 3.10+, PyTorch",
    objective: "Compare gradient flow and training dynamics between Post-LayerNorm and Pre-LayerNorm arrangements.",
    problemStatement:
      "Construct two identical 10-layer MLP networks with Post-LN and Pre-LN, inspect backward gradients at layer 1, and evaluate early stability.",
    code: `import torch
import torch.nn as nn

class PostLNBlock(nn.Module):
    def __init__(self, dim):
        super().__init__()
        self.linear = nn.Linear(dim, dim)
        self.norm = nn.LayerNorm(dim)
    def forward(self, x):
        return self.norm(x + torch.relu(self.linear(x)))

class PreLNBlock(nn.Module):
    def __init__(self, dim):
        super().__init__()
        self.linear = nn.Linear(dim, dim)
        self.norm = nn.LayerNorm(dim)
    def forward(self, x):
        return x + torch.relu(self.linear(self.norm(x)))

x = torch.randn(4, 16, requires_grad=True)
post_block = PostLNBlock(16)
pre_block = PreLNBlock(16)
print("Blocks initialized successfully.")`
  },
  {
    id: "lab-05",
    labNumber: "05",
    title: "Transformer Encoder Block with Padding Masks",
    duration: "2.5 Hours",
    difficulty: "Advanced",
    tools: "Python 3.10+, PyTorch",
    objective: "Assemble a multi-layer Transformer Encoder that correctly masks padding tokens.",
    problemStatement:
      "Stack 2 encoder layers, inject source padding masks, and verify that padded tokens do not alter the embeddings of valid tokens.",
    code: `import torch
import torch.nn as nn

class EncoderBlock(nn.Module):
    def __init__(self, d_model, heads, d_ff):
        super().__init__()
        self.mha = nn.MultiheadAttention(d_model, heads, batch_first=True)
        self.ffn = nn.Sequential(nn.Linear(d_model, d_ff), nn.ReLU(), nn.Linear(d_ff, d_model))
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)

    def forward(self, x, pad_mask=None):
        attn_out, _ = self.mha(x, x, x, key_padding_mask=pad_mask)
        x = self.norm1(x + attn_out)
        return self.norm2(x + self.ffn(x))

enc = EncoderBlock(d_model=32, heads=2, d_ff=64)
x = torch.randn(2, 6, 32)
mask = torch.tensor([[False, False, False, False, True, True], [False, False, False, True, True, True]])
print("Encoder Output Shape:", enc(x, mask).shape)`
  },
  {
    id: "lab-06",
    labNumber: "06",
    title: "Transformer Decoder Block with Causal Masking",
    duration: "2.5 Hours",
    difficulty: "Advanced",
    tools: "Python 3.10+, PyTorch",
    objective: "Implement a Transformer Decoder block with masked causal self-attention and cross-attention.",
    problemStatement:
      "Ensure decoder positions only attend to past target positions and cross-attend to encoder outputs.",
    code: `import torch
import torch.nn as nn

class DecoderBlock(nn.Module):
    def __init__(self, d_model, heads, d_ff):
        super().__init__()
        self.self_mha = nn.MultiheadAttention(d_model, heads, batch_first=True)
        self.cross_mha = nn.MultiheadAttention(d_model, heads, batch_first=True)
        self.ffn = nn.Sequential(nn.Linear(d_model, d_ff), nn.ReLU(), nn.Linear(d_ff, d_model))
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.norm3 = nn.LayerNorm(d_model)

    def forward(self, tgt, memory, tgt_mask=None, src_mask=None):
        # 1. Causal self-attention
        s_out, _ = self.self_mha(tgt, tgt, tgt, attn_mask=tgt_mask)
        tgt = self.norm1(tgt + s_out)
        # 2. Cross-attention
        c_out, _ = self.cross_mha(tgt, memory, memory, key_padding_mask=src_mask)
        tgt = self.norm2(tgt + c_out)
        # 3. FFN
        return self.norm3(tgt + self.ffn(tgt))

print("Decoder Block ready for assembly.")`
  },
  {
    id: "lab-07",
    labNumber: "07",
    title: "Complete Sequence-to-Sequence Model Assembly",
    duration: "3.0 Hours",
    difficulty: "Advanced",
    tools: "Python 3.10+, PyTorch",
    objective: "Assemble the complete Transformer model with embedding, encoder, decoder, and output vocabulary projection.",
    problemStatement:
      "Connect encoder and decoder stacks, apply teacher forcing, and verify output logit shapes for cross-entropy loss.",
    code: `import torch
import torch.nn as nn

class MiniTransformer(nn.Module):
    def __init__(self, src_vocab, tgt_vocab, d_model=64, heads=2, d_ff=128):
        super().__init__()
        self.src_emb = nn.Embedding(src_vocab, d_model)
        self.tgt_emb = nn.Embedding(tgt_vocab, d_model)
        self.transformer = nn.Transformer(
            d_model=d_model, nhead=heads, num_encoder_layers=2, num_decoder_layers=2,
            dim_feedforward=d_ff, batch_first=True
        )
        self.fc_out = nn.Linear(d_model, tgt_vocab)

    def forward(self, src, tgt, tgt_mask=None):
        src_e = self.src_emb(src)
        tgt_e = self.tgt_emb(tgt)
        out = self.transformer(src_e, tgt_e, tgt_mask=tgt_mask)
        return self.fc_out(out)

model = MiniTransformer(src_vocab=50, tgt_vocab=50)
src = torch.randint(0, 50, (2, 8))
tgt = torch.randint(0, 50, (2, 6))
logits = model(src, tgt)
print("Logits Shape (Batch x Seq x Vocab):", logits.shape)`
  },
  {
    id: "lab-08",
    labNumber: "08",
    title: "Training on Sequence Reversal & Autoregressive Inference",
    duration: "3.5 Hours",
    difficulty: "Advanced",
    tools: "Python 3.10+, PyTorch",
    objective: "Train the miniature Transformer on the deterministic sequence reversal task and implement greedy autoregressive decoding.",
    problemStatement:
      "Train model to reverse integer sequences (e.g. [7, 12, 21] -> [21, 12, 7]) using teacher forcing, and generate predictions at inference step-by-step.",
    code: `import torch
import torch.nn as nn
import torch.optim as optim

# Sequence Reversal Dataset Generation
def generate_batch(batch_size=32, length=6, vocab_size=30):
    seq = torch.randint(3, vocab_size, (batch_size, length))
    rev = torch.flip(seq, dims=[1])
    # Add BOS (1) and EOS (2)
    src = torch.cat([torch.ones(batch_size, 1, dtype=torch.long), seq, torch.full((batch_size, 1), 2, dtype=torch.long)], dim=1)
    tgt = torch.cat([torch.ones(batch_size, 1, dtype=torch.long), rev, torch.full((batch_size, 1), 2, dtype=torch.long)], dim=1)
    return src, tgt

print("Synthetic Sequence Reversal Data Engine Ready.")`
  }
];

export const TRANSFORMER_CAPSTONE = {
  title: "Capstone Project: Neural Machine Translation (NMT) System from Scratch",
  duration: "16-20 Hours",
  difficulty: "University & Production Grade",
  overview:
    "Design, implement, train, and evaluate a complete sequence-to-sequence Encoder-Decoder Transformer from scratch in PyTorch without high-level library abstractions. Train the model on an English-to-Hindi / English-to-German parallel sentence corpus, implement teacher forcing, causal masking, cross-attention, learning rate warmup, and an autoregressive greedy/beam search inference translator.",
  phases: [
    {
      name: "Phase 1: Dataset Acquisition & Provenance",
      details: "Collect an open parallel bilingual dataset (OPUS, Tatoeba, or IIT Bombay English-Hindi), document licensing, filter malformed pairs, and verify sentence alignments."
    },
    {
      name: "Phase 2: Subword Tokenizer & Vocabulary Design",
      details: "Train Byte Pair Encoding (BPE) or WordPiece tokenizers for source and target languages, assign special tokens [PAD]=0, [BOS]=1, [EOS]=2, [UNK]=3, and generate batch tensors."
    },
    {
      name: "Phase 3: From-Scratch Architecture Implementation",
      details: "Construct the full Transformer in pure PyTorch: scaled embeddings (x sqrt(d_model)), sinusoidal positional encoding, MultiHeadAttention, PositionWiseFeedForward, EncoderStack, and DecoderStack."
    },
    {
      name: "Phase 4: Masking & Optimization Pipeline",
      details: "Engineer dynamic padding masks for source and target, lower-triangular causal masks, cross-attention key padding masks, and the AdamW optimizer with learning rate warmup schedule."
    },
    {
      name: "Phase 5: Sequence Training with Teacher Forcing",
      details: "Implement shifted target decoding (DecoderInput=[BOS, y_1...y_n-1], TargetLabels=[y_1...y_n, EOS]), CrossEntropyLoss with ignore_index=PAD, gradient clipping, and checkpointing."
    },
    {
      name: "Phase 6: Autoregressive Translation Engine",
      details: "Build greedy decoding and beam search rollout loops that iteratively predict the next token conditioned on the generated prefix until [EOS] is emitted."
    },
    {
      name: "Phase 7: Translation Evaluation & Error Analysis",
      details: "Evaluate translation quality using Corpus BLEU score, ChrF character overlap, latency benchmarking, and qualitative failure mode analysis."
    }
  ],
  runnableScript: `"""
================================================================================
PREPSPACES AI ENGINEERING - MODULE 06 CAPSTONE
Complete Encoder-Decoder Transformer from Scratch in PyTorch
Sequence-to-Sequence Translation / Reversal Architecture
================================================================================
"""

import math
import random
import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader

# Special Token Constants
PAD_ID = 0
BOS_ID = 1
EOS_ID = 2

# 1. MULTI-HEAD ATTENTION FROM SCRATCH
class MultiHeadAttention(nn.Module):
    def __init__(self, d_model=128, num_heads=4, dropout=0.1):
        super().__init__()
        assert d_model % num_heads == 0, "d_model must be divisible by num_heads"
        self.d_model = d_model
        self.num_heads = num_heads
        self.d_k = d_model // num_heads

        self.w_q = nn.Linear(d_model, d_model)
        self.w_k = nn.Linear(d_model, d_model)
        self.w_v = nn.Linear(d_model, d_model)
        self.w_o = nn.Linear(d_model, d_model)
        self.dropout = nn.Dropout(dropout)

    def forward(self, q, k, v, mask=None):
        B = q.size(0)
        # Project and reshape: [B, Heads, Seq, d_k]
        Q = self.w_q(q).view(B, -1, self.num_heads, self.d_k).transpose(1, 2)
        K = self.w_k(k).view(B, -1, self.num_heads, self.d_k).transpose(1, 2)
        V = self.w_v(v).view(B, -1, self.num_heads, self.d_k).transpose(1, 2)

        scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(self.d_k)
        if mask is not None:
            scores = scores.masked_fill(mask == 0, float('-inf'))

        attn = self.dropout(torch.softmax(scores, dim=-1))
        context = torch.matmul(attn, V).transpose(1, 2).contiguous().view(B, -1, self.d_model)
        return self.w_o(context)

# 2. SINUSOIDAL POSITIONAL ENCODING
class PositionalEncoding(nn.Module):
    def __init__(self, d_model=128, max_len=500, dropout=0.1):
        super().__init__()
        self.dropout = nn.Dropout(dropout)
        pe = torch.zeros(max_len, d_model)
        pos = torch.arange(0, max_len, dtype=torch.float).unsqueeze(1)
        div = torch.exp(torch.arange(0, d_model, 2).float() * (-math.log(10000.0) / d_model))
        pe[:, 0::2] = torch.sin(pos * div)
        pe[:, 1::2] = torch.cos(pos * div)
        self.register_buffer('pe', pe.unsqueeze(0))

    def forward(self, x):
        x = x + self.pe[:, :x.size(1)]
        return self.dropout(x)

# 3. POSITION-WISE FEED-FORWARD NETWORK
class FeedForwardNetwork(nn.Module):
    def __init__(self, d_model=128, d_ff=256, dropout=0.1):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(d_model, d_ff),
            nn.ReLU(),
            nn.Dropout(dropout),
            nn.Linear(d_ff, d_model)
        )
    def forward(self, x):
        return self.net(x)

# 4. ENCODER & DECODER LAYERS
class EncoderLayer(nn.Module):
    def __init__(self, d_model, heads, d_ff, dropout=0.1):
        super().__init__()
        self.attn = MultiHeadAttention(d_model, heads, dropout)
        self.ffn = FeedForwardNetwork(d_model, d_ff, dropout)
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.drop = nn.Dropout(dropout)

    def forward(self, x, mask):
        x = self.norm1(x + self.drop(self.attn(x, x, x, mask)))
        x = self.norm2(x + self.drop(self.ffn(x)))
        return x

class DecoderLayer(nn.Module):
    def __init__(self, d_model, heads, d_ff, dropout=0.1):
        super().__init__()
        self.self_attn = MultiHeadAttention(d_model, heads, dropout)
        self.cross_attn = MultiHeadAttention(d_model, heads, dropout)
        self.ffn = FeedForwardNetwork(d_model, d_ff, dropout)
        self.norm1 = nn.LayerNorm(d_model)
        self.norm2 = nn.LayerNorm(d_model)
        self.norm3 = nn.LayerNorm(d_model)
        self.drop = nn.Dropout(dropout)

    def forward(self, x, memory, src_mask, tgt_mask):
        # 1. Masked self-attention
        x = self.norm1(x + self.drop(self.self_attn(x, x, x, tgt_mask)))
        # 2. Cross-attention
        x = self.norm2(x + self.drop(self.cross_attn(x, memory, memory, src_mask)))
        # 3. FFN
        x = self.norm3(x + self.drop(self.ffn(x)))
        return x

# 5. COMPLETE ENCODER-DECODER TRANSFORMER
class TransformerSeq2Seq(nn.Module):
    def __init__(self, src_vocab=50, tgt_vocab=50, d_model=128, heads=4, d_ff=256, num_layers=2, dropout=0.1):
        super().__init__()
        self.d_model = d_model
        self.src_emb = nn.Embedding(src_vocab, d_model, padding_idx=PAD_ID)
        self.tgt_emb = nn.Embedding(tgt_vocab, d_model, padding_idx=PAD_ID)
        self.pos_enc = PositionalEncoding(d_model, dropout=dropout)

        self.encoder_layers = nn.ModuleList([EncoderLayer(d_model, heads, d_ff, dropout) for _ in range(num_layers)])
        self.decoder_layers = nn.ModuleList([DecoderLayer(d_model, heads, d_ff, dropout) for _ in range(num_layers)])
        self.fc_out = nn.Linear(d_model, tgt_vocab)

    def make_src_mask(self, src):
        # [B, 1, 1, S]
        return (src != PAD_ID).unsqueeze(1).unsqueeze(2)

    def make_tgt_mask(self, tgt):
        # Combine target padding mask with causal lower-triangular mask
        B, S = tgt.shape
        pad_mask = (tgt != PAD_ID).unsqueeze(1).unsqueeze(2)
        causal_mask = torch.tril(torch.ones(S, S, device=tgt.device)).bool().unsqueeze(0).unsqueeze(1)
        return pad_mask & causal_mask

    def encode(self, src, src_mask):
        x = self.src_emb(src) * math.sqrt(self.d_model)
        x = self.pos_enc(x)
        for layer in self.encoder_layers:
            x = layer(x, src_mask)
        return x

    def decode(self, tgt, memory, src_mask, tgt_mask):
        x = self.tgt_emb(tgt) * math.sqrt(self.d_model)
        x = self.pos_enc(x)
        for layer in self.decoder_layers:
            x = layer(x, memory, src_mask, tgt_mask)
        return x

    def forward(self, src, tgt):
        src_mask = self.make_src_mask(src)
        tgt_mask = self.make_tgt_mask(tgt)
        memory = self.encode(src, src_mask)
        out = self.decode(tgt, memory, src_mask, tgt_mask)
        return self.fc_out(out)

# 6. DEMO VERIFICATION
def run_transformer_demo():
    print("Initializing From-Scratch Transformer Architecture...")
    model = TransformerSeq2Seq(src_vocab=35, tgt_vocab=35, d_model=64, heads=2, d_ff=128, num_layers=2)
    src = torch.tensor([[BOS_ID, 5, 8, 12, 19, EOS_ID], [BOS_ID, 7, 14, 21, PAD_ID, PAD_ID]])
    tgt = torch.tensor([[BOS_ID, 19, 12, 8, 5], [BOS_ID, 21, 14, 7, PAD_ID]])
    logits = model(src, tgt)
    print(f"Forward Pass Completed! Output Logits Shape: {logits.shape} (Batch x Seq x Vocab)")

if __name__ == "__main__":
    run_transformer_demo()
`,
  rubric: [
    { criterion: "Self-Attention & Multi-Head Attention", weight: "15%", description: "Correct implementation of Q, K, V projections, scaling, and parallel head tensor transformations without using PyTorch prebuilt attention." },
    { criterion: "Encoder & Decoder Stack Implementation", weight: "20%", description: "Modular assembly of stacked encoder and decoder layers with residual connections and layer normalization." },
    { criterion: "Masking Integrity (Causal & Padding)", weight: "10%", description: "Strict prevention of padding token leakage and future target token exposure via combined boolean masks." },
    { criterion: "Training Loop & Teacher Forcing", weight: "15%", description: "Shifted right target decoding, CrossEntropyLoss with ignore_index=PAD, and AdamW gradient updates." },
    { criterion: "Autoregressive Generation & Inference", weight: "15%", description: "Correct greedy or beam search decoding producing one token at a time until EOS or max length." },
    { criterion: "Dataset Preparation & Tokenization", weight: "10%", description: "Bilingual corpus cleaning, vocabulary induction, and proper train/validation/test partitioning." },
    { criterion: "Evaluation Metrics & Error Analysis", weight: "15%", description: "Computation of BLEU / ChrF scores, exact sequence match analysis, and failure mode documentation." }
  ]
};

export const TRANSFORMER_INTERVIEW_QUESTIONS = [
  {
    q: "Why is scaled dot-product attention divided by the square root of d_k?",
    a: "Assuming the components of Query and Key are independent random variables with zero mean and unit variance, their inner product sum_{i=1}^{d_k} q_i k_i has an expected mean of 0 and a variance of d_k. For large dimensions (e.g. d_k=64 or 128), large magnitudes push the softmax function into saturation regions with near-zero gradients. Dividing by sqrt(d_k) normalizes the variance back to 1, ensuring healthy gradient flow during backpropagation."
  },
  {
    q: "What is the computational complexity of the Transformer attention mechanism, and why is FlashAttention important?",
    a: "Standard full self-attention requires computing an n x n attention matrix between all pairs of tokens, resulting in O(n^2 d) time complexity and O(n^2) memory footprint with respect to sequence length n. For long sequences (e.g. 32k+ tokens), this causes GPU memory exhaustion. FlashAttention computes exact attention by tiling queries, keys, and values into GPU SRAM blocks using online softmax scaling, reducing memory traffic and achieving 3x-5x wall-clock speedup without modifying mathematical outputs."
  },
  {
    q: "Explain the difference between Pre-LN and Post-LN and why modern LLMs use Pre-LN.",
    a: "In Post-LN (used in Vaswani 2017), LayerNorm is applied after the residual addition: x_{l+1} = LN(x_l + F(x_l)). In deep networks, gradients pass through multiple normalization layers, which can cause early training divergence unless strict learning rate warmup is used. In Pre-LN, LayerNorm is applied to the input of each sublayer before addition: x_{l+1} = x_l + F(LN(x_l)). The residual stream remains strictly linear without normalization obstacles, allowing smooth gradient flow and enabling stable training from step 1."
  },
  {
    q: "How does KV Caching optimize autoregressive generation in Transformer decoders?",
    a: "During token-by-token generation, at step t, the model previously recomputed key and value vectors for all past tokens 1 through t-1. Because past keys and values never change, KV Caching stores them in memory. At step t, the model only computes Q, K, and V for the single new token, appends the new K and V to the cache, and computes attention against the cached keys and values. This reduces per-step computation from O(t) matrix multiplies to a fast O(1) vector-matrix dot product."
  },
  {
    q: "Where do Queries, Keys, and Values originate in the Encoder-Decoder Cross-Attention layer?",
    a: "In cross-attention, Queries (Q) originate from the previous decoder layer representations (representing what the generating target token is searching for), while Keys (K) and Values (V) originate from the final contextual output representations of the Encoder (representing the complete source sentence information)."
  }
];

export const TRANSFORMER_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the core sequence-processing mechanism used by the original Transformer architecture?",
    options: ["Recurrent hidden state", "Self-attention", "Convolutional filters only", "Decision trees"],
    answer: 1,
    explanation: "The Transformer architecture relies entirely on attention mechanisms to capture dependencies between input and output tokens without any recurrence or convolution."
  },
  {
    id: 2,
    question: "In the attention mechanism, what does the Query vector represent?",
    options: [
      "The final probability distribution over the vocabulary",
      "A representation expressing what a token is searching for in other sequence positions",
      "The total number of tokens in the vocabulary",
      "The static positional encoding of the token"
    ],
    answer: 1,
    explanation: "The Query represents the search criteria of the current token, matched against the Keys of other tokens to retrieve relevant Values."
  },
  {
    id: 3,
    question: "Why is scaled dot-product attention divided by the square root of d_k?",
    options: [
      "To increase sequence length capacity",
      "To control attention-score magnitudes and prevent softmax saturation",
      "To eliminate the need for positional encodings",
      "To calculate the vocabulary size"
    ],
    answer: 1,
    explanation: "As d_k grows, dot products grow large in magnitude, pushing softmax into flat regions with vanishingly small gradients. Dividing by sqrt(d_k) stabilizes the variance."
  },
  {
    id: 4,
    question: "What is the primary motivation for using Multi-Head Attention instead of a single attention head?",
    options: [
      "To process multiple independent datasets simultaneously",
      "To allow the model to jointly attend to information from different representation subspaces in parallel",
      "To completely remove the decoder from sequence-to-sequence tasks",
      "To replace the feed-forward network"
    ],
    answer: 1,
    explanation: "Multi-head attention projects queries, keys, and values into multiple subspaces, enabling the network to learn multiple linguistic relationships (syntax, coreference, semantics) concurrently."
  },
  {
    id: 5,
    question: "Why does a pure self-attention mechanism require explicit positional information?",
    options: [
      "Attention by itself is permutation-invariant and does not inherently encode the order of tokens in a sequence",
      "Without positional information, softmax cannot be computed",
      "To calculate the cross-entropy loss",
      "To remove padding tokens"
    ],
    answer: 0,
    explanation: "Because self-attention computes dot products regardless of token position, the model cannot distinguish between permutations (e.g. 'dog chased cat' vs 'cat chased dog') without positional encodings."
  },
  {
    id: 6,
    question: "What does a causal mask in a Transformer decoder prevent?",
    options: [
      "Attention to previous historical tokens",
      "Attention to future target tokens during autoregressive training and inference",
      "Attention to encoder representations",
      "Attention between different attention heads"
    ],
    answer: 1,
    explanation: "Causal masking blocks attention to future positions (j > i) by replacing scores with -inf, preserving the autoregressive property that token t can only depend on tokens <= t."
  },
  {
    id: 7,
    question: "Where do Keys (K) and Values (V) originate in the Encoder-Decoder Cross-Attention layer?",
    options: [
      "The target vocabulary embedding table",
      "The final contextual output representations of the Encoder",
      "The positional encodings only",
      "The cross-entropy loss function"
    ],
    answer: 1,
    explanation: "In cross-attention, the Query comes from the decoder, while Keys and Values come from the encoder's output, enabling the decoder to access source sentence context."
  },
  {
    id: 8,
    question: "What is the primary mathematical purpose of a residual skip connection (x + Sublayer(x))?",
    options: [
      "To delete unnecessary weights",
      "To provide an unimpeded gradient highway directly through deep layers during backpropagation",
      "To generate new vocabulary tokens",
      "To normalize feature vectors to unit variance"
    ],
    answer: 1,
    explanation: "Residual connections provide a direct identity path for gradients to propagate backwards through dozens or hundreds of layers without vanishing."
  },
  {
    id: 9,
    question: "Which normalization arrangement was used in the original 2017 Transformer paper?",
    options: [
      "Pre-LayerNorm only",
      "Post-LayerNorm (LayerNorm applied after residual addition)",
      "Batch Normalization across sequence length",
      "No normalization"
    ],
    answer: 1,
    explanation: "The original 2017 Transformer used Post-LN: Output = LayerNorm(x + Sublayer(x)). Modern LLMs frequently adopt Pre-LN for training stability."
  },
  {
    id: 10,
    question: "What occurs during autoregressive generation during inference?",
    options: [
      "All future target tokens are provided simultaneously",
      "The model generates output tokens sequentially one by one, feeding previous predictions back as input",
      "All attention masks are removed",
      "The encoder is retrained from scratch at every step"
    ],
    answer: 1,
    explanation: "During autoregressive inference, the model begins with [BOS], predicts token 1, appends it to the input, predicts token 2, and repeats until [EOS] is generated."
  }
];

export const TRANSFORMER_RESOURCES = [
  {
    title: "Attention Is All You Need (Original Paper)",
    authors: "Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, et al.",
    type: "Foundational Research Paper (NeurIPS 2017)",
    description: "The seminal paper that introduced scaled dot-product attention, multi-head attention, sinusoidal positional encoding, and the complete Transformer architecture.",
    link: "https://arxiv.org/abs/1706.03762"
  },
  {
    title: "The Annotated Transformer",
    authors: "Harvard NLP (Alexander Rush, Austin Hendrickson)",
    type: "Annotated Code Reference",
    description: "A line-by-line pedagogical PyTorch implementation of the original Transformer paper with comprehensive code walk-throughs and tensor assertions.",
    link: "https://nlp.seas.harvard.edu/annotated-transformer/"
  },
  {
    title: "Stanford CS25: Transformers United",
    authors: "Stanford University",
    type: "University Lecture Series",
    description: "Stanford's cutting-edge course dedicated to the theory, engineering, and applications of Transformers across language, vision, robotics, and scaling laws.",
    link: "https://web.stanford.edu/class/cs25/"
  },
  {
    title: "Dive into Deep Learning: Attention Mechanisms & Transformers",
    authors: "Aston Zhang, Zachary C. Lipton, Mu Li, Alexander J. Smola",
    type: "Interactive Academic Textbook",
    description: "Rigorous mathematical derivations and from-scratch implementations of attention, multi-head attention, self-attention, and sequence-to-sequence Transformers.",
    link: "https://d2l.ai/chapter_attention-mechanisms-and-transformers/index.html"
  },
  {
    title: "PyTorch Transformer Building Blocks",
    authors: "PyTorch Core Engineering Team",
    type: "Official Technical Documentation",
    description: "Best practices for building, optimizing, and training attention-based models using PyTorch's native primitives and scaled dot-product attention.",
    link: "https://pytorch.org/tutorials/intermediate/transformer_building_blocks.html"
  },
  {
    title: "The Illustrated Transformer",
    authors: "Jay Alammar",
    type: "Visual Architectural Guide",
    description: "Intuitive step-by-step visual diagrams illustrating how tensors flow through Query, Key, Value projections, encoder layers, and decoder cross-attention.",
    link: "https://jalammar.github.io/illustrated-transformer/"
  }
];

export const TRANSFORMER_COMPETENCIES = [
  "Explain the motivation behind Transformer architecture and limitations of RNNs.",
  "Derive scaled dot-product attention mathematically with variance proofs.",
  "Understand Query, Key, and Value geometric projections.",
  "Implement scaled dot-product attention using raw PyTorch matrix operations.",
  "Implement multi-head attention from scratch with dimension splitting.",
  "Derive and create sinusoidal positional encodings.",
  "Differentiate fixed sinusoidal encodings from learned and rotary (RoPE) embeddings.",
  "Implement position-wise feed-forward networks with feature expansion.",
  "Implement residual skip connections and LayerNorm mathematically.",
  "Build a complete Transformer Encoder layer with padding masks.",
  "Build a complete Transformer Decoder layer with causal lower-triangular masks.",
  "Implement encoder-decoder cross-attention dynamics.",
  "Connect encoder and decoder stacks into a sequence-to-sequence model.",
  "Implement teacher forcing and cross-entropy loss with padding exclusion.",
  "Train a complete miniature Transformer model on sequence reversal / translation.",
  "Implement autoregressive greedy and beam search generation algorithms.",
  "Analyze attention complexity O(n^2 d) and explain FlashAttention and KV Caching.",
  "Complete and evaluate the neural machine translation capstone project."
];
