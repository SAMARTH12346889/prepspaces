const fs = require('fs');
const path = require('path');

const overview = {
  moduleNumber: 20,
  title: "AI Scalability, Optimization & Observability",
  difficulty: "Advanced · Production AI Systems Engineering",
  recommendedDuration: "4–5 weeks · 40–50 study & lab hours",
  primaryStack: "vLLM, PyTorch CUDA, Redis 7, Prometheus, Grafana, OpenTelemetry",
  infrastructure: "Multi-GPU Clusters, Docker, Kubernetes HPA, Envoy / NGINX Load Balancing",
  monitoringStack: "Prometheus Metrics, OpenTelemetry OTLP Traces, Grafana Dashboards & Alertmanager",
  scalingTopologies: "Horizontal Pod Autoscaling, Dynamic Routing, Prefix Caching & Circuit Breaking",
  finalOutcome: "Architect, profile, and operate multi-tenant AI systems serving hundreds of concurrent generation requests with sub-500ms TTFT, deterministic Little's Law capacity planning, zero-OOM memory gating, multi-tier caching, OpenTelemetry distributed tracing, and automated incident recovery."
};

const curriculumUnits = [
  {
    id: "unit-01",
    number: "01",
    title: "AI Scalability Foundations & Little's Law",
    subtitle: "Mathematical Capacity Planning for State-Dependent Generative Workloads",
    summary: "Understand why AI scalability fundamentally diverges from stateless HTTP services: heavy memory-bandwidth bottlenecks, autoregressive iteration loops, long-running open sockets, and mathematical request dimensioning via Little's Law (L = lambda * W).",
    topics: [
      {
        id: "sec-01-1",
        title: "Stateless Web Scalability vs. Autoregressive AI Scalability",
        content: `Traditional web applications scale horizontally by provisioning identical stateless backend replicas querying an indexed relational database. An API endpoint such as GET /api/users/me executes in under 10 milliseconds, uses minimal CPU cycles, and leaves memory free the moment the HTTP frame is transmitted.

In contrast, Generative AI workloads are uniquely computationally heavy and statefully tied to GPU accelerator memory:
1. Tokenization & Embedding Lookup: High-dimensional matrix transformations converting raw prompt strings into dense tensors.
2. Context Prefill Phase: O(N^2) full-sequence attention across thousands of prompt tokens, saturating Tensor Cores.
3. Autoregressive Decode Loop: Token-by-token sequential forward passes where each newly generated token requires reading every model parameter matrix from high-bandwidth memory (HBM) and appending Key/Value representations to local GPU VRAM.
4. Persistent Connection Footprint: Streaming responses (via Server-Sent Events or WebSockets) hold open network file descriptors and server memory for 5 to 30 seconds per request.

Consequently, while a standard web server can handle 10,000 requests per second with 4 CPU cores, a 70B parameter LLM engine running on an 8x A100 (80GB) node can quickly saturate with fewer than 60 concurrent unoptimized user sessions.`
      },
      {
        id: "sec-01-2",
        title: "Core Scalability Metrics: Concurrency, RPS, Throughput & Latency",
        content: `Production AI engineers evaluate infrastructure health using four interconnected dimensions:

1. Concurrent Active Users (C): The number of simultaneous user sessions actively exchanging messages or holding active generation states.
2. Requests Per Second (RPS): The arrival rate of new HTTP/gRPC invocation payloads arriving at the reverse proxy:
   RPS = Total Requests / Total Time (seconds)

3. System Throughput (Tokens/sec): The aggregate rate of newly decoded tokens produced across all GPU execution cores. Note that RPS does not capture computational intensity: 10 requests generating 2,000 tokens require 10x more compute and KV memory than 100 requests generating 20 tokens.
4. Percentile Response Latency: P50 (median), P90, P95, and P99 response durations. In LLMs, P99 latency reveals outlier queue delays and tail-end generation times caused by giant prompt contexts.`
      },
      {
        id: "sec-01-3",
        title: "Little's Law Formulation & Capacity Planning",
        content: `Little's Law is a foundational theorem in queuing theory and distributed capacity planning:
L = lambda * W

Where:
- L: Average number of active requests in the system concurrently (in flight or processing).
- lambda (Arrival Rate): Average rate of incoming requests per unit time (e.g., requests per second).
- W (Mean Residence Time): Average end-to-end duration each request spends in the system from arrival to final token completion.

Mathematical Example:
Suppose PrepSpaces receives lambda = 25 requests per second during peak mock interview hours. If an average interactive response takes W = 3.2 seconds to complete prefill and decode:
L = 25 * 3.2 = 80 concurrent requests in flight.

Engineering Takeaway:
Your inference serving engine must have sufficient active GPU execution slots and KV cache capacity to hold at least 80 simultaneous sequences. If your cluster only has physical VRAM for 40 active sequences, an arrival rate of 25 RPS will cause an unstable, continuously growing queue, driving TTFT toward infinity until requests timeout.`
      }
    ]
  },
  {
    id: "unit-02",
    number: "02",
    title: "Vertical vs. Horizontal Scaling & Load Balancing Topologies",
    subtitle: "Workload Distribution, Least-Connections & Inference-Aware Routing",
    summary: "Contrast hardware scale-up versus multi-replica horizontal clustering. Master L4 vs L7 load balancing algorithms, round-robin limitations for variable prompt lengths, and inference-aware routing based on KV cache pressure.",
    topics: [
      {
        id: "sec-02-1",
        title: "Vertical Scaling (Scale-Up) Limits in AI Hardware",
        content: `Vertical scaling involves swapping an existing server for larger hardware (e.g., upgrading from a 4-core machine with 16GB RAM and a single RTX 4090 to an 8x NVIDIA H100 SXM5 80GB node with NVLink).

Advantages:
- Single-system simplicity: Zero inter-node network serialization or distributed consensus overhead.
- Ultra-fast NVLink communication: 900 GB/s bidirectional interconnects allow smooth tensor parallelism (TP=8) across GPUs.
- Low operational complexity: Single deployment target with simplified monitoring.

Architectural Disadvantages & Hard Limits:
- Single point of failure (SPOF): If the host motherboard, power supply, or PCIe switch fails, the entire application collapses.
- Non-linear cost scaling: An 8x H100 node costs >$300,000 or $25–$35/hour in cloud rental, whereas smaller mid-tier instances offer higher price-to-performance efficiency for moderate workloads.
- Physical ceilings: Once an 8-GPU chassis is fully populated, vertical expansion is impossible without horizontal networking.`
      },
      {
        id: "sec-02-2",
        title: "Horizontal Scaling (Scale-Out) & Independent Inference Replicas",
        content: `Horizontal scaling distributes workloads across multiple independent worker nodes behind a high-performance reverse proxy (e.g., NGINX, Envoy, Traefik, or AWS ALB).

Key Capabilities:
- High Availability & Redundancy: Failure of Worker Instance 3 results in automated health-check eviction; remaining instances absorb the traffic seamlessly.
- Granular Elasticity: Provision or decommission replicas based on diurnal traffic curves (scaling from 2 replicas at night to 16 during peak afternoon hours).
- Heterogeneous Hardware Pools: Route lightweight embedding models to CPU/T4 instances while reserving high-cost A100/H100 pools exclusively for 70B reasoning models.`
      },
      {
        id: "sec-02-3",
        title: "Inference-Aware Load Balancing vs. Naive Algorithms",
        content: `Standard web load balancing algorithms fail catastrophically when applied naively to LLM inference servers:

1. Round Robin: Distributes requests strictly sequentially (1 -> 2 -> 3 -> 1). Problem: If Server 1 receives a 12,000-token prompt analysis while Server 2 receives a 10-token greeting, Server 1 quickly exhausts its VRAM while Server 2 sits idle.
2. Least Connections: Routes to the instance with the fewest open TCP sockets. Better than Round Robin, but still blind to token length and GPU VRAM consumption.
3. Inference-Aware / KV-Pressure Routing (Optimal):
   The load balancer queries custom metrics from each vLLM/TGI replica's /metrics endpoint:
   - vllm:kv_cache_usage_perc (Percentage of KV cache allocated)
   - vllm:num_requests_waiting (Number of queued requests)
   - vllm:gpu_utilization (Compute core load)
   Requests are steered to the node with the lowest KV cache occupancy, preventing CUDA OOM exceptions and minimizing queue latency.`
      }
    ]
  },
  {
    id: "unit-03",
    number: "03",
    title: "GPU Memory Hierarchy & VRAM Allocation Breakdown",
    subtitle: "HBM, SRAM, Compute Cores, Memory Bandwidth & Parameter Footprints",
    summary: "Deconstruct physical GPU architecture from High Bandwidth Memory (HBM) to on-chip SRAM. Derive exact mathematical formulas for static model weights, activation buffers, workspace scratchpads, and runtime allocations.",
    topics: [
      {
        id: "sec-03-1",
        title: "The Physical GPU Memory Hierarchy: Registers, Shared Memory & HBM",
        content: `Accelerated computing relies on a deeply tiered memory hierarchy:
1. Registers & Local Memory: Located directly inside Streaming Multiprocessors (SMs), offering single-cycle read/write latencies but limited to ~64 KB per SM.
2. Shared Memory / L1 Cache: High-speed on-chip SRAM (~128–228 KB per SM in Hopper/Ada architecture) shared among all threads in a CUDA thread block.
3. L2 Cache: On-chip cache (e.g., 50 MB on H100) acting as a high-speed intermediary between SMs and off-chip memory.
4. Global Memory (VRAM / HBM): High Bandwidth Memory (HBM3 on H100 provides up to 3.35 TB/s bandwidth across an 80GB capacity; GDDR6X on RTX 4090 provides 1.0 TB/s across 24GB).
5. Host RAM: System CPU memory connected via PCIe Gen 4/5 (64–128 GB/s). CPU-to-GPU data transfers are 20x to 50x slower than local HBM access and must be aggressively avoided during active generation.`
      },
      {
        id: "sec-03-2",
        title: "Memory Bandwidth Bound vs. Compute Bound Workloads",
        content: `Deep learning workloads alternate between two computational regimes:

1. Compute-Bound (Prefill Phase):
   Processing the initial input prompt executes large Matrix-Matrix Multiplications (GEMM) where thousands of prompt tokens attend to all other prompt tokens. The Arithmetic Intensity (FLOPs per byte of memory accessed) is high, pushing GPU Tensor Cores to 90%+ utilization. Performance scales with raw TFLOPs.

2. Memory-Bandwidth Bound (Autoregressive Decode Phase):
   Generating token N requires multiplying a single-token vector against every weight matrix in the model: a Matrix-Vector Multiplication (GEMV). The Arithmetic Intensity is near 1.0. To produce a single token for a 70B parameter model in FP16, the GPU must stream all 140 GB of model weights from HBM to SMs.
   Maximum decode speed for batch size 1 is strictly governed by:
   Max Tokens/sec = Memory Bandwidth (GB/s) / Model Size (GB)
   On an A100 (2,000 GB/s bandwidth) with a 140 GB 70B model:
   Max single-user speed = 2,000 / 140 = 14.2 tokens/second.`
      },
      {
        id: "sec-03-3",
        title: "The Master VRAM Allocation Equation",
        content: `Total VRAM occupied on a GPU during active serving is precisely decomposed as:
M_total = M_weights + M_KV + M_activations + M_workspace + M_runtime

Where:
- M_weights = Parameters * Bytes_per_param (e.g., 7B * 2 bytes = 14.0 GB for FP16, 7.0 GB for INT8, 3.5 GB for INT4).
- M_KV = Dynamic memory allocated to Key and Value attention tensors across all concurrent active sequences.
- M_activations = Intermediate tensor activations retained during attention computation and forward pass layers.
- M_workspace = Scratchpad memory reserved by CUDA kernels (cuBLAS, FlashAttention, TensorRT-LLM) for temporary matrix tiling.
- M_runtime = PyTorch CUDA context, driver allocations, and framework runtime state (~500 MB to 1.2 GB).`
      }
    ]
  },
  {
    id: "unit-04",
    number: "04",
    title: "KV Cache Mathematical Dimensioning & CUDA OOM Engineering",
    subtitle: "Attention Caching Formulas, Grouped-Query Attention & Paged Memory",
    summary: "Derive the exact KV cache memory formula. Analyze how Grouped-Query Attention (GQA) dramatically compresses cache footprints, and master PyTorch memory allocation forensics to diagnose and prevent fatal CUDA out-of-memory errors.",
    topics: [
      {
        id: "sec-04-1",
        title: "The Universal KV Cache Mathematical Formula",
        content: `During autoregressive decoding, to avoid recomputing Key and Value representations for preceding tokens at every step, transformers store Key and Value vectors in VRAM.

For standard multi-head decoder models:
M_KV = 2 * L * B * S * H_KV * D_H * Bytes

Where:
- 2: Factor representing both Key (K) and Value (V) tensors.
- L: Number of transformer decoder layers (e.g., 32 layers for Llama-3-8B).
- B: Number of concurrent active sequences in the batch.
- S: Sequence length in tokens (prompt context tokens + generated tokens).
- H_KV: Number of Key-Value attention heads per layer (equals Query heads in MHA, but greatly reduced in GQA).
- D_H: Hidden dimension per head (e.g., 128 dimensions).
- Bytes: Precision in bytes (2 bytes for FP16/BF16, 1 byte for FP8).

Step-by-Step Calculation:
Consider Llama-3-8B (L=32, H_KV=8 via GQA, D_H=128, FP16 = 2 bytes):
Per-token KV memory per sequence:
M_per_token = 2 * 32 * 8 * 128 * 2 = 131,072 bytes = 128 KB per token.

For B = 16 concurrent users with S = 4,096 tokens context:
M_KV = 16 * 4,096 * 128 KB = 8,388,608 KB = 8.0 GiB!
Notice that if Multi-Head Attention (MHA with 32 KV heads) were used instead of GQA (8 KV heads), this cache would require 32.0 GiB, immediately exceeding a 24GB GPU!`
      },
      {
        id: "sec-04-2",
        title: "Grouped-Query Attention (GQA) & Multi-Query Attention (MQA)",
        content: `To alleviate the catastrophic VRAM scaling of the KV cache at large batch sizes, modern architectures abandon standard Multi-Head Attention (MHA):

1. Multi-Head Attention (MHA):
   Every Query head has a corresponding Key head and Value head (H_Q = H_KV = 32). Memory ratio: 1:1. Maximum memory consumption.
2. Multi-Query Attention (MQA):
   All Query heads share a single Key head and a single Value head (H_KV = 1). Memory reduction: 32x. Significant memory savings, but potential minor degradation in complex multi-hop reasoning.
3. Grouped-Query Attention (GQA):
   Query heads are clustered into groups (e.g., 4 groups of 8 Query heads sharing 1 Key head and 1 Value head; H_KV = 8 for H_Q = 32). Delivers near-identical accuracy to MHA with a 4x reduction in KV cache memory bandwidth and VRAM usage. Used by Llama-3, Mistral, and Qwen.`
      },
      {
        id: "sec-04-3",
        title: "CUDA Out-of-Memory (OOM) Diagnostics & Prevention",
        content: `When PyTorch throws 'torch.cuda.OutOfMemoryError: CUDA out of memory. Tried to allocate 512.00 MiB', systematic debugging requires inspecting three internal allocator metrics:
- torch.cuda.memory_allocated(): Active live tensor allocations currently referenced by Python variables.
- torch.cuda.memory_reserved(): Total memory held by PyTorch's caching allocator from the CUDA driver.
- torch.cuda.max_memory_allocated(): High-water mark of live allocations since startup.

Primary Root Causes:
1. Virtual Memory Fragmentation: Small tensor allocations interspersed with large tensors create non-contiguous free memory chunks. PyTorch cannot allocate a contiguous 1GB tensor even if 3GB of total free space exists across fragmented blocks. (Mitigated by setting PYTORCH_CUDA_ALLOC_CONF=expandable_segments:True).
2. Unbounded Sequence Lengths: A user sends a prompt with 32,000 tokens when the serving engine was configured for an 8,192 token limit, causing an instant KV cache blowout.
3. Leaked Tensor References: Storing forward pass intermediate tensors in global lists or exception handlers keeps their computation graph alive in VRAM.`
      }
    ]
  },
  {
    id: "unit-05",
    number: "05",
    title: "Latency Optimization: TTFT, TPOT & Percentile Profiling",
    subtitle: "Deconstructing Prefill Delays, Streaming Perceptions & P99 Outliers",
    summary: "Deconstruct end-to-end latency into network, queue, TTFT, and TPOT components. Understand the human perception dynamics of streaming, and engineer latency percentiles (P50, P95, P99) to eradicate tail-latency spikes.",
    topics: [
      {
        id: "sec-05-1",
        title: "The End-to-End Latency Decomposition",
        content: `Every user-perceived AI interaction is a composite chain of distinct operational phases:
T_total = T_network_in + T_auth_gateway + T_queue + T_prefill + T_first_decode + (N_out - 1) * TPOT + T_network_out

Where:
- Time to First Token (TTFT):
  TTFT = T_queue + T_prefill + T_first_decode
  This represents the exact millisecond duration between the user clicking 'Send' and the first character streaming onto their screen.
- Time Per Output Token (TPOT):
  TPOT = (T_generation_after_first_token) / (N_out - 1)
  The average time required to generate each incremental token.
  Generation throughput for a single user is simply 1 / TPOT (e.g., TPOT = 33ms yields 30 tokens/second).`
      },
      {
        id: "sec-05-2",
        title: "Streaming Architecture & Perceived Responsiveness",
        content: `Human cognitive processing reads conversational English at approximately 4 to 8 words per second (~5 to 10 tokens per second).

Non-Streaming Pitfall:
If an interview question generates 300 tokens taking 6.0 seconds total, a non-streaming endpoint forces the candidate to stare at a blank spinner for 6,000 ms before the entire text appears. The system feels sluggish and unresponsive.

Progressive Streaming (SSE):
By optimizing TTFT to 350 ms and streaming tokens via Server-Sent Events (SSE) at 30 tokens/second, the candidate sees words appear before their eyes almost instantly. Even though the overall completion time remains 6.0 seconds, the perceived latency drops from 6,000 ms to 350 ms, resulting in an exceptional user experience.`
      },
      {
        id: "sec-05-3",
        title: "Understanding P50, P95, P99 Latency & Tail Outliers",
        content: `Relying on average (mean) latency is one of the most perilous anti-patterns in production engineering. If 950 users experience a snappy 400 ms response, but 50 users submit 16,000-token resumes that trigger 15-second inference bottlenecks, the arithmetic mean hides the crisis.

- P50 (Median): 50% of requests complete at or below this value. Reflects standard baseline behavior.
- P95: 95% of requests complete at or below this value. Standard SLA baseline for web applications.
- P99: 99% of requests complete at or below this value. Reveals worst-case queue contention, cache miss stampedes, and GPU prefill blocking.

To protect P99 latency:
1. Enforce strict maximum prompt context limits at the API Gateway.
2. Chunk massive background documents out of interactive streaming paths.
3. Configure Chunked Prefill in vLLM to interleave heavy prefill computation with ongoing decode steps.`
      }
    ]
  },
  {
    id: "unit-06",
    number: "06",
    title: "Throughput Optimization & GPU Saturation Curves",
    subtitle: "Tokens/sec, Iteration-Level Continuous Batching & Capacity Clashing",
    summary: "Master aggregate inference throughput measurement. Analyze why static batching starves GPU hardware, and model the non-linear relationship between concurrency, KV cache limits, and the throughput saturation threshold.",
    topics: [
      {
        id: "sec-06-1",
        title: "Aggregate Tokens/sec vs. Requests/sec",
        content: `Aggregate generation throughput measures the global computational productivity of the model serving cluster:
Throughput (tokens/sec) = Total Generated Output Tokens / Elapsed Wall-Clock Time (seconds)

Contrasting RPS and Throughput:
Consider two production clusters handling 100 requests per minute:
- Cluster A serves short classification tasks (prompt: 50 tokens, output: 5 tokens).
  Throughput = (100 * 5) / 60 = 8.3 tokens/second. GPU utilization is 3%.
- Cluster B serves complete Java mock interviews (prompt: 1,500 tokens, output: 600 tokens).
  Throughput = (100 * 600) / 60 = 1,000 tokens/second. GPU utilization is 94%.

Therefore, production capacity sizing and auto-scaling rules must evaluate token production volume rather than raw HTTP request counts.`
      },
      {
        id: "sec-06-2",
        title: "Continuous (Iteration-Level) Batching vs. Static Batching",
        content: `Traditional deep learning engines used static batching: the server waits for N requests to arrive, pads all prompts to the length of the longest prompt, and runs them synchronously.
Fatal Flaws of Static Batching:
1. Padding Waste: If Prompt 1 has 50 tokens and Prompt 2 has 2,000 tokens, Prompt 1 is padded with 1,950 useless padding tokens, consuming massive compute and memory for zero benefit.
2. Early-Exit Starvation: If Request 1 finishes generating in 20 tokens while Request 2 requires 500 tokens, Request 1's GPU slot sits completely idle for 480 iterations until the entire batch finishes.

Continuous Iteration-Level Batching (Orca / vLLM):
At every single forward iteration step, the scheduler inspects the active batch:
- Finished sequences are instantly evicted and their VRAM freed.
- Newly arrived requests are injected into the active batch without waiting for earlier requests to complete.
- Hardware compute cores stay 100% saturated with useful work, boosting aggregate throughput by 4x to 8x.`
      },
      {
        id: "sec-06-3",
        title: "The Saturation Threshold & Bounded Queuing",
        content: `As concurrent requests climb, aggregate throughput increases linearly up to the GPU's memory bandwidth and compute saturation threshold.

Beyond the Saturation Point:
1. Available KV cache blocks become exhausted.
2. The engine can no longer schedule new sequences into the iteration loop.
3. Newly arriving requests are forced into an unbounded waiting queue.
4. TTFT spikes exponentially because requests spend 80%+ of their lifecycle waiting in the queue before their first token is computed.
5. In severe cases, the engine must 'swap' or 'preempt' active sequences to CPU RAM, destroying TPOT.

Production Safeguard: Bounded Queues & Admission Control.
The API Gateway must reject or shed excess load (HTTP 429 Too Many Requests or HTTP 503 Service Unavailable) the instant the queue depth exceeds configured thresholds, protecting in-flight sessions from degradation.`
      }
    ]
  },
  {
    id: "unit-07",
    number: "07",
    title: "Multi-Tier Caching Architectures for AI Workloads",
    subtitle: "Redis Cache-Aside, Prefix Caching, Semantic Similarity & Stampedes",
    summary: "Architect layered caching strategies to bypass redundant inference: Redis exact key matching, TTL invalidation, cache stampede mutex locks, vLLM prompt prefix caching, and embedding-based semantic similarity caches.",
    topics: [
      {
        id: "sec-07-1",
        title: "The Multi-Tier AI Caching Hierarchy",
        content: `Industrial AI platforms deploy three distinct caching layers:
1. Application Response Cache (Redis):
   Stores completed LLM responses for deterministic, identical queries (e.g., standard educational explanations such as 'Explain Java Polymorphism'). Cache hit latency: 2–5 ms. Cost: $0.00.
2. Model KV Prefix Cache (vLLM / RadixAttention):
   Stores precomputed KV tensors for long shared system prompts (e.g., the 2,500-token PrepSpaces Java Interviewer Rubric). Subsequent user prompts sharing this prefix skip the prefill phase entirely, slashing TTFT from 800 ms to 45 ms.
3. Semantic Similarity Cache (Embedding + Vector Search):
   Matches incoming prompts that have different wording but identical intent (e.g., 'What is inheritance in Java?' vs. 'Can you explain how Java inheritance works?'). Queries with cosine similarity > 0.96 return the cached answer immediately.`
      },
      {
        id: "sec-07-2",
        title: "Cache-Aside Pattern & Deterministic Key Hashing",
        content: `In the Cache-Aside pattern:
1. Application hashes prompt parameters using SHA-256:
   Key = sha256(model_id + ":" + temperature + ":" + system_prompt + ":" + user_prompt)
2. Backend queries Redis: cached = await redis.get(key)
3. If HIT: Return cached JSON payload instantly.
4. If MISS: Call inference gateway, stream output to user, and simultaneously store in Redis with an explicit TTL:
   await redis.set(key, json_payload, ex=86400) # 24-hour expiration

Stale Invalidation:
When course material or grading rubrics are updated by instructors, the backend triggers explicit cache invalidation:
await redis.delete_pattern("ai:rubric:java:*")`
      },
      {
        id: "sec-07-3",
        title: "Cache Stampede (Thundering Herd) Prevention",
        content: `A Cache Stampede occurs when a viral, highly accessed cached key expires (or is invalidated). Suddenly, 500 concurrent users experience a simultaneous cache miss. All 500 requests bypass the cache and assault the GPU inference cluster at the exact same millisecond, triggering instant GPU OOM or massive queue delays.

Production Solutions:
1. Distributed Mutex Lock (Redlock / SETNX):
   Only the first request to miss the cache acquires a short-lived lock (SET lock:key token EX 10 NX) and calls the GPU. The other 499 requests await the lock or poll Redis for 500 ms until the single response is generated and populated.
2. Probabilistic Early Expiration (XFetch Algorithm):
   The application periodically checks keys before they expire and probabilistically refreshes them in the background based on access frequency:
   delta * beta * ln(random()) > (expiration - current_time)
3. Request Coalescing (Singleflight Pattern):
   In-memory concurrent flight deduplication ensures only one outbound network call is active for identical hashes.`
      }
    ]
  },
  {
    id: "unit-08",
    number: "08",
    title: "Model-Level Optimization: Quantization & Speculative Decoding",
    subtitle: "AWQ, GPTQ, FP8, Speculative Draft Verification & FlashAttention Tiling",
    summary: "Accelerate raw GPU execution using post-training quantization (AWQ/GPTQ/FP8), speculative decoding with draft-target verification, IO-aware FlashAttention-2 tiling, and prompt compression techniques.",
    topics: [
      {
        id: "sec-08-1",
        title: "Post-Training Quantization: AWQ, GPTQ & Native FP8",
        content: `Quantization reduces the numerical bit-width of model parameters from 16-bit floating point (FP16/BF16) to 8-bit or 4-bit representations:

1. Activation-Aware Weight Quantization (AWQ):
   Protects the top 1% of salient weight channels that carry critical activation magnitude, while quantizing the remaining 99% of weights to 4-bit INT4. Reduces 70B model size from 140 GB to ~38 GB with virtually zero loss in MMLU reasoning benchmarks.
2. GPTQ (Generative Pre-trained Transformer Quantization):
   Second-order Taylor expansion error compensation fitting weights to 4-bit integers layer by layer.
3. Native FP8 (Hopper / Ada Lovelace):
   Modern GPUs natively execute 8-bit floating-point (FP8 E4M3 and E5M2) matrix multiplications in hardware, doubling compute throughput and halving memory bandwidth demands without complex integer dequantization overhead.`
      },
      {
        id: "sec-08-2",
        title: "Speculative Decoding: Draft-Target Acceleration",
        content: `Autoregressive generation is memory-bandwidth bound because large models must read gigabytes of parameters for each single token.

Speculative Decoding Architecture:
1. Small Draft Model (e.g., Llama-3-1B): Fast, lightweight model predicts K candidate future tokens (e.g., K = 5) in rapid succession using minimal memory.
2. Large Target Model (e.g., Llama-3-70B): Runs a single parallel forward pass over all K proposed tokens simultaneously in compute-bound mode.
3. Modified Rejection Sampling: The target model verifies the draft tokens. If tokens 1, 2, and 3 are mathematically approved, all 3 tokens are accepted in the time of a single target forward pass. Token 4 is corrected, and the draft model restarts.

Result: 2x to 3x wall-clock speedup for complex models without altering the mathematical probability distribution of output text.`
      },
      {
        id: "sec-08-3",
        title: "FlashAttention-2 & IO-Aware Tiling",
        content: `Standard self-attention computes:
Attention(Q, K, V) = softmax((Q * K^T) / sqrt(d_k)) * V
In naive PyTorch, computing the intermediate N x N attention matrix for a sequence of 8,192 tokens creates a 67-million-element tensor written to slow HBM and read back for softmax, consuming gigabytes of memory and generating massive memory transfer stalls.

FlashAttention-2 Breakthrough:
Uses GPU on-chip SRAM tiling to compute attention block-by-block without ever materializing the massive N x N intermediate matrix in HBM. By fusing the scale, mask, softmax, and matrix multiplication into a single CUDA kernel, FlashAttention achieves 2x–4x faster attention computation while slashing intermediate activation memory to near zero.`
      }
    ]
  },
  {
    id: "unit-09",
    number: "09",
    title: "Database & Backend Concurrency Optimization",
    subtitle: "Connection Pools, Composite B-Trees, Async Non-Blocking Pipelines",
    summary: "Prevent database connection pool exhaustion and backend thread starvations during concurrent AI surges. Configure asyncpg connection pools, optimize PostgreSQL query plans, and tune ASGI worker processes.",
    topics: [
      {
        id: "sec-09-1",
        title: "Database Connection Pool Sizing & Saturated Queues",
        content: `When 500 candidates simultaneously connect to an interview room, having every incoming request open a direct TCP connection to PostgreSQL will overwhelm the database server, triggering 'FATAL: sorry, too many clients already'.

Connection Pooling Architecture:
FastAPI processes maintain a persistent pool of reusable database connections via SQLAlchemy / asyncpg:
engine = create_async_engine(
    DATABASE_URL,
    pool_size=20,          # Base steady-state open connections
    max_overflow=10,       # Burstable connections during traffic spikes
    pool_timeout=5.0,      # Seconds to wait for an available connection before failing
    pool_recycle=1800      # Reconnect after 30 minutes to clean stale states
)

Sizing Guideline:
Max Connections = ((Core Count * 2) + Effective Spindle Count). A 16-core PostgreSQL instance typically performs best with 32 to 50 active pooled connections. Increasing connection limits beyond hardware capacity causes CPU context-switching thrash, making all queries slower.`
      },
      {
        id: "sec-09-2",
        title: "PostgreSQL Indexing & High-Performance Query Plans",
        content: `Slow queries hold database connections for hundreds of milliseconds, starving the pool.

Anti-Pattern:
SELECT * FROM interview_sessions WHERE user_id = 'user_123' ORDER BY created_at DESC;
Without an index, PostgreSQL executes a full sequential table scan (Seq Scan) across millions of rows.

Optimized Composite B-Tree Index:
CREATE INDEX idx_sessions_user_created ON interview_sessions (user_id, created_at DESC);

EXPLAIN ANALYZE Inspection:
Using EXPLAIN (ANALYZE, BUFFERS) confirms that PostgreSQL switches from a Seq Scan taking 850 ms to an Index Only Scan taking 0.4 ms, a 2,000x speedup.`
      },
      {
        id: "sec-09-3",
        title: "Async ASGI Event Loop Health & Non-Blocking Offloading",
        content: `As established in Module 18, FastAPI runs on Starlette's single-threaded cooperative event loop. If any endpoint performs CPU-heavy work (e.g., synchronous token encoding with tiktoken or PDF parsing) directly in an async def function, the entire event loop freezes.

Golden Rule of Event Loop Concurrency:
- Pure I/O (Database queries, Redis calls, HTTP requests to vLLM): Use async / await with non-blocking drivers (asyncpg, redis.asyncio, httpx).
- Heavy CPU Work (Token counting, cryptographic hashing, vector math): Offload via asyncio.to_thread(worker_func) or dispatch to a Celery worker fleet.`
      }
    ]
  },
  {
    id: "unit-10",
    number: "10",
    title: "Observability Architecture & SRE Four Golden Signals",
    subtitle: "Metrics, Structured Logs, Distributed Tracing & Health Telemetry",
    summary: "Establish complete visibility into production AI clusters. Master the three observability pillars and implement Google's SRE Four Golden Signals (Latency, Traffic, Errors, Saturation) tailored specifically to AI inference.",
    topics: [
      {
        id: "sec-10-1",
        title: "The Three Pillars of Observability in AI Systems",
        content: `Modern AI platforms cannot be monitored with traditional uptime pings alone:
1. Metrics (Aggregated Quantitative Measurements):
   Numerical time-series samples recorded over uniform intervals (e.g., GPU memory utilization, active KV cache blocks, HTTP 500 error count). Ideal for high-level health dashboards and real-time threshold alerting.
2. Structured Logs (Context-Rich Event Records):
   Machine-readable JSON records emitted during specific state transitions containing correlation IDs, token counts, model names, and error stack traces.
3. Distributed Tracing (End-to-End Request Lifecycles):
   Directed acyclic graphs of timed spans tracing a single user interaction across the API gateway, auth service, database, Redis cache, and remote GPU worker nodes.`
      },
      {
        id: "sec-10-2",
        title: "The SRE Four Golden Signals for AI Engineering",
        content: `Google Site Reliability Engineering defines four essential signals for production services, customized here for LLM infrastructure:

1. Latency:
   Measure TTFT and TPOT separately. Fast errors (e.g., immediate 401 Unauthorized in 2ms) must be excluded from inference latency buckets so they do not artificially depress latency percentiles.
2. Traffic:
   Track both API Requests Per Second (RPS) and Token Generation Throughput (tokens/sec). Traffic surges in token production indicate long-context workloads that threaten VRAM.
3. Errors:
   Monitor HTTP 5xx rates, CUDA OOM crashes, provider timeout events (HTTP 504), rate limit backpressure (HTTP 429), and model hallucination/guardrail violation rates.
4. Saturation:
   Track resource fullness before outages occur:
   - GPU VRAM percentage
   - KV Cache allocated blocks
   - Inference request queue depth
   - PostgreSQL connection pool utilization`
      },
      {
        id: "sec-10-3",
        title: "Structured JSON Logging & Cardinality Discipline",
        content: `Production logs must be emitted as single-line JSON objects to standard output for ingestion by Vector, FluentBit, Datadog, or Grafana Loki:
{
  "timestamp": "2026-11-07T10:45:00.123Z",
  "level": "INFO",
  "trace_id": "4bf92f3577b34da6a3ce929d0e0e4736",
  "span_id": "00f067aa0ba902b7",
  "service": "ai-interview-gateway",
  "model": "qwen2.5-coder-7b",
  "prompt_tokens": 1240,
  "completion_tokens": 348,
  "ttft_ms": 320,
  "tpot_ms": 38.5,
  "status_code": 200
}

Cardinality Rule: Never log sensitive candidate credentials, raw prompt text containing personal identifiers (PII), or high-cardinality values as metric label dimensions.`
      }
    ]
  },
  {
    id: "unit-11",
    number: "11",
    title: "Production Monitoring with Prometheus, Grafana & vLLM",
    subtitle: "Metric Types, Exporters, Dashboard Design & Multi-Stage Alerting",
    summary: "Build an enterprise-grade metrics pipeline: instrument FastAPI with prometheus-client, scrape vLLM runtime metrics, design Grafana observability dashboards, and establish proactive multi-tier alerting rules.",
    topics: [
      {
        id: "sec-11-1",
        title: "Prometheus Metric Types: Counter, Gauge, Histogram & Summary",
        content: `Prometheus stores metric time-series identified by metric name and key-value label pairs:

1. Counter: A cumulative metric that only increases (or resets to zero on restart).
   Example: api_requests_total{method="POST", route="/v1/chat", status="200"}.
   Query with rate(api_requests_total[5m]) to compute requests per second.
2. Gauge: A metric representing a single numerical value that can arbitrarily go up or down.
   Example: vllm:kv_cache_usage_perc or gpu_memory_used_bytes.
3. Histogram: Samples observations into configurable buckets and provides sum and count.
   Example: api_request_duration_seconds_bucket{le="0.5"}.
   Essential for computing exact percentiles:
   histogram_quantile(0.95, sum(rate(api_request_duration_seconds_bucket[5m])) by (le))
4. Summary: Calculates configurable quantiles directly on the client side over a sliding time window.`
      },
      {
        id: "sec-11-2",
        title: "Exposing Custom Metrics from FastAPI & Scraping vLLM",
        content: `To collect metrics without degrading application latency:
1. Implement a non-blocking Starlette HTTP middleware capturing request method, route template, HTTP status, and duration using time.perf_counter().
2. Expose a standard /metrics endpoint mounted with make_asgi_app() from prometheus_client.
3. Configure Prometheus scrape configs in prometheus.yml to poll both the FastAPI application and vLLM's internal metrics port (:8000/metrics) at 15-second intervals.

Key vLLM Engine Metrics:
- vllm:num_requests_running: Sequences actively executing in current forward passes.
- vllm:num_requests_waiting: Sequences stalled in the admission queue.
- vllm:gpu_cache_usage_factor: Fractional KV cache allocation (0.0 to 1.0).
- vllm:time_to_first_token_seconds: Prefill and queue latency histogram.`
      },
      {
        id: "sec-11-3",
        title: "Enterprise Grafana Dashboard Design & Actionable Alerting",
        content: `A production AI monitoring dashboard organizes panels into distinct operational tiers:
- Tier 1: Executive Golden Signals (Cluster-wide RPS, P95 TTFT, P95 TPOT, Global Error Rate %).
- Tier 2: Model Serving Telemetry (Running vs Waiting Requests, KV Cache Occupancy %, Token Production Rate).
- Tier 3: GPU Infrastructure (NVIDIA DCGM GPU Utilization %, VRAM Allocation GB, Power Consumption Watts, Temperature Celsius).
- Tier 4: Dependency Latencies (PostgreSQL Connection Pool Depth, Redis Hit Ratio %, External API Gateway Time).

Alertmanager Rule Best Practices:
1. Warning Alert: KV Cache Occupancy > 85% for 3 consecutive minutes -> Auto-scale inference replicas.
2. Critical Alert: Waiting Requests > 50 OR P95 TTFT > 4.0s for 2 minutes -> Page on-call SRE via PagerDuty.
3. Emergency Alert: CUDA OOM errors > 0 -> Trigger immediate circuit breaking and request shedding.`
      }
    ]
  },
  {
    id: "unit-12",
    number: "12",
    title: "OpenTelemetry Tracing, Cloud Economics & Incident Recovery",
    subtitle: "OTel Spans, Token Billing Models, HPA Autoscaling & Production Postmortems",
    summary: "Instrument end-to-end distributed tracing across microservices using OpenTelemetry. Formulate cloud token billing economics (hosted APIs vs self-hosted GPUs), configure Kubernetes HPA with custom metrics, and lead blameless production postmortems.",
    topics: [
      {
        id: "sec-12-1",
        title: "Distributed Tracing with OpenTelemetry (OTel)",
        content: `When an interview evaluation spans multiple microservices, a single slow request cannot be diagnosed from logs alone.
OpenTelemetry provides open standards and SDKs to propagate context across network boundaries:
1. Trace ID: Unique 128-bit identifier shared across all services handling a given user request.
2. Span: Named timed operation representing work done by a specific component (e.g., 'fastapi.auth', 'redis.cache_check', 'vllm.generate', 'postgres.save_score').
3. Context Propagation: The traceparent header (W3C standard) is passed in HTTP headers across microservices.

Using Jaeger or Grafana Tempo, engineers can inspect a visual timeline waterfall showing that out of a 4,500 ms request, 30 ms was spent in the gateway, 5 ms in Redis, and 4,465 ms inside the vLLM model inference engine, instantly isolating the bottleneck.`
      },
      {
        id: "sec-12-2",
        title: "Cloud AI Infrastructure Economics: Hosted APIs vs. Self-Hosted GPUs",
        content: `Financial sustainability requires continuous mathematical cost modeling:

1. Hosted LLM APIs (e.g., OpenAI, Anthropic, Google Gemini):
   Cost formula: C_API = (T_in / 1,000,000) * P_in + (T_out / 1,000,000) * P_out
   Pros: Zero idle hardware costs, zero hardware maintenance overhead.
   Cons: Unit costs scale linearly with volume; expensive at sustained massive throughput.

2. Dedicated Self-Hosted GPUs (e.g., AWS EC2 g5.12xlarge with 4x A10G at $5.67/hr):
   Cost per token depends directly on GPU utilization:
   Cost_per_million_tokens = (Hourly_Instance_Cost) / (Sustained_Tokens_Per_Hour / 1,000,000)
   At 85% steady-state utilization producing 4,000 tokens/sec:
   Tokens/hr = 4,000 * 3,600 = 14,400,000 tokens.
   Cost per million = $5.67 / 14.4 = $0.39 / million tokens.
   However, if the server sits idle at night (10% utilization), cost per million skyrockets to $3.94!
   Rule of Thumb: Self-hosting is cost-effective only when sustained utilization exceeds 50–60%.`
      },
      {
        id: "sec-12-3",
        title: "Autoscaling, Circuit Breakers & Blameless Postmortems",
        content: `1. Kubernetes Horizontal Pod Autoscaling (HPA):
   Standard CPU/Memory metrics are useless for GPU scaling. Engineers deploy Prometheus Adapter or KEDA (Kubernetes Event-driven Autoscaling) to scale GPU inference pods based on custom metrics such as vllm:num_requests_waiting > 10.

2. Circuit Breaker Pattern:
   Protects upstream infrastructure when a model server fails:
   - Closed: All traffic flows normally.
   - Open: When failure rate exceeds 15% over a 30s window, the breaker trips. Requests fail fast (or fall back to a lightweight backup model) without hitting the broken GPU.
   - Half-Open: After 60 seconds, a small probe traffic stream tests recovery.

3. Blameless Post-Incident Reviews:
   Document timeline, root causes, detection gaps, mitigation steps, and systemic preventions (e.g., adding admission control or tuning connection pools) without assigning personal blame.`
      }
    ]
  }
];

