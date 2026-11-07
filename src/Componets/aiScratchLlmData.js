// Module 22: Building Small Language Models from Scratch
// Advanced AI Engineering · Theory + Mathematics + Practical Implementation

export const scratchLlmMeta = {
  id: "scratch-slm",
  courseId: "ai-engineering",
  moduleNumber: 22,
  title: "Building Small Language Models from Scratch",
  subtitle: "Theory, Mathematical Foundations & Full PyTorch Implementation of a Decoder-Only Tiny GPT",
  badge: "Advanced AI Engineering",
  level: "Advanced · Theory + Systems Engineering",
  track: "Generative AI & LLM Systems Engineering",
  duration: "8 - 10 hours",
  prerequisites: [
    "Module 4: Deep Learning & Neural Network Engineering (Backpropagation, Cross-Entropy Loss)",
    "Module 5: Natural Language Processing (NLP) Engineering (Tokenization & Embeddings)",
    "Module 6: Transformer Architecture from Scratch (Multi-Head Self-Attention Foundations)",
    "Module 21: Fine-Tuning LLMs for Domain-Specific Applications (LoRA, SFT & Evaluation)"
  ],
  summary:
    "Construct a complete decoder-only Generative Pre-trained Transformer (GPT) language model from raw mathematical foundations using PyTorch. Implement a custom character/BPE tokenizer, embed learned positional encodings, build causal multi-head self-attention with lower-triangular masking, assemble Pre-LayerNorm transformer blocks with GELU feed-forward networks, execute weight tying, train via autoregressive next-token prediction with cross-entropy loss and AdamW, and generate text using temperature, top-k, and nucleus sampling.",
  overview:
    "While fine-tuning adapts pre-existing weights, true AI systems mastery requires engineering language models from ground zero. In this module, you build a complete Small Language Model (SLM) from randomly initialized parameters using PyTorch. Centered around a domain-specific Java Technical Explainer (TinyGPT-Java-1.5M), you will build every layer: custom tokenizer, shifted next-token batch tensor pipeline (B, T), causal query-key-value self-attention with scaling factor 1/sqrt(d_k), GELU feed-forward projections, weight-tied language model heads, the full training loop with gradient clipping and cosine decay, and autoregressive generation decoders."
};

