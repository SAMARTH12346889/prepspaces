/**
 * VoiceActivityDetector.js
 *
 * Robust, adaptive Voice Activity Detector (VAD) for Nova:
 * - Dynamic noise-floor tracking to prevent continuous listening from ambient noise
 * - Frequency band isolation for human voice (300Hz - 3400Hz)
 * - Mode-specific endpoint silence thresholds (short for commands, long for interview answers)
 * - Inter-word pause tolerance (distinguishes brief pauses from completed utterances)
 * - Initial silence timeout (returns to IDLE if user activates but does not speak)
 * - Maximum utterance duration protection
 */

export class VoiceActivityDetector {
  constructor({
    silenceThresholdMs = 750, // approx 750ms for short commands
    minSpeechDurationMs = 180, // min duration to confirm speech onset
    initialSilenceTimeoutMs = 7500, // 7.5s timeout if no speech detected
    maxRecordingDurationMs = 15000, // 15s max for single command
    onSpeechStart,
    onSpeechEnd,
    onAudioLevel,
    onSilenceTimeout,
  } = {}) {
    this.silenceThresholdMs = silenceThresholdMs;
    this.minSpeechDurationMs = minSpeechDurationMs;
    this.initialSilenceTimeoutMs = initialSilenceTimeoutMs;
    this.maxRecordingDurationMs = maxRecordingDurationMs;

    this.onSpeechStart = onSpeechStart || (() => {});
    this.onSpeechEnd = onSpeechEnd || (() => {});
    this.onAudioLevel = onAudioLevel || (() => {});
    this.onSilenceTimeout = onSilenceTimeout || (() => {});

    // VAD internal state
    this.running = false;
    this.isSpeaking = false;
    this.isFinalized = false;

    // Timestamps
    this.sessionStartTime = 0;
    this.speechStartTime = 0;
    this.lastSpeechTime = 0;

    // Adaptive noise floor tracking
    this.noiseFloor = 0.015;
    this.noiseFloorAlpha = 0.05; // smoothing factor for noise estimation

    // Timers & animation frame
    this.animFrame = null;
    this.initialTimeoutTimer = null;
    this.endpointTimer = null;
    this.maxDurationTimer = null;
  }

  setSilenceThreshold(ms) {
    this.silenceThresholdMs = Math.max(300, ms);
  }

  setMaxDuration(ms) {
    this.maxRecordingDurationMs = ms;
  }

  start(analyser) {
    if (!analyser) return;

    this.stop(); // Clear any existing loop

    this.running = true;
    this.isSpeaking = false;
    this.isFinalized = false;
    this.sessionStartTime = Date.now();
    this.speechStartTime = 0;
    this.lastSpeechTime = 0;

    // Reset noise floor estimate
    this.noiseFloor = 0.015;

    // Start initial silence timeout: if no speech within initialSilenceTimeoutMs, timeout to IDLE
    if (this.initialSilenceTimeoutMs > 0) {
      this.initialTimeoutTimer = setTimeout(() => {
        if (this.running && !this.isSpeaking && !this.isFinalized) {
          this.isFinalized = true;
          this.onSilenceTimeout();
        }
      }, this.initialSilenceTimeoutMs);
    }

    const dataArray = new Uint8Array(analyser.frequencyBinCount);

    const loop = () => {
      if (!this.running || this.isFinalized) return;

      analyser.getByteFrequencyData(dataArray);

      // Focus on human vocal frequencies (~300Hz - 3400Hz)
      const binCount = dataArray.length;
      const startBin = Math.max(1, Math.floor(binCount * 0.04));
      const endBin = Math.min(binCount - 1, Math.floor(binCount * 0.52));

      let sum = 0;
      let peak = 0;
      for (let i = startBin; i < endBin; i++) {
        const val = dataArray[i];
        sum += val;
        if (val > peak) peak = val;
      }
      const vocalLevel = (sum / (endBin - startBin)) / 255.0;

      this.onAudioLevel(vocalLevel);

      const now = Date.now();

      // Dynamically compute effective speech threshold based on ambient noise floor
      if (!this.isSpeaking) {
        // Adapt noise floor during silence
        this.noiseFloor = this.noiseFloor * (1 - this.noiseFloorAlpha) + vocalLevel * this.noiseFloorAlpha;
      }
      const effectiveThreshold = Math.max(0.022, this.noiseFloor * 2.4 + 0.012);

      const isVoiceActive = vocalLevel > effectiveThreshold;

      if (isVoiceActive) {
        // Voice signal detected
        this.lastSpeechTime = now;

        // Cancel initial silence timeout once user starts speaking
        if (this.initialTimeoutTimer) {
          clearTimeout(this.initialTimeoutTimer);
          this.initialTimeoutTimer = null;
        }

        // Cancel any pending endpoint silence timer
        if (this.endpointTimer) {
          clearTimeout(this.endpointTimer);
          this.endpointTimer = null;
        }

        if (!this.isSpeaking) {
          if (!this.speechStartTime) {
            this.speechStartTime = now;
          }

          // Confirm speech onset after sustained voice energy
          if (now - this.speechStartTime >= this.minSpeechDurationMs) {
            this.isSpeaking = true;
            this.onSpeechStart();

            // Set max recording duration timer
            if (this.maxRecordingDurationMs > 0 && !this.maxDurationTimer) {
              this.maxDurationTimer = setTimeout(() => {
                if (this.running && this.isSpeaking && !this.isFinalized) {
                  this.triggerSpeechEnd("max_duration_reached");
                }
              }, this.maxRecordingDurationMs);
            }
          }
        }
      } else {
        // Below voice threshold: silence or inter-word pause
        if (this.isSpeaking && !this.endpointTimer && !this.isFinalized) {
          // Schedule endpoint finalization after configured silence threshold
          this.endpointTimer = setTimeout(() => {
            if (this.running && this.isSpeaking && !this.isFinalized) {
              this.triggerSpeechEnd("silence_endpoint");
            }
          }, this.silenceThresholdMs);
        }
      }

      this.animFrame = requestAnimationFrame(loop);
    };

    this.animFrame = requestAnimationFrame(loop);
  }

  triggerSpeechEnd(reason = "silence_endpoint") {
    if (this.isFinalized) return;
    this.isFinalized = true;
    this.isSpeaking = false;

    if (this.endpointTimer) {
      clearTimeout(this.endpointTimer);
      this.endpointTimer = null;
    }
    if (this.maxDurationTimer) {
      clearTimeout(this.maxDurationTimer);
      this.maxDurationTimer = null;
    }

    const speechDurationMs = this.lastSpeechTime > this.speechStartTime ? this.lastSpeechTime - this.speechStartTime : 0;
    this.onSpeechEnd({ reason, speechDurationMs });
  }

  stop() {
    this.running = false;
    this.isSpeaking = false;
    this.isFinalized = false;
    this.speechStartTime = 0;
    this.lastSpeechTime = 0;

    if (this.animFrame) {
      cancelAnimationFrame(this.animFrame);
      this.animFrame = null;
    }
    if (this.initialTimeoutTimer) {
      clearTimeout(this.initialTimeoutTimer);
      this.initialTimeoutTimer = null;
    }
    if (this.endpointTimer) {
      clearTimeout(this.endpointTimer);
      this.endpointTimer = null;
    }
    if (this.maxDurationTimer) {
      clearTimeout(this.maxDurationTimer);
      this.maxDurationTimer = null;
    }
  }
}
