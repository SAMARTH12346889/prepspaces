const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m6_java_original.txt');
const outPath = path.resolve(__dirname, '../src/Componets/JavaRecursionSections.jsx');
const content = fs.readFileSync(rawFile, 'utf8');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l) => /^#\s+Module 6\s+—/.test(l), title: "Module 6: Complete Curriculum Specification", category: "Course Roadmap · Overview", anchor: "overview" },
  { id: 1, test: (l) => /^#\s+1\.\s+Understanding Recursion/.test(l), title: "1. Understanding Recursion", category: "Part 1 · Recursive Thinking", anchor: "section-1" },
  { id: 2, test: (l) => /^#\s+2\.\s+Recursive Function Design/.test(l), title: "2. Recursive Function Design", category: "Part 1 · Four-Step Design Method", anchor: "section-2" },
  { id: 3, test: (l) => /^#\s+3\.\s+Base Cases and Recursive Cases/.test(l), title: "3. Base Cases and Recursive Cases", category: "Part 1 · Termination & Progress", anchor: "section-3" },
  { id: 4, test: (l) => /^#\s+4\.\s+Understanding the Call Stack/.test(l), title: "4. Understanding the Call Stack", category: "Part 2 · Runtime Stack Frames", anchor: "section-4" },
  { id: 5, test: (l) => /^#\s+5\.\s+Recursion Tree Visualization/.test(l), title: "5. Recursion Tree Visualization", category: "Part 2 · Branching & Memoization", anchor: "section-5" },
  { id: 6, test: (l) => /^#\s+6\.\s+Tail and Non-Tail Recursion/.test(l), title: "6. Tail and Non-Tail Recursion", category: "Part 2 · Accumulators & JVM Stack", anchor: "section-6" },
  { id: 7, test: (l) => /^#\s+7\.\s+Recursion Versus Iteration/.test(l), title: "7. Recursion Versus Iteration", category: "Part 3 · Trade-offs & Efficiency", anchor: "section-7" },
  { id: 8, test: (l) => /^#\s+8\.\s+Mathematical Induction/.test(l), title: "8. Mathematical Induction", category: "Part 3 · Proofs & Correctness", anchor: "section-8" },
  { id: 9, test: (l) => /^#\s+9\.\s+Permutations and Combinations/.test(l), title: "9. Permutations and Combinations", category: "Part 4 · Combinatorial Foundations", anchor: "section-9" },
  { id: 10, test: (l) => /^#\s+10\.\s+Subsequences and Subset Generation/.test(l), title: "10. Subsequences and Subset Generation", category: "Part 4 · Include-Exclude & Bitmasks", anchor: "section-10" },
  { id: 11, test: (l) => /^#\s+11\.\s+Introduction to Backtracking/.test(l), title: "11. Introduction to Backtracking", category: "Part 5 · Choose-Explore-Unchoose", anchor: "section-11" },
  { id: 12, test: (l) => /^#\s+12\.\s+Constraint-Based Search/.test(l), title: "12. Constraint-Based Search", category: "Part 5 · State Spaces & Pruning", anchor: "section-12" },
  { id: 13, test: (l) => /^#\s+13\.\s+Permutation Generation Through Backtracking/.test(l), title: "13. Permutation Generation Through Backtracking", category: "Part 5 · Backtracking Permutations", anchor: "section-13" },
  { id: 14, test: (l) => /^#\s+14\.\s+N-Queens Problem/.test(l), title: "14. N-Queens Problem", category: "Part 6 · Classic Constraint Satisfaction", anchor: "section-14" },
  { id: 15, test: (l) => /^#\s+15\.\s+Sudoku Solver Using Backtracking/.test(l), title: "15. Sudoku Solver Using Backtracking", category: "Part 6 · Grid Constraint Satisfaction", anchor: "section-15" },
  { id: 16, test: (l) => /^#\s+16\.\s+Rat in a Maze/.test(l), title: "16. Rat in a Maze", category: "Part 7 · Grid Pathfinding", anchor: "section-16" },
  { id: 17, test: (l) => /^#\s+17\.\s+General Maze Pathfinding/.test(l), title: "17. General Maze Pathfinding", category: "Part 7 · 4-Direction DFS & BFS", anchor: "section-17" },
  { id: 18, test: (l) => /^#\s+18\.\s+Recursive Complexity Analysis/.test(l), title: "18. Recursive Complexity Analysis", category: "Part 8 · Recurrence & Master Theorem", anchor: "section-18" },
  { id: 19, test: (l) => /^#\s+19\.\s+Divide-and-Conquer Versus Backtracking/.test(l), title: "19. Divide-and-Conquer Versus Backtracking", category: "Part 8 · Algorithmic Paradigms", anchor: "section-19" },
  { id: 20, test: (l) => /^#\s+20\.\s+Advanced Recursive Problem-Solving Patterns/.test(l), title: "20. Advanced Recursive Problem-Solving Patterns", category: "Part 9 · Core Design Patterns", anchor: "section-20" },
  { id: 21, test: (l) => /^#\s+21\.\s+Practical Programming Examples/.test(l), title: "21. Practical Programming Examples (7 Programs)", category: "Part 10 · Worked Problem Set", anchor: "section-21" },
  { id: 22, test: (l) => /^#\s+22\.\s+Recursive Complexity Practice/.test(l), title: "22. Recursive Complexity Practice", category: "Part 10 · Recurrence Drill", anchor: "section-22" },
  { id: 23, test: (l) => /^#\s+23\.\s+Practical Laboratory Exercises/.test(l), title: "23. Practical Laboratory Exercises (10 Labs)", category: "Part 11 · 10 Hands-on Laboratories", anchor: "section-23" },
  { id: 24, test: (l) => /^#\s+24\.\s+Independent Programming Assignments/.test(l), title: "24. Independent Programming Assignments (10 Projects)", category: "Part 12 · 10 Assignments", anchor: "section-24" },
  { id: 25, test: (l) => /^#\s+25\.\s+Assessment and Review Questions/.test(l), title: "25. Assessment and Review Questions", category: "Part 13 · 20 MCQs, 38 Qs & Output", anchor: "section-25" },
  { id: 26, test: (l) => /^#\s+26\.\s+Find the Error and Correct the Logic/.test(l), title: "26. Find the Error and Correct the Logic", category: "Part 14 · Code Diagnostic Clinic", anchor: "section-26" },
  { id: 27, test: (l) => /^#\s+27\.\s+Mini Project\s+—\s+Recursive and Backtracking Problem Solver/.test(l), title: "27. Mini Project — Recursive & Backtracking Problem Solver", category: "Part 15 · Capstone Architecture", anchor: "section-27" },
  { id: 28, test: (l) => /^#\s+28\.\s+Common Mistakes in Recursion and Backtracking/.test(l), title: "28. Common Mistakes in Recursion & Backtracking", category: "Part 16 · Antipatterns & Diagnostic Matrix", anchor: "section-28" },
  { id: 29, test: (l) => /^#\s+29\.\s+Advanced Problem-Solving Challenges/.test(l), title: "29. Advanced Problem-Solving Challenges (30 Problems)", category: "Part 17 · Beginner, Intermediate & Advanced", anchor: "section-29" },
  { id: 30, test: (l) => /^#\s+30\.\s+Module Revision Sheet/.test(l), title: "30. Module Revision Sheet", category: "Part 18 · Quick Reference Guide", anchor: "section-30" },
  { id: 31, test: (l) => /^#\s+31\.\s+Module Completion Criteria/.test(l), title: "31. Module Completion Criteria", category: "Milestone · Completion Checklist", anchor: "section-31" },
  { id: 32, test: (l) => /^#\s+32\.\s+Phase 1\s+—\s+Java Programming and Problem-Solving Foundation/.test(l), title: "32. Phase 1 — Java Foundations Final Capstone & Transition to DSA", category: "Milestone · Phase 1 Exit Mastery", anchor: "section-32" },
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
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      inList = true;
      listItems.push(trimmed.slice(2));
      continue;
    } else if (/^\d+\.\s+/.test(trimmed)) {
      flushList();
      const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
      out.push(`          <div className="flex items-start gap-3 my-2.5 text-sm text-stone-700 leading-relaxed">
            <span className="flex items-center justify-center w-6 h-6 rounded-md bg-stone-100 border border-stone-200 text-stone-800 font-mono text-xs font-bold shrink-0 mt-0.5">${numMatch[1]}</span>
            <div className="flex-1">${formatInline(numMatch[2])}</div>
          </div>`);
      continue;
    } else {
      flushList();
    }

    // Blank line
    if (!trimmed) {
      continue;
    }

    // Dividers
    if (trimmed === '---' || trimmed === '***') {
      out.push(`          <hr className="my-8 border-[#e7e3da]" />`);
      continue;
    }

    // Callout alerts: > [!NOTE] or > [!IMPORTANT] or blockquotes
    if (trimmed.startsWith('>')) {
      const qText = trimmed.replace(/^>\s*/, '');
      out.push(`          <div className="p-4 rounded-xl bg-orange-50/60 border-l-4 border-orange-500 my-4 text-sm text-stone-800 shadow-2xs">
            <div className="font-semibold text-orange-950 flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
              Core Architectural Directive
            </div>
            <div className="leading-relaxed text-stone-700">${formatInline(qText)}</div>
          </div>`);
      continue;
    }

    // Headings
    if (trimmed.startsWith('#### ')) {
      out.push(`          <h4 className="text-base font-bold text-stone-900 mt-6 mb-2 tracking-tight">${formatInline(trimmed.slice(5))}</h4>`);
      continue;
    }
    if (trimmed.startsWith('### ')) {
      out.push(`          <h3 className="text-lg font-bold text-stone-900 mt-8 mb-3 pb-1 border-b border-stone-200/60 flex items-center gap-2">
            <span className="w-1.5 h-4 rounded-full bg-orange-600 inline-block"></span>
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

    // Regular paragraph
    out.push(`          <p className="text-stone-700 my-3 text-sm sm:text-base leading-relaxed">${formatInline(trimmed)}</p>`);
  }

  flushList();
  flushTable();

  return out.join('\n');
}

let jsxOutput = `// Comprehensive Curriculum Sections for Java Module 6 — Recursion, Backtracking & Mathematical Foundations
import React, { useState } from "react";
import { BookOpen, ChevronRight, Hash, Sparkles, CheckCircle2, Copy, Check, Terminal, ExternalLink } from "lucide-react";

export default function JavaRecursionSections() {
  const [activeSectionId, setActiveSectionId] = useState(0);
  const [copiedId, setCopiedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleCopy = (id, text) => {
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
            placeholder="Search chapters, topics, rules..."
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
