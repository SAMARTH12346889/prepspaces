// projectx/scripts/generate_m19_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../m19_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

// Strip wrapper tags if any
content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 19: DataOps, Docker, CI/CD and Infrastructure as Code Overview & Roadmap', category: 'Course Roadmap', test: (l) => /^Module 19 — DataOps/.test(l) },
  { id: 1, title: '1. Understanding the complete module', category: 'Course Roadmap', test: (l) => /^1\.\s+Understanding the complete module/.test(l) },
  { id: 2, title: '2. Introduction to DataOps', category: 'Part 1 · DataOps & Software Engineering', test: (l) => /^2\.\s+Introduction to DataOps/.test(l) },
  { id: 3, title: '3. Software Engineering Practices for Data Systems', category: 'Part 1 · DataOps & Software Engineering', test: (l) => /^3\.\s+Software Engineering Practices/.test(l) },
  { id: 4, title: '4. Git and Version Control', category: 'Part 2 · Version Control & Git Collaboration', test: (l) => /^4\.\s+Git and Version Control/.test(l) },
  { id: 5, title: '5. Git Branching and Collaboration', category: 'Part 2 · Version Control & Git Collaboration', test: (l) => /^5\.\s+Git Branching and Collaboration/.test(l) },
  { id: 6, title: '6. Docker Fundamentals', category: 'Part 3 · Docker & Containerization', test: (l) => /^6\.\s+Docker Fundamentals/.test(l) },
  { id: 7, title: '7. Dockerfiles', category: 'Part 3 · Docker & Containerization', test: (l) => /^7\.\s+Dockerfiles/.test(l) },
  { id: 8, title: '8. Docker Compose', category: 'Part 3 · Docker & Containerization', test: (l) => /^8\.\s+Docker Compose/.test(l) },
  { id: 9, title: '9. Containerizing Data Pipelines', category: 'Part 3 · Docker & Containerization', test: (l) => /^9\.\s+Containerizing Data Pipelines/.test(l) },
  { id: 10, title: '10. Development, Staging, and Production Environments', category: 'Part 4 · Environments, CI/CD & Testing', test: (l) => /^10\.\s+Development, Staging, and Production/.test(l) },
  { id: 11, title: '11. Continuous Integration and Continuous Deployment (CI/CD)', category: 'Part 4 · Environments, CI/CD & Testing', test: (l) => /^11\.\s+Continuous Integration and Continuous/.test(l) },
  { id: 12, title: '12. GitHub Actions', category: 'Part 4 · Environments, CI/CD & Testing', test: (l) => /^12\.\s+GitHub Actions/.test(l) },
  { id: 13, title: '13. Automated Pipeline Testing', category: 'Part 4 · Environments, CI/CD & Testing', test: (l) => /^13\.\s+Automated Pipeline Testing/.test(l) },
  { id: 14, title: '14. Infrastructure as Code (IaC)', category: 'Part 5 · Infrastructure as Code & Terraform', test: (l) => /^14\.\s+Infrastructure as Code/.test(l) },
  { id: 15, title: '15. Terraform Fundamentals', category: 'Part 5 · Infrastructure as Code & Terraform', test: (l) => /^15\.\s+Terraform Fundamentals/.test(l) },
  { id: 16, title: '16. Infrastructure Provisioning', category: 'Part 5 · Infrastructure as Code & Terraform', test: (l) => /^16\.\s+Infrastructure Provisioning/.test(l) },
  { id: 17, title: '17. Configuration Management', category: 'Part 6 · Configuration, Secrets & Migrations', test: (l) => /^17\.\s+Configuration Management/.test(l) },
  { id: 18, title: '18. Secrets and Environment Management', category: 'Part 6 · Configuration, Secrets & Migrations', test: (l) => /^18\.\s+Secrets and Environment Management/.test(l) },
  { id: 19, title: '19. Database and Pipeline Migrations', category: 'Part 6 · Configuration, Secrets & Migrations', test: (l) => /^19\.\s+Database and Pipeline Migrations/.test(l) },
  { id: 20, title: '20. Deployment Strategies', category: 'Part 7 · Deployment, Recovery & Kubernetes', test: (l) => /^20\.\s+Deployment Strategies/.test(l) },
  { id: 21, title: '21. Rollback and Recovery', category: 'Part 7 · Deployment, Recovery & Kubernetes', test: (l) => /^21\.\s+Rollback and Recovery/.test(l) },
  { id: 22, title: '22. Introduction to Kubernetes for Data Workloads', category: 'Part 7 · Deployment, Recovery & Kubernetes', test: (l) => /^22\.\s+Introduction to Kubernetes/.test(l) },
  { id: 23, title: '23. Complete Practical Project — Build a Production-Ready DataOps Platform', category: 'Part 8 · Production Project & Advanced Topics', test: (l) => /^23\.\s+Complete Practical Project/.test(l) },
  { id: 24, title: '24. Advanced Topics for Production DataOps', category: 'Part 8 · Production Project & Advanced Topics', test: (l) => /^24\.\s+Advanced Topics for Production/.test(l) },
  { id: 25, title: '25. Module 19 — Important Interview Questions', category: 'Part 9 · Interview Questions, Labs & Capstone', test: (l) => /^25\.\s+Module 19 — Important Interview Questions/.test(l) },
  { id: 26, title: '26. Practical Assignments', category: 'Part 9 · Interview Questions, Labs & Capstone', test: (l) => /^26\.\s+Practical Assignments/.test(l) },
  { id: 27, title: '27. Final Capstone Challenge', category: 'Part 9 · Interview Questions, Labs & Capstone', test: (l) => /^27\.\s+Final Capstone Challenge/.test(l) },
  { id: 28, title: '28. Recommended Learning Resources', category: 'Part 9 · Interview Questions, Labs & Capstone', test: (l) => /^28\.\s+Recommended Learning Resources/.test(l) },
  { id: 29, title: '29. Final Module Summary', category: 'Part 9 · Interview Questions, Labs & Capstone', test: (l) => /^29\.\s+Final Module Summary/.test(l) }
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
    if (part === 'v' || part === '->' || part === '-->' || part === '----------------------' || part === '-----------------' || part === '------------' || part === '-------------------' || part === '-------------------------------') continue;
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
  html += '              <ArrowRight size={13} className="text-orange-400" /> DataOps Pipeline & Execution Flow\n';
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
  { headers: ['Area', 'DevOps', 'DataOps'], count: 8 },
  { headers: ['Command', 'Purpose'], count: 14 },
  { headers: ['Image', 'Container'], count: 4 },
  { headers: ['Feature', 'Virtual Machine', 'Container'], count: 6 },
  { headers: ['Command', 'Purpose'], count: 12 },
  { headers: ['Instruction', 'Meaning'], count: 11 },
  { headers: ['Docker', 'Docker Compose'], count: 4 },
  { headers: ['Feature', 'Development', 'Staging', 'Production'], count: 6 },
  { headers: ['Feature', 'CI', 'Continuous Delivery', 'Continuous Deployment'], count: 5 },
  { headers: ['Validation', 'Example'], count: 7 },
  { headers: ['Tool', 'Primary purpose'], count: 5 },
  { headers: ['Platform', 'Secret management service'], count: 6 },
  { headers: ['Strategy', 'Downtime', 'Additional resources', 'Best use'], count: 5 },
  { headers: ['Feature', 'Docker Compose', 'Kubernetes'], count: 7 },
  { headers: ['Metric', 'Purpose'], count: 8 },
  { headers: ['No.', 'Assignment', 'Expected outcome'], count: 20 },
  { headers: ['Area', 'Skills you should acquire'], count: 19 }
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
  if (text.startsWith('FROM python:3.12-slim') && text.includes('appuser')) {
    return `FROM python:3.12-slim

# Set working directory
WORKDIR /app

# Install dependencies first
COPY requirements.txt .
RUN pip install --no-cache-dir \\
    -r requirements.txt

# Copy application source
COPY main.py .

# Create a non-root user
RUN useradd --create-home appuser
USER appuser

# Execute pipeline
CMD ["python", "main.py"]`;
  }

  if (text.startsWith('services: pipeline:') && text.includes('postgres_data:')) {
    return `services:
  pipeline:
    build: .
    environment:
      DB_HOST: postgres
      DB_NAME: ecommerce
      DB_USER: developer
      DB_PASSWORD: \${DB_PASSWORD}
    depends_on:
      - postgres

  postgres:
    image: postgres:16
    environment:
      POSTGRES_DB: ecommerce
      POSTGRES_USER: developer
      POSTGRES_PASSWORD: \${DB_PASSWORD}
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`;
  }

  if (text.startsWith('name: Python Data Pipeline CI') && text.includes('pytest')) {
    return `name: Python Data Pipeline CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Install dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
          pip install pytest

      - name: Run tests
        run: |
          pytest -v`;
  }

  if (text.startsWith('apiVersion: batch/v1 kind: Job') && text.includes('orders-processing')) {
    return `apiVersion: batch/v1
kind: Job
metadata:
  name: orders-processing
spec:
  backoffLimit: 2
  template:
    spec:
      restartPolicy: Never
      containers:
        - name: orders-pipeline
          image: orders-pipeline:v1
          env:
            - name: APP_ENV
              value: "staging"`;
  }

  if (text.startsWith('apiVersion: batch/v1 kind: CronJob') && text.includes('daily-orders-pipeline')) {
    return `apiVersion: batch/v1
kind: CronJob
metadata:
  name: daily-orders-pipeline
spec:
  schedule: "0 0 * * *"
  concurrencyPolicy: Forbid
  jobTemplate:
    spec:
      backoffLimit: 2
      template:
        spec:
          restartPolicy: Never
          containers:
            - name: orders-pipeline
              image: orders-pipeline:v1
              env:
                - name: APP_ENV
                  value: "production"`;
  }

  if (text.startsWith('apiVersion: v1 kind: ConfigMap') && text.includes('pipeline-config')) {
    return `apiVersion: v1
kind: ConfigMap
metadata:
  name: pipeline-config
data:
  APP_ENV: production
  LOG_LEVEL: INFO`;
  }

  if (text.startsWith('apiVersion: v1 kind: Secret') && text.includes('database-secret')) {
    return `apiVersion: v1
kind: Secret
metadata:
  name: database-secret
type: Opaque
stringData:
  DB_PASSWORD: "REPLACE_WITH_SECURELY_INJECTED_VALUE"`;
  }

  if (text.startsWith('MERGE INTO target_orders') && text.includes('staging_orders')) {
    return `MERGE INTO target_orders AS target
USING staging_orders AS source
ON target.order_id = source.order_id
WHEN MATCHED THEN
  UPDATE SET amount = source.amount, status = source.status
WHEN NOT MATCHED THEN
  INSERT (order_id, amount, status)
  VALUES (source.order_id, source.amount, source.status);`;
  }

  if (text.startsWith('import logging') && text.includes('logger.exception')) {
    return `import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s"
)
logger = logging.getLogger(__name__)

def process_orders(data):
    try:
        logger.info("Starting order transformation")
        if data is None:
            raise ValueError("Input dataset is missing")
        result = data.drop_duplicates()
        logger.info("Transformation completed. Rows: %s", len(result))
        return result
    except Exception:
        logger.exception("Order transformation failed")
        raise`;
  }

  if (text.startsWith('terraform {') && text.includes('required_providers')) {
    return `terraform {
  required_version = ">= 1.9.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region = "ap-south-1"
}`;
  }

  if (text.startsWith('resource "aws_s3_bucket"') && text.includes('my-example-data-lake')) {
    return `resource "aws_s3_bucket" "data_lake" {
  bucket = "my-example-data-lake-unique-name"
  tags = {
    Environment = "development"
    Project     = "data-engineering"
  }
}`;
  }

  if (text.startsWith('variable "bucket_name"') && text.includes('variable "environment"')) {
    return `variable "bucket_name" {
  description = "S3 data lake bucket name"
  type        = string
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "development"
}`;
  }

  if (text.startsWith('resource "aws_s3_bucket" "data_lake"') && text.includes('var.bucket_name')) {
    return `resource "aws_s3_bucket" "data_lake" {
  bucket = var.bucket_name
  tags = {
    Environment = var.environment
  }
}`;
  }

  if (text.startsWith('import pandas as pd def process_orders():')) {
    return `import pandas as pd

def process_orders():
    data = pd.read_csv("orders.csv")
    data = data.drop_duplicates()
    data.to_csv("processed_orders.csv", index=False)
    print("Order processing completed")

if __name__ == "__main__":
    process_orders()`;
  }

  if (text.startsWith('import pandas as pd def transform_orders(data):')) {
    return `import pandas as pd

def transform_orders(data):
    required_columns = ["order_id", "customer_id", "amount", "status"]
    missing = [col for col in required_columns if col not in data.columns]
    if missing:
        raise ValueError(f"Missing columns: {missing}")
    
    result = data.drop_duplicates(subset=["order_id"]).copy()
    result = result[result["status"] == "completed"]
    result = result[result["amount"] > 0]
    return result`;
  }

  if (text.startsWith('import pandas as pd from src.transformation.transform') && text.includes('test_transform_orders')) {
    return `import pandas as pd
from src.transformation.transform import transform_orders

def test_transform_orders():
    data = pd.DataFrame({
        "order_id": [1, 1, 2, 3],
        "customer_id": ["C1", "C1", "C2", "C3"],
        "amount": [500, 500, 700, -100],
        "status": ["completed", "completed", "cancelled", "completed"]
    })
    result = transform_orders(data)
    assert len(result) == 1
    assert result.iloc[0]["order_id"] == 1`;
  }

  if (text.startsWith('from src.transform import clean_orders') && text.includes('test_duplicate_orders_are_removed')) {
    return `from src.transform import clean_orders
import pandas as pd

def test_duplicate_orders_are_removed():
    data = pd.DataFrame({
        "order_id": [101, 101, 102],
        "amount": [500, 500, 700]
    })
    result = clean_orders(data)
    assert len(result) == 2
    assert result["order_id"].is_unique`;
  }

  if (text.startsWith('def validate_orders(data):') && text.includes('notnull')) {
    return `def validate_orders(data):
    assert data["order_id"].notnull().all()
    assert data["order_id"].is_unique
    assert (data["amount"] > 0).all()
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

    // File tree diagrams (e.g. lines containing ├── or └── or │)
    if (line.includes('├──') || line.includes('└──') || line.startsWith('ecommerce-data-') || line.startsWith('terraform-project/') || line.startsWith('terraform/') || line.startsWith('migrations/')) {
      // Gather consecutive tree lines
      let treeLines = [line];
      let j = i + 1;
      while (j < rawLines.length && (rawLines[j].includes('├──') || rawLines[j].includes('└──') || rawLines[j].includes('│') || rawLines[j].trim().endsWith('/') || rawLines[j].trim().endsWith('.py') || rawLines[j].trim().endsWith('.tf') || rawLines[j].trim().endsWith('.sql') || rawLines[j].trim().endsWith('.yml') || rawLines[j].trim().endsWith('.yaml') || rawLines[j].trim().endsWith('.txt') || rawLines[j].trim().endsWith('.md'))) {
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
    if (line.startsWith('FROM python:') || line.startsWith('services: pipeline:') || line.startsWith('name: Python Data Pipeline') || line.startsWith('apiVersion: batch/v1') || line.startsWith('apiVersion: v1') || line.startsWith('MERGE INTO target_orders') || line.startsWith('import logging') || line.startsWith('terraform {') || line.startsWith('resource "aws_s3_bucket"') || line.startsWith('variable "bucket_name"') || line.startsWith('import pandas as pd def') || line.startsWith('from src.transform import clean_orders') || line.startsWith('def validate_orders(data):') || line.startsWith('git config --global') || line.startsWith('docker run') || line.startsWith('docker build') || line.startsWith('kubectl apply')) {
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

    // Sub-sub headings or bold lead-in tags (e.g. "Step 1 — Create the Repository", "Phase 1 — Expand", "A. Unit Testing", "01 Version Control")
    if (/^(Step\s+\d+|Phase\s+\d+|Question\s+\d+|Assignment\s+\d+|[A-F]\.\s+[A-Za-z]|0[1-8]\s+[A-Za-z]|Modern\s+DataOps\s+Workflow|Data\s+Pipeline\s+Testing\s+Pyramid|Production\s+DataOps\s+Architecture|Production\s+Engineering\s+Challenge|Project\s+Objective|Recommended\s+structure|Important\s+Docker\s+concepts|Important\s+components|Important\s+Kubernetes\s+Objects|Important\s+advantages|Local\s+State|Remote\s+State|State\s+Locking|Imperative\s+approach|Declarative\s+approach|Feature\s+Branching|GitHub\s+Flow|Git\s+Flow|Working\s+Directory|Staging\s+Area|Repository|Understanding\s+the\s+workflow|Understanding\s+\.gitignore)/i.test(line)) {
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

console.log('Writing DataEngineeringDataOpsSections.jsx with', buckets.length, 'sections...');

let outputJsx = `// projectx/src/Componets/DataEngineeringDataOpsSections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, CheckCircle2, ChevronRight, Layers, Database, Shield, Zap, Cloud, Cpu, DollarSign, Activity, GitBranch, Terminal, Box, RefreshCw } from 'lucide-react';

export const dataOpsSectionsMeta = [
${sectionHeaders.map(sh => `  { id: ${sh.id}, title: ${JSON.stringify(sh.title)}, category: ${JSON.stringify(sh.category)} }`).join(',\n')}
];

export const DataOpsSection = memo(function DataOpsSection({ sectionId }) {
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

export default DataOpsSection;
`;

const targetPath = path.resolve(__dirname, '../src/Componets/DataEngineeringDataOpsSections.jsx');
fs.writeFileSync(targetPath, outputJsx, 'utf8');
console.log('Successfully generated DataEngineeringDataOpsSections.jsx! Size:', outputJsx.length);
