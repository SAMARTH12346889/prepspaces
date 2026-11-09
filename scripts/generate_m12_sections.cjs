// projectx/scripts/generate_m12_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m12_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 12: Workflow Orchestration with Apache Airflow Overview & Roadmap', category: 'Course Roadmap', test: (l) => /^Module 12 — Workflow Orchestration/.test(l) },
  { id: 1, title: '1. Introduction to Workflow Orchestration', category: 'Part 1 · Orchestration Foundations', test: (l) => /^1\. Introduction to Workflow Orchestration/.test(l) },
  { id: 2, title: '2. Why Data Orchestration Is Required', category: 'Part 1 · Pipeline Failure Modes & Coordination', test: (l) => /^2\. Why Data Orchestration Is Required/.test(l) },
  { id: 3, title: '3. Workflow and Task Dependencies', category: 'Part 1 · Linear & Parallel Dependencies', test: (l) => /^3\. Workflow and Task Dependencies/.test(l) },
  { id: 4, title: '4. Directed Acyclic Graphs (DAGs)', category: 'Part 2 · DAG Theory & TaskFlow API', test: (l) => /^4\. Directed Acyclic Graphs \(DAGs\)/.test(l) },
  { id: 5, title: '5. Apache Airflow Architecture', category: 'Part 2 · Modern Airflow 3.x System Topology', test: (l) => /^5\. Apache Airflow Architecture/.test(l) },
  { id: 6, title: '6. Airflow Scheduler and Executor', category: 'Part 2 · Scheduling & Executor Mechanics', test: (l) => /^6\. Airflow Scheduler and Executor/.test(l) },
  { id: 7, title: '7. Airflow Operators', category: 'Part 3 · Core, Standard & Provider Operators', test: (l) => /^7\. Airflow Operators/.test(l) },
  { id: 8, title: '8. Sensors and Hooks', category: 'Part 3 · Event Sensors & Connection Hooks', test: (l) => /^8\. Sensors and Hooks/.test(l) },
  { id: 9, title: '9. Task Dependencies and Branching', category: 'Part 3 · Conditional Branching & Trigger Rules', test: (l) => /^9\. Task Dependencies and Branching/.test(l) },
  { id: 10, title: '10. Scheduling and Cron Expressions', category: 'Part 4 · Cron Expressions & Data Intervals', test: (l) => /^10\. Scheduling and Cron Expressions/.test(l) },
  { id: 11, title: '11. Task Retries and Failure Handling', category: 'Part 4 · Fault Tolerance & Idempotency', test: (l) => /^11\. Task Retries and Failure Handling/.test(l) },
  { id: 12, title: '12. Backfilling and Catchup', category: 'Part 4 · Historical Reprocessing & Catchup', test: (l) => /^12\. Backfilling and Catchup/.test(l) },
  { id: 13, title: '13. Dynamic Task Mapping', category: 'Part 5 · Dynamic Mapping (.expand / .partial)', test: (l) => /^13\. Dynamic Task Mapping/.test(l) },
  { id: 14, title: '14. Variables and Connections', category: 'Part 5 · Variables, Connections & XCom Metadata', test: (l) => /^14\. Variables and Connections/.test(l) },
  { id: 15, title: '15. Secrets Management', category: 'Part 5 · Vault & Cloud Secrets Backends', test: (l) => /^15\. Secrets Management/.test(l) },
  { id: 16, title: '16. Monitoring Workflow Execution', category: 'Part 6 · Observability, SLA & Prometheus Alerts', test: (l) => /^16\. Monitoring Workflow Execution/.test(l) },
  { id: 17, title: '17. Data-Aware Scheduling', category: 'Part 6 · Asset-Aware DAGs & Event Driven Triggers', test: (l) => /^17\. Data-Aware Scheduling/.test(l) },
  { id: 18, title: '18. Pipeline Automation', category: 'Part 6 · Cross-DAG Pipelines & Spark Integration', test: (l) => /^18\. Pipeline Automation/.test(l) },
  { id: 19, title: '19. Production Airflow Deployment', category: 'Part 7 · Production Docker, Celery & Kubernetes', test: (l) => /^19\. Production Airflow Deployment/.test(l) },
  { id: 20, title: '20. Introduction to Dagster as an Alternative', category: 'Part 7 · Dagster Software-Defined Assets', test: (l) => /^20\. Introduction to Dagster as an Alternative/.test(l) },
  { id: 21, title: '21. Practical Project — Build an Automated E-Commerce Data Pipeline Using Apache Airflow and Spark', category: 'Part 8 · Capstone Pipeline Project', test: (l) => /^21\. Practical Project/.test(l) },
  { id: 22, title: '22. Practical Labs and Assignments', category: 'Labs · Hands-on Engineering Labs (1-6)', test: (l) => /^22\. Practical Labs and Assignments/.test(l) },
  { id: 23, title: '23. Advanced Assignments', category: 'Projects · 10 Production Scenarios & Lakehouse', test: (l) => /^23\. Advanced Assignments/.test(l) },
  { id: 24, title: '24. Interview Preparation — Apache Airflow', category: 'Interview · Architecture & Scenario Questions', test: (l) => /^24\. Interview Preparation/.test(l) },
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
  return /^(import|from|def|class|with|for|if|elif|else|print|return|raise|while|try|except)\b/.test(trimmed) ||
         /^(@task|@dag|@asset|@schedule|@sensor|default_args\s*=)/.test(trimmed) ||
         /^(pip\s+install|docker\s+run|docker\s+compose|docker-compose|airflow\s+dags|airflow\s+tasks|airflow\s+db|spark-submit)\b/.test(trimmed) ||
         /^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|MERGE|EXPLAIN|COPY|GRANT|REVOKE|WITH)\b/i.test(trimmed) ||
         /^(ecommerce-airflow-project\/|dags\/|spark_jobs\/|├──|└──|│)/.test(trimmed) ||
         /^(Start Pipeline \| v |Start \| -------------|Extract → Transform → Load|START \| Extract Payments|Extract \| Validate \| Transform|Start \| v Wait For Input|Start \| Extract Data|Validate Data \| Is Valid|Daily data interval:|Discover Files \| -----|List 100 Files \| v|schedule = |E-Commerce Platform \| v|Orders DAG \| v|Airflow Scheduler \| v|Airflow Docker Image \| |--|Raw Orders \| v|Daily Schedule \| v|START \| v Discover)/.test(trimmed) ||
         /^(s3:\/\/|wasbs:\/\/|gs:\/\/|hdfs:\/\/)/.test(trimmed) ||
         (trimmed.includes(' >> ') || trimmed.includes(' << ')) ||
         (trimmed.startsWith('{') && trimmed.endsWith('}') && trimmed.length > 20) ||
         (trimmed.startsWith('[') && trimmed.endsWith(']') && trimmed.length > 20);
}

