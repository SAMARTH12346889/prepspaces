/**
 * PrepSpaces Centralized API Key Management, Cooldown & Interview Queue System
 *
 * Production Guarantees:
 * - 4 Simultaneous Active Interview Slots (Slots 1-4) with dedicated Keys 1-4
 * - Key 5 strictly reserved as Emergency Backup / Fallback
 * - FIFO Waiting Queue (Max 5 queued candidates, Total concurrent capacity = 9)
 * - Atomic slot & queue allocation backed by Cloudflare Durable Object (cross-instance)
 *   with in-memory state-machine support for tests
 * - Independent Rate Limit Scopes: Per-Key vs Project vs Organization/Provider-Wide
 *   (Never assumes rotating Groq keys bypasses shared org/project quota limits)
 * - Independent Cooldown Timers: minute (RPM), hour (RPH), day (RPD/TPD),
 *   tokenMinute (TPM), tokenDay (TPD), audioHour (Whisper/hr), audioDay (Whisper/day)
 * - Service Separation: LLM (chat) and Whisper (audio) limits tracked independently
 * - Abandoned / Disconnected Session Cleanup via Heartbeat + Lease TTL without
 *   prematurely evicting active candidates
 * - Candidate Reassurance Notification BEFORE attempting any API fallback
 */

export const MAX_ACTIVE_INTERVIEWS = 4;
export const MAX_QUEUE_CAPACITY = 5;

export const CANDIDATE_COOLDOWN_NOTIFICATION =
  "AI service is temporarily busy. We are checking service availability and backup options. Your interview progress is safely saved and will be preserved.";

export const KEY_ROLES = [
  { index: 1, slotId: "slot_1", role: "SLOT_1", label: "Candidate 1 (Slot 1)", isBackup: false },
  { index: 2, slotId: "slot_2", role: "SLOT_2", label: "Candidate 2 (Slot 2)", isBackup: false },
  { index: 3, slotId: "slot_3", role: "SLOT_3", label: "Candidate 3 (Slot 3)", isBackup: false },
  { index: 4, slotId: "slot_4", role: "SLOT_4", label: "Candidate 4 (Slot 4)", isBackup: false },
  { index: 5, slotId: "slot_backup", role: "RESERVED_BACKUP", label: "Reserved Backup / Fallback", isBackup: true },
];

export const DEFAULT_PROVIDER_LIMITS = {
  llm: {
    rpm: 30,
    rph: 1000,
    rpd: 14400,
    tpm: 6000,
    tpd: 500000,
  },
  whisper: {
    rpm: 20,
    rph: 600,
    rpd: 7200,
    audioSecondsPerHour: 7200, // 2 hours of audio per hour
    audioSecondsPerDay: 28800, // 8 hours of audio per day
  },
  safetyThresholdRatio: 0.85,
};

export const DEFAULT_LEASE_CONFIG = {
  activeHeartbeatTimeoutMs: 60000, // 60s without heartbeat/activity => abandoned
  maxActiveSlotDurationMs: 300000, // 5m hard cap on a 3m interview + report buffer
  queueHeartbeatTimeoutMs: 25000, // 25s without queue-status poll => left queue
};

/**
 * Parses Groq reset header strings like "2m30s", "12s", "500ms", or numeric seconds -> milliseconds
 */
export function parseResetDurationMs(rawValue) {
  if (rawValue === null || rawValue === undefined || rawValue === "") return null;
  if (typeof rawValue === "number" && !Number.isNaN(rawValue)) {
    return Math.max(1000, rawValue * 1000);
  }
  const str = String(rawValue).trim().toLowerCase();
  if (/^\d+(\.\d+)?$/.test(str)) {
    return Math.max(1000, Math.ceil(parseFloat(str) * 1000));
  }
  let totalMs = 0;
  const hMatch = str.match(/(\d+(?:\.\d+)?)h/);
  const mMatch = str.match(/(\d+(?:\.\d+)?)m(?!s)/);
  const sMatch = str.match(/(\d+(?:\.\d+)?)s/);
  const msMatch = str.match(/(\d+(?:\.\d+)?)ms/);
  if (hMatch) totalMs += parseFloat(hMatch[1]) * 3600000;
  if (mMatch) totalMs += parseFloat(mMatch[1]) * 60000;
  if (sMatch) totalMs += parseFloat(sMatch[1]) * 1000;
  if (msMatch) totalMs += parseFloat(msMatch[1]);
  return totalMs > 0 ? Math.ceil(totalMs) : null;
}

function createEmptyCooldowns() {
  return {
    minuteUntil: 0,
    hourUntil: 0,
    dayUntil: 0,
    tokenMinuteUntil: 0,
    tokenDayUntil: 0,
    audioHourUntil: 0,
    audioDayUntil: 0,
  };
}

function createInitialKeyState(i) {
  return {
    index: i,
    role: KEY_ROLES[i - 1].role,
    isBackup: KEY_ROLES[i - 1].isBackup,
    configured: true,
    organizationId: "default_groq_org",
    projectId: "default_groq_project",
    status: "AVAILABLE", // AVAILABLE, IN_USE, APPROACHING_LIMIT, COOLDOWN, DISABLED, ERROR
    lastStatusReason: "Initial state",
    cooldowns: createEmptyCooldowns(),
    providerLimits: {
      remainingRequests: null,
      limitRequests: null,
      remainingTokens: null,
      limitTokens: null,
      resetRequestsMs: null,
      resetTokensMs: null,
    },
    usageLogs: [], // { timestamp, service: 'llm'|'whisper', tokens, audioSeconds, success }
  };
}

export class CentralizedRateLimitAndQueueManager {
  constructor(options = {}) {
    this.nowFn = typeof options.nowFn === "function" ? options.nowFn : () => Date.now();
    this.leaseConfig = {
      ...DEFAULT_LEASE_CONFIG,
      ...(options.leaseConfig || {}),
    };

    this.activeSlots = new Map([
      ["slot_1", null],
      ["slot_2", null],
      ["slot_3", null],
      ["slot_4", null],
    ]);

    this.waitingQueue = []; // FIFO array of { sessionId, candidateId, user, courseId, moduleId, enqueuedAt, lastActivityAt }
    this.admittedCandidates = new Map(); // sessionId -> { slotId, keyIndex, admittedAt }

    // Per-key tracking (indices 1..5)
    this.keyStates = new Map();
    for (let i = 1; i <= 5; i++) {
      this.keyStates.set(i, createInitialKeyState(i));
    }

    // Separate Organization-wide and Project-wide cooldown maps (never bypassed by key rotation)
    this.organizationCooldowns = new Map(); // orgId -> { cooldowns, reason, updatedAt }
    this.projectCooldowns = new Map(); // projectId -> { cooldowns, reason, updatedAt }

    this.metrics = {
      totalInterviewRequests: 0,
      admittedInterviews: 0,
      queuedInterviews: 0,
      rejectedQueueFull: 0,
      completedInterviews: 0,
      reapedAbandonedSlots: 0,
      reapedAbandonedQueueEntries: 0,
      fallbackEvents: 0,
      fallbackNoticesIssued: 0,
      skippedOrgWideRotations: 0,
      rateLimitHits: 0,
      orgWideRateLimitHits: 0,
      projectWideRateLimitHits: 0,
      perKeyRateLimitHits: 0,
    };

    // Async mutex lock for atomic single-isolate execution
    this.isLocked = false;
    this.lockQueue = [];
  }

