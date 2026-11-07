// Module 17: LLM Inference & Model Serving Engineering Curriculum Data
// Generated automatically for PrepSpaces AI Engineering & Generative AI track.

export const overview = {
  "moduleNumber": "17",
  "title": "LLM Inference & Model Serving Engineering",
  "recommendedDuration": "26–30 hours",
  "difficulty": "Advanced / Systems Engineering",
  "primaryLanguage": "Python & TypeScript / Node.js",
  "mainLibraries": "vLLM, Ollama, Hugging Face Transformers, PyTorch, Accelerate, Bitsandbytes, Triton, FlashAttention",
  "supportingTools": "CUDA 12+, Docker, Server-Sent Events (SSE), WebSockets, GGUF, AWQ, GPTQ, Prometheus & Grafana",
  "prerequisites": "Module 06 (Transformers from Scratch), Module 07 (Large Language Models), Module 10 (Vector Databases), Module 11 (RAG Engineering)",
  "learningApproach": "GPU Systems Architecture + PagedAttention Memory Management + Continuous Batching Schedulers + Low-Bit Quantization + Production Model Gateways",
  "finalOutcome": "Architect, build, optimize, and deploy an enterprise-grade LLM inference and model serving platform. Master the physics of GPU memory bandwidth, compute-bound prefill vs memory-bound decode, KV cache optimization ($2LBSH_{KV}D_H$), PagedAttention, continuous batching in vLLM, local runtime serving with Ollama, low-bit quantization (AWQ/GPTQ/GGUF), and real-time streaming SSE endpoints.",
  "learningObjectives": [
    "Differentiate training vs inference: static weights, memory profiles (KV cache and activations vs gradients and optimizer states), and autoregressive generation loops.",
    "Master the two core inference phases: Parallel Prefill (compute-bound, TTFT) vs Sequential Autoregressive Decode (memory-bandwidth bound, TPOT).",
    "Mathematically calculate and profile KV cache memory consumption across sequence lengths, batch sizes, and attention architectures (MHA vs GQA vs MQA).",
    "Understand PagedAttention in vLLM: non-contiguous block tables, virtual-to-physical page mapping, eliminating internal/external memory fragmentation, and prefix caching.",
    "Formulate and implement batching strategies: Static batching vs Dynamic batching vs Continuous batching (iteration-level scheduling).",
    "Analyze low-bit quantization mechanics: FP32 to FP16/BF16, INT8, INT4, GPTQ, AWQ, bitsandbytes NF4, and GGUF file formats.",
    "Deploy and configure local runtime assistants using Ollama, writing customized Modelfiles and integrating REST APIs.",
    "Serve production OpenAI-compatible endpoints with vLLM, tuning GPU memory utilization, max sequence lengths, and tensor parallelism.",
    "Engineer real-time token streaming using Server-Sent Events (SSE) and WebSockets with client-side backpressure and error recovery.",
    "Implement production observability and capacity planning: tracking p50/p95/p99 latency, TTFT, TPOT, tokens/second, and GPU VRAM pressure."
  ]
};

