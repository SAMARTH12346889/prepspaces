/**
 * SpeakerVerificationService.js
 *
 * Client API interface for Nova speaker enrollment and verification.
 */

export class SpeakerVerificationService {
  constructor({ apiUrl = "" } = {}) {
    this.apiUrl = apiUrl;
  }

  /**
   * Enroll a speaker with at least 3 audio samples
   */
  async enroll({ userId = "default_user", samples, consentGiven = true }) {
    if (!this.apiUrl) {
      throw new Error("Voice registration requires backend server connection.");
    }
    if (!samples || samples.length < 3) {
      throw new Error("Voice registration requires 3 distinct spoken audio samples.");
    }

    const response = await fetch(`${this.apiUrl}/api/voice/enroll`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, samples, consentGiven }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Speaker enrollment failed.");
    }

    return data;
  }

  /**
   * Verify an audio sample against user's enrolled profile
   */
  async verify({ userId = "default_user", audioBase64 }) {
    if (!this.apiUrl) {
      return { verified: true, similarity: 1.0, isEnrolled: false };
    }
    if (!audioBase64) {
      throw new Error("Audio payload required for verification.");
    }

    const response = await fetch(`${this.apiUrl}/api/voice/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, audioBase64 }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Speaker verification failed.");
    }

    return data;
  }

  /**
   * Check if a voice profile is enrolled
   */
  async getProfile(userId = "default_user") {
    if (!this.apiUrl) return { enrolled: false };
    try {
      const response = await fetch(`${this.apiUrl}/api/voice/profile/${userId}`);
      if (!response.ok) return { enrolled: false };
      return await response.json();
    } catch {
      return { enrolled: false };
    }
  }

  /**
   * Delete user's enrolled voice profile
   */
  async deleteProfile(userId = "default_user") {
    try {
      const response = await fetch(`${this.apiUrl}/api/voice/profile/${userId}`, {
        method: "DELETE",
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}
