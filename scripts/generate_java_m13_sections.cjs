const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m13_java_original.txt');
const outPath = path.resolve(__dirname, '../src/Componets/JavaHeapsSections.jsx');
const content = fs.readFileSync(rawFile, 'utf8');
const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l, idx) => idx === 0, title: "Module 13: Heaps, Priority Queues & Advanced Trees Overview", category: "Course Roadmap · Objectives", anchor: "overview" },
  { id: 1, test: (l) => /^1\.\s+Heap Fundamentals/.test(l), title: "1. Heap Fundamentals & Heap-Order Invariants", category: "Part A · Heaps & Priority Queues", anchor: "heap-fundamentals" },
  { id: 2, test: (l) => /^2\.\s+Min Heap and Max Heap/.test(l), title: "2. Min Heap and Max Heap Mathematical Properties", category: "Part A · Heap Taxonomies", anchor: "min-max-heap" },
  { id: 3, test: (l) => /^3\.\s+Complete Binary Tree Representation/.test(l), title: "3. Complete Binary Tree Array Representation & Arithmetic", category: "Part A · Array Mechanics", anchor: "array-representation" },
  { id: 4, test: (l) => /^4\.\s+Heap Insertion/.test(l), title: "4. Heap Insertion & Sift Up (Bubble / Percolate Up)", category: "Part A · Sift Up Operations", anchor: "heap-insertion" },
  { id: 5, test: (l) => /^5\.\s+Heap Deletion/.test(l), title: "5. Heap Deletion & Sift Down (Extract Root)", category: "Part A · Sift Down Operations", anchor: "heap-deletion" },
  { id: 6, test: (l) => /^6\.\s+Heapify/.test(l), title: "6. Heapify Algorithm & Subtree Heap Restoration", category: "Part A · Subtree Repair", anchor: "heapify" },
  { id: 7, test: (l) => /^7\.\s+Build Heap/.test(l), title: "7. Build Heap: Bottom-Up Construction & Linear O(n) Proof", category: "Part A · Linear Construction", anchor: "build-heap" },
  { id: 8, test: (l) => /^8\.\s+Heap Sort/.test(l), title: "8. Heap Sort: In-Place O(n log n) Comparison Sorting", category: "Part A · Sorting Algorithms", anchor: "heap-sort" },
  { id: 9, test: (l) => /^9\.\s+Java PriorityQueue/.test(l), title: "9. Java PriorityQueue: API Internals, Comparators & Traps", category: "Part A · Java Collections", anchor: "java-priority-queue" },
  { id: 10, test: (l) => /^10\.\s+Kth Largest and Kth Smallest Elements/.test(l), title: "10. Kth Largest & Kth Smallest Elements (Optimal Sized Heaps)", category: "Part A · Interview Patterns", anchor: "kth-elements" },
  { id: 11, test: (l) => /^11\.\s+Top K Frequent Elements/.test(l), title: "11. Top K Frequent Elements (HashMap + Min Heap - LeetCode 347)", category: "Part A · Frequency Patterns", anchor: "top-k-frequent" },
  { id: 12, test: (l) => /^12\.\s+Merge K Sorted Lists/.test(l), title: "12. Merge K Sorted Lists (K-Way Merge Heap - LeetCode 23)", category: "Part A · Multi-Way Merge", anchor: "merge-k-sorted-lists" },
  { id: 13, test: (l) => /^13\.\s+Median from Data Stream/.test(l), title: "13. Find Median from Data Stream (Two Heaps Balancing - LeetCode 295)", category: "Part A · Dual Heap Streaming", anchor: "median-data-stream" },
  { id: 14, test: (l) => /^14\.\s+Binary Heap Complexity/.test(l), title: "14. Binary Heap Comprehensive Complexity Matrix", category: "Part A · Complexity Benchmark", anchor: "heap-complexity" },
  { id: 15, test: (l) => /^15\.\s+Why Do We Need Advanced Balanced Trees\?/.test(l), title: "15. Why Do We Need Advanced Balanced Trees? Degeneracy & Height", category: "Part B · Self-Balancing Motivation", anchor: "why-balanced-trees" },
  { id: 16, test: (l) => /^16\.\s+AVL Trees/.test(l), title: "16. AVL Trees & Balance Factors (|BF| <= 1)", category: "Part B · AVL Foundations", anchor: "avl-trees" },
  { id: 17, test: (l) => /^17\.\s+AVL Rotations/.test(l), title: "17. Four AVL Rotations: LL, RR, LR, and RL", category: "Part B · AVL Rotations", anchor: "avl-rotations" },
  { id: 18, test: (l) => /^18\.\s+Implementing AVL Insertion in Java/.test(l), title: "18. Implementing AVL Insertion in Java from Scratch", category: "Part B · AVL Implementation", anchor: "avl-implementation" },
  { id: 19, test: (l) => /^19\.\s+Red-Black Trees Fundamentals/.test(l), title: "19. Red-Black Trees Fundamentals: 5 Invariant Rules & Recoloring", category: "Part B · Red-Black Foundations", anchor: "red-black-trees" },
  { id: 20, test: (l) => /^20\.\s+Balanced Tree Comparison/.test(l), title: "20. Balanced Tree Comparison: BST vs AVL vs Red-Black vs Heap", category: "Part B · Comparative Architecture", anchor: "balanced-tree-comparison" },
  { id: 21, test: (l) => /^21\.\s+Common Mistakes in Heap and Advanced Tree Problems/.test(l), title: "21. Common Mistakes & Interview Traps", category: "Part B · Defensive Engineering", anchor: "common-mistakes" },
  { id: 22, test: (l) => /^22\.\s+Important Interview Questions/.test(l), title: "22. Important Theoretical Interview Questions (45 Questions)", category: "Part B · Technical Q&A", anchor: "interview-questions" },
  { id: 23, test: (l) => /^23\.\s+Practical Coding Assignments/.test(l), title: "23. Practical Coding Assignments (45 Problems)", category: "Part B · Hands-on Labs", anchor: "coding-assignments" },
  { id: 24, test: (l) => /^24\.\s+Recommended LeetCode Practice/.test(l), title: "24. Recommended LeetCode Practice Progression (15 Problems)", category: "Part B · LeetCode Track", anchor: "leetcode-track" },
  { id: 25, test: (l) => /^25\.\s+Module 13\s+—\s+Final Knowledge Check/.test(l), title: "25. Knowledge Assessment & Quiz", category: "Part B · Knowledge Check", anchor: "knowledge-check" },
  { id: 26, test: (l) => /^26\.\s+What You Should Be Able to Do After Module 13/.test(l), title: "26. Learning Outcomes & Engineering Mastery", category: "Milestone · Advanced Tree Mastery", anchor: "learning-outcomes" },
  { id: 27, test: (l) => /^27\.\s+Recommended Study Sequence/.test(l), title: "27. Recommended Study Sequence & Strategy", category: "Milestone · Study Roadmap", anchor: "study-sequence" },
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
  }
}
if (currentBucket) {
  buckets.push(currentBucket);
}

