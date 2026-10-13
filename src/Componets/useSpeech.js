import { useCallback, useEffect, useRef, useState } from "react";

const cleanForSpeech = (value = "") => value
  .replace(/```[\s\S]*?```/g, "Code example omitted from speech.")
  .replace(/[#*_`>]/g, " ")
  .replace(/\s+/g, " ")
  .trim();

/**
 * useSpeech V2
 * 
 * Turn-aware streaming sentence FIFO text-to-speech engine.
 * Binds every queued sentence chunk to its turnId and discards stale audio
 * before vocalization when turns are cancelled or superseded.
 */
export function useSpeech() {
  const [supported] = useState(() => typeof window !== "undefined" && "speechSynthesis" in window);
  const [speaking, setSpeaking] = useState(false);

  const latestId = useRef(0);
  const activeTurnIdRef = useRef(null);
  const sentenceIdCounter = useRef(0);
  const queueRef = useRef([]); // [{ text, turnId, sentenceId }]
  const isPlayingQueueRef = useRef(false);
  const onQueueEndCallbackRef = useRef(null);
  const isCurrentTurnValidatorRef = useRef(null);

  /**
   * Sets the active turnId and optional turn validator function.
   */
  const setActiveTurn = useCallback((turnId, validatorFn = null) => {
    activeTurnIdRef.current = turnId;
    if (validatorFn) {
      isCurrentTurnValidatorRef.current = validatorFn;
    }
  }, []);

  /**
   * Universal stop / cancel: flushes queue and cancels audio immediately (<15ms).
   */
  const stop = useCallback((targetTurnId = null) => {
    latestId.current += 1;

    if (targetTurnId) {
      // Purge only items matching the targeted turn
      queueRef.current = queueRef.current.filter((item) => item.turnId !== targetTurnId);
    } else {
      queueRef.current = [];
    }

    isPlayingQueueRef.current = false;
    onQueueEndCallbackRef.current = null;
    window.speechSynthesis?.cancel();
    setSpeaking(false);
  }, []);

  const playNextInQueue = useCallback(() => {
    if (!queueRef.current.length) {
      isPlayingQueueRef.current = false;
      setSpeaking(false);
      onQueueEndCallbackRef.current?.();
      return;
    }

    const nextItem = queueRef.current.shift();

    // Stale-turn protection: if turn is no longer current, discard immediately!
    if (nextItem.turnId) {
      if (activeTurnIdRef.current && nextItem.turnId !== activeTurnIdRef.current) {
        console.log(`[useSpeech V2] Discarding stale audio chunk from Turn #${nextItem.turnId} (Active: #${activeTurnIdRef.current})`);
        playNextInQueue();
        return;
      }
      if (isCurrentTurnValidatorRef.current && !isCurrentTurnValidatorRef.current(nextItem.turnId)) {
        console.log(`[useSpeech V2] Turn validator rejected Turn #${nextItem.turnId}. Discarding audio.`);
        playNextInQueue();
        return;
      }
    }

    const id = latestId.current;
    const utterance = new SpeechSynthesisUtterance(nextItem.text);
    utterance.lang = navigator.language || "en-IN";
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      if (id === latestId.current) setSpeaking(true);
    };

    utterance.onend = utterance.onerror = () => {
      if (id !== latestId.current) return;
      playNextInQueue();
    };

    window.setTimeout(() => {
      if (id === latestId.current) {
        window.speechSynthesis.speak(utterance);
      }
    }, 20);
  }, []);

  /**
   * Enqueue a sentence chunk for streaming playback with turnId binding.
   */
  const enqueueSentence = useCallback((sentenceChunk, { turnId = null, onQueueEnd } = {}) => {
    const text = cleanForSpeech(sentenceChunk);
    if (!text || !("speechSynthesis" in window)) return;

    if (onQueueEnd) onQueueEndCallbackRef.current = onQueueEnd;
    sentenceIdCounter.current += 1;

    queueRef.current.push({
      text,
      turnId,
      sentenceId: sentenceIdCounter.current,
    });

    if (!isPlayingQueueRef.current) {
      isPlayingQueueRef.current = true;
      setSpeaking(true);
      playNextInQueue();
    }
  }, [playNextInQueue]);

  /**
   * Full single-shot speech with turnId support
   */
  const speak = useCallback((value, { turnId = null, onEnd } = {}) => {
    const text = cleanForSpeech(value);
    if (!text || !("speechSynthesis" in window)) return false;
    stop();

    if (turnId) activeTurnIdRef.current = turnId;
    const id = ++latestId.current;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = navigator.language || "en-IN";
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    utterance.onstart = () => {
      if (id === latestId.current) setSpeaking(true);
    };

    utterance.onend = utterance.onerror = () => {
      if (id !== latestId.current) return;
      setSpeaking(false);
      onEnd?.();
    };

    window.setTimeout(() => {
      if (id === latestId.current) window.speechSynthesis.speak(utterance);
    }, 30);
    return true;
  }, [stop]);

  useEffect(() => () => window.speechSynthesis?.cancel(), []);

  return {
    supported,
    speaking,
    speak,
    enqueueSentence,
    stop,
    setActiveTurn,
    cancel: stop,
  };
}
