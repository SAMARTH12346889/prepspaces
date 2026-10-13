/**
 * interviewActionRegistry.js
 *
 * Central action registry for interview room voice control.
 *
 * Key Design Principles:
 * 1. Commands in interview mode MUST be prefixed with "Nova" (e.g. "Nova, mute my mic").
 * 2. Unprefixed speech is strictly treated as the candidate's answer to the question.
 * 3. Never trigger navigation or route changes while on /interview.
 * 4. Deterministic regex matching with concise spoken audio feedback confirmations.
 */

export const InterviewActions = Object.freeze({
  END_INTERVIEW: "END_INTERVIEW",
  MUTE_INTERVIEW_MIC: "MUTE_INTERVIEW_MIC",
  UNMUTE_INTERVIEW_MIC: "UNMUTE_INTERVIEW_MIC",
  START_SCREEN_SHARE: "START_SCREEN_SHARE",
  STOP_SCREEN_SHARE: "STOP_SCREEN_SHARE",
  REPEAT_QUESTION: "REPEAT_QUESTION",
  PAUSE_INTERVIEW: "PAUSE_INTERVIEW",
  RESUME_INTERVIEW: "RESUME_INTERVIEW",
  SHOW_TRANSCRIPT: "SHOW_TRANSCRIPT",
  STOP_NOVA_LISTENING: "STOP_NOVA_LISTENING",
  CANCEL_CURRENT_COMMAND: "CANCEL_CURRENT_COMMAND",
});

export const INTERVIEW_ACTION_CONFIRMATIONS = Object.freeze({
  [InterviewActions.END_INTERVIEW]: "Ending interview session.",
  [InterviewActions.MUTE_INTERVIEW_MIC]: "Microphone muted.",
  [InterviewActions.UNMUTE_INTERVIEW_MIC]: "Microphone unmuted.",
  [InterviewActions.START_SCREEN_SHARE]: "Requesting screen share.",
  [InterviewActions.STOP_SCREEN_SHARE]: "Screen sharing stopped.",
  [InterviewActions.REPEAT_QUESTION]: "Repeating question.",
  [InterviewActions.PAUSE_INTERVIEW]: "Interview paused.",
  [InterviewActions.RESUME_INTERVIEW]: "Resuming interview.",
  [InterviewActions.SHOW_TRANSCRIPT]: "Displaying transcript.",
  [InterviewActions.STOP_NOVA_LISTENING]: "Nova listening stopped.",
  [InterviewActions.CANCEL_CURRENT_COMMAND]: "Cancelled.",
});

/**
 * Prefix pattern: matches optional polite greeting + "Nova" at start of utterance.
 * Examples: "Nova", "Hey Nova", "Hi Nova", "OK Nova", "Nova please"
 */
const NOVA_PREFIX_REGEX = /^(?:hey\s+|hi\s+|ok\s+|okay\s+)?nova\b[,:\s]*/i;

/**
 * Parses an utterance in interview mode.
 *
 * @param {string} text - Raw transcript from speech-to-text
 * @returns {{
 *   isInterviewCommand: boolean,
 *   action?: string,
 *   response?: string,
 *   rawText: string,
 *   candidateAnswer?: string
 * }}
 */