console.log('Buckets partitioned:', buckets.length);

function formatInline(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
    .replace(/\\\[/g, '<span className="block font-mono bg-stone-100 text-stone-900 px-3 py-1.5 my-2 rounded text-xs overflow-x-auto border border-stone-200">')
    .replace(/\\\]/g, '</span>')
    .replace(/\\\((.*?)\\\)/g, '<code className="font-mono text-orange-600 bg-orange-50 px-1 py-0.5 rounded text-xs border border-orange-100">$1</code>')
    .replace(/`([^`]+)`/g, '<code className="font-mono text-orange-600 bg-orange-50 px-1 py-0.5 rounded text-xs border border-orange-100">$1</code>');
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

function renderDiagramBlock(diagram) {
  const sanitized = diagram.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  return `          <div className="p-4 rounded-xl bg-stone-900 text-orange-300 font-mono text-xs overflow-x-auto leading-tight border border-stone-800 my-4 shadow-inner">
            <div className="text-[10px] text-stone-500 uppercase tracking-widest font-bold pb-2 mb-2 border-b border-stone-800 font-sans">
              Heap & Balanced Tree Topology
            </div>
            <pre className="overflow-x-auto [scrollbar-width:thin] text-center sm:text-left">
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
  { headers: ["Application", "How heaps are used"], rowCount: 9 },
  { headers: ["Feature", "Heap", "BST"], rowCount: 7 },
  { headers: ["Feature", "Min Heap", "Max Heap"], rowCount: 4 },
  { headers: ["Operation", "Complexity"], rowCount: 3 },
  { headers: ["Feature", "Insertion", "Root deletion"], rowCount: 4 },
  { headers: ["Method", "Complexity"], rowCount: 3 },
  { headers: ["Case", "Time"], rowCount: 3 },
  { headers: ["Feature", "Heap Sort", "Quick Sort", "Merge Sort"], rowCount: 6 },
  { headers: ["Method", "Meaning", "Typical complexity"], rowCount: 8 },
  { headers: ["Problem", "Heap type", "Heap size"], rowCount: 4 },
  { headers: ["Element", "Frequency"], rowCount: 3 },
  { headers: ["Operation", "Complexity"], rowCount: 2 },
  { headers: ["Operation", "Min Heap", "Max Heap"], rowCount: 7 },
  { headers: ["Balance factor", "Meaning"], rowCount: 5 },
  { headers: ["Case", "Imbalance path", "Correction"], rowCount: 4 },
  { headers: ["Operation", "Complexity"], rowCount: 6 },
  { headers: ["Operation", "Worst-case complexity"], rowCount: 5 },
  { headers: ["Situation", "General correction"], rowCount: 3 },
  { headers: ["Feature", "AVL Tree", "Red-Black Tree"], rowCount: 10 },
  { headers: ["Feature", "Normal BST", "AVL", "Red-Black"], rowCount: 7 },
  { headers: ["Feature", "Binary Heap", "AVL", "Red-Black"], rowCount: 6 },
  { headers: ["Requirement", "Recommended structure"], rowCount: 8 },
  { headers: ["Problem", "Difficulty", "Main concept"], rowCount: 5 },
  { headers: ["Stage", "Focus"], rowCount: 15 }
];

