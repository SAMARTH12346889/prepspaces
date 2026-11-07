/**
 * Authentication Configuration for PrepSpaces
 */

export const GOOGLE_CLIENT_ID =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_GOOGLE_CLIENT_ID) ||
  "929583128715-vha62ek3tmooka7n67dhff3r77na4e0l.apps.googleusercontent.com";

export const API_BASE_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_BASE_URL) || "https://api.prepspaces.com";
