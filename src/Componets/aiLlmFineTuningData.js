/**
 * AI ENGINEERING & GENERATIVE AI - MODULE 08
 * Comprehensive University-Grade Curriculum Data: LLM Training & Fine-Tuning Foundations
 * 
 * Detailed across 10 in-depth curriculum units, 8 hands-on practical labs,
 * capstone project (Build a Domain-Specific Java Technical Interview Assistant with QLoRA),
 * 28 conceptual questions, 8 mathematical problems with worked solutions, 14 coding challenges,
 * 10 interactive quiz assessments, 8 academic resources, and 20-point competency tracker.
 */

export const LLM_FT_MODULE_OVERVIEW = {
  moduleNumber: "08",
  title: "LLM Training & Fine-Tuning Foundations",
  recommendedDuration: "18–22 hours",
  difficulty: "Advanced",
  primaryLanguage: "Python",
  framework: "PyTorch",
  mainLibraries: "Transformers, PEFT, TRL, Datasets, Accelerate, BitsAndBytes",
  modelExamples: "Qwen, Llama, Mistral and compatible GPT-style models",
  prerequisites: "Python, linear algebra, multivariable calculus, Modules 04–07",
  learningApproach: "Mathematics + dataset engineering + model training + experiments",
  finalOutcome: "Fine-tune an LLM using LoRA/QLoRA and deploy the merged adapter",
  centralLearningObjective:
    "Students will master the mathematical and computational principles of adapting pretrained foundation models, understand supervised fine-tuning (SFT), loss masking, parameter-efficient fine-tuning (PEFT), LoRA rank decomposition, QLoRA 4-bit NF4 quantization, and train a domain-specific assistant with production-grade engineering."
};

export const LLM_FT_ROADMAP_UNITS = [
  { id: "01", title: "Training Lifecycle", description: "The 9 production stages: objective, data collection, validation, tokenization, model loading, training, checkpoints, evaluation, deployment" },
  { id: "02", title: "Data Engineering", description: "Instruction-response pairs, Alpaca vs ShareGPT vs ChatML formats, JSONL structure, and schema validation" },
  { id: "03", title: "Dataset Splitting & Leakage", description: "Train/val/test splits, MinHash deduplication, domain contamination, and preventing catastrophic test leakage" },
  { id: "04", title: "SFT & Loss Masking", description: "Causal language model loss, assistant-only completion loss masking with -100 ignore_index, and prompt preservation" },
  { id: "05", title: "Full Fine-Tuning vs PEFT", description: "Computational complexity, catastrophic forgetting, full parameter update VRAM requirements vs parameter-efficient adapters" },
  { id: "06", title: "LoRA Mathematics", description: "Low-rank intrinsic dimension hypothesis, W0 + Delta W, B * A matrix factorization, rank r, scaling factor alpha / r" },
  { id: "07", title: "QLoRA & 4-Bit NF4", description: "Information-theoretically optimal NormalFloat 4-bit, Double Quantization, and Paged Optimizers with CUDA unified memory" },
  { id: "08", title: "Hugging Face PEFT & TRL", description: "LoraConfig, get_peft_model, BitsAndBytesConfig, SFTTrainer, sequence packing, and dataset tokenization" },
  { id: "09", title: "Training Engineering", description: "Effective batch size, microbatching, gradient accumulation, gradient checkpointing, cosine decay, and warmup schedules" },
  { id: "10", title: "Checkpoints & Merging", description: "Adapter serialization, safetensors, merge_and_unload, vLLM serving, benchmark evaluation, and catastrophic forgetting prevention" }
];

