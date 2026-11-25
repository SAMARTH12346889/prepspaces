import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
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
  LogOut,
} from "lucide-react";
import { useVoiceEngine } from "../voice/VoiceProvider.jsx";
import { useSafeBack } from "../utils/navigation";
import { SHOW_INTERVIEWS } from "../config/features";
import InterviewComingSoon from "./InterviewComingSoon";
import Logo from "../Componets/Logo";
import {
  allocateInterviewQuestions,
  evaluateAnswerWithRubric,
  isQuestionEcho,
} from "../services/questionBankService";
import {
  PREPSPACES_COURSES,
  getCourseById,
  getModuleById,
} from "../config/courseInterviewConfig";
import { API_BASE_URL } from "../config/auth";

const isLocalDevHost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1");
const API_URL = (import.meta.env.VITE_API_URL || (isLocalDevHost ? "" : API_BASE_URL)).replace(/\/+$/, "");

// Check SpeechRecognition browser support
const SpeechRecognitionAPI =
  typeof window !== "undefined"
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

const FALLBACK_AI_QUESTION = {
  id: "M01-001",
  moduleId: "M01",
  moduleTitle: "AI Engineering Foundations & Python for AI",
  questionNumber: 1,
  questionType: "AI ENGINEERING FOUNDATIONS",
  topic: "AI Engineering Foundations & Python for AI",
  subtopic: "AI ML deep learning and generative AI distinctions",
  difficulty: "easy",
  type: "concept",
  question: "How do AI, machine learning, deep learning, and generative AI relate to one another?",
  questionText: "How do AI, machine learning, deep learning, and generative AI relate to one another?",
  context: "Expected focus areas: Position AI as broad field; Describe ML as data-driven learning; Explain DL layered representations; Describe GenAI as producing new content.",
  expectedPoints: [
    "Position AI as the broad field of intelligent systems",
    "Describe machine learning as data driven model learning",
    "Explain deep learning through layered neural representations",
    "Describe generative AI as producing new content"
  ],
  expected_points: [
    "Position AI as the broad field of intelligent systems",
    "Describe machine learning as data driven model learning",
    "Explain deep learning through layered neural representations",
    "Describe generative AI as producing new content"
  ],
  keywords: [
    ["posit", "broad", "field", "intellig", "system"],
    ["describ", "machin", "learn", "data", "driven"],
    ["explain", "deep", "learn", "through", "layer"],
    ["describ", "generat", "produc", "new", "content"]
  ],
  followUp: "How does this taxonomy affect model selection for production systems?",
  timeLimitSec: 45,
  active: true,
};

const SAMPLE_DEMO_REPORT = {
  overall_rating: 8.0,
  module_name: "AI Engineering Foundations & Python for AI",
  overallScore: 80,
  questions: [
    {
      question: "How do AI, machine learning, deep learning, and generative AI relate to one another?",
      student_answer: "Artificial intelligence is the broad field of intelligent systems. Machine learning allows algorithms to learn from data patterns. Deep learning uses layered neural network representations, and Generative AI produces novel content like images and text.",
      expected_answer: "Position AI as broad field; Describe ML as data-driven learning; Explain DL layered representations; Describe GenAI as producing new content.",
      rating: 9,
      score: 9,
      overallScore: 9,
    },
    {
      question: "Why is vectorized computation in NumPy dramatically faster than pure Python loops, and how does memory layout affect CPU cache performance?",
      student_answer: "NumPy uses contiguous C memory arrays which maximizes CPU cache locality and allows SIMD vectorization, avoiding Python loop interpreter overhead.",
      expected_answer: "Contiguous memory blocks; SIMD processor instructions; CPU cache locality; Eliminating interpreter overhead.",
      rating: 7,
      score: 7,
      overallScore: 7,
    }
  ],
  questionBreakdown: [
    {
      question: "How do AI, machine learning, deep learning, and generative AI relate to one another?",
      student_answer: "Artificial intelligence is the broad field of intelligent systems. Machine learning allows algorithms to learn from data patterns. Deep learning uses layered neural network representations, and Generative AI produces novel content like images and text.",
      expected_answer: "Position AI as broad field; Describe ML as data-driven learning; Explain DL layered representations; Describe GenAI as producing new content.",
      rating: 9,
      score: 9,
      overallScore: 9,
    },
    {
      question: "Why is vectorized computation in NumPy dramatically faster than pure Python loops, and how does memory layout affect CPU cache performance?",
      student_answer: "NumPy uses contiguous C memory arrays which maximizes CPU cache locality and allows SIMD vectorization, avoiding Python loop interpreter overhead.",
      expected_answer: "Contiguous memory blocks; SIMD processor instructions; CPU cache locality; Eliminating interpreter overhead.",
      rating: 7,
      score: 7,
      overallScore: 7,
    }
  ]
};

function buildInterviewReport(answers = [], trackName = "AI Engineering & Generative AI") {
  const formattedQuestions = answers.map((a, idx) => {
    const qText = a.questionText || a.question || `Question ${idx + 1}`;
    const studentAns = (a.candidateTranscript || a.transcript || "").trim() || "No answer provided.";
    const words = studentAns === "No answer provided." ? [] : studentAns.split(/\s+/).filter(Boolean);

    let rating = 0;
    if (words.length < 3 || studentAns === "No answer provided.") {
      rating = 0;
    } else if (a.rating !== undefined && a.rating !== null) {
      rating = Math.max(0, Math.min(10, Math.round(Number(a.rating))));
    } else if (a.score !== undefined && a.score !== null) {
      rating = Math.max(0, Math.min(10, Math.round(Number(a.score))));
    } else if (a.overallScore !== undefined && a.overallScore !== null) {
      rating = Math.max(0, Math.min(10, Math.round(Number(a.overallScore))));
    } else {
      const evaluated = evaluateAnswerWithRubric(a, studentAns, a.inputMode || "voice");
      rating = evaluated.rating ?? evaluated.score ?? 0;
    }

    let expectedAnswer = a.expectedAnswer || "";
    if (!expectedAnswer) {
      if (a.context) {
        expectedAnswer = a.context.replace(/^Expected focus areas:\s*/i, "").trim();
      } else if (Array.isArray(a.expectedPoints) && a.expectedPoints.length > 0) {
        expectedAnswer = a.expectedPoints.join("; ");
      } else if (Array.isArray(a.expected_points) && a.expected_points.length > 0) {
        expectedAnswer = a.expected_points.join("; ");
      } else {
        expectedAnswer = "Demonstrate solid architectural reasoning, correct technical terminology, and practical trade-offs.";
      }
    }

    return {
      question: qText,
      student_answer: studentAns,
      expected_answer: expectedAnswer,
      rating,
      score: rating,
      overallScore: rating,
    };
  });

  const totalRating = formattedQuestions.reduce((sum, q) => sum + (Number(q.rating) || 0), 0);
  const avgRating = formattedQuestions.length > 0
    ? Number((totalRating / formattedQuestions.length).toFixed(1))
    : 0.0;

  return {
    overall_rating: avgRating,
    module_name: trackName,
    overallScore: Math.round(avgRating * 10),
    questions: formattedQuestions,
    questionBreakdown: formattedQuestions,
  };
}

const MAX_QUESTIONS = 7; // Configurable limit between 5 and 7 questions per interview session