export const curriculumUnits = [
  {
    id: "unit-01",
    number: "01",
    title: "Understanding Small Language Models & The Parameter Spectrum",
    readTime: "25 min",
    tag: "Architectural Foundations",
    summary:
      "Deconstruct the definition of Small Language Models (SLMs) vs Large Language Models (LLMs), analyze parameter spectra from Tiny GPT (0.1M) to Frontier LLMs (100B+), and understand the trade-offs of training from scratch vs fine-tuning vs inference.",
    content: `
### 1. What is a Small Language Model (SLM)?
A **Small Language Model (SLM)** is a statistical and structural language model engineered with a compact parameter footprint (typically between **0.1M and 3B parameters**) designed to run efficiently on edge hardware, consumer GPUs, or constrained embedded environments. 

Rather than memorizing encyclopedic factual databases like 70B+ frontier models, an SLM learns statistical token transitions, syntactic grammar structures, and domain-specific structural patterns.

Consider a Java language model predicting the next token:
- **Input Context**: \`Java is a high-level programming ____\`
- **Model Output Prediction**: \`language\` (Probability: 0.88)
- **Input Context**: \`The JVM executes Java ____\`
- **Model Output Prediction**: \`bytecode\` (Probability: 0.94)

The model does not retrieve static text files from a hard drive. It maps input token IDs into a dense continuous manifold, passes representations through parameterized attention and feed-forward projections, and calculates a categorical probability distribution over the entire vocabulary.

---

### 2. LLM vs SLM: Architectural & Operational Trade-Offs

| Engineering Dimension | Small Language Model (SLM) | Large Language Model (LLM) |
| :--- | :--- | :--- |
| **Parameter Scale** | 0.1 Million to ~3 Billion | 7 Billion to 1+ Trillion |
| **Training Compute** | Single consumer GPU (RTX 3060/4090) to small cluster | Massive GPU clusters (Hundreds of H100s / TPU pods) |
| **Memory Footprint** | 50 MB to ~6 GB VRAM | 16 GB to 1.5+ TB VRAM |
| **Inference Latency** | Ultra-low (sub-10ms time-to-first-token) | Higher latency (50ms - 500ms+) |
| **Deployment Target** | Edge devices, mobile devices, local workstations | Distributed cloud inference servers (vLLM, TensorRT-LLM) |
| **Domain Specialization**| Exceptional when trained on targeted corpora | Broad general-purpose reasoning |
| **Catastrophic Forgetting**| Minimized when trained purely on target task | High vulnerability during aggressive specialization |
| **Hardware Accessibility**| Trainable from scratch by individual engineers | Pre-training restricted to well-funded organizations |

---

### 3. The Parameter Size Hierarchy

\`\`\`
[ Tiny GPT ] --------> [ Small Model ] -------> [ Medium SLM ] ------> [ Large LLM ] --------> [ Frontier Model ]
 0.1M - 20M              20M - 500M               500M - 3B              7B - 70B                 100B+ - 1T+
 Educational Labs       Domain Utilities         Mobile Assistants      General Reasoning        Multimodal Superclusters
 Local CPU / Laptop     Consumer RTX GPU         Single A10G GPU        Multi-GPU Nodes          Distributed Data Centers
\`\`\`

1. **Tiny GPT (0.1M – 20M parameters)**:
   - Built for educational experiments, architectural ablation studies, and learning the inner mechanics of attention, tokenization, and loss dynamics. Runs cleanly on CPU or 4GB GPUs.
2. **Small Model (20M – 500M parameters)**:
   - Compact domain-specific language tasks: grammar correction, AST code linting, mathematical equation parsing, and focused dialogue controllers.
3. **Medium SLM (500M – 3B parameters)** (e.g., SmolLM-135M/1.7B, Phi-3-Mini 3.8B, Qwen2.5-1.5B):
   - Capable specialized on-device assistants, local privacy-first copilots, and structured data extraction agents.
4. **Large & Frontier Models (7B – 70B – 405B+)**:
   - Broad reasoning, complex agentic planning, multi-step code synthesis, and multilingual translation.

---

### 4. Three Paradigms: Pre-Training vs Fine-Tuning vs Inference

\`\`\`
1. TRAINING FROM SCRATCH (Pre-training)
   [ Random Param Init: W ~ N(0, 0.02) ] ---> [ Raw Corpus ] ---> [ SFT Training Loop (Loss: 4.5 -> 1.5) ] ---> [ Base SLM ]

2. FINE-TUNING (Adaptation)
   [ Pretrained Foundation Model ] ----------> [ Curated Instruct/DPO Data ] ---> [ LoRA / PEFT Loop ] --------> [ Specialized Model ]

3. INFERENCE (Serving)
   [ Frozen Model Weights ] ------------------> [ User Prompt Input ] ----------> [ Autoregressive Sampling ] -> [ Token Output ]
\`\`\`

- **Training from Scratch**: Initializing every tensor $W \\sim \\mathcal{N}(0, 0.02)$, constructing custom vocabularies, and teaching the model syntax, semantics, and statistical transition rules from raw characters or byte pairs.
- **Fine-Tuning**: Taking billions of pre-trained parameters and adding low-rank delta updates $\\Delta W$ for a specialized downstream task.
- **Inference**: Passing input tokens through frozen layers in an autoregressive loop without updating model gradients.
`
  },
  {
    id: "unit-02",
    number: "02",
    title: "GPT & Decoder-Only Autoregressive Architecture",
    readTime: "30 min",
    tag: "Model Architecture",
    summary:
      "Deep dive into Generative Pre-trained Transformer (GPT) mechanics, autoregressive token-by-token generation, causal sequence constraints, and comparative analysis of Encoder-only, Decoder-only, and Encoder-Decoder architectures.",
    content: `
### 1. What is GPT?
**GPT (Generative Pre-trained Transformer)** is an autoregressive, decoder-only deep neural network based on the Transformer architecture originally introduced by Vaswani et al. (2017) and popularized by Radford et al. (OpenAI GPT-1/2/3/4).

The core operational principle is **autoregression**: the model predicts the probability distribution of the next token $x_{t}$ conditioned strictly upon all previously generated tokens $x_{<t}$:

$$P(x_1, x_2, \\dots, x_T) = \\prod_{t=1}^{T} P(x_t \\mid x_1, x_2, \\dots, x_{t-1})$$

---

### 2. The Autoregressive Generation Step-by-Step Flow

\`\`\`
Step 1: Input Prompt       --->  "Java is"
Step 2: Predict Token 1    --->  "Java is"                 --> Model Predicts: "object-oriented"
Step 3: Append Token 1     --->  "Java is object-oriented" --> Model Predicts: "and"
Step 4: Append Token 2     --->  "Java is object-oriented and" --> Model Predicts: "class-based."
Step 5: Termination        --->  Sequence completes when EOS (End of Sequence) token or max length is hit.
\`\`\`

During training, the transformer processes the entire sequence in **parallel** using a **causal lower-triangular attention mask**. During inference, it runs **recursively token-by-token**.

---

### 3. Comparing Transformer Paradigms

\`\`\`
+-----------------------+-----------------------------+-----------------------------+
| Architecture Type     | Attention Visibility        | Typical Use Cases           |
+-----------------------+-----------------------------+-----------------------------+
| Encoder-Only (BERT)   | Bidirectional (looks left   | Classification, NER,        |
|                       | and right simultaneously)   | Semantic Embeddings         |
+-----------------------+-----------------------------+-----------------------------+
| Decoder-Only (GPT)    | Causal (can only attend to  | Text Generation, Code       |
|                       | past and present tokens)    | Synthesis, Autoregressive AI|
+-----------------------+-----------------------------+-----------------------------+
| Encoder-Decoder (T5)  | Bidirectional Encoder +     | Sequence-to-Sequence,       |
|                       | Causal Masked Decoder       | Translation, Summarization  |
+-----------------------+-----------------------------+-----------------------------+
\`\`\`

Why did decoder-only win modern LLM engineering?
1. **Unified Objective**: Next-token prediction on massive unlabeled text serves as both knowledge acquisition and reasoning pre-training.
2. **Computational Symmetry**: Simplifies KV-caching, parallel batching, and memory allocation across distributed GPU clusters.
3. **Zero-Shot Generalization**: Any task (translation, classification, code execution) can be framed as causal next-token completion.

---

### 4. End-to-End Decoder-Only Data Flow

\`\`\`
Raw Text: "Java is"
     │
     ▼
[ Character / BPE Tokenizer ]  --> Token IDs: [12, 4, 8, 4, 0, 5, 10] (Shape: B x T)
     │
     ├─────────────────────────────────────────────────┐
     ▼                                                 ▼
[ Token Embedding Matrix E_tok ]             [ Position Embedding Matrix E_pos ]
     │ (Shape: B x T x C)                              │ (Shape: B x T x C)
     └───────────────────────┬─────────────────────────┘
                             ▼
                 [ Element-Wise Addition: X = E_tok + E_pos ]
                             │
                             ▼
                 [ Dropout Layer (p = 0.1) ]
                             │
       ┌─────────────────────┴────────────────────────┐
       │                                              │
       ▼                                              │
┌──────────────────────────────────────────────┐      │
│ TRANSFORMER BLOCK 1 (Repeated L times)       │      │
│   ├── Pre-LayerNorm 1                        │      │
│   ├── Causal Multi-Head Self-Attention       │      │
│   │     (Q, K, V Projections + Masked Softmax)│     │
│   ├── Residual Connection 1: x = x + Attn    │      │
│   ├── Pre-LayerNorm 2                        │      │
│   ├── Feed-Forward Network (GELU Expansion)  │      │
│   └── Residual Connection 2: x = x + FFN     │      │
└──────────────────────┬───────────────────────┘      │
                       │                              │
                       ▼                              │
             [ Transformer Block 2 ]                  │
                       │                              │
                       ▼                              │
             [ Transformer Block L ] <────────────────┘
                       │
                       ▼
             [ Final Layer Normalization ]
                       │ (Shape: B x T x C)
                       ▼
             [ Language Model Head (lm_head) ]
                       │ (Project from C to Vocab Size V)
                       ▼
             [ Output Logits Tensor ] (Shape: B x T x V)
                       │
        ┌──────────────┴──────────────┐
        ▼                             ▼
(During Training)             (During Inference)
Calculate Cross-Entropy       Softmax + Temperature Sampling
Loss against shifted targets  Append predicted token to sequence
\`\`\`
`
  },
  {
    id: "unit-03",
    number: "03",
    title: "Tokenization & Vocabulary Engineering",
    readTime: "30 min",
    tag: "Data Engineering",
    summary:
      "Explore tokenization mechanics, compare character-level vs word-level vs subword BPE tokenizers, build a character tokenizer in pure Python, and mathematically prove the reconstruction contract decode(encode(x)) = x.",
    content: `
### 1. The Tokenization Contract
Neural networks cannot process raw unicode strings directly. They require discrete integer indices that index into continuous vector lookup tables.

A tokenizer is a bidirectional bijective mapping function between strings and sequences of integers:

$$\\text{encode}: \\Sigma^* \\to \\mathbb{Z}^T, \\quad \\text{decode}: \\mathbb{Z}^T \\to \\Sigma^*$$

A correct tokenizer must strictly satisfy the **lossless reconstruction property**:

$$\\text{decode}(\\text{encode}(s)) = s, \\quad \\forall s \\in \\text{Domain}(\\mathcal{V})$$

---

### 2. Tokenization Strategies Comparison

\`\`\`
+--------------------+---------------------------+---------------------------+---------------------------+
| Metric             | Character-Level           | Word-Level                | Subword (BPE / WordPiece) |
+--------------------+---------------------------+---------------------------+---------------------------+
| Vocabulary Size V  | Tiny (65 - 256)           | Enormous (100k - 1M+)     | Balanced (32k - 128k)     |
| Sequence Length T  | Very Long (4-5x subwords) | Short                     | Compact & Optimal         |
| Out-Of-Vocabulary  | Zero (if all chars seen)  | Severe (<UNK> explosion)  | Zero (falls back to byte) |
| Representation     | Learns spellings from raw | Misses morphological roots| Captures prefix/suffixes  |
| Memory Footprint   | Minimal embedding table   | Huge embedding table      | Controlled & Scalable     |
| Implementation     | Extremely simple          | Simple split on spaces    | Merge-rule frequency tree |
| Best For           | Educational Tiny GPT      | Baseline prototypes       | Production Modern LLMs    |
+--------------------+---------------------------+---------------------------+---------------------------+
\`\`\`

---

### 3. Understanding Byte Pair Encoding (BPE)
Byte Pair Encoding (BPE) starts by decomposing text into individual characters or raw bytes, then iteratively merges the most frequent adjacent bigram pairs in the training corpus.

#### BPE Merge Algorithm in Action:
Suppose our corpus is:
\`\`\`
"low", "lowest", "lower", "wider", "newest"
\`\`\`

1. **Initial Vocabulary**: \`['l', 'o', 'w', 'e', 's', 't', 'r', 'i', 'd', 'n']\`
2. **Count Bigrams**: \`('l', 'o')\`, \`('o', 'w')\`, \`('e', 'r')\`, \`('s', 't')\`, \`('e', 's')\`.
3. **Merge Step 1**: Most frequent pair \`('e', 's')\` $\\to$ new token \`'es'\`.
4. **Merge Step 2**: Most frequent pair \`('es', 't')\` $\\to$ new token \`'est'\`.
5. **Merge Step 3**: Most frequent pair \`('l', 'o')\` $\\to$ new token \`'lo'\`.
6. **Merge Step 4**: Most frequent pair \`('lo', 'w')\` $\\to$ new token \`'low'\`.

Now \`"lowest"\` tokenizes into just 2 tokens: \`['low', 'est']\` instead of 6 individual characters!

---

### 4. Pure Python Character Tokenizer Implementation

\`\`\`python
class CharacterTokenizer:
    """
    Invertible character-level tokenizer for educational Tiny GPT implementations.
    Guarantees decode(encode(text)) == text for any text within vocabulary.
    """
    def __init__(self, text: str):
        # Extract unique sorted characters to form deterministic vocabulary
        self.vocab = sorted(list(set(text)))
        self.vocab_size = len(self.vocab)
        
        # String-to-Index (stoi) mapping
        self.stoi = {ch: i for i, ch in enumerate(self.vocab)}
        # Index-to-String (itos) mapping
        self.itos = {i: ch for i, ch in enumerate(self.vocab)}

    def encode(self, text: str) -> list[int]:
        """Convert string to integer token IDs."""
        unseen = set(text) - set(self.stoi.keys())
        if unseen:
            raise ValueError(f"Encountered out-of-vocabulary characters: {unseen}")
        return [self.stoi[ch] for ch in text]

    def decode(self, token_ids: list[int]) -> str:
        """Convert integer token IDs back to string."""
        return "".join([self.itos[int(i)] for i in token_ids])

# Verification
sample = "Java is a programming language."
tokenizer = CharacterTokenizer(sample)
encoded = tokenizer.encode(sample)
decoded = tokenizer.decode(encoded)
assert decoded == sample, "Lossless reconstruction failed!"
print(f"Vocab Size: {tokenizer.vocab_size} | Encoded Length: {len(encoded)}")
\`\`\`
`
  },
  {
    id: "unit-04",
    number: "04",
    title: "Dataset Preparation & Next-Token Batch Engineering",
    readTime: "30 min",
    tag: "Data Pipeline",
    summary:
      "Formulate the next-token prediction objective, construct shifted input/target tensors (B, T), manage context length (block_size), and implement leak-free document-stratified data loaders in PyTorch.",
    content: `
### 1. The Next-Token Prediction Formulation
A language model is trained using **teacher forcing**: at every sequence position $t$, the model receives the ground-truth prefix tokens $x_{1}, \\dots, x_{t}$ and is tasked with predicting the single ground-truth next token $x_{t+1}$.

If our tokenized sequence is:
\`\`\`
[10, 20, 30, 40, 50, 60]
\`\`\`
And our context length (block size) $T = 5$, we construct:
- **Input Tensor $x$**: \`[10, 20, 30, 40, 50]\`
- **Target Tensor $y$**: \`[20, 30, 40, 50, 60]\`

Notice that $y$ is exactly $x$ shifted forward by **one token position**.

---

### 2. Multi-Position Prediction Efficiency
A single input sequence of length $T$ actually encapsulates **$T$ independent training examples** simultaneously!

\`\`\`
Position 0: Given [10]                   ---> Predict: 20
Position 1: Given [10, 20]               ---> Predict: 30
Position 2: Given [10, 20, 30]           ---> Predict: 40
Position 3: Given [10, 20, 30, 40]       ---> Predict: 50
Position 4: Given [10, 20, 30, 40, 50]   ---> Predict: 60
\`\`\`

Because the causal attention mask prevents later positions from leaking information backwards, all $T$ predictions are computed in a **single forward pass**, maximizing GPU matrix arithmetic throughput.

---

### 3. PyTorch Batch Tensor Pipeline

\`\`\`python
import torch

def get_batch(split: str, train_data: torch.Tensor, val_data: torch.Tensor, 
              batch_size: int, block_size: int, device: str):
    """
    Generate a small batch of inputs (x) and targets (y) shifted by 1.
    Output tensors have shape: (batch_size, block_size) -> (B, T)
    """
    data = train_data if split == "train" else val_data
    # Draw random starting index positions from the corpus
    ix = torch.randint(len(data) - block_size - 1, (batch_size,))
    
    # Stack sequences of length block_size
    x = torch.stack([data[i:i + block_size] for i in ix])
    # Stack target sequences shifted by +1
    y = torch.stack([data[i + 1:i + block_size + 1] for i in ix])
    
    return x.to(device), y.to(device)
\`\`\`

---

### 4. Leak-Free Train/Validation Splitting
When training language models on domain corpora (e.g. Java documentation, interview questions, code snippets):
- **Naive Splitting**: Splitting a continuous token sequence at 90% can split a function or sentence mid-token, causing boundary leakage.
- **Document-Level Splitting (Best Practice)**: Split raw files or full markdown articles *before* concatenation and tokenization:
  - 85% Documents $\\to$ \`train_data\`
  - 15% Documents $\\to$ \`val_data\`
This guarantees that validation perplexity measures true out-of-sample generalization rather than memorized continuations of half-seen documents.
`
  },
  {
    id: "unit-05",
    number: "05",
    title: "Token & Positional Embeddings: Continuous Geometry of Text",
    readTime: "30 min",
    tag: "Embedding Mechanics",
    summary:
      "Explore continuous vector spaces, parameter dimensions of embedding matrices, learnable absolute positional encodings, and understand modern Rotary Position Embeddings (RoPE).",
    content: `
### 1. Why Do We Need Embeddings?
Token IDs are arbitrary categorical integers ($0, 1, 2, \\dots, V-1$). 
- Token ID \`10\` ("Java") and Token ID \`20\` ("Python") are mathematically no closer or further apart than \`10\` ("Java") and \`999\` ("Bicycle").
- Linear neural network layers cannot compute continuous gradients over discrete scalars.

An **Embedding Layer** maps each discrete token ID $i$ into a continuous $C$-dimensional vector space:

$$\\mathbf{e}_i = \\mathbf{E}[i, :] \\in \\mathbb{R}^C$$

Where $\\mathbf{E} \\in \\mathbb{R}^{V \\times C}$ is a trainable weight matrix containing $V \\times C$ parameters.

\`\`\`
Token ID: 4 ("class")  ------> Row Lookup E[4, :] ------> [0.15, -0.42, 0.88, ..., 0.03] in R^C
Token ID: 12 ("object") ------> Row Lookup E[12, :] -----> [0.18, -0.39, 0.84, ..., 0.07] in R^C
\`\`\`

During backpropagation, tokens that appear in similar grammatical and semantic contexts receive gradient updates that push their vectors closer together in cosine similarity space.

---

### 2. The Positional Information Dilemma
Self-attention is fundamentally **permutation invariant**. 

Consider these two sentences:
1. *"The compiler optimized the code."*
2. *"The code optimized the compiler."*

Without positional encodings, the set of pairwise query-key dot products would be mathematically identical, rendering the transformer unable to distinguish subject from object!

---

### 3. Learnable Absolute Positional Embeddings
In our Tiny GPT, we use **learned absolute positional embeddings**:
We create a second embedding matrix $\\mathbf{W}_{pos} \\in \\mathbb{R}^{T_{max} \\times C}$, where $T_{max}$ is the maximum context length (\`block_size\`).

For any input sequence of length $T \\le T_{max}$, we extract position indices $[0, 1, 2, \\dots, T-1]$ and compute:

$$\\mathbf{X} = \\mathbf{E}_{token} + \\mathbf{E}_{position}$$

\`\`\`python
import torch
import torch.nn as nn

class EmbeddingCombiner(nn.Module):
    def __init__(self, vocab_size: int, block_size: int, embedding_dim: int):
        super().__init__()
        self.token_embedding = nn.Embedding(vocab_size, embedding_dim)
        self.position_embedding = nn.Embedding(block_size, embedding_dim)

    def forward(self, idx: torch.Tensor):
        B, T = idx.shape
        # Create position indices tensor [0, 1, ..., T-1]
        positions = torch.arange(0, T, device=idx.device)
        
        # Token embedding lookup: (B, T, C)
        tok_emb = self.token_embedding(idx)
        # Position embedding lookup: (T, C) -> broadcasts to (B, T, C)
        pos_emb = self.position_embedding(positions)
        
        return tok_emb + pos_emb
\`\`\`

---

### 4. Modern Advance: Rotary Positional Embeddings (RoPE)
Modern models (Llama 3, Mistral, Qwen 2.5) replace absolute additive embeddings with **Rotary Position Embeddings (RoPE)** (Su et al., 2021).
- Instead of adding $\\mathbf{E}_{pos}$ to the input, RoPE multiplies Query and Key vectors by a 2D rotation matrix:
$$\\mathbf{q}_m = \\mathbf{R}_{\\Theta, m}^d \\mathbf{W}_q \\mathbf{x}_m, \\quad \\mathbf{k}_n = \\mathbf{R}_{\\Theta, n}^d \\mathbf{W}_k \\mathbf{x}_n$$
- The inner product $\\langle \\mathbf{q}_m, \\mathbf{k}_n \\rangle$ depends strictly on the **relative distance** $m - n$, enabling seamless context length extension.
`
  },
  {
    id: "unit-06",
    number: "06",
    title: "Causal Self-Attention: The Mathematical Engine of GPT",
    readTime: "35 min",
    tag: "Core Mechanics",
    summary:
      "Master the mathematical derivations of Scaled Dot-Product Attention, Query-Key-Value projections, why sqrt(d_k) prevents vanishing gradients, causal lower-triangular masking, and multi-head parallelization.",
    content: `
### 1. The Information Retrieval Analogy
Attention allows each token in a sequence to dynamically harvest relevant contextual clues from other accessible tokens.
We project each input representation $\\mathbf{x}$ into three distinct linear spaces:
- **Query ($\\mathbf{Q}$)**: *"What attributes am I searching for?"*
- **Key ($\\mathbf{K}$)**: *"What attributes do I offer?"*
- **Value ($\\mathbf{V}$)**: *"What information do I communicate if matched?"*

$$\\mathbf{Q} = \\mathbf{X} \\mathbf{W}_Q, \\quad \\mathbf{K} = \\mathbf{X} \\mathbf{W}_K, \\quad \\mathbf{V} = \\mathbf{X} \\mathbf{W}_V$$

Where $\\mathbf{W}_Q, \\mathbf{W}_K, \\mathbf{W}_V \\in \\mathbb{R}^{C \\times C}$.

---

### 2. The Scaled Dot-Product Attention Equation

$$\\text{Attention}(\\mathbf{Q}, \\mathbf{K}, \\mathbf{V}) = \\text{softmax}\\left( \\frac{\\mathbf{Q} \\mathbf{K}^T}{\\sqrt{d_k}} + \\mathbf{M} \\right) \\mathbf{V}$$

Let us analyze each mathematical component:

#### A. Raw Attention Scores ($\\mathbf{Q} \\mathbf{K}^T$)
Multiplying $\\mathbf{Q} \\in \\mathbb{R}^{T \\times d_k}$ by $\\mathbf{K}^T \\in \\mathbb{R}^{d_k \\times T}$ yields a $T \\times T$ matrix of dot products representing the raw alignment score between every token pair $(i, j)$.

#### B. The Scaling Factor ($1 / \\sqrt{d_k}$)
Suppose components of $\\mathbf{q}$ and $\\mathbf{k}$ are independent random variables with mean $0$ and variance $1$. Their dot product $\\sum_{i=1}^{d_k} q_i k_i$ has mean $0$ and variance $d_k$.
- If $d_k = 64$, standard deviation is $\\sqrt{64} = 8$.
- Large values push the Softmax function into saturation regions with near-zero gradients:

$$\\frac{\\partial \\text{softmax}(z)_i}{\\partial z_j} \\approx 0 \\quad \\text{when } |z| \\gg 1$$

Dividing by $\\sqrt{d_k}$ normalizes variance back to $1.0$, preserving healthy gradient flow during backpropagation!

---

### 3. Causal Lower-Triangular Masking ($\\mathbf{M}$)
In autoregressive text generation, token $i$ must NEVER peek into future token $j > i$.
We enforce this by adding an upper-triangular mask $\\mathbf{M}$ where blocked positions are set to $-\\infty$:

$$\\mathbf{M}_{i, j} = \\begin{cases} 0 & \\text{if } j \\le i \\text{ (allowed past/present)} \\\\ -\\infty & \\text{if } j > i \\text{ (forbidden future)} \\end{cases}$$

\`\`\`
Raw QK^T / sqrt(d_k):                  After Adding Mask M:
[ [ 2.1,  0.8, -1.2,  3.4 ],           [ [ 2.1,  -inf, -inf, -inf ],
  [ 1.4,  2.9,  0.3, -0.7 ],    --->     [ 1.4,   2.9, -inf, -inf ],
  [ 0.2,  1.1,  2.5,  1.8 ],             [ 0.2,   1.1,  2.5, -inf ],
  [ 1.9,  0.4, -0.6,  3.1 ] ]            [ 1.9,   0.4, -0.6,  3.1 ] ]
\`\`\`

When Softmax is applied row-wise:

$$e^{-\\infty} = 0$$

All future tokens receive exactly **0.00% attention probability**, mathematically eliminating future leakage.

---

### 4. Multi-Head Attention (MHA) Parallelization
Instead of performing a single attention function with dimension $C$, Multi-Head Attention projects $\\mathbf{Q}, \\mathbf{K}, \\mathbf{V}$ into $h$ separate heads, each with dimension $d_{head} = C / h$:

$$\\text{head}_i = \\text{Attention}(\\mathbf{Q} \\mathbf{W}_i^Q, \\mathbf{K} \\mathbf{W}_i^K, \\mathbf{V} \\mathbf{W}_i^V)$$

$$\\text{MultiHead}(\\mathbf{Q}, \\mathbf{K}, \\mathbf{V}) = \\text{Concat}(\\text{head}_1, \\dots, \\text{head}_h) \\mathbf{W}_O$$

Different heads learn distinct geometric subspaces:
- Head 1 may track syntactic subject-verb dependencies.
- Head 2 may track matching parentheses or brace closures in Java code.
- Head 3 may resolve long-range variable definitions.
`
  },
  {
    id: "unit-07",
    number: "07",
    title: "Feed-Forward Networks, GELU & Residual Stabilization",
    readTime: "25 min",
    tag: "Neural Architecture",
    summary:
      "Understand the dual role of Multi-Head Attention and Position-Wise Feed-Forward Networks, dive into GELU activation non-linearity, Pre-LayerNorm stabilization, and gradient highways via residual connections.",
    content: `
### 1. Attention vs Feed-Forward: The Division of Labor
In a transformer block, computation alternates between two complementary operations:
1. **Multi-Head Self-Attention**: **Communication Phase**. Allows tokens to mix information across sequence positions (along the time dimension $T$).
2. **Feed-Forward Network (FFN)**: **Computation Phase**. Transforms the representation of each token independently (along the channel dimension $C$).

---

### 2. The Position-Wise Feed-Forward Architecture

$$\\text{FFN}(\\mathbf{x}) = \\mathbf{W}_2 \\cdot \\text{GELU}(\\mathbf{W}_1 \\mathbf{x} + \\mathbf{b}_1) + \\mathbf{b}_2$$

Where:
- $\\mathbf{W}_1 \\in \\mathbb{R}^{C \\times 4C}$ expands the hidden state fourfold (e.g. $128 \\to 512$).
- $\\mathbf{W}_2 \\in \\mathbb{R}^{4C \\times C}$ projects the representation back to the model dimension (e.g. $512 \\to 128$).

\`\`\`
Input Vector x (128 dims)
     │
     ▼
Linear Expansion W_1 (128 -> 512 dims)
     │
     ▼
GELU Activation Non-Linearity
     │
     ▼
Linear Projection W_2 (512 -> 128 dims)
     │
     ▼
Output Vector (128 dims)
\`\`\`

---

### 3. Why GELU Instead of ReLU?
**GELU (Gaussian Error Linear Unit)** (Hendrycks & Gimpel, 2016) weights inputs by their probability under a Gaussian normal distribution:

$$\\text{GELU}(x) = x \\cdot \\Phi(x) = x \\cdot P(X \\le x), \\quad X \\sim \\mathcal{N}(0, 1)$$

Approximate numerical formulation used in PyTorch:

$$\\text{GELU}(x) \\approx 0.5x \\left( 1 + \\tanh\\left( \\sqrt{\\frac{2}{\\pi}} \\left( x + 0.044715 x^3 \\right) \\right) \\right)$$

Unlike ReLU, which abruptly zeroes out all negative values creating "dead neurons", GELU provides a smooth, non-monotonic curve with non-zero curvature for negative inputs, preventing optimization plateaus in deep transformers.

---

### 4. Residual Connections: The Gradient Highway
In deep networks (e.g., 12 to 96 layers), gradients can vanish or explode when backpropagating through dozens of non-linear matrix multiplications.
Residual additions provide an unobstructed additive bypass:

$$\\mathbf{y} = \\mathbf{x} + \\mathcal{F}(\\mathbf{x})$$

When taking the derivative:

$$\\frac{\\partial \\mathbf{y}}{\\partial \\mathbf{x}} = \\mathbf{I} + \\frac{\\partial \\mathcal{F}(\\mathbf{x})}{\\partial \\mathbf{x}}$$

The identity term $\\mathbf{I}$ ensures that gradients can flow directly from the final output back to the earliest embedding layers without attenuation.

---

### 5. Pre-LayerNorm vs Post-LayerNorm
The original 2017 Transformer used **Post-LayerNorm**:
\`\`\`
x = LayerNorm(x + SubLayer(x))
\`\`\`
Modern GPT architectures (GPT-2, GPT-3, LLaMA) strictly use **Pre-LayerNorm**:
\`\`\`
x = x + SubLayer(LayerNorm(x))
\`\`\`
Pre-LN places normalization *inside* the residual stream, keeping the identity highway strictly unnormalized. This eliminates the need for fragile warm-up heuristics and stabilizes FP16 training.
`
  },
  {
    id: "unit-08",
    number: "08",
    title: "Complete Tiny GPT Parameter Mathematics & Weight Tying",
    readTime: "30 min",
    tag: "Mathematical Sizing",
    summary:
      "Perform exact analytical parameter accounting for every tensor in a GPT model, calculate theoretical FLOPs per token, and understand the memory and regularization advantages of weight tying.",
    content: `
### 1. Analytical Parameter Breakdown of Tiny GPT
Let:
- $V$ = Vocabulary size (e.g., 65 characters)
- $T$ = Maximum context length / block size (e.g., 128)
- $C$ = Embedding dimension (e.g., 128)
- $L$ = Number of transformer blocks (e.g., 4)
- $h$ = Number of attention heads (e.g., 4)
- $d_{head} = C / h$ = Head dimension (e.g., 32)

---

### 2. Exact Parameter Counting by Component

#### A. Embedding Layers
1. **Token Embeddings ($W_{tok}$)**:
   $$P_{tok} = V \\times C = 65 \\times 128 = 8,320$$
2. **Positional Embeddings ($W_{pos}$)**:
   $$P_{pos} = T \\times C = 128 \\times 128 = 16,384$$

#### B. Per Transformer Block ($P_{block}$)
1. **Causal Multi-Head Attention**:
   - Query projection: $C \\times C = 128 \\times 128 = 16,384$
   - Key projection: $C \\times C = 128 \\times 128 = 16,384$
   - Value projection: $C \\times C = 128 \\times 128 = 16,384$
   - Output projection ($W_O$): $C \\times C = 128 \\times 128 = 16,384$
   - *Total Attention Weights*: $4 C^2 = 4 \\times 128^2 = 65,536$
2. **Feed-Forward Network (FFN)**:
   - First linear layer ($C \\to 4C$): $C \\times 4C = 128 \\times 512 = 65,536$
   - Second linear layer ($4C \\to C$): $4C \\times C = 512 \\times 128 = 65,536$
   - Biases ($b_1 \\in 4C, b_2 \\in C$): $512 + 128 = 640$
   - *Total FFN Weights*: $8 C^2 + 5C = 131,712$
3. **Layer Normalization Layers (2 per block)**:
   - Scale ($\\gamma$) and shift ($\\beta$) for 2 layers: $2 \\times (2C) = 4 \\times 128 = 512$
4. **Total per Block**:
   $$P_{block} \\approx 4C^2 + 8C^2 = 12C^2 = 12 \\times 128^2 = 196,608$$

#### C. For $L = 4$ Blocks:
$$P_{all\\_blocks} = 4 \\times 196,608 = 786,432$$

#### D. Output Head ($W_{head}$):
If untied: $C \\times V = 128 \\times 65 = 8,320$.

---

### 3. Weight Tying Mechanics
In our Tiny GPT architecture, we share weights between the input token embedding and the output linear head:

\`\`\`python
self.lm_head.weight = self.token_embedding.weight
\`\`\`

Why tie weights? (Press & Wolf, 2017):
1. **Parameter Reduction**: Eliminates an entire $C \\times V$ weight matrix (crucial when vocabulary $V$ is 50,000+ in subword models!).
2. **Geometric Duality**: The matrix that projects token IDs into semantic space is mathematically inverse to the matrix that projects semantic states into token logits.
3. **Regularization**: Prevents the output projection from overfitting on rare tokens.

---

### 4. Grand Total Parameters for Tiny GPT
$$P_{total} = P_{tok} + P_{pos} + (L \\times P_{block}) + P_{final\\_ln}$$
$$P_{total} = 8,320 + 16,384 + 786,432 + 256 \\approx \\mathbf{811,392 \\text{ parameters}} \\quad (\\sim 0.81M)$$
`
  },
  {
    id: "unit-09",
    number: "09",
    title: "End-to-End PyTorch Implementation of Tiny GPT",
    readTime: "35 min",
    tag: "PyTorch Engineering",
    summary:
      "Assemble every component into production-grade PyTorch classes: CausalSelfAttention, FeedForward, TransformerBlock, and the master TinyGPT module with Xavier/Normal weight initialization.",
    content: `
### 1. Complete Causal Self-Attention Class

\`\`\`python
import torch
import torch.nn as nn
import torch.nn.functional as F

class CausalSelfAttention(nn.Module):
    def __init__(self, embedding_dim: int, num_heads: int, block_size: int, dropout: float = 0.1):
        super().__init__()
        assert embedding_dim % num_heads == 0, "embedding_dim must be divisible by num_heads"
        self.num_heads = num_heads
        self.head_dim = embedding_dim // num_heads
        
        # Combined Q, K, V linear projection in a single matrix
        self.qkv = nn.Linear(embedding_dim, 3 * embedding_dim, bias=False)
        self.projection = nn.Linear(embedding_dim, embedding_dim, bias=False)
        self.attn_dropout = nn.Dropout(dropout)
        self.resid_dropout = nn.Dropout(dropout)
        
        # Causal lower-triangular mask buffer (not a parameter)
        self.register_buffer(
            "causal_mask",
            torch.tril(torch.ones(block_size, block_size)).view(1, 1, block_size, block_size),
            persistent=False
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        B, T, C = x.shape
        # Compute Q, K, V projections and split
        qkv = self.qkv(x)  # (B, T, 3C)
        q, k, v = qkv.split(C, dim=2)
        
        # Reshape to (B, num_heads, T, head_dim)
        q = q.view(B, T, self.num_heads, self.head_dim).transpose(1, 2)
        k = k.view(B, T, self.num_heads, self.head_dim).transpose(1, 2)
        v = v.view(B, T, self.num_heads, self.head_dim).transpose(1, 2)
        
        # Scaled dot-product scores: (B, num_heads, T, T)
        scores = (q @ k.transpose(-2, -1)) * (self.head_dim ** -0.5)
        # Apply causal mask: block future positions with -inf
        scores = scores.masked_fill(self.causal_mask[:, :, :T, :T] == 0, float("-inf"))
        # Softmax over key sequence length
        weights = F.softmax(scores, dim=-1)
        weights = self.attn_dropout(weights)
        
        # Attention-weighted value matrix: (B, num_heads, T, head_dim)
        out = weights @ v
        # Re-assemble multi-head outputs: (B, T, C)
        out = out.transpose(1, 2).contiguous().view(B, T, C)
        return self.resid_dropout(self.projection(out))
\`\`\`

---

### 2. Transformer Block & Master Model Class

\`\`\`python
class TransformerBlock(nn.Module):
    def __init__(self, embedding_dim: int, num_heads: int, block_size: int, dropout: float = 0.1):
        super().__init__()
        self.ln1 = nn.LayerNorm(embedding_dim)
        self.attention = CausalSelfAttention(embedding_dim, num_heads, block_size, dropout)
        self.ln2 = nn.LayerNorm(embedding_dim)
        self.ffn = nn.Sequential(
            nn.Linear(embedding_dim, 4 * embedding_dim),
            nn.GELU(),
            nn.Linear(4 * embedding_dim, embedding_dim),
            nn.Dropout(dropout)
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # Pre-LayerNorm residual architecture
        x = x + self.attention(self.ln1(x))
        x = x + self.ffn(self.ln2(x))
        return x

class TinyGPT(nn.Module):
    def __init__(self, vocab_size: int, block_size: int = 128, embedding_dim: int = 128,
                 num_heads: int = 4, num_layers: int = 4, dropout: float = 0.1):
        super().__init__()
        self.block_size = block_size
        self.token_embedding = nn.Embedding(vocab_size, embedding_dim)
        self.position_embedding = nn.Embedding(block_size, embedding_dim)
        self.dropout = nn.Dropout(dropout)
        
        self.blocks = nn.Sequential(*[
            TransformerBlock(embedding_dim, num_heads, block_size, dropout)
            for _ in range(num_layers)
        ])
        self.final_ln = nn.LayerNorm(embedding_dim)
        self.lm_head = nn.Linear(embedding_dim, vocab_size, bias=False)
        
        # Weight tying
        self.lm_head.weight = self.token_embedding.weight
        
        # Apply standard Gaussian initialization
        self.apply(self._init_weights)

    def _init_weights(self, module):
        if isinstance(module, nn.Linear):
            nn.init.normal_(module.weight, mean=0.0, std=0.02)
            if module.bias is not None:
                nn.init.zeros_(module.bias)
        elif isinstance(module, nn.Embedding):
            nn.init.normal_(module.weight, mean=0.0, std=0.02)

    def forward(self, idx: torch.Tensor, targets: torch.Tensor = None):
        B, T = idx.shape
        assert T <= self.block_size, f"Cannot forward sequence of length {T}, block_size is {self.block_size}"
        
        positions = torch.arange(0, T, device=idx.device)
        tok_emb = self.token_embedding(idx)
        pos_emb = self.position_embedding(positions)
        
        x = self.dropout(tok_emb + pos_emb)
        x = self.blocks(x)
        x = self.final_ln(x)
        logits = self.lm_head(x)  # (B, T, vocab_size)
        
        loss = None
        if targets is not None:
            B, T, V = logits.shape
            loss = F.cross_entropy(logits.view(B * T, V), targets.view(B * T))
            
        return logits, loss
\`\`\`
`
  },
  {
    id: "unit-10",
    number: "10",
    title: "The Autoregressive Training Loop & Optimization",
    readTime: "30 min",
    tag: "Training Engineering",
    summary:
      "Implement the complete training pipeline in PyTorch with AdamW optimizer, gradient clipping, evaluation intervals, loss tracking, and safetensors checkpointing.",
    content: `
### 1. Training Dynamics & Cross-Entropy Optimization
During training, every sequence of tokens is processed in parallel. The cross-entropy loss averages the negative log-likelihood of predicting the correct target token across all $N = B \\times T$ positions:

$$\\mathcal{L} = -\\frac{1}{N} \\sum_{i=1}^{N} \\log P(y_i \\mid x_{1:i})$$

Where $P(y_i \\mid x_{1:i}) = \\text{softmax}(\\mathbf{z}_i)_{y_i}$.

---

### 2. The Complete PyTorch Training Loop

\`\`\`python
import math
import torch

def train_model(model, train_data, val_data, config):
    device = config['device']
    model.to(device)
    
    # AdamW optimizer with decoupled weight decay
    optimizer = torch.optim.AdamW(
        model.parameters(), 
        lr=config['learning_rate'], 
        weight_decay=0.1, 
        betas=(0.9, 0.95)
    )
    
    @torch.no_grad()
    def estimate_loss():
        model.eval()
        out = {}
        for split in ['train', 'val']:
            losses = torch.zeros(config['eval_iters'])
            for k in range(config['eval_iters']):
                X, Y = get_batch(split, train_data, val_data, 
                                 config['batch_size'], config['block_size'], device)
                _, loss = model(X, Y)
                losses[k] = loss.item()
            out[split] = losses.mean().item()
        model.train()
        return out

    print(f"Starting training on {device}...")
    for iter_step in range(config['max_iters']):
        # Periodic evaluation
        if iter_step % config['eval_interval'] == 0:
            losses = estimate_loss()
            train_ppl = math.exp(losses['train'])
            val_ppl = math.exp(losses['val'])
            print(f"Step {iter_step:4d} | Train Loss: {losses['train']:.4f} (PPL: {train_ppl:.2f}) | "
                  f"Val Loss: {losses['val']:.4f} (PPL: {val_ppl:.2f})")
            
        # Sample training batch
        xb, yb = get_batch('train', train_data, val_data, 
                           config['batch_size'], config['block_size'], device)
        
        # Forward pass
        logits, loss = model(xb, yb)
        
        # Backward pass
        optimizer.zero_grad(set_to_none=True)
        loss.backward()
        
        # Gradient clipping: prevents exploding gradient destabilization
        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
        
        # Optimizer update
        optimizer.step()
        
    print("Training complete!")
\`\`\`

---

### 3. Gradient Clipping Explained
Deep attention models occasionally encounter batches with high loss spikes that yield massive parameter gradients $\\nabla_\\theta \\mathcal{L}$. Without clipping, an optimizer step with high gradient norms can catapult weights into unrecoverable NaN loss territories.

\`\`\`python
torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)
\`\`\`

This calculates the global $L_2$ norm $g = \\|\\mathbf{g}\\|_2$. If $g > 1.0$, all gradients are scaled by $1.0 / g$, preserving their relative update direction while strictly limiting step magnitude.
`
  },
  {
    id: "unit-11",
    number: "11",
    title: "Text Generation & Sampling Strategies",
    readTime: "30 min",
    tag: "Inference & Decoding",
    summary:
      "Explore autoregressive generation decoding algorithms: deterministic Greedy Decoding, Temperature scaling math, Top-K filtering, and Top-P (Nucleus) cumulative sampling.",
    content: `
### 1. Autoregressive Sampling Loop
Once trained, inference generates tokens sequentially. Given an input sequence $\\mathbf{x}_{1:t}$:
1. Crop context to the most recent \`block_size\` tokens.
2. Forward pass through the model to retrieve logits $\\mathbf{z} \\in \\mathbb{R}^{V}$ for the final token position $t$.
3. Apply temperature scaling: $\\mathbf{z}' = \\mathbf{z} / T$.
4. Filter logits using Top-K or Top-P (Nucleus) masking.
5. Apply Softmax to convert filtered logits into probabilities $\\mathbf{p}$.
6. Sample next token $x_{t+1} \\sim \\text{Categorical}(\\mathbf{p})$ using multinomial sampling.
7. Concatenate $x_{t+1}$ onto $\\mathbf{x}_{1:t}$ and repeat.

---

### 2. Decoding Strategies Compared

\`\`\`
+------------------+-----------------------------+-----------------------------+-----------------------------+
| Strategy         | Selection Criterion         | Pros                        | Cons                        |
+------------------+-----------------------------+-----------------------------+-----------------------------+
| Greedy Search    | argmax(z_i)                 | 100% Deterministic, Fast    | Highly repetitive, loops    |
| Temperature T    | z_i / T                     | Tunable creativity          | Low temp -> loops, High->gib|
| Top-K Sampling   | Keep top K highest logits   | Eliminates rare tokens      | Static K fails on broad/flat|
| Top-P (Nucleus)  | Keep smallest set sum >= p  | Dynamically adapts to conf. | Slightly more computation   |
+------------------+-----------------------------+-----------------------------+-----------------------------+
\`\`\`

---

### 3. Mathematical Formulation of Temperature
The temperature parameter $T > 0$ controls the entropy (sharpness) of the probability distribution:

$$P(x_i) = \\frac{\\exp(z_i / T)}{\\sum_j \\exp(z_j / T)}$$

- **$T \\to 0$ (e.g. 0.2)**: High-probability tokens are amplified exponentially; distribution approaches an argmax delta spike. Ideal for code compilation and factual extraction.
- **$T = 1.0$**: Unaltered standard model probability distribution.
- **$T > 1.0$ (e.g. 1.5)**: Logits are flattened toward uniform distribution; maximizes creative variation but increases syntactic errors.

---

### 4. Top-K and Top-P (Nucleus) Filtering in PyTorch

\`\`\`python
@torch.no_grad()
def generate(model, idx: torch.Tensor, max_new_tokens: int, temperature: float = 1.0, 
             top_k: int = None, top_p: float = None):
    """
    Autoregressively sample tokens with temperature, top-k, and nucleus top-p filtering.
    """
    model.eval()
    for _ in range(max_new_tokens):
        # Crop context to model's maximum block size
        idx_cond = idx[:, -model.block_size:]
        
        # Forward pass: get logits for the last token position
        logits, _ = model(idx_cond)
        logits = logits[:, -1, :] / temperature  # (B, V)
        
        # Top-K Filtering
        if top_k is not None:
            v, _ = torch.topk(logits, min(top_k, logits.size(-1)))
            logits[logits < v[:, [-1]]] = float("-inf")
            
        # Top-P (Nucleus) Filtering
        if top_p is not None:
            sorted_logits, sorted_indices = torch.sort(logits, descending=True)
            cumulative_probs = torch.cumsum(F.softmax(sorted_logits, dim=-1), dim=-1)
            
            # Remove tokens with cumulative probability above threshold
            sorted_indices_to_remove = cumulative_probs > top_p
            # Shift indices right to keep first token above threshold
            sorted_indices_to_remove[..., 1:] = sorted_indices_to_remove[..., :-1].clone()
            sorted_indices_to_remove[..., 0] = 0
            
            indices_to_remove = sorted_indices_to_remove.scatter(1, sorted_indices, sorted_indices_to_remove)
            logits[indices_to_remove] = float("-inf")
            
        # Sample next token from categorical distribution
        probs = F.softmax(logits, dim=-1)
        next_token = torch.multinomial(probs, num_samples=1)
        idx = torch.cat((idx, next_token), dim=1)
        
    return idx
\`\`\`
`
  },
  {
    id: "unit-12",
    number: "12",
    title: "Evaluation Metrics & Modern Architectural Upgrades",
    readTime: "30 min",
    tag: "Evaluation & Modern SOTA",
    summary:
      "Calculate Perplexity (PPL = exp(loss)), diagnose overfitting, explore modern production upgrades: FlashAttention, KV Caching, SwiGLU activations, and RMSNorm.",
    content: `
### 1. Perplexity (PPL) as Language Model Benchmark
**Perplexity** is the standard intrinsic metric for language models. Mathematically, it is the exponential of the cross-entropy loss:

$$\\text{PPL} = e^{\\mathcal{L}} = \\exp\\left( -\\frac{1}{N} \\sum_{i=1}^{N} \\log P(y_i) \\right)$$

Intuitive meaning:
- A perplexity of **10** means that on average, at each token step, the model is as uncertain as if choosing uniformly among **10 equally likely candidate tokens**.
- If a character-level model with vocabulary size 65 starts with random weights:
  $$\\mathcal{L}_{init} \\approx -\\log(1/65) = \\log(65) \\approx 4.17, \\quad \\text{PPL} \\approx 65.0$$
- As training converges:
  $$\\mathcal{L} \\approx 1.50 \\implies \\text{PPL} \\approx e^{1.50} \\approx 4.48$$

---

### 2. Modern Upgrades: Transforming Tiny GPT into Modern SOTA

\`\`\`
Tiny GPT (Baseline)              Modern SOTA SLM (SmolLM / LLaMA / Qwen)
--------------------              ----------------------------------------
Learned Absolute Pos. Embeddings  Rotary Position Embeddings (RoPE)
Vanilla Standard LayerNorm       Root Mean Square Normalization (RMSNorm)
Standard GELU Feed-Forward       SwiGLU (Swish Gated Linear Unit)
Manual Quadratic O(T^2) Attention FlashAttention-2 Tiling & Kernel Fusion
Standard Recurrent Inference     Key-Value (KV) Caching
Character Tokenizer              Byte-Level BPE (Tiktoken / SentencePiece)
\`\`\`

---

### 3. FlashAttention Tiling Mechanics
Standard attention loads $\\mathbf{Q}, \\mathbf{K}$ from high-bandwidth GPU HBM memory into fast SRAM, writes the intermediate $T \\times T$ score matrix back to HBM, reads it again for Softmax, and writes back.
- **FlashAttention** (Dao et al., 2022) splits input matrices into blocks, computes softmax and attention updates incrementally in fast on-chip SRAM using online softmax re-scaling, reducing memory reads/writes from $O(T^2)$ to $O(T)$.

In PyTorch 2.0+, this is available via one line:
\`\`\`python
# Automatically dispatches to FlashAttention on supported GPUs!
out = F.scaled_dot_product_attention(q, k, v, is_causal=True)
\`\`\`

---

### 4. Key-Value (KV) Caching for Fast Inference
During generation of token 100, the attention representations for tokens $1 \\dots 99$ do not change!
- **Naive Inference**: Recomputes all previous $Q, K, V$ states $\\implies O(N^2)$ forward passes.
- **KV Caching**: Caches Key and Value tensors in GPU memory and only computes $Q, K, V$ for the newest single token $\\implies O(N)$ inference complexity!
`
  }
];

