import { API_BASE_URL } from "../config/auth";

const TOKEN_STORAGE_KEY = "prepspaces_auth_token";
const USER_STORAGE_KEY = "prepspaces_auth_user";

/**
 * Retrieve stored authentication token
 */
export function getStoredToken() {
  try {
    return localStorage.getItem(TOKEN_STORAGE_KEY);
  } catch {
    return null;
  }
}

/**
 * Retrieve stored cached user
 */
export function getStoredUser() {
  try {
    const raw = localStorage.getItem(USER_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

/**
 * Save auth session to localStorage
 */
export function setStoredSession(token, user) {
  try {
    if (token) localStorage.setItem(TOKEN_STORAGE_KEY, token);
    else localStorage.removeItem(TOKEN_STORAGE_KEY);

    if (user) localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(USER_STORAGE_KEY);
  } catch (err) {
    console.error("[authService] Failed to set stored session:", err);
  }
}

/**
 * Clear stored auth session
 */
export function clearStoredSession() {
  try {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
  } catch (err) {
    console.error("[authService] Failed to clear session:", err);
  }
}

/**
 * Authenticate with Google ID token
 */
export async function loginWithGoogle(credential) {
  const res = await fetch(`${API_BASE_URL}/api/auth/google`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ credential }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Google authentication failed. Please try again.");
  }

  setStoredSession(data.token, data.user);
  return data;
}

/**
 * Authenticate with Email & Password
 */
export async function loginWithEmail(email, password) {
  const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Invalid email or password.");
  }

  setStoredSession(data.token, data.user);
  return data;
}

/**
 * Register a new student with Email & Password
 */
export async function registerWithEmail(name, email, password) {
  const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Registration failed. Please try again.");
  }

  setStoredSession(data.token, data.user);
  return data;
}

/**
 * Validate session token with backend and fetch current profile
 */
export async function getCurrentUser(token) {
  if (!token) return null;

  try {
    const res = await fetch(`${API_BASE_URL}/api/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      if (res.status === 401 || res.status === 404) {
        clearStoredSession();
      }
      return null;
    }

    const data = await res.json();
    if (data.user) {
      setStoredSession(token, data.user);
      return data.user;
    }
    return null;
  } catch (err) {
    console.error("[authService] Error fetching current user:", err);
    // Return cached user if network is temporarily unavailable
    return getStoredUser();
  }
}

/**
 * Logout session
 */
export async function logoutUser(token) {
  if (token) {
    try {
      await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      console.warn("[authService] Logout network error:", err);
    }
  }
  clearStoredSession();
}