const practicalLabs = [
  {
    id: "lab-01",
    number: "01",
    title: "GPU Memory Profiling & PyTorch VRAM Auditing",
    duration: "45 mins",
    difficulty: "Advanced",
    summary: "Profile exact GPU VRAM allocations across model weights, activations, and KV cache using PyTorch CUDA memory APIs, and test memory expansion limits under varying context lengths.",
    code: `import torch
import gc
import os

def print_vram_stats(label=""):
    if not torch.cuda.is_available():
        print(f"[{label}] CUDA unavailable - running on CPU simulation")
        return
    allocated = torch.cuda.memory_allocated() / (1024 ** 3)
    reserved = torch.cuda.memory_reserved() / (1024 ** 3)
    max_alloc = torch.cuda.max_memory_allocated() / (1024 ** 3)
    print(f"[{label:^25}] Allocated: {allocated:6.2f} GiB | Reserved: {reserved:6.2f} GiB | Peak: {max_alloc:6.2f} GiB")

def simulate_kv_cache_growth(layers=32, heads=8, head_dim=128, precision_bytes=2):
    """
    Simulates memory required by KV cache as context length expands.
    Formula: 2 * L * B * S * H_KV * D_H * Bytes
    """
    print("\\n=== KV CACHE MEMORY DIMENSIONING PROFILE ===")
    batch_sizes = [1, 8, 16, 32]
    sequence_lengths = [1024, 4096, 8192, 16384]
    
    print(f"{'Batch':<8}{'Seq Len':<12}{'KV Cache (MiB)':<18}{'KV Cache (GiB)':<16}")
    print("-" * 54)
    for b in batch_sizes:
        for s in sequence_lengths:
            bytes_total = 2 * layers * b * s * heads * head_dim * precision_bytes
            mib = bytes_total / (1024 ** 2)
            gib = bytes_total / (1024 ** 3)
            print(f"{b:<8}{s:<12}{mib:<18.1f}{gib:<16.2f}")

if __name__ == "__main__":
    if torch.cuda.is_available():
        torch.cuda.empty_cache()
        torch.cuda.reset_peak_memory_stats()
        print_vram_stats("Initial Baseline")

        # 1. Simulate Model Parameter Loading (e.g. 7B model in FP16 = 14 GB)
        print("\\n[1] Allocating simulated 7B parameter tensor (FP16)...")
        # For demonstration on smaller GPUs, allocate 2GB chunk
        sim_weights = torch.randn((512, 1024, 1024), dtype=torch.float16, device="cuda")
        print_vram_stats("After Weights Loaded")

        # 2. Simulate KV Cache Buffer Allocation
        print("\\n[2] Allocating simulated KV Cache buffer (Batch=8, Len=4096)...")
        kv_buffer = torch.randn((8, 32, 4096, 128), dtype=torch.float16, device="cuda")
        print_vram_stats("After KV Cache Buffer")

        # 3. Clean up
        del sim_weights, kv_buffer
        gc.collect()
        torch.cuda.empty_cache()
        print_vram_stats("After Garbage Collection")
    else:
        print("CUDA device not detected. Executing theoretical KV cache analysis:")
        simulate_kv_cache_growth()`
  },
  {
    id: "lab-02",
    number: "02",
    title: "End-to-End Latency & Throughput Benchmark Suite",
    duration: "60 mins",
    difficulty: "Advanced",
    summary: "Build an asynchronous benchmarking harness to calculate TTFT, TPOT, P50, P95, and P99 percentiles under varying concurrent request arrival rates.",
    code: `import asyncio
import time
import statistics
import random

class InferenceBenchmarkRunner:
    def __init__(self, concurrency_levels=[1, 5, 10, 25]):
        self.concurrency_levels = concurrency_levels

    async def mock_streaming_inference(self, request_id: int, prompt_tokens: int, max_tokens: int):
        """Simulates LLM inference with queue delay, prefill, and decode loops."""
        t_start = time.perf_counter()
        
        # Simulate prefill time (O(N) scaled)
        prefill_latency = 0.05 + (prompt_tokens * 0.0001) + random.uniform(0.01, 0.04)
        await asyncio.sleep(prefill_latency)
        t_first_token = time.perf_counter()
        ttft = t_first_token - t_start

        # Simulate decode tokens (autoregressive TPOT ~35ms)
        token_times = []
        for _ in range(max_tokens):
            token_step = random.gauss(0.035, 0.005)
            await asyncio.sleep(max(0.01, token_step))
            token_times.append(time.perf_counter())

        t_end = time.perf_counter()
        total_duration = t_end - t_start
        tpot = (t_end - t_first_token) / max(1, max_tokens)
        
        return {
            "req_id": request_id,
            "ttft": ttft,
            "tpot": tpot,
            "total_latency": total_duration,
            "tokens_generated": max_tokens
        }

    async def run_load_tier(self, concurrency: int, num_requests: int = 50):
        sem = asyncio.Semaphore(concurrency)
        tasks = []

        async def worker(idx):
            async with sem:
                # Random prompt between 200 and 1500 tokens, output between 50 and 250 tokens
                p_tokens = random.randint(200, 1500)
                out_tokens = random.randint(50, 250)
                return await self.mock_streaming_inference(idx, p_tokens, out_tokens)

        t_batch_start = time.perf_counter()
        results = await asyncio.gather(*(worker(i) for i in range(num_requests)))
        t_batch_end = time.perf_counter()

        elapsed = t_batch_end - t_batch_start
        total_tokens = sum(r["tokens_generated"] for r in results)
        throughputs = total_tokens / elapsed

        latencies = sorted(r["total_latency"] for r in results)
        ttfts = sorted(r["ttft"] for r in results)

        p50 = statistics.median(latencies)
        p95 = latencies[int(len(latencies) * 0.95)]
        p99 = latencies[int(len(latencies) * 0.99)]

        print(f"\\n--- Concurrency: {concurrency} (Total Requests: {num_requests}) ---")
        print(f"Wall Clock Time:    {elapsed:6.2f} s")
        print(f"Total Tokens:       {total_tokens:6d} tokens")
        print(f"Throughput:         {throughputs:6.2f} tokens/sec")
        print(f"Mean TTFT:          {statistics.mean(ttfts)*1000:6.1f} ms")
        print(f"P50 Latency:        {p50:6.2f} s")
        print(f"P95 Latency:        {p95:6.2f} s")
        print(f"P99 Latency:        {p99:6.2f} s")

if __name__ == "__main__":
    runner = InferenceBenchmarkRunner()
    asyncio.run(runner.run_load_tier(concurrency=1, num_requests=10))
    asyncio.run(runner.run_load_tier(concurrency=10, num_requests=30))`
  },
  {
    id: "lab-03",
    number: "03",
    title: "Redis Cache-Aside & Stampede Mutex Guard",
    duration: "45 mins",
    difficulty: "Advanced",
    summary: "Implement an enterprise-grade Redis caching layer with SHA-256 deterministic key generation, TTL management, and Redlock distributed mutex to prevent cache stampedes.",
    code: `import asyncio
import hashlib
import json
import redis.asyncio as aioredis
from fastapi import FastAPI, HTTPException

app = FastAPI(title="PrepSpaces High-Performance AI Caching Layer")

# Initialize Redis client
redis_client = aioredis.from_url("redis://localhost:6379", decode_responses=True)

def generate_cache_key(model: str, system_prompt: str, user_prompt: str, temperature: float) -> str:
    raw_payload = f"{model}:{system_prompt.strip()}:{user_prompt.strip()}:{temperature:.2f}"
    return f"ai:cache:{hashlib.sha256(raw_payload.encode('utf-8')).hexdigest()}"

async def simulate_expensive_model_inference(prompt: str) -> str:
    # Simulates a 3.5s heavy GPU LLM forward pass
    await asyncio.sleep(3.5)
    return f"Comprehensive technical analysis for query: {prompt}"

@app.post("/v1/interview/explain")
async def get_cached_or_compute_explanation(prompt: str):
    model = "qwen2.5-coder-7b"
    system_rubric = "You are an expert Java systems architect."
    cache_key = generate_cache_key(model, system_rubric, prompt, 0.2)
    lock_key = f"lock:{cache_key}"

    # 1. Attempt Cache Read
    cached_val = await redis_client.get(cache_key)
    if cached_val:
        return {
            "source": "redis_cache_hit",
            "latency_type": "sub_5ms",
            "data": json.loads(cached_val)
        }

    # 2. Cache Miss: Prevent Cache Stampede using Distributed Mutex
    # Acquire non-blocking lock with 10s auto-expiry
    acquired_lock = await redis_client.set(lock_key, "locked", nx=True, ex=10)
    
    if not acquired_lock:
        # Another worker is already generating this answer. Poll cache briefly
        for _ in range(20):
            await asyncio.sleep(0.2)
            cached_val = await redis_client.get(cache_key)
            if cached_val:
                return {
                    "source": "coalesced_cache_hit",
                    "latency_type": "polled_coalesced",
                    "data": json.loads(cached_val)
                }
        raise HTTPException(status_code=504, detail="Upstream inference lock timed out")

    # 3. Only the lock winner executes the expensive model call
    try:
        response_text = await simulate_expensive_model_inference(prompt)
        payload = {"answer": response_text, "model": model}
        
        # Store in Redis with 24-hour TTL (86400s)
        await redis_client.set(cache_key, json.dumps(payload), ex=86400)
        return {
            "source": "gpu_inference_miss",
            "latency_type": "full_forward_pass",
            "data": payload
        }
    finally:
        # Always release the distributed lock
        await redis_client.delete(lock_key)`
  },
  {
    id: "lab-04",
    number: "04",
    title: "Prometheus Middleware & FastAPI Observability",
    duration: "50 mins",
    difficulty: "Advanced",
    summary: "Instrument FastAPI with prometheus-client to emit real-time HTTP metrics, latency histograms, and vLLM-compatible inference gauges with zero event-loop blocking.",
    code: `from time import perf_counter
from fastapi import FastAPI, Request
from prometheus_client import Counter, Histogram, Gauge, make_asgi_app

app = FastAPI(title="PrepSpaces AI API Gateway")

# 1. Define Prometheus Metrics
HTTP_REQUESTS_TOTAL = Counter(
    "prepspaces_http_requests_total",
    "Total HTTP requests received",
    ["method", "endpoint", "status"]
)

HTTP_REQUEST_DURATION_SECONDS = Histogram(
    "prepspaces_http_request_duration_seconds",
    "HTTP request latency in seconds",
    ["endpoint"],
    buckets=[0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0, 10.0]
)

AI_ACTIVE_STREAMS = Gauge(
    "prepspaces_ai_active_streams",
    "Number of currently open generative streaming responses"
)

AI_GENERATED_TOKENS_TOTAL = Counter(
    "prepspaces_ai_generated_tokens_total",
    "Total cumulative output tokens streamed to clients",
    ["model"]
)

# 2. Latency & Traffic Tracking Middleware
@app.middleware("http")
async def prometheus_metrics_middleware(request: Request, call_next):
    start_time = perf_counter()
    status_code = "500"
    
    try:
        response = await call_next(request)
        status_code = str(response.status_code)
        return response
    finally:
        duration = perf_counter() - start_time
        # Use route template instead of raw URL to avoid metric cardinality explosion
        route_scope = request.scope.get("route")
        endpoint_path = getattr(route_scope, "path", "unmatched")
        
        HTTP_REQUESTS_TOTAL.labels(
            method=request.method,
            endpoint=endpoint_path,
            status=status_code
        ).inc()
        
        HTTP_REQUEST_DURATION_SECONDS.labels(
            endpoint=endpoint_path
        ).observe(duration)

# 3. Mount Prometheus Metrics Exporter
metrics_app = make_asgi_app()
app.mount("/metrics", metrics_app)

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "ai-gateway"}`
  },
  {
    id: "lab-05",
    number: "05",
    title: "Circuit Breaker Implementation with Fallback Routing",
    duration: "45 mins",
    difficulty: "Advanced",
    summary: "Build an asynchronous Circuit Breaker state machine (Closed, Open, Half-Open) with failure rate thresholds, reset timeout countdowns, and automated fallback model routing.",
    code: `import asyncio
import time
from enum import Enum

class CircuitState(Enum):
    CLOSED = "CLOSED"      # Normal operation: traffic flows to primary model
    OPEN = "OPEN"          # Trip state: primary model failing, traffic fails fast or diverts
    HALF_OPEN = "HALF_OPEN"# Trial state: send limited probe requests to verify recovery

class AICircuitBreaker:
    def __init__(self, failure_threshold=3, recovery_time=15.0):
        self.failure_threshold = failure_threshold
        self.recovery_time = recovery_time
        self.state = CircuitState.CLOSED
        self.failure_count = 0
        self.last_failure_time = 0.0

    def record_success(self):
        if self.state == CircuitState.HALF_OPEN:
            print("[CircuitBreaker] Probe succeeded. Resetting state to CLOSED.")
        self.state = CircuitState.CLOSED
        self.failure_count = 0

    def record_failure(self):
        self.failure_count += 1
        self.last_failure_time = time.time()
        print(f"[CircuitBreaker] Failure recorded ({self.failure_count}/{self.failure_threshold})")
        if self.failure_count >= self.failure_threshold:
            self.state = CircuitState.OPEN
            print("[CircuitBreaker] THRESHOLD EXCEEDED. Tripping circuit to OPEN.")

    def allow_request(self) -> bool:
        if self.state == CircuitState.CLOSED:
            return True
        if self.state == CircuitState.OPEN:
            # Check if recovery cooldown has expired
            if (time.time() - self.last_failure_time) > self.recovery_time:
                self.state = CircuitState.HALF_OPEN
                print("[CircuitBreaker] Cooldown expired. Entering HALF_OPEN trial state.")
                return True
            return False
        if self.state == CircuitState.HALF_OPEN:
            # In half-open, allow only single probe requests
            return True
        return False

async def primary_gpu_inference():
    # Simulates an unstable or crashing GPU cluster
    raise TimeoutError("vLLM primary cluster connection timed out (CUDA OOM)")

async def fallback_lightweight_inference(prompt: str):
    # Reliable backup lightweight API model
    await asyncio.sleep(0.3)
    return f"Fallback Model response for: {prompt}"

async def robust_ai_router(breaker: AICircuitBreaker, prompt: str):
    if breaker.allow_request():
        try:
            print("\\nRouting to Primary High-End GPU Cluster...")
            res = await primary_gpu_inference()
            breaker.record_success()
            return res
        except Exception as e:
            print(f"Primary GPU Cluster failed: {e}")
            breaker.record_failure()
    
    # Fallback path executed when circuit is OPEN or primary fails
    print("Executing Graceful Fallback Model Route...")
    return await fallback_lightweight_inference(prompt)`
  }
];

