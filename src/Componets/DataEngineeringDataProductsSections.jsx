// projectx/src/Componets/DataEngineeringDataProductsSections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, Activity, Zap, ShieldAlert, CheckCircle, RefreshCw, Layers, Gauge, Database, Cpu, HardDrive, Share2, Sparkles, Network, Binary, Bot } from 'lucide-react';

export const dataProductsSectionsMeta = [
  { id: 0, title: "Module 22: Data Products, Serving Architectures and AI Data Engineering Overview & Roadmap", category: "Course Roadmap" },
  { id: 1, title: "1. Introduction to Data Products", category: "Part 1 · Data Products & Product Thinking" },
  { id: 2, title: "2. Data as a Product", category: "Part 1 · Data Products & Product Thinking" },
  { id: 3, title: "3. Data Product Architecture", category: "Part 1 · Data Products & Product Thinking" },
  { id: 4, title: "4. Data Mesh Fundamentals", category: "Part 2 · Data Mesh & Domain Ownership" },
  { id: 5, title: "5. Domain-Oriented Data Ownership", category: "Part 2 · Data Mesh & Domain Ownership" },
  { id: 6, title: "6. Data Serving Architectures", category: "Part 3 · Serving Architectures & Semantic Layers" },
  { id: 7, title: "7. Analytical Data Marts", category: "Part 3 · Serving Architectures & Semantic Layers" },
  { id: 8, title: "8. Semantic Layers", category: "Part 3 · Serving Architectures & Semantic Layers" },
  { id: 9, title: "9. OLAP and Analytical Query Serving", category: "Part 3 · Serving Architectures & Semantic Layers" },
  { id: 10, title: "10. Serving Data Through APIs", category: "Part 4 · Operational Serving, Caching & Integration" },
  { id: 11, title: "11. Data Access and Caching Strategies", category: "Part 4 · Operational Serving, Caching & Integration" },
  { id: 12, title: "12. Reverse ETL Architecture", category: "Part 4 · Operational Serving, Caching & Integration" },
  { id: 13, title: "13. Data Integration for Business Applications", category: "Part 4 · Operational Serving, Caching & Integration" },
  { id: 14, title: "14. Graph Databases Fundamentals", category: "Part 5 · Graph & NoSQL Data Architecture" },
  { id: 15, title: "15. NoSQL Database Architecture", category: "Part 5 · Graph & NoSQL Data Architecture" },
  { id: 16, title: "16. Introduction to Machine Learning Data Engineering", category: "Part 6 · Machine Learning Feature Stores" },
  { id: 17, title: "17. Feature Engineering Pipelines", category: "Part 6 · Machine Learning Feature Stores" },
  { id: 18, title: "18. Feature Store Architecture", category: "Part 6 · Machine Learning Feature Stores" },
  { id: 19, title: "19. Offline and Online Feature Stores", category: "Part 6 · Machine Learning Feature Stores" },
  { id: 20, title: "20. Training-Serving Skew", category: "Part 6 · Machine Learning Feature Stores" },
  { id: 21, title: "21. Point-in-Time Correct Feature Retrieval", category: "Part 6 · Machine Learning Feature Stores" },
  { id: 22, title: "22. AI Data Preparation Pipelines", category: "Part 7 · AI Data Pipelines & Vector Databases" },
  { id: 23, title: "23. Embeddings and Vector Databases", category: "Part 7 · AI Data Pipelines & Vector Databases" },
  { id: 24, title: "24. Data Ingestion for Retrieval-Augmented Generation (RAG)", category: "Part 7 · AI Data Pipelines & Vector Databases" },
  { id: 25, title: "25. Building and Refreshing AI Knowledge Indexes", category: "Part 8 · Knowledge Indexing & AI Governance" },
  { id: 26, title: "26. AI Data Quality and Governance", category: "Part 8 · Knowledge Indexing & AI Governance" },
  { id: 27, title: "27. Practical Labs — Module 22", category: "Part 9 · Practical Labs, Assessment & Capstone" },
  { id: 28, title: "28. Module 22 — Final Assessment", category: "Part 9 · Practical Labs, Assessment & Capstone" },
  { id: 29, title: "29. Final Capstone Project & Key Takeaways", category: "Part 9 · Practical Labs, Assessment & Capstone" }
];

