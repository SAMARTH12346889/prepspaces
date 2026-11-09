// projectx/src/Componets/DataEngineeringReliabilitySections.jsx
import React, { memo } from 'react';
import { ExternalLink, ArrowRight, Activity, Zap, ShieldAlert, CheckCircle, RefreshCw, Layers, Gauge, Database, Cpu, HardDrive } from 'lucide-react';

export const reliabilitySectionsMeta = [
  { id: 0, title: "Module 21: Data Reliability, Observability and Performance Optimization Overview & Roadmap", category: "Course Roadmap" },
  { id: 1, title: "1. Introduction to Data Reliability Engineering", category: "Part 1 · Foundations of Data Reliability" },
  { id: 2, title: "2. Reliability of Data Platforms", category: "Part 1 · Foundations of Data Reliability" },
  { id: 3, title: "3. Pipeline Monitoring", category: "Part 2 · Operational Monitoring & Telemetry" },
  { id: 4, title: "4. Logs, Metrics, and Traces", category: "Part 2 · Operational Monitoring & Telemetry" },
  { id: 5, title: "5. Data Observability Fundamentals", category: "Part 2 · Operational Monitoring & Telemetry" },
  { id: 6, title: "6. Freshness Monitoring", category: "Part 3 · Core Observability Pillars" },
  { id: 7, title: "7. Volume and Distribution Monitoring", category: "Part 3 · Core Observability Pillars" },
  { id: 8, title: "8. Schema Change Detection", category: "Part 3 · Core Observability Pillars" },
  { id: 9, title: "9. Data Quality Alerting", category: "Part 3 · Core Observability Pillars" },
  { id: 10, title: "10. Service Level Indicators (SLIs)", category: "Part 4 · Service Level Management & Error Budgets" },
  { id: 11, title: "11. Service Level Objectives (SLOs)", category: "Part 4 · Service Level Management & Error Budgets" },
  { id: 12, title: "12. Data Service Level Agreements (SLAs)", category: "Part 4 · Service Level Management & Error Budgets" },
  { id: 13, title: "13. Incident Management", category: "Part 5 · Incidents, RCA & Failure Recovery" },
  { id: 14, title: "14. Root Cause Analysis (RCA)", category: "Part 5 · Incidents, RCA & Failure Recovery" },
  { id: 15, title: "15. Pipeline Failure Recovery", category: "Part 5 · Incidents, RCA & Failure Recovery" },
  { id: 16, title: "16. Retry and Circuit-Breaking Strategies", category: "Part 5 · Incidents, RCA & Failure Recovery" },
  { id: 17, title: "17. Backup and Disaster Recovery", category: "Part 6 · Business Continuity & Disaster Recovery" },
  { id: 18, title: "18. Recovery Point Objective (RPO)", category: "Part 6 · Business Continuity & Disaster Recovery" },
  { id: 19, title: "19. Recovery Time Objective (RTO)", category: "Part 6 · Business Continuity & Disaster Recovery" },
  { id: 20, title: "20. Compute and Storage Optimization", category: "Part 7 · Performance Engineering & Optimization" },
  { id: 21, title: "21. Query Performance Optimization", category: "Part 7 · Performance Engineering & Optimization" },
  { id: 22, title: "22. Pipeline Scalability", category: "Part 8 · Scalability & Cloud Cost Optimization" },
  { id: 23, title: "23. Cloud Cost Optimization", category: "Part 8 · Scalability & Cloud Cost Optimization" },
  { id: 24, title: "24. Production Readiness Reviews", category: "Part 9 · Production Readiness, Case Study & Labs" },
  { id: 25, title: "25. End-to-End Case Study — Reliable E-Commerce Data Platform", category: "Part 9 · Production Readiness, Case Study & Labs" },
  { id: 26, title: "26. Practical Labs", category: "Part 9 · Production Readiness, Case Study & Labs" },
  { id: 27, title: "27. Module 21 — Final Assessment", category: "Part 9 · Production Readiness, Case Study & Labs" },
  { id: 28, title: "28. Module 21 — Key Takeaways", category: "Part 9 · Production Readiness, Case Study & Labs" }
];

