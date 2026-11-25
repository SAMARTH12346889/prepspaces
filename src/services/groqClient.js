/**
 * Frontend Security Guard — No Groq API Keys in Browser
 *
 * Security Policy:
 * All Groq API keys (GROQ_API_KEY_1 to GROQ_API_KEY_5) are stored exclusively
 * in Cloudflare Worker Secrets on the backend. Frontend code MUST NEVER bundle,
 * embed, or transmit API keys directly.
 *
 * All AI evaluation and Whisper transcription requests are proxied through
 * PrepSpaces backend endpoints (/api/interviews/* and /api/transcribe).
 */

export function getGroqApiKeys() {
  return [];
}

export async function fetchGroqWithFallback() {
  throw new Error(
    "Direct client-side Groq API calls are disabled for security. Route all AI requests through the PrepSpaces backend."
  );
}