export const LLM_FT_CURRICULUM_UNITS = [
  {
    id: "01",
    unitNumber: "01",
    title: "Understanding the Complete LLM Training Lifecycle",
    tagline: "The 9 Production Stages from Data Collection to Serving",
    readTime: "24 min read",
    keyConcepts: ["Training Lifecycle", "Pretraining vs SFT", "Continued Pretraining", "Pipeline Engineering"],
    content: [
      {
        heading: "1. The 9 Stages of LLM Adaptation",
        text: "Adapting an open-weight foundation model (such as Llama 3 or Qwen 2.5) to a specialized domain requires a disciplined, multi-stage engineering workflow rather than simply calling a train function. The process spans 9 distinct phases: (1) Define Training Objective, (2) Collect Raw Domain Corpus, (3) Data Cleaning & Deduplication, (4) Tokenization & Sequence Packing, (5) Model Architecture & Quantization Setup, (6) Training Execution with Gradient Accumulation, (7) Checkpoint Management, (8) Domain Evaluation, and (9) Adapter Merging & Inference Deployment.",
        bullets: [
          "Stage 1 — Define Objective: Establish task boundaries, response style, safety rules, and quantifiable evaluation criteria (e.g. Java interview technical accuracy).",
          "Stage 2 — Dataset Collection: Gather curated instructions, code snippets, documentation, and candidate-interviewer dialogues.",
          "Stage 3 — Validation: Strip malformed tokens, verify JSON/JSONL schemas, and remove duplicates using MinHash hashing.",
          "Stage 4 — Tokenization: Apply chat templates (<|im_start|>, <|im_end|>) and convert text into input_ids and labels.",
          "Stage 5 — Model Setup: Load base weights in 16-bit or 4-bit NF4 with frozen parameters and attached adapter layers.",
          "Stage 6 — Training: Run forward-backward passes, accumulate gradients across microbatches, and clip gradient norms.",
          "Stage 7 — Checkpointing: Periodically serialize adapter weights and optimizer states to guard against GPU crashes.",
          "Stage 8 — Evaluation: Measure validation perplexity, instruction following, and domain-specific benchmark scores.",
          "Stage 9 — Deployment: Merge adapter weights into base weights for zero-overhead vLLM serving or serve dynamically via PEFT."
        ]
      },
      {
        heading: "2. Pretraining vs Continued Pretraining vs Supervised Fine-Tuning",
        text: "Understanding where Supervised Fine-Tuning (SFT) fits within the broader LLM hierarchy is essential for systems engineering:",
        table: {
          headers: ["Attribute", "Pretraining", "Continued Pretraining", "Supervised Fine-Tuning (SFT)"],
          rows: [
            ["Objective", "Next-token prediction on raw text", "Domain adaptation on raw text", "Instruction-following & task adaptation"],
            ["Data Scale", "1 to 15+ Trillion tokens", "10B to 100B domain tokens", "1,000 to 1,000,000 instruction pairs"],
            ["Compute Cost", "Millions of dollars (1,000s of GPUs)", "Tens of thousands of dollars", "Tens to hundreds of dollars (single GPU)"],
            ["Loss Function", "Standard Cross-Entropy on all tokens", "Standard Cross-Entropy on all tokens", "Masked Cross-Entropy (response tokens only)"],
            ["Learned Capability", "World knowledge, grammar, syntax", "Domain jargon, medical/legal text", "Conversational format, task execution, style"]
          ]
        }
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "llm_training_lifecycle.py",
      code: `# Complete LLM Training Workflow Architecture
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM
from peft import LoraConfig, get_peft_model, TaskType

# 1. Verification of environment and GPU capabilities
device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Executing adaptation on: {device} | Memory: {torch.cuda.get_device_properties(0).total_memory / 1e9:.2f} GB" if device == "cuda" else "CPU fallback")

# 2. Define LoRA adapter configuration
lora_config = LoraConfig(
    task_type=TaskType.CAUSAL_LM,
    r=16,                           # Rank of update matrices
    lora_alpha=32,                  # Scaling factor (alpha / r = 2.0)
    lora_dropout=0.05,              # Regularization dropout
    target_modules=["q_proj", "v_proj", "k_proj", "o_proj"],
    bias="none"
)
print("LoRA adapter configuration initialized with rank r=16, alpha=32.")`
    }
  },
  {
    id: "02",
    unitNumber: "02",
    title: "Training Data Engineering & Instruction Formatting",
    tagline: "JSONL Schemas, ChatML Templates, and High-Fidelity Data Preparation",
    readTime: "22 min read",
    keyConcepts: ["Instruction Dataset", "JSONL Format", "ChatML", "Data Validation"],
    content: [
      {
        heading: "1. Standard Instruction Data Formats",
        text: "The quality, consistency, and formatting of instruction datasets represent the single most important factor determining fine-tuning success. Three primary schemas dominate the ecosystem: Alpaca format (instruction, input, output), ShareGPT format (conversations with from/value pairs), and standard ChatML (messages array with role/content objects). For production chatbots, the ChatML standard is strongly preferred because it supports multi-turn dialogue, system instructions, and tool calling seamlessly.",
        bullets: [
          "ChatML Structure: Array of objects containing 'role' ('system', 'user', 'assistant') and 'content' strings.",
          "JSONL (JSON Lines): Exactly one JSON object per line, separated by newline characters. This enables memory-efficient streaming across multi-gigabyte datasets without loading the entire corpus into memory.",
          "Special Chat Tokens: Pretrained models use distinct delimiters: Qwen uses <|im_start|> and <|im_end|>; Llama 3 uses <|start_header_id|> and <|eot_id|>."
        ]
      },
      {
        heading: "2. Data Cleaning & Validation Requirements",
        text: "A production dataset validation pipeline must execute strict schema checks before training: (1) Ensure non-empty user and assistant turns, (2) Verify alternating turns (User -> Assistant -> User -> Assistant), (3) Check total token length does not exceed model context limit, (4) Strip Unicode replacement characters and control characters, and (5) Remove near-duplicate samples to prevent overfitting on repetitive phrases."
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "validate_instruction_dataset.py",
      code: `import json
from pathlib import Path

def validate_jsonl_dataset(file_path: Path):
    valid_count, invalid_count = 0, 0
    with open(file_path, "r", encoding="utf-8") as f:
        for idx, line in enumerate(f, start=1):
            line = line.strip()
            if not line:
                continue
            try:
                record = json.loads(line)
                messages = record.get("messages", [])
                if not messages or not isinstance(messages, list):
                    raise ValueError("Missing or invalid 'messages' array")
                
                # Verify roles and alternation
                expected_role = "system" if messages[0].get("role") == "system" else "user"
                for msg in messages:
                    role = msg.get("role")
                    content = msg.get("content", "").strip()
                    if not content:
                        raise ValueError(f"Empty content in turn with role '{role}'")
                    if role not in ["system", "user", "assistant"]:
                        raise ValueError(f"Unsupported role '{role}'")
                valid_count += 1
            except Exception as e:
                print(f"Line {idx} ERROR: {e}")
                invalid_count += 1
                
    print(f"Validation Complete: {valid_count} Valid Records | {invalid_count} Invalid Records")

# Example invocation: validate_jsonl_dataset(Path("data/java_interview_sft.jsonl"))`
    }
  },
  {
    id: "03",
    unitNumber: "03",
    title: "Dataset Splitting, Deduplication & Data Leakage",
    tagline: "MinHash LSH, Overfitting Prevention, and Contamination Audits",
    readTime: "20 min read",
    keyConcepts: ["MinHash Deduplication", "Train/Val/Test Split", "Data Contamination", "Data Leakage"],
    content: [
      {
        heading: "1. The Mechanics of Dataset Contamination",
        text: "Data leakage occurs when evaluation questions or direct answers inadvertently appear in the training corpus. When an LLM memorizes specific questions during fine-tuning, its validation loss drops dramatically, but its real-world generalization to novel questions fails catastrophically. To prevent this, datasets must be partitioned at the domain or topic level rather than through naive uniform random splitting.",
        bullets: [
          "Standard Partitioning: 80% Training, 10% Validation (for early stopping and learning rate scheduling), 10% Test (unseen held-out benchmark).",
          "Exact Deduplication: SHA-256 hash comparison of prompt text to guarantee zero identical prompts across train and test sets.",
          "MinHash Locality Sensitive Hashing (LSH): Fuzzy deduplication that identifies near-identical prompts (e.g. minor typo differences or synonym substitutions) with Jaccard similarity > 0.8."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "split_and_deduplicate.py",
      code: `import hashlib
from sklearn.model_selection import train_test_split

def deduplicate_records(records):
    seen_hashes = set()
    deduped = []
    for r in records:
        prompt_text = r["messages"][0]["content"] if r["messages"][0]["role"] == "user" else r["messages"][1]["content"]
        h = hashlib.sha256(prompt_text.strip().lower().encode("utf-8")).hexdigest()
        if h not in seen_hashes:
            seen_hashes.add(h)
            deduped.append(r)
    return deduped

# Partition 20,000 records: 80% Train, 10% Val, 10% Test
# train_records, temp_records = train_test_split(deduped, test_size=0.20, random_state=42)
# val_records, test_records = train_test_split(temp_records, test_size=0.50, random_state=42)`
    }
  },
  {
    id: "04",
    unitNumber: "04",
    title: "Supervised Fine-Tuning & Assistant-Only Loss Masking",
    tagline: "The Mathematics of Causal LM Loss and the -100 Ignore Index",
    readTime: "25 min read",
    keyConcepts: ["Cross-Entropy Loss", "Loss Masking", "ignore_index = -100", "Prompt vs Completion"],
    content: [
      {
        heading: "1. Why Prompt Loss Must Be Masked",
        text: "In standard pretraining, cross-entropy loss is computed across every single token in the sequence. However, in Supervised Fine-Tuning, our objective is to teach the model how to RESPOND to instructions, not how to write the user's prompt. If prompt tokens are included in the loss computation, the model wastes gradient updates memorizing the syntax of user questions. To prevent this, PyTorch provides the special ignore_index = -100 convention.",
        bullets: [
          "Mathematical Formulation: For sequence X = (x_1, ..., x_n), standard causal loss is L = - sum log P(x_t | x_<t).",
          "Masked Formulation: Let M_t = 1 if token t belongs to the assistant response, and M_t = 0 if token t belongs to the system or user prompt. The SFT loss is: L_SFT = - sum M_t log P(x_t | x_<t) / sum M_t.",
          "Target Tensor Alignment: In the labels tensor, any token position corresponding to system/user prompt is set to -100. PyTorch's torch.nn.CrossEntropyLoss(ignore_index=-100) automatically zeroes out gradients for those positions."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "assistant_loss_masking.py",
      code: `import torch

def create_masked_labels(input_ids, tokenizer, assistant_start_token="<|im_start|>assistant"):
    """
    Masks all prompt tokens with -100 so cross-entropy is computed only on assistant turns.
    """
    labels = input_ids.clone()
    assistant_prefix_ids = tokenizer.encode(assistant_start_token, add_special_tokens=False)
    
    for i, seq in enumerate(input_ids):
        # Locate the assistant response boundary
        # All tokens prior to assistant generation start are set to -100
        response_start_idx = len(seq)
        for idx in range(len(seq) - len(assistant_prefix_ids)):
            if seq[idx:idx+len(assistant_prefix_ids)].tolist() == assistant_prefix_ids:
                response_start_idx = idx + len(assistant_prefix_ids)
                break
        
        # Mask prompt
        labels[i, :response_start_idx] = -100
        
    return labels`
    }
  },
  {
    id: "05",
    unitNumber: "05",
    title: "Full Fine-Tuning versus Parameter-Efficient Fine-Tuning (PEFT)",
    tagline: "Memory Bottlenecks, Optimizer Footprints, and Catastrophic Forgetting",
    readTime: "22 min read",
    keyConcepts: ["Full Fine-Tuning", "PEFT", "VRAM Calculation", "Catastrophic Forgetting"],
    content: [
      {
        heading: "1. The VRAM Equation for Full Fine-Tuning",
        text: "Full fine-tuning updates all parameters W of the neural network. In AdamW optimization, for every parameter of the model, the system must store: (1) 16-bit weight (2 bytes), (2) 16-bit gradient (2 bytes), (3) 32-bit first optimizer momentum m (4 bytes), and (4) 32-bit second optimizer momentum v (4 bytes). Total memory per parameter is 2 + 2 + 4 + 4 = 12 bytes per parameter (excluding activation memory and master weights).",
        bullets: [
          "7B Model in Full FP16 Fine-Tuning: 7B * 16 bytes = ~112 GB VRAM minimum just for weights, gradients, and optimizer states! Requires multiple 80GB A100/H100 GPUs.",
          "Catastrophic Forgetting: When all weights update on domain data, foundational knowledge (e.g. general reasoning, coding, multilingual abilities) deteriorates rapidly.",
          "PEFT Paradigm: Freezes 99.8% of base weights W_0 and trains small modular adapter parameters, slashing VRAM footprint and preserving base capabilities."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "calculate_vram_requirements.py",
      code: `def calculate_training_vram(param_count_billions: float, is_full_ft: bool = False, lora_param_millions: float = 20.0):
    if is_full_ft:
        # Weights (2B) + Gradients (2B) + AdamW FP32 States (8B) + Master weights (4B) = 16 bytes/param
        base_gb = param_count_billions * 16.0
        print(f"Full Fine-Tuning ({param_count_billions}B): {base_gb:.1f} GB VRAM required (weights + optimizer)")
    else:
        # QLoRA: 4-bit base weights (0.5B/param) + LoRA AdamW (16 bytes/adapter param)
        base_gb = param_count_billions * 0.55  # 4-bit + double quant overhead
        adapter_gb = (lora_param_millions / 1000.0) * 16.0
        print(f"QLoRA ({param_count_billions}B + {lora_param_millions}M adapter): {base_gb + adapter_gb:.2f} GB VRAM required")

calculate_training_vram(7.0, is_full_ft=True)   # ~112 GB
calculate_training_vram(7.0, is_full_ft=False)  # ~4.17 GB`
    }
  },
  {
    id: "06",
    unitNumber: "06",
    title: "LoRA: Low-Rank Adaptation Mathematics & Architecture",
    tagline: "Deriving W0 + (alpha/r)*B*A and Parameter Reduction",
    readTime: "26 min read",
    keyConcepts: ["LoRA", "Low-Rank Decomposition", "Rank r", "Alpha Scaling", "W0 + Delta W"],
    content: [
      {
        heading: "1. The Intrinsic Rank Hypothesis",
        text: "Proposed by Edward Hu et al. (Microsoft, 2021), LoRA hypothesizes that parameter updates Delta W during task-specific adaptation possess a very low 'intrinsic dimension' or rank r << min(d_in, d_out). Instead of updating the full d_in x d_out matrix directly, LoRA factorizes Delta W into two low-rank matrices: B (d_out x r) and A (r x d_in).",
        bullets: [
          "Forward Pass Equation: h = W_0 x + Delta W x = W_0 x + (alpha / r) * B * A * x.",
          "Zero Initialization: Matrix A is initialized using Gaussian random values N(0, sigma^2), while Matrix B is initialized to exact ZEROS. Consequently, Delta W = B * A = 0 at step 0, ensuring training begins with the exact baseline model output.",
          "Alpha Scaling Factor: The scalar alpha / r stabilizes training when experimenting with different values of rank r. If alpha is set to 2r, the scaling multiplier is 2.0."
        ]
      },
      {
        heading: "2. Parameter Reduction Derivation",
        text: "Consider a projection layer in a 7B model where d_in = 4096 and d_out = 4096. The full weight matrix has 4096 x 4096 = 16,777,216 parameters (33.5 MB in FP16). If rank r = 16: Matrix A has 16 x 4096 = 65,536 parameters; Matrix B has 4096 x 16 = 65,536 parameters. Total LoRA parameters = 65,536 + 65,536 = 131,072 parameters! That is a 99.22% reduction in trainable parameters (0.78125% of the original)."
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "lora_linear_layer.py",
      code: `import math
import torch
import torch.nn as nn

class LoRALinear(nn.Module):
    def __init__(self, in_features: int, out_features: int, r: int = 16, lora_alpha: float = 32.0, lora_dropout: float = 0.05):
        super().__init__()
        # 1. Base linear layer (frozen in training)
        self.base_layer = nn.Linear(in_features, out_features, bias=False)
        self.base_layer.weight.requires_grad = False
        
        # 2. LoRA low-rank decomposition matrices
        self.r = r
        self.lora_alpha = lora_alpha
        self.scaling = lora_alpha / r
        
        self.lora_A = nn.Parameter(torch.empty(r, in_features))
        self.lora_B = nn.Parameter(torch.empty(out_features, r))
        self.dropout = nn.Dropout(p=lora_dropout)
        
        # 3. Initialization: A ~ Gaussian, B = 0 (so Delta W starts at 0)
        nn.init.kaiming_uniform_(self.lora_A, a=math.sqrt(5))
        nn.init.zeros_(self.lora_B)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        base_out = self.base_layer(x)
        lora_out = (self.dropout(x) @ self.lora_A.T @ self.lora_B.T) * self.scaling
        return base_out + lora_out`
    }
  },
  {
    id: "07",
    unitNumber: "07",
    title: "QLoRA: Quantized Low-Rank Adaptation & NF4 Precision",
    tagline: "NormalFloat 4-Bit, Double Quantization, and Paged Optimizers",
    readTime: "25 min read",
    keyConcepts: ["QLoRA", "NormalFloat4 (NF4)", "Double Quantization", "Paged Optimizers"],
    content: [
      {
        heading: "1. The 3 Pillars of QLoRA (Dettmers et al., 2023)",
        text: "QLoRA achieves 16-bit fine-tuning performance while quantizing the base model down to 4 bits, enabling a 7B LLM to train comfortably on a single consumer GPU with 16GB or even 8GB of VRAM. It introduces three core innovations:",
        bullets: [
          "Pillar 1 — 4-Bit NormalFloat (NF4): An information-theoretically optimal data type for normally distributed neural network weights. Unlike standard FP4 with uniform spacing, NF4 intervals match the Gaussian quantiles of pretrained weights, maximizing information preservation.",
          "Pillar 2 — Double Quantization (DQ): Quantizes the quantization constants (scales) themselves. Standard 4-bit block quantization adds ~0.5 bits per parameter in FP32 scale overhead; DQ quantizes those scales to 8-bit, reducing scale overhead to 0.127 bits per parameter (saving ~0.37 bits/param or 373 MB on 7B).",
          "Pillar 3 — Paged Optimizers: Uses CUDA Unified Memory to automatically page optimizer states between GPU VRAM and CPU RAM during gradient checkpoints and memory spikes, preventing Out-Of-Memory (OOM) crashes."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "qlora_bitsandbytes_config.py",
      code: `import torch
from transformers import AutoModelForCausalLM, BitsAndBytesConfig

# Configure 4-bit NF4 Quantization with Double Quantization
bnb_config = BitsAndBytesConfig(
    load_in_4bit=True,
    bnb_4bit_quant_type="nf4",               # Optimal NormalFloat 4-bit
    bnb_4bit_use_double_quant=True,           # Double quantization of scales
    bnb_4bit_compute_dtype=torch.bfloat16    # 16-bit compute for forward/backward
)

# Load base model into quantized memory
model = AutoModelForCausalLM.from_pretrained(
    "Qwen/Qwen2.5-7B-Instruct",
    quantization_config=bnb_config,
    device_map="auto"
)
print("Base model loaded in 4-bit NF4 precision. VRAM footprint: ~4.5 GB")`
    }
  },
  {
    id: "08",
    unitNumber: "08",
    title: "Hugging Face PEFT & TRL SFTTrainer Implementation",
    tagline: "End-to-End Supervised Fine-Tuning Pipeline with Open-Source Tooling",
    readTime: "24 min read",
    keyConcepts: ["PEFT", "TRL", "SFTTrainer", "LoraConfig", "BitsAndBytes"],
    content: [
      {
        heading: "1. The Modern SFT Tooling Stack",
        text: "The open-source SFT workflow is powered by three interconnected libraries: Hugging Face Transformers (model loading & tokenization), PEFT (Parameter-Efficient Fine-Tuning adapter management), and TRL (Transformer Reinforcement Learning / Supervised Fine-Tuning Trainer).",
        bullets: [
          "prepare_model_for_kbit_training(): Freezes quantized layers, casts layer norms to FP32 for numerical stability, and attaches gradient checkpointing hooks.",
          "Target Modules Selection: In standard Llama/Qwen architectures, attaching LoRA to all linear layers ('all-linear': q_proj, k_proj, v_proj, o_proj, gate_proj, up_proj, down_proj) yields significantly higher adaptation capacity than only targeting attention projection layers (q_proj, v_proj).",
          "Sequence Packing: Packing multiple short conversations into a single sequence up to the maximum context length (e.g. 2048) with attention masks, avoiding wasteful padding tokens and speeding up training by 2x to 5x."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "train_sft_peft.py",
      code: `from peft import LoraConfig, get_peft_model, prepare_model_for_kbit_training
from trl import SFTTrainer, SFTConfig

# 1. Prepare model for 4-bit training
model = prepare_model_for_kbit_training(model)

# 2. Configure LoRA parameters
peft_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "k_proj", "v_proj", "o_proj", "gate_proj", "up_proj", "down_proj"],
    lora_dropout=0.05,
    bias="none",
    task_type="CAUSAL_LM"
)
model = get_peft_model(model, peft_config)
model.print_trainable_parameters()
# Output: trainable params: 20,447,232 || all params: 7,092,447,232 || trainable%: 0.288`
    }
  },
  {
    id: "09",
    unitNumber: "09",
    title: "Training Engineering: Batch Sizing, Accumulation & Schedulers",
    tagline: "Effective Batch Size Derivation, Gradient Checkpointing, and Warmup Schedules",
    readTime: "22 min read",
    keyConcepts: ["Effective Batch Size", "Gradient Accumulation", "Gradient Checkpointing", "Cosine Annealing"],
    content: [
      {
        heading: "1. Effective Batch Size Mathematical Formula",
        text: "LLM fine-tuning is sensitive to batch size. Small batch sizes (e.g. 1 or 2) introduce noisy gradient estimates that destabilize weights, while large batch sizes (e.g. 32 to 64) exceed single GPU memory. Engineers resolve this using Gradient Accumulation:",
        bullets: [
          "Effective Batch Size Formula: Effective Batch Size = MicroBatch Size * Gradient Accumulation Steps * Number of GPUs.",
          "Example: With MicroBatch = 2, Gradient Accumulation = 8, and GPUs = 2, Effective Batch = 2 * 8 * 2 = 32 sequences per optimizer step.",
          "Optimizer Step Calculation: Total Steps = (Total Training Examples * Epochs) / Effective Batch Size.",
          "Gradient Checkpointing: Instead of retaining all intermediate activations in VRAM during the forward pass, gradient checkpointing stores only selected boundary activations and recomputes the rest during the backward pass. This trades ~20% compute time for a ~60% reduction in activation VRAM."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "sft_training_args.py",
      code: `from trl import SFTConfig

training_args = SFTConfig(
    output_dir="./checkpoints/java_interview_assistant",
    per_device_train_batch_size=2,          # Microbatch size
    gradient_accumulation_steps=8,          # Accumulate 8 passes -> Effective batch = 16
    learning_rate=2e-4,                     # Standard LoRA learning rate
    lr_scheduler_type="cosine",             # Smooth cosine decay
    warmup_ratio=0.05,                      # 5% linear warmup to prevent early divergence
    max_grad_norm=0.3,                      # Gradient clipping to prevent exploding gradients
    logging_steps=10,
    save_strategy="steps",
    save_steps=100,
    save_total_limit=3,                     # Keep only the 3 best checkpoints
    bf16=True,                              # Bfloat16 for stable gradient dynamics
    gradient_checkpointing=True             # Recompute activations to save VRAM
)`
    }
  },
  {
    id: "10",
    unitNumber: "10",
    title: "Checkpoint Management, Adapter Merging & Troubleshooting",
    tagline: "Saving Safetensors, merge_and_unload, vLLM Serving & Loss Debugging",
    readTime: "24 min read",
    keyConcepts: ["merge_and_unload", "Safetensors", "vLLM Serving", "Loss Curves", "Catastrophic Forgetting"],
    content: [
      {
        heading: "1. Adapter Serialization vs Full Weight Merging",
        text: "After fine-tuning completes, the adapter weights can be managed in two ways: (1) Standalone Adapter Checkpoints: Storing only adapter_model.safetensors and adapter_config.json (~80 MB), allowing multiple specialized adapters to hot-swap dynamically onto a single base model in memory; or (2) Full Weight Merging: Merging W_merged = W_0 + (alpha/r)*B*A back into the base weights via merge_and_unload().",
        bullets: [
          "Zero Latency Overhead: Merging weights permanently adds zero inference latency and zero memory overhead compared to the base foundation model.",
          "vLLM Production Serving: Standalone adapters or merged safetensors can be deployed directly into high-throughput inference engines like vLLM or TGI for production serving.",
          "Loss Curve Troubleshooting: A healthy SFT loss curve starts high (e.g. 2.5 - 3.0), drops rapidly in the first 100 steps, and steadily levels off around 0.8 - 1.2. If validation loss starts climbing while training loss approaches zero, the model is overfitting; stop training or increase LoRA dropout."
        ]
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "merge_and_save_adapter.py",
      code: `import torch
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel

base_model_path = "Qwen/Qwen2.5-7B-Instruct"
adapter_checkpoint = "./checkpoints/java_interview_assistant/checkpoint-500"
merged_output_dir = "./models/java_interview_assistant_merged"

# 1. Load base model in full 16-bit precision
base_model = AutoModelForCausalLM.from_pretrained(
    base_model_path,
    torch_dtype=torch.bfloat16,
    device_map="cpu" # Merge on CPU or GPU
)

# 2. Attach adapter
peft_model = PeftModel.from_pretrained(base_model, adapter_checkpoint)

# 3. Permanently merge W_0 + (alpha/r)*B*A
merged_model = peft_model.merge_and_unload()
merged_model.save_pretrained(merged_output_dir, safe_serialization=True)

tokenizer = AutoTokenizer.from_pretrained(base_model_path)
tokenizer.save_pretrained(merged_output_dir)
print(f"Merged model saved successfully to: {merged_output_dir}")`
    }
  }
];

export const LLM_FT_PRACTICAL_LABS = [
  {
    id: "lab-01",
    title: "Lab 01: JSONL Instruction Dataset Validator",
    difficulty: "Beginner",
    estimatedTime: "45 mins",
    objective: "Implement a robust JSONL dataset parser that verifies message schema integrity, alternating conversation roles, and non-empty content strings.",
    tasks: [
      "Load a raw .jsonl file line by line without holding the entire dataset in memory.",
      "Validate the existence and data type of the 'messages' array.",
      "Check role sequence validity (system -> user -> assistant alternation).",
      "Calculate token count distribution using a Hugging Face tokenizer.",
      "Output a structured validation summary report with error line numbers."
    ],
    starterCode: `import json
from pathlib import Path

def validate_sft_dataset(file_path: str):
    # Student implementation: Verify JSONL format and output summary
    pass`
  },
  {
    id: "lab-02",
    title: "Lab 02: Assistant-Only Loss Masking Implementation",
    difficulty: "Intermediate",
    estimatedTime: "60 mins",
    objective: "Write a PyTorch batch collator that identifies prompt vs completion boundaries and sets all prompt token labels to -100.",
    tasks: [
      "Tokenize conversational turns with chat templates.",
      "Detect the assistant response start token index in the token stream.",
      "Construct a target labels tensor with prompt positions masked to -100.",
      "Verify that torch.nn.CrossEntropyLoss ignores all prompt tokens.",
      "Compare gradient magnitudes between masked and unmasked training."
    ],
    starterCode: `import torch
import torch.nn as nn

def mask_prompt_tokens(input_ids: torch.Tensor, prompt_lengths: list[int]) -> torch.Tensor:
    labels = input_ids.clone()
    for i, p_len in enumerate(prompt_lengths):
        labels[i, :p_len] = -100
    return labels`
  },
  {
    id: "lab-03",
    title: "Lab 03: LoRA Linear Layer from Scratch",
    difficulty: "Intermediate",
    estimatedTime: "60 mins",
    objective: "Implement an autograd-compatible LoRA linear layer in pure PyTorch without relying on external libraries.",
    tasks: [
      "Wrap an existing nn.Linear module with requires_grad=False.",
      "Create low-rank parameter matrices A and B with rank r.",
      "Initialize A with Kaiming uniform and B with exact zeros.",
      "Implement the forward pass: base(x) + (alpha / r) * (x @ A.T @ B.T).",
      "Verify gradient flow during a backward pass and confirm base weights remain unchanged."
    ],
    starterCode: `import torch
import torch.nn as nn

class CustomLoRALinear(nn.Module):
    def __init__(self, in_features: int, out_features: int, r: int = 16, alpha: float = 32.0):
        super().__init__()
        # Student implementation: Implement LoRA forward pass from scratch
        pass`
  },
  {
    id: "lab-04",
    title: "Lab 04: Trainable Parameter & Memory Calculator",
    difficulty: "Intermediate",
    estimatedTime: "45 mins",
    objective: "Build a Python utility that inspects any Hugging Face model and calculates parameter counts, LoRA savings, and VRAM footprints across precision tiers.",
    tasks: [
      "Count total parameters vs trainable parameters in a PEFT model.",
      "Calculate memory for FP32, FP16, INT8, and NF4 weights.",
      "Compute parameter savings percentage: (1 - Trainable / Total) * 100.",
      "Estimate AdamW optimizer state footprint for full fine-tuning vs LoRA."
    ],
    starterCode: `def calculate_model_memory(model):
    total = sum(p.numel() for p in model.parameters())
    trainable = sum(p.numel() for p in model.parameters() if p.requires_grad)
    return {"total": total, "trainable": trainable, "trainable_pct": (trainable / total) * 100}`
  },
  {
    id: "lab-05",
    title: "Lab 05: SFT Training with Hugging Face TRL",
    difficulty: "Advanced",
    estimatedTime: "90 mins",
    objective: "Configure and run a complete Supervised Fine-Tuning job using TRL's SFTTrainer with gradient accumulation and evaluation logging.",
    tasks: [
      "Load a lightweight model (e.g. Qwen2.5-0.5B or 1.5B).",
      "Initialize SFTConfig with cosine decay, warmup, and gradient checkpointing.",
      "Attach a LoRA adapter targeting all linear projection layers.",
      "Execute training for 3 epochs and record the loss trajectory.",
      "Plot training vs validation loss curves."
    ],
    starterCode: `from trl import SFTTrainer, SFTConfig

def run_sft_pipeline(model, tokenizer, train_dataset, val_dataset):
    # Student implementation: Setup SFTConfig and run SFTTrainer
    pass`
  },
  {
    id: "lab-06",
    title: "Lab 06: 4-Bit QLoRA Configuration with BitsAndBytes",
    difficulty: "Advanced",
    estimatedTime: "75 mins",
    objective: "Configure a 4-bit NF4 quantized base model with double quantization and paged AdamW optimizer for memory-constrained training.",
    tasks: [
      "Instantiate BitsAndBytesConfig with bnb_4bit_quant_type='nf4'.",
      "Enable double quantization (bnb_4bit_use_double_quant=True).",
      "Load model using device_map='auto' and bfloat16 compute dtype.",
      "Prepare model for k-bit training using PEFT.",
      "Verify memory usage stays below 6 GB on a 7B model."
    ],
    starterCode: `from transformers import BitsAndBytesConfig, AutoModelForCausalLM

def setup_qlora_model(model_name: str):
    # Student implementation: Configure NF4 and double quantization
    pass`
  },
  {
    id: "lab-07",
    title: "Lab 07: Adapter Serialization & Merging Pipeline",
    difficulty: "Intermediate",
    estimatedTime: "60 mins",
    objective: "Save trained adapter checkpoints, inspect the safetensors file structure, and permanently merge weights into base foundation weights.",
    tasks: [
      "Save adapter with model.save_pretrained() and verify adapter_config.json.",
      "Load the saved adapter onto the base model dynamically.",
      "Execute merge_and_unload() to fuse weights into base parameters.",
      "Verify output tensor equality between dynamic adapter inference and merged model.",
      "Export the merged model in safetensors format for downstream deployment."
    ],
    starterCode: `def merge_and_export(base_model_path: str, adapter_path: str, output_path: str):
    # Student implementation: Merge and save standalone model
    pass`
  },
  {
    id: "lab-08",
    title: "Lab 08: Domain-Specific Evaluation & Benchmark Testing",
    difficulty: "Advanced",
    estimatedTime: "90 mins",
    objective: "Evaluate the fine-tuned model against a held-out test dataset and measure exact-match accuracy, rubric score correlation, and catastrophic forgetting.",
    tasks: [
      "Generate completions for 50 unseen Java technical interview questions.",
      "Compare base model vs fine-tuned model response structure.",
      "Score responses against an automated rubric using keyword/concept matching.",
      "Run standard MMLU or GSM8K sanity checks to verify general reasoning remains intact.",
      "Produce a formal evaluation report with latency, throughput, and accuracy metrics."
    ],
    starterCode: `def evaluate_domain_model(model, tokenizer, test_dataset):
    # Student implementation: Run inference and compute domain metrics
    pass`
  }
];

export const LLM_FT_CAPSTONE_PROJECT = {
  title: "Domain-Specific Java Technical Interview Assistant with QLoRA",
  objective: "Build, fine-tune, evaluate, and deploy a production-grade domain-specialized LLM that conducts Java technical interviews, evaluates candidate answers with a rubric, identifies missing concepts, and outputs structured technical feedback.",
  phases: [
    {
      phaseNumber: 1,
      name: "Domain Dataset Engineering",
      tasks: [
        "Curate 1,000+ high-quality multi-turn Java interview interactions across Core Java, Collections, Concurrency, JVM Internals, and Spring Framework.",
        "Format data in strict ChatML JSONL format with system, user, and assistant turns.",
        "Run SHA-256 deduplication and partition into 80% train, 10% validation, 10% test."
      ]
    },
    {
      phaseNumber: 2,
      name: "Model Selection & Tokenization Pipeline",
      tasks: [
        "Select a foundation model (e.g. Qwen2.5-7B-Instruct or Llama-3.1-8B-Instruct).",
        "Configure chat template formatting with proper role tokens.",
        "Implement assistant-only loss masking with -100 ignore_index."
      ]
    },
    {
      phaseNumber: 3,
      name: "QLoRA Configuration & Parameter Setup",
      tasks: [
        "Initialize BitsAndBytesConfig with 4-bit NF4, double quantization, and bfloat16 compute dtype.",
        "Attach LoRA adapter targeting all linear projection layers with rank r=16, alpha=32.",
        "Confirm trainable parameter ratio is between 0.1% and 0.5%."
      ]
    },
    {
      phaseNumber: 4,
      name: "Supervised Fine-Tuning Execution",
      tasks: [
        "Configure SFTConfig with microbatch size = 2, gradient accumulation = 8 (effective batch = 16).",
        "Set learning rate = 2e-4 with cosine scheduler, 5% warmup, and gradient checkpointing.",
        "Execute training across 3 epochs and monitor validation loss."
      ]
    },
    {
      phaseNumber: 5,
      name: "Checkpoint Management & Adapter Merging",
      tasks: [
        "Serialize adapter checkpoints and record training loss curves.",
        "Execute merge_and_unload() to fuse adapter weights into base weights.",
        "Export the merged model to safetensors format."
      ]
    },
    {
      phaseNumber: 6,
      name: "Rigorous Domain & General Evaluation",
      tasks: [
        "Evaluate the fine-tuned model against 100 held-out test questions.",
        "Verify candidate answer rubric scoring accuracy and missing concept detection.",
        "Confirm no catastrophic forgetting on general reasoning tasks."
      ]
    },
    {
      phaseNumber: 7,
      name: "Production Inference Service Deployment",
      tasks: [
        "Package the model into an interactive CLI or FastAPI endpoint.",
        "Support interactive Java mock interview sessions with real-time scoring.",
        "Deliver complete technical documentation and reproducible training logs."
      ]
    }
  ],
  rubric: [
    { component: "Dataset Engineering & ChatML JSONL Validation", marks: 15 },
    { component: "Loss Masking & Tokenization Implementation", marks: 15 },
    { component: "QLoRA 4-bit NF4 & LoRA Hyperparameter Tuning", marks: 20 },
    { component: "Training Execution & Checkpoint Management", marks: 15 },
    { component: "Adapter Merging & Safetensors Export", marks: 10 },
    { component: "Domain Benchmark & Catastrophic Forgetting Audit", marks: 15 },
    { component: "Interactive Application & Technical Report", marks: 10 }
  ]
};

export const LLM_FT_ASSIGNMENTS = {
  conceptualQuestions: [
    "What is LLM training and how does it differ from traditional deep learning training?",
    "Explain the fundamental differences between pretraining, continued pretraining, and supervised fine-tuning.",
    "What is continued pretraining and under what real-world scenarios is it required?",
    "Define supervised fine-tuning (SFT) and explain the nature of its training data.",
    "Why do LLMs require specialized training datasets rather than unstructured text?",
    "Explain the JSONL file format and why it is universally preferred for large-scale training corpora.",
    "Why must a dataset be strictly partitioned into training, validation, and test splits?",
    "What is data leakage and how does prompt contamination distort evaluation benchmarks?",
    "Explain full fine-tuning and detail its computational and memory bottlenecks.",
    "What is Parameter-Efficient Fine-Tuning (PEFT) and why did it become the industry standard?",
    "Explain the architectural concept of adapter layers in transformer models.",
    "What is LoRA and why is it referred to as 'Low-Rank Adaptation'?",
    "Explain the intrinsic rank hypothesis proposed by Hu et al. (2021).",
    "What is the mathematical role of the LoRA rank parameter r?",
    "What is LoRA alpha and how does the scaling ratio alpha / r stabilize optimization across ranks?",
    "What is the purpose of LoRA dropout during adapter training?",
    "What is QLoRA and how does it build upon LoRA?",
    "Explain the 4-bit NormalFloat (NF4) data type and why it outperforms standard FP4.",
    "What is double quantization and how much VRAM does it save on a 7B parameter model?",
    "Explain paged optimizers and how CUDA unified memory prevents out-of-memory crashes.",
    "Provide a detailed comparative analysis between standard LoRA and QLoRA.",
    "What is gradient accumulation and how does it decouple effective batch size from GPU memory?",
    "Why is gradient checkpointing used and what compute-memory trade-off does it introduce?",
    "What is a training checkpoint and what files comprise an adapter checkpoint directory?",
    "Explain how to safely resume interrupted fine-tuning from a saved checkpoint.",
    "What is catastrophic forgetting and what mechanisms exist to mitigate it during domain adaptation?",
    "Why is model evaluation on held-out data mandatory after fine-tuning?",
    "Compare standalone adapter serving with permanent weight merging via merge_and_unload()."
  ],
  mathProblems: [
    {
      id: "p1",
      title: "Problem 1: LoRA Parameter Count Calculation",
      problem: "Given a linear projection layer with input dimension d_in = 4096, output dimension d_out = 4096, and LoRA rank r = 16. Calculate the total number of trainable adapter parameters.",
      solution: "Parameters = r * (d_in + d_out) = 16 * (4096 + 4096) = 16 * 8192 = 131,072 parameters."
    },
    {
      id: "p2",
      title: "Problem 2: Trainable Parameter Ratio (Full FT vs LoRA)",
      problem: "The original weight matrix has dimensions 4096 x 4096. Calculate the percentage of trainable parameters when using LoRA rank r = 16.",
      solution: "Base parameters = 4096 * 4096 = 16,777,216. LoRA parameters = 131,072. Ratio = (131,072 / 16,777,216) * 100% = 0.78125% (a 99.22% parameter reduction)."
    },
    {
      id: "p3",
      title: "Problem 3: LoRA Scaling Factor Calculation",
      problem: "A practitioner sets LoRA rank r = 8 and lora_alpha = 16. Calculate the effective scaling multiplier applied to the update matrix B * A.",
      solution: "Scaling factor = alpha / r = 16 / 8 = 2.0."
    },
    {
      id: "p4",
      title: "Problem 4: QLoRA Base Weight Memory Calculation",
      problem: "Calculate the base weight storage required for a 7 Billion parameter model in FP16 precision versus INT4 / NF4 precision.",
      solution: "FP16 storage = 7B * 2 bytes = 14 GB. INT4 / NF4 storage = 7B * 0.5 bytes = 3.5 GB (plus ~0.3 GB scale overhead in standard quantization, or ~0.08 GB with double quantization)."
    },
    {
      id: "p5",
      title: "Problem 5: Effective Batch Size Derivation",
      problem: "A distributed training run uses microbatch size = 2 per device, gradient accumulation steps = 8, across 2 GPUs. Calculate the effective batch size.",
      solution: "Effective Batch Size = MicroBatch * Accumulation Steps * Num GPUs = 2 * 8 * 2 = 32 sequences per optimizer step."
    },
    {
      id: "p6",
      title: "Problem 6: Optimizer Update Steps Calculation",
      problem: "A dataset contains 8,000 training examples. The training pipeline uses microbatch size = 4 and gradient accumulation steps = 4 on a single GPU. Calculate the total number of optimizer updates per epoch.",
      solution: "Microbatches per epoch = 8,000 / 4 = 2,000 passes. Optimizer updates = 2,000 / 4 = 500 optimizer steps per epoch."
    },
    {
      id: "p7",
      title: "Problem 7: Dataset Split Calculations",
      problem: "A curated instruction dataset contains 20,000 verified records. Calculate the exact sample counts for an 80% train, 10% validation, and 10% test split.",
      solution: "Training set = 20,000 * 0.80 = 16,000 records. Validation set = 20,000 * 0.10 = 2,000 records. Test set = 20,000 * 0.10 = 2,000 records."
    },
    {
      id: "p8",
      title: "Problem 8: Masked Cross-Entropy Loss Calculation",
      problem: "For an assistant token, the model's Softmax layer assigns a predicted probability of 0.25 to the ground-truth target token. Calculate the cross-entropy loss contribution for this token.",
      solution: "Loss L = -ln(P_target) = -ln(0.25) = -(-1.38629) = 1.3863 nats. If predicted probability rises to 0.90, L drops to -ln(0.90) = 0.1054."
    }
  ],
  codingChallenges: [
    "Write a streaming JSONL parser that validates ChatML schema compliance across multi-gigabyte files.",
    "Implement an automated MinHash LSH deduplication pipeline for instruction-response datasets.",
    "Construct a train/validation/test splitting script with zero prompt hash overlap.",
    "Write a PyTorch Dataset class that tokenizes conversational turns with chat templates.",
    "Implement a custom PyTorch data collator that masks prompt tokens with -100.",
    "Build a custom LoRA Linear layer class from scratch with forward pass and scaling.",
    "Write a model inspector that tallies trainable vs frozen parameters across every sub-module.",
    "Configure BitsAndBytesConfig for 4-bit NF4 loading with double quantization.",
    "Write an SFT training script using Hugging Face TRL and SFTConfig.",
    "Implement an automated checkpoint-saving callback that logs GPU memory and loss.",
    "Build a script to resume interrupted SFT training from the latest checkpoint.",
    "Implement merge_and_unload() to produce a standalone FP16/BF16 safetensors model.",
    "Write an automated benchmark runner that computes test set perplexity and rubric score correlation.",
    "Build a FastAPI microservice that loads a merged model with vLLM for high-throughput serving."
  ]
};

export const LLM_FT_UNIVERSITY_RESOURCES = [
  {
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    authors: "Edward J. Hu, Yelong Shen, Phillip Wallis, Zeyuan Allen-Zhu, Yuanzhi Li, Shean Wang, Lu Wang, Weizhu Chen (Microsoft, 2021)",
    description: "The seminal foundational paper introducing low-rank updates Delta W = B * A, intrinsic rank theory, and parameter-efficient fine-tuning.",
    link: "https://arxiv.org/abs/2106.09685"
  },
  {
    title: "QLoRA: Efficient Finetuning of Quantized LLMs",
    authors: "Tim Dettmers, Artidoro Pagnoni, Ari Holtzman, Luke Zettlemoyer (University of Washington, 2023)",
    description: "The breakthrough research demonstrating 4-bit NormalFloat (NF4), double quantization, and paged optimizers for consumer GPU fine-tuning.",
    link: "https://arxiv.org/abs/2305.14314"
  },
  {
    title: "Hugging Face PEFT Documentation",
    authors: "Hugging Face Open-Source Engineering Team",
    description: "Comprehensive documentation covering LoraConfig, get_peft_model, adapter checkpointing, and target module injection.",
    link: "https://huggingface.co/docs/peft"
  },
  {
    title: "Hugging Face TRL (Transformer Reinforcement Learning)",
    authors: "Hugging Face TRL Team",
    description: "Production guide for SFTTrainer, sequence packing, conversational formatting, and reward modeling.",
    link: "https://huggingface.co/docs/trl"
  },
  {
    title: "Hugging Face Transformers: Fine-Tuning Guide",
    authors: "Hugging Face Engineering Team",
    description: "Core reference for AutoModelForCausalLM, AutoTokenizer, TrainingArguments, and Trainer APIs.",
    link: "https://huggingface.co/docs/transformers"
  },
  {
    title: "BitsAndBytes Quantization Library",
    authors: "Tim Dettmers and Hugging Face",
    description: "Low-level CUDA library powering 8-bit and 4-bit matrix multiplication and paged 32-bit optimizers.",
    link: "https://github.com/bitsandbytes-foundation/bitsandbytes"
  },
  {
    title: "Hugging Face Datasets: Data Preparation and Mapping",
    authors: "Hugging Face Datasets Team",
    description: "Fast Apache Arrow-backed streaming, mapping, batching, and filtering for multi-gigabyte corpora.",
    link: "https://huggingface.co/docs/datasets"
  },
  {
    title: "Stanford CS224N: Natural Language Processing with Deep Learning",
    authors: "Christopher Manning and Stanford University",
    description: "University-level lectures on language models, fine-tuning, parameter efficiency, and transformer adaptation.",
    link: "https://web.stanford.edu/class/cs224n/"
  }
];

export const LLM_FT_EXAMINATION_QUESTIONS = [
  {
    id: 1,
    question: "What is the primary objective of Supervised Fine-Tuning (SFT)?",
    options: [
      "Train a foundation model from random weight initialization on raw internet text",
      "Adapt a pretrained model to follow instructions and execute specific tasks using curated input-output demonstrations",
      "Compress the model vocabulary to reduce memory consumption",
      "Convert a 16-bit neural network into INT4 precision without training"
    ],
    correctAnswer: 1,
    explanation: "Supervised fine-tuning takes a general-purpose pretrained model and conditions its output distribution on structured instruction-response pairs to teach specific styles, response formats, and domain behaviors."
  },
  {
    id: 2,
    question: "During LoRA fine-tuning, what happens to the base foundation model parameters W_0?",
    options: [
      "They are deleted to make room for adapter matrices",
      "They are completely frozen (requires_grad = False) and receive zero gradient updates",
      "They are updated with a very high learning rate",
      "They are quantized to 1-bit binary values"
    ],
    correctAnswer: 1,
    explanation: "LoRA freezes all original base parameters W_0 and updates only the small decomposed adapter matrices B and A, eliminating optimizer state overhead for base weights."
  },
  {
    id: 3,
    question: "What does the LoRA rank parameter r determine?",
    options: [
      "The total number of training epochs",
      "The inner bottleneck dimension of the update factorization matrices B (d_out x r) and A (r x d_in)",
      "The maximum context sequence length supported by the model",
      "The batch size used in gradient accumulation"
    ],
    correctAnswer: 1,
    explanation: "Rank r defines the inner dimension of factorization matrices B and A. Lower rank means fewer trainable parameters and lower memory; higher rank increases adaptation capacity."
  },
  {
    id: 4,
    question: "What is the key technological innovation of QLoRA compared to standard LoRA?",
    options: [
      "It completely eliminates transformer attention mechanisms",
      "It quantizes the frozen base model weights into 4-bit NormalFloat (NF4) while maintaining 16-bit LoRA adapter training",
      "It trains all model weights in 32-bit floating point precision",
      "It only fine-tunes the embedding vocabulary layer"
    ],
    correctAnswer: 1,
    explanation: "QLoRA combines a 4-bit NF4 quantized base model with 16-bit LoRA adapters, double quantization of scales, and paged optimizers, slashing base VRAM requirements by ~75% without sacrificing accuracy."
  },
  {
    id: 5,
    question: "What does NF4 stand for in the context of QLoRA quantization?",
    options: [
      "NormalFloat 4-bit representation with quantile spacing optimized for zero-mean Gaussian weights",
      "Non-Linear Feed-Forward 4-layer architecture",
      "Neural Filtering 4-stage optimization pass",
      "Number Formatting 4-byte precision"
    ],
    correctAnswer: 0,
    explanation: "NF4 (NormalFloat 4) is an information-theoretically optimal 4-bit data type designed specifically for weights following a zero-mean normal distribution, outperforming standard FP4."
  },
  {
    id: 6,
    question: "What is Double Quantization in QLoRA?",
    options: [
      "Quantizing model weights twice to produce 2-bit representations",
      "Quantizing the quantization scale constants themselves from 32-bit to 8-bit, saving ~0.37 bits per parameter",
      "Running two identical forward passes for each microbatch",
      "Fine-tuning both the base model and adapters simultaneously"
    ],
    correctAnswer: 1,
    explanation: "Double Quantization quantizes the first-stage quantization constants (scales) from 32-bit floats to 8-bit integers with a second scale, reducing memory overhead from 0.5 bits/param to 0.127 bits/param."
  },
  {
    id: 7,
    question: "Why is a validation set strictly required during LLM fine-tuning?",
    options: [
      "To update the test set labels dynamically",
      "To monitor generalization, detect overfitting, and guide early stopping decisions on unseen data",
      "To increase the effective batch size during backpropagation",
      "To replace the tokenizer subword vocabulary"
    ],
    correctAnswer: 1,
    explanation: "A held-out validation set provides an objective measure of generalization. If validation loss begins climbing while training loss continues falling, the model is overfitting on training examples."
  },
  {
    id: 8,
    question: "What does a saved LoRA adapter checkpoint contain?",
    options: [
      "The entire base model weights along with the optimizer and dataset",
      "Only the lightweight adapter weights (adapter_model.safetensors) and configuration (adapter_config.json)",
      "Only the tokenizer vocabulary dictionary",
      "Only the text outputs generated during evaluation"
    ],
    correctAnswer: 1,
    explanation: "A LoRA checkpoint contains only the adapter matrices B and A and configuration metadata (~80 MB for a 7B model), making it thousands of times smaller than a full 14 GB base model."
  },
  {
    id: 9,
    question: "What is the primary function of Gradient Accumulation?",
    options: [
      "It deletes old model checkpoints to free disk space",
      "It accumulates gradients over multiple forward/backward microbatch passes before performing an optimizer step, simulating a large batch size",
      "It converts 16-bit gradients directly to 4-bit integers",
      "It doubles the learning rate after every epoch"
    ],
    correctAnswer: 1,
    explanation: "Gradient accumulation allows practitioners to achieve a large effective batch size (e.g. 32 or 64) on memory-constrained GPUs by accumulating gradients across multiple smaller microbatches (e.g. 2) before calling optimizer.step()."
  },
  {
    id: 10,
    question: "What is the purpose of merge_and_unload() in the PEFT library?",
    options: [
      "Delete the base foundation model from disk",
      "Permanently fuse LoRA update weights (alpha/r)*B*A into base weights W_0, producing a standalone model with zero inference overhead",
      "Unload the GPU driver to reset VRAM",
      "Re-initialize all model parameters with random noise"
    ],
    correctAnswer: 1,
    explanation: "merge_and_unload() computes W_merged = W_0 + (alpha/r)*B*A directly in memory and discards the adapter hooks, producing standard standalone weights that can be served with zero latency overhead."
  }
];

export const LLM_FT_COMPETENCY_CHECKLIST = [
  "Explain the complete 9-stage LLM training lifecycle from objective to deployment.",
  "Differentiate pretraining, continued pretraining, and supervised fine-tuning (SFT).",
  "Design and validate an instruction-response dataset in ChatML JSONL format.",
  "Create non-overlapping training, validation, and test splits with zero prompt leakage.",
  "Identify and resolve dataset contamination using SHA-256 and MinHash deduplication.",
  "Explain causal language model loss and why prompt loss must be masked with -100 ignore_index.",
  "Compare full fine-tuning and Parameter-Efficient Fine-Tuning (PEFT) across compute and VRAM.",
  "Derive the mathematical LoRA update: h = W_0*x + (alpha/r)*B*A*x.",
  "Calculate trainable parameter counts and parameter savings percentages for LoRA.",
  "Implement a custom LoRA linear layer from scratch in PyTorch.",
  "Explain the 3 pillars of QLoRA: NormalFloat 4-bit (NF4), Double Quantization, and Paged Optimizers.",
  "Configure 4-bit NF4 quantization using Hugging Face BitsAndBytesConfig.",
  "Attach LoRA adapters targeting all linear projection layers with Hugging Face PEFT.",
  "Derive and calculate Effective Batch Size = MicroBatch * Accumulation Steps * Num GPUs.",
  "Explain how Gradient Checkpointing trades ~20% compute time for ~60% activation VRAM savings.",
  "Configure learning rate warmup and cosine annealing schedules for stable SFT optimization.",
  "Serialize and manage standalone LoRA adapter checkpoints (~80 MB safetensors).",
  "Permanently merge adapter weights into base foundation weights using merge_and_unload().",
  "Diagnose training failure modes including overfitting, catastrophic forgetting, and gradient spikes.",
  "Build, fine-tune, evaluate, and deploy a domain-specific assistant (Capstone Project)."
];