function createLocalMockSession(courseId = "ai-engineering", moduleId = "all", maxQuestions = MAX_QUESTIONS) {
  const course = getCourseById(courseId);
  const moduleObj = getModuleById(courseId, moduleId);

  const allocated = allocateInterviewQuestions({
    count: maxQuestions,
    courseId,
    moduleId,
  });

  const sessionQuestions = (allocated.length > 0 ? allocated : [FALLBACK_AI_QUESTION]).slice(0, maxQuestions);
  const isAll = !moduleId || moduleId === "all";
  const roleName = isAll ? `${course.title} Mock` : `${course.title} - ${moduleObj.title}`;

  return {
    id: "local_session_" + Date.now(),
    courseId,
    moduleId,
    role: roleName,
    track: isAll ? course.title : moduleObj.title,
    badge: course.badge,
    status: "PENDING",
    currentQuestionIndex: 0,
    timerDurationSeconds: 180,
    maxQuestions,
    questions: sessionQuestions,
    answers: [],
  };
}

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
  const location = useLocation();
  const { goBack } = useSafeBack("/");
  const auth = useAuth();
  const logout = auth?.logout || (() => { window.location.href = "/"; });
  const {
    engine,
    registerInterviewActions,
    unregisterInterviewActions,
  } = useVoiceEngine();

  // Media references
  const cameraVideoRef = useRef(null);
  const streamRef = useRef(null);
  const recognitionRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const micEnabledRef = useRef(false);
  const desiredListeningRef = useRef(false);
  const isRecognizingRef = useRef(false);
  const finalTranscriptRef = useRef("");
  const isEndingRef = useRef(false);
  const answersRef = useRef([]);

  // Web Audio API & VAD (Silence-Based Chunking) references
  const audioContextRef = useRef(null);
  const analyserNodeRef = useRef(null);
  const vadIntervalRef = useRef(null);
  const activeVadSessionRef = useRef({
    chunks: [],
    startTime: 0,
    hasSpoken: false,
    peakVolume: 0,
  });
  const utteranceStartTimeRef = useRef(null);
  const hasSpokenInUtteranceRef = useRef(false);
  const lastSpeechTimeRef = useRef(null);
  const peakVolumeInUtteranceRef = useRef(0);
  const activeTranscribeCountRef = useRef(0);
  const currentUtteranceRef = useRef(null);
  const ttsSafetyTimeoutRef = useRef(null);
  const isPlayingQuestionRef = useRef(false);
  const lastSpokenQuestionIdRef = useRef(null);
  const currentQuestionTokenRef = useRef(1);
  const recognitionTokenRef = useRef(1);

  // Session & Question state (Backend owned)
  const [session, setSession] = useState(null);
  const activeSessionRef = useRef(null);
  activeSessionRef.current = session;
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const currentQuestionRef = useRef(null);
  currentQuestionRef.current = currentQuestion;
  const playQuestionAudioRef = useRef(null);
  const stopQuestionAudioRef = useRef(null);
  const [sessionLoading, setSessionLoading] = useState(true);
  const [finalReport, setFinalReport] = useState(null);

  // Audio Playback & Groq Whisper transcription state
  const [isPlayingQuestion, setIsPlayingQuestion] = useState(false);
  const [isWhisperTranscribing, setIsWhisperTranscribing] = useState(false);
  const [ttsBlockedNotice, setTtsBlockedNotice] = useState("");
  const ttsPlaybackIdRef = useRef(0);
  const ttsPendingStartTimeoutRef = useRef(null);
  const ttsStartWatchdogRef = useRef(null);
  const ttsKeepAliveRef = useRef(null);
  const ttsUnlockAudioCtxRef = useRef(null);
  const ttsUnlockedRef = useRef(false);
  const ttsAudioElRef = useRef(null);
  const ttsAudioUnlockedRef = useRef(false);
  const ttsAudioCacheRef = useRef(new Map());
  const ttsPendingFetchesRef = useRef(new Map());
  const ttsAbortControllerRef = useRef(null);
  const ttsBackendUnavailableRef = useRef(false);
  const voicesRef = useRef([]);

  // Mandatory Media state (Camera & Microphone ONLY - Mic starts OFF by default)
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [micReady, setMicReady] = useState(false);
  const [cameraError, setCameraError] = useState("");
  const [micError, setMicError] = useState("");
  const [permissionError, setPermissionError] = useState("");
  const cameraEnabledRef = useRef(true);

  // Speech Recognition & Turn-Taking state ("AI_SPEAKING" | "USER_LISTENING" | "MUTED")
  const [, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [turnState, setTurnState] = useState("AI_SPEAKING");
  const turnStateRef = useRef("AI_SPEAKING");
  const echoFadeTimeoutRef = useRef(null);

  const updateTurnState = useCallback((newState) => {
    turnStateRef.current = newState;
    setTurnState(newState);
  }, []);

  // Course & Module Selection (Dynamic Course & Module dropdowns)
  const [selectedCourse, setSelectedCourse] = useState("ai-engineering");
  const [selectedModule, setSelectedModule] = useState("all");
  const currentCourse = React.useMemo(
    () => getCourseById(selectedCourse),
    [selectedCourse]
  );
  const selectedModuleObj = React.useMemo(
    () => getModuleById(selectedCourse, selectedModule),
    [selectedCourse, selectedModule]
  );

  // Timer state
  const [timeRemaining, setTimeRemaining] = useState(180); // 3 mins
  const [activeTab, setActiveTab] = useState("interview"); // 'preflight', 'interview', 'report'
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Centralized Slot Allocation, FIFO Waiting Queue & Cooldown Notification state
  const [queueState, setQueueState] = useState({
    isQueued: false,
    position: null,
    total: null,
    estimatedWaitSeconds: null,
    message: null,
  });
  const [queueError, setQueueError] = useState("");
  const [serviceCooldownNotice, setServiceCooldownNotice] = useState("");
  const queuePollTimerRef = useRef(null);

  // Active interview heartbeat (15s) & page-unload cleanup so abandoned sessions/queue entries free slots reliably
  useEffect(() => {
    if (!session?.id || session.id.startsWith("local_")) return;
    if (activeTab !== "interview" && !queueState.isQueued) return;

    const sendHeartbeat = () => {
      fetch(`${API_URL}/api/interviews/${session.id}/heartbeat`, {
        method: "POST",
        keepalive: true,
      }).catch(() => {});
    };

    const hbTimer = activeTab === "interview" ? setInterval(sendHeartbeat, 15000) : null;

    const handleUnload = () => {
      if (!isEndingRef.current && navigator.sendBeacon) {
        try {
          navigator.sendBeacon(`${API_URL}/api/interviews/${session.id}/leave-queue`);
        } catch (_) {}
      }
    };
    window.addEventListener("pagehide", handleUnload);

    return () => {
      if (hbTimer) clearInterval(hbTimer);
      window.removeEventListener("pagehide", handleUnload);
    };
  }, [session?.id, activeTab, queueState.isQueued]);

  // Full-Screen & ESC Protection Proctoring state
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showExitWarning, setShowExitWarning] = useState(false);
  const [isInterviewPaused, setIsInterviewPaused] = useState(false);
  const [exitEvents, setExitEvents] = useState([]);
  const isExitWarningOpenRef = useRef(false);
  const pauseStartTimeRef = useRef(null);

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

  /* =========================================================
     CAMERA & MEDIA INITIALIZATION (MANDATORY CAMERA + MIC)
  ========================================================= */
  const startCamera = useCallback(async () => {
    setCameraError("");
    setPermissionError("");
    setMicError("");
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }

      let stream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: "user" },
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        });
      } catch (err1) {
        console.warn("Fallback to basic video/audio constraints:", err1);
        try {
          stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: { echoCancellation: true, noiseSuppression: true },
          });
        } catch {
          stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          });
        }
      }

      streamRef.current = stream;

      // Ensure audio tracks follow micEnabledRef state and monitor hardware events
      stream.getAudioTracks().forEach((track) => {
        track.enabled = micEnabledRef.current;
        track.onended = () => {
          console.warn("[MediaStream] Microphone track ended / disconnected");
          setMicReady(false);
          setMicError("Microphone disconnected or track ended.");
        };
        track.onmute = () => {
          console.warn("[MediaStream] Microphone track muted by hardware/OS");
        };
        track.onunmute = () => {
          console.log("[MediaStream] Microphone track unmuted");
          setMicError("");
          setMicReady(true);
        };
      });

      // Ensure video tracks follow cameraEnabled state
      stream.getVideoTracks().forEach((track) => {
        track.enabled = cameraEnabledRef.current;
        track.onended = () => {
          console.warn("[MediaStream] Camera track ended / disconnected");
          setCameraReady(false);
          setCameraError("Camera disconnected or track ended.");
        };
      });

      if (cameraVideoRef.current) {
        cameraVideoRef.current.srcObject = stream;
        cameraVideoRef.current.play().catch((e) => console.warn("Camera play error:", e));
      }

      const hasVideo = stream.getVideoTracks().length > 0 && stream.getVideoTracks()[0].readyState === "live";
      const hasAudio = stream.getAudioTracks().length > 0 && stream.getAudioTracks().some((t) => t.readyState === "live");

      setCameraReady(hasVideo);
      setMicReady(hasAudio);
      if (!hasAudio) {
        setMicError("No active microphone audio input detected.");
      } else {
        setMicError("");
      }

      return hasVideo && hasAudio;
    } catch (err) {
      console.warn("Camera/Mic access error:", err);
      setCameraError(
        "Camera or microphone access denied. Please grant permissions in your browser URL bar."
      );
      setMicError("Microphone access denied or not available.");
      setCameraReady(false);
      setMicReady(false);
      return false;
    }
  }, []);

  // Listen for audio / video hardware device changes (unplugged headset, new device)
  useEffect(() => {
    if (!navigator.mediaDevices?.addEventListener) return;

    const handleDeviceChange = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const hasAudioInput = devices.some((d) => d.kind === "audioinput");
        if (!hasAudioInput) {
          setMicReady(false);
          setMicError("Microphone unplugged or no audio input device found.");
        } else if (streamRef.current) {
          const audioTracks = streamRef.current.getAudioTracks();
          const allEnded = audioTracks.length === 0 || audioTracks.every((t) => t.readyState === "ended");
          if (allEnded) {
            setMicReady(false);
            setMicError("Microphone device changed or disconnected.");
          } else {
            setMicError("");
            setMicReady(true);
          }
        }
      } catch (err) {
        console.warn("[InterviewRoom] Device change error:", err);
      }
    };

    navigator.mediaDevices.addEventListener("devicechange", handleDeviceChange);
    return () => {
      navigator.mediaDevices.removeEventListener("devicechange", handleDeviceChange);
    };
  }, []);

  // Sync camera video element whenever activeTab, cameraReady, or cameraEnabled changes
  useEffect(() => {
    if (cameraVideoRef.current && streamRef.current) {
      if (cameraVideoRef.current.srcObject !== streamRef.current) {
        cameraVideoRef.current.srcObject = streamRef.current;
      }
      cameraVideoRef.current.play().catch(() => {});
    }
  }, [activeTab, cameraReady, cameraEnabled]);

  const toggleCamera = useCallback(() => {
    setCameraEnabled((prev) => {
      const next = !prev;
      cameraEnabledRef.current = next;
      if (streamRef.current) {
        streamRef.current.getVideoTracks().forEach((track) => {
          track.enabled = next;
        });
      }
      return next;
    });
  }, []);

  /* =========================================================
     GROQ WHISPER VAD (LOW-LATENCY SILENCE CHUNKING & TRANSCRIPTION)
     - Model: whisper-large-v3-turbo (Groq API via /api/transcribe proxy)
     - Silence detection: 600ms - 750ms end-of-speech pause threshold (680ms)
     - Max Chunk Duration cap: 4 - 5s (4500ms) for continuous progressive streaming
     - Audio format: Mono 16kHz WebM Opus at 28kbps low-overhead
     - Non-blocking / overlapping queue: Instant next recording without waiting for network
  ========================================================= */

  const VAD_SPEECH_THRESHOLD = 0.005; // Sensitive to natural voice on laptop & headset mics
  const VAD_SILENCE_DURATION_MS = 680; // 600ms - 750ms end-of-speech pause threshold
  const VAD_MIN_DURATION_MS = 300; // Filter short clicks/pops (< 0.3s)
  const VAD_MAX_DURATION_MS = 4500; // Flush & transcribe every 4-5s during continuous speech

  // 1. Dispatch finalized utterance blob to backend proxy (/api/transcribe)
  const dispatchToGroqWhisper = useCallback(async (audioBlob, token) => {
    if (!audioBlob || audioBlob.size < 400) return;
    if (token !== currentQuestionTokenRef.current) return;
    if (
      isPlayingQuestionRef.current ||
      turnStateRef.current === "AI_SPEAKING" ||
      (ttsAudioElRef.current && !ttsAudioElRef.current.paused) ||
      (typeof window !== "undefined" && window.speechSynthesis?.speaking)
    ) {
      return;
    }

    activeTranscribeCountRef.current++;
    setIsWhisperTranscribing(true);
    try {
      const currentSess = activeSessionRef.current;
      const sendTranscribe = async (allowBackup = false) => {
        const fd = new FormData();
        fd.append("file", audioBlob, "utterance.webm");
        fd.append("model", "whisper-large-v3-turbo");
        fd.append("language", "en"); // Explicitly pass English
        if (currentSess?.id) fd.append("sessionId", currentSess.id);
        if (currentSess?.slotId) fd.append("slotId", currentSess.slotId);
        if (currentSess?.assignedKeyIndex) fd.append("assignedKeyIndex", String(currentSess.assignedKeyIndex));
        if (allowBackup) fd.append("allowBackupFallback", "1");

        return await fetch(`${API_URL}/api/transcribe`, {
          method: "POST",
          headers: {
            "X-PrepSpaces-TwoPhase-Fallback": "1",
          },
          body: fd,
        });
      };

      let res = await sendTranscribe(false);
      let data = await res.json().catch(() => ({}));

      // Two-Phase Pre-Fallback Notification: show banner BEFORE executing backup Key 5 / Workers AI
      if (res.status === 202 && data.fallbackPending) {
        setServiceCooldownNotice(
          data.notificationMessage ||
            "AI service is temporarily busy. We are checking service availability and backup options. Your interview progress is safely saved and will be preserved."
        );
        await new Promise((r) => setTimeout(r, 80));
        res = await sendTranscribe(true);
        data = await res.json().catch(() => ({}));
      }

      if (data.notificationMessage) {
        setServiceCooldownNotice(data.notificationMessage);
      }

      let cleanText = "";
      if (res.ok && data.transcript) {
        cleanText = (data.transcript || "").trim();
      } else {
        console.warn("[VAD/Whisper] Backend transcribe status:", res.status);
      }

      // Invalidate if question changed while transcription was in flight
      if (token !== currentQuestionTokenRef.current) {
        return;
      }

      if (cleanText) {
        // Discard noise tokens or punctuation only
        const stripped = cleanText.replace(/^[.\s,!?]+|[.\s,!?]+$/g, "");
        if (stripped.length > 0) {
          if (token !== currentQuestionTokenRef.current) return;
          const activeQText = currentQuestionRef.current?.questionText || currentQuestionRef.current?.question || "";
          if (isQuestionEcho(cleanText, activeQText)) {
            console.log("[VAD/Whisper Guard] Discarded question echo:", cleanText);
            return;
          }
          setTranscript((prev) => {
            if (token !== currentQuestionTokenRef.current) return prev;
            const existing = prev.trim();
            if (!existing) {
              finalTranscriptRef.current = cleanText;
              return cleanText;
            }
            // Prevent duplicate appends if identical phrase returned
            const normExisting = existing.toLowerCase();
            const normClean = cleanText.toLowerCase();
            if (normExisting.endsWith(normClean) || normExisting.includes(normClean)) {
              return prev;
            }
            const updated = `${existing} ${cleanText}`;
            finalTranscriptRef.current = updated;
            return updated;
          });
        }
      }
    } catch (err) {
      console.warn("[VAD/Whisper] Failed to send utterance to transcribe proxy:", err);
    } finally {
      activeTranscribeCountRef.current = Math.max(0, activeTranscribeCountRef.current - 1);
      if (activeTranscribeCountRef.current === 0) {
        setIsWhisperTranscribing(false);
      }
    }
  }, []);

  // 2. Minimum Speech Filter & blob preparation
  const handleFinalizedUtterance = useCallback(
    (chunks, mimeType, durationMs, hadSpeech, peakVolume, token) => {
      // Discard if question has advanced or AI is speaking
      if (token !== currentQuestionTokenRef.current) {
        return;
      }
      if (
        isPlayingQuestionRef.current ||
        turnStateRef.current === "AI_SPEAKING" ||
        (typeof window !== "undefined" && window.speechSynthesis?.speaking)
      ) {
        return;
      }
      // Discard recordings shorter than 0.3s
      if (durationMs < VAD_MIN_DURATION_MS) {
        return;
      }
      // Discard if peak volume never crossed speech threshold (prevent empty silence hallucinations)
      if (!hadSpeech && peakVolume < VAD_SPEECH_THRESHOLD) {
        return;
      }
      if (!chunks || chunks.length === 0) {
        return;
      }

      const blob = new Blob(chunks, { type: mimeType });
      if (blob.size < 400) {
        return;
      }

      dispatchToGroqWhisper(blob, token);
    },
    [dispatchToGroqWhisper]
  );

  // 3. Start a fresh MediaRecorder instance for each utterance with isolated session object & 28kbps low overhead
  const startFreshRecording = useCallback(() => {
    if (
      !streamRef.current ||
      !micEnabledRef.current ||
      !desiredListeningRef.current ||
      isPlayingQuestionRef.current ||
      turnStateRef.current === "AI_SPEAKING" ||
      (typeof window !== "undefined" && window.speechSynthesis?.speaking)
    ) {
      return;
    }

    const audioTracks = streamRef.current.getAudioTracks();
    if (!audioTracks.length) return;

    try {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
        try {
          mediaRecorderRef.current.stop();
        } catch {}
      }

      const audioStream = new MediaStream([audioTracks[0]]);
      let mimeType = "audio/webm";
      if (typeof MediaRecorder !== "undefined") {
        if (MediaRecorder.isTypeSupported("audio/webm;codecs=opus")) {
          mimeType = "audio/webm;codecs=opus";
        } else if (MediaRecorder.isTypeSupported("audio/webm")) {
          mimeType = "audio/webm";
        } else if (MediaRecorder.isTypeSupported("audio/ogg;codecs=opus")) {
          mimeType = "audio/ogg;codecs=opus";
        } else if (MediaRecorder.isTypeSupported("audio/mp4")) {
          mimeType = "audio/mp4";
        }
      }

      // Isolated closure session object tagged with current question token
      const currentToken = currentQuestionTokenRef.current;
      const sessionRecord = {
        token: currentToken,
        chunks: [],
        startTime: Date.now(),
        hasSpoken: false,
        peakVolume: 0,
      };
      activeVadSessionRef.current = sessionRecord;
      utteranceStartTimeRef.current = sessionRecord.startTime;
      hasSpokenInUtteranceRef.current = false;
      lastSpeechTimeRef.current = null;
      peakVolumeInUtteranceRef.current = 0;

      let recorder;
      try {
        recorder = new MediaRecorder(audioStream, {
          mimeType,
          audioBitsPerSecond: 28000, // 28kbps low-overhead audio (mono 16kHz)
        });
      } catch {
        recorder = new MediaRecorder(audioStream, { mimeType });
      }

      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          sessionRecord.chunks.push(e.data);
        }
      };

      recorder.onstop = () => {
        // Discard immediately if the user already submitted or moved to another question
        if (sessionRecord.token !== currentQuestionTokenRef.current) {
          return;
        }
        const duration = Date.now() - sessionRecord.startTime;
        handleFinalizedUtterance(
          sessionRecord.chunks,
          recorder.mimeType || mimeType,
          duration,
          sessionRecord.hasSpoken,
          sessionRecord.peakVolume,
          sessionRecord.token
        );
      };

      recorder.start(100);
      mediaRecorderRef.current = recorder;
    } catch (err) {
      console.warn("[VAD] Failed to start fresh MediaRecorder:", err);
    }
  }, [handleFinalizedUtterance]);

  // 4. Web Audio API AnalyserNode initialization
  const initAudioAnalyser = useCallback((stream) => {
    if (!stream) return null;
    const audioTracks = stream.getAudioTracks();
    if (!audioTracks.length) return null;

    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return null;

      if (!audioContextRef.current || audioContextRef.current.state === "closed") {
        audioContextRef.current = new AudioContextClass();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }

      if (analyserNodeRef.current) {
        return analyserNodeRef.current;
      }

      const source = ctx.createMediaStreamSource(new MediaStream([audioTracks[0]]));
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 512;
      analyser.smoothingTimeConstant = 0.2;
      source.connect(analyser);
      analyserNodeRef.current = analyser;
      return analyser;
    } catch (err) {
      console.warn("[VAD] Audio analyser init error:", err);
      return null;
    }
  }, []);

  const stopVadLoop = useCallback(() => {
    if (vadIntervalRef.current) {
      clearInterval(vadIntervalRef.current);
      vadIntervalRef.current = null;
    }
  }, []);

  // 5. Silence-Based Chunking loop (VAD)
  const startVadLoop = useCallback(() => {
    stopVadLoop();

    const checkVad = () => {
      if (
        !desiredListeningRef.current ||
        !micEnabledRef.current ||
        isPlayingQuestionRef.current ||
        turnStateRef.current === "AI_SPEAKING" ||
        (typeof window !== "undefined" && window.speechSynthesis?.speaking)
      ) {
        return;
      }

      if (!analyserNodeRef.current && streamRef.current) {
        initAudioAnalyser(streamRef.current);
      }

      const analyser = analyserNodeRef.current;
      if (!analyser) return;

      const bufferLength = analyser.fftSize;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(dataArray);

      let sumSquares = 0;
      for (let i = 0; i < bufferLength; i++) {
        const norm = (dataArray[i] - 128) / 128;
        sumSquares += norm * norm;
      }
      const rms = Math.sqrt(sumSquares / bufferLength);
      const now = Date.now();

      const currentSession = activeVadSessionRef.current;
      if (currentSession) {
        if (rms > currentSession.peakVolume) {
          currentSession.peakVolume = rms;
        }

        if (rms >= VAD_SPEECH_THRESHOLD) {
          currentSession.hasSpoken = true;
          hasSpokenInUtteranceRef.current = true;
          lastSpeechTimeRef.current = now;
        } else if (currentSession.hasSpoken && lastSpeechTimeRef.current) {
          const silenceDuration = now - lastSpeechTimeRef.current;
          if (silenceDuration >= VAD_SILENCE_DURATION_MS) {
            // Pause detected (~600ms - 750ms). Stop recorder to finalize container header & dispatch
            if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
              try {
                mediaRecorderRef.current.stop();
              } catch {}
            }
            // Immediately start fresh recording instance for next speech
            startFreshRecording();
          }
        } else if (
          currentSession.startTime &&
          now - currentSession.startTime > VAD_MAX_DURATION_MS &&
          currentSession.hasSpoken
        ) {
          if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
            try {
              mediaRecorderRef.current.stop();
            } catch {}
          }
          startFreshRecording();
        }
      }
    };

    vadIntervalRef.current = setInterval(checkVad, 50);
  }, [stopVadLoop, initAudioAnalyser, startFreshRecording]);

  const startListening = useCallback(() => {
    // If the candidate has explicitly muted their microphone, respect their mute state
    if (!micEnabledRef.current) {
      updateTurnState("MUTED");
      return;
    }

    // Strict Turn-Taking: Do NOT start listening if AI is speaking or audio hardware is active
    if (
      isPlayingQuestionRef.current ||
      turnStateRef.current === "AI_SPEAKING" ||
      (ttsAudioElRef.current && !ttsAudioElRef.current.paused) ||
      (typeof window !== "undefined" && window.speechSynthesis?.speaking)
    ) {
      return;
    }

    desiredListeningRef.current = true;
    setListening(true);
    updateTurnState("USER_LISTENING");

    if (streamRef.current) {
      const audioTracks = streamRef.current.getAudioTracks();
      const liveTracks = audioTracks.filter((t) => t.readyState === "live");
      if (liveTracks.length > 0) {
        liveTracks.forEach((track) => {
          track.enabled = true;
        });
        setMicReady(true);
        setMicError("");
      } else {
        setMicReady(false);
        setMicError("Microphone track ended or disconnected.");
      }
      initAudioAnalyser(streamRef.current);
    }

    // Start Live Real-time Speech Recognition
    if (recognitionRef.current) {
      try {
        if (!isRecognizingRef.current) {
          recognitionRef.current.start();
          isRecognizingRef.current = true;
        }
      } catch (err) {
        isRecognizingRef.current = true;
      }
    }

    startFreshRecording();
    startVadLoop();
  }, [initAudioAnalyser, startFreshRecording, startVadLoop, updateTurnState]);

  const stopListening = useCallback((isExplicitMute = false) => {
    desiredListeningRef.current = false;
    setListening(false);
    stopVadLoop();

    // Disable hardware audio tracks if candidate muted or AI is speaking
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = false;
      });
    }

    // Stop Live Real-time Speech Recognition cleanly
    if (recognitionRef.current && isRecognizingRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {
        try {
          recognitionRef.current.stop();
        } catch {}
      }
      isRecognizingRef.current = false;
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      try {
        mediaRecorderRef.current.stop();
      } catch {}
    }
  }, [stopVadLoop]);

  // Load available speech synthesis voices across iOS Safari, Android Chrome & Desktop
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    const loadVoices = () => {
      try {
        const list = window.speechSynthesis.getVoices();
        if (list && list.length > 0) {
          voicesRef.current = list;
        }
      } catch {}
    };
    loadVoices();
    window.speechSynthesis.addEventListener?.("voiceschanged", loadVoices);
    return () => {
      window.speechSynthesis.removeEventListener?.("voiceschanged", loadVoices);
    };
  }, []);

  // Revoke cached neural TTS Blob URLs & tear down persistent Audio element on unmount
  useEffect(() => {
    const cacheMap = ttsAudioCacheRef.current;
    const pendingMap = ttsPendingFetchesRef.current;
    return () => {
      try {
        ttsAbortControllerRef.current?.abort();
      } catch {}
      if (ttsAudioElRef.current) {
        try {
          ttsAudioElRef.current.pause();
          ttsAudioElRef.current.onended = null;
          ttsAudioElRef.current.onerror = null;
          ttsAudioElRef.current.onplaying = null;
          ttsAudioElRef.current.removeAttribute("src");
          ttsAudioElRef.current.load?.();
        } catch {}
        ttsAudioElRef.current = null;
      }
      for (const blobUrl of cacheMap.values()) {
        try {
          URL.revokeObjectURL(blobUrl);
        } catch {}
      }
      cacheMap.clear();
      pendingMap.clear();
    };
  }, []);

  const SILENT_WAV_DATA_URI = "data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQIAAAAAAA==";

  const getOrCreateTtsAudioEl = useCallback(() => {
    if (typeof window === "undefined" || typeof Audio === "undefined") return null;
    if (!ttsAudioElRef.current) {
      const el = new Audio();
      el.preload = "auto";
      el.playsInline = true;
      el.setAttribute?.("playsinline", "true");
      el.setAttribute?.("webkit-playsinline", "true");
      ttsAudioElRef.current = el;
    }
    return ttsAudioElRef.current;
  }, []);

  const fetchTtsAudioBlobUrl = useCallback(async (text) => {
    const key = String(text || "").trim();
    if (!key || typeof window === "undefined" || ttsBackendUnavailableRef.current) return null;
    if (ttsAudioCacheRef.current.has(key)) {
      return ttsAudioCacheRef.current.get(key);
    }
    if (ttsPendingFetchesRef.current.has(key)) {
      return ttsPendingFetchesRef.current.get(key);
    }

    const reqPromise = (async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);

      try {
        const res = await fetch(`${API_URL}/api/voice/tts`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: key, speaker: "asteria" }),
          signal: controller.signal,
        });
        if (res.status === 502 || res.status === 503) {
          ttsBackendUnavailableRef.current = true;
          return null;
        }
        if (!res.ok) return null;
        const ctype = res.headers.get("content-type") || "";
        if (!ctype.includes("audio")) return null;
        const buf = await res.arrayBuffer();
        if (!buf || buf.byteLength < 512) return null;
        const blobUrl = URL.createObjectURL(new Blob([buf], { type: ctype.split(";")[0] || "audio/mpeg" }));
        ttsAudioCacheRef.current.set(key, blobUrl);
        return blobUrl;
      } catch {
        return null;
      } finally {
        clearTimeout(timeoutId);
        ttsPendingFetchesRef.current.delete(key);
      }
    })();

    ttsPendingFetchesRef.current.set(key, reqPromise);
    return reqPromise;
  }, []);

  // Pre-fetch 1 question ahead so Start/Next transitions play instantaneously without wasting AI quota
  useEffect(() => {
    const qs = activeSessionRef.current?.questions;
    if (!Array.isArray(qs) || qs.length === 0 || ttsBackendUnavailableRef.current) return;
    if (activeTab === "preflight") {
      if (qs[0]?.questionText) fetchTtsAudioBlobUrl(qs[0].questionText).catch(() => {});
    } else if (activeTab === "interview") {
      const idx = session?.currentQuestionIndex || 0;
      const nextItem = qs[idx + 1];
      if (nextItem?.questionText) {
        fetchTtsAudioBlobUrl(nextItem.questionText).catch(() => {});
      }
    }
  }, [activeTab, session?.id, session?.currentQuestionIndex, fetchTtsAudioBlobUrl]);

  /**
   * Synchronously unlocks mobile browser HTMLAudioElement + Web Audio + SpeechSynthesis
   * inside a user tap/click handler BEFORE any async await/fetch boundary.
   * Essential for iOS Safari & Android Chrome autoplay policies.
   */
  const unlockSpeechAndAudio = useCallback(
    (primeSilentAudio = true) => {
      if (typeof window === "undefined") return;

      // 1. Unlock Web Audio API output routing
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          if (!ttsUnlockAudioCtxRef.current || ttsUnlockAudioCtxRef.current.state === "closed") {
            ttsUnlockAudioCtxRef.current = new AudioCtx();
          }
          const ctx = ttsUnlockAudioCtxRef.current;
          if (ctx.state === "suspended") {
            ctx.resume().catch(() => {});
          }
          const silentBuf = ctx.createBuffer(1, 1, 22050);
          const src = ctx.createBufferSource();
          src.buffer = silentBuf;
          src.connect(ctx.destination);
          src.start(0);
        }
      } catch {}

      // 2. Permanently unlock persistent HTMLAudioElement inside user tap (survives async awaits on iOS/Android)
      if (primeSilentAudio && !ttsAudioUnlockedRef.current && !isPlayingQuestionRef.current) {
        try {
          const el = getOrCreateTtsAudioEl();
          if (el) {
            el.volume = 1.0;
            el.src = SILENT_WAV_DATA_URI;
            const p = el.play();
            if (p && typeof p.then === "function") {
              p.then(() => {
                ttsAudioUnlockedRef.current = true;
              }).catch(() => {});
            } else {
              ttsAudioUnlockedRef.current = true;
            }
          }
        } catch {}
      }

      // 3. Warm SpeechSynthesis voice list cleanly without queuing broken silent rate=10 utterances
      if (window.speechSynthesis) {
        try {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
          const loaded = window.speechSynthesis.getVoices() || [];
          if (loaded.length > 0) {
            voicesRef.current = loaded;
          }
          ttsUnlockedRef.current = true;
        } catch {}
      }
    },
    [getOrCreateTtsAudioEl]
  );

  // Question Audio Playback (Neural HTMLAudio Primary + Web Speech Fallback)
  const clearAllTtsTimers = useCallback(() => {
    if (ttsPendingStartTimeoutRef.current) {
      clearTimeout(ttsPendingStartTimeoutRef.current);
      ttsPendingStartTimeoutRef.current = null;
    }
    if (ttsStartWatchdogRef.current) {
      clearTimeout(ttsStartWatchdogRef.current);
      ttsStartWatchdogRef.current = null;
    }
    if (ttsKeepAliveRef.current) {
      clearInterval(ttsKeepAliveRef.current);
      ttsKeepAliveRef.current = null;
    }
    if (ttsSafetyTimeoutRef.current) {
      clearTimeout(ttsSafetyTimeoutRef.current);
      ttsSafetyTimeoutRef.current = null;
    }
    if (echoFadeTimeoutRef.current) {
      clearTimeout(echoFadeTimeoutRef.current);
      echoFadeTimeoutRef.current = null;
    }
  }, []);

  const stopQuestionAudio = useCallback(
    (resumeListeningIfActive = true) => {
      ttsPlaybackIdRef.current += 1;
      clearAllTtsTimers();

      try {
        ttsAbortControllerRef.current?.abort();
        ttsAbortControllerRef.current = null;
      } catch {}

      if (ttsAudioElRef.current) {
        try {
          ttsAudioElRef.current.onended = null;
          ttsAudioElRef.current.onerror = null;
          ttsAudioElRef.current.onplaying = null;
          ttsAudioElRef.current.pause();
        } catch {}
      }

      if (typeof window !== "undefined" && window.speechSynthesis) {
        try {
          if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
            window.speechSynthesis.cancel();
          }
        } catch {}
      }
      currentUtteranceRef.current = null;

      if (resumeListeningIfActive && micEnabledRef.current && activeTab === "interview" && !isInterviewPaused) {
        // 550ms room acoustic decay delay before turning on mic
        echoFadeTimeoutRef.current = setTimeout(() => {
          setIsPlayingQuestion(false);
          isPlayingQuestionRef.current = false;
          setInterimTranscript("");
          if (micEnabledRef.current && activeTab === "interview" && !isInterviewPaused) {
            updateTurnState("USER_LISTENING");
            startListening();
          } else {
            updateTurnState("MUTED");
          }
        }, 550);
      } else {
        setIsPlayingQuestion(false);
        isPlayingQuestionRef.current = false;
        updateTurnState(micEnabledRef.current ? "USER_LISTENING" : "MUTED");
      }
    },
    [activeTab, clearAllTtsTimers, isInterviewPaused, startListening, updateTurnState]
  );

  const toggleMic = useCallback(() => {
    setMicEnabled((prev) => {
      const next = !prev;
      micEnabledRef.current = next;

      // 1. Direct hardware audio tracks sync on active MediaStream (only if not AI speaking)
      if (streamRef.current) {
        const audioTracks = streamRef.current.getAudioTracks();
        audioTracks.forEach((track) => {
          track.enabled = next && !isPlayingQuestionRef.current && turnStateRef.current !== "AI_SPEAKING";
        });
      }

      // 2. Synchronize with VoiceEngine
      engine?.micManager?.setHardwareMute(!next);

      // 3. Control speech recognition & recording cleanly
      if (next) {
        if (isPlayingQuestionRef.current || turnStateRef.current === "AI_SPEAKING") {
          updateTurnState("AI_SPEAKING");
        } else {
          updateTurnState("USER_LISTENING");
          startListening();
        }
      } else {
        updateTurnState("MUTED");
        stopListening(true);
      }

      return next;
    });
  }, [engine, startListening, stopListening, updateTurnState]);

  const playQuestionAudio = useCallback(
    async (textToPlay = null) => {
      const isManualTap = textToPlay === null || typeof textToPlay !== "string";
      const rawText =
        typeof textToPlay === "string"
          ? textToPlay
          : currentQuestionRef.current?.questionText || currentQuestion?.questionText;
      const text = String(rawText || "").trim();
      if (!text) return;

      // Toggle off cleanly if user tapped the Stop Audio button while speaking
      if (isPlayingQuestionRef.current && isManualTap) {
        stopQuestionAudio(true);
        return;
      }

      const cachedAudioUrl = ttsAudioCacheRef.current.get(text) || null;
      if (isManualTap) {
        // If cached audio exists, avoid playing SILENT_WAV immediately before real audio (prevents AbortError)
        unlockSpeechAndAudio(!cachedAudioUrl);
        setTtsBlockedNotice("");
      }

      // 1. Invalidate any prior playback & cancel pending audio/speech
      const wasSpeechActive = Boolean(
        typeof window !== "undefined" &&
          (window.speechSynthesis?.speaking || window.speechSynthesis?.pending)
      );
      ttsPlaybackIdRef.current += 1;
      const playbackId = ttsPlaybackIdRef.current;
      clearAllTtsTimers();
      try {
        ttsAbortControllerRef.current?.abort();
      } catch {}
      ttsAbortControllerRef.current = new AbortController();
      const abortSignal = ttsAbortControllerRef.current.signal;

      if (ttsAudioElRef.current) {
        try {
          ttsAudioElRef.current.onended = null;
          ttsAudioElRef.current.onerror = null;
          ttsAudioElRef.current.onplaying = null;
          ttsAudioElRef.current.pause();
        } catch {}
      }
      currentUtteranceRef.current = null;
      if (wasSpeechActive && typeof window !== "undefined" && window.speechSynthesis) {
        try {
          window.speechSynthesis.cancel();
        } catch {}
      }

      // 2. Strict Turn-Taking: Mute/pause mic and set interview state to AI_SPEAKING before audio starts
      updateTurnState("AI_SPEAKING");
      setIsPlayingQuestion(true);
      isPlayingQuestionRef.current = true;

      if (streamRef.current) {
        streamRef.current.getAudioTracks().forEach((track) => {
          track.enabled = false;
        });
      }

      stopListening(false);
      setInterimTranscript("");

      const finishToListening = (blockedReason = null) => {
        if (playbackId !== ttsPlaybackIdRef.current) return;
        clearAllTtsTimers();
        currentUtteranceRef.current = null;

        if (blockedReason) {
          setTtsBlockedNotice(blockedReason);
          setIsPlayingQuestion(false);
          isPlayingQuestionRef.current = false;
          setInterimTranscript("");
          if (micEnabledRef.current && activeTab === "interview" && !isInterviewPaused) {
            updateTurnState("USER_LISTENING");
            startListening();
          } else {
            updateTurnState("MUTED");
          }
          return;
        }

        // Wait until both HTMLAudio and SpeechSynthesis have stopped, then wait 550ms for room echo decay
        const pollAudioDone = () => {
          if (playbackId !== ttsPlaybackIdRef.current) return;
          const htmlPlaying = Boolean(ttsAudioElRef.current && !ttsAudioElRef.current.paused && !ttsAudioElRef.current.ended);
          const synthPlaying = Boolean(typeof window !== "undefined" && window.speechSynthesis?.speaking);
          if (htmlPlaying || synthPlaying) {
            echoFadeTimeoutRef.current = setTimeout(pollAudioDone, 80);
            return;
          }

          echoFadeTimeoutRef.current = setTimeout(() => {
            if (playbackId !== ttsPlaybackIdRef.current) return;
            setIsPlayingQuestion(false);
            isPlayingQuestionRef.current = false;
            setInterimTranscript("");
            if (micEnabledRef.current && activeTab === "interview" && !isInterviewPaused) {
              updateTurnState("USER_LISTENING");
              startListening();
            } else {
              updateTurnState("MUTED");
            }
          }, 550);
        };

        pollAudioDone();
      };

      const startWebSpeechFallback = () => {
        if (playbackId !== ttsPlaybackIdRef.current) return;
        if (typeof window === "undefined" || !window.speechSynthesis) {
          finishToListening("Voice playback is unavailable on this browser. Please read the question text above.");
          return;
        }

        const runSpeech = () => {
          if (playbackId !== ttsPlaybackIdRef.current) return;

          const utterance = new SpeechSynthesisUtterance(text);
          currentUtteranceRef.current = utterance;
          utterance.rate = 1.0;
          utterance.pitch = 1.0;
          utterance.volume = 1.0;
          utterance.lang = "en-US";

          // On desktop pick a high-clarity voice; on mobile keep default/local OS voice so remote voices don't go silent
          try {
            const isMobileUa = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || "");
            const availableVoices =
              voicesRef.current.length > 0 ? voicesRef.current : window.speechSynthesis.getVoices() || [];
            if (availableVoices.length > 0) {
              voicesRef.current = availableVoices;
              const preferred = isMobileUa
                ? availableVoices.find((v) => v.default && v.lang.startsWith("en")) ||
                  availableVoices.find((v) => v.localService && v.lang.startsWith("en"))
                : availableVoices.find(
                    (v) =>
                      (v.name.includes("Natural") ||
                        v.name.includes("Google") ||
                        v.name.includes("Samantha") ||
                        v.name.includes("Daniel") ||
                        v.name.includes("Karen")) &&
                      v.lang.startsWith("en")
                  ) ||
                  availableVoices.find((v) => v.localService && v.lang.startsWith("en")) ||
                  availableVoices.find((v) => v.lang.startsWith("en"));
              if (preferred) {
                utterance.voice = preferred;
              }
            }
          } catch {}

          let didStart = false;
          let cleaned = false;

          const cleanupSpeech = (blockedReason = null) => {
            if (cleaned || playbackId !== ttsPlaybackIdRef.current) return;
            cleaned = true;
            finishToListening(blockedReason);
          };

          utterance.onstart = () => {
            if (playbackId !== ttsPlaybackIdRef.current) return;
            didStart = true;
            ttsUnlockedRef.current = true;
            setTtsBlockedNotice("");
            if (ttsStartWatchdogRef.current) {
              clearTimeout(ttsStartWatchdogRef.current);
              ttsStartWatchdogRef.current = null;
            }
            setIsPlayingQuestion(true);
            isPlayingQuestionRef.current = true;
            updateTurnState("AI_SPEAKING");
            if (streamRef.current) {
              streamRef.current.getAudioTracks().forEach((track) => {
                track.enabled = false;
              });
            }
            stopListening(false);
            setInterimTranscript("");
          };

          utterance.onend = () => cleanupSpeech(null);

          utterance.onerror = (e) => {
            const errCode = e?.error || "";
            if (errCode === "canceled" || errCode === "interrupted") {
              cleanupSpeech(null);
              return;
            }
            console.warn("[TTS] WebSpeech error:", errCode, e);
            if (errCode === "not-allowed" || errCode === "audio-busy" || errCode === "synthesis-failed") {
              cleanupSpeech("Tap 'Listen to Question' above to hear the question aloud.");
            } else {
              cleanupSpeech(null);
            }
          };

          ttsStartWatchdogRef.current = setTimeout(() => {
            if (playbackId !== ttsPlaybackIdRef.current || didStart) return;
            const stillActive = Boolean(
              typeof window !== "undefined" &&
                (window.speechSynthesis?.speaking || window.speechSynthesis?.pending)
            );
            if (!stillActive) {
              console.warn("[TTS Watchdog] Speech did not start - releasing mic lock");
              cleanupSpeech("Tap 'Listen to Question' above to hear the question aloud.");
            }
          }, 1400);

          ttsKeepAliveRef.current = setInterval(() => {
            if (playbackId !== ttsPlaybackIdRef.current) return;
            try {
              if (window.speechSynthesis?.paused && !isInterviewPaused && !document.hidden) {
                window.speechSynthesis.resume();
              }
            } catch {}
          }, 3500);

          const wordCount = text.split(/\s+/).filter(Boolean).length;
          const safetyLimitMs = Math.max(5000, Math.min(26000, wordCount * 350 + 4000));
          ttsSafetyTimeoutRef.current = setTimeout(() => {
            console.warn("[TTS Watchdog] Safety limit reached - releasing audio lock");
            cleanupSpeech(null);
          }, safetyLimitMs);

          try {
            if (window.speechSynthesis.paused) {
              window.speechSynthesis.resume();
            }
            window.speechSynthesis.speak(utterance);
          } catch (err) {
            console.warn("[TTS] speak() exception:", err);
            cleanupSpeech("Tap 'Listen to Question' above to hear the question aloud.");
          }
        };

        if (wasSpeechActive) {
          ttsPendingStartTimeoutRef.current = setTimeout(runSpeech, 80);
        } else {
          runSpeech();
        }
      };

      // 3. Primary Path: Play neural MP3 via unlocked HTMLAudioElement (skip fetch cleanly if backend TTS unavailable)
      const audioEl = getOrCreateTtsAudioEl();
      if (audioEl && (cachedAudioUrl || !ttsBackendUnavailableRef.current)) {
        const audioUrl =
          cachedAudioUrl ||
          (await Promise.race([
            fetchTtsAudioBlobUrl(text),
            new Promise((resolve) => {
              const t = setTimeout(() => resolve(null), 4800);
              abortSignal?.addEventListener("abort", () => {
                clearTimeout(t);
                resolve(null);
              }, { once: true });
            }),
          ]));
        if (playbackId !== ttsPlaybackIdRef.current) return;

        if (audioUrl) {
          try {
            let endedOrHandled = false;
            audioEl.volume = 1.0;
            audioEl.playbackRate = 1.0;
            audioEl.src = audioUrl;

            audioEl.onplaying = () => {
              if (playbackId !== ttsPlaybackIdRef.current) return;
              ttsAudioUnlockedRef.current = true;
              setTtsBlockedNotice("");
              setIsPlayingQuestion(true);
              isPlayingQuestionRef.current = true;
              updateTurnState("AI_SPEAKING");
              stopListening(false);
            };

            audioEl.onended = () => {
              if (endedOrHandled || playbackId !== ttsPlaybackIdRef.current) return;
              endedOrHandled = true;
              finishToListening(null);
            };

            audioEl.onerror = () => {
              if (endedOrHandled || playbackId !== ttsPlaybackIdRef.current) return;
              endedOrHandled = true;
              console.warn("[TTS] HTMLAudio playback failed, falling back to Web Speech");
              startWebSpeechFallback();
            };

            const wordCount = text.split(/\s+/).filter(Boolean).length;
            const safetyLimitMs = Math.max(6000, Math.min(30000, wordCount * 420 + 5000));
            ttsSafetyTimeoutRef.current = setTimeout(() => {
              if (!endedOrHandled && playbackId === ttsPlaybackIdRef.current) {
                endedOrHandled = true;
                try {
                  audioEl.pause();
                } catch {}
                finishToListening(null);
              }
            }, safetyLimitMs);

            await audioEl.play();
            ttsAudioUnlockedRef.current = true;
            return;
          } catch (playErr) {
            console.warn("[TTS] HTMLAudio play() blocked/failed:", playErr?.name || playErr?.message);
            if (playErr?.name === "NotAllowedError") {
              // If user has not interacted yet, Web Speech will also likely need tap; try fallback cleanly
              startWebSpeechFallback();
              return;
            }
          }
        }
      }

      // 4. Fallback Path: Web Speech API
      startWebSpeechFallback();
    },
    [
      currentQuestion?.questionText,
      clearAllTtsTimers,
      fetchTtsAudioBlobUrl,
      getOrCreateTtsAudioEl,
      stopQuestionAudio,
      startListening,
      stopListening,
      unlockSpeechAndAudio,
      activeTab,
      isInterviewPaused,
      updateTurnState,
    ]
  );

  playQuestionAudioRef.current = playQuestionAudio;
  stopQuestionAudioRef.current = stopQuestionAudio;

  // Pause/recover TTS cleanly when mobile tab/screen goes inactive or returns active
  useEffect(() => {
    const handleVisibility = () => {
      if (activeTab !== "interview") return;
      if (document.hidden) {
        if (isPlayingQuestionRef.current || turnStateRef.current === "AI_SPEAKING") {
          stopQuestionAudioRef.current?.(false);
          setTtsBlockedNotice("Question audio paused while tab was inactive. Tap 'Listen to Question' to replay.");
        }
      } else if (
        !isPlayingQuestionRef.current &&
        turnStateRef.current === "AI_SPEAKING" &&
        micEnabledRef.current &&
        !isInterviewPaused
      ) {
        updateTurnState("USER_LISTENING");
        startListening();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [activeTab, isInterviewPaused, startListening, updateTurnState]);

  // Auto-Play Question Audio ("Listen to Question") on Question Load
  useEffect(() => {
    if (activeTab !== "interview" || !currentQuestion?.id || isInterviewPaused) {
      stopQuestionAudioRef.current?.(false);
      return;
    }

    if (lastSpokenQuestionIdRef.current === currentQuestion.id) {
      return;
    }
    lastSpokenQuestionIdRef.current = currentQuestion.id;
    setTtsBlockedNotice("");

    // Hard-mute mic and STT immediately so zero speaker noise can be captured
    stopListening(false);
    updateTurnState("AI_SPEAKING");

    // 60ms delay ensures state has settled while preserving user-gesture window
    const timer = setTimeout(() => {
      playQuestionAudioRef.current?.(currentQuestion.questionText);
    }, 60);

    return () => {
      clearTimeout(timer);
    };
  }, [currentQuestion?.id, currentQuestion?.questionText, activeTab, isInterviewPaused, stopListening, updateTurnState]);

  // Guarantee Live Spoken Response is completely reset whenever current question changes
  useEffect(() => {
    if (!currentQuestion?.id) return;
    setTranscript("");
    setInterimTranscript("");
    finalTranscriptRef.current = "";
  }, [currentQuestion?.id]);

  /* =========================================================
     SPEECH-TO-TEXT (WEB SPEECH API) - PERSISTENT ENGINE
  ========================================================= */
  useEffect(() => {
    if (!SpeechRecognitionAPI) {
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
      // Discard any audio if mic is explicitly muted, listening is turned off, AI is speaking, or speech synthesis is active
      if (
        !micEnabledRef.current ||
        !desiredListeningRef.current ||
        isPlayingQuestionRef.current ||
        turnStateRef.current === "AI_SPEAKING" ||
        (ttsAudioElRef.current && !ttsAudioElRef.current.paused && !ttsAudioElRef.current.ended) ||
        (typeof window !== "undefined" && window.speechSynthesis?.speaking)
      ) {
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

      const activeQText = currentQuestionRef.current?.questionText || currentQuestionRef.current?.question || "";

      // Echo blocker: discard any interim transcript that echoes the question
      if (interim) {
        if (isQuestionEcho(interim, activeQText)) {
          console.log("[STT Guard] Blocked question echo in interim transcript:", interim);
          setInterimTranscript("");
          return;
        }
        setInterimTranscript(interim);
      } else {
        setInterimTranscript("");
      }

      if (currentFinal) {
        const cleaned = currentFinal.trim();
        if (cleaned) {
          // Echo blocker: discard any final transcript that echoes the question
          if (isQuestionEcho(cleaned, activeQText)) {
            console.log("[STT Guard] Blocked question echo in final transcript:", cleaned);
            return;
          }

          setTranscript((prev) => {
            const existing = prev.trim();
            if (!existing) {
              finalTranscriptRef.current = cleaned;
              return cleaned;
            }
            if (existing.endsWith(cleaned) || existing.includes(cleaned)) {
              return prev;
            }
            const updated = `${existing} ${cleaned}`;
            finalTranscriptRef.current = updated;
            return updated;
          });
        }
      }
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

      // Automatically keep listening only if candidate is unmuted, AI is not speaking, and speech synthesis is not active
      if (
        desiredListeningRef.current &&
        micEnabledRef.current &&
        !isPlayingQuestionRef.current &&
        turnStateRef.current !== "AI_SPEAKING" &&
        !(ttsAudioElRef.current && !ttsAudioElRef.current.paused && !ttsAudioElRef.current.ended) &&
        !(typeof window !== "undefined" && window.speechSynthesis?.speaking)
      ) {
        try {
          recognition.start();
          isRecognizingRef.current = true;
        } catch {
          setTimeout(() => {
            if (
              desiredListeningRef.current &&
              micEnabledRef.current &&
              !isRecognizingRef.current &&
              !isPlayingQuestionRef.current &&
              turnStateRef.current !== "AI_SPEAKING" &&
              !(ttsAudioElRef.current && !ttsAudioElRef.current.paused && !ttsAudioElRef.current.ended) &&
              !(typeof window !== "undefined" && window.speechSynthesis?.speaking)
            ) {
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

  // Audio Context & VAD Cleanup on Unmount
  useEffect(() => {
    return () => {
      stopVadLoop();
      if (audioContextRef.current && audioContextRef.current.state !== "closed") {
        try {
          audioContextRef.current.close();
        } catch {}
      }
    };
  }, [stopVadLoop]);

  /* =========================================================
     SESSION INITIALIZATION & BACKEND STATE SYNC
  ========================================================= */
  const initializeSession = useCallback(async (courseOverride = null, moduleOverride = null) => {
    setSessionLoading(true);
    try {
      const activeCourseId = courseOverride !== null ? courseOverride : selectedCourse;
      const activeModuleId = moduleOverride !== null ? moduleOverride : selectedModule;

      if (courseOverride !== null || moduleOverride !== null) {
        localStorage.removeItem("prepwise_interview_session_id");
      }

      // Check existing session from localStorage
      const cachedId = localStorage.getItem("prepwise_interview_session_id");
      let activeSession = null;

      if (cachedId) {
        try {
          const res = await fetch(`${API_URL}/api/interviews/${cachedId}`);
          if (res.ok) {
            const data = await res.json();
            const isResultsRoute = location.pathname === "/interview/results";
            const canResume =
              data.session &&
              (data.session.status === "ACTIVE" || (isResultsRoute && data.session.status === "COMPLETED"));
            if (canResume) {
              const sessMod = String(data.session.moduleId || "all").toUpperCase();
              const reqMod = String(activeModuleId || "all").toUpperCase();
              if (sessMod === reqMod && data.session.courseId === activeCourseId) {
                // Enforce MAX_QUESTIONS limit on cached active/completed sessions
                data.session.maxQuestions = MAX_QUESTIONS;
                if (data.session.questions && data.session.questions.length > MAX_QUESTIONS) {
                  data.session.questions = data.session.questions.slice(0, MAX_QUESTIONS);
                }
                if ((data.session.currentQuestionIndex || 0) >= MAX_QUESTIONS) {
                  data.session.status = "COMPLETED";
                }
                activeSession = data.session;
              }
            }
          }
        } catch (e) {
          console.warn("Could not resume previous session:", e);
        }
      }

      if (!activeSession) {
        const course = getCourseById(activeCourseId);
        const moduleObj = getModuleById(activeCourseId, activeModuleId);
        let candidateUid = auth?.user?.id || auth?.user?.email || null;
        if (!candidateUid) {
          try {
            candidateUid = localStorage.getItem("prepspaces_candidate_uid");
            if (!candidateUid) {
              candidateUid = `cand_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
              localStorage.setItem("prepspaces_candidate_uid", candidateUid);
            }
          } catch {
            candidateUid = `cand_${Date.now().toString(36)}`;
          }
        }

        // Try creating new Interview Session via backend
        try {
          const authToken = auth?.token || localStorage.getItem("prepspaces_token") || "";
          const headers = {
            "Content-Type": "application/json",
            "x-guest-session-id": String(candidateUid),
          };
          if (authToken) headers["Authorization"] = `Bearer ${authToken}`;

          const res = await fetch(`${API_URL}/api/interviews`, {
            method: "POST",
            headers,
            body: JSON.stringify({
              role: activeModuleId === "all" ? `${course.title} Mock` : `${course.title} - ${moduleObj.title}`,
              courseId: activeCourseId,
              moduleId: activeModuleId,
              candidateId: String(candidateUid),
            }),
          });
          if (res.ok) {
            const data = await res.json();
            activeSession = data.session;
          }
        } catch (e) {
          console.warn("[InterviewRoom] Backend offline, allocating from question bank:", e);
        }

        if (!activeSession) {
          activeSession = createLocalMockSession(activeCourseId, activeModuleId);
        }
        localStorage.setItem("prepwise_interview_session_id", activeSession.id);
      }

      setSession(activeSession);
      answersRef.current = activeSession.answers || [];
      const qIndex = activeSession.currentQuestionIndex || 0;
      const q = (activeSession.questions && activeSession.questions[qIndex]) || activeSession.questions?.[0] || FALLBACK_AI_QUESTION;
      setCurrentQuestion(q);

      if (location.pathname === "/interview/results" || activeSession.status === "COMPLETED") {
        setActiveTab("report");
        if (activeSession.report) {
          setFinalReport(activeSession.report);
        } else {
          try {
            const cachedReport = sessionStorage.getItem("prepspaces_last_interview_report");
            if (cachedReport) {
              setFinalReport(JSON.parse(cachedReport));
            } else {
              setFinalReport(SAMPLE_DEMO_REPORT);
            }
          } catch {
            setFinalReport(SAMPLE_DEMO_REPORT);
          }
        }
      } else {
        try {
          sessionStorage.removeItem("prepspaces_last_interview_report");
        } catch {}
        if (activeSession.status === "ACTIVE") {
          setActiveTab("interview");
          updateTurnState("AI_SPEAKING");
          stopListening(false);
        } else {
          setActiveTab("preflight");
        }
      }
    } catch (err) {
      console.error("Failed to initialize interview session:", err);
      const fallback = createLocalMockSession(selectedCourse, selectedModule);
      setSession(fallback);
      setCurrentQuestion(fallback.questions[0]);
      setActiveTab("preflight");
    } finally {
      setSessionLoading(false);
    }
  }, [selectedCourse, selectedModule, startListening]);

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
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        try {
          if (document.exitFullscreen) document.exitFullscreen();
          else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        } catch {}
      }
    };
  }, [startCamera, initializeSession]);

  /* =========================================================
     FULL-SCREEN & PROCTORING EXIT PROTECTION LOGIC
  ========================================================= */
  const enterFullscreen = useCallback(async () => {
    try {
      const docEl = document.documentElement;
      let fsPromise = null;
      if (docEl.requestFullscreen) {
        fsPromise = docEl.requestFullscreen();
      } else if (docEl.webkitRequestFullscreen) {
        fsPromise = docEl.webkitRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        fsPromise = docEl.mozRequestFullScreen();
      } else if (docEl.msRequestFullscreen) {
        fsPromise = docEl.msRequestFullscreen();
      }

      if (fsPromise && typeof fsPromise.then === "function") {
        await Promise.race([
          fsPromise,
          new Promise((resolve) => setTimeout(resolve, 350)),
        ]);
      }
      setIsFullscreen(true);
      return true;
    } catch (err) {
      console.warn("[InterviewRoom] Fullscreen request bypassed or failed:", err);
      setIsFullscreen(false);
      return false;
    }
  }, []);

  const exitFullscreen = useCallback(async () => {
    try {
      if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
      ) {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          await document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          await document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          await document.msExitFullscreen();
        }
      }
    } catch (err) {
      console.warn("[InterviewRoom] Exit fullscreen error:", err);
    } finally {
      setIsFullscreen(false);
    }
  }, []);

  const triggerExitWarning = useCallback(
    (eventType) => {
      // Only trigger if in active interview mode
      if (activeTab !== "interview" || session?.status !== "ACTIVE") return;
      if (isExitWarningOpenRef.current) return; // Prevent duplicate dialogs

      isExitWarningOpenRef.current = true;
      setShowExitWarning(true);
      setIsInterviewPaused(true);
      pauseStartTimeRef.current = Date.now();

      // Temporarily pause speech recognition / audio listening
      stopListening();

      // Record the exit event for monitoring
      const newEvent = {
        type: eventType,
        timestamp: new Date().toISOString(),
        questionIndex: session?.currentQuestionIndex || 0,
      };
      setExitEvents((prev) => [...prev, newEvent]);
      console.warn(`[Proctoring] Exit event detected (${eventType}):`, newEvent);
    },
    [activeTab, session, stopListening]
  );

  const handleContinueInterview = async () => {
    // Adjust session.startedAt by the duration the dialog was paused
    if (pauseStartTimeRef.current && session?.startedAt) {
      const pausedDuration = Date.now() - pauseStartTimeRef.current;
      setSession((prev) =>
        prev ? { ...prev, startedAt: prev.startedAt + pausedDuration } : prev
      );
    }
    pauseStartTimeRef.current = null;
    isExitWarningOpenRef.current = false;
    setShowExitWarning(false);
    setIsInterviewPaused(false);

    // Re-enter full-screen mode on explicit candidate user action
    await enterFullscreen();

    // Resume listening if mic is enabled
    setTimeout(() => {
      if (micEnabledRef.current) {
        startListening();
      }
    }, 400);
  };

  /* =========================================================
     END INTERVIEW & TEARDOWN
     * Clean media teardown: videoTrack.stop(), audioTrack.stop(), MediaRecorder.stop(), speechSynthesis.cancel()
     * Guard against double-redirects (isEndingRef.current = true)
     * Auto-save current draft answer in Live Spoken Response before redirect
     * Redirect to /interview/results with full performance report
  ========================================================= */
  const handleEndInterview = useCallback(
    async (reason = "USER_REQUESTED", overrideAnswers = null) => {
      if (isEndingRef.current) return;
      isEndingRef.current = true;
      if (queuePollTimerRef.current) {
        clearInterval(queuePollTimerRef.current);
        queuePollTimerRef.current = null;
      }

      // 1. Clean Media & State Teardown Before Redirect
      stopQuestionAudio(false);
      lastSpokenQuestionIdRef.current = null;
      stopListening(true);
      await exitFullscreen();

      // Stop all active webcam and microphone tracks immediately
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => {
          try {
            track.stop();
          } catch {}
        });
        streamRef.current = null;
      }
      if (cameraVideoRef.current) {
        cameraVideoRef.current.srcObject = null;
      }

      const currentSessionId = session?.id;
      localStorage.removeItem("prepwise_interview_session_id");
      if (currentSessionId) {
        sessionStorage.removeItem(`prepspaces_interview_start_${currentSessionId}`);
      }

      const isCompletedOrTimeout =
        reason === "time_up" ||
        reason === "TIME_EXPIRED" ||
        reason === "COMPLETED" ||
        reason === "MAX_QUESTIONS_REACHED" ||
        reason === "USER_ENDED" ||
        reason === "USER_CONFIRMED_LEAVE_FULLSCREEN" ||
        reason === "VOICE_COMMAND";

      if (isCompletedOrTimeout) {
        // Auto-Save Current Draft: capture whatever text is currently sitting in Live Spoken Response
        let accumulatedAnswers = overrideAnswers ? [...overrideAnswers] : (answersRef.current.length > 0 ? [...answersRef.current] : [...(session?.answers || [])]);
        const currentSpoken = (transcript.trim() || interimTranscript.trim() || finalTranscriptRef.current.trim());
        const alreadyAnsweredCurrent = accumulatedAnswers.some((a) => a.questionId === currentQuestion?.id);

        if (currentQuestion && !alreadyAnsweredCurrent) {
          const inputMode = micEnabledRef.current ? "voice" : "typed";
          const rubric = evaluateAnswerWithRubric(currentQuestion, currentSpoken, inputMode);
          accumulatedAnswers.push({
            questionId: currentQuestion.id,
            questionNumber: currentQuestion.questionNumber || ((session?.currentQuestionIndex || 0) + 1),
            questionText: currentQuestion.questionText || currentQuestion.question,
            competency: currentQuestion.subtopic || currentQuestion.topic || currentQuestion.questionType || "AI Technical Competency",
            candidateTranscript: currentSpoken || "No answer provided.",
            rating: rubric.rating,
            score: rubric.score,
            overallScore: rubric.overallScore,
            scores: rubric.scores,
            feedback: rubric.feedback,
            rubricFeedback: rubric.rubricFeedback,
            coveredPoints: rubric.coveredPoints || [],
            missedPoints: rubric.missedPoints || [],
            strengths: rubric.strengths || [],
            improvements: rubric.improvements || [],
            evaluatedBy: rubric.evaluatedBy,
            inputMode,
          });

          // Async background Groq evaluation for the draft if answer has >= 3 words
          const answerWords = currentSpoken ? currentSpoken.split(/\s+/).filter(Boolean) : [];
          if (answerWords.length >= 3 && currentSessionId && !currentSessionId.startsWith("local_")) {
            fetch(`${API_URL}/api/interviews/${currentSessionId}/answers`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                questionId: currentQuestion.id,
                transcript: currentSpoken,
                inputMode,
                durationMs: 45000,
              }),
            }).catch((e) => console.warn("Background draft evaluation sync notice:", e));
          }
        }

        if (currentSessionId && !currentSessionId.startsWith("local_")) {
          try {
            const res = await fetch(`${API_URL}/api/interviews/${currentSessionId}/end`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ reason, answers: accumulatedAnswers }),
            });
            if (res.ok) {
              const data = await res.json();
              if (data.report) {
                setSession(data.session);
                setFinalReport(data.report);
                try {
                  sessionStorage.setItem("prepspaces_last_interview_report", JSON.stringify(data.report));
                } catch {}
                setActiveTab("report");
                navigate("/interview/results", { replace: true });
                return;
              }
            }
          } catch (err) {
            console.warn("[InterviewRoom] Backend end error, generating report locally:", err);
          }
        }

        // Direct auto-exit to Results page with full performance report
        const report = buildInterviewReport(accumulatedAnswers, session?.track || "AI Engineering & Generative AI");
        setFinalReport(report);
        try {
          sessionStorage.setItem("prepspaces_last_interview_report", JSON.stringify(report));
        } catch {}
        setActiveTab("report");
        navigate("/interview/results", { replace: true });
        return;
      }

      // User clicked End button: Notify backend and navigate directly to home page
      if (currentSessionId && !currentSessionId.startsWith("local_")) {
        fetch(`${API_URL}/api/interviews/${currentSessionId}/end`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reason: "USER_ENDED" }),
        }).catch((e) => console.warn("End interview notification error:", e));
      }

      navigate("/");
    },
    [session, currentQuestion, transcript, interimTranscript, stopListening, exitFullscreen, navigate, stopQuestionAudio]
  );

  const handleConfirmLeaveInterview = async () => {
    isExitWarningOpenRef.current = false;
    setShowExitWarning(false);
    setIsInterviewPaused(false);
    pauseStartTimeRef.current = null;

    // Exit fullscreen
    await exitFullscreen();

    // End interview and navigate away
    handleEndInterview("USER_CONFIRMED_LEAVE_FULLSCREEN");
  };

  // Fullscreen and window visibility / focus event listeners
  useEffect(() => {
    if (activeTab !== "interview" || session?.status !== "ACTIVE") {
      return;
    }

    const onFullscreenChange = () => {
      const isCurrentlyFs = Boolean(
        document.fullscreenElement ||
          document.webkitFullscreenElement ||
          document.mozFullScreenElement ||
          document.msFullscreenElement
      );
      setIsFullscreen(isCurrentlyFs);
      if (!isCurrentlyFs) {
        triggerExitWarning("fullscreen_exit");
      }
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape" || e.keyCode === 27) {
        triggerExitWarning("esc_key");
      }
    };

    const onVisibilityChange = () => {
      if (document.hidden || document.visibilityState === "hidden") {
        triggerExitWarning("tab_switch");
      }
    };

    const onBlur = () => {
      setTimeout(() => {
        if (
          !document.hasFocus() &&
          activeTab === "interview" &&
          session?.status === "ACTIVE"
        ) {
          triggerExitWarning("window_blur");
        }
      }, 250);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    document.addEventListener("webkitfullscreenchange", onFullscreenChange);
    document.addEventListener("mozfullscreenchange", onFullscreenChange);
    document.addEventListener("MSFullscreenChange", onFullscreenChange);
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("blur", onBlur);

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
      document.removeEventListener("mozfullscreenchange", onFullscreenChange);
      document.removeEventListener("MSFullscreenChange", onFullscreenChange);
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("blur", onBlur);
    };
  }, [activeTab, session?.status, triggerExitWarning]);

  /* =========================================================
     STRICT 3-MINUTE SESSION TIMER SYNC
     * Starts at 03:00 (180s)
     * Counts down every second (02:59, 02:58... down to 00:00)
     * Persists accurately across question transitions and tab switches
     * Automatically ends session and redirects to Results at 00:00
  ========================================================= */
  useEffect(() => {
    if (!session || session.status !== "ACTIVE" || activeTab !== "interview") return;

    const startKey = `prepspaces_interview_start_${session.id}`;
    let startTime = Number(sessionStorage.getItem(startKey)) || session.startedAt;
    if (!startTime) {
      startTime = Date.now();
      sessionStorage.setItem(startKey, String(startTime));
    }

    const durationSeconds = session.timerDurationSeconds || 180;

    const tick = () => {
      if (isInterviewPaused) return;

      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(0, durationSeconds - elapsedSeconds);
      setTimeRemaining(remaining);

      if (remaining <= 0) {
        handleEndInterview("time_up");
      }
    };

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, [
    session?.id,
    session?.status,
    session?.startedAt,
    session?.timerDurationSeconds,
    activeTab,
    isInterviewPaused,
    handleEndInterview,
  ]);

  const formatTimer = (seconds) => {
    const s = Math.max(0, Math.floor(seconds || 0));
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  /* =========================================================
     START INTERVIEW (TRANSITION TO ACTIVE)
     * Mandatory Camera & Microphone check
     * Centralized Slot Allocation (Slots 1-4) & FIFO Waiting Queue (Max 5)
     * Activates Full-Screen Mode
     * Initializes strict 3-minute countdown
  ========================================================= */
  const proceedToActiveInterview = useCallback(
    (sessionData, questionData, slotId = "slot_1", assignedKeyIndex = 1) => {
      enterFullscreen().catch((e) => console.warn("Fullscreen request error:", e));

      const startTime = Date.now();
      const duration = 180; // strictly 3 minutes
      if (session?.id) {
        sessionStorage.setItem(`prepspaces_interview_start_${session.id}`, String(startTime));
      }
      setTimeRemaining(duration);

      // When starting interview from preflight, activate microphone intent but keep tracks muted during Q1 TTS
      setMicEnabled(true);
      micEnabledRef.current = true;
      desiredListeningRef.current = false;
      if (streamRef.current) {
        streamRef.current.getAudioTracks().forEach((track) => {
          track.enabled = false;
        });
      }

      const active = {
        ...(sessionData || session),
        status: "ACTIVE",
        startedAt: startTime,
        timerDurationSeconds: duration,
        slotId,
        assignedKeyIndex,
      };
      setSession(active);
      setCurrentQuestion(questionData || session?.questions?.[0] || FALLBACK_AI_QUESTION);
      setActiveTab("interview");

      updateTurnState("AI_SPEAKING");
      stopListening(false);
    },
    [session, enterFullscreen, updateTurnState, stopListening]
  );

  const handleLeaveQueue = useCallback(async () => {
    if (queuePollTimerRef.current) {
      clearInterval(queuePollTimerRef.current);
      queuePollTimerRef.current = null;
    }
    setQueueState({ isQueued: false, position: null, total: null, estimatedWaitSeconds: null, message: null });
    setQueueError("");
    if (session?.id && !session.id.startsWith("local_")) {
      try {
        await fetch(`${API_URL}/api/interviews/${session.id}/leave-queue`, { method: "POST" });
      } catch (_) {}
    }
  }, [session]);

  const handleStartInterview = async () => {
    if (!session) return;
    setPermissionError("");
    setQueueError("");
    // Synchronously unlock mobile audio & SpeechSynthesis inside the tap gesture before any await
    unlockSpeechAndAudio();

    // 1. Mandatory Camera & Microphone Check
    if (!cameraReady || !micReady || !streamRef.current) {
      const granted = await startCamera();
      if (!granted) {
        setPermissionError(
          "Camera and microphone permissions are mandatory to start the interview. Please allow access in your browser."
        );
        return;
      }
    }

    setSessionLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/interviews/${session.id}/start`, {
        method: "POST",
      });

      const data = await res.json().catch(() => ({}));

      // Case A: System Full (Capacity: 4 active + 5 queued = 9 total)
      if (res.status === 429 || data.status === "QUEUE_FULL") {
        setQueueError(
          data.message ||
            "All interview slots and the waiting queue are currently full. Please try again in a few minutes."
        );
        setSessionLoading(false);
        return;
      }

      // Case B: Placed into FIFO Waiting Queue (Slots 1-4 full, waiting in queue)
      if (data.status === "QUEUED") {
        setQueueState({
          isQueued: true,
          position: data.queuePosition,
          total: data.queueTotal,
          estimatedWaitSeconds: data.estimatedWaitSeconds || data.queuePosition * 45,
          message: data.message,
        });
        setSessionLoading(false);

        // Auto-poll queue status every 2 seconds
        if (queuePollTimerRef.current) clearInterval(queuePollTimerRef.current);
        queuePollTimerRef.current = setInterval(async () => {
          try {
            const pollRes = await fetch(`${API_URL}/api/interviews/${session.id}/queue-status`);
            if (!pollRes.ok) return;
            const pollData = await pollRes.json();

            if (pollData.status === "ADMITTED") {
              if (queuePollTimerRef.current) {
                clearInterval(queuePollTimerRef.current);
                queuePollTimerRef.current = null;
              }
              setQueueState({ isQueued: false, position: null, total: null, estimatedWaitSeconds: null, message: null });
              proceedToActiveInterview(pollData.session, pollData.currentQuestion, pollData.slotId, pollData.assignedKeyIndex);
            } else if (pollData.status === "QUEUED") {
              setQueueState((prev) => ({
                ...prev,
                position: pollData.queuePosition,
                total: pollData.queueTotal,
                estimatedWaitSeconds: pollData.estimatedWaitSeconds || pollData.queuePosition * 45,
              }));
            }
          } catch (pollErr) {
            console.warn("Queue polling check notice:", pollErr);
          }
        }, 2000);

        return;
      }

      // Case C: Directly Admitted to an active interview slot (1 to 4)
      if (res.ok && (data.status === "ADMITTED" || data.session)) {
        proceedToActiveInterview(data.session, data.currentQuestion, data.slotId, data.assignedKeyIndex);
        return;
      }

      throw new Error(data.message || "Backend start unavailable");
    } catch (err) {
      console.warn("[InterviewRoom] Starting interview in local mode:", err);
      proceedToActiveInterview(session, session?.questions?.[0], "slot_1", 1);
    } finally {
      setSessionLoading(false);
    }
  };

  /* =========================================================
     SUBMIT ANSWER & ADVANCE QUESTION (5–7 QUESTION CAP FLOW)
     * Records/submits current answer with 5-criteria rubric
     * If final question (Q7 of 7): completes interview and redirects to /interview/results
     * Otherwise advances immediately to next question with ZERO delay
     * Evaluates in background asynchronously using Groq (llama-3.3-70b-versatile)
  ========================================================= */
  const handleSubmitAnswer = async () => {
    if (!session || !currentQuestion || isEndingRef.current) return;
    // Keep mobile speech synthesis unlocked synchronously across Q1 -> Q7 transitions
    unlockSpeechAndAudio();

    const maxQuestions = session.maxQuestions || MAX_QUESTIONS;
    const currentIdx = session.currentQuestionIndex || 0;
    const isFinalQuestion = currentIdx >= maxQuestions - 1;

    // Capture answer text
    const combinedSpoken = [transcript.trim(), interimTranscript.trim()].filter(Boolean).join(" ");
    const answerText = combinedSpoken || finalTranscriptRef.current.trim();
    const answerWords = answerText ? answerText.split(/\s+/).filter(Boolean) : [];
    const inputMode = micEnabledRef.current ? "voice" : "typed";

    const qToSubmit = currentQuestion;

    // 1. Initial 5-criteria evaluation (0ms immediate calculation)
    const localRubric = evaluateAnswerWithRubric(qToSubmit, answerText, inputMode);

    const newAnswer = {
      questionId: qToSubmit.id,
      questionNumber: qToSubmit.questionNumber || (currentIdx + 1),
      questionText: qToSubmit.questionText || qToSubmit.question,
      competency: qToSubmit.subtopic || qToSubmit.topic || qToSubmit.questionType || "AI Technical Competency",
      candidateTranscript: answerText || "No answer provided.",
      rating: localRubric.rating,
      score: localRubric.score,
      overallScore: localRubric.overallScore,
      scores: localRubric.scores,
      feedback: localRubric.feedback,
      rubricFeedback: localRubric.rubricFeedback,
      coveredPoints: localRubric.coveredPoints || [],
      missedPoints: localRubric.missedPoints || [],
      strengths: localRubric.strengths || [],
      improvements: localRubric.improvements || [],
      evaluatedBy: localRubric.evaluatedBy,
      inputMode,
    };

    const accumulatedAnswers = [...answersRef.current, newAnswer];
    answersRef.current = accumulatedAnswers;

    // Invalidate question token so in-flight Whisper/VAD chunks from this question are discarded
    currentQuestionTokenRef.current += 1;
    recognitionTokenRef.current = currentQuestionTokenRef.current;

    // Discard any active MediaRecorder callbacks so old audio does NOT append to next question
    if (mediaRecorderRef.current) {
      try {
        mediaRecorderRef.current.ondataavailable = null;
        mediaRecorderRef.current.onstop = null;
        if (mediaRecorderRef.current.state === "recording") {
          mediaRecorderRef.current.stop();
        }
      } catch {}
    }
    activeVadSessionRef.current = null;

    // Flush any pending SpeechRecognition events
    if (recognitionRef.current && isRecognizingRef.current) {
      try {
        recognitionRef.current.abort();
      } catch {}
      isRecognizingRef.current = false;
    }

    // 2. Clear input fields immediately
    setTranscript("");
    setInterimTranscript("");
    finalTranscriptRef.current = "";

    // 3. Background Async Evaluation with Two-Phase Pre-Fallback Notification
    // Only call Groq if answer has 3 or more words
    if (answerWords.length >= 3 && session.id && !session.id.startsWith("local_")) {
      const syncAnswerWithCoordinator = async () => {
        try {
          const baseBody = {
            questionId: qToSubmit.id,
            transcript: answerText,
            inputMode,
            durationMs: 45000,
            slotId: session.slotId || null,
            assignedKeyIndex: session.assignedKeyIndex || null,
          };

          const res1 = await fetch(`${API_URL}/api/interviews/${session.id}/answers`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-PrepSpaces-TwoPhase-Fallback": "1",
            },
            body: JSON.stringify(baseBody),
          });

          const data1 = await res1.json().catch(() => ({}));

          if (res1.status === 202 && data1.fallbackPending) {
            // Show cooldown notification BEFORE executing backup API call
            setServiceCooldownNotice(
              data1.notificationMessage ||
                "AI service is temporarily busy. We are checking service availability and backup options. Your interview progress is safely saved and will be preserved."
            );
            await new Promise((r) => setTimeout(r, 80));

            await fetch(`${API_URL}/api/interviews/${session.id}/answers`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...baseBody, allowBackupFallback: true }),
            });
          } else if (data1.notificationMessage) {
            setServiceCooldownNotice(data1.notificationMessage);
          }
        } catch (err) {
          console.warn("[InterviewRoom] Background answer evaluation sync error:", err);
        }
      };
      syncAnswerWithCoordinator();
    }

    // 4. If final question in the cap: complete interview cleanly & navigate to results!
    if (isFinalQuestion) {
      setSession((prev) => ({
        ...prev,
        answers: accumulatedAnswers,
      }));
      handleEndInterview("MAX_QUESTIONS_REACHED", accumulatedAnswers);
      return;
    }

    // 5. Otherwise, advance to next question up to maxQuestions
    const nextIdx = currentIdx + 1;
    let nextQ = session.questions[nextIdx];

    if (!nextQ) {
      setSession((prev) => ({
        ...prev,
        answers: accumulatedAnswers,
      }));
      handleEndInterview("MAX_QUESTIONS_REACHED", accumulatedAnswers);
      return;
    }

    setSession((prev) => ({
      ...prev,
      currentQuestionIndex: nextIdx,
      answers: accumulatedAnswers,
    }));
    setCurrentQuestion(nextQ);

    // Pause listening and set turn state to AI_SPEAKING while the next question loads and speaks
    updateTurnState("AI_SPEAKING");
    isPlayingQuestionRef.current = true;
    if (streamRef.current) {
      streamRef.current.getAudioTracks().forEach((track) => {
        track.enabled = false;
      });
    }
    stopListening(false);

    // Synchronously start next question audio/speech inside user tap when cached or in Web Speech mode
    const nextText = String(nextQ.questionText || nextQ.question || "").trim();
    if (nextText && (ttsAudioCacheRef.current.has(nextText) || ttsBackendUnavailableRef.current)) {
      lastSpokenQuestionIdRef.current = nextQ.id;
      playQuestionAudioRef.current?.(nextText);
    }
  };

  const handleRetake = () => {
    answersRef.current = [];
    isEndingRef.current = false;
    currentQuestionTokenRef.current += 1;
    recognitionTokenRef.current = currentQuestionTokenRef.current;
    stopQuestionAudio(false);
    lastSpokenQuestionIdRef.current = null;
    stopListening(true);
    exitFullscreen();
    if (session?.id) {
      sessionStorage.removeItem(`prepspaces_interview_start_${session.id}`);
    }
    sessionStorage.removeItem("prepspaces_last_interview_report");
    localStorage.removeItem("prepwise_interview_session_id");
    setFinalReport(null);
    setTranscript("");
    setInterimTranscript("");
    finalTranscriptRef.current = "";
    setTimeRemaining(180);
    navigate("/interview", { replace: true });
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
        stopListening();
        engine.micManager?.setHardwareMute(true);
      },
      onUnmuteMic: () => {
        startListening();
        engine.micManager?.setHardwareMute(false);
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
        const activeQText = currentQuestionRef.current?.questionText || currentQuestionRef.current?.question || "";
        if (isQuestionEcho(spokenText, activeQText)) {
          console.log("[Nova Guard] Blocked question echo in appended answer:", spokenText);
          return;
        }
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
    playQuestionAudio,
    startListening,
    stopListening,
  ]);

  /* =========================================================
     RENDER: SIMPLIFIED POST-INTERVIEW SCREEN (THANK YOU + Q&A REPORT)
     - Step 1: Clean Thank You Header with Selected Module Name & Overall Score (e.g. 7.5 / 10)
     - Step 2: Minimal Question-by-Question Report (Only 4 Fields: Question, Your Answer, Expected Answer, Rating)
     - All 5 metric cards, Executive Summary, Key Strengths, Areas for Growth & Verdict completely removed
  ========================================================= */
  if (activeTab === "report" && finalReport) {
    const rawQuestions = finalReport.questions || finalReport.questionBreakdown || [];
    const moduleTitle =
      finalReport.module_name ||
      session?.track ||
      selectedModuleObj?.title ||
      currentCourse?.title ||
      "AI Engineering & Generative AI";

    const overallRating =
      finalReport.overall_rating !== undefined && finalReport.overall_rating !== null
        ? Number(finalReport.overall_rating).toFixed(1)
        : finalReport.overallScore !== undefined && finalReport.overallScore !== null
        ? (Number(finalReport.overallScore) / 10).toFixed(1)
        : "0.0";

    return (
      <div className="min-h-screen bg-[#f6f4ee] px-4 py-8 text-[#18181b] md:px-12 selection:bg-[#f97316] selection:text-white">
        {/* Subtle warm glow background */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-[140px]" />
          <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          {/* Top Bar Navigation */}
          <div className="flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => goBack("/dashboard")}
              className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-[#e7e3da] bg-white/90 px-3 sm:px-4 py-2 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-xs backdrop-blur-md active:scale-95 cursor-pointer shrink-0 whitespace-nowrap"
              aria-label="Back to Dashboard"
            >
              <ArrowLeft size={16} />
              <span>Back<span className="hidden min-[440px]:inline"> to Dashboard</span></span>
            </button>

            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  logout();
                }}
                title="Log Out"
                className="flex items-center gap-1 rounded-xl border border-[#e7e3da] bg-white/90 px-2.5 py-1.5 sm:py-2 text-xs font-semibold text-stone-600 hover:text-red-600 hover:border-red-200 transition shadow-2xs cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
              >
                <LogOut size={13} />
                <span className="hidden min-[380px]:inline">Log Out</span>
              </button>
              <Logo size="xs" suffix="Assessment" className="shrink-0" />
            </div>
          </div>

          {/* 1. Thank You Banner / Header */}
          <div className="rounded-3xl border border-[#e7e3da] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c]">
                  <CheckCircle2 size={13} />
                  <span>{moduleTitle}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#18181b] tracking-tight">
                  Thank you for completing the interview!
                </h1>
                <p className="text-xs sm:text-sm text-stone-600">
                  Review your question-by-question performance below with ideal expected answers.
                </p>
              </div>

              {/* Overall Average Rating Display */}
              <div className="flex flex-col items-center justify-center rounded-2xl border border-orange-200/90 bg-orange-50/70 px-6 py-4 shadow-2xs shrink-0 sm:min-w-[150px]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-stone-500 font-bold">
                  Overall Rating
                </span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#ea580c]">
                    {overallRating}
                  </span>
                  <span className="font-mono text-stone-400 font-semibold text-sm">/ 10</span>
                </div>
              </div>
            </div>

            {/* Header Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#e7e3da] pt-5">
              <button
                onClick={handleRetake}
                className="flex items-center gap-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 transition active:scale-95 cursor-pointer"
              >
                <RotateCcw size={15} />
                <span>Retake Interview</span>
              </button>
              <button
                onClick={() => navigate("/learning")}
                className="rounded-xl border border-stone-200 bg-stone-50/70 hover:bg-white hover:border-orange-300 hover:text-[#f97316] px-4 py-2.5 text-xs font-bold text-stone-700 transition cursor-pointer"
              >
                Explore Learning Tracks
              </button>
            </div>
          </div>

          {/* 2. Simple Question-by-Question Report (Only 4 Fields per Question) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-500 font-mono">
                Questions Asked ({rawQuestions.length})
              </h2>
            </div>

            {rawQuestions.map((q, idx) => {
              const questionText = q.question || q.questionText || `Question ${idx + 1}`;
              const studentAnswer =
                (q.student_answer || q.candidateTranscript || q.transcript || "").trim() ||
                "No answer provided.";

              let expectedAnswer = q.expected_answer || q.expectedAnswer || "";
              if (!expectedAnswer) {
                if (q.context) {
                  expectedAnswer = q.context.replace(/^Expected focus areas:\s*/i, "").trim();
                } else if (Array.isArray(q.expectedPoints) && q.expectedPoints.length > 0) {
                  expectedAnswer = q.expectedPoints.join("; ");
                } else {
                  expectedAnswer = "Demonstrate solid architectural reasoning, correct technical terminology, and practical trade-offs.";
                }
              }

              const rating =
                studentAnswer === "No answer provided."
                  ? 0
                  : q.rating !== undefined && q.rating !== null
                  ? q.rating
                  : q.score !== undefined && q.score !== null
                  ? q.score
                  : q.overallScore !== undefined && q.overallScore !== null
                  ? Math.round(q.overallScore)
                  : 0;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#e7e3da] bg-white p-5 sm:p-6 shadow-2xs space-y-4 transition"
                >
                  {/* Top Bar: Question Number + Rating */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#e7e3da]/80 pb-3">
                    <span className="flex items-center gap-2 font-mono text-xs font-bold text-[#ea580c]">
                      <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-100 text-[#ea580c]">
                        {idx + 1}
                      </span>
                      <span>Question {idx + 1}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50/90 px-3 py-1 font-mono text-xs font-bold text-[#ea580c] shadow-2xs">
                      <span>Rating:</span>
                      <strong className="text-sm text-[#f97316]">{rating}</strong>
                      <span className="text-[11px] text-stone-500">/ 10</span>
                    </span>
                  </div>

                  {/* Field 1: Question */}
                  <div className="space-y-1">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-stone-500">
                      Question:
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[#18181b] leading-snug">
                      {questionText}
                    </p>
                  </div>

                  {/* Field 2: Your Answer */}
                  <div className="space-y-1.5 rounded-xl border border-stone-200/90 bg-[#faf8f4]/60 p-3.5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-stone-500">
                      Your Answer:
                    </p>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        studentAnswer === "No answer provided."
                          ? "text-stone-400 italic"
                          : "text-stone-800"
                      }`}
                    >
                      {studentAnswer}
                    </p>
                  </div>

                  {/* Field 3: Expected Answer */}
                  <div className="space-y-1.5 rounded-xl border border-emerald-200/90 bg-emerald-50/40 p-3.5">
                    <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                      Expected Answer:
                    </p>
                    <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                      {expectedAnswer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Retake Button */}
          <div className="pt-2 pb-12 flex justify-center">
            <button
              onClick={handleRetake}
              className="flex items-center gap-2 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition active:scale-95 cursor-pointer"
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
      <div className="min-h-screen bg-[#f6f4ee] px-3 sm:px-4 py-4 sm:py-8 text-[#18181b] md:px-12 selection:bg-[#f97316] selection:text-white">
        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-5 sm:mb-8 flex items-center justify-between gap-2">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-[#e7e3da] bg-white/80 px-3 sm:px-4 py-2 text-xs font-semibold text-stone-700 hover:border-orange-300 hover:text-[#f97316] transition shadow-sm backdrop-blur-md whitespace-nowrap shrink-0 cursor-pointer"
            >
              <ArrowLeft size={16} />
              <span>Back<span className="hidden min-[420px]:inline"> to Overview</span></span>
            </button>

            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <button
                type="button"
                onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                logout();
              }}
                title="Log Out"
                className="flex items-center gap-1 rounded-xl border border-[#e7e3da] bg-white/90 px-2.5 py-1.5 sm:py-2 text-xs font-semibold text-stone-600 hover:text-red-600 hover:border-red-200 transition shadow-2xs cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
              >
                <LogOut size={13} />
                <span>Log Out</span>
              </button>
              <Logo size="sm" suffix="Interview" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-8 items-center">
            {/* Camera Preview Box */}
            <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-3xl border border-[#27272a] bg-[#18181b] shadow-2xl">
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
                <span className={`rounded-lg bg-black/60 px-3 py-1 backdrop-blur-md ${micReady ? "text-emerald-400" : "text-amber-400"}`}>
                  {micReady ? "Mic Ready" : "Mic Required"}
                </span>
              </div>
            </div>

            {/* Interview Details & Start CTA */}
            <div className="rounded-3xl border border-[#e7e3da] bg-white/80 p-8 backdrop-blur-xl shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-lg bg-orange-50 border border-orange-200 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ea580c] mb-4">
                <BookOpen size={13} />
                <span>{currentCourse.badge || currentCourse.title}</span>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-[#18181b] tracking-tight">
                {currentCourse.title} Mock Interview
              </h1>

              <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
                {selectedModuleObj?.description || currentCourse.description}
              </p>

              {/* Course & Module Selection Options */}
              <div className="mt-5 space-y-3.5">
                {/* 1. Select Course */}
                <div>
                  <label htmlFor="course-selector" className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 font-mono mb-1.5">
                    Select Course
                  </label>
                  <div className="relative">
                    <select
                      id="course-selector"
                      value={selectedCourse}
                      onChange={(e) => {
                        const newCourseId = e.target.value;
                        const targetCourse = getCourseById(newCourseId);
                        if (!targetCourse) return;
                        setSelectedCourse(newCourseId);
                        setSelectedModule("all");
                        initializeSession(newCourseId, "all");
                      }}
                      className="w-full rounded-xl border border-stone-200 bg-stone-50/70 px-3.5 py-2.5 text-xs font-semibold text-stone-800 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/20 cursor-pointer shadow-2xs"
                    >
                      {PREPSPACES_COURSES.map((course) => (
                        <option
                          key={course.id}
                          value={course.id}
                          className="text-stone-900 font-medium"
                        >
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 2. Select Course Module */}
                <div>
                  <label htmlFor="module-selector" className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 font-mono mb-1.5">
                    Select Course Module
                  </label>
                  <div className="relative">
                    <select
                      id="module-selector"
                      value={selectedModule}
                      onChange={(e) => {
                        const newModuleId = e.target.value;
                        setSelectedModule(newModuleId);
                        initializeSession(selectedCourse, newModuleId);
                      }}
                      className="w-full rounded-xl border border-stone-200 bg-stone-50/70 px-3.5 py-2.5 text-xs font-semibold text-stone-800 outline-none transition focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-500/20 cursor-pointer shadow-2xs"
                    >
                      {currentCourse.modules.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Mandatory Permissions Checklist (Camera & Microphone ONLY) */}
              <div className="mt-5 rounded-2xl border border-stone-200 bg-stone-50/80 p-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-stone-600 font-mono mb-2.5">
                  Mandatory Requirements
                </p>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className={`flex items-center gap-2.5 p-3 rounded-xl border transition ${
                    cameraReady
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-stone-200 bg-white text-stone-600"
                  }`}>
                    <Video size={16} className={cameraReady ? "text-emerald-600" : "text-stone-400"} />
                    <div>
                      <p className="font-bold">{cameraReady ? "Camera Ready" : "Camera Required"}</p>
                      <p className="text-[10px] text-stone-500 font-mono">{cameraReady ? "Connected" : "Action needed"}</p>
                    </div>
                  </div>

                  <div className={`flex items-center gap-2.5 p-3 rounded-xl border transition ${
                    micReady
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-stone-200 bg-white text-stone-600"
                  }`}>
                    <Mic size={16} className={micReady ? "text-emerald-600" : "text-stone-400"} />
                    <div>
                      <p className="font-bold">{micReady ? "Mic Ready" : "Mic Required"}</p>
                      <p className="text-[10px] text-stone-500 font-mono">{micReady ? "Connected" : "Action needed"}</p>
                    </div>
                  </div>
                </div>
              </div>

              {permissionError && (
                <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-3.5 text-xs text-rose-700 flex items-start gap-2.5">
                  <AlertCircle size={16} className="shrink-0 mt-0.5 text-rose-600" />
                  <div>
                    <p className="font-bold">Permissions Required</p>
                    <p className="mt-0.5 leading-relaxed">{permissionError}</p>
                  </div>
                </div>
              )}

              <div className="mt-5 space-y-2.5 text-xs font-medium text-stone-700">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-[#ea580c] text-[10px] font-bold">
                    ✓
                  </div>
                  <span>3 Minute overall session timer</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-100 text-[#ea580c] text-[10px] font-bold">
                    ✓
                  </div>
                  <span>Real-time voice transcription with automated evaluation</span>
                </div>
              </div>

              {/* Queue Full Error Notice */}
              {queueError && (
                <div className="mt-4 rounded-2xl border border-amber-300 bg-amber-50 p-3.5 text-xs text-amber-900 flex items-start gap-2.5">
                  <AlertCircle size={16} className="shrink-0 mt-0.5 text-amber-700" />
                  <div>
                    <p className="font-bold">Interview Capacity Reached</p>
                    <p className="mt-0.5 leading-relaxed">{queueError}</p>
                  </div>
                </div>
              )}

              <div className="mt-7 pt-5 border-t border-[#e7e3da]">
                {queueState.isQueued ? (
                  <div className="rounded-2xl border border-orange-200 bg-orange-50/80 p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="flex items-center gap-1.5 text-xs font-bold text-orange-800">
                        <Loader2 size={15} className="animate-spin text-orange-600" />
                        Waiting for Next Available Slot
                      </span>
                      <span className="rounded-md bg-orange-200/80 px-2 py-0.5 text-[11px] font-mono font-bold text-orange-950">
                        Position #{queueState.position} of {queueState.total}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      All 4 active interview slots are currently occupied. You will be admitted automatically the instant an active session finishes.
                    </p>
                    <div className="mt-3.5 flex items-center justify-between text-xs text-stone-500 font-mono">
                      <span>Est. wait: ~{queueState.estimatedWaitSeconds || 45}s</span>
                      <button
                        type="button"
                        onClick={handleLeaveQueue}
                        className="text-xs font-semibold text-stone-600 hover:text-stone-900 underline underline-offset-2 cursor-pointer transition"
                      >
                        Leave Queue
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={handleStartInterview}
                    disabled={sessionLoading}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] px-6 py-4 font-bold text-white shadow-xl shadow-orange-500/25 transition hover:scale-[1.02] active:scale-95 disabled:opacity-50"
                  >
                    {sessionLoading ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Checking Slot Availability...</span>
                      </>
                    ) : (
                      <>
                        <span>Start Interview Now</span>
                        <ChevronRight size={18} />
                      </>
                    )}
                  </button>
                )}
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
  const maxQuestions = session?.maxQuestions || MAX_QUESTIONS;
  const isFinalQuestion = currentIdx >= maxQuestions - 1;

  return (
    <div className="relative min-h-screen min-h-[100dvh] lg:h-[100dvh] w-full overflow-x-hidden lg:overflow-hidden bg-[#f6f4ee] text-[#18181b] flex flex-col selection:bg-[#f97316] selection:text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed -top-40 left-1/4 h-96 w-96 rounded-full bg-orange-500/[0.04] blur-[140px]" />
      <div className="pointer-events-none fixed bottom-10 right-10 h-80 w-80 rounded-full bg-amber-500/[0.04] blur-[130px]" />

      {/* Header (Compact 58-62px sticky on mobile, fixed/shrink-0 on desktop) */}
      <header className="sticky top-0 lg:relative z-20 h-[58px] sm:h-[62px] shrink-0 border-b border-[#e7e3da] bg-white/95 backdrop-blur-xl px-3 sm:px-4 md:px-6">
        <div className="flex h-full items-center justify-between gap-2">
          <div className="sm:hidden shrink-0">
            <Logo size="xs" />
          </div>
          <div className="hidden sm:block shrink-0">
            <Logo size="sm" />
          </div>

          {/* Center Timer & Session info (Timer visible on ALL viewports including mobile!) */}
          <div className="flex items-center gap-2 md:gap-4 min-w-0">
            <div className="hidden md:flex items-center gap-2 rounded-full border border-[#e7e3da] bg-stone-50/80 px-3.5 py-1 shadow-2xs max-w-[200px] xl:max-w-[300px]">
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-stone-700 truncate">
                {session?.track || currentQuestion?.topic || "AI Engineering Track"}
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-orange-200/80 bg-orange-50/60 px-2.5 sm:px-3.5 py-1 text-xs font-semibold text-stone-700 shrink-0 whitespace-nowrap">
              <Clock className="h-3.5 w-3.5 text-[#ea580c]" />
              <span className="font-mono font-bold text-stone-900">{formatTimer(timeRemaining)}</span>
            </div>
          </div>

          {/* Right Live indicator, Fullscreen status & Logout */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <div
              className={`hidden sm:flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider border whitespace-nowrap shrink-0 ${
                isFullscreen
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-amber-50 text-amber-700 border-amber-200"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${isFullscreen ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`} />
              <span>{isFullscreen ? "Full-Screen" : "Full-Screen Off"}</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50/60 border border-emerald-200/60 px-2.5 py-1 rounded-full whitespace-nowrap shrink-0">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/80" />
              <span>Live</span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                logout();
              }}
              title="Leave and Log Out"
              className="flex items-center gap-1 rounded-xl border border-[#e7e3da] bg-white px-2.5 py-1.5 text-xs font-semibold text-stone-600 hover:text-red-600 hover:border-red-200 transition shadow-2xs cursor-pointer active:scale-95 whitespace-nowrap shrink-0"
            >
              <LogOut size={13} />
              <span className="hidden sm:inline">Log Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Centralized AI Service Cooldown / Fallback Notification Banner */}
      {serviceCooldownNotice && (
        <div className="relative z-20 border-b border-amber-300 bg-amber-50 px-4 py-2 text-center text-xs font-medium text-amber-900 flex items-center justify-center gap-2">
          <AlertCircle size={15} className="shrink-0 text-amber-600 animate-pulse" />
          <span>{serviceCooldownNotice}</span>
          <button
            onClick={() => setServiceCooldownNotice("")}
            className="ml-2 rounded px-1.5 py-0.5 text-[10px] font-bold text-amber-800 hover:bg-amber-100 transition cursor-pointer shrink-0"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Main Grid: Vertical Flow on Mobile/Tablet (<1024px) & 50/50 Split-Screen on Desktop (>=1024px) */}
      <main className="relative z-10 flex-1 lg:min-h-0 w-full lg:overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* ===================================================
            LEFT PANEL: CANDIDATE VIDEO FEED (50% on Desktop/Laptop)
        =================================================== */}
        <section className="lg:h-full lg:min-h-0 flex flex-col border-b lg:border-b-0 lg:border-r border-[#e7e3da] bg-[#faf8f4]/40 p-2.5 sm:p-4 lg:p-5 lg:overflow-hidden">
          {/* Camera Frame Container */}
          <div className="h-[200px] sm:h-[260px] md:h-[300px] lg:h-auto lg:flex-1 lg:min-h-0 relative flex items-center justify-center overflow-hidden rounded-2xl md:rounded-3xl border border-[#27272a] bg-[#18181b] shadow-xl">
            {/* Top Overlay: Camera & Mic Status Badges */}
            <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 rounded-xl bg-black/65 px-3 py-1.5 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white">
                <span
                  className={`h-2 w-2 rounded-full ${
                    cameraEnabled && cameraReady
                      ? "bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/80"
                      : "bg-rose-500"
                  }`}
                />
                <span className="font-semibold">
                  {cameraEnabled && cameraReady ? "Camera Active" : "Camera Muted"}
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-xl bg-black/65 px-3 py-1.5 backdrop-blur-md border border-white/10 text-[11px] font-mono text-stone-200">
                <Mic
                  size={13}
                  className={
                    micError
                      ? "text-rose-400"
                      : !micReady
                      ? "text-amber-400"
                      : isPlayingQuestion || turnState === "AI_SPEAKING"
                      ? "text-amber-400 animate-pulse"
                      : micEnabled && turnState === "USER_LISTENING"
                      ? "text-emerald-400"
                      : "text-rose-400"
                  }
                />
                <span className={micError ? "text-rose-300 font-semibold" : ""}>
                  {micError
                    ? "Mic Error"
                    : !micReady
                    ? "Mic Disconnected"
                    : isPlayingQuestion || turnState === "AI_SPEAKING"
                    ? "AI Speaking (Mic Paused)"
                    : micEnabled && turnState === "USER_LISTENING"
                    ? "Mic Active"
                    : "Muted"}
                </span>
              </div>
            </div>

            {/* Video Viewport (Naturally Framed, No Face Cropping or Unnatural Zoom) */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-1">
              <video
                ref={setCameraVideoNode}
                autoPlay
                playsInline
                muted
                className="max-h-full max-w-full w-full h-full object-contain scale-x-[-1]"
              />
            </div>

            {/* Camera Off Fallback */}
            {!cameraEnabled && (
              <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#18181b]/95 backdrop-blur-md">
                <div className="text-center text-white p-6">
                  <VideoOff size={42} className="mx-auto text-rose-400 mb-2.5" />
                  <p className="text-sm font-bold">Camera Paused</p>
                  <p className="text-xs text-stone-400 mt-1 max-w-xs">
                    Click the camera button below to turn your video feed back on
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Overlay: Candidate Identity Pill */}
            <div className="absolute bottom-3.5 left-3.5 z-20 rounded-xl bg-black/65 px-3 py-1 backdrop-blur-md text-[11px] font-mono text-stone-300 flex items-center gap-1.5 border border-white/5">
              <span className={`h-1.5 w-1.5 rounded-full ${cameraEnabled && cameraReady ? "bg-emerald-400" : "bg-rose-400"}`} />
              <span>You (Candidate)</span>
            </div>
          </div>

          {/* Centered Media Controls Bar (Underneath Camera Frame) */}
          <div className="shrink-0 pt-3 pb-0.5 flex items-center justify-center gap-3 sm:gap-4">
            {/* Mic Toggle */}
            <button
              onClick={toggleMic}
              title={micEnabled ? "Mute Microphone" : "Start Microphone (Listen to me)"}
              className={`flex h-11 w-20 flex-col items-center justify-center rounded-xl border shadow-2xs transition active:scale-95 cursor-pointer ${
                micEnabled
                  ? "border-[#e7e3da] bg-white text-stone-700 hover:border-orange-300 hover:text-[#f97316]"
                  : "border-orange-300 bg-orange-50/90 text-[#ea580c] ring-2 ring-orange-400/20"
              }`}
            >
              {micEnabled ? <Mic className="h-4 w-4 text-[#ea580c]" /> : <MicOff className="h-4 w-4 text-[#ea580c]" />}
              <span className="mt-0.5 text-[10px] font-bold">{micEnabled ? "Mute" : "Start Mic"}</span>
            </button>

            {/* Camera Toggle */}
            <button
              onClick={toggleCamera}
              title={cameraEnabled ? "Turn Camera Off" : "Turn Camera On"}
              className={`flex h-11 w-20 flex-col items-center justify-center rounded-xl border shadow-2xs transition active:scale-95 cursor-pointer ${
                cameraEnabled
                  ? "border-[#e7e3da] bg-white text-stone-700 hover:border-orange-300 hover:text-[#f97316]"
                  : "border-rose-200 bg-rose-50 text-rose-600"
              }`}
            >
              {cameraEnabled ? <Video className="h-4 w-4" /> : <VideoOff className="h-4 w-4" />}
              <span className="mt-0.5 text-[10px] font-bold">{cameraEnabled ? "Camera" : "Cam Off"}</span>
            </button>

            {/* End Interview */}
            <button
              onClick={() => handleEndInterview("USER_ENDED")}
              className="flex h-11 items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-5 text-xs font-bold text-rose-600 shadow-2xs transition hover:bg-rose-100 active:scale-95 cursor-pointer"
            >
              <PhoneOff className="h-4 w-4" />
              <span>End</span>
            </button>
          </div>
        </section>

        {/* ===================================================
            RIGHT PANEL: AI INTERVIEWER WORKSPACE (50% on Desktop/Laptop)
        =================================================== */}
        <aside className="flex-1 lg:h-full lg:min-h-0 flex flex-col bg-white lg:overflow-hidden">
          {/* Top Subheader: Interviewer Identity & Live Question Badge */}
          <div className="shrink-0 border-b border-[#e7e3da] px-4 py-3 sm:px-6 sm:py-3.5 bg-[#faf8f4]/70">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white shadow-xs">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-sm font-bold text-[#18181b]">
                  Prepspaces AI Interviewer
                </h2>
              </div>

              <span className="font-mono text-xs font-bold text-[#ea580c] bg-orange-50 border border-orange-200/80 px-3 py-1 rounded-lg shadow-2xs">
                Q{Math.min(currentIdx + 1, maxQuestions)} / {maxQuestions}
              </span>
            </div>
          </div>

          {/* Scrollable Content Body (Independent Vertical Scrolling on Desktop, Natural Flow on Mobile/Tablet) */}
          <div className="flex-1 lg:min-h-0 lg:overflow-y-auto px-3.5 py-3.5 sm:px-6 sm:py-4 space-y-3.5 sm:space-y-4">
            {currentQuestion ? (
              <>
                {/* Question Details Card */}
                <div className="rounded-2xl border border-[#e7e3da] bg-[#faf8f4]/60 p-4 sm:p-5 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-orange-700">
                        {currentQuestion.topic || currentQuestion.questionType || "AI TECHNICAL"}
                      </span>
                      {currentQuestion.difficulty && (
                        <span className={`inline-block rounded-full border px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-wider ${
                          currentQuestion.difficulty === "hard"
                            ? "bg-rose-50 text-rose-700 border-rose-200"
                            : currentQuestion.difficulty === "medium"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-emerald-50 text-emerald-700 border-emerald-200"
                        }`}>
                          {currentQuestion.difficulty}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={playQuestionAudio}
                      className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-white px-3 py-1.5 sm:py-1 text-[11px] font-semibold text-stone-700 hover:border-orange-400 hover:text-[#f97316] transition shadow-2xs cursor-pointer min-h-[34px] whitespace-nowrap"
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

                  {ttsBlockedNotice && (
                    <div className="rounded-xl border border-amber-200 bg-amber-50/90 px-3 py-2 text-[11px] text-amber-900 flex items-center justify-between gap-2">
                      <span className="leading-snug">{ttsBlockedNotice}</span>
                      <button
                        type="button"
                        onClick={() => playQuestionAudio()}
                        className="shrink-0 rounded-lg bg-[#f97316] px-2.5 py-1 text-[10px] font-bold text-white hover:bg-[#ea580c] transition cursor-pointer whitespace-nowrap"
                      >
                        Play Audio
                      </button>
                    </div>
                  )}

                  <h1 className="text-base sm:text-lg lg:text-xl font-bold leading-snug tracking-tight text-[#18181b]">
                    {currentQuestion.questionText}
                  </h1>

                  {currentQuestion.context && (
                    <div className="text-xs text-stone-600 leading-relaxed bg-white p-3.5 rounded-xl border border-[#e7e3da] shadow-2xs">
                      <span className="font-semibold text-stone-800">💡 Context: </span>
                      {currentQuestion.context}
                    </div>
                  )}
                </div>

                {/* Live Spoken Response Card */}
                <div className="rounded-2xl border border-[#e7e3da] bg-white p-4 sm:p-5 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[#e7e3da]/70">
                    <div className="flex flex-wrap items-center gap-2 min-w-0">
                      <MessageSquare className="h-4 w-4 text-[#ea580c] shrink-0" />
                      <h3 className="font-bold text-sm text-[#18181b] whitespace-nowrap">
                        Live Spoken Response
                      </h3>
                      {/* Visual Turn Indicator */}
                      {(isPlayingQuestion || turnState === "AI_SPEAKING") ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold text-amber-800 border border-amber-200/90 shadow-2xs animate-pulse">
                          <Volume2 className="h-3.5 w-3.5 text-amber-600 animate-bounce" />
                          <span>AI is speaking... (Mic paused)</span>
                        </span>
                      ) : micEnabled && turnState === "USER_LISTENING" ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700 border border-emerald-300 shadow-2xs animate-in fade-in duration-200">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span>Listening — Your turn to speak</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-0.5 text-[10px] font-semibold text-stone-600 border border-stone-200">
                          <MicOff className="h-3 w-3 text-stone-400" />
                          <span>Muted</span>
                        </span>
                      )}

                      {isWhisperTranscribing && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-0.5 text-[10px] font-bold text-[#f97316] border border-orange-200/80 animate-in fade-in duration-150">
                          <span className="h-2 w-2 rounded-full bg-[#f97316] animate-pulse" />
                          <span>Transcribing...</span>
                        </span>
                      )}
                    </div>

                    {transcript && (
                      <button
                        type="button"
                        onClick={() => {
                          setTranscript("");
                          setInterimTranscript("");
                          finalTranscriptRef.current = "";
                        }}
                        className="text-xs text-stone-400 hover:text-stone-700 font-medium underline cursor-pointer px-1 py-0.5"
                        title="Clear response"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  {/* AI Speaking Banner with Skip Option */}
                  {(isPlayingQuestion || turnState === "AI_SPEAKING") && (
                    <div className="flex items-center justify-between gap-2 rounded-xl border border-amber-200/90 bg-amber-50/80 px-3.5 py-2 text-xs text-amber-900 animate-in fade-in duration-150">
                      <div className="flex items-center gap-2 min-w-0">
                        <Volume2 className="h-4 w-4 text-amber-600 shrink-0 animate-pulse" />
                        <span className="truncate">
                          <strong>AI is speaking...</strong> Mic paused to prevent audio feedback. Your turn to speak begins in a moment.
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => stopQuestionAudio(true)}
                        className="rounded-lg bg-amber-600 hover:bg-amber-700 text-white px-2.5 py-1 text-[11px] font-bold transition shadow-2xs cursor-pointer shrink-0"
                      >
                        Skip to My Turn
                      </button>
                    </div>
                  )}

                  {micError && (
                    <div className="flex items-center justify-between gap-2 rounded-xl border border-rose-200 bg-rose-50/90 px-3 py-2 text-xs text-rose-800">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <AlertCircle className="h-4 w-4 shrink-0 text-rose-600" />
                        <span className="truncate">{micError}</span>
                      </div>
                      <button
                        type="button"
                        onClick={startCamera}
                        className="shrink-0 rounded-lg bg-rose-600 px-2 py-0.5 text-[11px] font-bold text-white hover:bg-rose-700 transition cursor-pointer"
                      >
                        Reconnect Mic
                      </button>
                    </div>
                  )}

                  {!micEnabled && !micError && !isPlayingQuestion && turnState !== "AI_SPEAKING" && (
                    <div className="flex items-center justify-between gap-2 rounded-xl border border-orange-200/90 bg-orange-50/80 px-3.5 py-2 text-xs text-stone-800 animate-in fade-in duration-150">
                      <div className="flex items-center gap-2 min-w-0">
                        <MicOff className="h-4 w-4 text-[#ea580c] shrink-0" />
                        <span className="truncate">Microphone is off by default. Click <strong>Start Mic</strong> when ready to speak.</span>
                      </div>
                      <button
                        type="button"
                        onClick={toggleMic}
                        className="rounded-lg bg-[#f97316] hover:bg-[#ea580c] text-white px-3 py-1.5 text-xs font-bold transition shadow-2xs cursor-pointer flex items-center gap-1.5 shrink-0"
                      >
                        <Mic size={13} />
                        <span>Start Mic</span>
                      </button>
                    </div>
                  )}

                  <textarea
                    rows={6}
                    value={
                      transcript
                        ? (interimTranscript ? `${transcript} ${interimTranscript}` : transcript)
                        : (interimTranscript || "")
                    }
                    onChange={(e) => {
                      setTranscript(e.target.value);
                      finalTranscriptRef.current = e.target.value;
                    }}
                    placeholder={
                      isPlayingQuestion || turnState === "AI_SPEAKING"
                        ? "AI is speaking the question... (Mic will open automatically when finished)"
                        : "Listening — Your turn to speak, or type here..."
                    }
                    className="w-full resize-none rounded-xl border border-stone-200/80 bg-[#faf8f4]/60 p-3.5 text-sm text-stone-800 leading-relaxed outline-none placeholder:text-stone-400 focus:bg-white focus:border-[#f97316] focus:ring-1 focus:ring-orange-300 transition"
                  />

                  {interimTranscript && (
                    <div className="flex items-center gap-2 px-1 text-xs text-stone-500 italic animate-in fade-in duration-150">
                      <span className="h-2 w-2 rounded-full bg-[#f97316] animate-pulse shrink-0" />
                      <span className="truncate">Hearing: &ldquo;{interimTranscript}&rdquo;</span>
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

          {/* Action Bar (Pinned cleanly at bottom of Right Panel) */}
          <div className="shrink-0 border-t border-[#e7e3da] p-3.5 sm:p-4 bg-[#faf8f4]/95 backdrop-blur-md">
            <button
              onClick={handleSubmitAnswer}
              disabled={!currentQuestion}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] px-5 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition hover:scale-[1.01] active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              <span>{isFinalQuestion ? "Submit & View Results" : "Submit Answer & Next Question"}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </aside>
      </main>

      {/* ===================================================
          FULL-SCREEN EXIT WARNING & CONFIRMATION MODAL
          Objective: ESC Key Detection & Exit Warning Protection
      =================================================== */}
      {showExitWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-stone-200 bg-white p-6 md:p-8 shadow-2xl text-center space-y-5 animate-in zoom-in-95 duration-200">
            {/* Warning Icon */}
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
              <AlertCircle size={28} />
            </div>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800">
              <span>Interview Session Paused</span>
            </div>

            {/* Title */}
            <h2 className="text-xl md:text-2xl font-black text-[#18181b] tracking-tight">
              Are you sure you want to leave the interview?
            </h2>

            {/* Message */}
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed max-w-md mx-auto">
              You are currently in an active interview. Leaving full-screen mode may interrupt your interview session. Are you sure you want to exit?
            </p>

            {/* Proctoring monitoring event display */}
            {exitEvents.length > 0 && (
              <div className="rounded-xl bg-stone-50 border border-stone-200/80 px-4 py-2 text-[11px] font-mono text-stone-500 flex items-center justify-between">
                <span>Monitoring Event:</span>
                <span className="font-bold text-amber-700 uppercase">
                  {exitEvents[exitEvents.length - 1].type.replace("_", " ")}
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleConfirmLeaveInterview}
                className="w-full sm:w-auto rounded-2xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 py-3.5 px-5 text-xs md:text-sm font-bold transition active:scale-95 cursor-pointer"
              >
                Leave Interview
              </button>

              <button
                type="button"
                onClick={handleContinueInterview}
                className="w-full sm:flex-1 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] py-3.5 px-6 text-xs md:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Continue Interview</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
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