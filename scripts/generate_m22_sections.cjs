// projectx/scripts/generate_m22_sections.cjs
const fs = require('fs');
const path = require('path');

const rawFile = path.resolve(__dirname, '../m22_original.txt');
let content = fs.readFileSync(rawFile, 'utf8');

// Strip wrapper tags if any
content = content.replace(/<USER_REQUEST>[\r\n]*/, '');
content = content.replace(/[\r\n]*<\/USER_REQUEST>[\s\S]*$/, '');

const lines = content.split(/\r?\n/);

const sectionHeaders = [
  { id: 0, title: 'Module 22: Data Products, Serving Architectures and AI Data Engineering Overview & Roadmap', category: 'Course Roadmap', test: (l) => /^Module 22 — Data Products/.test(l) },
  { id: 1, title: '1. Introduction to Data Products', category: 'Part 1 · Data Products & Product Thinking', test: (l) => /^1\.\s+Introduction to Data Products/.test(l) },
  { id: 2, title: '2. Data as a Product', category: 'Part 1 · Data Products & Product Thinking', test: (l) => /^2\.\s+Data as a Product/.test(l) },
  { id: 3, title: '3. Data Product Architecture', category: 'Part 1 · Data Products & Product Thinking', test: (l) => /^3\.\s+Data Product Architecture/.test(l) },
  { id: 4, title: '4. Data Mesh Fundamentals', category: 'Part 2 · Data Mesh & Domain Ownership', test: (l) => /^4\.\s+Data Mesh Fundamentals/.test(l) },
  { id: 5, title: '5. Domain-Oriented Data Ownership', category: 'Part 2 · Data Mesh & Domain Ownership', test: (l) => /^5\.\s+Domain-Oriented Data Ownership/.test(l) },
  { id: 6, title: '6. Data Serving Architectures', category: 'Part 3 · Serving Architectures & Semantic Layers', test: (l) => /^6\.\s+Data Serving Architectures/.test(l) },
  { id: 7, title: '7. Analytical Data Marts', category: 'Part 3 · Serving Architectures & Semantic Layers', test: (l) => /^7\.\s+Analytical Data Marts/.test(l) },
  { id: 8, title: '8. Semantic Layers', category: 'Part 3 · Serving Architectures & Semantic Layers', test: (l) => /^8\.\s+Semantic Layers/.test(l) },
  { id: 9, title: '9. OLAP and Analytical Query Serving', category: 'Part 3 · Serving Architectures & Semantic Layers', test: (l) => /^9\.\s+OLAP and Analytical Query Serving/.test(l) },
  { id: 10, title: '10. Serving Data Through APIs', category: 'Part 4 · Operational Serving, Caching & Integration', test: (l) => /^10\.\s+Serving Data Through APIs/.test(l) },
  { id: 11, title: '11. Data Access and Caching Strategies', category: 'Part 4 · Operational Serving, Caching & Integration', test: (l) => /^11\.\s+Data Access and Caching Strategies/.test(l) },
  { id: 12, title: '12. Reverse ETL Architecture', category: 'Part 4 · Operational Serving, Caching & Integration', test: (l) => /^12\.\s+Reverse ETL Architecture/.test(l) },
  { id: 13, title: '13. Data Integration for Business Applications', category: 'Part 4 · Operational Serving, Caching & Integration', test: (l) => /^13\.\s+Data Integration for Business Applications/.test(l) },
  { id: 14, title: '14. Graph Databases Fundamentals', category: 'Part 5 · Graph & NoSQL Data Architecture', test: (l) => /^14\.\s+Graph Databases Fundamentals/.test(l) },
  { id: 15, title: '15. NoSQL Database Architecture', category: 'Part 5 · Graph & NoSQL Data Architecture', test: (l) => /^15\.\s+NoSQL Database Architecture/.test(l) },
  { id: 16, title: '16. Introduction to Machine Learning Data Engineering', category: 'Part 6 · Machine Learning Feature Stores', test: (l) => /^16\.\s+Introduction to Machine Learning Data Engineering/.test(l) },
  { id: 17, title: '17. Feature Engineering Pipelines', category: 'Part 6 · Machine Learning Feature Stores', test: (l) => /^17\.\s+Feature Engineering Pipelines/.test(l) },
  { id: 18, title: '18. Feature Store Architecture', category: 'Part 6 · Machine Learning Feature Stores', test: (l) => /^18\.\s+Feature Store Architecture/.test(l) },
  { id: 19, title: '19. Offline and Online Feature Stores', category: 'Part 6 · Machine Learning Feature Stores', test: (l) => /^19\.\s+Offline and Online Feature Stores/.test(l) },
  { id: 20, title: '20. Training-Serving Skew', category: 'Part 6 · Machine Learning Feature Stores', test: (l) => /^20\.\s+Training-Serving Skew/.test(l) },
  { id: 21, title: '21. Point-in-Time Correct Feature Retrieval', category: 'Part 6 · Machine Learning Feature Stores', test: (l) => /^21\.\s+Point-in-Time Correct Feature Retrieval/.test(l) },
  { id: 22, title: '22. AI Data Preparation Pipelines', category: 'Part 7 · AI Data Pipelines & Vector Databases', test: (l) => /^22\.\s+AI Data Preparation Pipelines/.test(l) },
  { id: 23, title: '23. Embeddings and Vector Databases', category: 'Part 7 · AI Data Pipelines & Vector Databases', test: (l) => /^23\.\s+Embeddings and Vector Databases/.test(l) },
  { id: 24, title: '24. Data Ingestion for Retrieval-Augmented Generation (RAG)', category: 'Part 7 · AI Data Pipelines & Vector Databases', test: (l) => /^24\.\s+Data Ingestion for Retrieval-Augmented Generation/.test(l) },
  { id: 25, title: '25. Building and Refreshing AI Knowledge Indexes', category: 'Part 8 · Knowledge Indexing & AI Governance', test: (l) => /^25\.\s+Building and Refreshing AI Knowledge Indexes/.test(l) },
  { id: 26, title: '26. AI Data Quality and Governance', category: 'Part 8 · Knowledge Indexing & AI Governance', test: (l) => /^26\.\s+AI Data Quality and Governance/.test(l) },
  { id: 27, title: '27. Practical Labs — Module 22', category: 'Part 9 · Practical Labs, Assessment & Capstone', test: (l) => /^27\.\s+Practical Labs/.test(l) },
  { id: 28, title: '28. Module 22 — Final Assessment', category: 'Part 9 · Practical Labs, Assessment & Capstone', test: (l) => /^28\.\s+Module 22 — Final Assessment/.test(l) },
  { id: 29, title: '29. Final Capstone Project & Key Takeaways', category: 'Part 9 · Practical Labs, Assessment & Capstone', test: (l) => /^29\.\s+Final Capstone Project/.test(l) }
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
  if (text.includes('#chatgpt-mermaid')) {
    text = text.replace(/^#chatgpt-mermaid[^{]*\{[^\}]*\}[^{]*\{[^\}]*\}[\s\S]*\}::root\{[^\}]*\}/, '');
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
  html += '              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow\n';
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
  { headers: ['Data Product', 'Consumers', 'Business Value'], count: 6 },
  { headers: ['Dataset', 'Data Product'], count: 5 },
  { headers: ['Role', 'Responsibility'], count: 6 },
  { headers: ['Data Mesh', 'Data Lake', 'Data Warehouse'], count: 4 },
  { headers: ['Consumer', 'Serving Requirement'], count: 6 },
  { headers: ['OLTP', 'OLAP'], count: 4 },
  { headers: ['Semantic Layer', 'Data Mart'], count: 4 },
  { headers: ['Strategy', 'Description'], count: 5 },
  { headers: ['Customer ID', 'Churn Probability', 'Segment'], count: 3 },
  { headers: ['Traditional ETL', 'Reverse ETL'], count: 4 },
  { headers: ['Graph Database', 'Relational Database'], count: 4 },
  { headers: ['Feature', 'Meaning'], count: 5 },
  { headers: ['Offline Store', 'Online Store'], count: 5 },
  { headers: ['Event', 'Date'], count: 3 },
  { headers: ['RAG', 'Fine-Tuning'], count: 5 },
  { headers: ['Metric', 'Meaning'], count: 7 }
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

    // Mermaid SVG noise line check
    if (line.includes('#chatgpt-mermaid')) {
      if (line.includes('Identify Business NeedDefine Data Product')) {
        elements.push(renderArchitectureFlow('Identify Business Need | v Define Data Product | v Design Data Contract | v Build Data Pipelines | v Validate Data Quality | v Publish Data Product | v Serve Consumers | v Monitor Usage & Reliability | v Improve or Retire Product'));
      } else if (line.includes('Operational SourcesIngestion LayerData Lake')) {
        elements.push(renderArchitectureFlow('Operational Sources | v Ingestion Layer | v Data Lake / Warehouse | v Transformation Layer | v Domain Data Products | v Serving Layer (Data Marts, Data APIs, Feature Store, Knowledge Index) | v Consumers (Dashboards, Apps, ML, AI Assistants) | v Governance & Observability'));
      } else if (line.includes('Self-Service Data PlatformSales Domain')) {
        elements.push(renderArchitectureFlow('Self-Service Data Platform | v Domains (Sales, Marketing, Finance, Operations) | v Domain Data Products | v Shared Data Consumers | v Federated Governance'));
      } else if (line.includes('Processed DataData Serving Layer')) {
        elements.push(renderArchitectureFlow('Processed Data | v Data Serving Layer | v Serving Engines (SQL Warehouse, REST / GraphQL APIs, Feature Store, Vector DB, Graph DB) | v Consumer Systems (BI Dashboards, Business Applications, ML Models, AI Assistants, Relationship Analytics)'));
      } else if (line.includes('Data WarehouseSemantic Layer')) {
        elements.push(renderArchitectureFlow('Data Warehouse | v Semantic Layer (Business Metrics, Dimensions, Relationships, Metric Definitions) | v Consumer Layer (BI Dashboard, Analytics Application, AI Analytics Assistant)'));
      } else if (line.includes('Operational DataData WarehouseTransformation')) {
        elements.push(renderArchitectureFlow('Operational Data | v Data Warehouse | v Transformation | v Customer Churn Model | v Curated Churn Data | v Reverse ETL Engine | v Operational Apps (CRM, Marketing Platform, Customer Success Application)'));
      } else if (line.includes('Raw DataData CleaningFeature Transformation')) {
        elements.push(renderArchitectureFlow('Raw Data | v Data Cleaning | v Feature Transformation | v Feature Validation | v Feature Storage | v Model Lifecycle (Training Dataset & Inference Features)'));
      } else if (line.includes('Data SourcesData IngestionDocument Parsing')) {
        elements.push(renderArchitectureFlow('Data Sources | v Data Ingestion | v Document Parsing | v Data Cleaning | v Metadata Extraction | v Chunking | v Embedding Generation | v Vector Database | v AI Application'));
      } else if (line.includes('DocumentsDocument ParsingText Cleaning')) {
        elements.push(renderArchitectureFlow('Documents | v Document Parsing | v Text Cleaning | v Chunking | v Embedding Model | v Vector Database <-> User Query & Query Embedding & Similarity Search -> Retrieved Context | v LLM | v Generated Answer'));
      } else if (line.includes('AI Data SourcesData Preparation')) {
        elements.push(renderArchitectureFlow('AI Data Sources | v Data Preparation | v Quality Validation | v Knowledge Index | v AI Retrieval | v Federated Governance Policies (Access Control, Lineage & Provenance, Monitoring & Evaluation)'));
      } else if (line.includes('Operational Data SourcesData IngestionData Lake')) {
        elements.push(renderArchitectureFlow('Operational Sources | v Data Ingestion | v Data Lake / Warehouse | v Domain Products (Sales Mart, Customer 360, Inventory) & Feature Store & Reverse ETL & Vector DB | v Serving (BI Dashboards, Data APIs, Churn Prediction, RAG Assistant) | v Governance & Observability'));
      } else {
        elements.push(renderArchitectureFlow(line));
      }
      i++;
      continue;
    }

    // ASCII flows with | or ->
    if ((line.includes(' | v ') || line.includes(' | +--> ') || line.includes(' | +----> ') || line.includes(' --------> ') || line.includes(' | +---- ')) && !line.startsWith('CREATE') && !line.startsWith('SELECT')) {
      elements.push(renderArchitectureFlow(line));
      i++;
      continue;
    }

    // Code blocks: SQL, JSON, YAML, Python
    if (
      line.startsWith('CREATE TABLE') ||
      line.startsWith('SELECT ') ||
      line.startsWith('MATCH ') ||
      line.startsWith('from fastapi import') ||
      line.startsWith('def get_product') ||
      line.startsWith('def calculate_average_order_value') ||
      line.startsWith('from sentence_transformers import') ||
      line.startsWith('import pandas as pd') ||
      line.startsWith('data_product: name: customer_360') ||
      line.startsWith('metrics: total_revenue:') ||
      (line.startsWith('{') && line.includes('"product_id"')) ||
      (line.startsWith('{') && line.includes('"document_id"')) ||
      (line.startsWith('{') && line.includes('"customer_id"')) ||
      line.startsWith('Key: customer_id:101') ||
      line.startsWith('customer_id | date | purchase_count')
    ) {
      let codeText = line;
      // Prettify data_product contract
      if (line.startsWith('data_product: name: customer_360')) {
        codeText = `data_product:
  name: customer_360
  owner: customer_data_team
  schema:
    customer_id:
      type: integer
      nullable: false
    customer_name:
      type: string
      nullable: false
    lifetime_value:
      type: decimal
      nullable: false
    updated_at:
      type: timestamp
      nullable: false
  quality:
    customer_id_unique: true
    customer_name_not_null: true
  service:
    freshness: 15_minutes
    availability_target: 99.9_percent`;
      } else if (line.startsWith('metrics: total_revenue:')) {
        codeText = `metrics:
  total_revenue:
    description: Total recognized sales revenue
    expression: SUM(order_revenue)
  total_orders:
    description: Total number of completed orders
    expression: COUNT(DISTINCT order_id)
  average_order_value:
    description: Average revenue per completed order
    expression: total_revenue / total_orders`;
      } else if (line.startsWith('customer_id | date | purchase_count')) {
        codeText = `customer_id | date       | purchase_count
101         | 2026-11-01 | 10
101         | 2026-11-02 | 12
101         | 2026-11-03 | 15`;
      } else if (line.startsWith('from fastapi import')) {
        codeText = `from fastapi import FastAPI

app = FastAPI()

products = {
    101: {
        "product_id": 101,
        "product_name": "Laptop",
        "category": "Electronics",
        "available_stock": 250
    }
}

@app.get("/api/v1/products/{product_id}")
def get_product(product_id: int):
    product = products.get(product_id)
    if product is None:
        return {"error": "Product not found"}
    return product`;
      } else if (line.startsWith('def get_product(product_id):')) {
        codeText = `def get_product(product_id):
    cached_product = cache.get(product_id)
    if cached_product:
        return cached_product
    product = database.get_product(product_id)
    cache.set(product_id, product, expiration=300)
    return product`;
      } else if (line.startsWith('def calculate_average_order_value(')) {
        codeText = `def calculate_average_order_value(total_spend, order_count):
    if order_count == 0:
        return 0
    return total_spend / order_count`;
      } else if (line.startsWith('import pandas as pd')) {
        codeText = `import pandas as pd

data = {
    "customer_id": [101, 102, 103],
    "total_spend": [50000, 20000, 80000],
    "order_count": [20, 10, 40]
}
df = pd.DataFrame(data)
df["average_order_value"] = df["total_spend"] / df["order_count"]
df["purchase_frequency"] = df["order_count"]
print(df)`;
      } else if (line.startsWith('from sentence_transformers import')) {
        codeText = `from sentence_transformers import SentenceTransformer

model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
text = "Data engineering builds reliable pipelines."
embedding = model.encode(text)
print("Embedding dimension shape:", embedding.shape)`;
      } else if (line.startsWith('{') && line.includes('"product_id"')) {
        codeText = `{\n  "product_id": 101,\n  "product_name": "Laptop",\n  "category": "Electronics",\n  "available_stock": 250,\n  "price": 65000\n}`;
      } else if (line.startsWith('{') && line.includes('"document_id": "doc_101"')) {
        codeText = `{\n  "document_id": "doc_101",\n  "title": "Data Engineering Architecture",\n  "source": "internal_knowledge_base",\n  "category": "data_engineering",\n  "created_at": "2026-11-01",\n  "version": "1.0"\n}`;
      } else if (line.startsWith('{') && line.includes('"document_id": "spark_101"')) {
        codeText = `{\n  "document_id": "spark_101",\n  "chunk_id": "spark_101_01",\n  "source": "spark_documentation",\n  "title": "Apache Spark Overview",\n  "page": 1,\n  "category": "data_engineering",\n  "version": "1.0"\n}`;
      } else if (line.startsWith('{') && line.includes('"orders": [')) {
        codeText = `{\n  "customer_id": 101,\n  "name": "Rahul",\n  "orders": [\n    {\n      "order_id": 1001,\n      "amount": 5000\n    }\n  ]\n}`;
      }

      elements.push(renderCodeBlock(codeText));
      i++;
      continue;
    }

    // Numbered subheadings (e.g. 1.1 What is a Data Product?)
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

    // Lettered subheadings (e.g. A. Document Databases)
    const letterHeadMatch = line.match(/^([A-D]\.\s+.*)$/);
    if (letterHeadMatch) {
      elements.push(
        '          <div className="mt-4 mb-2">\n' +
        '            <h4 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-2">\n' +
        '              <span className="text-orange-600 font-mono">' + escapeJSX(letterHeadMatch[1]) + '</span>\n' +
        '            </h4>\n' +
        '          </div>'
      );
      i++;
      continue;
    }

    // Lab Headers (Lab 1 — ...)
    const labMatch = line.match(/^(Lab\s+\d+\s+—\s+.*)$/);
    if (labMatch) {
      elements.push(
        '          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">\n' +
        '            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">\n' +
        '              <Zap size={16} className="text-orange-600" />\n' +
        '              <span>' + escapeJSX(labMatch[1]) + '</span>\n' +
        '            </h3>\n' +
        '          </div>'
      );
      i++;
      continue;
    }

    // Category / Concept subheaders
    if (
      line === 'Learning Objectives' ||
      line === 'Module Overview' ||
      line === 'Conceptual Questions' ||
      line === 'Advanced Interview Questions' ||
      line === 'Project: Build a Unified Data Products and AI Serving Platform' ||
      line === 'Business Scenario' ||
      line === 'Required Architecture' ||
      line === 'Project Deliverables' ||
      line === 'Tasks:' ||
      line === 'Objective:' ||
      line === 'Expected learning:' ||
      line === 'Sources:' ||
      line === 'Nodes:' ||
      line === 'Relationships:' ||
      line === 'Problems' ||
      line === 'Benefits' ||
      line === 'Challenges' ||
      line === 'Examples:' ||
      line === 'Common technologies:' ||
      line === 'Common API architectures:' ||
      line === 'Typical layers:' ||
      line === 'Important concepts:' ||
      line === 'Important governance areas:' ||
      line === 'Important metrics:' ||
      line === 'Common tasks:' ||
      line === 'Step 1: Collect documents' ||
      line === 'Step 2: Parse documents' ||
      line === 'Step 3: Clean data' ||
      line === 'Step 4: Chunk documents' ||
      line === 'Step 5: Generate embeddings' ||
      line === 'Step 6: Store vectors' ||
      line === 'Step 7: Build search indexes' ||
      line === 'Traditional approach' ||
      line === 'Product-oriented approach' ||
      line === 'Traditional ETL:' ||
      line === 'Reverse ETL:' ||
      line === 'Without a feature store:' ||
      line === 'With a feature store:' ||
      line === 'Module 22 — Key Takeaways'
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
    if (line.startsWith('• ') || line.startsWith('- ')) {
      elements.push(
        '          <li className="text-xs sm:text-sm text-stone-700 leading-relaxed ml-4 list-disc marker:text-orange-500 my-1">\n' +
        '            ' + escapeJSX(line.substring(2)) + '\n' +
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

console.log('Writing DataEngineeringDataProductsSections.jsx with', buckets.length, 'sections...');

let outputJsx = `// projectx/src/Componets/DataEngineeringDataProductsSections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, Activity, Zap, ShieldAlert, CheckCircle, RefreshCw, Layers, Gauge, Database, Cpu, HardDrive, Share2, Sparkles, Network, Binary, Bot } from 'lucide-react';

export const dataProductsSectionsMeta = [
${sectionHeaders.map(sh => `  { id: ${sh.id}, title: ${JSON.stringify(sh.title)}, category: ${JSON.stringify(sh.category)} }`).join(',\n')}
];

export const DataProductsSection = memo(function DataProductsSection({ sectionId }) {
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

export default DataProductsSection;
`;

const targetPath = path.resolve(__dirname, '../src/Componets/DataEngineeringDataProductsSections.jsx');
fs.writeFileSync(targetPath, outputJsx, 'utf8');
console.log('Successfully generated DataEngineeringDataProductsSections.jsx! Size:', outputJsx.length);
