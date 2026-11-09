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
  AlertTriangle
} from "lucide-react";

export default function DataEngineeringEtlBatchSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 10: ETL, ELT and Batch Data Processing Overview */}
      <section id="overview" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Roadmap
          </span>
          <span className="text-xs font-mono text-stone-500">Course Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 10: ETL, ELT and Batch Data Processing Overview
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 10 — ETL, ELT and Batch Data Processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DATA ENGINEERING MASTER COURSE · MODULE 10</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">[ETL Vs. ELT: The Complete Guide [2022 Update]](https://images.openai.com/static-rsc-4/ZE0WTBxB1uLUH4TSmYq88rZNP1KV9hErxaGtV2Gc7Zhj5pc-uaIstFaxRDwiKBa1KSheDl5u1iSQLulG6oKTIVSp0cSHuKEu9VicSsh7Pn1lW51povV0fin9hxJQ9MiEOxUI4tdVs-eIGhP4oAQRktTQCKV0cERC3QWePMFFQKI?purpose=inline)</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">firebolt.io</span>
            <a href="https://www.firebolt.io/blog/etl-vs-elt-know-the-differences?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 1: 1. Introduction to ETL Architecture */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">ETL Foundations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction to ETL Architecture
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.1 What Is ETL?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ETL stands for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">E — Extract</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">T — Transform</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">L — Load</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ETL is a data integration process that extracts information from different source systems, transforms it into a required structure, and then loads the transformed information into a destination system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The destination could be:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data warehouse.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytical database.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reporting system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data mart.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Other structured data platforms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The main objective of ETL is to convert raw information from different systems into reliable, consistent, and usable data.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.2 Why Do We Need ETL?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a large e-commerce company operating in several countries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It has different systems for:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">System</th><th className="px-4 py-3">Information</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Customer database</td><td className="px-4 py-2.5 text-stone-700">Customer profiles</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Order database</td><td className="px-4 py-2.5 text-stone-700">Customer purchases</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Payment system</td><td className="px-4 py-2.5 text-stone-700">Payments and refunds</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Inventory database</td><td className="px-4 py-2.5 text-stone-700">Product availability</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Delivery application</td><td className="px-4 py-2.5 text-stone-700">Shipment information</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Marketing platform</td><td className="px-4 py-2.5 text-stone-700">Advertising performance</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">These systems may use different database technologies, data formats, naming conventions, and business rules.</td><td className="px-4 py-2.5 text-stone-700">For example, the customer database may store a customer's name as:</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">rahul sharma</td><td className="px-4 py-2.5 text-stone-700">The order system may store it as:</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">RAHUL SHARMA</td><td className="px-4 py-2.5 text-stone-700">The marketing system may store it as:</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Rahul Sharma</td><td className="px-4 py-2.5 text-stone-700">Without standardization, combining this information can produce inconsistent results.</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.3 Understanding the Three ETL Stages</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">ETL vs ELT: Which One Should You Use and Why? - DEV Community</span>
            <a href="https://images.openai.com/static-rsc-4/SdWJrsA2K1jKCUcZF1REbiCOAlqkFhSHHrXGYcQLNfwp9sLRCQj_BhXzP10-jJrYLwEQlrym66KNyBcE-ciGjPzQXT54UkOoKr9TbKMXbWXMkvanzYl8hsuRo_Ulm60V0ho8QOk_gZtD86xX0MXGqjZJuszGCTemABp6f751R_M?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">dev.to</span>
            <a href="https://dev.to/rachel_muriuki_c5062dd89a/etl-vs-elt-which-one-should-you-use-and-why-2npa?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 1 — Extract</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Extract information from source systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MySQL Database PostgreSQL Database REST APIs CSV Files MongoDB Salesforce</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A pipeline may extract data using SQL queries, API requests, file transfers, or database connectors.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 2 — Transform</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Clean, validate, standardize, enrich, and restructure the extracted information.</p>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Common transformations include
            </span>
            <span className="text-stone-800 text-sm font-semibold"></span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Removing duplicate records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Handling missing values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Converting data types.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Standardizing dates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculating revenue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Joining related datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applying business rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregating records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validating data quality.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 3 — Load</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Load the transformed information into the destination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Snowflake.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amazon Redshift.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Google BigQuery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL analytical database.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data warehouse.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.4 Complete ETL Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce company wants to calculate total revenue generated by each city.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The source systems provide:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customers table</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">name</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">city</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rahul</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pune</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amit</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mumbai</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">103</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Priya</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delhi</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders table</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">amount</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">5000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">3000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O103</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">2000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O104</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">103</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">7000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Extract</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retrieve customer and order information from the source databases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transform</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Join customers with orders and calculate revenue by city.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT c.city, SUM(o.amount) AS total_revenue, COUNT(o.order_id) AS total_orders FROM customers c JOIN orders o ON c.customer_id = o.customer_id GROUP BY c.city;\nLoad\nThe transformed output becomes:\nCity\nRevenue\nOrders\nPune\n₹7,000\n2\nMumbai\n₹3,000\n1\nDelhi\n₹7,000\n1\nThe final table can be loaded into the data warehouse and used by a BI dashboard."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.5 Traditional ETL Architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A traditional ETL architecture generally looks like this:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"SOURCE SYSTEMS | +-------+-------+ | | | MySQL APIs CSV | | | +-------+-------+ | v EXTRACTION | v STAGING AREA | v TRANSFORMATION | +------+------+ | | | Clean Join Aggregate | | | +------+------+ | v DATA LOADING | v DATA WAREHOUSE | v BI / ANALYTICS"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Staging Area</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A staging area is an intermediate location used to temporarily hold extracted data before or during transformation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"ETL Pipeline | v Extracted Data | v Staging Database | v Clean and Transform | v Final Warehouse"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Staging helps separate extraction from final loading.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can also support validation, troubleshooting, and repeatable processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.6 Advantages of ETL</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data is cleaned before reaching the final destination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business rules can be standardized centrally.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data quality can be validated before publication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sensitive fields can be removed or masked before loading.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The destination receives prepared analytical datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful when the target has strict schemas or limited transformation capabilities.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.7 Limitations of ETL</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transformation infrastructure must be maintained.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large transformations can become computationally expensive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The staging and transformation architecture adds complexity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transformations performed before loading can delay data availability.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Changes to business logic may require rerunning extraction and transformation jobs.</p>
        </div>
      </section>

      {/* SECTION 2: 2. Introduction to ELT Architecture */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">ELT &amp; Cloud Processing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. Introduction to ELT Architecture
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.1 What Is ELT?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ELT stands for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">E — Extract</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">L — Load</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">T — Transform</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ELT is a data integration architecture in which data is extracted from source systems and loaded into the target storage platform before most analytical transformations are performed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of performing all transformations outside the destination, the destination's processing capabilities are used to transform the loaded data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is common in modern cloud data platforms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Snowflake.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Google BigQuery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Databricks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amazon Redshift.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.2 Why Did ELT Become Popular?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Traditional data warehouses often relied on external ETL servers to transform data before loading.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Modern cloud data platforms provide scalable compute resources, SQL processing, and large-scale storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This makes it practical to load raw information first and perform transformations inside the analytical platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an organization receiving 100 GB of transaction information daily.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Using ELT:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Extract the source data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Load it into cloud storage or a warehouse landing area.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transform it using SQL or distributed processing engines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publish clean analytical tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can reduce the need to maintain a separate transformation server for every workload.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.3 ELT Architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">ETL (Extract, Transform, Load) Process: Steps &amp; Benefits | Airbyte</span>
            <a href="https://images.openai.com/static-rsc-4/mW6Emg0i922_iz9f_u-u-WPny8Ai8h_SHycVvWb_5ibc1O7-rev5qnFboeTpcQJ3YWQ9gpy2gqAW2kJ82yKtiLHfp7Zc0DzJOnrHJwBhAbl4UqymOYd2Tahz2c8kIYon7xnFB06nDxra8hE1tGdAPHuG_lxePLzvAxwmjODyHhE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">airbyte.com</span>
            <a href="https://airbyte.com/data-engineering-resources/etl-process?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"SOURCE SYSTEMS | +---------+---------+ | | | MySQL APIs Files | | | +---------+---------+ | v EXTRACT | v LOAD RAW DATA | v CLOUD DATA PLATFORM | v RAW / STAGING | v TRANSFORMATION SQL / SPARK | v CLEANED TABLES | v ANALYTICAL TABLES | v BI / ML"}
          </pre>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.4 ELT Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an e-commerce company receives transaction information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">First, extract the records and load them into a raw table.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"CREATE TABLE raw_orders ( order_id INT, customer_id INT, amount DECIMAL(12,2), order_status VARCHAR(30), order_date TIMESTAMP );\nThe raw information is loaded into the target platform.\nThe transformation occurs inside the platform.\nCREATE TABLE clean_orders AS SELECT order_id, customer_id, CAST(amount AS DECIMAL(12,2)) AS amount, UPPER(TRIM(order_status)) AS order_status, order_date FROM raw_orders WHERE order_id IS NOT NULL AND amount >= 0;\nNext, build an analytical table:\nCREATE TABLE daily_revenue AS SELECT CAST(order_date AS DATE) AS sales_date, SUM(amount) AS total_revenue, COUNT(*) AS total_orders FROM clean_orders WHERE order_status = 'SUCCESS' GROUP BY CAST(order_date AS DATE);\nThe target platform performs the transformations using its own processing resources."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.5 Raw Data Preservation in ELT</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One of the important advantages of ELT is that organizations can preserve source-level data in a raw landing area.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"data-platform/ │ ├── raw/ │ ├── customers/ │ ├── orders/ │ └── payments/ │ ├── staging/ │ ├── stg_customers/ │ ├── stg_orders/ │ └── stg_payments/ │ ├── intermediate/ │ ├── int_customer_orders/ │ └── int_payment_orders/ │ └── marts/ ├── customer_analytics/ ├── daily_revenue/ └── product_performance/"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The raw information remains available for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reprocessing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">New business requirements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical analysis.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Auditing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Alternative transformations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Machine learning feature development.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raw preservation still requires retention, access-control, privacy, and storage-cost policies.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.6 Advantages of ELT</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Takes advantage of scalable cloud processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Preserves raw data for future use.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Supports multiple downstream transformations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Makes it easier to modify business logic without extracting source data again.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Uses the SQL capabilities of modern analytical platforms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Works well with modern data lakehouse architectures.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.7 Limitations of ELT</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Requires appropriate target-platform compute capacity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raw data can expose sensitive information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Poorly designed transformations can create large compute costs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unvalidated raw data can contaminate downstream datasets if governance is weak.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data quality still needs explicit enforcement.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple transformation stages require dependency management.</p>
        </div>
      </section>

      {/* SECTION 3: 3. ETL vs ELT Design Decisions */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">Architecture Trade-offs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. ETL vs ELT Design Decisions
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.1 Core Difference</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The most important difference is the location of transformation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ETL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transform before loading</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Extract</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transform</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Load</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ELT</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Load before transforming</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Extract</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Load</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transform</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.2 Detailed Comparison</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th><th className="px-4 py-3">ETL</th><th className="px-4 py-3">ELT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Transformation</td><td className="px-4 py-2.5 text-stone-700">Before loading</td><td className="px-4 py-2.5 text-stone-700">After loading</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Raw data</td><td className="px-4 py-2.5 text-stone-700">May be staged separately</td><td className="px-4 py-2.5 text-stone-700">Commonly retained in target storage</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Compute</td><td className="px-4 py-2.5 text-stone-700">External transformation engine commonly</td><td className="px-4 py-2.5 text-stone-700">Target platform commonly</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Destination</td><td className="px-4 py-2.5 text-stone-700">Prepared data</td><td className="px-4 py-2.5 text-stone-700">Raw and transformed data</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Scalability</td><td className="px-4 py-2.5 text-stone-700">Depends on ETL infrastructure</td><td className="px-4 py-2.5 text-stone-700">Depends on target platform</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Data quality</td><td className="px-4 py-2.5 text-stone-700">Applied before final load</td><td className="px-4 py-2.5 text-stone-700">Applied inside the target environment</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Flexibility</td><td className="px-4 py-2.5 text-stone-700">Often requires pipeline changes to alter pre-load transformations</td><td className="px-4 py-2.5 text-stone-700">Raw records can be transformed in multiple ways</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Common use</td><td className="px-4 py-2.5 text-stone-700">Controlled enterprise integration</td><td className="px-4 py-2.5 text-stone-700">Cloud-native analytics</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.3 When Should You Choose ETL?</span>
          </h3>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Choose ETL when
            </span>
            <span className="text-stone-800 text-sm font-semibold"></span>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Data requires sensitive-field protection before loading</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a healthcare organization may need to remove or tokenize certain sensitive fields before transferring information to a less-restricted analytical system.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. Destination systems have strict schemas</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The destination may only accept records with specific types and structures.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. The target platform has limited transformation capabilities</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An external transformation engine may be more appropriate.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>4. The data must be validated before publication</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Financial records may require strict validation and reconciliation before entering the final reporting database.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.4 When Should You Choose ELT?</span>
          </h3>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Choose ELT when
            </span>
            <span className="text-stone-800 text-sm font-semibold"></span>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. The target platform has scalable compute</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud data warehouses and lakehouses can perform large transformations using their own compute resources.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. You need raw historical data</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Preserving source-level data makes it possible to build new analytical models later.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Multiple business teams need different transformations</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Marketing, finance, operations, and product teams can build independent analytical models using shared raw and staging datasets.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>4. The data volume is large</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A scalable destination can handle transformations that would be difficult to perform on one external server.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.5 Can ETL and ELT Be Used Together?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Yes. Modern enterprise systems frequently combine both.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"SOURCE SYSTEMS | v INITIAL ETL Basic Validation / Sensitive Data Removal | v CLOUD STORAGE | v RAW DATA LAYER | v ELT PROCESSING | v CLEANED TABLES | v ANALYTICAL MARTS"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A pipeline may perform extraction and security-related preparation before loading, then perform analytical transformations after loading.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The labels ETL and ELT describe the main transformation strategy; they do not prohibit hybrid designs.</p>
        </div>
      </section>

      {/* SECTION 4: 4. Data Extraction Techniques */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">Source Extraction</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. Data Extraction Techniques
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.1 What Is Data Extraction?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data extraction is the first stage of ETL and ELT.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is the process of retrieving information from source systems and making it available to the processing pipeline.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data engineer must decide:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Which source should be extracted?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Which tables or files are required?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Which columns are necessary?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Should all records be extracted?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Should only changed records be extracted?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How frequently should extraction happen?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How will source failures be handled?</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.2 SQL-Based Extraction</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL-based extraction retrieves records from relational databases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT order_id, customer_id, amount, order_date FROM orders;\nTo reduce unnecessary extraction, select only the required columns.\nSELECT order_id, customer_id, amount FROM orders WHERE order_date >= '2026-11-01';\nThis can improve performance because fewer records and columns need to be transferred."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.3 API-Based Extraction</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">External systems frequently expose information through REST APIs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">GET /api/v1/customers GET /api/v1/orders GET /api/v1/payments</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The extraction application retrieves the response and converts it into a processable format.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important considerations include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authentication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pagination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">API rate limits.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry policies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Response validation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cursor management.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.4 File-Based Extraction</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Files can be extracted from:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Local directories.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">FTP/SFTP servers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amazon S3.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Azure Data Lake.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Google Cloud Storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"import pandas as pd df = pd.read_csv(\"orders.csv\") print(df.head())\nFor large analytical files:\ndf = pd.read_parquet(\"orders.parquet\")\nParquet is particularly useful for large analytical datasets."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.5 CDC-Based Extraction</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Change Data Capture extracts changes from source databases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of reading every row, the system reads changes such as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">INSERT UPDATE DELETE</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example architecture:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"PostgreSQL | v WAL / Logical Decoding | v Debezium | v Kafka | v Spark | v Lakehouse"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CDC is useful when an application generates frequent changes and downstream systems need those changes without repeatedly querying full tables.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.6 Choosing an Extraction Technique</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recommended extraction approach</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Small relational table</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Full SQL extraction</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large relational table</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incremental SQL or CDC</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Frequently changing database</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Log-based CDC</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">REST API</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Paginated API extraction</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Daily CSV exports</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scheduled file extraction</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Streaming events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka or another event platform</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical cloud files</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch cloud-storage scanning</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The right choice depends on source capabilities, data volume, and freshness requirements.</p>
        </div>
      </section>

      {/* SECTION 5: 5. Data Transformation Strategies */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">Transformation Patterns</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. Data Transformation Strategies
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.1 What Is Data Transformation?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data transformation converts extracted information into a structure that meets analytical or business requirements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raw source data is not always ready for analytical use.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider these source records:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order_id,customer_name,amount,status O101,&quot; rahul &quot;,5000,success O102,&quot;AMIT&quot;,3000,SUCCESS O103,&quot;Priya&quot;,invalid,Pending O104,&quot;Rahul&quot;,2000,success</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are several problems:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inconsistent customer name formatting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amount contains an invalid value.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Status formatting is inconsistent.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer names are repeated.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The data requires validation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transformations improve the quality and usability of the dataset.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.2 Types of Data Transformations</span>
          </h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Structural Transformation</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Changes the structure of information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Renaming columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Changing data types.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rearranging fields.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flattening nested JSON.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Converting nested structures into relational tables.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. Data Type Transformation</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Changes the representation of values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"\"5000\" STRING | v 5000.00 DECIMAL"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT CAST(amount AS DECIMAL(18,2)) FROM orders;"}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Standardization Transformation</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Makes inconsistent values follow a common representation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">success SUCCESS Success</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Standardized:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SUCCESS</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>4. Business Rule Transformation</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applies business logic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT order_id, amount, CASE WHEN amount >= 50000 THEN 'HIGH_VALUE' WHEN amount >= 10000 THEN 'MEDIUM_VALUE' ELSE 'LOW_VALUE' END AS order_category FROM orders;"}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>5. Aggregation Transformation</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combines several records into summarized values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT customer_id, SUM(amount) AS total_spending FROM orders GROUP BY customer_id;"}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>6. Enrichment Transformation</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combines source information with additional datasets to produce more informative records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"Orders + Customers + Products | v Enriched Orders"}
          </pre>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>7. Deduplication Transformation</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identifies and removes repeated logical records based on their business keys and update order.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>8. Temporal Transformation</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Standardizes timestamps, converts time zones, and derives reporting dates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"2026-11-09 10:00:00 UTC | v 2026-11-09 15:30:00 IST"}
          </pre>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.3 Transformation in Different Technologies</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transformations can happen using several technologies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Technology</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Main transformation approach</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Python / Pandas</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DataFrame operations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Spark</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed DataFrame and SQL operations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database and warehouse transformations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">dbt</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL-based analytical models</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stateful stream transformations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AWS Glue</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Managed Spark-based ETL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, dbt allows data teams to define SQL transformations as reusable models with dependencies and testing. Its incremental materialization can process new or changed records rather than rebuilding a complete target table on every run.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">dbt Developer Hub+1</p>
        </div>
      </section>

      {/* SECTION 6: 6. Data Loading Strategies */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Storage Loading</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. Data Loading Strategies
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.1 What Is Data Loading?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data loading is the process of writing extracted and transformed records into the destination system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The destination may be:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data warehouse.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data lake.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lakehouse.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data mart.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Search platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The loading approach determines how the destination records are inserted, updated, replaced, or deleted.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.2 Full Refresh Loading</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Full refresh replaces the selected destination dataset with a complete newly prepared dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"CREATE TABLE orders_new AS SELECT * FROM source_orders;\nAfter validating the new table, the pipeline can replace the published destination using an appropriate database-specific swap or deployment strategy.\nAnother common approach is:\nTRUNCATE TABLE target_orders;\nFollowed by loading the complete dataset."}
            </pre>
          </div>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Advantages
            </span>
            <span className="text-stone-800 text-sm font-semibold"></span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Simple logic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Easy to understand.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Removes old destination records that are no longer in the source.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful for small reference tables.</p>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Disadvantages
            </span>
            <span className="text-stone-800 text-sm font-semibold"></span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can consume substantial resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can cause downtime or temporarily empty tables when implemented unsafely.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reprocesses unchanged records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">May not be suitable for very large datasets.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.3 Append Loading</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Append loading adds new records to the destination without changing previously stored data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"INSERT INTO target_orders ( order_id, customer_id, amount ) SELECT order_id, customer_id, amount FROM staging_orders;\nSuitable for:\nImmutable event logs.\nAppend-only transactions.\nHistorical observations.\nAudit records.\nImportant: Append-only loading can create duplicates when the same batch or event is processed more than once. It needs reliable event identity or batch deduplication."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.4 Upsert Loading</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Upsert means:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Update a destination record when it already exists.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Insert a record when it does not exist.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incoming Record: Customer ID = C101 City = Mumbai Destination: Customer ID = C101 City = Pune</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After the upsert:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer ID = C101 City = Mumbai</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL implementation:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"MERGE INTO target_customers AS target USING staging_customers AS source ON target.customer_id = source.customer_id WHEN MATCHED THEN UPDATE SET target.name = source.name, target.city = source.city WHEN NOT MATCHED THEN INSERT ( customer_id, name, city ) VALUES ( source.customer_id, source.name, source.city );\nThis is useful for customer tables, inventory records, and CDC pipelines.\nFor repeated or out-of-order processing, upserts should also compare source event versions or update timestamps so that stale events do not overwrite newer records."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.5 Partition Overwrite Loading</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition overwrite replaces selected partitions instead of an entire destination table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a sales table is partitioned by date.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">sales/ date=2026-11-07/ date=2026-11-08/ date=2026-11-09/</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">New records for November 9 arrive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of rebuilding all dates, the pipeline can rebuild that specific date partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Existing: Nov 7 -&gt; Preserve Nov 8 -&gt; Preserve Nov 9 -&gt; Replace</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is helpful for correcting daily aggregates and rebuilding affected reporting periods.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The overwrite must be scoped carefully so that unrelated partitions are not accidentally removed.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.6 Comparison of Loading Strategies</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Strategy</th><th className="px-4 py-3">Operation</th><th className="px-4 py-3">Suitable workload</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Full refresh</td><td className="px-4 py-2.5 text-stone-700">Replace complete dataset</td><td className="px-4 py-2.5 text-stone-700">Small reference tables</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Append</td><td className="px-4 py-2.5 text-stone-700">Add new rows</td><td className="px-4 py-2.5 text-stone-700">Immutable events</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Upsert / MERGE</td><td className="px-4 py-2.5 text-stone-700">Insert or update matching keys</td><td className="px-4 py-2.5 text-stone-700">CDC and changing records</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Partition overwrite</td><td className="px-4 py-2.5 text-stone-700">Replace selected partitions</td><td className="px-4 py-2.5 text-stone-700">Daily or monthly aggregates</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Delete and insert</td><td className="px-4 py-2.5 text-stone-700">Remove matching data and reload</td><td className="px-4 py-2.5 text-stone-700">Controlled batch replacement</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 7: 7. Data Cleansing and Standardization */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">Data Quality</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Data Cleansing and Standardization
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.1 What Is Data Cleansing?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data cleansing is the process of identifying and correcting or managing inaccurate, incomplete, inconsistent, duplicated, and invalid data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a customer dataset:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Customer ID</th><th className="px-4 py-3">Name</th><th className="px-4 py-3">Email</th><th className="px-4 py-3">Age</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">101</td><td className="px-4 py-2.5 text-stone-700">Rahul</td><td className="px-4 py-2.5 text-stone-700">rahul@gmail.com</td><td className="px-4 py-2.5 text-stone-700">23</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">102</td><td className="px-4 py-2.5 text-stone-700">Amit</td><td className="px-4 py-2.5 text-stone-700">amit@gmail.com</td><td className="px-4 py-2.5 text-stone-700">NULL</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">103</td><td className="px-4 py-2.5 text-stone-700">RAHUL</td><td className="px-4 py-2.5 text-stone-700">rahul@gmail.com</td><td className="px-4 py-2.5 text-stone-700">23</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">104</td><td className="px-4 py-2.5 text-stone-700">Priya</td><td className="px-4 py-2.5 text-stone-700">invalid-email</td><td className="px-4 py-2.5 text-stone-700">-5</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">105</td><td className="px-4 py-2.5 text-stone-700">Sam</td><td className="px-4 py-2.5 text-stone-700">NULL</td><td className="px-4 py-2.5 text-stone-700">25</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">This dataset has:</td><td className="px-4 py-2.5 text-stone-700">Missing values.</td><td className="px-4 py-2.5 text-stone-700">Duplicate information.</td><td className="px-4 py-2.5 text-stone-700">Inconsistent capitalization.</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.2 Handling Missing Values</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A missing value may appear as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">NULL None NaN Empty String</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different columns require different handling strategies.</p>
          <div className="mt-4 mb-1.5 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs uppercase tracking-wider">Option 1</span>
            <span className="font-semibold text-stone-900 text-sm sm:text-base">Remove records</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use this only when the missing field makes the record unusable for the intended task.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"DELETE FROM staging_customers WHERE customer_id IS NULL;\nOption 2: Replace with default values\nSELECT customer_id, COALESCE(city, 'UNKNOWN') AS city FROM customers;\nOption 3: Statistical imputation\nFor numerical data, missing values can sometimes be replaced with a mean, median, or another estimate.\nOption 4: Preserve as NULL\nSometimes the missing value is meaningful.\nFor example, an unknown customer's age should not automatically be replaced with zero."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.3 Removing Duplicate Records</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ID</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Name</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">City</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rahul</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pune</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amit</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mumbai</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rahul</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pune</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The third record is a duplicate of the first based on the chosen customer identity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT DISTINCT customer_id, name, city FROM customers;\nFor situations where duplicate keys have different versions, use ranking:\nSELECT * FROM ( SELECT *, ROW_NUMBER() OVER ( PARTITION BY customer_id ORDER BY updated_at DESC ) AS row_num FROM customers ) ranked WHERE row_num = 1;\nThis selects the newest record according to updated_at.\nIt assumes that the latest timestamp represents the correct current state. When timestamps tie, a further deterministic tie-breaker should be used."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.4 Data Type Validation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Expected: age = INTEGER Incoming: age = &quot;twenty-five&quot;</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is an invalid type conversion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A pipeline should either reject, quarantine, or safely handle the record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT customer_id, TRY_CAST(age AS INTEGER) AS age FROM raw_customers;\nHere, TRY_CAST is available in supported SQL engines and returns NULL when conversion fails."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.5 Standardizing Text</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inconsistent text values create problems for grouping and reporting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pune pune PUNE Pune</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Normalize the values:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT UPPER(TRIM(city)) AS city FROM customers;"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.6 Standardizing Dates</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different systems can use different date formats.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">09/11/2026 2026-11-09 09-Nov-2026</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The pipeline should convert them into a consistent date representation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT CAST(order_timestamp AS DATE) AS order_date FROM orders;\nThe parser must know the original format and time zone. An ambiguous date such as 09/11/2026 could mean different days in different regional conventions."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.7 Data Validation Rules</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A production data pipeline should have explicit rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Column</th><th className="px-4 py-3">Validation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">customer_id</td><td className="px-4 py-2.5 text-stone-700">Cannot be NULL</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">email</td><td className="px-4 py-2.5 text-stone-700">Must satisfy the accepted email-format rule</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">age</td><td className="px-4 py-2.5 text-stone-700">Must be within a defined valid range</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">amount</td><td className="px-4 py-2.5 text-stone-700">Must be nonnegative</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">order_id</td><td className="px-4 py-2.5 text-stone-700">Must be unique</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">order_date</td><td className="px-4 py-2.5 text-stone-700">Must be a valid date</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">status</td><td className="px-4 py-2.5 text-stone-700">Must belong to approved values</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.8 Cleansing vs Standardization</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Cleansing</th><th className="px-4 py-3">Standardization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Handles bad or invalid data</td><td className="px-4 py-2.5 text-stone-700">Creates consistent representations</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Removes or manages duplicates</td><td className="px-4 py-2.5 text-stone-700">Normalizes capitalization</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Handles missing values</td><td className="px-4 py-2.5 text-stone-700">Standardizes formats</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Detects incorrect values</td><td className="px-4 py-2.5 text-stone-700">Standardizes units and categories</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 8: 8. Filtering and Aggregation */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Relational Analytics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Filtering and Aggregation
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.1 Data Filtering</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filtering selects records that satisfy specified conditions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an orders table contains:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Order</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Amount</th><th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">O101</td><td className="px-4 py-2.5 text-stone-700">C101</td><td className="px-4 py-2.5 text-stone-700">5000</td><td className="px-4 py-2.5 text-stone-700">SUCCESS</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">O102</td><td className="px-4 py-2.5 text-stone-700">C102</td><td className="px-4 py-2.5 text-stone-700">3000</td><td className="px-4 py-2.5 text-stone-700">PENDING</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">O103</td><td className="px-4 py-2.5 text-stone-700">C101</td><td className="px-4 py-2.5 text-stone-700">7000</td><td className="px-4 py-2.5 text-stone-700">SUCCESS</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">O104</td><td className="px-4 py-2.5 text-stone-700">C103</td><td className="px-4 py-2.5 text-stone-700">2000</td><td className="px-4 py-2.5 text-stone-700">FAILED</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">The company wants only successful transactions.</td><td className="px-4 py-2.5 text-stone-700">SQL:</td><td className="px-4 py-2.5 text-stone-700">SELECT * FROM orders WHERE status = 'SUCCESS';</td><td className="px-4 py-2.5 text-stone-700">Result:</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Order</td><td className="px-4 py-2.5 text-stone-700">Customer</td><td className="px-4 py-2.5 text-stone-700">Amount</td><td className="px-4 py-2.5 text-stone-700">O101</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">C101</td><td className="px-4 py-2.5 text-stone-700">5000</td><td className="px-4 py-2.5 text-stone-700">O103</td><td className="px-4 py-2.5 text-stone-700">C101</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.2 Types of Filtering</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Equality</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">WHERE city = 'Pune'</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Range</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">WHERE amount BETWEEN 1000 AND 10000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple Conditions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">WHERE status = 'SUCCESS' AND amount &gt; 5000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pattern Matching</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">WHERE email LIKE '%@gmail.com'</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Null Filtering</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">WHERE customer_id IS NOT NULL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Time-Based Filtering</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">WHERE order_date &gt;= '2026-11-01' AND order_date &lt; '2026-12-01'</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.3 What Is Data Aggregation?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregation combines multiple records into summarized information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is especially important for analytical systems because business users typically need summaries, trends, and metrics rather than millions of individual rows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common aggregation functions:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Function</th><th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">SUM()</td><td className="px-4 py-2.5 text-stone-700">Calculate total</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">COUNT()</td><td className="px-4 py-2.5 text-stone-700">Count records</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">AVG()</td><td className="px-4 py-2.5 text-stone-700">Calculate average</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">MIN()</td><td className="px-4 py-2.5 text-stone-700">Find minimum</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">MAX()</td><td className="px-4 py-2.5 text-stone-700">Find maximum</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">COUNT(DISTINCT)</td><td className="px-4 py-2.5 text-stone-700">Count unique values</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Example:</td><td className="px-4 py-2.5 text-stone-700">SELECT customer_id, SUM(amount) AS total_spending, COUNT(*) AS total_orders, AVG(amount) AS average_order_value FROM orders GROUP BY customer_id;</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.4 Aggregation by Time</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Daily revenue:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT CAST(order_date AS DATE) AS sales_date, SUM(amount) AS daily_revenue FROM orders WHERE status = 'SUCCESS' GROUP BY CAST(order_date AS DATE);\nMonthly revenue:\nSELECT EXTRACT(YEAR FROM order_date) AS sales_year, EXTRACT(MONTH FROM order_date) AS sales_month, SUM(amount) AS monthly_revenue FROM orders WHERE status = 'SUCCESS' GROUP BY EXTRACT(YEAR FROM order_date), EXTRACT(MONTH FROM order_date);"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.5 Filtering Before Aggregation vs After Aggregation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These operations have different meanings.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">WHERE filters individual rows before grouping.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT customer_id, SUM(amount) AS total_spending FROM orders WHERE status = 'SUCCESS' GROUP BY customer_id;\nHAVING filters the resulting groups.\nSELECT customer_id, SUM(amount) AS total_spending FROM orders GROUP BY customer_id HAVING SUM(amount) > 10000;\nThe result contains customers whose aggregate successful or total spending, depending on the query's filters, exceeds ₹10,000."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.6 Why Aggregation Matters in ETL</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A business might collect 10 million individual order records but publish only 365 daily revenue records for a yearly report.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This substantially reduces the data volume required for certain reporting workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, preserve the detailed underlying records when they are needed for audit, exploration, and alternative analysis.</p>
        </div>
      </section>

      {/* SECTION 9: 9. Joins and Data Enrichment */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">Multi-Table Grain</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Joins and Data Enrichment
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.1 What Are Joins?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A join combines information from multiple tables using related columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an e-commerce company storing customers and their orders separately.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">name</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">city</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rahul</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pune</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amit</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mumbai</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">103</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Priya</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delhi</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">amount</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">5000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">3000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O103</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">2000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The company wants to know which customer placed each order.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It needs to join the two tables.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.2 INNER JOIN</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An INNER JOIN returns records having matching values in both datasets.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT o.order_id, c.customer_id, c.name, c.city, o.amount FROM orders o INNER JOIN customers c ON o.customer_id = c.customer_id;\nResult:\nOrder\nCustomer\nCity\nAmount\nO101\nRahul\nPune\n5000\nO102\nAmit\nMumbai\n3000\nO103\nRahul\nPune\n2000\nUnmatched records are excluded."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.3 LEFT JOIN</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A LEFT JOIN returns all records from the left table and matching records from the right table.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT c.customer_id, c.name, o.order_id, o.amount FROM customers c LEFT JOIN orders o ON c.customer_id = driver? NO wait: o.customer_id = c.customer_id;\nResult:\nCustomer\nName\nOrder\nAmount\n101\nRahul\nO101\n5000\n101\nRahul\nO103\n2000\n102\nAmit\nO102\n3000\n103\nPriya\nNULL\nNULL\nPriya is included even though she has not placed an order."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.4 Other Join Types</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Join</th><th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">INNER JOIN</td><td className="px-4 py-2.5 text-stone-700">Returns matching records</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">LEFT JOIN</td><td className="px-4 py-2.5 text-stone-700">Keeps all left-side records</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">RIGHT JOIN</td><td className="px-4 py-2.5 text-stone-700">Keeps all right-side records</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">FULL OUTER JOIN</td><td className="px-4 py-2.5 text-stone-700">Keeps matching and unmatched records from both sides</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">CROSS JOIN</td><td className="px-4 py-2.5 text-stone-700">Produces combinations of records</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">SELF JOIN</td><td className="px-4 py-2.5 text-stone-700">Joins a table with itself</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.5 What Is Data Enrichment?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data enrichment adds useful information to an existing dataset by combining it with additional data sources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a transaction table may contain:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">transaction_id customer_id product_id amount</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This information alone may not be enough for detailed analysis.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The company joins it with:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer profiles.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Product categories.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Geographic information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Marketing campaigns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The enriched output becomes:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">transaction_id customer_id customer_name customer_city product_id product_name product_category amount payment_status campaign_name</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This creates a more useful analytical dataset.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.6 Multi-Table Enrichment Example</span>
          </h3>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT o.order_id, c.name AS customer_name, c.city, p.product_name, p.category, o.quantity, o.amount, pay.payment_status FROM orders o INNER JOIN customers c ON o.customer_id = c.customer_id INNER JOIN products p ON o.product_id = p.product_id LEFT JOIN payments pay ON o.order_id = pay.order_id;"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.7 Important Join Problems</span>
          </h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Duplicate Records</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the customer table contains two records with the same customer_id.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Joining it to orders can multiply the resulting rows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Before joining, establish the grain and uniqueness of the datasets.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. Many-to-Many Relationships</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One customer can make several orders, and each order can contain several product records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Joining tables with different grains can multiply data unexpectedly.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Missing Matches</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A payment record may not yet exist for a newly created order.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A LEFT JOIN can preserve the order while showing missing payment information.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>4. Data Skew</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One join key may occur much more frequently than others.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, one large retail customer may account for a substantial share of all orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can make distributed joins uneven.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.8 Join Optimization in Apache Spark</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large joins may require shuffling data between executors.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark can improve some joins through broadcast joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql.functions import broadcast enriched_orders = orders.join( broadcast(customers), on=\"customer_id\", how=\"inner\" )\nA broadcast join can be beneficial when one dataset is small enough to distribute to the workers.\nFor larger datasets, a shuffle-based join may be more appropriate.\nApache Spark also provides Adaptive Query Execution (AQE), which can use runtime statistics to improve query execution decisions, including partition coalescing and certain join optimizations.\nSpark 4.3.0 Documentation+1"}
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 10: 10. Incremental Batch Processing */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Watermark Pipelines</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Incremental Batch Processing
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.1 What Is Incremental Batch Processing?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incremental batch processing is the practice of processing only new or modified data during each batch execution instead of repeatedly processing the entire dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It combines two concepts:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incremental processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an e-commerce company runs its ETL pipeline every hour.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At 9 AM, it processes the records received before 9 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At 10 AM, it processes the records received since the previous successful execution, plus any required overlap or correction window.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">9 AM -&gt; Batch 1 10 AM -&gt; Batch 2 11 AM -&gt; Batch 3 12 PM -&gt; Batch 4</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This reduces unnecessary computation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.2 Full Batch vs Incremental Batch</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a dataset contains 100 million records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A full batch processes:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Every execution: 100 million records</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incremental processing may handle:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">First execution: 100 million records Next execution: 50,000 new or changed records Next execution: 40,000 new or changed records</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The difference can become significant at scale.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.3 Incremental Processing Using a Watermark</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the pipeline stores the most recently processed timestamp.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">last_successful_watermark = 2026-11-08 23:59:59</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The next extraction selects relevant records after that point.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT * FROM orders WHERE updated_at >= :last_watermark;\nThe use of an overlapping boundary can capture records with equal timestamps.\nThe destination must handle repeated records through deduplication or upsert logic."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.4 Building an Incremental Pipeline with dbt</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">dbt supports incremental models.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A simplified example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"{{ config( materialized='incremental', unique_key='order_id' ) }} SELECT order_id, customer_id, amount, order_date, updated_at FROM {{ source('raw', 'orders') }} {% if is_incremental() %} WHERE updated_at >= ( SELECT COALESCE( MAX(updated_at), TIMESTAMP '1900-01-01 00:00:00' ) FROM {{ this }} ) {% endif %}\nExplanation:\nmaterialized='incremental' tells dbt to use incremental materialization.\nunique_key identifies the logical record.\nis_incremental() determines whether this is an incremental execution.\nThe filter selects records that need processing.\nThe target model is updated using the adapter's supported incremental strategy.\nThe example uses an overlap-friendly inclusive boundary. Production implementations should also account for ties, null timestamps, updates to historical rows, and the destination's merge behavior.\nWithout a proper unique key and suitable incremental strategy, repeated records can be appended instead of updated.\ndbt Developer Hub+1"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.5 Incremental Processing in AWS Glue</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AWS Glue supports job bookmarks to track data previously processed by a job.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For supported sources, a bookmark can help determine which records or objects need processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An example job option is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">--job-bookmark-option job-bookmark-enable</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a scripted Glue job, job.init() and job.commit() are important parts of bookmark-state management.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a managed way to track supported incremental ingestion workloads, although bookmark semantics depend on the source connector and transformation context.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AWS Glue+1</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.6 When Incremental Batch Processing Is Useful</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Daily revenue reporting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer data synchronization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inventory updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transaction ingestion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical financial reporting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large-scale warehouse transformations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Periodic business dashboards.</p>
        </div>
      </section>

      {/* SECTION 11: 11. Partition-Based Processing */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Partition Pruning</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Partition-Based Processing
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.1 What Is Partition-Based Processing?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition-based processing divides a large dataset into smaller logical sections and processes them separately.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a company storing five years of transaction records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of processing the complete table at once, it can process data by year, month, or day.</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"transactions/ │ ├── year=2024/ │ ├── month=01/ │ └── month=02/ │ ├── year=2025/ │ ├── month=01/ │ └── month=02/ │ └── year=2026/ ├── month=10/ └── month=11/"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This helps organize large datasets and can reduce unnecessary processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.2 Why Is Partitioning Important?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine processing 2 billion orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A single huge processing workload may:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consume substantial memory.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Require large amounts of compute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Become difficult to recover.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Create unnecessarily long execution times.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Produce large shuffle operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning allows work to be divided.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"2 Billion Records | v +-------+-------+ | | | v v v 2024 2025 2026 | | | v v v Task 1 Task 2 Task 3 | | | +-------+-------+ | v Combined Output"}
          </pre>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.3 Time-Based Partitioning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For transaction datasets, time-based partitioning is very common.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">transactions/ year=2026/ month=10/ month=11/</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Query:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT SUM(amount) FROM transactions WHERE order_date >= '2026-11-01' AND order_date < '2026-12-01';\nThe query engine may use partition pruning to avoid reading other dates."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.4 Processing Partitions Independently</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the company needs to rebuild daily sales reports for November.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The pipeline can process each date independently:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">November 1 -&gt; Task 1 November 2 -&gt; Task 2 November 3 -&gt; Task 3 ... November 30 -&gt; Task 30</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This allows parallel execution, provided resource availability and downstream write behavior permit it.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.5 Partitioning in Apache Spark</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark reads partitioned datasets and exposes their partition columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"orders = spark.read.parquet( \"s3://company-lake/silver/orders/\" ) november_orders = orders.filter( (orders.year == 2026) & (orders.month == 11) )\nWhen the data is laid out suitably, Spark can skip irrelevant partitions.\nTo write partitioned data:\n( orders.write .mode(\"append\") .partitionBy(\"year\", \"month\") .parquet(\"s3://company-lake/silver/orders/\") )"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.6 Partitioning vs Processing Parallelism</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These concepts are related but different.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning organizes the data into logical subsets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parallelism determines how many tasks or workers process those subsets concurrently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A dataset can have hundreds of partitions but be processed with only ten concurrent tasks.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.7 Choosing the Right Partition Strategy</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Partition key</th><th className="px-4 py-3">Suitable situation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Date</td><td className="px-4 py-2.5 text-stone-700">Time-series transaction datasets</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Month</td><td className="px-4 py-2.5 text-stone-700">Historical monthly reporting</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Region</td><td className="px-4 py-2.5 text-stone-700">Regional business analysis</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Country</td><td className="px-4 py-2.5 text-stone-700">International analytical datasets</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Event type</td><td className="px-4 py-2.5 text-stone-700">Certain event-processing workloads</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Avoid excessive high-cardinality partitioning.</td><td className="px-4 py-2.5 text-stone-700">For example, partitioning a huge dataset by individual customer ID may create a very large number of tiny partitions.</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 12: 12. Handling Late-Arriving Data */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Event Time &amp; Lookbacks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Handling Late-Arriving Data
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.1 What Is Late-Arriving Data?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Late-arriving data refers to information that reaches the data processing pipeline after the time period or batch in which it was expected.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an e-commerce platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An order is created on November 7.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, due to a network problem, the order reaches the analytical pipeline on November 9.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order Created: November 7 Order Received: November 9</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The event belongs to November 7, but the processing system discovers it on November 9.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can make historical reporting incorrect if the pipeline only processes the most recent date.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.2 Event Time vs Processing Time</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are two different timestamps.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event Time</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When the business event actually happened.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing Time</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When the data processing system processed the event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Event</th><th className="px-4 py-3">Timestamp</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Order created</td><td className="px-4 py-2.5 text-stone-700">Nov 7, 10:00 AM</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Order received</td><td className="px-4 py-2.5 text-stone-700">Nov 9, 8:00 AM</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Order processed</td><td className="px-4 py-2.5 text-stone-700">Nov 9, 8:02 AM</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.3 Strategies for Handling Late Data</span>
          </h3>
          <div className="mt-4 mb-1.5 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs uppercase tracking-wider">Strategy 1</span>
            <span className="font-semibold text-stone-900 text-sm sm:text-base">Lookback Window</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of processing only the current date, process a small range of previous dates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Current date: November 9 Lookback: 3 days Reprocess: November 7, November 8, November 9</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The destination should use an appropriate upsert or partition-replacement approach to avoid duplicates.</p>
          <div className="mt-4 mb-1.5 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs uppercase tracking-wider">Strategy 2</span>
            <span className="font-semibold text-stone-900 text-sm sm:text-base">Historical Partition Reprocessing</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When a delayed record arrives, determine its event date and rebuild the corresponding historical partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Late order: November 7 Affected partition: year=2026/month=11/day=07</p>
          <div className="mt-4 mb-1.5 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs uppercase tracking-wider">Strategy 3</span>
            <span className="font-semibold text-stone-900 text-sm sm:text-base">CDC-Based Correction</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use the source's change events to identify updates to older business records and update the corresponding target records.</p>
          <div className="mt-4 mb-1.5 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 font-bold text-xs uppercase tracking-wider">Strategy 4</span>
            <span className="font-semibold text-stone-900 text-sm sm:text-base">Event-Time Windows</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In streaming processing, event-time windows group data according to event timestamps rather than arrival times.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A watermark helps the engine decide how long to wait for delayed events before finalizing certain window computations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.4 Late-Arriving Dimension Data</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an order arrives before its customer profile is available in the analytics system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The order refers to customer C101, but the customer table has not yet received that record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This creates a dimension lookup problem.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common approaches include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Temporarily assigning an unknown or inferred dimension record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delaying processing until the customer arrives.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Performing a later correction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retaining unmatched records in an intermediate table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The correct approach depends on business requirements.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.5 Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initial daily revenue:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Date</th><th className="px-4 py-3">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Nov 7</td><td className="px-4 py-2.5 text-stone-700">₹50,000</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Nov 8</td><td className="px-4 py-2.5 text-stone-700">₹65,000</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">A late order worth ₹10,000 arrives on November 9 but belongs to November 7.</td><td className="px-4 py-2.5 text-stone-700">Corrected report:</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Date</td><td className="px-4 py-2.5 text-stone-700">Revenue</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Nov 7</td><td className="px-4 py-2.5 text-stone-700">₹60,000</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Nov 8</td><td className="px-4 py-2.5 text-stone-700">₹65,000</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 13: 13. Data Deduplication */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">Deduplication &amp; Windows</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Data Deduplication
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.1 What Is Data Deduplication?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data deduplication is the process of identifying and handling duplicate records so that the destination contains the correct number of logical business records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an order dataset:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order ID</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amount</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rahul</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">5000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amit</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">3000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rahul</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">5000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O103</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Priya</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">7000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amit</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">3000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The order records O101 and O102 appear more than once.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If these records are included in a revenue calculation without correction, the result will be incorrect.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.2 Why Do Duplicate Records Occur?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common reasons include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pipeline retries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Repeated API responses.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Duplicate file uploads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka event replay.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Overlapping extraction windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incorrect source-system identifiers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reprocessing historical batches.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incorrect join logic.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.3 Types of Deduplication</span>
          </h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Exact Duplicate Removal</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Removes records that are identical across all selected columns.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT DISTINCT * FROM staging_orders;"}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. Key-Based Deduplication</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identifies duplicates using a business key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order_id = O101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT * FROM ( SELECT *, ROW_NUMBER() OVER ( PARTITION BY order_id ORDER BY updated_at DESC ) AS row_num FROM staging_orders ) ranked WHERE row_num = 1;\nThis retains the newest record for each order ID."}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Event-Level Deduplication</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Uses a unique event ID to identify repeated event delivery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">event_id = EVT10001</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The pipeline checks whether that event has already been successfully applied.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.4 Deduplication in PySpark</span>
          </h3>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql import functions as F from pyspark.sql.window import Window window = ( Window .partitionBy(\"order_id\") .orderBy( F.col(\"updated_at\").desc(), F.col(\"event_sequence\").desc() ) ) deduplicated = ( orders .withColumn(\"row_num\", F.row_number().over(window)) .filter(F.col(\"row_num\") == 1) .drop(\"row_num\") )\nThis example assumes that updated_at and event_sequence together provide a meaningful ordering of changes."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.5 Important Considerations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deduplication must not accidentally remove legitimate business events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a customer may place two separate orders for the same product at the same price.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These records are not duplicates simply because some fields are identical.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use business identity and event identity rather than relying on superficial similarity.</p>
        </div>
      </section>

      {/* SECTION 14: 14. Idempotent Pipeline Design */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Deterministic Ingestion</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Idempotent Pipeline Design
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.1 What Is an Idempotent Pipeline?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An idempotent pipeline is designed so that rerunning the same logical input does not produce unintended differences in the final result.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is particularly important in ETL because pipelines frequently experience retries and failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a batch contains:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch ID: B1001 Order O101 Order O102 Order O103</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The pipeline successfully writes the records but crashes before reporting success.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The orchestration system starts the batch again.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without idempotent design, the destination might contain:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">O101 O102 O103 O101 O102 O103</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An idempotent pipeline prevents this unintended duplication.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.2 How to Design Idempotent Pipelines</span>
          </h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Use Stable Business Keys</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order_id customer_id transaction_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These identify the logical records.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. Use MERGE Instead of Blind Append</span>
          </h4>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"MERGE INTO target_orders AS target USING staging_orders AS source ON target.order_id = source.order_id WHEN MATCHED THEN UPDATE SET target.amount = source.amount, target.status = source.status WHEN NOT MATCHED THEN INSERT ( order_id, amount, status ) VALUES ( source.order_id, source.amount, source.status );\nThe same incoming batch can be applied again without inserting duplicate logical order IDs, assuming the source has one deterministically selected record per key."}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Track Batch IDs</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintain a batch-control table.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"CREATE TABLE pipeline_batches ( batch_id VARCHAR(100) PRIMARY KEY, pipeline_name VARCHAR(100), status VARCHAR(20), started_at TIMESTAMP, completed_at TIMESTAMP );\nA pipeline can use this table to identify whether a batch has already completed.\nThe batch status and destination commit must be coordinated to avoid a crash between them creating an inconsistent processing state."}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>4. Make Transformations Deterministic</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For the same source records and configuration, transformations should produce the same intended output.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid using uncontrolled random values or current-time calculations where stable output is expected.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>5. Control Deletions and Updates</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotency must cover more than inserts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The pipeline should consistently handle:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deletes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical corrections.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Out-of-order events.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.3 Idempotent vs Non-Idempotent Operations</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Operation</th><th className="px-4 py-3">Idempotent?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Set city to Pune</td><td className="px-4 py-2.5 text-stone-700">Yes, as a state-setting operation</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Add ₹500 to balance</td><td className="px-4 py-2.5 text-stone-700">No</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Insert a unique record using a safe upsert</td><td className="px-4 py-2.5 text-stone-700">Potentially yes</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Append every event without deduplication</td><td className="px-4 py-2.5 text-stone-700">No</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Rebuild a defined partition from deterministic input</td><td className="px-4 py-2.5 text-stone-700">Potentially yes</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Increment a counter on every retry</td><td className="px-4 py-2.5 text-stone-700">No</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 15: 15. Retry and Recovery Mechanisms */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Fault Tolerance &amp; DLQ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. Retry and Recovery Mechanisms
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.1 Why Do ETL Pipelines Need Retries?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Production pipelines depend on multiple infrastructure components.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Databases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">APIs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark clusters.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network services.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authentication systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Any component may become temporarily unavailable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"ETL Pipeline | v Database | v Connection Timeout | v Retry | v Database | v Connection Successful"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A retry mechanism allows the pipeline to recover from temporary problems without manual intervention.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.2 Types of Failures</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Infrastructure Failures</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker crashes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Server restarts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud service interruptions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Failures</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Invalid formats.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema mismatches.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Null values in mandatory columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Corrupt files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing Failures</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Memory errors.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failed joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark executor failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incorrect transformation logic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Destination Failures</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database unavailable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Insufficient storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Permission errors.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transaction conflicts.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.3 Retry Strategies</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Immediate Retry</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Repeat the operation immediately.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful only for certain very short transient failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fixed Delay Retry</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Wait for a fixed amount of time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Attempt 1 -&gt; Failure Wait 5 seconds Attempt 2 -&gt; Failure Wait 5 seconds Attempt 3 -&gt; Success</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exponential Backoff</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increase the waiting interval after each failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Attempt 1 -&gt; 1 second Attempt 2 -&gt; 2 seconds Attempt 3 -&gt; 4 seconds Attempt 4 -&gt; 8 seconds</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Bounded Retry</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use a maximum attempt count and maximum elapsed time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After the limit, fail the task or route appropriate messages to a DLQ.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.4 Retry in Python</span>
          </h3>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"import time import requests MAX_RETRIES = 5 def fetch_data(url): for attempt in range(MAX_RETRIES): try: response = requests.get( url, timeout=30 ) response.raise_for_status() return response.json() except requests.RequestException: if attempt == MAX_RETRIES - 1: raise wait_time = min( 2 ** attempt, 30 ) time.sleep(wait_time) raise RuntimeError(\"Unexpected retry termination\")\nThis is a simple example. A production system should distinguish retryable HTTP errors from permanent errors such as authentication failures or invalid requests, and should add jitter."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.5 Recovery from a Partial ETL Failure</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an ETL pipeline performs these tasks:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">1. Extract orders 2. Clean orders 3. Join customers 4. Aggregate revenue 5. Load Gold tables</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The first four tasks succeed, but the final load fails.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A reliable architecture should not blindly restart every operation if the previous outputs are valid and reproducible.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It may resume from the failed stage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This requires:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Durable intermediate outputs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Task execution metadata.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpointing where appropriate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotent writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dependency tracking.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validated execution boundaries.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.6 Failure Recovery Design</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A useful production pattern is:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"Extract | v Stage Raw Data | v Validate Input | v Transform | v Write Temporary Output | v Validate Output | v Commit / Publish | v Update Batch Status"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The pipeline should avoid publishing incomplete results as successful analytical data.</p>
        </div>
      </section>

      {/* SECTION 16: 16. Backfilling Historical Data */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">Historical Reprocessing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Backfilling Historical Data
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.1 What Is Backfilling?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backfilling is the process of processing or rebuilding historical data for an earlier time period.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce company has a daily revenue pipeline.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">On November 1, the transformation logic had an incorrect tax calculation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The issue is discovered on November 9.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The team must correct historical results for November 1 through November 8.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is called a historical backfill.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.2 Why Is Backfilling Required?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common situations include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A transformation bug has been fixed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical source records arrived late.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A new business rule has been introduced.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">New columns are required.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An analytical model must be rebuilt.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A historical database is being migrated.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Corrupted output needs to be reconstructed.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.3 Backfill Architecture</span>
          </h3>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"Historical Source Data | v Select Date Range | v Extract Old Records | v Run Transformation | v Validate Results | v Replace Affected Output | v Reconcile Historical Data"}
          </pre>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.4 Example: Monthly Revenue Backfill</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the output table contains:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">daily_revenue</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The affected period is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">November 1 to November 8</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Query:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT CAST(order_date AS DATE) AS revenue_date, SUM(amount) AS total_revenue FROM orders WHERE order_status = 'SUCCESS' AND order_date >= '2026-11-01' AND order_date < '2026-11-09' GROUP BY CAST(order_date AS DATE);\nThe results are written to the affected partitions.\nThe pipeline must use a controlled replacement strategy so that the old incorrect aggregates do not remain alongside the corrected ones."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.5 Backfilling with Apache Airflow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Airflow supports executing workflows for historical data intervals.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a daily pipeline can be scheduled for a particular historical date range.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The important concepts are:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Logical execution date.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data interval.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Catchup.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backfill.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Task dependencies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A task processing November 4 should use November 4's logical data interval rather than blindly using the machine's current date.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Airflow documentation describes backfill and catchup as separate scheduling behaviors that must be understood when operating historical workflows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AWS Glue+1</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.6 Risks of Backfilling</span>
          </h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Duplicate Records</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Old records may be added without replacing previously processed data.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. High Resource Consumption</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large historical backfills can consume substantial compute resources.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Conflicts with Normal Processing</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A historical job and a current daily job may write to overlapping tables.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>4. Incorrect Business Logic</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical data may need to use the correct effective-date business rules.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.7 Backfill Best Practices</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Define the exact historical date range.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use isolated or controlled processing runs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Preserve the raw input.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Make the output idempotent.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validate affected partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Record backfill execution metadata.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid uncontrolled concurrent writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reconcile results after completion.</p>
        </div>
      </section>

      {/* SECTION 17: 17. Data Reconciliation */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">Audit &amp; Hash Checks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Data Reconciliation
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.1 What Is Data Reconciliation?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data reconciliation is the process of comparing source and destination datasets to confirm that the intended data has been transferred and transformed correctly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is especially important in:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Banking.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Financial reporting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Healthcare.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Insurance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Billing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inventory.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Enterprise data migration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a banking company transfers 100,000 transaction records from a source database to a data warehouse.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It needs to determine whether all valid transactions reached the destination.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.2 Common Reconciliation Checks</span>
          </h3>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Record Count Comparison</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT COUNT(*) FROM source_transactions;\nDestination:\nSELECT COUNT(*) FROM target_transactions;\nCompare the counts for the same batch or extraction window."}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. Financial Total Comparison</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT SUM(amount) FROM source_transactions;\nDestination:\nSELECT SUM(amount) FROM target_transactions;\nThis helps detect missing or duplicated financial values."}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Duplicate Comparison</span>
          </h4>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT transaction_id, COUNT(*) FROM target_transactions GROUP BY transaction_id HAVING COUNT(*) > 1;"}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>4. Null Validation</span>
          </h4>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT COUNT(*) FROM target_transactions WHERE transaction_id IS NULL;"}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>5. Record-Level Comparison</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compare selected source and destination fields using unique business keys.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>6. Hash-Based Comparison</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate checksums or hashes over normalized values to identify mismatches.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.3 Hash-Based Reconciliation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider these records:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source: T101, C101, 5000 T102, C102, 3000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Destination:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">T101, C101, 5000 T102, C102, 3500</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The record counts match, but the monetary values differ.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A record-level hash can help identify the affected record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hash(Source T101) = ABC123 Hash(Target T101) = ABC123 Hash(Source T102) = XYZ456 Hash(Target T102) = DEF789</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">T102 requires investigation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hashes should be calculated using a stable, documented serialization and normalized data representation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.4 Reconciliation Report</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A production pipeline can produce a report such as:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Check</th><th className="px-4 py-3">Source</th><th className="px-4 py-3">Destination</th><th className="px-4 py-3">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Record count</td><td className="px-4 py-2.5 text-stone-700">100,000</td><td className="px-4 py-2.5 text-stone-700">100,000</td><td className="px-4 py-2.5 text-stone-700">Pass</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Total amount</td><td className="px-4 py-2.5 text-stone-700">₹50,00,000</td><td className="px-4 py-2.5 text-stone-700">₹50,00,000</td><td className="px-4 py-2.5 text-stone-700">Pass</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Null IDs</td><td className="px-4 py-2.5 text-stone-700">0</td><td className="px-4 py-2.5 text-stone-700">0</td><td className="px-4 py-2.5 text-stone-700">Pass</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Duplicate IDs</td><td className="px-4 py-2.5 text-stone-700">0</td><td className="px-4 py-2.5 text-stone-700">0</td><td className="px-4 py-2.5 text-stone-700">Pass</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Invalid amounts</td><td className="px-4 py-2.5 text-stone-700">0</td><td className="px-4 py-2.5 text-stone-700">2</td><td className="px-4 py-2.5 text-stone-700">Fail</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.5 Reconciliation vs Data Quality</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reconciliation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Quality</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compares two systems or processing stages</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Measures the quality of a dataset</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checks missing transferred records</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checks completeness</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compares values across source and destination</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checks validity and consistency</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Detects transfer mismatches</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Detects incorrect source or transformed values</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both should be incorporated into an enterprise ETL architecture.</p>
        </div>
      </section>

      {/* SECTION 18: 18. Pipeline Dependency Management */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Airflow &amp; DAGs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Pipeline Dependency Management
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.1 What Is Pipeline Dependency Management?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data pipeline consists of multiple tasks that must execute in a defined order.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Some tasks cannot begin until another task has completed successfully.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pipeline dependency management defines these relationships.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a revenue report cannot be generated correctly until:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders have been ingested.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payments have been ingested.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customers have been prepared.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order records have been validated.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.2 Task Dependencies</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider this workflow:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"Extract Customers | v Clean Customers | +-------------------+ | Extract Orders | | | v | Clean Orders | | | +---------+---------+ | v Join Datasets | v Calculate Revenue | v Load Report"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The two extraction branches can run independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The join must wait for both branches to finish.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.3 Directed Acyclic Graph (DAG)</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Directed Acyclic Graph is a graph containing tasks connected through directed dependencies, without cycles.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is commonly used in workflow orchestration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Nodes represent tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Edges represent dependencies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Execution order follows dependency rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"Start | +-----+-----+ | | v v Customers Orders | | v v Clean Clean | | +-----+-----+ | v Join | v Revenue | v Finish"}
          </pre>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.4 Apache Airflow</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Airflow Logo PNG Vector (SVG) Free Download</span>
            <a href="https://images.openai.com/static-rsc-4/wmlr9q0CgACz0slILfHbyTZyciJR2tqRqq5fFVle7QJZiey2KXpbWelVUlZlL4llzTMDsghfUJwcHviSDnnayw5_sBbh_6TGNT26ja21hXxwPi0tv6OJaOnIt0fWoscxksMFW32iGnxaw3vrchxIiWJOv24PwikUkPAkvsn9CJE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Airflow</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scheduling, dependency management, retries and monitoring.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Official documentation</span>
            <a href="https://airflow.apache.org/docs/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Airflow is a workflow orchestration platform used to schedule and coordinate data pipelines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It allows engineers to define:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dependencies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schedules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry policies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Execution parameters.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failure handling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical execution intervals.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.5 Creating an Airflow DAG</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Illustrative Python example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from datetime import datetime, timedelta from airflow import DAG from airflow.operators.python import PythonOperator def extract_customers(): print(\"Extracting customers\") def extract_orders(): print(\"Extracting orders\") def clean_customers(): print(\"Cleaning customers\") def clean_orders(): print(\"Cleaning orders\") def build_revenue(): print(\"Building revenue table\") default_args = { \"owner\": \"data_engineering\", \"retries\": 3, \"retry_delay\": timedelta(minutes=2) } with DAG( dag_id=\"ecommerce_etl_pipeline\", default_args=default_args, start_date=datetime(2026, 11, 1), schedule=\"@daily\", catchup=False ) as dag: customers = PythonOperator( task_id=\"extract_customers\", python_callable=extract_customers ) orders = PythonOperator( task_id=\"extract_orders\", python_callable=extract_orders ) clean_c = PythonOperator( task_id=\"clean_customers\", python_callable=clean_customers ) clean_o = PythonOperator( task_id=\"clean_orders\", python_callable=clean_orders ) revenue = PythonOperator( task_id=\"build_revenue\", python_callable=build_revenue ) customers >> clean_c orders >> clean_o [clean_c, clean_o] >> revenue\nThis DAG defines two independent extraction branches that must both complete their cleaning tasks before the revenue task starts.\nIn production, the Python functions should call real ingestion and transformation services rather than simply print messages."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.6 Dependency Management Beyond Airflow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Other technologies include:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Technology</th><th className="px-4 py-3">Primary use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Apache Airflow</td><td className="px-4 py-2.5 text-stone-700">DAG-based orchestration</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Dagster</td><td className="px-4 py-2.5 text-stone-700">Data-aware orchestration</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Prefect</td><td className="px-4 py-2.5 text-stone-700">Workflow orchestration</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">AWS Step Functions</td><td className="px-4 py-2.5 text-stone-700">Managed cloud workflows</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Azure Data Factory</td><td className="px-4 py-2.5 text-stone-700">Cloud data integration</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">dbt</td><td className="px-4 py-2.5 text-stone-700">SQL model dependencies</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.7 Why Dependency Management Matters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Prevents premature execution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Enables parallel independent tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoids repeated unnecessary processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Improves pipeline recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Makes complex workflows easier to understand.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Allows teams to track execution status.</p>
        </div>
      </section>

      {/* SECTION 19: 19. Large-Scale Batch Processing Architecture */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Distributed Spark &amp; AQE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Large-Scale Batch Processing Architecture
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.1 What Is Large-Scale Batch Processing?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large-scale batch processing is the execution of substantial data-processing workloads across distributed compute infrastructure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a company storing:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">100 TB of transaction data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A single application server is not suitable for processing the complete dataset efficiently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead, distributed processing frameworks divide the workload across multiple machines.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.2 Distributed Processing Architecture</span>
          </h3>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"SOURCE DATA | v DISTRIBUTED STORAGE | v SPARK DRIVER | v CLUSTER MANAGER | +---------+---------+ | | | v v v Executor Executor Executor 1 2 3 | | | v v v Data Data Data Part. 1 Part. 2 Part. 3 | | | +---------+---------+ | v TRANSFORM RESULTS | v DESTINATION"}
          </pre>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.3 Understanding Apache Spark Components</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Driver</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Driver coordinates the Spark application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Responsibilities:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Builds execution plans.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schedules tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coordinates executors.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tracks application progress.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executors</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executors run tasks on the worker infrastructure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They perform:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data reading.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transformations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data writing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cluster Manager</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Allocates compute resources to Spark applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kubernetes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Standalone.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">YARN.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Managed cloud cluster services.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitions divide datasets into smaller units for distributed computation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each task generally works on a partition of data.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.4 Understanding the Spark Execution Process</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the job executes:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"result = ( orders .filter(orders.amount > 1000) .groupBy(\"city\") .sum(\"amount\") )\nThe logical steps are:\nRead the orders dataset.\nFilter records where amount exceeds ₹1,000.\nGroup records by city.\nCalculate the sum.\nWrite the output.\nSpark builds an execution plan to perform these operations.\nBecause the aggregation uses city, records may need to be redistributed across the cluster. This data movement is called a shuffle."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.5 Narrow and Wide Transformations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Narrow Transformations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A narrow transformation generally allows an output partition to be computed from a limited set of input partitions without a major shuffle.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders.filter(orders.amount &gt; 1000)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders.select(&quot;order_id&quot;, &quot;amount&quot;)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Wide Transformations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A wide transformation requires data from multiple partitions to be reorganized or redistributed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders.groupBy(&quot;city&quot;).sum(&quot;amount&quot;)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders.join(customers, &quot;customer_id&quot;)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Wide operations frequently involve shuffling.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.6 Why Are Shuffles Expensive?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffles can involve:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network data transfer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk I/O.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sorting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Memory allocation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data serialization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Task coordination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Poorly designed joins and aggregations can create large shuffles and slow down an entire batch job.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.7 Data Skew</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data skew occurs when some partitions contain much more data than others.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 1: 10 MB Partition 2: 12 MB Partition 3: 15 MB Partition 4: 5 GB</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The last partition becomes a bottleneck.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Other workers may finish quickly and wait for the large partition to finish.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common solutions include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Appropriate repartitioning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broadcast joins for small datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Skew-aware join strategies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Salting selected keys when justified.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filtering irrelevant data before joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Improving source partition design.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.8 Adaptive Query Execution</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark's Adaptive Query Execution can use runtime statistics to adjust execution plans.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coalescing small shuffle partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Optimizing certain skewed joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Converting eligible join strategies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AQE is enabled by default in Spark SQL from Spark 3.2 onward, according to its documentation, although configuration and behavior can vary by runtime and release.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark 4.3.0 Documentation+1</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.9 Large-Scale Batch Processing Best Practices</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read only required columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filter records as early as practical.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid collecting huge datasets onto the Driver.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use Parquet for analytical file workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Choose suitable partition sizes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid unnecessary shuffles.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use broadcast joins when appropriate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Handle data skew.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use incremental processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitor executor memory and failed tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use a suitable file compaction strategy.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validate results before publishing.</p>
        </div>
      </section>

      {/* SECTION 20: 20. Building End-to-End ETL Pipelines */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">End-to-End Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Building End-to-End ETL Pipelines
        </h2>
        <div className="space-y-3">

          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.1 What Is an End-to-End ETL Pipeline?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An end-to-end ETL pipeline is a complete workflow that extracts data from multiple sources, transforms it according to business requirements, validates the output, and loads it into a destination system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A production pipeline should also handle:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scheduling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incremental processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Logging.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Error handling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backfills.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data reconciliation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitoring.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Access control.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.2 Complete Architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a retail organization that needs to produce daily sales reports.</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"DATA SOURCES | +------------+------------+ | | | MySQL REST API CSV Files | | | +------------+------------+ | v EXTRACTION | v RAW / STAGING | v DATA VALIDATION | v TRANSFORMATION | +------------+------------+ | | | Cleaning Joins Aggregation | | | +------------+------------+ | v DATA LOADING | v DATA LAKEHOUSE | +--------+--------+ | | | v v v Bronze Silver Gold | v BI DASHBOARDS | v BUSINESS USERS"}
          </pre>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.3 Main Pipeline Stages</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 1 — Source Extraction</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Collect:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Product information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment records.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 2 — Raw Storage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Save the extracted data in an original or minimally transformed representation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 3 — Validation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Check:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Required columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data types.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Missing records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Invalid values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Duplicate business keys.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 4 — Transformation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Perform:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cleansing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Standardization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filtering.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Enrichment.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 5 — Loading</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Write the processed records into appropriate destination tables using append, upsert, or partition overwrite strategies.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 6 — Reconciliation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compare the intended source data with the processed output.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 7 — Publication</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publish the validated Gold datasets for reporting and analytics.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 8 — Monitoring</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Record execution status, throughput, failures, processing duration, and data freshness.</p>
        </div>
      </section>

      {/* SECTION 21: 21. Practical Major Project — Build an E-commerce ETL Platform */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Production Capstone</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Practical Major Project — Build an E-commerce ETL Platform
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hands-on project</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Project: Enterprise E-commerce ETL and Batch Processing System</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.1 Project Objective</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build a complete data engineering system that collects information from multiple sources, processes it using ETL/ELT techniques, and generates business-ready analytical datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system will simulate the data environment of a large online shopping company.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The company needs to understand:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total revenue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Daily and monthly sales.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer spending.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Product performance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Regional revenue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment success rates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order cancellation rates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer purchasing patterns.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.2 Required Technology Stack</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Component</th><th className="px-4 py-3">Technology</th><th className="px-4 py-3">Responsibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Programming</td><td className="px-4 py-2.5 text-stone-700">Python</td><td className="px-4 py-2.5 text-stone-700">Pipeline logic</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Database</td><td className="px-4 py-2.5 text-stone-700">PostgreSQL</td><td className="px-4 py-2.5 text-stone-700">Source database</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Data transformation</td><td className="px-4 py-2.5 text-stone-700">Apache Spark</td><td className="px-4 py-2.5 text-stone-700">Distributed processing</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Storage</td><td className="px-4 py-2.5 text-stone-700">Amazon S3 or local storage</td><td className="px-4 py-2.5 text-stone-700">Data lake</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">File format</td><td className="px-4 py-2.5 text-stone-700">Parquet</td><td className="px-4 py-2.5 text-stone-700">Analytical storage</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Table format</td><td className="px-4 py-2.5 text-stone-700">Delta Lake</td><td className="px-4 py-2.5 text-stone-700">Transactional tables</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Orchestration</td><td className="px-4 py-2.5 text-stone-700">Apache Airflow</td><td className="px-4 py-2.5 text-stone-700">Workflow management</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">SQL transformation</td><td className="px-4 py-2.5 text-stone-700">SQL / dbt</td><td className="px-4 py-2.5 text-stone-700">Analytical models</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Visualization</td><td className="px-4 py-2.5 text-stone-700">Power BI</td><td className="px-4 py-2.5 text-stone-700">Business reporting</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Version control</td><td className="px-4 py-2.5 text-stone-700">Git</td><td className="px-4 py-2.5 text-stone-700">Source code management</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.3 Project Architecture</span>
          </h3>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"SOURCE SYSTEMS | +-------------+-------------+ | | | v v v Customers Orders Products PostgreSQL PostgreSQL PostgreSQL | | | +-------------+-------------+ | v EXTRACTION JOBS | v RAW DATA LAYER | v APACHE SPARK ETL | +----------+----------+ | | v v SILVER QUARANTINE CLEAN DATA BAD DATA | v DATA ENRICHMENT | v GOLD LAYER | +-----+------+------+ | | | v v v Revenue Product Customer Analytics Analytics Analytics | | | +------------+------+ | v BI DASHBOARD AIRFLOW ORCHESTRATES THE COMPLETE WORKFLOW"}
          </pre>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.4 Step 1 — Design the Source Database</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Create a PostgreSQL database.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"CREATE DATABASE ecommerce;\nCreate the customer table:\nCREATE TABLE customers ( customer_id BIGINT PRIMARY KEY, customer_name VARCHAR(150), email VARCHAR(150), city VARCHAR(100), created_at TIMESTAMP, updated_at TIMESTAMP );\nCreate the products table:\nCREATE TABLE products ( product_id BIGINT PRIMARY KEY, product_name VARCHAR(150), category VARCHAR(100), price DECIMAL(12,2), stock_quantity INT, updated_at TIMESTAMP );\nCreate the orders table:\nCREATE TABLE orders ( order_id BIGINT PRIMARY KEY, customer_id BIGINT, product_id BIGINT, quantity INT, total_amount DECIMAL(12,2), order_status VARCHAR(30), order_date TIMESTAMP, updated_at TIMESTAMP );\nCreate the payments table:\nCREATE TABLE payments ( payment_id BIGINT PRIMARY KEY, order_id BIGINT, payment_method VARCHAR(50), payment_status VARCHAR(30), payment_amount DECIMAL(12,2), payment_date TIMESTAMP );"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.5 Step 2 — Insert Sample Data</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customers:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"INSERT INTO customers VALUES (101, 'Rahul Sharma', 'rahul@example.com', 'Pune', NOW(), NOW()), (102, 'Amit Verma', 'amit@example.com', 'Mumbai', NOW(), NOW()), (103, 'Priya Singh', 'priya@example.com', 'Delhi', NOW(), NOW()), (104, 'Neha Patel', 'neha@example.com', 'Bangalore', NOW(), NOW());\nProducts:\nINSERT INTO products VALUES (201, 'Laptop', 'Electronics', 55000, 50, NOW()), (202, 'Mobile', 'Electronics', 25000, 100, NOW()), (203, 'Headphones', 'Accessories', 2500, 200, NOW()), (204, 'Keyboard', 'Accessories', 1500, 150, NOW());\nOrders:\nINSERT INTO orders VALUES (1001, 101, 201, 1, 55000, 'SUCCESS', NOW(), NOW()), (1002, 102, 202, 2, 50000, 'SUCCESS', NOW(), NOW()), (1003, 103, 203, 2, 5000, 'PENDING', NOW(), NOW()), (1004, 101, 204, 1, 1500, 'SUCCESS', NOW(), NOW()), (1005, 104, 202, 1, 25000, 'CANCELLED', NOW(), NOW());\nPayments:\nINSERT INTO payments VALUES (5001, 1001, 'UPI', 'SUCCESS', 55000, NOW()), (5002, 1002, 'CARD', 'SUCCESS', 50000, NOW()), (5003, 1003, 'UPI', 'PENDING', 5000, NOW()), (5004, 1004, 'CARD', 'SUCCESS', 1500, NOW()), (5005, 1005, 'UPI', 'FAILED', 25000, NOW());"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.6 Step 3 — Extract Data Using Python</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Install the required packages:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"pip install pandas sqlalchemy psycopg2-binary pyarrow\nCreate extract.py:\nimport os import pandas as pd import sqlalchemy as sa from datetime import datetime, timezone DATABASE_URL = os.environ[\"DATABASE_URL\"] engine = sa.create_engine( DATABASE_URL, pool_pre_ping=True ) tables = [ \"customers\", \"products\", \"orders\", \"payments\" ] run_timestamp = datetime.now(timezone.utc) for table in tables: query = sa.text(f\"SELECT * FROM {table}\") with engine.connect() as connection: df = pd.read_sql(query, connection) df[\"ingestion_timestamp\"] = run_timestamp output_path = f\"data/raw/{table}/\" os.makedirs( output_path, exist_ok=True ) file_path = ( f\"{output_path}\" f\"{table}_{run_timestamp:%Y%m%d_%H%M%S}.parquet\" ) df.to_parquet( file_path, index=False ) print( f\"Extracted {len(df)} records \" f\"from {table}\" ) engine.dispose()\nThis provides an initial full-load implementation.\nFor incremental extraction, extend it with persistent watermarks, extraction windows, and a reliable destination commit strategy."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.7 Step 4 — Create the Bronze Layer</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your directory structure should become:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"ecommerce-etl/ │ ├── data/ │ └── raw/ │ ├── customers/ │ ├── products/ │ ├── orders/ │ └── payments/ │ ├── bronze/ ├── silver/ ├── gold/ │ └── scripts/"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Bronze should preserve extracted information and ingestion metadata.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Do not perform aggressive business transformations here.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.8 Step 5 — Transform Data Using PySpark</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Create transform.py.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql import SparkSession from pyspark.sql import functions as F spark = ( SparkSession.builder .appName(\"EcommerceETL\") .getOrCreate() ) customers = spark.read.parquet( \"data/raw/customers/*.parquet\" ) orders = spark.read.parquet( \"data/raw/orders/*.parquet\" ) products = spark.read.parquet( \"data/raw/products/*.parquet\" ) payments = spark.read.parquet( \"data/raw/payments/*.parquet\" ) # Clean customer data clean_customers = ( customers .withColumn( \"customer_name\", F.trim(F.col(\"customer_name\")) ) .withColumn( \"email\", F.lower(F.trim(F.col(\"email\"))) ) .filter(F.col(\"customer_id\").isNotNull()) .dropDuplicates([\"customer_id\"]) ) # Clean product data clean_products = ( products .withColumn( \"product_name\", F.trim(F.col(\"product_name\")) ) .filter( F.col(\"product_id\").isNotNull() & (F.col(\"price\") >= 0) ) ) # Clean orders clean_orders = ( orders .filter( F.col(\"order_id\").isNotNull() & F.col(\"customer_id\").isNotNull() & (F.col(\"quantity\") > 0) & (F.col(\"total_amount\") >= 0) ) .dropDuplicates([\"order_id\"]) ) # Write Silver datasets ( clean_customers.write .mode(\"overwrite\") .parquet(\"data/silver/customers/\") ) ( clean_products.write .mode(\"overwrite\") .parquet(\"data/silver/products/\") ) ( clean_orders.write .mode(\"overwrite\") .parquet(\"data/silver/orders/\") ) spark.stop()\nThis demonstrates basic transformations.\nFor a production incremental pipeline, use deterministic deduplication based on source versions, process new and changed records, preserve delete events, and replace or upsert only the affected destination data."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.9 Step 6 — Enrich Orders</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build the enriched transaction table.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql import functions as F customers = spark.read.parquet( \"data/silver/customers/\" ) orders = spark.read.parquet( \"data/silver/orders/\" ) products = spark.read.parquet( \"data/silver/products/\" ) payments = spark.read.parquet( \"data/raw/payments/*.parquet\" ) enriched_orders = ( orders .join( customers, \"customer_id\", \"inner\" ) .join( products, \"product_id\", \"inner\" ) .join( payments, \"order_id\", \"left\" ) .select( \"order_id\", \"customer_id\", \"customer_name\", \"city\", \"product_id\", \"product_name\", \"category\", \"quantity\", \"total_amount\", \"order_status\", \"payment_status\", \"order_date\" ) )\nHere, the order is enriched with customer, product, and payment information.\nIn a production system, payment data should first be deduplicated and reduced to the correct order-level grain. Otherwise, multiple payment attempts can multiply order rows."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.10 Step 7 — Generate Gold Analytical Tables</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Daily Revenue</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"daily_revenue = ( enriched_orders .filter(F.col(\"order_status\") == \"SUCCESS\") .groupBy( F.to_date(\"order_date\").alias(\"sales_date\") ) .agg( F.sum(\"total_amount\").alias(\"total_revenue\"), F.countDistinct(\"order_id\").alias(\"total_orders\") ) )\nProduct Performance\nproduct_performance = ( enriched_orders .filter(F.col(\"order_status\") == \"SUCCESS\") .groupBy( \"product_id\", \"product_name\", \"category\" ) .agg( F.sum(\"quantity\").alias(\"units_sold\"), F.sum(\"total_amount\").alias(\"total_revenue\") ) )\nCustomer Spending\ncustomer_spending = ( enriched_orders .filter(F.col(\"order_status\") == \"SUCCESS\") .groupBy( \"customer_id\", \"customer_name\", \"city\" ) .agg( F.sum(\"total_amount\").alias(\"total_spending\"), F.countDistinct(\"order_id\").alias(\"order_count\") ) )\nWrite the Gold datasets:\ndaily_revenue.write \\ .mode(\"overwrite\") \\ .parquet(\"data/gold/daily_revenue/\") product_performance.write \\ .mode(\"overwrite\") \\ .parquet(\"data/gold/product_performance/\") customer_spending.write \\ .mode(\"overwrite\") \\ .parquet(\"data/gold/customer_spending/\")"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.11 Step 8 — Implement Incremental Processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Modify the extraction process to read new or modified rows using the persisted source watermark.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT * FROM orders WHERE updated_at >= :last_watermark ORDER BY updated_at, order_id;\nThen:\nSave the extracted records in a unique staging batch.\nValidate the source records.\nDeduplicate according to order ID and source update version.\nMERGE the records into Silver.\nIdentify affected sales dates.\nRecalculate the affected Gold partitions.\nValidate the destination.\nCommit the new watermark.\nDo not overwrite the entire Gold history for every incremental execution."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.12 Step 9 — Implement Idempotency and Recovery</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Add:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch ID tracking.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unique order IDs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deterministic transformation logic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotent destination writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failed-batch records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retry logic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Quarantine records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpoints where appropriate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Simulate a failure after the Silver write but before Gold publication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Restart the job and confirm that the final tables do not contain duplicated orders or incorrect aggregates.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.13 Step 10 — Orchestrate Using Airflow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Create a DAG with these tasks:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"Start | +---- Extract Customers | +---- Extract Products | +---- Extract Orders | +---- Extract Payments | v Validate Inputs | v Clean Data | v Enrich Orders | v Build Gold Tables | v Reconciliation | v Publish"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The extraction tasks can execute in parallel.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The transformation and publication tasks should execute only after their required inputs are successfully prepared.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.14 Step 11 — Perform Data Reconciliation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compare source and destination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> Pipeline Code / Script</span>
              <span className="text-stone-500">Execution Block</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT COUNT(*) FROM orders WHERE order_status = 'SUCCESS';\nCompare with:\nSELECT COUNT(DISTINCT order_id) FROM gold_orders WHERE order_status = 'SUCCESS';\nAlso compare:\nTotal sales.\nNumber of successful orders.\nDuplicate order IDs.\nMissing customer keys.\nMissing product keys.\nInvalid amounts."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.15 Final Project Deliverables</span>
          </h3>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"ecommerce-etl-platform/ │ ├── config/ │ └── settings.py │ ├── extraction/ │ └── extract.py │ ├── transformation/ │ ├── clean.py │ ├── enrich.py │ └── aggregate.py │ ├── loading/ │ └── load.py │ ├── orchestration/ │ └── ecommerce_dag.py │ ├── validation/ │ └── reconcile.py │ ├── monitoring/ │ └── pipeline_metrics.py │ ├── data/ │ ├── raw/ │ ├── silver/ │ └── gold/ │ └── README.md"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Project extension: Replace full extraction with CDC, use Delta Lake MERGE for incremental updates, and introduce a historical backfill workflow.</p>
        </div>
      </section>

      {/* SECTION 22: 22. Important ETL Tools Used in Industry */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Ecosystem Tooling</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Important ETL Tools Used in Industry
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are the technologies worth understanding as a Data Engineer.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Spark Architecture Explained</span>
            <a href="https://images.openai.com/static-rsc-4/Ld1ujnd0gwlrmHmfMddqGJT3iUmZm3HK6IK33JsUkpqhTv8T9KgDuQqOLTuuuVdIaHryf-i4yTgMcxgNT1eqiNzXq0lPnVwGV3Qy7zy0U9drLCcgu0ztvn2A0S2DVV_pyVlWV0SCrbHklN7mFoec3OGrNtDuNTCldS8RGkh3y3M?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Spark</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large-scale batch processing, joins, transformations and aggregations.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Documentation</span>
            <a href="https://spark.apache.org/docs/latest/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Airflow 3.0: Key New Features</span>
            <a href="https://images.openai.com/static-rsc-4/76B3hKaDw4mA2WqyTIOZ1_uOzUCfHy6LTew0JtNOcPu-36_tJofz8UuX9H1GJHDuQqUu4f72ADvqTBdgCLMrrkH9ENvHxt61CXbv2jFHCqHj7iPplEOWJ84AlYJTgK5cHbiB51IpH5mpUHKYO6fm1XNRXGJfumZIejJ5RLCj8KA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Airflow</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scheduling, task dependencies, retries and pipeline monitoring.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Documentation</span>
            <a href="https://airflow.apache.org/docs/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Dbt Logo PNG Vectors Free Download</span>
            <a href="https://images.openai.com/static-rsc-4/r18MD4DRXy_TwSjNYtwc-sZtIOfs8_k4_iFVnScqJtRQOxWHQwVkdkpxoejNF9OSmmFAxtZ2D-RZ7nmIsApI5C_KBFbZUc7SqaPxa0Fi-rSUbGIFFI1chgaVqXB4FdnBYl0bT0mggH4ntAFXtCDnhIJP5WZ8zLEVmSQT08fWqQo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">dbt</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SQL transformations, incremental models, tests and documentation.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Documentation</span>
            <a href="https://docs.getdbt.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Bull - High performance computing and IT solutions</span>
            <a href="https://images.openai.com/static-rsc-4/PqW3AcMM9QZa9OMoKDyN5YfXiqikOVe65IqZB6BA_QmFjJ6xmD2T-yQLV2iOmzGLdUKdB-BM6-fxopQOfbd2tk1fryKOY87Xak-D89DnpJg0JHoGKwDgKgw7zH0DdPEYi1NYI77g_G9NvIfYoU5MnYrrZpxtaiOmW65gTWTAC04?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Databricks</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lakehouse ETL, Spark processing and data transformation.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Documentation</span>
            <a href="https://docs.databricks.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"[▷ AWS Glue Training | Online Course & Certification [2026]](https://images.openai.com/static-rsc-4/DOa69Cl2Tj9NqjH6UDoa-xA_mhg5JZEEEMn1rkCBVP2AXyaU-sm4uYW38Ynjfnc4nJcDb53sv1MyZTteF0VoGYBeIWMkddrtZVQRfqp8aD7soURjkAcA63LECENImJuw-iOXrFQJulTBAHiqdl2DiYdyWOnK3h4hQ10qIX5LoFY?purpose=inline)"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AWS Glue</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Managed ETL, data catalogs and incremental processing.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Documentation</span>
            <a href="https://docs.aws.amazon.com/glue/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Snowflake Logo &amp; Brand Kit - SVG, PNG, Vector - Logo.dev</span>
            <a href="https://images.openai.com/static-rsc-4/NBZcvIHe06-rzfRPZ3-Hrfn_yVqQSSAc9-YR4OZJ3uGkAkYmshp-mS_txJp5qAigKwKXCsWa1yqUP2OPM3ZnDw1xYClQ5xnln6I_wdYii85EJPsZjjuCTLha2_5RUtduwEQHThLP78TUzd_M-t2bmkrNsp-tJm4AW1pSC3iGIys?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Snowflake</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud SQL transformations, ELT and analytical workloads.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Documentation</span>
            <a href="https://docs.snowflake.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Google BigQuery Logo PNG Vector (SVG) Free Download</span>
            <a href="https://images.openai.com/static-rsc-4/J_ke5IF18E_otFdl4ob_wx-9zqbgbr0uIoB6NoC8ze-o4VWfbTnGmPgaxCUgsV7iPmXD1mwX_Cem6IJpGXnv8o0yI3VsZtKBhVlBy-YvQD8qdF-67umLy3lHOUKxQ6JglFloYz4P4srAsaPcm2kOAyePd9a5lyiE73yZyJkzLOM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Google BigQuery</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serverless analytical queries and ELT transformations.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Documentation</span>
            <a href="https://cloud.google.com/bigquery/docs?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 23: 23. Common Industry Mistakes */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Production Traps</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Common Industry Mistakes
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Extracting entire tables repeatedly when incremental extraction is more appropriate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mixing transformation logic with extraction code without clear separation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Loading duplicate records through append-only pipelines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Not defining primary keys and business-level unique keys.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Performing joins without understanding table grain.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ignoring null values and invalid data types.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rebuilding all historical data when only a few partitions need correction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ignoring late-arriving records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advancing watermarks before successful destination commits.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Using partition overwrite without controlling the affected partition scope.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Running too many Spark shuffles.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ignoring data skew and small-file problems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publishing reports before reconciliation completes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Running backfills without controlling concurrency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Not monitoring failed jobs, retries, and data freshness.</p>
        </div>
      </section>

      {/* SECTION 24: 24. Module Assessment — Test Your Understanding */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500">Knowledge Test</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Module Assessment — Test Your Understanding
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 10 Knowledge Test</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">15 questions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">0 of 15 answered</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">1. What does ETL stand for?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Extract, Transform, Load</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Evaluate, Transfer, Link</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Extract, Test, Launch</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Execute, Transform, Log</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">2. What is the main difference between ETL and ELT?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ETL uses only SQL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ELT does not extract data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The order and location of transformation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ELT cannot use cloud storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">3. Which loading method updates an existing record or inserts it when missing?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Full refresh</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Append</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Upsert / MERGE</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File discovery</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">4. What is data cleansing?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increasing file sizes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identifying and handling invalid, incomplete or duplicated data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Creating Kafka topics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Adding more database servers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">5. What does HAVING do in SQL?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filters individual rows before grouping</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filters groups after aggregation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Creates database indexes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deletes duplicate files</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">6. What is the purpose of a LEFT JOIN?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Return only matching rows</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Return all rows from the left table and matching right-side rows</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delete unmatched rows from both tables</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Create every possible combination</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">7. What is incremental batch processing?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing the entire database every time</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing new or changed data in scheduled batches</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing only images</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deleting historical records</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">8. What is partition-based processing?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dividing a dataset into logical subsets for processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combining different databases into one table</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Removing every index</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disabling distributed processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">9. What is late-arriving data?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data that is deleted before loading</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data received after its relevant event or processing period</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data with too many columns</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data that cannot be encrypted</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10. What makes a pipeline idempotent?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Every retry adds new rows</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Repeated processing produces the same intended final state</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The pipeline never retries</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The pipeline processes only one record</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">11. What is backfilling?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing historical data again</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deleting current partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Changing a source database password</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stopping an Airflow scheduler</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">12. What is data reconciliation?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Comparing source and destination data for correctness</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Creating new API endpoints</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compressing Parquet files</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Changing the database schema</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">13. Why use an Airflow DAG?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For data compression</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For defining task dependencies and workflow execution</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For storing binary database logs</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For replacing SQL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">14. What is a Spark shuffle?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A backup of the driver</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Redistribution of data between partitions during certain operations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A method of deleting records</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An API retry mechanism</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">15. What is the purpose of a staging area?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">To store production passwords</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">To temporarily hold extracted data before transformation or loading</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">To replace the source database</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">To execute only machine learning models</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Submit assessment</p>
        </div>
      </section>

      {/* SECTION 25: 25. Recommended Learning Resources */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500">Documentation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          25. Recommended Learning Resources
        </h2>
        <div className="space-y-3">

          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Resource</th><th className="px-4 py-3">What to study</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">[Apache Spark Documentation](https://spark.apache.org/docs/latest/?utm_source=chatgpt.com)</td><td className="px-4 py-2.5 text-stone-700">DataFrames, SQL, joins and distributed batch execution</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">[dbt Incremental Models](https://docs.getdbt.com/docs/build/incremental-models?utm_source=chatgpt.com)</td><td className="px-4 py-2.5 text-stone-700">Incremental transformation and unique keys</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">[Airflow DAG Documentation](https://airflow.apache.org/docs/apache-airflow/stable/concepts/dags.html?utm_source=chatgpt.com)</td><td className="px-4 py-2.5 text-stone-700">Task dependencies and workflow orchestration</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">[Airflow Backfill](https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/backfill.html?utm_source=chatgpt.com)</td><td className="px-4 py-2.5 text-stone-700">Historical workflow execution and recovery</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">[Delta Lake Documentation](https://docs.delta.io/?utm_source=chatgpt.com)</td><td className="px-4 py-2.5 text-stone-700">MERGE, transactions and data loading</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">[AWS Glue Job Bookmarks](https://docs.aws.amazon.com/glue/latest/dg/programming-etl-connect-bookmarks.html?utm_source=chatgpt.com)</td><td className="px-4 py-2.5 text-stone-700">Incremental ETL and processing state</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">[Snowflake Documentation](https://docs.snowflake.com/?utm_source=chatgpt.com)</td><td className="px-4 py-2.5 text-stone-700">Cloud warehouse and ELT architecture</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">[BigQuery Documentation](https://cloud.google.com/bigquery/docs?utm_source=chatgpt.com)</td><td className="px-4 py-2.5 text-stone-700">Analytical SQL processing</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 26: 26. Final Understanding — Module 10 */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500">Course Summary</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          26. Final Understanding — Module 10
        </h2>
        <div className="space-y-3">

          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Modern Data Engineering on Azure — End-to-End Data Pipeline (Part 1) | by Saurabh Banerjee | Jan, 2026 | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/V5sc1C2JAE9AfJOBc5UKqd6mG-n-uD20kZef4Tce_-UVtUYZxwU_8QJlqq6XsQkjSCXK5Kwe4xwA4DpaIF3Zou7RTlIxgICesTI7EW4I6ZZZXj8ylH5eGebuUL55Sw8H1La_JJ8076xoVHqCRAK2Do0fhHfU0jHzoh8vYjAUZj0?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40saurabh.bandhopadhyay/modern-data-engineering-on-azure-end-to-end-data-pipeline-part-1-1dcdfa08991e?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The complete data pipeline can be summarized as:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"DATA SOURCES | v EXTRACTION | v RAW / STAGING | v DATA CLEANSING | v TRANSFORMATION LAYER | +---------+---------+ | | | v v v FILTER JOIN AGGREGATE | | | +---------+---------+ | v DATA LOADING | +---------+---------+ | | | v v v APPEND UPSERT PARTITION OVERWRITE | v DATA LAKEHOUSE | v GOLD TABLES | v BI / ANALYTICS"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Meanwhile, the operational layer ensures:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incremental processing avoids unnecessary work.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning improves data organization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Late-arriving records receive corrections.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deduplication prevents repeated logical records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotency makes retries safe.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backfilling corrects historical outputs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reconciliation verifies data correctness.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Airflow manages dependencies and execution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark distributes large processing workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The central takeaway: ETL and ELT are not simply three-step data movement techniques. They are complete engineering approaches for turning raw information into trustworthy, scalable, business-ready datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After completing Module 10, the next logical step is Module 11 — Apache Spark and Distributed Data Processing, where the focus can move deeper into Spark internals, execution plans, memory management, joins, shuffles, partitioning, optimization, and production-scale processing.</p>
        </div>
      </section>

    </div>
  );
}
