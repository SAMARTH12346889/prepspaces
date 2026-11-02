import * as LucideIcons from "lucide-react";

/**
 * Safely resolves a Lucide icon by string name or component function.
 * Falls back gracefully to Server icon without ever throwing ReferenceError.
 */
export function getLucideIcon(iconOrName, Fallback = LucideIcons.Server) {
  if (typeof iconOrName === "function") return iconOrName;
  if (typeof iconOrName === "object" && iconOrName !== null && typeof iconOrName.render === "function") {
    return iconOrName;
  }
  if (typeof iconOrName === "string" && LucideIcons[iconOrName]) {
    return LucideIcons[iconOrName];
  }
  return Fallback || LucideIcons.Server;
}

export default getLucideIcon;
