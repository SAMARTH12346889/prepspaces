import React from "react";
import { Database, Layers, CheckCircle2, ArrowRight, ExternalLink, Workflow } from "lucide-react";

export default function DataEngineeringIntroSections() {
  return (
    <div className="space-y-10">
      {/* MODULE OVERVIEW & LEARNING OBJECTIVES */}
      <section className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Course Roadmap
          </span>
          <span className="text-xs font-mono text-stone-500">Executive Summary</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 1: Complete Curriculum Specification
        </h2>
        <div className="space-y-3 text-stone-700 leading-relaxed text-sm sm:text-base">
          <div className="my-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-200/80 flex items-center justify-between text-xs">
            <span className="font-semibold text-stone-800">&#128279; An Overview of Data Pipeline Architecture</span>
            <a href="https://images.openai.com/static-rsc-4/kLwbIixB_3P2sXo__6aSl6FqDLoU_rAzNrBfrGwjzHwBIJ67mkIRuAApCnYeBqCNgdYhBok-msz0gPz5acBEr9kJjKlqIt6rcrDRj6cVZd6OL9pLA2zOHRA4GgJ2LzbYF3muNq3fCv-hB_7YaRoqEfJxf7rMVgoP8aQuSlzDT-M?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Reference Link &rarr;</a>
          </div>
          <div className="my-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-200/80 flex items-center justify-between text-xs">
            <span className="font-semibold text-stone-800">&#128279; Data Engineering Architecture Overview: Scalable Analytics &amp; ML | Sunil Kumar Reddy posted on the topic | LinkedIn</span>
            <a href="https://images.openai.com/static-rsc-4/pSbKAqRlgjPq2GmqOz4dUSeWuvi82s-aX2bSly6FHJxxhe5hNikFDtX-GNinvKCPpqtKAWhDg4PySCNuDvZzXY1K0rQ1nIGHFGpVZSYy00KhnY2Ju088OKTtZBDDLI5Uq-As-0eYIsoVvL_CNWyPbxFiIiQrRBeamiltYqebzcw?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Reference Link &rarr;</a>
          </div>
          <div className="my-2 p-2.5 rounded-lg bg-orange-50/60 border border-orange-200/80 flex items-center justify-between text-xs">
            <span className="font-semibold text-stone-800">&#128279; 🏗️ DATA LAKE &amp; DATA WAREHOUSE</span>
            <a href="https://images.openai.com/static-rsc-4/qCGaiWeA_DYgEiBvLP5HoqwRmtC3jgJ0Hi9qoDEafm7PSAkV9Qpu7UZsZQs8mDfrIjeKN44Bbsmxlft7U6v_69cRlQxopGm2kd-SNArJRduF1VVAyKvSvNagY-ezAF0aXAsqbQPgEo5mPH7jMptE-tinZxmiN1LCGykQBjGwk2Y?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Reference Link &rarr;</a>
          </div>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">Module overview</h3>
          <p>Data Engineering is the foundation of modern data-driven organizations. Every time someone purchases a product, makes a payment, watches a video, searches Google, or uses a banking application, data is generated.</p>
          <p>However, raw data by itself is rarely useful. It must be collected, organized, cleaned, transformed, stored, secured, and delivered to systems that can use it.</p>
          <p>This is where Data Engineering comes in.</p>
          <p>Imagine an e-commerce company receiving millions of records every day from customer accounts, product searches, orders, payments, delivery partners, and mobile applications.</p>
          <p>The company wants to answer questions such as:</p>
          <p>How much revenue did we generate today?</p>
          <p>Which products are most popular?</p>
          <p>Which customers are likely to purchase again?</p>
          <p>How many orders are delayed?</p>
          <p>Which products should we recommend to individual customers?</p>
          <p>How should we forecast inventory for the next month?</p>
          <p>To answer these questions reliably, the company needs a complete data infrastructure. A Data Engineer designs and maintains that infrastructure.</p>
          <p>This module introduces the architecture, concepts, technologies, and engineering principles behind these systems.</p>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">Learning objectives</h3>
          <h3 className="text-lg font-bold text-stone-900 mt-4 mb-2">By the end of this module, you should be able to:</h3>
          <p>Explain Data Engineering and its role in modern organizations.</p>
          <p>Understand the evolution of data engineering architectures.</p>
          <p>Differentiate Data Engineers, Data Analysts, and Data Scientists.</p>
          <p>Understand the complete Data Engineering lifecycle.</p>
          <p>Identify different data sources and data formats.</p>
          <p>Understand OLTP and OLAP architectures.</p>
          <p>Compare batch processing and stream processing.</p>
          <p>Understand ETL and ELT pipelines.</p>
          <p>Differentiate data warehouses, data lakes, and lakehouses.</p>
          <p>Design the architecture of a basic data pipeline.</p>
          <p>Understand data integration, transformation, and quality.</p>
          <p>Identify the technology ecosystem used by modern Data Engineers.</p>
        </div>
      </section>
      {"/* SECTION 1: Introduction to Data Engineering */"}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">Foundations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction to Data Engineering
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">1.1 What is Data Engineering?</h3>
          <p>Data Engineering is the discipline of designing, developing, deploying, and maintaining systems that collect, process, store, transform, and deliver data.</p>
          <p>The primary objective is to make data accessible, reliable, accurate, secure, and usable for other applications and teams.</p>
          <p>A Data Engineer creates the infrastructure that allows organizations to convert raw data into meaningful information.</p>
          <p>Consider a simple example.</p>
          <p>An online shopping application generates the following raw information whenever a customer places an order:</p>
          <p>&#123; "order_id": 10521, "customer_id": 204, "product_id": 501, "quantity": 2, "price": 1500, "payment_status": "SUCCESS", "order_timestamp": "2026-11-09T10:30:00" &#125;</p>
          <p>This record is useful, but a company cannot efficiently operate its business by manually examining millions of such records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The company needs systems to:</h4>
          <p>Collect order information automatically.</p>
          <p>Store the information securely.</p>
          <p>Remove duplicate records.</p>
          <p>Validate payment information.</p>
          <p>Calculate total revenue.</p>
          <p>Combine orders with customer and product information.</p>
          <p>Make the processed information available to dashboards and machine learning systems.</p>
          <p>A Data Engineer builds the systems responsible for these activities.</p>
          <p>Raw data versus engineered data</p>
          <p>Raw data</p>
          <p>INPUT RECORDS</p>
          <p>&#123;"product":"Laptop","price":50000,"qty":2&#125; &#123;"product":"Mobile","price":20000,"qty":1&#125; &#123;"product":"Laptop","price":50000,"qty":1&#125;</p>
          <p>Unprocessed records from business applications.</p>
          <p>Data Engineering pipeline</p>
          <p>Validation · Cleaning · Transformation · Storage</p>
          <p>PROCESSED DATA</p>
          <p>Product</p>
          <p>Revenue</p>
          <p>Laptop</p>
          <p>₹1,50,000</p>
          <p>Mobile</p>
          <p>₹20,000</p>
          <p>Total</p>
          <p>₹1,70,000</p>
          <p>Validated and aggregated data ready for analysis.</p>
          <p>The important distinction is that Data Engineering is not simply about storing information. It is about building reliable systems that make information useful.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">1.2 Why is Data Engineering important?</h3>
          <p>Modern applications generate enormous amounts of data.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider some examples:</h4>
          <p>E-commerce: An online shopping platform generates customer activity, product information, payments, inventory updates, and delivery records.</p>
          <p>Banking: Banks generate transaction records, customer information, loan applications, credit-card activities, and fraud alerts.</p>
          <p>Healthcare: Hospitals generate patient records, laboratory results, medical images, appointments, and treatment histories.</p>
          <p>Social media: Platforms generate posts, comments, reactions, messages, video views, and recommendation events.</p>
          <p>All this information needs to be collected and processed.</p>
          <p>Without a reliable data engineering infrastructure, organizations experience problems such as:</p>
          <p>Inconsistent data across different departments.</p>
          <p>Duplicate or missing customer records.</p>
          <p>Incorrect business reports.</p>
          <p>Delayed analytics.</p>
          <p>Unreliable machine learning predictions.</p>
          <p>Difficulties processing large volumes of information.</p>
          <p>Data Engineering solves these problems by creating standardized data systems.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">1.3 Evolution of Data Engineering</h3>
          <p>Data Engineering evolved alongside the growth of computing, databases, the internet, and cloud platforms.</p>
          <p>Understanding this evolution helps explain why modern architectures look the way they do.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>A Practical Guide to Setting Up Your Data Lakehouse across AWS, Azure, GCP and Snowflake - Tiger Analytics</span></div>
            <a href="https://images.openai.com/static-rsc-4/1DCp8jrr16w3M3K73v3jHTu8GbA_unthk5J-xDNt7kBxXDxdiiPobPUJOJ73UmFswYEABfRM-9UdDFR-6lgr3vJXwOXQBUkZHvCLG0R0h53UdWcsRArO-4DcQPUjyPhpZT3jv9tVtDp09RPeQarFYWzc5FoG3MH6DdIv9a0J1Rw?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>tigeranalytics.com</span></div>
            <a href="https://www.tigeranalytics.com/blog/a-practical-guide-to-setting-up-your-data-lakehouse-across-aws-azure-gcp-and-snowflake/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Stage 1: Traditional databases</p>
          <p>During the early stages of enterprise computing, most applications stored information in relational databases.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>MySQL</p>
          <p>Oracle Database</p>
          <p>Microsoft SQL Server</p>
          <p>PostgreSQL</p>
          <p>Companies stored customer information, employee records, transactions, and inventory in structured tables.</p>
          <p>Traditional databases worked well because data volumes and processing requirements were relatively manageable.</p>
          <p>However, as organizations grew, they needed to analyze information across many applications.</p>
          <p>Stage 2: Data warehouses</p>
          <p>Businesses started building separate systems for analytical workloads.</p>
          <p>A data warehouse collects data from multiple operational databases and organizes it for reporting and analytical queries.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A retail company might have separate databases for:</h4>
          <p>Customer information.</p>
          <p>Orders.</p>
          <p>Payments.</p>
          <p>Inventory.</p>
          <p>The data warehouse combines this information to provide a unified view of business performance.</p>
          <p>Technologies such as Teradata, Oracle, and Microsoft SQL Server played important roles in traditional enterprise data warehousing.</p>
          <p>Stage 3: Big Data and Hadoop</p>
          <p>As internet services, social media, and digital applications grew, companies started generating much larger volumes of data.</p>
          <p>Traditional databases became expensive or difficult to use for certain large-scale processing workloads.</p>
          <p>This led to the adoption of distributed computing technologies.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important technologies included:</h4>
          <p>Apache Hadoop.</p>
          <p>Hadoop Distributed File System (HDFS).</p>
          <p>MapReduce.</p>
          <p>Apache Hive.</p>
          <p>Apache Pig.</p>
          <p>Distributed computing means dividing a large computational task across multiple machines.</p>
          <p>For example, imagine processing one billion website activity records.</p>
          <p>Instead of processing every record on one computer, a distributed system divides the work among multiple machines.</p>
          <p>Each machine processes a portion of the data, and the results are combined.</p>
          <p>This made large-scale data processing more practical.</p>
          <p>Stage 4: Cloud data engineering</p>
          <p>Cloud computing changed how organizations built data infrastructure.</p>
          <p>Instead of purchasing and maintaining physical servers, companies could use cloud storage, managed databases, and scalable computing services.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important services include:</h4>
          <p>Amazon S3.</p>
          <p>Google Cloud Storage.</p>
          <p>Azure Data Lake Storage.</p>
          <p>Amazon Redshift.</p>
          <p>Google BigQuery.</p>
          <p>Snowflake.</p>
          <p>Cloud platforms introduced flexible storage and computing models.</p>
          <p>Organizations could store enormous amounts of data and allocate processing resources according to their workloads.</p>
          <p>Stage 5: Modern data platforms</p>
          <p>Modern data engineering combines cloud infrastructure, distributed processing, streaming, analytics, orchestration, and governance.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The modern ecosystem includes:</h4>
          <p>Apache Spark for distributed processing.</p>
          <p>Apache Kafka for event streaming.</p>
          <p>Apache Airflow for workflow orchestration.</p>
          <p>dbt for SQL-based transformations.</p>
          <p>Snowflake and BigQuery for analytical data warehousing.</p>
          <p>Apache Iceberg, Delta Lake, and Apache Hudi for lakehouse table management.</p>
          <p>The focus is no longer simply on moving data from one database to another.</p>
          <p>Modern Data Engineering also emphasizes reliability, automation, scalability, security, observability, cost efficiency, and real-time processing.</p>
        </div>
      </section>
      {"/* SECTION 2: What is the Role of a Data Engineer? */"}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">Role & Competencies</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. What is the Role of a Data Engineer?
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.1 Data Engineer vs Data Analyst vs Data Scientist</h3>
          <p>These three professions work with data, but they solve different problems.</p>
          <p>Imagine a company wants to understand why its sales have decreased.</p>
          <p>Each professional approaches the problem differently.</p>
          <p>Data Engineer</p>
          <p>Builds the infrastructure that collects, cleans, transforms, and delivers the company's data.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Fhits The Content House</span></div>
            <a href="https://images.openai.com/static-rsc-4/H5mUaT_fVqSKYWV0gI0oO_NHZ6Y4qL_eGOXf_dfD0FNICojqMtPqLc9VouF-pqJkf7C3qSxT1-x1OchVlFswspWWsRACsiIXH2dBLe1Cy1pMo6II6dPFSR4WF6RMqn_AxM0zAtKhbO75793S4XRvSqBTgssKC8-h2rpw_X-m6fI?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Data Analyst</p>
          <p>Uses prepared data to understand business performance and create reports and dashboards.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Training on Introduction to AI, Data Science and Machine Learning with Python - ForElite Training Institute</span></div>
            <a href="https://images.openai.com/static-rsc-4/YeN3-JBPlN-7KxDqPAlFav2BQfEU6GId5eTIXzOSkj3SAHRebAztsQnJdB3cX_gWIdEp0HldVbooGE9JbK16vBv42XT_GTGDAo1n7Fght4YO5g0gVg56LYg-LQvPF41N887x-tz2eC2ej-OwtQks_1eDJMz_Yy_LIgtHEkTCUJg?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Data Scientist</p>
          <p>Uses statistics, machine learning, and experimentation to discover patterns and build predictive models.</p>
          <p>Example: An e-commerce business</p>
          <p>Suppose an e-commerce business experienced a 20% reduction in monthly sales.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The Data Engineer:</h4>
          <p>Collects customer, order, and payment records.</p>
          <p>Builds pipelines to combine information.</p>
          <p>Fixes missing and duplicate records.</p>
          <p>Creates reliable analytical tables.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The Data Analyst:</h4>
          <p>Analyzes monthly sales.</p>
          <p>Identifies products with declining sales.</p>
          <p>Compares sales across geographic regions.</p>
          <p>Creates Power BI or Tableau dashboards.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The Data Scientist:</h4>
          <p>Builds a model to predict customer purchasing behavior.</p>
          <p>Investigates customer churn.</p>
          <p>Develops product recommendation algorithms.</p>
          <p>Predicts future sales.</p>
          <p>Comparison</p>
          <p>Area</p>
          <p>Data Engineer</p>
          <p>Data Analyst</p>
          <p>Data Scientist</p>
          <p>Primary goal</p>
          <p>Build data systems</p>
          <p>Understand data</p>
          <p>Predict and discover</p>
          <p>Main work</p>
          <p>Data pipelines</p>
          <p>Reports and analysis</p>
          <p>ML and statistics</p>
          <p>SQL</p>
          <p>Advanced</p>
          <p>Advanced</p>
          <p>Moderate–Advanced</p>
          <p>Python</p>
          <p>Common</p>
          <p>Useful</p>
          <p>Common</p>
          <p>Spark</p>
          <p>Common in large systems</p>
          <p>Less common</p>
          <p>Common in large workloads</p>
          <p>Visualization</p>
          <p>Supporting skill</p>
          <p>Core skill</p>
          <p>Useful</p>
          <p>Machine learning</p>
          <p>Infrastructure support</p>
          <p>Occasional</p>
          <p>Core skill</p>
          <p>There is overlap between these professions. The exact responsibilities depend on the organization.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">2.2 Responsibilities of a Data Engineer</h3>
          <p>A Data Engineer is responsible for several important engineering activities.</p>
          <p>A. Data ingestion</p>
          <p>Data ingestion means collecting data from different sources and bringing it into a central data platform.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Sources can include:</h4>
          <p>Relational databases.</p>
          <p>REST APIs.</p>
          <p>Application logs.</p>
          <p>CSV and JSON files.</p>
          <p>IoT sensors.</p>
          <p>Event streams.</p>
          <p>Third-party services.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>A company receives customer information through an API and imports it into a data platform every hour.</p>
          <p>B. Data storage</p>
          <p>Once data is collected, it needs to be stored in an appropriate system.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>PostgreSQL for relational data.</p>
          <p>Amazon S3 for object storage.</p>
          <p>Snowflake for analytical workloads.</p>
          <p>BigQuery for cloud analytics.</p>
          <p>Apache Iceberg tables for lakehouse architectures.</p>
          <p>The choice depends on data volume, workload, performance requirements, and cost.</p>
          <p>C. Data processing</p>
          <p>Raw information frequently requires cleaning and transformation.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>Raw Customer Records Name: sam Email: SAM@EXAMPLE.COM Age: 22 Name: SAM Email: sam@example.com Age: 22</p>
          <p>These records may represent the same customer.</p>
          <p>A Data Engineer needs to identify duplicate records and standardize their values.</p>
          <p>D. Pipeline development</p>
          <p>A data pipeline automates the movement and processing of data.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>PostgreSQL ↓ Data Extraction ↓ Data Validation ↓ Data Transformation ↓ Data Warehouse ↓ Business Dashboard</p>
          <p>E. Pipeline monitoring</p>
          <p>A pipeline should not silently fail.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A Data Engineer monitors:</h4>
          <p>Whether data arrived on time.</p>
          <p>Whether processing completed successfully.</p>
          <p>Whether records were lost.</p>
          <p>Whether duplicate records increased.</p>
          <p>Whether a pipeline exceeded its expected execution time.</p>
          <p>F. Performance optimization</p>
          <p>As data grows, existing systems may become slow or expensive.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data Engineers optimize:</h4>
          <p>SQL queries.</p>
          <p>Database indexes.</p>
          <p>Partitioning.</p>
          <p>File formats.</p>
          <p>Distributed processing.</p>
          <p>Data transfer.</p>
          <p>Cloud resource utilization.</p>
          <p>G. Security and governance</p>
          <p>Data systems often contain sensitive business and customer information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Responsibilities include:</h4>
          <p>Access control.</p>
          <p>Encryption.</p>
          <p>Data masking.</p>
          <p>Data retention.</p>
          <p>Audit logging.</p>
          <p>Compliance support.</p>
          <p>Data lineage.</p>
          <p>These are essential parts of production-grade data engineering.</p>
        </div>
      </section>
      {"/* SECTION 3: Data Engineering Lifecycle */"}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">Lifecycle Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. Data Engineering Lifecycle
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>The Data Engineering lifecycle describes how data moves from its original source to a form that can be consumed by applications, analysts, and machine learning systems.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>The Data Engineering Lifecycle - DEV Community</span></div>
            <a href="https://images.openai.com/static-rsc-4/PJ7tCcj8LNp611Gv3Dx2yhkFWjPl_z8FAOswsxHdAM2vvj29ypxdKauYua6595UrjJZJ45OURvCxCrHP-W6DzBlceOI7HExWWa-PWC1d-lhpWXdVSq_Q9dKipWsZ1djv-0Q_e3nD15iwrjfnTYZ0cKJXq7Vi4RlUehkxmE0eyRc?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>dev.to</span></div>
            <a href="https://dev.to/mirinagonzales/the-data-engineering-lifecycle-2n7m?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Let's understand each stage.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.1 Data generation</h3>
          <p>Data generation is the starting point.</p>
          <p>Data is produced by applications, users, devices, databases, and external services.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>A customer places an order.</p>
          <p>A user clicks a website button.</p>
          <p>A bank processes a transaction.</p>
          <p>A temperature sensor records a measurement.</p>
          <p>A mobile application generates an activity log.</p>
          <p>Consider an online shopping platform.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">When a user opens a product page, the application might generate:</h4>
          <p>&#123; "event_type": "product_view", "user_id": 101, "product_id": 501, "event_timestamp": "2026-11-09T10:15:00" &#125;</p>
          <p>This event becomes one of the inputs to the data engineering system.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.2 Data ingestion</h3>
          <p>Ingestion brings data from its original source into the data infrastructure.</p>
          <p>There are different ingestion approaches.</p>
          <p>Full extraction: Extract all available records.</p>
          <p>Incremental extraction: Extract only newly created or updated records.</p>
          <p>Change Data Capture (CDC): Capture database changes such as inserts, updates, and deletes.</p>
          <p>For example, instead of exporting an entire customer database every hour, a CDC system can capture only changes made since the previous processing interval.</p>
          <p>This can significantly reduce unnecessary data movement.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.3 Data storage</h3>
          <p>Ingested information needs to be stored.</p>
          <p>Storage systems are selected based on how the data will be used.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>Storage system</p>
          <p>Typical usage</p>
          <p>PostgreSQL</p>
          <p>Relational application data</p>
          <p>Amazon S3</p>
          <p>Large-scale object storage</p>
          <p>Snowflake</p>
          <p>Analytical warehouse</p>
          <p>Google BigQuery</p>
          <p>Cloud analytics</p>
          <p>Redis</p>
          <p>Fast in-memory access</p>
          <p>Data lake storage</p>
          <p>Raw and processed files</p>
          <p>Storage architecture affects performance, scalability, availability, and operating cost.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.4 Data processing</h3>
          <p>Data processing converts raw information into a more useful structure.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It can include:</h4>
          <p>Removing invalid records.</p>
          <p>Standardizing data formats.</p>
          <p>Handling missing values.</p>
          <p>Joining multiple datasets.</p>
          <p>Filtering information.</p>
          <p>Aggregating records.</p>
          <p>Applying business rules.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Raw transaction records:</h4>
          <p>Transaction</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>T1</p>
          <p>2</p>
          <p>500</p>
          <p>T2</p>
          <p>3</p>
          <p>200</p>
          <p>T3</p>
          <p>1</p>
          <p>1000</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A transformation can calculate the transaction amount:</h4>
          <p>\[ \text&#123;Revenue&#125; = \text&#123;Quantity&#125; \times \text&#123;Price&#125; \]</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The processed result becomes:</h4>
          <p>Transaction</p>
          <p>Revenue</p>
          <p>T1</p>
          <p>1000</p>
          <p>T2</p>
          <p>600</p>
          <p>T3</p>
          <p>1000</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.5 Data serving</h3>
          <p>Data serving means making processed information available to consumers.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consumers may include:</h4>
          <p>Business intelligence dashboards.</p>
          <p>Analysts.</p>
          <p>Machine learning applications.</p>
          <p>APIs.</p>
          <p>Reporting applications.</p>
          <p>Other data pipelines.</p>
          <p>For example, an analytics team might access a table called daily_sales_summary.</p>
          <p>They do not need to process millions of raw order records themselves every time they create a report.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.6 Orchestration</h3>
          <p>Orchestration coordinates the execution of different pipeline activities.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider a daily sales pipeline:</h4>
          <p>Extract order data.</p>
          <p>Validate incoming records.</p>
          <p>Process customer information.</p>
          <p>Calculate revenue.</p>
          <p>Update the warehouse table.</p>
          <p>Refresh the dashboard dataset.</p>
          <p>These activities have dependencies.</p>
          <p>The revenue calculation must not start before the necessary order information has been loaded.</p>
          <p>Workflow orchestration manages these dependencies, retries, schedules, and execution states.</p>
          <p>Popular orchestration technologies include Apache Airflow, Dagster, and Prefect.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.7 Monitoring and observability</h3>
          <p>Monitoring helps engineers understand whether their systems are functioning correctly.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important monitoring metrics include:</h4>
          <p>Pipeline execution time.</p>
          <p>Processing failures.</p>
          <p>Number of incoming records.</p>
          <p>Number of rejected records.</p>
          <p>Data freshness.</p>
          <p>Storage utilization.</p>
          <p>Processing cost.</p>
          <p>Observability goes further by helping engineers investigate why a system behaved unexpectedly.</p>
          <p>For example, if yesterday's dashboard shows unusually low revenue, observability tools can help identify whether the issue came from missing source data, failed transformations, or delayed pipeline execution.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">3.8 Governance and security</h3>
          <p>Governance establishes rules for how organizational data is defined, accessed, protected, and managed.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Only authorized employees can access customer information.</p>
          <p>Sensitive fields are masked.</p>
          <p>Every dataset has an owner.</p>
          <p>Data definitions are documented.</p>
          <p>Data retention rules are enforced.</p>
          <p>Data lineage is maintained.</p>
          <p>Data engineering lifecycle activities are not always strictly sequential. Governance, monitoring, and security must operate across the entire lifecycle.</p>
        </div>
      </section>
      {"/* SECTION 4: Data Sources and Data Consumers */"}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">Data Ecosystem</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. Data Sources and Data Consumers
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.1 What are data sources?</h3>
          <p>A data source is any system, application, device, or file from which information originates.</p>
          <p>Modern organizations rarely store all their information in one location.</p>
          <p>They use multiple applications for different operational activities.</p>
          <p>Common categories of data sources</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">Relational databases</strong></li>
          </ol>
          <p>These databases organize information into tables.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>MySQL.</p>
          <p>PostgreSQL.</p>
          <p>Oracle Database.</p>
          <p>Microsoft SQL Server.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example customer table:</h4>
          <p>customer_id</p>
          <p>name</p>
          <p>city</p>
          <p>101</p>
          <p>Rahul</p>
          <p>Pune</p>
          <p>102</p>
          <p>Priya</p>
          <p>Mumbai</p>
          <p>103</p>
          <p>Amit</p>
          <p>Delhi</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">NoSQL databases</strong></li>
          </ol>
          <p>NoSQL systems support different data structures and access patterns.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>MongoDB.</p>
          <p>Apache Cassandra.</p>
          <p>DynamoDB.</p>
          <p>Redis.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">MongoDB document example:</h4>
          <p>&#123; "customer_id": 101, "name": "Rahul", "preferences": &#123; "language": "English", "notifications": true &#125; &#125;</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">APIs</strong></li>
          </ol>
          <p>An Application Programming Interface allows one application to communicate with another system.</p>
          <p>For example, a company might retrieve currency information from an external API.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A simplified API response:</h4>
          <p>&#123; "currency": "USD", "rate": 83.25, "updated_at": "2026-11-09T10:00:00" &#125;</p>
          <p>Data Engineers commonly use HTTP requests to extract API data.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="4"><strong className="text-stone-900">Files</strong></li>
          </ol>
          <p>Organizations also receive data through files.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common formats include:</h4>
          <p>CSV.</p>
          <p>JSON.</p>
          <p>XML.</p>
          <p>Parquet.</p>
          <p>Avro.</p>
          <p>ORC.</p>
          <p>Excel.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="5"><strong className="text-stone-900">Application logs</strong></li>
          </ol>
          <p>Applications produce logs that record system activity.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>2026-11-09 10:15:20 INFO User logged in 2026-11-09 10:15:24 INFO Product viewed 2026-11-09 10:15:29 ERROR Payment failed</p>
          <p>Logs help with operational analytics, debugging, and security monitoring.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="6"><strong className="text-stone-900">IoT devices</strong></li>
          </ol>
          <p>Internet of Things devices generate continuous measurements.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Temperature sensors.</p>
          <p>Vehicle tracking systems.</p>
          <p>Smart electricity meters.</p>
          <p>Manufacturing equipment.</p>
          <p>Industrial monitoring devices.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">4.2 What are data consumers?</h3>
          <p>Data consumers are the systems or people who use processed data.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Consumer</p>
          <p>How data is used</p>
          <p>Data Analysts</p>
          <p>Business analysis</p>
          <p>Data Scientists</p>
          <p>Statistical analysis and ML</p>
          <p>Business Executives</p>
          <p>Management dashboards</p>
          <p>Applications</p>
          <p>Personalization and recommendations</p>
          <p>ML systems</p>
          <p>Model training and inference</p>
          <p>Reporting systems</p>
          <p>Financial and operational reports</p>
          <p>Complete example</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">An e-commerce organization can have this architecture:</h4>
          <p>Data sources</p>
          <p>Orders database</p>
          <p>MySQL</p>
          <p>Web application</p>
          <p>Activity events</p>
          <p>Payment service</p>
          <p>Payment records</p>
          <p>Delivery service</p>
          <p>Shipment updates</p>
          <p>Data ingestion and processing</p>
          <p>Connectors · Kafka · Spark · SQL transformations</p>
          <p>Central data platform</p>
          <p>Data lake · Data warehouse · Lakehouse</p>
          <p>Data consumers</p>
          <p>BI dashboards</p>
          <p>ML systems</p>
          <p>Business teams</p>
          <p>Applications and APIs</p>
          <p>The Data Engineer connects these different systems and makes their information usable.</p>
        </div>
      </section>
      {"/* SECTION 5: Structured, Semi-Structured, and Unstructured Data */"}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">Data Models</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. Structured, Semi-Structured, and Unstructured Data
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Data can exist in different formats.</p>
          <p>Understanding these categories is essential because storage and processing strategies depend on the structure of the information.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.1 Structured data</h3>
          <p>Structured data follows a predefined schema.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A schema defines the organization of data, including:</h4>
          <p>Column names.</p>
          <p>Data types.</p>
          <p>Relationships.</p>
          <p>Constraints.</p>
          <p>Required fields.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Employee ID</p>
          <p>Name</p>
          <p>Department</p>
          <p>Salary</p>
          <p>101</p>
          <p>Rahul</p>
          <p>IT</p>
          <p>50000</p>
          <p>102</p>
          <p>Priya</p>
          <p>HR</p>
          <p>45000</p>
          <p>103</p>
          <p>Amit</p>
          <p>Finance</p>
          <p>60000</p>
          <p>This data has a clearly defined structure.</p>
          <p>It is commonly stored in relational database tables.</p>
          <p>Characteristics</p>
          <p>Easy to query using SQL.</p>
          <p>Well-defined schema.</p>
          <p>Suitable for relational operations.</p>
          <p>Easy to validate using constraints.</p>
          <p>Commonly used in business transactions and reporting.</p>
          <p>Examples include banking transactions, customer tables, inventory records, and employee records.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.2 Semi-structured data</h3>
          <p>Semi-structured data does not necessarily follow a rigid tabular format, but it contains organizational information.</p>
          <p>That organization may be expressed through keys, tags, nested objects, or metadata.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">JSON example:</h4>
          <p>&#123; "user_id": 101, "name": "Rahul", "address": &#123; "city": "Pune", "country": "India" &#125;, "interests": [ "technology", "gaming" ] &#125;</p>
          <p>Notice that the address is a nested object and interests are represented as an array.</p>
          <p>Different records may also contain different fields.</p>
          <p>Other examples include XML, many application logs, and certain event formats.</p>
          <p>Characteristics</p>
          <p>Flexible structure.</p>
          <p>May contain nested data.</p>
          <p>Can support evolving schemas.</p>
          <p>Often used in APIs and modern applications.</p>
          <p>Requires appropriate parsing and validation.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">5.3 Unstructured data</h3>
          <p>Unstructured data does not naturally follow a fixed tabular schema.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Images.</p>
          <p>Audio recordings.</p>
          <p>Videos.</p>
          <p>PDF documents.</p>
          <p>Email content.</p>
          <p>Free-form text.</p>
          <p>Medical scans.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>PPT - C3PI: Computational Photography Project for Pill Identification PowerPoint Presentation - ID:1552932</span></div>
            <a href="https://images.openai.com/static-rsc-4/VIclY7jKBvqs9p5LyVhqoXuTeKonyRoej_7BlXgJl7PEAWt2xXoC9f8ogJyVxpVs2epPAijkSVP6pps4hj7M8ucxEDr2OMKo386Mvqhq2zLlD6bxGecpTN1FdxruCEne9sWg1RdVbVC1fkowDGZOGz1IZE-AuSMic97hMs97N6I?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Techno BPM: The Heartbeat of Techno Music - Techno Airlines</span></div>
            <a href="https://images.openai.com/static-rsc-4/THAAPfVBhMFlYAFrnPvESj0TmrW2vYGxAGM6TUmbDOdZMiiUaIZgcXW8FUNrDy3JSo3oIlSWY3ps8Ra5e9OkYP4_qF9soc5VMhEVraaozF1RP3FkJ4G52mpKuCnkiTGBXI0xle5uEXMlkNtwXzNBBaVvx-k97F7ZSbltZbjNOnA?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Major Hack of Camera Company Offers Four Key Lessons on Surveillance | American Civil Liberties Union</span></div>
            <a href="https://images.openai.com/static-rsc-4/vixrJAw1Jtj97dJShOF83OzYtD-ZFWrr2DMq7Zf7spt5VtEup5dlcP5F064k0HTihD6MMwbAlcvT4UHIv387NG_U79_xNJUqPwDWvQnkOn1E-mDQk5pBwzyzPETRdmIXTZjklYzJB-o5Te41LBDx4gpgAkXipd8nfg6zRwi-aZY?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>4</p>
          <p>Consider a hospital storing MRI images.</p>
          <p>An MRI image contains valuable information, but it cannot be directly organized into ordinary relational columns in the same way as a patient's name or appointment date.</p>
          <p>The file itself may be stored in object storage, while its metadata is maintained in a database.</p>
          <p>Comparison</p>
          <p>Feature</p>
          <p>Structured</p>
          <p>Semi-structured</p>
          <p>Unstructured</p>
          <p>Fixed schema</p>
          <p>Yes</p>
          <p>Flexible</p>
          <p>Usually no</p>
          <p>Main formats</p>
          <p>Tables</p>
          <p>JSON, XML</p>
          <p>Images, video, text</p>
          <p>Querying</p>
          <p>SQL</p>
          <p>SQL or document queries</p>
          <p>Specialized processing</p>
          <p>Storage</p>
          <p>Relational DB</p>
          <p>Document DB, files</p>
          <p>Object storage</p>
          <p>Common use</p>
          <p>Transactions</p>
          <p>APIs and events</p>
          <p>Media and documents</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important engineering concept: Schema</h4>
          <p>A schema describes how information is organized.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE customers ( customer_id INTEGER PRIMARY KEY, customer_name VARCHAR(100), email VARCHAR(150), age INTEGER );`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Here:</h4>
          <p>customer_id is an integer.</p>
          <p>customer_name is text.</p>
          <p>email is text.</p>
          <p>age is an integer.</p>
          <p>Schema enforcement helps prevent invalid records from entering a database.</p>
          <p>However, in modern data systems, schemas may evolve over time. Data Engineers must handle changes without breaking downstream consumers.</p>
        </div>
      </section>
      {"/* SECTION 6: OLTP vs OLAP Systems */"}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Systems Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. OLTP vs OLAP Systems
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>One of the most important foundations in data engineering is understanding the difference between transactional systems and analytical systems.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.1 What is OLTP?</h3>
          <p>OLTP stands for Online Transaction Processing.</p>
          <p>OLTP systems are designed to process everyday business transactions.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Customer placing an order.</p>
          <p>ATM withdrawal.</p>
          <p>Online payment.</p>
          <p>Bank transfer.</p>
          <p>Hotel reservation.</p>
          <p>Employee attendance registration.</p>
          <p>These systems prioritize fast, accurate transactions.</p>
          <p>Imagine a banking application.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">When a customer transfers ₹5,000, the system must:</h4>
          <p>Identify the source account.</p>
          <p>Verify sufficient balance.</p>
          <p>Deduct ₹5,000.</p>
          <p>Credit the destination account.</p>
          <p>Record the transaction.</p>
          <p>All these operations must be handled correctly.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Characteristics of OLTP</h4>
          <p>Frequent insert, update, and delete operations.</p>
          <p>Many small transactions.</p>
          <p>Fast response times.</p>
          <p>High concurrency.</p>
          <p>Strong transaction consistency requirements.</p>
          <p>Structured and normalized data are common.</p>
          <p>Example: Banking transactions</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`UPDATE accounts SET balance = balance - 5000 WHERE account_id = 101;`}</code>
            </pre>
          </div>
          <p>This is an example of an operational transaction.</p>
          <p>Real money transfers require additional validation, transaction management, security, and failure-handling logic.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.2 What is OLAP?</h3>
          <p>OLAP stands for Online Analytical Processing.</p>
          <p>OLAP systems are designed to analyze large amounts of historical and current information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Monthly revenue analysis.</p>
          <p>Customer segmentation.</p>
          <p>Sales forecasting.</p>
          <p>Product performance analysis.</p>
          <p>Financial reporting.</p>
          <p>Regional business comparisons.</p>
          <p>Imagine a bank analyzing five years of transactions.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It may want to identify:</h4>
          <p>Monthly transaction volumes.</p>
          <p>Average customer spending.</p>
          <p>Fraud patterns.</p>
          <p>Regional transaction trends.</p>
          <p>Growth in digital payments.</p>
          <p>OLAP systems are optimized for these analytical queries.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Characteristics of OLAP</h4>
          <p>Large read-heavy queries.</p>
          <p>Historical data analysis.</p>
          <p>Aggregations and calculations.</p>
          <p>Multiple-table analysis.</p>
          <p>Columnar storage is common.</p>
          <p>Analytical schemas such as star schemas are common.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT DATE_TRUNC('month', transaction_date) AS month, SUM(amount) AS total_transactions FROM transactions GROUP BY 1 ORDER BY 1;`}</code>
            </pre>
          </div>
          <p>This query calculates the total transaction amount for each month.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.3 OLTP vs OLAP comparison</h3>
          <p>Feature</p>
          <p>OLTP</p>
          <p>OLAP</p>
          <p>Purpose</p>
          <p>Daily operations</p>
          <p>Business analysis</p>
          <p>Operations</p>
          <p>INSERT, UPDATE, DELETE</p>
          <p>SELECT, JOIN, GROUP BY</p>
          <p>Workload</p>
          <p>Transactions</p>
          <p>Analytical queries</p>
          <p>Data</p>
          <p>Current operational data</p>
          <p>Historical and integrated data</p>
          <p>Query type</p>
          <p>Small and frequent</p>
          <p>Large and complex</p>
          <p>Users</p>
          <p>Customers and applications</p>
          <p>Analysts and management</p>
          <p>Common databases</p>
          <p>PostgreSQL, MySQL</p>
          <p>Snowflake, BigQuery</p>
          <p>Design</p>
          <p>Usually normalized</p>
          <p>Frequently dimensional</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">6.4 How do OLTP and OLAP work together?</h3>
          <p>Consider an online shopping company.</p>
          <p>The OLTP database manages customer orders.</p>
          <p>When a customer purchases a mobile phone, the application updates the order database.</p>
          <p>The analytical platform receives a copy of relevant information and prepares it for analysis.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Slice of BI: Life of DW-BI</span></div>
            <a href="https://images.openai.com/static-rsc-4/3JqfRfUyCsG1Fn5csMqsaj4qrnfB_Chrj7YBQygRDp0pDVZJgNOfPH966CyL4prsERdk9jRLH3_C_-Kea4_3taEgH51D-PgPy9P5TpKq2N7nmdFonCM0GO9CwW85OteqJ2024yAjAaGnKZRXlQ8UhjHogYl1ssfUA57l4ulr85E?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>sliceofbi.com</span></div>
            <a href="https://www.sliceofbi.com/2015/07/life-of-bi-business-intelligence.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Customer places order</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">OLTP Database (PostgreSQL)</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Data Extraction / CDC</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Data Transformation</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">OLAP Data Warehouse</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Business Intelligence</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Revenue Dashboard</span>
            </div>
          </div>
          <p>Why separate the systems?</p>
          <p>A company does not want a complicated five-year sales analysis query to slow down its live customer checkout system.</p>
          <p>Separate analytical infrastructure helps isolate workloads.</p>
          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs sm:text-sm text-orange-950 leading-relaxed my-4">
            Important: OLTP and OLAP are workload categories, not specific database products. Some modern databases support both types of workloads, but the underlying performance requirements remain different.
          </div>
        </div>
      </section>
      {"/* SECTION 7: Batch Processing vs Stream Processing */"}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">Processing Paradigms</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Batch Processing vs Stream Processing
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Data processing can happen in different ways depending on when the information needs to become available.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.1 Batch processing</h3>
          <p>Batch processing means collecting data over a period of time and processing it together.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>A company collects every order placed during the day and calculates total sales at midnight.</p>
          <p>Instead of processing every order immediately, the system waits and processes a group of records together.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Batch ETL Pipeline — Flowchart Diagram | Diagrams.so</span></div>
            <a href="https://images.openai.com/static-rsc-4/mhJXGCm0HeXyjJdPv7MzOY3e0vcpfrgLJ2Xux_6LZmJZrVaCmU1kEk7A6Mv_wWimMCVR6bcrtSPvB_mS8Q-9YyRNcjfi08f83HHe-WSd-sR7f-lpxGf-TnPOqCK_egVunOeC2q_64BLthLhfuqnljggALANWIshWgzIl3Xxu1NY?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>diagrams.so</span></div>
            <a href="https://diagrams.so/d/batch-etl-pipeline?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Example</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Assume a company receives the following orders:</h4>
          <p>Order</p>
          <p>Amount</p>
          <p>O1</p>
          <p>₹500</p>
          <p>O2</p>
          <p>₹1000</p>
          <p>O3</p>
          <p>₹1500</p>
          <p>O4</p>
          <p>₹2000</p>
          <p>At the end of the day, a scheduled job processes the records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Total revenue:</h4>
          <p>\[ 500 + 1000 + 1500 + 2000 = ₹5000 \]</p>
          <p>How batch processing works</p>
          <p>Data is generated.</p>
          <p>Data accumulates in storage.</p>
          <p>A scheduled job starts.</p>
          <p>The system processes a group of records.</p>
          <p>Results are saved.</p>
          <p>Reports or downstream systems receive the results.</p>
          <p>Common batch processing tools</p>
          <p>Apache Spark.</p>
          <p>Apache Hadoop.</p>
          <p>Apache Airflow.</p>
          <p>dbt.</p>
          <p>Python.</p>
          <p>SQL.</p>
          <p>Where is batch processing used?</p>
          <p>Daily financial reports.</p>
          <p>Monthly payroll calculations.</p>
          <p>Historical data analysis.</p>
          <p>Nightly database synchronization.</p>
          <p>Customer segmentation.</p>
          <p>Periodic machine learning training.</p>
          <p>Advantages</p>
          <p>Efficient for large volumes of data.</p>
          <p>Easier to manage and schedule.</p>
          <p>Can optimize processing resources.</p>
          <p>Useful for historical calculations.</p>
          <p>Limitations</p>
          <p>Results are delayed until processing runs.</p>
          <p>Large batches may take longer.</p>
          <p>Late-arriving data may require reprocessing.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.2 Stream processing</h3>
          <p>Stream processing means processing continuously arriving data events, often shortly after they are generated.</p>
          <p>Instead of waiting until midnight, a system processes incoming events as they arrive.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>The Top 20 Problems with Batch Processing (and How to Fix Them with Data Streaming) | by Kai Waehner | Medium</span></div>
            <a href="https://images.openai.com/static-rsc-4/ESkHMOvHcM4iqeXjd7B2KRgJ2xlljhpHFx7yIW8vEnBAfUHPDmeeLHnv8lIOVKiLutXTZzA_pj2jsmOFFykafXalrdwAA9RVyJf33ra-TXDY3SXQWkumkFcEg_LNReqCG_gt2rzIrKj7_BfdYrmAK1ZIthrEiKiqtF1ryNXOkig?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>kai-waehner.medium.com</span></div>
            <a href="https://kai-waehner.medium.com/the-top-20-problems-with-batch-processing-and-how-to-fix-them-with-data-streaming-39495de0a653?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Example: Fraud detection</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Suppose a bank receives a transaction:</h4>
          <p>&#123; "customer_id": 101, "amount": 50000, "location": "Mumbai", "transaction_time": "10:30:00" &#125;</p>
          <p>The stream processing system can immediately examine the transaction.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It may check:</h4>
          <p>Is the transaction unusually large?</p>
          <p>Does the location differ significantly from recent activity?</p>
          <p>Were multiple transactions made within a few seconds?</p>
          <p>Does the transaction match a known suspicious pattern?</p>
          <p>It can then send information to a fraud detection application.</p>
          <p>How stream processing works</p>
          <p>An event is generated.</p>
          <p>The event is published to a streaming system.</p>
          <p>A processing engine consumes the event.</p>
          <p>It applies transformations or calculations.</p>
          <p>Results are sent to an application or storage system.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important technologies</h4>
          <p>Apache Kafka: Distributed event streaming platform used to publish, store, and distribute events.</p>
          <p>Apache Flink: Distributed stream-processing framework.</p>
          <p>Kafka Streams: A library for building stream-processing applications using Kafka.</p>
          <p>Spark Structured Streaming: A stream-processing engine built on Apache Spark's structured data processing APIs.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.3 Batch vs stream comparison</h3>
          <p>Feature</p>
          <p>Batch</p>
          <p>Stream</p>
          <p>Processing</p>
          <p>Groups of records</p>
          <p>Continuous events</p>
          <p>Timing</p>
          <p>Scheduled</p>
          <p>Continuous</p>
          <p>Latency</p>
          <p>Minutes to hours, sometimes longer</p>
          <p>Milliseconds to seconds, depending on design</p>
          <p>Data volume</p>
          <p>Large batches</p>
          <p>Continuous event flow</p>
          <p>Complexity</p>
          <p>Often simpler</p>
          <p>Often more complex</p>
          <p>Example</p>
          <p>Daily sales report</p>
          <p>Fraud detection</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.4 Real-time does not always mean instant</h3>
          <p>A common misconception is that all data must be processed in real time.</p>
          <p>This is unnecessary and sometimes expensive.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider these requirements:</h4>
          <p>Business requirement</p>
          <p>Suitable approach</p>
          <p>Daily revenue reporting</p>
          <p>Batch</p>
          <p>Live vehicle tracking</p>
          <p>Streaming</p>
          <p>Monthly payroll</p>
          <p>Batch</p>
          <p>Live fraud alerts</p>
          <p>Streaming</p>
          <p>Customer recommendation updates</p>
          <p>Streaming or micro-batch</p>
          <p>Historical sales analysis</p>
          <p>Batch</p>
          <p>The correct choice depends on the business requirement and acceptable data latency.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">7.5 What is micro-batch processing?</h3>
          <p>Micro-batch processing divides continuous incoming information into very small batches.</p>
          <p>For example, a system may process events every five seconds.</p>
          <p>It provides a compromise between traditional scheduled batch processing and continuous event-by-event processing.</p>
        </div>
      </section>
      {"/* SECTION 8: ETL vs ELT Architecture */"}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Pipeline Design</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. ETL vs ELT Architecture
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>ETL and ELT describe two common approaches to moving and transforming data.</p>
          <p>The difference is the order in which extraction, transformation, and loading occur.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.1 What is ETL?</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">ETL stands for:</h4>
          <p>Extract.</p>
          <p>Transform.</p>
          <p>Load.</p>
          <p>In ETL, data is extracted from source systems, transformed in an intermediate processing environment, and then loaded into the destination system.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>ETL Pipelines 101: Your Guide to Data Success | ClicData</span></div>
            <a href="https://images.openai.com/static-rsc-4/z6emsDyNR9YQ96VnZmA75UrPWDVwLO0vAZ4sN8vM-ba4ISYOsal1S7yo-MwLHF8G3lB7vQoL2fS7DSPCDcXXDcjq1dQDMFv1uvgyL_cRWyN4GMmU4ygErR-6ohY8lPG3He4xLWvkTVJ_sh0H2acv82iXriUmzFSQe4c6kRgQIMc?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>clicdata.com</span></div>
            <a href="https://www.clicdata.com/blog/etl-pipelines-guide/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 1: Extract</h4>
          <p>Collect data from source systems.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>A retailer extracts customer and order information from PostgreSQL.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 2: Transform</h4>
          <p>Before loading, the system processes the data.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Possible operations:</h4>
          <p>Remove duplicates.</p>
          <p>Fix invalid values.</p>
          <p>Convert timestamps.</p>
          <p>Standardize currencies.</p>
          <p>Join datasets.</p>
          <p>Validate records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>orders = [ &#123;"order_id": 1, "price": 500, "quantity": 2&#125;, &#123;"order_id": 2, "price": 1000, "quantity": 1&#125; ] for order in orders: order["total"] = order["price"] * order["quantity"] print(orders)</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Output:</h4>
          <p>[ &#123;"order_id": 1, "price": 500, "quantity": 2, "total": 1000&#125;, &#123;"order_id": 2, "price": 1000, "quantity": 1, "total": 1000&#125; ]</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 3: Load</h4>
          <p>Store the transformed results in a destination, such as a data warehouse.</p>
          <p>Advantages of ETL</p>
          <p>Data can be validated before entering the destination.</p>
          <p>Useful when only processed data should reach the target.</p>
          <p>Can support strict preprocessing requirements.</p>
          <p>Suitable when destination storage or processing is limited.</p>
          <p>Limitations</p>
          <p>Requires an intermediate transformation environment.</p>
          <p>Transformations may need to be redesigned when business requirements change.</p>
          <p>Can introduce additional infrastructure and maintenance.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.2 What is ELT?</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">ELT stands for:</h4>
          <p>Extract.</p>
          <p>Load.</p>
          <p>Transform.</p>
          <p>In ELT, raw or lightly processed data is first loaded into the destination platform.</p>
          <p>Transformations occur after the data has been loaded.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>ETL Pipeline for Data Engineering: A Beginner's Guide to Extract, Transform, and Load - DEV Community</span></div>
            <a href="https://images.openai.com/static-rsc-4/uN_BW25JAopaYmouGoDspFyP9WftRhoralIub5y48AXnAgyfLYsTScgUu6IkxO6dH3krbJoZY3zZ2cFLvyXbgM2TcszvSl2p0rUbntceUnqSAI994nGevniS8BHfYOG_nOxpG-i4AnopjBe0ss2bz3xM1CnPQhq7uX8NPHE4tJg?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>dev.to</span></div>
            <a href="https://dev.to/gowthampotureddi/etl-pipeline-for-data-engineering-a-beginners-guide-to-extract-transform-and-load-4i1f?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 1: Extract</h4>
          <p>Extract information from source applications and databases.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 2: Load</h4>
          <p>Load the raw information into a data warehouse or lakehouse.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 3: Transform</h4>
          <p>Use the destination's processing engine to clean and structure the information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example SQL transformation:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`CREATE TABLE clean_orders AS SELECT order_id, customer_id, price * quantity AS total_amount, order_timestamp FROM raw_orders WHERE order_id IS NOT NULL;`}</code>
            </pre>
          </div>
          <p>Here the raw data is already available in the destination platform.</p>
          <p>The transformation uses the warehouse's SQL engine.</p>
          <p>Advantages of ELT</p>
          <p>Takes advantage of scalable cloud processing.</p>
          <p>Allows raw data to be retained.</p>
          <p>Makes transformation logic easier to modify.</p>
          <p>Supports multiple analytical use cases.</p>
          <p>Works well with modern cloud warehouses.</p>
          <p>Limitations</p>
          <p>Raw data may contain sensitive information that requires immediate protection.</p>
          <p>Poorly governed raw data can create security and quality risks.</p>
          <p>Storage and compute costs need careful management.</p>
          <p>Transformation logic still requires testing and maintenance.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">8.3 ETL vs ELT comparison</h3>
          <p>Feature</p>
          <p>ETL</p>
          <p>ELT</p>
          <p>Sequence</p>
          <p>Extract → Transform → Load</p>
          <p>Extract → Load → Transform</p>
          <p>Transformation</p>
          <p>Before loading</p>
          <p>After loading</p>
          <p>Main processing</p>
          <p>Intermediate engine</p>
          <p>Destination platform</p>
          <p>Raw data retention</p>
          <p>Depends on design</p>
          <p>Commonly retained</p>
          <p>Typical environment</p>
          <p>Traditional warehouses</p>
          <p>Modern cloud platforms</p>
          <p>Flexibility</p>
          <p>Can require earlier redesign</p>
          <p>Often more flexible</p>
          <p>Which one should a Data Engineer choose?</p>
          <p>Neither is universally better.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Choose based on:</h4>
          <p>Data sensitivity.</p>
          <p>Target platform capabilities.</p>
          <p>Processing requirements.</p>
          <p>Performance.</p>
          <p>Cost.</p>
          <p>Governance requirements.</p>
          <p>Need to preserve raw information.</p>
          <p>An organization may even use both methods in the same architecture.</p>
        </div>
      </section>
      {"/* SECTION 9: Data Warehouses and Data Lakes */"}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">Storage Systems</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Data Warehouses and Data Lakes
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Organizations need storage architectures capable of handling both structured business information and large volumes of different data formats.</p>
          <p>Two fundamental concepts are data warehouses and data lakes.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.1 What is a Data Warehouse?</h3>
          <p>A data warehouse is a centralized analytical repository that stores organized data for reporting, analysis, and decision-making.</p>
          <p>It integrates information from multiple sources into a consistent structure.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A retail business has separate systems for:</h4>
          <p>Customer accounts.</p>
          <p>Product inventory.</p>
          <p>Orders.</p>
          <p>Payments.</p>
          <p>Delivery.</p>
          <p>The warehouse combines these datasets to provide one integrated view.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Enterprise Data Warehouse</span></div>
            <a href="https://images.openai.com/static-rsc-4/XIeohY_q00h-2E9Pzg7XcU6rg6wZl6FBqaET6x8OTFpamQ-BiIkCVE1TjfxLyep8YR6AyySka6J4nHXAtXYEJBnNDkAmlnKrQ74ZpracV-m297gflp3tP4sepXDHEBEltx3AOrBTjllM4M7T_-YfDDrL50GqYVz1bdEX-DAEyjg?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>capellasolutions.com</span></div>
            <a href="https://www.capellasolutions.com/blog/enterprise-data-warehouse?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Main characteristics</p>
          <p>Structured organization: Data is commonly modeled into tables with defined schemas.</p>
          <p>Analytical performance: Warehouses are optimized for complex analytical queries.</p>
          <p>Historical storage: Historical information can be retained for trend analysis.</p>
          <p>Centralized reporting: Different teams can use consistent datasets.</p>
          <p>Data integration: Information from multiple systems is consolidated.</p>
          <p>Example: Sales warehouse</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Consider a warehouse table:</h4>
          <p>order_id</p>
          <p>customer_id</p>
          <p>product_id</p>
          <p>revenue</p>
          <p>order_date</p>
          <p>1</p>
          <p>101</p>
          <p>501</p>
          <p>2000</p>
          <p>2026-11-01</p>
          <p>2</p>
          <p>102</p>
          <p>502</p>
          <p>1500</p>
          <p>2026-11-02</p>
          <p>3</p>
          <p>101</p>
          <p>503</p>
          <p>3000</p>
          <p>2026-11-03</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">An analyst can use this table to calculate:</h4>
          <p>Total revenue.</p>
          <p>Revenue by product.</p>
          <p>Revenue by customer.</p>
          <p>Monthly growth.</p>
          <p>Average order value.</p>
          <p>Popular data warehouse platforms</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Snowflake bets on India’s AI surge for next growth cycle - Business News | The Financial Express</span></div>
            <a href="https://images.openai.com/static-rsc-4/5wtu-luImOoj28LkceLn3tnRHVmriF-VMG7QifO-WPm49TUseFWccqtkHsimk-yIUC1twHb-Zf89cuPUftcWui8ACDKHTSOs9IKAo82NrgCkTt-quflHXFlPW4_r2wd0bGGn1lsDjoS_MaWpSGeGwNiIth9AVAFW4rh9fBn1or4?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Snowflake</p>
          <p>Cloud-based analytical data platform.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Google BigQuery Logo PNG Vector (SVG) Free Download</span></div>
            <a href="https://images.openai.com/static-rsc-4/J_ke5IF18E_otFdl4ob_wx-9zqbgbr0uIoB6NoC8ze-o4VWfbTnGmPgaxCUgsV7iPmXD1mwX_Cem6IJpGXnv8o0yI3VsZtKBhVlBy-YvQD8qdF-67umLy3lHOUKxQ6JglFloYz4P4srAsaPcm2kOAyePd9a5lyiE73yZyJkzLOM?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Google BigQuery</p>
          <p>Serverless analytical data warehouse on Google Cloud.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>novixa.ai | AI-Powered Retention Intelligence for Customer Revenue Teams</span></div>
            <a href="https://images.openai.com/static-rsc-4/XhTA_nlmycFXsBSNMJ8icsnPxEr8QIjUTH6omZ44_CvX_NSQLUniMEaobLTnBkE8y0oCgFWrhN67Gpdy-4PQbI7oly_8EBmSs0u0ms1dDI6XPPKFpVTmhBLfqkZWm2IiZPrpS4CzoYBMXlG_f0RYmZNYiYVuoQd-1uwpvpJgjuo?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Amazon Redshift</p>
          <p>Managed analytical database service on AWS.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Microsoft Fabric</span></div>
            <a href="https://images.openai.com/static-rsc-4/UkK7_KCq8ssNWcDk2MepPkS5D55XBHD_MPy21rLsKh9g33Wv8Y1taw6weQRGTYGUKUYXqKkogOy7q-R8kCKJizEzozxVD_Bb07Ejm-SQYJAlyEie66t4SayfP1ai3CizZhNPemAxYbMF-03a1Obds_PO_W08d0IrkMNFKjYwO4I?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Microsoft Fabric</p>
          <p>Integrated analytics platform with data engineering and warehousing capabilities.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.2 What is a Data Lake?</h3>
          <p>A data lake is a storage architecture designed to store large amounts of data in its original or transformed form.</p>
          <p>Unlike traditional data warehouses, data lakes can store structured, semi-structured, and unstructured data.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Data Lake Explained: Architecture and Examples</span></div>
            <a href="https://images.openai.com/static-rsc-4/V22OBiEE-HkMscB65_ETyJPlwPg9bu4nZN3R24bmsHiLEy9T3jZPY_OjSiotI7GW7JEXdiQctXGx_F49qFLDDResOdAYd8mdiFdntSRemhS08SvJJKER6iVU6nwhC4A5o7b7PGIVvmvahBG_xyEUvJAaziKLc69hnp9qlKQaZZw?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>altexsoft.com</span></div>
            <a href="https://www.altexsoft.com/blog/data-lake-architecture/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, a company can store:</h4>
          <p>CSV transaction files.</p>
          <p>JSON application events.</p>
          <p>Parquet analytical datasets.</p>
          <p>PDF documents.</p>
          <p>Images.</p>
          <p>Video files.</p>
          <p>Machine learning datasets.</p>
          <p>Characteristics</p>
          <p>Flexible data storage: Different formats can be stored in the same storage environment.</p>
          <p>Schema-on-read: Structure can be applied when data is read or processed.</p>
          <p>Scalability: Object storage can support very large amounts of information.</p>
          <p>Cost flexibility: Many data lake architectures use comparatively inexpensive object storage.</p>
          <p>Multiple workloads: Data can be used for analytics, machine learning, and other processing.</p>
          <p>What is schema-on-read?</p>
          <p>In a traditional schema-on-write approach, data generally has to be conformed to a defined schema before it is written into its final structured destination.</p>
          <p>With schema-on-read, data can be stored first, and its structure can be interpreted when it is read.</p>
          <p>For example, a data lake might contain JSON records with different fields.</p>
          <p>A processing application can select relevant fields and apply a schema when consuming the records.</p>
          <p>This flexibility is powerful, but it does not mean data quality can be ignored.</p>
          <p>A poorly governed data lake can turn into a data swamp, where information is difficult to discover, trust, and use.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">9.3 Data Warehouse vs Data Lake</h3>
          <p>Feature</p>
          <p>Data Warehouse</p>
          <p>Data Lake</p>
          <p>Main purpose</p>
          <p>Analytics and reporting</p>
          <p>Flexible data storage</p>
          <p>Data types</p>
          <p>Mainly structured</p>
          <p>All major data types</p>
          <p>Schema</p>
          <p>Usually schema-on-write</p>
          <p>Often schema-on-read</p>
          <p>Storage</p>
          <p>Warehouse-managed storage</p>
          <p>Commonly object storage</p>
          <p>Processing</p>
          <p>SQL and analytical engines</p>
          <p>Multiple processing engines</p>
          <p>Users</p>
          <p>Analysts and BI teams</p>
          <p>Engineers, analysts, scientists</p>
          <p>Typical formats</p>
          <p>Tables</p>
          <p>CSV, JSON, Parquet, images, etc.</p>
          <p>Practical example</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A hospital may use:</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data Warehouse:</h4>
          <p>Patient appointment records.</p>
          <p>Billing information.</p>
          <p>Monthly revenue.</p>
          <p>Medical department statistics.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data Lake:</h4>
          <p>Medical images.</p>
          <p>Device recordings.</p>
          <p>Raw sensor files.</p>
          <p>Clinical documents.</p>
          <p>Research datasets.</p>
          <p>Both systems can coexist.</p>
        </div>
      </section>
      {"/* SECTION 10: Modern Data Lakehouse Architecture */"}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Lakehouse Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Modern Data Lakehouse Architecture
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">10.1 What is a Data Lakehouse?</h3>
          <p>A data lakehouse is an architecture that aims to combine the flexible, relatively inexpensive storage of a data lake with important data management and analytical capabilities commonly associated with a data warehouse.</p>
          <p>The goal is to support structured analytics, large-scale processing, and other workloads on a shared data foundation.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Data Lakehouse 101 | The Definitive Guide to Modern Data Architecture</span></div>
            <a href="https://images.openai.com/static-rsc-4/GSX0fXqpoycVpbQy1cT8h0xzYij60Hoecn75kEYqWip7vZ9QNRA4rNcCNhR93fMLKzN08R8XybH5F7LzITRNwzpZ9QdGiX0iA2JjE2aIIicx--K8rge5EsWvHno48c4_aOTg5FbqnKM90KeX-c-Xera-KVo4v1C6FIRfhKmqsEw?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>datalakehouse101.com</span></div>
            <a href="https://datalakehouse101.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A basic lakehouse architecture includes:</h4>
          <p>Object storage.</p>
          <p>File formats.</p>
          <p>Table formats.</p>
          <p>Metadata management.</p>
          <p>Processing engines.</p>
          <p>Governance and security.</p>
          <p>Analytical consumers.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">Object storage</strong></li>
          </ol>
          <p>The underlying information is often stored in cloud object storage.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Amazon S3.</p>
          <p>Azure Data Lake Storage.</p>
          <p>Google Cloud Storage.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">Open file formats</strong></li>
          </ol>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data is commonly stored in efficient file formats such as:</h4>
          <p>Apache Parquet.</p>
          <p>Apache Avro.</p>
          <p>ORC.</p>
          <p>Parquet is a columnar file format particularly useful for analytical queries.</p>
          <p>Rather than reading every field in every row, a query may read only the columns it needs.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example, consider a dataset containing:</h4>
          <p>customer_id name email city age purchase_amount</p>
          <p>An analytical query may only need city and purchase_amount.</p>
          <p>Columnar storage can reduce unnecessary data reading.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">Table formats</strong></li>
          </ol>
          <p>A collection of Parquet files is not automatically a complete managed table.</p>
          <p>Modern lakehouse table formats provide additional capabilities such as:</p>
          <p>Transaction management.</p>
          <p>Schema evolution.</p>
          <p>Metadata management.</p>
          <p>Consistent table snapshots.</p>
          <p>Time travel.</p>
          <p>Concurrent read and write support.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Important examples include:</h4>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Delta Lake - Database of Databases</span></div>
            <a href="https://images.openai.com/static-rsc-4/h_8Xwe_N2JxWEDRHo13nUN5ZQAnFDY5Z3qhEwcnASTcNqjFc4dG50UYSjHLc2yYQsZ64mPIDycRTwkmp3hiW2FXshFDYjIbr9HpFE1-h0vCEuhtl5cRRMwN7nMIfOQOFrEuHmRZ-Z5gI2B9qwLCcJc9UT7NdSobkmeCD8MZ1_C4?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Delta Lake</p>
          <p>Provides transactional table management and data reliability features for data lakes.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Apache Iceberg Icon | Dashboard Icons</span></div>
            <a href="https://images.openai.com/static-rsc-4/KKxU2RyApH_xql380suh_-LbsHpxZdBVLSjeGNXJnOgFnN08XPzHUT2KAUq775vs4zPQj8NkvnZqoK8HAXnPTFU-3lLl9K9cADND0XnpZIkLVNBrg6g_kD6EghA_ez8zs1pfTLIr1e5CPUQakU5CbBIeYW2NqJus3on_ljqiZR4?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Apache Iceberg</p>
          <p>Open table format supporting large analytical tables and schema evolution.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Fletum - Revenue Operations Platform | Boost Your Revenue with AI-Powered RevOps</span></div>
            <a href="https://images.openai.com/static-rsc-4/rFAT2X_5ZF4TPFpgiYWacY3dUGOEz5Unki33pB-GoWBs84bby8qop-J9MikKpvZDDPqL8ZZELVTyujSKjy7xxcadkSNckIjmRBCl45GOStwOv6HgcvSO9O9mi2QZO8cSOIHXcbW7wI4UexUtDbcF_1JkxROxgmFwb8NihfCtT7g?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Apache Hudi</p>
          <p>Data lake table platform supporting record-level updates, incremental processing, and table management.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="4"><strong className="text-stone-900">Metadata catalog</strong></li>
          </ol>
          <p>Metadata is information that describes other data.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For a table, metadata might include:</h4>
          <p>Table name.</p>
          <p>Column names.</p>
          <p>Data types.</p>
          <p>Storage location.</p>
          <p>Partition information.</p>
          <p>Schema versions.</p>
          <p>Ownership.</p>
          <p>A metadata catalog helps processing engines and users discover datasets.</p>
          <p>Examples include AWS Glue Data Catalog and Unity Catalog.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="5"><strong className="text-stone-900">Processing engines</strong></li>
          </ol>
          <p>A lakehouse can support multiple processing engines.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Apache Spark.</p>
          <p>Trino.</p>
          <p>Flink.</p>
          <p>DuckDB.</p>
          <p>Databricks SQL.</p>
          <p>The exact compatibility depends on the chosen table format and platform.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="6"><strong className="text-stone-900">Analytics and machine learning</strong></li>
          </ol>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data can be consumed by:</h4>
          <p>Business intelligence tools.</p>
          <p>SQL query engines.</p>
          <p>Machine learning frameworks.</p>
          <p>Data science notebooks.</p>
          <p>Other applications.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">10.2 Important lakehouse concepts</h3>
          <p>ACID transactions: Atomicity, Consistency, Isolation, and Durability. They describe properties that help transactions execute reliably.</p>
          <p>Schema evolution: The ability to change a table's structure over time while managing compatibility.</p>
          <p>Time travel: The ability to query or restore certain earlier table states, depending on retention and platform capabilities.</p>
          <p>Partitioning: Dividing a large dataset into smaller logical groups, often based on columns such as date or region.</p>
          <p>Metadata management: Maintaining information about schemas, files, versions, and table states.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">10.3 Warehouse vs Lake vs Lakehouse</h3>
          <p>Feature</p>
          <p>Warehouse</p>
          <p>Lake</p>
          <p>Lakehouse</p>
          <p>Flexible file storage</p>
          <p>Limited or platform-specific</p>
          <p>Yes</p>
          <p>Yes</p>
          <p>Structured analytics</p>
          <p>Excellent</p>
          <p>Depends on processing layer</p>
          <p>Yes</p>
          <p>Unstructured storage</p>
          <p>Limited</p>
          <p>Yes</p>
          <p>Yes</p>
          <p>Managed tables</p>
          <p>Yes</p>
          <p>Requires additional layers</p>
          <p>Yes</p>
          <p>ACID table transactions</p>
          <p>Common</p>
          <p>Not inherent to a basic lake</p>
          <p>Supported through table formats</p>
          <p>Schema management</p>
          <p>Strong</p>
          <p>Requires additional management</p>
          <p>Strong capabilities</p>
          <p>ML workloads</p>
          <p>Supported</p>
          <p>Supported</p>
          <p>Supported</p>
          <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-4 text-xs sm:text-sm text-orange-950 leading-relaxed my-4">
            Important: A lakehouse is not simply a data lake with a new name. It introduces table management, transactional guarantees, metadata, governance, and analytical access mechanisms on top of flexible data storage.
          </div>
        </div>
      </section>
      {"/* SECTION 11: Data Pipeline Architecture */"}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Pipeline Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Data Pipeline Architecture
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.1 What is a data pipeline?</h3>
          <p>A data pipeline is a sequence of automated processes that moves data from one or more sources to one or more destinations.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">These processes may include:</h4>
          <p>Extraction.</p>
          <p>Ingestion.</p>
          <p>Validation.</p>
          <p>Transformation.</p>
          <p>Storage.</p>
          <p>Delivery.</p>
          <p>The pipeline ensures that information is moved and processed consistently.</p>
          <p>Example: A retail sales pipeline</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Suppose an online retailer has three systems:</h4>
          <p>PostgreSQL stores orders.</p>
          <p>MongoDB stores customer profiles.</p>
          <p>A payment provider supplies payment data through an API.</p>
          <p>The retailer needs a daily sales dashboard.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The data pipeline might look like this:</h4>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Best AI Diagram Generators in 2026 Compared | ConceptViz – Generador de Diagramas Científicos con IA para Docentes e Investigadores</span></div>
            <a href="https://images.openai.com/static-rsc-4/Gs4Rs0ILcnvR8ybDIEfOXcVOCTI0Y2-J7Oi6FDIZHmgOTjyr6Lc2qVmSHDgAv6EBnT2JmSUzIp7BFRKGrsG_h1_OZFBlRQ8ThF8PUAs81AK0jPWf1IjI1D1hkMJSkqCMwJlif629aHRANeScUJYhPtwy4zv7l8Amdp5eLuINd-U?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>conceptviz.app</span></div>
            <a href="https://conceptviz.app/es/blog/best-ai-diagram-generators-guide?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">DATA SOURCES | +----------+----------+ | | | PostgreSQL MongoDB Payment API | | | +----------+----------+</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">DATA INGESTION | Airbyte / CDC</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">DATA STORAGE Data Lake</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">DATA PROCESSING Spark / SQL / dbt</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">DATA WAREHOUSE | +------+------+ |</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">v Power BI ML Models</span>
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.2 Main components of a pipeline</h3>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">Source systems</strong></li>
          </ol>
          <p>The systems that produce the original information.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">Ingestion layer</strong></li>
          </ol>
          <p>Brings information into the pipeline.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This layer can use:</h4>
          <p>API integrations.</p>
          <p>Database connectors.</p>
          <p>File transfer.</p>
          <p>CDC.</p>
          <p>Streaming systems.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">Storage layer</strong></li>
          </ol>
          <p>Stores incoming information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">It can use:</h4>
          <p>Relational databases.</p>
          <p>Object storage.</p>
          <p>Data lakes.</p>
          <p>Data warehouses.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="4"><strong className="text-stone-900">Processing layer</strong></li>
          </ol>
          <p>Executes transformations.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common technologies:</h4>
          <p>Python.</p>
          <p>SQL.</p>
          <p>Apache Spark.</p>
          <p>Apache Flink.</p>
          <p>dbt.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="5"><strong className="text-stone-900">Orchestration layer</strong></li>
          </ol>
          <p>Coordinates when tasks execute and manages dependencies.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Apache Airflow.</p>
          <p>Dagster.</p>
          <p>Prefect.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="6"><strong className="text-stone-900">Serving layer</strong></li>
          </ol>
          <p>Makes prepared information accessible.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>Warehouse tables.</p>
          <p>SQL endpoints.</p>
          <p>BI dashboards.</p>
          <p>Data APIs.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.3 What makes a pipeline production-ready?</h3>
          <p>A pipeline that successfully works once is not necessarily a production-ready pipeline.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A production system must handle:</h4>
          <p>Failures: What happens when a source database becomes unavailable?</p>
          <p>Retries: Can failed jobs safely execute again?</p>
          <p>Duplicate records: Can repeated events accidentally create incorrect totals?</p>
          <p>Late-arriving data: What happens when data arrives after its expected processing window?</p>
          <p>Data quality: Are required fields present and valid?</p>
          <p>Monitoring: Can engineers detect an unsuccessful pipeline?</p>
          <p>Scalability: Can the system support increasing data volumes?</p>
          <p>Security: Are credentials and sensitive information protected?</p>
          <p>Cost: Are computing and storage resources being used efficiently?</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">11.4 Batch pipeline vs streaming pipeline architecture</h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A batch pipeline might look like:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Database</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Scheduled extraction</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Object Storage</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Spark / SQL processing</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Data Warehouse</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Daily Report</span>
            </div>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A streaming pipeline might look like:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Application Events</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Kafka</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Flink / Spark</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Live Analytics Store</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Dashboard / Alerts</span>
            </div>
          </div>
          <p>A modern company can operate both architectures simultaneously.</p>
        </div>
      </section>
      {"/* SECTION 12: Data Integration and Data Transformation */"}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Data Integration</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Data Integration and Data Transformation
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>These concepts are closely related, but they solve different problems.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.1 Data integration</h3>
          <p>Data integration means combining information from multiple sources into a unified system or view.</p>
          <p>Consider an e-commerce company.</p>
          <p>Its customer information is stored in PostgreSQL, product information is in MongoDB, and payment information is obtained from an external API.</p>
          <p>The company wants to create a consolidated order dataset.</p>
          <p>The engineer must connect the different systems and bring the information together.</p>
          <p>Example</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Customer dataset:</h4>
          <p>customer_id</p>
          <p>name</p>
          <p>101</p>
          <p>Rahul</p>
          <p>102</p>
          <p>Priya</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Order dataset:</h4>
          <p>order_id</p>
          <p>customer_id</p>
          <p>amount</p>
          <p>501</p>
          <p>101</p>
          <p>2000</p>
          <p>502</p>
          <p>102</p>
          <p>3000</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Payment dataset:</h4>
          <p>order_id</p>
          <p>payment_status</p>
          <p>501</p>
          <p>SUCCESS</p>
          <p>502</p>
          <p>SUCCESS</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">After integration:</h4>
          <p>Order</p>
          <p>Customer</p>
          <p>Amount</p>
          <p>Payment</p>
          <p>501</p>
          <p>Rahul</p>
          <p>2000</p>
          <p>SUCCESS</p>
          <p>502</p>
          <p>Priya</p>
          <p>3000</p>
          <p>SUCCESS</p>
          <p>The information from three different datasets is now available in one unified structure.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.2 Data transformation</h3>
          <p>Data transformation modifies data into a more suitable form for downstream usage.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Common transformations include:</h4>
          <p>A. Data cleaning</p>
          <p>Remove invalid values and correct formatting issues.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>" pune " "PUNE" "Pune"</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">These can be standardized into:</h4>
          <p>"Pune"</p>
          <p>B. Data filtering</p>
          <p>Remove records that do not meet specific conditions.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM orders WHERE payment_status = 'SUCCESS';`}</code>
            </pre>
          </div>
          <p>C. Data aggregation</p>
          <p>Calculate summaries from detailed records.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customer_id, SUM(amount) AS total_spending FROM orders GROUP BY customer_id;`}</code>
            </pre>
          </div>
          <p>D. Data joining</p>
          <p>Combine related tables.</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT customers.name, orders.order_id, orders.amount FROM customers JOIN orders ON customers.customer_id = orders.customer_id;`}</code>
            </pre>
          </div>
          <p>E. Data normalization</p>
          <p>Standardize values to improve consistency or convert data into a suitable structure.</p>
          <p>In database design, normalization also refers to organizing relational tables to reduce unnecessary duplication and update anomalies.</p>
          <p>F. Data enrichment</p>
          <p>Add additional information to existing records.</p>
          <p>For example, a company might add geographic region information to a customer dataset using an approved geographic lookup dataset.</p>
          <p>G. Data aggregation</p>
          <p>Reduce detailed records into summary information.</p>
          <p>For example, millions of payment transactions can be summarized into total daily revenue per region.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">12.3 Data integration vs transformation</h3>
          <p>Data integration</p>
          <p>Data transformation</p>
          <p>Combines data from multiple sources</p>
          <p>Modifies data into useful structures</p>
          <p>Focuses on connecting information</p>
          <p>Focuses on processing information</p>
          <p>Uses connectors, APIs, CDC</p>
          <p>Uses SQL, Python, Spark</p>
          <p>Example: joining customer and order sources</p>
          <p>Example: calculating total revenue</p>
          <p>Most production data pipelines require both.</p>
        </div>
      </section>
      {"/* SECTION 13: Data Quality and Reliability Fundamentals */"}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">Quality & Reliability</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Data Quality and Reliability Fundamentals
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Data quality is one of the most critical responsibilities in Data Engineering.</p>
          <p>A company can have powerful databases, advanced machine learning systems, and expensive cloud infrastructure. However, incorrect data can make all those systems unreliable.</p>
          <p>Consider a sales dashboard that reports ₹10 crore in revenue when the actual revenue was ₹8 crore.</p>
          <p>The issue may not be the dashboard itself. The source data may contain duplicated orders.</p>
          <p>This is why Data Engineers must implement data quality checks.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.1 Dimensions of data quality</h3>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">Accuracy</strong></li>
          </ol>
          <p>Does the data correctly represent reality?</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>An order amount is recorded as ₹5,000, but the actual payment is ₹500.</p>
          <p>The record is inaccurate.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">Completeness</strong></li>
          </ol>
          <p>Are all required data fields present?</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>&#123; "order_id": 501, "customer_id": null, "amount": 1500 &#125;</p>
          <p>The customer ID is missing.</p>
          <p>If the business requires a customer ID for every order, the record is incomplete.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">Consistency</strong></li>
          </ol>
          <p>Does information remain consistent across systems?</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>One database records a customer's city as Pune while another records it as Mumbai.</p>
          <p>The inconsistency needs investigation.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="4"><strong className="text-stone-900">Validity</strong></li>
          </ol>
          <p>Does the value follow the expected format and business rules?</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Examples:</h4>
          <p>An email address should follow the expected email format.</p>
          <p>A quantity cannot be negative for an ordinary completed sale.</p>
          <p>A birth date cannot be in the future.</p>
          <p>A transaction status must belong to the permitted status list.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="5"><strong className="text-stone-900">Uniqueness</strong></li>
          </ol>
          <p>Are records duplicated unnecessarily?</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>A single order appears three times in a sales dataset and incorrectly increases reported revenue.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="6"><strong className="text-stone-900">Timeliness</strong></li>
          </ol>
          <p>Is information available when users need it?</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>A dashboard is supposed to show sales through 10:00 AM, but the latest data is from yesterday.</p>
          <p>The data may be accurate, but it is not timely.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.2 Data quality checks using SQL</h3>
          <p>Suppose we have an orders table.</p>
          <p>Check 1: Missing order IDs</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM orders WHERE order_id IS NULL;`}</code>
            </pre>
          </div>
          <p>Check 2: Invalid order amounts</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM orders WHERE amount < 0;`}</code>
            </pre>
          </div>
          <p>Check 3: Duplicate order IDs</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT order_id, COUNT(*) AS duplicate_count FROM orders GROUP BY order_id HAVING COUNT(*) > 1;`}</code>
            </pre>
          </div>
          <p>Check 4: Invalid payment statuses</p>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT * FROM orders WHERE payment_status NOT IN ( 'SUCCESS', 'FAILED', 'PENDING' );`}</code>
            </pre>
          </div>
          <p>These checks can be integrated into automated pipelines.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.3 What is data reliability?</h3>
          <p>Data reliability means that users and downstream systems can depend on the data infrastructure to operate correctly and consistently.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">A reliable system should:</h4>
          <p>Deliver data on time.</p>
          <p>Avoid unnecessary data loss.</p>
          <p>Handle failures.</p>
          <p>Produce consistent results.</p>
          <p>Support recovery.</p>
          <p>Maintain appropriate data quality.</p>
          <p>Common reliability concepts</p>
          <p>Idempotency: Running the same operation multiple times should not produce unintended additional effects.</p>
          <p>For example, rerunning an ingestion job should not insert the same transaction again.</p>
          <p>Retries: Automatically attempting a failed task again.</p>
          <p>Dead-letter handling: Isolating records or messages that cannot be processed successfully for investigation.</p>
          <p>Checkpointing: Saving processing progress so that a system can recover after failure.</p>
          <p>Backfilling: Processing historical data for an earlier period, often because of missing data, late-arriving records, or changed transformation logic.</p>
          <p>Data contracts: Agreements between data producers and consumers describing expected schemas, definitions, and quality requirements.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">13.4 Data freshness and SLAs</h3>
          <p>A Service Level Agreement (SLA) describes expected service performance or availability.</p>
          <p>For a data pipeline, an organization might require the daily sales dataset to be ready by 8:00 AM every day.</p>
          <p>Another related concept is an SLO (Service Level Objective), which defines a measurable performance target.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example:</h4>
          <p>Dataset: daily_sales Expected availability: 08:00 AM Freshness target: Data no older than 24 hours Completeness target: 99.9% Owner: Data Engineering Team</p>
          <p>A freshness check can alert the engineering team when the dataset has not received new information within its required interval.</p>
        </div>
      </section>
      {"/* SECTION 14: Data Engineering in Real-World Industries */"}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Industry Domains</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Data Engineering in Real-World Industries
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Data Engineering is used across almost every major industry.</p>
          <p>Let's understand how it works in actual business scenarios.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.1 E-commerce</h3>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Maximize Your Business Potential with Shopify Plus: Features &amp; Pricing</span></div>
            <a href="https://images.openai.com/static-rsc-4/mTFwn_JAQwW9GFzfhYCYbPMIeYBuZuqO7zpeS84LCVxdCXnBZyVw0rp9xC5Y5B5yyLzKnU1DSw0xodtfk4Odd-ifM3r80WSzCGjgsISOlsKrDHKSOBTY2Kkesjm_-5kLUIAJUKmA4yvj0508Zv4slh7OLdZc6jZMJP0d4zU7_7Q?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>debutify.com</span></div>
            <a href="https://debutify.com/blog/shopify-plus-in-2026-features-pricing-and-when-to-choose-it?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data sources:</h4>
          <p>Customer applications.</p>
          <p>Orders databases.</p>
          <p>Payment gateways.</p>
          <p>Inventory systems.</p>
          <p>Delivery services.</p>
          <p>Website activity logs.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data engineering work:</h4>
          <p>Integrating order and payment information.</p>
          <p>Processing millions of customer activity events.</p>
          <p>Maintaining sales datasets.</p>
          <p>Monitoring inventory changes.</p>
          <p>Building customer activity pipelines.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Business outcomes:</h4>
          <p>Revenue reporting.</p>
          <p>Product recommendations.</p>
          <p>Demand forecasting.</p>
          <p>Customer segmentation.</p>
          <p>Inventory optimization.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.2 Banking and Financial Services</h3>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Fit for the future: how tech is transforming the banking industry - Raconteur</span></div>
            <a href="https://images.openai.com/static-rsc-4/RNCYDrqH5-CZ9vo4k-x1vApqJTwRAPmr61jSc7QBBWZLM1G6JydwrtB-3BwMMS7ECcYwTidvfED-3kKktLBr7JAPc4fZrLwxlEyDi67vi99j3x9VGMEfEsiqqTw0Qz4lzT-_kP7AJLkWIH0qUlz-5qnzNhCJQ0mQeVztBK7lZl0?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>raconteur.net</span></div>
            <a href="https://www.raconteur.net/insights/fit-for-the-future-how-tech-is-transforming-the-banking-industry?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data sources:</h4>
          <p>Transaction databases.</p>
          <p>ATM systems.</p>
          <p>Mobile banking applications.</p>
          <p>Credit card platforms.</p>
          <p>Customer account systems.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data engineering work:</h4>
          <p>Processing transaction events.</p>
          <p>Integrating customer information.</p>
          <p>Creating analytical transaction datasets.</p>
          <p>Supporting fraud detection systems.</p>
          <p>Maintaining audit records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Business outcomes:</h4>
          <p>Fraud identification.</p>
          <p>Risk assessment.</p>
          <p>Customer analytics.</p>
          <p>Financial reporting.</p>
          <p>Transaction monitoring.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.3 Healthcare</h3>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Centrální systém elektronického zdravotnictví se spouští 1. ledna 2026. Co se změní?</span></div>
            <a href="https://images.openai.com/static-rsc-4/3PGEM3vxuwBAtei96TBYVssOe7g2_0TGIB6vVHO63gHrvvXvSlpMfYGXNAQNI5Y1VN5Sy-kMkXZRkWwf-WFAKfA3zwmwfj76BkEU-d9qMuZGY2eIIrZBi6pFFCPnZ6Gl2HThqnDjT-Za_SOIAy0Qkgr_zX7Er6uaHDRRe0qhp88?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>nasezdravotnictvi.cz</span></div>
            <a href="https://nasezdravotnictvi.cz/aktualita/centralni-system-elektronickeho-zdravotnictvi-se-spousti-1-ledna-2026-co-se-zmeni?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data sources:</h4>
          <p>Electronic health records.</p>
          <p>Medical equipment.</p>
          <p>Laboratory systems.</p>
          <p>Hospital management applications.</p>
          <p>Medical images.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data engineering work:</h4>
          <p>Integrating patient records.</p>
          <p>Processing medical device information.</p>
          <p>Managing medical datasets.</p>
          <p>Supporting secure data access.</p>
          <p>Preparing historical datasets for research.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Business outcomes:</h4>
          <p>Hospital operational analytics.</p>
          <p>Resource planning.</p>
          <p>Research analytics.</p>
          <p>Patient care reporting.</p>
          <p>Healthcare systems require particularly careful privacy, access control, and regulatory compliance.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.4 Social Media</h3>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Cara Menghapus Mungkin Anda Suka di TikTok: Panduan Lengkap untuk Privasi yang Lebih Baik - KapanLagi.com</span></div>
            <a href="https://images.openai.com/static-rsc-4/Abdp-nGsChpEjhOWYoyrSIK8uVdd_3PV87-HmRj13nAfsT9efJLYJxcICO0uoAZH5Ki4Es1lQ613saa3PvmINspzG7jkDnr9JkFsCvdSY3Nus0hiA-1U_602rzVa-kT5lWcmtLJgEddlGxykkqYe_6vagon2lZzP7tlJTXzhAls?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>kapanlagi.com</span></div>
            <a href="https://www.kapanlagi.com/feeds/cara-menghapus-mungkin-anda-suka-di-tiktok-panduan-lengkap-untuk-privasi-yang-lebih-baik-1a15b82e1b.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data sources:</h4>
          <p>Posts.</p>
          <p>Likes.</p>
          <p>Comments.</p>
          <p>Shares.</p>
          <p>Search events.</p>
          <p>Video viewing activity.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data engineering work:</h4>
          <p>Collecting user activity events.</p>
          <p>Processing event streams.</p>
          <p>Building user activity histories.</p>
          <p>Preparing data for recommendation systems.</p>
          <p>Supporting large-scale analytics.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Business outcomes:</h4>
          <p>Personalized recommendations.</p>
          <p>Content trend analysis.</p>
          <p>User engagement measurement.</p>
          <p>Advertising analytics.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.5 Manufacturing</h3>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>IoT Gateway - Neousys Technology</span></div>
            <a href="https://images.openai.com/static-rsc-4/KJ2mmj5AE1sXbBZPdcTCvpI1a0SqouY7bU6BMUqmErH2ZNpZE8pCHKQ9nLCa0CaoA1rDO7bjJyb36es2aQvBma3ATAKibAos-eOAaJa2ujdEUd3jKnRA-UpZJjUbnvgR2CQ_jUC-0t_ZL6okwcD8TWlCoESdII3ph_EJanRq5xA?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>neousys-tech.com</span></div>
            <a href="https://www.neousys-tech.com/en/core-technologies/industrial-iot-automation?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data sources:</h4>
          <p>Industrial IoT sensors.</p>
          <p>Machines.</p>
          <p>Production systems.</p>
          <p>Quality inspection applications.</p>
          <p>Supply chain systems.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data engineering work:</h4>
          <p>Collecting sensor readings.</p>
          <p>Streaming equipment events.</p>
          <p>Integrating production records.</p>
          <p>Detecting abnormal machine behavior.</p>
          <p>Preparing historical data for predictive models.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Business outcomes:</h4>
          <p>Predictive maintenance.</p>
          <p>Production optimization.</p>
          <p>Quality control.</p>
          <p>Equipment monitoring.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">14.6 Transportation and Logistics</h3>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Horizon – Fleet &amp; Delivery Management Dashboard Animation by Sogee UIUX for Sogee on Dribbble</span></div>
            <a href="https://images.openai.com/static-rsc-4/eL-K_jjOWA5-S17JjliIlGEPMU5teR6_fPA2JCjzU06aqHMiKVqUOO-Ey3NEyfL4sspEqtl9orkPgRDvXFJgDuBi7hc_JjFbBHMOJ8Ywgo6FV-CDdYSxuNzldyhjCjc5jqZnQx4l0sJNOOybcUiKe9Y73ujXtAh-8PAYSRn36cA?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>dribbble.com</span></div>
            <a href="https://dribbble.com/shots/26972593-Horizon-Fleet-Delivery-Management-Dashboard-Animation?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data sources:</h4>
          <p>GPS devices.</p>
          <p>Delivery applications.</p>
          <p>Vehicle sensors.</p>
          <p>Order management systems.</p>
          <p>Warehouse databases.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Data engineering work:</h4>
          <p>Processing live GPS events.</p>
          <p>Tracking delivery progress.</p>
          <p>Combining driver and order information.</p>
          <p>Building historical route datasets.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Business outcomes:</h4>
          <p>Route optimization.</p>
          <p>Delivery-time predictions.</p>
          <p>Fuel consumption analysis.</p>
          <p>Fleet utilization.</p>
        </div>
      </section>
      {"/* SECTION 15: Modern Data Engineering Technology Ecosystem */"}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Technology Stack</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. Modern Data Engineering Technology Ecosystem
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Modern Data Engineering involves multiple categories of technologies.</p>
          <p>You do not need to master every tool immediately. You first need to understand the problem each category solves.</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Understanding the Data Tools Ecosystem: Without Getting Overwhelmed | by RINI APRILIANTY RIADI | Mar, 2026 | Medium</span></div>
            <a href="https://images.openai.com/static-rsc-4/sirxPmPSBoj9qXEiZP8yN8nd3UzQwxddlT5rbbddnv1fPm14qRHIeIKLqK6F3jwdW4INcXmoyyE9HB4s1bttXnJTVMEEGpXpc_H8MxwmhjdEDoRYKftCUfGj8_kJbquoIfhz5uqFHW0xEtIHM7pcBo14pp95hVq4uqDV5jUJTpo?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>medium.com</span></div>
            <a href="https://medium.com/%4017611063/understanding-the-data-tools-ecosystem-without-getting-overwhelmed-e43a329b14f2?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.1 Programming languages</h3>
          <p>Technology</p>
          <p>Main purpose</p>
          <p>Python</p>
          <p>Data processing, APIs, automation</p>
          <p>SQL</p>
          <p>Database querying and transformation</p>
          <p>Java</p>
          <p>Distributed processing and backend systems</p>
          <p>Scala</p>
          <p>Apache Spark ecosystem</p>
          <p>Bash</p>
          <p>Linux automation and scripting</p>
          <p>Python and SQL are two particularly important foundational skills for Data Engineers.</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.2 Databases and storage</h3>
          <p>Technology</p>
          <p>Category</p>
          <p>Purpose</p>
          <p>PostgreSQL</p>
          <p>Relational database</p>
          <p>Operational and analytical data</p>
          <p>MySQL</p>
          <p>Relational database</p>
          <p>Application data</p>
          <p>MongoDB</p>
          <p>Document database</p>
          <p>Semi-structured information</p>
          <p>Cassandra</p>
          <p>Distributed NoSQL</p>
          <p>Large-scale distributed workloads</p>
          <p>Redis</p>
          <p>In-memory data store</p>
          <p>Low-latency access</p>
          <p>Amazon S3</p>
          <p>Object storage</p>
          <p>Data lake storage</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.3 Data ingestion and integration</h3>
          <p>Technology</p>
          <p>Purpose</p>
          <p>Apache Kafka</p>
          <p>Distributed event streaming</p>
          <p>Apache Airbyte</p>
          <p>Data integration and connectors</p>
          <p>Fivetran</p>
          <p>Managed data movement</p>
          <p>Debezium</p>
          <p>Change Data Capture</p>
          <p>AWS DMS</p>
          <p>Database migration and replication</p>
          <p>Python APIs</p>
          <p>Custom data extraction</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.4 Data processing</h3>
          <p>Technology</p>
          <p>Purpose</p>
          <p>Apache Spark</p>
          <p>Distributed data processing</p>
          <p>Apache Flink</p>
          <p>Stream and batch processing</p>
          <p>Apache Beam</p>
          <p>Unified programming model for data processing</p>
          <p>Pandas</p>
          <p>Data manipulation in Python</p>
          <p>Polars</p>
          <p>Fast DataFrame processing</p>
          <p>dbt</p>
          <p>SQL-based data transformation</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.5 Workflow orchestration</h3>
          <p>Technology</p>
          <p>Purpose</p>
          <p>Apache Airflow</p>
          <p>Workflow scheduling and orchestration</p>
          <p>Dagster</p>
          <p>Data orchestration and asset management</p>
          <p>Prefect</p>
          <p>Workflow orchestration</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.6 Data warehouses and lakehouses</h3>
          <p>Technology</p>
          <p>Category</p>
          <p>Snowflake</p>
          <p>Cloud data platform</p>
          <p>BigQuery</p>
          <p>Cloud data warehouse</p>
          <p>Amazon Redshift</p>
          <p>Cloud data warehouse</p>
          <p>Databricks</p>
          <p>Lakehouse and data intelligence platform</p>
          <p>Microsoft Fabric</p>
          <p>Integrated analytics platform</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.7 Data visualization and BI</h3>
          <p>Technology</p>
          <p>Purpose</p>
          <p>Power BI</p>
          <p>Business intelligence</p>
          <p>Tableau</p>
          <p>Data visualization</p>
          <p>Looker</p>
          <p>Business intelligence and analytics</p>
          <p>Metabase</p>
          <p>Business intelligence and dashboards</p>
          <p>Apache Superset</p>
          <p>Open-source data visualization</p>
          <h3 className="text-lg sm:text-xl font-bold text-stone-900 mt-6 pt-3 border-t border-stone-100">15.8 Cloud platforms</h3>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>AWS challenging Microsoft's USD 10bn Pentagon Cloud contract win</span></div>
            <a href="https://images.openai.com/static-rsc-4/Q0INyCgYZWJAfe0l4Iv8UvgGSG4gg2Gw31_H0uSXBO6c0UZIi06WuCli869ZgUTp_YajDTrgXALaSYYcSVHUGvP4OI5fmNrQNWhPdQCOJzEtN6YW_GRE8STWBvb706HxjAwqDzsml0PScKxX1WQhvQtRDof6uATsdZSByGTHYUo?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>AWS</p>
          <p>EC2, S3, Glue, Redshift, Kinesis</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Data Platform: Building An Azure DataHub | PTR</span></div>
            <a href="https://images.openai.com/static-rsc-4/RiVIanZeN7nxMxrl70b-p2IxKQT_AG85l-6O7Ey8p8JqUqqHFJzhkzmfhN6bAo8u0w98R-is8rmELsF3w9Sj7oZxApctNAk0TBtd8K5_ZgdfXX8K8H-8UFOrHABv3pVz1oYXRO-mPcuPZrF5WJkwV_lTuPrv6j5I6Xg7CHOIWE4?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Microsoft Azure</p>
          <p>ADLS, Data Factory, Synapse, Event Hubs</p>
          <div className="my-3 p-3 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-center justify-between gap-3 text-xs">
            <div className="font-semibold text-stone-800 flex items-center gap-2"><span>&#128279;</span> <span>Google Cloud to provide AI and cloud services to Brazilian energy firm Eneva - DCD</span></div>
            <a href="https://images.openai.com/static-rsc-4/-FVbC9XtAKul_uHGzh3mVEX4x-8593fHxTbehNONegGA6AFzi9KofvobY7RpqwT_5tf_OK2CoJ3V4jU7kxf8xQdTcVI9bcvvon_MYqoLaiB0JyhyZR4NGCl2eOdkcYdkbr2_UDqW9E7Bc047TmXfGog6FBZfpdwQFclDxOuW714?purpose=inline" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 cursor-pointer">View Resource &rarr;</a>
          </div>
          <p>Google Cloud</p>
          <p>GCS, BigQuery, Dataflow, Pub/Sub</p>
          <p>How do all these technologies fit together?</p>
          <p>Consider a practical example.</p>
          <p>An online retailer wants to build a modern data platform.</p>
          <p>Pipeline component</p>
          <p>Possible technology</p>
          <p>Source database</p>
          <p>PostgreSQL</p>
          <p>Event ingestion</p>
          <p>Kafka</p>
          <p>File storage</p>
          <p>Amazon S3</p>
          <p>Processing</p>
          <p>Apache Spark</p>
          <p>Transformation</p>
          <p>dbt</p>
          <p>Orchestration</p>
          <p>Airflow</p>
          <p>Analytical storage</p>
          <p>Snowflake</p>
          <p>Reporting</p>
          <p>Power BI</p>
          <p>These are example technology choices, not a mandatory stack. The correct architecture depends on the organization's requirements, infrastructure, skill sets, and budget.</p>
        </div>
      </section>
      {"/* SECTION 16: Complete Real-World Case Study: Building an E-commerce Data Platform */"}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">Case Study</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Complete Real-World Case Study: Building an E-commerce Data Platform
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Now combine all the concepts from this module.</p>
          <p>Imagine that we are building a data platform for a fictional e-commerce organization called ShopSmart.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">ShopSmart has:</h4>
          <p>2 million registered customers.</p>
          <p>500,000 products.</p>
          <p>Thousands of orders per day.</p>
          <p>A website and mobile application.</p>
          <p>Multiple payment providers.</p>
          <p>Delivery partners across different cities.</p>
          <p>The management team wants a reliable platform for sales analysis, customer analytics, inventory planning, and fraud detection.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 1: Identify data sources</h4>
          <p>Source</p>
          <p>Information</p>
          <p>PostgreSQL</p>
          <p>Orders and customers</p>
          <p>MongoDB</p>
          <p>Product information</p>
          <p>Payment API</p>
          <p>Payment status</p>
          <p>Website events</p>
          <p>Customer behavior</p>
          <p>Delivery API</p>
          <p>Shipment information</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 2: Identify business requirements</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Management wants:</h4>
          <p>Daily revenue reports.</p>
          <p>Real-time order monitoring.</p>
          <p>Customer purchase analysis.</p>
          <p>Product demand forecasting.</p>
          <p>Delivery performance reports.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 3: Choose processing methods</h4>
          <p>Requirement</p>
          <p>Processing approach</p>
          <p>Daily revenue</p>
          <p>Batch</p>
          <p>Live order status</p>
          <p>Streaming</p>
          <p>Customer segmentation</p>
          <p>Batch</p>
          <p>Payment alerts</p>
          <p>Streaming</p>
          <p>Demand forecasting</p>
          <p>Historical batch datasets</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 4: Design ingestion</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The platform uses:</h4>
          <p>Database connectors for PostgreSQL.</p>
          <p>MongoDB connectors for product information.</p>
          <p>API integrations for payments.</p>
          <p>Kafka for website activity events.</p>
          <p>CDC for database changes where appropriate.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 5: Design storage</h4>
          <p>The company stores incoming information in cloud object storage.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>shopsmart-data/ │ ├── raw/ │ ├── orders/ │ ├── customers/ │ ├── payments/ │ ├── products/ │ └── website_events/ │ ├── cleaned/ │ ├── orders/ │ ├── customers/ │ └── payments/ │ └── curated/ ├── daily_sales/ ├── customer_analytics/ └── product_performance/</p>
          <p>This is a logical folder structure. A production design should also define file formats, partitioning, metadata, access controls, and lifecycle policies.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 6: Transform data</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The system performs:</h4>
          <p>Duplicate order detection.</p>
          <p>Customer ID validation.</p>
          <p>Payment status validation.</p>
          <p>Timestamp standardization.</p>
          <p>Product and customer joins.</p>
          <p>Revenue calculations.</p>
          <p>Daily aggregations.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Example SQL:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`SELECT DATE(order_timestamp) AS order_date, SUM(quantity * price) AS total_revenue, COUNT(DISTINCT order_id) AS total_orders FROM clean_orders WHERE payment_status = 'SUCCESS' GROUP BY DATE(order_timestamp) ORDER BY order_date;`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 7: Load analytical datasets</h4>
          <p>The curated information is made available in analytical tables.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <p>daily_sales customer_summary product_performance payment_analysis delivery_performance</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 8: Orchestrate the workflow</h4>
          <p>Airflow coordinates the daily workflow.</p>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Extract orders</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Validate data</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Load raw data</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Clean and transform</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Generate daily sales</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Run quality checks</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Publish analytical data</span>
            </div>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 9: Monitor quality and reliability</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The engineering team monitors:</h4>
          <p>Number of daily orders.</p>
          <p>Payment success rates.</p>
          <p>Duplicate order counts.</p>
          <p>Pipeline execution time.</p>
          <p>Dataset freshness.</p>
          <p>Transformation failures.</p>
          <p>Alerts notify engineers when data falls outside expected conditions.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 10: Deliver business value</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">The final platform supports:</h4>
          <p>ShopSmart — Business intelligence outputs</p>
          <p>Revenue reports</p>
          <p>Daily and monthly performance</p>
          <p>Customer analytics</p>
          <p>Purchasing and retention trends</p>
          <p>Inventory analytics</p>
          <p>Demand and stock planning</p>
          <p>Fraud monitoring</p>
          <p>Suspicious payment activity</p>
          <p>Illustrative platform outputs, not live business metrics.</p>
          <p>This is the role of a Data Engineer: building the infrastructure that turns disconnected information into trusted organizational data.</p>
        </div>
      </section>
      {"/* SECTION 17: Important Industry Concepts to Remember */"}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">Core Principles</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Important Industry Concepts to Remember
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Before moving to the next module, understand these additional concepts.</p>
          <p>Data schema</p>
          <p>A formal definition of how a dataset is structured, including field names, types, and constraints.</p>
          <p>Metadata</p>
          <p>Information about a dataset, such as its name, schema, owner, location, and creation date.</p>
          <p>Data lineage</p>
          <p>The ability to trace where data originated and how it was transformed before reaching its destination.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">For example:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Orders Database</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Raw Orders Table</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Clean Orders Table</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Daily Sales Table</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Revenue Dashboard</span>
            </div>
          </div>
          <p>Lineage helps determine which downstream systems may be affected when an upstream source changes.</p>
          <p>Data partitioning</p>
          <p>Dividing a large dataset into logical sections to improve manageability and query performance.</p>
          <p>For example, an order dataset can be partitioned by year, month, and day.</p>
          <p>orders/ year=2026/ month=11/ day=08/ day=09/</p>
          <p>A query for November 9 may only need to read the relevant partition rather than the entire historical dataset.</p>
          <p>Data serialization</p>
          <p>Converting data into a format suitable for storage or transmission.</p>
          <p>Examples include JSON, Avro, and Protocol Buffers.</p>
          <p>Distributed computing</p>
          <p>Dividing processing work across multiple machines so that large tasks can be executed in parallel.</p>
          <p>Scalability</p>
          <p>The ability of a system to handle increasing workloads without unacceptable performance degradation.</p>
          <p>Fault tolerance</p>
          <p>The ability of a system to continue functioning or recover when individual components fail.</p>
          <p>Data governance</p>
          <p>The policies, processes, ownership, and controls that ensure data is properly managed.</p>
        </div>
      </section>
      {"/* SECTION 18: Practical Lab — Build Your First Data Pipeline */"}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Hands-on Lab</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Practical Lab — Build Your First Data Pipeline
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Hands-on exercise</p>
          <p>Beginner</p>
          <p>Now implement a small data engineering pipeline locally.</p>
          <p>You will create a basic system that reads raw CSV data, validates it, transforms it, and generates a processed dataset.</p>
          <p>Objective</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Build the following architecture:</h4>
          <div className="my-4 p-4 rounded-xl bg-stone-50 border border-stone-200">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2 font-mono">Architecture Flow</div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">orders.csv</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Python Data Ingestion</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Data Validation</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Data Transformation</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">processed_orders.csv</span>
              <span className="text-orange-500 font-bold">&rarr;</span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 font-semibold text-stone-800 shadow-2xs">Revenue Analysis</span>
            </div>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 1: Create the project structure</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`data-engineering-lab/ │ ├── data/ │ └── orders.csv │ ├── output/ │ └── main.py`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 2: Create sample data</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create data/orders.csv:</h4>
          <p>order_id,customer_id,product,quantity,price 101,1,Laptop,1,50000 102,2,Mobile,2,20000 103,3,Keyboard,3,1000 104,1,Mouse,2,500 105,2,Monitor,1,12000</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 3: Build the pipeline</h4>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Install Pandas:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`pip install pandas`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Create main.py:</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`from pathlib import Path import pandas as pd INPUT_FILE = Path("data/orders.csv") OUTPUT_DIR = Path("output") OUTPUT_FILE = OUTPUT_DIR / "processed_orders.csv" def run_pipeline(): # Step 1: Check source file if not INPUT_FILE.exists(): raise FileNotFoundError( f"Missing input file: {INPUT_FILE}" ) # Step 2: Extract df = pd.read_csv(INPUT_FILE) # Step 3: Validate required_columns = { "order_id", "customer_id", "product", "quantity", "price" } missing = required_columns - set(df.columns) if missing: raise ValueError( f"Missing columns: {sorted(missing)}" ) # Step 4: Remove duplicate order IDs df = df.drop_duplicates( subset=["order_id"] ).copy() # Step 5: Validate numeric fields df["quantity"] = pd.to_numeric( df["quantity"], errors="coerce" ) df["price"] = pd.to_numeric( df["price"], errors="coerce" ) df = df.dropna( subset=[ "order_id", "customer_id", "quantity", "price" ] ) df = df[ (df["quantity"] > 0) & (df["price"] >= 0) ].copy() # Step 6: Transform df["total_amount"] = ( df["quantity"] * df["price"] ) # Step 7: Load OUTPUT_DIR.mkdir( parents=True, exist_ok=True ) df.to_csv( OUTPUT_FILE, index=False ) # Step 8: Generate report total_revenue = df["total_amount"].sum() total_orders = df["order_id"].nunique() print("Pipeline completed successfully.") print(f"Total orders: {total_orders}") print(f"Total revenue: ₹{total_revenue:,.2f}") print(f"Output saved to: {OUTPUT_FILE}") if __name__ == "__main__": run_pipeline()`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 4: Execute the pipeline</h4>
          <div className="rounded-xl bg-[#1e1e2e] p-4 text-xs font-mono text-stone-200 overflow-x-auto my-3 border border-stone-800 shadow-inner">
            <pre className="font-mono">
              <code>{`python main.py`}</code>
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Expected output:</h4>
          <p>Pipeline completed successfully. Total orders: 5 Total revenue: ₹95,000.00</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Step 5: Understand what you implemented</h4>
          <p>Pipeline stage</p>
          <p>Your implementation</p>
          <p>Extraction</p>
          <p>pd.read_csv()</p>
          <p>Validation</p>
          <p>Required columns and numeric checks</p>
          <p>Cleaning</p>
          <p>drop_duplicates()</p>
          <p>Transformation</p>
          <p>Revenue calculation</p>
          <p>Loading</p>
          <p>to_csv()</p>
          <p>Reporting</p>
          <p>Revenue and order counts</p>
          <p>This is a small batch pipeline.</p>
          <p>It demonstrates the basic engineering workflow, although production pipelines require additional considerations such as stronger validation, incremental processing, logging, schema management, retries, testing, and monitoring.</p>
          <p>Lab extension challenges</p>
          <p>Add a new order_date column.</p>
          <p>Identify orders with missing customer IDs.</p>
          <p>Generate a daily revenue report.</p>
          <p>Calculate revenue for each product.</p>
          <p>Move the data into PostgreSQL instead of CSV.</p>
          <p>Add a logging system.</p>
          <p>Implement a duplicate-record rejection report.</p>
        </div>
      </section>
      {"/* SECTION 19: Module Assessment — Test Your Understanding */"}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Knowledge Assessment</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Module Assessment — Test Your Understanding
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Knowledge check</p>
          <p>0/10 answered</p>
          <p>1. What is the primary responsibility of a Data Engineer?</p>
          <p>Creating business presentations</p>
          <p>Building reliable data infrastructure and pipelines</p>
          <p>Designing website interfaces</p>
          <p>Training only machine learning models</p>
          <p>2. Which system is mainly designed for transactional workloads?</p>
          <p>OLAP</p>
          <p>Data lake</p>
          <p>OLTP</p>
          <p>Data warehouse</p>
          <p>3. Which processing approach is most appropriate for a nightly sales report?</p>
          <p>Batch processing</p>
          <p>Continuous stream processing</p>
          <p>Image processing</p>
          <p>Manual processing</p>
          <p>4. What is the correct order of ETL?</p>
          <p>Extract → Load → Transform</p>
          <p>Load → Extract → Transform</p>
          <p>Transform → Extract → Load</p>
          <p>Extract → Transform → Load</p>
          <p>5. Which format is commonly used for columnar analytical storage?</p>
          <p>MP3</p>
          <p>Parquet</p>
          <p>JPEG</p>
          <p>MP4</p>
          <p>6. Which characteristic distinguishes a data lakehouse?</p>
          <p>It only stores images</p>
          <p>It cannot support transactions</p>
          <p>It combines flexible lake storage with managed analytical table capabilities</p>
          <p>It only supports OLTP</p>
          <p>7. What is data lineage?</p>
          <p>Tracking data origin and transformations</p>
          <p>Compressing a file</p>
          <p>Deleting old databases</p>
          <p>Creating user passwords</p>
          <p>8. What does idempotency help prevent?</p>
          <p>Database backups</p>
          <p>Unintended duplicate effects when an operation is repeated</p>
          <p>All network failures</p>
          <p>Schema creation</p>
          <p>9. Which tool is commonly used for distributed data processing?</p>
          <p>Photoshop</p>
          <p>Apache Spark</p>
          <p>PowerPoint</p>
          <p>Figma</p>
          <p>10. Which of the following is a data quality dimension?</p>
          <p>Screen resolution</p>
          <p>Font size</p>
          <p>Uniqueness</p>
          <p>CPU brand</p>
          <p>Submit assessment</p>
        </div>
      </section>
      {"/* SECTION 20: Practical Assignment and Research Work */"}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">Assignments & Research</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Practical Assignment and Research Work
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>In addition to the assessment, complete these assignments to strengthen your understanding.</p>
          <p>Assignment 1 — Architecture design</p>
          <p>Design a data engineering architecture for a food delivery application.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Your application has:</h4>
          <p>Customer registration.</p>
          <p>Restaurant information.</p>
          <p>Food orders.</p>
          <p>Online payments.</p>
          <p>Delivery tracking.</p>
          <p>Customer reviews.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Your architecture should identify:</h4>
          <p>Data sources.</p>
          <p>Data types.</p>
          <p>Ingestion methods.</p>
          <p>Storage systems.</p>
          <p>Batch processing requirements.</p>
          <p>Streaming requirements.</p>
          <p>Data consumers.</p>
          <p>Data quality checks.</p>
          <p>Expected deliverable: An architecture diagram showing how data moves from sources to consumers.</p>
          <p>Assignment 2 — Technology selection</p>
          <p>Select technologies for a small startup that needs to process 100,000 orders per month.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Explain your choices for:</h4>
          <p>Database.</p>
          <p>Programming language.</p>
          <p>Storage.</p>
          <p>Data processing.</p>
          <p>Orchestration.</p>
          <p>Data warehouse.</p>
          <p>Visualization.</p>
          <p>You do not need expensive infrastructure. Focus on choosing tools appropriate to the workload.</p>
          <p>Assignment 3 — Data quality investigation</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Given a customer dataset, identify:</h4>
          <p>Missing email addresses.</p>
          <p>Invalid customer IDs.</p>
          <p>Duplicate records.</p>
          <p>Inconsistent city names.</p>
          <p>Invalid phone numbers.</p>
          <p>Write SQL or Python checks for each issue.</p>
          <p>Assignment 4 — Research assignment</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Research and compare these three architectures:</h4>
          <p>Traditional ETL with a relational data warehouse.</p>
          <p>Big Data architecture using Hadoop and Spark.</p>
          <p>Modern cloud lakehouse using object storage and an open table format.</p>
          <p>Explain how the architecture, processing approach, storage, scalability, and analytical capabilities differ.</p>
        </div>
      </section>
      {"/* SECTION 21: Important Interview Questions */"}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Interview Preparation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Important Interview Questions
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>These questions are useful for university examinations, technical interviews, and Data Engineering placement preparation.</p>
          <p>Fundamental questions</p>
          <p>What is Data Engineering?</p>
          <p>What are the responsibilities of a Data Engineer?</p>
          <p>How is Data Engineering different from Data Analytics?</p>
          <p>Explain the evolution of Data Engineering.</p>
          <p>What is the Data Engineering lifecycle?</p>
          <p>What are the different types of data?</p>
          <p>What is a data pipeline?</p>
          <p>What is a data schema?</p>
          <p>What is metadata?</p>
          <p>What is data lineage?</p>
          <p>Architecture questions</p>
          <p>Explain the difference between OLTP and OLAP.</p>
          <p>What is a data warehouse?</p>
          <p>What is a data lake?</p>
          <p>What is a lakehouse?</p>
          <p>Compare batch processing and stream processing.</p>
          <p>Explain ETL and ELT with examples.</p>
          <p>What is CDC?</p>
          <p>What is distributed computing?</p>
          <p>What is data partitioning?</p>
          <p>What is schema evolution?</p>
          <p>Production and advanced questions</p>
          <p>What are the dimensions of data quality?</p>
          <p>What is idempotency and why is it important?</p>
          <p>How do you prevent duplicate records in a pipeline?</p>
          <p>What is workflow orchestration?</p>
          <p>How does Apache Kafka fit into a data engineering architecture?</p>
          <p>What is the role of Apache Spark?</p>
          <p>What is a data contract?</p>
          <p>What are data freshness and data reliability?</p>
          <p>What happens when a pipeline fails halfway through execution?</p>
          <p>How would you design a scalable data pipeline for an e-commerce platform?</p>
        </div>
      </section>
      {"/* SECTION 22: Recommended Learning Resources */"}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Curated Resources</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Recommended Learning Resources
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>Use these resources to deepen the concepts covered in this module.</p>
          <p>Resource</p>
          <p>What to study</p>
          <p>MIT OpenCourseWare</p>
          <p>Database and computer systems foundations</p>
          <p>Berkeley</p>
          <p>Database systems and data management</p>
          <p>CMU</p>
          <p>Database systems and distributed computing</p>
          <p>Apache Spark documentation</p>
          <p>Distributed data processing</p>
          <p>Apache Kafka documentation</p>
          <p>Event streaming</p>
          <p>Apache Airflow documentation</p>
          <p>Workflow orchestration</p>
          <p>Databricks documentation</p>
          <p>Lakehouse architecture</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">Useful books:</h4>
          <p>Designing Data-Intensive Applications — Martin Kleppmann.</p>
          <p>Fundamentals of Data Engineering — Joe Reis and Matt Housley.</p>
          <p>The Data Warehouse Toolkit — Ralph Kimball and Margy Ross.</p>
          <p>These books help connect the foundational concepts with production architecture and engineering practices.</p>
        </div>
      </section>
      {"/* SECTION 23: Module 1 — Final Revision */"}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Module Revision</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Module 1 — Final Revision
        </h2>
        <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
          <p>What you should remember</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="1"><strong className="text-stone-900">Data Engineering</strong></li>
          </ol>
          <p>Builds infrastructure for collecting, processing, storing, and delivering data.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="2"><strong className="text-stone-900">Data Engineering lifecycle</strong></li>
          </ol>
          <p>Data generation → Ingestion → Storage → Processing → Serving, supported by orchestration, monitoring, governance, and security.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="3"><strong className="text-stone-900">Data types</strong></li>
          </ol>
          <p>Structured, semi-structured, and unstructured data.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="4"><strong className="text-stone-900">OLTP vs OLAP</strong></li>
          </ol>
          <p>OLTP supports business transactions; OLAP supports analytical queries.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="5"><strong className="text-stone-900">Processing methods</strong></li>
          </ol>
          <p>Batch processes groups of records; streaming processes continuously arriving events.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="6"><strong className="text-stone-900">ETL vs ELT</strong></li>
          </ol>
          <p>ETL transforms before loading; ELT transforms after loading.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="7"><strong className="text-stone-900">Storage architectures</strong></li>
          </ol>
          <p>Data warehouses, data lakes, and lakehouses serve different but sometimes overlapping requirements.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="8"><strong className="text-stone-900">Data pipelines</strong></li>
          </ol>
          <p>Connect different data sources with processing systems and downstream consumers.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="9"><strong className="text-stone-900">Data quality</strong></li>
          </ol>
          <p>Accuracy, completeness, consistency, validity, uniqueness, and timeliness.</p>
          <ol className="list-decimal list-inside space-y-1.5 text-stone-700 text-sm sm:text-base my-3 pl-2">
            <li value="10"><strong className="text-stone-900">Technology ecosystem</strong></li>
          </ol>
          <p>Python, SQL, Spark, Kafka, Airflow, dbt, cloud platforms, and analytical databases.</p>
          <p>What comes next?</p>
          <p>Module 1 established the foundations of Data Engineering. The next step is to understand the systems that make this infrastructure possible.</p>
          <p>Module 2 — SQL and Database Engineering for Data Engineers</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-2 flex items-center gap-2">This should cover:</h4>
          <p>Relational database architecture.</p>
          <p>Database internals and storage engines.</p>
          <p>Tables, schemas, constraints, and relationships.</p>
          <p>SQL fundamentals and advanced SQL.</p>
          <p>Joins, subqueries, CTEs, and window functions.</p>
          <p>Indexing and query optimization.</p>
          <p>Normalization and denormalization.</p>
          <p>Transactions and ACID properties.</p>
          <p>Database locking and concurrency.</p>
          <p>Query execution plans.</p>
          <p>PostgreSQL practical implementation.</p>
          <p>Analytical SQL and dimensional data modeling.</p>
          <p>The objective is to progress from understanding what a data pipeline is to actually building its database and querying components.</p>
          <p>we are add in new course data engineering dont cut any information and dont change any ui</p>
          <p>&lt;/USER_REQUEST&gt;</p>
          <p>&lt;ADDITIONAL_METADATA&gt;</p>
          <p>The current local time is: 2026-11-09T13:03:42+05:30.</p>
          <p>&lt;/ADDITIONAL_METADATA&gt;</p>
        </div>
      </section>
    </div>
  );
}