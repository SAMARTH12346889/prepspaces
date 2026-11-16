const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m10_java_original.txt');
const outPath = path.resolve(__dirname, '../src/Componets/JavaStacksQueuesSections.jsx');
const content = fs.readFileSync(rawFile, 'utf8');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l) => /^#\s+Module 10\s+—/.test(l), title: "Module 10: Curriculum Overview & Objectives", category: "Course Roadmap · Objectives", anchor: "overview" },
  { id: 1, test: (l) => /^#\s+PART 1\s+—\s+STACK FUNDAMENTALS/.test(l), title: "Part 1: Stack Fundamentals & LIFO Paradigm", category: "Part 1 · Stack ADT", anchor: "part-1" },
  { id: 2, test: (l) => /^#\s+PART 2\s+—\s+STACK IMPLEMENTATION USING ARRAYS/.test(l), title: "Part 2: Stack Implementation Using Arrays (Fixed & Dynamic)", category: "Part 2 · Array Stack", anchor: "part-2" },
  { id: 3, test: (l) => /^#\s+PART 3\s+—\s+STACK IMPLEMENTATION USING LINKED LISTS/.test(l), title: "Part 3: Stack Implementation Using Linked Lists", category: "Part 3 · Linked Stack", anchor: "part-3" },
  { id: 4, test: (l) => /^#\s+PART 4\s+—\s+QUEUE FUNDAMENTALS/.test(l), title: "Part 4: Queue Fundamentals & FIFO Operations", category: "Part 4 · Queue ADT", anchor: "part-4" },
  { id: 5, test: (l) => /^#\s+PART 5\s+—\s+QUEUE IMPLEMENTATION USING ARRAYS/.test(l), title: "Part 5: Queue Implementation Using Arrays (Circular Queue)", category: "Part 5 · Circular Queue", anchor: "part-5" },
  { id: 6, test: (l) => /^#\s+PART 6\s+—\s+QUEUE IMPLEMENTATION USING LINKED LISTS/.test(l), title: "Part 6: Queue Implementation Using Linked Lists", category: "Part 6 · Linked Queue", anchor: "part-6" },
  { id: 7, test: (l) => /^#\s+PART 7\s+—\s+DEQUE/.test(l), title: "Part 7: Double-Ended Queue (Deque)", category: "Part 7 · Deque ADT", anchor: "part-7" },
  { id: 8, test: (l) => /^#\s+PART 8\s+—\s+JAVA ARRAYDEQUE/.test(l), title: "Part 8: Java ArrayDeque (Stack, Queue & Deque)", category: "Part 8 · Standard Collections", anchor: "part-8" },
  { id: 9, test: (l) => /^#\s+PART 9\s+—\s+MONOTONIC STACKS/.test(l), title: "Part 9: Monotonic Stacks (Increasing & Decreasing Invariants)", category: "Part 9 · Monotonic Stacks", anchor: "part-9" },
  { id: 10, test: (l) => /^#\s+PART 10\s+—\s+NEXT GREATER ELEMENT/.test(l), title: "Part 10: Next Greater Element (Monotonic Stack Resolution)", category: "Part 10 · Next Greater Element", anchor: "part-10" },
  { id: 11, test: (l) => /^#\s+PART 11\s+—\s+PREVIOUS SMALLER ELEMENT/.test(l), title: "Part 11: Previous Smaller Element", category: "Part 11 · Previous Smaller Element", anchor: "part-11" },
  { id: 12, test: (l) => /^#\s+PART 12\s+—\s+STOCK SPAN PROBLEM/.test(l), title: "Part 12: Stock Span Problem (Amortized Analysis)", category: "Part 12 · Stock Span", anchor: "part-12" },
  { id: 13, test: (l) => /^#\s+PART 13\s+—\s+LARGEST RECTANGLE IN HISTOGRAM/.test(l), title: "Part 13: Largest Rectangle in Histogram", category: "Part 13 · Histogram Area", anchor: "part-13" },
  { id: 14, test: (l) => /^#\s+PART 14\s+—\s+MONOTONIC QUEUES/.test(l), title: "Part 14: Monotonic Queues & Candidate Maintenance", category: "Part 14 · Monotonic Queues", anchor: "part-14" },
  { id: 15, test: (l) => /^#\s+PART 15\s+—\s+SLIDING WINDOW MAXIMUM/.test(l), title: "Part 15: Sliding Window Maximum (Monotonic Deque O(n))", category: "Part 15 · Sliding Window Max", anchor: "part-15" },
  { id: 16, test: (l) => /^#\s+PART 16\s+—\s+IMPORTANT APPLICATIONS OF STACKS AND QUEUES/.test(l), title: "Part 16: Real-World Applications (DFS, BFS, Undo/Redo & Parsing)", category: "Part 16 · Applications", anchor: "part-16" },
  { id: 17, test: (l) => /^#\s+PART 17\s+—\s+COMPARISON OF STACK, QUEUE, AND DEQUE/.test(l), title: "Part 17: Comparison of Stack, Queue, and Deque", category: "Part 17 · Structural Comparison", anchor: "part-17" },
  { id: 18, test: (l) => /^#\s+PART 18\s+—\s+COMPLEXITY COMPARISON/.test(l), title: "Part 18: Complete Complexity Comparison Matrix", category: "Part 18 · Complexity Benchmarks", anchor: "part-18" },
  { id: 19, test: (l) => /^#\s+PART 19\s+—\s+COMMON MISTAKES/.test(l), title: "Part 19: 13 Critical Mistakes & Traps to Avoid", category: "Part 19 · Defensive Engineering", anchor: "part-19" },
  { id: 20, test: (l) => /^#\s+PART 20\s+—\s+LABORATORY EXERCISES/.test(l), title: "Part 20: Laboratory Exercises (Labs 1-6)", category: "Part 20 · 6 Hands-on Laboratories", anchor: "part-20" },
  { id: 21, test: (l) => /^#\s+PART 21\s+—\s+ASSIGNMENTS/.test(l), title: "Part 21: Assignments (Problems 1-10)", category: "Part 21 · 10 Independent Projects", anchor: "part-21" },
  { id: 22, test: (l) => /^#\s+PART 22\s+—\s+KNOWLEDGE ASSESSMENT/.test(l), title: "Part 22: Knowledge Assessment (15 MCQs, 25 Qs & Output)", category: "Part 22 · Assessment Suite", anchor: "part-22" },
  { id: 23, test: (l) => /^#\s+PART 23\s+—\s+ANSWER KEY/.test(l), title: "Part 23: Answer Key & Comprehensive Explanations", category: "Part 23 · Verification & Solutions", anchor: "part-23" },
  { id: 24, test: (l) => /^#\s+PART 24\s+—\s+MINI-PROJECT/.test(l), title: "Part 24: Mini-Project — Stack and Queue Toolkit in Java", category: "Part 24 · Production Toolkit Capstone", anchor: "part-24" },
  { id: 25, test: (l) => /^#\s+PART 25\s+—\s+INTERVIEW PREPARATION/.test(l), title: "Part 25: Interview Preparation (Top 15 Technical Questions)", category: "Part 25 · High-Yield Interview Q&A", anchor: "part-25" },
  { id: 26, test: (l) => /^#\s+PART 26\s+—\s+REVISION SHEET/.test(l), title: "Part 26: Module Revision Sheet & Essential Patterns", category: "Part 26 · Quick Reference Summaries", anchor: "part-26" },
  { id: 27, test: (l) => /^#\s+PART 27\s+—\s+MODULE COMPLETION CRITERIA/.test(l), title: "Part 27: Module Completion Criteria & Final Takeaways", category: "Milestone · Stacks, Queues & Deques Mastery", anchor: "part-27" }
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
      out.push(`          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-10 mb-4 pb-2 border-b border-[#e7e3da] tracking-tight">
            ${formatInline(trimmed.slice(3))}
          </h2>`);
      continue;
    }
    if (trimmed.startsWith('# ')) {
      out.push(`          <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-950 mt-10 mb-6 tracking-tight">
            ${formatInline(trimmed.slice(2))}
          </h1>`);
      continue;
    }

    // Check horizontal rule
    if (trimmed === '---' || trimmed === '***') {
      out.push(`          <hr className="my-8 border-stone-200" />`);
      continue;
    }

    // Empty line
    if (!trimmed) {
      continue;
    }

    // Callout quote
    if (trimmed.startsWith('> ')) {
      out.push(`          <div className="p-4 my-4 rounded-xl bg-orange-50/70 border-l-4 border-orange-500 text-stone-800 text-sm leading-relaxed shadow-2xs">
            ${formatInline(trimmed.slice(2))}
          </div>`);
      continue;
    }

    // Normal paragraph
    out.push(`          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-3">${formatInline(trimmed)}</p>`);
  }

  flushList();
  flushTable();

  return out.join('\n');
}

const componentCode = `import React from "react";

export const JAVA_STACKS_QUEUES_SECTIONS = [
${buckets.map((b, idx) => {
  const renderedContent = processLines(b.lines);
  return `  {
    id: ${b.header.id},
    title: ${JSON.stringify(b.header.title)},
    category: ${JSON.stringify(b.header.category)},
    anchor: ${JSON.stringify(b.header.anchor)},
    content: (
      <div className="space-y-4">
${renderedContent}
      </div>
    )
  }`;
}).join(',\n')}
];

export default JAVA_STACKS_QUEUES_SECTIONS;
`;

fs.writeFileSync(outPath, componentCode, 'utf8');
console.log(`Generated ${outPath} successfully.`);
