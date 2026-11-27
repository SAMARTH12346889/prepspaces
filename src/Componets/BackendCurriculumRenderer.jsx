import React from "react";

function renderInlineFormatted(text) {
  if (!text || typeof text !== "string") return text;

  // Tokenize **bold**, `code`, and [label](url) safely as React elements
  const tokenRegex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={idx} className="font-semibold text-stone-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
      return (
        <code
          key={idx}
          className="font-mono text-[0.9em] bg-stone-100 text-stone-900 px-1.5 py-0.5 rounded border border-stone-200/80 break-words"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      return (
        <a
          key={idx}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-700 underline decoration-orange-300 hover:text-orange-800 break-words"
        >
          {label}
        </a>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

function renderBlock(block, idx) {
  if (!block) return null;

  if (block.type === "h3") {
    const isKnowledgeCheck = /knowledge check/i.test(block.text);
    return (
      <h3
        key={idx}
        className={`text-base sm:text-lg font-bold pt-3 ${
          isKnowledgeCheck
            ? "text-amber-900 border-t border-amber-200/80 mt-4"
            : "text-stone-900"
        }`}
      >
        {renderInlineFormatted(block.text)}
      </h3>
    );
  }

  if (block.type === "ul") {
    return (
      <ul key={idx} className="list-disc pl-5 space-y-1.5 text-stone-700">
        {(block.items || []).map((item, itemIdx) => (
          <li key={itemIdx} className="leading-relaxed break-words">
            {renderInlineFormatted(item)}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "ol") {
    return (
      <ol key={idx} className="list-decimal pl-5 space-y-1.5 text-stone-700">
        {(block.items || []).map((item, itemIdx) => (
          <li key={itemIdx} className="leading-relaxed break-words">
            {renderInlineFormatted(item)}
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "code") {
    return (
      <pre
        key={idx}
        className="rounded-xl bg-stone-900 text-stone-100 p-4 font-mono text-xs overflow-x-auto leading-relaxed max-w-full"
      >
        <code>{block.text}</code>
      </pre>
    );
  }

  // Paragraph
  const text = block.text || "";
  const isObjective = /^Module objective:/i.test(text);
  const isImportant = /^(Important:|Warning:|Note:|Core principle:|Central Engineering Principle:)/i.test(text);

  if (isObjective) {
    return (
      <div
        key={idx}
        className="p-4 rounded-xl bg-orange-50/70 border border-orange-200/80 text-xs sm:text-sm text-stone-800 leading-relaxed break-words"
      >
        {renderInlineFormatted(text)}
      </div>
    );
  }

  if (isImportant) {
    return (
      <div
        key={idx}
        className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-stone-800 leading-relaxed break-words"
      >
        {renderInlineFormatted(text)}
      </div>
    );
  }

  return (
    <p key={idx} className="leading-relaxed break-words">
      {renderInlineFormatted(text)}
    </p>
  );
}

export default function BackendCurriculumRenderer({ data }) {
  if (!data) return null;

  return (
    <div className="space-y-8 sm:space-y-10 min-w-0">
      {/* MODULE OVERVIEW */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-5 sm:p-8 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {(data.badges && data.badges.length > 0 ? data.badges : ["Core Module"]).map((badge, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider"
            >
              {badge}
            </span>
          ))}
          <span className="text-xs font-mono text-stone-500">Module {data.moduleNumber}</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight break-words">
          {data.title}
        </h2>

        {data.overview && data.overview.length > 0 && (
          <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
            {data.overview.map((block, idx) => renderBlock(block, idx))}
          </div>
        )}
      </section>

      {/* ALL MODULE SECTIONS */}
      {(data.sections || []).map((section) => (
        <section
          key={section.id}
          className="bg-white rounded-2xl border border-[#e7e3da] p-5 sm:p-8 shadow-sm space-y-5"
        >
          <div className="flex flex-wrap items-center gap-2">
            {section.badge && (
              <span className="px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-800 text-xs font-mono font-bold shrink-0">
                {section.badge}
              </span>
            )}
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 break-words">
              {section.title}
            </h2>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            {(section.blocks || []).map((block, idx) => renderBlock(block, idx))}
          </div>
        </section>
      ))}
    </div>
  );
}
