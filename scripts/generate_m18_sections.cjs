// projectx/scripts/generate_m18_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../m18_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

// Strip wrapper tags if any
content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 18: Cloud Data Engineering and Cloud Platforms Overview & Roadmap', category: 'Course Roadmap', test: (l) => /^Module 18 — Cloud Data Engineering/.test(l) },
  { id: 1, title: '1. Introduction to Cloud Computing', category: 'Part 1 · Cloud Fundamentals & Security', test: (l) => /^1\.\s+Introduction to Cloud Computing/.test(l) },
  { id: 2, title: '2. Cloud Computing Service Models', category: 'Part 1 · Cloud Fundamentals & Security', test: (l) => /^2\.\s+Cloud Computing Service Models/.test(l) },
  { id: 3, title: '3. Cloud Infrastructure Architecture', category: 'Part 1 · Cloud Fundamentals & Security', test: (l) => /^3\.\s+Cloud Infrastructure Architecture/.test(l) },
  { id: 4, title: '4. Identity and Access Management (IAM)', category: 'Part 1 · Cloud Fundamentals & Security', test: (l) => /^4\.\s+Identity and Access Management/.test(l) },
  { id: 5, title: '5. Cloud Security Fundamentals', category: 'Part 1 · Cloud Fundamentals & Security', test: (l) => /^5\.\s+Cloud Security Fundamentals/.test(l) },
  { id: 6, title: '6. AWS Data Engineering Ecosystem', category: 'Part 2 · Storage & Managed ETL', test: (l) => /^6\.\s+AWS Data Engineering Ecosystem/.test(l) },
  { id: 7, title: '7. Amazon S3 — Simple Storage Service', category: 'Part 2 · Storage & Managed ETL', test: (l) => /^7\.\s+Amazon S3/.test(l) },
  { id: 8, title: '8. AWS Glue — Cloud ETL and Data Integration', category: 'Part 2 · Storage & Managed ETL', test: (l) => /^8\.\s+AWS Glue/.test(l) },
  { id: 9, title: '9. Amazon Athena — Serverless SQL Analytics', category: 'Part 3 · Analytics, Warehousing & Big Data', test: (l) => /^9\.\s+Amazon Athena/.test(l) },
  { id: 10, title: '10. Amazon Redshift — Cloud Data Warehouse', category: 'Part 3 · Analytics, Warehousing & Big Data', test: (l) => /^10\.\s+Amazon Redshift/.test(l) },
  { id: 11, title: '11. Amazon EMR — Big Data Processing', category: 'Part 3 · Analytics, Warehousing & Big Data', test: (l) => /^11\.\s+Amazon EMR/.test(l) },
  { id: 12, title: '12. Amazon Kinesis — Real-Time Data Ingestion', category: 'Part 4 · Real-Time Streaming & Databases', test: (l) => /^12\.\s+Amazon Kinesis/.test(l) },
  { id: 13, title: '13. Managed Database Services', category: 'Part 4 · Real-Time Streaming & Databases', test: (l) => /^13\.\s+Managed Database Services/.test(l) },
  { id: 14, title: '14. Cloud ETL Architecture', category: 'Part 5 · Cloud Architectures & Serverless', test: (l) => /^14\.\s+Cloud ETL Architecture/.test(l) },
  { id: 15, title: '15. Serverless Data Processing', category: 'Part 5 · Cloud Architectures & Serverless', test: (l) => /^15\.\s+Serverless Data Processing/.test(l) },
  { id: 16, title: '16. Cloud Data Warehouses', category: 'Part 5 · Cloud Architectures & Serverless', test: (l) => /^16\.\s+Cloud Data Warehouses/.test(l) },
  { id: 17, title: '17. Cost-Aware Cloud Architectures', category: 'Part 5 · Cloud Architectures & Serverless', test: (l) => /^17\.\s+Cost-Aware Cloud Architectures/.test(l) },
  { id: 18, title: '18. Mapping Equivalent Architectures to Azure and Google Cloud', category: 'Part 6 · Multi-Cloud & Practical Project', test: (l) => /^18\.\s+Mapping Equivalent Architectures/.test(l) },
  { id: 19, title: '19. Practical Project — Build an AWS E-Commerce Data Platform', category: 'Part 6 · Multi-Cloud & Practical Project', test: (l) => /^19\.\s+Practical Project/.test(l) },
  { id: 20, title: '20. Advanced Concepts You Should Understand', category: 'Part 6 · Multi-Cloud & Practical Project', test: (l) => /^20\.\s+Advanced Concepts You Should Understand/.test(l) },
  { id: 21, title: '21. Module 18 — Important Interview Questions', category: 'Part 7 · Interview Preparation & Assignments', test: (l) => /^21\.\s+Module 18 — Important Interview Questions/.test(l) },
  { id: 22, title: '22. Practical Assignments', category: 'Part 7 · Interview Preparation & Assignments', test: (l) => /^22\.\s+Practical Assignments/.test(l) },
  { id: 23, title: '23. Recommended Learning Resources', category: 'Part 7 · Interview Preparation & Assignments', test: (l) => /^23\.\s+Recommended Learning Resources/.test(l) },
  { id: 24, title: '24. Final Module Summary', category: 'Part 7 · Interview Preparation & Assignments', test: (l) => /^24\.\s+Final Module Summary/.test(l) }
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
  return '          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">\n' +
         '            <pre className="overflow-x-auto [scrollbar-width:thin]">\n' +
         '              <code>{`' + sanitized + '`}</code>\n' +
         '            </pre>\n' +
         '          </div>';
}

