// projectx/scripts/generate_m8_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m8_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 8: Data Lakes and Lakehouse Architecture Overview', category: 'Course Roadmap', test: (l) => l.startsWith('Module 8 — Data Lakes') },
  { id: 1, title: '1. Understanding Data Lakes', category: 'Part 1 · Data Lake Foundations', test: (l) => l.startsWith('1. Understanding Data Lakes') },
  { id: 2, title: '2. Data Lake Architecture', category: 'Part 1 · Multi-Tier Lake Architecture', test: (l) => l.startsWith('2. Data Lake Architecture') },
  { id: 3, title: '3. Data Lake vs Data Warehouse', category: 'Part 1 · Lake vs Warehouse Paradigms', test: (l) => l.startsWith('3. Data Lake vs Data Warehouse') },
  { id: 4, title: '4. Object Storage Fundamentals', category: 'Part 1 · Cloud Object Storage (S3/ADLS/GCS)', test: (l) => l.startsWith('4. Object Storage Fundamentals') },
  { id: 5, title: '5. Distributed File Storage', category: 'Part 1 · HDFS vs Cloud Object Stores', test: (l) => l.startsWith('5. Distributed File Storage') },
  { id: 6, title: '6. Raw, Processed, and Curated Data Zones', category: 'Part 2 · Storage Zones', test: (l) => l.startsWith('6. Raw, Processed, and Curated Data Zones') },
  { id: 7, title: '7. Medallion Architecture', category: 'Part 2 · Bronze, Silver & Gold Engineering', test: (l) => l.startsWith('7. Medallion Architecture') },
  { id: 8, title: '8. Data Lake Storage Formats', category: 'Part 2 · Parquet, Avro, ORC & Columnar Internals', test: (l) => l.startsWith('8. Data Lake Storage Formats') },
  { id: 9, title: '9. Apache Iceberg Architecture', category: 'Part 3 · Table Formats: Apache Iceberg', test: (l) => l.startsWith('9. Apache Iceberg Architecture') },
  { id: 10, title: '10. Delta Lake Architecture', category: 'Part 3 · Table Formats: Delta Lake', test: (l) => l.startsWith('10. Delta Lake Architecture') },
  { id: 11, title: '11. Apache Hudi Architecture', category: 'Part 3 · Table Formats: Apache Hudi (CoW vs MoR)', test: (l) => l.startsWith('11. Apache Hudi Architecture') },
  { id: 12, title: '12. Open Table Formats', category: 'Part 3 · Triad Comparison: Delta vs Iceberg vs Hudi', test: (l) => l.startsWith('12. Open Table Formats') },
  { id: 13, title: '13. ACID Transactions in Data Lakes', category: 'Part 4 · Transactional Mechanics', test: (l) => l.startsWith('13. ACID Transactions in Data Lakes') },
  { id: 14, title: '14. Snapshot Isolation', category: 'Part 4 · MVCC & Snapshot Isolation', test: (l) => l.startsWith('14. Snapshot Isolation') },
  { id: 15, title: '15. Time Travel and Rollback', category: 'Part 4 · Time Travel & Version Auditing', test: (l) => l.startsWith('15. Time Travel and Rollback') },
  { id: 16, title: '16. Schema Evolution', category: 'Part 4 · Schema Evolution & Type Safety', test: (l) => l.startsWith('16. Schema Evolution') },
  { id: 17, title: '17. Partition Evolution and Partitioning Strategy', category: 'Part 4 · Partition Pruning & Evolution', test: (l) => l.startsWith('17. Partition Evolution and Partitioning Strategy') },
  { id: 18, title: '18. Metadata Catalogs', category: 'Part 5 · Catalogs: AWS Glue & Unity Catalog', test: (l) => l.startsWith('18. Metadata Catalogs') },
  { id: 19, title: '19. Small File Problems and Compaction', category: 'Part 5 · Compaction & File Sizing', test: (l) => l.startsWith('19. Small File Problems and Compaction') },
  { id: 20, title: '20. Lakehouse Architecture', category: 'Part 6 · Unified Lakehouse Architecture', test: (l) => l.startsWith('20. Lakehouse Architecture') },
  { id: 21, title: '21. Data Lake Governance', category: 'Part 6 · Governance, PII Masking & Lineage', test: (l) => l.startsWith('21. Data Lake Governance') },
  { id: 22, title: '22. Complete Practical Project — Build an E-commerce Lakehouse', category: 'Part 7 · Capstone Lakehouse Project', test: (l) => l.startsWith('22. Complete Practical Project') },
  { id: 23, title: '23. Important Industry Concepts to Remember', category: 'Part 8 · Architectural Synthesis', test: (l) => l.startsWith('23. Important Industry Concepts') },
  { id: 24, title: '24. Common Mistakes Data Engineers Should Avoid', category: 'Part 8 · Production Anti-Patterns', test: (l) => l.startsWith('24. Common Mistakes Data Engineers Should Avoid') },
  { id: 25, title: '25. Module Assessment — Check Your Understanding', category: 'Review · Knowledge Verification', test: (l) => l.startsWith('25. Module Assessment') },
  { id: 26, title: '26. Recommended Learning Resources', category: 'Review · Official Standards & Docs', test: (l) => l.startsWith('26. Recommended Learning Resources') },
  { id: 27, title: '27. Final Understanding: The Lakehouse Paradigm', category: 'Roadmap · Curriculum Alignment', test: (l) => l.startsWith('27. Final Understanding') }
];