const capstoneProject = {
  title: "Enterprise AI Scalability, Optimization & Observability Platform",
  duration: "2 Weeks · Production Capstone Implementation",
  overview: "Architect and deploy an enterprise-grade AI serving infrastructure capable of handling 1,000 concurrent mock interview candidates on PrepSpaces. The platform integrates continuous iteration-level batching, Redis multi-tier caching, inference-aware load balancing, Prometheus & Grafana telemetry dashboards, and an automated circuit breaker with secondary fallback routing.",
  architectureMilestones: [
    {
      phase: "Milestone 1: Dynamic Capacity Planning & GPU Profiling",
      tasks: [
        "Formulate Little's Law capacity dimensions for 1,000 peak concurrent users (L = lambda * W).",
        "Calculate exact parameter memory, GQA KV cache dimensions, and activation overheads for target 8B and 70B models.",
        "Implement PyTorch CUDA memory profiling scripts to benchmark peak VRAM usage under varying context limits."
      ]
    },
    {
      phase: "Milestone 2: Multi-Tier Caching & Stampede Protection",
      tasks: [
        "Deploy a Redis 7 cluster implementing deterministic SHA-256 prompt response caching with configurable TTLs.",
        "Implement a distributed Redlock mutex preventing thundering herd cache stampedes during concurrent cache misses.",
        "Configure vLLM prefix caching (RadixAttention) to share KV blocks across the 2,000-token Java interview rubric."
      ]
    },
    {
      phase: "Milestone 3: Observability Pipeline & Golden Signal Dashboards",
      tasks: [
        "Instrument FastAPI with prometheus-client capturing TTFT, TPOT, HTTP status, and stream durations.",
        "Configure Prometheus to scrape FastAPI and vLLM (:8000/metrics) with 15-second scrape intervals.",
        "Build an authoritative Grafana dashboard visualizing P50/P95/P99 latencies, KV cache occupancy %, and GPU metrics."
      ]
    },
    {
      phase: "Milestone 4: Resilient Incident Management & Autoscaling Gating",
      tasks: [
        "Implement an asynchronous Circuit Breaker state machine (Closed, Open, Half-Open) with automated fallback routing.",
        "Configure Kubernetes Horizontal Pod Autoscaler (HPA) using custom metrics from Prometheus (vllm:num_requests_waiting).",
        "Author a complete production incident postmortem for a simulated CUDA OOM cascade."
      ]
    }
  ],
  deliverables: [
    "Production-ready FastAPI and vLLM orchestration code with streaming SSE handlers.",
    "Redis Cache-Aside implementation with Redlock distributed mutex stampede protection.",
    "Comprehensive Prometheus scrape configurations and Grafana JSON dashboard definitions.",
    "Locust load testing benchmark script generating 500 concurrent streaming user sessions.",
    "Mathematical Little's Law and VRAM capacity planning whitepaper for PrepSpaces.",
    "Production Incident Response Playbook and blameless postmortem report."
  ]
};

