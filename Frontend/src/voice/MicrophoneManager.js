/**
 * MicrophoneManager.js
 *
 * Centralized, production-grade audio capture and recording manager for Nova:
 * - Single microphone stream lifecycle with safe stream reuse
 * - Circular pre-roll audio buffer (~350ms / 5600 samples at 16kHz) to prevent initial syllable clipping
 * - Native 16kHz 16-bit PCM WAV encoding directly in memory
 * - Clean separation between passive listening (VAD & pre-roll) and active command recording
 * - Atomic utterance buffer freezing to prevent trailing audio contamination
 * - Echo cancellation, noise suppression, and auto gain control
 */

export class MicrophoneManager {
  constructor() {
    this.stream = null;
    this.audioContext = null;
    this.analyser = null;
    this.sourceNode = null;
    this.processorNode = null;

    // Stream & Recording state
    this.isStreamActive = false;
    this.isRecording = false;
    this.targetSampleRate = 16000;

    // Circular pre-roll ring buffer (~350ms of 16kHz audio = 5600 samples)
    this.preRollCapacity = 5600;
    this.preRollBuffer = [];

    // Active utterance sample accumulator
    this.pcmSamples = [];
  }

  /**
   * Acquire or reuse clean microphone stream and initialize Web Audio pipeline
   */
  async getStream() {
    if (this.stream && this.stream.active && this.stream.getAudioTracks().some((t) => t.readyState === "live")) {
      this.initAudioNodes();
      return this.stream;
    }

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
        video: false,
      });

      this.isStreamActive = true;
      this.initAudioNodes();
      return this.stream;
    } catch (err) {
      console.error("[MicrophoneManager] Failed to acquire microphone stream:", err);
      this.isStreamActive = false;
      throw err;
    }
  }

  /**
   * Initialize Web Audio Context, Analyser, and Downsampling Processor Node
   */
  initAudioNodes() {
    if (!this.audioContext || this.audioContext.state === "closed") {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioContext = new AudioCtx();
    }

    if (this.audioContext.state === "suspended") {
      this.audioContext.resume().catch(() => {});
    }

    if (this.stream && !this.sourceNode) {
      try {
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 512;
        this.analyser.smoothingTimeConstant = 0.3;

        this.sourceNode = this.audioContext.createMediaStreamSource(this.stream);
        this.sourceNode.connect(this.analyser);

        // ScriptProcessorNode for real-time 16kHz downsampling & ring buffering
        const bufferSize = 4096;
        const inputSampleRate = this.audioContext.sampleRate;

        this.processorNode = this.audioContext.createScriptProcessor(bufferSize, 1, 1);
        this.processorNode.onaudioprocess = (e) => {
          if (!this.isStreamActive) return;
          const inputData = e.inputBuffer.getChannelData(0);

          // Downsample input to 16000Hz PCM
          const downsampled = this.downsampleBuffer(inputData, inputSampleRate, this.targetSampleRate);

          for (let i = 0; i < downsampled.length; i++) {
            const sample = downsampled[i];

            // Always update circular pre-roll buffer during listening
            this.preRollBuffer.push(sample);
            if (this.preRollBuffer.length > this.preRollCapacity) {
              this.preRollBuffer.shift();
            }

            // If actively recording an utterance, append sample to PCM buffer
            if (this.isRecording) {
              this.pcmSamples.push(sample);
            }
          }
        };

        this.sourceNode.connect(this.processorNode);
        this.processorNode.connect(this.audioContext.destination);
      } catch (e) {
        console.warn("[MicrophoneManager] AudioContext setup warning:", e);
      }
    }
  }

  /**
   * Get current microphone input volume (0.0 to 1.0)
   */
  getAudioLevel() {
    if (!this.analyser) return 0;
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);

    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i];
    }
    const avg = sum / data.length;
    return Math.min(1.0, avg / 128.0);
  }

  /**
   * Start recording an utterance with pre-roll audio prepended to avoid clipping first word
   */
  async startRecording() {
    await this.getStream();

    // Prepend circular pre-roll audio so the initial word is preserved
    this.pcmSamples = [...this.preRollBuffer];
    this.isRecording = true;
  }

  /**
   * Freeze active recording buffer immediately, stop appending, and encode 16-bit PCM WAV
   */
  async stopRecording() {
    // Immediately stop appending new microphone frames to this utterance
    this.isRecording = false;

    // Snapshot current samples
    const frozenSamples = this.pcmSamples.slice();
    this.pcmSamples = [];

    const durationSec = frozenSamples.length / this.targetSampleRate;

    // Convert accumulated Float32 samples into standard 16-bit PCM WAV blob
    const wavBlob = this.encodeWav(frozenSamples, this.targetSampleRate);
    const audioBase64 = await this.blobToBase64(wavBlob);

    return {
      blob: wavBlob,
      audioBase64,
      mimeType: "audio/wav",
      durationSec,
      sampleCount: frozenSamples.length,
    };
  }

  /**
   * Downsamples Float32 buffer to target sample rate (16000Hz)
   */
  downsampleBuffer(buffer, inputRate, outputRate) {
    if (outputRate === inputRate) return buffer;
    const ratio = inputRate / outputRate;
    const newLength = Math.round(buffer.length / ratio);
    const result = new Float32Array(newLength);
    let offsetResult = 0;
    let offsetBuffer = 0;

    while (offsetResult < result.length) {
      const nextOffsetBuffer = Math.round((offsetResult + 1) * ratio);
      let accum = 0;
      let count = 0;
      for (let i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
        accum += buffer[i];
        count++;
      }
      result[offsetResult] = count > 0 ? accum / count : 0;
      offsetResult++;
      offsetBuffer = nextOffsetBuffer;
    }
    return result;
  }

  /**
   * Encode Float32Array to 16-bit Mono PCM WAV
   */
  encodeWav(samples, sampleRate) {
    const buffer = new ArrayBuffer(44 + samples.length * 2);
    const view = new DataView(buffer);

    const writeString = (offset, string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    /* RIFF identifier */
    writeString(0, "RIFF");
    /* file length */
    view.setUint32(4, 36 + samples.length * 2, true);
    /* RIFF type */
    writeString(8, "WAVE");
    /* format chunk identifier */
    writeString(12, "fmt ");
    /* format chunk length */
    view.setUint32(16, 16, true);
    /* sample format (1 = PCM) */
    view.setUint16(20, 1, true);
    /* channel count (1 = mono) */
    view.setUint16(22, 1, true);
    /* sample rate */
    view.setUint32(24, sampleRate, true);
    /* byte rate (sampleRate * 1 * 2) */
    view.setUint32(28, sampleRate * 2, true);
    /* block align (1 * 2) */
    view.setUint16(32, 2, true);
    /* bits per sample */
    view.setUint16(34, 16, true);
    /* data chunk identifier */
    writeString(36, "data");
    /* data chunk length */
    view.setUint32(40, samples.length * 2, true);

    /* PCM samples */
    let offset = 44;
    for (let i = 0; i < samples.length; i++) {
      const s = Math.max(-1, Math.min(1, samples[i]));
      view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
      offset += 2;
    }

    return new Blob([view], { type: "audio/wav" });
  }

  blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result.split(",")[1];
        resolve(base64data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  /**
   * Mute or unmute hardware audio tracks
   */
  setHardwareMute(muted) {
    if (this.stream) {
      this.stream.getAudioTracks().forEach((track) => {
        track.enabled = !muted;
      });
    }
  }

  clearPreRollBuffer() {
    this.preRollBuffer = [];
  }

  /**
   * Detach recording nodes and release hardware tracks
   */
  cleanup() {
    this.isRecording = false;
    this.isStreamActive = false;
    this.pcmSamples = [];
    this.preRollBuffer = [];

    if (this.processorNode) {
      try {
        this.processorNode.disconnect();
      } catch {}
      this.processorNode = null;
    }

    if (this.sourceNode) {
      try {
        this.sourceNode.disconnect();
      } catch {}
      this.sourceNode = null;
    }

    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }

    if (this.audioContext && this.audioContext.state !== "closed") {
      this.audioContext.close().catch(() => {});
      this.audioContext = null;
    }

    this.analyser = null;
  }
}
