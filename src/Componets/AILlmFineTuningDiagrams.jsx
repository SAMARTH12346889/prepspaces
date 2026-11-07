import React, { useState, useId } from "react";
import {
  Cpu,
  Layers,
  Sliders,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Info,
  TrendingDown
} from "lucide-react";

/**
 * 1. LoRA Rank & Parameter Explorer
 * Calculates Delta W = (alpha / r) * B * A, parameter reduction, and savings percentage.
 */
export function LoraRankAndParameterExplorer() {
  const [dIn, setDIn] = useState(4096);
  const [dOut, setDOut] = useState(4096);
  const [rank, setRank] = useState(16);
  const [alpha, setAlpha] = useState(32);

  const fullParams = dIn * dOut;
  const loraParams = rank * (dIn + dOut);
  const savingsPct = ((1 - loraParams / fullParams) * 100).toFixed(3);
  const scalingFactor = (alpha / rank).toFixed(2);
  const fullMemoryMB = ((fullParams * 2) / (1024 * 1024)).toFixed(2); // FP16 2 bytes
  const loraMemoryMB = ((loraParams * 2) / (1024 * 1024)).toFixed(3);

  const dInId = useId();
  const dOutId = useId();
  const rankId = useId();
  const alphaId = useId();

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
            <Layers size={18} />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              LoRA Rank & Low-Rank Parameter Explorer
            </h3>
            <p className="text-xs text-stone-500">
              Factorize weight updates into {"\\( \\Delta W = \\frac{\\alpha}{r} (B \\times A) \\)"}
            </p>
          </div>
        </div>
        <span className="rounded-full bg-orange-50 border border-orange-200 px-3 py-1 font-mono text-xs font-bold text-orange-700">
          Scaling: {scalingFactor}x
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <div>
          <label htmlFor={dInId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Input Dim (\(d_{"{in}"}\)): <span className="font-mono text-orange-700 font-bold">{dIn}</span>
          </label>
          <input
            id={dInId}
            type="range"
            min={1024}
            max={8192}
            step={1024}
            value={dIn}
            onChange={(e) => setDIn(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>

        <div>
          <label htmlFor={dOutId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Output Dim (\(d_{"{out}"}\)): <span className="font-mono text-orange-700 font-bold">{dOut}</span>
          </label>
          <input
            id={dOutId}
            type="range"
            min={1024}
            max={8192}
            step={1024}
            value={dOut}
            onChange={(e) => setDOut(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>

        <div>
          <label htmlFor={rankId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Rank (\(r\)): <span className="font-mono text-orange-700 font-bold">{rank}</span>
          </label>
          <input
            id={rankId}
            type="range"
            min={1}
            max={64}
            step={1}
            value={rank}
            onChange={(e) => setRank(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>

        <div>
          <label htmlFor={alphaId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Alpha (\(\alpha\)): <span className="font-mono text-orange-700 font-bold">{alpha}</span>
          </label>
          <input
            id={alphaId}
            type="range"
            min={8}
            max={128}
            step={8}
            value={alpha}
            onChange={(e) => setAlpha(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 p-4 rounded-xl bg-stone-50 border border-stone-200 font-mono text-xs">
        <div className="p-3 bg-white rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Full Weight Params</div>
          <div className="text-base font-bold text-stone-900 mt-0.5">{fullParams.toLocaleString()}</div>
          <div className="text-[10px] text-stone-400 mt-1">{fullMemoryMB} MB (FP16)</div>
        </div>

        <div className="p-3 bg-white rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">LoRA Trainable Params</div>
          <div className="text-base font-bold text-orange-600 mt-0.5">{loraParams.toLocaleString()}</div>
          <div className="text-[10px] text-stone-400 mt-1">{loraMemoryMB} MB (FP16)</div>
        </div>

        <div className="p-3 bg-white rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Parameter Reduction</div>
          <div className="text-base font-bold text-emerald-600 mt-0.5">{savingsPct}%</div>
          <div className="text-[10px] text-stone-400 mt-1">Trainable: {(100 - Number(savingsPct)).toFixed(3)}%</div>
        </div>

        <div className="p-3 bg-white rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Scaling Multiplier {"(\\alpha / r)"}</div>
          <div className="text-base font-bold text-indigo-600 mt-0.5">{scalingFactor}x</div>
          <div className="text-[10px] text-stone-400 mt-1">Stabilizes gradient step</div>
        </div>
      </div>

      <div className="mt-4 p-3 rounded-lg bg-orange-50/70 border border-orange-200/60 text-xs text-orange-950 flex items-start gap-2.5">
        <Info size={16} className="text-orange-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Key Mathematical Principle:</strong> Instead of computing gradient updates across all {fullParams.toLocaleString()} parameters, LoRA freezes \(W_0\) and updates two low-rank matrices: \(A \in \mathbb{"{R}"}^{"{r \\times d_{in}}"} \) and \(B \in \mathbb{"{R}"}^{"{d_{out} \\times r}"} \). Matrix \(B\) is initialized to zeros so that \(\Delta W = 0\) at step 0!
        </p>
      </div>
    </div>
  );
}

/**
 * 2. QLoRA Quantization & Memory Visualizer
 * Compares FP16 full fine-tuning, INT8, and QLoRA 4-bit NF4 with Double Quantization.
 */
export function QloraQuantizationAndMemoryVisualizer() {
  const [modelSize, setModelSize] = useState(7); // 7B
  const [seqLen, setSeqLen] = useState(2048);
  const [batchSize, setBatchSize] = useState(2);

  // FP16 Full FT: 16 bytes/param (Weights=2B, Gradients=2B, AdamW=8B, Master=4B)
  const fullFTTotalGB = (modelSize * 16.0).toFixed(1);
  const fullFTWeightsGB = (modelSize * 2.0).toFixed(1);
  const fullFTOptimizerGB = (modelSize * 12.0).toFixed(1);

  // QLoRA 4-bit NF4 + Double Quantization + LoRA adapter
  // Base weights = 0.55 bytes/param (4-bit + double quant)
  // LoRA adapter = ~20M params in FP16 with AdamW = ~0.35 GB
  const qloraBaseGB = (modelSize * 0.55).toFixed(2);
  const qloraAdapterGB = 0.35;
  const qloraActivationGB = ((seqLen * batchSize * 32 * 128 * 2) / (1024 * 1024 * 1024) * 0.4).toFixed(2);
  const qloraTotalGB = (Number(qloraBaseGB) + qloraAdapterGB + Number(qloraActivationGB)).toFixed(2);

  const modelSizeId = useId();
  const seqLenId = useId();
  const batchSizeId = useId();

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <Cpu size={18} />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              QLoRA 4-Bit NF4 & VRAM Footprint Visualizer
            </h3>
            <p className="text-xs text-stone-500">
              Compare Full FP16 Fine-Tuning versus QLoRA NormalFloat 4-bit with Double Quantization
            </p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 font-mono text-xs font-bold text-emerald-700">
          ~{(fullFTTotalGB / qloraTotalGB).toFixed(1)}x VRAM Reduction
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <div>
          <label htmlFor={modelSizeId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Model Scale: <span className="font-mono text-orange-700 font-bold">{modelSize}B Parameters</span>
          </label>
          <select
            id={modelSizeId}
            value={modelSize}
            onChange={(e) => setModelSize(Number(e.target.value))}
            className="w-full rounded-lg border border-stone-300 p-2 text-xs font-semibold bg-white"
          >
            <option value={3}>3B (Compact - Qwen2.5-3B / Llama-3.2-3B)</option>
            <option value={7}>7B (Standard - Qwen2.5-7B / Llama-3.1-8B)</option>
            <option value={14}>14B (Intermediate - Qwen2.5-14B)</option>
            <option value={70}>70B (Frontier - Llama-3.1-70B / Qwen-72B)</option>
          </select>
        </div>

        <div>
          <label htmlFor={seqLenId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Sequence Length: <span className="font-mono text-orange-700 font-bold">{seqLen} tokens</span>
          </label>
          <input
            id={seqLenId}
            type="range"
            min={512}
            max={4096}
            step={512}
            value={seqLen}
            onChange={(e) => setSeqLen(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>

        <div>
          <label htmlFor={batchSizeId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            MicroBatch Size: <span className="font-mono text-orange-700 font-bold">{batchSize} sequences</span>
          </label>
          <input
            id={batchSizeId}
            type="range"
            min={1}
            max={8}
            step={1}
            value={batchSize}
            onChange={(e) => setBatchSize(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid gap-4 md:grid-cols-2 mb-4">
        {/* Full Fine-Tuning Card */}
        <div className="p-4 rounded-xl border border-red-200 bg-red-50/30">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-red-900 text-sm">Full 16-Bit Fine-Tuning</span>
            <span className="font-mono text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded">
              {fullFTTotalGB} GB VRAM
            </span>
          </div>
          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between text-stone-600">
              <span>Base Weights (FP16):</span>
              <span className="font-semibold">{fullFTWeightsGB} GB</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>AdamW States (FP32):</span>
              <span className="font-semibold">{fullFTOptimizerGB} GB</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Gradients (FP16):</span>
              <span className="font-semibold">{fullFTWeightsGB} GB</span>
            </div>
            <div className="pt-2 border-t border-red-200 flex justify-between font-bold text-red-900">
              <span>Target Hardware:</span>
              <span>{modelSize >= 70 ? "8x 80GB H100s" : "2x 80GB A100s"}</span>
            </div>
          </div>
        </div>

        {/* QLoRA 4-Bit Card */}
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30">
          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-emerald-900 text-sm">QLoRA (NF4 + Double Quant)</span>
            <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              {qloraTotalGB} GB VRAM
            </span>
          </div>
          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between text-stone-600">
              <span>Base Weights (4-bit NF4):</span>
              <span className="font-semibold">{qloraBaseGB} GB</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>LoRA Adapters + AdamW:</span>
              <span className="font-semibold">~0.35 GB</span>
            </div>
            <div className="flex justify-between text-stone-600">
              <span>Activation Footprint:</span>
              <span className="font-semibold">~{qloraActivationGB} GB</span>
            </div>
            <div className="pt-2 border-t border-emerald-200 flex justify-between font-bold text-emerald-900">
              <span>Target Hardware:</span>
              <span>{modelSize >= 70 ? "1x 48GB A6000" : "1x 16GB / 24GB RTX 4090"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-700">
        <strong>Double Quantization Advantage:</strong> By quantizing the 32-bit quantization scaling constants down to 8-bit, QLoRA saves an additional 0.373 bits per parameter, freeing approximately 373 MB of memory on a 7B model.
      </div>
    </div>
  );
}

/**
 * 3. Assistant-Only Loss Masking Interactive Playground
 * Shows how prompt tokens are set to -100 so cross-entropy is only calculated on assistant turns.
 */
export function LossMaskingInteractivePlayground() {
  const [maskingEnabled, setMaskingEnabled] = useState(true);

  const sampleTokens = [
    { text: "<|im_start|>system", role: "system", isPrompt: true },
    { text: "You are a Java interviewer.<|im_end|>", role: "system", isPrompt: true },
    { text: "<|im_start|>user", role: "user", isPrompt: true },
    { text: "What is JVM bytecode?<|im_end|>", role: "user", isPrompt: true },
    { text: "<|im_start|>assistant", role: "assistant_tag", isPrompt: true },
    { text: "Bytecode", role: "assistant", isPrompt: false },
    { text: "is", role: "assistant", isPrompt: false },
    { text: "the", role: "assistant", isPrompt: false },
    { text: "intermediate", role: "assistant", isPrompt: false },
    { text: "instruction", role: "assistant", isPrompt: false },
    { text: "set", role: "assistant", isPrompt: false },
    { text: "executed", role: "assistant", isPrompt: false },
    { text: "by", role: "assistant", isPrompt: false },
    { text: "the", role: "assistant", isPrompt: false },
    { text: "JVM.<|im_end|>", role: "assistant", isPrompt: false }
  ];

  const totalTokens = sampleTokens.length;
  const promptTokens = sampleTokens.filter(t => t.isPrompt).length;
  const assistantTokens = totalTokens - promptTokens;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
            <Activity size={18} />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              Assistant-Only Loss Masking (\(-100\) Convention)
            </h3>
            <p className="text-xs text-stone-500">
              Mask prompt token labels so the model learns how to respond, not memorize user inputs
            </p>
          </div>
        </div>

        <button
          onClick={() => setMaskingEnabled(!maskingEnabled)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
            maskingEnabled
              ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
              : "bg-red-100 text-red-800 border border-red-300"
          }`}
        >
          {maskingEnabled ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
          <span>{maskingEnabled ? "Loss Masking ACTIVE" : "Unmasked (Naive Training)"}</span>
        </button>
      </div>

      <div className="mb-4">
        <div className="text-xs font-semibold text-stone-700 mb-2">Token Sequence Stream:</div>
        <div className="flex flex-wrap gap-1.5 p-3 rounded-xl bg-stone-900 text-white font-mono text-xs">
          {sampleTokens.map((token, idx) => {
            const isMasked = maskingEnabled && token.isPrompt;
            return (
              <span
                key={idx}
                className={`px-2 py-1 rounded transition-all ${
                  isMasked
                    ? "bg-stone-800 text-stone-500 border border-stone-700 line-through"
                    : token.role === "assistant"
                    ? "bg-emerald-950 text-emerald-300 border border-emerald-500 font-bold"
                    : "bg-orange-950 text-orange-300 border border-orange-500"
                }`}
                title={isMasked ? "Label = -100 (Ignored by Cross-Entropy Loss)" : "Label = target token (Active Gradient)"}
              >
                {token.text}
                <span className="block text-[9px] opacity-70">
                  {isMasked ? "-100" : `ID: ${1000 + idx}`}
                </span>
              </span>
            );
          })}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 font-mono text-xs">
        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Prompt Tokens</div>
          <div className="text-base font-bold text-stone-800 mt-0.5">{promptTokens} tokens</div>
          <div className="text-[10px] text-stone-500 mt-1">
            {maskingEnabled ? "Grad = 0 (Ignored via -100)" : "Grad Active (Wasteful)"}
          </div>
        </div>

        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Assistant Tokens</div>
          <div className="text-base font-bold text-emerald-600 mt-0.5">{assistantTokens} tokens</div>
          <div className="text-[10px] text-emerald-700 mt-1">Active Loss & Backprop</div>
        </div>

        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Gradient Efficiency</div>
          <div className="text-base font-bold text-indigo-600 mt-0.5">
            {maskingEnabled ? "100% Focused" : "38% Diluted on Prompts"}
          </div>
          <div className="text-[10px] text-stone-500 mt-1">Prevents prompt memorization</div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Gradient Accumulation & Effective Batch Simulator
 * Simulates Effective Batch Size = MicroBatch * Accumulation Steps * GPUs
 */
export function GradientAccumulationAndBatchSimulator() {
  const [microBatch, setMicroBatch] = useState(2);
  const [accumSteps, setAccumSteps] = useState(8);
  const [gpus, setGpus] = useState(1);
  const [datasetSize, setDatasetSize] = useState(8000);
  const epochs = 3;

  const effectiveBatch = microBatch * accumSteps * gpus;
  const microbatchesPerEpoch = Math.ceil(datasetSize / microBatch);
  const optimizerStepsPerEpoch = Math.ceil(microbatchesPerEpoch / (accumSteps * gpus));
  const totalOptimizerSteps = optimizerStepsPerEpoch * epochs;

  const microBatchId = useId();
  const accumStepsId = useId();
  const gpusId = useId();
  const datasetSizeId = useId();

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <Sliders size={18} />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              Effective Batch Size & Gradient Accumulation Simulator
            </h3>
            <p className="text-xs text-stone-500">
              \(\text{"{Effective Batch}"} = \text{"{MicroBatch}"} \times \text{"{AccumSteps}"} \times \text{"{GPUs}"}\)
            </p>
          </div>
        </div>
        <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 font-mono text-xs font-bold text-blue-700">
          Effective Batch: {effectiveBatch}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <div>
          <label htmlFor={microBatchId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            MicroBatch: <span className="font-mono text-orange-700 font-bold">{microBatch} / GPU</span>
          </label>
          <input
            id={microBatchId}
            type="range"
            min={1}
            max={8}
            step={1}
            value={microBatch}
            onChange={(e) => setMicroBatch(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>

        <div>
          <label htmlFor={accumStepsId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Accumulation Steps: <span className="font-mono text-orange-700 font-bold">{accumSteps}</span>
          </label>
          <input
            id={accumStepsId}
            type="range"
            min={1}
            max={32}
            step={1}
            value={accumSteps}
            onChange={(e) => setAccumSteps(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>

        <div>
          <label htmlFor={gpusId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Devices (GPUs): <span className="font-mono text-orange-700 font-bold">{gpus}</span>
          </label>
          <input
            id={gpusId}
            type="range"
            min={1}
            max={8}
            step={1}
            value={gpus}
            onChange={(e) => setGpus(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>

        <div>
          <label htmlFor={datasetSizeId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Dataset Size: <span className="font-mono text-orange-700 font-bold">{datasetSize.toLocaleString()}</span>
          </label>
          <input
            id={datasetSizeId}
            type="range"
            min={1000}
            max={20000}
            step={1000}
            value={datasetSize}
            onChange={(e) => setDatasetSize(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-4 font-mono text-xs">
        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Effective Batch Size</div>
          <div className="text-base font-bold text-blue-600 mt-0.5">{effectiveBatch}</div>
          <div className="text-[10px] text-stone-400 mt-1">Sequences per step</div>
        </div>

        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Forward Passes / Epoch</div>
          <div className="text-base font-bold text-stone-900 mt-0.5">{microbatchesPerEpoch.toLocaleString()}</div>
          <div className="text-[10px] text-stone-400 mt-1">Microbatch evaluations</div>
        </div>

        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Optimizer Steps / Epoch</div>
          <div className="text-base font-bold text-orange-600 mt-0.5">{optimizerStepsPerEpoch.toLocaleString()}</div>
          <div className="text-[10px] text-stone-400 mt-1">Weight updates</div>
        </div>

        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
          <div className="text-stone-500 text-[11px]">Total Training Steps</div>
          <div className="text-base font-bold text-emerald-600 mt-0.5">{totalOptimizerSteps.toLocaleString()}</div>
          <div className="text-[10px] text-stone-400 mt-1">Across {epochs} epochs</div>
        </div>
      </div>
    </div>
  );
}

/**
 * 5. Training Hyperparameter Tuning Tool
 * Visualizes learning rate warmup, cosine decay schedule, and stability checks.
 */
export function TrainingHyperparameterTuningTool() {
  const [lr, setLr] = useState(0.0002); // 2e-4
  const [warmupRatio, setWarmupRatio] = useState(0.05); // 5%
  const [totalSteps] = useState(1000);

  const warmupSteps = Math.floor(totalSteps * warmupRatio);

  // Generate 50 points along the schedule curve
  const points = [];
  for (let i = 0; i <= 50; i++) {
    const step = (i / 50) * totalSteps;
    let currentLr = 0;
    if (step < warmupSteps) {
      currentLr = lr * (step / warmupSteps);
    } else {
      const progress = (step - warmupSteps) / (totalSteps - warmupSteps);
      currentLr = lr * 0.5 * (1 + Math.cos(Math.PI * progress));
    }
    points.push({ step, currentLr });
  }

  const maxSvgHeight = 120;
  const svgPoints = points
    .map((p, idx) => {
      const x = (idx / 50) * 400;
      const y = maxSvgHeight - (p.currentLr / lr) * (maxSvgHeight - 20) - 10;
      return `${x},${y}`;
    })
    .join(" ");

  const lrId = useId();
  const warmupId = useId();

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            <TrendingDown size={18} />
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-base sm:text-lg">
              Learning Rate Scheduler & Warmup Curve
            </h3>
            <p className="text-xs text-stone-500">
              Cosine annealing schedule with linear warmup to prevent early gradient explosion
            </p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 font-mono text-xs font-bold text-emerald-700">
          Peak LR: {lr.toExponential(1)}
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        <div>
          <label htmlFor={lrId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Peak Learning Rate (\(\eta\)): <span className="font-mono text-orange-700 font-bold">{lr.toExponential(1)}</span>
          </label>
          <input
            id={lrId}
            type="range"
            min={0.00005}
            max={0.0005}
            step={0.00005}
            value={lr}
            onChange={(e) => setLr(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>

        <div>
          <label htmlFor={warmupId} className="block text-xs font-semibold text-stone-700 mb-1.5">
            Warmup Ratio: <span className="font-mono text-orange-700 font-bold">{(warmupRatio * 100).toFixed(0)}% ({warmupSteps} steps)</span>
          </label>
          <input
            id={warmupId}
            type="range"
            min={0.01}
            max={0.20}
            step={0.01}
            value={warmupRatio}
            onChange={(e) => setWarmupRatio(Number(e.target.value))}
            className="w-full accent-orange-600"
          />
        </div>
      </div>

      {/* SVG Chart */}
      <div className="p-4 rounded-xl bg-stone-900 text-stone-100 font-mono text-xs mb-4">
        <div className="flex justify-between text-[11px] text-stone-400 mb-2">
          <span>Step 0 (0.0)</span>
          <span>Warmup Peak ({warmupSteps} steps: {lr.toExponential(1)})</span>
          <span>Step {totalSteps} (0.0)</span>
        </div>
        <svg viewBox="0 0 400 120" className="w-full h-28 overflow-visible">
          {/* Warmup vertical line */}
          <line
            x1={(warmupRatio * 400).toString()}
            y1="0"
            x2={(warmupRatio * 400).toString()}
            y2="120"
            stroke="#f97316"
            strokeDasharray="3,3"
            strokeWidth="1.5"
          />
          {/* Curve */}
          <polyline
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            points={svgPoints}
          />
        </svg>
      </div>

      <div className="p-3 rounded-lg bg-emerald-50/80 border border-emerald-200/60 text-xs text-emerald-950 flex items-start gap-2.5">
        <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Optimal Fine-Tuning Setup:</strong> LoRA requires higher learning rates (e.g. \(2 \times 10^{"{-4}"}\)) than full fine-tuning (\(2 \times 10^{"{-5}"}\)) because only a fraction of weights are receiving gradient updates. Warmup smoothly stabilizes initial adapter activations.
        </p>
      </div>
    </div>
  );
}