const codingAssignments = [
  {
    id: "task-01",
    title: "Calculate Little's Law Concurrency",
    difficulty: "Easy",
    instructions: "Write a Python function 'calculate_littles_law(arrival_rate, avg_duration)' that returns the average concurrent requests in the system, validating against negative inputs.",
    starterCode: `def calculate_littles_law(arrival_rate: float, avg_duration_seconds: float) -> float:
    """
    Computes average concurrent requests: L = lambda * W
    Raises ValueError for negative inputs.
    """
    if arrival_rate < 0 or avg_duration_seconds < 0:
        raise ValueError("Arrival rate and duration must be non-negative")
    return arrival_rate * avg_duration_seconds`
  },
  {
    id: "task-02",
    title: "KV Cache VRAM Dimensioning Calculator",
    difficulty: "Medium",
    instructions: "Implement 'calculate_kv_cache_bytes(layers, batch_size, seq_len, kv_heads, head_dim, bytes_per_elem)' using the formula 2 * L * B * S * H_KV * D_H * Bytes.",
    starterCode: `def calculate_kv_cache_bytes(
    layers: int,
    batch_size: int,
    seq_len: int,
    kv_heads: int,
    head_dim: int,
    bytes_per_elem: int = 2
) -> int:
    """
    Returns total KV cache size in bytes.
    """
    return 2 * layers * batch_size * seq_len * kv_heads * head_dim * bytes_per_elem`
  },
  {
    id: "task-03",
    title: "Total Approximate VRAM Planning Formula",
    difficulty: "Medium",
    instructions: "Write a function 'estimate_total_vram_gib(params_billion, precision_bytes, kv_cache_gib, workspace_gib=2.0)' that sums static weights, KV cache, and workspace overhead.",
    starterCode: `def estimate_total_vram_gib(
    params_billion: float,
    precision_bytes: int,
    kv_cache_gib: float,
    workspace_gib: float = 2.0
) -> float:
    # 1 Billion params * precision bytes in GiB (1 GiB = 1024^3 bytes)
    weight_gib = (params_billion * 1e9 * precision_bytes) / (1024 ** 3)
    return weight_gib + kv_cache_gib + workspace_gib`
  },
  {
    id: "task-04",
    title: "Compute TTFT and TPOT from Latency Traces",
    difficulty: "Easy",
    instructions: "Implement 'compute_token_metrics(t_request_start, t_first_token, t_completion, total_tokens)' returning TTFT and TPOT in milliseconds.",
    starterCode: `def compute_token_metrics(t_request_start: float, t_first_token: float, t_completion: float, total_tokens: int):
    ttft_ms = (t_first_token - t_request_start) * 1000.0
    decode_duration = t_completion - t_first_token
    tpot_ms = (decode_duration / max(1, total_tokens - 1)) * 1000.0
    return {"ttft_ms": ttft_ms, "tpot_ms": tpot_ms}`
  },
  {
    id: "task-05",
    title: "Calculate Exact Latency Percentiles (P50, P95, P99)",
    difficulty: "Medium",
    instructions: "Write a function 'compute_latency_percentiles(durations)' that sorts a list of float latencies and returns a dictionary with P50, P90, P95, and P99 values.",
    starterCode: `def compute_latency_percentiles(durations: list) -> dict:
    if not durations:
        return {}
    s = sorted(durations)
    n = len(s)
    return {
        "p50": s[int(n * 0.50)],
        "p90": s[int(n * 0.90)],
        "p95": s[int(n * 0.95)],
        "p99": s[min(n - 1, int(n * 0.99))]
    }`
  },
  {
    id: "task-06",
    title: "Deterministic Prompt Hash Key Generator",
    difficulty: "Easy",
    instructions: "Write 'generate_redis_key(model, system_prompt, user_prompt, temp)' that produces a deterministic SHA-256 Redis key.",
    starterCode: `import hashlib

def generate_redis_key(model: str, system_prompt: str, user_prompt: str, temp: float) -> str:
    raw = f"{model.lower()}:{system_prompt.strip()}:{user_prompt.strip()}:{temp:.2f}"
    digest = hashlib.sha256(raw.encode("utf-8")).hexdigest()
    return f"ai:resp:{digest}"`
  },
  {
    id: "task-07",
    title: "Redis Cache Invalidation by Key Prefix",
    difficulty: "Medium",
    instructions: "Implement an async function 'invalidate_cache_pattern(redis_client, pattern)' that scans and deletes keys matching the given glob pattern.",
    starterCode: `async def invalidate_cache_pattern(redis_client, pattern: str) -> int:
    cursor = 0
    deleted_count = 0
    while True:
        cursor, keys = await redis_client.scan(cursor=cursor, match=pattern, count=100)
        if keys:
            deleted_count += await redis_client.delete(*keys)
        if cursor == 0:
            break
    return deleted_count`
  },
  {
    id: "task-08",
    title: "Hosted API Cost Estimator",
    difficulty: "Easy",
    instructions: "Implement 'estimate_api_cost(input_tokens, output_tokens, price_per_m_in, price_per_m_out)' returning total cost in USD.",
    starterCode: `def estimate_api_cost(input_tokens: int, output_tokens: int, price_per_m_in: float, price_per_m_out: float) -> float:
    cost_in = (input_tokens / 1_000_000.0) * price_per_m_in
    cost_out = (output_tokens / 1_000_000.0) * price_per_m_out
    return cost_in + cost_out`
  },
  {
    id: "task-09",
    title: "Self-Hosted GPU Cost per Million Tokens",
    difficulty: "Medium",
    instructions: "Implement 'compute_gpu_token_cost(hourly_rate, avg_tokens_per_sec, utilization_ratio)' calculating cost per 1M output tokens.",
    starterCode: `def compute_gpu_token_cost(hourly_rate: float, avg_tokens_per_sec: float, utilization_ratio: float) -> float:
    effective_tokens_per_hour = (avg_tokens_per_sec * 3600.0) * utilization_ratio
    if effective_tokens_per_hour == 0:
        return float('inf')
    return (hourly_rate / effective_tokens_per_hour) * 1_000_000.0`
  },
  {
    id: "task-10",
    title: "PyTorch VRAM Leak Detector",
    difficulty: "Medium",
    instructions: "Write a function 'assert_no_vram_leak(func, *args)' that executes a forward pass and asserts that allocated VRAM returns to baseline after GC.",
    starterCode: `import torch, gc

def assert_no_vram_leak(func, *args):
    if not torch.cuda.is_available():
        return True
    gc.collect()
    torch.cuda.empty_cache()
    before = torch.cuda.memory_allocated()
    func(*args)
    gc.collect()
    torch.cuda.empty_cache()
    after = torch.cuda.memory_allocated()
    assert after <= before + 1024, f"Memory leak detected: {after - before} bytes remained allocated"`
  },
  {
    id: "task-11",
    title: "Prometheus Counter Middleware Logger",
    difficulty: "Medium",
    instructions: "Write a helper function to format Prometheus counter lines compliant with OpenMetrics text format.",
    starterCode: `def format_prometheus_counter(metric_name: str, labels: dict, value: int) -> str:
    label_str = ",".join(f'{k}="{v}"' for k, v in sorted(labels.items()))
    return f"{metric_name}{{{label_str}}} {value}"`
  },
  {
    id: "task-12",
    title: "Inference-Aware Load Balancer Replica Selector",
    difficulty: "Hard",
    instructions: "Write 'select_best_replica(replicas)' that selects the replica with the lowest KV cache usage from a list of replica dictionaries.",
    starterCode: `def select_best_replica(replicas: list) -> dict:
    # Filter healthy replicas
    healthy = [r for r in replicas if r.get("healthy", False)]
    if not healthy:
        raise RuntimeError("No healthy replicas available")
    # Score based on kv_cache_usage_perc ascending, then num_waiting ascending
    return min(healthy, key=lambda x: (x.get("kv_cache_usage_perc", 100), x.get("num_waiting", 999)))`
  },
  {
    id: "task-13",
    title: "SRE Availability Downtime Calculator",
    difficulty: "Easy",
    instructions: "Write 'calculate_downtime_budget(availability_pct, days=30)' returning allowed downtime in minutes.",
    starterCode: `def calculate_downtime_budget(availability_pct: float, days: int = 30) -> float:
    total_minutes = days * 24 * 60
    unavailability_fraction = (100.0 - availability_pct) / 100.0
    return total_minutes * unavailability_fraction`
  },
  {
    id: "task-14",
    title: "OpenTelemetry Traceparent Header Parser",
    difficulty: "Medium",
    instructions: "Implement 'parse_traceparent_header(header_val)' that extracts version, trace_id, parent_id, and trace_flags from W3C header.",
    starterCode: `def parse_traceparent_header(header: str) -> dict:
    parts = header.strip().split("-")
    if len(parts) != 4:
        raise ValueError("Invalid W3C traceparent header format")
    return {
        "version": parts[0],
        "trace_id": parts[1],
        "parent_id": parts[2],
        "flags": parts[3]
    }`
  },
  {
    id: "task-15",
    title: "Token Bucket Concurrency Rate Limiter",
    difficulty: "Medium",
    instructions: "Implement an in-memory Token Bucket class with capacity, refill_rate, and acquire() method.",
    starterCode: `import time

class TokenBucket:
    def __init__(self, capacity: float, refill_rate: float):
        self.capacity = capacity
        self.refill_rate = refill_rate
        self.tokens = capacity
        self.last_update = time.time()

    def acquire(self, tokens: float = 1.0) -> bool:
        now = time.time()
        elapsed = now - self.last_update
        self.tokens = min(self.capacity, self.tokens + elapsed * self.refill_rate)
        self.last_update = now
        if self.tokens >= tokens:
            self.tokens -= tokens
            return True
        return False`
  },
  {
    id: "task-16",
    title: "Circuit Breaker State Transition Engine",
    difficulty: "Hard",
    instructions: "Build a class 'SimpleCircuitBreaker' with record_failure(), record_success(), and state properties.",
    starterCode: `import time

class SimpleCircuitBreaker:
    def __init__(self, failure_threshold: int = 3, cooldown_sec: float = 10.0):
        self.threshold = failure_threshold
        self.cooldown = cooldown_sec
        self.failures = 0
        self.state = "CLOSED"
        self.last_failure = 0.0

    def record_failure(self):
        self.failures += 1
        self.last_failure = time.time()
        if self.failures >= self.threshold:
            self.state = "OPEN"

    def record_success(self):
        self.failures = 0
        self.state = "CLOSED"

    def can_execute(self) -> bool:
        if self.state == "CLOSED":
            return True
        if self.state == "OPEN":
            if (time.time() - self.last_failure) > self.cooldown:
                self.state = "HALF_OPEN"
                return True
            return False
        return True # HALF_OPEN`
  },
  {
    id: "task-17",
    title: "PostgreSQL Composite Index Advisor",
    difficulty: "Medium",
    instructions: "Write a function 'generate_index_statement(table_name, filter_cols, sort_cols)' that outputs formatted SQL DDL.",
    starterCode: `def generate_index_statement(table_name: str, filter_cols: list, sort_cols: list) -> str:
    all_cols = filter_cols + [f"{c} DESC" for c in sort_cols]
    col_str = ", ".join(all_cols)
    idx_name = f"idx_{table_name}_{'_'.join(filter_cols)}"
    return f"CREATE INDEX {idx_name} ON {table_name} ({col_str});"`
  },
  {
    id: "task-18",
    title: "Quantization Size Compression Calculator",
    difficulty: "Easy",
    instructions: "Write 'calculate_quantization_savings(params_billion, from_bits=16, to_bits=4)' returning original GiB, quantized GiB, and savings ratio.",
    starterCode: `def calculate_quantization_savings(params_billion: float, from_bits: int = 16, to_bits: int = 4):
    orig_bytes = params_billion * 1e9 * (from_bits / 8.0)
    quant_bytes = params_billion * 1e9 * (to_bits / 8.0)
    orig_gib = orig_bytes / (1024 ** 3)
    quant_gib = quant_bytes / (1024 ** 3)
    return {
        "original_gib": round(orig_gib, 2),
        "quantized_gib": round(quant_gib, 2),
        "savings_ratio": round(orig_gib / quant_gib, 2)
    }`
  }
];

