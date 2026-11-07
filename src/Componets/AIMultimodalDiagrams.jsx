import React, { useState, useId } from "react";
import {
  Eye,
  Mic,
  Volume2,
  Scale,
  Radio,
  Zap
} from "lucide-react";

/**
 * 1. Vision Transformer (ViT) Patch Projection Visualizer
 * Interactive 2D image decomposition into non-overlapping patches with spatial positional encodings.
 */
export function VitPatchProjectionVisualizer() {
  const imageSizeId = useId();
  const patchSizeId = useId();
  const [imageSize, setImageSize] = useState(224);
  const [patchSize, setPatchSize] = useState(16);
  const [embedDim, setEmbedDim] = useState(768);

  const gridSide = imageSize / patchSize;
  const numPatches = gridSide * gridSide;
  const rawPatchPixels = patchSize * patchSize * 3; // RGB
  const totalTokens = numPatches + 1; // +1 for [CLS] token

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Eye className="text-orange-600" size={20} />
            Vision Transformer (ViT) Patch Decomposition & Projection Explorer
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Formula: <span className="font-mono text-orange-700 font-bold">N = (H / P) × (W / P)</span> patches projected to dimension <span className="font-mono font-bold">D</span> + <span className="font-mono font-bold">[CLS]</span> token.
          </p>
        </div>
        <span className="rounded-full bg-orange-100 border border-orange-200 px-3 py-1 text-xs font-mono font-bold text-orange-800">
          N = {numPatches} Patches
        </span>
      </div>

      {/* Control Sliders */}
      <div className="grid sm:grid-cols-3 gap-4 p-4 rounded-xl border border-stone-200 bg-stone-50 mb-6 text-xs">
        <div>
          <label htmlFor={imageSizeId} className="font-semibold text-stone-700 block mb-1">
            Image Resolution: <span className="text-orange-700 font-mono font-bold">{imageSize} × {imageSize}</span>
          </label>
          <select
            id={imageSizeId}
            value={imageSize}
            onChange={(e) => setImageSize(Number(e.target.value))}
            className="w-full border border-stone-300 rounded-lg p-1.5 bg-white font-semibold text-stone-800"
          >
            <option value={112}>112 × 112 (Low Detail)</option>
            <option value={224}>224 × 224 (Standard ViT-Base)</option>
            <option value={384}>384 × 384 (High-Res Fine-Tuning)</option>
          </select>
        </div>

        <div>
          <label htmlFor={patchSizeId} className="font-semibold text-stone-700 block mb-1">
            Patch Size (P × P): <span className="text-orange-700 font-mono font-bold">{patchSize} × {patchSize}</span>
          </label>
          <select
            id={patchSizeId}
            value={patchSize}
            onChange={(e) => setPatchSize(Number(e.target.value))}
            className="w-full border border-stone-300 rounded-lg p-1.5 bg-white font-semibold text-stone-800"
          >
            <option value={8}>8 × 8 (Fine-grained / High Token Count)</option>
            <option value={16}>16 × 16 (Industry Standard)</option>
            <option value={32}>32 × 32 (Coarse / Fast)</option>
          </select>
        </div>

        <div>
          <span className="font-semibold text-stone-700 block mb-1">
            Hidden Embedding Dim (D): <span className="text-orange-700 font-mono font-bold">{embedDim}</span>
          </span>
          <select
            value={embedDim}
            onChange={(e) => setEmbedDim(Number(e.target.value))}
            className="w-full border border-stone-300 rounded-lg p-1.5 bg-white font-semibold text-stone-800"
          >
            <option value={384}>384 (ViT-Small)</option>
            <option value={768}>768 (ViT-Base)</option>
            <option value={1024}>1024 (ViT-Large)</option>
          </select>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-center">
        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block">Patch Grid (H/P × W/P)</span>
          <span className="text-lg font-extrabold text-stone-900 font-mono">{gridSide} × {gridSide}</span>
        </div>
        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block">Visual Tokens</span>
          <span className="text-lg font-extrabold text-orange-700 font-mono">{numPatches}</span>
        </div>
        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block">Raw Pixels / Patch</span>
          <span className="text-lg font-extrabold text-stone-900 font-mono">{rawPatchPixels}</span>
        </div>
        <div className="p-3 rounded-lg border border-stone-200 bg-white">
          <span className="text-[11px] text-stone-600 block">Sequence (+ [CLS])</span>
          <span className="text-lg font-extrabold text-emerald-700 font-mono">{totalTokens}</span>
        </div>
      </div>

      {/* Visual Patch Grid Simulation */}
      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50">
        <div className="flex items-center justify-between text-xs font-semibold text-stone-700 mb-2">
          <span>2D Patch Grid Simulation ({Math.min(14, gridSide)} × {Math.min(14, gridSide)} visible):</span>
          <span className="text-stone-500 font-mono text-[11px]">Linear Projection: ℝ^{rawPatchPixels} → ℝ^{embedDim}</span>
        </div>
        <div
          className="grid gap-1 bg-white p-3 rounded-lg border border-stone-300 mx-auto max-w-xs aspect-square overflow-hidden"
          style={{ gridTemplateColumns: `repeat(${Math.min(14, gridSide)}, minmax(0, 1fr))` }}
        >
          {Array.from({ length: Math.min(196, numPatches) }).map((_, idx) => (
            <div
              key={idx}
              title={`Patch #${idx + 1}`}
              className="bg-orange-100 hover:bg-orange-400 transition-colors border border-orange-200/60 aspect-square rounded-[2px] flex items-center justify-center text-[7px] text-orange-800 font-mono select-none"
            >
              {idx === 0 ? "P1" : idx === numPatches - 1 ? `P${numPatches}` : ""}
            </div>
          ))}
        </div>
        <div className="text-[11px] text-stone-500 text-center mt-2">
          Each square represents one {patchSize}×{patchSize} patch vector concatenated with learnable position vector <span className="font-mono">E_pos</span>.
        </div>
      </div>
    </div>
  );
}

