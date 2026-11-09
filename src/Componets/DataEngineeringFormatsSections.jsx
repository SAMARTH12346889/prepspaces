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
  Code2
} from "lucide-react";

export default function DataEngineeringFormatsSections() {
  return (
    <div className="space-y-10">
      {/* SECTION 0: Module 6: Data Formats, Serialization and Data Integration Specification */}
      <section id="overview" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Roadmap
          </span>
          <span className="text-xs font-mono text-stone-500">Course Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 6: Data Formats, Serialization and Data Integration Specification
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data Formats, Serialization and Data Integration is a core module in Data Engineering. It explains how data moves between applications, databases, APIs, programming languages, streaming platforms, data warehouses, and cloud storage systems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">In the previous modules, we learned how to design databases, understand database internals, optimize SQL queries, and manage large-scale database operations.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now we need to answer a different question:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How do different systems exchange data when they use different programming languages, database structures, storage formats, and communication protocols?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce company operating a data engineering platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its data comes from multiple sources:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer information from PostgreSQL.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Product information from external REST APIs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment information from payment gateways.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Website activity from event streams.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Order information from operational databases.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Marketing information from CSV and Excel files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These systems do not necessarily store or transmit data in the same format.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One system may produce JSON, another may use Avro, another may generate CSV, while the data warehouse stores analytical data in Parquet.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data engineer must know how to:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Understand different data formats.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Serialize and deserialize structured information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Choose efficient storage formats.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compress large datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validate schemas and manage schema evolution.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Integrate data from REST APIs and external services.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Handle pagination, authentication, and rate limits.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Process webhooks and event-based integrations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Maintain reliable data contracts between producers and consumers.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module structure</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This module has five major learning areas:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Part</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Learning area</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Main focus</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Serialization foundations</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data representation, encoding, decoding</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data formats</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CSV, JSON, XML, Avro, Parquet, ORC, Arrow</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data engineering optimization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Binary serialization, compression, schema evolution, registries</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>API integration</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">REST architecture, authentication, pagination, rate limits</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Production integration</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Webhooks, event integration, data contracts, compatibility</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 1 — Serialization Foundations and Data Representation
          </div>
        </div>
      </section>

      {/* SECTION 1: 1. Introduction to Data Serialization */}
      <section id="section-1" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Serialization Foundations</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          1. Introduction to Data Serialization
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Serialization is the process of converting structured data, such as an object, record, or data structure, into a format that can be stored or transmitted.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Deserialization is the reverse process: converting serialized information back into a usable data structure.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why do we need serialization?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a Python application has the following object:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer = &#123; "customer_id": 101, "name": "Rahul", "email": "rahul@example.com", "age": 23 &#125;</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This object exists inside the application's memory.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now imagine that the application needs to:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Send it to a Java application.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Save it to a file.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Publish it to Apache Kafka.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Transfer it through an HTTP API.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Store it in cloud object storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The receiving system cannot directly access the Python object's memory.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The data must first be converted into an agreed representation.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, JSON:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "customer_id": 101, "name": "Rahul", "email": "rahul@example.com", "age": 23 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The receiving application can deserialize this JSON into its own programming-language data structure.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Serialization and Deserialization in the Backend World | by Vikas Chhonkar | Jan, 2026 | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/O3QhpKHaAhLuWlvudjwWSUJVIiK91ZfIsX-9XMe4TFS2KWBO2reiRXRuIQycUVvl_gg75eguNQuOAALzORVr7yKSmPys3LaOPw30ER5K2H1D8unLGMHC_l11KiD7j_PV_Ys8NNoSHyDyZMAv757HP01UVmOBaGexzHPZc1ZsD5o?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40vikaschhonkar1/serialization-and-deserialization-in-the-backend-world-73a99f31ee58?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Serialization process</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source Application | v Structured Data | v Serialization | v Serialized Data | v File / Network / Kafka / Storage | v Deserialization | v Destination Data Structure</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example using Python JSON</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import json customer = { "customer_id": 101, "name": "Rahul", "email": "rahul@example.com", "age": 23 } # Serialization: Python object to JSON string serialized_data = json.dumps(customer) print(serialized_data) # Deserialization: JSON string to Python object deserialized_data = json.loads(serialized_data) print(deserialized_data["name"])
Output:`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">&#123;"customer_id": 101, "name": "Rahul", "email": "rahul@example.com", "age": 23&#125; Rahul</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Serialization vs deserialization</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Serialization</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Deserialization</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Converts objects into a transferable representation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reconstructs usable data structures</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Used before storage or transmission</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Used after retrieval or reception</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Object → JSON or binary</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON or binary → Object</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Also called encoding in many contexts</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Also called decoding in many contexts</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common serialization formats</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>JSON.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>XML.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Avro.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Protocol Buffers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>MessagePack.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Parquet.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Arrow IPC.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Not every format is designed for the same purpose. Some are optimized for APIs, some for streaming messages, some for analytical storage, and others for in-memory processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Where serialization is used in data engineering</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data pipelines: Converting extracted data into formats suitable for processing and storage.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Distributed systems: Exchanging structured messages between independent services.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Streaming: Serializing events before publishing them to Kafka or other messaging systems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data warehouses: Writing analytical datasets into Parquet or ORC.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>APIs: Encoding requests and responses as JSON or other media types.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Cloud storage: Storing serialized files in S3-compatible object storage or other cloud platforms.</p>
        </div>
      </section>

      {/* SECTION 2: 2. Row-Oriented vs Column-Oriented Formats */}
      <section id="section-2" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Storage Layouts</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          2. Row-Oriented vs Column-Oriented Formats
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">One of the most important decisions in data engineering is choosing how data should be physically organized.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two major approaches are:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Row-oriented storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Column-oriented storage.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The choice influences storage efficiency, query performance, compression, and data processing.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. Row-Oriented Storage</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>In row-oriented storage, all the values belonging to one record are stored together.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider this customer table:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>name</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>city</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>age</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>101</span>
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
            <span>23</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>102</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Priya</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Mumbai</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>25</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>103</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Aman</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delhi</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>22</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A row-oriented representation looks conceptually like:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">101, Rahul, Pune, 23 102, Priya, Mumbai, 25 103, Aman, Delhi, 22</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The values belonging to one customer are stored together.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">What Is a Columnar Database? | QuestDB</span>
            <a href="https://images.openai.com/static-rsc-4/-2AAt5pBcDvaHmr2ySpQdU19CiL4puP2fNvuwjztns6c14gTYYZQ7gVMb4TiNYg04_ST1xN9f8L3q4e0WEqrpr-WIVRXO6zvc6SZqdM6Z_5J_IW-V-07x1-wHdV2Ph2ATDmByXUCzOp_J8Gctu0Qd-CrmwXt5bSzqbOCIbAcSdo?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">questdb.io</span>
            <a href="https://questdb.io/glossary/columnar-database/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Advantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Efficient insertion of complete records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Convenient for retrieving individual records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Suitable for transactional applications.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Works well for frequent row-level updates.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Natural representation for OLTP workloads.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Analytical queries may read unnecessary columns.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Less efficient for some large-scale aggregate workloads.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compression may be less effective when different column values have unrelated data characteristics.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Examples of row-oriented database systems include PostgreSQL and traditional InnoDB table storage.</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. Column-Oriented Storage</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>In column-oriented storage, values from the same column are stored together.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The same customer table becomes:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id: 101, 102, 103 name: Rahul, Priya, Aman city: Pune, Mumbai, Delhi age: 23, 25, 22</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">In-depth: ClickHouse vs Elasticsearch - PostHog</span>
            <a href="https://images.openai.com/static-rsc-4/uRnQagWKU1mDklgW_wR7jNzWB_vFvtuvXuYWGEs_JMGDOqJvuhUFR-NrkQKU-ZIdk2ykbBL28cMUik8oiQxTp6AwbxJ1Nvzlxo0Ap2nN7t9ItUYC157d7h6rOsJVile8xoQX5FmA_7a3AfoRll5qLgso4FWp6oJpR_S4rzqzvJM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">posthog.com</span>
            <a href="https://posthog.com/blog/clickhouse-vs-elasticsearch?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Now consider an analytical query:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT AVG(age) FROM customers;`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The database mainly needs the age column.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A columnar representation can avoid reading unrelated customer names and city values.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Advantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Efficient analytical scanning.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reads only required columns.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Often enables better compression.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Good for aggregations and large-scale reporting.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Works well with vectorized execution.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Individual row modifications may be more complex or expensive.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reconstructing complete rows may require combining multiple column streams.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Small transactional updates are not always the ideal workload.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common column-oriented storage formats include:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Parquet.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache ORC.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Many analytical database storage engines.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Row-oriented vs column-oriented</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Row-oriented</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Column-oriented</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Storage layout</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Records together</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Same-column values together</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Best suited for</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Transactional workloads</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analytical workloads</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Single-row retrieval</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Generally efficient</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>May require multiple columns</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Column aggregation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Can read unnecessary data</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reads selected columns</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compression</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Often lower for analytical patterns</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Often very effective</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>PostgreSQL table storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet files</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>OLTP vs OLAP relationship</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>OLTP (Online Transaction Processing) focuses on frequent operational transactions.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Creating customer accounts.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Placing orders.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Updating inventory.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Processing payments.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">OLAP (Online Analytical Processing) focuses on analyzing large volumes of historical information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Monthly revenue reports.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer segmentation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Sales trend analysis.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Business intelligence dashboards.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">An Introduction to Vector Databases - Qdrant</span>
            <a href="https://images.openai.com/static-rsc-4/JmIYPZ6IwyyHmTwGiq63Oz-VCb02IP9eK0s7jPaaKGneJK27kB9vRE9jApf_oRL6GxqzqdLeV1Z055maHsYzAZ-MgwVzsON8XQeDRfLFfNlTqVtq8f6qVnUklcFwaqqd1yN6LpYZLtiAj72TN2s4Ayp-zWSZxXC5TURr-P-gSzA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">aidoczh.com</span>
            <a href="https://www.aidoczh.com/qdrant/articles/what-is-a-vector-database/index.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            Row-oriented and column-oriented refer to how data is physically organized, not simply whether a database uses SQL. SQL engines can support different storage models.
          </div>
        </div>
      </section>

      {/* SECTION 3: 3. CSV and TSV Formats */}
      <section id="section-3" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Tabular Text Formats</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          3. CSV and TSV Formats
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CSV and TSV are two widely used text formats for exchanging tabular data.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. CSV — Comma-Separated Values</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CSV stores records as lines, with fields separated by commas.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id,name,email,city,age 101,Rahul,rahul@example.com,Pune,23 102,Priya,priya@example.com,Mumbai,25 103,Aman,aman@example.com,Delhi,22</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Each line generally represents one record.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The first row often contains column names, although headers are a convention rather than an absolute requirement of the format.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Important CSV characteristics</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Human-readable text.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Simple to generate and consume.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Supported by spreadsheets and databases.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Suitable for exchanging relatively simple tabular data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Requires external interpretation or schema information for reliable data types.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CSV itself does not reliably encode data types, nested structures, or database relationships.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CSV special cases</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a customer's address:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Pune, Maharashtra, India</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The address contains commas.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It must be enclosed in quotes:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id,name,address 101,Rahul,"Pune, Maharashtra, India"</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What happens if a value contains quotation marks?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The CSV convention generally uses escaped quotation marks:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>101,Rahul,"He said ""Hello"""</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A robust CSV implementation must also handle newlines inside quoted fields, different line endings, character encodings, and empty values.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">RFC 4180 documents a widely used common CSV convention, but real applications still differ in dialect and interpretation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>RFC Editor+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reading CSV using Python</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import pandas as pd df = pd.read_csv("customers.csv") print(df.head()) print(df.info())`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Writing CSV</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import pandas as pd data = { "customer_id": [101, 102, 103], "name": ["Rahul", "Priya", "Aman"], "city": ["Pune", "Mumbai", "Delhi"] } df = pd.DataFrame(data) df.to_csv("customers.csv", index=False)`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CSV problems in data pipelines</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Problem 1 — Data type ambiguity</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id,amount 101,5000 102,4500</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Is customer_id an integer or string? Is amount an integer, decimal, or currency value?</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CSV cannot reliably answer these questions on its own.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Problem 2 — NULL representation</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Some systems use empty strings, NULL, NA, or another marker to represent missing values.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Problem 3 — Date ambiguity</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>01/02/2026</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This may mean January 2 or February 1, depending on the date convention.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Problem 4 — Delimiter issues</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If field values contain commas, quotation marks, or line breaks, a parser must follow the correct CSV dialect.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. TSV — Tab-Separated Values</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>TSV works similarly to CSV, but uses tab characters as field separators.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">customer_id name city age 101 Rahul Pune 23 102 Priya Mumbai 25 103 Aman Delhi 22</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CSV vs TSV</span>
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
            <span>TSV</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delimiter</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Comma</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Tab</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>File extension</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>.csv</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>.tsv</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Human readability</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>High</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>High</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Special issue</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Values containing commas</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Values containing tabs</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common use</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Spreadsheet exchange</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Tabular text exchange</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>When to use CSV and TSV</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use CSV for:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Importing/exporting data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Spreadsheet exchanges.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Simple reporting files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>External application integration.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use TSV when tab-delimited data is more convenient for the source or processing tools.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data engineering lesson: CSV is convenient, but production pipelines should explicitly define encoding, delimiter, header presence, null representation, date formats, decimal formats, and column types.</p>
        </div>
      </section>

      {/* SECTION 4: 4. JSON and JSON Lines */}
      <section id="section-4" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Hierarchical Text Formats</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          4. JSON and JSON Lines
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>JSON stands for JavaScript Object Notation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It is a lightweight, text-based format for representing structured data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON is widely used in:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>REST APIs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Web applications.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Microservices.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Configuration files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Event messages.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data integration pipelines.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The JSON format is language-independent and has a formal Internet standard defined by RFC 8259.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>RFC Editor+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. JSON structure</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">JSON supports:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Objects.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Arrays.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Strings.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Numbers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Booleans.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Null values.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "customer_id": 101, "name": "Rahul", "email": "rahul@example.com", "age": 23, "is_active": true, "address": { "city": "Pune", "state": "Maharashtra" }, "orders": [1001, 1002, 1003] }`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Important JSON concepts</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Object: Collection of key-value pairs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Array: Ordered collection of values.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Nested object: An object inside another object.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data types: Strings, numbers, booleans, objects, arrays, and null.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike XML, JSON does not have a native date or timestamp type. Applications must agree on an appropriate representation, commonly a string in a documented timestamp format.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON parsing using Python</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import json json_data = """ { "customer_id": 101, "name": "Rahul", "city": "Pune" } """ customer = json.loads(json_data) print(customer["name"]) print(customer["city"])`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON serialization</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import json customer = { "customer_id": 101, "name": "Rahul", "city": "Pune" } with open("customer.json", "w", encoding="utf-8") as file: json.dump(customer, file, indent=4)`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON advantages</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Human-readable.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Flexible nested structure.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Widely supported.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Convenient for APIs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Easy to generate using programming languages.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Suitable for variable-shaped records.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON disadvantages</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Field names are repeated across records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Can consume more storage than compact binary formats.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parsing can be more CPU-intensive than some binary representations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Type information and schema enforcement require additional definitions or validation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Very large monolithic JSON documents can be inconvenient to stream and process.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. JSON Lines (JSONL or NDJSON)</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>JSON Lines is a format in which every line contains one independent valid JSON value.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{"customer_id":101,"name":"Rahul","city":"Pune"} {"customer_id":102,"name":"Priya","city":"Mumbai"} {"customer_id":103,"name":"Aman","city":"Delhi"}`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Unlike an ordinary JSON array, each record can be read independently.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">How to choose the best file format for your IPinfo database? | IPinfo.io</span>
            <a href="https://images.openai.com/static-rsc-4/tHONjCWsjjoTWxVMC7J9E0erOFHddNNj2IuzEbUIZrHu2Py_DnPUcB84qnrAJ7j8TmoAaWfsJYQY3CfjhQYah9zxHggPUTQbgjWuNTm43Tm8f2N2G0fpSV05SZS7M46G94lYf_X2l0k-wPWbR_Cd3_Fh0VlAN3MrYbVLNDshHN0?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">ipinfo.io</span>
            <a href="https://ipinfo.io/blog/ipinfo-database-formats?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON vs JSON Lines</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Ordinary JSON array:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`[ {"id": 101, "name": "Rahul"}, {"id": 102, "name": "Priya"}, {"id": 103, "name": "Aman"} ]
JSON Lines:
{"id":101,"name":"Rahul"} {"id":102,"name":"Priya"} {"id":103,"name":"Aman"}`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Advantages of JSON Lines</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Processes records one at a time.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Works well with streaming pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Easy to append new records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Supports large files without loading the entire document into memory.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Convenient for logs and event datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A JSON Lines file is expected to use UTF-8 and contain one valid JSON value per line.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>jsonlines.org</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Python JSON Lines processing</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import json customers = [ {"id": 101, "name": "Rahul"}, {"id": 102, "name": "Priya"}, {"id": 103, "name": "Aman"} ] # Write JSON Lines with open("customers.jsonl", "w", encoding="utf-8") as file: for customer in customers: file.write(json.dumps(customer) + "\\n") # Read JSON Lines with open("customers.jsonl", "r", encoding="utf-8") as file: for line_number, line in enumerate(file, start=1): record = json.loads(line) print(record)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Real-world application: JSONL is particularly useful for exporting event logs, training datasets, application logs, and streaming records.</p>
        </div>
      </section>

      {/* SECTION 5: 5. XML Data Structures */}
      <section id="section-5" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <span className="text-xs font-mono text-stone-500">Part 1 · Enterprise Document Formats</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          5. XML Data Structures
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>XML stands for Extensible Markup Language.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is a text-based format designed to represent structured information using elements, attributes, and nested hierarchies.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">XML is used in:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Enterprise integrations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Financial systems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>SOAP web services.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Configuration files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Document exchange.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Government and industry data standards.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example XML</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`<?xml version="1.0" encoding="UTF-8"?> <customer> <customer_id>101</customer_id> <name>Rahul</name> <email>rahul@example.com</email> <address> <city>Pune</city> <state>Maharashtra</state> </address> <orders> <order> <order_id>1001</order_id> <amount>5000</amount> </order> <order> <order_id>1002</order_id> <amount>2500</amount> </order> </orders> </customer>`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>XML components</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Declaration</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`<?xml version="1.0" encoding="UTF-8"?>`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Specifies information such as the XML version and character encoding.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Elements</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`<name>Rahul</name>`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An element consists of a start tag, content, and an end tag, or can be self-closing.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Attributes</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`<customer id="101"> <name>Rahul</name> </customer>`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Here, id is an attribute.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Nested elements</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>XML allows elements to contain other elements, forming a hierarchical structure.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Namespaces</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Namespaces help prevent naming conflicts when combining XML structures from different systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>XML schema validation</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">XML can be validated using technologies such as:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>DTD (Document Type Definition).</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>XSD (XML Schema Definition).</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An XSD can define:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Allowed elements.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Required attributes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Element order.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Minimum and maximum occurrences.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Structural rules.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parsing XML using Python</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import xml.etree.ElementTree as ET tree = ET.parse("customer.xml") root = tree.getroot() customer_id = root.find("customer_id").text name = root.find("name").text print(customer_id) print(name)`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>XML vs JSON</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>XML</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Structure</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Elements and attributes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Objects and arrays</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Syntax</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Tag-based</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Key-value based</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Nested data</span>
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
            <span>Schema validation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>DTD and XSD</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON Schema and other validators</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Verbosity</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Often more verbose</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Usually more compact</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common use</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Enterprise and document integration</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>APIs and web applications</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Important XML security consideration</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When parsing untrusted XML, engineers must understand XML External Entity (XXE) vulnerabilities.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">External entity processing can expose local files or trigger unintended network requests when XML parsers are insecurely configured.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Production parsers should disable dangerous external entity resolution when it is not required and follow secure parsing practices.</p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 2 — Binary Serialization and Analytical Data Formats
          </div>
        </div>
      </section>

      {/* SECTION 6: 6. Apache Avro */}
      <section id="section-6" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Binary & Schema Formats</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          6. Apache Avro
        </h2>
        <div className="space-y-3">
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
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema-based serialization for distributed systems and data pipelines.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Avro is a data serialization system commonly used for exchanging structured data between distributed applications.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike ordinary JSON, Avro supports compact binary serialization using an associated schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is particularly useful in:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Kafka pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Distributed data processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Event streaming.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data ingestion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Cross-language application communication.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why Avro is needed</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a Java application sends customer events to a Python application.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both systems must understand:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Field names.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Field types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Field ordering and encoding rules.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How missing or newly added fields should be interpreted.</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Sending plain binary data without a schema can create problems because the receiving application may not know how to interpret the bytes.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avro addresses this through schema-based serialization and schema resolution.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro schema</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "type": "record", "name": "Customer", "namespace": "com.example", "fields": [ { "name": "customer_id", "type": "long" }, { "name": "name", "type": "string" }, { "name": "email", "type": ["null", "string"], "default": null } ] }
This schema describes a Customer record containing:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer ID.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Name.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Optional email.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The Avro specification defines primitive types, complex types, unions, schema resolution, and binary encoding.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Avro</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How Avro serialization works</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Getting Started with Confluent Schema Registry | PDF</span>
            <a href="https://images.openai.com/static-rsc-4/ke2nrsFWTNA_Ok2N4SmmryoJ9CrfDr36CH0wdKUHlE48har6lVyLHWFjsJKwZZQzNXDAo2XfTqY6Mmx_iZJg1N1t9ko1xUH4NJzeYgqjHtGyJh9umzYu-JKbHwHEuZEZwgd2ET1vkxQ8u4BJAHRpzHDFubo5tZICJUwINQDAp9E?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">slideshare.net</span>
            <a href="https://www.slideshare.net/slideshow/getting-started-with-confluent-schema-registry/238433511?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The producer defines or obtains an Avro schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The application creates a structured record.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The Avro serializer converts the record into binary data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The serialized data is stored or transmitted.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The consumer obtains the appropriate writer schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The Avro deserializer reconstructs the record.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important distinction: raw Avro binary data does not generally contain field names and type information for every field. The reader must have the appropriate schema to decode it.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro data types</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Type</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Description</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>null</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>No value</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>boolean</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>True or false</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>int</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>32-bit signed integer</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>long</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>64-bit signed integer</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>float</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>32-bit floating-point number</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>double</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>64-bit floating-point number</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>bytes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Sequence of bytes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>string</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>record</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Structured record</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>array</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Collection of values</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>map</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Key-value collection</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>enum</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Named set of symbols</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>union</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>One of multiple possible types</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro containers</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avro Object Container Files can store records together with schema information and additional metadata.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They are useful for writing batches of records into files rather than serializing every record as an isolated message.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro advantages</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compact binary serialization.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Supports complex data structures.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Supports schema evolution.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Language-independent.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Suitable for event streaming.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Efficient for repeated structured records.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro vs JSON</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Representation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Binary or JSON schema representation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Explicit schema</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Not required by the basic format</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Often compact</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Can be verbose</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parsing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Requires schema-aware libraries</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Widely supported basic parsing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema evolution</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Built-in schema resolution rules</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Requires additional conventions or validation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Best suited for</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Structured data pipelines and messaging</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>APIs and general interchange</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Practical Avro implementation using Python</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Install:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`pip install fastavro
Create an Avro file:
from fastavro import writer, reader, parse_schema schema = { "type": "record", "name": "Customer", "fields": [ {"name": "customer_id", "type": "long"}, {"name": "name", "type": "string"}, {"name": "email", "type": ["null", "string"], "default": None} ] } parsed_schema = parse_schema(schema) records = [ { "customer_id": 101, "name": "Rahul", "email": "rahul@example.com" }, { "customer_id": 102, "name": "Priya", "email": None } ] with open("customers.avro", "wb") as file: writer(file, parsed_schema, records) # Read the Avro file with open("customers.avro", "rb") as file: for record in reader(file): print(record)`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 7: 7. Apache Parquet */}
      <section id="section-7" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Columnar Analytics</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          7. Apache Parquet
        </h2>
        <div className="space-y-3">
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Parquet (@ApacheParquet) on X</span>
            <a href="https://images.openai.com/static-rsc-4/2TqnObITOj0pQfyEgJF8ZObHPugl59z2KhjQ6FTe1h73lVK2IU49Mdf3zkdSlRFW1MFXA1Gusad0AwTIcKg9w8feZl0DKCB4TvnFqL-IT10BIgODFobEMyzNepH_rAOJn_yuGEioQRa8yXJYQl2MTguDRpEXNygyfrp5wDDRZTA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Parquet</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Columnar storage for large-scale analytics and data lakes.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Apache Parquet is a column-oriented file format designed for efficient storage and retrieval of large datasets.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is widely used in:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data lakes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data warehouses.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Spark.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Hive.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Cloud analytics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Big data processing.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Unlike CSV and ordinary JSON, Parquet stores data using a structured columnar binary representation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The official Parquet documentation describes its column-oriented design, compression, encoding, and metadata organization.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why Parquet is important</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a company stores 500 million sales records:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>order_id</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>product_id</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>quantity</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>revenue</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>city</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1001</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>101</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>501</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>65000</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Pune</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1002</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>102</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>502</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4000</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Mumbai</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1003</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>103</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>503</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3000</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Delhi</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An analytical query may need only revenue:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT SUM(revenue) FROM sales;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A columnar format allows the engine to read the revenue column without necessarily reading every other column.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This reduces unnecessary data scanning.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Internal architecture of Parquet</span>
          </h3>
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
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A Parquet file is organized using several levels.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. File</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The complete .parquet file.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Row Group</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A horizontal group of rows within a file.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Column Chunk</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The portion of one column stored within a row group.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Page</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A lower-level storage unit inside a column chunk.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a Parquet file with 1 million records and five columns.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The writer may divide it into several row groups.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Each row group contains a separate column chunk for each column.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The reader can inspect the file metadata and select only the required column chunks.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Predicate pushdown</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose we execute:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`SELECT * FROM sales WHERE revenue > 50000;`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Parquet metadata can include statistics that help query engines determine whether certain row groups may contain qualifying records.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The engine may skip row groups that cannot satisfy the filter.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is one of the ways columnar storage improves analytical query efficiency.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compression and encoding</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parquet supports multiple encoding and compression strategies.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Examples include:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Dictionary encoding.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Run-length encoding.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Delta encoding.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Plain encoding.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snappy compression.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>GZIP compression.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Zstandard compression.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Encoding and compression are different.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Encoding changes how values are represented.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compression reduces the size of the encoded data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A writer may combine encoding and compression techniques.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reading Parquet using Python</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Install:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`pip install pandas pyarrow
Example:
import pandas as pd df = pd.read_parquet("sales.parquet") print(df.head()) print(df.info())
Write Parquet:
import pandas as pd data = { "order_id": [1001, 1002, 1003], "revenue": [65000, 4000, 3000], "city": ["Pune", "Mumbai", "Delhi"] } df = pd.DataFrame(data) df.to_parquet( "sales.parquet", engine="pyarrow", compression="snappy", index=False )`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>When to use Parquet</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data lake storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Large analytical datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Column-based queries.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historical data storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Batch ETL pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Cloud data warehouse ingestion.</span>
          </div>
        </div>
      </section>

      {/* SECTION 8: 8. Apache ORC */}
      <section id="section-8" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Analytical Storage</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          8. Apache ORC
        </h2>
        <div className="space-y-3">
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">ORC file format</span>
            <a href="https://images.openai.com/static-rsc-4/IejyJGuiUkFStdVVhCKFJGXiwxF2VfruQGEClK74UM4SVKK2HZX04J6CTMndnbR-qrywz1zCDrpk1gjUzZIaiNzZkc9sjyOm3aJ0GbUOMT2Crw9bZaS6pV52jOsrU3fylWdcwi1NDNhzfdyZ_I2ePzmwa2UOX2v8BOS24S3H0lw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache ORC</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Columnar storage optimized for analytical processing and large datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>ORC stands for Optimized Row Columnar.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is a column-oriented file format designed for large-scale analytical storage and processing, particularly in Hadoop-oriented ecosystems.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">ORC focuses on:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Efficient compression.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Column-wise reading.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Predicate pushdown.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Type-aware data encoding.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Large analytical scans.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The ORC documentation describes its stripe-based organization, column streams, and indexing support for analytical reads.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>orc.apache.org</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>ORC file architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Data Formats</span>
            <a href="https://images.openai.com/static-rsc-4/ttuRIBsF7eoGkryIED7v3MuZgC8aHxP_rhoEnSLIJ_WnwKiqwOTQu6Sp57h-on-m8lYB_5HmGBC05WHLKr4FMKyIv_PUkgQS4m1ecAUvj2QLDyQTz4-Xv08MvTU6DJlSvhH6ibE7CN1QeWv-O4NtFuY01n_dj1tLNgimaEgmBxk?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">svds.com</span>
            <a href="https://www.svds.com/dataformats/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An ORC file contains:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Stripes</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Large units containing rows and column data.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Index Data</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Metadata that can help readers locate relevant data.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Data Streams</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Encoded values organized by columns.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Footer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains schema information and file-level metadata.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Postscript</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Contains information needed to interpret the file's metadata and compression configuration.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How ORC works</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a table containing hundreds of millions of sales records.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The file is divided into stripes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Within each stripe, data is stored using column-oriented streams.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When a query requests only the revenue column, an ORC-aware engine can read the relevant column streams instead of reading every column.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>ORC also supports statistics and indexes that can help skip irrelevant data.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>ORC advantages</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Columnar storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Strong compression capabilities.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Type-aware encoding.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Efficient large-scale analytical scans.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Index and predicate-pushdown support.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Support for complex data types.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet vs ORC</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Parquet</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache ORC</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Storage layout</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Columnar</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Columnar</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Main use</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data lakes and analytics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analytics and Hadoop-oriented systems</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Organization</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Row groups and column chunks</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stripes and streams</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compression</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Multiple codecs</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Multiple codecs</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Statistics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Row-group and page-related metadata</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Stripe and row-index statistics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Ecosystem</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Broad cross-platform support</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Strong Hadoop/Hive heritage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Best choice</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Depends on ecosystem and workload</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Depends on ecosystem and workload</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Neither format is universally better. Benchmark both with representative data and the actual analytical engine before selecting a production standard.</p>
        </div>
      </section>

      {/* SECTION 9: 9. Apache Arrow */}
      <section id="section-9" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · In-Memory Columnar</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          9. Apache Arrow
        </h2>
        <div className="space-y-3">
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Arrow Flight SQL</span>
            <a href="https://images.openai.com/static-rsc-4/q41KvRcP2rjDcRfMUwwKtv7KSiozXGMDz_XrqkED2-w7-iaPgkJQ8oh2uBBegh3Ii0v7TwsgBLPGOiH1G-k5ItI6HvYjwvLcRInWl3TlKTMtc1hicOkY1F4Wo7-KWFEXFZIMuOluBVC9l_H7lDLr3CO76X0HbTCWU_C-xaWSdxY?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Arrow</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Standardized columnar memory representation and data interchange.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apache Arrow is different from Parquet and ORC.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parquet and ORC are primarily designed for persistent analytical file storage.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Arrow is primarily designed for efficient in-memory representation and exchange of analytical data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Its goals include:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Efficient memory layout.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Fast columnar processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data sharing across programming languages.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reduced serialization overhead.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Efficient analytical computation.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Arrow defines a language-independent in-memory columnar format and IPC mechanisms for exchanging record batches.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Apache Arrow v26.0.1+2</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why Arrow is needed</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a data processing pipeline:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Python Application | v DataFrame | v Java Processing Engine | v Analytics Application</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If every system uses a completely different internal data representation, data must repeatedly be converted.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This creates overhead.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Arrow provides a common memory representation that different systems can implement.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Arrow columnar layout</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Chapter 1: Getting Started with Apache Arrow | In-Memory Analytics with Apache Arrow</span>
            <a href="https://images.openai.com/static-rsc-4/XSNxv7QnYDqlxhez-0Yk6mNnoVPfKInJtxGlx1bj3H450k0PHjXZYrGeQiAD8eiy7jJimICDLzn67Ad5IRIeh89evg_68F0mH8DQd2Kda9JhMH6CCYGNWA1D7q00wWlzC-wl5hie1kVW4lXZcUaIuusrHGQlsiLZHjO_yyVbWKE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">subscription.packtpub.com</span>
            <a href="https://subscription.packtpub.com/book/data/9781801071031/2/ch02lvl1sec06/learning-the-terminology-and-physical-memory-layout?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Arrow uses arrays and buffers to represent data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an integer column can be represented using a contiguous values buffer and, when needed, a validity bitmap for null values.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This layout supports efficient scanning and vectorized processing.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Important Arrow concepts</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Array: A sequence of values of a particular data type.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Buffer: A contiguous region of memory.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validity bitmap: Indicates which values are valid and which are null.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Record Batch: A collection of arrays, one for each field, containing the same number of rows.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema: Describes field names and their data types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>IPC: Interprocess Communication format for sending or storing Arrow data.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Arrow vs Parquet vs ORC</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Arrow</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>ORC</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Main purpose</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>In-memory processing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Persistent analytical storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Persistent analytical storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Layout</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Columnar</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Columnar</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Columnar</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compression</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Depends on transport or implementation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Supports file compression</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Supports file compression</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Processing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>In-memory analytics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disk/object storage analytics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disk/object storage analytics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Typical use</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Fast data interchange</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data lakes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data lakes and Hadoop ecosystems</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Working with Arrow in Python</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Install:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`pip install pyarrow
Create an Arrow table:
import pyarrow as pa data = { "customer_id": [101, 102, 103], "name": ["Rahul", "Priya", "Aman"], "age": [23, 25, 22] } table = pa.table(data) print(table.schema) print(table)
Convert Pandas data into Arrow:
import pandas as pd import pyarrow as pa df = pd.DataFrame({ "id": [1, 2, 3], "amount": [1000, 2000, 3000] }) arrow_table = pa.Table.from_pandas(df) print(arrow_table)`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Arrow and zero-copy processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Zero-copy access means data can be shared or accessed without unnecessarily copying the underlying memory buffers.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This can reduce data movement between compatible components.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">However, zero-copy behavior is not automatic for every conversion, language, memory layout, or operation. Some transformations still require allocations and copies.</p>
        </div>
      </section>

      {/* SECTION 10: 10. Binary Serialization */}
      <section id="section-10" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Binary Protocols</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Binary Serialization
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Binary serialization converts structured data into a compact sequence of bytes rather than a human-readable text representation.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, JSON represents a customer as:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "customer_id": 101, "name": "Rahul", "age": 23 }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A binary serialization format represents the information using bytes according to a defined encoding and, in many cases, a schema.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Applications use binary formats because they can offer:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Smaller serialized messages.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Faster parsing in suitable workloads.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Efficient network communication.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Strongly typed data representation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Better integration with distributed processing systems.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Major binary serialization formats</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. Protocol Buffers (Protobuf)</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Data Serialization Formats: JSON, Protobuf, Avro</span>
            <a href="https://images.openai.com/static-rsc-4/jZIVBqNpyu0U24MiG8be6qjij40R8vNWUKJO9kPX-VTnAtaDwAFU8emnzwKdLSL1RdVhoK5YA8DqpeCwjN1T6N2jhDiRqb-oOoetX0FqJqrkas3IfieQUTTdDzWs7BXJunZFGw_eDlDMgfi4G6cmqWrhTFySHoD1ibWHmHBotUM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Protocol Buffers</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compact, schema-driven serialization for distributed applications and services.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Protobuf is a language-independent mechanism for serializing structured information.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It uses .proto files to define message structures and generates programming-language code for serialization and deserialization.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Protocol Buffers Documentation+1</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example schema:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">syntax = "proto3"; message Customer &#123; int64 customer_id = 1; string name = 2; string email = 3; int32 age = 4; &#125;</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The numbers are field identifiers used in Protobuf's binary wire format.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A compiler generates the code needed to work with these messages.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Protobuf is commonly used with gRPC for communication between microservices.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. MessagePack</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">MessagePack is a compact binary serialization format designed to represent structured data in a form similar to JSON.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It supports types such as:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Integers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Floating-point numbers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Strings.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Arrays.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Maps.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Binary data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Boolean and null values.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is useful when an application needs a compact representation without adopting a larger schema-management system.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>C. CBOR</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CBOR stands for Concise Binary Object Representation.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It provides a compact binary representation for structured information and is particularly relevant to constrained devices, IoT systems, and network protocols.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>D. Java Serialization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Java provides built-in object serialization mechanisms for representing certain Java objects as byte streams.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is useful for understanding serialization concepts in Java applications, but Java's native object serialization has security and compatibility concerns. For new distributed data interfaces, schema-based and language-independent formats are generally preferable.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Binary format comparison</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Format</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema requirement</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Typical use</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Explicit schema</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data pipelines and Kafka</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Protobuf</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>.proto definitions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>RPC and microservices</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>MessagePack</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>No mandatory external schema</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compact structured messaging</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CBOR</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>No mandatory external schema</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>IoT and constrained communication</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>File schema metadata</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analytical storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Arrow IPC</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Arrow schema</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>In-memory data interchange</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text vs binary serialization</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text formats</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Binary formats</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Human-readable</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Usually</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Usually not</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Message size</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Often larger</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Often smaller</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Manual debugging</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Easier</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Requires decoding tools</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema handling</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>May be external or embedded</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Often schema-aware</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parsing overhead</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Depends on format</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Often lower in suitable cases</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Examples</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON, XML, CSV</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro, Protobuf, MessagePack</span>
          </h3>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            Binary does not automatically mean faster or smaller. Actual performance depends on schema complexity, compression, implementation, data types, hardware, and workload.
          </div>
        </div>
      </section>

      {/* SECTION 11: 11. Data Compression Techniques */}
      <section id="section-11" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Compression & Encoding</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          11. Data Compression Techniques
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data compression is the process of reducing the amount of storage or network bandwidth required to represent information.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a data engineering pipeline generating 1 TB of sales records every day.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Storing and transferring the full dataset without compression can increase:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Storage costs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Network bandwidth requirements.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data transfer time.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Backup size.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Processing overhead.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compression helps reduce these costs.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Types of compression</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">There are two major categories:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Lossless compression.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Lossy compression.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. Lossless Compression</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Lossless compression reduces data size without losing the original information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The original data can be reconstructed exactly.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>GZIP.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Snappy.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>LZ4.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Zstandard (ZSTD).</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>DEFLATE.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is the preferred approach for most structured business data because losing information such as customer IDs, transaction amounts, or timestamps is unacceptable.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. Lossy Compression</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Lossy compression reduces the data size by discarding some information.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>JPEG images.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Lossy audio compression.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Certain video compression formats.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is generally not appropriate for exact transactional or structured analytical datasets.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common compression algorithms</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. GZIP</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">GZIP uses DEFLATE compression and is widely used for compressed text files and HTTP data transfer.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">File examples:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>.csv.gz</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>.json.gz</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>.jsonl.gz</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Snappy</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Snappy prioritizes fast compression and decompression with relatively moderate compression ratios.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It is commonly used in analytical storage workflows.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. LZ4</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>LZ4 is designed for high-speed compression and decompression.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It is useful when speed is important and extreme compression ratios are not required.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Zstandard (ZSTD)</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Zstandard provides configurable compression levels and is designed to offer a useful balance between compression ratio and speed.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Brotli</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Brotli is commonly used for compressing web content such as HTML, CSS, JavaScript, and other HTTP representations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compression comparison</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Algorithm</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Main strength</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Typical application</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>GZIP</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Broad compatibility</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text files, HTTP</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Snappy</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Fast compression/decompression</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analytical data files</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>LZ4</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Very fast processing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Storage and high-throughput pipelines</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>ZSTD</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Flexible speed/ratio trade-off</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data lakes and storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Brotli</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Effective web content compression</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Web delivery</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The best algorithm depends on the workload and the specific implementation.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Encoding vs compression</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This distinction is very important.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose we have:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AAAAAABBBBBBCCCCCC</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An encoding technique might represent repeated sequences compactly.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compression then uses techniques to reduce the size of the representation further.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, Run-Length Encoding (RLE) could represent repeated characters as:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6A6B6C</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>RLE is a simple illustrative technique, not a universal compression standard.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compression in Parquet</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parquet supports multiple encoding and compression methods.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import pandas as pd df = pd.DataFrame({ "customer_id": [101, 102, 103], "revenue": [5000, 6000, 7000] }) df.to_parquet( "sales.parquet", engine="pyarrow", compression="zstd", index=False )`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Measuring compression effectiveness</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compression ratio:</p>
          <div className="p-3.5 my-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 font-mono text-xs sm:text-sm flex items-center justify-center text-center font-bold shadow-2xs">
            <span>{`\\text{Compression Ratio} = \\frac{\\text{Original Size}}{\\text{Compressed Size}}`}</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Original file = 1,000 MB.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compressed file = 200 MB.</span>
          </div>
          <div className="p-3.5 my-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 font-mono text-xs sm:text-sm flex items-center justify-center text-center font-bold shadow-2xs">
            <span>{`\\text{Compression Ratio} = \\frac{1000}{200}=5`}</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">5:1 compression ratio</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Space reduction:</p>
          <div className="p-3.5 my-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-amber-950 font-mono text-xs sm:text-sm flex items-center justify-center text-center font-bold shadow-2xs">
            <span>{`\\text{Space Saved} = \\frac{1000-200}{1000}\\times100 =80\\%`}</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Important engineering trade-off</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Compression can reduce network and storage costs, but it also consumes CPU resources for compression and decompression.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data engineer must balance:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Storage size.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compression speed.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Decompression speed.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CPU availability.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Query performance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Network bandwidth.</span>
          </div>
        </div>
      </section>

      {/* SECTION 12: 12. Schema Definition and Evolution */}
      <section id="section-12" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Schema Evolution</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          12. Schema Definition and Evolution
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A schema describes the structure of data.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It defines what fields exist, what their data types are, which fields are optional, and sometimes what validation rules apply.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider a customer record:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "customer_id": 101, "name": "Rahul", "email": "rahul@example.com", "age": 23 }
A corresponding schema may define:`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Field</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Type</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Required</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>customer_id</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Integer</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>name</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>String</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Yes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>email</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>String</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>No</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>age</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Integer</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>No</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why schema definition matters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without a reliable schema, one application might send:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "customer_id": "101" }
While another expects:
{ "customer_id": 101 }`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The first uses a string, while the second uses a number.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Even though the values look similar, they are different types and may cause processing problems.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schemas help establish consistent expectations between producers and consumers.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common schema technologies</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avro Schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Protobuf definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>JSON Schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>XML Schema (XSD).</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Database table definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Arrow Schema.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema evolution</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Schema evolution is the process of changing data structures as business requirements evolve.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a company initially stores:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "customer_id": 101, "name": "Rahul" }`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Later, it needs to store a preferred language.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "customer_id": 101, "name": "Rahul", "preferred_language": "English" }`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is a schema change.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The challenge is ensuring that older applications and datasets continue to work.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Types of compatibility</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. Backward Compatibility</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A newer consumer can read data produced using an older schema.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Version 1 contains customer_id and name.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Version 2 adds an optional preferred_language field with a suitable default.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A consumer using Version 2 can interpret older records.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. Forward Compatibility</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An older consumer can read data produced using a newer schema, provided the format and compatibility rules allow it.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an older consumer may safely ignore an added field.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>C. Full Compatibility</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Both backward and forward compatibility are maintained for the relevant schema versions being compared.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>D. Transitive Compatibility</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The compatibility check is performed against all relevant previous versions rather than only the immediately previous version.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compatibility rules vary by schema format and registry implementation.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Confluent Documentation+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema change examples</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema change</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Typical risk</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Add an optional field</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Usually manageable</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Add a required field without a default</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Can break old records</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Remove a field</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Can break older consumers</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Rename a field</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Often treated as removing one field and adding another</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Change integer to string</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Potential incompatibility</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Change string to integer</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Potential data conversion errors</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Change nested structure</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>May break downstream parsing</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Safe schema evolution practices</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Introduce optional fields where appropriate.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Provide sensible defaults when supported by the format.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avoid silently changing existing field types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Maintain compatibility checks.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Version important data contracts.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Test old and new producers and consumers together.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Maintain migration plans for breaking changes.</span>
          </div>
        </div>
      </section>

      {/* SECTION 13: 13. Schema Registries */}
      <section id="section-13" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Schema Governance</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          13. Schema Registries
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A Schema Registry is a centralized service used to store, manage, version, and validate data schemas.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It becomes particularly important when multiple independent applications exchange structured messages.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why a schema registry is required</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine 20 microservices communicate using Kafka.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Each service produces or consumes structured events.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Without centralized schema management:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Different services may use different field names.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>One service may change a data type unexpectedly.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Consumers may fail after a producer update.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Teams may duplicate schema definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Historical messages may become difficult to interpret.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A Schema Registry helps establish a shared schema-management process.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">How to use OpenShift Service Registry | Red Hat Developer</span>
            <a href="https://images.openai.com/static-rsc-4/LP0EHXrao-maw3Fh5oXseSzj9FFneLb0GrhK94yIZ9_qMeqyU2fJfaiqOI_iXvkSQlxt24YzTekw7d8TlXvisftZy8dExack4FM5yRNFvTyk1Hee_Ijw_k7gbqkNBS5ZqSiE8hI6pcYztvbx7YkunBE5Xn3wfTntSSeUXig76BA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">developers.redhat.com</span>
            <a href="https://developers.redhat.com/articles/2021/10/04/get-started-openshift-service-registry?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How it works</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A simplified Kafka and Schema Registry workflow:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A producer defines a message schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The producer registers the schema or obtains its existing identifier.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The serializer encodes a message according to the schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The message is published to Kafka.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A consumer retrieves the corresponding schema when necessary.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The consumer deserializes the message.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The registry checks compatibility when new schema versions are registered.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The exact message framing and schema lookup behavior depend on the serializer and registry implementation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common schema registry technologies</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Confluent Schema Registry.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apicurio Registry.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>AWS Glue Schema Registry.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Avro schema registry workflow</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose an order service sends:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 1001, "customer_id": 101, "amount": 5000 }`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The producer uses an Avro schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The registry maintains the schema version and compatibility policy.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the order service later adds a field:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "order_id": 1001, "customer_id": 101, "amount": 5000, "currency": "INR" }`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The new schema must pass the configured compatibility rules before its use.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Important schema registry concepts</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema ID: Identifies a registered schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema Version: Indicates a particular version of a schema within its registry context.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Subject: A registry-specific name used to group related schema versions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compatibility Policy: Defines which schema changes are accepted.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Serializer: Encodes data using the appropriate schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Deserializer: Decodes data using the appropriate schema and resolution rules.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why data engineers need schema registries</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They help maintain:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Consistent event formats.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Controlled schema evolution.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Producer-consumer compatibility.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Centralized schema governance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reliable Kafka pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Easier debugging of data-contract failures.</span>
          </div>
        </div>
      </section>

      {/* SECTION 14: 14. Data Encoding and Decoding */}
      <section id="section-14" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Encoding & Low-Level Formats</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          14. Data Encoding and Decoding
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Encoding and decoding are fundamental operations in data exchange.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Encoding converts information into a representation suitable for a particular system or transport.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Decoding reconstructs the original logical information from that representation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>However, encoding, serialization, compression, and encryption are not the same thing.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Four concepts to distinguish</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Concept</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Purpose</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Encoding</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Change representation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>UTF-8, Base64</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Serialization</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Convert structures into a transferable form</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON, Avro</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compression</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reduce data size</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>GZIP, ZSTD</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Encryption</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Protect confidentiality</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>AES</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. Character Encoding</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Computers store text as bytes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Character encoding defines how text characters map to byte sequences.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common examples:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>ASCII.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>UTF-8.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>UTF-16.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>UTF-8 is widely used for web data and modern data interchange.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Python UTF-8 example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">text = "Hello नमस्ते" encoded = text.encode("utf-8") decoded = encoded.decode("utf-8") print(encoded) print(decoded)</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Encoding ensures that different systems interpret character data consistently when they agree on the same character encoding.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. Base64 Encoding</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Base64 represents arbitrary binary data using a text-safe alphabet.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is often used when binary data needs to be placed inside text-based protocols or formats.</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import base64 message = "Hello Data Engineering" encoded = base64.b64encode( message.encode("utf-8") ) decoded = base64.b64decode(encoded).decode("utf-8") print(encoded) print(decoded)`}</code>
            </pre>
          </div>
          <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-950 text-xs sm:text-sm my-3">
            <strong className="text-orange-900 font-bold block mb-1">Architecture Insight:</strong>
            Base64 is not encryption. Anyone who obtains the Base64 string can decode it.
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>C. Binary Encoding</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Avro and Protobuf convert structured values into binary representations according to their serialization rules.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Structured Record | v Binary Serializer | v Byte Sequence | v Binary Deserializer | v Structured Record</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>D. URL Encoding</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>URL encoding represents certain characters using percent-encoded byte sequences.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>data engineering</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">May become:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>data%20engineering</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is useful for encoding query parameters and URL components correctly.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>E. Endianness</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Endianness describes the byte ordering used to represent multi-byte values.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Big-endian: Most significant byte first.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Little-endian: Least significant byte first.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, the hexadecimal integer:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>0x12345678</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Big-endian:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12 34 56 78</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Little-endian:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>78 56 34 12</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A binary protocol must define byte order where its encoding uses multi-byte representations.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why encoding knowledge matters</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data engineer must be able to diagnose:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Unicode decoding errors.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Invalid byte sequences.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Corrupted CSV imports.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incorrect Base64 decoding.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Binary serialization mismatches.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Endianness problems in low-level data exchange.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Inconsistent API character encoding.</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider font-mono my-2">
            Part 3 — REST API Architecture and Data Extraction
          </div>
        </div>
      </section>

      {/* SECTION 15: 15. REST API Architecture */}
      <section id="section-15" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · REST APIs</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          15. REST API Architecture
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>REST stands for Representational State Transfer.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is an architectural style used to design distributed systems around resources and a uniform interface.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>REST APIs commonly use HTTP for communication.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HTTP defines a stateless client-server request/response protocol, resource identifiers, representations, headers, and request methods.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>RFC Editor+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is an API?</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>API stands for Application Programming Interface.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An API allows one software system to communicate with another through a defined interface.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A weather application obtains weather information from an external weather service.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A data engineering pipeline obtains order data from an e-commerce API.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A payment service communicates with an external payment gateway.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>REST API architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Čo je REST API a ako funguje? Sprievodca pre začiatočníkov | Skillmea</span>
            <a href="https://images.openai.com/static-rsc-4/3lXYpnAUtN1VF_Gnm845RsBz84cpMH9zTvHXGsm7Ib51nUrtkgf9xNJWrystcYgSM6uyOSpq5wqyG5oIxrwRIbprorzDIPVK8k9eV8K5ejmGtGlS8tkvpcXqN-j085CPTZhsHTLk6LXd_FR1rRWCB7YfNiV2_atOBAUT9X8g4J4?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">skillmea.sk</span>
            <a href="https://skillmea.sk/blog/co-je-rest-api?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A typical architecture contains:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. API Client</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The application or data pipeline making a request.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. API Gateway or Server</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Receives and processes requests.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Endpoint</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A URL identifying the resource or operation.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. HTTP Method</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Defines the requested operation.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Request Headers</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Provide authentication, content types, and other metadata.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6. Request Body</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains information sent to the server when required.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7. Response</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Contains a status code, headers, and potentially a response body.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example REST endpoint</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">https://api.example.com/v1/customers</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The endpoint identifies a collection of customer resources.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common HTTP methods</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Method</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Purpose</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>GET</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Retrieve resource representations</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Read customer records</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>POST</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Submit data for resource-specific processing</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create an order`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>PUT</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Replace a resource representation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Replace customer profile</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>PATCH</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Partially modify a resource</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Update customer email
DELETE
Delete a resource
Delete a temporary record`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>HTTP request example</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`GET /v1/customers/101 HTTP/1.1 Host: api.example.com Accept: application/json Authorization: Bearer YOUR_ACCESS_TOKEN`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>HTTP response example</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HTTP/1.1 200 OK Content-Type: application/json
{ "customer_id": 101, "name": "Rahul", "email": "rahul@example.com" }`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Important HTTP status codes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Code</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Meaning</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Typical action</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>200</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>OK</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Process successful response</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>201</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Created</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Resource successfully created</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>204</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>No Content</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Success without response body</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>400</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Bad Request</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Fix invalid request</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>401</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Unauthorized</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Authenticate or refresh credentials</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>403</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Forbidden</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Check permissions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>404</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Not Found</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Check resource or endpoint</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>409</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Conflict</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Resolve resource conflict</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>429</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Too Many Requests</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Respect rate limits and retry policy</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>500</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Internal Server Error</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Investigate server-side failure</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>502</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Bad Gateway</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Investigate upstream service</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>503</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Service Unavailable</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Retry according to server guidance</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>REST design principles</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Resource-oriented endpoints.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Consistent HTTP method semantics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Appropriate status codes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Stateless request handling.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Resource representations such as JSON.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Proper error responses.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Versioning and compatibility.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Secure communication through HTTPS.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>REST vs RPC vs SOAP</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>REST</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>RPC</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>SOAP</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Main idea</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Resource-oriented interface</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Remote procedure calls</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Protocol-based message exchange</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common transport</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>HTTP</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>HTTP or other transports</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Commonly HTTP</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data format</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Often JSON</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Varies</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>XML-based SOAP envelope</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Structure</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Resources and HTTP semantics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Methods and procedures</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Operations and contracts</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Typical use</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Web and data APIs</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Microservices and service communication</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Enterprise integrations</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>REST is an architectural style, not a particular JSON protocol.</span>
          </div>
        </div>
      </section>

      {/* SECTION 16: 16. API Authentication and Authorization */}
      <section id="section-16" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · API Security</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          16. API Authentication and Authorization
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When integrating external APIs, applications must establish their identity and determine what operations they are allowed to perform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Two important concepts are:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authentication: Who are you?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authorization: What are you allowed to access?</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a data pipeline connects to a payment gateway.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Authentication confirms the identity of the pipeline.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authorization determines whether it can:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Read payment transactions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Read customer data.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create refunds.`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Modify payment configuration.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A pipeline may be authenticated successfully but still be forbidden from accessing certain endpoints.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common authentication methods</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. API Keys</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>An API key is a credential associated with a client or application.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`GET /v1/orders X-API-Key: YOUR_API_KEY
Advantages:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Simple to implement.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Common in external services.</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Suitable for service-to-service integrations where supported.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Can be misused if exposed.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>May provide broad access depending on the API.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Requires secure storage and rotation.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. Bearer Tokens</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A bearer token is sent through the HTTP Authorization header.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Authorization: Bearer YOUR_ACCESS_TOKEN</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Possession of the token allows the holder to use the associated permissions. Therefore, tokens must be protected during storage and transmission.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>RFC Editor+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>C. OAuth 2.0</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">OAuth 2.0 is an authorization framework that allows applications to obtain limited access to protected resources.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Typical flow:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Application | v Authorization Server | v Access Token | v Protected API | v Requested Data</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It supports different authorization flows depending on the application type and security requirements.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>RFC Editor+1</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For server-to-server integration, the client credentials flow is commonly relevant when the service supports it.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>D. Basic Authentication</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Uses a username and password, encoded into the Authorization header.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It should only be used over HTTPS and where the API explicitly supports it. Encoding credentials in Base64 does not encrypt them.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>E. Mutual TLS (mTLS)</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Both sides authenticate using certificates during the TLS connection.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can provide stronger service-to-service identity assurance when supported and appropriately configured.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Authentication vs authorization</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Authentication</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Authorization</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Verifies identity</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Determines access permissions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>API key or token validation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Scopes, roles, and policies</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Establishes who is connecting</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Establishes what they can do</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Validate application</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Allow read-only access</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Secure API integration practices</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Never hardcode API keys in source code.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Store credentials in environment variables or a secrets manager.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use HTTPS.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Apply least-privilege permissions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Rotate credentials when required.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avoid logging access tokens.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Handle token expiration and refresh.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validate permissions before performing sensitive operations.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import os import requests api_token = os.environ.get("API_ACCESS_TOKEN") if not api_token: raise RuntimeError("API_ACCESS_TOKEN is not configured") url = "https://api.example.com/v1/customers" response = requests.get( url, headers={ "Authorization": f"Bearer {api_token}", "Accept": "application/json" }, timeout=30 ) response.raise_for_status() customers = response.json() print(customers)`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 17: 17. API Pagination and Rate Limits */}
      <section id="section-17" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · API Reliability</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          17. API Pagination and Rate Limits
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When extracting data from external APIs, two important challenges are pagination and rate limiting.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>A. API Pagination</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Pagination is the process of dividing a large API response into smaller portions called pages.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine an e-commerce company has 1 million customer records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An API that attempts to return all 1 million customers in one response could create:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Excessive memory consumption.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Large network transfers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Slow response times.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Request timeouts.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Increased server load.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Instead, the API returns a limited number of records at a time.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example without pagination</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`GET /customers`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The server attempts to return all 1 million records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This is usually inefficient.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example with pagination</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`GET /customers?page=1&limit=100 GET /customers?page=2&limit=100 GET /customers?page=3&limit=100`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Each request returns a smaller set of records.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">REST API Essentials: What Every Developer Needs to Know</span>
            <a href="https://images.openai.com/static-rsc-4/tPyyD1svs1DJbg_8I64f9efHCaI1XhVrzo1ltOD8v_DjLuOL1QE8NYovMjDuWxq729IjyAIqvUIAk6hOVJo_pa9jDRELLO-z24-Dhoa42ERcz6zc-X60WifvWylyHDutOgu4dMPns-BU4Rp-Ehqz67li8Ojc-Tkw0eZLvolqYIM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">javarevisited.substack.com</span>
            <a href="https://javarevisited.substack.com/p/rest-api-fundamentals-from-basics?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Types of API pagination</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Offset-Based Pagination</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Uses an offset to specify where the records should begin.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`GET /orders?limit=100&offset=0 GET /orders?limit=100&offset=100 GET /orders?limit=100&offset=200
SQL equivalent:
SELECT * FROM orders ORDER BY order_id LIMIT 100 OFFSET 200;
Advantages:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Easy to understand.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Simple to implement.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Allows jumping to a specific page.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Large offsets can become expensive.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Concurrent insertions and deletions can shift page boundaries.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Records may be duplicated or skipped if the underlying dataset changes during extraction.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Page-Based Pagination</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Uses a page number and a page size.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`GET /customers?page=1&page_size=100 GET /customers?page=2&page_size=100`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is easy to use but can have similar consistency and performance issues to offset-based pagination.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Cursor-Based Pagination</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Uses a cursor that identifies where the next request should continue.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`GET /orders?limit=100
Response:
{ "data": [ { "order_id": 1001, "amount": 5000 }, { "order_id": 1002, "amount": 3000 } ], "next_cursor": "eyJvcmRlcl9pZCI6MTAwMn0=" }
The next request uses the returned cursor:
GET /orders?limit=100&cursor=eyJvcmRlcl9pZCI6MTAwMn0=
Advantages:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Efficient continuation for large datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avoids increasingly large offsets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Can provide more stable traversal when designed around an ordered dataset.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Disadvantages:</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Usually cannot jump directly to an arbitrary page.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Requires server-side cursor management or cursor construction.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Cursor expiration and consistency must be handled.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Pagination comparison</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Type</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Mechanism</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Main advantage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Page-based</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Page number</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Simple</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Offset-based</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Starting record position</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Easy to understand</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Cursor-based</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Continuation token</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Better for large, changing datasets</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data engineering recommendation: Prefer cursor-based pagination for large API extractions when the source API supports it reliably.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>B. API Rate Limits</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Rate limiting controls how many API requests a client can make within a specific time period.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an external API may allow:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>100 requests per minute.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>1,000 requests per hour.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>10,000 requests per day.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a data pipeline sends 500 requests within one minute when the API allows only 100.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The server may reject additional requests.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The HTTP response may be:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`HTTP/1.1 429 Too Many Requests Retry-After: 60`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">HTTP 429 indicates that the client has exceeded a request rate limit. The server may provide a Retry-After header to indicate when to retry.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>RFC Editor+1</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>How to handle rate limits</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Respect Retry-After</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Do not immediately send another request after receiving a rate-limit response.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Exponential Backoff</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Gradually increase the waiting time after repeated failures.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">First failure: 1 second Second failure: 2 seconds Third failure: 4 seconds Fourth failure: 8 seconds Fifth failure: 16 seconds</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Add Jitter</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Jitter introduces random variation into retry delays.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It prevents many clients from retrying simultaneously.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Use Request Batching</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Where the API supports it, retrieve multiple records in one request.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Maintain Request State</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Save progress so that extraction can resume without starting again from the beginning.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6. Implement Concurrency Limits</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Do not send unlimited parallel requests.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Practical Python example: Retry handling</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import random import time import requests def request_with_retry(url, headers=None, max_retries=5): for attempt in range(max_retries): try: response = requests.get( url, headers=headers, timeout=30 ) if response.status_code == 429 or response.status_code == 503: retry_after = response.headers.get("Retry-After") if retry_after and retry_after.isdigit(): wait_time = float(retry_after) else: wait_time = min(2 ** attempt, 60) wait_time += random.uniform(0, 1) if attempt == max_retries - 1: response.raise_for_status() time.sleep(wait_time) continue response.raise_for_status() return response except requests.RequestException: if attempt == max_retries - 1: raise wait_time = min(2 ** attempt, 60) wait_time += random.uniform(0, 1) time.sleep(wait_time) raise RuntimeError("Request failed after all retries")`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a basic example. Production systems should distinguish retryable status codes from permanent failures, parse both supported Retry-After forms, and avoid retrying non-idempotent operations unless they have a safe idempotency mechanism.</p>
        </div>
      </section>

      {/* SECTION 18: 18. Extracting Data from External APIs */}
      <section id="section-18" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Ingestion Pipelines</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          18. Extracting Data from External APIs
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>API-based extraction is one of the most common activities in data engineering.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Many organizations do not own all the systems that generate their data.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>They consume information from external platforms.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment gateways.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CRM systems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Marketing platforms.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>E-commerce services.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Weather services.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Financial platforms.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Social media platforms.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Shipping and logistics services.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A data engineer needs to extract this information and integrate it into internal systems.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>API-based extraction architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Data Engineering System Design: Ingesting External APIs Into a Modern Data Warehouse | by Sarath Sagi | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/reqfoGIVekQyYqI17v66om9RdDqofN9uC-gqhkAlvPA9avAWR7j4PhrxsohuXoBiXyjVby6Y65tHUjFm5dkNKels8lmBoy-1M4fcuchINfa2EmxoEVi2SxdlkPJXaGHihe04VSVZD54_0XuDMuXzRK_XUPapKMICCoz1d_GMP5M?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/itversity/data-engineering-system-design-ingesting-external-apis-into-a-modern-data-warehouse-eecb715da1b2?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A typical extraction pipeline:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">External API | v HTTP Request | v Authentication | v Pagination | v Data Validation | v Serialization / Transformation | v Raw Data Storage | v Data Processing | v Data Warehouse</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 1 — Connect to an API</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example endpoint:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">https://api.example.com/v1/orders</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 2 — Authenticate</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Provide the appropriate API key or access token.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 3 — Extract data</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Send requests and receive structured responses.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 4 — Handle pagination</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Continue fetching records until the API indicates there are no more pages.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 5 — Validate the response</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Check:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Expected fields.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Correct data types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Missing values.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Duplicate records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Timestamp consistency.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Response structure.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 6 — Store the raw response</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">data/ raw/ orders/ ingestion_date=2026-11-09/ orders_001.jsonl orders_002.jsonl</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 7 — Transform and load</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Convert the raw records into a suitable analytical format such as Parquet and load them into the warehouse.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Complete practical example: API data extraction</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This example uses a fictional API contract that returns data and next_cursor fields.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import os import json import time import random from pathlib import Path import requests BASE_URL = "https://api.example.com/v1/orders" API_TOKEN = os.environ.get("API_ACCESS_TOKEN") OUTPUT_DIR = Path("data/raw/orders") OUTPUT_DIR.mkdir(parents=True, exist_ok=True) if not API_TOKEN: raise RuntimeError("Missing API_ACCESS_TOKEN") session = requests.Session() session.headers.update({ "Authorization": f"Bearer {API_TOKEN}", "Accept": "application/json" }) def fetch_page(cursor=None, max_retries=5): params = {"limit": 100} if cursor: params["cursor"] = cursor for attempt in range(max_retries): try: response = session.get( BASE_URL, params=params, timeout=30 ) if response.status_code in (429, 503): retry_after = response.headers.get("Retry-After") if retry_after and retry_after.isdigit(): delay = float(retry_after) else: delay = min(2 ** attempt, 60) delay += random.uniform(0, 1) if attempt == max_retries - 1: response.raise_for_status() time.sleep(delay) continue response.raise_for_status() payload = response.json() if not isinstance(payload.get("data"), list): raise ValueError("Invalid API response: data must be a list") return payload except (requests.RequestException, ValueError): if attempt == max_retries - 1: raise time.sleep(min(2 ** attempt, 60) + random.random()) raise RuntimeError("Unable to retrieve API data") def extract_orders(): cursor = None page_number = 1 while True: payload = fetch_page(cursor) records = payload["data"] output_file = OUTPUT_DIR / f"orders_{page_number:05d}.jsonl" with output_file.open("w", encoding="utf-8") as file: for record in records: if not isinstance(record, dict): raise ValueError("Invalid order record") file.write( json.dumps(record, ensure_ascii=False) + "\\n" ) print(f"Saved page {page_number}: {len(records)} records") cursor = payload.get("next_cursor") if not cursor: break page_number += 1 if __name__ == "__main__": extract_orders()`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Important production considerations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The above example demonstrates the basic workflow. A production API ingestion system should additionally implement:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Persistent cursor checkpointing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incremental extraction using update timestamps where supported.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Duplicate detection and idempotent loading.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Atomic file writes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Structured logging and metrics.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Authentication token renewal.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Retry classification.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema validation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data quality checks.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>API-specific pagination rules.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Full Load vs Incremental Load</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Full Load</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Extracts the complete dataset.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>All customer records → Internal database</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Useful for initial ingestion or periodic complete refreshes.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Incremental Load</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Extracts only newly created or modified records.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Records updated after 2026-11-08 → Internal database</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A common API query might use:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`GET /orders?updated_since=2026-11-08T00:00:00Z`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>However, the exact query parameters depend on the external API.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Incremental extraction reduces unnecessary data transfers, but engineers must handle late updates, deletion tracking, timestamp precision, and pagination consistently.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>API ingestion challenges</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Challenge</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Engineering solution</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>API failures</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Retry and error handling</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Rate limiting</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Backoff and request throttling</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Large datasets</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Pagination</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Duplicate records</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Idempotency and deduplication</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema changes</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Validation and schema evolution</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Missing records</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Incremental reconciliation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Authentication expiry</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Secure token refresh</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Inconsistent timestamps</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Standardized time handling</span>
          </h3>
        </div>
      </section>

      {/* SECTION 19: 19. Webhooks and Event-Based Integration */}
      <section id="section-19" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 19
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Event-Driven Integration</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          19. Webhooks and Event-Based Integration
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A webhook is a mechanism through which one application sends an HTTP request to another application when a particular event occurs.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It is a useful way to receive event notifications without continuously polling an external API.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Polling vs webhook</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Suppose a payment gateway needs to inform your application whenever a customer completes a payment.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Polling approach</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your application repeatedly asks:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Has a payment been completed? Has a payment been completed? Has a payment been completed?</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, it sends a request every 30 seconds.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>This creates unnecessary API requests when nothing has changed.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Webhook approach</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When payment completion occurs, the payment gateway sends an event notification directly to your registered endpoint.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">The Role of Webhook Feature in Payment Gateways</span>
            <a href="https://images.openai.com/static-rsc-4/82OZm-G9Er1IFcwQrAmdi6y6IOuZ2JZvylgkZTzV2twD-Ydgojs1vJr99HTQMtqQlvlQ4BQvZfOjbDhyyVo8tqqeg1EDml5Qs9dNSFzMtm69IYmxhl3PyCI04pFXudLFQlpEwLH05_3_ElVQ3gwPFl40wz5mn344M7DWbM4Q6gA?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">linkedin.com</span>
            <a href="https://www.linkedin.com/pulse/role-webhook-feature-payment-gateways-vatsyayan-kishlay--5yk8c?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example webhook flow</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Customer Completes Payment | v Payment Gateway | v Event: payment.completed | v HTTP POST Webhook | v Your Backend Endpoint | v Validate Signature | v Store Event | v Process Payment Record</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example webhook payload</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "event_id": "evt_1001", "event_type": "payment.completed", "created_at": "2026-11-09T10:30:00Z", "data": { "payment_id": "pay_101", "order_id": 1001, "amount": 5000, "currency": "INR", "status": "completed" } }`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Building a webhook receiver using Flask</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Install:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`pip install flask
Example:
from flask import Flask, request, jsonify app = Flask(__name__) @app.post("/webhooks/payment") def payment_webhook(): event = request.get_json(silent=True) if not isinstance(event, dict): return jsonify({"error": "Invalid payload"}), 400 event_id = event.get("event_id") event_type = event.get("event_type") if not event_id or not event_type: return jsonify({"error": "Missing event details"}), 400 # Production: # 1. Verify the provider's webhook signature. # 2. Check whether event_id has already been processed. # 3. Persist the event to durable storage. # 4. Queue processing for background workers. print(f"Received event: {event_id}") return jsonify({"received": True}), 200 if __name__ == "__main__": app.run(port=5000)`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a simplified demonstration. A production receiver must verify the provider's signature before trusting the payload.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Webhook security</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Important security practices:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Signature verification</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The sending platform often signs webhook requests using a secret key or signing mechanism.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The receiving application must verify the signature according to the provider's exact specification.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. HTTPS</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Webhook endpoints should use HTTPS.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Idempotency</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The same event may be delivered more than once.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Your system must avoid processing it as a new business operation each time.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Event persistence</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Store the received event before considering it safely accepted.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Background processing</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For slow processing tasks, acknowledge a valid event quickly and process it through a durable queue.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6. Replay protection</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use event timestamps, signatures, and unique identifiers to defend against unauthorized replay attempts according to the provider's security design.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Webhook delivery problems</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A webhook may fail because:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Your server is unavailable.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Network connectivity is interrupted.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The request times out.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Your endpoint returns an error.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The receiving system cannot validate the event.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Many providers retry unsuccessful webhook deliveries, but their retry schedules differ.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Therefore, consumers must support duplicate delivery and reliable processing.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Polling vs webhooks</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Feature</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Polling</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Webhooks</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Communication</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Client requests repeatedly</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Provider sends event</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Latency</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Depends on polling interval</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Usually lower</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Unnecessary requests</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Possible</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reduced</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Infrastructure</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Simpler client</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Requires accessible receiver</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Reliability</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Requires pagination and checkpoints</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Requires retries and deduplication</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Best use</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Periodic data extraction</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Event notifications</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Event-driven integration using CloudEvents</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>An additional standard worth learning</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">CloudEvents |</span>
            <a href="https://images.openai.com/static-rsc-4/g82ju8oMhZiuvUpo_tuZkxJWCSQ-jGHncjfDFt6GtxM2qs0yyrQPRdABWksQpifiJlkw-Tr8eWHr3BjbPo4cpaLT8FEEF2PmCwYyWlYXha5Pd177-3Py18q5nMfhU85JRix6XJE8Kniy_T9lldjV8d5ifmjmQjBGWop1VIAtEyE?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CloudEvents</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A common structure for describing events across different systems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Different systems often represent similar business events in different ways.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">CloudEvents provides a standard event envelope containing context attributes and event data.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>GitHub+1</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "specversion": "1.0", "id": "evt-1001", "source": "/payments/service", "type": "com.example.payment.completed", "subject": "payment/pay-101", "time": "2026-11-09T10:30:00Z", "datacontenttype": "application/json", "data": { "order_id": 1001, "amount": 5000, "currency": "INR" } }`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The standard attributes describe the event, while the data section carries the application-specific payload.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>CloudEvents can be used with HTTP, messaging systems, and event platforms.</span>
          </div>
        </div>
      </section>

      {/* SECTION 20: 20. Data Contracts and Source Compatibility */}
      <section id="section-20" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 20
          </span>
          <span className="text-xs font-mono text-stone-500">Part 3 · Data Governance & Contracts</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          20. Data Contracts and Source Compatibility
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Data contracts define the expectations and agreements between systems that produce and consume data.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They are especially important when different engineering teams own different parts of a data platform.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The payments team produces transaction events.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The data engineering team consumes those events.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The finance team relies on downstream revenue reports.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">If the payment team changes its event format without informing the data engineering team, the ingestion pipeline may fail.</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Even worse, it may continue running while silently producing incorrect information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data contracts help prevent these issues.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>What is a data contract?</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A data contract is a structured agreement describing how data should be produced, validated, interpreted, and maintained.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It commonly includes:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Field names and data types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Nullability requirements.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Business definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data quality rules.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Ownership information.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Freshness expectations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compatibility requirements.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Access and privacy requirements.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example: Payment data contract</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine a payment service publishes transaction records.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The contract may define:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Field</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Type</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Requirement</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>payment_id</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>String</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Required, unique</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>order_id</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Integer</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Required</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>amount</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Decimal</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Required, non-negative</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>currency</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>String</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Required</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>payment_status</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>String</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Required</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>created_at</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Timestamp</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Required, UTC</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">It can also define business rules:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Every payment must have a unique payment identifier.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Amounts cannot be negative.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Currency must follow an agreed currency-code convention.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment status must be one of the accepted states.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Every event must have a creation timestamp.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data contract architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">📜 Part 2 — Data Contracts That Survive Real Life — Schemas, evolution, ownership &amp; PII | by Chaos To Clarity | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/zeUzU6Gub4dITnD6An3Y-1wLypSEFUWUt-GIrTiJ_mF2OKh5ByKCR95bc27NV9UXmFXK2g7cBvmqlnpVVLvaerwtZBIYdv8IUfvWq2iGpj7VCXME8TXrwOKKIF1vrR_E0nPbKCejLKfLZqqE1t4GTHYtCc0uk8RdmByAnPGNcxI?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">medium.com</span>
            <a href="https://medium.com/%40sonal.sadafal/part-2-data-contracts-that-survive-real-life-schemas-evolution-ownership-pii-ebdd9e6b52b0?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Main components of a data contract</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Schema</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Defines the structure and data types.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Semantic definitions</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Explains what each field means.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, amount may mean gross payment amount or net amount after fees.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The distinction matters because both may be numeric but represent different business concepts.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Quality expectations</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Examples:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>payment_id must be unique.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>amount must be greater than or equal to zero.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>created_at must not be NULL.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Ownership</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Defines who maintains the dataset and is responsible for changes.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Freshness requirements</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment events should become available within five minutes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Daily sales reports should be refreshed by 7 AM.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6. Compatibility requirements</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Defines how schema changes can be introduced without breaking consumers.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data contracts vs schemas</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data Contract</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Defines structural information</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Defines a broader producer-consumer agreement</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Specifies fields and types</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Includes schemas and business rules</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Focuses on data representation</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Covers quality, ownership, semantics, and expectations</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Usually technically focused</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Includes technical and business requirements</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">A schema is an important part of a data contract, but a data contract is broader than a schema.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Source compatibility</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Source compatibility means ensuring that changes in the source system do not unexpectedly break downstream consumers.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Consider an external CRM system.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Initially it produces:</p>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`{ "customer_id": 101, "customer_name": "Rahul", "email": "rahul@example.com" }
The source application changes the field:
{ "customer_id": 101, "full_name": "Rahul", "email": "rahul@example.com" }`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>The downstream pipeline still expects customer_name.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>It may fail.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Or worse, it may populate the customer name with NULL values.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Strategies for source compatibility</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Versioned APIs</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use separate API versions when introducing breaking changes.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Example:</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>/api/v1/customers /api/v2/customers</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Schema validation</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validate incoming payloads against the expected schema.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. Backward-compatible changes</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Introduce optional fields and safe defaults.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. Data transformation layer</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Map changing source names and types into a stable internal model.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. Contract testing</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Test that source payloads continue satisfying the expectations of downstream consumers.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6. Change communication</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Ensure that producers communicate planned breaking changes and migration timelines.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Example of a data quality validation contract</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`def validate_payment(payment): required_fields = [ "payment_id", "order_id", "amount", "currency", "payment_status", "created_at" ] for field in required_fields: if field not in payment or payment[field] is None: raise ValueError(f"Missing required field: {field}") if not isinstance(payment["payment_id"], str): raise TypeError("payment_id must be a string") if payment["amount"] < 0: raise ValueError("Payment amount cannot be negative") allowed_statuses = { "pending", "completed", "failed", "refunded" } if payment["payment_status"] not in allowed_statuses: raise ValueError("Invalid payment status") return True`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a simple application-level validator. Production contracts should also define decimal precision, currency semantics, timestamp validation, uniqueness, and other quality rules.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Why data contracts matter in modern data engineering</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">They help organizations achieve:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Reliable data pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Better collaboration between teams.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Fewer unexpected schema changes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Early detection of source problems.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Consistent business definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Better data governance.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>More dependable downstream analytics.</span>
          </div>
        </div>
      </section>

      {/* SECTION 21: Choosing the Right Data Format: Decision Matrix */}
      <section id="section-21" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 21
          </span>
          <span className="text-xs font-mono text-stone-500">Part 4 · Format Selection</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Choosing the Right Data Format: Decision Matrix
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">An important skill for data engineers is knowing which format to use for a particular workload.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Different formats are designed for different purposes. Using the wrong format can increase storage consumption, network costs, processing time, and integration complexity.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Complete format comparison</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Format</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Type</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Primary use</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema support</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CSV</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text, row-oriented</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Simple tabular exchange</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>External</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>TSV</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text, row-oriented</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Tabular text exchange</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>External</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text, hierarchical</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>REST APIs and applications</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Optional external</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON Lines</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text, record-oriented</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Logs and streaming ingestion</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Optional external</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>XML</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Text, hierarchical</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Enterprise integrations</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>DTD / XSD</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Binary, schema-based</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Events and distributed pipelines</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Built-in</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Binary, columnar</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data lakes and warehouses</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Embedded</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>ORC</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Binary, columnar</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Analytical storage</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Embedded</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Arrow</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>In-memory, columnar</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Fast data processing and interchange</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Built-in</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Protobuf</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Binary, schema-based</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Microservices and RPC</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>.proto definitions</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>MessagePack</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Binary</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Compact messaging</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>No mandatory external schema</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>CBOR</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Binary</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>IoT and structured interchange</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>No mandatory external schema</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Which format should you use?</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>When working with REST APIs, web applications, and flexible nested data.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">File:Apache Avro Logo 2023.svg - Wikimedia Commons</span>
            <a href="https://images.openai.com/static-rsc-4/1gc_HgmWWQFF1GbxU2FQTsEIGKujdxw0PWlu6L2vtvJQYaI8u2BsEcgiTsZeRyX7ziefi9tIBoFuguv614LaP_GJDtzspO9ADA04T_-2aBXwIqRhGq5UibVKswP8IeddaxwECQCOeo1IFb1LdDOwre3gnUe7628SjhfXG_eOTts?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>When exchanging schema-governed events and messages between distributed services.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">TPC-H benchmark of Hyper, DuckDB and Datafusion on Parquet files | Architecture &amp; Performance</span>
            <a href="https://images.openai.com/static-rsc-4/SVyGAnoucmOlT4QJg0OTDQ9jVA67I81P70i-f85Ydl0xx0bPiYfy5l9YPu-6UaE6sY-oaG16WCQGmUUiAQURKSWvdkyTXZUsFmu2uSBrUMuJs9PzlsCqAE1dvXN_XL-gibT4AePaal9K40diKBQUd656VrbiElIEpaWgipQxHJU?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Parquet</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>When storing large historical datasets for analytical queries in a data lake.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache orc logo - free Icon PNG, SVG</span>
            <a href="https://images.openai.com/static-rsc-4/XI6DbVtTL9_3YKuudniSi-1OAghnNmD2iaJ7TTVYp0Ugyx5Xoz8ssoGbjgvayJYPHXpE8Lj0ulOdJv5cV38ZdONwis4UIuadQX5Mapxoiq19AQ4Vxsyi_FXCKju4UOyHdet7Mue1YfVSMxrT0OUyzwtby-93c92teis8OcQ0Cgs?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>ORC</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">When working with analytical storage, particularly in Hadoop and Hive-oriented environments.</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Visual identity | Apache Arrow</span>
            <a href="https://images.openai.com/static-rsc-4/gvQfvRWVb5T8LVPcu56CnJEXSW62Sl0SiLcfR37bSNiDTKMxbO5g8QQamNunUEnbFqYgFulQa4dYjUCtX68XgNDdyZP2qYNEr2QgEiwI5dHWM2a-5CEhnxKOcHbW4DvlQmmgcIYFuH2c-82GE21XSt87ruoBp7eVz1h81Uktfzs?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Arrow</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>When exchanging large datasets efficiently between in-memory processing systems.</span>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Protocol Buffer Basics: Go</span>
            <a href="https://images.openai.com/static-rsc-4/bImLQOyPDjCIU1VNItmAZeh9J7LuVM8XSe9bc0uLw72Vrjtg-51qFNPRp5XBjYgNfRgsE-pnm53M2ZlmNW35fx2mjYL5yETfJls1esFj3Gu_siWFSPSrlOAJbJdUXdxM3Yqv1uf1mfcgSIc852s0-EO_SaM3doLRGOwjzv1JKhM?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Protobuf</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>When designing compact, typed communication contracts for microservices and RPC.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Practical architecture — How different formats work together</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>A production data engineering pipeline rarely relies on only one format.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For example, an e-commerce organization might use:</p>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">From Data Chaos to Real-Time Insights: Building a Data Lakehouse with Spark, Kafka, and Iceberg | by Gamal Elkoumy | Medium</span>
            <a href="https://images.openai.com/static-rsc-4/h4Hl30fsmVdW3KLDd5rCR6X6LQnmuceb53c9Rzamj8-kwlhFvi5QzD_vXmmr3RapUklK6kLvw_1tRDZTLE07ziwQGTv49B8CfCMvYQC5qZSTQ0s8r-KUXd68eIUPbM8LlHbTHcTmoFINbsXnm29wwZ79qzIqLmvTIk2JCUOKtlw?purpose=inline" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">elkoumy.medium.com</span>
            <a href="https://elkoumy.medium.com/from-data-chaos-to-real-time-insights-building-a-data-lakehouse-with-spark-kafka-and-iceberg-0b3aee4b75e9?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">External REST APIs | | JSON v API Ingestion Service | v Raw Data Storage JSON / JSONL | v Validation and Transformation | | Avro Events v Apache Kafka | v Processing Engine Apache Spark | | PyArrow v Data Lake Parquet Files | v Data Warehouse | v Analytics and BI</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Here, each format serves a different purpose:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>JSON handles external API communication.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>JSONL preserves raw records.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avro provides schema-based event serialization.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Kafka transports events.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Arrow supports in-memory processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parquet stores compressed analytical datasets.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This is a common architectural pattern, not a mandatory combination. The actual stack depends on data volume, latency, compatibility, and infrastructure.</p>
        </div>
      </section>

      {/* SECTION 22: Practical Lab: End-to-End E-Commerce Data Integration Pipeline */}
      <section id="section-22" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 22
          </span>
          <span className="text-xs font-mono text-stone-500">Part 5 · Capstone Lab</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Practical Lab: End-to-End E-Commerce Data Integration Pipeline
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Capstone Project — E-commerce API Data Integration and Storage System</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 6 capstone</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">This project combines serialization, multiple data formats, REST API extraction, compression, schema validation, and data integration.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Project scenario</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Imagine you are a data engineer at an e-commerce organization.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The business receives information from:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer APIs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Product APIs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Order APIs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment APIs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment completion webhooks.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your task is to build a data ingestion system that collects these records, validates them, serializes them, and stores them in an analytical data lake.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 1 — Build the source integration</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Connect to REST APIs for:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Products.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Orders.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payments.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Authentication.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>API requests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Pagination.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Rate-limit handling.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Retry mechanisms.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Incremental extraction.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Use a mock API or an API with an explicit dataset and usage policy for the initial implementation.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 2 — Store raw JSON records</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a raw data directory:
ecommerce_pipeline/ │ ├── data/ │ ├── raw/ │ │ ├── customers.jsonl │ │ ├── products.jsonl │ │ ├── orders.jsonl │ │ └── payments.jsonl │ │ │ ├── processed/ │ │ │ └── archive/ │ ├── schemas/ │ ├── customer_schema.json │ ├── order_schema.json │ └── payment_schema.avsc │ ├── extraction/ │ ├── customer_api.py │ ├── product_api.py │ ├── order_api.py │ └── payment_api.py │ ├── transformation/ │ ├── validate.py │ ├── transform.py │ └── convert_parquet.py │ ├── webhooks/ │ └── payment_webhook.py │ └── main.py`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Preserve the original API responses where appropriate so that data can be reprocessed later.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 3 — Implement serialization</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Implement the following transformations:</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Python Objects | v JSON Serialization | v JSON Lines Files | v Avro Serialization | v Parquet Conversion</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compare the generated outputs.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Measure:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>File sizes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Serialization time.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Deserialization time.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compression ratios.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema validation results.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 4 — Implement Avro schema management</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create schemas for:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Customer.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Order.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Product.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Payment.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Introduce a new optional field in the customer schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Test whether old records can still be read by the new consumer.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement schema versioning and compatibility checks.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 5 — Convert data into Parquet</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Use PyArrow.</span>
          </div>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`import pandas as pd df = pd.read_json( "data/raw/orders.jsonl", lines=True ) df.to_parquet( "data/processed/orders.parquet", engine="pyarrow", compression="zstd", index=False ) print("Parquet conversion completed")`}</code>
            </pre>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">For large datasets, use chunked or streaming processing instead of loading the entire JSONL file into memory.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 6 — Implement webhooks</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create a payment webhook endpoint.
Requirements:`}</code>
            </pre>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Receive payment completion events.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Verify the webhook signature.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Validate the event schema.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Prevent duplicate event processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Save events into durable storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Send events to a background processing queue.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 7 — Implement data contracts</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Define a payment data contract.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Validate:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Required fields.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data types.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Unique event identifiers.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Valid payment statuses.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Non-negative payment amounts.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Valid timestamps.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Test both valid and invalid payloads.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Step 8 — Implement monitoring</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Track:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>API request count.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>API failure count.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Rate-limit events.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Records extracted.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Duplicate events.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema validation failures.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>File sizes.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Serialization time.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data freshness.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Pipeline processing time.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Final deliverables</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Your completed project should include:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>REST API extraction scripts.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>JSON and JSONL ingestion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avro schema definitions.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Schema compatibility tests.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parquet data conversion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compression benchmarks.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Webhook event receiver.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data contract validation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Error handling and logging.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>End-to-end architecture documentation.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Final goal: Build a working ingestion system that accepts data from external services, processes multiple serialization formats, handles changing schemas, and produces reliable analytical datasets.</p>
        </div>
      </section>

      {/* SECTION 23: Module 6 — Learning Outcomes */}
      <section id="section-23" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 23
          </span>
          <span className="text-xs font-mono text-stone-500">Review · Learning Outcomes</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 6 — Learning Outcomes
        </h2>
        <div className="space-y-3">
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">After completing this module, learners should be able to:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Explain serialization and deserialization.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Understand row-oriented and column-oriented data representations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Read, write, and process CSV and TSV datasets.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Work with nested JSON and JSON Lines files.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Understand XML structures, namespaces, and schema validation.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement Apache Avro serialization and deserialization.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Understand Apache Parquet's row groups, column chunks, and pages.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Explain Apache ORC's stripes, streams, and metadata.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Understand Apache Arrow's in-memory columnar architecture.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Work with binary formats such as Protobuf, MessagePack, and CBOR.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Understand compression, encoding, and serialization trade-offs.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement schema definitions and schema evolution.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Work with schema registries and compatibility policies.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Perform encoding and decoding using UTF-8, Base64, and binary formats.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Understand REST API architecture and HTTP methods.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement API authentication and authorization.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Extract datasets using pagination and incremental API ingestion.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Handle API rate limits, retries, and failures.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build and secure webhook integrations.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement data contracts and source compatibility checks.</span>
          </div>
        </div>
      </section>

      {/* SECTION 24: Recommended Practical Assignments (16 Tasks) */}
      <section id="section-24" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 24
          </span>
          <span className="text-xs font-mono text-stone-500">Review · Practical Assignments</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Recommended Practical Assignments (16 Tasks)
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Assignment</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Practical task</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>1. Serialization Fundamentals</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Serialize and deserialize Python objects using JSON.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>2. Row vs Column</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compare row-based and columnar data processing.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>3. CSV and TSV</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build a CSV/TSV ingestion and validation script.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>4. JSON and JSONL</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Process large JSON Lines datasets incrementally.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>5. XML</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parse XML records and validate using XSD.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>6. Avro</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create schema-based Avro files and test compatibility.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>7. Parquet</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Convert CSV and JSON into Parquet.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>8. ORC</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create and query ORC datasets using a compatible engine.`}</code>
            </pre>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>9. Arrow</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build and exchange Arrow tables using PyArrow.</span>
          </div>
        </div>
      </section>

      {/* SECTION 25: 10. Binary Serialization */}
      <section id="section-25" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 25
          </span>
          <span className="text-xs font-mono text-stone-500">Part 2 · Binary Protocols</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          10. Binary Serialization
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Compare Protobuf, Avro, and JSON.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>11. Compression</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Benchmark GZIP, Snappy, LZ4, and ZSTD.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>12. Schema Registry</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Integrate a schema registry with an event producer and consumer.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>13. REST API</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build an authenticated API extraction pipeline.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>14. Pagination and Rate Limits</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Implement cursor pagination and exponential backoff.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>15. Webhooks</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Build a secure, idempotent payment webhook receiver.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>16. Data Contracts</span>
          </h3>
          <div className="p-4 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs overflow-x-auto leading-relaxed border border-neutral-800 my-3">
            <pre className="overflow-x-auto [scrollbar-width:thin]">
              <code>{`Create contract validation and compatibility tests.`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* SECTION 26: Recommended Learning Resources & Standards */}
      <section id="section-26" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 26
          </span>
          <span className="text-xs font-mono text-stone-500">Review · Learning Resources</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Recommended Learning Resources & Standards
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>These are useful for combining university-level concepts with practical implementation.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Resource</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Main topics</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Designing Data-Intensive Applications</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Serialization, data encoding, distributed systems</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Fundamentals of Data Engineering</span>
          </h3>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Data integration, ingestion, architecture</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Avro Specification</span>
            <a href="https://avro.apache.org/docs/1.12.0/specification/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Avro schema and binary serialization</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Parquet Documentation</span>
            <a href="https://parquet.apache.org/docs/overview/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Columnar storage and file structure</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache ORC Documentation</span>
            <a href="https://orc.apache.org/docs/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>ORC architecture and storage</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Apache Arrow Format Documentation</span>
            <a href="https://arrow.apache.org/docs/format/Columnar.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Memory layout and IPC</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Protocol Buffers Documentation</span>
            <a href="https://protobuf.dev/overview/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Binary serialization</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">JSON RFC 8259</span>
            <a href="https://www.rfc-editor.org/rfc/rfc8259.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>JSON specification</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">HTTP Semantics — RFC 9110</span>
            <a href="https://www.rfc-editor.org/rfc/rfc9110.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>REST and HTTP fundamentals</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">Schema Registry Evolution Guide</span>
            <a href="https://docs.confluent.io/platform/current/schema-registry/fundamentals/schema-evolution.html?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Schema compatibility</span>
          </h3>
          <div className="my-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-semibold text-stone-800 truncate">OAuth 2.0 Specification</span>
            <a href="https://www.rfc-editor.org/info/rfc6749/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
              <span>Reference Link</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>API authorization</span>
          </h3>
        </div>
      </section>

      {/* SECTION 27: Data Engineering Curriculum Roadmap & Next Steps */}
      <section id="section-27" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 27
          </span>
          <span className="text-xs font-mono text-stone-500">Roadmap · Curriculum Alignment</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Data Engineering Curriculum Roadmap & Next Steps
        </h2>
        <div className="space-y-3">
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 1 — Data Engineering Foundations</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data engineering ecosystem and fundamentals.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 2 — Python Programming for Data Engineering</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Programming, data structures, automation, and data processing.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 3 — Advanced SQL and Relational Database Systems</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>SQL, relational models, queries, and database operations.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Module 4 — Data Modeling and Database Design</span>
          </h3>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>ERDs, normalization, dimensional modeling, and SCD.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Module 5 — Database Internals and Performance Engineering</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Storage engines, indexing, query execution, transactions, and optimization.</span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>Current module</span>
          </h3>
        </div>
      </section>

      {/* SECTION 28: Module 6: Data Formats, Serialization and Data Integration Specification */}
      <section id="section-28" className="bg-white rounded-2xl border border-[#e7e3da] p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 28
          </span>
          <span className="text-xs font-mono text-stone-500">Course Roadmap</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Module 6: Data Formats, Serialization and Data Integration Specification
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Data exchange, binary formats, compression, APIs, webhooks, and contracts.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Next: Module 7 — Data Ingestion and ETL/ELT Pipeline Engineering</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Build reliable batch and incremental data ingestion pipelines, transformations, orchestration, and error-handling systems.</p>
          <h3 className="text-base sm:text-lg font-bold text-stone-900 mt-5 mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f97316]" />
            <span>My recommendation for PrepSpaces</span>
          </h3>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Keep all 20 topics in Module 6. They create an important bridge between database fundamentals and actual production data pipeline engineering.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Give extra practical attention to these six areas:</p>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Avro and Schema Registry: Essential concepts for schema-governed event pipelines.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Parquet and ORC: Important for data lakes and analytical storage.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Arrow: Helps learners understand high-performance in-memory data processing.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>REST API extraction: A core practical skill for integrating external data sources.</span>
          </div>
          <div className="flex items-start gap-2.5 my-1.5 text-stone-700 text-sm sm:text-base">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
            <span>Pagination and rate limits: Necessary for reliable large-scale API ingestion.</span>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">Webhooks and Data Contracts: Important for event-driven architectures and dependable producer-consumer relationships.</p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">The capstone should require students to use multiple formats together rather than simply studying each format independently. That will help them understand how modern data engineering systems exchange, validate, transform, and store information in production.</p>
        </div>
      </section>

    </div>
  );
}