export const curriculumUnits = [
  {
    "id": "unit-01",
    "number": "01",
    "title": "Understanding LLM Inference & Autoregressive Generation",
    "subtitle": "From Tokenization to Logits, Softmax, and Next-Token Sampling",
    "summary": "Establish the fundamental mechanics of transformer inference. Contrast training vs inference, and trace how text prompts progress through tokenization, vector embeddings, transformer forward passes, logits calculation, and autoregressive decoding.",
    "topics": [
      {
        "id": "sec-01-01",
        "title": "Training versus Inference: The Systems Engineering Divide",
        "content": "A Large Language Model undergoes two distinct operational phases in its lifecycle:\n1. **Training (and Fine-Tuning)**: The model learns statistical patterns from massive corpora by continuously updating its weights via forward passes, backward error propagation, loss calculations, and optimizer state updates (AdamW stores 8 to 16 bytes per parameter of optimizer state). Hardware demands and memory footprints are immense.\n2. **Inference**: The model weights are strictly frozen. The model evaluates user prompts and generates completions through forward passes alone. Memory consumption is dictated by static weights, activation tensors, and dynamic Key-Value (KV) caches.\n\n| Dimension | Model Training | Production Inference |\n| :--- | :--- | :--- |\n| **Primary Objective** | Learn patterns and adjust parameters | Generate token predictions from input |\n| **Weight State** | Continuously updated | Strictly frozen (read-only) |\n| **Computation** | Forward + Backward passes + Optimizer step | Forward passes only (`torch.inference_mode`) |\n| **VRAM Footprint** | Weights + Gradients + Optimizer States + Activations | Weights + KV Cache + Transient Activations |\n| **Hardware Bottleneck** | Raw compute FLOPs (Tensor Cores) | Memory Bandwidth (HBM) during autoregressive decode |\n| **Latency Target** | Hours, days, or weeks per run | Sub-second Time to First Token (TTFT < 500ms) |"
      },
      {
        "id": "sec-01-02",
        "title": "The 5-Step Autoregressive Generation Pipeline",
        "content": "When a user submits a prompt (*\"Explain Java inheritance\"*), the inference engine executes five continuous operations:\n\n1. **Tokenization**: The input text is divided into token chunks by a byte-pair encoding (BPE) or WordPiece tokenizer, mapping strings to discrete integer token IDs:\n$$\\text{Input Text} \\to [14231, 845, 12345, 987, 13]$$\n2. **Embedding Lookup**: Each token ID indexes an embedding table $\\mathbf{E} \\in \\mathbb{R}^{V \\times d_{\\text{model}}}$, converting IDs into $d$-dimensional dense vectors.\n3. **Transformer Forward Stack**: Embeddings pass through $L$ decoder layers containing Multi-Head/Grouped-Query Attention, Feed-Forward Networks (SwiGLU/GeLU), RMSNorm/LayerNorm, and residual connections.\n4. **Logits Computation**: The final hidden state vector $\\mathbf{h}_T \\in \\mathbb{R}^{d_{\\text{model}}}$ is projected by the language model head (LM Head) into an unnormalized score vector over the entire vocabulary $V$:\n$$\\mathbf{z} = \\mathbf{W}_{\\text{vocab}} \\mathbf{h}_T \\in \\mathbb{R}^{|V|}$$\n5. **Softmax & Sampling**: Logits are mapped to normalized token probabilities:\n$$P(x_i) = \\frac{e^{z_i / T}}{\\sum_{j=1}^{|V|} e^{z_j / T}}$$\nwhere $T$ is temperature. The chosen token is appended to the context, and the process repeats until an End-of-Sequence (`[EOS]`) token is emitted or max length is reached."
      },
      {
        "id": "sec-01-03",
        "title": "Why Is LLM Inference Computationally Expensive?",
        "content": "Unlike traditional web services where a database query completes in a single round-trip, an LLM generating 500 output tokens requires approximately **500 sequential transformer forward passes**.\n\nAt each decoding step:\n- The entire model weight tensor (e.g., 14 GB for a 7B FP16 model) must be read from High Bandwidth Memory (HBM) into GPU SRAM/registers to compute a single new token.\n- If memory bandwidth is 1000 GB/s, reading 14 GB takes $14 \\text{ ms}$ minimum per token, yielding a theoretical ceiling of $\\sim 70 \\text{ tokens/sec}$ for batch size 1.\n- Serving thousands of concurrent users requires sophisticated memory management and batching engines to maximize hardware utilization."
      }
    ]
  },
  {
    "id": "unit-02",
    "number": "02",
    "title": "The Two Inference Phases: Prefill vs Decode",
    "subtitle": "Compute-Bound Parallelism vs Memory-Bandwidth-Bound Sequential Generation",
    "summary": "Dissect the two phases of LLM generation. Contrast the parallel, compute-bound prefill phase with the sequential, memory-bandwidth-bound decode phase, and derive key performance metrics (TTFT, TPOT, and End-to-End Latency).",
    "topics": [
      {
        "id": "sec-02-01",
        "title": "Phase 1: The Prefill (Prompt Processing) Phase",
        "content": "During prefill, the inference engine processes the entire user prompt simultaneously:\n- **Parallel Execution**: Because all prompt tokens are known in advance, attention scores across all positions are calculated in parallel via GEMM (General Matrix Multiply) operations.\n- **KV Cache Initialization**: The Key and Value vectors for every prompt token across all transformer layers are computed and stored in GPU memory.\n- **Computational Nature**: Prefill is **compute-bound** (FLOPs bound). Tensor cores achieve near-peak utilization because large matrix multiplications saturate GPU compute capacity.\n- **Performance Metric**: Governs **Time to First Token (TTFT)**:\n$$\\text{TTFT} = T_{\\text{queue}} + T_{\\text{prefill}} + T_{\\text{first decode}}$$"
      },
      {
        "id": "sec-02-02",
        "title": "Phase 2: The Decode (Token Generation) Phase",
        "content": "Once prefill concludes, the model generates output tokens one at a time:\n- **Autoregressive Dependency**: Token $t+1$ cannot be calculated until token $t$ has been sampled and projected.\n- **Memory-Bandwidth Bound**: At each step, the newly generated token produces one Query vector. This Query must attend to all previous Keys and Values stored in the KV cache. The GPU executes GEMV (General Matrix-Vector) operations, reading massive weight matrices and cache blocks while performing very few arithmetic operations per byte loaded.\n- **Arithmetic Intensity**: Arithmetic intensity (FLOPs / byte) is extremely low during decode. GPU compute cores sit idle while waiting for memory controllers to stream weights from HBM.\n- **Performance Metric**: Governs **Time Per Output Token (TPOT)**:\n$$\\text{TPOT} = \\frac{T_{\\text{generation}}}{N_{\\text{output tokens}} - 1}$$"
      },
      {
        "id": "sec-02-03",
        "title": "End-to-End Latency Formulation & System Trade-Offs",
        "content": "Total request completion latency combines both phases:\n$$T_{\\text{total}} \\approx \\text{TTFT} + (N_{\\text{output}} - 1) \\times \\text{TPOT}$$\n\n*Numerical Example*:\nSuppose a user submits a 1000-token prompt requesting a 100-token answer:\n- TTFT $= 450 \\text{ ms}$ (Prompt prefill + queuing)\n- TPOT $= 35 \\text{ ms/token}$ (Decode generation rate $\\approx 28.5 \\text{ tokens/sec}$)\n$$T_{\\text{total}} = 450 + (99 \\times 35) = 450 + 3465 = 3915 \\text{ ms} \\approx 3.92 \\text{ seconds}$$\n\nOptimizing TTFT (e.g., prefix caching, prompt compression, FlashAttention) requires different architectural strategies than optimizing TPOT (e.g., quantization, continuous batching, speculative decoding)."
      }
    ]
  },
  {
    "id": "unit-03",
    "number": "03",
    "title": "Production Model Serving Architecture",
    "subtitle": "Decoupling Frontends, Gateways, Queues, Schedulers, and GPU Workers",
    "summary": "Architect enterprise LLM serving infrastructure. Learn why client-side browser execution fails for foundation models, and design a scalable model gateway with authentication, scheduling queues, and GPU engine isolation.",
    "topics": [
      {
        "id": "sec-03-01",
        "title": "Why Foundation Models Cannot Run in Browser Frontends",
        "content": "Client-side web execution (e.g., WebGPU/Wasm) is viable for micro-models (under 500M parameters), but fails completely for production foundation models:\n1. **VRAM Limitations**: Consumer client devices lack the 16GB–80GB of high-speed unified VRAM required to hold weights and KV caches.\n2. **Intellectual Property Protection**: Delivering raw multi-gigabyte model weights directly to client browsers exposes proprietary fine-tuned weights and configurations.\n3. **Network Overhead**: Downloading 4GB to 14GB of weights on mobile or broadband connections produces unacceptable multi-minute initialization delays.\n4. **Concurrency & Centralized Observability**: Serving from secure server infrastructure enables centralized rate limiting, audit logging, billing, and red-team guardrails."
      },
      {
        "id": "sec-03-02",
        "title": "End-to-End Server-Side Model Gateway Architecture",
        "content": "A resilient production serving topology decouples concerns across five architectural tiers:\n\n$$\\text{Client (React)} \\xrightarrow{\\text{HTTPS / SSE}} \\text{API Gateway} \\xrightarrow{\\text{Auth & Rate Limit}} \\text{Orchestrator} \\xrightarrow{\\text{Queue}} \\text{Serving Engine (vLLM)} \\xrightarrow{\\text{CUDA}} \\text{GPU VRAM}$$\n\n1. **Client Tier**: Manages user interface, renders streaming markdown tokens, and handles connection cancellations.\n2. **API Gateway & Auth**: Verifies JWT sessions, enforces per-tier rate limits (tokens/min), and routes requests to appropriate model endpoints.\n3. **Request Queue & Admission Controller**: Buffers bursts of incoming requests when GPU capacity is saturated, preventing out-of-memory (OOM) crashes.\n4. **Inference Serving Engine (vLLM)**: Manages model weights, continuous batch scheduling, PagedAttention block tables, and token sampling.\n5. **GPU Hardware Tier**: Executes tensor operations across HBM and CUDA tensor cores."
      }
    ]
  },
  {
    "id": "unit-04",
    "number": "04",
    "title": "Hugging Face Ecosystem: Transformers, Hub & Accelerate",
    "subtitle": "Model Loading, Precision Mapping, and Inference Execution",
    "summary": "Master the Hugging Face open-source ecosystem. Explore the Model Hub, load weights with AutoModelForCausalLM and AutoTokenizer, configure device_map='auto', execute torch.inference_mode, and contrast with TGI.",
    "topics": [
      {
        "id": "sec-04-01",
        "title": "The Hugging Face Open-Source Machine Learning Stack",
        "content": "Hugging Face provides the standard software foundation for open-source AI:\n- **Hugging Face Hub**: Centralized repository hosting open weights (Qwen, Llama, Mistral, DeepSeek), tokenizers, and datasets.\n- **Transformers Library**: Core Python library defining standard model architectures (`AutoModelForCausalLM`), config structures, and tokenizer token mapping.\n- **Accelerate**: Library managing multi-GPU distribution, offloading layers between CPU RAM, disk, and VRAM (`device_map=\"auto\"`).\n- **PEFT (Parameter-Efficient Fine-Tuning)**: Loads LoRA/QLoRA adapter weights dynamically on top of frozen base models.\n- **Text Generation Inference (TGI)**: Hugging Face's specialized production serving container featuring continuous batching, FlashAttention, and token streaming."
      },
      {
        "id": "sec-04-02",
        "title": "Running Models with Transformers: Mechanisms & Limitations",
        "content": "A basic PyTorch/Transformers generation pipeline executes as follows:\n\n```python\nimport torch\nfrom transformers import AutoTokenizer, AutoModelForCausalLM\n\nmodel_id = \"Qwen/Qwen2.5-1.5B-Instruct\"\ntokenizer = AutoTokenizer.from_pretrained(model_id)\nmodel = AutoModelForCausalLM.from_pretrained(\n    model_id, \n    torch_dtype=torch.float16, \n    device_map=\"auto\"\n)\n\ninputs = tokenizer(\"Explain Java virtual threads.\", return_tensors=\"pt\").to(model.device)\nwith torch.inference_mode():\n    output_tokens = model.generate(**inputs, max_new_tokens=200, temperature=0.7)\n\nprint(tokenizer.decode(output_tokens[0], skip_special_tokens=True))\n```\n\n*Engineering Limitation*: While standard `model.generate()` is ideal for local testing, research, and offline batch scripts, it operates with naive sequential loops and static memory allocation. It does not support PagedAttention or iteration-level continuous batching, making it unsuitable for multi-tenant concurrent APIs."
      }
    ]
  },
  {
    "id": "unit-05",
    "number": "05",
    "title": "Local Model Execution with Ollama",
    "subtitle": "Desktop Runtimes, Modelfiles, and Local REST Endpoints",
    "summary": "Deploy and manage language models locally using Ollama. Learn how Ollama packages llama.cpp runtimes, configure custom system prompts with Modelfiles, and consume local REST endpoints via curl and Python.",
    "topics": [
      {
        "id": "sec-05-01",
        "title": "How Ollama Simplifies Local AI Engineering",
        "content": "Running an open-weights model historically required installing compatible CUDA toolkits, PyTorch versions, quantization libraries, and custom inference scripts.\n\n**Ollama** packages model weights, tokenizers, execution parameters, and a lightweight C++ inference runtime (based on llama.cpp) into a unified, self-contained binary:\n- **Cross-Platform Acceleration**: Automatically detects Apple Metal (MPS), NVIDIA CUDA, or AMD ROCm, falling back to multi-threaded CPU execution when VRAM is insufficient.\n- **REST API Server**: Runs a background daemon listening on `http://localhost:11434` supporting both native endpoints (`/api/generate`, `/api/chat`) and OpenAI-compatible routes (`/v1/chat/completions`)."
      },
      {
        "id": "sec-05-02",
        "title": "Configuring Custom Personas with Modelfiles",
        "content": "Ollama allows creating customized model variants using a Docker-like `Modelfile`:\n\n```dockerfile\nFROM qwen2.5-coder:1.5b\nPARAMETER temperature 0.7\nPARAMETER top_p 0.9\nPARAMETER num_ctx 4096\n\nSYSTEM \"\"\"\nYou are a Principal Java Technical Interviewer for PrepSpaces.\nConduct rigorous, practical software engineering interviews.\nEvaluate answers against JVM concurrency, memory, and design patterns.\nAlways provide code examples and cite relevant specifications.\n\"\"\"\n```\n\nBuilding and running the customized model:\n```bash\nollama create java-interviewer -f Modelfile\nollama run java-interviewer \"Explain the difference between synchronized and ReentrantLock.\"\n```"
      }
    ]
  },
  {
    "id": "unit-06",
    "number": "06",
    "title": "High-Throughput Serving with vLLM & PagedAttention",
    "subtitle": "Continuous Batching, Memory Block Tables, and Scalable APIs",
    "summary": "Deep dive into the architecture of vLLM. Master PagedAttention, virtual-to-physical KV cache block mapping, internal/external fragmentation elimination, and launching production OpenAI-compatible API servers.",
    "topics": [
      {
        "id": "sec-06-01",
        "title": "The Memory Fragmentation Crisis in Naive Serving",
        "content": "In traditional serving frameworks, memory for a request's KV cache is allocated as a single contiguous tensor sized for the model's maximum context length (e.g., 8192 tokens).\nThis leads to severe memory waste:\n1. **Internal Fragmentation**: If a sequence uses only 500 tokens, the remaining 7692 tokens of allocated contiguous VRAM sit completely empty and cannot be used by other requests.\n2. **External Fragmentation**: Varying request lengths create fragmented gaps in VRAM, causing out-of-memory errors even when substantial total memory remains free.\n3. **Reservation Waste**: The system must over-provision VRAM based on worst-case sequence limits, capping concurrency at 5–10 simultaneous requests on an A100 GPU."
      },
      {
        "id": "sec-06-02",
        "title": "PagedAttention: Applying Virtual Memory to the KV Cache",
        "content": "Kwon et al. (UC Berkeley, 2023) developed **PagedAttention**, applying the operating system concept of virtual memory paging to transformer attention:\n- **Physical Memory Blocks**: GPU VRAM is partitioned into fixed-size physical blocks (e.g., each block holds Keys and Values for 16 tokens).\n- **Logical to Physical Block Table**: A request's logical sequence is divided into logical blocks that map to arbitrary, non-contiguous physical blocks anywhere in VRAM.\n- **On-Demand Allocation**: Physical blocks are allocated dynamically only as new tokens are generated. When a sequence completes, its blocks are immediately returned to the free memory pool.\n- **Memory Waste Reduced to <4%**: Eliminates external fragmentation and confines internal fragmentation to the final block of a sequence, boosting serving throughput by **2x to 4x** on identical GPU hardware."
      },
      {
        "id": "sec-06-03",
        "title": "Deploying and Tuning the vLLM Serving Engine",
        "content": "Launching a high-concurrency vLLM serving cluster:\n\n```bash\nvllm serve Qwen/Qwen2.5-7B-Instruct \\\n  --host 0.0.0.0 \\\n  --port 8000 \\\n  --max-model-len 8192 \\\n  --gpu-memory-utilization 0.90 \\\n  --enable-prefix-caching \\\n  --tensor-parallel-size 1\n```\n\nKey operational parameters:\n- `--gpu-memory-utilization 0.90`: Directs vLLM to reserve $90\\%$ of GPU VRAM. After weights and transient activations are allocated, the entire remaining VRAM is configured as the PagedAttention KV cache pool.\n- `--enable-prefix-caching`: Automatically reuses cached KV blocks across requests sharing identical system prompts or few-shot prefixes, dropping TTFT by up to $80\\%$."
      }
    ]
  },
  {
    "id": "unit-07",
    "number": "07",
    "title": "Quantization Engineering: Compressing Model Memory",
    "subtitle": "FP16, INT8, INT4, GPTQ, AWQ, GGUF, and Modern FP8 Execution",
    "summary": "Formulate the mathematics of neural weight quantization. Contrast post-training quantization methods (GPTQ, AWQ, bitsandbytes NF4) and model formats (GGUF), calculating memory savings and analyzing precision-quality trade-offs.",
    "topics": [
      {
        "id": "sec-07-01",
        "title": "Precision Formats & Memory Footprint Calculations",
        "content": "Model weights are numerical matrices. Storing parameters in high precision demands immense memory:\n\n$$\\text{Model Weight Memory} \\approx \\text{Parameter Count} \\times \\text{Bytes per Parameter}$$\n\n| Format | Bits per Weight | Storage per Value | 7B Model Weights | 70B Model Weights |\n| :--- | :--- | :--- | :--- | :--- |\n| **FP32** | 32 bits | 4.0 bytes | 28 GB | 280 GB |\n| **FP16 / BF16** | 16 bits | 2.0 bytes | 14 GB | 140 GB |\n| **INT8 / FP8** | 8 bits | 1.0 byte | 7 GB | 70 GB |\n| **INT4 (AWQ/GPTQ)** | 4 bits | 0.5 bytes | 3.5 GB | 35 GB |\n\n*Important Systems Rule*: Storing weights is only the baseline. Total runtime VRAM requires:\n$$\\text{Total VRAM} = \\text{Weights} + \\text{KV Cache} + \\text{Activation Workspaces} + \\text{CUDA Runtime Overhead}$$"
      },
      {
        "id": "sec-07-02",
        "title": "Linear Quantization Mechanics: Scale and Zero Point",
        "content": "Uniform linear quantization maps continuous 16-bit floating-point values into discrete integer bins:\n$$q = \\text{round}\\left(\\frac{x}{s}\\right) + z$$\nwhere $s$ is the scaling factor and $z$ is the zero-point integer offset.\nDequantization reconstructs an approximation of the original weight during forward pass matrix multiplication:\n$$\\hat{x} = s \\cdot (q - z)$$\n\nThe difference $|x - \\hat{x}|$ represents **quantization noise**. Advanced algorithms minimize this error:\n- **GPTQ**: Second-order Taylor series error compensation; quantizes weights column-by-column while updating remaining weights to offset output error.\n- **AWQ (Activation-Aware Weight Quantization)**: Observes that not all weights are equally important; protects the top $1\\%$ salient weights corresponding to high-magnitude activation channels from aggressive quantization.\n- **GGUF (GPT-Generated Unified Format)**: Binary format used by llama.cpp supporting mixed-precision quantization (e.g., Q4_K_M, Q5_K_S) across different transformer layers."
      }
    ]
  },
  {
    "id": "unit-08",
    "number": "08",
    "title": "KV Cache Mechanics & Attention Architecture",
    "subtitle": "The KV Cache Mathematical Formula, MHA, GQA, and MQA",
    "summary": "Derive the mathematical formula for KV cache memory consumption. Analyze how Grouped-Query Attention (GQA) and Multi-Query Attention (MQA) dramatically shrink cache footprints compared to Multi-Head Attention (MHA).",
    "topics": [
      {
        "id": "sec-08-01",
        "title": "The Master KV Cache Memory Formula",
        "content": "In autoregressive decoding, recomputing Key and Value representations of previous tokens across $L$ layers would scale quadratically ($O(N^2)$ FLOPs). Caching them trades memory for linear decoding time.\n\nThe exact formula for KV cache memory is:\n$$\\boxed{M_{\\text{KV}} = 2 \\times L \\times B \\times S \\times H_{\\text{KV}} \\times D_H \\times \\text{Bytes}}$$\n\nwhere:\n- $2$: Accounts for both Key and Value matrices.\n- $L$: Total number of transformer layers.\n- $B$: Active concurrent batch size.\n- $S$: Cached sequence length (prompt tokens + generated tokens).\n- $H_{\\text{KV}}$: Number of Key-Value attention heads.\n- $D_H$: Head dimension ($d_{\\text{model}} / H_Q$).\n- $\\text{Bytes}$: Storage per element ($2$ for FP16/BF16, $1$ for FP8/INT8)."
      },
      {
        "id": "sec-08-02",
        "title": "Attention Architectures: MHA vs GQA vs MQA",
        "content": "The number of KV heads $H_{\\text{KV}}$ dictates the scalability of concurrent serving:\n\n1. **Multi-Head Attention (MHA)**: Every query head has an independent Key and Value head ($H_{\\text{KV}} = H_Q = 32$). Maximum representational capacity, but massive KV cache memory consumption.\n2. **Grouped-Query Attention (GQA)**: Multiple Query heads share a single Key and Value head (e.g., $H_Q = 32$ grouped into $H_{\\text{KV}} = 8$). Standard in modern LLMs (Llama 3, Qwen 2.5, Mistral), reducing KV cache memory by **4x** with virtually zero quality loss.\n3. **Multi-Query Attention (MQA)**: All Query heads share a single Key and Value head ($H_{\\text{KV}} = 1$). Shrinks KV cache by **32x**, enabling massive batch sizes and extreme context lengths."
      }
    ]
  },
  {
    "id": "unit-09",
    "number": "09",
    "title": "Batching Paradigms: Static vs Dynamic vs Continuous",
    "subtitle": "Eliminating Bubble Waste with Iteration-Level Scheduling",
    "summary": "Compare batching strategies in production inference engines. Understand why static batching causes severe GPU underutilization, and master continuous batching (iteration-level scheduling) to maximize throughput.",
    "topics": [
      {
        "id": "sec-09-01",
        "title": "Static vs Dynamic Batching & The Padding Waste Crisis",
        "content": "In traditional deep learning serving (ResNet, BERT), batching groups $N$ requests together:\n- **Static Batching**: Gathers a fixed set of $B$ requests before execution starts.\n- **Dynamic Batching**: Gathers requests that arrive within a short time window (e.g., 10ms).\n- **The LLM Dilemma**: Unlike classification where outputs are single vectors, LLM response lengths vary wildly:\n  - Request 1: 50 output tokens\n  - Request 2: 600 output tokens\n  - Request 3: 80 output tokens\n\nUnder static/dynamic batching, Requests 1 and 3 finish early, but their GPU execution slots and KV cache remain reserved and idle while waiting for Request 2 to complete. This creates massive **bubble waste** and tanks GPU utilization."
      },
      {
        "id": "sec-09-02",
        "title": "Continuous Batching (Iteration-Level Scheduling)",
        "content": "Pioneered by Orca and integrated into vLLM and TGI, **Continuous Batching** operates at the iteration (token) level rather than the request level:\n- As soon as Request 1 generates its `[EOS]` token at step 50, it is immediately evicted from the batch.\n- A newly arrived Request 4 enters active execution at step 51 without waiting for Request 2 to finish.\n- The GPU batch size remains dynamically saturated at full capacity at every single decoding step.\n- Continuous batching raises serving throughput by **10x to 25x** over static batching for conversational workloads."
      }
    ]
  },
  {
    "id": "unit-10",
    "number": "10",
    "title": "Streaming Responses: Server-Sent Events (SSE) & WebSockets",
    "subtitle": "Low-Latency Progressive Delivery and Client-Side Backpressure",
    "summary": "Implement progressive token streaming. Contrast Server-Sent Events (SSE) with WebSockets, build client-side streaming consumers using TextDecoder, and analyze how streaming transforms perceived user latency.",
    "topics": [
      {
        "id": "sec-10-01",
        "title": "Perceived Latency: The Cognitive Psychology of Streaming",
        "content": "If an AI assistant requires 5 seconds to generate a 200-word response:\n- **Without Streaming**: The user stares at a static loading spinner for 5 full seconds. The system feels sluggish, unresponsive, and fragile.\n- **With Streaming**: The first token appears in 350ms (TTFT). The user begins reading immediately while subsequent tokens stream in at 30 tokens/second (faster than human reading speed of $\\sim 5$ words/sec). Perceived wait time drops from 5000ms to 350ms."
      },
      {
        "id": "sec-10-02",
        "title": "Server-Sent Events (SSE) Protocol Implementation",
        "content": "Server-Sent Events (SSE) provide a unidirectional, HTTP-based text streaming protocol standard for LLM chat:\n\n```http\nHTTP/1.1 200 OK\nContent-Type: text/event-stream\nCache-Control: no-cache\nConnection: keep-alive\n\ndata: {\"choices\":[{\"delta\":{\"content\":\"Java\"}}]}\n\ndata: {\"choices\":[{\"delta\":{\"content\":\" inheritance\"}}]}\n\ndata: [DONE]\n```\n\nClient-side consumption using the Fetch API and `ReadableStream`:\n```javascript\nconst response = await fetch(\"/api/v1/chat/completions\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json\" },\n  body: JSON.stringify({ model: \"qwen\", stream: true, messages: [...] })\n});\n\nconst reader = response.body.getReader();\nconst decoder = new TextDecoder(\"utf-8\");\nwhile (true) {\n  const { value, done } = await reader.read();\n  if (done) break;\n  const chunk = decoder.decode(value, { stream: true });\n  // Process SSE lines and update React UI state\n}\n```"
      }
    ]
  },
  {
    "id": "unit-11",
    "number": "11",
    "title": "Advanced Inference Optimizations: Caching, Speculative Decoding & Parallelism",
    "subtitle": "Prefix Caching, FlashAttention, Speculative Decoding, TP, and PP",
    "summary": "Explore bleeding-edge inference acceleration techniques: Automatic Prefix Caching, Speculative Decoding with draft models, FlashAttention IO tiling, Tensor Parallelism across NVLink, and Pipeline Parallelism.",
    "topics": [
      {
        "id": "sec-011-01",
        "title": "Prefix Caching & Speculative Decoding",
        "content": "1. **Automatic Prefix Caching (APC)**: In educational and agentic applications, thousands of queries share identical system prompts, few-shot rubrics, or document contexts. vLLM's prefix cache hashes token blocks and reuses precomputed KV blocks, dropping prompt prefill latency to zero ($O(1)$ lookup).\n2. **Speculative Decoding**: Employs a small, fast 'draft model' (e.g., Qwen-0.5B) to speculate $K=5$ candidate tokens rapidly. The large 'target model' (e.g., Qwen-70B) runs a single parallel forward pass to verify all $K$ tokens simultaneously. Accepted tokens are retained; invalid tokens are rejected and resampled. Yields **2x to 3x** speedup without any degradation in mathematical output distribution."
      },
      {
        "id": "sec-11-02",
        "title": "FlashAttention & Multi-GPU Parallelism (TP vs PP)",
        "content": "- **FlashAttention (Dao et al.)**: Restructures self-attention computation using IO-aware tiling. Computes softmax incrementally in GPU fast SRAM without materializing the massive $N \\times N$ intermediate attention matrix in slow HBM, reducing memory access and boosting attention speed by 2x–4x.\n- **Tensor Parallelism (TP)**: Splits individual weight matrices (e.g., QKV projections, MLP layers) across multiple GPUs within a single server connected via high-speed NVLink (900 GB/s). Crucial for keeping latency sub-second on models $>14\\text{B}$.\n- **Pipeline Parallelism (PP)**: Partitions sequential transformer layers across separate servers over network interconnects (InfiniBand)."
      }
    ]
  },
  {
    "id": "unit-12",
    "number": "12",
    "title": "Capacity Planning, Security & Production Observability",
    "subtitle": "Concurrency Sizing, Rate Limiting, Latency SLAs, and VRAM Monitoring",
    "summary": "Plan and govern enterprise serving clusters. Formulate concurrency vs throughput capacity models, implement backpressure, guard against unbounded token consumption, and monitor p50/p95/p99 latencies.",
    "topics": [
      {
        "id": "sec-12-01",
        "title": "Capacity Planning: Concurrency vs Throughput Modeling",
        "content": "Engineers must accurately size GPU clusters for user traffic:\n- **Concurrency**: The count of requests actively executing in VRAM simultaneously.\n- **Throughput**: Total generated tokens per second across all active requests.\n- **VRAM Capacity Budget**:\n$$\\text{Max Concurrent Streams} = \\frac{\\text{Total VRAM} - \\text{Model Weights} - \\text{Workspaces}}{\\text{Peak KV Cache per User}}$$\n\n*Example*: On an A100 (80GB VRAM) serving a 7B FP16 model (14GB weights + 6GB workspace = 20GB):\n- Available KV Cache VRAM $= 60\\text{ GB}$.\n- If each user consumes 4096 tokens with GQA ($0.5\\text{ GB}$ KV cache), the single GPU can comfortably support $60 / 0.5 = 120$ concurrent active streams before queuing."
      },
      {
        "id": "sec-12-02",
        "title": "Production Observability & SLA Metrics",
        "content": "A production inference telemetry dashboard (Prometheus + Grafana) tracks:\n1. **TTFT Distribution (p50, p95, p99)**: Detects prefill queue bottlenecks.\n2. **TPOT & Output Tokens/Sec**: Measures decode generation health.\n3. **GPU VRAM & KV Cache Block Utilization**: If KV cache utilization exceeds $95\\%$, the scheduler must apply backpressure or preemption.\n4. **Request Quotas & Timeout Limits**: Imposes `max_tokens` caps to prevent Denial of Service through unbounded generation (OWASP LLM10)."
      }
    ]
  }
];