const theoryQuestions = [
  {
    id: "theory-01",
    question: "What is AI scalability, and why does it fundamentally diverge from traditional web scalability?",
    answer: "Traditional web applications scale horizontally by provisioning identical stateless backend replicas querying an indexed relational database; each HTTP call executes in <10ms and frees CPU/memory instantly. Generative AI workloads are intensely stateful and computationally massive: prompt prefill runs O(N^2) attention, while autoregressive decode loops continuously stream gigabytes of weight matrices across memory bandwidth to produce single tokens, all while maintaining heavy multi-gigabyte KV cache states in GPU VRAM across persistent streaming connections."
  },
  {
    id: "theory-02",
    question: "State Little's Law and explain its direct application to AI serving capacity planning.",
    answer: "Little's Law states L = lambda * W, where L is the average number of concurrent requests in the system, lambda is the arrival rate (requests/sec), and W is the average residence time per request. In AI systems, if PrepSpaces receives lambda = 20 requests/second and an average interview response takes W = 3.5 seconds, the inference engine must have sufficient active GPU execution slots and KV cache memory to concurrently sustain L = 70 active sequences. If physical VRAM supports only 35 sequences, an unconstrained arrival rate will create an unbounded queue and catastrophic latency collapse."
  },
  {
    id: "theory-03",
    question: "Compare vertical scaling versus horizontal scaling for AI inference infrastructure.",
    answer: "Vertical scaling (scale-up) upgrades single-node hardware (e.g. adding 80GB H100s with NVLink), providing zero network serialization overhead and high tensor parallelism bandwidth, but is constrained by physical chassis capacity, high single-node costs, and single-point-of-failure vulnerabilities. Horizontal scaling (scale-out) provisions multiple independent inference replicas behind a reverse proxy, offering high availability, fault isolation, and elastic diurnal autoscaling, but requires distributed load balancing and state management."
  },
  {
    id: "theory-04",
    question: "Why do standard load balancing algorithms like Round Robin fail when applied to LLM serving clusters?",
    answer: "Round Robin distributes requests sequentially without inspecting computational intensity. If Worker 1 receives a 12,000-token prompt analysis while Worker 2 receives a 10-token prompt, Worker 1 quickly exhausts its KV cache and triggers CUDA OOM while Worker 2 remains idle. Production LLM load balancers must be 'inference-aware'—routing traffic based on vllm:kv_cache_usage_perc, GPU VRAM allocation, and waiting queue depth."
  },
  {
    id: "theory-05",
    question: "What physical components constitute the GPU memory hierarchy, and why is memory bandwidth the bottleneck in autoregressive decoding?",
    answer: "The GPU memory hierarchy consists of registers (~64KB/SM), shared memory/L1 SRAM (~128-228KB/SM), L2 cache (~50MB), and Global VRAM/HBM (e.g. 80GB at 3.35 TB/s on H100). During autoregressive decoding, generating each individual token requires performing a Matrix-Vector Multiplication (GEMV) where all model parameter matrices must be read from HBM into the compute cores. With arithmetic intensity near 1.0, token generation speed is strictly constrained by how fast parameters can be streamed across memory bandwidth rather than raw TFLOPs."
  },
  {
    id: "theory-06",
    question: "Write and explain the universal KV cache memory dimensioning formula.",
    answer: "The formula is: M_KV = 2 * L * B * S * H_KV * D_H * Bytes. The factor 2 accounts for both Key and Value matrices; L is the number of transformer layers; B is concurrent active sequences; S is sequence length in tokens; H_KV is the number of Key-Value attention heads; D_H is head dimension; and Bytes is numerical precision (2 for FP16, 1 for FP8). It proves that KV memory scales linearly with concurrency and context length."
  },
  {
    id: "theory-07",
    question: "How does Grouped-Query Attention (GQA) reduce KV cache footprint compared to Multi-Head Attention (MHA)?",
    answer: "In standard MHA, every Query head has its own Key and Value head (H_Q = H_KV = 32). In GQA, multiple Query heads share a single Key and Value head (e.g., 4 Query heads per KV head, so H_KV = 8). This slashes KV cache memory by 4x with virtually zero loss in model reasoning accuracy, enabling 4x larger batch sizes or 4x longer context windows on identical GPU hardware."
  },
  {
    id: "theory-08",
    question: "Explain the difference between PyTorch's memory_allocated() and memory_reserved().",
    answer: "memory_allocated() represents the exact volume of GPU VRAM currently occupied by active, live PyTorch tensors. memory_reserved() represents total VRAM requested from the CUDA driver and held by PyTorch's internal caching allocator. Reserved memory includes cached blocks that are currently free for new PyTorch allocations but unavailable to other OS processes. Calling torch.cuda.empty_cache() releases unused reserved memory back to the driver."
  },
  {
    id: "theory-09",
    question: "Define TTFT and TPOT and explain why optimizing TTFT alone does not guarantee a responsive application.",
    answer: "TTFT (Time to First Token) measures the latency from request submission to the arrival of the first output token (covering network, queue, and prefill). TPOT (Time Per Output Token) measures the average duration to generate each subsequent token. If TTFT is fast (e.g. 200ms) but TPOT is slow (e.g. 200ms/token = 5 tokens/sec), generating a 300-token answer takes 60 seconds, resulting in a tedious, sluggish user experience."
  },
  {
    id: "theory-10",
    question: "Why are P95 and P99 percentiles far more informative than mean latency in AI system performance audits?",
    answer: "Average (mean) latency is heavily skewed by the majority of short, simple requests and conceals severe tail-end degradation. If 95% of users receive responses in 500ms, but 5% of users submit massive prompts that queue up and take 15 seconds, the mean may look acceptable (~1.2s), yet 1 in 20 users experiences a broken service. P95 and P99 metrics isolate tail-latency bottlenecks, queue starvation, and cache miss stampedes."
  },
  {
    id: "theory-11",
    question: "Why is continuous (iteration-level) batching superior to static batching for LLM inference?",
    answer: "Static batching pads all prompts in a batch to the length of the longest prompt (wasting massive compute on padding tokens) and forces early-finishing sequences to sit idle until the slowest sequence completes. Continuous batching (Orca/vLLM) operates at iteration granularity: finished sequences are evicted immediately and new requests are dynamically inserted into ongoing forward passes, keeping GPU compute cores fully saturated and boosting throughput by 4x to 8x."
  },
  {
    id: "theory-12",
    question: "Describe the throughput saturation curve and explain the risk of unbounded request queues.",
    answer: "As concurrent load rises, aggregate throughput climbs until GPU compute or memory bandwidth limits are reached. Beyond this saturation threshold, throughput plateaus. If new requests continue to arrive faster than the processing rate, an unbounded queue builds up. Requests spend exponentially longer waiting in the queue before prefill begins, driving TTFT to unacceptable levels and eventually causing HTTP gateway timeouts."
  },
  {
    id: "theory-13",
    question: "Explain the three tiers of AI caching: Application Response, KV Prefix, and Semantic Caching.",
    answer: "1. Application Response Cache (Redis): Exact key matching of deterministic hashes for identical queries; returns completed answers in 2-5ms at zero GPU cost. 2. KV Prefix Cache (RadixAttention): Caches precomputed Key/Value tensors for shared system prompt prefixes, allowing new requests to bypass prefill and dropping TTFT from 800ms to 40ms. 3. Semantic Cache: Uses embedding vector search to match semantically equivalent queries (cosine similarity > 0.96) with different wording."
  },
  {
    id: "theory-14",
    question: "What is a Cache Stampede (Thundering Herd) and how does a distributed mutex lock resolve it?",
    answer: "A Cache Stampede occurs when a popular cached entry expires or is invalidated, and hundreds of concurrent requests experience a simultaneous cache miss. All requests hit the GPU model simultaneously, causing instant queue explosion or OOM. A distributed mutex (e.g. Redis Redlock with SETNX) ensures that only the first request to miss acquires the lock to call the model; all other concurrent requests wait or poll Redis until the result is populated."
  },
  {
    id: "theory-15",
    question: "Explain Post-Training Quantization (AWQ/GPTQ) and how it improves serving throughput.",
    answer: "Quantization reduces weight precision from 16-bit (FP16) to 4-bit (INT4). AWQ protects the top 1% salient weight channels while quantizing the remainder. This shrinks model memory by ~70% (e.g. 70B model goes from 140GB to ~38GB). Smaller weights drastically reduce memory bandwidth transfer requirements during autoregressive decode, fit onto fewer GPUs, and free up massive VRAM for larger KV cache batches."
  },
  {
    id: "theory-16",
    question: "How does Speculative Decoding achieve 2x to 3x wall-clock speedup without altering model quality?",
    answer: "Speculative decoding uses a small, fast draft model (e.g. 1B) to propose K candidate tokens sequentially at high speed. The large target model (e.g. 70B) then evaluates all K tokens simultaneously in a single compute-bound forward pass. Verified tokens are accepted; invalid tokens are corrected. Because multiple tokens are produced per target forward pass, decode latency drops significantly while output probabilities remain identical."
  },
  {
    id: "theory-17",
    question: "What is FlashAttention-2 and how does its IO-aware tiling eliminate intermediate memory bottlenecks?",
    answer: "Standard attention materializes an N x N attention matrix in slow HBM, creating gigabytes of memory traffic. FlashAttention-2 tiles the Query, Key, and Value matrices into small blocks that fit directly within fast on-chip SRAM (~128KB). It computes softmax scaling incrementally on-chip without ever writing the massive intermediate N x N attention matrix to HBM, achieving 2x-4x speedup and reducing intermediate memory to near zero."
  },
  {
    id: "theory-18",
    question: "Why is database connection pooling critical in an asynchronous AI backend like FastAPI?",
    answer: "FastAPI can process thousands of concurrent coroutines. If every request opens a separate TCP connection to PostgreSQL, the database exhausts max_connections, thrashing CPU with context switches and crashing. Connection pooling (e.g. asyncpg pool_size=20) maintains a fixed set of reusable connections, queuing queries safely and ensuring database stability."
  },
  {
    id: "theory-19",
    question: "What happens if synchronous CPU-bound code is executed directly inside an async def FastAPI route?",
    answer: "In an async def route, synchronous blocking operations (e.g. time.sleep(), heavy tiktoken encoding, or PDF parsing) freeze the entire single-threaded Python event loop. All other concurrent requests, streaming token emissions, and health checks are completely blocked until the synchronous computation completes. CPU-bound work must be offloaded via asyncio.to_thread() or background worker queues."
  },
  {
    id: "theory-20",
    question: "List and describe Google's SRE Four Golden Signals in the context of production LLM services.",
    answer: "1. Latency: Track TTFT and TPOT separately across percentiles (P50/P95/P99). 2. Traffic: Monitor incoming requests per second (RPS) and token production rate (tokens/sec). 3. Errors: Measure HTTP 5xx, timeout, CUDA OOM, and rate limit (429) percentages. 4. Saturation: Track resource fullness, specifically GPU VRAM %, KV cache allocation %, and request queue depth."
  },
  {
    id: "theory-21",
    question: "Compare the four core Prometheus metric types: Counter, Gauge, Histogram, and Summary.",
    answer: "Counter: Monotonically increasing cumulative value (e.g., total requests received). Gauge: Variable numerical value that rises and falls (e.g., KV cache occupancy %, active streams). Histogram: Samples observations into configurable buckets to enable server-side quantile calculations across instances. Summary: Calculates pre-configured client-side quantiles over a sliding observation window."
  },
  {
    id: "theory-22",
    question: "What is metric cardinality explosion in Prometheus and how is it prevented in FastAPI?",
    answer: "Cardinality explosion occurs when metrics include high-entropy labels (such as user IDs, raw URLs with IDs, or timestamps), generating millions of distinct time-series that overwhelm Prometheus memory. It is prevented by using normalized route templates (e.g., endpoint='/api/interview/{id}') rather than raw request URLs, and never storing user IDs in metric labels."
  },
  {
    id: "theory-23",
    question: "How does OpenTelemetry distributed tracing pinpoint bottlenecks across AI microservices?",
    answer: "OpenTelemetry assigns a unique Trace ID that propagates across HTTP headers (traceparent) to every downstream service. Operations are recorded as timed 'spans' (e.g. Gateway -> Auth -> Redis -> vLLM -> Database). A visual trace waterfall highlights exactly which component consumed the time, preventing engineers from misdiagnosing an external GPU delay as a database issue."
  },
  {
    id: "theory-24",
    question: "Compare cloud cost economics: Hosted LLM APIs vs. Dedicated Self-Hosted GPU instances.",
    answer: "Hosted APIs charge strictly by token volume (e.g. $0.20/1M in, $0.80/1M out), providing zero idle cost and zero infrastructure overhead, but becoming very expensive at sustained massive throughput. Self-hosted GPUs charge a fixed hourly compute rate (e.g. $2.40/hr). If utilization is high (>60%), self-hosting can deliver tokens at a fraction of hosted API prices; but if traffic is low or bursty, idle GPU hours make self-hosting substantially more expensive."
  },
  {
    id: "theory-25",
    question: "Explain the three states of the Circuit Breaker pattern (Closed, Open, Half-Open).",
    answer: "Closed: Normal operation; requests pass through to the primary service. Open: When failure rate exceeds a threshold (e.g. 20%), the breaker trips; requests fail fast or route to a secondary fallback without touching the unhealthy service. Half-Open: After a cooldown timeout, limited trial requests test the primary service. If successful, it resets to Closed; if failures persist, it returns to Open."
  },
  {
    id: "theory-26",
    question: "Why should Kubernetes HPA for AI workloads scale on custom metrics rather than CPU/Memory?",
    answer: "GPU inference runs on dedicated accelerator cards; standard pod CPU utilization can remain at 5% while the GPU is completely saturated and out of VRAM. Furthermore, memory metrics reflect PyTorch reserved allocations which remain static. Scaling must trigger on custom metrics: vllm:num_requests_waiting (queue depth) or vllm:kv_cache_usage_perc."
  },
  {
    id: "theory-27",
    question: "What are the primary troubleshooting steps when investigating a production CUDA Out-of-Memory incident?",
    answer: "1. Inspect nvidia-smi for rogue processes or leaked memory. 2. Check Prometheus vllm:kv_cache_usage_perc to verify if cache exceeded capacity. 3. Examine incoming prompt lengths for oversized context spikes. 4. Verify batch size and concurrency caps. 5. Mitigate by temporarily reducing max context window or enabling prompt truncation at the API Gateway."
  },
  {
    id: "theory-28",
    question: "Explain the difference between Service Level Indicators (SLIs), Service Level Objectives (SLOs), and Error Budgets.",
    answer: "An SLI is the quantitative measurement of service behavior (e.g. '99.2% of requests have TTFT < 1.0s'). An SLO is the target objective agreed upon with stakeholders (e.g. '99.0% of requests must have TTFT < 1.0s over 30 days'). The Error Budget is the allowed unreliability margin (100% - SLO = 1.0%); if consumed rapidly, feature releases freeze in favor of stability work."
  },
  {
    id: "theory-29",
    question: "What is prompt compression and how does it optimize both TTFT and inference cost?",
    answer: "Prompt compression removes redundant tokens, verbose instructions, and unneeded few-shot examples from input prompts while preserving semantic intent. Because prefill latency is quadratic or high linear O(N) with prompt length, shrinking a prompt from 4,000 to 1,000 tokens slashes prefill compute by ~75%, accelerates TTFT, and directly reduces token billing."
  },
  {
    id: "theory-30",
    question: "How would you design an AI platform architecture to reliably serve 1,000 concurrent interactive interview sessions?",
    answer: "Deploy horizontal FastAPI gateway replicas behind an NGINX load balancer with rate-limiting and connection pooling. Route prompts through a multi-tier cache: Redis for exact response matching and vLLM RadixAttention for prompt prefix caching. Use continuous-batching vLLM nodes with GQA and INT4/FP8 quantization. Implement admission control with bounded queues to shed load past saturation. Instrument full Prometheus/Grafana golden signals and an automated circuit breaker routing to fallback models during GPU outages."
  }
];

