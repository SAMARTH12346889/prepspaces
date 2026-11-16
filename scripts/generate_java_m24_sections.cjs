const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../m24_java_original.txt');
const rawText = fs.readFileSync(srcPath, 'utf-8');
const lines = rawText.split(/\r?\n/);

const SECTION_HEADERS = [
  { id: 1, trigger: /^1\.\s*Understanding the three capstone projects/i, title: "1. Understanding the Three Capstone Projects", summary: "Evaluating Project 1 (Interactive DSA Visualizer), Project 2 (Java Coding Interview Platform), and Project 3 (Intelligent Data Structures Playground)." },
  { id: 2, trigger: /^(PART 1|2\.\s*What is an Algorithm Visualizer)/i, title: "2. What is an Algorithm Visualizer?", summary: "Principles of visual execution: stepping through state transitions, playback controls, and main dashboard features." },
  { id: 3, trigger: /^3\.\s*Visualize Sorting Algorithms/i, title: "3. Visualize Sorting Algorithms", summary: "Animating Bubble, Selection, Insertion, Merge, Quick, and Heap Sort with complexity analysis and performance comparisons." },
  { id: 4, trigger: /^4\.\s*Visualize Searching Algorithms/i, title: "4. Visualize Searching Algorithms", summary: "Linear search vs binary search visualization, pointer tracking (left, mid, right), and search space halving." },
  { id: 5, trigger: /^5\.\s*Visualize Trees/i, title: "5. Visualize Trees", summary: "Binary Search Tree insertion, searching, deletion, and tree traversals (Inorder, Preorder, Postorder, Level-Order)." },
  { id: 6, trigger: /^6\.\s*Visualize Graphs/i, title: "6. Visualize Graphs", summary: "Graph traversal via BFS and DFS, Dijkstra's shortest path with PriorityQueue relaxation, and Prim's Minimum Spanning Tree." },
  { id: 7, trigger: /^7\.\s*Dynamic Programming Visualization/i, title: "7. Dynamic Programming Visualization", summary: "Visualizing DP table calculations: Fibonacci recurrence, Climbing Stairs, and 2D 0/1 Knapsack state transitions." },
  { id: 8, trigger: /^8\.\s*Architecture for Project 1/i, title: "8. Architecture for Project 1", summary: "Layered separation: Presentation, Visualization Engine, Algorithm Engine, compact step records, and package layout." },
  { id: 9, trigger: /^(PART 2|9\.\s*What is a Coding Interview Platform)/i, title: "9. What is a Coding Interview Platform?", summary: "Online judge architecture: Problem management, workspace, isolated sandboxed execution, judge verdicts, and DB schema." },
  { id: 10, trigger: /^(PART 3|10\.\s*What is a Data Structures Playground)/i, title: "10. What is a Data Structures Playground?", summary: "Building from scratch: Dynamic Array doubling, Singly/Doubly LinkedLists, separate chaining HashMap, AVL rotations, and memory models." },
  { id: 11, trigger: /^(PART 4|11\.\s*Project Architecture)/i, title: "11. Project Architecture", summary: "Layered enterprise architecture: Presentation, Service, Domain/Algorithm, and Infrastructure layers with clean responsibility separation." },
  { id: 12, trigger: /^12\.\s*Requirement Analysis/i, title: "12. Requirement Analysis", summary: "Functional vs non-functional requirements and writing testable acceptance criteria." },
  { id: 13, trigger: /^13\.\s*Data Structure Selection/i, title: "13. Data Structure Selection", summary: "Architectural criteria for choosing collections: HashMap, TreeMap, PriorityQueue, ArrayDeque, and BlockingQueue." },
  { id: 14, trigger: /^14\.\s*Algorithm Design/i, title: "14. Algorithm Design", summary: "Systematic algorithm design process: problem definition, inputs/outputs, constraints, pseudocode, edge cases, and correctness proofs." },
  { id: 15, trigger: /^(PART 5|15\.\s*Java Implementation Standards)/i, title: "15. Java Implementation Standards", summary: "Production Java standards: OOP principles, generic data structures, interface-driven design, and robust exception handling." },
  { id: 16, trigger: /^16\.\s*Unit Testing/i, title: "16. Unit Testing", summary: "Automated test suites with JUnit 5, unit vs integration testing, assertion patterns, and test-driven development workflows." },
  { id: 17, trigger: /^(PART 6|17\.\s*What is Edge Case Testing)/i, title: "17. What is Edge Case Testing?", summary: "Edge case discovery, input validation boundaries, null-pointer safety, numeric overflow, and comprehensive test matrices." },
  { id: 18, trigger: /^(PART 7|18\.\s*What is Performance Benchmarking)/i, title: "18. What is Performance Benchmarking?", summary: "Measuring execution metrics, nanoTime vs JMH microbenchmarks, JVM warm-up, and Big-O vs real-world hardware latency." },
  { id: 19, trigger: /^(PART 8|19\.\s*Version Control)/i, title: "19. Version Control", summary: "Git repository management, branch workflows, conventional commits, .gitignore hygiene, and GitHub deliverables." },
  { id: 20, trigger: /^(PART 9|20\.\s*Project Documentation)/i, title: "20. Project Documentation", summary: "Professional README authoring: architecture diagrams, installation guides, complexity documentation, and test reports." },
  { id: 21, trigger: /^(PART 10|21\.\s*What is Deployment)/i, title: "21. What is Deployment?", summary: "Packaging and release: JavaFX desktop packaging with jpackage, backend Docker containerization, and judge worker isolation." },
  { id: 22, trigger: /^(PART 11|22\.\s*How to Present Your Project)/i, title: "22. How to Present Your Project", summary: "Structuring an engineering presentation: 11 technical talking points and 10-slide architectural deck layout." },
  { id: 23, trigger: /^(PART 12|23\.\s*Implementation phases)/i, title: "23. Implementation Phases", summary: "Structured 10-phase capstone execution roadmap: from requirements and data structures to deployment and final defense." },
  { id: 24, trigger: /^(PART 13|24\.\s*How should the project be evaluated)/i, title: "24. How Should the Project Be Evaluated?", summary: "Comprehensive evaluation rubric: 100% weighted scoring across 7 categories and 5 performance achievement tiers." },
  { id: 25, trigger: /^PART 14\s*—\s*ADVANCED EXTENSIONS/i, title: "25. Advanced Extensions & Final Capstone Knowledge Check", summary: "Advanced extensions for all 3 projects, 20 defense interview questions, 21-item readiness checklist, and final course outcomes." }
];