  now() {
    return this.nowFn();
  }

  async acquireLock() {
    if (!this.isLocked) {
      this.isLocked = true;
      return;
    }
    return new Promise((resolve) => {
      this.lockQueue.push(resolve);
    });
  }

  releaseLock() {
    if (this.lockQueue.length > 0) {
      const next = this.lockQueue.shift();
      next();
    } else {
      this.isLocked = false;
    }
  }

  /**
   * Serializes coordinator state for Cloudflare Durable Object storage persistence
   */
  exportState() {
    return {
      activeSlots: Array.from(this.activeSlots.entries()),
      waitingQueue: this.waitingQueue,
      admittedCandidates: Array.from(this.admittedCandidates.entries()),
      keyStates: Array.from(this.keyStates.entries()),
      organizationCooldowns: Array.from(this.organizationCooldowns.entries()),
      projectCooldowns: Array.from(this.projectCooldowns.entries()),
      metrics: { ...this.metrics },
    };
  }

  /**
   * Restores coordinator state from Durable Object storage snapshot
   */
  importState(snapshot) {
    if (!snapshot || typeof snapshot !== "object") return;
    if (Array.isArray(snapshot.activeSlots)) {
      this.activeSlots = new Map(snapshot.activeSlots);
    }
    if (Array.isArray(snapshot.waitingQueue)) {
      this.waitingQueue = snapshot.waitingQueue;
    }
    if (Array.isArray(snapshot.admittedCandidates)) {
      this.admittedCandidates = new Map(snapshot.admittedCandidates);
    }
    if (Array.isArray(snapshot.keyStates)) {
      this.keyStates = new Map(snapshot.keyStates);
    }
    if (Array.isArray(snapshot.organizationCooldowns)) {
      this.organizationCooldowns = new Map(snapshot.organizationCooldowns);
    }
    if (Array.isArray(snapshot.projectCooldowns)) {
      this.projectCooldowns = new Map(snapshot.projectCooldowns);
    }
    if (snapshot.metrics) {
      this.metrics = { ...this.metrics, ...snapshot.metrics };
    }
  }

  /**
   * Synchronizes key configuration status & optional per-key org/project IDs from Worker env secrets
   */
  syncEnvironmentMetadata(env) {
    if (!env) return;
    for (let i = 1; i <= 5; i++) {
      const state = this.keyStates.get(i);
      if (!state) continue;
      const secretVal = env[`GROQ_API_KEY_${i}`];
      if (secretVal !== undefined) {
        const isConfigured = typeof secretVal === "string" && secretVal.trim().length > 0;
        state.configured = isConfigured;
        if (!isConfigured) {
          state.status = "DISABLED";
          state.lastStatusReason = `Secret GROQ_API_KEY_${i} not configured`;
        } else if (state.status === "DISABLED") {
          state.status = "AVAILABLE";
          state.lastStatusReason = "Secret configured";
        }
      }
      if (env[`GROQ_ORG_ID_${i}`]) {
        state.organizationId = String(env[`GROQ_ORG_ID_${i}`]).trim();
      } else if (env.GROQ_ORG_ID) {
        state.organizationId = String(env.GROQ_ORG_ID).trim();
      }
      if (env[`GROQ_PROJECT_ID_${i}`]) {
        state.projectId = String(env[`GROQ_PROJECT_ID_${i}`]).trim();
      } else if (env.GROQ_PROJECT_ID) {
        state.projectId = String(env.GROQ_PROJECT_ID).trim();
      }
    }
  }

  pruneUsageLogs(keyIndex) {
    const state = this.keyStates.get(keyIndex);
    if (!state) return;
    const dayAgo = this.now() - 86400000;
    state.usageLogs = state.usageLogs.filter((log) => log.timestamp > dayAgo);
  }

  calculateRollingUsage(keyIndex) {
    this.pruneUsageLogs(keyIndex);
    const state = this.keyStates.get(keyIndex);
    if (!state) {
      return { rpm: 0, rph: 0, rpd: 0, tpm: 0, tpd: 0, audioHour: 0, audioDay: 0, llmRpm: 0, whisperRpm: 0 };
    }

    const now = this.now();
    const minuteAgo = now - 60000;
    const hourAgo = now - 3600000;
    const dayAgo = now - 86400000;

    let rpm = 0, rph = 0, rpd = 0;
    let tpm = 0, tpd = 0;
    let audioHour = 0, audioDay = 0;
    let llmRpm = 0, whisperRpm = 0;

    for (const log of state.usageLogs) {
      if (log.timestamp > dayAgo) {
        rpd++;
        tpd += log.tokens || 0;
        audioDay += log.audioSeconds || 0;

        if (log.timestamp > hourAgo) {
          rph++;
          audioHour += log.audioSeconds || 0;

          if (log.timestamp > minuteAgo) {
            rpm++;
            tpm += log.tokens || 0;
            if (log.service === "whisper") whisperRpm++;
            else llmRpm++;
          }
        }
      }
    }

    return { rpm, rph, rpd, tpm, tpd, audioHour, audioDay, llmRpm, whisperRpm };
  }

  /**
   * Clears expired timers from a cooldown object without clearing still-active timers
   */
  _clearExpiredCooldowns(cds, now) {
    if (!cds) return;
    if (cds.minuteUntil <= now) cds.minuteUntil = 0;
    if (cds.hourUntil <= now) cds.hourUntil = 0;
    if (cds.dayUntil <= now) cds.dayUntil = 0;
    if (cds.tokenMinuteUntil <= now) cds.tokenMinuteUntil = 0;
    if (cds.tokenDayUntil <= now) cds.tokenDayUntil = 0;
    if (cds.audioHourUntil <= now) cds.audioHourUntil = 0;
    if (cds.audioDayUntil <= now) cds.audioDayUntil = 0;
  }