export function parseInterviewVoiceCommand(text) {
  if (!text || typeof text !== "string") {
    return { isInterviewCommand: false, rawText: "" };
  }

  const raw = text.trim();
  const hasPrefix = NOVA_PREFIX_REGEX.test(raw);

  // If "Nova" prefix is absent, strictly treat as candidate's interview answer!
  if (!hasPrefix) {
    return {
      isInterviewCommand: false,
      candidateAnswer: raw,
      rawText: raw,
    };
  }

  // Strip prefix to extract command body
  const commandBody = raw.replace(NOVA_PREFIX_REGEX, "").trim().toLowerCase();

  // If user only said "Nova", acknowledge without doing anything
  if (!commandBody) {
    return {
      isInterviewCommand: true,
      action: null,
      response: "Yes? I am listening.",
      rawText: raw,
    };
  }

  // Normalize punctuation for regex matching
  const clean = commandBody.replace(/[.,?!]/g, " ").replace(/\s+/g, " ").trim();

  // 1. END INTERVIEW
  if (/(?:end|finish|exit|terminate|leave|close)\s+(?:the\s+)?interview/i.test(clean) ||
      clean === "end" || clean === "finish" || clean === "exit") {
    return {
      isInterviewCommand: true,
      action: InterviewActions.END_INTERVIEW,
      response: INTERVIEW_ACTION_CONFIRMATIONS[InterviewActions.END_INTERVIEW],
      rawText: raw,
    };
  }

  // 2. MUTE MIC
  if (/(?:mute|turn off|disable|silence)\s+(?:my\s+|the\s+)?(?:mic|microphone|audio)/i.test(clean) ||
      clean === "mute" || clean === "mute mic" || clean === "mute my microphone") {
    return {
      isInterviewCommand: true,
      action: InterviewActions.MUTE_INTERVIEW_MIC,
      response: INTERVIEW_ACTION_CONFIRMATIONS[InterviewActions.MUTE_INTERVIEW_MIC],
      rawText: raw,
    };
  }

  // 3. UNMUTE MIC
  if (/(?:unmute|turn on|enable)\s+(?:my\s+|the\s+)?(?:mic|microphone|audio)/i.test(clean) ||
      clean === "unmute" || clean === "unmute mic" || clean === "unmute my microphone") {
    return {
      isInterviewCommand: true,
      action: InterviewActions.UNMUTE_INTERVIEW_MIC,
      response: INTERVIEW_ACTION_CONFIRMATIONS[InterviewActions.UNMUTE_INTERVIEW_MIC],
      rawText: raw,
    };
  }

  // 4. SCREEN SHARE (START / SHARE)
  if (/(?:start|share|enable|begin|open)\s+(?:my\s+|the\s+)?(?:screen|screen\s*share|display)/i.test(clean) ||
      clean === "share screen" || clean === "share my screen") {
    return {
      isInterviewCommand: true,
      action: InterviewActions.START_SCREEN_SHARE,
      response: INTERVIEW_ACTION_CONFIRMATIONS[InterviewActions.START_SCREEN_SHARE],
      rawText: raw,
    };
  }

  // 5. STOP SCREEN SHARE
  if (/(?:stop|end|disable|close|turn off)\s+(?:sharing|screen\s*share|my\s+screen|the\s+screen)/i.test(clean) ||
      clean === "stop screen share" || clean === "stop sharing") {
    return {
      isInterviewCommand: true,
      action: InterviewActions.STOP_SCREEN_SHARE,
      response: INTERVIEW_ACTION_CONFIRMATIONS[InterviewActions.STOP_SCREEN_SHARE],
      rawText: raw,
    };
  }

  // 6. REPEAT QUESTION
  if (/(?:repeat|read|say|replay|what is|tell me)\s+(?:the\s+|this\s+)?question/i.test(clean) ||
      /(?:say|play)\s+again/i.test(clean) ||
      clean === "repeat question" || clean === "repeat the question") {
    return {
      isInterviewCommand: true,
      action: InterviewActions.REPEAT_QUESTION,
      response: INTERVIEW_ACTION_CONFIRMATIONS[InterviewActions.REPEAT_QUESTION],
      rawText: raw,
    };
  }

  // 7. PAUSE INTERVIEW
  if (/(?:pause|hold)\s+(?:the\s+)?(?:interview|timer|session)/i.test(clean) || clean === "pause") {
    return {
      isInterviewCommand: true,
      action: InterviewActions.PAUSE_INTERVIEW,
      response: INTERVIEW_ACTION_CONFIRMATIONS[InterviewActions.PAUSE_INTERVIEW],
      rawText: raw,
    };
  }

  // 8. RESUME INTERVIEW
  if (/(?:resume|continue|unpause)\s+(?:the\s+)?(?:interview|timer|session)/i.test(clean) ||
      clean === "resume" || clean === "continue") {
    return {
      isInterviewCommand: true,
      action: InterviewActions.RESUME_INTERVIEW,
      response: INTERVIEW_ACTION_CONFIRMATIONS[InterviewActions.RESUME_INTERVIEW],
      rawText: raw,
    };
  }

  // 9. SHOW / VIEW TRANSCRIPT
  if (/(?:show|view|open|display)\s+(?:the\s+)?(?:transcript|response|stream)/i.test(clean)) {
    return {
      isInterviewCommand: true,
      action: InterviewActions.SHOW_TRANSCRIPT,
      response: INTERVIEW_ACTION_CONFIRMATIONS[InterviewActions.SHOW_TRANSCRIPT],
      rawText: raw,
    };
  }

  // 10. STOP LISTENING
  if (/(?:stop|sleep|quiet|stop listening|be quiet|go to sleep)/i.test(clean)) {
    return {
      isInterviewCommand: true,
      action: InterviewActions.STOP_NOVA_LISTENING,
      response: INTERVIEW_ACTION_CONFIRMATIONS[InterviewActions.STOP_NOVA_LISTENING],
      rawText: raw,
    };
  }

  // 11. CANCEL COMMAND
  if (/(?:cancel|nevermind|dismiss|abort)/i.test(clean)) {
    return {
      isInterviewCommand: true,
      action: InterviewActions.CANCEL_CURRENT_COMMAND,
      response: INTERVIEW_ACTION_CONFIRMATIONS[InterviewActions.CANCEL_CURRENT_COMMAND],
      rawText: raw,
    };
  }

  // Prefixed with Nova, but not an interview room command:
  return {
    isInterviewCommand: true,
    action: null,
    response: "Interview command not recognized. You can say 'Nova, mute mic', 'Nova, share screen', 'Nova, repeat question', or 'Nova, end interview'.",
    rawText: raw,
  };
}