// Partition lines into 26 buckets (0..25)
const buckets = Array.from({ length: 26 }, () => []);
let currentBucket = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

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

// Format Java code with indentation
function formatJavaCode(raw) {
  let indent = 0;
  let codeLines = [];
  let cur = '';
  let inStr = false;
  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i];
    if (ch === '"' && raw[i - 1] !== '\\') inStr = !inStr;
    if (!inStr) {
      if (ch === '{') {
        cur += ' {';
        codeLines.push('  '.repeat(indent) + cur.trim());
        indent++;
        cur = '';
        continue;
      }
      if (ch === '}') {
        if (cur.trim()) {
          codeLines.push('  '.repeat(indent) + cur.trim());
          cur = '';
        }
        indent = Math.max(0, indent - 1);
        cur = '}';
        if (raw[i + 1] === ';') {
          cur += ';';
          i++;
        }
        codeLines.push('  '.repeat(indent) + cur.trim());
        cur = '';
        continue;
      }
      if (ch === ';') {
        cur += ';';
        const openParens = (cur.match(/\(/g) || []).length;
        const closeParens = (cur.match(/\)/g) || []).length;
        if (openParens > closeParens) {
          cur += ' ';
          continue;
        }
        codeLines.push('  '.repeat(indent) + cur.trim());
        cur = '';
        continue;
      }
    }
    cur += ch;
  }
  if (cur.trim()) {
    codeLines.push('  '.repeat(indent) + cur.trim());
  }
  return codeLines.filter(l => l.trim().length > 0).join('\n');
}

