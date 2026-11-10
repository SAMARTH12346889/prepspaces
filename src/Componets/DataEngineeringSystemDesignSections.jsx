// projectx/src/Componets/DataEngineeringSystemDesignSections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, Activity, Zap, ShieldAlert, CheckCircle, RefreshCw, Layers, Gauge, Database, Cpu, HardDrive, Award, Trophy, Rocket, Terminal, GitBranch, Server, Cloud, Sparkles } from 'lucide-react';

export const systemDesignSectionsMeta = [
  { id: 0, title: "Module 23: Data Engineering System Design and Final Capstone Overview", category: "Course Capstone Overview" },
  { id: 1, title: "1. Understanding Business and Technical Requirements", category: "Part A · System Design Foundations" },
  { id: 2, title: "2. Identifying Data Sources and Consumers", category: "Part A · System Design Foundations" },
  { id: 3, title: "3. Choosing Batch vs Streaming Architecture", category: "Part A · System Design Foundations" },
  { id: 4, title: "4. Estimating Data Volume and Throughput", category: "Part A · Quantitative Architecture" },
  { id: 5, title: "5. Storage Capacity Estimation", category: "Part A · Quantitative Architecture" },
  { id: 6, title: "6. Data Ingestion Design", category: "Part A · Ingestion & Processing Architecture" },
  { id: 7, title: "7. Processing Architecture Selection", category: "Part A · Ingestion & Processing Architecture" },
  { id: 8, title: "8. Warehouse vs Lakehouse Decisions", category: "Part A · Storage & Platform Decisions" },
  { id: 9, title: "9. Scalability and Partitioning Strategies", category: "Part A · Scalability & Reliability" },
  { id: 10, title: "10. Fault Tolerance and Disaster Recovery", category: "Part A · Scalability & Reliability" },
  { id: 11, title: "11. Security and Governance Architecture", category: "Part A · Governance & Trade-offs" },
  { id: 12, title: "12. Performance and Cost Trade-offs", category: "Part A · Governance & Trade-offs" },
  { id: 13, title: "13. Designing End-to-End Data Systems", category: "Part A · End-to-End System Design" },
  { id: 14, title: "14. Architecture Documentation and Technical Reviews", category: "Part A · End-to-End System Design" },
  { id: 15, title: "15. Capstone Project Overview (ShopSphere Platform)", category: "Part B · Final Capstone Project" },
  { id: 16, title: "16. Capstone Architecture", category: "Part B · Final Capstone Project" },
  { id: 17, title: "17. Capstone Implementation — Step by Step (Steps 1–15)", category: "Part B · Final Capstone Project" },
  { id: 18, title: "18. Final Capstone Deliverables & Success Criteria", category: "Part B · Final Capstone Project" },
  { id: 19, title: "19. Ten-Stage Project Roadmap", category: "Part C · Practical Project Roadmap" },
  { id: 20, title: "20. Primary Technology Stack for PrepSpaces", category: "Part D · Recommended Technology Stack" },
  { id: 21, title: "21. Why Each Primary Technology Is Selected", category: "Part D · Recommended Technology Stack" },
  { id: 22, title: "22. Cost-Conscious Learning Environment", category: "Part D · Recommended Technology Stack" },
  { id: 23, title: "23. Recommended Module Structure", category: "Part E · Assessment & Learning Structure" },
  { id: 24, title: "24. Suggested Grading Structure", category: "Part E · Assessment & Learning Structure" },
  { id: 25, title: "25. Data Engineering Career Paths", category: "Part F · Career Outcomes & Graduation" },
  { id: 26, title: "26. Final Learning Outcomes & Course Graduation", category: "Part F · Career Outcomes & Graduation" }
];

