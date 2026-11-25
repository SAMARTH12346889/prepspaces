import { Hono } from "hono";
import { fetchGroqWithFallback } from "../services/groqClient.js";
import { getCoordinatorClient } from "../services/rateLimitAndKeyManager.js";

export const voiceRouter = new Hono();

const GROQ_WHISPER_MODEL = "whisper-large-v3-turbo";

// Common Whisper silence/noise hallucinations to filter out
const WHISPER_HALLUCINATIONS = [
  /^thank\s+you(?:\s+very\s+much)?[.!]?$/i,
  /^thanks\s+for\s+watching[.!]?$/i,
  /^subtitles?\s+by.*$/i,
  /^amara\.org.*$/i,
  /^you$/i,
  /^bye[.!]?$/i,
  /^so[.!]?$/i,
];

function isWhisperHallucination(text) {
  if (!text) return true;
  const trimmed = text.trim();
  if (trimmed.length < 2) return true;
  return WHISPER_HALLUCINATIONS.some((pattern) => pattern.test(trimmed));
}

/**
 * Speech-To-Text Audio Transcription Handler
 * Supports:
 *  - multipart/form-data with "file" or "audio" field
 *  - application/json with { audio: base64String, mimeType } or { audioBase64, mimeType }
 * Parameters:
 *  - endpoint: https://api.groq.com/openai/v1/audio/transcriptions
 *  - model: whisper-large-v3-turbo
 *  - language: "en" (explicitly set to prevent misidentifying technical terms)
 *  - response_format: "json"
 */
export const handleTranscribe = async (c) => {
  try {
    let audioBytes = null;
    let mimeType = "audio/webm";
    let sessionId = c.req.header("x-session-id") || null;
    let slotId = c.req.header("x-slot-id") || null;
    let assignedKeyIndex = c.req.header("x-assigned-key-index") ? Number(c.req.header("x-assigned-key-index")) : null;
    let allowBackupFallback = c.req.header("x-allow-backup-fallback") === "1";
    let audioDurationSec = Number(c.req.header("x-audio-duration-sec") || 0);
    const twoPhaseFallback = c.req.header("x-prepspaces-twophase-fallback") === "1";

    const contentType = c.req.header("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const formData = await c.req.formData();
      const file = formData.get("file") || formData.get("audio");
      if (file && typeof file.arrayBuffer === "function") {
        audioBytes = await file.arrayBuffer();
        mimeType = file.type || "audio/webm";
      }
      if (formData.get("sessionId")) sessionId = String(formData.get("sessionId"));
      if (formData.get("slotId")) slotId = String(formData.get("slotId"));
      if (formData.get("assignedKeyIndex")) assignedKeyIndex = Number(formData.get("assignedKeyIndex"));
      if (formData.get("allowBackupFallback") === "1" || formData.get("allowBackupFallback") === "true") {
        allowBackupFallback = true;
      }
      if (formData.get("audioDurationSec")) audioDurationSec = Number(formData.get("audioDurationSec"));
    } else {
      const body = await c.req.json().catch(() => ({}));
      const base64Input = body.audio || body.audioBase64;
      if (base64Input) {
        const base64Data = base64Input.replace(/^data:audio\/\w+;base64,/, "");
        const binaryString = atob(base64Data);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        audioBytes = bytes.buffer;
        mimeType = body.mimeType || "audio/webm";
      }
      if (body.sessionId) sessionId = body.sessionId;
      if (body.slotId) slotId = body.slotId;
      if (body.assignedKeyIndex) assignedKeyIndex = Number(body.assignedKeyIndex);
      if (body.allowBackupFallback) allowBackupFallback = true;
      if (body.audioDurationSec) audioDurationSec = Number(body.audioDurationSec);
    }

    if (!audioBytes || audioBytes.byteLength < 250) {
      return c.json(
        { error: "Bad Request", message: "Audio payload is missing or too short." },
        400
      );
    }

    // Estimate audio duration (~8 KB/sec WebM/Opus fallback estimate if client didn't provide)
    const estimatedAudioSec = audioDurationSec > 0 ? audioDurationSec : Math.max(2, Math.round(audioBytes.byteLength / 8000));

    if (sessionId) {
      try {
        const coordinator = getCoordinatorClient(c.env);
        await coordinator.heartbeat({ sessionId });
      } catch (_) {}
    }

    let notificationMessage = null;

    // 1. Primary: Groq Whisper API (whisper-large-v3-turbo) coordinated with slot key & backup Key 5
    try {
      const formData = new FormData();
      const blob = new Blob([audioBytes], { type: mimeType });
      formData.append("file", blob, "audio.webm");
      formData.append("model", GROQ_WHISPER_MODEL);
      formData.append("language", "en"); // Explicitly pass en to prevent language misidentification
      formData.append("response_format", "json");

      const groqRes = await fetchGroqWithFallback(
        "https://api.groq.com/openai/v1/audio/transcriptions",
        {
          method: "POST",
          body: formData,
        },
        c.env,
        "WhisperTranscription",
        {
          sessionId,
          slotId,
          assignedKeyIndex,
          audioDurationSec: estimatedAudioSec,
          twoPhaseFallback,
          allowBackupFallback,
        }
      );

      // Two-phase pre-fallback notification BEFORE executing backup key or Workers AI
      if (groqRes && groqRes.status === 202 && groqRes.fallbackPending) {
        const pending = await groqRes.json().catch(() => ({}));
        return c.json(
          {
            success: true,
            fallbackPending: true,
            notificationRequired: true,
            notificationMessage: pending.notificationMessage || groqRes.candidateNotification,
            sessionProgressSaved: true,
          },
          202
        );
      }

      if (groqRes?.candidateNotification) {
        notificationMessage = groqRes.candidateNotification;
      }

      if (groqRes && groqRes.ok) {
        const data = await groqRes.json();
        const rawText = data.text || "";
        const cleanText = isWhisperHallucination(rawText) ? "" : rawText.trim();

        return c.json({
          success: true,
          transcript: cleanText,
          rawTranscript: rawText,
          provider: "groq-whisper-large-v3-turbo",
          notificationMessage,
        });
      }
    } catch (err) {
      console.warn("[VoiceRoutes] Groq Whisper coordinated fallback notice:", err);
    }

    // 2. Secondary Fallback: Cloudflare Workers AI (@cf/openai/whisper)
    if (c.env?.AI) {
      try {
        const input = {
          audio: [...new Uint8Array(audioBytes)],
        };
        const aiRes = await c.env.AI.run("@cf/openai/whisper", input);
        if (aiRes?.text) {
          return c.json({
            success: true,
            transcript: aiRes.text,
            provider: "cloudflare-workers-ai",
            notificationMessage,
          });
        }
      } catch (err) {
        console.warn("[VoiceRoutes] Workers AI Whisper error:", err);
      }
    }

    // 3. Fallback notice for browser speech recognition
    return c.json({
      success: false,
      transcript: "",
      notificationMessage,
      message: "Server-side whisper transcription unavailable; using local browser speech transcription.",
    });
  } catch (error) {
    console.error("[VoiceRoutes] Transcribe exception:", error);
    return c.json({ error: "Internal Server Error", message: error.message }, 500);
  }
};

voiceRouter.post("/", handleTranscribe);
voiceRouter.post("/transcribe", handleTranscribe);
