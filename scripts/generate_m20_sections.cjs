// projectx/scripts/generate_m20_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../m20_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

// Strip wrapper tags if any
content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 20: Data Security, Governance and Privacy Overview & Roadmap', category: 'Course Roadmap', test: (l) => /^Module 20 — Data Security/.test(l) },
  { id: 1, title: '1. Introduction to Data Security', category: 'Part 1 · Security Fundamentals & Architecture', test: (l) => /^1\.\s+Introduction to Data Security/.test(l) },
  { id: 2, title: '2. Data Security Architecture', category: 'Part 1 · Security Fundamentals & Architecture', test: (l) => /^2\.\s+Data Security Architecture/.test(l) },
  { id: 3, title: '3. Data Classification', category: 'Part 2 · Data Classification & Sensitive Data', test: (l) => /^3\.\s+Data Classification/.test(l) },
  { id: 4, title: '4. Sensitive Data and Personally Identifiable Information (PII)', category: 'Part 2 · Data Classification & Sensitive Data', test: (l) => /^4\.\s+Sensitive Data and Personally/.test(l) },
  { id: 5, title: '5. Authentication and Authorization', category: 'Part 3 · Access Control & Authorization', test: (l) => /^5\.\s+Authentication and Authorization/.test(l) },
  { id: 6, title: '6. Role-Based Access Control (RBAC)', category: 'Part 3 · Access Control & Authorization', test: (l) => /^6\.\s+Role-Based Access Control/.test(l) },
  { id: 7, title: '7. Attribute-Based Access Control (ABAC)', category: 'Part 3 · Access Control & Authorization', test: (l) => /^7\.\s+Attribute-Based Access Control/.test(l) },
  { id: 8, title: '8. Principle of Least Privilege', category: 'Part 3 · Access Control & Authorization', test: (l) => /^8\.\s+Principle of Least Privilege/.test(l) },
  { id: 9, title: '9. Encryption at Rest and in Transit', category: 'Part 4 · Cryptography, Keys & Secrets', test: (l) => /^9\.\s+Encryption at Rest and in Transit/.test(l) },
  { id: 10, title: '10. Encryption Key Management', category: 'Part 4 · Cryptography, Keys & Secrets', test: (l) => /^10\.\s+Encryption Key Management/.test(l) },
  { id: 11, title: '11. Secrets Management', category: 'Part 4 · Cryptography, Keys & Secrets', test: (l) => /^11\.\s+Secrets Management/.test(l) },
  { id: 12, title: '12. Data Masking', category: 'Part 5 · Privacy Engineering & Anonymization', test: (l) => /^12\.\s+Data Masking/.test(l) },
  { id: 13, title: '13. Anonymization and Pseudonymization', category: 'Part 5 · Privacy Engineering & Anonymization', test: (l) => /^13\.\s+Anonymization and Pseudonymization/.test(l) },
  { id: 14, title: '14. Secure Data Sharing', category: 'Part 5 · Privacy Engineering & Anonymization', test: (l) => /^14\.\s+Secure Data Sharing/.test(l) },
  { id: 15, title: '15. Data Access Auditing', category: 'Part 6 · Auditing, Retention & Compliance', test: (l) => /^15\.\s+Data Access Auditing/.test(l) },
  { id: 16, title: '16. Data Retention and Deletion', category: 'Part 6 · Auditing, Retention & Compliance', test: (l) => /^16\.\s+Data Retention and Deletion/.test(l) },
  { id: 17, title: '17. Privacy Engineering', category: 'Part 5 · Privacy Engineering & Anonymization', test: (l) => /^17\.\s+Privacy Engineering/.test(l) },
  { id: 18, title: '18. Regulatory and Compliance Fundamentals', category: 'Part 6 · Auditing, Retention & Compliance', test: (l) => /^18\.\s+Regulatory and Compliance Fundamentals/.test(l) },
  { id: 19, title: '19. Data Governance Frameworks', category: 'Part 7 · Data Governance & Ownership', test: (l) => /^19\.\s+Data Governance Frameworks/.test(l) },
  { id: 20, title: '20. Important Data Governance and Security Frameworks', category: 'Part 7 · Data Governance & Ownership', test: (l) => /^20\.\s+Important Data Governance and Security/.test(l) },
  { id: 21, title: '21. Data Ownership and Accountability', category: 'Part 7 · Data Governance & Ownership', test: (l) => /^21\.\s+Data Ownership and Accountability/.test(l) },
  { id: 22, title: '22. Secure Data Pipeline Architecture', category: 'Part 8 · Pipeline Architecture & Incident Response', test: (l) => /^22\.\s+Secure Data Pipeline Architecture/.test(l) },
  { id: 23, title: '23. Secure Data Pipeline Implementation — Practical Examples', category: 'Part 8 · Pipeline Architecture & Incident Response', test: (l) => /^23\.\s+Secure Data Pipeline Implementation/.test(l) },
  { id: 24, title: '24. Security Incident Management and Data Breach Response', category: 'Part 8 · Pipeline Architecture & Incident Response', test: (l) => /^24\.\s+Security Incident Management/.test(l) },
  { id: 25, title: '25. Major Practical Project — Build a Secure and Governed Cloud Data Lake', category: 'Part 9 · Production Capstone & Exercises', test: (l) => /^25\.\s+Major Practical Project/.test(l) },
  { id: 26, title: '26. Additional Advanced Topics', category: 'Part 9 · Production Capstone & Exercises', test: (l) => /^26\.\s+Additional Advanced Topics/.test(l) },
  { id: 27, title: '27. Module 20 — Important Interview Questions', category: 'Part 9 · Production Capstone & Exercises', test: (l) => /^27\.\s+Module 20 — Important Interview Questions/.test(l) },
  { id: 28, title: '28. Practical Assignments', category: 'Part 9 · Production Capstone & Exercises', test: (l) => /^28\.\s+Practical Assignments/.test(l) },
  { id: 29, title: '29. Recommended Learning Resources', category: 'Part 9 · Production Capstone & Exercises', test: (l) => /^29\.\s+Recommended Learning Resources/.test(l) },
  { id: 30, title: '30. Final Module Summary', category: 'Part 9 · Production Capstone & Exercises', test: (l) => /^30\.\s+Final Module Summary/.test(l) }
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
  const parts = flowText.split('|').map(s => s.trim()).filter(Boolean);
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
  html += '              <ArrowRight size={13} className="text-orange-400" /> Security Architecture & Pipeline Execution Flow\n';
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
  { headers: ['Data security', 'Data privacy'], count: 6 },
  { headers: ['Classification', 'Example', 'Typical access'], count: 4 },
  { headers: ['Dataset', 'Classification', 'Protection'], count: 5 },
  { headers: ['Category', 'Examples', 'Potential risk'], count: 7 },
  { headers: ['Dataset', 'Personal information', 'Purpose', 'Classification'], count: 5 },
  { headers: ['Feature', 'Authentication', 'Authorization'], count: 4 },
  { headers: ['Feature', 'RBAC', 'ABAC'], count: 5 },
  { headers: ['Feature', 'At rest', 'In transit'], count: 4 },
  { headers: ['Platform', 'Service'], count: 5 },
  { headers: ['Customer', 'Email', 'Phone'], count: 2 },
  { headers: ['Customer', 'Masked Email', 'Masked Phone'], count: 2 },
  { headers: ['Customer ID', 'Name', 'City', 'Age', 'Purchase Amount'], count: 3 },
  { headers: ['City', 'Age group', 'Purchase total'], count: 2 },
  { headers: ['Customer ID', 'Name', 'Email'], count: 2 },
  { headers: ['Feature', 'Anonymization', 'Pseudonymization'], count: 4 },
  { headers: ['Auditing', 'Monitoring'], count: 4 },
  { headers: ['Data type', 'Example retention', 'Reason'], count: 7 },
  { headers: ['Regulation / framework', 'Geography or scope', 'Main focus'], count: 7 },
  { headers: ['Framework', 'Main purpose', 'Nature'], count: 7 },
  { headers: ['Activity', 'Responsible role'], count: 6 },
  { headers: ['Activity', 'Owner', 'Steward', 'Engineer', 'Security'], count: 4 },
  { headers: ['Metric', 'Meaning'], count: 4 },
  { headers: ['Dataset', 'Classification', 'Personal data', 'Access'], count: 3 },
  { headers: ['Customer ID', 'Name', 'Email', 'City'], count: 3 },
  { headers: ['Deliverable', 'Description'], count: 12 },
  { headers: ['Category', 'Meaning', 'Example'], count: 6 },
  { headers: ['No.', 'Assignment', 'Expected outcome'], count: 20 },
  { headers: ['Area', 'What you should be able to do'], count: 19 }
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
  if (text.startsWith('import hashlib') && text.includes('Customer Transaction: 5000')) {
    return `import hashlib

data = b"Customer Transaction: 5000"
hash_value = hashlib.sha256(data).hexdigest()
print(hash_value)`;
  }

  if (text.startsWith('{ "dataset": "customer_profiles"') && text.includes('CONFIDENTIAL')) {
    return `{
  "dataset": "customer_profiles",
  "classification": "CONFIDENTIAL",
  "contains_personal_data": true,
  "encryption_required": true,
  "external_sharing": "RESTRICTED",
  "owner": "customer_data_team"
}`;
  }

  if (text.startsWith('ROLE_PERMISSIONS = {') && text.includes('has_permission')) {
    return `ROLE_PERMISSIONS = {
    "data_engineer": ["read_raw", "write_curated"],
    "data_analyst": ["read_curated"],
    "security_admin": ["read_audit_logs", "manage_security"]
}

def has_permission(role, permission):
    permissions = ROLE_PERMISSIONS.get(role, [])
    return permission in permissions

print(has_permission("data_analyst", "read_curated"))`;
  }

  if (text.startsWith('{ "Version": "2012-10-17"') && text.includes('company-raw/orders/*')) {
    return `{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject"],
      "Resource": ["arn:aws:s3:::company-raw/orders/*"]
    },
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject"],
      "Resource": ["arn:aws:s3:::company-curated/orders/*"]
    }
  ]
}`;
  }

  if (text.startsWith('import boto3') && text.includes('get_database_credentials')) {
    return `import boto3
import json
import os

def get_database_credentials():
    secret_name = os.environ["DB_SECRET_NAME"]
    client = boto3.client("secretsmanager")
    response = client.get_secret_value(SecretId=secret_name)
    credentials = json.loads(response["SecretString"])
    return credentials`;
  }

  if (text.startsWith('{ "username": "pipeline_user"') && text.includes('database.example.com')) {
    return `{
  "username": "pipeline_user",
  "password": "retrieved-securely",
  "host": "database.example.com"
}`;
  }

  if (text.startsWith('CREATE TABLE customers (') && text.includes('customer_name VARCHAR(100)')) {
    return `CREATE TABLE customers (
    customer_id INT,
    customer_name VARCHAR(100),
    email VARCHAR(255),
    phone VARCHAR(20)
);`;
  }

  if (text.startsWith('CREATE VIEW masked_customers AS') && text.includes('masked_phone')) {
    return `CREATE VIEW masked_customers AS
SELECT
    customer_id,
    customer_name,
    email,
    CONCAT('XXXXXX', RIGHT(phone, 4)) AS masked_phone
FROM customers;`;
  }

  if (text.startsWith('SELECT * FROM masked_customers;')) {
    return `SELECT * FROM masked_customers;`;
  }

  if (text.startsWith('{ "dataset": "customer_orders"') && text.includes('commerce_data_team')) {
    return `{
  "dataset": "customer_orders",
  "classification": "confidential",
  "contains_pii": true,
  "owner": "commerce_data_team",
  "encryption_required": true
}`;
  }

  if (text.startsWith('import hmac') && text.includes('pseudonymize_customer')) {
    return `import hmac
import hashlib
import os

def pseudonymize_customer(customer_id):
    key = os.environ.get("PSEUDONYMIZATION_KEY")
    if not key:
        raise RuntimeError("Missing pseudonymization key")
    digest = hmac.new(
        key.encode("utf-8"),
        customer_id.encode("utf-8"),
        hashlib.sha256
    ).hexdigest()
    return digest

customer_id = "C001"
token = pseudonymize_customer(customer_id)
print(token)`;
  }

  if (text.startsWith('import pandas as pd def validate_customer_data') || (text.startsWith('import pandas as pd') && text.includes('validate_customer_data'))) {
    return `import pandas as pd

def validate_customer_data(data):
    required_columns = ["customer_id", "customer_email", "created_at"]
    missing = [column for column in required_columns if column not in data.columns]
    if missing:
        raise ValueError(f"Missing columns: {missing}")
    if data["customer_id"].isnull().any():
        raise ValueError("Customer ID cannot be null")
    if not data["customer_id"].is_unique:
        raise ValueError("Duplicate customer IDs detected")
    return True`;
  }

  if (text.startsWith('CREATE TABLE customers (') && text.includes('total_purchase DECIMAL')) {
    return `CREATE TABLE customers (
    customer_id VARCHAR(50),
    name VARCHAR(100),
    email VARCHAR(255),
    city VARCHAR(100),
    total_purchase DECIMAL(12,2)
);`;
  }

  if (text.startsWith('CREATE VIEW customer_analytics AS') && text.includes('total_purchase')) {
    return `CREATE VIEW customer_analytics AS
SELECT
    customer_id,
    city,
    total_purchase
FROM customers;`;
  }

  if (text.startsWith('def authorize_access(') && text.includes('department != "finance"')) {
    return `def authorize_access(department, classification, action):
    if department != "finance":
        return False
    if classification != "internal":
        return False
    if action != "read":
        return False
    return True`;
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

    // Directory / file tree diagrams (lines containing company-data/ or secure-ecommerce-data-lake/)
    if (line.startsWith('company-data/') || line.startsWith('secure-ecommerce-data-lake/') || line.includes('├──') || line.includes('└──')) {
      let treeLines = [line];
      let j = i + 1;
      while (j < rawLines.length && (rawLines[j].includes('├──') || rawLines[j].includes('└──') || rawLines[j].trim().endsWith('/') || rawLines[j].trim().endsWith('.csv') || rawLines[j].trim().endsWith('.parquet'))) {
        treeLines.push(rawLines[j].trim());
        j++;
      }
      elements.push(renderCodeBlock(treeLines.join('\n')));
      i = j;
      continue;
    }

    // Architecture flow diagram check (contains | v or | ---- | v)
    if ((line.includes('| v') || line.includes('| ----') || line.includes('| -----------------')) && !line.startsWith('{')) {
      elements.push(renderArchitectureFlow(line));
      i++;
      continue;
    }

    // Code block check
    if (line.startsWith('import hashlib') || 
        line.startsWith('{ "dataset": "customer_profiles"') || 
        line.startsWith('ROLE_PERMISSIONS = {') || 
        line.startsWith('{ "Version": "2012-10-17"') || 
        line.startsWith('import boto3') || 
        line.startsWith('{ "username": "pipeline_user"') || 
        line.startsWith('CREATE TABLE customers (') || 
        line.startsWith('CREATE VIEW masked_customers') || 
        line.startsWith('SELECT * FROM masked_customers;') || 
        line.startsWith('{ "dataset": "customer_orders"') || 
        line.startsWith('import hmac') || 
        line.startsWith('import pandas as pd') || 
        line.startsWith('CREATE VIEW customer_analytics') || 
        line.startsWith('def authorize_access(')) {
      elements.push(renderCodeBlock(formatCodeIfFlattened(line)));
      i++;
      continue;
    }

    // Subsection headings (e.g. 1.1, 2.3, 18.5)
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

    // Sub-sub headings or bold lead-in tags (e.g. "Step 1 — ...", "Level 1 — ...", "A. ...", "Question 1", "Assignment 1")
    if (/^(Step\s+\d+|Level\s+\d+|Phase\s+\d+|Question\s+\d+|Assignment\s+\d+|[A-F]\.\s+[A-Za-z]|Major\s+Capstone\s+Project|Business\s+requirements|Primary\s+Indian\s+Privacy\s+Framework|Official\s+legislation|Official\s+rules|Important\s+AWS\s+KMS\s+concepts|Important\s+safeguards|Important\s+dimensions|Responsibilities:|Security\s+requirements:|Examples\s+include:|Examples:|Document:|Create:)/i.test(line)) {
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

console.log('Writing DataEngineeringSecuritySections.jsx with', buckets.length, 'sections...');

let outputJsx = `// projectx/src/Componets/DataEngineeringSecuritySections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Key, Lock, FileText, Database, ShieldAlert, UserCheck, EyeOff, Scale, Server } from 'lucide-react';

export const securitySectionsMeta = [
${sectionHeaders.map(sh => `  { id: ${sh.id}, title: ${JSON.stringify(sh.title)}, category: ${JSON.stringify(sh.category)} }`).join(',\n')}
];

export const SecuritySection = memo(function SecuritySection({ sectionId }) {
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

export default SecuritySection;
`;

const targetPath = path.resolve(__dirname, '../src/Componets/DataEngineeringSecuritySections.jsx');
fs.writeFileSync(targetPath, outputJsx, 'utf8');
console.log('Successfully generated DataEngineeringSecuritySections.jsx! Size:', outputJsx.length);
