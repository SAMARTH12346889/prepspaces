const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../m18_java_original.txt');
const rawText = fs.readFileSync(srcPath, 'utf-8');
const lines = rawText.split(/\r?\n/);

const SECTION_HEADERS = [
  { id: 1, trigger: /^##\s*\*\*1\.\s*Shortest Path Problem/i, title: "1. Shortest Path Problem", summary: "Graph fundamentals, path costs, and variations (single-source, single-pair, all-pairs, DAGs)." },
  { id: 2, trigger: /^#\s*\*\*2\.\s*Java Graph Representation/i, title: "2. Java Graph Representation", summary: "Weighted Edge class, Adjacency List creation, directed vs undirected graph construction in Java." },
  { id: 3, trigger: /^#\s*\*\*3\.\s*BFS Shortest Path/i, title: "3. BFS Shortest Path", summary: "Breadth-First Search for unweighted graphs, level-by-level exploration, parent tracking, and path reconstruction." },
  { id: 4, trigger: /^#\s*\*\*4\.\s*Dijkstra's Algorithm/i, title: "4. Dijkstra's Algorithm", summary: "Nonnegative weighted shortest paths, edge relaxation, PriorityQueue state modeling, and stale entry pruning." },
  { id: 5, trigger: /^#\s*\*\*5\.\s*Negative Edge Weights/i, title: "5. Negative Edge Weights", summary: "Understanding negative edges, why greedy Dijkstra fails, and negative edge vs negative-weight cycle distinction." },
  { id: 6, trigger: /^#\s*\*\*6\.\s*Bellman-Ford Algorithm/i, title: "6. Bellman-Ford Algorithm", summary: "V-1 relaxation rounds, O(VE) shortest paths with negative weights, and reachable negative cycle detection." },
  { id: 7, trigger: /^#\s*\*\*7\.\s*Floyd-Warshall Algorithm/i, title: "7. Floyd-Warshall Algorithm", summary: "All-pairs shortest paths via dynamic programming O(V³), intermediate vertex k, and diagonal negative cycles." },
  { id: 8, trigger: /^#\s*\*\*8\.\s*Shortest Paths in Directed Acyclic Graphs/i, title: "8. Shortest Paths in Directed Acyclic Graphs", summary: "Topological sorting (Kahn's) + single-pass edge relaxation in O(V + E) supporting negative weights." },
  { id: 9, trigger: /^#\s*\*\*9\.\s*Minimum Spanning Tree \(MST\)/i, title: "9. Minimum Spanning Tree (MST)", summary: "Definition of spanning tree (V-1 edges), minimum-cost network vs shortest paths, and MST properties." },
  { id: 10, trigger: /^#\s*\*\*10\.\s*Prim's Algorithm/i, title: "10. Prim's Algorithm", summary: "Greedy vertex-growing MST algorithm with PriorityQueue of candidate boundary edges in O(E log V)." },
  { id: 11, trigger: /^#\s*\*\*11\.\s*Kruskal's Algorithm/i, title: "11. Kruskal's Algorithm", summary: "Global edge-sorting greedy strategy, cycle avoidance via Disjoint Set Union (DSU) in O(E log E)." },
  { id: 12, trigger: /^#\s*\*\*12\.\s*Disjoint Set Union \(DSU\)/i, title: "12. Disjoint Set Union (DSU)", summary: "Union-Find data structure, parent arrays, path compression, and union by size in amortized O(α(V))." },
  { id: 13, trigger: /^#\s*\*\*13\.\s*Kruskal's Algorithm — Complete Java Implementation/i, title: "13. Kruskal's Algorithm — Complete Java Implementation", summary: "Full Java implementation of Kruskal's MST algorithm with internal DSU, edge comparator, and connectivity check." },
  { id: 14, trigger: /^#\s*\*\*14\.\s*DSU-Based Graph Optimization/i, title: "14. DSU-Based Graph Optimization", summary: "Dynamic connectivity queries, cycle detection in undirected graphs, and component counting." },
  { id: 15, trigger: /^#\s*\*\*15\.\s*Network Connectivity/i, title: "15. Network Connectivity", summary: "Connecting disjoint computer networks, redundant cable reallocation, and minimum C-1 operations." },
  { id: 16, trigger: /^#\s*\*\*16\.\s*Grid-Based Graph Problems/i, title: "16. Grid-Based Graph Problems", summary: "Implicit grid graphs, direction vectors (dr, dc), 4-directional and 8-directional BFS pathfinding." },
  { id: 17, trigger: /^#\s*\*\*17\.\s*Multi-Source BFS/i, title: "17. Multi-Source BFS", summary: "Simultaneous queue initialization for multiple sources, distance to nearest facility, Rotting Oranges, and 01 Matrix." },
  { id: 18, trigger: /^#\s*\*\*18\.\s*0-1 BFS/i, title: "18. 0-1 BFS", summary: "Shortest paths with edge weights {0, 1} using ArrayDeque (offerFirst for 0, offerLast for 1) in linear O(V + E)." },
  { id: 19, trigger: /^#\s*\*\*19\.\s*Algorithm Comparison and Complexity/i, title: "19. Algorithm Comparison and Complexity", summary: "Comprehensive reference matrix of all 7 shortest-path and 2 MST algorithms with decision trees." },
  { id: 20, trigger: /^#\s*\*\*20\.\s*Important Graph Optimization Concepts/i, title: "20. Important Graph Optimization Concepts", summary: "Greedy properties, Edge Relaxation, Cut Property, Cycle Property, Minimum Spanning Forests, and MST uniqueness." },
  { id: 21, trigger: /^#\s*\*\*21\.\s*Common Mistakes and Interview Traps/i, title: "21. Common Mistakes and Interview Traps", summary: "9 critical pitfalls: Dijkstra with negative edges, confusing MST with shortest path, stale PQ states, integer overflow." },
  { id: 22, trigger: /^#\s*\*\*22\.\s*Where These Algorithms Are Used in the Real World/i, title: "22. Real-World Applications", summary: "GPS routing, telecommunication infrastructure, optical fiber layout, flight scheduling, robotics pathfinding." },
  { id: 23, trigger: /^#\s*\*\*23\.\s*Level-Based Problem Set/i, title: "23. Level-Based Problem Set", summary: "35 curated problems across 4 levels: Shortest-Path Fundamentals, Advanced Shortest Paths, MST & DSU, Advanced FAANG." },
  { id: 24, trigger: /^#\s*\*\*24\.\s*Important Coding Interview Problems — What to Learn/i, title: "24. High-Yield Interview Problems", summary: "Key problem taxonomy: Network Delay Time, Cheapest Flights, Path With Minimum Effort, Swim in Rising Water, Equations DSU." },
  { id: 25, trigger: /^#\s*\*\*25\.\s*Module 18 — Mastery Checklist/i, title: "25. Mastery Checklist", summary: "24-point self-assessment checklist tracking conceptual and implementation mastery of shortest paths and MSTs." },
  { id: 26, trigger: /^#\s*\*\*26\.\s*Final Revision Sheet/i, title: "26. Final Revision Sheet", summary: "High-density quick revision formulas: relaxation, MST edge count, Bellman-Ford passes, Floyd-Warshall DP, DSU α(V)." },
  { id: 27, trigger: /^##\s*\*\*27\.\s*What You Should Be Able to Explain in an Interview/i, title: "27. Interview Q&A & Final Understanding", summary: "15 core architectural questions and final decision framework for selecting optimal graph algorithms." }
];

// Partition lines into buckets
const buckets = Array.from({ length: 28 }, () => []);
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
            <span className="text-[10px] text-slate-400 font-sans">Module 18 Shortest Paths & MST</span>
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

export const JAVA_SHORTEST_PATHS_MST_SECTIONS = [
  {
    id: 0,
    title: "Module 18 Overview & Graph Foundations",
    summary: "Curriculum roadmap: Shortest Path algorithms, Minimum Spanning Trees, DSU optimization, and grid-based pathfinding.",
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

const destPath = path.join(__dirname, '../src/Componets/JavaShortestPathsMSTSections.jsx');
fs.writeFileSync(destPath, outputJSX, 'utf-8');
console.log(`Successfully wrote ${destPath} with ${buckets.length} sections!`);