export const SystemDesignSection = memo(function SystemDesignSection({ sectionId }) {
  switch (sectionId) {
    case 0:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Course Capstone Overview
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              Module 23: Data Engineering System Design and Final Capstone Overview
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 23 — Data Engineering System Design and Final Capstone
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Databricks Pipeline Architecture on AWS: Data Flow from Source to BI | Sukhen Tiwari posted on the topic | LinkedIn</span>
            <a href="https://images.openai.com/static-rsc-4/5-1BfanbPD9uIaa7He7WmClhVsdTpqvN1HTwhBY1qQ1uM1u7uTE0JEll8muHLd8JG-GV7SS-zp6b2jeC_u6qQ33ynwTXi845EvpH_hfH0F4IDMM5E6J0RP-c8wO4h6rh6ElxuLcyTQXhS-V-Va5w8RAL3TTuyKtKGl95jzeoyUw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Sessionization in Real-time Using Structured Streaming</span>
            <a href="https://images.openai.com/static-rsc-4/_5bVzUwPq4CiwK6L8XZxJ5mBxscjPSF-Ensz91rhSsxe5q5KzLiVa3-WtXKdMiCREkTY4dMp7lSw0qy-kqG9E0X7MaI7QyIAmZOOdkEJiNsRGUgdXNXHN8DtSDJzrDsq3vq8fpviO4oKyuwNChLkiTpOBlryG3JFomyJJ2e70W4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Data Engineering System Design: Clickstream Data Into a Modern Lakehouse | by Sarath Sagi | itversity | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/iHBkyaqMubA6fRriEKe0hFzceBmKN7XmftsihuT5DBKJjj40rRmXK7jkU5ZaVJnunPya9mxbOgGaezQrRECA1mWCQ3qBZfqggxz14Fl_MAqVyDe9DPWZFZf8Os9xk06DUthSj8Xjt1i1VGavGQJVRvOHu-hYfT7hGYMVXTyhQBY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">11</span>
            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">This is the final module of the Data Engineering course. Its purpose is to teach students how to design, build, evaluate, and explain a complete production-style data platform.</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Throughout the course, students have learned individual technologies such as Python, SQL, PostgreSQL, Apache Spark, Kafka, Airflow, dbt, and lakehouse storage. In this module, they learn how to combine those technologies into a coherent system.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The central question of Data Engineering System Design is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How do we design a reliable, scalable, secure, maintainable, and cost-effective system that transforms raw data into valuable business information?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A production data engineer must understand more than how to write a pipeline. They must understand the business problem, choose the right architecture, estimate infrastructure requirements, anticipate failures, and make trade-offs.
          </p>
          <div className="mt-8 mb-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <h3 className="text-base sm:text-lg font-extrabold text-orange-400 flex items-center gap-2 font-mono tracking-wide">
              <Sparkles size={18} className="text-orange-400" />
              <span>Part A — Data Engineering System Design</span>
            </h3>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · System Design Foundations
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              1. Understanding Business and Technical Requirements
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Before choosing technologies, a data engineer must understand what the business actually needs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A common mistake is beginning a project by saying:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            "We should use Kafka, Spark, Airflow, and a data lake."
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            That is technology-first thinking.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A better approach is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            "What business problem are we solving, what data do we have, and what outcomes must the system deliver?"
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">1.1</span>
              <span>Business requirements</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business requirements describe what the organization wants to achieve.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: An e-commerce company wants to build a data platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Its business requirements might include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Understand daily sales revenue.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Track customer purchasing behavior.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify popular products.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitor payment failures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detect inventory shortages.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provide dashboards to business teams.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support customer segmentation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generate reports for management.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These requirements define the business value of the platform.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">1.2</span>
              <span>Functional requirements</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Functional requirements describe what the system must do.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Requirement</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data ingestion</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Collect orders, customers, products, and payments</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data transformation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Clean, standardize, and enrich source data</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data storage</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Store historical and processed information</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Analytics</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Calculate revenue, order count, and customer metrics</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Dashboard</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provide business users with analytical reports</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data quality</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Detect invalid, missing, or duplicate records</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data access</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Allow authorized users to query data</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">1.3</span>
              <span>Non-functional requirements</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Non-functional requirements describe how well the system must operate.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Requirement</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Latency</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Dashboard data should be updated within 5 minutes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Availability</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analytical services should achieve 99.9% availability</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Scalability</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Support growth from 100,000 to 100 million orders</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Reliability</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Recover automatically from temporary pipeline failures</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Security</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Protect customer and payment-related information</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Maintainability</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Pipelines should be easy to modify and debug</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Cost</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Infrastructure should remain within the monthly budget</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">1.4</span>
              <span>Example requirement document</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For an e-commerce platform:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Business Goal:   Provide real-time sales analytics.
Data Sources:    PostgreSQL, REST APIs, payment events.
Data Volume:     2 million orders per day.
Freshness:       Real-time dashboards should update within 5 minutes.
                 Historical reports can update hourly.
Consumers:       Business analysts, executives, marketing teams.
Storage:         Object storage with lakehouse tables.
Processing:      Batch and streaming.
Security:        Role-based access control and encryption.
Reliability:     Automated retry, monitoring, and recovery.`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This requirement document becomes the foundation of architecture design.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · System Design Foundations
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              2. Identifying Data Sources and Consumers
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data platform usually receives information from multiple systems and serves different users.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">🎯Ultimate cheatsheet for Data Engineering System Design interview.</span>
            <a href="https://images.openai.com/static-rsc-4/xoiT1ooaspPU76hp9f4WHpxgk52_FozPEofp8JNR-Xs0cTC2MVafuXOLmqXm7TwnHWBynmWfeYCy3fWGs06PP710_NcWfNalYBfV-gJ3LBpJtMe5wgSK7HR-zMYEANrOJCZOxyH6AF7t0Wqb7T6_DMxkCZueT6rG7c9aVq-knMA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">blog.surfalytics.com</span>
            <a href="https://blog.surfalytics.com/p/ultimate-cheatsheet-for-data-engineering?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">2.1</span>
              <span>Data sources</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data sources are systems from which data is collected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Common sources include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Relational databases
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            MySQL
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SQL Server
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Oracle Database
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            REST APIs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment gateways
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CRM systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing platforms
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Third-party business services
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Event streams
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer clicks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product views
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Order events
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment events
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Files
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CSV
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            JSON
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            XML
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Excel files
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Application logs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Server logs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Error logs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            User activity logs
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">2.2</span>
              <span>Data consumers</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consumers are the systems or people who use the processed data.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Consumer</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Business analysts</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Analytical tables</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Executives</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Revenue and performance dashboards</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data scientists</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Historical datasets for ML</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Applications</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data through APIs</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Marketing teams</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer segmentation</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Finance teams</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Revenue and payment reconciliation</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Machine learning systems</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Feature data and training datasets</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">2.3</span>
              <span>Why consumer identification matters</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Different consumers require different data architectures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A dashboard may need aggregated data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A machine learning model may need historical features.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An operational application may require low-latency data access.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A finance report may require highly accurate, reconciled data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            One data representation does not necessarily satisfy every consumer.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · System Design Foundations
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              3. Choosing Batch vs Streaming Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineers must determine whether data should be processed periodically or continuously.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">How Drop used the Amazon EMR runtime for Apache Spark to halve costs and get results 5.4 times faster | AWS Big Data Blog</span>
            <a href="https://images.openai.com/static-rsc-4/A6tX55u-uw811cBjLbggiEdrKMi6i0LoAeNHMlamrQUn0PL4aIQiLhirXtLRZWhXfZxQvGWmNrmDrmHSBj1B7eZbsLow_JIa4UaZphuA-Uq4osNyWTZ76VCtn0aNEjUklmbRPmQd5GgRXkUpneMdxKgkXQFxAA6QTg7YrxW0KPU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">How to Build Real-Time Apache Kafka® Dashboards That Drive Action</span>
            <a href="https://images.openai.com/static-rsc-4/5wjDLmL8tOyxifQ7qIeUZ2DmDgJS4Z4gvtCaKlhI3Ludzg6_4_VHCC6JqdPKZG8-sbLzNJ49EUkUhy17BMLVy8iBjtn3F7J57NRQ98sLYRcy5BMRJjuMAtBAnOfKvc-ebhG4HzB1Wny5i62DDf5EuTbzt6NvJ9fyW51aMzehcfY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Batch vs stream data processing: a comprehensive guide for developers - About Amazon India</span>
            <a href="https://images.openai.com/static-rsc-4/TUxP4XiOJvMBHUPdjmAZXZPA90KdVFO7ToxQHlreqL-XTk3n-6EMEe2kw0Q58JTema0w40wqFdHEo1kAncR0MmGsmFXEkN0chlhaMsj3gLNleA3-Xr--K8ARcx3sc7IBrJ-HEIgfiCsoIad9Bdi50diuyDRmz3vbmNJSEAOAyKo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            8
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">3.1</span>
              <span>Batch processing</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Batch processing collects data over a period and processes it together.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An e-commerce platform processes all orders from the previous day at midnight.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> System Architecture & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                PostgreSQL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Extract orders
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Batch transformation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Daily revenue dashboard
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Typical applications:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Daily sales reporting
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monthly financial reports
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Historical data analysis
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Large-scale data transformation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Periodic ML model training
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Advantages:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Easier to develop and debug
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Efficient for large datasets
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Often simpler to manage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can be cost-effective
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Disadvantages:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data is not immediately available
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing delays exist
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Large batches can create resource spikes
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">3.2</span>
              <span>Streaming processing</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Streaming continuously processes events as they arrive.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            When a customer places an order, the system publishes an event to Kafka.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> System Architecture & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer places order
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Order event
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Apache Kafka
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Stream processing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Real-time analytics
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Typical applications:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fraud detection
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Live dashboards
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inventory updates
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clickstream analytics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Real-time monitoring
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Advantages:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Low latency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Continuous updates
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suitable for real-time applications
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Disadvantages:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            More complex architecture
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Requires event-time and late-event handling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            More difficult debugging
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Requires careful recovery and state management
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">3.3</span>
              <span>Batch vs streaming comparison</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Batch</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Streaming</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Processing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Periodic</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Continuous</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Latency</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Minutes to hours</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Milliseconds to seconds</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Complexity</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Usually lower</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Usually higher</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Cost</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Often lower</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Can be higher</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Typical tool</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Spark batch</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Kafka + Flink</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Use case</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Daily reports</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Real-time fraud detection</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">3.4</span>
              <span>Lambda and Kappa architecture</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Lambda architecture combines batch and streaming processing.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Examples of the modern data architecture | Theory</span>
            <a href="https://images.openai.com/static-rsc-4/V6amFkdEFFNZJD9QAKxvq0dVsfGjaEDUMxrd3ByuZWA4JD0IRmekKy-KiIk5IrT_0oj-9CfN9g_AzLRbooC7kU5tZApes9LkcsRhJx7NPsBPSHGpH8-sqiLK9fPWNmk7AnTW_zIoXXP_nR2UWTnkT1yJhM1ZE6Tjn_-NhvE6Fd8?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">campus.datacamp.com</span>
            <a href="https://campus.datacamp.com/courses/understanding-modern-data-architecture/introduction-to-modern-data-architecture?ex=4&utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Batch layer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Speed layer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Serving layer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The batch layer provides accurate historical results. The speed layer provides low-latency results.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A major drawback is that logic may be duplicated between batch and streaming pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kappa architecture focuses on stream processing. Historical data can be replayed through the same streaming pipeline when reprocessing is required.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kappa architecture can reduce duplicated processing logic, but it still requires robust replay and event retention.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">3.5</span>
              <span>Architecture decision example</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a company requires:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Daily revenue reports: batch processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Live inventory updates: streaming
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer lifetime value: batch or scheduled analytical processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment fraud alerts: streaming
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The correct solution may be a hybrid architecture rather than forcing every workload into batch or streaming.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · Quantitative Architecture
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              4. Estimating Data Volume and Throughput
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            System design requires quantitative thinking.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Engineers should estimate:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Events per second
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records per day
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Average record size
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Peak traffic
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data growth
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage requirements
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing capacity
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">4.1</span>
              <span>Events per second</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose an e-commerce application generates 2 million orders per day.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Average orders per second:
          </p>
          <div className="my-3 p-3.5 rounded-xl bg-orange-50/50 border border-orange-200/70 text-stone-800 font-mono text-center text-sm shadow-sm overflow-x-auto">
            <span>\(\frac&#123;2,000,000&#125;&#123;86,400&#125; \approx 23.15\)</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The average is approximately 23 orders per second.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, average throughput is not enough.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            During a sale, traffic may increase by 20 times.
          </p>
          <div className="my-3 p-3.5 rounded-xl bg-orange-50/50 border border-orange-200/70 text-stone-800 font-mono text-center text-sm shadow-sm overflow-x-auto">
            <span>\(23.15 \times 20 \approx 463\)</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The system may need to handle approximately 463 orders per second during peak periods.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is why peak traffic must be considered in architecture design.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">4.2</span>
              <span>Storage capacity estimation</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Orders per day: 2 million
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Average order record size: 1 KB
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Daily raw storage:
          </p>
          <div className="my-3 p-3.5 rounded-xl bg-orange-50/50 border border-orange-200/70 text-stone-800 font-mono text-center text-sm shadow-sm overflow-x-auto">
            <span>\(2,000,000 \times 1KB = 2GB\)</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Annual raw storage:
          </p>
          <div className="my-3 p-3.5 rounded-xl bg-orange-50/50 border border-orange-200/70 text-stone-800 font-mono text-center text-sm shadow-sm overflow-x-auto">
            <span>\(2GB \times 365 = 730GB\)</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Now suppose the platform retains five years of data.
          </p>
          <div className="my-3 p-3.5 rounded-xl bg-orange-50/50 border border-orange-200/70 text-stone-800 font-mono text-center text-sm shadow-sm overflow-x-auto">
            <span>\(730GB \times 5 = 3.65TB\)</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is a simplified estimate. Actual storage requirements depend on compression, metadata, indexes, replication, file formats, and additional source tables.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">4.3</span>
              <span>Compression</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose raw JSON occupies 2 GB per day, but Parquet compression reduces it to 500 MB.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The storage reduction is:
          </p>
          <div className="my-3 p-3.5 rounded-xl bg-orange-50/50 border border-orange-200/70 text-stone-800 font-mono text-center text-sm shadow-sm overflow-x-auto">
            <span>\(\frac&#123;2GB - 0.5GB&#125;&#123;2GB&#125; \times 100 = 75\%\)</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Columnar formats such as Parquet can significantly reduce analytical storage costs.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">4.4</span>
              <span>Important estimation questions</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Before designing a platform, ask:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How many records are generated daily?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the average record size?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the maximum peak traffic?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How fast is data growing?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How long must historical data be retained?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How many concurrent queries are expected?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How much data must be processed per query?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the expected number of users?
          </p>
        </div>
      );
    case 5:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · Quantitative Architecture
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              5. Storage Capacity Estimation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage planning is not limited to raw data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data platform may store:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Raw source data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cleaned data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Enriched data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytical tables
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Indexes and metadata
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Historical snapshots
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backups
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Temporary processing data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose the system stores:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Layer</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Estimated size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Raw data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">3 TB</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Silver data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">2 TB</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Gold data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">1 TB</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Historical snapshots</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">2 TB</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Backup data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">4 TB</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Total</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">12 TB</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The storage architecture should account for all of these components.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Storage design considerations</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compression
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retention policies
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data lifecycle management
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Replication
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup frequency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            File size optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata overhead
          </p>
        </div>
      );
    case 6:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · Ingestion &amp; Processing Architecture
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              6. Data Ingestion Design
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data ingestion is the process of collecting data from source systems and bringing it into the data platform.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Data Engineering System Design: Building a CDC-Based Pipeline from OLTP to a Lakehouse | by Sarath Sagi | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/cJW4YDppML1YQu5mEBDeGTcoVA4_eDC_i39SmtnkgWYWrHbfG0q9FRdrOlwzPVA4sJ2evbfdXT2T8HkFcOKjhor6eyjA1Aj_wD7P1j36_PjlqwoQKoz_eFB8g1pDriWqeu8xbKviQUlawTOKTIjzkwTEdNrRzC_guRWh6Pth85o?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/itversity/data-engineering-system-design-building-a-cdc-based-pipeline-from-oltp-to-a-lakehouse-e705c9be7ea6?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">6.1</span>
              <span>API ingestion</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data is extracted through REST APIs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import requests

response = requests.get(
    "https://api.example.com/orders",
    timeout=30
)
response.raise_for_status()
orders = response.json()
print(orders)`}</code>
            </pre>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Production considerations:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pagination
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rate limits
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retries
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incremental extraction
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API schema changes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Error handling
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">6.2</span>
              <span>Database ingestion</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data is extracted from databases such as PostgreSQL.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Common methods:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Full table extraction
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incremental extraction
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Timestamp-based extraction
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Change Data Capture
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">6.3</span>
              <span>Change Data Capture</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CDC captures database changes such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            INSERT
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            UPDATE
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DELETE
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> System Architecture & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                PostgreSQL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                CDC connector
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Kafka
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data processing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Lakehouse
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CDC is useful when continuously synchronizing operational databases with analytical systems.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">6.4</span>
              <span>Ingestion design requirements</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A robust ingestion pipeline should support:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incremental processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checkpointing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Duplicate handling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema evolution
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retry mechanisms
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data validation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery from failures
          </p>
        </div>
      );
    case 7:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · Ingestion &amp; Processing Architecture
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              7. Processing Architecture Selection
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The processing architecture determines how raw data is transformed.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">7.1</span>
              <span>Processing options</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Architecture</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Best suited for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Python scripts</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Small and moderate workloads</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">SQL transformations</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Relational analytical processing</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Apache Spark</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Distributed batch processing</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Apache Flink</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Stateful stream processing</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">dbt</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Warehouse transformations</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">DuckDB</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Local analytical workloads</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">7.2</span>
              <span>Apache Spark architecture</span>
            </h3>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Spark Architecture Explained: Understanding the Difference Between Driver, Executors, and Cluster Manager</span>
            <a href="https://images.openai.com/static-rsc-4/DKh1CKAVmyJSwhfN7Vl388a-1HtBdxQiJl1smfr-YYF4v0eay8qp4yxY1qa0zOk5OsHJovGf0weJTE8BQZkRK9l-7neZwER7Z_QdMeM7qtvyVqFst_CEovET25lmoGR9yeoGDzPvk3r-Hqrklg3lFDAvj0jqrd5gfKTtl0F2BYM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">deeplearningnerds.com</span>
            <a href="https://www.deeplearningnerds.com/spark-architecture-explained-understanding-the-difference-between-driver-executors-and-cluster-manager/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Spark generally contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Driver
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cluster manager
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Executors
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tasks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Jobs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stages
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The driver coordinates execution. Executors process partitions of data in parallel.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">7.3</span>
              <span>Choosing the right processing engine</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For a small CSV file:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import pandas as pd

df = pd.read_csv("orders.csv")
print(df.groupby("product_id")["amount"].sum())`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pandas may be sufficient.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For a large distributed dataset, Spark may be more suitable.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For real-time stateful event processing, Flink may be appropriate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The engineering principle is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Choose the simplest architecture that satisfies the requirements, and introduce complexity only when necessary.
          </p>
        </div>
      );
    case 8:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · Storage &amp; Platform Decisions
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              8. Warehouse vs Lakehouse Decisions
            </h2>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Data Architecture Modernization: Strategic Guide (2026)</span>
            <a href="https://images.openai.com/static-rsc-4/i59pt00AgnTh5b1sF7wXVhEKuEIUceK2sA8pmEH5S27ZE8bOZbOYq8GgxTwMhb-XL2Ub2nOzVQlDwt-Gt9E5cYv7P81Igg1IjxOA7BGIx7zf4Qq7vwQ_phi9rORraWwnRFny2Lx_2BGe_rp-NvTWu8TGr8_FIYAG66dcmTPRRuo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Azure Synapse Analytics: Data Virtualization and PolyBase | by Ayşegül Yiğit | Nerd For Tech | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/LT1jlz0K1W-_-PbgaLDfBMPouqldrJYLZ8ItSFaU_O54K7D8S7r3-cfgp7_KfCR_EDrS3VJ2BfS-uiBZ0aH83nPcsDfg0WHI_zb1iWethL2mAox8xp01RvBqqECty16jMMIEH9vX4UQk60YNTAnJDVMFMFOvawVDSvdcR5yAa_I?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">The Unstructured Data Problem | Felicis</span>
            <a href="https://images.openai.com/static-rsc-4/9Y0MVJbx7jFqxQk2gP-kgpotL4VmhEucyQ0XUhILNjr5PxXShIQ2At8WCExNQpdNutdlHsuas1A3cEloL0vRddRUz10j4JE2_D-ssGh-r0lObmwrkZv0Msc9kP30UWZMcOC7cY_zbEct9rUQqG8LbHRClVzq9cHG8mOF1RmCiCE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            7
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">8.1</span>
              <span>Data warehouse</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data warehouse is optimized for structured analytical data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Characteristics:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Structured schemas
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SQL analytics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business reporting
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data modeling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytical queries
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Examples include Snowflake, BigQuery, and Amazon Redshift.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">8.2</span>
              <span>Data lake</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data lake stores large amounts of data in its original or transformed form.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It may contain:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Structured data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Semi-structured data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unstructured data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Examples include object-storage-based systems using Amazon S3, Azure Data Lake Storage, or Google Cloud Storage.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">8.3</span>
              <span>Data lakehouse</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A lakehouse combines data lake storage with table-management capabilities.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Technologies include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Iceberg
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Delta Lake
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Hudi
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Lakehouse capabilities can include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ACID transactions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema evolution
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Snapshot-based querying
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Time travel
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata management
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">8.4</span>
              <span>Decision comparison</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Requirement</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Warehouse</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Lakehouse</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">BI and SQL analytics</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Excellent</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Excellent</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Raw data storage</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Less flexible</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Excellent</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Structured data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Excellent</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Excellent</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Unstructured data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Limited or integration-dependent</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">More flexible</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Open storage formats</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Platform-dependent</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Commonly supported</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ML data workloads</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Possible</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Often well suited</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A company may use both a warehouse and a lakehouse depending on its workloads, governance, cost, and existing infrastructure.
          </p>
        </div>
      );
    case 9:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · Scalability &amp; Reliability
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              9. Scalability and Partitioning Strategies
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scalability means the system can handle increasing data volume, users, or processing requirements.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">9.1</span>
              <span>Vertical scaling</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Increase the resources of an individual machine.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            More CPU
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            More RAM
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Larger storage
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Advantages:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Simple
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            May require fewer architectural changes
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Limitations:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hardware limits
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Potentially expensive
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            May create a single-machine bottleneck
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">9.2</span>
              <span>Horizontal scaling</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Add more machines or processing nodes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> System Architecture & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Worker 1
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                -&gt;  Partition 1 Worker 2
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                -&gt;  Partition 2 Worker 3
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                -&gt;  Partition 3 Worker 4
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                -&gt;  Partition 4
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Horizontal scaling is commonly used in distributed data systems.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">9.3</span>
              <span>Partitioning</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitioning divides data into smaller logical or physical groups.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: Partition orders by date.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`orders/
  year=2026/
    month=01/
    month=02/
    month=03/`}</code>
            </pre>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Advantages:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Faster queries through partition pruning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Easier retention management
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Improved parallel processing
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">9.4</span>
              <span>Partitioning strategies</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Date-based partitioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Range partitioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hash partitioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            List partitioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Composite partitioning
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">9.5</span>
              <span>Partitioning mistakes</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Over-partitioning can create thousands of small files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Poor partition choices can also result in:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data skew
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Uneven workload
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Slow metadata operations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inefficient queries
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitioning should be based on query patterns and data distribution.
          </p>
        </div>
      );
    case 10:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · Scalability &amp; Reliability
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              10. Fault Tolerance and Disaster Recovery
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production systems must assume that failures will occur.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Potential failures include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Source database unavailable
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kafka broker failure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Spark executor failure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network interruption
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Corrupted data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud service outage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accidental deletion
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">10.1</span>
              <span>Fault tolerance</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fault tolerance is the ability of a system to continue operating despite component failures.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Techniques:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Replication
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checkpointing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retry
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Idempotency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed execution
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dead-letter queues
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery mechanisms
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">10.2</span>
              <span>Disaster recovery</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Disaster recovery is the process of restoring systems after a major disruption.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data center outage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Regional cloud outage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accidental data deletion
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Critical storage corruption
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">10.3</span>
              <span>RPO and RTO</span>
            </h3>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">RTO and RPO in Cloud Disaster Recovery as a Service (DRaaS)</span>
            <a href="https://images.openai.com/static-rsc-4/_9rH4J3tIbQBKngQrzQWzONZ1vQboAefMUESMoeXwFXtRp08enw0OsQcKgXdzYpD4pcD44aEMnlTpmahXWA7mdjZ7N5S9Cx-Y-gI04RwEY7QY-l4uQPM8PpZH6IS9-wAGykMj5J3xG81rQyShq9AevnuVMsDc5kjrodraXFhsiU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">exabytes.my</span>
            <a href="https://www.exabytes.my/blog/rto-and-rpo-for-disaster-recovery/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery Point Objective (RPO)
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The maximum acceptable amount of data loss measured in time.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An RPO of 15 minutes means the business can tolerate losing up to approximately 15 minutes of data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery Time Objective (RTO)
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The maximum acceptable time required to restore a service.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An RTO of 2 hours means the service should be restored within 2 hours after a failure.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">10.4</span>
              <span>Example recovery plan</span>
            </h3>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> System Architecture & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Failure detected
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Alert operations team
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Identify failed component
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Restore service or fail over
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Recover checkpoint or backup
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Replay missing events
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Validate data correctness
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Resume normal processing
              </div>
            </div>
          </div>
        </div>
      );
    case 11:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · Governance &amp; Trade-offs
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              11. Security and Governance Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data engineering systems may contain sensitive business or customer information.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security must be integrated into the architecture.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">11.1</span>
              <span>Authentication</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authentication verifies the identity of a user or service.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Password-based authentication
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            OAuth
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Service accounts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            IAM identities
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">11.2</span>
              <span>Authorization</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Authorization determines what an authenticated identity is allowed to do.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Role</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Access</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data Engineer</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Develop and operate pipelines</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Analyst</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Query approved analytical tables</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Finance Analyst</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Access financial data</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Administrator</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Manage platform permissions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">11.3</span>
              <span>Data protection</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Important techniques:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption at rest
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption in transit
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Role-based access control
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Column-level security
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data masking
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tokenization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secrets management
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">11.4</span>
              <span>Data governance</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Governance establishes policies for how data is managed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It includes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data ownership
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data classification
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data lineage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data retention
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Access policies
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compliance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metadata management
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A secure data platform should ensure that users only access the information they are authorized to use.
          </p>
        </div>
      );
    case 12:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · Governance &amp; Trade-offs
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              12. Performance and Cost Trade-offs
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A production data engineer must balance performance, reliability, and cost.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">12.1</span>
              <span>Performance optimization</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Potential techniques:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition pruning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Columnar storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compression
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Caching
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parallel processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Indexing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Materialized views
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Efficient joins
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">12.2</span>
              <span>Cost optimization</span>
            </h3>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Common cost components:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transfer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Streaming infrastructure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database services
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup storage
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">12.3</span>
              <span>Example</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a company runs a Spark job every hour.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The job uses a large cluster even when the data volume is small.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Potential improvements:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduce unnecessary compute resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use incremental processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid full table scans.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimize partition sizes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schedule non-urgent workloads during less expensive periods.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use autoscaling where appropriate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitor cost per processed record.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">12.4</span>
              <span>Engineering trade-off example</span>
            </h3>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Design choice</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Benefit</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Cost or drawback</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Real-time processing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Low latency</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">More complexity</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Larger cluster</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Faster processing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Higher cost</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">More replicas</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Better availability</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">More storage cost</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Frequent backups</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Lower potential data loss</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Higher storage and operational cost</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Stronger validation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Better quality</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">More processing overhead</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            There is rarely one perfect architecture. The correct architecture is the one that satisfies the requirements within acceptable constraints.
          </p>
        </div>
      );
    case 13:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · End-to-End System Design
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              13. Designing End-to-End Data Systems
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An end-to-end data platform includes the entire lifecycle of data.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">From Billions of Events to Milliseconds of Insight: Architecting Swiggy’s Real-Time AI Data Platform | by Viktor K | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/1qLGE-56mc4wAjv5aqumOd8Zv3NRozXIZXXwDiuCSeh_xLms9vzEHqr5Q5wFxvqtCRkxe5PiiVi1qIDZ8ax4qOnJa6UV2d43xmAr_xoVEh_w20fShV9ZazU4huSnp7dXp3kTNSPOnTZqyl0mHj_jjR9w-OHWMTIRQFhPEBigPjw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40vsanmed/from-billions-of-events-to-milliseconds-of-insight-architecting-swiggys-real-time-ai-data-a43a2697cdee?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Typical architecture
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> System Architecture & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                DATA SOURCES ┌──────────┼───────────┐ │ │ │ PostgreSQL REST APIs Application Events │ │ │ └──────────┼───────────┘
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                DATA INGESTION CDC / API / Kafka Connect
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                KAFKA
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                DATA PROCESSING Spark / Flink / Python
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                OBJECT STORAGE Parquet + Iceberg
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                BRONZE LAYER
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                SILVER LAYER
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                GOLD LAYER
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                dbt DATA MODELS
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ANALYTICAL DATA MARTS
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                BI / APIs / ML SYSTEMS
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Supporting infrastructure:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Airflow      → Workflow orchestration
Monitoring   → Metrics, logs, alerts
Data Quality → Automated validation
Security     → IAM, encryption, permissions
Governance   → Catalog, lineage, policies
CI/CD        → Testing and deployment`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Bronze, Silver, and Gold layers
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Bronze — Raw data</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contains ingested source data.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Goals:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Preserve original information
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain source traceability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support reprocessing
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Silver — Cleaned data</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contains validated and standardized information.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Goals:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove duplicates
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Correct data types
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standardize formats
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Handle invalid records
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Gold — Business-ready data</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contains analytical datasets.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Goals:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business metrics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Aggregations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data marts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reporting tables
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This layered approach is often called the Medallion Architecture.
          </p>
        </div>
      );
    case 14:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part A · End-to-End System Design
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              14. Architecture Documentation and Technical Reviews
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A production engineer must be able to explain the system to other engineers and stakeholders.
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">14.1</span>
              <span>Architecture documentation</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Documentation should contain:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business objectives
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Functional requirements
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Non-functional requirements
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data source inventory
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Architecture diagram
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data flow
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage design
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing design
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data models
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security architecture
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failure and recovery strategy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring design
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost estimation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deployment instructions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Known limitations
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">14.2</span>
              <span>Technical architecture review</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An architecture review evaluates whether the design is appropriate.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Questions include:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Does the architecture satisfy business requirements?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can it handle expected peak traffic?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What happens if Kafka becomes unavailable?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How are duplicate events handled?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How is data quality enforced?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can historical data be reprocessed?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Are sensitive data fields protected?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can the system scale without redesign?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Are infrastructure costs acceptable?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Is the system maintainable?
          </p>
          <div className="mt-6 mb-3 pt-3 border-t border-stone-200/60 first:border-t-0 first:pt-0">
            <h3 className="text-base sm:text-lg font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <span className="text-orange-600 font-mono text-sm">14.3</span>
              <span>Architecture Decision Records (ADRs)</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An ADR documents an important architectural decision.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Decision:      Use Apache Iceberg for lakehouse table management.
