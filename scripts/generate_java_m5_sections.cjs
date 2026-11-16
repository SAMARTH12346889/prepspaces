const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m5_java_original.txt');
const outPath = path.resolve(__dirname, '../src/Componets/JavaAdvancedSections.jsx');
const content = fs.readFileSync(rawFile, 'utf8');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l) => /^#\s+Module 5\s+—/.test(l), title: "Module 5: Complete Curriculum Specification", category: "Course Roadmap · Overview", anchor: "overview" },
  { id: 1, test: (l) => /^#\s+1\.\s+Introduction to Exception Handling/.test(l), title: "1. Introduction to Exception Handling", category: "Part 1 · Fault Tolerance", anchor: "section-1" },
  { id: 2, test: (l) => /^#\s+2\.\s+Java Exception Hierarchy/.test(l), title: "2. Java Exception Hierarchy", category: "Part 1 · Throwable Architecture", anchor: "section-2" },
  { id: 3, test: (l) => /^#\s+3\.\s+Checked and Unchecked Exceptions/.test(l), title: "3. Checked and Unchecked Exceptions", category: "Part 1 · Exception Categories", anchor: "section-3" },
  { id: 4, test: (l) => /^#\s+4\.\s+Try,\s+Catch,\s+and Finally/.test(l), title: "4. Try, Catch, and Finally", category: "Part 2 · Control Transfer & Handlers", anchor: "section-4" },
  { id: 5, test: (l) => /^#\s+5\.\s+Throw and Throws/.test(l), title: "5. Throw and Throws", category: "Part 2 · Explicit Signaling & Propagation", anchor: "section-5" },
  { id: 6, test: (l) => /^#\s+6\.\s+Custom Exceptions/.test(l), title: "6. Custom Exceptions", category: "Part 2 · Domain-Specific Diagnostics", anchor: "section-6" },
  { id: 7, test: (l) => /^#\s+7\.\s+Try-with-Resources/.test(l), title: "7. Try-with-Resources", category: "Part 2 · Automatic Resource Management", anchor: "section-7" },
  { id: 8, test: (l) => /^#\s+8\.\s+Generics/.test(l), title: "8. Generics", category: "Part 3 · Parametric Polymorphism", anchor: "section-8" },
  { id: 9, test: (l) => /^#\s+9\.\s+Generic Classes/.test(l), title: "9. Generic Classes", category: "Part 3 · Generic Types & Constraints", anchor: "section-9" },
  { id: 10, test: (l) => /^#\s+10\.\s+Generic Methods/.test(l), title: "10. Generic Methods", category: "Part 3 · Method-Level Type Inference", anchor: "section-10" },
  { id: 11, test: (l) => /^#\s+11\.\s+Bounded Type Parameters/.test(l), title: "11. Bounded Type Parameters", category: "Part 4 · Wildcards & PECS Principle", anchor: "section-11" },
  { id: 12, test: (l) => /^#\s+12\.\s+Type Erasure/.test(l), title: "12. Type Erasure", category: "Part 4 · JVM Bytecode Compatibility", anchor: "section-12" },
  { id: 13, test: (l) => /^#\s+13\.\s+Introduction to the Collections Framework/.test(l), title: "13. Introduction to the Collections Framework", category: "Part 5 · Framework Architecture", anchor: "section-13" },
  { id: 14, test: (l) => /^#\s+14\.\s+List Interface/.test(l), title: "14. List Interface", category: "Part 5 · ArrayList vs LinkedList", anchor: "section-14" },
  { id: 15, test: (l) => /^#\s+15\.\s+Set Interface/.test(l), title: "15. Set Interface", category: "Part 5 · HashSet, LinkedHashSet & TreeSet", anchor: "section-15" },
  { id: 16, test: (l) => /^#\s+16\.\s+Queue and Deque Interfaces/.test(l), title: "16. Queue and Deque Interfaces", category: "Part 6 · PriorityQueues & ArrayDeques", anchor: "section-16" },
  { id: 17, test: (l) => /^#\s+17\.\s+Map Interface/.test(l), title: "17. Map Interface", category: "Part 6 · Key-Value Systems & Hash Tables", anchor: "section-17" },
  { id: 18, test: (l) => /^#\s+18\.\s+Iterable and Iterator/.test(l), title: "18. Iterable and Iterator", category: "Part 7 · Traversal & Fail-Fast Mechanics", anchor: "section-18" },
  { id: 19, test: (l) => /^#\s+19\.\s+Comparable and Comparator/.test(l), title: "19. Comparable and Comparator", category: "Part 7 · Natural vs Strategy Sorting", anchor: "section-19" },
  { id: 20, test: (l) => /^#\s+20\.\s+Lambda Expressions/.test(l), title: "20. Lambda Expressions", category: "Part 8 · Functional Programming Syntax", anchor: "section-20" },
  { id: 21, test: (l) => /^#\s+21\.\s+Functional Interfaces/.test(l), title: "21. Functional Interfaces", category: "Part 8 · Standard java.util.function APIs", anchor: "section-21" },
  { id: 22, test: (l) => /^#\s+22\.\s+Method References/.test(l), title: "22. Method References", category: "Part 8 · Double-Colon :: Operator", anchor: "section-22" },
  { id: 23, test: (l) => /^#\s+23\.\s+Introduction to Stream API/.test(l), title: "23. Introduction to Stream API", category: "Part 9 · Stream Architecture", anchor: "section-23" },
  { id: 24, test: (l) => /^#\s+24\.\s+Stream Intermediate Operations/.test(l), title: "24. Stream Intermediate Operations", category: "Part 9 · Lazy Transformations", anchor: "section-24" },
  { id: 25, test: (l) => /^#\s+25\.\s+Stream Terminal Operations/.test(l), title: "25. Stream Terminal Operations", category: "Part 9 · Reductions & Short-Circuiting", anchor: "section-25" },
  { id: 26, test: (l) => /^#\s+26\.\s+Collectors and Stream Grouping/.test(l), title: "26. Collectors and Stream Grouping", category: "Part 10 · Aggregation & GroupingBy", anchor: "section-26" },
  { id: 27, test: (l) => /^#\s+27\.\s+Primitive Streams/.test(l), title: "27. Primitive Streams", category: "Part 10 · IntStream & Unboxed Performance", anchor: "section-27" },
  { id: 28, test: (l) => /^#\s+28\.\s+Parallel Streams/.test(l), title: "28. Parallel Streams", category: "Part 10 · Fork-Join & Thread Safety", anchor: "section-28" },
  { id: 29, test: (l) => /^#\s+29\.\s+Optional in Java/.test(l), title: "29. Optional in Java", category: "Part 11 · Null Safety & Monadic Flow", anchor: "section-29" },
  { id: 30, test: (l) => /^#\s+30\.\s+File Handling in Java/.test(l), title: "30. File Handling in Java", category: "Part 12 · Modern NIO.2 Path & Files", anchor: "section-30" },
  { id: 31, test: (l) => /^#\s+31\.\s+Byte Streams and Character Streams/.test(l), title: "31. Byte Streams and Character Streams", category: "Part 12 · I/O Stream Taxonomy", anchor: "section-31" },
  { id: 32, test: (l) => /^#\s+32\.\s+File Handling Best Practices/.test(l), title: "32. File Handling Best Practices", category: "Part 12 · Security & Atomicity Guidelines", anchor: "section-32" },
  { id: 33, test: (l) => /^#\s+33\.\s+Serialization Fundamentals/.test(l), title: "33. Serialization Fundamentals", category: "Part 13 · Object Graphs & Security Risks", anchor: "section-33" },
  { id: 34, test: (l) => /^#\s+34\.\s+Complete Practical Project\s+—\s+Student Record/.test(l), title: "34. Complete Practical Project — Student Record Management System", category: "Part 14 · Capstone Architecture", anchor: "section-34" },
  { id: 35, test: (l) => /^#\s+35\.\s+Practical Laboratory Exercises/.test(l), title: "35. Practical Laboratory Exercises (10 Labs)", category: "Part 15 · 10 Hands-on Laboratories", anchor: "section-35" },
  { id: 36, test: (l) => /^#\s+36\.\s+Independent Programming Assignments/.test(l), title: "36. Independent Programming Assignments (10 Assignments)", category: "Part 16 · 10 Independent Projects", anchor: "section-36" },
  { id: 37, test: (l) => /^#\s+37\.\s+Assessment and Review Questions/.test(l), title: "37. Assessment and Review Questions", category: "Part 17 · 30 MCQs & Deep Diagnostics", anchor: "section-37" },
  { id: 38, test: (l) => /^#\s+38\.\s+Practical Interview Questions/.test(l), title: "38. Practical Interview Questions (40 Topics)", category: "Part 18 · 40 Technical Interview Questions", anchor: "section-38" },
  { id: 39, test: (l) => /^#\s+39\.\s+Debugging and Common Advanced Java Mistakes/.test(l), title: "39. Debugging and Common Advanced Java Mistakes", category: "Part 19 · Antipatterns & Diagnostic Matrix", anchor: "section-39" },
  { id: 40, test: (l) => /^#\s+40\.\s+Recommended Learning Resources/.test(l), title: "40. Recommended Learning Resources", category: "References · Curated Resources", anchor: "section-40" },
  { id: 41, test: (l) => /^#\s+41\.\s+Module Completion Criteria/.test(l), title: "41. Module Completion Criteria", category: "Milestone · Completion Checklist", anchor: "section-41" },
  { id: 42, test: (l) => /^#\s+42\.\s+Phase 1\s+—\s+Java Programming Foundations:\s+Final Curriculum Milestone/.test(l), title: "42. Phase 1 — Java Foundations Final Capstone & Transition to DSA", category: "Milestone · Phase 1 Exit Mastery", anchor: "section-42" }
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

    if (numberMatch && !line.startsWith('1.1') && !line.startsWith('2.1') && !line.startsWith('3.1')) {
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
import { AlertCircle, Box, Layers, Cpu, Workflow, Award, CheckCircle2, BookOpen, HardDrive, Filter, Repeat } from "lucide-react";

export default function JavaAdvancedSections() {
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
