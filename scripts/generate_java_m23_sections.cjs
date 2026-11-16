const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '../m23_java_original.txt');
const rawText = fs.readFileSync(srcPath, 'utf-8');
const lines = rawText.split(/\r?\n/);

const SECTION_HEADERS = [
  { id: 1, trigger: /^1\.\s*Data Structures Interview Preparation/i, title: "1. Data Structures Interview Preparation", summary: "Interviewer expectations, core DSA evaluation criteria, complexity requirements, and structure selection trade-offs." },
  { id: 2, trigger: /^2\.\s*Algorithms Interview Preparation/i, title: "2. Algorithms Interview Preparation", summary: "Essential algorithmic categories, selection heuristics, matching problem constraints to optimal approaches." },
  { id: 3, trigger: /^3\.\s*Coding Interview Methodology/i, title: "3. Coding Interview Methodology", summary: "The 7-Step Coding Interview framework: Understand, Clarify, Brute Force, Optimize, Complexity, Code, and Dry Run." },
  { id: 4, trigger: /^4\.\s*Clarifying Problem Requirements/i, title: "4. Clarifying Problem Requirements", summary: "Targeted question categories: input formats, constraints, duplicates, mutability, and edge condition bounds." },
  { id: 5, trigger: /^5\.\s*Brute Force to Optimized Solution/i, title: "5. Brute Force to Optimized Solution", summary: "Transforming O(N^2) naive approaches into O(N) linear solutions via HashMaps, sliding windows, and two pointers." },
  { id: 6, trigger: /^6\.\s*Complexity Explanation/i, title: "6. Complexity Explanation", summary: "Articulating Big-O time and space complexity, recursion call stacks, auxiliary memory, and amortized bounds." },
  { id: 7, trigger: /^7\.\s*Edge Case Analysis/i, title: "7. Edge Case Analysis", summary: "Edge case discovery checklist: empty inputs, single elements, negative numbers, extreme duplicates, and integer overflow." },
  { id: 8, trigger: /^8\.\s*Dry Runs/i, title: "8. Dry Runs", summary: "Systematic code walkthroughs, variable state tracking tables, tracing edge cases, and catching off-by-one errors before running code." },
  { id: 9, trigger: /^9\.\s*Code Quality and Readability/i, title: "9. Code Quality and Readability", summary: "Clean production code in interviews: semantic naming, modular helper functions, defensive checks, and Java conventions." },
  { id: 10, trigger: /^10\.\s*Interview Communication/i, title: "10. Interview Communication", summary: "Think-Aloud protocol, active interviewer collaboration, taking hints constructively, and avoiding communication silence." },
  { id: 11, trigger: /^11\.\s*Java Coding Interview Questions/i, title: "11. Java Coding Interview Questions", summary: "High-frequency Java-specific questions: equals/hashCode contracts, String immutability, OOP vs interfaces, and collections." },
  { id: 12, trigger: /^12\.\s*Arrays and Strings Interview Patterns/i, title: "12. Arrays and Strings Interview Patterns", summary: "Two-pointer techniques, sliding window patterns, prefix sums, and character frequency arrays with worked implementations." },
  { id: 13, trigger: /^13\.\s*Linked List Interview Questions/i, title: "13. Linked List Interview Questions", summary: "Pointer manipulation, reversal in O(N) time and O(1) space, Floyd's cycle detection, and merge mechanics." },
  { id: 14, trigger: /^14\.\s*Tree and Graph Interview Questions/i, title: "14. Tree and Graph Interview Questions", summary: "BFS level-order traversal, DFS tree height and symmetry, graph adjacency representation, and shortest-path BFS." },
  { id: 15, trigger: /^15\.\s*Dynamic Programming Interview Questions/i, title: "15. Dynamic Programming Interview Questions", summary: "Identifying overlapping subproblems, memoization vs tabulation, state compression, House Robber, and Knapsack." },
  { id: 16, trigger: /^16\.\s*Mock Technical Interviews/i, title: "16. Mock Technical Interviews", summary: "Simulating live technical interviews, time management, peer feedback rubrics, and handling unfamiliar constraints." },
  { id: 17, trigger: /^17\.\s*Timed Coding Assessments/i, title: "17. Timed Coding Assessments", summary: "Online assessment (OA) strategies: rapid question triage, managing time budgets, brute-force fallback, and test suite verification." },
  { id: 18, trigger: /^18\.\s*Competitive Programming Revision/i, title: "18. Competitive Programming Revision", summary: "Advanced speed patterns: fast I/O, binary exponentiation, bit manipulation tricks, and modular arithmetic." },
  { id: 19, trigger: /^19\.\s*Interview Mistake Analysis/i, title: "19. Interview Mistake Analysis", summary: "Top technical and behavioral interview pitfalls: jumping into code too early, ignoring hints, silent thinking, and debugging panic." },
  { id: 20, trigger: /^20\.\s*Technical Interview Question Bank/i, title: "20. Technical Interview Question Bank", summary: "Curated repository of top interview problems across data structures, patterns, algorithms, and system fundamentals." },
  { id: 21, trigger: /^21\.\s*Practical Interview Preparation Strategy/i, title: "21. Practical Interview Preparation Strategy", summary: "A structured 4-phase preparation roadmap: foundational mastery, pattern drill, timed mock rounds, and company-specific tuning." },
  { id: 22, trigger: /^22\.\s*Module 23 Final Practice Assessment/i, title: "22. Module 23 Final Practice Assessment", summary: "Comprehensive placement readiness exam: 15 high-yield multiple-choice questions with full explanations." },
  { id: 23, trigger: /^23\.\s*Final Learning Outcomes/i, title: "23. Final Learning Outcomes", summary: "Mastery scorecard: end-to-end evaluation of technical competence, problem-solving speed, clean code, and placement readiness." }
];

