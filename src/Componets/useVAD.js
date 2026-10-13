import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Web Audio API Voice Activity Detection (VAD) Hook V2
 * 
 * Upgraded with:
 * 1. Hardware DSP (AEC, Noise Suppression, AGC)
 * 2. Web Audio Biquad Bandpass Filter (85Hz–3400Hz Human Voice Range)
 * 3. Formant / Voice Activity Probability P(speech)
 * 4. 4-State VAD State Machine with Temporal Smoothing (rejects keyboard clicks & sudden noise)
 * 5. Acoustic Echo Guard during assistant TTS playback
 */
export function useVAD({
  threshold = 0.08,
  silenceDuration = 800,
  assistantSpeaking = false,
  onSpeechStart,
  onSpeechEnd,
} = {}) {
  const [audioLevel, setAudioLevel] = useState(0);
  const [speechProbability, setSpeechProbability] = useState(0);
  const [vadState, setVadState] = useState("SILENCE");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);

  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const streamRef = useRef(null);
  const animationFrameRef = useRef(null);

  const stateMachineRef = useRef("SILENCE"); // 'SILENCE' | 'POSSIBLE_SPEECH' | 'SPEAKING' | 'POSSIBLE_END'
  const speechFramesRef = useRef(0);
  const silenceTimerRef = useRef(null);
  const callbacksRef = useRef({ onSpeechStart, onSpeechEnd });
  const assistantSpeakingRef = useRef(assistantSpeaking);

  useEffect(() => {
    callbacksRef.current = { onSpeechStart, onSpeechEnd };
  }, [onSpeechStart, onSpeechEnd]);

  useEffect(() => {
    assistantSpeakingRef.current = assistantSpeaking;
  }, [assistantSpeaking]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      (window.AudioContext || window.webkitAudioContext) &&
      navigator.mediaDevices?.getUserMedia
    ) {
      setSupported(true);
    }
  }, []);

  const analyzeAudio = useCallback(() => {
    const analyser = analyserRef.current;
    if (!analyser) return;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(dataArray);

    // 1. Calculate RMS energy
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      const normalized = dataArray[i] / 255;
      sum += normalized * normalized;
    }
    const rms = Math.sqrt(sum / dataArray.length);
    const clampedLevel = Math.min(1, Math.max(0, rms * 3.5));
    setAudioLevel(clampedLevel);

    // 2. Calculate Voice Formant Concentration (300Hz - 3000Hz) vs out-of-band noise
    // With 512 fftSize at ~48kHz, bin width is ~93Hz.
    // Voice formant bins: ~bin 3 (280Hz) to bin 34 (3100Hz)
    let formantEnergy = 0;
    let totalEnergy = 0;
    const voiceStartBin = 3;
    const voiceEndBin = Math.min(35, dataArray.length);

    for (let i = 0; i < dataArray.length; i++) {
      const val = dataArray[i];
      totalEnergy += val;
      if (i >= voiceStartBin && i <= voiceEndBin) {
        formantEnergy += val;
      }
    }

    const formantRatio = totalEnergy > 10 ? formantEnergy / totalEnergy : 0;
    // Speech probability combines volume with formant concentration
    const prob = Math.min(1, Math.max(0, 0.4 * clampedLevel + 0.6 * formantRatio));
    setSpeechProbability(prob);

    // 3. Dynamic Thresholding with Echo Guard
    // When assistant is speaking, elevate threshold to avoid acoustic loopback while still permitting deliberate user barge-in
    const activeThreshold = assistantSpeakingRef.current ? threshold * 1.6 : threshold;
    const isSpeechCandidate = clampedLevel > activeThreshold && prob > 0.35;

    // 4. Temporal Smoothing VAD State Machine
    const currentState = stateMachineRef.current;

    if (isSpeechCandidate) {
      if (silenceTimerRef.current) {
        clearTimeout(silenceTimerRef.current);
        silenceTimerRef.current = null;
      }

      if (currentState === "SILENCE") {
        speechFramesRef.current += 1;
        // Require at least 3 consecutive frames (~50ms) to confirm genuine speech and reject isolated clicks/typing
        if (speechFramesRef.current >= 3) {
          stateMachineRef.current = "SPEAKING";
          setVadState("SPEAKING");
          setIsSpeaking(true);
          callbacksRef.current.onSpeechStart?.();
        } else {
          stateMachineRef.current = "POSSIBLE_SPEECH";
          setVadState("POSSIBLE_SPEECH");
        }
      } else if (currentState === "POSSIBLE_SPEECH") {
        speechFramesRef.current += 1;
        if (speechFramesRef.current >= 3) {
          stateMachineRef.current = "SPEAKING";
          setVadState("SPEAKING");
          setIsSpeaking(true);
          callbacksRef.current.onSpeechStart?.();
        }
      } else if (currentState === "POSSIBLE_END") {
        // Speech resumed before silence countdown expired
        stateMachineRef.current = "SPEAKING";
        setVadState("SPEAKING");
      }
    } else {
      // Below threshold
      speechFramesRef.current = 0;

      if (currentState === "POSSIBLE_SPEECH") {
        // Transient noise that didn't sustain 3 frames -> drop back to SILENCE
        stateMachineRef.current = "SILENCE";
        setVadState("SILENCE");
      } else if (currentState === "SPEAKING") {
        // Sustained speech just ended; initiate silence hang-time countdown
        stateMachineRef.current = "POSSIBLE_END";
        setVadState("POSSIBLE_END");

        if (!silenceTimerRef.current) {
          silenceTimerRef.current = setTimeout(() => {
            stateMachineRef.current = "SILENCE";
            setVadState("SILENCE");
            setIsSpeaking(false);
            silenceTimerRef.current = null;
            callbacksRef.current.onSpeechEnd?.();
          }, silenceDuration);
        }
      }
    }

    animationFrameRef.current = requestAnimationFrame(analyzeAudio);
  }, [threshold, silenceDuration]);

  const startVAD = useCallback(async () => {
    if (!supported || streamRef.current) return;

    try {
      // 1. Hardware DSP Acquisition
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
      });

      streamRef.current = stream;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioCtx();
      audioContextRef.current = audioContext;

      if (audioContext.state === "suspended") {
        await audioContext.resume();
      }

      // 2. Human Voice Formant Biquad Bandpass Filtering (85Hz - 3400Hz)
      const source = audioContext.createMediaStreamSource(stream);

      const highpass = audioContext.createBiquadFilter();
      highpass.type = "highpass";
      highpass.frequency.value = 85; // Cut HVAC hum, desk rumbles (<85Hz)
      highpass.Q.value = 0.7;

      const lowpass = audioContext.createBiquadFilter();
      lowpass.type = "lowpass";
      lowpass.frequency.value = 3400; // Cut typing transients, hiss (>3400Hz)
      lowpass.Q.value = 0.7;

      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 512;
      analyser.smoothingTimeConstant = 0.3;
      analyserRef.current = analyser;

      // Connect DSP chain: Mic -> Highpass -> Lowpass -> Analyser
      source.connect(highpass);
      highpass.connect(lowpass);
      lowpass.connect(analyser);

      stateMachineRef.current = "SILENCE";
      setVadState("SILENCE");
      speechFramesRef.current = 0;

      analyzeAudio();
    } catch (error) {
      console.warn("[VAD V2] Unable to acquire microphone for voice activity detection:", error.message);
    }
  }, [supported, analyzeAudio]);

  const stopVAD = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    if (silenceTimerRef.current) {
      clearTimeout(silenceTimerRef.current);
      silenceTimerRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close();
      } catch {}
      audioContextRef.current = null;
    }
    stateMachineRef.current = "SILENCE";
    setVadState("SILENCE");
    speechFramesRef.current = 0;
    setIsSpeaking(false);
    setAudioLevel(0);
    setSpeechProbability(0);
  }, []);

  useEffect(() => {
    return () => stopVAD();
  }, [stopVAD]);

  return {
    audioLevel,
    speechProbability,
    vadState,
    isSpeaking,
    supported,
    startVAD,
    stopVAD,
  };
}
