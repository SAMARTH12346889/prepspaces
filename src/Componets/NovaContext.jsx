import { createContext, useContext, useEffect, useMemo, useState } from "react";

const NovaContext = createContext(null);
const storageKey = "project-x-nova-session";

export function NovaProvider({ children }) {
  const [conversationId] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) return saved;
    const id = crypto.randomUUID();
    localStorage.setItem(storageKey, id);
    return id;
  });
  const [messages, setMessages] = useState(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(`${storageKey}-messages`)) || [];
      return raw
        .filter((m) => !m.interrupted && m.text && !m.text.includes("Cancelled by user"))
        .map(({ role, text, id, turnId }) => ({ role, text, id: id || Date.now(), turnId }));
    } catch {
      return [];
    }
  });
  useEffect(() => localStorage.setItem(`${storageKey}-messages`, JSON.stringify(messages.slice(-40))), [messages]);
  const value = useMemo(() => ({ conversationId, messages, setMessages }), [conversationId, messages]);
  return <NovaContext.Provider value={value}>{children}</NovaContext.Provider>;
}

export function useNova() {
  const value = useContext(NovaContext);
  if (!value) throw new Error("useNova must be used inside NovaProvider");
  return value;
}