export const interactiveToolsSummary = [
  {
    id: "tool-attention",
    name: "Causal Self-Attention Matrix Visualizer",
    component: "CausalSelfAttentionMatrixVisualizer",
    description: "Step-by-step matrix multiplication visualizer showing Q · K^T / sqrt(d_k), interactive token causal masking (-inf upper triangle), Softmax probability distribution heatmaps, and weighted value summation across tokens."
  },
  {
    id: "tool-bpe",
    name: "BPE Tokenizer Merge Simulator",
    component: "BpeMergeTokenizerVisualizer",
    description: "Interactive Byte Pair Encoding simulator. Watch raw character sequences calculate bigram frequency statistics, execute iterative pair merges, and dynamically build subword vocabularies."
  },
  {
    id: "tool-params",
    name: "Transformer Parameter & Memory Calculator",
    component: "TransformerParameterCalculator",
    description: "Live architectural sizing calculator. Tweak layers (L), embedding dimensions (C), heads (h), context length (T), and vocabulary size (V) to calculate exact parameters, weight tying savings, and GPU memory usage."
  },
  {
    id: "tool-sampler",
    name: "Autoregressive Sampling & Decoding Visualizer",
    component: "AutoregressiveGenerationSamplerVisualizer",
    description: "Interactive next-token generator simulator. Manipulate Temperature, Top-K, and Nucleus Top-P sliders to see how candidate probabilities rescale and filter in real time."
  },
  {
    id: "tool-loss",
    name: "Training Loss & Perplexity Curve Simulator",
    component: "TrainingLossPerplexitySimulator",
    description: "Interactive training dynamic simulator. Step through 2000 training steps, monitor training vs validation loss, detect the exact inflection point of overfitting, and track Perplexity PPL = exp(loss)."
  }
];

