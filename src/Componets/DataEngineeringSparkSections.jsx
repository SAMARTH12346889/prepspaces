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

export default function DataEngineeringSparkSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 11: Distributed Data Processing with Apache Spark Overview */}
      <section id="overview" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Roadmap
          </span>
          <span className="text-xs font-mono text-stone-500">Course Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 11: Distributed Data Processing with Apache Spark Overview
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 11 — Distributed Data Processing with Apache Spark</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Engineering Master Course · Advanced Data Processing</p>
        </div>
      </section>

      {/* SECTION 1: 1. Introduction: What is distributed data processing? */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">Distributed Fundamentals</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction: What is distributed data processing?
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed data processing is the technique of processing large amounts of data by dividing the work across multiple computers instead of relying on a single machine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce company that stores information about 500 million customer orders. It wants to calculate:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Total revenue generated every day.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Most frequently purchased products.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Average order value in each country.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customers who have not purchased anything in the last six months.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Products with the highest return rates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A normal computer may struggle to process this data because of limited memory, CPU capacity, and storage. Even if the computer can process it, the operation may take too long.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed computing solves this problem by allowing multiple computers to work together.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.1 Understanding a single-machine approach</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a company has a dataset containing 100 GB of sales records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In a single-machine architecture:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The dataset is stored on one computer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The computer reads the records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its CPU performs the calculations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its memory holds the data being processed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The final results are generated.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Data Mining Lecture_1.pptx</span>
            <a href="https://images.openai.com/static-rsc-4/_w5TIuSCJCH6YTk0KNB_ZnYIo_RwgRYMP0wvhUzR38fGGA86bPKhSWGiXcJJjkhksoMYQZqYmfMGYYxtr-oFb0Lu3EPFFU_YSkhMIUuhCUM3gHJ9mAE6T5MDwKf1E3PKUIh1tvgQic-N3dg79j3qVMrf--IHsELEvjsYLidi0lw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">slideshare.net</span>
            <a href="https://www.slideshare.net/slideshow/data-mining-lecture1pptx/261371038?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The problem is that one machine has limited resources. Adding more data increases the workload, and eventually the machine may run out of memory or take an impractical amount of time.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.2 Understanding distributed processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of processing all 100 GB on one machine, divide the dataset into smaller partitions and distribute them across several machines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Machine</th><th className="px-4 py-3">Assigned data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Worker 1</td><td className="px-4 py-2.5 text-stone-700">20 GB</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Worker 2</td><td className="px-4 py-2.5 text-stone-700">20 GB</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Worker 3</td><td className="px-4 py-2.5 text-stone-700">20 GB</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Worker 4</td><td className="px-4 py-2.5 text-stone-700">20 GB</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Worker 5</td><td className="px-4 py-2.5 text-stone-700">20 GB</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Total</td><td className="px-4 py-2.5 text-stone-700">100 GB</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Each worker processes its assigned data, and the system combines the partial results.</td><td className="px-4 py-2.5 text-stone-700">[Pandas DataFrame vs. Spark DataFrame: When Parallel Computing Matters | by Kevin C Lee | TDS Archive | Medium](https://images.openai.com/static-rsc-4/MEkCgeBsLF4hU1M21tiUyY2NIDGrbcte4HJADWrun5ms7IuOqJ5wwoKlkhxddAc0Oqb6W6mAgEZBTn_nbZ2ijKPqkvW9XFU8nW_CFYAWlxwAyuHL3WkJVO6E9G3v1Huoaj5W_eGRSLq-NdyMjTqieYYIjNflqJgCf3nksu_P6Yg?purpose=inline)</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">[medium.com](https://medium.com/data-science/parallelize-pandas-dataframe-computations-w-spark-dataframe-bba4c924487c?utm_source=chatgpt.com)</td><td className="px-4 py-2.5 text-stone-700">This approach allows a large processing task to be divided into smaller tasks that can execute in parallel.</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">The important idea is:</td><td className="px-4 py-2.5 text-stone-700">Instead of making one computer do more work, distributed processing allows multiple computers to share the workload.</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1.3 Important concepts in distributed computing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cluster: A group of connected computers working together as one computing system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Node: An individual computer in the cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker node: A machine that performs the actual data-processing work.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parallel processing: Performing multiple operations at the same time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition: A logical portion of a dataset that can be processed separately.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fault tolerance: The ability of a distributed system to recover from certain machine or task failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scalability: The ability to handle increasing workloads by adding resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data locality: Processing data close to where it is stored to reduce unnecessary data movement.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These concepts form the foundation of Apache Spark.</p>
        </div>
      </section>

      {/* SECTION 2: 2. Big Data Processing Fundamentals */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">5 Vs &amp; Scaling</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. Big Data Processing Fundamentals
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Big Data refers to datasets whose size, speed, or complexity makes traditional data-processing approaches difficult to use efficiently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is not simply about having a large database. It is about the challenges associated with storing, processing, transferring, and analyzing data.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.1 The 5 Vs of Big Data</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">What is Big Data?. “The world is one big data problem.”… | by Tech in 3 | Nerd For Tech | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/XdGFqo9MAbhZOsEDyhnurvCchHMtk4j9y6KwLKVVlnP_ny7ANKY7rOHCwsXn-4Dw-47dwlEyq1DuVF6iDcFGa17u5ZMZYXmjKRtkAJ-kFdmCZXeQNiYdJlXZLMZfljMPDC_k6WoUzqXYu3WjN5XBRbI2i72o-jEMMHzIxq2C-gQ?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/nerd-for-tech/what-is-big-data-6c47407bfbe5?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Concept</th><th className="px-4 py-3">Explanation</th><th className="px-4 py-3">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Volume</td><td className="px-4 py-2.5 text-stone-700">Amount of data generated and stored</td><td className="px-4 py-2.5 text-stone-700">100 TB of transaction records</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Velocity</td><td className="px-4 py-2.5 text-stone-700">Speed at which data is generated and processed</td><td className="px-4 py-2.5 text-stone-700">Real-time payment events</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Variety</td><td className="px-4 py-2.5 text-stone-700">Different data formats and structures</td><td className="px-4 py-2.5 text-stone-700">JSON, CSV, images, logs</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Veracity</td><td className="px-4 py-2.5 text-stone-700">Data accuracy and reliability</td><td className="px-4 py-2.5 text-stone-700">Duplicate or incomplete customer records</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Value</td><td className="px-4 py-2.5 text-stone-700">Useful information obtained from data</td><td className="px-4 py-2.5 text-stone-700">Identifying profitable products</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Consider a video-streaming platform.</td><td className="px-4 py-2.5 text-stone-700">It generates millions of events when users watch videos, search for content, pause playback, or change subscriptions. The platform needs to store and analyze those events to understand user behavior.</td><td className="px-4 py-2.5 text-stone-700">A distributed data-processing platform helps process these large volumes of information.</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.2 Types of Big Data processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are three important processing approaches.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A. Batch processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch processing works on a collection of data accumulated over a period.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Every night, an e-commerce company processes the day's transactions and generates a revenue report.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Typical characteristics:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processes large collections of records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Runs periodically or when a batch is available.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suitable for historical analysis.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Usually optimized for throughput rather than immediate response.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">B. Stream processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing continuously processes incoming events as they arrive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: A payment platform detects suspicious transactions while customers are making payments.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Typical characteristics:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processes continuously arriving data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Supports low-latency processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful for monitoring and real-time analytics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Requires handling event ordering, late events, and failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">C. Micro-batch processing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Micro-batch processing divides an incoming stream into small batches and processes each batch frequently.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a system might process incoming events every few seconds.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Spark Structured Streaming supports stream-processing applications using its DataFrame-based processing model.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2.3 Horizontal vs vertical scaling</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are two common ways to increase computing capacity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Vertical scaling (scale up):</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increase the resources of one machine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increase RAM from 16 GB to 128 GB.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Upgrade from 8 CPU cores to 32 CPU cores.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Add faster storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Horizontal scaling (scale out):</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Add more machines to the cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Start with 3 worker machines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increase to 10 workers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Later increase to 50 workers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed frameworks such as Apache Spark are designed to take advantage of horizontal scaling, although actual performance depends on data movement, coordination overhead, and the workload.</p>
        </div>
      </section>

      {/* SECTION 3: 3. Hadoop Ecosystem Overview */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">Ecosystem Comparison</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. Hadoop Ecosystem Overview
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Before understanding Apache Spark, it is important to understand Hadoop because it introduced many of the foundational ideas used in distributed Big Data systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.1 What is Apache Hadoop?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Hadoop is an open-source framework designed to store and process very large datasets across clusters of computers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Traditional databases generally rely on a centralized database server or a managed database cluster. Hadoop introduced an architecture in which data could be distributed across many inexpensive machines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hadoop is built around four major components.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">The Complete Guide to Apache Hadoop in 2025: Mastering Big Data’s Most Powerful Framework | by Swabhab Swarup Panigrahi | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/6RtjSwBJ0vNsy89fmSMnFU3kiizKX68srO-lz77kKadML0CcsgYbwULCCJKaW-BBPIXdA5sBi7QDxZfjFMKCP6IzH-uWLN5yYD9Mu6oM9PvlRvA2b6jehCykqkYtwsYT63tmX5WkyZuf5y36v_JglAEEaSMqw0H0rsbnZwD0UbA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40swabhab.panigrahi/the-complete-guide-to-apache-hadoop-in-2025-mastering-big-datas-most-powerful-framework-b8d7dc122723?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Hadoop Distributed File System (HDFS)</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS provides distributed storage. It divides large files into blocks and distributes those blocks across multiple machines.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. Hadoop YARN (Yet Another Resource Negotiator)</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">YARN manages cluster resources and schedules applications. It decides which resources are available for applications running on the cluster.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Hadoop MapReduce</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MapReduce is a distributed programming model used to process large datasets through Map and Reduce operations.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>4. Hadoop Common</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hadoop Common provides shared libraries and utilities required by the other Hadoop components.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.2 How Hadoop components work together</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a company has 10 TB of customer transaction records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The company wants to calculate the total revenue generated by every product.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The workflow looks like this:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The company stores transaction files in HDFS.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS distributes file blocks across the cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">YARN allocates computing resources for the processing application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MapReduce processes the data through Map and Reduce operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The final output is written back to distributed storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This separation of storage, resource management, and processing makes Hadoop suitable for large-scale workloads.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.3 Other technologies in the Hadoop ecosystem</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Several technologies developed around Hadoop for different Big Data requirements.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Technology</th><th className="px-4 py-3">Main purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Apache Hive</td><td className="px-4 py-2.5 text-stone-700">SQL-based data warehousing</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Apache HBase</td><td className="px-4 py-2.5 text-stone-700">Distributed NoSQL database</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Apache Pig</td><td className="px-4 py-2.5 text-stone-700">High-level data processing language</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Apache Sqoop</td><td className="px-4 py-2.5 text-stone-700">Historical bulk transfer between relational databases and Hadoop</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Apache Flume</td><td className="px-4 py-2.5 text-stone-700">Historical distributed log collection</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Apache Oozie</td><td className="px-4 py-2.5 text-stone-700">Hadoop workflow scheduling</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Apache ZooKeeper</td><td className="px-4 py-2.5 text-stone-700">Distributed coordination</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Apache Kafka</td><td className="px-4 py-2.5 text-stone-700">Distributed event streaming (commonly used alongside Hadoop)</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Apache Spark</td><td className="px-4 py-2.5 text-stone-700">Distributed data processing engine</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3.4 Hadoop vs Apache Spark</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An important distinction is that Hadoop is an ecosystem, whereas Spark is a distributed data processing engine.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th><th className="px-4 py-3">Hadoop MapReduce</th><th className="px-4 py-3">Apache Spark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Processing</td><td className="px-4 py-2.5 text-stone-700">Primarily disk-oriented MapReduce</td><td className="px-4 py-2.5 text-stone-700">General distributed execution engine</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Intermediate data</td><td className="px-4 py-2.5 text-stone-700">Commonly written to disk</td><td className="px-4 py-2.5 text-stone-700">Can keep reusable data in memory</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Programming</td><td className="px-4 py-2.5 text-stone-700">Map and Reduce stages</td><td className="px-4 py-2.5 text-stone-700">RDD, DataFrame, Dataset and SQL APIs</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">SQL</td><td className="px-4 py-2.5 text-stone-700">Commonly through Hive</td><td className="px-4 py-2.5 text-stone-700">Spark SQL</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Machine learning</td><td className="px-4 py-2.5 text-stone-700">Separate ecosystem tools</td><td className="px-4 py-2.5 text-stone-700">MLlib</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Streaming</td><td className="px-4 py-2.5 text-stone-700">Separate frameworks</td><td className="px-4 py-2.5 text-stone-700">Structured Streaming</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Iterative workloads</td><td className="px-4 py-2.5 text-stone-700">Higher disk overhead</td><td className="px-4 py-2.5 text-stone-700">Can reuse cached data</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Storage dependency</td><td className="px-4 py-2.5 text-stone-700">Often used with HDFS</td><td className="px-4 py-2.5 text-stone-700">Supports HDFS, cloud storage and other sources</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4: 4. MapReduce Programming Model */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">Map, Shuffle &amp; Reduce</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. MapReduce Programming Model
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MapReduce is one of the foundational programming models for large-scale distributed data processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It divides a large processing problem into two major operations:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Map</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reduce</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a dataset containing customer purchases:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Customer</th><th className="px-4 py-3">Product</th><th className="px-4 py-3">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">C101</td><td className="px-4 py-2.5 text-stone-700">Laptop</td><td className="px-4 py-2.5 text-stone-700">50000</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">C102</td><td className="px-4 py-2.5 text-stone-700">Mobile</td><td className="px-4 py-2.5 text-stone-700">20000</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">C103</td><td className="px-4 py-2.5 text-stone-700">Laptop</td><td className="px-4 py-2.5 text-stone-700">60000</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">C104</td><td className="px-4 py-2.5 text-stone-700">Mobile</td><td className="px-4 py-2.5 text-stone-700">15000</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">C105</td><td className="px-4 py-2.5 text-stone-700">Laptop</td><td className="px-4 py-2.5 text-stone-700">45000</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.1 Understanding the Map operation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Map operation reads individual records and transforms them into key-value pairs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Input:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">C101, Laptop, 50000 C102, Mobile, 20000 C103, Laptop, 60000 C104, Mobile, 15000 C105, Laptop, 45000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Map output:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">(Laptop, 50000) (Mobile, 20000) (Laptop, 60000) (Mobile, 15000) (Laptop, 45000)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Map operation converts the original records into a structure that is easier to aggregate.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.2 Understanding Shuffle and Sort</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After the Map operation, the framework groups records having the same key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This process is known as Shuffle and Sort.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Before grouping:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">(Laptop, 50000) (Mobile, 20000) (Laptop, 60000) (Mobile, 15000) (Laptop, 45000)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After grouping:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Laptop → [50000, 60000, 45000] Mobile → [20000, 15000]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffle moves intermediate records between machines so that values associated with the same key reach the same reducer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This operation can involve significant network communication and disk I/O.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.3 Understanding the Reduce operation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Reduce operation combines values associated with each key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Laptop → [50000, 60000, 45000] Mobile → [20000, 15000]</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reducer calculations:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Laptop = 50000 + 60000 + 45000 = 155000 Mobile = 20000 + 15000 = 35000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Final output:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Product</th><th className="px-4 py-3">Total sales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Laptop</td><td className="px-4 py-2.5 text-stone-700">155,000</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Mobile</td><td className="px-4 py-2.5 text-stone-700">35,000</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">[Hadoop Performance Analysis Model with Deep Data Locality | MDPI](https://images.openai.com/static-rsc-4/D8paWUnU0C2-jNfldyLk4pZF-5_B01xSgep9h2d85Piq-z_pXlR-DaoyXuIKsRRbFZt3yUM1rgI2QnjhPgNOO9WFQwB3Edl5Y6XOplPsPjcXiawSdSxWHTbM3hP0aWnSuY1v94HjVRYAT-_v6lLMfruGozGNWsuvXHFe_d58xWc?purpose=inline)</td><td className="px-4 py-2.5 text-stone-700">[mdpi.com](https://www.mdpi.com/2078-2489/10/7/222?utm_source=chatgpt.com)</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.4 Complete MapReduce execution flow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A typical MapReduce application follows this execution sequence:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Input files are stored in HDFS.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Input data is divided into input splits.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Map tasks process individual splits.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mapper outputs intermediate key-value pairs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An optional Combiner performs local aggregation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The partitioner determines which reducer receives each key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffle transfers intermediate records to reducers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sort and grouping organize data by key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reducers perform the final aggregation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Results are written to output storage.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.5 What is a Combiner?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Combiner performs partial aggregation on the mapper side before data is transferred across the network.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, suppose one mapper processes:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Laptop → 50000 Laptop → 60000 Laptop → 45000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without a Combiner, all three records may be transferred to the reducer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">With a suitable Combiner:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Laptop → 155000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Only the partial total needs to be transferred.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This reduces network traffic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Combiner is an optimization, not a guaranteed execution step. It is only appropriate when the operation has valid partial aggregation semantics.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4.6 Limitations of MapReduce</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Despite its importance, traditional Hadoop MapReduce has limitations:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Intermediate processing frequently involves disk writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Iterative calculations can be expensive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Complex pipelines require multiple MapReduce jobs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Repeated data access increases execution overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Developing complicated workflows can be cumbersome.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These limitations helped motivate the development and adoption of Apache Spark.</p>
        </div>
      </section>

      {/* SECTION 5: 5. Hadoop Distributed File System (HDFS) */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">Distributed Storage</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. Hadoop Distributed File System (HDFS)
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS is a distributed file system designed to store extremely large files across multiple machines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of storing an entire file on one machine, HDFS divides the file into blocks and distributes those blocks across DataNodes.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.1 HDFS architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS primarily consists of two types of components.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">An Overview of HDFS: NameNodes and DataNodes - Analytics Vidhya</span>
            <a href="https://images.openai.com/static-rsc-4/S0bDK0m6Ddy17lwAQV6guEXeYjYvxy0dagU_d8lR9jQgQg9zf96VdQih9p-2lFOvtBrl6D6kjqETFU3j_9DY_Ad4HUdk2Qw04vgxk67lqvj0T3kNIfvUjX94juclVmXA25j0HOwmRpriMrJm0ASQuopCHEIM2sDcaFyNtXrAErc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">analyticsvidhya.com</span>
            <a href="https://www.analyticsvidhya.com/blog/2022/04/an-overview-of-hdfs-namenodes-and-datanodes/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">NameNode</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The NameNode is responsible for managing the file system's metadata.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its responsibilities include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Managing file and directory namespaces.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Keeping track of file permissions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tracking which blocks belong to each file.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintaining the locations of blocks across DataNodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coordinating metadata operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The NameNode generally does not store the actual user file contents.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DataNode</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DataNodes store the actual data blocks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Their responsibilities include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storing file blocks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serving read and write requests.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reporting their health and block information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replicating blocks as instructed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Participating in data recovery.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.2 Understanding HDFS block storage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a company uploads a 500 MB file into HDFS.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS divides the file into blocks based on its configured block size.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For an illustrative block size of 128 MB:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Block</th><th className="px-4 py-3">Approximate size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Block 1</td><td className="px-4 py-2.5 text-stone-700">128 MB</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Block 2</td><td className="px-4 py-2.5 text-stone-700">128 MB</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Block 3</td><td className="px-4 py-2.5 text-stone-700">128 MB</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Block 4</td><td className="px-4 py-2.5 text-stone-700">116 MB</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Total</td><td className="px-4 py-2.5 text-stone-700">500 MB</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">These blocks are distributed among DataNodes.</td><td className="px-4 py-2.5 text-stone-700">The 128 MB block size here is an example, not a universal HDFS setting.</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.3 Block replication</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS supports replication to protect data against machine failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, if the replication factor is 3, HDFS attempts to maintain three copies of each block across suitable DataNodes.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">🌿 Understanding HDFS Architecture: NameNode, DataNode, and Secondary NameNode Explained | by Allensawant | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/Bf8tpIT_vJhsu3O7EJXg5pcT_J-33GQTyDR96_N5gB7W5yq4-uhvQ3tjtSptujI0j0oeiBFIVkjfLGle31Ed0HTZvnzbZS2vz8Pnk0hhMF87JxDlZFZp3jC4YDhDavfVKogDWKofHEjOTFsJRqau51bkSS8vvLNtP3RoJPI8umg?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40allensawant1995/understanding-hdfs-architecture-namenode-datanode-and-secondary-namenode-explained-ccd389964aac?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose Block 1 is stored on:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DataNode 1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DataNode 2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DataNode 3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If DataNode 1 fails, another replica can be used to access the data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The NameNode monitors block availability and coordinates re-replication when necessary.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.4 HDFS read operation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When an application wants to read a file:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client contacts the NameNode.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The NameNode returns the locations of the required blocks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client connects to the appropriate DataNodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DataNodes send the block contents to the client.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client reconstructs the original file.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.5 HDFS write operation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When an application writes a file:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client requests file creation from the NameNode.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The NameNode checks permissions and file-system rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The NameNode identifies suitable DataNodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The client sends data through a replication pipeline.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">DataNodes store the blocks and acknowledge successful writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Metadata is updated as the file is completed.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.6 HDFS fault tolerance and high availability</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS is designed to tolerate hardware failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important mechanisms include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Replication: Maintains multiple copies of file blocks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Heartbeats: DataNodes periodically report that they are alive.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Block reports: DataNodes report the blocks they store.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">High Availability: A standby NameNode can take over when the active NameNode fails, subject to the configured failover architecture.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rack awareness: Replicas are distributed with awareness of network racks to improve fault tolerance and network efficiency.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5.7 When should HDFS be used?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS is useful for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large-scale historical datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch-processing workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed data lakes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large files used in Hadoop-based platforms.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Environments that need storage distributed across on-premises clusters.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Modern data engineering platforms also commonly use object storage such as Amazon S3, Azure Data Lake Storage and Google Cloud Storage.</p>
        </div>
      </section>

      {/* SECTION 6: 6. Apache Spark Architecture */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Spark Core Engine</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. Apache Spark Architecture
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Spark is a unified analytics engine designed for large-scale data processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark allows developers to process structured, semi-structured and unstructured data using distributed computing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It supports:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch data processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Interactive SQL queries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed data transformations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Machine learning workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Graph processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stream processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One of Spark's major advantages is that it can keep intermediate data in memory when appropriate, reducing the need to repeatedly read and write intermediate results to disk.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.1 Core components of Spark</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark's architecture contains several important components.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Foundation Spark Day 4: Inside Spark 4.0 — Architecture &amp; SparkSession | by THE BRICK LEARNING | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/AdqarVZatvDUI6KcFsm0GFhoufVQvZYHPnCTwkETFfJsXjvceiMApP8yXRgw_ocK4GBuEKF5Tviq9qDuvV-8BR4lCSS9rzyvGV1hcKPBVHTOwg2hvJXI7KZlo4OZWLvMwYX4DbDItJSIw699kRkkqj4UjAgynWFM3pnak6cfYpY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40infinitylearnings1201/foundation-spark-day-4-inside-spark-4-0-architecture-sparksession-13f2cff65182?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Driver Program</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Driver is the central coordinating process of a Spark application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is responsible for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Running the application's main program.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Creating the Spark session and coordinating execution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Building logical execution plans.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scheduling jobs, stages and tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Communicating with cluster managers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coordinating executors.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. Cluster Manager</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Cluster Manager allocates computing resources to Spark applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common deployment options include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Standalone.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hadoop YARN.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kubernetes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A cluster manager decides where application resources can be allocated. It does not perform the actual data transformations itself.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Worker Nodes</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Worker nodes are the machines that provide resources for executing Spark applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They provide CPU, memory and other resources used by executors.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>4. Executors</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executors are application-specific processes running on worker nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They execute assigned tasks and can store intermediate data in memory or on disk.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>5. Tasks</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A task is the smallest unit of execution scheduled by Spark's task scheduler. It generally processes one partition of an RDD or a corresponding partition of a DataFrame during a stage.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.2 Understanding Spark execution using an example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an online shopping company has 200 GB of order data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It wants to calculate total revenue per city.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Spark application follows this process:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Driver receives the application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Driver requests resources from the Cluster Manager.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Cluster Manager allocates resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executors start on the allocated worker nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark reads the source data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Driver creates an execution plan.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Spark scheduler divides the work into stages and tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executors process individual partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Intermediate results are exchanged when necessary.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark combines the results.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The application writes the output.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.3 Spark execution hierarchy</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understanding these five terms is extremely important.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Component</th><th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Application</td><td className="px-4 py-2.5 text-stone-700">The complete Spark program</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Job</td><td className="px-4 py-2.5 text-stone-700">A computation initiated by an action</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Stage</td><td className="px-4 py-2.5 text-stone-700">A group of tasks separated by shuffle boundaries</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Task</td><td className="px-4 py-2.5 text-stone-700">A unit of work executed on a partition</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Partition</td><td className="px-4 py-2.5 text-stone-700">A logical portion of distributed data</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Consider:</td><td className="px-4 py-2.5 text-stone-700">df = spark.read.parquet(&quot;orders/&quot;) result = ( df.groupBy(&quot;city&quot;) .sum(&quot;amount&quot;) ) result.show()</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">When show() triggers execution:</td><td className="px-4 py-2.5 text-stone-700">Spark runs a job.</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">The job may be divided into multiple stages.</td><td className="px-4 py-2.5 text-stone-700">Each stage contains multiple tasks.</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Each task operates on a partition of data.</td><td className="px-4 py-2.5 text-stone-700">The number of stages and tasks depends on the execution plan and available parallelism.</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6.4 Why is the Driver important?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Driver acts as the coordinator of the application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine that 20 executors are working on a large transaction dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Driver decides what needs to be executed, organizes tasks and tracks their progress.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, the Driver should not collect enormous datasets from executors into its own memory.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base"># Dangerous for a very large DataFrame all_data = df.collect()</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This brings all rows to the Driver and can cause an out-of-memory error.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For production processing, distributed output operations are generally preferable:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df.write.parquet(\"output/orders/\")"}
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 7: 7. Spark Driver and Executors */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">Execution Topology</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Spark Driver and Executors
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Driver and Executors are two of the most important components in Spark's distributed architecture.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.1 Driver responsibilities</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Driver performs several functions:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application coordination: Controls the application's execution lifecycle.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Query planning: Creates and coordinates execution plans.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Job scheduling: Converts application actions into jobs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stage scheduling: Divides jobs into stages based on dependencies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Task scheduling: Sends tasks to executors.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Result coordination: Tracks task execution and receives results or metadata.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.2 Executor responsibilities</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executors perform the actual computation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Their responsibilities include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executing Spark tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reading partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applying transformations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Performing joins and aggregations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storing cached or persisted data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sending execution status and results to the Driver.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.3 Driver vs Executor</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Driver</th><th className="px-4 py-3">Executor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Coordinates the application</td><td className="px-4 py-2.5 text-stone-700">Performs distributed computation</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Plans execution</td><td className="px-4 py-2.5 text-stone-700">Executes tasks</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Schedules jobs and stages</td><td className="px-4 py-2.5 text-stone-700">Executes assigned tasks</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Manages application-level coordination</td><td className="px-4 py-2.5 text-stone-700">Manages executor-side storage and execution</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">One Driver per application</td><td className="px-4 py-2.5 text-stone-700">Usually multiple executors per application</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Has driver memory allocation</td><td className="px-4 py-2.5 text-stone-700">Has executor memory allocation</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.4 How communication happens</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a Spark application deployed with four executors.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The execution process:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"Driver | Cluster Manager | --------------------- | | | Worker 1 Worker 2 Worker 3/4 | | | Executor Executor Executors | | | Tasks Tasks Tasks | | | Results Results Results --------------------- | Driver"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Driver schedules tasks and executors communicate as necessary for data exchanges, such as shuffle operations.</p>
          <div className="mt-4 mb-2 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 flex items-start gap-3 text-stone-800 text-sm">
            <span className="px-2 py-0.5 rounded bg-orange-200 text-orange-900 font-bold text-xs uppercase tracking-wider shrink-0 mt-0.5">
              Important
            </span>
            <span className="leading-relaxed font-medium">Each Spark application normally has its own executor processes. Executors are not automatically shared between independent Spark applications.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">GitHub+1</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7.5 Client mode vs cluster mode</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark supports different deployment modes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Client deployment mode:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Driver runs on the machine or environment submitting the application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cluster deployment mode:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Driver runs inside the cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, when submitting a production application with a cluster deployment configuration, the cluster environment can host the Driver instead of relying on the submitting laptop.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is useful when deploying production workloads that should not depend on a developer's local machine.</p>
        </div>
      </section>

      {/* SECTION 8: 8. Spark Clusters */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Cluster Deployments</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Spark Clusters
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Spark cluster is a collection of machines that work together to execute distributed applications.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.1 Cluster architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A typical Spark cluster consists of:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One Driver process.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Cluster Manager.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple Worker Nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple Executors.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CPU and memory resources across the workers.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Spark Architecture Explained</span>
            <a href="https://images.openai.com/static-rsc-4/SlhISzX8t373SHXRHncvoQ190BJBxrXYkYwf6JUoL5tOi7TSPXeXiPKgd0O0Z5G5O2audtyIPkwBNt_4Ka9Ca2VziVntgtpGMpkUDzbi_QKAgqr4L0UD4xsXUvvQ-CsblIkHvA1HYZzqpHZ2f115qEMRIAlyzM7ANAeRHbxeXPI?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">cloudrps.com</span>
            <a href="https://cloudrps.com/blog/apache-spark-architecture-explained/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.2 Example: Three-worker cluster</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a company has three worker machines.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Worker</th><th className="px-4 py-3">CPU cores</th><th className="px-4 py-3">Available RAM</th><th className="px-4 py-3">Executors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Worker 1</td><td className="px-4 py-2.5 text-stone-700">8</td><td className="px-4 py-2.5 text-stone-700">32 GB</td><td className="px-4 py-2.5 text-stone-700">Executor 1</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Worker 2</td><td className="px-4 py-2.5 text-stone-700">8</td><td className="px-4 py-2.5 text-stone-700">32 GB</td><td className="px-4 py-2.5 text-stone-700">Executor 2</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Worker 3</td><td className="px-4 py-2.5 text-stone-700">8</td><td className="px-4 py-2.5 text-stone-700">32 GB</td><td className="px-4 py-2.5 text-stone-700">Executor 3</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.3 Types of Spark deployment</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Standalone cluster: Spark's built-in cluster manager.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">YARN cluster: Spark applications run using Hadoop YARN for resource management.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kubernetes cluster: Spark applications run as workloads managed by Kubernetes.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.4 Local vs distributed execution</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You can also run Spark locally.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql import SparkSession spark = ( SparkSession.builder .appName(\"LocalSparkApplication\") .master(\"local[*]\") .getOrCreate() )\nHere, local[*] uses the available logical CPU cores on the local machine.\nThis is useful for learning, development and testing.\nHowever, local mode is not the same as a real multi-machine distributed cluster."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8.5 When do we need a cluster?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A cluster becomes valuable when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data exceeds the resources of one machine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The workload requires more processing capacity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Multiple jobs need distributed resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Large-scale processing needs fault recovery.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Production pipelines need scalable execution.</p>
        </div>
      </section>

      {/* SECTION 9: 9. RDD Architecture — Resilient Distributed Datasets */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">Low-Level Core</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. RDD Architecture — Resilient Distributed Datasets
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RDD stands for Resilient Distributed Dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is one of Spark's fundamental abstractions for distributed computing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An RDD is an immutable, fault-tolerant distributed collection of records that can be processed in parallel.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Let's understand each word.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Resilient: The system can recover lost partitions using lineage information where possible.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed: Data is divided into partitions that can exist across multiple machines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dataset: A collection of records that can be processed.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.1 Understanding RDDs</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider the following dataset:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"numbers = [10, 20, 30, 40, 50, 60]\nInstead of processing all six numbers as one local collection, Spark can distribute them across partitions.\nFor example:\n[Key topics in Apache Spark - AWS Prescriptive Guidance](https://images.openai.com/static-rsc-4/mDIK2ruGtCIxOH99nzYsjvwRXqxF-BGT8-n329FABYxbDAK3xoO5sEeUYQrqH2XCbHsI07P0I2XDTlJa_9eNYpMo4HYc5ci33he24aRRhEOWEk4a6IQSoRxfS8-37L6zWfZSE2zM3vZwJ-5h_u02RnqotVcCWDR1E7Jd6SPOZfk?purpose=inline)\n[docs.aws.amazon.com](https://docs.aws.amazon.com/prescriptive-guidance/latest/tuning-aws-glue-for-apache-spark/key-topics-apache-spark.html?utm_source=chatgpt.com)\nRDD: [10, 20, 30, 40, 50, 60] Partition 1: [10, 20] Partition 2: [30, 40] Partition 3: [50, 60]\nEach partition can be processed independently."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.2 Creating an RDD</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Using PySpark:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql import SparkSession spark = ( SparkSession.builder .appName(\"RDDExample\") .master(\"local[*]\") .getOrCreate() ) sc = spark.sparkContext numbers = [10, 20, 30, 40, 50, 60] rdd = sc.parallelize(numbers, 3) print(rdd.collect())\nHere:\nparallelize() creates an RDD from a local collection.\n3 specifies the number of partitions.\ncollect() returns all records to the Driver."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.3 RDD transformations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RDD transformations create new RDDs based on existing RDDs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"numbers = sc.parallelize([1, 2, 3, 4, 5]) squared = numbers.map(lambda x: x * x) print(squared.collect())\nOutput:\n[1, 4, 9, 16, 25]\nOther common transformations include:\nTransformation\nPurpose\nmap()\nTransform each record\nflatMap()\nTransform records into multiple records\nfilter()\nSelect matching records\ndistinct()\nRemove duplicates\nunion()\nCombine RDDs\nintersection()\nFind common elements\nreduceByKey()\nAggregate values by key\ngroupByKey()\nGroup values by key\nsortByKey()\nSort key-value pairs"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.4 RDD fault tolerance and lineage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One important RDD feature is lineage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RDDs remember the sequence of transformations used to produce them.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">rdd1 = sc.parallelize([1, 2, 3, 4, 5]) rdd2 = rdd1.map(lambda x: x * 2) rdd3 = rdd2.filter(lambda x: x &gt; 4) rdd4 = rdd3.map(lambda x: x + 10)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptual lineage:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Original RDD | map | filter | map | Final RDD</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose one partition of an intermediate RDD is lost because a worker fails.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark can use the lineage information to recompute the missing partition from its original input and transformations, provided the required source data remains accessible.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is one of the mechanisms through which RDDs provide fault tolerance.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9.5 When should RDDs be used?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RDDs are useful when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Working with low-level distributed transformations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processing unstructured data with custom logic.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implementing algorithms that do not fit naturally into relational operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Requiring precise control over partition-level processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For many structured data engineering workloads, DataFrames and Spark SQL are preferred because Spark can optimize their execution.</p>
        </div>
      </section>

      {/* SECTION 10: 10. DataFrame and Dataset APIs */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Structured Abstractions</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. DataFrame and Dataset APIs
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark provides higher-level APIs for working with structured and semi-structured data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The two important abstractions are DataFrames and Datasets.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.1 What is a DataFrame?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A DataFrame is a distributed collection of records organized into named columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It resembles a relational database table.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">city</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">amount</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amit</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mumbai</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">5000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Neha</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pune</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">3000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">103</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rahul</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delhi</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">7000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">104</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Priya</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mumbai</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">2000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of processing individual records manually, you can use DataFrame operations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.2 Creating a DataFrame</span>
          </h3>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql import SparkSession spark = ( SparkSession.builder .appName(\"DataFrameExample\") .master(\"local[*]\") .getOrCreate() ) data = [ (101, \"Amit\", \"Mumbai\", 5000), (102, \"Neha\", \"Pune\", 3000), (103, \"Rahul\", \"Delhi\", 7000), (104, \"Priya\", \"Mumbai\", 2000) ] columns = [\"order_id\", \"customer\", \"city\", \"amount\"] df = spark.createDataFrame(data, columns) df.show()\nOutput:\n+--------+--------+------+------+ |order_id|customer|city |amount| +--------+--------+------+------+ |101 |Amit |Mumbai|5000 | |102 |Neha |Pune |3000 | |103 |Rahul |Delhi |7000 | |104 |Priya |Mumbai|2000 | +--------+--------+------+------+"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.3 Common DataFrame operations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Select specific columns:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df.select(\"customer\", \"amount\").show()\nFilter records:\ndf.filter(df.amount > 3000).show()\nAdd a new column:\nfrom pyspark.sql.functions import col df = df.withColumn( \"discounted_amount\", col(\"amount\") * 0.90 )\nGroup records:\nfrom pyspark.sql.functions import sum df.groupBy(\"city\").agg( sum(\"amount\").alias(\"total_sales\") ).show()\nSort records:\ndf.orderBy(col(\"amount\").desc()).show()"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.4 What is a Dataset?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Dataset is a strongly typed distributed collection available in Spark's Scala and Java APIs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It combines:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Distributed data processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Type safety.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Functional programming operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark SQL's optimized execution engine.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, in Scala:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"case class Order( orderId: Int, customer: String, amount: Double ) val orders = Seq( Order(101, \"Amit\", 5000), Order(102, \"Neha\", 3000) ) val orderDS = spark.createDataset(orders)\nThe Dataset API allows compile-time checking of many type-related operations."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.5 DataFrame vs Dataset vs RDD</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th><th className="px-4 py-3">RDD</th><th className="px-4 py-3">DataFrame</th><th className="px-4 py-3">Dataset</th><th className="px-4 py-3">Data structure</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Distributed objects</td><td className="px-4 py-2.5 text-stone-700">Named columns</td><td className="px-4 py-2.5 text-stone-700">Typed distributed objects</td><td className="px-4 py-2.5 text-stone-700">Schema</td><td className="px-4 py-2.5 text-stone-700">No built-in relational schema</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Yes</td><td className="px-4 py-2.5 text-stone-700">Yes</td><td className="px-4 py-2.5 text-stone-700">Type safety</td><td className="px-4 py-2.5 text-stone-700">Language-dependent</td><td className="px-4 py-2.5 text-stone-700">Less strongly typed</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Strongly typed</td><td className="px-4 py-2.5 text-stone-700">Query optimization</td><td className="px-4 py-2.5 text-stone-700">Limited relational optimization</td><td className="px-4 py-2.5 text-stone-700">Catalyst optimization</td><td className="px-4 py-2.5 text-stone-700">Catalyst optimization</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Primary use</td><td className="px-4 py-2.5 text-stone-700">Low-level processing</td><td className="px-4 py-2.5 text-stone-700">Structured data processing</td><td className="px-4 py-2.5 text-stone-700">Typed structured processing</td><td className="px-4 py-2.5 text-stone-700">Python support</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Yes</td><td className="px-4 py-2.5 text-stone-700">Yes</td><td className="px-4 py-2.5 text-stone-700">No typed Dataset API</td><td className="px-4 py-2.5 text-stone-700">Important distinction: In Spark's Scala API, DataFrame is essentially Dataset[Row]. Python supports DataFrames but does not expose the typed Dataset API.</td><td className="px-4 py-2.5 text-stone-700">Spark 4.3.0 Documentation+1</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>10.6 Why DataFrames are important in Data Engineering</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine processing a 500 GB transaction dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">With an RDD, you may have to implement several operations manually.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">With a DataFrame, you can express your business logic:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"result = ( df.filter(col(\"amount\") > 1000) .groupBy(\"city\") .agg( sum(\"amount\").alias(\"total_revenue\") ) )\nSpark can analyze the structure of the computation and optimize the resulting execution plan.\nThis makes DataFrames especially useful for data engineering pipelines."}
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 11: 11. Spark SQL */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Catalyst Optimizer</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Spark SQL
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark SQL is the Spark component designed for processing structured data using SQL and DataFrame operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It allows data engineers and analysts to use familiar SQL queries while Spark executes them across a distributed environment.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.1 Why Spark SQL is important</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In conventional database systems, SQL queries are executed by database engines.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark SQL provides SQL-style querying over distributed datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, a company has a large transaction DataFrame.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It wants to calculate revenue by country.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Using SQL:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT country, SUM(amount) AS total_revenue FROM orders GROUP BY country;\nSpark processes the query using its distributed execution engine."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.2 Creating a temporary SQL view</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">df.createOrReplaceTempView(&quot;orders&quot;)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now you can execute SQL:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"result = spark.sql(\"\"\" SELECT city, SUM(amount) AS total_sales FROM orders GROUP BY city \"\"\") result.show()"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.3 Catalyst Optimizer</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Catalyst Optimizer is Spark SQL's query optimization framework.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its goal is to transform query plans into more efficient execution plans.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"result = ( df.filter(col(\"amount\") > 5000) .select(\"city\", \"amount\") )\nA naive implementation could read all columns, process all records and then remove unnecessary information.\nAn optimized execution plan can push column selection and filtering closer to the data source where supported.\nImportant optimization concepts include:"}
            </pre>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Logical planning: Understands the meaning of the query.</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">2. Logical optimization: Applies transformations such as predicate and projection pushdown.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Physical planning: Selects execution strategies such as join algorithms.</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">4. Code generation: Generates efficient code for supported portions of execution.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.4 Predicate pushdown</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Predicate pushdown attempts to apply filters close to the data source.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT * FROM orders WHERE amount > 5000;\nInstead of reading every record into Spark and filtering afterward, Spark may push this condition into a source that supports predicate pushdown.\nThis reduces unnecessary data scanning."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.5 Column pruning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Column pruning avoids reading columns that are not required by the query.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the dataset contains:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order_id customer_name email phone city product amount payment_method</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The query:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT city, amount FROM orders;\nOnly the required columns may need to be read when the storage format and data source support column pruning."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11.6 Understanding the query plan</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You can inspect a Spark DataFrame's execution plan using:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">result.explain(True)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This helps you inspect:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Logical plan.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Optimized logical plan.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Physical execution plan.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data sources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Exchanges and shuffles.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scan and filtering operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understanding explain() is an essential skill for diagnosing slow Spark applications.</p>
        </div>
      </section>

      {/* SECTION 12: 12. Transformations and Actions */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Execution Semantics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Transformations and Actions
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark operations are divided into two major categories:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transformations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Actions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Understanding the difference is essential because it explains how Spark executes programs.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.1 Transformations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transformations create a new distributed dataset from an existing dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They do not immediately execute the complete computation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df.select(\"customer\", \"amount\") df.filter(col(\"amount\") > 1000) df.withColumn(\"tax\", col(\"amount\") * 0.18) df.groupBy(\"city\").sum(\"amount\")\nEach operation describes what needs to happen to the data."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.2 Actions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Actions trigger computation and produce a result, write output, or return information to the Driver.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">df.show() df.count() df.collect() df.first() df.take(5) df.write.parquet(&quot;output/&quot;)</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.3 Transformation vs Action</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Transformation</th><th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Describes a computation</td><td className="px-4 py-2.5 text-stone-700">Triggers computation</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Produces another distributed dataset</td><td className="px-4 py-2.5 text-stone-700">Produces a result or writes output</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Usually lazy</td><td className="px-4 py-2.5 text-stone-700">Triggers execution</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Examples: filter, select, map</td><td className="px-4 py-2.5 text-stone-700">Examples: count, show, collect, write</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12.4 Narrow and wide transformations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is another important distinction.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Narrow transformations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A narrow transformation does not require data from multiple input partitions to be redistributed across the cluster for its computation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">map()</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">filter()</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">select()</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">withColumn() in typical element-wise use.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Wide transformations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A wide transformation requires data exchange or redistribution across partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">groupBy()</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">distinct()</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">repartition()</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Many joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orderBy().</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Transformations and Actions in Spark Explained</span>
            <a href="https://images.openai.com/static-rsc-4/BuCqJCOOKpMD7oYSuAltJZ-NFsCVVgBtnq1cwi4uh5o-Yv54ryaonK8LprROsGF1Ls4VvT5BSqe8M-4PncGJyvjdDTD2_XFsdlO66rGLB06-s0hl5MpoFrl6V9sNsHtk2_XyjofzPYHGvyREn1YV4ea9XY0n1EXDIhBMbrVXNeM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">sparkplayground.com</span>
            <a href="https://www.sparkplayground.com/tutorials/spark-theory/transformations-actions?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">filtered = df.filter(col(&quot;amount&quot;) &gt; 1000)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filtering generally operates independently on each partition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">grouped = df.groupBy(&quot;city&quot;).sum(&quot;amount&quot;)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records from different partitions may need to be brought together to calculate totals for each city.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That redistribution introduces a shuffle.</p>
        </div>
      </section>

      {/* SECTION 13: 13. Lazy Evaluation */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">DAG Planning</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Lazy Evaluation
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lazy evaluation means Spark does not immediately execute a transformation when it is defined.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead, it records the computation and executes it when an action requires the result.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.1 Understanding lazy execution</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df = spark.read.csv( \"orders.csv\", header=True, inferSchema=True ) filtered = df.filter(col(\"amount\") > 1000) selected = filtered.select( \"customer\", \"amount\" )\nAt this point, the transformations have been defined. Spark has not necessarily executed the complete data-processing job.\nNow execute:\nselected.show()\nThis action triggers the necessary computation."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.2 Why does Spark use lazy evaluation?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are several benefits.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Optimization: Spark can examine the complete query before deciding how to execute it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Efficient execution: Unnecessary intermediate operations can be removed or simplified.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reduced data movement: Operations can sometimes be combined.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Better resource utilization: Computations are executed when their results are needed.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.3 Example of optimization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a DataFrame goes through these operations:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">df1 = df.filter(col(&quot;amount&quot;) &gt; 5000) df2 = df1.select(&quot;customer&quot;, &quot;amount&quot;) df3 = df2.filter(col(&quot;amount&quot;) &gt; 10000) df3.show()</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The optimizer may simplify the two filters into one effective condition:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df.filter(col(\"amount\") > 10000).select( \"customer\", \"amount\" )\nThe exact physical execution depends on the plan and data source."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13.4 Lazy execution and debugging</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Because Spark uses lazy evaluation, an error may not appear on the line where you define a transformation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"result = df.filter(col(\"missing_column\") > 100) result.show()\nThe problem may only become visible when Spark analyzes or executes the operation.\nThis is why engineers should inspect schemas, plans and execution errors carefully.\nSpark 4.2.0 Documentation+1"}
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 14: 14. Data Partitioning */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Parallelism &amp; Coalesce</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Data Partitioning
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning is one of the most important concepts in Spark performance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A partition is a logical division of distributed data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark uses partitions to divide workloads into smaller processing units that can execute in parallel.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.1 Why partitioning is important</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine that you have 100 million transaction records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of processing everything as one task, Spark can divide the dataset into multiple partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">100 million records Partition 1 → 10 million Partition 2 → 10 million Partition 3 → 10 million Partition 4 → 10 million ... Partition 10 → 10 million</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different tasks can process the partitions in parallel.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.2 Number of partitions</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The number of partitions affects:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Task parallelism.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CPU utilization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scheduling overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Memory consumption per task.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffle behavior.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data processing performance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Too few partitions can leave CPUs underutilized.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Too many tiny partitions can generate unnecessary scheduling and file overhead.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.3 repartition()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The repartition() operation changes the number of partitions and generally involves a full shuffle.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df = df.repartition(20)\nThis distributes records across 20 partitions.\nYou can also repartition based on a column:\ndf = df.repartition(20, \"city\")\nThis redistributes records according to their city values."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.4 coalesce()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">coalesce() is commonly used to reduce the number of partitions while avoiding a full shuffle in the usual case.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df = df.coalesce(5)\nThis reduces the partition count to five without the full redistribution performed by repartition().\nHowever, the resulting partitions might be uneven."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.5 repartition vs coalesce</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Feature</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">repartition()</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">coalesce()</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Main purpose</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increase or decrease partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Primarily reduce partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Full shuffle</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generally yes</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Generally no</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data redistribution</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">More complete</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Limited in typical usage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Balancing</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can improve distribution</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">May produce uneven partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Typical use</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Redistribute data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reduce output partitions</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14.6 Storage partitioning vs execution partitioning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Do not confuse two different concepts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Execution partitioning: How Spark divides data across processing tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storage partitioning: How data is organized into directories or files for future queries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, writing data partitioned by year:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df.write \\ .partitionBy(\"year\") \\ .parquet(\"warehouse/orders/\")\nPossible directory structure:\nwarehouse/orders/ year=2024/ year=2025/ year=2026/\nA query filtering by year may benefit from partition pruning, where irrelevant directory partitions can be skipped."}
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 15: 15. Shuffling and Data Exchange */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Shuffle Optimization</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. Shuffling and Data Exchange
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffle is the process of redistributing data across partitions, often across different executors or worker nodes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is one of the most expensive operations in many Spark applications.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.1 Why does shuffling happen?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a company stores transactions across four partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partition 1: Mumbai, 1000 Pune, 2000 Partition 2: Mumbai, 3000 Delhi, 1000 Partition 3: Pune, 4000 Delhi, 2000 Partition 4: Mumbai, 5000 Pune, 1000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now execute:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">df.groupBy(&quot;city&quot;).sum(&quot;amount&quot;)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark must aggregate all records associated with each city.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The data must be redistributed so that the values for each key can be combined correctly.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.2 Shuffle execution</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">How Big Data workflows can become more efficient in Apache Spark - About Amazon India</span>
            <a href="https://images.openai.com/static-rsc-4/Qp9r1tSaL9ahx9ZX8exqcrrwqnDsLBiavJiR5TY6U_LzavbauLtnRWS8pWDwm2RXmHWB3YYZtVN7jqHcCHE_YlDc6xnNMnyzU5hCa4UhzX3lhJ6kXfUQ9zA9tyQvkmrP_NItOzz8JhLrndFBXnwCMZwTDCwwgf8oqm5e4O2qcD4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">aboutamazon.in</span>
            <a href="https://www.aboutamazon.in/how-big-data-workflows-can-become-more-efficient-in-apache-spark?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The general process:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Upstream tasks process input partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Intermediate records are assigned to target partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffle data is written and made available for downstream tasks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Downstream tasks retrieve the required shuffle blocks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The receiving tasks perform aggregation, sorting or joining.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.3 Why is shuffle expensive?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffle can involve:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network communication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serialization and deserialization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk writes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk reads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Memory pressure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Garbage collection.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Additional execution stages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This means a query with many unnecessary wide transformations may run slowly.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.4 Examples of shuffle operations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">df.groupBy(&quot;city&quot;).sum(&quot;amount&quot;) df.distinct() df.orderBy(&quot;amount&quot;) df.repartition(20) df1.join(df2, &quot;customer_id&quot;)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These operations commonly require shuffle, although Spark may optimize specific cases to avoid or reduce it.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15.5 How to reduce shuffle</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Some effective approaches include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filter records before joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Select only the necessary columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid unnecessary distinct() operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use broadcast joins for suitable small datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Choose appropriate partition counts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use suitable data formats and partitioning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Investigate skewed keys.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid repeatedly repartitioning the same dataset without a reason.</p>
          <div className="mt-4 mb-2 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 flex items-start gap-3 text-stone-800 text-sm">
            <span className="px-2 py-0.5 rounded bg-orange-200 text-orange-900 font-bold text-xs uppercase tracking-wider shrink-0 mt-0.5">
              Engineering principle
            </span>
            <span className="leading-relaxed font-medium">Reduce the amount of data that needs to move across the cluster.</span>
          </div>
        </div>
      </section>

      {/* SECTION 16: 16. Joins and Aggregations in Spark */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">Relational Operations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. Joins and Aggregations in Spark
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Joins and aggregations are essential operations in data engineering because real-world datasets are usually distributed across multiple tables and files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an e-commerce company with two datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customers table</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_name</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">city</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amit</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mumbai</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Neha</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pune</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rahul</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delhi</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">4</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Priya</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mumbai</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders table</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">order_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">amount</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">101</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">5000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">102</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">2</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">3000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">103</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">1</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">2000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">104</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">3</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">7000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The company wants to calculate how much each customer has purchased.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.1 Understanding joins</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A join combines data from multiple datasets based on a common column or matching condition.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In the example, both tables contain customer_id.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">PySpark implementation:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"customers = spark.createDataFrame( [ (1, \"Amit\", \"Mumbai\"), (2, \"Neha\", \"Pune\"), (3, \"Rahul\", \"Delhi\"), (4, \"Priya\", \"Mumbai\") ], [\"customer_id\", \"customer_name\", \"city\"] ) orders = spark.createDataFrame( [ (101, 1, 5000), (102, 2, 3000), (103, 1, 2000), (104, 3, 7000) ], [\"order_id\", \"customer_id\", \"amount\"] ) result = customers.join( orders, on=\"customer_id\", how=\"inner\" ) result.show()\nThe output combines customer details with order information."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.2 Types of joins</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Introduction to SQL Joins | recode hive</span>
            <a href="https://images.openai.com/static-rsc-4/blXIJYG_d6N4xeqcHKERi9GJX4z7d2jkAlXw3sTIcmDqNjSCA-1jvxoAg3Ba7-R6TZnNDRB2LGRODZvIhxp3kDv1SD1wu80uGclJ_9D7klyRnvRVQmq9Bioaoll4he9znVpvOOCY4ubsSVBStvq5vyRUDvmKAOR75QRawLc5KnI?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">recodehive.com</span>
            <a href="https://www.recodehive.com/docs/sql/SQL-joins/intro-sql-joins?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Inner Join</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Returns only records with matching keys in both datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customers.join( orders, &quot;customer_id&quot;, &quot;inner&quot; )</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. Left Outer Join</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Returns all records from the left dataset and matching records from the right dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customers without orders will still appear, with null values for the order columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customers.join( orders, &quot;customer_id&quot;, &quot;left&quot; )</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Right Outer Join</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Returns all records from the right dataset and matching records from the left dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customers.join( orders, &quot;customer_id&quot;, &quot;right&quot; )</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>4. Full Outer Join</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Returns all records from both datasets. Unmatched columns are filled with null.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customers.join( orders, &quot;customer_id&quot;, &quot;full_outer&quot; )</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>5. Left Semi Join</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Returns only the rows from the left DataFrame that have a matching row in the right DataFrame.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customers.join( orders, &quot;customer_id&quot;, &quot;left_semi&quot; )</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>6. Left Anti Join</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Returns rows from the left DataFrame that do not have matching rows in the right DataFrame.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customers.join( orders, &quot;customer_id&quot;, &quot;left_anti&quot; )</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is particularly useful when identifying customers who have never placed an order.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.3 Aggregations in Spark</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregation means combining multiple records to calculate summary values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Common aggregation functions include:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Function</th><th className="px-4 py-3">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">sum()</td><td className="px-4 py-2.5 text-stone-700">Calculates the total</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">avg()</td><td className="px-4 py-2.5 text-stone-700">Calculates the average</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">count()</td><td className="px-4 py-2.5 text-stone-700">Counts records</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">min()</td><td className="px-4 py-2.5 text-stone-700">Finds minimum value</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">max()</td><td className="px-4 py-2.5 text-stone-700">Finds maximum value</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">countDistinct()</td><td className="px-4 py-2.5 text-stone-700">Counts unique values</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">approx_count_distinct()</td><td className="px-4 py-2.5 text-stone-700">Estimates distinct count</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Example:</td><td className="px-4 py-2.5 text-stone-700">from pyspark.sql.functions import ( sum, avg, count, max, min ) summary = orders.groupBy(&quot;customer_id&quot;).agg( sum(&quot;amount&quot;).alias(&quot;total_spent&quot;), avg(&quot;amount&quot;).alias(&quot;average_order&quot;), count(&quot;order_id&quot;).alias(&quot;total_orders&quot;), max(&quot;amount&quot;).alias(&quot;largest_order&quot;), min(&quot;amount&quot;).alias(&quot;smallest_order&quot;) ) summary.show()</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.4 Advanced aggregations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data engineer often needs to calculate multiple metrics across several dimensions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"result = ( orders.join(customers, \"customer_id\") .groupBy(\"city\") .agg( sum(\"amount\").alias(\"total_revenue\"), count(\"order_id\").alias(\"total_orders\"), avg(\"amount\").alias(\"average_order_value\") ) ) result.show()\nThis produces a city-level sales summary."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.5 Multi-column joins</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sometimes a single matching column is insufficient.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose two datasets contain records with both customer_id and order_date.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You can join using multiple conditions:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"result = df1.join( df2, [\"customer_id\", \"order_date\"], \"inner\" )\nThis requires matching values in both join columns."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16.6 Join performance considerations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Joins can become expensive because records may need to move across the cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Performance depends on:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dataset sizes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Key distribution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Available memory.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Number of partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Join strategy.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data format.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data statistics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Whether the data is already partitioned or appropriately distributed.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A major optimization technique is broadcast joining, which we will explore next.</p>
        </div>
      </section>

      {/* SECTION 17: 17. Broadcast Joins */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">Join Strategies</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. Broadcast Joins
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broadcast joins are an important optimization technique in Spark SQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They are particularly useful when joining a very large dataset with a relatively small dataset.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.1 Understanding the problem</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an e-commerce company has:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Orders dataset: 500 GB.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Product lookup dataset: 10 MB.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both datasets need to be joined using product_id.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A conventional shuffle-based join may redistribute large amounts of data across the cluster.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That can introduce substantial network communication.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.2 How broadcast joins work</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A broadcast join copies the smaller dataset to the worker nodes so that each relevant executor can access it locally.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">My Datascience Journey – spark_joins</span>
            <a href="https://images.openai.com/static-rsc-4/Bx_iBKSX0BG0Qnhx49zIrZN2993Y0tThqVPRvYbaPf7Cmc4GMXxRtfEbg9GUkYd0iuAWlqqRjGJKBowvMBVYHYzfQTGLNCCTs3LbRVtCb57rLVfJR0KDCJn_Ixl4igyBvDyL68uBsIJ8Q-z3dkhvKxGFKeRgEpbNHvO92Cu1Jok?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">advaitha.github.io</span>
            <a href="https://advaitha.github.io/myDataScienceJourney/pyspark/05_spark_joins.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark identifies a suitable small dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The small dataset is broadcast to executors.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The larger dataset is processed in partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Each executor joins its partition with the broadcast data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The matching records are produced.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This avoids shuffling the large side solely to perform that join.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.3 PySpark implementation</span>
          </h3>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql.functions import broadcast result = orders.join( broadcast(products), on=\"product_id\", how=\"inner\" )\nSpark SQL:\nSELECT /*+ BROADCAST(products) */ orders.order_id, products.product_name FROM orders JOIN products ON orders.product_id = products.product_id;"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.4 Broadcast join example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Orders</th><th className="px-4 py-3">order_id</th><th className="px-4 py-3">product_id</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">101</td><td className="px-4 py-2.5 text-stone-700">P01</td><td className="px-4 py-2.5 text-stone-700">102</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">P02</td><td className="px-4 py-2.5 text-stone-700">103</td><td className="px-4 py-2.5 text-stone-700">P01</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Products</td><td className="px-4 py-2.5 text-stone-700">product_id</td><td className="px-4 py-2.5 text-stone-700">product_name</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">P01</td><td className="px-4 py-2.5 text-stone-700">Laptop</td><td className="px-4 py-2.5 text-stone-700">P02</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Mobile</td><td className="px-4 py-2.5 text-stone-700">The broadcast dataset contains only the small product lookup information.</td><td className="px-4 py-2.5 text-stone-700">Each executor can use that information to enrich its local order records.</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Result:</td><td className="px-4 py-2.5 text-stone-700">order_id</td><td className="px-4 py-2.5 text-stone-700">product_id</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">product_name</td><td className="px-4 py-2.5 text-stone-700">101</td><td className="px-4 py-2.5 text-stone-700">P01</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Laptop</td><td className="px-4 py-2.5 text-stone-700">102</td><td className="px-4 py-2.5 text-stone-700">P02</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Mobile</td><td className="px-4 py-2.5 text-stone-700">103</td><td className="px-4 py-2.5 text-stone-700">P01</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.5 Broadcast join vs shuffle join</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th><th className="px-4 py-3">Broadcast Join</th><th className="px-4 py-3">Shuffle Join</th><th className="px-4 py-3">Best suited for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">One relatively small side</td><td className="px-4 py-2.5 text-stone-700">Larger or similarly sized datasets</td><td className="px-4 py-2.5 text-stone-700">Small table movement</td><td className="px-4 py-2.5 text-stone-700">Broadcast to executors</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Redistributed as necessary</td><td className="px-4 py-2.5 text-stone-700">Large table movement</td><td className="px-4 py-2.5 text-stone-700">Avoids shuffle of large side for that join</td><td className="px-4 py-2.5 text-stone-700">May require redistribution</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Memory requirement</td><td className="px-4 py-2.5 text-stone-700">Broadcast dataset must fit suitably in executor memory</td><td className="px-4 py-2.5 text-stone-700">Depends on partition and execution strategy</td><td className="px-4 py-2.5 text-stone-700">Typical performance</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>17.6 When should you use broadcast joins?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Good candidates include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Product lookup tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Country-code reference tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Small customer segmentation tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business-category mappings.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Small configuration datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, do not broadcast a large dataset blindly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broadcasting oversized data can create memory pressure, serialization overhead and failures.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark SQL's automatic broadcast threshold and optimizer can select broadcast joins when conditions permit. You can inspect the physical plan to verify the selected strategy.</p>
        </div>
      </section>

      {/* SECTION 18: 18. Caching and Persistence */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Memory Retention</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Caching and Persistence
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Caching allows Spark to retain intermediate data so that it can be reused without repeating all previous computations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is particularly useful in applications where the same DataFrame or RDD is used multiple times.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.1 Understanding the problem</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a company has a transaction dataset containing 200 million records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It performs these operations:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reads transaction data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cleans invalid records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Removes duplicates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculates sales reports.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculates customer reports.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculates product reports.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without caching, Spark may need to recompute the shared upstream processing when separate actions are executed.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.2 How caching works</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Caching stores a computed dataset for reuse.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Production-Ready Big Data, Apache Spark Jobs in Databricks</span>
            <a href="https://images.openai.com/static-rsc-4/FXYhlLSECKUe2iNIXQPKdkHZPMXsa-84EJxrI4-ZmZDW56_nd9_YOiMpvSt0hNFQDfR5wtkJLjCTtajcEUwpdz8dpBWQrcWa58kRdEzt9Oil-2wOhksnk5BFd3kt5FpyLo0P45C9jOO7aHLnrQexmqfSkNsHtW7xZF3_mnyf-mg?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">dzone.com</span>
            <a href="https://dzone.com/articles/optimizing-apache-spark-jobs-in-databricks?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"cleaned_df = ( df.filter(col(\"amount\") > 0) .dropDuplicates() ) cleaned_df.cache() # First use cleaned_df.groupBy(\"city\").sum(\"amount\").show() # Second use cleaned_df.groupBy(\"product\").sum(\"amount\").show()\nThe first action materializes the cached DataFrame. Subsequent actions can reuse its cached partitions when they remain available."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.3 cache() vs persist()</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">cache() is a convenient way of using the default persistence level.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">persist() allows you to select a storage level.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For PySpark DataFrames:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark import StorageLevel df.persist(StorageLevel.MEMORY_AND_DISK)\nThis allows Spark to keep cached data in memory and use disk storage when necessary according to that storage level."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.4 Common persistence levels</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For RDDs, common storage levels include:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Storage level</th><th className="px-4 py-3">Meaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">MEMORY_ONLY</td><td className="px-4 py-2.5 text-stone-700">Store deserialized partitions in memory</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">MEMORY_AND_DISK</td><td className="px-4 py-2.5 text-stone-700">Store in memory and spill partitions that do not fit to disk</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">MEMORY_ONLY_SER</td><td className="px-4 py-2.5 text-stone-700">Store serialized partitions in memory</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">MEMORY_AND_DISK_SER</td><td className="px-4 py-2.5 text-stone-700">Store serialized partitions in memory and disk</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">DISK_ONLY</td><td className="px-4 py-2.5 text-stone-700">Store persisted partitions on disk</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.5 Removing cached data</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Caching consumes resources. When a dataset is no longer needed, release it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">cleaned_df.unpersist()</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>18.6 When should caching be used?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use caching when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The same DataFrame is reused repeatedly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Iterative processing requires repeated access to the same data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Expensive transformations produce a reusable result.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Interactive analysis repeatedly queries the same dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid caching when:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data is used only once.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The dataset is too large for available resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Caching creates memory pressure.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Recomputing the data is cheaper than storing it.</p>
          <div className="mt-4 mb-2 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 flex items-start gap-3 text-stone-800 text-sm">
            <span className="px-2 py-0.5 rounded bg-orange-200 text-orange-900 font-bold text-xs uppercase tracking-wider shrink-0 mt-0.5">
              Remember
            </span>
            <span className="leading-relaxed font-medium">Caching is an optimization, not a requirement for every Spark pipeline.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark 4.3.0 Documentation+1</p>
        </div>
      </section>

      {/* SECTION 19: 19. Data Skew and Optimization */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Salting &amp; AQE</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Data Skew and Optimization
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data skew occurs when records are distributed unevenly across partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is one of the most common causes of poor Spark performance.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.1 Understanding data skew</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an e-commerce platform has 100 million orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The company wants to calculate revenue grouped by city.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider the following distribution:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">City</th><th className="px-4 py-3">Number of records</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Mumbai</td><td className="px-4 py-2.5 text-stone-700">45 million</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Delhi</td><td className="px-4 py-2.5 text-stone-700">25 million</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Bengaluru</td><td className="px-4 py-2.5 text-stone-700">15 million</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Pune</td><td className="px-4 py-2.5 text-stone-700">10 million</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Other cities</td><td className="px-4 py-2.5 text-stone-700">5 million</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Mumbai contains far more records than the other cities.</td><td className="px-4 py-2.5 text-stone-700">If the data is partitioned by city, one partition could receive a disproportionate amount of work.</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.2 Why is data skew a problem?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a cluster running four tasks.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Task</th><th className="px-4 py-3">Records to process</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Task 1</td><td className="px-4 py-2.5 text-stone-700">10 million</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Task 2</td><td className="px-4 py-2.5 text-stone-700">10 million</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Task 3</td><td className="px-4 py-2.5 text-stone-700">10 million</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Task 4</td><td className="px-4 py-2.5 text-stone-700">70 million</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">The first three tasks may finish quickly.</td><td className="px-4 py-2.5 text-stone-700">The fourth task may take much longer.</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">The entire stage cannot finish until the slow task completes.</td><td className="px-4 py-2.5 text-stone-700">This problem is called a straggler task.</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">[How to Detect Data Skew in Spark](https://images.openai.com/static-rsc-4/SwAvMJET5JQWY_og50-qyctrtfbCOigzsDkK3Fm4aTV8m88lo8XkspPyB5VIfc1gzj0nwaVi8f8MxdLPuds4WP4eIOJCN0bP5fBZb6UXlbomnKqWnPEX4XAfJiGOAyAo7hmw6z7bLfcfu8ts3GIUfI9T9pWOBZWJFra9iKuX3L4?purpose=inline)</td><td className="px-4 py-2.5 text-stone-700">[linkedin.com](https://www.linkedin.com/pulse/how-detect-data-skew-spark-aftab-tamboli--1kq6c?utm_source=chatgpt.com)</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.3 Common causes of data skew</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A few join keys occur much more frequently than others.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Highly popular products dominate transaction records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A large number of records have null or default keys.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A small group of customers generates disproportionate activity.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning is based on poorly distributed keys.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.4 Technique 1: Salting</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Salting is a technique that adds artificial variation to frequently occurring keys to distribute their workload.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose the key Mumbai appears in 50 million records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Instead of processing all Mumbai records under one key, you can distribute them using several salted keys:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Mumbai_1 Mumbai_2 Mumbai_3 Mumbai_4</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql.functions import ( col, floor, rand, concat_ws ) salted_df = df.withColumn( \"salt\", floor(rand() * 10) ) salted_df = salted_df.withColumn( \"salted_city\", concat_ws(\"_\", col(\"city\"), col(\"salt\")) )\nNow records can be distributed using the salted key.\nHowever, salting changes the grouping key. For aggregations, calculate partial aggregates using the salted key and then aggregate again using the original key.\nFor joins, both sides must be salted consistently. A common implementation replicates the smaller side across the required salt values."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.5 Technique 2: Broadcast joins</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When one side of a join is small, broadcasting it may remove the need to shuffle the large side by the join key.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can help avoid certain skew-related join bottlenecks.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.6 Technique 3: Adaptive Query Execution (AQE)</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Adaptive Query Execution allows Spark SQL to adjust its physical execution plan using runtime statistics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can help with:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Coalescing small shuffle partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Converting certain sort-merge joins into broadcast hash joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Optimizing skewed joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">spark.conf.set( &quot;spark.sql.adaptive.enabled&quot;, &quot;true&quot; )</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AQE is enabled by default in many modern Spark SQL configurations, but engineers should verify the effective configuration in their environment.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.7 Technique 4: Better partitioning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Select partition keys that distribute records reasonably evenly.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, partitioning an extremely skewed dataset only by country may create uneven workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sometimes a composite key, salting or another distribution strategy is more suitable.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>19.8 How to identify skew</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use the Spark UI and inspect:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Task duration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffle read size.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffle write size.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Records processed per task.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spill size.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executor utilization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Long-running stages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When one task takes much longer or handles considerably more data than the others, investigate potential data skew.</p>
        </div>
      </section>

      {/* SECTION 20: 20. Spark Memory Management */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">Unified Memory</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Spark Memory Management
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Memory management is critical because Spark performs distributed computation involving joins, sorting, aggregations, shuffling and caching.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Poor memory management can result in slow execution, disk spills and out-of-memory errors.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.1 Where does Spark use memory?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark memory usage can be understood through two major categories.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Execution Memory</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Execution memory is used for computation, including:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sorting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffle-related operations.</p>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. Storage Memory</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storage memory is used to store:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cached RDDs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Persisted DataFrames.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broadcast variables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Other stored blocks.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark uses unified memory management in which execution and storage share a managed memory region, subject to configured boundaries and eviction behavior.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark 4.3.0 Documentation</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.2 Understanding executor memory</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose each executor has 8 GB of heap memory.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">That memory is not entirely available for caching because Spark and the application require memory for execution, metadata and other runtime needs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark also requires additional memory outside the JVM heap depending on the execution environment.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.3 Memory-related problems</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Out of Memory (OOM)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Occurs when a process cannot obtain enough memory for an allocation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spilling</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Occurs when intermediate data cannot be held entirely in memory and Spark writes portions to disk.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Garbage Collection Overhead</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Occurs when the JVM spends excessive time reclaiming memory.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executor Lost</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An executor may terminate due to memory pressure or other failures.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.4 Improving memory usage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Good practices include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid collecting huge datasets to the Driver.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filter unused records early.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Select only necessary columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid unnecessarily caching large datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use appropriate partition sizes.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Optimize joins and aggregations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Choose efficient data formats.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Monitor garbage collection and spill metrics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use suitable serialization and storage configurations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>20.5 Driver memory vs executor memory</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Driver memory</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executor memory</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Supports application coordination</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Supports task execution</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stores planning and scheduling structures</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Holds task working data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Receives collected results</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Processes partitions</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can fail due to huge collected datasets</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Can fail due to heavy tasks or caching</p>
          <div className="mt-4 mb-2 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 flex items-start gap-3 text-stone-800 text-sm">
            <span className="px-2 py-0.5 rounded bg-orange-200 text-orange-900 font-bold text-xs uppercase tracking-wider shrink-0 mt-0.5">
              Practical lesson
            </span>
            <span className="leading-relaxed font-medium">Giving Spark more memory does not automatically fix an inefficient data-processing design.</span>
          </div>
        </div>
      </section>

      {/* SECTION 21: 21. Spark Performance Tuning */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Spark Web UI &amp; Profiling</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          21. Spark Performance Tuning
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Performance tuning means improving Spark application execution time, resource efficiency, and reliability.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A well-written Spark application should process data efficiently without consuming unnecessary CPU, memory or network resources.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.1 Optimize data reading</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Read only the columns you actually need.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inefficient:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df = spark.read.parquet(\"orders/\")\nBetter:\ndf = ( spark.read.parquet(\"orders/\") .select( \"order_id\", \"customer_id\", \"city\", \"amount\" ) )\nThis enables column pruning when the source supports it."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.2 Filter early</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose you only need orders from 2026.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Do not process every historical record unnecessarily.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">filtered = df.filter( col(&quot;year&quot;) == 2026 )</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filtering early can reduce downstream processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.3 Use efficient storage formats</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For analytical workloads, columnar formats such as Parquet are useful.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They support:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Column pruning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compression.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Encoding.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Efficient analytical scans.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.4 Optimize joins</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use broadcast joins when appropriate.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoid joining unnecessary columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filter both datasets before joining whenever possible.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"orders_filtered = orders.filter( col(\"amount\") > 1000 ) products_selected = products.select( \"product_id\", \"category\" ) result = orders_filtered.join( products_selected, \"product_id\" )"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.5 Optimize partitioning</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df = df.repartition(200)\nThis is an example, not a universal recommended value.\nThe appropriate number depends on the amount of data, cluster resources, workload and shuffle requirements."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.6 Optimize serialization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serialization converts objects into a format that can be transmitted or stored.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In distributed computing, serialization can affect:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Network communication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Memory usage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk I/O.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CPU consumption.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark supports different serialization mechanisms, including Java serialization and Kryo for relevant APIs.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.7 Use Adaptive Query Execution</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">AQE can improve query execution using runtime information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">You should inspect the resulting execution plan instead of assuming AQE automatically resolves every performance issue.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.8 Use Spark UI</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Web UI - Spark 3.5.6 Documentation</span>
            <a href="https://images.openai.com/static-rsc-4/7M7v1suqaKVS-gBCKDGaLT4lbw0v1MUJmBDKn1OinbfnQeJ08vGtyaXW-rNHhbt11I7-ErBP7rx3_rZoaCxUcBG3ab-b_Z_KoHoQ_5IiMAmzYdsYXo00kRxGdEVi7JpCn61JtrHrFH4zLhfXxzHNnx9G2QmuaAZzwHhFlixzLME?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">spark.apache.org</span>
            <a href="https://spark.apache.org/docs/3.5.6/web-ui.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Spark Web UI is an essential diagnostic tool.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It helps data engineers examine:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">UI section</th><th className="px-4 py-3">What it shows</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Jobs</td><td className="px-4 py-2.5 text-stone-700">Application jobs and their status</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Stages</td><td className="px-4 py-2.5 text-stone-700">Stage execution and shuffle information</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Tasks</td><td className="px-4 py-2.5 text-stone-700">Individual task duration and execution details</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Storage</td><td className="px-4 py-2.5 text-stone-700">Cached RDD and DataFrame information</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Executors</td><td className="px-4 py-2.5 text-stone-700">Executor resources and activity</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">SQL</td><td className="px-4 py-2.5 text-stone-700">Query execution plans and metrics</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Environment</td><td className="px-4 py-2.5 text-stone-700">Effective Spark configurations</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>21.9 Important performance metrics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Learn to understand:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Job duration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stage duration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Task duration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Executor utilization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffle read.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Shuffle write.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Memory spill.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Disk spill.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Input records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Input size.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Garbage collection time.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scheduler delay.</p>
          <div className="mt-4 mb-2 p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 flex items-start gap-3 text-stone-800 text-sm">
            <span className="px-2 py-0.5 rounded bg-orange-200 text-orange-900 font-bold text-xs uppercase tracking-wider shrink-0 mt-0.5">
              Professional practice
            </span>
            <span className="leading-relaxed font-medium">Identify the bottleneck first, then optimize the operation responsible for it. Do not randomly change configuration values.</span>
          </div>
        </div>
      </section>

      {/* SECTION 22: 22. Processing Parquet and Lakehouse Data */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Parquet &amp; Lakehouse Formats</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          22. Processing Parquet and Lakehouse Data
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Modern data engineering platforms do not simply store data in CSV files. They use efficient storage formats and table-management technologies to support large-scale analytical workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two important concepts are:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Parquet.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Lakehouse architecture.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.1 What is Apache Parquet?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Parquet is a column-oriented file format designed for efficient data storage and analytical processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike CSV, which stores records in a textual row-based structure, Parquet organizes data by columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider this dataset:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Customer</th><th className="px-4 py-3">City</th><th className="px-4 py-3">Product</th><th className="px-4 py-3">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Amit</td><td className="px-4 py-2.5 text-stone-700">Mumbai</td><td className="px-4 py-2.5 text-stone-700">Laptop</td><td className="px-4 py-2.5 text-stone-700">50000</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Neha</td><td className="px-4 py-2.5 text-stone-700">Pune</td><td className="px-4 py-2.5 text-stone-700">Mobile</td><td className="px-4 py-2.5 text-stone-700">20000</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Rahul</td><td className="px-4 py-2.5 text-stone-700">Delhi</td><td className="px-4 py-2.5 text-stone-700">Tablet</td><td className="px-4 py-2.5 text-stone-700">15000</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Priya</td><td className="px-4 py-2.5 text-stone-700">Mumbai</td><td className="px-4 py-2.5 text-stone-700">Laptop</td><td className="px-4 py-2.5 text-stone-700">45000</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.2 Row-based vs column-based storage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Row-based representation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Conceptually, a row-oriented format stores records together:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amit, Mumbai, Laptop, 50000 Neha, Pune, Mobile, 20000 Rahul, Delhi, Tablet, 15000 Priya, Mumbai, Laptop, 45000</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Column-based representation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parquet organizes values into column chunks:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer: [Amit, Neha, Rahul, Priya] City: [Mumbai, Pune, Delhi, Mumbai] Product: [Laptop, Mobile, Tablet, Laptop] Amount: [50000, 20000, 15000, 45000]</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Parquet Internals: Why Your File Format Choice Determines Query Speed</span>
            <a href="https://images.openai.com/static-rsc-4/1o2R6xybmtSGHZriu5Ig2C4kzTNtHn-TbbpvpVrWPk7ci3vrkQPTK-cHMhbDMeu-VamQ7yBfJc77_dN7MvX92KVsSXYqoQ18KP3D8aeLyhxYQFMUDSImgnodtj8Du9v7f8GqcByCi1VEN-OhoZxkHT2YYZN7qEnfG1vJrGEDaLc?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">blog.systemoverflow.com</span>
            <a href="https://blog.systemoverflow.com/p/parquet-internals-why-your-file-format?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Why is this useful?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an analyst runs:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"SELECT city, SUM(amount) FROM orders GROUP BY city;\nThe query does not need customer names or product descriptions.\nWith columnar storage, Spark can read the required columns rather than necessarily scanning every column in each file.\nThis can significantly reduce I/O."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.3 Parquet file structure</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Parquet file uses a hierarchical structure.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Parquet Internals: Why Your File Format Choice Determines Query Speed</span>
            <a href="https://images.openai.com/static-rsc-4/ZexU3axRaeeasiWUq0hqElMUFXVHVj5Tw1F1oymj456loKvMD11h7LE6YnAPsmgsKSJ1tSEKSz7qteNMWEopBL3O1W9O5OuPClwTIE5ggv8gqKfbuzw8aHFIlUg_xJIUapzzqKygbFZYNqtqlSgdM65b_LXbZhQStqQUX-CskSI?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">blog.systemoverflow.com</span>
            <a href="https://blog.systemoverflow.com/p/parquet-internals-why-your-file-format?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The structure contains:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File: The complete Parquet file.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Row Group: A horizontal group of records. Each row group contains a column chunk for every column.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Column Chunk: The data for one column within a row group.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Page: A smaller unit of data inside a column chunk. Pages can use encoding and compression.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This organization allows readers to locate and read the data needed for a query.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The official Parquet specification describes these structures and their organization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parquet+1</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.4 Why Parquet is useful</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th><th className="px-4 py-3">Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Columnar storage</td><td className="px-4 py-2.5 text-stone-700">Reads required columns efficiently</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Compression</td><td className="px-4 py-2.5 text-stone-700">Reduces storage consumption</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Encoding</td><td className="px-4 py-2.5 text-stone-700">Can reduce the size of repeated or suitable values</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Schema information</td><td className="px-4 py-2.5 text-stone-700">Stores data types and structural information</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Predicate pushdown support</td><td className="px-4 py-2.5 text-stone-700">Can avoid reading irrelevant data when metadata permits</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Nested data support</td><td className="px-4 py-2.5 text-stone-700">Supports complex structured data</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.5 Reading Parquet with Spark</span>
          </h3>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df = spark.read.parquet(\"data/orders.parquet\") df.show()\nReading selected columns:\ndf = ( spark.read.parquet(\"data/orders.parquet\") .select(\"customer_id\", \"city\", \"amount\") )"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.6 Writing Parquet with Spark</span>
          </h3>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df.write \\ .mode(\"overwrite\") \\ .parquet(\"output/orders/\")\nDifferent write modes:\nMode\nMeaning\nappend\nAdd new data\noverwrite\nReplace existing output\nerror / errorifexists\nFail when output already exists\nignore\nDo nothing if output already exists\nBe careful with overwrite operations in production, especially when the destination contains historical data."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.7 Partitioned Parquet storage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Partitioning organizes Parquet files into directories based on selected columns.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"df.write \\ .mode(\"overwrite\") \\ .partitionBy(\"year\", \"month\") \\ .parquet(\"warehouse/orders/\")\nPossible folder structure:\nwarehouse/orders/ year=2025/ month=11/ month=12/ year=2026/ month=1/ month=2/\nSuppose an analyst executes:\nSELECT * FROM orders WHERE year = 2026 AND month = 2;\nSpark may skip irrelevant directory partitions through partition pruning."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.8 The small-file problem</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One common problem in large-scale data engineering is the small-file problem.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a Spark job writes 100,000 tiny Parquet files instead of a smaller number of suitably sized files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This can cause:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Excessive file metadata.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Slow directory listing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Increased planning overhead.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Too many tasks for relatively little data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inefficient storage operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Solutions include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Controlling the number of output partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Using suitable repartition() or coalesce() operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compaction of small files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avoiding unnecessarily granular storage partitioning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Do not create a separate directory for every unique customer or transaction. Choose partition columns based on common query filters and data volume.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.9 What is a Data Lake?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Data Lake is a storage architecture designed to hold large volumes of raw and processed data in different formats.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can store:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CSV files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parquet files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Images.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Audio and video.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application logs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Structured and semi-structured records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples of data lake storage platforms include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Amazon S3.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Azure Data Lake Storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Google Cloud Storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data lake provides flexible and relatively inexpensive storage, but managing reliable analytical tables on top of raw files requires additional capabilities.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.10 What is a Data Warehouse?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Data Warehouse is a system designed for organized analytical data storage and reporting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It typically contains structured, cleaned and modeled datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is commonly used by:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business analysts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data analysts.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reporting systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business intelligence teams.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Management dashboards.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A retail company might have a data warehouse containing:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">sales_fact customer_dimension product_dimension location_dimension date_dimension</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.11 Data Lake vs Data Warehouse</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Feature</th><th className="px-4 py-3">Data Lake</th><th className="px-4 py-3">Data Warehouse</th><th className="px-4 py-3">Data types</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Structured, semi-structured and unstructured</td><td className="px-4 py-2.5 text-stone-700">Primarily structured analytical data</td><td className="px-4 py-2.5 text-stone-700">Storage</td><td className="px-4 py-2.5 text-stone-700">Often object storage or distributed filesystems</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Warehouse-managed storage</td><td className="px-4 py-2.5 text-stone-700">Data flexibility</td><td className="px-4 py-2.5 text-stone-700">High</td><td className="px-4 py-2.5 text-stone-700">More controlled</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Schema approach</td><td className="px-4 py-2.5 text-stone-700">Often schema-on-read or managed schemas</td><td className="px-4 py-2.5 text-stone-700">Commonly schema-on-write</td><td className="px-4 py-2.5 text-stone-700">Use cases</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Data science, raw data storage, processing</td><td className="px-4 py-2.5 text-stone-700">BI, reporting and analytics</td><td className="px-4 py-2.5 text-stone-700">Typical users</td><td className="px-4 py-2.5 text-stone-700">Data engineers, data scientists</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.12 What is a Data Lakehouse?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Data Lakehouse combines the flexibility and storage characteristics of data lakes with important data-management capabilities associated with data warehouses.</p>
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
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A lakehouse provides capabilities such as:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reliable table management.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactional operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema enforcement and evolution.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Historical data access.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch and streaming integration.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytical query processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.13 Why do we need a Lakehouse?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a company has 100 TB of historical customer and transaction data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its data lake stores millions of Parquet files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The company needs to:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Insert new transactions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Update customer information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delete incorrect records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintain consistent analytical queries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Track historical versions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Allow multiple processing jobs to access the tables safely.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Plain Parquet files by themselves do not provide a complete table transaction and metadata-management system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Lakehouse table formats add this management layer.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.14 Important Lakehouse technologies</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Delta Lake - Database of Databases</span>
            <a href="https://images.openai.com/static-rsc-4/h_8Xwe_N2JxWEDRHo13nUN5ZQAnFDY5Z3qhEwcnASTcNqjFc4dG50UYSjHLc2yYQsZ64mPIDycRTwkmp3hiW2FXshFDYjIbr9HpFE1-h0vCEuhtl5cRRMwN7nMIfOQOFrEuHmRZ-Z5gI2B9qwLCcJc9UT7NdSobkmeCD8MZ1_C4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delta Lake</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Provides transactional table management, ACID transactions, schema enforcement, time travel, and update/delete operations on lake storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Commonly used with Apache Spark.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Create, Merge and Time-Travel with Apache Iceberg using AWS Glue | by Umid Kumar Dey | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/yBmfuc2G3H5zmDOH5zBGAE6QTPdlsaaPpZkigCINKhPgTgI-opAwQdC4LZhXWM7nIpu48vJObkFUG7DwHl9h8Fm8DPwok5LcELixzWdbGsP7ZxTHkYClBn3AiBWlUilJ40rP3WCxV02gh38PuXA-QC0oMNVp3V4T_MEt1HIY17Y?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Iceberg</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Provides table metadata management, snapshots, schema evolution, partition evolution and reliable analytical table operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Supports multiple query and processing engines.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Fletum - Revenue Operations Platform | Boost Your Revenue with AI-Powered RevOps</span>
            <a href="https://images.openai.com/static-rsc-4/rFAT2X_5ZF4TPFpgiYWacY3dUGOEz5Unki33pB-GoWBs84bby8qop-J9MikKpvZDDPqL8ZZELVTyujSKjy7xxcadkSNckIjmRBCl45GOStwOv6HgcvSO9O9mi2QZO8cSOIHXcbW7wI4UexUtDbcF_1JkxROxgmFwb8NihfCtT7g?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Hudi</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Provides incremental data processing, record-level inserts, updates, deletes and table management for data lake workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Useful in ingestion and change-data-capture pipelines.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.15 Parquet vs Delta Lake vs Iceberg vs Hudi</span>
          </h3>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Technology</th><th className="px-4 py-3">What it provides</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Parquet</td><td className="px-4 py-2.5 text-stone-700">Columnar file storage</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Delta Lake</td><td className="px-4 py-2.5 text-stone-700">Transactional lakehouse tables</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Apache Iceberg</td><td className="px-4 py-2.5 text-stone-700">Open table format and metadata management</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Apache Hudi</td><td className="px-4 py-2.5 text-stone-700">Transactional data lake tables and incremental data processing</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">An important distinction:</td><td className="px-4 py-2.5 text-stone-700">Parquet is a file format. Delta Lake, Iceberg and Hudi are table-management technologies that can use Parquet data files.</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">For example, Delta Lake uses versioned Parquet files along with a transaction log.</td><td className="px-4 py-2.5 text-stone-700">Delta Lake+1</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Iceberg supports schema and partition evolution using table metadata rather than relying solely on the directory structure.</td><td className="px-4 py-2.5 text-stone-700">GitHub+1</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.16 Medallion Architecture</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A common way to organize data in a lakehouse is the Medallion Architecture.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Databricks The Medallion Architecture - EndToEndData - Medium</span>
            <a href="https://images.openai.com/static-rsc-4/m5FM23jX83kZnBDPCZKxELBElvsxikkL2ghxOHRrJ0nMCy781545fn82SyGbO-_ULBc2f88LpArg3lzvnRt5MvKOYdzFTce4yaroqOd0A8smV1u3MeNWHxWNUlCJ02cM_473k89nG2d3bdedgsPMG7dzM_wAojWnigFxNBcHMjM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/endtoenddata/databricks-the-medallion-architecture-a1ea27311feb?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It consists of three primary layers.</p>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Bronze Layer — Raw Data
            </span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Stores incoming data with minimal transformation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">bronze/ orders/ customers/ payments/</p>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Silver Layer — Cleaned Data
            </span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Contains validated, standardized and deduplicated data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">silver/ clean_orders/ clean_customers/ valid_payments/</p>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Gold Layer — Business-Ready Data
            </span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Contains aggregated and modeled datasets for reporting, analytics and business applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">gold/ daily_revenue/ customer_metrics/ product_performance/</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22.17 Real-world example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a retail company receives customer order records from its website.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The pipeline works as follows:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Raw order events arrive in object storage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark reads the raw records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Bronze tables retain the incoming data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark validates records and removes duplicates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cleaned results are written to Silver tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark calculates daily sales and customer metrics.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregated datasets are written to Gold tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A BI platform reads the Gold tables to generate dashboards.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This architecture separates ingestion, cleaning and business analytics, making the data platform easier to manage.</p>
        </div>
      </section>

      {/* SECTION 23: 23. Building Large-Scale Distributed Pipelines */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Pipeline Engineering</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          23. Building Large-Scale Distributed Pipelines
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is where everything you have learned in this module comes together.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data pipeline is a sequence of processing operations that moves data from its source to its destination.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A distributed data pipeline uses Spark to process large datasets across multiple computing resources.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.1 Example: E-commerce analytics pipeline</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a company such as an online marketplace.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It receives data from multiple sources:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Website orders.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer registrations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Product information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Payment records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Delivery updates.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its objective is to create reliable datasets for business analytics.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Data Intelligence End-to-End Architecture With Azure Databricks | Databricks</span>
            <a href="https://images.openai.com/static-rsc-4/Yy6cg990iSBgodBmhDMP1BYn7fYatbtGNu6eFxv7_LpYXcB0Z07I9ykEzhVhbRyNsKR_3p6vd30cq0Q0k9UcHDE42Rjr22bkJeJneA0DdnkSCRVlEm6ACa0DRnalgJ-Zv0CyTuCkbKb_e10qGM33JK7lu2aCzD0h6HsgxnVBkIw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">databricks.com</span>
            <a href="https://www.databricks.com/resources/architectures/data-intelligence-architecture-end-to-end-with-azure-databricks?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The complete workflow includes:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 1 — Data Ingestion</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Collect data from source systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sources might include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Relational databases.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">REST APIs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Kafka.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON event streams.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CSV files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud object storage.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 2 — Raw Data Storage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Store incoming records in the Bronze layer.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 3 — Distributed Processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark processes data using distributed partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Operations may include:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data cleaning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Null handling.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Type conversion.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deduplication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Filtering.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Aggregations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 4 — Data Quality Validation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validate the processed data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Order IDs must not be null.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transaction amounts must not be negative.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer identifiers must be valid.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Duplicate orders must be identified.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Date fields must have the expected format.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 5 — Data Transformation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transform cleaned records into business-ready datasets.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 6 — Data Storage</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Write processed results into Parquet or a lakehouse table.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stage 7 — Data Consumption</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Make the results available for:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Dashboards.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Business reporting.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Machine learning.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analytical SQL queries.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Downstream applications.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.2 Production pipeline design principles</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A professional data engineer must consider more than just whether the Spark code runs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Scalability: Can the pipeline handle increasing data volumes?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Fault tolerance: What happens when a worker fails?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Idempotency: Can a pipeline be safely rerun without creating duplicate results?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data quality: Are the input and output records correct?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Observability: Can engineers identify failures and performance problems?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Security: Are sensitive records protected?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cost efficiency: Is the cluster using resources effectively?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintainability: Can someone else understand, test and modify the pipeline?</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.3 Handling failures</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a pipeline processes 10 million transactions, but the application fails during the output stage.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A reliable system should provide a strategy for recovering without corrupting previously published data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Possible techniques:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reprocess from durable input sources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use transactional table writes where supported.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Maintain checkpoints for streaming workloads.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validate output before publishing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use unique business keys to prevent duplication.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Record pipeline execution status.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>23.4 Batch vs streaming pipeline design</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Batch pipeline:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"Daily CSV files | v Spark Batch | v Data Validation | v Transformation | v Parquet Tables | v BI Dashboard"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Streaming pipeline:</p>
          <pre className="bg-stone-900 text-stone-200 p-4 rounded-xl font-mono text-xs overflow-x-auto my-3 leading-relaxed border border-stone-800">
            {"Website Events | v Kafka | v Spark Structured Streaming | v Real-time Processing | v Lakehouse Tables | v Monitoring / Analytics"}
          </pre>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark Structured Streaming uses Spark's structured processing engine for streaming workloads and supports incremental processing, including checkpoint-based recovery patterns.</p>
        </div>
      </section>

      {/* SECTION 24: 24. Practical Project — Build a Distributed E-Commerce Analytics Pipeline Using PySpark */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500">Capstone Implementation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          24. Practical Project — Build a Distributed E-Commerce Analytics Pipeline Using PySpark
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now let's combine the concepts into one practical project.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Hands-on capstone</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Project: Large-Scale E-Commerce Sales Analytics Platform</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Build an end-to-end data pipeline that reads transactions, cleans the data, joins customer information, calculates business metrics and stores the output in Parquet format.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.1 Project architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Building a Real-Time E-Commerce Analytics Pipeline | by Srujan Krishna | Feb, 2026 | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/uSpeS2B4mdC1X-6woZuTkpLuUrdX4IjOPBZOkE1vIyOoqacIy9UlCnqHeGZpuFyEuMVxoY4nxbJDnWP92DmhrbXRuCepEoNBApuCEjfBeAUBuSqr-dU6G9JZyGgHpzyFzIQ8YeSRn_76giAwO8JRT6VT1tbRPCG7nCFG4kzO9s0?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40srujankrishnac1/building-a-real-time-e-commerce-analytics-pipeline-923f5abad7e9?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">We will implement:</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Layer</th><th className="px-4 py-3">Responsibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Source</td><td className="px-4 py-2.5 text-stone-700">Customer and order datasets</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Bronze</td><td className="px-4 py-2.5 text-stone-700">Raw incoming records</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Silver</td><td className="px-4 py-2.5 text-stone-700">Cleaned, validated and deduplicated records</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Gold</td><td className="px-4 py-2.5 text-stone-700">Analytical aggregations</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Storage</td><td className="px-4 py-2.5 text-stone-700">Parquet files</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Processing</td><td className="px-4 py-2.5 text-stone-700">Apache Spark using PySpark</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.2 Step 1 — Initialize Spark</span>
          </h3>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql import SparkSession spark = ( SparkSession.builder .appName(\"EcommerceAnalytics\") .master(\"local[*]\") .config(\"spark.sql.shuffle.partitions\", \"8\") .getOrCreate() ) print(\"Spark application started\")\nFor learning, we use local execution. A production deployment would use an appropriate cluster manager."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.3 Step 2 — Create sample datasets</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders_data = [ (101, 1, &quot;Laptop&quot;, 50000, &quot;Mumbai&quot;, &quot;2026-01-01&quot;), (102, 2, &quot;Mobile&quot;, 20000, &quot;Pune&quot;, &quot;2026-01-02&quot;), (103, 1, &quot;Tablet&quot;, 15000, &quot;Mumbai&quot;, &quot;2026-01-03&quot;), (104, 3, &quot;Laptop&quot;, 60000, &quot;Delhi&quot;, &quot;2026-01-04&quot;), (105, 4, &quot;Mobile&quot;, 18000, &quot;Pune&quot;, &quot;2026-01-05&quot;), (106, 2, &quot;Laptop&quot;, -500, &quot;Pune&quot;, &quot;2026-01-06&quot;), ] orders_columns = [ &quot;order_id&quot;, &quot;customer_id&quot;, &quot;product&quot;, &quot;amount&quot;, &quot;city&quot;, &quot;order_date&quot; ] orders_df = spark.createDataFrame( orders_data, orders_columns ) customers_data = [ (1, &quot;Amit&quot;, &quot;Mumbai&quot;), (2, &quot;Neha&quot;, &quot;Pune&quot;), (3, &quot;Rahul&quot;, &quot;Delhi&quot;), (4, &quot;Priya&quot;, &quot;Pune&quot;) ] customers_df = spark.createDataFrame( customers_data, [&quot;customer_id&quot;, &quot;customer_name&quot;, &quot;customer_city&quot;] )</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.4 Step 3 — Store raw data in Bronze</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">orders_df.write \ .mode(&quot;overwrite&quot;) \ .parquet(&quot;data/bronze/orders/&quot;) customers_df.write \ .mode(&quot;overwrite&quot;) \ .parquet(&quot;data/bronze/customers/&quot;)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Bronze layer preserves the incoming datasets for later processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.5 Step 4 — Read and validate records</span>
          </h3>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql.functions import ( col, to_date, year, month ) orders = spark.read.parquet( \"data/bronze/orders/\" ) orders = ( orders .withColumn(\"amount\", col(\"amount\").cast(\"double\")) .withColumn(\"order_date\", to_date(\"order_date\")) ) valid_orders = orders.filter( col(\"order_id\").isNotNull() & col(\"customer_id\").isNotNull() & col(\"amount\").isNotNull() & (col(\"amount\") >= 0) & col(\"order_date\").isNotNull() )\nThis removes records with missing essential fields, invalid amounts or invalid dates.\nIn a production system, invalid records should also be sent to a quarantine or rejected-record dataset so they can be investigated instead of silently discarded."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.6 Step 5 — Remove duplicate records</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For this example, assume the latest order record should be retained.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql.window import Window from pyspark.sql.functions import row_number window_spec = ( Window .partitionBy(\"order_id\") .orderBy(col(\"order_date\").desc()) ) deduplicated_orders = ( valid_orders .withColumn( \"row_number\", row_number().over(window_spec) ) .filter(col(\"row_number\") == 1) .drop(\"row_number\") )\nFor production, use an appropriate source update timestamp or sequence number to determine which duplicate is authoritative."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.7 Step 6 — Enrich transactions with customer information</span>
          </h3>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql.functions import broadcast customers = spark.read.parquet( \"data/bronze/customers/\" ) enriched_orders = deduplicated_orders.join( broadcast(customers), on=\"customer_id\", how=\"inner\" )\nThis demonstrates how a broadcast join can enrich a transaction dataset with a relatively small customer lookup dataset."}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.8 Step 7 — Create the Silver layer</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">enriched_orders.write \ .mode(&quot;overwrite&quot;) \ .partitionBy(&quot;order_date&quot;) \ .parquet(&quot;data/silver/orders/&quot;)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Silver layer contains validated, deduplicated and enriched records.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.9 Step 8 — Calculate Gold-level metrics</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate total sales by city and product.</p>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"from pyspark.sql.functions import ( sum, avg, count, max ) sales_metrics = ( enriched_orders .groupBy(\"city\", \"product\") .agg( sum(\"amount\").alias(\"total_revenue\"), avg(\"amount\").alias(\"average_order_value\"), count(\"order_id\").alias(\"total_orders\"), max(\"amount\").alias(\"maximum_order_value\") ) )"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.10 Step 9 — Store Gold datasets</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">sales_metrics.write \ .mode(&quot;overwrite&quot;) \ .parquet(&quot;data/gold/sales_metrics/&quot;)</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.11 Step 10 — Query analytical results</span>
          </h3>
          <div className="my-3 rounded-xl bg-stone-900 border border-stone-800 p-4 overflow-x-auto">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono mb-2 pb-2 border-b border-stone-800">
              <span className="flex items-center gap-1.5"><Code2 size={13} className="text-orange-400" /> PySpark / SQL Execution Block</span>
              <span className="text-stone-500">Distributed Code</span>
            </div>
            <pre className="font-mono text-xs sm:text-sm text-stone-100 leading-relaxed overflow-x-auto">
              {"gold_df = spark.read.parquet( \"data/gold/sales_metrics/\" ) gold_df.show()\nYou can also register a SQL view:\ngold_df.createOrReplaceTempView(\"sales_metrics\") spark.sql(\"\"\" SELECT city, SUM(total_revenue) AS revenue FROM sales_metrics GROUP BY city ORDER BY revenue DESC \"\"\").show()"}
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>24.12 What have you implemented?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Project completion checklist</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark initialization</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data ingestion</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Bronze storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data validation</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deduplication</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Broadcast join</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Silver storage</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Gold aggregations</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parquet output</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Spark SQL analysis</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a learning implementation. A production version would additionally need incremental processing, transactional output management, logging, monitoring, schema management, automated data-quality checks, access controls and orchestration.</p>
        </div>
      </section>

      {/* SECTION 25: 25. Practical Labs and Assignments */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500">Hands-on Labs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          25. Practical Labs and Assignments
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">To master this module, complete these exercises rather than only reading the concepts.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 1 — Distributed computing fundamentals</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Understand how Spark distributes data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Create an RDD containing 100,000 integers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Divide it into 10 partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate the sum of all values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Find the maximum and minimum values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Print the number of partitions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compare execution with different partition counts.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 2 — RDD and DataFrame processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Work with both Spark abstractions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Create an RDD from a customer dataset.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apply map() and filter().</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Convert the RDD into a DataFrame.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Perform aggregations with DataFrame APIs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Register a temporary SQL view.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Reproduce the same results using SQL.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 3 — Joins and aggregation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Understand large-scale relational processing.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Create orders and customers datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Perform inner joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Perform left and anti joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Calculate customer-level revenue.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Find the top 10 customers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compare shuffle and broadcast join execution plans.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 4 — Spark optimization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Understand Spark performance.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Create a dataset with several million records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Experiment with repartition().</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Experiment with coalesce().</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compare normal joins and broadcast joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Introduce skewed data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Inspect Spark UI.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Analyze explain() output.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apply AQE and compare execution plans.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Lab 5 — Lakehouse pipeline</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Objective: Develop an end-to-end data engineering pipeline.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Tasks:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ingest CSV and JSON files.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Store raw data in Bronze.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Clean the data in Silver.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Perform customer and transaction joins.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build analytical Gold tables.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Store data using Parquet.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement Delta Lake or Apache Iceberg table management.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validate the pipeline output.</p>
        </div>
      </section>

      {/* SECTION 26: 26. Advanced Assignments */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500">Platform Challenges</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          26. Advanced Assignments
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These assignments are designed to move beyond basic PySpark programming.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Assignment</th><th className="px-4 py-3">Skills developed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Large-scale log analysis</td><td className="px-4 py-2.5 text-stone-700">Distributed processing and aggregations</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Fraud detection data pipeline</td><td className="px-4 py-2.5 text-stone-700">Joins, filtering and analytical logic</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Customer 360 platform</td><td className="px-4 py-2.5 text-stone-700">Data integration and lakehouse modeling</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Real-time payment analytics</td><td className="px-4 py-2.5 text-stone-700">Structured Streaming</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Skew optimization challenge</td><td className="px-4 py-2.5 text-stone-700">Partitioning, salting and AQE</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Incremental transaction processing</td><td className="px-4 py-2.5 text-stone-700">Idempotency and change-data processing</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Historical sales warehouse</td><td className="px-4 py-2.5 text-stone-700">Parquet, partition pruning and dimensional modeling</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Recommended final project</td><td className="px-4 py-2.5 text-stone-700">Build a Distributed Customer Analytics Platform.</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Your platform should ingest customer information, historical transactions, product data and payment events.</td><td className="px-4 py-2.5 text-stone-700">It should process the data using Spark and provide:</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Customer lifetime value.</td><td className="px-4 py-2.5 text-stone-700">Daily, weekly and monthly revenue.</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Most frequently purchased products.</td><td className="px-4 py-2.5 text-stone-700">Regional sales performance.</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Customer retention metrics.</td><td className="px-4 py-2.5 text-stone-700">Duplicate transaction detection.</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Suspicious transaction identification.</td><td className="px-4 py-2.5 text-stone-700">Historical analytical reports.</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 27: 27. Interview Preparation — Apache Spark */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-stone-500">Technical Interviews</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          27. Interview Preparation — Apache Spark
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These are important questions for Data Engineer and Big Data Engineer interviews.</p>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Fundamental questions
            </span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is distributed computing?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is Apache Spark?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How is Spark different from Hadoop MapReduce?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Explain the Hadoop ecosystem.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is HDFS?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Explain NameNode and DataNode.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is the MapReduce programming model?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is a Spark cluster?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What are Driver and Executors?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Explain Job, Stage and Task.</p>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Spark programming questions
            </span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is an RDD?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is RDD lineage?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How does Spark provide fault tolerance?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is the difference between RDD and DataFrame?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is a Dataset?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Explain Spark SQL.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is the Catalyst Optimizer?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is lazy evaluation?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Explain transformations and actions.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What are narrow and wide transformations?</p>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Performance and optimization questions
            </span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is data partitioning?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Difference between repartition() and coalesce()?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is shuffling?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Why is shuffling expensive?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is a broadcast join?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Difference between broadcast and shuffle joins?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What are caching and persistence?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is data skew?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How do you solve data skew?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is Adaptive Query Execution?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How does Spark manage memory?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What causes executor out-of-memory errors?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is the small-file problem?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How do you optimize a Spark job?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How do you use Spark UI to debug a slow application?</p>
          <div className="mt-4 mb-2 flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 text-xs font-bold uppercase tracking-wider">
              Advanced data engineering questions
            </span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is Parquet?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Difference between row-oriented and column-oriented storage?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is partition pruning?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is a Data Lakehouse?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Difference between Parquet and Delta Lake?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is schema evolution?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">What is Medallion Architecture?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How would you build an incremental Spark pipeline?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How would you make a Spark pipeline idempotent?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">How do you design a fault-tolerant distributed data pipeline?</p>
        </div>
      </section>

      {/* SECTION 28: 28. Recommended Learning Resources */}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 28
          </span>
          <span className="text-xs font-mono text-stone-500">Official Documentation</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          28. Recommended Learning Resources
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">These resources provide deeper technical documentation and implementation guidance.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Spark Architecture Explained</span>
            <a href="https://images.openai.com/static-rsc-4/Ld1ujnd0gwlrmHmfMddqGJT3iUmZm3HK6IK33JsUkpqhTv8T9KgDuQqOLTuuuVdIaHryf-i4yTgMcxgNT1eqiNzXq0lPnVwGV3Qy7zy0U9drLCcgu0ztvn2A0S2DVV_pyVlWV0SCrbHklN7mFoec3OGrNtDuNTCldS8RGkh3y3M?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>1. Apache Spark Documentation</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Official documentation and programming guides</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore Spark documentation</span>
            <a href="https://spark.apache.org/docs/latest/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Free High-Quality Hadoop Logo for Creative Design</span>
            <a href="https://images.openai.com/static-rsc-4/xOZM7rt6GX9nLBPizPDl1zFd5Rfq9L7ZGnFfzjWeqFVVPJNgYZARRTgy2siFP8RjFVFL_qkWKNS56hn8CFIJ5qL3DcaIP2CIW0un1_tP-rPgyNYyDUIcZAkYFfODgijQ7F5VURGXr_MVUJ330nBByJsQqC1jt87SrUrOhiOUtJ0?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>2. Apache Hadoop Documentation</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HDFS, YARN and distributed storage</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore Hadoop documentation</span>
            <a href="https://hadoop.apache.org/docs/stable/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Parquet</span>
            <a href="https://images.openai.com/static-rsc-4/-0sK_22sEW2Sh6u_c7vCRiXW_YiHWZcmawi2ZyB8ylbQQ9ZOYG_oVkHbFjhActMk3Uyyx6KISdt_5s8OcCa-hWo2D7A846ETPWgmu56txkSIRK2QWrjZwYADEiZXQ4E_Yd7mfVtaRl2Y5b3RcQ42TUX2p4trCIjTpecQy0BbvdE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>3. Apache Parquet</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Columnar storage and file specification</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore Parquet documentation</span>
            <a href="https://parquet.apache.org/docs/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Delta Lake</span>
            <a href="https://images.openai.com/static-rsc-4/ZjWq_g4mKUF7ESsPvsHzigLNTzSPGKTQBvI_OKX0MLoiBCkHr1-bonUJXlzmRsaqsLhWpZSZWiOBF2MLkARnxjRs299y-Nhn6p1yErZzyWpmre9p_hqnuOIH6XItzSU_hXxx8CI1HkzCCp9CVo93u3tprd_gTSZrOKeYaQKsG5Y?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>4. Delta Lake</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Transactions, schema evolution and lakehouse</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore Delta Lake documentation</span>
            <a href="https://docs.delta.io/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Iceberg Icon | Dashboard Icons</span>
            <a href="https://images.openai.com/static-rsc-4/KKxU2RyApH_xql380suh_-LbsHpxZdBVLSjeGNXJnOgFnN08XPzHUT2KAUq775vs4zPQj8NkvnZqoK8HAXnPTFU-3lLl9K9cADND0XnpZIkLVNBrg6g_kD6EghA_ez8zs1pfTLIr1e5CPUQakU5CbBIeYW2NqJus3on_ljqiZR4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>5. Apache Iceberg</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Open table formats and table evolution</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore Iceberg documentation</span>
            <a href="https://iceberg.apache.org/docs/latest/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Spark Icon and Apache Spark Logo PNG for Developers</span>
            <a href="https://images.openai.com/static-rsc-4/0lmfX9ty0fosvUQPhK6_zhCM6_3DBqrKm96By6XN9CcnISRc8M-EZvy4ANhmt6UqxORf1Hdh14aMYj5N9cjrDyTqfK0LzRGUm-CXaaEIRXlAqKcjrdFt91TfXvxhKQymrnamJYdkKCEy6ysPQuiSxW-IYwjOVO1SxyQtOeYepdM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-stone-900 mt-4 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-stone-700" />
            <span>6. PySpark API Reference</span>
          </h4>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Python implementation and API learning</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Explore PySpark API</span>
            <a href="https://spark.apache.org/docs/latest/api/python/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 29: 29. Final Module Summary */}
      <section id="section-29" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 29
          </span>
          <span className="text-xs font-mono text-stone-500">Mastery Synthesis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          29. Final Module Summary
        </h2>
        <div className="space-y-3">

          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After completing this module, you should understand how large datasets are processed across multiple machines and how Spark fits into a modern data engineering platform.</p>
          <div className="my-4 overflow-x-auto rounded-xl border border-[#e7e3da] bg-white shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#faf8f5] text-stone-900 border-b border-[#e7e3da] font-semibold">
                <tr>
                  <th className="px-4 py-3">Area</th><th className="px-4 py-3">What you should master</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3da]">
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Distributed Computing</td><td className="px-4 py-2.5 text-stone-700">Clusters, nodes, partitions and parallelism</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Big Data</td><td className="px-4 py-2.5 text-stone-700">Volume, velocity, variety, veracity and value</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Hadoop</td><td className="px-4 py-2.5 text-stone-700">HDFS, YARN and ecosystem</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">MapReduce</td><td className="px-4 py-2.5 text-stone-700">Map, Shuffle, Sort and Reduce</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">HDFS</td><td className="px-4 py-2.5 text-stone-700">NameNode, DataNode, blocks and replication</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Spark Architecture</td><td className="px-4 py-2.5 text-stone-700">Driver, Cluster Manager and Executors</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Spark Clusters</td><td className="px-4 py-2.5 text-stone-700">Standalone, YARN and Kubernetes</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">RDD</td><td className="px-4 py-2.5 text-stone-700">Lineage, transformations and fault tolerance</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">DataFrames</td><td className="px-4 py-2.5 text-stone-700">Structured distributed processing</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Datasets</td><td className="px-4 py-2.5 text-stone-700">Type-safe distributed processing</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Spark SQL</td><td className="px-4 py-2.5 text-stone-700">Query processing and optimization</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Execution</td><td className="px-4 py-2.5 text-stone-700">Jobs, stages, tasks and lazy evaluation</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Partitioning</td><td className="px-4 py-2.5 text-stone-700">Parallelism and partition management</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Shuffling</td><td className="px-4 py-2.5 text-stone-700">Data redistribution and exchange</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Joins</td><td className="px-4 py-2.5 text-stone-700">Inner, outer, semi and anti joins</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Broadcast Joins</td><td className="px-4 py-2.5 text-stone-700">Small-table join optimization</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Caching</td><td className="px-4 py-2.5 text-stone-700">Persistence and memory reuse</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Data Skew</td><td className="px-4 py-2.5 text-stone-700">Skew detection and mitigation</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Memory</td><td className="px-4 py-2.5 text-stone-700">Execution and storage memory</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Performance</td><td className="px-4 py-2.5 text-stone-700">AQE, Spark UI and optimization</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Parquet</td><td className="px-4 py-2.5 text-stone-700">Columnar storage and compression</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Lakehouse</td><td className="px-4 py-2.5 text-stone-700">Delta Lake, Iceberg and Hudi</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">Pipelines</td><td className="px-4 py-2.5 text-stone-700">End-to-end distributed data processing</td>
                  </tr>
                
                  <tr className="bg-[#fcfbf9]">
                    <td className="px-4 py-2.5 text-stone-700">Module 11 — Learning Outcome</td><td className="px-4 py-2.5 text-stone-700">By the end of this module, you should be capable of designing and implementing distributed data-processing pipelines using Apache Spark, optimizing large-scale workloads, managing partitioning and shuffling, working with Parquet and lakehouse tables, and producing reliable analytical datasets.</td>
                  </tr>
                
                  <tr className="bg-white">
                    <td className="px-4 py-2.5 text-stone-700">The most important practical skill: Understand not just how to write PySpark code, but also how Spark executes that code across a cluster, where performance bottlenecks occur, and how to resolve them.</td><td className="px-4 py-2.5 text-stone-700">Suggested progression: First master Spark DataFrames and SQL, then learn joins, shuffling and optimization, and finally build the complete Bronze–Silver–Gold pipeline. This gives you the foundation needed for advanced Data Engineering topics such as real-time stream processing, workflow orchestration and production lakehouse architecture.</td>
                  </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}
