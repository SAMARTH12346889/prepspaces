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
  BarChart3,
  Split,
  Merge,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

export default function DataEngineeringDbtSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 13: Analytics Engineering and dbt Overview & Roadmap */}
      <section id="overview" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Roadmap
          </span>
          <span className="text-xs font-mono text-stone-500">Course Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 13: Analytics Engineering and dbt Overview & Roadmap
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 13 — Analytics Engineering and dbt</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Engineering Master Course · SQL Transformation, Data Modeling and Analytics Engineering</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module objective: Understand how raw data is transformed into clean, reliable, tested, documented and business-ready datasets using dbt (Data Build Tool).</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This module builds on the previous two modules:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Module 11 — Apache Spark: You learned how to process large datasets using distributed computing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Module 12 — Apache Airflow: You learned how to schedule, automate and orchestrate data pipelines.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 13 — dbt: You will learn how to transform warehouse data into reliable analytical datasets using modular SQL, testing, documentation and software engineering practices.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">By the end, you should be able to develop a complete dbt project, manage model dependencies, build incremental transformations, implement data quality tests, generate lineage documentation and deploy transformations through CI/CD.</p>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            Understanding dbt versions
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The dbt ecosystem has evolved, so there are two generations worth understanding:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Generation</th>                  <th className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">dbt v1.x</td>                  <td className="px-4 py-2.5 text-stone-700">Python-based dbt Core generation, widely used in existing open-source projects</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">dbt v2.x</td>                  <td className="px-4 py-2.5 text-stone-700">Newer Rust-based generation, released in September 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The examples in this module use the modern dbt project conventions, including the newer test-argument syntax. Where installation or command behavior differs between generations, it will be identified. This is important when working with existing company projects as well as new installations.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+2`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 1: 1. Introduction to Analytics Engineering */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Analytics Engineering Foundations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction to Analytics Engineering
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.1 What is Analytics Engineering?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytics Engineering is the discipline of transforming raw data into reliable, structured and well-documented datasets that can be used for analytics, reporting, business intelligence and decision-making.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It combines concepts from three different areas:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data Engineering.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data Analytics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Software Engineering.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Traditionally, Data Engineers build infrastructure and move data between systems, while Data Analysts query the data and generate reports.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>However, raw data is not always ready for business analysis.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It may contain:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Duplicate transactions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Missing customer information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Inconsistent date formats.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incorrect product categories.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Different currency representations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Unstandardized business terminology.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Records that violate business rules.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Analytics Engineering creates a structured transformation layer between raw data and business consumption.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.2 Understanding Analytics Engineering with an Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce company operating in India, the United States and Europe.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It collects data from:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Website orders.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer registration systems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment gateways.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Product databases.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Delivery platforms.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Marketing applications.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The raw datasets may look like this.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Raw orders table</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">order_id</th>                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">amount</th>                  <th className="px-4 py-3">order_status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">5000</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">C002</td>                  <td className="px-4 py-2.5 text-stone-700">3000</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">103</td>                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">2000</td>                  <td className="px-4 py-2.5 text-stone-700">pending</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">104</td>                  <td className="px-4 py-2.5 text-stone-700">C003</td>                  <td className="px-4 py-2.5 text-stone-700">4500</td>                  <td className="px-4 py-2.5 text-stone-700">COMPLETED</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">105</td>                  <td className="px-4 py-2.5 text-stone-700">C002</td>                  <td className="px-4 py-2.5 text-stone-700">3000</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are several problems:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Order status capitalization is inconsistent.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Duplicate transactions may exist.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer details are stored elsewhere.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Revenue calculations are not standardized.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The business has no consistent definition of completed revenue.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A business analyst cannot simply query this table and assume that the results are correct.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An Analytics Engineer builds transformation models that standardize these datasets.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Cleaned orders</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">order_id</th>                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">amount</th>                  <th className="px-4 py-3">order_status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">5000</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">C002</td>                  <td className="px-4 py-2.5 text-stone-700">3000</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">103</td>                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">2000</td>                  <td className="px-4 py-2.5 text-stone-700">pending</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">104</td>                  <td className="px-4 py-2.5 text-stone-700">C003</td>                  <td className="px-4 py-2.5 text-stone-700">4500</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">105</td>                  <td className="px-4 py-2.5 text-stone-700">C002</td>                  <td className="px-4 py-2.5 text-stone-700">3000</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Next, the Analytics Engineer builds business-ready tables.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customer revenue</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">total_revenue</th>                  <th className="px-4 py-3">completed_orders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">5000</td>                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">C002</td>                  <td className="px-4 py-2.5 text-stone-700">6000</td>                  <td className="px-4 py-2.5 text-stone-700">2</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">C003</td>                  <td className="px-4 py-2.5 text-stone-700">4500</td>                  <td className="px-4 py-2.5 text-stone-700">1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Now analysts can use the prepared dataset without repeatedly writing complex transformation logic.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.3 Responsibilities of an Analytics Engineer</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An Analytics Engineer typically performs the following responsibilities:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data transformation: Convert raw datasets into clean analytical models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data modeling: Design fact tables, dimension tables and business-level datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data quality: Create tests to verify data assumptions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Documentation: Explain what datasets and columns represent.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data lineage: Track where data originated and how transformations depend on one another.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business logic: Implement consistent definitions for revenue, customer retention, product performance and other metrics.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Version control: Manage transformation code through Git.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Deployment: Test and release transformation changes safely.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.4 Data Engineer vs Analytics Engineer vs Data Analyst</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Responsibility</th>                  <th className="px-4 py-3">Data Engineer</th>                  <th className="px-4 py-3">Analytics Engineer</th>                  <th className="px-4 py-3">Data Analyst</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Data ingestion</td>                  <td className="px-4 py-2.5 text-stone-700">Primary</td>                  <td className="px-4 py-2.5 text-stone-700">Sometimes</td>                  <td className="px-4 py-2.5 text-stone-700">Rarely</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Distributed processing</td>                  <td className="px-4 py-2.5 text-stone-700">Primary</td>                  <td className="px-4 py-2.5 text-stone-700">Sometimes</td>                  <td className="px-4 py-2.5 text-stone-700">Rarely</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">SQL transformation</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>                  <td className="px-4 py-2.5 text-stone-700">Primary</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Data modeling</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>                  <td className="px-4 py-2.5 text-stone-700">Primary</td>                  <td className="px-4 py-2.5 text-stone-700">Uses models</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Data quality testing</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>                  <td className="px-4 py-2.5 text-stone-700">Primary</td>                  <td className="px-4 py-2.5 text-stone-700">Validates results</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Documentation</td>                  <td className="px-4 py-2.5 text-stone-700">Infrastructure and data</td>                  <td className="px-4 py-2.5 text-stone-700">Models and business definitions</td>                  <td className="px-4 py-2.5 text-stone-700">Reports and insights</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Reporting</td>                  <td className="px-4 py-2.5 text-stone-700">Supports</td>                  <td className="px-4 py-2.5 text-stone-700">Prepares datasets</td>                  <td className="px-4 py-2.5 text-stone-700">Primary</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Business insights</td>                  <td className="px-4 py-2.5 text-stone-700">Supports</td>                  <td className="px-4 py-2.5 text-stone-700">Enables</td>                  <td className="px-4 py-2.5 text-stone-700">Primary</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There is overlap between these roles, particularly in smaller companies. The distinction describes their main areas of responsibility rather than strict job boundaries.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.5 The Modern Analytics Engineering Workflow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A typical analytics engineering architecture looks like this:</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">How to Write a High-Quality Data Model From Start to Finish Using dbt | Airbyte</span>
            <a href="https://images.openai.com/static-rsc-4/qin_rqeMYf0Aj73SUBoYu8cfQuBBq_9l9u92QJhSAfiSoizQgWFGE2EOMkFISXuqrzcHM_AiaV81Eh4f4Xg1lfALla1_PaHYiH8uFOwT7JjWksIvwrYVKYAgf_VHJXJNVH2K8mqg_EBj3MidFaT7-AfG-2XjvSUdIMaLSC5eRz0?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">airbyte.com</span>
            <a href="https://airbyte.com/blog/dbt-data-model?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The workflow:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data arrives from source systems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Ingestion tools load raw data into a data warehouse.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt reads the raw data using SQL.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Staging models clean and standardize the data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Intermediate models implement reusable business transformations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Mart models create business-ready datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data tests validate model correctness.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Documentation explains models and relationships.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>BI tools consume the prepared datasets.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.6 Why Analytics Engineering matters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider two approaches.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Without Analytics Engineering</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Every analyst independently calculates revenue, customer lifetime value and order counts.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This can produce inconsistent results because different analysts may use different definitions.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With Analytics Engineering`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A centralized model defines revenue and customer metrics once.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>All downstream analysts use the same validated transformation.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This provides:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Consistent business metrics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reusable SQL.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Improved query reliability.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reduced duplicated logic.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Easier maintenance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Better collaboration between engineering and analytics teams.</span>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            Analytics Engineering transforms data into trusted business information rather than simply moving data between systems.
          </div>
        </div>
      </section>

      {/* SECTION 2: 2. What is dbt? */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · dbt Ecosystem & Paradigms</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. What is dbt?
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.1 Introduction to dbt</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt stands for Data Build Tool.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is a data transformation framework that allows engineers to transform data already available in a data warehouse or supported data platform using SQL and Jinja templating.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of writing one large SQL query, dbt allows developers to divide transformation logic into smaller, reusable models.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It also provides:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Dependency management.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data testing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Documentation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data lineage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incremental transformations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snapshot management.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reusable macros.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CI/CD integration.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.2 What problem does dbt solve?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an organization has 200 analytical SQL queries.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Many queries repeat the same logic.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, SUM(amount) AS total_revenue FROM orders WHERE order_status = 'completed' GROUP BY customer_id;`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The same logic may be copied into multiple reporting queries.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This creates maintenance problems.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the business changes the definition of completed revenue.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Every query must be updated manually.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With dbt, you can create one reusable model:
-- models/customer_revenue.sql SELECT customer_id, SUM(amount) AS total_revenue FROM raw_orders WHERE order_status = 'completed' GROUP BY customer_id;`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Other models can reference it rather than duplicating the SQL.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.3 How dbt works</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt is not itself a database or a replacement for a data warehouse.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It executes transformations against the connected data platform.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, it can work with platforms such as:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>PostgreSQL.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snowflake.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Google BigQuery.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Amazon Redshift.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Databricks.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Microsoft Fabric and other supported platforms.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its core workflow is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SQL Models | v Jinja SQL | v dbt Compiler | v Dependency Graph | v SQL Execution | v Data Warehouse | v Analytical Tables`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The target data platform performs the SQL operations.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt manages the project, compiles the code, orders dependencies and executes the appropriate statements.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.4 Important dbt concepts</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Concept</th>                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Project</td>                  <td className="px-4 py-2.5 text-stone-700">Complete collection of dbt configuration and resources</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Model</td>                  <td className="px-4 py-2.5 text-stone-700">SQL transformation that produces a dataset</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Source</td>                  <td className="px-4 py-2.5 text-stone-700">Declaration of an existing input table</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Ref</td>                  <td className="px-4 py-2.5 text-stone-700">Reference to another dbt model or enabled version</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Materialization</td>                  <td className="px-4 py-2.5 text-stone-700">Method used to persist model output</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Seed</td>                  <td className="px-4 py-2.5 text-stone-700">Version-controlled CSV reference data</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Snapshot</td>                  <td className="px-4 py-2.5 text-stone-700">Historical tracking of changes in source records</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Test</td>                  <td className="px-4 py-2.5 text-stone-700">Validation of an expected data condition</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Macro</td>                  <td className="px-4 py-2.5 text-stone-700">Reusable SQL/Jinja logic</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Package</td>                  <td className="px-4 py-2.5 text-stone-700">Reusable collection of dbt resources</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Manifest</td>                  <td className="px-4 py-2.5 text-stone-700">Artifact describing the parsed project and its graph</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.5 What dbt does and does not do</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">dbt does</th>                  <th className="px-4 py-3">dbt does not primarily do</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Transform warehouse data</td>                  <td className="px-4 py-2.5 text-stone-700">Replace a database</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Build SQL models</td>                  <td className="px-4 py-2.5 text-stone-700">Replace data ingestion systems</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Track model dependencies</td>                  <td className="px-4 py-2.5 text-stone-700">Act as a distributed computing cluster</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Test data assumptions</td>                  <td className="px-4 py-2.5 text-stone-700">Automatically guarantee perfect data</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Generate model documentation</td>                  <td className="px-4 py-2.5 text-stone-700">Replace a complete BI platform</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Manage snapshots</td>                  <td className="px-4 py-2.5 text-stone-700">Replace transactional source databases</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Integrate with orchestration</td>                  <td className="px-4 py-2.5 text-stone-700">Replace Apache Airflow for every workflow</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2.6 dbt vs Apache Spark vs Apache Airflow</td>                  <td className="px-4 py-2.5 text-stone-700">This distinction is extremely important because these technologies often work together.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">🚀 Building a Modern ELT Pipeline with dbt, Snowflake &amp; Airflow | by Shreyas Karle | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/ZNtUcuAInI6He9o1vpRL0zrYYQklebqWrQRTS3r2C-tk8E8no1MRJbP_twGB07bDINoGN5fLU4jt3xzNmk3wanRVO0XFaGd-mSvpiOVWm6vzRV7yR8sWmGhr3fFpvUtB7hqqKh95mMrj3sb9KJAViNvC2cTC8Olqb_0T2FDQDe0?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40ShreyasKarle/building-a-modern-elt-pipeline-with-dbt-snowflake-airflow-db518f109248?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>                  <th className="px-4 py-3">Apache Spark</th>                  <th className="px-4 py-3">Apache Airflow</th>                  <th className="px-4 py-3">dbt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Main purpose</td>                  <td className="px-4 py-2.5 text-stone-700">Distributed data processing</td>                  <td className="px-4 py-2.5 text-stone-700">Workflow orchestration</td>                  <td className="px-4 py-2.5 text-stone-700">Analytics transformations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Primary language</td>                  <td className="px-4 py-2.5 text-stone-700">Python, Scala, Java, SQL</td>                  <td className="px-4 py-2.5 text-stone-700">Python</td>                  <td className="px-4 py-2.5 text-stone-700">SQL and Jinja</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Execution</td>                  <td className="px-4 py-2.5 text-stone-700">Distributed engine</td>                  <td className="px-4 py-2.5 text-stone-700">Task execution mechanisms</td>                  <td className="px-4 py-2.5 text-stone-700">Warehouse or platform execution</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Scheduling</td>                  <td className="px-4 py-2.5 text-stone-700">Not its main role</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>                  <td className="px-4 py-2.5 text-stone-700">Can be provided by dbt platform or external orchestrator</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Data testing</td>                  <td className="px-4 py-2.5 text-stone-700">Possible through code</td>                  <td className="px-4 py-2.5 text-stone-700">Coordinates tests</td>                  <td className="px-4 py-2.5 text-stone-700">Built-in testing framework</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Data lineage</td>                  <td className="px-4 py-2.5 text-stone-700">Execution-oriented</td>                  <td className="px-4 py-2.5 text-stone-700">Task-oriented</td>                  <td className="px-4 py-2.5 text-stone-700">Model dependency graph</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Main use</td>                  <td className="px-4 py-2.5 text-stone-700">Large-scale computation</td>                  <td className="px-4 py-2.5 text-stone-700">Coordinates complete pipelines</td>                  <td className="px-4 py-2.5 text-stone-700">Creates trusted analytical datasets</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-world combination:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Spark processes large raw datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Processed results are stored in a data lake or warehouse.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Airflow coordinates the next transformation workflow.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt creates staging, intermediate and business-facing models.
dbt tests validate the models.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>BI platforms consume the final datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is a common modern data platform architecture.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+2`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3. dbt Architecture and Workflow */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Core Architecture & Compilation Graph</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. dbt Architecture and Workflow
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.1 Understanding dbt architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt is composed of project files, a runtime or engine, a database adapter, and a target data platform.`}</code>
            </pre>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">DBT Models Explained: Materializations, ref(), and Sources (The Practical Way)</span>
            <a href="https://images.openai.com/static-rsc-4/gk9YzYYEaUXZpKBj0PV_hpPvuvUIaTUiVQ36HXWvPdIa0B3ixwQqVEh2QgXMXw_yZp3K8gZZDXkIEs8ibYYZV5_oh1tVoDepK8P1MCWguK6pyJoja1N37wxeBiYwo1mKRLXETrDbC8jw7vRsoxpDsKGvCO9pryQ_ea4JH3ViGBE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">linkedin.com</span>
            <a href="https://www.linkedin.com/pulse/dbt-models-explained-materializations-ref-sources-practical-saif-ali-7rpzc?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Let's understand its major components.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. dbt Project</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Contains:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>SQL models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>YAML configuration.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Macros.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Seeds.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snapshots.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Project configuration.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. dbt Engine</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Responsible for understanding the project, compiling transformations, generating metadata and coordinating execution.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Database Adapter</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Provides platform-specific behavior for the target data platform.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a PostgreSQL adapter communicates with PostgreSQL, while a Snowflake adapter communicates with Snowflake.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Data Warehouse</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Executes the generated SQL statements and stores the resulting relations.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Artifacts</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt generates files containing information about project structure and execution.
Important artifacts include:`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>manifest.json</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>run_results.json</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>catalog.json, where generated/configured</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compiled SQL files.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.2 Understanding the complete workflow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose you have three models:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`stg_orders | v int_order_details | v fct_sales
The workflow is:`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 1: Developer writes SQL models.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 2: dbt parses the project.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 3: dbt resolves ref() and source() dependencies.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 4: dbt generates a dependency graph.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 5: dbt compiles SQL and Jinja into executable SQL.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 6: The adapter submits statements to the warehouse.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 7: The warehouse creates or updates models.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 8: Tests validate the generated datasets.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 9: dbt generates metadata and documentation artifacts.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.3 Understanding compilation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider this dbt model:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT order_id, customer_id, amount FROM {{ ref('stg_orders') }}`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The ref() function tells dbt that this model depends on another model.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt resolves the reference to the correct database relation.
Conceptual compiled SQL:
SELECT order_id, customer_id, amount FROM analytics.staging.stg_orders`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The actual database, schema and relation names depend on project configuration and the selected target.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.4 Why does dbt compile SQL?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compilation helps dbt:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Resolve model references.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Replace Jinja expressions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apply configurations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Generate warehouse-specific SQL.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build dependency information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validate the project structure.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You can examine compiled SQL through:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt compile`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The target/ directory contains generated project artifacts, including compiled SQL for applicable resources.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.5 Understanding the dependency graph</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt automatically constructs dependencies from model references.
For example:
Sources | v stg_customers | v int_customers_orders | v dim_customers | v customer_metrics
dbt can use this graph to determine the correct execution order and which dependent models should be included in a selected build.`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 4: 4. dbt Core Installation and Configuration */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Setup & Profiles Configuration</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. dbt Core Installation and Configuration
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.1 What is dbt Core?</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Core refers to the open-source dbt framework historically distributed as a Python package.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It enables developers to build and execute dbt projects locally or within their own infrastructure.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With dbt Core, you can:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Develop SQL models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compile transformations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Execute models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Run tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Manage snapshots.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Load seeds.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Generate documentation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Integrate dbt with Git and Airflow.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historically, dbt Core was installed with a database-specific adapter.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The newer dbt v2 generation uses a Rust-based runtime and provides a different installation experience.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>For this course, you should understand both, because existing company projects may still run dbt Core v1.x.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.2 Understanding database adapters</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt needs an adapter to communicate with a target data platform.
Examples:`}</code>
            </pre>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Data platform</th>                  <th className="px-4 py-3">Common adapter/package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">PostgreSQL</td>                  <td className="px-4 py-2.5 text-stone-700">dbt-postgres</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Snowflake</td>                  <td className="px-4 py-2.5 text-stone-700">dbt-snowflake</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">BigQuery</td>                  <td className="px-4 py-2.5 text-stone-700">dbt-bigquery</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Redshift</td>                  <td className="px-4 py-2.5 text-stone-700">dbt-redshift</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Databricks</td>                  <td className="px-4 py-2.5 text-stone-700">dbt-databricks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The adapter translates dbt operations into the operations supported by the target platform.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.3 Installing dbt locally</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>For learning, we will use PostgreSQL as our target database.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>First, create a Python virtual environment.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Windows PowerShell:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`mkdir dbt-learning cd dbt-learning python -m venv .venv .venv\\Scripts\\Activate.ps1
Linux/macOS:
mkdir dbt-learning cd dbt-learning python -m venv .venv source .venv/bin/activate
For the classic dbt Core v1.x installation:
python -m pip install dbt-postgres`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This installs the PostgreSQL adapter and its compatible dbt Core dependencies.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For the newer dbt v2 installation:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`python -m pip install dbt`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The v2 installer provides the current Rust-based dbt experience. For a chosen warehouse, check the corresponding adapter and driver support before configuring the connection.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Verify the installation:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt --version
Check the available commands:
dbt --help`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.4 Creating your first dbt project</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The dbt init command creates a new project.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt init ecommerce_analytics
The setup process asks for information such as:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Project name.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Database adapter.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Warehouse connection details.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It creates a new project directory and can configure a local connection profile.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.5 Connecting dbt to PostgreSQL</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>For a local PostgreSQL installation, your profile will contain connection information.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The traditional local profile file is:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>~/.dbt/profiles.yml</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ecommerce_analytics: target: dev outputs: dev: type: postgres host: localhost user: dbt_user password: "&#123;&#123; env_var('DBT_PASSWORD') &#125;&#125;" port: 5432 dbname: ecommerce schema: dbt_dev threads: 4</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Explanation:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Field</th>                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">profile name</td>                  <td className="px-4 py-2.5 text-stone-700">Identifies the dbt connection profile</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">target</td>                  <td className="px-4 py-2.5 text-stone-700">Selects the active environment</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">type</td>                  <td className="px-4 py-2.5 text-stone-700">Specifies the adapter</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">host</td>                  <td className="px-4 py-2.5 text-stone-700">Database server address</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">user</td>                  <td className="px-4 py-2.5 text-stone-700">Database username</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">password</td>                  <td className="px-4 py-2.5 text-stone-700">Database password</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">port</td>                  <td className="px-4 py-2.5 text-stone-700">Database port</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">dbname</td>                  <td className="px-4 py-2.5 text-stone-700">Database name</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">schema</td>                  <td className="px-4 py-2.5 text-stone-700">Default output schema</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">threads</td>                  <td className="px-4 py-2.5 text-stone-700">Maximum model execution threads for supported project execution</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use an environment variable rather than placing a real password directly in the configuration.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The corresponding environment variable can be set in PowerShell:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`\$env:DBT_PASSWORD="your_local_database_password"`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.6 Understanding dbt_project.yml</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Every dbt project contains a configuration file named:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>dbt_project.yml</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`name: ecommerce_analytics version: "1.0.0" config-version: 2 profile: ecommerce_analytics model-paths: - models seed-paths: - seeds snapshot-paths: - snapshots test-paths: - tests macro-paths: - macros target-path: target clean-targets: - target - dbt_packages models: ecommerce_analytics: staging: +materialized: view marts: +materialized: table`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This configuration tells dbt how the project is organized and how model materializations should be configured.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.7 Testing your database connection</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Run:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt debug`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This checks the project configuration and whether dbt can connect to the configured target.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You can also run:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt parse`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This checks and parses your project without executing the transformations against the warehouse.</span>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            dbt v2 and dbt Core v1 have different installation and runtime requirements. Use the version-specific official setup instructions for your chosen adapter.
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+3`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 5: 5. Building dbt Projects */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Project Structure & Layering (Staging, Int, Marts)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. Building dbt Projects
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A dbt project is the complete structure containing transformation logic, configuration, tests, documentation and other resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Good project organization is important because production dbt projects may contain hundreds or thousands of models.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.1 Recommended project structure</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For our e-commerce project:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`ecommerce_analytics/ │ ├── dbt_project.yml │ ├── models/ │ │ │ ├── staging/ │ │ ├── sources.yml │ │ │ │ │ ├── ecommerce/ │ │ │ ├── stg_orders.sql │ │ │ ├── stg_customers.sql │ │ │ └── stg_products.sql │ │ │ │ │ └── payments/ │ │ └── stg_payments.sql │ │ │ ├── intermediate/ │ │ ├── int_orders_customers.sql │ │ └── int_payment_orders.sql │ │ │ ├── marts/ │ │ ├── finance/ │ │ │ └── fct_revenue.sql │ │ │ │ │ ├── marketing/ │ │ │ └── fct_campaign_performance.sql │ │ │ │ │ └── customers/ │ │ ├── dim_customers.sql │ │ └── customer_metrics.sql │ │ │ └── schema.yml │ ├── seeds/ │ └── country_codes.csv │ ├── snapshots/ │ └── customers_snapshot.yml │ ├── tests/ │ └── assert_positive_revenue.sql │ ├── macros/ │ └── cents_to_dollars.sql │ ├── analyses/ │ ├── .gitignore │ └── README.md`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.2 Understanding the folder structure</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`models/`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains SQL models that transform input data into analytical datasets.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>staging/</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains initial cleaning and standardization of source tables.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>intermediate/</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains reusable transformation logic between staging and marts.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>marts/</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains business-facing datasets for reporting and analytics.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`seeds/`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains small, version-controlled CSV reference datasets.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`snapshots/`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains historical tracking definitions.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`tests/`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains custom data quality test queries.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`macros/`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains reusable Jinja and SQL logic.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>analyses/</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains analytical SQL files that dbt can compile but does not materialize as standard models.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.3 Recommended three-layer model organization</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">dbt Production Best Practices: 10 Tips for Reliable Data Models | Tech with Abhishek</span>
            <a href="https://images.openai.com/static-rsc-4/pkQ45V_OFlJB8OWymNnN8-4DeE5DgSGe_LKT90BpOl7EpVusKBC5njt7hJ49QHQlsab7jxW-Yw6b8KypDCAytScjH4EVV0wvz7TCHPlHQp4bhBdDANkoS3bWq9so9nv6UOTGK6NubTaJxijrwoCXLYnNhOECzfkrbeeevxyNDeQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/tech-with-abhishek/10-game-changing-dbt-tips-i-wish-i-knew-before-my-first-production-model-363f46b215f0?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Layer 1 — Staging</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Purpose:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Rename columns.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Standardize data types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Normalize statuses.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Handle basic source-specific cleaning.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create consistent names.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Layer 2 — Intermediate</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Purpose:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Join staging models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement reusable transformations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Prepare complex calculations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Standardize business logic across downstream models.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Layer 3 — Marts</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Purpose:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create fact and dimension tables.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build customer metrics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Calculate revenue.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Prepare reporting datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Support BI dashboards.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This architecture creates a clean separation between source-specific logic and business-facing analytics.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.4 Understanding model naming conventions</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Professional dbt projects often use naming prefixes.</span>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Prefix</th>                  <th className="px-4 py-3">Meaning</th>                  <th className="px-4 py-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">stg_</td>                  <td className="px-4 py-2.5 text-stone-700">Staging</td>                  <td className="px-4 py-2.5 text-stone-700">stg_orders</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">int_</td>                  <td className="px-4 py-2.5 text-stone-700">Intermediate</td>                  <td className="px-4 py-2.5 text-stone-700">int_order_details</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">dim_</td>                  <td className="px-4 py-2.5 text-stone-700">Dimension table</td>                  <td className="px-4 py-2.5 text-stone-700">dim_customers</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">fct_</td>                  <td className="px-4 py-2.5 text-stone-700">Fact table</td>                  <td className="px-4 py-2.5 text-stone-700">fct_sales</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">rpt_</td>                  <td className="px-4 py-2.5 text-stone-700">Reporting model</td>                  <td className="px-4 py-2.5 text-stone-700">rpt_monthly_revenue</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Naming conventions improve readability and help developers understand the role of each model.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.5 Model configuration</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You can configure models using SQL files, YAML properties or dbt_project.yml.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example inside SQL:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{{ config( materialized='table', schema='analytics' ) }} SELECT order_id, customer_id, amount FROM raw_orders`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For the complete project, centralize common configurations in dbt_project.yml and use model-specific configurations only where necessary.</p>
        </div>
      </section>

      {/* SECTION 6: 6. Models and Model Dependencies */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Model SQL & Selection Syntax</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. Models and Model Dependencies
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.1 What is a dbt model?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A model is a SQL file containing a SELECT query that defines how a dataset should be created.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`models/staging/stg_orders.sql
SELECT order_id, customer_id, product_id, amount, order_status, order_date FROM raw_ecommerce.orders`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>When dbt executes this model, it creates the target relation according to its configured materialization.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A model can be:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A view.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A table.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An incremental table.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An ephemeral model.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A materialized view, when supported by the adapter.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.2 Models are not necessarily physical tables</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is an important distinction.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A model defines transformation logic.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The materialization determines how dbt represents the model in the target database.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{{ config(materialized='view') }} SELECT * FROM raw_ecommerce.orders`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This creates a database view rather than a physical table.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.3 Understanding model dependencies</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose our e-commerce company has three models.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Model 1 — Staging Orders</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`-- stg_orders.sql SELECT order_id, customer_id, amount FROM raw_ecommerce.orders`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Model 2 — Intermediate Orders</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`-- int_orders.sql SELECT order_id, customer_id, amount FROM {{ ref('stg_orders') }} WHERE amount > 0`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Model 3 — Revenue Fact</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`-- fct_revenue.sql SELECT customer_id, SUM(amount) AS total_revenue FROM {{ ref('int_orders') }} GROUP BY customer_id
Dependencies:
Raw Orders | v stg_orders | v int_orders | v fct_revenue
dbt automatically recognizes the model dependencies from the ref() statements.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.4 Why are model dependencies important?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They allow dbt to:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Determine execution order.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Execute independent models in parallel.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build downstream models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Identify affected models after a change.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Generate lineage graphs.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Select specific parts of a project.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.5 Selecting models</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You can execute a specific model:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt run --select stg_orders
Execute a model and its downstream dependents:
dbt run --select stg_orders+
Execute a model and its upstream dependencies:
dbt run --select +fct_revenue
Execute both upstream and downstream dependencies:
dbt run --select +int_orders+`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is particularly useful in large projects where rebuilding everything is unnecessary.</span>
          </div>
        </div>
      </section>

      {/* SECTION 7: 7. Sources and References */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Sources, ref() & Freshness Checks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Sources and References
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Sources and references are among the most fundamental dbt concepts.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.1 What is a Source?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A source represents an existing table or data object that exists outside dbt's model graph.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a company may have already loaded raw data into PostgreSQL or Snowflake.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database: ecommerce Schema: raw Tables: orders customers products payments</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These tables were produced by ingestion systems, not by dbt models.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt declares them as sources so that they can be referenced in models.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.2 Declaring a source</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create:
models/staging/sources.yml
sources: - name: ecommerce database: ecommerce schema: raw tables: - name: orders - name: customers - name: products - name: payments`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This tells dbt that these input tables exist in the specified database and schema.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.3 Using source()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of hardcoding a raw database table:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM ecommerce.raw.orders
Use:
SELECT * FROM {{ source('ecommerce', 'orders') }}`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The source() function tells dbt that the model depends on a declared external source.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It also makes the source relationship available in the dependency graph.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.4 What is ref()?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The ref() function references another dbt model.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM {{ ref('stg_orders') }}
dbt resolves the model reference to the appropriate database relation and registers the dependency.
7.5 Difference between source() and ref()`}</code>
            </pre>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>                  <th className="px-4 py-3">source()</th>                  <th className="px-4 py-3">ref()</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Purpose</td>                  <td className="px-4 py-2.5 text-stone-700">References existing input tables</td>                  <td className="px-4 py-2.5 text-stone-700">References dbt models</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Input</td>                  <td className="px-4 py-2.5 text-stone-700">External source declaration</td>                  <td className="px-4 py-2.5 text-stone-700">dbt model name</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Dependency graph</td>                  <td className="px-4 py-2.5 text-stone-700">Creates source-to-model relationship</td>                  <td className="px-4 py-2.5 text-stone-700">Creates model-to-model relationship</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Use case</td>                  <td className="px-4 py-2.5 text-stone-700">Raw ingestion tables</td>                  <td className="px-4 py-2.5 text-stone-700">Transformed datasets</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Additional capabilities</td>                  <td className="px-4 py-2.5 text-stone-700">Source freshness and source tests</td>                  <td className="px-4 py-2.5 text-stone-700">Model lineage and version-aware references</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">7.6 Example complete workflow</td>                  <td className="px-4 py-2.5 text-stone-700">External Database | v source('ecommerce', 'orders') | v stg_orders | v int_orders | v fct_sales</td>                  <td className="px-4 py-2.5 text-stone-700">7.7 Source freshness</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data can be present but outdated.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an orders table was last updated three days ago, but the business expects it to update daily.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt supports source freshness configuration to detect whether data meets expected freshness thresholds.
Illustrative configuration:
sources: - name: ecommerce schema: raw config: loaded_at_field: _loaded_at freshness: warn_after: count: 12 period: hour error_after: count: 24 period: hour tables: - name: orders
Here:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A source older than 12 hours raises a warning.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A source older than 24 hours raises an error.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The timestamp column must accurately represent when the relevant data was loaded.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For freshness checks, use the appropriate command for your dbt generation. In dbt v2, the top-level dbt freshness command replaces the older source-only command for checking configured sources and models.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+1`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.8 When should you use sources?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use sources when:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Connecting to ingested raw tables.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Tracking data freshness.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Documenting external data dependencies.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Testing raw input assumptions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Building a clear lineage graph from source systems to analytical models.</span>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            source() identifies where data comes from; ref() identifies another model built inside your dbt project.
          </div>
        </div>
      </section>

      {/* SECTION 8: 8. Jinja Templating */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Jinja Variables, Loops & Conditionals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Jinja Templating
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Jinja is a templating language that allows developers to dynamically generate SQL.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt combines SQL and Jinja to support:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Variables.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Loops.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Conditional statements.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reusable macros.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Dynamic model configurations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Environment-dependent SQL.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.1 Why is Jinja needed?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL is excellent for querying and transforming data, but SQL alone is not designed to provide general-purpose template generation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine creating revenue columns for different payment methods.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without Jinja, you might manually write:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, SUM( CASE WHEN payment_method = 'card' THEN amount ELSE 0 END ) AS card_revenue, SUM( CASE WHEN payment_method = 'upi' THEN amount ELSE 0 END ) AS upi_revenue, SUM( CASE WHEN payment_method = 'cash' THEN amount ELSE 0 END ) AS cash_revenue FROM payments GROUP BY customer_id`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>If the list of payment methods changes, you must update the SQL manually.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Jinja allows you to generate repetitive SQL dynamically.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.2 Using Jinja variables</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{% set payment_methods = [ 'card', 'upi', 'cash' ] %} SELECT customer_id, {% for method in payment_methods %} SUM( CASE WHEN payment_method = '{{ method }}' THEN amount ELSE 0 END ) AS {{ method }}_revenue {% if not loop.last %} , {% endif %} {% endfor %} FROM payments GROUP BY customer_id`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Jinja generates the repeated SQL expressions.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.3 Understanding Jinja syntax</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Syntax</th>                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">&#123;&#123; expression &#125;&#125;</td>                  <td className="px-4 py-2.5 text-stone-700">Outputs a value</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">&#123;% statement %&#125;</td>                  <td className="px-4 py-2.5 text-stone-700">Executes a template statement</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">&#123;# comment #&#125;</td>                  <td className="px-4 py-2.5 text-stone-700">Adds a Jinja comment</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.4 Conditional logic</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You can use conditional statements to change SQL generation.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, amount FROM orders {% if target.name == 'prod' %} WHERE amount > 100 {% else %} WHERE amount > 0 {% endif %}`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This example uses different SQL filters depending on the active target.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Be careful: environment-specific transformations should have an intentional business and testing rationale. Do not let dev and production silently produce incompatible definitions of a business metric.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.5 Using dbt variables</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You can pass parameters through vars.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM orders WHERE order_date >= '{{ var("start_date") }}'
Run with:
dbt run --vars '{"start_date": "2026-01-01"}'`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.6 Using environment variables</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Environment variables are useful for external configuration.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{{ env_var('DBT_ENVIRONMENT') }}`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These are especially useful for distinguishing development, staging and production environments.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.7 Why Jinja is useful</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Jinja makes SQL transformations more reusable.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>However, too much template logic can make a model difficult to understand.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use normal SQL whenever it is sufficient, and introduce Jinja for meaningful dynamic behavior.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+1`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 9: 9. Model Materializations */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · View, Table, Incremental, Ephemeral & MatView</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Model Materializations
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Materialization defines how dbt persists the result of a model in the target data platform.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It is one of the most important configuration concepts in dbt.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.1 Why are materializations required?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a model contains:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, SUM(amount) AS total_revenue FROM orders GROUP BY customer_id`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>There are several ways to make its output available to downstream users.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a database view.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Store a physical table.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update only new or changed records.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Embed the SQL inside another model.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a supported database materialized view.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These choices affect execution time, storage consumption and query performance.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.2 The five built-in materializations</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">dbt Materializations: What Actually Happens When You Change config? | by meghaaa | Feb, 2026 | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/nstetA-0kbmxbvY77DJe8W60oynDFOgYf9GZs9fcbfmiDleNYlwt2bWwgTfFQMg2vtL3205I5JD6rg3XK4wi_-ipvavM0QLhPqXfLYlOItTp9sPX3qKL9fRD1ognwipXkS0_irkEG4LM4tDeEVR2ck-Ugm2iHTva81apHDySs8g?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">dataengineeringinprogress.medium.com</span>
            <a href="https://dataengineeringinprogress.medium.com/dbt-materializations-what-actually-happens-when-you-change-config-d32428388055?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The five built-in materializations are:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>View.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Table.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incremental.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Ephemeral.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Materialized View.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.3 View Materialization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A View is a database object that stores the SQL definition rather than storing a separate copy of all query results as a table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{{ config( materialized='view' ) }} SELECT order_id, customer_id, amount FROM {{ ref('stg_orders') }}`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>When dbt runs this model, it creates or replaces the view according to the adapter's implementation.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Advantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Little additional storage for the view itself.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Automatically reflects changes in underlying data when queried.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Useful for simple transformations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Fast model creation.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Complex views may execute slowly.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Multiple layers of nested views can create expensive queries.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Query costs can increase when many users access the view.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Best use cases:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Simple staging models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Column selection.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Renaming.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Basic type casting.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Lightweight transformations.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.4 Table Materialization</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A Table stores the results of a query physically in the target database.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{{ config( materialized='table' ) }} SELECT customer_id, SUM(amount) AS total_revenue FROM {{ ref('stg_orders') }} GROUP BY customer_id`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Each normal full table rebuild recreates the table from the model query.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Advantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Fast downstream queries.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Good for repeated analytical workloads.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Stores precomputed results.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Useful for expensive transformations.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Requires storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Full rebuilds may take considerable time.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>New source data does not automatically appear until the model is rebuilt.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Best use cases:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Fact tables.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Dimension tables.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>BI reporting models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Frequently queried aggregations.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.5 Incremental Materialization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An Incremental model updates an existing table by processing new or changed records instead of rebuilding the entire dataset every time.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is useful when a source table contains billions of historical records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>We will study this in detail in Section 10.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.6 Ephemeral Materialization</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An Ephemeral model is not created as a physical table or view in the database.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Instead, dbt injects its SQL into downstream models using a Common Table Expression (CTE).</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{{ config( materialized='ephemeral' ) }} SELECT order_id, amount FROM {{ ref('stg_orders') }}
A downstream model references it:
SELECT * FROM {{ ref('int_orders') }}
dbt incorporates the ephemeral SQL into the dependent model.
Advantages:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Does not create extra warehouse relations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Provides reusable SQL logic.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Keeps the database namespace cleaner.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Cannot be queried directly.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Repeated use may expand SQL significantly.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Can make debugging complicated.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Not suitable for every large or complex transformation.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Best use cases:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Small reusable transformation steps.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Lightweight intermediate SQL.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Logic that does not need an independently queryable relation.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.7 Materialized View</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Materialized View stores query results as a database-managed object, with refresh behavior determined by the target data platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{{ config( materialized='materialized_view' ) }} SELECT city, SUM(amount) AS total_revenue FROM {{ ref('stg_orders') }} GROUP BY city`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Materialized view support and refresh capabilities differ between database adapters.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Advantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Can improve analytical query performance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Can precompute expensive operations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>May support platform-managed refresh mechanisms.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Requires storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Refresh behavior varies by platform.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>May have database-specific limitations.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.8 Comparing materializations</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>                  <th className="px-4 py-3">View</th>                  <th className="px-4 py-3">Table</th>                  <th className="px-4 py-3">Incremental</th>                  <th className="px-4 py-3">Ephemeral</th>                  <th className="px-4 py-3">Materialized View</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Stores result rows separately</td>                  <td className="px-4 py-2.5 text-stone-700">No</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>                  <td className="px-4 py-2.5 text-stone-700">No</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Rebuild behavior</td>                  <td className="px-4 py-2.5 text-stone-700">Recreates view definition</td>                  <td className="px-4 py-2.5 text-stone-700">Full rebuild</td>                  <td className="px-4 py-2.5 text-stone-700">Processes changes</td>                  <td className="px-4 py-2.5 text-stone-700">Embedded in downstream SQL</td>                  <td className="px-4 py-2.5 text-stone-700">Platform-specific refresh</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Query performance</td>                  <td className="px-4 py-2.5 text-stone-700">Depends on view logic</td>                  <td className="px-4 py-2.5 text-stone-700">Usually good</td>                  <td className="px-4 py-2.5 text-stone-700">Usually good</td>                  <td className="px-4 py-2.5 text-stone-700">Depends on resulting query</td>                  <td className="px-4 py-2.5 text-stone-700">Usually good</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Storage usage</td>                  <td className="px-4 py-2.5 text-stone-700">Low for view itself</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>                  <td className="px-4 py-2.5 text-stone-700">No separate relation</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Typical use</td>                  <td className="px-4 py-2.5 text-stone-700">Staging</td>                  <td className="px-4 py-2.5 text-stone-700">Marts</td>                  <td className="px-4 py-2.5 text-stone-700">Large growing datasets</td>                  <td className="px-4 py-2.5 text-stone-700">Lightweight reusable SQL</td>                  <td className="px-4 py-2.5 text-stone-700">Precomputed analytics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.9 Choosing the right materialization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A useful starting strategy:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raw Source | v Staging Models [Views] | v Intermediate Models [Views / Ephemeral] | v Business Marts [Tables] | v Large Historical Models [Incremental]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Start with views where appropriate, then optimize individual models when query performance or warehouse cost requires it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid choosing incremental materialization automatically for every model; it introduces state-management and correctness requirements.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+1`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 10: 10. Incremental Models */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Incremental Strategies, Lookbacks & Full Refresh</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Incremental Models
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incremental models are extremely important for production analytics engineering.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>They allow dbt to transform only the new or changed data rather than rebuilding an entire dataset.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.1 Understanding the problem</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce company stores 500 million historical transactions.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Every day, it receives 2 million new transactions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Using a full table materialization, the company may have to process the entire historical dataset repeatedly.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This can be expensive and slow.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Instead, an incremental model processes the relevant new or changed records.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.2 How incremental models work</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">dbt Incremental Models: Efficient Transformations | Conduktor</span>
            <a href="https://images.openai.com/static-rsc-4/bGIht3rupPeHTphxxucSqDYgiL8pHz7kEqnWP4Mpf8oG2t76Q64pODf1yMlsezPNGETD_2PbTFFxiCR5OJC6bc-2Mf64vUKUd6-ISZsW-yNB630ikVEESHd_4-gUIlFRyMDbSc8p8UP7oCEayBObVt4qRboLFLpx5ioyaaSss5k?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">conduktor.io</span>
            <a href="https://conduktor.io/glossary/dbt-incremental-models-efficient-transformations?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>First execution</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt processes all eligible source records and creates the target table.
500 million records | v First dbt Run | v Create Complete Table`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Subsequent execution</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt applies a filter to identify new or changed records and updates the existing target table according to the selected incremental strategy.
Existing Table | + | New / Changed Records | v Incremental Processing | v Updated Table`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.3 Creating an incremental model</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: models/marts/fct_orders.sql</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{{ config( materialized='incremental', unique_key='order_id' ) }} SELECT order_id, customer_id, product_id, amount, updated_at FROM {{ source('ecommerce', 'orders') }} {% if is_incremental() %} WHERE updated_at >= ( SELECT COALESCE( MAX(updated_at), '1900-01-01' ) FROM {{ this }} ) {% endif %}`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.4 Understanding important incremental components</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>materialized='incremental'</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Tells dbt to use incremental materialization.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>unique_key</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identifies the key used by supported update-based incremental strategies to match existing records with incoming records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It does not automatically enforce uniqueness in the source data. You should test the key and handle duplicate incoming records.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>is_incremental()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Returns true when the model is running incrementally against an existing target table and is not executing a full refresh.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>this</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Refers to the current model's target relation.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>updated_at</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A common column used to identify records that have changed.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.5 Incremental strategies</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incremental write strategies differ by adapter.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common approaches include:</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Append</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Adds new records to the existing relation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Useful when incoming records are genuinely new and historical rows never need modification.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Merge`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Matches source records against existing records using a key and inserts or updates the appropriate rows.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Useful for data that receives updates.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Delete and Insert`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Deletes existing target rows for matching keys or partitions and inserts the replacement records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Useful for certain warehouse-specific replacement patterns.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The exact strategies supported and their configuration syntax must be checked for the chosen adapter.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.6 Handling late-arriving data</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A major problem in incremental processing is late-arriving data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the model runs every day.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A transaction arrives on November 9 but has an updated_at value of November 7.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A strict filter based only on the maximum timestamp could miss it.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>One solution is a lookback window.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{% if is_incremental() %} WHERE updated_at >= ( SELECT COALESCE( MAX(updated_at), '1900-01-01' ) FROM {{ this }} ) - INTERVAL '3 days' {% endif %}`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The interval syntax is warehouse-specific, so adjust it for the target database.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The purpose is to reprocess a small recent period to capture delayed records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>If using an update-based strategy, a proper unique key and deduplication logic are also essential.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.7 Full refresh</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Sometimes a model must be rebuilt entirely.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You can request:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt run --full-refresh
For a complete selected build, the equivalent is:
dbt build --full-refresh
This can be useful when:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Transformation logic changes substantially.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historical records need corrections.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An incremental model has incorrect accumulated state.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Source data has been reconstructed.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.8 Incremental vs full table</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>                  <th className="px-4 py-3">Table</th>                  <th className="px-4 py-3">Incremental</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Initial build</td>                  <td className="px-4 py-2.5 text-stone-700">Full dataset</td>                  <td className="px-4 py-2.5 text-stone-700">Full dataset</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Subsequent build</td>                  <td className="px-4 py-2.5 text-stone-700">Full rebuild</td>                  <td className="px-4 py-2.5 text-stone-700">Processes selected new/changed records</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Processing cost</td>                  <td className="px-4 py-2.5 text-stone-700">Can grow with history</td>                  <td className="px-4 py-2.5 text-stone-700">Can remain lower with suitable filtering</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Configuration</td>                  <td className="px-4 py-2.5 text-stone-700">Simple</td>                  <td className="px-4 py-2.5 text-stone-700">More complex</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Late records</td>                  <td className="px-4 py-2.5 text-stone-700">Included on rebuild</td>                  <td className="px-4 py-2.5 text-stone-700">Must be explicitly handled</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Historical corrections</td>                  <td className="px-4 py-2.5 text-stone-700">Rebuilt naturally</td>                  <td className="px-4 py-2.5 text-stone-700">Require appropriate merge/lookback or full refresh</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">10.9 Production considerations</td>                  <td className="px-4 py-2.5 text-stone-700">A reliable incremental model should address:</td>                  <td className="px-4 py-2.5 text-stone-700">Uniqueness of business keys.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Updated records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Late-arriving events.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Deleted records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Timezone consistency.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Null timestamps.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Duplicate source records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Concurrent runs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Full-refresh procedures.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema changes.</span>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            Design incremental models to be idempotent and test them against both initial-load and repeat-execution scenarios.
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">dbt's official documentation explains incremental model filtering, the is_incremental() macro, unique keys and adapter-specific behavior.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+2`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 11: 11. Seeds and Snapshots */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Static Seeds & SCD Type 2 Snapshots</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Seeds and Snapshots
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Seeds and snapshots solve two different problems in dbt.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Seeds load small, static reference datasets into your warehouse.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snapshots preserve historical versions of records that change over time.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Understanding both is important for data engineering.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.1 What are dbt Seeds?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Seed is a CSV file stored within your dbt project that dbt can load into the target data warehouse as a table.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Seeds are best suited to small, relatively static datasets.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a company that needs country codes and country names.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of creating a separate database ingestion pipeline for a small mapping file, the company can maintain it in its dbt repository.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.2 Creating a seed file</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create:
seeds/country_codes.csv`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">country_code,country_name,currency IN,India,INR US,United States,USD GB,United Kingdom,GBP DE,Germany,EUR JP,Japan,JPY</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Load the seed:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt seed
dbt creates a database table containing the CSV records.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.3 Using seeds in models</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A seed can be referenced using ref() just like another dbt model.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customers.customer_id, customers.country_code, country_codes.country_name, country_codes.currency FROM {{ ref('stg_customers') }} AS customers LEFT JOIN {{ ref('country_codes') }} AS country_codes ON customers.country_code = country_codes.country_code`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.4 When should seeds be used?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Good examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Country codes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Currency mappings.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Business-category mappings.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Small reference datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Fixed lists of business identifiers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Test configuration data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid using seeds for:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Millions of production transactions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Frequently changing source tables.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Large CSV exports.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Sensitive personal information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Passwords or credentials.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Seeds are version-controlled project resources, not a replacement for a proper ingestion pipeline.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+1`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.5 What are dbt Snapshots?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snapshots allow you to preserve the historical state of records when source data changes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is important because many operational database tables only contain the latest version of a record.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a customer changes their address.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customers table before update</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">name</th>                  <th className="px-4 py-3">city</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">Amit</td>                  <td className="px-4 py-2.5 text-stone-700">Mumbai</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After the customer changes their address:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Customers table after update</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">name</th>                  <th className="px-4 py-3">city</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">Amit</td>                  <td className="px-4 py-2.5 text-stone-700">Pune</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The original Mumbai record has been overwritten.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>If the company needs to know the customer's previous address, it needs historical tracking.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is where dbt snapshots are useful.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.6 Understanding Slowly Changing Dimensions</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snapshots are commonly used to implement Slowly Changing Dimension Type 2 (SCD Type 2) behavior.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>SCD Type 2 preserves previous versions of dimension records instead of simply overwriting them.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A snapshot might maintain:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">city</th>                  <th className="px-4 py-3">dbt_valid_from</th>                  <th className="px-4 py-3">dbt_valid_to</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">Mumbai</td>                  <td className="px-4 py-2.5 text-stone-700">Jan 1</td>                  <td className="px-4 py-2.5 text-stone-700">Jan 15</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">Pune</td>                  <td className="px-4 py-2.5 text-stone-700">Jan 15</td>                  <td className="px-4 py-2.5 text-stone-700">NULL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The first record represents the customer's previous city.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The second record represents their current city.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The validity timestamps describe when each version was considered current.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">25. Slowly Changing Dimensions (SCD) in dbt | by LAXMINARAYANA LIKKI | Mar, 2026 | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/PfKSPSS02yU8nt57HfyF6sKvkXi2_gvhPM3YSYE8-L2UO9bLr5YQj2vrQNqyt-aBFb1AnAGo60kNUfFfd9RUmAOOJPk68qkWyODG9aS-l4Efy6RGN1nJr0NxVHbHldFzb0oWSR_1J0W2H2gMx2JAIkzvF7bSG0u9llUOTI7ieTE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40likkilaxminarayana/25-slowly-changing-dimensions-scd-in-dbt-feb820eb79e2?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.7 Snapshot strategies</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt provides two built-in strategies for detecting record changes.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. Timestamp Strategy</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Uses an updated_at column to detect whether a record has changed.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example source table:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">city</th>                  <th className="px-4 py-3">updated_at</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">Mumbai</td>                  <td className="px-4 py-2.5 text-stone-700">2026-01-01</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">Pune</td>                  <td className="px-4 py-2.5 text-stone-700">2026-01-15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>When the source timestamp advances, dbt identifies the changed record and records its new version.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is generally the preferred strategy when a reliable update timestamp exists.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. Check Strategy</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compares selected column values to identify changes.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, the snapshot can compare:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>City.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Email.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer status.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is useful when a reliable updated_at column is unavailable.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.8 Creating a snapshot</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>In modern dbt project conventions, a snapshot can be defined in a YAML properties file.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: snapshots/customers_snapshot.yml</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`snapshots: - name: customers_snapshot relation: source('ecommerce', 'customers') config: unique_key: customer_id strategy: timestamp updated_at: updated_at schema: snapshots
Execute:
dbt snapshot
dbt maintains the historical state of the source records in the configured snapshot relation.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The snapshot uses a unique business key to identify the same customer across different versions.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.9 Understanding snapshot columns</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Typical snapshot metadata includes:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Column</th>                  <th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">dbt_scd_id</td>                  <td className="px-4 py-2.5 text-stone-700">Identifier for a versioned record</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">dbt_updated_at</td>                  <td className="px-4 py-2.5 text-stone-700">Change timestamp used by the snapshot</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">dbt_valid_from</td>                  <td className="px-4 py-2.5 text-stone-700">Start of the version's validity</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">dbt_valid_to</td>                  <td className="px-4 py-2.5 text-stone-700">End of the version's validity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>For the current record, dbt_valid_to is generally NULL unless a custom current-record value is configured.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.10 Example: Customer history analysis</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a company wants to know how many customers lived in Mumbai during January.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can query the historical snapshot:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM {{ ref('customers_snapshot') }} WHERE city = 'Mumbai' AND dbt_valid_from < '2026-02-01' AND ( dbt_valid_to IS NULL OR dbt_valid_to >= '2026-01-01' )`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The date-range condition identifies customer versions whose validity overlaps the requested period.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.11 Seeds vs Snapshots</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>                  <th className="px-4 py-3">Seeds</th>                  <th className="px-4 py-3">Snapshots</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Purpose</td>                  <td className="px-4 py-2.5 text-stone-700">Load static reference data</td>                  <td className="px-4 py-2.5 text-stone-700">Preserve record history</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Input</td>                  <td className="px-4 py-2.5 text-stone-700">CSV files in project</td>                  <td className="px-4 py-2.5 text-stone-700">Existing database relations</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Main command</td>                  <td className="px-4 py-2.5 text-stone-700">dbt seed</td>                  <td className="px-4 py-2.5 text-stone-700">dbt snapshot</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Update behavior</td>                  <td className="px-4 py-2.5 text-stone-700">Reload when executed</td>                  <td className="px-4 py-2.5 text-stone-700">Track source changes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Typical use</td>                  <td className="px-4 py-2.5 text-stone-700">Country and category mapping</td>                  <td className="px-4 py-2.5 text-stone-700">Historical customer attributes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Historical preservation</td>                  <td className="px-4 py-2.5 text-stone-700">Not automatic</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.12 Important production considerations</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snapshots do not automatically capture every intermediate state of a source record.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>If a row changes multiple times between snapshot executions, intermediate versions may never be observed.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Also consider:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reliability of update timestamps.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Source record deletions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snapshot execution frequency.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Hard-delete handling.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historical backfills.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Correct unique keys.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Source freshness.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When a source system already provides a reliable change-data-capture log, incremental models may be more appropriate for certain current-state transformations, while snapshots are valuable when historical states need to be retained.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+2`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 12: 12. Data Transformations Using SQL */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Advanced SQL Transformations & Dimensional Modeling</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Data Transformations Using SQL
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>SQL is the primary language used to define dbt models.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An Analytics Engineer should be comfortable writing advanced SQL transformations and organizing them into reusable models.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.1 Why SQL transformations are important</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Raw operational datasets are rarely designed for analytical queries.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a company with the following raw tables:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>orders customers products payments shipments</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The business wants to calculate:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Revenue by customer.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Revenue by product.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Monthly sales.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer lifetime value.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Repeat purchases.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Average delivery time.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment success rate.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These calculations may require multiple transformations and joins.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt allows each transformation to be written as an independent model.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.2 Basic SQL transformation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Original source:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">order_id</th>                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">amount</th>                  <th className="px-4 py-3">status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">C001</td>                  <td className="px-4 py-2.5 text-stone-700">5000</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">C002</td>                  <td className="px-4 py-2.5 text-stone-700">3000</td>                  <td className="px-4 py-2.5 text-stone-700">pending</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">103</td>                  <td className="px-4 py-2.5 text-stone-700">C003</td>                  <td className="px-4 py-2.5 text-stone-700">7000</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Staging model:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT order_id, customer_id, CAST(amount AS DECIMAL(18,2)) AS amount, LOWER(TRIM(status)) AS order_status FROM {{ source('ecommerce', 'orders') }} WHERE order_id IS NOT NULL`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This standardizes the amount and order status.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.3 SQL joins in dbt</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider two staging models.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>stg_orders</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT order_id, customer_id, amount FROM {{ ref('stg_orders') }}`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>stg_customers</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, customer_name, country FROM {{ ref('stg_customers') }}
Now create an intermediate model:
SELECT orders.order_id, orders.customer_id, customers.customer_name, customers.country, orders.amount FROM {{ ref('stg_orders') }} AS orders INNER JOIN {{ ref('stg_customers') }} AS customers ON orders.customer_id = customers.customer_id`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This creates a reusable joined dataset.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.4 Advanced aggregations</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Example: Calculate monthly revenue.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT DATE_TRUNC('month', order_date) AS sales_month, SUM(amount) AS total_revenue, COUNT(DISTINCT order_id) AS total_orders, AVG(amount) AS average_order_value FROM {{ ref('stg_orders') }} WHERE order_status = 'completed' GROUP BY 1`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>DATE_TRUNC syntax and supported date units vary by database.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.5 Window functions</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Window functions are useful for analytical calculations that require comparing records across related rows.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Example: Rank customers by revenue.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, total_revenue, RANK() OVER ( ORDER BY total_revenue DESC ) AS revenue_rank FROM {{ ref('customer_revenue') }}
Other common functions include:
ROW_NUMBER()
RANK()
DENSE_RANK()
LAG()
LEAD()
SUM() OVER()
AVG() OVER()`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.6 CTEs in dbt models</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common Table Expressions make complex SQL easier to understand.</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`WITH completed_orders AS ( SELECT * FROM {{ ref('stg_orders') }} WHERE order_status = 'completed' ), customer_revenue AS ( SELECT customer_id, SUM(amount) AS total_revenue FROM completed_orders GROUP BY customer_id ) SELECT * FROM customer_revenue`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.7 Building fact and dimension models</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A major Analytics Engineering responsibility is dimensional modeling.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Fact table: Stores measurable business events.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Sales amount.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Number of orders.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Quantity purchased.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment amount.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Dimension table: Stores descriptive information used to analyze facts.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Product.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Location.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Date.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example structure:</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Star Schema vs Snowflake Schema and the 7 Critical Differences — Blog | Keboola</span>
            <a href="https://images.openai.com/static-rsc-4/525ffGx--FvgdafMuwBCzxWRljz6jSy7VCWkW5RJR5m0fAzjRCcHCb0iAsyhL-tdl9j8Ts26c5Wba-tN0KMEIYM2HbseWtHhiwGz5qW5QWTX5_-LenLyWAwo966vXiYJcgDxg-KcagGRL8fUCN3CVaUr2f4avqs1Een7UfqXXsA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">keboola.com</span>
            <a href="https://www.keboola.com/blog/star-schema-vs-snowflake-schema?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A sales analytics warehouse might contain:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dim_customers | | dim_products -- fct_sales -- dim_dates | | dim_locations`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.8 Example fact model</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>fct_sales.sql</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT order_id, customer_id, product_id, order_date, quantity, amount AS sales_amount FROM {{ ref('int_order_details') }} WHERE order_status = 'completed'`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.9 Example dimension model</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>dim_customers.sql</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, customer_name, email, country, created_at FROM {{ ref('stg_customers') }}`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.10 Analytics Engineering modeling best practices</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use clear model names.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Keep models focused on a specific responsibility.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avoid excessively complex single SQL files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Centralize reusable business definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Explicitly document important metrics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Test primary keys.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validate relationships between fact and dimension tables.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avoid exposing unnecessary sensitive source fields.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Follow consistent currency and timezone definitions.</span>
          </div>
        </div>
      </section>

      {/* SECTION 13: 13. Generic and Singular Data Tests */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">Part 6 · Data Quality, Generic & Singular Tests</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Generic and Singular Data Tests
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data testing is one of dbt's most important capabilities.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A model can execute successfully and still produce incorrect information.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer IDs may be duplicated.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Transaction IDs may be NULL.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Invalid order statuses may appear.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Foreign keys may not match.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Revenue might be negative unexpectedly.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data tests help detect these problems.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.1 What are dbt Data Tests?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A dbt data test is an SQL-based assertion that checks whether a data condition is satisfied.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt tests identify records that violate an expected rule.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A test passes when the query returns zero failing records.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is the central testing philosophy:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A successful SQL execution does not guarantee valid data. Data tests verify the assumptions behind the data.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.2 Types of data tests</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are two main traditional data-test patterns:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Generic data tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Singular data tests.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt also supports model unit tests, which are different from data tests and are useful for validating transformation logic against controlled inputs.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.3 Generic Data Tests</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Generic tests are reusable tests defined once and applied to different models or columns.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt provides four built-in generic data tests.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. not_null</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Checks whether a column contains NULL values.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`models: - name: stg_orders columns: - name: order_id data_tests: - not_null
Business rule:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Every order must have an order ID.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. unique</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Checks whether values in a column are duplicated.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`models: - name: stg_orders columns: - name: order_id data_tests: - unique
Business rule:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Every order ID must uniquely identify an order.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>C. accepted_values</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Checks whether a column contains only permitted values.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`models: - name: stg_orders columns: - name: order_status data_tests: - accepted_values: arguments: values: - completed - pending - cancelled - returned
Business rule:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Order status must belong to the defined list.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>D. relationships</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Checks referential integrity between two datasets.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`models: - name: stg_orders columns: - name: customer_id data_tests: - relationships: arguments: to: ref('dim_customers') field: customer_id
Business rule:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Every non-NULL customer ID in the tested order records should match a customer in the referenced model.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The relationships test does not replace a not_null test. These are separate checks.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.4 Singular Data Tests</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A singular data test is a SQL query that identifies records violating a specific business rule.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create:
tests/assert_positive_revenue.sql
SELECT * FROM {{ ref('fct_sales') }} WHERE sales_amount < 0`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This query returns any record with negative sales revenue.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>If the query returns no records, the test passes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>If it returns records, the test fails.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Other examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Completed orders must have payment records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Shipping dates cannot occur before order dates.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer signup dates cannot be in the future.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Refund amounts cannot exceed permitted transaction amounts.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.5 Generic vs Singular Tests</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>                  <th className="px-4 py-3">Generic test</th>                  <th className="px-4 py-3">Singular test</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Reusability</td>                  <td className="px-4 py-2.5 text-stone-700">High</td>                  <td className="px-4 py-2.5 text-stone-700">Usually specific to one assertion</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Definition</td>                  <td className="px-4 py-2.5 text-stone-700">Reusable test block</td>                  <td className="px-4 py-2.5 text-stone-700">Individual SQL query</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Configuration</td>                  <td className="px-4 py-2.5 text-stone-700">YAML</td>                  <td className="px-4 py-2.5 text-stone-700">SQL</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Best use</td>                  <td className="px-4 py-2.5 text-stone-700">Common validations</td>                  <td className="px-4 py-2.5 text-stone-700">Business-specific rules</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example</td>                  <td className="px-4 py-2.5 text-stone-700">Unique order ID</td>                  <td className="px-4 py-2.5 text-stone-700">Revenue must not be negative</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.6 Custom Generic Tests</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Sometimes the built-in tests are insufficient.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a company wants to ensure that transaction amounts are always greater than or equal to zero.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Instead of writing a separate singular test for every model, you can create a reusable custom generic test.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`tests/generic/test_non_negative.sql
{% test non_negative(model, column_name) %} SELECT * FROM {{ model }} WHERE {{ column_name }} < 0 {% endtest %}
Use it:
models: - name: fct_sales columns: - name: sales_amount data_tests: - non_negative`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This custom test can also be applied to payment amounts, refund amounts or other numeric columns.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.7 Test severity</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You can configure how dbt responds to failures.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">data_tests: - unique: config: severity: error - accepted_values: arguments: values: ['completed', 'pending'] config: severity: warn</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An error-level test failure generally results in a failed test.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A warning-level failure reports a warning rather than treating it as an ordinary error-level test failure, subject to the configured behavior.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.8 Running tests</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Run all configured data tests:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt test
Test one model:
dbt test --select fct_sales
Build models and execute applicable tests together:
dbt build`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The build command executes selected resources in dependency order, including models, tests, seeds and snapshots.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.9 Model Unit Tests</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unit tests are useful for validating SQL transformation logic with small, controlled input fixtures and expected outputs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, suppose a model calculates a discount.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business rule:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If order amount &gt;= 10000 Discount = 10% Otherwise Discount = 0%</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A unit test can provide several input rows and verify the expected calculated output without relying entirely on production data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unit tests are especially useful when you introduce:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Complex business rules.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Conditional SQL logic.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Date calculations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Currency conversions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Revenue allocation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer classification.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.10 Recommended testing strategy</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For every production model, consider testing:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Data quality rule</th>                  <th className="px-4 py-3">Suggested test</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Primary key uniqueness</td>                  <td className="px-4 py-2.5 text-stone-700">unique</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Primary key completeness</td>                  <td className="px-4 py-2.5 text-stone-700">not_null</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Foreign-key validity</td>                  <td className="px-4 py-2.5 text-stone-700">relationships</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Valid status values</td>                  <td className="px-4 py-2.5 text-stone-700">accepted_values</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Non-negative amount</td>                  <td className="px-4 py-2.5 text-stone-700">Custom or singular</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Valid date range</td>                  <td className="px-4 py-2.5 text-stone-700">Custom or singular</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Business calculation correctness</td>                  <td className="px-4 py-2.5 text-stone-700">Unit test</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Source data freshness</td>                  <td className="px-4 py-2.5 text-stone-700">Freshness check</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The official dbt testing framework includes the four built-in generic tests and supports both singular and custom generic SQL tests.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+2`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 14: 14. Custom Tests and Advanced Data Quality */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Part 6 · Custom Generic Tests & Data Observability</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Custom Tests and Advanced Data Quality
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Beyond basic tests, production Analytics Engineering teams need to validate complex business requirements.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.1 Why custom tests are needed</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an e-commerce platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its basic data tests verify:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Order ID is unique.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer ID is not NULL.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Order status is valid.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">But the business has additional rules:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Refund amount cannot exceed the original payment amount.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Delivery date cannot be earlier than the order date.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A completed order must have a successful payment.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A customer cannot receive duplicate loyalty points for the same transaction.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These requirements need custom assertions.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.2 Example: Validate delivery dates</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create:
tests/assert_valid_delivery_dates.sql
SELECT * FROM {{ ref('fct_sales') }} WHERE delivery_date < order_date`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Any returned records indicate an invalid delivery timeline.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.3 Example: Validate refund amounts</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT order_id, original_amount, refund_amount FROM {{ ref('int_payments') }} WHERE refund_amount > original_amount`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.4 Testing source data</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Testing only final marts is not enough.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose raw order data starts containing duplicate IDs.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The error may propagate through multiple downstream models.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A better approach is to validate assumptions at multiple layers:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raw Sources | v Source Tests | v Staging Models | v Staging Tests | v Intermediate Models | v Intermediate Tests | v Business Marts | v Business Tests</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.5 Source freshness vs data tests</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These are different types of validation.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Freshness test:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Checks whether source data has been updated within an expected time period.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data test:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Checks whether the contents of a dataset satisfy an expected condition.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Freshness: Orders table must update within 24 hours.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data test: Every order must have a unique ID.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Both are important for reliable production datasets.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.6 Handling failed tests</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the unique test on order_id fails.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data engineer should:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Inspect the failing test.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Identify the duplicated order IDs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Trace the source records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Determine whether ingestion duplicated the records or the transformation introduced them.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Fix the source or transformation logic.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Rebuild the affected models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Rerun the tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Confirm that downstream datasets are correct.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Do not simply remove a test because it causes a pipeline failure. Understand the business rule it is protecting.</p>
        </div>
      </section>

      {/* SECTION 15: 15. dbt Documentation */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Part 6 · Project Documentation & dbt Catalog</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. dbt Documentation
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Documentation is essential when a data warehouse contains hundreds of models and thousands of columns.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without documentation, analysts may not understand:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>What a table represents.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How a column is calculated.</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Where data originated.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Which models depend on a table.</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>What business rules are applied.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Whether the dataset is appropriate for reporting.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt provides a framework to document models, columns, sources, tests and macros.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.1 Why documentation is important</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an analyst opens a table:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>fct_sales</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It contains:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id order_id sales_amount discount_amount net_revenue order_date</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The analyst needs to understand:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Is sales_amount before or after discounts?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Does net_revenue include taxes?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Are cancelled orders included?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Is order_date in UTC or local time?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Is this a daily or historical table?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Clear documentation avoids misunderstandings.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.2 Documenting a model</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create:
models/marts/schema.yml
models: - name: fct_sales description: > Contains completed customer orders used for business sales analytics. columns: - name: order_id description: > Unique identifier of the order. - name: customer_id description: > Identifier of the customer. - name: sales_amount description: > Original order value before discounts. - name: net_revenue description: > Sales revenue after applicable discounts.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.3 Documenting sources</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`sources: - name: ecommerce description: > Raw operational data from the e-commerce application. schema: raw tables: - name: orders description: > Original transaction records generated by the application. - name: customers description: > Customer profile information. - name: products description: > Product catalog information.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.4 Documenting columns</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Good column descriptions should explain business meaning, not simply repeat the column name.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Weak description:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">description: Customer ID</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Better description:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>description: &gt; A unique identifier assigned to each registered customer in the e-commerce application.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.5 Generating dbt documentation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For local dbt projects:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt docs generate
For the traditional dbt v1 workflow, you can preview the documentation site using:
dbt docs serve`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The v2 documentation experience is redesigned and can be generated as a self-hosted static site using the current documentation commands.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt platform users also have Catalog, a hosted documentation and metadata experience.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.6 What does dbt documentation contain?</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Quickstart for dbt and Snowflake | dbt Developer Hub</span>
            <a href="https://images.openai.com/static-rsc-4/yriCGrBzkspGg5UgLqjbRSYNuxogvOdHXLMW-JU9I8YxFaSH-icsqoIxhS_xhYomoAR2OkvaEfmqteaCDaaGH1S7Qgp667Co9WexN8YwA8IYFjVDmfUZ1wswN1XG7ivDnDRXiUC91_3TQLuz15JWtBQJCSI8rMxP7u-SiF_1OW0?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">docs.getdbt.com</span>
            <a href="https://docs.getdbt.com/guides/snowflake?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The documentation experience can expose:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Model descriptions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Column descriptions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Source definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data lineage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Model dependencies.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Database and schema details.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Execution and project metadata.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.7 What is dbt Catalog?</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Catalog is a hosted metadata exploration experience in dbt platform.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It offers a way for users to discover and understand models, their properties and relationships in a data project.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This differs from the local/self-hosted documentation experience.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">As of the current dbt v2 documentation:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Docs v2 supports local and self-hosted use.
dbt Catalog provides the hosted documentation experience in dbt platform.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.8 Documentation best practices</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Document all important production models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Describe business definitions clearly.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Explain complex calculations.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Document source ownership.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Explain primary and foreign keys.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Document timezone and currency assumptions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Keep descriptions updated when SQL logic changes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Include important tests and data quality expectations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Documentation should be maintained as part of the project, not added only after development is completed.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+2`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 16: 16. Data Lineage and Dependency Graphs */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">Part 7 · Directed Lineage & Impact Analysis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Data Lineage and Dependency Graphs
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data lineage describes how data moves from its original source through different transformations to its final destination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It answers three important questions:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Where did the data come from?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What transformations were applied?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Which downstream systems depend on it?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.1 Understanding lineage with an example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an organization generates a revenue dashboard.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The dashboard uses:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Raw Orders | v stg_orders | v int_order_details | v fct_sales | v monthly_revenue | v BI Dashboard`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is the data lineage.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the raw orders table changes its schema, an Analytics Engineer can inspect which downstream models might be affected.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.2 How dbt creates lineage</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt identifies model relationships through:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>ref().</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>source().</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Resource definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Model metadata.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM {{ ref('stg_orders') }}`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This creates a dependency from the current model to stg_orders.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Similarly:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM {{ source('ecommerce', 'orders') }}`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This establishes a relationship with an external source.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.3 Understanding the dbt DAG</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Introduction to dbt. Data Build Tool, or as the cool kids… | by Suraj Nag | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/bhBmU7FOj383vOC2L4vidti0szT7pP9jILGtRwc4BQe1vIY-nC7GWjvZPrS-oQiSjIQ6t2sK0F-eoYrM4M26B4TGlkzFtjm3GpmADivkqYWe8u5TULkcF5o9w_oaBOgxb4UWPenJmkbiQe8M4J8CgPiLOt6x12QNxbRUYQFWXlI?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40suraj11nag/introduction-to-dbt-2f2ac93a3961?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The DAG displays:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>External source nodes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Staging models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Intermediate models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Fact and dimension models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Downstream dependencies.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.4 Upstream and downstream lineage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Upstream lineage</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Shows the data and models that a particular model depends on.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>raw_orders | v stg_orders | v fct_sales</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>For fct_sales, the upstream models are stg_orders and its source.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Downstream lineage</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Shows which models depend on a particular model.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">stg_orders | +----&gt; fct_sales | +----&gt; customer_metrics | +----&gt; daily_revenue</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>For stg_orders, the downstream models are its dependent models.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.5 Why lineage matters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lineage helps with:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Impact analysis.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Debugging incorrect metrics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Understanding transformation dependencies.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Identifying unused models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Planning schema changes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Auditing data transformations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Understanding data ownership.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.6 dbt model selection using lineage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Run a model and its downstream dependencies:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt build --select stg_orders+
Run a model and its upstream dependencies:
dbt build --select +fct_sales
Run a model with both upstream and downstream dependencies:
dbt build --select +int_orders+`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This becomes extremely valuable when working with large dbt projects.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.7 Impact analysis example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the raw orders table changes its amount column from an integer to a string.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Engineer can inspect:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders | v stg_orders | v int_order_details | +----&gt; fct_sales | +----&gt; customer_revenue | +----&gt; monthly_revenue</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This identifies the affected transformation chain before a production deployment.</span>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            dbt's DAG represents dependencies that it can discover from project definitions. Arbitrary database queries and dynamically constructed external dependencies may not be represented completely.
          </div>
        </div>
      </section>

      {/* SECTION 17: 17. Macros and Reusable SQL */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">Part 7 · Custom Macros & dbt-utils Package</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Macros and Reusable SQL
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A Macro is a reusable block of Jinja logic that can generate SQL.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Macros help developers avoid repeating complex expressions across multiple models.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.1 Why are macros needed?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce company stores transaction values in paise.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Multiple models need to convert these values into rupees.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without macros, developers repeatedly write:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>amount / 100</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>If the business calculation changes, developers must update every model.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A macro centralizes the logic.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.2 Creating your first macro</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`macros/cents_to_rupees.sql
{% macro cents_to_rupees(column_name) %} ({{ column_name }} / 100.0) {% endmacro %}`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.3 Using the macro</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT order_id, {{ cents_to_rupees('amount_in_paise') }} AS amount_in_rupees FROM {{ ref('stg_orders') }}`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This improves consistency and reusability.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The compiled SQL will contain the actual generated expression.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.4 Macros with parameters</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A macro can accept multiple inputs.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{% macro safe_divide( numerator, denominator ) %} CASE WHEN {{ denominator }} = 0 THEN NULL ELSE {{ numerator }} / {{ denominator }} END {% endmacro %}
Use it:
SELECT {{ safe_divide( 'total_profit', 'total_revenue' ) }} AS profit_margin FROM {{ ref('fct_sales') }}`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.5 Using Jinja loops inside macros</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose you want to generate an expression for several order statuses.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{% macro count_orders_by_status(statuses) %} {% for status in statuses %} COUNT( CASE WHEN order_status = '{{ status }}' THEN order_id END ) AS {{ status }}_orders {% if not loop.last %}, {% endif %} {% endfor %} {% endmacro %}
Use:
SELECT customer_id, {{ count_orders_by_status([ 'completed', 'pending', 'cancelled' ]) }} FROM {{ ref('stg_orders') }} GROUP BY customer_id`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.6 Built-in dbt Jinja functions</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Function</th>                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">ref()</td>                  <td className="px-4 py-2.5 text-stone-700">Reference another model</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">source()</td>                  <td className="px-4 py-2.5 text-stone-700">Reference an external source</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">var()</td>                  <td className="px-4 py-2.5 text-stone-700">Access project variables</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">env_var()</td>                  <td className="px-4 py-2.5 text-stone-700">Access environment variables</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">config()</td>                  <td className="px-4 py-2.5 text-stone-700">Configure models and resources</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">is_incremental()</td>                  <td className="px-4 py-2.5 text-stone-700">Check whether the model is executing incrementally</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">this</td>                  <td className="px-4 py-2.5 text-stone-700">Reference the current model relation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">target</td>                  <td className="px-4 py-2.5 text-stone-700">Access the selected target configuration</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">run_query()</td>                  <td className="px-4 py-2.5 text-stone-700">Execute a query in supported compilation/execution contexts</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.7 What is dbt-utils?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>dbt-utils is a popular open-source dbt package containing reusable macros and data tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It provides utilities that developers can use instead of writing every common transformation from scratch.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Examples include:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Surrogate key generation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Date spine generation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Safe casting.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Unioning relations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Advanced tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data comparison helpers.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.8 Installing a dbt package</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create or edit:`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>packages.yml</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`packages: - package: dbt-labs/dbt_utils version: "1.3.0"
Then run:
dbt deps`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This downloads the configured packages into the project.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use versions compatible with your dbt engine and package configuration.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.9 Macro best practices</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use macros for genuinely reusable logic.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Keep macros readable.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Provide meaningful parameter names.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Document custom macros.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avoid excessive template complexity.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Inspect compiled SQL when debugging.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Check whether an existing package already provides the required utility.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A good rule is to optimize for readability, not simply the minimum number of repeated SQL lines.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+1`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 18: 18. Deployment and CI Integration */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Part 8 · Git Version Control & Slim CI/CD</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Deployment and CI Integration
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Production dbt development should follow software engineering practices.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The most important practices are:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Version control.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Code review.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Automated testing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Environment separation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Continuous integration.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Continuous deployment.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Controlled releases.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.1 What is CI/CD?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CI/CD stands for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Continuous Integration (CI): Automatically validates changes when developers submit code to a shared repository.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Continuous Deployment/Delivery (CD): Releases approved changes to the appropriate environment.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a team with three Analytics Engineers.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Each developer works on a different branch.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Developer A → Customer Metrics Developer B → Revenue Model Developer C → Product Analytics</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>They submit Pull Requests to the main Git branch.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The CI pipeline checks whether the changes are valid before they are merged.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.2 Understanding the dbt CI/CD workflow</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Software Engineering for SQL: The Complete Guide to dbt Cloud at Scale</span>
            <a href="https://images.openai.com/static-rsc-4/4L8cdB-uqeRhpiVBv3XRmV5q5pq6M5oXO3dBKzwSQdG-2dgy2UHr93qQmH1lRkUJ9kQUhUhiWMtcBMfozAdxtVeFP7WETPw6GnVw9TAylV6sBdZpL_BWSe0IaqsMgnPCz0eOEIJmcTvXjFrgnftVAGc2fow9n4_aIZ5esNZeJMU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">daisuke.masuda.tokyo</span>
            <a href="https://daisuke.masuda.tokyo/article-2026-05-27-1350?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The process:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Developer creates a feature branch.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Developer modifies SQL models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Developer commits code.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Developer opens a Pull Request.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CI installs the required dbt version and dependencies.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CI parses and compiles the project.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CI builds the affected models in an isolated schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CI runs relevant data tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Results are reported in the Pull Request.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An approved Pull Request is merged.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Production deployment runs the approved models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Documentation and execution artifacts are updated.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.3 Version control with Git</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A common workflow:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`git checkout -b feature/customer-metrics git add . git commit -m "Add customer revenue model" git push origin feature/customer-metrics`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Then create a Pull Request on GitHub or another Git provider.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.4 Common CI commands</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a local or self-managed dbt CI pipeline, common commands include:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt deps`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Install project dependencies.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt parse`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validate and parse the project structure.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt compile`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compile models without executing their transformations.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt build`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build and test selected resources in dependency order.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.5 Building only changed models</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>In larger dbt projects, running every model for every Pull Request can be expensive.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt provides state-based selection mechanisms.
A common dbt Core v1 CI pattern is:
dbt build \\ --select state:modified+ \\ --defer \\ --state path/to/production/artifacts
Conceptually:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>state:modified+ selects modified resources and their downstream dependents.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>--defer allows eligible upstream references to resolve to relations in another environment.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>--state identifies the state artifacts used for comparison and deferral.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This pattern requires suitable production artifacts and environment configuration.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The exact CI setup depends on the dbt version, engine and deployment platform.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.6 GitHub Actions example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>.github/workflows/dbt-ci.yml</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`name: dbt CI on: pull_request: jobs: dbt-validation: runs-on: ubuntu-latest steps: - name: Checkout Repository uses: actions/checkout@v4 - name: Set Up Python uses: actions/setup-python@v5 with: python-version: "3.11" - name: Install dbt run: | python -m pip install dbt-postgres - name: Install Dependencies run: | dbt deps working-directory: ecommerce_analytics - name: Parse Project run: | dbt parse working-directory: ecommerce_analytics - name: Build Models and Tests run: | dbt build working-directory: ecommerce_analytics env: DBT_PASSWORD: \${{ secrets.DBT_PASSWORD }}`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is an illustrative self-managed CI example.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a real production CI pipeline, also configure the CI database connection, isolated schema, adapter and database permissions. Pin tool and provider versions rather than installing an unpinned latest package.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.7 Slim CI</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Slim CI is the practice of building and testing only the resources affected by a code change and their relevant downstream dependencies, instead of rebuilding the complete project.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It can reduce the time and cost of CI execution.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Changed: stg_customers | v Rebuild: int_customer_orders dim_customers customer_metrics`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Unrelated sales models may not need to be rebuilt.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.8 Development vs Production environments</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Environment</th>                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Development</td>                  <td className="px-4 py-2.5 text-stone-700">Individual model development</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">CI</td>                  <td className="px-4 py-2.5 text-stone-700">Validate Pull Requests</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Staging</td>                  <td className="px-4 py-2.5 text-stone-700">Test integrated changes</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Production</td>                  <td className="px-4 py-2.5 text-stone-700">Serve trusted business datasets</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Do not let developers accidentally overwrite production analytical tables during development.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use separate schemas, appropriate credentials and clear deployment permissions.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.9 dbt deployment options</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt can be deployed through multiple approaches:
dbt Core CLI and self-managed infrastructure.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>GitHub Actions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>GitLab CI.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Other CI/CD systems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Airflow.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt platform jobs.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The dbt platform provides managed development, scheduling, CI/CD and documentation services. Self-managed installations provide greater infrastructure control but require engineers to maintain the execution and deployment environment.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt Developer Hub+3`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 19: 19. Integrating dbt with Apache Airflow */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Part 8 · Orchestrating dbt via Airflow Operators</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Integrating dbt with Apache Airflow
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You learned Airflow in Module 12. Now you can combine both tools.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is an important real-world integration.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.1 Why integrate Airflow and dbt?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Airflow is designed to coordinate complete workflows.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt is designed to manage SQL transformations.
For example, a company may have the following pipeline:
Source Databases | v Data Ingestion | v Apache Spark | v Data Lake | v Data Warehouse | v dbt | ------------- | | v v Models Tests | | ------------- | v BI Dashboard`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Airflow can coordinate this entire sequence.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.2 Airflow executing dbt commands</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Airflow can execute dbt CLI commands through:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>BashOperator.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>KubernetesPodOperator.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Container-based execution.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Dedicated integrations and provider operators where supported.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Custom Python task execution.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an Airflow DAG can run:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Task 1: Extract Data Task 2: Run Spark Task 3: Run dbt Models Task 4: Run dbt Tests Task 5: Publish Reports</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.3 Example Airflow integration</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import pendulum from airflow.sdk import DAG from airflow.providers.standard.operators.bash import ( BashOperator ) with DAG( dag_id="airflow_dbt_pipeline", start_date=pendulum.datetime( 2026, 1, 1, tz="UTC" ), schedule="@daily", catchup=False ): run_dbt = BashOperator( task_id="run_dbt_models", bash_command=( "cd /opt/airflow/dbt/ecommerce_analytics " "&& dbt build" ) ) publish_report = BashOperator( task_id="publish_report", bash_command="python /opt/airflow/scripts/report.py" ) run_dbt >> publish_report`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This example assumes dbt, its compatible adapter, profiles and credentials are installed and accessible inside the task execution environment.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.4 Should you use dbt scheduling or Airflow?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Choose based on the scope of your workflow.</span>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Requirement</th>                  <th className="px-4 py-3">Suitable approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Schedule only dbt transformations</td>                  <td className="px-4 py-2.5 text-stone-700">dbt platform scheduling or an external scheduler</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Coordinate Spark, ingestion and dbt</td>                  <td className="px-4 py-2.5 text-stone-700">Airflow</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Trigger models after data arrives</td>                  <td className="px-4 py-2.5 text-stone-700">Asset/event-aware orchestration</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Manage complex multi-system workflows</td>                  <td className="px-4 py-2.5 text-stone-700">Airflow</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Manage SQL model transformations</td>                  <td className="px-4 py-2.5 text-stone-700">dbt</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Test transformations during Pull Requests</td>                  <td className="px-4 py-2.5 text-stone-700">dbt CI integration</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>You do not necessarily need Airflow for every small dbt-only project.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>However, in a large data platform, having one orchestrator to manage different technologies is often useful.</span>
          </div>
        </div>
      </section>

      {/* SECTION 20: 20. Production dbt Project Development */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">Part 9 · Model Contracts, Governance & Production Best Practices</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Production dbt Project Development
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A professional dbt project needs more than a collection of SQL files.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It requires a consistent architecture, controlled transformations, reliable testing, appropriate security and maintainable deployment practices.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.1 Production project architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Running dbt in the Real World: Cost Control, Governance, and Team Practices at Scale | by Abhishek Kumar Gupta | Tech with Abhishek | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/f8133tpAjpI2nKdvDIqeuSmFAbnSvGiL2Bn3R-CWdY1XTZXgfAqWyJLZDrVa3PFF84GsaRHcVEBcVNBncpkkoK3yRnx4NIXbf5fp0uVg6b5AqRqGr9r2HXGLZUWEYHYu_92SMdH99eTNmeIUYCwzQZGpqpZsjhC4DYZEa73CpVo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/tech-with-abhishek/running-dbt-in-the-real-world-cost-control-governance-and-team-practices-at-scale-3699f3693fed?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A mature project generally includes these layers:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Source Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>External tables and raw ingestion datasets.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Staging Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Source-specific cleaning and standardization.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Intermediate Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reusable transformations and complex business logic.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Mart Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Business-facing fact and dimension tables.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Quality Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Tests, contracts and data quality rules.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Documentation Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Model descriptions, column descriptions and dependency lineage.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Deployment Layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Git, CI/CD, environment configuration and production jobs.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.2 Model contracts</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Model contracts define expected model structures, including column names and data types where supported by the adapter and model configuration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an analytics team may want to guarantee that the sales model always contains:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order_id INTEGER customer_id INTEGER sales_amount DECIMAL order_date DATE</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This makes unexpected structural changes easier to detect.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contracts are particularly useful when downstream systems depend on stable schemas.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>They complement, rather than replace, data tests.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.3 Schema evolution</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema evolution refers to managing changes to dataset structures over time.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, the source system adds:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>delivery_region</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An Analytics Engineer must decide:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Should the column be included in staging?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Do downstream models need changes?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Does the new column affect existing tests?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Are model contracts still valid?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Will BI dashboards break?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Is a migration or backfill necessary?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema changes should be reviewed and tested before production deployment.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.4 Source freshness and SLAs</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An SLA (Service Level Agreement) defines an expected service standard.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders data must be refreshed within 2 hours. Sales marts must be available by 8 AM. Customer reporting must complete every day.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt freshness checks can help verify data availability.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Airflow monitoring can help identify whether the complete workflow meets its execution deadline.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Both are needed for reliable analytical services.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.5 Data observability</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data observability means understanding the health, quality and reliability of data throughout its lifecycle.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important dimensions include:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Freshness.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Volume.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Distribution.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Accuracy.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Completeness.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Lineage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Execution reliability.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, suppose daily sales suddenly fall from 100,000 orders to 500 orders.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A SQL model may still execute successfully.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>However, a data observability system should help identify that the record volume is unexpectedly low.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.6 Production best practices</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Area</th>                  <th className="px-4 py-3">Best practice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">SQL</td>                  <td className="px-4 py-2.5 text-stone-700">Keep models readable and modular</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Naming</td>                  <td className="px-4 py-2.5 text-stone-700">Follow consistent naming conventions</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Modeling</td>                  <td className="px-4 py-2.5 text-stone-700">Separate staging, intermediate and marts</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Testing</td>                  <td className="px-4 py-2.5 text-stone-700">Test keys, relationships and business rules</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Documentation</td>                  <td className="px-4 py-2.5 text-stone-700">Document business definitions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Materialization</td>                  <td className="px-4 py-2.5 text-stone-700">Choose according to workload</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Incremental models</td>                  <td className="px-4 py-2.5 text-stone-700">Handle late records and duplicates</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Secrets</td>                  <td className="px-4 py-2.5 text-stone-700">Never hardcode credentials</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Version control</td>                  <td className="px-4 py-2.5 text-stone-700">Use Git branches and pull requests</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">CI/CD</td>                  <td className="px-4 py-2.5 text-stone-700">Test changes before production</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Performance</td>                  <td className="px-4 py-2.5 text-stone-700">Avoid unnecessary joins and full rebuilds</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Governance</td>                  <td className="px-4 py-2.5 text-stone-700">Control sensitive data access</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Monitoring</td>                  <td className="px-4 py-2.5 text-stone-700">Track freshness and pipeline health</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Deployment</td>                  <td className="px-4 py-2.5 text-stone-700">Separate development and production</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">20.7 What does a professional Analytics Engineer deliver?</td>                  <td className="px-4 py-2.5 text-stone-700">A professional project should provide:</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Version-controlled transformation code.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reusable data models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Well-defined source relationships.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Documented business metrics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data quality tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incremental processing where justified.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historical snapshots where required.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Model lineage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Automated deployment.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reliable production datasets.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The final result is not merely a transformed SQL table. It is a trusted, maintainable data product.</p>
        </div>
      </section>

      {/* SECTION 21: 21. Practical Project — Build a Complete E-Commerce Analytics Platform Using dbt */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Part 10 · Hands-on Capstone Analytics Platform</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Practical Project — Build a Complete E-Commerce Analytics Platform Using dbt
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Hands-on capstone project</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Now let's combine the complete module into one practical project.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Project: E-Commerce Analytics and Business Intelligence Platform</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Transform raw e-commerce data into reliable, tested and documented analytical datasets using dbt and SQL.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.1 Project architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">dbt Explained: The Data Transformation Tool That Rewired How We Think About Analytics Engineering | CloudRPS</span>
            <a href="https://images.openai.com/static-rsc-4/o_1khuRiaBukQs5btnik8J2daDADPEGt6l1Ii4Y2hicDsAPjc0Y45BbycbBEOpf8WXAECsPu3b79m8AHZbVvCuEGxtTfbWBSp79gLZrlU3P0V0OVnYwHOZzF_ZKqX5Jep1N9rYdgBq4wSI7oM4s_KUaoyrsTsPwVJsuPAGy4O5E?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">cloudrps.com</span>
            <a href="https://cloudrps.com/blog/dbt-data-transformation-modern-analytics/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">We will use:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Technology</th>                  <th className="px-4 py-3">Responsibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">PostgreSQL</td>                  <td className="px-4 py-2.5 text-stone-700">Target data warehouse</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">dbt</td>                  <td className="px-4 py-2.5 text-stone-700">SQL transformation</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">SQL</td>                  <td className="px-4 py-2.5 text-stone-700">Data modeling</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Jinja</td>                  <td className="px-4 py-2.5 text-stone-700">Reusable SQL logic</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">GitHub</td>                  <td className="px-4 py-2.5 text-stone-700">Version control</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">dbt Tests</td>                  <td className="px-4 py-2.5 text-stone-700">Data quality validation</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Apache Airflow</td>                  <td className="px-4 py-2.5 text-stone-700">Workflow orchestration</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Power BI</td>                  <td className="px-4 py-2.5 text-stone-700">Business reporting</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.2 Input datasets</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Assume the warehouse contains these raw tables:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>orders</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">order_id</th>                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">product_id</th>                  <th className="px-4 py-3">amount</th>                  <th className="px-4 py-3">status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">1</td>                  <td className="px-4 py-2.5 text-stone-700">501</td>                  <td className="px-4 py-2.5 text-stone-700">5000</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">2</td>                  <td className="px-4 py-2.5 text-stone-700">502</td>                  <td className="px-4 py-2.5 text-stone-700">3000</td>                  <td className="px-4 py-2.5 text-stone-700">pending</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">103</td>                  <td className="px-4 py-2.5 text-stone-700">1</td>                  <td className="px-4 py-2.5 text-stone-700">503</td>                  <td className="px-4 py-2.5 text-stone-700">2000</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">104</td>                  <td className="px-4 py-2.5 text-stone-700">3</td>                  <td className="px-4 py-2.5 text-stone-700">501</td>                  <td className="px-4 py-2.5 text-stone-700">7000</td>                  <td className="px-4 py-2.5 text-stone-700">completed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customers</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">customer_name</th>                  <th className="px-4 py-3">country</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>                  <td className="px-4 py-2.5 text-stone-700">Amit</td>                  <td className="px-4 py-2.5 text-stone-700">India</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>                  <td className="px-4 py-2.5 text-stone-700">Neha</td>                  <td className="px-4 py-2.5 text-stone-700">India</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">3</td>                  <td className="px-4 py-2.5 text-stone-700">Rahul</td>                  <td className="px-4 py-2.5 text-stone-700">USA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>products</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">product_id</th>                  <th className="px-4 py-3">product_name</th>                  <th className="px-4 py-3">category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">501</td>                  <td className="px-4 py-2.5 text-stone-700">Laptop</td>                  <td className="px-4 py-2.5 text-stone-700">Electronics</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">502</td>                  <td className="px-4 py-2.5 text-stone-700">Mobile</td>                  <td className="px-4 py-2.5 text-stone-700">Electronics</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">503</td>                  <td className="px-4 py-2.5 text-stone-700">Tablet</td>                  <td className="px-4 py-2.5 text-stone-700">Electronics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.3 Step 1 — Create the project</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt init ecommerce_analytics cd ecommerce_analytics`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Configure the database profile and verify the connection.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.4 Step 2 — Declare source datasets</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: models/staging/sources.yml</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`sources: - name: ecommerce schema: raw tables: - name: orders - name: customers - name: products`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.5 Step 3 — Create the staging models</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: models/staging/stg_orders.sql</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT order_id, customer_id, product_id, CAST(amount AS DECIMAL(18,2)) AS amount, LOWER(TRIM(status)) AS order_status FROM {{ source('ecommerce', 'orders') }} WHERE order_id IS NOT NULL`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: models/staging/stg_customers.sql</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, TRIM(customer_name) AS customer_name, UPPER(country) AS country FROM {{ source('ecommerce', 'customers') }} WHERE customer_id IS NOT NULL`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: models/staging/stg_products.sql</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT product_id, TRIM(product_name) AS product_name, TRIM(category) AS category FROM {{ source('ecommerce', 'products') }} WHERE product_id IS NOT NULL`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.6 Step 4 — Create the intermediate model</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: models/intermediate/int_order_details.sql</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT orders.order_id, orders.customer_id, customers.customer_name, customers.country, orders.product_id, products.product_name, products.category, orders.amount, orders.order_status FROM {{ ref('stg_orders') }} AS orders LEFT JOIN {{ ref('stg_customers') }} AS customers ON orders.customer_id = customers.customer_id LEFT JOIN {{ ref('stg_products') }} AS products ON orders.product_id = products.product_id`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This model combines the three staging datasets.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.7 Step 5 — Build the sales fact table</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: models/marts/fct_sales.sql</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{{ config( materialized='table' ) }} SELECT order_id, customer_id, product_id, country, category, amount AS sales_amount FROM {{ ref('int_order_details') }} WHERE order_status = 'completed'`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This creates a table containing completed sales transactions.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.8 Step 6 — Build customer dimension</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: models/marts/dim_customers.sql</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{{ config( materialized='table' ) }} SELECT DISTINCT customer_id, customer_name, country FROM {{ ref('stg_customers') }}`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.9 Step 7 — Create customer revenue metrics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: models/marts/customer_metrics.sql</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, COUNT(order_id) AS total_orders, SUM(sales_amount) AS lifetime_revenue, AVG(sales_amount) AS average_order_value FROM {{ ref('fct_sales') }} GROUP BY customer_id`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.10 Step 8 — Add data quality tests</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: models/marts/schema.yml</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`models: - name: fct_sales description: > Fact table containing completed sales transactions. columns: - name: order_id data_tests: - unique - not_null - name: customer_id data_tests: - not_null - relationships: arguments: to: ref('dim_customers') field: customer_id - name: sales_amount data_tests: - not_null`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Add the necessary checks for product relationships, acceptable statuses and business rules as well.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.11 Step 9 — Execute your project</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Install dependencies:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`dbt deps
Parse and validate:
dbt parse
Build models and execute tests:
dbt build
Inspect generated SQL:
dbt compile
Generate documentation:
dbt docs generate`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.12 Step 10 — Understand the final data lineage</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">What Are dbt Sources? Overview and Benefits | Zuar</span>
            <a href="https://images.openai.com/static-rsc-4/uj1bSFSjdmns7_oXvpQexUsjnFdaPg5BrFvVBfMFYpFJJYzULrVhau58qasTTdputIbzxhcICnUenUbyaaeWpFMWMCld4a7ZfdGmtj_7KGP8HCqG9eIHQ-843uyO2fJCm-T8sCF2aKZjYtf0NbhqYvkGJxar6x61cq49Znjm6Go?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">zuar.com</span>
            <a href="https://www.zuar.com/blog/what-are-dbt-sources/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your resulting dependency graph should resemble:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Raw Orders ───────┐ | Raw Customers ────+──> Staging Models | | Raw Products ─────┘ v Intermediate Order Details | ----------------- | | v v Fact Sales Dim Customers | v Customer Metrics | v BI Dashboard`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The model names and dependencies are automatically represented in dbt's graph.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.13 Expected final outputs</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The project should generate these business datasets:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Dataset</th>                  <th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">stg_orders</td>                  <td className="px-4 py-2.5 text-stone-700">Clean order records</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">stg_customers</td>                  <td className="px-4 py-2.5 text-stone-700">Standardized customer information</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">stg_products</td>                  <td className="px-4 py-2.5 text-stone-700">Standardized product information</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">int_order_details</td>                  <td className="px-4 py-2.5 text-stone-700">Joined order information</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">fct_sales</td>                  <td className="px-4 py-2.5 text-stone-700">Completed sales transactions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">dim_customers</td>                  <td className="px-4 py-2.5 text-stone-700">Customer dimension</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">customer_metrics</td>                  <td className="px-4 py-2.5 text-stone-700">Customer revenue and order metrics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Final business dashboard:</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">تصميم داشبورد احترافي باستخدام Power BI - خمسات</span>
            <a href="https://images.openai.com/static-rsc-4/H7g6b6qbRlwlDj59-loyvvTzjfBfqPEC70GWxVXftp1VrGFpF5b-AwnlWexVj4b7ci9Xt88Eer4vR9P40WuWDClMZsNWg-8XFzt0k1crPX9L97lDf8TZr0_pw1AnzXLZwMRe0geJoEStlIljmQFQRH55pOPFupsxu3VYm0IAheE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">khamsat.com</span>
            <a href="https://khamsat.com/data/data-dashboards/3996998-%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%AF%D8%A7%D8%B4%D8%A8%D9%88%D8%B1%D8%AF-%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A-%D8%A8%D8%A7%D8%B3%D8%AA%D8%AE%D8%AF%D8%A7%D9%85-power-bi?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The dashboard should show:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Total revenue.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Total completed orders.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Average order value.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Revenue by country.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Revenue by product category.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Top customers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer purchasing behavior.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Monthly sales trends.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is the kind of output that Analytics Engineers build and maintain in real organizations.</span>
          </div>
        </div>
      </section>

      {/* SECTION 22: 22. Practical Labs and Assignments */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Labs · Hands-on Engineering Labs (1-7)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Practical Labs and Assignments
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Complete the following labs to develop practical dbt skills.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 1 — dbt Installation and Project Setup</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Objective: Understand dbt environment configuration.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Install dbt and a compatible warehouse adapter.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a virtual environment.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Initialize a dbt project.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Configure profiles.yml.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Connect to PostgreSQL.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a basic model.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Execute dbt debug, dbt parse and dbt run.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Inspect the generated artifacts.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 2 — Model Development</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Objective: Learn model dependencies and SQL transformations.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Declare three source tables.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create three staging models.
Create intermediate models.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Join customers and orders.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build fact and dimension tables.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use ref() to establish dependencies.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Explore model selection syntax.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 3 — Jinja and Macros</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Objective: Develop reusable SQL.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a Jinja variable.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use loops to generate SQL.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement conditional SQL.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Write a custom macro.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a macro with multiple parameters.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Install dbt-utils.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Inspect compiled SQL.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 4 — Materializations and Incremental Models</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Objective: Understand model persistence and processing strategies.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create view materializations.
Create table materializations.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement an ephemeral model.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build an incremental model.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement a unique key.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Handle late-arriving records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Perform a full refresh.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compare execution times and query costs.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 5 — Data Testing and Snapshots</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Objective: Implement reliable analytical datasets.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Add unique tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Add not_null tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Add accepted_values tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Add relationships tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Write singular tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Write custom generic tests.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a customer snapshot.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compare historical records.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 6 — Documentation and Lineage</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Objective: Understand model discoverability and impact analysis.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Document all staging models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Document fact and dimension tables.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Describe important columns.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Document external sources.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Generate dbt documentation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Inspect upstream dependencies.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Inspect downstream dependencies.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Perform a model impact analysis.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 7 — CI/CD and Production Development</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Objective: Understand professional dbt deployment.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Upload the dbt project to GitHub.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a feature branch.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Add a new SQL model.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Open a Pull Request.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Configure GitHub Actions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Execute automated tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Configure an isolated CI schema.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Merge approved changes.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Deploy to production.</span>
          </div>
        </div>
      </section>

      {/* SECTION 23: 23. Advanced Assignments */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Projects · 10 Production Scenarios & Retail Warehouse</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Advanced Assignments
        </h2>
        <div className="space-y-3">
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Assignment</th>                  <th className="px-4 py-3">Skills developed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Customer 360 Data Model</td>                  <td className="px-4 py-2.5 text-stone-700">Data integration and dimensional modeling</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">E-Commerce Revenue Warehouse</td>                  <td className="px-4 py-2.5 text-stone-700">Fact tables and business metrics</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Incremental Transaction Pipeline</td>                  <td className="px-4 py-2.5 text-stone-700">Incremental processing and idempotency</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Historical Customer Tracking</td>                  <td className="px-4 py-2.5 text-stone-700">Snapshots and SCD Type 2</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Automated Data Quality Framework</td>                  <td className="px-4 py-2.5 text-stone-700">Custom tests and validation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Reusable SQL Transformation Library</td>                  <td className="px-4 py-2.5 text-stone-700">Jinja and macros</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Data Lineage Documentation Platform</td>                  <td className="px-4 py-2.5 text-stone-700">Documentation and model dependencies</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">dbt CI/CD Deployment Pipeline</td>                  <td className="px-4 py-2.5 text-stone-700">Git and automated releases</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Airflow + dbt Integration</td>                  <td className="px-4 py-2.5 text-stone-700">Workflow orchestration</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Production Lakehouse Analytics</td>                  <td className="px-4 py-2.5 text-stone-700">End-to-end architecture</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Recommended final project</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build a Production-Ready Retail Analytics Warehouse.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Your project should ingest orders, customers, products, payments and delivery data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It should:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Declare and document raw sources.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build staging models.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create intermediate transformations.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build fact and dimension models.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement incremental processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Preserve customer history using snapshots.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create reusable SQL macros.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement data quality checks.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Generate model documentation.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create lineage graphs.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Integrate GitHub CI.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Orchestrate production execution with Airflow.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Publish analytical datasets to a BI platform.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your project should be designed so that a new developer can understand the business logic, dependencies, tests and deployment process without manually inspecting every SQL query.</p>
        </div>
      </section>

      {/* SECTION 24: 24. Interview Preparation — Analytics Engineering and dbt */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500">Interview · Core Questions & 6 Real-World Scenarios</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Interview Preparation — Analytics Engineering and dbt
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These questions are important for Analytics Engineer, Data Engineer, dbt Developer and Data Warehouse Engineer interviews.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Fundamental questions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is Analytics Engineering?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is dbt?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What problems does dbt solve?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How does dbt differ from traditional ETL?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is the difference between ELT and ETL?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a dbt model?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a dbt project?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a database adapter?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is the difference between dbt Core and dbt platform?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How does dbt execute SQL?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Architecture and modeling questions</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Explain dbt architecture.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is dbt_project.yml?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is the purpose of profiles.yml?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is ref()?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is source()?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Difference between ref() and source()?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is model lineage?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a staging model?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is an intermediate model?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What are fact and dimension tables?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Materialization and processing questions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is materialization?</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Explain the five dbt materializations.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Difference between views and tables?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is an incremental model?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is is_incremental()?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is unique_key?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How do you handle late-arriving records?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is full refresh?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a dbt seed?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a dbt snapshot?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Testing and documentation questions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a dbt data test?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a generic test?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a singular test?</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Explain unique, not_null, accepted_values and relationships.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How do you create custom generic tests?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is the difference between data tests and unit tests?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is source freshness?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is dbt documentation?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a dependency graph?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why is data lineage important?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Advanced questions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is Jinja?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What are dbt macros?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How do you create reusable SQL?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is dbt-utils?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a model contract?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is schema evolution?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is Slim CI?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How do you integrate dbt with GitHub Actions?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How do you integrate dbt with Apache Airflow?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How do you optimize a large dbt project?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Real-world scenario-based questions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Scenario 1: Your dbt model takes 40 minutes to rebuild every day. How would you optimize it?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Expected concepts: Incremental materialization, partition filtering, materialization choices and SQL optimization.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Scenario 2: Your company's revenue differs between two dashboards.</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Expected concepts: Centralized business logic, consistent fact models, data tests and metric definitions.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Scenario 3: A customer changes their address, but the organization needs both the previous and current addresses.</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Expected concepts: Snapshots, timestamp strategy and SCD Type 2.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Scenario 4: You modify a staging model that has 50 downstream models. How would you understand the impact?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Expected concepts: Lineage, ref(), DAG selection and CI.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Scenario 5: A Pull Request changes an SQL model, but rebuilding your entire warehouse takes several hours.</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Expected concepts: Slim CI, state-based selection, isolated schemas and deferred upstream relations.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Scenario 6: A source table receives new records every few minutes, but a full rebuild is too expensive.</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Expected concepts: Incremental models, unique keys, change detection, lookback windows and safe reprocessing.</span>
          </div>
        </div>
      </section>

      {/* SECTION 25: 25. Recommended Learning Resources */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500">Reference · Documentation & Official Standards</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          25. Recommended Learning Resources
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use these official resources for deeper implementation knowledge.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Primeiros passos com DBT - Data Build Tool</span>
            <a href="https://images.openai.com/static-rsc-4/6Py7pQNaU0GMdISe-p9oIOw1ZWAwbCPVk1df2aUWP1iR_qR0alI_fekVX4ypGtNovDrKsSEc0vvav6hKHgxD9rjldLKQSH77Q1gx8RI2ErR3xmCvlNrHGhjbQv9Cc6nZ9k3_UzYXYiS9-q9AARk7gg9vXa8_FIpoV00R_B8G2Ns?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. dbt Developer Hub</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Official concepts, models, SQL transformation and project development</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore dbt documentation</span>
            <a href="https://docs.getdbt.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Setup dbt Core on your machine in 5 minutes or less! | Newtuple | Newtuple</span>
            <a href="https://images.openai.com/static-rsc-4/P-q1klTH27Be1jQxArDJUp5JHvegHCd4_OISSKW52mbfAKsF8pGQI5iNjw9AWMap9--4I-mqZsvURRYVDOe5TYJgzsfM2lNeAyJixq0ljJSw16cTcNRS2fPcfCBegKaQfesnZiEje8w7V73vysFuj76tXngn_gfhPO4MtPJEFoo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. dbt Core GitHub Repository</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Open-source dbt Core source code and development history</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore dbt Core</span>
            <a href="https://github.com/dbt-labs/dbt-core?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">PostgreSQL Logo PNG Transparent &amp; SVG Vector - Freebie Supply</span>
            <a href="https://images.openai.com/static-rsc-4/JMKgw90LnSqTtOROwdCoQgqRARQ22e_iEPIkMnlKesH5FmIH_KaSHLnFA3uJKfACpeJ-8DrMi7Q5La5zK6bXMyYtxqqMQou-EOTPzbrpkXpJBsK5jq7tAM2g3dftYYMtGbyaOuhJn0wUPP3Vvzw7OEQ-vAqbkkLXjJ6KwLHcmxM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. PostgreSQL Documentation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Relational databases, SQL and data modeling</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore PostgreSQL</span>
            <a href="https://www.postgresql.org/docs/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Phase 5: Setting up CI/CD with Github Actions | Cloud Connections</span>
            <a href="https://images.openai.com/static-rsc-4/EtjTqatLhTQ4emhM-y4Stkjuc5ub0rUWQCfQAOIvT7l0pgs8Oc-4JIirAvq1K1bdX4Y9LkGbE-aN81YYWxwhru716W-y9hZ0U5L3FVGvNrIbG1OzF7IjsJx3o3dXtgNN0Unw34Nzz5_eksWfem8pNzB1F0_NZnBMCOPdnTMOhL8?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. GitHub Actions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CI/CD automation and Pull Request validation</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore GitHub Actions</span>
            <a href="https://docs.github.com/en/actions?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">GitHub - dbt-labs/dbt-utils: Utility functions for dbt projects.</span>
            <a href="https://images.openai.com/static-rsc-4/KwMKN0EJdNCI3a13S9KUXTsDvn6UsXmikktxUxpzxbQEt6Zd_ApoaeeGN-tzyVVPFTspnhhlCfAsCisfJSk8w6ImbZQOUdF2btDbXLmD0F7YY-55J1HkVYDVReBvSAoZUaRMOAZ0xplZT_QZ5YcKfPEzTAe2_Tjb-5eYRLYrgIo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. dbt-utils</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reusable SQL macros and data-quality utilities</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore dbt-utils</span>
            <a href="https://github.com/dbt-labs/dbt-utils?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Day 19: dbt Jinja Templating Explained — How Jinja Improves Reusability &amp; Automation | by G Hari Krishna | The Data Movement | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/Q_fvFK8Wrbyjx6InQW6zflr-mNh0VmGuHzC8z9-pms3pHWNObiAwaxSnNVudiqtmCdsPVY-_FW-ozNTC63mLEMzyPZhsXKmC16PPJ_Az1BSks3L7Mg8Nr6aBlmvJbAH2xQ60I-nszPb5LA5VoqWWyEqmRV4FnfeCamIadRPqwCc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6. Jinja Documentation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Template syntax, loops, conditionals and reusable code</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore Jinja</span>
            <a href="https://jinja.palletsprojects.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 26: 26. Final Module Summary */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500">Roadmap · Synthesis & Learning Outcomes</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          26. Final Module Summary
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After completing this module, you should understand how to transform raw warehouse data into reliable analytical datasets using dbt.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Area</th>                  <th className="px-4 py-3">What you should master</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Analytics Engineering</td>                  <td className="px-4 py-2.5 text-stone-700">Role, architecture and responsibilities</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">dbt</td>                  <td className="px-4 py-2.5 text-stone-700">Transformation framework and execution workflow</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">dbt Core</td>                  <td className="px-4 py-2.5 text-stone-700">Installation and configuration</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Project Structure</td>                  <td className="px-4 py-2.5 text-stone-700">Models, macros, seeds and snapshots</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Models</td>                  <td className="px-4 py-2.5 text-stone-700">SQL transformations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Dependencies</td>                  <td className="px-4 py-2.5 text-stone-700">Model relationships</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Sources</td>                  <td className="px-4 py-2.5 text-stone-700">External dataset declarations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">References</td>                  <td className="px-4 py-2.5 text-stone-700">ref() and model dependencies</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Jinja</td>                  <td className="px-4 py-2.5 text-stone-700">SQL templating</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Materializations</td>                  <td className="px-4 py-2.5 text-stone-700">View, table, incremental, ephemeral and materialized view</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Incremental Models</td>                  <td className="px-4 py-2.5 text-stone-700">New and changed data processing</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Seeds</td>                  <td className="px-4 py-2.5 text-stone-700">Static reference datasets</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Snapshots</td>                  <td className="px-4 py-2.5 text-stone-700">Historical change tracking</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">SCD Type 2</td>                  <td className="px-4 py-2.5 text-stone-700">Historical dimension management</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">SQL</td>                  <td className="px-4 py-2.5 text-stone-700">Joins, aggregations and window functions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Generic Tests</td>                  <td className="px-4 py-2.5 text-stone-700">Reusable quality checks</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Singular Tests</td>                  <td className="px-4 py-2.5 text-stone-700">Custom SQL assertions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Custom Tests</td>                  <td className="px-4 py-2.5 text-stone-700">Business-specific validation</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Documentation</td>                  <td className="px-4 py-2.5 text-stone-700">Models and column descriptions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Lineage</td>                  <td className="px-4 py-2.5 text-stone-700">Upstream and downstream dependencies</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Macros</td>                  <td className="px-4 py-2.5 text-stone-700">Reusable SQL</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">dbt-utils</td>                  <td className="px-4 py-2.5 text-stone-700">Reusable transformation utilities</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">CI/CD</td>                  <td className="px-4 py-2.5 text-stone-700">Automated testing and deployment</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Airflow Integration</td>                  <td className="px-4 py-2.5 text-stone-700">Orchestrating dbt transformations</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Production Development</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Testing, reliability and governance</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 13 — Learning Outcome</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">By the end of this module, you should be capable of developing complete dbt projects, creating reusable SQL transformations, managing dependencies, implementing incremental models, maintaining historical data, testing analytical datasets, documenting data products and deploying production transformations through CI/CD.</p>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            Learn to turn raw warehouse tables into trusted, tested, reusable business datasets while maintaining clear documentation, dependencies and controlled releases.
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Recommended progression — Data Engineering Master Course</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your learning progression is now:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Engineering Roadmap</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 10 — ETL, ELT and Batch Data Processing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Completed</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data extraction, transformation, loading and incremental batch processing.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 11 — Distributed Data Processing with Apache Spark</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Completed</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Spark architecture, DataFrames, SQL, distributed execution and optimization.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 12 — Workflow Orchestration with Apache Airflow</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Completed</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>DAGs, scheduling, dependencies, automation and production orchestration.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 13 — Analytics Engineering and dbt</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Current module</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>SQL transformation, testing, documentation, lineage and deployment.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 14 — Real-Time Data Streaming with Apache Kafka</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Learn producers, consumers, brokers, partitions, replication, consumer groups and event-driven architectures.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 15 — Stream Processing with Spark Structured Streaming</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Learn event-time processing, windows, watermarks, checkpointing and fault-tolerant streaming.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 16 — Data Quality, Testing and Observability</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Learn data contracts, Great Expectations, anomaly detection, freshness monitoring and production data reliability.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 17 — Cloud Data Engineering</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Learn AWS, Azure, GCP, object storage, cloud warehouses, IAM and managed data platforms.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 18 — Data Pipeline Deployment and DevOps</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Learn Docker, Kubernetes, GitOps, CI/CD, infrastructure as code and production deployment.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 19 — Advanced Data Lakehouse Architecture</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Learn Delta Lake, Apache Iceberg, Apache Hudi, ACID transactions, table optimization and governance.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 20 — Advanced Data Engineering Capstone</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build and deploy an end-to-end production-style data engineering platform.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recommended learning order: Master SQL and dbt modeling first, then incremental processing and data testing, and finally integrate dbt with Airflow and GitHub CI/CD. This will give you practical experience with the modern analytics engineering workflow used in large data platforms.</p>
        </div>
      </section>

    </div>
  );
}
