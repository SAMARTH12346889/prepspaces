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
  CheckCircle,
  Radio,
  Share2,
  Lock,
  RotateCcw,
  Sparkles,
  Flame,
  ArrowDownRight
} from "lucide-react";

export default function DataEngineeringStreamProcessingSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 17: Stream Processing and Real-Time Analytics Overview & Roadmap */}
      <section id="overview" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Roadmap
          </span>
          <span className="text-xs font-mono text-stone-500">Course Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 17: Stream Processing and Real-Time Analytics Overview &amp; Roadmap
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 17 — Stream Processing and Real-Time Analytics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DATA ENGINEERING • ADVANCED LEVEL • DISTRIBUTED STREAM PROCESSING</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module Overview</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing is one of the most important areas of modern data engineering. It focuses on continuously processing data as it is generated, rather than waiting for data to accumulate before processing it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Modern applications produce enormous amounts of data continuously:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">E-commerce applications generate order and payment events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Banking applications generate financial transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Social media platforms generate likes, comments, and user activity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">IoT devices continuously generate sensor readings.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transportation applications generate GPS locations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud applications generate logs and system metrics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Financial markets generate continuously changing prices.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Organizations often need to analyze this information immediately.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, consider an online banking system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A customer performs a transaction of ₹50,000. The bank wants to detect whether the transaction is suspicious before additional transactions occur.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A traditional batch pipeline that analyzes transactions every six hours would not be suitable for this requirement.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A stream processing system can receive the transaction, evaluate its attributes, compare it with recent account activity, and generate an alert within seconds or less, depending on the architecture.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is the foundation of real-time data engineering.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What you will learn</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">By completing this module, you should be able to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand how stream processing works.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Differentiate batch processing and stream processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand bounded and unbounded datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Design real-time data processing architectures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand event time and processing time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement different types of windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand watermarks and event-time progression.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Handle out-of-order and late-arriving events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build stateful streaming applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand streaming aggregations and joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement checkpointing and failure recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand exactly-once processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand Apache Flink architecture.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build applications using Spark Structured Streaming.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Design real-time analytics dashboards.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Develop an end-to-end real-time streaming application.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 1 — Foundations of Stream Processing
          </div>
        </div>
      </section>

      {/* SECTION 1: 1. Introduction to Stream Processing */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Foundations of Stream Processing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction to Stream Processing
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing is the continuous processing and analysis of data as events arrive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike traditional batch processing, which operates on collected datasets, stream processing handles an ongoing flow of records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A stream can contain:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sensor readings.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Website activity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Log messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Financial market updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database changes.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.1 Understanding a data stream</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an e-commerce application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customers continuously place orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application generates events:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "customer_id": 101, "amount": 1500, "event_time": "2026-11-09T10:00:01Z" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Another order arrives:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5002, "customer_id": 102, "amount": 2500, "event_time": "2026-11-09T10:00:02Z" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Another event arrives:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5003, "customer_id": 103, "amount": 3500, "event_time": "2026-11-09T10:00:03Z" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These records form an ongoing data stream.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Data Sources`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applications • Sensors • Databases • APIs</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Continuous Event Stream</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event 1 → Event 2 → Event 3 → Event 4 → ...</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Stream Processing Engine`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filter • Transform • Enrich • Aggregate • Join</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-Time Results</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Alerts • Analytics • Dashboards • Applications</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The stream processing engine continuously evaluates incoming records and updates results.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.2 What does a stream processor actually do?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a company wants to monitor the number of orders received every minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The input is:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Order</th>                  <th className="px-4 py-3">Amount</th>                  <th className="px-4 py-3">Event time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">5001</td>                  <td className="px-4 py-2.5 text-stone-700">₹1,500</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:05</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">5002</td>                  <td className="px-4 py-2.5 text-stone-700">₹2,000</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:15</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">5003</td>                  <td className="px-4 py-2.5 text-stone-700">₹3,000</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:35</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">5004</td>                  <td className="px-4 py-2.5 text-stone-700">₹1,000</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:50</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The streaming application calculates:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders received: 4.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total revenue: ₹7,500.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Average order value: ₹1,875.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can continuously publish these results to a dashboard.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The processing application does not need to wait until the end of the day.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.3 Common stream processing operations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filtering</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Select records satisfying a condition.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Only process completed payments.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM payments WHERE status = 'completed';`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transformation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Modify data into a required structure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Convert currencies or standardize timestamps.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate counts, sums, averages, minimums, and maximums.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Total revenue per minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Enrichment</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Add information from another dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Add customer details to transaction events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Joining</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combine multiple streams.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Match order events with payment events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pattern detection</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identify sequences of events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Five failed payment attempts within two minutes.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.4 Why stream processing matters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing is useful when data loses value if analysis is delayed.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Industry</th>                  <th className="px-4 py-3">Streaming application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Banking</td>                  <td className="px-4 py-2.5 text-stone-700">Fraud detection</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">E-commerce</td>                  <td className="px-4 py-2.5 text-stone-700">Live order monitoring</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Healthcare</td>                  <td className="px-4 py-2.5 text-stone-700">Patient monitoring</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Transportation</td>                  <td className="px-4 py-2.5 text-stone-700">Vehicle tracking</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Telecom</td>                  <td className="px-4 py-2.5 text-stone-700">Network anomaly detection</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Manufacturing</td>                  <td className="px-4 py-2.5 text-stone-700">Equipment monitoring</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Finance</td>                  <td className="px-4 py-2.5 text-stone-700">Market data analysis</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Cybersecurity</td>                  <td className="px-4 py-2.5 text-stone-700">Real-time threat detection</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.5 Stream processing versus ordinary message consumption</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Kafka consumer can read individual messages and execute application logic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, stream processing involves more than reading messages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A streaming engine provides abstractions for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-time processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stateful computations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Windowing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Watermarks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed aggregation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fault recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpointing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a normal Kafka consumer might print every payment event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A stream processor can calculate total payment volume for each merchant over the previous five minutes while handling late-arriving transactions and recovering state after a failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That is a much more advanced operation.</p>
        </div>
      </section>

      {/* SECTION 2: 2. Batch Processing vs Stream Processing */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Foundations of Stream Processing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. Batch Processing vs Stream Processing
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch processing and stream processing are two important data processing approaches.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both are widely used in modern data engineering, and many production architectures combine them.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.1 What is batch processing?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch processing collects a group of records and processes them together at scheduled intervals.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An e-commerce company collects transactions throughout the day.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At midnight, it processes all transactions and calculates daily revenue.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Transactions Throughout the Day | v Data Collection | v Daily Dataset | v Batch Processing | v Daily Revenue`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system waits until the scheduled processing time or until a batch is ready.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.2 Example of batch processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a company receives 100,000 orders every day.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A batch pipeline runs at 1:00 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reads all orders from the previous day.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Removes duplicates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validates records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculates total revenue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Loads results into the warehouse.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Updates the next day's dashboard data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example SQL:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT DATE(order_date) AS sales_date, COUNT(*) AS total_orders, SUM(amount) AS total_revenue FROM orders WHERE order_date >= DATE '2026-11-08' AND order_date < DATE '2026-11-09' GROUP BY DATE(order_date);`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a batch-oriented analytical query.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.3 What is stream processing?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing continuously processes incoming data without waiting for a scheduled batch to complete.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Order Event 1 ──┐ Order Event 2 ──┼──> Stream Processor ──> Updated Results Order Event 3 ──┤ Order Event 4 ──┘`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an order dashboard updates continuously as new events arrive.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.4 Batch versus streaming comparison</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>                  <th className="px-4 py-3">Batch processing</th>                  <th className="px-4 py-3">Stream processing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Data</td>                  <td className="px-4 py-2.5 text-stone-700">Finite collected batches</td>                  <td className="px-4 py-2.5 text-stone-700">Continuous incoming records</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Processing</td>                  <td className="px-4 py-2.5 text-stone-700">Scheduled or triggered</td>                  <td className="px-4 py-2.5 text-stone-700">Continuous or incremental</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Latency</td>                  <td className="px-4 py-2.5 text-stone-700">Usually minutes or hours</td>                  <td className="px-4 py-2.5 text-stone-700">Often milliseconds to seconds</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Data size per execution</td>                  <td className="px-4 py-2.5 text-stone-700">Large batch</td>                  <td className="px-4 py-2.5 text-stone-700">Individual records or small batches</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Complexity</td>                  <td className="px-4 py-2.5 text-stone-700">Usually easier to manage</td>                  <td className="px-4 py-2.5 text-stone-700">Requires time and state management</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Historical analysis</td>                  <td className="px-4 py-2.5 text-stone-700">Very suitable</td>                  <td className="px-4 py-2.5 text-stone-700">Possible through replay or bounded processing</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Late data</td>                  <td className="px-4 py-2.5 text-stone-700">Can often be incorporated in a later run</td>                  <td className="px-4 py-2.5 text-stone-700">Needs explicit event-time handling</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Examples</td>                  <td className="px-4 py-2.5 text-stone-700">Daily sales reports</td>                  <td className="px-4 py-2.5 text-stone-700">Live fraud detection</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.5 When should batch processing be used?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch processing is suitable for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Daily financial reporting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical analysis.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large-scale data transformations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Periodic warehouse loading.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Machine learning training datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monthly business reports.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data migrations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.6 When should stream processing be used?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing is suitable for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time payment monitoring.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fraud detection.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stock price monitoring.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Live inventory updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sensor analytics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time personalization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Live operational dashboards.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven applications.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.7 Lambda architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lambda architecture is a design pattern that combines batch and streaming processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It contains three major components.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processes historical data and produces comprehensive results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Speed layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processes incoming events with low latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serving layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combines or exposes results for querying.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Data Sources`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactions • Applications • Events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch Layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark / SQL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Speed Layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Low-latency processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink / Kafka Streams</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serving Layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combines historical and real-time results</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytics and Dashboards</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A company needs to display yearly sales.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The batch layer calculates historical sales.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The speed layer calculates incoming transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The serving layer combines historical and current results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One disadvantage is that the same business logic can be implemented in two different processing systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This creates code duplication and increases maintenance complexity.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.8 Kappa architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kappa architecture simplifies the design by using a streaming processing system as the main processing path.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical data can be replayed through the same stream processing application.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Data Sources | v Kafka Log | v Stream Processor | v Serving Layer | v Analytics`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If processing logic changes, the system can potentially replay retained events using the updated application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The approach depends on sufficient event retention, available processing capacity, and safe handling of replayed output.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.9 Lambda versus Kappa</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Lambda</th>                  <th className="px-4 py-3">Kappa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Separate batch and speed layers</td>                  <td className="px-4 py-2.5 text-stone-700">Streaming-first processing</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Two processing implementations may be required</td>                  <td className="px-4 py-2.5 text-stone-700">One main processing path</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Historical batch computations</td>                  <td className="px-4 py-2.5 text-stone-700">Historical replay through streams</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">More architectural components</td>                  <td className="px-4 py-2.5 text-stone-700">Simpler processing architecture in suitable cases</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Useful when batch and real-time requirements differ significantly</td>                  <td className="px-4 py-2.5 text-stone-700">Useful when stream processing can handle both workloads</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Neither architecture is universally best. Modern unified engines such as Spark Structured Streaming and Flink can also process bounded and unbounded data using related programming abstractions.</td>                  <td className="px-4 py-2.5 text-stone-700"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3: 3. Bounded and Unbounded Datasets */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Foundations of Stream Processing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. Bounded and Unbounded Datasets
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understanding bounded and unbounded datasets is essential because stream processing systems must deal with data that may never naturally finish.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.1 What is a bounded dataset?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A bounded dataset has a finite number of records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The complete dataset is available or has a known end.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A CSV file containing 100,000 orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A monthly sales table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A database export.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A completed transaction file.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A historical customer dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders.csv Record 1 Record 2 Record 3 ... Record 100000 END OF DATASET</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The processing engine can eventually determine that every record has been processed.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.2 What is an unbounded dataset?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An unbounded dataset is a continuously growing collection of records without a predefined end.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Live payment events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Website activity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stock prices.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">IoT sensor readings.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application logs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka topics receiving continuous events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment 1 Payment 2 Payment 3 Payment 4 Payment 5 ... More events continue arriving</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system cannot wait for the dataset to finish because it may never finish.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.3 Bounded versus unbounded</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Bounded dataset</th>                  <th className="px-4 py-3">Unbounded dataset</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Finite records</td>                  <td className="px-4 py-2.5 text-stone-700">Continuously growing records</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Has a known or discoverable end</td>                  <td className="px-4 py-2.5 text-stone-700">No predefined end</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Suitable for ordinary batch calculations</td>                  <td className="px-4 py-2.5 text-stone-700">Requires incremental computation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Can calculate over the complete dataset</td>                  <td className="px-4 py-2.5 text-stone-700">Needs windows or continuously maintained state for aggregates</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example: Historical orders file</td>                  <td className="px-4 py-2.5 text-stone-700">Example: Live order event stream</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.4 Why are unbounded datasets difficult?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a company wants to calculate total revenue from an unbounded stream.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a bounded dataset, the operation is simple:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT SUM(amount) FROM orders;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The query can finish after processing every record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For an unbounded stream, new events keep arriving.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The total can keep changing forever.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Therefore, the system needs a defined analytical question.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue per minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue per hour.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue per customer during the last 30 minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total payments during the current business day.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Average temperature over the last 10 minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These operations can be managed using windows and stateful processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.5 Streaming as continuous computation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A useful way to understand streaming is as a continuously updating query over an evolving dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT product_id, SUM(amount) FROM incoming_orders GROUP BY product_id;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a streaming engine, the logical result evolves as new records arrive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The engine must maintain information about previous events, update results incrementally, and manage the state required for the computation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink describes streaming as processing unbounded data continuously and using state and event-time mechanisms for such computations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink+1</p>
        </div>
      </section>

      {/* SECTION 4: 4. Real-Time Processing Architecture */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Foundations of Stream Processing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. Real-Time Processing Architecture
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A real-time processing architecture is designed to ingest events, process them with low latency, and deliver useful results to downstream applications.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.1 Basic architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an e-commerce platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customers continuously place orders, and management wants to see sales performance in near-real-time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The architecture may contain:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event sources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event ingestion layer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message broker.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing engine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytics and dashboard layer.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Event Sources`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Websites • Mobile Apps • APIs • Databases • Sensors</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event Ingestion</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Producers • CDC • Kafka Connect</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topics • Partitions • Event retention</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Stream Processing`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink • Spark Structured Streaming • Kafka Streams</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Operational Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fast queries and application state</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytical Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Warehouse and data lake</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applications and Real-Time Dashboards</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.2 Role of each component</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event sources</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generate the information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a mobile application produces a payment event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka ingestion layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receives and stores events in distributed topics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing engine</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processes incoming events using business logic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate revenue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Detect fraud.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Group events into windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Enrich events with customer data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Persists processed data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Iceberg tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Object storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytical warehouses.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytics layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Makes the processed results available to users.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Grafana.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Superset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Power BI.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Custom React dashboards.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.3 Real-time processing versus real-time visualization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are different activities.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A stream processing engine might update an aggregate within 100 milliseconds.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">But the dashboard might refresh only every five seconds.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The processing is fast, but the visualization has a slower refresh interval.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">End-to-end latency must consider the entire pipeline:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">[</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">L_&#123;total&#125; =</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">L_&#123;ingestion&#125;+</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">L_&#123;queue&#125;+</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">L_&#123;processing&#125;+</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">L_&#123;storage&#125;+</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">L_&#123;visualization&#125;</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Stage</th>                  <th className="px-4 py-3">Latency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Event ingestion</td>                  <td className="px-4 py-2.5 text-stone-700">20 ms</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Kafka transport</td>                  <td className="px-4 py-2.5 text-stone-700">15 ms</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Processing</td>                  <td className="px-4 py-2.5 text-stone-700">35 ms</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Database write</td>                  <td className="px-4 py-2.5 text-stone-700">30 ms</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Dashboard update</td>                  <td className="px-4 py-2.5 text-stone-700">500 ms</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Total</td>                  <td className="px-4 py-2.5 text-stone-700">600 ms</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is an illustrative latency budget.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Optimizing only the processing engine will not guarantee a fast user experience if the dashboard or destination database is slow.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 2 — Time, Windows and Watermarks
          </div>
        </div>
      </section>

      {/* SECTION 5: 5. Event Time vs Processing Time */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Time, Windows and Watermarks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. Event Time vs Processing Time
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Time is one of the most important concepts in stream processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a batch system, engineers often process data using a predefined date range.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a streaming system, events can arrive at different times, in a different order, or with significant delays.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A stream processing engine must understand which timestamp should determine the result.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are three important time concepts.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.1 Event time</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event time is the actual time when an event occurred at its source.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A customer makes a payment at 10:00 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The event contains:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "transaction_id": 1001, "amount": 5000, "event_time": "2026-11-09T10:00:00Z" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The event time is 10:00 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Even if the event reaches the processing engine at 10:05 AM, its event time remains 10:00 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event time is particularly useful for accurate historical analytics and window calculations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.2 Processing time</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing time is the time when the stream processing engine actually processes a record.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment occurred: 10:00 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment entered Kafka: 10:01 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processor received it: 10:02 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processor processed it: 10:02 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing time is 10:02 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing-time operations use the clock of the machine executing the operator. They are generally simpler and can provide lower-latency results, but results can depend on arrival delays and execution conditions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.3 Ingestion time</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ingestion time refers to when the event enters the data ingestion infrastructure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, when a Kafka record is received and stored, its broker record timestamp may represent a producer-supplied timestamp or a broker-assigned timestamp, depending on the configured timestamp type.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An ingestion timestamp can also be added explicitly by an ingestion application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This helps measure how long data takes to travel from the source into the platform.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.4 Comparing the three timestamps</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a customer performs a transaction at 10:00 AM.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Activity</th>                  <th className="px-4 py-3">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Event actually occurs</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:00</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Event enters Kafka</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:05</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Stream processor processes it</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Therefore:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event time = 10:00:00.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ingestion time = 10:00:05.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing time = 10:00:10.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.5 Event time versus processing time example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an online delivery platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A delivery driver completes a delivery at 10:00 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, the driver's mobile device loses connectivity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The delivery event reaches the server at 10:15 AM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now consider two approaches.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing-time analytics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system counts the delivery at 10:15 AM because that is when it processes the event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-time analytics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system counts the delivery at 10:00 AM because that is when the delivery actually occurred.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the organization wants accurate hourly delivery statistics, event time is usually more appropriate.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.6 Why do events arrive late?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common reasons include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network interruptions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mobile devices being offline.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">API delays.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Message broker backlogs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Database replication delays.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Slow source applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Clock differences between systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retries and temporary failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A system that relies only on processing time may place an event into the wrong analytical window.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.7 When should each time concept be used?</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Requirement</th>                  <th className="px-4 py-3">Suitable time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Actual sales by hour</td>                  <td className="px-4 py-2.5 text-stone-700">Event time</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Customer activity by occurrence time</td>                  <td className="px-4 py-2.5 text-stone-700">Event time</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Detect processing service delays</td>                  <td className="px-4 py-2.5 text-stone-700">Processing time</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Calculate ingestion latency</td>                  <td className="px-4 py-2.5 text-stone-700">Event time versus ingestion time</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Trigger a local timeout</td>                  <td className="px-4 py-2.5 text-stone-700">Processing time</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Handle late-arriving events</td>                  <td className="px-4 py-2.5 text-stone-700">Event time with watermarks</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.8 Time synchronization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-time accuracy also depends on the quality of source timestamps.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine two servers:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Server A clock is 10:00:00.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Server B clock is 10:00:12.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If Server B's clock is 12 seconds ahead, events from different systems may appear out of order even if they actually occurred in a different sequence.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Organizations use time synchronization protocols such as NTP to reduce clock differences.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For highly precise systems, clock synchronization and timestamp provenance become particularly important.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Main idea: Event time describes when something happened. Processing time describes when the processing engine handled it.</p>
        </div>
      </section>

      {/* SECTION 6: 6. Windowing Concepts */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Time, Windows and Watermarks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. Windowing Concepts
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A window is a logical grouping of records based on time, count, or another defined condition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Windows are essential because an unbounded stream never naturally finishes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a company wants to calculate the total revenue of all orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Because new orders continue arriving, the system needs a defined period over which to calculate revenue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue every minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue every five minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue every hour.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue for each user's activity session.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These calculations use windowing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.1 Why are windows necessary?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an incoming event stream:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`10:00:05 → Order 1 10:00:15 → Order 2 10:00:25 → Order 3 10:00:45 → Order 4 10:01:05 → Order 5 10:01:25 → Order 6 10:01:45 → Order 7`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system wants to calculate the number of orders per minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The windowing system groups events into time periods.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Window 1: 10:00–10:01 Order 1 Order 2 Order 3 Order 4 Window 2: 10:01–10:02 Order 5 Order 6 Order 7`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The output becomes:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Time window</th>                  <th className="px-4 py-3">Orders</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">10:00–10:01</td>                  <td className="px-4 py-2.5 text-stone-700">4</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">10:01–10:02</td>                  <td className="px-4 py-2.5 text-stone-700">3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.2 Types of windows</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The three major time-window types are:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tumbling windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sliding windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Session windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each has a different grouping strategy.</p>
        </div>
      </section>

      {/* SECTION 7: 7. Tumbling Windows */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Time, Windows and Watermarks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Tumbling Windows
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A tumbling window divides a data stream into fixed-size, non-overlapping time intervals.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each event belongs to one time window, assuming its timestamp is handled within the applicable windowing rules.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.1 How tumbling windows work</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the window size is five minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The windows are:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:00–10:05 10:05–10:10 10:10–10:15 10:15–10:20</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Every window is independent.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">No overlapping events are counted across multiple windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tumbling window — 5 minutes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:00–10:05</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">4</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">5</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:05–10:10</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">6</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">7</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">8</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">9</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:10–10:15</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">11</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">12</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">13</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">14</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">15</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Illustrative event grouping. Each event belongs to one fixed, non-overlapping interval.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.2 Example: Revenue per five minutes</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an e-commerce application receives:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Order</th>                  <th className="px-4 py-3">Event time</th>                  <th className="px-4 py-3">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>                  <td className="px-4 py-2.5 text-stone-700">10:01</td>                  <td className="px-4 py-2.5 text-stone-700">₹1,000</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>                  <td className="px-4 py-2.5 text-stone-700">10:02</td>                  <td className="px-4 py-2.5 text-stone-700">₹2,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">3</td>                  <td className="px-4 py-2.5 text-stone-700">10:04</td>                  <td className="px-4 py-2.5 text-stone-700">₹1,500</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">4</td>                  <td className="px-4 py-2.5 text-stone-700">10:06</td>                  <td className="px-4 py-2.5 text-stone-700">₹3,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">5</td>                  <td className="px-4 py-2.5 text-stone-700">10:09</td>                  <td className="px-4 py-2.5 text-stone-700">₹2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The tumbling-window results are:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Window</th>                  <th className="px-4 py-3">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">10:00–10:05</td>                  <td className="px-4 py-2.5 text-stone-700">₹4,500</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">10:05–10:10</td>                  <td className="px-4 py-2.5 text-stone-700">₹5,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.3 Flink SQL tumbling window example</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT window_start, window_end, COUNT(*) AS total_orders, SUM(amount) AS total_revenue FROM TABLE( TUMBLE( TABLE orders, DESCRIPTOR(event_time), INTERVAL '5' MINUTES ) ) GROUP BY window_start, window_end;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This groups orders into five-minute event-time windows.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.4 Use cases</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue every minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payments per five minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Average sensor readings per minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Website visits per hour.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Error count per ten minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tumbling windows are useful when the organization needs fixed reporting periods with no overlap.</p>
        </div>
      </section>

      {/* SECTION 8: 8. Sliding Windows */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Time, Windows and Watermarks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Sliding Windows
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sliding windows calculate results over a fixed duration but move forward at a smaller interval.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike tumbling windows, sliding windows can overlap.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.1 Understanding sliding windows</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window size = 10 minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Slide interval = 5 minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The windows become:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Window 1: 10:00–10:10 Window 2: 10:05–10:15 Window 3: 10:10–10:20 Window 4: 10:15–10:25`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An event can belong to more than one window.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sliding window — Size 10 minutes, Slide 5 minutes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:00–10:10</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:05–10:15</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:10–10:20</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Overlapping intervals. A single event can contribute to multiple results.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.2 Example: Last ten minutes of sales</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a dashboard should show total sales over the previous ten minutes, updated every five minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At 10:10, it calculates:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:00–10:10</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At 10:15:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:05–10:15</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">At 10:20:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:10–10:20</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This provides a rolling view of sales.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.3 Flink SQL sliding window example</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT window_start, window_end, COUNT(*) AS total_orders, SUM(amount) AS revenue FROM TABLE( HOP( TABLE orders, DESCRIPTOR(event_time), INTERVAL '5' MINUTES, INTERVAL '10' MINUTES ) ) GROUP BY window_start, window_end;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Here:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The slide interval is five minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The window size is ten minutes.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.4 Sliding-window computational cost</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sliding windows can require more state and processing than tumbling windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a 24-hour window moves forward every 15 minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each event can belong to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">[</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">\frac&#123;24\times60&#125;&#123;15&#125;=96</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">windows, assuming the alignment and interval definitions used in this example.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Therefore, the system may need to maintain more window-related state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink's windowing documentation explicitly discusses how sliding windows can place each event into multiple windows and increase state requirements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink+1</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.5 Use cases</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Last 10 minutes of revenue, updated every minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rolling average temperature.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fraud monitoring over recent transaction history.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer activity over a moving period.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time monitoring of API failures.</p>
        </div>
      </section>

      {/* SECTION 9: 9. Session Windows */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Time, Windows and Watermarks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Session Windows
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Session windows group events based on periods of user or system activity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike tumbling and sliding windows, session windows do not have a fixed start and end duration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They are separated by periods of inactivity.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.1 Understanding session windows</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a customer interacts with an e-commerce application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:00 → Customer opens website 10:03 → Views product 10:05 → Adds product to cart 10:08 → Views another product 10:25 → Makes another interaction 10:28 → Completes purchase</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the session inactivity gap is 10 minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The first group of events forms one session because the gaps between consecutive events are less than 10 minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The next event at 10:25 starts another session because it is separated from the previous activity by more than 10 minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Session windows — 10-minute inactivity gap</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Session 1`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:00</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Visit</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:03</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Product</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:08</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Activity</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events remain in the same session while inactivity does not exceed the gap.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Session 2`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:25</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Return</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:28</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Purchase</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.2 Session window characteristics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Session windows:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Are based on activity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use an inactivity gap.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can have different durations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can be extended when new events arrive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Are useful for analyzing individual user behavior.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.3 Session window example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a music streaming platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A user listens to songs at:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:00 10:02 10:04 10:07 10:30 10:33</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With an inactivity gap of 10 minutes, the system creates:
Session 1: 10:00–10:17.
Session 2: 10:30–10:43.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The end boundary represents the inactivity timeout after the last event, subject to the engine's window semantics.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.4 Flink session window example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A DataStream API example in Java:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`stream .keyBy(event -> event.userId) .window( EventTimeSessionWindows .withGap(Duration.ofMinutes(10)) ) .aggregate(new SessionAggregator());`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This creates event-time session windows for individual users with a ten-minute inactivity gap.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Adjacent sessions may merge when a new event connects their inactivity intervals.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.5 Use cases</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Website user sessions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shopping behavior analysis.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">App usage analytics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network connection sessions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer support activity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Gaming session tracking.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.6 Comparing the three window types</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>                  <th className="px-4 py-3">Tumbling</th>                  <th className="px-4 py-3">Sliding</th>                  <th className="px-4 py-3">Session</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Duration</td>                  <td className="px-4 py-2.5 text-stone-700">Fixed</td>                  <td className="px-4 py-2.5 text-stone-700">Fixed</td>                  <td className="px-4 py-2.5 text-stone-700">Variable</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Movement</td>                  <td className="px-4 py-2.5 text-stone-700">Fixed intervals</td>                  <td className="px-4 py-2.5 text-stone-700">Fixed slide intervals</td>                  <td className="px-4 py-2.5 text-stone-700">Based on activity</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Overlap</td>                  <td className="px-4 py-2.5 text-stone-700">No</td>                  <td className="px-4 py-2.5 text-stone-700">Yes</td>                  <td className="px-4 py-2.5 text-stone-700">Sessions can merge</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Main parameter</td>                  <td className="px-4 py-2.5 text-stone-700">Window size</td>                  <td className="px-4 py-2.5 text-stone-700">Size and slide</td>                  <td className="px-4 py-2.5 text-stone-700">Inactivity gap</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example</td>                  <td className="px-4 py-2.5 text-stone-700">Revenue every 5 min</td>                  <td className="px-4 py-2.5 text-stone-700">Last 10 min every 5 min</td>                  <td className="px-4 py-2.5 text-stone-700">User sessions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 10: 10. Watermarks */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Time, Windows and Watermarks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Watermarks
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Watermarks are one of the most important concepts in stream processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They help a streaming engine estimate the progress of event time and decide when time-based operations can be finalized.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.1 Why are watermarks needed?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an application receives events in the following order:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Arrival order</th>                  <th className="px-4 py-3">Event time</th>                  <th className="px-4 py-3">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:05</td>                  <td className="px-4 py-2.5 text-stone-700">₹1,000</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">2</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:10</td>                  <td className="px-4 py-2.5 text-stone-700">₹2,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">3</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:08</td>                  <td className="px-4 py-2.5 text-stone-700">₹1,500</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">4</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:20</td>                  <td className="px-4 py-2.5 text-stone-700">₹3,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Notice that the third event arrived after the second event, even though its event time is earlier.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is an out-of-order event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now suppose the system wants to calculate revenue for the window:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:00:00–10:00:10</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Should it finalize the window immediately after receiving the event at 10:00:10?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Not necessarily.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Another event with an earlier timestamp might still arrive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Watermarks provide a mechanism for deciding when event-time progress has advanced sufficiently to close windows.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.2 What is a watermark?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A watermark is a progress indicator that tells the stream processing system how far event time has advanced.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In Apache Flink, a watermark carrying timestamp (t) declares that the system does not expect any more events with timestamps less than or equal to (t) from that stream.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is a progress estimate, not proof that no older event will ever arrive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.3 Understanding watermark generation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose events arrive with a maximum observed event time of 10:10.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application expects events to arrive up to two minutes late.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can generate a watermark approximately as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">[</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Watermark = Maximum\ Event\ Time - Allowed\ Out\ of\ Order\ Delay</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Therefore:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">[</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10&#123;:&#125;10 - 2\text&#123; minutes&#125;=10&#123;:&#125;08</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The watermark becomes 10:08.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This means the system estimates that events up to 10:08 should have arrived.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events with earlier timestamps arriving afterward are considered late according to this watermark.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The actual policy for generating watermarks is configurable and differs across processing engines.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.4 Watermark example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events: 10:00 10:02 10:05 10:03 10:08 10:10 Maximum observed event time = 10:10 Allowed delay = 2 minutes Watermark = 10:08</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When the watermark passes the end of a window, that window can be triggered and its state can eventually be cleaned up according to the engine's rules.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.5 Why do we need watermarks?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Watermarks help answer:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When should a time window be finalized?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How much longer should the system wait for late events?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When can old window state be deleted?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When can event-time timers be triggered?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How should delayed events be handled?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without some mechanism to estimate event-time progress, an unbounded stream processor could retain old state indefinitely.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.6 Watermarks in distributed streams</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose three source partitions generate events in parallel.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each partition may emit its own watermark.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 1 → Watermark 10:10 Partition 2 → Watermark 10:08 Partition 3 → Watermark 10:12</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An operator that receives all three inputs often uses the minimum watermark:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">[</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">W_&#123;operator&#125;=\min(10&#123;:&#125;10,10&#123;:&#125;08,10&#123;:&#125;12)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">[</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">W_&#123;operator&#125;=10&#123;:&#125;08</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Why?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Because Partition 2 is still behind.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The engine should not assume that all inputs have advanced beyond 10:08.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A slow or idle input can delay watermark progression. Flink provides mechanisms for marking idle inputs so that inactive partitions do not hold back downstream event-time progress indefinitely.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.7 Watermarks in Spark Structured Streaming</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Structured Streaming also uses watermarks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">streaming_df = streaming_df.withWatermark( "event_time", "10 minutes" )</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This tells Spark how much event-time delay should be tolerated for supported stateful operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The watermark is particularly important for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Windowed aggregations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream-stream joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Streaming deduplication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State cleanup.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark tracks event-time progress and derives a global watermark for operations involving multiple streams. By default, that global watermark follows the minimum progress among the input streams, helping avoid accidentally discarding slow-stream data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark 4.3.0 Documentation</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.8 Watermark versus window</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These concepts are related but different.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Window</th>                  <th className="px-4 py-3">Watermark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Defines which events belong together</td>                  <td className="px-4 py-2.5 text-stone-700">Tracks event-time progress</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Creates logical time groups</td>                  <td className="px-4 py-2.5 text-stone-700">Helps decide when groups can close</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Example: 5-minute window</td>                  <td className="px-4 py-2.5 text-stone-700">Example: 2-minute allowed delay</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Organizes computation</td>                  <td className="px-4 py-2.5 text-stone-700">Controls computation and state cleanup</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">A window answers: "Which records belong together?"</td>                  <td className="px-4 py-2.5 text-stone-700">A watermark answers: "How far has event time progressed, and when can we finish processing this interval?"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 11: 11. Out-of-Order Events */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Time, Windows and Watermarks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Out-of-Order Events
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Out-of-order events occur when records arrive in an order different from the order in which they actually occurred.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is common in distributed systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.1 Why do out-of-order events happen?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network delays</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An event may be delayed while being transmitted.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parallel processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different sources or partitions can process records at different speeds.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mobile devices</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An offline device may upload historical events later.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Retries</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A previously failed record may be delivered again after newer records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cross-region communication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network latency can differ between geographical regions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.2 Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A delivery platform records the following events:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event A: 10:00 Event B: 10:02 Event C: 10:01 Event D: 10:05</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The arrival sequence is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:00 → 10:02 → 10:01 → 10:05</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The event-time sequence is different:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:00 → 10:01 → 10:02 → 10:05</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A processing system that assumes arrival order equals event order can calculate incorrect time-based results.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.3 How to handle out-of-order events</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common approaches include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-time processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use timestamps representing when events actually occurred.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Watermarks</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Estimate event-time progress.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Allowed lateness</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Keep a window open for a defined period after its nominal end.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revisions or updates</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Allow previously emitted results to be corrected when new events arrive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Side outputs</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Route events that are too late for normal processing into a separate stream.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reconciliation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compare streaming results with historical source data.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.4 Example: Revenue correction</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the system has already calculated:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window: 10:00–10:05 Revenue: ₹10,000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A late payment event arrives with event time 10:03 and amount ₹2,000.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The correct revenue is:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">[</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10,000+2,000=12,000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the engine supports the applicable late-data policy, it can update the result to ₹12,000.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can require an update-capable output system rather than a sink that only supports append operations.</p>
        </div>
      </section>

      {/* SECTION 12: 12. Late-Arriving Events */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Time, Windows and Watermarks</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Late-Arriving Events
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A late-arriving event is an event whose event timestamp belongs to an earlier time period than the current event-time progress maintained by the processing engine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Late events are a major challenge in real-time systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.1 Example of a late event</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the system uses a watermark of 10:10.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A new event arrives:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "amount": 1500, "event_time": "10:05:00" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The event occurred at 10:05, but it arrived after the system's watermark passed that timestamp.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is therefore late.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.2 Late events versus out-of-order events</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Out-of-order event</th>                  <th className="px-4 py-3">Late event</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Arrives before events with newer timestamps or in a different order from event time</td>                  <td className="px-4 py-2.5 text-stone-700">Arrives after the engine's watermark has passed its event timestamp</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Describes arrival sequence</td>                  <td className="px-4 py-2.5 text-stone-700">Describes arrival relative to event-time progress</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">May still be on time according to the watermark</td>                  <td className="px-4 py-2.5 text-stone-700">Has already crossed the watermark boundary</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">An out-of-order event is not necessarily late.</td>                  <td className="px-4 py-2.5 text-stone-700">12.3 Allowed lateness</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Allowed lateness is the additional time a streaming window remains eligible to accept late events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window ends: 10:05 Initial watermark passes: 10:05 Allowed lateness: 2 minutes Window state can be retained until: 10:07</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events arriving before the applicable cleanup boundary can still be included.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events arriving after the window state is removed may be dropped or handled through a separate output path.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink supports configurable allowed lateness for event-time windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.4 Late-event handling strategies</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Strategy 1 — Drop late events</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful when extremely late data is unimportant.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Strategy 2 — Accept late events for a configured interval</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Keep the required window state for a limited additional period.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Strategy 3 — Side output</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Route late records to a separate stream for processing or correction.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Strategy 4 — Reconciliation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update historical aggregates after comparing the results against an authoritative source.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.5 Business example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a payment analytics platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The organization accepts payments for up to 24 hours after an order is initiated.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If a payment event arrives late, the system cannot simply discard it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It may need to:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update payment status.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Correct revenue totals.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update financial dashboards.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Notify downstream services.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintain an audit trail.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The allowed-lateness decision must therefore reflect business requirements rather than an arbitrary technical value.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 3 — Stateful Processing, Joins and Recovery
          </div>
        </div>
      </section>

      {/* SECTION 13: 13. Stateful Stream Processing */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Stateful Processing, Joins and Recovery</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Stateful Stream Processing
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stateful stream processing means maintaining information about previously processed events so that future events can be processed using historical context.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a fundamental capability of modern streaming engines.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.1 Stateless versus stateful processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stateless processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each event is processed independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The result does not depend on previously processed events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filtering invalid records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Converting a field.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Changing a timestamp format.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Removing an unwanted column.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`def process_event(event): if event["amount"] > 0: return event return None`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The function processes each event independently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stateful processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system maintains information between events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Counting transactions per user.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tracking account balances.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculating rolling averages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Detecting repeated failed payments.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintaining session information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Performing stream joins.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.2 Example: Customer transaction counter</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a bank wants to track the number of transactions performed by each customer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incoming events:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer 101 → Transaction Customer 102 → Transaction Customer 101 → Transaction Customer 101 → Transaction Customer 102 → Transaction</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The streaming application maintains state:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Customer</th>                  <th className="px-4 py-3">Transaction count</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">3</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The state changes as events arrive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event: Customer 101 Previous State: 101 → 0 New State: 101 → 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Next event:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event: Customer 101 Previous State: 101 → 1 New State: 101 → 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application must remember the previous count.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That is stateful processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.3 Types of state</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Keyed state</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintains information separately for each key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer 101 → Total spending ₹5,000 Customer 102 → Total spending ₹8,000 Customer 103 → Total spending ₹2,000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is particularly useful for user-level and account-level computations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Operator state</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintains state associated with an individual parallel operator instance rather than directly with individual business keys.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is useful for tracking information such as source reader positions, custom operator progress, or other partition-level information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window state</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stores information needed to calculate results for open windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window: 10:00–10:05 Events: 1000 1500 2000 Current Sum = 4500</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The window remains in state until its processing and cleanup conditions are satisfied.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.4 Stateful processing architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incoming Events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer ID • Amount • Event time</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Key By Customer ID</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition related events by key</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State 101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Count: 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State 102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Count: 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State 103</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Count: 4</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Updated Business Results</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.5 Keyed state in Apache Flink</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink supports keyed state that is partitioned and distributed together with the corresponding keyed streams.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After a keyBy() operation, an operator can access the state associated with the key of the current event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This allows state to be distributed across parallel operator instances.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptual Java example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`stream .keyBy(event -> event.customerId) .process(new CustomerTransactionProcessor());`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The processor can maintain a separate transaction count or accumulated amount for each customer.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.6 Stateful processing in Spark Structured Streaming</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Structured Streaming supports stateful operations including:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deduplication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream-stream joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Group-based state operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Windowed calculations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark maintains processing state using its state-store infrastructure and checkpointing mechanisms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This allows the application to recover state after a failure.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.7 State management challenges</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stateful processing creates additional engineering requirements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State size</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A stream may contain millions of unique customers. Maintaining individual state for every customer can consume substantial resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State cleanup</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Old state should be removed when it is no longer required.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recovery</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The state must be recovered if a worker fails.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Repartitioning</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When parallelism changes, state may need to move to different workers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serialization</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State must be stored in a recoverable representation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.8 State TTL</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State Time-To-Live (TTL) defines how long certain state entries remain valid.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a user session is considered inactive after 30 minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If no new event arrives within that period, the system can expire the session state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State TTL helps control memory and storage growth.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TTL is not a replacement for windowing. It is a state-expiration mechanism and its exact cleanup behavior depends on the engine.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.9 Real-world applications</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">User session tracking.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer purchase aggregation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time fraud detection.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inventory tracking.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Account-level transaction monitoring.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Device monitoring.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time recommendation systems.</p>
        </div>
      </section>

      {/* SECTION 14: 14. Stream Joins and Aggregations */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Stateful Processing, Joins and Recovery</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Stream Joins and Aggregations
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream joins and aggregations allow organizations to combine continuous data streams and calculate meaningful results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They are essential for building business analytics and operational monitoring systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.1 What is a stream aggregation?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An aggregation summarizes multiple events into a smaller result.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common operations include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">COUNT.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">SUM.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AVG.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MIN.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MAX.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider these payment events:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Customer</th>                  <th className="px-4 py-3">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">1,000</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">2,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">5,000</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">1,500</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Group by customer:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Customer</th>                  <th className="px-4 py-3">Total spending</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">4,500</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">7,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a grouped aggregation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.2 Windowed aggregation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a business wants sales every five minutes.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT product_id, window_start, window_end, SUM(amount) AS revenue, COUNT(*) AS total_orders FROM sales_stream GROUP BY product_id, window_start, window_end;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The stream processor groups events by product and time window.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a common real-time analytics operation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.3 Why do stream joins need state?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine two independent streams:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders stream</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order 5001 → Customer 101 Order 5002 → Customer 102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payments stream</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment 9001 → Order 5001 Payment 9002 → Order 5002</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system wants to produce:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Order ID</th>                  <th className="px-4 py-3">Customer ID</th>                  <th className="px-4 py-3">Payment ID</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">5001</td>                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">9001</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">5002</td>                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">9002</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The order might arrive before the payment, or the payment might arrive before the order.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The processing engine must remember records from one stream while waiting for matching records from the other.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That requires state.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.4 Types of stream joins</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are several important types.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. Stream-stream join</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combines two continuously updating streams.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Orders Stream | +------ Join by order_id | Payments Stream | v Combined Order and Payment Events`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Because both sides are unbounded, a practical streaming join generally needs a key and a time constraint to manage how long records are retained in state.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. Stream-static join</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Combines an incoming stream with a relatively static reference dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Streaming transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer dimension table.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Payment Stream | +------ Join | Customer Dimension | v Enriched Payment Events`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system adds customer information to incoming payment records.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>C. Temporal join</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A temporal join uses a time-versioned reference table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A product's price changes over time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An order should be joined to the product price that was valid at the appropriate event time, rather than blindly using the latest price.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.5 Stream-stream join example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an online shopping platform needs to associate payments with orders within 30 minutes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order event:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "customer_id": 101, "event_time": "10:00:00" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment event:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "payment_id": 9001, "order_id": 5001, "amount": 1500, "event_time": "10:12:00" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The join condition is:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM orders_stream o JOIN payments_stream p ON o.order_id = p.order_id AND p.event_time BETWEEN o.event_time AND o.event_time + INTERVAL '30' MINUTES;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This associates payments with matching orders during the defined time interval.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The exact SQL syntax for streaming joins varies across engines and versions, and actual implementation also requires event-time and state-retention configuration.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.6 Aggregations in Flink</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink can perform stream aggregations using its DataStream and Table/SQL APIs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example Flink SQL:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT product_id, SUM(amount) AS total_revenue, COUNT(*) AS total_orders FROM orders GROUP BY product_id;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In an unbounded streaming query, the engine continuously maintains the grouped results and associated state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For time-based bounded output, add a window.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.7 Aggregations in Spark Structured Streaming</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example using PySpark:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from pyspark.sql.functions import ( window, sum, count ) result = ( orders .groupBy( window("event_time", "5 minutes"), "product_id" ) .agg( sum("amount").alias("revenue"), count("*").alias("total_orders") ) )`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This calculates the revenue and order count per product for each five-minute window.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.8 Stream join challenges</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events may arrive at different times.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records may be out of order.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Join keys may be missing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State can grow too large.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records may not have matching events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Duplicate messages may create duplicate joined results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Watermarks and cleanup rules can affect which events remain eligible for matching.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.9 Practical applications</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Application</th>                  <th className="px-4 py-3">Streams being joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">E-commerce</td>                  <td className="px-4 py-2.5 text-stone-700">Orders + Payments</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Banking</td>                  <td className="px-4 py-2.5 text-stone-700">Transactions + Customer accounts</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Logistics</td>                  <td className="px-4 py-2.5 text-stone-700">Shipment updates + GPS positions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Healthcare</td>                  <td className="px-4 py-2.5 text-stone-700">Patient readings + Patient records</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Fraud detection</td>                  <td className="px-4 py-2.5 text-stone-700">Payments + Historical account activity</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Advertising</td>                  <td className="px-4 py-2.5 text-stone-700">Clicks + Ad impressions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 15: 15. Checkpointing and Recovery */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Stateful Processing, Joins and Recovery</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. Checkpointing and Recovery
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpointing is a mechanism that periodically saves the processing progress and necessary state of a streaming application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It allows the application to recover from failures without restarting the complete computation from the beginning.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.1 Why checkpointing is necessary</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a real-time system processing 100 million events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application has already processed 80 million events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A worker crashes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without checkpointing, the system might need to reconstruct a large amount of previous state or reprocess an unnecessarily large portion of the event stream.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With checkpointing, it can restore an earlier consistent processing state and continue from the corresponding source position.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.2 What is stored in a checkpoint?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Depending on the processing engine, checkpoints can preserve:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source offsets or positions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Operator state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregation progress.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Timers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Other recovery metadata.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In Flink, checkpoints coordinate operator state with stream positions to allow recovery with the same semantics as a failure-free execution under supported source and sink guarantees.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink+1</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.3 Checkpointing workflow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Streaming Application</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumes and processes events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpoint Coordinator</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initiates coordinated snapshots</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Operator State</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregates and timers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source Positions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offsets and progress</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Durable Checkpoint Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shared filesystem or object storage</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.4 Recovery workflow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the application crashes after checkpoint number 100.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When it restarts:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Locate the latest valid completed checkpoint.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Restore operator state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Restore source positions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reinitialize processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replay records after the checkpoint.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Continue normal streaming.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This makes the application recoverable.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.5 Checkpointing in Apache Flink</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink uses distributed snapshots based on its checkpointing mechanism.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpoint barriers travel through the dataflow.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Operators use these barriers to coordinate a consistent snapshot of state and input positions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After a successful checkpoint, the system has a recovery point.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink can use aligned or unaligned checkpoint mechanisms depending on configuration and workload conditions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A checkpointing configuration might conceptually look like:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment(); env.enableCheckpointing(10000);</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Here, a checkpoint is initiated every 10 seconds.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Production applications need durable checkpoint storage, appropriate timeout and failure settings, and sufficient capacity.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.6 Checkpointing versus savepoints</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These terms are related but have different purposes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpoint</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An automatically managed recovery snapshot used during normal operation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Savepoint</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A user-managed snapshot commonly used for controlled upgrades, application changes, migration, or planned recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Savepoints are useful when an organization needs to stop or modify a streaming application while preserving its state.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.7 Checkpointing in Spark Structured Streaming</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Structured Streaming also maintains checkpoints.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">query = ( result.writeStream .format("parquet") .option( "checkpointLocation", "/data/checkpoints/orders" ) .start("/data/output/orders") )</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The checkpoint location stores information required to track streaming query progress and support recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A durable, persistent location should be used in production. It should not be an ephemeral directory that disappears when an application container is restarted.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.8 Why checkpointing matters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpointing is important for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Long-running streaming applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stateful aggregations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Windowed analytics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fault recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exactly-once processing designs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoiding unnecessary recomputation.</p>
        </div>
      </section>

      {/* SECTION 16: 16. Exactly-Once Processing Concepts */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Stateful Processing, Joins and Recovery</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Exactly-Once Processing Concepts
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exactly-once processing is a reliability concept that aims to ensure that each input event has only one logical effect on the processing result within a defined system boundary.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is especially important when handling:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Financial transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inventory updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Critical analytical aggregates.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.1 Understanding the problem</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a stream processor reads an order event.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "amount": 1500 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reads the event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculates revenue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Writes the result.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Commits the input offset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now imagine a failure between steps 3 and 4.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The event may be read again after recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The output may be duplicated.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.2 At-most-once</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The processing system attempts each event zero or one time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An event may be lost if the system advances progress before its business effect is safely stored.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.3 At-least-once</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The processing system attempts to process an event one or more times under the configured failure and retry assumptions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This reduces loss but may produce duplicate effects.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.4 Exactly-once</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The system ensures that the processing effect is reflected once within its supported transaction or recovery boundary.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This may use:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpointing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactional input offsets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Atomic state updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotent writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactional sinks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deduplication.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.5 Comparing the guarantees</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Guarantee</th>                  <th className="px-4 py-3">Meaning</th>                  <th className="px-4 py-3">Main concern</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">At-most-once</td>                  <td className="px-4 py-2.5 text-stone-700">Zero or one processing attempt</td>                  <td className="px-4 py-2.5 text-stone-700">Potential loss</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">At-least-once</td>                  <td className="px-4 py-2.5 text-stone-700">One or more processing attempts</td>                  <td className="px-4 py-2.5 text-stone-700">Duplicate effects</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Exactly-once</td>                  <td className="px-4 py-2.5 text-stone-700">One logical effect within defined boundaries</td>                  <td className="px-4 py-2.5 text-stone-700">Transaction and recovery complexity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.6 Exactly-once in Apache Flink</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink uses consistent checkpoints and stream replay to recover application state.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`With supported replayable sources and appropriately integrated transactional sinks, it can provide end-to-end exactly-once results.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Kafka Input | v Flink Processing | v State Checkpoint | v Transactional Output`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If a failure occurs, Flink restores state and source positions and reprocesses the appropriate records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The source and sink integrations must support the required guarantees.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.7 Exactly-once in Spark Structured Streaming</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Structured Streaming offers fault-tolerant processing based on checkpointing and source progress tracking.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, the output sink matters.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, Spark's official streaming documentation lists the Kafka sink as providing at-least-once delivery, even though the processing engine offers stronger internal guarantees for supported queries. The documentation also explains how foreachBatch can use its batch ID for output deduplication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark 4.3.0 Documentation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This distinction is important:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exactly-once processing inside an engine does not automatically mean exactly-once effects in every external database, API, or message broker.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.8 Idempotency as a practical solution</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a PostgreSQL output table:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE processed_orders ( order_id BIGINT PRIMARY KEY, amount NUMERIC(12, 2) );
Insert using an upsert:
INSERT INTO processed_orders ( order_id, amount ) VALUES ( 5001, 1500 ) ON CONFLICT (order_id) DO UPDATE SET amount = EXCLUDED.amount;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the same order event is processed again, the existing row is updated rather than duplicated.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For accurate financial aggregates, use stable transaction IDs and carefully designed transaction boundaries instead of simply incrementing a total every time an event is received.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 4 — Apache Flink and Spark Structured Streaming
          </div>
        </div>
      </section>

      {/* SECTION 17: 17. Apache Flink Architecture */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Apache Flink and Spark Structured Streaming</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Apache Flink Architecture
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink is a distributed processing framework designed for stateful computations over bounded and unbounded data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is particularly useful for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time event processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stateful stream computations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-time windowing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Complex stream joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fraud detection.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time analytics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Continuous ETL pipelines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Low-latency event processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink supports several APIs:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DataStream API.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Table API.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink SQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DataStream API V2.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For learning, the DataStream API and SQL are particularly useful.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.1 Why Apache Flink was developed</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Traditional processing systems often perform computation in scheduled batches.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, several applications need to continuously process records and maintain state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A banking application must calculate recent transaction activity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A delivery platform must continuously track vehicle locations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An e-commerce application must monitor live inventory.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A cybersecurity platform must detect patterns in network traffic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink provides a distributed runtime for continuous data processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.2 Flink architecture overview</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Flink cluster primarily contains two types of runtime processes:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JobManager.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TaskManagers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A client prepares and submits an application to the cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The JobManager coordinates execution, and TaskManagers execute the distributed tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink Client</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Prepares and submits application</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JobManager</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scheduling • Coordination • Checkpoints • Recovery</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Task assignment and execution coordination</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TaskManager 1</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Task slots</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TaskManager 2</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Task slots</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TaskManager 3</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Task slots</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed data exchange</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed Stream Processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sources • Transformations • State • Sinks</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.3 JobManager</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The JobManager is responsible for coordinating distributed job execution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important responsibilities include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receiving submitted jobs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scheduling tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Managing task execution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coordinating checkpoints.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Handling job failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initiating recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Managing resources through the ResourceManager.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The JobManager has several internal components.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ResourceManager</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Responsible for managing task slots and allocating resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dispatcher</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Provides the REST endpoint for job submission and starts a JobMaster for each submitted job. It also supports the web interface.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JobMaster</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Manages the execution of an individual job.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A cluster can execute multiple jobs, each with its own JobMaster.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.4 TaskManager</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TaskManagers are the worker processes that execute the actual computation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They handle:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Running operators.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing input records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintaining operator state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exchanging data with other TaskManagers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Writing results to sinks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, suppose a stream-processing application has three stages:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Kafka Source | v Filter | v Revenue Aggregation | v Output`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink distributes the corresponding execution tasks across available TaskManagers.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.5 Task slots</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A task slot is a unit of resource scheduling within a TaskManager.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a TaskManager has four task slots.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TaskManager │ ├── Slot 1 ├── Slot 2 ├── Slot 3 └── Slot 4</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These slots allow different task workloads to share the TaskManager's resources according to Flink's scheduling model.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A task slot is not necessarily equivalent to one CPU core.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.6 Operators and tasks</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Flink application is represented as a dataflow graph.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common operators include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Map.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filter.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">KeyBy.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Window.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Join.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sink.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Kafka Source | v Deserialization | v Filter Invalid Records | v KeyBy Customer ID | v Window Aggregation | v Database Sink`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink translates the application into an execution graph and distributes its tasks across available resources.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.7 Operator chaining</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Some compatible operators can be chained into a single task to reduce communication overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Map → Filter → Map</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These operations may run together within an operator chain rather than requiring separate network exchanges.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This improves performance when data does not need to be redistributed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A keyBy() operation commonly requires repartitioning data between parallel operator subtasks, creating a network shuffle boundary.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.8 Flink parallelism</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parallelism determines how many parallel instances execute an operator.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a Kafka source has parallelism 4.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source Parallelism = 4 Source 1 Source 2 Source 3 Source 4</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incoming data can be distributed across the parallel source instances according to the source and partition assignment.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increasing parallelism can improve throughput when sufficient resources and source partitions are available.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, it does not automatically guarantee better performance.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.9 Flink execution flow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A typical Flink streaming application works as follows:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Client submits a streaming job.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JobManager receives the job.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JobManager creates and schedules execution tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">TaskManagers execute operators.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records travel through the dataflow.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stateful operators maintain their state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpoints capture recovery information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Results are written to configured sinks.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.10 State backends</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink needs a mechanism to manage state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Depending on version and configuration, state can be managed using different state backends or state-storage implementations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A commonly used option is RocksDB-backed state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is useful when state is larger than the amount of memory conveniently available for an in-memory state structure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The choice affects:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Memory usage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk usage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State access speed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpoint duration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recovery performance.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.11 Flink fault tolerance</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink combines checkpointing with replayable input sources and compatible sinks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When a failure occurs:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The job restores operator state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Input positions are restored.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records after the checkpoint are replayed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing resumes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is particularly powerful for continuously running stateful applications.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.12 Flink deployment modes</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink can run in several deployment environments:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Standalone cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kubernetes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">YARN.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Session cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The choice depends on the organization's infrastructure and operational requirements.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The current Flink documentation describes JobManager, TaskManager, task slots, application execution, and deployment architecture. [Flink Architecture Documentation](https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/flink-architecture/?utm_source=chatgpt.com).</p>
        </div>
      </section>

      {/* SECTION 18: 18. Spark Structured Streaming */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Apache Flink and Spark Structured Streaming</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Spark Structured Streaming
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Spark is a distributed computing engine used for large-scale data processing, SQL analytics, machine learning, and stream processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Structured Streaming is its modern streaming engine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It allows developers to build streaming applications using familiar DataFrame, Dataset, and SQL programming abstractions.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.1 What is Spark Structured Streaming?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Structured Streaming treats incoming data as an incrementally updated table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">As new records arrive, the query updates its results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an orders stream can be treated conceptually as an evolving table:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">order_id</th>                  <th className="px-4 py-3">customer_id</th>                  <th className="px-4 py-3">amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">5001</td>                  <td className="px-4 py-2.5 text-stone-700">101</td>                  <td className="px-4 py-2.5 text-stone-700">1500</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">5002</td>                  <td className="px-4 py-2.5 text-stone-700">102</td>                  <td className="px-4 py-2.5 text-stone-700">2500</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">5003</td>                  <td className="px-4 py-2.5 text-stone-700">103</td>                  <td className="px-4 py-2.5 text-stone-700">3500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">As more events arrive, the logical table grows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Developers define queries over this evolving data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark handles incremental execution, state management, and recovery for supported operations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.2 Structured Streaming architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Data Sources`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka • Files • Other supported sources</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Structured Streaming</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read stream as a DataFrame</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transformations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filter • Select • Map</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stateful Operations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Windows • Joins • Aggregations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Output Sink</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka • Files • Database • Console</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpointing and recovery</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpoint Storage</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.3 Micro-batch processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Traditionally, Spark Structured Streaming uses micro-batch execution by default.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of processing every event in a separate full execution, it groups newly available records into small batches.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Incoming Stream | v Micro-batch 1 | v Micro-batch 2 | v Micro-batch 3 | v Micro-batch 4`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each micro-batch is processed using Spark's distributed execution engine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This provides a balance between streaming latency and large-scale batch processing efficiency.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.4 Example of micro-batch execution</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a streaming query processes incoming events with a one-second trigger.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:00:00–10:00:01 → Batch 1 10:00:01–10:00:02 → Batch 2 10:00:02–10:00:03 → Batch 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events arriving during each interval are included in the next applicable batch.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The actual execution timing depends on processing duration and scheduling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark's official documentation describes micro-batch execution as the default Structured Streaming mode when no other trigger is specified.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark 4.3.0 Documentation</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.5 Spark Structured Streaming execution modes</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is important to understand that Spark's streaming capabilities have evolved.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Micro-batch mode</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The established default for many analytical and ETL streaming workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Continuous Processing mode</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An older low-latency execution mode that remains experimental and has significant limitations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time Mode</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Introduced in Spark 4.1.0, it targets lower-latency execution using Structured Streaming APIs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The current Spark 4.3 documentation describes additional stateful capabilities introduced in 4.3, including selected aggregations, deduplication, and JVM transformWithState support. It does not yet support every stateful query shape.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark 4.3.0 Documentation+1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For new applications, choose the execution mode based on the exact supported source, operators, sinks, fault-tolerance requirements, and latency target.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.6 Structured Streaming versus legacy Spark Streaming</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Older Spark applications used DStreams, also called Discretized Streams.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Structured Streaming is the preferred modern API.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Legacy Spark Streaming</th>                  <th className="px-4 py-3">Structured Streaming</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">DStream abstractions</td>                  <td className="px-4 py-2.5 text-stone-700">DataFrame and Dataset abstractions</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">RDD-based processing model</td>                  <td className="px-4 py-2.5 text-stone-700">Structured query execution</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Older streaming architecture</td>                  <td className="px-4 py-2.5 text-stone-700">Modern incremental query engine</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Legacy project</td>                  <td className="px-4 py-2.5 text-stone-700">Recommended for new Spark streaming pipelines</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark's official documentation identifies the older DStreams-based Spark Streaming project as legacy and recommends Structured Streaming for new streaming applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark 4.2.0 Documentation</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.7 Reading from Kafka using Spark</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Spark application can consume records from Kafka using the Kafka source connector.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from pyspark.sql import SparkSession spark = ( SparkSession.builder .appName("KafkaStreamProcessing") .getOrCreate() ) orders = ( spark.readStream .format("kafka") .option( "kafka.bootstrap.servers", "localhost:9092" ) .option( "subscribe", "orders" ) .option( "startingOffsets", "latest" ) .load() ) orders.printSchema()`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Kafka source provides fields such as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Value.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Topic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Offset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Timestamp.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The value field is binary, so it must be decoded and parsed before applying business transformations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.8 Parsing JSON events</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose Kafka receives:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 5001, "customer_id": 101, "amount": 1500.50 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use a schema and parse the event.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from pyspark.sql.types import ( StructType, StructField, LongType, DoubleType ) from pyspark.sql.functions import ( col, from_json ) schema = StructType([ StructField("order_id", LongType(), False), StructField("customer_id", LongType(), False), StructField("amount", DoubleType(), False) ]) parsed = ( orders .select( from_json( col("value").cast("string"), schema ).alias("data") ) .select("data.*") )`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now the records are represented as structured columns.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.9 Example: Streaming aggregation in Spark</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate the number of events and total revenue.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`from pyspark.sql.functions import ( count, sum ) result = ( parsed .groupBy("customer_id") .agg( count("*").alias("total_orders"), sum("amount").alias("total_revenue") ) )`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Because this is an unbounded stream, Spark maintains updated aggregate state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A production implementation should define the required state lifetime and recovery policy.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.10 Writing streaming results</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">query = ( result.writeStream .outputMode("update") .format("console") .option("truncate", "false") .option( "checkpointLocation", "/data/checkpoints/customer-orders" ) .start() ) query.awaitTermination()</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The update mode emits updated aggregation rows as they change.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a local educational environment, the console is useful for observing output.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For production, use an appropriate durable sink and understand its write guarantees.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.11 Spark output modes</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Structured Streaming commonly supports these output modes, subject to query and sink compatibility.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Append mode</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Outputs newly added result rows that will not be changed again by the streaming query.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful for finalized window results with appropriate watermark configuration.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update mode`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Outputs rows that changed since the last trigger.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful for continuously updating aggregates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Complete mode</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Outputs the entire current result table each time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful for smaller aggregation tables where the whole result can reasonably be emitted.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Mode</th>                  <th className="px-4 py-3">Behavior</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Append</td>                  <td className="px-4 py-2.5 text-stone-700">Emit new finalized rows</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Update</td>                  <td className="px-4 py-2.5 text-stone-700">Emit changed rows</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Complete</td>                  <td className="px-4 py-2.5 text-stone-700">Emit complete current result table</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Not every sink supports every output mode.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.12 Spark SQL versus DataFrame API</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing can be implemented through DataFrame operations or SQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example SQL:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT customer_id, SUM(amount) FROM orders_stream GROUP BY customer_id;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This demonstrates the SQL logic, but a streaming SQL execution environment must register the appropriate streaming table or view and manage the execution query.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DataFrame APIs provide a programmatic way to build the same logical operations.</p>
        </div>
      </section>

      {/* SECTION 19: 19. Apache Flink vs Spark Structured Streaming */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Apache Flink and Spark Structured Streaming</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Apache Flink vs Spark Structured Streaming
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both Flink and Spark Structured Streaming are important technologies in modern data engineering.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They have overlapping capabilities but different architectural strengths.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.1 Comparison</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th>                  <th className="px-4 py-3">Apache Flink</th>                  <th className="px-4 py-3">Spark Structured Streaming</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Main focus</td>                  <td className="px-4 py-2.5 text-stone-700">Stateful stream and batch processing</td>                  <td className="px-4 py-2.5 text-stone-700">Unified SQL, batch and streaming processing</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Traditional streaming execution</td>                  <td className="px-4 py-2.5 text-stone-700">Continuous record processing</td>                  <td className="px-4 py-2.5 text-stone-700">Micro-batch by default</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Event-time support</td>                  <td className="px-4 py-2.5 text-stone-700">Strong native support</td>                  <td className="px-4 py-2.5 text-stone-700">Supported through watermarks and stateful operations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Windowing</td>                  <td className="px-4 py-2.5 text-stone-700">Rich window APIs</td>                  <td className="px-4 py-2.5 text-stone-700">SQL and DataFrame window APIs</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Stateful processing</td>                  <td className="px-4 py-2.5 text-stone-700">Core architectural feature</td>                  <td className="px-4 py-2.5 text-stone-700">Supported through stateful streaming operations</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Checkpointing</td>                  <td className="px-4 py-2.5 text-stone-700">Distributed checkpoint mechanism</td>                  <td className="px-4 py-2.5 text-stone-700">Streaming query checkpoints</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Low-latency processing</td>                  <td className="px-4 py-2.5 text-stone-700">Designed for continuous processing</td>                  <td className="px-4 py-2.5 text-stone-700">Micro-batch plus newer Real-time Mode</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">APIs</td>                  <td className="px-4 py-2.5 text-stone-700">DataStream, Table API, SQL</td>                  <td className="px-4 py-2.5 text-stone-700">DataFrame, Dataset, SQL</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Common uses</td>                  <td className="px-4 py-2.5 text-stone-700">Complex event processing and low-latency streaming</td>                  <td className="px-4 py-2.5 text-stone-700">Streaming ETL and analytics integrated with Spark workloads</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.2 When should Flink be preferred?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink is particularly suitable for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Complex event-time computations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Low-latency stateful processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advanced windowing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Long-running stateful applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-driven analytics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large-scale continuous data pipelines.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.3 When should Spark Structured Streaming be preferred?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark is particularly suitable when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The organization already uses Apache Spark.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch and streaming logic should share a common ecosystem.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Streaming transformations are SQL or DataFrame-centric.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Existing data lake and warehouse pipelines use Spark.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Micro-batch processing meets the latency requirement.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark's newer Real-time Mode also expands its options for lower-latency workloads, although operator and sink support must be checked carefully.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.4 Which should you learn first?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Learn the concepts using Spark Structured Streaming because SQL and DataFrame APIs make many streaming operations relatively approachable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Then study Flink to understand:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-time processing in depth.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State management.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Watermark progression.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpointing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed continuous execution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The concepts transfer between both systems, even though their APIs and runtime implementations differ.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 5 — Building Streaming Data Pipelines
          </div>
        </div>
      </section>

      {/* SECTION 20: 20. Streaming Data Pipelines */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Building Streaming Data Pipelines</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Streaming Data Pipelines
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A streaming data pipeline continuously receives, processes, transforms, and delivers events to downstream systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike a traditional batch pipeline, a streaming pipeline operates continuously as new records become available.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.1 Traditional ETL versus streaming ETL</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Traditional ETL:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Extract | v Transform | v Load | v Schedule next execution`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Streaming ETL:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Continuous Events | v Extract | v Transform | v Load | v New Events Continue Arriving`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.2 Example: Real-time order pipeline</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce company wants to capture all incoming orders and update its analytical platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The pipeline should:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receive order events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validate the records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Remove duplicates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Enrich customer information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate revenue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Store raw and processed events.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update real-time analytics.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Handle delayed and failed records.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.3 Streaming pipeline layers</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ingestion layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receives events from applications, databases, APIs, and external systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Technologies:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Connect.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Debezium.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Performs real-time computation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Technologies:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Structured Streaming.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka Streams.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storage layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stores the processed information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Technologies:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Iceberg.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Parquet.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amazon S3.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data warehouses.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serving layer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Makes the resulting data available for querying and applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Technologies:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Superset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Grafana.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ClickHouse.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Elasticsearch / OpenSearch.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.4 Streaming pipeline design</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source Applications</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders • Payments • Customers • Products</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Kafka Ingestion`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raw event topics</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Stream Processing Engine`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validation • Cleaning • Enrichment • Windowing • Aggregation</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Valid Events`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processed output</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Invalid Events`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DLQ / Quarantine</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytical Storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data lake • Warehouse • Serving database</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-Time Analytics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dashboards • Business intelligence • Alerts</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.5 Data quality in streaming pipelines</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Quality checks should happen before unreliable data affects downstream systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Validation</th>                  <th className="px-4 py-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Required-field validation</td>                  <td className="px-4 py-2.5 text-stone-700">order_id cannot be null</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Range validation</td>                  <td className="px-4 py-2.5 text-stone-700">Amount must be non-negative</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Schema validation</td>                  <td className="px-4 py-2.5 text-stone-700">Event must follow the expected schema</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Duplicate detection</td>                  <td className="px-4 py-2.5 text-stone-700">Event ID should not repeat</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Referential validation</td>                  <td className="px-4 py-2.5 text-stone-700">Customer must exist</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Timestamp validation</td>                  <td className="px-4 py-2.5 text-stone-700">Event timestamp must be valid</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Freshness monitoring</td>                  <td className="px-4 py-2.5 text-stone-700">Events should arrive within the expected delay</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For streaming systems, validation must also be designed for throughput and state usage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, deduplicating events forever requires unbounded memory or storage unless the system uses a defined retention or time horizon.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.6 Streaming data pipeline challenges</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data spikes: Incoming events may suddenly increase.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Backpressure: Downstream systems may process data more slowly than it arrives.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Late data: Events may arrive after their event-time window has closed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Duplicate records: Retries may cause repeated processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State growth: Aggregations and joins can accumulate large amounts of state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema changes: Producers may change event structures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sink failures: The destination database or storage system may become unavailable.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recovery: The pipeline must restart safely after failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A production streaming pipeline must be engineered to handle these problems, not just process the happy path.</p>
        </div>
      </section>

      {/* SECTION 21: 21. Real-Time Analytics Dashboards */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Building Streaming Data Pipelines</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Real-Time Analytics Dashboards
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-time dashboards present continuously updated operational or business information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They help decision-makers monitor what is happening in a system rather than waiting for scheduled reports.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.1 What is a real-time dashboard?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A real-time dashboard displays business metrics that are updated as new events are processed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example e-commerce dashboard:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total orders today.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue today.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders per minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment success rate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cancelled orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Top-selling products.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Active customers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inventory updates.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.2 Real-time dashboard architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Application Events | v Kafka Topics | v Stream Processing | v Window Aggregations | v Serving Database | v Dashboard Backend API | v React Dashboard`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The dashboard generally queries a serving database or backend API rather than trying to process the entire raw Kafka event stream itself.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.3 Why window aggregation matters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a dashboard needs to display order volume every minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of transferring every individual event to the frontend, the streaming engine can calculate:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Minute</th>                  <th className="px-4 py-3">Orders</th>                  <th className="px-4 py-3">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">10:00</td>                  <td className="px-4 py-2.5 text-stone-700">150</td>                  <td className="px-4 py-2.5 text-stone-700">₹2,50,000</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">10:01</td>                  <td className="px-4 py-2.5 text-stone-700">175</td>                  <td className="px-4 py-2.5 text-stone-700">₹3,10,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">10:02</td>                  <td className="px-4 py-2.5 text-stone-700">190</td>                  <td className="px-4 py-2.5 text-stone-700">₹3,50,000</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">10:03</td>                  <td className="px-4 py-2.5 text-stone-700">210</td>                  <td className="px-4 py-2.5 text-stone-700">₹4,00,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The dashboard retrieves the aggregated records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This reduces downstream processing and makes visualization more efficient.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.4 Important dashboard metrics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Revenue metrics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total revenue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Average order value.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue per minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue per product.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue per region.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transaction metrics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Successful payments.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failed payments.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Refunds.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactions per second.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Operational metrics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event ingestion rate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer lag.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failed events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pipeline availability.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.5 Technologies for real-time analytics</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Technology</th>                  <th className="px-4 py-3">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Apache Flink</td>                  <td className="px-4 py-2.5 text-stone-700">Streaming computation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Spark Structured Streaming</td>                  <td className="px-4 py-2.5 text-stone-700">Streaming analytics</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">ClickHouse</td>                  <td className="px-4 py-2.5 text-stone-700">Fast analytical queries</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">PostgreSQL</td>                  <td className="px-4 py-2.5 text-stone-700">Serving and operational data</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Redis</td>                  <td className="px-4 py-2.5 text-stone-700">Low-latency serving and caching</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Grafana</td>                  <td className="px-4 py-2.5 text-stone-700">Monitoring dashboards</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Apache Superset</td>                  <td className="px-4 py-2.5 text-stone-700">Business intelligence dashboards</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">React</td>                  <td className="px-4 py-2.5 text-stone-700">Custom frontend dashboard</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.6 Updating the frontend</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A custom React dashboard can receive updates through several mechanisms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Polling</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The frontend requests updated results at fixed intervals.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">setInterval(async () =&gt; &#123; const response = await fetch( "/api/analytics/revenue" ); const data = await response.json(); setRevenue(data); &#125;, 5000);</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is simple and suitable for many dashboards.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Server-Sent Events (SSE)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The backend pushes updates to the browser over a persistent HTTP connection.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful when the server mainly sends updates to the client.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">WebSockets</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Provides bidirectional communication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful when both clients and servers need to exchange continuous messages.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.7 Real-time dashboard design considerations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Refresh frequency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data freshness.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">API latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Query performance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical versus current metrics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Handling missing updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Time-zone representation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Correctness of window boundaries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Displaying provisional versus finalized results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A critical design principle is to distinguish between provisional aggregates that may still change and finalized aggregates that will no longer be revised under the application's late-event policy.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 6 — End-to-End Streaming Application
          </div>
        </div>
      </section>

      {/* SECTION 22: 22. Building an End-to-End Real-Time Streaming Application */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Part 6 · End-to-End Streaming Application</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Building an End-to-End Real-Time Streaming Application
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now let's combine everything learned so far.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">We will design a real-time e-commerce analytics application that consumes orders from Kafka and calculates revenue continuously.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.1 Project scenario</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce company that receives orders continuously.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Management wants a dashboard that displays:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue per minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue per product.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Average order value.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Active customers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Latest order activity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The platform needs to process events in real time.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.2 Architecture</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`E-commerce Order Generator`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Produces simulated order events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders topic • partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Structured Streaming</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parse • Validate • Watermark • Window Aggregation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Valid Orders</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytics calculations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Invalid Orders</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DLQ</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PostgreSQL</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregated analytical results</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dashboard API</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Expose metrics through REST or SSE</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-Time React Dashboard</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.3 Step 1 — Define the event schema</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each order event should contain:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "event_id": "EVT-10001", "order_id": 5001, "customer_id": 101, "product_id": 2001, "quantity": 2, "amount": 50000, "event_time": "2026-11-09T10:00:00Z" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use a stable event ID for deduplication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The event_time field represents when the business event occurred.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The amount is in INR paise in this example, avoiding fractional currency amounts in the event representation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.4 Step 2 — Build a Python event producer</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Install:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`pip install confluent-kafka
Create order_producer.py:
import json import uuid import random import time from datetime import datetime, timezone from confluent_kafka import Producer producer = Producer({ "bootstrap.servers": "localhost:9092", "acks": "all", "enable.idempotence": True }) def delivery_report(err, message): if err is not None: print("Delivery failed:", err) else: print( "Delivered:", message.partition(), message.offset() ) def generate_order(order_id): return { "event_id": str(uuid.uuid4()), "order_id": order_id, "customer_id": random.randint(100, 500), "product_id": random.randint(1000, 1010), "quantity": random.randint(1, 5), "amount": random.randint(10000, 100000), "event_time": datetime.now( timezone.utc ).isoformat() } order_id = 5001 try: while True: event = generate_order(order_id) producer.produce( topic="orders", key=str(event["product_id"]), value=json.dumps(event), callback=delivery_report ) producer.poll(0) order_id += 1 time.sleep(0.5) except KeyboardInterrupt: print("Producer stopped") finally: producer.flush(30)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This produces approximately two order events per second.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The example uses the product ID as a partition key. This means events for the same product can be routed consistently to the same partition, subject to the producer's partitioner.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.5 Step 3 — Read Kafka events using Spark</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The following Python program requires:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PySpark.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Kafka connector matching the Spark and Scala versions in use.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A running Kafka broker.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An existing orders topic.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create stream_processor.py:
from pyspark.sql import SparkSession from pyspark.sql.types import ( StructType, StructField, StringType, LongType, TimestampType ) from pyspark.sql.functions import ( col, from_json, window, sum, count, avg ) spark = ( SparkSession.builder .appName("RealtimeOrderAnalytics") .getOrCreate() ) spark.sparkContext.setLogLevel("WARN") schema = StructType([ StructField("event_id", StringType(), True), StructField("order_id", LongType(), True), StructField("customer_id", LongType(), True), StructField("product_id", LongType(), True), StructField("quantity", LongType(), True), StructField("amount", LongType(), True), StructField("event_time", TimestampType(), True) ]) # Read events from Kafka raw = ( spark.readStream .format("kafka") .option( "kafka.bootstrap.servers", "localhost:9092" ) .option("subscribe", "orders") .option("startingOffsets", "latest") .load() ) # Decode JSON parsed = ( raw .select( from_json( col("value").cast("string"), schema ).alias("data") ) .select("data.*") ) # Validate required fields valid_orders = parsed.filter( col("event_id").isNotNull() & col("order_id").isNotNull() & col("product_id").isNotNull() & col("amount").isNotNull() & (col("amount") >= 0) ) # Apply event-time watermark watermarked = valid_orders.withWatermark( "event_time", "2 minutes" ) # Calculate 1-minute revenue aggregated = ( watermarked .groupBy( window("event_time", "1 minute"), "product_id" ) .agg( count("*").alias("total_orders"), sum("amount").alias("total_revenue"), avg("amount").alias("average_order_value") ) ) # Output finalized windows query = ( aggregated.writeStream .outputMode("append") .format("console") .option("truncate", "false") .option( "checkpointLocation", "/data/checkpoints/realtime-orders" ) .start() ) query.awaitTermination()`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This application demonstrates:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka source integration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON parsing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Structured schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data validation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-time watermarking.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One-minute windowing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Grouped aggregations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpointing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Streaming output.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The example uses append mode so window results are emitted once the applicable event-time and watermark conditions finalize them. The result will not necessarily appear immediately after the first event; the watermark must progress sufficiently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a continuously refreshed dashboard showing intermediate values, you would use an update-capable design and sink.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.6 Step 4 — Understand the result</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The stream processor produces results conceptually like:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Product</th>                  <th className="px-4 py-3">Window</th>                  <th className="px-4 py-3">Orders</th>                  <th className="px-4 py-3">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1001</td>                  <td className="px-4 py-2.5 text-stone-700">10:00–10:01</td>                  <td className="px-4 py-2.5 text-stone-700">5</td>                  <td className="px-4 py-2.5 text-stone-700">₹2,50,000</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">1002</td>                  <td className="px-4 py-2.5 text-stone-700">10:00–10:01</td>                  <td className="px-4 py-2.5 text-stone-700">3</td>                  <td className="px-4 py-2.5 text-stone-700">₹1,25,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">1003</td>                  <td className="px-4 py-2.5 text-stone-700">10:01–10:02</td>                  <td className="px-4 py-2.5 text-stone-700">6</td>                  <td className="px-4 py-2.5 text-stone-700">₹3,40,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These numbers are illustrative.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your local output will depend on the generated events.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.7 Step 5 — Store output in PostgreSQL</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a production implementation, create an analytical table:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE product_revenue ( product_id BIGINT, window_start TIMESTAMP, window_end TIMESTAMP, total_orders BIGINT, total_revenue BIGINT, average_order_value DOUBLE PRECISION, PRIMARY KEY ( product_id, window_start, window_end ) );`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The primary key prevents duplicate window results from being inserted as separate logical rows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You can use a Spark foreachBatch sink to execute an upsert for each micro-batch.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`def write_to_postgres(batch_df, batch_id): if batch_df.isEmpty(): return # Write to a staging table. # Upsert into product_revenue using the # product_id and window boundaries. # Commit database changes safely. pass`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Then:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">query = ( aggregated.writeStream .outputMode("append") .foreachBatch(write_to_postgres) .option( "checkpointLocation", "/data/checkpoints/postgres-orders" ) .start() )</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The full implementation should use a database staging/upsert strategy and handle transaction failures, connection errors, and repeated batch execution. foreachBatch is at-least-once by default; batch IDs and idempotent writes can be used to prevent duplicate output effects.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark 4.3.0 Documentation</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.8 Step 6 — Create a dashboard</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The backend can expose an API:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">GET /api/analytics/product-revenue</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example response:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "product_id": 1001, "total_orders": 150, "total_revenue": 250000, "average_order_value": 1666.67, "window_start": "2026-11-09T10:00:00Z" }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A React frontend can use this information to display:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue cards.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders per minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Product performance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue charts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Latest window results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The frontend does not need to know about Kafka partitions or Spark executors. It consumes the prepared analytics API.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 7 — Practical Laboratories and Advanced Exercises
          </div>
        </div>
      </section>

      {/* SECTION 23: 23. Practical Laboratory 1 — Implement Different Window Types */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Part 7 · Practical Laboratories</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Practical Laboratory 1 — Implement Different Window Types
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hands-on exercise</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Understand how events are grouped using tumbling, sliding, and session windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dataset</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a CSV file containing:
user_id,event_type,event_time,amount 101,view,2026-11-09 10:00:05,0 101,click,2026-11-09 10:00:10,0 101,purchase,2026-11-09 10:00:30,1500 102,view,2026-11-09 10:01:05,0 102,purchase,2026-11-09 10:01:45,2500 101,click,2026-11-09 10:02:10,0 103,purchase,2026-11-09 10:03:15,3500`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Exercises</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Task 1 — Tumbling window</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate total revenue every minute.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Expected output:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Window</th>                  <th className="px-4 py-3">Revenue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">10:00–10:01</td>                  <td className="px-4 py-2.5 text-stone-700">₹1,500</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">10:01–10:02</td>                  <td className="px-4 py-2.5 text-stone-700">₹2,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:02–10:03</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">₹0</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">10:03–10:04</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">₹3,500</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Task 2 — Sliding window</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate total revenue for the previous two minutes, updating every minute.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Task 3 — Session window</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Group customer activity using a 10-minute inactivity gap.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Determine:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Number of sessions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events per session.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue per session.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Session duration.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Task 4 — Comparison</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Explain:`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Why events appear in multiple sliding windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Why tumbling windows never overlap.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Why session window durations are variable.</p>
        </div>
      </section>

      {/* SECTION 24: 24. Practical Laboratory 2 — Event Time and Watermarks */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500">Part 7 · Practical Laboratories</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Practical Laboratory 2 — Event Time and Watermarks
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Understand delayed and out-of-order event processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scenario</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An application receives:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Event</th>                  <th className="px-4 py-3">Event time</th>                  <th className="px-4 py-3">Arrival time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">A</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:05</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:06</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">B</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:10</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:11</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">C</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:08</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:15</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">D</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:20</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:21</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">E</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:03</td>                  <td className="px-4 py-2.5 text-stone-700">10:00:30</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Assume a watermark strategy with a two-minute out-of-order allowance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identify out-of-order events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Determine when an event becomes late relative to the watermark.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate the watermark using the maximum observed event time and the configured delay.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Determine which window contains each event.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Identify which events might be dropped.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement allowed lateness.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Route excessively late events into a separate output.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compare event-time and processing-time results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important: Watermarks are estimates of event-time progress. You must distinguish the time an event occurs from the time it arrives.</p>
        </div>
      </section>

      {/* SECTION 25: 25. Practical Laboratory 3 — Build Stateful Transaction Monitoring */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500">Part 7 · Practical Laboratories</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          25. Practical Laboratory 3 — Build Stateful Transaction Monitoring
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Develop a stateful streaming application for transaction monitoring.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scenario</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A banking application wants to identify customers making more than five transactions within a rolling five-minute period.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Customer 101 10:00:01 → ₹500 10:00:20 → ₹800 10:00:35 → ₹400 10:01:10 → ₹900 10:02:00 → ₹300 10:02:30 → ₹600`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application should detect when the customer exceeds the configured threshold.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Requirements</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use Kafka as the event source.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Group by customer ID.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use event-time processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintain customer-specific state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate transaction counts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement a five-minute window.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generate an alert when the threshold is exceeded.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Prevent duplicate alerts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Handle delayed transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpoint application state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Expected output</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ALERT: High Transaction Frequency Customer ID: 101 Transaction Count: 6 Window: 10:00–10:05 Status: Flagged</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a simplified transaction-frequency rule, not a complete fraud detection model.</p>
        </div>
      </section>

      {/* SECTION 26: 26. Practical Laboratory 4 — Apache Flink Streaming Application */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500">Part 7 · Practical Laboratories</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          26. Practical Laboratory 4 — Apache Flink Streaming Application
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Learn Flink SQL for real-time analytics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You can connect Flink to Kafka and build a streaming aggregation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 1 — Create the Kafka source table</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An illustrative Flink SQL definition:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`CREATE TABLE orders ( order_id BIGINT, customer_id BIGINT, product_id BIGINT, amount DECIMAL(12, 2), event_time TIMESTAMP(3), WATERMARK FOR event_time AS event_time - INTERVAL '2' MINUTE ) WITH ( 'connector' = 'kafka', 'topic' = 'orders', 'properties.bootstrap.servers' = 'localhost:9092', 'properties.group.id' = 'flink-orders', 'scan.startup.mode' = 'latest-offset', 'format' = 'json' );`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This configures:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka as the source.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON event parsing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-time extraction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A two-minute watermark delay.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Kafka SQL connector must be available in the Flink environment.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 2 — Create a tumbling-window aggregation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT window_start, window_end, product_id, COUNT(*) AS total_orders, SUM(amount) AS total_revenue FROM TABLE( TUMBLE( TABLE orders, DESCRIPTOR(event_time), INTERVAL '1' MINUTE ) ) GROUP BY window_start, window_end, product_id;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This calculates product revenue every minute.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 3 — Create a sliding-window aggregation</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT window_start, window_end, product_id, SUM(amount) AS revenue FROM TABLE( HOP( TABLE orders, DESCRIPTOR(event_time), INTERVAL '1' MINUTE, INTERVAL '5' MINUTES ) ) GROUP BY window_start, window_end, product_id;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This calculates five-minute revenue windows, moving forward every minute.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 4 — Create a stream sink</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For a simple learning exercise, you can use Flink's print connector to inspect results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For production, write to a supported Kafka, JDBC, filesystem, or other connector with an appropriate delivery guarantee.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 5 — Experiment</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increase the window duration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Change watermark delay.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generate out-of-order events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Observe late-event handling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increase processing parallelism.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Introduce a worker failure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examine checkpoints.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compare processing latency.</p>
        </div>
      </section>

      {/* SECTION 27: 27. Practical Laboratory 5 — End-to-End Streaming Capstone */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 27
          </span>
          <span className="text-xs font-mono text-stone-500">Part 7 · Practical Laboratories</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          27. Practical Laboratory 5 — End-to-End Streaming Capstone
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advanced project</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Project: Real-Time E-Commerce Analytics Platform</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build a real-time data engineering platform that collects and processes business events continuously and delivers updated analytical information to a dashboard.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Technology stack</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Component</th>                  <th className="px-4 py-3">Technology</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Programming</td>                  <td className="px-4 py-2.5 text-stone-700">Python</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Event ingestion</td>                  <td className="px-4 py-2.5 text-stone-700">Apache Kafka</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Event generation</td>                  <td className="px-4 py-2.5 text-stone-700">Python producers</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Data serialization</td>                  <td className="px-4 py-2.5 text-stone-700">JSON / Avro</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Schema management</td>                  <td className="px-4 py-2.5 text-stone-700">Schema Registry</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Streaming processing</td>                  <td className="px-4 py-2.5 text-stone-700">Apache Flink or Spark Structured Streaming</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Data storage</td>                  <td className="px-4 py-2.5 text-stone-700">PostgreSQL</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Historical storage</td>                  <td className="px-4 py-2.5 text-stone-700">Parquet</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Monitoring</td>                  <td className="px-4 py-2.5 text-stone-700">Prometheus and Grafana</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Backend</td>                  <td className="px-4 py-2.5 text-stone-700">FastAPI</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Dashboard</td>                  <td className="px-4 py-2.5 text-stone-700">React</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Required event streams</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create the following Kafka topics:`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders payments customers inventory shipments</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Functional requirements</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generate at least 100,000 order events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Publish events into Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement multiple topic partitions.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create multiple consumer groups.`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Process event-time data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement one-minute tumbling windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement five-minute sliding windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement customer session windows.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Configure watermarks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Handle out-of-order events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement late-event handling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintain customer-level transaction state.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Join order and payment streams.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate product-level revenue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement checkpointing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Demonstrate application recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement idempotent output writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Handle failed events.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Store analytical results in PostgreSQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build a real-time analytics dashboard.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Expected dashboard</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your dashboard should display:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-Time E-Commerce Analytics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Illustrative dashboard layout</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total orders</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">12,450</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">₹48.5L</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Active customers</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">3,250</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processed events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">100K</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Revenue per minute</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Creating chart</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing health</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Metric</th>                  <th className="px-4 py-3">Target</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Processing delay</td>                  <td className="px-4 py-2.5 text-stone-700">Under 2 sec</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Invalid events</td>                  <td className="px-4 py-2.5 text-stone-700">Monitored</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Consumer lag</td>                  <td className="px-4 py-2.5 text-stone-700">Monitored</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Checkpoint status</td>                  <td className="px-4 py-2.5 text-stone-700">Successful</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Late events</td>                  <td className="px-4 py-2.5 text-stone-700">Tracked</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Pipeline recovery</td>                  <td className="px-4 py-2.5 text-stone-700">Tested</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Illustrative dashboard design. Values are example data, not measurements from a running pipeline.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Performance experiments</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Run your pipeline with:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Test</th>                  <th className="px-4 py-3">Workers</th>                  <th className="px-4 py-3">Input events</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Test 1</td>                  <td className="px-4 py-2.5 text-stone-700">1</td>                  <td className="px-4 py-2.5 text-stone-700">100,000</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Test 2</td>                  <td className="px-4 py-2.5 text-stone-700">2</td>                  <td className="px-4 py-2.5 text-stone-700">100,000</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Test 3</td>                  <td className="px-4 py-2.5 text-stone-700">4</td>                  <td className="px-4 py-2.5 text-stone-700">100,000</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Test 4</td>                  <td className="px-4 py-2.5 text-stone-700">8</td>                  <td className="px-4 py-2.5 text-stone-700">100,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Record:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total processing time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Events per second.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Average processing latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Peak processing latency.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consumer lag.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State size.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpoint duration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Late-event count.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Failure recovery time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compare the results and explain why additional workers may or may not improve performance.</p>
        </div>
      </section>

      {/* SECTION 28: 28. Common Mistakes in Stream Processing (15 Production Pitfalls) */}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 28
          </span>
          <span className="text-xs font-mono text-stone-500">Part 8 · Common Mistakes in Stream Processing</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          28. Common Mistakes in Stream Processing (15 Production Pitfalls)
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understanding these mistakes will help you design better streaming applications.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</span>
            <span className="font-medium">Confusing event time and processing time.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An event may occur at 10:00 AM but be processed at 10:05 AM.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</span>
            <span className="font-medium">Assuming all incoming events arrive in chronological order.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed networks and applications can produce delayed and out-of-order records.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</span>
            <span className="font-medium">Using incorrect window types.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tumbling windows, sliding windows, and session windows represent different business questions.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</span>
            <span className="font-medium">Setting watermarks too aggressively.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A short watermark delay may cause legitimate late records to be discarded.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">5</span>
            <span className="font-medium">Setting watermarks too conservatively.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An excessive delay can increase result latency and retained state.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">6</span>
            <span className="font-medium">Ignoring state growth.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unbounded aggregations and joins can accumulate state indefinitely without cleanup.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">7</span>
            <span className="font-medium">Forgetting checkpointing.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A long-running streaming application needs a reliable recovery strategy.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">8</span>
            <span className="font-medium">Assuming exactly-once processing automatically covers external systems.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A streaming engine's internal processing guarantee does not guarantee exactly-once effects in every database or API.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">9</span>
            <span className="font-medium">Ignoring consumer lag.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A pipeline can be running but continuously falling behind.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">10</span>
            <span className="font-medium">Assuming more workers always improve performance.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition limits, network shuffling, state management, and resource bottlenecks can restrict scaling.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">11</span>
            <span className="font-medium">Using real-time dashboards without aggregation.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sending every raw event to the frontend can create unnecessary API traffic and rendering overhead.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">12</span>
            <span className="font-medium">Ignoring late-event business rules.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Some applications must correct historical results instead of simply dropping late events.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">13</span>
            <span className="font-medium">Confusing streaming with event ingestion.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ingesting data into Kafka is not the same as performing stream transformations, windowing, joins, and analytics.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">14</span>
            <span className="font-medium">Ignoring sink guarantees.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A perfectly functioning processor can still create duplicate or missing destination records if the output mechanism is not designed correctly.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">15</span>
            <span className="font-medium">Using the legacy DStreams API for new Spark projects.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Prefer Structured Streaming for new Spark streaming applications.</p>
        </div>
      </section>

      {/* SECTION 29: 29. Important Interview Questions and Answers (35 Q&As) */}
      <section id="section-29" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 29
          </span>
          <span className="text-xs font-mono text-stone-500">Part 9 · Interview Questions &amp; Answers</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          29. Important Interview Questions and Answers (35 Q&amp;As)
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These questions cover stream processing, event-time semantics, Flink, Spark Structured Streaming, and real-time analytics.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q1. What is stream processing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing is the continuous processing and analysis of incoming events as data is generated, allowing systems to produce results with low latency.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q2. What is the difference between batch and stream processing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch processing handles finite collected datasets at scheduled intervals. Stream processing handles continuously arriving records and updates results incrementally.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q3. What is a bounded dataset?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A bounded dataset has a finite number of records and a known or discoverable end, such as a CSV file.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q4. What is an unbounded dataset?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An unbounded dataset continuously grows as new records arrive, such as real-time payment events.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q5. What is event time?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event time is the time when an event actually occurred at its source.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q6. What is processing time?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing time is the time when a stream processing engine actually processes an event, using the clock of the executing machine.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q7. What is ingestion time?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ingestion time records when data enters an ingestion system or processing infrastructure.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q8. What is windowing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Windowing divides an unbounded stream into logical groups based on time, count, or other conditions so that aggregations and analysis can be performed.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q9. What is a tumbling window?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A tumbling window divides records into fixed-size, non-overlapping intervals.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q10. What is a sliding window?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A sliding window uses a fixed duration and a smaller movement interval. Windows can overlap, and an event can belong to multiple windows.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q11. What is a session window?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A session window groups events based on periods of activity separated by configured inactivity gaps.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q12. What is a watermark?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A watermark is an indicator of event-time progress that helps a streaming engine determine when event-time operations can be completed and when old state can be cleaned up.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q13. What is the difference between an out-of-order event and a late event?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An out-of-order event arrives in a different sequence from its event timestamp. A late event arrives after the processing system's watermark has already passed its event timestamp.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q14. How do you handle late-arriving events?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use watermarks, allowed lateness, side outputs, correction mechanisms, or reconciliation depending on business requirements.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q15. What is stateful stream processing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stateful processing maintains information from previous events to calculate future results, such as per-customer spending or rolling transaction counts.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q16. What is a stream-stream join?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A stream-stream join combines two continuously updating datasets, commonly using a key and a defined time constraint to manage state.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q17. What is a stream-static join?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A stream-static join enriches incoming events using a relatively static reference dataset.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q18. What is checkpointing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpointing periodically saves processing state and progress so that the application can recover after failures.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q19. What is exactly-once processing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exactly-once processing aims to ensure that each event produces one logical processing effect within a defined system boundary, using mechanisms such as transactional writes and checkpointing.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q20. What is Apache Flink?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Flink is a distributed processing engine designed for stateful stream and batch processing, with advanced support for event time, watermarks, and fault tolerance.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q21. What are JobManager and TaskManager in Flink?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The JobManager coordinates and schedules distributed jobs. TaskManagers execute the actual tasks and operators.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q22. What are task slots?</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Task slots are the units of resource scheduling within Flink TaskManagers.</span>
          </h3>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q23. What is Spark Structured Streaming?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is Spark's modern streaming engine that allows developers to process continuous data using DataFrame, Dataset, and SQL abstractions.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q24. What is micro-batch processing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Micro-batch processing divides incoming streaming records into small batches and processes each batch incrementally.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q25. What are the differences between Flink and Spark Structured Streaming?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Flink is designed around continuous, stateful stream processing. Spark Structured Streaming integrates streaming with Spark's broader SQL and batch-processing ecosystem and traditionally uses micro-batches by default. Spark's newer Real-time Mode adds lower-latency execution options.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q26. Why is a watermark important?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It allows the processing engine to estimate when a time window can be finalized while accounting for delayed and out-of-order events.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q27. What is the difference between checkpointing and savepoints in Flink?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Checkpoints support automatic recovery during normal operation. Savepoints are user-managed snapshots used for controlled upgrades, migration, and planned recovery.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q28. How does Spark recover a failed streaming application?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark uses checkpoint information to recover query progress and state and to resume from the appropriate source positions, subject to source and sink guarantees.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q29. What is the Lambda architecture?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lambda architecture combines a batch-processing layer, a streaming speed layer, and a serving layer to provide historical and low-latency results.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q30. What is the Kappa architecture?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kappa architecture uses a streaming-first processing path and can replay historical events through the same stream processing application.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q31. How do you detect fraud using stream processing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consume transaction events, partition or group by customer or account, maintain recent transaction state, evaluate frequency and amount patterns, and generate alerts when risk rules are triggered.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q32. What is state TTL?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">State Time-To-Live is a mechanism for expiring state entries after a defined period or under configured cleanup conditions.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q33. What is the difference between event-time and processing-time windowing?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Event-time windows group records based on when events occurred. Processing-time windows group records according to when the processing system handled them.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q34. What causes high consumer lag?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Possible causes include an increased producer rate, slow processing logic, insufficient parallelism, blocked downstream services, or consumer failures.</p>
          <div className="mt-4 p-3.5 rounded-xl bg-stone-100/90 border border-stone-300 font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-orange-500 text-white text-xs font-black">Q</span>
            <span>Q35. How would you build a real-time analytics dashboard?</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">I would ingest events into Kafka, process them with Flink or Spark Structured Streaming, calculate windowed metrics, persist the results into a serving database, expose them through APIs or server-push mechanisms, and build the dashboard using a visualization framework.</p>
        </div>
      </section>

      {/* SECTION 30: 30. Recommended Learning Resources */}
      <section id="section-30" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 30
          </span>
          <span className="text-xs font-mono text-stone-500">Part 10 · Recommended Learning Resources</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          30. Recommended Learning Resources
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These official resources provide practical documentation for learning stream processing.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Technology / Resource</th>                  <th className="px-4 py-3">What to learn</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Apache Flink — <a href="https://nightlies.apache.org/flink/flink-docs-stable/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Official documentation</a></td>                  <td className="px-4 py-2.5 text-stone-700">Distributed stream processing, state, windows and watermarks</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://nightlies.apache.org/flink/flink-docs-stable/docs/concepts/time/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Flink: Timely Stream Processing</a></td>                  <td className="px-4 py-2.5 text-stone-700">Event time, processing time and watermarks</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://nightlies.apache.org/flink/flink-docs-stable/docs/dev/datastream/operators/windows/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Flink: Windows</a></td>                  <td className="px-4 py-2.5 text-stone-700">Tumbling, sliding and session windows</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://nightlies.apache.org/flink/flink-docs-stable/ops/state/checkpoints.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Flink: Checkpointing</a></td>                  <td className="px-4 py-2.5 text-stone-700">State recovery and checkpoints</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Apache Spark — <a href="https://spark.apache.org/docs/latest/streaming/index.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Structured Streaming</a></td>                  <td className="px-4 py-2.5 text-stone-700">Streaming APIs and incremental computation</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://spark.apache.org/docs/latest/streaming/apis-on-dataframes-and-datasets.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Spark: DataFrames and Datasets</a></td>                  <td className="px-4 py-2.5 text-stone-700">Watermarks, joins, windows and output modes</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700"><a href="https://spark.apache.org/docs/latest/streaming/real-time-mode.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Spark: Real-time Mode</a></td>                  <td className="px-4 py-2.5 text-stone-700">Newer low-latency execution</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Apache Kafka — <a href="https://kafka.apache.org/documentation/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Official documentation</a></td>                  <td className="px-4 py-2.5 text-stone-700">Event ingestion and streaming infrastructure</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Apache Kafka Streams — <a href="https://kafka.apache.org/44/streams/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Official documentation</a></td>                  <td className="px-4 py-2.5 text-stone-700">Embedded stream processing</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Apache Beam — <a href="https://beam.apache.org/documentation/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline font-medium inline-flex items-center gap-1">Official documentation</a></td>                  <td className="px-4 py-2.5 text-stone-700">Unified programming model for batch and streaming</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A particularly valuable subject to study alongside this module is the [Streaming Systems](https://www.oreilly.com/library/view/streaming-systems/9781491983867/?utm_source=chatgpt.com) book by Tyler Akidau and co-authors. It provides deeper explanations of event time, watermarks, windowing, and correctness in unbounded data processing.</p>
        </div>
      </section>

      {/* SECTION 31: 31. Final Revision — Module 17 (26-Topic Matrix) */}
      <section id="section-31" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 31
          </span>
          <span className="text-xs font-mono text-stone-500">Synthesis · Comprehensive Revision</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          31. Final Revision — Module 17 (26-Topic Matrix)
        </h2>
        <div className="space-y-3">
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Topic</th>                  <th className="px-4 py-3">What you should understand</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Stream Processing</td>                  <td className="px-4 py-2.5 text-stone-700">Continuous processing of incoming events</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Batch vs Streaming</td>                  <td className="px-4 py-2.5 text-stone-700">Scheduled versus continuous processing</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Bounded Datasets</td>                  <td className="px-4 py-2.5 text-stone-700">Finite datasets</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Unbounded Datasets</td>                  <td className="px-4 py-2.5 text-stone-700">Continuously growing datasets</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Real-Time Architecture</td>                  <td className="px-4 py-2.5 text-stone-700">Sources, ingestion, processing and serving</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Event Time</td>                  <td className="px-4 py-2.5 text-stone-700">When the event occurred</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Processing Time</td>                  <td className="px-4 py-2.5 text-stone-700">When the event was processed</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Windowing</td>                  <td className="px-4 py-2.5 text-stone-700">Grouping events into logical intervals</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Tumbling Windows</td>                  <td className="px-4 py-2.5 text-stone-700">Fixed non-overlapping windows</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Sliding Windows</td>                  <td className="px-4 py-2.5 text-stone-700">Overlapping windows</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Session Windows</td>                  <td className="px-4 py-2.5 text-stone-700">Activity-based windows</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Watermarks</td>                  <td className="px-4 py-2.5 text-stone-700">Event-time progress tracking</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Out-of-Order Events</td>                  <td className="px-4 py-2.5 text-stone-700">Events arriving in a different timestamp order</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Late-Arriving Events</td>                  <td className="px-4 py-2.5 text-stone-700">Events arriving after watermark progress</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Stateful Processing</td>                  <td className="px-4 py-2.5 text-stone-700">Maintaining state between events</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Stream Aggregations</td>                  <td className="px-4 py-2.5 text-stone-700">Calculating metrics continuously</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Stream Joins</td>                  <td className="px-4 py-2.5 text-stone-700">Combining multiple streams</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Checkpointing</td>                  <td className="px-4 py-2.5 text-stone-700">Saving state for recovery</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Exactly-Once</td>                  <td className="px-4 py-2.5 text-stone-700">Controlling duplicate effects</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Apache Flink</td>                  <td className="px-4 py-2.5 text-stone-700">Stateful distributed processing engine</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Spark Structured Streaming</td>                  <td className="px-4 py-2.5 text-stone-700">Unified Spark streaming framework</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Micro-batches</td>                  <td className="px-4 py-2.5 text-stone-700">Processing small groups of streaming records</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Real-Time Mode</td>                  <td className="px-4 py-2.5 text-stone-700">Lower-latency Spark execution</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">Streaming Pipelines</td>                  <td className="px-4 py-2.5 text-stone-700">Continuous ETL and event processing</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-2.5 text-stone-700">Real-Time Dashboards</td>                  <td className="px-4 py-2.5 text-stone-700">Continuously updated business analytics</td>
                </tr>
                <tr className="bg-[#fcfbf9]">
                  <td className="px-4 py-2.5 text-stone-700">End-to-End Applications</td>                  <td className="px-4 py-2.5 text-stone-700">Complete streaming system implementation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 32: 32. How Module 17 Connects to Your Data Engineering Roadmap */}
      <section id="section-32" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono">
            Section 32
          </span>
          <span className="text-xs font-mono text-stone-500">Synthesis · Curriculum Progression</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          32. How Module 17 Connects to Your Data Engineering Roadmap
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 14 — Data Quality, Testing, Metadata and Lineage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ensure data is trustworthy</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 15 — Distributed Systems</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understand scalability, coordination and recovery</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 16 — Event-Driven Architecture and Apache Kafka</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ingest and distribute events</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 17 — Stream Processing and Real-Time Analytics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Current module</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transform, aggregate and analyze events continuously</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Advanced Data Engineering</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Streaming ETL • Data lakes • Real-time warehouses • Production analytics</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The most important takeaway: Stream processing is not simply consuming messages continuously. It is about producing correct results from continuously changing data while handling event-time differences, delayed events, state, windowing, failures, and recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A good data engineer should understand not only how to process an event but also how to determine which time period it belongs to, whether its result is final, how to recover previous state, and how to deliver correct analytics to downstream systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 17 complete</p>
        </div>
      </section>

    </div>
  );
}
