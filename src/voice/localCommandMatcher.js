/**
 * localCommandMatcher
 * 
 * P0 emergency / immediate client-side control matcher.
 * Bypasses network and LLM roundtrips to execute control actions in <10ms.
 */

const STOP_PATTERNS = [
  /^stop$/i,
  /^stop\s+(talking|speaking|audio|nova|explaining|reading)$/i,
  /^shut\s*up$/i,
  /^quiet$/i,
  /^cancel$/i,
  /^halt$/i,
  /^silence$/i,
];

const PAUSE_PATTERNS = [
  /^pause$/i,
  /^pause\s+(nova|speaking|audio)$/i,
  /^hold\s+on$/i,
  /^wait\s+a\s+second$/i,
];

const RESUME_PATTERNS = [
  /^resume$/i,
  /^resume\s+(speaking|audio|nova)$/i,
  /^continue$/i,
  /^keep\s+talking$/i,
];

export function matchLocalCommand(transcript = "") {
  const text = String(transcript || "").trim().toLowerCase();
  if (!text) return null;

  for (const pattern of STOP_PATTERNS) {
    if (pattern.test(text)) {
      return { isMatch: true, control: "stop", priority: "P0" };
    }
  }

  for (const pattern of PAUSE_PATTERNS) {
    if (pattern.test(text)) {
      return { isMatch: true, control: "pause", priority: "P0" };
    }
  }

  for (const pattern of RESUME_PATTERNS) {
    if (pattern.test(text)) {
      return { isMatch: true, control: "resume", priority: "P0" };
    }
  }

  return null;
}
