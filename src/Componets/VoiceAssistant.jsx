import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Mic,
  MicOff,
  Send,
  X,
  Bot,
  User,
  Volume2,
  Sparkles,
  CheckCircle2,
  Loader2,
  Trash2,
  Activity,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Unlock,
  Radio,
  Repeat,
} from "lucide-react";
import { useVoiceEngine } from "../voice/VoiceProvider.jsx";
import { VoiceState } from "../voice/VoiceState.js";
import VoiceEnrollmentModal from "../voice/components/VoiceEnrollmentModal.jsx";
import { SHOW_NOVA_AI } from "../config/features.js";

export default function VoiceAssistant() {
  if (!SHOW_NOVA_AI) {
    return null;
  }
  return <VoiceAssistantContent />;
}

function VoiceAssistantContent() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [showDevConsole, setShowDevConsole] = useState(false);
  const chatBottomRef = useRef(null);

  const {
    state,
    status,
    isListening,
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
    lastVerification,
    isEnrollModalOpen,
    setIsEnrollModalOpen,
    startSession,
    stopSession,
    cancelSession,
    submitText,
    speak,
  } = useVoiceEngine();

  // If engine activates (e.g. via Shift+N), automatically open the floating panel
  useEffect(() => {
    if (
      isListening ||
      state === VoiceState.ACTIVATING ||
      state === VoiceState.LISTENING ||
      state === VoiceState.SPEECH_DETECTED ||
      state === VoiceState.RECORDING ||
      state === VoiceState.FINALIZING_AUDIO ||
      state === VoiceState.TRANSCRIBING ||
      state === VoiceState.INTERPRETING_COMMAND ||
      state === VoiceState.EXECUTING_COMMAND
    ) {
      setOpen(true);
    }
  }, [isListening, state]);

  // Auto-scroll chat to latest message
  useEffect(() => {
    if (open) {
      chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleToggle = () => {
    if (state !== VoiceState.IDLE) {
      cancelSession("USER_TOGGLE");
      setOpen(false);
    } else {
      startSession("assistant");
      setOpen(true);
    }
  };

  const handleClose = () => {
    cancelSession("USER_CLOSED");
    setOpen(false);
  };

  const handleSendText = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;
    const text = inputText.trim();
    setInputText("");
    submitText(text);
  };

  return (
    <>
      {/* Floating Activator Button */}
      <button
        onClick={handleToggle}
        aria-label="Activate Nova voice assistant"
        className={`fixed bottom-6 left-6 z-[100] flex h-14 items-center gap-3 rounded-full border bg-[#18181b]/95 px-4 text-left shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all hover:scale-105 font-sans ${
          isListening
            ? "border-orange-400 shadow-[0_0_30px_rgba(249,115,22,0.4)] ring-2 ring-orange-500/50"
            : "border-stone-800 hover:border-orange-500/50"
        }`}
      >
        <span
          style={{ transform: `scale(${1 + audioLevel * 0.4})` }}
          className={`rounded-full p-2 text-white transition-transform ${
            isListening
              ? "bg-[#f97316] shadow-[0_0_15px_rgba(249,115,22,0.8)]"
              : "bg-gradient-to-tr from-[#f97316] to-[#ea580c]"
          }`}
        >
          <Mic size={18} />
        </span>
        <span className="pr-2">
          <b className="block text-sm leading-tight text-white flex items-center gap-1 font-bold">
            Nova AI <Sparkles size={12} className="text-[#f97316]" />
          </b>
          <small className="text-xs text-stone-400">
            {isListening ? `🎙 ${state}` : "Real-time Voice · Shift+N"}
          </small>
        </span>
      </button>

      {/* Floating Unified Assistant Panel */}
      {open && (
        <div className="fixed bottom-24 left-6 z-[99] flex w-[min(94vw,430px)] max-h-[660px] flex-col rounded-3xl border border-stone-800 bg-[#18181b]/98 text-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl font-sans">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-800 p-4 bg-gradient-to-r from-stone-900 to-[#18181b] rounded-t-3xl">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white shadow-[0_0_12px_rgba(249,115,22,0.4)]">
                <Bot size={18} />
              </span>
              <div>
                <h2 className="text-base font-extrabold text-white flex items-center gap-1.5">
                  Nova AI <Sparkles size={13} className="text-[#f97316]" />
                </h2>
                <p className="text-[11px] text-stone-400">Real-time Voice & Streaming Agent</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setShowDevConsole((prev) => !prev)}
                title={showDevConsole ? "Hide Diagnostics" : "Show Diagnostics & Latencies"}
                className={`rounded-lg p-1.5 transition ${
                  showDevConsole ? "bg-orange-500/20 text-orange-400" : "text-stone-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Activity size={16} />
              </button>
              <button
                type="button"
                onClick={() => setMessages([])}
                title="Clear conversation"
                className="rounded-lg p-1.5 text-stone-400 hover:bg-white/10 hover:text-white transition"
              >
                <Trash2 size={16} />
              </button>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close assistant"
                className="rounded-lg p-1.5 text-stone-400 hover:bg-white/10 hover:text-white transition"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Mode Selector & Voice Lock Toolbar */}
          <div className="flex items-center justify-between border-b border-stone-800/80 bg-stone-950/70 px-4 py-2 text-[11px]">
            {/* Listening Mode Selector (Requirement 3: Explicit Mode A & Mode B) */}
            <div className="flex items-center gap-1 bg-stone-900 border border-stone-800 rounded-xl p-0.5 font-mono text-[10px]">
              <button
                type="button"
                onClick={() => setListeningMode("command")}
                className={`px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1 ${
                  listeningMode === "command"
                    ? "bg-[#f97316] text-[#18181b] shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
                title="Command Mode: One-shot voice execution, stops listening immediately after command"
              >
                <Radio size={11} />
                <span>Command</span>
              </button>
              <button
                type="button"
                onClick={() => setListeningMode("continuous")}
                className={`px-2.5 py-1 rounded-lg font-bold transition flex items-center gap-1 ${
                  listeningMode === "continuous"
                    ? "bg-[#f97316] text-[#18181b] shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
                title="Continuous Mode: Keeps listening across multiple completed commands"
              >
                <Repeat size={11} />
                <span>Continuous</span>
              </button>
            </div>

            {/* Voice Security & Lock */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsEnrollModalOpen(true)}
                className={`flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold text-[10px] transition ${
                  isProfileEnrolled
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25"
                    : "bg-orange-500/15 text-orange-300 border border-orange-500/30 hover:bg-orange-500/25"
                }`}
                title="Voice Biometrics & Registration"
              >
                {isProfileEnrolled ? (
                  <>
                    <ShieldCheck size={11} />
                    <span>Voice ID ✓</span>
                  </>
                ) : (
                  <>
                    <ShieldAlert size={11} />
                    <span>Register</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  if (!isProfileEnrolled) {
                    setIsEnrollModalOpen(true);
                  } else {
                    setVoiceLock(!voiceLockEnabled);
                  }
                }}
                className={`flex items-center gap-1 rounded-lg px-2 py-0.5 font-mono text-[10px] font-bold transition ${
                  voiceLockEnabled
                    ? "bg-orange-500/20 text-[#f97316] border border-orange-500/30"
                    : "text-stone-400 hover:text-stone-200"
                }`}
                title={
                  voiceLockEnabled
                    ? "Voice Lock is Active: Only your verified voice can execute actions"
                    : "Voice Lock is Disabled: Open to any speaker"
                }
              >
                {voiceLockEnabled ? <Lock size={10} /> : <Unlock size={10} />}
                <span>{voiceLockEnabled ? "Lock ON" : "Lock OFF"}</span>
              </button>
            </div>
          </div>

          {/* Developer Diagnostics Console (Requirement 11) */}
          {showDevConsole && (
            <div className="border-b border-stone-800 bg-black/90 p-3 text-[10px] text-stone-300 font-mono space-y-1">
              <div className="flex items-center justify-between text-orange-400 font-bold border-b border-stone-800 pb-1">
                <span>STATE: {state}</span>
                <span>MODE: {listeningMode.toUpperCase()}</span>
              </div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-1 text-stone-400">
                <div>Endpointing: <strong className="text-white">{diagnostics?.durations?.endpointingMs ? `${diagnostics.durations.endpointingMs}ms` : "—"}</strong></div>
                <div>Audio Encoding: <strong className="text-white">{diagnostics?.durations?.audioEncodingMs ? `${diagnostics.durations.audioEncodingMs}ms` : "—"}</strong></div>
                <div>Whisper Turbo: <strong className="text-white">{diagnostics?.durations?.transcriptionMs ? `${diagnostics.durations.transcriptionMs}ms` : "—"}</strong></div>
                <div>Intent Latency: <strong className="text-white">{diagnostics?.durations?.intentMs ? `${diagnostics.durations.intentMs}ms` : "—"}</strong></div>
                <div>Total Latency: <strong className="text-emerald-400">{diagnostics?.durations?.totalLatencyMs ? `${diagnostics.durations.totalLatencyMs}ms` : "—"}</strong></div>
                <div>Pipeline: <strong className={diagnostics?.isFastPath ? "text-emerald-400" : "text-amber-400"}>{diagnostics?.isFastPath ? "FAST PATH (<50ms)" : (diagnostics ? "GROQ LLM" : "—")}</strong></div>
              </div>
            </div>
          )}

          {/* Listening / Voice Hero Section with Energy Ring */}
          <div className="border-b border-stone-800 bg-gradient-to-b from-stone-900 to-[#18181b] p-4 text-center">
            <div className="relative mx-auto my-1 flex h-16 w-16 items-center justify-center">
              {isListening && (
                <span
                  style={{
                    transform: `scale(${1.2 + audioLevel * 1.5})`,
                    opacity: 0.3 + audioLevel * 0.7,
                  }}
                  className="absolute inset-0 rounded-full bg-[#f97316] transition-transform duration-75"
                />
              )}
              <button
                onClick={isListening ? () => cancelSession("USER_MIC_CLICK") : () => startSession("assistant")}
                style={{
                  transform: `scale(${1 + audioLevel * 0.15})`,
                }}
                className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all ${
                  isListening
                    ? "border-orange-400 bg-[#f97316] text-white shadow-[0_0_24px_rgba(249,115,22,0.6)]"
                    : "border-stone-700 bg-stone-800 text-orange-400 hover:bg-[#f97316] hover:text-white hover:shadow-[0_0_18px_rgba(249,115,22,0.5)]"
                }`}
                title={isListening ? "Stop listening" : "Click to speak"}
              >
                <Mic size={24} className={isListening ? "animate-pulse" : ""} />
              </button>
            </div>

            <p className="mt-2 text-xs font-semibold text-stone-200 line-clamp-2 min-h-[28px] flex items-center justify-center px-2">
              {status}
            </p>

            {/* Provisional Live Transcript */}
            {isListening && provisionalTranscript && (
              <p className="mt-1 rounded-lg bg-stone-900/80 px-3 py-1 text-center text-[11px] text-stone-300 italic border border-stone-700 animate-pulse">
                &ldquo;{provisionalTranscript}…&rdquo;
              </p>
            )}

            {/* Finalized Transcript */}
            {transcript && (
              <p className="mt-1.5 rounded-lg bg-black/40 px-3 py-1 text-center text-[11px] text-orange-400 italic border border-orange-500/20 animate-fade-in">
                &ldquo;{transcript}&rdquo;
              </p>
            )}

            {/* Verification Status Feedback Tag (Only if voice lock active and score is a valid finite number) */}
            {voiceLockEnabled &&
              lastVerification &&
              typeof lastVerification.similarity === "number" &&
              !isNaN(lastVerification.similarity) &&
              state !== VoiceState.RECORDING &&
              state !== VoiceState.FINALIZING_AUDIO && (
                <div className="mt-2 flex justify-center">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-mono font-bold ${
                      lastVerification.status === "verified"
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        : "bg-rose-500/15 text-rose-400 border border-rose-500/30"
                    }`}
                  >
                    {lastVerification.status === "verified" ? (
                      <>
                        <CheckCircle2 size={11} /> Verified Speaker ({Math.round(lastVerification.similarity * 100)}%)
                      </>
                    ) : (
                      <>
                        <ShieldAlert size={11} /> Voice Lock: Unverified ({Math.round(lastVerification.similarity * 100)}%)
                      </>
                    )}
                  </span>
                </div>
              )}
          </div>

          {/* Conversation History Section */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 max-h-[220px] min-h-[140px] text-xs">
            {messages.length === 0 ? (
              <div className="py-5 text-center text-stone-400">
                <p className="text-xs text-stone-400">Quick commands:</p>
                <div className="mt-2.5 flex flex-wrap justify-center gap-1.5">
                  {[
                    "Open OOP",
                    "Open interview",
                    "What is polymorphism?",
                    "Open home",
                    "Stop listening",
                  ].map((hint) => (
                    <button
                      key={hint}
                      onClick={() => {
                        setInputText(hint);
                        submitText(hint);
                      }}
                      className="rounded-full border border-stone-700 bg-stone-800/80 px-2.5 py-1 text-[11px] text-orange-300 hover:border-orange-500 hover:text-white transition"
                    >
                      {hint}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((item, index) => {
                const isUser = item.sender === "user" || item.role === "user";
                return (
                  <div
                    key={item.id || index}
                    className={`flex gap-2 ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    {!isUser && (
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white mt-0.5 shadow-sm">
                        <Bot size={13} />
                      </div>
                    )}
                    <div
                      className={`max-w-[82%] rounded-xl px-3 py-2 leading-relaxed transition-all ${
                        isUser
                          ? "bg-[#f97316] text-[#18181b] font-bold shadow-sm shadow-orange-500/20"
                          : "border border-stone-800 bg-[#27272a]/80 text-stone-100"
                      }`}
                    >
                      <div>{item.text || (state === VoiceState.INTERPRETING_COMMAND ? "…" : "")}</div>
                      {!isUser && item.text && (
                        <button
                          type="button"
                          onClick={() => speak(item.text)}
                          className="mt-1 inline-flex items-center gap-1 text-[10px] text-orange-400 hover:text-white transition"
                        >
                          <Volume2 size={11} /> Listen
                        </button>
                      )}
                    </div>
                    {isUser && (
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-stone-700 bg-stone-800 text-orange-400 mt-0.5">
                        <User size={12} />
                      </div>
                    )}
                  </div>
                );
              })
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Quick Chat Input Box (Canonical Pipeline: Typed text flows through same router/Groq) */}
          <form
            onSubmit={handleSendText}
            className="flex gap-2 border-t border-stone-800 p-3 bg-stone-950 rounded-b-3xl"
          >
            <input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Nova or speak (Shift+N)..."
              disabled={state === VoiceState.INTERPRETING_COMMAND}
              className="min-w-0 flex-1 rounded-xl border border-stone-800 bg-[#27272a] px-3 py-2 text-xs text-white placeholder:text-stone-500 outline-none focus:border-orange-500 transition"
            />
            <button
              type="submit"
              disabled={state === VoiceState.INTERPRETING_COMMAND || !inputText.trim()}
              aria-label="Send message"
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#f97316] text-[#18181b] font-bold transition-all hover:bg-[#ea580c] disabled:opacity-40"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}

      {/* Voice Enrollment & Verification Modal */}
      <VoiceEnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={() => setIsEnrollModalOpen(false)}
      />
    </>
  );
}
