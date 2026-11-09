// projectx/scripts/generate_m17_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../../m17_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 17: Stream Processing and Real-Time Analytics Overview & Roadmap', category: 'Course Roadmap', test: (l) => /^Module 17 — Stream Processing/.test(l) },
  { id: 1, title: '1. Introduction to Stream Processing', category: 'Part 1 · Foundations of Stream Processing', test: (l) => /^1\.\s+Introduction to Stream Processing/.test(l) },
  { id: 2, title: '2. Batch Processing vs Stream Processing', category: 'Part 1 · Foundations of Stream Processing', test: (l) => /^2\.\s+Batch Processing vs Stream Processing/.test(l) },
  { id: 3, title: '3. Bounded and Unbounded Datasets', category: 'Part 1 · Foundations of Stream Processing', test: (l) => /^3\.\s+Bounded and Unbounded Datasets/.test(l) },
  { id: 4, title: '4. Real-Time Processing Architecture', category: 'Part 1 · Foundations of Stream Processing', test: (l) => /^4\.\s+Real-Time Processing Architecture/.test(l) },
  { id: 5, title: '5. Event Time vs Processing Time', category: 'Part 2 · Time, Windows and Watermarks', test: (l) => /^5\.\s+Event Time vs Processing Time/.test(l) },
  { id: 6, title: '6. Windowing Concepts', category: 'Part 2 · Time, Windows and Watermarks', test: (l) => /^6\.\s+Windowing Concepts/.test(l) },
  { id: 7, title: '7. Tumbling Windows', category: 'Part 2 · Time, Windows and Watermarks', test: (l) => /^7\.\s+Tumbling Windows/.test(l) },
  { id: 8, title: '8. Sliding Windows', category: 'Part 2 · Time, Windows and Watermarks', test: (l) => /^8\.\s+Sliding Windows/.test(l) },
  { id: 9, title: '9. Session Windows', category: 'Part 2 · Time, Windows and Watermarks', test: (l) => /^9\.\s+Session Windows/.test(l) },
  { id: 10, title: '10. Watermarks', category: 'Part 2 · Time, Windows and Watermarks', test: (l) => /^10\.\s+Watermarks/.test(l) },
  { id: 11, title: '11. Out-of-Order Events', category: 'Part 2 · Time, Windows and Watermarks', test: (l) => /^11\.\s+Out-of-Order Events/.test(l) },
  { id: 12, title: '12. Late-Arriving Events', category: 'Part 2 · Time, Windows and Watermarks', test: (l) => /^12\.\s+Late-Arriving Events/.test(l) },
  { id: 13, title: '13. Stateful Stream Processing', category: 'Part 3 · Stateful Processing, Joins and Recovery', test: (l) => /^13\.\s+Stateful Stream Processing/.test(l) },
  { id: 14, title: '14. Stream Joins and Aggregations', category: 'Part 3 · Stateful Processing, Joins and Recovery', test: (l) => /^14\.\s+Stream Joins and Aggregations/.test(l) },
  { id: 15, title: '15. Checkpointing and Recovery', category: 'Part 3 · Stateful Processing, Joins and Recovery', test: (l) => /^15\.\s+Checkpointing and Recovery/.test(l) },
  { id: 16, title: '16. Exactly-Once Processing Concepts', category: 'Part 3 · Stateful Processing, Joins and Recovery', test: (l) => /^16\.\s+Exactly-Once Processing Concepts/.test(l) },
  { id: 17, title: '17. Apache Flink Architecture', category: 'Part 4 · Apache Flink and Spark Structured Streaming', test: (l) => /^17\.\s+Apache Flink Architecture/.test(l) },
  { id: 18, title: '18. Spark Structured Streaming', category: 'Part 4 · Apache Flink and Spark Structured Streaming', test: (l) => /^18\.\s+Spark Structured Streaming/.test(l) },
  { id: 19, title: '19. Apache Flink vs Spark Structured Streaming', category: 'Part 4 · Apache Flink and Spark Structured Streaming', test: (l) => /^19\.\s+Apache Flink vs Spark Structured Streaming/.test(l) },
  { id: 20, title: '20. Streaming Data Pipelines', category: 'Part 5 · Building Streaming Data Pipelines', test: (l) => /^20\.\s+Streaming Data Pipelines/.test(l) },
  { id: 21, title: '21. Real-Time Analytics Dashboards', category: 'Part 5 · Building Streaming Data Pipelines', test: (l) => /^21\.\s+Real-Time Analytics Dashboards/.test(l) },
  { id: 22, title: '22. Building an End-to-End Real-Time Streaming Application', category: 'Part 6 · End-to-End Streaming Application', test: (l) => /^22\.\s+Building an End-to-End/.test(l) },
  { id: 23, title: '23. Practical Laboratory 1 — Implement Different Window Types', category: 'Part 7 · Practical Laboratories', test: (l) => /^23\.\s+Practical Laboratory 1/.test(l) },
  { id: 24, title: '24. Practical Laboratory 2 — Event Time and Watermarks', category: 'Part 7 · Practical Laboratories', test: (l) => /^24\.\s+Practical Laboratory 2/.test(l) },
  { id: 25, title: '25. Practical Laboratory 3 — Build Stateful Transaction Monitoring', category: 'Part 7 · Practical Laboratories', test: (l) => /^25\.\s+Practical Laboratory 3/.test(l) },
  { id: 26, title: '26. Practical Laboratory 4 — Apache Flink Streaming Application', category: 'Part 7 · Practical Laboratories', test: (l) => /^26\.\s+Practical Laboratory 4/.test(l) },
  { id: 27, title: '27. Practical Laboratory 5 — End-to-End Streaming Capstone', category: 'Part 7 · Practical Laboratories', test: (l) => /^27\.\s+Practical Laboratory 5/.test(l) },
  { id: 28, title: '28. Common Mistakes in Stream Processing (15 Production Pitfalls)', category: 'Part 8 · Common Mistakes in Stream Processing', test: (l) => /^Part 8 — Common Mistakes/.test(l) },
  { id: 29, title: '29. Important Interview Questions and Answers (35 Q&As)', category: 'Part 9 · Interview Questions & Answers', test: (l) => /^Part 9 — Important Interview Questions/.test(l) },
  { id: 30, title: '30. Recommended Learning Resources', category: 'Part 10 · Recommended Learning Resources', test: (l) => /^Part 10 — Recommended Learning Resources/.test(l) },
  { id: 31, title: '31. Final Revision — Module 17 (26-Topic Matrix)', category: 'Synthesis · Comprehensive Revision', test: (l) => /^37\.\s+Final Revision/.test(l) },
  { id: 32, title: '32. How Module 17 Connects to Your Data Engineering Roadmap', category: 'Synthesis · Curriculum Progression', test: (l) => /^38\.\s+How Module 17 Connects/.test(l) }
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
  { headers: ['Order', 'Amount', 'Event time'], count: 4 },
  { headers: ['Industry', 'Streaming application'], count: 8 },
  { headers: ['Feature', 'Batch processing', 'Stream processing'], count: 8 },
  { headers: ['Lambda', 'Kappa'], count: 6 },
  { headers: ['Bounded dataset', 'Unbounded dataset'], count: 5 },
  { headers: ['Stage', 'Latency'], count: 6 },
  { headers: ['Activity', 'Time'], count: 3 },
  { headers: ['Requirement', 'Suitable time'], count: 6 },
  { headers: ['Time window', 'Orders'], count: 2 },
  { headers: ['Order', 'Event time', 'Amount'], count: 5 },
  { headers: ['Window', 'Revenue'], count: 2 },
  { headers: ['Feature', 'Tumbling', 'Sliding', 'Session'], count: 5 },
  { headers: ['Arrival order', 'Event time', 'Amount'], count: 4 },
  { headers: ['Window', 'Watermark'], count: 5 },
  { headers: ['Out-of-order event', 'Late event'], count: 4 },
  { headers: ['Customer', 'Transaction count'], count: 2 },
  { headers: ['Customer', 'Amount'], count: 5 },
  { headers: ['Customer', 'Total spending'], count: 2 },
  { headers: ['Order ID', 'Customer ID', 'Payment ID'], count: 2 },
  { headers: ['Application', 'Streams being joined'], count: 6 },
  { headers: ['Guarantee', 'Meaning', 'Main concern'], count: 3 },
  { headers: ['order_id', 'customer_id', 'amount'], count: 3 },
  { headers: ['Legacy Spark Streaming', 'Structured Streaming'], count: 4 },
  { headers: ['Mode', 'Behavior'], count: 3 },
  { headers: ['Feature', 'Apache Flink', 'Spark Structured Streaming'], count: 9 },
  { headers: ['Validation', 'Example'], count: 7 },
  { headers: ['Minute', 'Orders', 'Revenue'], count: 4 },
  { headers: ['Technology', 'Role'], count: 8 },
  { headers: ['Product', 'Window', 'Orders', 'Revenue'], count: 3 },
  { headers: ['Window', 'Revenue'], count: 4 },
  { headers: ['Event', 'Event time', 'Arrival time'], count: 5 },
  { headers: ['Component', 'Technology'], count: 11 },
  { headers: ['Metric', 'Target'], count: 6 },
  { headers: ['Test', 'Workers', 'Input events'], count: 4 },
  { headers: ['Technology / Resource', 'What to learn'], count: 10 },
  { headers: ['Topic', 'What you should understand'], count: 26 }
];