// Partition lines into 24 buckets
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

  // Replace any remaining bare backslashes with HTML entity &#92; to prevent template literal escape warnings
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

// Known table definitions for Section 1, 2, 7, 8, 15, 17, 19
const KNOWN_TABLES = [
  { trigger: "Data structure", cols: ["Data Structure", "Important Concepts", "Typical Interview Problems"], stopBefore: "1.3 Understand complexity of operations" },
  { trigger: "Operation", cols: ["Operation", "Array", "ArrayList", "HashMap", "TreeMap"], stopBefore: "These are typical complexities" },
  { trigger: "Category", matchSubSec: 2, cols: ["Category", "Important Algorithms"], stopBefore: "2.2 Understand algorithm selection" },
  { trigger: "Category", matchSubSec: 7, cols: ["Category", "Example"], stopBefore: "7.3 Example: Maximum element" },
  { trigger: "Step", matchSubSec: 8, cols: ["Step", "Low", "High", "Mid", "Value at Mid", "Action"], stopBefore: "Output:" },
  { trigger: "Category", matchSubSec: 15, cols: ["Category", "Essential Questions"], stopBefore: "15.4 Important DP interview questions" },
  { trigger: "Time", matchSubSec: 17, cols: ["Time Window", "Activity"], stopBefore: "This is an example" },
  { trigger: "Mistake category", matchSubSec: 19, cols: ["Mistake Category", "Example"], stopBefore: "19.3 Interview error log" },
  { trigger: "Problem", matchSubSec: 19, cols: ["Problem", "Mistake", "Root Cause", "Corrective Action"], stopBefore: "19.4 Classify mistakes by severity" }
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
    if (trimmed.startsWith('public class ') || trimmed.startsWith('import java.') || trimmed.startsWith('class ListNode') || trimmed.startsWith('class TreeNode')) {
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
              JAVA INTERVIEW CODE
            </span>
            <span className="text-[11px] text-slate-400">Technical Placement Benchmark</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-emerald-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{\`${escapedCode}\`}</code>
          </pre>
        </div>
      `);
      i++;
      continue;
    }

    // Table detection based on KNOWN_TABLES
    const matchedTable = KNOWN_TABLES.find(t => {
      if (t.trigger !== trimmed) return false;
      if (t.matchSubSec !== undefined && t.matchSubSec !== secId) return false;
      return true;
    });

    if (matchedTable) {
      // Consume header lines
      const colCount = matchedTable.cols.length;
      i += colCount; // skip header lines in file
      const rows = [];
      while (i < bucketLines.length) {
        const rowLine = bucketLines[i].trim();
        if (!rowLine || (matchedTable.stopBefore && rowLine.startsWith(matchedTable.stopBefore))) {
          break;
        }
        // collect colCount items
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

    // Markdown style code blocks if any
    if (trimmed.startsWith('```')) {
      const codeLines = [];
      const lang = trimmed.slice(3).trim() || 'text';
      i++;
      while (i < bucketLines.length && !bucketLines[i].trim().startsWith('```')) {
        codeLines.push(bucketLines[i]);
        i++;
      }
      i++;
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
            <span className="text-[11px] text-slate-400">Technical Interview Code</span>
          </div>
          <pre className="p-4 overflow-x-auto text-xs md:text-sm font-mono text-slate-200 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
            <code>{\`${escapedCode}\`}</code>
          </pre>
        </div>
      `);
      continue;
    }

    // Section 1..23 Top-Level Heading (line 0 of the bucket usually)
    if (/^\d+\.\s+[A-Za-z]/.test(trimmed)) {
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

    // Multiple Choice Question in Section 22
    if (/^\d+\.\s+.*\?$/.test(trimmed) || /^\d+\.\s+Consider the following/i.test(trimmed)) {
      const qTitle = formatInline(trimmed);
      elements.push(`
        <div key="mcq-q-${secId}-${elements.length}" className="mt-8 mb-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-white font-medium">
          <span dangerouslySetInnerHTML={{ __html: \`${qTitle}\` }} />
        </div>
      `);
      i++;
      continue;
    }

    // Multiple choice option lines: A. ..., B. ..., C. ..., D. ...
    if (/^[A-D]\.\s+/.test(trimmed)) {
      const optHtml = formatInline(trimmed);
      elements.push(`
        <div key="mcq-opt-${secId}-${elements.length}" className="ml-4 my-1.5 px-3 py-2 rounded-lg bg-slate-800/40 border border-slate-700/40 text-slate-300 text-sm font-mono hover:bg-slate-800/70 transition-colors">
          <span dangerouslySetInnerHTML={{ __html: \`${optHtml}\` }} />
        </div>
      `);
      i++;
      continue;
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

    // Standalone Math equation: \[ ... \]
    if (trimmed.startsWith('\\[') && trimmed.endsWith('\\]')) {
      const mathContent = trimmed.slice(2, -2).trim();
      const cleaned = mathContent
        .replace(/\\log/g, 'log')
        .replace(/\\leq/g, '&le;')
        .replace(/\\geq/g, '&ge;')
        .replace(/\\times/g, '&times;')
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
    title: "Module 23 Overview & Technical Placement Framework",
    summary: "Strategic masterclass for technical interviews: 7-step problem solving, communication frameworks, and optimal coding patterns."
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
 * AUTO-GENERATED CURRICULUM SECTIONS COMPONENT FOR MODULE 23
 * Technical Interview & Placement Mastery
 * Total Sections: ${sectionsData.length}
 */

export const JAVA_INTERVIEW_MASTERY_SECTIONS = [
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

const outputPath = path.join(__dirname, '../src/Componets/JavaInterviewMasterySections.jsx');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated ${outputPath} with ${sectionsData.length} sections.`);
