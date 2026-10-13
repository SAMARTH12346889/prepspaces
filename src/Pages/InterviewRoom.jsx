import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  MonitorUp,
  PhoneOff,
  Sparkles,
  Clock,
  ChevronRight,
  MessageSquare,
  ArrowLeft,
  CheckCircle2,
  RotateCcw,
  Award,
  BarChart3,
  BookOpen,
  Loader2,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useVoiceEngine } from "../voice/VoiceProvider.jsx";
import { useSafeBack } from "../utils/navigation";
import { SHOW_INTERVIEWS } from "../config/features";
import InterviewComingSoon from "./InterviewComingSoon";
import Logo from "../Componets/Logo";

const API_URL = import.meta.env.VITE_API_URL || "";

// Check SpeechRecognition browser support
const SpeechRecognitionAPI =
  typeof window !== "undefined"
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

class InterviewErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("[InterviewRoom ErrorBoundary caught error]:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#f6f4ee] flex flex-col items-center justify-center p-6 text-center text-[#18181b]">
          <div className="max-w-md w-full rounded-2xl border border-rose-200 bg-white p-6 shadow-xl space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <AlertCircle size={24} />
            </div>
            <h2 className="text-lg font-bold text-stone-900">Interview Session Interrupted</h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              An unexpected display issue occurred in the interview room. Your session state is preserved.
            </p>
            {this.state.error?.message && (
              <pre className="text-[10px] text-rose-600 bg-rose-50 p-2 rounded-lg font-mono text-left overflow-auto max-h-24">
                {this.state.error.message}
              </pre>
            )}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="flex-1 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white py-2.5 text-xs font-bold transition shadow-sm"
              >
                Retry Room
              </button>
              <button
                onClick={() => (window.location.href = "/")}
                className="rounded-xl border border-stone-200 bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-2.5 text-xs font-bold transition"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function InterviewRoomInner() {
  const navigate = useNavigate();
  const { goBack } = useSafeBack("/");
  const {
    engine,
    registerInterviewActions,
    unregisterInterviewActions,
  } = useVoiceEngine();

  // Media references
  const cameraVideoRef = useRef(null);
  const screenVideoRef = useRef(null);
  const streamRef = useRef(null);
  const screenStreamRef = useRef(null);
  const recognitionRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedAudioChunksRef = useRef([]);
  const micEnabledRef = useRef(true);
  const desiredListeningRef = useRef(true);
  const isRecognizingRef = useRef(false);
  const finalTranscriptRef = useRef("");

  // Session & Question state (Backend owned)
  const [session, setSession] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [sessionLoading, setSessionLoading] = useState(true);
  const [evaluating, setEvaluating] = useState(false);
  const [finalReport, setFinalReport] = useState(null);

  // Audio Playback & Groq Whisper transcription state
  const [isPlayingQuestion, setIsPlayingQuestion] = useState(false);
  const [isWhisperTranscribing, setIsWhisperTranscribing] = useState(false);

  // Media state
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraReady, setCameraReady] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [screenShareError, setScreenShareError] = useState("");
  const [primaryMedia, setPrimaryMedia] = useState("screen"); // 'screen' or 'camera'

  // Speech Recognition state
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [speechSupported, setSpeechSupported] = useState(Boolean(SpeechRecognitionAPI));

  // Timer state
  const [timeRemaining, setTimeRemaining] = useState(1500); // 25 mins
  const [activeTab, setActiveTab] = useState("interview"); // 'preflight', 'interview', 'report'
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  /* =========================================================
     VIDEO CALLBACK REFS (Ensures srcObjects attach immediately)
  ========================================================= */
  const setCameraVideoNode = useCallback((node) => {
    cameraVideoRef.current = node;
    if (node && streamRef.current) {
      if (node.srcObject !== streamRef.current) {
        node.srcObject = streamRef.current;
      }
      node.play().catch((err) => console.warn("Camera video play on attach error:", err));
    }
  }, []);

  const setScreenVideoNode = useCallback((node) => {
    screenVideoRef.current = node;
    if (node && screenStreamRef.current) {
      if (node.srcObject !== screenStreamRef.current) {
        node.srcObject = screenStreamRef.current;
      }
      node.play().catch((err) => console.warn("Screen video play on attach error:", err));
    }
  }, []);

  /* =========================================================
     CAMERA & MEDIA INITIALIZATION
  ========================================================= */
  const startCamera = useCallback(async () => {
    setCameraError("");
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }

      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: "user" },
          audio: true,
        });
      } catch (err1) {
        console.warn("Fallback to basic video/audio constraints:", err1);
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
      }

      streamRef.current = stream;
      // Ensure mic audio tracks follow micEnabledRef state
      stream.getAudioTracks().forEach((track) => {
        track.enabled = micEnabledRef.current;
      });

      if (cameraVideoRef.current) {
        cameraVideoRef.current.srcObject = stream;
        cameraVideoRef.current.play().catch((e) => console.warn("Camera play error:", e));
      }
      setCameraReady(true);
    } catch (err) {
      console.warn("Camera/Mic access error:", err);
      setCameraError(
        "Camera or microphone access denied. Please grant permissions in your browser URL bar."
      );
      setCameraReady(false);
    }
  }, []);

  // Sync video elements whenever activeTab, cameraReady, isScreenSharing, or primaryMedia changes
  useEffect(() => {
    if (cameraVideoRef.current && streamRef.current) {
      if (cameraVideoRef.current.srcObject !== streamRef.current) {
        cameraVideoRef.current.srcObject = streamRef.current;
      }
      cameraVideoRef.current.play().catch(() => {});
    }
    if (screenVideoRef.current && screenStreamRef.current) {
      if (screenVideoRef.current.srcObject !== screenStreamRef.current) {
        screenVideoRef.current.srcObject = screenStreamRef.current;
      }
      screenVideoRef.current.play().catch(() => {});
    }
  }, [activeTab, cameraReady, cameraEnabled, isScreenSharing, primaryMedia]);

  const toggleCamera = () => {
    if (!streamRef.current) {
      startCamera();
      return;
    }
    const videoTrack = streamRef.current.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
      setCameraEnabled(videoTrack.enabled);
    }
  };

  /* =========================================================
     COMPULSORY SCREEN SHARING ENGINE
  ========================================================= */
  const requestScreenShare = useCallback(async () => {
    setScreenShareError("");
    try {
      if (screenStreamRef.current) {
        screenStreamRef.current.getTracks().forEach((t) => t.stop());
      }

      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: "always" },
        audio: false,
      });

      screenStreamRef.current = screenStream;
      setIsScreenSharing(true);

      const videoTrack = screenStream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.onended = () => {
          console.warn("[ScreenShare] User stopped sharing screen.");
          setIsScreenSharing(false);
          screenStreamRef.current = null;
        };
      }

      if (screenVideoRef.current) {
        screenVideoRef.current.srcObject = screenStream;
        screenVideoRef.current.play().catch((err) => console.warn("Screen play err:", err));
      }

      return true;
    } catch (err) {
      console.warn("[ScreenShare] Cancelled or rejected:", err);
      setIsScreenSharing(false);
      screenStreamRef.current = null;
      setScreenShareError(
        "Screen sharing is compulsory to conduct the interview. Please select your entire screen or window to proceed."
      );
      return false;
    }
  }, []);

  /* =========================================================
     SYNCHRONIZED MICROPHONE & SPEECH ENGINE (100% UNIFIED)
  ========================================================= */

  // Audio Recording for Groq Whisper
  const startAudioRecording = useCallback(() => {
    if (!streamRef.current) return;
    try {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        return;
      }
      const audioTracks = streamRef.current.getAudioTracks();
      if (!audioTracks.length) return;

      const audioStream = new MediaStream(audioTracks);
      const mime = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : "audio/webm";

      const recorder = new MediaRecorder(audioStream, { mimeType: mime });
      recordedAudioChunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          recordedAudioChunksRef.current.push(event.data);
        }
      };

      recorder.start(250);
      mediaRecorderRef.current = recorder;
    } catch (e) {
      console.warn("[InterviewRoom] MediaRecorder start error:", e);
    }
  }, []);

  const stopAndTranscribeWhisper = useCallback(async () => {
    if (!mediaRecorderRef.current || mediaRecorderRef.current.state === "inactive") {
      return;
    }

    setIsWhisperTranscribing(true);

    try {
      const audioBlob = await new Promise((resolve) => {
        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(recordedAudioChunksRef.current, {
            type: mediaRecorderRef.current.mimeType || "audio/webm",
          });
          resolve(blob);
        };
        try {
          mediaRecorderRef.current.stop();
        } catch {
          resolve(null);
        }
      });

      if (audioBlob && audioBlob.size > 1500) {
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
          const base64Audio = reader.result?.split(",")[1];
          if (!base64Audio) {
            setIsWhisperTranscribing(false);
            return;
          }

          try {
            const res = await fetch(`${API_URL}/api/voice/transcribe`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                audioBase64: base64Audio,
                mimeType: audioBlob.type || "audio/webm",
                mode: "interview",
                sessionId: session?.id,
              }),
            });

            if (res.ok) {
              const data = await res.json();
              if (data.transcript?.trim()) {
                const cleanWhisper = data.transcript.trim();
                setTranscript((prev) => {
                  const combined = prev.trim()
                    ? `${prev.trim()} ${cleanWhisper}`
                    : cleanWhisper;
                  finalTranscriptRef.current = combined;
                  return combined;
                });
              }
            }
          } catch (err) {
            console.warn("[InterviewRoom] Whisper transcription fetch error:", err);
          } finally {
            setIsWhisperTranscribing(false);
            if (desiredListeningRef.current && micEnabledRef.current) {
              startAudioRecording();
            }
          }
        };
      } else {
        setIsWhisperTranscribing(false);
        if (desiredListeningRef.current && micEnabledRef.current) {
          startAudioRecording();
        }
      }
    } catch (err) {
      console.warn("[InterviewRoom] stopAndTranscribe error:", err);
      setIsWhisperTranscribing(false);
    }
  }, [session, startAudioRecording]);

  const toggleMic = useCallback(async () => {
    const nextState = !micEnabled;
    setMicEnabled(nextState);
    micEnabledRef.current = nextState;
    desiredListeningRef.current = nextState;

    // 1. Toggle hardware audio tracks
    if (streamRef.current) {
      const audioTracks = streamRef.current.getAudioTracks();
      if (audioTracks.length > 0) {
        audioTracks.forEach((track) => {
          track.enabled = nextState;
        });
      } else if (nextState) {
        try {
          const micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const newTrack = micStream.getAudioTracks()[0];
          if (newTrack) {
            streamRef.current.addTrack(newTrack);
          }
        } catch (e) {
          console.warn("[InterviewRoom] Failed to acquire mic track on unmute:", e);
        }
      }
    }

    // 2. Synchronize with VoiceEngine
    engine?.micManager?.setHardwareMute(!nextState);

    // 3. Control SpeechRecognition engine & Audio Recorder
    if (nextState) {
      startAudioRecording();
      setListening(true);
      if (recognitionRef.current && !isRecognizingRef.current) {
        try {
          recognitionRef.current.start();
          isRecognizingRef.current = true;
        } catch (e) {
          console.warn("Recognition start catch:", e);
        }
      }
    } else {
      stopAndTranscribeWhisper();
      setListening(false);
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {
          try {
            recognitionRef.current.stop();
          } catch {}
        }
        isRecognizingRef.current = false;
      }
    }
  }, [micEnabled, engine, startAudioRecording, stopAndTranscribeWhisper]);

  const startListening = useCallback(() => {
    desiredListeningRef.current = true;
    micEnabledRef.current = true;
    setMicEnabled(true);
    setListening(true);

    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = true;
      });
    }

    startAudioRecording();

    if (recognitionRef.current && !isRecognizingRef.current) {
      try {
        recognitionRef.current.start();
        isRecognizingRef.current = true;
      } catch (err) {
        console.warn("Recognition start catch:", err);
      }
    }
  }, [startAudioRecording]);

  const stopListening = useCallback(() => {
    desiredListeningRef.current = false;
    setListening(false);

    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      try {
        mediaRecorderRef.current.stop();
      } catch {}
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {
        try {
          recognitionRef.current.stop();
        } catch {}
      }
      isRecognizingRef.current = false;
    }
  }, []);

  // Question Audio Playback (Text-To-Speech)
  const playQuestionAudio = useCallback(() => {
    if (!currentQuestion?.questionText) return;
    if (isPlayingQuestion) {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setIsPlayingQuestion(false);
      return;
    }

    if (typeof window === "undefined" || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(currentQuestion.questionText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.lang = "en-US";

    // Pause mic listening while question plays to prevent audio feedback
    const wasListening = desiredListeningRef.current;
    if (wasListening) {
      desiredListeningRef.current = false;
      setListening(false);
    }

    utterance.onend = () => {
      setIsPlayingQuestion(false);
      if (wasListening) {
        startListening();
      }
    };

    utterance.onerror = () => {
      setIsPlayingQuestion(false);
      if (wasListening) {
        startListening();
      }
    };

    setIsPlayingQuestion(true);
    window.speechSynthesis.speak(utterance);
  }, [currentQuestion, isPlayingQuestion, startListening]);

  /* =========================================================
     SPEECH-TO-TEXT (WEB SPEECH API) - PERSISTENT ENGINE
  ========================================================= */
  useEffect(() => {
    if (!SpeechRecognitionAPI) {
      setSpeechSupported(false);
      return;
    }

    const recognition = new SpeechRecognitionAPI();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("[STT] Speech recognition active.");
      isRecognizingRef.current = true;
      setListening(true);
    };

    recognition.onresult = (event) => {
      // Discard any audio if mic is muted
      if (!micEnabledRef.current || !desiredListeningRef.current) {
        return;
      }

      let currentFinal = "";
      let interim = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const item = event.results[i];
        const text = item[0]?.transcript || "";
        if (item.isFinal) {
          currentFinal += text + " ";
        } else {
          interim += text;
        }
      }

      if (currentFinal) {
        finalTranscriptRef.current = (finalTranscriptRef.current + " " + currentFinal).trim();
      }

      const liveText = (finalTranscriptRef.current + " " + interim).trim();
      setTranscript(liveText);
    };

    recognition.onerror = (event) => {
      console.warn("[STT] Speech recognition notice:", event.error);
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        desiredListeningRef.current = false;
        micEnabledRef.current = false;
        setMicEnabled(false);
        setListening(false);
      }
    };

    recognition.onend = () => {
      console.log("[STT] Speech recognition loop ended. desiredListening =", desiredListeningRef.current);
      isRecognizingRef.current = false;

      // Automatically keep listening if candidate is still unmuted and answering
      if (desiredListeningRef.current && micEnabledRef.current) {
        try {
          recognition.start();
          isRecognizingRef.current = true;
        } catch {
          setTimeout(() => {
            if (desiredListeningRef.current && micEnabledRef.current && !isRecognizingRef.current) {
              try {
                recognition.start();
                isRecognizingRef.current = true;
              } catch {}
            }
          }, 300);
        }
      } else {
        setListening(false);
      }
    };

    recognitionRef.current = recognition;

    return () => {
      desiredListeningRef.current = false;
      micEnabledRef.current = false;
      isRecognizingRef.current = false;
      try {
        recognition.onend = null;
        recognition.abort();
      } catch {}
    };
  }, []);

  /* =========================================================
     SESSION INITIALIZATION & BACKEND STATE SYNC
  ========================================================= */
  const initializeSession = useCallback(async () => {
    setSessionLoading(true);
    try {
      // Check existing session from localStorage
      const cachedId = localStorage.getItem("prepwise_interview_session_id");
      let activeSession = null;

      if (cachedId) {
        try {
          const res = await fetch(`${API_URL}/api/interviews/${cachedId}`);
          if (res.ok) {
            const data = await res.json();
            if (data.session && data.session.status !== "COMPLETED") {
              activeSession = data.session;
            }
          }
        } catch (e) {
          console.warn("Could not resume previous session:", e);
        }
      }

      if (!activeSession) {
        // Create new OOP Interview Session
        const res = await fetch(`${API_URL}/api/interviews`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role: "Software Engineer (OOP Mastery)" }),
        });
        const data = await res.json();
        activeSession = data.session;
        localStorage.setItem("prepwise_interview_session_id", activeSession.id);
      }

      setSession(activeSession);
      const q = activeSession.questions[activeSession.currentQuestionIndex];
      setCurrentQuestion(q);

      if (activeSession.status === "ACTIVE") {
        setActiveTab("interview");
        // Automatically start speech recognition when active
        setTimeout(() => startListening(), 600);
      } else if (activeSession.status === "COMPLETED") {
        setActiveTab("report");
        setFinalReport(activeSession.report);
      } else {
        setActiveTab("preflight");
      }
    } catch (err) {
      console.error("Failed to initialize interview session:", err);
    } finally {
      setSessionLoading(false);
    }
  }, [startListening]);

  useEffect(() => {
    startCamera();
    initializeSession();

    return () => {
      desiredListeningRef.current = false;
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch {}
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (screenStreamRef.current) {
        screenStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [startCamera, initializeSession]);

  /* =========================================================
     TIMER SYNC
  ========================================================= */
  useEffect(() => {
    if (!session || session.status !== "ACTIVE" || !session.startedAt) return;

    const interval = setInterval(() => {
      const elapsedSeconds = Math.floor((Date.now() - session.startedAt) / 1000);
      const remaining = Math.max(0, (session.timerDurationSeconds || 1500) - elapsedSeconds);
      setTimeRemaining(remaining);

      if (remaining === 0) {
        clearInterval(interval);
        handleEndInterview("TIME_EXPIRED");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [session]);

  const formatTimer = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  /* =========================================================
     START INTERVIEW (TRANSITION TO ACTIVE)
     * Compulsory screen share prompt & validation
  ========================================================= */
  const handleStartInterview = async () => {
    if (!session) return;

    // 1. Mandatory Screen Sharing Check
    if (!isScreenSharing || !screenStreamRef.current) {
      const granted = await requestScreenShare();
      if (!granted) {
        return; // Halt until candidate selects and grants screen share
      }
    }

    try {
      const res = await fetch(`${API_URL}/api/interviews/${session.id}/start`, {
        method: "POST",
      });
      const data = await res.json();
      setSession(data.session);
      setCurrentQuestion(data.currentQuestion);
      setActiveTab("interview");

      // Auto-start listening on question 1 if mic is enabled
      setTimeout(() => {
        if (micEnabledRef.current) {
          startListening();
        }
      }, 500);
    } catch (err) {
      console.error("Error starting interview:", err);
    }
  };

  /* =========================================================
     SUBMIT ANSWER & ADVANCE QUESTION
     * Requires active screen sharing
  ========================================================= */
  const handleSubmitAnswer = async () => {
    if (!session || !currentQuestion || evaluating) return;

    // Screen sharing is compulsory to submit
    if (!isScreenSharing || !screenStreamRef.current) {
      setScreenShareError("Screen sharing must be active to submit your answer.");
      return;
    }

    // Temporarily pause listening during evaluation
    stopListening();
    setEvaluating(true);

    const answerText =
      transcript.trim() ||
      finalTranscriptRef.current.trim() ||
      "Candidate provided response through audio.";

    try {
      const res = await fetch(`${API_URL}/api/interviews/${session.id}/answers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionId: currentQuestion.id,
          transcript: answerText,
          durationMs: 45000,
        }),
      });

      const data = await res.json();
      setSession(data.session);
      setTranscript("");
      finalTranscriptRef.current = "";

      if (data.isCompleted) {
        if (screenStreamRef.current) {
          screenStreamRef.current.getTracks().forEach((t) => t.stop());
          screenStreamRef.current = null;
        }
        setIsScreenSharing(false);

        setFinalReport(data.report);
        setActiveTab("report");
        localStorage.removeItem("prepwise_interview_session_id");
      } else {
        setCurrentQuestion(data.nextQuestion);
        // Automatically start listening for the next question if mic is enabled
        setTimeout(() => {
          if (micEnabledRef.current) {
            startListening();
          }
        }, 500);
      }
    } catch (err) {
      console.error("Error submitting answer:", err);
    } finally {
      setEvaluating(false);
    }
  };

  /* =========================================================
     END INTERVIEW
     * Return to home page immediately when user ends interview
  ========================================================= */
  const handleEndInterview = async (reason = "USER_REQUESTED") => {
    stopListening();

    // 1. Stop all screen share tracks
    if (screenStreamRef.current) {
      screenStreamRef.current.getTracks().forEach((t) => t.stop());
      screenStreamRef.current = null;
    }
    setIsScreenSharing(false);

    // 2. Stop all camera & mic tracks
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }

    const currentSessionId = session?.id;
    localStorage.removeItem("prepwise_interview_session_id");

    if (reason === "TIME_EXPIRED") {
      if (currentSessionId) {
        try {
          const res = await fetch(`${API_URL}/api/interviews/${currentSessionId}/end`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ reason }),
          });
          const data = await res.json();
          setSession(data.session);
          setFinalReport(data.report);
          setActiveTab("report");
          return;
        } catch (err) {
          console.error("Error ending interview on time expired:", err);
        }
      }
      navigate("/");
      return;
    }

    // 3. User clicked End button: Notify backend and navigate directly to home page
    if (currentSessionId) {
      fetch(`${API_URL}/api/interviews/${currentSessionId}/end`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: "USER_ENDED" }),
      }).catch((e) => console.warn("End interview notification error:", e));
    }

    navigate("/");
  };

  const handleRetake = () => {
    stopListening();
    if (screenStreamRef.current) {
      screenStreamRef.current.getTracks().forEach((t) => t.stop());
      screenStreamRef.current = null;
    }
    setIsScreenSharing(false);
    localStorage.removeItem("prepwise_interview_session_id");
    setFinalReport(null);
    setTranscript("");
    finalTranscriptRef.current = "";
    initializeSession();
  };

  /* =========================================================
     NOVA UNIFIED VOICE INTEGRATION (INTERVIEW ROOM HANDLERS)
  ========================================================= */
  useEffect(() => {
    if (!engine) return;

    // Switch engine into interview mode
    engine.setFeatureMode("interview");

    registerInterviewActions({
      onEndInterview: () => {
        handleEndInterview("VOICE_COMMAND");
      },
      onMuteMic: () => {
        setMicEnabled(false);
        micEnabledRef.current = false;
        desiredListeningRef.current = false;
        if (streamRef.current) {
          streamRef.current.getAudioTracks().forEach((track) => {
            track.enabled = false;
          });
        }
        engine.micManager?.setHardwareMute(true);
        stopAndTranscribeWhisper();
        setListening(false);
        if (recognitionRef.current) {
          try {
            recognitionRef.current.abort();
          } catch {}
          isRecognizingRef.current = false;
        }
      },
      onUnmuteMic: () => {
        setMicEnabled(true);
        micEnabledRef.current = true;
        desiredListeningRef.current = true;
        if (streamRef.current) {
          streamRef.current.getAudioTracks().forEach((track) => {
            track.enabled = true;
          });
        }
        engine.micManager?.setHardwareMute(false);
        startAudioRecording();
        setListening(true);
        if (recognitionRef.current && !isRecognizingRef.current) {
          try {
            recognitionRef.current.start();
            isRecognizingRef.current = true;
          } catch {}
        }
      },
      onStartScreenShare: () => {
        requestScreenShare();
      },
      onStopScreenShare: () => {
        if (screenStreamRef.current) {
          screenStreamRef.current.getTracks().forEach((t) => t.stop());
          screenStreamRef.current = null;
        }
        setIsScreenSharing(false);
      },
      onRepeatQuestion: () => {
        playQuestionAudio();
      },
      onPauseInterview: () => {
        console.log("[InterviewRoom] Voice command: pause interview");
      },
      onResumeInterview: () => {
        console.log("[InterviewRoom] Voice command: resume interview");
      },
      onShowTranscript: () => {
        const textarea = document.querySelector("textarea");
        textarea?.scrollIntoView({ behavior: "smooth" });
        textarea?.focus();
      },
      onAppendAnswer: (spokenText) => {
        setTranscript((prev) => {
          const next = prev ? `${prev} ${spokenText}` : spokenText;
          finalTranscriptRef.current = next;
          return next;
        });
      },
    });

    return () => {
      engine.setFeatureMode("assistant");
      unregisterInterviewActions();
    };
  }, [
    engine,
    registerInterviewActions,
    unregisterInterviewActions,
    handleEndInterview,
    requestScreenShare,
    playQuestionAudio,
    startAudioRecording,
    stopAndTranscribeWhisper,
  ]);

  /* =========================================================
     RENDER: FINAL REPORT SCREEN
  ========================================================= */
  if (activeTab === "report" && finalReport) {
    return (
      <div className="min-h-screen bg-[#f6f4ee] px-4 py-8 text-[#18181b] md:px-12 selection:bg-[#f97316] selection:text-white">
        {/* Subtle warm glow */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
          <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => goBack("/")}
              className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white/80 px-4 py-2 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-sm backdrop-blur-md active:scale-95"
            >
              <ArrowLeft size={16} />
              <span>Back to Dashboard</span>
            </button>

            <Logo size="sm" suffix="Assessment" />
          </div>

          {/* Report Hero Card */}
          <div className="overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] p-8 text-white shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#f97316] mb-3">
                  <Award size={14} />
                  <span>Interview Complete &bull; OOP Track</span>
                </div>
                <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
                  Technical Performance Report
                </h1>
                <p className="mt-2 text-sm text-stone-300 max-w-xl">
                  {finalReport.hiringRecommendation || "Evaluation Complete"}
                </p>
              </div>

              {/* Overall Score Circle */}
              <div className="flex items-center gap-4 bg-[#27272a]/60 border border-[#3f3f46] rounded-2xl p-5 shrink-0">
                <div className="text-center">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-stone-400">Overall Score</p>
                  <p className="font-mono text-4xl font-extrabold text-[#f97316]">
                    {finalReport.overallScore || 82}
                    <span className="text-lg text-stone-400 font-normal">/100</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Metric Bars */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-[#27272a] pt-6">
              <div className="rounded-xl border border-[#27272a] bg-[#222226] p-4">
                <p className="text-xs text-stone-400 font-medium">Technical Accuracy</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xl font-bold text-white">{finalReport.technicalAccuracyScore || 80}%</span>
                  <BarChart3 size={18} className="text-[#f97316]" />
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-stone-700 overflow-hidden">
                  <div className="h-full bg-[#f97316] rounded-full" style={{ width: `${finalReport.technicalAccuracyScore || 80}%` }} />
                </div>
              </div>

              <div className="rounded-xl border border-[#27272a] bg-[#222226] p-4">
                <p className="text-xs text-stone-400 font-medium">Communication Clarity</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xl font-bold text-white">{finalReport.communicationScore || 85}%</span>
                  <MessageSquare size={18} className="text-amber-400" />
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-stone-700 overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: `${finalReport.communicationScore || 85}%` }} />
                </div>
              </div>

              <div className="rounded-xl border border-[#27272a] bg-[#222226] p-4">
                <p className="text-xs text-stone-400 font-medium">Architectural Depth</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-xl font-bold text-white">{finalReport.architectureScore || 78}%</span>
                  <BookOpen size={18} className="text-emerald-400" />
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-stone-700 overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: `${finalReport.architectureScore || 78}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          {finalReport.executiveSummary && (
            <div className="mt-6 rounded-3xl border border-[#e7e3da] bg-white/80 p-6 backdrop-blur-xl shadow-sm">
              <h2 className="text-base font-bold text-[#18181b] flex items-center gap-2">
                <Sparkles size={18} className="text-[#f97316]" /> Executive Summary
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-700">
                {finalReport.executiveSummary}
              </p>
            </div>
          )}

          {/* Strengths & Growth Areas */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-[#e7e3da] bg-white/80 p-6 backdrop-blur-xl shadow-sm">
              <h3 className="text-sm font-bold text-[#18181b] flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" /> Key Strengths
              </h3>
              <ul className="mt-3 space-y-2.5 text-xs md:text-sm text-stone-700">
                {(finalReport.topStrengths || []).map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#e7e3da] bg-white/80 p-6 backdrop-blur-xl shadow-sm">
              <h3 className="text-sm font-bold text-[#18181b] flex items-center gap-2">
                <BarChart3 size={16} className="text-[#ea580c]" /> Areas for Growth
              </h3>
              <ul className="mt-3 space-y-2.5 text-xs md:text-sm text-stone-700">
                {(finalReport.areasForGrowth || []).map((g, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f97316]" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Question Breakdown Accordion */}
          <div className="mt-6 rounded-3xl border border-[#e7e3da] bg-white/80 p-6 backdrop-blur-xl shadow-sm">
            <h3 className="text-sm font-bold text-[#18181b] mb-4">
              Question-by-Question Evaluation ({finalReport.questionBreakdown?.length || 5} Questions)
            </h3>

            <div className="space-y-3">
              {(finalReport.questionBreakdown || []).map((q, idx) => {
                const isOpen = expandedQuestion === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-[#e7e3da] bg-stone-50/60 transition"
                  >
                    <button
                      onClick={() => setExpandedQuestion(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-4 text-left hover:bg-stone-100/60 transition"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-xs font-mono font-bold text-[#ea580c]">
                          Q{q.questionNumber || idx + 1}
                        </span>
                        <div>
                          <p className="text-xs font-mono uppercase text-stone-500 font-bold tracking-wider">
                            {q.competency}
                          </p>
                          <p className="text-sm font-semibold text-[#18181b] line-clamp-1">
                            {q.questionText}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-extrabold text-[#ea580c] bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-lg">
                          Score: {q.score}/10
                        </span>
                        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="border-t border-[#e7e3da] p-4 text-xs md:text-sm space-y-3 bg-white/90">
                        <div>
                          <p className="font-mono text-[10px] uppercase font-bold text-stone-400">Candidate Answer</p>
                          <p className="mt-1 text-stone-700 italic bg-stone-50 p-3 rounded-xl border border-[#e7e3da]">
                            "{q.candidateTranscript || "Answer recorded through audio."}"
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase font-bold text-[#ea580c]">AI Feedback & Insights</p>
                          <p className="mt-1 text-stone-800 leading-relaxed">
                            {q.feedback}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pb-12">
            <button
              onClick={() => navigate("/learning/oops")}
              className="rounded-xl border border-[#e7e3da] bg-white px-5 py-3 text-xs md:text-sm font-bold text-stone-700 hover:border-orange-300 hover:text-[#f97316] shadow-sm transition"
            >
              Study OOP Concepts in Deep Dive
            </button>

            <button
              onClick={handleRetake}
              className="flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-6 py-3 text-xs md:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition active:scale-95"
            >
              <RotateCcw size={16} />
              <span>Retake Interview</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     RENDER: PREFLIGHT / SETUP SCREEN
  ========================================================= */
  if (activeTab === "preflight") {
    return (
      <div className="min-h-screen bg-[#f6f4ee] px-4 py-8 text-[#18181b] md:px-12 selection:bg-[#f97316] selection:text-white">
        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 rounded-xl border border-[#e7e3da] bg-white/80 px-4 py-2 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-sm backdrop-blur-md"
            >
              <ArrowLeft size={16} />
              <span>Back to Overview</span>
            </button>

            <Logo size="sm" suffix="Interview" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Camera Preview Box */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] shadow-2xl">
              <video
                ref={setCameraVideoNode}
                autoPlay
                muted
                playsInline
                onLoadedMetadata={(e) => e.target.play().catch(() => {})}
                className="h-full w-full object-cover scale-x-[-1]"
              />

              {!cameraReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#18181b]/95 p-6 text-center text-white">
                  <div>
                    <Video size={36} className="mx-auto text-[#f97316] mb-3" />
                    <p className="font-bold text-sm">Camera preview</p>
                    <p className="text-xs text-stone-400 mt-1 max-w-xs">
                      {cameraError || "Enabling your camera & microphone for your interview..."}
                    </p>
                    {cameraError && (
                      <button
                        onClick={startCamera}
                        className="mt-4 rounded-xl bg-[#f97316] px-4 py-2 text-xs font-bold text-white hover:bg-[#ea580c] transition"
                      >
                        Grant Access
                      </button>
                    )}
                  </div>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                <span className="rounded-lg bg-black/60 px-3 py-1 text-white backdrop-blur-md">
                  {cameraReady ? "Camera Ready" : "Initializing..."}
                </span>
                <span className="rounded-lg bg-black/60 px-3 py-1 text-emerald-400 backdrop-blur-md">
                  Mic Ready
                </span>
                <span className={`rounded-lg px-3 py-1 backdrop-blur-md ${isScreenSharing ? "bg-emerald-500/80 text-white font-bold" : "bg-black/60 text-amber-400"}`}>
                  {isScreenSharing ? "Screen Ready" : "Screen Pending"}
                </span>
              </div>
            </div>

            {/* Interview Details & Start CTA */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/80 p-8 backdrop-blur-xl shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-50 border border-orange-200 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c] mb-4">
                <BookOpen size={13} />
                <span>Object-Oriented Programming Track</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-[#18181b] tracking-tight">
                Software Engineer Technical Mock
              </h1>

              <p className="mt-3 text-sm text-stone-600 leading-relaxed">
                Test your architectural and design knowledge with 5 curated OOP questions. Speak naturally into your microphone — your spoken answers will be transcribed in real time and evaluated by our AI interviewer.
              </p>

              {/* Screen Sharing Notice */}
              <div className="mt-5 rounded-2xl border border-orange-200 bg-orange-50/70 p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-[#ea580c]">
                    <MonitorUp size={18} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-orange-900 font-mono">
                      Compulsory Proctoring Requirement
                    </p>
                    <p className="mt-1 text-xs text-stone-700 leading-relaxed">
                      Screen sharing is <strong>mandatory</strong> throughout the interview. When you click start, you will be prompted to select and share your entire screen.
                    </p>
                    <div className="mt-3">
                      <button
                        onClick={requestScreenShare}
                        type="button"
                        className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-1.5 text-xs font-bold transition shadow-sm ${
                          isScreenSharing
                            ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                            : "border-orange-300 bg-white text-[#ea580c] hover:bg-orange-50"
                        }`}
                      >
                        <MonitorUp size={14} />
                        <span>{isScreenSharing ? "✓ Screen Share Connected" : "Share Screen Ahead of Time"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {screenShareError && (
                <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-3.5 text-xs text-rose-700 flex items-start gap-2.5">
                  <AlertCircle size={16} className="shrink-0 mt-0.5 text-rose-600" />
                  <div>
                    <p className="font-bold">Screen Sharing Required</p>
                    <p className="mt-0.5 leading-relaxed">{screenShareError}</p>
                  </div>
                </div>
              )}

              <div className="mt-6 space-y-3 text-xs font-medium text-stone-700">
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-[#ea580c]">
                    ✓
                  </div>
                  <span>5 Comprehensive questions covering Inheritance, Polymorphism, Encapsulation, & SOLID</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-[#ea580c]">
                    ✓
                  </div>
                  <span>25 Minute overall session timer</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-[#ea580c]">
                    ✓
                  </div>
                  <span>Instant hiring committee score & question-by-question feedback</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#e7e3da]">
                <button
                  onClick={handleStartInterview}
                  disabled={sessionLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] px-6 py-4 font-bold text-white shadow-xl shadow-orange-500/25 transition hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                >
                  {sessionLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Preparing Interview Session...</span>
                    </>
                  ) : (
                    <>
                      <span>Start Interview Now</span>
                      <ChevronRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     RENDER: ACTIVE INTERVIEW SCREEN
  ========================================================= */
  const currentIdx = session?.currentQuestionIndex || 0;
  const totalQ = session?.totalQuestions || 5;

  return (
    <div className="relative min-h-screen bg-[#f6f4ee] text-[#18181b] selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed -top-40 left-1/4 h-96 w-96 rounded-full bg-orange-500/[0.04] blur-[140px]" />
      <div className="pointer-events-none fixed bottom-10 right-10 h-80 w-80 rounded-full bg-amber-500/[0.04] blur-[130px]" />

      {/* Header */}
      <header className="relative z-10 h-[70px] border-b border-[#e7e3da] bg-white/80 backdrop-blur-xl">
        <div className="flex h-full items-center justify-between px-6">
          <Logo size="sm" />

          {/* Center Timer & Session info */}
          <div className="hidden items-center gap-5 md:flex">
            <div className="flex items-center gap-2 rounded-full border border-[#e7e3da] bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-stone-700">
                OOP Technical Interview
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold text-stone-700">
              <Clock className="h-4 w-4 text-[#ea580c]" />
              <span className="font-mono font-bold">{formatTimer(timeRemaining)}</span>
            </div>
          </div>

          {/* Right Live indicator */}
          <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-emerald-600">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/80" />
            Live Session
          </div>
        </div>
      </header>

      {/* Main Grid: Screen Share / Camera Viewport on Left, Question & Voice Stream on Right */}
      <main className="relative z-10 grid min-h-[calc(100vh-70px)] lg:grid-cols-[1fr_440px]">
        {/* ===================================================
            VIEWPORT SECTION: COMPULSORY SCREEN SHARE + PiP CAMERA
        =================================================== */}
        <section className="flex flex-col border-r border-[#e7e3da] bg-[#faf8f4]/40">
          <div className="flex-1 p-6">
            <div className="relative flex min-h-[580px] h-full items-center justify-center overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] shadow-2xl">
              
              {/* TOP OVERLAY: Screen Share Status & Focus Switcher */}
              <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-auto">
                <div className="flex items-center gap-2 rounded-xl bg-black/70 px-3.5 py-1.5 backdrop-blur-md border border-white/10 text-xs font-mono">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isScreenSharing
                        ? "bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/80"
                        : "bg-rose-500"
                    }`}
                  />
                  <span className="text-white font-bold">
                    {isScreenSharing ? "Screen Sharing Active (Compulsory)" : "Screen Sharing Paused"}
                  </span>
                </div>

                {isScreenSharing && (
                  <div className="flex items-center gap-1 rounded-xl bg-black/70 p-1 backdrop-blur-md border border-white/10 text-[11px] font-mono">
                    <button
                      onClick={() => setPrimaryMedia("screen")}
                      className={`px-3 py-1 rounded-lg transition ${
                        primaryMedia === "screen"
                          ? "bg-[#f97316] text-white font-bold shadow-sm"
                          : "text-stone-300 hover:text-white"
                      }`}
                    >
                      🖥️ Focus Screen
                    </button>
                    <button
                      onClick={() => setPrimaryMedia("camera")}
                      className={`px-3 py-1 rounded-lg transition ${
                        primaryMedia === "camera"
                          ? "bg-[#f97316] text-white font-bold shadow-sm"
                          : "text-stone-300 hover:text-white"
                      }`}
                    >
                      📷 Focus Camera
                    </button>
                  </div>
                )}
              </div>

              {/* PRIMARY MEDIA FEED (FULL CANVAS) */}
              {primaryMedia === "screen" ? (
                /* Primary: Screen Share Feed */
                <video
                  ref={setScreenVideoNode}
                  autoPlay
                  playsInline
                  muted
                  className="absolute inset-0 h-full w-full object-contain bg-black"
                />
              ) : (
                /* Primary: Camera Feed */
                <video
                  ref={setCameraVideoNode}
                  autoPlay
                  playsInline
                  muted
                  className="absolute inset-0 h-full w-full object-cover scale-x-[-1]"
                />
              )}

              {/* PRIMARY CAMERA OFF FALLBACK */}
              {primaryMedia === "camera" && !cameraEnabled && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#18181b]/95 backdrop-blur-md">
                  <div className="text-center text-white">
                    <VideoOff size={40} className="mx-auto text-rose-400 mb-2" />
                    <p className="text-sm font-bold">Camera Paused</p>
                    <p className="text-xs text-stone-400 mt-1">Click the camera button below to turn it back on</p>
                  </div>
                </div>
              )}

              {/* FLOATING PICTURE-IN-PICTURE (PiP) PREVIEW */}
              {isScreenSharing && (
                <div
                  onClick={() => setPrimaryMedia(primaryMedia === "screen" ? "camera" : "screen")}
                  title={`Click to focus ${primaryMedia === "screen" ? "camera" : "screen"}`}
                  className="absolute bottom-4 right-4 z-30 w-44 h-32 md:w-56 md:h-38 rounded-2xl overflow-hidden border-2 border-white/20 bg-stone-900 shadow-2xl cursor-pointer hover:border-orange-400 transition hover:scale-105 active:scale-95 group"
                >
                  {primaryMedia === "screen" ? (
                    /* PiP: Camera Feed */
                    <>
                      <video
                        ref={setCameraVideoNode}
                        autoPlay
                        playsInline
                        muted
                        className="h-full w-full object-cover scale-x-[-1]"
                      />
                      {!cameraEnabled && (
                        <div className="absolute inset-0 bg-black/85 flex items-center justify-center text-[10px] text-stone-400">
                          Camera Paused
                        </div>
                      )}
                      <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-white bg-black/70 px-2 py-0.5 rounded-md backdrop-blur-sm">
                        <span className="flex items-center gap-1">
                          <span className={`h-1.5 w-1.5 rounded-full ${cameraEnabled ? "bg-emerald-400" : "bg-rose-400"}`} />
                          Candidate
                        </span>
                        <span className="text-[9px] text-orange-300 opacity-0 group-hover:opacity-100 transition">Swap</span>
                      </div>
                    </>
                  ) : (
                    /* PiP: Screen Share Feed */
                    <>
                      <video
                        ref={setScreenVideoNode}
                        autoPlay
                        playsInline
                        muted
                        className="h-full w-full object-contain bg-black"
                      />
                      <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-white bg-black/70 px-2 py-0.5 rounded-md backdrop-blur-sm">
                        <span className="flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          Screen Feed
                        </span>
                        <span className="text-[9px] text-orange-300 opacity-0 group-hover:opacity-100 transition">Swap</span>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Minimal Candidate Name Pill (When Camera is primary) */}
              {primaryMedia === "camera" && (
                <div className="absolute bottom-4 left-4 z-20 rounded-xl bg-black/60 px-3.5 py-1.5 backdrop-blur-md text-xs font-mono text-white flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${cameraEnabled ? "bg-emerald-400" : "bg-rose-400"}`} />
                  <span>You (Candidate)</span>
                </div>
              )}

              {/* ===================================================
                  COMPULSORY SCREEN SHARING BLOCKER OVERLAY
                  Renders whenever candidate stops sharing screen
              =================================================== */}
              {!isScreenSharing && (
                <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/92 p-8 text-center backdrop-blur-2xl">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/15 text-[#f97316] mb-4 border border-orange-500/30">
                    <MonitorUp size={32} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-rose-400 mb-2">
                    Compulsory Proctoring Requirement
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                    Screen Sharing is Required
                  </h3>
                  <p className="mt-2 text-xs md:text-sm text-stone-300 max-w-md leading-relaxed">
                    You must share your entire screen throughout the duration of this technical interview. The session and submission controls are paused until screen sharing is restored.
                  </p>
                  {screenShareError && (
                    <p className="mt-3 text-xs text-rose-400 bg-rose-950/40 border border-rose-800/50 rounded-xl px-4 py-2 max-w-md">
                      {screenShareError}
                    </p>
                  )}
                  <button
                    onClick={requestScreenShare}
                    className="mt-6 flex items-center gap-2 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-orange-500/30 transition hover:scale-105 active:scale-95"
                  >
                    <MonitorUp size={18} />
                    <span>Resume Screen Share</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Controls Bar */}
          <div className="flex h-[88px] items-center justify-center gap-4 border-t border-[#e7e3da] bg-white/80 px-6 backdrop-blur-xl">
            {/* Mic Toggle (Unified Audio & STT) */}
            <button
              onClick={toggleMic}
              title={micEnabled ? "Mute Microphone" : "Unmute Microphone"}
              className={`flex h-12 w-20 flex-col items-center justify-center rounded-xl border shadow-sm transition ${
                micEnabled
                  ? "border-[#e7e3da] bg-white text-stone-700 hover:border-orange-300 hover:text-[#f97316]"
                  : "border-rose-200 bg-rose-50 text-rose-600"
              }`}
            >
              {micEnabled ? <Mic className="h-4 w-4 text-[#ea580c]" /> : <MicOff className="h-4 w-4 text-rose-600" />}
              <span className="mt-1 text-[10px] font-bold">{micEnabled ? "Mute" : "Unmute"}</span>
            </button>

            {/* Camera Toggle */}
            <button
              onClick={toggleCamera}
              title={cameraEnabled ? "Turn Camera Off" : "Turn Camera On"}
              className={`flex h-12 w-20 flex-col items-center justify-center rounded-xl border shadow-sm transition ${
                cameraEnabled
                  ? "border-[#e7e3da] bg-white text-stone-700 hover:border-orange-300 hover:text-[#f97316]"
                  : "border-rose-200 bg-rose-50 text-rose-600"
              }`}
            >
              {cameraEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
              <span className="mt-1 text-[10px] font-bold">{cameraEnabled ? "Camera" : "Cam Off"}</span>
            </button>

            {/* Screen Share Control (Compulsory Indicator) */}
            <button
              onClick={() => {
                requestScreenShare();
              }}
              title={isScreenSharing ? "Screen Share Active (Click to switch screen)" : "Start Screen Share"}
              className={`flex h-12 w-28 flex-col items-center justify-center rounded-xl border shadow-sm transition ${
                isScreenSharing
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                  : "border-rose-200 bg-rose-50 text-rose-600 animate-pulse"
              }`}
            >
              <div className="flex items-center gap-1.5">
                <MonitorUp className="h-4 w-4" />
                <span className={`h-1.5 w-1.5 rounded-full ${isScreenSharing ? "bg-emerald-500" : "bg-rose-500"}`} />
              </div>
              <span className="mt-1 text-[10px] font-bold">
                {isScreenSharing ? "Screen Active" : "Share Screen"}
              </span>
            </button>

            {/* End Interview */}
            <button
              onClick={() => handleEndInterview("USER_ENDED")}
              className="ml-2 flex h-12 items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-5 text-xs font-bold text-rose-600 shadow-sm transition hover:bg-rose-100 active:scale-95"
            >
              <PhoneOff className="h-4 w-4" />
              <span>End</span>
            </button>
          </div>
        </section>

        {/* ===================================================
            RIGHT PANEL (QUESTION, SPEECH STREAM & SUBMIT)
        =================================================== */}
        <aside className="flex flex-col border-l border-[#e7e3da] bg-white/80 backdrop-blur-xl">
          {/* Interviewer Active Banner */}
          <div className="border-b border-[#e7e3da] p-6 bg-[#faf8f4]/60">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white shadow-md shadow-orange-500/20">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#18181b]">
                  Prepspaces AI Interviewer
                </h2>
                <div className="mt-0.5 flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#ea580c]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ea580c] shadow-sm shadow-orange-500/80 animate-pulse" />
                  Interviewer Active
                </div>
              </div>
            </div>
          </div>

          {/* Question Progress Tracker */}
          <div className="border-b border-[#e7e3da] p-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-500">
                Question Progress
              </span>
              <span className="font-mono text-xs font-black text-[#ea580c]">
                0{currentIdx + 1} / 0{totalQ}
              </span>
            </div>

            <div className="mt-3 flex gap-2">
              {Array.from({ length: totalQ }).map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    index <= currentIdx
                      ? "bg-gradient-to-r from-[#f97316] to-[#ea580c] shadow-sm shadow-orange-500/40"
                      : "bg-stone-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Question Content & Answer Input */}
          <div className="flex-1 space-y-5 overflow-y-auto p-6">
            {currentQuestion ? (
              <>
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-block rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-orange-700">
                      {currentQuestion.questionType || "OOP TECHNICAL"}
                    </div>

                    <button
                      type="button"
                      onClick={playQuestionAudio}
                      className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700 hover:border-orange-400 hover:text-[#f97316] transition shadow-sm"
                      title="Play question audio with text-to-speech"
                    >
                      {isPlayingQuestion ? (
                        <>
                          <VolumeX size={13} className="text-[#f97316] animate-pulse" />
                          <span className="text-[#f97316] font-bold">Stop Audio</span>
                        </>
                      ) : (
                        <>
                          <Volume2 size={13} className="text-stone-500" />
                          <span>Listen to Question</span>
                        </>
                      )}
                    </button>
                  </div>

                  <h1 className="mt-3 text-lg md:text-xl font-bold leading-snug tracking-tight text-[#18181b]">
                    {currentQuestion.questionText}
                  </h1>

                  {currentQuestion.context && (
                    <p className="mt-2 text-xs text-stone-500 leading-relaxed bg-[#faf8f4] p-3 rounded-xl border border-[#e7e3da]">
                      💡 <strong>Context:</strong> {currentQuestion.context}
                    </p>
                  )}
                </div>

                {/* Microphone Recording Card (Unified with bottom bar) */}
                <div className="rounded-2xl border border-[#e7e3da] bg-white/90 p-4 shadow-sm backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <button
                        onClick={toggleMic}
                        className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md transition-all active:scale-95 ${
                          micEnabled
                            ? "bg-[#f97316] text-white shadow-orange-500/30 animate-pulse"
                            : "border border-rose-200 bg-rose-50 text-rose-600"
                        }`}
                        title={micEnabled ? "Click to Mute Microphone" : "Click to Unmute Microphone"}
                      >
                        {micEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
                      </button>

                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold text-[#18181b]">
                            {micEnabled ? "Listening to your voice..." : "Microphone Muted"}
                          </p>
                          {micEnabled ? (
                            <span className="flex items-center gap-1 rounded-full bg-orange-100 px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-[#ea580c]">
                              <span className="h-1.5 w-1.5 rounded-full bg-[#f97316] animate-ping" />
                              LIVE
                            </span>
                          ) : (
                            <span className="rounded-full bg-rose-100 px-2 py-0.5 font-mono text-[9px] font-bold uppercase text-rose-600">
                              MUTED
                            </span>
                          )}
                        </div>
                        <p className="mt-0.5 text-xs text-stone-500">
                          {micEnabled
                            ? "Speak clearly — your answer transcribes below"
                            : "Click the mic button to unmute and speak"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Audio Waveform visualizer */}
                  {micEnabled && (
                    <div className="mt-4 flex h-7 items-center justify-center gap-1.5">
                      {[10, 18, 25, 14, 28, 20, 30, 16, 24, 12].map((height, index) => (
                        <div
                          key={index}
                          className="w-1 rounded-full bg-[#f97316] shadow-sm shadow-orange-500/80 animate-pulse"
                          style={{
                            height: `${height}px`,
                            animationDelay: `${index * 80}ms`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Live Response Stream Card with Editable Textarea */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4]/80 p-4 shadow-sm backdrop-blur-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-[#ea580c]" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-stone-600">
                        Live Response Stream
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={stopAndTranscribeWhisper}
                        disabled={isWhisperTranscribing || !micEnabled}
                        className="inline-flex items-center gap-1 rounded-lg border border-orange-200 bg-orange-50 px-2 py-1 text-[10px] font-mono font-bold text-[#ea580c] hover:bg-orange-100 transition disabled:opacity-50"
                        title="Transcribe captured audio with Groq Whisper Large V3"
                      >
                        {isWhisperTranscribing ? (
                          <>
                            <Loader2 size={11} className="animate-spin" />
                            <span>Transcribing...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles size={11} />
                            <span>Groq Whisper V3</span>
                          </>
                        )}
                      </button>

                      {transcript && (
                        <button
                          onClick={() => {
                            setTranscript("");
                            finalTranscriptRef.current = "";
                          }}
                          className="text-[10px] text-stone-400 hover:text-stone-600 font-mono underline"
                        >
                          Clear text
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Empty state prompt while listening */}
                  {micEnabled && !transcript.trim() && (
                    <div className="py-4 text-center">
                      <p className="text-xs text-orange-600 font-medium animate-pulse">
                        🎙️ Speak your answer now — words will stream here live...
                      </p>
                    </div>
                  )}

                  <textarea
                    rows={5}
                    value={transcript}
                    onChange={(e) => {
                      setTranscript(e.target.value);
                      finalTranscriptRef.current = e.target.value;
                    }}
                    placeholder={
                      micEnabled
                        ? "Listening... Speak your answer now. Your words will appear here in real time..."
                        : "Microphone is muted. Click mic to unmute and speak, or type directly into this box..."
                    }
                    className="w-full resize-none rounded-xl border border-transparent bg-transparent p-1 text-xs md:text-sm text-stone-800 outline-none placeholder:text-stone-400 leading-relaxed focus:bg-white focus:border-[#e7e3da] transition"
                  />

                  {transcript.trim() && (
                    <div className="mt-2 flex items-center justify-between border-t border-[#e7e3da]/60 pt-2 text-[10px] font-mono text-stone-400">
                      <span>{transcript.trim().split(/\s+/).length} words spoken</span>
                      <span>You can edit or add details before submitting</span>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="p-8 text-center text-stone-400 text-xs font-mono">
                Loading question...
              </div>
            )}
          </div>

          {/* Action Button: Submit Answer & Next Question */}
          <div className="border-t border-[#e7e3da] p-6 bg-[#faf8f4]/80">
            <button
              onClick={handleSubmitAnswer}
              disabled={evaluating || !isScreenSharing || (!transcript.trim() && !micEnabled)}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] px-5 py-4 text-sm font-bold text-white shadow-xl shadow-orange-500/25 transition hover:scale-[1.01] active:scale-95 disabled:opacity-50"
            >
              {evaluating ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>AI Evaluating Your Answer...</span>
                </>
              ) : !isScreenSharing ? (
                <>
                  <MonitorUp size={18} />
                  <span>Screen Share Required to Submit</span>
                </>
              ) : (
                <>
                  <span>{currentIdx === totalQ - 1 ? "Submit & View Final Report" : "Submit Answer & Next Question"}</span>
                  <ChevronRight size={18} />
                </>
              )}
            </button>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-stone-400">
              Answers evaluated individually by Groq AI
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default function InterviewRoom() {
  if (!SHOW_INTERVIEWS) {
    return <InterviewComingSoon />;
  }

  return (
    <InterviewErrorBoundary>
      <InterviewRoomInner />
    </InterviewErrorBoundary>
  );
}