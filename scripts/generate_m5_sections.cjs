// projectx/scripts/generate_m5_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m5_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l) => l.startsWith('Module 5 — Database Internals and Performance Engineering'), title: "Module 5: Database Internals & Performance Engineering Specification", category: "Executive Summary" },
  { id: 1, test: (l) => l.startsWith('1. Database Management System Architecture'), title: "1. Database Management System Architecture", category: "Part 1 · Database Architecture" },
  { id: 2, test: (l) => l.startsWith('2. Database Storage Engines'), title: "2. Database Storage Engines", category: "Part 1 · Storage Engines" },
  { id: 3, test: (l) => l.startsWith('3. Pages, Blocks, and Records'), title: "3. Pages, Blocks, and Records", category: "Part 1 · Storage Internals" },
  { id: 4, test: (l) => l.startsWith('4. Buffer Pools and Memory Management'), title: "4. Buffer Pools and Memory Management", category: "Part 1 · Memory Management" },
  { id: 5, test: (l) => l.startsWith('5. Disk-Based Storage Architecture'), title: "5. Disk-Based Storage Architecture", category: "Part 1 · Storage Architecture" },
  { id: 6, test: (l) => l.startsWith('6. Database Indexing Internals'), title: "6. Database Indexing Internals", category: "Part 2 · Indexing Fundamentals" },
  { id: 7, test: (l) => l.startsWith('7. B-Tree and B+ Tree Indexes'), title: "7. B-Tree and B+ Tree Indexes", category: "Part 2 · Tree Indexes" },
  { id: 8, test: (l) => l.startsWith('8. Hash Indexing'), title: "8. Hash Indexing", category: "Part 2 · Hash Indexes" },
  { id: 9, test: (l) => l.startsWith('9. LSM Tree Architecture'), title: "9. LSM Tree Architecture", category: "Part 2 · Log-Structured Storage" },
  { id: 10, test: (l) => l.startsWith('10. Bloom Filters'), title: "10. Bloom Filters", category: "Part 2 · Probabilistic Filtering" },
  { id: 11, test: (l) => l.startsWith('11. Query Parsing and Planning'), title: "11. Query Parsing and Planning", category: "Part 3 · Query Processing" },
  { id: 12, test: (l) => l.startsWith('12. Query Optimization Techniques'), title: "12. Query Optimization Techniques", category: "Part 3 · Query Optimization" },
  { id: 13, test: (l) => l.startsWith('13. Query Execution Engines'), title: "13. Query Execution Engines", category: "Part 3 · Execution Engines" },
  { id: 14, test: (l) => l.startsWith('14. Join Algorithms'), title: "14. Join Algorithms", category: "Part 3 · Join Mechanics" },
  { id: 15, test: (l) => l.startsWith('15. Transaction Management'), title: "15. Transaction Management", category: "Part 4 · Transaction Architecture" },
  { id: 16, test: (l) => l.startsWith('16. Concurrency Control'), title: "16. Concurrency Control", category: "Part 4 · Concurrency Control" },
  { id: 17, test: (l) => l.startsWith('17. Locking and Multi-Version Concurrency Control (MVCC)'), title: "17. Locking and Multi-Version Concurrency Control (MVCC)", category: "Part 4 · MVCC & Locking" },
  { id: 18, test: (l) => l.startsWith('18. Write-Ahead Logging (WAL)'), title: "18. Write-Ahead Logging (WAL)", category: "Part 4 · Logging & Durability" },
  { id: 19, test: (l) => l.startsWith('19. Database Recovery Mechanisms'), title: "19. Database Recovery Mechanisms", category: "Part 5 · Recovery Architecture" },
  { id: 20, test: (l) => l.startsWith('20. Database Partitioning and Sharding'), title: "20. Database Partitioning and Sharding", category: "Part 5 · Partitioning & Sharding" },
  { id: 21, test: (l) => l.startsWith('21. Database Replication'), title: "21. Database Replication", category: "Part 5 · High Availability & Replication" },
  { id: 22, test: (l) => l.startsWith('22. Database Performance Tuning'), title: "22. Database Performance Tuning", category: "Part 6 · Performance Engineering" },
  { id: 23, test: (l) => l.startsWith('Practical Lab — Database Internals and Performance Engineering'), title: "Practical Lab — High-Performance E-Commerce Database", category: "Part 6 · Hands-on Labs" },
  { id: 24, test: (l) => l.startsWith('Module 5 — Learning Outcomes'), title: "Module 5 — Learning Outcomes", category: "Review · Learning Outcomes" },
  { id: 25, test: (l) => l.startsWith('Recommended practical assignments'), title: "Recommended Practical Assignments (12 Tasks)", category: "Review · Practical Assignments" },
  { id: 26, test: (l) => l.startsWith('Recommended learning resources'), title: "Recommended Learning Resources & Textbooks", category: "Review · Learning Resources" },
  { id: 27, test: (l) => l.startsWith('How Module 5 fits into the Data Engineering course'), title: "Course Progression & Next Steps", category: "Roadmap · Curriculum Alignment" }
];