function isCodeLine(line) {
  const t = line.trim();
  if (t.startsWith('class ') || t.startsWith('public class ') || t.startsWith('import java') ||
      t.startsWith('PriorityQueue') || t.startsWith('pq.offer') || t.startsWith('pq.poll') ||
      t.startsWith('static void ') || t.startsWith('static Node ') || t.startsWith('static int ') ||
      t.startsWith('static double ') || t.startsWith('static ListNode ') ||
      t.startsWith('static int[] ') || t.startsWith('static boolean ') ||
      t.startsWith('TreeMap') || t.startsWith('map.put(') ||
      t.startsWith('root.left =') || t.startsWith('root.right =') ||
      t.startsWith('Node x =') || t.startsWith('Node y =') ||
      t.startsWith('MedianFinder ') || t.startsWith('int[] heap =') ||
      t.startsWith('int[] arr =') || t.startsWith('buildMaxHeap(arr)') || t.startsWith('heapSort(arr)') ||
      t.startsWith('System.out.println') || t.startsWith('System.out.print') ||
      t.startsWith('return rightRotate(') || t.startsWith('return leftRotate(') ||
      t.startsWith('if (key < node.key)') || t.startsWith('x.height = 1 +') ||
      t.startsWith('heap.add(value)') || t.startsWith('int minimum = heap.get(0)') ||
      t.startsWith('for (int num : pq)') || t.startsWith('while (!pq.isEmpty())') ||
      t.startsWith('ListNode dummy =') || t.startsWith('current.next =') ||
      t.startsWith('new PriorityQueue') || t.startsWith('PriorityQueue<Student>') ||
      t.startsWith('int left = 2 *') || t.startsWith('int right = 2 *') ||
      t.startsWith('int parent = (i - 1)') || t.startsWith('int i = 1;')) {
    return true;
  }
  return false;
}

function isDiagramLine(line) {
  const t = line.trim();
  if (t.includes('/ \\') || t.includes('/  \\') || t.includes('\\ /') ||
      t.includes('10 / \\ 20 15') || t.includes('90 / \\ 70 80') ||
      t.includes('40 / \\ 10 15') || t.includes('10 / \\ 40 15') ||
      t.includes('10 / \\ 5 3') || t.includes('20 / \\ 10 30') ||
      t.includes('30 / 20 / 10') || t.includes('10 \\ 20 \\ 30') ||
      t.includes('30 / 10 \\ 20') || t.includes('10 \\ 30 / 20') ||
      t.includes('10 \\ 20 \\ 30 \\ 40 \\ 50 \\ 60') ||
      t.includes('20(B) / \\ 10(R) 30(R)') ||
      t.includes('30(B) / 20(R) / 10(R)') ||
      t.includes('30(R) / 20(B) / 10(R)') ||
      (t.includes('->') && t.includes('->') && t.includes('1 ->')) ||
      (t.startsWith('Index:') && t.includes('Value:'))) {
    return true;
  }
  return false;
}