export const ReliabilitySection = memo(function ReliabilitySection({ sectionId }) {
  switch (sectionId) {
    case 0:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Course Roadmap
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              Module 21: Data Reliability, Observability and Performance Optimization Overview &amp; Roadmap
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module 21 — Data Reliability, Observability and Performance Optimization
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">What is Data Quality?</span>
            <a href="https://images.openai.com/static-rsc-4/rtV5EA7flBGGyAGVbHkPbt-D01SR8CYIfjXFbanwcsdrZnQSd1Jz_LxguRDtgpfnedPJoBlYGpY56FCaj98gLgoSLY2ZKvMIKLcUcvxhgTey6jQJ2O4ORxt67yg_xPRTuqRzXN0CDHJXdBuHDmlcy1655_OuQxOditGc4XKLGgU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">How Data Observability Enhances Banking Security | Acceldata</span>
            <a href="https://images.openai.com/static-rsc-4/N-YWlDqamYgLZ5JBqBy0NngEvSPF7jPpqnE4hrNgwVHeXvNGnCEP2h0CKj3LzavJFAFUe576H7nHlfoQNfuVKXwcnRN8AkiN532gzuH5f6xvHg79gPGIkoiE0gpyAKKGAhj_shoQIKDJwOjhdL7hKzJoCi3bEroBdz-rW5zu-uA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Insights Overview (Databricks)</span>
            <a href="https://images.openai.com/static-rsc-4/TTH3YwipwOxxBgJ6-k4RbHoKvcUG9lfkc7_2yn8fltDXefNy10aFvS5qAKoARJhNYZxpyvViNOljp5L26vHDEB164YTy4WuF1q9j41w7lUfT6JSfXDpMwjV30CNR9L5QhLyqs9AQ499nxMGwBeXTk0aVQGYOckfSKeemsYVkZQM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            12
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Module Overview
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Reliability Engineering is the discipline of ensuring that data platforms consistently deliver accurate, complete, fresh, available, and trustworthy data to downstream consumers.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            In modern organizations, data engineering pipelines power:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business intelligence dashboards
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Machine learning models
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Financial reporting systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Real-time analytics applications
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer analytics platforms
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Enterprise decision-making systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A pipeline that executes successfully does not necessarily mean the data is correct.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example, imagine an e-commerce company that operates a data pipeline:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Application Databases
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Ingestion
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Lake
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Transformation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                BI Dashboards / ML / Observability
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose the pipeline runs every hour.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            At 10:00 AM, the pipeline executes successfully. However:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            40% of the customer records are missing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The sales data is six hours old.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A source database changed its schema.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A transformation query takes 45 minutes instead of 5 minutes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The cloud storage cost has increased by 300%.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline is technically running, but the data platform is unreliable.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This module teaches how to detect, diagnose, prevent, and resolve these problems.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Learning Objectives</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            By the end of this module, students should be able to:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design reliable production-grade data pipelines.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement data monitoring and observability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Establish data SLIs, SLOs, and SLAs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detect data quality and freshness problems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Manage pipeline failures and recovery.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Perform root cause analysis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Design backup and disaster recovery strategies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimize compute, storage, and query performance.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scale data pipelines efficiently.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Control cloud infrastructure costs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Conduct production readiness reviews.
          </p>
        </div>
      );
    case 1:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · Foundations of Data Reliability
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              1. Introduction to Data Reliability Engineering
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.1 What is Data Reliability Engineering?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Reliability Engineering (DRE) applies reliability engineering principles to data infrastructure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It focuses on making sure that data systems operate correctly and consistently in production environments.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditional software reliability focuses on whether an application works.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data reliability focuses on whether the data delivered by that application is trustworthy.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Software Reliability</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Reliability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">API returns a successful response</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Pipeline delivers correct data</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Application is available</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data platform is available</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Software errors are detected</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data quality errors are detected</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Application latency is monitored</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data freshness and processing latency are monitored</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Application recovery is performed</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data pipeline recovery and backfills are performed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An online banking system transfers transaction data to a data warehouse.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A pipeline may run without errors but accidentally duplicate transactions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the warehouse reports ₹10 crore in transactions when the actual amount is ₹7 crore, the system has a data reliability problem.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Data reliability must therefore include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Correctness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Completeness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Freshness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consistency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recoverability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Performance
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.2 Why Data Reliability Matters</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data reliability is important because organizations make decisions using data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consider a retail organization.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            If its data platform is unreliable:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inventory dashboards show incorrect stock.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Revenue reports become inaccurate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Marketing teams target the wrong customers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Machine learning models receive incorrect training data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Financial reports contain incorrect figures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data reliability is not just a technical concern. It directly affects business operations.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>1.3 Data Reliability Engineering Principles</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Principle 1: Design for failure</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Every production pipeline should assume that failures will occur.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Source database unavailable
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network interruption
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API rate limit exceeded
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Invalid records received
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud service outage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Worker process terminated
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A reliable pipeline should have retry mechanisms, checkpointing, recovery procedures, and monitoring.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Principle 2: Automate recovery</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Manual recovery is slow and error-prone.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of manually restarting pipelines, systems should automatically retry transient failures and resume from checkpoints when possible.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Principle 3: Make pipelines idempotent</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An idempotent operation produces the same final result when executed repeatedly with the same input.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`MERGE INTO target_sales AS target
USING staging_sales AS source
ON target.transaction_id = source.transaction_id
WHEN MATCHED THEN
  UPDATE SET target.amount = source.amount, target.updated_at = source.updated_at
WHEN NOT MATCHED THEN
  INSERT (transaction_id, amount, updated_at)
  VALUES (source.transaction_id, source.amount, source.updated_at);`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the pipeline executes this operation multiple times, it updates existing transactions rather than blindly inserting duplicate records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is useful when pipelines are retried after failures.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Principle 4: Monitor continuously</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reliability cannot be achieved only by testing pipelines during development.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Production systems require continuous monitoring of:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Execution status
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Freshness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Resource utilization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query latency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data volume
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Principle 5: Recover safely</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A reliable recovery process should restore the system without introducing duplicate, missing, or inconsistent data.
          </p>
        </div>
      );
    case 2:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 1 · Foundations of Data Reliability
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              2. Reliability of Data Platforms
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.1 What is a Data Platform?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data platform is an integrated infrastructure used to collect, store, process, transform, govern, and analyze data.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Modern Data Architecture: An Overview of Lambda and Kappa Architectures | Credera</span>
            <a href="https://images.openai.com/static-rsc-4/ArOvqH7vIWJmEeLA-bpAHOrnk27PbP4rNxoQPTFlMUsPKGDJIpZHYnN7bsAnMGFcxbpwpi451NL4hNcP31vt8p-N32vOF7T5ybmOfVmPBQjkqjzsIDjD9VpntfSdA9Tf3uqujEkK6tMybrIRtGqIazqKryvL1xdsJ0Jak9QA0eg?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">credera.com</span>
            <a href="https://www.credera.com/en-us/insights/modern-data-architecture-an-overview-of-lambda-and-kappa-architectures?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Typical components include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data sources
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ingestion systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Message brokers
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data lakes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data warehouses
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing engines
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Workflow orchestrators
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transformation frameworks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            BI and analytics applications
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reliability must be evaluated across the complete platform.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.2 Reliability Across Pipeline Stages</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Consider the following pipeline:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                PostgreSQL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Kafka
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Apache Spark
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Amazon S3
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Snowflake
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Power BI
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If Kafka is unavailable, data ingestion may stop.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If Spark fails, transformation may stop.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If Snowflake is unavailable, analytics queries may fail.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Even if each individual component is reliable, the complete pipeline may still experience failures.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Series system reliability
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For a simplified system where all components must be available simultaneously:
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ R_&#123;system&#125; = R_1 \times R_2 \times R_3 \times \dots \times R_n \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a pipeline has four components, each with 99.9% availability.
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ R_&#123;system&#125; = 0.999^4 \]</span>
          </div>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ R_&#123;system&#125; \approx 99.60\% \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This demonstrates why end-to-end reliability can be lower than individual component reliability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This calculation assumes independent failures and a system that requires all four components at the same time. Real data platforms may use retries, queues, redundancy, and graceful degradation.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.3 Fault Tolerance</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fault tolerance is the ability of a system to continue operating despite component failures.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Common techniques include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Replication
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checkpointing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retry mechanisms
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Redundant infrastructure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dead-letter queues
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automatic failover
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: Kafka replication
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Kafka topic can have a replication factor of 3.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Each partition has replicas distributed across brokers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If one broker fails, another replica may continue serving the partition, provided the cluster is configured appropriately and a healthy replica remains available.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Replication improves fault tolerance but does not eliminate every failure mode.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>2.4 High Availability vs Fault Tolerance</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">High Availability</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Fault Tolerance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Minimizes downtime</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Continues operating through certain failures</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">May involve brief interruption</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Aims for uninterrupted service for covered failures</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Uses failover mechanisms</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Uses redundancy and resilient architecture</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example: standby database</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Example: replicated processing system</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Both are important for reliable data platforms.</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case 3:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Operational Monitoring &amp; Telemetry
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              3. Pipeline Monitoring
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.1 What is Pipeline Monitoring?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline monitoring is the continuous tracking of data pipeline execution and operational health.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It answers questions such as:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Is the pipeline running?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Did the pipeline complete successfully?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How long did execution take?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How many records were processed?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How much data was ingested?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Did any transformation fail?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Is the pipeline running slower than normal?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring primarily focuses on predefined operational metrics and conditions.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.2 Pipeline Monitoring Metrics</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Pipeline execution status</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tracks whether pipeline execution succeeded or failed.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Possible statuses:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Running
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Success
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failed
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skipped
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cancelled
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retrying
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Pipeline</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Status</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customer Ingestion</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Success</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">3 minutes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Sales Transformation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Failed</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">18 minutes</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Inventory Pipeline</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Running</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">12 minutes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Marketing Pipeline</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Success</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">7 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Pipeline execution duration</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Execution duration measures how long a pipeline takes to complete.
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ Duration = EndTime - StartTime \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a pipeline normally takes 5 minutes but now takes 40 minutes.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            This may indicate:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Increased data volume
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Slow database queries
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Insufficient compute
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network problems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Poor partitioning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data skew
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Record processing metrics</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Important metrics include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records read
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records processed
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records written
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records rejected
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records duplicated
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records skipped
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records Read = 1,000,000 Records Processed = 950,000 Records Rejected = 50,000 Records Written = 950,000
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A 5% rejection rate may indicate a data quality issue.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Pipeline success rate</span>
          </h4>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ SuccessRate = \frac&#123;SuccessfulRuns&#125;&#123;TotalRuns&#125; \times 100 \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose a pipeline executes 1,000 times in one month.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Successful executions: 990
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failed executions: 10
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ SuccessRate = \frac&#123;990&#125;&#123;1000&#125;\times100 = 99\% \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The success rate is 99%.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, execution success alone does not guarantee that data is accurate or fresh.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>3.3 Pipeline Monitoring Architecture</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Pipelines
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Emit Logs &amp; Metrics
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Monitoring Collector
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Monitoring Database
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Alert Evaluation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Incident Investigation
              </div>
            </div>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Common monitoring tools</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Airflow
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Datadog
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Prometheus
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Grafana
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CloudWatch
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Azure Monitor
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Google Cloud Monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These tools can monitor infrastructure, workflow execution, and application metrics.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Operational Monitoring &amp; Telemetry
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              4. Logs, Metrics, and Traces
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logs, metrics, and traces are the three major pillars of operational observability.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.1 Logs</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logs are timestamped records of events generated by applications and infrastructure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A pipeline log may contain:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            2026-11-09 10:00:00 INFO Pipeline started 2026-11-09 10:00:05 INFO Connected to PostgreSQL 2026-11-09 10:00:10 INFO Extracted 500000 records 2026-11-09 10:01:20 WARN 200 records rejected 2026-11-09 10:02:00 ERROR Snowflake connection timeout 2026-11-09 10:02:01 ERROR Pipeline failed
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logs help engineers understand what happened and why.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Log levels
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Level</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">DEBUG</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Detailed diagnostic information</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">INFO</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Normal operational events</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">WARN</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Potentially problematic conditions</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">ERROR</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">An operation failed</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">FATAL</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">A critical failure that prevents continued operation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Structured logging
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Instead of storing logs as plain text, production systems often use structured JSON logs.
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{
  "timestamp": "2026-11-09T10:02:00Z",
  "pipeline": "sales_pipeline",
  "task": "load_snowflake",
  "level": "ERROR",
  "error": "connection_timeout",
  "duration_seconds": 120,
  "records_processed": 500000
}`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Structured logs are easier to search, filter, aggregate, and analyze.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.2 Metrics</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metrics are numerical measurements collected over time.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CPU utilization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Memory utilization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline duration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records processed per second
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failed task count
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data freshness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage utilization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metrics are useful for detecting trends and abnormal behavior.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Types of metrics</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Counter: Continuously increases.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: total number of failed pipeline executions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Gauge: Represents a value that can increase or decrease.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: currently available memory.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Histogram: Records observations across buckets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: query execution latency.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Summary: Tracks statistical characteristics of observations, commonly including quantiles and count.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: request latency distribution.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.3 Traces</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed tracing tracks a request or operation across multiple components.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Consider a data ingestion workflow:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                API Request
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Extractor
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Kafka Producer
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Spark Consumer
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Warehouse Loader
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A trace shows how long each stage took and where delays occurred.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Component</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">API Extraction</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">2 seconds</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Kafka Publishing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">1 second</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Spark Processing</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">35 seconds</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Warehouse Loading</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">80 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The warehouse loading stage is the main bottleneck.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Trace terminology</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Trace: complete execution path
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Span: individual operation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parent span: operation containing another operation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Child span: operation executed inside a parent
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Trace ID: identifier connecting related spans
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>4.4 Logs vs Metrics vs Traces</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Feature</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Logs</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Metrics</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Traces</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Purpose</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Explain events</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Measure health</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Track execution paths</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data type</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Text or structured events</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Numeric values</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Spans</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Best for</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Error investigation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Alerting and trends</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Bottleneck diagnosis</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Database timeout</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">CPU at 95%</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Query took 40 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A production system often uses all three together.
          </p>
        </div>
      );
    case 5:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 2 · Operational Monitoring &amp; Telemetry
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              5. Data Observability Fundamentals
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.1 What is Data Observability?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data observability is the ability to understand the health, quality, behavior, and reliability of data by examining the data itself and its surrounding operational signals.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traditional monitoring tells us whether a pipeline is running.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data observability tells us whether the pipeline is delivering trustworthy data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A pipeline reports SUCCESS.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            But the destination table contains only 10,000 rows instead of the expected 1 million.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A basic monitoring system may not detect this problem.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data observability system can detect the unexpected data volume.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.2 The Five Pillars of Data Observability</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">What is Data Observability: 5 Pillars, Benefits, &amp; Challenges | Airbyte</span>
            <a href="https://images.openai.com/static-rsc-4/xnXU6hCA8izscXjr-XLYdWE7i84q3wi1ENQQKPSkbciRB54mEmBJdWeD7-K3n2DY7oE3CrqIXwkUuYwktmptZRG9ZJbzaiit0VehKxf9LS82PUCGbc_DIAJZ6HvSDLQUyGtV7TSKbXbQSCPD4RCQSrSXx66LXUdjOva1rfo8sTo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Open-Source Data Observability with Elementary — From Zero to Hero (Part 1) | by Sezin Sezgin-Rummelsberger | TDS Archive | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/XDuFJZnkwJ20HD3GPlE1jQ7p8nyjMff9Zs0ZDlY9Jb6fuPLJrIWoOjl80hYL3iSC3ISqjP6sg3oXO2aQzPqYPa9XCi9wsbV5n6JHSNBBmjDUkD73M7cuuSRLR-kOofojQeTVbgdfOi-3mzDpUKXeRah4HvvFWOfRViR1R1MDfTc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Anomaly detection - Azure Databricks | Microsoft Learn</span>
            <a href="https://images.openai.com/static-rsc-4/toY78YxGzhpyiERayLkQzsUK__r8C-DI52SMk-II55kQ__Woyq0pEvfRjskxtMofn9w6fQaSs5UQ-N5poFxhg8s1NaNQqNOQVzUqD57BUf75U19ph4wv5REqLFB5NdxMRtY5SqnGkbmH6uOaVFXuo96KbVsq6tzoLZ_KbAr4_0E?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            9
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pillar 1: Freshness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Determines how recently data has been updated.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pillar 2: Volume
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Measures how much data exists or is processed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pillar 3: Distribution
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checks whether data values follow expected statistical patterns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pillar 4: Schema
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tracks changes to the structure of datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pillar 5: Lineage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tracks the movement and transformation of data between systems.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                PostgreSQL
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Raw Customer Table
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer Transformation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Customer Data Mart
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Sales Dashboard
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the raw customer table contains incorrect data, lineage helps identify the downstream tables and dashboards affected.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.3 Data Observability vs Data Quality</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These concepts are related but not identical.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Quality</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Observability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Evaluates whether data meets defined requirements</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Provides broader visibility into data health</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Uses rules and tests</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Uses rules, metrics, lineage, patterns, and monitoring</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example: customer email cannot be null</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Example: sudden increase in null emails detected</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Usually validates specific conditions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Helps detect and investigate unexpected behavior</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality is an important part of data observability.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>5.4 Data Observability Architecture</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Source Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Pipelines
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Observability Engine (Freshness, Volume, Distribution, Schema, Lineage)
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Alerting
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Engineering Team
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Tools
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Great Expectations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Soda
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monte Carlo
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Elementary
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            OpenLineage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            dbt tests
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Some of these are data testing tools, while others provide broader observability capabilities.
          </p>
        </div>
      );
    case 6:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Core Observability Pillars
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              6. Freshness Monitoring
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.1 What is Data Freshness?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data freshness measures how up-to-date the data is.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Freshness is especially important for:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Real-time dashboards
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Financial transactions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fraud detection
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inventory systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recommendation systems
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Customer analytics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose an e-commerce company's sales dashboard should update every 15 minutes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The last successful update occurred at 10:00 AM.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The current time is 10:45 AM.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The data is 45 minutes old.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If the freshness requirement is 15 minutes, the pipeline violates its requirement.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.2 Freshness Calculation</span>
          </h3>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ Freshness = CurrentTime - LastDataUpdateTime \]</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from datetime import datetime, timezone

current_time = datetime.now(timezone.utc)
last_update = datetime(2026, 11, 9, 10, 0, tzinfo=timezone.utc)
freshness = current_time - last_update
print(freshness)`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The program calculates the elapsed time since the most recent update.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.3 Freshness Monitoring Using SQL</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT
    MAX(updated_at) AS last_update_time,
    CURRENT_TIMESTAMP AS current_time,
    DATEDIFF(minute, MAX(updated_at), CURRENT_TIMESTAMP) AS freshness_minutes
FROM sales;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This example uses Snowflake-style SQL.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>6.4 Freshness Alerting</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example rules:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Freshness &lt; 15 minutes → Healthy Freshness between 15 and 30 minutes → Warning Freshness &gt; 30 minutes → Critical
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Thresholds must be based on business requirements.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Freshness monitoring should also distinguish between:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline execution time
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data arrival time
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Event time
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing time
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For streaming systems, a pipeline may be operationally active but still lag behind incoming events.
          </p>
        </div>
      );
    case 7:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Core Observability Pillars
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              7. Volume and Distribution Monitoring
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.1 Volume Monitoring</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Volume monitoring measures the amount of data entering or leaving a pipeline.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Common metrics:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Row count
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            File count
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Bytes ingested
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records per minute
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records per partition
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Number of rejected records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An online store typically receives 100,000 orders per day.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Today's pipeline receives only 15,000 orders.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            This could indicate:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Source system failure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API extraction failure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Missing partitions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incorrect filtering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incomplete ingestion
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SQL volume check
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT COUNT(*) AS total_orders
FROM orders
WHERE order_date = CURRENT_DATE;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A monitoring system can compare this count with historical data.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.2 Distribution Monitoring</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distribution monitoring checks whether values follow expected statistical patterns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Suppose an organization stores customer ages.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Historical distribution:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Age Range</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Expected Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">18–25</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">20%</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">26–35</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">35%</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">36–45</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">25%</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">46–60</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">15%</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">60+</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Today's distribution suddenly becomes:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Age Range</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Actual Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">18–25</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">80%</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">26–35</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">10%</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">36–45</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">5%</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">46–60</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">3%</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">60+</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">2%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is an anomaly.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Possible causes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incorrect transformation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Source system bug
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data corruption
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unexpected customer behavior
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>7.3 Statistical Distribution Monitoring</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Common techniques include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Mean
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ \mu = \frac&#123;1&#125;&#123;N&#125;\sum_&#123;i=1&#125;^&#123;N&#125;x_i \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Standard deviation
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ \sigma = \sqrt&#123;\frac&#123;1&#125;&#123;N&#125;\sum_&#123;i=1&#125;^&#123;N&#125;(x_i-\mu)^2&#125; \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Z-score
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ Z = \frac&#123;x-\mu&#125;&#123;\sigma&#125; \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A high absolute Z-score may indicate an anomaly.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, if daily transaction volume is normally 100,000 with a standard deviation of 5,000, a volume of 150,000 is highly unusual.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            However, statistical thresholds must account for seasonality, weekends, holidays, and legitimate business changes.
          </p>
        </div>
      );
    case 8:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Core Observability Pillars
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              8. Schema Change Detection
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.1 What is Schema Change Detection?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A schema defines the structure of a dataset.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE customers (
    customer_id INT,
    customer_name VARCHAR(100),
    email VARCHAR(200),
    created_at TIMESTAMP
);`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The schema contains:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Column names
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data types
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Constraints
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Relationships
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Nullability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema change detection identifies modifications to this structure.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.2 Types of Schema Changes</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Additive changes</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ALTER TABLE customers ADD COLUMN phone_number VARCHAR(20);`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A new column is introduced.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This is often backward-compatible if downstream consumers can tolerate the additional column.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Breaking changes</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ALTER TABLE customers DROP COLUMN email;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If downstream dashboards depend on the email column, they may fail.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Data type changes</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ALTER TABLE customers ALTER COLUMN customer_id TYPE VARCHAR(50);`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A change from integer to string may break downstream transformations.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Column renaming</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            customer_name → full_name
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Existing queries referencing customer_name may fail.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.3 Schema Evolution</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema evolution is the controlled process of modifying data structures over time.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important strategies:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backward compatibility
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Forward compatibility
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Versioned schemas
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema registries
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explicit migration procedures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Contract testing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: Kafka Schema Registry
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A producer sends events using an Avro schema.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A schema registry manages schema versions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consumers validate incoming records against compatible schema versions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This reduces the risk of uncontrolled changes breaking downstream applications.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>8.4 Schema Change Alerting</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An alert might say:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ALERT: Schema Change Detected Dataset: customer_events Previous schema: customer_id: INTEGER email: STRING created_at: TIMESTAMP New schema: customer_id: STRING email: STRING created_at: TIMESTAMP Severity: HIGH Potential impact: Customer analytics and downstream joins
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The data engineer should determine whether the change is intentional, compatible, and safely deployable.
          </p>
        </div>
      );
    case 9:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 3 · Core Observability Pillars
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              9. Data Quality Alerting
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.1 What is Data Quality Alerting?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality alerting automatically notifies engineers when datasets violate quality requirements.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Common quality dimensions:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Dimension</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Accuracy</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data correctly represents reality</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Completeness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Required data is present</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Consistency</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data agrees across systems</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Validity</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data conforms to defined rules</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Uniqueness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Duplicate records are prevented</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Timeliness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data arrives when required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.2 Example Data Quality Tests</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Test 1: Null values</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT COUNT(*) AS invalid_records
FROM customers
WHERE customer_id IS NULL;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Expected:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            invalid_records = 0
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Test 2: Duplicate records</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, COUNT(*) AS duplicate_count
FROM customers
GROUP BY customer_id
HAVING COUNT(*) > 1;`}</code>
            </pre>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Test 3: Invalid email format</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT COUNT(*)