Context:       The platform requires ACID transactions, schema evolution, and historical snapshots.
Alternatives:  Delta Lake, Apache Hudi.
Reason:        Iceberg provides suitable open table management capabilities for the selected architecture.
Consequences:  The team must manage catalog integration and compatible query engines.`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ADRs help future engineers understand why a decision was made.
          </p>
          <div className="mt-8 mb-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <h3 className="text-base sm:text-lg font-extrabold text-orange-400 flex items-center gap-2 font-mono tracking-wide">
              <Sparkles size={18} className="text-orange-400" />
              <span>Part B — Final Capstone Project</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Real-Time E-Commerce Data Engineering Platform
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Building a Real-Time E-Commerce Analytics Pipeline | by Srujan Krishna | Feb, 2026 | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/uSpeS2B4mdC1X-6woZuTkpLuUrdX4IjOPBZOkE1vIyOoqacIy9UlCnqHeGZpuFyEuMVxoY4nxbJDnWP92DmhrbXRuCepEoNBApuCEjfBeAUBuSqr-dU6G9JZyGgHpzyFzIQ8YeSRn_76giAwO8JRT6VT1tbRPCG7nCFG4kzO9s0?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Building a Cost-Effective Data Lake with MinIO + Iceberg Multi-Tier Storage | by Soumen Ghosh | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/-h14VHlDHSMLzifZID0FilGoKfYbvb2dLKewTlayDRbvKQt0noaNNxHgSa4Q8O9qOwc6NiMkOMGNLiKrIF7IbSXRc7N1B8ocRUzDh4SmstVQQQqgrWCHcEZcVtwXAuvBJEOEliQ_ZqG63Cp0kNE8CdpBzF7shwNZEfjkXTHUlcE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">大促店铺数据更新慢？店小秘ERP【实时大屏】实现秒级更新</span>
            <a href="https://images.openai.com/static-rsc-4/qypeZlpdKxx9j3oDxI48LM50kJnnjt1xqSainvk9k54e_f6GSG7YKmGyxOyKPPExNydM90Vok7yX8WzPgZdh5-FgONt28hZ6ZuMpfKe_ya1So4HhToY9Dfb3JNH8M15bDIGw4XHQiWgGflsUxOSchqS3ITk21mMv3IMGRKhupws?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            10
          </p>
        </div>
      );
    case 15:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part B · Final Capstone Project
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              15. Capstone Project Overview (ShopSphere Platform)
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students will build a production-style data engineering platform for an e-commerce company.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The platform will collect information from multiple sources, process batch and streaming data, store historical information in a lakehouse, transform data into analytical models, and expose business insights through dashboards.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Business scenario</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Imagine an online shopping company named ShopSphere.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ShopSphere operates an e-commerce platform where customers:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Register accounts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Browse products
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Add items to carts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Place orders
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Make payments
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Receive deliveries
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Submit reviews
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The business wants a modern data platform to answer questions such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the total revenue today?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which products are selling the fastest?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How many orders are placed every minute?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which payments are failing?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which customers are returning customers?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is the average order value?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which product categories generate the most revenue?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How does inventory change over time?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which regions have the highest sales?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Are data pipelines failing or processing data late?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The students must design and implement a platform that can answer these questions.
          </p>
        </div>
      );
    case 16:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part B · Final Capstone Project
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              16. Capstone Architecture
            </h2>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Building a Cost-Effective Data Lake with MinIO + Iceberg Multi-Tier Storage | by Soumen Ghosh | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/-h14VHlDHSMLzifZID0FilGoKfYbvb2dLKewTlayDRbvKQt0noaNNxHgSa4Q8O9qOwc6NiMkOMGNLiKrIF7IbSXRc7N1B8ocRUzDh4SmstVQQQqgrWCHcEZcVtwXAuvBJEOEliQ_ZqG63Cp0kNE8CdpBzF7shwNZEfjkXTHUlcE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40soumeng.kol/building-a-cost-effective-data-lake-with-minio-iceberg-multi-tier-storage-676d3b68ae23?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Architecture flow</span>
            </h4>
          </div>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> System Architecture & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                SHOPSPHERE APPLICATION │ ┌────────────┴────────────┐ │ │ PostgreSQL REST APIs Orders, Customers, Products, Payments Payments, Inventory │ │ │ └────────────┬────────────┘ │ DATA INGESTION │ ┌──────────┴──────────┐ │ │ CDC Connector API Extractor │ │ └──────────┬──────────┘
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                APACHE KAFKA
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                STREAM PROCESSING Spark / Flink / Kafka
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                OBJECT STORAGE LAKEHOUSE Parquet + Iceberg
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                BRONZE LAYER
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                SILVER LAYER
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                GOLD LAYER
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                DBT TRANSFORMS
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                ANALYTICAL DATA MARTS
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                METABASE DASHBOARDS Supporting systems: Airflow
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Quality
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Monitoring
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Logging Security
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Governance
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                CI/CD
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Documentation
              </div>
            </div>
          </div>
        </div>
      );
    case 17:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part B · Final Capstone Project
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              17. Capstone Implementation — Step by Step (Steps 1–15)
            </h2>
          </div>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 1 — Generate or ingest e-commerce data</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students must create or collect realistic datasets.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Suggested datasets:</span>
            </h4>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Customers</span>
            </h4>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">customer_id</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">name</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">city</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">signup_date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">C001</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer A</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Mumbai</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">2026-01-10</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">C002</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer B</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Pune</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">2026-02-15</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">C003</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer C</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Delhi</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">2026-03-01</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Products</span>
            </h4>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">product_id</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">product_name</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">category</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">P001</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Laptop</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Electronics</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">65000</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">P002</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Headphones</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Electronics</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">2500</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">P003</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Shoes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Fashion</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">3000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Orders</span>
            </h4>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">order_id</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">customer_id</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">product_id</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">quantity</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">order_status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">O001</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">C001</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">P001</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">1</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Completed</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">O002</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">C002</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">P002</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">2</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Completed</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">O003</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">C003</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">P003</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">1</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Payments</span>
            </h4>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Payments Schema:
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
- Last updated timestamp`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students can generate synthetic data using Python.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The dataset should contain enough records to demonstrate realistic processing, with larger datasets used as an optional scale-testing extension.
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 2 — Extract source data using REST APIs and PostgreSQL</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students build ingestion pipelines to extract:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product records
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Orders</span>
            </h4>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Payments</span>
            </h4>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Inventory</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The ingestion process should support incremental extraction.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import requests