const quizQuestions = [
  {
    id: "quiz-01",
    question: "According to Little's Law (L = lambda * W), if a system receives 30 requests/second and average latency is 2.5 seconds, what is average concurrency L?",
    options: [
      "12 requests",
      "55 requests",
      "75 requests",
      "300 requests"
    ],
    correctIndex: 2,
    explanation: "L = lambda * W = 30 * 2.5 = 75 concurrent requests in flight."
  },
  {
    id: "quiz-02",
    question: "Why is autoregressive token decoding primarily memory-bandwidth bound rather than compute bound?",
    options: [
      "Tokenization requires massive disk I/O operations",
      "Each generated token requires streaming the entire model parameter weight matrices from HBM for a single vector multiplication",
      "CUDA does not support floating point operations in decode mode",
      "FlashAttention only works during the prefill phase"
    ],
    correctIndex: 1,
    explanation: "Autoregressive generation executes Matrix-Vector operations with arithmetic intensity ~1.0, meaning performance is bottlenecked by the speed of streaming weights from HBM to compute cores."
  },
  {
    id: "quiz-03",
    question: "In the KV cache memory formula M_KV = 2 * L * B * S * H_KV * D_H * Bytes, what does the factor 2 represent?",
    options: [
      "Input and Output sequences",
      "Key and Value tensor matrices",
      "Forward and Backward gradient passes",
      "Prefill and Decode phases"
    ],
    correctIndex: 1,
    explanation: "The factor 2 accounts for storing both the Key (K) tensor and the Value (V) tensor for past sequence tokens."
  },
  {
    id: "quiz-04",
    question: "How does Grouped-Query Attention (GQA) reduce KV cache VRAM footprint?",
    options: [
      "It completely eliminates the Key and Value matrices",
      "Multiple Query heads share a smaller number of Key-Value head pairs",
      "It compresses weights to 1-bit binary representations",
      "It offloads all attention computation to CPU host memory"
    ],
    correctIndex: 1,
    explanation: "GQA groups Query heads (e.g. 32 Query heads) to share fewer KV heads (e.g. 8 KV heads), reducing KV cache memory by 4x."
  },
  {
    id: "quiz-05",
    question: "What is the primary difference between TTFT and TPOT?",
    options: [
      "TTFT measures training speed; TPOT measures evaluation speed",
      "TTFT is latency until the first token appears; TPOT is the average duration to generate each subsequent token",
      "TTFT is measured in gigabytes; TPOT is measured in seconds",
      "TTFT applies only to CPU models; TPOT applies only to GPU models"
    ],
    correctIndex: 1,
    explanation: "TTFT (Time to First Token) covers queue, network, and prefill to the first token; TPOT (Time Per Output Token) is the decode duration per subsequent token."
  },
  {
    id: "quiz-06",
    question: "Why does continuous (iteration-level) batching dramatically outperform static batching in LLM serving?",
    options: [
      "It runs only during nighttime hours",
      "It eliminates padding waste and dynamically evicts completed sequences while injecting new requests at each forward iteration",
      "It compiles Python directly to x86 assembly",
      "It avoids loading weights into GPU memory"
    ],
    correctIndex: 1,
    explanation: "Continuous batching schedules at token-iteration granularity, evicting completed sequences immediately and eliminating padding waste."
  },
  {
    id: "quiz-07",
    question: "What is a Cache Stampede (Thundering Herd) in an AI caching architecture?",
    options: [
      "When a GPU runs out of physical VRAM",
      "When a cached key expires and hundreds of simultaneous requests all miss the cache, overwhelming the GPU cluster",
      "When Redis runs out of disk storage space",
      "When a database query has no WHERE clause"
    ],
    correctIndex: 1,
    explanation: "A cache stampede occurs when expiration of a popular key causes massive concurrent cache misses, overwhelming upstream models with simultaneous requests."
  },
  {
    id: "quiz-08",
    question: "How does Speculative Decoding achieve speedups on large foundation models?",
    options: [
      "It skips 50% of the transformer layers randomly",
      "A fast draft model proposes candidate tokens that the large target model verifies in parallel in a single forward pass",
      "It converts text directly to audio",
      "It trains the model on synthetic data"
    ],
    correctIndex: 1,
    explanation: "A small draft model proposes multiple candidate tokens; the large model verifies them in parallel in one forward pass, generating multiple accepted tokens per step."
  },
  {
    id: "quiz-09",
    question: "Which of the following is NOT one of Google's SRE Four Golden Signals?",
    options: [
      "Latency",
      "Saturation",
      "Throughput",
      "Errors"
    ],
    correctIndex: 2,
    explanation: "The SRE Four Golden Signals are Latency, Traffic, Errors, and Saturation. (Throughput is an aspect of Traffic)."
  },
  {
    id: "quiz-010",
    question: "Which Prometheus metric type is most appropriate for tracking cumulative API request counts?",
    options: [
      "Gauge",
      "Histogram",
      "Counter",
      "Summary"
    ],
    correctIndex: 2,
    explanation: "Counters are monotonically increasing values ideal for measuring cumulative event totals (such as total requests)."
  },
  {
    id: "quiz-011",
    question: "When a Circuit Breaker enters the 'Half-Open' state, what action does it take?",
    options: [
      "It permanently blocks all incoming network traffic",
      "It routes all requests to the primary cluster without restriction",
      "It allows a limited number of trial probe requests to test whether the upstream service has recovered",
      "It restarts the entire operating system kernel"
    ],
    correctIndex: 2,
    explanation: "In Half-Open state, the breaker permits small probe requests to test if the failing service has recovered before resetting to Closed."
  },
  {
    id: "quiz-012",
    question: "Why should Kubernetes Horizontal Pod Autoscaling (HPA) for GPU inference pods avoid scaling on CPU metrics?",
    options: [
      "Kubernetes does not support CPU metrics",
      "GPU inference workloads run on accelerators; CPU utilization can stay low while the GPU is completely saturated and out of memory",
      "CPUs are always faster than GPUs for inference",
      "HPA only works with Docker Compose"
    ],
    correctIndex: 1,
    explanation: "GPU pods perform heavy work on the GPU; host CPU utilization remains low and uncoupled from GPU VRAM, queue depth, or KV cache saturation."
  }
];