  _collectActiveCooldownReasons(cds, now, serviceType = "all") {
    if (!cds) return [];
    const reasons = [];
    if (cds.minuteUntil > now) {
      reasons.push(`minute RPM (${Math.ceil((cds.minuteUntil - now) / 1000)}s)`);
    }
    if (cds.hourUntil > now) {
      reasons.push(`hourly RPH (${Math.ceil((cds.hourUntil - now) / 1000)}s)`);
    }
    if (cds.dayUntil > now) {
      reasons.push(`daily RPD (${Math.ceil((cds.dayUntil - now) / 1000)}s)`);
    }
    if (serviceType === "all" || serviceType === "llm") {
      if (cds.tokenMinuteUntil > now) {
        reasons.push(`token TPM (${Math.ceil((cds.tokenMinuteUntil - now) / 1000)}s)`);
      }
      if (cds.tokenDayUntil > now) {
        reasons.push(`token TPD (${Math.ceil((cds.tokenDayUntil - now) / 1000)}s)`);
      }
    }
    if (serviceType === "all" || serviceType === "whisper") {
      if (cds.audioHourUntil > now) {
        reasons.push(`audio hourly (${Math.ceil((cds.audioHourUntil - now) / 1000)}s)`);
      }
      if (cds.audioDayUntil > now) {
        reasons.push(`audio daily (${Math.ceil((cds.audioDayUntil - now) / 1000)}s)`);
      }
    }
    return reasons;
  }

  /**
   * Checks whether an organization or project scope has an active cooldown for the serviceType
   */
  getScopeCooldownStatus(keyIndex, serviceType = "all") {
    const state = this.keyStates.get(keyIndex);
    if (!state) return { blocked: false, scope: null, reasons: [], maxUntil: 0 };

    const now = this.now();
    const orgEntry = this.organizationCooldowns.get(state.organizationId);
    if (orgEntry) {
      this._clearExpiredCooldowns(orgEntry.cooldowns, now);
      const orgReasons = this._collectActiveCooldownReasons(orgEntry.cooldowns, now, serviceType);
      if (orgReasons.length > 0) {
        const maxUntil = this._maxActiveUntil(orgEntry.cooldowns, serviceType);
        return {
          blocked: true,
          scope: "organization",
          scopeId: state.organizationId,
          reasons: orgReasons,
          maxUntil,
        };
      }
    }

    const projEntry = this.projectCooldowns.get(state.projectId);
    if (projEntry) {
      this._clearExpiredCooldowns(projEntry.cooldowns, now);
      const projReasons = this._collectActiveCooldownReasons(projEntry.cooldowns, now, serviceType);
      if (projReasons.length > 0) {
        const maxUntil = this._maxActiveUntil(projEntry.cooldowns, serviceType);
        return {
          blocked: true,
          scope: "project",
          scopeId: state.projectId,
          reasons: projReasons,
          maxUntil,
        };
      }
    }

    return { blocked: false, scope: null, reasons: [], maxUntil: 0 };
  }

  _maxActiveUntil(cds, serviceType = "all") {
    if (!cds) return 0;
    const vals = [cds.minuteUntil, cds.hourUntil, cds.dayUntil];
    if (serviceType === "all" || serviceType === "llm") {
      vals.push(cds.tokenMinuteUntil, cds.tokenDayUntil);
    }
    if (serviceType === "all" || serviceType === "whisper") {
      vals.push(cds.audioHourUntil, cds.audioDayUntil);
    }
    return Math.max(0, ...vals);
  }

  /**
   * Refreshes the status of a key by evaluating per-key AND org/project cooldowns + rolling usage.
   * Performs automatic cooldown recovery once timers expire.
   */
  evaluateKeyStatus(keyIndex, serviceType = "all") {
    const state = this.keyStates.get(keyIndex);
    if (!state) return "ERROR";
    if (!state.configured || state.status === "DISABLED") {
      state.status = "DISABLED";
      return "DISABLED";
    }
    if (state.status === "ERROR") return "ERROR";

    const now = this.now();

    // Clear expired individual timers (independent of still-active timers)
    this._clearExpiredCooldowns(state.cooldowns, now);

    // 1. Check Organization / Project-Wide Cooldowns first
    const scopeCheck = this.getScopeCooldownStatus(keyIndex, serviceType);
    if (scopeCheck.blocked) {
      state.status = "COOLDOWN";
      state.lastStatusReason = `${scopeCheck.scope} limit (${scopeCheck.scopeId}): ${scopeCheck.reasons.join(", ")}`;
      return "COOLDOWN";
    }

    // 2. Check Per-Key Cooldowns
    const keyReasons = this._collectActiveCooldownReasons(state.cooldowns, now, serviceType);
    if (keyReasons.length > 0) {
      state.status = "COOLDOWN";
      state.lastStatusReason = `Per-key cooldown: ${keyReasons.join(", ")}`;
      return "COOLDOWN";
    }

    // 3. Evaluate rolling usage against safety thresholds
    const usage = this.calculateRollingUsage(keyIndex);
    const limits = DEFAULT_PROVIDER_LIMITS;
    const thresh = limits.safetyThresholdRatio;

    const isApproachingLLM =
      (serviceType === "all" || serviceType === "llm") &&
      (usage.rpm >= limits.llm.rpm * thresh ||
        usage.tpm >= limits.llm.tpm * thresh ||
        usage.rpd >= limits.llm.rpd * thresh ||
        usage.tpd >= limits.llm.tpd * thresh);

    const isApproachingWhisper =
      (serviceType === "all" || serviceType === "whisper") &&
      (usage.audioHour >= limits.whisper.audioSecondsPerHour * thresh ||
        usage.audioDay >= limits.whisper.audioSecondsPerDay * thresh);

    if (isApproachingLLM || isApproachingWhisper) {
      state.status = "APPROACHING_LIMIT";
      state.lastStatusReason = `Approaching limit: RPM ${usage.rpm}/${limits.llm.rpm}, TPM ${usage.tpm}/${limits.llm.tpm}, Audio ${usage.audioHour}/${limits.whisper.audioSecondsPerHour}s`;
      return "APPROACHING_LIMIT";
    }

    // 4. Check if currently bound to an active interview slot
    let inUse = false;
    for (const [, sessionData] of this.activeSlots.entries()) {
      if (sessionData && sessionData.assignedKeyIndex === keyIndex) {
        inUse = true;
        break;
      }
    }

    // Automatic recovery from COOLDOWN / APPROACHING_LIMIT back to IN_USE or AVAILABLE
    state.status = inUse ? "IN_USE" : "AVAILABLE";
    state.lastStatusReason = inUse ? "Assigned to active interview" : "Ready for requests";
    return state.status;
  }