export const guidedLabs = [
  {
    id: "lab-01",
    number: "Lab 01",
    title: "Building an Invertible Character Tokenizer from Scratch",
    difficulty: "Beginner",
    time: "45 min",
    objective: "Implement a pure Python character-level tokenizer with deterministic sorted vocabulary, encode, decode, and validation checks.",
    prerequisites: ["Python fundamentals", "String manipulation"],
    deliverable: "tokenizer.py with 100% roundtrip assertion tests",
    scenario: "You are building the foundation of Tiny GPT. Before any neural layers can be defined, you must transform raw Java source files into contiguous integer tensors."
  },
  {
    id: "lab-02",
    number: "Lab 02",
    title: "Scaled Dot-Product Attention with Causal Masking",
    difficulty: "Intermediate",
    time: "60 min",
    objective: "Implement manual scaled dot-product attention in PyTorch without using high-level modules, including sqrt(d_k) scaling and lower-triangular causal masking.",
    prerequisites: ["Matrix multiplication", "PyTorch tensor operations"],
    deliverable: "attention.py verifying that attention scores to future tokens are strictly 0.0000",
    scenario: "Verify that attention representations preserve autoregressive causality and prevent future token leakage during training."
  },
  {
    id: "lab-03",
    number: "Lab 03",
    title: "Constructing Pre-LayerNorm Transformer Blocks",
    difficulty: "Intermediate",
    time: "60 min",
    objective: "Assemble Multi-Head Attention, Pre-LayerNorm, Residual additions, and a GELU-activated Feed-Forward Network into a reusable block module.",
    prerequisites: ["Lab 02 completion", "Residual network theory"],
    deliverable: "block.py passing tensor shape invariance checks (B, T, C) -> (B, T, C)",
    scenario: "Build the foundational repeating layer of the GPT architecture with numerical stability guarantees."
  },
  {
    id: "lab-04",
    number: "Lab 04",
    title: "Assembling the Tiny GPT Architecture & Weight Tying",
    difficulty: "Advanced",
    time: "75 min",
    objective: "Build the complete TinyGPT PyTorch class with learnable position embeddings, stacked transformer blocks, and weight tying between token embedding and lm_head.",
    prerequisites: ["Lab 03 completion", "Weight initialization"],
    deliverable: "model.py verifying forward pass loss calculation and weight pointer identity",
    scenario: "Combine all submodules into a cohesive language model ready for autoregressive training."
  },
  {
    id: "lab-05",
    number: "Lab 05",
    title: "Training Loop Implementation with AdamW & Gradient Clipping",
    difficulty: "Advanced",
    time: "90 min",
    objective: "Write the complete end-to-end training pipeline, evaluating training vs validation loss every 200 steps and preventing gradient explosion.",
    prerequisites: ["Lab 04 completion", "PyTorch training loop mechanics"],
    deliverable: "train.py running 2,000 steps on input.txt and generating sample continuations",
    scenario: "Train your Tiny GPT model from scratch on Java technical explanations until validation perplexity stabilizes."
  },
  {
    id: "lab-06",
    number: "Lab 06",
    title: "Architectural Ablation & Decoding Exploration",
    difficulty: "Expert",
    time: "75 min",
    objective: "Conduct systematic ablation experiments comparing 2 vs 4 layers, 64 vs 128 embedding dimensions, and benchmark Greedy vs Top-K vs Top-P sampling.",
    prerequisites: ["Lab 05 completion", "Experimental methodology"],
    deliverable: "ablation_report.md with parameter tables, loss curves, and qualitative generation samples",
    scenario: "Systematically analyze the trade-offs of architectural sizing, training throughput, and generation quality on consumer hardware."
  }
];

