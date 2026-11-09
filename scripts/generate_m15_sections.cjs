// projectx/scripts/generate_m15_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m15_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 15: Distributed Systems for Data Engineers Overview & Roadmap', category: 'Course Roadmap', test: (l) => /^Module 15 — Distributed Systems/.test(l) },
  { id: 1, title: '1. Introduction to Distributed Systems', category: 'Part 1 · Foundations & Architecture', test: (l) => /^1\. Introduction to Distributed Systems/.test(l) },
  { id: 2, title: '2. Distributed Computing Architecture', category: 'Part 1 · Client-Server, Multi-Tier & Microservices', test: (l) => /^2\. Distributed Computing Architecture/.test(l) },
  { id: 3, title: '3. Distributed Processes and Communication', category: 'Part 2 · IPC, Sync vs Async, Latency & Throughput', test: (l) => /^3\. Distributed Processes and Communication/.test(l) },
  { id: 4, title: '4. Client-Server Architecture and Remote Procedure Calls (RPC)', category: 'Part 2 · gRPC, Protobuf & REST Differences', test: (l) => /^4\. Client-Server Architecture and Remote Procedure Calls/.test(l) },
  { id: 5, title: '5. Network Communication and Serialization', category: 'Part 3 · JSON, Avro, Protobuf, Parquet & TCP/UDP', test: (l) => /^5\. Network Communication and Serialization/.test(l) },
  { id: 6, title: '6. Distributed Storage Systems', category: 'Part 3 · HDFS, S3 Object Storage & Distributed DBs', test: (l) => /^6\. Distributed Storage Systems/.test(l) },
  { id: 7, title: '7. Data Partitioning', category: 'Part 4 · Range, Hash, List, Sharding & Skew Management', test: (l) => /^7\. Data Partitioning/.test(l) },
  { id: 8, title: '8. Data Replication', category: 'Part 4 · Sync vs Async, Replication Factor & Backups', test: (l) => /^8\. Data Replication/.test(l) },
  { id: 9, title: '9. Leader and Follower Architecture', category: 'Part 5 · Primary-Replica, Failover & Split-Brain', test: (l) => /^9\. Leader and Follower Architecture/.test(l) },
  { id: 10, title: '10. Consistency Models', category: 'Part 5 · Strong, Eventual, Read-Your-Writes & Monotonic', test: (l) => /^10\. Consistency Models/.test(l) },
  { id: 11, title: '11. Strong Consistency and Eventual Consistency in Practice', category: 'Part 5 · Practical Business Trade-offs', test: (l) => /^11\. Strong Consistency and Eventual Consistency in Practice/.test(l) },
  { id: 12, title: '12. CAP Theorem', category: 'Part 6 · Consistency, Availability, Partition Tolerance & PACELC', test: (l) => /^12\. CAP Theorem/.test(l) },
  { id: 13, title: '13. Quorum-Based Systems', category: 'Part 6 · Quorum Formula (R+W>N), Majority Voting & Cassandra', test: (l) => /^13\. Quorum-Based Systems/.test(l) },
  { id: 14, title: '14. Fault Tolerance', category: 'Part 7 · Checkpointing, Redundancy & High Availability', test: (l) => /^14\. Fault Tolerance/.test(l) },
  { id: 15, title: '15. Failure Detection', category: 'Part 7 · Heartbeats, Adaptive Timeouts & Liveness Checks', test: (l) => /^15\. Failure Detection/.test(l) },
  { id: 16, title: '16. Consensus Fundamentals', category: 'Part 8 · Agreement, Raft Protocol & Paxos Comparison', test: (l) => /^16\. Consensus Fundamentals/.test(l) },
  { id: 17, title: '17. Distributed Coordination', category: 'Part 8 · Distributed Locks, Leases, Fencing Tokens & etcd', test: (l) => /^17\. Distributed Coordination/.test(l) },
  { id: 18, title: '18. Retry Mechanisms and Idempotency', category: 'Part 9 · Exponential Backoff, Jitter & Upserts', test: (l) => /^18\. Retry Mechanisms and Idempotency/.test(l) },
  { id: 19, title: '19. Backpressure', category: 'Part 9 · Flow Control, Buffering & Kafka Consumer Lag', test: (l) => /^19\. Backpressure/.test(l) },
  { id: 20, title: '20. Message Delivery Guarantees', category: 'Part 10 · At-Most-Once, At-Least-Once & Exactly-Once', test: (l) => /^20\. Message Delivery Guarantees/.test(l) },
  { id: 21, title: '21. Distributed System Reliability', category: 'Part 10 · 99.999% Nines, Circuit Breakers, RPO/RTO & SLAs', test: (l) => /^21\. Distributed System Reliability/.test(l) },
  { id: 22, title: '22. Putting Everything Together: Real-World Distributed Data Engineering Architecture', category: 'Part 11 · Complete Enterprise Kafka & Stream Pipeline', test: (l) => /^22\. Putting Everything Together/.test(l) },
  { id: 23, title: '23. Practical Laboratory — Distributed Systems', category: 'Labs · 4 Hands-On Distributed Systems Laboratories', test: (l) => /^23\. Practical Laboratory/.test(l) },
  { id: 24, title: '24. Common Mistakes in Distributed Systems', category: 'Architecture · 15 Production Fallacies & Pitfalls', test: (l) => /^24\. Common Mistakes in Distributed Systems/.test(l) },
  { id: 25, title: '25. Important Interview Questions and Answers', category: 'Interview · 30 Core Questions & System Design Scenarios', test: (l) => /^25\. Important Interview Questions and Answers/.test(l) },
  { id: 26, title: '26. Recommended Learning Resources', category: 'Reference · Documentation, Standards & Formal Papers', test: (l) => /^26\. Recommended Learning Resources/.test(l) },
  { id: 27, title: '27. Final Revision — Module 15', category: 'Revision · Comprehensive Distributed Systems Matrix', test: (l) => /^27\. Final Revision/.test(l) },
  { id: 28, title: '28. How Module 15 Connects to Other Data Engineering Modules', category: 'Synthesis · Progression to Kafka, Spark & Data Lakehouses', test: (l) => /^28\. How Module 15 Connects/.test(l) }
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
         /^(syntax\s*=|service\s+|message\s+|rpc\s+)/.test(trimmed) ||
         /^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|MERGE|EXPLAIN|COPY|GRANT|REVOKE|WITH|PARTITION\s+BY)\b/i.test(trimmed) ||
         /^(python\s+|pip\s+|mkdir\s+|cd\s+|git\s+|\$env:)/.test(trimmed) ||
         /^(distributed-lab\/|data\/|results\/|├──|└──|│)/.test(trimmed) ||
         /^(Single Computer|Presentation Layer|Application Layer|Data Layer|NameNode|DataNode|orders\.parquet|large_file\.csv|Orders Table|Customers Table|Partition 1|Shard Router|Leader Node|Follower A|CLOSED|OPEN|HALF-OPEN|Python Event Generator|Client Application|Client Stub|Server Stub|Remote Service)/.test(trimmed) ||
         (trimmed.includes(' | v ') || trimmed.includes(' | +') || trimmed.includes('───') || trimmed.includes('<---->') || trimmed.includes('---+---')) ||
         (trimmed.startsWith('{') && trimmed.endsWith('}') && trimmed.length > 20) ||
         (trimmed.startsWith('<') && trimmed.endsWith('>') && trimmed.includes('</'));
}