  /**
   * Triggers a cooldown at the appropriate scope:
   * - scope: "key" | "organization" | "project"
   * - limitType: "minute" | "hour" | "day" | "tokenMinute" | "tokenDay" | "audioHour" | "audioDay"
   */
  triggerKeyCooldown({
    keyIndex,
    limitType = "minute",
    durationSeconds = 60,
    reason = "Rate limit reached",
    scope = null,
    isOrgWide = false,
    isProjectWide = false,
  }) {
    const state = this.keyStates.get(keyIndex);
    if (!state) return;

    const now = this.now();
    const durationMs = Math.max(1, durationSeconds) * 1000;
    const until = now + durationMs;

    const resolvedScope = scope || (isOrgWide ? "organization" : isProjectWide ? "project" : "key");

    const applyToCooldowns = (cds) => {
      if (limitType === "minute") cds.minuteUntil = Math.max(cds.minuteUntil, until);
      else if (limitType === "hour") cds.hourUntil = Math.max(cds.hourUntil, until);
      else if (limitType === "day") cds.dayUntil = Math.max(cds.dayUntil, until);
      else if (limitType === "tokenMinute" || limitType === "token") cds.tokenMinuteUntil = Math.max(cds.tokenMinuteUntil, until);
      else if (limitType === "tokenDay") cds.tokenDayUntil = Math.max(cds.tokenDayUntil, until);
      else if (limitType === "audioHour" || limitType === "audio") cds.audioHourUntil = Math.max(cds.audioHourUntil, until);
      else if (limitType === "audioDay") cds.audioDayUntil = Math.max(cds.audioDayUntil, until);
    };

    this.metrics.rateLimitHits++;

    if (resolvedScope === "organization") {
      this.metrics.orgWideRateLimitHits++;
      const orgId = state.organizationId || "default_groq_org";
      let orgEntry = this.organizationCooldowns.get(orgId);
      if (!orgEntry) {
        orgEntry = { cooldowns: createEmptyCooldowns(), reason, updatedAt: now };
        this.organizationCooldowns.set(orgId, orgEntry);
      }
      applyToCooldowns(orgEntry.cooldowns);
      orgEntry.reason = reason;
      orgEntry.updatedAt = now;

      // Update status on every key belonging to this organization
      for (const [kIdx, kState] of this.keyStates.entries()) {
        if (kState.organizationId === orgId) {
          this.evaluateKeyStatus(kIdx);
        }
      }
    } else if (resolvedScope === "project") {
      this.metrics.projectWideRateLimitHits++;
      const projId = state.projectId || "default_groq_project";
      let projEntry = this.projectCooldowns.get(projId);
      if (!projEntry) {
        projEntry = { cooldowns: createEmptyCooldowns(), reason, updatedAt: now };
        this.projectCooldowns.set(projId, projEntry);
      }
      applyToCooldowns(projEntry.cooldowns);
      projEntry.reason = reason;
      projEntry.updatedAt = now;

      for (const [kIdx, kState] of this.keyStates.entries()) {
        if (kState.projectId === projId) {
          this.evaluateKeyStatus(kIdx);
        }
      }
    } else {
      // Strictly per-key limit
      this.metrics.perKeyRateLimitHits++;
      applyToCooldowns(state.cooldowns);
      state.status = "COOLDOWN";
      state.lastStatusReason = `Per-key ${limitType} cooldown: ${reason}`;
    }
  }

  /**
   * Marks a key as permanently errored / disabled (e.g., 401 invalid API key)
   */
  markKeyError(keyIndex, status = "ERROR", reason = "Authentication failed") {
    const state = this.keyStates.get(keyIndex);
    if (!state) return;
    state.status = status;
    state.lastStatusReason = reason;
  }

  /**
   * Parses Groq provider headers and error payloads to distinguish per-key vs org/project limits
   * and update exact RPM / TPM / Audio timers.
   */
  recordProviderResponse({
    keyIndex,
    status,
    headers = null,
    errorBodyText = "",
    serviceType = "llm",
    tokens = 0,
    audioSeconds = 0,
  }) {
    const state = this.keyStates.get(keyIndex);
    if (!state) return;

    const now = this.now();
    const success = status >= 200 && status < 300;

    state.usageLogs.push({
      timestamp: now,
      service: serviceType,
      tokens: Number(tokens) || 0,
      audioSeconds: Number(audioSeconds) || 0,
      success,
    });

    const getH = (name) => {
      if (!headers) return null;
      if (typeof headers.get === "function") return headers.get(name);
      return headers[name] || headers[name.toLowerCase()] || null;
    };

    // Detect dynamic organization / project identifiers from provider headers
    const headerOrg = getH("groq-organization") || getH("x-groq-organization") || getH("openai-organization") || getH("x-organization-id");
    if (headerOrg) state.organizationId = String(headerOrg).trim();

    const headerProj = getH("x-project-id") || getH("groq-project");
    if (headerProj) state.projectId = String(headerProj).trim();

    const remReq = getH("x-ratelimit-remaining-requests");
    const limReq = getH("x-ratelimit-limit-requests");
    const remTok = getH("x-ratelimit-remaining-tokens");
    const limTok = getH("x-ratelimit-limit-tokens");
    const resetReq = getH("x-ratelimit-reset-requests");
    const resetTok = getH("x-ratelimit-reset-tokens");
    const retryAfter = getH("retry-after");
    const scopeHeader = (getH("x-ratelimit-scope") || "").toLowerCase();

    if (remReq !== null) state.providerLimits.remainingRequests = Number(remReq);
    if (limReq !== null) state.providerLimits.limitRequests = Number(limReq);
    if (remTok !== null) state.providerLimits.remainingTokens = Number(remTok);
    if (limTok !== null) state.providerLimits.limitTokens = Number(limTok);
    if (resetReq !== null) state.providerLimits.resetRequestsMs = parseResetDurationMs(resetReq);
    if (resetTok !== null) state.providerLimits.resetTokensMs = parseResetDurationMs(resetTok);

    const lowerErr = (errorBodyText || "").toLowerCase();

    if (status === 401) {
      this.markKeyError(keyIndex, "ERROR", "Invalid or revoked API key (HTTP 401)");
      return;
    }

    if (status === 429 || (status === 403 && (lowerErr.includes("org") || lowerErr.includes("limit") || lowerErr.includes("quota")))) {
      const isOrgWide =
        scopeHeader === "organization" ||
        lowerErr.includes("organization") ||
        lowerErr.includes("org_") ||
        lowerErr.includes("org limit") ||
        lowerErr.includes("model_permission_blocked_org") ||
        lowerErr.includes("account");

      const isProjectWide =
        !isOrgWide &&
        (scopeHeader === "project" || lowerErr.includes("project limit") || lowerErr.includes("project_"));

      // Classify exact limit dimension
      let limitType = "minute";
      if (serviceType === "whisper" || lowerErr.includes("audio") || lowerErr.includes("ash") || lowerErr.includes("asd")) {
        limitType = lowerErr.includes("per day") || lowerErr.includes("daily") || lowerErr.includes("asd")
          ? "audioDay"
          : "audioHour";
      } else if (lowerErr.includes("tokens per day") || lowerErr.includes("tpd") || lowerErr.includes("daily token")) {
        limitType = "tokenDay";
      } else if (lowerErr.includes("tokens per minute") || lowerErr.includes("tpm") || (remTok !== null && Number(remTok) === 0)) {
        limitType = "tokenMinute";
      } else if (lowerErr.includes("requests per day") || lowerErr.includes("rpd") || lowerErr.includes("daily")) {
        limitType = "day";
      } else if (lowerErr.includes("requests per hour") || lowerErr.includes("rph") || lowerErr.includes("hourly")) {
        limitType = "hour";
      }

      let durationSeconds = 60;
      if (retryAfter !== null && !Number.isNaN(Number(retryAfter))) {
        durationSeconds = Math.max(1, Number(retryAfter));
      } else if (limitType === "tokenMinute" && state.providerLimits.resetTokensMs) {
        durationSeconds = Math.ceil(state.providerLimits.resetTokensMs / 1000);
      } else if (state.providerLimits.resetRequestsMs) {
        durationSeconds = Math.ceil(state.providerLimits.resetRequestsMs / 1000);
      } else if (limitType === "day" || limitType === "tokenDay" || limitType === "audioDay") {
        durationSeconds = 3600; // minimum 1h backoff when daily quota exhausted without Retry-After
      }

      this.triggerKeyCooldown({
        keyIndex,
        limitType,
        durationSeconds,
        reason: `HTTP ${status} (${limitType})`,
        scope: isOrgWide ? "organization" : isProjectWide ? "project" : "key",
      });
      return;
    }

    this.evaluateKeyStatus(keyIndex);
  }