export const capstoneProject = {
  id: "capstone-tinygpt-java",
  title: "JavaTinyGPT-1.5M: An End-to-End Domain-Specific Language Model",
  tag: "Capstone Engineering Project",
  duration: "4 - 6 hours",
  difficulty: "Expert Level",
  summary:
    "Design, train, evaluate, and package a 1.5M parameter domain-specific small language model capable of completing Java syntax, explaining Object-Oriented Programming (OOP) concepts, and predicting JVM internals.",
  specifications: {
    targetParameters: "1,450,000 - 1,600,000 parameters",
    architecture: "Decoder-only Pre-LayerNorm Transformer",
    contextLength: "128 tokens",
    embeddingDim: "192",
    numHeads: "6 (head_dim = 32)",
    numLayers: "4",
    ffnDim: "768 (4x expansion)",
    activation: "GELU",
    norm: "LayerNorm (eps=1e-5)",
    tokenization: "Character-Level (or mini-BPE with V=512)",
    trainingCorpus: "Java documentation, OOP interview answers, and syntax snippets (~250,000 characters)"
  },
  deliverables: [
    "tokenizer.py - Tested character/BPE encoder-decoder with serialized vocab",
    "dataset.py - Document-stratified train/val loader with shifted next-token batch tensors",
    "model.py - Full TinyGPT implementation with tied weights and causal masking",
    "train.py - Production training loop with AdamW, grad clipping, cosine lr scheduler, and eval metrics",
    "generate.py - Autoregressive CLI tool with temperature, top-k, and nucleus top-p sampling",
    "checkpoint.pt - Saved model weights with hyperparameter config metadata"
  ],
  milestones: [
    {
      step: 1,
      name: "Corpus Curation & Cleaning",
      details: "Aggregate 10+ core Java topic files (OOP, JVM, Collections, Concurrency), clean whitespace, and verify total character volume exceeds 200k tokens."
    },
    {
      step: 2,
      name: "Tokenizer & Data Tensor Harness",
      details: "Construct the vocabulary, encode the corpus into PyTorch LongTensor, and verify get_batch('train') produces aligned (B, T) tensors."
    },
    {
      step: 3,
      name: "Model Construction & Parameter Verification",
      details: "Instantiate JavaTinyGPT with 4 layers and 192 dimensions; verify trainable parameter count matches analytical calculation (~1.5M)."
    },
    {
      step: 4,
      name: "Training Execution & Loss Stabilization",
      details: "Execute 3,000 training steps on GPU; verify train loss decreases from ~4.2 to < 1.45, with validation perplexity dropping below 4.5."
    },
    {
      step: 5,
      name: "Qualitative Testing & Sampling Benchmark",
      details: "Benchmark prompts: 'Java supports ', 'The JVM executes ', 'Polymorphism allows '. Compare outputs across Temperature 0.2, 0.7, and 1.2."
    }
  ]
};