function renderArchitectureFlow(flowText) {
  // e.g. Start | v Extract Customer Data | v Extract Order Data ...
  const parts = flowText.split('|').map(s => s.trim()).filter(Boolean);
  const steps = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === 'v' || part === '->' || part === '-->') continue;
    if (part.startsWith('v ')) {
      steps.push(part.substring(2).trim());
    } else {
      steps.push(part);
    }
  }

  if (steps.length <= 1) {
    return renderCodeBlock(flowText);
  }

  let html = '          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">\n';
  html += '            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">\n';
  html += '              <ArrowRight size={13} className="text-orange-400" /> Architectural Data Pipeline Flow\n';
  html += '            </div>\n';
  html += '            <div className="flex flex-wrap items-center gap-2">\n';
  for (let j = 0; j < steps.length; j++) {
    html += '              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">\n';
    html += '                ' + escapeJSX(steps[j]) + '\n';
    html += '              </div>\n';
    if (j < steps.length - 1) {
      html += '              <span className="text-orange-400 font-bold text-xs">→</span>\n';
    }
  }
  html += '            </div>\n';
  html += '          </div>';
  return html;
}

function renderLinkCard(text, url) {
  return '          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">\n' +
         '            <span className="font-semibold text-stone-800 truncate">' + escapeJSX(text) + '</span>\n' +
         '            <a href="' + url + '" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">\n' +
         '              <span>Reference Documentation</span>\n' +
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
  { headers: ['Responsibility', 'IaaS', 'PaaS', 'SaaS'], count: 6 },
  { headers: ['Requirement', 'Service model', 'Example'], count: 3 },
  { headers: ['Feature', 'Security Group', 'Network ACL'], count: 4 },
  { headers: ['Layer', 'AWS service', 'Responsibility'], count: 10 },
  { headers: ['Feature', 'File storage', 'Object storage'], count: 5 },
  { headers: ['Storage class', 'Typical purpose'], count: 7 },
  { headers: ['Feature', 'Data Lake', 'Data Warehouse'], count: 5 },
  { headers: ['Feature', 'Athena', 'Redshift'], count: 6 },
  { headers: ['Feature', 'AWS Glue', 'Amazon EMR'], count: 7 },
  { headers: ['Feature', 'Batch', 'Streaming'], count: 4 },
  { headers: ['Service', 'Primary purpose'], count: 6 },
  { headers: ['Service', 'Serverless capability'], count: 6 },
  { headers: ['Capability', 'AWS', 'Microsoft Azure', 'Google Cloud'], count: 13 },
  { headers: ['Area', 'What you should be able to do'], count: 14 }
];

function tryParseTable(lines, startIdx) {
  for (const kt of knownTables) {
    const colCount = kt.headers.length;
    let match = true;
    for (let c = 0; c < colCount; c++) {
      if (!lines[startIdx + c] || lines[startIdx + c].trim().toLowerCase() !== kt.headers[c].toLowerCase()) {
        match = false;
        break;
      }
    }
    if (match) {
      const rows = [];
      let cursor = startIdx + colCount;
      for (let r = 0; r < kt.count; r++) {
        const row = [];
        for (let c = 0; c < colCount; c++) {
          if (cursor < lines.length) {
            row.push(lines[cursor].trim());
            cursor++;
          } else {
            row.push('');
          }
        }
        rows.push(row);
      }
      return {
        headers: kt.headers,
        rows: rows,
        nextIdx: cursor
      };
    }
  }
  return null;
}

