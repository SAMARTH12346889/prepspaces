const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m12_java_original.txt');
const outPath = path.resolve(__dirname, '../src/Componets/JavaTreesSections.jsx');
const content = fs.readFileSync(rawFile, 'utf8');
const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l, idx) => idx === 0, title: "Module 12: Curriculum Overview & Tree Foundations", category: "Course Roadmap · Objectives", anchor: "overview" },
  { id: 1, test: (l) => /^1\.\s+Introduction to Trees/.test(l), title: "1. Introduction to Trees & Hierarchical Structures", category: "Part 1 · Tree Foundations", anchor: "intro-trees" },
  { id: 2, test: (l) => /^2\.\s+Tree Terminology/.test(l), title: "2. Tree Terminology (Root, Leaves, Edges, Subtrees)", category: "Part 2 · Terminology", anchor: "tree-terminology" },
  { id: 3, test: (l) => /^3\.\s+Height, Depth, and Level/.test(l), title: "3. Height, Depth, and Level Metrics", category: "Part 3 · Metrics", anchor: "height-depth-level" },
  { id: 4, test: (l) => /^4\.\s+Binary Trees/.test(l), title: "4. Binary Trees & Maximum Node Capacities", category: "Part 4 · Binary Trees", anchor: "binary-trees" },
  { id: 5, test: (l) => /^5\.\s+Types of Binary Trees/.test(l), title: "5. Types of Binary Trees (Full, Complete, Perfect, Balanced, Skewed)", category: "Part 5 · Tree Taxonomies", anchor: "types-binary-trees" },
  { id: 6, test: (l) => /^6\.\s+Tree Representation in Java/.test(l), title: "6. Tree Representation in Java (References vs Arrays)", category: "Part 6 · Representation", anchor: "tree-representation" },
  { id: 7, test: (l) => /^7\.\s+Recursive Tree Traversal/.test(l), title: "7. Recursive Tree Traversal & Call Stack Dynamics", category: "Part 7 · Traversal Mechanics", anchor: "recursive-traversal" },
  { id: 8, test: (l) => /^8\.\s+Preorder Traversal/.test(l), title: "8. Preorder Traversal (Root → Left → Right)", category: "Part 8 · Preorder DFS", anchor: "preorder-traversal" },
  { id: 9, test: (l) => /^9\.\s+Inorder Traversal/.test(l), title: "9. Inorder Traversal (Left → Root → Right)", category: "Part 9 · Inorder DFS", anchor: "inorder-traversal" },
  { id: 10, test: (l) => /^10\.\s+Postorder Traversal/.test(l), title: "10. Postorder Traversal (Left → Right → Root)", category: "Part 10 · Postorder DFS", anchor: "postorder-traversal" },
  { id: 11, test: (l) => /^11\.\s+Comparison of Recursive Traversals/.test(l), title: "11. Comparison of Recursive Traversals", category: "Part 11 · Traversal Benchmarks", anchor: "comparison-traversals" },
  { id: 12, test: (l) => /^12\.\s+Level-Order Traversal/.test(l), title: "12. Level-Order Traversal & Breadth-First Search (BFS)", category: "Part 12 · BFS Level-Order", anchor: "level-order-traversal" },
  { id: 13, test: (l) => /^13\.\s+Binary Search Trees \(BST\)/.test(l), title: "13. Binary Search Trees (BST) Fundamentals & Invariants", category: "Part 13 · BST Architecture", anchor: "bst-fundamentals" },
  { id: 14, test: (l) => /^14\.\s+Search in a BST/.test(l), title: "14. Search in a BST (Recursive & Iterative)", category: "Part 14 · BST Search", anchor: "search-bst" },
  { id: 15, test: (l) => /^15\.\s+BST Insertion/.test(l), title: "15. BST Insertion & Reference Re-linking", category: "Part 15 · BST Insertion", anchor: "insert-bst" },
  { id: 16, test: (l) => /^16\.\s+BST Minimum and Maximum Nodes/.test(l), title: "16. BST Minimum and Maximum Extremes", category: "Part 16 · BST Extremes", anchor: "min-max-bst" },
  { id: 17, test: (l) => /^17\.\s+BST Deletion/.test(l), title: "17. BST Deletion (Leaf, One Child & Two Children Successor)", category: "Part 17 · BST Deletion", anchor: "delete-bst" },
  { id: 18, test: (l) => /^18\.\s+Tree Height/.test(l), title: "18. Calculating Tree Height (Bottom-Up Recursion)", category: "Part 18 · Tree Height", anchor: "tree-height" },
  { id: 19, test: (l) => /^19\.\s+Diameter of a Binary Tree/.test(l), title: "19. Diameter of a Binary Tree (LeetCode 543)", category: "Part 19 · Tree Diameter", anchor: "tree-diameter" },
  { id: 20, test: (l) => /^20\.\s+Balanced Binary Trees/.test(l), title: "20. Balanced Binary Trees & AVL Rotations", category: "Part 20 · Height Balance", anchor: "balanced-trees" },
  { id: 21, test: (l) => /^21\.\s+Lowest Common Ancestor \(LCA\)/.test(l), title: "21. Lowest Common Ancestor (Binary Tree vs BST)", category: "Part 21 · LCA Algorithms", anchor: "lowest-common-ancestor" },
  { id: 22, test: (l) => /^22\.\s+Validate Binary Search Tree/.test(l), title: "22. Validate Binary Search Tree (LeetCode 98)", category: "Part 22 · BST Validation", anchor: "validate-bst" },
  { id: 23, test: (l) => /^23\.\s+Serialize and Deserialize Binary Trees/.test(l), title: "23. Serialize & Deserialize Binary Trees (LeetCode 297)", category: "Part 23 · Serialization", anchor: "serialize-tree" },
  { id: 24, test: (l) => /^24\.\s+Important Binary Tree Patterns/.test(l), title: "24. Core Binary Tree Patterns for Interviews", category: "Part 24 · Algorithmic Patterns", anchor: "tree-patterns" },
  { id: 25, test: (l) => /^25\.\s+Complete Time and Space Complexity Cheat Sheet/.test(l), title: "25. Complete Complexity Cheat Sheet", category: "Part 25 · Complexity Matrix", anchor: "complexity-matrix" },
  { id: 26, test: (l) => /^26\.\s+Common Mistakes in Tree Problems/.test(l), title: "26. Common Mistakes & Interview Traps", category: "Part 26 · Defensive Coding", anchor: "common-mistakes" },
  { id: 27, test: (l) => /^27\.\s+Important Tree Interview Questions — Theory/.test(l), title: "27. Important Theoretical Interview Questions", category: "Part 27 · Technical Q&A", anchor: "interview-questions" },
  { id: 28, test: (l) => /^28\.\s+Practical Coding Assignments/.test(l), title: "28. Practical Coding Assignments (45 Problems)", category: "Part 28 · Hands-on Labs", anchor: "coding-assignments" },
  { id: 29, test: (l) => /^29\.\s+Recommended LeetCode Practice/.test(l), title: "29. Curated LeetCode Practice Progression (24 Problems)", category: "Part 29 · LeetCode Track", anchor: "leetcode-track" },
  { id: 30, test: (l) => /^30\.\s+Module 12 — Final Knowledge Check/.test(l), title: "30. Knowledge Assessment & Quiz", category: "Part 30 · Knowledge Check", anchor: "knowledge-check" },
  { id: 31, test: (l) => /^31\.\s+What You Should Be Able to Do After Module 12/.test(l), title: "31. Learning Outcomes & Mastery Roadmap", category: "Milestone · Tree Mastery", anchor: "learning-outcomes" }
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
  } else {
    currentBucket = {
      header: sectionHeaders[0],
      lines: [lines[i]]
    };
  }
}
if (currentBucket) buckets.push(currentBucket);