export const codingAssignments = [
  {
    id: "task-01",
    title: "Implement Invertible Character Tokenizer",
    difficulty: "Easy",
    category: "Tokenization",
    description: "Write a CharacterTokenizer class that builds a sorted unique vocabulary from input text, provides encode() and decode() methods, and passes the identity assertion decode(encode(text)) == text.",
    starterCode: `class CharacterTokenizer:
    def __init__(self, text: str):
        # TODO: Build sorted vocabulary and stoi / itos dictionaries
        pass

    def encode(self, text: str) -> list[int]:
        # TODO: Return list of integer token IDs
        pass

    def decode(self, token_ids: list[int]) -> str:
        # TODO: Return reconstructed string
        pass`,
    solutionCode: `class CharacterTokenizer:
    def __init__(self, text: str):
        self.vocab = sorted(list(set(text)))
        self.vocab_size = len(self.vocab)
        self.stoi = {ch: i for i, ch in enumerate(self.vocab)}
        self.itos = {i: ch for i, ch in enumerate(self.vocab)}

    def encode(self, text: str) -> list[int]:
        return [self.stoi[ch] for ch in text]

    def decode(self, token_ids: list[int]) -> str:
        return "".join([self.itos[int(i)] for i in token_ids])`,
    testCases: "Assert that encoding 'Java is powerful' and decoding returns the identical string."
  },
  {
    id: "task-02",
    title: "Construct Shifted Next-Token Batch Generator",
    difficulty: "Medium",
    category: "Dataset Engineering",
    description: "Write a function get_batch(data, batch_size, block_size, device) that extracts random contiguous slices of length block_size for input x, and slices shifted by +1 for target y.",
    starterCode: `import torch

def get_batch(data: torch.Tensor, batch_size: int, block_size: int, device: str):
    # TODO: Sample random starting indices and construct x and y
    pass`,
    solutionCode: `import torch

def get_batch(data: torch.Tensor, batch_size: int, block_size: int, device: str):
    ix = torch.randint(len(data) - block_size - 1, (batch_size,))
    x = torch.stack([data[i:i + block_size] for i in ix])
    y = torch.stack([data[i + 1:i + block_size + 1] for i in ix])
    return x.to(device), y.to(device)`,
    testCases: "Given data = torch.arange(100), verify that y[0, 0] == x[0, 0] + 1."
  },
  {
    id: "task-03",
    title: "Implement Scaled Dot-Product Attention with Scaling",
    difficulty: "Medium",
    category: "Attention Mechanics",
    description: "Implement a function scaled_dot_product_attention(q, k, v) that multiplies Q and K^T, divides by sqrt(d_k), applies softmax along the last dimension, and multiplies by V.",
    starterCode: `import torch
import torch.nn.functional as F

def scaled_dot_product_attention(q: torch.Tensor, k: torch.Tensor, v: torch.Tensor) -> torch.Tensor:
    # TODO: Compute scaled dot-product attention
    pass`,
    solutionCode: `import torch
import torch.nn.functional as F

def scaled_dot_product_attention(q: torch.Tensor, k: torch.Tensor, v: torch.Tensor) -> torch.Tensor:
    d_k = q.size(-1)
    scores = torch.matmul(q, k.transpose(-2, -1)) / (d_k ** 0.5)
    weights = F.softmax(scores, dim=-1)
    return torch.matmul(weights, v)`,
    testCases: "Verify output tensor has the exact shape of query tensor q."
  },
  {
    id: "task-04",
    title: "Implement Causal Masking Mechanism",
    difficulty: "Medium",
    category: "Attention Mechanics",
    description: "Write a function apply_causal_mask(scores) that takes an attention score tensor (B, num_heads, T, T) and replaces all upper-triangular values (where j > i) with -infinity.",
    starterCode: `import torch

def apply_causal_mask(scores: torch.Tensor) -> torch.Tensor:
    # TODO: Mask upper triangular positions with float('-inf')
    pass`,
    solutionCode: `import torch

def apply_causal_mask(scores: torch.Tensor) -> torch.Tensor:
    T = scores.size(-1)
    mask = torch.tril(torch.ones(T, T, device=scores.device))
    return scores.masked_fill(mask == 0, float("-inf"))`,
    testCases: "Verify that F.softmax(apply_causal_mask(scores), dim=-1)[0, 0, 0, 1] == 0.0."
  },
  {
    id: "task-05",
    title: "Multi-Head Attention Projection & Reshape",
    difficulty: "Hard",
    category: "Attention Mechanics",
    description: "Implement the tensor reshaping logic in CausalSelfAttention that splits (B, T, C) into (B, num_heads, T, head_dim) and recombines it back after attention.",
    starterCode: `import torch
import torch.nn as nn

class HeadSplitter(nn.Module):
    def __init__(self, embedding_dim: int, num_heads: int):
        super().__init__()
        self.num_heads = num_heads
        self.head_dim = embedding_dim // num_heads

    def split_heads(self, x: torch.Tensor) -> torch.Tensor:
        # TODO: Reshape from (B, T, C) to (B, num_heads, T, head_dim)
        pass

    def combine_heads(self, x: torch.Tensor) -> torch.Tensor:
        # TODO: Reshape back to (B, T, C)
        pass`,
    solutionCode: `import torch
import torch.nn as nn

class HeadSplitter(nn.Module):
    def __init__(self, embedding_dim: int, num_heads: int):
        super().__init__()
        self.num_heads = num_heads
        self.head_dim = embedding_dim // num_heads

    def split_heads(self, x: torch.Tensor) -> torch.Tensor:
        B, T, C = x.shape
        return x.view(B, T, self.num_heads, self.head_dim).transpose(1, 2)

    def combine_heads(self, x: torch.Tensor) -> torch.Tensor:
        B, num_heads, T, head_dim = x.shape
        return x.transpose(1, 2).contiguous().view(B, T, num_heads * head_dim)`,
    testCases: "Ensure roundtrip tensor shape split_heads -> combine_heads matches original (B, T, C)."
  },
  {
    id: "task-06",
    title: "Implement GELU-Activated Feed-Forward Network",
    difficulty: "Easy",
    category: "Feed-Forward Architecture",
    description: "Implement the FeedForward PyTorch nn.Module with linear expansion from embedding_dim to 4*embedding_dim, GELU activation, linear projection back to embedding_dim, and dropout.",
    starterCode: `import torch.nn as nn

class FeedForward(nn.Module):
    def __init__(self, embedding_dim: int, dropout: float = 0.1):
        super().__init__()
        # TODO: Initialize Sequential network
        pass

    def forward(self, x):
        pass`,
    solutionCode: `import torch.nn as nn

class FeedForward(nn.Module):
    def __init__(self, embedding_dim: int, dropout: float = 0.1):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(embedding_dim, 4 * embedding_dim),
            nn.GELU(),
            nn.Linear(4 * embedding_dim, embedding_dim),
            nn.Dropout(dropout)
        )

    def forward(self, x):
        return self.net(x)`,
    testCases: "Verify input tensor shape (B, T, 128) outputs shape (B, T, 128)."
  },
  {
    id: "task-07",
    title: "Implement Pre-LayerNorm Transformer Block",
    difficulty: "Medium",
    category: "Block Architecture",
    description: "Construct the TransformerBlock module connecting Pre-LayerNorm, CausalSelfAttention, residual addition 1, Pre-LayerNorm 2, FeedForward, and residual addition 2.",
    starterCode: `import torch.nn as nn

class TransformerBlock(nn.Module):
    def __init__(self, embedding_dim: int, num_heads: int, block_size: int, dropout: float = 0.1):
        super().__init__()
        # TODO: Initialize components
        pass

    def forward(self, x):
        # TODO: Implement pre-LN residual forward pass
        pass`,
    solutionCode: `import torch.nn as nn

class TransformerBlock(nn.Module):
    def __init__(self, attention_module: nn.Module, ffn_module: nn.Module, embedding_dim: int):
        super().__init__()
        self.ln1 = nn.LayerNorm(embedding_dim)
        self.attn = attention_module
        self.ln2 = nn.LayerNorm(embedding_dim)
        self.ffn = ffn_module

    def forward(self, x):
        x = x + self.attn(self.ln1(x))
        x = x + self.ffn(self.ln2(x))
        return x`,
    testCases: "Confirm output maintains exact tensor dimensions and preserves gradient flow across both paths."
  },
  {
    id: "task-08",
    title: "Implement Exact Parameter Accounting Function",
    difficulty: "Medium",
    category: "Mathematical Sizing",
    description: "Write a pure function count_gpt_parameters(vocab_size, block_size, embedding_dim, num_layers, tie_weights) that analytically computes the total trainable parameter count of a Tiny GPT.",
    starterCode: `def count_gpt_parameters(vocab_size: int, block_size: int, embedding_dim: int, num_layers: int, tie_weights: bool = True) -> int:
    # TODO: Calculate exact total parameters
    pass`,
    solutionCode: `def count_gpt_parameters(vocab_size: int, block_size: int, embedding_dim: int, num_layers: int, tie_weights: bool = True) -> int:
    C = embedding_dim
    p_tok = vocab_size * C
    p_pos = block_size * C
    # Attention: 4 * C^2
    # FFN: 8 * C^2 + 5 * C (including biases)
    # LayerNorm: 4 * C (2 LN per block, each has weight & bias)
    p_block = (4 * C * C) + (8 * C * C + 5 * C) + (4 * C)
    p_blocks = num_layers * p_block
    p_final_ln = 2 * C
    p_head = 0 if tie_weights else (C * vocab_size)
    return p_tok + p_pos + p_blocks + p_final_ln + p_head`,
    testCases: "Verify for V=65, T=128, C=128, L=4, tie_weights=True that parameter count is approx 811,392."
  },
  {
    id: "task-09",
    title: "Implement Weight Tying in PyTorch",
    difficulty: "Easy",
    category: "Model Construction",
    description: "Write a code snippet that links the weight tensor of an output projection linear layer lm_head to the weight tensor of an nn.Embedding layer.",
    starterCode: `import torch.nn as nn

def tie_embedding_and_lm_head(token_embedding: nn.Embedding, lm_head: nn.Linear):
    # TODO: Link weights so they share the exact same underlying memory tensor
    pass`,
    solutionCode: `import torch.nn as nn

def tie_embedding_and_lm_head(token_embedding: nn.Embedding, lm_head: nn.Linear):
    lm_head.weight = token_embedding.weight`,
    testCases: "Verify that token_embedding.weight.data_ptr() == lm_head.weight.data_ptr()."
  },
  {
    id: "task-10",
    title: "Implement Autoregressive Cross-Entropy Loss Reshaping",
    difficulty: "Medium",
    category: "Training Engineering",
    description: "Write a function compute_loss(logits, targets) that takes logits of shape (B, T, V) and targets of shape (B, T), flattens them appropriately, and computes F.cross_entropy.",
    starterCode: `import torch
import torch.nn.functional as F

def compute_loss(logits: torch.Tensor, targets: torch.Tensor) -> torch.Tensor:
    # TODO: Flatten and compute cross-entropy loss
    pass`,
    solutionCode: `import torch
import torch.nn.functional as F

def compute_loss(logits: torch.Tensor, targets: torch.Tensor) -> torch.Tensor:
    B, T, V = logits.shape
    return F.cross_entropy(logits.view(B * T, V), targets.view(B * T))`,
    testCases: "Verify scalar tensor return value with proper gradient tracking."
  },
  {
    id: "task-11",
    title: "Implement Perplexity Computation Function",
    difficulty: "Easy",
    category: "Evaluation Metrics",
    description: "Write a function compute_perplexity(loss_value) that returns the perplexity PPL = exp(loss), handling numerical stability edge cases.",
    starterCode: `import math

def compute_perplexity(loss: float) -> float:
    # TODO: Return exp(loss)
    pass`,
    solutionCode: `import math

def compute_perplexity(loss: float) -> float:
    if loss > 80.0:
        return float("inf")
    return math.exp(loss)`,
    testCases: "Verify compute_perplexity(2.0) is approx 7.389."
  },
  {
    id: "task-12",
    title: "Implement Gradient Clipping Utility",
    difficulty: "Easy",
    category: "Optimization",
    description: "Write a function clip_gradients(model, max_norm=1.0) using torch.nn.utils.clip_grad_norm_ to prevent gradient explosion.",
    starterCode: `import torch

def clip_gradients(model: torch.nn.Module, max_norm: float = 1.0) -> float:
    # TODO: Clip model gradients and return total norm
    pass`,
    solutionCode: `import torch

def clip_gradients(model: torch.nn.Module, max_norm: float = 1.0) -> float:
    return torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=max_norm).item()`,
    testCases: "Verify that gradients exceeding max_norm are rescaled so their norm equals max_norm."
  },
  {
    id: "task-13",
    title: "Implement Temperature Logit Scaler",
    difficulty: "Easy",
    category: "Decoding & Sampling",
    description: "Write a function apply_temperature(logits, temperature) that validates temperature > 0 and scales logits accordingly.",
    starterCode: `import torch

def apply_temperature(logits: torch.Tensor, temperature: float) -> torch.Tensor:
    # TODO: Validate and divide logits by temperature
    pass`,
    solutionCode: `import torch

def apply_temperature(logits: torch.Tensor, temperature: float) -> torch.Tensor:
    if temperature <= 0.0:
        raise ValueError("Temperature must be strictly positive.")
    return logits / temperature`,
    testCases: "Verify that temperature = 0.5 doubles the absolute differences between logit values."
  },
  {
    id: "task-14",
    title: "Implement Top-K Filtering on Logits",
    difficulty: "Medium",
    category: "Decoding & Sampling",
    description: "Write a function filter_top_k(logits, k) that sets all logits outside the top K candidate values to float('-inf').",
    starterCode: `import torch

def filter_top_k(logits: torch.Tensor, k: int) -> torch.Tensor:
    # TODO: Mask tokens outside top K with -inf
    pass`,
    solutionCode: `import torch

def filter_top_k(logits: torch.Tensor, k: int) -> torch.Tensor:
    k = min(k, logits.size(-1))
    v, _ = torch.topk(logits, k)
    filtered = logits.clone()
    filtered[filtered < v[:, [-1]]] = float("-inf")
    return filtered`,
    testCases: "Verify that exactly K items in the probability distribution are non-zero."
  },
  {
    id: "task-15",
    title: "Implement Nucleus (Top-P) Filtering",
    difficulty: "Hard",
    category: "Decoding & Sampling",
    description: "Write a function filter_top_p(logits, p) that dynamically retains only the smallest set of tokens whose cumulative softmax probability reaches or exceeds threshold p.",
    starterCode: `import torch
import torch.nn.functional as F

def filter_top_p(logits: torch.Tensor, p: float) -> torch.Tensor:
    # TODO: Implement nucleus sampling masking
    pass`,
    solutionCode: `import torch
import torch.nn.functional as F

def filter_top_p(logits: torch.Tensor, p: float) -> torch.Tensor:
    sorted_logits, sorted_indices = torch.sort(logits, descending=True)
    cumulative_probs = torch.cumsum(F.softmax(sorted_logits, dim=-1), dim=-1)
    
    sorted_indices_to_remove = cumulative_probs > p
    sorted_indices_to_remove[..., 1:] = sorted_indices_to_remove[..., :-1].clone()
    sorted_indices_to_remove[..., 0] = 0
    
    indices_to_remove = sorted_indices_to_remove.scatter(1, sorted_indices, sorted_indices_to_remove)
    filtered = logits.clone()
    filtered[indices_to_remove] = float("-inf")
    return filtered`,
    testCases: "Verify that cumulative probability of surviving tokens is >= p."
  },
  {
    id: "task-16",
    title: "Implement Deterministic Greedy Search Decoder",
    difficulty: "Easy",
    category: "Decoding & Sampling",
    description: "Implement greedy_generate(model, idx, max_tokens) using torch.argmax without multinomial sampling.",
    starterCode: `import torch

@torch.no_grad()
def greedy_generate(model, idx: torch.Tensor, max_tokens: int) -> torch.Tensor:
    # TODO: Autoregressively select argmax next token
    pass`,
    solutionCode: `import torch

@torch.no_grad()
def greedy_generate(model, idx: torch.Tensor, max_tokens: int) -> torch.Tensor:
    model.eval()
    for _ in range(max_tokens):
        idx_cond = idx[:, -model.block_size:]
        logits, _ = model(idx_cond)
        next_token = torch.argmax(logits[:, -1, :], dim=-1, keepdim=True)
        idx = torch.cat((idx, next_token), dim=1)
    return idx`,
    testCases: "Verify two runs with the same input generate 100% identical token outputs."
  },
  {
    id: "task-17",
    title: "Implement Document-Stratified Train/Val Splitter",
    difficulty: "Medium",
    category: "Data Pipeline",
    description: "Write split_corpus_by_documents(docs: list[str], train_ratio=0.85) that shuffles documents with fixed seed and returns concatenated train and val text without mid-sentence cuts.",
    starterCode: `import random

def split_corpus_by_documents(docs: list[str], train_ratio: float = 0.85) -> tuple[str, str]:
    # TODO: Return train_text, val_text
    pass`,
    solutionCode: `import random

def split_corpus_by_documents(docs: list[str], train_ratio: float = 0.85, seed: int = 42) -> tuple[str, str]:
    rng = random.Random(seed)
    shuffled = docs.copy()
    rng.shuffle(shuffled)
    split_pt = int(len(shuffled) * train_ratio)
    train_docs = shuffled[:split_pt]
    val_docs = shuffled[split_pt:]
    return "\\n\\n".join(train_docs), "\\n\\n".join(val_docs)`,
    testCases: "Verify validation text contains 0 documents from the training partition."
  },
  {
    id: "task-18",
    title: "Implement Checkpoint Saving & Loading Module",
    difficulty: "Medium",
    category: "MLOps & Systems",
    description: "Implement save_checkpoint(model, optimizer, config, path) and load_checkpoint(path, model, optimizer) using torch.save and torch.load.",
    starterCode: `import torch

def save_checkpoint(model, optimizer, config, path: str):
    pass

def load_checkpoint(path: str, model, optimizer=None):
    pass`,
    solutionCode: `import torch

def save_checkpoint(model, optimizer, config, path: str):
    checkpoint = {
        "model_state": model.state_dict(),
        "optimizer_state": optimizer.state_dict() if optimizer else None,
        "config": config
    }
    torch.save(checkpoint, path)

def load_checkpoint(path: str, model, optimizer=None):
    checkpoint = torch.load(path, map_location="cpu", weights_only=False)
    model.load_state_dict(checkpoint["model_state"])
    if optimizer and checkpoint["optimizer_state"]:
        optimizer.load_state_dict(checkpoint["optimizer_state"])
    return checkpoint["config"]`,
    testCases: "Verify that model weights loaded from checkpoint match saved weights perfectly."
  }
];