// All 33 tables in Module 15
const knownTables = [
  { headers: ['Node', 'Assigned records'], count: 4 },
  { headers: ['Workload', 'Distributed system requirement'], count: 7 },
  { headers: ['Worker', 'Assigned workload'], count: 4 },
  { headers: ['Vertical scaling', 'Horizontal scaling'], count: 5 },
  { headers: ['Synchronous', 'Asynchronous'], count: 6 },
  { headers: ['Metric', 'Meaning', 'Example'], count: 4 },
  { headers: ['RPC', 'REST'], count: 6 },
  { headers: ['Format', 'Representation', 'Common use'], count: 5 },
  { headers: ['TCP', 'UDP'], count: 5 },
  { headers: ['Storage node', 'Assigned data'], count: 6 },
  { headers: ['customer_id', 'name', 'email', 'address', 'purchase_history'], count: 2 },
  { headers: ['customer_id', 'name', 'email'], count: 2 },
  { headers: ['customer_id', 'address', 'purchase_history'], count: 2 },
  { headers: ['Distributed storage', 'Distributed computing'], count: 4 },
  { headers: ['Synchronous', 'Asynchronous'], count: 5 },
  { headers: ['Replication', 'Backup'], count: 5 },
  { headers: ['Consistency model', 'Main guarantee'], count: 5 },
  { headers: ['Business operation', 'Typical consistency preference'], count: 6 },
  { headers: ['Replica', 'Stored value'], count: 3 },
  { headers: ['Configuration', 'Typical effect'], count: 4 },
  { headers: ['Fault tolerance', 'High availability'], count: 4 },
  { headers: ['Raft', 'Paxos'], count: 4 },
  { headers: ['Attempt', 'Delay'], count: 5 },
  { headers: ['Consumer workers', 'Capacity per worker', 'Combined capacity'], count: 4 },
  { headers: ['Metric', 'Value'], count: 3 },
  { headers: ['Backpressure', 'Buffering'], count: 5 },
  { headers: ['Guarantee', 'Delivery behavior', 'Duplicate risk', 'Message loss risk'], count: 3 },
  { headers: ['Availability', 'Approximate downtime per 30 days'], count: 5 },
  { headers: ['Concept', 'Application in the architecture'], count: 18 },
  { headers: ['Component', 'Technology'], count: 8 },
  { headers: ['Experiment', 'Consumers', 'Events'], count: 4 },
  { headers: ['Technology / Resource', 'What to study'], count: 9 },
  { headers: ['Topic', 'What you should understand'], count: 21 }
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

    // Numbered item: e.g. 1. Assuming that a distributed...
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

export default function DataEngineeringDistributedSections() {
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

const destFile = path.resolve(__dirname, '../src/Componets/DataEngineeringDistributedSections.jsx');
fs.writeFileSync(destFile, fileContent, 'utf8');
console.log('Successfully generated DataEngineeringDistributedSections.jsx! Size:', fileContent.length, 'bytes');