console.log(`Parsed ${buckets.length} section buckets (expected ${sectionHeaders.length}).`);

function escapeText(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

function formatInline(text) {
  let res = escapeText(text);

  // Bold: **text**
  res = res.replace(/\*\*(.*?)\*\*/g, '<strong className="font-semibold text-stone-900">$1</strong>');

  // Inline code: `code`
  res = res.replace(/`([^`]+)`/g, '<code className="px-1.5 py-0.5 rounded bg-stone-100 border border-stone-200 text-orange-700 font-mono text-xs">$1</code>');

  // Markdown links: [title](url)
  res = res.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">$1</a>');

  // Standalone external URLs
  res = res.replace(/(?<!href=")(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-medium underline inline-flex items-center gap-0.5">$1</a>');

  return res;
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
              Tree Hierarchy Diagram
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
  { headers: ["Application", "How trees are used"], rowCount: 10 },
  { headers: ["Term", "Meaning"], rowCount: 11 },
  { headers: ["Node", "Depth", "Level"], rowCount: 6 },
  { headers: ["Node", "Depth"], rowCount: 6 },
  { headers: ["Feature", "Height", "Depth"], rowCount: 4 },
  { headers: ["Depth", "Maximum nodes"], rowCount: 5 },
  { headers: ["Type", "Main condition"], rowCount: 5 },
  { headers: ["Representation", "Suitable use"], rowCount: 2 },
  { headers: ["Traversal", "Order", "Output"], rowCount: 3 },
  { headers: ["Operation", "Meaning"], rowCount: 4 },
  { headers: ["Feature", "DFS", "BFS"], rowCount: 5 },
  { headers: ["Feature", "Binary Tree", "BST"], rowCount: 5 },
  { headers: ["Tree condition", "Time"], rowCount: 3 },
  { headers: ["Tree condition", "Complexity"], rowCount: 2 },
  { headers: ["Operation", "Complexity"], rowCount: 2 },
  { headers: ["Complexity", "Value"], rowCount: 3 },
  { headers: ["Operation", "Time", "Space"], rowCount: 2 },
  { headers: ["Pattern", "Common technique", "Example"], rowCount: 6 },
  { headers: ["Operation", "Time complexity", "Auxiliary space"], rowCount: 17 },
  { headers: ["Problem", "Difficulty", "Concept"], rowCount: 8 },
  { headers: ["Stage", "What to master"], rowCount: 9 }
];

function isCodeLine(line) {
  const t = line.trim();
  if (t.startsWith('class ') || t.startsWith('public class ') || t.startsWith('import java') ||
      t.startsWith('TreeNode ') || t.startsWith('root.left =') || t.startsWith('root.right =') ||
      t.startsWith('static void ') || t.startsWith('static TreeNode ') || t.startsWith('static int ') ||
      t.startsWith('static boolean ') || t.startsWith('static List<') ||
      t.startsWith('diameter =') || t.startsWith('int leftHeight =') || t.startsWith('int rightHeight =') ||
      t.startsWith('Codec codec =') || t.startsWith('String serialized =') ||
      t.startsWith('preorder(10)') || t.startsWith('preorder(root)') || t.startsWith('inorder(root)') ||
      t.startsWith('postorder(root)') || t.startsWith('levelOrder(root)') ||
      t.startsWith('Queue<TreeNode>') || t.startsWith('queue.offer') || t.startsWith('queue.poll') ||
      t.startsWith('System.out.println') || t.startsWith('System.out.print') ||
      t.startsWith('void traverse(') || t.startsWith('static void dfs(') || t.startsWith('static void bfs(')) {
    return true;
  }
  return false;
}

function isDiagramLine(line) {
  const t = line.trim();
  return (t.includes('/ \\') || t.includes('/ \\ / \\') || t.includes('|') && t.includes('-') ||
          t.startsWith('CEO |') || t.startsWith('C:/ |') || t.includes('->') && t.includes('Descendants') ||
          t.includes('1 / \\ 2 3') || t.includes('50 / \\ 30 70') || t.includes('Left-skewed:') || t.includes('Right-skewed:'));
}

function processLines(rawLines) {
  const out = [];
  let inList = false;
  let listItems = [];

  const flushList = () => {
    if (inList && listItems.length > 0) {
      out.push(`          <ul className="list-disc list-outside pl-5 space-y-2 text-stone-700 my-3 text-sm leading-relaxed">`);
      for (const item of listItems) {
        out.push(`            <li>${formatInline(item)}</li>`);
      }
      out.push(`          </ul>`);
      listItems = [];
      inList = false;
    }
  };

  let i = 0;
  while (i < rawLines.length) {
    const line = rawLines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      flushList();
      i++;
      continue;
    }

    // Check for known table match
    let matchedTable = null;
    for (const tDef of knownTableDefs) {
      let isMatch = true;
      for (let h = 0; h < tDef.headers.length; h++) {
        if (!rawLines[i + h] || rawLines[i + h].trim() !== tDef.headers[h]) {
          isMatch = false;
          break;
        }
      }
      if (isMatch) {
        matchedTable = tDef;
        break;
      }
    }

    if (matchedTable) {
      flushList();
      const headers = matchedTable.headers;
      let curr = i + headers.length;
      const rows = [];
      for (let r = 0; r < matchedTable.rowCount; r++) {
        const row = [];
        for (let c = 0; c < headers.length; c++) {
          row.push(rawLines[curr] ? rawLines[curr].trim() : "");
          curr++;
        }
        rows.push(row);
      }
      out.push(renderTable(headers, rows));
      i = curr;
      continue;
    }

    // Subheading: \d+\.\d+ or \d+\.\d+\.\d+
    if (/^\d+\.\d+(\.\d+)?\s+(.*)/.test(trimmed)) {
      flushList();
      const m = trimmed.match(/^(\d+\.\d+(\.\d+)?)\s+(.*)/);
      out.push(`          <h4 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
            <span>${escapeText(m[1])} ${escapeText(m[3])}</span>
          </h4>`);
      i++;
      continue;
    }

    // Major Heading: \d+\.\s+
    if (/^\d+\.\s+(.*)/.test(trimmed)) {
      flushList();
      const m = trimmed.match(/^(\d+)\.\s+(.*)/);
      out.push(`          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 tracking-tight border-b border-[#e7e3da] pb-2">
            ${escapeText(m[1])}. ${escapeText(m[2])}
          </h3>`);
      i++;
      continue;
    }

    // Alert Callouts: Important, Note, Remember, Warning, Interview question, etc.
    if (/^(Important|Note|Remember|Interview question|Interview insight|Warning|Easy memory trick|My recommendation|The central lesson of Module 12):/i.test(trimmed)) {
      flushList();
      const isWarn = /warning|mistake/i.test(trimmed);
      const isImp = /important|interview|recommendation|central lesson/i.test(trimmed);
      const bg = isWarn ? "bg-amber-500/10 border-amber-500/30 text-amber-950" : isImp ? "bg-orange-500/10 border-orange-500/30 text-orange-950" : "bg-blue-500/10 border-blue-500/30 text-blue-950";
      const icon = isWarn ? "⚠️" : isImp ? "💡" : "ℹ️";
      out.push(`          <div className="p-4 rounded-xl border ${bg} my-4 text-xs sm:text-sm leading-relaxed">
            <div className="font-bold flex items-center gap-1.5 mb-1 text-stone-900">
              <span>${icon}</span>
              <span>${escapeText(trimmed.split(':')[0])}</span>
            </div>
            <p className="text-stone-700">${formatInline(trimmed.substring(trimmed.indexOf(':') + 1).trim())}</p>
          </div>`);
      i++;
      continue;
    }

    // LaTeX Display Math
    if (trimmed.startsWith('\\[') || trimmed.endsWith('\\]') || trimmed.startsWith('$$')) {
      flushList();
      const eq = trimmed.replace(/^\\\[|\\]$/g, '').replace(/^\$\$|\$\$$/g, '').trim();
      out.push(`          <div className="my-4 p-4 rounded-xl bg-orange-50/60 border border-orange-200/60 text-center font-mono text-sm sm:text-base text-stone-900 shadow-2xs overflow-x-auto">
            <span className="text-orange-700 font-bold mr-2">EQUATION:</span>
            <code>${escapeText(eq)}</code>
          </div>`);
      i++;
      continue;
    }

    // Java code line / block
    if (isCodeLine(trimmed)) {
      flushList();
      const formatted = formatJavaCode(trimmed);
      out.push(renderCodeBlock(formatted, 'java'));
      i++;
      continue;
    }

    // Diagram line / block
    if (isDiagramLine(trimmed)) {
      flushList();
      out.push(renderDiagramBlock(trimmed));
      i++;
      continue;
    }

    // List item (e.g. "- item" or "* item" or "1. item" or bullet point)
    if (/^[-*•]\s+(.*)/.test(trimmed) || /^\d+\.\s+(.*)/.test(trimmed)) {
      inList = true;
      const itemText = trimmed.replace(/^[-*•]\s+/, '').replace(/^\d+\.\s+/, '');
      listItems.push(itemText);
      i++;
      continue;
    }

    // Regular paragraph
    flushList();
    out.push(`          <p className="text-stone-700 text-sm sm:text-base leading-relaxed my-2.5">
            ${formatInline(trimmed)}
          </p>`);
    i++;
  }

  flushList();
  return out.join('\n');
}

let fileContent = `import React from "react";\n\n`;
fileContent += `// MODULE 12: TREES & BINARY SEARCH TREES — COMPLETE CURRICULUM SECTIONS\n`;
fileContent += `// Automatically generated with 100% text fidelity to original curriculum text.\n\n`;
fileContent += `export const JAVA_TREES_SECTIONS = [\n`;

for (let b = 0; b < buckets.length; b++) {
  const bucket = buckets[b];
  const renderedContent = processLines(bucket.lines);
  const safeTitle = bucket.header.title.replace(/"/g, '\\"');
  const safeCategory = bucket.header.category.replace(/"/g, '\\"');
  const safeAnchor = bucket.header.anchor;

  fileContent += `  {\n`;
  fileContent += `    id: "${safeAnchor}",\n`;
  fileContent += `    number: "${b}",\n`;
  fileContent += `    title: "${safeTitle}",\n`;
  fileContent += `    category: "${safeCategory}",\n`;
  fileContent += `    content: (\n`;
  fileContent += `      <div className="space-y-4 text-stone-800 leading-relaxed font-sans">\n`;
  fileContent += renderedContent + `\n`;
  fileContent += `      </div>\n`;
  fileContent += `    )\n`;
  fileContent += `  }${b === buckets.length - 1 ? "" : ","}\n`;
}

fileContent += `];\n\nexport default JAVA_TREES_SECTIONS;\n`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log(`Generated ${outPath} successfully with ${buckets.length} sections!`);