  /**
   * Reaps abandoned/disconnected active interview slots and stale queue entries
   * WITHOUT removing legitimately active candidates whose heartbeats/activity are current.
   */
  reapStaleSessions() {
    const now = this.now();
    const { activeHeartbeatTimeoutMs, maxActiveSlotDurationMs, queueHeartbeatTimeoutMs } = this.leaseConfig;
    const reapedSlots = [];
    const autoAdmitted = [];

    // 1. Prune disconnected candidates from FIFO waiting queue first so dead tabs aren't promoted
    const keptQueue = [];
    for (const qEntry of this.waitingQueue) {
      const lastSeen = qEntry.lastActivityAt || qEntry.enqueuedAt || now;
      if (now - lastSeen > queueHeartbeatTimeoutMs) {
        this.metrics.reapedAbandonedQueueEntries++;
      } else {
        keptQueue.push(qEntry);
      }
    }
    this.waitingQueue = keptQueue;

    // 2. Check active slots for disconnected heartbeat timeout or hard max session lease
    for (const [slotId, sessionData] of this.activeSlots.entries()) {
      if (!sessionData) continue;

      const lastSeen = sessionData.lastActivityAt || sessionData.startedAt || now;
      const idleDuration = now - lastSeen;
      const totalDuration = now - (sessionData.startedAt || now);

      const isHeartbeatExpired = idleDuration > activeHeartbeatTimeoutMs;
      const isHardCapExpired = totalDuration > maxActiveSlotDurationMs;

      if (isHeartbeatExpired || isHardCapExpired) {
        const freedKeyIndex = sessionData.assignedKeyIndex;
        this.activeSlots.set(slotId, null);
        this.metrics.reapedAbandonedSlots++;
        reapedSlots.push({
          slotId,
          sessionId: sessionData.sessionId,
          reason: isHeartbeatExpired ? "HEARTBEAT_TIMEOUT" : "MAX_LEASE_EXPIRED",
        });

        // Promote next active queued candidate into freed slot
        if (this.waitingQueue.length > 0) {
          const nextCandidate = this.waitingQueue.shift();
          const newPayload = {
            slotId,
            sessionId: nextCandidate.sessionId,
            candidateId: nextCandidate.candidateId,
            assignedKeyIndex: freedKeyIndex,
            user: nextCandidate.user,
            courseId: nextCandidate.courseId,
            moduleId: nextCandidate.moduleId,
            startedAt: now,
            lastActivityAt: now,
          };
          this.activeSlots.set(slotId, newPayload);
          this.admittedCandidates.set(nextCandidate.sessionId, {
            slotId,
            keyIndex: freedKeyIndex,
            admittedAt: now,
          });
          autoAdmitted.push({
            sessionId: nextCandidate.sessionId,
            slotId,
            assignedKeyIndex: freedKeyIndex,
          });
        }

        this.evaluateKeyStatus(freedKeyIndex);
      }
    }

    return { reapedSlots, autoAdmitted };
  }

  /**
   * Keeps an active session or queued candidate alive (prevents abandonment reaping)
   */
  async heartbeat({ sessionId }) {
    await this.acquireLock();
    try {
      const now = this.now();

      for (const [slotId, sessionData] of this.activeSlots.entries()) {
        if (sessionData && sessionData.sessionId === sessionId) {
          sessionData.lastActivityAt = now;
          return {
            found: true,
            location: "ACTIVE_SLOT",
            slotId,
            assignedKeyIndex: sessionData.assignedKeyIndex,
            serviceStatus: this.getExecutionKeyForSlot({
              slotId,
              assignedKeyIndex: sessionData.assignedKeyIndex,
            }),
          };
        }
      }

      const qIdx = this.waitingQueue.findIndex((q) => q.sessionId === sessionId);
      if (qIdx !== -1) {
        this.waitingQueue[qIdx].lastActivityAt = now;
        return {
          found: true,
          location: "WAITING_QUEUE",
          queuePosition: qIdx + 1,
        };
      }

      return { found: false };
    } finally {
      this.releaseLock();
    }
  }

