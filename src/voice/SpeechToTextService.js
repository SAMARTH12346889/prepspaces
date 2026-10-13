/**
 * SpeechToTextService.js
 *
 * Provider-independent Speech-to-Text client:
 * - Submits complete utterances to backend Groq Whisper (Large V3 / Turbo)
 * - Displays provisional local captions during speech without triggering actions
 * - Preserves raw transcripts as authoritative source of truth
 * - Handles technical vocabulary hints for technical mock interviews
 */

export class SpeechToTextService {
  constructor({ apiUrl = "", onProvisionalTranscript } = {}) {
    this.apiUrl = apiUrl;
    this.onProvisionalTranscript = onProvisionalTranscript || (() => {});
    this.localRecognition = null;
    this.initLocalRecognition();
  }

  initLocalRecognition() {
    const SpeechAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechAPI) {
      try {
        this.localRecognition = new SpeechAPI();
        this.localRecognition.continuous = true;
        this.localRecognition.interimResults = true;
        this.localRecognition.lang = "en-US";

        this.localRecognition.onresult = (event) => {
          let interim = "";
          for (let i = event.resultIndex; i < event.results.length; i++) {
            interim += event.results[i][0]?.transcript || "";
          }
          if (interim.trim()) {
            this.onProvisionalTranscript(interim.trim());
          }
        };

        this.localRecognition.onerror = () => {};
      } catch (e) {
        console.warn("[STTService] Web Speech API provisional captioning unavailable:", e);
      }
    }
  }

  startProvisionalCaptions() {
    if (this.localRecognition) {
      try {
        this.localRecognition.start();
      } catch {}
    }
  }

  stopProvisionalCaptions() {
    if (this.localRecognition) {
      try {
        this.localRecognition.stop();
      } catch {}
    }
  }

  /**
   * Submit complete audio payload to configured Groq Whisper model
   */
  async transcribeAudio({ audioBase64, mimeType = "audio/wav", mode = "assistant", sessionId, vocabularyPrompt }) {
    this.stopProvisionalCaptions();

    if (!audioBase64) {
      throw new Error("Missing audio payload for transcription.");
    }

    const response = await fetch(`${this.apiUrl}/api/voice/transcribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        audioBase64,
        mimeType,
        mode,
        sessionId,
        vocabularyPrompt,
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Transcription failed with HTTP ${response.status}`);
    }

    const data = await response.json();

    return {
      transcript: data.transcript || "",
      rawTranscript: data.rawTranscript || data.transcript || "",
      displayTranscript: data.displayTranscript || data.transcript || "",
      duration: data.duration || 0,
      model: data.model || "whisper-large-v3",
      latencyMs: data.latencyMs || 0,
    };
  }
}
