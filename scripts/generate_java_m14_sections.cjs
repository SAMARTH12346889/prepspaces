const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m14_java_original.txt');
const outPath = path.resolve(__dirname, '../src/Componets/JavaSpecializedDSSections.jsx');
const content = fs.readFileSync(rawFile, 'utf8');
const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l, idx) => idx === 0, title: "Module 14: Specialized Data Structures Curriculum Overview", category: "Course Roadmap · Objectives", anchor: "overview" },
  { id: 1, test: (l) => /^1\.\s+Trie Fundamentals/.test(l), title: "1. Trie Fundamentals & Prefix Sharing Architecture", category: "Part A · Tries & Prefix Trees", anchor: "trie-fundamentals" },
  { id: 2, test: (l) => /^2\.\s+Trie Node Representation/.test(l), title: "2. Trie Node Representation & Alphabet Indexing", category: "Part A · Trie Architecture", anchor: "trie-node-representation" },
  { id: 3, test: (l) => /^3\.\s+Trie Insertion/.test(l), title: "3. Trie Insertion & Dynamic Path Allocation", category: "Part A · Trie Insertion", anchor: "trie-insertion" },
  { id: 4, test: (l) => /^4\.\s+Trie Search/.test(l), title: "4. Exact Word Search & isEndOfWord Validation", category: "Part A · Trie Search", anchor: "trie-search" },
  { id: 5, test: (l) => /^5\.\s+Prefix Search/.test(l), title: "5. Prefix Search (startsWith) & Character Paths", category: "Part A · Prefix Search", anchor: "prefix-search" },
  { id: 6, test: (l) => /^6\.\s+Delete Operation in Trie/.test(l), title: "6. Delete Operation in Trie & Shared Prefix Preservation", category: "Part A · Trie Deletion", anchor: "delete-trie" },
  { id: 7, test: (l) => /^7\.\s+Word Dictionary Problems/.test(l), title: "7. Word Dictionary with Wildcards (LeetCode 211 - Trie + DFS)", category: "Part A · Wildcard Dictionaries", anchor: "word-dictionary" },
  { id: 8, test: (l) => /^8\.\s+Autocomplete Implementation/.test(l), title: "8. Industrial Autocomplete System Implementation", category: "Part A · Autocomplete Systems", anchor: "autocomplete-implementation" },
  { id: 9, test: (l) => /^9\.\s+Disjoint Set Union Fundamentals/.test(l), title: "9. Disjoint Set Union (DSU / Union-Find) Fundamentals", category: "Part B · Disjoint Set Union", anchor: "dsu-fundamentals" },
  { id: 10, test: (l) => /^10\.\s+Find Operation/.test(l), title: "10. Find Operation & Parent Array Traversal", category: "Part B · DSU Find", anchor: "find-operation" },
  { id: 11, test: (l) => /^11\.\s+Union Operation/.test(l), title: "11. Union Operation & Representative Merging", category: "Part B · DSU Union", anchor: "union-operation" },
  { id: 12, test: (l) => /^12\.\s+Path Compression/.test(l), title: "12. Path Compression: Flattering Trees into Direct Links", category: "Part B · DSU Optimization", anchor: "path-compression" },
  { id: 13, test: (l) => /^13\.\s+Union by Rank/.test(l), title: "13. Union by Rank: Bounding Tree Heights", category: "Part B · Union by Rank", anchor: "union-by-rank" },
  { id: 14, test: (l) => /^14\.\s+Union by Size/.test(l), title: "14. Union by Size: Subtree Component Weighing", category: "Part B · Union by Size", anchor: "union-by-size" },
  { id: 15, test: (l) => /^15\.\s+DSU Complexity/.test(l), title: "15. DSU Amortized Complexity & Inverse Ackermann α(N)", category: "Part B · DSU Analysis", anchor: "dsu-complexity" },
  { id: 16, test: (l) => /^16\.\s+DSU Applications\s+—\s+Detecting Cycles/.test(l), title: "16. DSU Applications: Graph Cycle Detection & Kruskal's MST", category: "Part B · Graph Connectivity", anchor: "dsu-cycle-detection" },
  { id: 17, test: (l) => /^17\.\s+Segment Trees Fundamentals/.test(l), title: "17. Segment Trees Fundamentals & Interval Hierarchies", category: "Part C · Segment Trees", anchor: "segment-trees-fundamentals" },
  { id: 18, test: (l) => /^18\.\s+Segment Tree Representation in Java/.test(l), title: "18. Segment Tree Array Representation (1-Based 4N Allocations)", category: "Part C · Tree Layout", anchor: "segment-tree-representation" },
  { id: 19, test: (l) => /^19\.\s+Range Queries in Segment Trees/.test(l), title: "19. Range Queries: No Overlap, Complete Overlap, Partial Overlap", category: "Part C · Range Queries", anchor: "segment-tree-range-queries" },
  { id: 20, test: (l) => /^20\.\s+Point Updates in Segment Trees/.test(l), title: "20. Point Updates in Segment Trees & Ancestor Propagation", category: "Part C · Point Updates", anchor: "segment-tree-point-updates" },
  { id: 21, test: (l) => /^21\.\s+Complete Segment Tree Implementation in Java/.test(l), title: "21. Complete Segment Tree Implementation in Java & Lazy Propagation", category: "Part C · Segment Tree Engine", anchor: "complete-segment-tree" },
  { id: 22, test: (l) => /^22\.\s+Fenwick Tree\s+\/\s+Binary Indexed Tree/.test(l), title: "22. Fenwick Tree / Binary Indexed Tree (BIT) Architecture", category: "Part D · Fenwick & Sparse Tables", anchor: "fenwick-tree-fundamentals" },
  { id: 23, test: (l) => /^23\.\s+Understanding the Lowest Set Bit/.test(l), title: "23. Bit Manipulation: Lowest Set Bit (i & -i) Mechanics", category: "Part D · Lowest Set Bit", anchor: "lowest-set-bit" },
  { id: 24, test: (l) => /^24\.\s+Fenwick Tree\s+—\s+Point Update/.test(l), title: "24. Fenwick Tree Point Update (Forward Step i += i & -i)", category: "Part D · BIT Updates", anchor: "fenwick-point-update" },
  { id: 25, test: (l) => /^25\.\s+Fenwick Tree\s+—\s+Prefix Sum/.test(l), title: "25. Fenwick Tree Prefix Sum (Backward Step i -= i & -i)", category: "Part D · BIT Prefix Sum", anchor: "fenwick-prefix-sum" },
  { id: 26, test: (l) => /^26\.\s+Fenwick Tree\s+—\s+Range Sum Query/.test(l), title: "26. Range Sum Queries via Prefix Difference (prefix(R) - prefix(L-1))", category: "Part D · BIT Range Sum", anchor: "fenwick-range-sum" },
  { id: 27, test: (l) => /^27\.\s+Complete Fenwick Tree Implementation in Java/.test(l), title: "27. Complete Fenwick Tree Implementation & Segment Tree Comparison", category: "Part D · Complete BIT", anchor: "complete-fenwick-tree" },
  { id: 28, test: (l) => /^28\.\s+Sparse Tables Introduction/.test(l), title: "28. Sparse Tables: Static Power-of-Two RMQ in O(1) Time", category: "Part D · Sparse Tables", anchor: "sparse-tables" },
  { id: 29, test: (l) => /^29\.\s+Comparing the Specialized Data Structures/.test(l), title: "29. Comprehensive Specialized Data Structures Decision Matrix", category: "Part D · Architectural Synthesis", anchor: "compare-specialized-ds" },
  { id: 30, test: (l) => /^30\.\s+Complete Complexity Cheat Sheet/.test(l), title: "30. Complete Complexity Cheat Sheet", category: "Part D · Complexity Benchmark", anchor: "complexity-cheat-sheet" },
  { id: 31, test: (l) => /^31\.\s+Common Mistakes in This Module/.test(l), title: "31. Common Mistakes & Defensive Engineering Traps", category: "Part D · Defensive Traps", anchor: "common-mistakes" },
  { id: 32, test: (l) => /^32\.\s+Important Interview Questions\s+—\s+Theory/.test(l), title: "32. Important Theoretical Interview Questions (50+ Questions)", category: "Part D · Technical Q&A", anchor: "interview-questions" },
  { id: 33, test: (l) => /^33\.\s+Practical Coding Assignments/.test(l), title: "33. Practical Coding Assignments (45 Problems)", category: "Part D · Hands-on Labs", anchor: "coding-assignments" },
  { id: 34, test: (l) => /^34\.\s+Recommended LeetCode Practice/.test(l), title: "34. Curated LeetCode Practice Progression (18 Problems)", category: "Part D · LeetCode Track", anchor: "leetcode-track" },
  { id: 35, test: (l) => /^35\.\s+Module 14\s+—\s+Final Knowledge Check/.test(l), title: "35. Knowledge Assessment & Quiz", category: "Part D · Knowledge Check", anchor: "knowledge-check" },
  { id: 36, test: (l) => /^36\.\s+What You Should Be Able to Do After Module 14/.test(l), title: "36. Learning Outcomes & Engineering Mastery", category: "Milestone · Specialized Mastery", anchor: "learning-outcomes" },
  { id: 37, test: (l) => /^37\.\s+Recommended Learning Sequence/.test(l), title: "37. Recommended Practical Learning Sequence", category: "Milestone · Study Roadmap", anchor: "learning-sequence" },
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
              Specialized Data Structure Topology
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
  { headers: ["Application", "Use of Trie"], rowCount: 9 },
  { headers: ["Operation", "Complexity"], rowCount: 3 },
  { headers: ["Query", "Path exists?", "Complete word?", "Result"], rowCount: 5 },
  { headers: ["Prefix", "Result"], rowCount: 4 },
  { headers: ["Operation", "What it checks"], rowCount: 2 },
  { headers: ["Operation", "Complexity"], rowCount: 4 },
  { headers: ["Operation", "Complexity"], rowCount: 3 },
  { headers: ["Application", "DSU usage"], rowCount: 10 },
  { headers: ["Feature", "Union by Rank", "Union by Size"], rowCount: 5 },
  { headers: ["Operation", "Basic DSU", "Optimized DSU"], rowCount: 5 },
  { headers: ["Application", "Use"], rowCount: 7 },
  { headers: ["Operation", "Complexity"], rowCount: 4 },
  { headers: ["i", "Binary", "Lowest set bit"], rowCount: 8 },
  { headers: ["Operation", "Complexity"], rowCount: 4 },
  { headers: ["Feature", "Fenwick Tree", "Segment Tree"], rowCount: 9 },
  { headers: ["Feature", "Trie", "HashMap", "BST"], rowCount: 5 },
  { headers: ["Feature", "DSU", "BFS / DFS"], rowCount: 6 },
  { headers: ["Feature", "Segment Tree", "Fenwick Tree", "Sparse Table"], rowCount: 8 },
  { headers: ["Data structure / operation", "Time complexity", "Space complexity"], rowCount: 16 },
  { headers: ["Problem", "Difficulty", "Main concept"], rowCount: 3 },
  { headers: ["Problem", "Difficulty", "Main concept"], rowCount: 5 },
  { headers: ["Problem", "Difficulty", "Main concept"], rowCount: 5 },
  { headers: ["Problem", "Difficulty", "Main concept"], rowCount: 5 },
  { headers: ["Stage", "Topics to master"], rowCount: 15 }
];