const competenciesChecklist = [
  { id: "comp-01", label: "I understand Little's Law (L = lambda * W) and can calculate concurrent request dimensions for capacity planning." },
  { id: "comp-02", label: "I can explain the fundamental architectural differences between stateless web scaling and autoregressive AI scaling." },
  { id: "comp-03", label: "I can compare vertical scaling limits against horizontal multi-replica clustering for AI workloads." },
  { id: "comp-04", label: "I understand inference-aware load balancing based on KV cache utilization rather than naive round-robin." },
  { id: "comp-05", label: "I understand the physical GPU memory hierarchy (Registers, Shared SRAM, L2 Cache, HBM) and bandwidth bottlenecks." },
  { id: "comp-06", label: "I can calculate static model weight footprints across FP16, INT8, and INT4 precision formats." },
  { id: "comp-07", label: "I can derive and apply the universal KV cache dimensioning formula (2 * L * B * S * H_KV * D_H * Bytes)." },
  { id: "comp-08", label: "I understand how Grouped-Query Attention (GQA) dramatically reduces KV cache footprint relative to MHA." },
  { id: "comp-09", label: "I know how to inspect PyTorch memory_allocated() vs memory_reserved() to diagnose CUDA OOM crashes." },
  { id: "comp-10", label: "I can measure and differentiate Time to First Token (TTFT) and Time Per Output Token (TPOT)." },
  { id: "comp-11", label: "I understand the human perception benefits of Server-Sent Events (SSE) progressive token streaming." },
  { id: "comp-12", label: "I know why P95 and P99 percentiles are essential for isolating tail-latency queue bottlenecks." },
  { id: "comp-13", label: "I can differentiate aggregate tokens/sec throughput from requests/second (RPS)." },
  { id: "comp-14", label: "I understand how continuous (iteration-level) batching eliminates padding waste and GPU starvation." },
  { id: "comp-15", label: "I can identify the GPU throughput saturation threshold and configure bounded admission queues." },
  { id: "comp-16", label: "I can implement Redis Cache-Aside with deterministic SHA-256 key generation and TTL management." },
  { id: "comp-17", label: "I understand how distributed mutex locks prevent thundering herd cache stampedes." },
  { id: "comp-18", label: "I understand how prompt prefix caching (RadixAttention) bypasses repetitive system prompt prefill." },
  { id: "comp-19", label: "I understand post-training quantization (AWQ/GPTQ) and speculative decoding acceleration." },
  { id: "comp-20", label: "I know how FlashAttention-2 tiling eliminates intermediate attention memory in slow HBM." },
  { id: "comp-21", label: "I can size database connection pools and create composite B-tree indexes for high-concurrency backends." },
  { id: "comp-22", label: "I can implement the SRE Four Golden Signals (Latency, Traffic, Errors, Saturation) for AI services." },
  { id: "comp-23", label: "I can instrument FastAPI with Prometheus metrics and design production Grafana dashboards." },
  { id: "comp-24", label: "I can trace distributed request lifecycles using OpenTelemetry (OTel) and traceparent headers." },
  { id: "comp-25", label: "I can build circuit breakers with fallback model routing and lead blameless production postmortems." }
];