export const practicalLabs = [
  {
    "id": "lab-01",
    "number": "01",
    "title": "Lab 1: Model Loading & Autoregressive Inference with Hugging Face",
    "difficulty": "Intermediate",
    "duration": "3.5 hours",
    "summary": "Load a causal language model using Hugging Face Transformers. Execute tokenization, generate completions with torch.inference_mode, measure generation latency, and profile GPU memory allocations.",
    "code": "import time\nimport torch\nfrom transformers import AutoTokenizer, AutoModelForCausalLM\n\ndef execute_transformers_inference(model_id: str, prompt: str):\n    print(f\"Loading model: {model_id}...\")\n    tokenizer = AutoTokenizer.from_pretrained(model_id)\n    \n    # Load model in half-precision on available GPU/CPU\n    device = \"cuda\" if torch.cuda.is_available() else \"cpu\"\n    model = AutoModelForCausalLM.from_pretrained(\n        model_id,\n        torch_dtype=torch.float16 if device == \"cuda\" else torch.float32,\n        device_map=\"auto\" if device == \"cuda\" else None\n    )\n    \n    # Tokenize input\n    inputs = tokenizer(prompt, return_tensors=\"pt\").to(device)\n    input_token_count = inputs.input_ids.shape[1]\n    \n    # Measure inference timing\n    start_time = time.perf_counter()\n    with torch.inference_mode():\n        outputs = model.generate(\n            **inputs,\n            max_new_tokens=150,\n            temperature=0.7,\n            do_sample=True,\n            pad_token_id=tokenizer.eos_token_id\n        )\n    total_latency = time.perf_counter() - start_time\n    \n    # Decode and calculate throughput\n    generated_tokens = outputs.shape[1] - input_token_count\n    tokens_per_sec = generated_tokens / total_latency\n    response_text = tokenizer.decode(outputs[0][input_token_count:], skip_special_tokens=True)\n    \n    return {\n        \"device\": device,\n        \"input_tokens\": input_token_count,\n        \"generated_tokens\": generated_tokens,\n        \"total_latency_seconds\": round(total_latency, 3),\n        \"throughput_tokens_per_sec\": round(tokens_per_sec, 2),\n        \"response\": response_text\n    }\n\n# Example execution\nresult = execute_transformers_inference(\"Qwen/Qwen2.5-0.5B-Instruct\", \"Explain Java JVM heap memory vs stack memory in 2 sentences.\")\nprint(result)"
  },
  {
    "id": "lab-02",
    "number": "02",
    "title": "Lab 2: Local AI Serving & Custom Modelfiles with Ollama",
    "difficulty": "Intermediate",
    "duration": "3.5 hours",
    "summary": "Configure, package, and serve a specialized Java interview assistant locally using Ollama. Write a custom Modelfile, set context windows and temperature parameters, and query the local REST API.",
    "code": "import json\nimport requests\n\ndef test_ollama_local_serving(prompt: str, model_name: str = \"qwen2.5-coder:1.5b\"):\n    url = \"http://localhost:11434/api/generate\"\n    payload = {\n        \"model\": model_name,\n        \"prompt\": prompt,\n        \"stream\": False,\n        \"options\": {\n            \"temperature\": 0.7,\n            \"num_ctx\": 4096,\n            \"top_p\": 0.9\n        }\n    }\n    \n    print(f\"Submitting request to Ollama ({model_name})...\")\n    try:\n        response = requests.post(url, json=payload, timeout=60)\n        response.raise_for_status()\n        data = response.json()\n        \n        # Extract Ollama performance metrics\n        total_duration_sec = data.get(\"total_duration\", 0) / 1e9\n        eval_count = data.get(\"eval_count\", 0)\n        eval_duration_sec = data.get(\"eval_duration\", 0) / 1e9\n        tokens_per_sec = eval_count / eval_duration_sec if eval_duration_sec > 0 else 0\n        \n        return {\n            \"response\": data.get(\"response\"),\n            \"total_duration_seconds\": round(total_duration_sec, 3),\n            \"output_tokens\": eval_count,\n            \"tokens_per_second\": round(tokens_per_sec, 2)\n        }\n    except requests.exceptions.ConnectionError:\n        return {\"error\": \"Ollama daemon is not running on localhost:11434\"}\n\n# Example query\nres = test_ollama_local_serving(\"Explain the difference between HashMap and ConcurrentHashMap in Java.\")\nprint(json.dumps(res, indent=2))"
  },
  {
    "id": "lab-03",
    "number": "03",
    "title": "Lab 3: Model Quantization Comparison (FP16 vs INT8 vs INT4)",
    "difficulty": "Advanced",
    "duration": "4.5 hours",
    "summary": "Implement linear weight quantization and dequantization from scratch in Python. Benchmark memory footprint, quantization error (MSE), and throughput across FP16, INT8, and INT4 representations.",
    "code": "import numpy as np\n\nclass LinearQuantizer:\n    @staticmethod\n    def quantize_to_int8(weights: np.ndarray):\n        \"\"\"Asymmetric linear quantization to 8-bit integer\"\"\"\n        w_min = float(weights.min())\n        w_max = float(weights.max())\n        \n        scale = (w_max - w_min) / 255.0\n        zero_point = round(-w_min / (scale + 1e-9))\n        zero_point = max(0, min(255, zero_point))\n        \n        q_weights = np.clip(np.round(weights / scale) + zero_point, 0, 255).astype(np.uint8)\n        return q_weights, scale, zero_point\n\n    @staticmethod\n    def dequantize_int8(q_weights: np.ndarray, scale: float, zero_point: int) -> np.ndarray:\n        \"\"\"Dequantizes 8-bit representation back to float\"\"\"\n        return (q_weights.astype(np.float32) - zero_point) * scale\n\n    @staticmethod\n    def compute_quantization_metrics(original_weights: np.ndarray):\n        q_w, scale, zp = LinearQuantizer.quantize_to_int8(original_weights)\n        reconstructed = LinearQuantizer.dequantize_int8(q_w, scale, zp)\n        \n        # Calculate Mean Squared Error (Quantization Noise)\n        mse_error = np.mean((original_weights - reconstructed) ** 2)\n        memory_original = original_weights.nbytes\n        memory_quantized = q_w.nbytes\n        \n        return {\n            \"original_vram_bytes\": memory_original,\n            \"quantized_vram_bytes\": memory_quantized,\n            \"compression_ratio\": round(memory_original / memory_quantized, 2),\n            \"quantization_mse_error\": float(mse_error)\n        }\n\n# Simulated neural network weight layer (1000 x 1000 parameters)\nsimulated_weights = np.random.randn(1000, 1000).astype(np.float32)\nmetrics = LinearQuantizer.compute_quantization_metrics(simulated_weights)\nprint(\"Quantization Benchmark Results:\")\nfor k, v in metrics.items():\n    print(f\"  {k}: {v}\")"
  },
  {
    "id": "lab-04",
    "number": "04",
    "title": "Lab 4: High-Throughput Model Serving with vLLM & OpenAI Client",
    "difficulty": "Advanced",
    "duration": "4.5 hours",
    "summary": "Configure and query a production vLLM inference server using the OpenAI Python SDK. Measure Time to First Token (TTFT), Time Per Output Token (TPOT), and stream tokens incrementally.",
    "code": "import time\nfrom openai import OpenAI\n\ndef query_vllm_streaming(prompt: str, base_url: str = \"http://localhost:8000/v1\"):\n    client = OpenAI(base_url=base_url, api_key=\"EMPTY\")\n    \n    print(\"Initiating streaming request to vLLM server...\")\n    start_time = time.perf_counter()\n    first_token_time = None\n    token_count = 0\n    full_response = []\n    \n    stream = client.chat.completions.create(\n        model=\"Qwen/Qwen2.5-1.5B-Instruct\",\n        messages=[{\"role\": \"user\", \"content\": prompt}],\n        temperature=0.7,\n        max_tokens=250,\n        stream=True\n    )\n    \n    for chunk in stream:\n        delta = chunk.choices[0].delta.content\n        if delta:\n            if first_token_time is None:\n                first_token_time = time.perf_counter()\n            token_count += 1\n            full_response.append(delta)\n            \n    total_time = time.perf_counter() - start_time\n    ttft_ms = (first_token_time - start_time) * 1000 if first_token_time else 0\n    decode_time = total_time - (ttft_ms / 1000)\n    tpot_ms = (decode_time / max(token_count - 1, 1)) * 1000\n    \n    return {\n        \"ttft_ms\": round(ttft_ms, 1),\n        \"tpot_ms\": round(tpot_ms, 1),\n        \"total_latency_seconds\": round(total_time, 3),\n        \"tokens_generated\": token_count,\n        \"throughput_tokens_per_sec\": round(token_count / total_time, 2)\n    }\n\n# Mock demonstrator call\nprint(\"vLLM Streaming Metrics Profiler ready.\")"
  },
  {
    "id": "lab-05",
    "number": "05",
    "title": "Lab 5: Continuous Batching & Concurrency Stress Testing",
    "difficulty": "Expert",
    "duration": "5.0 hours",
    "summary": "Construct a concurrent benchmarking harness using asyncio to simulate 1, 5, 10, and 20 simultaneous users. Measure aggregated throughput, p95 latency, and analyze how continuous batching eliminates bubble waste.",
    "code": "import asyncio\nimport time\nfrom typing import List, Dict, Any\n\nasync def simulate_user_request(user_id: int, prompt_tokens: int, target_tokens: int, tpot_ms: float = 30.0) -> Dict[str, Any]:\n    start_time = time.perf_counter()\n    # Prefill delay (compute-bound)\n    await asyncio.sleep(prompt_tokens * 0.0005)\n    ttft = (time.perf_counter() - start_time) * 1000\n    \n    # Decode iterations (memory-bandwidth bound)\n    for _ in range(target_tokens):\n        await asyncio.sleep(tpot_ms / 1000.0)\n        \n    total_latency = (time.perf_counter() - start_time) * 1000\n    return {\n        \"user_id\": user_id,\n        \"ttft_ms\": round(ttft, 1),\n        \"total_latency_ms\": round(total_latency, 1),\n        \"tokens\": target_tokens\n    }\n\nasync def run_continuous_batch_benchmark(concurrency_levels: List[int]):\n    results = {}\n    for concurrency in concurrency_levels:\n        print(f\"Running benchmark with {concurrency} concurrent streams...\")\n        bench_start = time.perf_counter()\n        \n        tasks = [\n            simulate_user_request(i, prompt_tokens=150, target_tokens=100)\n            for i in range(concurrency)\n        ]\n        completed = await asyncio.gather(*tasks)\n        bench_duration = time.perf_counter() - bench_start\n        \n        total_tokens = sum(r[\"tokens\"] for r in completed)\n        throughput = total_tokens / bench_duration\n        latencies = [r[\"total_latency_ms\"] for r in completed]\n        \n        results[f\"concurrency_{concurrency}\"] = {\n            \"total_tokens_generated\": total_tokens,\n            \"wall_clock_seconds\": round(bench_duration, 2),\n            \"aggregate_tokens_per_sec\": round(throughput, 1),\n            \"p50_latency_ms\": round(float(np.percentile(latencies, 50)), 1),\n            \"p95_latency_ms\": round(float(np.percentile(latencies, 95)), 1)\n        }\n    return results\n\n# Benchmark execution\nprint(\"Continuous Batching Benchmark Harness configured.\")"
  }
];