function isCodeLine(line) {
  const t = line.trim();
  if (t.startsWith('class ') || t.startsWith('public class ') || t.startsWith('import java') ||
      t.startsWith('TrieNode ') || t.startsWith('TrieNode[] ') || t.startsWith('boolean isEndOfWord') ||
      t.startsWith('public void insert(') || t.startsWith('public boolean search(') ||
      t.startsWith('public boolean startsWith(') || t.startsWith('public void delete(') ||
      t.startsWith('private boolean delete(') || t.startsWith('class WordDictionary') ||
      t.startsWith('class AutocompleteTrie') || t.startsWith('public List<String> autocomplete(') ||
      t.startsWith('class DSU') || t.startsWith('int[] parent') || t.startsWith('int find(int x)') ||
      t.startsWith('void union(int a, int b)') || t.startsWith('boolean connected(') ||
      t.startsWith('static boolean hasCycle(') || t.startsWith('class SegmentTree') ||
      t.startsWith('long query( int node') || t.startsWith('void update( int node') ||
      t.startsWith('class FenwickTree') || t.startsWith('void update(int index, long delta)') ||
      t.startsWith('long prefixSum(int index)') || t.startsWith('long rangeSum(int left, int right)') ||
      t.startsWith('class SparseTable') || t.startsWith('public int query(int left, int right)') ||
      t.startsWith('System.out.println') || t.startsWith('System.out.print') ||
      t.startsWith('int index = ch -') || t.startsWith('int i = index + 1;') ||
      t.startsWith('int mid = start +') || t.startsWith('parent[x] = find(parent[x])') ||
      t.startsWith('for (char ch : word.toCharArray())') ||
      t.startsWith('for (int num :') || t.startsWith('int delta = newValue -')) {
    return true;
  }
  return false;
}

