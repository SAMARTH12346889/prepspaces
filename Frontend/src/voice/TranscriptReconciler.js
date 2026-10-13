/**
 * TranscriptReconciler
 * 
 * Reconciles streaming interim and final STT transcripts without duplicate stutter.
 * Detects self-correction cue words to provide structured turn supersession metadata.
 */

const CORRECTION_PATTERNS = [
  /\bactually\b\s*(.*)$/i,
  /\bmake\s+that\s+(?:a\s+)?(.*)$/i,
  /\bscratch\s+that\b\s*(.*)$/i,
  /\binstead\b\s*(.*)$/i,
  /\bwait\s+no\b\s*(.*)$/i,
  /\bno\s+wait\b\s*(.*)$/i,
  /\bno[,\s]+i\s+mean\b\s*(.*)$/i,
  /\bchange\s+that\s+to\b\s*(.*)$/i,
  /\brather\b\s*(.*)$/i,
];

export class TranscriptReconciler {
  constructor() {
    this.finalTranscript = "";
    this.interimTranscript = "";
  }

  reset() {
    this.finalTranscript = "";
    this.interimTranscript = "";
  }

  /**
   * Updates state with new transcript chunk from Web Speech API.
   * @param {string} text - Incoming transcript chunk
   * @param {boolean} isFinal - Whether the chunk is final
   * @returns {Object} Reconciled transcript and self-correction metadata
   */
  process(text = "", isFinal = false) {
    const raw = String(text || "").trim();

    if (isFinal) {
      if (raw) {
        this.finalTranscript = this.finalTranscript
          ? `${this.finalTranscript} ${raw}`
          : raw;
      }
      this.interimTranscript = "";
    } else {
      this.interimTranscript = raw;
    }

    const fullTranscript = this.getFullTranscript();
    const correctionInfo = this.detectCorrection(fullTranscript);

    return {
      raw: fullTranscript,
      final: this.finalTranscript,
      interim: this.interimTranscript,
      isFinal,
      isCorrection: correctionInfo.isCorrection,
      correctedClause: correctionInfo.correctedClause,
      originalFragment: correctionInfo.originalFragment,
      cleanMessage: correctionInfo.isCorrection ? correctionInfo.correctedClause : fullTranscript,
    };
  }

  getFullTranscript() {
    if (this.finalTranscript && this.interimTranscript) {
      return `${this.finalTranscript} ${this.interimTranscript}`.trim();
    }
    return (this.finalTranscript || this.interimTranscript || "").trim();
  }

  /**
   * Scans text for self-correction patterns.
   */
  detectCorrection(text = "") {
    const trimmed = String(text || "").trim();
    if (!trimmed) {
      return { isCorrection: false, correctedClause: "", originalFragment: "" };
    }

    for (const pattern of CORRECTION_PATTERNS) {
      const match = trimmed.match(pattern);
      if (match && match[1]?.trim()) {
        const index = match.index;
        const originalFragment = trimmed.slice(0, index).trim();
        const correctedClause = match[1].trim();
        return {
          isCorrection: true,
          correctedClause,
          originalFragment,
        };
      }
    }

    return { isCorrection: false, correctedClause: trimmed, originalFragment: "" };
  }
}
