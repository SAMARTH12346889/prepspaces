const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../m21_java_original.txt');
const rawText = fs.readFileSync(srcPath, 'utf-8');
const lines = rawText.split(/\r?\n/);

const SECTION_HEADERS = [
  { id: 1, trigger: /^#\s*\*\*1\.\s*Backtracking/i, title: "1. Backtracking — Advanced Problems", summary: "Choose-explore-unchoose framework, pruning strategies, N-Queens with O(1) diagonal arrays, and bitmask state tracking." },
  { id: 2, trigger: /^#\s*\*\*2\.\s*Branch and Bound/i, title: "2. Branch and Bound Fundamentals", summary: "Pruning optimization decision trees using optimistic mathematical bounds (upper/lower bounds, fractional knapsack relaxation)." },
  { id: 3, trigger: /^#\s*\*\*3\.\s*Divide and Conquer/i, title: "3. Divide and Conquer", summary: "Divide-conquer-combine paradigm, Merge Sort implementation, recurrence relations, and Master Theorem T(n) = aT(n/b) + f(n)." },
  { id: 4, trigger: /^#\s*\*\*4\.\s*Binary Search on Answer/i, title: "4. Binary Search on Answer", summary: "Searching over monotonic feasibility solution spaces, Ship Packages within D Days, and recognizing min-max patterns." },
  { id: 5, trigger: /^#\s*\*\*5\.\s*Monotonic Stack Patterns/i, title: "5. Monotonic Stack Patterns", summary: "Maintaining monotonic ordering: Next Greater Element, index tracking, Stock Span, and Largest Rectangle in Histogram O(N)." },
  { id: 6, trigger: /^#\s*\*\*6\.\s*Monotonic Queue Patterns/i, title: "6. Monotonic Queue Patterns", summary: "Double-ended queues (ArrayDeque) for extrema over moving ranges, Sliding Window Maximum in linear O(N) time." },
  { id: 7, trigger: /^#\s*\*\*7\.\s*Graph Problem-Solving Patterns/i, title: "7. Graph Problem-Solving Patterns", summary: "Graph taxonomy: Traversal, Connected Components, Shortest Path selection, Topological Sorting, DSU, and Bipartite 2-coloring." },
  { id: 8, trigger: /^#\s*\*\*8\.\s*DP Problem Classification/i, title: "8. DP Problem Classification", summary: "Categorizing 8 DP archetypes: 1D Linear, Grid, Knapsack, String/Subsequence, Interval, Tree DP, Bitmask, and Digit DP." },
  { id: 9, trigger: /^#\s*\*\*9\.\s*Tree DP Patterns/i, title: "9. Tree DP Patterns", summary: "Post-order tree processing, Maximum Independent Set (take vs skip), tree diameter, and subtree aggregations in O(V)." },
  { id: 10, trigger: /^#\s*\*\*10\.\s*Greedy Proof Techniques/i, title: "10. Greedy Proof Techniques", summary: "Mathematical justification: Exchange Arguments, Stays Ahead proofs, Cut Property in MSTs, and proof by contradiction." },
  { id: 11, trigger: /^#\s*\*\*11\.\s*Mathematical Problem-Solving/i, title: "11. Mathematical Problem-Solving", summary: "Euclidean GCD, LCM, Sieve of Eratosthenes O(N log log N), modular arithmetic rules, and binary fast exponentiation O(log N)." },
  { id: 12, trigger: /^#\s*\*\*12\.\s*Advanced Array Patterns/i, title: "12. Advanced Array Patterns", summary: "Difference Arrays for O(1) range updates, Coordinate Compression, Prefix XOR, and Sweep Line interval event sorting." },
  { id: 13, trigger: /^#\s*\*\*13\.\s*Offline Query Processing/i, title: "13. Offline Query Processing", summary: "Reordering batch queries for global optimization, Mo's Algorithm with sqrt-decomposition blocks in O((N + Q) sqrt(N))." },
  { id: 14, trigger: /^#\s*\*\*14\.\s*Competitive Programming Fundamentals/i, title: "14. Competitive Programming Fundamentals", summary: "Time limits, Fast I/O (BufferedReader + StringTokenizer), 64-bit integer overflow protection, and testing discipline." },
  { id: 15, trigger: /^#\s*\*\*15\.\s*Problem Constraints Analysis/i, title: "15. Problem Constraints Analysis", summary: "Reading algorithmic blueprints from constraints (N <= 20 vs 10^5, coordinate ranges, and memory byte calculations)." },
  { id: 16, trigger: /^#\s*\*\*16\.\s*Selecting the Right Data Structure/i, title: "16. Selecting the Right Data Structure", summary: "Comprehensive selection matrix: HashMap vs TreeMap, Stack vs Deque, Heap vs Sorting, Array vs LinkedList." },
  { id: 17, trigger: /^#\s*\*\*17\.\s*Selecting the Right Algorithm/i, title: "17. Selecting the Right Algorithm", summary: "Decision-making framework: 9-step problem-solving workflow from understanding to bottleneck detection and verification." },
  { id: 18, trigger: /^#\s*\*\*18\.\s*Putting Multiple Patterns Together/i, title: "18. Putting Multiple Patterns Together", summary: "Master multi-pattern fusions: Binary Search + Greedy, Graph + BFS + Hashing, DP + Bitmasking, and Tree + DFS + DP." },
  { id: 19, trigger: /^#\s*\*\*19\.\s*Common Mistakes in Advanced Problem Solving/i, title: "19. Common Mistakes in Advanced Problem Solving", summary: "11 critical traps: unproven greedy, non-monotonic binary search, improper backtracking restoration, and stack overflow." },
  { id: 20, trigger: /^#\s*\*\*20\.\s*Advanced Practice Problems/i, title: "20. Advanced Practice Problems", summary: "Curated 3-level problem roadmap: Pattern Recognition, Advanced DS & Algorithms, and Advanced Optimization & DP." },
  { id: 21, trigger: /^#\s*\*\*21\.\s*Module 21 Knowledge Check/i, title: "21. Module 21 Knowledge Check", summary: "Interactive diagnostic scenario assessment matching problem descriptions to their optimal pattern solutions." },
  { id: 22, trigger: /^#\s*\*\*22\.\s*Final Learning Outcomes/i, title: "22. Final Learning Outcomes", summary: "Achieving algorithmic independence, asking the right structural questions, and mastering unseen interview challenges." }
];

// Partition lines into buckets
const buckets = Array.from({ length: 23 }, () => []);
let currentBucket = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  // Check if this line triggers the next section
  const nextHeader = SECTION_HEADERS.find(h => h.id === currentBucket + 1);
  if (nextHeader && nextHeader.trigger.test(trimmed)) {
    currentBucket = nextHeader.id;
  }

  buckets[currentBucket].push(line);
}

console.log(`Buckets partitioned: ${buckets.length}`);
buckets.forEach((b, idx) => {
  console.log(`Bucket ${idx}: ${b.length} lines`);
});

// Helper functions for JSX conversion
function formatInline(str) {
  // Protect inline code spans first
  const codeSpans = [];
  let s = str.replace(/`([^`]+)`/g, (_, code) => {
    codeSpans.push(code);
    return `__CODE_SPAN_${codeSpans.length - 1}__`;
  });

  s = s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');

  s = s.replace(/\\\[(.*?)\\\]/g, '<span className="font-mono text-indigo-300 font-semibold">$1</span>');
  s = s.replace(/\\\((.*?)\\\)/g, '<span className="font-mono text-indigo-300 font-semibold">$1</span>');
  s = s.replace(/\*\*(.*?)\*\*/g, '<strong className="font-bold text-white">$1</strong>');

  // Restore code spans
  s = s.replace(/__CODE_SPAN_(\d+)__/g, (_, idx) => {
    const raw = codeSpans[Number(idx)];
    const escaped = raw
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\{/g, '&#123;')
      .replace(/\}/g, '&#125;');
    return `<code className="px-1.5 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs border border-slate-700/60">${escaped}</code>`;
  });

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
      elements.push(`        <h3 key="h3-${secId}-${i}" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          ${formatInline(h2Text)}
        </h3>`);
      i++;
      continue;
    }

    // Subheadings H3 (### **...**)
    if (trimmed.startsWith('### **') || trimmed.startsWith('### ')) {
      const h3Text = trimmed.replace(/^###\s*\**|\**$/g, '').trim();
      elements.push(`        <h4 key="h4-${secId}-${i}" className="text-base font-semibold text-emerald-400 mt-6 mb-2">
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
      const escapedCode = rawCode.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
      elements.push(`        <div key="code-${secId}-${i}" className="my-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-md">
          <div className="bg-slate-900/80 px-4 py-1.5 border-b border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500/30 border border-indigo-500/50"></span>${lang || 'Java / Code Snippet'}</span>
            <span className="text-[10px] text-slate-400 font-sans">Module 21 Problem-Solving Patterns</span>
          </div>
          <pre className="p-4 text-xs font-mono text-slate-200 overflow-x-auto leading-relaxed whitespace-pre">
            <code>{\`${escapedCode}\`}</code>
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
        const bodyLines = tableLines.slice(2);

        elements.push(`        <div key="table-${secId}-${i}" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/70 shadow-sm">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-mono">
                ${headerCells.map(h => `<th className="p-3 font-semibold">${formatInline(h)}</th>`).join('\n                ')}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              ${bodyLines.map(rowStr => {
                const cells = parseRow(rowStr);
                return `<tr className="hover:bg-slate-900/40 transition">
                  ${cells.map(c => `<td className="p-3">${formatInline(c)}</td>`).join('\n                  ')}
                </tr>`;
              }).join('\n              ')}
            </tbody>
          </table>
        </div>`);
      }
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('>')) {
      const quoteText = trimmed.replace(/^>\s*/, '');
      elements.push(`        <blockquote key="bq-${secId}-${i}" className="my-3 pl-4 border-l-2 border-indigo-500 text-xs md:text-sm text-indigo-300/90 italic bg-indigo-500/5 py-2 rounded-r-lg">
          ${formatInline(quoteText)}
        </blockquote>`);
      i++;
      continue;
    }

    // Bullet List (- or *)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const listItems = [];
      while (i < bucketLines.length && (bucketLines[i].trim().startsWith('- ') || bucketLines[i].trim().startsWith('* '))) {
        listItems.push(bucketLines[i].trim().replace(/^[-*]\s+/, ''));
        i++;
      }
      elements.push(`        <ul key="ul-${secId}-${i}" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-disc list-inside">
        ${listItems.map(item => `  <li>${formatInline(item)}</li>`).join('\n        ')}
      </ul>`);
      continue;
    }

    // Numbered List
    if (/^\d+\.\s+/.test(trimmed)) {
      const listItems = [];
      while (i < bucketLines.length && /^\d+\.\s+/.test(bucketLines[i].trim())) {
        listItems.push(bucketLines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      elements.push(`        <ol key="ol-${secId}-${i}" className="my-3 space-y-1.5 text-xs md:text-sm text-slate-300 list-decimal list-inside">
        ${listItems.map(item => `  <li>${formatInline(item)}</li>`).join('\n        ')}
      </ol>`);
      continue;
    }

    // Paragraph
    elements.push(`        <p key="p-${secId}-${i}" className="my-2 text-xs md:text-sm text-slate-300 leading-relaxed">
          ${formatInline(trimmed)}
        </p>`);
    i++;
  }

  return elements.join('\n');
}

// Generate the full JSX file content
const outputJSX = `import React from "react";

export const JAVA_PROBLEM_SOLVING_PATTERNS_SECTIONS = [
  {
    id: 0,
    title: "Module 21 Overview & Problem-Solving Methodology",
    summary: "Curriculum roadmap: Synthesizing recursion, backtracking, DP, graphs, heaps, monotonic stacks, divide-and-conquer, offline queries, and complexity analysis.",
    content: (
      <div className="space-y-4">
${parseBucketToJSX(buckets[0], 0)}
      </div>
    )
  },
${SECTION_HEADERS.map((header) => {
  const bucketContent = parseBucketToJSX(buckets[header.id], header.id);
  return `  {
    id: ${header.id},
    title: "${header.title.replace(/"/g, '\\"')}",
    summary: "${header.summary.replace(/"/g, '\\"')}",
    content: (
      <div className="space-y-4">
${bucketContent}
      </div>
    )
  }`;
}).join(',\n')}
];
`;

const destPath = path.join(__dirname, '../src/Componets/JavaProblemSolvingPatternsSections.jsx');
fs.writeFileSync(destPath, outputJSX, 'utf-8');
console.log(`Successfully wrote ${destPath} with ${buckets.length} sections!`);
