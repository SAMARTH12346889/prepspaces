const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m1_java_original.txt');
const outPath = path.resolve(__dirname, '../src/Componets/JavaIntroSections.jsx');
const content = fs.readFileSync(rawFile, 'utf8');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l) => /^#\s+Module 1\s+—/.test(l), title: "Module 1: Complete Curriculum Specification", category: "Course Roadmap · Overview", anchor: "overview" },
  { id: 1, test: (l) => /^#\s+1\.\s+Introduction to Computer Science/.test(l), title: "1. Introduction to Computer Science and Computational Thinking", category: "Part 1 · Computer Science Foundations", anchor: "section-1" },
  { id: 2, test: (l) => /^#\s+2\.\s+Programming Languages and Java's Role/.test(l), title: "2. Programming Languages and Java's Role in Software Development", category: "Part 1 · Programming Languages & Java", anchor: "section-2" },
  { id: 3, test: (l) => /^#\s+3\.\s+Java Architecture:\s+JDK,\s+JRE,\s+and\s+JVM/.test(l), title: "3. Java Architecture: JDK, JRE, and JVM", category: "Part 2 · Architecture: JDK, JRE & JVM", anchor: "section-3" },
  { id: 4, test: (l) => /^#\s+4\.\s+Java Installation and Development Environment/.test(l), title: "4. Java Installation and Development Environment", category: "Part 2 · Environment & Toolchain", anchor: "section-4" },
  { id: 5, test: (l) => /^#\s+5\.\s+Java Program Structure/.test(l), title: "5. Java Program Structure", category: "Part 3 · Java Program Anatomy", anchor: "section-5" },
  { id: 6, test: (l) => /^#\s+6\.\s+Compilation and Execution Process/.test(l), title: "6. Compilation and Execution Process", category: "Part 3 · Compilation & Bytecode Execution", anchor: "section-6" },
  { id: 7, test: (l) => /^#\s+7\.\s+Understanding the main\(\) Method in Detail/.test(l), title: "7. Understanding the main() Method in Detail", category: "Part 3 · The main() Entry Point", anchor: "section-7" },
  { id: 8, test: (l) => /^#\s+8\.\s+Variables and Constants/.test(l), title: "8. Variables and Constants", category: "Part 4 · Variables, Constants & Scope", anchor: "section-8" },
  { id: 9, test: (l) => /^#\s+9\.\s+Primitive Data Types/.test(l), title: "9. Primitive Data Types", category: "Part 4 · Primitive Data Types & Memory", anchor: "section-9" },
  { id: 10, test: (l) => /^#\s+10\.\s+Type Conversion and Type Casting/.test(l), title: "10. Type Conversion and Type Casting", category: "Part 4 · Type Conversion & Casting", anchor: "section-10" },
  { id: 11, test: (l) => /^#\s+11\.\s+Operators and Expressions/.test(l), title: "11. Operators and Expressions", category: "Part 5 · Operators, Precedence & Evaluation", anchor: "section-11" },
  { id: 12, test: (l) => /^#\s+12\.\s+Input and Output Using Scanner/.test(l), title: "12. Input and Output Using Scanner", category: "Part 6 · Scanner & Console I/O", anchor: "section-12" },
  { id: 13, test: (l) => /^#\s+13\.\s+Comments and Coding Conventions/.test(l), title: "13. Comments and Coding Conventions", category: "Part 7 · Conventions & Documentation", anchor: "section-13" },
  { id: 14, test: (l) => /^#\s+14\.\s+Debugging Fundamentals/.test(l), title: "14. Debugging Fundamentals", category: "Part 8 · Debugging & Error Classification", anchor: "section-14" },
  { id: 15, test: (l) => /^#\s+15\.\s+First Java Programs/.test(l), title: "15. First Java Programs (8 Worked Examples)", category: "Part 9 · Worked Java Programs", anchor: "section-15" },
  { id: 16, test: (l) => /^#\s+16\.\s+Practical Laboratory Exercises/.test(l), title: "16. Practical Laboratory Exercises (5 Labs)", category: "Part 10 · Hands-on Laboratory Exercises", anchor: "section-16" },
  { id: 17, test: (l) => /^#\s+17\.\s+Independent Programming Assignments/.test(l), title: "17. Independent Programming Assignments (6 Tasks)", category: "Part 11 · Independent Assignments", anchor: "section-17" },
  { id: 18, test: (l) => /^#\s+18\.\s+Assessment and Review Questions/.test(l), title: "18. Assessment and Review Questions", category: "Part 12 · Assessment & Review", anchor: "section-18" },
  { id: 19, test: (l) => /^#\s+19\.\s+Mini Project\s+—\s+Student Result/.test(l), title: "19. Mini Project — Student Result and Profile System", category: "Part 13 · End-of-Module Mini Project", anchor: "section-19" },
  { id: 20, test: (l) => /^#\s+20\.\s+Common Beginner Mistakes in Java/.test(l), title: "20. Common Beginner Mistakes in Java", category: "Part 14 · Beginner Traps & Antipatterns", anchor: "section-20" },
  { id: 21, test: (l) => /^#\s+21\.\s+Module Revision Sheet/.test(l), title: "21. Module Revision Sheet", category: "Review · Module Revision Sheet", anchor: "section-21" },
  { id: 22, test: (l) => /^#\s+22\.\s+Recommended Learning Resources/.test(l), title: "22. Recommended Learning Resources", category: "References · Official Learning Resources", anchor: "section-22" },
  { id: 23, test: (l) => /^#\s+23\.\s+Module Completion Criteria/.test(l), title: "23. Module Completion Criteria", category: "Milestone · Completion Criteria & Next Steps", anchor: "section-23" }
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
    // If anything before first header
    currentBucket = {
      header: sectionHeaders[0],
      lines: [lines[i]]
    };
  }
}
if (currentBucket) buckets.push(currentBucket);

console.log(`Parsed ${buckets.length} section buckets.`);

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
              <span className="text-stone-500">Java SE Standard</span>
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
    if (inTable && tableHeaders.length > 0) {
      out.push(renderTable(tableHeaders, tableRows));
      tableHeaders = [];
      tableRows = [];
      inTable = false;
    }
  };

  const flushList = () => {
    if (inList && listItems.length > 0) {
      if (isNumberedList) {
        out.push(`          <ol className="list-decimal pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
${listItems.map(item => `            <li>${formatInline(item)}</li>`).join('\n')}
          </ol>`);
      } else {
        out.push(`          <ul className="list-disc pl-5 space-y-2 text-stone-700 text-sm sm:text-base my-3 leading-relaxed">
${listItems.map(item => `            <li>${formatInline(item)}</li>`).join('\n')}
          </ul>`);
      }
      listItems = [];
      inList = false;
    }
  };

  for (let i = 0; i < rawLines.length; i++) {
    const raw = rawLines[i];
    const trimmed = raw.trim();

    // Check code fence
    if (trimmed.startsWith('```')) {
      if (inCode) {
        flushCode();
      } else {
        flushTable();
        flushList();
        inCode = true;
        codeLang = trimmed.substring(3).trim() || 'java';
        codeBuffer = [];
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(raw);
      continue;
    }

    // Check table row
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      flushCode();
      flushList();
      const cells = trimmed.split('|').slice(1, -1).map(c => c.trim());
      if (/^:?---+:?$/.test(cells[0])) {
        // separator row, ignore
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
    const bulletMatch = trimmed.match(/^-\s+(.*)$/);
    const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);

    if (bulletMatch) {
      flushCode();
      flushTable();
      if (!inList || isNumberedList) {
        flushList();
        inList = true;
        isNumberedList = false;
      }
      listItems.push(bulletMatch[1]);
      continue;
    } else if (numMatch) {
      flushCode();
      flushTable();
      if (!inList || !isNumberedList) {
        flushList();
        inList = true;
        isNumberedList = true;
      }
      listItems.push(numMatch[2]);
      continue;
    } else {
      flushList();
    }

    if (!trimmed) continue;
    if (trimmed === '---') continue;

    // Headings
    if (trimmed.startsWith('## ')) {
      const headingText = trimmed.replace(/^##\s+/, '');
      out.push(`          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100 flex items-center gap-2">
            <span>${formatInline(headingText)}</span>
          </h3>`);
      continue;
    }

    if (trimmed.startsWith('### ')) {
      const headingText = trimmed.replace(/^###\s+/, '');
      out.push(`          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">
            <span>${formatInline(headingText)}</span>
          </h4>`);
      continue;
    }

    if (trimmed.startsWith('#### ')) {
      const headingText = trimmed.replace(/^####\s+/, '');
      out.push(`          <h5 className="text-sm sm:text-base font-bold text-stone-800 mt-3 mb-1">
            <span>${formatInline(headingText)}</span>
          </h5>`);
      continue;
    }

    // Callout / question markers
    if (trimmed.startsWith('**Question') || trimmed.startsWith('**Lab') || trimmed.startsWith('**Assignment') || trimmed.startsWith('**Program')) {
      out.push(`          <div className="mt-4 mb-2 p-3 rounded-lg bg-orange-50/70 border border-orange-200/80 font-semibold text-stone-900 text-sm sm:text-base">
            ${formatInline(trimmed)}
          </div>`);
      continue;
    }

    // Standard paragraph
    out.push(`          <p className="text-stone-700 leading-relaxed text-sm sm:text-base my-2">
            ${formatInline(trimmed)}
          </p>`);
  }

  flushCode();
  flushTable();
  flushList();

  return out.join('\n');
}

let fileContent = `import React from "react";
import { Coffee, Layers, CheckCircle2, ArrowRight, ExternalLink, Terminal, Code, Cpu, ShieldCheck } from "lucide-react";

export default function JavaIntroSections() {
  return (
    <div className="space-y-10">
`;

for (let b = 0; b < buckets.length; b++) {
  const bucket = buckets[b];
  const h = bucket.header;
  const sectionBody = processLines(bucket.lines);

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
${sectionBody}
        </div>
      </section>\n\n`;
}

fileContent += `    </div>
  );
}
`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log('Successfully generated JavaIntroSections.jsx!');
