/**
 * Conservative Navigation Intent Matcher
 * 
 * Strict rule from Implementation Brief (§10 & §11):
 * - Obvious navigation commands ONLY ("open home", "go to interview", "open oops", "show features").
 * - Study questions & queries ("oops stands for", "what does Java stand for", "explain polymorphism")
 *   MUST NEVER fall into navigation.
 * - If ambiguous, return null so the semantic router/Groq handles it as CHAT.
 */
export function inferNavigation(message = "") {
  let text = String(message || "").toLowerCase().trim();
  if (!text) return null;

  // Handle self-correction cues (e.g., "open learning... actually make that home")
  const correctionMatch = text.match(
    /\b(?:actually|scratch that|no wait|wait no|instead of that|rather|correction|no make that|make that a?|change that to)\b\s*(.*)$/i
  );
  if (correctionMatch && correctionMatch[1]?.trim()) {
    text = correctionMatch[1].trim();
  }

  // 1. Any informational or definition indicator MUST remain CHAT:
  const isQuestionOrQuery = /\b(what|why|how|when|where|who|which|explain|define|definition|meaning|difference|example|quiz|question|doubt|problem|solve|calculate|describe|tell me|can you|stands? for|mean|syntax|code|details|concept|rules|summary)\b|\?$/i.test(text);
  if (isQuestionOrQuery) {
    return null;
  }

  // 2. Strict bare screen names (exact match only):
  if (/^(home|landing|main page)$/i.test(text)) return "/";
  if (/^(features)$/i.test(text)) return "/#features";

  // 3. Explicit navigation verbs:
  // Must begin with or contain an unambiguous navigation trigger
  const navTriggerMatch = text.match(
    /\b(go\s+to|open|opened|show|navigate\s+to|take\s+me\s+to|switch\s+to|visit|head\s+to|bring\s+up)\b\s+(.*)$/i
  );
  const backTriggerMatch = /\b(go\s+back|take\s+me\s+back|back\s+home|return\s+home)\b/i.test(text);

  if (backTriggerMatch) return "/";

  if (!navTriggerMatch) {
    // No explicit navigation verb -> DO NOT GUESS! Let semantic router handle it.
    return null;
  }

  const target = navTriggerMatch[2].trim();

  // Match target strictly to known platform screens:
  if (/\b(home|landing|main|start)\b/i.test(target)) {
    return "/";
  }
  if (/\b(oops?|object oriented|classes and objects)\b/i.test(target)) {
    return "/learning";
  }
  if (/\b(interview|mock interview|interview prep|interview room)\b/i.test(target)) {
    return "/interview";
  }
  if (/\b(learning|courses?|lessons?|study portal)\b/i.test(target)) {
    return "/learning";
  }
  if (/\b(features?|capabilities)\b/i.test(target)) {
    return "/#features";
  }
  if (/\b(assistant|chat|conversation)\b/i.test(target)) {
    return "/assistant";
  }

  return null;
}