function processBucket(bucket) {
  const rawLines = bucket.lines;
  const elements = [];
  let i = 0;

  while (i < rawLines.length) {
    const line = rawLines[i].trim();

    if (!line) {
      i++;
      continue;
    }

    if (line.startsWith('[') && (line.includes('http') || line.includes('.com') || line.includes('.io') || line.includes('.org') || line.includes('.de') || line.includes('openai.com'))) {
      i++;
      continue;
    }

    // Check table headers
    let matchedTable = null;
    for (const tDef of knownTableDefs) {
      const headerLen = tDef.headers.length;
      let allMatch = true;
      for (let h = 0; h < headerLen; h++) {
        if (!rawLines[i + h] || rawLines[i + h].trim() !== tDef.headers[h]) {
          allMatch = false;
          break;
        }
      }
      if (allMatch) {
        matchedTable = tDef;
        break;
      }
    }

    if (matchedTable) {
      const colCount = matchedTable.headers.length;
      let rIdx = i + colCount;
      const rows = [];
      for (let r = 0; r < matchedTable.rowCount; r++) {
        const rowCells = [];
        for (let c = 0; c < colCount; c++) {
          rowCells.push(rawLines[rIdx] ? rawLines[rIdx].trim() : '');
          rIdx++;
        }
        rows.push(rowCells);
      }
      elements.push(renderTable(matchedTable.headers, rows));
      i = rIdx;
      continue;
    }

    // Check subheadings
    const submatch = line.match(/^(\d+\.\d+)\s+(.*)/);
    if (submatch) {
      const subNum = submatch[1];
      const subTitle = formatInline(submatch[2]);
      elements.push(`          <h3 className="text-lg font-bold text-stone-900 mt-6 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>${subNum} ${subTitle}</span>
          </h3>`);
      i++;
      continue;
    }

    // Check Step sub-headers
    const stepMatch = line.match(/^Step\s+(\d+)\s+[—-]\s+(.*)/i);
    if (stepMatch) {
      elements.push(`          <h4 className="text-base font-semibold text-stone-800 mt-4 mb-2 text-orange-950 flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-mono">Step ${stepMatch[1]}</span>
            <span>${formatInline(stepMatch[2])}</span>
          </h4>`);
      i++;
      continue;
    }

    // Check Case sub-headers
    const caseMatch = line.match(/^Case\s+(\d+)\s+[—-]\s+(.*)/i);
    if (caseMatch) {
      elements.push(`          <h4 className="text-base font-semibold text-stone-800 mt-4 mb-2 text-orange-950 flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-mono">Case ${caseMatch[1]}</span>
            <span>${formatInline(caseMatch[2])}</span>
          </h4>`);
      i++;
      continue;
    }

    // Check Rule sub-headers
    const ruleMatch = line.match(/^Rule\s+(\d+)\s+[—-]\s+(.*)/i);
    if (ruleMatch) {
      elements.push(`          <h4 className="text-base font-semibold text-stone-800 mt-4 mb-2 text-stone-900 flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-red-100 text-red-800 font-mono">Rule ${ruleMatch[1]}</span>
            <span>${formatInline(ruleMatch[2])}</span>
          </h4>`);
      i++;
      continue;
    }

    // Check Method sub-headers
    const methodMatch = line.match(/^Method\s+(\d+)\s+[—-]\s+(.*)/i);
    if (methodMatch) {
      elements.push(`          <h4 className="text-base font-semibold text-stone-800 mt-4 mb-2 text-stone-900 flex items-center gap-2">
        <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">Method ${methodMatch[1]}</span>
        <span>${formatInline(methodMatch[2])}</span>
      </h4>`);
      i++;
      continue;
    }

    // Check Approach sub-headers
    const approachMatch = line.match(/^Approach\s+(\d+)\s+[—-]\s+(.*)/i);
    if (approachMatch) {
      elements.push(`          <h4 className="text-base font-semibold text-stone-800 mt-4 mb-2 text-stone-900 flex items-center gap-2">
        <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">Approach ${approachMatch[1]}</span>
        <span>${formatInline(approachMatch[2])}</span>
      </h4>`);
      i++;
      continue;
    }

    // Check Diagram Lines
    if (isDiagramLine(line)) {
      const diagLines = [line];
      let j = i + 1;
      while (j < rawLines.length) {
        const nextL = rawLines[j].trim();
        if (!nextL) {
          j++;
          break;
        }
        if (/^\d+(\.\d+)*\s+/.test(nextL) || isCodeLine(nextL)) {
          break;
        }
        diagLines.push(rawLines[j]);
        j++;
      }
      elements.push(renderDiagramBlock(diagLines.join('\n')));
      i = j;
      continue;
    }

    // Check Code Lines
    if (isCodeLine(line)) {
      let codeStr = line;
      let j = i + 1;
      while (j < rawLines.length) {
        const nextL = rawLines[j].trim();
        if (!nextL) {
          j++;
          break;
        }
        if (/^\d+(\.\d+)*\s+/.test(nextL) || nextL.startsWith('Output:') || nextL.startsWith('Example:') || nextL.startsWith('Usage:') || nextL.startsWith('Explanation:')) {
          break;
        }
        codeStr += ' ' + nextL;
        j++;
      }
      const formatted = formatJavaCode(codeStr);
      elements.push(renderCodeBlock(formatted, 'java'));
      i = j;
      continue;
    }

    // Output block
    if (line.startsWith('Output:')) {
      const outText = line.substring(7).trim();
      elements.push(`          <div className="p-3 my-2 rounded-lg bg-[#f4f2ed] border border-[#e2ded5] text-xs font-mono text-stone-800 flex items-start gap-2">
            <span className="text-orange-600 font-bold uppercase tracking-wider text-[10px]">Output:</span>
            <span>${formatInline(outText)}</span>
          </div>`);
      i++;
      continue;
    }

    // Math block
    if (line === '\\[' || line.startsWith('\\[')) {
      let mathBlock = line;
      let j = i + 1;
      while (j < rawLines.length && !mathBlock.includes('\\]')) {
        mathBlock += ' ' + rawLines[j].trim();
        j++;
      }
      elements.push(`          <div className="my-3 p-3 text-center bg-[#faf8f5] border border-[#e7e3da] rounded-xl font-mono text-sm text-stone-900 shadow-2xs">
            ${formatInline(mathBlock)}
          </div>`);
      i = j;
      continue;
    }

    // Check Callout / Important / Warning lines
    if (line.startsWith('Remember:') || line.startsWith('Important mistake:') || line.startsWith('Important distinction:') || line.startsWith('Important interview lesson:') || line.startsWith('Interview trick:') || line.startsWith('Memory trick:') || line.startsWith('Note:') || line.startsWith('Recommended priority:')) {
      elements.push(`          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-orange-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-600 font-bold shrink-0 mt-0.5">âš </span>
            <div>${formatInline(line)}</div>
          </div>`);
      i++;
      continue;
    }

    // Check List items or Assignment items
    const listMatch = line.match(/^(\d+\.|[•\-\*])\s+(.*)/);
    if (listMatch) {
      const numOrBullet = listMatch[1];
      const rest = formatInline(listMatch[2]);
      elements.push(`          <div className="flex items-start gap-2.5 my-1.5 text-xs sm:text-sm text-stone-700 leading-relaxed pl-2">
            <span className="text-orange-600 font-semibold font-mono text-xs shrink-0 mt-0.5">${numOrBullet}</span>
            <span>${rest}</span>
          </div>`);
      i++;
      continue;
    }

    // Standard paragraph
    elements.push(`          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ${formatInline(line)}
          </p>`);
    i++;
  }

  return elements.join('\n');
}

let jsxOutput = `import React from "react";
import { Sparkles, Terminal, Code2, BookOpen, Layers, CheckCircle2, AlertTriangle, ArrowRight, GitFork, Cpu } from "lucide-react";

export const JAVA_HEAPS_SECTIONS = [
`;

buckets.forEach((bucket, bIdx) => {
  const h = bucket.header;
  const bodyJsx = processBucket(bucket);
  jsxOutput += `  {
    id: ${h.id},
    title: "${h.title.replace(/"/g, '\\"')}",
    category: "${h.category}",
    anchor: "${h.anchor}",
    content: (
      <div className="space-y-4">
${bodyJsx}
      </div>
    ),
  },\n`;
});

jsxOutput += `];\n`;

fs.writeFileSync(outPath, jsxOutput, 'utf8');
console.log('Successfully wrote', outPath, 'with', buckets.length, 'sections!');
