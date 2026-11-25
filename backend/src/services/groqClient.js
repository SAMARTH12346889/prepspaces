/**
 * Groq Client with Centralized Coordinator, Secrets-Only Auth, & Pre-Fallback Notification
 *
 * Production Rules:
 * - Zero hardcoded API keys: reads strictly from Worker Secrets (env.GROQ_API_KEY_1..5)
 *   or Node process.env during automated test runs.
 * - Cross-Worker-Instance Coordination: routes state & quota tracking through
 *   getCoordinatorClient(env) (backed by InterviewCoordinatorDO in Cloudflare Workers).
 * - Per-Key vs Organization/Project-Wide Limits:
 *   Never assumes switching Groq API keys bypasses shared org/project limits.
 * - Pre-Fallback Notification:
 *   Shows candidate cooldown notification BEFORE attempting API fallback (supports both
 *   twoPhaseFallback HTTP 202 protocol for the UI and onBeforeFallback hooks).
 */

import {
  getCoordinatorClient,
  CANDIDATE_COOLDOWN_NOTIFICATION,
} from "./rateLimitAndKeyManager.js";

/**
 * Resolves the 5-key array strictly from Cloudflare Worker Secrets (env) or Node process.env.
 * Never returns hardcoded secrets. Missing slots remain null so slot->key indexing (1..5) stays deterministic.
 *
 * @param {object} [env] - Cloudflare Worker environment bindings
 * @returns {(string|null)[]} 5-element array (indices 0..4 correspond to Keys 1..5)
 */
export function getGroqApiKeySlots(env) {
  const slots = [];
  for (let i = 1; i <= 5; i++) {
    const val =
      env?.[`GROQ_API_KEY_${i}`] ||
      (typeof process !== "undefined" ? process.env?.[`GROQ_API_KEY_${i}`] : null);
    slots.push(val && typeof val === "string" && val.trim() ? val.trim() : null);
  }
  return slots;
}

/**
 * Returns array of configured, distinct Groq API keys (for compatibility checks).
 */
export function getGroqApiKeys(env) {
  const slots = getGroqApiKeySlots(env).filter(Boolean);
  const legacyKey =
    env?.GROQ_API_KEY ||
    (typeof process !== "undefined" ? process.env?.GROQ_API_KEY : null);
  if (legacyKey && typeof legacyKey === "string" && legacyKey.trim() && !slots.includes(legacyKey.trim())) {
    slots.unshift(legacyKey.trim());
  }
  return Array.from(new Set(slots));
}

export function isRetryableGroqError(status) {
  return [429, 401, 403, 404, 500, 502, 503, 504].includes(status);
}

function serializeHeaders(headers) {
  if (!headers) return {};
  if (typeof headers.entries === "function") {
    const out = {};
    for (const [k, v] of headers.entries()) {
      out[k.toLowerCase()] = v;
    }
    return out;
  }
  return { ...headers };
}

function buildFallbackPendingResponse(execPlan) {
  const payload = {
    fallbackPending: true,
    notificationRequired: true,
    notificationMessage: execPlan.notificationMessage || CANDIDATE_COOLDOWN_NOTIFICATION,
    fallbackType: execPlan.fallbackType || "RESERVED_KEY_5",
    skipGroqRotation: Boolean(execPlan.skipGroqRotation),
    primaryKeyIndex: execPlan.primaryKeyIndex || null,
    sessionProgressSaved: true,
  };
  const res = new Response(JSON.stringify(payload), {
    status: 202,
    headers: { "Content-Type": "application/json", "X-PrepSpaces-Fallback-Pending": "1" },
  });
  res.fallbackPending = true;
  res.candidateNotification = payload.notificationMessage;
  return res;
}

/**
 * Executes a Groq API request with:
 * - Assigned slot key (1..4) isolation
 * - Pre-fallback notification BEFORE calling Key 5 or secondary fallback
 * - Organization/project-wide limit detection (never rotating keys on shared limits)
 * - Full header telemetry into the distributed coordinator
 */
