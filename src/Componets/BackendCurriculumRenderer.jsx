import React, { useState, useEffect, useMemo } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Copy,
  FlaskConical,
  Info,
  Layers,
  ShieldAlert,
  Sparkles,
  Target,
} from "lucide-react";

const HTTP_METHOD_STYLES = {
  GET: "bg-emerald-500/15 text-emerald-700 border-emerald-300 dark:text-emerald-300",
  POST: "bg-blue-500/15 text-blue-700 border-blue-300",
  PUT: "bg-orange-500/15 text-orange-700 border-orange-300",
  PATCH: "bg-purple-500/15 text-purple-700 border-purple-300",
  DELETE: "bg-rose-500/15 text-rose-700 border-rose-300",
};

const HTTP_METHOD_DARK_BADGE = {
  GET: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  POST: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  PUT: "bg-orange-500/20 text-orange-300 border-orange-500/40",
  PATCH: "bg-purple-500/20 text-purple-300 border-purple-500/40",
  DELETE: "bg-rose-500/20 text-rose-300 border-rose-500/40",
};

function detectHttpMethod(text) {
  if (!text || typeof text !== "string") return null;
  const match = text.trim().match(/^(GET|POST|PUT|PATCH|DELETE)\s+(\/\S*|https?:\/\/\S+)/);
  if (!match) return null;
  return { method: match[1], endpoint: match[2] };
}

