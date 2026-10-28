import React from "react";
import logoImg from "../assets/logo.png";
import logoMarkImg from "../assets/logo-mark.png";

/**
 * PrepSpaces Official Logo Component
 * Renders the official brand wordmark with optional section suffix (e.g. Study, Interview)
 * Uses the transparent, tightly-cropped brand asset with correct aspect ratio.
 */
export default function Logo({
  size = "md", // "xs" | "sm" | "md" | "lg"
  suffix = "",
  className = "",
  onClick,
  markOnly = false,
  alt = "PrepSpaces",
}) {
  const sizeClasses = {
    xs: "h-5 sm:h-6 max-w-[120px]",
    sm: "h-6 sm:h-7 max-w-[150px]",
    md: "h-7 sm:h-8 max-w-[175px]",
    lg: "h-9 sm:h-10 max-w-[220px]",
  };

  const markSizeClasses = {
    xs: "h-5 w-auto",
    sm: "h-6 sm:h-7 w-auto",
    md: "h-7 sm:h-8 w-auto",
    lg: "h-9 sm:h-10 w-auto",
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2 select-none ${onClick ? "cursor-pointer" : ""} ${className}`}
    >
      <img
        src={markOnly ? logoMarkImg : logoImg}
        alt={alt}
        className={`${
          markOnly
            ? markSizeClasses[size] || "h-7 w-auto"
            : sizeClasses[size] || "h-7 sm:h-8 max-w-[175px]"
        } w-auto object-contain shrink-0`}
        loading="eager"
        decoding="async"
      />
      {suffix && (
        <span className="inline-flex items-center justify-center rounded-full bg-orange-100/80 border border-orange-200/90 px-2.5 py-0.5 text-[10px] font-bold font-mono uppercase tracking-wider text-[#ea580c] leading-none whitespace-nowrap shadow-2xs self-center">
          {suffix}
        </span>
      )}
    </div>
  );
}

/**
 * Pure SVG / Typographic variant for high-contrast fallback
 */
export function PrepspacesTextBrand({
  suffix = "",
  className = "",
  size = "text-xl",
}) {
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <span className={`font-extrabold tracking-tight text-[#18181b] ${size}`}>
        Prep<span className="text-[#ea580c] bg-clip-text bg-gradient-to-r from-[#ea580c] to-[#f97316]">spaces</span>
      </span>
      {suffix && (
        <span className="rounded-full bg-orange-100 border border-orange-200/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">
          {suffix}
        </span>
      )}
    </div>
  );
}