export const DataProductsSection = memo(function DataProductsSection({ sectionId }) {
  switch (sectionId) {
    case 0:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Course Roadmap
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              Module 22: Data Products, Serving Architectures and AI Data Engineering Overview &amp; Roadmap
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 22 — Data Products, Serving Architectures and AI Data Engineering
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Data Mesh Architecture — Architecture Diagram | Diagrams.so</span>
            <a href="https://images.openai.com/static-rsc-4/20iaNM-ttVluUbGKc_ds_f4Na6Es49kMctYkM3A1nGfI-VAnDnbii57TojwaxHsHoOLRxmIpn90byaJ7f_BPT7SubVUfq9Jq2hWViLyZFH1Y-VAKVitrvjLDPgutd8LqzFmtoDV_q8LuE38yuAr16n4dRRaLC5--XlJJmN0oL5Q?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Abacus.AI - The World's First Super Assistant For Professionals And Enterprises.</span>
            <a href="https://images.openai.com/static-rsc-4/nyVDS0QIulH4DrqBvheip3mayo7y3u9tqVHKvRNLACM72SDoTTlnIcsnyJb_7DC3cp4YVbdRCWvsG7hnrOt84NrFgO7J4jmm8Jhx48gG-QM2FoKC2q-OOtxlnlL62feRMWMbHDYQiA0alBUpHrqUKENCHq3zlQSeRyNksC9OwBs?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">What is a Vector Database? Essential Guide for GenAI Developers</span>
            <a href="https://images.openai.com/static-rsc-4/QsI9v0agV3kw3yj4VD6cOLujOjf_o2E76xc0HFHWKi_DdlOMXSpzyWe6FtsVuTXezWWIz9tJZs1MJ_swuUgNRSWi_ZjbbzOkWyUmoe19I4tSAADQZjM6pmA92s_xNwn6pfECQPt4HJ4zHoBpGztakyd5EVNr96h4WeuO6q0FFqQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            10
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Module Overview</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 22 focuses on transforming processed data into valuable, accessible, reusable, and intelligent data products.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In previous modules, students learned how to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Collect data from multiple sources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build data pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store data in data lakes and warehouses.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transform data using ETL and ELT.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement data quality and reliability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimize data processing and infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now, the focus shifts toward the next question:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How do we deliver trusted data to applications, business users, analytics systems, and AI models in a way that is useful, scalable, and efficient?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Organizations do not build data platforms simply to store data. They build them to create business value.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, an e-commerce organization may produce the following data products:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Product</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Consumers</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Business Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customer 360</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Marketing and sales</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer personalization</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Sales Analytics Mart</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Finance and executives</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Revenue analysis</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Product Recommendation Features</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">ML models</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Product recommendations</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Inventory Availability API</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">E-commerce application</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Accurate inventory</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customer Knowledge Index</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">AI assistants</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Contextual customer support</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Fraud Detection Features</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Fraud detection models</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Fraud prevention</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data product is a managed data asset designed to serve a specific consumer or business purpose.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This module combines modern data architecture, data mesh, analytical serving, machine learning data engineering, feature stores, vector databases, and RAG data pipelines.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Learning Objectives</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            By the end of this module, students should be able to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain data products and product-oriented data architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understand data mesh and domain-oriented data ownership.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design data serving architectures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build analytical data marts and semantic layers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Serve data through APIs and business applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement caching and data access strategies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understand reverse ETL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain graph databases and NoSQL architectures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build machine learning feature engineering pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design offline and online feature stores.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Prevent training-serving skew.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement point-in-time correct feature retrieval.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build AI data preparation pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understand embeddings and vector databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build RAG ingestion and knowledge indexing pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement AI data quality, governance, and refresh strategies.
          </p>
        </div>
      );
    case 1:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · Data Products &amp; Product Thinking
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              1. Introduction to Data Products
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">1.1</span>
              <span>What is a Data Product?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data product is a data asset designed, managed, and delivered to provide a specific value to its consumers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data product may be:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A curated dataset
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An analytical data mart
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A dashboard
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data API
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A machine learning feature set
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A recommendation system
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A searchable knowledge index
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A raw database table is not automatically a data product.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A well-designed data product has:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defined consumers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A clear business purpose
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reliable data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Documented schemas
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality guarantees
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ownership
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access controls
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Defined service expectations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: Customer 360 Data Product
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An organization stores customer data across multiple systems.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Customer 360 Data Platform – Real-Time Unified Customer Profiles</span>
            <a href="https://images.openai.com/static-rsc-4/ol6CqDjBmr27pI0WcQgMcMxTvfIKycQMwSQLg3TgEhLtebHpW-qf7Gadc6jM68pkbDHHVOgtoRbYvGlS93ITQkDlRjWspciNfYvcHxLmElBTYCPTHnQWy-liYHXSr-fvQpBHD6WB1mKBSfDxcncQ05z9iHUMiP1sTtAfs-FZhps?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">tapdata.io</span>
            <a href="https://tapdata.io/solutions-customer360?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Sources:</span>
            </h4>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                CRM Database E-commerce Database Payment Database Customer Support System
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer Data Integration
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer 360 Data Product
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +--&gt; Marketing +--&gt; Customer Analytics +--&gt; Recommendation Models +--&gt; Customer Support
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The Customer 360 product combines information such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer ID
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer name
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purchase history
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer lifetime value
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Preferred product categories
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer support history
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer activity
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The resulting product provides a unified view of the customer.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">1.2</span>
              <span>Characteristics of a Data Product</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Discoverable
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consumers should be able to locate the data product through a catalog.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understandable
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The product must include clear documentation, business definitions, and schema descriptions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Trustworthy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data should meet defined quality and freshness requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accessible
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorized consumers should be able to retrieve the data through supported interfaces.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitive data must be protected using appropriate access controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Interoperable
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The product should integrate with other data products and systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Independently manageable
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data product should have defined ownership, maintenance responsibilities, and a lifecycle.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">1.3</span>
              <span>Data Product Lifecycle</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Identify Business Need
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Define Data Product
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Design Data Contract
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Build Data Pipelines
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Validate Data Quality
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Publish Data Product
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Serve Consumers
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Monitor Usage &amp; Reliability
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Improve or Retire Product
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The lifecycle begins with a business requirement and continues through design, development, delivery, monitoring, and evolution.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">1.4</span>
              <span>Data Product vs Dataset</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Dataset</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Product</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Collection of data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managed data asset serving a defined purpose</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">May have no explicit owner</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Has accountable ownership</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">May lack documentation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Includes documentation and contracts</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">May have no quality guarantees</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Has defined quality expectations</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">May be difficult to consume</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Designed for consumer usability</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A dataset can become a data product when it is managed and delivered with the necessary product characteristics.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · Data Products &amp; Product Thinking
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              2. Data as a Product
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">2.1</span>
              <span>Product Thinking in Data Engineering</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditional data engineering often follows a project-oriented approach.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A team receives a request, builds a pipeline, delivers the dataset, and moves to the next project.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product thinking changes this approach.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of treating data as a one-time deliverable, the organization manages data as a long-lived product.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data product has:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Users
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Requirements
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ownership
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A roadmap
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Quality standards
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Service expectations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feedback mechanisms
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintenance responsibilities
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Traditional approach</span>
            </h4>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Business Request
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Build Dataset
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Deliver Dataset
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Project Completed
              </div>
            </div>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Product-oriented approach</span>
            </h4>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Business Need
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Product Design
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Continuous Delivery
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Consumer Feedback
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Product Improvement
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">2.2</span>
              <span>Data Product Ownership</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data product should have a responsible owner.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Typical roles:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Role</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Responsibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data Product Owner</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Defines purpose, consumers, and roadmap</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data Engineer</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Builds ingestion and transformation pipelines</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Analytics Engineer</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Defines business transformations and metrics</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data Steward</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Maintains data definitions and quality</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data Platform Engineer</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provides infrastructure and tooling</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data Consumer</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Uses the product for analytics or applications</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ownership reduces ambiguity when data quality problems or changes occur.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">2.3</span>
              <span>Data Contracts</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data contract defines the expected structure, semantics, quality, and operational behavior of a dataset between producers and consumers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`data_product:
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
    availability_target: 99.9_percent`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This contract helps prevent unexpected changes from breaking consumers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A contract can include schema, business meaning, quality rules, access policies, and service expectations. YAML is just one possible representation.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · Data Products &amp; Product Thinking
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              3. Data Product Architecture
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">3.1</span>
              <span>Architecture Overview</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data product architecture organizes data pipelines, storage, transformation, governance, and serving around business value.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Meet the modern data stack | Thoughtworks Australia</span>
            <a href="https://images.openai.com/static-rsc-4/Xk_SwDh0zqGz3iI7see-CKV1_J-4WOQIuFhFoLnBlAT2JXwk8GkG1OSkbichqTXgIKPG-O_vVovKLoZTZkVzxfmT3rIZ9McSlN991hrMEZr_IyCoerxzE5wfBlkRiki6UxBDddYH9feOvWdh1z45LLtG1sIV_x3JJlc2Cco-q_4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">thoughtworks.com</span>
            <a href="https://www.thoughtworks.com/en-au/insights/blog/data-engineering/meet-the-modern-data-stack?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Typical layers:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data source layer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ingestion layer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage layer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transformation layer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data product layer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Serving layer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consumer layer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Governance and observability layer
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">3.2</span>
              <span>Architecture Example</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Operational Sources
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Ingestion Layer
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Lake / Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Transformation Layer
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Domain Data Products
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Serving Layer (Data Marts, Data APIs, Feature Store, Knowledge Index)
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Consumers (Dashboards, Apps, ML, AI Assistants)
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Governance &amp; Observability
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">3.3</span>
              <span>Example: Retail Data Products</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A retail organization may maintain several independent data products.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales Data Product
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transaction data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Revenue metrics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales channels
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product sales
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Daily aggregates
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inventory Data Product
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product stock
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Warehouse location
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reorder thresholds
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability status
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer Data Product
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer profiles
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purchase behavior
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer segments
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer lifetime value
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These products can be reused by different teams without every team independently building the same pipelines.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Data Mesh &amp; Domain Ownership
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              4. Data Mesh Fundamentals
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">4.1</span>
              <span>What is Data Mesh?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Mesh is a decentralized data architecture and organizational approach in which business domains take responsibility for producing and managing their own data products.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditional data architectures often centralize all data engineering responsibilities in one team.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            As an organization grows, this central team can become a bottleneck.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Mesh distributes data ownership across business domains while maintaining shared platform capabilities and governance.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Deconstructing Data Mesh Principles | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/RN4kRNr06dseiuXiHHrLYb1H9UAlCFaAKUlKalHJ_hO8reGshjCQ5_ZnUnQSCwnmi11aqmfMAvhRLIK113doRZ1_1fNKW-5ioKh6ZQClpZM1BTuCt1NTeafxlvEUoSz8zDme4FgkQaR8BegB1WYEpkR3pWGI3wUUoeAvB9b96co?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Data Mesh Architecture — Architecture Diagram | Diagrams.so</span>
            <a href="https://images.openai.com/static-rsc-4/20iaNM-ttVluUbGKc_ds_f4Na6Es49kMctYkM3A1nGfI-VAnDnbii57TojwaxHsHoOLRxmIpn90byaJ7f_BPT7SubVUfq9Jq2hWViLyZFH1Y-VAKVitrvjLDPgutd8LqzFmtoDV_q8LuE38yuAr16n4dRRaLC5--XlJJmN0oL5Q?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            9
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">4.2</span>
              <span>Traditional Centralized Data Architecture</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consider an organization with:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Finance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Operations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            All departments send their data to a central data engineering team.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Sales --------\ Marketing -----\ Finance --------&gt; Central Data Team Operations ----/
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Central Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                BI Analytics
              </div>
            </div>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Problems</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Central team becomes overloaded.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Domain knowledge is limited.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            New data products take longer to build.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business teams depend heavily on central engineers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ownership of data quality becomes unclear.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">4.3</span>
              <span>Data Mesh Architecture</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In Data Mesh, domains own and manage their data products.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Self-Service Data Platform
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Domains (Sales, Marketing, Finance, Operations)
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Domain Data Products
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Shared Data Consumers
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Federated Governance
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each domain builds, maintains, and publishes its data products.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The organization still requires shared governance, security, interoperability, and platform infrastructure.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">4.4</span>
              <span>Four Fundamental Principles of Data Mesh</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Principle 1: Domain-Oriented Data Ownership
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business domains are responsible for their data products.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, the finance domain owns the financial reporting data product.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Principle 2: Data as a Product
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data must be treated as a product designed for its consumers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It should have documentation, quality requirements, service expectations, and discoverability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Principle 3: Self-Service Data Platform
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The organization provides shared infrastructure that allows domain teams to build and operate data products without reinventing platform capabilities.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data ingestion tools
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage infrastructure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Workflow orchestration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data catalog
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access control
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deployment automation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Principle 4: Federated Computational Governance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Governance is shared across domains through common policies and automated enforcement.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data privacy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access control
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data classification
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality standards
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Interoperability standards
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compliance requirements
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">4.5</span>
              <span>Data Mesh vs Data Lake vs Data Warehouse</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Mesh</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Lake</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Warehouse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Organizational and architectural approach</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Storage architecture</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analytical storage system</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Decentralizes domain ownership</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Stores large volumes of data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Stores structured analytical data</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Focuses on data products</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Supports diverse data formats</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Supports SQL analytics</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Can use lakes and warehouses</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Can be used within Data Mesh</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Can be used within Data Mesh</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Mesh is not a replacement for data lakes or warehouses. It can use both.
          </p>
        </div>
      );
    case 5:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Data Mesh &amp; Domain Ownership
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              5. Domain-Oriented Data Ownership
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">5.1</span>
              <span>What is Domain-Oriented Ownership?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Domain-oriented ownership means that the business domain closest to the data is responsible for its quality, meaning, documentation, and delivery.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Finance owns financial metrics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing owns campaign performance data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales owns sales transaction data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logistics owns delivery data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The domain understands the meaning of the data better than a general central data engineering team.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">5.2</span>
              <span>Domain Ownership Architecture</span>
            </h3>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Dremio and Modern Data Architecture: Data Lakes, Data Lakehouses and Data Mesh - DEV Community</span>
            <a href="https://images.openai.com/static-rsc-4/tIqh3lBS9p90GkOU19a_QVjQGy3n-Rr_Nh_RjaZ2FSB_P1R4FmSmDyevbPumfNmKMSYQIohPw_TriRZBGu7xCwPMCifDQTnr0jXCJ7Dui9-YJhtquOGOZbLOWnMnN8-pCZ5fXFW5XYFCLqEbrfP3eKw6VNRQUi2w9Z5t4lwahCg?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">dev.to</span>
            <a href="https://dev.to/alexmercedcoder/dremio-and-modern-data-architecture-data-lakes-data-lakehouses-and-data-mesh-5a92?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A marketing data product contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            campaign_id campaign_name marketing_channel campaign_cost impressions clicks conversions conversion_rate
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The marketing domain defines the business meaning of conversion rate.
          </p>
          <div className="my-3 p-3.5 rounded-xl bg-orange-50/50 border border-orange-200/70 text-stone-800 font-mono text-center text-sm shadow-sm overflow-x-auto">
            <span>\(ConversionRate = \frac&#123;Conversions&#125;&#123;Clicks&#125;\times100\)</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The data engineering team implements the transformations, but the marketing domain is accountable for the metric definition.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">5.3</span>
              <span>Benefits</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clear ownership
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Better business context
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Faster data product development
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Improved data quality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduced central-team bottlenecks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Increased domain autonomy
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">5.4</span>
              <span>Challenges</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inconsistent definitions across domains
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Duplication of infrastructure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Governance complexity
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Difficult cross-domain integration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Increased operational responsibilities
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            To address these problems, organizations need shared platform capabilities and federated governance.
          </p>
        </div>
      );
    case 6:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Serving Architectures &amp; Semantic Layers
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              6. Data Serving Architectures
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">6.1</span>
              <span>What is Data Serving?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data serving is the process of making processed and trusted data available to consumers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consumers include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            BI tools
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business applications
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            APIs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Machine learning systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AI assistants
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data analysts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Operational systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different consumers require different serving architectures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Consumer</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Serving Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Power BI dashboard</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analytical SQL queries</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">E-commerce application</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Low-latency API</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ML model</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Feature retrieval</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">AI assistant</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Semantic search and retrieval</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">CRM application</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Reverse ETL synchronization</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Graph analytics</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Relationship queries</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">6.2</span>
              <span>Common Data Serving Architectures</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Processed Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Serving Layer
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Serving Engines (SQL Warehouse, REST / GraphQL APIs, Feature Store, Vector DB, Graph DB)
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Consumer Systems (BI Dashboards, Business Applications, ML Models, AI Assistants, Relationship Analytics)
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The serving architecture should be selected according to latency, workload, data structure, and consumer requirements.
          </p>
        </div>
      );
    case 7:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Serving Architectures &amp; Semantic Layers
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              7. Analytical Data Marts
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">7.1</span>
              <span>What is a Data Mart?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data mart is a curated subset of data designed for a specific business department or analytical purpose.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data warehouse may contain enterprise-wide data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data mart focuses on a particular subject.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales data mart
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Finance data mart
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing data mart
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HR data mart
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inventory data mart
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">What is a Data Warehouse? Definition, Example &amp; Benefits (A Complete Guide) | Astera Blog</span>
            <a href="https://images.openai.com/static-rsc-4/pu3vbnrCuumh2avPhenIf2XH29RihsqI4YhKTm8geHrsTcPEDFPj3bjbTsLCQmPtbvfC-uk0QFMGh5nScpr9lYKUCA_P3XWvIUoSkVEmVJjKQeb4ck1bNeqci1rERMPdPJUgOmEmE-JOg081vl5gkpCvo0jArU0yTPWlOR1gF5w?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">astera.com</span>
            <a href="https://www.astera.com/type/blog/data-warehouse-definition?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">7.2</span>
              <span>Data Mart Architecture</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Enterprise Data Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +----&gt; Sales Data Mart
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +----&gt; Finance Data Mart
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +----&gt; Marketing Data Mart
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +----&gt; Inventory Data Mart
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">7.3</span>
              <span>Example: Sales Data Mart</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fact table:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE fact_sales ( sale_id BIGINT, customer_id BIGINT, product_id BIGINT, date_id INT, revenue DECIMAL(12,2), quantity INT );`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dimension tables:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE dim_customer ( customer_id BIGINT, customer_name VARCHAR(100), customer_segment VARCHAR(50) );`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE dim_product ( product_id BIGINT, product_name VARCHAR(100), category VARCHAR(50) );`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE dim_date ( date_id INT, full_date DATE, month_name VARCHAR(20), year INT );`}</code>
            </pre>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">7.4</span>
              <span>Analytical Query</span>
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT d.year, p.category, SUM(f.revenue) AS total_revenue FROM fact_sales f JOIN dim_date d ON f.date_id = d.date_id JOIN dim_product p ON f.product_id = p.product_id GROUP BY d.year, p.category ORDER BY total_revenue DESC;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This query generates revenue by product category and year.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">7.5</span>
              <span>Benefits of Data Marts</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Simplified analytical queries
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Department-specific data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Improved reporting performance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Easier data access
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reusable business metrics
          </p>
        </div>
      );
    case 8:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Serving Architectures &amp; Semantic Layers
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              8. Semantic Layers
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">8.1</span>
              <span>What is a Semantic Layer?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A semantic layer provides a business-oriented abstraction over technical data structures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It translates tables, columns, and relationships into meaningful business concepts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, a database may contain:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            fact_orders.order_amount fact_orders.order_id dim_customer.customer_id
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The semantic layer exposes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Total Revenue Total Orders Average Order Value Customer Count
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business users do not need to understand the underlying database joins.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">8.2</span>
              <span>Why Semantic Layers Are Important</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different teams may define the same business metric differently.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Finance defines revenue as recognized revenue.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales defines revenue as order value.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing defines revenue as attributed campaign revenue.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A semantic layer can standardize definitions and expose separate, clearly documented metrics.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">8.3</span>
              <span>Semantic Layer Architecture</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Semantic Layer (Business Metrics, Dimensions, Relationships, Metric Definitions)
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Consumer Layer (BI Dashboard, Analytics Application, AI Analytics Assistant)
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">8.4</span>
              <span>Example Metric Definition</span>
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`metrics:
  total_revenue:
    description: Total recognized sales revenue
    expression: SUM(order_revenue)
  total_orders:
    description: Total number of completed orders
    expression: COUNT(DISTINCT order_id)
  average_order_value:
    description: Average revenue per completed order
    expression: total_revenue / total_orders`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The semantic layer should define the appropriate aggregation rules and business filters.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">8.5</span>
              <span>Semantic Layer vs Data Mart</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Semantic Layer</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Mart</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Defines business meaning</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Stores curated analytical data</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Abstracts technical schemas</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Organizes department-specific data</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Defines metrics and relationships</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Contains tables and datasets</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Supports consistent analytics</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Supports efficient reporting</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tools and frameworks include dbt Semantic Layer, Looker, Cube, and Microsoft Power BI semantic models.
          </p>
        </div>
      );
    case 9:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Serving Architectures &amp; Semantic Layers
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              9. OLAP and Analytical Query Serving
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">9.1</span>
              <span>What is OLAP?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            OLAP stands for Online Analytical Processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is designed for complex analytical queries involving large datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            OLAP workloads commonly include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Aggregations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Grouping
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Historical analysis
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Multidimensional analysis
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business intelligence
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reporting
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">9.2</span>
              <span>OLTP vs OLAP</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">OLTP</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">OLAP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Operational transactions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analytical queries</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Frequent inserts and updates</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Large aggregations and scans</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Small individual transactions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Complex analytical workloads</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example: order placement</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Example: yearly revenue analysis</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">9.3</span>
              <span>OLAP Query Example</span>
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT region, product_category, SUM(revenue) AS total_revenue FROM sales GROUP BY region, product_category;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This query analyzes revenue across multiple dimensions.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">9.4</span>
              <span>OLAP Architectures</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ROLAP
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Relational OLAP uses relational database systems to perform analytical operations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            MOLAP
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Multidimensional OLAP uses multidimensional structures or cubes for analysis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HOLAP
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hybrid OLAP combines relational storage and multidimensional structures.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">9.5</span>
              <span>OLAP Serving Technologies</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Snowflake
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            BigQuery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Redshift
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Druid
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ClickHouse
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Pinot
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The appropriate system depends on query complexity, latency requirements, concurrency, and cost.
          </p>
        </div>
      );
    case 10:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Operational Serving, Caching &amp; Integration
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              10. Serving Data Through APIs
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">10.1</span>
              <span>What is a Data API?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Data API provides programmatic access to data through a defined interface.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Applications can retrieve data without directly connecting to the underlying warehouse.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Common API architectures:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            REST APIs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GraphQL APIs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            gRPC services
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">10.2</span>
              <span>REST Data API Architecture</span>
            </h3>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Enterprise Data Warehouse</span>
            <a href="https://images.openai.com/static-rsc-4/XIeohY_q00h-2E9Pzg7XcU6rg6wZl6FBqaET6x8OTFpamQ-BiIkCVE1TjfxLyep8YR6AyySka6J4nHXAtXYEJBnNDkAmlnKrQ74ZpracV-m297gflp3tP4sepXDHEBEltx3AOrBTjllM4M7T_-YfDDrL50GqYVz1bdEX-DAEyjg?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">capellasolutions.com</span>
            <a href="https://www.capellasolutions.com/blog/enterprise-data-warehouse?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Frontend Application
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                REST API
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Business Logic
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                API Response
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">10.3</span>
              <span>Example REST Endpoint</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GET /api/v1/products/101
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Response:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "product_id": 101,
  "product_name": "Laptop",
  "category": "Electronics",
  "available_stock": 250,
  "price": 65000
}`}</code>
            </pre>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">10.4</span>
              <span>Example with Python FastAPI</span>
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from fastapi import FastAPI

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
    return product`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is a simplified example using in-memory data. A production service would connect to an appropriate database or serving system and implement authentication, authorization, validation, error handling, and monitoring.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">10.5</span>
              <span>API Serving Considerations</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rate limiting
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Response latency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pagination
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data freshness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema versioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API compatibility
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Caching
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring
          </p>
        </div>
      );
    case 11:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Operational Serving, Caching &amp; Integration
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              11. Data Access and Caching Strategies
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">11.1</span>
              <span>What is Data Caching?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Caching stores frequently accessed data in a faster storage layer so that it can be retrieved without repeatedly querying the original source.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, a product catalog API may receive 100,000 requests per minute.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If every request queries the warehouse, the warehouse may become overloaded.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A cache can store frequently requested product data.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Software Architecture Diagram Generator Online | SciFig</span>
            <a href="https://images.openai.com/static-rsc-4/2Mzg6yqneSYYwCDSzhwVsQ2hoh3HjWGhpDH_DFVuFlhkn0pPAV7xXR6mWsQZQmyLa9nam2-ZtM3VNQQHYFvX8PlhNUsRQrSQTc6I73f-DTuz7Z88Rr_zQR-8rIQKIQkm0g6lEbR5wIcsArpqcxy4R-EgXDNSdlTSwqhbdG7vBuY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">scifig.ai</span>
            <a href="https://scifig.ai/tools/software-architecture-diagram-generator?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">11.2</span>
              <span>Cache Architecture</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Application
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Cache (Redis)
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +---- Cache Hit ----&gt; Return Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +---- Cache Miss ---&gt; Database
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Fetch Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Update Cache
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cache hit
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The requested data exists in the cache.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The application returns it directly.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cache miss
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The requested data is not available in the cache.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The application retrieves it from the database and may store it in the cache for future requests.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">11.3</span>
              <span>Cache-Aside Pattern</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The application manages cache retrieval and updates.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`def get_product(product_id):
    cached_product = cache.get(product_id)
    if cached_product:
        return cached_product
    product = database.get_product(product_id)
    cache.set(product_id, product, expiration=300)
    return product`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The expiration is 300 seconds, or five minutes.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">11.4</span>
              <span>Common Caching Strategies</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Strategy</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Cache-aside</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Application loads data into cache when needed</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Read-through</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cache automatically loads missing data</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Write-through</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Writes update cache and database together through the configured mechanism</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Write-behind</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cache asynchronously propagates writes to storage</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Time-to-live</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cached data expires after a defined period</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">11.5</span>
              <span>Cache Invalidation</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cache invalidation removes or updates stale cached data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Product Price Changes
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Database Updated
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Cache Invalidated
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                New Price Retrieved
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cache invalidation is difficult because stale data can cause incorrect business behavior.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A caching strategy should define:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expiration time
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Refresh frequency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Invalidation rules
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consistency requirements
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maximum cache size
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">11.6</span>
              <span>Data Access Patterns</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Point lookup
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retrieve a specific record.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM customers WHERE customer_id = 101;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytical scan
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Read a large number of records.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT SUM(revenue) FROM sales WHERE year = 2026;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Time-series retrieval
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retrieve events within a time range.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM sensor_events WHERE event_time >= '2026-11-01' AND event_time < '2026-12-01';`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different access patterns require different storage and serving strategies.
          </p>
        </div>
      );
    case 12:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Operational Serving, Caching &amp; Integration
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              12. Reverse ETL Architecture
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">12.1</span>
              <span>What is Reverse ETL?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reverse ETL is the process of transferring transformed and curated data from analytical systems back into operational business applications.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Traditional ETL:</span>
            </h4>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Operational Sources
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Warehouse
              </div>
            </div>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Reverse ETL:</span>
            </h4>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Reverse ETL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Business Applications
              </div>
            </div>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Data Catalog and Reverse ETL: Enabling Data Activation at Scale - Catalog Blog</span>
            <a href="https://images.openai.com/static-rsc-4/ZC0oMc6ObJSJAauc9o-AUyNufq_IlvvHqD6lGN0uE70Al5TijhOaZmCGaFo9WpxZqB3ff6W-ZkZdcXU8I9IKzJl86Vq2E-ozsVQOqPu5sy42_aqxwD2rLW2mj2SHm8drmg3KWiMhOwPTk7vKWr6BxAdVN9CqghibPZrnfJTENW8?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">castordoc.com</span>
            <a href="https://www.castordoc.com/blog/data-catalog-and-reverse-etl-enabling-data-activation-at-scale?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">12.2</span>
              <span>Why Reverse ETL Is Needed</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Organizations collect and transform data in analytical platforms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, business teams often work in operational applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reverse ETL makes analytical insights available directly within those applications.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer lifetime value sent to CRM
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer churn scores sent to customer success tools
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product recommendations sent to e-commerce applications
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing segments sent to campaign platforms
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fraud risk scores sent to transaction systems
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">12.3</span>
              <span>Example: Customer Churn Data</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A machine learning pipeline produces:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Customer ID</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Churn Probability</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Segment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">101</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">0.90</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">High Risk</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">102</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">0.15</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Low Risk</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">103</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">0.75</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">High Risk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reverse ETL synchronizes these results to a CRM system.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing teams can then create targeted retention campaigns.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">12.4</span>
              <span>Reverse ETL Workflow</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Operational Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Transformation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer Churn Model
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Curated Churn Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Reverse ETL Engine
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Operational Apps (CRM, Marketing Platform, Customer Success Application)
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">12.5</span>
              <span>Reverse ETL vs Traditional ETL</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Traditional ETL</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Reverse ETL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Moves data into analytical systems</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Moves curated analytical data into operational applications</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Sources are operational systems</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Source is typically a warehouse or analytical platform</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Supports analytics</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Activates analytical insights</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example: database to warehouse</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Example: warehouse to CRM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reverse ETL tools include Hightouch and Census.
          </p>
        </div>
      );
    case 13:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Operational Serving, Caching &amp; Integration
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              13. Data Integration for Business Applications
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">13.1</span>
              <span>What is Data Integration?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data integration combines data from multiple systems and makes it available to business applications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business applications often require data from different sources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, a customer service application may require:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer profile
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Purchase history
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment history
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Shipping status
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support ticket history
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">13.2</span>
              <span>Integration Architecture</span>
            </h3>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Enterprise Integration Patterns Every Architect Should Know - DEV Community</span>
            <a href="https://images.openai.com/static-rsc-4/NOMhvVRiJMUXBN4X8mvTiwvaeFE-FNJGyFW7wyhPbqipTfOegAHELRcamSiUWC4m_c49N8XhqvZYhSKl0wAfga3DWogE8OqDyAEpCU4fn4975yXacq4cBoLj--EjFttlqJ92AfOW9Z5LHLeKXScjgS1wZNxZFwO0LhOXxpvnC5Y?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">dev.to</span>
            <a href="https://dev.to/kancherla_venkatadileep/enterprise-integration-patterns-every-architect-should-know-1h5p?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ERP CRM E-commerce Payment System Logistics System
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Integration Layer
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Unified Data Product
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer Service Application
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">13.3</span>
              <span>Integration Techniques</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Batch integration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data is transferred periodically.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Every 1 hour: Extract CRM data Transform records Load warehouse
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Streaming integration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data is continuously transferred.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Payment Event
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Kafka
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Fraud Detection Application
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API-based integration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Applications exchange data through APIs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Change Data Capture (CDC)
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CDC captures changes made to source databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            INSERT UPDATE DELETE
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These changes can be propagated to downstream systems.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">13.4</span>
              <span>Data Integration Challenges</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different schemas
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inconsistent identifiers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Duplicate records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data latency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API rate limits
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data privacy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Synchronization conflicts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different transaction semantics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data integration must consider both technical compatibility and business meaning.
          </p>
        </div>
      );
    case 14:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Graph &amp; NoSQL Data Architecture
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              14. Graph Databases Fundamentals
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">14.1</span>
              <span>What is a Graph Database?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A graph database stores data as nodes and relationships called edges.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unlike relational databases, graph databases represent relationships as a fundamental part of the data model.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A graph consists of:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Nodes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Edges
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Properties
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Does your marketing need a customer graph? | by Ian Thomas | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/hXANGlKhbWJdI8j-gXZKhbEGhU28ctUsNbwiv1n8vt6q44bqz-Z6yPmKBDbGcYmbRvPQiS3i4tqkRh3Nlt88pwLg06PGUAndXA_wD6iSSmscLLXZAXupaDfjvdKavK3nUFsnKodu0ktKIyhZ8pKIpt9Q1C-wZqg3Xlqin4C7CTs?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40ian_thomas/does-your-marketing-need-a-customer-graph-23376d3dc767?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An e-commerce graph:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer A | | PURCHASED v Product X | | BELONGS_TO v Category Electronics
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Nodes:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer A
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product X
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Electronics
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Relationships:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer A purchased Product X.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product X belongs to Electronics.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">14.2</span>
              <span>Graph Data Model</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Node
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Represents an entity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer Product Order Supplier
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Edge
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Represents a relationship.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PURCHASED PLACED SUPPLIES FRIENDS_WITH
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Properties
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store attributes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer: customer_id = 101 name = "Rahul"
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">14.3</span>
              <span>Graph Database Query Example</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Using Cypher syntax in Neo4j:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`MATCH (c:Customer)-[:PURCHASED]->(p:Product) RETURN c.name, p.name;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This retrieves customers and the products they purchased.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">14.4</span>
              <span>Graph Database Use Cases</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recommendation systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fraud detection
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Social networks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Knowledge graphs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Supply chain analysis
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identity relationship analysis
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network topology analysis
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">14.5</span>
              <span>Graph Databases vs Relational Databases</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Graph Database</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Relational Database</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Nodes and edges</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Tables and rows</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Relationship-centric queries</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Table-centric queries</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Traverses relationships directly</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Often uses joins</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Useful for highly connected data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Useful for structured transactional data</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Graph databases are not automatically faster than relational databases. Their advantages are strongest for workloads that require complex relationship traversal.
          </p>
        </div>
      );
    case 15:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Graph &amp; NoSQL Data Architecture
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              15. NoSQL Database Architecture
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">15.1</span>
              <span>What is NoSQL?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NoSQL databases are database systems designed for data models and workloads that may not fit traditional relational database patterns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            NoSQL systems commonly support flexible schemas, distributed storage, and specialized access patterns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Major categories:
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">What Is Unstructured Data: Uses &amp; Examples | Airbyte</span>
            <a href="https://images.openai.com/static-rsc-4/-Vc9Va0mnFM023YQM5Jmnb1_8ddMSkDMUaWxdqJm-Enh3pv9rsdk2IDTm4V1oxkea_Hve9oOwN2h50ei2IRobrIkOQ_9QCmq7GHb_5W1UU4anMyLXkP7zIwF1CKFnvTYyfxb8x8DGMW-ECohA7GkmReDJnr56bXifqQ1YtGD91o?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">How MongoDB Works: NoSQL Database with JSON Documents | Omer Karacam posted on the topic | LinkedIn</span>
            <a href="https://images.openai.com/static-rsc-4/Qb5AWs4mqToxbfnIHrVYh9LYT7ERpdj4SQ0ahKDESWEkcmuzmZWBewt_YJ94hlaHRwW47wr4C9cT6YKIT3n8iNzUucoyd-iPuRaDOg9cBZ7D5Xdu-sfpq0zjtLokIsrIjOA-wpZ18FDS1NNPG5bG95hkWv5-DW8gB1dkvaCPgVo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Database 101: Data Consistency for Beginners - DEV Community</span>
            <a href="https://images.openai.com/static-rsc-4/TUdp6HCWfzDzVMoZOd3cerHJxulgtQEhtlGE0s7hiLNxFUMlnXqv33nmtMa1pXDFof0iC6zmOdLKzglOagLyZacD8VHTpeZLxT_fuUxkaM_Zj1f8vl-i8NsPVjIqdxXsvycYHE5zoEGN-ROwTY5cBHO0Z8j8h8qJJPTFZsLFI70?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            7
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono">A. Document Databases</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store data as documents.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "customer_id": 101,
  "name": "Rahul",
  "orders": [
    {
      "order_id": 1001,
      "amount": 5000
    }
  ]
}`}</code>
            </pre>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            MongoDB
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Couchbase
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono">B. Key-Value Databases</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store data as key-value pairs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            customer:101 → Customer Data session:abc → Session Data
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redis
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon DynamoDB, which also supports richer key-based data models
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono">C. Wide-Column Databases</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store data in distributed column-family structures.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Cassandra
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache HBase
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono">D. Graph Databases</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store nodes and relationships.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Neo4j
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon Neptune
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">15.2</span>
              <span>NoSQL Architecture Considerations</span>
            </h3>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Important concepts:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Horizontal scaling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition keys
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Replication
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consistency models
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed transactions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data modeling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query patterns
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">15.3</span>
              <span>CAP Theorem</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The CAP theorem describes a trade-off during a network partition in a distributed system.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The three properties are:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consistency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition tolerance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            During a network partition, a distributed system cannot guarantee both full consistency and full availability in the CAP sense.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In practice, systems make trade-offs based on their requirements. CAP is specifically about partition scenarios, not a general statement that distributed databases can only provide two properties at all times.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A financial transaction system may prioritize consistency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A large-scale social feed may tolerate some temporary inconsistency to maintain availability.
          </p>
        </div>
      );
    case 16:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Machine Learning Feature Stores
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              16. Introduction to Machine Learning Data Engineering
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">16.1</span>
              <span>What is Machine Learning Data Engineering?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Machine Learning Data Engineering is the discipline of designing data pipelines that prepare, validate, transform, store, and deliver data for machine learning systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditional data engineering focuses heavily on analytics and reporting.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ML data engineering focuses on preparing data that machine learning models can learn from and use during inference.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">3 Steps To Transform An ML Prototype Into A Real-World ML App</span>
            <a href="https://images.openai.com/static-rsc-4/_GtxUkHmr8Mi53ByBhbZKVT8WKZoHWKKNCa9WBgsa0wjepxLYAsiID4hFX6ZRY75bEtKM3PrkYIxzhINPb06WyTgCNEY04Y3aZDXUvN9qo3j49HYRg9DdEOjrDaJShGamrqyMlfJQ3iLqgoYxnmPP5SoHhUeUTqkjthTGcO3jZ8?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">realworldml.net</span>
            <a href="https://www.realworldml.net/blog/3-steps-to-transform-an-ml-prototype-into-a-real-world-ml-app?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">16.2</span>
              <span>ML Data Engineering Pipeline</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Sources
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Ingestion
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Validation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Cleaning
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feature Engineering
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feature Storage
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +----&gt; Model Training
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +----&gt; Model Inference
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">16.3</span>
              <span>Example: Customer Churn Prediction</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A telecom company wants to predict which customers will cancel their subscriptions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Source data:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer information
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Billing records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Call records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Internet usage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support tickets
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Subscription history
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The data engineering pipeline prepares these sources for machine learning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example features:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Monthly charges</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer's monthly bill</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Tenure</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Number of months as a customer</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Support tickets</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Number of tickets raised</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data usage</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Monthly internet consumption</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Payment delays</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Number of late payments</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The ML model uses these features to predict churn probability.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">16.4</span>
              <span>ML Data Engineering Responsibilities</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data ingestion
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data validation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data cleaning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature engineering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data versioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Training dataset creation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inference data preparation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data drift monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Training-serving consistency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ML data engineering ensures that machine learning models receive suitable and reliable data.
          </p>
        </div>
      );
    case 17:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Machine Learning Feature Stores
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              17. Feature Engineering Pipelines
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">17.1</span>
              <span>What is Feature Engineering?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature engineering is the process of transforming raw data into meaningful input variables, called features, that machine learning models can use.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A feature is an input variable representing useful information about an entity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Raw customer data:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer ID: 101 Order Count: 20 Total Spend: ₹50,000 Account Created: 2025-01-01
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Engineered features:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            average_order_value = 2500 customer_tenure_days = 312 purchase_frequency = 20 orders
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These features can help a model identify customer behavior.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">17.2</span>
              <span>Common Feature Engineering Techniques</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Numerical features
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Normalization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standardization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Log transformations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Aggregation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Mathematical transformations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Categorical features
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            One-hot encoding
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Label encoding
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Frequency encoding
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Target encoding, with leakage-safe training procedures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Time-based features
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Day of week
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Month
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hour
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Time since previous event
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rolling averages
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Aggregated features
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Total purchases
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Average spending
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Number of transactions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maximum transaction value
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">17.3</span>
              <span>Example: Feature Engineering Using Python</span>
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import pandas as pd

data = {
    "customer_id": [101, 102, 103],
    "total_spend": [50000, 20000, 80000],
    "order_count": [20, 10, 40]
}
df = pd.DataFrame(data)
df["average_order_value"] = df["total_spend"] / df["order_count"]
df["purchase_frequency"] = df["order_count"]
print(df)`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Output:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            customer_id total_spend order_count average_order_value 101 50000 20 2500 102 20000 10 2000 103 80000 40 2000
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">17.4</span>
              <span>Feature Engineering Pipeline Architecture</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Raw Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Cleaning
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feature Transformation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feature Validation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feature Storage
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Model Lifecycle (Training Dataset &amp; Inference Features)
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A feature engineering pipeline should be reproducible and version-controlled.
          </p>
        </div>
      );
    case 18:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Machine Learning Feature Stores
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              18. Feature Store Architecture
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">18.1</span>
              <span>What is a Feature Store?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A feature store is a system that manages, stores, and serves machine learning features for both model training and inference.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It helps teams reuse features rather than independently calculating them for every model.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A feature store provides capabilities such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature definitions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature discovery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature versioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Historical feature retrieval
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Online feature serving
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Offline feature serving
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature monitoring
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Abacus.AI - The World's First Super Assistant For Professionals And Enterprises.</span>
            <a href="https://images.openai.com/static-rsc-4/nyVDS0QIulH4DrqBvheip3mayo7y3u9tqVHKvRNLACM72SDoTTlnIcsnyJb_7DC3cp4YVbdRCWvsG7hnrOt84NrFgO7J4jmm8Jhx48gG-QM2FoKC2q-OOtxlnlL62feRMWMbHDYQiA0alBUpHrqUKENCHq3zlQSeRyNksC9OwBs?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">abacus.ai</span>
            <a href="https://abacus.ai/featurestore?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">18.2</span>
              <span>Feature Store Architecture</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Sources
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feature Engineering Pipelines
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feature Store
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +----&gt; Offline Store
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Model Training
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +----&gt; Online Store
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Model Inference
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">18.3</span>
              <span>Why Feature Stores Are Needed</span>
            </h3>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Without a feature store:</span>
            </h4>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Model A
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feature Pipeline A Model B
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feature Pipeline B Model C
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feature Pipeline C
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each model independently calculates similar features.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This creates duplication and inconsistency.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>With a feature store:</span>
            </h4>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Shared Feature Engineering
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Feature Store
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +----&gt; Model A +----&gt; Model B +----&gt; Model C
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Shared features can be reused across models.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">18.4</span>
              <span>Example Feature Definitions</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature Group: customer_features Entity: customer_id Features: total_purchase_amount average_order_value purchase_frequency customer_tenure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A feature group defines a collection of related features and the entities they describe.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">18.5</span>
              <span>Feature Store Technologies</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feast
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tecton
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Databricks Feature Store
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SageMaker Feature Store
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feast is an open-source feature store that can be used to learn feature management and serving concepts.
          </p>
        </div>
      );
    case 19:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Machine Learning Feature Stores
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              19. Offline and Online Feature Stores
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">19.1</span>
              <span>Offline Feature Store</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An offline feature store stores historical feature data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is primarily used for:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Model training
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Historical analysis
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Batch inference
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Training dataset generation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Common storage technologies:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data lakes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data warehouses
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            BigQuery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Snowflake
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`customer_id | date       | purchase_count
101         | 2026-11-01 | 10
101         | 2026-11-02 | 12
101         | 2026-11-03 | 15`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The offline store contains historical feature values.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">19.2</span>
              <span>Online Feature Store</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An online feature store provides low-latency retrieval of current feature values.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is primarily used for real-time inference.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Common technologies:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redis
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DynamoDB
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cassandra
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Other low-latency key-value systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Key: customer_id:101 Value: { "purchase_count": 15, "average_order_value": 2500, "customer_tenure": 300 }`}</code>
            </pre>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">19.3</span>
              <span>Offline vs Online Feature Stores</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Offline Store</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Online Store</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Historical data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Latest or serving-ready data</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Model training</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Real-time inference</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Large datasets</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Low-latency retrieval</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Batch-oriented</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Request-oriented</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Usually higher latency</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Usually lower latency</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">19.4</span>
              <span>Feature Retrieval Example</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A recommendation API receives a request:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            customer_id = 101
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The online feature store retrieves:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            purchase_count = 15 average_order_value = 2500 customer_tenure = 300
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The model uses these features to generate a recommendation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The online store should not be treated as a complete historical training dataset.
          </p>
        </div>
      );
    case 20:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Machine Learning Feature Stores
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              20. Training-Serving Skew
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">20.1</span>
              <span>What is Training-Serving Skew?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Training-serving skew occurs when the features used during model training differ from the features provided during production inference.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This can cause poor model performance.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Train-Serving Skew: Why Your ML Model Fails in Production</span>
            <a href="https://images.openai.com/static-rsc-4/Gxwahl9WR1FrQu2MMJ-elaY93wKvjjHO_wcRB3NZhgfgTPqbAPKxgGohknf9TQvhpxiOjzR2So59bHx-6gv3bVWesgbJkAxHvCgUYf_46W9PKOK-CHe_qBI06px8_EbhlFv6-_TUEuoudycvPvdnjxvG1NjpoNm28UdHEhh2TeA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">linkedin.com</span>
            <a href="https://www.linkedin.com/pulse/train-serving-skew-mismatch-breaks-real-world-models-fahim-ahamed-hhole?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            During model training:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            average_order_value = total_spend / order_count
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            During production inference:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            average_order_value = total_spend
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The production system incorrectly uses total spending instead of average order value.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The model receives inconsistent inputs.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">20.2</span>
              <span>Common Causes</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different transformation logic
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different data sources
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incorrect feature definitions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Missing values handled differently
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different normalization parameters
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different timestamps
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different feature versions
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">20.3</span>
              <span>How to Prevent Training-Serving Skew</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Shared transformation logic
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use common feature definitions for training and inference whenever practical.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature store
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Centralize feature definitions and retrieval.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compare training and inference feature distributions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Versioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain feature versions and transformation history.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automated testing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate that training and serving pipelines produce equivalent features under comparable conditions.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">20.4</span>
              <span>Training-Serving Consistency Example</span>
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`def calculate_average_order_value(total_spend, order_count):
    if order_count == 0:
        return 0
    return total_spend / order_count`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The same function can be reused in both training and inference workflows when the implementation environment permits.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This reduces the chance of inconsistent feature calculations.
          </p>
        </div>
      );
    case 21:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Machine Learning Feature Stores
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              21. Point-in-Time Correct Feature Retrieval
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">21.1</span>
              <span>What is Point-in-Time Correct Retrieval?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Point-in-time correct retrieval ensures that the features used to train a model reflect only information available at the prediction time.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It is essential for preventing data leakage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data leakage occurs when a model uses information that would not have been available when the prediction was supposed to be made.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">21.2</span>
              <span>Example: Customer Churn Prediction</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose the objective is to predict whether a customer will churn on November 1.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Available historical information:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Event</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customer subscription started</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">October 1</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customer raised support ticket</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">October 20</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customer canceled subscription</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">November 5</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The model must not use the November 5 cancellation event when generating features for a November 1 prediction.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            That information was not available at prediction time.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">21.3</span>
              <span>Point-in-Time Join</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose we have:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            prediction_timestamp feature_timestamp customer_id feature_value
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A correct retrieval process selects the latest feature value that was available at or before the prediction timestamp.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Conceptually:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT p.customer_id, p.prediction_timestamp, f.feature_value FROM predictions p JOIN customer_features f ON p.customer_id = f.customer_id AND f.feature_timestamp <= p.prediction_timestamp;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This simplified query may return multiple historical feature rows. A production point-in-time join must select the appropriate latest eligible record per entity and feature, account for event time versus availability time, and avoid future leakage.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">21.4</span>
              <span>Why Point-in-Time Correctness Matters</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It prevents:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data leakage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unrealistic model performance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incorrect historical feature values
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Training-serving inconsistencies
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Point-in-time retrieval is particularly important in:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fraud detection
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Credit risk
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer churn
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recommendation systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Financial prediction
          </p>
        </div>
      );
    case 22:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · AI Data Pipelines &amp; Vector Databases
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              22. AI Data Preparation Pipelines
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">22.1</span>
              <span>What is AI Data Preparation?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AI data preparation is the process of collecting, cleaning, transforming, organizing, and validating data for AI model development and inference.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AI systems depend heavily on the quality and structure of their input data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, an AI assistant may require:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Documents
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PDFs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Technical manuals
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Knowledge base articles
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Website content
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Structured metadata
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Raw data must be prepared before it can be used effectively by an AI system.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">22.2</span>
              <span>AI Data Preparation Architecture</span>
            </h3>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Building a RAG Pipeline from Scratch: A Visual Guide to Ingestion &amp; Retrieval | by Abhishek Galfade | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/eek7hFofXTvmXfFFSGRZhjSt9JIY-TI8-J-eW7WUD65LckZt77jqOiwv_GrIAdxfO224zQtqVNHPAmAoCwSvrCrsz-VqQd6GBTXfaefa7BeX0SFyl-WscXbwSNAESp5w-wEW7Frif9N_Ggz7JWI9WWOJdZJ2J08-9QZb4vQVFLM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">thisabhi.medium.com</span>
            <a href="https://thisabhi.medium.com/building-a-rag-pipeline-from-scratch-a-visual-guide-to-ingestion-retrieval-e9c80ade0246?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Sources
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Ingestion
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Document Parsing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Cleaning
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Metadata Extraction
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Chunking
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Embedding Generation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Vector Database
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AI Application
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">22.3</span>
              <span>Data Sources for AI</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Structured data
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SQL tables
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transaction datasets
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product catalogs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Semi-structured data
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            JSON
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            XML
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Event logs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API responses
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unstructured data
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PDFs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Word documents
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Images
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Audio
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Video
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Text documents
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">22.4</span>
              <span>Data Cleaning for AI</span>
            </h3>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Common tasks:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove duplicate documents.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Normalize text.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove irrelevant content.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Correct encoding issues.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detect corrupted files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate document metadata.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify outdated information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detect personally identifiable information (PII).
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Raw text:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DATA ENGINEERING IS THE PROCESS OF BUILDING DATA PIPELINES!!!
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cleaned text:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineering is the process of building data pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cleaning must be appropriate for the data. For example, preserving code formatting is important when preparing programming documentation.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">22.5</span>
              <span>Metadata Extraction</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata describes the content and context of a document.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "document_id": "doc_101",
  "title": "Data Engineering Architecture",
  "source": "internal_knowledge_base",
  "category": "data_engineering",
  "created_at": "2026-11-01",
  "version": "1.0"
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata is useful for filtering, search, governance, access control, and document management.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">22.6</span>
              <span>AI Data Preparation Challenges</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Large volumes of documents
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different file formats
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Duplicate content
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Poor document structure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Outdated information
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incorrect metadata
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitive information
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Copyright restrictions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality issues
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A robust AI data preparation pipeline should preserve document context and provenance.
          </p>
        </div>
      );
    case 23:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · AI Data Pipelines &amp; Vector Databases
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              23. Embeddings and Vector Databases
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">23.1</span>
              <span>What are Embeddings?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Embeddings are numerical representations of data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An embedding model converts text, images, or other inputs into a vector of numbers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These vectors represent semantic characteristics of the input.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Text: "Data engineering builds reliable pipelines." Embedding: [0.12, -0.34, 0.81, 0.22, ...]
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The vector may contain hundreds or thousands of dimensions, depending on the embedding model.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">What Are Vector Embeddings? | Endee Blog</span>
            <a href="https://images.openai.com/static-rsc-4/h9JZREwhP3X-9eMnF_r7Z6SMcRxlObYNuREEA10nTea556BNQx28zKn-BsdqQuHMtcFTlgQBPxJo1bV9Sh4Yw7Is-RDZv8PuVdMZnB8gnIHtUCpykswtPdZqvA1koA9aItR4wPPDom9jcx562XKpzOOuVgi2qMSrbMJwBrjpvtM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">endee.io</span>
            <a href="https://endee.io/blog/vector-embeddings?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">23.2</span>
              <span>Why Embeddings Are Important</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditional keyword search retrieves documents based on matching terms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Semantic search retrieves documents based on meaning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example query:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How do I recover a failed data pipeline?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Relevant documents may contain:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline failure recovery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checkpointing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retry strategies
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data backfilling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Disaster recovery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Even if the exact words differ, semantic search may identify related content.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">23.3</span>
              <span>Embedding Generation</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Conceptual process:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Text
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Embedding Model
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Numerical Vector
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from sentence_transformers import SentenceTransformer

model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")
text = "Data engineering builds reliable pipelines."
embedding = model.encode(text)
print("Embedding dimension shape:", embedding.shape)`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This model typically produces a 384-dimensional embedding.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The code demonstrates local embedding generation. The model must be available in the environment.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">23.4</span>
              <span>Vector Databases</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A vector database stores, indexes, and retrieves vector representations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It can support:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Similarity search
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Semantic search
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata filtering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Approximate nearest-neighbor search
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Vector retrieval
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            FAISS
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Qdrant
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Milvus
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Weaviate
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pinecone
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Chroma
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">23.5</span>
              <span>Vector Database Architecture</span>
            </h3>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">What is a vector database? | Ubuntu</span>
            <a href="https://images.openai.com/static-rsc-4/xyJtMiMjKZntVSUiodkeQ3BYcMY0W4Npc-8wgPBopgAXIEdhKoLSEVNVcS4FwBcw1Wgg6TefP1Yxp2l-PlLLqSalgxa9FYgD5Z8ImAzMAtAkzeMV9v63mLUX6UWVV0G1jSkp2inChoTSatSWR8I-jRqU7lakU5GN0YbfMnsqDbg?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">ubuntu.com</span>
            <a href="https://ubuntu.com/blog/what-is-a-vector-database?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Documents
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Embedding Model
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Vector Database
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Similarity Search
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Relevant Documents
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">23.6</span>
              <span>Similarity Search</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            One commonly used similarity metric is cosine similarity.
          </p>
          <div className="my-3 p-3.5 rounded-xl bg-orange-50/50 border border-orange-200/70 text-stone-800 font-mono text-center text-sm shadow-sm overflow-x-auto">
            <span>\(\text&#123;Cosine Similarity&#125;(A,B)= \frac&#123;A\cdot B&#125;&#123;\|A\|\|B\|&#125;\)</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For nonzero vectors, the cosine similarity ranges from -1 to 1.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A value near 1 indicates similar vector directions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A value near 0 indicates approximately orthogonal vectors.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A value near -1 indicates opposite vector directions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The interpretation depends on the embedding model and its training.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">23.7</span>
              <span>Example</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How can I improve Spark pipeline performance?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The vector database may retrieve documents about:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Spark partitioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data skew
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Shuffle reduction
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Worker autoscaling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The AI application can use these retrieved documents to generate an answer.
          </p>
        </div>
      );
    case 24:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · AI Data Pipelines &amp; Vector Databases
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              24. Data Ingestion for Retrieval-Augmented Generation (RAG)
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">24.1</span>
              <span>What is RAG?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retrieval-Augmented Generation combines information retrieval with generative AI.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A RAG system retrieves relevant information from an external knowledge source and provides that information to an AI model to help generate an answer.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RAG is useful when an AI system must answer questions using:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Internal documents
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Enterprise knowledge
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Technical manuals
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Course content
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product documentation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Frequently updated information
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">What Is RAG and Why Your LLM Needs It (Part 1 of 3)</span>
            <a href="https://images.openai.com/static-rsc-4/i5BRg1gzJ82-Zp4O_CtTLF3ftJqyPBbeHWhQOdiHfxNqln9Uf44gex7PAXeF_FIY1zyP9QxbiF0tZrENNC6T7adZJnESCWiFNtqdfa3SRrEiraqhbGnIZ3vHPblVI6xffLI1-zU62cEfiEVm-dll9OwfnkvVDCu8rRgctblhQHk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">blog.stratoslouvaris.gr</span>
            <a href="https://blog.stratoslouvaris.gr/what-is-rag-part-1/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">24.2</span>
              <span>RAG Architecture</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Documents
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Document Parsing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Text Cleaning
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Chunking
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Embedding Model
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Vector Database &lt;-&gt; User Query &amp; Query Embedding &amp; Similarity Search -&gt; Retrieved Context
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                LLM
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Generated Answer
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">24.3</span>
              <span>RAG Ingestion Pipeline</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The ingestion pipeline prepares documents for retrieval.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Step 1: Collect documents</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sources may include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PDFs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Word documents
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            HTML pages
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Markdown files
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database records
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Step 2: Parse documents</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Extract text and relevant structure.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Step 3: Clean data</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove irrelevant content and normalize text while preserving useful context.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Step 4: Chunk documents</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Split documents into smaller pieces.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Step 5: Generate embeddings</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Convert each chunk into a vector.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Step 6: Store vectors</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store embeddings along with document metadata.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Step 7: Build search indexes</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Prepare the vector database for efficient retrieval.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">24.4</span>
              <span>Example RAG Document</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Original document:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Spark is a distributed data processing engine. It supports batch processing, streaming, SQL, and machine learning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Possible chunks:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Chunk 1: Apache Spark is a distributed data processing engine. Chunk 2: It supports batch processing, streaming, SQL, and machine learning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each chunk receives an embedding and metadata.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">24.5</span>
              <span>Metadata for RAG</span>
            </h3>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "document_id": "spark_101",
  "chunk_id": "spark_101_01",
  "source": "spark_documentation",
  "title": "Apache Spark Overview",
  "page": 1,
  "category": "data_engineering",
  "version": "1.0"
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata allows the system to filter retrieved documents by source, category, version, or access permissions.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">24.6</span>
              <span>RAG vs Fine-Tuning</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">RAG</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Fine-Tuning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Retrieves external information</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Changes model behavior through training</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Useful for knowledge that changes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Useful for adapting behavior and patterns</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Can provide source references</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Does not inherently provide source references</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Knowledge can be refreshed through indexing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Updates may require additional training</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Uses retrieval at inference time</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Uses trained model parameters</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RAG and fine-tuning can be combined.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RAG is particularly useful when an AI application needs access to changing external or enterprise knowledge.
          </p>
        </div>
      );
    case 25:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 8 · Knowledge Indexing &amp; AI Governance
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              25. Building and Refreshing AI Knowledge Indexes
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">25.1</span>
              <span>What is a Knowledge Index?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A knowledge index is an organized, searchable representation of information that an AI system can retrieve efficiently.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In a RAG system, the knowledge index commonly contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document chunks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Embeddings
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document identifiers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Source references
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access-control information
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The index enables an AI application to locate relevant information without searching every document from scratch.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">25.2</span>
              <span>Knowledge Index Architecture</span>
            </h3>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Elasticsearch in Action: Introducing Java API Client (1/2) | by Madhusudhan Konda | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/uLIDR3OZy4hXRqfivPDG0RkjDxOIR2cKTzqYIS1X9YUomfltb-rC6dLUFYElCGb7pNyPXnIVsYGo5QRF7Yuj6B5POTbueE8CY6Pxtt6w8wuSY1YNWczKzSQdSJ9b8LYet3byBy4mNbeMJlZcprNPmR4V8rEk-iPLjj7XTsN-v2E?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">mkonda007.medium.com</span>
            <a href="https://mkonda007.medium.com/elasticsearch-in-action-introducing-java-api-client-1-2-eadad7dca737?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Document Repository
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Ingestion Pipeline
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Document Processing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Embedding Generation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Knowledge Index
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AI Retrieval System
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">25.3</span>
              <span>Why Index Refreshing Is Required</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Knowledge changes over time.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Examples:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            New documents are published.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Existing documents are updated.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Documents become obsolete.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product specifications change.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Course modules are revised.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Policies are modified.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the knowledge index is not refreshed, the AI application may retrieve outdated information.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">25.4</span>
              <span>Index Refresh Strategies</span>
            </h3>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono">A. Full Refresh</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reprocess the entire knowledge collection.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                All Documents
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Reprocess
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Regenerate Embeddings
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Rebuild Index
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Advantages:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Simple consistency model
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Useful for major changes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Disadvantages:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expensive
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Time-consuming
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Repeats unnecessary processing
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono">B. Incremental Refresh</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Process only new or modified documents.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Document Changes
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Detect Changes
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Process Changed Documents
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Update Index
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Advantages:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Lower cost
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Faster refresh
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Less unnecessary processing
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono">C. Event-Driven Refresh</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Refresh the knowledge index when a source document changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Document Updated
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Change Event
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Ingestion Pipeline
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Index Updated
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">25.5</span>
              <span>Document Versioning</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a document changes from version 1.0 to version 2.0.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The system should:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detect the updated version.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Process the new content.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generate new embeddings.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Update the index.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove or retire obsolete chunks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Preserve source metadata.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A robust implementation avoids exposing partially updated indexes.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">25.6</span>
              <span>Knowledge Index Evaluation</span>
            </h3>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Important metrics:</span>
            </h4>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Metric</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Index freshness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">How recently the index was updated</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Retrieval latency</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Time required to retrieve documents</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Recall@K</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Fraction of relevant documents retrieved within top K</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Precision@K</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Fraction of retrieved top K documents that are relevant</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Index coverage</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Percentage of eligible source content represented</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Embedding generation cost</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cost of creating embeddings</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Retrieval failure rate</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Percentage of retrieval requests that fail</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For an AI knowledge system, high-quality indexing and retrieval are often just as important as the language model itself.
          </p>
        </div>
      );
    case 26:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 8 · Knowledge Indexing &amp; AI Governance
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              26. AI Data Quality and Governance
            </h2>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">26.1</span>
              <span>What is AI Data Quality?</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AI data quality evaluates whether the data used by AI systems is suitable, trustworthy, relevant, and sufficiently accurate for its intended purpose.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditional data quality focuses on structured datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AI data quality also includes documents, embeddings, metadata, retrieval relevance, and training data characteristics.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Open-Source Data Governance Frameworks: A Strategic Analysis of OpenMetadata, DataHub, Apache Atlas, and Amundsen | TheDataGuy</span>
            <a href="https://images.openai.com/static-rsc-4/z_DXwaleZryI9sJWsLErEFvEUrMgTqBNloiKhmQHVyaQSdqAf5U--L-zkkg5aoI2cBAtBI15bUDL2KxKfHbV7R9QMgYpPJpqqTkDJx4nvtUKW3-HxUvzu0CacliNYDgR6zn57d0LcCgHMSJI6v-71jex1YLilI9VbEHW5TN0Rxg?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Retrieval-Augmented Generation (RAG) Dashboard Metrics Explained</span>
            <a href="https://images.openai.com/static-rsc-4/K4l5X3HbbkYUEz9n2fGn5oiPOF2XxkyeLrxHXiwM-51Jn0WH8mPcoNI-FBMes0mTHZMd7V2bXiVHPztgt4mkR90odTOLdfpm575xXQeaJ6HCAjRxhoA23PjfyzfURDoUSwTkWgUCxIzIyBOcV7hjnmW44qLb7shf7CRZwp9zUX0?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">The Hidden Art of RAG Evaluation: Why 90% of AI Teams Get It Wrong (And How to Be in the Top 10%) | by Abhishek Pan | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/Kf5OJ7SwkuzhpFT6T5xs65O6gFLlwJpUUS7iFOAVAbguYQrRMvf9sZrfMUiBpDEjvzwqK7QG_LZ2AyJ2yZ7WUgWM_IxbKGjZyWS_LEgTCfJdbNZKOeyMWA3ZA4L2wSBbV-cHTszf7bRuTiyo1Pn3a4QY5TDZllLEZhfo-1uV3q4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            10
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">26.2</span>
              <span>AI Data Quality Dimensions</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accuracy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information correctly represents the intended facts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: product price in a knowledge base matches the current approved price.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Completeness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Required information is present.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: an AI knowledge index contains all approved course modules.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consistency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information agrees across different sources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: product descriptions do not contradict the product catalog.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Freshness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information is updated when necessary.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: an AI assistant does not retrieve outdated pricing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Relevance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Information is useful for the intended task.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: a query about Spark optimization retrieves Spark documentation rather than unrelated database content.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provenance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The origin of data is known.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: every retrieved knowledge chunk includes its source document and version.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">26.3</span>
              <span>AI Data Governance</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AI data governance establishes policies and controls for how AI data is collected, stored, processed, accessed, and used.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Important governance areas:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data privacy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data security
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data access controls
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data provenance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data lineage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data retention
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data classification
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Copyright and licensing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Responsible data usage
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">26.4</span>
              <span>Access Control in RAG</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An AI knowledge base may contain documents with different permissions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Public Documents
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Public Knowledge Index Internal Documents
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Internal Knowledge Index Restricted Documents
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Restricted Knowledge Index
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An AI application should retrieve only documents that the requesting user is authorized to access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access control must be enforced during retrieval, not merely applied after the LLM has received restricted context.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">26.5</span>
              <span>AI Data Governance Architecture</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AI Data Sources
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Preparation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Quality Validation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Knowledge Index
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                AI Retrieval
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Federated Governance Policies (Access Control, Lineage &amp; Provenance, Monitoring &amp; Evaluation)
              </div>
            </div>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">26.6</span>
              <span>AI Data Quality Challenges</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hallucination caused by poor retrieval
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The retrieved context may be incomplete or irrelevant.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Outdated knowledge
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The index may contain obsolete documents.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Duplicate content
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Multiple versions of the same document can create redundant retrieval results.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sensitive information exposure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Private data may be embedded and retrieved without proper access controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data poisoning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Malicious or incorrect content may enter the knowledge base.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Embedding drift
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Changes in embedding models or processing pipelines can affect retrieval behavior.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AI data governance should therefore include quality testing, source validation, access controls, index management, and ongoing evaluation.
          </p>
        </div>
      );
    case 27:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Practical Labs, Assessment &amp; Capstone
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              27. Practical Labs — Module 22
            </h2>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Understanding the Feature Store with Feast | VISIONHONG | VISIONHONG</span>
            <a href="https://images.openai.com/static-rsc-4/Q1k1h0cBhKs1kfCcammXNR2WZC0kjbdNCyQaWlTzaJJkCNMCO1dxaGpGQB8xXJLzsSgIDfLar8u0v0hF6a25e-XrT6ZSCRWsg7eLwqXM1Dp-uYhsdAFRfm9Ze0O-Tq6HGlO37O5J029Kj7jLC7utpur1ES0WjuIxenWEbITbGqI?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Best AI Diagram Animation Tools: Tested &amp; Ranked</span>
            <a href="https://images.openai.com/static-rsc-4/UsFz17vu15xzwRqU6msA1OyqrBTd4sO3OE1LT9EgDvwT0UPqOQRa-KIh8ktlcwa6Ss98tB5fBMQL7U6WZL-xqCCebAMMZqkWuuEkGDHT1yelGRV1t5iS1HReowVHVwell2wNv3BQYTOlRLM__fY7RRRTO47fmLqEx1VrAdHRpHY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">A Knowledge Graph of Music Brand Partnerships with Neo4j — Shep Bryan</span>
            <a href="https://images.openai.com/static-rsc-4/ZAvk-3TTU4Aw4xpUeSpvrKJO7h8WnesVw4lYlMT9sqHfQabUN8Fu5DfCx9nSaqmj0BNR1Sw7WnaZR5HgAn7d5Vh4iSKc1Unxza12MpzDYQUfI1dH4gDQre0PhfwBdNjxo3A-V5BRF8pm_XKNAA9xqWPFHSHvqf6OisqQ1eqcsvM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            10
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Lab 1 — Build a Customer 360 Data Product</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective: Integrate customer data from multiple sources and create a reusable data product.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Tasks:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create customer, orders, and payments datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integrate data using SQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resolve duplicate customer records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define a customer data contract.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a Customer 360 analytical table.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement data quality tests.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document the data product.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expose the product through an API.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: data product design, integration, ownership, and serving.
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Lab 2 — Build an Analytical Data Mart</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective: Create a sales data mart for business analytics.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Tasks:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design fact and dimension tables.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement a star schema.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Load transactional data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create revenue and order metrics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimize analytical queries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build a semantic model.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Connect a BI dashboard.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: data marts, OLAP, semantic layers, and analytical serving.
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Lab 3 — Build a Data API</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective: Serve warehouse data to an application using FastAPI.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Tasks:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a product dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Connect the API to a database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement REST endpoints.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Add authentication.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement pagination.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Add Redis caching.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement API monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Test response latency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: API serving and caching architecture.
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Lab 4 — Build a Machine Learning Feature Pipeline</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective: Prepare customer features for a churn prediction model.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Tasks:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Collect customer transaction data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clean and validate the data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Engineer customer features.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store historical features.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create training datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create inference features.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate training-serving consistency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement point-in-time retrieval.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: ML data engineering and feature stores.
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Lab 5 — Build a Feature Store with Feast</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective: Implement an offline and online feature store.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Tasks:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Install Feast.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define a customer entity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define feature views.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configure an offline store.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configure an online store.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Materialize features.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retrieve features for inference.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generate a historical training dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: feature management, feature serving, and feature reuse.
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Lab 6 — Build a RAG Knowledge Pipeline</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective: Create a searchable AI knowledge base using documents.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">AI Context Engineering Workshop | Vizuara AI Labs</span>
            <a href="https://images.openai.com/static-rsc-4/w8N6O8YyMcu9XRBlH_6lGxwiNGGljLcPY_lQz78emO1X8vjnkoIxUTxolorYXTHYbcikB8VCJ-Ae8rYl3yrFkZZ7sWfrsi5EYkEaieewthVdc-vUBx_YHmbMg9MT6qtdNlPbbkZMaXgCfPR8V9SzFIoPcrGi5rqEj8QsvCTnlpE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">context-engineering.vizuara.ai</span>
            <a href="https://context-engineering.vizuara.ai/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Tasks:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Collect PDF and Markdown documents.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Extract text.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clean document content.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Split documents into chunks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generate embeddings.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store vectors in Qdrant or Chroma.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement semantic search.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retrieve relevant context.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Connect the retrieval system to an LLM.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generate answers using retrieved documents.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: AI data preparation, vector databases, RAG, and knowledge retrieval.
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Lab 7 — Implement AI Knowledge Index Refreshing</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective: Build an incremental document indexing system.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Tasks:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a document repository.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Track document versions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detect document changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reprocess changed documents.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Regenerate embeddings.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Update the vector database.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove obsolete document chunks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Evaluate retrieval quality.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: incremental indexing, knowledge lifecycle management, and AI data quality.
          </p>
        </div>
      );
    case 28:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Practical Labs, Assessment &amp; Capstone
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              28. Module 22 — Final Assessment
            </h2>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Conceptual Questions</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a data product?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the difference between a dataset and a data product.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data mesh?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the four principles of data mesh.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is domain-oriented data ownership?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a data contract?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain data serving architectures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a data mart?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the role of a semantic layer.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Differentiate OLTP and OLAP.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a Data API?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain caching strategies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Reverse ETL?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain graph databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are the major NoSQL database types?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is machine learning data engineering?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is feature engineering?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain feature store architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Differentiate offline and online feature stores.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is training-serving skew?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain point-in-time correct feature retrieval.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are embeddings?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a vector database?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain RAG ingestion architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How are AI knowledge indexes refreshed?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is AI data governance?
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Advanced Interview Questions</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you design a Customer 360 data product?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you implement domain-oriented data ownership in a large enterprise?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you design a low-latency data serving architecture?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you expose warehouse data through a REST API?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you prevent stale data in a Redis caching layer?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you implement Reverse ETL for customer churn scores?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you design a feature store for real-time fraud detection?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you prevent training-serving skew?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you prevent data leakage during feature retrieval?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you design a RAG ingestion pipeline for 10 million documents?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you refresh embeddings when documents change?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you prevent unauthorized document retrieval in RAG?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you evaluate vector retrieval quality?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you choose between a relational database, graph database, and NoSQL database for a data product?
          </p>
        </div>
      );
    case 29:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Practical Labs, Assessment &amp; Capstone
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              29. Final Capstone Project &amp; Key Takeaways
            </h2>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Modern Data Stack for AI</span>
            <a href="https://images.openai.com/static-rsc-4/qgYfTiXwkAwkTh_tt4t5tDsNv0liSxrP0mYrO1kL2YqanxH37co05sQvMv_5btjYO9yxmyhSVKUGc5cVc0GD3BF4hmVA4SCLd_Y0rCDpsji39O0VUspnVClaCYkwqrtDTqNjQapj04tA0GM_QGfaAFtYnRW7sX7bbhl2479qNqI?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">linkedin.com</span>
            <a href="https://www.linkedin.com/pulse/modern-data-stack-ai-padhy-talks-about-cloud-genai-cybersecurity-s06kc?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Project: Build a Unified Data Products and AI Serving Platform</span>
            </h4>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Business Scenario</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A large e-commerce company wants to build a platform that supports:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business analytics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer intelligence
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product recommendations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer churn prediction
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AI-powered customer support
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Operational application integration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The company stores data across:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CRM
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            E-commerce applications
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer support systems
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Required Architecture</span>
            </h4>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Product & AI Serving Architecture Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Operational Sources
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Ingestion
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Lake / Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Domain Products (Sales Mart, Customer 360, Inventory) &amp; Feature Store &amp; Reverse ETL &amp; Vector DB
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Serving (BI Dashboards, Data APIs, Churn Prediction, RAG Assistant)
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Governance &amp; Observability
              </div>
            </div>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Project Deliverables</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Enterprise data product architecture.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data mesh domain ownership design.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer 360 data product.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales analytical data mart.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Semantic layer and business metrics.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data serving API.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redis caching implementation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reverse ETL integration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Machine learning feature engineering pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Offline and online feature store.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Point-in-time correct training dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RAG document ingestion pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Vector database and semantic retrieval.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incremental knowledge index refresh.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AI data quality and governance framework.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring dashboard.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Technical documentation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            End-to-end demonstration.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Module 22 — Key Takeaways</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            By completing this module, students should understand how modern data engineering extends beyond ingestion, storage, and transformation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The module teaches how to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Treat data as a managed business product.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Decentralize data ownership through Data Mesh.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Serve data through analytical and operational architectures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standardize business metrics using semantic layers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deliver data through APIs and reverse ETL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Manage graph and NoSQL data systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Prepare reliable features for machine learning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain consistent training and inference data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build embedding and vector retrieval pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design RAG knowledge ingestion and refresh systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain AI data quality, governance, and access controls.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The central principle of Module 22 is that data engineering creates business value when trusted data becomes accessible, reusable, and actionable for analytics, applications, and AI systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This module also creates a natural foundation for a final Data Engineering capstone involving enterprise architecture, data products, machine learning pipelines, and AI-powered applications.
          </p>
        </div>
      );
    default:
      return (
        <div className="p-8 text-center text-stone-500 font-mono text-sm">
          Select a section from the syllabus to view the specification.
        </div>
      );
  }
});

export default DataProductsSection;
