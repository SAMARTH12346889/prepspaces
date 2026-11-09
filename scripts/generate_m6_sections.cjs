// projectx/scripts/generate_m6_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m6_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, test: (l) => l.startsWith('Module 6 — Data Formats'), title: 'Module 6: Data Formats, Serialization and Data Integration Specification', category: 'Course Roadmap' },
  { id: 1, test: (l) => l.startsWith('1. Introduction to Data Serialization'), title: '1. Introduction to Data Serialization', category: 'Part 1 · Serialization Foundations' },
  { id: 2, test: (l) => l.startsWith('2. Row-Oriented vs Column-Oriented Formats'), title: '2. Row-Oriented vs Column-Oriented Formats', category: 'Part 1 · Storage Layouts' },
  { id: 3, test: (l) => l.startsWith('3. CSV and TSV Formats'), title: '3. CSV and TSV Formats', category: 'Part 1 · Tabular Text Formats' },
  { id: 4, test: (l) => l.startsWith('4. JSON and JSON Lines'), title: '4. JSON and JSON Lines', category: 'Part 1 · Hierarchical Text Formats' },
  { id: 5, test: (l) => l.startsWith('5. XML Data Structures'), title: '5. XML Data Structures', category: 'Part 1 · Enterprise Document Formats' },
  { id: 6, test: (l) => l.startsWith('6. Apache Avro'), title: '6. Apache Avro', category: 'Part 2 · Binary & Schema Formats' },
  { id: 7, test: (l) => l.startsWith('7. Apache Parquet'), title: '7. Apache Parquet', category: 'Part 2 · Columnar Analytics' },
  { id: 8, test: (l) => l.startsWith('8. Apache ORC'), title: '8. Apache ORC', category: 'Part 2 · Analytical Storage' },
  { id: 9, test: (l) => l.startsWith('9. Apache Arrow'), title: '9. Apache Arrow', category: 'Part 2 · In-Memory Columnar' },
  { id: 10, test: (l) => l.startsWith('10. Binary Serialization'), title: '10. Binary Serialization', category: 'Part 2 · Binary Protocols' },
  { id: 11, test: (l) => l.startsWith('11. Data Compression Techniques'), title: '11. Data Compression Techniques', category: 'Part 2 · Compression & Encoding' },
  { id: 12, test: (l) => l.startsWith('12. Schema Definition and Evolution'), title: '12. Schema Definition and Evolution', category: 'Part 2 · Schema Evolution' },
  { id: 13, test: (l) => l.startsWith('13. Schema Registries'), title: '13. Schema Registries', category: 'Part 2 · Schema Governance' },
  { id: 14, test: (l) => l.startsWith('14. Data Encoding and Decoding'), title: '14. Data Encoding and Decoding', category: 'Part 2 · Encoding & Low-Level Formats' },
  { id: 15, test: (l) => l.startsWith('15. REST API Architecture'), title: '15. REST API Architecture', category: 'Part 3 · REST APIs' },
  { id: 16, test: (l) => l.startsWith('16. API Authentication and Authorization'), title: '16. API Authentication and Authorization', category: 'Part 3 · API Security' },
  { id: 17, test: (l) => l.startsWith('17. API Pagination and Rate Limits'), title: '17. API Pagination and Rate Limits', category: 'Part 3 · API Reliability' },
  { id: 18, test: (l) => l.startsWith('18. Extracting Data from External APIs'), title: '18. Extracting Data from External APIs', category: 'Part 3 · Ingestion Pipelines' },
  { id: 19, test: (l) => l.startsWith('19. Webhooks and Event-Based Integration'), title: '19. Webhooks and Event-Based Integration', category: 'Part 3 · Event-Driven Integration' },
  { id: 20, test: (l) => l.startsWith('20. Data Contracts and Source Compatibility'), title: '20. Data Contracts and Source Compatibility', category: 'Part 3 · Data Governance & Contracts' },
  { id: 21, test: (l) => l.startsWith('Part 4 — Choosing the Right Data Format'), title: 'Choosing the Right Data Format: Decision Matrix', category: 'Part 4 · Format Selection' },
  { id: 22, test: (l) => l.startsWith('Part 5 — Practical Lab'), title: 'Practical Lab: End-to-End E-Commerce Data Integration Pipeline', category: 'Part 5 · Capstone Lab' },
  { id: 23, test: (l) => l.startsWith('Module 6 — Learning Outcomes'), title: 'Module 6 — Learning Outcomes', category: 'Review · Learning Outcomes' },
  { id: 24, test: (l) => l.startsWith('Recommended practical assignments'), title: 'Recommended Practical Assignments (16 Tasks)', category: 'Review · Practical Assignments' },
  { id: 25, test: (l) => l.startsWith('Recommended learning resources'), title: 'Recommended Learning Resources & Standards', category: 'Review · Learning Resources' },
  { id: 26, test: (l) => l.startsWith('How Module 6 fits into the Data Engineering roadmap'), title: 'Data Engineering Curriculum Roadmap & Next Steps', category: 'Roadmap · Curriculum Alignment' }
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

function isCodeOrStructure(line) {
  const trimmed = line.trim();
  return /^(import|from|def|class|with|for|if|elif|else|print|return|raise|syntax\s*=)\b/.test(trimmed) ||
         /^(pip\s+install|GET\s+\/|POST\s+\/|PUT\s+\/|PATCH\s+\/|DELETE\s+\/|HTTP\/1\.1\s+\d+)\b/.test(trimmed) ||
         /^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP)\b/i.test(trimmed) ||
         /^(<\?xml|<customer|<name|<order|<\/|<element)/.test(trimmed) ||
         /^(ecommerce_pipeline\/|├──|└──|│)/.test(trimmed) ||
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

    if (/^(Important:|Note:|Remember:|Warning:|Tip:)/i.test(line)) {
      flushCode();
      output.push('          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">\n' +
                  '            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>\n' +
                  '            ' + escapeJSX(line.replace(/^(Important:|Note:|Remember:|Warning:|Tip:)\s*/i, '')) + '\n' +
                  '          </div>');
      continue;
    }

    // Major Subheading
    if (/^([A-Z]\.\s+|\d+\.\s+[A-Z]|Step\s+\d+\s+—|Problem\s+\d+\s+—|Project:|Scenario:|Why\s+|What\s+is\s+|How\s+|Common\s+|Advantages|Disadvantages|Trade-offs|Examples\s+|Key\s+|Types\s+of\s+|Which\s+format)/i.test(line) ||
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
'  Code2\n' +
'} from "lucide-react";\n\n' +
'export default function DataEngineeringFormatsSections() {\n' +
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

const targetFile = path.resolve(__dirname, '../src/Componets/DataEngineeringFormatsSections.jsx');
fs.writeFileSync(targetFile, jsx, 'utf8');
console.log('Successfully written DataEngineeringFormatsSections.jsx! Size:', jsx.length, 'bytes');
