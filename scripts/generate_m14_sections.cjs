// projectx/scripts/generate_m14_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m14_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 14: Data Quality, Testing, Metadata and Lineage Overview & Roadmap', category: 'Course Roadmap', test: (l) => /^Module 14 — Data Quality/.test(l) },
  { id: 1, title: '1. Introduction to Data Quality Engineering', category: 'Part 1 · Quality Lifecycle & Principles', test: (l) => /^1\. Introduction to Data Quality Engineering/.test(l) },
  { id: 2, title: '2. Dimensions of Data Quality', category: 'Part 1 · The 9 Quality Dimensions & Scoring', test: (l) => /^2\. Dimensions of Data Quality/.test(l) },
  { id: 3, title: '3. Data Profiling', category: 'Part 2 · Structural, Content & Statistical Profiling', test: (l) => /^3\. Data Profiling/.test(l) },
  { id: 4, title: '4. Data Validation Techniques', category: 'Part 2 · Rules, Domains, Formats & Quarantine Sieve', test: (l) => /^4\. Data Validation Techniques/.test(l) },
  { id: 5, title: '5. Schema Validation', category: 'Part 3 · JSON Schema, Evolution & Schema Registry', test: (l) => /^5\. Schema Validation/.test(l) },
  { id: 6, title: '6. Null and Duplicate Detection', category: 'Part 3 · Null Semantics & Window Deduplication', test: (l) => /^6\. Null and Duplicate Detection/.test(l) },
  { id: 7, title: '7. Referential Integrity Validation', category: 'Part 4 · Foreign Keys, Fact-Dims & Orphan Handling', test: (l) => /^7\. Referential Integrity Validation/.test(l) },
  { id: 8, title: '8. Data Freshness Checks', category: 'Part 4 · Event vs Ingestion Lag, SLAs & SLOs', test: (l) => /^8\. Data Freshness Checks/.test(l) },
  { id: 9, title: '9. Data Reconciliation', category: 'Part 5 · Count, Financial & Record Checksum Audits', test: (l) => /^9\. Data Reconciliation/.test(l) },
  { id: 10, title: '10. Anomaly Detection', category: 'Part 5 · Z-Score, IQR Fences, Time-Series & ML Outliers', test: (l) => /^10\. Anomaly Detection/.test(l) },
  { id: 11, title: '11. Automated Data Quality Testing', category: 'Part 6 · Great Expectations, Soda, Deequ & dbt Tests', test: (l) => /^11\. Automated Data Quality Testing/.test(l) },
  { id: 12, title: '12. Unit and Integration Testing', category: 'Part 6 · Transformation Unit Tests & Pytest Harnesses', test: (l) => /^12\. Unit and Integration Testing/.test(l) },
  { id: 13, title: '13. Pipeline Testing', category: 'Part 7 · Ingestion, Idempotency & The Data Testing Pyramid', test: (l) => /^13\. Pipeline Testing/.test(l) },
  { id: 14, title: '14. Data Contracts', category: 'Part 7 · Schema, Semantic Agreements & Change Control', test: (l) => /^14\. Data Contracts/.test(l) },
  { id: 15, title: '15. Metadata Management', category: 'Part 8 · Technical, Business, Operational & Active Metadata', test: (l) => /^15\. Metadata Management/.test(l) },
  { id: 16, title: '16. Data Catalog Architecture', category: 'Part 8 · DataHub, OpenMetadata & Enterprise Catalogs', test: (l) => /^16\. Data Catalog Architecture/.test(l) },
  { id: 17, title: '17. Data Lineage and Impact Analysis', category: 'Part 9 · Source-to-Target, Column-Level & DAG Lineage', test: (l) => /^17\. Data Lineage and Impact Analysis/.test(l) },
  { id: 18, title: '18. Data Ownership and Stewardship', category: 'Part 9 · Owners, Stewards, Custodians & Data Domains', test: (l) => /^18\. Data Ownership and Stewardship/.test(l) },
  { id: 19, title: '19. Quality Monitoring and Reporting', category: 'Part 10 · Metrics, Dashboards, Severity & Incident Ops', test: (l) => /^19\. Quality Monitoring and Reporting/.test(l) },
  { id: 20, title: '20. Putting Everything Together: Real-World Data Quality Engineering Workflow', category: 'Part 10 · Complete Architecture, SQL & Separation Pattern', test: (l) => /^20\. Putting Everything Together/.test(l) },
  { id: 21, title: '21. Practical Laboratory', category: 'Labs · Comprehensive Hands-On Lab Workflows', test: (l) => /^21\. Practical Laboratory/.test(l) },
  { id: 22, title: '22. Common Mistakes in Data Quality Engineering', category: 'Architecture · 10 Critical Production Pitfalls', test: (l) => /^22\. Common Mistakes in Data Quality Engineering/.test(l) },
  { id: 23, title: '23. Important Interview Questions and Answers', category: 'Interview · 15 Deep Technical Questions & Scenarios', test: (l) => /^23\. Important Interview Questions and Answers/.test(l) },
  { id: 24, title: '24. Final Revision — What You Should Understand', category: 'Revision · Complete Mastery Summary Table', test: (l) => /^24\. Final Revision/.test(l) },
  { id: 25, title: '25. Recommended Learning Resources & Module Wrap-up', category: 'Reference · Documentation, Standards & Final Synthesis', test: (l) => /^25\. Recommended Learning Resources/.test(l) }
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

