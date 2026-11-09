// projectx/scripts/generate_m16_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m16_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 16: Event-Driven Architecture and Apache Kafka Overview & Roadmap', category: 'Course Roadmap', test: (l) => /^Module 16 — Event-Driven Architecture/.test(l) },
  { id: 1, title: '1. Introduction to Event-Driven Architecture', category: 'Part 1 · Event-Driven Fundamentals', test: (l) => /^1\.\s+Introduction to Event-Driven Architecture/.test(l) },
  { id: 2, title: '2. Event-Based Communication', category: 'Part 1 · Event-Driven Fundamentals', test: (l) => /^2\.\s+Event-Based Communication/.test(l) },
  { id: 3, title: '3. Messaging Systems', category: 'Part 1 · Event-Driven Fundamentals', test: (l) => /^3\.\s+Messaging Systems/.test(l) },
  { id: 4, title: '4. Message Brokers and Queues', category: 'Part 1 · Event-Driven Fundamentals', test: (l) => /^4\.\s+Message Brokers and Queues/.test(l) },
  { id: 5, title: '5. Introduction to Apache Kafka', category: 'Part 2 · Apache Kafka Architecture', test: (l) => /^5\.\s+Introduction to Apache Kafka/.test(l) },
  { id: 6, title: '6. Kafka Brokers and Clusters', category: 'Part 2 · Apache Kafka Architecture', test: (l) => /^6\.\s+Kafka Brokers and Clusters/.test(l) },
  { id: 7, title: '7. Topics and Partitions', category: 'Part 2 · Apache Kafka Architecture', test: (l) => /^7\.\s+Topics and Partitions/.test(l) },
  { id: 8, title: '8. Producers and Consumers', category: 'Part 3 · Core Messaging Primitives', test: (l) => /^8\.\s+Producers and Consumers/.test(l) },
  { id: 9, title: '9. Consumer Groups', category: 'Part 3 · Core Messaging Primitives', test: (l) => /^9\.\s+Consumer Groups/.test(l) },
  { id: 10, title: '10. Offset Management', category: 'Part 3 · Core Messaging Primitives', test: (l) => /^10\.\s+Offset Management/.test(l) },
  { id: 11, title: '11. Message Ordering and Partition Keys', category: 'Part 4 · Guarantees & Fault Tolerance', test: (l) => /^11\.\s+Message Ordering and Partition Keys/.test(l) },
  { id: 12, title: '12. Replication and Fault Tolerance in Kafka', category: 'Part 4 · Guarantees & Fault Tolerance', test: (l) => /^12\.\s+Replication and Fault Tolerance in Kafka/.test(l) },
  { id: 13, title: '13. Kafka Retention Policies', category: 'Part 4 · Guarantees & Fault Tolerance', test: (l) => /^13\.\s+Kafka Retention Policies/.test(l) },
  { id: 14, title: '14. Producer Acknowledgements', category: 'Part 4 · Guarantees & Fault Tolerance', test: (l) => /^14\.\s+Producer Acknowledgements/.test(l) },
  { id: 15, title: '15. Delivery Semantics', category: 'Part 4 · Guarantees & Fault Tolerance', test: (l) => /^15\.\s+Delivery Semantics/.test(l) },
  { id: 16, title: '16. Schema Registry', category: 'Part 5 · Schema Governance & Integration', test: (l) => /^16\.\s+Schema Registry/.test(l) },
  { id: 17, title: '17. Avro and JSON Serialization', category: 'Part 5 · Schema Governance & Integration', test: (l) => /^17\.\s+Avro and JSON Serialization/.test(l) },
  { id: 18, title: '18. Kafka Connect', category: 'Part 5 · Schema Governance & Integration', test: (l) => /^18\.\s+Kafka Connect/.test(l) },
  { id: 19, title: '19. Kafka Connect CDC — Change Data Capture', category: 'Part 5 · Schema Governance & Integration', test: (l) => /^19\.\s+Kafka Connect CDC — Change Data Capture/.test(l) },
  { id: 20, title: '20. Dead-Letter Queues', category: 'Part 6 · Resiliency & Operations', test: (l) => /^20\.\s+Dead-Letter Queues/.test(l) },
  { id: 21, title: '21. Message Replay', category: 'Part 6 · Resiliency & Operations', test: (l) => /^21\.\s+Message Replay/.test(l) },
  { id: 22, title: '22. Kafka Security', category: 'Part 6 · Resiliency & Operations', test: (l) => /^22\.\s+Kafka Security/.test(l) },
  { id: 23, title: '23. Real-Time Event Ingestion Architecture', category: 'Part 7 · Production Ingestion Pipeline', test: (l) => /^23\.\s+Real-Time Event Ingestion Architecture/.test(l) },
  { id: 24, title: '24. Practical Kafka Laboratory — Set Up Kafka Locally', category: 'Part 8 · Hands-on Labs & Internals', test: (l) => /^24\.\s+Practical Kafka Laboratory — Set Up Kafka Locally/.test(l) },
  { id: 25, title: '25. Kafka Message Processing Internals', category: 'Part 8 · Hands-on Labs & Internals', test: (l) => /^25\.\s+Kafka Message Processing Internals/.test(l) },
  { id: 26, title: '26. Kafka Transactions and Exactly-Once Processing', category: 'Part 8 · Hands-on Labs & Internals', test: (l) => /^26\.\s+Kafka Transactions and Exactly-Once Processing/.test(l) },
  { id: 27, title: '27. Kafka Monitoring and Observability', category: 'Part 9 · Production Operations & Patterns', test: (l) => /^27\.\s+Kafka Monitoring and Observability/.test(l) },
  { id: 28, title: '28. Designing a Production Event-Driven Data Platform', category: 'Part 9 · Production Operations & Patterns', test: (l) => /^28\.\s+Designing a Production Event-Driven Data Platform/.test(l) },
  { id: 29, title: '29. Important Kafka Design Decisions', category: 'Part 9 · Production Operations & Patterns', test: (l) => /^29\.\s+Important Kafka Design Decisions/.test(l) },
  { id: 30, title: '30. Important Architectural Patterns Around Kafka', category: 'Part 9 · Production Operations & Patterns', test: (l) => /^30\.\s+Important Architectural Patterns Around Kafka/.test(l) },
  { id: 31, title: '31. End-to-End Capstone Project', category: 'Part 10 · Capstone & Best Practices', test: (l) => /^31\.\s+End-to-End Capstone Project/.test(l) },
  { id: 32, title: '32. Common Mistakes in Kafka and Event-Driven Systems', category: 'Part 10 · Capstone & Best Practices', test: (l) => /^32\.\s+Common Mistakes in Kafka and Event-Driven Systems/.test(l) },
  { id: 33, title: '33. Important Interview Questions and Answers', category: 'Part 10 · Capstone & Best Practices', test: (l) => /^33\.\s+Important Interview Questions and Answers/.test(l) },
  { id: 34, title: '34. Recommended Learning Resources', category: 'Part 11 · Reference & Next Steps', test: (l) => /^34\.\s+Recommended Learning Resources/.test(l) },
  { id: 35, title: '35. Final Revision — Module 16', category: 'Part 11 · Reference & Next Steps', test: (l) => /^35\.\s+Final Revision — Module 16/.test(l) },
  { id: 36, title: '36. How Module 16 Connects to Your Data Engineering Roadmap', category: 'Part 11 · Reference & Next Steps', test: (l) => /^36\.\s+How Module 16 Connects to Your Data Engineering Roadmap/.test(l) }
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

