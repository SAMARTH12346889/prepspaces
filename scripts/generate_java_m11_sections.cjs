const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m11_java_original.txt');
const outPath = path.resolve(__dirname, '../src/Componets/JavaHashingSections.jsx');
const content = fs.readFileSync(rawFile, 'utf8');
const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l, idx) => idx === 0, title: "Module 11: Curriculum Overview & Advanced Foundations", category: "Course Roadmap · Objectives", anchor: "overview" },
  { id: 1, test: (l) => /^1\.\s+Introduction to Hashing/.test(l), title: "1. Introduction to Hashing", category: "Part 1 · Hashing Foundations", anchor: "intro-hashing" },
  { id: 2, test: (l) => /^2\.\s+Hash Functions/.test(l), title: "2. Hash Functions & Uniform Distribution", category: "Part 2 · Hash Functions", anchor: "hash-functions" },
  { id: 3, test: (l) => /^3\.\s+Hash Tables/.test(l), title: "3. Hash Tables & Basic Implementation", category: "Part 3 · Hash Tables", anchor: "hash-tables" },
  { id: 4, test: (l) => /^4\.\s+Hash Collisions/.test(l), title: "4. Hash Collisions & Resolution Strategies", category: "Part 4 · Collisions", anchor: "hash-collisions" },
  { id: 5, test: (l) => /^5\.\s+Separate Chaining/.test(l), title: "5. Separate Chaining with Linked Lists", category: "Part 5 · Separate Chaining", anchor: "separate-chaining" },
  { id: 6, test: (l) => /^6\.\s+Open Addressing/.test(l), title: "6. Open Addressing Fundamentals", category: "Part 6 · Open Addressing", anchor: "open-addressing" },
  { id: 7, test: (l) => /^7\.\s+Linear Probing/.test(l), title: "7. Linear Probing & Primary Clustering", category: "Part 7 · Linear Probing", anchor: "linear-probing" },
  { id: 8, test: (l) => /^8\.\s+Quadratic Probing/.test(l), title: "8. Quadratic Probing & Secondary Clustering", category: "Part 8 · Quadratic Probing", anchor: "quadratic-probing" },
  { id: 9, test: (l) => /^9\.\s+Double Hashing/.test(l), title: "9. Double Hashing & Prime Capacities", category: "Part 9 · Double Hashing", anchor: "double-hashing" },
  { id: 10, test: (l) => /^10\.\s+Load Factor/.test(l), title: "10. Load Factor & Growth Trade-Offs", category: "Part 10 · Load Factor", anchor: "load-factor" },
  { id: 11, test: (l) => /^11\.\s+Rehashing/.test(l), title: "11. Rehashing & Geometric Capacity Expansion", category: "Part 11 · Rehashing", anchor: "rehashing" },
  { id: 12, test: (l) => /^12\.\s+Java HashMap Internals/.test(l), title: "12. Java HashMap Internals (Put, Get & Treeification)", category: "Part 12 · HashMap Internals", anchor: "hashmap-internals" },
  { id: 13, test: (l) => /^13\.\s+HashSet/.test(l), title: "13. HashSet Internals & Set Operations", category: "Part 13 · HashSet", anchor: "hashset" },
  { id: 14, test: (l) => /^14\.\s+LinkedHashMap/.test(l), title: "14. LinkedHashMap & LRU Cache Architecture", category: "Part 14 · LinkedHashMap", anchor: "linked-hashmap" },
  { id: 15, test: (l) => /^15\.\s+TreeMap/.test(l), title: "15. TreeMap & Red-Black Tree Sorting", category: "Part 15 · TreeMap", anchor: "treemap" },
  { id: 16, test: (l) => /^16\.\s+Frequency Maps/.test(l), title: "16. Frequency Maps & Modern Java Patterns", category: "Part 16 · Frequency Maps", anchor: "frequency-maps" },
  { id: 17, test: (l) => /^17\.\s+Custom hashCode\(\) and equals\(\)/.test(l), title: "17. Custom hashCode() and equals() Contract", category: "Part 17 · Equality Contract", anchor: "hashcode-equals" },
  { id: 18, test: (l) => /^18\.\s+Anagram Problems/.test(l), title: "18. Anagram Problems & Group Anagrams", category: "Part 18 · Anagram Algorithms", anchor: "anagram-problems" },
  { id: 19, test: (l) => /^19\.\s+Duplicate Detection/.test(l), title: "19. Duplicate Detection & Set Membership", category: "Part 19 · Duplicate Detection", anchor: "duplicate-detection" },
  { id: 20, test: (l) => /^20\.\s+Two Sum Problem/.test(l), title: "20. Two Sum Problem & Complement Matching", category: "Part 20 · Two Sum", anchor: "two-sum" },
  { id: 21, test: (l) => /^21\.\s+Longest Consecutive Sequence/.test(l), title: "21. Longest Consecutive Sequence (LeetCode 128)", category: "Part 21 · Consecutive Sequence", anchor: "longest-consecutive" },
  { id: 22, test: (l) => /^22\.\s+Important Hashing Patterns for DSA Interviews/.test(l), title: "22. Core Hashing Patterns for DSA Interviews", category: "Part 22 · Interview Patterns", anchor: "interview-patterns" },
  { id: 23, test: (l) => /^23\.\s+Overall Complexity Cheat Sheet/.test(l), title: "23. Overall Complexity Cheat Sheet", category: "Part 23 · Complexity Matrix", anchor: "complexity-matrix" },
  { id: 24, test: (l) => /^24\.\s+Common Interview Questions — Theory/.test(l), title: "24. Common Technical Interview Questions (Theory)", category: "Part 24 · Technical Q&A", anchor: "interview-questions" },
  { id: 25, test: (l) => /^25\.\s+Practical Coding Assignments/.test(l), title: "25. Practical Coding Assignments (30 Problems)", category: "Part 25 · Labs & Assignments", anchor: "coding-assignments" },
  { id: 26, test: (l) => /^26\.\s+Recommended LeetCode Practice/.test(l), title: "26. Curated LeetCode Practice Track", category: "Part 26 · LeetCode Track", anchor: "leetcode-track" },
  { id: 27, test: (l) => /^27\.\s+Module 11 — Final Knowledge Check/.test(l), title: "27. Knowledge Assessment & Quiz", category: "Part 27 · Knowledge Check", anchor: "knowledge-check" },
  { id: 28, test: (l) => /^28\.\s+What You Should Be Able to Do After Module 11/.test(l), title: "28. Learning Outcomes & Completion Strategy", category: "Milestone · Hashing Mastery", anchor: "learning-outcomes" }
];

