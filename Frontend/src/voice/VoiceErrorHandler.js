/**
 * VoiceErrorHandler.js
 *
 * Standardized machine-readable error codes and human-friendly diagnostics.
 */

export const VoiceErrorCodes = {
  MIC_PERMISSION_DENIED: "MIC_PERMISSION_DENIED",
  MIC_DEVICE_NOT_FOUND: "MIC_DEVICE_NOT_FOUND",
  MIC_DEVICE_BUSY: "MIC_DEVICE_BUSY",
  AUDIO_TOO_SHORT: "AUDIO_TOO_SHORT",
  AUDIO_TOO_QUIET: "AUDIO_TOO_QUIET",
  AUDIO_CLIPPED: "AUDIO_CLIPPED",
  SPEECH_NOT_DETECTED: "SPEECH_NOT_DETECTED",
  TRANSCRIPTION_TIMEOUT: "TRANSCRIPTION_TIMEOUT",
  TRANSCRIPTION_PROVIDER_ERROR: "TRANSCRIPTION_PROVIDER_ERROR",
  TRANSCRIPT_EMPTY: "TRANSCRIPT_EMPTY",
  SPEAKER_NOT_VERIFIED: "SPEAKER_NOT_VERIFIED",
  SPEAKER_VERIFICATION_UNCERTAIN: "SPEAKER_VERIFICATION_UNCERTAIN",
  ENROLLMENT_SAMPLE_REJECTED: "ENROLLMENT_SAMPLE_REJECTED",
  INTENT_AMBIGUOUS: "INTENT_AMBIGUOUS",
  INVALID_DESTINATION: "INVALID_DESTINATION",
  SESSION_CANCELLED: "SESSION_CANCELLED",
};

const ERROR_MESSAGES = {
  [VoiceErrorCodes.MIC_PERMISSION_DENIED]: "Nova cannot access your microphone. Check your browser permissions in the URL bar.",
  [VoiceErrorCodes.MIC_DEVICE_NOT_FOUND]: "No microphone device was detected on your computer.",
  [VoiceErrorCodes.MIC_DEVICE_BUSY]: "Your microphone is currently in use by another application.",
  [VoiceErrorCodes.AUDIO_TOO_SHORT]: "The recording was too short to process. Please speak your answer clearly.",
  [VoiceErrorCodes.AUDIO_TOO_QUIET]: "I could not hear you clearly. Please move closer to your microphone.",
  [VoiceErrorCodes.AUDIO_CLIPPED]: "Microphone audio was distorted or clipping. Please lower your microphone input level.",
  [VoiceErrorCodes.SPEECH_NOT_DETECTED]: "No speech was detected in the recording. Please try speaking again.",
  [VoiceErrorCodes.TRANSCRIPTION_TIMEOUT]: "Transcription request timed out. Please try recording again.",
  [VoiceErrorCodes.TRANSCRIPTION_PROVIDER_ERROR]: "Audio transcription service is temporarily unavailable. Retrying...",
  [VoiceErrorCodes.TRANSCRIPT_EMPTY]: "Could not transcribe any words from the recording. Please speak clearly and retry.",
  [VoiceErrorCodes.SPEAKER_NOT_VERIFIED]: "Voice does not match your enrolled voice profile. Action blocked.",
  [VoiceErrorCodes.SPEAKER_VERIFICATION_UNCERTAIN]: "Voice match is uncertain. Please speak again clearly.",
  [VoiceErrorCodes.ENROLLMENT_SAMPLE_REJECTED]: "The voice registration sample was rejected. Please speak naturally without background noise.",
  [VoiceErrorCodes.INTENT_AMBIGUOUS]: "I heard you, but I'm not sure which section you'd like to visit. Available sections are Home, Learning, OOP, and Interview.",
  [VoiceErrorCodes.INVALID_DESTINATION]: "Requested section was not found.",
  [VoiceErrorCodes.SESSION_CANCELLED]: "Voice operation cancelled.",
};

export class VoiceErrorHandler {
  static getMessage(code, fallback = "An unexpected voice error occurred.") {
    return ERROR_MESSAGES[code] || fallback;
  }

  static formatError(err) {
    if (!err) return { code: "UNKNOWN_ERROR", message: "Unknown voice error" };
    if (typeof err === "string") return { code: "GENERIC_ERROR", message: err };
    return {
      code: err.code || "VOICE_ERROR",
      message: err.message || ERROR_MESSAGES[err.code] || "Voice processing failed",
    };
  }
}