function formatCodeIfFlattened(text) {
  // Format known flattened python/json/sql scripts into clean multi-line snippets
  if (text.includes('from pyspark.sql import SparkSession') && text.includes('OrdersETL')) {
    return `from pyspark.sql import SparkSession
from pyspark.sql.functions import col

spark = SparkSession.builder \\
    .appName("OrdersETL") \\
    .getOrCreate()

# Read raw order data from S3 landing/raw bucket
orders = spark.read.csv(
    "s3://company-lake/raw/orders/",
    header=True,
    inferSchema=True
)

# Keep completed orders only
clean_orders = orders.filter(
    col("status") == "completed"
)

# Remove invalid null records
clean_orders = clean_orders.filter(
    col("amount").isNotNull()
)

# Write curated partitioned Parquet output
clean_orders.write \\
    .mode("overwrite") \\
    .parquet("s3://company-lake/curated/orders/")

spark.stop()`;
  }

  if (text.includes('from pyspark.sql import SparkSession') && text.includes('CustomerActivity')) {
    return `from pyspark.sql import SparkSession
from pyspark.sql.functions import count, col

spark = SparkSession.builder \\
    .appName("CustomerActivity") \\
    .getOrCreate()

# Read raw customer events from S3
events = spark.read.parquet("s3://company-lake/raw/events/")

# Remove duplicate events
clean_events = events.dropDuplicates()

# Calculate aggregated product views
product_views = clean_events \\
    .groupBy("product_id") \\
    .agg(count("*").alias("total_views"))

# Write aggregated results back to S3 curated layer
product_views.write \\
    .mode("overwrite") \\
    .parquet("s3://company-lake/curated/product_views/")

spark.stop()`;
  }

  if (text.includes('"Version": "2012-10-17"') && text.includes('s3:GetObject')) {
    return `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": "arn:aws:s3:::company-raw-data/*"
    }
  ]
}`;
  }

  if (text.startsWith('{') && text.endsWith('}')) {
    try {
      const parsed = JSON.parse(text);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      return text;
    }
  }

  return text;
}

