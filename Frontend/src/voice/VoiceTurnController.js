/**
 * VoiceTurnController
 * 
 * Central turn lifecycle manager for Nova Voice Engine V2.
 * Enforces universal cancellation, turnId validation, and stale-result protection.
 */
export class VoiceTurnController {
  constructor({ sessionId = `session-${Date.now()}` } = {}) {
    this.sessionId = sessionId;
    this.currentTurnId = 0;
    this.currentAbortController = null;
    this.turns = new Map();
    this.listeners = new Set();
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify(event, data) {
    for (const listener of this.listeners) {
      try {
        listener(event, data);
      } catch (err) {
        console.error("[VoiceTurnController] Listener error:", err);
      }
    }
  }

  /**
   * Starts a new voice turn. Automatically cancels or supersedes any in-flight turn.
   */
  startTurn({ prompt = "", isCorrection = false, correctionOf = null } = {}) {
    // If an existing turn is active, mark it superseded or cancelled
    if (this.currentTurnId > 0 && this.isCurrentActive()) {
      if (isCorrection) {
        this.supersedeTurn(this.currentTurnId, this.currentTurnId + 1);
      } else {
        this.cancelCurrentTurn("NEW_TURN");
      }
    }

    this.currentTurnId += 1;
    const turnId = this.currentTurnId;
    this.currentAbortController = new AbortController();

    const turnData = {
      turnId,
      sessionId: this.sessionId,
      status: "processing", // 'processing' | 'streaming' | 'completed' | 'superseded' | 'cancelled'
      prompt,
      isCorrection,
      correctionOf,
      abortController: this.currentAbortController,
      timings: {
        created: Date.now(),
        speechDetected: null,
        firstPartial: null,
        finalTranscript: null,
        llmStart: Date.now(),
        llmFirstToken: null,
        ttsFirstAudio: null,
        completed: null,
      },
      cancelReason: null,
    };

    this.turns.set(turnId, turnData);
    this.notify("TURN_STARTED", { turnId, turnData });

    return {
      turnId,
      signal: this.currentAbortController.signal,
      sessionId: this.sessionId,
      turnData,
    };
  }

  /**
   * Checks if a given turnId is the currently active turn.
   * Universal stale-result guard: if false, the result MUST be discarded!
   */
  isCurrent(turnId) {
    if (!turnId) return false;
    if (turnId !== this.currentTurnId) return false;
    const turn = this.turns.get(turnId);
    return turn && (turn.status === "processing" || turn.status === "streaming");
  }

  isCurrentActive() {
    return this.isCurrent(this.currentTurnId);
  }

  /**
   * Universal cancellation for the active turn.
   * Cancels HTTP streams, TTS, and downstream processors with an explicit reason.
   */
  cancelCurrentTurn(reason = "USER_BARGE_IN") {
    const turnId = this.currentTurnId;
    if (!turnId) return;

    const turn = this.turns.get(turnId);
    if (turn && (turn.status === "processing" || turn.status === "streaming")) {
      console.log(`[VoiceTurnController] Cancelling Turn #${turnId}. Reason: ${reason}`);
      turn.status = "cancelled";
      turn.cancelReason = reason;
      turn.timings.cancelled = Date.now();

      if (turn.abortController) {
        try {
          turn.abortController.abort(reason);
        } catch {}
      }

      this.notify("TURN_CANCELLED", { turnId, reason });
    }

    this.currentAbortController = null;
  }

  /**
   * Marks a turn as superseded by a self-correction turn.
   */
  supersedeTurn(oldTurnId, newTurnId) {
    const turn = this.turns.get(oldTurnId);
    if (turn && (turn.status === "processing" || turn.status === "streaming")) {
      console.log(`[VoiceTurnController] Superseding Turn #${oldTurnId} ➔ Turn #${newTurnId}`);
      turn.status = "superseded";
      turn.cancelReason = "USER_CORRECTION";
      turn.supersededBy = newTurnId;
      turn.timings.superseded = Date.now();

      if (turn.abortController) {
        try {
          turn.abortController.abort("USER_CORRECTION");
        } catch {}
      }

      this.notify("TURN_SUPERSEDED", { oldTurnId, newTurnId });
    }
  }

  /**
   * Marks turn status as streaming tokens.
   */
  markStreaming(turnId) {
    if (!this.isCurrent(turnId)) return false;
    const turn = this.turns.get(turnId);
    if (turn) {
      turn.status = "streaming";
      if (!turn.timings.llmFirstToken) {
        turn.timings.llmFirstToken = Date.now();
      }
      this.notify("TURN_STREAMING", { turnId });
      return true;
    }
    return false;
  }

  /**
   * Completes a turn cleanly.
   */
  completeTurn(turnId, result = {}) {
    if (!this.isCurrent(turnId)) return false;
    const turn = this.turns.get(turnId);
    if (turn) {
      turn.status = "completed";
      turn.timings.completed = Date.now();
      turn.result = result;
      this.notify("TURN_COMPLETED", { turnId, result });
      return true;
    }
    return false;
  }

  /**
   * Records timing instrumentation for observability.
   */
  recordTiming(turnId, metricName) {
    const turn = this.turns.get(turnId);
    if (turn && turn.timings && !turn.timings[metricName]) {
      turn.timings[metricName] = Date.now();
      this.notify("METRIC_RECORDED", { turnId, metricName, timestamp: turn.timings[metricName] });
    }
  }

  getTurn(turnId) {
    return this.turns.get(turnId) || null;
  }

  getCurrentTurn() {
    return this.getTurn(this.currentTurnId);
  }
}