function tryRenderTable(lines, i) {
  for (const kt of knownTables) {
    const numCols = kt.headers.length;
    let matches = true;
    for (let c = 0; c < numCols; c++) {
      if (!lines[i + c] || lines[i + c].trim().toLowerCase() !== kt.headers[c].toLowerCase()) {
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
  return /^(import|from|def|class|with|for|if|elif|else|print|return|raise|while|pass)\b/.test(trimmed) ||
         /^(\{\{|\{%|\{#|--\s+|#\s+)/.test(trimmed) ||
         /^(syntax\s*=|service\s+|message\s+|rpc\s+)/.test(trimmed) ||
         /^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|MERGE|EXPLAIN|COPY|GRANT|REVOKE|WITH|PRIMARY\s+KEY|WATERMARK\s+FOR)\b/i.test(trimmed) ||
         /^(python\s+|pip\s+|docker\s+|curl\s+|mkdir\s+|cd\s+|git\s+|\$env:)/.test(trimmed) ||
         /^(orders_producer\.py|stream_processor\.py|order_producer\.py|user_id,event_type)/.test(trimmed) ||
         /^(├──|└──|│)/.test(trimmed) ||
         (trimmed.includes(' | v ') || trimmed.includes(' | +') || trimmed.includes('───') || trimmed.includes('<---->') || trimmed.includes('---+---') || trimmed.includes('──┐') || trimmed.includes('──┤') || trimmed.includes('──┘')) ||
         /^(Data Sources|Transactions Throughout|Event Sources|Kafka Ingestion|Stream Processing|Valid Events|Invalid Events|E-commerce Order|Customer 101\s+10:)/.test(trimmed) ||
         /^(10:00:\d+\s+→|Window\s+\d+:|Session\s+\d+|Session 1|Session 2|Session 3)/.test(trimmed) ||
         /^(stream\s*\.keyBy|orders\s*\.printSchema|spark\s*=|\.withWatermark|\.groupBy|\.agg\(|\.writeStream|\.format\(|\.option\(|\.start\(|\.load\()/i.test(trimmed) ||
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

    // Subheadings: e.g. 1.1 ... 1.2 ... or Lab / Step / Task
    if (/^(\d+\.\d+(\.\d+)?|[A-Z]\.)\s+/.test(line) || line.startsWith('Step ') || line.startsWith('Task ') || line.startsWith('Strategy ') || line.startsWith('Exercises') || line.startsWith('Functional requirements') || line.startsWith('Expected dashboard') || line.startsWith('Performance experiments') || line.startsWith('Required event streams') || line.startsWith('Technology stack') || line.startsWith('Revenue metrics') || line.startsWith('Transaction metrics') || line.startsWith('Operational metrics')) {
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

    // Numbered item: e.g. 1. Confusing event time and processing time.
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
  RotateCcw,
  Sparkles,
  Flame,
  ArrowDownRight
} from "lucide-react";

export default function DataEngineeringStreamProcessingSections() {
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
  fileContent += `          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">\n`;
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

const destFile = path.resolve(__dirname, '../src/Componets/DataEngineeringStreamProcessingSections.jsx');
fs.writeFileSync(destFile, fileContent, 'utf8');
console.log('Successfully generated DataEngineeringStreamProcessingSections.jsx! Size:', fileContent.length, 'bytes');
