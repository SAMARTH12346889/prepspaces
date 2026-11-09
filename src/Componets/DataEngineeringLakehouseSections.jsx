import React from "react";
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
  BarChart3
} from "lucide-react";

export default function DataEngineeringLakehouseSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 8: Data Lakes and Lakehouse Architecture Overview */}
      <section id="overview" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Roadmap
          </span>
          <span className="text-xs font-mono text-stone-500">Course Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 8: Data Lakes and Lakehouse Architecture Overview
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 8 — Data Lakes and Lakehouse Architecture</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>DATA ENGINEERING MASTER COURSE · MODULE 8</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">What is Databricks? | Databricks | QuickLearnPro</span>
            <a href="https://images.openai.com/static-rsc-4/RMNB83jqiWcevQKW-rBOt4uULJrV0Pu_j4Fk3eHPBlJv8kPWXcw36uD8wTGB30OyEus5f1Flf4Pca9oDfFtZyKnSX1S-gRLpU9FLzuA4pKW9lF6-iHqFl5MdsomtsdgEMHwrpMLiSU8NsVGaBm_uVqFpeOZYx7onWCBF1rx4NxY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">quicklearnpro.com</span>
            <a href="https://quicklearnpro.com/domains/data-analytics/databricks/overview?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: 1. Understanding Data Lakes */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Data Lake Foundations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Understanding Data Lakes
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.1 Introduction to Data Lakes</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Data Lake is a centralized storage system that stores enormous quantities of data in its original or near-original format, including structured, semi-structured, and unstructured data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike a traditional relational database, which generally expects data to follow a predefined schema, a data lake can store data before its final structure and intended analytical use have been fully defined.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is particularly useful in modern organizations because data comes from hundreds of different sources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an e-commerce company such as Amazon. It might generate:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data source</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example of data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customer applications</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customer profiles, registration details</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Websites</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Clickstream events, page visits</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Payment systems</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transactions, refunds, payment status</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Orders</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Products, quantities, order timestamps</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Logistics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>GPS coordinates, delivery updates</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customer support</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Chat conversations, audio recordings</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>IoT devices</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Sensor readings, machine telemetry</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Marketing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Advertising impressions, campaign performance</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A traditional relational database is useful for storing organized business records. However, collecting and retaining every form of raw data in a rigid relational structure can become difficult and expensive.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A data lake provides a flexible storage foundation for these datasets.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an e-commerce company receives 10 million website events every day.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An individual event might look like:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "event_id": "EVT10001", "customer_id": "C102", "event_type": "product_view", "product_id": "P501", "page_url": "/products/laptop", "device": "mobile", "timestamp": "2026-11-09T10:30:00Z" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The company can store these events in the data lake without immediately creating a complex relational structure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Later, data engineers can:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Identify invalid events.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Standardize timestamps.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Remove duplicate records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Join events with customer and product information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Calculate product popularity.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build recommendation systems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Train machine learning models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The original event records remain available for future processing.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.2 Why Organizations Need Data Lakes</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data lakes solve several important data engineering problems.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Handling multiple data formats</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data lake can store:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CSV files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>JSON documents.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>XML files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parquet files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avro files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Images.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Audio recordings.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Video files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Machine-generated logs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Streaming event data.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Storing large amounts of historical information</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Organizations often need years of historical data for forecasting, auditing, fraud detection, and machine learning.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A data lake provides a scalable storage foundation for retaining that information.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Separating storage from computation</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The data can remain in object storage while different processing engines access it.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, Apache Spark can perform transformations, while Trino or another SQL engine can perform analytical queries.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Supporting machine learning and AI</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Machine learning systems frequently need historical information, unstructured documents, images, and large training datasets. Data lakes can store these resources together.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Reducing storage costs</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud object storage can provide economical storage for large volumes of data, particularly when data does not need to be accessed frequently.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.3 Data Lake Example: E-commerce Architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an online shopping company collecting data from its website, mobile application, payment gateway, and delivery services.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Project: E-commerce Platform on AWS | Sachin Bulchandani</span>
            <a href="https://images.openai.com/static-rsc-4/gt0hZgRHgBea5Yh8htEr0CELeK7ESvrnE13FNmXqAQBH3tVlpNoouqv1iMhKYmjPyDusKz19wfcMmTDjGPQ3CZECqYfO0wLpput_mCLoDuDDkF5DBxoyeoK5zYJJPMYKdXp1x7Qc3MMiX0MRzyiM2otMWEYQkUAv8CC9lr7V2FA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">sachinpb.com</span>
            <a href="https://www.sachinpb.com/projects/ecommerce.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The information follows this general pipeline:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Applications generate customer activity and transactions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Kafka or another ingestion system collects streaming events.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Database extraction pipelines collect operational records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Files and events are stored in cloud object storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Spark processes and transforms the information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Clean datasets are made available for analytics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Business intelligence tools and machine learning applications consume the results.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The important principle is that the data lake acts as the common storage foundation rather than requiring every application to maintain its own disconnected analytical copy.</p>
        </div>
      </section>

      {/* SECTION 2: 2. Data Lake Architecture */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Multi-Tier Lake Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. Data Lake Architecture
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data lake is not simply a large folder containing files. A properly designed data lake has multiple architectural components responsible for ingestion, storage, processing, metadata, security, and consumption.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.1 Main Components of Data Lake Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">What Is a Data Lake? Definition, Architecture &amp; Benefits</span>
            <a href="https://images.openai.com/static-rsc-4/RoYy365bvyzyAwccq5QmIOn_cZXd5ylgLf9tdMFYwH5GosfQYc0K3obMKAviMgT9FEPqhewoIm6mKEukARupi73b3awFwYRZT7Wf2uLTPoMlz3fSS17Sf24X2FnFg3jRLmvWHsb4dLrfEoKtsiOSBK3irQPiJ0DTBuPeVx6PyP4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">puppygraph.com</span>
            <a href="https://www.puppygraph.com/learn/what-is-a-data-lake?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Data Sources</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These are the systems that generate information.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>MySQL and PostgreSQL databases.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>MongoDB.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>REST APIs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Kafka event streams.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Application logs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CSV and JSON exports.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>IoT devices.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>External third-party APIs.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Data Ingestion Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The ingestion layer transfers data from source systems into the data lake.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Two major ingestion approaches exist.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Batch ingestion</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Batch ingestion collects information over a period and transfers it together.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A banking system exports transactions every night at 12 AM.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source database | v Collect today's transactions | v Create CSV/Parquet files | v Upload to data lake</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Typical tools include Apache Airflow, AWS Glue, and batch processing applications.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Streaming ingestion</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Streaming ingestion continuously collects events as they occur.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A payment service generates an event whenever a customer makes a payment.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment Service | v Apache Kafka | v Stream Processing | v Data Lake</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Typical technologies include Apache Kafka, Amazon Kinesis, Apache Flink, and Spark Structured Streaming.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Storage Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The storage layer contains the actual datasets.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud object storage is commonly used:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Amazon S3.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Azure Data Lake Storage (ADLS).</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Google Cloud Storage (GCS).</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data is organized into directories, partitions, files, and logical datasets.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Processing Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This component transforms raw information into useful datasets.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Spark.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Flink.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Databricks.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>AWS Glue.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Trino.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Metadata Management Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Metadata describes the data stored in the lake.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Table: customer_transactions Columns: transaction_id: STRING customer_id: STRING amount: DECIMAL transaction_date: DATE Storage: s3://company-lake/silver/transactions/ Format: Parquet</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A metadata catalog allows analytical systems to discover tables, understand schemas, and locate files.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Examples include AWS Glue Data Catalog, Hive Metastore, and Iceberg-compatible catalogs.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6. Security and Governance Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This controls who can access the data and how it can be used.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Responsibilities include:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Authentication.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Authorization.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Encryption.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data masking.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>PII protection.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data lineage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Audit logging.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Retention policies.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7. Consumption Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is where users and applications consume the processed data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Power BI.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Tableau.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Superset.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Machine learning platforms.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>SQL query engines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Business reporting applications.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.2 End-to-End Data Lake Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a banking application.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A customer performs a ₹5,000 online transaction.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The process might be:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer Transaction | v Banking Application | v Transaction Database | v Kafka / CDC Pipeline | v Amazon S3 Data Lake | v Apache Spark Processing | v Clean Transaction Dataset | v Fraud Detection Model | v Risk Dashboard</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The architecture supports historical analysis, fraud detection, financial reporting, and machine learning without placing all analytical processing workloads on the operational transaction database.</p>
        </div>
      </section>

      {/* SECTION 3: 3. Data Lake vs Data Warehouse */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Lake vs Warehouse Paradigms</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. Data Lake vs Data Warehouse
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both technologies store data for analytical purposes, but they have different design philosophies.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.1 What Is a Data Warehouse?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Data Warehouse is a centralized analytical database designed to store structured, integrated, and often business-oriented data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data is generally cleaned, transformed, and modeled before being made available for analytical querying.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Amazon Redshift.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Google BigQuery.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snowflake.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Azure Synapse Analytics.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a bank with several operational systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The banking application stores customer accounts, while the payment application stores transactions and the loan application stores loan records.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A data warehouse integrates these datasets into a consistent analytical model.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CUSTOMERS --------- customer_id customer_name city TRANSACTIONS ------------ transaction_id customer_id amount transaction_date LOANS ----- loan_id customer_id loan_amount interest_rate</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business analysts can use SQL to answer questions such as:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is the monthly transaction volume?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Which regions generate the most revenue?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is the average loan amount?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Which customer segments have the highest default rates?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.2 Comparison</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Lake</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Warehouse</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Structured, semi-structured, unstructured</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Primarily structured analytical data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema approach</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema-on-read commonly used</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema-on-write commonly used</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Object storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analytical database storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Processing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Flexible processing engines</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Integrated warehouse processing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data preparation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Can store raw data first</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generally transforms before loading into analytical models</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Machine learning</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Suitable for diverse training datasets</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Suitable for structured analytical data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Historical raw data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common use case</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Not generally its primary purpose</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>File formats</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CSV, JSON, Parquet, Avro, etc.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Managed internal or columnar storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Typical users</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data engineers, data scientists</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analysts, BI developers, data engineers</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.3 Schema-on-Write vs Schema-on-Read</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These are two important concepts.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema-on-Write</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema-on-write means the structure is defined and validated before data is written into its target table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a warehouse table is defined as:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE customers ( customer_id INT, name VARCHAR(100), age INT, city VARCHAR(100) );
When data is inserted, the database checks whether the incoming information conforms to the required structure and types.
For example:
INSERT INTO customers VALUES (101, 'Rahul', 23, 'Pune');`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The data is expected to follow the defined schema.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema-on-Read</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema-on-read means data can be stored first, while its structure is interpreted when it is read or processed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a lake contains JSON files:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[ { "customer_id": 101, "name": "Rahul", "city": "Pune" }, { "customer_id": 102, "name": "Amit", "city": "Mumbai", "membership": "Premium" } ]`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The records have slightly different fields.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A processing engine can interpret the records, infer a schema, and apply the appropriate transformations when reading them.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This flexibility is valuable when integrating evolving datasets from multiple systems.</span>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            Schema-on-read does not mean data quality is unimportant. It means the storage step does not necessarily require a fully standardized analytical schema.
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.4 When Should You Use Each?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use a data lake when:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You need to preserve raw information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You have large amounts of diverse data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You need machine learning datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You want flexible processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You need economical storage.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use a data warehouse when:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You need highly structured analytical tables.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You run business intelligence workloads.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You require standardized business definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You need consistent reporting and SQL analytics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Modern platforms frequently combine both approaches through a lakehouse.</span>
          </div>
        </div>
      </section>

      {/* SECTION 4: 4. Object Storage Fundamentals */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Cloud Object Storage (S3/ADLS/GCS)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. Object Storage Fundamentals
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Object storage is one of the most important foundations of modern data lakes.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.1 What Is Object Storage?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Object storage is a storage architecture in which information is stored as independent objects rather than traditional database records or blocks exposed through a conventional filesystem.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An object generally contains three things:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Actual data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Metadata describing the object.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A unique identifier or key used to locate the object.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Object: Key: sales/2026/november/orders.parquet Data: Binary Parquet file Metadata: Content-Type: application/octet-stream Size: 250 MB Last-Modified: 2026-11-09</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The object can be accessed using its bucket and key.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`s3://company-data-lake/sales/2026/november/orders.parquet
Here:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>s3 represents the storage service.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>company-data-lake represents the bucket.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>sales/2026/november/orders.parquet represents the object key.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.2 Object Storage vs File Storage vs Block Storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Object Storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>File Storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Block Storage</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Organization`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Objects and keys</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Files and directories</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Fixed-size blocks</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Access</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>API / HTTP</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Filesystem protocols</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Block device</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Scalability</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Very high</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Depends on filesystem</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Depends on storage system</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Best suited for</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data lakes, backups, media</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Shared files, home directories</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Databases, virtual machines</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Metadata</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Rich object metadata</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>File attributes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Limited at block level</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Object storage example: Amazon S3.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>File storage example: NFS and Amazon EFS.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Block storage example: Amazon EBS.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.3 Amazon S3 Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Understanding Amazon S3: Scalable Object Storage in AWS | by RITIKA GAURKHEDE | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/bsqM97mHA-2LzRyPj7N1WE5LfUGoGHJNbO9xA8BmRwO597X1wmT83-QSrZC6RjO5WG6K4HOCUUEdLFMcus2S88NtG-l7FgRH2PV0uWTPh0-IWOgsTXaBWBWdmpgxulKWXbWkM2KmNyi9EvPgusVpZCcDum3f9DkBsB7qATNJZq0?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40ritikagaurkhede/understanding-amazon-s3-scalable-object-storage-in-aws-edf500ce110b?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amazon Simple Storage Service (Amazon S3) is a cloud object storage service widely used to build data lakes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its main concepts include:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Bucket</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A bucket is a container for objects.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>company-data-lake</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Object</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An object is an individual stored resource.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customers.csv transactions.parquet website_events.json</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Object Key</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The key identifies the object within its bucket.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>sales/2026/november/transactions.parquet</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Versioning</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Versioning maintains multiple versions of objects when they are overwritten.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This helps recover earlier object versions and protects against certain accidental changes.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Storage Classes</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>S3 provides different storage classes for different access patterns.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Examples include:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>S3 Standard.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>S3 Standard-IA.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>S3 One Zone-IA.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>S3 Glacier Instant Retrieval.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>S3 Glacier Flexible Retrieval.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>S3 Glacier Deep Archive.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Frequently accessed analytical data and long-term archival data do not necessarily need the same storage tier.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.4 How Amazon S3 Supports a Data Lake</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider this storage structure:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`company-data-lake/ │ ├── bronze/ │ ├── customers/ │ ├── transactions/ │ └── website_events/ │ ├── silver/ │ ├── customers_cleaned/ │ └── transactions_cleaned/ │ ├── gold/ │ ├── daily_revenue/ │ └── customer_analytics/ │ └── archives/ ├── 2024/ └── 2025/`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Each directory represents a logical organization of objects.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An application can upload files, processing engines can read them, and analytical systems can query the processed datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is important to understand that these directory structures are generally logical prefixes in object keys, rather than traditional directories managed by a filesystem.</p>
        </div>
      </section>

      {/* SECTION 5: 5. Distributed File Storage */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · HDFS vs Cloud Object Stores</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. Distributed File Storage
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.1 What Is Distributed File Storage?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed file storage is a storage architecture in which data is distributed across multiple machines instead of being maintained on one physical computer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The purpose is to make it possible to store, retrieve, and process enormous datasets across a cluster of machines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an organization collects 10 TB of transaction information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storing and processing all 10 TB on a single machine could be expensive and create performance bottlenecks.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A distributed storage system divides the workload across multiple machines.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Distributed File Systems (DFS) | Architecture &amp; Consistency | Software System Design</span>
            <a href="https://images.openai.com/static-rsc-4/LmzTmVqlCIvYrjbtbjjrK-zxMjS9k2XOPl1lvMGFW3rTP1EU4S2OaJ3rLoaOTMuSgNAf6bcHZeU_-H0PAMqEWSYL8dwiLXu_UizK1n0QNkNimJ8Fao4j6MML9G0XSehvEmTmK7iS-Fyp4r_SlszfUFkdY3eEu-eSEJDnla7u5aA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">softwaresystemdesign.com</span>
            <a href="https://softwaresystemdesign.com/distributed-storage-systems/distributed-file-systems/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DATASET: 10 TB | Distributed Storage System | +-----------+-----------+ | | | v v v Node 1 Node 2 Node 3 3 TB 3 TB 4 TB | | | +-----------+-----------+ | Distributed Processing</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The storage system coordinates access to the data across its machines.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.2 Apache Hadoop Distributed File System (HDFS)</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Hadoop provides a distributed storage system called HDFS.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>HDFS was designed to store large datasets across clusters of commodity machines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Its architecture contains two important components.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. NameNode</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The NameNode manages filesystem metadata.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its responsibilities include:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Maintaining file and directory information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Tracking where data blocks are stored.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Managing filesystem namespace operations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Coordinating access to DataNodes.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Importantly, the NameNode generally manages metadata, not the actual contents of every file.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. DataNode</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>DataNodes store the actual data blocks.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Their responsibilities include:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Storing data blocks.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Serving read and write requests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reporting their status to the NameNode.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Replicating blocks when required.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Maintaining the physical storage of datasets.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>HDFS Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">HDFS (Hadoop Distributed File System) - Distributed Computing in Java 9 \[Book\]</span>
            <a href="https://images.openai.com/static-rsc-4/kIe_B20lmem4Qln164uO1XUcOONZ6HVPIeT4OuuiVUEKSUFFuargzr_QFIY81eGR5X5E4eQF-L9hTrV8JdoytvCjRjFG1l8ybrKYmg6c6uYX0VmMXjmpcq5ILDvhIqWbVM_k_LBrc6r0_uRx-gq-sN0fBlgCI1rorGG-TxYwYso?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">oreilly.com</span>
            <a href="https://www.oreilly.com/library/view/distributed-computing-in/9781787126992/3275691a-477f-4e3a-a00c-9a64bda93b16.xhtml?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose we have a file of 1 GB and configure the HDFS block size to 128 MB.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The file is divided into eight blocks:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: transactions.csv Size: 1 GB Block 1: 128 MB Block 2: 128 MB Block 3: 128 MB Block 4: 128 MB Block 5: 128 MB Block 6: 128 MB Block 7: 128 MB Block 8: 128 MB</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These blocks are distributed across DataNodes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>HDFS can also maintain multiple replicas of each block.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Block 1 | +---- DataNode 1 | +---- DataNode 2 | +---- DataNode 3</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>If a machine becomes unavailable, another replica may be used to retrieve the data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is called data replication.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The replication factor controls how many copies of a block should be maintained.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.3 Distributed Storage and Distributed Processing</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Storage distribution alone does not provide all the benefits of big data processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>We also need distributed computation.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a dataset containing 100 million transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of one machine processing every record, a distributed engine divides the work into tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">100 Million Records | Apache Spark | +-----------+-----------+ | | | v v v Task 1 Task 2 Task 3 33M 33M 34M | | | +-----------+-----------+ | v Combined Results | v Final Report</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Each executor processes its assigned partition of the data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This allows processing to scale horizontally by adding more compute resources.</span>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            Distributed storage and distributed processing are separate concepts. HDFS provides distributed storage, whereas Apache Spark provides distributed computation. They can work together, but neither is identical to the other.
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.4 HDFS vs Cloud Object Storage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Modern cloud data lakes commonly use object storage instead of operating their own HDFS clusters.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>HDFS</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Cloud Object Storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Architecture</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Distributed filesystem</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Distributed object store</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data access</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Filesystem APIs</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Object APIs</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Organization`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Files and directories</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Buckets and object keys</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Scaling</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Cluster-based</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Managed cloud service</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Infrastructure</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Cluster administration</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Provider-managed storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Hadoop HDFS</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Amazon S3</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common use</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Hadoop clusters</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Cloud-native data lakes</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A key architectural difference is that HDFS exposes filesystem semantics, whereas object storage exposes objects through APIs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud analytical engines are designed to read and write datasets stored in object storage without requiring the user to manage storage servers.</p>
        </div>
      </section>

      {/* SECTION 6: 6. Raw, Processed, and Curated Data Zones */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Storage Zones</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. Raw, Processed, and Curated Data Zones
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A data lake should not treat every dataset as equally reliable.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an organization receiving customer information from five different applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One application sends customer names in uppercase, another uses lowercase, and a third sends customer records with missing email addresses.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combining all these records directly into an analytical report can produce incorrect results.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>To manage this problem, data lakes commonly use multiple storage zones.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.1 Raw Data Zone</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The raw zone stores information as received from source systems, with minimal transformation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`data-lake/ raw/ customers/ transactions/ payments/ application_logs/
Suppose the source sends this record:
{ "customer_id": "C101", "name": " RAHUL ", "email": "RAHUL@GMAIL.COM", "amount": "5000" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The raw zone should preserve the original representation rather than immediately changing it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Responsibilities:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Preserve source information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Maintain historical records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Support auditing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Enable pipeline reprocessing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Retain source-level details.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Support investigation of data quality problems.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A useful practice is to maintain ingestion metadata, such as:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>source_system ingestion_timestamp source_file batch_id</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These fields help trace where a record originated.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.2 Processed Data Zone</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The processed zone contains information that has undergone cleaning and standardization.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raw record:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "customer_id": "C101", "name": " RAHUL ", "email": "RAHUL@GMAIL.COM", "amount": "5000" }
Processed record:
{ "customer_id": "C101", "name": "Rahul", "email": "rahul@gmail.com", "amount": 5000.00 }
Typical transformations include:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Removing unnecessary whitespace.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Standardizing formats.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Converting data types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Handling missing values.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Removing duplicates.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validating records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Standardizing timestamps.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Resolving inconsistent identifiers.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Invalid records should generally be quarantined or routed to a separate error dataset rather than silently discarded.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.3 Curated Data Zone</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The curated zone contains datasets prepared for specific business and analytical requirements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, the processed transaction table might contain millions of individual transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The curated zone could contain:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_monthly_revenue daily_sales_summary product_performance regional_transaction_analysis</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These datasets are designed for easy consumption.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A business analyst does not necessarily need to join ten raw datasets to calculate monthly revenue.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The curated zone provides a ready-to-use dataset.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.4 Comparison of the Three Zones</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Raw</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Processed</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Curated</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Main purpose</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Preserve original information</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Clean and standardize</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Support business use</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transformations</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Minimal</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Extensive cleaning</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Business-oriented transformations</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data quality</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Not guaranteed</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Validated</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Expected to meet defined requirements</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Structure</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Source-oriented</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Standardized</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analytical</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Consumers</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data engineers, auditors</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Engineers, analysts, scientists</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analysts, BI, executives</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Raw transactions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Valid transactions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Monthly revenue</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These zones establish a progression from original data to reliable business information.</span>
          </div>
        </div>
      </section>

      {/* SECTION 7: 7. Medallion Architecture */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Bronze, Silver & Gold Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Medallion Architecture
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.1 Introduction to Medallion Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">FigLab — AI-Powered Scientific Visualization</span>
            <a href="https://images.openai.com/static-rsc-4/nDBdaklqQuExr2GCXRPf6jzwZDtKhp8ykgZ6oH02ptOkr5Y0Q-vuN0hcOKIlxwc-fFk2rs-UMc6uUFFQ8EzTIxGPskuqbHKUXgmeu7sJ9m9rGIUpM7r-QKpFUgo2zQ8JJr8ppgBXxZdMA4R8M9Bh3dSuRQtuQE01Tb0mym3vIVs?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">figlab.ai</span>
            <a href="https://figlab.ai/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Medallion Architecture is a layered data architecture that organizes a lakehouse into three principal data-quality layers:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Bronze — Raw data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Silver — Cleaned and validated data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Gold — Business-ready data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The purpose is to progressively improve the quality, structure, and usability of data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is a design pattern, not a mandatory architecture. Its layers also represent logical data-quality boundaries, not necessarily three separate physical storage systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Databricks on Google Cloud+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.2 Bronze Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The Bronze layer receives data from external source systems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It preserves information with minimal transformation.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`bronze/ customers/ customers_001.json customers_002.json transactions/ transactions_001.json transactions_002.json payments/ payments_001.json
Suppose the source system generates the following events:
[ { "transaction_id": "T101", "customer_id": "C101", "amount": "5000", "status": "SUCCESS" }, { "transaction_id": "T102", "customer_id": "C102", "amount": "invalid", "status": "SUCCESS" }, { "transaction_id": "T103", "customer_id": "C103", "amount": "2500", "status": "PENDING" } ]`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The Bronze layer should preserve all three source records, including the invalid amount.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Because deleting an invalid record at ingestion means we lose evidence of what the source actually sent.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The engineering team may later fix the parsing logic and reprocess the Bronze records.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Bronze layer characteristics:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Raw source data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Minimal transformations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historical preservation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incremental ingestion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Source information and ingestion timestamps.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Support for reprocessing and auditing.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.3 Silver Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The Silver layer improves the quality of the data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It applies validation and standardization rules.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">bronze.transactions | v Validate transaction IDs | v Convert amount to DECIMAL | v Identify duplicates | v Validate transaction status | v silver.transactions</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Let's implement a simplified example using PySpark.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from pyspark.sql import functions as F # Read Bronze transaction data transactions = spark.read.json( "s3://company-lake/bronze/transactions/" ) # Standardize and convert fields cleaned = ( transactions .withColumn( "amount", F.expr("try_cast(amount AS DECIMAL(18,2))") ) .withColumn( "status", F.upper(F.trim(F.col("status"))) ) .withColumn( "customer_id", F.trim(F.col("customer_id")) ) ) # Remove invalid records from the clean output valid = cleaned.filter( F.col("transaction_id").isNotNull() & F.col("customer_id").isNotNull() & F.col("amount").isNotNull() & F.col("amount").greaterThanOrEqual(0) & F.col("status").isin("SUCCESS", "PENDING", "FAILED") ) # Remove duplicate transaction IDs valid = valid.dropDuplicates(["transaction_id"]) # Write Silver output ( valid.write .format("delta") .mode("append") .save("s3://company-lake/silver/transactions/") )`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is an illustrative batch pipeline. A production implementation also needs an explicit strategy for incremental processing, duplicate handling across batches, late-arriving events, and invalid-record quarantine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Silver layer characteristics:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validated records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Standardized schemas.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Deduplication.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data type conversion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Cleansed datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data quality checks.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Integration across related datasets.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.4 Gold Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The Gold layer contains business-oriented and analytical datasets.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the organization wants a daily sales report.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It does not need every individual raw transaction in the reporting table.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It needs aggregated information such as:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Daily revenue.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Total transactions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Successful transactions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Average transaction value.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Number of customers.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from pyspark.sql import functions as F transactions = spark.read.format("delta").load( "s3://company-lake/silver/transactions/" ) daily_sales = ( transactions .filter(F.col("status") == "SUCCESS") .groupBy("transaction_date") .agg( F.sum("amount").alias("total_revenue"), F.countDistinct("transaction_id").alias("total_transactions"), F.countDistinct("customer_id").alias("active_customers"), F.avg("amount").alias("average_transaction_value") ) ) ( daily_sales.write .format("delta") .mode("overwrite") .save("s3://company-lake/gold/daily_sales/") )
The Gold dataset might look like:`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Date</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Revenue</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transactions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customers</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Nov 7</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>₹5,00,000</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1,200</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>950</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Nov 8</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>₹6,20,000</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1,450</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1,120</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Nov 9</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>₹5,80,000</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1,350</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1,060</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This dataset can be consumed by a business intelligence dashboard.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.5 Complete Medallion Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Medium</span>
            <a href="https://images.openai.com/static-rsc-4/UPMo1vUIqxzO1WkF-DjVituuMBBPIcmkGKKi-SRU98Rpg-r4gLCiC2B8Xw8uIOSW2dODsZHJeHsT-h6E6C4h6OR5ecIrUfs2xMC9SrvGVTciz0G05l4gl_1Tgsx5zPMFV5hXSfeiSsBB7u24qbdWnnUKWL_xNxVhd604dXGm098?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/towards-data-engineering/why-medallion-architecture-still-matters-and-where-it-fails-066987233092?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Layer</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example table</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Purpose</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Bronze</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>transactions_raw</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Preserve source transactions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Silver</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>transactions_clean</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Validate and standardize</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Gold</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>daily_sales</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Prepare analytical summaries</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.6 Important Design Principles</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Do not directly overwrite the raw data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Preserving the original source information makes it possible to rebuild downstream datasets.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Do not assume Silver means every record is correct.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validation rules only enforce the quality rules that have been defined. Business owners must define what constitutes valid data.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Do not put every analytical transformation into Gold.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Silver should remain reusable. Gold should be developed for particular business or analytical requirements.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Do not confuse the Medallion Architecture with table formats.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Bronze, Silver, and Gold define how data is organized and refined. Delta Lake and Apache Iceberg define how individual tables manage their data and metadata.</p>
        </div>
      </section>

      {/* SECTION 8: 8. Data Lake Storage Formats */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Parquet, Avro, ORC & Columnar Internals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Data Lake Storage Formats
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data formats determine how information is physically represented inside files.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Choosing the correct format has a significant effect on storage size, query performance, processing efficiency, and compatibility.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.1 CSV</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CSV stands for Comma-Separated Values.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It is a text-based format that stores data as rows and columns.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">transaction_id,customer_id,amount,status T101,C101,5000,SUCCESS T102,C102,2500,PENDING T103,C103,3200,SUCCESS</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Advantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Human-readable.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Easy to generate.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Supported by almost every data platform.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Useful for data exchange.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>No strongly enforced data types within the file.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Repeated column names in different files.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Larger storage requirements compared with compressed binary columnar formats in many analytical workloads.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Expensive to scan large datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Nested structures are inconvenient.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CSV is useful for small exports and simple data exchange, but is usually not the first choice for large analytical datasets.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.2 JSON</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>JSON stands for JavaScript Object Notation.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It represents information using key-value structures and supports nested objects and arrays.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "transaction_id": "T101", "customer": { "customer_id": "C101", "name": "Rahul", "city": "Pune" }, "payment": { "amount": 5000, "method": "UPI", "status": "SUCCESS" } }`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>JSON is common in REST APIs, application logs, and event streams.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Advantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Supports nested data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Human-readable.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Easy integration with applications.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Flexible structure.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Repeats field names across records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Can be expensive to parse at scale.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Type inconsistencies can complicate processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Usually inefficient for repeated analytical scans compared with a columnar format.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.3 Apache Parquet</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">【Polars】Parquet（パーケット）形式とは？</span>
            <a href="https://images.openai.com/static-rsc-4/Z8LcfKrG2hIsZUPM_TtWGd44sBXTW6nPQp3O--0tYRbRAtg-gUlEI-ejzQ8Yi9Q_GigjfNsldWwbOv-N4Fyy_zCjjj44u5YVA3beywDsGhD0nV4_XetTf5WFS80a-igdxDSPn4O1TsQU4-wzprLMWx37r07e03MSDT-H6dhXHBM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Parquet</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Columnar analytical storage format</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parquet is a columnar storage format designed for efficient analytical processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>To understand why it matters, compare row-oriented and column-oriented storage.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose we have this table:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transaction ID</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customer</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Amount</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>City</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>T101</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Rahul</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5000</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Pune</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>T102</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Amit</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2500</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Mumbai</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>T103</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Priya</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3200</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delhi</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Row-oriented representation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">T101, Rahul, 5000, Pune T102, Amit, 2500, Mumbai T103, Priya, 3200, Delhi</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The information for an individual row is stored together.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Column-oriented representation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transaction ID: T101, T102, T103 Customer: Rahul, Amit, Priya Amount: 5000, 2500, 3200 City: Pune, Mumbai, Delhi</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The physical representation is more complex than this conceptual illustration, but the main idea is that values from the same column are organized together.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why Is Parquet Useful?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an analyst executes:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT SUM(amount) FROM transactions;`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The query only needs the amount column.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With a columnar format, the engine can avoid reading unnecessary columns.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This reduces I/O and can improve analytical query performance.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parquet also uses encoding and compression techniques to reduce the amount of stored and transferred data.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Internal Parquet Structure</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Parquet File Anatomy: Row Groups, Column Chunks, Pages, and Metadata Explained 🧱📦 - DEV Community</span>
            <a href="https://images.openai.com/static-rsc-4/E6ah7QdzazCG_M8qWuw4CMbN5sAjSH61qO9SpENDmZlzG9KXk9m_jfdONTXzMfnbg_1yd71UgRdo_f8Chx72_XGcXb3p7QpuaMDtBzDy-m35wMnj-8RcByXclaCKoek7PWDuaRu7Q13vZP3akz7qkrJ1rtWDpvH4vNx6qIyZPwo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">dev.to</span>
            <a href="https://dev.to/databro/apache-parquet-file-anatomy-row-groups-column-chunks-pages-and-metadata-explained-4ebg?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The hierarchy is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parquet File | +---- Row Group 1 | | | +---- Column Chunk: transaction_id | +---- Column Chunk: amount | +---- Column Chunk: city | +---- Row Group 2 | +---- Column Chunk: transaction_id +---- Column Chunk: amount +---- Column Chunk: city</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Each column chunk is divided into pages.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A page is a unit used for encoding, compression, and reading.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parquet's row groups, column chunks, and pages help analytical engines parallelize processing and avoid unnecessary reads.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.4 Apache Avro</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Avro Logo PNG Vector (SVG) Free Download</span>
            <a href="https://images.openai.com/static-rsc-4/uzdIlWQGLqyCImrMkPaOmX3WbKQW_jluLRv9V2VngIbgJJTghawZyR2H3bV0Y1JucK8uoHtTVC0MGgBLIpz9dwrt51U5LUEh7DJ1ZD_d-HTHVX-JLx0iWHkmY1CiU7roCYl8PSraWjeKBP8ye0uYSbDSVJujaIMFFMgvsAmcwxI?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Avro</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Row-oriented serialization format</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avro is a serialization system designed for compact data representation and schema-based data exchange.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider this Avro-style schema:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "type": "record", "name": "Transaction", "fields": [ { "name": "transaction_id", "type": "string" }, { "name": "customer_id", "type": "string" }, { "name": "amount", "type": "double" } ] }`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The schema describes how transaction records are structured.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Avro data is commonly stored in a compact binary representation, making it useful for data serialization and exchange between systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Typical use cases:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Kafka event serialization.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Streaming pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data exchange between services.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema-controlled event systems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data ingestion.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.5 Apache ORC</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Optimizing Data Processing with ORC, Parquet, Avro | by Pranam Shetty | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/ackJgLIrDaQpunw1kIiM7LmjlL8pl6u37YXsH8C9o-IsK2Lg5ShewaMMkpNMHkx2ldDebL8lLetsQ_uGtfmQO2vPWxlIz8UzDkz4KDtOh_Cefhy_ztrI5xSoBh34GHBPcWYV9LxlVQfgFx6VZ7VewTZuI2XDOP3UevQReVzmsqg?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache ORC</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Optimized Row Columnar format</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>ORC is another columnar file format designed for efficient analytical processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It supports compression, column statistics, and efficient reading of selected columns.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It is commonly encountered in Hadoop and Hive-based data environments.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.6 Comparison of Storage Formats</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CSV</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>ORC</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Representation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Columnar binary</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Row-oriented binary</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Columnar binary</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>External or inferred</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Flexible</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Embedded metadata</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Explicit schema</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Embedded metadata</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compression</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Possible</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Possible</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Supported</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Supported</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Supported</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Nested data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Limited</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Excellent</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Supported</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Supported</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Supported</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analytical performance</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Generally lower</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Generally lower</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>High for analytical scans</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Less suited to column scans</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>High for analytical scans</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Typical use</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data exports</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>APIs and logs</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analytics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Streaming and serialization</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analytics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Practical recommendation:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a modern analytical data lake, Parquet is an important format to understand. Avro is especially useful for schema-based event serialization. CSV and JSON are common ingestion formats, and ORC is important when working with Hive-oriented environments.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.7 A Critical Difference: File Format vs Table Format</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is one of the most important distinctions in this module.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A file format describes how records are physically stored.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parquet.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>ORC.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avro.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CSV.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A table format describes how multiple files collectively behave as one reliable, manageable logical table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Delta Lake.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Iceberg.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Hudi.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delta Table | +---- Transaction Metadata | +---- Parquet File 1 | +---- Parquet File 2 | +---- Parquet File 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parquet stores the records. Delta Lake manages the table's transactional and metadata behavior.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Parquet file by itself does not provide the complete ACID transaction and version-management capabilities of a transactional table format.</p>
        </div>
      </section>

      {/* SECTION 9: 9. Apache Iceberg Architecture */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Table Formats: Apache Iceberg</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Apache Iceberg Architecture
        </h2>
        <div className="space-y-3">
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Iceberg Icon | Dashboard Icons</span>
            <a href="https://images.openai.com/static-rsc-4/KKxU2RyApH_xql380suh_-LbsHpxZdBVLSjeGNXJnOgFnN08XPzHUT2KAUq775vs4zPQj8NkvnZqoK8HAXnPTFU-3lLl9K9cADND0XnpZIkLVNBrg6g_kD6EghA_ez8zs1pfTLIr1e5CPUQakU5CbBIeYW2NqJus3on_ljqiZR4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Iceberg</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Open table format</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.1 Introduction to Apache Iceberg</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Iceberg is an open table format designed to manage large analytical datasets stored in data lakes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its purpose is to make files in object storage behave more like a reliable analytical table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a company storing billions of transaction records in Parquet files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without a table format, managing the dataset becomes complicated:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Which files belong to the table?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Which files are part of the latest committed dataset?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How can a user read a previous version?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How can a schema be changed safely?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What happens if two processes write at the same time?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How can new files be added without confusing concurrent readers?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Iceberg addresses these challenges through table metadata, snapshots, manifests, schema management, and transactional commits.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.2 Iceberg Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Iceberg Table Architecture: Metadata and Snapshots | Conduktor</span>
            <a href="https://images.openai.com/static-rsc-4/1gVgW-i8NLbL2lPeWJciQNM-wSj9oolAD6WgymHtDMa4yawtriX-cRE-RdGXqJ-nXrP3bPje_XeszLVMCP02kfllu-4kJ-Re37n9bVfzW1cG_CCRRX4rapIfYxUV32SdA3M0P1PONEQ66hudaCc9h5GRU102FK55uRpsOE4wrxA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">conduktor.io</span>
            <a href="https://www.conduktor.io/glossary/iceberg-table-architecture-metadata-and-snapshots?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An Iceberg table has several important components.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Catalog</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The catalog helps users and engines identify and load tables.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Examples include Hive Metastore, AWS Glue Catalog, and Iceberg REST Catalog implementations.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Table Metadata</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The metadata describes the table's structure and current state.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It includes information such as:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Table location.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Partition specifications.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snapshot references.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Table properties.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Snapshots</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A snapshot represents the state of a table at a particular point in time.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Manifest Lists and Manifests</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are metadata structures that identify the data and delete files belonging to a snapshot.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Data Files</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These contain the actual records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>They are commonly Parquet files, although Iceberg supports multiple data formats.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.3 Understanding Iceberg Manifests</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a table containing 100 Parquet files.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`When a query runs, the analytical engine needs to identify which files contain relevant information.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reading and listing every file repeatedly can become expensive.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Iceberg maintains structured metadata to help with this.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its conceptual hierarchy is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Iceberg Table | v Table Metadata | v Snapshot | v Manifest List | +---------+---------+ | | v v Manifest 1 Manifest 2 | | +--+--+ +--+--+ | | | | v v v v File File File File 1 2 3 4</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A manifest records information about data files, including their partition values and useful statistics.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The manifest list tracks the manifests associated with a snapshot.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This hierarchical structure supports file selection and avoids treating every stored object as an independent, unrelated resource.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Iceberg™+2</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.4 Iceberg Snapshots</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an Iceberg table containing customer records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At version 1:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customer</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>City</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Rahul</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Pune</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Amit</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Mumbai</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A new record is inserted.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At version 2:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customer</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>City</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Rahul</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Pune</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Amit</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Mumbai</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Priya</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delhi</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A snapshot represents the complete logical table state at each version.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Snapshot 1 | +---- File A +---- File B Snapshot 2 | +---- File A +---- File B +---- File C</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The new snapshot can reuse existing files and add new ones rather than needing to copy the entire dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is one reason snapshot-based table formats can be useful for large analytical datasets.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.5 Iceberg Schema Evolution</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data structures change as businesses evolve.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initially, a company might store:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id customer_name city</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Later, it might need:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id customer_name city email membership_type</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A system that requires rewriting every historical record for every schema modification would create considerable operational overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Iceberg supports changes such as:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Adding columns.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Dropping columns.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Renaming columns.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Widening compatible data types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Evolving nested structures.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It uses schema field identities to help manage these changes safely.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, renaming customer_name to full_name should not cause old column data to be mistakenly interpreted as a completely unrelated new field.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.6 Iceberg Partition Evolution</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning is discussed in more detail later, but Iceberg's partition evolution is important enough to understand here.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the initial table is partitioned by month:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>year=2026/month=01/ year=2026/month=02/</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>As the dataset becomes larger, the organization might want daily partitioning.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Traditional layouts can make this migration complicated.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Iceberg supports multiple partition specifications over the lifetime of a table, allowing new data to use a new partition layout while existing data continues to use its original layout.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Queries can operate across both layouts through the table's metadata.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Iceberg's schema and partition evolution are specifically designed to permit many changes without requiring a full rewrite of historical data.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>GitHub+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.7 Where Apache Iceberg Is Used</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common use cases include:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Large multi-engine analytical environments.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Cloud data lakes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Enterprise analytics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data sharing across different processing engines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Slowly changing analytical datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historical data analysis.</span>
          </div>
        </div>
      </section>

      {/* SECTION 10: 10. Delta Lake Architecture */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Table Formats: Delta Lake</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Delta Lake Architecture
        </h2>
        <div className="space-y-3">
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Delta Lake</span>
            <a href="https://images.openai.com/static-rsc-4/ZjWq_g4mKUF7ESsPvsHzigLNTzSPGKTQBvI_OKX0MLoiBCkHr1-bonUJXlzmRsaqsLhWpZSZWiOBF2MLkARnxjRs299y-Nhn6p1yErZzyWpmre9p_hqnuOIH6XItzSU_hXxx8CI1HkzCCp9CVo93u3tprd_gTSZrOKeYaQKsG5Y?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta Lake</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transactional data lake technology</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.1 Introduction to Delta Lake</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A major limitation of traditional data lakes is that storing Parquet files does not automatically provide database-style transaction management.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine two data engineers working on the same dataset.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Engineer A updates transaction records while Engineer B reads the same table.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without proper transaction management, a reader could encounter incomplete or inconsistent results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Other problems include:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Concurrent writes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Accidental overwriting.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Duplicate records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Inconsistent table metadata.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Difficult historical recovery.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Lack of reliable updates and deletes.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delta Lake solves these problems by adding a transactional management layer on top of data lake storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It provides ACID transactions, schema enforcement, time travel, and support for batch and streaming processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delta Lake commonly stores table data in Parquet files and manages table changes through a transaction log.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta Lake+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.2 Delta Lake Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Delta Lake Transaction Log: How It Works | Conduktor</span>
            <a href="https://images.openai.com/static-rsc-4/Cw5TSkIPpRv-Ee31DpSydCLw476bi52IgdbcjrYapPiREOJhojZps6iNsJSNN7uOxf0y1XD-pGxzydrpa66Wp7NppUnKxFDy4H1HGGl9gBcaGuLHoHEZBHVH3wysxe4l9hvWmFhu4Vhpk3wRDya-vXMDZbJ_RvhTY4U_XYTYlMk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">conduktor.io</span>
            <a href="https://www.conduktor.io/glossary/delta-lake-transaction-log-how-it-works?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Delta table typically contains:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`transactions/ │ ├── _delta_log/ │ ├── 00000000000000000000.json │ ├── 00000000000000000001.json │ ├── 00000000000000000002.json │ └── checkpoint files │ ├── part-00001.parquet ├── part-00002.parquet └── part-00003.parquet`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>There are two major components.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Data Files</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These store the actual records, commonly in Parquet format.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Transaction Log</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The _delta_log directory stores information about committed table changes.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It records actions such as:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Adding data files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Removing data files from the current table snapshot.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Changing table metadata.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Changing the schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Changing table properties.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Recording transaction protocol information.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The transaction log is what allows Delta Lake to understand which physical files currently belong to a logical table.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.3 Understanding the Transaction Log</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a Delta table contains three Parquet files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Version 0 transactions/ file-A.parquet file-B.parquet file-C.parquet</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Now a data engineer adds another batch.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Delta Lake creates another committed table version.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Version 1 transactions/ file-A.parquet file-B.parquet file-C.parquet file-D.parquet</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The new transaction log entry describes the change.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Now suppose the engineer updates some records in file-B.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Depending on the operation and applicable Delta features, the operation may create replacement data files or use a supported deletion-vector mechanism.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Version 2 transactions/ file-A.parquet file-C.parquet file-D.parquet file-E.parquet</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The old file is no longer part of the current snapshot.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, it may still physically exist in object storage until it becomes eligible for cleanup.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This distinction is important:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Removing a file from the current logical table does not necessarily mean deleting that file from physical storage immediately.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The transaction log determines which files constitute the visible table state.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.4 ACID Transactions in Delta Lake</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ACID stands for:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Atomicity.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Consistency.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Isolation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Durability.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Let's understand each property.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Atomicity</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An operation either commits as a complete transaction or does not become visible as a committed transaction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a data pipeline needs to insert 100,000 transaction records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the write fails halfway through, readers should not see a partially committed table update.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Consistency</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system must maintain the applicable data and table constraints before and after a successful transaction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a data pipeline may enforce:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">transaction_id must not be NULL amount must be greater than or equal to zero status must be valid</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Transactions that violate defined constraints should be rejected.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consistency is only as strong as the constraints and validation rules actually configured.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Isolation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Concurrent transactions should not expose inconsistent intermediate table states to readers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reader A starts reading Version 10. Writer B commits Version 11. Reader A continues using its consistent Version 10 snapshot.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A later reader can observe Version 11.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Durability</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Once a transaction has successfully committed, its changes should survive ordinary process or machine failures, subject to the guarantees of the underlying storage system.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.5 Optimistic Concurrency Control</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Delta Lake uses optimistic concurrency control.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The basic idea is that multiple writers can work without locking the entire table for the duration of every operation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The process has three stages:</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">PPT - Transaction Processing Fundamentals: ACID Properties &amp; Anomalies Overview PowerPoint Presentation - ID:8764454</span>
            <a href="https://images.openai.com/static-rsc-4/ixtNXlIXMHFjPJy_19Scr2F2U_5hCdAbICA1nuXSe7cyIkuUEmzZCZUXolFEK4ynhFN4R_GrdBfxLzfJP58s1qk1lROAPewc-ZgCOdbwSsyg2XJpf8VWpVCwc6Lzvir6sEaY2-02EQt1oWZEhGUyG4WYdYBkUwi3M3UurrlvGIk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">slideserve.com</span>
            <a href="https://www.slideserve.com/rjohnson/database-systems-09-transaction-processing-powerpoint-ppt-presentation?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stage 1: Read</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The writer identifies the current table version and determines which files need to be changed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stage 2: Write</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The writer prepares new data files.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stage 3: Validate and Commit</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Before publishing the transaction, the writer checks whether another transaction has made conflicting changes.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>If there is no conflict, the new version is committed.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>If a conflict exists, the operation may need to be retried or handled by the application.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The purpose is to preserve consistent table snapshots during concurrent operations.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta Lake+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.6 Creating and Working with Delta Tables</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Let's understand Delta Lake through practical PySpark examples.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a Delta table
data = [ (101, "Rahul", 5000), (102, "Amit", 2500), (103, "Priya", 3200) ] columns = ["customer_id", "name", "amount"] df = spark.createDataFrame(data, columns) df.write \\ .format("delta") \\ .mode("overwrite") \\ .save("s3://company-lake/silver/customers/")`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Read a Delta table</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customers = ( spark.read .format("delta") .load("s3://company-lake/silver/customers/") ) customers.show()</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update records
UPDATE delta.\`s3://company-lake/silver/customers/\` SET amount = 6000 WHERE customer_id = 101;
Delete records
DELETE FROM delta.\`s3://company-lake/silver/customers/\` WHERE customer_id = 102;
Merge records`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A common operation in data engineering is an upsert.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An upsert means:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update the record if it already exists.
Insert the record if it does not exist.
MERGE INTO delta.\`s3://company-lake/silver/customers/\` AS target USING customer_updates AS source ON target.customer_id = source.customer_id WHEN MATCHED THEN UPDATE SET * WHEN NOT MATCHED THEN INSERT *;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is particularly useful for Change Data Capture (CDC) pipelines, where databases continuously send insert, update, and delete events.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.7 Where Delta Lake Is Useful</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delta Lake is useful for:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reliable batch pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Streaming pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data warehouse workloads built on object storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CDC ingestion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historical analytical datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Upserts and deletes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data quality enforcement.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reproducible machine learning pipelines.</span>
          </div>
        </div>
      </section>

      {/* SECTION 11: 11. Apache Hudi Architecture */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Table Formats: Apache Hudi (CoW vs MoR)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Apache Hudi Architecture
        </h2>
        <div className="space-y-3">
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Hudi: From Zero To One data lake lakehouse platform</span>
            <a href="https://images.openai.com/static-rsc-4/Y8wUi4pSq2ii9aGwDXvq_ebR_xdSiieNnoFq-o8A6NMdqip2icr42vDbHBYDaJMbr40y1XnIkg1KJVHtw_-0Do7NBEPHA2SGMHmeHdJjyyy8AiQeWZElLF5O8XwEr2tLdQlcmqUn11a76B6UviktEtS2_qlejVKHVLkgn7aLLxk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Hudi</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Incremental data processing and updates</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.1 Introduction to Apache Hudi</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Hudi is an open table format designed for managing large datasets on distributed storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its important capabilities include:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Record-level updates.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Record-level deletes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incremental data processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Transaction management.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Change data capture.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historical table versions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Streaming and batch ingestion.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hudi is particularly useful when an organization continuously receives updates to existing records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a food delivery platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its customer data changes regularly:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer ID: C101 Initial record: City = Pune Membership = Basic</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Later:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Updated record: City = Mumbai Membership = Premium</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A simple append-only data lake could retain both records, but downstream systems would need additional logic to identify the current customer record.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Hudi provides table-level mechanisms to manage these changes.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.2 Hudi Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">The Hudi Stack | Apache Hudi</span>
            <a href="https://images.openai.com/static-rsc-4/WpLSwi6AE4xQw1AdKAp8LiLXD1wuaSL7E_oSfct_azU6Qb5mWWcJ0oFjmf_Y3dPk-B-Fta06MEPJDWqwm9Eqig5wxm82B1_X0BPiA1Cf63Vr0VryedxjhNo7Y4eJyb00uRPTBHs9NpT3zUkc3oc6aRZRnfeWZxfeTqTNcz5SLuc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">hudi.apache.org</span>
            <a href="https://hudi.apache.org/docs/next/hudi_stack/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Hudi's architecture includes several important components.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Timeline</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The timeline records actions performed on a Hudi table.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Commits.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Delta commits.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compaction.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Cleaning.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Rollbacks.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Savepoints.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Each action is associated with a logical instant and status.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The main statuses include:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>REQUESTED | v INFLIGHT | v COMPLETED</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This allows Hudi to understand which operations have completed and which table state is valid.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. File Groups</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Hudi organizes records into file groups.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A file group represents the logical identity of a group of related table files.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Base Files</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Base files store the main records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>They are commonly stored in columnar formats such as Parquet.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Log Files</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Log files record changes associated with base files in Merge-on-Read tables.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They allow updates to be written without necessarily rewriting the entire base file immediately.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Indexing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hudi uses indexes to help identify where records belong and improve record-level operations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6. Table Services</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hudi performs maintenance operations such as:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compaction.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Cleaning.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Clustering.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Rollback.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The timeline and its actions are central to Hudi's transaction model.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Hudi+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.3 Copy-on-Write (CoW)</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Copy-on-Write is a table storage strategy that prioritizes read performance.
When records are updated, the affected base files are rewritten to represent the updated data.
Example:
Initial table:
transactions/ file-A.parquet file-B.parquet`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An update modifies a record in file-A.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hudi creates an updated file:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`transactions/ file-A-new.parquet file-B.parquet`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The new table snapshot references the new version of the file.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Advantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Fast and straightforward reads.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>No need to merge log files during snapshot reads.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suitable for analytical workloads that read data much more frequently than they update it.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Updates can require rewriting large files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>More write I/O.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Higher write amplification when frequently modifying large files.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.4 Merge-on-Read (MoR)</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Merge-on-Read is designed to reduce write latency when records change frequently.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of immediately rewriting the complete base file, changes can be written into log files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initial data:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">base-file.parquet C101 | Rahul | Pune C102 | Amit | Mumbai</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">New updates:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>log-file C101 | Rahul | Delhi C103 | Priya | Pune</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The logical table must now represent:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">C101 | Rahul | Delhi C102 | Amit | Mumbai C103 | Priya | Pune</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The system can merge the base and log data during certain queries.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Later, Hudi performs compaction to reconcile the logs into updated base files.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.5 Understanding Hudi Compaction</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compaction combines accumulated log changes with base files.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Before compaction:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>base.parquet log-001 log-002 log-003</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After compaction:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>updated-base.parquet</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This reduces the need to repeatedly merge many log files during reads.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, compaction also uses compute and storage resources, so it needs suitable scheduling.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.6 Hudi Query Types</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Hudi supports multiple ways to access data.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Snapshot Query</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reads the latest committed logical state of the table.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>For Merge-on-Read, this may involve merging base files and log records.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Read-Optimized Query</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For Merge-on-Read tables, reads the latest compacted base files without merging un-compacted logs.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This can provide faster reads but may not include the latest un-compacted changes.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Incremental Query</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Retrieves records changed within a specified commit range.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Previous processed instant: 100 New changes: 101 102 103 Incremental query: Return only the changes from 101 to 103.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is particularly useful when downstream pipelines only need to process newly changed records instead of rereading an entire table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The distinction between Copy-on-Write and Merge-on-Read is an important part of Hudi's architecture.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Hudi+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.7 Hudi Use Cases</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Real-time customer profile updates.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Clickstream event ingestion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Frequently updated operational datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CDC pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incremental ETL.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Large evolving analytical datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data pipelines requiring efficient retrieval of changed records.</span>
          </div>
        </div>
      </section>

      {/* SECTION 12: 12. Open Table Formats */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Triad Comparison: Delta vs Iceberg vs Hudi</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Open Table Formats
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.1 What Are Open Table Formats?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An open table format is a specification and implementation ecosystem that manages how data files represent a logical table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It helps analytical engines understand:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Which files belong to a table.</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>What the latest table version is.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How changes are committed.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How schema changes are managed.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How historical snapshots are represented.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How concurrent writes are handled.</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Three particularly important technologies are:</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">GitHub - delta-io/delta-rs: A native Rust library for Delta Lake, with bindings into Python</span>
            <a href="https://images.openai.com/static-rsc-4/UoY5jaTHpJwjx0ZC-lIzdj3J8l3iOZRzpLuFfcQLyte4X_q__7MgdCit78BfS1HodDooU9mAiQUbI-FZ6AFVu1h2dJc2PJ2hF0jKhOqQfLKXUgfAbKNmPu5htS88wuPQDhc3_SgcFxqzOR5ZmDD_Ki1Guaa6HliOxDXLGiTYCLk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta Lake</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transactional data lake tables</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Create, Merge and Time-Travel with Apache Iceberg using AWS Glue | by Umid Kumar Dey | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/yBmfuc2G3H5zmDOH5zBGAE6QTPdlsaaPpZkigCINKhPgTgI-opAwQdC4LZhXWM7nIpu48vJObkFUG7DwHl9h8Fm8DPwok5LcELixzWdbGsP7ZxTHkYClBn3AiBWlUilJ40rP3WCxV02gh38PuXA-QC0oMNVp3V4T_MEt1HIY17Y?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Iceberg</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Open analytical table format</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Fletum - Revenue Operations Platform | Boost Your Revenue with AI-Powered RevOps</span>
            <a href="https://images.openai.com/static-rsc-4/rFAT2X_5ZF4TPFpgiYWacY3dUGOEz5Unki33pB-GoWBs84bby8qop-J9MikKpvZDDPqL8ZZELVTyujSKjy7xxcadkSNckIjmRBCl45GOStwOv6HgcvSO9O9mi2QZO8cSOIHXcbW7wI4UexUtDbcF_1JkxROxgmFwb8NihfCtT7g?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Hudi</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transactional incremental data processing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.2 Why Are Open Table Formats Important?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a company using multiple technologies:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Lake | +--------+--------+ | | | v v v Spark Flink Trino | | | +--------+--------+ | Shared Tables</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without compatible table management, different engines may interpret or update the underlying files differently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An open table format provides agreed mechanisms for table metadata and transactional changes, making multi-engine interoperability more practical.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, actual feature interoperability depends on the connector and format version supported by each engine.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.3 Delta Lake vs Iceberg vs Hudi</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta Lake</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Iceberg</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Hudi</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Primary purpose</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transactional lakehouse tables</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Large-scale analytical tables</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Incremental data processing and table updates</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Metadata model</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transaction log</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Metadata tree and snapshots</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Timeline and file groups</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common data format</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet, ORC, Avro</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet and other supported formats</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>ACID support</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Time travel</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema evolution</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Partition evolution</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Supported through applicable features</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Major design capability</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Supported capabilities depend on version and operation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Upserts</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Incremental processing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Streaming and change-data capabilities</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Snapshot-based and engine-dependent incremental capabilities</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Core incremental query and change-stream capabilities</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common ecosystem</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Spark, Databricks and connectors</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Spark, Flink, Trino and other engines</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Spark, Flink and other integrations</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.4 When Should You Choose Each?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta Lake</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A strong choice when building a Spark-oriented lakehouse and needing transactional SQL operations, batch/streaming integration, and mature data pipeline capabilities.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Iceberg</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A strong choice when the architecture emphasizes open table specifications, multi-engine interoperability, and evolving large analytical datasets.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Hudi</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A strong choice when frequent record-level updates, incremental processing, and change-oriented data pipelines are especially important.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are architectural guidelines, not absolute limitations. Each ecosystem continues to evolve, and the best selection should be based on workload characteristics, engine compatibility, operational maturity, and governance needs.</p>
        </div>
      </section>

      {/* SECTION 13: 13. ACID Transactions in Data Lakes */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Transactional Mechanics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. ACID Transactions in Data Lakes
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.1 Why Do Data Lakes Need Transactions?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A traditional collection of files does not automatically behave like a transactional database.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an online banking company maintaining a customer transactions table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The table currently contains:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transaction ID | Customer | Amount T101 | Rahul | 5000 T102 | Amit | 3000 T103 | Priya | 4000</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A new pipeline wants to insert 1 million records.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">During the operation:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Some files are written successfully.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Another file fails to upload.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A separate analytics process reads the table.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Another process attempts to update an existing transaction.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the system does not manage these operations properly, different readers might see inconsistent data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Table formats solve this problem by managing transactions and publishing consistent table states.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.2 The Four ACID Properties</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Property</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Meaning</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Lake Example</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Atomicity</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>All-or-nothing transaction</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A failed batch does not become a partially committed table version</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Consistency</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Valid state before and after transactions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Required data constraints remain satisfied</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Isolation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Concurrent operations do not expose inconsistent intermediate states</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Readers see a consistent snapshot</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Durability</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Committed changes persist</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Successfully committed data survives ordinary process failures</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.3 Transaction Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the current table is at Version 5.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A Spark job starts inserting new transactions.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Current Table | v Version 5 | v Prepare new files | v Validate transaction | v Commit succeeds | v Version 6</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the operation fails before committing, the new data files do not become part of the committed snapshot.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is an important difference between directly writing files and using a transactional table format.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.4 Concurrent Transactions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider two data engineers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Engineer A:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`UPDATE customers SET city = 'Pune' WHERE customer_id = 101;
Engineer B:
UPDATE customers SET membership = 'Premium' WHERE customer_id = 101;`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Both operations may read the same initial version.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The transaction system must determine whether they conflict and whether both can be committed safely.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Depending on the table format, engine, and exact operations, transactions may be retried or rejected when conflicts occur.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The engineering team must understand concurrency behavior rather than assume all simultaneous writes are automatically successful.</p>
        </div>
      </section>

      {/* SECTION 14: 14. Snapshot Isolation */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · MVCC & Snapshot Isolation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Snapshot Isolation
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.1 What Is a Snapshot?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A snapshot is a consistent view of a table at a particular point in time.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It represents the logical state of a dataset, including the data files that belong to that version.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an inventory table has the following contents.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Snapshot 1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Product</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Quantity</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Laptop</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>100</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Mobile</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>200</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An inventory update happens.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Snapshot 2</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Product</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Quantity</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Laptop</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>80</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Mobile</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>200</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Another update happens.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Snapshot 3</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Product</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Quantity</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Laptop</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>75</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Mobile</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>180</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Each snapshot provides a different logical view.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.2 How Snapshot Isolation Works</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">The Unseen Symphony: What Really Happens When You Connect to PostgreSQL | by Mohit soni | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/-VumcCIQz5rql54ACI1AG7tNaV1bGqobm-QMWch7Tk376H-bhuwaKeQl7R0VMhxrT-CC_XfhQPZbmx-bMktWSCJmZmxUlTdwBAQTDWbgXs5xopS0UzgBzWH87DaQtQtF7nJGn1tGuguS7s-3FlAsjruZTl4ZrtA135WmE-skNIU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40mohitsoni_/the-unseen-symphony-what-really-happens-when-you-connect-to-postgresql-053cd7c27ba9?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider the following process:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An analyst starts a query when the table is at Snapshot 1.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A data engineer updates the table.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The update commits Snapshot 2.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The analyst's existing query continues using Snapshot 1.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A new query can access Snapshot 2.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This prevents a long-running analytical query from silently switching between different table states while it is executing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Iceberg implements snapshots through its table metadata, while Delta Lake uses its transaction-log versions to reconstruct snapshots.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, Iceberg snapshots include identifiers, timestamps, and references to manifests that describe the table's data files.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Iceberg™+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.3 MVCC: Multi-Version Concurrency Control</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>MVCC stands for Multi-Version Concurrency Control.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It is a database technique that maintains multiple logical versions of data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of immediately replacing every existing version, the system can publish a new version while existing readers continue accessing an earlier consistent version.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Table Version 1 | Reader A starts | v Table Version 2 | Writer commits | v Table Version 3 | New Reader B</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reader A and Reader B can therefore access different valid table versions.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why is this important?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Supports concurrent readers and writers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Helps maintain consistent analytical queries.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Enables historical table access.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Helps implement time travel.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reduces interference between long-running queries and table updates.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Snapshot-based reading and MVCC are related concepts, although the implementation details differ between table formats.</p>
        </div>
      </section>

      {/* SECTION 15: 15. Time Travel and Rollback */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Time Travel & Version Auditing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. Time Travel and Rollback
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.1 What Is Time Travel?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Time travel is the ability to query a previous version of a dataset.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is one of the most useful capabilities of transactional table formats.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a company's customer table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">On November 7:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customer ID | City 101 | Pune 102 | Mumbai</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>On November 8, an incorrect pipeline updates several cities.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customer ID | City 101 | Delhi 102 | Hyderabad</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An analyst notices that the updates were incorrect.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rather than manually reconstructing the previous table, the engineer can query an earlier version, provided its required metadata and data files are still retained.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.2 Delta Lake Time Travel</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Delta Lake supports reading historical table versions.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM customers VERSION AS OF 5;
Alternatively, a timestamp can be used:
SELECT * FROM customers TIMESTAMP AS OF '2026-11-07T10:00:00';`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The query reads the historical table state represented by that version or timestamp.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.3 Delta Lake Table History</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">To inspect table operations:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`DESCRIBE HISTORY customers;
This can provide information about:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Table versions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Commit timestamps.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Operations performed.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Operation parameters.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>User and job-related metadata, when available.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.4 Rollback and Restore</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose Version 8 contains incorrect information, while Version 7 is correct.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An appropriately configured Delta Lake environment can restore the table to a previous version:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`RESTORE TABLE customers TO VERSION AS OF 7;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually, the restore creates a new committed table state corresponding to the earlier version.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is important to distinguish a restore from time travel:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Time travel: Read an earlier version without changing the current version.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Restore: Change the current table state by creating a new operation based on historical data.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.5 Retention and Data Cleanup</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Time travel does not mean historical files remain forever.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For Delta Lake, historical querying depends on the availability of both the transaction log metadata and the data files referenced by the requested snapshot.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`VACUUM can remove unreferenced data files after the configured retention period.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Therefore, an organization must establish retention policies before running cleanup operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The open-source Delta Lake documentation describes default log-history and deleted-file retention settings, but these are configurable.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta Lake+2</span>
          </h3>
        </div>
      </section>

      {/* SECTION 16: 16. Schema Evolution */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Schema Evolution & Type Safety</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Schema Evolution
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.1 What Is Schema Evolution?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema evolution means changing the structure of a dataset over time without unnecessarily rebuilding the entire dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a customer table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initial schema:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id name email</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Later, the business wants to store:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id name email phone_number membership_type</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The data structure has changed.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is called schema evolution.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.2 Common Schema Evolution Operations</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Adding a Column</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initial:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id name email</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Updated:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id name email phone_number</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Dropping a Column</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initial:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id name email age</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Updated:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id name email</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Renaming a Column</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initial:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_name</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Updated:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>full_name</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Changing a Data Type</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initial:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">amount: INTEGER</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Updated:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">amount: DECIMAL(18,2)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A type change must be compatible with the table format's evolution rules and the consuming engines.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.3 Schema Enforcement vs Schema Evolution</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These two concepts are related but different.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema Enforcement</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Checks whether incoming data follows the defined schema.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Expected: amount = DECIMAL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incoming:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>amount = "not-a-number"</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The system can reject or quarantine the incompatible input.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema Evolution</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Allows the schema itself to change when the business requires it.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Existing: customer_id name New: customer_id name email</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A well-designed system needs both capabilities.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Without enforcement, bad data can enter the table.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Without controlled evolution, legitimate business changes become difficult to implement.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.4 Schema Evolution in Apache Iceberg</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Iceberg supports several schema changes, including adding, dropping, renaming fields, and widening compatible types.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It uses field identifiers to maintain the relationship between logical columns and stored data, helping prevent errors when fields are renamed or rearranged.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Field ID: 1 Column: customer_id Field ID: 2 Column: customer_name Field ID: 3 Column: city</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose customer_name is renamed to full_name.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The field identity allows Iceberg to recognize that this is the same logical field rather than an unrelated new column.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>GitHub+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.5 Real-World Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an online shopping company introduces a new feature called loyalty points.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Before:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id name email total_orders</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id name email total_orders loyalty_points membership_tier</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of creating an entirely new historical dataset, the engineering team can evolve the schema and ensure that downstream applications understand the new fields.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>However, schema evolution should be managed carefully.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Breaking changes, incompatible type conversions, and renamed fields can affect dashboards, reports, machine learning models, and other downstream consumers.</p>
        </div>
      </section>

      {/* SECTION 17: 17. Partition Evolution and Partitioning Strategy */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Partition Pruning & Evolution</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Partition Evolution and Partitioning Strategy
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.1 What Is Partitioning?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning divides a large logical dataset into smaller subsets based on selected columns or derived values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a transaction table containing 10 billion records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the company frequently queries transactions from November 2026, scanning the complete dataset is unnecessary.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Partitioning allows the system to organize and select relevant subsets of data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`transactions/ year=2025/ month=11/ year=2026/ month=01/ year=2026/ month=02/ year=2026/ month=11/`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A query for November 2026 can potentially skip files belonging to other months.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is called partition pruning.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.2 Partitioning by Date</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the table contains:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>transaction_id customer_id amount transaction_date</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A partitioning strategy can be based on year and month.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE transactions USING DELTA PARTITIONED BY (year, month) AS SELECT transaction_id, customer_id, amount, YEAR(transaction_date) AS year, MONTH(transaction_date) AS month FROM transaction_source;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a simplified illustrative example; exact partitioning syntax and best practices vary with the table format and engine.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.3 How Partition Pruning Works</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the query is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT SUM(amount) FROM transactions WHERE year = 2026 AND month = 11;`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Without useful pruning, an engine may need to inspect files from many years and months.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With effective partition pruning:
transactions/ | +-- 2025 [SKIP] | +-- 2026 | +-- January [SKIP] +-- February [SKIP] +-- November [READ]`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The engine reads only relevant partitions and files, assuming metadata and query predicates permit pruning.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.4 Problems with Poor Partitioning</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Too Many Partitions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning by customer ID in a huge system may create an enormous number of small partitions.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This can increase metadata overhead and complicate maintenance.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Too Few Partitions</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A very large, unpartitioned dataset may force queries to scan more files than necessary.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Skew</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose 90% of transaction records belong to one customer.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Partitioning by customer ID may result in an uneven distribution.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Some partitions become much larger than others, creating processing bottlenecks.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.5 What Is Partition Evolution?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition evolution means changing a table's partition specification as data volume and query patterns change.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initially:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Partition by: year month
Later, the company needs more granular organization:
Partition by: days(transaction_date)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a traditional rigid partition layout, moving to a new structure may require expensive migration and rewriting.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Iceberg supports partition evolution through versioned partition specifications.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">New data can follow the new layout while existing files retain their previous partition specification. Queries can still operate over the logical table.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>GitHub+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.6 Best Practices</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Choose partition columns based on query patterns.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avoid extremely high-cardinality partitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avoid creating thousands of tiny files.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider time-based partitioning for historical event data.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Monitor partition size distribution.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use metadata and file statistics for additional pruning.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Change partitioning when actual workloads justify it.</span>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            Partitioning is not automatically beneficial for every table. Good file sizing, statistics, and data layout can matter more than adding more partitions.
          </div>
        </div>
      </section>

      {/* SECTION 18: 18. Metadata Catalogs */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Catalogs: AWS Glue & Unity Catalog</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Metadata Catalogs
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.1 What Is Metadata?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Metadata means data about data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a data lake contains thousands of files and tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data engineer needs to know:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What datasets exist?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is each table called?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Which columns does it contain?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What are the data types?</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Where is the data stored?`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Which partitions are available?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Who owns the dataset?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Who is allowed to access it?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Metadata provides this information.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dataset: customer_transactions Location: s3://company-lake/silver/transactions/ Format: Parquet Schema: transaction_id: STRING customer_id: STRING amount: DECIMAL transaction_date: DATE Partition: transaction_date Owner: Data Engineering Team</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without metadata management, discovering and understanding datasets becomes increasingly difficult as a data lake grows.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.2 What Is a Metadata Catalog?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A metadata catalog is a centralized repository that stores information about available datasets and tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It helps analytical systems discover and access data without requiring users to manually inspect every storage location.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Keep Calm and Duck On - Your Lakehouse Just Got Smarter - SAS Support Communities</span>
            <a href="https://images.openai.com/static-rsc-4/RfxxKAokOCXSJ_X7rVYXfGoAMqtk7c25nUEevWCkYVwfZ3ZnlGtJbJZzoXm0SfoilffgK3LlI_kkDiJRSqxrRx-kE9ncoEAFnaBOoVI7_NVczX5SoQgonBDGVRAnLjInJpe2RMCcrtopxZTTQUFO0EP9D9iHANmN8EGd8tJnBNQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">communities.sas.com</span>
            <a href="https://communities.sas.com/t5/SAS-Communities-Library/Keep-Calm-and-Duck-On-Your-Lakehouse-Just-Got-Smarter/ta-p/974566?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Think of it as a library catalog.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A library contains thousands of books, but readers do not need to inspect every book to find one.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They search a catalog to discover:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Book title.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Author.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Category.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Location.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Availability.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A data catalog does something similar for datasets.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.3 AWS Glue Data Catalog</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Top Data Catalog Tools In 2026 (Quick Reference Guide)</span>
            <a href="https://images.openai.com/static-rsc-4/jRrkcBF6MzfVtUNa1QF-2AyTBRrI1FJ9Bw0kKeJV24_z_p-JlCaQOiN5LCGtM7DOGF5yRsd16C3XNvpq7ykcVSGRQt4UXt74XN8E5-Ihfars2f3q8SgGMgJbtmio6DTMudOqjCYFZGVd2w8_QVq2IddD_-nfzfoIamZRSW6USxc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AWS Glue Data Catalog</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Metadata management service</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The AWS Glue Data Catalog is a centralized metadata repository used to organize and discover data assets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It stores information such as:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Database definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Table names.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Column names.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Storage locations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Partition information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Table properties.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A simplified structure is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AWS Glue Data Catalog | v Database | +---- Table 1 | | | +---- Schema | +---- Location | +---- Partitions | +---- Table 2 | +---- Table 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database: ecommerce Tables: customers transactions products payments</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The actual records can remain in Amazon S3. The catalog provides information that allows query engines to locate and understand the datasets.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>AWS Glue also supports crawlers that discover datasets and extract their metadata.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AWS Glue+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.4 How Does a Crawler Work?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A crawler automatically scans supported data sources and identifies information such as schema and partition structures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amazon S3 | v AWS Glue Crawler | v Inspect files | v Identify schema | v Create/update table metadata | v AWS Glue Data Catalog</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an S3 bucket contains:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`s3://company-lake/silver/customers/ part-001.parquet part-002.parquet part-003.parquet
The crawler can inspect the supported files and identify fields such as:`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id name email city</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can use this information to populate a catalog table, subject to its configuration and schema inference behavior.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.5 Other Metadata Catalog Technologies</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Technology</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Purpose</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AWS Glue Data Catalog</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Managed AWS metadata catalog</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Hive Metastore</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Metadata service used in Hadoop ecosystems</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Unity Catalog</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Databricks governance and catalog management</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Iceberg REST Catalog</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Standardized catalog integration for Iceberg</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Project Nessie</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Versioned catalog and data management</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.6 Data Catalog vs Table Metadata</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These are related but different.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Catalog</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Helps locate and discover tables.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>catalog.database.transactions</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It tells an application where the table can be found.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Table Metadata</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Describes the internal state of a particular transactional table.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an Iceberg table uses metadata files and snapshots to track the files belonging to a table.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Similarly, Delta Lake uses its transaction log to maintain table state.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The distinction is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">External Catalog | v Locate Table | v Table Metadata | v Identify Valid Data Files | v Read Parquet Records</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A catalog is not a replacement for Delta's transaction log or Iceberg's table metadata.</span>
          </div>
        </div>
      </section>

      {/* SECTION 19: 19. Small File Problems and Compaction */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Compaction & File Sizing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Small File Problems and Compaction
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.1 What Is the Small File Problem?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The small file problem occurs when a data lake contains a very large number of tiny files instead of a manageable number of appropriately sized files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a streaming pipeline that creates a new Parquet file every few seconds.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>After one day, it may have generated thousands of files.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`transactions/ part-00001.parquet 500 KB part-00002.parquet 300 KB part-00003.parquet 800 KB part-00004.parquet 200 KB part-00005.parquet 600 KB ... part-10000.parquet 400 KB`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Instead of a few appropriately sized files, the system has thousands of tiny files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This causes several problems.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.2 Why Are Small Files a Problem?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Metadata Overhead</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The analytical engine must discover and manage many individual files.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Query Planning Overhead</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The engine needs to identify relevant files before reading actual records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A large file count increases this work.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Excessive Storage Requests</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Object storage operations have request overhead. Reading thousands of tiny objects can be less efficient than reading a smaller number of suitable objects.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Poor Parallel Processing Efficiency</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A distributed engine may create an excessive number of very small tasks.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The time spent scheduling and managing tasks can become significant compared with the amount of actual data processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Increased Metadata Management Complexity</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Table formats need to track the files belonging to each table snapshot.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A large number of files can increase metadata processing and maintenance work.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.3 What Is Compaction?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compaction is the process of combining many small data files into fewer, larger data files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Before compaction:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">part-001.parquet 1 MB part-002.parquet 2 MB part-003.parquet 1 MB part-004.parquet 3 MB part-005.parquet 2 MB part-006.parquet 1 MB</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After compaction:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>part-001-large.parquet 10 MB</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The data has been reorganized, but the logical table contents remain the same.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Work with Delta Lake tables in Microsoft Fabric | by Reyan Ahmad | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/AvAvsU6W7cahwVK5W-nAGheoEtLgpRupQIjl-o9VyYFUPqLTmloJ33H8k4QArfblaN4TqxwIBujAhlqRLFIYiWuACNoW4HNo0r2XM_NQ4jMZGZMVAg1A-UkT60GSzJSTcU2Ua6zFXkT1BocOLZXxUojPFrN4BjNjJQZRFLPBsqc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40riyanwarr/work-with-delta-lake-tables-in-microsoft-fabric-1926f4e23bde?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.4 How Compaction Works</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The general process is:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Identify small files belonging to the table.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Select files that can be safely reorganized together.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Read their records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Combine and rewrite them into larger files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Commit the updated table metadata.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Retire obsolete files according to retention and cleanup policies.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.5 Compaction in Different Table Formats</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta Lake</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delta Lake supports optimization strategies for managing file layout. Databricks environments commonly provide:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`OPTIMIZE transactions;`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This reorganizes table files to improve query efficiency.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Iceberg</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Iceberg provides table maintenance operations, including rewriting data files.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, supported environments can use the rewrite_data_files maintenance procedure.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Hudi</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Hudi uses compaction as a central table service, particularly for Merge-on-Read tables.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It merges accumulated log files into updated base files.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta Lake+2</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.6 Choosing File Sizes</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>There is no universally correct file size.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The appropriate target depends on:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Query workload.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>File format.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data compression.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Cloud storage system.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Number of concurrent queries.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Processing engine.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Available compute resources.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a company may experiment with Parquet files around 128 MB to 512 MB for analytical workloads.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These are starting points, not mandatory rules.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A production data engineer should benchmark actual performance.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.7 Compaction vs Partitioning</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Do not confuse these concepts.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Partitioning</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compaction</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Divides data into logical subsets</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Combines existing small files</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Helps eliminate irrelevant data during queries</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Helps reduce file-management overhead</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Affects data organization</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reorganizes physical data files</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Partition by month</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Combine 500 small files</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Both are important for optimizing large data lakes.</span>
          </div>
        </div>
      </section>

      {/* SECTION 20: 20. Lakehouse Architecture */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">Part 6 · Unified Lakehouse Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Lakehouse Architecture
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.1 Introduction to Lakehouse</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">What Is Databricks? Architecture, Use Cases &amp; How It Works</span>
            <a href="https://images.openai.com/static-rsc-4/huo0r6bAhEzK29D2-5sI-OwWyAabgZ8SHZgwW9OcNH4RmT_hWnkEaPcDf7B4ueJXhZnutyWvkqVpevLPKn_LDVbyWoiIXcSIH_ess3xcnjdA5_yUC_TpLhOxtHttNSBcu5Ep4crlA9cjI9Ale9SJ2QZJg6idm68xVqfqt8ZJFbE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">owox.com</span>
            <a href="https://www.owox.com/blog/articles/what-is-databricks?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Lakehouse combines important capabilities traditionally associated with data lakes and data warehouses.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A traditional data lake provides flexible and scalable storage for diverse data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A traditional data warehouse provides structured data management and analytical querying.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A lakehouse aims to provide both capabilities through a unified architecture.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It combines:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Flexible object storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Transactional table formats.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Metadata management.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>SQL analytical processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data quality management.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Governance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Batch and streaming pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Machine learning support.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.2 Why Was the Lakehouse Architecture Developed?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a large retail organization.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historically, it might maintain two separate systems.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">System 1: Data Lake</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amazon S3 | v Raw Data | v Apache Spark | v Machine Learning</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">System 2: Data Warehouse</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Operational Databases | v ETL Pipeline | v Data Warehouse | v Business Reports</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This introduces challenges:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data duplication.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Separate pipeline maintenance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Different data versions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Extra storage expenses.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Synchronization difficulties.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Multiple security and governance systems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A lakehouse attempts to reduce this separation.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.3 Lakehouse Architecture Components</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Lakehouse Trifecta — Delta Lake, Apache Iceberg &amp; Apache Hudi | by Sandip Roy | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/PxHwutbBSMZ8MkmJm7x_8D1IVHXN4kGaRWi_LUEN8Vd-NJdJgaz2iLD5GgC5n5Hsd5Uw9brBiVjC0TQVbmIbfTjA247z-J2AeU_k14VsFicQcj9urBto80fKuPF_xdcaTO7nryc43AjF3nOhWuUrUhyoOddeWMU3cKV_9-GJjGc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">roysandip.medium.com</span>
            <a href="https://roysandip.medium.com/lakehouse-trifecta-delta-lake-apache-iceberg-apache-hudi-747e99c467b?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Layer 1: Data Sources</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Information comes from:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Operational databases.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>APIs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Applications.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>IoT devices.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Streaming platforms.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>External datasets.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Layer 2: Data Ingestion</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data is collected through:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Batch ingestion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Streaming ingestion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Change Data Capture.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>API integrations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>File ingestion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Tools may include Apache Kafka, Airflow, Spark, and AWS Glue.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Layer 3: Storage</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The underlying storage contains data files.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Amazon S3.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Azure Data Lake Storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Google Cloud Storage.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Layer 4: Open Table Format</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This layer manages the logical table.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Delta Lake.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Iceberg.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Hudi.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It provides transactional operations, snapshots, schema management, and other table-level capabilities.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Layer 5: Processing Engines</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These perform transformations and analytical workloads.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Spark.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Flink.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Trino.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Databricks.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Layer 6: Metadata and Governance</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This layer manages:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data catalogs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Permissions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data lineage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data quality.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Audit logs.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Layer 7: Consumption</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The final datasets are used by:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>SQL analysts.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Business intelligence applications.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Executives.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data scientists.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Machine learning engineers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Operational applications.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.4 Complete E-commerce Lakehouse Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce company operating across India.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Its website and applications generate millions of events and transactions.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A lakehouse architecture could look like:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DATA SOURCES | +------------+------------+ | | | Orders Users Payments | | | +------------+------------+ | v DATA INGESTION | Kafka / Airflow | v AMAZON S3 STORAGE | +---------+---------+ | | | v v v Bronze Bronze Bronze Orders Users Payments | | | +---------+---------+ | v SPARK PROCESSING | v SILVER Cleaned and validated | v GOLD TABLES +---------+---------+ | | | v v v Revenue Customer Product Analysis Analytics Analytics | | | +---------+---------+ | BI / SQL / ML</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The tables can use Delta Lake or Iceberg, while the organization manages their metadata through a compatible catalog.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.5 Benefits of Lakehouse Architecture</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Unified storage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The organization can maintain raw, refined, and analytical information on a common storage foundation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transactional reliability</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Open table formats provide transaction management over object storage.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Batch and streaming support</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The same logical datasets can support historical batch processing and ongoing data ingestion.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Machine learning integration</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data scientists can work with diverse historical datasets without needing to move every dataset into a separate storage system.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Better governance</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A common metadata and permissions architecture can make data discovery and access management easier.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reduced duplication</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The architecture can reduce the need for unnecessary copies between separate analytical systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.6 Lakehouse vs Data Lake vs Data Warehouse</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Lake</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Warehouse</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lakehouse</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Object storage commonly</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Managed analytical storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Object storage commonly</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Raw data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Excellent support</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Generally not primary focus</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Excellent support</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transactions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Not inherent to raw files</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Built-in database transactions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transactional table formats</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>SQL analytics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Requires suitable engines</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Core capability</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Core capability</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema management</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Flexible</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Structured</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Structured but evolvable</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Machine learning</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Excellent support</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Depends on platform</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Strong support</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data governance</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Must be engineered</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Platform capabilities</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Unified governance approach</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Typical formats</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CSV, JSON, Parquet, etc.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Platform-managed formats</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta, Iceberg, Hudi</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A lakehouse does not automatically replace every data warehouse. A specialized warehouse may still be the best choice for particular performance, concurrency, workload, or operational requirements.</p>
        </div>
      </section>

      {/* SECTION 21: 21. Data Lake Governance */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Part 6 · Governance, PII Masking & Lineage</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Data Lake Governance
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.1 What Is Data Governance?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data governance is the set of policies, processes, and technologies used to manage data responsibly throughout its lifecycle.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data lake can contain:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer names.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Email addresses.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Phone numbers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Bank information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Location data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Employee information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Business-sensitive records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Without governance, the data lake can become a security and compliance risk.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.2 Important Data Governance Components</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Data Access Control</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Defines who can read, write, modify, or delete information.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Role</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Permissions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Engineer</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Read and write approved engineering datasets</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Analyst</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Read approved Silver and Gold datasets</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Scientist</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Access approved training datasets</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Administrator</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Manage authorized resources and permissions</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A good system follows the principle of least privilege.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Users should receive only the permissions necessary for their responsibilities.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Data Encryption</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Encryption protects information when stored and transmitted.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two important categories are:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Encryption at rest.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Encryption in transit.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, S3 data can use server-side encryption, while TLS protects data transmitted over supported network connections.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Personally Identifiable Information (PII)</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>PII is information that can identify an individual directly or indirectly.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Full name.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Email address.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Phone number.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Government identification numbers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Certain combinations of location and personal information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Organizations should identify and classify sensitive fields.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Data Masking</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data masking hides sensitive values from users who do not require direct access.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Original data:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Name: Rahul Email: rahul@example.com Phone: 9876543210</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Masked representation:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Name: Rahul Email: r****@example.com Phone: ******3210</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Masking rules must be implemented consistently across the storage and consumption layers.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Data Lineage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data lineage describes where data originates and how it changes through the processing pipeline.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MySQL Orders | v Bronze Orders | v Silver Transactions | v Gold Daily Revenue | v Power BI Dashboard</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the reported revenue suddenly becomes incorrect.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With lineage, engineers can investigate the source table, transformations, and downstream reports.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6. Data Quality</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Governance also defines the quality standards that datasets must meet.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">transaction_id cannot be NULL amount must be &gt;= 0 customer_id must reference a valid customer transaction_date must be valid Duplicate transaction IDs are rejected</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7. Data Retention and Lifecycle Management</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Organizations should define:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How long raw records are retained.</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`When historical data is archived.
When information must be deleted.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Which records require long-term retention.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How table snapshots and obsolete files are cleaned up.</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data retention and time-travel retention must be coordinated.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.3 AWS Data Lake Governance Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In an AWS-based data lake, an organization can combine:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Technology</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Responsibility</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Amazon S3</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Store data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AWS Glue Data Catalog</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Maintain metadata</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AWS Lake Formation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Manage fine-grained data permissions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AWS IAM</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Manage identities and service permissions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AWS KMS</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Manage encryption keys</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CloudTrail</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Audit supported AWS API activity</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AWS Lake Formation integrates with the Glue Data Catalog to help manage fine-grained access to catalog resources and underlying registered S3 data locations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AWS Glue+2</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.4 Governance Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Data and AI governance for the data lakehouse - Azure Databricks | Azure Docs</span>
            <a href="https://images.openai.com/static-rsc-4/XNqLqidqyO3BKpvyBG7tjEzkbeQe0eaAozbR75h5G296lpJFknDF0Fi3baEY6HJScQ3EVP4bNJwDO-jwLhmuHe66HjGfoNwyD3tH8b1fNpnKqyF_zZS3g6HSofTzYmn5RNx4gvUR-hd8tLEBM9ijninsuAopaK9N3iEwFtFffuQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">docs.azure.cn</span>
            <a href="https://docs.azure.cn/en-us/databricks/lakehouse-architecture/data-governance/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The important principle is that security and governance should apply across the entire data lifecycle, not just to the final Gold layer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raw records may contain the most sensitive source information, so they often require stricter controls than business-ready aggregated datasets.</p>
        </div>
      </section>

      {/* SECTION 22: 22. Complete Practical Project — Build an E-commerce Lakehouse */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Part 7 · Capstone Lakehouse Project</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Complete Practical Project — Build an E-commerce Lakehouse
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now let's combine everything learned in this module into a practical data engineering project.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Designing a Databricks Lakehouse Pipeline for Scalability and Performance | MANJU REDDY posted on the topic | LinkedIn</span>
            <a href="https://images.openai.com/static-rsc-4/pj8ntHjianbCaR0wgbBvXT-pEruTc9Z6J7tvwh0lpk3YyTBJvXE534Rk23WlTQXdRottUGfqThXa0N0s_B2hMgDrgIekaBKVF8AoQeDNjz6iUlkwLGu0rkrwzhNp3ETPae7KEhv3ybzpzrizlkI-qV8aSvzxIM-Hm2_hHmJTe-c?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">linkedin.com</span>
            <a href="https://www.linkedin.com/posts/manjureddy15_databricks-deltalake-apachespark-activity-7355629237422157825-dP9x?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Project: E-commerce Data Lakehouse</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Build a system that collects customer activity, transactions, product information, and payments, processes them through a Medallion Architecture, and produces analytical datasets.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.1 Technology Stack</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Component</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Technology</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Programming</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Python</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>SQL</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>SQL</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Amazon S3</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Processing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Spark</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Table Format</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta Lake</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Streaming</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Kafka</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Workflow Orchestration</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Airflow</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Metadata</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AWS Glue Data Catalog</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analytics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Power BI</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Version Control</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Git and GitHub</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.2 Data Sources</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create four datasets.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customers</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id,name,city,email 101,Rahul,Pune,rahul@example.com 102,Amit,Mumbai,amit@example.com 103,Priya,Delhi,priya@example.com</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Products</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">product_id,product_name,category,price P101,Laptop,Electronics,55000 P102,Mobile,Electronics,25000 P103,Headphones,Accessories,2500</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Orders</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order_id,customer_id,product_id,quantity,order_date O101,101,P101,1,2026-11-07 O102,102,P102,2,2026-11-08 O103,103,P103,3,2026-11-09</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Payments</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">payment_id,order_id,amount,status PAY101,O101,55000,SUCCESS PAY102,O102,50000,SUCCESS PAY103,O103,7500,PENDING</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.3 Design the Storage Architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Organize the datasets:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ecommerce-lakehouse/ │ ├── bronze/ │ ├── customers/ │ ├── products/ │ ├── orders/ │ └── payments/ │ ├── silver/ │ ├── customers_clean/ │ ├── products_clean/ │ ├── orders_clean/ │ └── payments_clean/ │ ├── gold/ │ ├── daily_revenue/ │ ├── customer_spending/ │ ├── product_performance/ │ └── payment_analysis/ │ └── archive/`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.4 Implement the Bronze Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Ingest all four datasets.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Requirements:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Preserve original records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Store ingestion timestamps.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Record source information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avoid unnecessary transformations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Support repeated ingestion safely.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.5 Implement the Silver Layer</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use Apache Spark to:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Remove duplicate customer records according to the chosen business key.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validate product prices.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Convert order quantities into integer types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validate customer IDs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validate payment statuses.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Handle invalid records separately.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Standardize timestamps and dates.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Join orders with valid customer and product information.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a clean analytical transaction table.
Example:`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">silver.ecommerce_transactions order_id customer_id customer_name city product_id product_name category quantity unit_price total_amount payment_status order_date</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.6 Implement the Gold Layer</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create business-oriented datasets.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Daily Revenue</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT order_date, SUM(total_amount) AS total_revenue, COUNT(DISTINCT order_id) AS total_orders FROM ecommerce_transactions WHERE payment_status = 'SUCCESS' GROUP BY order_date;`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Product Performance</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT product_name, category, SUM(quantity) AS units_sold, SUM(total_amount) AS revenue FROM ecommerce_transactions WHERE payment_status = 'SUCCESS' GROUP BY product_name, category;`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customer Spending</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, customer_name, SUM(total_amount) AS total_spending, COUNT(DISTINCT order_id) AS total_orders FROM ecommerce_transactions WHERE payment_status = 'SUCCESS' GROUP BY customer_id, customer_name;`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.7 Add Delta Lake Capabilities</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create transactional Delta tables.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Perform incremental ingestion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use MERGE for updated customer and order records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Test concurrent reading and writing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Inspect table history.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Query historical versions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Test schema evolution.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Perform file compaction.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.8 Add Governance</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Role-based permissions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Sensitive customer-field protection.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data quality rules.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Dataset ownership.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data lineage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Retention policies.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Audit logging.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.9 Expected Final Output</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">E-Commerce Analytics</span>
            <a href="https://images.openai.com/static-rsc-4/lFE2ToGT-purydORmTsnI26la2NCnaJG-ptvNVYZe8FIKqLULkkZUxWjXMvevF6CScKV8IwKLWp46mx0IGv0B3YIE_PRFQqf4dhhF6A9gBWqQWl-FC6gFRQhb3gDFlCTTEZtfVJqLiQaKE0-D_GOrAareXRhd7pFl6nwBVS9rhU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">zoomcharts.com</span>
            <a href="https://zoomcharts.com/en/microsoft-power-bi-custom-visuals/dashboard-and-report-examples/view/e-commerce-analytics-6?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The final system should deliver:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Daily sales dashboard.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Product performance dashboard.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer spending analysis.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment failure analysis.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historical transaction reporting.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reprocessable raw datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reliable transactional tables.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This project integrates the major concepts from the module into a realistic data engineering workflow.</p>
        </div>
      </section>

      {/* SECTION 23: 23. Important Industry Concepts to Remember */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Part 8 · Architectural Synthesis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Important Industry Concepts to Remember
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Here is how the technologies discussed in this module fit together.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Concept</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What it solves</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Lake</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stores diverse raw and processed information</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Amazon S3</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Distributed Storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Distributes data over multiple machines</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>HDFS</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Object Storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stores objects at large scale</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Amazon S3</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Medallion Architecture</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Organizes data by quality</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Bronze, Silver, Gold</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>File Format</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Defines physical data representation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Table Format</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Manages files as reliable tables</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta, Iceberg, Hudi</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>ACID</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Maintains transactional reliability</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta transactions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Snapshot Isolation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Provides consistent table views</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Iceberg snapshots</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Time Travel</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reads historical versions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delta time travel</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema Evolution</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Manages structural changes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Adding a column</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Partition Evolution</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Changes table partition layouts</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Monthly to daily</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Metadata Catalog</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Discovers and locates datasets</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AWS Glue</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compaction</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reduces small-file overhead</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet file rewriting</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lakehouse</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Combines lake storage with warehouse-style management</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Databricks Lakehouse</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Governance</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Protects and manages organizational data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AWS Lake Formation</span>
          </h3>
        </div>
      </section>

      {/* SECTION 24: 24. Common Mistakes Data Engineers Should Avoid */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500">Part 8 · Production Anti-Patterns</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Common Mistakes Data Engineers Should Avoid
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Treating a data lake as an ordinary folder without metadata management.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Confusing Parquet with Delta Lake or Iceberg.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Overwriting raw records instead of preserving source information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Applying business transformations before validating source data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Creating too many partitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Ignoring small-file problems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Assuming time travel works after historical files have been deleted.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Allowing unrestricted access to sensitive raw datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Building pipelines without handling duplicate and late-arriving records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Assuming every lakehouse must use exactly Bronze, Silver, and Gold.</span>
          </div>
        </div>
      </section>

      {/* SECTION 25: 25. Module Assessment — Check Your Understanding */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500">Review · Knowledge Verification</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          25. Module Assessment — Check Your Understanding
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 8 Knowledge Test</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10 questions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>0 of 10 answered</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. What is the main purpose of a data lake?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>To store only relational tables</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>To store diverse data in flexible formats</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>To replace all application databases</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>To store only machine learning models</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Which format is columnar?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CSV</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Parquet</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Avro</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. What does the Bronze layer contain?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Business dashboards</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Highly aggregated data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Raw ingested data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Only machine learning predictions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. What does the Delta transaction log manage?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>User passwords</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Committed table changes and snapshots</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Only CSV schemas</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Network routing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Which Hudi table type uses base and log files?</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Copy-on-Write
Merge-on-Read`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Read-only</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Append-only</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6. What is Iceberg partition evolution?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Deleting every old partition</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Changing partition specifications over time</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Changing the cloud provider</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Converting Parquet to CSV</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7. What is the purpose of compaction?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Increase duplicate records</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Combine small files into larger files</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Delete the table catalog`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Encrypt all records</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8. What does a metadata catalog provide?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Physical GPU memory</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Dataset names, schemas and locations</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Only raw records</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Network security certificates</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9. What is time travel?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Real-time streaming ingestion</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reading historical table versions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Changing the system clock</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Partitioning by time</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10. What does a lakehouse combine?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Only HDFS and MapReduce</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Only SQL and Python</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flexible lake storage and warehouse-style data management</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Only CSV and JSON</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Submit answers</span>
          </h3>
        </div>
      </section>

      {/* SECTION 26: 26. Recommended Learning Resources */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500">Review · Official Standards & Docs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          26. Recommended Learning Resources
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These are useful official technical resources for studying the implementation details.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Apache Iceberg Documentation — [Official documentation](https://iceberg.apache.org/docs/latest/?utm_source=chatgpt.com) for snapshots, metadata, schemas, partitioning and maintenance.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Delta Lake Documentation — [Official documentation](https://docs.delta.io/?utm_source=chatgpt.com) for ACID transactions, time travel, table operations and concurrency.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Apache Hudi Documentation — [Official documentation](https://hudi.apache.org/docs/overview/?utm_source=chatgpt.com) for table architecture, incremental processing and compaction.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Amazon S3 Documentation — [Official documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/?utm_source=chatgpt.com) for object storage, buckets, versioning and performance.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Databricks Lakehouse Documentation — [Official documentation](https://docs.databricks.com/?utm_source=chatgpt.com) for Medallion Architecture and lakehouse engineering.</span>
          </h3>
        </div>
      </section>

      {/* SECTION 27: 27. Final Understanding: The Lakehouse Paradigm */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-stone-500">Roadmap · Curriculum Alignment</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          27. Final Understanding: The Lakehouse Paradigm
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The most important thing to understand about this module is how all these technologies fit together.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">The Rise of The Streaming Data Lakehouse – bytewax</span>
            <a href="https://images.openai.com/static-rsc-4/6foPBXFpwr0acoa_aADOLWghqmXUVjydrO1KtbtG19hFdTZUGwfH8PLQc7nnZD4tZQP181yCEWGGDE6OtdMX3vLPWWgkyMC8zhv27OB8_7QoCcfcZXLkewE8LXDV0JSfNqy0wShDjSZquztFtuu9COat9xPfDlzejtbcEnqs-JE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">bytewax.io</span>
            <a href="https://bytewax.io/blog/the-rise-of-the-streaming-data-lakehouse/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider this complete data flow:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DATA SOURCES | v DATA INGESTION Kafka / Airflow | v OBJECT STORAGE Amazon S3 / ADLS | v BRONZE LAYER Raw Data | v APACHE SPARK Data Processing | v SILVER LAYER Cleaned and Validated | v GOLD LAYER Business Analytics | v BI / SQL / MACHINE LEARNING</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Across these layers:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parquet defines how analytical records are physically stored.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Delta Lake, Iceberg, and Hudi provide transactional table management.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>ACID transactions protect table operations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snapshots provide consistent historical states.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema evolution manages changing data structures.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Partition evolution adapts table layouts.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Metadata catalogs make datasets discoverable.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compaction maintains efficient file layouts.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Governance protects and manages organizational information.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The central takeaway: A data lake provides scalable and flexible storage, while a lakehouse adds reliable table management, analytical processing, and governance on top of that storage foundation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is the foundation you need before moving to advanced data engineering topics such as distributed ETL, streaming pipelines, CDC, orchestration, and production-scale lakehouse optimization.</p>
        </div>
      </section>

    </div>
  );
}
