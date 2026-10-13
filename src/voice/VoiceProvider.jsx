import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { VoiceEngine } from "./VoiceEngine.js";
import { VoiceState } from "./VoiceState.js";
import { SHOW_NOVA_AI } from "../config/features.js";

const VoiceContext = createContext(null);

export function VoiceProvider({ children, apiUrl = "", userId = "default_user" }) {
  const navigate = useNavigate();

  const [state, setState] = useState(VoiceState.IDLE);
  const [status, setStatus] = useState("Press Shift+N or tap mic…");
  const [listeningMode, setListeningModeState] = useState(
    localStorage.getItem("nova_listening_mode") || "command"
  );
  const [transcript, setTranscript] = useState("");
  const [provisionalTranscript, setProvisionalTranscript] = useState("");
  const [audioLevel, setAudioLevel] = useState(0);
  const [diagnostics, setDiagnostics] = useState(null);

  const [messages, setMessages] = useState([
    {
      id: "initial-1",
      sender: "nova",
      text: "Hi! I am Nova. Press Shift+N to speak a command or ask a question.",
    },
  ]);
  const [voiceLockEnabled, setVoiceLockState] = useState(
    localStorage.getItem("nova_voice_lock") === "true"
  );
  const [isProfileEnrolled, setIsProfileEnrolled] = useState(false);
  const [lastVerification, setLastVerification] = useState(null);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const engineRef = useRef(null);

  if (!engineRef.current) {
    engineRef.current = new VoiceEngine({
      apiUrl,
      userId,
      onStateChange: ({ state: st, status: sts }) => {
        setState(st);
        setStatus(sts);
      },
      onTranscript: (txt) => setTranscript(txt),
      onProvisionalTranscript: (txt) => setProvisionalTranscript(txt),
      onAudioLevel: (lvl) => setAudioLevel(lvl),
      onMessageAdd: (msg) => setMessages((prev) => [...prev, msg]),
      onMessageUpdate: (msg) =>
        setMessages((prev) => prev.map((m) => (m.id === msg.id ? { ...m, text: msg.text } : m))),
      onMessageRemove: (id) => setMessages((prev) => prev.filter((m) => m.id !== id)),
      onNavigation: (route) => {
        if (route) {
          navigate(route);
        }
      },
      onVerificationResult: (res) => setLastVerification(res),
      onDiagnostics: (diag) => setDiagnostics(diag),
    });

    engineRef.current.setListeningMode(listeningMode);
  }

  // Refresh enrollment status on mount (only when Nova AI is enabled)
  useEffect(() => {
    if (!SHOW_NOVA_AI) return;
    engineRef.current?.checkEnrolledProfile().then((enrolled) => {
      setIsProfileEnrolled(enrolled);
    });
  }, []);

  // Set listening mode
  const setListeningMode = useCallback((mode) => {
    setListeningModeState(mode);
    localStorage.setItem("nova_listening_mode", mode);
    engineRef.current?.setListeningMode(mode);
  }, []);

  // Global Shift+N Keyboard Shortcut (Mounted ONCE with repeat & input guards)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!SHOW_NOVA_AI) return;
      if (!e.shiftKey || (e.key !== "N" && e.key !== "n")) {
        return;
      }

      // Do NOT trigger when user is typing in an input, textarea, or contenteditable element
      const target = e.target;
      const tagName = (target?.tagName || "").toLowerCase();
      if (
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select" ||
        target?.isContentEditable
      ) {
        return;
      }

      // Ignore key repeats from holding down Shift+N
      if (e.repeat) return;

      e.preventDefault();

      const currentState = engineRef.current.getState();
      console.log(`[Hotkey] Shift+N pressed. Current state: ${currentState}`);

      if (currentState === VoiceState.IDLE) {
        engineRef.current.startSession("assistant");
      } else {
        // Toggle: stop/cancel active session immediately
        engineRef.current.cancelSession("KEYBOARD_SHORTCUT");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []); // Run ONCE on mount!

  const setVoiceLock = useCallback((enabled) => {
    setVoiceLockState(enabled);
    engineRef.current?.setVoiceLock(enabled);
  }, []);

  const checkEnrolledProfile = useCallback(async () => {
    const enrolled = await engineRef.current?.checkEnrolledProfile();
    setIsProfileEnrolled(enrolled);
    return enrolled;
  }, []);

  const startSession = useCallback((mode = "assistant", options = {}) => {
    return engineRef.current?.startSession(mode, options);
  }, []);

  const stopSession = useCallback(() => {
    return engineRef.current?.stopSession();
  }, []);

  const cancelSession = useCallback((reason) => {
    return engineRef.current?.cancelSession(reason);
  }, []);

  const submitText = useCallback((text) => {
    return engineRef.current?.submitText(text);
  }, []);

  const speak = useCallback((text) => {
    return engineRef.current?.speak(text);
  }, []);

  const deleteVoiceProfile = useCallback(async () => {
    const success = await engineRef.current?.speakerService.deleteProfile(userId);
    if (success) {
      setIsProfileEnrolled(false);
      setVoiceLock(false);
    }
    return success;
  }, [userId, setVoiceLock]);

  const registerInterviewActions = useCallback((handlers) => {
    return engineRef.current?.registerInterviewActions(handlers);
  }, []);

  const unregisterInterviewActions = useCallback(() => {
    return engineRef.current?.unregisterInterviewActions();
  }, []);

  const value = {
    engine: engineRef.current,
    state,
    status,
    isListening:
      state === VoiceState.LISTENING ||
      state === VoiceState.RECORDING ||
      state === VoiceState.SPEECH_DETECTED,
    listeningMode,
    setListeningMode,
    diagnostics,
    transcript,
    provisionalTranscript,
    audioLevel,
    messages,
    setMessages,
    voiceLockEnabled,
    setVoiceLock,
    isProfileEnrolled,
    checkEnrolledProfile,
    lastVerification,
    isEnrollModalOpen,
    setIsEnrollModalOpen,
    startSession,
    stopSession,
    cancelSession,
    submitText,
    speak,
    deleteVoiceProfile,
    registerInterviewActions,
    unregisterInterviewActions,
  };

  return <VoiceContext.Provider value={value}>{children}</VoiceContext.Provider>;
}

export function useVoiceEngine() {
  const context = useContext(VoiceContext);
  if (!context) {
    throw new Error("useVoiceEngine must be used within a VoiceProvider");
  }
  return context;
}