function detectCodeLanguage(text) {
  if (!text || typeof text !== "string") return "CODE";
  const trimmed = text.trim();
  const http = detectHttpMethod(trimmed);
  if (http) return "HTTP REQUEST";
  if (
    (trimmed.startsWith("{") && trimmed.endsWith("}")) ||
    (trimmed.startsWith("[") && trimmed.endsWith("]"))
  ) {
    if (trimmed.includes('":')) return "JSON";
  }
  if (/^(HTTP\/\d|Content-Security-Policy:|Set-Cookie:|Cache-Control:|Access-Control-|OPTIONS\s+\/)/m.test(trimmed)) {
    return "HTTP";
  }
  if (/^(npm |npx |cd |git |docker |curl )/m.test(trimmed)) return "TERMINAL";
  if (/^(FROM |WORKDIR |COPY |RUN |EXPOSE |CMD )/m.test(trimmed)) return "DOCKERFILE";
  if (/^(name:|on:|jobs:|steps:|uses:|run:)/m.test(trimmed)) return "YAML";
  if (/^(<html|<head|<body|<div|<main|<section|<form|<input|<link|<script|<img|<meta)/im.test(trimmed)) {
    if (trimmed.includes("className=") || trimmed.includes("onClick=") || trimmed.includes("=>")) {
      return "TSX / REACT";
    }
    return "HTML";
  }
  if (/(^import\s+.*from\s+["']|interface\s+\w+|type\s+\w+\s*=|export\s+(default\s+)?(async\s+)?function|useState|useEffect|useQuery|useForm)/m.test(trimmed)) {
    return "TYPESCRIPT / REACT";
  }
  if (/^[.#@a-zA-Z-]+\s*\{[\s\S]*:\s*[^;]+;/m.test(trimmed)) return "CSS";
  if (/[├└│↓→┌┐┘]/.test(trimmed)) return "ARCHITECTURE";
  return "CODE";
}

function renderInlineFormatted(text) {
  if (!text || typeof text !== "string") return text;

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
      const inner = part.slice(1, -1);
      const httpMatch = detectHttpMethod(inner);
      if (httpMatch) {
        return (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 font-mono text-[0.85em] bg-stone-100 text-stone-900 px-1.5 py-0.5 rounded-md border border-stone-200 align-baseline"
          >
            <span
              className={`px-1.5 py-0.2 rounded text-[10px] font-extrabold uppercase tracking-wider border ${
                HTTP_METHOD_STYLES[httpMatch.method] || "bg-stone-200 text-stone-800"
              }`}
            >
              {httpMatch.method}
            </span>
            <span className="break-all">{httpMatch.endpoint}</span>
          </span>
        );
      }
      return (
        <code
          key={idx}
          className="font-mono text-[0.88em] bg-orange-50/70 text-stone-900 px-1.5 py-0.5 rounded border border-orange-200/70 break-words"
        >
          {inner}
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
          className="text-[#ea580c] font-medium underline decoration-orange-300 hover:text-orange-800 break-words"
        >
          {label}
        </a>
      );
    }
    return <React.Fragment key={idx}>{part}</React.Fragment>;
  });
}

function parsePipeCells(text) {
  if (!text || typeof text !== "string" || !text.includes("|")) return null;
  let trimmed = text.trim();
  // Ignore code-like or logical-OR expressions
  if (trimmed.includes("||") || trimmed.startsWith("type ") || trimmed.startsWith("| {")) {
    return null;
  }
  const hasOuterPipes = trimmed.startsWith("|") && trimmed.endsWith("|");
  if (hasOuterPipes) {
    trimmed = trimmed.slice(1, -1);
  }
  const cells = trimmed.split("|").map((c) => c.trim());
  if (cells.length < 2) return null;
  // Check if markdown separator row like --- | ---
  const isSeparator = cells.every((c) => /^:?-{2,}:?$/.test(c));
  return { cells, isSeparator };
}

function groupBlocks(blocks) {
  if (!Array.isArray(blocks)) return [];
  const result = [];
  let i = 0;

  while (i < blocks.length) {
    const current = blocks[i];

    // Group consecutive pipe-delimited paragraph rows into a comparison table
    if (current && current.type === "p") {
      const parsedFirst = parsePipeCells(current.text);
      if (parsedFirst && !parsedFirst.isSeparator) {
        const tableRows = [parsedFirst.cells];
        let j = i + 1;
        while (j < blocks.length && blocks[j]?.type === "p") {
          const parsedNext = parsePipeCells(blocks[j].text);
          if (!parsedNext) break;
          if (parsedNext.isSeparator) {
            j++;
            continue;
          }
          if (parsedNext.cells.length !== parsedFirst.cells.length) break;
          tableRows.push(parsedNext.cells);
          j++;
        }
        if (tableRows.length >= 2) {
          result.push({
            type: "table",
            headers: tableRows[0],
            rows: tableRows.slice(1),
          });
          i = j;
          continue;
        }
      }
    }

    // Group single-line HTTP endpoint code block immediately followed by JSON code block
    if (
      current &&
      current.type === "code" &&
      i + 1 < blocks.length &&
      blocks[i + 1]?.type === "code"
    ) {
      const firstLines = (current.text || "").trim().split(/\r?\n/);
      const httpInfo = firstLines.length === 1 ? detectHttpMethod(firstLines[0]) : null;
      const nextLang = detectCodeLanguage(blocks[i + 1].text);
      if (httpInfo && nextLang === "JSON") {
        result.push({
          type: "api-example",
          method: httpInfo.method,
          endpoint: firstLines[0].trim(),
          payload: blocks[i + 1].text,
        });
        i += 2;
        continue;
      }
    }

    result.push(current);
    i++;
  }

  return result;
}

function CodeBlockCard({ text, labelOverride }) {
  const [copied, setCopied] = useState(false);
  const lang = labelOverride || detectCodeLanguage(text);
  const httpInfo = detectHttpMethod(text);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text || "");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback ignored if clipboard permission unavailable
    }
  };

  return (
    <div className="rounded-2xl bg-[#18181b] border border-stone-800 shadow-sm overflow-hidden my-3">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-stone-900 border-b border-stone-800">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-stone-700" />
          </div>
          {httpInfo ? (
            <span
              className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider border ${
                HTTP_METHOD_DARK_BADGE[httpInfo.method] || "bg-stone-700 text-stone-200"
              }`}
            >
              {httpInfo.method}
            </span>
          ) : null}
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-400 truncate">
            {lang}
          </span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-[11px] font-semibold transition-colors cursor-pointer shrink-0"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-300">Copied</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      <pre className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] text-stone-100 overflow-x-auto leading-relaxed max-w-full">
        <code>{text}</code>
      </pre>
    </div>
  );
}

function ApiExampleCard({ method, endpoint, payload }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${endpoint}\n\n${payload}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <div className="rounded-2xl bg-[#18181b] border border-stone-800 shadow-sm overflow-hidden my-3">
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 bg-stone-900 border-b border-stone-800">
        <div className="flex items-center gap-2.5 min-w-0">
          <span
            className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider border shrink-0 ${
              HTTP_METHOD_DARK_BADGE[method] || "bg-stone-700 text-stone-200"
            }`}
          >
            {method}
          </span>
          <code className="font-mono text-xs text-stone-200 truncate">
            {endpoint.replace(/^(GET|POST|PUT|PATCH|DELETE)\s+/, "")}
          </code>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-[11px] font-semibold transition-colors cursor-pointer shrink-0"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-300">Copied</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy Request</span>
            </>
          )}
        </button>
      </div>

      <div className="px-4 py-2 bg-stone-950/60 border-b border-stone-800/80 text-[10px] font-mono uppercase tracking-widest text-stone-400">
        JSON Payload
      </div>
      <pre className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] text-stone-100 overflow-x-auto leading-relaxed max-w-full">
        <code>{payload}</code>
      </pre>
    </div>
  );
}

