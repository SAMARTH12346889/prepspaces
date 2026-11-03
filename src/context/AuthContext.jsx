import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  getStoredToken,
  getStoredUser,
  getCurrentUser,
  loginWithGoogle as apiLoginWithGoogle,
  loginWithEmail as apiLoginWithEmail,
  registerWithEmail as apiRegisterWithEmail,
  logoutUser,
} from "../services/authService";
import { syncLocalProgressToServer } from "../services/progressService";
import { GOOGLE_CLIENT_ID } from "../config/auth";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => getStoredToken());
  const [user, setUser] = useState(() => getStoredUser());
  const [loading, setLoading] = useState(true);
  const [gsiLoaded, setGsiLoaded] = useState(false);

  // Validate active session on initial load
  useEffect(() => {
    let isMounted = true;
    const initialToken = getStoredToken();

    if (initialToken) {
      getCurrentUser(initialToken)
        .then((fetchedUser) => {
          if (isMounted) {
            if (fetchedUser) {
              setUser(fetchedUser);
              setToken(initialToken);
              // Background sync local progress
              syncLocalProgressToServer(initialToken);
            } else {
              setUser(null);
              setToken(null);
            }
            setLoading(false);
          }
        })
        .catch(() => {
          if (isMounted) setLoading(false);
        });
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // Dynamically load Google Identity Services script
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.google?.accounts?.id) {
      setGsiLoaded(true);
      return;
    }

    const scriptId = "google-identity-services-script";
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = () => setGsiLoaded(true);
      script.onerror = () => console.warn("[Auth] Failed to load Google Identity Services.");
      document.head.appendChild(script);
    } else {
      script.addEventListener("load", () => setGsiLoaded(true));
    }
  }, []);

  // Handle Google Login Callback
  const handleGoogleCredentialResponse = useCallback(
    async (response) => {
      if (!response?.credential) {
        throw new Error("No credential received from Google.");
      }
      const data = await apiLoginWithGoogle(response.credential);
      setToken(data.token);
      setUser(data.user);
      await syncLocalProgressToServer(data.token);
      return data;
    },
    []
  );

  // Login with Google credential
  const loginWithGoogle = useCallback(
    async (credential) => {
      const data = await apiLoginWithGoogle(credential);
      setToken(data.token);
      setUser(data.user);
      await syncLocalProgressToServer(data.token);
      return data;
    },
    []
  );

  // Login with Email
  const loginWithEmail = useCallback(async (email, password) => {
    const data = await apiLoginWithEmail(email, password);
    setToken(data.token);
    setUser(data.user);
    await syncLocalProgressToServer(data.token);
    return data;
  }, []);

  // Register with Email
  const registerWithEmail = useCallback(async (name, email, password) => {
    const data = await apiRegisterWithEmail(name, email, password);
    setToken(data.token);
    setUser(data.user);
    await syncLocalProgressToServer(data.token);
    return data;
  }, []);

  // Logout
  const logout = useCallback(async () => {
    await logoutUser(token);
    setToken(null);
    setUser(null);
  }, [token]);

  // Render Google Identity Services button inside a container
  const renderGoogleButton = useCallback(
    (containerElement, options = {}) => {
      if (!gsiLoaded || !window.google?.accounts?.id || !containerElement) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: async (res) => {
            try {
              await handleGoogleCredentialResponse(res);
              if (options.onSuccess) options.onSuccess();
            } catch (err) {
              if (options.onError) options.onError(err);
            }
          },
          auto_select: false,
          cancel_on_tap_outside: true,
        });

        window.google.accounts.id.renderButton(containerElement, {
          type: "standard",
          theme: "outline",
          size: "large",
          text: "continue_with",
          shape: "pill",
          logo_alignment: "left",
          width: options.width || "100%",
          locale: "en",
        });
      } catch (err) {
        console.warn("[Auth] Error rendering Google button:", err);
      }
    },
    [gsiLoaded, handleGoogleCredentialResponse]
  );

  const value = {
    user,
    token,
    isAuthenticated: !!user && !!token,
    loading,
    gsiLoaded,
    loginWithGoogle,
    loginWithEmail,
    registerWithEmail,
    logout,
    renderGoogleButton,
    handleGoogleCredentialResponse,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthContext;