function isDiagramLine(line) {
  const t = line.trim();
  if (t.includes('Root / \\ c d') || t.includes('Root | c | a') ||
      t.includes('1 / 2 / 3') || t.includes('1 | 2 | 3') ||
      t.includes('1 | 2 | 3 | 4 | 5') || t.includes('1 / | \\ \\ 2 3 4 5') ||
      t.includes('1 / \\ 2 3') || t.includes('1 ----- 2 | | | | 4 ----- 3') ||
      t.includes('[0,3] = 14') || t.includes('14 / \\ 6 8') ||
      t.includes('23 / \\ 6 17') ||
      (t.includes('BIT[1] ->') && t.includes('BIT[2] ->')) ||
      (t.includes('Length 1') && t.includes('Length 2')) ||
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

    if (line.startsWith('[') && (line.includes('http') || line.includes('.com') || line.includes('.io') || line.includes('.org') || line.includes('.ai') || line.includes('.info') || line.includes('openai.com'))) {
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

    // Check subheadings (e.g. 1.1 What is a Trie?)
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

    // Check Stage sub-headers
    const stageMatch = line.match(/^Stage\s+(\d+)\s+[—-]\s+(.*)/i);
    if (stageMatch) {
      elements.push(`          <h4 className="text-base font-semibold text-stone-800 mt-4 mb-2 text-stone-900 flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono">Stage ${stageMatch[1]}</span>
            <span>${formatInline(stageMatch[2])}</span>
          </h4>`);
      i++;
      continue;
    }

    // Check Case sub-headers
    const caseMatch = line.match(/^Case\s+(\d+)\s+[—-]\s+(.*)/i);
    if (caseMatch) {
      elements.push(`          <h4 className="text-base font-semibold text-stone-800 mt-4 mb-2 text-stone-800 flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded bg-stone-200 text-stone-800 font-mono">Case ${caseMatch[1]}</span>
            <span>${formatInline(caseMatch[2])}</span>
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
    if (line.startsWith('Important:') || line.startsWith('Important limitation:') || line.startsWith('Important distinction:') || line.startsWith('Important observation:') || line.startsWith('Important detail:') || line.startsWith('My recommendation:') || line.startsWith('The central lesson:')) {
      elements.push(`          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-orange-950 text-xs sm:text-sm leading-relaxed flex items-start gap-3">
            <span className="text-orange-600 font-bold shrink-0 mt-0.5">⚠️</span>
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

export const JAVA_SPECIALIZED_DS_SECTIONS = [
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
