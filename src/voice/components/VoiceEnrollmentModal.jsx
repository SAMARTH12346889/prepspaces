import React, { useState, useEffect, useRef } from "react";
import {
  Mic,
  CheckCircle2,
  ShieldCheck,
  ShieldAlert,
  Volume2,
  RotateCcw,
  Trash2,
  X,
  Sparkles,
  AlertCircle,
  Loader2,
  Lock,
  Unlock,
} from "lucide-react";
import { useVoiceEngine } from "../VoiceProvider.jsx";
import { MicrophoneManager } from "../MicrophoneManager.js";

const ENROLLMENT_PHRASES = [
  {
    step: 1,
    title: "Primary Activation Phrase",
    phrase: "Hey Nova, activate my voice authentication",
    hint: "Speak at your natural volume and pace",
  },
  {
    step: 2,
    title: "Technical Phonetic Phrase",
    phrase: "Object-oriented programming uses classes and objects",
    hint: "Enunciates consonant clusters and formant transitions",
  },
  {
    step: 3,
    title: "Identity Confirmation Phrase",
    phrase: "Nova, confirm my identity for future sessions",
    hint: "Finalizes your calibrated acoustic signature",
  },
];

export default function VoiceEnrollmentModal({ isOpen, onClose }) {
  const {
    isProfileEnrolled,
    checkEnrolledProfile,
    voiceLockEnabled,
    setVoiceLock,
    deleteVoiceProfile,
    engine,
  } = useVoiceEngine();

  // Enrollment process state
  const [currentStep, setCurrentStep] = useState(0); // 0, 1, 2 for the 3 samples
  const [samples, setSamples] = useState([null, null, null]);
  const [isRecordingSample, setIsRecordingSample] = useState(false);
  const [activeRecordingIndex, setActiveRecordingIndex] = useState(null);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [audioLevel, setAudioLevel] = useState(0);
  const [enrolling, setEnrolling] = useState(false);
  const [enrollmentResult, setEnrollmentResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Verification tester state
  const [testingVoice, setTestingVoice] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [testAudioLevel, setTestAudioLevel] = useState(0);

  // Dedicated mic manager for enrollment
  const micManagerRef = useRef(null);
  const timerRef = useRef(null);
  const animFrameRef = useRef(null);

  useEffect(() => {
    micManagerRef.current = new MicrophoneManager();
    return () => {
      micManagerRef.current?.cleanup();
      if (timerRef.current) clearInterval(timerRef.current);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Poll audio level when recording
  const startLevelMeter = (isTest = false) => {
    const updateLevel = () => {
      if (micManagerRef.current) {
        const lvl = micManagerRef.current.getAudioLevel();
        if (isTest) {
          setTestAudioLevel(lvl);
        } else {
          setAudioLevel(lvl);
        }
      }
      animFrameRef.current = requestAnimationFrame(updateLevel);
    };
    animFrameRef.current = requestAnimationFrame(updateLevel);
  };

  const stopLevelMeter = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    setAudioLevel(0);
    setTestAudioLevel(0);
  };

  // Start recording a specific sample
  const handleStartRecording = async (index) => {
    setErrorMessage("");
    try {
      setActiveRecordingIndex(index);
      setIsRecordingSample(true);
      setRecordingDuration(0);

      await micManagerRef.current.startRecording();
      startLevelMeter(false);

      const startTime = Date.now();
      timerRef.current = setInterval(() => {
        setRecordingDuration(Math.floor((Date.now() - startTime) / 1000));
      }, 200);
    } catch (err) {
      console.error("[VoiceEnrollment] Mic error:", err);
      setErrorMessage("Could not access microphone. Please ensure microphone permissions are granted.");
      setIsRecordingSample(false);
      setActiveRecordingIndex(null);
    }
  };

  // Stop recording the active sample
  const handleStopRecording = async (index) => {
    if (!isRecordingSample || activeRecordingIndex !== index) return;

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    stopLevelMeter();

    try {
      const recording = await micManagerRef.current.stopRecording();
      setIsRecordingSample(false);
      setActiveRecordingIndex(null);

      if (!recording || recording.durationSec < 0.8) {
        setErrorMessage("Sample was too short. Please speak the full phrase clearly.");
        return;
      }

      setSamples((prev) => {
        const next = [...prev];
        next[index] = {
          audioBase64: recording.audioBase64,
          durationSec: recording.durationSec,
        };
        return next;
      });

      // Advance step if next is not recorded
      if (index < 2 && !samples[index + 1]) {
        setCurrentStep(index + 1);
      }
    } catch (err) {
      console.error("[VoiceEnrollment] Stop recording error:", err);
      setErrorMessage("Failed to encode audio sample.");
      setIsRecordingSample(false);
      setActiveRecordingIndex(null);
    }
  };

  // Submit all 3 samples to backend
  const handleCompleteEnrollment = async () => {
    const rawAudioSamples = samples.map((s) => s?.audioBase64).filter(Boolean);
    if (rawAudioSamples.length < 3) {
      setErrorMessage("Please record all 3 guided voice samples before completing registration.");
      return;
    }

    setEnrolling(true);
    setErrorMessage("");

    try {
      const res = await engine.speakerService.enroll({
        userId: "default_user",
        samples: rawAudioSamples,
        consentGiven: true,
      });

      setEnrollmentResult(res);
      await checkEnrolledProfile();
      setVoiceLock(true); // Automatically activate Voice Lock upon enrollment
    } catch (err) {
      console.error("[VoiceEnrollment] Enrollment failed:", err);
      setErrorMessage(err.message || "Failed to register voice template. Please try recording the phrases again.");
    } finally {
      setEnrolling(false);
    }
  };

  // Test current speaker against enrolled profile
  const handleStartVoiceTest = async () => {
    setTestResult(null);
    setErrorMessage("");
    try {
      setTestingVoice(true);
      await micManagerRef.current.startRecording();
      startLevelMeter(true);
    } catch (err) {
      console.error("[VoiceTest] Mic error:", err);
      setErrorMessage("Could not start microphone for voice testing.");
      setTestingVoice(false);
    }
  };

  const handleStopVoiceTest = async () => {
    if (!testingVoice) return;
    stopLevelMeter();

    try {
      const recording = await micManagerRef.current.stopRecording();
      setTestingVoice(false);

      if (!recording || recording.durationSec < 0.6) {
        setErrorMessage("Spoken test was too brief.");
        return;
      }

      const verification = await engine.speakerService.verify({
        userId: "default_user",
        audioBase64: recording.audioBase64,
      });

      setTestResult(verification);
    } catch (err) {
      console.error("[VoiceTest] Verification error:", err);
      setErrorMessage("Voice test failed to connect to verification engine.");
      setTestingVoice(false);
    }
  };

  // Reset or delete profile
  const handleDeleteProfile = async () => {
    if (window.confirm("Are you sure you want to delete your registered voice profile? Voice Lock will be turned off.")) {
      await deleteVoiceProfile();
      setSamples([null, null, null]);
      setEnrollmentResult(null);
      setTestResult(null);
      setCurrentStep(0);
    }
  };

  if (!isOpen) return null;

  const allSamplesReady = samples.every(Boolean);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-fade-in font-sans">
      <div className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-stone-800 bg-[#18181b] text-white shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-800 bg-gradient-to-r from-stone-900 to-[#18181b] p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]">
              <ShieldCheck size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black tracking-tight text-white">
                  Nova Voice Lock & Identity Registration
                </h2>
                <span className="rounded-full bg-orange-500/10 border border-orange-500/30 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#f97316]">
                  Acoustic Biometrics
                </span>
              </div>
              <p className="mt-0.5 text-xs text-stone-400">
                Register your unique vocal profile so Nova verifies your voice before processing actions
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-stone-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Current Status Pill */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-stone-800 bg-stone-900/60 p-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                  isProfileEnrolled
                    ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                    : "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                }`}
              >
                {isProfileEnrolled ? <ShieldCheck size={18} /> : <ShieldAlert size={18} />}
              </div>
              <div>
                <p className="text-xs font-bold text-white">
                  {isProfileEnrolled ? "Voice Profile Registered ✓" : "Voice Not Registered"}
                </p>
                <p className="text-[11px] text-stone-400">
                  {isProfileEnrolled
                    ? "Your acoustic template is securely stored and ready for verification"
                    : "Enroll 3 voice samples to create your calibrated acoustic signature"}
                </p>
              </div>
            </div>

            {/* Voice Lock Toggle Switch */}
            <div className="flex items-center gap-3 border-t sm:border-t-0 sm:border-l border-stone-800 pt-3 sm:pt-0 sm:pl-4">
              <div className="text-right">
                <span className="block text-xs font-bold text-white">
                  Voice Lock
                </span>
                <span className="block text-[10px] text-stone-400">
                  {voiceLockEnabled ? "Verified Only" : "Open Access"}
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (!isProfileEnrolled && !voiceLockEnabled) {
                    setErrorMessage("Please complete voice registration first before enabling Voice Lock.");
                    return;
                  }
                  setVoiceLock(!voiceLockEnabled);
                }}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  voiceLockEnabled ? "bg-[#f97316]" : "bg-stone-700"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    voiceLockEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Error Banner */}
          {errorMessage && (
            <div className="flex items-start gap-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3.5 text-xs text-rose-300">
              <AlertCircle size={16} className="shrink-0 mt-0.5 text-rose-400" />
              <div className="flex-1">
                <p className="font-semibold">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* ───────────────────────────────────────────────────────────
              SECTION 1: MULTI-SAMPLE ENROLLMENT WORKFLOW
          ─────────────────────────────────────────────────────────── */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-extrabold text-white flex items-center gap-1.5">
                  <Sparkles size={14} className="text-[#f97316]" />
                  <span>3-Sample Voice Calibration</span>
                </h3>
                <p className="text-[11px] text-stone-400">
                  Record each prompt clearly. Nova extracts 128 spectral acoustic features to ensure only your voice executes commands.
                </p>
              </div>
              {isProfileEnrolled && (
                <button
                  onClick={handleDeleteProfile}
                  className="flex items-center gap-1 rounded-lg border border-rose-500/30 bg-rose-500/10 px-2.5 py-1 text-[11px] font-bold text-rose-400 hover:bg-rose-500/20 transition"
                  title="Delete existing profile and re-register"
                >
                  <Trash2 size={12} />
                  <span>Reset Profile</span>
                </button>
              )}
            </div>

            <div className="space-y-3">
              {ENROLLMENT_PHRASES.map((item, index) => {
                const sample = samples[index];
                const isRecording = isRecordingSample && activeRecordingIndex === index;

                return (
                  <div
                    key={item.step}
                    className={`rounded-2xl border p-4 transition-all ${
                      sample
                        ? "border-emerald-500/30 bg-emerald-950/15"
                        : isRecording
                        ? "border-orange-500 bg-orange-950/20 shadow-[0_0_20px_rgba(249,115,22,0.15)] ring-1 ring-orange-500/50"
                        : currentStep === index
                        ? "border-stone-700 bg-stone-900/80"
                        : "border-stone-800 bg-[#222226]/40 opacity-70"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-stone-800 font-mono text-[10px] font-bold text-[#f97316]">
                            0{item.step}
                          </span>
                          <span className="text-xs font-bold text-stone-300">{item.title}</span>
                          {sample && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold">
                              <CheckCircle2 size={12} /> Captured ({sample.durationSec.toFixed(1)}s)
                            </span>
                          )}
                        </div>

                        <p className="mt-1 text-sm font-semibold text-white tracking-wide">
                          &ldquo;{item.phrase}&rdquo;
                        </p>
                        <p className="mt-0.5 text-[10px] text-stone-400 italic">{item.hint}</p>
                      </div>

                      {/* Record / Done Button */}
                      <div className="flex items-center gap-2 shrink-0">
                        {isRecording ? (
                          <div className="flex items-center gap-3">
                            {/* Live waveform indicator */}
                            <div className="flex items-center gap-1 h-6">
                              {[8, 16, 24, 14, 20, 10].map((h, i) => (
                                <div
                                  key={i}
                                  className="w-1 rounded-full bg-[#f97316] transition-all duration-75"
                                  style={{
                                    height: `${Math.max(6, h * (audioLevel * 1.5 + 0.3))}px`,
                                  }}
                                />
                              ))}
                            </div>
                            <button
                              onClick={() => handleStopRecording(index)}
                              className="flex items-center gap-1.5 rounded-xl bg-orange-500 hover:bg-orange-600 px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-orange-500/30 transition animate-pulse"
                            >
                              <div className="h-2 w-2 rounded-sm bg-white" />
                              <span>Done ({recordingDuration}s)</span>
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleStartRecording(index)}
                            disabled={isRecordingSample}
                            className={`flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition ${
                              sample
                                ? "border-stone-700 bg-stone-800 text-stone-300 hover:border-orange-500 hover:text-white"
                                : "border-orange-500/50 bg-[#f97316] text-[#18181b] font-extrabold hover:bg-[#ea580c] shadow-md shadow-orange-500/20"
                            } disabled:opacity-40`}
                          >
                            <Mic size={14} />
                            <span>{sample ? "Re-record" : "Record Sample"}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Complete Registration Action */}
            <div className="mt-4 pt-4 border-t border-stone-800 flex items-center justify-between">
              <div className="text-[11px] text-stone-400">
                {allSamplesReady ? (
                  <span className="text-emerald-400 font-medium">
                    ✓ All 3 samples captured. Ready to register profile.
                  </span>
                ) : (
                  <span>Record all 3 samples above to proceed</span>
                )}
              </div>

              <button
                onClick={handleCompleteEnrollment}
                disabled={!allSamplesReady || enrolling || isRecordingSample}
                className="flex items-center gap-2 rounded-2xl bg-[#f97316] hover:bg-[#ea580c] px-5 py-2.5 text-xs font-bold text-[#18181b] shadow-xl shadow-orange-500/30 transition disabled:opacity-40 hover:scale-[1.02] active:scale-95"
              >
                {enrolling ? (
                  <>
                    <Loader2 size={14} className="animate-spin text-[#18181b]" />
                    <span>Calibrating Acoustic Vector...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck size={15} />
                    <span>Complete Voice Enrollment</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────
              SECTION 2: TEST MY VOICE (LIVE BIOMETRIC MATCHER)
          ─────────────────────────────────────────────────────────── */}
          {isProfileEnrolled && (
            <div className="rounded-2xl border border-stone-800 bg-[#222226]/50 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Volume2 size={14} className="text-[#f97316]" />
                    <span>Test My Enrolled Voice</span>
                  </h4>
                  <p className="text-[11px] text-stone-400">
                    Speak any phrase to test real-time speaker matching score against your template
                  </p>
                </div>

                {testingVoice ? (
                  <button
                    onClick={handleStopVoiceTest}
                    className="flex items-center gap-1.5 rounded-xl bg-orange-500 px-3.5 py-1.5 text-xs font-bold text-white shadow-lg shadow-orange-500/30 transition animate-pulse"
                  >
                    <div className="h-2 w-2 rounded-sm bg-white" />
                    <span>Finish Speaking</span>
                  </button>
                ) : (
                  <button
                    onClick={handleStartVoiceTest}
                    disabled={isRecordingSample}
                    className="flex items-center gap-1.5 rounded-xl border border-orange-500/40 bg-stone-800 px-3.5 py-1.5 text-xs font-bold text-orange-300 hover:bg-[#f97316] hover:text-[#18181b] transition shadow-sm"
                  >
                    <Mic size={14} />
                    <span>Test Voice Match</span>
                  </button>
                )}
              </div>

              {/* Testing Audio Level Bar */}
              {testingVoice && (
                <div className="my-3 rounded-xl bg-black/40 p-3 border border-orange-500/30 text-center">
                  <p className="text-xs text-orange-400 font-semibold animate-pulse mb-2">
                    🎙 Listening... Speak naturally to test matching
                  </p>
                  <div className="h-2 w-full bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-75"
                      style={{ width: `${Math.min(100, testAudioLevel * 140)}%` }}
                    />
                  </div>
                </div>
              )}

              {/* Test Result Display */}
              {testResult && (
                <div
                  className={`mt-3 rounded-xl border p-3 text-xs transition-all ${
                    testResult.status === "verified"
                      ? "border-emerald-500/40 bg-emerald-950/20 text-emerald-200"
                      : "border-rose-500/40 bg-rose-950/20 text-rose-200"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {testResult.status === "verified" ? (
                        <CheckCircle2 size={16} className="text-emerald-400" />
                      ) : (
                        <ShieldAlert size={16} className="text-rose-400" />
                      )}
                      <span className="font-bold">
                        {testResult.status === "verified"
                          ? "Voice Match Confirmed (Access Granted)"
                          : "Speaker Verification Failed (Access Blocked)"}
                      </span>
                    </div>

                    <span className="font-mono font-extrabold text-sm">
                      {Math.round((testResult.similarity || 0) * 100)}% Match
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 w-full bg-stone-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        testResult.status === "verified" ? "bg-emerald-400" : "bg-rose-500"
                      }`}
                      style={{ width: `${Math.min(100, Math.round((testResult.similarity || 0) * 100))}%` }}
                    />
                  </div>
                  <p className="mt-1 text-[10px] text-stone-400 text-right font-mono">
                    Threshold required: {Math.round((testResult.threshold || 0.78) * 100)}%
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-stone-800 bg-stone-950 p-4 text-xs">
          <div className="flex items-center gap-1.5 text-stone-400">
            {voiceLockEnabled ? (
              <span className="flex items-center gap-1 text-orange-400 font-semibold">
                <Lock size={13} /> Voice Lock Active
              </span>
            ) : (
              <span className="flex items-center gap-1 text-stone-400">
                <Unlock size={13} /> Voice Lock Disabled
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-stone-700 bg-stone-800 px-4 py-2 text-xs font-semibold text-white hover:bg-stone-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