const knownTables = [
  { headers: ['Traditional work queue', 'Apache Kafka'], count: 6 },
  { headers: ['ZooKeeper architecture', 'KRaft architecture'], count: 5 },
  { headers: ['Producer', 'Consumer'], count: 6 },
  { headers: ['Model', 'Duplicates', 'Loss', 'Typical use'], count: 3 },
  { headers: ['Compatibility', 'Main requirement'], count: 4 },
  { headers: ['JSON', 'Avro'], count: 6 },
  { headers: ['Kafka Connect', 'Custom producer'], count: 5 },
  { headers: ['customer_id', 'name', 'city'], count: 2 },
  { headers: ['CDC', 'Batch ETL'], count: 5 },
  { headers: ['Batch ingestion', 'Real-time ingestion'], count: 5 },
  { headers: ['Idempotent producer', 'Kafka transactions'], count: 4 },
  { headers: ['Decision', 'Questions to consider'], count: 13 },
  { headers: ['Resource', 'What to learn'], count: 9 },
  { headers: ['Topic', 'What you should understand'], count: 30 }
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
          const rawCell = (lines[rowOffset + r * numCols + c] || '').trim();
          // Check if cell is a markdown link: e.g. [Link](url) or text with link
          let cellRender = escapeJSX(rawCell);
          const linkM = rawCell.match(/\[(.*?)\]\((https?:\/\/.*?)\)/);
          if (linkM) {
            const before = rawCell.substring(0, linkM.index);
            const linkText = linkM[1];
            const linkUrl = linkM[2];
            const after = rawCell.substring(linkM.index + linkM[0].length);
            cellRender = escapeJSX(before) + '<a href="' + linkUrl + '" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">' + escapeJSX(linkText) + '</a>' + escapeJSX(after);
          }
          html += '                  <td className="px-4 py-2.5 text-stone-700">' + cellRender + '</td>';
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

function isCodeOrStructure(line) {
  const trimmed = line.trim();
  return /^(import|from|def|class|with|for|if|elif|else|print|return|raise|while)\b/.test(trimmed) ||
         /^(\{\{|\{%|\{#|--\s+|#\s+)/.test(trimmed) ||
         /^(syntax\s*=|service\s+|message\s+|rpc\s+)/.test(trimmed) ||
         /^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|MERGE|EXPLAIN|COPY|GRANT|REVOKE|WITH)\b/i.test(trimmed) ||
         /^(python\s+|pip\s+|docker\s+|curl\s+|mkdir\s+|cd\s+|git\s+|\$env:)/.test(trimmed) ||
         /^kafka-(topics|consumer-groups|acls|configs|console-producer|console-consumer)\.sh\b/.test(trimmed) ||
         /^(confluent-kafka|requirements\.txt|producer\.py|consumer\.py|connector\.json|docker-compose\.yml)/.test(trimmed) ||
         /^(├──|└──|│)/.test(trimmed) ||
         (trimmed.includes(' | v ') || trimmed.includes(' | +') || trimmed.includes('───') || trimmed.includes('<---->') || trimmed.includes('---+---') || trimmed.includes('→ Order')) ||
         /^(Producer\s*\|\s*v|Main Topic\s*\|\s*v|Customer\s*\|\s*v|Order Service\s*\|\s*v|Operational Databases\s*\|\s*v|Order Workflow\s*\|\s*\+)/.test(trimmed) ||
         /^(Partition\s+\d+:|Offset\s+\d+\s+→)/.test(trimmed) ||
         /^(enable\.idempotence=|acks=|retention\.ms=|retention\.bytes=|cleanup\.policy=|auto\.offset\.reset=|bootstrap\.servers=|group\.id=|transactional\.id=|isolation\.level=)/.test(trimmed) ||
         /^(org\.apache\.kafka\.common\.security|sasl\.jaas\.config=|security\.protocol=|sasl\.mechanism=)/.test(trimmed) ||
         (trimmed.startsWith('{') && trimmed.endsWith('}') && trimmed.length > 15) ||
         (trimmed.startsWith('[') && trimmed.endsWith(']') && trimmed.length > 15) ||
         (trimmed.startsWith('"') && (trimmed.includes('":') || trimmed.includes('": ')));
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

    // Subheadings: e.g. 1.1 ... 1.2 ... or Lab / Step
    if (/^(\d+\.\d+(\.\d+)?|[A-Z]\.)\s+/.test(line) || line.startsWith('Step ') || line.startsWith('Lab ') || line.startsWith('Test ')) {
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

    // Numbered item: e.g. 1. Treating Kafka like a traditional queue.
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
  CheckCircle,
  Radio,
  Share2,
  Lock,
  RotateCcw
} from "lucide-react";

export default function DataEngineeringKafkaSections() {
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
  fileContent += `            ${escapeJSX(badge)}\n`;
  fileContent += `          </span>\n`;
  fileContent += `          <span className="text-xs font-mono text-stone-500">${escapeJSX(sec.category)}</span>\n`;
  fileContent += `        </div>\n`;
  fileContent += `        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">\n`;
  fileContent += `          ${escapeJSX(sec.title)}\n`;
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

const destFile = path.resolve(__dirname, '../src/Componets/DataEngineeringKafkaSections.jsx');
fs.writeFileSync(destFile, fileContent, 'utf8');
console.log('Successfully generated DataEngineeringKafkaSections.jsx! Size:', fileContent.length, 'bytes');
