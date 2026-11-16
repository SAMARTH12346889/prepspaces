const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../m22_java_original.txt');
const rawText = fs.readFileSync(srcPath, 'utf-8');
const lines = rawText.split(/\r?\n/);

const SECTION_HEADERS = [
  { id: 1, trigger: /^##\s*\*\*1\.\s*Java Collections Framework Deep Dive/i, title: "1. Java Collections Framework Deep Dive", summary: "JCF architecture, Iterable and Collection hierarchies, Map separation rationale, collection algorithms, and fail-fast iterators." },
  { id: 2, trigger: /^##\s*\*\*2\.\s*ArrayList Internals/i, title: "2. ArrayList Internals", summary: "Dynamic resizing mechanics, 50% capacity expansion, element shifting, amortized O(1) appends, and ensureCapacity optimization." },
  { id: 3, trigger: /^##\s*\*\*3\.\s*LinkedList Internals/i, title: "3. LinkedList Internals", summary: "Doubly linked list node structure, O(1) endpoint insertion vs O(N) indexed access, and CPU cache locality vs ArrayList." },
  { id: 4, trigger: /^##\s*\*\*4\.\s*HashMap Internals/i, title: "4. HashMap Internals", summary: "Hash code bit-spreading, power-of-two table indexing, separate chaining, treeification at 8 entries, 0.75 load factor, and equals/hashCode contracts." },
  { id: 5, trigger: /^##\s*\*\*5\.\s*TreeMap and TreeSet/i, title: "5. TreeMap and TreeSet", summary: "Red-Black Tree invariants, logarithmic guarantees O(log N), NavigableMap methods (floor, ceiling, lower, higher), and TreeSet comparison consistency." },
  { id: 6, trigger: /^##\s*\*\*6\.\s*PriorityQueue Implementation/i, title: "6. PriorityQueue Implementation", summary: "Binary min-heap complete tree representation, sift-up and sift-down algorithms in O(log N), max-heap reverse comparators, and Top-K extraction." },
  { id: 7, trigger: /^##\s*\*\*7\.\s*Concurrent Collections Introduction/i, title: "7. Concurrent Collections Introduction", summary: "Thread-safety in collections, ConcurrentHashMap bucket-level locking & CAS, CopyOnWriteArrayList, and BlockingQueue for producer-consumer pipelines." },
  { id: 8, trigger: /^##\s*\*\*8\.\s*Java Memory Model/i, title: "8. Java Memory Model", summary: "Thread interactions, visibility problem, volatile happens-before semantics, atomic read-modify-write, AtomicInteger, synchronized monitors, and immutability." },
  { id: 9, trigger: /^##\s*\*\*9\.\s*Stack and Heap Memory/i, title: "9. Stack and Heap Memory", summary: "Per-thread JVM stacks, stack frames, StackOverflowError, heap object/array storage, references vs objects, and HotSpot Metaspace." },
  { id: 10, trigger: /^##\s*\*\*10\.\s*Garbage Collection/i, title: "10. Garbage Collection", summary: "Reachability analysis from GC roots, Generational hypothesis (Eden, Survivor, Tenured), Mark-Sweep-Compact, G1/ZGC collectors, Stop-the-World, and memory leaks." },
  { id: 11, trigger: /^##\s*\*\*11\.\s*JVM Architecture/i, title: "11. JVM Architecture", summary: "Bytecode compilation flow, ClassLoader subsystem, Runtime Data Areas, Execution Engine (Interpreter + JIT), Garbage Collector, and JNI." },
  { id: 12, trigger: /^##\s*\*\*12\.\s*Class Loading/i, title: "12. Class Loading", summary: "Class loading lifecycle (Loading, Linking: verification/preparation/resolution, Initialization), Bootstrap/Platform/Application loaders, and Parent Delegation Model." },
  { id: 13, trigger: /^##\s*\*\*13\.\s*JIT Compilation/i, title: "13. JIT Compilation", summary: "Just-In-Time native compilation, hot method profiling, Tiered Compilation (Interpreter, C1, C2), Method Inlining, Escape Analysis, and JVM warm-up." },
  { id: 14, trigger: /^##\s*\*\*14\.\s*Java Performance Profiling/i, title: "14. Java Performance Profiling", summary: "Latency vs throughput, Java Flight Recorder (JFR), Java Mission Control (JMC), VisualVM, jcmd diagnostics, and JMH microbenchmarking." },
  { id: 15, trigger: /^##\s*\*\*15\.\s*Object Allocation/i, title: "15. Object Allocation", summary: "Object headers and field alignment, Thread Local Allocation Buffers (TLABs), StringBuilder vs string concatenation in loops, primitive boxing costs, and pooling pitfalls." },
  { id: 16, trigger: /^##\s*\*\*16\.\s*Time and Memory Optimization/i, title: "16. Time and Memory Optimization", summary: "Optimal data structure selection, avoiding nested O(N^2) loops, reducing unnecessary copying (views vs clones), BufferedReader I/O, and time-space tradeoffs." },
  { id: 17, trigger: /^##\s*\*\*17\.\s*Big-O vs Practical Performance/i, title: "17. Big-O vs Practical Performance", summary: "Why Big-O isn't the whole story: constant factors, CPU cache locality, allocation throughput, branch prediction, and real-world data structure benchmarks." },
  { id: 18, trigger: /^##\s*\*\*18\.\s*Writing Efficient Java Code/i, title: "18. Writing Efficient Java Code", summary: "Declaring variables via interfaces, idiomatic Map methods (getOrDefault, merge), memory-efficient duplicates detection, and measurement-driven optimization workflows." },
  { id: 19, trigger: /^#\s*\*\*PART 4\s*—\s*WORKED EXAMPLES\*\*/i, title: "19. Part 4 — Worked Examples", summary: "Step-by-step implementations: Top-K largest elements with PriorityQueue, Student lookup with HashMap, and first non-repeating character with LinkedHashMap." },
  { id: 20, trigger: /^#\s*\*\*PART 5\s*—\s*PRACTICAL LABS\*\*/i, title: "20. Part 5 — Practical Labs", summary: "Hands-on projects: Collection benchmarking, Custom HashMap implementation from scratch, JVM memory allocation limits, PriorityQueue task scheduler, and thread-safe counter." },
  { id: 21, trigger: /^#\s*\*\*PART 6\s*—\s*ASSIGNMENTS AND MINI PROJECT\*\*/i, title: "21. Part 6 — Assignments and Mini Project", summary: "Decision-making assignments, LinkedList O(N^2) indexed loop optimization, and capstone Concurrent Student Management System architecture." },
  { id: 22, trigger: /^#\s*\*\*PART 7\s*—\s*INTERVIEW AND ASSESSMENT QUESTIONS\*\*/i, title: "22. Part 7 — Interview and Assessment Questions", summary: "10-question fundamental knowledge check plus 15 advanced interview questions spanning JCF, JVM memory, GC, concurrency, and profiling." },
  { id: 23, trigger: /^#\s*\*\*PART 8\s*—\s*FINAL REVISION SHEET\*\*/i, title: "23. Part 8 — Final Revision Sheet", summary: "Quick-reference cheatsheets for Collections, JVM/Memory, Performance Engineering, and checklist of 17 core engineering competencies." }
];

// Partition lines into buckets
const buckets = Array.from({ length: 24 }, () => []);
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

  s = s.replace(/\\\[(.*?)\\\]/g, (_, math) => {
    const cleaned = math
      .replace(/\\log/g, 'log')
      .replace(/\\leq/g, '&le;')
      .replace(/\\geq/g, '&ge;')
      .replace(/\\times/g, '&times;')
      .replace(/\\text\{(.*?)\}/g, '$1')
      .replace(/\\/g, '');
    return `<span className="font-mono text-indigo-300 font-semibold">${cleaned}</span>`;
  });
  s = s.replace(/\\\((.*?)\\\)/g, (_, math) => {
    const cleaned = math
      .replace(/\\log/g, 'log')
      .replace(/\\leq/g, '&le;')
      .replace(/\\geq/g, '&ge;')
      .replace(/\\times/g, '&times;')
      .replace(/\\text\{(.*?)\}/g, '$1')
      .replace(/\\/g, '');
    return `<span className="font-mono text-indigo-300 font-semibold">${cleaned}</span>`;
  });
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

    // Code blocks
    if (trimmed.startsWith('```')) {
      const codeLines = [];
      const lang = trimmed.slice(3).trim() || 'text';
      i++;
      while (i < bucketLines.length && !bucketLines[i].trim().startsWith('```')) {
        codeLines.push(bucketLines[i]);
        i++;
      }
      i++; // consume ending ```
      const rawCode = codeLines.join('\n');
      const escapedCode = rawCode
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\{/g, '&#123;')
        .replace(/\}/g, '&#125;');

      elements.push(`
        <div key="code-${secId}-${elements.length}" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-500/80 inline-block"></span>
              ${lang.toUpperCase()}
            </span>
            <span className="text-[11px] text-slate-400">Java &amp; JVM Internals</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-slate-200 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{\`${escapedCode}\`}</code>
          </pre>
        </div>
      `);
      continue;
    }

    // Blockquote
    if (trimmed.startsWith('>')) {
      const quoteLines = [];
      while (i < bucketLines.length && bucketLines[i].trim().startsWith('>')) {
        quoteLines.push(bucketLines[i].trim().replace(/^>\s*/, ''));
        i++;
      }
      const quoteHtml = formatInline(quoteLines.join(' '));
      elements.push(`
        <div key="quote-${secId}-${elements.length}" className="my-5 p-4 rounded-xl border-l-4 border-indigo-500 bg-indigo-950/20 text-slate-300 text-sm leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: \`${quoteHtml}\` }} />
        </div>
      `);
      continue;
    }

    // Table
    if (trimmed.startsWith('|')) {
      const tableLines = [];
      while (i < bucketLines.length && bucketLines[i].trim().startsWith('|')) {
        tableLines.push(bucketLines[i].trim());
        i++;
      }
      if (tableLines.length >= 2) {
        const headerRow = tableLines[0].split('|').slice(1, -1).map(h => h.trim());
        const bodyRows = tableLines.slice(2).map(r => r.split('|').slice(1, -1).map(c => c.trim()));

        elements.push(`
          <div key="table-${secId}-${elements.length}" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-300 font-semibold font-mono">
                  ${headerRow.map(h => `<th className="p-3.5 border-r border-slate-800/60 last:border-r-0">${formatInline(h)}</th>`).join('')}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                ${bodyRows.map(row => `
                  <tr className="hover:bg-slate-800/30 transition-colors">
                    ${row.map(cell => `<td className="p-3.5 border-r border-slate-800/40 last:border-r-0">${formatInline(cell)}</td>`).join('')}
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        `);
        continue;
      }
    }

    // Headings
    if (trimmed.startsWith('# ')) {
      const title = formatInline(trimmed.replace(/^#\s*/, ''));
      elements.push(`
        <h2 key="h1-${secId}-${elements.length}" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3">
          <span dangerouslySetInnerHTML={{ __html: \`${title}\` }} />
        </h2>
      `);
      i++;
      continue;
    }

    if (trimmed.startsWith('## ')) {
      const title = formatInline(trimmed.replace(/^##\s*/, ''));
      elements.push(`
        <h3 key="h2-${secId}-${elements.length}" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span dangerouslySetInnerHTML={{ __html: \`${title}\` }} />
        </h3>
      `);
      i++;
      continue;
    }

    if (trimmed.startsWith('### ')) {
      const title = formatInline(trimmed.replace(/^###\s*/, ''));
      elements.push(`
        <h4 key="h3-${secId}-${elements.length}" className="text-lg md:text-xl font-semibold text-indigo-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: \`${title}\` }} />
        </h4>
      `);
      i++;
      continue;
    }

    if (trimmed.startsWith('#### ')) {
      const title = formatInline(trimmed.replace(/^####\s*/, ''));
      elements.push(`
        <h5 key="h4-${secId}-${elements.length}" className="text-base font-semibold text-slate-200 mt-4 mb-2">
          <span dangerouslySetInnerHTML={{ __html: \`${title}\` }} />
        </h5>
      `);
      i++;
      continue;
    }

    // Bullet lists
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const listItems = [];
      while (i < bucketLines.length && (bucketLines[i].trim().startsWith('- ') || bucketLines[i].trim().startsWith('* '))) {
        listItems.push(bucketLines[i].trim().replace(/^[-*]\s*/, ''));
        i++;
      }
      elements.push(`
        <ul key="ul-${secId}-${elements.length}" className="my-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
          ${listItems.map(item => `<li><span dangerouslySetInnerHTML={{ __html: \`${formatInline(item)}\` }} /></li>`).join('')}
        </ul>
      `);
      continue;
    }

    // Numbered lists
    if (/^\d+\.\s/.test(trimmed)) {
      const listItems = [];
      while (i < bucketLines.length && /^\d+\.\s/.test(bucketLines[i].trim())) {
        listItems.push(bucketLines[i].trim().replace(/^\d+\.\s*/, ''));
        i++;
      }
      elements.push(`
        <ol key="ol-${secId}-${elements.length}" className="my-4 space-y-2 text-sm text-slate-300 list-decimal list-inside">
          ${listItems.map(item => `<li><span dangerouslySetInnerHTML={{ __html: \`${formatInline(item)}\` }} /></li>`).join('')}
        </ol>
      `);
      continue;
    }

    // Paragraph
    const paraHtml = formatInline(trimmed);
    elements.push(`
      <p key="p-${secId}-${elements.length}" className="my-3 text-sm md:text-base text-slate-300 leading-relaxed">
        <span dangerouslySetInnerHTML={{ __html: \`${paraHtml}\` }} />
      </p>
    `);
    i++;
  }

  return elements.join('\n');
}

// Generate the final sections JSX file
const allSections = [
  {
    id: 0,
    title: "Module 22 Overview & 3 Pillars of Java Performance",
    summary: "Master Collections architecture, JVM runtime internals (memory, class loading, JIT, GC), and enterprise performance engineering."
  },
  ...SECTION_HEADERS
];

const sectionsData = allSections.map((sec, idx) => {
  const secLines = buckets[idx] || [];
  const jsxContent = parseBucketToJSX(secLines, idx);
  return {
    id: idx,
    title: sec.title,
    summary: sec.summary,
    jsxContent
  };
});

let fileContent = `import React from 'react';

/* 
 * AUTO-GENERATED CURRICULUM SECTIONS COMPONENT FOR MODULE 22
 * Java Collections, JVM & Performance Engineering
 * Total Sections: ${sectionsData.length}
 */

export const JAVA_COLLECTIONS_JVM_SECTIONS = [
`;

sectionsData.forEach((sec) => {
  fileContent += `  {
    id: ${sec.id},
    title: ${JSON.stringify(sec.title)},
    summary: ${JSON.stringify(sec.summary)},
    content: (
      <div className="space-y-4">
        ${sec.jsxContent}
      </div>
    )
  },
`;
});

fileContent += `];
`;

const outputPath = path.join(__dirname, '../src/Componets/JavaCollectionsJVMSections.jsx');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${outputPath} with ${sectionsData.length} sections.`);