export const capstoneProject = {
  "id": "capstone-17",
  "title": "Production-Ready Java Interview AI Inference Service",
  "overview": "Architect, build, benchmark, and deploy an enterprise-grade LLM inference and model serving platform for PrepSpaces. Your system will expose a high-throughput, OpenAI-compatible API powered by vLLM, integrate PagedAttention KV cache management, execute low-bit quantization (AWQ/GPTQ), provide continuous Server-Sent Events (SSE) token streaming, and enforce production capacity planning with rate limiting and Prometheus observability.",
  "duration": "18–22 hours",
  "deliverables": [
    "Production Inference Server deployment using vLLM with PagedAttention and Automatic Prefix Caching enabled.",
    "Model Gateway API in FastAPI/Node.js handling authentication, tenant isolation, request queuing, and rate limiting.",
    "Real-time Server-Sent Events (SSE) token streaming pipeline with client-side backpressure and error recovery.",
    "Quantization pipeline converting base weights into 4-bit AWQ or GGUF formats with empirical quality benchmarks.",
    "Comprehensive Concurrency Benchmarking Suite evaluating TTFT, TPOT, and throughput across 1, 10, 50, and 100 concurrent streams.",
    "Production Telemetry Dashboard tracking GPU VRAM allocation, KV cache block usage, p95 latency, and error rates."
  ],
  "architectureMilestones": [
    {
      "phase": "Milestone 1: Model Gateway & Streaming Architecture",
      "tasks": [
        "Design the client-to-backend-to-vLLM API gateway with Bearer authentication and request validation.",
        "Implement Server-Sent Events (SSE) streaming endpoints with `ReadableStream` consumer protocols.",
        "Configure graceful request cancellation when users close browser sessions, terminating active GPU decoding."
      ]
    },
    {
      "phase": "Milestone 2: vLLM Cluster Deployment & PagedAttention Tuning",
      "tasks": [
        "Deploy vLLM serving cluster with `--gpu-memory-utilization 0.90` and `--max-model-len 8192`.",
        "Enable Automatic Prefix Caching to reuse precomputed prompt blocks across interview sessions.",
        "Benchmark TTFT improvements from prefix caching across repeated system instruction headers."
      ]
    },
    {
      "phase": "Milestone 3: Low-Bit Quantization & Memory Profiling",
      "tasks": [
        "Evaluate model memory footprints across FP16, INT8, and INT4 (AWQ/GGUF) using the $2LBSH_{KV}D_H$ formula.",
        "Implement Grouped-Query Attention (GQA) memory calculations to size maximum concurrency on available VRAM.",
        "Audit generation perplexity and accuracy on Java technical interview benchmark prompts."
      ]
    },
    {
      "phase": "Milestone 4: Continuous Batching Benchmarking & Telemetry",
      "tasks": [
        "Execute stress tests simulating 1 to 50 concurrent requests and verify linear throughput scaling without OOM crashes.",
        "Export Prometheus metrics for TTFT, TPOT, active KV cache blocks, and queue latency.",
        "Construct a real-time Grafana monitoring dashboard visualizing GPU core and memory bandwidth utilization."
      ]
    }
  ]
};

