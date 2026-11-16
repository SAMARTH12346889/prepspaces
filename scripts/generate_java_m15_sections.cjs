const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '..', '..', 'm15_java_original.txt');
const raw = fs.readFileSync(srcPath, 'utf8');

const lines = raw.split(/\r?\n/);

const SECTION_HEADERS = [
  { match: /^# \*\*Module 15/i, title: "Curriculum Overview: Two Pointers, Sliding Window & Prefix Sums", cat: "Module Overview" },
  { match: /^# \*\*1\. Pattern-Based Problem-Solving/i, title: "1. Pattern-Based Problem-Solving", cat: "Algorithmic Paradigms" },
  { match: /^# \*\*2\. Two-Pointer Technique/i, title: "2. Two-Pointer Technique", cat: "Two Pointers" },
  { match: /^# \*\*3\. Fast and Slow Pointers/i, title: "3. Fast and Slow Pointers", cat: "Two Pointers" },
  { match: /^# \*\*4\. Same-Direction Pointers/i, title: "4. Same-Direction Pointers", cat: "Two Pointers" },
  { match: /^# \*\*5\. Sliding Window Fundamentals/i, title: "5. Sliding Window Fundamentals", cat: "Sliding Window" },
  { match: /^# \*\*6\. Fixed-Size Sliding Window/i, title: "6. Fixed-Size Sliding Window", cat: "Sliding Window" },
  { match: /^# \*\*7\. Variable-Size Sliding Window/i, title: "7. Variable-Size Sliding Window", cat: "Sliding Window" },
  { match: /^# \*\*8\. Longest Substring Without Repeating Characters/i, title: "8. Longest Substring Without Repeating Characters", cat: "Sliding Window" },
  { match: /^# \*\*9\. Minimum Window Substring/i, title: "9. Minimum Window Substring", cat: "Sliding Window" },
  { match: /^# \*\*10\. Prefix Sum Arrays/i, title: "10. Prefix Sum Arrays", cat: "Prefix Sums" },
  { match: /^# \*\*11\. 2D Prefix Sums/i, title: "11. 2D Prefix Sums", cat: "Prefix Sums" },
  { match: /^# \*\*12\. Difference Arrays/i, title: "12. Difference Arrays", cat: "Prefix Sums" },
  { match: /^# \*\*13\. Prefix XOR/i, title: "13. Prefix XOR", cat: "Prefix Sums" },
  { match: /^# \*\*14\. Subarray Sum Problems/i, title: "14. Subarray Sum Problems", cat: "Prefix Sums & Hashing" },
  { match: /^# \*\*15\. Pair Sum and Triplet Sum Problems/i, title: "15. Pair Sum and Triplet Sum Problems", cat: "Two Pointers" },
  { match: /^# \*\*16\. Kadane's Algorithm/i, title: "16. Kadane's Algorithm", cat: "Dynamic Programming & Subarrays" },
  { match: /^# \*\*17\. Subarray Optimization Techniques/i, title: "17. Subarray Optimization Techniques", cat: "Architectural Decision Matrix" },
  { match: /^# \*\*18\. Complexity Comparison/i, title: "18. Complexity Comparison", cat: "Complexity Analysis" },
  { match: /^# \*\*19\. Common Mistakes and Interview Traps/i, title: "19. Common Mistakes and Interview Traps", cat: "Defensive Engineering" },
  { match: /^# \*\*20\. Worked Interview Problem-Solving Examples/i, title: "20. Worked Interview Problem-Solving Examples", cat: "Interview Patterns" },
  { match: /^# \*\*21\. Practice Problems/i, title: "21. Practice Problems", cat: "Practice Roadmap" },
  { match: /^# \*\*22\. Important Concepts to Remember/i, title: "22. Important Concepts to Remember", cat: "Summary & Review" },
  { match: /^##? \*\*23\. Module 15 — Mastery Checklist/i, title: "23. Module 15 — Mastery Checklist & Final Understanding", cat: "Mastery Review" }
];

// Partition lines into buckets
const buckets = [];
let currentIdx = -1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  let matchedSection = -1;
  for (let s = 0; s < SECTION_HEADERS.length; s++) {
    if (SECTION_HEADERS[s].match.test(line)) {
      matchedSection = s;
      break;
    }
  }

  if (matchedSection !== -1) {
    currentIdx = matchedSection;
    if (!buckets[currentIdx]) {
      buckets[currentIdx] = {
        meta: SECTION_HEADERS[currentIdx],
        lines: []
      };
    }
    buckets[currentIdx].lines.push(line);
  } else {
    if (currentIdx === -1) {
      currentIdx = 0;
      buckets[0] = { meta: SECTION_HEADERS[0], lines: [] };
    }
    buckets[currentIdx].lines.push(line);
  }
}

console.log(`Buckets partitioned: ${buckets.length}`);

function escapeJSXText(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;');
}

function formatInline(str) {
  let s = str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/{/g, '&#123;')
    .replace(/}/g, '&#125;');

  // math inline \( ... \)
  s = s.replace(/\\\((.*?)\\\)/g, (_, math) => {
    return `<code className="font-mono text-cyan-300 font-semibold px-1 py-0.5 rounded bg-slate-900 border border-slate-800">${math}</code>`;
  });

  // bold italic ***...***
  s = s.replace(/\*\*\*(.*?)\*\*\*/g, '<strong className="text-white font-bold italic">$1</strong>');
  // bold **...**
  s = s.replace(/\*\*(.*?)\*\*/g, '<strong className="text-white font-semibold">$1</strong>');
  // italic *...*
  s = s.replace(/\*([^*]+)\*/g, '<em className="text-slate-300 italic">$1</em>');
  // inline code `...`
  s = s.replace(/`([^`]+)`/g, '<code className="font-mono text-amber-300 text-xs px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">$1</code>');

  return s;
}

function parseBucketToJSX(bucketLines, secId) {
  const elements = [];
  let i = 0;

  while (i < bucketLines.length) {
    const line = bucketLines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // Skip section main title in body if already in header
    if (trimmed.startsWith('# **') && i === 0 && secId > 0) {
      i++;
      continue;
    }

    // Subheadings H2 (## **...**)
    if (trimmed.startsWith('## **') || trimmed.startsWith('## ')) {
      const h2Text = trimmed.replace(/^##\s*\**|\**$/g, '').trim();
      elements.push(`        <h3 key="h3-${secId}-${i}" className="text-lg md:text-xl font-bold text-emerald-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          ${formatInline(h2Text)}
        </h3>`);
      i++;
      continue;
    }

    // Subheadings H3 (### **...**)
    if (trimmed.startsWith('### **') || trimmed.startsWith('### ')) {
      const h3Text = trimmed.replace(/^###\s*\**|\**$/g, '').trim();
      elements.push(`        <h4 key="h4-${secId}-${i}" className="text-base font-semibold text-white mt-6 mb-2 flex items-center gap-2">
          <span className="text-emerald-500 font-mono">▸</span>
          ${formatInline(h3Text)}
        </h4>`);
      i++;
      continue;
    }

    // Code blocks ```
    if (trimmed.startsWith('```')) {
      const lang = trimmed.slice(3).trim();
      i++;
      const codeLines = [];
      while (i < bucketLines.length && !bucketLines[i].trim().startsWith('```')) {
        codeLines.push(bucketLines[i]);
        i++;
      }
      i++; // skip closing ```
      const rawCode = codeLines.join('\n');
      elements.push(`        <div key="code-${secId}-${i}" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/50"></span>${lang || 'Code Example'}</span>
            <span className="text-[10px] text-slate-400 font-sans">Java / DSA</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{\`${rawCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`}</code>
          </pre>
        </div>`);
      continue;
    }

    // Markdown Table
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines = [];
      while (i < bucketLines.length && bucketLines[i].trim().startsWith('|') && bucketLines[i].trim().endsWith('|')) {
        tableLines.push(bucketLines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const parseRow = (r) => r.slice(1, -1).split('|').map(c => c.trim());
        const headerCells = parseRow(tableLines[0]);
        // line 1 is separator |---|---|
        const bodyRows = tableLines.slice(2).map(parseRow);

        let tableJSX = `        <div key="table-${secId}-${i}" className="my-5 overflow-x-auto rounded-xl border border-slate-800 shadow-md">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800 text-emerald-400 font-mono">
${headerCells.map((h, cIdx) => `                <th key="th-${secId}-${cIdx}" className="p-3 font-semibold">${formatInline(h)}</th>`).join('\n')}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-850 bg-slate-950/60 font-sans">
${bodyRows.map((row, rIdx) => `              <tr key="tr-${secId}-${rIdx}" className="hover:bg-slate-900/40 transition-colors">
${row.map((cell, cIdx) => `                <td key="td-${secId}-${rIdx}-${cIdx}" className="p-3 text-slate-300 ${cIdx === 0 ? 'font-mono text-slate-200' : ''}">${formatInline(cell)}</td>`).join('\n')}
              </tr>`).join('\n')}
            </tbody>
          </table>
        </div>`;
        elements.push(tableJSX);
        continue;
      }
    }

    // Bullet points (- or *)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const listItems = [];
      while (i < bucketLines.length && (bucketLines[i].trim().startsWith('- ') || bucketLines[i].trim().startsWith('* '))) {
        listItems.push(bucketLines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      elements.push(`        <ul key="ul-${secId}-${i}" className="my-3 space-y-1.5 pl-2">
${listItems.map((li, lIdx) => `          <li key="li-${secId}-${lIdx}" className="flex items-start gap-2 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0"></span>
            <span>${formatInline(li)}</span>
          </li>`).join('\n')}
        </ul>`);
      continue;
    }

    // Numbered list (1. 2. 3.)
    if (/^\d+\.\s/.test(trimmed)) {
      const numItems = [];
      while (i < bucketLines.length && /^\d+\.\s/.test(bucketLines[i].trim())) {
        const itemText = bucketLines[i].trim().replace(/^\d+\.\s+/, '');
        numItems.push(itemText);
        i++;
      }
      elements.push(`        <ol key="ol-${secId}-${i}" className="my-3 space-y-2 pl-2">
${numItems.map((item, nIdx) => `          <li key="oli-${secId}-${nIdx}" className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300 leading-relaxed">
            <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5 border border-slate-700">
              ${nIdx + 1}
            </span>
            <span>${formatInline(item)}</span>
          </li>`).join('\n')}
        </ol>`);
      continue;
    }

    // Blockquote or Callout
    if (trimmed.startsWith('>')) {
      const quoteLines = [];
      while (i < bucketLines.length && bucketLines[i].trim().startsWith('>')) {
        quoteLines.push(bucketLines[i].trim().replace(/^>\s*/, ''));
        i++;
      }
      elements.push(`        <blockquote key="bq-${secId}-${i}" className="my-4 p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-500 text-amber-200/90 text-xs md:text-sm leading-relaxed space-y-1">
${quoteLines.map((ql, qIdx) => `          <p key="qp-${secId}-${qIdx}">${formatInline(ql)}</p>`).join('\n')}
        </blockquote>`);
      continue;
    }

    // LaTeX display equation \[ ... \] or \\[ ... \\]
    if (trimmed.startsWith('\\[') || trimmed.startsWith('\\\\[') || trimmed.startsWith('$$')) {
      const eqLines = [trimmed];
      if (!trimmed.endsWith('\\]') && !trimmed.endsWith('\\\\\\]') && !trimmed.endsWith('$$')) {
        i++;
        while (i < bucketLines.length && !bucketLines[i].trim().endsWith('\\]') && !bucketLines[i].trim().endsWith('\\\\\\]') && !bucketLines[i].trim().endsWith('$$')) {
          eqLines.push(bucketLines[i].trim());
          i++;
        }
        if (i < bucketLines.length) {
          eqLines.push(bucketLines[i].trim());
          i++;
        }
      } else {
        i++;
      }
      const rawEq = eqLines.join(' ')
        .replace(/^\\\[|^\\\\\[|^\$\$/g, '')
        .replace(/\\\]$|\\\\\\]$|\$\$$/g, '')
        .trim();
      elements.push(`        <div key="eq-${secId}-${i}" className="my-3 p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 text-center overflow-x-auto">
          {${JSON.stringify(rawEq)}}
        </div>`);
      continue;
    }

    // Regular Paragraph
    elements.push(`        <p key="p-${secId}-${i}" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          ${formatInline(trimmed)}
        </p>`);
    i++;
  }

  return elements.join('\n');
}

let out = `import React from "react";

export const JAVA_TWO_POINTERS_SLIDING_WINDOW_SECTIONS = [
`;

buckets.forEach((bucket, idx) => {
  const meta = bucket.meta;
  const bodyJSX = parseBucketToJSX(bucket.lines, idx);

  out += `  {
    id: ${idx},
    title: ${JSON.stringify(meta.title)},
    category: ${JSON.stringify(meta.cat)},
    content: (
      <div className="space-y-4">
${bodyJSX}
      </div>
    )
  },\n`;
});

out += `];\n`;

const targetPath = path.join(__dirname, '..', 'src', 'Componets', 'JavaTwoPointersSlidingWindowSections.jsx');
fs.writeFileSync(targetPath, out, 'utf8');
console.log(`Successfully wrote ${targetPath} with ${buckets.length} sections!`);