const buckets = [];
let currentBucket = null;
let currentHeaderIdx = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  const matchIdx = sectionHeaders.findIndex((sh, idx) => idx > currentHeaderIdx && sh.test(line));
  
  if (matchIdx !== -1) {
    if (currentBucket) {
      buckets.push(currentBucket);
    }
    currentHeaderIdx = matchIdx;
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

function isCodeOrStructure(line) {
  const trimmed = line.trim();
  return /^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|MERGE|EXPLAIN|COPY|GRANT|REVOKE|WITH|RESTORE|DESCRIBE|OPTIMIZE|VACUUM)\b/i.test(trimmed) ||
         /^(FROM|WHERE|GROUP BY|ORDER BY|HAVING|LIMIT|CLUSTER BY|PARTITION BY|PRIMARY KEY|ENGINE|SETTINGS|ORGANIZATION|SET|USING|WHEN)\b/i.test(trimmed) ||
         /^(import|from|def|class|with|for|if|elif|else|print|return|raise|data\s*=|columns\s*=|df\s*=|cleaned\s*=|valid\s*=|customers\s*=|daily_sales\s*=)\b/.test(trimmed) ||
         /^(pip\s+install|docker\s+run|clickhouse-client|psql|snowsql|bq\s+query|spark-submit)\b/.test(trimmed) ||
         /^(ecommerce-lakehouse\/|company-data-lake\/|bronze\/|silver\/|gold\/|data-lake\/|transactions\/|_delta_log\/|├──|└──|│)/.test(trimmed) ||
         /^(s3:\/\/|wasbs:\/\/|gs:\/\/|hdfs:\/\/)/.test(trimmed) ||
         (trimmed.startsWith('{') && trimmed.endsWith('}') && trimmed.length > 20) ||
         (trimmed.startsWith('[') && trimmed.endsWith(']') && trimmed.length > 20 && !trimmed.includes('('));
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

    if (isCodeOrStructure(line)) {
      codeBuffer.push(line);
      inCode = true;
      continue;
    }

    if (inCode) {
      // If code continues
      if (line.endsWith(':') || line.endsWith(',') || line.endsWith('}') || line.endsWith(')') || line.endsWith(';') ||
          line.startsWith('}') || line.startsWith(']') || line.startsWith(')') ||
          line.startsWith('│') || line.startsWith('├──') || line.startsWith('└──') ||
          rawLines[i].startsWith('    ') || rawLines[i].startsWith('\t')) {
        codeBuffer.push(line);
        continue;
      } else {
        flushCode();
      }
    }

    if (/^(Important:|Note:|Remember:|Warning:|Tip:|Architecture Insight:|Important distinction:)/i.test(line)) {
      flushCode();
      output.push('          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">\n' +
                  '            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>\n' +
                  '            ' + escapeJSX(line.replace(/^(Important:|Note:|Remember:|Warning:|Tip:|Architecture Insight:|Important distinction:)\s*/i, '')) + '\n' +
                  '          </div>');
      continue;
    }

    // Major Subheading
    if (/^(\d+\.\d+\s+[A-Z]|[A-Z]\.\s+|\d+\.\s+[A-Z]|Step\s+\d+\s+—|Step\s+\d+:|Problem\s+\d+\s+—|Project:|Scenario:|Why\s+|What\s+is\s+|How\s+|Common\s+|Advantages|Disadvantages|Trade-offs|Examples\s+|Key\s+|Types\s+of\s+|Which\s+|Comparison)/i.test(line) ||
        (line.length < 55 && !line.endsWith('.') && !line.endsWith(',') && !line.includes(':'))) {
      flushCode();
      output.push('          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">\n' +
                  '            <span className="w-2 h-2 rounded-full bg-[#f97316]" />\n' +
                  '            <span>' + escapeJSX(line) + '</span>\n' +
                  '          </h3>');
      continue;
    }

    // Bullet-like single item
    if (line.endsWith('.') && line.length < 90 && !line.includes('. ') && !line.startsWith('Suppose') && !line.startsWith('Imagine') && !line.startsWith('For example') && !line.startsWith('Consider')) {
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
'  Filter,\n' +
'  Globe,\n' +
'  Key,\n' +
'  Binary,\n' +
'  FileSpreadsheet,\n' +
'  Code2,\n' +
'  Boxes,\n' +
'  BarChart3\n' +
'} from "lucide-react";\n\n' +
'export default function DataEngineeringLakehouseSections() {\n' +
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

const targetFile = path.resolve(__dirname, '../src/Componets/DataEngineeringLakehouseSections.jsx');
fs.writeFileSync(targetFile, jsx, 'utf8');
console.log('Successfully written DataEngineeringLakehouseSections.jsx! Size:', jsx.length, 'bytes');