export const codingAssignments = [
  {
    "id": "assign-01",
    "title": "Exercise 1: KV Cache Memory Consumption Calculator",
    "difficulty": "Medium",
    "instructions": "Implement the master KV cache memory calculation function in Python: M = 2 * L * B * S * H_KV * D_H * Bytes. Calculate total megabytes and gigabytes for given parameters.",
    "starterCode": "def calculate_kv_cache_memory_mb(num_layers: int, batch_size: int, seq_len: int, num_kv_heads: int, head_dim: int, bytes_per_element: int = 2) -> float:\n    # TODO: Implement 2 * L * B * S * H_KV * D_H * Bytes / (1024 * 1024)\n    pass"
  },
  {
    "id": "assign-02",
    "title": "Exercise 2: Model Weight VRAM Sizer Across Precisions",
    "difficulty": "Easy",
    "instructions": "Write a function that calculates static model weight storage in gigabytes for a model given its parameter count and precision format ('fp32', 'fp16', 'int8', 'int4').",
    "starterCode": "def calculate_weight_memory_gb(param_count_billions: float, precision: str) -> float:\n    # TODO: Calculate parameter_count * bytes_per_param\n    pass"
  },
  {
    "id": "assign-03",
    "title": "Exercise 3: End-to-End Latency Estimator (TTFT & TPOT)",
    "difficulty": "Easy",
    "instructions": "Implement a function that estimates total generation time in milliseconds given prompt token count, output token count, prefill rate (tokens/ms), and decode TPOT (ms/token).",
    "starterCode": "def estimate_total_latency_ms(prompt_tokens: int, output_tokens: int, prefill_rate: float, tpot_ms: float, queue_ms: float = 0.0) -> float:\n    # TODO: Calculate TTFT + (output_tokens - 1) * tpot_ms\n    pass"
  },
  {
    "id": "assign-04",
    "title": "Exercise 4: Asymmetric Linear INT8 Quantizer",
    "difficulty": "Medium",
    "instructions": "Implement linear asymmetric quantization mapping a 1D NumPy array of floating-point weights into 8-bit unsigned integers [0, 255] with scale and zero-point parameters.",
    "starterCode": "import numpy as np\n\ndef quantize_weights_int8(weights: np.ndarray):\n    # TODO: Calculate scale, zero_point, and quantized weights\n    pass"
  },
  {
    "id": "assign-05",
    "title": "Exercise 5: INT8 Dequantizer & Mean Squared Error Calculator",
    "difficulty": "Medium",
    "instructions": "Write a function that dequantizes an INT8 array back to float32 and computes the Mean Squared Error (quantization noise) relative to the original unquantized tensor.",
    "starterCode": "def compute_quantization_noise_mse(original: np.ndarray, quantized: np.ndarray, scale: float, zero_point: int) -> float:\n    # TODO: Reconstruct float array and compute MSE\n    pass"
  },
  {
    "id": "assign-06",
    "title": "Exercise 6: PagedAttention Block Table Allocator",
    "difficulty": "Hard",
    "instructions": "Build an in-memory block allocator simulating PagedAttention: allocate fixed-size physical blocks (16 tokens per block) for growing sequences and track logical-to-physical block tables.",
    "starterCode": "class PagedBlockManager:\n    def __init__(self, total_blocks: int, block_size: int = 16):\n        # TODO: Initialize free block pool and block tables\n        pass"
  },
  {
    "id": "assign-07",
    "title": "Exercise 7: Continuous Batching Slot Scheduler",
    "difficulty": "Hard",
    "instructions": "Implement an iteration-level scheduler that checks active sequences at each generation step, evicts finished sequences that emit [EOS], and admits new pending requests from the queue.",
    "starterCode": "class ContinuousBatchScheduler:\n    def __init__(self, max_batch_size: int):\n        # TODO: Manage active execution slots and incoming queue\n        pass"
  },
  {
    "id": "assign-08",
    "title": "Exercise 8: Server-Sent Events (SSE) Stream Formatter",
    "difficulty": "Easy",
    "instructions": "Write a Python generator function that formats token strings into compliant Server-Sent Events protocol chunks: 'data: {\"token\": \"...\"}\\n\\n' ending with 'data: [DONE]\\n\\n'.",
    "starterCode": "def format_sse_chunks(token_list: list[str]):\n    # TODO: Yield SSE formatted strings\n    pass"
  },
  {
    "id": "assign-09",
    "title": "Exercise 9: Fetch ReadableStream SSE Consumer in JavaScript",
    "difficulty": "Medium",
    "instructions": "Implement a JavaScript client-side function that reads from a streaming `fetch()` response using `TextDecoder` and dispatches callbacks for each emitted token chunk.",
    "starterCode": "async function consumeSseTokenStream(url, payload, onToken, onComplete) {\n    // TODO: Implement TextDecoder stream reader\n}"
  },
  {
    "id": "assign-10",
    "title": "Exercise 10: Attention Variant Comparison (MHA vs GQA vs MQA)",
    "difficulty": "Medium",
    "instructions": "Write a function that calculates the KV cache compression ratio achieved by Grouped-Query Attention (GQA) and Multi-Query Attention (MQA) relative to standard Multi-Head Attention (MHA).",
    "starterCode": "def compare_attention_kv_compression(num_query_heads: int, num_kv_heads: int) -> dict:\n    # TODO: Calculate MHA vs GQA/MQA ratios\n    pass"
  },
  {
    "id": "assign-11",
    "title": "Exercise 11: Speculative Decoding Verification Gate",
    "difficulty": "Hard",
    "instructions": "Implement the token verification step of speculative decoding: compare target model top-1 tokens with draft model proposed tokens, accepting matches and returning the first discrepancy index.",
    "starterCode": "def verify_speculative_tokens(draft_tokens: list[int], target_tokens: list[int]) -> list[int]:\n    # TODO: Return accepted tokens and corrective token\n    pass"
  },
  {
    "id": "assign-12",
    "title": "Exercise 12: Concurrency Capacity Planner",
    "difficulty": "Medium",
    "instructions": "Given total GPU VRAM, model weight memory, workspace overhead, and single-user peak KV cache memory, compute the maximum safe concurrent streams before queue backpressure is required.",
    "starterCode": "def calculate_max_concurrent_streams(total_vram_gb: float, weights_gb: float, workspace_gb: float, single_stream_kv_mb: float) -> int:\n    # TODO: Compute floor((VRAM - weights - workspace) / single_stream_kv)\n    pass"
  },
  {
    "id": "assign-13",
    "title": "Exercise 13: FlashAttention Memory Footprint Estimator",
    "difficulty": "Medium",
    "instructions": "Calculate the intermediate attention matrix memory required by traditional attention (N * N * Batch * Heads * Bytes) and contrast it with FlashAttention's constant SRAM block allocation.",
    "starterCode": "def compare_attention_intermediate_memory_mb(seq_len: int, batch_size: int, num_heads: int, bytes_per_element: int = 2) -> dict:\n    # TODO: Calculate N^2 intermediate memory vs FlashAttention SRAM\n    pass"
  },
  {
    "id": "assign-14",
    "title": "Exercise 14: Sliding Window Attention KV Cache Pruner",
    "difficulty": "Medium",
    "instructions": "Implement a sliding window KV cache manager that retains only the last W tokens in memory, discarding older Key and Value representations to bound memory growth for long sessions.",
    "starterCode": "class SlidingWindowKvCache:\n    def __init__(self, window_size: int):\n        # TODO: Evict tokens older than window_size\n        pass"
  },
  {
    "id": "assign-15",
    "title": "Exercise 15: Token Bucket Rate Limiter for Model Gateway",
    "difficulty": "Medium",
    "instructions": "Build an asynchronous Token Bucket rate limiter in Python that enforces max requests per minute (RPM) and max tokens per minute (TPM) on a per-user basis.",
    "starterCode": "class TokenBucketRateLimiter:\n    def __init__(self, max_tpm: int, refill_rate_per_sec: float):\n        # TODO: Implement token bucket consumption and refill\n        pass"
  },
  {
    "id": "assign-16",
    "title": "Exercise 16: Automatic Prefix Cache Key Hasher",
    "difficulty": "Easy",
    "instructions": "Implement a token-level prefix hashing algorithm that partitions prompts into 16-token chunks and computes deterministic SHA-256 block hashes for prefix cache lookups.",
    "starterCode": "def hash_prefix_blocks(token_ids: list[int], block_size: int = 16) -> list[str]:\n    # TODO: Return list of block hashes\n    pass"
  },
  {
    "id": "assign-17",
    "title": "Exercise 17: vLLM Client Session with Request Cancellation",
    "difficulty": "Medium",
    "instructions": "Write a Python client using `httpx` or `aiohttp` that sends a streaming inference request to a vLLM server, listens for tokens, and cleanly terminates the HTTP connection on cancellation.",
    "starterCode": "async def stream_with_abort_signal(api_url: str, prompt: str, cancel_event):\n    # TODO: Stream tokens and close socket on cancel_event.is_set()\n    pass"
  },
  {
    "id": "assign-18",
    "title": "Exercise 18: Telemetry Metric Aggregator (TTFT & TPOT)",
    "difficulty": "Easy",
    "instructions": "Given a list of request log dictionaries containing start_time, first_token_time, end_time, and token_count, compute average TTFT, average TPOT, p50 latency, and p95 latency.",
    "starterCode": "def aggregate_inference_telemetry(request_logs: list[dict]) -> dict:\n    # TODO: Compute summary statistics across request traces\n    pass"
  }
];

