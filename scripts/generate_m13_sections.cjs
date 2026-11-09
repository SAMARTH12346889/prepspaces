// projectx/scripts/generate_m13_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m13_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 13: Analytics Engineering and dbt Overview & Roadmap', category: 'Course Roadmap', test: (l) => /^Module 13 — Analytics Engineering/.test(l) },
  { id: 1, title: '1. Introduction to Analytics Engineering', category: 'Part 1 · Analytics Engineering Foundations', test: (l) => /^1\. Introduction to Analytics Engineering/.test(l) },
  { id: 2, title: '2. What is dbt?', category: 'Part 1 · dbt Ecosystem & Paradigms', test: (l) => /^2\. What is dbt\?/.test(l) },
  { id: 3, title: '3. dbt Architecture and Workflow', category: 'Part 1 · Core Architecture & Compilation Graph', test: (l) => /^3\. dbt Architecture and Workflow/.test(l) },
  { id: 4, title: '4. dbt Core Installation and Configuration', category: 'Part 2 · Setup & Profiles Configuration', test: (l) => /^4\. dbt Core Installation and Configuration/.test(l) },
  { id: 5, title: '5. Building dbt Projects', category: 'Part 2 · Project Structure & Layering (Staging, Int, Marts)', test: (l) => /^5\. Building dbt Projects/.test(l) },
  { id: 6, title: '6. Models and Model Dependencies', category: 'Part 2 · Model SQL & Selection Syntax', test: (l) => /^6\. Models and Model Dependencies/.test(l) },
  { id: 7, title: '7. Sources and References', category: 'Part 3 · Sources, ref() & Freshness Checks', test: (l) => /^7\. Sources and References/.test(l) },
  { id: 8, title: '8. Jinja Templating', category: 'Part 3 · Jinja Variables, Loops & Conditionals', test: (l) => /^8\. Jinja Templating/.test(l) },
  { id: 9, title: '9. Model Materializations', category: 'Part 4 · View, Table, Incremental, Ephemeral & MatView', test: (l) => /^9\. Model Materializations/.test(l) },
  { id: 10, title: '10. Incremental Models', category: 'Part 4 · Incremental Strategies, Lookbacks & Full Refresh', test: (l) => /^10\. Incremental Models/.test(l) },
  { id: 11, title: '11. Seeds and Snapshots', category: 'Part 5 · Static Seeds & SCD Type 2 Snapshots', test: (l) => /^11\. Seeds and Snapshots/.test(l) },
  { id: 12, title: '12. Data Transformations Using SQL', category: 'Part 5 · Advanced SQL Transformations & Dimensional Modeling', test: (l) => /^12\. Data Transformations Using SQL/.test(l) },
  { id: 13, title: '13. Generic and Singular Data Tests', category: 'Part 6 · Data Quality, Generic & Singular Tests', test: (l) => /^13\. Generic and Singular Data Tests/.test(l) },
  { id: 14, title: '14. Custom Tests and Advanced Data Quality', category: 'Part 6 · Custom Generic Tests & Data Observability', test: (l) => /^14\. Custom Tests and Advanced Data Quality/.test(l) },
  { id: 15, title: '15. dbt Documentation', category: 'Part 6 · Project Documentation & dbt Catalog', test: (l) => /^15\. dbt Documentation/.test(l) },
  { id: 16, title: '16. Data Lineage and Dependency Graphs', category: 'Part 7 · Directed Lineage & Impact Analysis', test: (l) => /^16\. Data Lineage and Dependency Graphs/.test(l) },
  { id: 17, title: '17. Macros and Reusable SQL', category: 'Part 7 · Custom Macros & dbt-utils Package', test: (l) => /^17\. Macros and Reusable SQL/.test(l) },
  { id: 18, title: '18. Deployment and CI Integration', category: 'Part 8 · Git Version Control & Slim CI/CD', test: (l) => /^18\. Deployment and CI Integration/.test(l) },
  { id: 19, title: '19. Integrating dbt with Apache Airflow', category: 'Part 8 · Orchestrating dbt via Airflow Operators', test: (l) => /^19\. Integrating dbt with Apache Airflow/.test(l) },
  { id: 20, title: '20. Production dbt Project Development', category: 'Part 9 · Model Contracts, Governance & Production Best Practices', test: (l) => /^20\. Production dbt Project Development/.test(l) },
  { id: 21, title: '21. Practical Project — Build a Complete E-Commerce Analytics Platform Using dbt', category: 'Part 10 · Hands-on Capstone Analytics Platform', test: (l) => /^21\. Practical Project/.test(l) },
  { id: 22, title: '22. Practical Labs and Assignments', category: 'Labs · Hands-on Engineering Labs (1-7)', test: (l) => /^22\. Practical Labs and Assignments/.test(l) },
  { id: 23, title: '23. Advanced Assignments', category: 'Projects · 10 Production Scenarios & Retail Warehouse', test: (l) => /^23\. Advanced Assignments/.test(l) },
  { id: 24, title: '24. Interview Preparation — Analytics Engineering and dbt', category: 'Interview · Core Questions & 6 Real-World Scenarios', test: (l) => /^24\. Interview Preparation/.test(l) },
  { id: 25, title: '25. Recommended Learning Resources', category: 'Reference · Documentation & Official Standards', test: (l) => /^25\. Recommended Learning Resources/.test(l) },
  { id: 26, title: '26. Final Module Summary', category: 'Roadmap · Synthesis & Learning Outcomes', test: (l) => /^26\. Final Module Summary/.test(l) }
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
         /^(name:|version:|profile:|model-paths:|target-path:|models:|sources:|snapshots:|seeds:|packages:)/.test(trimmed) ||
         /^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|MERGE|EXPLAIN|COPY|GRANT|REVOKE|WITH)\b/i.test(trimmed) ||
         /^(dbt\s+|python\s+|pip\s+|mkdir\s+|cd\s+|git\s+|\$env:)/.test(trimmed) ||
         /^(ecommerce_analytics\/|models\/|seeds\/|snapshots\/|macros\/|tests\/|├──|└──|│)/.test(trimmed) ||
         /^(SQL Models \| v|stg_orders \| v|Raw Orders \| v|Sources \| v|External Database \| v|500 million records \| v|Existing Table \| \+|dim_customers \| \| dim_products|Raw Orders ───────┐|Changed: stg_customers \| v|Source Databases \| v|Airflow executes)/.test(trimmed) ||
         (trimmed.includes('{{ ref(') || trimmed.includes('{{ source(') || trimmed.includes('{{ config(')) ||
         (trimmed.includes(' >> ') || trimmed.includes(' << ')) ||
         (trimmed.startsWith('{') && trimmed.endsWith('}') && trimmed.length > 20) ||
         (trimmed.startsWith('[') && trimmed.endsWith(']') && trimmed.length > 20);
}

