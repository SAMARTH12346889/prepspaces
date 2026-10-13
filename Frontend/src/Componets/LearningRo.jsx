import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bot, Send, Volume2, Sparkles, User } from "lucide-react";
import { useNova } from "./NovaContext";
import { useSpeech } from "./useSpeech";
import { inferNavigation } from "./navigationIntent";
import { SHOW_NOVA_AI } from "../config/features";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function LearningRo(props) {
  if (!SHOW_NOVA_AI) {
    return null;
  }
  return <LearningRoContent {...props} />;
}

function LearningRoContent({ currentTopic = "oop-introduction" }) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { messages, setMessages, conversationId } = useNova();
  const { supported, speak } = useSpeech();
  const visibleMessages = messages.length
    ? messages
    : [
        {
          role: "assistant",
          text: "Hi, I’m Nova AI. Ask me any conceptual doubt and I’ll explain it with analogies and guide your learning.",
        },
      ];

  const askNova = async (question = message) => {
    if (!question.trim() || loading) return;
    const userMessage = { id: Date.now(), role: "user", text: question.trim() };
    const clientRoute = inferNavigation(question);
    setMessages((previous) => [...previous, userMessage]);
    setMessage("");
    setLoading(true);

    if (!API_URL) {
      window.setTimeout(() => {
        const answer = {
          id: Date.now() + 1,
          role: "assistant",
          text: "Nova AI server is currently offline in static mode. You can browse the complete curriculum lessons and interactive simulators directly on this page!",
        };
        setMessages((previous) => [...previous, answer]);
        speak(answer.text);
        if (clientRoute) window.setTimeout(() => navigate(clientRoute), 500);
        setLoading(false);
      }, 400);
      return;
    }

    try {
      const result = await fetch(`${API_URL}/api/assistant`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, topicId: currentTopic, conversationId }),
      });
      const data = await result.json();
      if (!result.ok) throw new Error(data.error || "Nova could not answer right now.");
      const answer = data.result || data;
      setMessages((previous) => [
        ...previous,
        { id: Date.now() + 1, role: "assistant", text: answer.reply, ...answer },
      ]);
      speak(answer.reply);
      const targetRoute = answer.route || clientRoute;
      if (targetRoute) window.setTimeout(() => navigate(targetRoute), 500);
    } catch (error) {
      const answer = {
        id: Date.now() + 1,
        role: "assistant",
        text: error.message || "Nova service is offline. Please explore the course materials directly.",
      };
      setMessages((previous) => [...previous, answer]);
      speak(answer.text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-2xl border border-[#27272a] bg-[#18181b]/95 p-5 text-white shadow-2xl backdrop-blur-2xl md:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white shadow-[0_4px_16px_rgba(249,115,22,0.35)]">
            <Bot size={22} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-1.5">
              Nova AI <Sparkles size={14} className="text-[#f97316]" />
            </h2>
            <p className="text-xs text-stone-400">Your agentic OOP learning assistant</p>
          </div>
        </div>
      </div>

      {/* Suggestion Chips */}
      <div className="mb-4 flex flex-wrap gap-2">
        {[
          "Explain inheritance in detail",
          "Show a Java example",
          "Compare abstraction and encapsulation",
          "Give me a quiz",
        ].map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => askNova(suggestion)}
            className="rounded-full border border-[#27272a] bg-[#222226] px-3 py-1.5 text-xs text-stone-300 transition-all hover:border-orange-500 hover:bg-[#2a2a2f] hover:text-orange-400"
          >
            {suggestion}
          </button>
        ))}
      </div>

      {/* Message History */}
      <div
        className="max-h-[440px] space-y-3 overflow-y-auto rounded-xl border border-[#27272a] bg-[#111113] p-4 text-xs md:text-sm"
        aria-live="polite"
      >
        {visibleMessages.map((item, index) => (
          <div
            key={item.id || index}
            className={`flex gap-2.5 ${item.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {item.role === "assistant" && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f97316] to-[#ea580c] text-white mt-0.5 shadow-sm">
                <Bot size={15} />
              </div>
            )}
            <div
              className={`max-w-[85%] rounded-xl px-4 py-3 leading-relaxed transition-all ${
                item.role === "user"
                  ? "bg-[#f97316] text-white font-medium shadow-[0_4px_16px_rgba(249,115,22,0.25)]"
                  : "border border-[#27272a] bg-[#1e1e22] text-[#f4f4f5]"
              }`}
            >
              <div className="whitespace-pre-wrap">{item.text}</div>
              {item.code?.content && (
                <pre className="mt-3 overflow-x-auto rounded-lg border border-[#27272a] bg-[#0d0d0f] p-3 text-xs leading-6 text-emerald-300 font-mono">
                  <code>{item.code.content}</code>
                </pre>
              )}
              {item.question && (
                <p className="mt-3 rounded-lg border border-orange-500/30 bg-orange-500/10 p-2.5 text-xs text-orange-300">
                  <strong>Try this:</strong> {item.question}
                </p>
              )}
              {item.role === "assistant" && supported && item.text && (
                <button
                  onClick={() => speak(item.text)}
                  className="mt-2 inline-flex items-center gap-1 text-[11px] text-orange-400 hover:text-orange-300 transition"
                  title="Speak this answer"
                >
                  <Volume2 size={13} /> Listen
                </button>
              )}
            </div>
            {item.role === "user" && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stone-600 bg-stone-800 text-stone-200 mt-0.5">
                <User size={14} />
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-xs text-[#f97316] p-2 animate-pulse">
            <Sparkles size={14} /> Nova AI is preparing your answer…
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="mt-4 flex gap-2">
        <input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") askNova();
          }}
          placeholder="Ask Nova AI any OOP question…"
          className="min-w-0 flex-1 rounded-xl border border-[#27272a] bg-[#222226] px-4 py-3 text-xs md:text-sm text-white outline-none placeholder:text-stone-500 focus:border-[#f97316] transition"
        />
        <button
          onClick={() => askNova()}
          disabled={loading || !message.trim()}
          aria-label="Send question to Nova"
          className="rounded-xl bg-[#f97316] hover:bg-[#ea580c] px-4 font-bold text-white shadow-md transition-all active:scale-95 disabled:opacity-40"
        >
          <Send size={18} />
        </button>
      </div>
    </section>
  );
}