function ComparisonTableCard({ headers, rows }) {
  return (
    <div className="my-4 rounded-2xl border border-[#e7e3da] bg-white shadow-xs overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="bg-[#faf8f4] border-b border-[#e7e3da]">
              {headers.map((head, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 font-extrabold text-stone-900 uppercase tracking-wider text-[11px] whitespace-nowrap"
                >
                  {renderInlineFormatted(head)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={rIdx % 2 === 1 ? "bg-stone-50/50" : "bg-white"}
              >
                {row.map((cell, cIdx) => {
                  const httpMatch = detectHttpMethod(cell);
                  const bareMethod = /^(GET|POST|PUT|PATCH|DELETE)$/.test(cell.trim())
                    ? cell.trim()
                    : null;
                  return (
                    <td
                      key={cIdx}
                      className={`px-4 py-3 align-top leading-relaxed ${
                        cIdx === 0 ? "font-semibold text-stone-900" : "text-stone-700"
                      }`}
                    >
                      {bareMethod ? (
                        <span
                          className={`inline-block px-2 py-0.5 rounded-md text-[11px] font-extrabold uppercase tracking-wider border ${
                            HTTP_METHOD_STYLES[bareMethod]
                          }`}
                        >
                          {bareMethod}
                        </span>
                      ) : httpMatch ? (
                        <span className="inline-flex items-center gap-1.5 font-mono text-xs bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold uppercase border ${
                              HTTP_METHOD_STYLES[httpMatch.method]
                            }`}
                          >
                            {httpMatch.method}
                          </span>
                          <span className="break-all">{httpMatch.endpoint}</span>
                        </span>
                      ) : (
                        renderInlineFormatted(cell)
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function PracticeExerciseCard({ text }) {
  const [done, setDone] = useState(false);

  return (
    <div
      className={`my-4 rounded-2xl border p-4 sm:p-5 transition-colors ${
        done
          ? "bg-emerald-50/70 border-emerald-200"
          : "bg-orange-50/60 border-orange-200/90"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <FlaskConical
            size={16}
            className={done ? "text-emerald-700" : "text-[#ea580c]"}
          />
          <span
            className={`text-[11px] font-extrabold uppercase tracking-widest ${
              done ? "text-emerald-800" : "text-orange-800"
            }`}
          >
            Hands-On Exercise
          </span>
        </div>

        <button
          type="button"
          onClick={() => setDone((prev) => !prev)}
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
            done
              ? "bg-emerald-600 text-white"
              : "bg-white border border-orange-300 text-orange-800 hover:bg-orange-100"
          }`}
        >
          <CheckCircle2 size={13} />
          <span>{done ? "Completed" : "Mark Exercise Done"}</span>
        </button>
      </div>
      <p className="text-xs sm:text-sm text-stone-800 leading-relaxed break-words">
        {renderInlineFormatted(
          text.replace(/^(Practical exercise:|Practical deliverable:)\s*/i, "")
        )}
      </p>
    </div>
  );
}

function renderBlock(block, idx) {
  if (!block) return null;

  if (block.type === "table") {
    return (
      <ComparisonTableCard
        key={idx}
        headers={block.headers}
        rows={block.rows}
      />
    );
  }

  if (block.type === "api-example") {
    return (
      <ApiExampleCard
        key={idx}
        method={block.method}
        endpoint={block.endpoint}
        payload={block.payload}
      />
    );
  }

  if (block.type === "h3") {
    const isKnowledgeCheck = /knowledge check/i.test(block.text);
    return (
      <div
        key={idx}
        className={`flex items-center gap-3 pt-4 pb-1 ${
          isKnowledgeCheck
            ? "border-t border-amber-200/80 mt-5"
            : "border-t border-stone-100 mt-4 first:border-t-0 first:mt-0 first:pt-0"
        }`}
      >
        <span
          className={`w-1.5 h-5 rounded-full shrink-0 ${
            isKnowledgeCheck ? "bg-amber-500" : "bg-[#f97316]"
          }`}
        />
        <h3
          className={`text-base sm:text-lg font-extrabold tracking-tight ${
            isKnowledgeCheck ? "text-amber-900" : "text-stone-900"
          }`}
        >
          {renderInlineFormatted(block.text)}
        </h3>
      </div>
    );
  }

  if (block.type === "ul") {
    return (
      <ul key={idx} className="space-y-2 pl-1 my-2 text-stone-700">
        {(block.items || []).map((item, itemIdx) => (
          <li
            key={itemIdx}
            className="flex items-start gap-2.5 leading-relaxed break-words"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] mt-2 shrink-0" />
            <span>{renderInlineFormatted(item)}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "ol") {
    return (
      <ol key={idx} className="list-decimal pl-5 space-y-2 my-2 text-stone-700 marker:font-bold marker:text-[#ea580c]">
        {(block.items || []).map((item, itemIdx) => (
          <li key={itemIdx} className="leading-relaxed break-words pl-1">
            {renderInlineFormatted(item)}
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "code") {
    return <CodeBlockCard key={idx} text={block.text} />;
  }

  // Paragraph & smart educational callouts
  const text = block.text || "";

  if (/^(Practical exercise:|Practical deliverable:)/i.test(text)) {
    return <PracticeExerciseCard key={idx} text={text} />;
  }

  if (/^(Module objective:|Lesson outcome:|Completion standard:|Module completion standard:|Final deliverable:)/i.test(text)) {
    return (
      <div
        key={idx}
        className="my-3 p-4 sm:p-5 rounded-2xl bg-orange-50/75 border border-orange-200/90 text-xs sm:text-sm text-stone-800 leading-relaxed break-words"
      >
        <div className="flex items-center gap-2 mb-1.5 text-orange-800 font-extrabold text-[11px] uppercase tracking-widest">
          <Target size={15} className="text-[#f97316]" />
          <span>Key Learning Outcome</span>
        </div>
        {renderInlineFormatted(text)}
      </div>
    );
  }

  if (/^(Important:|Important\b.*:|Warning:|Note:|Core principle:|Central Engineering Principle:|Critical security distinction:|Important architectural boundary)/i.test(text)) {
    return (
      <div
        key={idx}
        className="my-3 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 border-l-4 border-l-amber-500 text-xs sm:text-sm text-stone-800 leading-relaxed break-words"
      >
        <div className="flex items-center gap-2 mb-1 text-amber-900 font-extrabold text-[11px] uppercase tracking-widest">
          <AlertTriangle size={14} className="text-amber-600" />
          <span>Engineering Note</span>
        </div>
        {renderInlineFormatted(text)}
      </div>
    );
  }

  if (/^(Mistake \d+:|Incorrect:|Poor:)/i.test(text)) {
    return (
      <div
        key={idx}
        className="my-2 p-3.5 rounded-xl bg-rose-50/70 border border-rose-200 border-l-4 border-l-rose-500 text-xs sm:text-sm text-rose-950 leading-relaxed break-words"
      >
        <div className="flex items-center gap-1.5 mb-1 text-rose-800 font-bold text-[11px] uppercase tracking-wider">
          <ShieldAlert size={14} />
          <span>Common Pitfall</span>
        </div>
        {renderInlineFormatted(text)}
      </div>
    );
  }

  if (/^(Preferred:|Correct:|Better:)/i.test(text)) {
    return (
      <div
        key={idx}
        className="my-2 p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 border-l-4 border-l-emerald-500 text-xs sm:text-sm text-emerald-950 leading-relaxed break-words"
      >
        <div className="flex items-center gap-1.5 mb-1 text-emerald-800 font-bold text-[11px] uppercase tracking-wider">
          <Sparkles size={14} />
          <span>Recommended Pattern</span>
        </div>
        {renderInlineFormatted(text)}
      </div>
    );
  }

  return (
    <p key={idx} className="leading-relaxed break-words text-stone-700">
      {renderInlineFormatted(text)}
    </p>
  );
}

export default function BackendCurriculumRenderer({ data }) {
  const rawSections = data?.sections || [];
  const sections = useMemo(() => {
    const merged = [];
    for (const sec of rawSections) {
      const blocks = sec.blocks || [];
      if (blocks.length === 0 && merged.length > 0) {
        merged[merged.length - 1] = {
          ...merged[merged.length - 1],
          blocks: [
            ...(merged[merged.length - 1].blocks || []),
            { type: "p", text: sec.title },
          ],
        };
      } else {
        merged.push({ ...sec, blocks: [...blocks] });
      }
    }
    return merged;
  }, [rawSections]);

  const storageKey = `prepspaces_understood_${data?.moduleNumber || "mod"}`;

  const [understoodMap, setUnderstoodMap] = useState({});
  const [expandedMap, setExpandedMap] = useState(() => {
    const initial = {};
    sections.forEach((s) => {
      initial[s.id] = true;
    });
    return initial;
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setUnderstoodMap(JSON.parse(saved));
      }
    } catch {
      // ignore storage errors
    }
  }, [storageKey]);

  const toggleUnderstood = (sectionId, e) => {
    if (e) e.stopPropagation();
    setUnderstoodMap((prev) => {
      const next = { ...prev, [sectionId]: !prev[sectionId] };
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  const toggleExpanded = (sectionId) => {
    setExpandedMap((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const setAllExpanded = (expanded) => {
    const next = {};
    sections.forEach((s) => {
      next[s.id] = expanded;
    });
    setExpandedMap(next);
  };

  const jumpToSection = (targetIndex) => {
    const target = sections[targetIndex];
    if (!target) return;
    setExpandedMap((prev) => ({ ...prev, [target.id]: true }));
    setTimeout(() => {
      const el = document.getElementById(`curriculum-sec-${target.id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  const understoodCount = sections.filter((s) => understoodMap[s.id]).length;
  const progressPct =
    sections.length > 0 ? Math.round((understoodCount / sections.length) * 100) : 0;

  const groupedOverview = useMemo(
    () => groupBlocks(data?.overview || []),
    [data?.overview]
  );

  const groupedSections = useMemo(
    () =>
      sections.map((s) => ({
        ...s,
        groupedBlocks: groupBlocks(s.blocks || []),
      })),
    [sections]
  );

  if (!data) return null;

  return (
    <div className="space-y-6 sm:space-y-8 min-w-0">
      {/* MODULE OVERVIEW CARD */}
      <section className="bg-white rounded-3xl border border-[#e7e3da] p-5 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {(data.badges && data.badges.length > 0 ? data.badges : ["Core Module"]).map(
            (badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-[11px] font-extrabold uppercase tracking-wider"
              >
                {badge}
              </span>
            )
          )}
          <span className="px-2.5 py-1 rounded-full bg-stone-100 text-xs font-mono font-bold text-stone-600">
            Module {data.moduleNumber}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight break-words">
          {data.title}
        </h2>

        {groupedOverview.length > 0 && (
          <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base pt-2">
            {groupedOverview.map((block, idx) => renderBlock(block, idx))}
          </div>
        )}
      </section>

      {/* INTERACTIVE STUDY PROGRESS BAR */}
      {sections.length > 0 && (
        <div className="bg-white rounded-2xl border border-[#e7e3da] p-4 sm:p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center justify-between text-xs font-bold text-stone-700">
              <span className="flex items-center gap-1.5">
                <Award size={15} className="text-[#f97316]" />
                <span>
                  Lesson Progress: {understoodCount} / {sections.length} Understood
                </span>
              </span>
              <span className="font-mono text-[#ea580c]">{progressPct}%</span>
            </div>
            <div className="h-2 rounded-full bg-stone-100 overflow-hidden">
              <div
                className="h-full bg-[#f97316] rounded-full transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setAllExpanded(true)}
              className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold cursor-pointer transition-colors"
            >
              Expand All
            </button>
            <button
              type="button"
              onClick={() => setAllExpanded(false)}
              className="px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold cursor-pointer transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>
      )}

      {/* ALL LESSON / PROJECT SECTIONS */}
      {groupedSections.map((section, sIdx) => {
        const isExpanded = expandedMap[section.id] !== false;
        const isUnderstood = Boolean(understoodMap[section.id]);

        return (
          <section
            id={`curriculum-sec-${section.id}`}
            key={section.id}
            className={`bg-white rounded-3xl border transition-colors shadow-xs overflow-hidden ${
              isUnderstood ? "border-emerald-200/90" : "border-[#e7e3da]"
            }`}
          >
            {/* Section Header */}
            <div
              onClick={() => toggleExpanded(section.id)}
              className="p-5 sm:p-7 flex flex-wrap items-center justify-between gap-3 cursor-pointer hover:bg-[#faf8f4]/70 transition-colors"
            >
              <div className="flex flex-wrap items-center gap-2.5 min-w-0">
                {section.badge && (
                  <span className="px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-[11px] font-mono font-extrabold uppercase tracking-wider shrink-0">
                    {section.badge}
                  </span>
                )}
                <h2 className="text-lg sm:text-2xl font-extrabold text-stone-900 break-words">
                  {section.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={(e) => toggleUnderstood(section.id, e)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isUnderstood
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-stone-100 hover:bg-orange-50 text-stone-700 hover:text-orange-800 border border-stone-200"
                  }`}
                >
                  <CheckCircle2 size={14} />
                  <span>{isUnderstood ? "Understood" : "Mark as Understood"}</span>
                </button>

                <button
                  type="button"
                  aria-label={isExpanded ? "Collapse lesson" : "Expand lesson"}
                  className="p-1.5 rounded-xl bg-stone-100 text-stone-600 hover:bg-stone-200 cursor-pointer"
                >
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>
            </div>

            {/* Section Body */}
            {isExpanded && (
              <div className="px-5 sm:px-7 pb-6 sm:pb-8 pt-1 border-t border-stone-100 space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                {section.groupedBlocks.map((block, idx) => renderBlock(block, idx))}

                {/* Lesson Footer Nav */}
                <div className="pt-5 mt-6 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    {sIdx > 0 && (
                      <button
                        type="button"
                        onClick={() => jumpToSection(sIdx - 1)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold cursor-pointer transition-colors"
                      >
                        <ArrowLeft size={14} />
                        <span>Previous Lesson</span>
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {!isUnderstood && (
                      <button
                        type="button"
                        onClick={(e) => {
                          toggleUnderstood(section.id, e);
                          if (sIdx < groupedSections.length - 1) {
                            jumpToSection(sIdx + 1);
                          }
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#f97316] hover:bg-[#ea580c] text-white text-xs font-bold cursor-pointer shadow-xs transition-colors"
                      >
                        <CheckCircle2 size={14} />
                        <span>
                          {sIdx < groupedSections.length - 1
                            ? "Mark Understood & Next"
                            : "Mark Lesson Understood"}
                        </span>
                      </button>
                    )}

                    {sIdx < groupedSections.length - 1 && (
                      <button
                        type="button"
                        onClick={() => jumpToSection(sIdx + 1)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold cursor-pointer transition-colors"
                      >
                        <span>Next Lesson</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
