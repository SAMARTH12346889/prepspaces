// projectx/scripts/generate_m7_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m7_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 7: Data Warehousing and Analytical Systems Overview', category: 'Course Roadmap', test: (l) => l.startsWith('Module 7 — Data Warehousing') },
  { id: 1, title: '1. Introduction to Data Warehousing', category: 'Part 1 · DW Foundations', test: (l) => l.startsWith('1. Introduction to Data Warehousing') },
  { id: 2, title: '2. Evolution of Data Warehouses', category: 'Part 1 · History & Evolution', test: (l) => l.startsWith('2. Evolution of Data Warehouses') },
  { id: 3, title: '3. Operational vs Analytical Databases', category: 'Part 1 · OLTP vs OLAP', test: (l) => l.startsWith('3. Operational vs Analytical Databases') },
  { id: 4, title: '4. Data Warehouse Architecture', category: 'Part 1 · Multi-Tier Architecture', test: (l) => l.startsWith('4. Data Warehouse Architecture') },
  { id: 5, title: '5. Enterprise Data Warehouse (EDW)', category: 'Part 1 · Enterprise Architecture', test: (l) => l.startsWith('5. Enterprise Data Warehouse (EDW)') },
  { id: 6, title: '6. Centralized and Distributed Warehouses', category: 'Part 1 · Centralized vs Distributed', test: (l) => l.startsWith('6. Centralized and Distributed Warehouses') },
  { id: 7, title: '7. OLAP Architecture', category: 'Part 2 · OLAP Systems', test: (l) => l.startsWith('7. OLAP Architecture') },
  { id: 8, title: '8. Multidimensional Data Modeling', category: 'Part 2 · Multidimensional Modeling', test: (l) => l.startsWith('8. Multidimensional Data Modeling') },
  { id: 9, title: '9. Fact and Dimension Tables', category: 'Part 2 · Fact & Dimension Design', test: (l) => l.startsWith('9. Fact and Dimension Tables') },
  { id: 10, title: '10. Star and Snowflake Schemas', category: 'Part 2 · Dimensional Schemas', test: (l) => l.startsWith('10. Star and Snowflake Schemas') },
  { id: 11, title: '11. Data Marts', category: 'Part 2 · Data Marts', test: (l) => l.startsWith('11. Data Marts') },
  { id: 12, title: '12. Enterprise Reporting Architectures', category: 'Part 2 · BI & Reporting', test: (l) => l.startsWith('12. Enterprise Reporting Architectures') },
  { id: 13, title: '13. Columnar Storage', category: 'Part 3 · Columnar Processing', test: (l) => l.startsWith('13. Columnar Storage') },
  { id: 14, title: '14. Massively Parallel Processing (MPP)', category: 'Part 3 · MPP Architecture', test: (l) => l.startsWith('14. Massively Parallel Processing (MPP)') },
  { id: 15, title: '15. Data Warehouse Partitioning', category: 'Part 3 · Partitioning Strategies', test: (l) => l.startsWith('15. Data Warehouse Partitioning') },
  { id: 16, title: '16. Clustering and Sorting', category: 'Part 3 · Clustering & Sorting', test: (l) => l.startsWith('16. Clustering and Sorting') },
  { id: 17, title: '17. Materialized Views', category: 'Part 3 · Materialized Views', test: (l) => l.startsWith('17. Materialized Views') },
  { id: 18, title: '18. Query Optimization for Analytical Workloads', category: 'Part 3 · Query Optimization', test: (l) => l.startsWith('18. Query Optimization for Analytical Workloads') },
  { id: 19, title: '19. Warehouse Performance and Cost Optimization', category: 'Part 3 · Cost & Performance', test: (l) => l.startsWith('19. Warehouse Performance and Cost Optimization') },
  { id: 20, title: '20. Snowflake Architecture', category: 'Part 4 · Cloud DW: Snowflake', test: (l) => l.startsWith('20. Snowflake Architecture') },
  { id: 21, title: '21. Google BigQuery Architecture', category: 'Part 4 · Cloud DW: BigQuery', test: (l) => l.startsWith('21. Google BigQuery Architecture') },
  { id: 22, title: '22. Amazon Redshift Architecture', category: 'Part 4 · Cloud DW: Redshift', test: (l) => l.startsWith('22. Amazon Redshift Architecture') },
  { id: 23, title: '23. ClickHouse Architecture', category: 'Part 4 · Analytical Engine: ClickHouse', test: (l) => l.startsWith('23. ClickHouse Architecture') },
  { id: 24, title: 'Part 5 — Practical Capstone: Build an Enterprise Data Warehouse', category: 'Part 5 · Capstone Architecture', test: (l) => l.startsWith('Part 5 — Practical Capstone') || l.startsWith('Module 7 capstone project') },
  { id: 25, title: 'Module 7 — Learning Outcomes', category: 'Review · Learning Outcomes', test: (l) => l.startsWith('Module 7 — Learning Outcomes') },
  { id: 26, title: 'Recommended Practical Assignments (22 Tasks)', category: 'Review · Practical Assignments', test: (l) => l.startsWith('Recommended practical assignments') },
  { id: 27, title: 'Recommended Learning Resources & Standards', category: 'Review · Learning Resources', test: (l) => l.startsWith('Recommended learning resources') },
  { id: 28, title: 'Data Engineering Curriculum Roadmap & Next Steps', category: 'Roadmap · Curriculum Alignment', test: (l) => l.startsWith('How Module 7 fits into the Data Engineering roadmap') }
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
  return /^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|MERGE|EXPLAIN|COPY|GRANT|REVOKE|WITH)\b/i.test(trimmed) ||
         /^(FROM|WHERE|GROUP BY|ORDER BY|HAVING|LIMIT|CLUSTER BY|PARTITION BY|PRIMARY KEY|ENGINE|SETTINGS|ORGANIZATION)\b/i.test(trimmed) ||
         /^(import|from|def|class|with|for|if|elif|else|print|return|raise)\b/.test(trimmed) ||
         /^(pip\s+install|docker\s+run|clickhouse-client|psql|snowsql|bq\s+query)\b/.test(trimmed) ||
         /^(warehouse_project\/|├──|└──|│)/.test(trimmed) ||
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
      // If code continues (e.g. indentation or continuation characters or close braces)
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

    if (/^(Important:|Note:|Remember:|Warning:|Tip:|Architecture Insight:)/i.test(line)) {
      flushCode();
      output.push('          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">\n' +
                  '            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>\n' +
                  '            ' + escapeJSX(line.replace(/^(Important:|Note:|Remember:|Warning:|Tip:|Architecture Insight:)\s*/i, '')) + '\n' +
                  '          </div>');
      continue;
    }

    // Major Subheading
    if (/^([A-Z]\.\s+|\d+\.\s+[A-Z]|Step\s+\d+\s+—|Step\s+\d+:|Problem\s+\d+\s+—|Project:|Scenario:|Why\s+|What\s+is\s+|How\s+|Common\s+|Advantages|Disadvantages|Trade-offs|Examples\s+|Key\s+|Types\s+of\s+|Which\s+warehouse|Four-platform comparison matrix)/i.test(line) ||
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
'export default function DataEngineeringWarehousingSections() {\n' +
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

const targetFile = path.resolve(__dirname, '../src/Componets/DataEngineeringWarehousingSections.jsx');
fs.writeFileSync(targetFile, jsx, 'utf8');
console.log('Successfully written DataEngineeringWarehousingSections.jsx! Size:', jsx.length, 'bytes');