  /**
   * Atomic FIFO Interview Slot Request:
   * - Reaps stale abandoned sessions first
   * - Maximum 4 active slots (Slots 1-4 -> dedicated Keys 1-4)
   * - Maximum 5 queued candidates in FIFO queue
   */
  async requestInterviewSlot({ sessionId, candidateId, user = null, courseId = "ai-engineering", moduleId = "all" }) {
    await this.acquireLock();
    try {
      this.reapStaleSessions();
      this.metrics.totalInterviewRequests++;
      const now = this.now();

      // 1. Existing active slot holder (idempotent)
      for (const [slotId, sessionData] of this.activeSlots.entries()) {
        if (sessionData && sessionData.sessionId === sessionId) {
          sessionData.lastActivityAt = now;
          const keyIndex = sessionData.assignedKeyIndex;
          this.evaluateKeyStatus(keyIndex);
          return {
            status: "ADMITTED",
            slotId,
            assignedKeyIndex: keyIndex,
            role: KEY_ROLES[keyIndex - 1].role,
            isBackup: false,
            message: "Active interview slot retained.",
          };
        }
      }

      // 2. Recently admitted from queue
      if (this.admittedCandidates.has(sessionId)) {
        const adm = this.admittedCandidates.get(sessionId);
        this.admittedCandidates.delete(sessionId);
        const slotData = this.activeSlots.get(adm.slotId);
        if (slotData && slotData.sessionId === sessionId) {
          slotData.lastActivityAt = now;
        }
        return {
          status: "ADMITTED",
          slotId: adm.slotId,
          assignedKeyIndex: adm.keyIndex,
          role: KEY_ROLES[adm.keyIndex - 1].role,
          isBackup: false,
          message: "Admitted from waiting queue.",
        };
      }

      // 3. Allocate free Active Slot (1..4)
      for (let i = 1; i <= MAX_ACTIVE_INTERVIEWS; i++) {
        const slotId = `slot_${i}`;
        if (!this.activeSlots.get(slotId)) {
          const assignedKeyIndex = i;
          const slotPayload = {
            slotId,
            sessionId,
            candidateId,
            assignedKeyIndex,
            user,
            courseId,
            moduleId,
            startedAt: now,
            lastActivityAt: now,
          };

          this.activeSlots.set(slotId, slotPayload);
          this.metrics.admittedInterviews++;
          this.evaluateKeyStatus(assignedKeyIndex);

          return {
            status: "ADMITTED",
            slotId,
            assignedKeyIndex,
            role: KEY_ROLES[assignedKeyIndex - 1].role,
            isBackup: false,
            message: `Allocated active interview slot ${slotId} with dedicated Key ${assignedKeyIndex}.`,
          };
        }
      }

      // 4. Already in waiting queue (idempotent)
      const existingQueueIdx = this.waitingQueue.findIndex((q) => q.sessionId === sessionId);
      if (existingQueueIdx !== -1) {
        this.waitingQueue[existingQueueIdx].lastActivityAt = now;
        const position = existingQueueIdx + 1;
        return {
          status: "QUEUED",
          queuePosition: position,
          queueTotal: this.waitingQueue.length,
          estimatedWaitSeconds: position * 45,
          message: `You are in the interview waiting queue (Position #${position}). You will be admitted automatically when a slot opens.`,
        };
      }

      // 5. Enqueue into FIFO queue if below MAX_QUEUE_CAPACITY (5)
      if (this.waitingQueue.length < MAX_QUEUE_CAPACITY) {
        this.waitingQueue.push({
          sessionId,
          candidateId,
          user,
          courseId,
          moduleId,
          enqueuedAt: now,
          lastActivityAt: now,
        });
        this.metrics.queuedInterviews++;
        const position = this.waitingQueue.length;
        return {
          status: "QUEUED",
          queuePosition: position,
          queueTotal: this.waitingQueue.length,
          estimatedWaitSeconds: position * 45,
          message: `All 4 active interview slots are in use. You have been added to the waiting queue (Position #${position}).`,
        };
      }

      // 6. System Capacity Full (4 active + 5 queued = 9)
      this.metrics.rejectedQueueFull++;
      return {
        status: "QUEUE_FULL",
        activeCount: MAX_ACTIVE_INTERVIEWS,
        queueCount: this.waitingQueue.length,
        message: "All interview slots and the waiting queue are currently full. Please try again in a few minutes.",
      };
    } finally {
      this.releaseLock();
    }
  }

  /**
   * Release active slot & automatically admit next FIFO candidate
   */
  async releaseInterviewSlot({ sessionId }) {
    await this.acquireLock();
    try {
      this.reapStaleSessions();
      const now = this.now();
      let freedSlotId = null;
      let freedKeyIndex = null;

      for (const [slotId, sessionData] of this.activeSlots.entries()) {
        if (sessionData && sessionData.sessionId === sessionId) {
          freedSlotId = slotId;
          freedKeyIndex = sessionData.assignedKeyIndex;
          this.activeSlots.set(slotId, null);
          this.metrics.completedInterviews++;
          break;
        }
      }

      if (!freedSlotId) {
        const qIdx = this.waitingQueue.findIndex((q) => q.sessionId === sessionId);
        if (qIdx !== -1) {
          this.waitingQueue.splice(qIdx, 1);
          return { released: true, removedFromQueue: true, message: "Removed from waiting queue." };
        }
        return { released: false, message: "Session was not holding an active slot." };
      }

      let nextAdmitted = null;
      if (this.waitingQueue.length > 0) {
        const nextCandidate = this.waitingQueue.shift();
        const slotPayload = {
          slotId: freedSlotId,
          sessionId: nextCandidate.sessionId,
          candidateId: nextCandidate.candidateId,
          assignedKeyIndex: freedKeyIndex,
          user: nextCandidate.user,
          courseId: nextCandidate.courseId,
          moduleId: nextCandidate.moduleId,
          startedAt: now,
          lastActivityAt: now,
        };

        this.activeSlots.set(freedSlotId, slotPayload);
        this.admittedCandidates.set(nextCandidate.sessionId, {
          slotId: freedSlotId,
          keyIndex: freedKeyIndex,
          admittedAt: now,
        });

        nextAdmitted = {
          sessionId: nextCandidate.sessionId,
          slotId: freedSlotId,
          assignedKeyIndex: freedKeyIndex,
        };
      }

      this.evaluateKeyStatus(freedKeyIndex);

      return {
        released: true,
        freedSlotId,
        freedKeyIndex,
        nextAdmitted,
      };
    } finally {
      this.releaseLock();
    }
  }

  async getQueueStatus(sessionId) {
    await this.acquireLock();
    try {
      this.reapStaleSessions();
      const now = this.now();

      if (this.admittedCandidates.has(sessionId)) {
        const adm = this.admittedCandidates.get(sessionId);
        const slotData = this.activeSlots.get(adm.slotId);
        if (slotData && slotData.sessionId === sessionId) {
          slotData.lastActivityAt = now;
        }
        return {
          status: "ADMITTED",
          slotId: adm.slotId,
          assignedKeyIndex: adm.keyIndex,
          message: "You have been admitted to an interview slot!",
        };
      }

      for (const [slotId, sessionData] of this.activeSlots.entries()) {
        if (sessionData && sessionData.sessionId === sessionId) {
          sessionData.lastActivityAt = now;
          return {
            status: "ADMITTED",
            slotId,
            assignedKeyIndex: sessionData.assignedKeyIndex,
            message: "Active interview slot confirmed.",
          };
        }
      }

      const qIdx = this.waitingQueue.findIndex((q) => q.sessionId === sessionId);
      if (qIdx !== -1) {
        this.waitingQueue[qIdx].lastActivityAt = now;
        const position = qIdx + 1;
        return {
          status: "QUEUED",
          queuePosition: position,
          queueTotal: this.waitingQueue.length,
          estimatedWaitSeconds: position * 45,
          message: `Position #${position} in waiting queue. Please remain on this screen.`,
        };
      }

      return {
        status: "NOT_FOUND",
        message: "No active slot or queue entry for this session.",
      };
    } finally {
      this.releaseLock();
    }
  }

  /**
   * Resolves slot assignment for a sessionId (also updates activity timestamp)
   */
  getSlotForSession(sessionId) {
    if (!sessionId) return null;
    for (const [slotId, sessionData] of this.activeSlots.entries()) {
      if (sessionData && sessionData.sessionId === sessionId) {
        sessionData.lastActivityAt = this.now();
        return {
          slotId,
          assignedKeyIndex: sessionData.assignedKeyIndex,
        };
      }
    }
    return null;
  }