export const theoryQuestions = [
  {
    "id": "theory-01",
    "question": "What is LLM inference and how does it fundamentally differ from model training?",
    "answer": "LLM inference is the process of generating predictions or responses from an input prompt using a trained, frozen language model. In contrast to training—which performs both forward and backward passes to compute gradients and update weights using optimizer states—inference executes forward passes only (torch.inference_mode). During inference, parameters remain static, and memory consumption is dominated by static weights, transient activation tensors, and dynamic Key-Value (KV) caches rather than optimizer states."
  },
  {
    "id": "theory-02",
    "question": "Explain the two distinct phases of LLM inference: Prefill and Decode.",
    "answer": "The Prefill phase processes the entire input prompt in parallel across all token positions, computing Key and Value vectors for all prompt tokens and generating the probability distribution for the first output token. Prefill is compute-bound (GEMM operations maximize GPU tensor core utilization) and dictates Time to First Token (TTFT). The Decode phase generates subsequent tokens one at a time autoregressively. Decode is memory-bandwidth bound (GEMV operations must read the full model weight tensor from HBM for every single emitted token) and dictates Time Per Output Token (TPOT)."
  },
  {
    "id": "theory-03",
    "question": "Why is autoregressive decoding memory-bandwidth bound rather than compute-bound?",
    "answer": "During autoregressive decoding at batch size 1, generating a single token requires reading the entire model weight matrix (e.g., 14 GB for a 7B FP16 model) from GPU High Bandwidth Memory (HBM) into fast SRAM/registers to perform a single matrix-vector multiplication. Because the number of arithmetic operations per byte loaded (arithmetic intensity) is extremely low, GPU compute tensor cores sit idle waiting for memory controllers to stream weights, making HBM bandwidth the primary bottleneck."
  },
  {
    "id": "theory-04",
    "question": "Derive and explain the mathematical formula for KV cache memory consumption.",
    "answer": "The formula is M_KV = 2 * L * B * S * H_KV * D_H * Bytes. The multiplier 2 accounts for storing both Key and Value tensors. L is the number of transformer layers. B is the active concurrent batch size. S is the cached sequence length (prompt + output tokens). H_KV is the number of Key-Value attention heads. D_H is the head dimension (d_model / H_Q). Bytes is the storage size per floating-point element (2 bytes for FP16/BF16, 1 byte for FP8/INT8)."
  },
  {
    "id": "theory-05",
    "question": "How do Grouped-Query Attention (GQA) and Multi-Query Attention (MQA) reduce KV cache memory compared to Multi-Head Attention (MHA)?",
    "answer": "In Multi-Head Attention (MHA), every query head has its own dedicated Key and Value head (H_KV = H_Q = 32). In Grouped-Query Attention (GQA), multiple query heads share a single Key/Value head (e.g., 32 Query heads share 8 KV heads), reducing KV cache memory by 4x with negligible impact on generation quality. In Multi-Query Attention (MQA), all query heads share a single global Key/Value head (H_KV = 1), shrinking KV cache memory by up to 32x and enabling massive concurrent batch sizes."
  },
  {
    "id": "theory-06",
    "question": "What is PagedAttention in vLLM and how does it eliminate memory fragmentation?",
    "answer": "Traditional serving systems allocate contiguous VRAM tensors sized for a model's maximum context length (e.g., 8192 tokens), causing massive internal fragmentation when sequences are short and external fragmentation from varying request lengths. PagedAttention divides GPU memory into fixed-size physical blocks (e.g., 16 tokens). It maintains a virtual-to-physical block table, allocating non-contiguous physical blocks dynamically only as new tokens are generated. This eliminates external fragmentation and confines internal fragmentation to the final block, reducing memory waste to under 4%."
  },
  {
    "id": "theory-07",
    "question": "Explain Continuous Batching (Iteration-Level Scheduling) and contrast it with Static Batching.",
    "answer": "Static batching groups N requests together and executes them until all sequences complete. If one request requires 500 tokens while another requires 50, the shorter request's GPU execution slot and memory sit idle for 450 iterations (bubble waste). Continuous batching operates at the iteration level: as soon as a sequence completes (emits [EOS]), it is immediately evicted from the batch, and a newly arrived request enters execution on the very next token iteration, keeping GPU occupancy near 100%."
  },
  {
    "id": "theory-08",
    "question": "Differentiate between post-training quantization methods: GPTQ, AWQ, and bitsandbytes NF4.",
    "answer": "GPTQ is a second-order post-training quantization method that quantizes weight matrices column-by-column, using inverse Hessian matrix updates to compensate for errors in remaining unquantized weights. AWQ (Activation-Aware Weight Quantization) observes that weights associated with high-magnitude activation channels are critical; it selectively protects the top 1% salient weights from quantization noise. bitsandbytes NF4 (NormalFloat 4) maps weights to an information-theoretically optimal quantile distribution for normally distributed neural network parameters."
  },
  {
    "id": "theory-09",
    "question": "What is GGUF and why is it widely used in local LLM runtimes like Ollama and llama.cpp?",
    "answer": "GGUF (GPT-Generated Unified Format) is a binary file format that packages model architecture configuration, tokenizer vocabulary, hyper-parameters, and quantized tensors into a single file. Unlike loose safetensors checkpoints, GGUF supports mixed-precision quantization across layers (e.g., Q4_K_M, Q5_K_S) and enables zero-copy memory mapping (mmap), allowing models to be loaded instantly into CPU/GPU memory."
  },
  {
    "id": "theory-10",
    "question": "What is FlashAttention and how does IO-aware tiling accelerate self-attention?",
    "answer": "Standard self-attention computes intermediate attention matrices (S = QK^T and P = softmax(S)) that scale quadratically (N x N) and must be written to and read from slow High Bandwidth Memory (HBM). FlashAttention uses IO-aware tiling to load blocks of Q, K, and V into fast GPU on-chip SRAM, computing softmax normalization incrementally via online scaling without materializing the full N x N matrix in HBM, dramatically lowering memory traffic and boosting execution speed."
  },
  {
    "id": "theory-11",
    "question": "Explain the architecture of Speculative Decoding and the conditions required for inference speedups.",
    "answer": "Speculative decoding pairs a small, fast 'draft model' (e.g., 0.5B) with a large 'target model' (e.g., 70B). The draft model speculatively generates K candidate tokens. The target model then runs a single parallel forward pass to verify all K tokens simultaneously. Accepted tokens are emitted; if a discrepancy occurs, the target model resamples the first divergent token. Speedup is achieved when the draft model is fast and its acceptance rate is high (alpha > 0.7)."
  },
  {
    "id": "theory-12",
    "question": "Differentiate between Tensor Parallelism (TP) and Pipeline Parallelism (PP).",
    "answer": "Tensor Parallelism (TP) divides individual weight matrices across multiple GPUs (e.g., splitting column-parallel QKV projections and row-parallel MLP layers). It requires ultra-high bandwidth interconnects (NVLink > 900 GB/s) because GPUs must synchronize activations via all-reduce operations at every transformer layer. Pipeline Parallelism (PP) partitions consecutive layers across separate GPUs or servers (e.g., Layers 1–16 on GPU 1, Layers 17–32 on GPU 2), communicating activations sequentially over standard network links."
  },
  {
    "id": "theory-13",
    "question": "Explain Server-Sent Events (SSE) and why they are preferred over WebSockets for LLM chat streaming.",
    "answer": "Server-Sent Events (SSE) provide a lightweight, unidirectional text streaming protocol built directly over standard HTTP/1.1 and HTTP/2. For generative AI where clients send a single prompt and receive a continuous stream of generated tokens, SSE is simpler to implement than WebSockets, natively supports automatic HTTP reconnection, works seamlessly with existing load balancers and CDNs, and bypasses firewall restrictions."
  },
  {
    "id": "theory-14",
    "question": "What is Automatic Prefix Caching (APC) and in what application scenarios is it most effective?",
    "answer": "Automatic Prefix Caching computes deterministic hashes of token blocks in prompt prefixes (such as system instructions, few-shot examples, or document context) and reuses precomputed KV cache blocks stored in VRAM across requests. It is highly effective in educational platforms, customer service bots, and RAG agents where hundreds of users submit prompts sharing identical system instructions or reference documents, dropping TTFT by up to 80%."
  },
  {
    "id": "theory-15",
    "question": "How do you calculate maximum concurrent streams on a GPU with 80GB VRAM serving a 7B model?",
    "answer": "First, subtract static model weights and runtime workspaces from total VRAM (e.g., 14 GB for 7B FP16 weights + 6 GB workspace = 20 GB). The remaining 60 GB is dedicated to the PagedAttention KV cache pool. If each user session has a peak context length of 4096 tokens with GQA requiring 0.5 GB of KV cache, the GPU can support a maximum of 60 GB / 0.5 GB = 120 concurrent streams before request queuing is triggered."
  },
  {
    "id": "theory-16",
    "question": "What is Time to First Token (TTFT) and what factors contribute to it?",
    "answer": "TTFT measures the duration between when a user submits a prompt and when the client receives the first generated token. It consists of request network transmission, queue wait time in the inference scheduler, prompt tokenization, parallel prefill forward pass computation across all prompt tokens, and first token sampling."
  },
  {
    "id": "theory-17",
    "question": "What is Time Per Output Token (TPOT) and how does it relate to tokens per second?",
    "answer": "TPOT measures the average time required to generate each incremental token after the first token has been emitted. It represents the latency of a single autoregressive decode step: TPOT = Total Decode Time / (Number of Output Tokens - 1). The generation throughput for that stream in tokens per second is the reciprocal: 1000 / TPOT (in ms)."
  },
  {
    "id": "theory-18",
    "question": "Why does high GPU utilization not automatically mean optimal inference performance?",
    "answer": "A GPU running naive static batching may show 95% utilization because tensor cores are executing operations, but much of that computation is wasted on padding tokens or processing idle slots while waiting for the longest sequence to complete. Furthermore, if the engine is memory-bandwidth saturated, compute cores are stalled rather than performing meaningful operations. True performance must be judged by throughput (tokens/sec) and latency SLAs (TTFT and TPOT)."
  },
  {
    "id": "theory-19",
    "question": "Explain the purpose of the --gpu-memory-utilization parameter in vLLM.",
    "answer": "The --gpu-memory-utilization flag (default 0.90) defines the target fraction of total physical GPU VRAM that vLLM is permitted to pre-allocate. After loading model weights and internal CUDA execution workspaces, vLLM converts the entire remaining memory within that budget into the PagedAttention KV cache block pool. Setting it too high (>0.95) risks CUDA OOM errors from external process allocations, while setting it too low limits concurrent capacity."
  },
  {
    "id": "theory-20",
    "question": "What is the difference between FP16 and BF16 numerical precision in inference?",
    "answer": "Both FP16 and BF16 consume 2 bytes (16 bits) per parameter. FP16 allocates 1 sign bit, 5 exponent bits, and 10 mantissa bits, offering high precision but a narrow dynamic range prone to underflow/overflow during activations. BF16 allocates 1 sign bit, 8 exponent bits (identical to FP32), and 7 mantissa bits, preserving the wide dynamic range of FP32 and preventing numerical overflow without requiring loss scaling."
  },
  {
    "id": "theory-21",
    "question": "How does tokenization impact inference cost and latency?",
    "answer": "Tokenizers partition text into subwords. If a tokenizer has a small vocabulary or poor compression efficiency for a specific language or code syntax, it produces more tokens for the same raw text. Because both prefill FLOPs and decode iteration counts scale directly with token count, an inefficient tokenizer directly inflates TTFT, slows generation throughput, and increases API serving costs."
  },
  {
    "id": "theory-22",
    "question": "What is Request Preemption in advanced LLM schedulers?",
    "answer": "When GPU VRAM becomes exhausted because concurrent requests generate longer responses than anticipated, the scheduler must prevent an out-of-memory crash. It preempts one or more lower-priority active requests by evicting their KV cache blocks from VRAM (either swapping them to CPU RAM or recomputing them later) to allow higher-priority sequences to complete."
  },
  {
    "id": "theory-23",
    "question": "Explain the role of client-side request cancellation in LLM model serving.",
    "answer": "When a user navigates away, closes their browser tab, or clicks 'Stop Generating', the frontend must close the HTTP SSE connection. If the model server does not detect this disconnection, it continues executing autoregressive decoding until max_tokens is reached, wasting valuable GPU compute and VRAM bandwidth on abandoned outputs."
  },
  {
    "id": "theory-24",
    "question": "What is a Model Gateway and why is it used in production AI architectures?",
    "answer": "A Model Gateway acts as a reverse proxy and abstraction layer between client applications and heterogeneous inference providers (self-hosted vLLM, hosted APIs like Groq or Gemini, local Ollama). It standardizes API request/response schemas (e.g., OpenAI format), handles API key authentication, enforces per-tenant rate limits, executes automated failover, and logs telemetry centrally."
  },
  {
    "id": "theory-25",
    "question": "Explain how Sliding Window Attention reduces KV cache memory for extremely long sessions.",
    "answer": "In standard attention, the KV cache grows indefinitely with sequence length. Sliding Window Attention (used in Mistral models) restricts attention at position i to only the preceding W tokens (e.g., W = 4096). The KV cache is implemented as a fixed-size ring buffer of size W, bounding memory consumption to O(W) regardless of whether the conversation extends to 100,000 tokens."
  },
  {
    "id": "theory-26",
    "question": "What is SmoothQuant and how does it enable 8-bit weight and activation (W8A8) quantization?",
    "answer": "While weights are easy to quantize to INT8, activation tensors contain persistent high-magnitude outliers in specific channels that cause severe accuracy degradation when quantized. SmoothQuant observes that matrix multiplication Y = X * W can be mathematically rewritten as Y = (X * diag(s)^-1) * (diag(s) * W). It migrates the quantization difficulty from activations to weights by dividing activations by a scaling factor s while multiplying weights by s, enabling efficient INT8 matrix multiplication."
  },
  {
    "id": "theory-27",
    "question": "What are the latency and throughput trade-offs of increasing batch size in LLM serving?",
    "answer": "Increasing batch size improves GPU compute efficiency and aggregate throughput (total tokens/sec across all users) because memory bandwidth overhead is amortized across multiple requests. However, per-request latency (TTFT and TPOT) increases because the GPU must process more concurrent attention states, and requests spend more time queued when memory capacity is strained."
  },
  {
    "id": "theory-28",
    "question": "Why is temperature = 0 deterministic in inference?",
    "answer": "In the softmax probability formula P(x_i) = exp(z_i / T) / sum(exp(z_j / T)), as temperature T approaches 0, the probability of the token with the highest logit z_max approaches 1.0, while all other token probabilities approach 0. Decoding collapses to greedy search (argmax), selecting the single most probable next token deterministically at every step."
  },
  {
    "id": "theory-29",
    "question": "What is the role of Triton in modern LLM inference engines?",
    "answer": "Triton is an open-source Python-like programming language and compiler developed by OpenAI for writing highly efficient custom GPU kernels (e.g., PagedAttention, FlashDecoding, fused RMSNorm) without writing complex low-level CUDA C++. It allows inference developers to optimize memory access patterns and register allocations with minimal code complexity."
  },
  {
    "id": "theory-30",
    "question": "Describe the end-to-end lifecycle of an HTTP inference request inside a vLLM server.",
    "answer": "1. The client sends an HTTP POST request to /v1/chat/completions. 2. The FastAPI server validates the schema and enqueues the request. 3. The scheduler checks free PagedAttention physical blocks in VRAM; if available, the request is admitted. 4. Parallel prefill executes across prompt tokens, allocating physical KV blocks and returning TTFT. 5. In continuous decode iterations, each newly generated token is sampled, mapped to the client SSE stream, and appended to the block table. 6. Upon [EOS] generation, the request is evicted, its physical blocks are freed, and the stream terminates with [DONE]."
  }
];

