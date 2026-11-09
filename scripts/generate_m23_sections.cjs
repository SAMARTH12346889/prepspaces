// projectx/scripts/generate_m23_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../m23_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

// Strip wrapper tags if any
content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 23: Data Engineering System Design and Final Capstone Overview', category: 'Course Capstone Overview', test: (l) => /^This is the final module/.test(l) || /^Module 23/.test(l) },
  { id: 1, title: '1. Understanding Business and Technical Requirements', category: 'Part A · System Design Foundations', test: (l) => /^1\.\s+Understanding Business/.test(l) },
  { id: 2, title: '2. Identifying Data Sources and Consumers', category: 'Part A · System Design Foundations', test: (l) => /^2\.\s+Identifying Data Sources/.test(l) },
  { id: 3, title: '3. Choosing Batch vs Streaming Architecture', category: 'Part A · System Design Foundations', test: (l) => /^3\.\s+Choosing Batch vs Streaming/.test(l) },
  { id: 4, title: '4. Estimating Data Volume and Throughput', category: 'Part A · Quantitative Architecture', test: (l) => /^4\.\s+Estimating Data Volume/.test(l) },
  { id: 5, title: '5. Storage Capacity Estimation', category: 'Part A · Quantitative Architecture', test: (l) => /^5\.\s+Storage Capacity Estimation/.test(l) },
  { id: 6, title: '6. Data Ingestion Design', category: 'Part A · Ingestion & Processing Architecture', test: (l) => /^6\.\s+Data Ingestion Design/.test(l) },
  { id: 7, title: '7. Processing Architecture Selection', category: 'Part A · Ingestion & Processing Architecture', test: (l) => /^7\.\s+Processing Architecture Selection/.test(l) },
  { id: 8, title: '8. Warehouse vs Lakehouse Decisions', category: 'Part A · Storage & Platform Decisions', test: (l) => /^8\.\s+Warehouse vs Lakehouse Decisions/.test(l) },
  { id: 9, title: '9. Scalability and Partitioning Strategies', category: 'Part A · Scalability & Reliability', test: (l) => /^9\.\s+Scalability and Partitioning/.test(l) },
  { id: 10, title: '10. Fault Tolerance and Disaster Recovery', category: 'Part A · Scalability & Reliability', test: (l) => /^10\.\s+Fault Tolerance and Disaster Recovery/.test(l) },
  { id: 11, title: '11. Security and Governance Architecture', category: 'Part A · Governance & Trade-offs', test: (l) => /^11\.\s+Security and Governance Architecture/.test(l) },
  { id: 12, title: '12. Performance and Cost Trade-offs', category: 'Part A · Governance & Trade-offs', test: (l) => /^12\.\s+Performance and Cost Trade-offs/.test(l) },
  { id: 13, title: '13. Designing End-to-End Data Systems', category: 'Part A · End-to-End System Design', test: (l) => /^13\.\s+Designing End-to-End Data Systems/.test(l) },
  { id: 14, title: '14. Architecture Documentation and Technical Reviews', category: 'Part A · End-to-End System Design', test: (l) => /^14\.\s+Architecture Documentation/.test(l) },
  { id: 15, title: '15. Capstone Project Overview (ShopSphere Platform)', category: 'Part B · Final Capstone Project', test: (l) => /^15\.\s+Capstone Project Overview/.test(l) },
  { id: 16, title: '16. Capstone Architecture', category: 'Part B · Final Capstone Project', test: (l) => /^16\.\s+Capstone Architecture/.test(l) },
  { id: 17, title: '17. Capstone Implementation — Step by Step (Steps 1–15)', category: 'Part B · Final Capstone Project', test: (l) => /^17\.\s+Capstone Implementation/.test(l) },
  { id: 18, title: '18. Final Capstone Deliverables & Success Criteria', category: 'Part B · Final Capstone Project', test: (l) => /^18\.\s+Final Capstone Deliverables/.test(l) },
  { id: 19, title: '19. Ten-Stage Project Roadmap', category: 'Part C · Practical Project Roadmap', test: (l) => /^19\.\s+Ten-Stage Project Roadmap/.test(l) },
  { id: 20, title: '20. Primary Technology Stack for PrepSpaces', category: 'Part D · Recommended Technology Stack', test: (l) => /^20\.\s+Primary Technology Stack/.test(l) },
  { id: 21, title: '21. Why Each Primary Technology Is Selected', category: 'Part D · Recommended Technology Stack', test: (l) => /^21\.\s+Why Each Primary Technology Is Selected/.test(l) },
  { id: 22, title: '22. Cost-Conscious Learning Environment', category: 'Part D · Recommended Technology Stack', test: (l) => /^22\.\s+Cost-Conscious Learning Environment/.test(l) },
  { id: 23, title: '23. Recommended Module Structure', category: 'Part E · Assessment & Learning Structure', test: (l) => /^23\.\s+Recommended Module Structure/.test(l) },
  { id: 24, title: '24. Suggested Grading Structure', category: 'Part E · Assessment & Learning Structure', test: (l) => /^24\.\s+Suggested Grading Structure/.test(l) },
  { id: 25, title: '25. Data Engineering Career Paths', category: 'Part F · Career Outcomes & Graduation', test: (l) => /^25\.\s+Data Engineering Career Paths/.test(l) },
  { id: 26, title: '26. Final Learning Outcomes & Course Graduation', category: 'Part F · Career Outcomes & Graduation', test: (l) => /^26\.\s+Final Learning Outcomes/.test(l) }
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
  let text = flowText;
  // replace downward arrows
  text = text.replace(/↓/g, '| v ');
  // replace horizontal arrows
  text = text.replace(/→/g, '| -> ');

  const parts = text.split('|').map(s => s.trim()).filter(Boolean);
  const steps = [];
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === 'v' || part === '->' || part === '-->' || /^---+$/.test(part)) continue;
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
  html += '              <ArrowRight size={13} className="text-orange-400" /> System Architecture & Execution Flow\n';
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
  { headers: ['Requirement', 'Description'], count: 7 },
  { headers: ['Requirement', 'Example'], count: 7 },
  { headers: ['Consumer', 'Data requirement'], count: 7 },
  { headers: ['Feature', 'Batch', 'Streaming'], count: 6 },
  { headers: ['Layer', 'Estimated size'], count: 6 },
  { headers: ['Architecture', 'Best suited for'], count: 6 },
  { headers: ['Requirement', 'Warehouse', 'Lakehouse'], count: 6 },
  { headers: ['Role', 'Access'], count: 4 },
  { headers: ['Design choice', 'Benefit', 'Cost or drawback'], count: 5 },
  { headers: ['customer_id', 'name', 'city', 'signup_date'], count: 3 },
  { headers: ['product_id', 'product_name', 'category', 'price'], count: 3 },
  { headers: ['order_id', 'customer_id', 'product_id', 'quantity', 'order_status'], count: 3 },
  { headers: ['Topic', 'Purpose'], count: 4 },
  { headers: ['Deliverable', 'Description'], count: 11 },
  { headers: ['Subject', 'Primary technology', 'Supporting technology'], count: 15 },
  { headers: ['Component', 'Local technology'], count: 11 },
  { headers: ['Assessment', 'Weight'], count: 6 }
];