export const theoryQuestions = [
  {
    id: "theory-01",
    question: "What is the fundamental difference between training a model from scratch, fine-tuning, and inference?",
    category: "Core Conceptual Foundations",
    answer: "Training from scratch initializes all parameters randomly (e.g. W ~ N(0, 0.02)) and learns statistical grammar, vocabulary embeddings, and semantics over raw corpora using next-token cross-entropy. Fine-tuning begins from a pre-trained foundation model and adapts weights or low-rank adapters (LoRA) on curated domain datasets. Inference runs frozen model parameters in forward-only mode to generate text autoregressively without gradient updates."
  },
  {
    id: "theory-02",
    question: "Why is a decoder-only architecture chosen for GPT models rather than an encoder-only or encoder-decoder architecture?",
    category: "Architecture",
    answer: "Decoder-only transformers utilize a causal lower-triangular attention mask, aligning perfectly with the autoregressive next-token prediction objective. During training, all sequence positions compute next-token predictions in parallel. During inference, token generation is unified into a recursive prompt continuation. This eliminates cross-attention complexity, optimizes KV caching, and allows the model to perform arbitrary tasks via in-context prompting."
  },
  {
    id: "theory-03",
    question: "Why does the attention score calculation divide the query-key dot product by sqrt(d_k)?",
    category: "Attention Mathematics",
    answer: "If components of q and k are independent random variables with zero mean and unit variance, their dot product has a variance of d_k. For high embedding dimensions (e.g. d_k = 64 or 128), large dot products drive the softmax function into extreme saturation regions where the gradients become infinitesimally small (vanishing gradients). Dividing by sqrt(d_k) scales the variance back to 1.0, preserving healthy gradient flow during backpropagation."
  },
  {
    id: "theory-04",
    question: "How does the causal attention mask prevent future-token leakage mathematically?",
    category: "Attention Mathematics",
    answer: "A lower-triangular binary mask sets all positions where j > i (future tokens) to -infinity before the softmax operation. Because exp(-inf) = 0, the resulting attention weights for any future position j > i are strictly 0.00%. Consequently, the weighted value sum for token i receives zero contribution from future representations."
  },
  {
    id: "theory-05",
    question: "What is the role of multi-head attention compared to single-head attention?",
    category: "Attention Architecture",
    answer: "Instead of computing a single attention distribution over dimension C, Multi-Head Attention splits representations into h subspaces of dimension d_head = C / h. This allows the model to attend simultaneously to information from different representation subspaces at different sequence positions (e.g. one head tracks syntax dependencies, another tracks matched parentheses, and a third tracks distant entity references)."
  },
  {
    id: "theory-06",
    question: "Why do transformers need positional encodings if token embeddings already exist?",
    category: "Embeddings",
    answer: "Self-attention is fundamentally permutation invariant: computing the dot product between two sets of query and key vectors yields identical attention scores regardless of the order in which tokens appear in the sequence. Without positional encodings, 'dog bites man' and 'man bites dog' would produce identical internal representations."
  },
  {
    id: "theory-07",
    question: "What is weight tying, and why is it beneficial in language models?",
    category: "Parameter Engineering",
    answer: "Weight tying shares the parameter matrix between the input token embedding layer and the output linear language head (lm_head.weight = token_embedding.weight). It saves V x C parameters (which is substantial when vocabulary size is large), enforces geometric duality between token encoding and logit projection, and provides natural regularization against overfitting on rare tokens."
  },
  {
    id: "theory-08",
    question: "What is the difference between Pre-LayerNorm and Post-LayerNorm in transformer blocks?",
    category: "Normalization",
    answer: "Post-LN applies layer normalization after the residual addition: x = LN(x + SubLayer(x)). Pre-LN applies normalization before the sublayer and keeps the residual connection clean: x = x + SubLayer(LN(x)). Pre-LN creates an uninterrupted gradient highway through the residual stream, stabilizing training and eliminating the need for strict learning rate warmup heuristics."
  },
  {
    id: "theory-09",
    question: "Why is GELU preferred over ReLU in modern language model feed-forward networks?",
    category: "Activations",
    answer: "ReLU abruptly zeroes out all negative activations, leading to 'dead neurons' where gradients permanently vanish. GELU (Gaussian Error Linear Unit) provides a smooth, probabilistic non-linearity that allows small negative gradients to flow, enhancing optimization dynamics in deep transformer architectures."
  },
  {
    id: "theory-10",
    question: "How does the cross-entropy loss function evaluate autoregressive language model predictions?",
    category: "Optimization",
    answer: "Cross-entropy loss computes the negative log-likelihood of the ground-truth target token given the model's predicted probability distribution: Loss = -log(P(y_target)). If the model assigns 100% probability to the true next token, loss is 0; as predicted probability drops toward 0, loss approaches infinity."
  },
  {
    id: "theory-11",
    question: "What is Perplexity (PPL), and how is it derived from cross-entropy loss?",
    category: "Evaluation",
    answer: "Perplexity is the exponential of the cross-entropy loss: PPL = exp(Loss). It represents the weighted equivalent branching factor: a model with PPL = 8.0 is as uncertain at each step as a uniform choice among 8 equally plausible candidate tokens. Lower perplexity indicates superior predictive capability on the evaluation corpus."
  },
  {
    id: "theory-12",
    question: "Why must character-level perplexity not be directly compared with BPE subword perplexity?",
    category: "Evaluation",
    answer: "Perplexity measures uncertainty per prediction step. In a character-level model, each step predicts a single character (e.g. 4-5 steps per word), whereas a subword model predicts whole morphemes or words in a single step. Because the base prediction units differ, numerical PPL values cannot be directly compared across different tokenizers."
  },
  {
    id: "theory-13",
    question: "What causes gradient explosion during transformer training, and how does gradient clipping solve it?",
    category: "Optimization",
    answer: "Deep recurrent matrix multiplications and sudden high-loss training batches can produce exceptionally large gradient vectors that destabilize parameter weights during optimizer updates. Gradient clipping scales down the entire gradient vector if its L2 norm exceeds a maximum threshold (e.g. max_norm = 1.0), preserving update direction while bounding magnitude."
  },
  {
    id: "theory-14",
    question: "How does Temperature scaling affect next-token probability distributions?",
    category: "Sampling & Decoding",
    answer: "Temperature divides logits before softmax: P(x_i) = softmax(z_i / T). Low temperatures (T < 1.0) amplify differences between logits, concentrating probability onto the top token and producing deterministic, conservative text. High temperatures (T > 1.0) flatten the distribution, increasing diversity and creative exploration at the cost of coherence."
  },
  {
    id: "theory-15",
    question: "How does Top-P (Nucleus) sampling differ from Top-K sampling?",
    category: "Sampling & Decoding",
    answer: "Top-K restricts candidate tokens to a fixed number K regardless of model certainty. When the model is very confident, Top-K may still include nonsensical candidates; when uncertain, K may be too restrictive. Nucleus (Top-P) dynamically selects the smallest variable set of tokens whose cumulative probability exceeds p (e.g. 0.90), expanding the candidate pool during uncertainty and narrowing it during high confidence."
  },
  {
    id: "theory-16",
    question: "What is Byte Pair Encoding (BPE), and how does it balance vocabulary size with sequence length?",
    category: "Tokenization",
    answer: "BPE is a subword tokenization algorithm that iteratively merges the most frequent adjacent byte or character pairs in a corpus into new tokens. It avoids the out-of-vocabulary problem of word-level tokenizers (by falling back to characters) while avoiding the excessively long context sequences of pure character tokenizers."
  },
  {
    id: "theory-17",
    question: "Why should training and validation datasets be split at the document level rather than mid-sequence?",
    category: "Dataset Engineering",
    answer: "Splitting a continuous token sequence randomly or by percentage can slice documents mid-sentence or mid-function. This leads to boundary data leakage where the validation set evaluates prefixes already seen in the training split. Document-level splitting ensures validation perplexity reflects true out-of-sample generalization."
  },
  {
    id: "theory-18",
    question: "What is catastrophic forgetting, and does it apply to training from scratch?",
    category: "Training Dynamics",
    answer: "Catastrophic forgetting occurs when a pre-trained model is fine-tuned on a narrow dataset and overwrites its previously acquired general knowledge. It does not apply to training from scratch, because the model begins with random parameters and only acquires representations from the provided training corpus."
  },
  {
    id: "theory-19",
    question: "What is Key-Value (KV) Caching, and why is it essential for production transformer inference?",
    category: "Inference Optimization",
    answer: "During autoregressive text generation, each step generates a single new token. In naive inference, the entire historical context must be processed through all transformer layers, resulting in O(N^2) total computation. KV Caching stores previously computed Key and Value matrices in GPU memory, requiring the model to compute Q, K, V only for the newest token, reducing incremental step latency to O(1) and overall complexity to O(N)."
  },
  {
    id: "theory-20",
    question: "What is FlashAttention, and how does it optimize transformer attention memory access?",
    category: "Hardware & Modern SOTA",
    answer: "Standard attention computes and materializes the intermediate T x T attention score matrix in high-bandwidth memory (HBM). FlashAttention tiles the Q, K, V matrices into SRAM blocks and computes attention incrementally using online softmax rescaling. This eliminates intermediate HBM read/write roundtrips, reducing memory footprint and accelerating throughput."
  },
  {
    id: "theory-21",
    question: "Why do we initialize neural network linear weights using normal distributions with std = 0.02?",
    category: "Initialization",
    answer: "Initializing weights too large causes activations to explode and saturates non-linearities; initializing weights too small causes activations to vanish across deep blocks. A standard deviation of std = 0.02 (approximately 1 / sqrt(embedding_dim)) maintains activation variance near 1.0 throughout transformer layers at step 0."
  },
  {
    id: "theory-22",
    question: "What happens when training loss continues decreasing while validation loss begins increasing?",
    category: "Training Diagnostics",
    answer: "This is the classic hallmark of overfitting (memorization). The model is memorizing specific noise and exact sequences in the training set rather than learning generalized language structures. Remediation includes early stopping, increasing dropout, applying weight decay, or expanding training corpus volume."
  },
  {
    id: "theory-23",
    question: "How does Rotary Position Embedding (RoPE) represent relative token positions?",
    category: "Modern Embeddings",
    answer: "RoPE encodes position by multiplying Query and Key vectors by orthogonal 2D rotation matrices whose angles are proportional to position indices. The resulting dot product q_m · k_n depends strictly on the relative distance m - n, providing superior length extrapolation compared to static absolute learned embeddings."
  },
  {
    id: "theory-24",
    question: "What is SwiGLU, and why is it used in models like Llama 3 instead of standard GELU FFNs?",
    category: "Modern Architecture",
    answer: "SwiGLU is a gated linear unit variant that computes FFN(x) = (xW_gate * Swish(xW_1)) W_2. By introducing an element-wise multiplicative gating branch, it provides richer non-linear capacity than single-layer activations, consistently achieving lower perplexity at equal parameter budgets."
  },
  {
    id: "theory-25",
    question: "What is RMSNorm, and why is it faster than standard LayerNorm?",
    category: "Normalization",
    answer: "Standard LayerNorm calculates both the mean and variance across the feature dimension to center and rescale activations. RMSNorm assumes mean activation is zero and normalizes strictly by the Root Mean Square of activations, eliminating the mean computation step and reducing GPU kernel memory traffic by ~10-20%."
  },
  {
    id: "theory-26",
    question: "Why can't an SLM trained on raw Java documentation reliably follow complex interview instructions without fine-tuning?",
    category: "Engineering Trade-offs",
    answer: "Pre-training on raw text optimizes next-token continuation of documentation style. The model learns syntax and technical vocabulary, but has not been conditioned on prompt-response conversational patterns, evaluation rubrics, or multi-turn dialogues. Converting a raw SLM into an instruction-following assistant requires supervised instruction tuning (SFT) or DPO."
  },
  {
    id: "theory-27",
    question: "What is teacher forcing, and why is it used during transformer training?",
    category: "Training Mechanics",
    answer: "Teacher forcing provides the ground-truth sequence tokens as context at every position during training rather than feeding the model's own prior predictions. This prevents compounding early-token errors from destabilizing later training steps and allows parallel cross-entropy calculation across all sequence tokens simultaneously."
  },
  {
    id: "theory-28",
    question: "How does batch size affect language model training dynamics and memory consumption?",
    category: "Hardware & Training",
    answer: "Larger batch sizes provide more accurate gradient estimates, stabilizing optimizer steps and maximizing GPU parallel tensor core utilization. However, memory consumption scales linearly with batch size (B x T x C). If GPU VRAM is constrained, gradient accumulation can simulate large effective batches across smaller micro-batches."
  },
  {
    id: "theory-29",
    question: "Why does greedy decoding frequently lead to repetitive token loops during generation?",
    category: "Sampling & Decoding",
    answer: "Greedy search strictly picks the argmax token at every step. In small models with limited context capacity, selecting a slightly probable token can push the context into a self-reinforcing high-probability loop where the identical phrase is generated repeatedly."
  },
  {
    id: "theory-30",
    question: "What is the computational complexity of the self-attention mechanism with respect to sequence length T?",
    category: "Complexity Analysis",
    answer: "Computing the QK^T matrix multiplication requires multiplying (T x d_k) by (d_k x T), which involves O(T^2 · d_k) operations. Computing the weighted value sum with V requires O(T^2 · d_v). Hence, standard self-attention has quadratic O(T^2) computational and memory complexity with respect to sequence context length."
  }
];