const buckets = [];
let currentBucket = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  const matchIdx = sectionHeaders.findIndex(sh => sh.test(line));
  if (matchIdx !== -1) {
    if (currentBucket) {
      buckets.push(currentBucket);
    }
    currentBucket = {
      header: sectionHeaders[matchIdx],
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

function escapeJSX(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;');
}

function renderCodeBlock(code) {
  const sanitized = code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  return '          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">\n' +
         '            <pre className="overflow-x-auto [scrollbar-width:thin]">\n' +
         '              <code>{`' + sanitized + '`}</code>\n' +
         '            </pre>\n' +
         '          </div>';
}

function renderMathBlock(formula) {
  const cleaned = formula.replace(/^\\\[\s*/, '').replace(/\s*\\\]$/, '').trim();
  const escaped = cleaned.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
  return '          <div className="p-3.5 my-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 font-mono text-xs sm:text-sm flex items-center justify-center text-center font-bold shadow-2xs">\n' +
         '            <span>{`' + escaped + '`}</span>\n' +
         '          </div>';
}

function renderLinkCard(text, url) {
  return '          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">\n' +
         '            <span className="font-semibold text-stone-800 truncate">' + escapeJSX(text) + '</span>\n' +
         '            <a href="' + url + '" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">\n' +
         '              <span>Reference Link</span>\n' +
         '              <ExternalLink size={12} />\n' +
         '            </a>\n' +
         '          </div>';
}

function isSqlOrCommand(line) {
  const trimmed = line.trim();
  return /^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|EXPLAIN|ANALYZE|VACUUM|SHOW|SET|GRANT|REVOKE|WITH)\b/i.test(trimmed) ||
         /^(psql|pg_dump|pgbench|docker|pip|python)\b/i.test(trimmed) ||
         /^(shared_buffers|work_mem|effective_cache_size|maintenance_work_mem)\s*=/i.test(trimmed);
}

function isMathFormula(line) {
  const trimmed = line.trim();
  return (trimmed.startsWith('\\[') && trimmed.endsWith('\\]')) || trimmed.startsWith('\\[') || trimmed.endsWith('\\]') || /\\frac\{/.test(trimmed);
}

function isMarkdownLink(line) {
  const trimmed = line.trim();
  const m = trimmed.match(/^\[(.*?)\]\((https?:\/\/.*?)\)$/);
  return m ? { text: m[1], url: m[2] } : null;
}

function processLinesToJSX(rawLines) {
  const output = [];
  let inCode = false;
  let codeBuffer = [];

  const flushCode = () => {
    if (codeBuffer.length > 0) {
      output.push(renderCodeBlock(codeBuffer.join('\n')));
      codeBuffer = [];
      inCode = false;
    }
  };

  for (let i = 0; i < rawLines.length; i++) {
    const line = rawLines[i].trim();
    if (!line) {
      flushCode();
      continue;
    }

    if (/^Part\s+\d+\s+—/.test(line)) {
      flushCode();
      output.push('          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">\n' +
                  '            ' + escapeJSX(line) + '\n' +
                  '          </div>');
      continue;
    }

    const linkObj = isMarkdownLink(line);
    if (linkObj) {
      flushCode();
      output.push(renderLinkCard(linkObj.text, linkObj.url));
      continue;
    }

    if (isMathFormula(line)) {
      flushCode();
      output.push(renderMathBlock(line));
      continue;
    }

    if (isSqlOrCommand(line)) {
      codeBuffer.push(line);
      inCode = true;
      continue;
    }

    if (inCode) {
      if (line.endsWith(';') || line.startsWith('FROM') || line.startsWith('WHERE') || line.startsWith('JOIN') || line.startsWith('GROUP BY') || line.startsWith('ORDER BY')) {
        codeBuffer.push(line);
        continue;
      } else {
        flushCode();
      }
    }

    if (/^(Important:|Note:|Remember:)/i.test(line)) {
      flushCode();
      output.push('          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">\n' +
                  '            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>\n' +
                  '            ' + escapeJSX(line.replace(/^(Important:|Note:|Remember:)\s*/i, '')) + '\n' +
                  '          </div>');
      continue;
    }

    // Major Subheading
    if (/^([A-Z]\.\s+|Lab\s+\d+\s+—|Project:|Scenario:|Why\s+|What\s+is\s+|How\s+|Common\s+|Advantages|Disadvantages|Trade-offs|Examples\s+|Key\s+|Scenario\s+\d+:)/i.test(line) ||
        (line.length < 50 && !line.endsWith('.') && !line.endsWith(',') && !line.includes(':'))) {
      flushCode();
      output.push('          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">\n' +
                  '            <span className="w-2 h-2 rounded-full bg-[#f97316]" />\n' +
                  '            <span>' + escapeJSX(line) + '</span>\n' +
                  '          </h3>');
      continue;
    }

    // Bullet-like single item
    if (line.endsWith('.') && line.length < 90 && !line.includes('. ') && !line.startsWith('Suppose') && !line.startsWith('Imagine') && !line.startsWith('For example')) {
      flushCode();
      output.push('          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">\n' +
                  '            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />\n' +
                  '            <span>' + escapeJSX(line) + '</span>\n' +
                  '          </div>');
      continue;
    }

    // Normal paragraph
    flushCode();
    output.push('          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">' + escapeJSX(line) + '</p>');
  }

  flushCode();
  return output.join('\n');
}

let jsx = 'import React from "react";\n' +
'import {\n' +
'  Database,\n' +
'  Table,\n' +
'  Layers,\n' +
'  CheckCircle2,\n' +
'  ArrowRight,\n' +
'  ExternalLink,\n' +
'  Cpu,\n' +
'  Server,\n' +
'  Zap,\n' +
'  Activity,\n' +
'  Workflow,\n' +
'  HardDrive,\n' +
'  GitBranch,\n' +
'  ShieldCheck,\n' +
'  RefreshCw,\n' +
'  Clock,\n' +
'  Terminal,\n' +
'  FileCode,\n' +
'  Sliders,\n' +
'  Filter\n' +
'} from "lucide-react";\n\n' +
'export default function DataEngineeringInternalsSections() {\n' +
'  return (\n' +
'    <div className="space-y-10">\n';

buckets.forEach((bucket, idx) => {
  const { header, lines: sectionLines } = bucket;
  const sectionId = idx === 0 ? "overview" : ('section-' + idx);
  const badgeLabel = idx === 0 ? "Roadmap" : ('Section ' + idx);

  jsx += '      {/* SECTION ' + idx + ': ' + header.title + ' */}\n';
  jsx += '      <section id="' + sectionId + '" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">\n';
  jsx += '        <div className="flex items-center gap-2">\n';
  jsx += '          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">\n';
  jsx += '            ' + badgeLabel + '\n';
  jsx += '          </span>\n';
  jsx += '          <span className="text-xs font-mono text-stone-500">' + header.category + '</span>\n';
  jsx += '        </div>\n';
  jsx += '        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">\n';
  jsx += '          ' + header.title + '\n';
  jsx += '        </h2>\n';
  jsx += '        <div className="space-y-3">\n';
  jsx += processLinesToJSX(sectionLines) + '\n';
  jsx += '        </div>\n';
  jsx += '      </section>\n\n';
});

jsx += '    </div>\n' +
'  );\n' +
'}\n';

const targetFile = path.resolve(__dirname, '../src/Componets/DataEngineeringInternalsSections.jsx');
fs.writeFileSync(targetFile, jsx, 'utf8');
console.log('Successfully written DataEngineeringInternalsSections.jsx! Size:', jsx.length, 'bytes');