// 35 Exact Table Definitions
const knownTables = [
  { headers: ['Generation', 'Description'], count: 2 },
  { headers: ['order_id', 'customer_id', 'amount', 'order_status'], count: 5 },
  { headers: ['customer_id', 'total_revenue', 'completed_orders'], count: 3 },
  { headers: ['Responsibility', 'Data Engineer', 'Analytics Engineer', 'Data Analyst'], count: 8 },
  { headers: ['Concept', 'Meaning'], count: 11 },
  { headers: ['dbt does', 'dbt does not primarily do'], count: 8 },
  { headers: ['Feature', 'Apache Spark', 'Apache Airflow', 'dbt'], count: 7 },
  { headers: ['Data platform', 'Common adapter/package'], count: 5 },
  { headers: ['Field', 'Purpose'], count: 10 },
  { headers: ['Prefix', 'Meaning', 'Example'], count: 5 },
  { headers: ['Feature', 'source()', 'ref()'], count: 6 },
  { headers: ['Syntax', 'Purpose'], count: 3 },
  { headers: ['Feature', 'View', 'Table', 'Incremental', 'Ephemeral', 'Materialized View'], count: 5 },
  { headers: ['Feature', 'Table', 'Incremental'], count: 7 },
  { headers: ['customer_id', 'name', 'city'], count: 1 },
  { headers: ['customer_id', 'city', 'dbt_valid_from', 'dbt_valid_to'], count: 2 },
  { headers: ['customer_id', 'city', 'updated_at'], count: 2 },
  { headers: ['Column', 'Meaning'], count: 4 },
  { headers: ['Feature', 'Seeds', 'Snapshots'], count: 6 },
  { headers: ['order_id', 'customer_id', 'amount', 'status'], count: 3 },
  { headers: ['Feature', 'Generic test', 'Singular test'], count: 5 },
  { headers: ['Data quality rule', 'Suggested test'], count: 8 },
  { headers: ['Function', 'Purpose'], count: 9 },
  { headers: ['Environment', 'Purpose'], count: 4 },
  { headers: ['Requirement', 'Suitable approach'], count: 6 },
  { headers: ['Area', 'Best practice'], count: 15 },
  { headers: ['Technology', 'Responsibility'], count: 8 },
  { headers: ['order_id', 'customer_id', 'product_id', 'amount', 'status'], count: 4 },
  { headers: ['customer_id', 'customer_name', 'country'], count: 3 },
  { headers: ['product_id', 'product_name', 'category'], count: 3 },
  { headers: ['Dataset', 'Purpose'], count: 7 },
  { headers: ['Assignment', 'Skills developed'], count: 10 },
  { headers: ['Area', 'What you should master'], count: 24 }
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

    if (/^(Important:|Note:|Remember:|Warning:|Tip:|Key concept:|Professional practice:|The most important practical skill:)/i.test(line)) {
      flushCode();
      output.push('          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">\n' +
                  '            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>\n' +
                  '            ' + escapeJSX(line.replace(/^(Important:|Note:|Remember:|Warning:|Tip:|Key concept:|Professional practice:|The most important practical skill:)\s*/i, '')) + '\n' +
                  '          </div>');
      continue;
    }

    // Major Subheading
    if (/^(\d+\.\d+\s+[A-Z]|[A-Z]\.\s+|\d+\.\s+[A-Z]|Step\s+\d+\s+—|Step\s+\d+:|Problem\s+\d+\s+—|Project:|Scenario\s+\d+:|Why\s+|What\s+is\s+|What\s+are\s+|How\s+|Common\s+|Advantages|Disadvantages|Trade-offs|Examples\s+|Key\s+|Types\s+of\s+|Which\s+|Comparison|Practical\s+Lab\s+\d+|Assignment\s+\d+:|Recommended\s+progression|Module\s+\d+\s+—\s+Learning\s+Outcome)/i.test(line) ||
        (line.length < 55 && !line.endsWith('.') && !line.endsWith(',') && !line.includes(':'))) {
      flushCode();
      output.push('          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">\n' +
                  '            <span className="w-2 h-2 rounded-full bg-[#f97316]" />\n' +
                  '            <span>' + escapeJSX(line) + '</span>\n' +
                  '          </h3>');
      continue;
    }

    // Bullet-like single item
    if (line.endsWith('.') && line.length < 110 && !line.includes('. ') && !line.startsWith('Suppose') && !line.startsWith('Imagine') && !line.startsWith('For example') && !line.startsWith('Consider')) {
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
'  BarChart3,\n' +
'  Split,\n' +
'  Merge,\n' +
'  AlertTriangle,\n' +
'  CheckCircle\n' +
'} from "lucide-react";\n\n' +
'export default function DataEngineeringDbtSections() {\n' +
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

const targetFile = path.resolve(__dirname, '../src/Componets/DataEngineeringDbtSections.jsx');
fs.writeFileSync(targetFile, jsx, 'utf8');
console.log('Successfully written DataEngineeringDbtSections.jsx! Size:', jsx.length, 'bytes');