export async function fetchGroqWithFallback(
  url,
  init = {},
  env = null,
  callLabel = "GroqAPI",
  options = {}
) {
  const keySlots = getGroqApiKeySlots(env);
  const coordinator = getCoordinatorClient(env);
  const fetchFn = typeof options.fetchFn === "function" ? options.fetchFn : fetch;

  const preferredKeyIndex = options.preferredKeyIndex || options.assignedKeyIndex || null;
  const sessionId = options.sessionId || null;
  const slotId = options.slotId || null;
  const serviceType = callLabel.toLowerCase().includes("whisper") ? "whisper" : "llm";
  const twoPhaseFallback = Boolean(options.twoPhaseFallback);
  const allowBackupFallback = Boolean(options.allowBackupFallback);

  let notifiedBeforeFallback = false;
  let candidateNotification = null;

  const notifyBeforeFallback = async (plan) => {
    candidateNotification = plan.notificationMessage || CANDIDATE_COOLDOWN_NOTIFICATION;
    if (!notifiedBeforeFallback) {
      notifiedBeforeFallback = true;
      if (typeof options.onBeforeFallback === "function") {
        await options.onBeforeFallback({
          message: candidateNotification,
          fallbackType: plan.fallbackType,
          primaryKeyIndex: plan.primaryKeyIndex,
          nextKeyIndex: plan.keyIndex,
          skipGroqRotation: plan.skipGroqRotation,
        });
      }
    }
  };

  // 1. Check execution plan with coordinator BEFORE calling Groq
  let execPlan = null;
  if (preferredKeyIndex || sessionId || slotId) {
    execPlan = await coordinator.getExecutionKeyForSlot({
      slotId,
      sessionId,
      assignedKeyIndex: preferredKeyIndex,
      serviceType,
    });

    if (execPlan.isFallback) {
      // Primary key is already in cooldown / approaching limit / disabled!
      if (twoPhaseFallback && !allowBackupFallback) {
        // Show cooldown notification to candidate BEFORE attempting fallback!
        return buildFallbackPendingResponse(execPlan);
      }

      await notifyBeforeFallback(execPlan);

      if (execPlan.skipGroqRotation || !execPlan.keyIndex) {
        // Organization/project-wide limit exhausted OR Key 5 also unavailable:
        // Skip redundant Groq key attempts and let caller run secondary fallback cleanly.
        const exhaustedRes = new Response(
          JSON.stringify({
            error: "Provider/Organization quota cooldown active",
            skipGroqRotation: true,
            notificationMessage: candidateNotification,
          }),
          { status: 429, headers: { "Content-Type": "application/json" } }
        );
        exhaustedRes.candidateNotification = candidateNotification;
        exhaustedRes.skipGroqRotation = true;
        return exhaustedRes;
      }
    }
  }

  // Build ordered key indices to try in this phase
  const keysToTry = [];
  if (execPlan) {
    if (execPlan.keyIndex) keysToTry.push(execPlan.keyIndex);
    // If primary was healthy and chosen, backup key 5 is next ONLY if not org-blocked
    if (!execPlan.isFallback && !keysToTry.includes(5)) {
      keysToTry.push(5);
    }
  } else {
    // Unbound call (e.g. standalone endpoint): try active pool 1..4, then reserved 5
    for (let k = 1; k <= 5; k++) {
      if (keySlots[k - 1]) keysToTry.push(k);
    }
  }

  let lastResponse = null;
  let lastError = null;

  for (let idx = 0; idx < keysToTry.length; idx++) {
    const keyIndex = keysToTry[idx];
    const isFallbackAttempt = Boolean(execPlan?.isFallback) || idx > 0 || keyIndex === 5;
    const key = keySlots[keyIndex - 1];

    if (!key) {
      await coordinator.markKeyError(keyIndex, "DISABLED", `Secret GROQ_API_KEY_${keyIndex} not configured`);
      continue;
    }

    // Before executing ANY fallback key attempt, enforce pre-fallback notification & shared org check
    if (isFallbackAttempt) {
      const fallbackPlan = execPlan?.isFallback
        ? execPlan
        : await coordinator.getExecutionKeyForSlot({
            slotId,
            sessionId,
            assignedKeyIndex: preferredKeyIndex || keysToTry[0],
            serviceType,
          });

      if (fallbackPlan.skipGroqRotation) {
        // Shared org/project quota was hit -> notify & stop rotating Groq keys!
        if (twoPhaseFallback && !allowBackupFallback) {
          return buildFallbackPendingResponse(fallbackPlan);
        }
        await notifyBeforeFallback(fallbackPlan);
        break;
      }

      if (twoPhaseFallback && !allowBackupFallback) {
        return buildFallbackPendingResponse(fallbackPlan);
      }

      await notifyBeforeFallback(fallbackPlan);
    }

    const maskedKey = `${key.slice(0, 7)}...${key.slice(-4)}`;

    try {
      const headers = new Headers(init.headers || {});
      headers.set("Authorization", `Bearer ${key}`);

      const res = await fetchFn(url, {
        ...init,
        headers,
      });

      const plainHeaders = serializeHeaders(res.headers);

      if (res.ok) {
        await coordinator.recordProviderResponse({
          keyIndex,
          status: res.status,
          headers: plainHeaders,
          errorBodyText: "",
          serviceType,
          tokens: options.tokens || 0,
          audioSeconds: options.audioDurationSec || 0,
        });
        if (candidateNotification) {
          res.candidateNotification = candidateNotification;
        }
        return res;
      }

      const errorText = await res.clone().text().catch(() => "");
      lastResponse = res;

      await coordinator.recordProviderResponse({
        keyIndex,
        status: res.status,
        headers: plainHeaders,
        errorBodyText: errorText,
        serviceType,
        tokens: options.tokens || 0,
        audioSeconds: options.audioDurationSec || 0,
      });

      if (isRetryableGroqError(res.status)) {
        // Re-check coordinator: if this error triggered an org/project-wide cooldown,
        // stop rotating other Groq keys immediately!
        const postErrorPlan = await coordinator.getExecutionKeyForSlot({
          slotId,
          sessionId,
          assignedKeyIndex: keyIndex,
          serviceType,
        });

        console.warn(
          `[GroqClient:${callLabel}] Key #${keyIndex} (${maskedKey}) returned status ${res.status}: ${errorText.slice(0, 140)}.`
        );

        if (postErrorPlan.skipGroqRotation) {
          if (twoPhaseFallback && !allowBackupFallback) {
            return buildFallbackPendingResponse(postErrorPlan);
          }
          await notifyBeforeFallback(postErrorPlan);
          res.candidateNotification = candidateNotification;
          res.skipGroqRotation = true;
          return res;
        }

        continue;
      }

      return res;
    } catch (err) {
      lastError = err;
      await coordinator.recordProviderResponse({
        keyIndex,
        status: 503,
        headers: {},
        errorBodyText: err.message || "Network error",
        serviceType,
      });
      console.warn(
        `[GroqClient:${callLabel}] Network error on Key #${keyIndex} (${maskedKey}): ${err.message}.`
      );
      continue;
    }
  }

  if (lastResponse) {
    if (candidateNotification) {
      lastResponse.candidateNotification = candidateNotification;
    }
    return lastResponse;
  }
  throw lastError || new Error(`[GroqClient:${callLabel}] Groq API execution unavailable across eligible keys.`);
}
