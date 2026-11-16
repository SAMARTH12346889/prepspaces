const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m4_java_original.txt');
const outPath = path.resolve(__dirname, '../src/Componets/JavaOOPSections.jsx');
const content = fs.readFileSync(rawFile, 'utf8');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l) => /^#\s+Module 4\s+—/.test(l), title: "Module 4: Complete Curriculum Specification", category: "Course Roadmap · Overview", anchor: "overview" },
  { id: 1, test: (l) => /^#\s+1\.\s+Introduction to Object-Oriented Programming/.test(l), title: "1. Introduction to Object-Oriented Programming", category: "Part 1 · Paradigm Shift", anchor: "section-1" },
  { id: 2, test: (l) => /^#\s+2\.\s+The Four Main Principles of OOP/.test(l), title: "2. The Four Main Principles of OOP", category: "Part 1 · OOP Pillars", anchor: "section-2" },
  { id: 3, test: (l) => /^#\s+3\.\s+Classes and Objects/.test(l), title: "3. Classes and Objects", category: "Part 2 · Blueprints & Runtime Instances", anchor: "section-3" },
  { id: 4, test: (l) => /^#\s+4\.\s+Constructors/.test(l), title: "4. Constructors", category: "Part 2 · Object Initialization & Chaining", anchor: "section-4" },
  { id: 5, test: (l) => /^#\s+5\.\s+The this Keyword/.test(l), title: "5. The this Keyword", category: "Part 3 · Instance References", anchor: "section-5" },
  { id: 6, test: (l) => /^#\s+6\.\s+The super Keyword/.test(l), title: "6. The super Keyword", category: "Part 3 · Superclass Invocations", anchor: "section-6" },
  { id: 7, test: (l) => /^#\s+7\.\s+Encapsulation/.test(l), title: "7. Encapsulation", category: "Part 4 · Data Hiding & Invariants", anchor: "section-7" },
  { id: 8, test: (l) => /^#\s+8\.\s+Inheritance/.test(l), title: "8. Inheritance", category: "Part 5 · Class Hierarchies & IS-A", anchor: "section-8" },
  { id: 9, test: (l) => /^#\s+9\.\s+Method Overriding/.test(l), title: "9. Method Overriding", category: "Part 5 · Behavioral Specialization", anchor: "section-9" },
  { id: 10, test: (l) => /^#\s+10\.\s+Polymorphism/.test(l), title: "10. Polymorphism", category: "Part 6 · Dynamic Dispatch & Polymorphism", anchor: "section-10" },
  { id: 11, test: (l) => /^#\s+11\.\s+Abstraction/.test(l), title: "11. Abstraction", category: "Part 7 · Essential Operations", anchor: "section-11" },
  { id: 12, test: (l) => /^#\s+12\.\s+Abstract Classes/.test(l), title: "12. Abstract Classes", category: "Part 7 · Incomplete Base Classes", anchor: "section-12" },
  { id: 13, test: (l) => /^#\s+13\.\s+Interfaces/.test(l), title: "13. Interfaces", category: "Part 8 · Contracts & Multiple Realization", anchor: "section-13" },
  { id: 14, test: (l) => /^#\s+14\.\s+Static Members/.test(l), title: "14. Static Members", category: "Part 9 · Class-Level State & Methods", anchor: "section-14" },
  { id: 15, test: (l) => /^#\s+15\.\s+The final Keyword/.test(l), title: "15. The final Keyword", category: "Part 9 · Immutability & Sealing", anchor: "section-15" },
  { id: 16, test: (l) => /^#\s+16\.\s+Access Modifiers/.test(l), title: "16. Access Modifiers", category: "Part 10 · Visibility Boundaries", anchor: "section-16" },
  { id: 17, test: (l) => /^#\s+17\.\s+Packages in Java/.test(l), title: "17. Packages in Java", category: "Part 10 · Modular Namespaces", anchor: "section-17" },
  { id: 18, test: (l) => /^#\s+18\.\s+Composition Versus Inheritance/.test(l), title: "18. Composition Versus Inheritance", category: "Part 11 · HAS-A vs IS-A Design", anchor: "section-18" },
  { id: 19, test: (l) => /^#\s+19\.\s+Object Relationships/.test(l), title: "19. Object Relationships", category: "Part 11 · Association, Aggregation & Composition", anchor: "section-19" },
  { id: 20, test: (l) => /^#\s+20\.\s+UML Class Diagrams/.test(l), title: "20. UML Class Diagrams", category: "Part 12 · System Modeling & UML", anchor: "section-20" },
  { id: 21, test: (l) => /^#\s+21\.\s+Introduction to SOLID Principles/.test(l), title: "21. Introduction to SOLID Principles", category: "Part 13 · Professional Software Design", anchor: "section-21" },
  { id: 22, test: (l) => /^#\s+22\.\s+Practical OOP Example\s+—\s+Banking Management System/.test(l), title: "22. Practical OOP Example — Banking Management System", category: "Part 14 · Full Worked Architecture", anchor: "section-22" },
  { id: 23, test: (l) => /^#\s+23\.\s+Practical Laboratory Exercises/.test(l), title: "23. Practical Laboratory Exercises (10 Labs)", category: "Part 15 · 10 Hands-on Laboratories", anchor: "section-23" },
  { id: 24, test: (l) => /^#\s+24\.\s+Independent Programming Assignments/.test(l), title: "24. Independent Programming Assignments (8 Assignments)", category: "Part 16 · 8 Independent Projects", anchor: "section-24" },
  { id: 25, test: (l) => /^#\s+25\.\s+Assessment and Review Questions/.test(l), title: "25. Assessment and Review Questions", category: "Part 17 · 20 MCQs & Theory Review", anchor: "section-25" },
  { id: 26, test: (l) => /^#\s+26\.\s+Mini Project\s+—\s+University Course Registration/.test(l), title: "26. Mini Project — University Course Registration & Management System", category: "Part 18 · Capstone Mini Project", anchor: "section-26" },
  { id: 27, test: (l) => /^#\s+27\.\s+Recommended Learning Resources/.test(l), title: "27. Recommended Learning Resources", category: "References · Curated Resources", anchor: "section-27" },
  { id: 28, test: (l) => /^#\s+28\.\s+Module Revision Sheet/.test(l), title: "28. Module Revision Sheet", category: "Review · Module Revision Sheet", anchor: "section-28" },
  { id: 29, test: (l) => /^#\s+29\.\s+Module Completion Criteria/.test(l), title: "29. Module Completion Criteria", category: "Milestone · Completion Checklist", anchor: "section-29" },
  { id: 30, test: (l) => /^#\s+30\.\s+Phase 1\s+—\s+Java Programming Foundations:\s+Completion Milestone/.test(l), title: "30. Phase 1 — Java Foundations Milestone & Transition to DSA", category: "Milestone · Phase 1 Capstone", anchor: "section-30" }
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
  let isNumberedList = false;

  const flushCode = () => {
    if (codeBuffer.length > 0) {
      out.push(renderCodeBlock(codeBuffer.join('\n'), codeLang));
      codeBuffer = [];
      inCode = false;
    }
  };

  const flushTable = () => {
    if (tableHeaders.length > 0) {
      out.push(renderTable(tableHeaders, tableRows));
      tableHeaders = [];
      tableRows = [];
      inTable = false;
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      const tag = isNumberedList ? 'ol' : 'ul';
      const listClass = isNumberedList
        ? 'list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed'
        : 'list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed';

      let itemsHtml = `          <${tag} className="${listClass}">\n`;
      for (const item of listItems) {
        itemsHtml += `            <li>${formatInline(item)}</li>\n`;
      }
      itemsHtml += `          </${tag}>`;
      out.push(itemsHtml);
      listItems = [];
      inList = false;
      isNumberedList = false;
    }
  };

  for (let i = 0; i < rawLines.length; i++) {
    const rawLine = rawLines[i];
    const line = rawLine.trim();

    // Check code blocks
    if (line.startsWith('```')) {
      if (!inCode) {
        flushTable();
        flushList();
        inCode = true;
        codeLang = line.replace('```', '').trim() || 'java';
        codeBuffer = [];
      } else {
        flushCode();
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(rawLine);
      continue;
    }

    // Check table
    if (line.startsWith('|') && line.endsWith('|')) {
      flushList();
      const cells = line.split('|').slice(1, -1).map(c => c.trim());
      if (/^[:\s\-\|]+$/.test(line)) {
        // separator line
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
    } else if (inTable) {
      flushTable();
    }

    // Check list
    const bulletMatch = line.match(/^[-*]\s+(.*)$/);
    const numberMatch = line.match(/^\d+\.\s+(.*)$/);
    const checklistMatch = line.match(/^-\s+\[([ xX])\]\s+(.*)$/);

    if (checklistMatch) {
      flushTable();
      flushList();
      const checked = checklistMatch[1].toLowerCase() === 'x';
      const text = checklistMatch[2];
      out.push(`          <div className="flex items-start gap-2.5 my-2 text-stone-700 text-sm sm:text-base">
            <span className="w-4 h-4 mt-0.5 rounded border border-stone-300 flex items-center justify-center ${checked ? 'bg-orange-600 text-white border-orange-600' : 'bg-stone-50 text-transparent'}">
              ✓
            </span>
            <span>${formatInline(text)}</span>
          </div>`);
      continue;
    }

    if (bulletMatch) {
      if (!inList || isNumberedList) {
        flushList();
        inList = true;
        isNumberedList = false;
      }
      listItems.push(bulletMatch[1]);
      continue;
    }

    if (numberMatch && !line.startsWith('1.1') && !line.startsWith('2.1')) {
      if (!inList || !isNumberedList) {
        flushList();
        inList = true;
        isNumberedList = true;
      }
      listItems.push(numberMatch[1]);
      continue;
    }

    if (inList) {
      flushList();
    }

    if (line === '') {
      continue;
    }

    if (line === '---') {
      out.push(`          <hr className="border-[#e7e3da] my-6" />`);
      continue;
    }

    // Headings
    if (line.startsWith('#### ')) {
      const headingText = line.replace('#### ', '');
      out.push(`          <h5 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">
            <span>${formatInline(headingText)}</span>
          </h5>`);
      continue;
    }

    if (line.startsWith('### ')) {
      const headingText = line.replace('### ', '');
      out.push(`          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span>${formatInline(headingText)}</span>
          </h4>`);
      continue;
    }

    if (line.startsWith('## ')) {
      const headingText = line.replace('## ', '');
      out.push(`          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>${formatInline(headingText)}</span>
          </h3>`);
      continue;
    }

    // Blockquote or Callout
    if (line.startsWith('>')) {
      const qText = line.replace(/^>\s*/, '');
      out.push(`          <div className="border-l-4 border-orange-500 bg-orange-50/60 p-4 rounded-r-xl text-stone-800 text-sm sm:text-base my-4 leading-relaxed font-sans shadow-2xs">
            ${formatInline(qText)}
          </div>`);
      continue;
    }

    // Default Paragraph
    out.push(`          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            ${formatInline(line)}
          </p>`);
  }

  flushCode();
  flushTable();
  flushList();

  return out.join('\n');
}

let fileContent = `import React from "react";
import { Box, Layers, ShieldCheck, GitFork, Cpu, Workflow, Award, CheckCircle2, BookOpen } from "lucide-react";

export default function JavaOOPSections() {
  return (
    <div className="space-y-10">
`;

for (let i = 0; i < buckets.length; i++) {
  const b = buckets[i];
  const h = b.header;
  const processedBody = processLines(b.lines);

  fileContent += `      {/* SECTION ${h.id}: ${h.title} */}
      <section id="${h.anchor}" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            ${h.category}
          </span>
          <span className="text-xs font-mono text-stone-500">Section ${h.id}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          ${h.title}
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
${processedBody}
        </div>
      </section>

`;
}

fileContent += `    </div>
  );
}
`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(`Successfully generated ${outPath} (${(fileContent.length / 1024).toFixed(1)} KB)`);
