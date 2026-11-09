// projectx/scripts/generate_m21_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../m21_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

// Strip wrapper tags if any
content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 21: Data Reliability, Observability and Performance Optimization Overview & Roadmap', category: 'Course Roadmap', test: (l) => /^Module 21 — Data Reliability/.test(l) },
  { id: 1, title: '1. Introduction to Data Reliability Engineering', category: 'Part 1 · Foundations of Data Reliability', test: (l) => /^1\.\s+Introduction to Data Reliability Engineering/.test(l) },
  { id: 2, title: '2. Reliability of Data Platforms', category: 'Part 1 · Foundations of Data Reliability', test: (l) => /^2\.\s+Reliability of Data Platforms/.test(l) },
  { id: 3, title: '3. Pipeline Monitoring', category: 'Part 2 · Operational Monitoring & Telemetry', test: (l) => /^3\.\s+Pipeline Monitoring/.test(l) },
  { id: 4, title: '4. Logs, Metrics, and Traces', category: 'Part 2 · Operational Monitoring & Telemetry', test: (l) => /^4\.\s+Logs, Metrics, and Traces/.test(l) },
  { id: 5, title: '5. Data Observability Fundamentals', category: 'Part 2 · Operational Monitoring & Telemetry', test: (l) => /^5\.\s+Data Observability Fundamentals/.test(l) },
  { id: 6, title: '6. Freshness Monitoring', category: 'Part 3 · Core Observability Pillars', test: (l) => /^6\.\s+Freshness Monitoring/.test(l) },
  { id: 7, title: '7. Volume and Distribution Monitoring', category: 'Part 3 · Core Observability Pillars', test: (l) => /^7\.\s+Volume and Distribution Monitoring/.test(l) },
  { id: 8, title: '8. Schema Change Detection', category: 'Part 3 · Core Observability Pillars', test: (l) => /^8\.\s+Schema Change Detection/.test(l) },
  { id: 9, title: '9. Data Quality Alerting', category: 'Part 3 · Core Observability Pillars', test: (l) => /^9\.\s+Data Quality Alerting/.test(l) },
  { id: 10, title: '10. Service Level Indicators (SLIs)', category: 'Part 4 · Service Level Management & Error Budgets', test: (l) => /^10\.\s+Service Level Indicators/.test(l) },
  { id: 11, title: '11. Service Level Objectives (SLOs)', category: 'Part 4 · Service Level Management & Error Budgets', test: (l) => /^11\.\s+Service Level Objectives/.test(l) },
  { id: 12, title: '12. Data Service Level Agreements (SLAs)', category: 'Part 4 · Service Level Management & Error Budgets', test: (l) => /^12\.\s+Data Service Level Agreements/.test(l) },
  { id: 13, title: '13. Incident Management', category: 'Part 5 · Incidents, RCA & Failure Recovery', test: (l) => /^13\.\s+Incident Management/.test(l) },
  { id: 14, title: '14. Root Cause Analysis (RCA)', category: 'Part 5 · Incidents, RCA & Failure Recovery', test: (l) => /^14\.\s+Root Cause Analysis/.test(l) },
  { id: 15, title: '15. Pipeline Failure Recovery', category: 'Part 5 · Incidents, RCA & Failure Recovery', test: (l) => /^15\.\s+Pipeline Failure Recovery/.test(l) },
  { id: 16, title: '16. Retry and Circuit-Breaking Strategies', category: 'Part 5 · Incidents, RCA & Failure Recovery', test: (l) => /^16\.\s+Retry and Circuit-Breaking/.test(l) },
  { id: 17, title: '17. Backup and Disaster Recovery', category: 'Part 6 · Business Continuity & Disaster Recovery', test: (l) => /^17\.\s+Backup and Disaster Recovery/.test(l) },
  { id: 18, title: '18. Recovery Point Objective (RPO)', category: 'Part 6 · Business Continuity & Disaster Recovery', test: (l) => /^18\.\s+Recovery Point Objective/.test(l) },
  { id: 19, title: '19. Recovery Time Objective (RTO)', category: 'Part 6 · Business Continuity & Disaster Recovery', test: (l) => /^19\.\s+Recovery Time Objective/.test(l) },
  { id: 20, title: '20. Compute and Storage Optimization', category: 'Part 7 · Performance Engineering & Optimization', test: (l) => /^20\.\s+Compute and Storage Optimization/.test(l) },
  { id: 21, title: '21. Query Performance Optimization', category: 'Part 7 · Performance Engineering & Optimization', test: (l) => /^21\.\s+Query Performance Optimization/.test(l) },
  { id: 22, title: '22. Pipeline Scalability', category: 'Part 8 · Scalability & Cloud Cost Optimization', test: (l) => /^22\.\s+Pipeline Scalability/.test(l) },
  { id: 23, title: '23. Cloud Cost Optimization', category: 'Part 8 · Scalability & Cloud Cost Optimization', test: (l) => /^23\.\s+Cloud Cost Optimization/.test(l) },
  { id: 24, title: '24. Production Readiness Reviews', category: 'Part 9 · Production Readiness, Case Study & Labs', test: (l) => /^24\.\s+Production Readiness Reviews/.test(l) },
  { id: 25, title: '25. End-to-End Case Study — Reliable E-Commerce Data Platform', category: 'Part 9 · Production Readiness, Case Study & Labs', test: (l) => /^25\.\s+End-to-End Case Study/.test(l) },
  { id: 26, title: '26. Practical Labs', category: 'Part 9 · Production Readiness, Case Study & Labs', test: (l) => /^26\.\s+Practical Labs/.test(l) },
  { id: 27, title: '27. Module 21 — Final Assessment', category: 'Part 9 · Production Readiness, Case Study & Labs', test: (l) => /^27\.\s+Module 21 — Final Assessment/.test(l) },
  { id: 28, title: '28. Module 21 — Key Takeaways', category: 'Part 9 · Production Readiness, Case Study & Labs', test: (l) => /^Module 21 — Key Takeaways/.test(l) }
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
  // If line contains ChatGPT Mermaid SVG CSS noise, clean it and extract textual nodes
  let text = flowText;
  if (text.includes('#chatgpt-mermaid')) {
    text = text.replace(/^#chatgpt-mermaid[^{]*\{[^\}]*\}[^{]*\{[^\}]*\}[\s\S]*\}::root\{[^\}]*\}/, '');
    // Separate capitalized camel-case words into steps
    // e.g. "Application DatabasesData IngestionData LakeData TransformationData WarehouseBI DashboardsMachine LearningMonitoring and Observability"
  }

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
  html += '              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow\n';
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
  { headers: ['Software Reliability', 'Data Reliability'], count: 5 },
  { headers: ['High Availability', 'Fault Tolerance'], count: 5 },
  { headers: ['Pipeline', 'Status', 'Duration'], count: 4 },
  { headers: ['Level', 'Meaning'], count: 5 },
  { headers: ['Component', 'Duration'], count: 4 },
  { headers: ['Feature', 'Logs', 'Metrics', 'Traces'], count: 4 },
  { headers: ['Data Quality', 'Data Observability'], count: 4 },
  { headers: ['Age Range', 'Expected Percentage'], count: 5 },
  { headers: ['Age Range', 'Actual Percentage'], count: 5 },
  { headers: ['Dimension', 'Meaning'], count: 6 },
  { headers: ['Severity', 'Meaning', 'Example'], count: 4 },
  { headers: ['SLI', 'Measurement'], count: 6 },
  { headers: ['Service', 'SLO'], count: 5 },
  { headers: ['Retry', 'Delay'], count: 4 },
  { headers: ['Retry', 'Circuit Breaker'], count: 4 },
  { headers: ['Backup', 'Disaster Recovery'], count: 4 },
  { headers: ['RPO Requirement', 'Possible Strategy'], count: 4 },
  { headers: ['RPO', 'RTO'], count: 4 },
  { headers: ['Configuration', 'CPU', 'Memory'], count: 3 },
  { headers: ['Partition', 'Records'], count: 4 },
  { headers: ['Data Age', 'Storage Strategy'], count: 3 },
  { headers: ['Batch Processing', 'Stream Processing'], count: 4 },
  { headers: ['Problem', 'Business Impact'], count: 6 },
  { headers: ['Metric', 'Target'], count: 6 }
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
  if (text.startsWith('MERGE INTO target_sales') && text.includes('staging_sales')) {
    return `MERGE INTO target_sales AS target
USING staging_sales AS source
ON target.transaction_id = source.transaction_id
WHEN MATCHED THEN
  UPDATE SET target.amount = source.amount, target.updated_at = source.updated_at
WHEN NOT MATCHED THEN
  INSERT (transaction_id, amount, updated_at)
  VALUES (source.transaction_id, source.amount, source.updated_at);`;
  }

  if (text.startsWith('{ "timestamp": "2026-11-09T10:02:00Z"') && text.includes('sales_pipeline')) {
    return `{
  "timestamp": "2026-11-09T10:02:00Z",
  "pipeline": "sales_pipeline",
  "task": "load_snowflake",
  "level": "ERROR",
  "error": "connection_timeout",
  "duration_seconds": 120,
  "records_processed": 500000
}`;
  }

  if (text.startsWith('from datetime import datetime') && text.includes('freshness = current_time - last_update')) {
    return `from datetime import datetime, timezone

current_time = datetime.now(timezone.utc)
last_update = datetime(2026, 11, 9, 10, 0, tzinfo=timezone.utc)
freshness = current_time - last_update
print(freshness)`;
  }

  if (text.startsWith('SELECT MAX(updated_at)') && text.includes('freshness_minutes')) {
    return `SELECT
    MAX(updated_at) AS last_update_time,
    CURRENT_TIMESTAMP AS current_time,
    DATEDIFF(minute, MAX(updated_at), CURRENT_TIMESTAMP) AS freshness_minutes
FROM sales;`;
  }

  if (text.startsWith('SELECT COUNT(*) AS total_orders') && text.includes('CURRENT_DATE')) {
    return `SELECT COUNT(*) AS total_orders
FROM orders
WHERE order_date = CURRENT_DATE;`;
  }

  if (text.startsWith('CREATE TABLE customers (') && text.includes('customer_name VARCHAR(100)')) {
    return `CREATE TABLE customers (
    customer_id INT,
    customer_name VARCHAR(100),
    email VARCHAR(200),
    created_at TIMESTAMP
);`;
  }

  if (text.startsWith('ALTER TABLE customers ADD COLUMN')) {
    return `ALTER TABLE customers ADD COLUMN phone_number VARCHAR(20);`;
  }

  if (text.startsWith('ALTER TABLE customers DROP COLUMN')) {
    return `ALTER TABLE customers DROP COLUMN email;`;
  }

  if (text.startsWith('ALTER TABLE customers ALTER COLUMN')) {
    return `ALTER TABLE customers ALTER COLUMN customer_id TYPE VARCHAR(50);`;
  }

  if (text.startsWith('SELECT COUNT(*) AS invalid_records') && text.includes('customer_id IS NULL')) {
    return `SELECT COUNT(*) AS invalid_records
FROM customers
WHERE customer_id IS NULL;`;
  }

  if (text.startsWith('SELECT customer_id, COUNT(*) AS duplicate_count') && text.includes('HAVING COUNT(*) > 1')) {
    return `SELECT customer_id, COUNT(*) AS duplicate_count
FROM customers
GROUP BY customer_id
HAVING COUNT(*) > 1;`;
  }

  if (text.startsWith('SELECT COUNT(*)') && text.includes('REGEXP_LIKE')) {
    return `SELECT COUNT(*)
FROM customers
WHERE email IS NOT NULL
  AND NOT REGEXP_LIKE(
    email,
    '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'
  );`;
  }

  if (text.startsWith('SELECT COUNT(*)') && text.includes('amount < 0')) {
    return `SELECT COUNT(*)
FROM transactions
WHERE amount < 0;`;
  }

  if (text.startsWith('SELECT * FROM sales WHERE YEAR(order_date) = 2026;')) {
    return `-- Inefficient: Function on filter prevents partition pruning
SELECT *
FROM sales
WHERE YEAR(order_date) = 2026;`;
  }

  if (text.startsWith('SELECT order_id, customer_id, amount, order_date FROM sales WHERE order_date >=')) {
    return `-- Optimized: Specific columns + range predicate enables partition pruning
SELECT order_id, customer_id, amount, order_date
FROM sales
WHERE order_date >= '2026-01-01'
  AND order_date < '2027-01-01';`;
  }

  if (text.startsWith('CREATE TABLE sales (') && text.includes('transaction_id INT')) {
    return `CREATE TABLE sales (
    transaction_id INT,
    customer_id INT,
    amount DECIMAL(10,2),
    transaction_date DATE
);`;
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

    // Mermaid SVG noise line check
    if (line.includes('#chatgpt-mermaid')) {
      if (line.includes('Application DatabasesData Ingestion')) {
        elements.push(renderArchitectureFlow('Application Databases | v Data Ingestion | v Data Lake | v Data Transformation | v Data Warehouse | v BI Dashboards / ML / Observability'));
      } else if (line.includes('Data PipelinesEmit Logs and Metrics')) {
        elements.push(renderArchitectureFlow('Data Pipelines | v Emit Logs & Metrics | v Monitoring Collector | v Monitoring Database | v Alert Evaluation | v Incident Investigation'));
      } else if (line.includes('Source DataData PipelinesData Warehouse')) {
        elements.push(renderArchitectureFlow('Source Data | v Data Pipelines | v Data Warehouse | v Observability Engine (Freshness, Volume, Distribution, Schema, Lineage) | v Alerting | v Data Engineering Team'));
      } else if (line.includes('Incident DetectionIncident Classification')) {
        elements.push(renderArchitectureFlow('Incident Detection | v Incident Classification | v Investigation | v Containment | v Recovery | v Validation | v Postmortem & Improvements'));
      } else if (line.includes('Data Pipeline FailureInfrastructure')) {
        elements.push(renderArchitectureFlow('Failure Root Cause Analysis (Fishbone) | Infrastructure | Data | Code | Process | People | External Systems'));
      } else if (line.includes('Primary RegionProduction Data Warehouse')) {
        elements.push(renderArchitectureFlow('Primary Region (Prod Warehouse + Pipelines + Storage) | v Automated Replication & Backup | v Secondary Region (Recovery Infrastructure + Standby)'));
      } else if (line.includes('DevelopmentUnit TestingIntegration Testing')) {
        elements.push(renderArchitectureFlow('Development | v Unit Testing | v Integration Testing | v Data Quality Testing | v Security Review | v PRR | v Production Deployment | v Continuous Observability'));
      } else {
        elements.push(renderArchitectureFlow(line));
      }
      i++;
      continue;
    }

    // Directory / file tree / ascii flow
    if ((line.includes('| v') || line.includes('| ----') || line.includes('| -----------------')) && !line.startsWith('{')) {
      elements.push(renderArchitectureFlow(line));
      i++;
      continue;
    }

    // Code block check
    if (line.startsWith('MERGE INTO target_sales') ||
        line.startsWith('{ "timestamp": "2026-11-09T10:02:00Z"') ||
        line.startsWith('from datetime import datetime') ||
        line.startsWith('SELECT MAX(updated_at)') ||
        line.startsWith('SELECT COUNT(*) AS total_orders') ||
        line.startsWith('CREATE TABLE customers (') ||
        line.startsWith('ALTER TABLE customers ADD') ||
        line.startsWith('ALTER TABLE customers DROP') ||
        line.startsWith('ALTER TABLE customers ALTER') ||
        line.startsWith('SELECT COUNT(*) AS invalid_records') ||
        line.startsWith('SELECT customer_id, COUNT(*) AS duplicate_count') ||
        line.startsWith('SELECT COUNT(*)') ||
        line.startsWith('SELECT * FROM sales WHERE YEAR') ||
        line.startsWith('SELECT order_id, customer_id, amount') ||
        line.startsWith('CREATE TABLE sales (')) {
      elements.push(renderCodeBlock(formatCodeIfFlattened(line)));
      i++;
      continue;
    }

    // Subsection headings (e.g. 1.1, 2.3, 21.4)
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

    // Sub-sub headings or bold lead-in tags
    if (/^(Step\s+\d+|Level\s+\d+|Phase\s+\d+|Lab\s+\d+|Test\s+\d+|Principle\s+\d+|[A-F]\.\s+[A-Za-z]|Question\s+\d+|Assignment\s+\d+|Tasks:|Tasks|Learning\s+Objectives|Conceptual\s+Questions|Advanced\s+Interview\s+Questions|Final\s+Capstone\s+Project|Business\s+Scenario|Existing\s+Problems|Expected\s+Outcome|Required\s+components:|Deliverables|Deployment\s+strategies|Common\s+monitoring\s+tools|Types\s+of\s+metrics|Trace\s+terminology|Important\s+strategies:|Important\s+metrics:|Common\s+strategies:|Possible\s+solutions:|Disadvantages:|Advantages:|Important\s+distinction)/i.test(line)) {
      elements.push(
        '          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">\n' +
        '            <span className="text-orange-600">▸</span>\n' +
        '            <span>' + escapeJSX(line) + '</span>\n' +
        '          </h4>'
      );
      i++;
      continue;
    }

    // Numbered query optimization items in section 21: "1. Avoid SELECT *", "2. Filter early", etc.
    if (/^[1-8]\.\s+[A-Za-z\*\s]+/.test(line) && line.length < 50) {
      elements.push(
        '          <h4 className="text-sm font-bold text-stone-900 mt-3 mb-1 flex items-center gap-1.5 font-mono text-orange-700">\n' +
        '            <span>' + escapeJSX(line) + '</span>\n' +
        '          </h4>'
      );
      i++;
      continue;
    }

    // Math formulas (LaTeX)
    if (line.startsWith('\\[') && line.endsWith('\\]')) {
      elements.push(
        '          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">\n' +
        '            <span>' + escapeJSX(line) + '</span>\n' +
        '          </div>'
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

console.log('Writing DataEngineeringReliabilitySections.jsx with', buckets.length, 'sections...');

let outputJsx = `// projectx/src/Componets/DataEngineeringReliabilitySections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, Activity, Zap, ShieldAlert, CheckCircle, RefreshCw, Layers, Gauge, Database, Cpu, HardDrive } from 'lucide-react';

export const reliabilitySectionsMeta = [
${sectionHeaders.map(sh => `  { id: ${sh.id}, title: ${JSON.stringify(sh.title)}, category: ${JSON.stringify(sh.category)} }`).join(',\n')}
];

export const ReliabilitySection = memo(function ReliabilitySection({ sectionId }) {
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

export default ReliabilitySection;
`;

const targetPath = path.resolve(__dirname, '../src/Componets/DataEngineeringReliabilitySections.jsx');
fs.writeFileSync(targetPath, outputJsx, 'utf8');
console.log('Successfully generated DataEngineeringReliabilitySections.jsx! Size:', outputJsx.length);
