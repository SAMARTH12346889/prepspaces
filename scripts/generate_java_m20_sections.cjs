const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../m20_java_original.txt');
const rawText = fs.readFileSync(srcPath, 'utf-8');
const lines = rawText.split(/\r?\n/);

const SECTION_HEADERS = [
  { id: 1, trigger: /^1\.\s*Advanced DP State Modeling/i, title: "1. Advanced DP State Modeling", summary: "Defining DP states with multiple interacting conditions, 5-step design recipe, and pseudopolynomial complexity analysis." },
  { id: 2, trigger: /^2\.\s*Multi-Dimensional DP/i, title: "2. Multi-Dimensional DP", summary: "2D and 3D DP formulations (e.g. multi-resource knapsack with weight and volume limits, stock trading with transaction constraints)." },
  { id: 3, trigger: /^3\.\s*Grid DP/i, title: "3. Grid DP", summary: "Navigating 2D spatial coordinate grids: Unique Paths, handling obstacles, Minimum Path Sum, and directional transition equations." },
  { id: 4, trigger: /^4\.\s*String DP/i, title: "4. String DP", summary: "Levenshtein Edit Distance (insert, delete, replace transitions) and contrasting contiguous substrings with non-contiguous subsequences." },
  { id: 5, trigger: /^5\.\s*Longest Palindromic Subsequence/i, title: "5. Longest Palindromic Subsequence", summary: "Interval-based string expansion, why table iteration runs backward, and the equivalence between LPS and LCS of s with reverse(s)." },
  { id: 6, trigger: /^6\.\s*DP on Trees/i, title: "6. DP on Trees", summary: "Hierarchical subproblem processing: House Robber III, tree diameter, and taking vs skipping nodes in O(N) time and O(H) stack depth." },
  { id: 7, trigger: /^7\.\s*DP on Graphs/i, title: "7. DP on Graphs", summary: "Topological DP on Directed Acyclic Graphs (DAGs), longest path in O(V + E), and handling general cyclic graphs." },
  { id: 8, trigger: /^8\.\s*Bitmask DP/i, title: "8. Bitmask DP", summary: "Representing visited subsets and state selections using integers: bitwise operations, submask transitions, and O(n² 2ⁿ) complexity." },
  { id: 9, trigger: /^9\.\s*Traveling Salesman Problem/i, title: "9. Traveling Salesman Problem (TSP)", summary: "NP-hard optimization solved via Bitmask DP: visiting all vertices and closing the Hamiltonian cycle to city 0." },
  { id: 10, trigger: /^10\.\s*Digit DP Introduction/i, title: "10. Digit DP Introduction", summary: "Counting numbers in range [0, N] satisfying digit sum or pattern properties using position, sum, and tightness flags." },
  { id: 11, trigger: /^11\.\s*Interval DP/i, title: "11. Interval DP", summary: "Contiguous sub-range optimization: Matrix Chain Multiplication O(N³), split points k, and Burst Balloons inside-out transition." },
  { id: 12, trigger: /^12\.\s*DP Optimization Techniques/i, title: "12. DP Optimization Techniques", summary: "Classification of state reduction, rolling buffers, monotonic queues, Convex Hull Trick, and Knuth optimization." },
  { id: 13, trigger: /^13\.\s*Space Optimization in DP/i, title: "13. Space Optimization in DP", summary: "Compressing 2D tables into 1D reverse-swept arrays (0/1 Knapsack) or 2-row rolling buffers (LCS) in O(N) memory." },
  { id: 14, trigger: /^14\.\s*Divide and Conquer DP Introduction/i, title: "14. Divide and Conquer DP Introduction", summary: "Accelerating 2D partition recurrences from O(KN²) to O(KN log N) when optimal split positions satisfy monotonicity opt[i] <= opt[i+1]." },
  { id: 15, trigger: /^15\.\s*Meet in the Middle/i, title: "15. Meet in the Middle", summary: "Splitting an exponential search space of size N into two halves of size N/2 to reduce complexity from O(2ⁿ) to O(N 2^(n/2))." },
  { id: 16, trigger: /^16\.\s*Bit Manipulation Fundamentals/i, title: "16. Bit Manipulation Fundamentals", summary: "Six core bitwise operators (&, |, ^, ~, <<, >>, >>>), two's complement sign inversion ~x = -x - 1, and bit shifting nuances." },
  { id: 17, trigger: /^17\.\s*Important Bit Manipulation Techniques/i, title: "17. Important Bit Manipulation Techniques", summary: "Parity checking (n & 1), power of two (n & (n - 1) == 0), Brian Kernighan's set bit count, isolating rightmost bit (n & -n)." },
  { id: 18, trigger: /^18\.\s*XOR Techniques/i, title: "18. XOR Techniques", summary: "Self-inverse properties (a ^ a = 0), finding single non-duplicate, partitioning two unique numbers by bitmask, and 4-step periodic XOR sum." },
  { id: 19, trigger: /^19\.\s*Bitmasking/i, title: "19. Bitmasking", summary: "Permission bit flags, enumerating all 2ⁿ subsets, and submask iteration trick for (sub = mask; sub > 0; sub = (sub - 1) & mask)." },
  { id: 20, trigger: /^20\.\s*Mathematical Algorithmic Patterns/i, title: "20. Mathematical Algorithmic Patterns", summary: "Euclidean GCD, LCM, Sieve of Eratosthenes O(N log log N), modular arithmetic, fast binary exponentiation O(log N), and Fermat's inverse." },
  { id: 21, trigger: /^21\.\s*Randomized Algorithms Introduction/i, title: "21. Randomized Algorithms Introduction", summary: "Las Vegas (always correct, variable time, e.g. Randomized QuickSort) vs Monte Carlo (fixed time, probabilistic error) and Reservoir Sampling." },
  { id: 22, trigger: /^22\.\s*Complexity Analysis of Advanced Algorithms/i, title: "22. Complexity Analysis of Advanced Algorithms", summary: "Master complexity formulation (States x Transitions), comprehensive reference matrix, and analyzing exponential growth." },
  { id: 23, trigger: /^23\.\s*Correctness Proofs/i, title: "23. Correctness Proofs", summary: "Mathematical induction for DP, loop invariants (initialization, maintenance, termination), greedy exchange arguments, and randomized probability bounds." },
  { id: 24, trigger: /^24\.\s*Choosing the Correct Advanced Technique/i, title: "24. Choosing the Correct Advanced Technique", summary: "Problem-to-algorithm decision matrix and recognizing signals in problem descriptions." },
  { id: 25, trigger: /^25\.\s*Practice Problems by Difficulty/i, title: "25. Practice Problems by Difficulty", summary: "Curated 35-problem roadmap across 4 levels: Advanced DP Foundations, Tree & Graph DP, Advanced State DP, and Optimization." },
  { id: 26, trigger: /^26\.\s*Complexity Comparison/i, title: "26. Complexity Comparison — Complete Module", summary: "Consolidated reference table of time and auxiliary space complexities across all 20 module topics." },
  { id: 27, trigger: /^27\.\s*Common Mistakes and Interview Traps/i, title: "27. Common Mistakes and Interview Traps", summary: "14 critical implementation pitfalls: overcomplicating dimensions, backward vs forward loops, forgetting TSP return edges, and integer overflow." },
  { id: 28, trigger: /^28\.\s*Module 20\s*[—–-]\s*Mastery Checklist/i, title: "28. Module 20 — Mastery Checklist", summary: "29-topic self-assessment diagnostic checklist tracking comprehensive mastery of advanced DP and algorithm design." },
  { id: 29, trigger: /^29\.\s*Final Revision Sheet/i, title: "29. Final Revision Sheet", summary: "High-density quick reference sheet covering state recurrences, bit manipulation formulas, math templates, and proof strategies." },
  { id: 30, trigger: /^30\.\s*What You Should Be Able to Do/i, title: "30. What You Should Be Able to Do After Module 20", summary: "Core takeaways, achieving algorithmic independence, and mastering unseen problem design in technical interviews." }
];