export const quizQuestions = [
  {
    "id": "quiz-01",
    "question": "What is LLM inference?",
    "options": [
      "Updating neural network weights using backpropagation",
      "Generating predictions or responses from an input using a trained, frozen model",
      "Scraping web data to prepare training corpora",
      "Compressing database indexes into B-trees"
    ],
    "correctIndex": 1,
    "explanation": "LLM inference is the execution stage where a trained model with frozen parameters processes inputs to generate outputs without updating its weights."
  },
  {
    "id": "quiz-02",
    "question": "Which phase of LLM inference is compute-bound and processes prompt tokens in parallel?",
    "options": [
      "Decode phase",
      "Prefill phase",
      "Backpropagation phase",
      "Tokenization phase"
    ],
    "correctIndex": 1,
    "explanation": "The Prefill phase processes the entire prompt in parallel, computing Key and Value tensors for all prompt tokens. Because large matrix-matrix operations saturate tensor cores, prefill is compute-bound."
  },
  {
    "id": "quiz-03",
    "question": "Why is the autoregressive decode phase memory-bandwidth bound?",
    "options": [
      "It requires retraining optimizer states at each step",
      "The entire model weight matrix must be streamed from HBM into SRAM to generate a single token",
      "It cannot run on GPUs with Tensor Cores",
      "It stores the entire dataset in CPU cache"
    ],
    "correctIndex": 1,
    "explanation": "During autoregressive decoding, generating each individual token requires loading the full model weight tensor from High Bandwidth Memory (HBM) into compute registers, resulting in low arithmetic intensity."
  },
  {
    "id": "quiz-04",
    "question": "In the KV cache memory formula 2 * L * B * S * H_KV * D_H * Bytes, what does the factor 2 represent?",
    "options": [
      "Two forward passes per token",
      "Key and Value matrices",
      "Double precision floating-point storage",
      "Two GPUs running in tensor parallel"
    ],
    "correctIndex": 1,
    "explanation": "The factor 2 accounts for storing both the Key (K) and Value (V) tensors for each cached sequence position across all layers."
  },
  {
    "id": "quiz-05",
    "question": "How does Grouped-Query Attention (GQA) reduce KV cache memory compared to Multi-Head Attention (MHA)?",
    "options": [
      "By eliminating all attention layers in the transformer",
      "By having multiple Query heads share fewer Key and Value heads",
      "By reducing sequence length to 512 tokens",
      "By training models using integer gradient descent"
    ],
    "correctIndex": 1,
    "explanation": "Grouped-Query Attention (GQA) groups query heads together to share a smaller number of Key/Value heads (e.g. 32 Query heads sharing 8 KV heads), shrinking the KV cache by 4x."
  },
  {
    "id": "quiz-06",
    "question": "What is the primary breakthrough of PagedAttention in vLLM?",
    "options": [
      "Translating Python code to WebAssembly",
      "Managing KV cache memory in non-contiguous physical blocks via virtual page tables, reducing memory waste to <4%",
      "Eliminating the need for GPUs in foundation model serving",
      "Training transformer models without self-attention"
    ],
    "correctIndex": 1,
    "explanation": "PagedAttention applies virtual memory concepts to LLM serving, allocating non-contiguous physical blocks dynamically to eliminate external fragmentation and memory reservation waste."
  },
  {
    "id": "quiz-07",
    "question": "What is continuous batching (iteration-level scheduling)?",
    "options": [
      "Waiting for 100 requests to accumulate before starting execution",
      "Evicting finished sequences and scheduling new incoming requests dynamically at each token generation step",
      "Processing batches only during off-peak night hours",
      "Running all requests sequentially one after another"
    ],
    "correctIndex": 1,
    "explanation": "Continuous batching operates at the token iteration level: completed sequences leave active execution immediately upon emitting [EOS], and new requests enter on the very next step."
  },
  {
    "id": "quiz-08",
    "question": "What is the approximate static weight storage required for a 7B parameter model stored in FP16 precision?",
    "options": [
      "3.5 GB",
      "7 GB",
      "14 GB",
      "28 GB"
    ],
    "correctIndex": 2,
    "explanation": "In FP16, each parameter requires 2 bytes. For 7 billion parameters: 7B * 2 bytes = 14 GB."
  },
  {
    "id": "quiz-09",
    "question": "Which post-training quantization method protects the top 1% salient weights corresponding to high activation channels?",
    "options": [
      "AWQ (Activation-Aware Weight Quantization)",
      "Standard FP32 casting",
      "Linear clipping without scaling",
      "Naive scalar truncation"
    ],
    "correctIndex": 0,
    "explanation": "AWQ identifies that not all weights are equally important; it selectively protects salient weights corresponding to high-magnitude activation channels from quantization noise."
  },
  {
    "id": "quiz-10",
    "question": "What protocol is standardly used for progressive real-time token streaming from server to browser?",
    "options": [
      "FTP (File Transfer Protocol)",
      "Server-Sent Events (SSE)",
      "SNMP (Simple Network Management Protocol)",
      "SOAP XML"
    ],
    "correctIndex": 1,
    "explanation": "Server-Sent Events (SSE) provide a lightweight, unidirectional text streaming protocol built over standard HTTP that delivers tokens incrementally to the client."
  },
  {
    "id": "quiz-11",
    "question": "What does Time to First Token (TTFT) measure?",
    "options": [
      "The time between token 10 and token 20 during generation",
      "The duration from prompt submission until the client receives the first generated token",
      "The time taken to download the model weights from Hugging Face Hub",
      "The GPU temperature during prefill"
    ],
    "correctIndex": 1,
    "explanation": "TTFT measures the complete duration from when a user submits a prompt until the first generated token is received, encompassing queuing, tokenization, and prompt prefill."
  },
  {
    "id": "quiz-12",
    "question": "What is Automatic Prefix Caching (APC) in vLLM?",
    "options": [
      "Deleting prompts longer than 1000 tokens",
      "Reusing precomputed KV cache blocks across requests that share identical prompt prefixes or system instructions",
      "Translating non-English queries to English automatically",
      "Compressing token IDs using gzip"
    ],
    "correctIndex": 1,
    "explanation": "Automatic Prefix Caching hashes prompt token blocks and reuses precomputed KV cache blocks across requests sharing identical system prompts or contexts, dropping TTFT by up to 80%."
  }
];