def extract_orders(api_url):
    response = requests.get(api_url, timeout=30)
    response.raise_for_status()
    return response.json()

orders = extract_orders("https://example.com/api/orders")
print(f"Extracted {len(orders)} orders")`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline must handle:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API errors
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pagination
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rate limits
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Missing fields
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Invalid records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retry behavior
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 3 — Implement Change Data Capture</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students configure CDC to capture PostgreSQL changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> System Architecture & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                PostgreSQL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                CDC connector
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Kafka topic: orders
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Kafka topic: customers
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Kafka topic: payments
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The system should capture:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            New orders
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Updated order status
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment status changes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inventory updates
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer changes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students should understand how database changes are translated into events.
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 4 — Stream events using Apache Kafka</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kafka acts as the event streaming platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suggested topics:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Topic</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ecommerce.orders</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Order events</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ecommerce.payments</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Payment events</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ecommerce.customers</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Customer changes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ecommerce.inventory</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Inventory events</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students should implement:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Topic creation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Producers and consumers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consumer groups
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Offset management
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Message serialization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Event replay
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dead-letter handling
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 5 — Process batch and streaming data using Spark</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students use Apache Spark to transform source data.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Batch processing tasks:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Calculate daily sales
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clean customer records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deduplicate orders
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Aggregate revenue
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generate historical reports
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Streaming processing tasks:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Count orders per minute
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Calculate live sales
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Track payment failures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detect inventory changes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example Spark transformation:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from pyspark.sql import SparkSession
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
daily_sales.show()`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students should also investigate:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Spark execution plans
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DataFrame transformations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Shuffle operations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Joins
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data skew
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Performance optimization
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 6 — Store data in an object-storage lakehouse</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students implement lakehouse storage using:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Iceberg
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Object storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For a local environment, MinIO can provide an S3-compatible object-storage experience.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suggested storage structure:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`shopsphere-lakehouse/
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
    └── product_performance/`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students must understand:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet columnar storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Iceberg table metadata
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema evolution
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Snapshots
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compaction
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Table maintenance
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 7 — Implement Bronze, Silver, and Gold layers</span>
            </h3>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Bronze</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store raw data from APIs, databases, and Kafka.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Requirements:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Preserve original records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Include ingestion timestamps
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Track source information
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid unnecessary transformation
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Silver</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Clean and standardize data.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Tasks:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove duplicates
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate data types
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Handle missing values
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standardize timestamps
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate customer and product references
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Handle invalid records
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Gold</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build business-ready datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Daily sales
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer lifetime value
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product performance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment success rate
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inventory analysis
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 8 — Orchestrate batch workflows using Apache Airflow</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Airflow manages the execution of data pipelines.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">ELT with Snowflake and Apache Airflow® for eCommerce | Astronomer Documentation</span>
            <a href="https://images.openai.com/static-rsc-4/0jZcJNpGux7IGoLomqNA8eV2MswQuDCsaT6oXXmZ3S_zAm_3CqssbJoppy4iMSvnhtg3zjJyGR-XCh-LTw9ZUoCTzEuI11jeCyAr_-m7zg-pY4sWCkgWeFRg9UE2s5ApVoclztjBZeKpsQrfId98ciUgv6UKDD6R6xCoSxhLHGw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">astronomer.io</span>
            <a href="https://www.astronomer.io/docs/learn/2.x/reference-architecture-elt-snowflake/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example DAG:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> System Architecture & Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Extract Source Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Validate Raw Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Load Bronze Layer
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Transform Silver Layer
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Build Gold Layer
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Run dbt Tests
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Refresh Analytical Data Mart
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Update Dashboard
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students must implement:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DAG definitions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Task dependencies
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scheduling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retry policies
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failure notifications
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backfills
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Task monitoring
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 9 — Build analytical transformations using dbt</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            dbt transforms analytical data using SQL.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT
    order_date,
    COUNT(DISTINCT order_id) AS total_orders,
    SUM(total_amount) AS total_revenue,
    AVG(total_amount) AS average_order_value