  /**
   * Determines execution plan for an interview slot & service type:
   * 1. Evaluates primary key (1..4) for requested serviceType ('llm' or 'whisper').
   * 2. If primary key is unavailable:
   *    - Marks notificationRequired = true BEFORE any fallback runs!
   *    - Checks if primary failed due to organization/project shared limit.
   *    - Only switches to reserved Backup Key 5 if Key 5 is NOT on the same blocked org/project
   *      and Key 5 itself is healthy.
   *    - Otherwise skips redundant Groq key rotation and routes directly to secondary fallback
   *      (Workers AI / deterministic rubric).
   */
  getExecutionKeyForSlot({ slotId = null, sessionId = null, assignedKeyIndex = null, serviceType = "llm" }) {
    let primaryKeyIdx = assignedKeyIndex;
    if (!primaryKeyIdx && sessionId) {
      const slotInfo = this.getSlotForSession(sessionId);
      if (slotInfo) {
        primaryKeyIdx = slotInfo.assignedKeyIndex;
      }
    }
    if (!primaryKeyIdx && slotId) {
      primaryKeyIdx = parseInt(String(slotId).replace("slot_", ""), 10);
    }
    if (!primaryKeyIdx || primaryKeyIdx < 1 || primaryKeyIdx > 4) {
      primaryKeyIdx = 1;
    }

    const primaryState = this.keyStates.get(primaryKeyIdx);
    const primaryStatus = this.evaluateKeyStatus(primaryKeyIdx, serviceType);
    const now = this.now();

    const isPrimaryUsable = primaryStatus === "AVAILABLE" || primaryStatus === "IN_USE";
    if (isPrimaryUsable) {
      return {
        keyIndex: primaryKeyIdx,
        primaryKeyIndex: primaryKeyIdx,
        isFallback: false,
        isBackupKey: false,
        skipGroqRotation: false,
        status: primaryStatus,
        notificationRequired: false,
        notificationMessage: null,
      };
    }

    // Primary key is in COOLDOWN, APPROACHING_LIMIT, DISABLED, or ERROR.
    // Notification MUST be prepared BEFORE fallback is attempted.
    this.metrics.fallbackNoticesIssued++;
    this.metrics.fallbackEvents++;

    const primaryScopeCheck = this.getScopeCooldownStatus(primaryKeyIdx, serviceType);
    const backupState = this.keyStates.get(5);
    const backupStatus = this.evaluateKeyStatus(5, serviceType);
    const backupScopeCheck = this.getScopeCooldownStatus(5, serviceType);

    const sharesBlockedOrgOrProject =
      primaryScopeCheck.blocked &&
      ((primaryScopeCheck.scope === "organization" && backupState?.organizationId === primaryScopeCheck.scopeId) ||
        (primaryScopeCheck.scope === "project" && backupState?.projectId === primaryScopeCheck.scopeId));

    if (sharesBlockedOrgOrProject || backupScopeCheck.blocked) {
      // Do NOT blindly try Key 5 when org/project quota is shared and exhausted!
      this.metrics.skippedOrgWideRotations++;
      return {
        keyIndex: null,
        primaryKeyIndex: primaryKeyIdx,
        isFallback: true,
        isBackupKey: false,
        skipGroqRotation: true,
        scopeBlocked: primaryScopeCheck.scope || backupScopeCheck.scope,
        status: "COOLDOWN",
        notificationRequired: true,
        notificationMessage: CANDIDATE_COOLDOWN_NOTIFICATION,
        fallbackType: "LOCAL_RUBRIC_WORKERS_AI",
        expectedResetSeconds: Math.max(
          5,
          Math.ceil(((primaryScopeCheck.maxUntil || backupScopeCheck.maxUntil) - now) / 1000)
        ),
      };
    }

    if (backupStatus === "AVAILABLE" || backupStatus === "IN_USE") {
      return {
        keyIndex: 5,
        primaryKeyIndex: primaryKeyIdx,
        isFallback: true,
        isBackupKey: true,
        skipGroqRotation: false,
        status: backupStatus,
        notificationRequired: true,
        notificationMessage: CANDIDATE_COOLDOWN_NOTIFICATION,
        fallbackType: "RESERVED_KEY_5",
      };
    }

    // Backup key 5 is also unavailable
    return {
      keyIndex: null,
      primaryKeyIndex: primaryKeyIdx,
      isFallback: true,
      isBackupKey: false,
      skipGroqRotation: true,
      status: backupStatus,
      notificationRequired: true,
      notificationMessage: CANDIDATE_COOLDOWN_NOTIFICATION,
      fallbackType: "LOCAL_RUBRIC_WORKERS_AI",
      expectedResetSeconds: Math.max(
        5,
        Math.ceil((this._maxActiveUntil(primaryState?.cooldowns, serviceType) - now) / 1000)
      ),
    };
  }