function processSectionLines(rawLines) {
  const elements = [];
  let i = 0;

  while (i < rawLines.length) {
    const rawLine = rawLines[i];
    const line = rawLine.trim();

    if (!line) {
      i++;
      continue;
    }

    // Check if line is a table
    const tableMatch = tryParseTable(rawLines, i);
    if (tableMatch) {
      let tblHtml = '          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">\n';
      tblHtml += '            <table className="w-full text-left text-xs border-collapse">\n';
      tblHtml += '              <thead>\n';
      tblHtml += '                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">\n';
      tableMatch.headers.forEach(h => {
        tblHtml += '                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">' + escapeJSX(h) + '</th>\n';
      });
      tblHtml += '                </tr>\n';
      tblHtml += '              </thead>\n';
      tblHtml += '              <tbody className="divide-y divide-stone-100 text-stone-700">\n';
      tableMatch.rows.forEach((row, rIdx) => {
        const bg = rIdx % 2 === 0 ? 'bg-white' : 'bg-stone-50/50';
        tblHtml += '                <tr className="' + bg + ' hover:bg-orange-50/40 transition-colors">\n';
        row.forEach((cell, cIdx) => {
          const font = cIdx === 0 ? 'font-medium text-stone-900' : 'text-stone-600';
          tblHtml += '                  <td className="py-2.5 px-3.5 leading-relaxed ' + font + '">' + escapeJSX(cell) + '</td>\n';
        });
        tblHtml += '                </tr>\n';
      });
      tblHtml += '              </tbody>\n';
      tblHtml += '            </table>\n';
      tblHtml += '          </div>';
      elements.push(tblHtml);
      i = tableMatch.nextIdx;
      continue;
    }

    // Markdown link
    const linkObj = isMarkdownLink(line);
    if (linkObj) {
      elements.push(renderLinkCard(linkObj.text, linkObj.url));
      i++;
      continue;
    }

    // Architecture flow diagram check (contains | v or | ---- | v)
    if ((line.includes('| v') || line.includes('| ----') || line.includes('| -----------------')) && !line.startsWith('{')) {
      elements.push(renderArchitectureFlow(line));
      i++;
      continue;
    }

    // Code block check
    if (line.startsWith('SELECT ') || line.startsWith('CREATE EXTERNAL TABLE') || line.startsWith('from pyspark.sql') || line.startsWith('{ "Version"') || (line.startsWith('{') && line.endsWith('}'))) {
      elements.push(renderCodeBlock(formatCodeIfFlattened(line)));
      i++;
      continue;
    }

    // Subsection headings
    if (/^\d+\.\d+\s+/.test(line)) {
      elements.push(
        '          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">\n' +
        '            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>\n' +
        '            <span>' + escapeJSX(line) + '</span>\n' +
        '          </h3>'
      );
      i++;
      continue;
    }

    // Sub-sub headings or bold lead-in tags (e.g. "Step 1 — Create an S3 Data Lake", "AWS implementation", "OLTP vs OLAP", "Question 1:", "Assignment 1:")
    if (/^(Step\s+\d+|Question\s+\d+|Assignment\s+\d+|AWS\s+implementation|Microsoft\s+Azure\s+implementation|Google\s+Cloud\s+implementation|Traditional\s+server-based|Serverless\s+architecture|OLTP|OLAP|Athena\s+vs\s+Redshift|Athena\s+vs\s+Glue|EMR\s+vs\s+AWS\s+Glue|Security\s+Group\s+vs|Data\s+engineering\s+example|Example|Important|Major\s+Hands-on\s+Project|Project\s+Objective)/i.test(line)) {
      elements.push(
        '          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">\n' +
        '            <span className="text-orange-600">▸</span>\n' +
        '            <span>' + escapeJSX(line) + '</span>\n' +
        '          </h4>'
      );
      i++;
      continue;
    }

    // Bullet points or numbered lists
    if (/^([•\-\*]|\d+\.)\s+/.test(line)) {
      elements.push(
        '          <li className="text-xs sm:text-sm text-stone-700 leading-relaxed ml-4 list-disc pl-1 my-1">\n' +
        '            ' + escapeJSX(line.replace(/^([•\-\*]|\d+\.)\s+/, '')) + '\n' +
        '          </li>'
      );
      i++;
      continue;
    }

    // Short phrase ending with colon or question mark
    if (line.endsWith(':') && line.length < 80) {
      elements.push(
        '          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">\n' +
        '            ' + escapeJSX(line) + '\n' +
        '          </p>'
      );
      i++;
      continue;
    }

    // Regular paragraphs
    elements.push(
      '          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">\n' +
      '            ' + escapeJSX(line) + '\n' +
      '          </p>'
    );
    i++;
  }

  return elements.join('\n');
}

console.log('Writing DataEngineeringCloudSections.jsx with', buckets.length, 'sections...');

let outputJsx = `// projectx/src/Componets/DataEngineeringCloudSections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, ChevronRight, Layers, Database, Shield, Zap, Cloud, Cpu, DollarSign, Activity } from 'lucide-react';

export const cloudSectionsMeta = [
${sectionHeaders.map(sh => `  { id: ${sh.id}, title: ${JSON.stringify(sh.title)}, category: ${JSON.stringify(sh.category)} }`).join(',\n')}
];

export const CloudSection = memo(function CloudSection({ sectionId }) {
  switch (sectionId) {
`;

buckets.forEach(b => {
  outputJsx += `    case ${b.header.id}:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              ${escapeJSX(b.header.category)}
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              ${escapeJSX(b.header.title)}
            </h2>
          </div>
${processSectionLines(b.lines)}
        </div>
      );
`;
});

outputJsx += `    default:
      return (
        <div className="p-8 text-center text-stone-500 font-mono text-sm">
          Select a section from the syllabus to view the specification.
        </div>
      );
  }
});

export default CloudSection;
`;

const targetPath = path.resolve(__dirname, '../src/Componets/DataEngineeringCloudSections.jsx');
fs.writeFileSync(targetPath, outputJsx, 'utf8');
console.log('Successfully generated DataEngineeringCloudSections.jsx! Size:', outputJsx.length);