const buckets = [];
let currentBucket = null;
let currentHeaderIdx = -1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  const nextMatchIdx = sectionHeaders.findIndex((sh, idx) => idx > currentHeaderIdx && sh.test(line, i));

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

  // Markdown links: [title](url)
  res = res.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">$1</a>');

  // Standalone external URLs
  res = res.replace(/(?<!href=")(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">$1</a>');

  return res;
}

function formatJavaCode(oneLiner) {
  let indent = 0;
  let formatted = '';
  let inString = false;
  let stringChar = '';
  let parenDepth = 0;

  for (let i = 0; i < oneLiner.length; i++) {
    const ch = oneLiner[i];
    const prev = i > 0 ? oneLiner[i - 1] : '';
    const next = i < oneLiner.length - 1 ? oneLiner[i + 1] : '';

    if ((ch === '"' || ch === "'") && prev !== '\\') {
      if (!inString) {
        inString = true;
        stringChar = ch;
      } else if (stringChar === ch) {
        inString = false;
      }
    }

    if (inString) {
      formatted += ch;
      continue;
    }

    if (ch === '(') parenDepth++;
    if (ch === ')') parenDepth = Math.max(0, parenDepth - 1);

    if (ch === '{') {
      indent += 2;
      formatted += ' {\n' + ' '.repeat(indent);
    } else if (ch === '}') {
      indent = Math.max(0, indent - 2);
      formatted += '\n' + ' '.repeat(indent) + '}';
      if (next !== ';' && next !== ')' && next !== '}') {
        formatted += '\n' + ' '.repeat(indent);
      }
    } else if (ch === ';' && parenDepth === 0) {
      formatted += ';';
      if (next !== '}' && next !== ')') {
        formatted += '\n' + ' '.repeat(indent);
      }
    } else {
      if (ch === ' ' && (formatted.endsWith(' ') || formatted.endsWith('\n') || formatted.endsWith('  '))) {
        continue;
      }
      formatted += ch;
    }
  }

  return formatted
    .split('\n')
    .map(l => l.trimEnd())
    .filter((l, idx, arr) => !(l.trim() === '' && arr[idx - 1] && arr[idx - 1].trim() === ''))
    .join('\n')
    .trim();
}

function renderCodeBlock(code, lang = 'java') {
  const sanitized = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  const upperLang = (lang || 'JAVA').toUpperCase();
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

const knownTableDefs = [
  { headers: ["Student ID", "Student Name"], rowCount: 4 },
  { headers: ["Operation", "Average", "Worst case"], rowCount: 3 },
  { headers: ["Key", "Calculation", "Index"], rowCount: 5 },
  { headers: ["Feature", "Linear probing", "Quadratic probing"], rowCount: 5 },
  { headers: ["Technique", "Formula", "Main issue"], rowCount: 3 },
  { headers: ["Load factor", "Effect"], rowCount: 3 },
  { headers: ["Constant", "Default value"], rowCount: 5 },
  { headers: ["Feature", "HashMap", "LinkedHashMap"], rowCount: 6 },
  { headers: ["Method", "Meaning"], rowCount: 6 },
  { headers: ["Feature", "HashMap", "LinkedHashMap", "TreeMap"], rowCount: 6 },
  { headers: ["Number", "Frequency"], rowCount: 4 },
  { headers: ["Character", "Count"], rowCount: 6 },
  { headers: ["Approach", "Time", "Space"], rowCount: 2 },
  { headers: ["Pattern", "Data structure", "Typical problem"], rowCount: 9 },
  { headers: ["Data structure", "Search", "Insert", "Delete", "Ordering"], rowCount: 6 },
  { headers: ["Problem", "Difficulty", "Main concept"], rowCount: 12 }
];

function isCodeLine(line) {
  const t = line.trim();
  if (t.startsWith('class ') || t.startsWith('public class ') || t.startsWith('record ') ||
      t.startsWith('import java') || t.startsWith('int[] numbers =') || t.startsWith('String name =') ||
      t.startsWith('String str =') || t.startsWith('HashMap<') || t.startsWith('HashSet<') ||
      t.startsWith('LinkedHashMap<') || t.startsWith('TreeMap<') || t.startsWith('Student s1 =') ||
      t.startsWith('static boolean ') || t.startsWith('static int ') || t.startsWith('static List<') ||
      t.startsWith('static Set<') || t.startsWith('int hash =') || t.startsWith('h ^ (h >>> 16)') ||
      t.startsWith('index = (n - 1) & hash') || t.startsWith('frequency.merge') ||
      t.startsWith('for (Map.Entry<') || t.startsWith('for (String key :') || t.startsWith('map.forEach') ||
      t.startsWith('int[] frequency =') || t.startsWith('Arrays.sort') || t.startsWith('System.out.println') ||
      t.startsWith('hash(25) = 5') || t.startsWith('int[] arr =') || t.startsWith('int complement =') ||
      t.startsWith('int answer =') || t.startsWith('int longest =') || t.startsWith('int current =')) {
    return true;
  }
  return false;
}

function processLines(rawLines) {
  const out = [];
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

  let i = 0;
  while (i < rawLines.length) {
    const line = rawLines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      i++;
      continue;
    }

    // Check for known table match
    let matchedTable = null;
    for (const tDef of knownTableDefs) {
      let isMatch = true;
      for (let h = 0; h < tDef.headers.length; h++) {
        if (!rawLines[i + h] || rawLines[i + h].trim() !== tDef.headers[h]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        matchedTable = tDef;
        break;
      }
    }

    if (matchedTable) {
      flushList();
      const headers = matchedTable.headers;
      let curr = i + headers.length;
      const rows = [];
      for (let r = 0; r < matchedTable.rowCount; r++) {
        const row = [];
        for (let c = 0; c < headers.length; c++) {
          row.push(rawLines[curr] ? rawLines[curr].trim() : "");
          curr++;
        }
        rows.push(row);
      }
      out.push(renderTable(headers, rows));
      i = curr;
      continue;
    }

    // Subheading: \d+\.\d+ or \d+\.\d+\.\d+
    if (/^\d+\.\d+(\.\d+)?\s+(.*)/.test(trimmed)) {
      flushList();
      const m = trimmed.match(/^(\d+\.\d+(\.\d+)?)\s+(.*)/);
      out.push(`          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>${escapeText(m[1])} ${escapeText(m[3])}</span>
          </h4>`);
      i++;
      continue;
    }

    // Major Heading: \d+\.\s+
    if (/^\d+\.\s+(.*)/.test(trimmed)) {
      flushList();
      const m = trimmed.match(/^(\d+)\.\s+(.*)/);
      out.push(`          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            ${escapeText(m[1])}. ${escapeText(m[2])}
          </h3>`);
      i++;
      continue;
    }

    // Alert Callouts: Important, Note, Advantages, Disadvantages, etc.
    if (/^(Important|Note|Remember|Interview insight|Interview question|Warning|Disadvantages|Advantages):/i.test(trimmed)) {
      flushList();
      const isWarn = /warning|disadvantage|mistake/i.test(trimmed);
      const isImp = /important|interview/i.test(trimmed);
      const bg = isWarn ? "bg-amber-500/10 border-amber-500/30 text-amber-950" : isImp ? "bg-orange-500/10 border-orange-500/30 text-orange-950" : "bg-blue-500/10 border-blue-500/30 text-blue-950";
      const icon = isWarn ? "⚠️" : isImp ? "💡" : "ℹ️";
      out.push(`          <div className="p-4 rounded-xl border ${bg} my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-stone-900">
              <span>${icon}</span>
              <span>${escapeText(trimmed.split(':')[0])}</span>
            </div>
            <p className="text-stone-700">${formatInline(trimmed.substring(trimmed.indexOf(':') + 1).trim())}</p>
          </div>`);
      i++;
      continue;
    }

    // LaTeX Display Math
    if (trimmed.startsWith('\\[') || trimmed.endsWith('\\]') || trimmed.startsWith('$$')) {
      flushList();
      const eq = trimmed.replace(/^\\\[|\\]$/g, '').replace(/^\$\$|\$\$$/g, '').trim();
      out.push(`          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>${escapeText(eq)}</code>
          </div>`);
      i++;
      continue;
    }

    // Java code line / block
    if (isCodeLine(trimmed)) {
      flushList();
      const formatted = formatJavaCode(trimmed);
      out.push(renderCodeBlock(formatted, 'java'));
      i++;
      continue;
    }

    // List item (e.g. "- item" or "* item" or "1. item" or bullet point)
    if (/^[-*•]\s+(.*)/.test(trimmed) || /^\d+\.\s+(.*)/.test(trimmed)) {
      inList = true;
      const itemText = trimmed.replace(/^[-*•]\s+/, '').replace(/^\d+\.\s+/, '');
      listItems.push(itemText);
      i++;
      continue;
    }

    // Regular paragraph
    flushList();
    out.push(`          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            ${formatInline(trimmed)}
          </p>`);
    i++;
  }

  flushList();
  return out.join('\n');
}

let fileContent = `import React from "react";\n\n`;
fileContent += `// MODULE 11: HASHING & HASH-BASED DATA STRUCTURES — COMPLETE CURRICULUM SECTIONS\n`;
fileContent += `// Automatically generated with 100% text fidelity to original curriculum text.\n\n`;
fileContent += `export const JAVA_HASHING_SECTIONS = [\n`;

for (let b = 0; b < buckets.length; b++) {
  const bucket = buckets[b];
  const renderedContent = processLines(bucket.lines);
  const safeTitle = bucket.header.title.replace(/"/g, '\\"');
  const safeCategory = bucket.header.category.replace(/"/g, '\\"');
  const safeAnchor = bucket.header.anchor;

  fileContent += `  {\n`;
  fileContent += `    id: "${safeAnchor}",\n`;
  fileContent += `    number: "${b}",\n`;
  fileContent += `    title: "${safeTitle}",\n`;
  fileContent += `    category: "${safeCategory}",\n`;
  fileContent += `    content: (\n`;
  fileContent += `      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">\n`;
  fileContent += renderedContent + `\n`;
  fileContent += `      </div>\n`;
  fileContent += `    )\n`;
  fileContent += `  }${b === buckets.length - 1 ? "" : ","}\n`;
}

fileContent += `];\n\nexport default JAVA_HASHING_SECTIONS;\n`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(`Generated ${outPath} successfully with ${buckets.length} sections!`);
