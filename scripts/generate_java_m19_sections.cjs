const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../m19_java_original.txt');
const rawText = fs.readFileSync(srcPath, 'utf-8');
const lines = rawText.split(/\r?\n/);

const SECTION_HEADERS = [
  { id: 1, trigger: /^#\s*\*\*1\.\s*Dynamic Programming Introduction/i, title: "1. Dynamic Programming Introduction", summary: "The core philosophy of DP, avoiding redundant calculations by storing subproblem answers, and real-world applications." },
  { id: 2, trigger: /^#\s*\*\*2\.\s*Overlapping Subproblems/i, title: "2. Overlapping Subproblems", summary: "Understanding when a recursive call tree re-evaluates the same subproblems repeatedly, comparing Fibonacci with Merge Sort." },
  { id: 3, trigger: /^#\s*\*\*3\.\s*Optimal Substructure/i, title: "3. Optimal Substructure", summary: "How globally optimal solutions are composed of optimal solutions to subproblems, and why both DP properties are required." },
  { id: 4, trigger: /^#\s*\*\*4\.\s*Memoization/i, title: "4. Memoization", summary: "Top-down DP: caching recursive function results using arrays or HashMaps, on-demand evaluation, and recursion stack overhead." },
  { id: 5, trigger: /^#\s*\*\*5\.\s*Tabulation/i, title: "5. Tabulation", summary: "Bottom-up DP: solving subproblems iteratively from smallest base cases to target state without recursion stack overhead." },
  { id: 6, trigger: /^#\s*\*\*6\.\s*Recursion to DP Conversion/i, title: "6. Recursion to DP Conversion", summary: "The 6-step mechanical recipe to transform any naive recursive algorithm into memoization and then iterative tabulation." },
  { id: 7, trigger: /^#\s*\*\*7\.\s*DP State Definition/i, title: "7. DP State Definition", summary: "The mathematical identity of a subproblem: choosing parameters (1D, 2D, 3D) that capture all necessary decision history." },
  { id: 8, trigger: /^#\s*\*\*8\.\s*State Transitions/i, title: "8. State Transitions", summary: "The recurrence relation and decision logic that connects a larger problem to its constituent smaller subproblems." },
  { id: 9, trigger: /^#\s*\*\*9\.\s*Base Cases/i, title: "9. Base Cases", summary: "The bedrock stopping conditions where answer is directly known without further subproblem decomposition." },
  { id: 10, trigger: /^#\s*\*\*10\.\s*DP Optimization/i, title: "10. DP Optimization", summary: "Space optimization techniques: sliding variables, 2-row rolling arrays, and in-place 1D updates." },
  { id: 11, trigger: /^#\s*\*\*11\.\s*Fibonacci Sequence/i, title: "11. Fibonacci Sequence", summary: "The classic benchmark comparing Recursion O(2^n), Memoization O(n), Tabulation O(n), and Space Optimization O(1)." },
  { id: 12, trigger: /^#\s*\*\*12\.\s*Climbing Stairs/i, title: "12. Climbing Stairs", summary: "Counting distinct ways to reach top using 1 or 2 steps, relation to Fibonacci, and k-step variations." },
  { id: 13, trigger: /^#\s*\*\*13\.\s*Minimum Cost Climbing Stairs/i, title: "13. Minimum Cost Climbing Stairs", summary: "Minimizing transition cost when climbing 1 or 2 steps, base cases, and O(1) rolling space optimization." },
  { id: 14, trigger: /^#\s*\*\*14\.\s*House Robber/i, title: "14. House Robber", summary: "Maximizing non-adjacent loot, rob vs skip recurrence, dry run, and House Robber II circular neighborhood reduction." },
  { id: 15, trigger: /^#\s*\*\*15\.\s*0\/1 Knapsack/i, title: "15. 0/1 Knapsack", summary: "The foundational DP problem: include vs exclude bounded items under weight capacity, 2D table, and reverse 1D array traversal." },
  { id: 16, trigger: /^#\s*\*\*16\.\s*Unbounded Knapsack/i, title: "16. Unbounded Knapsack", summary: "Infinite item supply knapsack, forward capacity propagation, and comparison with 0/1 Knapsack." },
  { id: 17, trigger: /^#\s*\*\*17\.\s*Subset Sum Problem/i, title: "17. Subset Sum Problem", summary: "Determining whether a subset sums to target: boolean DP state, include/exclude transition, and 1D reverse scan." },
  { id: 18, trigger: /^#\s*\*\*18\.\s*Partition Equal Subset Sum/i, title: "18. Partition Equal Subset Sum", summary: "Dividing array into two subsets with equal sum: reduction to Subset Sum with target = totalSum / 2." },
  { id: 19, trigger: /^#\s*\*\*19\.\s*Coin Change/i, title: "19. Coin Change", summary: "Coin Change I (fewest coins to make amount) vs Coin Change II (total distinct combinations count)." },
  { id: 20, trigger: /^#\s*\*\*20\.\s*Longest Common Subsequence/i, title: "20. Longest Common Subsequence (LCS)", summary: "2D character matching DP, state transitions, table construction, and backtracking to reconstruct the LCS string." },
  { id: 21, trigger: /^#\s*\*\*21\.\s*Longest Increasing Subsequence/i, title: "21. Longest Increasing Subsequence (LIS)", summary: "O(n^2) DP approach vs O(n log n) Patience Sorting / Binary Search (Arrays.binarySearch) technique." },
  { id: 22, trigger: /^#\s*\*\*22\.\s*Edit Distance/i, title: "22. Edit Distance", summary: "Minimum insert, delete, and replace operations to convert word1 to word2, 2D grid DP, and Levenshtein distance." },
  { id: 23, trigger: /^#\s*\*\*23\.\s*Matrix Chain Multiplication/i, title: "23. Matrix Chain Multiplication", summary: "Interval DP: optimal parenthesization of matrix products, chain length iterations, split points k, and O(n^3) complexity." },
  { id: 24, trigger: /^#\s*\*\*24\.\s*Major Dynamic Programming Patterns/i, title: "24. Major Dynamic Programming Patterns", summary: "Classification of 6 master DP patterns: 1D Linear, 2D Grid/Strings, Knapsack, Subsequences, Interval DP, and Tree/Bitmask DP." },
  { id: 25, trigger: /^#\s*\*\*25\.\s*Greedy vs Dynamic Programming/i, title: "25. Greedy vs Dynamic Programming", summary: "When local greedy choice suffices vs when overlapping optimal substructure demands exploring subproblems." },
  { id: 26, trigger: /^#\s*\*\*26\.\s*Important DP Implementation Mistakes/i, title: "26. Important DP Implementation Mistakes", summary: "10 frequent interview bugs: uninitialized cache, 0 vs -1 sentinel, wrong loop direction, and integer overflow." },
  { id: 27, trigger: /^#\s*\*\*27\.\s*Complete Dynamic Programming Complexity Summary/i, title: "27. Complete Dynamic Programming Complexity Summary", summary: "Master reference table of time and space complexities across top-down, bottom-up, and space-optimized implementations." },
  { id: 28, trigger: /^#\s*\*\*28\.\s*Interview and Practice Problems/i, title: "28. Interview and Practice Problems", summary: "Curated 35-problem roadmap across 4 levels from fundamentals to advanced competitive programming." },
  { id: 29, trigger: /^#\s*\*\*29\.\s*How to Solve Any New DP Problem/i, title: "29. How to Solve Any New DP Problem", summary: "A step-by-step master checklist and thinking framework for tackling unseen dynamic programming problems in interviews." },
  { id: 30, trigger: /^#\s*\*\*30\.\s*Module 19/i, title: "30. Module 19 — Final Understanding Checklist", summary: "20-point self-assessment diagnostic to verify comprehensive mastery of dynamic programming." },
  { id: 31, trigger: /^#\s*\*\*31\.\s*The 12 Most Important Lessons/i, title: "31. The 12 Most Important Lessons from Module 19", summary: "Core principles of DP engineering, memory vs computation tradeoffs, and preview of Module 20 (Advanced Graphs)." }
];

// Partition lines into buckets
const buckets = Array.from({ length: 32 }, () => []);
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
            <span className="text-[10px] text-slate-400 font-sans">Module 19 Dynamic Programming Fundamentals</span>
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

export const JAVA_DYNAMIC_PROGRAMMING_SECTIONS = [
  {
    id: 0,
    title: "Module 19 Overview & Central Idea",
    summary: "Curriculum roadmap: Subproblem memoization, bottom-up tabulation, state transitions, knapsack, subsequences, and interval DP.",
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

const destPath = path.join(__dirname, '../src/Componets/JavaDynamicProgrammingSections.jsx');
fs.writeFileSync(destPath, outputJSX, 'utf-8');
console.log(`Successfully wrote ${destPath} with ${buckets.length} sections!`);
