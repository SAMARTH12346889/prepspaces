/**
 * VoiceTelemetry.js
 *
 * Safe diagnostic telemetry for voice sessions:
 * - Records latency, signal quality, error codes, and model usage
 * - Avoids storing raw transcripts or private audio in application logs
 */

export class VoiceTelemetry {
  constructor() {
    this.events = [];
    this.maxEvents = 50;
  }

  recordEvent(type, data = {}) {
    const entry = {
      type,
      timestamp: Date.now(),
      ...data,
    };
    this.events.unshift(entry);
    if (this.events.length > this.maxEvents) {
      this.events.pop();
    }
  }

  getRecentEvents() {
    return [...this.events];
  }

  clear() {
    this.events = [];
  }
}