// Table detection definitions
const knownTables = [
  { headers: ['Technology', 'Responsibility'], count: 8 },
  { headers: ['Without orchestration', 'With Airflow'], count: 8 },
  { headers: ['Concept', 'Meaning'], count: 3 },
  { headers: ['Property', 'Purpose'], count: 9 },
  { headers: ['Component', 'Primary responsibility'], count: 8 },
  { headers: ['Feature', 'LocalExecutor', 'CeleryExecutor', 'KubernetesExecutor'], count: 6 },
  { headers: ['Trigger rule', 'Meaning'], count: 8 },
  { headers: ['Preset', 'Meaning'], count: 9 },
  { headers: ['Feature', 'Variables', 'Connections'], count: 5 },
  { headers: ['Component', 'Example technology'], count: 11 },
  { headers: ['Feature', 'Apache Airflow', 'Dagster'], count: 10 },
  { headers: ['Technology', 'Purpose'], count: 9 },
  { headers: ['Area', 'What you should master'], count: 26 }
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
      // Build HTML table
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
      // If code continues (continuation chars, indents, or braces)
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

    if (/^(Important:|Note:|Remember:|Warning:|Tip:|Architecture Insight:|One important distinction:|Most important practical skill:)/i.test(line)) {
      flushCode();
      output.push('          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">\n' +
                  '            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>\n' +
                  '            ' + escapeJSX(line.replace(/^(Important:|Note:|Remember:|Warning:|Tip:|Architecture Insight:|One important distinction:|Most important practical skill:)\s*/i, '')) + '\n' +
                  '          </div>');
      continue;
    }

    // Major Subheading
    if (/^(\d+\.\d+\s+[A-Z]|[A-Z]\.\s+|\d+\.\s+[A-Z]|Step\s+\d+\s+—|Step\s+\d+:|Problem\s+\d+\s+—|Problem\s+\d+:|Project:|Scenario\s+\d+:|Why\s+|What\s+is\s+|What\s+are\s+|How\s+|Common\s+|Advantages|Disadvantages|Trade-offs|Examples\s+|Key\s+|Types\s+of\s+|Which\s+|Comparison|Practical\s+Lab\s+\d+|Assignment\s+\d+:|Recommended\s+progression|Module\s+\d+\s+—\s+Learning\s+Outcome)/i.test(line) ||
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
'  AlertTriangle\n' +
'} from "lucide-react";\n\n' +
'export default function DataEngineeringAirflowSections() {\n' +
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

const targetFile = path.resolve(__dirname, '../src/Componets/DataEngineeringAirflowSections.jsx');
fs.writeFileSync(targetFile, jsx, 'utf8');
console.log('Successfully written DataEngineeringAirflowSections.jsx! Size:', jsx.length, 'bytes');
