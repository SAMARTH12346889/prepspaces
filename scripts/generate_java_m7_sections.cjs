const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m7_java_original.txt');
const outPath = path.resolve(__dirname, '../src/Componets/JavaComplexitySections.jsx');
const content = fs.readFileSync(rawFile, 'utf8');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l) => /^#\s+Module 7\s+—/.test(l), title: "Module 7: Curriculum Overview & Objectives", category: "Course Roadmap · Objectives", anchor: "overview" },
  { id: 1, test: (l) => /^#\s+PART 1\s+—\s+ALGORITHMS AND CORRECTNESS/.test(l), title: "Part 1: Algorithms and Correctness", category: "Part 1 · Invariants & Correctness", anchor: "part-1" },
  { id: 2, test: (l) => /^#\s+PART 2\s+—\s+TIME AND SPACE COMPLEXITY/.test(l), title: "Part 2: Time and Space Complexity", category: "Part 2 · Resource Scaling", anchor: "part-2" },
  { id: 3, test: (l) => /^#\s+PART 3\s+—\s+ASYMPTOTIC ANALYSIS/.test(l), title: "Part 3: Asymptotic Analysis & Math Bounds (O, Ω, Θ)", category: "Part 3 · Asymptotic Notations", anchor: "part-3" },
  { id: 4, test: (l) => /^#\s+PART 4\s+—\s+BEST, AVERAGE, AND WORST CASES/.test(l), title: "Part 4: Best, Average, and Worst Cases", category: "Part 4 · Case Distributions", anchor: "part-4" },
  { id: 5, test: (l) => /^#\s+PART 5\s+—\s+COMMON COMPLEXITY CLASSES/.test(l), title: "Part 5: Common Complexity Classes (O(1) to O(n!))", category: "Part 5 · Growth Class Hierarchy", anchor: "part-5" },
  { id: 6, test: (l) => /^#\s+PART 6\s+—\s+NESTED LOOP ANALYSIS/.test(l), title: "Part 6: Nested Loop Analysis", category: "Part 6 · Loop Iteration Arithmetic", anchor: "part-6" },
  { id: 7, test: (l) => /^#\s+PART 7\s+—\s+RECURSION COMPLEXITY/.test(l), title: "Part 7: Recursion Complexity", category: "Part 7 · Recursion & Call Stacks", anchor: "part-7" },
  { id: 8, test: (l) => /^#\s+PART 8\s+—\s+RECURRENCE RELATIONS/.test(l), title: "Part 8: Recurrence Relations", category: "Part 8 · Formulations & Expansions", anchor: "part-8" },
  { id: 9, test: (l) => /^#\s+PART 9\s+—\s+MASTER THEOREM INTRODUCTION/.test(l), title: "Part 9: Master Theorem Introduction", category: "Part 9 · Divide & Conquer Recurrences", anchor: "part-9" },
  { id: 10, test: (l) => /^#\s+PART 10\s+—\s+AMORTIZED ANALYSIS/.test(l), title: "Part 10: Amortized Analysis", category: "Part 10 · Aggregate, Accounting & Potential", anchor: "part-10" },
  { id: 11, test: (l) => /^#\s+PART 11\s+—\s+AUXILIARY SPACE/.test(l), title: "Part 11: Auxiliary Space", category: "Part 11 · Auxiliary Memory vs Total Space", anchor: "part-11" },
  { id: 12, test: (l) => /^#\s+PART 12\s+—\s+TIME-SPACE TRADE-OFFS/.test(l), title: "Part 12: Time-Space Trade-Offs", category: "Part 12 · Memory-Compute Optimization", anchor: "part-12" },
  { id: 13, test: (l) => /^#\s+PART 13\s+—\s+COMPLEXITY COMPARISON OF ALGORITHMS/.test(l), title: "Part 13: Complexity Comparison of Algorithms", category: "Part 13 · Searching & Sorting Benchmark", anchor: "part-13" },
  { id: 14, test: (l) => /^#\s+PART 14\s+—\s+PRACTICAL COMPLEXITY ANALYSIS/.test(l), title: "Part 14: Practical Complexity Analysis", category: "Part 14 · 7-Step Step-by-Step Methodology", anchor: "part-14" },
  { id: 15, test: (l) => /^#\s+PART 15\s+—\s+WORKED ANALYSIS PROBLEMS/.test(l), title: "Part 15: Worked Analysis Problems (Problems 1-7)", category: "Part 15 · Step-by-Step Practice Clinic", anchor: "part-15" },
  { id: 16, test: (l) => /^#\s+PART 16\s+—\s+COMMON COMPLEXITY ANALYSIS MISTAKES/.test(l), title: "Part 16: Common Complexity Analysis Mistakes", category: "Part 16 · 10 Diagnostic Pitfalls", anchor: "part-16" },
  { id: 17, test: (l) => /^#\s+PART 17\s+—\s+LABORATORY EXERCISES/.test(l), title: "Part 17: Laboratory Exercises (Labs 1-4)", category: "Part 17 · Hands-on Benchmarks & Counters", anchor: "part-17" },
  { id: 18, test: (l) => /^#\s+PART 18\s+—\s+ASSIGNMENTS/.test(l), title: "Part 18: Assignments (Projects 1-4)", category: "Part 18 · Independent Engineering Problems", anchor: "part-18" },
  { id: 19, test: (l) => /^#\s+PART 19\s+—\s+KNOWLEDGE ASSESSMENT/.test(l), title: "Part 19: Knowledge Assessment (MCQ & Short Answer)", category: "Part 19 · Assessment & Code Tracing", anchor: "part-19" },
  { id: 20, test: (l) => /^#\s+PART 20\s+—\s+ANSWER KEY/.test(l), title: "Part 20: Answer Key & Comprehensive Explanations", category: "Part 20 · Diagnostic Verification & Solutions", anchor: "part-20" },
  { id: 21, test: (l) => /^#\s+PART 21\s+—\s+MINI-PROJECT/.test(l), title: "Part 21: Mini-Project — Algorithm Performance Comparison", category: "Part 21 · Benchmark Suite Capstone", anchor: "part-21" },
  { id: 22, test: (l) => /^#\s+PART 22\s+—\s+INTERVIEW PREPARATION/.test(l), title: "Part 22: Interview Preparation", category: "Part 22 · Top 10 High-Yield DSA Questions", anchor: "part-22" },
  { id: 23, test: (l) => /^#\s+PART 23\s+—\s+REVISION SHEET/.test(l), title: "Part 23: Module Revision Sheet", category: "Part 23 · Fast Reference Formulas & Patterns", anchor: "part-23" },
  { id: 24, test: (l) => /^#\s+PART 24\s+—\s+MODULE COMPLETION CRITERIA/.test(l), title: "Part 24: Module Completion Criteria & Final Takeaway", category: "Milestone · Foundations Mastery", anchor: "part-24" }
];

const buckets = [];
let currentBucket = null;
let currentHeaderIdx = -1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  const nextMatchIdx = sectionHeaders.findIndex((sh, idx) => idx > currentHeaderIdx && sh.test(line));

  if (nextMatchIdx !== -1) {
    if (currentBucket) {
      buckets.push(currentBucket);
    }
    currentHeaderIdx = nextMatchIdx;
    currentBucket = {
      header: sectionHeaders[nextMatchIdx],
      lines: []
    };
  } else if (currentBucket) {
    currentBucket.lines.push(lines[i]);
  } else {
    currentBucket = {
      header: sectionHeaders[0],
      lines: [lines[i]]
    };
  }
}
if (currentBucket) buckets.push(currentBucket);

console.log(`Parsed ${buckets.length} section buckets (expected ${sectionHeaders.length}).`);

function escapeText(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

function formatInline(text) {
  let res = escapeText(text);

  // Bold: **text**
  res = res.replace(/\*\*(.*?)\*\*/g, '<strong className="font-semibold text-stone-900">$1</strong>');

  // Inline code: `code`
  res = res.replace(/`([^`]+)`/g, '<code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">$1</code>');

  // External URLs
  res = res.replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">$1</a>');

  return res;
}

function renderCodeBlock(code, lang = 'java') {
  const sanitized = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  const upperLang = (lang || 'CODE').toUpperCase();
  return `          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-4 shadow-inner">
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-b border-neutral-800 pb-2 mb-3 font-mono">
              <span className="uppercase text-orange-400 font-bold">${upperLang}</span>
              <span className="text-stone-500">Java Standard Edition (Java 17+)</span>
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{\`${sanitized}\`}</code>
            </pre>
          </div>`;
}

function renderTable(headers, rows) {
  let html = `          <div className="overflow-x-auto my-4 rounded-xl border border-[#e7e3da] shadow-2xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>\n`;
  for (const h of headers) {
    html += `                  <th className="px-4 py-3">${formatInline(h)}</th>\n`;
  }
  html += `                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">\n`;
  for (let r = 0; r < rows.length; r++) {
    const rowBg = r % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]";
    html += `                <tr className="${rowBg}">\n`;
    for (let c = 0; c < headers.length; c++) {
      const cellVal = rows[r][c] || "";
      html += `                  <td className="px-4 py-2.5 text-stone-700">${formatInline(cellVal)}</td>\n`;
    }
    html += `                </tr>\n`;
  }
  html += `              </tbody>
            </table>
          </div>`;
  return html;
}

function processLines(rawLines) {
  const out = [];
  let inCode = false;
  let codeLang = 'java';
  let codeBuffer = [];

  let inTable = false;
  let tableHeaders = [];
  let tableRows = [];

  let inList = false;
  let listItems = [];

  const flushList = () => {
    if (inList && listItems.length > 0) {
      out.push(`          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">`);
      for (const item of listItems) {
        out.push(`            <li>${formatInline(item)}</li>`);
      }
      out.push(`          </ul>`);
      listItems = [];
      inList = false;
    }
  };

  const flushTable = () => {
    if (inTable) {
      out.push(renderTable(tableHeaders, tableRows));
      tableHeaders = [];
      tableRows = [];
      inTable = false;
    }
  };

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i];
    const trimmed = line.trim();

    // Check code fence
    if (trimmed.startsWith('```')) {
      if (inCode) {
        // closing fence
        out.push(renderCodeBlock(codeBuffer.join('\n'), codeLang));
        codeBuffer = [];
        inCode = false;
      } else {
        // opening fence
        flushList();
        flushTable();
        inCode = true;
        codeLang = trimmed.slice(3).trim() || 'java';
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(line);
      continue;
    }

    // Check table
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushList();
      const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
      // Check if it's separator row |---|---|
      if (cells.every(c => /^:?-+:?$/.test(c))) {
        continue;
      }
      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
        tableRows = [];
      } else {
        tableRows.push(cells);
      }
      continue;
    } else {
      flushTable();
    }

    // Check list item
    if (/^[-*]\s+/.test(trimmed)) {
      inList = true;
      listItems.push(trimmed.replace(/^[-*]\s+/, ''));
      continue;
    } else if (/^\d+\.\s+/.test(trimmed)) {
      flushList();
      out.push(`          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm leading-relaxed">
            <span className="font-mono text-orange-600 font-bold text-xs mt-0.5 shrink-0 px-1.5 py-0.5 bg-orange-50 border border-orange-200 rounded">${trimmed.match(/^\d+\./)[0]}</span>
            <div className="flex-1">${formatInline(trimmed.replace(/^\d+\.\s+/, ''))}</div>
          </div>`);
      continue;
    } else {
      flushList();
    }

    // Check headings
    if (trimmed.startsWith('#### ')) {
      out.push(`          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-4 bg-orange-500 rounded-full inline-block"></span>
            ${formatInline(trimmed.slice(5))}
          </h4>`);
      continue;
    }
    if (trimmed.startsWith('### ')) {
      out.push(`          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-8 mb-3 tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-orange-600 rounded-full inline-block"></span>
            ${formatInline(trimmed.slice(4))}
          </h3>`);
      continue;
    }
    if (trimmed.startsWith('## ')) {
      out.push(`          <h2 className="text-xl sm:text-2xl font-black text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            ${formatInline(trimmed.slice(3))}
          </h2>`);
      continue;
    }
    if (trimmed.startsWith('# ')) {
      out.push(`          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 mt-8 mb-4 tracking-tight">
            ${formatInline(trimmed.slice(2))}
          </h1>`);
      continue;
    }

    // Horizontal rule
    if (trimmed === '---') {
      out.push(`          <hr className="my-8 border-t border-[#e7e3da]" />`);
      continue;
    }

    // Empty line
    if (!trimmed) {
      continue;
    }

    // Check Checklist items [ ] or [x]
    if (/^-\s*\[([ xX])\]\s*(.*)/.test(trimmed)) {
      const match = trimmed.match(/^-\s*\[([ xX])\]\s*(.*)/);
      const isChecked = match[1].toLowerCase() === 'x';
      const label = match[2];
      out.push(`          <div className="flex items-center gap-2.5 my-1.5 text-sm ${isChecked ? 'text-emerald-800' : 'text-stone-700'}">
            <input type="checkbox" readOnly checked={${isChecked}} className="rounded border-stone-300 text-orange-600 focus:ring-orange-500" />
            <span className="${isChecked ? 'line-through text-stone-400' : ''}">${formatInline(label)}</span>
          </div>`);
      continue;
    }

    // Normal paragraph
    out.push(`          <p className="text-stone-700 text-sm leading-relaxed my-3">
            ${formatInline(trimmed)}
          </p>`);
  }

  flushList();
  flushTable();
  return out.join('\n');
}

let jsxOutput = `import React, { useState } from "react";
import {
  BookOpen,
  ChevronRight,
  Code2,
  Copy,
  Check,
  Search,
  Sparkles,
  Layers,
  ArrowRight,
  Calculator,
  Compass,
  Zap,
  Activity,
  Workflow,
  CheckSquare,
  Award,
} from "lucide-react";

export default function JavaComplexitySections() {
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const sections = [\n`;

buckets.forEach((b, idx) => {
  const h = b.header;
  const processedJsx = processLines(b.lines);
  jsxOutput += `    {
      id: ${h.id},
      title: ${JSON.stringify(h.title)},
      category: ${JSON.stringify(h.category)},
      anchor: ${JSON.stringify(h.anchor)},
      render: () => (
        <div className="space-y-4">
${processedJsx}
        </div>
      ),
    },\n`;
});

jsxOutput += `  ];

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeSection = sections.find((s) => s.id === activeSectionId) || sections[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
      {/* Table of Contents / Sidebar */}
      <aside className="lg:col-span-4 bg-white rounded-2xl border border-[#e7e3da] p-4 sm:p-5 shadow-2xs lg:sticky lg:top-20 max-h-[85vh] flex flex-col">
        <div className="pb-3 border-b border-[#e7e3da] mb-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span>Curriculum Index</span>
            </h3>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold">
              {sections.length} Chapters
            </span>
          </div>
          <input
            type="text"
            placeholder="Search chapters, topics, formulas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs px-3 py-2 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-orange-500 focus:bg-white transition"
          />
        </div>

        <nav className="overflow-y-auto space-y-1 pr-1 text-xs [scrollbar-width:thin] flex-1">
          {filteredSections.map((sec) => {
            const isActive = sec.id === activeSectionId;
            return (
              <button
                key={sec.id}
                onClick={() => {
                  setActiveSectionId(sec.id);
                  window.scrollTo({ top: 380, behavior: "smooth" });
                }}
                className={\`w-full text-left px-3 py-2.5 rounded-xl transition flex items-start justify-between gap-2 \${
                  isActive
                    ? "bg-orange-600 text-white font-bold shadow-xs"
                    : "text-stone-700 hover:bg-stone-100 hover:text-stone-900"
                }\`}
              >
                <div className="flex-1 truncate">
                  <div className={\`text-[10px] uppercase font-mono tracking-wider truncate mb-0.5 \${
                    isActive ? "text-orange-200" : "text-stone-600 font-semibold"
                  }\`}>
                    {sec.category}
                  </div>
                  <div className="truncate text-xs">{sec.title}</div>
                </div>
                <ChevronRight className={\`w-3.5 h-3.5 mt-1 shrink-0 \${isActive ? "text-white" : "text-stone-600"}\`} />
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Chapter Content View */}
      <section className="lg:col-span-8 bg-white rounded-2xl sm:rounded-3xl border border-[#e7e3da] p-6 sm:p-10 shadow-sm min-h-[600px]">
        {/* Section Header Banner */}
        <div className="border-b border-[#e7e3da] pb-6 mb-8">
          <div className="text-xs uppercase font-mono font-bold tracking-wider text-orange-600 mb-1.5">
            {activeSection.category}
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
            {activeSection.title}
          </h1>
        </div>

        {/* Section Body */}
        <div className="prose prose-stone max-w-none text-stone-800 leading-relaxed">
          {activeSection.render()}
        </div>

        {/* Next / Previous Navigator Footer */}
        <div className="mt-12 pt-6 border-t border-[#e7e3da] flex items-center justify-between gap-4">
          <button
            disabled={activeSectionId === 0}
            onClick={() => {
              setActiveSectionId((prev) => Math.max(0, prev - 1));
              window.scrollTo({ top: 380, behavior: "smooth" });
            }}
            className="px-4 py-2 rounded-xl border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            &larr; Previous Chapter
          </button>
          <span className="text-xs text-stone-500 font-mono">
            Chapter {activeSectionId + 1} of {sections.length}
          </span>
          <button
            disabled={activeSectionId === sections.length - 1}
            onClick={() => {
              setActiveSectionId((prev) => Math.min(sections.length - 1, prev + 1));
              window.scrollTo({ top: 380, behavior: "smooth" });
            }}
            className="px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-semibold hover:bg-orange-500 disabled:opacity-40 disabled:cursor-not-allowed transition shadow-2xs"
          >
            Next Chapter &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
`;

fs.writeFileSync(outPath, jsxOutput, 'utf8');
console.log(`Successfully generated ${outPath} (${(jsxOutput.length / 1024).toFixed(1)} KB)`);