const learningResources = [
  {
    title: "NVIDIA CUDA C++ Best Practices & Memory Optimization",
    url: "https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html",
    description: "Official guide to GPU memory hierarchy, HBM bandwidth saturation, shared memory tiling, and compute occupancy."
  },
  {
    title: "PyTorch CUDA Semantics & Memory Management",
    url: "https://docs.pytorch.org/docs/stable/notes/cuda.html",
    description: "Authoritative documentation on PyTorch's caching allocator, memory fragmentation, reserved pools, and OOM forensics."
  },
  {
    title: "vLLM Production Architecture & Metrics Guide",
    url: "https://docs.vllm.ai/en/latest/serving/production_metrics.html",
    description: "Official specification for vLLM continuous batching, PagedAttention, prefix caching, and Prometheus metrics."
  },
  {
    title: "Prometheus Monitoring & Time-Series Best Practices",
    url: "https://prometheus.io/docs/practices/naming/",
    description: "Comprehensive standards on metric types, naming conventions, histogram bucket sizing, and cardinality management."
  },
  {
    title: "Grafana AI Cluster Observability & Dashboards",
    url: "https://grafana.com/docs/grafana/latest/dashboards/",
    description: "Guidelines for visual panel design, query performance optimization, PromQL functions, and alertmanager configurations."
  },
  {
    title: "OpenTelemetry Distributed Tracing Specification",
    url: "https://opentelemetry.io/docs/concepts/signals/traces/",
    description: "The vendor-neutral standard for trace context propagation, span lifecycle, and observability telemetry pipelines."
  },
  {
    title: "Redis Cache-Aside Patterns & Redlock Specification",
    url: "https://redis.io/docs/latest/develop/use-cases/cache-aside/",
    description: "Deep dive into caching strategies, TTL invalidation, distributed locking, and cache stampede mitigation."
  },
  {
    title: "Google Site Reliability Engineering: Monitoring Distributed Systems",
    url: "https://sre.google/sre-book/monitoring-distributed-systems/",
    description: "The foundational SRE manifesto establishing the Four Golden Signals, SLIs, SLOs, SLAs, and error budget governance."
  }
];

const moduleData = {
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

const targetPath = path.resolve(__dirname, '../src/Componets/aiScalabilityOptimizationData.js');

const fileContent = `// Module 20: AI Scalability, Optimization & Observability Data
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