FROM customers
WHERE email IS NOT NULL
  AND NOT REGEXP_LIKE(
    email,
    '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}\$'
  );`}</code>
            </pre>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Test 4: Negative transaction amounts</span>
          </h4>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT COUNT(*)
FROM transactions
WHERE amount < 0;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This test assumes negative amounts are invalid for the particular dataset. Refunds or reversals may legitimately be negative in other data models.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>9.3 Alert Severity</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A useful alerting system defines severity.
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Severity</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Meaning</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Critical</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Business operations affected</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Revenue data missing</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">High</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Major quality issue</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">20% duplicate transactions</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Medium</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Limited impact</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Small increase in invalid emails</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Low</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Informational</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Minor schema addition</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Alert fatigue
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Alert fatigue occurs when engineers receive too many irrelevant notifications.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            To reduce alert fatigue:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Set meaningful thresholds.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Group related alerts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid duplicate notifications.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply severity levels.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use anomaly detection carefully.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Alert on business impact rather than every technical event.
          </p>
        </div>
      );
    case 10:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Service Level Management &amp; Error Budgets
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              10. Service Level Indicators (SLIs)
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.1 What is an SLI?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Service Level Indicator is a measurable indicator of service performance or reliability.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An SLI answers:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            "How well is this data service performing?"
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For a data platform, SLIs may include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline success rate
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data freshness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data completeness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query availability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality pass rate
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing latency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example: Freshness SLI
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A company requires its sales table to be updated within 15 minutes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The SLI measures the percentage of eligible time periods where the data meets this freshness requirement.
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ Freshness\ SLI = \frac&#123;Fresh\ Data\ Observations&#125; &#123;Total\ Eligible\ Observations&#125; \times100 \]</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            1,000 eligible observations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            980 observations met the freshness requirement
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ SLI = \frac&#123;980&#125;&#123;1000&#125;\times100 = 98\% \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The freshness SLI is 98%.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>10.2 Common Data Platform SLIs</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">SLI</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Measurement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Pipeline reliability</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Successful runs / total runs</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data freshness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Percentage meeting freshness threshold</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Completeness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Percentage of expected records received</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Availability</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Successful requests / eligible requests</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Query latency</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Query execution time</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data quality</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Percentage of tests passing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important distinction</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An SLI is a measurement.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An SLO is a target.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An SLA is an agreement.
          </p>
        </div>
      );
    case 11:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Service Level Management &amp; Error Budgets
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              11. Service Level Objectives (SLOs)
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.1 What is an SLO?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Service Level Objective is a target value for a Service Level Indicator.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SLI: Data freshness SLO: 99% of hourly sales data deliveries must complete within 15 minutes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The SLO provides a measurable reliability goal.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.2 Example SLOs for a Data Platform</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Service</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">SLO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Daily ETL pipeline</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">99.5% successful executions</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Customer analytics data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">99% fresh within 30 minutes</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Financial reporting data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">99.9% completeness</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Warehouse query service</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">95% of queries under 10 seconds</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Critical data marts</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">99.9% availability</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These are illustrative targets, not universal industry standards.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>11.3 Error Budget</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An error budget represents the amount of unreliability permitted by an SLO.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For a 99.9% availability objective:
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ ErrorBudget = 100\% - 99.9\% \]</span>
          </div>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ ErrorBudget = 0.1\% \]</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            If the service operates for 30 days:
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ 30 \times 24 \times 60 = 43,200\text&#123; minutes&#125; \]</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Allowed unavailability:
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ 43,200 \times 0.001 = 43.2\text&#123; minutes&#125; \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The service has approximately 43.2 minutes of unavailability budget for that 30-day period.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why error budgets matter
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Error budgets help organizations balance:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reliability improvements
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Feature development
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure upgrades
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Risky deployments
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            When the error budget is exhausted, the team may prioritize reliability work over new features.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For data pipelines, the budget may be measured in missed delivery windows or failed data intervals rather than literal service downtime.
          </p>
        </div>
      );
    case 12:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 4 · Service Level Management &amp; Error Budgets
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              12. Data Service Level Agreements (SLAs)
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.1 What is an SLA?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Service Level Agreement is a formal or documented agreement defining the service commitments between a provider and its consumers.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An SLA can define:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Availability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Freshness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data completeness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Support response time
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incident resolution expectations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Service credits or contractual consequences
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data engineering team provides sales analytics to the finance department.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The SLA might state:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Service: Sales Analytics Data Platform Availability: 99.9% monthly availability Freshness: Sales data delivered within 15 minutes Completeness: 99.99% of expected transactions delivered Support: Critical incidents acknowledged within 15 minutes
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>12.2 SLI vs SLO vs SLA</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">SLI</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Measurement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Actual data freshness is 12 minutes.</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">SLO</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Internal target</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Data freshness should be below 15 minutes for 99% of observations.</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">SLA</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">External commitment</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">The service guarantees freshness within 15 minutes under defined contractual conditions.</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">The SLO is generally used internally to achieve the service commitment. The SLA may include consequences if the provider fails to meet its commitments.</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900"></td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600"></td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900"></td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    case 13:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Incidents, RCA &amp; Failure Recovery
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              13. Incident Management
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.1 What is a Data Incident?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data incident is an event that causes a data service to violate its expected reliability, quality, performance, or availability requirements.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline failure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data corruption
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Missing transactions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Stale dashboards
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Warehouse outage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incorrect financial calculations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security-related data exposure
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>13.2 Incident Management Lifecycle</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Incident Detection
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Incident Classification
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Investigation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Containment
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Recovery
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Validation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Postmortem &amp; Improvements
              </div>
            </div>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 1: Detection</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An alert identifies an issue.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales pipeline failed at 10:15 AM.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 2: Classification</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Determine severity and business impact.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            P1: Critical financial reporting outage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            P2: Major analytics pipeline failure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            P3: Limited dataset issue
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            P4: Minor operational warning
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Severity classification should be defined by the organization's incident policy.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 3: Investigation</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The engineer examines:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline logs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Metrics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Traces
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality results
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Source system status
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recent deployments
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 4: Containment</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Prevent the issue from spreading.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, stop a faulty transformation from publishing incorrect revenue figures.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 5: Recovery</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restore the pipeline and correct the affected data.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 6: Validation</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Verify that:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records are complete.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data is accurate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Duplicate records are not introduced.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Downstream dashboards are correct.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Freshness requirements are restored.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 7: Postmortem</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document the incident and identify preventive actions.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A good postmortem is blameless. It focuses on improving the system rather than assigning personal blame.
          </p>
        </div>
      );
    case 14:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Incidents, RCA &amp; Failure Recovery
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              14. Root Cause Analysis (RCA)
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.1 What is Root Cause Analysis?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Root Cause Analysis is a systematic investigation used to identify the underlying reason for a failure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            It does not stop at the immediate error.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example Incident
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A sales dashboard displays only 50% of expected revenue.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Initial observation:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Sales dashboard revenue is incorrect.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Investigation:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dashboard query is working.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Warehouse table contains incomplete sales data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Transformation pipeline processed only half the source records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Source extraction used an incorrect date filter.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The date filter was introduced during a recent deployment.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Root cause:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An incorrect extraction filter caused records to be omitted.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.2 Five Whys Technique</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Problem: Sales pipeline failed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why 1: The warehouse load failed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why 2: The load received malformed records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why 3: The source data contained unexpected values.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why 4: A source application changed its data format.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Why 5: No schema compatibility validation existed.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Root cause:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The ingestion system lacked schema change detection and validation.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Corrective actions:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement schema validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Add compatibility checks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create alerts for unexpected source changes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Improve deployment testing.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>14.3 Fishbone Diagram</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A fishbone diagram organizes possible root causes into categories.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Failure Root Cause Analysis (Fishbone)
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Infrastructure
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Code
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Process
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                People
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                External Systems
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RCA is useful for preventing repeated incidents.
          </p>
        </div>
      );
    case 15:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Incidents, RCA &amp; Failure Recovery
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              15. Pipeline Failure Recovery
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.1 What is Pipeline Recovery?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline recovery is the process of restoring a failed or interrupted pipeline to a correct operational state.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A reliable pipeline must consider:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Where the failure occurred
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which records were processed
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which records were committed
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Which records need reprocessing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether duplicates can occur
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Whether downstream datasets are affected
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.2 Common Recovery Strategies</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Retry</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retry the failed operation.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Useful for temporary problems:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network timeouts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            API failures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database connection interruptions
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Checkpointing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checkpointing saves progress at specific execution points.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Batch 1: 100,000 records → Completed Batch 2: 100,000 records → Completed Batch 3: 100,000 records → Failed Batch 4: 100,000 records → Not started
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            With a valid checkpoint, the pipeline may resume from Batch 3 instead of processing all batches again.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Backfill</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backfill is the process of reprocessing historical data for a specified period.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Missing Data: November 5, 2026 Backfill: Reprocess data for November 5, 2026.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Backfills are useful when:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data was missing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A transformation bug was fixed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Historical data must be recalculated.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A source system was unavailable.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Replay</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Replay reprocesses previously captured events.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For example, Kafka consumers can replay events from an earlier offset when retention and consumer configuration permit it.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>E. Dead-Letter Queue (DLQ)</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A DLQ stores records that cannot be processed normally.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Valid Records
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Processing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +----&gt; Data Warehouse
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +----&gt; Dead-Letter Queue
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Error Investigation
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The DLQ allows valid records to continue processing while invalid records are investigated.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>15.3 Recovery Validation</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            After recovery, verify:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected record count
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Duplicate count
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality checks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition completeness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data freshness
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Downstream consistency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A successful restart does not necessarily mean the data has been recovered correctly.
          </p>
        </div>
      );
    case 16:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 5 · Incidents, RCA &amp; Failure Recovery
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              16. Retry and Circuit-Breaking Strategies
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.1 Retry Strategies</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retries allow temporary failures to recover automatically.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Fixed interval retry
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Attempt 1 → Failure Wait 5 seconds Attempt 2 → Failure Wait 5 seconds Attempt 3 → Success
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Exponential backoff
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The waiting period increases after each failure.
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ Delay_n = \min(Delay_&#123;max&#125;, Delay_&#123;initial&#125;\times2^n) \]</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Retry</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Delay</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">1</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">2 seconds</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">2</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">4 seconds</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">3</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">8 seconds</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">4</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">16 seconds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Jitter can be added to avoid synchronized retries across many workers.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.2 Circuit Breaker</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A circuit breaker prevents repeated calls to an unhealthy external service.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It has three common states:
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Designing for Failure: Mastering Timeouts, Retries, and Circuit Breakers</span>
            <a href="https://images.openai.com/static-rsc-4/4JKxNG1nRJ3-6-VtME-4yTyXF5C0fDEdYXnLY40P8ZRsFri0NcqKxLvmz8akOruGivVYu6H9tT8mqSWA6xpPx0-FHNX0MnBwiYaF-bkfeoRA4W7gCmcdNEWBd7TVVY3VWg_2mOf1XvB1veb1Ov79-9odGrdWwb6njkO5ni0Hauc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">systemdr.systemdrd.com</span>
            <a href="https://systemdr.systemdrd.com/p/designing-for-failure-mastering-timeouts?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Closed state
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Requests are allowed.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Open state
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Requests are blocked temporarily because the external service is unhealthy.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Half-open state
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A limited number of test requests are allowed to determine whether the service has recovered.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Pipeline
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Circuit Breaker
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                External API
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If an API repeatedly fails, the circuit breaker stops the pipeline from continuously overwhelming the API.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>16.3 Retry vs Circuit Breaker</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Retry</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Circuit Breaker</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Attempts to recover an operation</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Prevents repeated calls to an unhealthy service</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Useful for transient failures</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Useful for persistent failures</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Can increase request volume</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Reduces request volume</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Uses retry limits and delays</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Uses failure thresholds and recovery states</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retries and circuit breakers should be combined thoughtfully.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A retry should generally be limited to transient failures. Retrying permanent errors such as invalid credentials or malformed SQL is usually not useful.
          </p>
        </div>
      );
    case 17:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Business Continuity &amp; Disaster Recovery
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              17. Backup and Disaster Recovery
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.1 What is Backup?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A backup is a copy of data that can be used to restore information after loss or corruption.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Common backup types:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Full backup
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Copies the complete dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incremental backup
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Copies changes since the previous backup.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Differential backup
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Copies changes since the last full backup.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Snapshot
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Captures the state of a system at a particular point in time.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.2 What is Disaster Recovery?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Disaster Recovery (DR) is the process of restoring critical systems after major disruptions.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Possible disasters:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud region failure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Database corruption
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Accidental deletion
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Ransomware
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure failure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Critical configuration loss
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A DR plan includes:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup strategy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery procedures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Infrastructure reconstruction
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Failover architecture
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data restoration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Testing
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.3 Backup vs Disaster Recovery</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Backup</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Disaster Recovery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Protects data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Restores services</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Focuses on copies and retention</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Focuses on recovery operations</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Can be part of DR</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Includes backup and much more</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example: database snapshot</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Example: restore database and resume pipelines</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>17.4 Data Platform Disaster Recovery Architecture</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Primary Region (Prod Warehouse + Pipelines + Storage)
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Automated Replication &amp; Backup
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Secondary Region (Recovery Infrastructure + Standby)
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A disaster recovery strategy should account for the fact that restoring a warehouse alone may not restore its data ingestion and transformation processes.
          </p>
        </div>
      );
    case 18:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Business Continuity &amp; Disaster Recovery
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              18. Recovery Point Objective (RPO)
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.1 What is RPO?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery Point Objective defines the maximum acceptable amount of data loss measured in time after a disaster.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It answers:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            "How much historical data can the organization afford to lose?"
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RPO = 15 minutes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This means the organization aims to recover data with no more than 15 minutes of data loss.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Disaster occurs at 10:00 AM.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Latest recoverable data is from 9:50 AM.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Data loss:
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ 10:00 - 9:50 = 10\text&#123; minutes&#125; \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The recovery meets a 15-minute RPO.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>18.2 RPO Strategies</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">RPO Requirement</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Possible Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">24 hours</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Daily backups</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">1 hour</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Frequent snapshots</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">15 minutes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Frequent backups and transaction logs</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Near zero</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Synchronous replication or equivalent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These are simplified examples. Backup frequency alone does not guarantee an RPO; restore consistency, replication lag, and recoverability must also be considered.
          </p>
        </div>
      );
    case 19:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 6 · Business Continuity &amp; Disaster Recovery
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              19. Recovery Time Objective (RTO)
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.1 What is RTO?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery Time Objective defines the maximum acceptable time required to restore a service after a failure.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It answers:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            "How quickly must the system be restored?"
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RTO = 2 hours
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The system should be restored within two hours of the disaster.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery time calculation
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ RTO = RecoveryTime - IncidentStartTime \]</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incident begins: 10:00 AM
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Service restored: 11:30 AM
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ RTO = 1.5\text&#123; hours&#125; \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The recovery meets a two-hour RTO.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>19.2 RPO vs RTO</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Establishing RPO and RTO Targets for Cloud Applications | AWS Cloud Operations Blog</span>
            <a href="https://images.openai.com/static-rsc-4/Ppt2mIX_H8SLu6J4W845T1oxTasV_PQoe5HyjnqHDooO3T47hMnz4ms1RwbSw93Js3deRSmAacJ-9vpbTVeLogQbVPa84NoBRuAQcxEs2nI6Nr__C-kbuvraxUi-Dj9iO84QxnXkYuxunZQuMEwcm0XMQ9SQNnPEB6Em_nFHmMc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">aws.amazon.com</span>
            <a href="https://aws.amazon.com/blogs/mt/establishing-rpo-and-rto-targets-for-cloud-applications/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">RPO</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">RTO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Measures acceptable data loss</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Measures acceptable downtime</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Focuses on data recovery point</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Focuses on service restoration time</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Example: 15 minutes</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Example: 2 hours</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Determines backup and replication requirements</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Determines recovery infrastructure and procedures</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Real-world example
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A financial analytics platform may have:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RPO: 5 minutes RTO: 30 minutes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The organization must recover data with no more than five minutes of data loss and restore the platform within 30 minutes.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Achieving these targets can require continuous replication, standby infrastructure, automated failover, and regularly tested recovery procedures.
          </p>
        </div>
      );
    case 20:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Performance Engineering &amp; Optimization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              20. Compute and Storage Optimization
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.1 What is Compute Optimization?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute optimization means using processing resources efficiently while meeting workload performance requirements.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Compute resources include:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CPU
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Memory
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            GPU
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Worker nodes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Virtual machines
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud processing clusters
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data processing engines such as Apache Spark use compute resources to process large datasets.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.2 Compute Optimization Techniques</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Right-sizing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Right-sizing means selecting the appropriate infrastructure size for the workload.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Configuration</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">CPU</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Memory</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Small worker</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">2 cores</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">8 GB</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Medium worker</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">4 cores</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">16 GB</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Large worker</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">8 cores</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">32 GB</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If a pipeline uses only 20% of a large worker's capacity, a smaller configuration may be more economical.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Autoscaling</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Autoscaling automatically adjusts compute capacity according to workload demand.
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Low Data Volume
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                2 Workers High Data Volume
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                10 Workers
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Autoscaling can improve performance and reduce idle resource costs.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Parallel Processing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parallel processing divides a workload into multiple tasks.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            For example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                10 Million Records
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +------+------+------+------+
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Task1
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Task2
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Task3
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Task4
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                +------+------+------+------+
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Parallel Processing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Combined Output
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parallelism can significantly reduce execution time, provided the workload can be divided efficiently.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Avoiding Data Skew</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data skew occurs when data is unevenly distributed across partitions.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Partition</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Records</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Partition 1</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">10,000</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Partition 2</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">12,000</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Partition 3</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">15,000</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Partition 4</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">5,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partition 4 becomes a bottleneck.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Possible solutions:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Better partitioning keys
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Salting
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Adaptive query execution
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Skew-aware joins
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pre-aggregation
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>E. Resource Monitoring</span>
          </h4>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Important metrics:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            CPU utilization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Memory utilization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Disk I/O
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network throughput
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Worker utilization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Spill-to-disk volume
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Queue length
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These metrics help identify whether the pipeline is CPU-bound, memory-bound, or I/O-bound.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>20.3 Storage Optimization</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage optimization reduces unnecessary storage consumption while preserving required data.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Common strategies:</span>
          </h4>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Compression</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compression reduces the physical size of stored data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Snappy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Gzip
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Zstandard
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Columnar storage</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Columnar formats store data by column rather than by row.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Examples:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Parquet
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache ORC
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Columnar formats are useful for analytical workloads because queries often read only selected columns.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Partitioning</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitioning divides data into smaller logical groups.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            sales/ year=2026/ month=01/ month=02/ month=03/
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A query for January can potentially scan only the January partition.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Data lifecycle management</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Older data may be moved to cheaper storage tiers.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Data Age</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Storage Strategy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">0–30 days</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Frequently accessed storage</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">30–180 days</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Lower-cost storage</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">More than 180 days</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Archive storage</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retention must respect regulatory, contractual, and business requirements.
          </p>
        </div>
      );
    case 21:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 7 · Performance Engineering &amp; Optimization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              21. Query Performance Optimization
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.1 What is Query Performance Optimization?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query performance optimization improves the execution speed and resource efficiency of database queries.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A slow query can cause:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline delays
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            High compute costs
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Missed data delivery deadlines
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Poor dashboard performance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Increased concurrency problems
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.2 Example of an Inefficient Query</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`-- Inefficient: Function on filter prevents partition pruning
SELECT *
FROM sales
WHERE YEAR(order_date) = 2026;`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Applying a function to the filtering column may prevent some systems from effectively pruning partitions or using indexes.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.3 Improved Query</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`-- Optimized: Specific columns + range predicate enables partition pruning
SELECT order_id, customer_id, amount, order_date
FROM sales
WHERE order_date >= '2026-01-01'
  AND order_date < '2027-01-01';`}</code>
            </pre>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Benefits:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reads only required columns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Uses a range predicate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can support partition pruning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduces unnecessary data processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Actual optimization depends on the database engine, indexes, partitioning, and query plan.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.4 Query Optimization Techniques</span>
          </h3>
          <h4 className="text-sm font-bold text-stone-900 mt-3 mb-1 flex items-center gap-1.5 font-mono text-orange-700">
            <span>1. Avoid SELECT *</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retrieve only required columns.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-3 mb-1 flex items-center gap-1.5 font-mono text-orange-700">
            <span>2. Filter early</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduce the amount of data before expensive operations.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-3 mb-1 flex items-center gap-1.5 font-mono text-orange-700">
            <span>3. Optimize joins</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use appropriate join keys and avoid unnecessary joins.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-3 mb-1 flex items-center gap-1.5 font-mono text-orange-700">
            <span>4. Partition pruning</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scan only relevant partitions.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-3 mb-1 flex items-center gap-1.5 font-mono text-orange-700">
            <span>5. Indexing</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use indexes where supported and beneficial.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-3 mb-1 flex items-center gap-1.5 font-mono text-orange-700">
            <span>6. Materialized views</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Precompute frequently used aggregations.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-3 mb-1 flex items-center gap-1.5 font-mono text-orange-700">
            <span>7. Query plan analysis</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Examine how the database executes a query.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-3 mb-1 flex items-center gap-1.5 font-mono text-orange-700">
            <span>8. Avoid unnecessary data shuffling</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            In distributed systems, shuffling transfers data between workers. Excessive shuffling can significantly increase processing time.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.5 Query Execution Plan</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A query execution plan describes how the database executes a query.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Query
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Table Scan
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Filter
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Hash Join
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Aggregation
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Result
              </div>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            An execution plan can reveal:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Full table scans
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expensive joins
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Large sorts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Excessive data movement
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Poor cardinality estimates
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Tools:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL: EXPLAIN ANALYZE
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Snowflake: Query Profile
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Spark: SQL execution plan
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            BigQuery: Execution details
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>21.6 Performance Optimization Example</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Example Pipeline Runtime Before and After Optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Illustrative processing time for a data engineering pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ■ Before optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            ■ After optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hypothetical benchmark; actual results depend on workload.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The optimization reduced total execution time from:
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ 15+40+25 = 80\text&#123; minutes&#125; \]</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            to:
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ 8+12+10 = 30\text&#123; minutes&#125; \]</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Overall time reduction:
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ \frac&#123;80-30&#125;&#123;80&#125;\times100 = 62.5\% \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The pipeline is now 62.5% faster in this hypothetical example.
          </p>
        </div>
      );
    case 22:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 8 · Scalability &amp; Cloud Cost Optimization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              22. Pipeline Scalability
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.1 What is Pipeline Scalability?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scalability is the ability of a data pipeline to handle increasing data volume, workload, and concurrency without unacceptable degradation in performance or reliability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Consider a company growing from 100,000 daily records to 100 million daily records.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A pipeline designed for 100,000 records may not handle 100 million records efficiently.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.2 Vertical Scaling</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Vertical scaling increases the resources of a single machine.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Vertical vs. Horizontal Scaling: When to Choose Each</span>
            <a href="https://images.openai.com/static-rsc-4/rCdcC4sH9nVhM0aLJ6eD5_NtNCy-xdTpJc4q4UB6sw73kCS0hXDEAfR1um6XmzFqwDM_3XCMbU8jbN3VOOmu9U75yP9lkjIoNBsPuIGG0oBNIgNXz-DURjTYohOddtHfdplw-ihbmFYorOZ96BMx5E8xugOQSw9ELKmwobwdrYE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">systemdr.systemdrd.com</span>
            <a href="https://systemdr.systemdrd.com/p/vertical-vs-horizontal-scaling-when?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Before: 4 CPU cores 16 GB RAM After: 16 CPU cores 64 GB RAM
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Advantages:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Simple implementation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Less distributed coordination
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            May improve performance quickly
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Disadvantages:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Hardware limits
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Potentially expensive
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Single-machine bottlenecks
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.3 Horizontal Scaling</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Horizontal scaling adds more machines or workers.
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Thy's Roam: MapReduce</span>
            <a href="https://images.openai.com/static-rsc-4/JbMcdaQTUEZ4BKtrC4AdF239RQfpvI4zb2ewDI9NRc-J0mbtxxo_DY07ryQqiTQ48H1nfQKNDsozkI9wG5kg4aZsjcNfGqFZqhzM_zxJRv4w-Ek9nqwUayk-ZI2CMnzLVyX0YX48Opw6u0a67U21V7EYXKny6KogEVrII2ZGURU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">thysrael.github.io</span>
            <a href="https://thysrael.github.io/obsidian-quartz/MapReduce?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Single Worker
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Distributed Cluster Worker 1 Worker 2 Worker 3 Worker 4 Worker 5
              </div>
            </div>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Advantages:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Supports larger workloads
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Enables distributed processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Can improve fault tolerance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Supports elastic infrastructure
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Disadvantages:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network communication overhead
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed coordination
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data shuffling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            More complex operations
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.4 Batch vs Streaming Scalability</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Batch Processing</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Stream Processing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Processes bounded datasets</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Processes continuous events</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Scales through partitions and workers</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Scales through parallel consumers and partitions</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Commonly uses Spark</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Commonly uses Kafka and Flink</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Can process historical data</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Supports low-latency event processing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>22.5 Designing Scalable Pipelines</span>
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A scalable data pipeline should consider:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Partitioning strategy
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Parallelism
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distributed storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute autoscaling
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data skew
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network throughput
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing latency
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backpressure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            State management
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Workload isolation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backpressure
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backpressure occurs when downstream processing cannot keep up with incoming data.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Example:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incoming Events: 100,000/sec Processing Capacity: 50,000/sec
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The system accumulates a backlog.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            If this continues, processing latency increases.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Possible solutions:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Increase processing capacity.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduce unnecessary processing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Improve partition distribution.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply rate limiting.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimize transformations.
          </p>
        </div>
      );
    case 23:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 8 · Scalability &amp; Cloud Cost Optimization
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              23. Cloud Cost Optimization
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.1 What is Cloud Cost Optimization?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud cost optimization is the process of reducing unnecessary cloud expenditure while maintaining required performance, reliability, and security.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Data platforms can generate substantial costs from:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute clusters
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data warehouse queries
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transfer
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Streaming services
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Orchestration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring and logging
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.2 Major Cloud Cost Optimization Techniques</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">The New Databricks SQL Warehouse Advisor Dashboard | by Databricks SQL SME | DBSQL SME Engineering | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/u___wD0ei8y0Lmr_lBj71xsAil8F1kfzfrQxhjsdsSqTmOPBTLBPBugrsv6tR17kogTSIwP0CM8XbftY6bNhC5HOsrXR0BcgABM3jMSNmvv__mWW944TWbgfOGsz9CElual-y959VZWce6BrPPCsxdLUJzSvaVQpvMvDjoAefPs?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Cloud Intelligence Dashboards :: AWS Well-Architected Labs</span>
            <a href="https://images.openai.com/static-rsc-4/VkTIIYo5U8pzVogi7UyulndN0wtyNOWTWeMVLUOGzFH-X9BTyd6Zql3r7o3jKxJHNfoKDy5kqw7PPOUAWcWUEmzvENC4lISh5F2-rCQb_PMq0XccL-k21ZKK3Y9J6WQ7QHCWQ6-OXvtano1c0Z3QMvLgfcLW4K1rv7kDbxBugxY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Compute Activity and Spend Summary | DataOps.live</span>
            <a href="https://images.openai.com/static-rsc-4/HU3i0eRC1gK0jRxLz8qnscwhb1H6gdFfI1WqlgaOsICliIttr0tMGOmY8bgtITHRQ8va1MPrXHWLgoxFvfefbmG7PmJSaEb4XyN8MSEdMo7QZsog03Uh2kg2OADVR5cEtcGUstMqLd2mpNPoQOMYIbfeP7Bz_nt7nWlaiWujQYI?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            11
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>A. Compute optimization</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use appropriately sized clusters.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Shut down idle resources.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use autoscaling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use workload-specific compute.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schedule noncritical processing during cheaper periods where available.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>B. Storage optimization</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compress data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Remove unnecessary duplicate datasets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apply retention policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use appropriate storage tiers.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimize file sizes.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>C. Query optimization</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduce unnecessary table scans.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Avoid repeatedly calculating the same aggregations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Use materialized views when appropriate.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimize joins.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cache reusable results when beneficial.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>D. Cost monitoring</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Track:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost per pipeline
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost per dataset
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost per query
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cost per million records
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Storage growth
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute utilization
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.3 Cost per Million Records</span>
          </h3>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ CostPerMillion = \frac&#123;TotalProcessingCost&#125;&#123;RecordsProcessed&#125; \times 1,000,000 \]</span>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Suppose:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Processing cost = ₹5,000
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Records processed = 10 million
          </p>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ CostPerMillion = \frac&#123;5000&#125;&#123;10,000,000&#125; \times1,000,000 \]</span>
          </div>
          <div className="my-3 p-3 bg-stone-100 rounded-xl font-mono text-xs text-stone-800 text-center overflow-x-auto border border-stone-200">
            <span>\[ CostPerMillion = ₹500 \]</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            This metric can help compare pipeline efficiency over time.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>23.4 FinOps</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            FinOps is a collaborative approach to managing cloud financial operations.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It brings together:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Engineering
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Finance
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Operations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Business teams
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The objective is to make cloud expenditure transparent and align infrastructure spending with business value.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            For data engineers, FinOps includes cost-aware architecture, resource optimization, usage monitoring, and financial accountability.
          </p>
        </div>
      );
    case 24:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Production Readiness, Case Study &amp; Labs
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              24. Production Readiness Reviews
            </h2>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.1 What is a Production Readiness Review (PRR)?</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A Production Readiness Review is a systematic evaluation performed before a data pipeline or data platform is deployed into production.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The purpose is to determine whether the system is ready to operate reliably, securely, efficiently, and recoverably.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            A pipeline that works in development may still fail in production because of:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Large data volumes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Concurrent workloads
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Network failures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Missing monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Unexpected schema changes
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Insufficient permissions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inadequate recovery procedures
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A PRR helps identify these problems before they affect business users.
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.2 Production Readiness Checklist</span>
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data Engineering Production Readiness Checklist
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            0 of 19 completed
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline execution has been tested
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality validations are implemented
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Freshness monitoring is configured
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Volume and distribution monitoring are configured
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema changes are handled safely
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logs, metrics, and traces are available
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            SLIs and SLOs are documented
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Alerts have been tested
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Retry and recovery mechanisms are implemented
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline is idempotent
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backfill procedures are documented
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup and disaster recovery are tested
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            RPO and RTO requirements are defined
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compute and query performance are optimized
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud costs are estimated and monitored
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Security and access controls are reviewed
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data lineage and dependencies are documented
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incident response procedures are documented
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production deployment and rollback procedures are tested
          </p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-6 mb-2 tracking-tight flex items-center gap-2 border-b border-stone-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
            <span>24.3 Production Deployment Process</span>
          </h3>
          <div className="my-4 p-4 rounded-xl bg-stone-900 text-stone-100 border border-stone-800 shadow-md">
            <div className="text-[11px] font-mono tracking-wider text-orange-400 uppercase mb-3 flex items-center gap-1.5 font-semibold">
              <ArrowRight size={13} className="text-orange-400" /> Data Reliability & Architecture Execution Flow
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Development
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Unit Testing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Integration Testing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Data Quality Testing
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Security Review
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                PRR
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Production Deployment
              </div>
              <span className="text-orange-400 font-bold text-xs">→</span>
              <div className="px-3 py-1.5 rounded-lg bg-stone-800 border border-stone-700 text-xs font-mono font-medium text-stone-200 shadow-sm">
                Continuous Observability
              </div>
            </div>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Deployment strategies</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Blue-Green Deployment
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Two production environments are maintained. Traffic is switched to the new environment after validation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Canary Deployment
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The new pipeline is introduced to a limited portion of the workload before expanding deployment.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Rolling Deployment
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Workers or components are updated gradually.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These strategies can reduce deployment risk, although the appropriate method depends on the data architecture.
          </p>
        </div>
      );
    case 25:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Production Readiness, Case Study &amp; Labs
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              25. End-to-End Case Study — Reliable E-Commerce Data Platform
            </h2>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Business Scenario</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            An e-commerce organization processes 10 million orders per month.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Its data platform uses:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            PostgreSQL for operational transactions
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Kafka for event ingestion
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Apache Spark for transformations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Amazon S3 for data lake storage
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Snowflake for analytics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            dbt for analytical transformations
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Airflow for orchestration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Grafana for monitoring
          </p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">How I Built a Production-Grade Real-Time Retail Sales Data Pipeline | by Shrikant Lambe | Mar, 2026 | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/1YxHOSI10DUGM15AKJUKo7ywWshsUgpU7n248MMt4S7aFZ83QUAEv0UMIDaNQof05gb07pcW-XPbtDJsERTqXLTz9KMqZFW4A61oZPVoGSTTSGRh3OwuJ137TxREcTvd0IiLOcAB2sejG4VGt0Wh2tmYLFmMmojJQyBjdrJrnhM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40shrikantlambe/how-i-built-a-production-grade-real-time-retail-sales-data-pipeline-4601430087db?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Existing Problems</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The engineering team identifies the following problems:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Problem</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Business Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Sales pipeline fails frequently</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Revenue reports become incomplete</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data freshness is 3 hours</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Managers make delayed decisions</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Duplicate transactions</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Incorrect revenue reporting</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Spark jobs are slow</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Missed reporting deadlines</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Cloud cost increased by 40%</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Higher operating expenses</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">No disaster recovery plan</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Significant data loss risk</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 1: Establish Reliability Metrics</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The team defines:
          </p>
          <div className="my-4 overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-sm [scrollbar-width:thin]">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-stone-100/90 text-stone-700 font-semibold border-b border-stone-200">
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Metric</th>
                  <th className="py-2.5 px-3.5 font-mono uppercase tracking-wider text-[11px] text-stone-800">Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-700">
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Pipeline success rate</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">99.5%</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data freshness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">Under 15 minutes</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Data completeness</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">At least 99.99%</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Critical warehouse availability</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">99.9%</td>
                </tr>
                <tr className="bg-white hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Recovery Time Objective</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">30 minutes</td>
                </tr>
                <tr className="bg-stone-50/50 hover:bg-orange-50/40 transition-colors">
                  <td className="py-2.5 px-3.5 leading-relaxed font-medium text-stone-900">Recovery Point Objective</td>
                  <td className="py-2.5 px-3.5 leading-relaxed text-stone-600">5 minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            These targets are illustrative and should be justified by business requirements and cost constraints.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 2: Implement Data Observability</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The team introduces:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Freshness monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Volume anomaly detection
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Distribution checks
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Schema validation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality tests
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline lineage tracking
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 3: Implement Failure Recovery</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The team implements:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Exponential backoff
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Checkpointing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Idempotent loading
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Dead-letter queues
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automated retries
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Historical backfills
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 4: Optimize Performance</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The team:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimizes Spark partitioning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduces data shuffling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Improves warehouse queries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Uses columnar storage.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Removes unnecessary transformations.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Introduces autoscaling.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 5: Optimize Cloud Costs</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The team:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Shuts down idle compute.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Applies storage lifecycle policies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimizes warehouse sizing.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitors cost per pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reduces repeated data processing.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Step 6: Establish Incident Management</span>
          </h4>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The team introduces:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Severity-based alerts
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incident ownership
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Root cause analysis
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Postmortem documentation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recovery procedures
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Expected Outcome</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The organization develops a reliable production data platform that delivers accurate and timely data to business users.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            The actual improvement must be measured using production metrics rather than assumed.
          </p>
        </div>
      );
    case 26:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Production Readiness, Case Study &amp; Labs
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              26. Practical Labs
            </h2>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">What is Airflow®? — Airflow 3.1.2 Documentation</span>
            <a href="https://images.openai.com/static-rsc-4/ns4Iuhb3a5mmQ_krtzp4C52Fhk7l2jxkteMCoz8zosUTqLQaRPE6stvhooLH0qAsikKD-osKxSp5fu1JZnTRh6U7XAfzPFGdqk2Zc-MscPx4UszBMsbitla4wuF4AYI1NcUSPdNh7UyAsJSCbRJLcsE3c-L8zTkh62ci0bTTQs0?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Service level objectives in Grafana Cloud | Grafana SLODatabase Observability | Grafana Cloud | Grafana Labs</span>
            <a href="https://images.openai.com/static-rsc-4/fgaIoMNqYDgMENimFqt6hJrd1PzgDTDl2EvZczHaw9w7-87UaurNlcnRNB6KEbrf8OBnTbKwZNGUwlhc6rRsvMQrXDdLQMaoOvIdzRj_jtdwIF8iWDIhkHd1itbexvLqD1z0UdR7AFcDlTQGKR-T43pVK1wmLWbC895VyRdcIWM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Web UI - Spark 3.5.6 Documentation</span>
            <a href="https://images.openai.com/static-rsc-4/7M7v1suqaKVS-gBCKDGaLT4lbw0v1MUJmBDKn1OinbfnQeJ08vGtyaXW-rNHhbt11I7-ErBP7rx3_rZoaCxUcBG3ab-b_Z_KoHoQ_5IiMAmzYdsYXo00kRxGdEVi7JpCn61JtrHrFH4zLhfXxzHNnx9G2QmuaAZzwHhFlixzLME?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            10
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Lab 1 — Pipeline Monitoring with Apache Airflow</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitor a batch pipeline and identify failed executions.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Tasks</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Install Apache Airflow.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a DAG with three tasks.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configure task dependencies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Introduce a task failure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Inspect execution logs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Configure retries.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Measure execution duration.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a failure alert.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: pipeline monitoring, logs, retries, execution status.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Lab 2 — Data Quality Monitoring with SQL</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify data quality problems in a sales dataset.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            Sample dataset:
          </p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3 shadow-inner">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE sales (
    transaction_id INT,
    customer_id INT,
    amount DECIMAL(10,2),
    transaction_date DATE
);`}</code>
            </pre>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Tasks:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify null transaction IDs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify duplicate transaction IDs.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detect negative amounts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detect missing transaction dates.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Calculate daily transaction volume.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a data quality report.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: data quality, uniqueness, completeness, volume monitoring.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Lab 3 — Data Observability with Great Expectations</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Implement automated data validation.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Tasks:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Load a sales dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Define required columns.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate column data types.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate null constraints.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate transaction amount constraints.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Generate validation results.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Integrate the tests into a pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: automated validation and quality alerting.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Lab 4 — Spark Performance Optimization</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimize a slow distributed transformation.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Tasks:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Load a large dataset.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Execute a join.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Examine the execution plan.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Identify data skew.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Improve partitioning.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Compare execution time.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Measure resource utilization.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: distributed performance optimization.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Lab 5 — Disaster Recovery Simulation</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Objective
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Test recovery after a data pipeline failure.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Tasks:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Create a sample pipeline.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Store checkpoints.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Simulate a processing failure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Restore from the checkpoint.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reprocess missing data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Validate record counts.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Measure recovery time.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Document RPO and RTO.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Expected learning: disaster recovery and recovery validation.
          </p>
        </div>
      );
    case 27:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Production Readiness, Case Study &amp; Labs
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              27. Module 21 — Final Assessment
            </h2>
          </div>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Conceptual Questions</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is Data Reliability Engineering?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain the difference between data monitoring and data observability.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are the five pillars of data observability?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain freshness, volume, distribution, and schema monitoring.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What are SLIs, SLOs, and SLAs?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain error budgets.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is root cause analysis?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain checkpointing and backfilling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a dead-letter queue?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain retry and circuit-breaking strategies.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is disaster recovery?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Differentiate RPO and RTO.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain vertical and horizontal scaling.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is data skew?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Explain query optimization techniques.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is cloud cost optimization?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            What is a production readiness review?
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Advanced Interview Questions</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you design a data pipeline with 99.9% availability?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you detect silent data corruption?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you recover a pipeline that has processed 80% of its workload before failing?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you prevent duplicate records during pipeline retries?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you investigate a sudden 10x increase in pipeline duration?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you design a data platform with an RPO of 5 minutes and an RTO of 30 minutes?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you reduce cloud costs without sacrificing reliability?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you monitor a real-time streaming pipeline?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you detect schema changes that break downstream consumers?
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            How would you handle an incident where the pipeline succeeds but the dashboard reports incorrect revenue?
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Final Capstone Project</span>
          </h4>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">Unified Data Reliability Stack</span>
            <a href="https://images.openai.com/static-rsc-4/bg_d17XkErupobqBVsohF55UB0KlW6Y2L3RvDJi5IlZoBqzmB5eUV7EzdcK-rRLJt_FpyUocU1T5bZ0xp_U1OyCpfqBTd7ggkas1HmKPGIAHFts-y1fza_lzojZaSVw5_fmgcz2DoZk60OyObsHV6Kzigw7caBY8wHP8tAJc1G4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs shadow-sm hover:border-orange-300 transition-colors">
            <span className="font-semibold text-stone-800 truncate">linkedin.com</span>
            <a href="https://www.linkedin.com/pulse/unified-data-reliability-stack-karthikeyan-kaliyaperumal-l1bee/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Documentation</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Project: Production-Grade Reliable Data Platform
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Build a data platform that ingests, processes, and analyzes e-commerce transactions.
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Required components:</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data ingestion
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Batch processing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data transformation
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data warehouse
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline orchestration
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality testing
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data observability
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Logging and metrics
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Automated failure recovery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Backup and disaster recovery
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Query performance optimization
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud cost monitoring
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production readiness documentation
          </p>
          <h4 className="text-sm font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2 font-mono">
            <span className="text-orange-600">▸</span>
            <span>Deliverables</span>
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Complete architecture diagram.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Pipeline implementation.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Data quality test suite.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Monitoring dashboard.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Reliability metrics report.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Incident response playbook.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Disaster recovery plan.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Performance benchmark.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Cloud cost analysis.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Production readiness checklist.
          </p>
        </div>
      );
    case 28:
      return (
        <div className="space-y-4">
          <div className="border-b border-stone-200 pb-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-orange-600 font-semibold bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200">
              Part 9 · Production Readiness, Case Study &amp; Labs
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-2 tracking-tight">
              28. Module 21 — Key Takeaways
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            By completing this module, students should understand that reliable data engineering is not simply about building pipelines that execute successfully.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            It is about designing systems that:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Deliver accurate and complete data.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Detect failures before business users are affected.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Recover safely from unexpected problems.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Meet freshness and availability requirements.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Scale as data volume grows.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Maintain performance under production workloads.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Optimize cloud expenditure.
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            Provide measurable reliability guarantees.
          </p>
          <p className="text-xs sm:text-sm font-semibold text-stone-800 mt-3 mb-1.5">
            The fundamental principle of Data Reliability Engineering is:
          </p>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed my-2">
            A data pipeline is not production-ready merely because it works. It is production-ready when its correctness, reliability, performance, monitoring, and recovery behavior have been designed and validated.
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

export default ReliabilitySection;
