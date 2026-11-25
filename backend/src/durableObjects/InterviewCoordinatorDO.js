import { CentralizedRateLimitAndQueueManager } from "../services/rateLimitAndKeyManager.js";

/**
 * Cloudflare Durable Object: InterviewCoordinatorDO
 *
 * Provides strictly atomic, single-instance global coordination across all
 * Cloudflare Worker isolates for:
 * - Active interview slot allocation (max 4) and FIFO waiting queue (max 5)
 * - Per-key vs Organization/Project-wide rate limit tracking
 * - Multi-timer cooldowns (minute, hour, day, tokenMinute, tokenDay, audioHour, audioDay)
 * - Heartbeat lease monitoring and automatic cleanup of abandoned sessions via DO Alarms
 */
export class InterviewCoordinatorDO {
  constructor(ctx, env) {
    this.ctx = ctx;
    this.env = env;
    this.manager = new CentralizedRateLimitAndQueueManager();

    this.ctx.blockConcurrencyWhile(async () => {
      const savedState = await this.ctx.storage.get("coordinator_state");
      if (savedState) {
        this.manager.importState(savedState);
      }
      if (this.env) {
        this.manager.syncEnvironmentMetadata(this.env);
      }
    });
  }

  async _persistAndScheduleAlarm() {
    await this.ctx.storage.put("coordinator_state", this.manager.exportState());

    const hasActive = Array.from(this.manager.activeSlots.values()).some(Boolean);
    const hasQueue = this.manager.waitingQueue.length > 0;
    if (hasActive || hasQueue) {
      const currentAlarm = await this.ctx.storage.getAlarm();
      if (!currentAlarm) {
        // Wake up in 20 seconds to reap any disconnected / abandoned sessions
        await this.ctx.storage.setAlarm(Date.now() + 20000);
      }
    }
  }

  /**
   * Automatic background cleanup of abandoned sessions / stale queue entries
   */
  async alarm() {
    const result = this.manager.reapStaleSessions();
    if (result.reapedSlots.length > 0 || result.autoAdmitted.length > 0) {
      await this.ctx.storage.put("coordinator_state", this.manager.exportState());
    }
    const hasActive = Array.from(this.manager.activeSlots.values()).some(Boolean);
    const hasQueue = this.manager.waitingQueue.length > 0;
    if (hasActive || hasQueue) {
      await this.ctx.storage.setAlarm(Date.now() + 20000);
    }
  }

  _applyEnvMeta(envMeta) {
    if (!envMeta) return;
    for (let i = 1; i <= 5; i++) {
      const state = this.manager.keyStates.get(i);
      if (!state) continue;
      if (envMeta[`GROQ_KEY_${i}_CONFIGURED`] !== undefined) {
        const isConfigured = Boolean(envMeta[`GROQ_KEY_${i}_CONFIGURED`]);
        state.configured = isConfigured;
        if (!isConfigured) {
          state.status = "DISABLED";
          state.lastStatusReason = `Secret GROQ_API_KEY_${i} not configured`;
        } else if (state.status === "DISABLED") {
          state.status = "AVAILABLE";
          state.lastStatusReason = "Secret configured";
        }
      }
      if (envMeta[`GROQ_ORG_ID_${i}`]) {
        state.organizationId = String(envMeta[`GROQ_ORG_ID_${i}`]).trim();
      } else if (envMeta.GROQ_ORG_ID) {
        state.organizationId = String(envMeta.GROQ_ORG_ID).trim();
      }
      if (envMeta[`GROQ_PROJECT_ID_${i}`]) {
        state.projectId = String(envMeta[`GROQ_PROJECT_ID_${i}`]).trim();
      } else if (envMeta.GROQ_PROJECT_ID) {
        state.projectId = String(envMeta.GROQ_PROJECT_ID).trim();
      }
    }
  }

  async fetch(request) {
    try {
      const body = await request.json();
      const { action, payload = {}, envMeta = null } = body;

      this._applyEnvMeta(envMeta);

      let result;
      let shouldPersist = true;

      switch (action) {
        case "requestInterviewSlot":
          result = await this.manager.requestInterviewSlot(payload);
          break;
        case "releaseInterviewSlot":
          result = await this.manager.releaseInterviewSlot(payload);
          break;
        case "getQueueStatus":
          result = await this.manager.getQueueStatus(payload.sessionId);
          break;
        case "heartbeat":
          result = await this.manager.heartbeat(payload);
          break;
        case "getExecutionKeyForSlot":
          result = this.manager.getExecutionKeyForSlot(payload);
          shouldPersist = false;
          break;
        case "recordProviderResponse":
          this.manager.recordProviderResponse(payload);
          result = { ok: true };
          break;
        case "triggerKeyCooldown":
          this.manager.triggerKeyCooldown(payload);
          result = { ok: true };
          break;
        case "markKeyError":
          this.manager.markKeyError(payload.keyIndex, payload.status, payload.reason);
          result = { ok: true };
          break;
        case "reapStaleSessions":
          result = this.manager.reapStaleSessions();
          break;
        case "getSystemMetrics":
          result = this.manager.getSystemMetrics();
          break;
        default:
          return new Response(JSON.stringify({ error: `Unknown coordinator action: ${action}` }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
      }

      if (shouldPersist) {
        await this._persistAndScheduleAlarm();
      }

      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
}
