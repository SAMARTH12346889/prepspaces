/**
 * VoiceState.js
 *
 * Authoritative state machine definition and transition validator for Nova Voice Engine.
 */

export const VoiceState = {
  IDLE: "IDLE",
  ACTIVATING: "ACTIVATING",
  LISTENING: "LISTENING",
  SPEECH_DETECTED: "SPEECH_DETECTED",
  RECORDING: "RECORDING",
  FINALIZING_AUDIO: "FINALIZING_AUDIO",
  TRANSCRIBING: "TRANSCRIBING",
  INTERPRETING_COMMAND: "INTERPRETING_COMMAND",
  EXECUTING_COMMAND: "EXECUTING_COMMAND",
  COMMAND_COMPLETED: "COMMAND_COMPLETED",
  ERROR: "ERROR",
  CANCELLED: "CANCELLED",
};

/**
 * Valid transitions between states
 */
export const VALID_TRANSITIONS = {
  [VoiceState.IDLE]: [VoiceState.ACTIVATING, VoiceState.ERROR],
  [VoiceState.ACTIVATING]: [
    VoiceState.LISTENING,
    VoiceState.RECORDING,
    VoiceState.ERROR,
    VoiceState.CANCELLED,
    VoiceState.IDLE,
  ],
  [VoiceState.LISTENING]: [
    VoiceState.SPEECH_DETECTED,
    VoiceState.RECORDING,
    VoiceState.IDLE, // on silence timeout
    VoiceState.ERROR,
    VoiceState.CANCELLED,
  ],
  [VoiceState.SPEECH_DETECTED]: [
    VoiceState.RECORDING,
    VoiceState.LISTENING, // false alarm
    VoiceState.FINALIZING_AUDIO,
    VoiceState.CANCELLED,
    VoiceState.ERROR,
    VoiceState.IDLE,
  ],
  [VoiceState.RECORDING]: [
    VoiceState.FINALIZING_AUDIO,
    VoiceState.CANCELLED,
    VoiceState.ERROR,
    VoiceState.IDLE,
  ],
  [VoiceState.FINALIZING_AUDIO]: [
    VoiceState.TRANSCRIBING,
    VoiceState.LISTENING, // too short
    VoiceState.IDLE,
    VoiceState.ERROR,
    VoiceState.CANCELLED,
  ],
  [VoiceState.TRANSCRIBING]: [
    VoiceState.INTERPRETING_COMMAND,
    VoiceState.EXECUTING_COMMAND,
    VoiceState.COMMAND_COMPLETED,
    VoiceState.LISTENING,
    VoiceState.IDLE,
    VoiceState.ERROR,
    VoiceState.CANCELLED,
  ],
  [VoiceState.INTERPRETING_COMMAND]: [
    VoiceState.EXECUTING_COMMAND,
    VoiceState.COMMAND_COMPLETED,
    VoiceState.LISTENING,
    VoiceState.IDLE,
    VoiceState.ERROR,
    VoiceState.CANCELLED,
  ],
  [VoiceState.EXECUTING_COMMAND]: [
    VoiceState.COMMAND_COMPLETED,
    VoiceState.LISTENING,
    VoiceState.IDLE,
    VoiceState.ERROR,
    VoiceState.CANCELLED,
  ],
  [VoiceState.COMMAND_COMPLETED]: [
    VoiceState.IDLE, // in command mode
    VoiceState.LISTENING, // in continuous mode
  ],
  [VoiceState.ERROR]: [VoiceState.IDLE],
  [VoiceState.CANCELLED]: [VoiceState.IDLE],
};

/**
 * Validates state transition
 */
export function isValidTransition(fromState, toState) {
  if (fromState === toState) return true;
  const allowed = VALID_TRANSITIONS[fromState];
  return Boolean(allowed && allowed.includes(toState));
}

/**
 * User-facing status messages for each state
 */
export const STATE_STATUS_MESSAGES = {
  [VoiceState.IDLE]: "Press Shift+N or tap mic…",
  [VoiceState.ACTIVATING]: "Starting microphone…",
  [VoiceState.LISTENING]: "🎙 Listening for command…",
  [VoiceState.SPEECH_DETECTED]: "Speech detected…",
  [VoiceState.RECORDING]: "Recording your voice…",
  [VoiceState.FINALIZING_AUDIO]: "Finalizing audio…",
  [VoiceState.TRANSCRIBING]: "Transcribing with Whisper Turbo…",
  [VoiceState.INTERPRETING_COMMAND]: "Understanding intent…",
  [VoiceState.EXECUTING_COMMAND]: "Executing command…",
  [VoiceState.COMMAND_COMPLETED]: "Command completed ✓",
  [VoiceState.ERROR]: "Voice error encountered",
  [VoiceState.CANCELLED]: "Voice session cancelled",
};
