const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m9_java_original.txt');
const outPath = path.resolve(__dirname, '../src/Componets/JavaLinkedListsSections.jsx');
const content = fs.readFileSync(rawFile, 'utf8');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l) => /^#\s+Module 9\s+—/.test(l), title: "Module 9: Curriculum Overview & Objectives", category: "Course Roadmap · Objectives", anchor: "overview" },
  { id: 1, test: (l) => /^#\s+PART 1\s+—\s+LINKED LIST FUNDAMENTALS/.test(l), title: "Part 1: Linked List Fundamentals & Node Structure", category: "Part 1 · Foundational Paradigms", anchor: "part-1" },
  { id: 2, test: (l) => /^#\s+PART 2\s+—\s+TYPES OF LINKED LISTS/.test(l), title: "Part 2: Singly, Doubly & Circular Linked Lists", category: "Part 2 · Linked Topologies", anchor: "part-2" },
  { id: 3, test: (l) => /^#\s+PART 3\s+—\s+INSERTION OPERATIONS/.test(l), title: "Part 3: Insertion Operations (Head, Tail & Index)", category: "Part 3 · Node Insertion", anchor: "part-3" },
  { id: 4, test: (l) => /^#\s+PART 4\s+—\s+DELETION OPERATIONS/.test(l), title: "Part 4: Deletion Operations (Head, Tail, Index & Value)", category: "Part 4 · Node Deletion", anchor: "part-4" },
  { id: 5, test: (l) => /^#\s+PART 5\s+—\s+SEARCHING AND TRAVERSAL/.test(l), title: "Part 5: Searching and Traversal", category: "Part 5 · Inspection & Length", anchor: "part-5" },
  { id: 6, test: (l) => /^#\s+PART 6\s+—\s+REVERSING A LINKED LIST/.test(l), title: "Part 6: Reversing a Linked List (Iterative & Recursive)", category: "Part 6 · Reversal Algorithms", anchor: "part-6" },
  { id: 7, test: (l) => /^#\s+PART 7\s+—\s+FINDING THE MIDDLE NODE/.test(l), title: "Part 7: Finding the Middle Node (Slow & Fast Pointers)", category: "Part 7 · Two-Pointer Pacing", anchor: "part-7" },
  { id: 8, test: (l) => /^#\s+PART 8\s+—\s+CYCLE DETECTION USING FLOYD'S ALGORITHM/.test(l), title: "Part 8: Floyd's Cycle Detection & Cycle Start", category: "Part 8 · Cycle Topology & Proof", anchor: "part-8" },
  { id: 9, test: (l) => /^#\s+PART 9\s+—\s+MERGE TWO SORTED LINKED LISTS/.test(l), title: "Part 9: Merge Two Sorted Linked Lists", category: "Part 9 · Dummy Nodes & Relinking", anchor: "part-9" },
  { id: 10, test: (l) => /^#\s+PART 10\s+—\s+REMOVING DUPLICATES/.test(l), title: "Part 10: Removing Duplicates (Sorted & Unsorted)", category: "Part 10 · Deduplication & HashSets", anchor: "part-10" },
  { id: 11, test: (l) => /^#\s+PART 11\s+—\s+INTERSECTION OF LINKED LISTS/.test(l), title: "Part 11: Intersection of Two Linked Lists", category: "Part 11 · Two-Pointer Switching Proof", anchor: "part-11" },
  { id: 12, test: (l) => /^#\s+PART 12\s+—\s+RECURSIVE LINKED LIST OPERATIONS/.test(l), title: "Part 12: Recursive Linked List Operations", category: "Part 12 · Call Stack Traversal", anchor: "part-12" },
  { id: 13, test: (l) => /^#\s+PART 13\s+—\s+COMPLETE JAVA IMPLEMENTATION FROM SCRATCH/.test(l), title: "Part 13: Complete Generic Singly Linked List", category: "Part 13 · Production Implementation", anchor: "part-13" },
  { id: 14, test: (l) => /^#\s+PART 14\s+—\s+COMPLETE DOUBLY LINKED LIST IMPLEMENTATION/.test(l), title: "Part 14: Generic Doubly Linked List", category: "Part 14 · Bidirectional Navigation", anchor: "part-14" },
  { id: 15, test: (l) => /^#\s+PART 15\s+—\s+CIRCULAR LINKED LIST IMPLEMENTATION/.test(l), title: "Part 15: Generic Circular Singly Linked List", category: "Part 15 · Cyclic Topology", anchor: "part-15" },
  { id: 16, test: (l) => /^#\s+PART 16\s+—\s+COMMON LINKED LIST INTERVIEW ALGORITHMS/.test(l), title: "Part 16: Common Linked List Interview Algorithms", category: "Part 16 · Reusable Utility Suite", anchor: "part-16" },
  { id: 17, test: (l) => /^#\s+PART 17\s+—\s+LINKED LIST VS ARRAY/.test(l), title: "Part 17: Linked List vs Array (Memory & Cache Locality)", category: "Part 17 · Systems Architecture Comparison", anchor: "part-17" },
  { id: 18, test: (l) => /^#\s+PART 18\s+—\s+JAVA'S BUILT-IN LINKEDLIST CLASS/.test(l), title: "Part 18: Java's Built-In java.util.LinkedList", category: "Part 18 · Collections Framework & Deque", anchor: "part-18" },
  { id: 19, test: (l) => /^#\s+PART 19\s+—\s+LINKED-LIST COMPLEXITY SUMMARY/.test(l), title: "Part 19: Complete Linked-List Complexity Matrix", category: "Part 19 · Theoretical Benchmarks", anchor: "part-19" },
  { id: 20, test: (l) => /^#\s+PART 20\s+—\s+COMMON LINKED-LIST MISTAKES/.test(l), title: "Part 20: 12 Common Linked-List Mistakes & Traps", category: "Part 20 · Defensive Engineering", anchor: "part-20" },
  { id: 21, test: (l) => /^#\s+PART 21\s+—\s+LABORATORY EXERCISES/.test(l), title: "Part 21: Laboratory Exercises (Labs 1-5)", category: "Part 21 · 5 Hands-on Laboratories", anchor: "part-21" },
  { id: 22, test: (l) => /^#\s+PART 22\s+—\s+ASSIGNMENTS/.test(l), title: "Part 22: Assignments (Problems 1-7)", category: "Part 22 · 7 Independent Projects", anchor: "part-22" },
  { id: 23, test: (l) => /^#\s+PART 23\s+—\s+KNOWLEDGE ASSESSMENT/.test(l), title: "Part 23: Knowledge Assessment (15 MCQs, 25 Qs & Output)", category: "Part 23 · Assessment Suite", anchor: "part-23" },
  { id: 24, test: (l) => /^#\s+PART 24\s+—\s+ANSWER KEY/.test(l), title: "Part 24: Answer Key & Comprehensive Explanations", category: "Part 24 · Verification & Solutions", anchor: "part-24" },
  { id: 25, test: (l) => /^#\s+PART 25\s+—\s+MINI-PROJECT/.test(l), title: "Part 25: Mini-Project — Linked List Management System", category: "Part 25 · Complete Capstone Project", anchor: "part-25" },
  { id: 26, test: (l) => /^#\s+PART 26\s+—\s+INTERVIEW PREPARATION/.test(l), title: "Part 26: Interview Preparation (Top 15 Technical Questions)", category: "Part 26 · High-Yield Interview Q&A", anchor: "part-26" },
  { id: 27, test: (l) => /^#\s+PART 27\s+—\s+REVISION SHEET/.test(l), title: "Part 27: Module Revision Sheet & Essential Patterns", category: "Part 27 · Quick Reference Summaries", anchor: "part-27" },
  { id: 28, test: (l) => /^#\s+PART 28\s+—\s+MODULE COMPLETION CRITERIA/.test(l), title: "Part 28: Module Completion Criteria & Final Takeaways", category: "Milestone · Linked Structure Mastery", anchor: "part-28" }
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

export const JAVA_LINKED_LISTS_SECTIONS = [
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

export default JAVA_LINKED_LISTS_SECTIONS;
`;

fs.writeFileSync(outPath, componentCode, 'utf8');
console.log(`Generated ${outPath} successfully.`);