export const quizQuestions = [
  {
    id: "quiz-01",
    question: "What is the primary difference between training a model from scratch and fine-tuning an existing model?",
    options: [
      "Training from scratch initializes weights randomly and learns from raw data; fine-tuning starts from pre-trained weights",
      "Training from scratch does not require a loss function",
      "Fine-tuning always trains 100% of model parameters",
      "Training from scratch only works on computer vision models"
    ],
    correctIndex: 0,
    explanation: "Training from scratch starts from randomly initialized parameters and learns all linguistic features from raw text; fine-tuning adapts pre-trained weights."
  },
  {
    id: "quiz-02",
    question: "What is the primary operational objective of an autoregressive GPT model?",
    options: [
      "Classifying input text into static categories",
      "Predicting the probability distribution of the next token conditioned on preceding tokens",
      "Translating audio waveforms into images",
      "Compressing database indices"
    ],
    correctIndex: 1,
    explanation: "Autoregressive GPT models predict the next token in a sequence given the previous context tokens: P(x_t | x_{<t})."
  },
  {
    id: "quiz-03",
    question: "Why do transformers require positional encodings?",
    options: [
      "To increase the vocabulary size",
      "Because self-attention is permutation invariant and has no inherent sense of token order",
      "To normalize gradient updates in the optimizer",
      "To convert integers into float32"
    ],
    correctIndex: 1,
    explanation: "Without positional encodings, self-attention treats sequences as unordered bags of words because pairwise dot products are order-independent."
  },
  {
    id: "quiz-04",
    question: "What does the causal attention mask prevent during transformer training?",
    options: [
      "Preventing attention weights from becoming negative",
      "Preventing current token representations from attending to future token positions",
      "Preventing the model from calculating cross-entropy loss",
      "Preventing GPU memory leaks"
    ],
    correctIndex: 1,
    explanation: "The causal mask sets future position scores to -infinity, ensuring token i cannot attend to any token j > i during next-token prediction."
  },
  {
    id: "quiz-05",
    question: "Why is the query-key dot product QK^T divided by sqrt(d_k)?",
    options: [
      "To convert values into integers",
      "To prevent dot products from growing excessively large and saturating the softmax into near-zero gradients",
      "To ensure the matrix is symmetric",
      "To bypass backpropagation"
    ],
    correctIndex: 1,
    explanation: "Scaling by 1/sqrt(d_k) normalizes the variance of the dot products to 1.0, preventing softmax saturation and vanishing gradients."
  },
  {
    id: "quiz-06",
    question: "What is the purpose of weight tying between token embeddings and the output language head?",
    options: [
      "It ties the learning rate to the batch size",
      "It shares weight tensors between input token embedding and output projection, reducing parameter count and regularizing weights",
      "It fuses the feed-forward network with the attention mechanism",
      "It prevents tokenizer out-of-vocabulary errors"
    ],
    correctIndex: 1,
    explanation: "Weight tying shares parameters between token_embedding and lm_head, saving V x C parameters and regularizing representations."
  },
  {
    id: "quiz-07",
    question: "What does Perplexity (PPL) measure in an autoregressive language model?",
    options: [
      "The total GPU memory allocated in gigabytes",
      "The number of floating-point operations executed per second",
      "The exponential of cross-entropy loss, reflecting the model's average prediction uncertainty",
      "The exact number of unique characters in the vocabulary"
    ],
    correctIndex: 2,
    explanation: "Perplexity PPL = exp(loss) measures the effective branching factor / uncertainty when predicting the next token."
  },
  {
    id: "quiz-08",
    question: "How does setting a lower temperature (e.g. T = 0.2) affect text generation?",
    options: [
      "It increases generation speed tenfold",
      "It sharpens the probability distribution, making high-probability tokens more dominant and text more deterministic",
      "It flattens the distribution and makes text completely random",
      "It disables the causal attention mask"
    ],
    correctIndex: 1,
    explanation: "Lower temperatures amplify logit differences, concentrating probabilities onto the most likely tokens and producing conservative outputs."
  },
  {
    id: "quiz-09",
    question: "How does Top-P (Nucleus) sampling select candidate tokens?",
    options: [
      "By strictly choosing the single most likely token",
      "By dynamically selecting the smallest set of top tokens whose cumulative probability reaches threshold p",
      "By selecting a static number of P tokens uniformly",
      "By filtering tokens that contain punctuation"
    ],
    correctIndex: 1,
    explanation: "Nucleus sampling sorts tokens by probability and keeps the top subset whose cumulative sum meets threshold p (e.g. 0.90)."
  },
  {
    id: "quiz-10",
    question: "What is the primary benefit of Pre-LayerNorm over Post-LayerNorm in transformer blocks?",
    options: [
      "It eliminates the need for token embeddings",
      "It keeps the residual identity stream clean and unnormalized, enabling stable gradient flow without strict warmups",
      "It reduces parameter counts by 50%",
      "It replaces multi-head attention with convolution"
    ],
    correctIndex: 1,
    explanation: "Pre-LN normalizes inputs inside sublayer branches, keeping the residual highway direct and stabilizing deep model training."
  },
  {
    id: "quiz-11",
    question: "Why is gradient clipping with max_norm=1.0 essential during transformer training?",
    options: [
      "It prevents gradients from growing too small",
      "It prevents exploding gradient updates from destroying learned model parameters during high-loss batches",
      "It converts 32-bit floats into 8-bit integers",
      "It automatically tunes the AdamW learning rate"
    ],
    correctIndex: 1,
    explanation: "Gradient clipping rescales gradient norms to max_norm when they exceed the limit, preventing explosive updates and NaN losses."
  },
  {
    id: "quiz-12",
    question: "What is the computational complexity of standard self-attention relative to sequence length T?",
    options: [
      "O(1) constant time",
      "O(T) linear time",
      "O(T^2) quadratic time",
      "O(2^T) exponential time"
    ],
    correctIndex: 2,
    explanation: "Pairwise query-key dot products require computing a T x T score matrix, resulting in O(T^2) computational and memory complexity."
  }
];

export const competencies = [
  {
    id: "comp-01",
    category: "Architectural Foundations",
    title: "Small Language Model (SLM) Hierarchy",
    description: "Explain the parameter boundaries, computational costs, and deployment trade-offs between Tiny GPT (0.1M), SLMs (1M-3B), and Frontier LLMs (70B+)."
  },
  {
    id: "comp-02",
    category: "Architectural Foundations",
    title: "Autoregressive Decoder-Only Dynamics",
    description: "Describe how causal masking enables parallel next-token training and recursive autoregressive inference."
  },
  {
    id: "comp-03",
    category: "Tokenization Engineering",
    title: "Invertible Tokenizer Construction",
    description: "Implement a character or subword tokenizer in pure Python guaranteeing lossless encode/decode reconstruction."
  },
  {
    id: "comp-04",
    category: "Tokenization Engineering",
    title: "Byte Pair Encoding (BPE) Mechanics",
    description: "Trace iterative bigram frequency counting, pair merging, and vocabulary construction algorithms."
  },
  {
    id: "comp-05",
    category: "Dataset Engineering",
    title: "Shifted Target Batch Generation",
    description: "Construct aligned (B, T) input and target tensors where target y is shifted by +1 relative to input x."
  },
  {
    id: "comp-06",
    category: "Dataset Engineering",
    title: "Document-Stratified Partitioning",
    description: "Partition corpora at document boundaries to eliminate cross-sequence data leakage in validation metrics."
  },
  {
    id: "comp-07",
    category: "Embeddings & Geometry",
    title: "Continuous Vector Space Mapping",
    description: "Analyze how continuous embedding lookup tables map categorical token IDs to learned continuous manifolds."
  },
  {
    id: "comp-08",
    category: "Embeddings & Geometry",
    title: "Learnable Positional Encodings",
    description: "Implement additive learnable positional embeddings and explain why permutation invariance demands positional information."
  },
  {
    id: "comp-09",
    category: "Embeddings & Geometry",
    title: "Rotary Position Embeddings (RoPE)",
    description: "Explain 2D rotation transformations and relative distance representations in modern transformer architectures."
  },
  {
    id: "comp-10",
    category: "Attention Mechanics",
    title: "Query-Key-Value Linear Projections",
    description: "Derive linear projections Q = XW_Q, K = XW_K, V = XW_V and explain the information retrieval analogy."
  },
  {
    id: "comp-11",
    category: "Attention Mechanics",
    title: "Scaled Dot-Product Mathematical Derivation",
    description: "Prove why dividing QK^T by sqrt(d_k) normalizes variance to 1.0 and prevents softmax gradient saturation."
  },
  {
    id: "comp-12",
    category: "Attention Mechanics",
    title: "Causal Lower-Triangular Masking",
    description: "Construct upper-triangular -infinity masks that enforce zero probability for future tokens in attention softmax."
  },
  {
    id: "comp-13",
    category: "Attention Mechanics",
    title: "Multi-Head Attention Tensor Reshaping",
    description: "Implement tensor transformations (B, T, C) -> (B, h, T, d_head) and recombination via contiguous view operations."
  },
  {
    id: "comp-14",
    category: "Neural Layers & Stability",
    title: "GELU Activation Mechanics",
    description: "Contrast smooth Gaussian Error Linear Units with ReLU and explain dead-neuron mitigation."
  },
  {
    id: "comp-15",
    category: "Neural Layers & Stability",
    title: "Pre-LayerNorm Residual Highways",
    description: "Implement Pre-LN transformer blocks preserving uninterrupted additive residual gradients."
  },
  {
    id: "comp-16",
    category: "Parameter Engineering",
    title: "Analytical Parameter Accounting",
    description: "Derive exact parameter equations for embedding, attention (4C^2), FFN (8C^2), and normalization layers."
  },
  {
    id: "comp-17",
    category: "Parameter Engineering",
    title: "Weight Tying Implementation",
    description: "Link token embedding weights to output projection heads in PyTorch, analyzing memory and regularization benefits."
  },
  {
    id: "comp-18",
    category: "Training Engineering",
    title: "Cross-Entropy Loss Optimization",
    description: "Calculate flattened cross-entropy loss over B x T tokens and configure AdamW with decoupled weight decay."
  },
  {
    id: "comp-19",
    category: "Training Engineering",
    title: "Gradient Clipping & Stability",
    description: "Apply torch.nn.utils.clip_grad_norm_ to bound gradient norms and prevent training destabilization."
  },
  {
    id: "comp-20",
    category: "Evaluation & Diagnostics",
    title: "Perplexity (PPL) Computation",
    description: "Calculate and interpret perplexity PPL = exp(loss) across training and validation splits."
  },
  {
    id: "comp-21",
    category: "Evaluation & Diagnostics",
    title: "Overfitting Detection & Mitigation",
    description: "Identify divergence between train and validation loss curves and apply early stopping or dropout."
  },
  {
    id: "comp-22",
    category: "Decoding & Sampling",
    title: "Temperature Scaling Control",
    description: "Implement logit division by temperature T and analyze its impact on entropy and determinism."
  },
  {
    id: "comp-23",
    category: "Decoding & Sampling",
    title: "Top-K & Nucleus (Top-P) Filtering",
    description: "Write PyTorch logit masking routines for static Top-K and dynamic cumulative Top-P filtering."
  },
  {
    id: "comp-24",
    category: "Inference Systems",
    title: "Key-Value (KV) Caching Concepts",
    description: "Explain how caching historical K and V tensors reduces autoregressive inference complexity from O(N^2) to O(N)."
  },
  {
    id: "comp-25",
    category: "Modern Optimizations",
    title: "FlashAttention & Memory Tiling",
    description: "Describe how SRAM tiling and online softmax avoid HBM roundtrips for O(T) memory attention."
  }
];

export const recommendedResources = [
  {
    id: "res-01",
    title: "Attention Is All You Need (Vaswani et al., 2017)",
    type: "Foundational Paper",
    url: "https://arxiv.org/abs/1706.03762",
    description: "The seminal paper introducing the Transformer architecture, multi-head self-attention, and scaled dot-product formulations."
  },
  {
    id: "res-02",
    title: "nanoGPT (Andrej Karpathy)",
    type: "Open-Source Repository",
    url: "https://github.com/karpathy/nanoGPT",
    description: "The simplest, fastest repository for training and fine-tuning medium-sized GPTs in pure PyTorch."
  },
  {
    id: "res-03",
    title: "makemore (Andrej Karpathy)",
    type: "Educational Codebase",
    url: "https://github.com/karpathy/makemore",
    description: "An autoregressive character-level language model generator covering bigrams, MLPs, CNNs, RNNs, and Transformers."
  },
  {
    id: "res-04",
    title: "Language Models are Few-Shot Learners (Brown et al., 2020)",
    type: "Research Paper",
    url: "https://arxiv.org/abs/2005.14165",
    description: "The paper detailing GPT-3 architecture, scaling laws, in-context learning, and massive autoregressive pre-training."
  },
  {
    id: "res-05",
    title: "Hugging Face Tokenizers Documentation",
    type: "Documentation & Tools",
    url: "https://huggingface.co/docs/tokenizers/index",
    description: "Comprehensive guide to fast Byte Pair Encoding (BPE), WordPiece, and Unigram tokenization implementations."
  },
  {
    id: "res-06",
    title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness (Dao et al., 2022)",
    type: "Systems Paper",
    url: "https://arxiv.org/abs/2205.14135",
    description: "Landmark paper on optimizing transformer attention on GPU SRAM tiles to avoid memory bandwidth bottlenecks."
  },
  {
    id: "res-07",
    title: "RoFormer: Enhanced Transformer with Rotary Position Embedding (Su et al., 2021)",
    type: "Research Paper",
    url: "https://arxiv.org/abs/2104.09864",
    description: "The theoretical derivation of Rotary Position Embedding (RoPE) used in modern models like Llama 3 and Qwen."
  },
  {
    id: "res-08",
    title: "The Illustrated Transformer & GPT-2 (Jay Alammar)",
    type: "Visual Guide",
    url: "https://jalammar.github.io/illustrated-gpt2/",
    description: "Intuitive visual walkthrough of decoder-only transformer operations, causal masking, and generation decoders."
  }
];