FROM {{ ref('stg_orders') }}
WHERE order_status = 'Completed'
GROUP BY order_date;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students should implement:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Staging models
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Intermediate models
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Mart models
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Model dependencies
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tests
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Documentation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incremental models
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 10 — Add automated data quality tests</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students must detect data issues automatically.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example checks:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order ID must not be null. Customer ID must not be null. Order IDs must be unique. Payment amount must not be negative. Order status must be valid. Every order must reference a valid customer. Every order must reference a valid product.`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example dbt tests:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`models:
  - name: stg_orders
    columns:
      - name: order_id
        tests:
          - not_null
          - unique
      - name: customer_id
        tests:
          - not_null`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Additional checks:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Freshness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Referential integrity
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema validation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distribution checks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business-rule validation
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 11 — Create analytical data marts</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students build business-specific analytical tables.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales data mart
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`fact_orders dim_customer dim_product dim_date dim_location`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer data mart
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`customer_id total_orders total_spend average_order_value last_purchase_date customer_segment`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product performance mart
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`product_id total_units_sold total_revenue average_rating return_rate`}</code>
            </pre>
          </div>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 12 — Build BI dashboards</span>
            </h3>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Omni, éditeur de BI, lève 20 millions de dollars auprès de Theory Ventures</span>
            <a href="https://images.openai.com/static-rsc-4/PsODNpx8MaWb1hNk9ULp1mAmHlxjGBBOF6opehIcwdhsHr1fSd_VOUX0-xUtjnvN4kKrQ1q5uXj3NdG0E1q2HrPqMmZ76HsPRNfnmLkR-qmIYzWP9Bne-8hZpt6noij532kQGLc0mr2pmqEYhI9qhj6KxzMy8nFlLpQgEW7g6Hs?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Grow . Com</span>
            <a href="https://images.openai.com/static-rsc-4/6kSnXM-JKD-4LmwOX_hpAOL-Fl6pVosltyv3CYdZ_ghg3JkVcCXwb39QQlS_RCQY8CO6guxdxOgLv8tDlRcuaP-mV_As8cN6TXfKxRBOFFIt47qSQ1J8N0J6fKyjiMj8ch7yEMkaBX0o9vBQk04CzUwhhIT8XpPMwGE6pfd4s2g?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">E-Commerce Analytics</span>
            <a href="https://images.openai.com/static-rsc-4/NNp50dkatwLRqs4uoo9k8coA-eJhVE-y9664DKowVLngv6V39BonlNpOwQKzL0KRVIfGm4SPy5SOUwNdKQNX2iUV0XQVE8TzcZB-TzXxV6OjKnKcDltdTs6-YJ91K1Z34AdL0bM6SN88JJ-PB_qpVxFJ1Jgtn0qdi4TKhSH6lIM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            9
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students can use Metabase or Power BI.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suggested dashboard sections:
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Executive Overview</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Total revenue
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Total orders
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Average order value
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Total customers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Revenue growth
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Sales Analytics</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Daily sales
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monthly sales
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales by region
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales by category
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Product Analytics</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Top-selling products
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product revenue
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Product returns
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inventory availability
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Payment Analytics</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment success rate
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failed payments
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Payment method distribution
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Real-Time Analytics</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Orders per minute
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Revenue per minute
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Current payment failures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Live inventory events
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 13 — Implement monitoring, logging, and recovery</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The system must provide operational visibility.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students should monitor:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline execution duration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing throughput
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data freshness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kafka consumer lag
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Spark job failures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Airflow task failures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality failures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage growth
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Recovery features:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retry failed tasks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resume from checkpoints
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Replay Kafka events
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reprocess historical data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restore from backups
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Alert operators
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 14 — Secure the platform</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Role-based access control
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Secrets management
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption in transit
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Encryption at rest
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restricted database permissions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Protected dashboards
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data classification
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students should document which users can access which datasets.
          </p>
          <div className="mt-6 mb-3 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200/80 shadow-sm">
            <h3 className="text-base font-bold text-orange-950 flex items-center gap-2 font-mono">
              <Zap size={16} className="text-orange-600" />
              <span>Step 15 — Document the architecture</span>
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Final documentation should include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Architecture diagram
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data flow diagram
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database schema
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data model
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Technology decisions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline design
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality rules
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring design
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security design
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failure recovery strategy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deployment instructions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost considerations
          </p>
        </div>
      );
    case 18:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part B · Final Capstone Project
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              18. Final Capstone Deliverables &amp; Success Criteria
            </h2>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Data Architecture Modernization: Strategic Guide (2026)</span>
            <a href="https://images.openai.com/static-rsc-4/i59pt00AgnTh5b1sF7wXVhEKuEIUceK2sA8pmEH5S27ZE8bOZbOYq8GgxTwMhb-XL2Ub2nOzVQlDwt-Gt9E5cYv7P81Igg1IjxOA7BGIx7zf4Qq7vwQ_phi9rORraWwnRFny2Lx_2BGe_rp-NvTWu8TGr8_FIYAG66dcmTPRRuo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">dataforest.ai</span>
            <a href="https://dataforest.ai/blog/data-architecture-modernization?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Deliverable</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Source code</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Python, SQL, Spark, Airflow, and dbt code</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Architecture diagram</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">End-to-end system architecture</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data model</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">ER diagram and analytical data models</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data pipelines</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Ingestion, processing, and transformation pipelines</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Lakehouse</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Bronze, Silver, and Gold implementation</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Tests</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data quality and pipeline validation</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Dashboards</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Business intelligence and analytical dashboards</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Monitoring</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Logs, metrics, alerts, and recovery</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Deployment instructions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">How to run the system</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Technical report</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Architecture choices and trade-offs</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Demonstration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Recorded or live walkthrough</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Capstone success criteria</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A project should be considered successful when:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Source data can be ingested correctly.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Batch workflows run successfully.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Streaming events are processed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data is stored in the lakehouse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality tests detect invalid records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytical marts are available.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dashboards produce meaningful insights.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failures can be detected and recovered from.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The platform is documented.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students can explain why they selected each technology.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              <span>3. Practical Project Roadmap</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students should not wait until the final module to start building projects.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each phase of the course should produce a demonstrable project. These projects progressively build the skills needed for the final capstone.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">01-Introduction | THE DATA ENGINEERING COOKBOOK</span>
            <a href="https://images.openai.com/static-rsc-4/Jn1jHC4N81Mxe1_WhmgEN40X3DbhSxgdDihWujTyBZu3fCLKegPh4M98iviBGbsn5lpIdYJuwYeGhpofsuDjqPKvZb8BvkMupiCbUkZ_n6C74gUd12PLU6QcQdsBmvMAre1VUb0-I58Zd4dtJKm8Gv9wIYiN3rUDLu-U9vSyKSo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">cookbook.learndataengineering.com</span>
            <a href="https://cookbook.learndataengineering.com/docs/01-Introduction/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      );
    case 19:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part C · Practical Project Roadmap
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              19. Ten-Stage Project Roadmap
            </h2>
          </div>
          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">01</span>
            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">Python API Data Extractor</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skills: Python, APIs, JSON, HTTP, error handling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build a Python application that extracts data from a REST API, handles pagination, validates responses, and saves records as JSON or CSV.
          </p>
          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">02</span>
            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">Retail Database System</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skills: SQL, PostgreSQL, relational modeling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design a retail database with customers, products, orders, payments, and inventory. Implement constraints, joins, indexes, and analytical queries.
          </p>
          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">03</span>
            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">Sales Data Warehouse</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skills: Dimensional modeling, OLAP, star schema
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build a sales warehouse using fact and dimension tables. Implement analytical SQL queries for revenue, customer behavior, and product performance.
          </p>
          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">04</span>
            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">Data Lakehouse</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skills: Parquet, Apache Iceberg, storage architecture
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store raw and processed data using object storage and lakehouse tables. Implement partitioning, schema evolution, and historical snapshots.
          </p>
          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">05</span>
            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">Automated ETL Pipeline</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skills: Python, SQL, Airflow
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Develop an automated workflow that extracts data, transforms it, loads it into a database, and schedules execution through Airflow.
          </p>
          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">06</span>
            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">Distributed Data Processing</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skills: Apache Spark, distributed processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Process a large dataset using Spark. Explore transformations, partitioning, shuffles, joins, execution plans, and performance optimization.
          </p>
          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">07</span>
            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">Analytics Engineering Project</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skills: dbt, SQL, data testing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a modular analytical data transformation project with staging models, marts, documentation, and automated tests.
          </p>
          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">08</span>
            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">Real-Time Event Pipeline</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skills: Kafka, stream processing, event architecture
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build an event streaming system that processes order events and calculates real-time metrics.
          </p>
          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">09</span>
            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">Cloud Data Platform</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skills: AWS, cloud architecture, IAM, object storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deploy or simulate a cloud-based data platform. Learn cloud storage, permissions, compute, monitoring, and cost management.
          </p>
          <div className="mt-6 mb-2 p-3 rounded-xl bg-stone-100 border border-stone-200 flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-lg bg-orange-600 text-white font-mono font-bold text-xs shadow-xs">10</span>
            <h4 className="text-sm font-bold text-stone-900 font-mono tracking-tight">Final Capstone</h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skills: Complete data engineering system
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integrate ingestion, CDC, Kafka, Spark, Iceberg, Airflow, dbt, data quality, BI, security, monitoring, and documentation into one project.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              <span>4. Recommended Technology Stack for PrepSpaces</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The course should select one primary technology for each subject and introduce alternatives through comparisons.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The objective is to avoid overwhelming beginners with too many tools while still teaching the broader industry ecosystem.
          </p>
        </div>
      );
    case 20:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part D · Recommended Technology Stack
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              20. Primary Technology Stack for PrepSpaces
            </h2>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Subject</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Primary technology</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Supporting technology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Programming</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Python</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Pandas, Polars</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Databases</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">PostgreSQL</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">DuckDB</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">SQL analytics</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">SQL</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Advanced PostgreSQL</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data storage</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Parquet</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apache Avro</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data lakehouse</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apache Iceberg</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Delta Lake</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Distributed processing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apache Spark</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Hadoop concepts</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Workflow orchestration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apache Airflow</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Dagster</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data transformation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">dbt Core</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">SQL</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data streaming</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apache Kafka</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Kafka Connect</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Stream processing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apache Flink</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Spark Streaming</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Cloud</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">AWS</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Azure, GCP</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Containerization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Docker</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Kubernetes</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">CI/CD</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">GitHub Actions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Git</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Infrastructure</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Terraform</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Cloud infrastructure</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data quality</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">dbt tests</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Great Expectations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metabase
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Power BI
          </p>
        </div>
      );
    case 21:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part D · Recommended Technology Stack
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              21. Why Each Primary Technology Is Selected
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python is the primary programming language for data engineering.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students use it for:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API ingestion
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data extraction
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data validation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline development
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integration with data systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL provides a strong foundation for relational databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students learn:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Relational modeling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SQL
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Constraints
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Indexes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transactions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database administration fundamentals
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet is a columnar storage format suitable for analytical workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students learn:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Columnar storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compression
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema representation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Efficient analytical reads
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Iceberg
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Iceberg provides table-management capabilities over data files.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students learn:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ACID transactions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema evolution
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Snapshots
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Time travel
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition evolution
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Table maintenance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Spark
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Spark is the primary distributed data processing framework.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students learn:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed execution
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DataFrame operations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Spark SQL
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Shuffles
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Joins
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Performance optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Airflow
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Airflow is the primary workflow orchestration tool.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students learn:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DAGs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scheduling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dependencies
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retries
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backfills
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Workflow automation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            dbt Core
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            dbt is the primary analytics transformation tool.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students learn:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SQL-based modeling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Modular transformations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dependencies
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Testing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Documentation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytical data marts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Kafka
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kafka is the primary event streaming platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students learn:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Topics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Producers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consumers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consumer groups
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Offsets
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Event retention
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Event replay
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Flink
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Flink introduces advanced stream processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students learn:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Event time
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing time
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Watermarks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stateful processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Windowing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checkpointing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stream recovery
          </p>
        </div>
      );
    case 22:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part D · Recommended Technology Stack
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              22. Cost-Conscious Learning Environment
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The foundational learning path should be runnable locally with open-source software.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Build a Complete Data Engineering Ecosystem with Docker (PostgreSQL + Spark + Airflow + MinIO + Jupyter) | by Zile Hasnain | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/n_8oOpdcjdp67BStX1UUmO3do2VhwUC9PueYTziSq0YetmIXV0zVwD2OzL9IiD6E1jfvq460mg3EqPRLvpc0hZKBDNX8sQM74zTPJgxtN3PWuVgWp04N6D0M2XsdvytU7GOtdKrct-YtbCGYdUlBs4lB-NOwW5yNyyMBkRa65Uk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40szilehasnain/build-a-complete-data-engineering-ecosystem-with-docker-postgresql-spark-airflow-minio-f3ca1657e57e?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recommended local environment:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Component</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Local technology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Database</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">PostgreSQL</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Analytical database</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">DuckDB</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Object storage</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">MinIO</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data processing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apache Spark</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Orchestration</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apache Airflow</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Transformation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">dbt Core</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Streaming</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apache Kafka</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Table format</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Apache Iceberg</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Containerization</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Docker</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Dashboard</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Metabase</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Version control</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Git and GitHub</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Learning environment strategy</span>
            </h4>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Stage 1 — Beginner</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students use:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Python
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            DuckDB
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CSV and JSON
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Local files
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Stage 2 — Intermediate</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students introduce:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Docker
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Spark
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Airflow
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            dbt
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parquet
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Stage 3 — Advanced</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students introduce:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kafka
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Iceberg
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            MinIO
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CDC
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Streaming architecture
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Stage 4 — Professional extension</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students learn:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            AWS
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Terraform
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kubernetes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CI/CD
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Paid cloud services should be optional extensions, not mandatory requirements.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              <span>5. Assessment and Learning Structure</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            To make this a university-level program, every module should contain more than written explanations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students should be able to understand concepts, implement them, debug them, and apply them to real engineering problems.
          </p>
        </div>
      );
    case 23:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part E · Assessment &amp; Learning Structure
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              23. Recommended Module Structure
            </h2>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              <span>1. University-Style Theoretical Lectures</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detailed concepts, architecture diagrams, algorithms, system internals, mathematical foundations where necessary, and engineering trade-offs.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              <span>2. Step-by-Step Practical Tutorials</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Real development environments with runnable code, detailed explanations, and implementation walkthroughs.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              <span>3. Hands-On Laboratories</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Exercises using real datasets and actual tools. Students should build, test, and debug working systems.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              <span>4. Module Assignments</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Independent programming, SQL, architecture, and debugging exercises.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              <span>5. Real-World Case Studies</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Study how production systems address scale, latency, reliability, data quality, cost, and failures.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              <span>6. Module Assessment</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Conceptual questions, coding problems, SQL problems, debugging problems, and architecture questions.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              <span>7. Mini Project</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply the module's knowledge in a practical implementation that contributes to the overall course portfolio.
          </p>
        </div>
      );
    case 24:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part E · Assessment &amp; Learning Structure
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              24. Suggested Grading Structure
            </h2>
          </div>
          <li className="text-xs sm:text-sm text-stone-700 leading-relaxed ml-4 list-disc marker:text-orange-500 my-1">
            Final Capstone
          </li>
          <li className="text-xs sm:text-sm text-stone-700 leading-relaxed ml-4 list-disc marker:text-orange-500 my-1">
            Phase Projects
          </li>
          <li className="text-xs sm:text-sm text-stone-700 leading-relaxed ml-4 list-disc marker:text-orange-500 my-1">
            Practical Labs
          </li>
          <li className="text-xs sm:text-sm text-stone-700 leading-relaxed ml-4 list-disc marker:text-orange-500 my-1">
            Programming and SQL
          </li>
          <li className="text-xs sm:text-sm text-stone-700 leading-relaxed ml-4 list-disc marker:text-orange-500 my-1">
            Theory
          </li>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Assessment</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Theory and conceptual assessments</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">15%</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Programming and SQL assignments</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">20%</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Practical laboratories</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">20%</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Phase-wise projects</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">20%</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Final capstone project</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">25%</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Total</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Grading criteria</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Students should be evaluated on:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Correctness of implementation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Code quality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SQL proficiency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data modeling quality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Architecture decisions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Testing and validation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reliability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Documentation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ability to explain trade-offs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The capstone should not be graded only on whether the dashboard looks good. The underlying pipeline, correctness, reliability, and design decisions are equally important.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-sm font-bold text-stone-900 tracking-tight flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              <span>6. Career Outcomes</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            After completing the program, students should be prepared for entry-level roles and have a foundation for progressively advanced data engineering roles.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Why Data Engineers Must Think Beyond Coding in the AI Era | by Abhishek Kumar Gupta | Tech with Abhishek | Mar, 2026 | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/vl2qlTgMu8NPx93P3MJIeEJpwUcUc-N8NG3VmDdUlPC7rkj2flLjZUsJ7AqX6pS2ofV8xwYh19lfwgVSfpxHjTz77QIcfG996AGDBfFcPoSaH1YPm5K4-_cfgdIb3oUK5NLtLzRFC3uAinAzCuWSxfjP61zDGah3Mw6PDhj3Pmw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Mastering dbt Deployment: Multi-Environment, CI/CD, and Promotion Strategies | by Abhishek Kumar Gupta | Tech with Abhishek | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/FnMc2ITqJRZ11GH0qhxVIhwb2mrGMSs9GObfxSSN2_aDzwcowEbI5EYRSRLpwS79c2HVOgiHf9XbUndovb4MEw8GHA2Hb3oinbkT3CgRE0QFXTz6I1kdhv3UCa8u_XJ-i8HVNgMSoNqShM9OcWvVwtumXrS3zwHawb5rdVePZzY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">DataHub Lineage From Scratch. A practical guide for engineers who… | by Jithin K J | Mar, 2026 | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/w842iz_yGLeO2dwmR8-yVlnHMNSdZVJh-eWjWHEZDqc_0B6-MssjZL1qiM72VvXVuN0Lk0nRSXfmsEWUvyGArhFFag-vjRUwkmDRjsSoKmsdA8mUng3ev89x6Vm5E2wkn6sjeEOZhVWTnn5yNjMZBus4-Xq5LUXmC19r6MbO1kY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            10
          </p>
        </div>
      );
    case 25:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part F · Career Outcomes &amp; Graduation
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              25. Data Engineering Career Paths
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Engineer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Builds and maintains data pipelines and data infrastructure.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Typical responsibilities:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data ingestion
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transformation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database management
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline automation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data reliability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud Data Engineer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Builds cloud-based data platforms.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Typical responsibilities:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud data architecture
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud security
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure management
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud cost optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ETL Developer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Develops and automates data integration workflows.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Typical responsibilities:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Extracting data
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transforming datasets
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Loading data into target systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scheduling ETL jobs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Debugging pipeline failures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Big Data Engineer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Works with distributed processing and large datasets.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Typical responsibilities:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed computing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Spark
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kafka
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data lake architectures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Large-scale processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Performance optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytics Engineer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Builds trustworthy analytical data models.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Typical responsibilities:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SQL transformations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            dbt
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data marts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metric definitions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data testing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Analytical documentation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ML Data Engineer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Builds data pipelines for machine learning and AI systems.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Typical responsibilities:</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Training data preparation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature engineering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature pipelines
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature stores
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ML data infrastructure
          </p>
        </div>
      );
    case 26:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part F · Career Outcomes &amp; Graduation
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              26. Final Learning Outcomes &amp; Course Graduation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            After completing the Data Engineering course, students should be able to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design relational databases and analytical data models.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Write advanced SQL queries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build Python-based ingestion pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Extract data from REST APIs and databases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement ETL and ELT workflows.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build data warehouses and data lakehouses.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Process large datasets using Apache Spark.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement event streaming using Apache Kafka.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Develop streaming data pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Orchestrate workflows using Apache Airflow.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build analytical models using dbt.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement data quality and testing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design scalable and fault-tolerant data systems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement security and governance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimize pipeline performance and infrastructure cost.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build analytical dashboards.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design production-style data platforms.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Complete and document a real-world data engineering capstone.
          </p>
          <div className="mt-4 mb-2">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-800 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 inline-block"></span>
              <span>Recommended final course structure for PrepSpaces</span>
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The final module should be structured in this sequence:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Part A: Data Engineering System Design — detailed lectures, architecture design, estimations, reliability, security, and trade-offs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Part B: Final Capstone — Real-Time E-Commerce Data Engineering Platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Part C: Practical Project Roadmap — ten progressively challenging projects.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Part D: Recommended Technology Stack — primary tools and alternatives.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Part E: Assessment and Learning Structure — theoretical and practical evaluation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Part F: Career Outcomes — data engineering career pathways and final learning outcomes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This provides a strong ending to the course: students move from learning individual technologies to demonstrating that they can design a complete data engineering platform.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The capstone should be the centerpiece of the final module, while the ten-stage project roadmap ensures students have built practical skills throughout the course rather than only at the end.
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

export default SystemDesignSection;