export const competenciesChecklist = [
  {
    "id": "comp-01",
    "label": "Understand the fundamental differences between training and inference (weights, gradients, and memory)."
  },
  {
    "id": "comp-02",
    "label": "Explain tokenization, embedding lookup, transformer forward passes, logits, and autoregressive generation."
  },
  {
    "id": "comp-03",
    "label": "Differentiate compute-bound parallel prefill from memory-bandwidth-bound sequential decode."
  },
  {
    "id": "comp-04",
    "label": "Calculate Time to First Token (TTFT), Time Per Output Token (TPOT), and End-to-End Latency."
  },
  {
    "id": "comp-05",
    "label": "Design a decoupled model serving architecture (Gateway, Queue, Scheduler, vLLM, and GPU VRAM)."
  },
  {
    "id": "comp-06",
    "label": "Load and execute models using Hugging Face Transformers and understand torch.inference_mode."
  },
  {
    "id": "comp-07",
    "label": "Run and configure local language models using Ollama and custom Modelfiles."
  },
  {
    "id": "comp-08",
    "label": "Explain how vLLM maximizes serving throughput and GPU utilization."
  },
  {
    "id": "comp-09",
    "label": "Understand PagedAttention, block tables, and elimination of internal/external memory fragmentation."
  },
  {
    "id": "comp-10",
    "label": "Explain continuous batching (iteration-level scheduling) vs static and dynamic batching."
  },
  {
    "id": "comp-11",
    "label": "Calculate model weight memory across FP32, FP16/BF16, INT8, and INT4 precisions."
  },
  {
    "id": "comp-12",
    "label": "Calculate KV cache memory using the master formula: 2 * L * B * S * H_KV * D_H * Bytes."
  },
  {
    "id": "comp-13",
    "label": "Compare attention variants: Multi-Head (MHA), Grouped-Query (GQA), and Multi-Query Attention (MQA)."
  },
  {
    "id": "comp-14",
    "label": "Implement real-time token streaming using Server-Sent Events (SSE) and client-side stream readers."
  }
];

export const learningResources = [
  {
    "title": "vLLM Documentation & Architecture Guide",
    "url": "https://docs.vllm.ai/",
    "description": "Official guide covering high-throughput LLM serving, PagedAttention, continuous batching, and OpenAI-compatible server deployment."
  },
  {
    "title": "Hugging Face Transformers Documentation",
    "url": "https://huggingface.co/docs/transformers/",
    "description": "The primary reference for loading pretrained causal language models, tokenizers, generation pipelines, and device mapping."
  },
  {
    "title": "Ollama Official Documentation & Modelfile Reference",
    "url": "https://docs.ollama.com/",
    "description": "Documentation for running, customizing, and serving local language models via Ollama and REST API endpoints."
  },
  {
    "title": "NVIDIA CUDA Documentation & GPU Architecture Guide",
    "url": "https://docs.nvidia.com/cuda/",
    "description": "Foundational technical documentation on GPU memory hierarchy, HBM bandwidth, Tensor Cores, and CUDA execution models."
  },
  {
    "title": "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness",
    "url": "https://github.com/Dao-AILab/flash-attention",
    "description": "Official repository and research paper explaining IO-aware SRAM tiling and quadratic attention speedups."
  }
];