// Partition lines into buckets
const buckets = Array.from({ length: 31 }, () => []);
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
    if (secId > 0 && i === 0 && (trimmed.startsWith('#') || /^\d+\.\s+[A-Za-z]/.test(trimmed))) {
      i++;
      continue;
    }

    // Subheadings H2 (## **...** or 1.1 ... or ## ...)
    if (trimmed.startsWith('## ') || /^\d+\.\d+\s+[A-Za-z]/.test(trimmed)) {
      const h2Text = trimmed.replace(/^##\s*\**|\**$/g, '').trim();
      elements.push(`        <h3 key="h3-${secId}-${i}" className="text-lg md:text-xl font-bold text-indigo-400 mt-8 mb-3 flex items-center gap-2 border-b border-slate-800 pb-2">
          <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
          ${formatInline(h2Text)}
        </h3>`);
      i++;
      continue;
    }

    // Subheadings H3 (### **...** or Part ...)
    if (trimmed.startsWith('### ') || /^Part\s+\d+/i.test(trimmed)) {
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
            <span className="text-[10px] text-slate-400 font-sans">Module 20 Advanced DP</span>
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
    if (/^\d+\.\s+/.test(trimmed) && !/^\d+\.\d+/.test(trimmed)) {
      const listItems = [];
      while (i < bucketLines.length && /^\d+\.\s+/.test(bucketLines[i].trim()) && !/^\d+\.\d+/.test(bucketLines[i].trim())) {
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

export const JAVA_ADVANCED_DP_SECTIONS = [
  {
    id: 0,
    title: "Module 20 Overview & Advanced Algorithm Design",
    summary: "Curriculum roadmap: Complex state spaces, multidimensional DP, tree/graph DP, bitmasking, digit DP, interval DP, randomized algorithms, and correctness proofs.",
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

const destPath = path.join(__dirname, '../src/Componets/JavaAdvancedDPSections.jsx');
fs.writeFileSync(destPath, outputJSX, 'utf-8');
console.log(`Successfully wrote ${destPath} with ${buckets.length} sections!`);