function renderLinkCard(text, url) {
  return '          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">\n' +
         '            <span className="font-semibold text-stone-800 truncate">' + escapeJSX(text) + '</span>\n' +
         '            <a href="' + url + '" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">\n' +
         '              <span>Reference Link</span>\n' +
         '              <ExternalLink size={12} />\n' +
         '            </a>\n' +
         '          </div>';
}

function isMarkdownLink(line) {
  const trimmed = line.trim();
  const m = trimmed.match(/^\[(.*?)\]\((https?:\/\/.*?)\)$/);
  return m ? { text: m[1], url: m[2] } : null;
}

function isCodeOrStructure(line) {
  const trimmed = line.trim();
  return /^(import|from|def|class|with|for|if|elif|else|print|return|raise|while)\b/.test(trimmed) ||
         /^(\{\{|\{%|\{#|--\s+|#\s+)/.test(trimmed) ||
         /^(data_contract:|name:|version:|profile:|model-paths:|target-path:|models:|sources:|snapshots:|seeds:|packages:)/.test(trimmed) ||
         /^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|MERGE|EXPLAIN|COPY|GRANT|REVOKE|WITH)\b/i.test(trimmed) ||
         /^(dbt\s+|python\s+|pip\s+|mkdir\s+|cd\s+|git\s+|\$env:)/.test(trimmed) ||
         /^(Metadata Repository|├──|└──|│)/.test(trimmed) ||
         /^(CRM Database\.customers \| v|raw_orders \| v|raw_orders\.amount \| v|customer_database \| v|raw_customers \| v|Application Database \| v|Extract Customer Data \| v|extract_orders \| v)/.test(trimmed) ||
         (trimmed.includes(' | v ') || trimmed.includes(' | +') || trimmed.includes('───')) ||
         (trimmed.startsWith('{') && trimmed.endsWith('}') && trimmed.length > 20) ||
         (trimmed.startsWith('[') && trimmed.endsWith(']') && trimmed.length > 20);
}

// All known tables in Module 14
const knownTables = [
  { headers: ['Data engineering', 'Data quality engineering'], count: 5 },
  { headers: ['Dimension', 'Main question', 'Example failure'], count: 9 },
  { headers: ['Dimension', 'Score'], count: 5 },
  { headers: ['Column', 'Data type', 'Nullable'], count: 5 },
  { headers: ['Profiling measurement', 'Result'], count: 8 },
  { headers: ['Data profiling', 'Data quality testing'], count: 4 },
  { headers: ['Change', 'Typical impact'], count: 6 },
  { headers: ['customer_id', 'name', 'age'], count: 4 },
  { headers: ['customer_id', 'customer_name'], count: 3 },
  { headers: ['order_id', 'customer_id', 'amount'], count: 3 },
  { headers: ['order_id', 'customer_key', 'product_key', 'amount'], count: 2 },
  { headers: ['customer_key', 'customer_name'], count: 2 },
  { headers: ['product_key', 'product_name'], count: 2 },
  { headers: ['order_id', 'event_timestamp', 'ingestion_timestamp'], count: 3 },
  { headers: ['Dataset', 'Expected refresh', 'Freshness requirement'], count: 4 },
  { headers: ['System', 'Record count'], count: 3 },
  { headers: ['Metric', 'Source', 'Warehouse'], count: 3 },
  { headers: ['Hour', 'Expected events', 'Actual events'], count: 4 },
  { headers: ['Validation', 'Anomaly detection'], count: 4 },
  { headers: ['Tool', 'Primary use'], count: 7 },
  { headers: ['Unit testing', 'Integration testing'], count: 4 },
  { headers: ['Schema validation', 'Data contract'], count: 4 },
  { headers: ['Metadata field', 'Value'], count: 8 },
  { headers: ['Field', 'Business definition'], count: 3 },
  { headers: ['Pipeline run', 'Status', 'Records processed', 'Duration'], count: 3 },
  { headers: ['Platform', 'Main purpose'], count: 6 },
  { headers: ['Role', 'Primary responsibility'], count: 4 },
  { headers: ['Quality metric', 'Current result', 'Target', 'Status'], count: 6 },
  { headers: ['Severity', 'Meaning', 'Example'], count: 4 },
  { headers: ['Layer', 'Technology', 'Responsibility'], count: 9 },
  { headers: ['Task', 'Implementation'], count: 15 },
  { headers: ['Topic', 'What you should be able to explain or implement'], count: 23 },
  { headers: ['Resource', 'What to study'], count: 7 }
];

function tryRenderTable(lines, i) {
  for (const kt of knownTables) {
    const numCols = kt.headers.length;
    let matches = true;
    for (let c = 0; c < numCols; c++) {
      if (!lines[i + c] || lines[i + c].trim() !== kt.headers[c]) {
        matches = false;
        break;
      }
    }
    if (matches) {
      let html = '          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">\n';
      html += '            <table className="w-full text-left text-xs sm:text-sm">\n';
      html += '              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">\n';
      html += '                <tr>\n';
      for (let c = 0; c < numCols; c++) {
        html += '                  <th className="px-4 py-3">' + escapeJSX(kt.headers[c]) + '</th>';
      }
      html += '\n                </tr>\n';
      html += '              </thead>\n';
      html += '              <tbody className="divide-y divide-[#e7e3da]">\n';

      let rowOffset = i + numCols;
      for (let r = 0; r < kt.count; r++) {
        const bgClass = r % 2 === 0 ? "bg-white" : "bg-[#fcfbf9]";
        html += '                <tr className="' + bgClass + '">\n';
        for (let c = 0; c < numCols; c++) {
          const cellVal = lines[rowOffset + r * numCols + c] || '';
          html += '                  <td className="px-4 py-2.5 text-stone-700">' + escapeJSX(cellVal.trim()) + '</td>';
        }
        html += '\n                </tr>\n';
      }
      html += '              </tbody>\n';
      html += '            </table>\n';
      html += '          </div>';

      const consumedLines = numCols + kt.count * numCols;
      return { html, consumed: consumedLines };
    }
  }
  return null;
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

    // Check table match
    const tableMatch = tryRenderTable(rawLines, i);
    if (tableMatch) {
      flushCode();
      output.push(tableMatch.html);
      i += tableMatch.consumed - 1;
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

    // Mathematical display block
    if (line.startsWith('\\[') && line.endsWith('\\]')) {
      flushCode();
      const mathStr = line.replace(/^\s*\\\[\s*/, '').replace(/\s*\\\]\s*$/, '');
      output.push('          <div className="p-4 my-3 rounded-xl bg-orange-50/60 border border-orange-200/80 text-stone-900 font-mono text-xs sm:text-sm text-center overflow-x-auto shadow-sm">\n' +
                  '            <span className="font-semibold text-orange-900 tracking-wide">' + escapeJSX(mathStr) + '</span>\n' +
                  '          </div>');
      continue;
    }

    // Code lines
    if (isCodeOrStructure(line)) {
      inCode = true;
      codeBuffer.push(rawLines[i]);
      continue;
    } else if (inCode) {
      flushCode();
    }

    // Headings
    if (/^(\d+\.\d+(\.\d+)?|[A-Z]\.)\s+/.test(line)) {
      output.push('          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">\n' +
                  '            <span className="w-2 h-2 rounded-full bg-[#f97316]" />\n' +
                  '            <span>' + escapeJSX(line) + '</span>\n' +
                  '          </h3>');
      continue;
    }

    // Interview Questions Q1. ...
    if (/^Q\d+\.\s+/.test(line)) {
      output.push('          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">\n' +
                  '            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>\n' +
                  '            <span>' + escapeJSX(line) + '</span>\n' +
                  '          </div>');
      continue;
    }

    // Numbered item: e.g. 1. Assuming successful...
    if (/^\d+\.\s+/.test(line)) {
      output.push('          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">\n' +
                  '            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">' + line.match(/^\d+/)[0] + '</span>\n' +
                  '            <span className="font-medium">' + escapeJSX(line.replace(/^\d+\.\s+/, '')) + '</span>\n' +
                  '          </div>');
      continue;
    }

    // Bullet points
    if (line.startsWith('• ') || line.startsWith('- ') || line.startsWith('* ')) {
      const cleanBullet = line.replace(/^[•\-\*]\s*/, '');
      output.push('          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">\n' +
                  '            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />\n' +
                  '            <span>' + escapeJSX(cleanBullet) + '</span>\n' +
                  '          </div>');
      continue;
    }

    // Default paragraph
    output.push('          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">' + escapeJSX(line) + '</p>');
  }
  flushCode();
  return output.join('\n');
}

let fileContent = `import React from "react";
import {
  Database,
  Table,
  Layers,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Cpu,
  Server,
  Zap,
  Activity,
  Workflow,
  HardDrive,
  GitBranch,
  ShieldCheck,
  RefreshCw,
  Clock,
  Terminal,
  FileCode,
  Sliders,
  Filter,
  Globe,
  Key,
  Binary,
  FileSpreadsheet,
  Code2,
  Boxes,
  BarChart3,
  Split,
  Merge,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export default function DataEngineeringQualitySections() {
  return (
    <div className="space-y-10">
`;

buckets.forEach((bucket) => {
  const sec = bucket.header;
  const anchor = sec.id === 0 ? "overview" : "section-" + sec.id;
  const badge = sec.id === 0 ? "Roadmap" : "Section " + sec.id;
  
  fileContent += `      {/* SECTION ${sec.id}: ${sec.title} */}\n`;
  fileContent += `      <section id="${anchor}" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">\n`;
  fileContent += `        <div className="flex items-center gap-2">\n`;
  fileContent += `          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">\n`;
  fileContent += `            ${badge}\n`;
  fileContent += `          </span>\n`;
  fileContent += `          <span className="text-xs font-mono text-stone-500">${sec.category}</span>\n`;
  fileContent += `        </div>\n`;
  fileContent += `        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">\n`;
  fileContent += `          ${sec.title}\n`;
  fileContent += `        </h2>\n`;
  fileContent += `        <div className="space-y-3">\n`;
  
  fileContent += processLinesToJSX(bucket.lines);
  
  fileContent += `\n        </div>\n`;
  fileContent += `      </section>\n\n`;
});

fileContent += `    </div>
  );
}
`;

const destFile = path.resolve(__dirname, '../src/Componets/DataEngineeringQualitySections.jsx');
fs.writeFileSync(destFile, fileContent, 'utf8');
console.log('Successfully generated DataEngineeringQualitySections.jsx! Size:', fileContent.length, 'bytes');