  getSystemMetrics() {
    this.reapStaleSessions();
    const now = this.now();

    const activeInterviews = [];
    for (const [slotId, sessionData] of this.activeSlots.entries()) {
      if (sessionData) {
        activeInterviews.push({
          slotId,
          assignedKeyIndex: sessionData.assignedKeyIndex,
          maskedKey: `Key #${sessionData.assignedKeyIndex} (Slot ${sessionData.assignedKeyIndex})`,
          sessionId: sessionData.sessionId,
          candidateId: sessionData.candidateId,
          startedAt: sessionData.startedAt,
          lastActivityAt: sessionData.lastActivityAt,
          idleSeconds: Math.floor((now - (sessionData.lastActivityAt || sessionData.startedAt)) / 1000),
          durationSeconds: Math.floor((now - sessionData.startedAt) / 1000),
        });
      }
    }

    const queueEntries = this.waitingQueue.map((q, idx) => ({
      position: idx + 1,
      sessionId: q.sessionId,
      candidateId: q.candidateId,
      waitDurationSeconds: Math.floor((now - q.enqueuedAt) / 1000),
      idleSeconds: Math.floor((now - (q.lastActivityAt || q.enqueuedAt)) / 1000),
    }));

    const keyMetrics = [];
    for (let i = 1; i <= 5; i++) {
      const state = this.keyStates.get(i);
      this.evaluateKeyStatus(i);
      const usage = this.calculateRollingUsage(i);
      const cds = state.cooldowns;

      keyMetrics.push({
        index: i,
        role: KEY_ROLES[i - 1].role,
        label: KEY_ROLES[i - 1].label,
        isBackup: KEY_ROLES[i - 1].isBackup,
        configured: state.configured,
        organizationId: state.organizationId,
        projectId: state.projectId,
        status: state.status,
        reason: state.lastStatusReason,
        rollingUsage: usage,
        providerLimits: state.providerLimits,
        limits: DEFAULT_PROVIDER_LIMITS,
        cooldowns: {
          minuteActive: cds.minuteUntil > now,
          minuteRemainingSec: Math.max(0, Math.ceil((cds.minuteUntil - now) / 1000)),
          hourActive: cds.hourUntil > now,
          hourRemainingSec: Math.max(0, Math.ceil((cds.hourUntil - now) / 1000)),
          dayActive: cds.dayUntil > now,
          dayRemainingSec: Math.max(0, Math.ceil((cds.dayUntil - now) / 1000)),
          tokenMinuteActive: cds.tokenMinuteUntil > now,
          tokenMinuteRemainingSec: Math.max(0, Math.ceil((cds.tokenMinuteUntil - now) / 1000)),
          tokenDayActive: cds.tokenDayUntil > now,
          tokenDayRemainingSec: Math.max(0, Math.ceil((cds.tokenDayUntil - now) / 1000)),
          audioHourActive: cds.audioHourUntil > now,
          audioHourRemainingSec: Math.max(0, Math.ceil((cds.audioHourUntil - now) / 1000)),
          audioDayActive: cds.audioDayUntil > now,
          audioDayRemainingSec: Math.max(0, Math.ceil((cds.audioDayUntil - now) / 1000)),
        },
      });
    }

    const organizationScopes = [];
    for (const [orgId, orgEntry] of this.organizationCooldowns.entries()) {
      this._clearExpiredCooldowns(orgEntry.cooldowns, now);
      const reasons = this._collectActiveCooldownReasons(orgEntry.cooldowns, now, "all");
      organizationScopes.push({
        organizationId: orgId,
        active: reasons.length > 0,
        reasons,
        remainingSec: Math.max(0, Math.ceil((this._maxActiveUntil(orgEntry.cooldowns, "all") - now) / 1000)),
      });
    }

    const projectScopes = [];
    for (const [projectId, projEntry] of this.projectCooldowns.entries()) {
      this._clearExpiredCooldowns(projEntry.cooldowns, now);
      const reasons = this._collectActiveCooldownReasons(projEntry.cooldowns, now, "all");
      projectScopes.push({
        projectId,
        active: reasons.length > 0,
        reasons,
        remainingSec: Math.max(0, Math.ceil((this._maxActiveUntil(projEntry.cooldowns, "all") - now) / 1000)),
      });
    }

    return {
      timestamp: now,
      systemCapacity: {
        maxActive: MAX_ACTIVE_INTERVIEWS,
        currentActive: activeInterviews.length,
        maxQueue: MAX_QUEUE_CAPACITY,
        currentQueue: queueEntries.length,
        totalConcurrentCapacity: MAX_ACTIVE_INTERVIEWS + MAX_QUEUE_CAPACITY,
      },
      activeInterviews,
      waitingQueue: queueEntries,
      keyStates: keyMetrics,
      organizationLimits: organizationScopes,
      projectLimits: projectScopes,
      totals: { ...this.metrics },
    };
  }
}

// Local / fallback singleton for standalone unit tests or non-DO environments
export const rateLimitManager = new CentralizedRateLimitAndQueueManager();

/**
 * Unified Coordinator Client:
 * Routes all coordination calls to the global Cloudflare Durable Object (INTERVIEW_COORDINATOR)
 * when running in Cloudflare Workers (ensuring atomic cross-instance coordination),
 * or falls back cleanly to the in-process rateLimitManager during local Node unit tests.
 */
export function getCoordinatorClient(env = null) {
  if (env?.INTERVIEW_COORDINATOR) {
    const doId = env.INTERVIEW_COORDINATOR.idFromName("global-interview-coordinator-v1");
    const stub = env.INTERVIEW_COORDINATOR.get(doId);

    const callDO = async (action, payload = {}) => {
      // Pass secret-presence flags + non-secret org metadata (NEVER passing raw key strings over DO RPC unnecessarily unless needed, actually DO only needs config booleans + orgIds!)
      const envMeta = {};
      for (let i = 1; i <= 5; i++) {
        envMeta[`GROQ_KEY_${i}_CONFIGURED`] = Boolean(env[`GROQ_API_KEY_${i}`] && String(env[`GROQ_API_KEY_${i}`]).trim());
        if (env[`GROQ_ORG_ID_${i}`]) envMeta[`GROQ_ORG_ID_${i}`] = env[`GROQ_ORG_ID_${i}`];
        if (env[`GROQ_PROJECT_ID_${i}`]) envMeta[`GROQ_PROJECT_ID_${i}`] = env[`GROQ_PROJECT_ID_${i}`];
      }
      if (env.GROQ_ORG_ID) envMeta.GROQ_ORG_ID = env.GROQ_ORG_ID;
      if (env.GROQ_PROJECT_ID) envMeta.GROQ_PROJECT_ID = env.GROQ_PROJECT_ID;

      const res = await stub.fetch("https://coordinator.internal/rpc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, payload, envMeta }),
      });
      return await res.json();
    };

    return {
      isDistributed: true,
      requestInterviewSlot: (payload) => callDO("requestInterviewSlot", payload),
      releaseInterviewSlot: (payload) => callDO("releaseInterviewSlot", payload),
      getQueueStatus: (sessionId) => callDO("getQueueStatus", { sessionId }),
      heartbeat: (payload) => callDO("heartbeat", payload),
      getExecutionKeyForSlot: (payload) => callDO("getExecutionKeyForSlot", payload),
      recordProviderResponse: (payload) => callDO("recordProviderResponse", payload),
      triggerKeyCooldown: (payload) => callDO("triggerKeyCooldown", payload),
      markKeyError: (keyIndex, status, reason) => callDO("markKeyError", { keyIndex, status, reason }),
      getSystemMetrics: () => callDO("getSystemMetrics", {}),
      reapStaleSessions: () => callDO("reapStaleSessions", {}),
    };
  }

  // Fallback to local singleton (e.g., Node unit tests)
  rateLimitManager.syncEnvironmentMetadata(env);
  return {
    isDistributed: false,
    requestInterviewSlot: (payload) => rateLimitManager.requestInterviewSlot(payload),
    releaseInterviewSlot: (payload) => rateLimitManager.releaseInterviewSlot(payload),
    getQueueStatus: (sessionId) => rateLimitManager.getQueueStatus(sessionId),
    heartbeat: (payload) => rateLimitManager.heartbeat(payload),
    getExecutionKeyForSlot: (payload) => Promise.resolve(rateLimitManager.getExecutionKeyForSlot(payload)),
    recordProviderResponse: (payload) => {
      rateLimitManager.recordProviderResponse(payload);
      return Promise.resolve({ ok: true });
    },
    triggerKeyCooldown: (payload) => {
      rateLimitManager.triggerKeyCooldown(payload);
      return Promise.resolve({ ok: true });
    },
    markKeyError: (keyIndex, status, reason) => {
      rateLimitManager.markKeyError(keyIndex, status, reason);
      return Promise.resolve({ ok: true });
    },
    getSystemMetrics: () => Promise.resolve(rateLimitManager.getSystemMetrics()),
    reapStaleSessions: () => Promise.resolve(rateLimitManager.reapStaleSessions()),
  };
}