// Inline formatting helper
function formatInline(str) {
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

  // Replace any bare backslashes with HTML entity to avoid useless escape warnings
  s = s.replace(/\\/g, '&#92;');

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

// Table configurations
const KNOWN_TABLES = [
  { trigger: "Your objective", cols: ["Your Objective", "Best Choice"], stopBefore: "My recommendation:" },
  { trigger: "Case", matchSubSec: 3, cols: ["Case", "Complexity"], stopBefore: "3.2 Selection Sort" },
  { trigger: "Algorithm", matchSubSec: 3, cols: ["Algorithm", "Average Time", "Worst Time", "Typical Extra Space"], stopBefore: "An essential feature is showing" },
  { trigger: "n", matchSubSec: 7, cols: ["n", "Value"], stopBefore: "The visualizer highlights" },
  { trigger: "Result", matchSubSec: 9, cols: ["Result Verdict", "Meaning"], stopBefore: "You should define comparison rules" },
  { trigger: "Entity", matchSubSec: 9, cols: ["Database Entity", "Main Fields"], stopBefore: "This project demonstrates relationships" },
  { trigger: "Data structure", matchSubSec: 10, cols: ["Data Structure", "Operations"], stopBefore: "10.2 Implement a Dynamic Array" },
  { trigger: "Operation", matchSubSec: 10, cols: ["Operation", "Custom Array", "ArrayList"], stopBefore: "Use JMH for reliable microbenchmarks" },
  { trigger: "Requirement", matchSubSec: 13, cols: ["System Requirement", "Optimal Collection Choice"], stopBefore: "Your project documentation should explain" },
  { trigger: "Type", matchSubSec: 16, cols: ["Testing Type", "Engineering Purpose"], stopBefore: "16.2 Test-driven development" },
  { trigger: "Test", matchSubSec: 17, cols: ["Test Case", "Sample Input", "Expected Behavior"], stopBefore: "Notice the last case:" },
  { trigger: "Feature", matchSubSec: 17, cols: ["Feature", "Normal Case", "Boundary Case", "Invalid Case"], stopBefore: "PART 7 — PERFORMANCE BENCHMARKING" },
  { trigger: "Metric", matchSubSec: 18, cols: ["Benchmark Metric", "Engineering Meaning"], stopBefore: "18.2 A sorting benchmark" },
  { trigger: "Slide", matchSubSec: 22, cols: ["Slide #", "Content / Focus Area"], stopBefore: "PART 12 — COMPLETE CAPSTONE ROADMAP" },
  { trigger: "Score", matchSubSec: 24, cols: ["Score Range", "Competency Level", "Description"], stopBefore: "This is a suggested rubric" }
];

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

    // Java code snippet detection
    if (
      trimmed.startsWith('public class ') ||
      trimmed.startsWith('public static int ') ||
      trimmed.startsWith('public record ') ||
      trimmed.startsWith('class Node<') ||
      trimmed.startsWith('public interface ') ||
      trimmed.startsWith('public class BubbleSort ') ||
      trimmed.startsWith('public class Stack<') ||
      trimmed.startsWith('import org.junit.') ||
      trimmed.startsWith('long start = System.nanoTime();')
    ) {
      const formatted = formatJavaCode(trimmed);
      const escapedCode = formatted
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\{/g, '&#123;')
        .replace(/\}/g, '&#125;');

      elements.push(`
        <div key="code-${secId}-${elements.length}" className="my-5 rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-xl">
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
              JAVA CAPSTONE CODE
            </span>
            <span className="text-[11px] text-slate-400">Production Engineering Pattern</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{\`${escapedCode}\`}</code>
          </pre>
        </div>
      `);
      i++;
      continue;
    }

    // Check for KNOWN_TABLES
    const matchedTable = KNOWN_TABLES.find(t => {
      if (t.trigger !== trimmed) return false;
      if (t.matchSubSec !== undefined && t.matchSubSec !== secId) return false;
      return true;
    });

    if (matchedTable) {
      const colCount = matchedTable.cols.length;
      i += colCount; // skip header line count
      const rows = [];
      while (i < bucketLines.length) {
        const rowLine = bucketLines[i].trim();
        if (!rowLine || (matchedTable.stopBefore && rowLine.startsWith(matchedTable.stopBefore))) {
          break;
        }
        const rowCells = [];
        for (let c = 0; c < colCount; c++) {
          if (i < bucketLines.length) {
            rowCells.push(bucketLines[i].trim());
            i++;
          }
        }
        if (rowCells.length === colCount) {
          rows.push(rowCells);
        }
      }

      elements.push(`
        <div key="table-${secId}-${elements.length}" className="my-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 shadow-lg">
          <table className="w-full text-left text-xs md:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-900/90 border-b border-slate-800 text-indigo-300 font-semibold font-mono">
                ${matchedTable.cols.map(h => `<th className="p-3.5 border-r border-slate-800/60 last:border-r-0">${formatInline(h)}</th>`).join('')}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              ${rows.map(row => `
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

    // Markdown style code blocks or tree directory structures
    if (trimmed.startsWith('```') || trimmed.startsWith('DSAVisualizer/')) {
      const codeLines = [];
      if (trimmed.startsWith('DSAVisualizer/')) {
        while (i < bucketLines.length && !bucketLines[i].trim().startsWith('You can use Maven')) {
          codeLines.push(bucketLines[i]);
          i++;
        }
      } else {
        i++;
        while (i < bucketLines.length && !bucketLines[i].trim().startsWith('```')) {
          codeLines.push(bucketLines[i]);
          i++;
        }
        i++;
      }
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
              PROJECT STRUCTURE / ASCII DIAGRAM
            </span>
            <span className="text-[11px] text-slate-400">Architecture Blueprint</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-indigo-200 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{\`${escapedCode}\`}</code>
          </pre>
        </div>
      `);
      continue;
    }

    // Top-Level Part / Section Headers
    if (trimmed.startsWith('PART ') || /^\d+\.\s+[A-Za-z]/.test(trimmed)) {
      const title = formatInline(trimmed);
      elements.push(`
        <h2 key="h1-${secId}-${elements.length}" className="text-2xl md:text-3xl font-extrabold text-white mt-10 mb-4 tracking-tight border-b border-slate-800 pb-3 flex items-center gap-3">
          <span className="w-2 h-7 bg-indigo-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: \`${title}\` }} />
        </h2>
      `);
      i++;
      continue;
    }

    // Sub-subheading: e.g. 1.1.1
    if (/^\d+\.\d+\.\d+\s+[A-Za-z]/.test(trimmed)) {
      const title = formatInline(trimmed);
      elements.push(`
        <h4 key="h3-${secId}-${elements.length}" className="text-lg md:text-xl font-semibold text-indigo-300 mt-6 mb-2">
          <span dangerouslySetInnerHTML={{ __html: \`${title}\` }} />
        </h4>
      `);
      i++;
      continue;
    }

    // Subheading: e.g. 1.1, 2.1, 3.1
    if (/^\d+\.\d+\s+[A-Za-z]/.test(trimmed)) {
      const title = formatInline(trimmed);
      elements.push(`
        <h3 key="h2-${secId}-${elements.length}" className="text-xl md:text-2xl font-bold text-white mt-8 mb-3 tracking-tight flex items-center gap-2">
          <span className="w-1.5 h-5 bg-emerald-500 rounded-full inline-block"></span>
          <span dangerouslySetInnerHTML={{ __html: \`${title}\` }} />
        </h3>
      `);
      i++;
      continue;
    }

    // Project reference cards: [VisualGo...](url)
    if (trimmed.startsWith('[') && trimmed.includes('](')) {
      const match = trimmed.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const linkText = formatInline(match[1]);
        const href = match[2];
        elements.push(`
          <div key="link-card-${secId}-${elements.length}" className="my-3 p-3.5 rounded-xl bg-slate-900/80 border border-indigo-500/30 text-indigo-300 text-xs flex items-center justify-between hover:bg-slate-900 transition-colors">
            <span className="font-semibold" dangerouslySetInnerHTML={{ __html: \`${linkText}\` }} />
            <a href="${href}" target="_blank" rel="noopener noreferrer" className="px-3 py-1 rounded bg-indigo-600/30 text-indigo-300 hover:bg-indigo-600 hover:text-white transition-colors">
              Reference Blueprint &rarr;
            </a>
          </div>
        `);
        i++;
        continue;
      }
    }

    // Bullet lists: '-' or '*'
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

    // Numbered questions in Section 25
    if (/^\d+\.\s+.*\?$/.test(trimmed) || /^\d+\.\s+[A-Z].*\?$/.test(trimmed)) {
      const qTitle = formatInline(trimmed);
      elements.push(`
        <div key="mcq-q-${secId}-${elements.length}" className="mt-6 mb-2 p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white font-medium text-sm">
          <span dangerouslySetInnerHTML={{ __html: \`${qTitle}\` }} />
        </div>
      `);
      i++;
      continue;
    }

    // Standalone Math equation: \[ ... \]
    if (trimmed.startsWith('\\[') && trimmed.endsWith('\\]')) {
      const mathContent = trimmed.slice(2, -2).trim();
      const cleaned = mathContent
        .replace(/\\log/g, 'log')
        .replace(/\\leq/g, '&le;')
        .replace(/\\geq/g, '&ge;')
        .replace(/\\times/g, '&times;')
        .replace(/\\quad/g, '  ')
        .replace(/\\text\{(.*?)\}/g, '$1')
        .replace(/\\/g, '');
      elements.push(`
        <div key="math-${secId}-${elements.length}" className="my-4 p-3 text-center bg-slate-900/60 border border-slate-800 rounded-xl font-mono text-indigo-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: \`${cleaned}\` }} />
        </div>
      `);
      i++;
      continue;
    }

    // Standard paragraph
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
    title: "Module 24 Overview & Capstone Engineering Framework",
    summary: "Capstone engineering masterclass: designing, implementing, benchmarking, testing, and deploying production Java software."
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
 * AUTO-GENERATED CURRICULUM SECTIONS COMPONENT FOR MODULE 24
 * Final Java & DSA Capstone Project
 * Total Sections: ${sectionsData.length}
 */

export const JAVA_CAPSTONE_SECTIONS = [
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

const outputPath = path.join(__dirname, '../src/Componets/JavaCapstoneSections.jsx');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${outputPath} with ${sectionsData.length} sections.`);