function tryParseTable(rawLines, startIdx) {
  for (const kt of knownTables) {
    const numH = kt.headers.length;
    let matchHeader = true;
    for (let h = 0; h < numH; h++) {
      if (startIdx + h >= rawLines.length || rawLines[startIdx + h].trim() !== kt.headers[h]) {
        matchHeader = false;
        break;
      }
    }
    if (matchHeader) {
      const rows = [];
      let cursor = startIdx + numH;
      for (let r = 0; r < kt.count; r++) {
        const row = [];
        for (let c = 0; c < numH; c++) {
          if (cursor < rawLines.length) {
            row.push(rawLines[cursor].trim());
            cursor++;
          }
        }
        if (row.length === numH) {
          rows.push(row);
        }
      }
      return {
        headers: kt.headers,
        rows,
        nextIdx: cursor
      };
    }
  }
  return null;
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

    // ASCII flows with downward arrows (↓) or horizontal arrows (→)
    if (line.includes('↓') || (line.includes('→') && !line.startsWith('Worker') && line.includes('Partition'))) {
      elements.push(renderArchitectureFlow(line));
      i++;
      continue;
    }
    if (line.startsWith('Worker 1 → Partition 1')) {
      elements.push(renderArchitectureFlow(line));
      i++;
      continue;
    }

    // ASCII Architecture Blocks
    if (line.startsWith('DATA SOURCES ┌') || line.startsWith('SHOPSPHERE APPLICATION │')) {
      elements.push(renderCodeBlock(line));
      i++;
      continue;
    }

    // Code blocks: Python, SQL, YAML, Directory tree, ADR
    if (
      line.startsWith('import requests') ||
      line.startsWith('import pandas as pd') ||
      line.startsWith('from pyspark.sql') ||
      line.startsWith('SELECT order_date') ||
      line.startsWith('models:') ||
      line.startsWith('shopsphere-lakehouse/') ||
      line.startsWith('orders/ year=2026/') ||
      line.startsWith('Business Goal: Provide real-time sales analytics') ||
      line.startsWith('Decision: Use Apache Iceberg') ||
      line.startsWith('fact_orders dim_customer') ||
      line.startsWith('customer_id total_orders') ||
      line.startsWith('product_id total_units_sold') ||
      line.startsWith('Order ID must not be null') ||
      line.startsWith('Airflow → Workflow orchestration') ||
      line.startsWith('Payment ID') && rawLines[i+1]?.trim() === 'Order ID'
    ) {
      let codeText = line;
      if (line.startsWith('Business Goal: Provide real-time sales analytics')) {
        codeText = `Business Goal:   Provide real-time sales analytics.
Data Sources:    PostgreSQL, REST APIs, payment events.
Data Volume:     2 million orders per day.
Freshness:       Real-time dashboards should update within 5 minutes.
                 Historical reports can update hourly.
Consumers:       Business analysts, executives, marketing teams.
Storage:         Object storage with lakehouse tables.
Processing:      Batch and streaming.
Security:        Role-based access control and encryption.
Reliability:     Automated retry, monitoring, and recovery.`;
      } else if (line.startsWith('Decision: Use Apache Iceberg')) {
        codeText = `Decision:      Use Apache Iceberg for lakehouse table management.
Context:       The platform requires ACID transactions, schema evolution, and historical snapshots.
Alternatives:  Delta Lake, Apache Hudi.
Reason:        Iceberg provides suitable open table management capabilities for the selected architecture.
Consequences:  The team must manage catalog integration and compatible query engines.`;
      } else if (line.startsWith('shopsphere-lakehouse/')) {
        codeText = `shopsphere-lakehouse/
├── bronze/
│   ├── orders/
│   ├── customers/
│   ├── payments/
│   └── products/
├── silver/
│   ├── clean_orders/
│   ├── clean_customers/
│   └── clean_payments/
└── gold/
    ├── sales_summary/
    ├── customer_analytics/
    └── product_performance/`;
      } else if (line.startsWith('orders/ year=2026/')) {
        codeText = `orders/
  year=2026/
    month=01/
    month=02/
    month=03/`;
      } else if (line.startsWith('import requests def extract_orders')) {
        codeText = `import requests

def extract_orders(api_url):
    response = requests.get(api_url, timeout=30)
    response.raise_for_status()
    return response.json()

orders = extract_orders("https://example.com/api/orders")
print(f"Extracted {len(orders)} orders")`;
      } else if (line.startsWith('import requests response = requests.get')) {
        codeText = `import requests

response = requests.get(
    "https://api.example.com/orders",
    timeout=30
)
response.raise_for_status()
orders = response.json()
print(orders)`;
      } else if (line.startsWith('import pandas as pd df = pd.read_csv')) {
        codeText = `import pandas as pd

df = pd.read_csv("orders.csv")
print(df.groupby("product_id")["amount"].sum())`;
      } else if (line.startsWith('from pyspark.sql import SparkSession')) {
        codeText = `from pyspark.sql import SparkSession
from pyspark.sql.functions import col, sum, count

spark = (
    SparkSession.builder
    .appName("ShopSphereAnalytics")
    .getOrCreate()
)

orders = spark.read.parquet("data/orders/")
completed_orders = orders.filter(col("order_status") == "Completed")

daily_sales = (
    completed_orders
    .groupBy("order_date")
    .agg(
        sum("total_amount").alias("revenue"),
        count("order_id").alias("total_orders")
    )
)
daily_sales.show()`;
      } else if (line.startsWith('SELECT order_date, COUNT')) {
        codeText = `SELECT
    order_date,
    COUNT(DISTINCT order_id) AS total_orders,
    SUM(total_amount) AS total_revenue,
    AVG(total_amount) AS average_order_value
FROM {{ ref('stg_orders') }}
WHERE order_status = 'Completed'
GROUP BY order_date;`;
      } else if (line.startsWith('models: - name: stg_orders')) {
        codeText = `models:
  - name: stg_orders
    columns:
      - name: order_id
        tests:
          - not_null
          - unique
      - name: customer_id
        tests:
          - not_null`;
      } else if (line.startsWith('Airflow → Workflow orchestration')) {
        codeText = `Airflow      → Workflow orchestration
Monitoring   → Metrics, logs, alerts
Data Quality → Automated validation
Security     → IAM, encryption, permissions
Governance   → Catalog, lineage, policies
CI/CD        → Testing and deployment`;
      } else if (line.startsWith('Payment ID') && rawLines[i+1]?.trim() === 'Order ID') {
        codeText = `Payments Schema:
- Payment ID
- Order ID
- Payment method
- Payment status
- Transaction amount
- Transaction timestamp

Inventory Schema:
- Product ID
- Warehouse ID
- Available quantity
- Reserved quantity
- Last updated timestamp`;
        // skip schema list lines
        while (i < rawLines.length && (
          rawLines[i].trim() === 'Payments' ||
          rawLines[i].trim() === 'Payment ID' ||
          rawLines[i].trim() === 'Order ID' ||
          rawLines[i].trim() === 'Payment method' ||
          rawLines[i].trim() === 'Payment status' ||
          rawLines[i].trim() === 'Transaction amount' ||
          rawLines[i].trim() === 'Transaction timestamp' ||
          rawLines[i].trim() === 'Inventory' ||
          rawLines[i].trim() === 'Product ID' ||
          rawLines[i].trim() === 'Warehouse ID' ||
          rawLines[i].trim() === 'Available quantity' ||
          rawLines[i].trim() === 'Reserved quantity' ||
          rawLines[i].trim() === 'Last updated timestamp'
        )) {
          i++;
        }
        elements.push(renderCodeBlock(codeText));
        continue;
      }

      elements.push(renderCodeBlock(codeText));
      i++;
      continue;
    }

    // Numbered subheadings (e.g. 1.1 Business requirements)
    const subHeadMatch = line.match(/^(\d{1,2}\.\d{1,2})\s+(.*)$/);
    if (subHeadMatch) {
      elements.push(
        '          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">\n' +
        '            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">\n' +
        '              <span className="text-orange-600 font-mono text-sm">' + escapeJSX(subHeadMatch[1]) + '</span>\n' +
        '              <span>' + escapeJSX(subHeadMatch[2]) + '</span>\n' +
        '            </h3>\n' +
        '          </div>'
      );
      i++;
      continue;
    }

    // Step Headers (Step 1 — ...)
    const stepMatch = line.match(/^(Step\s+\d{1,2}\s+—\s+.*)$/);
    if (stepMatch) {
      elements.push(
        '          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">\n' +
        '            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">\n' +
        '              <Zap size={16} className="text-orange-600" />\n' +
        '              <span>' + escapeJSX(stepMatch[1]) + '</span>\n' +
        '            </h3>\n' +
        '          </div>'
      );
      i++;
      continue;
    }

    // Part Headers (Part A — ..., Part B — ...)
    const partMatch = line.match(/^(Part\s+[A-F]\s+—\s+.*)$/);
    if (partMatch) {
      elements.push(
        '          <div className="mt-8 mb-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">\n' +
        '            <h3 className="text-base sm:text-lg font-extrabold text-orange-400 flex items-center gap-2 font-mono tracking-wide">\n' +
        '              <Sparkles size={18} className="text-orange-400" />\n' +
        '              <span>' + escapeJSX(partMatch[1]) + '</span>\n' +
        '            </h3>\n' +
        '          </div>'
      );
      i++;
      continue;
    }

    // Numbered Stage / Section headers (e.g. 01 Python API Data Extractor)
    const stageMatch = line.match(/^(\d{2})$/);
    if (stageMatch && rawLines[i+1]) {
      const stageTitle = rawLines[i+1].trim();
      elements.push(
        '          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">\n' +
        '            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">' + stageMatch[1] + '</span>\n' +
        '            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">' + escapeJSX(stageTitle) + '</h4>\n' +
        '          </div>'
      );
      i += 2;
      continue;
    }

    // Section Headers inside lists or subheadings (1. University-Style Theoretical Lectures)
    const numSubMatch = line.match(/^(\d\.\s+[A-Z].*)$/);
    if (numSubMatch && !line.startsWith('1. Understanding')) {
      elements.push(
        '          <div className="mt-4 mb-2">\n' +
        '            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">\n' +
        '              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>\n' +
        '              <span>' + escapeJSX(numSubMatch[1]) + '</span>\n' +
        '            </h4>\n' +
        '          </div>'
      );
      i++;
      continue;
    }

    // Category / Concept subheaders
    if (
      line === 'Business scenario' ||
      line === 'Architecture flow' ||
      line === 'Suggested datasets:' ||
      line === 'Customers' ||
      line === 'Products' ||
      line === 'Orders' ||
      line === 'Payments' ||
      line === 'Inventory' ||
      line === 'Batch processing tasks:' ||
      line === 'Streaming processing tasks:' ||
      line === 'Bronze — Raw data' ||
      line === 'Silver — Cleaned data' ||
      line === 'Gold — Business-ready data' ||
      line === 'Bronze' ||
      line === 'Silver' ||
      line === 'Gold' ||
      line === 'Goals:' ||
      line === 'Tasks:' ||
      line === 'Requirements:' ||
      line === 'Supporting systems:' ||
      line === 'Executive Overview' ||
      line === 'Sales Analytics' ||
      line === 'Product Analytics' ||
      line === 'Payment Analytics' ||
      line === 'Real-Time Analytics' ||
      line === 'Recovery features:' ||
      line === 'Capstone success criteria' ||
      line === 'Grading criteria' ||
      line === 'Learning environment strategy' ||
      line === 'Stage 1 — Beginner' ||
      line === 'Stage 2 — Intermediate' ||
      line === 'Stage 3 — Advanced' ||
      line === 'Stage 4 — Professional extension' ||
      line === 'Typical responsibilities:' ||
      line === 'Recommended final course structure for PrepSpaces' ||
      line === 'Advantages:' ||
      line === 'Disadvantages:' ||
      line === 'Limitations:' ||
      line === 'Techniques:' ||
      line === 'Storage design considerations' ||
      line === 'Production considerations:' ||
      line === 'Common methods:' ||
      line === 'Ingestion design requirements' ||
      line === 'Common cost components:' ||
      line === 'Potential improvements:' ||
      line === 'Questions include:' ||
      line === 'Deliverable' ||
      line === 'Description'
    ) {
      elements.push(
        '          <div className="mt-4 mb-2">\n' +
        '            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">\n' +
        '              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>\n' +
        '              <span>' + escapeJSX(line) + '</span>\n' +
        '            </h4>\n' +
        '          </div>'
      );
      i++;
      continue;
    }

    // Math formulas
    if (line.startsWith('\\[') && line.endsWith('\\]')) {
      const formula = line.slice(2, -2).trim();
      elements.push(
        '          <div className="my-3 p-3.5 rounded-xl bg-orange-50/50 border border-orange-200/70 text-stone-800 font-mono text-center text-sm shadow-sm overflow-x-auto">\n' +
        '            <span>\\(' + escapeJSX(formula) + '\\)</span>\n' +
        '          </div>'
      );
      i++;
      continue;
    }

    // Bullets or list items
    if (line.startsWith('• ') || line.startsWith('- ') || line.startsWith('■ ')) {
      elements.push(
        '          <li className="text-xs sm:text-sm text-stone-700 leading-relaxed ml-4 list-disc marker:text-orange-500 my-1">\n' +
        '            ' + escapeJSX(line.replace(/^[•\-■]\s*/, '')) + '\n' +
        '          </li>'
      );
      i++;
      continue;
    }

    // Standard paragraph
    elements.push(
      '          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">\n' +
      '            ' + escapeJSX(line) + '\n' +
      '          </p>'
    );
    i++;
  }

  return elements.join('\n');
}

console.log('Writing DataEngineeringSystemDesignSections.jsx with', buckets.length, 'sections...');

let outputJsx = `// projectx/src/Componets/DataEngineeringSystemDesignSections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, Activity, Zap, ShieldAlert, CheckCircle, RefreshCw, Layers, Gauge, Database, Cpu, HardDrive, Award, Trophy, Rocket, Terminal, GitBranch, Server, Cloud } from 'lucide-react';

export const systemDesignSectionsMeta = [
${sectionHeaders.map(sh => `  { id: ${sh.id}, title: ${JSON.stringify(sh.title)}, category: ${JSON.stringify(sh.category)} }`).join(',\n')}
];

export const SystemDesignSection = memo(function SystemDesignSection({ sectionId }) {
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

export default SystemDesignSection;
`;

const targetPath = path.resolve(__dirname, '../src/Componets/DataEngineeringSystemDesignSections.jsx');
fs.writeFileSync(targetPath, outputJsx, 'utf8');
console.log('Successfully generated DataEngineeringSystemDesignSections.jsx! Size:', outputJsx.length);