/**
 * 2. CLIP Zero-Shot Classifier Sandbox
 * Interactive contrastive language-image matcher with cosine similarities and softmax probabilities.
 */
export function ClipZeroShotClassifierSandbox() {
  const [selectedImage, setSelectedImage] = useState("network_topology");
  const tempScale = 100;

  const imageScenarios = {
    network_topology: {
      name: "Network Topology Schematic",
      desc: "Architectural diagram showing edge routers, switches, and client workstations.",
      candidates: [
        { label: "Computer Networking Topology Diagram", rawSim: 0.88 },
        { label: "Java Source Code Compiler Error", rawSim: 0.24 },
        { label: "Relational Database Schema Table", rawSim: 0.42 },
        { label: "Photographic Portrait of a Student", rawSim: 0.12 }
      ]
    },
    java_error: {
      name: "Java NullPointerException Screenshot",
      desc: "IDE screenshot displaying stack trace and highlighted line in Student.java.",
      candidates: [
        { label: "Java Source Code Compiler Error", rawSim: 0.92 },
        { label: "Computer Networking Topology Diagram", rawSim: 0.18 },
        { label: "Relational Database Schema Table", rawSim: 0.35 },
        { label: "Photographic Portrait of a Student", rawSim: 0.08 }
      ]
    },
    db_schema: {
      name: "PostgreSQL Database Schema",
      desc: "Entity-Relationship model with foreign keys and index definitions.",
      candidates: [
        { label: "Relational Database Schema Table", rawSim: 0.89 },
        { label: "Computer Networking Topology Diagram", rawSim: 0.45 },
        { label: "Java Source Code Compiler Error", rawSim: 0.31 },
        { label: "Photographic Portrait of a Student", rawSim: 0.09 }
      ]
    }
  };

  const active = imageScenarios[selectedImage];

  // Softmax calculation with temperature: exp(sim * temp) / sum(exp(sim * temp))
  const tau = tempScale / 10.0;
  const expScores = active.candidates.map((c) => Math.exp(c.rawSim * tau));
  const sumExp = expScores.reduce((acc, v) => acc + v, 0);
  const results = active.candidates.map((c, i) => ({
    ...c,
    prob: expScores[i] / sumExp
  }));

  results.sort((a, b) => b.prob - a.prob);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Scale className="text-orange-600" size={20} />
            CLIP Contrastive Zero-Shot Classification Sandbox
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Compare visual embedding vectors with natural language prompt embeddings using cosine similarity.
          </p>
        </div>
        <div className="flex gap-1.5">
          {Object.keys(imageScenarios).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedImage(key)}
              className={`px-3 py-1 text-xs font-semibold rounded-lg border transition ${
                selectedImage === key
                  ? "bg-orange-600 text-white border-orange-700"
                  : "bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100"
              }`}
            >
              {imageScenarios[key].name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Image Banner */}
      <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 mb-5 text-xs">
        <span className="font-bold text-stone-900">Current Input Image: </span>
        <span className="text-orange-800 font-semibold">{active.name}</span>
        <p className="text-stone-500 mt-0.5">{active.desc}</p>
      </div>

      {/* Candidate Probabilities Table */}
      <div className="space-y-3 mb-5">
        {results.map((item, idx) => (
          <div
            key={idx}
            className={`p-3.5 rounded-xl border text-xs transition ${
              idx === 0
                ? "border-emerald-300 bg-emerald-50/50 shadow-xs ring-1 ring-emerald-400"
                : "border-stone-200 bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-bold text-stone-900 flex items-center gap-2">
                <span className={`w-5 h-5 rounded-full text-center leading-5 text-[10px] font-mono font-bold ${
                  idx === 0 ? "bg-emerald-600 text-white" : "bg-stone-200 text-stone-700"
                }`}>
                  #{idx + 1}
                </span>
                "a technical diagram of {item.label}"
              </span>
              <div className="text-right">
                <span className="font-mono font-bold text-emerald-700 text-sm">
                  {(item.prob * 100).toFixed(1)}%
                </span>
                <span className="text-[10px] text-stone-500 block">sim: {item.rawSim.toFixed(2)}</span>
              </div>
            </div>
            {/* Probability Progress Bar */}
            <div className="h-2 w-full rounded-full bg-stone-100 overflow-hidden">
              <div
                className={`h-full rounded-full ${idx === 0 ? "bg-emerald-600" : "bg-stone-400"}`}
                style={{ width: `${item.prob * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 text-xs text-stone-600">
        <span className="font-bold text-stone-800">Zero-Shot Mechanism: </span>
        CLIP does not contain hardcoded classes; it computes dot products between the image embedding vector <span className="font-mono">f_v(I)</span> and candidate text prompt vectors <span className="font-mono">f_t(T)</span>.
      </div>
    </div>
  );
}

/**
 * 3. Audio Signal & Word Error Rate (WER) Calculator
 * Waveform vs Spectrogram visualizer and dynamic Levenshtein WER formula explorer.
 */
export function AudioSpectrogramWerCalculator() {
  const sampleRateId = useId();
  const subCountId = useId();
  const delCountId = useId();
  const insCountId = useId();

  const [sampleRate, setSampleRate] = useState(16000);
  const [subCount, setSubCount] = useState(1);
  const [delCount, setDelCount] = useState(0);
  const [insCount, setInsCount] = useState(1);
  const [refWordCount, setRefWordCount] = useState(10);

  const totalErrors = subCount + delCount + insCount;
  const wer = Math.min(100, Math.round((totalErrors / Math.max(1, refWordCount)) * 100));
  const nyquistFreq = sampleRate / 2;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Mic className="text-orange-600" size={20} />
            Audio Signal Processing & Word Error Rate (WER) Benchmarker
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Evaluate sampling rates, Nyquist cutoffs, and ASR transcription accuracy via <span className="font-mono text-orange-700 font-bold">WER = (S + D + I) / N</span>.
          </p>
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-mono font-bold border ${
          wer <= 10 ? "bg-emerald-100 text-emerald-800 border-emerald-300" : "bg-amber-100 text-amber-800 border-amber-300"
        }`}>
          WER: {wer}%
        </span>
      </div>

      {/* Audio Sample Rate & Nyquist */}
      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div className="text-xs font-semibold text-stone-800">
            <label htmlFor={sampleRateId}>Sampling Rate (f_s):</label>
            <select
              id={sampleRateId}
              value={sampleRate}
              onChange={(e) => setSampleRate(Number(e.target.value))}
              className="ml-2 border border-stone-300 rounded-lg p-1 bg-white font-mono font-bold text-orange-800"
            >
              <option value={8000}>8,000 Hz (Telephony Narrowband)</option>
              <option value={16000}>16,000 Hz (Standard Whisper / ASR)</option>
              <option value={44100}>44,100 Hz (Studio CD Audio)</option>
              <option value={48000}>48,000 Hz (Broadcast / WebRTC)</option>
            </select>
          </div>
          <div className="text-xs font-mono text-stone-600">
            Nyquist Cutoff (f_max): <span className="font-bold text-stone-900">{nyquistFreq} Hz</span>
          </div>
        </div>
        <div className="h-12 w-full bg-stone-900 rounded-lg p-1 flex items-center gap-1 overflow-hidden">
          {Array.from({ length: 48 }).map((_, idx) => {
            const height = Math.abs(Math.sin((idx * sampleRate) / 10000)) * 90 + 10;
            return (
              <div
                key={idx}
                className="bg-orange-500 rounded-xs flex-1 transition-all duration-300"
                style={{ height: `${height}%` }}
              />
            );
          })}
        </div>
      </div>

      {/* WER Levenshtein Calculator */}
      <div className="space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
          Interactive Word Error Rate (WER) Simulator
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <label htmlFor={subCountId} className="font-semibold text-stone-700 block mb-1">Substitutions (S):</label>
            <input
              id={subCountId}
              type="number"
              min="0"
              max="10"
              value={subCount}
              onChange={(e) => setSubCount(Number(e.target.value))}
              className="w-full border border-stone-300 rounded-lg p-1.5 bg-white font-mono font-bold text-stone-900"
            />
          </div>
          <div>
            <label htmlFor={delCountId} className="font-semibold text-stone-700 block mb-1">Deletions (D):</label>
            <input
              id={delCountId}
              type="number"
              min="0"
              max="10"
              value={delCount}
              onChange={(e) => setDelCount(Number(e.target.value))}
              className="w-full border border-stone-300 rounded-lg p-1.5 bg-white font-mono font-bold text-stone-900"
            />
          </div>
          <div>
            <label htmlFor={insCountId} className="font-semibold text-stone-700 block mb-1">Insertions (I):</label>
            <input
              id={insCountId}
              type="number"
              min="0"
              max="10"
              value={insCount}
              onChange={(e) => setInsCount(Number(e.target.value))}
              className="w-full border border-stone-300 rounded-lg p-1.5 bg-white font-mono font-bold text-stone-900"
            />
          </div>
          <div>
            <span className="font-semibold text-stone-700 block mb-1">Reference Words (N):</span>
            <input
              type="number"
              min="5"
              max="50"
              value={refWordCount}
              onChange={(e) => setRefWordCount(Number(e.target.value))}
              className="w-full border border-stone-300 rounded-lg p-1.5 bg-white font-mono font-bold text-stone-900"
            />
          </div>
        </div>

        {/* Example Alignment Box */}
        <div className="p-3 rounded-lg border border-stone-200 bg-stone-50 text-xs font-mono space-y-1">
          <div>Ref:  Java handles memory [S: automatically] [D: using] the garbage collector</div>
          <div>Hyp:  Java handles memory [S: manually]      [I: always] the garbage collector</div>
          <div className="text-orange-700 font-bold pt-1">
            Result: S=1, D=1, I=1 across 8 words → WER = 37.5%
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * 4. Neural Text-to-Speech (TTS) Pipeline Explorer
 * Visualizes the 4 stages: Text Normalization -> Phonemes -> Acoustic Model -> Neural Vocoder.
 */
export function NeuralTtsPipelineExplorer() {
  const speakingRateId = useId();
  const pitchShiftId = useId();
  const [activeStage, setActiveStage] = useState(0);
  const [speakingRate, setSpeakingRate] = useState(1.0);
  const [pitchShift, setPitchShift] = useState(0);

  const stages = [
    {
      title: "1. Text Normalization",
      subtitle: "Orthographic Text -> Spoken Text",
      input: "Java 21 costs $75 at 10:30am.",
      output: "Java twenty-one costs seventy-five dollars at ten thirty a m.",
      details: "Expands abbreviations, currency symbols, numbers, dates, and programming jargon into speakable words."
    },
    {
      title: "2. Grapheme-to-Phoneme (G2P)",
      subtitle: "Spoken Words -> Phonetic Symbols",
      input: "Java memory allocation",
      output: "/ˈdʒɑː.və/ /ˈmɛm.ə.ri/ /ˌæl.əˈkeɪ.ʃən/",
      details: "Translates characters into international phonetic units, resolving pronunciation ambiguities."
    },
    {
      title: "3. Acoustic Modeling",
      subtitle: "Phonemes -> Mel-Spectrogram",
      input: "Phoneme sequences + Duration / Pitch controls",
      output: "80-Channel Mel-Spectrogram Matrix (Time × Frequencies)",
      details: "Predicts energy distribution and temporal duration of each sound unit."
    },
    {
      title: "4. Neural Vocoder (HiFi-GAN)",
      subtitle: "Mel-Spectrogram -> Audible Waveform",
      input: "Log-Mel Spectrogram",
      output: "16-bit 24kHz PCM Sound Waveform (.wav)",
      details: "Deep generative convolutional model that synthesizes high-fidelity pressure waves."
    }
  ];

  const current = stages[activeStage];
  // Calculate simulated Real-Time Factor (RTF)
  const simulatedRtf = (0.22 / speakingRate).toFixed(3);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Volume2 className="text-orange-600" size={20} />
            Neural Text-to-Speech (TTS) Architecture Explorer
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Step through the 4 stages converting raw text characters into natural audible speech waveforms.
          </p>
        </div>
        <span className="rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 text-xs font-mono font-bold">
          RTF: {simulatedRtf} (Real-Time)
        </span>
      </div>

      {/* Progress Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {stages.map((stg, idx) => (
          <button
            key={idx}
            onClick={() => setActiveStage(idx)}
            className={`p-3 rounded-xl border text-left transition cursor-pointer ${
              activeStage === idx
                ? "border-orange-500 bg-orange-50/50 shadow-xs ring-1 ring-orange-400"
                : "border-stone-200 bg-stone-50 hover:bg-stone-100"
            }`}
          >
            <div className="text-[10px] font-mono text-stone-500 uppercase">Stage {idx + 1}</div>
            <div className="text-xs font-bold text-stone-900 mt-0.5">{stg.title.split(". ")[1]}</div>
          </button>
        ))}
      </div>

      {/* Stage Detail Card */}
      <div className="p-4 sm:p-5 rounded-xl border border-stone-200 bg-stone-50 mb-6 text-xs">
        <div className="flex justify-between items-center border-b border-stone-200 pb-2 mb-3">
          <h4 className="font-bold text-stone-900 text-sm">{current.title}</h4>
          <span className="font-mono text-stone-500">{current.subtitle}</span>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 mb-3">
          <div className="p-3 rounded-lg bg-white border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Stage Input:</span>
            <span className="font-mono text-stone-700">{current.input}</span>
          </div>
          <div className="p-3 rounded-lg bg-white border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">Stage Output:</span>
            <span className="font-mono text-emerald-700">{current.output}</span>
          </div>
        </div>
        <p className="text-stone-600">{current.details}</p>
      </div>

      {/* Prosody Controls */}
      <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-xl border border-stone-200 bg-white text-xs">
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor={speakingRateId} className="font-semibold text-stone-700">Speaking Rate:</label>
            <span className="font-mono font-bold text-orange-700">{speakingRate}x</span>
          </div>
          <input
            id={speakingRateId}
            type="range"
            min="0.75"
            max="1.5"
            step="0.05"
            value={speakingRate}
            onChange={(e) => setSpeakingRate(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor={pitchShiftId} className="font-semibold text-stone-700">Pitch Variation (Semitones):</label>
            <span className="font-mono font-bold text-orange-700">{pitchShift > 0 ? `+${pitchShift}` : pitchShift}</span>
          </div>
          <input
            id={pitchShiftId}
            type="range"
            min="-4"
            max="4"
            step="1"
            value={pitchShift}
            onChange={(e) => setPitchShift(Number(e.target.value))}
            className="w-full accent-orange-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * 5. Real-Time Conversational Voice Assistant & Barge-In Simulator
 * Visualizes speech endpointing, turn-taking, and instant audio playback muting when interrupted.
 */
export function RealtimeVoiceBargeInSimulator() {
  const [sessionState, setSessionState] = useState("IDLE"); // IDLE, USER_SPEAKING, AI_REASONING, AI_SPEAKING, BARGE_IN_TRIGGERED
  const latencyMs = 650;

  const triggerUserTurn = () => {
    setSessionState("USER_SPEAKING");
    setTimeout(() => {
      setSessionState("AI_REASONING");
      setTimeout(() => {
        setSessionState("AI_SPEAKING");
      }, 350);
    }, 1200);
  };

  const triggerBargeIn = () => {
    setSessionState("BARGE_IN_TRIGGERED");
    setTimeout(() => {
      setSessionState("USER_SPEAKING");
    }, 400);
  };

  const resetSession = () => {
    setSessionState("IDLE");
  };

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/80 pb-4 mb-5">
        <div>
          <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Radio className="text-orange-600" size={20} />
            Real-Time Voice Assistant & Full-Duplex Barge-In Simulator
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Test conversational turn-taking, sub-1000ms latency budgets, and instant audio muting when the user interrupts.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
            sessionState === "AI_SPEAKING"
              ? "bg-emerald-100 text-emerald-800 border-emerald-300"
              : sessionState === "BARGE_IN_TRIGGERED"
              ? "bg-red-100 text-red-800 border-red-300 animate-pulse"
              : "bg-stone-100 text-stone-700 border-stone-200"
          }`}>
            State: {sessionState}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={triggerUserTurn}
          disabled={sessionState !== "IDLE"}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-orange-600 text-white disabled:opacity-40 hover:bg-orange-700 cursor-pointer"
        >
          1. Student Speaks Question
        </button>
        <button
          onClick={triggerBargeIn}
          disabled={sessionState !== "AI_SPEAKING"}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-red-600 text-white disabled:opacity-40 hover:bg-red-700 cursor-pointer flex items-center gap-1.5"
        >
          <Zap size={14} /> 2. Interrupt AI Mid-Sentence (Barge-In)
        </button>
        <button
          onClick={resetSession}
          className="px-3 py-2 text-xs font-semibold rounded-lg border border-stone-300 bg-stone-50 text-stone-700 hover:bg-stone-100 cursor-pointer"
        >
          Reset Session
        </button>
      </div>

      {/* Timeline Representation */}
      <div className="p-4 rounded-xl border border-stone-200 bg-stone-50 mb-5 space-y-3 text-xs">
        <div className="flex justify-between items-center text-stone-700 font-semibold border-b border-stone-200 pb-2">
          <span>Conversational Turn Timeline:</span>
          <span className="font-mono text-orange-700">Total Latency: ~{latencyMs}ms</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] font-mono">
          <div className={`p-2.5 rounded-lg border ${sessionState === "USER_SPEAKING" ? "bg-orange-100 border-orange-400 font-bold" : "bg-white border-stone-200"}`}>
            <div>Client VAD</div>
            <div className="text-[10px] text-stone-500">Endpoint: ~800ms</div>
          </div>
          <div className={`p-2.5 rounded-lg border ${sessionState === "AI_REASONING" ? "bg-orange-100 border-orange-400 font-bold" : "bg-white border-stone-200"}`}>
            <div>Faster-Whisper</div>
            <div className="text-[10px] text-stone-500">ASR: ~180ms</div>
          </div>
          <div className={`p-2.5 rounded-lg border ${sessionState === "AI_REASONING" ? "bg-orange-100 border-orange-400 font-bold" : "bg-white border-stone-200"}`}>
            <div>LLM Reasoning</div>
            <div className="text-[10px] text-stone-500">First Token: ~300ms</div>
          </div>
          <div className={`p-2.5 rounded-lg border ${sessionState === "AI_SPEAKING" ? "bg-emerald-100 border-emerald-400 font-bold text-emerald-900" : sessionState === "BARGE_IN_TRIGGERED" ? "bg-red-100 border-red-400 text-red-900 font-bold" : "bg-white border-stone-200"}`}>
            <div>TTS Playback</div>
            <div className="text-[10px] text-stone-500">{sessionState === "BARGE_IN_TRIGGERED" ? "MUTED (<20ms)" : "Streaming"}</div>
          </div>
        </div>
      </div>

      {/* Dialogue Box */}
      <div className="p-3.5 rounded-xl border border-stone-200 bg-white text-xs space-y-1.5">
        <div className="text-stone-700">
          <span className="font-bold text-stone-900">Student: </span>
          "Explain the difference between heap memory and stack memory."
        </div>
        {sessionState === "AI_SPEAKING" && (
          <div className="text-emerald-800 font-medium">
            <span className="font-bold text-stone-900">AI Tutor (Speaking): </span>
            "Java memory is divided into stack and heap. The stack stores local variable frames, while the heap stores runtime objects..."
          </div>
        )}
        {sessionState === "BARGE_IN_TRIGGERED" && (
          <div className="text-red-700 font-bold bg-red-50 p-2 rounded border border-red-200">
            [Barge-In Event]: Audio output buffer flushed immediately. Generation stopped. Now listening to user interruption.
          </div>
        )}
      </div>
    </div>
  );
}
